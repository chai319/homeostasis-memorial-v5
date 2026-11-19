/* Scene-bound expressions and poses. Entries anchor to spoken lines in the script. */
(function (global) {
  'use strict';

  const cues = {
    twin: [
      ['intro', 'v5_sports_roll_call', '水守瑞葉です。'],
      ['surprised', 'cv_mzt_06', '座っていく予定か聞いてなかった'],
      ['happy', 'cv_mzt_07', 'いい音でしょ'],
      ['reserved', 'ev_night_mzt', '名字の下のほう'],
      ['thinking', 'cv_mzt_08', 'ちょっと聞いてもいい？'],
      ['serious', 'fs2_crisis_mzt', '最初の紙は'],
      ['downcast', 'ev_shed_mzt', '声の高さで分かった？'],
      ['blush', 'kz_mzt_2', 'そういう返事、うれしいね'],
      ['checking', 'tr_mzt_1', '誰が返事したか'],
      ['share', 'cv_mzt_02', 'こっちの水筒'],
      ['invite', 'kz_mzt_2', '迎えに行こうと思った'],
      ['running', 'fs1_pair_mzt'],
      ['lake', 'lake_mzt'],
      ['lake', 'lake_end_mzt'],
      ['rain', 'cv_mzt_03', '雨の日の点呼'],
    ],
    ami: [
      ['intro', 'ev_curry', '糖解アミ。いつもは'],
      ['surprised', 'cv_ami_02', '袋の端が開いてた'],
      ['laugh', 'cv_ami_03', 'できたら、きみが食べる？'],
      ['thoughtful', 'cv_ami_08', '同じ一枚で'],
      ['blush', 'kz_ami_1', '見られたの、寝ぼけた顔より'],
      ['irritated', 'cv_ami_06', 'あとで見る箱'],
      ['quiet', 'cv_ami_10', '次の班が先に使う日'],
      ['taste', 'ev_night_ami', 'こっちは今食べる分'],
      ['arrange', 'cv_ami_05', '澄のは一口でいい'],
      ['offer', 'kz_ami_2', '名前を書いてない方'],
      ['share', 'cv_ami_11', '半分ほしい？'],
      ['wait', 'dt_ami_2'],
      ['running', 'fs1_pair_ami'],
      ['lake', 'lake_ami'],
      ['lake', 'lake_end_ami'],
      ['rain', 'hp_ami_1', '紙はここを押さえよう'],
    ],
    yori: [
      ['intro', 'v5_sports_arrival', '頼と書いて、より'],
      ['flustered', 'p_yor_1', 'まず字の方を向けないと'],
      ['smile', 'cv_yor_11', '今日は声を出してから'],
      ['thinking', 'cv_yor_04', '人がいない時に描くと'],
      ['blush', 'cv_yor_12', '一枚選んで持って帰る？'],
      ['serious', 'rv_yor_3', 'あとで伝えようと思っていた'],
      ['quiet', 'cv_yor_02', '途中で別の用事が来た'],
      ['check', 'tr_yor_1', '空に見えても'],
      ['support', 'fs2_play_yor', '困った？　出られそうか'],
      ['sketch', 'ev_night_yor', '付き添って待つ人もいる'],
      ['invite', 'fs2_sun_yor', 'またこちらから呼ぶよ'],
      ['walking', 'ev_buy_yor', '風で飛びそうだから'],
      ['sports', 'fs1_tent_yor', '次の受付を頼める人'],
      ['lake', 'lake_yor'],
      ['lake', 'lake_end_yor'],
      ['rain', 'kz_yor_2', '花を描き始めて'],
    ],
    tsumugi: [
      ['greets', 'v5_hike_break', '今度は止める方も一緒に休む'],
      ['wait', 'v5_hike_break', 'その丸、誰が返事したの？'],
      ['notices', 'tr_mzt_1', '名字が続いてる'],
      ['laughs', 'kz_mzt_1', '友達になれたもんね'],
    ],
    shiori: [
      ['handoff', 'fs1_tent_mzt', '預かった給水の記録'],
      ['greets', 'v5_hike_break', '名前で呼んでくれたら'],
      ['explains', 'cv_mzt_05', '水分の話は先生と水守に'],
      ['asks', 'cv_mzt_05', '何が違うか言ってみて'],
    ],
  };

  function apply(data) {
    const scenes = new Map(data.scenes.map(scene => [scene.id, scene]));
    const art = global.HMV5Art || {};
    for (const [who, entries] of Object.entries(cues)) {
      const keys = art[who] ? [who] : [who+'-female',who+'-male'];
      for (const [pose,id,anchor] of entries) {
        const scene = scenes.get(id);
        if (!scene) throw Error('Unknown V5 pose scene: '+id);
        const lines = global.HMPresentation.linesOf(scene).filter(l =>
          l.who === who && (!anchor || l.text.includes(anchor)));
        if (lines.length === 0 || (anchor && lines.length !== 1)) {
          throw Error('V5 pose dialogue anchor changed: '+id+' / '+pose);
        }
        if (keys.every(key => art[key]?.variants[pose])) {
          const act = 'v5-'+pose;
          if (!data.rules.acting.ids.includes(act)) data.rules.acting.ids.push(act);
          for (const line of lines) {
            line.act = act;
            if (id === 'fs2_crisis_mzt' && pose === 'serious') line.v5Cast = ['twin'];
          }
        }
      }
    }
    return data;
  }

  global.HMV5PoseCues = { cues, apply };
})(globalThis);
