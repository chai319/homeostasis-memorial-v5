/* The title uses the same identities and portraits as the selected game cast. */
(function(){
  'use strict';
  const host=document.getElementById('title-ensemble');
  const cast=document.getElementById('cast-gender');
  const player=document.getElementById('player-gender');
  const people=window.HM_CHARACTERS;
  // Order the faces around the central wordmark, with classmates above and
  // the teacher and supporting characters framing the lower edge.
  const order=['glucagon','adrenaline','thyroxine','cortisol','adh','twin','ami','yori','redcell','tsumugi','hypothalamus','shiori','insulin'];
  const images=order.map((who,index)=>{
    const frame=document.createElement('div');
    frame.className='title-person title-person-'+index;
    const image=document.createElement('img');
    image.alt='';image.decoding='async';
    frame.dataset.character=who;frame.append(image);host.append(frame);
    return {who,image};
  });
  function update(){
    for(const {who,image} of images){
      const person=people.find(p=>p.id===who);
      const gender=who==='redcell'?(player.value||'male'):(cast.value||'female');
      const key=person.fixedArt||(who==='hypothalamus'?who:who+'-'+gender);
      const set=window.HM_ASSETS.characters[key];
      const src=set.acting['daily-cute']||set.acting['trust-closer']||set.expression.neutral;
      if(image.getAttribute('src')!==src)image.src=src;
    }
    host.dataset.gender=cast.value;
  }
  cast.addEventListener('change',update);
  player.addEventListener('change',update);
  update();
})();
