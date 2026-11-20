/* Expressions follow authored dialogue, with no change to choices or save journals. */
(function(global){
  'use strict';
  const cues={
    twin:[
      ['worried','p_mzt_1','なら門までの分、先に書いて'],
      ['happy','p_mzt_1','ありがとう。着いたら解散'],
      ['trust','p_mzt_2','今日はちゃんと待てた'],
      ['depressed','p_mzt_3','急ぎの札を出したままにしたの'],
      ['trust','p_mzt_3','考え直す時間まで取ってくれて'],
      ['blush','p_mzt_4','空欄のまま紙を渡すほうが'],
      ['playful','kz_mzt_1','帳消しになったはず'],
      ['happy','kz_mzt_2','聞く順番を変えただけなのに'],
      ['happy','cv_mzt_01','同時に振り向くから'],
      ['playful','cv_mzt_02','ひもだけ変えた'],
      ['worried','cv_mzt_03','聞こえたふりをするほうが'],
      ['angry','cv_mzt_03','ちょっと悔しい'],
      ['happy','cv_mzt_04','何か話そうか'],
      ['trust','cv_mzt_05','今度は丸で済ませないよ'],
      ['blush','cv_mzt_06','ただ隣で話したくて取った席'],
      ['worried','cv_mzt_08','ちょっと聞いてもいい'],
      ['trust','cv_mzt_08','合わせられるなら合わせたい'],
      ['happy','cv_mzt_09','見られてそうだけどね'],
      ['happy','cv_mzt_10','どこか寄っていける日'],
      ['playful','cv_mzt_11','自慢していい'],
      ['worried','cv_mzt_12','全部約束みたいに聞こえる'],
      ['blush','cv_mzt_12','来月も会える日があったら'],
      ['trust','cv_mzt_12','空欄のままでも楽しみにできる'],
      ['angry','tw_mzt_2','今の、まだ聞いてない'],
      ['depressed','rv_mzt_1','こっちが勝手に書いてた'],
      ['trust','rv_mzt_1','先に見せておけば'],
      ['sorrow','rv_mzt_3ng','赤路に伝言を頼む'],
      ['trust','rv_mzt_3ok','自分から言いに来る'],
      ['blush','dream_xmas_mzt','一緒に帰ってもいい'],
      ['playful','dream_val_mzt','二人で食べたいほう'],
      ['surprised','ev_shed_mzt','来たことにはならないか'],
      ['worried','ev_shed_mzt','さっきから怖いのに'],
      ['blush','ev_night_mzt','名前のほうも、また呼んで'],
      ['happy','fs1_lunch_mzt','先に言っていいんだった'],
      ['happy','fs1_tent_mzt','軽いね'],
      ['surprised','fs2_cafe_mzt','順番に使うわけにはいかないね'],
      ['happy','fs2_cafe_mzt','両方よかったやつだ'],
      ['worried','fs2_ghost_mzt','袖をつまんでてもいい'],
      ['playful','fs2_ghost_mzt','予定を決めるのが早いね'],
      ['blush','fs2_sun_mzt','一緒に見るなら'],
      ['joyful_tears','fs2_crisis_mzt','戻ったことも、ちゃんと確かめられた'],
    ],
    ami:[
      ['listless','p_ami_1','日直かと思った'],
      ['worried','p_ami_1','少し焼きすぎた'],
      ['happy','p_ami_1','ちゃんと味で分かるんだ'],
      ['trust','p_ami_2','見てくれる人がいると安心する'],
      ['angry','p_ami_3','やった方が早い'],
      ['trust','p_ami_3','見張らないから'],
      ['blush','p_ami_4','待たされるの、やっぱり苦手'],
      ['surprised','p_ami_4','いいの？'],
      ['blush','kz_ami_1','自分で選んだ方を言いたくなる'],
      ['happy','kz_ami_2','台所の用事がなくても誘っていい'],
      ['playful','cv_ami_01','先生には今の言わないで'],
      ['playful','cv_ami_02','味は食べるまでのお楽しみ'],
      ['listless','cv_ami_03','何度も目が閉じると'],
      ['happy','cv_ami_03','二人前に直す'],
      ['listless','cv_ami_04','今は楽していい時間'],
      ['playful','cv_ami_04','きみは何で手抜きする'],
      ['happy','cv_ami_05','端はあたしの分'],
      ['blush','cv_ami_06','きみの分なら'],
      ['happy','cv_ami_08','次に一緒に食べられる時まで'],
      ['blush','cv_ami_10','きみに会ってる'],
      ['worried','cv_ami_11','お腹いっぱい？'],
      ['trust','cv_ami_11','味の感想は、最後の一口のあと'],
      ['blush','cv_ami_12','大げさな予定はこれから'],
      ['depressed','rv_ami_1','先に作っておきたくなる'],
      ['angry','rv_ami_3','言い合う前に'],
      ['sorrow','rv_ami_3ng','今日の分は封をする'],
      ['trust','rv_ami_3ok','二人とも手が空く時間'],
      ['listless','dream_xmas_ami','まだ朝にもなってない'],
      ['happy','dream_val_ami','途中で交換していい'],
      ['surprised','ev_shed_ami','戸、閉まった？'],
      ['depressed','ev_shed_ami','ずるいな'],
      ['playful','ev_night_ami','目を閉じるだけで味'],
      ['blush','fs1_lunch_ami','きみの隣を空けてもらった'],
      ['happy','fs1_tent_ami','休める人が増える'],
      ['trust','fs2_cafe_ami','今日は三皿より'],
      ['surprised','fs2_ghost_ami','それは聞いてない'],
      ['blush','fs2_sun_ami','一人で食べて先に帰りたくない'],
      ['angry','fs2_crisis_ami','こっちの台を急がせても'],
      ['joyful_tears','fs2_crisis_ami','次に渡せた方がうれしい'],
    ],
    yori:[
      ['blush','p_yor_1','しばらくこの向きのまま'],
      ['happy','p_yor_1','忘れないうちに、すぐ笑うから'],
      ['trust','p_yor_2','話す方は任せてもいい'],
      ['worried','p_yor_3','その後はどう'],
      ['happy','p_yor_3','大丈夫って、本人から聞けた'],
      ['blush','p_yor_4','見せる方は重たい気がする'],
      ['surprised','kz_yor_1','鉛筆は私の'],
      ['trust','kz_yor_2','またきみに見てもらうよ'],
      ['playful','cv_yor_01','一緒に探してもらえるかな'],
      ['surprised','cv_yor_02','そう？'],
      ['happy','cv_yor_02','最後の一枚がついた時に'],
      ['sorrow','cv_yor_03','色を言葉にしてなかった'],
      ['happy','cv_yor_03','きみの目には何色か'],
      ['trust','cv_yor_04','きみが見ていたもの'],
      ['worried','cv_yor_06','何をしてほしいか聞くのが後'],
      ['blush','cv_yor_06','一緒に帰りたいだけなら'],
      ['trust','cv_yor_08','歩き出してからでも'],
      ['happy','cv_yor_08','次も覚えておくね'],
      ['trust','cv_yor_11','急いでうまくやったふりをしなくていい'],
      ['happy','cv_yor_12','選んだ理由まで覚えておける'],
      ['surprised','hp_yor_1','落とし物になりかけてた'],
      ['depressed','hp_yor_2','今日はそういう用事があって'],
      ['blush','hp_yor_3','足音まで描ければ'],
      ['playful','tw_yor_1','よく真似したね'],
      ['blush','tw_yor_4','もう少し二人で歩かない'],
      ['worried','rv_yor_1','手が足りない日に'],
      ['happy','rv_yor_1','今はその予定を作れるね'],
      ['trust','rv_yor_3','分けて話すね'],
      ['sorrow','rv_yor_3ng','私が済んだことを一つずつ'],
      ['trust','rv_yor_3ok','角を曲がる時も気が楽'],
      ['happy','dream_xmas_yor','周りを少し描く'],
      ['blush','dream_val_yor','次の休みにも'],
      ['surprised','ev_shed_yor','探し物の方は終わった'],
      ['trust','ev_shed_yor','二人の声なら届くね'],
      ['happy','fs1_lunch_yor','そういう答えが聞きたかった'],
      ['worried','fs1_tent_yor','先生を呼ぶから'],
      ['trust','fs2_play_yor','聞こえてるから'],
      ['playful','fs2_ghost_yor','驚かせる方には回ってない'],
      ['joyful_tears','fs2_crisis_yor','残ることと、任せること'],
    ],
  };
  const poolExpressions={
    refuse0:'worried',refuse1:'blush',ok2:'happy',ok3:'blush',invite4:'blush',
    like:'happy',dislike:'worried',stat1:'happy',stat2:'trust',stat3:'blush',
    date_refuse:'blush',date_like:'happy',date_ok:'trust',date_bad:'worried',
    bomb:'tears',fix:'sorrow',nf:'blush',sched1:'happy',sched2:'blush',
    repeat:'happy',phone_call:'trust',dream_after_xmas:'blush',dream_after_val:'blush',
    ident_hint:'trust',ident_ok:'happy',ident_ng:'worried',
  };
  function apply(data){
    const scenes=new Map(data.scenes.map(s=>[s.id,s]));
    data.rules.acting.ids.push('v5-reaction-original');
    for(const [id,who,anchor] of [
      ['v5_sports_roll_call','twin','人の顔が見えたら安心して'],
      ['ev_curry_end','ami','さっきの野菜'],
      ['v5_sports_arrival','yori','ぶつかってない'],
    ]){
      const line=global.HMPresentation.linesOf(scenes.get(id)).find(l=>l.who===who&&l.text.includes(anchor));
      if(!line)throw Error('V5 introduction reaction missing: '+id);
      line.act='v5-reaction-original';
    }
    for(const [who,entries] of Object.entries(cues)){
      for(const [expression,id,anchor] of entries){
        const scene=scenes.get(id);
        const matches=scene&&global.HMPresentation.linesOf(scene).filter(l=>l.who===who&&l.text.includes(anchor));
        if(!matches||matches.length!==1)throw Error('V5 expression anchor changed: '+id+' / '+anchor);
        matches[0].expr=expression;
      }
      for(const [kind,expression] of Object.entries(poolExpressions)){
        for(const lines of data.pools[who]?.[kind]||[]){
          for(const line of lines)if(line.who===who)line.expr=expression;
        }
      }
    }
    return data;
  }
  global.HMV5ExpressionCues={apply,cues};
})(globalThis);
