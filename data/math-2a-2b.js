// 二年级数学数据（人教版 2024 版新教材）
// 全局变量：window.MATH_GRADE_2 = { '2a': {...}, '2b': {...} }
window.MATH_GRADE_2 = {
  "2a": {
    "title": "二年级上册·1~6 表内乘除法与厘米和米",
    "sub": "数与代数 · 图形与几何 · 综合实践",
    "progress": 0,
    "units": [
      {
        "name": "分类与整理",
        "level": "current",
        "children": [
          {
            "name": "按不同标准分类",
            "level": "done"
          },
          {
            "name": "整理成统计表",
            "level": "current"
          }
        ]
      },
      {
        "name": "1-6的表内乘法",
        "level": "current",
        "children": [
          {
            "name": "乘法的初步认识",
            "level": "done"
          },
          {
            "name": "2-6的乘法口诀",
            "level": "current"
          },
          {
            "name": "乘法解决问题",
            "level": "locked"
          }
        ]
      },
      {
        "name": "1-6的表内除法",
        "level": "locked",
        "children": [
          {
            "name": "除法的初步认识",
            "level": "locked"
          },
          {
            "name": "用乘法口诀求商",
            "level": "locked"
          }
        ]
      },
      {
        "name": "校园小导游（综合实践）",
        "level": "locked",
        "children": [
          {
            "name": "描述路线",
            "level": "locked"
          },
          {
            "name": "绘制路线图",
            "level": "locked"
          }
        ]
      },
      {
        "name": "厘米和米",
        "level": "locked",
        "children": [
          {
            "name": "认识厘米",
            "level": "locked"
          },
          {
            "name": "认识米",
            "level": "locked"
          },
          {
            "name": "测量与换算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "身体上的尺子（综合实践）",
        "level": "locked",
        "children": [
          {
            "name": "一拃、一步、一庹",
            "level": "locked"
          },
          {
            "name": "用身体尺估测",
            "level": "locked"
          }
        ]
      },
      {
        "name": "7-9的表内乘、除法",
        "level": "locked",
        "children": [
          {
            "name": "7-9的乘法口诀",
            "level": "locked"
          },
          {
            "name": "用口诀求商",
            "level": "locked"
          }
        ]
      },
      {
        "name": "复习与关联",
        "level": "locked",
        "children": [
          {
            "name": "数与运算",
            "level": "locked"
          },
          {
            "name": "数量关系",
            "level": "locked"
          }
        ]
      }
    ],
    "knowledgeMap": [
      {
        "id": "2A-01",
        "name": "厘米和米",
        "concept": "1米=100厘米，量较长物体用米，量较短物体用厘米",
        "prerequisite": "一上·10以内数",
        "extends": "2A-02 线段",
        "visualStrategy": "条形图分段",
        "visualType": "barModel",
        "coreLiteracy": "量感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "2A-02",
        "name": "线段",
        "concept": "线段是直的，有两个端点，可以量出长度",
        "prerequisite": "2A-01 厘米和米",
        "extends": "2A-03 不进位加法",
        "visualStrategy": "尺子测量",
        "visualType": "numberLine",
        "coreLiteracy": "几何直观",
        "difficulty": 1,
        "isKeyTopic": false
      },
      {
        "id": "2A-03",
        "name": "100以内进位加法",
        "concept": "个位满十向十位进一，相同数位对齐从个位算起",
        "prerequisite": "2A-02 线段",
        "extends": "2A-04 不退位减法",
        "visualStrategy": "条形图合并",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "2A-04",
        "name": "100以内退位减法",
        "concept": "个位不够减从十位借一当十，相同数位对齐从个位算起",
        "prerequisite": "2A-03 进位加法",
        "extends": "2A-05 加减混合",
        "visualStrategy": "数轴回退",
        "visualType": "numberLine",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "2A-05",
        "name": "加减混合运算",
        "concept": "从左到右依次计算，先算前两个数再加或减第三个数",
        "prerequisite": "2A-04 退位减法",
        "extends": "2A-06 表内乘法",
        "visualStrategy": "步骤拆解条形图",
        "visualType": "barModel",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "2A-06",
        "name": "表内乘法·2-4口诀",
        "concept": "求几个相同加数的和用乘法，二四得八、三四十二等",
        "prerequisite": "2A-05 加减混合",
        "extends": "2A-07 表内乘法·5-6口诀",
        "visualStrategy": "条形图分组",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "2A-07",
        "name": "表内乘法·5-6口诀",
        "concept": "五的乘法口诀积的个位是0或5，六的乘法口诀积逐次加6",
        "prerequisite": "2A-06 2-4口诀",
        "extends": "2A-08 角的认识",
        "visualStrategy": "数轴等距跳跃",
        "visualType": "numberLine",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "2A-08",
        "name": "角的初步认识",
        "concept": "角有一个顶点和两条边，直角=90°，锐角<90°，钝角>90°",
        "prerequisite": "2A-07 5-6口诀",
        "extends": "2A-09 观察物体",
        "visualStrategy": "动态角演示",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "2A-09",
        "name": "观察物体（一）",
        "concept": "从不同方向观察同一物体，看到的形状可能不同，长方体从一个方向最多看到3个面",
        "prerequisite": "2A-08 角的认识",
        "extends": "2A-10 认识时间",
        "visualStrategy": "多视角对比",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "2A-10",
        "name": "认识时间·1时=60分",
        "concept": "钟面上1圈是60分，时针走1大格是1时，1时=60分",
        "prerequisite": "2A-09 观察物体",
        "extends": "2A-11 几时几分",
        "visualStrategy": "钟表动态",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "2A-11",
        "name": "认识时间·几时几分",
        "concept": "时针指几过几就是几时几分，分针指几乘5就是几分",
        "prerequisite": "2A-10 1时=60分",
        "extends": "",
        "visualStrategy": "钟面图示",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 2,
        "isKeyTopic": true
      }
    ],
    "problems": [
      {
        "scene": "美工课上小红要把两段彩带接成一根正好1米长的拉花。第一段60厘米，第二段40厘米。她想知道1米到底等于多少厘米。",
        "question": "两段彩带接起来正好1米，1米等于多少厘米？",
        "formula": "60 + 40 = ?",
        "answer": 100,
        "choices": [
          100,
          60,
          106,
          24
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 100,
          "parts": [
            {
              "label": "第一段",
              "val": 60,
              "color": "#00A896"
            },
            {
              "label": "第二段",
              "val": 40,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "长度单位·厘米和米",
        "difficulty": 1,
        "hint": "1米=100厘米，把两段加起来",
        "variants": [
          {
            "question": "一根铁丝长45厘米，再接上55厘米正好1米，1米是多少厘米？",
            "formula": "45 + 55 = ?",
            "answer": 100,
            "hint": "45加55"
          },
          {
            "question": "一段路已修70厘米，还剩30厘米就是1米，1米是多少厘米？",
            "formula": "70 + 30 = ?",
            "answer": 100,
            "hint": "70加30"
          }
        ]
      },
      {
        "scene": "量身高时小亮发现自己高80厘米，他想算自己比1米（100厘米）还要矮多少才能长到1米。",
        "question": "小亮高80厘米，比1米矮多少厘米？",
        "formula": "100 - 80 = ?",
        "answer": 20,
        "choices": [
          20,
          80,
          30,
          12
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 100,
          "points": [
            {
              "pos": 80,
              "label": "小亮身高",
              "color": "#00A896"
            },
            {
              "pos": 100,
              "label": "1米",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            80,
            100
          ]
        },
        "knowledge": "长度单位·厘米和米",
        "difficulty": 2,
        "hint": "1米=100厘米，用减法算相差",
        "variants": [
          {
            "question": "一根竹竿长90厘米，比1米短多少厘米？",
            "formula": "100 - 90 = ?",
            "answer": 10,
            "hint": "100减90"
          },
          {
            "question": "一根绳子长75厘米，比1米短多少厘米？",
            "formula": "100 - 75 = ?",
            "answer": 25,
            "hint": "100减75"
          }
        ]
      },
      {
        "scene": "老师把18本练习本平均分给3个小组，让组长来领。同学们刚学完除法，正好用乘法口诀来求商。",
        "question": "每个小组分到几本？",
        "formula": "18 ÷ 3 = ?",
        "answer": 6,
        "choices": [
          3,
          6,
          9,
          15
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 53,
          "parts": [
            {
              "label": "原有",
              "val": 35,
              "color": "#00A896"
            },
            {
              "label": "妈妈给",
              "val": 18,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "1-6的表内除法",
        "difficulty": 2,
        "hint": "想：3×（  ）=18，三六十八，所以 18÷3=6",
        "variants": [
          {
            "question": "24本练习本平均分给4个小组，每组几本？",
            "formula": "24 ÷ 4 = ?",
            "answer": 6,
            "hint": "四六二十四，24÷4=6"
          },
          {
            "question": "30颗糖平均分给5人，每人几颗？",
            "formula": "30 ÷ 5 = ?",
            "answer": 6,
            "hint": "五六三十，30÷5=6"
          }
        ]
      },
      {
        "scene": "文具店里每盒水彩笔有9支，美术老师买了7盒，要给参加绘画比赛的同学们每人发一支。",
        "question": "一共有多少支水彩笔？",
        "formula": "9 × 7 = ?",
        "answer": 63,
        "choices": [
          16,
          56,
          63,
          72
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 60,
          "points": [
            {
              "pos": 52,
              "label": "原来",
              "color": "#00A896"
            },
            {
              "pos": 35,
              "label": "下车后",
              "color": "#FB923C"
            },
            {
              "pos": 44,
              "label": "上车后",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            52,
            35,
            44
          ]
        },
        "knowledge": "7-9的表内乘法",
        "difficulty": 2,
        "hint": "七九六十三，9×7=63",
        "variants": [
          {
            "question": "每盒8支，买6盒，一共多少支？",
            "formula": "8 × 6 = ?",
            "answer": 48,
            "hint": "六八四十八"
          },
          {
            "question": "每盒9支，63支能装几盒？",
            "formula": "63 ÷ 9 = ?",
            "answer": 7,
            "hint": "七九六十三，63÷9=7"
          }
        ]
      },
      {
        "scene": "动物园里来了4只小兔子，每只小兔子都有2只长耳朵。饲养员要数一数这些兔子一共有几只耳朵。",
        "question": "4只兔子每只2只耳朵，一共有几只耳朵？",
        "formula": "2 × 4 = ?",
        "answer": 8,
        "choices": [
          8,
          6,
          10,
          16
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 8,
          "parts": [
            {
              "label": "兔1",
              "val": 2,
              "color": "#00A896"
            },
            {
              "label": "兔2",
              "val": 2,
              "color": "#F5B800"
            },
            {
              "label": "兔3",
              "val": 2,
              "color": "#00A896"
            },
            {
              "label": "兔4",
              "val": 2,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "表内乘法·2-4口诀",
        "difficulty": 1,
        "hint": "二四得八，4个2相加",
        "variants": [
          {
            "question": "一只手有5根手指，2只手有几根手指？",
            "formula": "5 × 2 = ?",
            "answer": 10,
            "hint": "二五一十"
          },
          {
            "question": "一辆三轮车有3个轮子，4辆有几轮？",
            "formula": "3 × 4 = ?",
            "answer": 12,
            "hint": "三四十二"
          }
        ]
      },
      {
        "scene": "文具店进货，每盒水彩笔装6支。老板数了5盒，想知道一共进了多少支水彩笔。",
        "question": "每盒6支，5盒一共有多少支水彩笔？",
        "formula": "6 × 5 = ?",
        "answer": 30,
        "choices": [
          30,
          11,
          35,
          25
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 30,
          "points": [
            {
              "pos": 6,
              "label": "1盒",
              "color": "#00A896"
            },
            {
              "pos": 12,
              "label": "2盒",
              "color": "#F5B800"
            },
            {
              "pos": 18,
              "label": "3盒",
              "color": "#FB923C"
            },
            {
              "pos": 24,
              "label": "4盒",
              "color": "#E8A0BF"
            },
            {
              "pos": 30,
              "label": "5盒",
              "color": "#1E3A5F"
            }
          ],
          "highlight": [
            0,
            30
          ]
        },
        "knowledge": "表内乘法·5-6口诀",
        "difficulty": 2,
        "hint": "五六三十，5个6相加",
        "variants": [
          {
            "question": "一盒鸡蛋6个，4盒几个？",
            "formula": "6 × 4 = ?",
            "answer": 24,
            "hint": "四六二十四"
          },
          {
            "question": "一行种5棵树，3行几棵？",
            "formula": "5 × 3 = ?",
            "answer": 15,
            "hint": "三五十五"
          }
        ]
      },
      {
        "scene": "老师让同学们把学过的图形分类整理：圆形卡片4张、三角形卡片5张、正方形卡片3张，先分类再统计。",
        "question": "一共有多少张图形卡片？",
        "formula": "4 + 5 + 3 = ?",
        "answer": 12,
        "choices": [
          9,
          11,
          12,
          15
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "base": 6,
            "height": 5
          }
        },
        "knowledge": "分类与整理",
        "difficulty": 2,
        "hint": "先分类再合起来：4+5+3=12（张）",
        "variants": [
          {
            "question": "三角形比正方形多几张？",
            "formula": "5 - 3 = ?",
            "answer": 2,
            "hint": "5-3=2"
          },
          {
            "question": "圆形和正方形一共几张？",
            "formula": "4 + 3 = ?",
            "answer": 7,
            "hint": "4+3=7"
          }
        ]
      },
      {
        "scene": "体育课上把24根跳绳平均分给6个小组，每个小组拿到同样多，正好够每人一根。",
        "question": "每个小组分到几根跳绳？",
        "formula": "24 ÷ 6 = ?",
        "answer": 4,
        "choices": [
          3,
          4,
          6,
          8
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "quadrilateral",
          "params": {
            "sides": 4
          }
        },
        "knowledge": "1-6的表内除法",
        "difficulty": 2,
        "hint": "四六二十四，24÷6=4",
        "variants": [
          {
            "question": "36根跳绳分给6个小组，每组几根？",
            "formula": "36 ÷ 6 = ?",
            "answer": 6,
            "hint": "六六三十六"
          },
          {
            "question": "12根跳绳每组2根，可以分给几个组？",
            "formula": "12 ÷ 2 = ?",
            "answer": 6,
            "hint": "二六十二"
          }
        ]
      },
      {
        "scene": "\"身体上的尺子\"实践活动课：同学们先量出自己一步大约长50厘米，再用\"步\"来估测教室的长度。",
        "question": "走4步大约是多少厘米？",
        "formula": "50 × 4 = ?",
        "answer": 200,
        "choices": [
          54,
          100,
          200,
          250
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 6,
            "width": 4
          }
        },
        "knowledge": "身体上的尺子（综合实践）",
        "difficulty": 2,
        "hint": "一步约50厘米，4步就是4个50：50×4=200（厘米）",
        "variants": [
          {
            "question": "一步50厘米，走6步大约多少厘米？",
            "formula": "50 × 6 = ?",
            "answer": 300,
            "hint": "50×6=300"
          },
          {
            "question": "一拃约12厘米，3拃大约多少厘米？",
            "formula": "12 × 3 = ?",
            "answer": 36,
            "hint": "12×3=36"
          }
        ]
      },
      {
        "scene": "手工课上，老师把56个气球平均分给8个小组做装饰，每个小组分到的气球同样多。",
        "question": "每个小组分到几个气球？",
        "formula": "56 ÷ 8 = ?",
        "answer": 7,
        "choices": [
          6,
          7,
          8,
          9
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 3,
          "parts": [
            {
              "val": 1,
              "color": "#00A896"
            },
            {
              "val": 1,
              "color": "#F5B800"
            },
            {
              "val": 1,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "7-9的表内乘、除法",
        "difficulty": 2,
        "hint": "七八五十六，56÷8=7",
        "variants": [
          {
            "question": "72个气球分给9个小组，每组几个？",
            "formula": "72 ÷ 9 = ?",
            "answer": 8,
            "hint": "八九七十二"
          },
          {
            "question": "7个小组每组9个气球，一共多少个？",
            "formula": "7 × 9 = ?",
            "answer": 63,
            "hint": "七九六十三"
          }
        ]
      },
      {
        "scene": "\"校园小导游\"实践活动：同学们要向家长介绍校园路线——从校门向东走30米到教学楼，再向北走40米到操场。",
        "question": "从校门到操场一共要走多少米？",
        "formula": "30 + 40 = ?",
        "answer": 70,
        "choices": [
          10,
          50,
          70,
          120
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 120,
          "parts": [
            {
              "label": "第1时",
              "val": 60,
              "color": "#00A896"
            },
            {
              "label": "第2时",
              "val": 60,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "校园小导游（综合实践）",
        "difficulty": 2,
        "hint": "把两段路合起来：30+40=70（米）",
        "variants": [
          {
            "question": "从校门向东走25米，再向北走35米，一共走多少米？",
            "formula": "25 + 35 = ?",
            "answer": 60,
            "hint": "25+35=60"
          },
          {
            "question": "去程70米，原路返回，来回一共多少米？",
            "formula": "70 × 2 = ?",
            "answer": 140,
            "hint": "70×2=140"
          }
        ]
      },
      {
        "scene": "课间操时同学们排队，每组5人，一共站了6组。体育委员要报出参加课间操的总人数。",
        "question": "一共有多少人参加课间操？",
        "formula": "5 × 6 = ?",
        "answer": 30,
        "choices": [
          11,
          25,
          30,
          36
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 60,
          "points": [
            {
              "pos": 10,
              "label": "开始",
              "color": "#00A896"
            },
            {
              "pos": 35,
              "label": "结束",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            60
          ]
        },
        "knowledge": "1-6的表内乘法",
        "difficulty": 2,
        "hint": "五六三十，5×6=30",
        "variants": [
          {
            "question": "每组4人，站7组，一共多少人？",
            "formula": "4 × 7 = ?",
            "answer": 28,
            "hint": "四七二十八"
          },
          {
            "question": "一共30人，每组5人，可以站几组？",
            "formula": "30 ÷ 5 = ?",
            "answer": 6,
            "hint": "五六三十，30÷5=6"
          }
        ]
      }
    ]
  },
  "2b": {
    "title": "二年级下册·7~9 表内乘除法与万以内数的认识",
    "sub": "数与代数 · 图形与几何 · 综合实践",
    "progress": 0,
    "units": [
      {
        "name": "时间在哪里（综合实践）",
        "level": "current",
        "children": [
          {
            "name": "认识时、分",
            "level": "done"
          },
          {
            "name": "时间的简单计算",
            "level": "current"
          }
        ]
      },
      {
        "name": "有余数的除法",
        "level": "current",
        "children": [
          {
            "name": "余数的认识",
            "level": "done"
          },
          {
            "name": "有余数除法的计算",
            "level": "current"
          },
          {
            "name": "进一法与去尾法",
            "level": "locked"
          }
        ]
      },
      {
        "name": "数量间的乘除关系",
        "level": "locked",
        "children": [
          {
            "name": "求几个相同加数的和",
            "level": "locked"
          },
          {
            "name": "平均分与包含除",
            "level": "locked"
          }
        ]
      },
      {
        "name": "万以内数的认识",
        "level": "locked",
        "children": [
          {
            "name": "1000以内数的认识",
            "level": "locked"
          },
          {
            "name": "10000以内数的认识",
            "level": "locked"
          },
          {
            "name": "大小比较与近似数",
            "level": "locked"
          }
        ]
      },
      {
        "name": "万以内的加法和减法",
        "level": "locked",
        "children": [
          {
            "name": "口算加减",
            "level": "locked"
          },
          {
            "name": "笔算加减与验算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "数学连环画（综合实践）",
        "level": "locked",
        "children": [
          {
            "name": "读懂连环画中的数学",
            "level": "locked"
          },
          {
            "name": "创作数学连环画",
            "level": "locked"
          }
        ]
      },
      {
        "name": "复习与关联",
        "level": "locked",
        "children": [
          {
            "name": "数与运算",
            "level": "locked"
          },
          {
            "name": "数量关系",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "\"时间在哪里\"实践活动：同学们记录一节课40分钟，课间休息10分钟，把这两段时间加起来看看一共多久。",
        "question": "一节课加课间休息一共多少分钟？",
        "formula": "40 + 10 = ?",
        "answer": 50,
        "choices": [
          30,
          50,
          60,
          70
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 12,
          "parts": [
            {
              "label": "小朋友1",
              "val": 4,
              "color": "#00A896"
            },
            {
              "label": "小朋友2",
              "val": 4,
              "color": "#F5B800"
            },
            {
              "label": "小朋友3",
              "val": 4,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "时间在哪里（综合实践）",
        "difficulty": 2,
        "hint": "40+10=50（分钟）",
        "variants": [
          {
            "question": "一节课40分钟，两节课一共多少分钟？",
            "formula": "40 × 2 = ?",
            "answer": 80,
            "hint": "40×2=80"
          },
          {
            "question": "1小时=60分钟，一节课40分钟后还剩多少分钟？",
            "formula": "60 - 40 = ?",
            "answer": 20,
            "hint": "60-40=20"
          }
        ]
      },
      {
        "scene": "文具店里的铅笔每支3元，小明带了15元。这就是\"总价÷单价=数量\"的乘除关系。",
        "question": "15元能买几支铅笔？",
        "formula": "15 ÷ 3 = ?",
        "answer": 5,
        "choices": [
          3,
          5,
          12,
          18
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 45,
          "points": [
            {
              "pos": 9,
              "label": "1束",
              "color": "#00A896"
            },
            {
              "pos": 18,
              "label": "2束",
              "color": "#F5B800"
            },
            {
              "pos": 27,
              "label": "3束",
              "color": "#FB923C"
            },
            {
              "pos": 36,
              "label": "4束",
              "color": "#E8A0BF"
            },
            {
              "pos": 45,
              "label": "5束",
              "color": "#1E3A5F"
            }
          ],
          "highlight": [
            0,
            45
          ]
        },
        "knowledge": "数量间的乘除关系",
        "difficulty": 2,
        "hint": "总价 ÷ 单价 = 数量，15÷3=5（支）",
        "variants": [
          {
            "question": "每支3元，买5支要多少元？",
            "formula": "3 × 5 = ?",
            "answer": 15,
            "hint": "单价×数量=总价"
          },
          {
            "question": "18元买9支，每支多少元？",
            "formula": "18 ÷ 9 = ?",
            "answer": 2,
            "hint": "总价÷数量=单价"
          }
        ]
      },
      {
        "scene": "妈妈把22颗草莓平均放到4个盘子里，每个盘子放5颗，最后还剩2颗放不下。妈妈让小红算这些草莓分盘前一共有多少颗。",
        "question": "4盘每盘5颗再加剩2颗，草莓一共多少颗？",
        "formula": "5 × 4 + 2 = ?",
        "answer": 22,
        "choices": [
          22,
          20,
          12,
          24
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 22,
          "parts": [
            {
              "label": "4盘",
              "val": 20,
              "color": "#00A896"
            },
            {
              "label": "剩下",
              "val": 2,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "有余数的除法",
        "difficulty": 2,
        "hint": "先用乘法算分掉的，再加上余数",
        "variants": [
          {
            "question": "3篮每篮5个苹果剩2个，原来共几个？",
            "formula": "5 × 3 + 2 = ?",
            "answer": 17,
            "hint": "先乘再加余数"
          },
          {
            "question": "4人每人7块糖剩2块，原来共几块？",
            "formula": "7 × 4 + 2 = ?",
            "answer": 30,
            "hint": "先乘再加余数"
          }
        ]
      },
      {
        "scene": "23个同学去划船，每条船坐4人，已经坐满了5条船。领队要算还有几个同学没坐上船。",
        "question": "23人坐满5条船（每船4人），还剩几人没坐上船？",
        "formula": "23 - 4 × 5 = ?",
        "answer": 3,
        "choices": [
          3,
          7,
          2,
          18
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 23,
          "parts": [
            {
              "val": 20,
              "color": "#00A896"
            },
            {
              "val": 3,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "有余数的除法",
        "difficulty": 3,
        "hint": "先算5条船坐了几人（4×5），再用总数减",
        "variants": [
          {
            "question": "19人坐满6条船每船3人，还剩几人？",
            "formula": "19 - 3 × 6 = ?",
            "answer": 1,
            "hint": "先乘后减"
          },
          {
            "question": "25人坐满5条船每船4人，还剩几人？",
            "formula": "25 - 4 × 5 = ?",
            "answer": 5,
            "hint": "先乘后减"
          }
        ]
      },
      {
        "scene": "学校图书室有故事书1200本，科技书比故事书少350本。管理员要统计科技书有多少本。",
        "question": "科技书有多少本？",
        "formula": "1200 - 350 = ?",
        "answer": 850,
        "choices": [
          750,
          850,
          950,
          1550
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 11,
          "parts": [
            {
              "label": "铅笔",
              "val": 8,
              "color": "#00A896"
            },
            {
              "label": "橡皮",
              "val": 3,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "万以内的加法和减法",
        "difficulty": 3,
        "hint": "科技书比故事书少350本：1200-350=850（本）",
        "variants": [
          {
            "question": "故事书1200本，科技书850本，一共多少本？",
            "formula": "1200 + 850 = ?",
            "answer": 2050,
            "hint": "1200+850=2050"
          },
          {
            "question": "一年级318人、二年级295人，一共多少人？",
            "formula": "318 + 295 = ?",
            "answer": 613,
            "hint": "318+295=613"
          }
        ]
      },
      {
        "scene": "学校开运动会，一年级有318人参加，二年级有295人参加。组委会要统计两个年级一共来了多少人。",
        "question": "两个年级一共多少人参加？",
        "formula": "318 + 295 = ?",
        "answer": 613,
        "choices": [
          513,
          603,
          613,
          703
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 20,
          "parts": [
            {
              "val": 12,
              "color": "#FB923C"
            },
            {
              "val": 8,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "万以内的加法和减法",
        "difficulty": 3,
        "hint": "318+295：个位8+5=13进1，十位1+9+1=11进1，百位3+2+1=6，得613",
        "variants": [
          {
            "question": "一年级318人，二年级比一年级少23人，二年级多少人？",
            "formula": "318 - 23 = ?",
            "answer": 295,
            "hint": "318-23=295"
          },
          {
            "question": "两个年级共613人，其中一年级318人，二年级多少人？",
            "formula": "613 - 318 = ?",
            "answer": 295,
            "hint": "613-318=295"
          }
        ]
      },
      {
        "scene": "猜数游戏：老师报一个数，它由3个千、2个百和5个一组成。同学们要在计数器上拨出这个数。",
        "question": "3个千、2个百、5个一合起来是多少？",
        "formula": "3000 + 200 + 5 = ?",
        "answer": 3205,
        "choices": [
          3205,
          325,
          3250,
          3025
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 3205,
          "parts": [
            {
              "label": "千",
              "val": 3000,
              "color": "#00A896"
            },
            {
              "label": "百",
              "val": 200,
              "color": "#F5B800"
            },
            {
              "label": "一",
              "val": 5,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "万以内数的认识·数的组成",
        "difficulty": 2,
        "hint": "千位3、百位2、个位5，中间用0占位",
        "variants": [
          {
            "question": "2个千、4个百、3个一合起来是多少？",
            "formula": "2000 + 400 + 3 = ?",
            "answer": 2403,
            "hint": "中间十位是0"
          },
          {
            "question": "5个千、1个百、6个十合起来是多少？",
            "formula": "5000 + 100 + 60 = ?",
            "answer": 5160,
            "hint": "个位是0"
          }
        ]
      },
      {
        "scene": "阳光小学有学生1240人，红星小学有学生1420人。校长想知道两所学校的人数相差多少。",
        "question": "红星小学1420人比阳光小学1240人多多少人？",
        "formula": "1420 - 1240 = ?",
        "answer": 180,
        "choices": [
          180,
          280,
          80,
          1800
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 1420,
          "parts": [
            {
              "val": 1240,
              "color": "#00A896"
            },
            {
              "val": 180,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "万以内数的认识·比较大小",
        "difficulty": 3,
        "hint": "同千位比百位，相同数位对齐相减",
        "variants": [
          {
            "question": "苹果树1050棵，梨树1200棵，相差几棵？",
            "formula": "1200 - 1050 = ?",
            "answer": 150,
            "hint": "对齐相减"
          },
          {
            "question": "上午到校815人，下午到校980人，相差几人？",
            "formula": "980 - 815 = ?",
            "answer": 165,
            "hint": "对齐相减"
          }
        ]
      },
      {
        "scene": "\"数学连环画\"实践活动：同学们把学过的数学知识画成连环画。一本数学连环画有24页，每天看4页。",
        "question": "几天能看完？",
        "formula": "24 ÷ 4 = ?",
        "answer": 6,
        "choices": [
          4,
          6,
          8,
          20
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 1000,
          "parts": [
            {
              "label": "第1袋",
              "val": 500,
              "color": "#00A896"
            },
            {
              "label": "第2袋",
              "val": 500,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "数学连环画（综合实践）",
        "difficulty": 2,
        "hint": "24÷4=6（天）",
        "variants": [
          {
            "question": "每天看6页，24页几天看完？",
            "formula": "24 ÷ 6 = ?",
            "answer": 4,
            "hint": "四六二十四"
          },
          {
            "question": "一本36页，每天看4页，几天看完？",
            "formula": "36 ÷ 4 = ?",
            "answer": 9,
            "hint": "四九三十六"
          }
        ]
      },
      {
        "scene": "学校食堂把点心装盒，每盒装8个，装了5盒。这用到\"每份数×份数=总数\"的乘法关系。",
        "question": "一共有多少个点心？",
        "formula": "8 × 5 = ?",
        "answer": 40,
        "choices": [
          13,
          35,
          40,
          45
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 4000,
          "points": [
            {
              "pos": 1000,
              "label": "1千克",
              "color": "#00A896"
            },
            {
              "pos": 2000,
              "label": "2千克",
              "color": "#F5B800"
            },
            {
              "pos": 3000,
              "label": "3千克",
              "color": "#FB923C"
            },
            {
              "pos": 4000,
              "label": "4千克",
              "color": "#1E3A5F"
            }
          ],
          "highlight": [
            0,
            4000
          ]
        },
        "knowledge": "数量间的乘除关系",
        "difficulty": 2,
        "hint": "每份数 × 份数 = 总数，8×5=40（个）",
        "variants": [
          {
            "question": "40个点心每盒装8个，能装几盒？",
            "formula": "40 ÷ 8 = ?",
            "answer": 5,
            "hint": "五八四十"
          },
          {
            "question": "40个点心装5盒，每盒几个？",
            "formula": "40 ÷ 5 = ?",
            "answer": 8,
            "hint": "总数÷份数=每份数"
          }
        ]
      },
      {
        "scene": "妈妈买了50块糖果，要装进每盒最多装6块的礼品盒里。包装时会出现\"装满几盒、还剩几块\"的情况。",
        "question": "50块糖最多可以装满几盒？",
        "formula": "50 ÷ 6 = ?（盒）余2",
        "answer": 8,
        "choices": [
          7,
          8,
          9,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 4,
          "parts": [
            {
              "label": "1层",
              "val": 1,
              "color": "#00A896"
            },
            {
              "label": "2层",
              "val": 1,
              "color": "#00A896"
            },
            {
              "label": "3层",
              "val": 1,
              "color": "#F5B800"
            },
            {
              "label": "4层",
              "val": 1,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "有余数的除法",
        "difficulty": 3,
        "hint": "50÷6=8（盒）……2（块），最多装满8盒（去尾法）",
        "variants": [
          {
            "question": "38块糖每盒装5块，最多装满几盒？",
            "formula": "38 ÷ 5 = ?（盒）余3",
            "answer": 7,
            "hint": "38÷5=7……3"
          },
          {
            "question": "23人坐船，每条船坐4人，至少要几条船？",
            "formula": "23 ÷ 4 = 5 余3，至少 ? 条",
            "answer": 6,
            "hint": "余下3人也要坐船，5+1=6（进一法）"
          }
        ]
      },
      {
        "scene": "数学课上老师用计数器拨数：千位上拨5个珠子、百位上拨3个珠子，让同学们写出这个数并读出来。",
        "question": "这个数是多少？",
        "formula": "5000 + 300 = ?",
        "answer": 5300,
        "choices": [
          5030,
          5300,
          530,
          5003
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 100,
          "points": [
            {
              "pos": 60,
              "label": "山腰",
              "color": "#00A896"
            },
            {
              "pos": 100,
              "label": "山顶",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            60,
            100
          ]
        },
        "knowledge": "万以内数的认识",
        "difficulty": 3,
        "hint": "5个千是5000，3个百是300，合起来是5300",
        "variants": [
          {
            "question": "由7个千、2个十组成的数是多少？",
            "formula": "7000 + 20 = ?",
            "answer": 7020,
            "hint": "7个千和2个十，是7020"
          },
          {
            "question": "5300里有几个百？",
            "formula": "5300 ÷ 100 = ?",
            "answer": 53,
            "hint": "5300÷100=53"
          }
        ]
      }
    ]
  }
};
