const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');

class Element {
 constructor(tag){this.tagName=tag.toUpperCase();this.children=[];this.dataset={};this.attrs={};this.handlers={};const names=new Set();this.classList={toggle(k,enabled=!names.has(k)){if(enabled)names.add(k);else names.delete(k);},remove(k){names.delete(k);},add(k){names.add(k);},contains(k){return names.has(k);}};this.style={setProperty(){}};this.hidden=false;this.open=false;this.ownText='';this.disabled=false;this.isConnected=true;}
 get textContent(){return this.ownText+this.children.map(n=>n.textContent).join('');}
 set textContent(value){this.ownText=String(value??'');this.replaceChildren();}
 get firstElementChild(){return this.children[0];}
 get lastElementChild(){return this.children.at(-1);}
 set src(value){this.setAttribute('src',value);}
 get src(){return this.getAttribute('src');}
 append(...nodes){for(const n of nodes){n.remove();n.parent=this;this.children.push(n);}}
 replaceChildren(...nodes){for(const n of this.children)n.parent=null;this.children=[];this.append(...nodes);}
 remove(){if(this.parent)this.parent.children=this.parent.children.filter(n=>n!==this);this.parent=null;}
 setAttribute(k,v){this.attrs[k]=String(v);}
 getAttribute(k){return this.attrs[k]??null;}
 addEventListener(k,f){this.handlers[k]=f;}
 removeEventListener(){}
 click(){this.handlers.click?.({preventDefault(){},stopPropagation(){}});}
 close(){this.open=false;}
 showModal(){this.open=true;}
 focus(){}
 decode(){return Promise.resolve();}
 getBoundingClientRect(){return {width:100,height:100,left:0,right:100,top:0,bottom:100};}
 all(){return this.children.flatMap(c=>[c,...c.all()]);}
 querySelectorAll(q){
  if(q.includes(' '))return [];
  if(q.startsWith('.'))return this.all().filter(n=>(n.className||'').split(' ').includes(q.slice(1)));
  if(q.startsWith('[data-stat='))return this.all().filter(n=>n.dataset.stat===q.split('"')[1]);
  return this.all().filter(n=>n.tagName===q.toUpperCase());
 }
 querySelector(q){return this.querySelectorAll(q)[0]||null;}
}

function boot(search=''){
 const dom=new Map([...html.matchAll(/<([\w-]+)\b[^>]*\bid="([^"]+)"/g)].map(([,tag,id])=>[id,new Element(tag)]));
 const hud=new Element('section'),body=new Element('body');
 const document={
  hidden:false,body,createElement:t=>new Element(t),createElementNS:(_,t)=>new Element(t),
  createTextNode:text=>Object.assign(new Element('text'),{textContent:text}),addEventListener(){},removeEventListener(){},
  getElementById:id=>dom.get(id),querySelector:q=>q==='.hud'?hud:null,querySelectorAll:()=>[],
 };
 const storage=new Map(),localStorage={getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v))};
 const errors=[];
 const context=vm.createContext({
  document,localStorage,location:{search},URLSearchParams,structuredClone,
  console:{info(){},warn(){},error:error=>errors.push(error.stack||String(error))},
  Image:Element,Audio:class {play(){return Promise.resolve();} pause(){} load(){} addEventListener(){} removeAttribute(){}},performance:{now:()=>0},
  setTimeout:()=>1,clearTimeout(){},clearInterval(){},requestAnimationFrame:()=>1,cancelAnimationFrame(){},
  addEventListener(){},scrollTo(){},matchMedia:()=>({matches:true}),ResizeObserver:class{observe(){}},
 });
 // The build uses real HTML script order. Simulated elements isolate DOM bindings
 // and save/replay logic without rendering pixels or starting a browser.
 context.window=context;
 context.Image=class extends Element{constructor(){super('img');}};
 for(const [,src] of html.matchAll(/<script src="([^"]+)"/g)){
  const file=path.join(root,src.split('?')[0]);
  vm.runInContext(fs.readFileSync(file,'utf8'),context,{filename:file});
 }
 // Credits internals are independently unchanged and require parsing innerHTML.
 context.HMEndingCredits.prototype.open=function(){this.active=true;};
 return {app:context.HM_APP,context,dom,storage,errors};
}

function train(g,t) {
 if(g.st.stress>=46)return 'roof';
 const by={kiku:'infirmary',ryo:'cookroom',tai:'field',rika:'lab',gaku:'library',gei:'workshop'};
 for(const [key,n] of Object.entries(g.R.requirements[t]))if(g.st[key]<n)return by[key];
 return 'roof';
}
function choose(g,e,t){
 if(e.kind==='choose'){
  if(e.scene.id==='ev_hike'){const i=e.options.findIndex(o=>/小|大|水筒/.test(o.label)&&!/ない|忘/.test(o.label));return Math.max(0,i);}
  if(['ev_park','ev_assign','fs2_open','fs2_exhibit'].includes(e.scene.id)){
   const n=e.options.findIndex(o=>o.next?.endsWith('_'+t));if(n>=0)return n;
  }
  const weights=e.options.map(({effects={}})=>e.scene.char===t||e.scene.id.includes('_'+t)?(effects[t]||0)+(effects.f||0)*1.2+(effects.t||0)*2+(effects.u||0)*2+(effects.rs||0)*3:(effects[t]||0));
  return weights.indexOf(Math.max(...weights));
 }
 if(e.kind==='place')return g.day.startsWith('w6')?'library':g.active_targets().includes(t)?g.R.schedule[t][g.weekday]||train(g,t):train(g,t);
 if(e.kind==='holiday'){
  if(e.allowDate&&g.can_date(t)){
   const open=g.spots_open();
   const fallback=['pier','library','aquarium','beach','firefly','rink','cake','park'];
   const spots=[...g.R.spot_like[t],...fallback.filter(s=>!g.R.spot_like[t].includes(s))]
    .filter(s=>open.includes(s)).sort((a,b)=>g.spot_value(t,b)-g.spot_value(t,a));
   return ['date',t,spots[0]];
  }
  return ['cmd',train(g,t)];
 }
 if(e.kind==='night_contact')return g.active_targets().includes(t)&&g.can_date(t)?['call',t]:['skip'];
 if(e.kind==='pick_lunch')return e.options.includes(t)?t:e.options[0];
 if(e.kind==='exam')return e.question.answer;
 if(e.kind==='minigame')return e.name==='borrow'?e.target:{score:3};
 if(e.kind==='incoming_date'||e.kind==='accept_invite'||e.kind==='ask')return e.target===t;
 if(e.type==='decision')throw Error(e.kind);
}
const matching=(el,text)=>el.all().find(n=>n.tagName==='BUTTON'&&n.textContent===text);

const routes = {
 mzt: {id:'twin', term:'バソプレシン', debut:'v5_sports_roll_call', memory:'mzt_reply', name:['水守 瑞葉','水守 瑞太'], park:['巡回の瑞葉と園内を回る','巡回の瑞太と園内を回る']},
 ami: {id:'ami', term:'アミラーゼ', debut:'ev_curry', memory:'ami_toast', name:['糖解 アミ','糖解 アミ'], park:['アミと屋台の味見','アミと屋台の味見']},
 yor: {id:'yori', term:'マクロファージ', debut:'v5_sports_arrival', memory:'yor_pace', name:['白守 頼','白守 頼'], park:['頼先輩と花のある広場へ','頼先輩と花のある広場へ']},
};
const spotLabels={pier:'湖の桟橋で釣り'};
for(const [target,route] of Object.entries(routes).filter(([key])=>!process.env.UI_TARGET||process.env.UI_TARGET===key)){
 for(const [index,cast] of ['female','male'].entries())for(const player of ['female','male']){
  const expected=route.name[index];
  const {app,context,dom,storage,errors}=boot();
  assert(app.validation.ok);
  assert.deepEqual([...context.HM_ENDING_CREDITS.cast.map(c=>c.id).filter(id=>id===route.id+'-'+cast)],[route.id+'-'+cast]);
  app.begin({seed:Number(process.env.UI_SEED||({mzt:4,ami:6,yor:9})[target]),gender:cast,player:{sei:'春野',mei:'悠',gender:player}});
  let expressionViews=0;
  let sawIntro=false,sawConfess=false,sawAccepted=false,saved=false,sawMap=false,invitation=false;
  for(let i=0;i<5000;i++){
   assert.deepEqual(errors,[]);
   const e=app.current,g=app.game;
   const sprite=dom.get('cast-stage').children.find(n=>n.dataset.character===route.id);
   if(e.type==='line'&&e.line.who===route.id&&e.line.expr&&e.line.expr!=='neutral'&&sprite&&!sprite.dataset.actualAct&&!g.date_actor&&!e.scene?.v5Outfit&&e.scene?.outfit!=='swim'){
    const src=context.HM_ASSETS.characters[route.id+'-'+cast].expression[e.line.expr];
    assert.equal(sprite.firstElementChild.src,src,e.scene?.id+' '+e.line.expr);
    expressionViews++;
   }
   if(e.type==='line'&&e.scene?.id===route.debut&&e.line.who===route.id){
    sawIntro=true;
    assert.equal(dom.get('speaker').textContent,expected);
    assert(sprite?.firstElementChild.src.includes(route.id+'-'+cast));
   }
   if(e.type==='decision'&&e.scene?.id==='ev_park'){
    assert(matching(dom.get('choice-buttons'),route.park[index]),'V5 park choice did not appear');
   }
   sawConfess ||= sprite?.dataset.actualAct==='v5-confess';
   sawAccepted ||= sprite?.dataset.actualAct==='v5-accepted';
   if(e.type==='line'&&e.line.v5Schedule===target&&!sawMap){
    dom.get('map-button').click();
    const pins=dom.get('modal-content').all().filter(el=>el.dataset.person===route.id);
    assert(pins.length>=new Set(Object.values(g.R.schedule[target])).size);
    assert(pins.some(el=>el.title.includes(expected)));
    dom.get('close-modal').click();
    sawMap=true;
   }
   if(e.type==='line'&&g.vars[route.memory]&&!saved&&!app.inferenceOffer){
    const before={at:app.position,text:dom.get('dialogue-text').textContent,vars:JSON.stringify(g.vars)};
    app.save();assert(storage.has(context.HMV5Pilot.namespace));
    app.load();
    assert.deepEqual({at:app.position,text:dom.get('dialogue-text').textContent,vars:JSON.stringify(app.game.vars)},before);
    saved=true;
   }
   if(e.type==='complete'){
    assert.equal(e.ending,'end_'+target,JSON.stringify({f:g.fr[target],t:g.tk[target],u:g.und[target],ident:g.ident[target],stats:g.st,spots:g.spot_visits,sawIntro,sawConfess,sawAccepted,saved,invitation,sawMap}));
    assert(expressionViews>=10,expressionViews+' expression frames');
    assert(sawIntro&&sawConfess&&sawAccepted&&saved&&invitation&&sawMap,JSON.stringify({target,cast,sawIntro,sawConfess,sawAccepted,saved,invitation,sawMap}));
    app.notebook('教科書');
    assert(dom.get('modal-content').textContent.includes(expected+' · '+route.term));
    app.notebook('観察メモ');
    assert(dom.get('modal-content').textContent.includes(g.identity_notes(target)[0]));
    assert(JSON.parse(storage.get(context.HMV5Pilot.namespace+':endings')).some(r=>r.ending==='end_'+target&&r.castGender===cast));
    console.log(target,cast,player,'first meeting, date UI, map, inference, two confession poses, save replay and completion');
    break;
   }
   if(app.inferenceOffer){
    const modal=dom.get('modal-content');
    if(app.inferenceOffer.target===target){
     dom.get('transition').click();
     dom.get('modal').open=true;
     matching(modal,'正体を考える').click();
     matching(modal,route.term).click();
     matching(modal,'この人は「'+route.term+'」だ').click();
    }else dom.get('close-modal').click();
   }else{
    if(!dom.get('transition').hidden)dom.get('transition').click();
    if(!app.inferenceOffer){
     if(app.dateInvitation)app.advance();
     else {
      const action=choose(g,e,target);
      if(!invitation&&action?.[0]==='date'){
       const buttons=dom.get('choice-buttons');
       // Restore the same holiday before each preference. None of these
       // temporary test values enter the full-season input journal.
       app.save();
       const samples={
        mzt:[['now','第一声'],['later','ベンチ']],
        ami:[['light','薄く焼けた'],['dark','じゃんけん']],
        yor:[['slow','立ち止まって'],['normal','いつもの歩幅']],
       };
       for(const [value,words] of samples[target]){
        app.game.vars[route.memory]=value;
        matching(buttons,'デートに誘う').click();
        matching(buttons,expected).click();
        matching(buttons,app.game.R.spots.cake).click();
        for(let i=0;i<3;i++)app.advance();
        assert(dom.get('dialogue-text').textContent.includes(words));
        app.load();
       }
       matching(buttons,'デートに誘う').click();
       matching(buttons,expected).click();
       matching(buttons,spotLabels[action[2]]||g.R.spots[action[2]]).click();
       assert.equal(app.dateInvitation.target,target);
       app.save();app.load();assert.equal(app.dateInvitation.target,target);
       invitation=true;
      }else app.advance(action);
     }
    }
   }
   assert(i<4999,'season did not finish');
  }
 }
}
