window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['7b'] = {
    "title": "七年级下册·相交线与平行线·平面直角坐标系",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
      {
        "id": "7B-01",
        "name": "相交线与平行线",
        "concept": "两条直线被第三条直线所截，同位角相等则两直线平行",
        "prerequisite": "7A-09",
        "extends": "7B-02 三角形的内角",
        "visualStrategy": "动态角度测量",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7B-02",
        "name": "三角形的内角与外角",
        "concept": "三角形内角和180度，外角等于不相邻两内角之和",
        "prerequisite": "7B-01",
        "extends": "7B-03 全等三角形",
        "visualStrategy": "角度测量",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7B-03",
        "name": "全等三角形",
        "concept": "能够完全重合的两个三角形全等，判定方法有SSS/SAS/ASA/AAS",
        "prerequisite": "7B-02",
        "extends": "7B-04 等腰三角形",
        "visualStrategy": "重叠对比",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "7B-04",
        "name": "等腰三角形",
        "concept": "两腰相等的三角形，底角相等",
        "prerequisite": "7B-03",
        "extends": "7B-05 尺规作图",
        "visualStrategy": "对称折叠",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "7B-05",
        "name": "尺规作图",
        "concept": "用圆规和直尺作角平分线、垂直平分线",
        "prerequisite": "7B-04",
        "extends": "7B-06 勾股定理",
        "visualStrategy": "作图演示",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "7B-06",
        "name": "勾股定理",
        "concept": "直角三角形两直角边的平方和等于斜边的平方",
        "prerequisite": "7B-05",
        "extends": "7B-07 实数",
        "visualStrategy": "面积拼接",
        "visualType": "areaModel",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "7B-07",
        "name": "实数",
        "concept": "有理数和无理数统称实数，数轴上的点与实数一一对应",
        "prerequisite": "7B-06",
        "extends": "8A-01 二次根式",
        "visualStrategy": "数轴覆盖",
        "visualType": "numberLine",
        "coreLiteracy": "数形结合",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "7B-08",
        "name": "二元一次方程组",
        "concept": "含两个未知数的一次方程组，代入法或消元法求解",
        "prerequisite": "7A-06",
        "extends": "7B-09 不等式组",
        "visualStrategy": "双变量模型",
        "visualType": "barModel",
        "coreLiteracy": "方程思想",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "7B-09",
        "name": "不等式组",
        "concept": "多个不等式的公共解集，可在数轴上表示",
        "prerequisite": "7B-08",
        "extends": "7B-10 数据的分析",
        "visualStrategy": "数轴重叠",
        "visualType": "numberLine",
        "coreLiteracy": "模型思想",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "7B-10",
        "name": "数据的分析",
        "concept": "平均数、中位数、众数、方差描述数据的集中与离散程度",
        "prerequisite": "7A-14",
        "extends": "8A-02 一次函数",
        "visualStrategy": "统计图表",
        "visualType": "barModel",
        "coreLiteracy": "数据分析",
        "difficulty": 1,
        "isKeyTopic": false
      },
      {
        "id": "7B-11",
        "name": "图形的平移",
        "concept": "平移不改变图形的形状和大小，只改变位置",
        "prerequisite": "7B-01",
        "extends": "7B-12 图形的旋转",
        "visualStrategy": "网格平移",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "7B-12",
        "name": "图形的旋转",
        "concept": "旋转围绕定点转动，对应点到定点距离相等",
        "prerequisite": "7B-11",
        "extends": "7B-13 中心对称",
        "visualStrategy": "旋转动画",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "7B-13",
        "name": "中心对称",
        "concept": "绕某点旋转180度后与原图形重合的图形",
        "prerequisite": "7B-12",
        "extends": "8A-01 二次根式",
        "visualStrategy": "对称中心",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "7B-14",
        "name": "四边形概述",
        "concept": "平行四边形对边平行且相等，对角线互相平分",
        "prerequisite": "7B-13",
        "extends": "8A-02 一次函数",
        "visualStrategy": "平行四边形",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "7B-15",
        "name": "平行四边形",
        "concept": "两组对边分别平行的四边形",
        "prerequisite": "7B-14",
        "extends": "8A-03 反比例函数",
        "visualStrategy": "动态变形",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "7B-16",
        "name": "矩形、菱形、正方形",
        "concept": "特殊平行四边形：矩形对角线相等，菱形对角线垂直",
        "prerequisite": "7B-15",
        "extends": "8A-04 二次方程",
        "visualStrategy": "分类对比",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "7B-17",
        "name": "几何变换综合",
        "concept": "平移、旋转、轴对称是三种基本几何变换",
        "prerequisite": "7B-16",
        "extends": "9A-01 二次函数",
        "visualStrategy": "变换组合",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": false
      }
    ],
    "units": [
      {
        "name": "相交线与平行线",
        "level": "current",
        "children": [
          {
            "name": "相交线",
            "level": "done"
          },
          {
            "name": "平行线",
            "level": "current"
          },
          {
            "name": "判定与性质",
            "level": "locked"
          }
        ]
      },
      {
        "name": "平面直角坐标系",
        "level": "locked",
        "children": [
          {
            "name": "坐标系认识",
            "level": "locked"
          },
          {
            "name": "点的坐标",
            "level": "locked"
          }
        ]
      },
      {
        "name": "三角形",
        "level": "locked",
        "children": [
          {
            "name": "三角形边关系",
            "level": "locked"
          },
          {
            "name": "三角形内角和",
            "level": "locked"
          }
        ]
      },
      {
        "name": "多边形",
        "level": "locked",
        "children": [
          {
            "name": "多边形内角和",
            "level": "locked"
          },
          {
            "name": "外角和",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "两条平行线被一条直线所截，形成多个角。小明量得其中一个角为65度，想知道对应的同位角和同旁内角各是多少度。",
        "question": "同位角和同旁内角分别是多少度？",
        "formula": "同位角=65 同旁内角=115",
        "answer": 65,
        "choices": [
          65,
          115,
          65,
          115
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "parallel",
          "params": {
            "angle1": 65,
            "angle2": 115
          }
        },
        "knowledge": "平行线性质",
        "difficulty": 2,
        "hint": "同位角相等，同旁内角互补",
        "variants": [
          {
            "question": "平行线被截，同位角为70度，同旁内角为？",
            "formula": "同旁内角=180-70",
            "answer": 110,
            "hint": "互补关系"
          },
          {
            "question": "同旁内角为120度，同位角为？",
            "formula": "同位角=180-120",
            "answer": 60,
            "hint": "先求邻补角"
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
            "explain": "题目说「两条平行线被一条直线所截，形成多个角。小明量得其中一个角为65度，想知道对应的同位角和同旁内角各是多少度。」，问的是「同位角和同旁内角分别是多少度？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：65 和 115",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：65 和 115",
            "explain": "从题目中找到的关键数是：65、115"
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
            "explain": "计算：同位角=65 同旁内角=115=65"
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
            "text": "同位角=65 同旁内角=115=65",
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
        "scene": "在平面直角坐标系中，点A的坐标是(3,4)，点B的坐标是(6,8)。小红想算出这两点之间的距离。",
        "question": "A、B两点距离是多少？",
        "formula": "sqrt((6-3)^2+(8-4)^2) = ?",
        "answer": 5,
        "choices": [
          4,
          5,
          6,
          7
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 10,
          "points": [
            {
              "pos": 5,
              "label": "AB距离",
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "两点间距离公式",
        "difficulty": 3,
        "hint": "距离=sqrt(横差^2+纵差^2)",
        "variants": [
          {
            "question": "点A(1,1)和点B(4,5)之间的距离？",
            "formula": "sqrt((4-1)^2+(5-1)^2)",
            "answer": 5,
            "hint": "横差3，纵差4"
          },
          {
            "question": "点A(2,3)和点B(5,7)之间的距离？",
            "formula": "sqrt((5-2)^2+(7-3)^2)",
            "answer": 5,
            "hint": "勾股数3-4-5"
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
            "explain": "题目说「在平面直角坐标系中，点A的坐标是(3,4)，点B的坐标是(6,8)。小红想算出这两点之间的距离。」，问的是「A、B两点距离是多少？」，这是求总数"
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
            "explain": "从题目中找到的关键数是：6、3、2、8、4、2"
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
            "explain": "加法：sqrt((6-3)^2+(8-4)^2) = ?=5"
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
            "text": "sqrt((6-3)^2+(8-4)^2) = ?=5",
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
        "scene": "一个三角形的两个内角分别是45度和60度，小明想知道第三个角是多少度。",
        "question": "第三个角是多少度？",
        "formula": "180 - 45 - 60 = ?",
        "answer": 75,
        "choices": [
          75,
          65,
          85,
          55
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "angles": [
              45,
              60,
              75
            ]
          }
        },
        "knowledge": "三角形内角和",
        "difficulty": 2,
        "hint": "三角形内角和180度",
        "variants": [
          {
            "question": "三角形两个角为90度和30度，第三个角？",
            "formula": "180-90-30=?",
            "answer": 60,
            "hint": "直角三角形"
          },
          {
            "question": "三角形两个角为55度和55度，第三个角？",
            "formula": "180-55-55=?",
            "answer": 70,
            "hint": "等腰三角形"
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
            "explain": "题目说「一个三角形的两个内角分别是45度和60度，小明想知道第三个角是多少度。」，问的是「第三个角是多少度？」，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：180 和 45",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：180 和 45",
            "explain": "从题目中找到的关键数是：180、45、60"
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
            "explain": "减法：180 - 45 - 60 = ?=75"
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
            "text": "180 - 45 - 60 = ?=75",
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
        "scene": "小明用24米长的栅栏围一个长方形菜地，长是宽的2倍少1米。他想算出菜地的长和宽各是多少。",
        "question": "菜地的长和宽各是多少米？",
        "formula": "2(x+2x-1)=24, x=4",
        "answer": 4,
        "choices": [
          4,
          5,
          3,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 24,
          "parts": [
            {
              "label": "宽",
              "val": 4,
              "color": "#00A896"
            },
            {
              "label": "长",
              "val": 7,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "一元一次方程应用",
        "difficulty": 3,
        "hint": "宽=x，长=2x-1，周长=2(长+宽)",
        "variants": [
          {
            "question": "周长36米，长是宽的2倍，长和宽各多少？",
            "formula": "2(x+2x)=36",
            "answer": 6,
            "hint": "宽=6，长=12"
          },
          {
            "question": "周长28米，长比宽多4米，长和宽各多少？",
            "formula": "2(x+(x+4))=28",
            "answer": 5,
            "hint": "宽=5，长=9"
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
            "explain": "题目说「小明用24米长的栅栏围一个长方形菜地，长是宽的2倍少1米。他想算出菜地的长和宽各是多少。」，问的是「菜地的长和宽各是多少米？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：2 和 2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：2 和 2",
            "explain": "从题目中找到的关键数是：2、2、1、24、4"
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
            "explain": "计算：2(x+2x-1)=24, x=4=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表4，合起来就是24",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "2(x+2x-1)=24, x=4=4",
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
        "scene": "一个n边形的内角和是1080度，小红想知道这是几边形。",
        "question": "这是几边形？",
        "formula": "(n-2)*180=1080, n=8",
        "answer": 8,
        "choices": [
          8,
          6,
          10,
          7
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "polygon",
          "params": {
            "sides": 8
          }
        },
        "knowledge": "多边形内角和",
        "difficulty": 3,
        "hint": "内角和=(n-2)*180度",
        "variants": [
          {
            "question": "内角和720度，这是几边形？",
            "formula": "(n-2)*180=720",
            "answer": 6,
            "hint": "n-2=4"
          },
          {
            "question": "内角和1440度，这是几边形？",
            "formula": "(n-2)*180=1440",
            "answer": 10,
            "hint": "n-2=8"
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
            "explain": "题目说「一个n边形的内角和是1080度，小红想知道这是几边形。」，问的是「这是几边形？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：2 和 180",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：2 和 180",
            "explain": "从题目中找到的关键数是：2、180、1080、8"
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
            "explain": "乘法：(n-2)*180=1080, n=8=8"
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
            "text": "(n-2)*180=1080, n=8=8",
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
      }
    ]
  };
