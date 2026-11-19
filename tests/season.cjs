const assert=require('node:assert/strict');
const path=require('node:path');
const fs=require('node:fs');
const root=path.resolve(__dirname,'..');
global.window=global;
for(const script of ['game-v4','rng-v4','localization-v4','voice-variants-v45','performance-cues-v45','presentation-v45','core-v45','playtest-content-v4','playtest-revision-v4','v45-runtime-policy','v45-display-patches','playtest-revision-v45','v5-twin-script','v5-extra-scripts','v5-pose-cues','v5-pilot','characters','stage-metrics','asset-manifest','v5-art-data','v5-expanded-art','v5-portraits','portrait-collection-v45'])require(path.join(root,script+'.js'));
const data=HMV5Pilot.buildData(HM_GAME_V4);
const base=new HMPlaytest.Game(HM_GAME_V4,1);
assert.deepEqual(HMCore.validate(data).errors,[]);
assert.deepEqual(HMCore.validate(new HMV5Pilot.Game(data,1).d).errors,[]);
const starter=['pier','library','aquarium','beach','firefly','rink','cake','park'];
function training(g,t){
 if(g.st.stress>=46)return 'roof';
 const place={kiku:'infirmary',ryo:'cookroom',tai:'field',rika:'lab',gaku:'library',gei:'workshop'};
 for(const [stat,n] of Object.entries(g.R.requirements[t]))if(g.st[stat]<n)return place[stat];
 return 'roof';
}
const festival=new Set(['ev_park','ev_assign','fs2_open','fs2_exhibit']);
function decide(game,event,target, policy={}) {
 const t=target;
 if(event.type==='identify-opportunity'||!['line','decision'].includes(event.type))return;
 if(policy.infer&&game.day.match(/^w([89]|10)|^fest/)&&game.can_identify(t)&&game.fr[t]>=50&&game.tk[t]>=30&&!event.revisit)return {identify:[[t,game.R.identify.answer[t]]]};
 if(event.type!=='decision')return;
 const {kind,scene,options}=event;
 if(kind==='choose'){
  if(policy.choice){const n=policy.choice(event);if(n!==undefined)return n;}
  if(festival.has(scene.id)){
   const i=options.findIndex(o=>o.next?.endsWith('_'+t));
   if(i>=0)return i;
  }
  if(scene.id==='ev_hike')return options.findIndex(o=>/小|大|水筒/.test(o.label)&&!/ない|忘/.test(o.label))<0?0:options.findIndex(o=>/小|大|水筒/.test(o.label)&&!/ない|忘/.test(o.label));
  const weights=options.map(({effects={}})=>scene.char===t||scene.id.includes('_'+t)?(effects[t]||0)+(effects.f||0)*1.2+(effects.t||0)*2+(effects.u||0)*2+(effects.rs||0)*3:(effects[t]||0));
  return weights.indexOf(Math.max(...weights));
 }
 if(kind==='place'){
  if(HMCore.week(game.day)==='w6')return 'library';
  return game.active_targets().includes(t)?game.R.schedule[t][game.weekday]||training(game,t):training(game,t);
 }
 if(kind==='holiday'){
  if(event.allowDate&&game.can_date(t)&&game.active_targets().includes(t)){
   const open=[...game.R.spot_like[t],...starter.filter(s=>!game.R.spot_like[t].includes(s))].filter(s=>game.spots_open().includes(s)).sort((a,b)=>game.spot_value(t,b)-game.spot_value(t,a));
   return ['date',t,open[0]];
  }
  return ['cmd',training(game,t)];
 }
 if(kind==='night_contact')return game.active_targets().includes(t)&&game.fr[t]>=30?['call',t]:['skip'];
 if(kind==='incoming_date'||kind==='accept_invite'||kind==='ask')return event.target===t;
 if(kind==='pick_lunch')return event.options.includes(t)?t:event.options[0];
 if(kind==='minigame')return event.name==='borrow'?event.target:{score:3};
 if(kind==='exam')return event.question.answer;
 throw Error(event.kind);
}
function drive(game,iterator,policy) {
 const events=[];
 let reply,result;
 for(let step=iterator.next();;step=iterator.next(reply)){
  if(step.done){result=step.value;break;}
  const event=step.value;
  reply=policy(event);
  events.push({event,reply,cast:[...game.presentation.cast],vars:{...game.vars},note:game.clues.mzt?.size});
  if(events.length>10000)throw Error('too many frames');
 }
 return {events,result};
}
function run(t,seed){
 const g=new HMV5Pilot.Game(data,seed);
 const {events,result}=drive(g,g.play(),e=>decide(g,e,t,{infer:true}));
 return {g,result,scenes:events.filter(({event})=>event.type==='scene').map(({event})=>event.scene.id),events};
}
if (process.argv.includes('--late')) {
 for(const t of ['mzt','ami','yor']){
  let count=0;
  for(let seed=31;seed<=60;seed++){
   const g=new HMV5Pilot.Game(data,seed);
   const {result}=drive(g,g.play(),e=>{
    if(/^w[0-4](?:d|h|$)/.test(g.day)){
     if(e.kind==='place')return {月:'infirmary',水:'field',金:'roof'}[g.weekday]||'lab';
     if(e.kind==='ask'||e.kind==='accept_invite'||e.kind==='incoming_date')return false;
     if(e.kind==='night_contact')return ['skip'];
     if(e.kind==='holiday')return ['cmd',g.st.stress>25?'roof':training(g,t)];
     return decide(g,e,'adr');
    }
    return decide(g,e,t,{infer:true});
   });
   if(result==='end_'+t)count++;
  }
  console.log(t,'focus begins May 11:',count,'/ 30');
 }
 process.exit(0);
}
if(process.argv.includes('--memory-seeds')){
 for(const t of ['mzt','ami','yor']){
  const withMemory=[];
  for(let seed=1;seed<=60;seed++){
   const {result,scenes}=run(t,seed);
   if(result==='end_'+t&&scenes.includes('cv_'+t+'_08'))withMemory.push(seed);
  }
  console.log(t,withMemory.length,withMemory.slice(0,15));
 }
 process.exit(0);
}
if(process.argv.includes('--simulate')){
 for(const t of data.meta.targets?Object.keys(data.meta.targets):[]){
  let scores={},detail=[];
  for(let seed=1;seed<=100;seed++){
   const {g,result}=run(t,seed);
   scores[result]=(scores[result]||0)+1;
   if(['mzt','ami','yor'].includes(t)&&result!=='end_'+t)detail.push([seed,result,g.fr[t],g.tk[t],g.und[t],g.identity_notes(t).length,g.ident[t],g.pstage[t],g.dates[t],g.st.kiku,g.st.rika,g.st.tai,g.rv[t]]);
  }
  console.log(t,scores);
  if(detail.length)console.log('not targeted',JSON.stringify(detail.slice(0,8)));
 }
 process.exit(0);
}

const castAsset = (who, gender) => {
 const c=HM_CHARACTERS.find(c=>c.id===who);
 return c?.fixedArt||(who==='hypothalamus'?who:who+'-'+gender);
};
let branches=0;
for(const entry of [...HMV5TwinScript.scenes,...Object.values(HMV5ExtraScripts).flatMap(s=>s.scenes)]){
 const combinations=entry.choices.reduce((rows,q)=>rows.flatMap(a=>q.options.map((_,i)=>[...a,i])),[[]]);
 for(const indices of combinations){
  const g=new HMV5Pilot.Game(data,31);
  g.day=entry.day==='crisis'?'fest2':'w9d2';g.weekday='水';
  const key=entry.char;
  g.cur_char=key;g.picked=key;
  g.fr[key]=58;
  g.ident[key]=true;
  const remaining=[...indices];
  const frames=drive(g,g.run_scene(entry.id),e=>{
   if(e.kind==='choose'&&e.scene.id===entry.id)return remaining.shift();
   return decide(g,e,key);
  }).events;
  const sceneLines=frames.filter(({event})=>event.type==='line'&&event.scene?.id===entry.id);
  assert(sceneLines.length>=3,entry.id);
  assert(sceneLines.every(frame=>frame.cast.length<=3),entry.id);
  for(const {event} of sceneLines){
   for(const gender of ['female','male']){
    const sprite=event.line.act&&HM_ASSETS.characters[castAsset(event.line.who,gender)]?.acting[event.line.act];
    if(event.line.act?.startsWith('v5-'))assert(sprite&&fs.existsSync(path.join(root,sprite.split('?')[0])),entry.id+' '+event.line.act);
   }
  }
  branches++;
 }
}
function partial(id,initializer=()=>{},chooser=()=>undefined){
 const g=new HMV5Pilot.Game(data,4);g.cur_char='mzt';
 initializer(g);
 const {events}=drive(g,g.run_scene(id),e=>chooser(e)??decide(g,e,'mzt'));
 return {g,lines:events.filter(f=>f.event.type==='line').map(f=>f.event.line),scenes:events.filter(f=>f.event.type==='scene').map(f=>f.event.scene.id)};
}
for(const state of ['now','later','']){
 const {g}=partial('cv_mzt_08',()=>{},e=>e.kind==='choose'?Number(state==='later'):undefined);
 if(state)assert.equal(g.vars.mzt_reply,state);
 const conf=partial('end_mzt',g=>{g.vars.mzt_reply=state;g.rvok.mzt=Number(Boolean(state));});
 const poses=conf.lines.map(l=>l.act);
 assert(poses.includes('v5-confess')&&poses.includes('v5-accepted'));
 assert.equal(conf.lines.filter(l=>l.v5Reply!==undefined).length,1);
 assert.equal(conf.lines.find(l=>l.v5Reply!==undefined).v5Reply,state);
 assert.equal(conf.scenes.includes('ep_rv_mzt'),Boolean(state));
 assert(conf.scenes.includes('ep_wake'));
}
for(const first of ['adh','mzt']){
 const g=new HMV5Pilot.Game(data,3);
 for(const note of Object.values(HMV5TwinScript.clues))g.clues.mzt.add(note);
 for(const n of [1,2,3])g.clues.adh.add('old'+n);
 const second=first==='adh'?'mzt':'adh',before={...g.st};
 const one=drive(g,g.identify(first,'バソプレシン'),()=>undefined);
 assert(g.ident[first]&&!g.ident[second]);
 const two=drive(g,g.identify(second,'バソプレシン'),()=>undefined);
 assert(g.ident[first]&&g.ident[second]);
 assert.equal(g.st.gaku,before.gaku+2);
 assert.equal(g.st.rika,before.rika+2);
 assert(one.events.some(f=>f.event.line?.text.includes('視床下部の神経分泌細胞')));
 assert(!two.events.some(f=>f.event.line?.text.includes('視床下部の神経分泌細胞')));
}
{
 const g=new HMV5Pilot.Game(data,8);
 for(let i=0;i<15;i++)g.add_u('mzt',1);
 assert(!g.can_identify('mzt'));
 assert.equal(g.identity_notes('mzt').length,0);
}
for(const spot of ['pier','library','aquarium']){
 const g=new HMV5Pilot.Game(data,17);
 g.day='w8h';g.fr.mzt=55;
 const events=drive(g,g.holidayAction(['date','mzt',spot]),e=>decide(g,e,'mzt')).events;
 const scenes=events.filter(f=>f.event.type==='scene').map(f=>f.event.scene.id);
 assert(scenes.includes(({pier:'dt_mzt_1',library:'dt_mzt_2',aquarium:'dt_mzt_3'})[spot]));
}

for(const [key,field,values] of [
 ['ami','ami_toast',['light','dark','']],
 ['yor','yor_pace',['slow','normal','']],
]){
 for(const value of values){
  const g=new HMV5Pilot.Game(data,4);
  g.cur_char=key;g.day='w9d2';
  if(value){
   drive(g,g.run_scene('cv_'+key+'_08'),e=>e.kind==='choose'?e.options.findIndex(o=>o.effects.v5_memory?.[1]===value):undefined);
   assert.equal(g.vars[field],value);
  }
  const streams=['end_'+key,...(key==='ami'?['fs2_cafe_ami']:[])];
  for(const sid of streams){
   const {events}=drive(g,g.run_scene(sid),e=>decide(g,e,key));
   const memoryLines=events.filter(f=>f.event.line?.v5Memory);
   assert.equal(memoryLines.length,1,sid);
   assert.deepEqual(memoryLines[0].event.line.v5Memory,[field,value]);
   if(sid.startsWith('end_'))assert(events.some(f=>f.event.scene?.id==='ep_wake'));
  }
 }
}
for(const key of ['mzt','ami','yor']){
 for(const correct of [false,true]){
  const g=new HMV5Pilot.Game(data,6);
  g.cur_char=key;g.day='w10d1';
  const conditions=g.S['ev_assign_'+key].goto.cond;
  if(correct)for(const [stat,,threshold] of conditions)g.st[stat]=threshold;
  const {events}=drive(g,g.run_scene('ev_assign_'+key),e=>decide(g,e,key));
  assert(events.some(f=>f.event.scene?.id==='ev_assign_'+key+(correct?'_ok':'_ng')));
 }
 for(const resolve of [false,true]){
  const g=new HMV5Pilot.Game(data,8);
  g.cur_char=key;g.day='w9d2';g.tk[g.R.pairs[key]]=20;
  g.rs[key]=resolve?2:0;
  const second=drive(g,g.run_scene('rv_'+key+'_2'),e=>e.kind==='choose'?e.options.findIndex(o=>!o.effects.rs):undefined);
  assert(second.events.some(f=>f.event.scene?.id==='rv_'+key+'_2j'));
  const third=drive(g,g.run_scene('rv_'+key+'_3'),e=>e.kind==='choose'?e.options.findIndex(o=>!o.effects.rs):undefined);
  assert(third.events.some(f=>f.event.scene?.id==='rv_'+key+'_3'+(resolve?'ok':'ng')));
  assert.equal(g.rvok[key],Number(resolve));
 }
 const g=new HMV5Pilot.Game(data,8);
 for(const s of g.R.identify.key_notes[key])g.clues[key].add(s);
 const miss=drive(g,g.identify(key,'成長ホルモン'),()=>undefined);
 assert(miss.events.some(f=>f.event.type==='feedback'&&f.event.identityResponse.length));
 assert.equal(g.ident[key],false);
 assert.equal(g.cool[key],3);
 assert(!g.can_identify(key));
 g.cool[key]=0;
 const hit=drive(g,g.identify(key,g.R.identify.answer[key]),()=>undefined);
 assert(hit.events.some(f=>f.event.type==='identified'&&f.event.target===key));
 assert(g.ident[key]);

 g.day='w8h';g.seen['scene:v5_sports_roll_call']=1;g.seen['scene:ev_curry_end']=1;g.fr[key]=10;
 const trio=drive(g,g.trioOuting(key,'library'),()=>undefined);
 assert(trio.events.some(f=>f.event.scene?.id==='outing_trio_'+key));
}
// Visit each destination in two passes so another spot can never unlock its sequel.
const returnTexts = new Set();
for(const key of ['mzt','ami','yor']){
 const g = new HMV5Pilot.Game(data,8);
 g.day='w8h';g.holidayPeriod='午後';g.fr[key]=15;
 const first=drive(g,g.trioOuting(key,'library'),()=>undefined);
 assert(first.events.some(({event})=>event.scene?.id==='outing_trio_'+key));
 const spots=g.spots_open();
 assert.equal(spots.length,8);
 for(let visit=0;visit<2;visit++){
  for(const spot of spots){
   const outing=drive(g,g.trioOuting(key,spot),()=>undefined);
   const lines=outing.events.filter(({event})=>event.type==='line');
   assert.equal(lines.length,1);
   assert.equal(lines[0].event.line.text,g.R.trio.returnOutings[key][spot][visit]);
   assert(!returnTexts.has(lines[0].event.line.text));
   returnTexts.add(lines[0].event.line.text);
  }
 }
 assert.equal(g.log.trio_outing,17);
}
assert.equal(returnTexts.size,48);

const individual = {};
const branchCoverage = new Set();
const targets = Object.keys(data.meta.targets);
for(const target of targets){
 let reached=0;
 for(let seed=1;seed<=24;seed++){
  const {result,scenes,events}=run(target,seed);
  for(const id of scenes)branchCoverage.add(id);
  assert(scenes.includes('ep_wake'));
  assert(scenes.includes('v5_sports_roll_call')&&scenes.includes('v5_hike_break'));
  assert.equal(scenes.filter(id=>id.startsWith('fs2_crisis_')).length,1);
  assert(events.filter(f=>f.event.kind==='minigame'&&f.event.name==='borrow').length===3);
  for(const {event} of events.filter(f=>f.event.kind==='minigame'&&f.event.name==='borrow')){
   assert.equal(event.cards.length,6);
   assert(event.cards.includes(event.target)&&new Set(event.cards).size===6);
  }
  if(result==='end_'+target)reached++;
 }
 assert(reached>=18,target);
 individual[target]=reached;
}
for(const key of ['ins','adr','thy']){
 const g=new HMV5Pilot.Game(data,10);
 const P=g.R.pair_ending;
 for(const t of [key,g.R.pairs[key]]){g.fr[t]=P.f;g.tk[t]=P.t;g.und[t]=P.u;g.ident[t]=true;}
 assert.equal(g.ending(),'end_pair_'+key);
 const {events}=drive(g,g.run_scene(g.ending()),e=>decide(g,e,key));
 assert(events.some(f=>f.event.scene?.id==='ep_wake'));
}
{
 const g=new HMV5Pilot.Game(data,9);
 assert.equal(g.ending(),'end_friend');
 assert( drive(g,g.run_scene(g.ending()),e=>decide(g,e,'ins')).events.some(f=>f.event.scene?.id==='ep_wake'));
}
assert.deepEqual(base.targets,HMCore.T);
console.log(JSON.stringify({returnOutingTexts:returnTexts.size,branches,completeRuns:targets.length*24,individual,pairEndings:3,friendEndings:1,seasonScenes:branchCoverage.size}));
