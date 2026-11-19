from pathlib import Path
import json
import re

OUTPUT = Path(__file__).resolve().parent
GAME = OUTPUT.parent
SCRIPT = OUTPUT / '恒常性メモリアルV5_水守の双子ルート_脚本.md'
V4 = GAME / 'game-v4.js'
raw = V4.read_text().strip()
base = json.loads(raw.split('=', 1)[1].strip().removesuffix(';'))
references = {scene['id']: scene for scene in base['scenes']}
source = SCRIPT.read_text()
speakers = {
    '地': 'narr', '主': 'me', '瑞': 'twin', '水守': 'adh', '頼': 'yori',
    'アミ': 'ami', 'つむぎ': 'tsumugi', '汐里': 'shiori', '赤路': 'redcell',
    '中枢先生': 'hypothalamus',
}
starter_poses = {
    'p_mzt_3': 'v5-pivotal', 'p_mzt_4': 'v5-trust',
    'dt_mzt_1': 'v5-date', 'dt_mzt_2': 'v5-date', 'dt_mzt_3': 'v5-date',
    'end_mzt': 'v5-confess',
}
places = {'p_mzt_1': 'keep', 'p_mzt_2': 'staffroom', 'p_mzt_3': 'staffroom',
          'p_mzt_4': 'keep', 'kz_mzt_1': 'shoebox', 'kz_mzt_2': 'shoebox',
          'tr_mzt_2': 'lab'}
lines_by_key = {
    'mzt_post': ['p_mzt_2', 'tr_mzt_2'],
    'mzt_gate': ['v5_hike_break', 'cv_mzt_07'],
    'mzt_ease': ['v5_hike_break', 'kz_mzt_1'],
}
clue_text = dict(re.findall(r'^\| `(mzt_\w+)` \| ([^|]+?) \|', source, re.M))
assert set(clue_text) == set(lines_by_key)

def variant(record, fld, text):
    record[fld] = text.replace('{瑞}', '瑞葉')
    if '{瑞}' in text:
        record.setdefault('fm', {})[fld] = {'v': text.replace('{瑞}', '瑞太'), 'on': 't'}

def line(raw, sid=''):
    speaker, content = raw.split('｜', 1)
    who = speakers[speaker]
    record = {'who': who}
    variant(record, 'text', content)
    if who in {'twin', 'tsumugi', 'shiori', 'yori', 'ami', 'adh', 'hypothalamus', 'redcell'}:
        record['expr'] = 'neutral'
    if who == 'twin' and sid in starter_poses:
        record['act'] = starter_poses[sid]
        if sid == 'end_mzt' and ('先に決めなくて' in content or '手をつないで' in content):
            record['act'] = 'v5-accepted'
    if sid == 'end_mzt' and content.startswith('木の影を出て'):
        record['v5Cast'] = []
    if who == 'tsumugi' and '鉛筆が先でした' in content:
        record['act'] = 'v5-mimic'
    if who == 'shiori' and ('別に書くよ' in content or 'ナトリウム' in content):
        record['act'] = 'v5-check'
    if who == 'yori' and sid == 'v5_sports_roll_call':
        if content.startswith('困ったわ'):
            record['act'] = 'v5-special'
            record['fm'] = {'text': {'v': '困ったな。誰か、腕章をひとつ貸してくれる？', 'on': 't'}}
        if content.startswith('あら。'):
            record['fm'] = {'text': {'v': 'ああ。急ぐといつもこうなるね。白守頼です。困ったら、その腕章を目印にして。', 'on': 't'}}
    if sid == 'v5_hike_break':
        if who == 'twin':
            if '空欄のまま' in content or '静かに' in content or '書き直せる' in content:
                record['expr'] = 'happy'
            elif '鉛筆が先に' in content:
                record['expr'] = 'worried'
        if who == 'tsumugi' and '本人の返事だった' in content:
            record['act'] = 'v5-special'
        if who == 'shiori' and '汐里。みんな' in content:
            record['act'] = 'v5-special'
    return record

def effects(raw):
    found = {key: int(value) for key, value in re.findall(r'\b([ftu])([+-]\d+)', raw)}
    if '協力記録+1' in raw:
        found['rs'] = 1
    if match := re.search(r'mzt_reply=(now|later)', raw):
        found['mzt_reply'] = match[1]
    if match := re.search(r'topic=(\w+)', raw):
        found['mzt_topic'] = match[1]
    return {key: value for key, value in found.items() if value != 0}

def convert_scene(sid, title, body):
    ref = references.get(sid.replace('_mzt', '_adh'), {})
    scene = {'id': sid, **{k: ref[k] for k in ['day', 'date', 'place', 'time', 'bgm', 'trans'] if k in ref},
             'char': 'mzt', 'title': title, 'lines': [], 'choices': [], 'clues': [], 'v5Script': True}
    if sid in places:
        scene['place'] = places[sid]
    if sid.startswith(('p_mzt_3', 'p_mzt_4')):
        scene['bgm'] = 'feedback'
    if sid in ['v5_sports_roll_call', 'v5_hike_break']:
        scene.update({'day': 'w2d1' if 'sports' in sid else 'w5d3',
                      'place': 'field' if 'sports' in sid else 'mountain',
                      'time': '放課後' if 'sports' in sid else '昼前', 'bgm': 'keep'})
    if sid == 'v5_hike_break':
        scene['v5Outfit'] = 'fieldwork'
        scene['goto'] = {'type': 'if', 'cond': [['tai', '>=', 35]], 'then': 'ev_hike_top', 'else': 'DAY'}
    if sid.startswith('cv_mzt_'):
        n = int(sid.split('_')[-1])
        if n in range(5, 9):
            scene['need'] = [['f', '>=', 30 if n == 6 else 40]]
        if n >= 9:
            scene['need'] = [['ident', '>=', 1]]
        if n == 5:
            scene['schoolOnly'] = True
    if sid in ['dt_mzt_1', 'dt_mzt_2']:
        scene['dateSpot'] = 'pier' if sid.endswith('_1') else 'library'
    if sid in ['tw_mzt_3', 'tw_mzt_4']:
        scene['need'] = [['f', '>=', 10 if sid.endswith('_3') else 20]]
    for key, ids in lines_by_key.items():
        if sid in ids:
            scene['clues'].append({'char': 'mzt', 'text': clue_text[key]})

    dest = scene['lines']
    choice = None
    option = None
    replies = None
    response_preference = None
    for row in map(str.rstrip, body.splitlines()):
        if row.startswith('**選択'):
            prompt = re.sub(r'^選択[1-9]?\s*', '', row.strip('*')) or 'どう答える？'
            pre = [] if not scene['choices'] else dest
            choice = {'prompt': prompt, 'kind': 'rival' if sid.startswith('rv_mzt_') else 'care', 'options': []}
            if pre:
                choice['pre'] = pre
                scene.pop('after', None)
            scene['choices'].append(choice)
            dest = scene['after'] = []
        elif match := re.fullmatch(r'- \*\*(.*?)\*\* ［(.*?)］', row):
            assert choice, (sid, row)
            option = {'response': [], 'effects': effects(match[2])}
            variant(option, 'label', match[1])
            choice['options'].append(option)
        elif sid == 'end_mzt' and re.fullmatch(r'- (?:`now`|`later`|未設定)', row):
            replies = True
            response_preference = row[2:].strip('`')
        elif row.startswith('  - ') and '｜' in row:
            record = line(row[4:], sid)
            if replies:
                record['v5Reply'] = response_preference if response_preference != '未設定' else ''
                dest.append(record)
            else:
                assert option, (sid, row)
                option['response'].append(record)
        elif re.match(r'^[^ >｜]+｜', row):
            record = line(row, sid)
            if sid == 'v5_hike_break' and (row.startswith('瑞｜帰り、隣') or row.startswith('主｜うん。少し黙って') or row.startswith('瑞｜あっていい。')):
                record['v5HikeClose'] = True
                if row.startswith('瑞｜帰り、隣'):
                    fallback = line('瑞｜気をつけてね。次の角で待ってる。', sid)
                    fallback['v5HikeClose'] = False
                    dest.append(fallback)
            dest.append(record)
    if 'after' in scene and not scene['after']:
        del scene['after']
    if sid == 'v5_sports_roll_call':
        scene['goto'] = {'type': 'next', 'id': 'DAY', 'effects': {'mzt': 6}}
    if ref.get('goto'):
        original = json.dumps(ref['goto'], ensure_ascii=False)
        # Reuse V4.5 returns and event rewards for corresponding authored slots.
        original = re.sub(r'(?<=_)adh(?=(?:_|")|$)|(?<=")adh(?=")', 'mzt', original)
        scene['goto'] = json.loads(original)
    if sid == 'lake_end_mzt':
        scene['goto'] = {'type': 'next', 'id': 'DAY', 'effects': {'t': 4}}
    if sid == 'ep_rv_mzt':
        scene['goto'] = {'type': 'next', 'id': 'ep_wake'}
    if sid == 'fs2_crisis_mzt':
        scene['day'] = 'crisis'
    if sid.startswith('rv_mzt_3'):
        for record in [*scene['lines'], *scene.get('after', [])]:
            if record['who'] == 'adh':
                record['expr'] = 'neutral'
    all_lines = [*scene['lines'], *scene.get('after', []),
                 *(l for q in scene['choices'] for l in q.get('pre', [])),
                 *(l for q in scene['choices'] for o in q['options'] for l in o['response'])]
    scene['cast'] = list(dict.fromkeys(l['who'] for l in all_lines if l['who'] not in {'narr', 'me'}))
    assert scene['lines'] and all(q['options'] and all(o['response'] for o in q['options']) for q in scene['choices']), sid
    return scene

scenes = []
for match in re.finditer(r'^### `([^`]+)`　(.+?)\n([\s\S]*?)(?=^### |^## |\Z)', source, re.M):
    scenes.append(convert_scene(*match.groups()))
assert len(scenes) == 60
pool = {}
for key, num, body in re.findall(r'^\| `([^\x60]+)` \| (\d+) \| (.*?) \|$', source, re.M):
    if key == 'call':
        pool.setdefault(key, {})[num] = body
    else:
        pool.setdefault(key, []).append([line(l) for l in body.split('<br>')])
assert len(pool) == 45 and sum(map(len, pool.values())) == 68
assert sum(len(s['choices']) for s in scenes) == source.count('**選択')
data = {'scenes': scenes, 'pools': pool, 'clues': clue_text}
text = '/* 瑞太／瑞葉ルート脚本から生成。物語データとV4.5への接続。 */\n'
text += 'globalThis.HMV5TwinScript = Object.freeze(' + json.dumps(data, ensure_ascii=False, indent=2) + ');\n'
(GAME / 'v5-twin-script.js').write_text(text)
