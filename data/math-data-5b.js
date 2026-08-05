window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['5b'] = {
    "title": "五年级下册·分数加减法与长方体正方体",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "units": [
      {
        "name": "观察物体",
        "level": "locked",
        "children": [
          {
            "name": "三视图",
            "level": "locked"
          },
          {
            "name": "拼摆小正方体",
            "level": "locked"
          }
        ]
      },
      {
        "name": "因数与倍数",
        "level": "locked",
        "children": [
          {
            "name": "因数和倍数",
            "level": "locked"
          },
          {
            "name": "2、5、3倍数特征",
            "level": "locked"
          },
          {
            "name": "质数和合数",
            "level": "locked"
          }
        ]
      },
      {
        "name": "长方体和正方体",
        "level": "locked",
        "children": [
          {
            "name": "长方体认识",
            "level": "locked"
          },
          {
            "name": "正方体认识",
            "level": "locked"
          },
          {
            "name": "表面积",
            "level": "locked"
          },
          {
            "name": "体积和体积单位",
            "level": "locked"
          },
          {
            "name": "体积计算",
            "level": "locked"
          },
          {
            "name": "体积进率",
            "level": "locked"
          },
          {
            "name": "容积",
            "level": "locked"
          },
          {
            "name": "排水法",
            "level": "locked"
          }
        ]
      },
      {
        "name": "分数的意义和性质",
        "level": "locked",
        "children": [
          {
            "name": "分数意义",
            "level": "locked"
          },
          {
            "name": "分数与除法",
            "level": "locked"
          },
          {
            "name": "真分数假分数",
            "level": "locked"
          },
          {
            "name": "基本性质",
            "level": "locked"
          },
          {
            "name": "最大公因数",
            "level": "locked"
          },
          {
            "name": "约分",
            "level": "locked"
          },
          {
            "name": "最小公倍数",
            "level": "locked"
          },
          {
            "name": "通分",
            "level": "locked"
          },
          {
            "name": "分数小数互化",
            "level": "locked"
          }
        ]
      },
      {
        "name": "图形的运动",
        "level": "locked",
        "children": [
          {
            "name": "旋转",
            "level": "locked"
          },
          {
            "name": "设计图案",
            "level": "locked"
          }
        ]
      },
      {
        "name": "分数加减法",
        "level": "locked",
        "children": [
          {
            "name": "同分母加减",
            "level": "locked"
          },
          {
            "name": "异分母加减",
            "level": "locked"
          },
          {
            "name": "混合运算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "折线统计图",
        "level": "locked",
        "children": [
          {
            "name": "单式折线",
            "level": "locked"
          },
          {
            "name": "复式折线",
            "level": "locked"
          }
        ]
      },
      {
        "name": "数学广角",
        "level": "locked",
        "children": [
          {
            "name": "找次品",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "小红从前面、上面、左面看一个由小正方体搭成的立体图形。她好奇从不同方向看会看到什么形状。",
        "question": "从前面看一个长方体能看到几个面？",
        "formula": "从前面看 → ?个面",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "view": "front"
          }
        },
        "knowledge": "从三个方向观察物体",
        "difficulty": 2,
        "hint": "从一个方向看最多看到3个面",
        "variants": [
          {
            "question": "从前面上面左面看一共看到几个不同面？",
            "formula": "三视图→?个面",
            "answer": 3,
            "hint": "三个方向各一个面"
          },
          {
            "question": "从一个方向看最多看到几个面？",
            "formula": "一个方向→?面",
            "answer": 3,
            "hint": "最多3个面"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "从前面看能看到几个面",
              "从三个方向一共看到几个面",
              "长方体一共有几个面",
              "从前面看到的面有多大"
            ],
            "answer": "从前面看能看到几个面",
            "explain": "题目问「从前面看一个长方体能看到几个面？」，是求一个方向能看到的面数"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "从「前面」这一个方向看长方体",
              "从三个方向看长方体",
              "长方体的长宽高",
              "长方体的体积"
            ],
            "answer": "从「前面」这一个方向看长方体",
            "explain": "关键是「从前面看」，只看一个正对方向"
          },
          {
            "q": "🧩 怎么判断看到几个面？",
            "choices": [
              "正对着看只能看到1个正面",
              "最多能看到3个面",
              "能看到6个面",
              "能看到2个面"
            ],
            "answer": "正对着看只能看到1个正面",
            "explain": "从前面正对着看长方体，只能看到正对着的那个面，所以是1个"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中是一个长方体，从前面正对着看，只能看到正面这1个面",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "从一个方向正对看物体，看到的是这个方向的正投影面，长方体从前面看只有1个面",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "三视图中每个方向只看到一个正投影面：前面看1个、上面看1个、左面看1个。斜着看最多能看到3个面",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红搭了一个立体图形，从上面看是3个小正方形排成一排。她想知道至少用了几个小正方体。",
        "question": "从上看3个正方形一排，至少用了几个小正方体？",
        "formula": "至少 ? 个",
        "answer": 3,
        "choices": [
          3,
          2,
          4,
          6
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cubes",
          "params": {
            "topView": [
              1,
              1,
              1
            ]
          }
        },
        "knowledge": "根据三视图拼摆小正方体",
        "difficulty": 3,
        "hint": "每列至少一个",
        "variants": [
          {
            "question": "从上看2×2共4格至少几个？",
            "formula": "2×2至少?",
            "answer": 4,
            "hint": "每格至少一个"
          },
          {
            "question": "从上看3×2共6格至少几个？",
            "formula": "3×2至少?",
            "answer": 6,
            "hint": "每格至少一个"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "至少用了几个小正方体",
              "一共有几列小正方体",
              "从上面看到几个正方形",
              "小正方体的总数最大是多少"
            ],
            "answer": "至少用了几个小正方体",
            "explain": "题目问「从上看3个正方形一排，至少用了几个小正方体？」，求最少需要多少个"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "从上看是3个正方形排成一排",
              "从上看是3×3共9个正方形",
              "从侧面看是3个正方形",
              "从前面看是3个正方形"
            ],
            "answer": "从上看是3个正方形排成一排",
            "explain": "俯视图有3个正方形排成一排，说明有3列"
          },
          {
            "q": "🧩 怎么算至少用几个？",
            "choices": [
              "每列至少1个，3列至少3个",
              "每列至少2个，3列至少6个",
              "3个正方形就是3个",
              "至少需要9个"
            ],
            "answer": "每列至少1个，3列至少3个",
            "explain": "每个正方形对应一列，每列至少放1个小正方体，3列至少3个"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "俯视图有3个正方形排成一排，说明立体图形有3列",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "每个俯视图正方形对应一列小正方体，每列至少1个，3列至少3个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "从俯视图推小正方体数：格子数=最少数量。要算最多数量则需要结合其他视图",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把12个苹果平均分给4个小朋友。老师告诉12÷4=3，所以4和3都是12的因数。",
        "question": "12有几个因数？",
        "formula": "12的因数个数 = ?",
        "answer": 6,
        "choices": [
          6,
          4,
          5,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 36,
          "parts": [
            {
              "label": "1×12",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "2×6",
              "val": 12,
              "color": "#F5B800"
            },
            {
              "label": "3×4",
              "val": 12,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "因数和倍数",
        "difficulty": 2,
        "hint": "1,2,3,4,6,12共6个",
        "variants": [
          {
            "question": "6有几个因数？",
            "formula": "6因数=?",
            "answer": 4,
            "hint": "1,2,3,6"
          },
          {
            "question": "8有几个因数？",
            "formula": "8因数=?",
            "answer": 4,
            "hint": "1,2,4,8"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "12有几个因数",
              "12是几个数的倍数",
              "12有几个倍数",
              "12能被几整除"
            ],
            "answer": "12有几个因数",
            "explain": "题目问「12有几个因数？」，要找出所有能整除12的数"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "12可以分解为1×12、2×6、3×4",
              "12=3×4",
              "12=2×6",
              "12=1×12"
            ],
            "answer": "12可以分解为1×12、2×6、3×4",
            "explain": "12有三组乘法分解，每组两个数都是因数"
          },
          {
            "q": "🧩 怎么数因数个数？",
            "choices": [
              "列出所有：1,2,3,4,6,12共6个",
              "只有3和4两个",
              "只有2和6两个",
              "只有1和12两个"
            ],
            "answer": "列出所有：1,2,3,4,6,12共6个",
            "explain": "从1开始成对找：1×12、2×6、3×4，共6个因数"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3组条形：1×12、2×6、3×4，每组两个数都是12的因数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "12的因数有1、2、3、4、6、12，共6个。因数总是成对出现",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "找因数方法：从1开始成对找，到√12≈3.5为止。1和本身是任何数的因数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红在百数表中圈出2的倍数。她发现2的倍数个位都是偶数。",
        "question": "下面哪个数是2的倍数？(36填1,37填2,39填3)",
        "formula": "36→? (1是2倍数/2不是/3不是)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 36,
          "end": 40,
          "points": [
            {
              "pos": 36,
              "label": "36",
              "color": "#00A896"
            },
            {
              "pos": 37,
              "label": "37",
              "color": "#FB923C"
            },
            {
              "pos": 38,
              "label": "38",
              "color": "#00A896"
            },
            {
              "pos": 39,
              "label": "39",
              "color": "#FB923C"
            }
          ],
          "highlight": [
            36,
            39
          ]
        },
        "knowledge": "2、5、3的倍数特征",
        "difficulty": 2,
        "hint": "个位是偶数是2的倍数",
        "variants": [
          {
            "question": "哪个是5的倍数(25填1,26填2)？",
            "formula": "25→?",
            "answer": 1,
            "hint": "个位0或5"
          },
          {
            "question": "哪个是3的倍数(12填1,13填2)？",
            "formula": "12→?",
            "answer": 1,
            "hint": "各位数字和是3的倍数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "判断36是不是2的倍数",
              "判断36是不是3的倍数",
              "判断36是不是5的倍数",
              "36的因数有几个"
            ],
            "answer": "判断36是不是2的倍数",
            "explain": "题目问「下面哪个数是2的倍数」，36填1表示判断36"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "2的倍数特征：个位是0,2,4,6,8",
              "2的倍数特征：各位数字之和是2",
              "2的倍数特征：个位是0或5",
              "2的倍数特征：能被3整除"
            ],
            "answer": "2的倍数特征：个位是0,2,4,6,8",
            "explain": "2的倍数看个位是否是偶数"
          },
          {
            "q": "🧩 36是不是2的倍数？",
            "choices": [
              "36个位是6，是2的倍数，填1",
              "36个位是6，不是2的倍数",
              "36各位和是9，是3的倍数",
              "36个位不是0或5"
            ],
            "answer": "36个位是6，是2的倍数，填1",
            "explain": "36的个位是6，6是偶数，所以36是2的倍数，选1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上36和38标绿色（是2的倍数），37和39标橙色（不是2的倍数）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "36的个位是6，6是偶数，所以36是2的倍数",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "倍数特征：2的倍数个位是0/2/4/6/8；5的倍数个位是0/5；3的倍数各位数字之和是3的倍数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师让小红判断7是不是质数。小红发现7只能被1和7整除。",
        "question": "7是质数还是合数？(质数填1,合数填2)",
        "formula": "7 → ? (1质/2合)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 2,
          "end": 10,
          "points": [
            {
              "pos": 2,
              "label": "质",
              "color": "#00A896"
            },
            {
              "pos": 3,
              "label": "质",
              "color": "#00A896"
            },
            {
              "pos": 4,
              "label": "合",
              "color": "#FB923C"
            },
            {
              "pos": 5,
              "label": "质",
              "color": "#00A896"
            },
            {
              "pos": 7,
              "label": "质",
              "color": "#00A896"
            },
            {
              "pos": 9,
              "label": "合",
              "color": "#FB923C"
            }
          ],
          "highlight": [
            2,
            10
          ]
        },
        "knowledge": "质数和合数",
        "difficulty": 2,
        "hint": "只有1和本身两个因数是质数",
        "variants": [
          {
            "question": "9是质数还是合数(1质2合)？",
            "formula": "9→?",
            "answer": 2,
            "hint": "9有1,3,9三个因数"
          },
          {
            "question": "11是质数还是合数(1质2合)？",
            "formula": "11→?",
            "answer": 1,
            "hint": "只有1和11"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "判断7是质数还是合数",
              "求7的倍数",
              "求7的因数",
              "7能被几整除"
            ],
            "answer": "判断7是质数还是合数",
            "explain": "题目问「7是质数还是合数？」，质数填1合数填2"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "7只能被1和7整除",
              "7能被3整除",
              "7是偶数",
              "7大于5"
            ],
            "answer": "7只能被1和7整除",
            "explain": "7的因数只有1和7两个"
          },
          {
            "q": "🧩 7是质数还是合数？",
            "choices": [
              "质数，只有1和本身两个因数",
              "合数，有3个以上因数",
              "既不是质数也不是合数",
              "无法判断"
            ],
            "answer": "质数，只有1和本身两个因数",
            "explain": "质数定义：只有1和本身两个因数。7只有1和7，是质数，填1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上2、3、5、7标「质」（绿色），4、9标「合」（橙色）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "7只能被1和7整除，只有2个因数，所以是质数",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "质数：只有1和本身两个因数。合数：有3个及以上因数。1既不是质数也不是合数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红观察一个长方体纸盒。老师问她长方体有几个面。",
        "question": "长方体有几个面？",
        "formula": "长方体面数 = ?",
        "answer": 6,
        "choices": [
          6,
          4,
          8,
          12
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {}
        },
        "knowledge": "长方体的认识",
        "difficulty": 1,
        "hint": "长方体6个面12条棱8个顶点",
        "variants": [
          {
            "question": "长方体有几条棱？",
            "formula": "棱=?",
            "answer": 12,
            "hint": "12条棱"
          },
          {
            "question": "长方体有几个顶点？",
            "formula": "顶点=?",
            "answer": 8,
            "hint": "8个顶点"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "长方体有几个面",
              "长方体有几条棱",
              "长方体有几个顶点",
              "长方体的体积"
            ],
            "answer": "长方体有几个面",
            "explain": "题目问「长方体有几个面？」，求数面的数量"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "长方体是立体图形，有上下前后左右",
              "长方体的长宽高",
              "长方体的表面积",
              "长方体的展开图"
            ],
            "answer": "长方体是立体图形，有上下前后左右",
            "explain": "长方体有6个方向的面"
          },
          {
            "q": "🧩 长方体有几个面？",
            "choices": [
              "6个面（上下前后左右）",
              "4个面",
              "8个面",
              "12个面"
            ],
            "answer": "6个面（上下前后左右）",
            "explain": "数一数：上、下、前、后、左、右，共6个面"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中长方体有上、下、前、后、左、右共6个面",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "长方体有6个面（相对的面完全相同），12条棱，8个顶点",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "长方体特征：6面12棱8顶点。相对的面形状大小完全相同",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小亮观察一个正方体魔方。老师问他正方体有什么特征。",
        "question": "正方体有几个面？",
        "formula": "正方体面数 = ?",
        "answer": 6,
        "choices": [
          6,
          4,
          8,
          12
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cube",
          "params": {}
        },
        "knowledge": "正方体的认识",
        "difficulty": 1,
        "hint": "正方体6个面都是正方形",
        "variants": [
          {
            "question": "正方体有几条棱？",
            "formula": "棱=?",
            "answer": 12,
            "hint": "12条棱等长"
          },
          {
            "question": "正方体每个面是什么形状？(正方形填1,长方形填2)",
            "formula": "面→?",
            "answer": 1,
            "hint": "都是正方形"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "正方体有几个面",
              "正方体有几条棱",
              "正方体的体积",
              "正方体的表面积"
            ],
            "answer": "正方体有几个面",
            "explain": "题目问「正方体有几个面？」，求数面的数量"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "正方体是特殊的长方体，每个面都是正方形",
              "正方体的棱长",
              "正方体的展开图",
              "正方体的体积"
            ],
            "answer": "正方体是特殊的长方体，每个面都是正方形",
            "explain": "正方体6个面都是一样的正方形"
          },
          {
            "q": "🧩 正方体有几个面？",
            "choices": [
              "6个面，都是正方形",
              "4个面",
              "8个面",
              "12个面"
            ],
            "answer": "6个面，都是正方形",
            "explain": "正方体有6个面，每个面都是完全相同的正方形"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中正方体有6个面，每个面都是一样的正方形",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "正方体有6个面（都是正方形），12条棱（都等长），8个顶点",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "正方体是特殊的长方体：6面全等、12棱等长。满足长方体所有特征",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红要给一个长5cm宽4cm高3cm的长方体纸盒涂色。她算表面积。",
        "question": "表面积是多少平方厘米？",
        "formula": "2×(5×4+5×3+4×3) = ?",
        "answer": 94,
        "choices": [
          94,
          60,
          47,
          188
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "length": 5,
            "width": 4,
            "height": 3
          }
        },
        "knowledge": "长方体和正方体的表面积",
        "difficulty": 3,
        "hint": "2×(长×宽+长×高+宽×高)",
        "variants": [
          {
            "question": "长6宽4高2表面积？",
            "formula": "2×(24+12+8)=?",
            "answer": 88,
            "hint": "代入公式"
          },
          {
            "question": "正方体棱3表面积？",
            "formula": "6×3²=?",
            "answer": 54,
            "hint": "6a²"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "长方体的表面积",
              "长方体的体积",
              "长方体的棱长总和",
              "长方体的一个面面积"
            ],
            "answer": "长方体的表面积",
            "explain": "题目问「表面积是多少平方厘米？」，求6个面的总面积"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "长5cm、宽4cm、高3cm",
              "长5cm、宽3cm",
              "棱长3cm",
              "长4cm、宽3cm"
            ],
            "answer": "长5cm、宽4cm、高3cm",
            "explain": "三个关键数据：长5、宽4、高3"
          },
          {
            "q": "🧩 用什么方法计算表面积？",
            "choices": [
              "2×(长×宽+长×高+宽×高)",
              "长×宽×高",
              "长+宽+高",
              "6×棱²"
            ],
            "answer": "2×(长×宽+长×高+宽×高)",
            "explain": "表面积=3对面的面积之和×2：2×(5×4+5×3+4×3)=2×47=94"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中长方体长5宽4高3，6个面分3对：上下、前后、左右",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "表面积=2×(5×4+5×3+4×3)=2×(20+15+12)=2×47=94平方厘米",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "长方体表面积=2×(ab+ah+bh)，正方体表面积=6a²。关键是算3对面的面积之和再乘2",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师拿出一个棱长1cm的正方体，告诉同学们它的体积是1cm³。小红想知道1dm³等于多少cm³。",
        "question": "1dm³等于多少cm³？",
        "formula": "1dm³ = ? cm³",
        "answer": 1000,
        "choices": [
          1000,
          100,
          10,
          10000
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cube",
          "params": {
            "side": 10,
            "unit": "cm",
            "label": "1dm=10cm"
          }
        },
        "knowledge": "体积和体积单位",
        "difficulty": 2,
        "hint": "1dm³=10×10×10=1000cm³",
        "variants": [
          {
            "question": "1m³=多少dm³？",
            "formula": "1m³=?dm³",
            "answer": 1000,
            "hint": "10×10×10"
          },
          {
            "question": "棱1cm正方体体积？",
            "formula": "1×1×1=?",
            "answer": 1,
            "hint": "1cm³"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "1dm³等于多少cm³",
              "1dm等于多少cm",
              "1cm³等于多少dm³",
              "1m³等于多少cm³"
            ],
            "answer": "1dm³等于多少cm³",
            "explain": "题目问「1dm³等于多少cm³？」，是体积单位换算"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "1dm=10cm，棱长1dm的正方体",
              "1dm=10cm",
              "棱长1cm的正方体",
              "1m=100cm"
            ],
            "answer": "1dm=10cm，棱长1dm的正方体",
            "explain": "1dm³就是棱长1dm=10cm的正方体"
          },
          {
            "q": "🧩 怎么换算体积单位？",
            "choices": [
              "10×10×10=1000",
              "10×10=100",
              "10+10+10=30",
              "100×100=10000"
            ],
            "answer": "10×10×10=1000",
            "explain": "棱长10cm的正方体体积=10×10×10=1000cm³"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中正方体边长1dm=10cm，每条棱分成10等份",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1dm³就是棱长10cm的正方体体积：10×10×10=1000cm³",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "相邻体积单位进率是1000：1m³=1000dm³，1dm³=1000cm³。长度进率10，面积进率100，体积进率1000",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算一个长5cm宽4cm高3cm的长方体体积。",
        "question": "体积是多少立方厘米？",
        "formula": "5 × 4 × 3 = ? cm³",
        "answer": 60,
        "choices": [
          60,
          12,
          94,
          23
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "length": 5,
            "width": 4,
            "height": 3
          }
        },
        "knowledge": "长方体和正方体的体积",
        "difficulty": 2,
        "hint": "长×宽×高",
        "variants": [
          {
            "question": "长6宽4高2体积？",
            "formula": "6×4×2=?",
            "answer": 48,
            "hint": "长宽高"
          },
          {
            "question": "正方体棱3体积？",
            "formula": "3×3×3=?",
            "answer": 27,
            "hint": "a³"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "长方体的体积",
              "长方体的表面积",
              "长方体的棱长总和",
              "长方体的容积"
            ],
            "answer": "长方体的体积",
            "explain": "题目问「体积是多少立方厘米？」，求物体所占空间的大小"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "长5cm、宽4cm、高3cm",
              "长5cm、宽3cm",
              "棱长3cm",
              "长4cm、宽3cm"
            ],
            "answer": "长5cm、宽4cm、高3cm",
            "explain": "三个关键数据：长5、宽4、高3"
          },
          {
            "q": "🧩 用什么方法计算体积？",
            "choices": [
              "长×宽×高",
              "2×(长×宽+长×高+宽×高)",
              "长+宽+高",
              "棱×棱×棱"
            ],
            "answer": "长×宽×高",
            "explain": "体积=长×宽×高=5×4×3=60cm³"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中长方体长5宽4高3，可以看作用1cm³小方块填满",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "体积=长×宽×高=5×4×3=60立方厘米。一层5×4=20个，3层共60个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "长方体体积=abh，正方体体积=a³。统一公式：V=Sh（底面积×高）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师告诉小红1m³等于1000dm³。小红好奇1m³等于多少cm³。",
        "question": "1m³等于多少cm³？",
        "formula": "1m³ = ? cm³",
        "answer": 1000000,
        "choices": [
          1000000,
          1000,
          10000,
          100000
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 1000000,
          "points": [
            {
              "pos": 1000,
              "label": "1dm³",
              "color": "#00A896"
            },
            {
              "pos": 1000000,
              "label": "1m³",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            1000000
          ]
        },
        "knowledge": "体积单位进率",
        "difficulty": 2,
        "hint": "1m³=1000dm³=1000000cm³",
        "variants": [
          {
            "question": "2m³=多少dm³？",
            "formula": "2m³=?dm³",
            "answer": 2000,
            "hint": "2×1000"
          },
          {
            "question": "5dm³=多少cm³？",
            "formula": "5dm³=?cm³",
            "answer": 5000,
            "hint": "5×1000"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "1m³等于多少cm³",
              "1m³等于多少dm³",
              "1dm³等于多少cm³",
              "1m等于多少cm"
            ],
            "answer": "1m³等于多少cm³",
            "explain": "题目问「1m³等于多少cm³？」，是跨级体积单位换算"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "1m³=1000dm³，1dm³=1000cm³",
              "1m=100cm",
              "1dm=10cm",
              "1m³=100cm³"
            ],
            "answer": "1m³=1000dm³，1dm³=1000cm³",
            "explain": "需要经过两次换算：m³→dm³→cm³"
          },
          {
            "q": "🧩 怎么换算？",
            "choices": [
              "1000×1000=1000000",
              "1000+1000=2000",
              "100×100=10000",
              "100×100×100=1000000"
            ],
            "answer": "1000×1000=1000000",
            "explain": "1m³=1000dm³=1000×1000=1000000cm³"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上1dm³=1000cm³，1m³=1000dm³，所以1m³=1000000cm³",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1m=100cm，1m³=100×100×100=1000000cm³。或1000×1000=1000000",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "跨级体积单位进率是1000×1000=1000000。1m³=1000dm³=1000000cm³",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "妈妈买了一瓶2L的果汁。小红想知道2L等于多少mL。",
        "question": "2L等于多少mL？",
        "formula": "2L = ? mL",
        "answer": 2000,
        "choices": [
          2000,
          200,
          20,
          20000
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 2000,
          "points": [
            {
              "pos": 1000,
              "label": "1L",
              "color": "#00A896"
            },
            {
              "pos": 2000,
              "label": "2L",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            2000
          ]
        },
        "knowledge": "容积和容积单位",
        "difficulty": 1,
        "hint": "1L=1000mL",
        "variants": [
          {
            "question": "3L=多少mL？",
            "formula": "3L=?mL",
            "answer": 3000,
            "hint": "3×1000"
          },
          {
            "question": "500mL=多少L？",
            "formula": "500mL=?L",
            "answer": 0.5,
            "hint": "500÷1000"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "2L等于多少mL",
              "2L等于多少cm³",
              "2000mL等于多少L",
              "2L等于多少dm³"
            ],
            "answer": "2L等于多少mL",
            "explain": "题目问「2L等于多少mL？」，是容积单位换算"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "1L=1000mL，有2L果汁",
              "1L=100mL",
              "1L=1cm³",
              "有2瓶果汁"
            ],
            "answer": "1L=1000mL，有2L果汁",
            "explain": "关键是1L=1000mL这个换算关系"
          },
          {
            "q": "🧩 2L等于多少mL？",
            "choices": [
              "2×1000=2000",
              "2×100=200",
              "2×10=20",
              "2+1000=1002"
            ],
            "answer": "2×1000=2000",
            "explain": "1L=1000mL，2L=2×1000=2000mL"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上1L=1000mL，2L就是2个1000mL",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1L=1000mL，2L=2×1000=2000mL",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "容积单位：1L=1000mL，1L=1dm³，1mL=1cm³。容积和体积可以互换",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把一块石头放入装有水的量杯中，水面从200mL升到了250mL。她算石头的体积。",
        "question": "石头体积是多少立方厘米？",
        "formula": "250 - 200 = ? cm³",
        "answer": 50,
        "choices": [
          50,
          450,
          200,
          250
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 200,
          "end": 250,
          "points": [
            {
              "pos": 200,
              "label": "放入前",
              "color": "#00A896"
            },
            {
              "pos": 250,
              "label": "放入后",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            200,
            250
          ]
        },
        "knowledge": "排水法求不规则物体体积",
        "difficulty": 2,
        "hint": "上升的水的体积=物体体积",
        "variants": [
          {
            "question": "水面从300到360体积？",
            "formula": "360-300=?",
            "answer": 60,
            "hint": "差值"
          },
          {
            "question": "水面从150到200体积？",
            "formula": "200-150=?",
            "answer": 50,
            "hint": "差值"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "石头的体积",
              "水的总体积",
              "杯子的容积",
              "水上升的高度"
            ],
            "answer": "石头的体积",
            "explain": "题目问「石头体积是多少立方厘米？」，用排水法求不规则物体体积"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "水面从200mL升到250mL",
              "水面是200mL",
              "水面是250mL",
              "杯子有500mL"
            ],
            "answer": "水面从200mL升到250mL",
            "explain": "放入前200mL，放入后250mL，上升了50mL"
          },
          {
            "q": "🧩 怎么算石头体积？",
            "choices": [
              "250-200=50，上升的水体积=物体体积",
              "200+250=450",
              "250÷200=1.25",
              "200×250=50000"
            ],
            "answer": "250-200=50，上升的水体积=物体体积",
            "explain": "排水法：上升部分水的体积=物体体积=250-200=50cm³"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上水从200mL（放入前）升到250mL（放入后），上升了50mL",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "上升的水的体积=石头的体积：250-200=50mL=50cm³",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "排水法：不规则物体体积=上升部分水的体积。1mL=1cm³",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把一块蛋糕平均分成4份，吃了其中1份。老师问她吃了这块蛋糕的几分之几。",
        "question": "吃了这块蛋糕的几分之几？(填分子)",
        "formula": "1/? (填分子)",
        "answer": 1,
        "choices": [
          1,
          4,
          3,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数的意义",
        "difficulty": 1,
        "hint": "平均分成4份取1份",
        "variants": [
          {
            "question": "分成5份取2份分子是？",
            "formula": "2/?分子",
            "answer": 2,
            "hint": "取2份"
          },
          {
            "question": "分成6份取3份分子是？",
            "formula": "3/?分子",
            "answer": 3,
            "hint": "取3份"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "吃了这块蛋糕的几分之几（填分子）",
              "蛋糕有几份",
              "蛋糕的总大小",
              "还剩几分之几"
            ],
            "answer": "吃了这块蛋糕的几分之几（填分子）",
            "explain": "题目问「吃了这块蛋糕的几分之几？」，要求填分子"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "平均分成4份，吃了1份",
              "平均分成4份，吃了2份",
              "平均分成3份，吃了1份",
              "吃了整个蛋糕"
            ],
            "answer": "平均分成4份，吃了1份",
            "explain": "分母是4（分成4份），分子是1（取1份）"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "取了1份，分子是1",
              "分成4份，分子是4",
              "吃了3份，分子是3",
              "分子是2"
            ],
            "answer": "取了1份，分子是1",
            "explain": "分数中分子表示取的份数，取了1份所以分子是1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中蛋糕平均分成4份，涂色1份，表示1/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "把单位「1」平均分成4份，取1份，就是1/4。分子是1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分数：分母=平均分的份数，分子=取的份数。1/4表示四分之一",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把3块饼平均分给4个小朋友。老师问她每人分到多少块。",
        "question": "3÷4等于几分之几？(填分子)",
        "formula": "3÷4 = ?/4 (填分子)",
        "answer": 3,
        "choices": [
          3,
          4,
          7,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数与除法",
        "difficulty": 2,
        "hint": "a÷b=a/b",
        "variants": [
          {
            "question": "2÷5=?/5(填分子)？",
            "formula": "2÷5=?/5",
            "answer": 2,
            "hint": "分子是被除数"
          },
          {
            "question": "5÷8=?/8(填分子)？",
            "formula": "5÷8=?/8",
            "answer": 5,
            "hint": "分子是被除数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "3÷4等于几分之几（填分子）",
              "3÷4等于多少",
              "4÷3等于多少",
              "每人分到几个苹果"
            ],
            "answer": "3÷4等于几分之几（填分子）",
            "explain": "题目问「3÷4等于几分之几？」，要求填分子，分母是4"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "3块饼平均分给4人，每人3/4块",
              "4块饼分给3人",
              "3块饼分给3人",
              "4块饼分给4人"
            ],
            "answer": "3块饼平均分给4人，每人3/4块",
            "explain": "被除数3是分子，除数4是分母"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "被除数3是分子，填3",
              "除数4是分子，填4",
              "3+4=7是分子",
              "3-4=-1是分子"
            ],
            "answer": "被除数3是分子，填3",
            "explain": "分数与除法：a÷b=a/b，被除数做分子，3÷4=3/4，分子是3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中4份取3份，表示3/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "a÷b=a/b，被除数是分子，除数是分母。3÷4=3/4，分子是3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分数与除法的关系：a÷b=a/b（b≠0）。分数线相当于除号，分子=被除数，分母=除数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红看到分数3/8。老师问她这是真分数还是假分数。",
        "question": "3/8是真分数还是假分数？(真分数填1,假分数填2)",
        "formula": "3/8 → ? (1真/2假)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 8,
          "color": "#00A896"
        },
        "knowledge": "真分数、假分数和带分数",
        "difficulty": 2,
        "hint": "分子<分母是真分数",
        "variants": [
          {
            "question": "7/4是真还是假(1真2假)？",
            "formula": "7/4→?",
            "answer": 2,
            "hint": "分子>分母是假"
          },
          {
            "question": "5/5是真还是假(1真2假)？",
            "formula": "5/5→?",
            "answer": 2,
            "hint": "分子=分母是假分数=1"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "判断3/8是真分数还是假分数",
              "求3/8的大小",
              "求3/8的倒数",
              "3/8约分"
            ],
            "answer": "判断3/8是真分数还是假分数",
            "explain": "题目问「3/8是真分数还是假分数？」，真分数填1假分数填2"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分子3，分母8，3<8",
              "分子3，分母8，3>8",
              "分子8，分母3",
              "分子等于分母"
            ],
            "answer": "分子3，分母8，3<8",
            "explain": "关键是比较分子和分母的大小"
          },
          {
            "q": "🧩 3/8是真还是假？",
            "choices": [
              "分子<分母，是真分数，填1",
              "分子>分母，是假分数",
              "分子=分母，是假分数",
              "无法判断"
            ],
            "answer": "分子<分母，是真分数，填1",
            "explain": "真分数：分子<分母。3<8，所以3/8是真分数，填1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中8份取3份，不到一半，是真分数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "分子3<分母8，所以3/8是真分数（小于1）",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "真分数：分子<分母（小于1）。假分数：分子≥分母（大于或等于1）。带分数=整数+真分数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红发现1/2和2/4大小一样。老师告诉她分数的基本性质。",
        "question": "1/2等于几分之几？(填分子,分母是4)",
        "formula": "1/2 = ?/4",
        "answer": 2,
        "choices": [
          2,
          1,
          4,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 2,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数的基本性质",
        "difficulty": 2,
        "hint": "分子分母同乘2",
        "variants": [
          {
            "question": "1/3=?/6(填分子)？",
            "formula": "1/3=?/6",
            "answer": 2,
            "hint": "同乘2"
          },
          {
            "question": "3/4=?/8(填分子)？",
            "formula": "3/4=?/8",
            "answer": 6,
            "hint": "同乘2"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "1/2等于几分之几（填分子，分母4）",
              "1/2等于多少",
              "2/4约分",
              "1/4等于多少"
            ],
            "answer": "1/2等于几分之几（填分子，分母4）",
            "explain": "题目问「1/2等于几分之几？」，分母是4，要求填分子"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "1/2和2/4大小一样",
              "1/2和1/4大小一样",
              "1/2和3/4大小一样",
              "1/2和1/2大小一样"
            ],
            "answer": "1/2和2/4大小一样",
            "explain": "分数的基本性质：分子分母同乘相同的数大小不变"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "分母2→4乘2，分子1→2也乘2，填2",
              "分母加2，分子也加2，填3",
              "分子不变填1",
              "分母乘4填4"
            ],
            "answer": "分母2→4乘2，分子1→2也乘2，填2",
            "explain": "1/2=(1×2)/(2×2)=2/4，分子是2"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中2/4和1/2涂色部分一样大",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "分子分母同乘2：1/2=(1×2)/(2×2)=2/4，分子是2",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分数基本性质：分子分母同时乘或除以相同的数（0除外），大小不变",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红找12和18的最大公因数。她列出12的因数和18的因数。",
        "question": "12和18的最大公因数是几？",
        "formula": "gcd(12,18) = ?",
        "answer": 6,
        "choices": [
          6,
          3,
          2,
          36
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 30,
          "parts": [
            {
              "val": 12,
              "color": "#00A896"
            },
            {
              "val": 18,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "最大公因数",
        "difficulty": 2,
        "hint": "12和18的公共因数中最大的是6",
        "variants": [
          {
            "question": "8和12最大公因数？",
            "formula": "gcd(8,12)=?",
            "answer": 4,
            "hint": "公共因数最大"
          },
          {
            "question": "10和15最大公因数？",
            "formula": "gcd(10,15)=?",
            "answer": 5,
            "hint": "公共因数最大"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "12和18的最大公因数",
              "12和18的最小公倍数",
              "12和18的和",
              "12和18的公因数有几个"
            ],
            "answer": "12和18的最大公因数",
            "explain": "题目问「12和18的最大公因数是几？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "12的因数有1,2,3,4,6,12；18的因数有1,2,3,6,9,18",
              "12=3×4",
              "18=2×9",
              "12+18=30"
            ],
            "answer": "12的因数有1,2,3,4,6,12；18的因数有1,2,3,6,9,18",
            "explain": "需要找出两个数公共的因数"
          },
          {
            "q": "🧩 最大公因数是几？",
            "choices": [
              "公共因数1,2,3,6中最大是6",
              "公共因数中最大是3",
              "公共因数中最大是2",
              "公共因数中最大是1"
            ],
            "answer": "公共因数1,2,3,6中最大是6",
            "explain": "12和18的公因数有1、2、3、6，其中最大的是6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中12和18的韦恩图，公共部分有1、2、3、6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "12和18的公因数有1、2、3、6，其中最大的是6",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "最大公因数：两个数公共因数中最大的。互质→最大公因数1；成倍数关系→小的那个数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红要把分数6/8化成最简分数。她用分子分母同时除以2。",
        "question": "6/8约分后分子是几？(分母是4)",
        "formula": "6/8 = ?/4",
        "answer": 3,
        "choices": [
          3,
          6,
          4,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "约分",
        "difficulty": 2,
        "hint": "同除以最大公因数2",
        "variants": [
          {
            "question": "4/6约分分子(分母3)？",
            "formula": "4/6=?/3",
            "answer": 2,
            "hint": "同除以2"
          },
          {
            "question": "9/12约分分子(分母4)？",
            "formula": "9/12=?/4",
            "answer": 3,
            "hint": "同除以3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "6/8约分后分子是几（分母4）",
              "6/8约分后分母是几",
              "6/8等于多少",
              "6/8是真还是假"
            ],
            "answer": "6/8约分后分子是几（分母4）",
            "explain": "题目问「6/8约分后分子是几？」，分母是4"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "6/8，最大公因数是2",
              "6/8，最大公因数是6",
              "6/8，最大公因数是8",
              "6/8，最大公因数是4"
            ],
            "answer": "6/8，最大公因数是2",
            "explain": "6和8的最大公因数是2"
          },
          {
            "q": "🧩 约分后分子是几？",
            "choices": [
              "6÷2=3，分子是3",
              "6÷3=2，分子是2",
              "6÷6=1，分子是1",
              "6不变，分子是6"
            ],
            "answer": "6÷2=3，分子是3",
            "explain": "分子分母同除以2：6/8=(6÷2)/(8÷2)=3/4，分子是3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中3/4和6/8涂色部分一样大",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "6和8的最大公因数是2，同除以2：6/8=(6÷2)/(8÷2)=3/4，分子是3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "约分：分子分母同时除以最大公因数，化成最简分数。最简分数分子分母只有公因数1",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红找4和6的最小公倍数。她在数轴上找它们第一个共同的倍数。",
        "question": "4和6的最小公倍数是几？",
        "formula": "lcm(4,6) = ?",
        "answer": 12,
        "choices": [
          12,
          24,
          2,
          6
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 24,
          "points": [
            {
              "pos": 4,
              "label": "4",
              "color": "#00A896"
            },
            {
              "pos": 6,
              "label": "6",
              "color": "#F5B800"
            },
            {
              "pos": 8,
              "label": "4",
              "color": "#00A896"
            },
            {
              "pos": 12,
              "label": "4和6",
              "color": "#FB923C"
            }
          ],
          "highlight": [
            0,
            24
          ]
        },
        "knowledge": "最小公倍数",
        "difficulty": 2,
        "hint": "第一个共同倍数",
        "variants": [
          {
            "question": "3和4最小公倍数？",
            "formula": "lcm(3,4)=?",
            "answer": 12,
            "hint": "第一个共同倍数"
          },
          {
            "question": "5和10最小公倍数？",
            "formula": "lcm(5,10)=?",
            "answer": 10,
            "hint": "第一个共同倍数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "4和6的最小公倍数",
              "4和6的最大公因数",
              "4和6的积",
              "4和6的公倍数有几个"
            ],
            "answer": "4和6的最小公倍数",
            "explain": "题目问「4和6的最小公倍数是几？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "4的倍数有4,8,12...；6的倍数有6,12...",
              "4的因数有1,2,4",
              "6的因数有1,2,3,6",
              "4+6=10"
            ],
            "answer": "4的倍数有4,8,12...；6的倍数有6,12...",
            "explain": "需要找两个数第一个共同的倍数"
          },
          {
            "q": "🧩 最小公倍数是几？",
            "choices": [
              "第一个共同倍数是12",
              "第一个共同倍数是24",
              "第一个共同倍数是6",
              "第一个共同倍数是4"
            ],
            "answer": "第一个共同倍数是12",
            "explain": "4的倍数：4,8,12...；6的倍数：6,12...；第一个共同的是12"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上4的倍数和6的倍数，第一个重合的是12",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "4的倍数：4,8,12,16...；6的倍数：6,12,18...；第一个共同的是12",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "最小公倍数：两个数公共倍数中最小的。互质→两数之积；成倍数关系→大的那个数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红要把1/2和1/3通分。她找到分母2和3的最小公倍数6。",
        "question": "1/2通分后分母是6，分子是几？",
        "formula": "1/2 = ?/6",
        "answer": 3,
        "choices": [
          3,
          1,
          6,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 6,
          "color": "#00A896"
        },
        "knowledge": "通分",
        "difficulty": 3,
        "hint": "同乘3",
        "variants": [
          {
            "question": "1/3通分分母6分子是？",
            "formula": "1/3=?/6",
            "answer": 2,
            "hint": "同乘2"
          },
          {
            "question": "1/4通分分母8分子是？",
            "formula": "1/4=?/8",
            "answer": 2,
            "hint": "同乘2"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "1/2通分后分子是几（分母6）",
              "1/2约分后分子是几",
              "1/6等于多少",
              "1/2等于多少"
            ],
            "answer": "1/2通分后分子是几（分母6）",
            "explain": "题目问「1/2通分后分母是6，分子是几？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "1/2通分成分母6",
              "1/2通分成分母4",
              "1/3通分成分母6",
              "1/6约分"
            ],
            "answer": "1/2通分成分母6",
            "explain": "分母2变成6，需要找出乘的数"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "分母2→6乘3，分子1→3也乘3，填3",
              "分母2→6加4，分子也加4，填5",
              "分子不变填1",
              "分母乘6填6"
            ],
            "answer": "分母2→6乘3，分子1→3也乘3，填3",
            "explain": "1/2=(1×3)/(2×3)=3/6，分子是3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中3/6和1/2涂色部分一样大",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "分母2→6乘3，分子同乘3：1/2=(1×3)/(2×3)=3/6，分子是3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "通分：把异分母分数化成同分母分数。找分母的最小公倍数做公分母，分子分母同乘相同的数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红要把0.25化成分数。她知道0.25=25/100。",
        "question": "25/100约分后分母是几？(分子是1)",
        "formula": "0.25 = 1/?",
        "answer": 4,
        "choices": [
          4,
          100,
          25,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数和小数的互化",
        "difficulty": 2,
        "hint": "0.25=1/4",
        "variants": [
          {
            "question": "0.5=1/?(填分母)？",
            "formula": "0.5=1/?",
            "answer": 2,
            "hint": "0.5=1/2"
          },
          {
            "question": "0.2=1/?(填分母)？",
            "formula": "0.2=1/?",
            "answer": 5,
            "hint": "0.2=1/5"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "0.25化成分数1/?（填分母）",
              "0.25化成百分数",
              "0.25等于多少",
              "1/4化成小数"
            ],
            "answer": "0.25化成分数1/?（填分母）",
            "explain": "题目问「0.25化成分数，分子是1，分母是几？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "0.25=25/100",
              "0.25=25",
              "0.25=2/5",
              "0.25=1/2"
            ],
            "answer": "0.25=25/100",
            "explain": "小数化分数：两位小数分母是100"
          },
          {
            "q": "🧩 约分后分母是几？",
            "choices": [
              "25/100同除以25=1/4，分母是4",
              "25/100同除以5=5/20，分母是20",
              "25/100不约分，分母是100",
              "25/100同除以25=1/4，分母是1"
            ],
            "answer": "25/100同除以25=1/4，分母是4",
            "explain": "0.25=25/100，约分后=1/4，分母是4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中1/4涂色部分表示0.25",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "0.25=25/100，约分（同除以25）=1/4，分母是4",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "小数化分数：看小数位数（两位→分母100），再约分。0.25=1/4，0.5=1/2，0.2=1/5",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把一个三角形绕一个顶点旋转90度。老师问她旋转后图形什么不变。",
        "question": "旋转后图形什么不变？(形状大小填1,位置填2)",
        "formula": "旋转不变 → ? (1形状/2位置)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rotation",
          "params": {
            "angle": 90,
            "direction": "clockwise"
          }
        },
        "knowledge": "旋转",
        "difficulty": 2,
        "hint": "旋转形状大小不变位置变",
        "variants": [
          {
            "question": "旋转90度需要什么(1方向角度填1,只方向填2)？",
            "formula": "旋转需?",
            "answer": 1,
            "hint": "方向和角度"
          },
          {
            "question": "旋转180度后图形和原图(1相同填1,不同填2)？",
            "formula": "180°→?",
            "answer": 1,
            "hint": "180度旋转后相同"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "旋转后图形什么不变",
              "旋转后图形什么变了",
              "旋转的角度是多少",
              "旋转中心在哪里"
            ],
            "answer": "旋转后图形什么不变",
            "explain": "题目问「旋转后图形什么不变？」，形状大小填1，位置填2"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "三角形绕顶点旋转90度",
              "三角形平移了",
              "三角形放大了",
              "三角形缩小了"
            ],
            "answer": "三角形绕顶点旋转90度",
            "explain": "旋转是图形运动的一种"
          },
          {
            "q": "🧩 旋转后什么不变？",
            "choices": [
              "形状和大小不变，填1",
              "位置不变，填2",
              "颜色不变",
              "方向不变"
            ],
            "answer": "形状和大小不变，填1",
            "explain": "旋转不改变图形的形状和大小，只改变位置，填1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中三角形旋转90度后，形状大小没变，只是位置变了",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "旋转三要素：旋转中心、方向（顺/逆时针）、角度。旋转后形状大小不变，位置改变",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "旋转不改变图形的形状和大小（全等变换）。描述旋转需要：绕哪个点、什么方向、转多少度",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "美术课上小红用基本图形通过旋转和平移设计了一个漂亮的图案。",
        "question": "设计图案用到的运动有旋转和什么？(平移填1,缩放填2)",
        "formula": "旋转 + ? (1平移/2缩放)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "pattern",
          "params": {
            "type": "rotate_translate"
          }
        },
        "knowledge": "利用旋转和平移设计图案",
        "difficulty": 2,
        "hint": "旋转和平移设计图案",
        "variants": [
          {
            "question": "风车图案主要用什么运动(1旋转2平移)？",
            "formula": "风车→?",
            "answer": 1,
            "hint": "旋转"
          },
          {
            "question": "花边图案主要用什么运动(1旋转2平移)？",
            "formula": "花边→?",
            "answer": 2,
            "hint": "平移"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "设计图案用到旋转和什么",
              "设计图案用到什么颜色",
              "图案有多大",
              "图案是什么形状"
            ],
            "answer": "设计图案用到旋转和什么",
            "explain": "题目问「设计图案用到的运动有旋转和什么？」，平移填1缩放填2"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "用基本图形通过旋转和平移设计图案",
              "用基本图形通过放大设计图案",
              "用颜色设计图案",
              "用线条设计图案"
            ],
            "answer": "用基本图形通过旋转和平移设计图案",
            "explain": "图案设计常用旋转和平移组合"
          },
          {
            "q": "🧩 另一种运动是什么？",
            "choices": [
              "平移，填1",
              "缩放，填2",
              "翻转，填3",
              "拉伸，填0"
            ],
            "answer": "平移，填1",
            "explain": "设计图案常用旋转和平移。旋转改变方向，平移改变位置，填1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中基本图形通过旋转和平移组合成漂亮图案",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "设计图案常用旋转和平移。旋转改变方向，平移改变位置",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "图案设计：用基本图形通过旋转、平移、轴对称组合，可以创造各种美丽图案",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红吃了一个蛋糕的1/4，又吃了2/4。她算一共吃了多少。",
        "question": "1/4+2/4等于几分之几？(填分子,分母是4)",
        "formula": "1/4 + 2/4 = ?/4",
        "answer": 3,
        "choices": [
          3,
          2,
          1,
          4
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "同分母分数加减法",
        "difficulty": 2,
        "hint": "分母不变分子相加",
        "variants": [
          {
            "question": "2/5+1/5=?/5(填分子)？",
            "formula": "2/5+1/5=?/5",
            "answer": 3,
            "hint": "分母不变"
          },
          {
            "question": "3/7+2/7=?/7(填分子)？",
            "formula": "3/7+2/7=?/7",
            "answer": 5,
            "hint": "分母不变"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "1/4+2/4等于多少（填分子，分母4）",
              "1/4+2/4等于多少（填分母）",
              "1/4+1/4等于多少",
              "2/4+1/4等于多少"
            ],
            "answer": "1/4+2/4等于多少（填分子，分母4）",
            "explain": "题目问「1/4+2/4等于几分之几？」，分母是4，要求填分子"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "同分母4，分子1和2相加",
              "分母不同需要通分",
              "分子是1和4",
              "分母是1和2"
            ],
            "answer": "同分母4，分子1和2相加",
            "explain": "同分母分数加法：分母不变，分子相加"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "1+2=3，分子是3",
              "1×2=2，分子是2",
              "1+2+4=7，分子是7",
              "4-2=2，分子是2"
            ],
            "answer": "1+2=3，分子是3",
            "explain": "同分母分数加法：分母不变，分子相加。1/4+2/4=(1+2)/4=3/4，分子是3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中1/4+2/4=3/4，涂色部分合起来是3份",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "同分母分数相加：分母不变，分子相加。1/4+2/4=(1+2)/4=3/4，分子是3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "同分母分数加减法：分母不变，分子相加减。结果能约分的要约分",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算1/2+1/3。她先通分变成3/6+2/6。",
        "question": "3/6+2/6等于几分之几？(填分子,分母是6)",
        "formula": "3/6 + 2/6 = ?/6",
        "answer": 5,
        "choices": [
          5,
          3,
          2,
          6
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 5,
          "total": 6,
          "color": "#00A896"
        },
        "knowledge": "异分母分数加减法",
        "difficulty": 3,
        "hint": "先通分再相加",
        "variants": [
          {
            "question": "1/4+1/2=?/4(填分子)？",
            "formula": "1/4+2/4=?/4",
            "answer": 3,
            "hint": "先通分"
          },
          {
            "question": "1/3+1/6=?/6(填分子)？",
            "formula": "2/6+1/6=?/6",
            "answer": 3,
            "hint": "先通分"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "3/6+2/6等于多少（填分子，分母6）",
              "1/2+1/3等于多少",
              "3/6+2/6等于多少（填分母）",
              "1/2×1/3等于多少"
            ],
            "answer": "3/6+2/6等于多少（填分子，分母6）",
            "explain": "题目是1/2+1/3先通分成3/6+2/6，要求填分子"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "1/2+1/3通分成3/6+2/6，同分母6",
              "1/2+1/3分母不同直接加",
              "3/6+2/6分母不同",
              "1/2和1/3相乘"
            ],
            "answer": "1/2+1/3通分成3/6+2/6，同分母6",
            "explain": "异分母分数先通分再相加"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "3+2=5，分子是5",
              "3×2=6，分子是6",
              "3-2=1，分子是1",
              "3+2+6=11，分子是11"
            ],
            "answer": "3+2=5，分子是5",
            "explain": "通分后按同分母加法：3/6+2/6=(3+2)/6=5/6，分子是5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中3/6+2/6=5/6，涂色部分合起来是5份",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "异分母分数先通分：1/2=3/6，1/3=2/6。再按同分母加：3/6+2/6=5/6，分子是5",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "异分母分数加减法：先通分（找最小公倍数做公分母），再按同分母分数计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算1/2+1/3-1/6。她先通分成同分母。",
        "question": "3/6+2/6-1/6等于几分之几？(填分子,分母是6)",
        "formula": "3/6+2/6-1/6=?/6",
        "answer": 4,
        "choices": [
          4,
          6,
          5,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 4,
          "total": 6,
          "color": "#00A896"
        },
        "knowledge": "分数加减混合运算",
        "difficulty": 3,
        "hint": "从左到右依次算",
        "variants": [
          {
            "question": "1/2-1/4+1/4=?/4(填分子)？",
            "formula": "2/4-1/4+1/4=?/4",
            "answer": 2,
            "hint": "依次算"
          },
          {
            "question": "5/8-1/8+2/8=?/8(填分子)？",
            "formula": "5/8-1/8+2/8=?/8",
            "answer": 6,
            "hint": "依次算"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "3/6+2/6-1/6等于多少（填分子，分母6）",
              "3/6+2/6等于多少",
              "3/6-1/6等于多少",
              "2/6-1/6等于多少"
            ],
            "answer": "3/6+2/6-1/6等于多少（填分子，分母6）",
            "explain": "题目是分数加减混合运算，要求填分子"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "同分母6，先加3+2再减1",
              "分母不同需要通分",
              "先算减法再算加法",
              "先算乘法"
            ],
            "answer": "同分母6，先加3+2再减1",
            "explain": "同分母混合运算，从左到右依次算"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "3+2-1=4，分子是4",
              "3×2-1=5，分子是5",
              "3+2=5，分子是5",
              "3-2+1=2，分子是2"
            ],
            "answer": "3+2-1=4，分子是4",
            "explain": "从左到右算：3+2-1=4，结果是4/6，分子是4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中先加3/6+2/6=5/6，再减1/6=4/6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "同分母分数混合运算：分母不变，分子从左到右算：3+2-1=4，结果是4/6",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分数加减混合运算顺序同整数：从左到右，有括号先算括号。结果能约分的要约分（4/6=2/3）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红看折线统计图，发现温度从早上到中午一直在升高。她知道折线统计图的特点。",
        "question": "折线统计图最大的特点是什么？(看趋势填1,比多少填2)",
        "formula": "折线→? (1看趋势/2比多少)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 10,
          "points": [
            {
              "pos": 2,
              "label": "升",
              "color": "#00A896"
            },
            {
              "pos": 5,
              "label": "升",
              "color": "#F5B800"
            },
            {
              "pos": 8,
              "label": "升",
              "color": "#FB923C"
            }
          ],
          "highlight": [
            0,
            10
          ]
        },
        "knowledge": "单式折线统计图",
        "difficulty": 2,
        "hint": "折线统计图看变化趋势",
        "variants": [
          {
            "question": "条形统计图最大特点(1看趋势2比多少)？",
            "formula": "条形→?",
            "answer": 2,
            "hint": "条形比多少"
          },
          {
            "question": "要看一周气温变化用什么图(1折线2条形)？",
            "formula": "气温→?",
            "answer": 1,
            "hint": "折线看趋势"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "折线统计图最大的特点",
              "条形统计图的特点",
              "扇形统计图的特点",
              "统计图的颜色"
            ],
            "answer": "折线统计图最大的特点",
            "explain": "题目问「折线统计图最大的特点是什么？」，看趋势填1比多少填2"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "温度从早到中午一直在升高，用折线表示",
              "温度用数字表示",
              "温度用条形表示",
              "温度用扇形表示"
            ],
            "answer": "温度从早到中午一直在升高，用折线表示",
            "explain": "折线统计图用线段连接数据点，能看出变化"
          },
          {
            "q": "🧩 折线统计图最大特点是什么？",
            "choices": [
              "看变化趋势，填1",
              "比数量的多少，填2",
              "看部分占整体比例，填3",
              "看颜色，填0"
            ],
            "answer": "看变化趋势，填1",
            "explain": "折线统计图最大特点是能看出数据的增减变化趋势，填1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中折线从低到高上升，表示数据在增加",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "折线统计图用点标数据再连线，最大特点是能看出数据的增减变化趋势",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "条形统计图比多少；折线统计图看趋势；扇形统计图看占比。根据需要选择合适的统计图",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红看复式折线统计图，图中有两条线分别表示甲市和乙市的气温。",
        "question": "复式折线统计图可以同时表示几组数据？",
        "formula": "复式折线 → ?组",
        "answer": 2,
        "choices": [
          2,
          1,
          3,
          4
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 10,
          "points": [
            {
              "pos": 3,
              "label": "甲市",
              "color": "#00A896"
            },
            {
              "pos": 5,
              "label": "乙市",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            10
          ]
        },
        "knowledge": "复式折线统计图",
        "difficulty": 2,
        "hint": "复式可对比两组数据",
        "variants": [
          {
            "question": "对比两个城市气温用什么图(1复式折线2单式)？",
            "formula": "对比→?",
            "answer": 1,
            "hint": "复式折线"
          },
          {
            "question": "只看一个城市气温用什么(1单式2复式)？",
            "formula": "一个城市→?",
            "answer": 1,
            "hint": "单式折线"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "复式折线统计图可以同时表示几组数据",
              "单式折线统计图表示几组数据",
              "条形统计图表示几组数据",
              "扇形统计图表示几组数据"
            ],
            "answer": "复式折线统计图可以同时表示几组数据",
            "explain": "题目问「复式折线统计图可以同时表示几组数据？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "图中有两条线分别表示甲市和乙市的气温",
              "图中只有一条线",
              "图中有三个柱子",
              "图中有一个扇形"
            ],
            "answer": "图中有两条线分别表示甲市和乙市的气温",
            "explain": "复式=多组数据同时表示，图中有两条折线"
          },
          {
            "q": "🧩 可以同时表示几组数据？",
            "choices": [
              "2组（或多组），填2",
              "1组，填1",
              "3组，填3",
              "4组，填4"
            ],
            "answer": "2组（或多组），填2",
            "explain": "复式折线统计图可以同时表示2组（或多组）数据，方便对比，填2"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有两条折线，分别表示甲市和乙市的气温",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "复式折线统计图可以同时表示2组（或多组）数据，方便对比",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "单式折线图看一组数据的变化；复式折线图同时看多组数据并对比。复式图需要图例区分不同数据",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "有5瓶药其中1瓶较轻是次品。小红用天平找次品。",
        "question": "5瓶中找1瓶次品至少称几次？",
        "formula": "5瓶 → 至少 ? 次",
        "answer": 2,
        "choices": [
          2,
          1,
          3,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "balance",
          "params": {
            "items": 5
          }
        },
        "knowledge": "找次品",
        "difficulty": 3,
        "hint": "分成2-2-1称第一次",
        "variants": [
          {
            "question": "3瓶找次品至少几次？",
            "formula": "3瓶→?",
            "answer": 1,
            "hint": "1对1称"
          },
          {
            "question": "9瓶找次品至少几次？",
            "formula": "9瓶→?",
            "answer": 2,
            "hint": "分3-3-3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "5瓶中找1瓶次品至少称几次",
              "5瓶中有几瓶次品",
              "5瓶一共有多少",
              "5瓶的重量"
            ],
            "answer": "5瓶中找1瓶次品至少称几次",
            "explain": "题目问「5瓶中找1瓶次品至少称几次？」，用天平称"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "5瓶药，1瓶较轻是次品，用天平",
              "5瓶都是次品",
              "5瓶都一样重",
              "5瓶中3瓶是次品"
            ],
            "answer": "5瓶药，1瓶较轻是次品，用天平",
            "explain": "5瓶中只有1瓶次品（较轻），用天平找出来"
          },
          {
            "q": "🧩 至少称几次？",
            "choices": [
              "分成2-2-1称，至少2次",
              "分成5份各1个，至少5次",
              "一次就能找到",
              "至少3次"
            ],
            "answer": "分成2-2-1称，至少2次",
            "explain": "分成2-2-1三组：先称2vs2，不平衡再称轻的那边2瓶，至少2次"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "天平图：5瓶分成2-2-1三组，先称2和2",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "第一次2vs2：平衡则次品在剩下1瓶；不平衡则次品在轻的那边2瓶中，再称1次。至少2次",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "找次品策略：把物品尽量平均分成3份。n个物品至少称⌈log₃n⌉次",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红从前面、上面、左面看一个由小正方体搭成的立体图形。她好奇从不同方向看会看到什么形状。",
        "question": "从前面看一个长方体能看到几个面？",
        "formula": "从前面看 → ?个面",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "view": "front"
          }
        },
        "knowledge": "从三个方向观察物体",
        "difficulty": 2,
        "hint": "从一个方向看最多看到3个面",
        "variants": [
          {
            "question": "从前面上面左面看一共看到几个不同面？",
            "formula": "三视图→?个面",
            "answer": 3,
            "hint": "三个方向各一个面"
          },
          {
            "question": "从一个方向看最多看到几个面？",
            "formula": "一个方向→?面",
            "answer": 3,
            "hint": "最多3个面"
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
            "explain": "题目说「小红从前面、上面、左面看一个由小正方体搭成的立体图形。她好奇从不同方向看会看到什么形状。」，问的是「从前面看一个长方体能看到几个面？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1",
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
            "explain": "计算：从前面看 → ?个面=1"
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
            "text": "从前面看 → ?个面=1",
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
        "scene": "小红从前面、上面、左面看一个由小正方体搭成的立体图形。她好奇从不同方向看会看到什么形状。",
        "question": "从前面看一个长方体能看到几个面？",
        "formula": "从前面看 → ?个面",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "view": "front"
          }
        },
        "knowledge": "从三个方向观察物体",
        "difficulty": 2,
        "hint": "从一个方向看最多看到3个面",
        "variants": [
          {
            "question": "从前面上面左面看一共看到几个不同面？",
            "formula": "三视图→?个面",
            "answer": 3,
            "hint": "三个方向各一个面"
          },
          {
            "question": "从一个方向看最多看到几个面？",
            "formula": "一个方向→?面",
            "answer": 3,
            "hint": "最多3个面"
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
            "explain": "题目说「小红从前面、上面、左面看一个由小正方体搭成的立体图形。她好奇从不同方向看会看到什么形状。」，问的是「从前面看一个长方体能看到几个面？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1",
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
            "explain": "计算：从前面看 → ?个面=1"
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
            "text": "从前面看 → ?个面=1",
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
        "scene": "小红搭了一个立体图形，从上面看是9个小正方形排成一排。她想知道至少用了几个小正方体。",
        "question": "从上看9个正方形一排，至少用了几个小正方体？",
        "formula": "至少 ? 个",
        "answer": 9,
        "choices": [
          9,
          2,
          4,
          6
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cubes",
          "params": {
            "topView": [
              1,
              1,
              1
            ]
          }
        },
        "knowledge": "根据三视图拼摆小正方体",
        "difficulty": 3,
        "hint": "每列至少一个",
        "variants": [
          {
            "question": "从上看2×2共4格至少几个？",
            "formula": "2×2至少?",
            "answer": 4,
            "hint": "每格至少一个"
          },
          {
            "question": "从上看9×2共6格至少几个？",
            "formula": "9×2至少?",
            "answer": 6,
            "hint": "每格至少一个"
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
            "explain": "题目说「小红搭了一个立体图形，从上面看是9个小正方形排成一排。她想知道至少用了几个小正方体。」，问的是「从上看9个正方形一排，至少用了几个小正方体？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：9",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：9",
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
            "explain": "计算：至少 ? 个=9"
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
            "text": "至少 ? 个=9",
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
        "scene": "小红搭了一个立体图形，从上面看是11个小正方形排成一排。她想知道至少用了几个小正方体。",
        "question": "从上看11个正方形一排，至少用了几个小正方体？",
        "formula": "至少 ? 个",
        "answer": 11,
        "choices": [
          11,
          2,
          4,
          6
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cubes",
          "params": {
            "topView": [
              1,
              1,
              1
            ]
          }
        },
        "knowledge": "根据三视图拼摆小正方体",
        "difficulty": 3,
        "hint": "每列至少一个",
        "variants": [
          {
            "question": "从上看2×2共4格至少几个？",
            "formula": "2×2至少?",
            "answer": 4,
            "hint": "每格至少一个"
          },
          {
            "question": "从上看11×2共6格至少几个？",
            "formula": "11×2至少?",
            "answer": 6,
            "hint": "每格至少一个"
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
            "explain": "题目说「小红搭了一个立体图形，从上面看是11个小正方形排成一排。她想知道至少用了几个小正方体。」，问的是「从上看11个正方形一排，至少用了几个小正方体？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：11",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：11",
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
            "explain": "计算：至少 ? 个=11"
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
            "text": "至少 ? 个=11",
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
        "scene": "小红把15个苹果平均分给5个小朋友。老师告诉15÷5=4，所以5和4都是15的因数。",
        "question": "15有几个因数？",
        "formula": "15的因数个数 = ?",
        "answer": 6,
        "choices": [
          6,
          5,
          5,
          4
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 36,
          "parts": [
            {
              "label": "1×12",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "2×6",
              "val": 12,
              "color": "#F5B800"
            },
            {
              "label": "3×4",
              "val": 12,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "因数和倍数",
        "difficulty": 2,
        "hint": "1,2,4,5,6,15共6个",
        "variants": [
          {
            "question": "6有几个因数？",
            "formula": "6因数=?",
            "answer": 5,
            "hint": "1,2,4,6"
          },
          {
            "question": "8有几个因数？",
            "formula": "8因数=?",
            "answer": 5,
            "hint": "1,2,5,8"
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
            "explain": "题目说「小红把15个苹果平均分给5个小朋友。老师告诉15÷5=4，所以5和4都是15的因数。」，问的是「15有几个因数？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：15",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：15",
            "explain": "从题目中找到的关键数是：15"
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
            "explain": "计算：15的因数个数 = ?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表12，合起来就是36",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "15的因数个数 = ?=6",
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
        "scene": "小红把15个苹果平均分给6个小朋友。老师告诉15÷6=3，所以6和3都是15的因数。",
        "question": "15有几个因数？",
        "formula": "15的因数个数 = ?",
        "answer": 6,
        "choices": [
          6,
          6,
          5,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 36,
          "parts": [
            {
              "label": "1×12",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "2×6",
              "val": 12,
              "color": "#F5B800"
            },
            {
              "label": "3×4",
              "val": 12,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "因数和倍数",
        "difficulty": 2,
        "hint": "1,2,3,6,6,15共6个",
        "variants": [
          {
            "question": "6有几个因数？",
            "formula": "6因数=?",
            "answer": 6,
            "hint": "1,2,3,6"
          },
          {
            "question": "8有几个因数？",
            "formula": "8因数=?",
            "answer": 6,
            "hint": "1,2,6,8"
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
            "explain": "题目说「小红把15个苹果平均分给6个小朋友。老师告诉15÷6=3，所以6和3都是15的因数。」，问的是「15有几个因数？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：15",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：15",
            "explain": "从题目中找到的关键数是：15"
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
            "explain": "计算：15的因数个数 = ?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表12，合起来就是36",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "15的因数个数 = ?=6",
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
        "scene": "小红观察一个长方体纸盒。老师问她长方体有几个面。",
        "question": "长方体有几个面？",
        "formula": "长方体面数 = ?",
        "answer": 6,
        "choices": [
          6,
          4,
          8,
          12
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {}
        },
        "knowledge": "长方体的认识",
        "difficulty": 1,
        "hint": "长方体6个面12条棱8个顶点",
        "variants": [
          {
            "question": "长方体有几条棱？",
            "formula": "棱=?",
            "answer": 12,
            "hint": "12条棱"
          },
          {
            "question": "长方体有几个顶点？",
            "formula": "顶点=?",
            "answer": 8,
            "hint": "8个顶点"
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
            "explain": "题目说「小红观察一个长方体纸盒。老师问她长方体有几个面。」，问的是「长方体有几个面？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：6",
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
            "explain": "计算：长方体面数 = ?=6"
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
            "text": "长方体面数 = ?=6",
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
        "scene": "小红观察一个长方体纸盒。老师问她长方体有几个面。",
        "question": "长方体有几个面？",
        "formula": "长方体面数 = ?",
        "answer": 6,
        "choices": [
          6,
          4,
          8,
          12
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {}
        },
        "knowledge": "长方体的认识",
        "difficulty": 1,
        "hint": "长方体6个面12条棱8个顶点",
        "variants": [
          {
            "question": "长方体有几条棱？",
            "formula": "棱=?",
            "answer": 12,
            "hint": "12条棱"
          },
          {
            "question": "长方体有几个顶点？",
            "formula": "顶点=?",
            "answer": 8,
            "hint": "8个顶点"
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
            "explain": "题目说「小红观察一个长方体纸盒。老师问她长方体有几个面。」，问的是「长方体有几个面？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：6",
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
            "explain": "计算：长方体面数 = ?=6"
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
            "text": "长方体面数 = ?=6",
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
        "scene": "小亮观察一个正方体魔方。老师问他正方体有什么特征。",
        "question": "正方体有几个面？",
        "formula": "正方体面数 = ?",
        "answer": 6,
        "choices": [
          6,
          4,
          8,
          12
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cube",
          "params": {}
        },
        "knowledge": "正方体的认识",
        "difficulty": 1,
        "hint": "正方体6个面都是正方形",
        "variants": [
          {
            "question": "正方体有几条棱？",
            "formula": "棱=?",
            "answer": 12,
            "hint": "12条棱等长"
          },
          {
            "question": "正方体每个面是什么形状？(正方形填1,长方形填2)",
            "formula": "面→?",
            "answer": 1,
            "hint": "都是正方形"
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
            "explain": "题目说「小亮观察一个正方体魔方。老师问他正方体有什么特征。」，问的是「正方体有几个面？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：6",
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
            "explain": "计算：正方体面数 = ?=6"
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
            "text": "正方体面数 = ?=6",
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
        "scene": "小亮观察一个正方体魔方。老师问他正方体有什么特征。",
        "question": "正方体有几个面？",
        "formula": "正方体面数 = ?",
        "answer": 6,
        "choices": [
          6,
          4,
          8,
          12
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cube",
          "params": {}
        },
        "knowledge": "正方体的认识",
        "difficulty": 1,
        "hint": "正方体6个面都是正方形",
        "variants": [
          {
            "question": "正方体有几条棱？",
            "formula": "棱=?",
            "answer": 12,
            "hint": "12条棱等长"
          },
          {
            "question": "正方体每个面是什么形状？(正方形填1,长方形填2)",
            "formula": "面→?",
            "answer": 1,
            "hint": "都是正方形"
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
            "explain": "题目说「小亮观察一个正方体魔方。老师问他正方体有什么特征。」，问的是「正方体有几个面？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：6",
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
            "explain": "计算：正方体面数 = ?=6"
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
            "text": "正方体面数 = ?=6",
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
        "scene": "小红要给一个长7cm宽4cm高4cm的长方体纸盒涂色。她算表面积。",
        "question": "表面积是多少平方厘米？",
        "formula": "2×(7×4+7×4+4×4) = ?",
        "answer": 144,
        "choices": [
          144,
          60,
          47,
          188
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "length": 5,
            "width": 4,
            "height": 3
          }
        },
        "knowledge": "长方体和正方体的表面积",
        "difficulty": 3,
        "hint": "2×(长×宽+长×高+宽×高)",
        "variants": [
          {
            "question": "长6宽4高2表面积？",
            "formula": "2×(24+12+8)=?",
            "answer": 88,
            "hint": "代入公式"
          },
          {
            "question": "正方体棱4表面积？",
            "formula": "6×4²=?",
            "answer": 54,
            "hint": "6a²"
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
            "explain": "题目说「小红要给一个长7cm宽4cm高4cm的长方体纸盒涂色。她算表面积。」，问的是「表面积是多少平方厘米？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：2 和 7",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：2 和 7",
            "explain": "从题目中找到的关键数是：2、7、4、7、4、4、4"
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
            "explain": "乘法：2×(7×4+7×4+4×4) = ?=94"
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
            "text": "2×(7×4+7×4+4×4) = ?=94",
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
        "scene": "小红要给一个长5cm宽6cm高4cm的长方体纸盒涂色。她算表面积。",
        "question": "表面积是多少平方厘米？",
        "formula": "2×(5×6+5×4+6×4) = ?",
        "answer": 148,
        "choices": [
          148,
          60,
          47,
          188
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "length": 5,
            "width": 4,
            "height": 3
          }
        },
        "knowledge": "长方体和正方体的表面积",
        "difficulty": 3,
        "hint": "2×(长×宽+长×高+宽×高)",
        "variants": [
          {
            "question": "长6宽6高2表面积？",
            "formula": "2×(26+12+8)=?",
            "answer": 88,
            "hint": "代入公式"
          },
          {
            "question": "正方体棱4表面积？",
            "formula": "6×4²=?",
            "answer": 54,
            "hint": "6a²"
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
            "explain": "题目说「小红要给一个长5cm宽6cm高4cm的长方体纸盒涂色。她算表面积。」，问的是「表面积是多少平方厘米？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：2 和 5",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：2 和 5",
            "explain": "从题目中找到的关键数是：2、5、6、5、4、6、4"
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
            "explain": "乘法：2×(5×6+5×4+6×4) = ?=94"
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
            "text": "2×(5×6+5×4+6×4) = ?=94",
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
        "scene": "老师拿出一个棱长1cm的正方体，告诉同学们它的体积是1cm³。小红想知道1dm³等于多少cm³。",
        "question": "1dm³等于多少cm³？",
        "formula": "1dm³ = ? cm³",
        "answer": 1000,
        "choices": [
          1000,
          100,
          10,
          10000
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cube",
          "params": {
            "side": 10,
            "unit": "cm",
            "label": "1dm=10cm"
          }
        },
        "knowledge": "体积和体积单位",
        "difficulty": 2,
        "hint": "1dm³=10×10×10=1000cm³",
        "variants": [
          {
            "question": "1m³=多少dm³？",
            "formula": "1m³=?dm³",
            "answer": 1000,
            "hint": "10×10×10"
          },
          {
            "question": "棱1cm正方体体积？",
            "formula": "1×1×1=?",
            "answer": 1,
            "hint": "1cm³"
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
            "explain": "题目说「老师拿出一个棱长1cm的正方体，告诉同学们它的体积是1cm³。小红想知道1dm³等于多少cm³。」，问的是「1dm³等于多少cm³？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1",
            "explain": "从题目中找到的关键数是：1"
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
            "explain": "计算：1dm³ = ? cm³=1000"
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
            "text": "1dm³ = ? cm³=1000",
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
        "scene": "老师拿出一个棱长1cm的正方体，告诉同学们它的体积是1cm³。小红想知道1dm³等于多少cm³。",
        "question": "1dm³等于多少cm³？",
        "formula": "1dm³ = ? cm³",
        "answer": 1000,
        "choices": [
          1000,
          100,
          10,
          10000
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cube",
          "params": {
            "side": 10,
            "unit": "cm",
            "label": "1dm=10cm"
          }
        },
        "knowledge": "体积和体积单位",
        "difficulty": 2,
        "hint": "1dm³=10×10×10=1000cm³",
        "variants": [
          {
            "question": "1m³=多少dm³？",
            "formula": "1m³=?dm³",
            "answer": 1000,
            "hint": "10×10×10"
          },
          {
            "question": "棱1cm正方体体积？",
            "formula": "1×1×1=?",
            "answer": 1,
            "hint": "1cm³"
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
            "explain": "题目说「老师拿出一个棱长1cm的正方体，告诉同学们它的体积是1cm³。小红想知道1dm³等于多少cm³。」，问的是「1dm³等于多少cm³？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1",
            "explain": "从题目中找到的关键数是：1"
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
            "explain": "计算：1dm³ = ? cm³=1000"
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
            "text": "1dm³ = ? cm³=1000",
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
        "scene": "小红算一个长5cm宽4cm高4cm的长方体体积。",
        "question": "体积是多少立方厘米？",
        "formula": "5 × 4 × 4 = ? cm³",
        "answer": 60,
        "choices": [
          60,
          12,
          94,
          23
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "length": 5,
            "width": 4,
            "height": 3
          }
        },
        "knowledge": "长方体和正方体的体积",
        "difficulty": 2,
        "hint": "长×宽×高",
        "variants": [
          {
            "question": "长6宽4高2体积？",
            "formula": "6×4×2=?",
            "answer": 48,
            "hint": "长宽高"
          },
          {
            "question": "正方体棱4体积？",
            "formula": "4×4×4=?",
            "answer": 27,
            "hint": "a³"
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
            "explain": "题目说「小红算一个长5cm宽4cm高4cm的长方体体积。」，问的是「体积是多少立方厘米？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：5 和 4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：5 和 4",
            "explain": "从题目中找到的关键数是：5、4、4"
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
            "explain": "乘法：5 × 4 × 4 = ? cm³=60"
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
            "text": "5 × 4 × 4 = ? cm³=60",
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
        "scene": "小红算一个长5cm宽4cm高4cm的长方体体积。",
        "question": "体积是多少立方厘米？",
        "formula": "5 × 4 × 4 = ? cm³",
        "answer": 60,
        "choices": [
          60,
          12,
          94,
          23
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cuboid",
          "params": {
            "length": 5,
            "width": 4,
            "height": 3
          }
        },
        "knowledge": "长方体和正方体的体积",
        "difficulty": 2,
        "hint": "长×宽×高",
        "variants": [
          {
            "question": "长6宽4高2体积？",
            "formula": "6×4×2=?",
            "answer": 48,
            "hint": "长宽高"
          },
          {
            "question": "正方体棱4体积？",
            "formula": "4×4×4=?",
            "answer": 27,
            "hint": "a³"
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
            "explain": "题目说「小红算一个长5cm宽4cm高4cm的长方体体积。」，问的是「体积是多少立方厘米？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：5 和 4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：5 和 4",
            "explain": "从题目中找到的关键数是：5、4、4"
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
            "explain": "乘法：5 × 4 × 4 = ? cm³=60"
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
            "text": "5 × 4 × 4 = ? cm³=60",
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
        "scene": "小红把一块蛋糕平均分成5份，吃了其中1份。老师问她吃了这块蛋糕的几分之几。",
        "question": "吃了这块蛋糕的几分之几？(填分子)",
        "formula": "1/? (填分子)",
        "answer": 1,
        "choices": [
          1,
          5,
          3,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数的意义",
        "difficulty": 1,
        "hint": "平均分成5份取1份",
        "variants": [
          {
            "question": "分成5份取2份分子是？",
            "formula": "2/?分子",
            "answer": 2,
            "hint": "取2份"
          },
          {
            "question": "分成6份取3份分子是？",
            "formula": "3/?分子",
            "answer": 3,
            "hint": "取3份"
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
            "explain": "题目说「小红把一块蛋糕平均分成5份，吃了其中1份。老师问她吃了这块蛋糕的几分之几。」，问的是「吃了这块蛋糕的几分之几？(填分子)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1",
            "explain": "从题目中找到的关键数是：1"
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
            "explain": "除法：1/? (填分子)=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成4份，取了1份，表示分数1/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/? (填分子)=1",
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
        "scene": "小红把一块蛋糕平均分成6份，吃了其中1份。老师问她吃了这块蛋糕的几分之几。",
        "question": "吃了这块蛋糕的几分之几？(填分子)",
        "formula": "1/? (填分子)",
        "answer": 1,
        "choices": [
          1,
          6,
          3,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数的意义",
        "difficulty": 1,
        "hint": "平均分成6份取1份",
        "variants": [
          {
            "question": "分成5份取2份分子是？",
            "formula": "2/?分子",
            "answer": 2,
            "hint": "取2份"
          },
          {
            "question": "分成6份取3份分子是？",
            "formula": "3/?分子",
            "answer": 3,
            "hint": "取3份"
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
            "explain": "题目说「小红把一块蛋糕平均分成6份，吃了其中1份。老师问她吃了这块蛋糕的几分之几。」，问的是「吃了这块蛋糕的几分之几？(填分子)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1",
            "explain": "从题目中找到的关键数是：1"
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
            "explain": "除法：1/? (填分子)=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成4份，取了1份，表示分数1/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/? (填分子)=1",
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
        "scene": "小红把11块饼平均分给4个小朋友。老师问她每人分到多少块。",
        "question": "11÷4等于几分之几？(填分子)",
        "formula": "11÷4 = ?/4 (填分子)",
        "answer": 11,
        "choices": [
          11,
          4,
          7,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 11,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数与除法",
        "difficulty": 2,
        "hint": "a÷b=a/b",
        "variants": [
          {
            "question": "2÷5=?/5(填分子)？",
            "formula": "2÷5=?/5",
            "answer": 2,
            "hint": "分子是被除数"
          },
          {
            "question": "5÷8=?/8(填分子)？",
            "formula": "5÷8=?/8",
            "answer": 5,
            "hint": "分子是被除数"
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
            "explain": "题目说「小红把11块饼平均分给4个小朋友。老师问她每人分到多少块。」，问的是「11÷4等于几分之几？(填分子)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：11 和 4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：11 和 4",
            "explain": "从题目中找到的关键数是：11、4、4"
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
            "explain": "除法：11÷4 = ?/4 (填分子)=11"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成4份，取了11份，表示分数11/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "11÷4 = ?/4 (填分子)=11",
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
        "scene": "小红把3块饼平均分给5个小朋友。老师问她每人分到多少块。",
        "question": "3÷5等于几分之几？(填分子)",
        "formula": "3÷5 = ?/5 (填分子)",
        "answer": 3,
        "choices": [
          3,
          5,
          7,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "分数与除法",
        "difficulty": 2,
        "hint": "a÷b=a/b",
        "variants": [
          {
            "question": "2÷5=?/5(填分子)？",
            "formula": "2÷5=?/5",
            "answer": 2,
            "hint": "分子是被除数"
          },
          {
            "question": "5÷8=?/8(填分子)？",
            "formula": "5÷8=?/8",
            "answer": 5,
            "hint": "分子是被除数"
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
            "explain": "题目说「小红把3块饼平均分给5个小朋友。老师问她每人分到多少块。」，问的是「3÷5等于几分之几？(填分子)」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：3、5、5"
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
            "explain": "除法：3÷5 = ?/5 (填分子)=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成5份，取了3份，表示分数3/5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3÷5 = ?/5 (填分子)=3",
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
        "scene": "小红看到分数3/9。老师问她这是真分数还是假分数。",
        "question": "3/9是真分数还是假分数？(真分数填1,假分数填3)",
        "formula": "3/9 → ? (1真/3假)",
        "answer": 1,
        "choices": [
          1,
          3,
          3,
          0
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 9,
          "color": "#00A896"
        },
        "knowledge": "真分数、假分数和带分数",
        "difficulty": 2,
        "hint": "分子<分母是真分数",
        "variants": [
          {
            "question": "7/4是真还是假(1真3假)？",
            "formula": "7/4→?",
            "answer": 3,
            "hint": "分子>分母是假"
          },
          {
            "question": "5/5是真还是假(1真3假)？",
            "formula": "5/5→?",
            "answer": 3,
            "hint": "分子=分母是假分数=1"
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
            "explain": "题目说「小红看到分数3/9。老师问她这是真分数还是假分数。」，问的是「3/9是真分数还是假分数？(真分数填1,假分数填3)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 9",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 9",
            "explain": "从题目中找到的关键数是：3、9、1、3"
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
            "explain": "除法：3/9 → ? (1真/3假)=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成9份，取了3份，表示分数3/9",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3/9 → ? (1真/3假)=1",
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
        "scene": "小红看到分数4/10。老师问她这是真分数还是假分数。",
        "question": "4/10是真分数还是假分数？(真分数填1,假分数填2)",
        "formula": "4/10 → ? (1真/2假)",
        "answer": 1,
        "choices": [
          1,
          2,
          4,
          0
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 4,
          "total": 10,
          "color": "#00A896"
        },
        "knowledge": "真分数、假分数和带分数",
        "difficulty": 2,
        "hint": "分子<分母是真分数",
        "variants": [
          {
            "question": "7/4是真还是假(1真2假)？",
            "formula": "7/4→?",
            "answer": 2,
            "hint": "分子>分母是假"
          },
          {
            "question": "5/5是真还是假(1真2假)？",
            "formula": "5/5→?",
            "answer": 2,
            "hint": "分子=分母是假分数=1"
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
            "explain": "题目说「小红看到分数4/10。老师问她这是真分数还是假分数。」，问的是「4/10是真分数还是假分数？(真分数填1,假分数填2)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4 和 10",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4 和 10",
            "explain": "从题目中找到的关键数是：4、10、1、2"
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
            "explain": "除法：4/10 → ? (1真/2假)=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成10份，取了4份，表示分数4/10",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "4/10 → ? (1真/2假)=1",
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
        "scene": "小红发现1/3和3/5大小一样。老师告诉她分数的基本性质。",
        "question": "1/3等于几分之几？(填分子,分母是5)",
        "formula": "1/3 = ?/5",
        "answer": 3,
        "choices": [
          3,
          1,
          5,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "分数的基本性质",
        "difficulty": 2,
        "hint": "分子分母同乘3",
        "variants": [
          {
            "question": "1/3=?/6(填分子)？",
            "formula": "1/3=?/6",
            "answer": 3,
            "hint": "同乘3"
          },
          {
            "question": "3/5=?/8(填分子)？",
            "formula": "3/5=?/8",
            "answer": 6,
            "hint": "同乘3"
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
            "explain": "题目说「小红发现1/3和3/5大小一样。老师告诉她分数的基本性质。」，问的是「1/3等于几分之几？(填分子,分母是5)」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：1、3、5"
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
            "explain": "除法：1/3 = ?/5=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成5份，取了3份，表示分数3/5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/3 = ?/5=3",
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
        "scene": "小红发现1/2和2/5大小一样。老师告诉她分数的基本性质。",
        "question": "1/2等于几分之几？(填分子,分母是5)",
        "formula": "1/2 = ?/5",
        "answer": 2,
        "choices": [
          2,
          1,
          5,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 2,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "分数的基本性质",
        "difficulty": 2,
        "hint": "分子分母同乘2",
        "variants": [
          {
            "question": "1/3=?/6(填分子)？",
            "formula": "1/3=?/6",
            "answer": 2,
            "hint": "同乘2"
          },
          {
            "question": "3/5=?/8(填分子)？",
            "formula": "3/5=?/8",
            "answer": 6,
            "hint": "同乘2"
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
            "explain": "题目说「小红发现1/2和2/5大小一样。老师告诉她分数的基本性质。」，问的是「1/2等于几分之几？(填分子,分母是5)」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：1、2、5"
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
            "explain": "除法：1/2 = ?/5=2"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成5份，取了2份，表示分数2/5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/2 = ?/5=2",
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
        "scene": "小红找12和21的最大公因数。她列出12的因数和21的因数。",
        "question": "12和21的最大公因数是几？",
        "formula": "gcd(12,21) = ?",
        "answer": 6,
        "choices": [
          6,
          3,
          2,
          36
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 30,
          "parts": [
            {
              "val": 18,
              "color": "#00A896"
            },
            {
              "val": 12,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "最大公因数",
        "difficulty": 2,
        "hint": "12和21的公共因数中最大的是6",
        "variants": [
          {
            "question": "8和12最大公因数？",
            "formula": "gcd(8,12)=?",
            "answer": 4,
            "hint": "公共因数最大"
          },
          {
            "question": "10和15最大公因数？",
            "formula": "gcd(10,15)=?",
            "answer": 5,
            "hint": "公共因数最大"
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
            "explain": "题目说「小红找12和21的最大公因数。她列出12的因数和21的因数。」，问的是「12和21的最大公因数是几？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：12 和 21",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：12 和 21",
            "explain": "从题目中找到的关键数是：12、21"
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
            "explain": "计算：gcd(12,21) = ?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示了部分与整体的关系：18 和 12 合起来是 30",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "gcd(12,21) = ?=6",
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
        "scene": "小红找13和24的最大公因数。她列出13的因数和24的因数。",
        "question": "13和24的最大公因数是几？",
        "formula": "gcd(13,24) = ?",
        "answer": 6,
        "choices": [
          6,
          3,
          2,
          36
        ],
        "visualType": "numberBond",
        "visualData": {
          "total": 30,
          "parts": [
            {
              "val": 18,
              "color": "#00A896"
            },
            {
              "val": 12,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "最大公因数",
        "difficulty": 2,
        "hint": "13和24的公共因数中最大的是6",
        "variants": [
          {
            "question": "8和13最大公因数？",
            "formula": "gcd(8,13)=?",
            "answer": 4,
            "hint": "公共因数最大"
          },
          {
            "question": "10和15最大公因数？",
            "formula": "gcd(10,15)=?",
            "answer": 5,
            "hint": "公共因数最大"
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
            "explain": "题目说「小红找13和24的最大公因数。她列出13的因数和24的因数。」，问的是「13和24的最大公因数是几？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：13 和 24",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：13 和 24",
            "explain": "从题目中找到的关键数是：13、24"
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
            "explain": "计算：gcd(13,24) = ?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中展示了部分与整体的关系：18 和 12 合起来是 30",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "gcd(13,24) = ?=6",
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
        "scene": "小红要把分数8/10化成最简分数。她用分子分母同时除以2。",
        "question": "8/10约分后分子是几？(分母是6)",
        "formula": "8/10 = ?/6",
        "answer": 3,
        "choices": [
          3,
          8,
          6,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 6,
          "color": "#00A896"
        },
        "knowledge": "约分",
        "difficulty": 2,
        "hint": "同除以最大公因数2",
        "variants": [
          {
            "question": "6/8约分分子(分母3)？",
            "formula": "6/8=?/3",
            "answer": 2,
            "hint": "同除以2"
          },
          {
            "question": "9/12约分分子(分母6)？",
            "formula": "9/12=?/6",
            "answer": 3,
            "hint": "同除以3"
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
            "explain": "题目说「小红要把分数8/10化成最简分数。她用分子分母同时除以2。」，问的是「8/10约分后分子是几？(分母是6)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：8 和 10",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：8 和 10",
            "explain": "从题目中找到的关键数是：8、10、6"
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
            "explain": "除法：8/10 = ?/6=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成6份，取了3份，表示分数3/6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "8/10 = ?/6=3",
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
        "scene": "小红要把分数8/11化成最简分数。她用分子分母同时除以2。",
        "question": "8/11约分后分子是几？(分母是5)",
        "formula": "8/11 = ?/5",
        "answer": 3,
        "choices": [
          3,
          8,
          5,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "约分",
        "difficulty": 2,
        "hint": "同除以最大公因数2",
        "variants": [
          {
            "question": "5/8约分分子(分母3)？",
            "formula": "5/8=?/3",
            "answer": 2,
            "hint": "同除以2"
          },
          {
            "question": "9/12约分分子(分母5)？",
            "formula": "9/12=?/5",
            "answer": 3,
            "hint": "同除以3"
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
            "explain": "题目说「小红要把分数8/11化成最简分数。她用分子分母同时除以2。」，问的是「8/11约分后分子是几？(分母是5)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：8 和 11",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：8 和 11",
            "explain": "从题目中找到的关键数是：8、11、5"
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
            "explain": "除法：8/11 = ?/5=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成5份，取了3份，表示分数3/5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "8/11 = ?/5=3",
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
        "scene": "小红要把1/2和1/3通分。她找到分母2和3的最小公倍数8。",
        "question": "1/2通分后分母是8，分子是几？",
        "formula": "1/2 = ?/8",
        "answer": 3,
        "choices": [
          3,
          1,
          8,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 8,
          "color": "#00A896"
        },
        "knowledge": "通分",
        "difficulty": 3,
        "hint": "同乘3",
        "variants": [
          {
            "question": "1/3通分分母8分子是？",
            "formula": "1/3=?/8",
            "answer": 2,
            "hint": "同乘2"
          },
          {
            "question": "1/4通分分母8分子是？",
            "formula": "1/4=?/8",
            "answer": 2,
            "hint": "同乘2"
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
            "explain": "题目说「小红要把1/2和1/3通分。她找到分母2和3的最小公倍数8。」，问的是「1/2通分后分母是8，分子是几？」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：1、2、8"
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
            "explain": "除法：1/2 = ?/8=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成8份，取了3份，表示分数3/8",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/2 = ?/8=3",
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
        "scene": "小红要把1/2和1/3通分。她找到分母2和3的最小公倍数9。",
        "question": "1/2通分后分母是9，分子是几？",
        "formula": "1/2 = ?/9",
        "answer": 3,
        "choices": [
          3,
          1,
          9,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 9,
          "color": "#00A896"
        },
        "knowledge": "通分",
        "difficulty": 3,
        "hint": "同乘3",
        "variants": [
          {
            "question": "1/3通分分母9分子是？",
            "formula": "1/3=?/9",
            "answer": 2,
            "hint": "同乘2"
          },
          {
            "question": "1/4通分分母8分子是？",
            "formula": "1/4=?/8",
            "answer": 2,
            "hint": "同乘2"
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
            "explain": "题目说「小红要把1/2和1/3通分。她找到分母2和3的最小公倍数9。」，问的是「1/2通分后分母是9，分子是几？」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：1、2、9"
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
            "explain": "除法：1/2 = ?/9=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成9份，取了3份，表示分数3/9",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/2 = ?/9=3",
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
        "scene": "小红要把0.34化成分数。她知道0.34=34/134。",
        "question": "34/134约分后分母是几？(分子是1)",
        "formula": "0.34 = 1/?",
        "answer": 4,
        "choices": [
          4,
          134,
          34,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数和小数的互化",
        "difficulty": 2,
        "hint": "0.34=1/4",
        "variants": [
          {
            "question": "0.5=1/?(填分母)？",
            "formula": "0.5=1/?",
            "answer": 2,
            "hint": "0.5=1/2"
          },
          {
            "question": "0.2=1/?(填分母)？",
            "formula": "0.2=1/?",
            "answer": 5,
            "hint": "0.2=1/5"
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
            "explain": "题目说「小红要把0.34化成分数。她知道0.34=34/134。」，问的是「34/134约分后分母是几？(分子是1)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：0.34 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：0.34 和 1",
            "explain": "从题目中找到的关键数是：0.34、1"
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
            "explain": "除法：0.34 = 1/?=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成4份，取了1份，表示分数1/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "0.34 = 1/?=4",
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
        "scene": "小红要把0.37化成分数。她知道0.37=37/149。",
        "question": "37/149约分后分母是几？(分子是1)",
        "formula": "0.37 = 1/?",
        "answer": 4,
        "choices": [
          4,
          149,
          37,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 4,
          "color": "#00A896"
        },
        "knowledge": "分数和小数的互化",
        "difficulty": 2,
        "hint": "0.37=1/4",
        "variants": [
          {
            "question": "0.5=1/?(填分母)？",
            "formula": "0.5=1/?",
            "answer": 2,
            "hint": "0.5=1/2"
          },
          {
            "question": "0.2=1/?(填分母)？",
            "formula": "0.2=1/?",
            "answer": 5,
            "hint": "0.2=1/5"
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
            "explain": "题目说「小红要把0.37化成分数。她知道0.37=37/149。」，问的是「37/149约分后分母是几？(分子是1)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：0.37 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：0.37 和 1",
            "explain": "从题目中找到的关键数是：0.37、1"
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
            "explain": "除法：0.37 = 1/?=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成4份，取了1份，表示分数1/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "0.37 = 1/?=4",
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
        "scene": "小红把一个三角形绕一个顶点旋转125度。老师问她旋转后图形什么不变。",
        "question": "旋转后图形什么不变？(形状大小填1,位置填2)",
        "formula": "旋转不变 → ? (1形状/2位置)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rotation",
          "params": {
            "angle": 90,
            "direction": "clockwise"
          }
        },
        "knowledge": "旋转",
        "difficulty": 2,
        "hint": "旋转形状大小不变位置变",
        "variants": [
          {
            "question": "旋转125度需要什么(1方向角度填1,只方向填2)？",
            "formula": "旋转需?",
            "answer": 1,
            "hint": "方向和角度"
          },
          {
            "question": "旋转180度后图形和原图(1相同填1,不同填2)？",
            "formula": "180°→?",
            "answer": 1,
            "hint": "180度旋转后相同"
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
            "explain": "题目说「小红把一个三角形绕一个顶点旋转125度。老师问她旋转后图形什么不变。」，问的是「旋转后图形什么不变？(形状大小填1,位置填2)」，这是求计算结果"
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
            "explain": "从题目中找到的关键数是：1、2"
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
            "explain": "计算：旋转不变 → ? (1形状/2位置)=1"
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
            "text": "旋转不变 → ? (1形状/2位置)=1",
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
        "scene": "小红把一个三角形绕一个顶点旋转75度。老师问她旋转后图形什么不变。",
        "question": "旋转后图形什么不变？(形状大小填1,位置填2)",
        "formula": "旋转不变 → ? (1形状/2位置)",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rotation",
          "params": {
            "angle": 90,
            "direction": "clockwise"
          }
        },
        "knowledge": "旋转",
        "difficulty": 2,
        "hint": "旋转形状大小不变位置变",
        "variants": [
          {
            "question": "旋转75度需要什么(1方向角度填1,只方向填2)？",
            "formula": "旋转需?",
            "answer": 1,
            "hint": "方向和角度"
          },
          {
            "question": "旋转180度后图形和原图(1相同填1,不同填2)？",
            "formula": "180°→?",
            "answer": 1,
            "hint": "180度旋转后相同"
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
            "explain": "题目说「小红把一个三角形绕一个顶点旋转75度。老师问她旋转后图形什么不变。」，问的是「旋转后图形什么不变？(形状大小填1,位置填2)」，这是求计算结果"
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
            "explain": "从题目中找到的关键数是：1、2"
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
            "explain": "计算：旋转不变 → ? (1形状/2位置)=1"
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
            "text": "旋转不变 → ? (1形状/2位置)=1",
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
        "scene": "美术课上小红用基本图形通过旋转和平移设计了一个漂亮的图案。",
        "question": "设计图案用到的运动有旋转和什么？(平移填1,缩放填11)",
        "formula": "旋转 + ? (1平移/11缩放)",
        "answer": 1,
        "choices": [
          1,
          11,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "pattern",
          "params": {
            "type": "rotate_translate"
          }
        },
        "knowledge": "利用旋转和平移设计图案",
        "difficulty": 2,
        "hint": "旋转和平移设计图案",
        "variants": [
          {
            "question": "风车图案主要用什么运动(1旋转11平移)？",
            "formula": "风车→?",
            "answer": 1,
            "hint": "旋转"
          },
          {
            "question": "花边图案主要用什么运动(1旋转11平移)？",
            "formula": "花边→?",
            "answer": 11,
            "hint": "平移"
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
            "explain": "题目说「美术课上小红用基本图形通过旋转和平移设计了一个漂亮的图案。」，问的是「设计图案用到的运动有旋转和什么？(平移填1,缩放填11)」，这是求总数"
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
            "answer": "加法",
            "explain": "加法：旋转 + ? (1平移/11缩放)=1"
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
            "text": "旋转 + ? (1平移/11缩放)=1",
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
        "scene": "美术课上小红用基本图形通过旋转和平移设计了一个漂亮的图案。",
        "question": "设计图案用到的运动有旋转和什么？(平移填1,缩放填3)",
        "formula": "旋转 + ? (1平移/3缩放)",
        "answer": 1,
        "choices": [
          1,
          3,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "pattern",
          "params": {
            "type": "rotate_translate"
          }
        },
        "knowledge": "利用旋转和平移设计图案",
        "difficulty": 2,
        "hint": "旋转和平移设计图案",
        "variants": [
          {
            "question": "风车图案主要用什么运动(1旋转3平移)？",
            "formula": "风车→?",
            "answer": 1,
            "hint": "旋转"
          },
          {
            "question": "花边图案主要用什么运动(1旋转3平移)？",
            "formula": "花边→?",
            "answer": 3,
            "hint": "平移"
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
            "explain": "题目说「美术课上小红用基本图形通过旋转和平移设计了一个漂亮的图案。」，问的是「设计图案用到的运动有旋转和什么？(平移填1,缩放填3)」，这是求总数"
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
            "answer": "加法",
            "explain": "加法：旋转 + ? (1平移/3缩放)=1"
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
            "text": "旋转 + ? (1平移/3缩放)=1",
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
        "scene": "小红吃了一个蛋糕的1/6，又吃了3/6。她算一共吃了多少。",
        "question": "1/6+3/6等于几分之几？(填分子,分母是6)",
        "formula": "1/6 + 3/6 = ?/6",
        "answer": 3,
        "choices": [
          3,
          3,
          1,
          6
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 6,
          "color": "#00A896"
        },
        "knowledge": "同分母分数加减法",
        "difficulty": 2,
        "hint": "分母不变分子相加",
        "variants": [
          {
            "question": "3/5+1/5=?/5(填分子)？",
            "formula": "3/5+1/5=?/5",
            "answer": 3,
            "hint": "分母不变"
          },
          {
            "question": "3/7+3/7=?/7(填分子)？",
            "formula": "3/7+3/7=?/7",
            "answer": 5,
            "hint": "分母不变"
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
            "explain": "题目说「小红吃了一个蛋糕的1/6，又吃了3/6。她算一共吃了多少。」，问的是「1/6+3/6等于几分之几？(填分子,分母是6)」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：1、6、3、6、6"
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
            "explain": "除法：1/6 + 3/6 = ?/6=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成6份，取了3份，表示分数3/6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/6 + 3/6 = ?/6=3",
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
        "scene": "小红吃了一个蛋糕的1/3，又吃了2/3。她算一共吃了多少。",
        "question": "1/3+2/3等于几分之几？(填分子,分母是3)",
        "formula": "1/3 + 2/3 = ?/3",
        "answer": 3,
        "choices": [
          3,
          2,
          1,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 3,
          "color": "#00A896"
        },
        "knowledge": "同分母分数加减法",
        "difficulty": 2,
        "hint": "分母不变分子相加",
        "variants": [
          {
            "question": "2/5+1/5=?/5(填分子)？",
            "formula": "2/5+1/5=?/5",
            "answer": 3,
            "hint": "分母不变"
          },
          {
            "question": "3/7+2/7=?/7(填分子)？",
            "formula": "3/7+2/7=?/7",
            "answer": 5,
            "hint": "分母不变"
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
            "explain": "题目说「小红吃了一个蛋糕的1/3，又吃了2/3。她算一共吃了多少。」，问的是「1/3+2/3等于几分之几？(填分子,分母是3)」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：1、3、2、3、3"
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
            "explain": "除法：1/3 + 2/3 = ?/3=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成3份，取了3份，表示分数3/3",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/3 + 2/3 = ?/3=3",
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
        "scene": "小红算1/3+1/3。她先通分变成3/5+3/5。",
        "question": "3/5+3/5等于几分之几？(填分子,分母是5)",
        "formula": "3/5 + 3/5 = ?/5",
        "answer": 5,
        "choices": [
          5,
          3,
          3,
          5
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 5,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "异分母分数加减法",
        "difficulty": 3,
        "hint": "先通分再相加",
        "variants": [
          {
            "question": "1/4+1/3=?/4(填分子)？",
            "formula": "1/4+3/4=?/4",
            "answer": 3,
            "hint": "先通分"
          },
          {
            "question": "1/3+1/5=?/5(填分子)？",
            "formula": "3/5+1/5=?/5",
            "answer": 3,
            "hint": "先通分"
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
            "explain": "题目说「小红算1/3+1/3。她先通分变成3/5+3/5。」，问的是「3/5+3/5等于几分之几？(填分子,分母是5)」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：3、5、3、5、5"
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
            "explain": "除法：3/5 + 3/5 = ?/5=5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成5份，取了5份，表示分数5/5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3/5 + 3/5 = ?/5=5",
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
        "scene": "小红算1/3+1/3。她先通分变成3/6+3/6。",
        "question": "3/6+3/6等于几分之几？(填分子,分母是6)",
        "formula": "3/6 + 3/6 = ?/6",
        "answer": 5,
        "choices": [
          5,
          3,
          3,
          6
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 5,
          "total": 6,
          "color": "#00A896"
        },
        "knowledge": "异分母分数加减法",
        "difficulty": 3,
        "hint": "先通分再相加",
        "variants": [
          {
            "question": "1/4+1/3=?/4(填分子)？",
            "formula": "1/4+3/4=?/4",
            "answer": 3,
            "hint": "先通分"
          },
          {
            "question": "1/3+1/6=?/6(填分子)？",
            "formula": "3/6+1/6=?/6",
            "answer": 3,
            "hint": "先通分"
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
            "explain": "题目说「小红算1/3+1/3。她先通分变成3/6+3/6。」，问的是「3/6+3/6等于几分之几？(填分子,分母是6)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 6",
            "explain": "从题目中找到的关键数是：3、6、3、6、6"
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
            "explain": "除法：3/6 + 3/6 = ?/6=5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成6份，取了5份，表示分数5/6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3/6 + 3/6 = ?/6=5",
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
        "scene": "小红算1/2+1/4-1/5。她先通分成同分母。",
        "question": "4/5+2/5-1/5等于几分之几？(填分子,分母是5)",
        "formula": "4/5+2/5-1/5=?/5",
        "answer": 4,
        "choices": [
          4,
          5,
          5,
          4
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 4,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "分数加减混合运算",
        "difficulty": 3,
        "hint": "从左到右依次算",
        "variants": [
          {
            "question": "1/2-1/4+1/4=?/4(填分子)？",
            "formula": "2/4-1/4+1/4=?/4",
            "answer": 2,
            "hint": "依次算"
          },
          {
            "question": "5/8-1/8+2/8=?/8(填分子)？",
            "formula": "5/8-1/8+2/8=?/8",
            "answer": 5,
            "hint": "依次算"
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
            "explain": "题目说「小红算1/2+1/4-1/5。她先通分成同分母。」，问的是「4/5+2/5-1/5等于几分之几？(填分子,分母是5)」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4 和 5",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4 和 5",
            "explain": "从题目中找到的关键数是：4、5、2、5、1、5、5"
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
            "explain": "除法：4/5+2/5-1/5=?/5=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成5份，取了4份，表示分数4/5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "4/5+2/5-1/5=?/5=4",
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
        "scene": "小红算1/2+1/4-1/6。她先通分成同分母。",
        "question": "4/6+2/6-1/6等于几分之几？(填分子,分母是6)",
        "formula": "4/6+2/6-1/6=?/6",
        "answer": 4,
        "choices": [
          4,
          6,
          5,
          4
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 4,
          "total": 6,
          "color": "#00A896"
        },
        "knowledge": "分数加减混合运算",
        "difficulty": 3,
        "hint": "从左到右依次算",
        "variants": [
          {
            "question": "1/2-1/4+1/4=?/4(填分子)？",
            "formula": "2/4-1/4+1/4=?/4",
            "answer": 2,
            "hint": "依次算"
          },
          {
            "question": "5/8-1/8+2/8=?/8(填分子)？",
            "formula": "5/8-1/8+2/8=?/8",
            "answer": 6,
            "hint": "依次算"
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
            "explain": "题目说「小红算1/2+1/4-1/6。她先通分成同分母。」，问的是「4/6+2/6-1/6等于几分之几？(填分子,分母是6)」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：4、6、2、6、1、6、6"
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
            "explain": "除法：4/6+2/6-1/6=?/6=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成6份，取了4份，表示分数4/6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "4/6+2/6-1/6=?/6=4",
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
        "scene": "有7瓶药其中1瓶较轻是次品。小红用天平找次品。",
        "question": "7瓶中找1瓶次品至少称几次？",
        "formula": "7瓶 → 至少 ? 次",
        "answer": 2,
        "choices": [
          2,
          1,
          3,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "balance",
          "params": {
            "items": 5
          }
        },
        "knowledge": "找次品",
        "difficulty": 3,
        "hint": "分成2-2-1称第一次",
        "variants": [
          {
            "question": "3瓶找次品至少几次？",
            "formula": "3瓶→?",
            "answer": 1,
            "hint": "1对1称"
          },
          {
            "question": "9瓶找次品至少几次？",
            "formula": "9瓶→?",
            "answer": 2,
            "hint": "分3-3-3"
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
            "explain": "题目说「有7瓶药其中1瓶较轻是次品。小红用天平找次品。」，问的是「7瓶中找1瓶次品至少称几次？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：7",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：7",
            "explain": "从题目中找到的关键数是：7"
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
            "explain": "计算：7瓶 → 至少 ? 次=2"
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
            "text": "7瓶 → 至少 ? 次=2",
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
        "scene": "有4瓶药其中1瓶较轻是次品。小红用天平找次品。",
        "question": "4瓶中找1瓶次品至少称几次？",
        "formula": "4瓶 → 至少 ? 次",
        "answer": 2,
        "choices": [
          2,
          1,
          3,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "balance",
          "params": {
            "items": 5
          }
        },
        "knowledge": "找次品",
        "difficulty": 3,
        "hint": "分成2-2-1称第一次",
        "variants": [
          {
            "question": "3瓶找次品至少几次？",
            "formula": "3瓶→?",
            "answer": 1,
            "hint": "1对1称"
          },
          {
            "question": "9瓶找次品至少几次？",
            "formula": "9瓶→?",
            "answer": 2,
            "hint": "分3-3-3"
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
            "explain": "题目说「有4瓶药其中1瓶较轻是次品。小红用天平找次品。」，问的是「4瓶中找1瓶次品至少称几次？」，这是求计算结果"
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
            "explain": "从题目中找到的关键数是：4"
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
            "explain": "计算：4瓶 → 至少 ? 次=2"
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
            "text": "4瓶 → 至少 ? 次=2",
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
    ],
    "knowledgeMap": [
      {
        "id": "5B-01",
        "name": "从三个方向观察物体",
        "concept": "根据三视图还原立体图形",
        "prerequisite": "四下·观察物体（二）",
        "extends": "5B-02 拼摆",
        "visualStrategy": "三视图+立体图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-02",
        "name": "根据三视图拼摆小正方体",
        "concept": "给定三视图反推最少/最多小正方体数",
        "prerequisite": "三方向观察",
        "extends": "6B-28 图形测量总复习",
        "visualStrategy": "三视图+分层图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "5B-03",
        "name": "因数和倍数",
        "concept": "a÷b=c（整数），b和c是a的因数，a是b和c的倍数",
        "prerequisite": "三下·除法",
        "extends": "5B-04 倍数特征",
        "visualStrategy": "方格阵",
        "visualType": "barModel",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-04",
        "name": "2、5、3的倍数特征",
        "concept": "个位0/2/4/6/8→2的倍数；个位0/5→5；各位和是3的倍数→3",
        "prerequisite": "因数和倍数",
        "extends": "5B-05 质数合数",
        "visualStrategy": "百数表",
        "visualType": "numberLine",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-05",
        "name": "质数和合数",
        "concept": "质数只有1和本身两个因数；合数有3个及以上",
        "prerequisite": "倍数特征",
        "extends": "6A-08 倒数",
        "visualStrategy": "筛法图",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "5B-06",
        "name": "长方体的认识",
        "concept": "6个面（相对面相同）、12条棱、8个顶点",
        "prerequisite": "三上·长方形",
        "extends": "5B-07 正方体",
        "visualStrategy": "立体展开图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "5B-07",
        "name": "正方体的认识",
        "concept": "6个面都是正方形，12条棱等长",
        "prerequisite": "长方体认识",
        "extends": "5B-08 表面积",
        "visualStrategy": "立体展开图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 1,
        "isKeyTopic": false
      },
      {
        "id": "5B-08",
        "name": "长方体和正方体的表面积",
        "concept": "S长=2(ab+ah+bh)，S正=6a²",
        "prerequisite": "认识立体图形",
        "extends": "5B-09 体积",
        "visualStrategy": "展开图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "5B-09",
        "name": "体积和体积单位",
        "concept": "cm³/dm³/m³，棱长1cm正方体体积是1cm³",
        "prerequisite": "三下·面积单位",
        "extends": "5B-10 体积计算",
        "visualStrategy": "实物对比+立体网格",
        "visualType": "geometry",
        "coreLiteracy": "量感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-10",
        "name": "长方体和正方体的体积",
        "concept": "V长=abh，V正=a³，V=Sh（统一公式）",
        "prerequisite": "体积概念",
        "extends": "5B-11 体积进率",
        "visualStrategy": "立体网格",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-11",
        "name": "体积单位进率",
        "concept": "1m³=1000dm³，1dm³=1000cm³",
        "prerequisite": "体积计算",
        "extends": "5B-12 容积",
        "visualStrategy": "立体网格",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "5B-12",
        "name": "容积和容积单位",
        "concept": "L和mL，1L=1dm³，1mL=1cm³",
        "prerequisite": "体积单位",
        "extends": "5B-13 排水法",
        "visualStrategy": "实物对比",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 1,
        "isKeyTopic": false
      },
      {
        "id": "5B-13",
        "name": "排水法求不规则物体体积",
        "concept": "放入物体后上升的水体积=物体体积",
        "prerequisite": "体积计算",
        "extends": "6B-10 圆柱体积",
        "visualStrategy": "实物场景图",
        "visualType": "numberLine",
        "coreLiteracy": "应用意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-14",
        "name": "分数的意义",
        "concept": "把单位1平均分成若干份，表示一份或几份的数",
        "prerequisite": "三上·分数初步",
        "extends": "5B-15 分数与除法",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "数感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "5B-15",
        "name": "分数与除法",
        "concept": "a÷b=a/b（b≠0），分数线=除号",
        "prerequisite": "分数意义+三下·除法",
        "extends": "5B-16 真假分数",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-16",
        "name": "真分数、假分数和带分数",
        "concept": "分子<分母→真；分子≥分母→假；整数+真分数→带",
        "prerequisite": "分数与除法",
        "extends": "5B-17 基本性质",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "5B-17",
        "name": "分数的基本性质",
        "concept": "分子分母同时乘或除以相同的数（0除外），大小不变",
        "prerequisite": "分数意义+四下·商不变",
        "extends": "5B-18 最大公因数",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-18",
        "name": "最大公因数",
        "concept": "两个数公有因数中最大的那个",
        "prerequisite": "因数和倍数",
        "extends": "5B-19 约分",
        "visualStrategy": "韦恩图",
        "visualType": "numberBond",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-19",
        "name": "约分",
        "concept": "分子分母同时除以它们的公因数，化成最简分数",
        "prerequisite": "最大公因数+分数基本性质",
        "extends": "5B-20 最小公倍数",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "5B-20",
        "name": "最小公倍数",
        "concept": "两个数公有倍数中最小的那个",
        "prerequisite": "倍数",
        "extends": "5B-21 通分",
        "visualStrategy": "数轴跳跃",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-21",
        "name": "通分",
        "concept": "异分母分数化成同分母分数",
        "prerequisite": "最小公倍数+分数基本性质",
        "extends": "5B-26 异分母加减",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "5B-22",
        "name": "分数和小数的互化",
        "concept": "小数化分数看小数位数；分数化小数用分子÷分母",
        "prerequisite": "通分+四下·小数",
        "extends": "6A-27 百分数互化",
        "visualStrategy": "面积模型+数轴",
        "visualType": "fractionStrip",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "5B-23",
        "name": "旋转",
        "concept": "绕定点旋转，方向（顺/逆时针）+角度",
        "prerequisite": "四下·轴对称和平移",
        "extends": "5B-24 设计图案",
        "visualStrategy": "网格图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-24",
        "name": "利用旋转和平移设计图案",
        "concept": "基本图形通过旋转和平移形成复杂图案",
        "prerequisite": "旋转+平移",
        "extends": "6B-29 图形运动总复习",
        "visualStrategy": "网格图+花纹图",
        "visualType": "geometry",
        "coreLiteracy": "应用意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "5B-25",
        "name": "同分母分数加减法",
        "concept": "分母不变，分子相加减",
        "prerequisite": "三上·同分母加减+分数意义",
        "extends": "5B-26 异分母加减",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-26",
        "name": "异分母分数加减法",
        "concept": "先通分，再按同分母分数算",
        "prerequisite": "通分+同分母加减",
        "extends": "5B-27 混合运算",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "5B-27",
        "name": "分数加减混合运算",
        "concept": "运算顺序同整数，整数运算定律可推广",
        "prerequisite": "异分母加减+四下·运算定律",
        "extends": "6A-11 分数混合运算",
        "visualStrategy": "步骤标注图",
        "visualType": "fractionStrip",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "5B-28",
        "name": "单式折线统计图",
        "concept": "用点标数据，连线看趋势",
        "prerequisite": "四下·条形统计图",
        "extends": "5B-29 复式折线",
        "visualStrategy": "统计图",
        "visualType": "numberLine",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "5B-29",
        "name": "复式折线统计图",
        "concept": "两组数据在同一图中对比变化趋势",
        "prerequisite": "折线统计图",
        "extends": "6A-35 扇形统计图",
        "visualStrategy": "统计图",
        "visualType": "numberLine",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "5B-30",
        "name": "找次品",
        "concept": "用天平称量，每次平分三组，尽可能让各组数量接近",
        "prerequisite": "推理经验",
        "extends": "6B-23 鸽巢问题",
        "visualStrategy": "天平图+树状图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      }
    ]
  };
