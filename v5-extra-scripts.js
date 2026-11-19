/* 糖解アミ・白守頼の脚本から生成した表示・分岐データ。 */
globalThis.HMV5ExtraScripts = Object.freeze({
  "ami": {
    "scenes": [
      {
        "id": "p_ami_1",
        "title": "冷めた試作品",
        "char": "ami",
        "v5Script": true,
        "day": "personal",
        "date": "月曜の放課後",
        "place": "keep",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "家庭科室の戸は半分閉まっていた。窓辺の皿には、焼いた跡が四角くついたパンの端が並んでいる。"
          },
          {
            "who": "ami",
            "text": "日直かと思った。カレーの時に澄と来てた人だ。……それ、持って帰っていいよ。冷めてるけど。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "味見してもいい？　持って帰ったら、感想を言う相手がいないから。"
          },
          {
            "who": "ami",
            "text": "……三つ目だけ少し焼きすぎた。そこまで食べる人、澄くらいだと思ってた。",
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
                    "who": "ami",
                    "text": "鉄板の奥に寄せた。そこ、ちゃんと味で分かるんだ。……次も頼んでいい？",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 3
                },
                "label": "端の香ばしさが好き。どこを変えたの？"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "いいよ。切る方はやるから、同じくらいの大きさで選んで。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 1
                },
                "label": "真ん中と端を並べて食べ比べたい"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "ami",
            "text": "月、水、金は家庭科室。月曜は購買に寄るから、終わりの方が会いやすいよ。",
            "expr": "neutral"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "ami": 4
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "p_ami_2",
        "title": "口から次の教室へ",
        "char": "ami",
        "v5Script": true,
        "day": "personal",
        "date": "放課後",
        "place": "cookroom",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "長くつながった白い紙が、調理台いっぱいに置いてあった。アミが切った紙の端を澄が押さえる。"
          },
          {
            "who": "insulin",
            "text": "この紙、でんぷんに見立てるんですよね。あとで使う分は私が持ちましょうか。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "先に口の札のところで切る。次の台でもう少し小さくする。まだ吸収前だから、ここは食べ物の通り道。",
            "expr": "neutral"
          },
          {
            "who": "glucagon",
            "text": "倉庫の鍵を開けるのは、体に入った糖が必要になったとき。ここはまだ、倉庫の出番じゃないね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "同じ「糖」でも、どこを通ってるかで担当が違うんだ。"
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
                    "who": "ami",
                    "text": "うん。目印は「小腸」。長い紙をいきなり廊下に出したら、授業が一つ飛ぶ。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 2,
                  "u": 2
                },
                "label": "切った紙を次の下ごしらえの台へ運ぶ"
              },
              {
                "response": [
                  {
                    "who": "insulin",
                    "text": "小さくなっただけでは、私の出番には早いんです。吸収されて血液に入ったあとで会いましょう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "u": 2
                },
                "label": "どの段階で澄に渡すか確かめる"
              }
            ]
          }
        ],
        "clues": [
          {
            "char": "ami",
            "text": "でんぷんの長い束を、短い束に分ける。"
          },
          {
            "char": "ami",
            "text": "口で始めた下ごしらえが、小腸でも続く。"
          }
        ],
        "after": [
          {
            "who": "ami",
            "text": "紙を切るのは速いんだけど、渡すとこまで見てくれる人がいると安心する。",
            "expr": "neutral"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "ami": 5
          }
        },
        "cast": [
          "insulin",
          "ami",
          "glucagon"
        ]
      },
      {
        "id": "p_ami_3",
        "title": "全部、自分で切る",
        "char": "ami",
        "v5Script": true,
        "day": "personal",
        "date": "放課後",
        "place": "cookroom",
        "time": "放課後",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "切り分けた皿が一枚ずつ調理台に増えた。アミの後ろで、澄の焼き網と蓄の仕入れ表が空いたままになっている。"
          },
          {
            "who": "glucagon",
            "text": "次の分、作るかどうかだけ言って。黙って積まれると、箱が空けられない。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "やった方が早い。班の分が終わったら、明日の分も……。",
            "expr": "neutral",
            "act": "v5-pivotal"
          },
          {
            "who": "me",
            "text": "ここは注文一つ分だよ。まず、もう切れた分を渡していい？"
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
                    "who": "ami",
                    "text": "じゃあ端をそろえるところ。終わったら自分で澄に言って。……見張らないから。",
                    "expr": "neutral",
                    "act": "v5-pivotal"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4,
                  "u": 2
                },
                "label": "アミの作業を一つ引き取って、終わりまで担当する"
              },
              {
                "response": [
                  {
                    "who": "insulin",
                    "text": "空けておきます。今ある分、三人で確かめてから焼きましょう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 1,
                  "u": 2
                },
                "label": "次の注文が来るまで、澄に焼き網を空けてもらう"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "narr",
            "text": "最初の皿が台からなくなると、やっと下に隠れていた注文札が見えた。「二人分」。アミは聞くような顔で、その札をこちらへ向けた。"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "ami": 6
          }
        },
        "cast": [
          "glucagon",
          "ami",
          "insulin"
        ]
      },
      {
        "id": "p_ami_4",
        "title": "もう一口の順番",
        "char": "ami",
        "v5Script": true,
        "day": "personal",
        "date": "放課後",
        "place": "keep",
        "time": "夕方",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "小さな一皿が窓辺に置いてあった。アミの手の届く場所には、包丁も次の注文札もない。"
          },
          {
            "who": "ami",
            "text": "あの皿、きみが最後の仕上げするって言ったから置いといた。味見の分は別に切ってある。",
            "expr": "neutral",
            "act": "v5-trust"
          },
          {
            "who": "me",
            "text": "自分が先に食べたくならなかった？"
          },
          {
            "who": "ami",
            "text": "なったよ。待たされるの、やっぱり苦手。けど、そこに完成したのが置かれる方を見たかった。",
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
                    "who": "ami",
                    "text": "席、二つにしよ。味見台に立ったままって、今日くらいはやめたい。",
                    "expr": "neutral",
                    "act": "v5-trust"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 5,
                  "u": 1
                },
                "label": "食べるのも仕上げも、半分ずつにしよう"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "いいの？　……じゃあ真ん中。いつも端から減るけど、熱いとこも好き。",
                    "expr": "neutral",
                    "act": "v5-trust"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 3,
                  "u": 1
                },
                "label": "先に、アミがおいしいと思う方を選んで"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "narr",
            "text": "二人で椅子を引いた。焼き上がりの合図も、片づけを急かす声もなく、小さな皿が空くまで座っていた。"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "ami": 8,
            "relax_ami": 1
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "kz_ami_1",
        "title": "澄だけの差し入れ",
        "char": "ami",
        "v5Script": true,
        "day": "bond",
        "date": "keep",
        "place": "corridor",
        "time": "昼休み",
        "bgm": "morning",
        "lines": [
          {
            "who": "narr",
            "text": "渡り廊下で、アミが紙袋を一度引っ込めた。澄の前では、声まで少し小さくなる。"
          },
          {
            "who": "ami",
            "text": "澄、きのうの丸いの、またほしい。……端がへこんだやつがいい。",
            "expr": "happy"
          },
          {
            "who": "insulin",
            "text": "じゃあ一つ取っておきます。今持ってる紙袋は、どなたに？",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "……きみにも。見られたの、寝ぼけた顔より恥ずかしいな。",
            "expr": "happy"
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
                    "who": "ami",
                    "text": "わかった。あたしは少し焦げたやつが好き。苦すぎたら、遠慮なく言うこと。",
                    "fm": {
                      "text": {
                        "v": "わかった。俺は少し焦げたやつが好き。苦すぎたら、遠慮なく言うこと。",
                        "on": "t"
                      }
                    },
                    "expr": "happy"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4
                },
                "label": "今日はアミが選んだ味を食べたい"
              },
              {
                "response": [
                  {
                    "who": "insulin",
                    "text": "私はふわっとした真ん中。アミはいつも端ですね。ちょうど交換できます。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2
                },
                "label": "二人のおすすめを、それぞれ一口ずつ聞く"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "ami",
            "text": "きみに聞かれると、ちゃんと自分で選んだ方を言いたくなるんだ。",
            "expr": "happy"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY"
        },
        "cast": [
          "ami",
          "insulin"
        ]
      },
      {
        "id": "kz_ami_2",
        "title": "味見の約束",
        "char": "ami",
        "v5Script": true,
        "day": "bond",
        "date": "keep",
        "place": "cookroom",
        "time": "放課後",
        "bgm": "morning",
        "lines": [
          {
            "who": "narr",
            "text": "蓄が家庭科室の戸に貼ってあった紙を外した。細い字で「味見、四時」。その下に、アミの字で「五時でも可」。"
          },
          {
            "who": "glucagon",
            "text": "澄、今日来られないって。別の日にあんたが持っていけば？",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "澄にはそうする。……きみはどう？　名前を書いてない方、食べてほしくて焼いた。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "今なら座って食べられるよ。あの札、誰かを急かすために書いたと思ってた。"
          },
          {
            "who": "ami",
            "text": "来られるか聞く前に書いたから、半分はそう。次は、本人が来るまで机を空けとく。",
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
                    "who": "ami",
                    "text": "そっちが甘いと思って、こっちが苦いと思ったときは？　……両方書ける札にしよ。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 5,
                  "u": 1
                },
                "label": "いるなら隣に座る。今日の味、二人で決めよう"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "じゃあ帰る前に約束だけ。台所の用事がなくても誘っていいんだな。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 3,
                  "u": 1
                },
                "label": "予定が合う日を、先に二人で決めたい"
              }
            ]
          }
        ],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY"
        },
        "cast": [
          "glucagon",
          "ami"
        ]
      },
      {
        "id": "cv_ami_01",
        "title": "片目だけ休む",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "廊下の窓が開くと、アミの前髪が大きく持ち上がった。隠れていた目も起きていた。"
          },
          {
            "who": "me",
            "text": "そっちもちゃんと見えてたんだ。"
          },
          {
            "who": "ami",
            "text": "そりゃ包丁使うときに見えなかったら困る。教室だと、片目だけ休ませられる気がするんだよね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "半分は授業を聞いてる？"
          },
          {
            "who": "ami",
            "text": "聞いてるよ。半分ずつ、同じ授業を。……先生には今の言わないで。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "cv_ami_02",
        "title": "焦げ目のある袋",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "rainy",
        "lines": [
          {
            "who": "narr",
            "text": "アミの紙袋には、鉛筆で茶色い丸が描いてあった。透けて見えるパンの端と、ちょうど重なる。"
          },
          {
            "who": "ami",
            "text": "……あ、袋の端が開いてた。購買で分けてもらったやつ。今日は焦げ目が三つ。よく焼ける日だったみたい。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "甘い方が当たりだと思ってた。"
          },
          {
            "who": "ami",
            "text": "味は食べるまでのお楽しみ。先に分かることまで、わざわざ後に回さなくていいでしょ。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "半分いる？　それも食べるまでに決めなくていいよ。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "cv_ami_03",
        "title": "机の上では閉店中",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "教科書の端に小さな字が並んでいた。大さじ、小さじ、卵一個。最後に丸く描かれた顔だけが、居眠りをしている。"
          },
          {
            "who": "ami",
            "text": "授業中に何度も目が閉じると、分量の方が先に思い浮かぶ。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "その顔も分量？"
          },
          {
            "who": "ami",
            "text": "一人前。最後まで起きていられたら、二人前に直す。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "起きてたら、もう一皿できるんだ。"
          },
          {
            "who": "ami",
            "text": "うん。できたら、きみが食べる？",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "cv_ami_04",
        "title": "楽になる並べ方",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "洗った道具が、使う順に伏せてあった。アミは目を半分閉じたまま、正しい取っ手をつかむ。"
          },
          {
            "who": "me",
            "text": "眠いのに、次の道具がよく分かるね。"
          },
          {
            "who": "ami",
            "text": "眠い日に間違えないように、起きてる時に並べた。今は楽していい時間。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "きみは何で手抜きする？　いいやつなら、今度真似する。",
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
                    "who": "ami",
                    "text": "おやつを先に確保するの、分かる。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "v5_topic": [
                    "ami",
                    "oyatsu"
                  ]
                },
                "label": "おやつを切っておいて、後で買いに行く手間を省く"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "……そっちの手間を省いちゃうんだ。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "v5_topic": [
                    "ami",
                    "asa"
                  ]
                },
                "label": "朝を抜いて、支度の時間を短くする"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "置いた場所まで忘れないなら、良さそう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "v5_topic": [
                    "ami",
                    "mono"
                  ]
                },
                "label": "教科書を教室に置いて、鞄を軽くする"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "cv_ami_05",
        "title": "紙袋に二種類",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "澄が「次の味見」と書いた札を、蓄が「明日の仕入れ」と書いた札を、同じ紙袋へ入れかけた。"
          },
          {
            "who": "ami",
            "text": "澄のは一口でいい。蓄のは個数が要る。まとめると、試作品まで倉庫に入るよ。",
            "expr": "neutral"
          },
          {
            "who": "glucagon",
            "text": "じゃあ一口だけ、今のうちにもらえる？",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "最初からそう言えばよかったのに。端はあたしの分。",
            "fm": {
              "text": {
                "v": "最初からそう言えばよかったのに。端は俺の分。",
                "on": "t"
              }
            },
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "アミは紙袋を分け、澄と蓄の間にもう一つ小皿を置いた。"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            40
          ]
        ],
        "cast": [
          "ami",
          "glucagon"
        ]
      },
      {
        "id": "cv_ami_06",
        "title": "最後に来た予約票",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "crisis",
        "lines": [
          {
            "who": "narr",
            "text": "受付が遅れた札を、蓄が一番上に置いた。見落とさないためらしい。アミは上から順に作るので、二人は一度同じ札を握った。"
          },
          {
            "who": "ami",
            "text": "あとで見る箱、名前つけとけばよかったな。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "名前があったら、どっちが見ても順番が分かるね。"
          },
          {
            "who": "ami",
            "text": "うん。でもきみの分なら、書いてなくても思い出す。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "好みまで覚えてる？"
          },
          {
            "who": "ami",
            "text": "それを聞くまで置いとく。適当に完成させたら、また札を分けることになるし。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            30
          ]
        ],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "cv_ami_07",
        "title": "白い束をほどく",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "展示の長い紙を、アミがあごで指した。短く切った束が、その横に置いてある。"
          },
          {
            "who": "ami",
            "text": "でんぷんを小さくする仕事。口で始めて、小腸でも続く。どっちも食べ物の通り道だよ。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "切った紙は、もうそのまま廊下に送れる？"
          },
          {
            "who": "ami",
            "text": "もう一段階。いろんな係が仕上げて、そのあと腸で取り込まれる。入口と出口の札を見れば、誰がどこに立つか分かる。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [
          {
            "char": "ami",
            "text": "でんぷんの長い束を、短い束に分ける。"
          },
          {
            "char": "ami",
            "text": "口で始めた下ごしらえが、小腸でも続く。"
          }
        ],
        "need": [
          [
            "f",
            ">=",
            40
          ]
        ],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "cv_ami_08",
        "title": "好きな焼き目",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "一枚のパンの両端を、アミがこちらに向けた。片側は淡い金色、もう片側には茶色い粒が並んでいる。"
          },
          {
            "who": "ami",
            "text": "同じ一枚で、選ぶ方が逆になることがある。きみは薄い方と濃い方、どっち？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "聞いてくれるんだ。いつも先にお皿が来るから、もう決まってると思ってた。"
          },
          {
            "who": "ami",
            "text": "こっちで決めたら、また端だけ残された時に困るでしょ。",
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
                    "who": "ami",
                    "text": "うん、早めに上げた方。次に一緒に食べられる時まで覚えとく。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 3,
                  "v5_memory": [
                    "ami_toast",
                    "light"
                  ]
                },
                "label": "淡い焼き目。まんなかに近い味が好き"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "そこ、あたしも好き。次は一人分余計に焼いた方がいいな。",
                    "fm": {
                      "text": {
                        "v": "そこ、俺も好き。次は一人分余計に焼いた方がいいな。",
                        "on": "t"
                      }
                    },
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 3,
                  "v5_memory": [
                    "ami_toast",
                    "dark"
                  ]
                },
                "label": "濃い焼き目。端の香ばしいところが好き"
              }
            ]
          }
        ],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            40
          ]
        ],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "cv_ami_09",
        "title": "札は二枚とも使う",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "澄の札には「配る」、蓄の札には「しまう／出す」とある。アミが自分の札をその前に並べた。"
          },
          {
            "who": "ami",
            "text": "アミラーゼは、長いでんぷんを切るところまで。最後まで小さくするのは別の酵素。",
            "expr": "neutral"
          },
          {
            "who": "insulin",
            "text": "私たちの仕事が始まるのは、糖が吸収されたあと。仕事の順は、その三枚で見えますね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "前の人が終わらせてないことまで、抱え込まなくていいんだ。"
          },
          {
            "who": "ami",
            "text": "うん。だから明日は、完成した皿を食べる方に回る。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "ident",
            ">=",
            1
          ]
        ],
        "cast": [
          "ami",
          "insulin"
        ]
      },
      {
        "id": "cv_ami_10",
        "title": "台所が静かな日",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "アミが窓に写った時計を見ていた。いつもなら試作が二回済む時刻に、机には道具が一つも出ていない。"
          },
          {
            "who": "me",
            "text": "今日は台所が休み？"
          },
          {
            "who": "ami",
            "text": "次の班が先に使う日。前は何か置いておきたかったけど、ちゃんと空けてある。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "手が空くと何をするの？"
          },
          {
            "who": "ami",
            "text": "きみに会ってる。余った時間でやろうとすると、おまけみたいで嫌だったから。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "ident",
            ">=",
            1
          ]
        ],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "cv_ami_11",
        "title": "一口残った理由",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "皿の上に最後の一切れが残った。アミは片づけず、先にコップを置いた。"
          },
          {
            "who": "ami",
            "text": "お腹いっぱい？　苦かった？　それとも、半分ほしい？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "アミが、忙しそうで先に食べてたから。残しておいた。"
          },
          {
            "who": "ami",
            "text": "……うちの班だと、それ聞く前に片づけるとこだった。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "今は終わってるでしょ。座って食べよう。"
          },
          {
            "who": "ami",
            "text": "うん。味の感想は、最後の一口のあとでいい？",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "ident",
            ">=",
            1
          ]
        ],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "cv_ami_12",
        "title": "丸椅子をもう一つ",
        "char": "ami",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "アミが試作台の配置図を折らずに広げた。端に描かれた椅子は、一脚だけ罫線からはみ出している。"
          },
          {
            "who": "ami",
            "text": "前は正面の丸だけで足りた。二席にしようとしたら、棚を一つ動かさないとね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "二人でお店を開くの？"
          },
          {
            "who": "ami",
            "text": "大げさな予定はこれから。いまは、食べ終わった人をすぐ帰さなくていい台がほしい。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "その手前なら、確かに座れそう。"
          },
          {
            "who": "ami",
            "text": "じゃあ、きみが座りやすい方から決める。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "ident",
            ">=",
            1
          ]
        ],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "dt_ami_1",
        "title": "ケーキ屋の端切れ",
        "char": "ami",
        "v5Script": true,
        "day": "date",
        "date": "休日",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "ケーキ屋の試食皿には、同じ形の端切れが二つずつ並んでいた。アミはココアの香りがする一切れに手を伸ばし、途中で止める。"
          },
          {
            "who": "ami",
            "text": "見た目で決めない。目を閉じて、どっちが先に甘いか当てる？",
            "expr": "neutral",
            "act": "v5-date"
          },
          {
            "who": "me",
            "text": "当たった方が勝ち？"
          },
          {
            "who": "ami",
            "text": "当たった方が、相手に食べさせたい味を先に一つ選ぶ。二人とも何か食べるやつ。",
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
                    "who": "ami",
                    "text": "苦い匂いが先に来ると、次に甘いのが嬉しくなる。きみが食べる顔、見たいし。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 5,
                  "u": 1
                },
                "label": "アミにも、選んだ理由まで聞きたい"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "いいね。名前が分かんない方、たぶん帰ってからも思い出すよ。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 4
                },
                "label": "当てられなくても一切れずつ渡し合う"
              }
            ]
          }
        ],
        "clues": [],
        "dateSpot": "cake",
        "after": [
          {
            "who": "narr",
            "text": "二人の皿の同じ角に、食べかすが残った。片づける前に、アミはこちらへもう一度笑った。"
          }
        ],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "dt_ami_2",
        "title": "遊園地の休憩所",
        "char": "ami",
        "v5Script": true,
        "day": "date",
        "date": "休日",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "ゲートの向こうで車体を引き上げる音がした。アミは袋の端を開き、肩が並ぶ長いベンチを見つけた。"
          },
          {
            "who": "ami",
            "text": "先にあっち並ぶと思った。……まだ食べてるなら、座ってよ。歩きながらじゃ味が分かんない。",
            "expr": "neutral",
            "act": "v5-date"
          },
          {
            "who": "me",
            "text": "待ってる間、ひと口取っていいよ。"
          },
          {
            "who": "ami",
            "text": "あとで同じ列に並べば、間に合うかどうかも二人で決まる。",
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
                    "who": "ami",
                    "text": "それでいい。走るのは乗り物に任せたい日もある。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 5
                },
                "label": "最後の一口まで食べてから、一緒に決めよう"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "じゃあ曲がり方が見える場所を先に教える。選ぶのは食べ終わってから。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 4
                },
                "label": "何に乗るか話しながら、ゆっくり食べたい"
              }
            ]
          }
        ],
        "clues": [],
        "dateSpot": "park",
        "after": [
          {
            "who": "narr",
            "text": "紙袋の最後のかけらを片づけると、アミは空の手を持ち上げた。今なら腕を引いても大丈夫か、と聞いた。"
          }
        ],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "dt_ami_3",
        "title": "一皿を待つ",
        "char": "ami",
        "v5Script": true,
        "day": "date",
        "date": "休日",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "二人のところだけ皿が来ない。アミは時計を見たあと、店員の手元を見るのをやめた。"
          },
          {
            "who": "ami",
            "text": "こういうとき、手伝えば早いって思う癖がある。今日は二人で待ちたい。きみは？",
            "expr": "neutral",
            "act": "v5-date"
          },
          {
            "who": "me",
            "text": "揃ってからなら、温かいうちに食べられそう。"
          },
          {
            "who": "ami",
            "text": "うん。どっちも先に冷まさずに済む。",
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
                    "who": "ami",
                    "text": "気が合っても、感想まで一緒じゃなくていいね。あたしは香りから言う。",
                    "fm": {
                      "text": {
                        "v": "気が合っても、感想まで一緒じゃなくていいね。俺は香りから言う。",
                        "on": "t"
                      }
                    },
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4,
                  "u": 1
                },
                "label": "同じ味にして、最初に気づいたことを言い合う"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "切る係はこっち。渡す方はきみに任せる。……ひと口が大きくても笑わないでよ。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 3
                },
                "label": "別々の味を選び、半分ずつにする"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "hp_ami_1",
        "title": "走ったナプキン",
        "char": "ami",
        "v5Script": true,
        "day": "happen",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "風が来て、四角い紙がテーブルの向こうまで逃げた。アミが追いかけ、袖だけが椅子の背に引っかかる。"
          },
          {
            "who": "ami",
            "text": "待って。食べ物の方、見てて。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "椅子に引っかかってる方も見てるよ。"
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
                    "who": "ami",
                    "text": "うん。取ってくる。席に戻っても、まだ半分残ってたら嬉しい。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4
                },
                "label": "アミの袖を外して、皿はこっちで押さえる"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "任せる。皿は二つ、ちゃんとここに置いとく。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2
                },
                "label": "紙の方へ行くから、包みを押さえてて"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "ami",
            "text": "紙はここを押さえよう。今度はこっちの端から食べよ。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "両端にコップを一つずつ置き、二人で続きから食べた。"
          }
        ],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "hp_ami_2",
        "title": "混んだ店先",
        "char": "ami",
        "v5Script": true,
        "day": "happen",
        "place": "keep",
        "time": "keep",
        "bgm": "rainy",
        "lines": [
          {
            "who": "narr",
            "text": "店の前に二列できていた。アミが片側へ行きかけて、出入り口の脇で足を止める。"
          },
          {
            "who": "ami",
            "text": "あっち、受け取りと注文が同じところで詰まってる。札を分けたら早いのに。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "案内を頼まれてないなら、列の外から見るだけでいいよ。"
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
                    "who": "ami",
                    "text": "うん。一番空いてるところじゃなくて、食べたいものから探そう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4
                },
                "label": "離れた場所で座れる店を一緒に探す"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "それなら仕事と客が混ざらない。今日はこっちの皿を待とう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 1
                },
                "label": "どっちに並ぶか係の人に聞いて、待つ"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "hp_ami_3",
        "title": "売り切れの札",
        "char": "ami",
        "v5Script": true,
        "day": "happen",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "最後の一個が売れた。アミが白い札を裏返す店員に、小さく頭を下げる。"
          },
          {
            "who": "ami",
            "text": "せっかく来たけど、もうないって。作って出せる時間でもなさそう。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "ほかの味、二つあるよ。"
          },
          {
            "who": "ami",
            "text": "まず、どっちを食べたいか聞こうか。",
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
                    "who": "ami",
                    "text": "じゃあ一つずつ指す。同じ方を指したら、二人ともそれね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4
                },
                "label": "いつもと違う味を、食べる前に交換する"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "袋が二つあるから混ざらない。走らないで持って帰ろう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2
                },
                "label": "今日は持ち帰って、帰り道で決める"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "tr_ami_1",
        "title": "一個少ない予約",
        "char": "ami",
        "v5Script": true,
        "day": "trouble",
        "date": "放課後",
        "place": "cookroom",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "予約票は八枚、包みは七つ。蓄が倉庫を見に行こうとし、アミは粉のついたままの手を上げた。"
          },
          {
            "who": "ami",
            "text": "その前に受け取った人を数えたい。八枚のうち一枚、控えと見分けがつかない。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "日付と受取人を一枚ずつ読もう。入ってきた品の数も聞けば分かるよ。"
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
                    "who": "glucagon",
                    "text": "ここが控え。倉庫には八個来た。昨日渡した分と混ぜたら、今度はこっちが二度数えちゃう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 2,
                  "u": 2
                },
                "label": "蓄の控えとアミの注文を分けて確かめる"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "渡った分は札を抜こう。口の台と次の台も、それで途中を追える。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "u": 1
                },
                "label": "アミと包み直し、札を残す"
              }
            ]
          }
        ],
        "clues": [
          {
            "char": "ami",
            "text": "口で始めた下ごしらえが、小腸でも続く。"
          }
        ],
        "cast": [
          "ami",
          "glucagon"
        ]
      },
      {
        "id": "tr_ami_2",
        "title": "会計と皿の行き先",
        "char": "ami",
        "v5Script": true,
        "day": "trouble",
        "date": "放課後",
        "place": "cookroom",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "澄が受け取った札に「追加で二つ」とあり、アミの台には何も貼られていなかった。蓄は倉庫の前で札を確かめている。"
          },
          {
            "who": "ami",
            "text": "レジで数が変わったなら、先に厨房に知らせて。焼き上がったあとで数が違うと戻せない。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "澄にはもう配った数を聞く。下ごしらえの分は、アミが見てくれる？"
          },
          {
            "who": "ami",
            "text": "そう。台の上の材料と、配り終わった皿を分けて数えてくれると助かる。",
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
                    "who": "ami",
                    "text": "うん。その札なら、どこから途中で戻ったかまで分かる。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 2,
                  "u": 2
                },
                "label": "二枚の札に今いる持ち場を書く"
              },
              {
                "response": [
                  {
                    "who": "insulin",
                    "text": "最後の二つはまだお出ししていません。下ごしらえの札は、アミに届けてください。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "u": 1
                },
                "label": "渡した数を澄と蓄に一つずつ確かめる"
              }
            ]
          }
        ],
        "clues": [
          {
            "char": "ami",
            "text": "アミは吸収前の台、澄と蓄は糖が吸収された後の持ち場。"
          }
        ],
        "cast": [
          "ami",
          "insulin"
        ]
      },
      {
        "id": "tw_ami_1",
        "title": "焼き目の両面",
        "char": "ami",
        "v5Script": true,
        "day": "trio",
        "place": "gate",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "赤路がクッキーを表だけ見て「こっち」と言った。アミは一切れを裏返し、赤路の鼻の前に置く。"
          },
          {
            "who": "ami",
            "text": "こっちが鉄板に当たった面。匂い、違うでしょ。",
            "expr": "neutral"
          },
          {
            "who": "redcell",
            "text": "ほんとだ。あっち向けて売った方がよくない？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "持って歩くとき、粉が落ちそう。"
          },
          {
            "who": "ami",
            "text": "じゃあ三人そろった今、食べとこう。こぼす分まで包みたくないから。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "ami",
          "redcell"
        ]
      },
      {
        "id": "tw_ami_2",
        "title": "倉庫札と予約札",
        "char": "ami",
        "v5Script": true,
        "day": "trio",
        "place": "gate",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "赤路が同じ色の札を二枚取り違えた。蓄の札は在庫、アミの札は夕方の予約。"
          },
          {
            "who": "redcell",
            "text": "書いてある数字、どっちも四だったんだよ。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "その四つ、全部焼くとは決まってない。蓄に在庫、こっちに予約って書き直して。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "二人とも同じ四を見てて、見てたものが違うんだ。"
          },
          {
            "who": "ami",
            "text": "うん。赤路の分はまだ書いてない。きみは二人分いる？",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "redcell",
          "ami"
        ]
      },
      {
        "id": "tw_ami_3",
        "title": "澄が残した一口",
        "char": "ami",
        "v5Script": true,
        "day": "trio",
        "place": "gate",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "紙袋の最後に、きれいな四角い一切れが残っていた。澄の小さな字で「アミへ」。"
          },
          {
            "who": "redcell",
            "text": "さっきから一口ほしかったけど、それはいいや。固いところ、味が濃いもんな。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "そっちは焼けた端が好きだから、食べても平気だよ。……澄はこういうの、よく覚えてる。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "アミも、人の好みをよく見てる。"
          },
          {
            "who": "ami",
            "text": "言ってもらえた分はね。きみのも聞きたいこと、まだある。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            10
          ]
        ],
        "cast": [
          "redcell",
          "ami"
        ]
      },
      {
        "id": "tw_ami_4",
        "title": "端を三つに",
        "char": "ami",
        "v5Script": true,
        "day": "trio",
        "place": "gate",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "赤路が先に歩き出すと、アミは紙袋を持ったまま「ちょっと待って」と言った。端の色が、三枚とも違っている。"
          },
          {
            "who": "ami",
            "text": "淡いの、真ん中くらい、濃いの。選んで。",
            "expr": "neutral"
          },
          {
            "who": "redcell",
            "text": "三人いるなら、割って三種類ずつ食べたらいい。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "ひと口食べ終わるまで、歩き出さないなら賛成。"
          },
          {
            "who": "ami",
            "text": "それで決まり。焼き上がりより、食べる方に時間使っていいんだな。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            20
          ]
        ],
        "cast": [
          "ami",
          "redcell"
        ]
      },
      {
        "id": "rv_ami_1",
        "title": "台の外の在庫",
        "char": "ami",
        "v5Script": true,
        "day": "rival",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "アミが紐で束ねた伝票を落としそうになった。蓄がいないので、結び方がいつもと少し違う。"
          },
          {
            "who": "ami",
            "text": "「厨房の外にまだある」って言われると、先に作っておきたくなる。蓄は足りなくなる前の算段をしてるんだろうけど。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "作る分は誰が決めて、置く分は誰が決める？"
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
                    "who": "ami",
                    "text": "うん。もう仕込み終わった顔で聞くのはやめる。聞いてからやる分もあるから。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 2,
                  "rs": 1
                },
                "label": "二人がどこまで見てるか一緒に聞こう"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "今日の分は終わり。気になってるのは、明日もこのまま自分でやるかってこと。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 1
                },
                "label": "アミの台は、今どこまで進んでる？"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "rv_ami_2",
        "title": "閉店後の残り",
        "char": "ami",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "校門に蓄がいて、二つ折りの袋を覗いていた。アミが持ち帰る分は、まだ分け方が決まらない。"
          },
          {
            "who": "glucagon",
            "text": "余りを先に在庫に戻すと、あっちが試す分まで減る。……アミ、まだ台所？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "迎えに行くよ。ちょうど話したいこともあるし。"
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
                    "who": "glucagon",
                    "text": "わかった。そっちの気になる分も言って。両方聞いてから袋を閉める。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 1,
                  "rs": 1
                },
                "label": "どれを残したいか、アミに聞いてから分けよう"
              },
              {
                "response": [
                  {
                    "who": "glucagon",
                    "text": "うん。昼から残してある二切れ。決まったら、明日の箱の数を直す。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 1
                },
                "label": "今ある分を渡して。アミと持ち帰る方を決める"
              }
            ]
          }
        ],
        "clues": [],
        "goto": {
          "type": "if",
          "cond": [
            [
              "pt",
              ">=",
              20
            ]
          ],
          "then": "rv_ami_2j",
          "else": "DAY"
        },
        "cast": [
          "glucagon"
        ]
      },
      {
        "id": "rv_ami_2j",
        "title": "袋が空でも",
        "char": "ami",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "glucagon",
            "text": "ねえ。今日はアミを待ってるって、ちゃんと言ってくれてよかった。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "何か頼まれたわけでもないのに、待っていたくなった。"
          },
          {
            "who": "glucagon",
            "text": "わかる。……次は袋が空でも、こっちに声かけて。いつも用があるときだけだと、先に鍵を探しちゃう。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "じゃあ次は、鍵がいらない方の話をする。"
          },
          {
            "who": "narr",
            "text": "蓄は袋を閉じずに帰った。風が口を一度ふくらませてから、角を曲がった。"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "glucagon"
        ]
      },
      {
        "id": "rv_ami_3",
        "title": "二枚で一つの注文",
        "char": "ami",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "厨房の札は今日七枚。蓄の倉庫帳は今日八個。最初に見つかった一つのずれが、作る数を止めていた。"
          },
          {
            "who": "glucagon",
            "text": "一個は、明日焼くために取ってある。今日の札には入れてない。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "こっちは今日の端を残すから、明日の一個は別で数えよう。言い合う前に、印をつけとけばよかった。",
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
                    "who": "ami",
                    "text": "今日の札はあたしが持つ。明日は蓄の手の届くところに置こう。",
                    "fm": {
                      "text": {
                        "v": "今日の札は俺が持つ。明日は蓄の手の届くところに置こう。",
                        "on": "t"
                      }
                    },
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 1,
                  "rs": 1
                },
                "label": "今日と明日で札を分け、二人が見てから戻す"
              },
              {
                "response": [
                  {
                    "who": "glucagon",
                    "text": "了解。閉店は待たせられない。明日の箱は、まだ封をしないでおく。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 1
                },
                "label": "今日の分を先に閉めて、残りはあとで話す"
              }
            ]
          }
        ],
        "clues": [],
        "goto": {
          "type": "if",
          "cond": [
            [
              "rs",
              ">=",
              2
            ]
          ],
          "then": "rv_ami_3ok",
          "else": "rv_ami_3ng"
        },
        "cast": [
          "glucagon",
          "ami"
        ]
      },
      {
        "id": "rv_ami_3ok",
        "title": "最後の皿は任せる",
        "char": "ami",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "夜",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "次の札を蓄が取ると、アミは作業台の片側を空けた。"
          },
          {
            "who": "ami",
            "text": "最後の皿、きみがどこへ置くか決めて。からっぽの台も残したい。",
            "expr": "neutral"
          },
          {
            "who": "glucagon",
            "text": "ほら、次の注文は預かった。二人分は、ちゃんと座れるところに持っていけば？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "窓辺に椅子を出していい？"
          },
          {
            "who": "ami",
            "text": "うん。先に座って待ってて。二人とも手が空く時間、やっと作れたな。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "t": 4,
            "rvok": 1
          }
        },
        "cast": [
          "ami",
          "glucagon"
        ]
      },
      {
        "id": "rv_ami_3ng",
        "title": "閉店後に聞く",
        "char": "ami",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "夜",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "店を開けておく時間が足りなかった。蓄は返す箱を机の下に寄せ、アミは受付札を裏返す。"
          },
          {
            "who": "glucagon",
            "text": "いま言い切っても、また声が重なる。閉店から十分後、同じ台に来て。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "……うん。今日の分は封をする。余った方は、どっちも持って帰らずに。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "二人の札をここに並べておくよ。"
          },
          {
            "who": "narr",
            "text": "アミは小さい方の札を置き直した。二枚の字が、どちらも上から読める置き方にした。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "t": -2
          }
        },
        "cast": [
          "glucagon",
          "ami"
        ]
      },
      {
        "id": "ep_rv_ami",
        "title": "明日のひと口",
        "char": "ami",
        "v5Script": true,
        "day": "end",
        "date": "6月21日(日)",
        "place": "ginkgo",
        "time": "夜",
        "trans": "white",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "イチョウの向こうの屋台で、蓄が空の箱を重ねていた。最後の一つだけ、蓋が閉まっている。"
          },
          {
            "who": "glucagon",
            "text": "明日、一皿分だけ残してある。食べる約束とは別。二人で決めて、別のものにしてもいい。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "その箱、開けて見ていい？"
          },
          {
            "who": "glucagon",
            "text": "明日にしなよ。今日の分の味、まだ覚えてる内に帰った方がいい。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "箱の札には二人分とも何も書いていなかった。日付の横にだけ、台所に来ていい時刻があった。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "ep_wake"
        },
        "cast": [
          "glucagon"
        ]
      },
      {
        "id": "dream_xmas_ami",
        "title": "冷えた窓と布巾",
        "char": "ami",
        "v5Script": true,
        "day": "dream",
        "date": "？月？日",
        "place": "dream_snow",
        "time": "夢",
        "trans": "dream",
        "bgm": "dream",
        "lines": [
          {
            "who": "narr",
            "text": "窓の外が雪で白かった。台所には火を使った気配がなく、アミは布巾を一枚ずつ畳んでいる。"
          },
          {
            "who": "ami",
            "text": "まだ朝にもなってない。急いで作っても、この温度じゃすぐ冷める。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "起きるまで、隣にいてもいい？"
          },
          {
            "who": "ami",
            "text": "座るなら窓と反対側。足元だけ寒い。……こっちの布、二人でかけたら足りる。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "音がすると思ったら、湯が沸くより先に外で雪が落ちた。アミは次に何を作るか、まだ言わなかった。"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "dream_val_ami",
        "title": "甘い皿、苦い皿",
        "char": "ami",
        "v5Script": true,
        "day": "dream",
        "date": "？月？日",
        "place": "dream_sweet",
        "time": "夢",
        "trans": "dream",
        "bgm": "dream",
        "lines": [
          {
            "who": "narr",
            "text": "同じ色の皿が二つあった。アミが右をこちらへ押し、すぐに戻した。"
          },
          {
            "who": "ami",
            "text": "澄にはまだ見せてない。左は甘くない。二人で食べるなら、途中で交換していいよ。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "アミはどっちから？"
          },
          {
            "who": "ami",
            "text": "苦い方。あとで甘くなった気がするから。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "一口目のあとで皿を交換した。目が覚める前に、次はどちらから始めるかだけ決めた。"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "lake_ami",
        "title": "観察班の包み",
        "char": "ami",
        "v5Script": true,
        "day": "w8d2b",
        "date": "6月4日(木)",
        "place": "shallows",
        "time": "午後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "岸で道具を片づけると、観察班の袋に違う名前の包みが入っていた。アミは包みを開けず、乾いた箱に並べる。"
          },
          {
            "who": "ami",
            "text": "軽食だった。濡らさずに渡る場所、どこ？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先に渡す人と箱の名前を照らし合わせよう。食べられないものがないかも、本人に聞いてある？"
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
                    "who": "ami",
                    "text": "うん。中を見れば早くても、違う人の手に渡すよりいい。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 3,
                  "u": 2
                },
                "label": "袋を閉じたまま、班ごとの荷物へ戻す"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "名前を呼ぶ方は任せた。誰も来なかった箱は、船員さんに預けていこう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2,
                  "u": 1
                },
                "label": "乾いたところに置き、持ち主を呼ぶ"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "ami"
        ]
      },
      {
        "id": "lake_end_ami",
        "title": "二人分だけ残った",
        "char": "ami",
        "v5Script": true,
        "day": "w8d2b",
        "date": "6月4日(木)",
        "place": "boat",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "帰りの船で、アミが小さな紙袋を膝に置いた。観察用の箱にはしまわなかった包みだ。"
          },
          {
            "who": "ami",
            "text": "これは渡しそびれた分じゃない。最初から二人用に分けた。……船が着くまでに食べる？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "時間が足りなくなったら、続きは岸でいい？"
          },
          {
            "who": "ami",
            "text": "いいね。全部を片づけるための時間は終わった。ここからは、きみと使う分。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "t": 4
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "ev_park_ami",
        "title": "屋台の角",
        "char": "ami",
        "v5Script": true,
        "day": "w7d3",
        "date": "5月29日(金)",
        "place": "park",
        "time": "午前",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "屋台の列は、角を曲がる手前で折り返していた。アミは注文を決めかけてから、列の外に戻った。"
          },
          {
            "who": "ami",
            "text": "ここならメニュー見える。きみが食べるの、どっち？　決めるまでは並ばないでいいや。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "いつもより待てるんだ。"
          },
          {
            "who": "ami",
            "text": "仕事と違って、待たせてる皿がないから。",
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
                    "who": "ami",
                    "text": "うん。味が混ざる前に、先に自分の分をよく見とこ。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4,
                  "u": 1
                },
                "label": "小さいのを買って、一口ずつ交換しよう"
              },
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "いいね。どっちから渡すかも、並んでから決める。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2
                },
                "label": "それぞれ好きな方。先に相手のを一口だけ"
              }
            ]
          }
        ],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "ev_park_pm"
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "ev_buy_ami",
        "title": "袋に入るのは四つ",
        "char": "ami",
        "v5Script": true,
        "day": "w9d3",
        "date": "6月12日(金)",
        "place": "shopping",
        "time": "放課後",
        "bgm": "date",
        "lines": [
          {
            "who": "narr",
            "text": "商店街の文具店に、同じ幅の袋が二種類あった。アミが底を広げると、ひとつは安定して立った。"
          },
          {
            "who": "ami",
            "text": "欲しいのは受け取ったあと倒れない方。蓄の表だと四つ入れるってあるけど、口を畳む分もいる。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "四つじゃなく、三つで閉まる見本を渡して、数を直してもらおう。"
          },
          {
            "who": "ami",
            "text": "うん。こっちが見たこと、ちゃんと返す。紙袋の中に次の仕事、そのまま置いて帰りたくないし。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "ami": 6
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "ev_assign_ami",
        "title": "台を空けておく",
        "char": "ami",
        "v5Script": true,
        "day": "w10d1",
        "date": "6月15日(月)",
        "place": "cookroom",
        "time": "放課後",
        "bgm": "prep",
        "lines": [
          {
            "who": "narr",
            "text": "アミの台の隣には、澄の焼き網と蓄の朝の手配書。まだ、どの札も裏返してあった。"
          },
          {
            "who": "ami",
            "text": "試作は一人でもできるけど、今日は何人分焼くかから決めたい。焼いたものを置く場所、開いてる？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "受け取る人と時刻を見よう。澄に焼ける量、蓄に明日の分を聞ける？"
          },
          {
            "who": "ami",
            "text": "うん。きみには、机を二つに分けられるか見てほしい。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "if",
          "cond": [
            [
              "ryo",
              ">=",
              40
            ],
            [
              "rika",
              ">=",
              20
            ]
          ],
          "then": "ev_assign_ami_ok",
          "else": "ev_assign_ami_ng"
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "ev_assign_ami_ok",
        "title": "試した分を残す",
        "char": "ami",
        "v5Script": true,
        "day": "w10d1",
        "date": "6月15日(月)",
        "place": "cookroom",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "台を分けたおかげで、焼けた皿がすぐ見分けられた。澄が冷ます方を、蓄が翌日の箱を受け取った。"
          },
          {
            "who": "ami",
            "text": "きみが切った方、形がそろってた。焼き直す分がないから、最後の一皿まで間に合ったよ。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "最後まで残ったのは、試作品？"
          },
          {
            "who": "ami",
            "text": "うん。感想を聞いた分だけ、次の皿に使いたい。片づける前に、二人で味見しよ。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "ami": 8,
            "ryo": 1
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "ev_assign_ami_ng",
        "title": "札を出し直す",
        "char": "ami",
        "v5Script": true,
        "day": "w10d1",
        "date": "6月15日(月)",
        "place": "cookroom",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "小皿が積まれ、先に焼く分と明日の分が同じ札に入った。アミは手を止め、二枚の紙を取り出した。"
          },
          {
            "who": "ami",
            "text": "このまま進めると、次の班がどっちを焼くか分からない。今日は片方だけ試そう。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先に使う札、見えるところに置くね。"
          },
          {
            "who": "ami",
            "text": "ありがとう。速さはあとで揃える。明日の分まで慌てて仕上げちゃうよりいい。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "ami": 2,
            "ryo": 1
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "ev_shed_ami",
        "title": "下ろせば軽くなる",
        "char": "ami",
        "v5Script": true,
        "day": "w10d2",
        "date": "6月16日(火)",
        "place": "shed",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "扉の前には大きな箱が二つ。アミの腕には片方、主人公の腕はもう片方を持ち上げかけている。"
          },
          {
            "who": "ami",
            "text": "その持ち方だと前が見えない。こっちが二つとも……あ、戸、閉まった？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "下ろそう。重いまま言い合っても、助けを呼ぶ手がふさがる。"
          },
          {
            "who": "ami",
            "text": "……箱って、一回下ろせば軽くなるんだ。ずるいな。",
            "expr": "neutral"
          },
          {
            "who": "hypothalamus",
            "text": "中にいるのか。待ってて。先に鍵を持ってこよう。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "箱を床に並べて座ると、外から足音が戻るまでの間が、少し楽になった。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "ami": 7
          }
        },
        "cast": [
          "ami",
          "hypothalamus"
        ]
      },
      {
        "id": "ev_night_ami",
        "title": "消灯前の一口",
        "char": "ami",
        "v5Script": true,
        "day": "w10d4",
        "date": "6月18日(木)",
        "place": "class",
        "time": "夜",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "先に火を止める係が帰り、窓辺の灯りだけが残った。アミは端の二切れを同じ形に割る。"
          },
          {
            "who": "ami",
            "text": "明日の分は封した。こっちは今食べる分。電気消すと見えないけど、目を閉じるだけで味、変わると思う？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "見えない方が、柔らかさに気づくかも。"
          },
          {
            "who": "ami",
            "text": "じゃあ合図はしない。先に食べた方が、何が違ったか言って。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "二人の答えは別だった。アミはそういう日があっていい、と言って先に消灯した。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "ami": 5
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "fs1_lunch_ami",
        "title": "三人目の包み",
        "char": "ami",
        "v5Script": true,
        "day": "fest1",
        "date": "6月20日(土)",
        "place": "field",
        "time": "昼休み",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "木陰にアミが二人分の包みと、小さい封筒を持ってきた。端の硬いところだけ、封筒に入っている。"
          },
          {
            "who": "ami",
            "text": "昼まで残ったの。二人で食べて、端は蓄に渡すつもり。いつも手配してくれるから。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "アミが一番好きなとこじゃなかった？"
          },
          {
            "who": "ami",
            "text": "そう。だから、今日はその代わりに、食べ終わるまできみの隣を空けてもらった。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "包みを開いた。風で押さえようとすると、アミが反対側から自然に手を添えた。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs1_relay",
          "effects": {
            "ami": 6
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "fs1_pair_ami",
        "title": "最初は右",
        "char": "ami",
        "v5Script": true,
        "day": "fest1",
        "date": "6月20日(土)",
        "place": "field",
        "time": "午後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "足を結ぶと、アミがすぐ右を出しかけた。主人公の膝がまだ曲がっているのに気づき、足を戻した。"
          },
          {
            "who": "ami",
            "text": "いつも先に出す方が決まってるんだけど、きみはどっちがいい？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "右でいいよ。最初の一歩は小さく。"
          },
          {
            "who": "ami",
            "text": "うん。速いのは、二人の足が勝手に揃ってから。転んだら走れなくなるし。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "スタートの白い線を、二人で同じように見た。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "MINIGAME:pair"
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "fs1_tent_ami",
        "title": "お茶を置く位置",
        "char": "ami",
        "v5Script": true,
        "day": "fest1",
        "date": "6月20日(土)",
        "place": "field",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "救護テントで頼が空になった手持ちの帳面をめくっている。アミは入口の机に、蓋のついたコップを置いた。"
          },
          {
            "who": "ami",
            "text": "先輩の分。今すぐ飲んでって意味じゃないけど、あったかいうちに座れるといいな。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "ありがとう。あと一件、先生に引き継いだら休むね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "受付は赤路に頼んでおく。アミ、先に台所へ戻れる？"
          },
          {
            "who": "ami",
            "text": "うん。一つずつ返せば、休める人が増えるんだな。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "アミはコップの場所だけもう一度目で確かめて、テントを出た。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs1_close",
          "effects": {
            "ami": 6
          }
        },
        "cast": [
          "ami",
          "yori"
        ]
      },
      {
        "id": "fs2_cafe_ami",
        "title": "注文札を裏から読む",
        "char": "ami",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "cafe",
        "time": "午前",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "前の札の裏に次の注文が重なった。アミは皿を先に置き、澄には受け渡し、蓄には残りの数を頼んだ。"
          },
          {
            "who": "ami",
            "text": "きみは窓口。前の皿、渡せたら一回だけ合図して。聞こえるまでは次を出さない。",
            "expr": "neutral",
            "act": "v5-special"
          },
          {
            "who": "me",
            "text": "今の分、全部届いた。次は一つ。"
          },
          {
            "who": "ami",
            "text": "ありがと。今日は三皿より、一皿ずつ終わる方が気持ちいい。",
            "expr": "neutral",
            "act": "v5-special"
          },
          {
            "who": "narr",
            "text": "閉店後の皿には、淡い金色の端が一切れ残してあった。",
            "v5Memory": [
              "ami_toast",
              "light"
            ]
          },
          {
            "who": "narr",
            "text": "閉店後の皿には、香ばしく色づいた端が一切れ残してあった。",
            "v5Memory": [
              "ami_toast",
              "dark"
            ]
          },
          {
            "who": "narr",
            "text": "閉店後の皿には、淡い端と濃い端。アミがどっちがいい、と聞いた。",
            "v5Memory": [
              "ami_toast",
              ""
            ]
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs2_play",
          "effects": {
            "ami": 3
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "fs2_play_ami",
        "title": "出番の前の小皿",
        "char": "ami",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "stage",
        "time": "昼",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "舞台袖に本物のお盆と劇用の小皿が混ざった。アミが素早く紙の小皿を取り、主人公の手に渡す。"
          },
          {
            "who": "ami",
            "text": "料理を置く方は使わない。持ったまま窓まで登るだろ。軽い方にしよう。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "アミも出番すぐだけど、用意できてる？"
          },
          {
            "who": "ami",
            "text": "まだ。一回だけ台詞を聞いて。覚えるのは最後の音だけでいいから。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "幕が開く前に、緊張した声が一回だけ、本番の声になった。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs2_exhibit",
          "effects": {
            "ami": 7,
            "gei": 2
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "fs2_ex_ami",
        "title": "どこに札を立てる",
        "char": "ami",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "cookroom",
        "time": "午後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "家庭科部の机に、長い紙の束と、短く切った紙が並んでいた。澄のトレーは、腸の模型の向こう側にある。"
          },
          {
            "who": "ami",
            "text": "この札は「でんぷんを切り始める」。どの机がいい？",
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
                    "who": "ami",
                    "text": "そう。あとで別の酵素がもっと小さくする。澄が待つのはそれが吸収されたあと。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 2,
                  "u": 2
                },
                "label": "口と、その先の小腸で消化する台"
              },
              {
                "response": [
                  {
                    "who": "insulin",
                    "text": "血液に入ったら私たちの出番です。アミの札は、血液に入るより前の机へ。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "u": 1
                },
                "label": "血液の中で糖を運ぶ台"
              }
            ]
          }
        ],
        "clues": [
          {
            "char": "ami",
            "text": "アミは吸収前の台、澄と蓄は糖が吸収された後の持ち場。"
          }
        ],
        "after": [
          {
            "who": "narr",
            "text": "主人公が札の矢印を一つ動かすと、二つの机が初めて順番に見えた。"
          }
        ],
        "goto": {
          "type": "next",
          "id": "fs2_haunted"
        },
        "cast": [
          "ami",
          "insulin"
        ]
      },
      {
        "id": "fs2_ghost_ami",
        "title": "誰が置いた包み",
        "char": "ami",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "haunted",
        "time": "午後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "暗幕の端に、小さな紙袋が置かれていた。アミが通り過ぎようとした瞬間、袋が揺れた。"
          },
          {
            "who": "ami",
            "text": "仕掛け見えた。扉の向こうと紐で……。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "その袋、アミと同じ書き方で「一口分」ってあるよ。"
          },
          {
            "who": "narr",
            "text": "アミが足を止めた。自分の後ろから誰かの声がした時より、少し長く。"
          },
          {
            "who": "ami",
            "text": "それは聞いてない。……外に出たら、ほんとの一口の方、分けよう。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs2_crisis",
          "effects": {
            "ami": 5
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "fs2_sun_ami",
        "title": "片づけない小皿",
        "char": "ami",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "roof",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "屋上から窓越しに、喫茶の空になった作業台が見えた。アミの前には小皿が一枚、まだ伏せてない。"
          },
          {
            "who": "me",
            "text": "あれだけ置いて帰るの？"
          },
          {
            "who": "ami",
            "text": "うん。片づけるには早い皿。あとでもう一人座れるなら、一人で食べて先に帰りたくない。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "誰の分か聞いていい？"
          },
          {
            "who": "ami",
            "text": "いま聞いてくれた人の分。あとは、晩ご飯のあとでも一緒に食べるかだけ。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "ev_afterparty",
          "effects": {
            "ami": 3
          }
        },
        "cast": [
          "ami"
        ]
      },
      {
        "id": "fs2_crisis_ami",
        "title": "混ざった札の行き先",
        "char": "ami",
        "v5Script": true,
        "day": "crisis",
        "date": "6月21日(日)",
        "place": "cookroom",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "懐中時計が止まると、同じ札が家庭科室の台と澄のトレーに次々届いた。アミは作業を止め、未処理の束を手元に置く。"
          },
          {
            "who": "ami",
            "text": "でんぷんの束まで廊下に回った。こっちの台を急がせても、吸収できる状態になるまでは次に渡せないよ。",
            "expr": "neutral"
          }
        ],
        "choices": [
          {
            "prompt": "長い束が届いたら？",
            "kind": "care",
            "options": [
              {
                "response": [
                  {
                    "who": "ami",
                    "text": "うん。口と小腸で始めた仕事の、続きがある。順番に送ろう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 1,
                  "u": 2
                },
                "label": "消化の台で分け、次の酵素が働く所へ送る"
              },
              {
                "response": [
                  {
                    "who": "insulin",
                    "text": "このままでは私の出番に早いんです。吸収される前の台へ返します。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "u": 1
                },
                "label": "そのまま澄に渡す"
              }
            ]
          },
          {
            "prompt": "血糖の調節が始まるのは？",
            "kind": "care",
            "options": [
              {
                "response": [
                  {
                    "who": "insulin",
                    "text": "そう。入ってきたあとの血糖を見て、必要な合図かどうか確かめましょう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 1,
                  "u": 2
                },
                "label": "糖が吸収され、血液に入ってから"
              },
              {
                "response": [
                  {
                    "who": "glucagon",
                    "text": "同じ札じゃ区別できない。消化の仕事と、血糖の調節は別に確認しよう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "u": 1
                },
                "label": "アミが切り始めたのと同時に、同じ札で調節する"
              }
            ],
            "pre": [
              {
                "who": "narr",
                "text": "仕上がった糖が小腸から吸収された、と連絡が来た。澄と蓄は、今度は別の札を待っていた。"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "hypothalamus",
            "text": "台と廊下。それぞれで今起きていることが分かった。次の知らせは分けて返そう。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "手を速く動かすのは得意。でも今は、ちゃんと次に渡せた方がうれしい。",
            "expr": "neutral"
          }
        ],
        "goto": {
          "type": "next",
          "id": "fs2_resume"
        },
        "cast": [
          "ami",
          "hypothalamus",
          "insulin",
          "glucagon"
        ]
      },
      {
        "id": "end_ami",
        "title": "最後の一皿",
        "char": "ami",
        "v5Script": true,
        "day": "end",
        "date": "6月21日(日)",
        "place": "ginkgo",
        "time": "夜",
        "trans": "white",
        "bgm": "ending",
        "lines": [
          {
            "who": "narr",
            "text": "下駄箱には、イチョウの木と小皿の絵を描いた紙が入っていた。木の下へ行くと、アミが包みを両手で持って待っていた。"
          },
          {
            "who": "ami",
            "text": "今日の最後の一皿。試作じゃないよ。もう、きみと一緒に食べる分にしてきた。",
            "expr": "neutral",
            "act": "v5-confess"
          },
          {
            "who": "ami",
            "text": "淡い端、取っといた。前に食べたいって言ってたやつ。",
            "v5Memory": [
              "ami_toast",
              "light"
            ],
            "expr": "neutral",
            "act": "v5-confess"
          },
          {
            "who": "ami",
            "text": "濃い端、取っといた。前に食べたいって言ってたやつ。",
            "v5Memory": [
              "ami_toast",
              "dark"
            ],
            "expr": "neutral",
            "act": "v5-confess"
          },
          {
            "who": "ami",
            "text": "どっちの端がいいかは、中を開けてから聞くね。",
            "v5Memory": [
              "ami_toast",
              ""
            ],
            "expr": "neutral",
            "act": "v5-confess"
          },
          {
            "who": "me",
            "text": "先に、それだけのために呼んだのか聞いてもいい？"
          },
          {
            "who": "ami",
            "text": "好き。手が空いたら、じゃなくて、明日もきみと会う時間を空けたい。今日と同じように、座って食べたい。",
            "expr": "neutral",
            "act": "v5-confess"
          },
          {
            "who": "me",
            "text": "好きだよ。明日も会おう。皿が空になっても、まだ帰らなくていい？"
          },
          {
            "who": "ami",
            "text": "うん。……半分こにして、一緒に最後まで食べよ。",
            "expr": "neutral",
            "act": "v5-accepted"
          },
          {
            "who": "narr",
            "text": "アミが笑い、それから二人は腰を下ろした。箱の残りは、次に会う日のために取っておくことにした。",
            "v5Cast": []
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "if",
          "cond": [
            [
              "rvok",
              ">=",
              1
            ]
          ],
          "then": "ep_rv_ami",
          "else": "ep_wake"
        },
        "cast": [
          "ami"
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
            "text": "アミが校門の外で、紙袋を耳のそばに持ち上げていた。"
          }
        ],
        [
          {
            "who": "narr",
            "text": "アミは校門の柱で目を閉じ、足音が近づくまで寄りかかっていた。"
          }
        ],
        [
          {
            "who": "narr",
            "text": "門の角で、アミがパン袋の端を丁寧に折り直していた。"
          }
        ],
        [
          {
            "who": "narr",
            "text": "アミは空の箱を二つ重ねて、片手で持てるか試していた。"
          }
        ],
        [
          {
            "who": "narr",
            "text": "アミが門の先の道を見回した。空いている方へ行こうとして、立ち止まった。"
          }
        ]
      ],
      "refuse0": [
        [
          {
            "who": "ami",
            "text": "今日は購買に返す箱がある。一緒に帰るならまた今度。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "ごめん。仕事のあとだと、帰るまで何も話せない気がする。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "二人で？　……いまはまだ、座って一息つく方を選びたい。",
            "expr": "neutral"
          }
        ]
      ],
      "refuse1": [
        [
          {
            "who": "ami",
            "text": "誘ってくれるの、うれしいけど。先に澄に袋を返してからでいい？",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "今日は歩く道が違うんだ。次は、先にそっちに聞いておく。",
            "expr": "neutral"
          }
        ]
      ],
      "ok2": [
        [
          {
            "who": "ami",
            "text": "うん。角の手前までなら、パンの匂いがする道を通ろ。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "一緒に帰る。急ぐ用事があるなら、先に教えて。",
            "expr": "neutral"
          }
        ]
      ],
      "ok3": [
        [
          {
            "who": "ami",
            "text": "今日は待ってた。袋ひとつだから、きみと歩く方の手が空いてる。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "いいよ。二人で帰る日は、駅の時計が進むのちょっと早い。",
            "expr": "neutral"
          }
        ]
      ],
      "invite4": [
        [
          {
            "who": "ami",
            "text": "{call}、今からなら一緒に歩ける？　話したい用事が一つできた。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "今日、角で終わりにしたくない。遠い方の道、一緒に通ってくれる？",
            "expr": "neutral"
          }
        ]
      ],
      "like": [
        [
          {
            "who": "ami",
            "text": "おやつがあると思うと、帰り道に寄りたいところが増える。食べ終わってから決めよ。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "先に切ってあると、二人いるときにちゃんと食べられる。何の味だった？",
            "expr": "neutral"
          }
        ]
      ],
      "dislike": [
        [
          {
            "who": "ami",
            "text": "朝を抜く話だと、蓄が倉庫の鍵を探し始めそう。別の手抜きを聞きたいな。",
            "expr": "neutral"
          }
        ]
      ],
      "neutral": [
        [
          {
            "who": "ami",
            "text": "その手があったか。覚えてたら今度、一回やってみる。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "へえ。誰も同じことしてないなら、困ったことだけ教えて。",
            "expr": "neutral"
          }
        ]
      ],
      "stat1": [
        [
          {
            "who": "ami",
            "text": "混ぜる音が変わった。もう一回、同じ速さで見せて。",
            "expr": "neutral"
          }
        ]
      ],
      "stat2": [
        [
          {
            "who": "ami",
            "text": "きみの分だけ、冷めても味がぼやけない。包むところまで覚えたね。",
            "expr": "neutral"
          }
        ]
      ],
      "stat3": [
        [
          {
            "who": "ami",
            "text": "仕上げ、任せたい。そのあと座って、自分たちの分まで食べる時間取ろう。",
            "expr": "neutral"
          }
        ]
      ],
      "date_refuse": [
        [
          {
            "who": "ami",
            "text": "休みの日に二人？　今日はまだすぐ返事できない。また誘って。",
            "expr": "neutral"
          }
        ]
      ],
      "date_like": [
        [
          {
            "who": "ami",
            "text": "{spot}で最後までいたの、久しぶり。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "次は、残り時間から考えずに来よう。",
            "expr": "neutral"
          }
        ]
      ],
      "date_ok": [
        [
          {
            "who": "ami",
            "text": "{spot}、帰ってからも何を最初に見たか思い出せそう。",
            "expr": "neutral"
          }
        ]
      ],
      "date_bad": [
        [
          {
            "who": "ami",
            "text": "{spot}、浮きが気になって話が途中になっちゃったね。帰り道で続きを聞いていい？",
            "expr": "neutral"
          }
        ]
      ],
      "warn": [
        [
          {
            "who": "redcell",
            "text": "アミが仕込みを一人で抱えてる。最近、座って食べてるところを見てないな。",
            "expr": "neutral"
          }
        ]
      ],
      "bomb": [
        [
          {
            "who": "narr",
            "text": "注文を終えた皿まで調理台に戻り、作り直しの列ができた。"
          },
          {
            "who": "ami",
            "text": "今日は誰にも聞かずに決めた。……手を止める方が難しかった。",
            "expr": "neutral"
          }
        ]
      ],
      "fix": [
        [
          {
            "who": "ami",
            "text": "来てくれた。皿を二つ、机の外に出すところまで一緒にやって。",
            "expr": "neutral"
          }
        ]
      ],
      "nf": [
        [
          {
            "who": "ami",
            "text": "話せる時間まで味見に使ってた。次に会うときは、きみといる方を先に決める。",
            "expr": "neutral"
          }
        ]
      ],
      "sched0": [
        [
          {
            "who": "ami",
            "text": "味見なら、冷めた方から。勝手に足さないでよ。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "うん、起きてる。手元を見るだけなら、そっちからどうぞ。",
            "expr": "neutral"
          }
        ]
      ],
      "sched1": [
        [
          {
            "who": "ami",
            "text": "そこに椅子ある。終わるまで立ってなくていい。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "一枚残ったよ。どっちの角から食べたか、あとで聞く。",
            "expr": "neutral"
          }
        ]
      ],
      "sched2": [
        [
          {
            "who": "ami",
            "text": "きみの分、作り置きしなかった。できたてがいいか聞いてからにしたくて。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "あと一つで火を止める。手が空くまで、隣にいる？",
            "expr": "neutral"
          }
        ]
      ],
      "pass": [
        [
          {
            "who": "ami",
            "text": "あ。袋、今開けるとこだった。急ぐなら、放課後でも。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "廊下の窓が開いてた。髪、さっきよりちゃんと見える？",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "紙袋落ちてた。きみのじゃなければ、購買に聞いてくる。",
            "expr": "neutral"
          }
        ]
      ],
      "info1": [
        [
          {
            "who": "redcell",
            "text": "アミは月曜、水曜、金曜に家庭科室。月曜だけ、購買へ返却の箱を届けてから行くよ。",
            "expr": "neutral"
          }
        ]
      ],
      "info2": [
        [
          {
            "who": "redcell",
            "text": "おやつや焼き目の話が好き。朝を抜いて急ぐ話には、あんまり乗らないみたい。",
            "expr": "neutral"
          }
        ]
      ],
      "info3": [
        [
          {
            "who": "redcell",
            "text": "アミが任せやすいのは、料理を手伝えて、調理の理由を理科で考えられて、人の食べる速さも見てくれる人かな。",
            "expr": "neutral"
          }
        ]
      ],
      "info4": [
        [
          {
            "who": "redcell",
            "text": "ケーキ屋と遊園地はよく行くらしい。釣りは浮きをいつ引くのか気になって、話に集中できないんだって。",
            "expr": "neutral"
          }
        ]
      ],
      "textbook": [
        [
          {
            "who": "narr",
            "text": "【教科書】アミラーゼはでんぷんの消化を助ける酵素。唾液に含まれるものは口で、すい液に含まれるものは小腸で働く。"
          },
          {
            "who": "narr",
            "text": "分解で生じた糖は、小腸にある別の酵素でさらに分解されてから吸収される。インスリンとグルカゴンは血糖の調節に関わるホルモンで、でんぷんを直接分解する働きとは役目が異なる。"
          }
        ]
      ],
      "spot_cake": [
        [
          {
            "who": "ami",
            "text": "最初は香りだけでも分かる。きみの一口目、まだ目を閉じててもいいよ。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_pier": [
        [
          {
            "who": "ami",
            "text": "浮きが沈んだら教えて。先に、二人で座ってから海……湖を見よ。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_park": [
        [
          {
            "who": "ami",
            "text": "先にベンチを見つけた。食べ終わるまで、行き先は二つ考えておこう。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_rink": [
        [
          {
            "who": "ami",
            "text": "ここだと手が冷えて、袋をうまく結べない。滑る前に、二つとも預けていい？",
            "expr": "neutral"
          }
        ]
      ],
      "spot_library": [
        [
          {
            "who": "ami",
            "text": "料理の本の写真と作り方、最初にどっち見る？　こっちは、まず最後の一枚。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_beach": [
        [
          {
            "who": "ami",
            "text": "屋台の品はふたを閉めてから運ぼ。砂が来る前に、食べる場所を決めたい。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_aquarium": [
        [
          {
            "who": "ami",
            "text": "水の色が、お皿の青と全然違う。座ると目の高さに魚が来るんだな。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_firefly": [
        [
          {
            "who": "ami",
            "text": "光ってた方、すぐ見失った。もう一度出るまで、ここで待つ。",
            "expr": "neutral"
          }
        ]
      ],
      "repeat": [
        [
          {
            "who": "ami",
            "text": "前とは違う方を選ぶ？　同じもの好きか、もう一度確かめるのもいいけど。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "同じ場所だと、きみの気に入り方が少しずつ分かる。今日はどこから？",
            "expr": "neutral"
          }
        ]
      ],
      "phone_call": [
        [
          {
            "who": "ami",
            "text": "はい。寝てたと思った？　道具を洗い終わったとこ。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "うん。昨日の続きなら、最後に何て言ったか覚えてる。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "ami",
            "text": "次の味の相談？　別の話でも、きみの声なら聞きたい。",
            "expr": "neutral"
          }
        ]
      ],
      "dream_after_xmas": [
        [
          {
            "who": "ami",
            "text": "布巾で二人の膝を覆う夢を見た。起きてから洗濯物を、いつもより丁寧に畳んだ。",
            "expr": "neutral"
          }
        ]
      ],
      "dream_after_val": [
        [
          {
            "who": "ami",
            "text": "夢の皿、左は甘くなかったよ。きみの答えは、まだ聞いてない。",
            "expr": "neutral"
          }
        ]
      ],
      "ident_hint": [
        [
          {
            "who": "narr",
            "text": "口と小腸。長いでんぷんの束。澄と蓄の札は、吸収の先にあった。"
          },
          {
            "who": "ami",
            "text": "切る仕事なら、ほら。この最初の札。",
            "expr": "neutral"
          }
        ]
      ],
      "ident_ok": [
        [
          {
            "who": "ami",
            "text": "アミラーゼ。うん、下ごしらえの途中まで。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "どこまでやるか、きみが分かってくれたの、結構うれしい。",
            "expr": "neutral"
          }
        ]
      ],
      "ident_ng": [
        [
          {
            "who": "ami",
            "text": "札を立てる場所が違うかも。",
            "expr": "neutral"
          },
          {
            "who": "ami",
            "text": "血に入る前の食べ物を、台ごとに追ってみて。",
            "expr": "neutral"
          }
        ]
      ]
    },
    "clues": [
      "でんぷんの長い束を、短い束に分ける。",
      "口で始めた下ごしらえが、小腸でも続く。",
      "アミは吸収前の台、澄と蓄は糖が吸収された後の持ち場。"
    ]
  },
  "yor": {
    "scenes": [
      {
        "id": "p_yor_1",
        "title": "裏返しの腕章",
        "char": "yor",
        "v5Script": true,
        "day": "personal",
        "date": "月曜の放課後",
        "place": "keep",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "救護の先輩が名前を書こうとして、腕章の白い裏地をのぞいた。文字のある面は、袖に押し当てられている。"
          },
          {
            "who": "yori",
            "text": "この前、昇降口で会ったね。白守先輩でも、より姉さんでも。……まず字の方を向けないと、どちらでも呼べないか。",
            "fm": {
              "text": {
                "v": "この前、昇降口で会ったね。白守先輩でも、より兄さんでも。……まず字の方を向けないと、どちらでも呼べないか。",
                "on": "t"
              }
            },
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "名字ならすぐ覚えます。腕章は、どうしましょう？"
          },
          {
            "who": "yori",
            "text": "……分かってからも、しばらくこの向きのまま話してしまったね。",
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
                    "who": "yori",
                    "text": "助かった。次に同じことをしたら、声をかけて。忘れないうちに、すぐ笑うから。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 3
                },
                "label": "袖を指して、自分で直せるように教える"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "こうして見ると一目で分かるね。あなたが来る前にも、一度つけ直したのに。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 1
                },
                "label": "鏡を渡して、一緒に向きを確かめる"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "yori",
            "text": "月曜は保健室、水曜は屋上、金曜はグラウンド。用のある日が分かるなら、先に聞いておくよ。",
            "expr": "neutral"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "yor": 4
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "p_yor_2",
        "title": "保健室からの連絡",
        "char": "yor",
        "v5Script": true,
        "day": "personal",
        "date": "放課後",
        "place": "infirmary",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "保健委員会の机に、布で作った大きな袋が置かれた。頼は模型の異物を袋へ入れ、その札の模様を別の紙に写す。"
          },
          {
            "who": "cortisol",
            "text": "拾った物はここで片づける。先生に伝えるのは、模様がどんなものだったか。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "うん。片づけた後で、別の係が同じものを見分けられるようにする。紙はあなたが持っていってくれる？",
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
                    "who": "yori",
                    "text": "そう。名前をまだ知らなくても、特徴は見せられる。話す方は任せてもいい？",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 2,
                  "u": 2
                },
                "label": "目印を残してから、次の係へ渡す"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "いいね。形が似たものが隣にあったから、そこを確かめてから連絡しよう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "u": 2
                },
                "label": "先に、何を取り込んで片づけたか確かめる"
              }
            ]
          }
        ],
        "clues": [
          {
            "char": "yor",
            "text": "異物を大きな袋のようなものへ取り込み、分解して片づける。"
          },
          {
            "char": "yor",
            "text": "取り込んだ物の一部を目印として、別の係へ見せる。"
          }
        ],
        "after": [
          {
            "who": "narr",
            "text": "頼は紙を預け、一仕事済んだような顔で袋を畳んだ。手に持っていた鉛筆が見当たらず、畳んだ布をもう一度広げた。"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "yor": 5
          }
        },
        "cast": [
          "cortisol",
          "yori"
        ]
      },
      {
        "id": "p_yor_3",
        "title": "来なかった放課後",
        "char": "yor",
        "v5Script": true,
        "day": "personal",
        "date": "放課後",
        "place": "infirmary",
        "time": "放課後",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "保健室の椅子が机の下にきちんと戻されている。受け付けの札をひっくり返すと、頼は棚の鞄を持ち直し、廊下へ出た。"
          },
          {
            "who": "yori",
            "text": "久しぶり。前にちょっと具合が悪かったって先生から聞いた。その後はどう？",
            "expr": "neutral",
            "act": "v5-pivotal"
          },
          {
            "who": "me",
            "text": "もう大丈夫。ここ何日かは違う用事で、この廊下を通らなかったんです。"
          },
          {
            "who": "yori",
            "text": "大丈夫って、本人から聞けた。席が空いてるから、元気だと決めてしまいそうだった。",
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
                    "who": "yori",
                    "text": "用を聞き終わったつもりだった。……今からなら、少し一緒にいられる？",
                    "expr": "neutral",
                    "act": "v5-pivotal"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4,
                  "u": 2
                },
                "label": "今日は頼先輩に会いに来ました"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "それを聞かれたのは初めて。予定を一つ外して、今日は寄り道して帰るつもり。",
                    "expr": "neutral",
                    "act": "v5-pivotal"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2,
                  "u": 2
                },
                "label": "先輩の方は、ちゃんと休めましたか"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "narr",
            "text": "頼は鞄のひもを直した。そのあとで、寄り道の場所は一人で決めたと笑った。"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "yor": 6
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "p_yor_4",
        "title": "鞄を置いた放課後",
        "char": "yor",
        "v5Script": true,
        "day": "personal",
        "date": "放課後",
        "place": "keep",
        "time": "夕方",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "窓から白い花が見える。頼は鞄を保健室に預け、スケッチ帳だけを持っていた。"
          },
          {
            "who": "yori",
            "text": "今日は手当ての人を捜しに来たんじゃないよ。絵を見てくれる人を誘いに来た。",
            "expr": "neutral",
            "act": "v5-trust"
          },
          {
            "who": "me",
            "text": "いつもと違う道具だけだと、少し軽く見えますね。"
          },
          {
            "who": "yori",
            "text": "そう？　見せる方は重たい気がする。描いた後、誰かの感想を聞くのは慣れてないから。",
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
                    "who": "yori",
                    "text": "花の影が動くまで描いてた。帰りの鐘を聞いたのは、半分色を塗った時。",
                    "expr": "neutral",
                    "act": "v5-trust"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 5,
                  "u": 1
                },
                "label": "描いた日の話から、聞かせてください"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "角の白いところ。そこだけ塗らずに残せた。呼ばれてなければ、埋めてたかもしれない。",
                    "expr": "neutral",
                    "act": "v5-trust"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 3,
                  "u": 1
                },
                "label": "先輩が一番気に入ったところを見たい"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "yori",
            "text": "次に描く時も、見に来る？　用事として頼むより、誘う方がうれしいかも。",
            "expr": "neutral",
            "act": "v5-trust"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "yor": 8,
            "relax_yor": 1
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "kz_yor_1",
        "title": "救急箱の間違い探し",
        "char": "yor",
        "v5Script": true,
        "day": "bond",
        "date": "keep",
        "place": "infirmary",
        "time": "昼休み",
        "bgm": "morning",
        "lines": [
          {
            "who": "narr",
            "text": "備と頼が備品を点検している。きれいに並んだ箱の一番端に、削りたての青い鉛筆があった。"
          },
          {
            "who": "cortisol",
            "text": "用具が一つ多い。リストの最後が、たぶん違う。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "鉛筆は私の。ごめん。並べているうちに、同じ色の袋に入れそうになった。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "救急箱に青と書いてあっても、青いものを全部入れる欄じゃないんですね。"
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
                    "who": "yori",
                    "text": "水槽の奥の暗いところ。黒で塗ったら平らになったから、青を取っておいた。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4
                },
                "label": "青い鉛筆で、後で何を描くのか聞く"
              },
              {
                "response": [
                  {
                    "who": "cortisol",
                    "text": "色が同じなら、字で分けよう。頼先輩が一人の日でも分かるようにね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2
                },
                "label": "備品と私物を入れる袋に、目印をつける"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "yori",
            "text": "次に鉛筆を探した時は、ここより先に絵の方を見てみる。",
            "expr": "neutral"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY"
        },
        "cast": [
          "cortisol",
          "yori"
        ]
      },
      {
        "id": "kz_yor_2",
        "title": "雨の窓と水彩",
        "char": "yor",
        "v5Script": true,
        "day": "bond",
        "date": "keep",
        "place": "shoebox",
        "time": "放課後",
        "bgm": "morning",
        "lines": [
          {
            "who": "narr",
            "text": "昇降口の窓に雨があたり、外の花壇がぼやける。頼が鞄から出したのは、救急用品より小さい水彩箱だった。"
          },
          {
            "who": "me",
            "text": "いつも一緒に持ってるんですか。"
          },
          {
            "who": "yori",
            "text": "花を描き始めて、途中で呼ばれた日があったの。忙しい日はまた描けるように、二色だけ入れていた。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "用事が続いても、途中で終わりにしなくてよかったんですね。"
          },
          {
            "who": "yori",
            "text": "うん。片づけが済んでから、続きがある。きみなら、何を描いてほしい？",
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
                    "who": "yori",
                    "text": "じゃあ濡れたままの色を先に取るね。いつ止むか考えるより、いまの色を残したい。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 5,
                  "u": 1
                },
                "label": "雨が止むまでの、この窓を描いてほしい"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "手が二ついる絵だね。下書きしてみる。うまくいかなかったら、またきみに見てもらうよ。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 3,
                  "u": 1
                },
                "label": "鞄から絵の具を出した、今日の先輩を描いてほしい"
              }
            ]
          }
        ],
        "clues": [
          {
            "char": "yor",
            "text": "片づけた後も、傷の周りを修復するのを支える。"
          }
        ],
        "goto": {
          "type": "next",
          "id": "DAY"
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_01",
        "title": "鞄の底の青",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "茶色い鞄を開くと、箱のふたから青い鉛筆が一本転がった。頼が受け止めようとして、肩にかけたひもを落とした。"
          },
          {
            "who": "me",
            "text": "いつも同じところに入れてるんですか。"
          },
          {
            "who": "yori",
            "text": "最初に入れたのは絆創膏と色鉛筆だった。鞄が大きいから、片方を入れたのを忘れることがあって。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "今日のは青ですね。"
          },
          {
            "who": "yori",
            "text": "うん。しまう前に色を伝えたから、次は一緒に探してもらえるかな。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_02",
        "title": "途中の刺繍",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "rainy",
        "lines": [
          {
            "who": "narr",
            "text": "白いハンカチの端に、青い葉が三枚。四枚目は、葉の縁だけが縫ってあった。"
          },
          {
            "who": "yori",
            "text": "途中で別の用事が来たの。戻ってから縫うつもりで、使った色を一回見失った。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "途中でも、何の葉か分かります。"
          },
          {
            "who": "yori",
            "text": "そう？　完成するまで広げないつもりだった。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "どこまで終わっているか見たら、続きを楽しみにできます。"
          },
          {
            "who": "yori",
            "text": "じゃあ次は、最後の一枚がついた時に見せるよ。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_03",
        "title": "雨の日の開花日",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "花壇の横で、頼が二冊目の手帳を開いた。片方は救護の業務用。もう片方は、濡れた紙を乾かした跡がある。"
          },
          {
            "who": "yori",
            "text": "こっちは開花日。雨の日に見た花が一番きれいだったのに、色を言葉にしてなかった。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "次の花には「雨の色」って書けますね。"
          },
          {
            "who": "yori",
            "text": "雨だけでも色がいくつかある。今度きみの目には何色か、聞いてから書こうかな。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_04",
        "title": "描いてみたいもの",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "放課後の渡り廊下に、鉛筆の粉が小さく光っていた。頼は真っ白なページに、端だけ薄い線を引いた。"
          },
          {
            "who": "yori",
            "text": "人がいない時に描くと、動かなくて助かるね。でも、人がいた方が気になる形もある。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "今日は、どちらを描きたいですか。"
          },
          {
            "who": "yori",
            "text": "きみが見ていたもの。何を描いたら、思い出す？",
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
                    "who": "yori",
                    "text": "何を作ったかより、紙を押さえている方の手を描こうかな。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "v5_topic": [
                    "yor",
                    "mono"
                  ]
                },
                "label": "ものづくりの手元。薄い影も一緒に"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "人の多い場面だね。歓声の前、ひと呼吸あるところから見たい。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "v5_topic": [
                    "yor",
                    "sports"
                  ]
                },
                "label": "大きな声が上がった競技の直前"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "光が入った方から、一緒に探せるね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "v5_topic": [
                    "yor",
                    "mizu"
                  ]
                },
                "label": "花壇の前の、誰もいない通路"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_05",
        "title": "交代表の余分な丸",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "備の交代表に、一つだけ丸が二重に描かれていた。頼の交代の時刻で、備が先生の確認を待っている。"
          },
          {
            "who": "cortisol",
            "text": "先に先生へ伝えるんだと思ってた。頼先輩は、担当がそろってから渡す方？",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "今日は先に先生へ。そろってからさっと回せるように、知らせるのと交代するのを別に書くね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "同じ丸が二つだと、二回済んだように見えます。"
          },
          {
            "who": "yori",
            "text": "そう。今度はひとつ、四角にしておこう。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            40
          ]
        ],
        "cast": [
          "cortisol",
          "yori"
        ]
      },
      {
        "id": "cv_yor_06",
        "title": "包帯より先に",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "crisis",
        "lines": [
          {
            "who": "narr",
            "text": "頼が救護室の扉を開けかけて止まり、先にこちらの顔を見た。鞄の留め具には触れない。"
          },
          {
            "who": "yori",
            "text": "前に道具を出す方を急いで、何をしてほしいか聞くのが後になったの。あれから質問を一つ先に変えた。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "今日は、何を聞こうとしたんですか。"
          },
          {
            "who": "yori",
            "text": "呼んでくれたのは話すため？　先生に用があるなら呼ぶけど、一緒に帰りたいだけなら、私に言っていいよ。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            30
          ]
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_07",
        "title": "目印を写す",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "保健委員会の壁に、拾った物の札を写した用紙が貼ってある。頼が、似た図柄に補助線を一本足した。"
          },
          {
            "who": "yori",
            "text": "取り込んで片づけたあと、目印の一部を別の係に見せる。話を聞く側が、今度は見分けられるようにね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "見せる前に持っていた袋は、同じ係に渡しますか。"
          },
          {
            "who": "yori",
            "text": "袋は持って戻る。次へ見せるのは、何だったか分かる手がかり。そこまでを見てほしかった。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [
          {
            "char": "yor",
            "text": "取り込んだ物の一部を目印として、別の係へ見せる。"
          }
        ],
        "need": [
          [
            "f",
            ">=",
            40
          ]
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_08",
        "title": "歩く速さ",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "夕方の渡り廊下で、頼が先に階段を下りかけ、二段目で待った。地面は乾いて、急ぐ用事もない。"
          },
          {
            "who": "yori",
            "text": "普段は早い方？　今日は時間があるから、きみと帰る速さを聞きたい。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先に聞いてくれると、途中で置いていかれる心配がなくなる。"
          },
          {
            "who": "yori",
            "text": "うん。歩き出してからでも違うと思ったら言ってね。",
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
                    "who": "yori",
                    "text": "じゃあ、角が一つ遠くても気にならない速さで。次も覚えておくね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 3,
                  "v5_memory": [
                    "yor_pace",
                    "slow"
                  ]
                },
                "label": "ゆっくり。話をしながら歩きたい"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "そうしよう。会話が途切れたら、先に歩くよりその場で待つから。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 3,
                  "v5_memory": [
                    "yor_pace",
                    "normal"
                  ]
                },
                "label": "いつもどおり。無理に歩幅を合わせなくていい"
              }
            ]
          }
        ],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            40
          ]
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_09",
        "title": "袋に残るもの",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "パンフレットの模型で、頼が小さな粒を大きな袋へ入れた。袋の外には、「目印」と書かれた短い紙が見えている。"
          },
          {
            "who": "yori",
            "text": "マクロファージは異物などを取り込み、分解する。取り込んだ物の一部を目印として示したり、周りの細胞に知らせたりもする。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "片づけたら話は終わり、だと思ってました。"
          },
          {
            "who": "yori",
            "text": "知らせると、別の細胞も働ける。机の上を空にしただけでは、それは伝わらないね。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "ident",
            ">=",
            1
          ]
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_10",
        "title": "片づけの次",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "花壇に引いた縄が外されていた。頼は端の土を手でならし、まだ根が出ていない場所の札を残した。"
          },
          {
            "who": "yori",
            "text": "傷ができた後は、異物を片づけるだけじゃ終わらない。炎症が収まっていく段階で、修復を支える働きもある。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "異物が片づいたところで、見に来る人が変わるんですね。"
          },
          {
            "who": "yori",
            "text": "そう。話をつなぐ人は要る。済んだことと、これから直ることを一緒にしないようにね。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "ident",
            ">=",
            1
          ]
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_11",
        "title": "裏のままで笑う",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "頼が入校証を首にかけた。印のある方が内側で、廊下に出る前に自分で気づいて笑った。"
          },
          {
            "who": "yori",
            "text": "前なら気づかれないうちに直したかった。今日は声を出してから、ちゃんと直せた。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "笑った方が、あとで話せますね。"
          },
          {
            "who": "yori",
            "text": "うん。きみの前なら、急いでうまくやったふりをしなくていい。今、裏だったって聞かれたら見せるよ。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "ident",
            ">=",
            1
          ]
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "cv_yor_12",
        "title": "持って帰る一枚",
        "char": "yor",
        "v5Script": true,
        "day": "talk",
        "place": "keep",
        "time": "keep",
        "bgm": "feedback",
        "lines": [
          {
            "who": "narr",
            "text": "スケッチ帳の間に、けば立った紙が三枚挟まっていた。花、空のベンチ、人が去ったあとに残る影。"
          },
          {
            "who": "yori",
            "text": "一枚選んで持って帰る？　飾るところまで考えなくていいよ。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先輩は手元に残す絵がなくても大丈夫ですか。"
          },
          {
            "who": "yori",
            "text": "二枚あれば続きは描ける。その一枚は、きみが選んだ理由まで覚えておけるから。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "じゃあ選んで、理由は今言います。"
          },
          {
            "who": "yori",
            "text": "うん。聞いてから、端に日付を書くね。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "ident",
            ">=",
            1
          ]
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "dt_yor_1",
        "title": "図書館の植物図鑑",
        "char": "yor",
        "v5Script": true,
        "day": "date",
        "date": "休日",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "窓の光が図鑑の端に差す。頼は葉の絵を指でたどり、名前の欄を手で隠した。"
          },
          {
            "who": "yori",
            "text": "似た葉が二つあって、ずっと見分けがつかない。どこが先に違って見える？",
            "expr": "neutral",
            "act": "v5-date"
          },
          {
            "who": "me",
            "text": "この枝の方、丸い影が一つあります。"
          },
          {
            "who": "yori",
            "text": "本当だ。名前を隠していたら、見るほうが先になるね。もう一つ見つけるまで、少し付き合って。",
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
                    "who": "yori",
                    "text": "うん。今はページを押さえる理由があるから、隣の椅子をずらしてもいい？",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 5,
                  "u": 1
                },
                "label": "同じページを並んで見て、ひとつずつ探す"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "いいね。見つからなかったら、今日の絵の枝がどう曲がっていたかだけ覚えて帰る。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 4
                },
                "label": "図鑑を閉じて、外に似た葉があるか探す"
              }
            ]
          }
        ],
        "clues": [],
        "dateSpot": "library",
        "after": [
          {
            "who": "narr",
            "text": "図鑑の間から、薄いスケッチが一枚落ちた。名前の分からない葉にだけ、小さく日付が入っていた。"
          }
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "dt_yor_2",
        "title": "水族館のベンチ",
        "char": "yor",
        "v5Script": true,
        "day": "date",
        "date": "休日",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "青い水槽が壁いっぱいに広がる。頼は座れる場所を見つけてから、絵を描くか迷うように鞄を開いた。"
          },
          {
            "who": "yori",
            "text": "面白い光だから描きたい。けど、描くと次に泳いでくるのを見落とすかもしれない。",
            "expr": "neutral",
            "act": "v5-date"
          },
          {
            "who": "me",
            "text": "今日はどっちをしててもいい時間ですね。"
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
                    "who": "yori",
                    "text": "深い方の青にする。残った色は、きみが先に思い出した方を教えて。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 5
                },
                "label": "青を一色だけ選び、あとは一緒に見る"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "うん。帰ったあとで、どっちが先に息を止めたかは絵にできそう。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 4
                },
                "label": "何も描かず、魚が一周するまで眺める"
              }
            ]
          }
        ],
        "clues": [],
        "dateSpot": "aquarium",
        "after": [
          {
            "who": "narr",
            "text": "頼は鉛筆を一本出し、横に置いたまま、最後まで手を伸ばさなかった。"
          }
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "dt_yor_3",
        "title": "いつもの道を選ぶ",
        "char": "yor",
        "v5Script": true,
        "day": "date",
        "date": "休日",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "帰り道が二つに分かれていた。頼は地図を開かず、ひとつ戻る方の道を眺める。"
          },
          {
            "who": "yori",
            "text": "今日は用事が済んでる。このまま帰るか、少し回って景色を見ていくか。どっちにする？",
            "expr": "neutral",
            "act": "v5-date"
          },
          {
            "who": "me",
            "text": "ここまでは歩く方が楽しかったです。先輩は、まだ何か見たいものがありますか。"
          },
          {
            "who": "yori",
            "text": "きみと一緒なら、同じ道を戻っても違うところに目が行くと思う。",
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
                    "who": "yori",
                    "text": "その代わり、きみが気づいた時は止まってね。急いで「分かった」と言わないから。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4,
                  "u": 1
                },
                "label": "遠回りして、先輩が気づいたものを聞きたい"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "いいね。早く着くための道なのに、今日はゆっくり覚えられそう。",
                    "expr": "neutral",
                    "act": "v5-date"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 3
                },
                "label": "いつもの道を、話が終わるまで一緒に"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "hp_yor_1",
        "title": "落とし物と置き忘れ",
        "char": "yor",
        "v5Script": true,
        "day": "happen",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "頼は落ちていた小さな手帳を拾い、先に案内所を見つけた。自分の鞄だけが、さっきのベンチに残っている。"
          },
          {
            "who": "me",
            "text": "戻りましょう。先輩の鞄、まだ椅子の上ですよ。"
          },
          {
            "who": "yori",
            "text": "あら。私の荷物も落とし物になりかけてたね。",
            "expr": "surprised"
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
                    "who": "yori",
                    "text": "助かる。戻る方を覚えてくれた人がいたから、持ち主を探す方に気を取られた。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4
                },
                "label": "一緒に戻って、二人で案内所へ行く"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "お願い。見つけたら手を振るね。用が済んでも、先に行かないから。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2
                },
                "label": "こちらが鞄を持ってくる。案内所で会う"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "hp_yor_2",
        "title": "いちばん前の列",
        "char": "yor",
        "v5Script": true,
        "day": "happen",
        "place": "keep",
        "time": "keep",
        "bgm": "rainy",
        "lines": [
          {
            "who": "narr",
            "text": "人が集まった先には展示があった。頼は人の間へ一歩入りかけ、後ろが見えなくなると足を戻した。"
          },
          {
            "who": "yori",
            "text": "声をかけたら前へ通れるかと思った。今日はそういう用事があって来たんじゃなかったね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "次の展示なら、よく見えるところが空いてます。"
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
                    "who": "yori",
                    "text": "いいよ。さっきの場所を忘れても、二人がまた見たければ探せるし。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4
                },
                "label": "向こうへ行って、ここが空いたら戻る"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "そうしよう。いちばん前より、きみの顔が見える位置に立つね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 1
                },
                "label": "並ぶなら最後尾で。座れたら少し休む"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "hp_yor_3",
        "title": "帰り風の下書き",
        "char": "yor",
        "v5Script": true,
        "day": "happen",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "風が起きて、頼の紙が鞄のふたから浮いた。主人公が角を押さえると、描きかけの横顔が明るいところに出た。"
          },
          {
            "who": "yori",
            "text": "まだ名前を書いてない。足音まで描ければ誰か分かると思ってたけど……見えた？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "見えました。見られたくなければ、そっと戻します。"
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
                    "who": "yori",
                    "text": "ありがとう。隠れたままで見せられるところが一つある。角の青だけ、今度見て。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4
                },
                "label": "頼が見せたくなった時まで待つ"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "耳の後ろ？　そこを消そうとして迷ってた。じゃあ今日は、残して帰ろう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2
                },
                "label": "見えてしまったので、好きな線を一つ伝える"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "tr_yor_1",
        "title": "棚からずれた札",
        "char": "yor",
        "v5Script": true,
        "day": "trouble",
        "date": "放課後",
        "place": "infirmary",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "棚の上で「片づけ済み」の札が一つずれていた。頼は並べ直す前に、展示用の異物模型を包む袋を探す。"
          },
          {
            "who": "yori",
            "text": "空に見えても、札と位置がずれると何が終わったか分からない。模型の異物を入れる袋と、備品は別で数えよう。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "頼は中身、私は札を見ます。二人で一段ずつなら混ざらないと思います。"
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
                    "who": "yori",
                    "text": "うん。片づけを見本で説明するなら、どの袋を使ったかも残せるね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 2,
                  "u": 2
                },
                "label": "取り込む袋と棚の備品を別々に調べる"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "そこなら誰が見ても分かる。先に終わったふりをせず、もう一回見よう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "u": 1
                },
                "label": "机を一つ空け、札を上から付け直す"
              }
            ]
          }
        ],
        "clues": [
          {
            "char": "yor",
            "text": "異物を大きな袋のようなものへ取り込み、分解して片づける。"
          }
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "tr_yor_2",
        "title": "戻った記録の空欄",
        "char": "yor",
        "v5Script": true,
        "day": "trouble",
        "date": "放課後",
        "place": "infirmary",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "「当日」の欄には丸があり、「その後」には何も書いてない。頼が鉛筆を持ち直し、誰を呼ぶか考える。"
          },
          {
            "who": "yori",
            "text": "片づいたあと、傷を直すのを助ける仕事も続く。その様子は、次に関わった人へ聞いてから書きたい。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "空欄を埋めるなら、見ていないことまで想像で書かない方がいいですね。"
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
                    "who": "yori",
                    "text": "うん。話せるぶんだけ、頼んでみる。聞かれたくないこともあるから。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 2,
                  "u": 2
                },
                "label": "本人に、差し支えない範囲でその後を聞く"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "助かる。先生に聞くところからでいい。見届ける仕事は一人で抱えなくて済むね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "u": 1
                },
                "label": "当番の先生へ、続きの確認が要ることだけ託す"
              }
            ]
          }
        ],
        "clues": [
          {
            "char": "yor",
            "text": "片づけた後も、傷の周りを修復するのを支える。"
          }
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "tw_yor_1",
        "title": "見えない腕章",
        "char": "yor",
        "v5Script": true,
        "day": "trio",
        "place": "gate",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "赤路が腕章を裏向きにつけ、救護係の真似をした。頼はしばらく黙って見てから、袖の端を指した。"
          },
          {
            "who": "yori",
            "text": "それ、字を見せたい方が内側。よく真似したね。",
            "expr": "neutral"
          },
          {
            "who": "redcell",
            "text": "そこまで見てたのか。先輩がやると、わざとかと思った。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先輩なら、直すまで手伝ってくれそうです。"
          },
          {
            "who": "yori",
            "text": "うん。赤路が困ってないなら、今日は自分で。三人そろって歩く時間も残したいから。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "yori",
          "redcell"
        ]
      },
      {
        "id": "tw_yor_2",
        "title": "角の案内人",
        "char": "yor",
        "v5Script": true,
        "day": "trio",
        "place": "gate",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "赤路が商店の看板を見つけたつもりで、反対側の路地に入りそうになった。頼は早足で追い、二人が戻ってから角を指す。"
          },
          {
            "who": "yori",
            "text": "目的地は向こう。でも、さっきの道も帰れる。きみはどちらを歩きたい？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "初めて見る方。道案内を頼んでもいいですか。"
          },
          {
            "who": "redcell",
            "text": "今日は迷う番が先輩じゃなかったな。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "地図を見る番と、話す番を分けたらいいね。次の角まで、話すのは赤路の番。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "yori",
          "redcell"
        ]
      },
      {
        "id": "tw_yor_3",
        "title": "画材店が空いている",
        "char": "yor",
        "v5Script": true,
        "day": "trio",
        "place": "gate",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "赤路が、窓際に並んだ絵筆ばかり見て足を止めた。頼の鞄には水彩箱を入れるくらいの隙間がある。"
          },
          {
            "who": "redcell",
            "text": "先輩、こういう店の前も見るんだ。救急の店にしか寄らないかと思ってた。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "絵の具の青を探してる。濃いのか淡いのか、今日はまだ決めてない。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "帰るまで持てる方を選びます？"
          },
          {
            "who": "yori",
            "text": "見るだけでもいい。話が長くなるなら、三人で入ってから決めようよ。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            10
          ]
        ],
        "cast": [
          "redcell",
          "yori"
        ]
      },
      {
        "id": "tw_yor_4",
        "title": "残りの道",
        "char": "yor",
        "v5Script": true,
        "day": "trio",
        "place": "gate",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "赤路が一番手前の角で手を振り、二人はその場に残った。頼は鞄を背中側に直し、急ぐ人の間を一度空けた。"
          },
          {
            "who": "yori",
            "text": "赤路の用事はここまで。きみの用事がもう済んでいたら、もう少し二人で歩かない？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "この続きなら、角まで一緒に行けます。"
          },
          {
            "who": "yori",
            "text": "うん。歩けると聞いてから誘うの、今までたいてい逆だった。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "先に右を見たのは頼だった。曲がるより先に、こちらが並ぶのを待った。"
          }
        ],
        "choices": [],
        "clues": [],
        "need": [
          [
            "f",
            ">=",
            20
          ]
        ],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "rv_yor_1",
        "title": "一人分の空き",
        "char": "yor",
        "v5Script": true,
        "day": "rival",
        "place": "keep",
        "time": "keep",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "頼は備から渡された交代表を折り直した。一枠だけ、自分のいつもの丸が外れている。"
          },
          {
            "who": "yori",
            "text": "備が、私の当番を一つ減らそうって。手が足りない日に、どうしてだろうって思った。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先輩が休む日も、引き継ぐ人が分かるようにしているのかもしれません。"
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
                    "who": "yori",
                    "text": "そうする。一人で納得して戻さずに、何が余るか二人で見よう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 2,
                  "rs": 1
                },
                "label": "減らした枠を、備がどう見ているか聞く"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "絵を描くか、誰かに会う。どちらも前からしたかった。今はその予定を作れるね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 1
                },
                "label": "空いた枠は何に使いたいか、頼に尋ねる"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "rv_yor_2",
        "title": "先に代わる人",
        "char": "yor",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "校門で備が交代表を持っていた。最終欄から延びる鉛筆の線は、始まる時刻にだけ丸がある。"
          },
          {
            "who": "cortisol",
            "text": "頼先輩、今日は交代ができる。けど、いつ来ていいか伝える人がいない。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "迎えに行こうと思ってました。言っていいことだけ先に聞かせてください。"
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
                    "who": "cortisol",
                    "text": "四時半。それでいいかは本人に。空けた枠は、書き足せる状態にしておく。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 1,
                  "rs": 1
                },
                "label": "備が交代できる時刻を確かめ、頼の返事を待つ"
              },
              {
                "response": [
                  {
                    "who": "cortisol",
                    "text": "うん。先輩がやりかけたことを隠さず聞ければ、交代の後も同じようにできる。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 1
                },
                "label": "頼の今の用事を聞いて、戻って報告する"
              }
            ]
          }
        ],
        "clues": [],
        "goto": {
          "type": "if",
          "cond": [
            [
              "pt",
              ">=",
              20
            ]
          ],
          "then": "rv_yor_2j",
          "else": "DAY"
        },
        "cast": [
          "cortisol"
        ]
      },
      {
        "id": "rv_yor_2j",
        "title": "伝言のない時間",
        "char": "yor",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "cortisol",
            "text": "次に門で会ったら、今日みたいな用件がなくても声かけて。予定が詰まってそうなら、こっちも急がない。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "備も、空いてる分は自分の予定を書けますよね。"
          },
          {
            "who": "cortisol",
            "text": "一欄くらいなら。使ったこと、後でちゃんと話すよ。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "備は交代表の端を折った。風にめくれないようにしてから、頼のいる方へ目を向けた。"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "cortisol"
        ]
      },
      {
        "id": "rv_yor_3",
        "title": "交代を言う時刻",
        "char": "yor",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "交代の時間を過ぎても、頼はテントにいた。備は先輩の袋を持ち、入口の外で一度止まった。"
          },
          {
            "who": "cortisol",
            "text": "代わる準備はできてる。途中の分を、先生に一緒に渡してほしい。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "あとで伝えようと思っていた。どこまでやったか、今なら全部言える。",
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
                    "who": "yori",
                    "text": "ありがとう。終わったことと、今から確認することを分けて話すね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 1,
                  "rs": 1
                },
                "label": "必要事項を三人で聞き、先生に引き継ぐ"
              },
              {
                "response": [
                  {
                    "who": "cortisol",
                    "text": "それで行こう。こちらが替われる時刻を一つ書く。今度は来る前に知らせるよ。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 1
                },
                "label": "今は頼も残り、交代時刻を改めて決める"
              }
            ]
          }
        ],
        "clues": [],
        "goto": {
          "type": "if",
          "cond": [
            [
              "rs",
              ">=",
              2
            ]
          ],
          "then": "rv_yor_3ok",
          "else": "rv_yor_3ng"
        },
        "cast": [
          "cortisol",
          "yori"
        ]
      },
      {
        "id": "rv_yor_3ok",
        "title": "鞄を預ける",
        "char": "yor",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "夜",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "先生が引き継ぎを受け、備が替わりの椅子に座った。頼は自分の鞄を、いつもと違う棚へ置く。"
          },
          {
            "who": "yori",
            "text": "交代、お願いね。帰り道だけは、きみと一緒に決めたい。",
            "expr": "neutral"
          },
          {
            "who": "cortisol",
            "text": "棚の右。今夜必要になるまで、取り違えないように置いておく。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先輩、手ぶらの方が歩きやすそうです。"
          },
          {
            "who": "yori",
            "text": "うん。中のものが一つも落ちないと思うと、角を曲がる時も気が楽ね。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "t": 4,
            "rvok": 1
          }
        },
        "cast": [
          "yori",
          "cortisol"
        ]
      },
      {
        "id": "rv_yor_3ng",
        "title": "次の引き継ぎ",
        "char": "yor",
        "v5Script": true,
        "day": "rival",
        "place": "gate",
        "time": "夜",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "連絡札の端に、頼が残ると書いた。備はその間の当番を別の人に頼んで戻る。"
          },
          {
            "who": "cortisol",
            "text": "同じ時刻で全部合わせるのは難しい。終わり次第、部屋の前で話そう。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "うん。続きを話す前に、私が済んだことを一つずつ伝える。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "待つ場所だけ、先に決めておきます。"
          },
          {
            "who": "narr",
            "text": "慌ただしい合図が一つ減った。頼は鞄を閉めずに、残った話を続けた。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "t": -2
          }
        },
        "cast": [
          "cortisol",
          "yori"
        ]
      },
      {
        "id": "ep_rv_yor",
        "title": "明日の持ち物",
        "char": "yor",
        "v5Script": true,
        "day": "end",
        "date": "6月21日(日)",
        "place": "ginkgo",
        "time": "夜",
        "trans": "white",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "中庭を出る前に備が来た。折り畳んだ交代表に、頼の名前が一つだけ少なくなっている。"
          },
          {
            "who": "cortisol",
            "text": "明日、先輩の枠は埋めた。何を持って出かけるか、二人で決めた？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "まだです。絵の道具も一緒に考えようって話していました。"
          },
          {
            "who": "cortisol",
            "text": "なら今日の夜、鞄を空ける時間くらいはありそうだね。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "頼は礼を言ってから、明日はこちらにも一つ頼みたいことがある、と備に声を返した。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "ep_wake"
        },
        "cast": [
          "cortisol"
        ]
      },
      {
        "id": "dream_xmas_yor",
        "title": "あたたかい廊下",
        "char": "yor",
        "v5Script": true,
        "day": "dream",
        "date": "？月？日",
        "place": "dream_snow",
        "time": "夢",
        "trans": "dream",
        "bgm": "dream",
        "lines": [
          {
            "who": "narr",
            "text": "窓の外だけが雪だった。廊下に入ると空気があたたかく、頼の紙に置いた影だけが濃い。"
          },
          {
            "who": "yori",
            "text": "青い鉛筆、忘れたみたい。持っているなら、雪のところだけ借りてもいい？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "塗りつぶすと、雪が青くなりませんか。"
          },
          {
            "who": "yori",
            "text": "ううん。残した白を見えるように、周りを少し描く。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "鉛筆を貸すと、頼は窓の隅を一つだけ塗った。返す前に、二人で白いところを長く眺めた。"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "dream_val_yor",
        "title": "小さな包みの絵",
        "char": "yor",
        "v5Script": true,
        "day": "dream",
        "date": "？月？日",
        "place": "dream_sweet",
        "time": "夢",
        "trans": "dream",
        "bgm": "dream",
        "lines": [
          {
            "who": "narr",
            "text": "机に薄い紙が一枚残っていた。包んだ跡があるのに、中には物の代わりに絵が描いてある。"
          },
          {
            "who": "yori",
            "text": "休憩で描いた。好きなものを聞いた時、最初に手で形を作ってたでしょう。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "覚えていたんですね。その形なら、説明より絵の方が早い。"
          },
          {
            "who": "yori",
            "text": "うん。手渡す時間は急がなくていいけど。次の休みにも、一枚描いて渡したい。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "紙を開いたまま持っていると、眠る前よりはっきりと、好きな形が思い出せた。"
          }
        ],
        "choices": [],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "lake_yor",
        "title": "戻った道具を数える",
        "char": "yor",
        "v5Script": true,
        "day": "w8d2b",
        "date": "6月4日(木)",
        "place": "shallows",
        "time": "午後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "浅瀬から戻った箱に、手に持っていた数より用具が一つ少なかった。頼は班員に声をかけ、濡れた紙を別にする。"
          },
          {
            "who": "yori",
            "text": "見つかった分から乾いた箱へ。誰が最後まで使っていたかを聞いてもらえる？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "岸で聞いてきます。なくした子を呼ぶより、最後に置いた場所を尋ねます。"
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
                    "who": "yori",
                    "text": "うん。用具も戻った人も、あとでどこまで確認したか分かるようにして。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 3,
                  "u": 2
                },
                "label": "持っていた人を岸から順に確かめる"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "それなら次の班が見つけても分かる。水に入り直す必要はないね。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2,
                  "u": 1
                },
                "label": "船員さんに伝え、残りは乾いた箱へ分ける"
              }
            ]
          }
        ],
        "clues": [],
        "cast": [
          "yori"
        ]
      },
      {
        "id": "lake_end_yor",
        "title": "波の色を聞く",
        "char": "yor",
        "v5Script": true,
        "day": "w8d2b",
        "date": "6月4日(木)",
        "place": "boat",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "帰りの船ですべての道具がそろった。頼は最後の箱を閉じ、時間を確かめる前に主人公の隣へ座る。"
          },
          {
            "who": "yori",
            "text": "水面は何色に見える？　道具の数はもう確かめたから、次はきみの目に見える方を聞きたい。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "銀色にも見えます。もう一度揺れたら、たぶん違う色。"
          },
          {
            "who": "yori",
            "text": "いいね。今日の記録には一色だけ書いて、もう一色は帰りに覚えておこう。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "t": 4
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "ev_park_yor",
        "title": "地図の花印",
        "char": "yor",
        "v5Script": true,
        "day": "w7d3",
        "date": "5月29日(金)",
        "place": "park",
        "time": "午前",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "地図の広場にだけ、花の絵が小さく描いてあった。頼が開園の時計を見て、広場へ向かう道を指す。"
          },
          {
            "who": "yori",
            "text": "奥に行く前に、ここを通ってみない？　花が絵と同じ色か、日陰からでも見えそう。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "地図の色だけ違っていたら？"
          },
          {
            "who": "yori",
            "text": "今日の色を見ておけばいいよ。",
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
                    "who": "yori",
                    "text": "ありがとう。花を見つけたら、どこに行くか決める前に座って眺めよう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 4,
                  "u": 1
                },
                "label": "広場で、先輩が見たい花を一緒に探す"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "あとで一つずつ、相手に選んだ理由を言おう。同じものでも、理由は違いそう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 3,
                  "t": 2
                },
                "label": "来た道に印を付けて、それぞれ好きな花を探す"
              }
            ]
          }
        ],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "ev_park_pm"
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "ev_buy_yor",
        "title": "袋が二つある理由",
        "char": "yor",
        "v5Script": true,
        "day": "w9d3",
        "date": "6月12日(金)",
        "place": "shopping",
        "time": "放課後",
        "bgm": "date",
        "lines": [
          {
            "who": "narr",
            "text": "救護用の札を買った袋から、水彩絵の具が一本出てきた。頼はレシートの山に手を伸ばしたあとで笑った。"
          },
          {
            "who": "yori",
            "text": "これは私用。買う時には袋を分けたのに、持った時に一緒にした。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "同じ色ですが、こっちは何を描く色ですか。"
          },
          {
            "who": "yori",
            "text": "夕方の空。まだ練習してるんだけど、今度見てもらえる？",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "風で飛びそうだから、レシートは半分に折って持っていて。次にどこへ寄るかは、二人で決めよう。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "yor": 6
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "ev_assign_yor",
        "title": "次の当番を待つ",
        "char": "yor",
        "v5Script": true,
        "day": "w10d1",
        "date": "6月15日(月)",
        "place": "infirmary",
        "time": "放課後",
        "bgm": "prep",
        "lines": [
          {
            "who": "narr",
            "text": "救護テントの配置図に、備品札の束と交代表が並んでいた。頼は二つを同じ印で止めたあと、紙の端に目をやる。"
          },
          {
            "who": "yori",
            "text": "これだと交代が済んだら、全部持って行く人が出るね。備品はここ、時刻の紙は引き継ぐ人へ。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "私が時刻を書くなら、備品を置く場所は先輩が決めますか。"
          },
          {
            "who": "yori",
            "text": "うん。何を見たいか、交代する人にもその場で聞こう。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "if",
          "cond": [
            [
              "kiku",
              ">=",
              40
            ],
            [
              "gaku",
              ">=",
              20
            ]
          ],
          "then": "ev_assign_yor_ok",
          "else": "ev_assign_yor_ng"
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "ev_assign_yor_ok",
        "title": "相談は一度で",
        "char": "yor",
        "v5Script": true,
        "day": "w10d1",
        "date": "6月15日(月)",
        "place": "infirmary",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "頼が用意した箱は時刻順に並び、その横に交代する人の名前が一つずつ置かれていた。"
          },
          {
            "who": "cortisol",
            "text": "これなら当日、今の係と次の係が同じ話を聞ける。残りは先生に確認するね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先輩は、用具の位置を説明したら担当が終わります。"
          },
          {
            "who": "yori",
            "text": "ありがとう。最後までいることより、次の人も同じように分かることが大事ね。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "頼は説明のあと、まだ時間があるところで、主人公に放課後の予定を聞いた。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "yor": 8,
            "kiku": 1
          }
        },
        "cast": [
          "cortisol",
          "yori"
        ]
      },
      {
        "id": "ev_assign_yor_ng",
        "title": "一枚多い腕章",
        "char": "yor",
        "v5Script": true,
        "day": "w10d1",
        "date": "6月15日(月)",
        "place": "infirmary",
        "time": "放課後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "腕章を並べ終えると、一枚だけ数字が違っていた。頼は裏の名前まで見て、向こうの紙を指さす。"
          },
          {
            "who": "yori",
            "text": "今朝の交代表を見ていた。新しい方では、その枠は一人少ない。どの先生に確かめたらいいかな。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先に、担当の先生へ聞きます。予備は箱に分けておきますね。"
          },
          {
            "who": "yori",
            "text": "お願い。全部をすぐそろえるより、次に迷わないように先に聞こう。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "yor": 2,
            "kiku": 1
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "ev_shed_yor",
        "title": "見つからない救護札",
        "char": "yor",
        "v5Script": true,
        "day": "w10d2",
        "date": "6月16日(火)",
        "place": "shed",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "鍵の音がした。頼は救護札を探して箱を三つ開け、自分の胸に目を下ろした。札は初めから腕章の脇に留まっていた。"
          },
          {
            "who": "yori",
            "text": "あら。探し物の方は終わったみたい。戸は、内側から開くか試した？",
            "expr": "surprised"
          },
          {
            "who": "me",
            "text": "鍵がかかっています。廊下が静かになったら先生を呼びましょう。"
          },
          {
            "who": "yori",
            "text": "うん。声を出す前に、一回深呼吸。急いで道具を探すより、二人の声なら届くね。",
            "expr": "neutral"
          },
          {
            "who": "hypothalamus",
            "text": "中かな？　今開けるよ。少し離れて待っていてね。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "頼が札を裏返して見せた。「もう、ここにあったことは覚えた」と書く真似をした。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "yor": 7
          }
        },
        "cast": [
          "yori",
          "hypothalamus"
        ]
      },
      {
        "id": "ev_night_yor",
        "title": "余白のテント",
        "char": "yor",
        "v5Script": true,
        "day": "w10d4",
        "date": "6月18日(木)",
        "place": "class",
        "time": "夜",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "当日の配置図はもう線で埋まっていた。頼は空いた余白に、小さな丸い椅子を一脚描いた。"
          },
          {
            "who": "yori",
            "text": "来た人の後ろに、付き添って待つ人もいる。もう一脚置けるといいね。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "余白のここに、私が影を描いても？"
          },
          {
            "who": "yori",
            "text": "うん。配置を確認する用紙が一枚増えるなら、こっちは絵にして持って帰りたい。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "片づけの時間まで、二人で椅子をあと一脚描いた。紙の下には、体育祭の日付だけ書いた。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "DAY",
          "effects": {
            "yor": 5
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "fs1_lunch_yor",
        "title": "腕章を外す昼",
        "char": "yor",
        "v5Script": true,
        "day": "fest1",
        "date": "6月20日(土)",
        "place": "field",
        "time": "昼休み",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "昼休みに、頼は腕章をたたんで弁当箱の隣に置いた。そこから見えるように字の方を上にした。"
          },
          {
            "who": "yori",
            "text": "今日の当番じゃない話を一つしたい。たとえば、昼の雲が何に見えるか。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "雲の端が、先輩のハンカチの葉に見えます。"
          },
          {
            "who": "yori",
            "text": "そういう答えが聞きたかった。次は、雲の方に名前をつけてみる？",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "救護の伝言が来ないうちに、二人で雲をもう一つ見つけた。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs1_relay",
          "effects": {
            "yor": 6
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "fs1_pair_yor",
        "title": "揃えるのが先",
        "char": "yor",
        "v5Script": true,
        "day": "fest1",
        "date": "6月20日(土)",
        "place": "field",
        "time": "午後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "二人の足を結ぶと、頼は体を横にずらした。近づきすぎて、こちらが驚けばすぐ戻れる位置で止まった。"
          },
          {
            "who": "yori",
            "text": "まず揃える。私が一歩目を言っていい？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "大丈夫です。聞こえたら同じ足を出します。"
          },
          {
            "who": "yori",
            "text": "じゃあ次は二人で数えよう。速く出るのは、声が揃ってからでいい。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "二人で白い線の手前に立った。最初の掛け声だけ頼の声がして、次は高さの違う声が重なった。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "MINIGAME:pair"
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "fs1_tent_yor",
        "title": "話せるまでここに",
        "char": "yor",
        "v5Script": true,
        "day": "fest1",
        "date": "6月20日(土)",
        "place": "field",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "片づけに向かう途中で足がもつれ、痛さより先に驚いて動けなかった。茶色い鞄が床につく音がした。"
          },
          {
            "who": "yori",
            "text": "大丈夫。ここにいるよ。先生を呼ぶから、今は何があったか話せる所からでいい。",
            "expr": "neutral",
            "act": "v5-special"
          },
          {
            "who": "me",
            "text": "少し驚いただけです。先生が来るまで、隣にいてもらえますか。"
          },
          {
            "who": "yori",
            "text": "うん。立てそうかは先生と確かめよう。私はここに座るね。",
            "expr": "neutral",
            "act": "v5-special"
          },
          {
            "who": "hypothalamus",
            "text": "知らせてくれてありがとう。保健室の先生もこちらへ来ている。あとは一緒に確認しよう。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "頼は先生が来てからも、尋ねたことを途中で代わりに答えず、隣に残った。"
          },
          {
            "who": "yori",
            "text": "先生に引き継げた。じゃあ、次の受付を頼める人を呼んでくるね。",
            "expr": "neutral",
            "act": "v5-special"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs1_close",
          "effects": {
            "yor": 8
          }
        },
        "cast": [
          "yori",
          "hypothalamus"
        ]
      },
      {
        "id": "fs2_cafe_yor",
        "title": "持つ皿をひとつ決める",
        "char": "yor",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "cafe",
        "time": "午前",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "カウンターに皿が四枚並んだ。頼が一度に持ち上げかけ、テーブルの角が人で狭くなっているのを見た。"
          },
          {
            "who": "yori",
            "text": "一度で運ぼうかと思ったけど、一つ頼んでいい？　どれなら持てる？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "軽い方を二枚。熱いお皿は先輩の方にお願いします。"
          },
          {
            "who": "yori",
            "text": "うん。戻る道を開けてから出よう。早くなるのは一回で終わる時だけね。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "二人が同じ席から戻った時、次に来た人がちょうど通れる幅が空いていた。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs2_play"
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "fs2_play_yor",
        "title": "出番までに一呼吸",
        "char": "yor",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "stage",
        "time": "昼",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "舞台の裏で、出番の札を持った主人公の指が止まった。頼は札を取り上げず、横の椅子を少し引いた。"
          },
          {
            "who": "yori",
            "text": "困った？　出られそうかだけ、先に聞いていい？",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "出られます。最初の音を言い直すまで、聞いててください。"
          },
          {
            "who": "yori",
            "text": "うん。用具を届けるのはその後で大丈夫。聞こえてるから、こっちを見て言って。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "舞台で最初の音が出た時、頼はまだ幕の端でこちらを見ていた。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs2_exhibit",
          "effects": {
            "yor": 7,
            "gei": 2
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "fs2_ex_yor",
        "title": "片づけとその先",
        "char": "yor",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "infirmary",
        "time": "午後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "保健委員会の掲示には、異物を取り込む図と、炎症が収まる側の図が並んでいた。頼は、二枚を同じ矢印で結ばずに置いた。"
          },
          {
            "who": "yori",
            "text": "異物を片づける仕事と、傷の修復を支える仕事。どんな順で見たら分かりやすい？",
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
                    "who": "yori",
                    "text": "そうね。炎症が収まる時期にも、組織が直るのを助ける役がいる。二枚を続けて読もう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 2,
                  "t": 2,
                  "u": 2
                },
                "label": "先に異物への対応を見てから、修復の働きへ進む"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "片づけは大切。二枚目に、そこから傷の周りで何が続いているか書いてあるよ。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "u": 1
                },
                "label": "片づけを終えたら、そこで全部が終わり"
              }
            ]
          }
        ],
        "clues": [
          {
            "char": "yor",
            "text": "片づけた後も、傷の周りを修復するのを支える。"
          }
        ],
        "after": [
          {
            "who": "narr",
            "text": "片づけの図の次にもう一度戻って見ると、最初に目に入らなかった細い線が見えた。"
          }
        ],
        "goto": {
          "type": "next",
          "id": "fs2_haunted"
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "fs2_ghost_yor",
        "title": "出口を一枚間違えた",
        "char": "yor",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "haunted",
        "time": "午後",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "暗幕の角で頼が手を振り、こちらを先に通そうとした。布を持ち上げると、同じお化けがもう一度現れた。"
          },
          {
            "who": "yori",
            "text": "そう。こっちは入口でしたね。……驚かせる方には回ってないですよ。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "先輩が道案内してくれると思ったから、ここまで早く来ました。"
          },
          {
            "who": "yori",
            "text": "じゃあ今度は二人で出口を探そう。見つけた方が、先にちゃんと確認する。",
            "expr": "neutral"
          },
          {
            "who": "narr",
            "text": "次の角で笑い声がした。今度はお化けの声でなく、二人の声だった。"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "fs2_crisis",
          "effects": {
            "yor": 5
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "fs2_sun_yor",
        "title": "テントのあとの四角",
        "char": "yor",
        "v5Script": true,
        "day": "fest2",
        "date": "6月21日(日)",
        "place": "roof",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "屋上から見ると、テントを畳んだ片側にだけ、芝生の薄い四角が残っていた。"
          },
          {
            "who": "yori",
            "text": "明日にはあの場所で、またいつもどおり歩けるかもね。終わった後にどんなふうに見えるか、先に絵に残したい。",
            "expr": "neutral"
          },
          {
            "who": "me",
            "text": "明日なら、放課後に一緒に来ますか。"
          },
          {
            "who": "yori",
            "text": "うん。やることが済んだか確かめたあと、私の描きたい方に付き合って。またこちらから呼ぶよ。",
            "expr": "neutral"
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "next",
          "id": "ev_afterparty",
          "effects": {
            "yor": 3
          }
        },
        "cast": [
          "yori"
        ]
      },
      {
        "id": "fs2_crisis_yor",
        "title": "終わった知らせが続く",
        "char": "yor",
        "v5Script": true,
        "day": "crisis",
        "date": "6月21日(日)",
        "place": "infirmary",
        "time": "夕方",
        "bgm": "keep",
        "lines": [
          {
            "who": "narr",
            "text": "懐中時計の止まった机に、救護の札が続けて戻った。新しい知らせには「異物の片づけ終了」。古い札はまだ対応を呼びかけている。"
          },
          {
            "who": "yori",
            "text": "最初に必要だった知らせは捨てない。でも、同じことを今すぐ続けるのかは、今の報告で判断したい。",
            "expr": "neutral"
          }
        ],
        "choices": [
          {
            "prompt": "片づけを終えた記録をどうする？",
            "kind": "care",
            "options": [
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "うん。異物を取り込む役が見たことは、別の係へ届けば次の判断に使える。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 1,
                  "u": 2
                },
                "label": "時刻を確かめ、対応した内容と異物の目印を伝える"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "時刻が違うから、まだ同じことが起きているとは言えない。記録は残して、順に分けよう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "u": 1
                },
                "label": "古い札を全部、新しい連絡として回す"
              }
            ]
          },
          {
            "prompt": "次に見るのは？",
            "kind": "care",
            "options": [
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "そう。片づけは終わったから、今度は周りが元に戻るために何が要るかを見よう。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "f": 1,
                  "t": 1,
                  "u": 2
                },
                "label": "反応が収まる段階で、傷が直る過程を支える"
              },
              {
                "response": [
                  {
                    "who": "yori",
                    "text": "同じ知らせで進めるより、次の仕事を別に伝えた方が、その後の様子を見られるよ。",
                    "expr": "neutral"
                  }
                ],
                "effects": {
                  "u": 1
                },
                "label": "片づけの連絡を、終わるまでそのまま繰り返す"
              }
            ],
            "pre": [
              {
                "who": "narr",
                "text": "先生から返る札には、強い対応から修復を確認する段階へ、と書かれていた。頼は、さっきと別の紙を取り出した。"
              }
            ]
          }
        ],
        "clues": [],
        "after": [
          {
            "who": "hypothalamus",
            "text": "知らせを分けたら、次の当番に引き継げそうだ。君が持つべき用件は、そこで一つ減ったよ。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "はい。残ることと、任せることを聞いてから帰ります。",
            "expr": "neutral"
          }
        ],
        "goto": {
          "type": "next",
          "id": "fs2_resume"
        },
        "cast": [
          "yori",
          "hypothalamus"
        ]
      },
      {
        "id": "end_yor",
        "title": "鞄を持たない日",
        "char": "yor",
        "v5Script": true,
        "day": "end",
        "date": "6月21日(日)",
        "place": "ginkgo",
        "time": "夜",
        "trans": "white",
        "bgm": "ending",
        "lines": [
          {
            "who": "narr",
            "text": "下駄箱の小さな紙には「木の下で。今日は私の用事です」とだけあった。イチョウの下で、頼は絵を片手に持ち、空いた手をこちらへ差し出した。いつもの鞄は置いてきていた。"
          },
          {
            "who": "yori",
            "text": "よかった、来てくれた。用事は絵を見てもらうことと、もう一つ。あなたが好きです。休日の予定に、あなたの名前を書いてもいい？",
            "expr": "neutral",
            "act": "v5-confess"
          },
          {
            "who": "me",
            "text": "はい。私も先輩が好きです。困った時だけじゃなくて、絵を描く日にも呼んでください。"
          },
          {
            "who": "yori",
            "text": "……ありがとう。今日のこの絵、今度会った日の日付を残す場所を空けてあるの。",
            "expr": "neutral",
            "act": "v5-accepted"
          },
          {
            "who": "yori",
            "text": "帰りは前に言ってた速さで。話しながら、ゆっくり行こうか。",
            "v5Memory": [
              "yor_pace",
              "slow"
            ],
            "expr": "neutral",
            "act": "v5-accepted"
          },
          {
            "who": "yori",
            "text": "帰りは、いつもの歩幅で。話の途中なら、その場で待つね。",
            "v5Memory": [
              "yor_pace",
              "normal"
            ],
            "expr": "neutral",
            "act": "v5-accepted"
          },
          {
            "who": "yori",
            "text": "帰りは、歩き出してから速さを聞いてもいい？",
            "v5Memory": [
              "yor_pace",
              ""
            ],
            "expr": "neutral",
            "act": "v5-accepted"
          },
          {
            "who": "me",
            "text": "はい。その時に答えます。先輩も、見たいところがあったら止まってください。"
          },
          {
            "who": "narr",
            "text": "二人で木の影を出ると、頼は絵をこちらにもよく見える高さに持ち替えた。空いているところが、まだ夜の光を拾っていた。",
            "v5Cast": []
          }
        ],
        "choices": [],
        "clues": [],
        "goto": {
          "type": "if",
          "cond": [
            [
              "rvok",
              ">=",
              1
            ]
          ],
          "then": "ep_rv_yor",
          "else": "ep_wake"
        },
        "cast": [
          "yori"
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
            "text": "頼が校門で鞄を持ち直し、来た道を一度振り向いていた。"
          }
        ],
        [
          {
            "who": "narr",
            "text": "門の前で、頼は袖の腕章が表かどうかを指で確かめた。"
          }
        ],
        [
          {
            "who": "narr",
            "text": "頼が植え込みのそばで立ち止まり、花の高さに目を合わせた。"
          }
        ],
        [
          {
            "who": "narr",
            "text": "頼は門の脇で色鉛筆を一度取り出し、それを鞄の別の場所へしまった。"
          }
        ],
        [
          {
            "who": "narr",
            "text": "校門に頼がいた。先に帰る人が通れるよう、鞄を引き寄せていた。"
          }
        ]
      ],
      "refuse0": [
        [
          {
            "who": "yori",
            "text": "ごめん。先に先生へ申し送りがあるの。また誘ってくれる？",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "今日は先に帰るね。道具を置いてきたから、学校の角までは戻り道になるし。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "一緒に帰る時間なら、次は用事を一つ片づけてからにしたい。",
            "expr": "neutral"
          }
        ]
      ],
      "refuse1": [
        [
          {
            "who": "yori",
            "text": "声をかけてくれてありがとう。今日はまだ、当番の帰り方しか思いつかない。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "今は少し疲れているみたい。ちゃんと話せる日に、こちらからも声をかけるね。",
            "expr": "neutral"
          }
        ]
      ],
      "ok2": [
        [
          {
            "who": "yori",
            "text": "うん。一緒に歩ける。どの辺りまでなら、急がず行けそう？",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "角まで一緒に。今日の花壇に何が咲いたか、歩きながら話したいな。",
            "expr": "neutral"
          }
        ]
      ],
      "ok3": [
        [
          {
            "who": "yori",
            "text": "待ってた。用はもう終わったから、今日は帰り道の方を先に考えていたの。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "一緒に帰りたい。話し終わるまで、駅の方まで歩いていい？",
            "expr": "neutral"
          }
        ]
      ],
      "invite4": [
        [
          {
            "who": "yori",
            "text": "{call}、寄り道しよう。描きかけのものを見てもらう約束、今から作ってもいい？",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "今なら手が空いてる。もう少し長く話せる道を、二人で選ぼう。",
            "expr": "neutral"
          }
        ]
      ],
      "like": [
        [
          {
            "who": "yori",
            "text": "ものを作る手って、始める前と途中で違うのね。その時の影をよく見てみたい。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "紙を押さえる指まで覚えていられそう。今度やる時、見せて。",
            "expr": "neutral"
          }
        ]
      ],
      "dislike": [
        [
          {
            "who": "yori",
            "text": "大きな声が重なると、誰かの話を聞き落としそう。静かな方の場面も教えて。",
            "expr": "neutral"
          }
        ]
      ],
      "neutral": [
        [
          {
            "who": "yori",
            "text": "そう見えるんだ。次に通ったら、きみが見た方を向いてみる。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "続きはあとで描けそう。いまは話し終わるまで、ここにいるね。",
            "expr": "neutral"
          }
        ]
      ],
      "stat1": [
        [
          {
            "who": "yori",
            "text": "必要な椅子だけ先に出してくれたでしょう。おかげで話す時間が取れた。",
            "expr": "neutral"
          }
        ]
      ],
      "stat2": [
        [
          {
            "who": "yori",
            "text": "誰がまだ聞いてないか確かめてくれたんだね。気づく順番に助けられた。",
            "expr": "neutral"
          }
        ]
      ],
      "stat3": [
        [
          {
            "who": "yori",
            "text": "きみが見てくれる時は、途中で任せても大丈夫だと思える。今日は少し早く帰れるよ。",
            "expr": "neutral"
          }
        ]
      ],
      "date_refuse": [
        [
          {
            "who": "yori",
            "text": "休みの日に二人で、ね。予定を確かめないで答えそうだから、また聞かせて。",
            "expr": "neutral"
          }
        ]
      ],
      "date_like": [
        [
          {
            "who": "yori",
            "text": "{spot}は、用事を思い出す前に景色が入ってくる。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "今日の一色だけ、帰ってから描こうかな。",
            "expr": "neutral"
          }
        ]
      ],
      "date_ok": [
        [
          {
            "who": "yori",
            "text": "{spot}で止まった場所、初めだけ地図を見てた。あとは二人で覚えていられそう。",
            "expr": "neutral"
          }
        ]
      ],
      "date_bad": [
        [
          {
            "who": "yori",
            "text": "{spot}では足元ばかり見てたね。次は、顔を見て話せる場所がいいな。",
            "expr": "neutral"
          }
        ]
      ],
      "warn": [
        [
          {
            "who": "redcell",
            "text": "頼先輩、交代しても鞄を持ったままらしい。こないだ、絵の道具も出しそびれたって。",
            "expr": "neutral"
          }
        ]
      ],
      "bomb": [
        [
          {
            "who": "narr",
            "text": "交代表に頼の丸ばかり増え、次の人の名前を書く場所がなくなった。"
          },
          {
            "who": "yori",
            "text": "お願いしてからでも間に合ったのにね。自分で先に書き足してしまった。",
            "expr": "neutral"
          }
        ]
      ],
      "fix": [
        [
          {
            "who": "yori",
            "text": "来てくれたんだね。今日だけは、空いた欄を埋める前に隣で話してもいい？",
            "expr": "neutral"
          }
        ]
      ],
      "nf": [
        [
          {
            "who": "yori",
            "text": "頼んでくれた用事の先でも会いたい。これからは、理由がある日ばかり選ばなくていいね。",
            "expr": "neutral"
          }
        ]
      ],
      "sched0": [
        [
          {
            "who": "yori",
            "text": "先に先生へ届ける紙が一枚。私に用があるなら、戻ってからでいい？",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "あら、見てた？　腕章をつけ直したところ。今度は名前が読めるはず。",
            "expr": "neutral"
          }
        ]
      ],
      "sched1": [
        [
          {
            "who": "yori",
            "text": "おかげで引き継げたよ。あと一枚は、今から描きたい方の紙。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "今日は鞄の中が軽い。使わなかった物を、置いてこられたから。",
            "expr": "neutral"
          }
        ]
      ],
      "sched2": [
        [
          {
            "who": "yori",
            "text": "ここで待ってれば会えるかなって思って。話の続きを聞ける？",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "今日の仕事はここでおしまい。もう少し一緒にいるなら、どっちへ行こうか。",
            "expr": "neutral"
          }
        ]
      ],
      "pass": [
        [
          {
            "who": "yori",
            "text": "あら、きみ。廊下の向こうの窓、さっき見たら光がきれいだった。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "鉛筆見なかった？　……あ、持ってるね。聞く方が先になってしまった。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "急いでいる顔じゃないね。また放課後なら、さっきの話から聞けるよ。",
            "expr": "neutral"
          }
        ]
      ],
      "info1": [
        [
          {
            "who": "redcell",
            "text": "頼先輩は月曜に保健室、水曜に屋上、金曜にグラウンド。今日は会いに行く日？",
            "expr": "neutral"
          }
        ]
      ],
      "info2": [
        [
          {
            "who": "redcell",
            "text": "植物や絵を描く話、ものを作る手元の話が好き。歓声が続く場所では、話を聞き取りづらいみたい。",
            "expr": "neutral"
          }
        ]
      ],
      "info3": [
        [
          {
            "who": "redcell",
            "text": "頼先輩は、困ってる人に気づいて、分かったことを伝えられる人と話しやすいらしい。根気と体力もあると、見回りを一緒にできそう。",
            "expr": "neutral"
          }
        ]
      ],
      "info4": [
        [
          {
            "who": "redcell",
            "text": "水族館と図書館。長く座って見られる所が好きなんだって。スケートリンクは足元が落ち着かないって。",
            "expr": "neutral"
          }
        ]
      ],
      "textbook": [
        [
          {
            "who": "narr",
            "text": "【教科書】マクロファージは免疫に関わる細胞。異物や細胞の残骸などを取り込んで分解する食作用を行う。"
          },
          {
            "who": "narr",
            "text": "取り込んだ物の一部を示す抗原提示や、周りの細胞への情報伝達を行う場合もある。炎症が収まる段階では、傷ついた組織の修復にも関わる。"
          }
        ]
      ],
      "spot_cake": [
        [
          {
            "who": "yori",
            "text": "絵に描くなら、切ったばかりの向きがいいね。食べる向きは、好きな方からでいいけど。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_pier": [
        [
          {
            "who": "yori",
            "text": "水の上と下で、同じ道が二つに見えるね。歩き出す前に少し見ていこう。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_park": [
        [
          {
            "who": "yori",
            "text": "人の間を通ると花がよく見えない。広い方の道から回ってもいい？",
            "expr": "neutral"
          }
        ]
      ],
      "spot_rink": [
        [
          {
            "who": "yori",
            "text": "焦って先に立つと、たぶん道具を落とす。最初の一周は手すりまで一緒に行きたいな。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_library": [
        [
          {
            "who": "yori",
            "text": "図鑑の棚は奥にあるらしいよ。静かな場所では、見つけたら指で教えるね。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_beach": [
        [
          {
            "who": "yori",
            "text": "潮風じゃないのに波がある。日が傾くまで、影の形を見ていきたい。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_aquarium": [
        [
          {
            "who": "yori",
            "text": "あの窓、四角いのに光が曲がっている。長く座っていられる所を先に探そう。",
            "expr": "neutral"
          }
        ]
      ],
      "spot_firefly": [
        [
          {
            "who": "yori",
            "text": "紙に描くより先に消えそう。目を離したら、次に光った方を教えてね。",
            "expr": "neutral"
          }
        ]
      ],
      "repeat": [
        [
          {
            "who": "yori",
            "text": "同じ道でも違う色が見えるね。昨日までの景色をそのまま描かなくて済みそう。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "前に座った側が空いてる。今日は反対側から見るのもいいな。",
            "expr": "neutral"
          }
        ]
      ],
      "phone_call": [
        [
          {
            "who": "yori",
            "text": "もしもし。鞄を閉じたところだったから、すぐ出られたよ。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "うん。急ぎなら最初に聞く。そうじゃないなら、ゆっくり話そう。",
            "expr": "neutral"
          }
        ],
        [
          {
            "who": "yori",
            "text": "今日はもう呼ばれないと思っていた。きみには、呼んでほしかった方だけど。",
            "expr": "neutral"
          }
        ]
      ],
      "dream_after_xmas": [
        [
          {
            "who": "yori",
            "text": "雪に塗らずに白くした夢を見た。鉛筆を借りていた相手だけ、はっきり思い出せるよ。",
            "expr": "neutral"
          }
        ]
      ],
      "dream_after_val": [
        [
          {
            "who": "yori",
            "text": "包みの絵を渡す夢を見たの。色が足りなかったけど、形は覚えている。",
            "expr": "neutral"
          }
        ]
      ],
      "ident_hint": [
        [
          {
            "who": "narr",
            "text": "袋へ取り込む。目印を見せる。炎症が収まった後も、修復を支える働きがあった。"
          },
          {
            "who": "yori",
            "text": "片づけた後まで、目を向けてくれたんだね。",
            "expr": "neutral"
          }
        ]
      ],
      "ident_ok": [
        [
          {
            "who": "yori",
            "text": "マクロファージ。うん、当たり。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "引き継ぎの先まで見てもらえたのが、今日はいちばんうれしい。",
            "expr": "neutral"
          }
        ]
      ],
      "ident_ng": [
        [
          {
            "who": "yori",
            "text": "道具の形だけだと、ほかの係にも見えるかも。",
            "expr": "neutral"
          },
          {
            "who": "yori",
            "text": "何を取り込んで、次に何を示すか、もう一度考えてみよう。",
            "expr": "neutral"
          }
        ]
      ]
    },
    "clues": [
      "異物を大きな袋のようなものへ取り込み、分解して片づける。",
      "取り込んだ物の一部を目印として、別の係へ見せる。",
      "片づけた後も、傷の周りを修復するのを支える。"
    ]
  }
});
