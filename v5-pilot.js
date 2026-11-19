/* V5 scenario routes and shared events over the V4.5 game data. */
(function (global) {
  'use strict';

  const revision = 'hmv5-arrivals-and-portraits-1';
  const short = typeof location !== 'undefined' && new URLSearchParams(location.search).has('preview');
  const previousNamespace = 'homeostasis-memorial-v5:all-routes:' + (short ? 'preview' : 'full');
  const namespace = previousNamespace + ':portraits-and-arrivals';
  const profiles = [
    { id: 'twin', male: '水守 瑞太', female: '水守 瑞葉', term: 'バソプレシン' },
    { id: 'tsumugi', male: '結城 つむぎ', female: '結城 つむぎ', fixedArt: 'tsumugi' },
    { id: 'shiori', male: '備 汐里', female: '備 汐里', fixedArt: 'shiori' },
    { id: 'ami', male: '糖解 アミ', female: '糖解 アミ', term: 'アミラーゼ' },
    { id: 'yori', male: '白守 頼', female: '白守 頼', term: 'マクロファージ' },
  ];
  const newActors = new Set(profiles.map(({ id }) => id));
  const twinActs = ['date', 'pivotal', 'trust', 'confess', 'accepted'];
  const portraitActs = [...twinActs, 'special', 'mimic', 'check'].map(pose => 'v5-' + pose);
  const introduction = 'v5_sports_roll_call';
  const arrival = 'v5_sports_arrival';
  const hike = 'v5_hike_break';
  const debut = { mzt: introduction, ami: 'ev_curry', yor: arrival };
  const routes = {
    ami: {
      actor: 'ami', pair: 'glu',
      schedule: { 月: 'cookroom', 水: 'cookroom', 金: 'cookroom' },
      requirements: { ryo: 70, rika: 45, kiku: 35 },
      period: { w1: 1.2, w5: 1.25, w8: 1.15, w9: 1.25, w10: 1.3, fest2: 1.3 },
      periodReason: '新入生の調理班・試作・学園祭の厨房で話しやすい',
      liked: ['cake','park'], disliked: ['pier'], topic: 'oyatsu', hardTopic: 'asa',
      borrow: '口と小腸の台で、長いでんぷんの束を先に分ける人',
      incoming: ['きょう、試作のない日なんだけど。二人で食べに行く？', 'うん、席に着いてから食べたい方を決めよ。'],
      outing: [
        ['redcell','袋に三つ。同じのばかり選ばなくていいんだな。'],
        ['ami','半分ずつ割って食べてから決めよ。最後の一口は誰のか、聞いてから片づける。'],
        ['me','じゃあまず、三人とも座ろう。'],
      ],
    },
    yor: {
      actor: 'yori', pair: 'cor',
      schedule: { 月: 'infirmary', 水: 'roof', 金: 'field' },
      requirements: { kiku: 70, gaku: 45, tai: 30 },
      period: { w2: 1.2, w5: 1.15, w8: 1.25, w9: 1.2, w10: 1.3, fest1: 1.3 },
      periodReason: '測定や学園祭の救護で会いやすく、湖上実習では片づけから話が続く',
      liked: ['library','aquarium'], disliked: ['rink'], topic: 'mono', hardTopic: 'sports',
      borrow: '異物を取り込んで片づけ、その目印を別の係に見せる先輩',
      incoming: ['今日の当番、早く終わるの。絵の道具だけ持って、二人で出かけない？', 'ありがとう。座って話せるところも途中で探そう。'],
      outing: [
        ['redcell','三人ならどこへ行っても、一人は道を覚えてると思う。'],
        ['yori','それなら私は、道の途中で気づいた色を覚える。二人にも一つずつ教えてもらっていい？'],
        ['me','はい。見つけたら、そこで立ち止まりますね。'],
      ],
    },
  };

  // These short scenes occupy the existing return-outing beat. The second text
  // recalls something the player has actually seen at this spot with this group.
  const returnOutings = {
    mzt: {
      cake: ['赤路が三つ目の皿を取る。{瑞}は点呼の調子で「いちごの人？」と言って、自分だけ手を挙げた。', 'いちごのタルトが一切れ。今度はこっちと赤路が同時に手を挙げた。{瑞}が笑って、フォークを三本持ってきた。'],
      pier: ['浮きが沈んだ。三人とも「今！」と叫んで、釣れたのは一本の水草だった。{瑞}が今日一番の大物に認定した。', '赤路がまた水草を釣った。「自己記録、更新」。{瑞}が得意げに告げると、赤路は水草をそっと掲げた。'],
      park: ['観覧車の頂上で赤路が目を閉じた。{瑞}が「見えた人が実況する係ね」と、遠くの湖に小さい船を見つけた。', 'ゴンドラが上がる。今日は赤路が薄目で「船、二隻」と実況した。{瑞}がそっと拍手した。'],
      rink: ['手すりから三人いっせいに手を離す作戦。{瑞}の「せーの」より少し早く、赤路だけがすーっと進んだ。', '赤路が手すりで号令を待っている。{瑞}は「今日は好きな時に」とその横を滑った。追いついたところで三人並んだ。'],
      library: ['三人で互いに一冊ずつ選んだ。{瑞}から渡された旅の本には、見覚えのある湖が小さく載っていた。', 'この間の旅の本を開くと、赤路が湖のページを覚えていた。三人で写真の端に写る桟橋を探した。'],
      beach: ['屋台の前で帽子が飛んだ。赤路が追い、{瑞}が持ち主に手を振り、こっちは三人分のとうもろこしを守った。', '屋台でとうもろこしを頼むと、{瑞}がまず帽子を押さえた。風はないのに赤路まで頭を押さえた。'],
      aquarium: ['銀色の群れが一斉に曲がる。「あれ、先頭は誰？」と{瑞}。赤路と指した魚が三回とも違った。', '銀色の群れの前で、今日は誰も先頭を探さなかった。三人の顔がそろって右を向いて、それが一番おかしかった。'],
      firefly: ['最初に光った場所を三人で指したら、全員ばらばらだった。{瑞}が「同時に三匹見つけたってことか」と手を下ろした。', '川辺で、また三つの指が別の方へ伸びた。今度は笑い声をこらえて、順番に互いの指の先を見た。'],
    },
    ami: {
      cake: ['「断面当てよう」。アミが目を閉じ、赤路がケーキの層を読み上げる。最後の「お皿」で三人とも吹き出した。', '今日はアミが読み上げ役。最後に大まじめに「お皿」と付け足すまで、赤路はフォークを持ったまま待っていた。'],
      pier: ['アミが弁当の卵焼きを一切れずつ配った。浮きを見つめている間に食べると、湖で初めての味がした。', '浮きが静かなうちに卵焼き。三人が口に入れた瞬間だけ浮きが動いて、全員で慌てて箸を置いた。'],
      park: ['アミは乗り物の写真を買った。「これ、赤路だけ余裕の顔」。よく見ると、まだ発車する前の写真だった。', '今度は発車後の写真を見に行った。アミが一番笑っていて、赤路は両手でしっかりバーを握っていた。'],
      rink: ['休憩のココアを三つ並べた。手袋を外したアミの鼻にだけ泡がついて、赤路が紙ナプキンで自分の鼻を指した。', 'ココアを飲む前からアミがナプキンを構えている。今日は赤路の鼻に泡がついた。'],
      library: ['料理の本を三人で開く。アミが指したのはレシピの端に写った、使い込まれて柄が曲がった小さじだった。', '今度は赤路が、前のページと同じ小さじを見つけた。料理の本がいつの間にか、三人の絵探し帳になった。'],
      beach: ['屋台で焼いた串を三本選ぶ。アミが「端っこの焦げ、売り物になるんだ」と自分の串をうれしそうに回した。', '串を買うと、赤路が「端っこまで甘い」と先に報告した。アミが店の人に聞こえる声で同意した。'],
      aquarium: ['クラゲを見て「寒天」と赤路。「それ、こっちも思った」とアミ。こっちまで急に甘いものが食べたくなった。', 'クラゲの水槽では食べ物を言わない約束にした。出口でアミが小声で「……ところてん」。三人とも限界だった。'],
      firefly: ['暗い川辺で包みを開ける音がひとつ。アミがおやつを配る手を止めた。その手のすぐ先が、小さく光った。', '三人で先におやつを食べ、包みをしまってから川辺に立った。アミの空いた手のそばを、また光が横切った。'],
    },
    yor: {
      cake: ['頼先輩がレシートの裏にいちごを描いた。赤路が種を足すと、いつの間にか見事なハリネズミになった。', '赤路が新しいレシートにハリネズミを描いた。頼先輩はへたを足して、前と逆にいちごに戻した。'],
      pier: ['頼先輩は魚が跳ねた輪を描きたかったらしい。三人で水面を見すぎて、すぐ横の一匹にそろって驚いた。', '今度は赤路が魚を、こちらが水面を見張った。頼先輩の紙には、水の輪をのぞき込む二人の頭が描いてあった。'],
      park: ['地図を閉じ、看板の色だけで歩いた。頼先輩が黄色を選び続けた結果、三人ともポップコーン売り場に着いた。', '今日は赤路が「黄色以外」と宣言した。頼先輩が選んだ赤い看板も、いちご味のポップコーン売り場だった。'],
      rink: ['リンクに弧を一本描こう、と頼先輩。赤路の跡とこっちの跡が横切って、立派な魚の形になった。', '前の魚に尾びれをつけるつもりで滑った。頼先輩が振り向くと、三人の跡はもう大きな花になっていた。'],
      library: ['頼先輩の選んだ鳥の図鑑で、三人が好きな一羽を指した。赤路の指だけ、鳥の下に描かれたカエルに止まった。', '頼先輩が今度はカエルの図鑑を持ってきた。赤路はちゃんと一匹選んで「今日は主役だ」と小声で言った。'],
      beach: ['砂に頼先輩が丸を描き、赤路が耳を、こちらがひげを足した。波打ち際に三人の猫が座った。', '波が引いたところに、赤路が猫の足跡を描いた。頼先輩の描いた魚まで、三人で足跡をつないだ。'],
      aquarium: ['頼先輩が水槽を見ずに赤路の袖を見ていた。見れば白い布の上を、魚の影が何匹も横切っていた。', '今度は三人で袖を並べた。頼先輩は一番小さな魚の影が端から端まで渡るのを、息を止めて見送った。'],
      firefly: ['頼先輩は鉛筆をしまったまま、光と光の間を見ていた。「暗いところも持って帰りたいんだ」。赤路も少し黙った。', '帰り道、頼先輩が紙に小さな点を一つだけ打った。赤路がそれを見て「周りの暗さまで思い出せる」とつぶやいた。'],
    },
  };

  function addRoute(data, key, route, script) {
    const R = data.rules;
    data.meta.targets[key] = route.actor;
    R.schedule[key] = route.schedule;
    R.requirements[key] = route.requirements;
    R.period[key] = route.period;
    R.period_reasons[key] = route.periodReason;
    R.spot_like[key] = route.liked;
    R.spot_bad[key] = route.disliked;
    R.topic_like[key] = route.topic;
    R.topic_bad[key] = route.hardTopic;
    R.date_closing_pools.push(key);
    R.phone_warning_pools.push(key);
    R.incoming_dialogue[key] = route.incoming;
    const term = profiles.find(c => c.id === route.actor).term;
    R.identify.answer[key] = term;
    R.identify.choices.push(term);
    R.identify.key_notes[key] = script.clues;
    R.pairs[key] = route.pair;
    R.minigames.borrow.cards[key] = [route.borrow];
    data.pools[route.actor] = structuredClone(script.pools);
    data.scenes.push(...structuredClone(script.scenes), {
      id: 'outing_trio_' + key, title: '三人の寄り道', day: 'outing', place: 'keep', time: 'keep', bgm: 'keep',
      char: key, cast: ['redcell',route.actor], v5Script: true,
      lines: route.outing.map(([who,text]) => ({who,text})), choices: [], clues: [],
      goto: {type:'next',id:'DAY',effects:{f:2}},
    });
  }

  function addEventChoice(scenes, id, label, next, effects, text) {
    const scene = scenes.get(id);
    const key = Object.keys(effects)[0];
    const actor = routes[key]?.actor || 'twin';
    if (text) scene.lines.push({ who: actor, text, expr: 'neutral', v5Cast: [actor] });
    scene.choices[0].options.push({ label, next, effects, response: [], choicePortrait: actor });
  }

  function buildData(source) {
    const data = structuredClone(source);
    const scenes = new Map(data.scenes.map(scene => [scene.id, scene]));
    const script = global.HMV5TwinScript;
    const extra = global.HMV5ExtraScripts;
    const R = data.rules;
    R.trio.returnOutings = returnOutings;
    R.spots.pier = '湖の桟橋で釣り';
    data.places.pier.name = '湖の桟橋';
    data.meta.targets.mzt = 'twin';
    R.schedule.mzt = { 月: 'field', 水: 'lab', 金: 'roof' };
    R.requirements.mzt = { kiku: 70, rika: 45, tai: 30 };
    R.period.mzt = { w5: 1.3, w8: 1.2, w9: 1.2, w10: 1.3, fest1: 1.3, fest2: 1.2 };
    R.period_reasons.mzt = '遠足・湖上実習・学園祭の巡回で顔を合わせやすい';
    R.spot_like.mzt = ['pier', 'library'];
    R.spot_bad.mzt = ['park'];
    R.topic_like.mzt = 'keikaku';
    R.topic_bad.mzt = 'sports';
    R.date_closing_pools = ['mzt'];
    R.phone_warning_pools = ['mzt'];
    R.incoming_dialogue = {
      mzt: ['今日、一緒に出かけない？　待ち合わせは、返事を聞いてから決めようと思って。', 'ありがとう。じゃあ、いつもの当番は忘れて出かけよう。'],
    };
    R.identify.answer.mzt = R.identify.answer.adh;
    R.identify.key_notes = { mzt: Object.values(script.clues) };
    R.identify.shared_textbook = { mzt: 'adh' };
    R.identify.textbook_common = {
      adh: [
        script.pools.textbook[0][0],
        { who: 'narr', text: '腎臓の集合管で水の再吸収を増やし、尿量を減らす。体液の浸透圧が上がると放出が増え、浸透圧が元の範囲に戻ると放出も減る。' },
      ],
    };
    R.identify.textbook_roles = {
      adh: '最後の水門。集合管で水を取り戻す働きを描く。',
      mzt: '巡回と連絡。体液の状態に応じて合図が強まり、回復すると弱まる働きを描く。',
    };
    R.pairs.mzt = 'adh';

    R.minigames.borrow.choice_count = 6;
    R.minigames.borrow.cards.adh[0] = '最後の水門で、出ていく水を減らす人';
    R.minigames.borrow.cards.mzt = ['班の返事を確かめて、中枢先生へ巡回の報告を届ける人'];
    R.acting.ids.push(...portraitActs);
    for (const [key,route] of Object.entries(routes)) addRoute(data,key,route,extra[key]);
    R.identify.wrong_hints['アミラーゼ'] = 'アミラーゼは吸収される前のでんぷんの消化を助ける酵素。集めた記録の持ち場を確かめよう。';
    R.identify.wrong_hints['マクロファージ'] = 'マクロファージは異物などを取り込む免疫細胞。本人が何を取り込み、何を見せていたか確かめよう。';

    for (const id of ['ev_sports_a1', 'ev_sports_a2', 'ev_sports_b']) {
      const { goto } = scenes.get(id);
      if (goto.type !== 'next' || goto.id !== 'DAY') throw Error(id + ': 体力測定の復帰先が変わっています。');
      goto.id = introduction;
    }
    const routeScenes = structuredClone(script.scenes);
    routeScenes.find(scene => scene.id === introduction).goto.effects.yor = 9;
    for (const id of ['ev_hike_a', 'ev_hike_b', 'ev_hike_c']) {
      const scene = scenes.get(id);
      const { goto } = routeScenes.find(s => s.id === hike);
      if (JSON.stringify(scene.goto) !== JSON.stringify(goto)) throw Error(id + ': 遠足の既存条件が変わっています。');
      scene.goto = { type: 'next', id: hike };
    }

    const park = scenes.get('ev_park');
    const crowd = park.lines.find(line => line.text === '六人がそれぞれ、行きたい場所を口にした。');
    if (crowd) crowd.text = 'みんなが、それぞれ行きたい場所を口にした。';
    addEventChoice(scenes, 'ev_park', '巡回の{瑞}と園内を回る', 'ev_park_mzt', { mzt: 5 }, 'ひと息つける場所を見つけた。一緒に回る？');
    addEventChoice(scenes, 'ev_assign', '巡回と連絡', 'ev_assign_mzt', { mzt: 3 }, '巡回と連絡。休憩所の声を聞いてくれる人に来てほしい。');
    addEventChoice(scenes, 'fs2_open', '{瑞}と入る', 'fs2_cafe_mzt', { mzt: 4 });
    addEventChoice(scenes, 'fs2_exhibit', '保健委員会「水門に届く手紙」', 'fs2_ex_mzt', { mzt: 4 });
    addEventChoice(scenes, 'ev_park', 'アミと屋台の味見', 'ev_park_ami', { ami: 5 }, '並ぶ前に、どれ食べたいか聞いていい？');
    addEventChoice(scenes, 'ev_park', '頼先輩と花のある広場へ', 'ev_park_yor', { yor: 5 }, '地図のこの花の印、見に行きたい人はいる？');
    addEventChoice(scenes, 'ev_assign', '下ごしらえと試作', 'ev_assign_ami', { ami: 3 }, '試作の台を一つ空けてある。仕上げまで一緒に見てくれる人、いる？');
    addEventChoice(scenes, 'ev_assign', '救護の備品と交代', 'ev_assign_yor', { yor: 3 }, '交代表と備品の札、一つずつ確認してくれると助かる。');
    addEventChoice(scenes, 'fs2_open', 'アミと入る', 'fs2_cafe_ami', { ami: 4 });
    addEventChoice(scenes, 'fs2_open', '頼と入る', 'fs2_cafe_yor', { yor: 4 });
    addEventChoice(scenes, 'fs2_exhibit', '家庭科部「消化の受け渡し」', 'fs2_ex_ami', { ami: 4 });
    addEventChoice(scenes, 'fs2_exhibit', '保健委員会「片づけと修復」', 'fs2_ex_yor', { yor: 4 });
    scenes.get('ev_assign').lines[0].text = '学園祭まで五日。担当表には、まだ書き込める欄がある。';

    const orientation = scenes.get('ev_curry');
    orientation.lines.push(
      { who:'narr', text:'野菜の箱を持った生徒が、隣の班から澄のところへ来た。', v5Cast:['insulin','ami'] },
      { who:'me', text:'澄、知ってる人？　同じ教室では見かけなかった気がする。' },
      { who:'insulin', text:'一年B組の糖解アミさんです。家庭科室で下ごしらえを手伝ってもらってます。今日は隣の班から、空いた台を貸してくれました。',expr:'happy' },
      { who:'ami', text:'糖解アミ。いつもは家庭科室にいる。今日は同じ鍋を使うんだし、切れた方から渡すよ。',expr:'neutral',v5Cast:['ami','insulin'] },
    );
    const curry = scenes.get('ev_curry_end');
    curry.after = [
      { who:'ami', text:'さっきの野菜、切る分はもう分けた。澄、あとで一口だけ味、見せて。', expr:'neutral', v5Cast:['ami','insulin','glucagon'] },
      { who:'insulin', text:'もちろん。明日の箱は蓄にお願いしました。味見の方は空けておきますね。', expr:'happy' },
      { who:'redcell', text:'放課後に会いたいなら家庭科室かな。月曜だけ、先に購買へ箱を返すんだって。', expr:'neutral', v5Cast:['ami','redcell'] },
    ];
    curry.goto.effects.ami = 6;

    const cookingLines = {
      ev_cooking_ok:'こっちは仕上げに渡すまで。澄と蓄の出番は、糖が小腸で吸収されたあとね。',
      ev_cooking_ng:'皿の形はまたやり直せる。吸収される前の下ごしらえと、その後の調節は、いったん札を分けよう。',
    };
    for (const [id,text] of Object.entries(cookingLines)) {
      const scene = scenes.get(id);
      scene.lines.push({who:'ami',text,expr:'neutral',v5Cast:['ami','insulin','glucagon']});
      scene.clues.push({char:'ami',text:extra.ami.clues[2]});
    }

    const morning = {
      id:arrival, title:'昇降口に落ちた鉛筆', day:'w2d1', date:'4月20日(月)', place:'shoebox', time:'朝', bgm:'morning',
      char:'yor', v5Script:true, cast:['yori','cortisol'], choices:[], clues:[],
      lines:[
        {who:'narr',text:'朝の昇降口。腕章と小さな箱を抱えた先輩が、角でこちらにぶつかりかけた。青い鉛筆が足元へ転がる。'},
        {who:'yori',text:'ごめんなさい。持っていく箱ばかり見てた。ぶつかってない？',expr:'surprised',v5Cast:['yori']},
        {who:'me',text:'大丈夫です。この鉛筆、先輩のですか。'},
        {who:'cortisol',text:'白守先輩の。二年の白守頼先輩。保健委員会で備品を一緒に見てくれてるんだ。',expr:'neutral',v5Cast:['yori','cortisol']},
        {who:'yori',text:'頼と書いて、より。今日は体力測定の救護にいます。鉛筆、拾ってくれてありがとう。',expr:'neutral'},
        {who:'narr',text:'腕章を手提げのいちばん上に戻すと、先輩は今度はこちらが通り過ぎるまで待った。'},
      ],
      goto:{type:'next',id:data.rules.events_at.w2d1},
    };
    data.rules.events_at.w2d1=arrival;
    data.scenes.push(morning,...routeScenes, {
      id: 'outing_trio_mzt', title: '三人の寄り道', day: 'outing', place: 'keep', time: 'keep', bgm: 'keep',
      char: 'mzt', cast: ['redcell', 'twin'], v5Script: true,
      lines: [
        { who: 'redcell', text: '三人で来たし、ひとつずつ寄りたい場所を決めよう。' },
        { who: 'twin', text: 'じゃあ、こっちは最後。二人が選んだ場所と違ったら、帰りに寄ろう。' },
        { who: 'me', text: '最初に言っていいよ。二人とも聞いてるから。' },
        { who: 'twin', text: '……じゃあ座れるところ。三人でゆっくり話したい。' },
      ],
      choices: [], clues: [], goto: { type: 'next', id: 'DAY', effects: { f: 2 } },
    });
    const wake = scenes.get('ep_wake');
    const firstRoleSummary = wake.lines.findIndex(line => line.text.startsWith('朝ごはんを食べれば'));
    wake.lines.splice(firstRoleSummary + 1,0,{
      who:'narr',text:'食べたものを小さくする人。体の中で、異物を片づける人。いつもの範囲へ戻ったとき、その知らせを届ける人もいる。',
    });
    data.pools.twin = structuredClone(script.pools);
    for (const key of Object.keys(debut)) {
      const actor = data.meta.targets[key];
      data.pools[actor].info1[0][0].v5Schedule = key;
      data.scenes.find(scene => scene.id === 'p_' + key + '_1').after.at(-1).v5Schedule = key;
    }
    return global.HMV5PoseCues ? global.HMV5PoseCues.apply(data) : data;
  }

  class Game extends global.HMPlaytest.Game {
    constructor(data, seed) {
      super(data, seed);
      this.revision = revision;
    }

    active_targets() {
      return this.targets.filter(t => !debut[t] || this.seen['scene:' + debut[t]]);
    }

    stage_line(line) {
      const stage = this.presentation;
      const desired = line.v5Cast || stage.cast;
      const cast = newActors.has(line.who) && !desired.includes(line.who) ? [...desired, line.who] : desired;
      if (cast.join('|') !== stage.cast.join('|')) {
        stage.cast = [...cast];
        stage.revision++;
      }
      super.stage_line(line);
      if (this.scene?.v5Script && stage.cast.length > 3) {
        const active = stage.cast.includes(line.who) ? line.who : null;
        stage.cast = active ? [...stage.cast.filter(who => who !== active).slice(-2), active] : stage.cast.slice(-3);
        stage.revision++;
      }
    }

    *read(lines) {
      if (lines.some(line => line.v5Reply !== undefined || line.v5HikeClose !== undefined || line.v5Memory)) {
        const close = this.fr.mzt >= 30;
        lines = lines.filter(line =>
          (line.v5Reply === undefined || line.v5Reply === (this.vars.mzt_reply || '')) &&
          (line.v5HikeClose === undefined || line.v5HikeClose === close) &&
          (!line.v5Memory || (this.vars[line.v5Memory[0]] || '') === line.v5Memory[1]));
      }
      yield* super.read(lines);
    }

    *apply(effects, char = null) {
      const { mzt_reply, mzt_topic, v5_memory, v5_topic, ...otherEffects } = effects;
      if (mzt_reply !== undefined) this.vars.mzt_reply = mzt_reply;
      if (v5_memory) this.vars[v5_memory[0]] = v5_memory[1];
      yield* super.apply(otherEffects, char);
      const topic = v5_topic || (mzt_topic && ['mzt',mzt_topic]);
      if (topic) {
        const [key,subject] = topic;
        const kind = subject === this.R.topic_like[key] ? 'like' :
          subject === this.R.topic_bad[key] ? 'dislike' : 'neutral';
        yield* this.read(this.pool(this.CID[key], kind));
      }
    }

    *play({ short: walkthrough = short } = {}) {
      if (!walkthrough) return yield* super.play();

      for (const id of ['w2d1', 'w5d3']) {
        const [day, date, kind, weekday] = this.R.calendar.find(row => row[0] === id);
        this.day = day;
        this.weekday = weekday;
        this.set_cast([], 'day:' + day);
        yield { type: 'day', day, date, kind };
        yield* this.run_scene(this.R.events_at[day]);
        this.set_cast([], 'day-end:' + day);
        yield { type: 'day-end', day };
      }
      yield { type: 'milestone', id: 'V5-TWINS', text: '体力測定と遠足の試遊はここまでです。' };
      return 'V5-TWINS';
    }
  }

  const invitation = global.HM_DATE_INVITATION;
  if (invitation) invitation.voices.twin = {
    like: '{spot}、いいね。久しぶりに行きたかった。きみと行けるならうれしい。',
    neutral: '{spot}なら空いてるよ。何時なら会えそう？',
    bad: '{spot}か。人が多い日は少し迷うけど、途中で休めるなら一緒に行きたい。',
    confirm: 'うん、そこで会おう。着いたら、まずきみの顔を探すね。',
  };
  if (invitation) Object.assign(invitation.voices, {
    ami: {
      like:'{spot}？　うん、そこなら一緒に食べられる場所も探せる。',
      neutral:'{spot}か。行けるよ。途中で休む時間も空けておく。',
      bad:'{spot}、釣りかあ。浮きの見方、こっそり教えてくれる？',
      confirm:'了解。先に着いても、一口目は食べずに待ってる。',
    },
    yori: {
      like:'{spot}、ゆっくり座って見られる所があるね。ぜひ。',
      neutral:'{spot}なら行けるよ。今日は当番の鞄は置いてくね。',
      bad:'{spot}か。少し足元が心配だから、着いたら一緒に一周してくれる？',
      confirm:'うん。そこで会おう。きみが見たいところも聞かせて。',
    },
  });
  global.HMV5Pilot = { buildData, Game, namespace, portraitNamespace: previousNamespace, profiles, revision, short };
})(globalThis);
