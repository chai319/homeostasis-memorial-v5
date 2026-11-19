const assert=require('node:assert/strict');
const path=require('node:path');
const fs=require('node:fs');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
global.window=global;
for(const [,src] of html.matchAll(/<script src="([^"]+)"/g)){
 const filename=src.split('?')[0];
 if(filename!=='app-v45.js')require(path.join(root,filename));
}
const d=HMV5Pilot.buildData(HM_GAME_V4);
const fresh=()=>new HMV5Pilot.Game(d,71);
assert.deepEqual(HMCore.validate(d).errors,[]);
assert.deepEqual(HMCore.validate(fresh().d).errors,[]);
const art=HMPortraitCollection.catalog(HM_ASSETS,HM_LAKE_SPRITES,HM_CHARACTERS);
const newCount=Object.fromEntries(art.filter(p=>/^twin|^ami|^yori|^tsumugi|^shiori/.test(p.who)).map(p=>[p.key,p.entries.length]));
for(const role of ['twin','ami','yori']){
 for(const gender of ['female','male'])assert.equal(newCount[role+'-'+gender],23,role+'-'+gender);
}
assert.equal(newCount.tsumugi,8);
assert.equal(newCount.shiori,8);
function drive(g,id,select){
 const frames=[];
 let v;
 const seq=g.run_scene(id);
 for(let step=seq.next();!step.done;step=seq.next(v)){
  const e=step.value;
  frames.push({e,cast:[...g.presentation.cast]});
  v=undefined;
  if(e.kind==='choose')v=select?select(e):0;
  else if(e.kind==='pick_lunch')v=e.options[0];
  else if(e.kind==='minigame')v=e.name==='borrow'?e.target:{score:2};
  else if(e.kind==='exam')v=e.question.answer;
  else if(e.type==='identify-opportunity')v=[];
  else if(e.type==='decision')throw Error(e.kind);
  assert(frames.length<=3000,id);
 }
 return frames;
}
let poses=0;
for(const [actor,cues] of Object.entries(HMV5PoseCues.cues)){
 const artKeys=HMV5Art[actor]?[actor]:[actor+'-female',actor+'-male'];
 for(const [pose,sceneID,anchor] of cues){
  for(const key of artKeys){
   const {src,frame}=HMV5Art[key].variants[pose];
   assert(fs.existsSync(path.join(root,src.split('?')[0])),key+' '+pose);
   if(src.includes('/extra/')){
    assert(frame.body_fraction>0.8&&frame.bottom<=1);
    assert.deepEqual(HM_ASSETS.v5PoseMetrics[src],frame);
    poses++;
   }
  }
  const g=fresh(),scene=g.S[sceneID];
  if(scene.char)g.cur_char=scene.char;
  if(sceneID.startsWith('fs1_pair_'))g.picked=scene.char;
  if(sceneID.startsWith('rv_'))g.day='w9d2';
  if(sceneID==='v5_hike_break')g.day='w5d3';
  if(sceneID==='v5_sports_arrival')g.day='w2d1';
  if(sceneID==='ev_curry')g.day='w1d3';
  g.seen['scene:v5_sports_arrival']=1;
  const events=drive(g,sceneID,e=>Math.max(0,e.options.findIndex(o=>o.response.some(l=>l.act==='v5-'+pose))));
  assert(events.some(({e,cast})=>e.scene?.id===sceneID&&e.line?.who===actor&&e.line.act==='v5-'+pose&&(!anchor||e.line.text.includes(anchor))&&cast.includes(actor)),sceneID+' '+actor+' '+pose);
 }
}
const installed=fs.readdirSync(path.join(root,'assets','v5-portraits','extra')).filter(f=>f.endsWith('.png'));
assert.equal(installed.length,94);
for(const file of installed){
 const src='assets/v5-portraits/extra/'+file;
 assert(art.some(p=>p.entries.some(e=>e.src===src)),file);
 assert(HM_ASSETS.v5PoseMetrics[src],file);
}
for(const [id,required] of [
 ['ev_curry', ['同じ教室では','一年B組の糖解アミ']],
 ['v5_sports_arrival',['ぶつかりかけた','二年の白守頼先輩']],
 ['v5_sports_roll_call',['こっちにも？','双子の瑞葉','となりの一年B組']],
 ['v5_hike_break',['小学校の時から','備の妹']],
]){
 const g=fresh();g.day=g.S[id].day;
 const events=drive(g,id);
 const line=events.filter(({e})=>e.scene?.id===id&&e.line).map(({e})=>e.line.text).join('\n');
 for(const snippet of required)assert(line.includes(snippet),id+' '+snippet);
}
for(const [ability,expected] of [[34,false],[35,true]])for(const option of [0,1,2]){
 const g=fresh();g.day='w5d3';g.st.tai=ability;
 const scenes=drive(g,'ev_hike',e=>e.scene.id==='ev_hike'?option:0).filter(({e})=>e.type==='scene').map(({e})=>e.scene.id);
 assert(scenes.includes('v5_hike_break'));
 assert.equal(scenes.includes('ev_hike_top'),expected);
}
console.log({uniqueAdded:installed.length,targetedPoseActivations:poses,cast:newCount});
