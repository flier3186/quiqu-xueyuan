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
      },
      {
        "id": "7A-18",
        "name": "统计图表初步",
        "concept": "用条形图、折线图、扇形图描述数据",
        "prerequisite": "7A-17",
        "extends": "7A-19 比例",
        "visualStrategy": "多图表对比",
        "visualType": "barModel",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-19",
        "name": "比例与比例线段",
        "concept": "若a/b=c/d则ad=bc，比例的基本性质",
        "prerequisite": "6A-10 比和比例",
        "extends": "7B-01 相交线与平行线",
        "visualStrategy": "比例模型",
        "visualType": "barModel",
        "coreLiteracy": "模型思想",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-20",
        "name": "比例分配问题",
        "concept": "按一定比例分配总量，各部分成比例",
        "prerequisite": "6A-10",
        "extends": "7A-19 比例",
        "visualStrategy": "比例条形",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-21",
        "name": "方程的应用",
        "concept": "用一元一次方程解决实际问题，设未知数列方程",
        "prerequisite": "7A-06",
        "extends": "7A-05 整式加减",
        "visualStrategy": "方程建模",
        "visualType": "barModel",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "7A-22",
        "name": "几何初步认识",
        "concept": "点动成线，线动成面，面动成体",
        "prerequisite": "3A-01 认识图形",
        "extends": "7B-01 相交线与平行线",
        "visualStrategy": "动态形成",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 1,
        "isKeyTopic": false
      },
      {
        "id": "7A-23",
        "name": "角的度量与计算",
        "concept": "1度=60分，1分=60秒，角的和差计算",
        "prerequisite": "4A-02 角的度量",
        "extends": "7A-18 余角与补角",
        "visualStrategy": "角度测量",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7A-24",
        "name": "统计图表综合分析",
        "concept": "根据实际问题选择合适的统计图表",
        "prerequisite": "7A-14",
        "extends": "7A-15 概率初步",
        "visualStrategy": "图表选择",
        "visualType": "barModel",
        "coreLiteracy": "数据分析",
        "difficulty": 2,
        "isKeyTopic": false
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
      },
      {
        "scene": "超市促销，苹果每千克8元，小明买了3千克，妈妈给了他50元。小明想知道找零多少元。",
        "question": "应该找零多少元？",
        "formula": "50 - 8*3 = ?",
        "answer": 26,
        "choices": [
          26,
          24,
          28,
          22
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 50,
          "parts": [
            {
              "label": "花费",
              "val": 24,
              "color": "#00A896"
            },
            {
              "label": "找零",
              "val": 26,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "有理数混合运算",
        "difficulty": 2,
        "hint": "先算乘法再算减法",
        "variants": [
          {
            "question": "香蕉每千克5元，买4千克，给30元，找零？",
            "formula": "30-5*4=?",
            "answer": 10,
            "hint": "先乘后减"
          },
          {
            "question": "橙子每千克6元，买5千克，给40元，够吗？",
            "formula": "6*5=30<40",
            "answer": 1,
            "hint": "比较大小"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "总数（一共多少）",
              "每份是多少",
              "差是多少",
              "有几份"
            ],
            "answer": "差是多少",
            "explain": "题目说「超市促销，苹果每千克8元，小明买了3千克，妈妈给了他50元。小明想知道找零多少元。」，问的是「应该找零多少元？」，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：50、8、3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：50、8、3",
            "explain": "从题目中找到的关键数是：50（给的钱）、8（单价）、3（数量）"
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
            "explain": "减法：先算花费8×3=24元，再算找零50-24=26元"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中50元分成花费24元和找零26元两部分",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "50 - 8×3 = 50 - 24 = 26元",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "找零=付的钱-总价，总价=单价×数量",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红在数轴上从原点出发，先向右移动5个单位，再向左移动3个单位，她想知道现在在哪里。",
        "question": "小红现在在数轴上的什么位置？",
        "formula": "0 + 5 - 3 = ?",
        "answer": 2,
        "choices": [
          2,
          -2,
          8,
          -8
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": -5,
          "end": 5,
          "points": [
            {
              "pos": 0,
              "label": "起点",
              "color": "#00A896"
            },
            {
              "pos": 5,
              "label": "右移5",
              "color": "#F5B800"
            },
            {
              "pos": 2,
              "label": "终点",
              "color": "#FB923C"
            }
          ],
          "highlight": [
            0,
            2
          ]
        },
        "knowledge": "数轴上的点移动",
        "difficulty": 1,
        "hint": "向右为正，向左为负",
        "variants": [
          {
            "question": "从0出发，向左4单位再向右7单位，终点？",
            "formula": "0-4+7=?",
            "answer": 3,
            "hint": "左负右正"
          },
          {
            "question": "从-2出发，向右5单位再向左3单位，终点？",
            "formula": "-2+5-3=?",
            "answer": 0,
            "hint": "注意起点"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "计算结果",
              "每份是多少",
              "总数",
              "差是多少"
            ],
            "answer": "计算结果",
            "explain": "题目说「小红在数轴上从原点出发，先向右移动5个单位，再向左移动3个单位，她想知道现在在哪里。」，问的是「小红现在在数轴上的什么位置？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：0、5、3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：0、5、3",
            "explain": "从题目中找到的关键数是：0（起点）、5（右移）、3（左移）"
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
            "explain": "加法：0 + 5 - 3 = 2"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上从0到5再到2，展示移动过程",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "0 + 5 - 3 = 2",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "数轴上向右加、向左减，最终位置=起点+移动量",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明解方程2x - 7 = 9，他想知道x等于多少才能满足方程。",
        "question": "方程的解x是多少？",
        "formula": "2x = 9 + 7, x = ?",
        "answer": 8,
        "choices": [
          8,
          6,
          16,
          2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 9,
          "parts": [
            {
              "label": "2x",
              "val": 16,
              "color": "#00A896"
            },
            {
              "label": "-7",
              "val": 7,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "解一元一次方程",
        "difficulty": 2,
        "hint": "先移项再除以系数",
        "variants": [
          {
            "question": "解方程3x + 5 = 20",
            "formula": "3x=15, x=5",
            "answer": 5,
            "hint": "先减5再除以3"
          },
          {
            "question": "解方程5x - 3 = 17",
            "formula": "5x=20, x=4",
            "answer": 4,
            "hint": "先加3再除以5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "计算结果",
              "每份是多少",
              "总数",
              "差是多少"
            ],
            "answer": "计算结果",
            "explain": "题目说「小明解方程2x - 7 = 9，他想知道x等于多少才能满足方程。」，问的是「方程的解x是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：2、7、9",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：2、7、9",
            "explain": "从题目中找到的关键数是：2（系数）、7（常数项）、9（结果）"
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
            "explain": "加法：2x = 9 + 7 = 16, x = 16/2 = 8"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示方程2x-7=9的平衡关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "2x - 7 = 9 → 2x = 16 → x = 8",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "解方程：移项变号，系数化为1",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校组织植树活动，一班植了25棵，二班植的是一班的1.2倍少3棵。校长想知道两个班一共植了多少棵树。",
        "question": "两个班共植树多少棵？",
        "formula": "25 + (25*1.2-3) = ?",
        "answer": 52,
        "choices": [
          52,
          50,
          55,
          48
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 52,
          "parts": [
            {
              "label": "一班",
              "val": 25,
              "color": "#00A896"
            },
            {
              "label": "二班",
              "val": 27,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "代数式求值",
        "difficulty": 2,
        "hint": "先算二班：25×1.2-3=27棵",
        "variants": [
          {
            "question": "一班30棵，二班是一班的2倍多5棵，共多少？",
            "formula": "30+(30*2+5)",
            "answer": 95,
            "hint": "先算二班再求和"
          },
          {
            "question": "一班40棵，二班比一班少10棵，共多少？",
            "formula": "40+(40-10)",
            "answer": 70,
            "hint": "简单减法"
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
            "explain": "题目说「学校组织植树活动，一班植了25棵，二班植的是一班的1.2倍少3棵。校长想知道两个班一共植了多少棵树。」，问的是「两个班共植树多少棵？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：25、1.2、3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：25、1.2、3",
            "explain": "从题目中找到的关键数是：25（一班）、1.2（倍数）、3（少植）"
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
            "explain": "乘法：二班=25×1.2-3=27，总共=25+27=52棵"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有两部分：一班25棵，二班27棵",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "二班=25×1.2-3=27，总数=25+27=52",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "先求第二份量，再求总量",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个角的补角比它的余角大多少度？小明想用代数的方法算出这个差值。",
        "question": "补角比余角大多少度？",
        "formula": "(180-x) - (90-x) = 90",
        "answer": 90,
        "choices": [
          90,
          45,
          180,
          60
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "angle",
          "params": {
            "angle": 45,
            "complement": 135,
            "supplement": 90
          }
        },
        "knowledge": "余角与补角",
        "difficulty": 2,
        "hint": "余角=90°-角，补角=180°-角",
        "variants": [
          {
            "question": "一个角是30度，它的余角和补角各是多少？",
            "formula": "余角=60, 补角=150",
            "answer": 60,
            "hint": "分别计算"
          },
          {
            "question": "一个角的补角是120度，它的余角是多少？",
            "formula": "角=60, 余角=30",
            "answer": 30,
            "hint": "先求角再求余角"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "差是多少",
              "总数",
              "每份是多少",
              "有几份"
            ],
            "answer": "差是多少",
            "explain": "题目说「一个角的补角比它的余角大多少度？」，问的是补角与余角的差，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：180 和 90",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：180 和 90",
            "explain": "从题目中找到的关键数是：180（补角定义）、90（余角定义）"
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
            "explain": "减法：补角-余角=(180-x)-(90-x)=90"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示一个角、它的余角和补角的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "补角-余角=(180°-x)-(90°-x)=90°",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "补角总比余角大90°，与角的大小无关",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明用比例分配的方法分糖果，红球和白球的比例是3:2，共有50个球。他想算出红球和白球各有多少个。",
        "question": "红球和白球各有多少个？",
        "formula": "红球=50*3/5=30, 白球=50*2/5=20",
        "answer": 30,
        "choices": [30, 20, 25, 15],
        "visualType": "barModel",
        "visualData": {
          "total": 50,
          "parts": [
            {"label": "红球", "val": 30, "color": "#00A896"},
            {"label": "白球", "val": 20, "color": "#F5B800"}
          ]
        },
        "knowledge": "比例分配",
        "difficulty": 2,
        "hint": "总份数=3+2=5，红球占3/5，白球占2/5",
        "variants": [
          {"question": "男女生比例5:3，共40人，男女生各多少人？", "formula": "男生=40*5/8=25, 女生=40*3/8=15", "answer": 25, "hint": "总份数=8"},
          {"question": "甲乙丙比例2:3:4，总和90，各多少？", "formula": "甲=90*2/9=20, 乙=30, 丙=40", "answer": 20, "hint": "总份数=9"}
        ],
        "discoverySteps": [
          {"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["每份是多少", "总数", "有几份", "差是多少"], "answer": "每份是多少", "explain": "题目求红球和白球各多少，求每份是多少"},
          {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：3、2、50", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：3、2、50", "explain": "从题目中找到的关键数是：3、2、50"},
          {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：总份数=5，红球=50×3/5=30，白球=50×2/5=20"}
        ],
        "explainLayers": [
          {"icon": "👀", "title": "看图 — 图形结构", "text": "图中按比例展示红球30个和白球20个", "bg": "var(--teal-soft)", "color": "var(--teal)"},
          {"icon": "🧠", "title": "理解 — 数学关系", "text": "红球=50×3/5=30，白球=50×2/5=20", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"},
          {"icon": "🚀", "title": "推广 — 通用规律", "text": "按比例分配：每份=总量÷总份数", "bg": "var(--coral-soft)", "color": "var(--coral)"}
        ]
      },
      {
        "scene": "学校统计各年级人数，一年级120人，二年级比一年级多15人，三年级比二年级少10人。校长想知道三个年级一共有多少人。",
        "question": "三个年级共有多少人？",
        "formula": "120+(120+15)+(120+15-10)=370",
        "answer": 370,
        "choices": [370, 360, 380, 350],
        "visualType": "barModel",
        "visualData": {
          "total": 370,
          "parts": [
            {"label": "一年级", "val": 120, "color": "#00A896"},
            {"label": "二年级", "val": 135, "color": "#F5B800"},
            {"label": "三年级", "val": 125, "color": "#FB923C"}
          ]
        },
        "knowledge": "混合运算应用",
        "difficulty": 2,
        "hint": "二年级=120+15，三年级=二年级-10",
        "variants": [
          {"question": "一年级150人，二年级少20人，三年级多10人，共多少人？", "formula": "150+130+140", "answer": 420, "hint": "逐步计算"},
          {"question": "苹果100个，橘子多20个，梨少10个，共多少个？", "formula": "100+120+90", "answer": 310, "hint": "先求各部分"}
        ],
        "discoverySteps": [
          {"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["总数（一共多少）", "每份是多少", "有几份", "差是多少"], "answer": "总数（一共多少）", "explain": "题目求三个年级总人数，求总数"},
          {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：120、15、10", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：120、15、10", "explain": "从题目中找到的关键数是：120、15、10"},
          {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "加法", "explain": "加法：二年级=135，三年级=125，总共=370"}
        ],
        "explainLayers": [
          {"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示三个年级的人数条形", "bg": "var(--teal-soft)", "color": "var(--teal)"},
          {"icon": "🧠", "title": "理解 — 数学关系", "text": "一年级120，二年级135，三年级125，共370", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"},
          {"icon": "🚀", "title": "推广 — 通用规律", "text": "求总数，用加法", "bg": "var(--coral-soft)", "color": "var(--coral)"}
        ]
      },
      {
        "scene": "一个角的度数是它的补角的1/3，小明想知道这个角是多少度。",
        "question": "这个角是多少度？",
        "formula": "x=(180-x)/3, 4x=180, x=45",
        "answer": 45,
        "choices": [45, 60, 30, 90],
        "visualType": "geometry",
        "visualData": {"shape": "angle", "params": {"angle": 45, "supplement": 135}},
        "knowledge": "余角与补角应用",
        "difficulty": 3,
        "hint": "设角为x，补角=180-x，列方程",
        "variants": [
          {"question": "一个角是它的余角的2倍，这个角是多少度？", "formula": "x=2(90-x), 3x=180, x=60", "answer": 60, "hint": "列方程求解"},
          {"question": "一个角的补角是它的余角的3倍，这个角是多少？", "formula": "180-x=3(90-x), x=45", "answer": 45, "hint": "注意补角和余角的关系"}
        ],
        "discoverySteps": [
          {"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["计算结果", "每份是多少", "总数", "差是多少"], "answer": "计算结果", "explain": "题目求这个角的度数，求计算结果"},
          {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：1 和 3", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：1 和 3", "explain": "从题目中找到的关键数是：1、3、180"},
          {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "除法", "explain": "除法：设角为x，补角=180-x，x=(180-x)/3，解得x=45"}
        ],
        "explainLayers": [
          {"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示一个角和它的补角的关系", "bg": "var(--teal-soft)", "color": "var(--teal)"},
          {"icon": "🧠", "title": "理解 — 数学关系", "text": "x=(180-x)/3→3x=180-x→4x=180→x=45", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"},
          {"icon": "🚀", "title": "推广 — 通用规律", "text": "用方程解决角度问题", "bg": "var(--coral-soft)", "color": "var(--coral)"}
        ]
      },
      {
        "scene": "小明测量一块长方形土地，长是宽的2倍少5米，周长是110米。他想算出这块地的长和宽。",
        "question": "这块地的长和宽各是多少米？",
        "formula": "宽=x, 长=2x-5, 2(x+2x-5)=110",
        "answer": 20,
        "choices": [20, 25, 15, 30],
        "visualType": "geometry",
        "visualData": {"shape": "rectangle", "params": {"length": 35, "width": 20}},
        "knowledge": "一元一次方程应用",
        "difficulty": 3,
        "hint": "设宽为x，长为2x-5，周长=2(长+宽)",
        "variants": [
          {"question": "长方形长比宽的3倍多2米，周长52米，长宽各多少？", "formula": "宽=x, 长=3x+2, 2(x+3x+2)=52", "answer": 6, "hint": "解方程求x"},
          {"question": "长方形宽是长的一半少3米，周长46米，长宽各多少？", "formula": "长=x, 宽=x/2-3, 2(x+x/2-3)=46", "answer": 16, "hint": "注意比例关系"}
        ],
        "discoverySteps": [
          {"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["每份是多少", "总数", "有几份", "差是多少"], "answer": "每份是多少", "explain": "题目求长和宽各多少，求每份是多少"},
          {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：110、2、5", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：110、2、5", "explain": "从题目中找到的关键数是：110（周长）、2（倍数）、5（差值）"},
          {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "除法", "explain": "除法：设宽=x，长=2x-5，2(x+2x-5)=110，解得x=20"}
        ],
        "explainLayers": [
          {"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示长方形的长和宽", "bg": "var(--teal-soft)", "color": "var(--teal)"},
          {"icon": "🧠", "title": "理解 — 数学关系", "text": "宽=20，长=35，周长=2×(20+35)=110", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"},
          {"icon": "🚀", "title": "推广 — 通用规律", "text": "列方程解决几何问题", "bg": "var(--coral-soft)", "color": "var(--coral)"}
        ]
      },
      {
        "scene": "学校组织捐款，一班捐了240元，二班比一班多捐了1/4，三班比二班少捐了20元。校长想知道三个班共捐了多少元。",
        "question": "三个班共捐款多少元？",
        "formula": "二班=240*(1+1/4)=300, 三班=300-20=280, 总=820",
        "answer": 820,
        "choices": [820, 800, 840, 780],
        "visualType": "barModel",
        "visualData": {
          "total": 820,
          "parts": [
            {"label": "一班", "val": 240, "color": "#00A896"},
            {"label": "二班", "val": 300, "color": "#F5B800"},
            {"label": "三班", "val": 280, "color": "#FB923C"}
          ]
        },
        "knowledge": "分数应用",
        "difficulty": 3,
        "hint": "二班=240×(1+1/4)，三班=二班-20",
        "variants": [
          {"question": "甲数120，乙数比甲多1/3，丙数比乙少15，三数之和？", "formula": "乙=160, 丙=145, 总=425", "answer": 425, "hint": "逐步计算"},
          {"question": "一本书100页，第一天看1/5，第二天比第一天多10页，两天共看多少？", "formula": "第一天=20, 第二天=30, 共=50", "answer": 50, "hint": "分步计算"}
        ],
        "discoverySteps": [
          {"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["总数（一共多少）", "每份是多少", "有几份", "差是多少"], "answer": "总数（一共多少）", "explain": "题目求三个班共捐多少，求总数"},
          {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：240、1/4、20", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：240、1/4、20", "explain": "从题目中找到的关键数是：240、1/4、20"},
          {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：二班=240×5/4=300，三班=300-20=280，总共=240+300+280=820"}
        ],
        "explainLayers": [
          {"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示三个班的捐款金额", "bg": "var(--teal-soft)", "color": "var(--teal)"},
          {"icon": "🧠", "title": "理解 — 数学关系", "text": "一班240，二班300，三班280，共820", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"},
          {"icon": "🚀", "title": "推广 — 通用规律", "text": "求总数，用加法", "bg": "var(--coral-soft)", "color": "var(--coral)"}
        ]
      },
      {
        "scene": "一个扇形的半径是6厘米，圆心角是60度。小明想算出这个扇形的面积。",
        "question": "扇形的面积是多少平方厘米？",
        "formula": "S=60/360*π*6²=6π≈18.85",
        "answer": 19,
        "choices": [19, 37, 12, 24],
        "visualType": "geometry",
        "visualData": {"shape": "sector", "params": {"radius": 6, "angle": 60}},
        "knowledge": "扇形面积",
        "difficulty": 2,
        "hint": "扇形面积=圆心角/360×圆面积",
        "variants": [
          {"question": "半径4厘米，圆心角90度，扇形面积？", "formula": "90/360*π*16=4π≈12.57", "answer": 13, "hint": "90度是圆的1/4"},
          {"question": "半径10厘米，圆心角120度，扇形面积？", "formula": "120/360*π*100=100π/3≈104.7", "answer": 105, "hint": "120度是圆的1/3"}
        ],
        "discoverySteps": [
          {"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["总数（一共多少）", "每份是多少", "有几份", "差是多少"], "answer": "总数（一共多少）", "explain": "题目求扇形面积，求总数"},
          {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：6 和 60", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：6 和 60", "explain": "从题目中找到的关键数是：6（半径）、60（圆心角）"},
          {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：扇形面积=60/360×π×6²=6π≈18.85"}
        ],
        "explainLayers": [
          {"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示半径为6、圆心角60度的扇形", "bg": "var(--teal-soft)", "color": "var(--teal)"},
          {"icon": "🧠", "title": "理解 — 数学关系", "text": "扇形面积=60/360×π×36=6π≈18.85", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"},
          {"icon": "🚀", "title": "推广 — 通用规律", "text": "扇形面积=圆心角/360×πr²", "bg": "var(--coral-soft)", "color": "var(--coral)"}
        ]
      },
      {
        "scene": "学校调查学生喜欢的运动项目，足球20人，篮球15人，乒乓球10人，其他5人。校长想知道喜欢足球的占全班的百分比。",
        "question": "喜欢足球的占全班人数的百分之几？",
        "formula": "20/(20+15+10+5)*100%=40%",
        "answer": 40,
        "choices": [40, 35, 45, 50],
        "visualType": "barModel",
        "visualData": {
          "total": 50,
          "parts": [
            {"label": "足球", "val": 20, "color": "#00A896"},
            {"label": "篮球", "val": 15, "color": "#F5B800"},
            {"label": "乒乓球", "val": 10, "color": "#FB923C"},
            {"label": "其他", "val": 5, "color": "#E8A0BF"}
          ]
        },
        "knowledge": "统计与百分比",
        "difficulty": 2,
        "hint": "百分比=部分÷总数×100%",
        "variants": [
          {"question": "班级40人，喜欢语文24人，喜欢数学20人，两科都喜欢的8人，只喜欢语文的有多少人？", "formula": "24-8=16", "answer": 16, "hint": "用集合思想"},
          {"question": "果园有苹果树80棵，梨树60棵，桃树40棵，苹果树占总数的百分比？", "formula": "80/(80+60+40)*100%=40%", "answer": 40, "hint": "先求总数"}
        ],
        "discoverySteps": [
          {"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["每份是多少（或几份）", "总数（一共多少）", "差是多少", "和是多少"], "answer": "每份是多少（或几份）", "explain": "题目求足球人数占比，求每份是多少"},
          {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：20 和 50", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：20 和 50", "explain": "从题目中找到的关键数是：20（足球人数）、50（总人数）"},
          {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "除法", "explain": "除法：20÷50×100%=40%"}
        ],
        "explainLayers": [
          {"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示各运动项目的人数条形", "bg": "var(--teal-soft)", "color": "var(--teal)"},
          {"icon": "🧠", "title": "理解 — 数学关系", "text": "足球占比=20÷50×100%=40%", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"},
          {"icon": "🚀", "title": "推广 — 通用规律", "text": "百分比=部分÷总数×100%", "bg": "var(--coral-soft)", "color": "var(--coral)"}
        ]
      },
      {
        "scene": "小明用尺规作图画一个直角，他想验证这个直角是否为90度。他用量角器测量，发现两条边互相垂直。",
        "question": "互相垂直的两条线形成的角是多少度？",
        "formula": "90°",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "angle",
          "params": {
            "angle": 90
          }
        },
        "knowledge": "垂直与直角",
        "difficulty": 1,
        "hint": "垂直形成直角，直角=90°",
        "variants": [
          {
            "question": "两条线相交成90度，它们的关系是什么？",
            "formula": "互相垂直",
            "answer": 0,
            "hint": "垂直定义"
          },
          {
            "question": "直角三角形的直角是多少度？",
            "formula": "90°",
            "answer": 0,
            "hint": "直角定义"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "计算结果",
              "每份是多少",
              "总数",
              "差是多少"
            ],
            "answer": "计算结果",
            "explain": "题目说「小明用尺规作图画一个直角，他想验证这个直角是否为90度。」，问的是「互相垂直的两条线形成的角是多少度？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键信息：垂直",
              "只有总数",
              "只有每份数",
              "没有关键信息"
            ],
            "answer": "关键信息：垂直",
            "explain": "从题目中找到的关键信息是：两条边互相垂直"
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
            "explain": "乘法：垂直形成直角，直角=90°"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示两条互相垂直的线",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "互相垂直的两条线形成90°的角",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "垂直→直角=90°",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      }
    ]
  };
