window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['3a'] = {
    "title": "三年级上册·万以内加减法与时分秒",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "units": [
      {
        "name": "时、分、秒",
        "level": "current",
        "children": [
          {
            "name": "秒的认识",
            "level": "current"
          },
          {
            "name": "时间计算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "万以内的加减法",
        "level": "locked",
        "children": [
          {
            "name": "口算加减",
            "level": "locked"
          },
          {
            "name": "笔算加减",
            "level": "locked"
          },
          {
            "name": "加减法验算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "测量",
        "level": "locked",
        "children": [
          {
            "name": "毫米与分米",
            "level": "locked"
          },
          {
            "name": "千米与吨",
            "level": "locked"
          }
        ]
      },
      {
        "name": "多位数乘一位数",
        "level": "locked",
        "children": [
          {
            "name": "口算乘法",
            "level": "locked"
          },
          {
            "name": "笔算乘法",
            "level": "locked"
          }
        ]
      },
      {
        "name": "长方形和正方形",
        "level": "locked",
        "children": [
          {
            "name": "四边形认识",
            "level": "locked"
          },
          {
            "name": "周长",
            "level": "locked"
          }
        ]
      },
      {
        "name": "分数初步认识",
        "level": "locked",
        "children": [
          {
            "name": "几分之一",
            "level": "locked"
          },
          {
            "name": "同分母加减",
            "level": "locked"
          }
        ]
      },
      {
        "name": "数学广角",
        "level": "locked",
        "children": [
          {
            "name": "集合",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "体育课上小红跳绳，老师计时1分钟。小红跳了45秒就累了，她想知道距离1分钟还差几秒。",
        "question": "距离1分钟(60秒)还差几秒？",
        "formula": "60 - 45 = ?",
        "answer": 15,
        "choices": [
          15,
          25,
          5,
          105
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 60,
          "parts": [
            {
              "value": 45,
              "label": "已过",
              "color": "#FB923C"
            },
            {
              "value": 15,
              "label": "还差",
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "秒的认识",
        "difficulty": 1,
        "hint": "1分=60秒，用减法",
        "variants": [
          {
            "question": "跳了38秒还差几秒到1分？",
            "formula": "60-38=?",
            "answer": 22,
            "hint": "60减38"
          },
          {
            "question": "跳了52秒还差几秒到1分？",
            "formula": "60-52=?",
            "answer": 8,
            "hint": "60减52"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 1分钟等于多少秒？",
            "choices": [
              "60秒",
              "100秒",
              "30秒",
              "12秒"
            ],
            "answer": "60秒",
            "explain": "1分=60秒"
          },
          {
            "q": "🔢 已经过了多少秒？",
            "choices": [
              "45秒",
              "60秒",
              "15秒",
              "不知道"
            ],
            "answer": "45秒",
            "explain": "已经过了45秒"
          },
          {
            "q": "🧩 用什么方法求还差多少秒？",
            "choices": [
              "减法",
              "加法",
              "乘法",
              "除法"
            ],
            "answer": "减法",
            "explain": "用总秒数减去已过的秒数：60-45=15"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数字Bond图展示总秒数60分成已过45秒和还差15秒",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "60-45=15，从总数中减去一部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求剩余用减法：总数-已用=剩余",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "科学课上老师展示了一个大钟面，秒针滴答滴答走了一圈。小明好奇秒针走一圈到底是多少秒。",
        "question": "秒针走一圈是多少秒？",
        "formula": "秒针一圈 = ? 秒",
        "answer": 60,
        "choices": [
          60,
          100,
          30,
          12
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 60,
          "points": [
            {
              "pos": 0,
              "label": "起点",
              "color": "#00A896"
            },
            {
              "pos": 60,
              "label": "一圈",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            60
          ]
        },
        "knowledge": "秒的认识",
        "difficulty": 1,
        "hint": "秒针走一圈=1分=60秒",
        "variants": [
          {
            "question": "秒针走半圈多少秒？",
            "formula": "60÷2=?",
            "answer": 30,
            "hint": "半圈就是30秒"
          },
          {
            "question": "秒针走两圈多少秒？",
            "formula": "60×2=?",
            "answer": 120,
            "hint": "两圈120秒"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「秒针走一圈是多少秒？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "动画片中一首歌播放了1分20秒。小亮想知道这等于多少秒，好记录在自己的小本子上。",
        "question": "1分20秒等于多少秒？",
        "formula": "60 + 20 = ?",
        "answer": 80,
        "choices": [
          80,
          120,
          20,
          70
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "1分",
              "value": 60,
              "color": "#00A896"
            },
            {
              "label": "20秒",
              "value": 20,
              "color": "#F5B800"
            },
            {
              "label": "共80秒",
              "value": 80,
              "color": "#E8A0BF"
            }
          ],
          "total": 80
        },
        "knowledge": "秒的认识",
        "difficulty": 1,
        "hint": "1分=60秒，再加20秒",
        "variants": [
          {
            "question": "1分15秒=多少秒？",
            "formula": "60+15=?",
            "answer": 75,
            "hint": "60加15"
          },
          {
            "question": "1分40秒=多少秒？",
            "formula": "60+40=?",
            "answer": 100,
            "hint": "60加40"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 1分等于多少秒？",
            "choices": [
              "60秒",
              "100秒",
              "30秒",
              "120秒"
            ],
            "answer": "60秒",
            "explain": "1分=60秒"
          },
          {
            "q": "🔢 先换算再计算",
            "choices": [
              "60+20=80",
              "60-20=?",
              "60×20=?",
              "60÷20=?"
            ],
            "answer": "60+20=80",
            "explain": "先把1分换算成60秒，再加20秒"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "加法",
              "减法",
              "乘法",
              "除法"
            ],
            "answer": "加法",
            "explain": "把两部分合起来用加法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图分两段：1分(60秒)和20秒，合起来80秒",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1分20秒=60+20=80秒",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "时间换算：先把大单位换成小单位再相加",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "周末全家坐火车去外婆家，火车9时从车站出发，路上行驶了3个小时。妈妈问小明几点能到。",
        "question": "火车几点到达？",
        "formula": "9 + 3 = ? (时)",
        "answer": 12,
        "choices": [
          11,
          12,
          13,
          6
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 8,
          "end": 13,
          "points": [
            {
              "pos": 9,
              "label": "出发",
              "color": "#00A896"
            },
            {
              "pos": 12,
              "label": "到达",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            9,
            12
          ]
        },
        "knowledge": "时间计算",
        "difficulty": 2,
        "hint": "结束时刻=开始时刻+经过时间",
        "variants": [
          {
            "question": "8时出发行驶4时几点到？",
            "formula": "8+4=?",
            "answer": 12,
            "hint": "8加4"
          },
          {
            "question": "10时出发行驶5时几点到？",
            "formula": "10+5=?",
            "answer": 15,
            "hint": "10加5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「火车几点到达？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "图书馆下午2时开门，小芳下午4时离开图书馆。她想知道自己在图书馆看了多久的书。",
        "question": "小芳在图书馆待了几小时？",
        "formula": "16 - 14 = ?",
        "answer": 2,
        "choices": [
          2,
          6,
          12,
          4
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 16,
          "parts": [
            {
              "val": 14,
              "color": "#00A896"
            },
            {
              "val": 2,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "时间计算",
        "difficulty": 2,
        "hint": "经过时间=结束-开始",
        "variants": [
          {
            "question": "9时到12时经过几时？",
            "formula": "12-9=?",
            "answer": 3,
            "hint": "12减9"
          },
          {
            "question": "8时到11时经过几时？",
            "formula": "11-8=?",
            "answer": 3,
            "hint": "11减8"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「小芳在图书馆待了几小时？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明8时10分开始写作业，写了25分钟后完成。他想算算自己几点写完作业。",
        "question": "小明几点写完作业？",
        "formula": "8时10分 + 25分 = ?",
        "answer": 35,
        "choices": [
          35,
          33,
          15,
          25
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 35,
          "parts": [
            {
              "label": "已过10分",
              "val": 10,
              "color": "#00A896"
            },
            {
              "label": "再写25分",
              "val": 25,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "时间计算",
        "difficulty": 2,
        "hint": "10分加25分=35分，8时35分",
        "variants": [
          {
            "question": "8:20开始写35分后几点完？",
            "formula": "20+35=?",
            "answer": 55,
            "hint": "8时55分完"
          },
          {
            "question": "9:05开始写30分后几分完？",
            "formula": "5+30=?",
            "answer": 35,
            "hint": "9时35分完"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「小明几点写完作业？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "文具店里铅笔35元一盒，彩笔27元一盒。小红想各买一盒，她要算算一共多少元。",
        "question": "买两盒一共多少元？",
        "formula": "35 + 27 = ?",
        "answer": 62,
        "choices": [
          62,
          52,
          72,
          58
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分",
              "value": 35,
              "color": "#00A896"
            },
            {
              "label": "第二部分",
              "value": 27,
              "color": "#F5B800"
            },
            {
              "label": "合计62",
              "value": 62,
              "color": "#E8A0BF"
            }
          ],
          "total": 62
        },
        "knowledge": "两位数加两位数口算",
        "difficulty": 2,
        "hint": "先算35+20=55再算55+7",
        "variants": [
          {
            "question": "28+36=?",
            "formula": "28+36=?",
            "answer": 64,
            "hint": "28+30再加6"
          },
          {
            "question": "45+19=?",
            "formula": "45+19=?",
            "answer": 64,
            "hint": "45+20再减1"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 这道题要求什么？",
            "choices": [
              "求两部分合起来的总数",
              "求剩下的部分",
              "求每份是多少",
              "求谁比谁多"
            ],
            "answer": "求两部分合起来的总数",
            "explain": "把35和27合起来"
          },
          {
            "q": "🔢 怎么拆数口算？",
            "choices": [
              "先算35+20=55，再算+7",
              "直接列竖式",
              "用乘法",
              "用除法"
            ],
            "answer": "先算35+20=55，再算+7",
            "explain": "把27拆成20+7，分两步加"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "拆数法口算",
              "列竖式笔算",
              "乘法",
              "减法"
            ],
            "answer": "拆数法口算",
            "explain": "两位数加两位数口算：拆一个数，分两步加"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示35和27两部分合起来是62",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "35+27=62，把27拆成20+7",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "两位数加两位数口算：拆数法，先加整十再加个位",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校组织捐书活动，三(1)班捐了48本，三(2)班捐了36本。大队部要统计两个班一共捐了多少本。",
        "question": "两个班一共捐了多少本？",
        "formula": "48 + 36 = ?",
        "answer": 84,
        "choices": [
          84,
          74,
          94,
          64
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分",
              "value": 48,
              "color": "#00A896"
            },
            {
              "label": "第二部分",
              "value": 36,
              "color": "#F5B800"
            },
            {
              "label": "合计84",
              "value": 84,
              "color": "#E8A0BF"
            }
          ],
          "total": 84
        },
        "knowledge": "两位数加两位数口算",
        "difficulty": 2,
        "hint": "先算48+30=78再算78+6",
        "variants": [
          {
            "question": "37+45=?",
            "formula": "37+45=?",
            "answer": 82,
            "hint": "37+40再加5"
          },
          {
            "question": "56+28=?",
            "formula": "56+28=?",
            "answer": 84,
            "hint": "56+20再加8"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 这道题要求什么？",
            "choices": [
              "求两部分合起来的总数",
              "求剩下的部分",
              "求每份是多少",
              "求谁比谁多"
            ],
            "answer": "求两部分合起来的总数",
            "explain": "把48和36合起来"
          },
          {
            "q": "🔢 怎么拆数口算？",
            "choices": [
              "先算48+30=78，再算+6",
              "直接列竖式",
              "用乘法",
              "用除法"
            ],
            "answer": "先算48+30=78，再算+6",
            "explain": "把36拆成30+6，分两步加"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "拆数法口算",
              "列竖式笔算",
              "乘法",
              "减法"
            ],
            "answer": "拆数法口算",
            "explain": "两位数加两位数口算：拆一个数，分两步加"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示48和36两部分合起来是84",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "48+36=84，把36拆成30+6",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "两位数加两位数口算：拆数法，先加整十再加个位",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮集邮，动物邮票有23枚，植物邮票有49枚。他想知道自己的邮票一共多少枚。",
        "question": "小亮一共有多少枚邮票？",
        "formula": "23 + 49 = ?",
        "answer": 72,
        "choices": [
          72,
          62,
          82,
          52
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分",
              "value": 23,
              "color": "#00A896"
            },
            {
              "label": "第二部分",
              "value": 49,
              "color": "#F5B800"
            },
            {
              "label": "合计72",
              "value": 72,
              "color": "#E8A0BF"
            }
          ],
          "total": 72
        },
        "knowledge": "两位数加两位数口算",
        "difficulty": 2,
        "hint": "先算23+40=63再算63+9",
        "variants": [
          {
            "question": "34+48=?",
            "formula": "34+48=?",
            "answer": 82,
            "hint": "34+40再加8"
          },
          {
            "question": "19+55=?",
            "formula": "19+55=?",
            "answer": 74,
            "hint": "19+50再加5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 这道题要求什么？",
            "choices": [
              "求两部分合起来的总数",
              "求剩下的部分",
              "求每份是多少",
              "求谁比谁多"
            ],
            "answer": "求两部分合起来的总数",
            "explain": "把23和49合起来"
          },
          {
            "q": "🔢 怎么拆数口算？",
            "choices": [
              "先算23+40=63，再算+9",
              "直接列竖式",
              "用乘法",
              "用除法"
            ],
            "answer": "先算23+40=63，再算+9",
            "explain": "把49拆成40+9，分两步加"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "拆数法口算",
              "列竖式笔算",
              "乘法",
              "减法"
            ],
            "answer": "拆数法口算",
            "explain": "两位数加两位数口算：拆一个数，分两步加"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示23和49两部分合起来是72",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "23+49=72，把49拆成40+9",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "两位数加两位数口算：拆数法，先加整十再加个位",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小芳有65颗糖果，分给小朋友28颗。她想知道自己还剩多少颗糖果。",
        "question": "小芳还剩多少颗糖果？",
        "formula": "65 - 28 = ?",
        "answer": 37,
        "choices": [
          37,
          47,
          33,
          43
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 65,
          "parts": [
            {
              "value": 28,
              "label": "减去的",
              "color": "#FB923C"
            },
            {
              "value": 37,
              "label": "剩下的",
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "两位数减两位数口算",
        "difficulty": 2,
        "hint": "先算65-20=45再算45-8",
        "variants": [
          {
            "question": "72-35=?",
            "formula": "72-35=?",
            "answer": 37,
            "hint": "72-30再减5"
          },
          {
            "question": "56-29=?",
            "formula": "56-29=?",
            "answer": 27,
            "hint": "56-30再加1"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 这道题要求什么？",
            "choices": [
              "求剩下的部分（差）",
              "求总数",
              "求每份是多少",
              "求谁是谁的几倍"
            ],
            "answer": "求剩下的部分（差）",
            "explain": "从65里去掉28"
          },
          {
            "q": "🔢 怎么拆数口算？",
            "choices": [
              "先算65-20=45，再算-8",
              "直接列竖式",
              "用乘法",
              "用除法"
            ],
            "answer": "先算65-20=45，再算-8",
            "explain": "把28拆成20+8，分两步减"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "拆数法口算",
              "列竖式笔算",
              "乘法",
              "加法"
            ],
            "answer": "拆数法口算",
            "explain": "两位数减两位数口算：拆减数，分两步减"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数字Bond图：总数65，减去28，剩37",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "65-28=37，拆数法",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "两位数减两位数口算：拆减数，分两步减",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校体育室有82个皮球，借给三(1)班45个。体育老师要算算还剩多少个皮球。",
        "question": "体育室还剩多少个皮球？",
        "formula": "82 - 45 = ?",
        "answer": 37,
        "choices": [
          37,
          47,
          27,
          43
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 82,
          "parts": [
            {
              "value": 45,
              "label": "减去的",
              "color": "#FB923C"
            },
            {
              "value": 37,
              "label": "剩下的",
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "两位数减两位数口算",
        "difficulty": 2,
        "hint": "先算82-40=42再算42-5",
        "variants": [
          {
            "question": "91-36=?",
            "formula": "91-36=?",
            "answer": 55,
            "hint": "91-30再减6"
          },
          {
            "question": "63-27=?",
            "formula": "63-27=?",
            "answer": 36,
            "hint": "63-30再加3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 这道题要求什么？",
            "choices": [
              "求剩下的部分（差）",
              "求总数",
              "求每份是多少",
              "求谁是谁的几倍"
            ],
            "answer": "求剩下的部分（差）",
            "explain": "从82里去掉45"
          },
          {
            "q": "🔢 怎么拆数口算？",
            "choices": [
              "先算82-40=42，再算-5",
              "直接列竖式",
              "用乘法",
              "用除法"
            ],
            "answer": "先算82-40=42，再算-5",
            "explain": "把45拆成40+5，分两步减"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "拆数法口算",
              "列竖式笔算",
              "乘法",
              "加法"
            ],
            "answer": "拆数法口算",
            "explain": "两位数减两位数口算：拆减数，分两步减"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数字Bond图：总数82，减去45，剩37",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "82-45=37，拆数法",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "两位数减两位数口算：拆减数，分两步减",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "图书角有70本故事书，同学们借走了36本。图书管理员小红要算还剩多少本。",
        "question": "图书角还剩多少本故事书？",
        "formula": "70 - 36 = ?",
        "answer": 34,
        "choices": [
          34,
          44,
          24,
          46
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 70,
          "parts": [
            {
              "value": 36,
              "label": "减去的",
              "color": "#FB923C"
            },
            {
              "value": 34,
              "label": "剩下的",
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "两位数减两位数口算",
        "difficulty": 2,
        "hint": "先算70-30=40再算40-6",
        "variants": [
          {
            "question": "80-47=?",
            "formula": "80-47=?",
            "answer": 33,
            "hint": "80-40再减7"
          },
          {
            "question": "60-28=?",
            "formula": "60-28=?",
            "answer": 32,
            "hint": "60-30再加2"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 这道题要求什么？",
            "choices": [
              "求剩下的部分（差）",
              "求总数",
              "求每份是多少",
              "求谁是谁的几倍"
            ],
            "answer": "求剩下的部分（差）",
            "explain": "从70里去掉36"
          },
          {
            "q": "🔢 怎么拆数口算？",
            "choices": [
              "先算70-30=40，再算-6",
              "直接列竖式",
              "用乘法",
              "用除法"
            ],
            "answer": "先算70-30=40，再算-6",
            "explain": "把36拆成30+6，分两步减"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "拆数法口算",
              "列竖式笔算",
              "乘法",
              "加法"
            ],
            "answer": "拆数法口算",
            "explain": "两位数减两位数口算：拆减数，分两步减"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数字Bond图：总数70，减去36，剩34",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "70-36=34，拆数法",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "两位数减两位数口算：拆减数，分两步减",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "果园里上午摘了320千克苹果，下午又摘了150千克。果农伯伯要算一共摘了多少千克。",
        "question": "一共摘了多少千克苹果？",
        "formula": "320 + 150 = ?",
        "answer": 470,
        "choices": [
          470,
          360,
          570,
          420
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分",
              "value": 320,
              "color": "#00A896"
            },
            {
              "label": "第二部分",
              "value": 150,
              "color": "#F5B800"
            },
            {
              "label": "合计470",
              "value": 470,
              "color": "#E8A0BF"
            }
          ],
          "total": 470
        },
        "knowledge": "几百几十加减",
        "difficulty": 2,
        "hint": "32+15=47，添一个0",
        "variants": [
          {
            "question": "460+230=?",
            "formula": "460+230=?",
            "answer": 690,
            "hint": "46+23=69添0"
          },
          {
            "question": "510+180=?",
            "formula": "510+180=?",
            "answer": 690,
            "hint": "51+18=69添0"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 几百几十加减法有什么技巧？",
            "choices": [
              "看成几十几个十再加减",
              "直接列竖式",
              "用乘法口诀",
              "用除法"
            ],
            "answer": "看成几十几个十再加减",
            "explain": "把320看作32个十，150看作15个十"
          },
          {
            "q": "🔢 转化后怎么算？",
            "choices": [
              "32+15=47，添0得470",
              "直接320+150=470",
              "用乘法",
              "用加法"
            ],
            "answer": "32+15=47，添0得470",
            "explain": "先算几个十，再添0"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "转化成表内运算再添0",
              "列竖式",
              "用计算器",
              "估算"
            ],
            "answer": "转化成表内运算再添0",
            "explain": "几百几十加减：看成几十几个十，算完再添0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示320和150的和是470",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "看成32个十±15个十=47个十=470",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "几百几十加减：先转化为表内运算，再添0",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "粮店运来580袋大米，卖出了240袋。店主要算算还剩多少袋大米没卖。",
        "question": "还剩多少袋大米？",
        "formula": "580 - 240 = ?",
        "answer": 340,
        "choices": [
          340,
          440,
          240,
          330
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 580,
          "parts": [
            {
              "value": 240,
              "label": "减去的",
              "color": "#FB923C"
            },
            {
              "value": 340,
              "label": "剩下的",
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "几百几十加减",
        "difficulty": 2,
        "hint": "58-24=34，添一个0",
        "variants": [
          {
            "question": "760-320=?",
            "formula": "760-320=?",
            "answer": 440,
            "hint": "76-32=44添0"
          },
          {
            "question": "690-150=?",
            "formula": "690-150=?",
            "answer": 540,
            "hint": "69-15=54添0"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 几百几十加减法有什么技巧？",
            "choices": [
              "看成几十几个十再加减",
              "直接列竖式",
              "用乘法口诀",
              "用除法"
            ],
            "answer": "看成几十几个十再加减",
            "explain": "把580看作58个十，240看作24个十"
          },
          {
            "q": "🔢 转化后怎么算？",
            "choices": [
              "58-24=34，添0得340",
              "直接580-240=340",
              "用乘法",
              "用加法"
            ],
            "answer": "58-24=34，添0得340",
            "explain": "先算几个十，再添0"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "转化成表内运算再添0",
              "列竖式",
              "用计算器",
              "估算"
            ],
            "answer": "转化成表内运算再添0",
            "explain": "几百几十加减：看成几十几个十，算完再添0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示580和240的差是340",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "看成58个十-24个十=34个十=340",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "几百几十加减：先转化为表内运算，再添0",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "两个养鸡场，第一个每月产蛋460个，第二个每月产蛋380个。兽医站要统计两个场一共产蛋多少个。",
        "question": "两个养鸡场一共产蛋多少个？",
        "formula": "460 + 380 = ?",
        "answer": 840,
        "choices": [
          840,
          740,
          940,
          820
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分",
              "value": 460,
              "color": "#00A896"
            },
            {
              "label": "第二部分",
              "value": 380,
              "color": "#F5B800"
            },
            {
              "label": "合计840",
              "value": 840,
              "color": "#E8A0BF"
            }
          ],
          "total": 840
        },
        "knowledge": "几百几十加减",
        "difficulty": 2,
        "hint": "46+38=84，添一个0",
        "variants": [
          {
            "question": "350+270=?",
            "formula": "350+270=?",
            "answer": 620,
            "hint": "35+27=62添0"
          },
          {
            "question": "540+190=?",
            "formula": "540+190=?",
            "answer": 730,
            "hint": "54+19=73添0"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 几百几十加减法有什么技巧？",
            "choices": [
              "看成几十几个十再加减",
              "直接列竖式",
              "用乘法口诀",
              "用除法"
            ],
            "answer": "看成几十几个十再加减",
            "explain": "把460看作46个十，380看作38个十"
          },
          {
            "q": "🔢 转化后怎么算？",
            "choices": [
              "46+38=84，添0得840",
              "直接460+380=840",
              "用乘法",
              "用加法"
            ],
            "answer": "46+38=84，添0得840",
            "explain": "先算几个十，再添0"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "转化成表内运算再添0",
              "列竖式",
              "用计算器",
              "估算"
            ],
            "answer": "转化成表内运算再添0",
            "explain": "几百几十加减：看成几十几个十，算完再添0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示460和380的和是840",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "看成46个十±38个十=84个十=840",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "几百几十加减：先转化为表内运算，再添0",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "科学课上老师让同学们测量回形针的厚度。小明发现回形针大约厚1毫米，他想知道1厘米等于多少毫米。",
        "question": "1厘米等于多少毫米？",
        "formula": "1cm = ? mm",
        "answer": 10,
        "choices": [
          10,
          100,
          5,
          20
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 10,
          "points": [
            {
              "pos": 0,
              "label": "0cm",
              "color": "#00A896"
            },
            {
              "pos": 10,
              "label": "1cm",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            10
          ]
        },
        "knowledge": "毫米的认识",
        "difficulty": 1,
        "hint": "1cm=10mm",
        "variants": [
          {
            "question": "2cm=多少mm？",
            "formula": "2cm=?mm",
            "answer": 20,
            "hint": "2×10"
          },
          {
            "question": "5cm=多少mm？",
            "formula": "5cm=?mm",
            "answer": 50,
            "hint": "5×10"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「1厘米等于多少毫米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "美术课上小红画了一条3厘米长的线段。她想换算成毫米来记录，因为毫米更精确。",
        "question": "3厘米等于多少毫米？",
        "formula": "3 × 10 = ?",
        "answer": 30,
        "choices": [
          30,
          13,
          300,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 30,
          "parts": [
            {
              "label": "1cm",
              "val": 10,
              "color": "#00A896"
            },
            {
              "label": "1cm",
              "val": 10,
              "color": "#F5B800"
            },
            {
              "label": "1cm",
              "val": 10,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "毫米的认识",
        "difficulty": 1,
        "hint": "1cm=10mm，3cm就是3个10",
        "variants": [
          {
            "question": "4cm=多少mm？",
            "formula": "4×10=?",
            "answer": 40,
            "hint": "4个10"
          },
          {
            "question": "6cm=多少mm？",
            "formula": "6×10=?",
            "answer": 60,
            "hint": "6个10"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「3厘米等于多少毫米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮量得自己的铅笔长5厘米2毫米。他想知道换算成毫米一共是多少毫米。",
        "question": "5厘米2毫米等于多少毫米？",
        "formula": "50 + 2 = ?",
        "answer": 52,
        "choices": [
          52,
          42,
          62,
          7
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 52,
          "parts": [
            {
              "label": "5cm",
              "val": 50,
              "color": "#00A896"
            },
            {
              "label": "2mm",
              "val": 2,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "毫米的认识",
        "difficulty": 1,
        "hint": "5cm=50mm再加2mm",
        "variants": [
          {
            "question": "3cm4mm=多少mm？",
            "formula": "30+4=?",
            "answer": 34,
            "hint": "30加4"
          },
          {
            "question": "7cm5mm=多少mm？",
            "formula": "70+5=?",
            "answer": 75,
            "hint": "70加5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「5厘米2毫米等于多少毫米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师让同学们用手掌量课桌的宽度。小明的手掌张开大约是1分米，他想知道1米等于多少分米。",
        "question": "1米等于多少分米？",
        "formula": "1m = ? dm",
        "answer": 10,
        "choices": [
          10,
          100,
          5,
          20
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 10,
          "points": [
            {
              "pos": 0,
              "label": "0m",
              "color": "#00A896"
            },
            {
              "pos": 10,
              "label": "1m",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            10
          ]
        },
        "knowledge": "分米的认识",
        "difficulty": 1,
        "hint": "1m=10dm",
        "variants": [
          {
            "question": "2m=多少dm？",
            "formula": "2m=?dm",
            "answer": 20,
            "hint": "2×10"
          },
          {
            "question": "4m=多少dm？",
            "formula": "4m=?dm",
            "answer": 40,
            "hint": "4×10"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「1米等于多少分米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小芳量得书桌高7分米。她想换算成厘米来记录，因为厘米她更熟悉。",
        "question": "7分米等于多少厘米？",
        "formula": "7 × 10 = ?",
        "answer": 70,
        "choices": [
          70,
          17,
          700,
          7
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 70,
          "parts": [
            {
              "label": "1dm",
              "val": 10,
              "color": "#00A896"
            },
            {
              "label": "1dm",
              "val": 10,
              "color": "#F5B800"
            },
            {
              "label": "1dm",
              "val": 10,
              "color": "#FB923C"
            },
            {
              "label": "4dm",
              "val": 40,
              "color": "#E8A0BF"
            }
          ]
        },
        "knowledge": "分米的认识",
        "difficulty": 1,
        "hint": "1dm=10cm，7dm就是7个10",
        "variants": [
          {
            "question": "5dm=多少cm？",
            "formula": "5×10=?",
            "answer": 50,
            "hint": "5个10"
          },
          {
            "question": "9dm=多少cm？",
            "formula": "9×10=?",
            "answer": 90,
            "hint": "9个10"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「7分米等于多少厘米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一根绳子长1米5分米。小红想把它换算成分米来记录，方便剪裁。",
        "question": "1米5分米等于多少分米？",
        "formula": "10 + 5 = ?",
        "answer": 15,
        "choices": [
          15,
          25,
          5,
          105
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 15,
          "parts": [
            {
              "label": "1m",
              "val": 10,
              "color": "#00A896"
            },
            {
              "label": "5dm",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "分米的认识",
        "difficulty": 1,
        "hint": "1m=10dm再加5dm",
        "variants": [
          {
            "question": "2m3dm=多少dm？",
            "formula": "20+3=?",
            "answer": 23,
            "hint": "20加3"
          },
          {
            "question": "3m8dm=多少dm？",
            "formula": "30+8=?",
            "answer": 38,
            "hint": "30加8"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「1米5分米等于多少分米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校操场一圈是400米，体育老师让同学们跑两圈半，正好是1千米。小明好奇1千米等于多少米。",
        "question": "1千米等于多少米？",
        "formula": "1km = ? m",
        "answer": 1000,
        "choices": [
          1000,
          100,
          10000,
          500
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 1000,
          "points": [
            {
              "pos": 0,
              "label": "起点",
              "color": "#00A896"
            },
            {
              "pos": 1000,
              "label": "1km",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            1000
          ]
        },
        "knowledge": "千米的认识",
        "difficulty": 2,
        "hint": "1km=1000m",
        "variants": [
          {
            "question": "2km=多少m？",
            "formula": "2km=?m",
            "answer": 2000,
            "hint": "2×1000"
          },
          {
            "question": "5km=多少m？",
            "formula": "5km=?m",
            "answer": 5000,
            "hint": "5×1000"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「1千米等于多少米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "从家到学校有3千米。小红每天步行上学，她想知道3千米等于多少米。",
        "question": "3千米等于多少米？",
        "formula": "3 × 1000 = ?",
        "answer": 3000,
        "choices": [
          3000,
          300,
          30,
          3003
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 3000,
          "parts": [
            {
              "label": "1km",
              "val": 1000,
              "color": "#00A896"
            },
            {
              "label": "1km",
              "val": 1000,
              "color": "#F5B800"
            },
            {
              "label": "1km",
              "val": 1000,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "千米的认识",
        "difficulty": 2,
        "hint": "1km=1000m，3km就是3个1000",
        "variants": [
          {
            "question": "4km=多少m？",
            "formula": "4×1000=?",
            "answer": 4000,
            "hint": "4个1000"
          },
          {
            "question": "6km=多少m？",
            "formula": "6×1000=?",
            "answer": 6000,
            "hint": "6个1000"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「3千米等于多少米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明骑车从家到公园要2千米500米。他想知道换算成米一共是多少米。",
        "question": "2千米500米等于多少米？",
        "formula": "2000 + 500 = ?",
        "answer": 2500,
        "choices": [
          2500,
          2050,
          250,
          2005
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 2500,
          "parts": [
            {
              "label": "2km",
              "val": 2000,
              "color": "#00A896"
            },
            {
              "label": "500m",
              "val": 500,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "千米的认识",
        "difficulty": 2,
        "hint": "2km=2000m再加500m",
        "variants": [
          {
            "question": "3km200m=多少m？",
            "formula": "3000+200=?",
            "answer": 3200,
            "hint": "3000加200"
          },
          {
            "question": "1km800m=多少m？",
            "formula": "1000+800=?",
            "answer": 1800,
            "hint": "1000加800"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「2千米500米等于多少米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "动物园里有一头大象重约5吨。饲养员告诉同学们1吨等于1000千克，小明好奇5吨等于多少千克。",
        "question": "5吨等于多少千克？",
        "formula": "5 × 1000 = ?",
        "answer": 5000,
        "choices": [
          5000,
          500,
          50,
          5005
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 5000,
          "parts": [
            {
              "label": "1吨",
              "val": 1000,
              "color": "#00A896"
            },
            {
              "label": "1吨",
              "val": 1000,
              "color": "#F5B800"
            },
            {
              "label": "1吨",
              "val": 1000,
              "color": "#FB923C"
            },
            {
              "label": "2吨",
              "val": 2000,
              "color": "#E8A0BF"
            }
          ]
        },
        "knowledge": "吨的认识",
        "difficulty": 2,
        "hint": "1吨=1000kg，5吨就是5个1000",
        "variants": [
          {
            "question": "3吨=多少kg？",
            "formula": "3×1000=?",
            "answer": 3000,
            "hint": "3个1000"
          },
          {
            "question": "8吨=多少kg？",
            "formula": "8×1000=?",
            "answer": 8000,
            "hint": "8个1000"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「5吨等于多少千克？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一辆卡车上装了2吨500千克的煤。司机要算算一共多少千克，好通过收费站。",
        "question": "2吨500千克等于多少千克？",
        "formula": "2000 + 500 = ?",
        "answer": 2500,
        "choices": [
          2500,
          2050,
          250,
          2005
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 2500,
          "parts": [
            {
              "label": "2吨",
              "val": 2000,
              "color": "#00A896"
            },
            {
              "label": "500kg",
              "val": 500,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "吨的认识",
        "difficulty": 2,
        "hint": "2吨=2000kg再加500kg",
        "variants": [
          {
            "question": "3吨200kg=多少kg？",
            "formula": "3000+200=?",
            "answer": 3200,
            "hint": "3000加200"
          },
          {
            "question": "1吨800kg=多少kg？",
            "formula": "1000+800=?",
            "answer": 1800,
            "hint": "1000加800"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「2吨500千克等于多少千克？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "工厂仓库里有3吨钢材，运走了1吨200千克。管理员要算还剩多少千克钢材。",
        "question": "还剩多少千克钢材？",
        "formula": "3000 - 1200 = ?",
        "answer": 1800,
        "choices": [
          1800,
          2800,
          800,
          2200
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 3000,
          "parts": [
            {
              "val": 1200,
              "color": "#FB923C"
            },
            {
              "val": 1800,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "吨的认识",
        "difficulty": 2,
        "hint": "3吨=3000kg减去1200kg",
        "variants": [
          {
            "question": "4吨-1吨500kg=多少kg？",
            "formula": "4000-1500=?",
            "answer": 2500,
            "hint": "4000减1500"
          },
          {
            "question": "2吨-800kg=多少kg？",
            "formula": "2000-800=?",
            "answer": 1200,
            "hint": "2000减800"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「还剩多少千克钢材？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校图书馆原有故事书386本，今天又新买进247本。小明帮忙整理书架，他好奇现在一共有多少本。",
        "question": "图书馆现在一共有多少本故事书？",
        "formula": "386 + 247 = ?",
        "answer": 633,
        "choices": [
          633,
          533,
          733,
          623
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 633,
          "parts": [
            {
              "label": "原有",
              "val": 386,
              "color": "#00A896"
            },
            {
              "label": "新买",
              "val": 247,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "万以内加法笔算",
        "difficulty": 2,
        "hint": "相同数位对齐满十进一",
        "variants": [
          {
            "question": "418+265=?",
            "formula": "418+265=?",
            "answer": 683,
            "hint": "连续进位要细心"
          },
          {
            "question": "295+156=?",
            "formula": "295+156=?",
            "answer": 451,
            "hint": "十位满十向百位进"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「图书馆现在一共有多少本故事书？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校体育室有跳绳458根，又新买了375根。体育老师要统计一共有多少根跳绳。",
        "question": "体育室一共有多少根跳绳？",
        "formula": "458 + 375 = ?",
        "answer": 833,
        "choices": [
          833,
          733,
          933,
          823
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 833,
          "parts": [
            {
              "label": "原有",
              "val": 458,
              "color": "#00A896"
            },
            {
              "label": "新买",
              "val": 375,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "万以内加法笔算",
        "difficulty": 2,
        "hint": "个位8+5=13进一",
        "variants": [
          {
            "question": "537+286=?",
            "formula": "537+286=?",
            "answer": 823,
            "hint": "连续进位"
          },
          {
            "question": "649+178=?",
            "formula": "649+178=?",
            "answer": 827,
            "hint": "注意进位"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「体育室一共有多少根跳绳？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明家离学校569米，学校离书店423米。他想知道从家经过学校到书店一共多少米。",
        "question": "从家到书店一共多少米？",
        "formula": "569 + 423 = ?",
        "answer": 992,
        "choices": [
          992,
          892,
          982,
          993
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 992,
          "parts": [
            {
              "label": "家到校",
              "val": 569,
              "color": "#00A896"
            },
            {
              "label": "校到店",
              "val": 423,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "万以内加法笔算",
        "difficulty": 2,
        "hint": "个位9+3=12进一",
        "variants": [
          {
            "question": "678+245=?",
            "formula": "678+245=?",
            "answer": 923,
            "hint": "注意进位"
          },
          {
            "question": "387+456=?",
            "formula": "387+456=?",
            "answer": 843,
            "hint": "连续进位"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「从家到书店一共多少米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明攒了500元压岁钱，开学时买了一个新书包用去168元。他想算算还剩多少钱存进储蓄罐。",
        "question": "小明还剩多少元？",
        "formula": "500 - 168 = ?",
        "answer": 332,
        "choices": [
          332,
          432,
          368,
          232
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 500,
          "parts": [
            {
              "val": 168,
              "color": "#FB923C"
            },
            {
              "val": 332,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "万以内减法笔算",
        "difficulty": 2,
        "hint": "0不够减向前一位借",
        "variants": [
          {
            "question": "700-245=?",
            "formula": "700-245=?",
            "answer": 455,
            "hint": "连续退位要细心"
          },
          {
            "question": "600-187=?",
            "formula": "600-187=?",
            "answer": 413,
            "hint": "0不够减向前借"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「小明还剩多少元？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "服装厂上午生产了800件衣服，下午运走了465件。厂长要算还剩多少件衣服在仓库。",
        "question": "仓库还剩多少件衣服？",
        "formula": "800 - 465 = ?",
        "answer": 335,
        "choices": [
          335,
          435,
          365,
          345
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 800,
          "parts": [
            {
              "val": 465,
              "color": "#FB923C"
            },
            {
              "val": 335,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "万以内减法笔算",
        "difficulty": 2,
        "hint": "连续退位要细心",
        "variants": [
          {
            "question": "600-278=?",
            "formula": "600-278=?",
            "answer": 322,
            "hint": "0不够减向前借"
          },
          {
            "question": "900-536=?",
            "formula": "900-536=?",
            "answer": 364,
            "hint": "连续退位"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「仓库还剩多少件衣服？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "果园今年收了700千克苹果，已经装箱运走289千克。果农要算还剩多少千克没装。",
        "question": "还剩多少千克苹果？",
        "formula": "700 - 289 = ?",
        "answer": 411,
        "choices": [
          411,
          511,
          489,
          311
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 700,
          "parts": [
            {
              "val": 289,
              "color": "#FB923C"
            },
            {
              "val": 411,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "万以内减法笔算",
        "difficulty": 2,
        "hint": "0不够减向前一位借",
        "variants": [
          {
            "question": "800-356=?",
            "formula": "800-356=?",
            "answer": 444,
            "hint": "连续退位"
          },
          {
            "question": "500-178=?",
            "formula": "500-178=?",
            "answer": 322,
            "hint": "0不够减向前借"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「还剩多少千克苹果？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算了一道加法题：234+156=390。老师教她用减法验算，看看算得对不对。",
        "question": "用减法验算：390 - 156 = ?",
        "answer": 234,
        "formula": "390 - 156 = ?",
        "choices": [
          234,
          144,
          334,
          244
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 390,
          "parts": [
            {
              "val": 156,
              "color": "#FB923C"
            },
            {
              "val": 234,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "加减法验算",
        "difficulty": 2,
        "hint": "和-加数=另一个加数",
        "variants": [
          {
            "question": "验算468+215=683，683-215=?",
            "formula": "683-215=?",
            "answer": 468,
            "hint": "和减加数"
          },
          {
            "question": "验算327+164=491，491-164=?",
            "formula": "491-164=?",
            "answer": 327,
            "hint": "和减加数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「用减法验算：390 - 156 = ?」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮算了一道减法题：500-268=232。老师教他用加法验算，看看算得对不对。",
        "question": "用加法验算：232 + 268 = ?",
        "answer": 500,
        "formula": "232 + 268 = ?",
        "choices": [
          500,
          400,
          600,
          490
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 500,
          "parts": [
            {
              "label": "差",
              "val": 232,
              "color": "#00A896"
            },
            {
              "label": "减数",
              "val": 268,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "加减法验算",
        "difficulty": 2,
        "hint": "差+减数=被减数",
        "variants": [
          {
            "question": "验算700-356=344，344+356=?",
            "formula": "344+356=?",
            "answer": 700,
            "hint": "差加减数"
          },
          {
            "question": "验算800-465=335，335+465=?",
            "formula": "335+465=?",
            "answer": 800,
            "hint": "差加减数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「用加法验算：232 + 268 = ?」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小芳算了一道加法题：478+345=823。老师让她用减法验算，看看结果对不对。",
        "question": "用减法验算：823 - 345 = ?",
        "answer": 478,
        "formula": "823 - 345 = ?",
        "choices": [
          478,
          378,
          578,
          488
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 823,
          "parts": [
            {
              "val": 345,
              "color": "#FB923C"
            },
            {
              "val": 478,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "加减法验算",
        "difficulty": 2,
        "hint": "和-加数=另一个加数",
        "variants": [
          {
            "question": "验算369+258=627，627-258=?",
            "formula": "627-258=?",
            "answer": 369,
            "hint": "和减加数"
          },
          {
            "question": "验算456+187=643，643-187=?",
            "formula": "643-187=?",
            "answer": 456,
            "hint": "和减加数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「用减法验算：823 - 345 = ?」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "花园里有红花4朵，黄花是红花的3倍。园丁要算算黄花有多少朵。",
        "question": "黄花有多少朵？",
        "formula": "4 × 3 = ?",
        "answer": 12,
        "choices": [
          12,
          7,
          8,
          4
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 12,
          "parts": [
            {
              "label": "红花",
              "val": 4,
              "color": "#00A896"
            },
            {
              "label": "黄花",
              "val": 8,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "倍的认识",
        "difficulty": 2,
        "hint": "几倍是多少用乘法",
        "variants": [
          {
            "question": "红花5朵黄花是4倍黄花几朵？",
            "formula": "5×4=?",
            "answer": 20,
            "hint": "5乘4"
          },
          {
            "question": "红花6朵黄花是3倍黄花几朵？",
            "formula": "6×3=?",
            "answer": 18,
            "hint": "6乘3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「黄花有多少朵？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "动物园里有猴子6只，孔雀2只。小亮想知道猴子的只数是孔雀的几倍。",
        "question": "猴子是孔雀的几倍？",
        "formula": "6 ÷ 2 = ?",
        "answer": 3,
        "choices": [
          3,
          4,
          8,
          12
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 6,
          "parts": [
            {
              "label": "第1份",
              "val": 2,
              "color": "#00A896"
            },
            {
              "label": "第2份",
              "val": 2,
              "color": "#F5B800"
            },
            {
              "label": "第3份",
              "val": 2,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "倍的认识",
        "difficulty": 2,
        "hint": "求几倍用除法",
        "variants": [
          {
            "question": "15是5的几倍？",
            "formula": "15÷5=?",
            "answer": 3,
            "hint": "15除5"
          },
          {
            "question": "20是4的几倍？",
            "formula": "20÷4=?",
            "answer": 5,
            "hint": "20除4"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「猴子是孔雀的几倍？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明今年8岁，爸爸的年龄是小明的4倍。小明好奇爸爸今年多少岁。",
        "question": "爸爸今年多少岁？",
        "formula": "8 × 4 = ?",
        "answer": 32,
        "choices": [
          32,
          12,
          4,
          40
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 32,
          "parts": [
            {
              "label": "小明8岁",
              "val": 8,
              "color": "#00A896"
            },
            {
              "label": "3倍",
              "val": 24,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "倍的认识",
        "difficulty": 2,
        "hint": "几倍是多少用乘法",
        "variants": [
          {
            "question": "小明9岁爸爸是4倍爸爸几岁？",
            "formula": "9×4=?",
            "answer": 36,
            "hint": "9乘4"
          },
          {
            "question": "小明7岁爸爸是5倍爸爸几岁？",
            "formula": "7×5=?",
            "answer": 35,
            "hint": "7乘5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「爸爸今年多少岁？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "文具店里一盒铅笔20支，老师买了3盒。小红帮忙算算一共多少支铅笔。",
        "question": "3盒一共多少支铅笔？",
        "formula": "20 × 3 = ?",
        "answer": 60,
        "choices": [
          60,
          23,
          50,
          30
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 20,
          "b": 3,
          "parts": [
            60
          ],
          "result": 60
        },
        "knowledge": "口算乘法",
        "difficulty": 2,
        "hint": "2×3=6添一个0",
        "variants": [
          {
            "question": "30×4=?",
            "formula": "30×4=?",
            "answer": 120,
            "hint": "3×4=12添0"
          },
          {
            "question": "40×2=?",
            "formula": "40×2=?",
            "answer": 80,
            "hint": "4×2=8添0"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「3盒一共多少支铅笔？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校给每个班发200本练习本，发了4个班。教务处要算一共发了多少本。",
        "question": "一共发了多少本练习本？",
        "formula": "200 × 4 = ?",
        "answer": 800,
        "choices": [
          800,
          204,
          400,
          80
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 200,
          "b": 4,
          "parts": [
            800
          ],
          "result": 800
        },
        "knowledge": "口算乘法",
        "difficulty": 2,
        "hint": "2×4=8添两个0",
        "variants": [
          {
            "question": "300×3=?",
            "formula": "300×3=?",
            "answer": 900,
            "hint": "3×3=9添两个0"
          },
          {
            "question": "400×2=?",
            "formula": "400×2=?",
            "answer": 800,
            "hint": "4×2=8添两个0"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「一共发了多少本练习本？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "操场上一排站30人，排了5排。体育老师要算一共多少人在做操。",
        "question": "一共有多少人在做操？",
        "formula": "30 × 5 = ?",
        "answer": 150,
        "choices": [
          150,
          35,
          300,
          50
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 30,
          "b": 5,
          "parts": [
            150
          ],
          "result": 150
        },
        "knowledge": "口算乘法",
        "difficulty": 2,
        "hint": "3×5=15添一个0",
        "variants": [
          {
            "question": "50×3=?",
            "formula": "50×3=?",
            "answer": 150,
            "hint": "5×3=15添0"
          },
          {
            "question": "60×4=?",
            "formula": "60×4=?",
            "answer": 240,
            "hint": "6×4=24添0"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「一共有多少人在做操？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一本故事书23元，老师买了2本送给同学。小红帮忙算算一共要付多少元。",
        "question": "买2本一共多少元？",
        "formula": "23 × 2 = ?",
        "answer": 46,
        "choices": [
          46,
          25,
          43,
          26
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 23,
          "b": 2,
          "parts": [
            40,
            6
          ],
          "result": 46
        },
        "knowledge": "笔算乘法不进位",
        "difficulty": 2,
        "hint": "20×2=40，3×2=6",
        "variants": [
          {
            "question": "32×3=?",
            "formula": "32×3=?",
            "answer": 96,
            "hint": "30×3加3×3"
          },
          {
            "question": "21×4=?",
            "formula": "21×4=?",
            "answer": 84,
            "hint": "20×4加1×4"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「买2本一共多少元？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校图书馆每个书架放312本书，共有3个书架。管理员要算一共放多少本书。",
        "question": "3个书架一共放多少本书？",
        "formula": "312 × 3 = ?",
        "answer": 936,
        "choices": [
          936,
          336,
          636,
          926
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 312,
          "b": 3,
          "parts": [
            900,
            30,
            6
          ],
          "result": 936
        },
        "knowledge": "笔算乘法不进位",
        "difficulty": 2,
        "hint": "300×3=900，10×3=30，2×3=6",
        "variants": [
          {
            "question": "213×3=?",
            "formula": "213×3=?",
            "answer": 639,
            "hint": "分位相乘"
          },
          {
            "question": "412×2=?",
            "formula": "412×2=?",
            "answer": 824,
            "hint": "分位相乘"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「3个书架一共放多少本书？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "教室里有21张桌子，每张桌子配4把椅子。总务处要算一共需要多少把椅子。",
        "question": "一共需要多少把椅子？",
        "formula": "21 × 4 = ?",
        "answer": 84,
        "choices": [
          84,
          24,
          81,
          85
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 21,
          "b": 4,
          "parts": [
            80,
            4
          ],
          "result": 84
        },
        "knowledge": "笔算乘法不进位",
        "difficulty": 2,
        "hint": "20×4=80，1×4=4",
        "variants": [
          {
            "question": "22×3=?",
            "formula": "22×3=?",
            "answer": 66,
            "hint": "20×3加2×3"
          },
          {
            "question": "31×3=?",
            "formula": "31×3=?",
            "answer": 93,
            "hint": "30×3加1×3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「一共需要多少把椅子？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "超市里一箱酸奶25元，妈妈买了3箱。小明帮忙算算一共要付多少元。",
        "question": "买3箱一共多少元？",
        "formula": "25 × 3 = ?",
        "answer": 75,
        "choices": [
          75,
          65,
          85,
          55
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 25,
          "b": 3,
          "parts": [
            60,
            15
          ],
          "result": 75
        },
        "knowledge": "笔算乘法进位",
        "difficulty": 3,
        "hint": "20×3=60，5×3=15，相加",
        "variants": [
          {
            "question": "35×3=?",
            "formula": "35×3=?",
            "answer": 105,
            "hint": "30×3加5×3进位"
          },
          {
            "question": "45×2=?",
            "formula": "45×2=?",
            "answer": 90,
            "hint": "40×2加5×2进位"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「买3箱一共多少元？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校组织春游，每辆大巴坐45人，共3辆。老师要算一共能坐多少人。",
        "question": "3辆大巴一共坐多少人？",
        "formula": "45 × 3 = ?",
        "answer": 135,
        "choices": [
          135,
          125,
          145,
          115
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 45,
          "b": 3,
          "parts": [
            120,
            15
          ],
          "result": 135
        },
        "knowledge": "笔算乘法进位",
        "difficulty": 3,
        "hint": "40×3=120，5×3=15",
        "variants": [
          {
            "question": "55×3=?",
            "formula": "55×3=?",
            "answer": 165,
            "hint": "50×3加5×3"
          },
          {
            "question": "38×4=?",
            "formula": "38×4=?",
            "answer": 152,
            "hint": "30×4加8×4进位"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「3辆大巴一共坐多少人？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "食堂每天用38千克大米，一周5天要用多少千克？厨师长要算一算。",
        "question": "5天一共用多少千克大米？",
        "formula": "38 × 4 = ?",
        "answer": 152,
        "choices": [
          152,
          142,
          162,
          150
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 38,
          "b": 4,
          "parts": [
            120,
            32
          ],
          "result": 152
        },
        "knowledge": "笔算乘法进位",
        "difficulty": 3,
        "hint": "30×4=120，8×4=32",
        "variants": [
          {
            "question": "48×3=?",
            "formula": "48×3=?",
            "answer": 144,
            "hint": "40×3加8×3"
          },
          {
            "question": "56×4=?",
            "formula": "56×4=?",
            "answer": 224,
            "hint": "50×4加6×4进位"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「5天一共用多少千克大米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校体育室有48个足球，每个班分6个。体育老师要算一共能分给几个班。",
        "question": "48个足球每班6个能分几班？",
        "formula": "48 × 6 = ?",
        "answer": 288,
        "choices": [
          288,
          278,
          188,
          298
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 48,
          "b": 6,
          "parts": [
            240,
            48
          ],
          "result": 288
        },
        "knowledge": "笔算乘法连续进位",
        "difficulty": 3,
        "hint": "40×6=240，8×6=48",
        "variants": [
          {
            "question": "58×6=?",
            "formula": "58×6=?",
            "answer": 348,
            "hint": "50×6加8×6"
          },
          {
            "question": "67×5=?",
            "formula": "67×5=?",
            "answer": 335,
            "hint": "60×5加7×5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「48个足球每班6个能分几班？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个书架有75本书，图书馆有8个这样的书架。管理员要算一共多少本书。",
        "question": "8个书架一共多少本书？",
        "formula": "75 × 8 = ?",
        "answer": 600,
        "choices": [
          600,
          500,
          560,
          610
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 75,
          "b": 8,
          "parts": [
            560,
            40
          ],
          "result": 600
        },
        "knowledge": "笔算乘法连续进位",
        "difficulty": 3,
        "hint": "70×8=560，5×8=40",
        "variants": [
          {
            "question": "85×8=?",
            "formula": "85×8=?",
            "answer": 680,
            "hint": "80×8加5×8"
          },
          {
            "question": "69×7=?",
            "formula": "69×7=?",
            "answer": 483,
            "hint": "60×7加9×7进位"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「8个书架一共多少本书？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "工厂每天生产69个零件，一周7天生产多少个？车间主任要算一算。",
        "question": "7天一共生产多少个零件？",
        "formula": "69 × 7 = ?",
        "answer": 483,
        "choices": [
          483,
          463,
          473,
          493
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 69,
          "b": 7,
          "parts": [
            420,
            63
          ],
          "result": 483
        },
        "knowledge": "笔算乘法连续进位",
        "difficulty": 3,
        "hint": "60×7=420，9×7=63",
        "variants": [
          {
            "question": "78×6=?",
            "formula": "78×6=?",
            "answer": 468,
            "hint": "70×6加8×6"
          },
          {
            "question": "89×5=?",
            "formula": "89×5=?",
            "answer": 445,
            "hint": "80×5加9×5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「7天一共生产多少个零件？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校购买图书，每套102元，买了4套。财务要算一共花了多少元。",
        "question": "买4套一共多少元？",
        "formula": "102 × 4 = ?",
        "answer": 408,
        "choices": [
          408,
          108,
          408,
          48
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 102,
          "b": 4,
          "parts": [
            400,
            0,
            8
          ],
          "result": 408
        },
        "knowledge": "因数中间有0的乘法",
        "difficulty": 3,
        "hint": "0乘任何数得0",
        "variants": [
          {
            "question": "204×3=?",
            "formula": "204×3=?",
            "answer": 612,
            "hint": "0位乘得0"
          },
          {
            "question": "308×2=?",
            "formula": "308×2=?",
            "answer": 616,
            "hint": "0位乘得0"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「买4套一共多少元？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "农场有350只鸡，每个鸡舍养3只。农场主想知道一共有多少只鸡。",
        "question": "一共多少只鸡？",
        "formula": "350 × 3 = ?",
        "answer": 1050,
        "choices": [
          1050,
          950,
          1150,
          1005
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 350,
          "b": 3,
          "parts": [
            1050
          ],
          "result": 1050
        },
        "knowledge": "因数末尾有0的乘法",
        "difficulty": 3,
        "hint": "先算35×3=105再添0",
        "variants": [
          {
            "question": "260×3=?",
            "formula": "260×3=?",
            "answer": 780,
            "hint": "26×3=78添0"
          },
          {
            "question": "480×2=?",
            "formula": "480×2=?",
            "answer": 960,
            "hint": "48×2=96添0"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「一共多少只鸡？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "图书馆有206本连环画，每层书架放5本。管理员要算一共多少本连环画。",
        "question": "一共多少本连环画？",
        "formula": "206 × 5 = ?",
        "answer": 1030,
        "choices": [
          1030,
          1000,
          1036,
          2030
        ],
        "visualType": "areaModel",
        "visualData": {
          "a": 206,
          "b": 5,
          "parts": [
            1000,
            0,
            30
          ],
          "result": 1030
        },
        "knowledge": "因数中间有0的乘法",
        "difficulty": 3,
        "hint": "200×5=1000，0×5=0，6×5=30",
        "variants": [
          {
            "question": "307×4=?",
            "formula": "307×4=?",
            "answer": 1228,
            "hint": "0位乘得0"
          },
          {
            "question": "408×3=?",
            "formula": "408×3=?",
            "answer": 1224,
            "hint": "0位乘得0"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「一共多少本连环画？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "数学课上老师让同学们数一数四边形有几条边。小明仔细观察后举手回答。",
        "question": "四边形有几条边？",
        "formula": "四边形边数 = ?",
        "answer": 4,
        "choices": [
          4,
          3,
          5,
          6
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "quadrilateral",
          "params": {
            "sides": 4
          }
        },
        "knowledge": "四边形的认识",
        "difficulty": 1,
        "hint": "四边形有四条边四个角",
        "variants": [
          {
            "question": "四边形有几个角？",
            "formula": "四边形角数=?",
            "answer": 4,
            "hint": "四边形有四个角"
          },
          {
            "question": "三角形有几条边？",
            "formula": "三角形边数=?",
            "answer": 3,
            "hint": "三角形有三条边"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「四边形有几条边？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红在纸上画了一些图形：正方形、三角形、圆形、长方形。她想知道其中四边形有几个。",
        "question": "这些图形中四边形有几个？",
        "formula": "四边形数量 = ?",
        "answer": 3,
        "choices": [
          3,
          2,
          4,
          1
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "quadrilateral",
          "params": {
            "count": 3
          }
        },
        "knowledge": "四边形的认识",
        "difficulty": 1,
        "hint": "四条边的封闭图形是四边形",
        "variants": [
          {
            "question": "正方形、长方形、梯形、圆四边形有几个？",
            "formula": "四边形数量=?",
            "answer": 3,
            "hint": "圆不是四边形"
          },
          {
            "question": "正方形、三角形、平行四边形四边形有几个？",
            "formula": "四边形数量=?",
            "answer": 2,
            "hint": "三角形不是"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「这些图形中四边形有几个？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师拿出一个图形让同学们判断是不是四边形。这个图形有四条边、四个角，且是封闭的。",
        "question": "这个图形是不是四边形？（是填1否填0）",
        "formula": "是四边形 = ?",
        "answer": 1,
        "choices": [
          1,
          0,
          2,
          3
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "quadrilateral",
          "params": {
            "closed": true
          }
        },
        "knowledge": "四边形的认识",
        "difficulty": 1,
        "hint": "四条边四个角且封闭",
        "variants": [
          {
            "question": "有5条边的图形是四边形吗（是1否0）？",
            "formula": "是四边形=?",
            "answer": 0,
            "hint": "五边形不是四边形"
          },
          {
            "question": "有3条边的图形是四边形吗（是1否0）？",
            "formula": "是四边形=?",
            "answer": 0,
            "hint": "三角形不是"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「这个图形是不是四边形？（是填1否填0）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红用尺子量了一个长方形，发现相对的两条边长度一样。她好奇长方形对边有什么特征。",
        "question": "长方形对边有什么特征？",
        "formula": "长方形对边 = ?",
        "answer": 1,
        "choices": [
          1,
          0,
          2,
          3
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 8,
            "width": 5
          }
        },
        "knowledge": "长方形正方形特征",
        "difficulty": 2,
        "hint": "长方形对边相等",
        "variants": [
          {
            "question": "长方形四个角都是什么角(直角1锐角2)？",
            "formula": "角的类型=?",
            "answer": 1,
            "hint": "四个直角"
          },
          {
            "question": "正方形四条边有什么特征(相等1不等2)？",
            "formula": "四边关系=?",
            "answer": 1,
            "hint": "四边相等"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「长方形对边有什么特征？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮用尺子量正方形，发现四条边都一样长。他想知道正方形的边长是几厘米。",
        "question": "正方形边长5厘米，四条边一共多少厘米？",
        "formula": "5 + 5 + 5 + 5 = ?",
        "answer": 20,
        "choices": [
          20,
          10,
          15,
          25
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 20,
          "parts": [
            {
              "label": "边1",
              "val": 5,
              "color": "#00A896"
            },
            {
              "label": "边2",
              "val": 5,
              "color": "#F5B800"
            },
            {
              "label": "边3",
              "val": 5,
              "color": "#FB923C"
            },
            {
              "label": "边4",
              "val": 5,
              "color": "#E8A0BF"
            }
          ]
        },
        "knowledge": "长方形正方形特征",
        "difficulty": 2,
        "hint": "四条边都相等",
        "variants": [
          {
            "question": "边长6正方形四边一共几cm？",
            "formula": "6×4=?",
            "answer": 24,
            "hint": "6乘4"
          },
          {
            "question": "边长8正方形四边一共几cm？",
            "formula": "8×4=?",
            "answer": 32,
            "hint": "8乘4"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「正方形边长5厘米，四条边一共多少厘米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师让同学们画一个长方形，长8厘米宽5厘米。小红画好后用三角尺量了四个角。",
        "question": "长方形四个角一共多少度？",
        "formula": "90 × 4 = ?",
        "answer": 360,
        "choices": [
          360,
          180,
          90,
          270
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 8,
            "width": 5
          }
        },
        "knowledge": "长方形正方形特征",
        "difficulty": 2,
        "hint": "每个角90度，4个角",
        "variants": [
          {
            "question": "正方形四个角一共多少度？",
            "formula": "90×4=?",
            "answer": 360,
            "hint": "四个直角"
          },
          {
            "question": "长方形两个角一共多少度？",
            "formula": "90×2=?",
            "answer": 180,
            "hint": "两个直角"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「长方形四个角一共多少度？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红沿花坛走了一圈，走了12米。老师告诉她这就是花坛的周长。小红好奇周长是什么意思。",
        "question": "花坛的周长是多少米？",
        "formula": "周长 = ?",
        "answer": 12,
        "choices": [
          12,
          6,
          24,
          3
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 4,
            "width": 2
          }
        },
        "knowledge": "周长",
        "difficulty": 1,
        "hint": "封闭图形一周的长度",
        "variants": [
          {
            "question": "沿操场走一圈200米周长多少？",
            "formula": "周长=?",
            "answer": 200,
            "hint": "一圈的长度"
          },
          {
            "question": "沿池塘走一圈80米周长多少？",
            "formula": "周长=?",
            "answer": 80,
            "hint": "一周的长度"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「花坛的周长是多少米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个三角形三边分别是3厘米、4厘米、5厘米。小亮要算它的周长。",
        "question": "三角形的周长是多少厘米？",
        "formula": "3 + 4 + 5 = ?",
        "answer": 12,
        "choices": [
          12,
          7,
          15,
          60
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 12,
          "parts": [
            {
              "label": "边1",
              "val": 3,
              "color": "#00A896"
            },
            {
              "label": "边2",
              "val": 4,
              "color": "#F5B800"
            },
            {
              "label": "边3",
              "val": 5,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "周长",
        "difficulty": 1,
        "hint": "三条边相加",
        "variants": [
          {
            "question": "三边5,5,5周长？",
            "formula": "5+5+5=?",
            "answer": 15,
            "hint": "三边相加"
          },
          {
            "question": "三边4,5,6周长？",
            "formula": "4+5+6=?",
            "answer": 15,
            "hint": "三边相加"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「三角形的周长是多少厘米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "正方形边长6厘米，小红要算它的周长。她记得正方形四边相等。",
        "question": "正方形的周长是多少厘米？",
        "formula": "6 × 4 = ?",
        "answer": 24,
        "choices": [
          24,
          12,
          36,
          10
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 24,
          "parts": [
            {
              "label": "边1",
              "val": 6,
              "color": "#00A896"
            },
            {
              "label": "边2",
              "val": 6,
              "color": "#F5B800"
            },
            {
              "label": "边3",
              "val": 6,
              "color": "#FB923C"
            },
            {
              "label": "边4",
              "val": 6,
              "color": "#E8A0BF"
            }
          ]
        },
        "knowledge": "周长",
        "difficulty": 1,
        "hint": "边长×4",
        "variants": [
          {
            "question": "边长7正方形周长？",
            "formula": "7×4=?",
            "answer": 28,
            "hint": "7乘4"
          },
          {
            "question": "边长9正方形周长？",
            "formula": "9×4=?",
            "answer": 36,
            "hint": "9乘4"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「正方形的周长是多少厘米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "社区要在花园里修一个长方形花坛，长8米、宽5米。工人师傅要在花坛四周围上一圈栅栏。",
        "question": "花坛的周长是多少米？",
        "formula": "(8 + 5) × 2 = ?",
        "answer": 26,
        "choices": [
          26,
          13,
          40,
          21
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 8,
            "width": 5
          }
        },
        "knowledge": "长方形正方形周长",
        "difficulty": 2,
        "hint": "周长=(长+宽)×2",
        "variants": [
          {
            "question": "长6宽4周长？",
            "formula": "(6+4)×2=?",
            "answer": 20,
            "hint": "长加宽再乘2"
          },
          {
            "question": "长10宽7周长？",
            "formula": "(10+7)×2=?",
            "answer": 34,
            "hint": "先算长加宽"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「花坛的周长是多少米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明的书桌是个长方形，长12分米、宽8分米。妈妈想给书桌贴一圈防撞条。",
        "question": "需要多长的防撞条？",
        "formula": "(12 + 8) × 2 = ?",
        "answer": 40,
        "choices": [
          40,
          20,
          96,
          28
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 12,
            "width": 8
          }
        },
        "knowledge": "长方形正方形周长",
        "difficulty": 2,
        "hint": "(长+宽)×2",
        "variants": [
          {
            "question": "长15宽10周长？",
            "formula": "(15+10)×2=?",
            "answer": 50,
            "hint": "长加宽乘2"
          },
          {
            "question": "长9宽6周长？",
            "formula": "(9+6)×2=?",
            "answer": 30,
            "hint": "长加宽乘2"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「需要多长的防撞条？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校有一块正方形草坪，边长15米。园丁要在草坪四周修一圈小路。",
        "question": "小路一共长多少米？",
        "formula": "15 × 4 = ?",
        "answer": 60,
        "choices": [
          60,
          30,
          225,
          45
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "square",
          "params": {
            "side": 15
          }
        },
        "knowledge": "长方形正方形周长",
        "difficulty": 2,
        "hint": "正方形周长=边长×4",
        "variants": [
          {
            "question": "边长12正方形周长？",
            "formula": "12×4=?",
            "answer": 48,
            "hint": "边长乘4"
          },
          {
            "question": "边长20正方形周长？",
            "formula": "20×4=?",
            "answer": 80,
            "hint": "边长乘4"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「小路一共长多少米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "王伯伯要在院子里靠墙围一个长方形菜地，长8米、宽5米，长边靠墙。他要算需要多少米篱笆。",
        "question": "需要多少米篱笆？",
        "formula": "5 + 5 + 8 = ?",
        "answer": 18,
        "choices": [
          18,
          26,
          13,
          21
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 8,
            "width": 5,
            "againstWall": true
          }
        },
        "knowledge": "周长实际问题",
        "difficulty": 3,
        "hint": "靠墙一边不算，两个宽加一个长",
        "variants": [
          {
            "question": "长10宽6长边靠墙需几米篱笆？",
            "formula": "6+6+10=?",
            "answer": 22,
            "hint": "两宽加一长"
          },
          {
            "question": "长12宽8长边靠墙需几米篱笆？",
            "formula": "8+8+12=?",
            "answer": 28,
            "hint": "两宽加一长"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「需要多少米篱笆？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "两个边长4厘米的正方形拼成一个长方形。小亮要算拼成后的长方形周长。",
        "question": "拼成的长方形周长是多少厘米？",
        "formula": "(8 + 4) × 2 = ?",
        "answer": 24,
        "choices": [
          24,
          32,
          16,
          20
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 8,
            "width": 4
          }
        },
        "knowledge": "周长实际问题",
        "difficulty": 3,
        "hint": "拼后长8宽4，周长=(8+4)×2",
        "variants": [
          {
            "question": "两个边长3正方形拼成长方形周长？",
            "formula": "(6+3)×2=?",
            "answer": 18,
            "hint": "长6宽3"
          },
          {
            "question": "两个边长5正方形拼成长方形周长？",
            "formula": "(10+5)×2=?",
            "answer": 30,
            "hint": "长10宽5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「拼成的长方形周长是多少厘米？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "李阿姨要给长10米、宽6米的长方形花园围篱笆，宽边靠墙。她要算需要多少米篱笆。",
        "question": "需要多少米篱笆？",
        "formula": "10 + 10 + 6 = ?",
        "answer": 26,
        "choices": [
          26,
          32,
          16,
          20
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 10,
            "width": 6,
            "againstWall": "width"
          }
        },
        "knowledge": "周长实际问题",
        "difficulty": 3,
        "hint": "宽边靠墙，两个长加一个宽",
        "variants": [
          {
            "question": "长12宽8宽边靠墙需几米？",
            "formula": "12+12+8=?",
            "answer": 32,
            "hint": "两长加一宽"
          },
          {
            "question": "长15宽9宽边靠墙需几米？",
            "formula": "15+15+9=?",
            "answer": 39,
            "hint": "两长加一宽"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「需要多少米篱笆？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "妈妈把一个圆形大蛋糕平均切成8块。小明吃了其中1块，他想知道自己吃了这块蛋糕的几分之几。",
        "question": "小明吃了这块蛋糕的几分之一？（填分母）",
        "formula": "1 / ?",
        "answer": 8,
        "choices": [
          8,
          1,
          7,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "fractionCircle",
          "params": {
            "numerator": 1,
            "denominator": 8,
            "color": "#00A896"
          }
        },
        "knowledge": "分数初步认识",
        "difficulty": 1,
        "hint": "平均分成8份每份是1/8",
        "variants": [
          {
            "question": "蛋糕分6份每份是几分之一（填分母）？",
            "formula": "1/?",
            "answer": 6,
            "hint": "分6份就是1/6"
          },
          {
            "question": "蛋糕分4份每份是几分之一（填分母）？",
            "formula": "1/?",
            "answer": 4,
            "hint": "分4份就是1/4"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「小明吃了这块蛋糕的几分之一？（填分母）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把一根彩带平均分成5段，取其中1段来折花。她想知道这1段是整根彩带的几分之几。",
        "question": "1段是整根彩带的几分之一？（填分母）",
        "formula": "1 / ?",
        "answer": 5,
        "choices": [
          5,
          1,
          4,
          10
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "分数初步认识",
        "difficulty": 1,
        "hint": "平均分成5份每份是1/5",
        "variants": [
          {
            "question": "分10段每段是几分之一（填分母）？",
            "formula": "1/?",
            "answer": 10,
            "hint": "分10份就是1/10"
          },
          {
            "question": "分3段每段是几分之一（填分母）？",
            "formula": "1/?",
            "answer": 3,
            "hint": "分3份就是1/3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「1段是整根彩带的几分之一？（填分母）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮把一张正方形纸平均折成4份，把其中1份涂上颜色。他想知道涂色部分是整张纸的几分之几。",
        "question": "涂色部分是整张纸的几分之一？（填分母）",
        "formula": "1 / ?",
        "answer": 4,
        "choices": [
          4,
          1,
          3,
          8
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数初步认识",
        "difficulty": 1,
        "hint": "平均分成4份每份是1/4",
        "variants": [
          {
            "question": "折成2份每份是几分之一（填分母）？",
            "formula": "1/?",
            "answer": 2,
            "hint": "分2份就是1/2"
          },
          {
            "question": "折成8份每份是几分之一（填分母）？",
            "formula": "1/?",
            "answer": 8,
            "hint": "分8份就是1/8"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「涂色部分是整张纸的几分之一？（填分母）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 圆形模型",
            "text": "把一个圆平均分成4份，取其中1份，就是1/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 分数含义",
            "text": "1/4 表示把整体平均分成4份，取其中1份",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 分数条",
            "text": "也可以这样表示：把一条线段平均分成4份，取其中1份",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红的蛋糕切成了3份，小亮的蛋糕切成了5份，都是同样大的蛋糕。老师问谁的1份更大。",
        "question": "1/3和1/5哪个分母对应的1份更大？（填较大的分母）",
        "formula": "1/3 > 1/?",
        "answer": 5,
        "choices": [
          5,
          3,
          8,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 5,
          "color": "#F5B800"
        },
        "knowledge": "分数比较大小",
        "difficulty": 2,
        "hint": "分子相同分母小的反而大",
        "variants": [
          {
            "question": "1/4和1/6谁大(填较大分母)？",
            "formula": "1/4>1/?",
            "answer": 6,
            "hint": "分子相同分母小的大"
          },
          {
            "question": "1/3和1/7谁大(填较大分母)？",
            "formula": "1/3>1/?",
            "answer": 7,
            "hint": "分母小的大"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「1/3和1/5哪个分母对应的1份更大？（填较大的分母）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "两个同样大的比萨，小红吃了2/5，小明吃了3/5。老师问谁吃得更多。",
        "question": "2/5和3/5谁大？（填较大的分子）",
        "formula": "3/5 > 2/?",
        "answer": 5,
        "choices": [
          5,
          2,
          3,
          10
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "分数比较大小",
        "difficulty": 2,
        "hint": "分母相同分子大的大",
        "variants": [
          {
            "question": "3/7和4/7谁大(填较大分子)？",
            "formula": "4/7>3/?",
            "answer": 7,
            "hint": "分子大的大"
          },
          {
            "question": "5/8和3/8谁大(填较大分子)？",
            "formula": "5/8>3/?",
            "answer": 8,
            "hint": "分子大的大"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「2/5和3/5谁大？（填较大的分子）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小芳有1/4块巧克力，小亮有1/6块同样大的巧克力。老师问谁的巧克力更多。",
        "question": "1/4和1/6谁大？（填较大的分母）",
        "formula": "1/4 > 1/?",
        "answer": 6,
        "choices": [
          6,
          4,
          2,
          10
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数比较大小",
        "difficulty": 2,
        "hint": "分子相同分母小的反而大",
        "variants": [
          {
            "question": "1/5和1/8谁大(填较大分母)？",
            "formula": "1/5>1/?",
            "answer": 8,
            "hint": "分母小的大"
          },
          {
            "question": "1/3和1/9谁大(填较大分母)？",
            "formula": "1/3>1/?",
            "answer": 9,
            "hint": "分母小的大"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「1/4和1/6谁大？（填较大的分母）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红第一次吃了1/5块蛋糕，第二次吃了2/5块。她想知道两次一共吃了这块蛋糕的几分之几。",
        "question": "两次一共吃了这块蛋糕的几分之几？（填分子）",
        "formula": "1/5 + 2/5 = ?/5",
        "answer": 3,
        "choices": [
          3,
          2,
          5,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "同分母分数加减",
        "difficulty": 2,
        "hint": "分母不变分子相加",
        "variants": [
          {
            "question": "2/7+3/7=?/7(填分子)",
            "formula": "2/7+3/7=?",
            "answer": 5,
            "hint": "分子相加"
          },
          {
            "question": "1/8+4/8=?/8(填分子)",
            "formula": "1/8+4/8=?",
            "answer": 5,
            "hint": "分子相加"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「两次一共吃了这块蛋糕的几分之几？（填分子）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一卷彩带长5/7米，用去了1/7米。小芳想知道还剩几分之几米彩带。",
        "question": "还剩几分之几米彩带？（填分子）",
        "formula": "5/7 - 1/7 = ?/7",
        "answer": 4,
        "choices": [
          4,
          6,
          3,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 4,
          "total": 7,
          "color": "#00A896"
        },
        "knowledge": "同分母分数加减",
        "difficulty": 2,
        "hint": "分母不变分子相减",
        "variants": [
          {
            "question": "6/8-2/8=?/8(填分子)",
            "formula": "6/8-2/8=?",
            "answer": 4,
            "hint": "分子相减"
          },
          {
            "question": "7/9-3/9=?/9(填分子)",
            "formula": "7/9-3/9=?",
            "answer": 4,
            "hint": "分子相减"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「还剩几分之几米彩带？（填分子）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "妈妈把一个大比萨切成9块，小红吃了2块，小明吃了3块。他们一共吃了这个比萨的几分之几。",
        "question": "他们一共吃了比萨的几分之几？（填分子）",
        "formula": "2/9 + 3/9 = ?/9",
        "answer": 5,
        "choices": [
          5,
          6,
          9,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 5,
          "total": 9,
          "color": "#00A896"
        },
        "knowledge": "同分母分数加减",
        "difficulty": 2,
        "hint": "分母不变分子相加",
        "variants": [
          {
            "question": "3/10+4/10=?/10(填分子)",
            "formula": "3/10+4/10=?",
            "answer": 7,
            "hint": "分子相加"
          },
          {
            "question": "2/6+3/6=?/6(填分子)",
            "formula": "2/6+3/6=?",
            "answer": 5,
            "hint": "分子相加"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「他们一共吃了比萨的几分之几？（填分子）」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "妈妈买了24个草莓，小红吃了其中的1/3。小红吃了多少个草莓？",
        "question": "小红吃了多少个草莓？",
        "formula": "24 ÷ 3 × 1 = ?",
        "answer": 8,
        "choices": [
          8,
          6,
          12,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 24,
          "parts": [
            {
              "label": "1/3",
              "val": 8,
              "color": "#00A896"
            },
            {
              "label": "1/3",
              "val": 8,
              "color": "#F5B800"
            },
            {
              "label": "1/3",
              "val": 8,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "分数简单应用",
        "difficulty": 2,
        "hint": "先算24÷3=8",
        "variants": [
          {
            "question": "24个草莓吃1/4吃了几个？",
            "formula": "24÷4=?",
            "answer": 6,
            "hint": "24除4"
          },
          {
            "question": "24个草莓吃1/6吃了几个？",
            "formula": "24÷6=?",
            "answer": 4,
            "hint": "24除6"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「小红吃了多少个草莓？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "班里有30个同学，其中2/5是女生。老师要算班里有几个女生。",
        "question": "班里有几个女生？",
        "formula": "30 ÷ 5 × 2 = ?",
        "answer": 12,
        "choices": [
          12,
          10,
          15,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 30,
          "parts": [
            {
              "label": "1/5",
              "val": 6,
              "color": "#00A896"
            },
            {
              "label": "1/5",
              "val": 6,
              "color": "#F5B800"
            },
            {
              "label": "2/5女生",
              "val": 12,
              "color": "#FB923C"
            },
            {
              "label": "2/5",
              "val": 6,
              "color": "#E8A0BF"
            }
          ]
        },
        "knowledge": "分数简单应用",
        "difficulty": 2,
        "hint": "先算30÷5=6，再算6×2=12",
        "variants": [
          {
            "question": "30人3/5是男生几人？",
            "formula": "30÷5×3=?",
            "answer": 18,
            "hint": "先除再乘"
          },
          {
            "question": "40人2/5是女生几人？",
            "formula": "40÷5×2=?",
            "answer": 16,
            "hint": "先除再乘"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「班里有几个女生？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一根彩带长20米，小红用了其中的3/4。她用了多少米彩带？",
        "question": "小红用了多少米彩带？",
        "formula": "20 ÷ 4 × 3 = ?",
        "answer": 15,
        "choices": [
          15,
          12,
          5,
          10
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 20,
          "parts": [
            {
              "label": "3/4用了",
              "val": 15,
              "color": "#00A896"
            },
            {
              "label": "1/4剩",
              "val": 5,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "分数简单应用",
        "difficulty": 2,
        "hint": "先算20÷4=5，再算5×3=15",
        "variants": [
          {
            "question": "20米用2/5用了几米？",
            "formula": "20÷5×2=?",
            "answer": 8,
            "hint": "先除再乘"
          },
          {
            "question": "24米用5/6用了几米？",
            "formula": "24÷6×5=?",
            "answer": 20,
            "hint": "先除再乘"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「小红用了多少米彩带？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "三(1)班参加数学兴趣小组的有15人，参加英语兴趣小组的有12人，两个都参加的有5人。老师要算一共有多少人参加兴趣小组。",
        "question": "一共有多少人参加兴趣小组？",
        "formula": "15 + 12 - 5 = ?",
        "answer": 22,
        "choices": [
          22,
          32,
          27,
          17
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 22,
          "parts": [
            {
              "label": "只数学",
              "val": 10,
              "color": "#00A896"
            },
            {
              "label": "都参加",
              "val": 5,
              "color": "#F5B800"
            },
            {
              "label": "只英语",
              "val": 7,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "集合",
        "difficulty": 2,
        "hint": "两个都参加的重复算了要减去",
        "variants": [
          {
            "question": "10人苹果8人香蕉3人都喜欢共几人？",
            "formula": "10+8-3=?",
            "answer": 15,
            "hint": "重复算的要减"
          },
          {
            "question": "20人体育15人音乐6人都参加共几人？",
            "formula": "20+15-6=?",
            "answer": 29,
            "hint": "重复算的要减"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「一共有多少人参加兴趣小组？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "同学们喜欢吃苹果的有10人，喜欢吃香蕉的有8人，两种都喜欢的有3人。老师要算一共有多少个同学。",
        "question": "一共有多少个同学？",
        "formula": "10 + 8 - 3 = ?",
        "answer": 15,
        "choices": [
          15,
          21,
          18,
          11
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 15,
          "parts": [
            {
              "label": "只苹果",
              "val": 7,
              "color": "#00A896"
            },
            {
              "label": "都喜欢",
              "val": 3,
              "color": "#F5B800"
            },
            {
              "label": "只香蕉",
              "val": 5,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "集合",
        "difficulty": 2,
        "hint": "两个都喜欢的重复算了要减",
        "variants": [
          {
            "question": "12人猫8人狗4人都喜欢共几人？",
            "formula": "12+8-4=?",
            "answer": 16,
            "hint": "重复减去"
          },
          {
            "question": "15人红10人蓝5人都喜欢共几人？",
            "formula": "15+10-5=?",
            "answer": 20,
            "hint": "重复减去"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「一共有多少个同学？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "三(2)班喜欢足球的有20人，喜欢篮球的有15人，两个都喜欢的有6人。班主任要算一共有多少同学喜欢球类运动。",
        "question": "一共有多少同学喜欢球类运动？",
        "formula": "20 + 15 - 6 = ?",
        "answer": 29,
        "choices": [
          29,
          41,
          35,
          23
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 29,
          "parts": [
            {
              "label": "只足球",
              "val": 14,
              "color": "#00A896"
            },
            {
              "label": "都喜欢",
              "val": 6,
              "color": "#F5B800"
            },
            {
              "label": "只篮球",
              "val": 9,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "集合",
        "difficulty": 2,
        "hint": "两个都喜欢的重复算了要减去",
        "variants": [
          {
            "question": "18人画10人唱5人都喜欢共几人？",
            "formula": "18+10-5=?",
            "answer": 23,
            "hint": "重复减去"
          },
          {
            "question": "25人游12人跑8人都喜欢共几人？",
            "formula": "25+12-8=?",
            "answer": 29,
            "hint": "重复减去"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "认真读题理解问题",
              "直接看答案",
              "猜一个",
              "跳过"
            ],
            "answer": "认真读题理解问题",
            "explain": "题目问的是「一共有多少同学喜欢球类运动？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分析已知条件",
              "不看条件",
              "猜数字",
              "随便选"
            ],
            "answer": "分析已知条件",
            "explain": "找出题目中给出的所有数字和条件"
          },
          {
            "q": "🧩 用什么方法解决？",
            "choices": [
              "根据问题选择合适方法",
              "随便选",
              "加法",
              "减法"
            ],
            "answer": "根据问题选择合适方法",
            "explain": "根据问题类型选择合适的运算方法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "观察图形，理解各部分之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "理解题目中的数学关系",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "掌握这类问题的通用解法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      }
    ],
    "knowledgeMap": [
      {
        "id": "3A-01",
        "name": "秒的认识",
        "concept": "1分=60秒，秒是更细的时间单位",
        "prerequisite": "二下·认识钟表",
        "extends": "3A-02 时间计算",
        "visualStrategy": "钟面动态",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "3A-02",
        "name": "时间计算",
        "concept": "经过时间=结束时刻-开始时刻，跨小时要分段",
        "prerequisite": "秒的认识",
        "extends": "3B-20 24时计时法",
        "visualStrategy": "时间线",
        "visualType": "numberLine",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-03",
        "name": "两位数加两位数口算",
        "concept": "拆数法（35+27=35+20+7）",
        "prerequisite": "二下·100以内加减",
        "extends": "3A-10 万以内加法笔算",
        "visualStrategy": "数轴跳跃",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-04",
        "name": "两位数减两位数口算",
        "concept": "拆数法（65-28=65-20-8）",
        "prerequisite": "两位数加两位数口算",
        "extends": "3A-11 万以内减法笔算",
        "visualStrategy": "数轴跳跃",
        "visualType": "numberBond",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-05",
        "name": "几百几十加减几百几十",
        "concept": "看作几十几个十相加减",
        "prerequisite": "两位数加减口算",
        "extends": "3A-10 万以内加法笔算",
        "visualStrategy": "竖式格子",
        "visualType": "barModel",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-06",
        "name": "毫米的认识",
        "concept": "1cm=10mm，毫米量短小物体",
        "prerequisite": "二上·厘米和米",
        "extends": "3A-07 分米的认识",
        "visualStrategy": "实物对比",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "3A-07",
        "name": "分米的认识",
        "concept": "1dm=10cm，1m=10dm",
        "prerequisite": "毫米的认识",
        "extends": "3A-08 千米的认识",
        "visualStrategy": "实物对比",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "3A-08",
        "name": "千米的认识",
        "concept": "1km=1000m，千米量长距离",
        "prerequisite": "分米的认识",
        "extends": "4A-08 公顷的认识",
        "visualStrategy": "实物对比+场景",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-09",
        "name": "吨的认识",
        "concept": "1t=1000kg，吨量重物体",
        "prerequisite": "千克和克",
        "extends": "4A-08 公顷的认识",
        "visualStrategy": "实物对比+场景",
        "visualType": "barModel",
        "coreLiteracy": "量感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-10",
        "name": "万以内加法笔算",
        "concept": "相同数位对齐，从个位加起，满十进一",
        "prerequisite": "口算加减",
        "extends": "3A-12 加减法验算",
        "visualStrategy": "竖式格子+箭头",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-11",
        "name": "万以内减法笔算",
        "concept": "相同数位对齐，从个位减起，不够借一当十",
        "prerequisite": "加法笔算",
        "extends": "3A-12 加减法验算",
        "visualStrategy": "竖式格子+箭头",
        "visualType": "numberBond",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-12",
        "name": "加减法验算",
        "concept": "和-加数=另一个加数；差+减数=被减数",
        "prerequisite": "加减法笔算",
        "extends": "4B-01 加减法意义",
        "visualStrategy": "竖式格子",
        "visualType": "numberBond",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-13",
        "name": "倍的认识",
        "concept": "一个数是另一个的几倍=除法；几倍是多少=乘法（合并3A-13/14/15）",
        "prerequisite": "表内乘法",
        "extends": "3A-14 口算乘法",
        "visualStrategy": "条形对比",
        "visualType": "barModel",
        "coreLiteracy": "几何直观+模型意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-14",
        "name": "口算乘法（整十整百乘一位数）",
        "concept": "2×3=6 → 20×3=60，先算表内乘法再添0",
        "prerequisite": "表内乘法",
        "extends": "3A-15 笔算乘法",
        "visualStrategy": "面积模型",
        "visualType": "areaModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-15",
        "name": "笔算乘法（两三位数乘一位数，不进位）",
        "concept": "从个位乘起，每一位分别乘",
        "prerequisite": "口算乘法",
        "extends": "3A-16 笔算乘法进位",
        "visualStrategy": "竖式格子+面积模型",
        "visualType": "areaModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-16",
        "name": "笔算乘法（进位）",
        "concept": "满几十向前一位进几",
        "prerequisite": "不进位笔算",
        "extends": "3A-17 连续进位",
        "visualStrategy": "竖式格子+箭头",
        "visualType": "areaModel",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "3A-17",
        "name": "笔算乘法（连续进位）",
        "concept": "连续进位时逐位处理，不要跳步",
        "prerequisite": "进位笔算",
        "extends": "3A-18 因数有0",
        "visualStrategy": "竖式格子+箭头",
        "visualType": "areaModel",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "3A-18",
        "name": "笔算乘法（因数中间/末尾有0）",
        "concept": "0乘任何数得0，末尾0先不算最后补",
        "prerequisite": "连续进位笔算",
        "extends": "3B-12 两位数乘两位数",
        "visualStrategy": "竖式格子",
        "visualType": "areaModel",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "3A-19",
        "name": "四边形的认识",
        "concept": "四条边、四个角、封闭图形",
        "prerequisite": "二下·认识图形",
        "extends": "3A-20 长方形正方形特征",
        "visualStrategy": "几何分类图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "3A-20",
        "name": "长方形和正方形的特征",
        "concept": "长方形对边相等四角直角，正方形四边等长",
        "prerequisite": "四边形认识",
        "extends": "3A-21 周长",
        "visualStrategy": "几何标注图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-21",
        "name": "周长",
        "concept": "封闭图形一周的长度",
        "prerequisite": "四边形特征",
        "extends": "3A-22 长方形正方形周长",
        "visualStrategy": "描边示意图",
        "visualType": "barModel",
        "coreLiteracy": "量感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "3A-22",
        "name": "长方形和正方形的周长",
        "concept": "长方形周长=(长+宽)×2，正方形周长=边长×4",
        "prerequisite": "周长概念",
        "extends": "3A-23 周长实际问题",
        "visualStrategy": "几何标注图",
        "visualType": "geometry",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-23",
        "name": "解决周长实际问题",
        "concept": "拼图形求周长、一面靠墙围篱笆",
        "prerequisite": "周长计算",
        "extends": "3B-15 面积",
        "visualStrategy": "场景示意图",
        "visualType": "geometry",
        "coreLiteracy": "应用意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "3A-24",
        "name": "分数的初步认识（几分之一）",
        "concept": "把一个整体平均分成几份，每份是几分之一",
        "prerequisite": "表内除法",
        "extends": "3A-25 分数比较",
        "visualStrategy": "面积模型（等分图）",
        "visualType": "fractionStrip",
        "coreLiteracy": "数感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "3A-25",
        "name": "分数比较大小（同分子或同分母）",
        "concept": "分母相同分子大的大；分子相同分母大的反而小",
        "prerequisite": "几分之一",
        "extends": "3A-26 同分母加减",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-26",
        "name": "同分母分数加减",
        "concept": "分母不变，分子相加减",
        "prerequisite": "分数比较",
        "extends": "3A-27 分数应用",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-27",
        "name": "分数的简单应用",
        "concept": "求一个整体的几分之几是多少",
        "prerequisite": "同分母分数加减",
        "extends": "3B-22 小数初步",
        "visualStrategy": "面积模型+条形对比",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "3A-28",
        "name": "集合（韦恩图）",
        "concept": "重叠部分表示同时属于两个集合",
        "prerequisite": "分类统计",
        "extends": "3B-25 搭配二",
        "visualStrategy": "韦恩图",
        "visualType": "barModel",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": true
      }
    ]
  };
