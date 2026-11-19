const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
global.window=global;
for(const [,src] of fs.readFileSync(path.join(root,'index.html'),'utf8').matchAll(/<script src="([^"]+)"/g)){
 const file=src.split('?')[0];
 if(!['app-v45.js','title-screen-v5.js'].includes(file))require(path.join(root,file));
}
const expected=['neutral','happy','blush','worried','surprised','angry','rage','listless','depressed','playful','trust','joyful_tears','tears','sorrow'].sort();
const catalog=HMPortraitCollection.catalog(HM_ASSETS,HM_LAKE_SPRITES,HM_CHARACTERS);
for(const actor of ['twin','ami','yori']){
 for(const gender of ['female','male']){
  const key=actor+'-'+gender,set=HM_ASSETS.characters[key];
  assert.deepEqual(Object.keys(set.expression).sort(),expected,key);
  for(const src of Object.values(set.expression)){
   assert(fs.existsSync(path.join(root,src.split('?')[0])),src);
   assert(catalog.find(p=>p.key===key).entries.some(e=>e.src===src),src);
  }
  assert(catalog.find(p=>p.key===key).entries.some(e=>e.src===set.acting['v5-reaction-original']));
 }
}
const decorated=HMV5Pilot.buildData(HM_GAME_V4);
const expressionCues=global.HMV5ExpressionCues;
delete global.HMV5ExpressionCues;
const original=HMV5Pilot.buildData(HM_GAME_V4);
global.HMV5ExpressionCues=expressionCues;
// Ignore only presentation fields. Any change in words, choices, effects,
// conditions or destinations would invalidate existing input-journal saves.
function mechanics(data){
 return JSON.parse(JSON.stringify(data,(key,value)=>['expr','act'].includes(key)?undefined:value));
}
const normalized=mechanics(decorated);
normalized.rules.acting.ids=original.rules.acting.ids;
assert.deepEqual(normalized,mechanics(original));
let applied=0;
for(const [who,entries] of Object.entries(expressionCues.cues)){
 for(const [expression,id,anchor] of entries){
  const s=decorated.scenes.find(s=>s.id===id);
  const line=HMPresentation.linesOf(s).find(l=>l.who===who&&l.text.includes(anchor));
  assert.equal(line.expr,expression);
  applied++;
 }
}
console.log('6 cast variants × 14 expressions,',applied,'dialogue anchors; save journal structure preserved');
