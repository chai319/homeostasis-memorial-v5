/* 瑞太／瑞葉ルート脚本から生成。物語データとV4.5への接続。 */
globalThis.HMV5TwinScript = Object.freeze({
  "scenes": [
    {
      "id": "v5_sports_roll_call",
      "char": "mzt",
      "title": "点呼、あとひとり",
      "lines": [
        {
          "who": "narr",
          "text": "測定を終えた班が、グラウンドの端に集まった。給水台の水守が、点呼板を持った生徒に手を振った。"
        },
        {
          "who": "me",
          "text": "水守、こっちにも？　先生が呼んでたのはどっちだろう。"
        },
        {
          "who": "adh",
          "text": "……別々。こっちは給水。この人は双子の瑞葉。となりの一年B組で、今日の巡回係。",
          "fm": {
            "text": {
              "v": "……別々。こっちは給水。この人は双子の瑞太。となりの一年B組で、今日の巡回係。",
              "on": "t"
            }
          },
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "水守瑞葉です。給水台にいる方じゃなくて、いなくなった人を探す方。ええと、あと一人……。",
          "fm": {
            "text": {
              "v": "水守瑞太です。給水台にいる方じゃなくて、いなくなった人を探す方。ええと、あと一人……。",
              "on": "t"
            }
          },
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "こちらが返事をする前に、点呼表に丸がついた。"
        },
        {
          "who": "adh",
          "text": "……今の丸、まだ返事してないよ。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "人の顔が見えたら安心して、つい。……もう一回聞いていい？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "うん。今度は、返事してから書いて。"
        },
        {
          "who": "yori",
          "text": "朝は落とした鉛筆を拾ってくれてありがとう。困ったら、こっちの腕章で呼んで。今日は字が外に向いてるから。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "じゃあ先輩も、返事のところを見ててください。次はちゃんと聞きます。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "day": "w2d1",
      "place": "field",
      "time": "放課後",
      "bgm": "keep",
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 6
        }
      },
      "cast": [
        "adh",
        "twin",
        "yori"
      ]
    },
    {
      "id": "v5_hike_break",
      "char": "mzt",
      "title": "点呼表の空欄",
      "lines": [
        {
          "who": "narr",
          "text": "山道の途中に、木のベンチが二つ並んでいた。白い上着が人の間を縫って、こちらにやってくる。"
        },
        {
          "who": "twin",
          "text": "前の班、全員。後ろの班……あと一人。次、行けそう？",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "口を開く前に、もう「出発」に丸がついた。グラウンドでも同じことがあった。"
        },
        {
          "who": "tsumugi",
          "text": "その丸、誰が返事したの？",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "……鉛筆が先に答えた。",
          "expr": "worried"
        },
        {
          "who": "me",
          "text": "瑞葉のこと、ずいぶんよく分かるんですね。",
          "fm": {
            "text": {
              "v": "瑞太のこと、ずいぶんよく分かるんですね。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "B組の結城つむぎ。小学校の時から、こっちが先に丸をつけると横から止めてくれる。",
          "expr": "neutral"
        },
        {
          "who": "tsumugi",
          "text": "今度は止める方も一緒に休む。そこ、座れる？",
          "expr": "neutral"
        },
        {
          "who": "shiori",
          "text": "鉛筆は山頂まで連れていけるけど、この人の荷物は持てないよ。",
          "expr": "neutral"
        },
        {
          "who": "adh",
          "text": "……水門は見てる。そっちは、今の様子だけ教えて。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "わかった。……ごめん。今、どうしたい？",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "じゃあ、空欄のままにする。先に丸をつけたら、また消すことになるし。",
                  "expr": "happy"
                },
                {
                  "who": "narr",
                  "text": "瑞葉が点呼表の角を押さえたまま、ベンチの端へずれた。",
                  "fm": {
                    "text": {
                      "v": "瑞太が点呼表の角を押さえたまま、ベンチの端へずれた。",
                      "on": "t"
                    }
                  }
                },
                {
                  "who": "me",
                  "text": "そっちも座らないの？"
                },
                {
                  "who": "twin",
                  "text": "ああ。……待つのと、立ってるのは、別か。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2
              },
              "label": "もう少し、ここで休みたい"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "了解。戻ったときに、もう一度聞く。",
                  "expr": "neutral"
                },
                {
                  "who": "tsumugi",
                  "text": "いまのは、ちゃんと本人の返事だった。",
                  "expr": "neutral",
                  "act": "v5-special"
                },
                {
                  "who": "twin",
                  "text": "うん。字にしなくても覚えてる。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2
              },
              "label": "先にみんなを見てきて。落ち着いたら呼ぶ"
            }
          ]
        }
      ],
      "clues": [
        {
          "char": "mzt",
          "text": "水門が水を取り戻す一方、瑞の模型では管の壁が縮んで内側が狭くなる。"
        },
        {
          "char": "mzt",
          "text": "血圧が大きく下がったとき、瑞の持ち場では管の壁が縮み、血圧を支える。"
        }
      ],
      "v5Script": true,
      "day": "w5d3",
      "place": "mountain",
      "time": "昼前",
      "bgm": "keep",
      "v5Outfit": "fieldwork",
      "goto": {
        "type": "if",
        "cond": [
          [
            "tai",
            ">=",
            35
          ]
        ],
        "then": "ev_hike_top",
        "else": "DAY"
      },
      "after": [
        {
          "who": "narr",
          "text": "休憩のあと。全員の返事を聞き終えた瑞葉が、保健委員の展示で使う模型を出した。血の通り道に見立てた管で、血圧が大きく下がったときの動きを試す。合図を受けた管の壁が縮み、血圧を支えた。",
          "fm": {
            "text": {
              "v": "休憩のあと。全員の返事を聞き終えた瑞太が、保健委員の展示で使う模型を出した。血の通り道に見立てた管で、血圧が大きく下がったときの動きを試す。合図を受けた管の壁が縮み、血圧を支えた。",
              "on": "t"
            }
          }
        },
        {
          "who": "adh",
          "text": "……水門は、体の水を取り戻すほう。同じ合図でも、向こうの管は壁が縮んで内側が狭くなる。",
          "expr": "neutral"
        },
        {
          "who": "adh",
          "text": "……となりの帳面を持ってるのは、備の妹。水と塩で記録の紙が違う。",
          "expr": "neutral"
        },
        {
          "who": "shiori",
          "text": "備汐里。塩係も合ってるけど、名前で呼んでくれたら私の方だけ振り向くよ。",
          "expr": "neutral"
        },
        {
          "who": "shiori",
          "text": "水と同じ欄で済ませないでね。別々に記録しとくから。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "書き直せるように、最初から鉛筆にしといてよかった。",
          "expr": "happy"
        },
        {
          "who": "twin",
          "text": "気をつけてね。次の角で待ってる。",
          "expr": "neutral",
          "v5HikeClose": false
        },
        {
          "who": "twin",
          "text": "帰り、隣を歩いてもいい？　……名簿には書かないほうの話。",
          "expr": "neutral",
          "v5HikeClose": true
        },
        {
          "who": "me",
          "text": "うん。少し黙って歩く時間も、あっていい？",
          "v5HikeClose": true
        },
        {
          "who": "twin",
          "text": "あっていい。じゃあ、静かに歩こう。次の角まで。",
          "expr": "happy",
          "v5HikeClose": true
        }
      ],
      "cast": [
        "twin",
        "tsumugi",
        "shiori",
        "adh"
      ]
    },
    {
      "id": "p_mzt_1",
      "day": "personal",
      "date": "月曜の放課後",
      "place": "keep",
      "time": "放課後",
      "bgm": "keep",
      "char": "mzt",
      "title": "空欄の点呼表",
      "lines": [
        {
          "who": "narr",
          "text": "出席板に、こちらの帰る時刻まで書きかけてあった。"
        },
        {
          "who": "twin",
          "text": "{sei}さんは、このあと帰る？　なら門までの分、先に書いて……あ。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "まだ、帰るって返事してないよ。"
        },
        {
          "who": "twin",
          "text": "うん。消す。ちゃんと聞くんだった。……門まで一緒に行っていい？",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "ありがとう。着いたら解散。続きがあれば、そのとき聞くよ。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2,
                "t": 2
              },
              "label": "門まで一緒に行こう"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "わかった。次に会ったときのことは、まだ書かないでおく。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1
              },
              "label": "今日は用事がある。また会おう"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "瑞葉は消し跡だけ残った欄を見ている。",
          "fm": {
            "text": {
              "v": "瑞太は消し跡だけ残った欄を見ている。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "何も書いてない紙って、こんなに落ち着かないんだね。……また話すなら、月曜はグラウンド、水曜は理科室、金曜は屋上にいるよ。",
          "expr": "neutral"
        }
      ],
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 4
        }
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "p_mzt_2",
      "day": "personal",
      "date": "放課後",
      "place": "staffroom",
      "time": "放課後",
      "bgm": "keep",
      "char": "mzt",
      "title": "奥の段から同じ便",
      "lines": [
        {
          "who": "narr",
          "text": "中枢先生が直筆の紙を二段ポストの奥へ入れた。瑞葉が立つ。",
          "fm": {
            "text": {
              "v": "中枢先生が直筆の紙を二段ポストの奥へ入れた。瑞太が立つ。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "奥の窓口から出る合図、二人とも受け取るんだ。向こうは水門へ、こっちは血の通り道の模型へ。",
          "expr": "neutral"
        },
        {
          "who": "hypothalamus",
          "text": "体液が濃くなったときや、血圧が大きく下がったときに、奥の窓口から合図を出すよ。二人の模型に届いたら、違いを見てごらん。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "先生の直筆なら、二人が知っているんだ。"
        },
        {
          "who": "twin",
          "text": "合図は同じ。向こうの水門では水を戻す。こっちでは、管の壁がきゅっと縮む。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "模型の横の目盛り、読んでくれる？　こっちの管が縮むのは、血圧を支えるためなんだ。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2,
                "t": 2,
                "u": 1
              },
              "label": "二つの模型の動きを一緒に確かめる"
            },
            {
              "response": [
                {
                  "who": "hypothalamus",
                  "text": "前の段から出るのは別の呼び出し状。この直筆は奥の段だよ。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "u": 1
              },
              "label": "前の段からも同じ便が出るか尋ねる"
            }
          ]
        }
      ],
      "clues": [
        {
          "char": "mzt",
          "text": "先生の合図は、二段ポストの奥の窓口から、水門と血管の模型の両方へ届く。"
        }
      ],
      "v5Script": true,
      "after": [
        {
          "who": "twin",
          "text": "今日はちゃんと待てた。……一人だと、もう二行くらい先に書いてたと思う。",
          "expr": "neutral"
        }
      ],
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 5
        }
      },
      "cast": [
        "twin",
        "hypothalamus"
      ]
    },
    {
      "id": "p_mzt_3",
      "day": "personal",
      "date": "放課後",
      "place": "staffroom",
      "time": "放課後",
      "bgm": "feedback",
      "char": "mzt",
      "title": "止める指示票",
      "lines": [
        {
          "who": "narr",
          "text": "模型の前に、赤い合図の札と、時刻の新しい記録があった。瑞葉は赤いほうをつかんだ。",
          "fm": {
            "text": {
              "v": "模型の前に、赤い合図の札と、時刻の新しい記録があった。瑞太は赤いほうをつかんだ。",
              "on": "t"
            }
          }
        },
        {
          "who": "me",
          "text": "待って。その二つ、時刻が違う。"
        },
        {
          "who": "twin",
          "text": "……赤いほうを先に模型へ差すつもりだった。急ぎそうな色だから。",
          "expr": "neutral",
          "act": "v5-pivotal"
        },
        {
          "who": "narr",
          "text": "赤い札は、血圧が大きく下がったときの合図。新しい記録には、血圧も体液の濃さも元の範囲に戻ったとある。"
        },
        {
          "who": "twin",
          "text": "古い合図を使い続けたら、血圧が戻っても管を縮めたままになる。急ぎの札を出したままにしたの、こっちだ。",
          "expr": "neutral",
          "act": "v5-pivotal"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "消して済ませる前に、どういうときに合図が出たか、二人で見直そう。",
                  "expr": "neutral",
                  "act": "v5-pivotal"
                }
              ],
              "effects": {
                "f": 2,
                "u": 2
              },
              "label": "二枚の時刻を比べて、合図が出た順を確かめる"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。いまの目盛りを見よう。札の色だけで、もう決めない。",
                  "expr": "neutral",
                  "act": "v5-pivotal"
                }
              ],
              "effects": {
                "f": 2,
                "t": 1,
                "u": 1
              },
              "label": "最新の血圧を確かめてから、模型を動かす"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "赤は、血圧が下がった時点の合図。いまの目盛りを見たら、ここで区切れると思う。",
                  "expr": "neutral",
                  "act": "v5-pivotal"
                }
              ],
              "effects": {
                "f": -1
              },
              "label": "赤い紙の指示を続ける"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "hypothalamus",
          "text": "血圧も体液の濃さも戻ったね。奥の窓口から出る合図を、ここから弱めよう。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "瑞葉は赤い紙に終了時刻を書き足した。",
          "fm": {
            "text": {
              "v": "瑞太は赤い紙に終了時刻を書き足した。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "考え直す時間まで取ってくれて、ありがとう。明日はこっちが、きみの話を聞く番にさせて。",
          "expr": "neutral",
          "act": "v5-pivotal"
        }
      ],
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 6
        }
      },
      "cast": [
        "twin",
        "hypothalamus"
      ]
    },
    {
      "id": "p_mzt_4",
      "day": "personal",
      "date": "放課後",
      "place": "keep",
      "time": "夕方",
      "bgm": "feedback",
      "char": "mzt",
      "title": "空欄で渡す招待状",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が差し出した紙には、きちんとした折り目だけがあった。",
          "fm": {
            "text": {
              "v": "瑞太が差し出した紙には、きちんとした折り目だけがあった。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "次の休み、どこかで会いたい。行き先をこっちで書くと、また返事より先になるから。",
          "expr": "neutral",
          "act": "v5-trust"
        },
        {
          "who": "me",
          "text": "行き先が決まってなくても、誘えるんだね。"
        },
        {
          "who": "twin",
          "text": "今日、ずっとそれを練習してた。空欄のまま紙を渡すほうが、山道を急ぐより息が切れる。",
          "expr": "neutral",
          "act": "v5-trust"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。話さない時間も取ろう。水辺なら、黙ってても見ていられそうだし。",
                  "expr": "neutral",
                  "act": "v5-trust"
                }
              ],
              "effects": {
                "t": 2,
                "f": 1
              },
              "label": "水辺なら、少し話せそう"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "じゃあ持ってて。今度会ったとき、半分ずつ考えよう。",
                  "expr": "neutral",
                  "act": "v5-trust"
                }
              ],
              "effects": {
                "f": 2,
                "t": 1
              },
              "label": "行き先は二人で決めたい"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "わかった。予定表の空きじゃなくて、次の返事を待ってる。",
                  "expr": "neutral",
                  "act": "v5-trust"
                }
              ],
              "effects": {
                "f": 1
              },
              "label": "今ここでは決めず、次に会って話そう"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "予定は決まらなかった。紙はもらって帰った。"
        }
      ],
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 8,
          "relax_mzt": 1
        }
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "kz_mzt_1",
      "day": "bond",
      "date": "keep",
      "place": "shoebox",
      "time": "昼休み",
      "bgm": "morning",
      "char": "mzt",
      "title": "二人分の点呼",
      "lines": [
        {
          "who": "narr",
          "text": "昇降口で、つむぎが瑞葉の声をまねた。",
          "fm": {
            "text": {
              "v": "昇降口で、つむぎが瑞太の声をまねた。",
              "on": "t"
            }
          }
        },
        {
          "who": "tsumugi",
          "text": "「前の班、全員。後ろの班も……あ、今のは鉛筆が先でした」。",
          "expr": "neutral",
          "act": "v5-mimic"
        },
        {
          "who": "twin",
          "text": "そこまで声に出してない。……この前の巡回も、先に丸はつけなかったし。",
          "expr": "neutral"
        },
        {
          "who": "tsumugi",
          "text": "うん。展示の練習でも待ってたよね。血圧が大きく下がった場面で、合図が届いてから管を縮めてた。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "縮めると血圧を支えられるんだ。合図を待つのは練習したけど、人の返事まで待つのはまだ修行中。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "つむぎさん、いつからその声まねができるの？"
        },
        {
          "who": "tsumugi",
          "text": "小学生の席替えから。まだ返事してないのに、隣に座るって先に決められた日があってね。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "……あれは、その席が空くまで毎日付き合ったことで、帳消しになったはず。",
          "expr": "neutral"
        },
        {
          "who": "tsumugi",
          "text": "うん。席が空くまでに、友達になれたもんね。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [
        {
          "char": "mzt",
          "text": "血圧が大きく下がったとき、瑞の持ち場では管の壁が縮み、血圧を支える。"
        }
      ],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "DAY"
      },
      "cast": [
        "tsumugi",
        "twin"
      ]
    },
    {
      "id": "kz_mzt_2",
      "day": "bond",
      "date": "keep",
      "place": "shoebox",
      "time": "放課後",
      "bgm": "morning",
      "char": "mzt",
      "title": "予定を聞く練習",
      "lines": [
        {
          "who": "narr",
          "text": "昇降口で瑞葉が手を上げた。今日は板を持っていない。",
          "fm": {
            "text": {
              "v": "昇降口で瑞太が手を上げた。今日は板を持っていない。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "迎えに行こうと思った。その前に、きみは何時に帰る予定だった？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "一緒に帰るなら、今からでも。"
        },
        {
          "who": "twin",
          "text": "じゃあ、今から。聞く順番を変えただけなのに、こっちも誘いやすいな。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "そういう返事、うれしいね。……板がないから、覚えて帰る。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "t": 4
              },
              "label": "わざわざ聞いてくれて、うれしかった"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。まだ角を一つも曲がってないしね。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2
              },
              "label": "帰り道は、歩きながら決めよう"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "瑞葉は行き先を指す前に、こちらと歩幅を揃えた。",
          "fm": {
            "text": {
              "v": "瑞太は行き先を指す前に、こちらと歩幅を揃えた。",
              "on": "t"
            }
          }
        }
      ],
      "goto": {
        "type": "next",
        "id": "DAY"
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_01",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "髪の留め方",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が前髪の銀のピンを押し直した。",
          "fm": {
            "text": {
              "v": "瑞太が前髪の銀のピンを押し直した。",
              "on": "t"
            }
          }
        },
        {
          "who": "me",
          "text": "巡回するとき、前が見えにくい？"
        },
        {
          "who": "twin",
          "text": "板を見て、そのあとすぐ顔を見るでしょ。前髪を片側だけ留めておくと楽なんだ。つむぎは遠くからでも、それで見つけるって。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "目印なんだね。"
        },
        {
          "who": "twin",
          "text": "うん。水門のほうと二人並ぶと、名字だけだと同時に振り向くから。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_02",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "rainy",
      "char": "mzt",
      "title": "水筒のふた",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉の鞄で、ふたが小さく鳴った。水筒に細い白いひもが巻いてある。",
          "fm": {
            "text": {
              "v": "瑞太の鞄で、ふたが小さく鳴った。水筒に細い白いひもが巻いてある。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "昔は二人とも同じ水筒を持ってて。中が違っても、ふたを開けるまで分からなかった。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "それで色を変えた？"
        },
        {
          "who": "twin",
          "text": "ひもだけ変えた。ほら。結び目の大きい方が、こっちの水筒。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_03",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "雨の点呼",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が傘を差すと、しずくが敷石に落ちた。",
          "fm": {
            "text": {
              "v": "瑞太が傘を差すと、しずくが敷石に落ちた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "雨の日の点呼、苦手なんだよ。傘をたたむ音と名前が重なる。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "聞こえなかったら、もう一回呼んでいいんじゃない？"
        },
        {
          "who": "twin",
          "text": "そうなんだけど。聞こえたふりをするほうが、その場では早いから。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "そのあと一人分ずれたら、余計に時間がかかる。"
        },
        {
          "who": "twin",
          "text": "……そういうところ、きみは見逃してくれないね。助かるけど、ちょっと悔しい。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_04",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "楽な通学路",
      "lines": [
        {
          "who": "narr",
          "text": "近道のほうで、自転車のベルが鳴った。"
        },
        {
          "who": "twin",
          "text": "早く着くのはこっち。歩きやすいのは、どっちだろう。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "大きい道のほう。急がなくていいなら、話しながら歩ける。"
        },
        {
          "who": "twin",
          "text": "じゃあ、大きい道。普段なら看板まで何分、とか測るんだけど。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "まだ少し歩くね。何か話そうか。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "どんな順番にした？",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "mzt_topic": "keikaku"
              },
              "label": "勉強の計画を立てた話をする"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "どのくらい急いだの？",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "mzt_topic": "sports"
              },
              "label": "みんなで速さを競った話をする"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "この先の角の話？",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "mzt_topic": "mizu"
              },
              "label": "通学路で見かけたことを話す"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_05",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "汐里の帳面",
      "lines": [
        {
          "who": "narr",
          "text": "汐里の帳面に、水滴と四角い印が並んでいた。"
        },
        {
          "who": "shiori",
          "text": "水分の話は先生と水守に。塩の欄は私に。数字が同じだと全部いっしょにされるんだよね。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "右だけ写しておく？",
          "expr": "neutral"
        },
        {
          "who": "shiori",
          "text": "右を写す前に、左と何が違うか言ってみて。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "左は水がどうなったか。右は塩のこと。"
        },
        {
          "who": "shiori",
          "text": "そう。瑞葉にも、今の言い方で教えてあげて。",
          "fm": {
            "text": {
              "v": "そう。瑞太にも、今の言い方で教えてあげて。",
              "on": "t"
            }
          },
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "……聞いてた。明日も忘れないように、今度は丸で済ませないよ。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "need": [
        [
          "f",
          ">=",
          40
        ]
      ],
      "schoolOnly": true,
      "cast": [
        "shiori",
        "twin"
      ]
    },
    {
      "id": "cv_mzt_06",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "crisis",
      "char": "mzt",
      "title": "二つ取っておいた席",
      "lines": [
        {
          "who": "narr",
          "text": "窓際のベンチに、二人の名前を書いた紙が置かれていた。"
        },
        {
          "who": "me",
          "text": "ここの席、取ってくれたの？"
        },
        {
          "who": "twin",
          "text": "うん。……あ、座っていく予定か聞いてなかった。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "少しなら座れるよ。その紙、机のほうに持っていかなくていいの？"
        },
        {
          "who": "twin",
          "text": "いい。今度はただ隣で話したくて取った席だから。先にそう言えばよかったね。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "need": [
        [
          "f",
          ">=",
          30
        ]
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_07",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "水門の音",
      "lines": [
        {
          "who": "narr",
          "text": "水場で金具が一度鳴った。瑞葉が足を止める。",
          "fm": {
            "text": {
              "v": "水場で金具が一度鳴った。瑞太が足を止める。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "水門の模型が水を取り戻す音。こっちも同じ合図を受け取ったよ。透明な管を見て。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "同じ合図なのに、こっちは管の壁が縮んで、内側が狭くなった。"
        },
        {
          "who": "twin",
          "text": "うん。水門と管で、動きが違うんだ。水門の金具、いい音でしょ。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [
        {
          "char": "mzt",
          "text": "水門が水を取り戻す一方、瑞の模型では管の壁が縮んで内側が狭くなる。"
        }
      ],
      "v5Script": true,
      "need": [
        [
          "f",
          ">=",
          40
        ]
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_08",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "返事の速さ",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が点呼板の白いところに目を落とした。",
          "fm": {
            "text": {
              "v": "瑞太が点呼板の白いところに目を落とした。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "ちょっと聞いてもいい？　答えを待ってるとき、こっちが黙ってたほうがいいのか、質問し直したほうがいいのか、まだ迷う。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "たとえば、次にどこを歩くかとか？"
        },
        {
          "who": "twin",
          "text": "うん。きみが答えを決める速さ、合わせられるなら合わせたい。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。じゃあ答えを聞いたら、二回目は聞かない。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1,
                "mzt_reply": "now"
              },
              "label": "言えるときは、その場で答えたい"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "わかった。次の角まで、黙ってても大丈夫なやつだね。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1,
                "mzt_reply": "later"
              },
              "label": "少し考えてから、言葉にしたい"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "need": [
        [
          "f",
          ">=",
          40
        ]
      ],
      "after": [
        {
          "who": "narr",
          "text": "今度は何も書かず、こちらから声をかけるのを待っていた。"
        }
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_09",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "feedback",
      "char": "mzt",
      "title": "同じ合図、違う窓",
      "lines": [
        {
          "who": "twin",
          "text": "バソプレシンって答えが同じだって知ったとき、見分けがつかなくなった？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "逆。水守は集合管のV2で水を戻す。瑞葉は血管のV1aで血管を縮めて、血圧を支える。",
          "fm": {
            "text": {
              "v": "逆。水守は集合管のV2で水を戻す。瑞太は血管のV1aで血管を縮めて、血圧を支える。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "よかった。こっちは、確認が長すぎるところまで見られてそうだけどね。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "今日の分は、ここまでで終わった？"
        },
        {
          "who": "narr",
          "text": "瑞葉は用紙を閉じ、こちらへ向き直った。",
          "fm": {
            "text": {
              "v": "瑞太は用紙を閉じ、こちらへ向き直った。",
              "on": "t"
            }
          }
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "need": [
        [
          "ident",
          ">=",
          1
        ]
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_10",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "feedback",
      "char": "mzt",
      "title": "出番の終わり",
      "lines": [
        {
          "who": "narr",
          "text": "水場の音がやみ、瑞葉は点呼板を持ち上げた。",
          "fm": {
            "text": {
              "v": "水場の音がやみ、瑞太は点呼板を持ち上げた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "体液の濃さや血圧が元に戻ってくると、先生から出る便りが減る。今日は水門も、こっちの管もひと休み。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "瑞葉は？",
          "fm": {
            "text": {
              "v": "瑞太は？",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "模型を片づけるだけ。どこか寄っていける日だよ。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "じゃあ購買の前まで。"
        },
        {
          "who": "twin",
          "text": "うん。それ以上は、着いてから聞く。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "need": [
        [
          "ident",
          ">=",
          1
        ]
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_11",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "遠い席",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が廊下の端で手を振り、話が終わるまで待っていた。",
          "fm": {
            "text": {
              "v": "瑞太が廊下の端で手を振り、話が終わるまで待っていた。",
              "on": "t"
            }
          }
        },
        {
          "who": "me",
          "text": "呼んでくれてよかったのに。"
        },
        {
          "who": "twin",
          "text": "急ぎなら呼んだ。もうすぐ話し終わりそうだったからさ。……待てたって、自慢していい？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "うん。呼ばれるのを気にしないで話せたから。"
        },
        {
          "who": "twin",
          "text": "なら、次はこっちが話し終わるまで付き合って。言いたいことが一つ溜まってる。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "need": [
        [
          "ident",
          ">=",
          1
        ]
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "cv_mzt_12",
      "day": "talk",
      "place": "keep",
      "time": "keep",
      "bgm": "feedback",
      "char": "mzt",
      "title": "来月の欄",
      "lines": [
        {
          "who": "narr",
          "text": "予定表に、来月の小さな用紙が挟んであった。まだ当番の印はない。"
        },
        {
          "who": "twin",
          "text": "先の話をすると、全部約束みたいに聞こえる？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "決める前に相談してくれるなら、聞きたい。"
        },
        {
          "who": "twin",
          "text": "じゃあ、来月も会える日があったら、どこか一日だけ空けてみたい。係の予定は入れないで。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "その日は何をする？"
        },
        {
          "who": "twin",
          "text": "それは、また聞く。空欄のままでも楽しみにできるって、最近わかったから。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "need": [
        [
          "ident",
          ">=",
          1
        ]
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "dt_mzt_1",
      "day": "date",
      "date": "休日",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "桟橋の待ち合わせ",
      "lines": [
        {
          "who": "narr",
          "text": "桟橋で、私服の瑞葉が時刻表を広げていた。",
          "fm": {
            "text": {
              "v": "桟橋で、私服の瑞太が時刻表を広げていた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "今日は巡回なし。だから、先に次の便の時間を調べて……それもいらなかったかな。",
          "expr": "neutral",
          "act": "v5-date"
        },
        {
          "who": "me",
          "text": "帰る時間だけ分かればいいよ。今、座る場所を探さない？"
        },
        {
          "who": "narr",
          "text": "桟橋の板が鳴った。瑞葉は耳を澄まし、時刻表をしまった。",
          "fm": {
            "text": {
              "v": "桟橋の板が鳴った。瑞太は耳を澄まし、時刻表をしまった。",
              "on": "t"
            }
          }
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。船が一隻通るまでは、何を話すかも決めないでおこう。",
                  "expr": "neutral",
                  "act": "v5-date"
                }
              ],
              "effects": {
                "f": 1,
                "t": 5
              },
              "label": "柱のそばで船を眺める"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "先に見つけても指で教えるだけ。名前は順番に言おう。",
                  "expr": "neutral",
                  "act": "v5-date"
                }
              ],
              "effects": {
                "f": 2,
                "t": 4
              },
              "label": "端まで歩いて、見えるものを一つずつ言う"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "dateSpot": "pier",
      "after": [
        {
          "who": "twin",
          "text": "ここの風、いつもなら何人に届くか考える。今日は、隣まで届けばいいや。",
          "expr": "neutral",
          "act": "v5-date"
        }
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "dt_mzt_2",
      "day": "date",
      "date": "休日",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "本のしおり",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が棚の間で、紙をしおりの形に折っていた。",
          "fm": {
            "text": {
              "v": "瑞太が棚の間で、紙をしおりの形に折っていた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "借りる本、先に選んでいい？　きみが探してる本、決まるまで待とうか。",
          "expr": "neutral",
          "act": "v5-date"
        },
        {
          "who": "me",
          "text": "先に見せて。何を読みたいか、聞いてなかった。"
        },
        {
          "who": "twin",
          "text": "水辺の町が出てくるやつ。何人来たとか、誰が戻ったとか、そこから離れた話が読みたくて。",
          "expr": "neutral",
          "act": "v5-date"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "棚は向こう。でも、座って選ぶなら窓の席が空いてる。どっちから行く？",
                  "expr": "neutral",
                  "act": "v5-date"
                }
              ],
              "effects": {
                "f": 2,
                "t": 4
              },
              "label": "その本を二人で探す"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "しおり、二枚に折る。席に一人が戻ってから、もう一人を急かさない約束ね。",
                  "expr": "neutral",
                  "act": "v5-date"
                }
              ],
              "effects": {
                "f": 2,
                "t": 3
              },
              "label": "それぞれ一冊選んで、あとで見せ合う"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "dateSpot": "library",
      "after": [
        {
          "who": "narr",
          "text": "本を借りて出ると、瑞葉は階段の下で待っていた。",
          "fm": {
            "text": {
              "v": "本を借りて出ると、瑞太は階段の下で待っていた。",
              "on": "t"
            }
          }
        }
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "dt_mzt_3",
      "day": "date",
      "date": "休日",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "予定表の最後",
      "lines": [
        {
          "who": "twin",
          "text": "もう帰る時刻だね。次の予定は、今日のうちに作らなくてもいいかな。",
          "expr": "neutral",
          "act": "v5-date"
        },
        {
          "who": "me",
          "text": "また会うのは、今日決めたい？"
        },
        {
          "who": "twin",
          "text": "会いたいのは、今言っておきたい。行き先の話は、今度でもいい。",
          "expr": "neutral",
          "act": "v5-date"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。かけてくれたら、空けられる日を一緒に探す。",
                  "expr": "neutral",
                  "act": "v5-date"
                }
              ],
              "effects": {
                "t": 4
              },
              "label": "次はこっちから声をかける"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "「今日は行ける？」って聞くところからね。次も覚えてる。",
                  "expr": "neutral",
                  "act": "v5-date"
                }
              ],
              "effects": {
                "f": 1,
                "t": 3
              },
              "label": "また誘って。今日みたいに"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "cast": [
        "twin"
      ]
    },
    {
      "id": "hp_mzt_1",
      "day": "happen",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "突然の雨",
      "lines": [
        {
          "who": "narr",
          "text": "雨が降り出すと、瑞葉が駆け出しかけた。",
          "fm": {
            "text": {
              "v": "雨が降り出すと、瑞太が駆け出しかけた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "傘、借りられるところを見てくる。ここで待って……いや、どうしたい？",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "近いほうからだね。肩は、濡れたら拭く。先に走らないで行こう。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2,
                "t": 1
              },
              "label": "まず軒下まで一緒に行こう"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "戻る。もし先に移動したくなったら、そこまで迎えに行くよ。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1
              },
              "label": "すぐ戻れるなら、ここで待つよ"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "瑞葉は濡れた袖の端をつまんで笑った。",
          "fm": {
            "text": {
              "v": "瑞太は濡れた袖の端をつまんで笑った。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "これなら、今日の話に雨を入れてもいい。全部雨のせいにはしなくて済んだね。",
          "expr": "neutral"
        }
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "hp_mzt_2",
      "day": "happen",
      "place": "keep",
      "time": "keep",
      "bgm": "rainy",
      "char": "mzt",
      "title": "バス停が変わった",
      "lines": [
        {
          "who": "narr",
          "text": "乗り場の案内に、急ごしらえの矢印が貼ってあった。"
        },
        {
          "who": "twin",
          "text": "先に向こうを見てくる？　……いや、行ってみて違ったら、二度歩くね。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "係の人に聞こう。行き先だけ合わせておけばいい。"
        },
        {
          "who": "twin",
          "text": "うん。どっちが聞く？",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "じゃあ行き先はこっちから言う。分からないところは、きみが聞いて。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2
              },
              "label": "一緒に聞きに行こう"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "了解。違う答えが返っても、先には動かず待ってる。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1,
                "t": 1
              },
              "label": "こっちが聞くから、案内をそこから見てて"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "乗り場は目の前の列の先だった。二人で最後尾に並ぶ。"
        }
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "hp_mzt_3",
      "day": "happen",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "時間が余った",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が時計を見た。帰るにはまだ早い。",
          "fm": {
            "text": {
              "v": "瑞太が時計を見た。帰るにはまだ早い。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "このままだと遅れない。だったら、もう少しここにいたい。きみは？",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "こっちは、次の場所を決めずに出られたこと。きみのも、聞かせて。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1,
                "t": 4
              },
              "label": "座って、今日よかったことを一つ話す"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。急いで着いて時間を余らせるより、歩いて使おう。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2
              },
              "label": "少し早めに出て、ゆっくり歩こう"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "cast": [
        "twin"
      ]
    },
    {
      "id": "tr_mzt_1",
      "day": "trouble",
      "date": "放課後",
      "place": "field",
      "time": "放課後",
      "bgm": "keep",
      "char": "mzt",
      "title": "点呼が一人分合わない",
      "lines": [
        {
          "who": "narr",
          "text": "点呼板の同じ行を、瑞葉とつむぎが同時に指した。",
          "fm": {
            "text": {
              "v": "点呼板の同じ行を、瑞太とつむぎが同時に指した。",
              "on": "t"
            }
          }
        },
        {
          "who": "tsumugi",
          "text": "名字が続いてるところ、返事を二回数えたかも。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "多いならいい、と言いたくなるけど。誰が返事したか分からなくなる。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "先に丸を消さず、こっちが聞いた二人の声から思い出す。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2,
                "u": 1
              },
              "label": "名前と返事を一つずつ突き合わせる"
            },
            {
              "response": [
                {
                  "who": "tsumugi",
                  "text": "うん。ここは私たちがもう一回数えておく。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1
              },
              "label": "本人が近くにいるか見てくる"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "後ろから「それ、私も返事した」。同じ名字のふたりだった。"
        },
        {
          "who": "twin",
          "text": "数字が合った。……今度は、名前も。",
          "expr": "neutral"
        }
      ],
      "cast": [
        "tsumugi",
        "twin"
      ]
    },
    {
      "id": "tr_mzt_2",
      "day": "trouble",
      "date": "放課後",
      "place": "lab",
      "time": "放課後",
      "bgm": "keep",
      "char": "mzt",
      "title": "模型に届いた二枚の札",
      "lines": [
        {
          "who": "narr",
          "text": "理科室で、二つの模型のあいだに、備えつけの札が一枚落ちていた。"
        },
        {
          "who": "twin",
          "text": "これは先生の直筆。奥の窓口から出る合図の見本。水門にも血管の模型にも、同じ札が届く。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "同じ札なのに、模型を動かすところの印が違うね。"
        },
        {
          "who": "twin",
          "text": "うん。合図を受け取る部品が違うから、二つの模型で起きることも違う。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "先生なら、二つの受け口の違いも教えてくれると思う。一緒に見よう。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2,
                "u": 1
              },
              "label": "先生と二つの受け取り口を見比べる"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。届く札が同じでも、動きは二つ。二人そろった方が見せやすいね。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1
              },
              "label": "水守を呼んで、二つの模型を一緒に動かす"
            }
          ]
        }
      ],
      "clues": [
        {
          "char": "mzt",
          "text": "先生の合図は、二段ポストの奥の窓口から、水門と血管の模型の両方へ届く。"
        }
      ],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "先生が宛先を確かめ、合図の札を水門と血管の模型に一枚ずつ置いた。"
        }
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "tw_mzt_1",
      "day": "trio",
      "place": "gate",
      "time": "放課後",
      "bgm": "keep",
      "char": "mzt",
      "title": "ふたの音",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉の鞄から、ふたが揺れる音がした。",
          "fm": {
            "text": {
              "v": "瑞太の鞄から、ふたが揺れる音がした。",
              "on": "t"
            }
          }
        },
        {
          "who": "redcell",
          "text": "ねえ、その水筒二つ、見ないでどっちが誰のか当てられる？",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "紐の結び目も分かるけど、歩いてるときはふたの音。水門の分のほうが小さい音がする。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "当てられなかったら？"
        },
        {
          "who": "twin",
          "text": "誰のか、先に聞く。水筒については、こっちのほうが覚えがいい気がする。",
          "expr": "neutral"
        },
        {
          "who": "redcell",
          "text": "点呼のほうも、今の順番で頼むよ。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "cast": [
        "redcell",
        "twin"
      ]
    },
    {
      "id": "tw_mzt_2",
      "day": "trio",
      "place": "gate",
      "time": "放課後",
      "bgm": "keep",
      "char": "mzt",
      "title": "返事は三人分",
      "lines": [
        {
          "who": "redcell",
          "text": "今日は門まででいい？　{sei}は、いいに決まって……。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "決まってないよ。"
        },
        {
          "who": "twin",
          "text": "今の、まだ聞いてない。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "瑞葉と声がそろった。赤路が片手を上げる。",
          "fm": {
            "text": {
              "v": "瑞太と声がそろった。赤路が片手を上げる。",
              "on": "t"
            }
          }
        },
        {
          "who": "redcell",
          "text": "はい。順番にお願いします。じゃあ瑞葉はどうしたい？",
          "fm": {
            "text": {
              "v": "はい。順番にお願いします。じゃあ瑞太はどうしたい？",
              "on": "t"
            }
          },
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "門まで。{sei}さんは？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "門の先の角までなら、三人で行ける。"
        },
        {
          "who": "redcell",
          "text": "最初より少し伸びた。ちゃんと聞くと得することもあるんだね。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "cast": [
        "redcell",
        "twin"
      ]
    },
    {
      "id": "tw_mzt_3",
      "day": "trio",
      "place": "gate",
      "time": "夕方",
      "bgm": "keep",
      "char": "mzt",
      "title": "帳面を返す帰り道",
      "lines": [
        {
          "who": "narr",
          "text": "赤路が汐里の帳面を拾った。開く前に瑞葉が止めた。",
          "fm": {
            "text": {
              "v": "赤路が汐里の帳面を拾った。開く前に瑞太が止めた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "私用の記録もあるから、閉じたまま運ぼう。宛先は保健室前って聞いてる。",
          "expr": "neutral"
        },
        {
          "who": "redcell",
          "text": "水門の水守と汐里、両方が同じ場所にいるの？",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "いる日はある。水が足りないか、塩の仕事が要るかは、見てる欄が違うんだけど。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "じゃあこのまま二人に、帳面が戻るとだけ伝えよう。"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "need": [
        [
          "f",
          ">=",
          10
        ]
      ],
      "cast": [
        "twin",
        "redcell"
      ]
    },
    {
      "id": "tw_mzt_4",
      "day": "trio",
      "place": "gate",
      "time": "夕方",
      "bgm": "keep",
      "char": "mzt",
      "title": "曲がる角はひとつずつ",
      "lines": [
        {
          "who": "narr",
          "text": "赤路が一つ目の角を、瑞葉が二つ目の角を指した。",
          "fm": {
            "text": {
              "v": "赤路が一つ目の角を、瑞太が二つ目の角を指した。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "先に赤路の行きたいほうを聞こう。その次が{sei}さん。",
          "expr": "neutral"
        },
        {
          "who": "redcell",
          "text": "三人で行くなら遠回りでもいい。帰るまでに、話が一つ残ってるから。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "じゃあ二つ目を曲がろう。残り一つなら、そこまでに聞けそう。"
        },
        {
          "who": "twin",
          "text": "うん。こっちも一つあるけど、赤路の話が終わったらにする。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "赤路の話はまだ途中。三人でもう一つ先の角まで歩いた。"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "need": [
        [
          "f",
          ">=",
          20
        ]
      ],
      "cast": [
        "twin",
        "redcell"
      ]
    },
    {
      "id": "rv_mzt_1",
      "day": "rival",
      "place": "keep",
      "time": "keep",
      "bgm": "keep",
      "char": "mzt",
      "title": "本人には聞いた？",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が二枚の紙を並べた。片方だけ、空欄が残っている。",
          "fm": {
            "text": {
              "v": "瑞太が二枚の紙を並べた。片方だけ、空欄が残っている。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "水守に「この班は出た」って伝えたら、最初に「本人には聞いた？」って聞かれた。戻るかどうか、こっちが勝手に書いてた。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "責められたと思った？"
        },
        {
          "who": "twin",
          "text": "最初はね。でも、あっちの欄には、まだおかしいとか間違いとか書いてなかった。聞けば埋まる欄だったんだ。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "rival",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。先に見せておけば、あとで言い方を考えずに済む。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1,
                "rs": 1
              },
              "label": "次は二人で、どこが空欄か見よう"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "「少し待って」だった。短いひと言で、紙のほうを消せた。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1
              },
              "label": "今日はどんな返事が来たのか聞かせて"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "cast": [
        "twin"
      ]
    },
    {
      "id": "rv_mzt_2",
      "day": "rival",
      "place": "gate",
      "time": "放課後",
      "bgm": "keep",
      "char": "mzt",
      "title": "校門で待っている理由",
      "lines": [
        {
          "who": "narr",
          "text": "校門に、水門の水守がいた。"
        },
        {
          "who": "adh",
          "text": "……瑞葉、まだ巡回中。待つ？",
          "fm": {
            "text": {
              "v": "……瑞太、まだ巡回中。待つ？",
              "on": "t"
            }
          },
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "うん。一緒に帰るって約束はしてないけど、今日は誘ってみたい。"
        },
        {
          "who": "adh",
          "text": "……用が終わったら帰っていいって、伝えた。誰が待ってるかは言ってない。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "rival",
          "options": [
            {
              "response": [
                {
                  "who": "adh",
                  "text": "……うん。何を返事するかまでは、書かないでおく。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "rs": 1
              },
              "label": "聞かれたら、門で待ってるとだけ伝えて"
            },
            {
              "response": [
                {
                  "who": "adh",
                  "text": "……それなら、見つけやすいように門の外にいて。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1
              },
              "label": "ここで、自分から誘うよ"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "水守は瑞葉が出てくる通路を指した。",
          "fm": {
            "text": {
              "v": "水守は瑞太が出てくる通路を指した。",
              "on": "t"
            }
          }
        }
      ],
      "goto": {
        "type": "if",
        "cond": [
          [
            "pt",
            ">=",
            20
          ]
        ],
        "then": "rv_mzt_2j",
        "else": "DAY"
      },
      "cast": [
        "adh"
      ]
    },
    {
      "id": "rv_mzt_2j",
      "day": "rival",
      "place": "gate",
      "time": "夕方",
      "bgm": "keep",
      "char": "mzt",
      "title": "もう一人の帰り道",
      "lines": [
        {
          "who": "adh",
          "text": "……ここで待っててもらえたらって、前から思ってた。うまく言えなかったけど。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "水守のほうからも、誘っていいんだよ。"
        },
        {
          "who": "adh",
          "text": "……今日は、瑞葉に会いに来たんだね。聞けてよかった。こっちも、また一緒に帰るか聞いていい？",
          "fm": {
            "text": {
              "v": "……今日は、瑞太に会いに来たんだね。聞けてよかった。こっちも、また一緒に帰るか聞いていい？",
              "on": "t"
            }
          },
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "うん。そのとき、また返すよ。"
        },
        {
          "who": "adh",
          "text": "……約束は、そのときでいい。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "水守は先に歩き出し、振り向いて小さく手を振った。"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "cast": [
        "adh"
      ]
    },
    {
      "id": "rv_mzt_3",
      "day": "rival",
      "place": "gate",
      "time": "夕方",
      "bgm": "keep",
      "char": "mzt",
      "title": "違う二枚の点呼",
      "lines": [
        {
          "who": "narr",
          "text": "同じ班の時刻を、双子は違う数字で記録していた。"
        },
        {
          "who": "twin",
          "text": "こっちは場所に着いた時刻。そっちは、水門に知らせが来たとき？",
          "expr": "neutral"
        },
        {
          "who": "adh",
          "text": "……うん。先にどっちを書いておけばいいか、聞けばよかった。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "両方あれば、着いてから何が起きたか順番に分かるよ。"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "rival",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "分けて残そう。水門に来た時間は、こっちには書けないから。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "rs": 1
              },
              "label": "二人の時刻を別の欄に残す"
            },
            {
              "response": [
                {
                  "who": "adh",
                  "text": "……それでいい。次は同じ机で、出した順と届いた順を見よう。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1
              },
              "label": "いったん持ち帰って、次に話す時間を決める"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "水守が紙を拾う手を止めた。瑞葉はその隣で待ち、もう一枚を受け取った。",
          "fm": {
            "text": {
              "v": "水守が紙を拾う手を止めた。瑞太はその隣で待ち、もう一枚を受け取った。",
              "on": "t"
            }
          }
        }
      ],
      "goto": {
        "type": "if",
        "cond": [
          [
            "rs",
            ">=",
            2
          ]
        ],
        "then": "rv_mzt_3ok",
        "else": "rv_mzt_3ng"
      },
      "cast": [
        "twin",
        "adh"
      ]
    },
    {
      "id": "rv_mzt_3ok",
      "day": "rival",
      "place": "gate",
      "time": "夜",
      "bgm": "keep",
      "char": "mzt",
      "title": "報告を待つ席",
      "lines": [
        {
          "who": "adh",
          "text": "……巡回は、瑞葉に任せる。返事、聞いてきて。",
          "fm": {
            "text": {
              "v": "……巡回は、瑞太に任せる。返事、聞いてきて。",
              "on": "t"
            }
          },
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "うん。終わったって、自分から言いに来る。その場まで迎えに来なくていいから。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "空いた椅子に瑞葉の板を立てかける。戻るまで、そこは空けておけそうだった。",
          "fm": {
            "text": {
              "v": "空いた椅子に瑞太の板を立てかける。戻るまで、そこは空けておけそうだった。",
              "on": "t"
            }
          }
        },
        {
          "who": "adh",
          "text": "……きみは、ここにいる？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "いる。戻ってきた人の話も聞きたいし。"
        },
        {
          "who": "narr",
          "text": "水守は椅子を、戻ってくる通路のほうへ向けた。"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "t": 4,
          "rvok": 1
        }
      },
      "cast": [
        "adh",
        "twin"
      ]
    },
    {
      "id": "rv_mzt_3ng",
      "day": "rival",
      "place": "gate",
      "time": "夜",
      "bgm": "keep",
      "char": "mzt",
      "title": "次に話す時刻",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が紙を重ねかけると、水守が手を止めた。",
          "fm": {
            "text": {
              "v": "瑞太が紙を重ねかけると、水守が手を止めた。",
              "on": "t"
            }
          }
        },
        {
          "who": "adh",
          "text": "……先に帰る分だけ決めよう。あとで、何を見たか聞く。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "うん。閉門前に一度、ここに来る。どっちかが延びそうなら、赤路に伝言を頼む。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "二人の紙は、別々のまま持ってこよう。"
        },
        {
          "who": "narr",
          "text": "瑞葉は水守が自分の紙を取るまで待った。",
          "fm": {
            "text": {
              "v": "瑞太は水守が自分の紙を取るまで待った。",
              "on": "t"
            }
          }
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "t": -2
        }
      },
      "cast": [
        "adh",
        "twin"
      ]
    },
    {
      "id": "ep_rv_mzt",
      "day": "end",
      "date": "6月21日(日)",
      "place": "ginkgo",
      "time": "夜",
      "bgm": "keep",
      "trans": "white",
      "char": "mzt",
      "title": "結末のあと・水守の祝福",
      "lines": [
        {
          "who": "narr",
          "text": "街灯の下に、空の点呼板を持った水守がいた。"
        },
        {
          "who": "adh",
          "text": "……おめでとう。これ、今夜の仕事は終わったって、瑞葉に渡して。",
          "fm": {
            "text": {
              "v": "……おめでとう。これ、今夜の仕事は終わったって、瑞太に渡して。",
              "on": "t"
            }
          },
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "自分で渡さなくていいの？"
        },
        {
          "who": "adh",
          "text": "……明日も会うし。今夜は、二人のほうが話すことがあるでしょ。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "板の角に、小さな消しゴムが挟んであった。"
        },
        {
          "who": "adh",
          "text": "……書き直したいときに使って。予定が一つ変わっても、帰る場所はなくならないから。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "ep_wake"
      },
      "cast": [
        "adh"
      ]
    },
    {
      "id": "dream_xmas_mzt",
      "day": "dream",
      "date": "？月？日",
      "place": "dream_snow",
      "time": "夢",
      "bgm": "dream",
      "trans": "dream",
      "char": "mzt",
      "title": "冬の夢・温かい返事",
      "lines": [
        {
          "who": "narr",
          "text": "雪を踏む音が、すぐ隣でも聞こえた。"
        },
        {
          "who": "twin",
          "text": "夜の巡回は終わったよ。手袋を片方落としたらしくて。……一緒に探す？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "うん。落ちた場所を決めてから行く？"
        },
        {
          "who": "twin",
          "text": "先に散歩しよう。歩いて寒かったら、帰る。手袋は、明日の分もあるから大丈夫。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "手袋のない手を赤くして、瑞葉は雪を眺めていた。",
          "fm": {
            "text": {
              "v": "手袋のない手を赤くして、瑞太は雪を眺めていた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "……手袋を見つけたら、一緒に帰ってもいい？",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "cast": [
        "twin"
      ]
    },
    {
      "id": "dream_val_mzt",
      "day": "dream",
      "date": "？月？日",
      "place": "dream_sweet",
      "time": "夢",
      "bgm": "dream",
      "trans": "dream",
      "char": "mzt",
      "title": "甘い夢・白紙の包み",
      "lines": [
        {
          "who": "narr",
          "text": "机に白い包みが二つ。どちらにも宛名はない。"
        },
        {
          "who": "twin",
          "text": "先にどっちか決める？　中身は、開けてから教える。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "大きさも同じ。選び方を聞いてもいい？"
        },
        {
          "who": "twin",
          "text": "右は見せたいほう。左は、二人で食べたいほう。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "じゃあ左。開けたら半分ずつ。"
        },
        {
          "who": "narr",
          "text": "包みには、星と月の形の焼き菓子が入っていた。"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "cast": [
        "twin"
      ]
    },
    {
      "id": "lake_mzt",
      "day": "w8d2b",
      "date": "6月4日(木)",
      "place": "shallows",
      "time": "午後",
      "bgm": "keep",
      "char": "mzt",
      "title": "帰りの人数",
      "lines": [
        {
          "who": "narr",
          "text": "浅瀬で使った道具を箱に戻す。点呼票には一班分だけ空欄が残った。"
        },
        {
          "who": "twin",
          "text": "その班、全員戻った？　まだ道具を渡す人がいるなら待つよ。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "桟橋のほうに一人いる。班が違うか、聞いてくるね。"
        },
        {
          "who": "twin",
          "text": "お願い。水に入って確かめなくていい。係の人を呼べるところから声をかけて。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。聞いた返事が分かるように、番号の横へ一言書く。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2,
                "u": 1
              },
              "label": "班の名前を岸から声に出してたしかめる"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "了解。箱が揃っても、人数の欄は返事まで空けておく。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 1
              },
              "label": "箱を先にまとめ、係の人に残りを伝える"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "本人の返事が届いて、瑞葉は板を閉じた。",
          "fm": {
            "text": {
              "v": "本人の返事が届いて、瑞太は板を閉じた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "もう一回聞きに行かなくて済んだ。きみが聞いたこと、ちゃんと届いたから。",
          "expr": "neutral"
        }
      ],
      "cast": [
        "twin"
      ]
    },
    {
      "id": "lake_end_mzt",
      "day": "w8d2b",
      "date": "6月4日(木)",
      "place": "boat",
      "time": "夕方",
      "bgm": "keep",
      "char": "mzt",
      "title": "帰りの船・次の空き時間",
      "lines": [
        {
          "who": "narr",
          "text": "帰りの船が、岸の明かりに近づいた。"
        },
        {
          "who": "twin",
          "text": "明日、放課後に空いてる？　……あ、今すぐ答えなくてもいい。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "空いたら何をする？"
        },
        {
          "who": "twin",
          "text": "窓の近い席で、今日見たものの続きを聞きたい。巡回の報告みたいなことは、今は聞かない。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "船の窓がゆっくり暗くなり、二人分の姿がガラスに映った。"
        },
        {
          "who": "twin",
          "text": "あの光が岸まで届くころに答えてくれてもいい。こっちは、席を取る前にちゃんと聞くから。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "t": 4
        }
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "fs2_crisis_mzt",
      "day": "crisis",
      "date": "6月21日(日)",
      "place": "field",
      "time": "夕方",
      "bgm": "keep",
      "char": "mzt",
      "title": "古い合図が残る",
      "lines": [
        {
          "who": "narr",
          "text": "止まった懐中時計のそばで、水門と血管の模型に同じ合図が流れ続けている。"
        },
        {
          "who": "twin",
          "text": "最初の紙は、体液が濃くなって、血圧も下がったときの合図。でも同じ札が何度も来てる。いまの目盛りを確かめよう。",
          "expr": "neutral"
        },
        {
          "who": "hypothalamus",
          "text": "私の模型で、体液の濃さと血圧の記録を見よう。二人は、奥の窓口から出た合図を受け取っておくれ。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "最初の合図で、何が起きた？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。あの時点では、出ていく水を減らすことも、血圧を支えることも必要だった。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "u": 2
              },
              "label": "水門は水を戻し、血管の壁は縮んで血圧を支えた"
            },
            {
              "response": [
                {
                  "who": "hypothalamus",
                  "text": "血管の模型をもう一度見よう。壁が縮んで、血の通り道が狭くなったね。",
                  "expr": "neutral"
                }
              ],
              "effects": {},
              "label": "水門は水を戻し、血管は内側が広がった"
            }
          ]
        },
        {
          "prompt": "元に戻った今、合図はどう変わる？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。管は縮めたままにしなくていい。水門も、再吸収を増やす働きが弱まる。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "u": 2,
                "f": 1
              },
              "label": "放出される量が減り、水門と血管への合図も弱まる"
            },
            {
              "response": [
                {
                  "who": "adh",
                  "text": "……今の値なら、強い合図を続ける必要は薄い。……最新の値でもう一度考えて。",
                  "expr": "neutral"
                }
              ],
              "effects": {},
              "label": "念のため、強めたままにする"
            }
          ],
          "pre": [
            {
              "who": "narr",
              "text": "中枢先生の模型に、新しい値が出た。体液の濃さも血圧も、いつもの範囲に戻っていた。"
            },
            {
              "who": "adh",
              "text": "……濃さも血圧も戻った。次の合図はどうする？",
              "expr": "neutral"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "hypothalamus",
          "text": "濃さと血圧が戻った。奥の窓口から出す合図を弱めよう。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "瑞葉は模型の管がゆるみ、隣で水門の音が変わるまで待った。",
          "fm": {
            "text": {
              "v": "瑞太は模型の管がゆるみ、隣で水門の音が変わるまで待った。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "戻ったことも、ちゃんと確かめられた。もう、鉛筆だけで終わりを決めない。",
          "expr": "neutral"
        }
      ],
      "goto": {
        "type": "next",
        "id": "fs2_resume"
      },
      "cast": [
        "twin",
        "hypothalamus",
        "adh"
      ]
    },
    {
      "id": "end_mzt",
      "day": "end",
      "date": "6月21日(日)",
      "place": "ginkgo",
      "time": "夜",
      "bgm": "ending",
      "trans": "white",
      "char": "mzt",
      "title": "返事は、ここで。",
      "lines": [
        {
          "who": "narr",
          "text": "下駄箱に、小さな紙があった。「イチョウのところで。来られたら、一つ聞きたい」。名前だけは、先に書いてある。"
        },
        {
          "who": "narr",
          "text": "大イチョウの下に瑞葉がいた。手には折った紙が一枚。肩が少し上がっているのに、こちらが木の影から出るまで動かなかった。",
          "fm": {
            "text": {
              "v": "大イチョウの下に瑞太がいた。手には折った紙が一枚。肩が少し上がっているのに、こちらが木の影から出るまで動かなかった。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "来てくれて、ありがとう。仕事では、返事を急ぐこともある。でも今は、時間を決める用事で呼んだわけじゃない。",
          "expr": "neutral",
          "act": "v5-confess"
        },
        {
          "who": "me",
          "text": "うん。ここまで来たのは、聞きたいから。"
        },
        {
          "who": "twin",
          "text": "好きです。次の休みに、また二人で会いたい。それから、その先も。行き先は、会うたびに聞いてもいい？",
          "expr": "neutral",
          "act": "v5-confess"
        },
        {
          "who": "narr",
          "text": "紙の内側には行き先も時刻もなかった。瑞葉は開いた紙を見せたまま、こちらの顔を見て待った。",
          "fm": {
            "text": {
              "v": "紙の内側には行き先も時刻もなかった。瑞太は開いた紙を見せたまま、こちらの顔を見て待った。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "言えるときは、その場で答えたいって言ってたね。いま聞けるなら、聞かせて。",
          "expr": "neutral",
          "act": "v5-confess",
          "v5Reply": "now"
        },
        {
          "who": "twin",
          "text": "少し考えてからでいいよ。ここで待てる。返事を先に書いておいたりもしない。",
          "expr": "neutral",
          "act": "v5-confess",
          "v5Reply": "later"
        },
        {
          "who": "twin",
          "text": "きみの返事を、きみの言葉で聞きたい。ここで待ってる。",
          "expr": "neutral",
          "act": "v5-confess",
          "v5Reply": ""
        },
        {
          "who": "narr",
          "text": "瑞葉の手元の白い紙に、イチョウの影が落ちた。",
          "fm": {
            "text": {
              "v": "瑞太の手元の白い紙に、イチョウの影が落ちた。",
              "on": "t"
            }
          }
        },
        {
          "who": "me",
          "text": "好きだよ。次の休みも、それから先も。行き先は、一緒に決めよう。"
        },
        {
          "who": "narr",
          "text": "瑞葉は答えを聞き終えてから、肩を落とした。紙を持つ指が一度だけ震えた。",
          "fm": {
            "text": {
              "v": "瑞太は答えを聞き終えてから、肩を落とした。紙を持つ指が一度だけ震えた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "うん。……ありがとう。先に決めなくて、よかった。",
          "expr": "neutral",
          "act": "v5-accepted"
        },
        {
          "who": "me",
          "text": "じゃあ、今はどうしたい？"
        },
        {
          "who": "twin",
          "text": "手をつないで、もう少しだけ歩きたい。",
          "expr": "neutral",
          "act": "v5-accepted"
        },
        {
          "who": "me",
          "text": "うん。その紙、預かってもいい？"
        },
        {
          "who": "narr",
          "text": "木の影を出てから、白い紙も受け取った。何も書き足さず、持って帰った。",
          "v5Cast": []
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "if",
        "cond": [
          [
            "rvok",
            ">=",
            1
          ]
        ],
        "then": "ep_rv_mzt",
        "else": "ep_wake"
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "ev_park_mzt",
      "day": "w7d3",
      "date": "5月29日(金)",
      "place": "park",
      "time": "午前",
      "bgm": "keep",
      "char": "mzt",
      "title": "地図にないベンチ",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉は園内地図に丸を三つつけた。",
          "fm": {
            "text": {
              "v": "瑞太は園内地図に丸を三つつけた。",
              "on": "t"
            }
          }
        },
        {
          "who": "me",
          "text": "売店と、木の下と……もう一つは？"
        },
        {
          "who": "twin",
          "text": "五時に集合するところ。帰る場所が分かってると、安心して迷える。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "園内放送が大きく、瑞葉はいったん言葉を切った。",
          "fm": {
            "text": {
              "v": "園内放送が大きく、瑞太はいったん言葉を切った。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "で、最初はどっちがいい？　……今日は当番じゃないから、好きなほうを聞きたい。",
          "expr": "neutral"
        }
      ],
      "choices": [
        {
          "prompt": "どう答える？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "うん。混む通路を探すのはあと。先に湖が見えるか探そう。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "f": 2,
                "t": 2,
                "u": 1
              },
              "label": "観覧車に乗って、上から園内を眺める"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "じゃあ、行き止まりだったら笑う。先に決めるのはそれだけ。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "t": 4
              },
              "label": "地図をしまって、一回だけ迷ってみる"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "わかった。集合場所は同じ。地図、折るとそこが上に来るよ。",
                  "expr": "neutral"
                }
              ],
              "effects": {},
              "label": "午前はここで別れて、集合で会う"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "narr",
          "text": "瑞葉が地図をたたむと、集合場所の丸だけが見えた。",
          "fm": {
            "text": {
              "v": "瑞太が地図をたたむと、集合場所の丸だけが見えた。",
              "on": "t"
            }
          }
        }
      ],
      "goto": {
        "type": "next",
        "id": "ev_park_pm"
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "ev_buy_mzt",
      "day": "w9d3",
      "date": "6月12日(金)",
      "place": "shopping",
      "time": "放課後",
      "bgm": "date",
      "char": "mzt",
      "title": "見本は一枚",
      "lines": [
        {
          "who": "narr",
          "text": "文具店の前で、瑞葉が色違いの札を見比べた。赤は透ける。黄色は光る。",
          "fm": {
            "text": {
              "v": "文具店の前で、瑞太が色違いの札を見比べた。赤は透ける。黄色は光る。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "休憩所で使う札。遠くからでも表裏が分かるようにしたいんだけど、どっちも光るな。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "光らない紙に、色と文字を両方入れたら？　最初は一枚だけ作って、離れて読んでみよう。"
        },
        {
          "who": "twin",
          "text": "一枚だけ。……お店の外で、試してもいいですか。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "店先に並ぶと、風で値札が全部ひっくり返った。"
        },
        {
          "who": "me",
          "text": "値札は裏向き。札の「受付」は読めるよ。"
        },
        {
          "who": "twin",
          "text": "よし。学園祭の日もこんなふうに、向こうから合図を返してくれる人がいたら安心する。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "軽い袋を二人で持って、駅まで歩いた。"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 6
        }
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "ev_assign_mzt",
      "day": "w10d1",
      "date": "6月15日(月)",
      "place": "infirmary",
      "time": "放課後",
      "bgm": "prep",
      "char": "mzt",
      "title": "巡回と連絡の係",
      "lines": [
        {
          "who": "narr",
          "text": "展示の図には、職員室を表す箱から、水門と血管の模型へ向かう矢印が引いてあった。"
        },
        {
          "who": "twin",
          "text": "頼先輩たちの救護は別の仕事。展示は水守が水門、こっちは血の通り道。案内当番では外も回るよ。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "図の矢印は、二人が歩く道？"
        },
        {
          "who": "twin",
          "text": "同じ合図をのせて運ぶ血液の流れ。……当日の案内当番の練習、一つやってみる？",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "if",
        "cond": [
          [
            "kiku",
            ">=",
            40
          ],
          [
            "rika",
            ">=",
            20
          ]
        ],
        "then": "ev_assign_mzt_ok",
        "else": "ev_assign_mzt_ng"
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "ev_assign_mzt_ok",
      "day": "w10d1",
      "date": "6月15日(月)",
      "place": "infirmary",
      "time": "放課後",
      "bgm": "keep",
      "char": "mzt",
      "title": "聞いたことを伝える",
      "lines": [
        {
          "who": "twin",
          "text": "「西の休憩所に二人。椅子が足りない」。これを受けたら？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "場所と人数を先に。そのあと、椅子が一つ足りないのか、今いくつあるかも聞いてから伝える。"
        },
        {
          "who": "twin",
          "text": "うん。言ってない数を勝手に足さなかった。手伝ってほしいの、そこ。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "瑞葉は巡回表を机の中央へ戻した。",
          "fm": {
            "text": {
              "v": "瑞太は巡回表を机の中央へ戻した。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "空いてる時間、どこ？　丸は自分でつけて。こっちは、次の欄に書く。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 8,
          "kiku": 1
        }
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "ev_assign_mzt_ng",
      "day": "w10d1",
      "date": "6月15日(月)",
      "place": "infirmary",
      "time": "放課後",
      "bgm": "keep",
      "char": "mzt",
      "title": "目印を一つ増やす",
      "lines": [
        {
          "who": "narr",
          "text": "西の休憩所を指したつもりが、鉛筆の先は裏門にあった。"
        },
        {
          "who": "twin",
          "text": "印が似てた。外を回るのは、今日はこっちでやる。頼みたいのは、離れて見ても分かる目印。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "休憩所の札に、大きい字で「西」って足すね。"
        },
        {
          "who": "twin",
          "text": "ありがとう。当日迷った人がいたら、その字で案内できる。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "瑞葉は廊下の反対側に立ち、書いたばかりの字を声に出して読んだ。",
          "fm": {
            "text": {
              "v": "瑞太は廊下の反対側に立ち、書いたばかりの字を声に出して読んだ。",
              "on": "t"
            }
          }
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 2,
          "kiku": 1
        }
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "ev_shed_mzt",
      "day": "w10d2",
      "date": "6月16日(火)",
      "place": "shed",
      "time": "夕方",
      "bgm": "keep",
      "char": "mzt",
      "title": "外に届く音",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉が扉を三度たたいた。外から返事はない。",
          "fm": {
            "text": {
              "v": "瑞太が扉を三度たたいた。外から返事はない。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "先生が見回りに来るはず。……来るはず、って書いても、来たことにはならないか。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "一緒に呼ぼう。交代で、廊下が静かなときに。"
        },
        {
          "who": "narr",
          "text": "二人で一回ずつ、間をあけて呼んだ。"
        },
        {
          "who": "narr",
          "text": "瑞葉は点呼板を両手で胸に寄せた。",
          "fm": {
            "text": {
              "v": "瑞太は点呼板を両手で胸に寄せた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "さっきから怖いのに、平気な声を出そうとしてた。声の高さで分かった？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "ううん。さっき、三回目だけずいぶん強く扉をたたいたから。"
        },
        {
          "who": "twin",
          "text": "……見つかったあとは、手の痛いほうも報告します。",
          "expr": "neutral"
        },
        {
          "who": "hypothalamus",
          "text": "中だね。いま開けるよ。扉のところから少し下がって。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "扉を出た瑞葉が、痛いほうの手を振って笑った。",
          "fm": {
            "text": {
              "v": "扉を出た瑞太が、痛いほうの手を振って笑った。",
              "on": "t"
            }
          }
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 7
        }
      },
      "cast": [
        "twin",
        "hypothalamus"
      ]
    },
    {
      "id": "ev_night_mzt",
      "day": "w10d4",
      "date": "6月18日(木)",
      "place": "class",
      "time": "夜",
      "bgm": "keep",
      "char": "mzt",
      "title": "名札の裏",
      "lines": [
        {
          "who": "narr",
          "text": "夜の教室で、瑞葉が名札を裏返していた。",
          "fm": {
            "text": {
              "v": "夜の教室で、瑞太が名札を裏返していた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "表は係の名前。裏は本人の名字。呼ばれたとき、どっちで振り返ったらいいか、混ざるんだよね。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "今なら、何て呼ばれたい？"
        },
        {
          "who": "twin",
          "text": "……試してくれる？　名字の下のほう。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "瑞葉。そっちの束、手伝おうか。",
          "fm": {
            "text": {
              "v": "瑞太。そっちの束、手伝おうか。",
              "on": "t"
            }
          }
        },
        {
          "who": "narr",
          "text": "瑞葉は呼ばれて一拍おいてから笑った。",
          "fm": {
            "text": {
              "v": "瑞太は呼ばれて一拍おいてから笑った。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "半分、お願いします。名前のほうも、また呼んで。",
          "expr": "neutral"
        },
        {
          "who": "shiori",
          "text": "残りの札は私が預かるよ。ふたりとも、鍵を閉められる前に帰って。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "うん。……じゃあ、帰り道でも一回呼んで。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "DAY",
        "effects": {
          "mzt": 5
        }
      },
      "cast": [
        "twin",
        "shiori"
      ]
    },
    {
      "id": "fs1_lunch_mzt",
      "day": "fest1",
      "date": "6月20日(土)",
      "place": "field",
      "time": "昼休み",
      "bgm": "keep",
      "char": "mzt",
      "title": "包みを開くまで",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉の弁当から包みが二つ。片方に「辛」とある。",
          "fm": {
            "text": {
              "v": "瑞太の弁当から包みが二つ。片方に「辛」とある。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "おかず、片方だけ辛い。どっちにするか聞こうと思って、朝からずっと二つ持ち歩いてた。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "瑞葉が食べたいほうは？",
          "fm": {
            "text": {
              "v": "瑞太が食べたいほうは？",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "辛いほう。……先に言っていいんだった。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "じゃあ、その一口の顔を見てから考える。"
        },
        {
          "who": "narr",
          "text": "ひと口食べた瑞葉が涙目になった。まだ次のひと口を狙っている。",
          "fm": {
            "text": {
              "v": "ひと口食べた瑞太が涙目になった。まだ次のひと口を狙っている。",
              "on": "t"
            }
          }
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "fs1_relay",
        "effects": {
          "mzt": 6
        }
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "fs1_pair_mzt",
      "day": "fest1",
      "date": "6月20日(土)",
      "place": "field",
      "time": "午後",
      "bgm": "keep",
      "char": "mzt",
      "title": "同じ足から",
      "lines": [
        {
          "who": "narr",
          "text": "足を結んだ布が張った。瑞葉が片足を揃え直す。",
          "fm": {
            "text": {
              "v": "足を結んだ布が張った。瑞太が片足を揃え直す。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "歩幅、そろえるなら半分から。……掛け声、どっちが出す？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "一歩目は任せて。二歩目、お願い。"
        },
        {
          "who": "twin",
          "text": "うん。一歩ずつなら、二人とも練習できる。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "二人でゆるく布を張り、構えた。"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "MINIGAME:pair"
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "fs1_tent_mzt",
      "day": "fest1",
      "date": "6月20日(土)",
      "place": "field",
      "time": "夕方",
      "bgm": "keep",
      "char": "mzt",
      "title": "席は一つ空けて",
      "lines": [
        {
          "who": "narr",
          "text": "水場の交代を見届けた瑞葉が、救護テントへ戻った。",
          "fm": {
            "text": {
              "v": "水場の交代を見届けた瑞太が、救護テントへ戻った。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "西の休憩所はもう空いた。こっちの予備席、一つ置いたままでいいですか。",
          "expr": "neutral"
        },
        {
          "who": "yori",
          "text": "ええ。様子を見るのは私が続けます。連絡ありがとう。",
          "expr": "neutral"
        },
        {
          "who": "shiori",
          "text": "水守から預かった給水の記録はここへ。塩の分は同じ数字でも別に書くよ。",
          "expr": "neutral",
          "act": "v5-check"
        },
        {
          "who": "narr",
          "text": "瑞葉は折りたたみ椅子を一脚だけ残し、残りを運ぼうとした。",
          "fm": {
            "text": {
              "v": "瑞太は折りたたみ椅子を一脚だけ残し、残りを運ぼうとした。",
              "on": "t"
            }
          }
        },
        {
          "who": "me",
          "text": "二脚ずつ持とう。ゆっくりで間に合うよ。"
        },
        {
          "who": "twin",
          "text": "うん。……軽いね。さっきまで、全部を一度に持たなきゃって思ってた。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "椅子の脚が鳴り、二人でそっと持ち替えた。"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "fs1_close",
        "effects": {
          "mzt": 6
        }
      },
      "cast": [
        "twin",
        "yori",
        "shiori"
      ]
    },
    {
      "id": "fs2_cafe_mzt",
      "day": "fest2",
      "date": "6月21日(日)",
      "place": "cafe",
      "time": "午前",
      "bgm": "keep",
      "char": "mzt",
      "title": "青い縁のカップ",
      "lines": [
        {
          "who": "narr",
          "text": "瑞葉がアミに列の最後尾を教えた。窓際には、色違いのカップが二つ運ばれた。",
          "fm": {
            "text": {
              "v": "瑞太がアミに列の最後尾を教えた。窓際には、色違いのカップが二つ運ばれた。",
              "on": "t"
            }
          }
        },
        {
          "who": "ami",
          "text": "案内ありがと。席についたら、客のほうやってて。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "見分けがつくよう、違う色にしてくれた。どっちがいい？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "青いほう。瑞葉は？",
          "fm": {
            "text": {
              "v": "青いほう。瑞太は？",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "同じ。……順番に使うわけにはいかないね。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "白いカップの底にも、青い丸があった。"
        },
        {
          "who": "twin",
          "text": "こっちにも青があった。両方よかったやつだ。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "次は先にそっちが選んで。"
        },
        {
          "who": "twin",
          "text": "決まり。……まだ頼むものも決めてないのに、次があるね。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "fs2_play"
      },
      "cast": [
        "ami",
        "twin"
      ]
    },
    {
      "id": "fs2_play_mzt",
      "day": "fest2",
      "date": "6月21日(日)",
      "place": "stage",
      "time": "昼",
      "bgm": "keep",
      "char": "mzt",
      "title": "呼びかけのあと",
      "lines": [
        {
          "who": "narr",
          "text": "出番の直前、代役の台本を追う指が止まった。「窓の外の旅人が返事をする」。"
        },
        {
          "who": "twin",
          "text": "扉に向かって言う台詞だと思ってた。きみが窓から返すなら、先にそっちを見る。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "間が空いても待ってて。窓の台まで階段が二段ある。"
        },
        {
          "who": "narr",
          "text": "本番。扉をたたく効果音が鳴った。瑞葉の目だけが、まだ空っぽの窓を見ている。",
          "fm": {
            "text": {
              "v": "本番。扉をたたく効果音が鳴った。瑞太の目だけが、まだ空っぽの窓を見ている。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "「聞こえているなら、一度だけ返事を」。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "「聞こえてる。ここにいるよ」。"
        },
        {
          "who": "narr",
          "text": "窓までの二歩が、いつもの練習よりはっきり聞こえた。"
        },
        {
          "who": "twin",
          "text": "……客席にも、あそこまでの二段が見えたみたい。足音のところで息が止まった。",
          "expr": "neutral"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "fs2_exhibit",
        "effects": {
          "mzt": 7,
          "gei": 2
        }
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "fs2_ex_mzt",
      "day": "fest2",
      "date": "6月21日(日)",
      "place": "infirmary",
      "time": "午後",
      "bgm": "keep",
      "char": "mzt",
      "title": "どこから届いた？",
      "lines": [
        {
          "who": "narr",
          "text": "集合管と血管の模型の前に、紙の二段ポストがあった。"
        },
        {
          "who": "twin",
          "text": "水守の水門は集合管。こっちの模型は、壁が縮んで内側が狭くなる血管。二つに届く札を、一緒に置いてみる？",
          "expr": "neutral"
        },
        {
          "who": "shiori",
          "text": "塩を戻す働きは私の札。腎臓でナトリウムを再吸収するのを手伝う。水門の札とは分けてね。",
          "expr": "neutral",
          "act": "v5-check"
        }
      ],
      "choices": [
        {
          "prompt": "中枢から出るバソプレシンの札を、どこに置く？",
          "kind": "care",
          "options": [
            {
              "response": [
                {
                  "who": "twin",
                  "text": "そう。視床下部でつくられ、後葉から血液に出て、集合管や血管に届く。",
                  "expr": "neutral"
                }
              ],
              "effects": {
                "u": 2
              },
              "label": "つくられる場所は視床下部。血液へ出る場所は脳下垂体後葉"
            },
            {
              "response": [
                {
                  "who": "twin",
                  "text": "集合管は札の届く先だよ。つくるのは視床下部で、血液へ出す窓口は脳下垂体後葉。",
                  "expr": "neutral"
                }
              ],
              "effects": {},
              "label": "つくられる場所は集合管。そこから中枢へ届ける"
            }
          ]
        }
      ],
      "clues": [],
      "v5Script": true,
      "after": [
        {
          "who": "twin",
          "text": "同じバソプレシンでも、集合管のV2では水を戻し、血管のV1aでは血管を縮める。学園の双子は、その二つの働きを表してるんだ。",
          "expr": "neutral"
        }
      ],
      "goto": {
        "type": "next",
        "id": "fs2_haunted"
      },
      "cast": [
        "twin",
        "shiori"
      ]
    },
    {
      "id": "fs2_ghost_mzt",
      "day": "fest2",
      "date": "6月21日(日)",
      "place": "haunted",
      "time": "午後",
      "bgm": "keep",
      "char": "mzt",
      "title": "戸口までなら",
      "lines": [
        {
          "who": "narr",
          "text": "鈴の音に瑞葉が止まり、片手を上げかけた。",
          "fm": {
            "text": {
              "v": "鈴の音に瑞太が止まり、片手を上げかけた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "曲がり角まで、袖をつまんでてもいい？",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "いいよ。角が来たら言うね。"
        },
        {
          "who": "narr",
          "text": "お化けがお辞儀した。二人ともつられて頭を下げた。"
        },
        {
          "who": "twin",
          "text": "……『帰りにもう一度会う』って書いてある。お化けのほうは、予定を決めるのが早いね。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "袖を離したのは、もう出口が見えてからだった。"
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "fs2_crisis",
        "effects": {
          "mzt": 5
        }
      },
      "cast": [
        "twin"
      ]
    },
    {
      "id": "fs2_sun_mzt",
      "day": "fest2",
      "date": "6月21日(日)",
      "place": "roof",
      "time": "夕方",
      "bgm": "keep",
      "char": "mzt",
      "title": "返す鉛筆",
      "lines": [
        {
          "who": "narr",
          "text": "影の長くなった屋上で、瑞葉が台紙を閉じた。",
          "fm": {
            "text": {
              "v": "影の長くなった屋上で、瑞太が台紙を閉じた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "巡回は引き継いだ。これをしまったら、今日はまだ少し時間がある。",
          "expr": "neutral"
        },
        {
          "who": "me",
          "text": "何か頼みがあって、ここに呼んだの？"
        },
        {
          "who": "twin",
          "text": "ううん。一緒に見るなら、日が沈む前がいいと思った。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "人が少なくなる頃、下へ行こうと思ってる。……待たせる連絡は出さないよ。用が終わってからでいい。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "瑞葉は鉛筆をしまい、夕日のほうを向いた。",
          "fm": {
            "text": {
              "v": "瑞太は鉛筆をしまい、夕日のほうを向いた。",
              "on": "t"
            }
          }
        }
      ],
      "choices": [],
      "clues": [],
      "v5Script": true,
      "goto": {
        "type": "next",
        "id": "ev_afterparty",
        "effects": {
          "mzt": 3
        }
      },
      "cast": [
        "twin"
      ]
    }
  ],
  "pools": {
    "call": {
      "0": "{sei}さん",
      "2": "{sei}さん",
      "3": "{mei}さん",
      "4": "{mei}"
    },
    "gate": [
      [
        {
          "who": "narr",
          "text": "瑞葉が校門の柱をよけ、出てくる人から見える場所に立ち直った。",
          "fm": {
            "text": {
              "v": "瑞太が校門の柱をよけ、出てくる人から見える場所に立ち直った。",
              "on": "t"
            }
          }
        }
      ],
      [
        {
          "who": "narr",
          "text": "門の横で瑞葉が鉛筆を耳にかけた。風で名簿がめくれ、慌てて下ろした。",
          "fm": {
            "text": {
              "v": "門の横で瑞太が鉛筆を耳にかけた。風で名簿がめくれ、慌てて下ろした。",
              "on": "t"
            }
          }
        }
      ],
      [
        {
          "who": "narr",
          "text": "瑞葉は時計を見てから、昇降口を見た。帰る気配も、呼びに来る気配もなかった。",
          "fm": {
            "text": {
              "v": "瑞太は時計を見てから、昇降口を見た。帰る気配も、呼びに来る気配もなかった。",
              "on": "t"
            }
          }
        }
      ],
      [
        {
          "who": "narr",
          "text": "校門に着くと、瑞葉が靴ひもを結び直していた。左だけが妙に短い。",
          "fm": {
            "text": {
              "v": "校門に着くと、瑞太が靴ひもを結び直していた。左だけが妙に短い。",
              "on": "t"
            }
          }
        }
      ],
      [
        {
          "who": "narr",
          "text": "瑞葉が門を出かけて足を止めた。折りたたんだ地図を、鞄の外ポケットへ押し込む。",
          "fm": {
            "text": {
              "v": "瑞太が門を出かけて足を止めた。折りたたんだ地図を、鞄の外ポケットへ押し込む。",
              "on": "t"
            }
          }
        }
      ]
    ],
    "refuse0": [
      [
        {
          "who": "twin",
          "text": "今日は巡回の引き継ぎがある。ごめん、門まででも抜けられないんだ。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "誘ってくれたんだよね。点呼かと思った。……ごめん、今日は先に帰って。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "ごめん。先に帰るって家に伝えてある。また今度、門で。",
          "expr": "neutral"
        }
      ]
    ],
    "refuse1": [
      [
        {
          "who": "twin",
          "text": "一緒に帰るのは楽しそう。今日は心の準備が追いついてないから、また聞いてくれる？",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "いまは先生を待ってる。先に約束を入れたのはこっちだから、今日はここまで。",
          "expr": "neutral"
        }
      ]
    ],
    "ok2": [
      [
        {
          "who": "twin",
          "text": "いいよ。角まで一緒の道だし、そこから先は歩いて決めよう。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "うん。板を置いてくる。帰り道の話なら、あとで書く用事もないし。",
          "expr": "neutral"
        }
      ]
    ],
    "ok3": [
      [
        {
          "who": "twin",
          "text": "行こう。今日は声をかけようと思って、門の外にいた。先に気づかれたね。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "帰る。……きょうは角で別れたくないかも。少し遠い道でもいい？",
          "expr": "neutral"
        }
      ]
    ],
    "invite4": [
      [
        {
          "who": "twin",
          "text": "{call}、隣いい？　巡回の続きはもう終わり。会いたかったから、声をかけた。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "次の角まで、一緒に帰りたい。その先も行きたくなったら、そのときもう一度聞くね。",
          "expr": "neutral"
        }
      ]
    ],
    "like": [
      [
        {
          "who": "twin",
          "text": "勉強の順番を地図にするの、面白そう。ここまで進んだら寄り道一つ、って書き足してもいい？",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "ノートを先に開くんだ。それなら鉛筆を探す時間も、予定に入れなくていいね。",
          "expr": "neutral"
        }
      ]
    ],
    "dislike": [
      [
        {
          "who": "twin",
          "text": "一番に着く話ばかりだと、後ろから来る人のことが気になる。ごめん、次は別の話でもいい？",
          "expr": "neutral"
        }
      ]
    ],
    "neutral": [
      [
        {
          "who": "twin",
          "text": "そういう見方もあるね。普段その辺りは通り過ぎるから、次は立ち止まってみる。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "続きがある顔だね。こっちはまだ時間あるよ。",
          "expr": "neutral"
        }
      ]
    ],
    "stat1": [
      [
        {
          "who": "twin",
          "text": "さっき、最後に来た人の分の椅子を引いてくれたでしょ。助かったよ。",
          "expr": "neutral"
        }
      ]
    ],
    "stat2": [
      [
        {
          "who": "twin",
          "text": "きみ、返事が来なかったときはもう一度聞くんだね。いっしょにいると、見落としたところが分かる。",
          "expr": "neutral"
        }
      ]
    ],
    "stat3": [
      [
        {
          "who": "twin",
          "text": "気づく順番、似てきたかも。気づかなくていい日は、二人でぼんやりしてみたい。",
          "expr": "neutral"
        }
      ]
    ],
    "date_refuse": [
      [
        {
          "who": "twin",
          "text": "休みの日に二人で、か。うれしいけど、まだちょっと緊張する。今日は返事を急がせないでくれる？",
          "expr": "neutral"
        }
      ]
    ],
    "date_like": [
      [
        {
          "who": "twin",
          "text": "{spot}、今日は時計を見なかったな。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "瑞葉は時間を確かめる代わりに、こちらへ顔を向けた。",
          "fm": {
            "text": {
              "v": "瑞太は時間を確かめる代わりに、こちらへ顔を向けた。",
              "on": "t"
            }
          }
        },
        {
          "who": "twin",
          "text": "また来たい。次は、きみの好きなところを案内して。",
          "expr": "neutral"
        }
      ]
    ],
    "date_ok": [
      [
        {
          "who": "twin",
          "text": "{spot}、帰ってからも道順を思い出せそう。どこで笑ったかのほうを、覚えてそうだけど。",
          "expr": "neutral"
        }
      ]
    ],
    "date_bad": [
      [
        {
          "who": "twin",
          "text": "{spot}、混んでて少し落ち着かなかった。次は、声がそのまま聞こえる場所を選んでもいい？",
          "expr": "neutral"
        }
      ]
    ],
    "warn": [
      [
        {
          "who": "redcell",
          "text": "瑞葉、最近ひとりで巡回を増やしてるみたい。前は都合を聞きに来てたけど、今日は誰にも声かけてないよ。",
          "fm": {
            "text": {
              "v": "瑞太、最近ひとりで巡回を増やしてるみたい。前は都合を聞きに来てたけど、今日は誰にも声かけてないよ。",
              "on": "t"
            }
          },
          "expr": "neutral"
        }
      ]
    ],
    "bomb": [
      [
        {
          "who": "narr",
          "text": "巡回表に予備の印が並び、本当は済んでいた班まで呼び戻された。"
        },
        {
          "who": "twin",
          "text": "きみにも聞くつもりで、結局ひとりで埋めてた。返事がないのを、忙しいって決めつけて。",
          "expr": "neutral"
        },
        {
          "who": "narr",
          "text": "古い印を外すまで、みんなの帰り道が少しずつ遅れた。"
        }
      ]
    ],
    "fix": [
      [
        {
          "who": "twin",
          "text": "来てくれてありがとう。忙しいかどうか、今日はちゃんと聞かせて。顔を見てるだけじゃ、読み違えるから。",
          "expr": "neutral"
        }
      ]
    ],
    "nf": [
      [
        {
          "who": "twin",
          "text": "ここまで、付き合ってくれてありがとう。次の持ち場、こっちで決めておかなきゃって思ってた。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "帰りにまた会ったら、今度も「どうする？」って聞くね。そのとき考えてくれたらいい。",
          "expr": "neutral"
        }
      ]
    ],
    "sched0": [
      [
        {
          "who": "twin",
          "text": "次に回るのは、こっち。用があればいま聞くよ。名前の横にはまだ書かない。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "あ、ごめん。いま点呼じゃなかったね。こんにちは。こっちを先に言うんだった。",
          "expr": "neutral"
        }
      ]
    ],
    "sched1": [
      [
        {
          "who": "twin",
          "text": "ちょうど一区切り。椅子を戻すところだったけど、座って話すなら、そのあとにする。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "これ、二色の鉛筆。先に赤ばかり減るから、今日は青で何か書こうと思って。",
          "expr": "neutral"
        }
      ]
    ],
    "sched2": [
      [
        {
          "who": "twin",
          "text": "今日は用事のついで？　……ついでじゃなかったら、うれしい。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "いまから少し空く。会えたらいいなって思ってた時間が、ちょうど今だった。",
          "expr": "neutral"
        }
      ]
    ],
    "pass": [
      [
        {
          "who": "twin",
          "text": "あ、{call}。いま、階段が空いたよ。行ってらっしゃい。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "さっき呼ぼうとした。急いでたら、あとで手だけ振って。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "その角、今日は風が強い。持ってる紙、二つ折りにしとくと安心だよ。",
          "expr": "neutral"
        }
      ]
    ],
    "info1": [
      [
        {
          "who": "redcell",
          "text": "瑞葉は月曜グラウンド、水曜理科室、金曜屋上。水門のほうの水守と探す場所が違うから、間違えないでね。",
          "fm": {
            "text": {
              "v": "瑞太は月曜グラウンド、水曜理科室、金曜屋上。水門のほうの水守と探す場所が違うから、間違えないでね。",
              "on": "t"
            }
          },
          "expr": "neutral"
        }
      ]
    ],
    "info2": [
      [
        {
          "who": "redcell",
          "text": "瑞葉は道順とか、持ちやすい道具の話が好き。早いほうが偉い、って話になるとだんだん静かになる。",
          "fm": {
            "text": {
              "v": "瑞太は道順とか、持ちやすい道具の話が好き。早いほうが偉い、って話になるとだんだん静かになる。",
              "on": "t"
            }
          },
          "expr": "neutral"
        }
      ]
    ],
    "info3": [
      [
        {
          "who": "redcell",
          "text": "人の様子に気づくこと、理科で状況を説明できること。それと、巡回に付き合える体力。瑞葉が安心して誘えるのって、そういう人かな。",
          "fm": {
            "text": {
              "v": "人の様子に気づくこと、理科で状況を説明できること。それと、巡回に付き合える体力。瑞太が安心して誘えるのって、そういう人かな。",
              "on": "t"
            }
          },
          "expr": "neutral"
        }
      ]
    ],
    "info4": [
      [
        {
          "who": "redcell",
          "text": "瑞葉がよく行くのは桟橋と図書館。遊園地は案内放送が多くて、誰が返事してるか分かりづらいんだって。",
          "fm": {
            "text": {
              "v": "瑞太がよく行くのは桟橋と図書館。遊園地は案内放送が多くて、誰が返事してるか分かりづらいんだって。",
              "on": "t"
            }
          },
          "expr": "neutral"
        }
      ]
    ],
    "textbook": [
      [
        {
          "who": "narr",
          "text": "【教科書】バソプレシン（抗利尿ホルモン）は視床下部の神経分泌細胞でつくられ、脳下垂体後葉から血液中に放出される。"
        },
        {
          "who": "narr",
          "text": "体液の浸透圧が上がったり、血圧が大きく下がったりすると、血液への放出が増える。集合管ではV2受容体を介して水の再吸収を増やして尿量を減らし、血管ではV1a受容体を介して血管を収縮させ、血圧を支える。双子は、同じホルモンの二つの働きを表した学園の配役。"
        }
      ]
    ],
    "spot_cake": [
      [
        {
          "who": "twin",
          "text": "先に決めたつもりで来たけど、見本を見ると迷う。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "今日は二人で迷ってから頼もう。",
          "expr": "neutral"
        }
      ]
    ],
    "spot_pier": [
      [
        {
          "who": "twin",
          "text": "船が着いてから、人が降り始めるまでの間が好き。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "誰も急いでない顔をしてる。きみも、今そういう顔。",
          "expr": "neutral"
        }
      ]
    ],
    "spot_park": [
      [
        {
          "who": "twin",
          "text": "放送のたびに「どなたか呼ばれた？」って耳が向いちゃう。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "木のそばなら話せそう。先に行ってもいい？",
          "expr": "neutral"
        }
      ]
    ],
    "spot_rink": [
      [
        {
          "who": "twin",
          "text": "線に沿って滑るの、思ったより分かりやすい。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "離れるときは声をかける。つかむなら、袖と手、どっちがいい？",
          "expr": "neutral"
        }
      ]
    ],
    "spot_library": [
      [
        {
          "who": "twin",
          "text": "今の本、表紙で選んだ？　目次から見た？",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "こっちは最後の棚まで歩いてから。何も急かされないところが好きだな。",
          "expr": "neutral"
        }
      ]
    ],
    "spot_beach": [
      [
        {
          "who": "twin",
          "text": "砂の上に矢印を書いても、次の波で消えるんだね。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "じゃあ、戻る場所は声で確かめよう。この屋台の横でどう？",
          "expr": "neutral"
        }
      ]
    ],
    "spot_aquarium": [
      [
        {
          "who": "twin",
          "text": "群れがいっぺんに曲がった。先頭が合図したのか、みんなで決めたのか。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "次に曲がるとき、違う一匹を二人で見てみよう。",
          "expr": "neutral"
        }
      ]
    ],
    "spot_firefly": [
      [
        {
          "who": "twin",
          "text": "あそこ、一度だけ光った。どこか言うと探してるうちに消えちゃう。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "また光ったら、今度は声を出さずに指で教える。",
          "expr": "neutral"
        }
      ]
    ],
    "repeat": [
      [
        {
          "who": "twin",
          "text": "前に座った場所、今日は空いてないね。反対側から見たこと、そういえばなかった。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "道を覚えるくらい来たし、次はきみが案内したいところも聞きたい。",
          "expr": "neutral"
        }
      ]
    ],
    "phone_call": [
      [
        {
          "who": "twin",
          "text": "はい、水守です。……家の電話みたいに出ちゃった。瑞葉だよ。聞こえる？",
          "fm": {
            "text": {
              "v": "はい、水守です。……家の電話みたいに出ちゃった。瑞太だよ。聞こえる？",
              "on": "t"
            }
          },
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "いま座ったところ。受話器の向こうでも、急いで話さなくていいよ。",
          "expr": "neutral"
        }
      ],
      [
        {
          "who": "twin",
          "text": "予定を聞く電話？　声を聞くほうでも、今日は出られてよかった。",
          "expr": "neutral"
        }
      ]
    ],
    "dream_after_xmas": [
      [
        {
          "who": "twin",
          "text": "雪の中を歩く夢を見た。片方の手袋がなくて。今朝、両方あるのに二度も確かめた。",
          "expr": "neutral"
        }
      ]
    ],
    "dream_after_val": [
      [
        {
          "who": "twin",
          "text": "名前を書いてないお菓子を分ける夢を見た。包みを開けるまで、中身より名前のことが気になってた。",
          "expr": "neutral"
        }
      ]
    ],
    "ident_hint": [
      [
        {
          "who": "narr",
          "text": "奥の段から出る同じ合図が、水門にも血管の模型にも届く。瑞の模型では管の壁が縮み、下がった血圧を支える。"
        },
        {
          "who": "twin",
          "text": "何か気づいた？　こっちに届く紙なら、見せられるよ。",
          "expr": "neutral"
        }
      ]
    ],
    "ident_ok": [
      [
        {
          "who": "twin",
          "text": "バソプレシン。うん、同じ便で呼ばれる。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "水守は集合管のV2。こっちは血管のV1aを介して血管を縮めるほう。そこまで見てくれたんだね。",
          "expr": "neutral"
        }
      ]
    ],
    "ident_ng": [
      [
        {
          "who": "twin",
          "text": "そのホルモンなら、別のところへ届くよ。",
          "expr": "neutral"
        },
        {
          "who": "twin",
          "text": "奥の段から出た合図を、受けた相手の持ち場まで追ってみて。",
          "expr": "neutral"
        }
      ]
    ]
  },
  "clues": {
    "mzt_post": "先生の合図は、二段ポストの奥の窓口から、水門と血管の模型の両方へ届く。",
    "mzt_gate": "水門が水を取り戻す一方、瑞の模型では管の壁が縮んで内側が狭くなる。",
    "mzt_ease": "血圧が大きく下がったとき、瑞の持ち場では管の壁が縮み、血圧を支える。"
  }
});
