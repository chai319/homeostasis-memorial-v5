from pathlib import Path
import json
import re

OUTPUT = Path(__file__).resolve().parent
GAME = OUTPUT.parent
BASE = json.loads((GAME / 'game-v4.js').read_text().strip().split('=', 1)[1].strip().removesuffix(';'))
V4 = {scene['id']: scene for scene in BASE['scenes']}
SPEAKER = dict(zip(
    ['地','主','アミ','頼','澄','蓄','備','赤路','中枢先生'],
    ['narr','me','ami','yori','insulin','glucagon','cortisol','redcell','hypothalamus'],
))
NOTE_SOURCES = {
    'ami': {
        'でんぷんの長い束を、短い束に分ける。': ['p_ami_2','cv_ami_07'],
        '口で始めた下ごしらえが、小腸でも続く。': ['p_ami_2','cv_ami_07','tr_ami_1'],
        'アミは吸収前の台、澄と蓄は糖が吸収された後の持ち場。': ['tr_ami_2','fs2_ex_ami'],
    },
    'yor': {
        '異物を大きな袋のようなものへ取り込み、分解して片づける。': ['p_yor_2','tr_yor_1'],
        '取り込んだ物の一部を目印として、別の係へ見せる。': ['p_yor_2','cv_yor_07'],
        '片づけた後も、傷の周りを修復するのを支える。': ['kz_yor_2','tr_yor_2','fs2_ex_yor'],
    },
}
REPLIES = {'ami': ('ami_toast', ['light','dark','']), 'yor': ('yor_pace',['slow','normal',''])}
SPOTS = {'ami':['cake','park'],'yor':['library','aquarium']}

def voice(record, field, text):
    female = text.replace('〔一人称〕','あたし').replace('〔より姉さん／より兄さん〕','より姉さん')
    male = text.replace('〔一人称〕','俺').replace('〔より姉さん／より兄さん〕','より兄さん')
    female = female.replace('〔困ったわ／困ったな〕','困ったわ')
    male = male.replace('〔困ったわ／困ったな〕','困ったな')
    record[field] = female
    if female != male:
        record.setdefault('fm', {})[field] = {'v':male,'on':'t'}

def line(raw, sid='', key=''):
    when = re.match(r'^［(\w+)=(\w*)］', raw)
    if when:
        assert when[1] == REPLIES[key][0] and when[2] in REPLIES[key][1]
        raw = raw[when.end():]
    label, text = raw.split('｜', 1)
    who = SPEAKER[label]
    result = {'who':who}
    voice(result,'text',text)
    if when:
        result['v5Memory'] = list(when.groups())
    if who not in ('narr','me'):
        result['expr'] = 'neutral'
    actor = 'ami' if key=='ami' else 'yori'
    if who == actor:
        if sid == 'p_'+key+'_3':
            result['act'] = 'v5-pivotal'
        elif sid == 'p_'+key+'_4':
            result['act'] = 'v5-trust'
        elif sid.startswith('dt_'):
            result['act'] = 'v5-date'
        elif (key=='ami' and sid=='fs2_cafe_ami') or (key=='yor' and sid=='fs1_tent_yor'):
            result['act'] = 'v5-special'
        elif sid=='end_'+key:
            cue = '半分こにして' if key=='ami' else '今日のこの絵'
            result['act'] = 'v5-accepted' if cue in text or key=='yor' and when else 'v5-confess'
        elif key=='ami' and (sid=='kz_ami_1' or '蓄くらい' in text):
            result['expr']='happy'
        elif key=='yor' and 'あら。' in text:
            result['expr']='surprised'
    if sid=='end_'+key and who=='narr' and (text.startswith('二人で木の影') or text.startswith('アミが笑い')):
        result['v5Cast']=[]
    return result

def effects(raw,key):
    result = {k:int(v) for k,v in re.findall(r'\b(f|t|u|rs)([+-]\d+)',raw) if int(v)!=0}
    if found:=re.search(r'\b(ami_toast|yor_pace)=(\w+)',raw):
        assert found[1]==REPLIES[key][0] and found[2] in REPLIES[key][1]
        result['v5_memory']=list(found.groups())
    if found:=re.search(r'\btopic=(\w+)',raw):
        result['v5_topic'] = [key,found[1]]
    return result

def compile_scene(key,sid,title,body):
    source_id = sid.replace('_'+key,'_adh')
    original = V4[source_id]
    scene = {'id':sid,'title':title,'char':key,'v5Script':True,
             **{k:original[k] for k in ['day','date','place','time','trans','bgm'] if k in original},
             'lines':[],'choices':[],'clues':[]}
    n = int(sid.rsplit('_',1)[-1]) if sid.rsplit('_',1)[-1].isdigit() else None
    if sid.startswith('p_'):
        scene['place']='keep' if n in [1,4] else ('cookroom' if key=='ami' else 'infirmary')
        if n>=3:
            scene['bgm']='feedback'
    if sid.startswith('kz_'):
        scene['place']=('corridor' if n==1 else 'cookroom') if key=='ami' else ('infirmary' if n==1 else 'shoebox')
    if sid.startswith('cv_'):
        if 5<=n<=8: scene['need']=[['f','>=',30 if n==6 else 40]]
        if n>=9: scene['need']=[['ident','>=',1]]
    if sid.startswith('dt_') and n<=2:
        scene['dateSpot']=SPOTS[key][n-1]
    if sid.startswith('tw_') and n>=3:
        scene['need']=[['f','>=',n*10-20]]
    if sid.startswith('tr_'):
        scene['place']='cookroom' if key=='ami' else 'infirmary'
    if sid.startswith(('ev_assign_', 'fs2_ex_')) and key=='ami':
        scene['place']='cookroom'
    if sid.startswith('fs2_crisis_'):
        scene['day']='crisis'
        scene['place']='cookroom' if key=='ami' else 'infirmary'
    for note, scene_ids in NOTE_SOURCES[key].items():
        if sid in scene_ids:
            scene['clues'].append({'char':key,'text':note})

    dest=scene['lines']
    choice=None
    option=None
    for row in map(str.rstrip, body.splitlines()):
        if row.startswith('**選択'):
            prompt=re.sub(r'^選択[1-9]?\s*','',row.strip('*')) or 'どう答える？'
            choice={'prompt':prompt,'kind':'rival' if sid.startswith('rv_') else 'care','options':[]}
            if scene['choices'] and dest:
                choice['pre']=dest
            scene['choices'].append(choice)
            dest=scene['after']=[]
        elif match:=re.fullmatch(r'- \*\*(.*?)\*\* ［(.*?)］',row):
            assert choice,sid
            option={'response':[],'effects':effects(match[2],key)}
            voice(option,'label',match[1])
            choice['options'].append(option)
        elif row.startswith('  - ') and '｜' in row:
            option['response'].append(line(row[4:],sid,key))
        elif '｜' in row and not row.startswith(('|','>')):
            dest.append(line(row,sid,key))

    if not scene.get('after'):
        scene.pop('after',None)
    assert scene['lines'] and all(q['options'] and all(o['response'] for o in q['options']) for q in scene['choices']),sid
    if original.get('goto'):
        raw=json.dumps(original['goto'],ensure_ascii=False)
        raw=re.sub(r'(?<=_)adh(?=(?:_|")|$)|(?<=")adh(?=")',key,raw)
        scene['goto']=json.loads(raw)
    if sid=='ev_assign_'+key:
        scene['goto']['cond']=[['ryo' if key=='ami' else 'kiku','>=',40],['rika' if key=='ami' else 'gaku','>=',20]]
    if sid.startswith('ev_assign_ami_'):
        scene['goto']['effects']['ryo']=scene['goto']['effects'].pop('kiku')
    if sid=='lake_end_'+key:
        scene['goto']={'type':'next','id':'DAY','effects':{'t':4}}
    if sid=='fs2_cafe_ami':
        scene['goto']['effects']={'ami':3}
    if sid=='fs1_tent_yor':
        scene['goto']['effects']['yor']=8
    frames=[*scene['lines'],*scene.get('after',[]),
            *(l for q in scene['choices'] for l in q.get('pre',[])),
            *(l for q in scene['choices'] for o in q['options'] for l in o['response'])]
    scene['cast']=list(dict.fromkeys(l['who'] for l in frames if l['who'] not in ('me','narr')))
    return scene

out={}
for key, name in [('ami','糖解アミ'),('yor','白守頼')]:
    source=(OUTPUT / ('恒常性メモリアルV5_'+name+'_脚本.md')).read_text()
    export={}
    export['scenes']=[compile_scene(key,*m.groups()) for m in re.finditer(r'^### `([^\x60]+)`　(.+?)\n([\s\S]*?)(?=^### |^## |\Z)',source,re.M)]
    expected={s['id'] for s in BASE['scenes'] if re.search(r'_adh(?:_|$)',s['id']) and not s['id'].startswith('end_pair')}
    assert len(export['scenes'])==58 and {s['id'].replace('_'+key,'_adh') for s in export['scenes']}==expected,key
    assert sum(len(s['choices']) for s in export['scenes'])==source.count('**選択'),key
    pools=export['pools']={}
    for kind,num,body in re.findall(r'^\| (\w+) \| (\d+) \| (.+?) \|$',source,re.M):
        if kind=='call':
            pools.setdefault(kind,{})[num]=body
        else:
            pools.setdefault(kind,[]).append([line(l) for l in body.split('<br>')])
    assert set(pools)==set(BASE['pools']['adh']) and all(len(items)==len(BASE['pools']['adh'][kind]) for kind,items in pools.items()),key
    export['clues']=list(NOTE_SOURCES[key])
    out[key]=export
(GAME/'v5-extra-scripts.js').write_text('/* 糖解アミ・白守頼の脚本から生成した表示・分岐データ。 */\nglobalThis.HMV5ExtraScripts = Object.freeze('+json.dumps(out,ensure_ascii=False,indent=2)+');\n')
