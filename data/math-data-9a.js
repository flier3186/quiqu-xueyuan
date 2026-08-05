window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['9a'] = {
    "title": "九年级上册·一元二次方程·二次函数",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
      {
        "id": "9A-01",
        "name": "二次函数概念",
        "concept": "y=ax²+bx+c(a≠0)的图象是抛物线",
        "prerequisite": "8A-02",
        "extends": "9A-02 二次函数图象与性质",
        "visualStrategy": "坐标系抛物线",
        "visualType": "numberLine",
        "coreLiteracy": "函数思想",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "9A-02",
        "name": "二次函数图象与性质",
        "concept": "开口方向由a决定，顶点坐标为(-b/2a, (4ac-b²)/4a)",
        "prerequisite": "9A-01",
        "extends": "9A-03 二次函数与方程",
        "visualStrategy": "动态抛物线",
        "visualType": "numberLine",
        "coreLiteracy": "函数思想",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "9A-03",
        "name": "二次函数与方程",
        "concept": "二次函数图象与x轴交点的横坐标是对应方程的根",
        "prerequisite": "9A-02",
        "extends": "9A-04 二次函数最值",
        "visualStrategy": "交点分析",
        "visualType": "numberLine",
        "coreLiteracy": "数形结合",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "9A-04",
        "name": "二次函数最值",
        "concept": "a>0时顶点为最小值点，a<0时顶点为最大值点",
        "prerequisite": "9A-03",
        "extends": "9A-05 二次不等式",
        "visualStrategy": "最值分析",
        "visualType": "numberLine",
        "coreLiteracy": "函数思想",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "9A-05",
        "name": "二次不等式",
        "concept": "ax²+bx+c>0的解集与抛物线在x轴上方部分对应",
        "prerequisite": "9A-04",
        "extends": "9A-06 二次函数的应用",
        "visualStrategy": "不等式区间",
        "visualType": "numberLine",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "9A-06",
        "name": "二次函数的应用",
        "concept": "用二次函数模型解决实际问题，如面积最大、利润最大",
        "prerequisite": "9A-05",
        "extends": "9A-07 锐角三角函数",
        "visualStrategy": "实际应用",
        "visualType": "numberLine",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "9A-07",
        "name": "锐角三角函数",
        "concept": "sinA=对边/斜边，cosA=邻边/斜边，tanA=对边/邻边",
        "prerequisite": "7B-06",
        "extends": "9A-08 特殊角的三角函数值",
        "visualStrategy": "直角三角形",
        "visualType": "geometry",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "9A-08",
        "name": "特殊角的三角函数值",
        "concept": "sin30°=1/2, cos30°=√3/2, tan30°=√3/3",
        "prerequisite": "9A-07",
        "extends": "9A-09 解直角三角形",
        "visualStrategy": "特殊角对照",
        "visualType": "geometry",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "9A-09",
        "name": "解直角三角形",
        "concept": "已知两边或一边一角可解直角三角形",
        "prerequisite": "9A-08",
        "extends": "9A-10 三角函数的应用",
        "visualStrategy": "三角形求解",
        "visualType": "geometry",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "9A-10",
        "name": "三角函数的应用",
        "concept": "用三角函数解决测量问题，如高度、距离计算",
        "prerequisite": "9A-09",
        "extends": "9A-11 弧长与扇形面积",
        "visualStrategy": "实际测量",
        "visualType": "geometry",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "9A-11",
        "name": "弧长与扇形面积",
        "concept": "l=nπr/180, S=nπr²/360",
        "prerequisite": "8A-15",
        "extends": "9A-12 圆锥的侧面展开图",
        "visualStrategy": "扇形展开",
        "visualType": "geometry",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "9A-12",
        "name": "圆锥的侧面展开图",
        "concept": "圆锥侧面展开是扇形，扇形半径=圆锥母线长",
        "prerequisite": "9A-11",
        "extends": "9A-13 旋转体体积",
        "visualStrategy": "展开图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "9A-13",
        "name": "旋转体体积",
        "concept": "圆锥体积=1/3·底面积·高",
        "prerequisite": "9A-12",
        "extends": "9A-14 投影与视图",
        "visualStrategy": "立体展开",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "9A-14",
        "name": "投影与视图",
        "concept": "正投影得到三视图：主视图、俯视图、左视图",
        "prerequisite": "9A-13",
        "extends": "9A-15 相似三角形的判定",
        "visualStrategy": "三视图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "9A-15",
        "name": "相似三角形的判定",
        "concept": "两角对应相等、两边成比例夹角相等、三边成比例",
        "prerequisite": "8A-08",
        "extends": "9A-16 位似与相似",
        "visualStrategy": "判定对比",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "9A-16",
        "name": "位似与相似",
        "concept": "位似是特殊的相似，位似中心到对应点的比等于位似比",
        "prerequisite": "9A-15",
        "extends": "9A-17 圆的切线长定理",
        "visualStrategy": "位似变换",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "9A-17",
        "name": "圆的切线长定理",
        "concept": "从圆外一点引圆的两条切线，切线长相等",
        "prerequisite": "8A-14",
        "extends": "9B-01 圆的方程",
        "visualStrategy": "切线作图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "9A-18",
        "name": "圆锥侧面积",
        "concept": "侧面积=πrl，r为底面半径，l为母线长",
        "prerequisite": "9A-11",
        "extends": "9B-14 圆锥侧面积",
        "visualStrategy": "展开图",
        "visualType": "geometry",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      }
    ],
    "units": [
      {
        "name": "一元二次方程",
        "level": "current",
        "children": [
          {
            "name": "方程概念",
            "level": "done"
          },
          {
            "name": "因式分解法",
            "level": "current"
          },
          {
            "name": "求根公式",
            "level": "locked"
          }
        ]
      },
      {
        "name": "二次函数",
        "level": "locked",
        "children": [
          {
            "name": "二次函数图像",
            "level": "locked"
          },
          {
            "name": "二次函数性质",
            "level": "locked"
          }
        ]
      },
      {
        "name": "旋转",
        "level": "locked",
        "children": [
          {
            "name": "旋转性质",
            "level": "locked"
          },
          {
            "name": "中心对称",
            "level": "locked"
          }
        ]
      },
      {
        "name": "圆",
        "level": "locked",
        "children": [
          {
            "name": "圆的认识",
            "level": "locked"
          },
          {
            "name": "弧长与扇形",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "小明解方程 x^2 - 5x + 6 = 0，想知道两个根分别是多少。",
        "question": "方程的两个根是多少？",
        "formula": "(x-2)(x-3)=0, x1=2 x2=3",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 6,
          "points": [
            {
              "pos": 2,
              "label": "x1",
              "color": "#00A896"
            },
            {
              "pos": 3,
              "label": "x2",
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "一元二次方程",
        "difficulty": 2,
        "hint": "因式分解 (x-2)(x-3)=0",
        "variants": [
          {
            "question": "解方程 x^2-3x+2=0",
            "formula": "(x-1)(x-2)=0",
            "answer": 1,
            "hint": "因式分解"
          },
          {
            "question": "解方程 x^2-4x+4=0",
            "formula": "(x-2)^2=0",
            "answer": 2,
            "hint": "完全平方"
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
            "explain": "题目说「小明解方程 x^2 - 5x + 6 = 0，想知道两个根分别是多少。」，问的是「方程的两个根是多少？」，这是求计算结果"
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
            "explain": "从题目中找到的关键数是：2、3、0、1、2、2、3"
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
            "explain": "计算：(x-2)(x-3)=0, x1=2 x2=3=0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上从到6，帮助理解数量关系和运算过程",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(x-2)(x-3)=0, x1=2 x2=3=0",
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
        "scene": "一个抛物线形拱桥，跨度20米，最高点离水面8米。小红想建立坐标系求抛物线方程。",
        "question": "抛物线顶点坐标是多少？",
        "formula": "顶点=(10,8)",
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
              10,
              8
            ],
            "width": 20
          }
        },
        "knowledge": "二次函数图像",
        "difficulty": 3,
        "hint": "跨度20米，顶点在中间上方8米",
        "variants": [
          {
            "question": "抛物线顶点(3,5)过点(0,-4)，求方程",
            "formula": "y=a(x-3)^2+5, a=-1",
            "answer": -1,
            "hint": "代入点求a"
          },
          {
            "question": "抛物线y=x^2-4x+3的顶点坐标？",
            "formula": "x=-b/2a=2, y=4-8+3=-1",
            "answer": -1,
            "hint": "顶点公式"
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
            "explain": "题目说「一个抛物线形拱桥，跨度20米，最高点离水面8米。小红想建立坐标系求抛物线方程。」，问的是「抛物线顶点坐标是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：10 和 8",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：10 和 8",
            "explain": "从题目中找到的关键数是：10、8"
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
            "explain": "计算：顶点=(10,8)=0"
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
            "text": "顶点=(10,8)=0",
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
        "scene": "小明把一根长40厘米的铁丝弯成一个矩形，使面积最大。他想算出这个矩形的长和宽。",
        "question": "面积最大时长和宽各是多少？",
        "formula": "长=宽=10, 面积=100",
        "answer": 100,
        "choices": [
          100,
          90,
          110,
          80
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 10,
            "width": 10
          }
        },
        "knowledge": "二次函数最值",
        "difficulty": 3,
        "hint": "周长固定时正方形面积最大",
        "variants": [
          {
            "question": "周长36厘米的矩形，面积最大时边长？",
            "formula": "边长=9, 面积=81",
            "answer": 81,
            "hint": "正方形面积最大"
          },
          {
            "question": "周长24米的矩形，面积最大是多少？",
            "formula": "边长=6, 面积=36",
            "answer": 36,
            "hint": "正方形面积最大"
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
            "explain": "题目说「小明把一根长40厘米的铁丝弯成一个矩形，使面积最大。他想算出这个矩形的长和宽。」，问的是「面积最大时长和宽各是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：10 和 100",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：10 和 100",
            "explain": "从题目中找到的关键数是：10、100"
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
            "explain": "计算：长=宽=10, 面积=100=100"
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
            "text": "长=宽=10, 面积=100=100",
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
        "scene": "一个圆的半径是5厘米，小明想算出它的周长和面积。",
        "question": "圆的周长和面积各是多少？",
        "formula": "周长=10*pi约31.4, 面积=25*pi约78.5",
        "answer": 25,
        "choices": [
          25,
          50,
          75,
          100
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "radius": 5
          }
        },
        "knowledge": "圆的周长与面积",
        "difficulty": 2,
        "hint": "C=2*pi*r, S=pi*r^2",
        "variants": [
          {
            "question": "圆半径3厘米，周长和面积？",
            "formula": "C=6pi≈18.8, S=9pi≈28.3",
            "answer": 28,
            "hint": "代入公式"
          },
          {
            "question": "圆直径10厘米，面积？",
            "formula": "r=5, S=25pi≈78.5",
            "answer": 78,
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
            "explain": "题目说「一个圆的半径是5厘米，小明想算出它的周长和面积。」，问的是「圆的周长和面积各是多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：10 和 31.4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：10 和 31.4",
            "explain": "从题目中找到的关键数是：10、31.4、25、78.5"
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
            "explain": "乘法：周长=10*pi约31.4, 面积=25*pi约78.5=25"
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
            "text": "周长=10*pi约31.4, 面积=25*pi约78.5=25",
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
        "scene": "小明将点A(2,3)绕原点顺时针旋转90度，想知道旋转后的坐标。",
        "question": "旋转后的坐标是多少？",
        "formula": "(x,y)->(y,-x), (2,3)->(3,-2)",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 5,
          "points": [
            {
              "pos": 2,
              "label": "A",
              "color": "#00A896"
            },
            {
              "pos": 3,
              "label": "A'",
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "图形旋转",
        "difficulty": 3,
        "hint": "顺时针90度：(x,y)->(y,-x)",
        "variants": [
          {
            "question": "点(1,2)逆时针旋转90度后的坐标？",
            "formula": "(x,y)->(-y,x), (1,2)->(-2,1)",
            "answer": -2,
            "hint": "逆时针90度公式"
          },
          {
            "question": "点(3,4)绕原点旋转180度后的坐标？",
            "formula": "(x,y)->(-x,-y), (3,4)->(-3,-4)",
            "answer": -3,
            "hint": "180度旋转"
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
            "explain": "题目说「小明将点A(2,3)绕原点顺时针旋转90度，想知道旋转后的坐标。」，问的是「旋转后的坐标是多少？」，这是求差是多少"
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
            "explain": "从题目中找到的关键数是：2、3、3、2"
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
            "explain": "减法：(x,y)->(y,-x), (2,3)->(3,-2)=0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上从到5，帮助理解数量关系和运算过程",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(x,y)->(y,-x), (2,3)->(3,-2)=0",
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
        "scene": "小明解方程 x^2 - 4x - 5 = 0，他想知道两个根分别是多少。",
        "question": "方程的两个根是多少？",
        "formula": "(x-5)(x+1)=0, x1=5 x2=-1",
        "answer": 5,
        "choices": [
          5,
          -1,
          1,
          -5
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": -6,
          "end": 6,
          "points": [
            {
              "pos": -1,
              "label": "x1",
              "color": "#00A896"
            },
            {
              "pos": 5,
              "label": "x2",
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "一元二次方程因式分解",
        "difficulty": 2,
        "hint": "寻找两个数，乘积为-5，和为-4",
        "variants": [
          {
            "question": "解方程 x^2-2x-3=0",
            "formula": "(x-3)(x+1)=0",
            "answer": 3,
            "hint": "因式分解"
          },
          {
            "question": "解方程 x^2-7x+12=0",
            "formula": "(x-3)(x-4)=0",
            "answer": 3,
            "hint": "寻找两数积12和7"
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
            "explain": "题目说「小明解方程 x^2 - 4x - 5 = 0，他想知道两个根分别是多少。」，问的是「方程的两个根是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1、-4、-5",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1、-4、-5",
            "explain": "从题目中找到的关键数是：1（二次项系数）、-4（一次项系数）、-5（常数项）"
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
            "explain": "乘法：(x-5)(x+1)=0，x1=5，x2=-1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上标出两个根x1=-1和x2=5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "x^2-4x-5=0 → (x-5)(x+1)=0 → x1=5, x2=-1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "因式分解法：将方程化为两个一次因式乘积为0",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "抛物线y=x²-4x+3与x轴的交点坐标是多少？小红想知道这两个交点。",
        "question": "抛物线与x轴的交点横坐标分别是多少？",
        "formula": "x²-4x+3=0, (x-1)(x-3)=0",
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
              2,
              -1
            ],
            "roots": [
              1,
              3
            ]
          }
        },
        "knowledge": "二次函数与x轴交点",
        "difficulty": 3,
        "hint": "令y=0，解一元二次方程",
        "variants": [
          {
            "question": "抛物线y=x²-5x+6与x轴交点",
            "formula": "x²-5x+6=0, (x-2)(x-3)=0",
            "answer": 2,
            "hint": "因式分解"
          },
          {
            "question": "抛物线y=x²-2x-3与x轴交点",
            "formula": "x²-2x-3=0, (x-3)(x+1)=0",
            "answer": 3,
            "hint": "寻找两数积-3和-2"
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
            "explain": "题目说「抛物线y=x²-4x+3与x轴的交点坐标是多少？小红想知道这两个交点。」，问的是「抛物线与x轴的交点横坐标分别是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1、-4、3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1、-4、3",
            "explain": "从题目中找到的关键数是：1（二次项系数）、-4（一次项系数）、3（常数项）"
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
            "explain": "乘法：令y=0，x²-4x+3=0，(x-1)(x-3)=0，x1=1，x2=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "抛物线与x轴交于(1,0)和(3,0)",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "令y=0，解x²-4x+3=0得x1=1，x2=3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "二次函数与x轴交点横坐标即对应方程的根",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个矩形花园长20米宽15米，小红想围绕花园修一条宽度相同的小路，使花园加小路总面积为450平方米。她想算出小路的宽度。",
        "question": "小路宽度是多少米？",
        "formula": "(20+2x)(15+2x)=450",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 20,
            "width": 15,
            "pathWidth": 2.5
          }
        },
        "knowledge": "一元二次方程应用",
        "difficulty": 3,
        "hint": "设小路宽x米，总面积=(20+2x)(15+2x)",
        "variants": [
          {
            "question": "长方形长10宽8，修路后面积144，路宽？",
            "formula": "(10+2x)(8+2x)=144",
            "answer": 1,
            "hint": "解方程求x"
          },
          {
            "question": "正方形地边长20，修路后面积576，路宽？",
            "formula": "(20+2x)²=576",
            "answer": 4,
            "hint": "开方求解"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份是多少",
              "总数",
              "有几份",
              "差是多少"
            ],
            "answer": "每份是多少",
            "explain": "题目说「一个矩形花园长20米宽15米，小红想围绕花园修一条宽度相同的小路，使花园加小路总面积为450平方米。她想算出小路的宽度。」，问的是「小路宽度是多少米？」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：20、15、450",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：20、15、450",
            "explain": "从题目中找到的关键数是：20（长）、15（宽）、450（总面积）"
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
            "explain": "乘法：(20+2x)(15+2x)=450，展开得4x²+70x+300=450，解得x=2.5米"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示矩形花园及周围小路",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(20+2x)(15+2x)=450 → 4x²+70x-150=0 → x=2.5",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "实际问题转化为方程，注意检验根的合理性",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明测量一座塔的高度，他在离塔底30米处测得塔顶仰角为60度。他想算出塔的高度（忽略观测者身高）。",
        "question": "塔高约多少米？",
        "formula": "h = 30 * tan60度 = 30*sqrt(3) ≈ ?",
        "answer": 52,
        "choices": [
          52,
          30,
          17,
          60
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "base": 30,
            "angle": 60
          }
        },
        "knowledge": "特殊角三角函数",
        "difficulty": 3,
        "hint": "tan60°=√3≈1.732",
        "variants": [
          {
            "question": "距离塔40米，仰角45度，塔高？",
            "formula": "h=40*tan45=40",
            "answer": 40,
            "hint": "tan45=1"
          },
          {
            "question": "距离塔20米，仰角30度，塔高？",
            "formula": "h=20*tan30=20*sqrt(3)/3",
            "answer": 12,
            "hint": "tan30=√3/3"
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
            "explain": "题目说「小明测量一座塔的高度，他在离塔底30米处测得塔顶仰角为60度。他想算出塔的高度（忽略观测者身高）。」，问的是「塔高约多少米？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：30 和 60",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：30 和 60",
            "explain": "从题目中找到的关键数是：30（距离）、60°（仰角）"
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
            "explain": "乘法：塔高=30×tan60°=30×√3≈30×1.732≈52米"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "直角三角形：底边30米，仰角60度，求对边（塔高）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "tan60°=对边/邻边=h/30，h=30×tan60°=30√3≈52米",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "tanθ=对边/邻边，已知邻边和角度求对边",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个圆锥的底面半径是3厘米，母线长是5厘米。小明想算出这个圆锥的侧面积。",
        "question": "圆锥的侧面积是多少平方厘米？",
        "formula": "S=πrl=π*3*5=15π≈47.1",
        "answer": 47,
        "choices": [
          47,
          28,
          90,
          15
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cone",
          "params": {
            "radius": 3,
            "slantHeight": 5
          }
        },
        "knowledge": "圆锥侧面积",
        "difficulty": 2,
        "hint": "侧面积=π×半径×母线长",
        "variants": [
          {
            "question": "圆锥底面半径4母线长6，侧面积？",
            "formula": "π*4*6=24π≈75.4",
            "answer": 75,
            "hint": "代入公式"
          },
          {
            "question": "圆锥底面直径6母线长5，侧面积？",
            "formula": "r=3, S=π*3*5=15π",
            "answer": 47,
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
            "explain": "题目说「一个圆锥的底面半径是3厘米，母线长是5厘米。小明想算出这个圆锥的侧面积。」，问的是「圆锥的侧面积是多少平方厘米？」，这是求总数"
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
            "explain": "从题目中找到的关键数是：3（底面半径）、5（母线长）"
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
            "explain": "乘法：侧面积=πrl=π×3×5=15π≈47.1平方厘米"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示圆锥及其展开后的扇形",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "侧面积=π×r×l=π×3×5=15π≈47.1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "圆锥侧面积=πrl，展开后是扇形",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      }
    ]
  };
