window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['8a'] = {
    "title": "八年级上册·二次根式·勾股定理",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
      {
        "id": "8A-01",
        "name": "二次根式",
        "concept": "形如√a(a≥0)的式子，√a·√b=√(ab)",
        "prerequisite": "7B-07",
        "extends": "8A-02 一次函数",
        "visualStrategy": "面积开方",
        "visualType": "areaModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "8A-02",
        "name": "一次函数",
        "concept": "y=kx+b(k≠0)的图象是一条直线",
        "prerequisite": "7B-10",
        "extends": "8A-03 反比例函数",
        "visualStrategy": "坐标系直线",
        "visualType": "numberLine",
        "coreLiteracy": "函数思想",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "8A-03",
        "name": "反比例函数",
        "concept": "y=k/x(k≠0)的图象是双曲线",
        "prerequisite": "8A-02",
        "extends": "8A-04 二次方程",
        "visualStrategy": "双曲线绘制",
        "visualType": "numberLine",
        "coreLiteracy": "函数思想",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8A-04",
        "name": "一元二次方程",
        "concept": "ax²+bx+c=0(a≠0)，求根公式x=(-b±√(b²-4ac))/(2a)",
        "prerequisite": "8A-03",
        "extends": "8A-05 根的判别式",
        "visualStrategy": "抛物线与x轴",
        "visualType": "numberLine",
        "coreLiteracy": "方程思想",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8A-05",
        "name": "根的判别式",
        "concept": "Δ=b²-4ac决定根的个数：Δ>0两个实根，Δ=0一个实根，Δ<0无实根",
        "prerequisite": "8A-04",
        "extends": "8A-06 韦达定理",
        "visualStrategy": "判别式分析",
        "visualType": "numberLine",
        "coreLiteracy": "分类思想",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8A-06",
        "name": "韦达定理",
        "concept": "x₁+x₂=-b/a，x₁·x₂=c/a",
        "prerequisite": "8A-05",
        "extends": "8A-07 一元二次不等式",
        "visualStrategy": "根与系数",
        "visualType": "numberLine",
        "coreLiteracy": "方程思想",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8A-07",
        "name": "一元二次不等式",
        "concept": "ax²+bx+c>0(a>0)的解集在两根之外",
        "prerequisite": "8A-06",
        "extends": "8A-08 相似三角形",
        "visualStrategy": "数轴区间",
        "visualType": "numberLine",
        "coreLiteracy": "模型思想",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8A-08",
        "name": "相似三角形",
        "concept": "对应角相等、对应边成比例的两个三角形相似",
        "prerequisite": "7B-02",
        "extends": "8A-09 相似多边形",
        "visualStrategy": "缩放对比",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8A-09",
        "name": "相似多边形",
        "concept": "对应角相等、对应边成比例的多边形",
        "prerequisite": "8A-08",
        "extends": "8A-10 位似变换",
        "visualStrategy": "缩放演示",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8A-10",
        "name": "位似变换",
        "concept": "以某点为中心按比例放大或缩小的变换",
        "prerequisite": "8A-09",
        "extends": "8A-11 圆的基本性质",
        "visualStrategy": "中心缩放",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8A-11",
        "name": "圆的基本性质",
        "concept": "同圆或等圆的半径相等，直径是最长的弦",
        "prerequisite": "7B-16",
        "extends": "8A-12 点与圆的位置关系",
        "visualStrategy": "圆规作图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "8A-12",
        "name": "点与圆的位置关系",
        "concept": "点在圆外/圆上/圆内，取决于点到圆心距离与半径的关系",
        "prerequisite": "8A-11",
        "extends": "8A-13 直线与圆的位置关系",
        "visualStrategy": "距离比较",
        "visualType": "geometry",
        "coreLiteracy": "分类思想",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "8A-13",
        "name": "直线与圆的位置关系",
        "concept": "相离(距离>半径)、相切(距离=半径)、相交(距离<半径)",
        "prerequisite": "8A-12",
        "extends": "8A-14 切线的性质",
        "visualStrategy": "距离分析",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8A-14",
        "name": "切线的性质",
        "concept": "圆的切线垂直于过切点的半径",
        "prerequisite": "8A-13",
        "extends": "8A-15 弧长与扇形面积",
        "visualStrategy": "切线作图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "8A-15",
        "name": "弧长与扇形面积",
        "concept": "弧长l=nπr/180，扇形面积S=nπr²/360",
        "prerequisite": "8A-14",
        "extends": "8A-16 圆周角定理",
        "visualStrategy": "扇形展开",
        "visualType": "geometry",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8A-16",
        "name": "圆周角定理",
        "concept": "同弧所对的圆周角等于圆心角的一半",
        "prerequisite": "8A-15",
        "extends": "8A-17 圆内接四边形",
        "visualStrategy": "角度测量",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "8A-17",
        "name": "圆内接四边形",
        "concept": "圆内接四边形对角互补",
        "prerequisite": "8A-16",
        "extends": "9A-01 二次函数",
        "visualStrategy": "内接四边形",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      }
    ],
    "units": [
      {
        "name": "二次根式",
        "level": "current",
        "children": [
          {
            "name": "二次根式概念",
            "level": "done"
          },
          {
            "name": "二次根式运算",
            "level": "current"
          },
          {
            "name": "最简二次根式",
            "level": "locked"
          }
        ]
      },
      {
        "name": "勾股定理",
        "level": "locked",
        "children": [
          {
            "name": "勾股定理发现",
            "level": "locked"
          },
          {
            "name": "勾股定理应用",
            "level": "locked"
          }
        ]
      },
      {
        "name": "实数",
        "level": "locked",
        "children": [
          {
            "name": "无理数",
            "level": "locked"
          },
          {
            "name": "实数运算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "全等三角形",
        "level": "locked",
        "children": [
          {
            "name": "全等判定",
            "level": "locked"
          },
          {
            "name": "性质应用",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "小明想计算一个直角三角形斜边的长度，已知两条直角边分别是3厘米和4厘米。",
        "question": "斜边长度是多少厘米？",
        "formula": "sqrt(3^2+4^2) = ?",
        "answer": 5,
        "choices": [
          5,
          6,
          7,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "sides": [
              3,
              4,
              5
            ],
            "rightAngle": true
          }
        },
        "knowledge": "勾股定理",
        "difficulty": 2,
        "hint": "斜边^2=直角边1^2+直角边2^2",
        "variants": [
          {
            "question": "直角边为5和12，斜边长？",
            "formula": "sqrt(5^2+12^2)",
            "answer": 13,
            "hint": "勾股数5-12-13"
          },
          {
            "question": "斜边13，一直角边5，另一直角边？",
            "formula": "sqrt(13^2-5^2)",
            "answer": 12,
            "hint": "反用勾股定理"
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
            "explain": "题目说「小明想计算一个直角三角形斜边的长度，已知两条直角边分别是3厘米和4厘米。」，问的是「斜边长度是多少厘米？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 2",
            "explain": "从题目中找到的关键数是：3、2、4、2"
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
            "explain": "计算：sqrt(3^2+4^2) = ?=5"
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
            "text": "sqrt(3^2+4^2) = ?=5",
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
        "scene": "一个长方体箱子长8分米、宽6分米、高2分米。小红想知道最长的木棍能放进箱子里多长。",
        "question": "最长木棍多少分米？",
        "formula": "sqrt(8^2+6^2+2^2) ≈ ?",
        "answer": 10.2,
        "choices": [
          9,
          10,
          10.2,
          11
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 104,
          "parts": [
            {"val": 64, "color": "teal", "label": "长²"},
            {"val": 36, "color": "yellow", "label": "宽²"},
            {"val": 4, "color": "coral", "label": "高²"}
          ]
        },
        "knowledge": "空间勾股定理",
        "difficulty": 3,
        "hint": "先算底面对角线再算空间对角线",
        "variants": [
          {
            "question": "长方体长6宽8高12，体对角线？",
            "formula": "sqrt(6^2+8^2+12^2)",
            "answer": 15,
            "hint": "逐步计算"
          },
          {
            "question": "正方体棱长3，体对角线？",
            "formula": "sqrt(3^2+3^2+3^2)",
            "answer": 5,
            "hint": "sqrt(27)≈5.2"
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
            "explain": "题目说「一个长方体箱子长8分米、宽6分米、高2分米。小红想知道最长的木棍能放进箱子里多长。」，问的是「最长木棍多少分米？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：8 和 2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：8 和 2",
            "explain": "从题目中找到的关键数是：8（长）、6（宽）、2（高）"
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
            "explain": "首先求出长、宽、高的平方和：8²+6²+2²=64+36+4=104，再开平方根√104≈10.2"
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
            "text": "8²+6²+2²=64+36+4=104，√104≈10.2",
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
        "scene": "小明计算sqrt(50)+sqrt(8)-sqrt(18)，想知道结果是多少。",
        "question": "sqrt(50)+sqrt(8)-sqrt(18) = ?",
        "formula": "5sqrt(2)+2sqrt(2)-3sqrt(2)=4sqrt(2)",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 4,
          "parts": [
            {
              "label": "sqrt(50)",
              "val": 5,
              "color": "#00A896"
            },
            {
              "label": "sqrt(8)",
              "val": 2,
              "color": "#F5B800"
            },
            {
              "label": "sqrt(18)",
              "val": -3,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "二次根式运算",
        "difficulty": 3,
        "hint": "先化简再合并",
        "variants": [
          {
            "question": "sqrt(12)+sqrt(27)-sqrt(3)=?",
            "formula": "2sqrt(3)+3sqrt(3)-sqrt(3)=4sqrt(3)",
            "answer": 4,
            "hint": "化简后合并"
          },
          {
            "question": "sqrt(8)*sqrt(2)=?",
            "formula": "sqrt(16)=4",
            "answer": 4,
            "hint": "先乘再开方"
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
            "explain": "题目说「小明计算sqrt(50)+sqrt(8)-sqrt(18)，想知道结果是多少。」，问的是「sqrt(50)+sqrt(8)-sqrt(18) = ?」，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：5 和 2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：5 和 2",
            "explain": "从题目中找到的关键数是：5、2、2、2、3、2、4、2"
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
            "explain": "减法：5sqrt(2)+2sqrt(2)-3sqrt(2)=4sqrt(2)=0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表5，合起来就是4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "5sqrt(2)+2sqrt(2)-3sqrt(2)=4sqrt(2)=0",
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
        "scene": "一个等腰三角形底边长为10厘米，腰长为13厘米。小明想算出底边上的高。",
        "question": "底边上的高是多少厘米？",
        "formula": "sqrt(13^2-5^2) = ?",
        "answer": 12,
        "choices": [
          11,
          12,
          13,
          10
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "base": 10,
            "side": 13
          }
        },
        "knowledge": "勾股定理应用",
        "difficulty": 3,
        "hint": "底边一半是5，用勾股定理求高",
        "variants": [
          {
            "question": "等腰三角形腰15，底边18，底边上的高？",
            "formula": "sqrt(15^2-9^2)",
            "answer": 12,
            "hint": "底边一半=9"
          },
          {
            "question": "等腰三角形腰10，底边12，高？",
            "formula": "sqrt(10^2-6^2)",
            "answer": 8,
            "hint": "底边一半=6"
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
            "explain": "题目说「一个等腰三角形底边长为10厘米，腰长为13厘米。小明想算出底边上的高。」，问的是「底边上的高是多少厘米？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：13 和 2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：13 和 2",
            "explain": "从题目中找到的关键数是：13、2、5、2"
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
            "explain": "计算：sqrt(13^2-5^2) = ?=12"
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
            "text": "sqrt(13^2-5^2) = ?=12",
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
        "scene": "比较sqrt(15)和3.9的大小，小明想知道哪个更大。",
        "question": "哪个更大？",
        "formula": "3.9^2=15.21 > 15",
        "answer": 1,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 3,
          "end": 4,
          "points": [
            {
              "pos": 3.873,
              "label": "sqrt(15)",
              "color": "#00A896"
            },
            {
              "pos": 3.9,
              "label": "3.9",
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "实数比较",
        "difficulty": 2,
        "hint": "3.9^2=15.21>15，所以3.9>sqrt(15)",
        "variants": [
          {
            "question": "比较sqrt(10)和3.2的大小",
            "formula": "3.2^2=10.24>10",
            "answer": 1,
            "hint": "平方比较法"
          },
          {
            "question": "比较sqrt(20)和4.5的大小",
            "formula": "4.5^2=20.25>20",
            "answer": 1,
            "hint": "平方比较法"
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
            "explain": "题目说「比较sqrt(15)和3.9的大小，小明想知道哪个更大。」，问的是「哪个更大？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3.9 和 2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3.9 和 2",
            "explain": "从题目中找到的关键数是：3.9、2、15.21、15"
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
            "explain": "计算：3.9^2=15.21 > 15=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上从3到4，帮助理解数量关系和运算过程",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3.9^2=15.21 > 15=1",
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
      }
    ]
  };
