window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['4b'] = {
    "title": "四年级下册·四则运算与小数加减法",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "units": [
      {
        "name": "四则运算",
        "level": "locked",
        "children": [
          {
            "name": "加减法意义",
            "level": "locked"
          },
          {
            "name": "乘除法意义",
            "level": "locked"
          },
          {
            "name": "带括号运算",
            "level": "locked"
          },
          {
            "name": "租船问题",
            "level": "locked"
          }
        ]
      },
      {
        "name": "观察物体",
        "level": "locked",
        "children": [
          {
            "name": "从不同方向看",
            "level": "locked"
          }
        ]
      },
      {
        "name": "运算定律",
        "level": "locked",
        "children": [
          {
            "name": "加法交换结合律",
            "level": "locked"
          },
          {
            "name": "乘法交换结合律",
            "level": "locked"
          },
          {
            "name": "乘法分配律",
            "level": "locked"
          },
          {
            "name": "简便运算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "小数的意义和性质",
        "level": "locked",
        "children": [
          {
            "name": "小数意义",
            "level": "locked"
          },
          {
            "name": "读写法",
            "level": "locked"
          },
          {
            "name": "性质",
            "level": "locked"
          },
          {
            "name": "大小比较",
            "level": "locked"
          },
          {
            "name": "小数点移动",
            "level": "locked"
          },
          {
            "name": "单位换算",
            "level": "locked"
          },
          {
            "name": "近似数",
            "level": "locked"
          }
        ]
      },
      {
        "name": "三角形",
        "level": "locked",
        "children": [
          {
            "name": "认识",
            "level": "locked"
          },
          {
            "name": "分类",
            "level": "locked"
          },
          {
            "name": "内角和",
            "level": "locked"
          },
          {
            "name": "三边关系",
            "level": "locked"
          }
        ]
      },
      {
        "name": "小数加减法",
        "level": "locked",
        "children": [
          {
            "name": "加减法",
            "level": "locked"
          },
          {
            "name": "混合运算",
            "level": "locked"
          },
          {
            "name": "简便运算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "图形的运动",
        "level": "locked",
        "children": [
          {
            "name": "轴对称",
            "level": "locked"
          },
          {
            "name": "平移",
            "level": "locked"
          },
          {
            "name": "平移求面积",
            "level": "locked"
          }
        ]
      },
      {
        "name": "统计",
        "level": "locked",
        "children": [
          {
            "name": "平均数",
            "level": "locked"
          },
          {
            "name": "复式条形统计图",
            "level": "locked"
          }
        ]
      },
      {
        "name": "数学广角",
        "level": "locked",
        "children": [
          {
            "name": "鸡兔同笼",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "小红有25元，妈妈又给她10元，现在有35元。老师问加法各部分名称。",
        "question": "在25+10=35中，25叫什么？(加数填1,和填2)",
        "formula": "25是? (1加数/2和)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 35,
          "parts": [
            {
              "label": "加数25",
              "val": 25,
              "color": "#00A896"
            },
            {
              "label": "加数10",
              "val": 10,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "加减法的意义和各部分关系",
        "difficulty": 2,
        "hint": "加法中相加的数叫加数",
        "variants": [
          {
            "question": "35是加数还是和(1加数2和)？",
            "formula": "35是?",
            "answer": 2,
            "hint": "相加的结果叫和"
          },
          {
            "question": "差+减数=?(1和2被减数)",
            "formula": "差+减数=?",
            "answer": 2,
            "hint": "差加减数等于被减数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求25在加法中叫什么名称",
              "求35是多少",
              "求10是多少",
              "求加法算式"
            ],
            "answer": "求25在加法中叫什么名称",
            "explain": "题目说「25+10=35」，问25叫什么，这是认加法各部分名称"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "25+10=35，25是相加的数",
              "35是结果",
              "10是加数",
              "只有25"
            ],
            "answer": "25+10=35，25是相加的数",
            "explain": "25和10是相加的两个数，35是相加的结果"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "加法中相加的数叫加数",
              "结果叫加数",
              "任意数叫加数",
              "无法判断"
            ],
            "answer": "加法中相加的数叫加数",
            "explain": "加法中相加的两个数都叫加数，所以25是加数"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图分两段：加数25（绿色）和加数10（黄色），合起来总数是35",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "加法算式：加数 + 加数 = 和。25 + 10 = 35，所以25是加数",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加法各部分关系：加数+加数=和。减法是加法的逆运算：被减数-减数=差",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮有3盒铅笔，每盒12支。他算3×12=36。老师问36叫什么。",
        "question": "在3×12=36中，36叫什么？(积填1,因数填2)",
        "formula": "36是? (1积/2因数)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "areaModel",
        "visualData": {
          "rows": 3,
          "cols": 12,
          "color": "#00A896"
        },
        "knowledge": "乘除法的意义和各部分关系",
        "difficulty": 2,
        "hint": "乘法的结果叫积",
        "variants": [
          {
            "question": "3和12叫什么(1积2因数)？",
            "formula": "3和12是?",
            "answer": 2,
            "hint": "相乘的数叫因数"
          },
          {
            "question": "36÷12=3中36叫什么(1被除数2商)？",
            "formula": "36是?",
            "answer": 1,
            "hint": "被分的数叫被除数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求36在乘法中叫什么名称",
              "求12是多少",
              "求3是多少",
              "求乘法算式"
            ],
            "answer": "求36在乘法中叫什么名称",
            "explain": "题目说「3×12=36」，问36叫什么，这是认乘法各部分名称"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "3×12=36，36是相乘的结果",
              "3是积",
              "12是积",
              "只有36"
            ],
            "answer": "3×12=36，36是相乘的结果",
            "explain": "3和12是相乘的两个因数，36是相乘的结果"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "乘法结果叫积",
              "因数叫积",
              "任意数叫积",
              "无法判断"
            ],
            "answer": "乘法结果叫积",
            "explain": "乘法中相乘的结果叫积，所以36是积"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "面积模型3行12列，共3×12=36个小方格，36就是总数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法算式：因数 × 因数 = 积。3 × 12 = 36，所以36是积",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "乘法各部分关系：因数×因数=积。除法是乘法的逆运算：被除数÷除数=商",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红要算(12+8)×3。她先算括号里的。",
        "question": "(12+8)×3等于多少？",
        "formula": "(12 + 8) × 3 = ?",
        "answer": 60,
        "choices": [
          60,
          44,
          36,
          50
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 60,
          "parts": [
            {
              "label": "20×3",
              "val": 60,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "带括号的四则运算",
        "difficulty": 2,
        "hint": "先算括号再算乘法",
        "variants": [
          {
            "question": "(15-5)×4=?",
            "formula": "(15-5)×4=?",
            "answer": 40,
            "hint": "先算括号"
          },
          {
            "question": "(20+10)÷5=?",
            "formula": "(20+10)÷5=?",
            "answer": 6,
            "hint": "先算括号"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求(12+8)×3的结果",
              "求12+8",
              "求12×3",
              "求8×3"
            ],
            "answer": "求(12+8)×3的结果",
            "explain": "题目算式是(12+8)×3，要求算出结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "有括号先算12+8=20，再算20×3",
              "先算8×3=24",
              "先算12×3=36",
              "没有括号"
            ],
            "answer": "有括号先算12+8=20，再算20×3",
            "explain": "括号改变运算顺序，先算括号里面的"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "先算括号再算乘法：20×3=60",
              "从左到右",
              "先乘后加",
              "无法计算"
            ],
            "answer": "先算括号再算乘法：20×3=60",
            "explain": "有括号先算括号里的12+8=20，再算20×3=60"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图显示一段20×3=60的总长，表示先合并括号里再整体乘3",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(12+8)×3：先算括号里12+8=20，再算20×3=60",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "四则运算顺序：①有括号先算括号（先小后中）②再算乘除③最后算加减",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "全班38人去划船，大船坐6人每条30元，小船坐4人每条20元。小红先算都坐大船需几条。",
        "question": "38人都坐大船需要多少条？(填条数,38÷6)",
        "formula": "38 ÷ 6 = ? (条)",
        "answer": 6,
        "choices": [
          6,
          5,
          7,
          4
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 38,
          "parts": [
            {
              "label": "6条坐36人",
              "val": 36,
              "color": "#00A896"
            },
            {
              "label": "余2人",
              "val": 2,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "租船问题",
        "difficulty": 3,
        "hint": "38÷6=6条余2人",
        "variants": [
          {
            "question": "42人都坐大船需几条？",
            "formula": "42÷6=?",
            "answer": 7,
            "hint": "42÷6=7"
          },
          {
            "question": "30人都坐小船需几条？",
            "formula": "30÷4=?",
            "answer": 8,
            "hint": "30÷4=7余2需8条"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求38人都坐大船需要多少条",
              "求小船需要多少条",
              "求一共多少人",
              "求每条船坐几人"
            ],
            "answer": "求38人都坐大船需要多少条",
            "explain": "题目问38人都坐大船需几条船"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "38人，每条大船坐6人",
              "38人每条坐4人",
              "6条船",
              "30元"
            ],
            "answer": "38人，每条大船坐6人",
            "explain": "总人数38，每条大船坐6人，求需要几条"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法：38÷6=6余2",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法：38÷6=6余2",
            "explain": "38÷6=6条余2人，6条坐满36人剩2人（原题按整除取6）"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图分两段：6条坐36人（绿色）+余下2人（黄色），共38人",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "38÷6=6余2，6条船坐满36人，剩2人。本题按整除取6条",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "租船问题通用方法：总人数÷每船人数=条数……余数。若要求全部装下，用进一法（多1条）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红从前面看一个长方体，看到一个长方形。她好奇从上面看会看到什么。",
        "question": "从上面看长方体可能看到什么形状？(长方形填1,三角形填2)",
        "formula": "从上看 → ? (1长方/2三角)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "view": "top"
          }
        },
        "knowledge": "观察物体",
        "difficulty": 2,
        "hint": "从上看可能看到长方形",
        "variants": [
          {
            "question": "从侧面看长方体看到什么(1长方2圆)？",
            "formula": "侧看→?",
            "answer": 1,
            "hint": "侧面也是长方形"
          },
          {
            "question": "从正面看球看到什么(1圆2正方)？",
            "formula": "正面看球→?",
            "answer": 1,
            "hint": "球各方向看都是圆"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求从上面看长方体看到什么形状",
              "求从前面看",
              "求从侧面看",
              "求长方体有几个面"
            ],
            "answer": "求从上面看长方体看到什么形状",
            "explain": "题目问从上面看长方体可能看到什么形状"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "从上面看长方体",
              "从下面看",
              "从里面看",
              "从任意方向看"
            ],
            "answer": "从上面看长方体",
            "explain": "观察方向是「上面」，物体是长方体"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "长方体从上看通常看到长方形",
              "看到圆形",
              "看到三角形",
              "看到正方体"
            ],
            "answer": "长方体从上看通常看到长方形",
            "explain": "长方体的面是长方形，从上看通常看到一个长方形"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "几何图显示长方体，从上面看能看到一个长方形面",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "长方体有6个面，每个面都是长方形（特殊情况下有正方形），从一个方向看通常看到1个面",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "观察物体：从一个方向看最多看到3个面。不同方向看到的形状可能不同",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算35+25和25+35，发现结果一样。",
        "question": "35+25等于多少？",
        "formula": "35 + 25 = ?",
        "answer": 60,
        "choices": [
          60,
          50,
          70,
          55
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 60,
          "parts": [
            {
              "label": "35",
              "val": 35,
              "color": "#00A896"
            },
            {
              "label": "25",
              "val": 25,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "加法交换律和结合律",
        "difficulty": 2,
        "hint": "a+b=b+a",
        "variants": [
          {
            "question": "25+35=?",
            "formula": "25+35=?",
            "answer": 60,
            "hint": "交换律结果相同"
          },
          {
            "question": "(18+22)+8=?",
            "formula": "(18+22)+8=?",
            "answer": 48,
            "hint": "先算括号"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求35+25等于多少",
              "求35-25",
              "求35×25",
              "求35÷25"
            ],
            "answer": "求35+25等于多少",
            "explain": "题目算式35+25，要求算出结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "两个加数35和25",
              "35和25的差",
              "35和25的积",
              "只有35"
            ],
            "answer": "两个加数35和25",
            "explain": "35和25是两个加数，求它们的和"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "加法：35+25=60",
              "减法",
              "乘法",
              "除法"
            ],
            "answer": "加法：35+25=60",
            "explain": "求两个数的和用加法，35+25=60"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图分两段：35（绿色）+25（黄色），合起来60",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "加法交换律：a+b=b+a。35+25=25+35=60，结果相同",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加法运算定律：①交换律 a+b=b+a ②结合律 (a+b)+c=a+(b+c)，可使计算简便",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮算4×25和25×4，发现结果一样。",
        "question": "25×4等于多少？",
        "formula": "25 × 4 = ?",
        "answer": 100,
        "choices": [
          100,
          90,
          80,
          110
        ],
        "visualType": "areaModel",
        "visualData": {
          "rows": 25,
          "cols": 4,
          "color": "#00A896"
        },
        "knowledge": "乘法交换律和结合律",
        "difficulty": 2,
        "hint": "a×b=b×a",
        "variants": [
          {
            "question": "4×25=?",
            "formula": "4×25=?",
            "answer": 100,
            "hint": "交换律结果相同"
          },
          {
            "question": "(5×2)×8=?",
            "formula": "(5×2)×8=?",
            "answer": 80,
            "hint": "先算括号"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求25×4等于多少",
              "求25+4",
              "求25-4",
              "求25÷4"
            ],
            "answer": "求25×4等于多少",
            "explain": "题目算式25×4，要求算出结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "两个因数25和4",
              "25和4的和",
              "25和4的差",
              "只有25"
            ],
            "answer": "两个因数25和4",
            "explain": "25和4是两个因数，求它们的积"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法：25×4=100",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "乘法：25×4=100",
            "explain": "求两个数的积用乘法，25×4=100"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "面积模型25行4列，共25×4=100个小方格",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法交换律：a×b=b×a。25×4=4×25=100，结果相同",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "乘法运算定律：①交换律 a×b=b×a ②结合律 (a×b)×c=a×(b×c)，可简便计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算(20+3)×4，老师教她可以拆成20×4+3×4。",
        "question": "(20+3)×4等于多少？",
        "formula": "(20+3)×4 = 20×4+3×4 = ?",
        "answer": 92,
        "choices": [
          92,
          80,
          12,
          27
        ],
        "visualType": "areaModel",
        "visualData": {
          "rows": 23,
          "cols": 4,
          "color": "#00A896"
        },
        "knowledge": "乘法分配律",
        "difficulty": 3,
        "hint": "(a+b)×c=a×c+b×c",
        "variants": [
          {
            "question": "(30+5)×2=?",
            "formula": "(30+5)×2=?",
            "answer": 70,
            "hint": "30×2+5×2"
          },
          {
            "question": "(10+8)×5=?",
            "formula": "(10+8)×5=?",
            "answer": 90,
            "hint": "10×5+8×5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求(20+3)×4等于多少",
              "求20+3",
              "求20×4",
              "求3×4"
            ],
            "answer": "求(20+3)×4等于多少",
            "explain": "题目算式(20+3)×4，要求算出结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "可以拆成20×4+3×4",
              "只能先算20+3",
              "只能先算20×4",
              "只能先算3×4"
            ],
            "answer": "可以拆成20×4+3×4",
            "explain": "老师教用乘法分配律拆开计算"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "乘法分配律：20×4+3×4=80+12=92",
              "直接算23×4",
              "先算4×3",
              "无法计算"
            ],
            "answer": "乘法分配律：20×4+3×4=80+12=92",
            "explain": "(a+b)×c=a×c+b×c，所以(20+3)×4=20×4+3×4=92"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "面积模型23行4列，可以分成20×4和3×4两块，合起来92",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法分配律：(a+b)×c=a×c+b×c。(20+3)×4=20×4+3×4=80+12=92",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "乘法分配律：(a+b)×c=a×c+b×c，逆用 a×c+b×c=(a+b)×c 可简便计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算125-38-62，老师教她可以变成125-(38+62)。",
        "question": "125-(38+62)等于多少？",
        "formula": "125 - (38+62) = ?",
        "answer": 25,
        "choices": [
          25,
          99,
          100,
          75
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 125,
          "parts": [
            {
              "val": 100,
              "color": "#FB923C"
            },
            {
              "val": 25,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "简便运算",
        "difficulty": 2,
        "hint": "a-b-c=a-(b+c)",
        "variants": [
          {
            "question": "200-75-25=?",
            "formula": "200-(75+25)=?",
            "answer": 100,
            "hint": "先算括号"
          },
          {
            "question": "350-120-80=?",
            "formula": "350-(120+80)=?",
            "answer": 150,
            "hint": "先算括号"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求125-(38+62)等于多少",
              "求125-38",
              "求38+62",
              "求125+38"
            ],
            "answer": "求125-(38+62)等于多少",
            "explain": "题目算式125-(38+62)，要求算出结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "125减去(38+62)",
              "125减38再减62",
              "125加38",
              "只有125"
            ],
            "answer": "125减去(38+62)",
            "explain": "125是被减数，括号里38+62是要减去的总和"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "简便运算：38+62=100，125-100=25",
              "逐个减",
              "加法",
              "乘法"
            ],
            "answer": "简便运算：38+62=100，125-100=25",
            "explain": "a-b-c=a-(b+c)，先算38+62=100凑整，再算125-100=25"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数 bond 图：总数125，分成100和25两段，其中100=38+62",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "连减简便：a-b-c=a-(b+c)。125-38-62=125-(38+62)=125-100=25",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "连减性质：a-b-c=a-(b+c)；连除性质：a÷b÷c=a÷(b×c)。凑整可简便计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把一个正方形平均分成100份，涂了其中的3份。老师问涂色部分用小数表示是多少。",
        "question": "3/100用小数表示是多少？",
        "formula": "3/100 = ?",
        "answer": 0.03,
        "choices": [
          0.03,
          0.3,
          0.003,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 100,
          "color": "#00A896"
        },
        "knowledge": "小数的意义",
        "difficulty": 2,
        "hint": "3/100=0.03",
        "variants": [
          {
            "question": "7/100=?",
            "formula": "7/100=?",
            "answer": 0.07,
            "hint": "百分位"
          },
          {
            "question": "25/100=?",
            "formula": "25/100=?",
            "answer": 0.25,
            "hint": "0.25"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求3/100用小数表示是多少",
              "求3/10",
              "求3/1000",
              "求3"
            ],
            "answer": "求3/100用小数表示是多少",
            "explain": "题目问3/100用小数表示是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "正方形平均分100份涂3份",
              "平均分10份",
              "平均分1000份",
              "涂3份"
            ],
            "answer": "正方形平均分100份涂3份",
            "explain": "分母100表示分成100份，分子3表示取3份"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "分母100对应小数百分位：3/100=0.03",
              "分母10对应0.3",
              "分母1000对应0.003",
              "整数3"
            ],
            "answer": "分母100对应小数百分位：3/100=0.03",
            "explain": "分母是100的分数，写成小数是两位小数，3/100=0.03"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "分数条：把整体平均分成100份，涂色3份，表示3/100",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "小数的意义：1/10=0.1（十分位），1/100=0.01（百分位），1/1000=0.001（千分位）",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分母是10、100、1000的分数可以用小数表示：a/10=0.a，a/100=0.0a，a/1000=0.00a",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮写了一个小数0.45。老师问他读作什么。",
        "question": "0.45的整数部分是几？",
        "formula": "0.45 → 整数部分 = ?",
        "answer": 0,
        "choices": [
          0,
          4,
          5,
          45
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 1,
          "points": [
            {
              "pos": 0.45,
              "label": "0.45",
              "color": "#00A896"
            }
          ],
          "highlight": [
            0,
            1
          ]
        },
        "knowledge": "小数的读法和写法",
        "difficulty": 2,
        "hint": "0.45读作零点四五",
        "variants": [
          {
            "question": "2.3的整数部分是几？",
            "formula": "2.3整数=?",
            "answer": 2,
            "hint": "二点三"
          },
          {
            "question": "0.08的整数部分是几？",
            "formula": "0.08整数=?",
            "answer": 0,
            "hint": "零点零八"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求0.45的整数部分是几",
              "求0.45的小数部分",
              "求0.45读作什么",
              "求0.45是多少"
            ],
            "answer": "求0.45的整数部分是几",
            "explain": "题目问0.45的整数部分是几"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "小数0.45，小数点左边是整数部分",
              "小数点右边是整数部分",
              "0.45没有整数部分",
              "只有小数部分"
            ],
            "answer": "小数0.45，小数点左边是整数部分",
            "explain": "小数点左边的数是整数部分，右边是小数部分"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "0.45小数点左边是0，所以整数部分是0",
              "整数部分是45",
              "整数部分是4",
              "整数部分是5"
            ],
            "answer": "0.45小数点左边是0，所以整数部分是0",
            "explain": "0.45中小数点左边是0，整数部分是0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上0到1之间标出0.45的位置，整数部分是0",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "小数由整数部分、小数点、小数部分组成。0.45读作零点四五，整数部分0",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "小数读写：整数部分按整数读，小数点读「点」，小数部分顺次读出每个数字",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红发现0.3和0.30大小一样。老师告诉她小数末尾添0大小不变。",
        "question": "0.3和0.30哪个大？(相等填0,0.3大填1,0.30大填2)",
        "formula": "0.3 ? 0.30 → (0等/1前/2后)",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 10,
          "color": "#00A896"
        },
        "knowledge": "小数的性质",
        "difficulty": 2,
        "hint": "小数末尾添0大小不变",
        "variants": [
          {
            "question": "0.5和0.50谁大(0等)？",
            "formula": "0.5?0.50",
            "answer": 0,
            "hint": "相等"
          },
          {
            "question": "0.7和0.07谁大(0等1前2后)？",
            "formula": "0.7?0.07",
            "answer": 1,
            "hint": "0.7>0.07"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "比较0.3和0.30的大小",
              "求0.3+0.30",
              "求0.3-0.30",
              "求0.3×0.30"
            ],
            "answer": "比较0.3和0.30的大小",
            "explain": "题目问0.3和0.30哪个大"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "0.3末尾添0变0.30，大小不变",
              "0.30比0.3大",
              "0.3比0.30大",
              "两个数无关"
            ],
            "answer": "0.3末尾添0变0.30，大小不变",
            "explain": "小数的性质：末尾添0或去0大小不变"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "小数末尾添0大小不变，0.3=0.30",
              "添0变大",
              "添0变小",
              "无法比较"
            ],
            "answer": "小数末尾添0大小不变，0.3=0.30",
            "explain": "小数末尾添0不改变大小，所以0.3=0.30"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "分数条：3/10=30/100，涂色部分一样多，所以0.3=0.30",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "小数的性质：小数末尾添上或去掉0，小数大小不变。0.3=0.30",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "小数末尾的0可以添上或去掉，大小不变。注意：只能末尾的0，中间的0不能动",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红跳远1.25米，小亮跳1.3米。老师问谁跳得远。",
        "question": "1.25和1.3谁大？(1.25填1,1.3填2)",
        "formula": "1.25 ? 1.3 → (1前/2后)",
        "answer": 2,
        "choices": [
          2,
          1,
          0,
          3
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 1.2,
          "end": 1.3,
          "points": [
            {
              "pos": 1.25,
              "label": "小红",
              "color": "#00A896"
            },
            {
              "pos": 1.3,
              "label": "小亮",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            1.2,
            1.3
          ]
        },
        "knowledge": "小数大小比较",
        "difficulty": 2,
        "hint": "先比整数再比小数",
        "variants": [
          {
            "question": "0.6和0.8谁大(1前2后)？",
            "formula": "0.6?0.8",
            "answer": 2,
            "hint": "0.8>0.6"
          },
          {
            "question": "2.1和1.9谁大(1前2后)？",
            "formula": "2.1?1.9",
            "answer": 1,
            "hint": "2.1>1.9"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "比较1.25和1.3的大小",
              "求1.25+1.3",
              "求1.25-1.3",
              "求1.25×1.3"
            ],
            "answer": "比较1.25和1.3的大小",
            "explain": "题目问1.25和1.3谁大"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "两个小数1.25和1.3",
              "1.25和1.3的和",
              "1.25和1.3的积",
              "只有1.25"
            ],
            "answer": "两个小数1.25和1.3",
            "explain": "要比较1.25和1.3的大小"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "先比整数部分都是1，再比十分位2<3，所以1.3大",
              "位数多的大",
              "数字大的大",
              "无法比较"
            ],
            "answer": "先比整数部分都是1，再比十分位2<3，所以1.3大",
            "explain": "小数大小比较：先比整数部分，相同则比十分位，1.25的十分位2<1.3的十分位3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上1.2到1.3之间，1.25在1.3左边，所以1.25<1.3",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "小数比较：先比整数部分，再从十分位起逐位比。1.25和1.3整数都是1，十分位2<3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "小数大小比较步骤：①比整数部分②整数相同比十分位③十分位相同比百分位……位数多不代表大",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮把0.25的小数点向右移动一位，变成2.5。老师问扩大了多少倍。",
        "question": "小数点右移一位，数扩大多少倍？",
        "formula": "右移1位 → × ?",
        "answer": 10,
        "choices": [
          10,
          100,
          1000,
          1
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0.25,
          "end": 2.5,
          "points": [
            {
              "pos": 0.25,
              "label": "0.25",
              "color": "#00A896"
            },
            {
              "pos": 2.5,
              "label": "2.5",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0.25,
            2.5
          ]
        },
        "knowledge": "小数点移动",
        "difficulty": 3,
        "hint": "右移1位×10",
        "variants": [
          {
            "question": "右移2位×多少？",
            "formula": "右移2位×?",
            "answer": 100,
            "hint": "右移2位×100"
          },
          {
            "question": "左移1位÷多少？",
            "formula": "左移1位÷?",
            "answer": 10,
            "hint": "左移1位÷10"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求小数点右移一位数扩大多少倍",
              "求左移一位",
              "求右移两位",
              "求左移两位"
            ],
            "answer": "求小数点右移一位数扩大多少倍",
            "explain": "题目问小数点右移一位数扩大多少倍"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "0.25右移一位变2.5",
              "0.25左移一位",
              "2.5右移一位",
              "0.25不变"
            ],
            "answer": "0.25右移一位变2.5",
            "explain": "0.25的小数点向右移动一位变成2.5"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "右移一位×10，2.5是0.25的10倍",
              "右移一位×100",
              "右移一位×1000",
              "右移一位×1"
            ],
            "answer": "右移一位×10，2.5是0.25的10倍",
            "explain": "小数点右移一位，数扩大10倍；0.25×10=2.5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上0.25到2.5，2.5是0.25的10倍距离",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "小数点移动规律：右移1位×10，右移2位×100，右移3位×1000；左移相反",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "小数点右移n位=×10ⁿ；左移n位=÷10ⁿ。这是小数乘除法的基础",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红身高125厘米，她想换算成米。",
        "question": "125厘米等于多少米？",
        "formula": "125 ÷ 100 = ? m",
        "answer": 1.25,
        "choices": [
          1.25,
          12.5,
          0.125,
          125
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 2,
          "points": [
            {
              "pos": 1.25,
              "label": "1.25m",
              "color": "#00A896"
            }
          ],
          "highlight": [
            0,
            2
          ]
        },
        "knowledge": "小数与单位换算",
        "difficulty": 2,
        "hint": "厘米÷100=米",
        "variants": [
          {
            "question": "350cm=?m？",
            "formula": "350÷100=?",
            "answer": 3.5,
            "hint": "除以100"
          },
          {
            "question": "8m=?cm？",
            "formula": "8×100=?",
            "answer": 800,
            "hint": "乘100"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求125厘米等于多少米",
              "求125米等于多少厘米",
              "求125厘米等于多少分米",
              "求125毫米等于多少米"
            ],
            "answer": "求125厘米等于多少米",
            "explain": "题目要把125厘米换算成米"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "125厘米，1米=100厘米",
              "125米",
              "1米=10厘米",
              "1米=1000厘米"
            ],
            "answer": "125厘米，1米=100厘米",
            "explain": "厘米和米的进率是100"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "低级到高级除以进率：125÷100=1.25米",
              "乘以100",
              "加100",
              "减100"
            ],
            "answer": "低级到高级除以进率：125÷100=1.25米",
            "explain": "厘米→米是低级到高级，÷100，小数点左移两位：125→1.25"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴0到2米之间，1.25米的位置就是125厘米",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "单位换算：厘米÷100=米。125÷100=1.25，小数点左移两位",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "单位换算：高级→低级×进率；低级→高级÷进率。米↔厘米进率100",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮的身高是1.356米，保留一位小数约是多少？",
        "question": "1.356保留一位小数约是多少？",
        "formula": "1.356 ≈ ? (一位小数)",
        "answer": 1.4,
        "choices": [
          1.4,
          1.3,
          1.36,
          1.5
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 1.3,
          "end": 1.4,
          "points": [
            {
              "pos": 1.356,
              "label": "1.356",
              "color": "#00A896"
            },
            {
              "pos": 1.4,
              "label": "1.4",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            1.3,
            1.4
          ]
        },
        "knowledge": "求小数近似数",
        "difficulty": 2,
        "hint": "看第二位5≥5进一",
        "variants": [
          {
            "question": "2.34保留一位小数？",
            "formula": "2.34≈?",
            "answer": 2.3,
            "hint": "4<5舍去"
          },
          {
            "question": "0.86保留一位小数？",
            "formula": "0.86≈?",
            "answer": 0.9,
            "hint": "6≥5进一"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求1.356保留一位小数约是多少",
              "求1.356保留两位",
              "求1.356保留整数",
              "求1.356的整数部分"
            ],
            "answer": "求1.356保留一位小数约是多少",
            "explain": "题目要把1.356保留一位小数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "1.356保留一位小数，看第二位5",
              "1.356保留两位小数",
              "1.356的整数部分",
              "1.356的小数部分"
            ],
            "answer": "1.356保留一位小数，看第二位5",
            "explain": "保留一位小数要看第二位小数（百分位）是5"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "四舍五入：第二位5≥5进一，1.356≈1.4",
              "直接舍去",
              "第二位4<5舍去",
              "第二位6≥5进一"
            ],
            "answer": "四舍五入：第二位5≥5进一，1.356≈1.4",
            "explain": "保留一位小数看百分位，5≥5向前进一，1.3+0.1=1.4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴1.3到1.4之间，1.356更接近1.4（过中点1.35）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "四舍五入：保留一位小数看百分位。1.356百分位是5，≥5进一，所以≈1.4",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求近似数：保留n位小数，看第n+1位。<5舍去，≥5进一。注意≈符号",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红用三根小棒围成一个三角形。老师问三角形有几条边。",
        "question": "三角形有几条边？",
        "formula": "三角形边数 = ?",
        "answer": 3,
        "choices": [
          3,
          4,
          2,
          5
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {}
        },
        "knowledge": "三角形的认识",
        "difficulty": 1,
        "hint": "三角形3条边3个角",
        "variants": [
          {
            "question": "三角形有几个顶点？",
            "formula": "顶点=?",
            "answer": 3,
            "hint": "3个顶点"
          },
          {
            "question": "三角形有几个角？",
            "formula": "角=?",
            "answer": 3,
            "hint": "3个角"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求三角形有几条边",
              "求三角形有几个角",
              "求三角形有几个顶点",
              "求三角形面积"
            ],
            "answer": "求三角形有几条边",
            "explain": "题目问三角形有几条边"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "用三根小棒围成三角形",
              "用四根小棒",
              "用两根小棒",
              "用一根小棒"
            ],
            "answer": "用三根小棒围成三角形",
            "explain": "三角形由三条线段围成"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "三角形有3条边",
              "三角形有4条边",
              "三角形有2条边",
              "三角形有5条边"
            ],
            "answer": "三角形有3条边",
            "explain": "由三条线段围成的图形叫三角形，有3条边、3个角、3个顶点"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "几何图显示三角形：3条边、3个角、3个顶点",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "三角形：由三条线段围成的封闭图形。有3条边、3个角、3个顶点",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "三角形具有稳定性（不易变形），是几何中最基本的图形之一。任意三角形内角和=180°",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮画了一个三角形，三个角都是60度。老师问这是什么三角形。",
        "question": "三个角都是锐角的三角形叫什么？(锐角三角形填1,直角填2,钝角填3)",
        "formula": "三锐角 → ? (1锐/2直/3钝)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "type": "acute"
          }
        },
        "knowledge": "三角形的分类",
        "difficulty": 2,
        "hint": "三个角都是锐角",
        "variants": [
          {
            "question": "有一个直角叫什么(1锐2直3钝)？",
            "formula": "一直角→?",
            "answer": 2,
            "hint": "直角三角形"
          },
          {
            "question": "有一个钝角叫什么(1锐2直3钝)？",
            "formula": "一钝角→?",
            "answer": 3,
            "hint": "钝角三角形"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求三个角都是锐角的三角形叫什么",
              "求直角三角形",
              "求钝角三角形",
              "求等腰三角形"
            ],
            "answer": "求三个角都是锐角的三角形叫什么",
            "explain": "题目问三个角都是锐角的三角形叫什么"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "三个角都是60度（锐角）",
              "有一个直角",
              "有一个钝角",
              "三个角不等"
            ],
            "answer": "三个角都是60度（锐角）",
            "explain": "三角形三个角都是60度，都是锐角"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "三个角都是锐角的叫锐角三角形",
              "有直角叫直角三角形",
              "有钝角叫钝角三角形",
              "无法判断"
            ],
            "answer": "三个角都是锐角的叫锐角三角形",
            "explain": "按角分类：三个角都是锐角的是锐角三角形"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "几何图显示锐角三角形，三个角都小于90°",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "三角形按角分：①锐角三角形（三角都是锐角）②直角三角形（一直角）③钝角三角形（一钝角）",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "三角形分类：按角分（锐角/直角/钝角）；按边分（不等边/等腰/等边）。任意三角形至少有2个锐角",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把三角形的三个角撕下来拼在一起，发现拼成了一个平角。",
        "question": "三角形内角和等于多少度？",
        "formula": "三角形内角和 = ?°",
        "answer": 180,
        "choices": [
          180,
          360,
          90,
          270
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "angleSum": 180
          }
        },
        "knowledge": "三角形内角和",
        "difficulty": 2,
        "hint": "三角形内角和180°",
        "variants": [
          {
            "question": "一个角50°一个60°第三个多少度？",
            "formula": "180-50-60=?",
            "answer": 70,
            "hint": "180减已知两角"
          },
          {
            "question": "一个角90°一个30°第三个多少度？",
            "formula": "180-90-30=?",
            "answer": 60,
            "hint": "180减已知两角"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求三角形内角和等于多少度",
              "求三角形外角",
              "求三角形面积",
              "求三角形边长"
            ],
            "answer": "求三角形内角和等于多少度",
            "explain": "题目问三角形内角和等于多少度"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "把三个角撕下来拼成平角",
              "三个角都是60度",
              "有一个直角",
              "三个角不等"
            ],
            "answer": "把三个角撕下来拼成平角",
            "explain": "把三角形三个内角撕下来拼在一起，正好拼成一个平角180°"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "平角=180°，所以三角形内角和=180°",
              "直角=90°",
              "周角=360°",
              "锐角=60°"
            ],
            "answer": "平角=180°，所以三角形内角和=180°",
            "explain": "三个内角拼成平角，平角180°，所以三角形内角和=180°"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "几何图：三角形三个角撕下拼在一起，组成一个平角（180°）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "三角形内角和=180°。已知两个角可求第三个：第三个角=180°-已知两角和",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "任意三角形内角和都是180°。推广：四边形内角和360°，n边形内角和=(n-2)×180°",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红有三根小棒：3cm、4cm、5cm。她好奇能不能围成三角形。",
        "question": "3cm、4cm、5cm能围成三角形吗？(能填1,不能填2)",
        "formula": "3+4 ? 5 → (1能/2不能)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "sides": [
              3,
              4,
              5
            ]
          }
        },
        "knowledge": "三角形三边关系",
        "difficulty": 3,
        "hint": "3+4>5能围成",
        "variants": [
          {
            "question": "2cm、3cm、6cm能围成吗(1能2不能)？",
            "formula": "2+3?6",
            "answer": 2,
            "hint": "2+3<6不能"
          },
          {
            "question": "5cm、5cm、5cm能围成吗(1能2不能)？",
            "formula": "5+5?5",
            "answer": 1,
            "hint": "5+5>5能"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "判断3cm、4cm、5cm能否围成三角形",
              "求三角形面积",
              "求三角形周长",
              "求三角形内角和"
            ],
            "answer": "判断3cm、4cm、5cm能否围成三角形",
            "explain": "题目问3cm、4cm、5cm能否围成三角形"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "三根小棒3cm、4cm、5cm",
              "两根小棒",
              "一根小棒",
              "四根小棒"
            ],
            "answer": "三根小棒3cm、4cm、5cm",
            "explain": "有三根小棒长度分别是3cm、4cm、5cm"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "任意两边之和大于第三边：3+4=7>5能围成",
              "3+4<5",
              "3+5<4",
              "4+5<3"
            ],
            "answer": "任意两边之和大于第三边：3+4=7>5能围成",
            "explain": "三角形三边关系：任意两边之和大于第三边。3+4=7>5，所以能围成"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "几何图显示边长3、4、5的三角形，可围成（直角三角形）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "三角形三边关系：任意两边之和>第三边。检查：3+4=7>5，3+5=8>4，4+5=9>3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "三角形任意两边之和>第三边；任意两边之差<第三边。用于判断能否围成三角形",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红买铅笔用了2.5元，买橡皮用了1.8元。她算算一共花了多少元。",
        "question": "一共花了多少元？",
        "formula": "2.5 + 1.8 = ?",
        "answer": 4.3,
        "choices": [
          4.3,
          3.3,
          5.3,
          4.2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 4.3,
          "parts": [
            {
              "label": "铅笔",
              "val": 2.5,
              "color": "#00A896"
            },
            {
              "label": "橡皮",
              "val": 1.8,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "小数加减法",
        "difficulty": 2,
        "hint": "小数点对齐再相加",
        "variants": [
          {
            "question": "3.6+2.4=?",
            "formula": "3.6+2.4=?",
            "answer": 6,
            "hint": "小数点对齐"
          },
          {
            "question": "1.7+0.8=?",
            "formula": "1.7+0.8=?",
            "answer": 2.5,
            "hint": "满十进一"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求一共花了多少元",
              "求每件多少元",
              "求找零多少",
              "求单价"
            ],
            "answer": "求一共花了多少元",
            "explain": "题目问买铅笔和橡皮一共花了多少元"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "铅笔2.5元，橡皮1.8元",
              "铅笔3.5元",
              "橡皮2.8元",
              "只有铅笔"
            ],
            "answer": "铅笔2.5元，橡皮1.8元",
            "explain": "铅笔花了2.5元，橡皮花了1.8元"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "加法：2.5+1.8=4.3",
              "减法",
              "乘法",
              "除法"
            ],
            "answer": "加法：2.5+1.8=4.3",
            "explain": "求总数用加法，2.5+1.8=4.3元"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图两段：铅笔2.5（绿）+橡皮1.8（黄）=总4.3",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "小数加减：小数点对齐，按整数加减算。2.5+1.8：5+8=13进1，2+1+1=4，得4.3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "小数加减法：①小数点对齐②按整数加减法算③结果点上小数点④末尾有0可去掉",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红有10元，买文具用了3.5元，又买零食用了2.8元。她还剩多少元？",
        "question": "还剩多少元？",
        "formula": "10 - 3.5 - 2.8 = ?",
        "answer": 3.7,
        "choices": [
          3.7,
          4.7,
          3.5,
          2.7
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 10,
          "parts": [
            {
              "val": 3.5,
              "color": "#FB923C"
            },
            {
              "val": 2.8,
              "color": "#E8A0BF"
            },
            {
              "val": 3.7,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "小数加减混合运算",
        "difficulty": 2,
        "hint": "从左到右依次减",
        "variants": [
          {
            "question": "20-5.5-4.5=?",
            "formula": "20-5.5-4.5=?",
            "answer": 10,
            "hint": "依次减"
          },
          {
            "question": "15-3.2-6.8=?",
            "formula": "15-3.2-6.8=?",
            "answer": 5,
            "hint": "依次减"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求还剩多少元",
              "求花了多少",
              "求原来多少",
              "求每件多少"
            ],
            "answer": "求还剩多少元",
            "explain": "题目问买文具和零食后还剩多少元"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "原来10元，花3.5元和2.8元",
              "原来20元",
              "只花3.5元",
              "只花2.8元"
            ],
            "answer": "原来10元，花3.5元和2.8元",
            "explain": "原来有10元，先花3.5元，又花2.8元"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "连减：10-3.5-2.8=3.7",
              "加法",
              "乘法",
              "除法"
            ],
            "answer": "连减：10-3.5-2.8=3.7",
            "explain": "从总数中依次减去花费，10-3.5=6.5，6.5-2.8=3.7"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数 bond 图：总数10分成3.5、2.8、3.7三段",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "连减运算：从左到右依次算。10-3.5-2.8=6.5-2.8=3.7",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "小数加减混合运算顺序与整数相同：①从左到右②有括号先算括号③可运用运算定律简便",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算0.25+1.8+0.75，她用加法交换律先算0.25+0.75。",
        "question": "0.25+0.75等于多少？",
        "formula": "0.25 + 0.75 = ?",
        "answer": 1,
        "choices": [
          1,
          1.5,
          0.9,
          1.1
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 1,
          "parts": [
            {
              "label": "0.25",
              "val": 0.25,
              "color": "#00A896"
            },
            {
              "label": "0.75",
              "val": 0.75,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "整数运算定律推广到小数",
        "difficulty": 2,
        "hint": "加法交换律凑整",
        "variants": [
          {
            "question": "1.7+0.9+0.3=?",
            "formula": "1.7+0.3+0.9=?",
            "answer": 2.9,
            "hint": "交换律凑整"
          },
          {
            "question": "0.4+2.6+1.5=?",
            "formula": "0.4+2.6+1.5=?",
            "answer": 4.5,
            "hint": "交换律凑整"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求0.25+0.75等于多少",
              "求0.25-0.75",
              "求0.25×0.75",
              "求0.25÷0.75"
            ],
            "answer": "求0.25+0.75等于多少",
            "explain": "题目算式0.25+0.75，要求算出结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "用加法交换律先算0.25+0.75凑整",
              "先算1.8+0.75",
              "先算0.25+1.8",
              "逐个加"
            ],
            "answer": "用加法交换律先算0.25+0.75凑整",
            "explain": "老师教用交换律把0.25和0.75先加凑整"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "交换律凑整：0.25+0.75=1",
              "逐个加",
              "减法",
              "乘法"
            ],
            "answer": "交换律凑整：0.25+0.75=1",
            "explain": "加法交换律：a+b=b+a。0.25+0.75=1凑整"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图两段：0.25（绿）+0.75（黄）=1",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "整数运算定律适用于小数：加法交换律 a+b=b+a，加法结合律 (a+b)+c=a+(b+c)",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "运算定律对小数同样适用：①交换律②结合律③分配律。凑整可使计算简便",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把一张纸对折后剪出一个图形，展开后发现两边完全一样。",
        "question": "对折后完全重合的图形叫什么？(轴对称填1,平移填2)",
        "formula": "对折重合 → ? (1轴对称/2平移)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "symmetry",
          "params": {}
        },
        "knowledge": "轴对称",
        "difficulty": 2,
        "hint": "对折重合叫轴对称",
        "variants": [
          {
            "question": "正方形有几条对称轴？",
            "formula": "正方形对称轴=?",
            "answer": 4,
            "hint": "正方形4条对称轴"
          },
          {
            "question": "等腰三角形有几条对称轴？",
            "formula": "等腰三角形对称轴=?",
            "answer": 1,
            "hint": "等腰三角形1条"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求对折后完全重合的图形叫什么",
              "求平移图形",
              "求旋转图形",
              "求缩放图形"
            ],
            "answer": "求对折后完全重合的图形叫什么",
            "explain": "题目问对折后完全重合的图形叫什么"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "对折后两边完全一样",
              "对折后不重合",
              "展开后不同",
              "剪出图形"
            ],
            "answer": "对折后两边完全一样",
            "explain": "对折后两边完全一样即完全重合"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "对折重合的叫轴对称",
              "对折重合叫平移",
              "对折重合叫旋转",
              "无法判断"
            ],
            "answer": "对折重合的叫轴对称",
            "explain": "对折后完全重合的图形叫轴对称图形"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "几何图显示对称图形，对称轴两侧完全相同",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "轴对称：对折后完全重合。折痕所在的直线叫对称轴",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "轴对称性质：对称点到对称轴距离相等。常见轴对称图形：正方形（4条）、等腰三角形（1条）、圆（无数条）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把一个三角形向右移动了3格。老师问平移后图形什么不变。",
        "question": "平移后图形什么不变？(形状大小填1,位置填2)",
        "formula": "平移不变 → ? (1形状/2位置)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "translation",
          "params": {
            "direction": "right",
            "distance": 3
          }
        },
        "knowledge": "平移",
        "difficulty": 2,
        "hint": "平移形状大小不变",
        "variants": [
          {
            "question": "向右平移5格位置变了吗(1变2不变)？",
            "formula": "位置?",
            "answer": 1,
            "hint": "位置变了"
          },
          {
            "question": "平移后大小变了吗(1变2不变)？",
            "formula": "大小?",
            "answer": 2,
            "hint": "大小不变"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求平移后图形什么不变",
              "求平移后什么变了",
              "求平移方向",
              "求平移距离"
            ],
            "answer": "求平移后图形什么不变",
            "explain": "题目问平移后图形什么不变"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "三角形向右移动3格",
              "三角形旋转",
              "三角形缩放",
              "三角形翻转"
            ],
            "answer": "三角形向右移动3格",
            "explain": "三角形向右平移3格"
          },
          {
            "q": "🧩 用什么方法判断？",
            "choices": [
              "平移后形状大小不变，位置变",
              "形状变",
              "大小变",
              "都变"
            ],
            "answer": "平移后形状大小不变，位置变",
            "explain": "平移只改变位置，不改变形状和大小"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "几何图显示三角形向右平移3格，形状大小完全相同",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "平移：沿直线运动。平移后图形的形状、大小、方向都不变，只有位置改变",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平移三要素：①方向②距离③对应点。平移后对应点连线平行且相等",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红遇到一个不规则图形，她通过平移把它变成一个长5宽3的长方形。",
        "question": "平移后长方形的面积是多少？",
        "formula": "5 × 3 = ?",
        "answer": 15,
        "choices": [
          15,
          8,
          12,
          16
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 5,
            "width": 3
          }
        },
        "knowledge": "利用平移求不规则图形面积",
        "difficulty": 3,
        "hint": "割补平移变规则图形",
        "variants": [
          {
            "question": "平移变成长6宽4面积？",
            "formula": "6×4=?",
            "answer": 24,
            "hint": "长乘宽"
          },
          {
            "question": "平移变成长8宽2面积？",
            "formula": "8×2=?",
            "answer": 16,
            "hint": "长乘宽"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求平移后长方形的面积",
              "求长方形周长",
              "求长方形边长",
              "求不规则图形周长"
            ],
            "answer": "求平移后长方形的面积",
            "explain": "题目问平移变成长5宽3的长方形后面积是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "平移变成长5宽3的长方形",
              "长5宽4",
              "长6宽3",
              "边长5"
            ],
            "answer": "平移变成长5宽3的长方形",
            "explain": "通过平移割补，不规则图形变成长5宽3的长方形"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "长方形面积=长×宽=5×3=15",
              "加法",
              "减法",
              "除法"
            ],
            "answer": "长方形面积=长×宽=5×3=15",
            "explain": "长方形面积公式：长×宽=5×3=15"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "几何图：不规则图形通过割补平移变成长5宽3的长方形",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "割补平移：把不规则图形的一部分平移补到另一处，变成规则图形，面积不变",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "利用平移求不规则图形面积：通过割补平移转化为规则图形。关键：平移不改变面积",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红的数学成绩分别是90、85、95分。老师让她算平均分。",
        "question": "三科平均分是多少？",
        "formula": "(90+85+95) ÷ 3 = ?",
        "answer": 90,
        "choices": [
          90,
          85,
          95,
          270
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 270,
          "parts": [
            {
              "label": "90",
              "val": 90,
              "color": "#00A896"
            },
            {
              "label": "85",
              "val": 85,
              "color": "#F5B800"
            },
            {
              "label": "95",
              "val": 95,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "平均数",
        "difficulty": 2,
        "hint": "总数÷份数=平均数",
        "variants": [
          {
            "question": "80+90+100平均多少？",
            "formula": "270÷3=?",
            "answer": 90,
            "hint": "总分除以3"
          },
          {
            "question": "70+80+90平均多少？",
            "formula": "240÷3=?",
            "answer": 80,
            "hint": "总分除以3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求三科平均分是多少",
              "求总分",
              "求最高分",
              "求最低分"
            ],
            "answer": "求三科平均分是多少",
            "explain": "题目问90、85、95三科的平均分"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "三科成绩90、85、95",
              "两科成绩",
              "总分270",
              "只有90"
            ],
            "answer": "三科成绩90、85、95",
            "explain": "三科成绩分别是90分、85分、95分"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "平均数=总数÷份数：(90+85+95)÷3=90",
              "加法",
              "减法",
              "乘法"
            ],
            "answer": "平均数=总数÷份数：(90+85+95)÷3=90",
            "explain": "先求总分270，再除以3科，得平均分90"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图三段：90（绿）+85（黄）+95（橙）=270，平均90",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "平均数=总数÷份数。(90+85+95)÷3=270÷3=90",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均数反映一组数据的整体水平，可能大于、等于或小于其中的某些数。移多补少可得平均数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "统计图中男生用绿色条表示12人，女生用黄色条表示15人。小红问女生比男生多几人。",
        "question": "女生比男生多几人？",
        "formula": "15 - 12 = ?",
        "answer": 3,
        "choices": [
          3,
          27,
          5,
          2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 15,
          "parts": [
            {
              "label": "男生",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "多出",
              "val": 3,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "复式条形统计图",
        "difficulty": 2,
        "hint": "两组数据对比",
        "variants": [
          {
            "question": "男18女14男比女多几人？",
            "formula": "18-14=?",
            "answer": 4,
            "hint": "相减"
          },
          {
            "question": "男20女25女比男多几人？",
            "formula": "25-20=?",
            "answer": 5,
            "hint": "相减"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求女生比男生多几人",
              "求男生比女生多几人",
              "求一共多少人",
              "求女生人数"
            ],
            "answer": "求女生比男生多几人",
            "explain": "题目问女生比男生多几人"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "男生12人，女生15人",
              "男生15人",
              "女生12人",
              "总共27人"
            ],
            "answer": "男生12人，女生15人",
            "explain": "男生用绿色条表示12人，女生用黄色条表示15人"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "减法：15-12=3",
              "加法",
              "乘法",
              "除法"
            ],
            "answer": "减法：15-12=3",
            "explain": "求多几用减法，15-12=3人"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图：男生12（绿）+多出3（黄），女生15人。复式条形图可对比两组数据",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "复式条形统计图：两组数据并列对比。求差用减法：15-12=3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "复式条形统计图特点：可同时表示两组数据，便于对比差异。注意图例区分",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "农场有鸡兔共8只，腿共22条。小红用假设法算有几只兔。",
        "question": "假设全是鸡(8只16腿)，多出6条腿是几只兔？",
        "formula": "(22-16) ÷ 2 = ? (只兔)",
        "answer": 3,
        "choices": [
          3,
          5,
          2,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 22,
          "parts": [
            {
              "label": "8鸡16腿",
              "val": 16,
              "color": "#00A896"
            },
            {
              "label": "多出6腿",
              "val": 6,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "鸡兔同笼",
        "difficulty": 3,
        "hint": "假设全鸡，多出腿÷2=兔数",
        "variants": [
          {
            "question": "10只共26条腿几只兔？",
            "formula": "(26-20)÷2=?",
            "answer": 3,
            "hint": "假设全鸡"
          },
          {
            "question": "12只共32条腿几只兔？",
            "formula": "(32-24)÷2=?",
            "answer": 4,
            "hint": "假设全鸡"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求多出的腿是几只兔",
              "求鸡有几只",
              "求总腿数",
              "求总只数"
            ],
            "answer": "求多出的腿是几只兔",
            "explain": "题目问假设全是鸡后多出的6条腿是几只兔"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "鸡兔共8只22条腿，假设全鸡8只16腿多6腿",
              "共8只",
              "共22腿",
              "只有兔"
            ],
            "answer": "鸡兔共8只22条腿，假设全鸡8只16腿多6腿",
            "explain": "鸡兔共8只，腿22条。假设全是鸡（8×2=16腿），多出22-16=6条腿"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "假设法：多出腿÷2=兔数，6÷2=3只兔",
              "加法",
              "乘法",
              "除以4"
            ],
            "answer": "假设法：多出腿÷2=兔数，6÷2=3只兔",
            "explain": "每只兔比鸡多2腿，多出6腿÷2=3只兔"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图：8鸡16腿（绿）+多出6腿（黄）=22腿。多出的6腿是3只兔多出的",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "假设法：假设全鸡→算腿数→比实际少→少的是兔多出的腿。每兔多2腿，6÷2=3只兔",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "鸡兔同笼假设法：①假设全是鸡②算腿差③腿差÷(兔腿-鸡腿)=兔数④总只-兔数=鸡数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红有21元，妈妈又给她13元，现在有33元。老师问加法各部分名称。",
        "question": "在21+13=33中，21叫什么？(加数填1,和填2)",
        "formula": "21是? (1加数/2和)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 33,
          "parts": [
            {
              "label": "加数25",
              "val": 24,
              "color": "#00A896"
            },
            {
              "label": "加数10",
              "val": 9,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "加减法的意义和各部分关系",
        "difficulty": 2,
        "hint": "加法中相加的数叫加数",
        "variants": [
          {
            "question": "33是加数还是和(1加数2和)？",
            "formula": "33是?",
            "answer": 2,
            "hint": "相加的结果叫和"
          },
          {
            "question": "差+减数=?(1和2被减数)",
            "formula": "差+减数=?",
            "answer": 2,
            "hint": "差加减数等于被减数"
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
            "explain": "题目说「小红有21元，妈妈又给她13元，现在有33元。老师问加法各部分名称。」，问的是「在21+13=33中，21叫什么？(加数填1,和填2)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：21 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：21 和 1",
            "explain": "从题目中找到的关键数是：21、1、2"
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
            "explain": "计算：21是? (1加数/2和)=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表24，合起来就是33",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "21是? (1加数/2和)=1",
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
        "scene": "小红有33元，妈妈又给她14元，现在有36元。老师问加法各部分名称。",
        "question": "在33+14=36中，33叫什么？(加数填1,和填3)",
        "formula": "33是? (1加数/3和)",
        "answer": 1,
        "choices": [
          1,
          3,
          3,
          0
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 36,
          "parts": [
            {
              "label": "加数25",
              "val": 26,
              "color": "#00A896"
            },
            {
              "label": "加数10",
              "val": 10,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "加减法的意义和各部分关系",
        "difficulty": 2,
        "hint": "加法中相加的数叫加数",
        "variants": [
          {
            "question": "36是加数还是和(1加数3和)？",
            "formula": "36是?",
            "answer": 3,
            "hint": "相加的结果叫和"
          },
          {
            "question": "差+减数=?(1和3被减数)",
            "formula": "差+减数=?",
            "answer": 3,
            "hint": "差加减数等于被减数"
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
            "explain": "题目说「小红有33元，妈妈又给她14元，现在有36元。老师问加法各部分名称。」，问的是「在33+14=36中，33叫什么？(加数填1,和填3)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：33 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：33 和 1",
            "explain": "从题目中找到的关键数是：33、1、3"
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
            "explain": "计算：33是? (1加数/3和)=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表26，合起来就是36",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "33是? (1加数/3和)=1",
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
        "scene": "小亮有3盒铅笔，每盒16支。他算3×16=31。老师问31叫什么。",
        "question": "在3×16=31中，31叫什么？(积填1,因数填2)",
        "formula": "31是? (1积/2因数)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "areaModel",
        "visualData": {
          "rows": 3,
          "cols": 16,
          "color": "#00A896"
        },
        "knowledge": "乘除法的意义和各部分关系",
        "difficulty": 2,
        "hint": "乘法的结果叫积",
        "variants": [
          {
            "question": "3和16叫什么(1积2因数)？",
            "formula": "3和16是?",
            "answer": 2,
            "hint": "相乘的数叫因数"
          },
          {
            "question": "31÷16=3中31叫什么(1被除数2商)？",
            "formula": "31是?",
            "answer": 1,
            "hint": "被分的数叫被除数"
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
            "explain": "题目说「小亮有3盒铅笔，每盒16支。他算3×16=31。老师问31叫什么。」，问的是「在3×16=31中，31叫什么？(积填1,因数填2)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：31 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：31 和 1",
            "explain": "从题目中找到的关键数是：31、1、2"
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
            "explain": "计算：31是? (1积/2因数)=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "面积模型用方格区域展示了乘法的几何意义",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "31是? (1积/2因数)=1",
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
        "scene": "小亮有4盒铅笔，每盒18支。他算4×18=44。老师问44叫什么。",
        "question": "在4×18=44中，44叫什么？(积填1,因数填3)",
        "formula": "44是? (1积/3因数)",
        "answer": 1,
        "choices": [
          1,
          3,
          4,
          0
        ],
        "visualType": "areaModel",
        "visualData": {
          "rows": 4,
          "cols": 18,
          "color": "#00A896"
        },
        "knowledge": "乘除法的意义和各部分关系",
        "difficulty": 2,
        "hint": "乘法的结果叫积",
        "variants": [
          {
            "question": "4和18叫什么(1积3因数)？",
            "formula": "4和18是?",
            "answer": 3,
            "hint": "相乘的数叫因数"
          },
          {
            "question": "44÷18=4中44叫什么(1被除数3商)？",
            "formula": "44是?",
            "answer": 1,
            "hint": "被分的数叫被除数"
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
            "explain": "题目说「小亮有4盒铅笔，每盒18支。他算4×18=44。老师问44叫什么。」，问的是「在4×18=44中，44叫什么？(积填1,因数填3)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：44 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：44 和 1",
            "explain": "从题目中找到的关键数是：44、1、3"
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
            "explain": "计算：44是? (1积/3因数)=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "面积模型用方格区域展示了乘法的几何意义",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "44是? (1积/3因数)=1",
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
        "scene": "小红要算(16+11)×4。她先算括号里的。",
        "question": "(16+11)×4等于多少？",
        "formula": "(16 + 11) × 4 = ?",
        "answer": 108,
        "choices": [
          108,
          44,
          36,
          50
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 60,
          "parts": [
            {
              "label": "20×3",
              "val": 60,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "带括号的四则运算",
        "difficulty": 2,
        "hint": "先算括号再算乘法",
        "variants": [
          {
            "question": "(15-5)×4=?",
            "formula": "(15-5)×4=?",
            "answer": 40,
            "hint": "先算括号"
          },
          {
            "question": "(20+10)÷5=?",
            "formula": "(20+10)÷5=?",
            "answer": 6,
            "hint": "先算括号"
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
            "explain": "题目说「小红要算(16+11)×4。她先算括号里的。」，问的是「(16+11)×4等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：16 和 11",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：16 和 11",
            "explain": "从题目中找到的关键数是：16、11、4"
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
            "explain": "乘法：(16 + 11) × 4 = ?=60"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有1条等长的条形，每条代表60，合起来就是60",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(16 + 11) × 4 = ?=60",
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
        "scene": "小红要算(112+12)×4。她先算括号里的。",
        "question": "(112+12)×4等于多少？",
        "formula": "(112 + 12) × 4 = ?",
        "answer": 496,
        "choices": [
          496,
          44,
          36,
          50
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 60,
          "parts": [
            {
              "label": "20×3",
              "val": 60,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "带括号的四则运算",
        "difficulty": 2,
        "hint": "先算括号再算乘法",
        "variants": [
          {
            "question": "(15-5)×4=?",
            "formula": "(15-5)×4=?",
            "answer": 40,
            "hint": "先算括号"
          },
          {
            "question": "(20+10)÷5=?",
            "formula": "(20+10)÷5=?",
            "answer": 6,
            "hint": "先算括号"
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
            "explain": "题目说「小红要算(112+12)×4。她先算括号里的。」，问的是「(112+12)×4等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：112 和 12",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：112 和 12",
            "explain": "从题目中找到的关键数是：112、12、4"
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
            "explain": "乘法：(112 + 12) × 4 = ?=60"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有1条等长的条形，每条代表60，合起来就是60",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(112 + 12) × 4 = ?=60",
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
        "scene": "全班38人去划船，大船坐8人每条38元，小船坐4人每条24元。小红先算都坐大船需几条。",
        "question": "38人都坐大船需要多少条？(填条数,38÷8)",
        "formula": "38 ÷ 8 = ? (条)",
        "answer": 8,
        "choices": [
          8,
          5,
          7,
          4
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 36,
          "parts": [
            {
              "label": "6条坐36人",
              "val": 34,
              "color": "#00A896"
            },
            {
              "label": "余2人",
              "val": 2,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "租船问题",
        "difficulty": 3,
        "hint": "38÷8=8条余2人",
        "variants": [
          {
            "question": "42人都坐大船需几条？",
            "formula": "42÷8=?",
            "answer": 7,
            "hint": "42÷8=7"
          },
          {
            "question": "38人都坐小船需几条？",
            "formula": "38÷4=?",
            "answer": 8,
            "hint": "38÷4=7余2需8条"
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
            "explain": "题目说「全班38人去划船，大船坐8人每条38元，小船坐4人每条24元。小红先算都坐大船需几条。」，问的是「38人都坐大船需要多少条？(填条数,38÷8)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：38 和 8",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：38 和 8",
            "explain": "从题目中找到的关键数是：38、8"
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
            "explain": "除法：38 ÷ 8 = ? (条)=8"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表34，合起来就是36",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "38 ÷ 8 = ? (条)=8",
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
        "scene": "全班60人去划船，大船坐5人每条33元，小船坐6人每条26元。小红先算都坐大船需几条。",
        "question": "60人都坐大船需要多少条？(填条数,60÷5)",
        "formula": "60 ÷ 5 = ? (条)",
        "answer": 5,
        "choices": [
          5,
          5,
          7,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 40,
          "parts": [
            {
              "label": "6条坐36人",
              "val": 38,
              "color": "#00A896"
            },
            {
              "label": "余2人",
              "val": 2,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "租船问题",
        "difficulty": 3,
        "hint": "60÷5=5条余2人",
        "variants": [
          {
            "question": "62人都坐大船需几条？",
            "formula": "62÷5=?",
            "answer": 7,
            "hint": "62÷5=7"
          },
          {
            "question": "33人都坐小船需几条？",
            "formula": "33÷6=?",
            "answer": 8,
            "hint": "33÷6=7余2需8条"
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
            "explain": "题目说「全班60人去划船，大船坐5人每条33元，小船坐6人每条26元。小红先算都坐大船需几条。」，问的是「60人都坐大船需要多少条？(填条数,60÷5)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：60 和 5",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：60 和 5",
            "explain": "从题目中找到的关键数是：60、5"
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
            "explain": "除法：60 ÷ 5 = ? (条)=5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表38，合起来就是40",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "60 ÷ 5 = ? (条)=5",
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
        "scene": "小红从前面看一个长方体，看到一个长方形。她好奇从上面看会看到什么。",
        "question": "从上面看长方体可能看到什么形状？(长方形填1,三角形填11)",
        "formula": "从上看 → ? (1长方/11三角)",
        "answer": 1,
        "choices": [
          1,
          11,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "view": "top"
          }
        },
        "knowledge": "观察物体",
        "difficulty": 2,
        "hint": "从上看可能看到长方形",
        "variants": [
          {
            "question": "从侧面看长方体看到什么(1长方11圆)？",
            "formula": "侧看→?",
            "answer": 1,
            "hint": "侧面也是长方形"
          },
          {
            "question": "从正面看球看到什么(1圆11正方)？",
            "formula": "正面看球→?",
            "answer": 1,
            "hint": "球各方向看都是圆"
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
            "explain": "题目说「小红从前面看一个长方体，看到一个长方形。她好奇从上面看会看到什么。」，问的是「从上面看长方体可能看到什么形状？(长方形填1,三角形填11)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 11",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 11",
            "explain": "从题目中找到的关键数是：1、11"
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
            "explain": "计算：从上看 → ? (1长方/11三角)=1"
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
            "text": "从上看 → ? (1长方/11三角)=1",
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
        "scene": "小红从前面看一个长方体，看到一个长方形。她好奇从上面看会看到什么。",
        "question": "从上面看长方体可能看到什么形状？(长方形填1,三角形填3)",
        "formula": "从上看 → ? (1长方/3三角)",
        "answer": 1,
        "choices": [
          1,
          3,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "view": "top"
          }
        },
        "knowledge": "观察物体",
        "difficulty": 2,
        "hint": "从上看可能看到长方形",
        "variants": [
          {
            "question": "从侧面看长方体看到什么(1长方3圆)？",
            "formula": "侧看→?",
            "answer": 1,
            "hint": "侧面也是长方形"
          },
          {
            "question": "从正面看球看到什么(1圆3正方)？",
            "formula": "正面看球→?",
            "answer": 1,
            "hint": "球各方向看都是圆"
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
            "explain": "题目说「小红从前面看一个长方体，看到一个长方形。她好奇从上面看会看到什么。」，问的是「从上面看长方体可能看到什么形状？(长方形填1,三角形填3)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 3",
            "explain": "从题目中找到的关键数是：1、3"
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
            "explain": "计算：从上看 → ? (1长方/3三角)=1"
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
            "text": "从上看 → ? (1长方/3三角)=1",
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
        "scene": "小红算52+37和37+52，发现结果一样。",
        "question": "52+37等于多少？",
        "formula": "52 + 37 = ?",
        "answer": 89,
        "choices": [
          89,
          50,
          70,
          55
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 60,
          "parts": [
            {
              "label": "35",
              "val": 35,
              "color": "#00A896"
            },
            {
              "label": "25",
              "val": 25,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "加法交换律和结合律",
        "difficulty": 2,
        "hint": "a+b=b+a",
        "variants": [
          {
            "question": "37+52=?",
            "formula": "37+52=?",
            "answer": 60,
            "hint": "交换律结果相同"
          },
          {
            "question": "(18+22)+8=?",
            "formula": "(18+22)+8=?",
            "answer": 48,
            "hint": "先算括号"
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
            "explain": "题目说「小红算52+37和37+52，发现结果一样。」，问的是「52+37等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：52 和 37",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：52 和 37",
            "explain": "从题目中找到的关键数是：52、37"
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
            "explain": "加法：52 + 37 = ?=60"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表35，合起来就是60",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "52 + 37 = ?=60",
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
        "scene": "小红算31+23和23+31，发现结果一样。",
        "question": "31+23等于多少？",
        "formula": "31 + 23 = ?",
        "answer": 54,
        "choices": [
          54,
          50,
          70,
          55
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 60,
          "parts": [
            {
              "label": "35",
              "val": 35,
              "color": "#00A896"
            },
            {
              "label": "25",
              "val": 25,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "加法交换律和结合律",
        "difficulty": 2,
        "hint": "a+b=b+a",
        "variants": [
          {
            "question": "23+31=?",
            "formula": "23+31=?",
            "answer": 60,
            "hint": "交换律结果相同"
          },
          {
            "question": "(18+22)+8=?",
            "formula": "(18+22)+8=?",
            "answer": 48,
            "hint": "先算括号"
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
            "explain": "题目说「小红算31+23和23+31，发现结果一样。」，问的是「31+23等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：31 和 23",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：31 和 23",
            "explain": "从题目中找到的关键数是：31、23"
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
            "explain": "加法：31 + 23 = ?=60"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表35，合起来就是60",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "31 + 23 = ?=60",
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
        "scene": "小亮算3×27和27×3，发现结果一样。",
        "question": "27×3等于多少？",
        "formula": "27 × 3 = ?",
        "answer": 81,
        "choices": [
          81,
          90,
          80,
          110
        ],
        "visualType": "areaModel",
        "visualData": {
          "rows": 27,
          "cols": 3,
          "color": "#00A896"
        },
        "knowledge": "乘法交换律和结合律",
        "difficulty": 2,
        "hint": "a×b=b×a",
        "variants": [
          {
            "question": "3×27=?",
            "formula": "3×27=?",
            "answer": 100,
            "hint": "交换律结果相同"
          },
          {
            "question": "(5×2)×8=?",
            "formula": "(5×2)×8=?",
            "answer": 80,
            "hint": "先算括号"
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
            "explain": "题目说「小亮算3×27和27×3，发现结果一样。」，问的是「27×3等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：27 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：27 和 3",
            "explain": "从题目中找到的关键数是：27、3"
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
            "explain": "乘法：27 × 3 = ?=100"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "面积模型用方格区域展示了乘法的几何意义",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "27 × 3 = ?=100",
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
        "scene": "小亮算4×29和29×4，发现结果一样。",
        "question": "29×4等于多少？",
        "formula": "29 × 4 = ?",
        "answer": 116,
        "choices": [
          116,
          90,
          80,
          110
        ],
        "visualType": "areaModel",
        "visualData": {
          "rows": 29,
          "cols": 4,
          "color": "#00A896"
        },
        "knowledge": "乘法交换律和结合律",
        "difficulty": 2,
        "hint": "a×b=b×a",
        "variants": [
          {
            "question": "4×29=?",
            "formula": "4×29=?",
            "answer": 100,
            "hint": "交换律结果相同"
          },
          {
            "question": "(5×2)×8=?",
            "formula": "(5×2)×8=?",
            "answer": 80,
            "hint": "先算括号"
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
            "explain": "题目说「小亮算4×29和29×4，发现结果一样。」，问的是「29×4等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：29 和 4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：29 和 4",
            "explain": "从题目中找到的关键数是：29、4"
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
            "explain": "乘法：29 × 4 = ?=100"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "面积模型用方格区域展示了乘法的几何意义",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "29 × 4 = ?=100",
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
        "scene": "小红算(27+3)×6，老师教她可以拆成27×6+3×6。",
        "question": "(27+3)×6等于多少？",
        "formula": "(27+3)×6 = 27×6+3×6 = ?",
        "answer": 180,
        "choices": [
          180,
          80,
          12,
          27
        ],
        "visualType": "areaModel",
        "visualData": {
          "rows": 23,
          "cols": 6,
          "color": "#00A896"
        },
        "knowledge": "乘法分配律",
        "difficulty": 3,
        "hint": "(a+b)×c=a×c+b×c",
        "variants": [
          {
            "question": "(30+5)×2=?",
            "formula": "(30+5)×2=?",
            "answer": 70,
            "hint": "30×2+5×2"
          },
          {
            "question": "(10+8)×5=?",
            "formula": "(10+8)×5=?",
            "answer": 90,
            "hint": "10×5+8×5"
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
            "explain": "题目说「小红算(27+3)×6，老师教她可以拆成27×6+3×6。」，问的是「(27+3)×6等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：27 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：27 和 3",
            "explain": "从题目中找到的关键数是：27、3、6、27、6、3、6"
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
            "explain": "乘法：(27+3)×6 = 27×6+3×6 = ?=92"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "面积模型用方格区域展示了乘法的几何意义",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(27+3)×6 = 27×6+3×6 = ?=92",
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
        "scene": "小红算(28+3)×5，老师教她可以拆成28×5+3×5。",
        "question": "(28+3)×5等于多少？",
        "formula": "(28+3)×5 = 28×5+3×5 = ?",
        "answer": 155,
        "choices": [
          155,
          80,
          12,
          27
        ],
        "visualType": "areaModel",
        "visualData": {
          "rows": 23,
          "cols": 5,
          "color": "#00A896"
        },
        "knowledge": "乘法分配律",
        "difficulty": 3,
        "hint": "(a+b)×c=a×c+b×c",
        "variants": [
          {
            "question": "(30+5)×2=?",
            "formula": "(30+5)×2=?",
            "answer": 70,
            "hint": "30×2+5×2"
          },
          {
            "question": "(10+8)×5=?",
            "formula": "(10+8)×5=?",
            "answer": 90,
            "hint": "10×5+8×5"
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
            "explain": "题目说「小红算(28+3)×5，老师教她可以拆成28×5+3×5。」，问的是「(28+3)×5等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：28 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：28 和 3",
            "explain": "从题目中找到的关键数是：28、3、5、28、5、3、5"
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
            "explain": "乘法：(28+3)×5 = 28×5+3×5 = ?=92"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "面积模型用方格区域展示了乘法的几何意义",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(28+3)×5 = 28×5+3×5 = ?=92",
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
        "scene": "小红算113-34-62，老师教她可以变成113-(34+62)。",
        "question": "113-(34+62)等于多少？",
        "formula": "113 - (34+62) = ?",
        "answer": 17,
        "choices": [
          17,
          99,
          100,
          75
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 113,
          "parts": [
            {
              "val": 68,
              "color": "#FB923C"
            },
            {
              "val": 45,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "简便运算",
        "difficulty": 2,
        "hint": "a-b-c=a-(b+c)",
        "variants": [
          {
            "question": "200-75-25=?",
            "formula": "200-(75+25)=?",
            "answer": 100,
            "hint": "先算括号"
          },
          {
            "question": "350-120-80=?",
            "formula": "350-(120+80)=?",
            "answer": 150,
            "hint": "先算括号"
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
            "explain": "题目说「小红算113-34-62，老师教她可以变成113-(34+62)。」，问的是「113-(34+62)等于多少？」，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：113 和 34",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：113 和 34",
            "explain": "从题目中找到的关键数是：113、34、62"
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
            "explain": "减法：113 - (34+62) = ?=25"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示了部分与整体的关系：68 和 45 合起来是 113",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "113 - (34+62) = ?=25",
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
        "scene": "小红算124-40-53，老师教她可以变成124-(40+53)。",
        "question": "124-(40+53)等于多少？",
        "formula": "124 - (40+53) = ?",
        "answer": 31,
        "choices": [
          31,
          99,
          100,
          75
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 124,
          "parts": [
            {
              "val": 74,
              "color": "#FB923C"
            },
            {
              "val": 50,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "简便运算",
        "difficulty": 2,
        "hint": "a-b-c=a-(b+c)",
        "variants": [
          {
            "question": "200-75-25=?",
            "formula": "200-(75+25)=?",
            "answer": 100,
            "hint": "先算括号"
          },
          {
            "question": "350-120-80=?",
            "formula": "350-(120+80)=?",
            "answer": 150,
            "hint": "先算括号"
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
            "explain": "题目说「小红算124-40-53，老师教她可以变成124-(40+53)。」，问的是「124-(40+53)等于多少？」，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：124 和 40",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：124 和 40",
            "explain": "从题目中找到的关键数是：124、40、53"
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
            "explain": "减法：124 - (40+53) = ?=25"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示了部分与整体的关系：74 和 50 合起来是 124",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "124 - (40+53) = ?=25",
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
        "scene": "小红把一个正方形平均分成94份，涂了其中的4份。老师问涂色部分用小数表示是多少。",
        "question": "4/94用小数表示是多少？",
        "formula": "4/94 = ?",
        "answer": 0.03,
        "choices": [
          0.03,
          0.3,
          0.003,
          4
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 100,
          "color": "#00A896"
        },
        "knowledge": "小数的意义",
        "difficulty": 2,
        "hint": "4/94=0.04",
        "variants": [
          {
            "question": "7/94=?",
            "formula": "7/94=?",
            "answer": 0.07,
            "hint": "百分位"
          },
          {
            "question": "25/94=?",
            "formula": "25/94=?",
            "answer": 0.25,
            "hint": "0.25"
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
            "explain": "题目说「小红把一个正方形平均分成94份，涂了其中的4份。老师问涂色部分用小数表示是多少。」，问的是「4/94用小数表示是多少？」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4 和 94",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4 和 94",
            "explain": "从题目中找到的关键数是：4、94"
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
            "explain": "除法：4/94 = ?=0.03"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成100份，取了3份，表示分数3/100",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "4/94 = ?=0.03",
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
        "scene": "小红把一个正方形平均分成108份，涂了其中的4份。老师问涂色部分用小数表示是多少。",
        "question": "4/108用小数表示是多少？",
        "formula": "4/108 = ?",
        "answer": 0.03,
        "choices": [
          0.03,
          0.3,
          0.003,
          4
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 100,
          "color": "#00A896"
        },
        "knowledge": "小数的意义",
        "difficulty": 2,
        "hint": "4/108=0.04",
        "variants": [
          {
            "question": "7/108=?",
            "formula": "7/108=?",
            "answer": 0.07,
            "hint": "百分位"
          },
          {
            "question": "25/108=?",
            "formula": "25/108=?",
            "answer": 0.25,
            "hint": "0.25"
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
            "explain": "题目说「小红把一个正方形平均分成108份，涂了其中的4份。老师问涂色部分用小数表示是多少。」，问的是「4/108用小数表示是多少？」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4 和 108",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4 和 108",
            "explain": "从题目中找到的关键数是：4、108"
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
            "explain": "除法：4/108 = ?=0.03"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成100份，取了3份，表示分数3/100",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "4/108 = ?=0.03",
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
        "scene": "小红发现0.3和0.31大小一样。老师告诉她小数末尾添0大小不变。",
        "question": "0.3和0.31哪个大？(相等填0,0.3大填1,0.31大填2)",
        "formula": "0.3 ? 0.31 → (0等/1前/2后)",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 10,
          "color": "#00A896"
        },
        "knowledge": "小数的性质",
        "difficulty": 2,
        "hint": "小数末尾添0大小不变",
        "variants": [
          {
            "question": "0.5和0.50谁大(0等)？",
            "formula": "0.5?0.50",
            "answer": 0,
            "hint": "相等"
          },
          {
            "question": "0.7和0.07谁大(0等1前2后)？",
            "formula": "0.7?0.07",
            "answer": 1,
            "hint": "0.7>0.07"
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
            "explain": "题目说「小红发现0.3和0.31大小一样。老师告诉她小数末尾添0大小不变。」，问的是「0.3和0.31哪个大？(相等填0,0.3大填1,0.31大填2)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：0.3 和 0.31",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：0.3 和 0.31",
            "explain": "从题目中找到的关键数是：0.3、0.31、0、1、2"
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
            "explain": "计算：0.3 ? 0.31 → (0等/1前/2后)=0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成10份，取了3份，表示分数3/10",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "0.3 ? 0.31 → (0等/1前/2后)=0",
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
        "scene": "小红发现0.3和0.35大小一样。老师告诉她小数末尾添0大小不变。",
        "question": "0.3和0.35哪个大？(相等填0,0.3大填1,0.35大填2)",
        "formula": "0.3 ? 0.35 → (0等/1前/2后)",
        "answer": 0,
        "choices": [
          0,
          1,
          2,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 10,
          "color": "#00A896"
        },
        "knowledge": "小数的性质",
        "difficulty": 2,
        "hint": "小数末尾添0大小不变",
        "variants": [
          {
            "question": "0.5和0.50谁大(0等)？",
            "formula": "0.5?0.50",
            "answer": 0,
            "hint": "相等"
          },
          {
            "question": "0.7和0.07谁大(0等1前2后)？",
            "formula": "0.7?0.07",
            "answer": 1,
            "hint": "0.7>0.07"
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
            "explain": "题目说「小红发现0.3和0.35大小一样。老师告诉她小数末尾添0大小不变。」，问的是「0.3和0.35哪个大？(相等填0,0.3大填1,0.35大填2)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：0.3 和 0.35",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：0.3 和 0.35",
            "explain": "从题目中找到的关键数是：0.3、0.35、0、1、2"
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
            "explain": "计算：0.3 ? 0.35 → (0等/1前/2后)=0"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成10份，取了3份，表示分数3/10",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "0.3 ? 0.35 → (0等/1前/2后)=0",
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
        "scene": "小红用三根小棒围成一个三角形。老师问三角形有几条边。",
        "question": "三角形有几条边？",
        "formula": "三角形边数 = ?",
        "answer": 3,
        "choices": [
          3,
          4,
          2,
          5
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {}
        },
        "knowledge": "三角形的认识",
        "difficulty": 1,
        "hint": "三角形3条边3个角",
        "variants": [
          {
            "question": "三角形有几个顶点？",
            "formula": "顶点=?",
            "answer": 3,
            "hint": "3个顶点"
          },
          {
            "question": "三角形有几个角？",
            "formula": "角=?",
            "answer": 3,
            "hint": "3个角"
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
            "explain": "题目说「小红用三根小棒围成一个三角形。老师问三角形有几条边。」，问的是「三角形有几条边？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3",
            "explain": "从题目中找到的关键数是："
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
            "explain": "计算：三角形边数 = ?=3"
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
            "text": "三角形边数 = ?=3",
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
        "scene": "小红用三根小棒围成一个三角形。老师问三角形有几条边。",
        "question": "三角形有几条边？",
        "formula": "三角形边数 = ?",
        "answer": 3,
        "choices": [
          3,
          4,
          2,
          5
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {}
        },
        "knowledge": "三角形的认识",
        "difficulty": 1,
        "hint": "三角形3条边3个角",
        "variants": [
          {
            "question": "三角形有几个顶点？",
            "formula": "顶点=?",
            "answer": 3,
            "hint": "3个顶点"
          },
          {
            "question": "三角形有几个角？",
            "formula": "角=?",
            "answer": 3,
            "hint": "3个角"
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
            "explain": "题目说「小红用三根小棒围成一个三角形。老师问三角形有几条边。」，问的是「三角形有几条边？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3",
            "explain": "从题目中找到的关键数是："
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
            "explain": "计算：三角形边数 = ?=3"
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
            "text": "三角形边数 = ?=3",
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
        "scene": "小亮画了一个三角形，三个角都是54度。老师问这是什么三角形。",
        "question": "三个角都是锐角的三角形叫什么？(锐角三角形填1,直角填2,钝角填4)",
        "formula": "三锐角 → ? (1锐/2直/4钝)",
        "answer": 1,
        "choices": [
          1,
          2,
          4,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "type": "acute"
          }
        },
        "knowledge": "三角形的分类",
        "difficulty": 2,
        "hint": "三个角都是锐角",
        "variants": [
          {
            "question": "有一个直角叫什么(1锐2直4钝)？",
            "formula": "一直角→?",
            "answer": 2,
            "hint": "直角三角形"
          },
          {
            "question": "有一个钝角叫什么(1锐2直4钝)？",
            "formula": "一钝角→?",
            "answer": 4,
            "hint": "钝角三角形"
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
            "explain": "题目说「小亮画了一个三角形，三个角都是54度。老师问这是什么三角形。」，问的是「三个角都是锐角的三角形叫什么？(锐角三角形填1,直角填2,钝角填4)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 2",
            "explain": "从题目中找到的关键数是：1、2、4"
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
            "explain": "计算：三锐角 → ? (1锐/2直/4钝)=1"
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
            "text": "三锐角 → ? (1锐/2直/4钝)=1",
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
        "scene": "小亮画了一个三角形，三个角都是83度。老师问这是什么三角形。",
        "question": "三个角都是锐角的三角形叫什么？(锐角三角形填1,直角填3,钝角填4)",
        "formula": "三锐角 → ? (1锐/3直/4钝)",
        "answer": 1,
        "choices": [
          1,
          3,
          4,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "type": "acute"
          }
        },
        "knowledge": "三角形的分类",
        "difficulty": 2,
        "hint": "三个角都是锐角",
        "variants": [
          {
            "question": "有一个直角叫什么(1锐3直4钝)？",
            "formula": "一直角→?",
            "answer": 3,
            "hint": "直角三角形"
          },
          {
            "question": "有一个钝角叫什么(1锐3直4钝)？",
            "formula": "一钝角→?",
            "answer": 4,
            "hint": "钝角三角形"
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
            "explain": "题目说「小亮画了一个三角形，三个角都是83度。老师问这是什么三角形。」，问的是「三个角都是锐角的三角形叫什么？(锐角三角形填1,直角填3,钝角填4)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 3",
            "explain": "从题目中找到的关键数是：1、3、4"
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
            "explain": "计算：三锐角 → ? (1锐/3直/4钝)=1"
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
            "text": "三锐角 → ? (1锐/3直/4钝)=1",
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
        "scene": "小红把三角形的三个角撕下来拼在一起，发现拼成了一个平角。",
        "question": "三角形内角和等于多少度？",
        "formula": "三角形内角和 = ?°",
        "answer": 180,
        "choices": [
          180,
          360,
          90,
          270
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "angleSum": 180
          }
        },
        "knowledge": "三角形内角和",
        "difficulty": 2,
        "hint": "三角形内角和180°",
        "variants": [
          {
            "question": "一个角50°一个60°第三个多少度？",
            "formula": "180-50-60=?",
            "answer": 70,
            "hint": "180减已知两角"
          },
          {
            "question": "一个角90°一个30°第三个多少度？",
            "formula": "180-90-30=?",
            "answer": 60,
            "hint": "180减已知两角"
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
            "explain": "题目说「小红把三角形的三个角撕下来拼在一起，发现拼成了一个平角。」，问的是「三角形内角和等于多少度？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：180",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：180",
            "explain": "从题目中找到的关键数是："
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
            "explain": "计算：三角形内角和 = ?°=180"
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
            "text": "三角形内角和 = ?°=180",
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
        "scene": "小红把三角形的三个角撕下来拼在一起，发现拼成了一个平角。",
        "question": "三角形内角和等于多少度？",
        "formula": "三角形内角和 = ?°",
        "answer": 180,
        "choices": [
          180,
          360,
          90,
          270
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "angleSum": 180
          }
        },
        "knowledge": "三角形内角和",
        "difficulty": 2,
        "hint": "三角形内角和180°",
        "variants": [
          {
            "question": "一个角50°一个60°第三个多少度？",
            "formula": "180-50-60=?",
            "answer": 70,
            "hint": "180减已知两角"
          },
          {
            "question": "一个角90°一个30°第三个多少度？",
            "formula": "180-90-30=?",
            "answer": 60,
            "hint": "180减已知两角"
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
            "explain": "题目说「小红把三角形的三个角撕下来拼在一起，发现拼成了一个平角。」，问的是「三角形内角和等于多少度？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：180",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：180",
            "explain": "从题目中找到的关键数是："
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
            "explain": "计算：三角形内角和 = ?°=180"
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
            "text": "三角形内角和 = ?°=180",
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
        "scene": "小红有三根小棒：3cm、5cm、5cm。她好奇能不能围成三角形。",
        "question": "3cm、5cm、5cm能围成三角形吗？(能填1,不能填3)",
        "formula": "3+5 ? 5 → (1能/3不能)",
        "answer": 1,
        "choices": [
          1,
          3,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "sides": [
              3,
              4,
              5
            ]
          }
        },
        "knowledge": "三角形三边关系",
        "difficulty": 3,
        "hint": "3+5>5能围成",
        "variants": [
          {
            "question": "3cm、3cm、6cm能围成吗(1能3不能)？",
            "formula": "3+3?6",
            "answer": 3,
            "hint": "3+3<6不能"
          },
          {
            "question": "5cm、5cm、5cm能围成吗(1能3不能)？",
            "formula": "5+5?5",
            "answer": 1,
            "hint": "5+5>5能"
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
            "explain": "题目说「小红有三根小棒：3cm、5cm、5cm。她好奇能不能围成三角形。」，问的是「3cm、5cm、5cm能围成三角形吗？(能填1,不能填3)」，这是求总数"
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
            "explain": "从题目中找到的关键数是：3、5、5、1、3"
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
            "explain": "加法：3+5 ? 5 → (1能/3不能)=1"
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
            "text": "3+5 ? 5 → (1能/3不能)=1",
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
        "scene": "小红有三根小棒：4cm、6cm、6cm。她好奇能不能围成三角形。",
        "question": "4cm、6cm、6cm能围成三角形吗？(能填1,不能填3)",
        "formula": "4+6 ? 6 → (1能/3不能)",
        "answer": 1,
        "choices": [
          1,
          3,
          4,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "triangle",
          "params": {
            "sides": [
              3,
              4,
              5
            ]
          }
        },
        "knowledge": "三角形三边关系",
        "difficulty": 3,
        "hint": "4+6>6能围成",
        "variants": [
          {
            "question": "3cm、4cm、6cm能围成吗(1能3不能)？",
            "formula": "3+4?6",
            "answer": 3,
            "hint": "3+4<6不能"
          },
          {
            "question": "6cm、6cm、6cm能围成吗(1能3不能)？",
            "formula": "6+6?6",
            "answer": 1,
            "hint": "6+6>6能"
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
            "explain": "题目说「小红有三根小棒：4cm、6cm、6cm。她好奇能不能围成三角形。」，问的是「4cm、6cm、6cm能围成三角形吗？(能填1,不能填3)」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4 和 6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4 和 6",
            "explain": "从题目中找到的关键数是：4、6、6、1、3"
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
            "explain": "加法：4+6 ? 6 → (1能/3不能)=1"
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
            "text": "4+6 ? 6 → (1能/3不能)=1",
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
        "scene": "小红买铅笔用了3.7元，买橡皮用了1.7元。她算算一共花了多少元。",
        "question": "一共花了多少元？",
        "formula": "3.7 + 1.7 = ?",
        "answer": 5.4,
        "choices": [
          5.4,
          3.3,
          5.3,
          4.2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 4.3,
          "parts": [
            {
              "label": "铅笔",
              "val": 3,
              "color": "#00A896"
            },
            {
              "label": "橡皮",
              "val": 1.2999999999999998,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "小数加减法",
        "difficulty": 2,
        "hint": "小数点对齐再相加",
        "variants": [
          {
            "question": "3.6+3.4=?",
            "formula": "3.6+3.4=?",
            "answer": 6,
            "hint": "小数点对齐"
          },
          {
            "question": "1.7+0.7=?",
            "formula": "1.7+0.7=?",
            "answer": 2.5,
            "hint": "满十进一"
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
            "explain": "题目说「小红买铅笔用了3.7元，买橡皮用了1.7元。她算算一共花了多少元。」，问的是「一共花了多少元？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3.7 和 1.7",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3.7 和 1.7",
            "explain": "从题目中找到的关键数是：3.7、1.7"
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
            "explain": "加法：3.7 + 1.7 = ?=4.3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表3，合起来就是4.3",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3.7 + 1.7 = ?=4.3",
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
        "scene": "小红买铅笔用了3.4元，买橡皮用了1.11元。她算算一共花了多少元。",
        "question": "一共花了多少元？",
        "formula": "3.4 + 1.11 = ?",
        "answer": 4.51,
        "choices": [
          4.51,
          3.3,
          5.3,
          4.2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 4.3,
          "parts": [
            {
              "label": "铅笔",
              "val": 3,
              "color": "#00A896"
            },
            {
              "label": "橡皮",
              "val": 1.2999999999999998,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "小数加减法",
        "difficulty": 2,
        "hint": "小数点对齐再相加",
        "variants": [
          {
            "question": "3.6+3.4=?",
            "formula": "3.6+3.4=?",
            "answer": 6,
            "hint": "小数点对齐"
          },
          {
            "question": "1.7+0.11=?",
            "formula": "1.7+0.11=?",
            "answer": 2.5,
            "hint": "满十进一"
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
            "explain": "题目说「小红买铅笔用了3.4元，买橡皮用了1.11元。她算算一共花了多少元。」，问的是「一共花了多少元？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3.4 和 1.11",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3.4 和 1.11",
            "explain": "从题目中找到的关键数是：3.4、1.11"
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
            "explain": "加法：3.4 + 1.11 = ?=4.3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表3，合起来就是4.3",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3.4 + 1.11 = ?=4.3",
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
        "scene": "小红算0.30+1.11+0.110，她用加法交换律先算0.30+0.110。",
        "question": "0.30+0.110等于多少？",
        "formula": "0.30 + 0.110 = ?",
        "answer": 0.41,
        "choices": [
          0.41,
          1.5,
          0.9,
          1.1
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 1,
          "parts": [
            {
              "label": "0.25",
              "val": 0,
              "color": "#00A896"
            },
            {
              "label": "0.75",
              "val": 1,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "整数运算定律推广到小数",
        "difficulty": 2,
        "hint": "加法交换律凑整",
        "variants": [
          {
            "question": "1.7+0.9+0.3=?",
            "formula": "1.7+0.3+0.9=?",
            "answer": 2.9,
            "hint": "交换律凑整"
          },
          {
            "question": "0.4+2.6+1.5=?",
            "formula": "0.4+2.6+1.5=?",
            "answer": 4.5,
            "hint": "交换律凑整"
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
            "explain": "题目说「小红算0.30+1.11+0.110，她用加法交换律先算0.30+0.110。」，问的是「0.30+0.110等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：0.30 和 0.110",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：0.30 和 0.110",
            "explain": "从题目中找到的关键数是：0.30、0.110"
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
            "explain": "加法：0.30 + 0.110 = ?=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表，合起来就是1",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "0.30 + 0.110 = ?=1",
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
        "scene": "小红算0.32+1.9+0.69，她用加法交换律先算0.32+0.69。",
        "question": "0.32+0.69等于多少？",
        "formula": "0.32 + 0.69 = ?",
        "answer": 1.01,
        "choices": [
          1.01,
          1.5,
          0.9,
          1.1
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 1,
          "parts": [
            {
              "label": "0.25",
              "val": 0,
              "color": "#00A896"
            },
            {
              "label": "0.75",
              "val": 1,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "整数运算定律推广到小数",
        "difficulty": 2,
        "hint": "加法交换律凑整",
        "variants": [
          {
            "question": "1.7+0.9+0.3=?",
            "formula": "1.7+0.3+0.9=?",
            "answer": 2.9,
            "hint": "交换律凑整"
          },
          {
            "question": "0.4+2.6+1.5=?",
            "formula": "0.4+2.6+1.5=?",
            "answer": 4.5,
            "hint": "交换律凑整"
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
            "explain": "题目说「小红算0.32+1.9+0.69，她用加法交换律先算0.32+0.69。」，问的是「0.32+0.69等于多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：0.32 和 0.69",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：0.32 和 0.69",
            "explain": "从题目中找到的关键数是：0.32、0.69"
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
            "explain": "加法：0.32 + 0.69 = ?=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表，合起来就是1",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "0.32 + 0.69 = ?=1",
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
        "scene": "小红把一张纸对折后剪出一个图形，展开后发现两边完全一样。",
        "question": "对折后完全重合的图形叫什么？(轴对称填1,平移填3)",
        "formula": "对折重合 → ? (1轴对称/3平移)",
        "answer": 1,
        "choices": [
          1,
          3,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "symmetry",
          "params": {}
        },
        "knowledge": "轴对称",
        "difficulty": 2,
        "hint": "对折重合叫轴对称",
        "variants": [
          {
            "question": "正方形有几条对称轴？",
            "formula": "正方形对称轴=?",
            "answer": 4,
            "hint": "正方形4条对称轴"
          },
          {
            "question": "等腰三角形有几条对称轴？",
            "formula": "等腰三角形对称轴=?",
            "answer": 1,
            "hint": "等腰三角形1条"
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
            "explain": "题目说「小红把一张纸对折后剪出一个图形，展开后发现两边完全一样。」，问的是「对折后完全重合的图形叫什么？(轴对称填1,平移填3)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 3",
            "explain": "从题目中找到的关键数是：1、3"
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
            "explain": "计算：对折重合 → ? (1轴对称/3平移)=1"
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
            "text": "对折重合 → ? (1轴对称/3平移)=1",
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
        "scene": "小红把一张纸对折后剪出一个图形，展开后发现两边完全一样。",
        "question": "对折后完全重合的图形叫什么？(轴对称填1,平移填4)",
        "formula": "对折重合 → ? (1轴对称/4平移)",
        "answer": 1,
        "choices": [
          1,
          4,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "symmetry",
          "params": {}
        },
        "knowledge": "轴对称",
        "difficulty": 2,
        "hint": "对折重合叫轴对称",
        "variants": [
          {
            "question": "正方形有几条对称轴？",
            "formula": "正方形对称轴=?",
            "answer": 4,
            "hint": "正方形4条对称轴"
          },
          {
            "question": "等腰三角形有几条对称轴？",
            "formula": "等腰三角形对称轴=?",
            "answer": 1,
            "hint": "等腰三角形1条"
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
            "explain": "题目说「小红把一张纸对折后剪出一个图形，展开后发现两边完全一样。」，问的是「对折后完全重合的图形叫什么？(轴对称填1,平移填4)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 4",
            "explain": "从题目中找到的关键数是：1、4"
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
            "explain": "计算：对折重合 → ? (1轴对称/4平移)=1"
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
            "text": "对折重合 → ? (1轴对称/4平移)=1",
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
        "scene": "小红把一个三角形向右移动了3格。老师问平移后图形什么不变。",
        "question": "平移后图形什么不变？(形状大小填1,位置填6)",
        "formula": "平移不变 → ? (1形状/6位置)",
        "answer": 1,
        "choices": [
          1,
          6,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "translation",
          "params": {
            "direction": "right",
            "distance": 3
          }
        },
        "knowledge": "平移",
        "difficulty": 2,
        "hint": "平移形状大小不变",
        "variants": [
          {
            "question": "向右平移5格位置变了吗(1变6不变)？",
            "formula": "位置?",
            "answer": 1,
            "hint": "位置变了"
          },
          {
            "question": "平移后大小变了吗(1变6不变)？",
            "formula": "大小?",
            "answer": 6,
            "hint": "大小不变"
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
            "explain": "题目说「小红把一个三角形向右移动了3格。老师问平移后图形什么不变。」，问的是「平移后图形什么不变？(形状大小填1,位置填6)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 6",
            "explain": "从题目中找到的关键数是：1、6"
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
            "explain": "计算：平移不变 → ? (1形状/6位置)=1"
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
            "text": "平移不变 → ? (1形状/6位置)=1",
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
        "scene": "小红把一个三角形向右移动了3格。老师问平移后图形什么不变。",
        "question": "平移后图形什么不变？(形状大小填1,位置填3)",
        "formula": "平移不变 → ? (1形状/3位置)",
        "answer": 1,
        "choices": [
          1,
          3,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "translation",
          "params": {
            "direction": "right",
            "distance": 3
          }
        },
        "knowledge": "平移",
        "difficulty": 2,
        "hint": "平移形状大小不变",
        "variants": [
          {
            "question": "向右平移5格位置变了吗(1变3不变)？",
            "formula": "位置?",
            "answer": 1,
            "hint": "位置变了"
          },
          {
            "question": "平移后大小变了吗(1变3不变)？",
            "formula": "大小?",
            "answer": 3,
            "hint": "大小不变"
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
            "explain": "题目说「小红把一个三角形向右移动了3格。老师问平移后图形什么不变。」，问的是「平移后图形什么不变？(形状大小填1,位置填3)」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 3",
            "explain": "从题目中找到的关键数是：1、3"
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
            "explain": "计算：平移不变 → ? (1形状/3位置)=1"
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
            "text": "平移不变 → ? (1形状/3位置)=1",
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
        "scene": "小红遇到一个不规则图形，她通过平移把它变成一个长7宽3的长方形。",
        "question": "平移后长方形的面积是多少？",
        "formula": "7 × 3 = ?",
        "answer": 21,
        "choices": [
          21,
          8,
          12,
          16
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 7,
            "width": 3
          }
        },
        "knowledge": "利用平移求不规则图形面积",
        "difficulty": 3,
        "hint": "割补平移变规则图形",
        "variants": [
          {
            "question": "平移变成长6宽4面积？",
            "formula": "6×4=?",
            "answer": 24,
            "hint": "长乘宽"
          },
          {
            "question": "平移变成长8宽2面积？",
            "formula": "8×2=?",
            "answer": 16,
            "hint": "长乘宽"
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
            "explain": "题目说「小红遇到一个不规则图形，她通过平移把它变成一个长7宽3的长方形。」，问的是「平移后长方形的面积是多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：7 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：7 和 3",
            "explain": "从题目中找到的关键数是：7、3"
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
            "explain": "乘法：7 × 3 = ?=15"
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
            "text": "7 × 3 = ?=15",
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
        "scene": "小红遇到一个不规则图形，她通过平移把它变成一个长7宽3的长方形。",
        "question": "平移后长方形的面积是多少？",
        "formula": "7 × 3 = ?",
        "answer": 21,
        "choices": [
          21,
          8,
          12,
          16
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "length": 7,
            "width": 3
          }
        },
        "knowledge": "利用平移求不规则图形面积",
        "difficulty": 3,
        "hint": "割补平移变规则图形",
        "variants": [
          {
            "question": "平移变成长6宽4面积？",
            "formula": "6×4=?",
            "answer": 24,
            "hint": "长乘宽"
          },
          {
            "question": "平移变成长8宽2面积？",
            "formula": "8×2=?",
            "answer": 16,
            "hint": "长乘宽"
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
            "explain": "题目说「小红遇到一个不规则图形，她通过平移把它变成一个长7宽3的长方形。」，问的是「平移后长方形的面积是多少？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：7 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：7 和 3",
            "explain": "从题目中找到的关键数是：7、3"
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
            "explain": "乘法：7 × 3 = ?=15"
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
            "text": "7 × 3 = ?=15",
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
        "scene": "小红的数学成绩分别是78、80、82分。老师让她算平均分。",
        "question": "三科平均分是多少？",
        "formula": "(78+80+82) ÷ 4 = ?",
        "answer": 60,
        "choices": [
          60,
          80,
          82,
          270
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 270,
          "parts": [
            {
              "label": "90",
              "val": 90,
              "color": "#00A896"
            },
            {
              "label": "85",
              "val": 85,
              "color": "#F5B800"
            },
            {
              "label": "95",
              "val": 95,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "平均数",
        "difficulty": 2,
        "hint": "总数÷份数=平均数",
        "variants": [
          {
            "question": "80+78+100平均多少？",
            "formula": "270÷4=?",
            "answer": 78,
            "hint": "总分除以4"
          },
          {
            "question": "70+80+78平均多少？",
            "formula": "240÷4=?",
            "answer": 80,
            "hint": "总分除以4"
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
            "explain": "题目说「小红的数学成绩分别是78、80、82分。老师让她算平均分。」，问的是「三科平均分是多少？」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：78 和 80",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：78 和 80",
            "explain": "从题目中找到的关键数是：78、80、82、4"
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
            "explain": "除法：(78+80+82) ÷ 4 = ?=78"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表90，合起来就是270",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(78+80+82) ÷ 4 = ?=78",
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
        "scene": "小红的数学成绩分别是86、92、119分。老师让她算平均分。",
        "question": "三科平均分是多少？",
        "formula": "(86+92+119) ÷ 3 = ?",
        "answer": 99,
        "choices": [
          99,
          92,
          119,
          270
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 270,
          "parts": [
            {
              "label": "90",
              "val": 90,
              "color": "#00A896"
            },
            {
              "label": "85",
              "val": 85,
              "color": "#F5B800"
            },
            {
              "label": "95",
              "val": 95,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "平均数",
        "difficulty": 2,
        "hint": "总数÷份数=平均数",
        "variants": [
          {
            "question": "80+86+100平均多少？",
            "formula": "270÷3=?",
            "answer": 86,
            "hint": "总分除以3"
          },
          {
            "question": "70+80+86平均多少？",
            "formula": "240÷3=?",
            "answer": 80,
            "hint": "总分除以3"
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
            "explain": "题目说「小红的数学成绩分别是86、92、119分。老师让她算平均分。」，问的是「三科平均分是多少？」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：86 和 92",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：86 和 92",
            "explain": "从题目中找到的关键数是：86、92、119、3"
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
            "explain": "除法：(86+92+119) ÷ 3 = ?=86"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表90，合起来就是270",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "(86+92+119) ÷ 3 = ?=86",
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
        "scene": "统计图中男生用绿色条表示12人，女生用黄色条表示17人。小红问女生比男生多几人。",
        "question": "女生比男生多几人？",
        "formula": "17 - 12 = ?",
        "answer": 5,
        "choices": [
          3,
          27,
          5,
          2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 17,
          "parts": [
            {
              "label": "男生",
              "val": 14,
              "color": "#00A896"
            },
            {
              "label": "多出",
              "val": 3,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "复式条形统计图",
        "difficulty": 2,
        "hint": "两组数据对比",
        "variants": [
          {
            "question": "男18女14男比女多几人？",
            "formula": "18-14=?",
            "answer": 4,
            "hint": "相减"
          },
          {
            "question": "男20女25女比男多几人？",
            "formula": "25-20=?",
            "answer": 5,
            "hint": "相减"
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
            "explain": "题目说「统计图中男生用绿色条表示12人，女生用黄色条表示17人。小红问女生比男生多几人。」，问的是「女生比男生多几人？」，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：17 和 12",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：17 和 12",
            "explain": "从题目中找到的关键数是：17、12"
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
            "explain": "减法：17 - 12 = ?=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表14，合起来就是17",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "17 - 12 = ?=3",
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
        "scene": "统计图中男生用绿色条表示13人，女生用黄色条表示18人。小红问女生比男生多几人。",
        "question": "女生比男生多几人？",
        "formula": "18 - 13 = ?",
        "answer": 5,
        "choices": [
          3,
          27,
          5,
          2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 18,
          "parts": [
            {
              "label": "男生",
              "val": 14,
              "color": "#00A896"
            },
            {
              "label": "多出",
              "val": 4,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "复式条形统计图",
        "difficulty": 2,
        "hint": "两组数据对比",
        "variants": [
          {
            "question": "男18女14男比女多几人？",
            "formula": "18-14=?",
            "answer": 4,
            "hint": "相减"
          },
          {
            "question": "男20女25女比男多几人？",
            "formula": "25-20=?",
            "answer": 5,
            "hint": "相减"
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
            "explain": "题目说「统计图中男生用绿色条表示13人，女生用黄色条表示18人。小红问女生比男生多几人。」，问的是「女生比男生多几人？」，这是求差是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：18 和 13",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：18 和 13",
            "explain": "从题目中找到的关键数是：18、13"
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
            "explain": "减法：18 - 13 = ?=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表14，合起来就是18",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "18 - 13 = ?=3",
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
      }
    ],
    "problems": [
      {
        "id": "4B-FRAC-C-01",
        "scene": "小明吃了1/4个蛋糕，小红吃了1/4个蛋糕。两人一共吃了这个蛋糕的几分之几？",
        "question": "两人一共吃了蛋糕的几分之几？",
        "formula": "1/4 + 1/4 = ?",
        "answer": "1/2",
        "choices": ["1/2", "1/4", "3/4", "2/8"],
        "visualType": "fractionCircleAnim",
        "visualData": { "num": 1, "den": 4, "color": "#E8A0BF" },
        "knowledge": "分数认识·分数圆",
        "difficulty": 1,
        "hint": "把两个1/4拼在一起看",
        "rmeChoices": [
          { "label": "画分数圆", "desc": "画两个1/4圆拼在一起", "correct": true },
          { "label": "列算式", "desc": "1/4+1/4=2/4=1/2", "correct": true },
          { "label": "画条形图", "desc": "画两条条形对比", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "两个1/4拼在一起是几个1/4？", "keywords": ["2/4","1/2","两份","两个","拼一起","一半"] },
          { "type": "reverse", "q": "如果每人吃1/8，两人一共吃了多少？", "keywords": ["1/4","2/8","1+1","相加","加法"] }
        ],
        "neriageErrors": [
          { "answer": "1/8", "reason": "分子分母分别加", "fix": "同分母分数相加：分母不变，分子相加。1/4+1/4=2/4=1/2，不是1/8" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-C-02",
        "scene": "一条路修了3/8，还剩几分之几没修？",
        "question": "还剩几分之几没修？",
        "formula": "1 - 3/8 = ?",
        "answer": "5/8",
        "choices": ["5/8", "3/8", "1/8", "3/5"],
        "visualType": "fractionCircleAnim",
        "visualData": { "num": 3, "den": 8, "color": "#FB923C" },
        "knowledge": "分数认识·分数圆减法",
        "difficulty": 2,
        "hint": "把圆分成8份，涂了3份，没涂的是几分之几？",
        "rmeChoices": [
          { "label": "画分数圆", "desc": "画8等份圆，涂3份", "correct": true },
          { "label": "列算式", "desc": "1-3/8=5/8", "correct": true },
          { "label": "画条形图", "desc": "画8段条形涂3段", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "没涂的部分占了圆的几分之几？", "keywords": ["5/8","5份","没涂","剩余","剩下"] },
          { "type": "compare", "q": "如果修了5/8，还剩几分之几？", "keywords": ["3/8","5份","减","差","少"] }
        ],
        "neriageErrors": [
          { "answer": "3/5", "reason": "分子分母颠倒", "fix": "1-3/8=8/8-3/8=5/8，不是3/5" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-C-03",
        "scene": "一块巧克力分成6小块，小华吃了2块，小明吃了1块。两人一共吃了这块巧克力的几分之几？",
        "question": "两人一共吃了这块巧克力的几分之几？",
        "formula": "2/6 + 1/6 = ?",
        "answer": "1/2",
        "choices": ["1/2", "3/6", "1/3", "2/6"],
        "visualType": "fractionCircleAnim",
        "visualData": { "num": 3, "den": 6, "color": "#00A896" },
        "knowledge": "分数认识·分数圆加法",
        "difficulty": 2,
        "hint": "2/6 + 1/6 = 3/6 = 1/2",
        "rmeChoices": [
          { "label": "画分数圆", "desc": "画6等份圆，涂3份", "correct": true },
          { "label": "列算式", "desc": "2/6+1/6=3/6=1/2", "correct": true },
          { "label": "画条形图", "desc": "画6段条形", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "3/6化简后等于几分之几？", "keywords": ["1/2","3/6","化简","一半","对半"] },
          { "type": "reverse", "q": "如果小华吃了3/6，小明吃了1/6，还剩几分之几？", "keywords": ["2/6","1/3","减法","剩","还有"] }
        ],
        "neriageErrors": [
          { "answer": "3/12", "reason": "分子分母分别相加", "fix": "同分母分数相加：分母不变。2/6+1/6=3/6=1/2，不是3/12" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-S-01",
        "scene": "一根铁丝长1米，用去了3/10米。还剩几分之几？",
        "question": "还剩几分之几？",
        "formula": "1 - 3/10 = ?",
        "answer": "7/10",
        "choices": ["7/10", "3/10", "1/10", "7/100"],
        "visualType": "fractionStrip",
        "visualData": { "num": 7, "total": 10, "color": "#00A896" },
        "knowledge": "分数认识·分数条",
        "difficulty": 1,
        "hint": "把1米分成10段，用去3段还剩7段",
        "rmeChoices": [
          { "label": "画分数条", "desc": "画10段条形涂7段", "correct": true },
          { "label": "列算式", "desc": "1-3/10=7/10", "correct": true },
          { "label": "画圆圈", "desc": "画圆分10份", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "用去3/10，还剩10段中的几段？", "keywords": ["7段","7/10","还剩","剩余","10-3"] },
          { "type": "compare", "q": "如果用了7/10，还剩几分之几？", "keywords": ["3/10","减","差","少","剩余"] }
        ],
        "neriageErrors": [
          { "answer": "7/100", "reason": "分母错误", "fix": "1-3/10=10/10-3/10=7/10，不是7/100" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-S-02",
        "scene": "一块地种了番茄和黄瓜。番茄占了3/7，黄瓜占了2/7。两种蔬菜一共占了这块地的几分之几？",
        "question": "番茄和黄瓜一共占了这块地的几分之几？",
        "formula": "3/7 + 2/7 = ?",
        "answer": "5/7",
        "choices": ["5/7", "1/7", "6/7", "5/14"],
        "visualType": "fractionStrip",
        "visualData": { "num": 5, "total": 7, "color": "#F5B800" },
        "knowledge": "分数认识·分数条加法",
        "difficulty": 1,
        "hint": "同分母分数相加，分母不变，分子相加",
        "rmeChoices": [
          { "label": "画分数条", "desc": "画7段条形，涂5段", "correct": true },
          { "label": "列算式", "desc": "3/7+2/7=5/7", "correct": true },
          { "label": "画圆圈", "desc": "画圆分7份", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "番茄和黄瓜一共占了7份中的几份？", "keywords": ["5份","5/7","加起来","合起来","3+2"] },
          { "type": "reverse", "q": "如果番茄占3/7，黄瓜占4/7，一共占几分之几？", "keywords": ["1","7/7","满的","整块","1"] }
        ],
        "neriageErrors": [
          { "answer": "5/14", "reason": "分母相加", "fix": "同分母分数相加：分母不变。3/7+2/7=5/7，不是5/14" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-S-03",
        "scene": "一本书看了5/9，还剩几分之几没看？",
        "question": "还剩几分之几没看？",
        "formula": "1 - 5/9 = ?",
        "answer": "4/9",
        "choices": ["4/9", "5/9", "1/9", "9/9"],
        "visualType": "fractionStrip",
        "visualData": { "num": 4, "total": 9, "color": "#E8A0BF" },
        "knowledge": "分数认识·分数条减法",
        "difficulty": 1,
        "hint": "把书分成9份，看了5份还剩4份",
        "rmeChoices": [
          { "label": "画分数条", "desc": "画9段条形涂4段", "correct": true },
          { "label": "列算式", "desc": "1-5/9=4/9", "correct": true },
          { "label": "画圆圈", "desc": "画圆分9份", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "没看的部分占了9份中的几份？", "keywords": ["4份","4/9","还没看","剩下","剩余"] },
          { "type": "compare", "q": "如果看了7/9，还剩几分之几？", "keywords": ["2/9","减","差","少"] }
        ],
        "neriageErrors": [
          { "answer": "9/9", "reason": "忘记减", "fix": "1-5/9=9/9-5/9=4/9，不是9/9" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-W-01",
        "scene": "在分数墙上找一找，1/2等于下面哪个分数？",
        "question": "1/2 = ?（在分数墙上找等值分数）",
        "formula": "1/2 = ?",
        "answer": "2/4",
        "choices": ["2/4", "1/4", "3/4", "1/3"],
        "visualType": "fractionWall",
        "visualData": {},
        "knowledge": "等值分数·分数墙",
        "difficulty": 2,
        "hint": "在分数墙上找到1/2那行，看下面哪行有一段和它一样长",
        "rmeChoices": [
          { "label": "看分数墙", "desc": "在墙上找等长行", "correct": true },
          { "label": "画分数圆", "desc": "画圆涂1/2和2/4对比", "correct": true },
          { "label": "背答案", "desc": "1/2=2/4是记忆", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "分数墙上1/2那行，下面哪行有一段和它等长？", "keywords": ["2/4","4/8","等长","一样","对等"] },
          { "type": "compare", "q": "分数墙上3/4等于下面哪个分数？", "keywords": ["6/8","3/4","等值","一样长","6÷8"] }
        ],
        "neriageErrors": [
          { "answer": "1/4", "reason": "分子分母分别加1", "fix": "等值分数是分子分母同时乘同一个数。1/2=2/4（×2），不是1+1/2+1" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-W-02",
        "scene": "分数墙上，3/4等于下面哪个分数？",
        "question": "3/4 = ?（找等值分数）",
        "formula": "3/4 = ?",
        "answer": "6/8",
        "choices": ["6/8", "3/8", "1/2", "9/12"],
        "visualType": "fractionWall",
        "visualData": {},
        "knowledge": "等值分数·分数墙",
        "difficulty": 2,
        "hint": "找到3/4那行，看下面哪行有相同长度的段",
        "rmeChoices": [
          { "label": "看分数墙", "desc": "找3/4等长行", "correct": true },
          { "label": "画分数条", "desc": "画条对比3/4和6/8", "correct": true },
          { "label": "背答案", "desc": "3/4=6/8是死的", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "分数墙上3/4那行，下面哪行有等长的段？", "keywords": ["6/8","等长","一样","对等","3×2/4×2"] },
          { "type": "reverse", "q": "6/8化简后等于几分之几？", "keywords": ["3/4","化简","÷2","等值","简化"] }
        ],
        "neriageErrors": [
          { "answer": "3/8", "reason": "只看分母", "fix": "3/4=6/8（分子分母同时×2），不是3/8" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-W-03",
        "scene": "分数墙上，2/6和哪个分数等值？",
        "question": "2/6 = ?（找等值分数）",
        "formula": "2/6 = ?",
        "answer": "1/3",
        "choices": ["1/3", "2/3", "3/6", "1/2"],
        "visualType": "fractionWall",
        "visualData": {},
        "knowledge": "等值分数·分数墙",
        "difficulty": 2,
        "hint": "找到2/6那行，看哪一行有相同长度的段",
        "rmeChoices": [
          { "label": "看分数墙", "desc": "找2/6等长行", "correct": true },
          { "label": "画分数条", "desc": "画条对比2/6和1/3", "correct": true },
          { "label": "背答案", "desc": "2/6=1/3是记忆", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "分数墙上2/6那行，哪行有等长段？", "keywords": ["1/3","等长","一样","对等","2÷2/6÷2"] },
          { "type": "compare", "q": "1/3和2/6哪个大？", "keywords": ["一样大","相等","等值","相同","相等"] }
        ],
        "neriageErrors": [
          { "answer": "2/3", "reason": "分子分母处理错误", "fix": "2/6=1/3（分子分母同时÷2），不是2/3" }
        ],
        "variants": []
      },
      {
        "id": "4B-NEG-01",
        "scene": "温度计显示-3℃，这表示零下3摄氏度。如果温度升高5℃，现在温度是多少？",
        "question": "现在温度是多少℃？",
        "formula": "-3 + 5 = ?",
        "answer": 2,
        "choices": [2, -2, 8, -8],
        "visualType": "numberLineFraction",
        "visualData": {
          "min": -5, "max": 5, "step": 1,
          "points": [{ "pos": -3, "label": "-3℃" }, { "pos": 2, "label": "2℃" }],
          "highlight": [-3, 2]
        },
        "knowledge": "负数认识·数轴",
        "difficulty": 2,
        "hint": "在数轴上从-3向右移动5格",
        "rmeChoices": [
          { "label": "画数轴", "desc": "画数轴从-3右移5格", "correct": true },
          { "label": "列算式", "desc": "-3+5=2", "correct": true },
          { "label": "直接想", "desc": "零下3度升高5度", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "从-3向右数5格，停在哪个数？", "keywords": ["2","右移","加5","数轴上","到2"] },
          { "type": "compare", "q": "如果从-3升高8度，温度变成多少？", "keywords": ["5","-3+8","更多","升高","变"] }
        ],
        "neriageErrors": [
          { "answer": -8, "reason": "方向搞反", "fix": "升高是向右移动（加），-3+5=2，不是-3-5=-8" }
        ],
        "variants": []
      },
      {
        "id": "4B-NEG-02",
        "scene": "电梯从地下2层（-2）上升5层，现在在第几层？",
        "question": "电梯现在在第几层？",
        "formula": "-2 + 5 = ?",
        "answer": 3,
        "choices": [3, -3, 7, -7],
        "visualType": "numberLineFraction",
        "visualData": {
          "min": -5, "max": 5, "step": 1,
          "points": [{ "pos": -2, "label": "-2层" }, { "pos": 3, "label": "3层" }],
          "highlight": [-2, 3]
        },
        "knowledge": "负数认识·数轴应用",
        "difficulty": 2,
        "hint": "从-2开始，向右数5格",
        "rmeChoices": [
          { "label": "画数轴", "desc": "画数轴从-2右移5格", "correct": true },
          { "label": "列算式", "desc": "-2+5=3", "correct": true },
          { "label": "直接想", "desc": "地下2层上5层", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "从-2向右数5格停在几层？", "keywords": ["3层","+5","右移","数轴","到3"] },
          { "type": "reverse", "q": "如果从3层下5层，到第几层？", "keywords": ["-2","下5层","减5","-2","向下"] }
        ],
        "neriageErrors": [
          { "answer": -7, "reason": "方向搞反", "fix": "上升是向右移动（加），-2+5=3，不是-2-5=-7" }
        ],
        "variants": []
      },
      {
        "id": "4B-NEG-03",
        "scene": "潜水员在水下8米（-8m），又下潜了5米。现在在水下多少米？",
        "question": "现在在水下多少米？",
        "formula": "-8 + (-5) = ?",
        "answer": -13,
        "choices": [-13, -3, 13, 3],
        "visualType": "numberLineFraction",
        "visualData": {
          "min": -15, "max": 5, "step": 5,
          "points": [{ "pos": -8, "label": "-8m" }, { "pos": -13, "label": "-13m" }],
          "highlight": [-8, -13]
        },
        "knowledge": "负数认识·数轴延伸",
        "difficulty": 2,
        "hint": "又下潜就是继续往负方向移动",
        "rmeChoices": [
          { "label": "画数轴", "desc": "画数轴从-8左移5格", "correct": true },
          { "label": "列算式", "desc": "-8+(-5)=-13", "correct": true },
          { "label": "直接想", "desc": "水下8米再下潜5米", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "从-8再往负方向移动5格，到多少？", "keywords": ["-13","左移","更负","水下13","-8-5"] },
          { "type": "compare", "q": "如果从-8上升3米，到多少？", "keywords": ["-5","右移","+3","上升","没那么深"] }
        ],
        "neriageErrors": [
          { "answer": -3, "reason": "符号错误", "fix": "再下潜5米是继续往负方向，-8+(-5)=-13，不是-8+5=-3" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-N-01",
        "scene": "在数轴上标出1/2和0.5的位置，它们在同一点吗？",
        "question": "1/2和0.5在数轴上是否在同一点？",
        "formula": "1/2 = ?",
        "answer": "0.5",
        "choices": ["0.5", "0.2", "0.8", "1.5"],
        "visualType": "numberLineFraction",
        "visualData": {
          "min": 0, "max": 1, "step": 0.5,
          "points": [{ "pos": 0.5, "label": "1/2 和 0.5" }],
          "decimal": true
        },
        "knowledge": "分数小数统一·数轴",
        "difficulty": 2,
        "hint": "1/2 = 0.5，它们在数轴上的位置相同",
        "rmeChoices": [
          { "label": "画数轴", "desc": "在0和1之间标出1/2和0.5", "correct": true },
          { "label": "直接答", "desc": "1/2=0.5是等价", "correct": true },
          { "label": "画圆圈", "desc": "画圆表示分数", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "1/2和0.5在数轴上是否重合？", "keywords": ["同一点","一样","相等","重合","是"] },
          { "type": "compare", "q": "0.25和1/4在数轴上是否重合？", "keywords": ["同一点","一样","相等","重合","是"] }
        ],
        "neriageErrors": [
          { "answer": "0.2", "reason": "误以为不同", "fix": "1/2=0.5，它们在数轴上是同一个点，不是不同位置" }
        ],
        "variants": []
      }
    ],
    "knowledgeMap": [
      {
        "id": "4B-01",
        "name": "加减法的意义和各部分关系",
        "concept": "加法和减法互为逆运算，各部分名称",
        "prerequisite": "三上·加减法",
        "extends": "4B-03 四则运算",
        "visualStrategy": "线段图",
        "visualType": "barModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-02",
        "name": "乘除法的意义和各部分关系",
        "concept": "乘法和除法互为逆运算，各部分名称",
        "prerequisite": "三下·乘除法",
        "extends": "4B-03 四则运算",
        "visualStrategy": "面积模型",
        "visualType": "areaModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-03",
        "name": "带括号的四则运算（含中括号）",
        "concept": "先算小括号再算中括号，最后算括号外",
        "prerequisite": "四则运算意义",
        "extends": "4B-04 租船问题",
        "visualStrategy": "步骤标注图",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-04",
        "name": "解决问题（租船问题）",
        "concept": "用四则运算解决最优方案问题",
        "prerequisite": "带括号运算",
        "extends": "6A-15 工程问题",
        "visualStrategy": "表格",
        "visualType": "barModel",
        "coreLiteracy": "应用意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "4B-05",
        "name": "观察物体（从不同方向看）",
        "concept": "从前面/上面/左面看到不同形状",
        "prerequisite": "三上·观察物体（一）",
        "extends": "5B-01 三视图",
        "visualStrategy": "三视图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-06",
        "name": "加法交换律和结合律",
        "concept": "a+b=b+a，(a+b)+c=a+(b+c)",
        "prerequisite": "加法意义",
        "extends": "4B-08 分配律",
        "visualStrategy": "数轴跳跃",
        "visualType": "barModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-07",
        "name": "乘法交换律和结合律",
        "concept": "a×b=b×a，(a×b)×c=a×(b×c)",
        "prerequisite": "乘法意义",
        "extends": "4B-08 分配律",
        "visualStrategy": "面积模型",
        "visualType": "areaModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-08",
        "name": "乘法分配律",
        "concept": "(a+b)×c=a×c+b×c",
        "prerequisite": "乘法结合律",
        "extends": "4B-09 简便运算",
        "visualStrategy": "面积模型",
        "visualType": "areaModel",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "4B-09",
        "name": "简便运算（连减、连除）",
        "concept": "a-b-c=a-(b+c)；a÷b÷c=a÷(b×c)",
        "prerequisite": "运算定律",
        "extends": "4B-23 小数简便",
        "visualStrategy": "线段图/面积模型",
        "visualType": "numberBond",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-10",
        "name": "小数的意义",
        "concept": "0.1=1/10，0.01=1/100，0.001=1/1000",
        "prerequisite": "三下·小数初步+三上·分数",
        "extends": "4B-11 读写法",
        "visualStrategy": "面积模型+数轴",
        "visualType": "fractionStrip",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-11",
        "name": "小数的读法和写法",
        "concept": "整数部分按整数读，小数部分顺次读",
        "prerequisite": "小数意义",
        "extends": "4B-12 性质",
        "visualStrategy": "数位表",
        "visualType": "numberLine",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-12",
        "name": "小数的性质",
        "concept": "小数末尾添0或去0大小不变",
        "prerequisite": "小数意义",
        "extends": "4B-13 大小比较",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-13",
        "name": "小数大小比较",
        "concept": "先比整数部分，再逐位比小数部分",
        "prerequisite": "小数性质",
        "extends": "4B-14 小数点移动",
        "visualStrategy": "数轴",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-14",
        "name": "小数点移动引起大小变化",
        "concept": "小数点右移1位×10，左移1位÷10",
        "prerequisite": "小数大小比较",
        "extends": "4B-15 单位换算",
        "visualStrategy": "数位表+动画",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "4B-15",
        "name": "小数与单位换算",
        "concept": "高级→低级×进率；低级→高级÷进率",
        "prerequisite": "小数点移动",
        "extends": "4B-16 近似数",
        "visualStrategy": "数位表",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-16",
        "name": "求小数近似数",
        "concept": "四舍五入保留指定小数位数",
        "prerequisite": "四上·求近似数",
        "extends": "5A-03 积的近似数",
        "visualStrategy": "数轴",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-17",
        "name": "三角形的认识",
        "concept": "三条边、三个角、三个顶点，稳定性",
        "prerequisite": "三上·四边形",
        "extends": "4B-18 分类",
        "visualStrategy": "几何标注图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "4B-18",
        "name": "三角形的分类",
        "concept": "按角分（锐角/直角/钝角），按边分（等腰/等边）",
        "prerequisite": "三角形认识+四上·角分类",
        "extends": "4B-19 内角和",
        "visualStrategy": "几何分类图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-19",
        "name": "三角形内角和",
        "concept": "任意三角形内角和=180°",
        "prerequisite": "三角形分类",
        "extends": "4A-23 四边形内角和",
        "visualStrategy": "几何验证图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-20",
        "name": "三角形三边关系",
        "concept": "任意两边之和大于第三边",
        "prerequisite": "三角形认识",
        "extends": "5B-06 长方体棱",
        "visualStrategy": "几何对比图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "4B-21",
        "name": "小数加减法",
        "concept": "小数点对齐，按整数加减法算",
        "prerequisite": "小数意义+三下·简单小数加减",
        "extends": "4B-22 混合运算",
        "visualStrategy": "竖式格子",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-22",
        "name": "小数加减混合运算",
        "concept": "含括号和不含括号，运算顺序同整数",
        "prerequisite": "小数加减法",
        "extends": "4B-23 简便运算",
        "visualStrategy": "步骤标注图",
        "visualType": "numberBond",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-23",
        "name": "整数运算定律推广到小数",
        "concept": "加法交换/结合律、减法的性质",
        "prerequisite": "小数加减+四上·运算定律",
        "extends": "5A-04 小数运算定律",
        "visualStrategy": "数轴跳跃",
        "visualType": "barModel",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-24",
        "name": "轴对称",
        "concept": "对折后完全重合，对称点到对称轴距离相等",
        "prerequisite": "三下·图形的运动（一）",
        "extends": "4B-25 平移",
        "visualStrategy": "网格图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-25",
        "name": "平移",
        "concept": "方向+距离，平移后形状大小不变",
        "prerequisite": "三下·图形的运动（一）",
        "extends": "4B-26 平移求面积",
        "visualStrategy": "网格图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-26",
        "name": "利用平移求不规则图形面积",
        "concept": "割补平移将不规则→规则",
        "prerequisite": "平移+三下·面积",
        "extends": "5A-28 不规则面积估算",
        "visualStrategy": "网格图",
        "visualType": "geometry",
        "coreLiteracy": "应用意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "4B-27",
        "name": "平均数",
        "concept": "平均数=总数÷份数，不代表具体某个数",
        "prerequisite": "除法意义",
        "extends": "4B-28 复式条形图",
        "visualStrategy": "条形对比图",
        "visualType": "barModel",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-28",
        "name": "复式条形统计图",
        "concept": "两组数据并列对比",
        "prerequisite": "条形统计图+平均数",
        "extends": "5B-28 折线统计图",
        "visualStrategy": "统计图",
        "visualType": "barModel",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-29",
        "name": "鸡兔同笼",
        "concept": "假设法：假设全是鸡→多出的腿÷2=兔数",
        "prerequisite": "四则运算",
        "extends": "6B-23 鸽巢问题",
        "visualStrategy": "画图+抬腿法",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": true
      }
    ]
  };
