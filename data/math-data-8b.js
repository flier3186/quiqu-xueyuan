window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['8b'] = {
    "title": "八年级下册·分式·反比例函数",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
      {
        "id": "8B-01",
        "name": "频数与频率",
        "concept": "频数是出现的次数，频率=频数/总数",
        "prerequisite": "7B-10",
        "extends": "8B-02 数据的波动",
        "visualStrategy": "频数分布表",
        "visualType": "barModel",
        "coreLiteracy": "数据分析",
        "difficulty": 1,
        "isKeyTopic": false
      },
      {
        "id": "8B-02",
        "name": "数据的波动",
        "concept": "方差衡量数据的离散程度，方差越大数据越分散",
        "prerequisite": "8B-01",
        "extends": "8B-03 概率的运算",
        "visualStrategy": "波动分析",
        "visualType": "barModel",
        "coreLiteracy": "数据分析",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "8B-03",
        "name": "概率的运算",
        "concept": "互斥事件概率相加，独立事件概率相乘",
        "prerequisite": "7A-15",
        "extends": "8B-04 列举法求概率",
        "visualStrategy": "树状图",
        "visualType": "barModel",
        "coreLiteracy": "随机观念",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-04",
        "name": "列举法求概率",
        "concept": "用列表或树状图列举所有等可能结果",
        "prerequisite": "8B-03",
        "extends": "8B-05 频率估计概率",
        "visualStrategy": "树状图",
        "visualType": "barModel",
        "coreLiteracy": "随机观念",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-05",
        "name": "频率估计概率",
        "concept": "大量重复试验中，频率稳定在概率附近",
        "prerequisite": "8B-04",
        "extends": "8B-06 二次根式的运算",
        "visualStrategy": "实验模拟",
        "visualType": "barModel",
        "coreLiteracy": "随机观念",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-06",
        "name": "二次根式的运算",
        "concept": "√a·√b=√(ab)，√a/√b=√(a/b)",
        "prerequisite": "8A-01",
        "extends": "8B-07 二次根式的化简",
        "visualStrategy": "根式运算",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "8B-07",
        "name": "二次根式的化简",
        "concept": "把根号内能开方的因子开出来",
        "prerequisite": "8B-06",
        "extends": "8B-08 二次根式方程",
        "visualStrategy": "化简演示",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-08",
        "name": "二次根式方程",
        "concept": "含有二次根式的方程，注意检验增根",
        "prerequisite": "8B-07",
        "extends": "8B-09 勾股定理的应用",
        "visualStrategy": "方程求解",
        "visualType": "numberLine",
        "coreLiteracy": "方程思想",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8B-09",
        "name": "勾股定理的应用",
        "concept": "利用勾股定理解决实际问题，如距离计算",
        "prerequisite": "7B-06",
        "extends": "8B-10 勾股定理的逆定理",
        "visualStrategy": "实际应用",
        "visualType": "geometry",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8B-10",
        "name": "勾股定理的逆定理",
        "concept": "若a²+b²=c²，则以a,b,c为边的三角形是直角三角形",
        "prerequisite": "8B-09",
        "extends": "8B-11 命题与定理",
        "visualStrategy": "判定验证",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8B-11",
        "name": "命题与定理",
        "concept": "判断真假的陈述句是命题，真命题是经过证明的定理",
        "prerequisite": "7B-03",
        "extends": "8B-12 逆命题与逆定理",
        "visualStrategy": "真假判断",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-12",
        "name": "逆命题与逆定理",
        "concept": "交换原命题的条件和结论得到逆命题，逆命题不一定是真命题",
        "prerequisite": "8B-11",
        "extends": "8B-13 角平分线的性质",
        "visualStrategy": "对偶关系",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-13",
        "name": "角平分线的性质",
        "concept": "角平分线上的点到角两边的距离相等",
        "prerequisite": "8B-12",
        "extends": "8B-14 线段垂直平分线",
        "visualStrategy": "距离相等",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-14",
        "name": "线段垂直平分线",
        "concept": "垂直平分线上的点到线段两端距离相等",
        "prerequisite": "8B-13",
        "extends": "8B-15 三角形的四心",
        "visualStrategy": "对称轴",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-15",
        "name": "三角形的四心",
        "concept": "重心、垂心、外心、内心是三角形的特殊点",
        "prerequisite": "8B-14",
        "extends": "8B-16 多边形内角和",
        "visualStrategy": "特殊点定位",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8B-16",
        "name": "多边形内角和",
        "concept": "n边形内角和=(n-2)×180°",
        "prerequisite": "7B-02",
        "extends": "8B-17 多边形外角和",
        "visualStrategy": "内角计算",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-17",
        "name": "多边形外角和",
        "concept": "任意多边形外角和等于360°",
        "prerequisite": "8B-16",
        "extends": "9A-01 二次函数",
        "visualStrategy": "外角测量",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-18",
        "name": "概率与整式运算",
        "concept": "独立事件概率相乘，整式运算遵循指数法则",
        "prerequisite": "8B-03",
        "extends": "9A-06 二次函数的应用",
        "visualStrategy": "树状图与式子",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": true
      }
    ],
    "units": [
      {
        "name": "分式",
        "level": "current",
        "children": [
          {
            "name": "分式概念",
            "level": "done"
          },
          {
            "name": "分式运算",
            "level": "current"
          },
          {
            "name": "分式方程",
            "level": "locked"
          }
        ]
      },
      {
        "name": "反比例函数",
        "level": "locked",
        "children": [
          {
            "name": "反比例函数图像",
            "level": "locked"
          },
          {
            "name": "反比例函数性质",
            "level": "locked"
          }
        ]
      },
      {
        "name": "四边形",
        "level": "locked",
        "children": [
          {
            "name": "平行四边形",
            "level": "locked"
          },
          {
            "name": "矩形菱形正方形",
            "level": "locked"
          }
        ]
      },
      {
        "name": "数据的分析",
        "level": "locked",
        "children": [
          {
            "name": "平均数中位数",
            "level": "locked"
          },
          {
            "name": "方差",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "小明解分式方程 2/x = 1/(x-3)，想知道x的值是多少。",
        "question": "方程的解是多少？",
        "formula": "2(x-3) = x, x = ?",
        "answer": 6,
        "choices": [
          6,
          3,
          2,
          9
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 10,
          "points": [
            {
              "pos": 6,
              "label": "x",
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "分式方程",
        "difficulty": 3,
        "hint": "交叉相乘再解方程，注意验根",
        "variants": [
          {
            "question": "解方程 3/x = 1/(x-2)",
            "formula": "3(x-2)=x",
            "answer": 3,
            "hint": "交叉相乘"
          },
          {
            "question": "解方程 1/(x+1) = 2/(x+3)",
            "formula": "x+3=2(x+1)",
            "answer": 1,
            "hint": "交叉相乘后移项"
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
            "explain": "题目说「小明解分式方程 2/x = 1/(x-3)，想知道x的值是多少。」，问的是「方程的解是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：2 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：2 和 3",
            "explain": "从题目中找到的关键数是：2、3"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "计算",
            "explain": "计算：2(x-3) = x, x = ?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上从到10，帮助理解数量关系和运算过程",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "2(x-3) = x, x = ?=6",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "根据题目条件，直接计算结果",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "已知反比例函数 y = 12/x，当 x = 4 时 y 等于多少？",
        "question": "当 x=4 时 y=?",
        "formula": "y = 12/4 = ?",
        "answer": 3,
        "choices": [
          3,
          4,
          8,
          48
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 12,
          "parts": [
            {
              "label": "x",
              "val": 4,
              "color": "#00A896"
            },
            {
              "label": "y",
              "val": 3,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "反比例函数",
        "difficulty": 2,
        "hint": "代入x值求y",
        "variants": [
          {
            "question": "y=20/x，当x=5时y=?",
            "formula": "y=20/5",
            "answer": 4,
            "hint": "直接代入"
          },
          {
            "question": "y=k/x过点(2,6)，k=?",
            "formula": "k=2*6",
            "answer": 12,
            "hint": "k=xy"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份是多少（或几份）",
              "总数（一共多少）",
              "差是多少",
              "和是多少"
            ],
            "answer": "每份是多少（或几份）",
            "explain": "题目说「已知反比例函数 y = 12/x，当 x = 4 时 y 等于多少？」，问的是「当 x=4 时 y=?」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：12 和 4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：12 和 4",
            "explain": "从题目中找到的关键数是：12、4"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "除法",
            "explain": "除法：y = 12/4 = ?=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表4，合起来就是12",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "y = 12/4 = ?=3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求每份是多少或求有几份，用除法。总数÷每份数=份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个平行四边形的底是8厘米，高是5厘米。小红想算出它的面积，以及如果底增加2厘米面积增加多少。",
        "question": "原面积和增加面积各是多少？",
        "formula": "原面积=40, 增加=10",
        "answer": 40,
        "choices": [
          40,
          50,
          40,
          10
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "parallelogram",
          "params": {
            "base": 8,
            "height": 5
          }
        },
        "knowledge": "平行四边形面积",
        "difficulty": 2,
        "hint": "面积=底*高",
        "variants": [
          {
            "question": "平行四边形底10高6，面积？",
            "formula": "10*6",
            "answer": 60,
            "hint": "底乘高"
          },
          {
            "question": "平行四边形面积48底12，高？",
            "formula": "48/12",
            "answer": 4,
            "hint": "高=面积/底"
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
            "explain": "题目说「一个平行四边形的底是8厘米，高是5厘米。小红想算出它的面积，以及如果底增加2厘米面积增加多少。」，问的是「原面积和增加面积各是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：40 和 10",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：40 和 10",
            "explain": "从题目中找到的关键数是：40、10"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "计算",
            "explain": "计算：原面积=40, 增加=10=40"
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
            "text": "原面积=40, 增加=10=40",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "根据题目条件，直接计算结果",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一组数据：12, 15, 18, 20, 25。小明想算出这组数据的平均数和中位数。",
        "question": "平均数和中位数分别是多少？",
        "formula": "平均数=18, 中位数=18",
        "answer": 18,
        "choices": [
          18,
          18,
          18,
          20
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 18,
          "parts": [
            {
              "label": "平均数",
              "val": 18,
              "color": "#00A896"
            },
            {
              "label": "中位数",
              "val": 18,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "数据的集中趋势",
        "difficulty": 2,
        "hint": "平均数=总和/个数，中位数是中间的数",
        "variants": [
          {
            "question": "数据：10,20,30,40,50，平均数和中位数？",
            "formula": "平均=30, 中位=30",
            "answer": 30,
            "hint": "对称数据"
          },
          {
            "question": "数据：5,10,15,20,100，平均数和中位数？",
            "formula": "平均=30, 中位=15",
            "answer": 15,
            "hint": "极端值影响平均数"
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
            "explain": "题目说「一组数据：12, 15, 18, 20, 25。小明想算出这组数据的平均数和中位数。」，问的是「平均数和中位数分别是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：18 和 18",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：18 和 18",
            "explain": "从题目中找到的关键数是：18、18"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "计算",
            "explain": "计算：平均数=18, 中位数=18=18"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表18，合起来就是18",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "平均数=18, 中位数=18=18",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "根据题目条件，直接计算结果",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明计算 (a^2*b)^3 / (a*b)^2，化简结果是多少？",
        "question": "化简结果是多少？",
        "formula": "a^6*b^3/a^2*b^2 = a^4*b",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 1,
          "parts": [
            {
              "label": "结果",
              "val": 1,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "整式运算",
        "difficulty": 3,
        "hint": "先算乘方再算除法，同底数幂相除指数相减",
        "variants": [
          {
            "question": "(x^2)^3 * x^4 = ?",
            "formula": "x^6*x^4=x^10",
            "answer": 10,
            "hint": "指数相加"
          },
          {
            "question": "a^6/a^2 = ?",
            "formula": "a^(6-2)=a^4",
            "answer": 4,
            "hint": "指数相减"
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
            "explain": "题目说「小明计算 (a^2*b)^3 / (a*b)^2，化简结果是多少？」，问的是「化简结果是多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：6 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：6 和 3",
            "explain": "从题目中找到的关键数是：6、3、2、2、4"
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
            "explain": "乘法：a^6*b^3/a^2*b^2 = a^4*b=0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有1条等长的条形，每条代表1，合起来就是1",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "a^6*b^3/a^2*b^2 = a^4*b=0",
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
        "scene": "小明解分式方程 3/(x-1) = 2/(x+1)，他想知道x的值是多少。",
        "question": "方程的解是多少？",
        "formula": "3(x+1) = 2(x-1), x = ?",
        "answer": -5,
        "choices": [
          -5,
          5,
          1,
          -1
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": -10,
          "end": 10,
          "points": [
            {
              "pos": -5,
              "label": "x",
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "分式方程求解",
        "difficulty": 3,
        "hint": "交叉相乘，注意检验增根",
        "variants": [
          {
            "question": "解方程 2/(x+2) = 1/x",
            "formula": "2x=x+2, x=2",
            "answer": 2,
            "hint": "交叉相乘"
          },
          {
            "question": "解方程 1/(x-2) = 2/(x+2)",
            "formula": "x+2=2(x-2)",
            "answer": 6,
            "hint": "移项求解"
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
            "explain": "题目说「小明解分式方程 3/(x-1) = 2/(x+1)，他想知道x的值是多少。」，问的是「方程的解是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3、1、2、1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3、1、2、1",
            "explain": "从题目中找到的关键数是：3、1、2、1"
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
            "explain": "乘法：3(x+1)=2(x-1)，3x+3=2x-2，x=-5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上标出解x=-5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3(x+1)=2(x-1) → 3x+3=2x-2 → x=-5",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分式方程：交叉相乘，去分母，注意检验增根",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "已知反比例函数y=k/x经过点(-2, 6)，小红想求出k的值和当x=3时的y值。",
        "question": "k和x=3时的y分别是多少？",
        "formula": "k=-12, y=-12/3=-4",
        "answer": -4,
        "choices": [
          -4,
          4,
          -2,
          2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": -4,
          "parts": [
            {
              "label": "k",
              "val": -12,
              "color": "#00A896"
            },
            {
              "label": "y(x=3)",
              "val": -4,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "反比例函数系数",
        "difficulty": 2,
        "hint": "k=xy，代入点坐标求k",
        "variants": [
          {
            "question": "反比例函数过点(3,4)，求k和当x=6时y",
            "formula": "k=12, y=12/6=2",
            "answer": 2,
            "hint": "k=xy"
          },
          {
            "question": "y=k/x过点(-4,3)，求k和当x=-2时y",
            "formula": "k=-12, y=-12/-2=6",
            "answer": 6,
            "hint": "k=xy"
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
            "explain": "题目说「已知反比例函数y=k/x经过点(-2, 6)，小红想求出k的值和当x=3时的y值。」，问的是「k和x=3时的y分别是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：-2 和 6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：-2 和 6",
            "explain": "从题目中找到的关键数是：-2（x坐标）、6（y坐标）、3（求y时的x值）"
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
            "explain": "乘法：k=(-2)×6=-12，y=-12/3=-4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示反比例函数k值与y值的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "k=(-2)×6=-12，y=-12/3=-4",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "反比例函数：k=xy，代入点坐标求k",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一组数据：15, 20, 25, 30, 35, 40。小明想算出这组数据的方差。",
        "question": "这组数据的方差是多少？",
        "formula": "平均数=27.5, 方差=87.5",
        "answer": 87,
        "choices": [
          87,
          75,
          100,
          50
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 87.5,
          "parts": [
            {
              "label": "平均数",
              "val": 27.5,
              "color": "#00A896"
            },
            {
              "label": "方差",
              "val": 87.5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "数据的离散程度",
        "difficulty": 3,
        "hint": "方差=各数据与平均数差的平方和÷数据个数",
        "variants": [
          {
            "question": "数据：2,4,6,8,10，方差？",
            "formula": "平均=6, 方差=8",
            "answer": 8,
            "hint": "对称数据"
          },
          {
            "question": "数据：10,10,10,10,10，方差？",
            "formula": "平均=10, 方差=0",
            "answer": 0,
            "hint": "数据相同方差为0"
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
            "explain": "题目说「一组数据：15, 20, 25, 30, 35, 40。小明想算出这组数据的方差。」，问的是「这组数据的方差是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：15,20,25,30,35,40",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：15,20,25,30,35,40",
            "explain": "从题目中找到的关键数是：15、20、25、30、35、40（共6个数据）"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "除法",
            "explain": "除法：平均数=27.5，方差=[(15-27.5)²+(20-27.5)²+...+(40-27.5)²]÷6≈87.5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示数据的分布与离散程度",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "平均数=27.5，各数据与平均数差的平方和=525，方差=525÷6=87.5",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "方差衡量数据的离散程度，方差越大数据越分散",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个袋子中有3个红球和2个白球，小明随机摸出一个球后放回，再摸一个。他想算出两次都摸到红球的概率。",
        "question": "两次都摸到红球的概率是多少？",
        "formula": "P=3/5×3/5=9/25",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 9,
          "parts": [
            {
              "label": "红球",
              "val": 3,
              "color": "#00A896"
            },
            {
              "label": "白球",
              "val": 2,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "概率的乘法",
        "difficulty": 3,
        "hint": "放回抽样，两次独立，概率相乘",
        "variants": [
          {
            "question": "袋中有2红3蓝，不放回摸两次都是红球的概率？",
            "formula": "2/5×1/4=1/10",
            "answer": 1,
            "hint": "不放回，第二次分母减1"
          },
          {
            "question": "袋中有4红2蓝，摸两次（放回）一红一蓝的概率？",
            "formula": "4/6×2/6×2=8/18",
            "answer": 8,
            "hint": "两种顺序：红蓝或蓝红"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份是多少（或几份）",
              "总数（一共多少）",
              "差是多少",
              "和是多少"
            ],
            "answer": "每份是多少（或几份）",
            "explain": "题目说「一个袋子中有3个红球和2个白球，小明随机摸出一个球后放回，再摸一个。他想算出两次都摸到红球的概率。」，问的是「两次都摸到红球的概率是多少？」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：3（红球数）、2（白球数）、5（总数）"
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
            "explain": "乘法：P(红)=3/5，放回后P(红)=3/5，两次都红=3/5×3/5=9/25"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示袋中红白球的数量分布",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "P(两次都红)=3/5×3/5=9/25",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "独立事件概率：P(A∩B)=P(A)×P(B)",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明计算 (2a²b)³ ÷ (4ab²)，他想知道化简结果是多少。",
        "question": "化简结果是多少？",
        "formula": "8a^6*b^3 / 4a*b^2 = 2a^5*b",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 2,
          "parts": [
            {
              "label": "系数",
              "val": 2,
              "color": "#00A896"
            },
            {
              "label": "a^5*b",
              "val": 1,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "整式乘除运算",
        "difficulty": 3,
        "hint": "先算乘方再算除法，同底数幂相除指数相减",
        "variants": [
          {
            "question": "(x^3)^2 ÷ x^4 = ?",
            "formula": "x^6/x^4=x^2",
            "answer": 2,
            "hint": "指数相减"
          },
          {
            "question": "(3a²b)² ÷ (6ab) = ?",
            "formula": "9a^4*b^2/6ab=3/2*a^3*b",
            "answer": 3,
            "hint": "系数相除，指数相减"
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
            "explain": "题目说「小明计算 (2a²b)³ ÷ (4ab²)，他想知道化简结果是多少。」，问的是「化简结果是多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：2、3、4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：2、3、4",
            "explain": "从题目中找到的关键数是：2（系数）、3（指数）、4（除数系数）"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "除法",
            "explain": "除法：(2a²b)³=8a⁶b³，8a⁶b³÷4ab²=2a⁵b"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示整式乘除的运算过程",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(2a²b)³÷(4ab²)=8a⁶b³÷4ab²=2a⁵b",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "先算乘方，再算乘除，同底数幂相除指数相减",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      }
    ]
  };
