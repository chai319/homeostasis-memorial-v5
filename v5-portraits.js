/* Register the V5 artwork with the existing sprite renderer. */
(function (global) {
  'use strict';

  const assets = global.HM_ASSETS;
  const fieldwork = {};
  const poseMetrics = {};
  const reactions = {
    'twin-female': 'worried', 'twin-male': 'worried',
    'ami-female': 'happy', 'ami-male': 'happy',
    'yori-female': 'surprised', 'yori-male': 'surprised',
    tsumugi: 'happy', shiori: 'playful',
  };
  for (const [key, { variants, stage }] of Object.entries(global.HMV5Art)) {
    const expression = { neutral: variants.neutral.src };
    if (variants.expression) expression[reactions[key]] = variants.expression.src;
    for (const [name, asset] of Object.entries(global.HMV5ExpressionArt?.[key] || {})) {
      expression[name] = asset.src;
      poseMetrics[asset.src] = asset.frame;
    }
    const acting = {};
    if (variants.special && key.startsWith('twin-')) {
      const relieved = variants.relieved?.src || variants.special.src;
      fieldwork[key] = { neutral: variants.special.src, happy: relieved, blush: relieved };
    }
    const labels = {};
    if (global.HMV5ExpressionArt?.[key] && variants.expression) {
      acting['v5-reaction-original'] = variants.expression.src;
      labels['v5-reaction-original'] = '初登場の反応';
    }
    for (const [pose, asset] of Object.entries(variants)) {
      if (['neutral', 'expression'].includes(pose)) continue;
      const act = 'v5-' + pose;
      acting[act] = asset.src;
      labels[act] = asset.label;
      if (asset.frame) poseMetrics[asset.src] = asset.frame;
    }
    assets.characters[key] = { expression, acting, labels };
    global.HM_STAGE_METRICS[key] = stage;
  }
  assets.v5Outfits = { fieldwork };
  assets.v5PoseMetrics = poseMetrics;
  global.HM_CHARACTERS.push(...global.HMV5Pilot.profiles);

  const credits = global.HM_ENDING_CREDITS;
  if (credits) {
    const lines = {
      twin: ['次の角まで。','その先は、着いてから聞くね。'],
      ami: ['次は、','二人で座って食べる分。'],
      yori: ['今度は、','描きたい色を先に聞くね。'],
      tsumugi: ['うん。','いまのはちゃんと、本人の返事。'],
      shiori: ['塩の帳面はこっち。','別々に記録しとくから。'],
    };
    const colors = {twin:'#a8d9ef',ami:'#cbd9e8',yori:'#ebc18c',tsumugi:'#efbfa4',shiori:'#b9d8c7'};
    for (const person of global.HMV5Pilot.profiles) {
      const quotePhrases = lines[person.id];
      for (const gender of person.fixedArt ? ['female'] : ['female','male']) {
        const id = person.fixedArt || person.id + '-' + gender;
        const image = assets.characters[id].expression.neutral;
        credits.cast.splice(credits.cast.length - 1, 0, {
          id,gender,name:person[gender],image,accent:colors[person.id],
          quote:quotePhrases.join(''),quotePhrases,
        });
      }
    }
  }
})(globalThis);
