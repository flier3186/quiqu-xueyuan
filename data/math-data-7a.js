window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['7a'] = {
    "title": "七年级上册·有理数与代数初步",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
      {
        "id": "7A-01",
        "name": "正数与负数",
        "concept": "大于0的数是正数，小于0的数是负数，0既不是正数也不是负数",
        "prerequisite": "三年级·认识整数",
        "extends": "7A-02 数轴",
        "visualStrategy": "数轴双向延伸",
        "visualType": "numberLine",
        "coreLiteracy": "符号意识",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "7A-02",
        "name": "数轴",
        "concept": "规定了原点、正方向、单位长度的直线",
        "prerequisite": "7A-01",
        "extends": "7A-03 相反数",
        "visualStrategy": "动态数轴",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "7A-03",
        "name": "相反数与绝对值",
        "concept": "只有符号不同的两个数互为相反数；绝对值是数到原点的距离",
        "prerequisite": "7A-02",
        "extends": "7A-04 有理数加减",
        "visualStrategy": "数轴距离",
        "visualType": "numberLine",
        "coreLiteracy": "抽象能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-04",
        "name": "有理数的加减法",
        "concept": "同号相加取相同符号，异号相加取绝对值较大者的符号",
        "prerequisite": "7A-03",
        "extends": "7A-05 整式加减",
        "visualStrategy": "数轴跳跃",
        "visualType": "numberLine",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-05",
        "name": "整式的加减",
        "concept": "合并同类项：字母相同、指数相同的项才能合并",
        "prerequisite": "7A-04",
        "extends": "7A-06 一元一次方程",
        "visualStrategy": "代数积木",
        "visualType": "barModel",
        "coreLiteracy": "代数思维",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-06",
        "name": "一元一次方程",
        "concept": "只含一个未知数，未知数指数为1的方程",
        "prerequisite": "7A-05",
        "extends": "7A-07 不等式",
        "visualStrategy": "天平平衡",
        "visualType": "barModel",
        "coreLiteracy": "方程思想",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-07",
        "name": "不等式与不等式组",
        "concept": "用不等号表示大小关系的式子，解集可在数轴上表示",
        "prerequisite": "7A-06",
        "extends": "7A-08 平面直角坐标系",
        "visualStrategy": "数轴表示",
        "visualType": "numberLine",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "7A-08",
        "name": "平面直角坐标系",
        "concept": "用有序数对(x,y)确定平面内点的位置",
        "prerequisite": "7A-07",
        "extends": "7A-09 直线的平移与旋转",
        "visualStrategy": "坐标网格",
        "visualType": "geometry",
        "coreLiteracy": "数形结合",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-09",
        "name": "直线的平移与旋转",
        "concept": "直线平移不改变斜率，旋转改变角度",
        "prerequisite": "7A-08",
        "extends": "7B-01 相交线与平行线",
        "visualStrategy": "动态变换",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "7A-10",
        "name": "幂的运算",
        "concept": "同底数幂相乘：底数不变指数相加",
        "prerequisite": "四年级·乘法",
        "extends": "7A-11 整式乘法",
        "visualStrategy": "面积模型",
        "visualType": "areaModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-11",
        "name": "整式乘法",
        "concept": "单项式乘多项式：用分配律逐项相乘",
        "prerequisite": "7A-10",
        "extends": "7A-12 因式分解",
        "visualStrategy": "分配律模型",
        "visualType": "areaModel",
        "coreLiteracy": "代数思维",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "7A-12",
        "name": "因式分解",
        "concept": "把多项式化为几个整式的积的形式",
        "prerequisite": "7A-11",
        "extends": "7B-03 分式",
        "visualStrategy": "面积还原",
        "visualType": "areaModel",
        "coreLiteracy": "分解思想",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "7A-13",
        "name": "数据的收集与整理",
        "concept": "了解数据收集的方法：全面调查与抽样调查",
        "prerequisite": "三年级·统计",
        "extends": "7A-14 统计图表",
        "visualStrategy": "调查表",
        "visualType": "barModel",
        "coreLiteracy": "数据意识",
        "difficulty": 1,
        "isKeyTopic": false
      },
      {
        "id": "7A-14",
        "name": "统计图表",
        "concept": "条形图、折线图、扇形图各有适用场景",
        "prerequisite": "7A-13",
        "extends": "7A-15 概率初步",
        "visualStrategy": "图表对比",
        "visualType": "barModel",
        "coreLiteracy": "数据分析",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "7A-15",
        "name": "概率初步",
        "concept": "事件发生的可能性大小用0到1之间的数表示",
        "prerequisite": "7A-14",
        "extends": "8A-01 二次根式",
        "visualStrategy": "转盘实验",
        "visualType": "areaModel",
        "coreLiteracy": "随机观念",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "7A-16",
        "name": "代数式与函数初步",
        "concept": "用字母表示数，理解变量与常量的区别",
        "prerequisite": "7A-15",
        "extends": "7A-17 函数概念",
        "visualStrategy": "表格与图象",
        "visualType": "numberLine",
        "coreLiteracy": "函数思想",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-17",
        "name": "函数概念",
        "concept": "一个自变量对应唯一因变量的映射关系",
        "prerequisite": "7A-16",
        "extends": "8A-02 一次函数",
        "visualStrategy": "坐标系图象",
        "visualType": "numberLine",
        "coreLiteracy": "函数思想",
        "difficulty": 3,
        "isKeyTopic": true
      }
    ],
    "units": [
      {
        "name": "有理数",
        "level": "current",
        "children": [
          {
            "name": "正数与负数",
            "level": "done"
          },
          {
            "name": "数轴",
            "level": "current"
          },
          {
            "name": "相反数与绝对值",
            "level": "locked"
          }
        ]
      },
      {
        "name": "有理数的加减法",
        "level": "locked",
        "children": [
          {
            "name": "有理数加法",
            "level": "locked"
          },
          {
            "name": "有理数减法",
            "level": "locked"
          }
        ]
      },
      {
        "name": "整式的加减",
        "level": "locked",
        "children": [
          {
            "name": "整式概念",
            "level": "locked"
          },
          {
            "name": "合并同类项",
            "level": "locked"
          }
        ]
      },
      {
        "name": "一元一次方程",
        "level": "locked",
        "children": [
          {
            "name": "方程概念",
            "level": "locked"
          },
          {
            "name": "解方程",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "气象站记录一天气温变化：早晨零下5摄氏度，中午上升8摄氏度，傍晚又下降3摄氏度。小明想算出傍晚的温度。",
        "question": "傍晚气温是多少摄氏度？",
        "formula": "-5 + 8 - 3 = ?",
        "answer": 0,
        "choices": [
          -2,
          0,
          2,
          -1
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": -5,
          "end": 3,
          "points": [
            {
              "pos": -5,
              "label": "早晨",
              "color": "#00A896"
            },
            {
              "pos": 3,
              "label": "变化",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            -5,
            3
          ]
        },
        "knowledge": "有理数加减法",
        "difficulty": 2,
        "hint": "先加后减，注意符号",
        "variants": [
          {
            "question": "早晨-3度，中午上升6度，傍晚下降4度，傍晚温度？",
            "formula": "-3+6-4=?",
            "answer": -1,
            "hint": "从左到右逐步计算"
          },
          {
            "question": "气温从-8度上升10度再下降3度，结果？",
            "formula": "-8+10-3=?",
            "answer": -1,
            "hint": "注意负数运算"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "差是多少（剩多少）",
              "总数（一共多少）",
              "每份是多少",
              "积是多少"
            ],
            "answer": "差是多少（剩多少）",
            "explain": "题目说「气象站记录一天气温变化：早晨零下5摄氏度，中午上升8摄氏度，傍晚又下降3摄氏度。小明想算出傍晚的温度。」，问的是「傍晚气温是多少摄氏度？」，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：5 和 8",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：5 和 8",
            "explain": "从题目中找到的关键数是：5、8、3"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "减法",
            "explain": "减法：-5 + 8 - 3 = ?=0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上从-5到3，帮助理解数量关系和运算过程",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "-5 + 8 - 3 = ?=0",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求差或剩余，用减法。被减数-减数=差",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校图书馆借阅统计：本周借阅童话书128本，科技书比童话书多45本，故事书比科技书少23本。老师想知道故事书借了多少本。",
        "question": "故事书借了多少本？",
        "formula": "128 + 45 - 23 = ?",
        "answer": 150,
        "choices": [
          150,
          148,
          152,
          145
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 150,
          "parts": [
            {
              "label": "童话",
              "val": 128,
              "color": "#00A896"
            },
            {
              "label": "科技",
              "val": 173,
              "color": "#F5B800"
            },
            {
              "label": "故事",
              "val": 150,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "整式运算",
        "difficulty": 2,
        "hint": "科技书=128+45，故事书=科技书-23",
        "variants": [
          {
            "question": "童话书150本，科技书比它少30本，故事书比科技书多20本，故事书多少本？",
            "formula": "150-30+20=?",
            "answer": 140,
            "hint": "逐步计算"
          },
          {
            "question": "童话书100本，科技书是它的2倍少20本，故事书是科技书的一半，故事书多少本？",
            "formula": "(100*2-20)/2=?",
            "answer": 90,
            "hint": "分步计算"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "差是多少（剩多少）",
              "总数（一共多少）",
              "每份是多少",
              "积是多少"
            ],
            "answer": "差是多少（剩多少）",
            "explain": "题目说「学校图书馆借阅统计：本周借阅童话书128本，科技书比童话书多45本，故事书比科技书少23本。老师想知道故事书借了多少本。」，问的是「故事书借了多少本？」，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：128 和 45",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：128 和 45",
            "explain": "从题目中找到的关键数是：128、45、23"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "减法",
            "explain": "减法：128 + 45 - 23 = ?=150"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表128，合起来就是150",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "128 + 45 - 23 = ?=150",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求差或剩余，用减法。被减数-减数=差",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明用绳子围一个长方形花圃，长12米宽8米。他想算出需要多长的绳子，还要算出花圃的面积。",
        "question": "花圃周长和面积各是多少？",
        "formula": "周长=(12+8)*2=40 面积=12*8=96",
        "answer": 40,
        "choices": [
          40,
          96,
          40,
          96
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 12,
            "width": 8
          }
        },
        "knowledge": "长方形周长与面积",
        "difficulty": 2,
        "hint": "周长=(长+宽)*2，面积=长*宽",
        "variants": [
          {
            "question": "正方形花坛边长15米，周长和面积各是多少？",
            "formula": "周长=15*4, 面积=15*15",
            "answer": 60,
            "hint": "正方形周长=边长*4"
          },
          {
            "question": "长方形长20米，宽是长的一半，周长和面积各是多少？",
            "formula": "宽=10, 周长=(20+10)*2, 面积=20*10",
            "answer": 600,
            "hint": "先求宽"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "总数（一共多少）",
              "每份是多少",
              "有几份",
              "差是多少"
            ],
            "answer": "总数（一共多少）",
            "explain": "题目说「小明用绳子围一个长方形花圃，长12米宽8米。他想算出需要多长的绳子，还要算出花圃的面积。」，问的是「花圃周长和面积各是多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：12 和 8",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：12 和 8",
            "explain": "从题目中找到的关键数是：12、8、2、40、12、8、96"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "乘法",
            "explain": "乘法：周长=(12+8)*2=40 面积=12*8=96=40"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中的几何图形展示了题目的空间关系和属性",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "周长=(12+8)*2=40 面积=12*8=96=40",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "某商场促销，一件衣服原价200元，先打八折再减30元。小红妈妈想算算实际应付多少元。",
        "question": "实际应付多少元？",
        "formula": "200*0.8-30 = ?",
        "answer": 130,
        "choices": [
          130,
          140,
          120,
          150
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 200,
          "points": [
            {
              "pos": 160,
              "label": "八折",
              "color": "#00A896"
            },
            {
              "pos": 130,
              "label": "减30",
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "百分数应用",
        "difficulty": 3,
        "hint": "先打折再减钱",
        "variants": [
          {
            "question": "原价300元打七折再减50元，实际应付多少？",
            "formula": "300*0.7-50=?",
            "answer": 160,
            "hint": "先算打折价"
          },
          {
            "question": "原价150元打九折再减20元，实际应付多少？",
            "formula": "150*0.9-20=?",
            "answer": 115,
            "hint": "逐步计算"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "总数（一共多少）",
              "每份是多少",
              "有几份",
              "差是多少"
            ],
            "answer": "总数（一共多少）",
            "explain": "题目说「某商场促销，一件衣服原价200元，先打八折再减30元。小红妈妈想算算实际应付多少元。」，问的是「实际应付多少元？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：200 和 0.8",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：200 和 0.8",
            "explain": "从题目中找到的关键数是：200、0.8、30"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "乘法",
            "explain": "乘法：200*0.8-30 = ?=130"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上从到200，帮助理解数量关系和运算过程",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "200*0.8-30 = ?=130",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个数的3倍加5等于20，小明想求出这个数是多少。",
        "question": "这个数是多少？",
        "formula": "3x + 5 = 20, x = ?",
        "answer": 5,
        "choices": [
          5,
          4,
          6,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 20,
          "parts": [
            {
              "label": "3倍",
              "val": 15,
              "color": "#00A896"
            },
            {
              "label": "加5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "解一元一次方程",
        "difficulty": 2,
        "hint": "先移项再除以系数",
        "variants": [
          {
            "question": "一个数的2倍减3等于11，这个数是多少？",
            "formula": "2x-3=11",
            "answer": 7,
            "hint": "先加3再除以2"
          },
          {
            "question": "一个数的4倍加8等于32，这个数是多少？",
            "formula": "4x+8=32",
            "answer": 6,
            "hint": "先减8再除以4"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "总数（一共多少）",
              "每份是多少",
              "差是多少",
              "积是多少"
            ],
            "answer": "总数（一共多少）",
            "explain": "题目说「一个数的3倍加5等于20，小明想求出这个数是多少。」，问的是「这个数是多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 5",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 5",
            "explain": "从题目中找到的关键数是：3、5、20"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "加法",
            "explain": "加法：3x + 5 = 20, x = ?=5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表15，合起来就是20",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3x + 5 = 20, x = ?=5",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个数的和，用加法。加数+加数=和",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      }
    ]
  };
