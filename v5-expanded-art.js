/* Additional full-resolution V5 portraits. Each is used in the scenario. */
(function (art) {
  'use strict';
  const extras = {
  "ami-female": {
    "arrange": {
      "label": "仕込みを分ける",
      "src": "assets/v5-portraits/extra/ami-female-arrange.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99283854,
        "body_fraction": 0.98372396
      }
    },
    "blush": {
      "label": "好みを覚えられて照れる",
      "src": "assets/v5-portraits/extra/ami-female-blush.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99348958,
        "body_fraction": 0.98307292
      }
    },
    "intro": {
      "label": "澄から紹介される",
      "src": "assets/v5-portraits/extra/ami-female-intro.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.98372396
      }
    },
    "irritated": {
      "label": "札が食い違ってむっとする",
      "src": "assets/v5-portraits/extra/ami-female-irritated.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.98177083
      }
    },
    "lake": {
      "label": "湖で包みを乾いた箱へ",
      "src": "assets/v5-portraits/extra/ami-female-lake.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.98242188
      }
    },
    "laugh": {
      "label": "思いがけず笑う",
      "src": "assets/v5-portraits/extra/ami-female-laugh.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.9921875,
        "body_fraction": 0.98502604
      }
    },
    "offer": {
      "label": "紙袋を差し出す",
      "src": "assets/v5-portraits/extra/ami-female-offer.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98697917,
        "body_fraction": 0.97721354
      }
    },
    "quiet": {
      "label": "厨房の音が止まる",
      "src": "assets/v5-portraits/extra/ami-female-quiet.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.9921875,
        "body_fraction": 0.98372396
      }
    },
    "rain": {
      "label": "風で飛んだ紙を追う",
      "src": "assets/v5-portraits/extra/ami-female-rain.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99414062,
        "body_fraction": 0.98828125
      }
    },
    "running": {
      "label": "二人三脚で足を合わせる",
      "src": "assets/v5-portraits/extra/ami-female-running.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.97851562,
        "body_fraction": 0.96940104
      }
    },
    "share": {
      "label": "小皿を分ける",
      "src": "assets/v5-portraits/extra/ami-female-share.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.98177083
      }
    },
    "surprised": {
      "label": "落としそうな道具に気づく",
      "src": "assets/v5-portraits/extra/ami-female-surprised.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.9921875,
        "body_fraction": 0.98242188
      }
    },
    "taste": {
      "label": "先にひと口を試す",
      "src": "assets/v5-portraits/extra/ami-female-taste.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99283854,
        "body_fraction": 0.98372396
      }
    },
    "thoughtful": {
      "label": "焼き目を見分ける",
      "src": "assets/v5-portraits/extra/ami-female-thoughtful.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.98177083
      }
    },
    "wait": {
      "label": "休憩所で相手を待つ",
      "src": "assets/v5-portraits/extra/ami-female-wait.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99348958,
        "body_fraction": 0.98632812
      }
    }
  },
  "ami-male": {
    "arrange": {
      "label": "仕込みを分ける",
      "src": "assets/v5-portraits/extra/ami-male-arrange.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98111979,
        "body_fraction": 0.97330729
      }
    },
    "blush": {
      "label": "好みを覚えられて照れる",
      "src": "assets/v5-portraits/extra/ami-male-blush.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98046875,
        "body_fraction": 0.97070312
      }
    },
    "intro": {
      "label": "澄から紹介される",
      "src": "assets/v5-portraits/extra/ami-male-intro.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98046875,
        "body_fraction": 0.96940104
      }
    },
    "irritated": {
      "label": "札が食い違ってむっとする",
      "src": "assets/v5-portraits/extra/ami-male-irritated.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98111979,
        "body_fraction": 0.97135417
      }
    },
    "lake": {
      "label": "湖で包みを乾いた箱へ",
      "src": "assets/v5-portraits/extra/ami-male-lake.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98242188,
        "body_fraction": 0.97330729
      }
    },
    "laugh": {
      "label": "思いがけず笑う",
      "src": "assets/v5-portraits/extra/ami-male-laugh.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98177083,
        "body_fraction": 0.97330729
      }
    },
    "offer": {
      "label": "紙袋を差し出す",
      "src": "assets/v5-portraits/extra/ami-male-offer.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98307292,
        "body_fraction": 0.97330729
      }
    },
    "quiet": {
      "label": "厨房の音が止まる",
      "src": "assets/v5-portraits/extra/ami-male-quiet.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98111979,
        "body_fraction": 0.97200521
      }
    },
    "rain": {
      "label": "風で飛んだ紙を追う",
      "src": "assets/v5-portraits/extra/ami-male-rain.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.98307292
      }
    },
    "running": {
      "label": "二人三脚で足を合わせる",
      "src": "assets/v5-portraits/extra/ami-male-running.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.97395833,
        "body_fraction": 0.96419271
      }
    },
    "share": {
      "label": "小皿を分ける",
      "src": "assets/v5-portraits/extra/ami-male-share.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98177083,
        "body_fraction": 0.97395833
      }
    },
    "surprised": {
      "label": "落としそうな道具に気づく",
      "src": "assets/v5-portraits/extra/ami-male-surprised.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98046875,
        "body_fraction": 0.97395833
      }
    },
    "taste": {
      "label": "先にひと口を試す",
      "src": "assets/v5-portraits/extra/ami-male-taste.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98111979,
        "body_fraction": 0.97330729
      }
    },
    "thoughtful": {
      "label": "焼き目を見分ける",
      "src": "assets/v5-portraits/extra/ami-male-thoughtful.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98046875,
        "body_fraction": 0.97330729
      }
    },
    "wait": {
      "label": "休憩所で相手を待つ",
      "src": "assets/v5-portraits/extra/ami-male-wait.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.98307292
      }
    }
  },
  "shiori": {
    "asks": {
      "label": "相手の説明を待つ",
      "src": "assets/v5-portraits/extra/shiori-asks.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98697917,
        "body_fraction": 0.97786458
      }
    },
    "explains": {
      "label": "塩と水の欄を示す",
      "src": "assets/v5-portraits/extra/shiori-explains.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98697917,
        "body_fraction": 0.97786458
      }
    },
    "greets": {
      "label": "備汐里と名乗る",
      "src": "assets/v5-portraits/extra/shiori-greets.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98893229,
        "body_fraction": 0.97786458
      }
    }
  },
  "tsumugi": {
    "greets": {
      "label": "つむぎと遠足で出会う",
      "src": "assets/v5-portraits/extra/tsumugi-greets.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98763021,
        "body_fraction": 0.97851562
      }
    },
    "laughs": {
      "label": "幼なじみの話に笑う",
      "src": "assets/v5-portraits/extra/tsumugi-laughs.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98958333,
        "body_fraction": 0.98111979
      }
    },
    "notices": {
      "label": "同じ名字の返事に気づく",
      "src": "assets/v5-portraits/extra/tsumugi-notices.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.98177083
      }
    }
  },
  "twin-female": {
    "blush": {
      "label": "聞きたいことがある",
      "src": "assets/v5-portraits/extra/twin-female-blush.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.97981771
      }
    },
    "checking": {
      "label": "点呼板を見直す",
      "src": "assets/v5-portraits/extra/twin-female-checking.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.98177083
      }
    },
    "downcast": {
      "label": "連絡がすれ違う",
      "src": "assets/v5-portraits/extra/twin-female-downcast.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.98111979
      }
    },
    "happy": {
      "label": "肩の力が抜ける笑顔",
      "src": "assets/v5-portraits/extra/twin-female-happy.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.97981771
      }
    },
    "intro": {
      "label": "双子だと紹介される",
      "src": "assets/v5-portraits/extra/twin-female-intro.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99283854,
        "body_fraction": 0.98307292
      }
    },
    "invite": {
      "label": "帰り道に誘う",
      "src": "assets/v5-portraits/extra/twin-female-invite.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.97851562
      }
    },
    "lake": {
      "label": "湖上実習の点呼",
      "src": "assets/v5-portraits/extra/twin-female-lake.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.97851562
      }
    },
    "rain": {
      "label": "傘を探す",
      "src": "assets/v5-portraits/extra/twin-female-rain.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99283854,
        "body_fraction": 0.98958333
      }
    },
    "reserved": {
      "label": "言い出しかけてためらう",
      "src": "assets/v5-portraits/extra/twin-female-reserved.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.97721354
      }
    },
    "running": {
      "label": "体育祭のスタート",
      "src": "assets/v5-portraits/extra/twin-female-running.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.98111979
      }
    },
    "serious": {
      "label": "巡回を引き継ぐ",
      "src": "assets/v5-portraits/extra/twin-female-serious.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.97981771
      }
    },
    "share": {
      "label": "水筒を渡す",
      "src": "assets/v5-portraits/extra/twin-female-share.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.9921875,
        "body_fraction": 0.98111979
      }
    },
    "surprised": {
      "label": "名前を呼ばれて驚く",
      "src": "assets/v5-portraits/extra/twin-female-surprised.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.98177083
      }
    },
    "thinking": {
      "label": "返事を考え直す",
      "src": "assets/v5-portraits/extra/twin-female-thinking.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.98046875
      }
    }
  },
  "twin-male": {
    "blush": {
      "label": "聞きたいことがある",
      "src": "assets/v5-portraits/extra/twin-male-blush.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.97981771
      }
    },
    "checking": {
      "label": "点呼板を見直す",
      "src": "assets/v5-portraits/extra/twin-male-checking.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.98242188
      }
    },
    "downcast": {
      "label": "連絡がすれ違う",
      "src": "assets/v5-portraits/extra/twin-male-downcast.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98958333,
        "body_fraction": 0.97916667
      }
    },
    "happy": {
      "label": "肩の力が抜ける笑顔",
      "src": "assets/v5-portraits/extra/twin-male-happy.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.97916667
      }
    },
    "intro": {
      "label": "双子だと紹介される",
      "src": "assets/v5-portraits/extra/twin-male-intro.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.98177083
      }
    },
    "invite": {
      "label": "帰り道に誘う",
      "src": "assets/v5-portraits/extra/twin-male-invite.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.9921875,
        "body_fraction": 0.98242188
      }
    },
    "lake": {
      "label": "湖上実習の点呼",
      "src": "assets/v5-portraits/extra/twin-male-lake.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.98111979
      }
    },
    "rain": {
      "label": "傘を探す",
      "src": "assets/v5-portraits/extra/twin-male-rain.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98958333,
        "body_fraction": 0.98632812
      }
    },
    "reserved": {
      "label": "言い出しかけてためらう",
      "src": "assets/v5-portraits/extra/twin-male-reserved.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.98307292
      }
    },
    "running": {
      "label": "体育祭のスタート",
      "src": "assets/v5-portraits/extra/twin-male-running.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98111979,
        "body_fraction": 0.96875
      }
    },
    "serious": {
      "label": "巡回を引き継ぐ",
      "src": "assets/v5-portraits/extra/twin-male-serious.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.98177083
      }
    },
    "share": {
      "label": "水筒を渡す",
      "src": "assets/v5-portraits/extra/twin-male-share.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98958333,
        "body_fraction": 0.97851562
      }
    },
    "surprised": {
      "label": "名前を呼ばれて驚く",
      "src": "assets/v5-portraits/extra/twin-male-surprised.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.97981771
      }
    },
    "thinking": {
      "label": "返事を考え直す",
      "src": "assets/v5-portraits/extra/twin-male-thinking.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99023438,
        "body_fraction": 0.98372396
      }
    }
  },
  "yori-female": {
    "blush": {
      "label": "描いた絵を渡す前の照れ",
      "src": "assets/v5-portraits/extra/yori-female-blush.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99544271,
        "body_fraction": 0.99023438
      }
    },
    "check": {
      "label": "備品札を照合する",
      "src": "assets/v5-portraits/extra/yori-female-check.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99414062,
        "body_fraction": 0.98893229
      }
    },
    "flustered": {
      "label": "外した腕章に気づく",
      "src": "assets/v5-portraits/extra/yori-female-flustered.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99479167,
        "body_fraction": 0.99023438
      }
    },
    "intro": {
      "label": "備から紹介される",
      "src": "assets/v5-portraits/extra/yori-female-intro.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.98567708
      }
    },
    "invite": {
      "label": "寄り道に誘う",
      "src": "assets/v5-portraits/extra/yori-female-invite.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99153646,
        "body_fraction": 0.98632812
      }
    },
    "lake": {
      "label": "船の道具を数える",
      "src": "assets/v5-portraits/extra/yori-female-lake.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99479167,
        "body_fraction": 0.98958333
      }
    },
    "quiet": {
      "label": "話が途切れたとき",
      "src": "assets/v5-portraits/extra/yori-female-quiet.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99283854,
        "body_fraction": 0.98567708
      }
    },
    "rain": {
      "label": "雨の日の水彩箱",
      "src": "assets/v5-portraits/extra/yori-female-rain.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99544271,
        "body_fraction": 0.98958333
      }
    },
    "serious": {
      "label": "引き継ぎを聞く",
      "src": "assets/v5-portraits/extra/yori-female-serious.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.98502604
      }
    },
    "sketch": {
      "label": "花の色を一色写す",
      "src": "assets/v5-portraits/extra/yori-female-sketch.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99479167,
        "body_fraction": 0.98893229
      }
    },
    "smile": {
      "label": "顔を上げて笑う",
      "src": "assets/v5-portraits/extra/yori-female-smile.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99283854,
        "body_fraction": 0.98697917
      }
    },
    "sports": {
      "label": "体育祭で次の当番を呼ぶ",
      "src": "assets/v5-portraits/extra/yori-female-sports.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99544271,
        "body_fraction": 0.99088542
      }
    },
    "support": {
      "label": "隣にいて話を聞く",
      "src": "assets/v5-portraits/extra/yori-female-support.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.9921875,
        "body_fraction": 0.98372396
      }
    },
    "thinking": {
      "label": "どこを描くか考える",
      "src": "assets/v5-portraits/extra/yori-female-thinking.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99479167,
        "body_fraction": 0.98893229
      }
    },
    "walking": {
      "label": "風で紙を押さえる",
      "src": "assets/v5-portraits/extra/yori-female-walking.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.99088542,
        "body_fraction": 0.98567708
      }
    }
  },
  "yori-male": {
    "blush": {
      "label": "描いた絵を渡す前の照れ",
      "src": "assets/v5-portraits/extra/yori-male-blush.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98763021,
        "body_fraction": 0.97981771
      }
    },
    "check": {
      "label": "備品札を照合する",
      "src": "assets/v5-portraits/extra/yori-male-check.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98763021,
        "body_fraction": 0.98177083
      }
    },
    "flustered": {
      "label": "外した腕章に気づく",
      "src": "assets/v5-portraits/extra/yori-male-flustered.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98697917,
        "body_fraction": 0.98046875
      }
    },
    "intro": {
      "label": "備から紹介される",
      "src": "assets/v5-portraits/extra/yori-male-intro.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98567708,
        "body_fraction": 0.97851562
      }
    },
    "invite": {
      "label": "寄り道に誘う",
      "src": "assets/v5-portraits/extra/yori-male-invite.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98372396,
        "body_fraction": 0.97721354
      }
    },
    "lake": {
      "label": "船の道具を数える",
      "src": "assets/v5-portraits/extra/yori-male-lake.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98763021,
        "body_fraction": 0.98046875
      }
    },
    "quiet": {
      "label": "話が途切れたとき",
      "src": "assets/v5-portraits/extra/yori-male-quiet.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98763021,
        "body_fraction": 0.98046875
      }
    },
    "rain": {
      "label": "雨の日の水彩箱",
      "src": "assets/v5-portraits/extra/yori-male-rain.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98632812,
        "body_fraction": 0.98111979
      }
    },
    "serious": {
      "label": "引き継ぎを聞く",
      "src": "assets/v5-portraits/extra/yori-male-serious.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98893229,
        "body_fraction": 0.98242188
      }
    },
    "sketch": {
      "label": "花の色を一色写す",
      "src": "assets/v5-portraits/extra/yori-male-sketch.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98697917,
        "body_fraction": 0.97721354
      }
    },
    "smile": {
      "label": "顔を上げて笑う",
      "src": "assets/v5-portraits/extra/yori-male-smile.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98697917,
        "body_fraction": 0.97786458
      }
    },
    "sports": {
      "label": "体育祭で次の当番を呼ぶ",
      "src": "assets/v5-portraits/extra/yori-male-sports.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.9921875,
        "body_fraction": 0.98632812
      }
    },
    "support": {
      "label": "隣にいて話を聞く",
      "src": "assets/v5-portraits/extra/yori-male-support.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98242188,
        "body_fraction": 0.97395833
      }
    },
    "thinking": {
      "label": "どこを描くか考える",
      "src": "assets/v5-portraits/extra/yori-male-thinking.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98632812,
        "body_fraction": 0.98242188
      }
    },
    "walking": {
      "label": "風で紙を押さえる",
      "src": "assets/v5-portraits/extra/yori-male-walking.png",
      "scene": "本文で使用",
      "frame": {
        "bottom": 0.98111979,
        "body_fraction": 0.97265625
      }
    }
  }
};
  for (const [key, variants] of Object.entries(extras)) Object.assign(art[key].variants, variants);
})(globalThis.HMV5Art);
