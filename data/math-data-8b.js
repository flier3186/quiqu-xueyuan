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
      },
      {
        "id": "8B-19",
        "name": "比例线段与平行线",
        "concept": "平行线分线段成比例定理及其推论",
        "prerequisite": "7B-19",
        "extends": "8B-20 相似三角形",
        "visualStrategy": "平行线截线",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8B-20",
        "name": "相似三角形的判定",
        "concept": "两角对应相等、两边对应成比例且夹角相等、三边对应成比例",
        "prerequisite": "8B-19",
        "extends": "8B-21 相似三角形的性质",
        "visualStrategy": "动态验证",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8B-21",
        "name": "相似三角形的性质",
        "concept": "相似三角形对应边成比例，对应角相等，面积比等于相似比的平方",
        "prerequisite": "8B-20",
        "extends": "8B-22 位似图形",
        "visualStrategy": "缩放演示",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8B-22",
        "name": "位似图形",
        "concept": "两个图形相似且对应点连线交于一点，该点为位似中心",
        "prerequisite": "8B-21",
        "extends": "9A-01 一元二次方程",
        "visualStrategy": "位似变换",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8B-23",
        "name": "投影与视图",
        "concept": "平行投影与中心投影，三视图的画法",
        "prerequisite": "7B-13 图形的平移",
        "extends": "9A-01 一元二次方程",
        "visualStrategy": "投影演示",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8B-24",
        "name": "几何变换综合",
        "concept": "平移、旋转、对称、相似的综合应用",
        "prerequisite": "8B-15 轴对称与中心对称",
        "extends": "9A-01 一元二次方程",
        "visualStrategy": "变换综合",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
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
      },
      {
        "scene": "小明用相似三角形测量旗杆高度，他站在旗杆旁，身高1.6米，影长2米，旗杆影长15米。",
        "question": "旗杆的高度是多少米？",
        "formula": "旗杆高/15=1.6/2, 旗杆高=12",
        "answer": 12,
        "choices": [12, 10, 15, 8],
        "visualType": "geometry",
        "visualData": {"shape": "triangle", "params": {"height": 12, "base": 15}},
        "knowledge": "相似三角形应用",
        "difficulty": 2,
        "hint": "同一时刻，物高与影长成正比",
        "variants": [{"question": "树高3米，影长4米，同一时刻电线杆影长10米，电线杆多高？", "formula": "3*10/4=7.5", "answer": 8, "hint": "物高与影长成正比"}, {"question": "测得一建筑物影长30米，同时1.5米竹竿影长2米，建筑物多高？", "formula": "1.5*30/2=22.5", "answer": 22, "hint": "比例关系"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["总数（一共多少）", "每份是多少", "有几份", "差是多少"], "answer": "总数（一共多少）", "explain": "题目求旗杆高度，求总数"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：1.6、2、15", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：1.6、2、15", "explain": "从题目中找到的关键数是：1.6、2、15"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：旗杆高=1.6×15÷2=12米"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示相似三角形的测量原理", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "旗杆高/15=1.6/2，旗杆高=12米", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "同一时刻，物高与影长成正比", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "学校测量一个平行四边形花坛的面积，底边12米，高8米。校长想知道花坛的面积。",
        "question": "平行四边形花坛的面积是多少平方米？",
        "formula": "12*8=96",
        "answer": 96,
        "choices": [96, 48, 192, 72],
        "visualType": "geometry",
        "visualData": {"shape": "parallelogram", "params": {"base": 12, "height": 8}},
        "knowledge": "平行四边形面积",
        "difficulty": 2,
        "hint": "平行四边形面积=底×高",
        "variants": [{"question": "三角形底15厘米，高10厘米，面积是多少？", "formula": "15*10/2=75", "answer": 75, "hint": "三角形面积=底×高÷2"}, {"question": "梯形上底6米，下底10米，高5米，面积是多少？", "formula": "(6+10)*5/2=40", "answer": 40, "hint": "梯形面积=(上底+下底)×高÷2"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["总数（一共多少）", "每份是多少", "有几份", "差是多少"], "answer": "总数（一共多少）", "explain": "题目求平行四边形面积，求总数"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：12 和 8", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：12 和 8", "explain": "从题目中找到的关键数是：12（底）、8（高）"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：面积=12×8=96平方米"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示平行四边形及其底和高", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "面积=12×8=96平方米", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "平行四边形面积=底×高", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "小明解方程组，已知一个角的补角比它的余角的2倍大30度。他想求出这个角的度数。",
        "question": "这个角是多少度？",
        "formula": "180-x=2(90-x)+30, x=30",
        "answer": 30,
        "choices": [30, 60, 45, 90],
        "visualType": "geometry",
        "visualData": {"shape": "angle", "params": {"angle": 30, "complement": 60, "supplement": 150}},
        "knowledge": "方程与角度",
        "difficulty": 3,
        "hint": "设角为x，补角=180-x，余角=90-x",
        "variants": [{"question": "一个角的补角比它的余角大50度，这个角是多少？", "formula": "(180-x)-(90-x)=50, 90=50矛盾", "answer": 0, "hint": "此题无解"}, {"question": "一个角的余角是它的补角的1/3，这个角是多少度？", "formula": "90-x=(180-x)/3, x=45", "answer": 45, "hint": "列方程求解"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["计算结果", "每份是多少", "总数", "差是多少"], "answer": "计算结果", "explain": "题目求角的度数，求计算结果"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：2、30", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：2、30", "explain": "从题目中找到的关键数是：2（倍数）、30（差值）"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "除法", "explain": "除法：设角为x，补角=180-x，余角=90-x，180-x=2(90-x)+30，解得x=30"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示角、余角和补角的关系", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "180-x=2(90-x)+30，x=30", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "用方程解决角度问题", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "学校调查学生最喜欢的学科，结果如下：数学15人，语文20人，英语12人，科学8人，其他5人。校长想用扇形统计图展示这些数据。",
        "question": "语文在扇形图中对应的圆心角是多少度？",
        "formula": "360°*20/(15+20+12+8+5)=360°*20/60=120°",
        "answer": 120,
        "choices": [120, 100, 140, 90],
        "visualType": "geometry",
        "visualData": {"shape": "pie", "params": {"angle": 120}},
        "knowledge": "扇形统计图",
        "difficulty": 2,
        "hint": "圆心角=360°×该部分占总体的百分比",
        "variants": [{"question": "某班40人，喜欢篮球的有12人，在扇形图中占多少度？", "formula": "360°*12/40=108°", "answer": 108, "hint": "圆心角=360°×比例"}, {"question": "全班60人，喜欢足球30人，喜欢篮球18人，喜欢乒乓球12人，各部分圆心角分别是多少？", "formula": "足球180°，篮球108°，乒乓球72°", "answer": 180, "hint": "分别计算"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["计算结果", "每份是多少", "总数", "差是多少"], "answer": "计算结果", "explain": "题目求语文对应的圆心角，求计算结果"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：20 和 60", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：20 和 60", "explain": "从题目中找到的关键数是：20（喜欢语文的人数）、60（总人数）"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "除法", "explain": "除法：圆心角=360°×20÷60=120°"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示各学科在扇形统计图中的占比", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "语文圆心角=360°×20/60=120°", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "圆心角=360°×部分÷总体", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "小明画了一个圆，半径为4厘米。他想算出这个圆的周长和面积。",
        "question": "圆的周长和面积分别是多少？",
        "formula": "C=2πr=8π≈25.1, S=πr²=16π≈50.3",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "radius": 4
          }
        },
        "knowledge": "圆的周长与面积",
        "difficulty": 1,
        "hint": "周长=2πr，面积=πr²",
        "variants": [
          {
            "question": "圆半径3厘米，周长和面积分别是多少？",
            "formula": "C=6π≈18.8, S=9π≈28.3",
            "answer": 18,
            "hint": "代入公式"
          },
          {
            "question": "圆直径10厘米，周长和面积分别是多少？",
            "formula": "r=5, C=10π, S=25π",
            "answer": 25,
            "hint": "先求半径"
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
            "explain": "题目说「小明画了一个圆，半径为4厘米。他想算出这个圆的周长和面积。」，问的是「圆的周长和面积分别是多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4",
            "explain": "从题目中找到的关键数是：4（半径）"
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
            "explain": "乘法：C=2π×4=8π≈25.1厘米，S=π×4²=16π≈50.3平方厘米"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示圆及其半径",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "C=8π≈25.1厘米，S=16π≈50.3平方厘米",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "圆周长=2πr，圆面积=πr²",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红画了一条抛物线y=x²-2x-3，她想找出这条抛物线的顶点坐标。",
        "question": "抛物线的顶点坐标是什么？",
        "formula": "x=-b/2a=1, y=1-2-3=-4, 顶点(1,-4)",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "parabola",
          "params": {
            "vertex": [
              1,
              -4
            ],
            "roots": [
              -1,
              3
            ]
          }
        },
        "knowledge": "二次函数顶点",
        "difficulty": 2,
        "hint": "顶点横坐标x=-b/(2a)",
        "variants": [
          {
            "question": "抛物线y=x²-4x+3，顶点坐标？",
            "formula": "x=2, y=-1, 顶点(2,-1)",
            "answer": 2,
            "hint": "代入公式"
          },
          {
            "question": "抛物线y=2x²-4x+1，顶点坐标？",
            "formula": "x=1, y=-1, 顶点(1,-1)",
            "answer": 1,
            "hint": "注意a=2"
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
            "explain": "题目说「小红画了一条抛物线y=x²-2x-3，她想找出这条抛物线的顶点坐标。」，问的是「抛物线的顶点坐标是什么？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1、-2、-3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1、-2、-3",
            "explain": "从题目中找到的关键数是：1（二次项系数）、-2（一次项系数）、-3（常数项）"
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
            "explain": "除法：顶点横坐标x=-(-2)/(2×1)=1，代入得y=-4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示抛物线及其顶点",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "顶点横坐标x=1，纵坐标y=-4",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "顶点坐标公式：(-b/(2a), (4ac-b²)/(4a))",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明站在离旗杆25米处，测得旗杆顶端的仰角为45度。他想算出旗杆的高度（忽略观测者身高）。",
        "question": "旗杆的高度约为多少米？",
        "formula": "h=25*tan45°=25×1=25",
        "answer": 25,
        "choices": [
          25,
          50,
          12,
          35
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "base": 25,
            "angle": 45,
            "height": 25
          }
        },
        "knowledge": "特殊角三角函数",
        "difficulty": 1,
        "hint": "tan45°=1",
        "variants": [
          {
            "question": "离树20米，仰角30度，树高多少？",
            "formula": "h=20*tan30°=20√3/3≈11.5",
            "answer": 12,
            "hint": "tan30°=√3/3"
          },
          {
            "question": "离楼15米，仰角60度，楼高多少？",
            "formula": "h=15*tan60°=15√3≈26",
            "answer": 26,
            "hint": "tan60°=√3"
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
            "explain": "题目说「小明站在离旗杆25米处，测得旗杆顶端的仰角为45度。他想算出旗杆的高度。」，问的是「旗杆的高度约为多少米？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：25 和 45",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：25 和 45",
            "explain": "从题目中找到的关键数是：25（距离）、45°（仰角）"
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
            "explain": "乘法：旗杆高=25×tan45°=25×1=25米"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "等腰直角三角形：底边25米，仰角45度，求对边（旗杆高）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "tan45°=h/25，h=25×1=25米",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "tan45°=1，等腰直角三角形两直角边相等",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校统计学生每周阅读时间，得到以下数据：3小时4人，4小时6人，5小时10人，6小时5人，7小时2人。校长想知道学生平均每周阅读时间。",
        "question": "学生平均每周阅读时间是多少小时？",
        "formula": "平均=(3×4+4×6+5×10+6×5+7×2)/(4+6+10+5+2)=120/27≈4.4",
        "answer": 4,
        "choices": [
          4,
          5,
          3,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 4,
          "parts": [
            {
              "label": "3小时",
              "val": 4,
              "color": "#00A896"
            },
            {
              "label": "4小时",
              "val": 6,
              "color": "#F5B800"
            },
            {
              "label": "5小时",
              "val": 10,
              "color": "#FB923C"
            },
            {
              "label": "6小时",
              "val": 5,
              "color": "#E8A0BF"
            },
            {
              "label": "7小时",
              "val": 2,
              "color": "#1E3A5F"
            }
          ]
        },
        "knowledge": "加权平均数",
        "difficulty": 2,
        "hint": "加权平均数=总和÷总人数",
        "variants": [
          {
            "question": "数据：2小时3人，3小时5人，4小时2人，平均时间？",
            "formula": "(6+15+8)/10=2.9",
            "answer": 3,
            "hint": "分别计算再求平均"
          },
          {
            "question": "数据：80分5人，90分3人，100分2人，平均分？",
            "formula": "(400+270+200)/10=87",
            "answer": 87,
            "hint": "加权求和"
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
            "explain": "题目说「学校统计学生每周阅读时间，得到以下数据：3小时4人，4小时6人，5小时10人，6小时5人，7小时2人。校长想知道学生平均每周阅读时间。」，问的是「学生平均每周阅读时间是多少小时？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3、4、5、6、7 和 4、6、10、5、2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3、4、5、6、7 和 4、6、10、5、2",
            "explain": "从题目中找到的关键数是：3、4、5、6、7（时间）、4、6、10、5、2（人数）"
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
            "explain": "除法：平均=(3×4+4×6+5×10+6×5+7×2)/27=120/27≈4.4≈4小时"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示不同阅读时间的学生人数分布",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "平均=(3×4+4×6+5×10+6×5+7×2)/27=120/27≈4.4≈4小时",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加权平均数=各数据×权重之和÷权重之和",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      }
    ]
  };
