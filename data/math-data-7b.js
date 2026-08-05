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
      },
      {
        "id": "7B-18",
        "name": "数据的整理与描述",
        "concept": "收集、整理、描述数据，制作统计图表",
        "prerequisite": "7B-17",
        "extends": "7B-19 比例线段",
        "visualStrategy": "统计图表",
        "visualType": "barModel",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7B-19",
        "name": "比例线段与平行线",
        "concept": "平行线分线段成比例定理",
        "prerequisite": "7A-19",
        "extends": "8A-01 二次根式",
        "visualStrategy": "平行线截线",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "7B-20",
        "name": "黄金分割",
        "concept": "把一条线段分成两部分，使较大部分是全长与较小部分的比例中项",
        "prerequisite": "7B-19",
        "extends": "7B-21 相似三角形初步",
        "visualStrategy": "黄金比例",
        "visualType": "barModel",
        "coreLiteracy": "数学文化",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "7B-21",
        "name": "相似三角形初步",
        "concept": "对应角相等，对应边成比例的三角形",
        "prerequisite": "7B-20",
        "extends": "8B-01 相似三角形",
        "visualStrategy": "缩放演示",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "7B-22",
        "name": "三角形的面积",
        "concept": "三角形面积=底×高÷2",
        "prerequisite": "7B-11",
        "extends": "7B-23 面积与比例",
        "visualStrategy": "等积变形",
        "visualType": "geometry",
        "coreLiteracy": "转化思想",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "7B-23",
        "name": "面积与比例",
        "concept": "等高三角形面积比等于底边比",
        "prerequisite": "7B-22",
        "extends": "7B-24 方程与不等式初步",
        "visualStrategy": "面积分割",
        "visualType": "geometry",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "7B-24",
        "name": "方程与不等式初步",
        "concept": "用方程和不等式解决几何问题",
        "prerequisite": "7B-17",
        "extends": "8A-01 二次根式",
        "visualStrategy": "几何建模",
        "visualType": "barModel",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": true
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
      },
      {
        "scene": "一块三角形地的底是12米，高是8米。小红想算出这块地的面积，以及如果底增加4米面积增加多少。",
        "question": "原面积和增加面积各是多少？",
        "formula": "原面积=48, 增加=16",
        "answer": 48,
        "choices": [
          48,
          64,
          48,
          16
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "base": 12,
            "height": 8
          }
        },
        "knowledge": "三角形面积",
        "difficulty": 2,
        "hint": "面积=底×高÷2",
        "variants": [
          {
            "question": "三角形底10高6，面积？",
            "formula": "10*6/2",
            "answer": 30,
            "hint": "底乘高除以2"
          },
          {
            "question": "三角形面积24底8，高？",
            "formula": "24*2/8",
            "answer": 6,
            "hint": "高=面积×2÷底"
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
            "explain": "题目说「一块三角形地的底是12米，高是8米。小红想算出这块地的面积，以及如果底增加4米面积增加多少。」，问的是「原面积和增加面积各是多少？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：12、8、4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：12、8、4",
            "explain": "从题目中找到的关键数是：12（底）、8（高）、4（增加量）"
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
            "explain": "乘法：原面积=12×8÷2=48，增加面积=4×8÷2=16"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示了三角形及其底和高的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "面积=底×高÷2=12×8÷2=48",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "三角形面积=底×高÷2",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明测量一个平行四边形菜地，底边长15米，对应高是8米。他想知道这块地的面积。",
        "question": "平行四边形菜地面积是多少平方米？",
        "formula": "15 * 8 = ?",
        "answer": 120,
        "choices": [
          120,
          60,
          23,
          46
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "parallelogram",
          "params": {
            "base": 15,
            "height": 8
          }
        },
        "knowledge": "平行四边形面积",
        "difficulty": 1,
        "hint": "面积=底×高",
        "variants": [
          {
            "question": "平行四边形底20高5，面积？",
            "formula": "20*5",
            "answer": 100,
            "hint": "直接相乘"
          },
          {
            "question": "平行四边形面积72底12，高？",
            "formula": "72/12",
            "answer": 6,
            "hint": "高=面积÷底"
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
            "explain": "题目说「小明测量一个平行四边形菜地，底边长15米，对应高是8米。他想知道这块地的面积。」，问的是「平行四边形菜地面积是多少平方米？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：15 和 8",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：15 和 8",
            "explain": "从题目中找到的关键数是：15（底）、8（高）"
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
            "explain": "乘法：面积=底×高=15×8=120平方米"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中的平行四边形展示底和高",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "面积=15×8=120平方米",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平行四边形面积=底×高",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个梯形的上底是6厘米，下底是10厘米，高是5厘米。小红想算出它的面积。",
        "question": "梯形的面积是多少平方厘米？",
        "formula": "(6+10)*5/2 = ?",
        "answer": 40,
        "choices": [
          40,
          80,
          30,
          50
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "trapezoid",
          "params": {
            "top": 6,
            "bottom": 10,
            "height": 5
          }
        },
        "knowledge": "梯形面积",
        "difficulty": 2,
        "hint": "面积=(上底+下底)×高÷2",
        "variants": [
          {
            "question": "梯形上底8下底12高6，面积？",
            "formula": "(8+12)*6/2",
            "answer": 60,
            "hint": "先加后乘再除"
          },
          {
            "question": "梯形面积36上底5下底7，高？",
            "formula": "36*2/(5+7)",
            "answer": 6,
            "hint": "高=面积×2÷(上底+下底)"
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
            "explain": "题目说「一个梯形的上底是6厘米，下底是10厘米，高是5厘米。小红想算出它的面积。」，问的是「梯形的面积是多少平方厘米？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：6、10、5",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：6、10、5",
            "explain": "从题目中找到的关键数是：6（上底）、10（下底）、5（高）"
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
            "explain": "乘法：面积=(6+10)×5÷2=16×5÷2=40平方厘米"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示梯形的上底、下底和高",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "面积=(6+10)×5÷2=40",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "梯形面积=(上底+下底)×高÷2",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小明用36米长的篱笆围一个长方形鸡舍，长是宽的2倍。他想算出鸡舍的长和宽。",
        "question": "鸡舍的长和宽各是多少米？",
        "formula": "2(x+2x)=36, x=6",
        "answer": 6,
        "choices": [
          6,
          12,
          9,
          18
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 36,
          "parts": [
            {
              "label": "宽",
              "val": 6,
              "color": "#00A896"
            },
            {
              "label": "长",
              "val": 12,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "周长与方程",
        "difficulty": 3,
        "hint": "设宽为x，长为2x，周长=2(长+宽)",
        "variants": [
          {
            "question": "周长24米，长是宽的3倍，长宽各多少？",
            "formula": "2(x+3x)=24, x=3",
            "answer": 3,
            "hint": "宽=3，长=9"
          },
          {
            "question": "周长30米，长比宽多5米，长宽各多少？",
            "formula": "2(x+(x+5))=30",
            "answer": 5,
            "hint": "宽=5，长=10"
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
            "explain": "题目说「小明用36米长的篱笆围一个长方形鸡舍，长是宽的2倍。他想算出鸡舍的长和宽。」，问的是「鸡舍的长和宽各是多少米？」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：36、2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：36、2",
            "explain": "从题目中找到的关键数是：36（周长）、2（倍数关系）"
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
            "explain": "除法：设宽=x，长=2x，2(x+2x)=36，3x=18，x=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示长方形的长和宽的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "宽=6米，长=12米，周长=2×(6+12)=36米",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "利用周长公式列方程求解",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "学校美术室有一块平行四边形展示板，底是1.5米，高是1.2米。王老师想知道给这块板贴饰面的费用，已知每平方米饰面80元。",
        "question": "贴饰面需要多少元？",
        "formula": "1.5*1.2*80 = ?",
        "answer": 144,
        "choices": [
          144,
          120,
          160,
          180
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 144,
          "parts": [
            {
              "label": "面积",
              "val": 1.8,
              "color": "#00A896"
            },
            {
              "label": "单价",
              "val": 80,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "面积与价格计算",
        "difficulty": 2,
        "hint": "先算面积再算总价",
        "variants": [
          {
            "question": "平行四边形底2米高1.5米，每平方米100元，总价？",
            "formula": "2*1.5*100",
            "answer": 300,
            "hint": "面积×单价"
          },
          {
            "question": "平行四边形面积2.4平方米，每平方米75元，总价？",
            "formula": "2.4*75",
            "answer": 180,
            "hint": "直接相乘"
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
            "explain": "题目说「学校美术室有一块平行四边形展示板，底是1.5米，高是1.2米。王老师想知道给这块板贴饰面的费用，已知每平方米饰面80元。」，问的是「贴饰面需要多少元？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1.5、1.2、80",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1.5、1.2、80",
            "explain": "从题目中找到的关键数是：1.5（底）、1.2（高）、80（单价）"
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
            "explain": "乘法：面积=1.5×1.2=1.8平方米，总价=1.8×80=144元"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示平行四边形及面积计算",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "面积=1.5×1.2=1.8㎡，总价=1.8×80=144元",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "总价=面积×单价",
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
        "visualData": {"total": 50, "parts": [{"label": "红球", "val": 30, "color": "#00A896"}, {"label": "白球", "val": 20, "color": "#F5B800"}]},
        "knowledge": "比例分配",
        "difficulty": 2,
        "hint": "总份数=3+2=5，红球占3/5，白球占2/5",
        "variants": [{"question": "男女生比例5:3，共40人，男女生各多少人？", "formula": "男生=40*5/8=25, 女生=40*3/8=15", "answer": 25, "hint": "总份数=8"}, {"question": "甲乙丙比例2:3:4，总和90，各多少？", "formula": "甲=90*2/9=20, 乙=30, 丙=40", "answer": 20, "hint": "总份数=9"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["每份是多少", "总数", "有几份", "差是多少"], "answer": "每份是多少", "explain": "题目求红球和白球各多少，求每份是多少"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：3、2、50", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：3、2、50", "explain": "从题目中找到的关键数是：3、2、50"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：总份数=5，红球=50×3/5=30，白球=50×2/5=20"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中按比例展示红球30个和白球20个", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "红球=50×3/5=30，白球=50×2/5=20", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "按比例分配：每份=总量÷总份数", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "小明用相似三角形的原理测量旗杆高度：他站在旗杆旁，身高1.6米，影长2米，旗杆影长15米。",
        "question": "旗杆的高度是多少米？",
        "formula": "旗杆高/15=1.6/2, 旗杆高=12",
        "answer": 12,
        "choices": [12, 10, 15, 8],
        "visualType": "geometry",
        "visualData": {"shape": "triangle", "params": {"height": 12, "base": 15}},
        "knowledge": "相似三角形应用",
        "difficulty": 3,
        "hint": "同一时刻，物高与影长成正比",
        "variants": [{"question": "树高3米，影长4米，同一时刻电线杆影长10米，电线杆多高？", "formula": "3*10/4=7.5", "answer": 8, "hint": "物高与影长成正比"}, {"question": "测得一建筑物影长30米，同时1.5米竹竿影长2米，建筑物多高？", "formula": "1.5*30/2=22.5", "answer": 22, "hint": "比例关系"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["总数（一共多少）", "每份是多少", "有几份", "差是多少"], "answer": "总数（一共多少）", "explain": "题目求旗杆高度，求总数"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：1.6、2、15", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：1.6、2、15", "explain": "从题目中找到的关键数是：1.6、2、15"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：旗杆高=1.6×15÷2=12米"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示相似三角形的测量原理", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "旗杆高/15=1.6/2，旗杆高=12米", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "同一时刻，物高与影长成正比", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "学校测量一块梯形土地的面积，上底8米，下底12米，高5米。校长想知道这块地的面积。",
        "question": "梯形土地的面积是多少平方米？",
        "formula": "(8+12)*5/2=50",
        "answer": 50,
        "choices": [50, 100, 60, 40],
        "visualType": "geometry",
        "visualData": {"shape": "trapezoid", "params": {"a": 8, "b": 12, "h": 5}},
        "knowledge": "梯形面积",
        "difficulty": 2,
        "hint": "梯形面积=(上底+下底)×高÷2",
        "variants": [{"question": "平行四边形底10厘米，高6厘米，面积是多少？", "formula": "10*6=60", "answer": 60, "hint": "平行四边形面积=底×高"}, {"question": "三角形底15分米，高8分米，面积是多少？", "formula": "15*8/2=60", "answer": 60, "hint": "三角形面积=底×高÷2"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["总数（一共多少）", "每份是多少", "有几份", "差是多少"], "answer": "总数（一共多少）", "explain": "题目求梯形面积，求总数"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：8、12、5", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：8、12、5", "explain": "从题目中找到的关键数是：8（上底）、12（下底）、5（高）"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：面积=(8+12)×5÷2=50平方米"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示梯形的上底、下底和高", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "面积=(8+12)×5÷2=50平方米", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "梯形面积=(上底+下底)×高÷2", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "小明用方程解决几何问题：一个三角形的底比高多3厘米，面积是28平方厘米。他想求出三角形的底和高。",
        "question": "三角形的底和高各是多少厘米？",
        "formula": "底×高/2=28, 设高=x, 底=x+3, x(x+3)=56, x=7",
        "answer": 7,
        "choices": [7, 10, 8, 6],
        "visualType": "geometry",
        "visualData": {"shape": "triangle", "params": {"base": 10, "height": 7}},
        "knowledge": "方程与几何",
        "difficulty": 3,
        "hint": "设高为x，底为x+3，面积=底×高÷2",
        "variants": [{"question": "一个长方形长比宽多4厘米，面积是60平方厘米，长和宽各是多少？", "formula": "宽=x, 长=x+4, x(x+4)=60, x=6", "answer": 6, "hint": "列方程求解"}, {"question": "三角形底是高的2倍，面积是36平方厘米，底和高各是多少？", "formula": "高=h, 底=2h, 2h*h/2=36, h=6", "answer": 6, "hint": "注意底是高的2倍"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["每份是多少", "总数", "有几份", "差是多少"], "answer": "每份是多少", "explain": "题目求底和高各多少，求每份是多少"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：3 和 28", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：3 和 28", "explain": "从题目中找到的关键数是：3（底比高多的厘米数）、28（面积）"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：设高=x，底=x+3，x(x+3)=56，解得x=7"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示三角形的底和高的关系", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "高=7厘米，底=10厘米，面积=10×7÷2=28", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "用方程解决几何问题", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "学校调查学生最喜欢的学科，结果如下：数学18人，语文20人，英语15人，科学10人，其他7人。校长想用扇形统计图展示这些数据。",
        "question": "数学在扇形图中对应的圆心角是多少度？",
        "formula": "360°*18/(18+20+15+10+7)=360°*18/70≈93°",
        "answer": 93,
        "choices": [93, 100, 85, 110],
        "visualType": "geometry",
        "visualData": {"shape": "pie", "params": {"angle": 93}},
        "knowledge": "扇形统计图",
        "difficulty": 2,
        "hint": "圆心角=360°×该部分占总体的百分比",
        "variants": [{"question": "某班40人，喜欢篮球的有10人，在扇形图中占多少度？", "formula": "360°*10/40=90°", "answer": 90, "hint": "圆心角=360°×比例"}, {"question": "全班60人，喜欢足球30人，喜欢篮球18人，喜欢乒乓球12人，各部分圆心角分别是多少？", "formula": "足球180°，篮球108°，乒乓球72°", "answer": 180, "hint": "分别计算"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["计算结果", "每份是多少", "总数", "差是多少"], "answer": "计算结果", "explain": "题目求数学对应的圆心角，求计算结果"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：18 和 70", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：18 和 70", "explain": "从题目中找到的关键数是：18（喜欢数学的人数）、70（总人数）"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "除法", "explain": "除法：圆心角=360°×18÷70≈93°"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示各学科在扇形统计图中的占比", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "数学圆心角=360°×18/70≈93°", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "圆心角=360°×部分÷总体", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "小明用平移的方法移动一个图形，原图形的顶点坐标是(1,2)、(3,2)、(3,4)、(1,4)。他把它向右平移2个单位，向上平移3个单位。",
        "question": "平移后各顶点的坐标是什么？",
        "formula": "(1+2,2+3),(3+2,2+3),(3+2,4+3),(1+2,4+3)即(3,5),(5,5),(5,7),(3,7)",
        "answer": 3,
        "choices": [3, 5, 7, 2],
        "visualType": "numberLine",
        "visualData": {"start": 0, "end": 8, "points": [{"pos": 3, "label": "新顶点", "color": "#00A896"}]},
        "knowledge": "图形的平移",
        "difficulty": 2,
        "hint": "向右平移x加，向上平移y加",
        "variants": [{"question": "点(2,3)向左平移4个单位，再向下平移1个单位，新坐标？", "formula": "(2-4,3-1)=(-2,2)", "answer": -2, "hint": "左减右加，下减上加"}, {"question": "点(-1,4)向右平移3个单位，向上平移2个单位，新坐标？", "formula": "(-1+3,4+2)=(2,6)", "answer": 2, "hint": "坐标平移规则"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["计算结果", "每份是多少", "总数", "差是多少"], "answer": "计算结果", "explain": "题目求平移后坐标，求计算结果"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：2 和 3", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：2 和 3", "explain": "从题目中找到的关键数是：向右2、向上3"}, {"q": "🧩 用什么方法计算？", "choices": ["加法", "乘法", "减法", "除法"], "answer": "加法", "explain": "加法：每个点x加2，y加3"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示图形平移前后的位置", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "平移后坐标：(3,5),(5,5),(5,7),(3,7)", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "平移：向右x加，向上y加", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "小明解方程组，已知一个角的补角比它的余角的3倍大20度。他想求出这个角的度数。",
        "question": "这个角是多少度？",
        "formula": "180-x=3(90-x)+20, x=70",
        "answer": 70,
        "choices": [70, 60, 80, 50],
        "visualType": "geometry",
        "visualData": {"shape": "angle", "params": {"angle": 70, "complement": 20, "supplement": 110}},
        "knowledge": "方程与角度",
        "difficulty": 3,
        "hint": "设角为x，补角=180-x，余角=90-x",
        "variants": [{"question": "一个角的补角比它的余角大60度，这个角是多少？", "formula": "(180-x)-(90-x)=60, 90=60矛盾", "answer": 0, "hint": "此题无解"}, {"question": "一个角的余角是它的补角的1/4，这个角是多少度？", "formula": "90-x=(180-x)/4, x=60", "answer": 60, "hint": "列方程求解"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["计算结果", "每份是多少", "总数", "差是多少"], "answer": "计算结果", "explain": "题目求角的度数，求计算结果"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：3、20", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：3、20", "explain": "从题目中找到的关键数是：3（倍数）、20（差值）"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "除法", "explain": "除法：设角为x，补角=180-x，余角=90-x，180-x=3(90-x)+20，解得x=70"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示角、余角和补角的关系", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "180-x=3(90-x)+20，x=70", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "用方程解决角度问题", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      },
      {
        "scene": "学校组织测量旗杆高度，小明用镜子反射原理：他把镜子放在离旗杆20米的地面上，自己站在离镜子2米的位置，眼睛离地面1.5米，刚好看到旗杆顶端。",
        "question": "旗杆的高度是多少米？",
        "formula": "旗杆高/20=1.5/2, 旗杆高=15米",
        "answer": 15,
        "choices": [15, 20, 10, 25],
        "visualType": "geometry",
        "visualData": {"shape": "triangle", "params": {"height": 15, "base": 20}},
        "knowledge": "相似三角形应用",
        "difficulty": 3,
        "hint": "利用相似三角形对应边成比例",
        "variants": [{"question": "小明用影子法测树高，树影长12米，同时1.6米标杆影长2米，树高多少？", "formula": "1.6*12/2=9.6", "answer": 10, "hint": "物高与影长成正比"}, {"question": "利用相似三角形，已知AB=3，BC=4，DE=6，求DF", "formula": "DF=BC*DE/AB=8", "answer": 8, "hint": "对应边成比例"}],
        "discoverySteps": [{"q": "📖 再读一遍场景，这道题要我们求什么？", "choices": ["总数（一共多少）", "每份是多少", "有几份", "差是多少"], "answer": "总数（一共多少）", "explain": "题目求旗杆高度，求总数"}, {"q": "🔢 题目给了我们哪些关键信息？", "choices": ["关键数：20、2、1.5", "只有总数", "只有每份数", "没有关键数"], "answer": "关键数：20、2、1.5", "explain": "从题目中找到的关键数是：20（旗杆到镜子距离）、2（人到镜子距离）、1.5（眼睛高度）"}, {"q": "🧩 用什么方法计算？", "choices": ["乘法", "加法", "减法", "除法"], "answer": "乘法", "explain": "乘法：旗杆高=1.5×20÷2=15米"}],
        "explainLayers": [{"icon": "👀", "title": "看图 — 图形结构", "text": "图中展示相似三角形的测量原理", "bg": "var(--teal-soft)", "color": "var(--teal)"}, {"icon": "🧠", "title": "理解 — 数学关系", "text": "旗杆高/20=1.5/2，旗杆高=15米", "bg": "var(--yellow-soft)", "color": "var(--yellow-700)"}, {"icon": "🚀", "title": "推广 — 通用规律", "text": "相似三角形对应边成比例", "bg": "var(--coral-soft)", "color": "var(--coral)"}]
      }
    ]
  };
