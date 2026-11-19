/* Dedicated key visuals, redrawn for the two title cast versions. */
(function(){
  'use strict';
  const host=document.getElementById('title-ensemble');
  const cast=document.getElementById('cast-gender');
  const image=document.createElement('img');
  image.className='title-keyvisual';
  image.alt='';
  image.decoding='async';
  host.append(image);
  function update(){
    const gender=cast.value==='male'?'male':'female';
    const src='assets/title-v5/ensemble-'+gender+'-v1.png';
    if(image.getAttribute('src')!==src)image.src=src;
    host.dataset.gender=gender;
  }
  cast.addEventListener('change',update);
  update();
})();
