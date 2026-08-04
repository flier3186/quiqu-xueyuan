window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['6a'] = {
    "title": "六年级上册·分数乘除法与圆",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "units": [
      {
        "name": "分数乘法",
        "level": "locked",
        "children": [
          {
            "name": "分数乘整数",
            "level": "locked"
          },
          {
            "name": "分数乘分数",
            "level": "locked"
          },
          {
            "name": "简便运算",
            "level": "locked"
          },
          {
            "name": "解决问题",
            "level": "locked"
          }
        ]
      },
      {
        "name": "位置与方向",
        "level": "locked",
        "children": [
          {
            "name": "方向和距离",
            "level": "locked"
          },
          {
            "name": "路线图",
            "level": "locked"
          }
        ]
      },
      {
        "name": "分数除法",
        "level": "locked",
        "children": [
          {
            "name": "倒数",
            "level": "locked"
          },
          {
            "name": "分数除法",
            "level": "locked"
          },
          {
            "name": "混合运算",
            "level": "locked"
          },
          {
            "name": "解决问题",
            "level": "locked"
          },
          {
            "name": "工程问题",
            "level": "locked"
          }
        ]
      },
      {
        "name": "比",
        "level": "locked",
        "children": [
          {
            "name": "比的意义",
            "level": "locked"
          },
          {
            "name": "比的基本性质",
            "level": "locked"
          },
          {
            "name": "化简比",
            "level": "locked"
          },
          {
            "name": "按比分配",
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
            "name": "周长",
            "level": "locked"
          },
          {
            "name": "面积",
            "level": "locked"
          },
          {
            "name": "圆环",
            "level": "locked"
          },
          {
            "name": "扇形",
            "level": "locked"
          },
          {
            "name": "组合图形",
            "level": "locked"
          }
        ]
      },
      {
        "name": "百分数",
        "level": "locked",
        "children": [
          {
            "name": "百分数意义",
            "level": "locked"
          },
          {
            "name": "互化",
            "level": "locked"
          },
          {
            "name": "百分率",
            "level": "locked"
          },
          {
            "name": "增减百分之几",
            "level": "locked"
          },
          {
            "name": "折扣",
            "level": "locked"
          },
          {
            "name": "成数",
            "level": "locked"
          },
          {
            "name": "税率",
            "level": "locked"
          },
          {
            "name": "利率",
            "level": "locked"
          }
        ]
      },
      {
        "name": "统计",
        "level": "locked",
        "children": [
          {
            "name": "扇形统计图",
            "level": "locked"
          },
          {
            "name": "选择统计图",
            "level": "locked"
          }
        ]
      },
      {
        "name": "数学广角",
        "level": "locked",
        "children": [
          {
            "name": "数与形",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "小红吃了一块蛋糕的3/8，妈妈吃了她的2倍。她算妈妈吃了这块蛋糕的几分之几。",
        "question": "3/8 × 2 = ?/8（填分子）",
        "formula": "3/8 × 2 = ?/8",
        "answer": 6,
        "choices": [
          6,
          5,
          3,
          8
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 6,
          "total": 8,
          "color": "#00A896"
        },
        "knowledge": "分数乘整数",
        "difficulty": 2,
        "hint": "分子乘整数分母不变",
        "variants": [
          {
            "question": "2/7×3=?/7（填分子）",
            "formula": "2/7×3=?/7",
            "answer": 6,
            "hint": "分子乘3"
          },
          {
            "question": "1/5×4=?/5（填分子）",
            "formula": "1/5×4=?/5",
            "answer": 4,
            "hint": "分子乘4"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "3/8×2等于多少（填分子，分母8）",
              "3/8+2等于多少",
              "3/8÷2等于多少",
              "3/8×8等于多少"
            ],
            "answer": "3/8×2等于多少（填分子，分母8）",
            "explain": "题目问「3/8×2=?/8」，求妈妈吃了蛋糕的几分之几"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分数3/8乘整数2，分母不变",
              "分数3/8加整数2",
              "分母也要乘2",
              "分子不变"
            ],
            "answer": "分数3/8乘整数2，分母不变",
            "explain": "分数乘整数：分子乘整数，分母不变"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "3×2=6，分子是6",
              "3+2=5，分子是5",
              "3×8=24，分子是24",
              "3不变，分子是3"
            ],
            "answer": "3×2=6，分子是6",
            "explain": "分子乘整数：3/8×2=(3×2)/8=6/8，分子是6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中6/8，3/8的2倍就是6/8",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "分数乘整数：分子乘整数，分母不变。3/8×2=(3×2)/8=6/8，分子是6",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分数乘整数法则：分子×整数做分子，分母不变。能约分的先约分再计算更简便",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红有一张长方形纸条，长是3/4米。她剪下它的1/2。她算剪下多少米。",
        "question": "3/4 × 1/2 = ?/8（填分子）",
        "formula": "3/4 × 1/2 = ?/8",
        "answer": 3,
        "choices": [
          3,
          4,
          6,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 8,
          "color": "#00A896"
        },
        "knowledge": "分数乘分数",
        "difficulty": 3,
        "hint": "分子乘分子分母乘分母",
        "variants": [
          {
            "question": "1/2×1/3=?/6（填分子）",
            "formula": "1/2×1/3=?/6",
            "answer": 1,
            "hint": "1×1=1"
          },
          {
            "question": "2/3×3/4=?/12（填分子）",
            "formula": "2/3×3/4=?/12",
            "answer": 6,
            "hint": "2×3=6"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "3/4×1/2等于多少（填分子，分母8）",
              "3/4+1/2等于多少",
              "3/4÷1/2等于多少",
              "3/4-1/2等于多少"
            ],
            "answer": "3/4×1/2等于多少（填分子，分母8）",
            "explain": "题目问「3/4×1/2=?/8」，求剪下多少米"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "分数乘分数：3/4乘1/2",
              "分数加分数：3/4加1/2",
              "分数除分数：3/4除以1/2",
              "3/4的2倍"
            ],
            "answer": "分数乘分数：3/4乘1/2",
            "explain": "分数乘分数：分子乘分子，分母乘分母"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "3×1=3，分子是3",
              "3+1=4，分子是4",
              "3×2=6，分子是6",
              "3不变，分子是3"
            ],
            "answer": "3×1=3，分子是3",
            "explain": "3/4×1/2=(3×1)/(4×2)=3/8，分子是3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中把3/4再取一半，得到3/8",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "分数乘分数：分子乘分子，分母乘分母。3/4×1/2=(3×1)/(4×2)=3/8，分子是3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分数乘分数法则：分子相乘做分子，分母相乘做分母。能约分的先约分再乘",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算1/4×2/5+1/4×3/5。她用乘法分配律变成1/4×(2/5+3/5)。",
        "question": "2/5+3/5=?/5（填分子）",
        "formula": "2/5+3/5=?/5",
        "answer": 5,
        "choices": [
          5,
          6,
          2,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 5,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "分数乘法简便运算",
        "difficulty": 3,
        "hint": "同分母分数加法分子相加",
        "variants": [
          {
            "question": "1/3×1/4+2/3×1/4=1/4×(?/3+2/3)填分子",
            "formula": "1/3×1/4+2/3×1/4",
            "answer": 1,
            "hint": "提取公因数"
          },
          {
            "question": "3/8×4/7+5/8×4/7=4/7×(?/8+5/8)填分子",
            "formula": "3/8×4/7+5/8×4/7",
            "answer": 3,
            "hint": "提取公因数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "2/5+3/5等于多少（填分子，分母5）",
              "2/5×3/5等于多少",
              "2/5-3/5等于多少",
              "1/4×2/5等于多少"
            ],
            "answer": "2/5+3/5等于多少（填分子，分母5）",
            "explain": "题目用乘法分配律，先算括号里的2/5+3/5"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "用乘法分配律提取公因数1/4后算2/5+3/5",
              "直接算2/5×3/5",
              "直接算1/4×2/5",
              "2/5和3/5相乘"
            ],
            "answer": "用乘法分配律提取公因数1/4后算2/5+3/5",
            "explain": "1/4×2/5+1/4×3/5=1/4×(2/5+3/5)，先算括号里"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "2+3=5，分子是5",
              "2×3=6，分子是6",
              "5-2=3，分子是3",
              "2+3+5=10，分子是10"
            ],
            "answer": "2+3=5，分子是5",
            "explain": "同分母加法：2/5+3/5=(2+3)/5=5/5=1，分子是5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中2/5+3/5=5/5=1，涂色部分填满整个",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "用乘法分配律：1/4×2/5+1/4×3/5=1/4×(2/5+3/5)=1/4×1=1/4。先算2/5+3/5=5/5=1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "乘法分配律在分数中同样适用：a×b+a×c=a×(b+c)。合理运用运算定律可以让计算更简便",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一袋大米30千克，第一周吃了1/3，第二周吃了剩下的1/4。小红算第二周吃了多少千克。",
        "question": "第二周吃了？千克",
        "formula": "30×1/3=10 → 10×1/4=?",
        "answer": 2.5,
        "choices": [
          2.5,
          5,
          10,
          7.5
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 30,
          "parts": [
            {
              "label": "第一周10",
              "val": 10,
              "color": "#00A896"
            },
            {
              "label": "第二周2.5",
              "val": 2.5,
              "color": "#F5B800"
            },
            {
              "label": "剩余17.5",
              "val": 17.5,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "分数乘法解决问题（连续求几分之几）",
        "difficulty": 3,
        "hint": "先算第一周再算第二周",
        "variants": [
          {
            "question": "24米用1/3再用1/4第二次用？米",
            "formula": "24×1/3×1/4=?",
            "answer": 2,
            "hint": "分步算"
          },
          {
            "question": "40页看1/5再看1/4第二次看？页",
            "formula": "40×1/5×1/4=?",
            "answer": 2,
            "hint": "分步算"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "第二周吃了多少千克",
              "第一周吃了多少千克",
              "还剩多少千克",
              "一共吃了多少千克"
            ],
            "answer": "第二周吃了多少千克",
            "explain": "题目问「第二周吃了多少千克」，连续求几分之几"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "30千克，第一周吃1/3，第二周吃剩下的1/4",
              "30千克，第一周吃1/3",
              "30千克，第二周吃1/4",
              "30千克全吃完"
            ],
            "answer": "30千克，第一周吃1/3，第二周吃剩下的1/4",
            "explain": "关键是「剩下的」——第二周以第一周剩下的为单位1"
          },
          {
            "q": "🧩 第二周吃了多少？",
            "choices": [
              "先算第一周30×1/3=10，再算第二周10×1/4=2.5",
              "直接算30×1/4=7.5",
              "直接算30×1/3=10",
              "30-10=20"
            ],
            "answer": "先算第一周30×1/3=10，再算第二周10×1/4=2.5",
            "explain": "分步算：第一周30×1/3=10千克，第二周吃剩下的1/4=10×1/4=2.5千克"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中30千克分成三部分：第一周10、第二周2.5、剩余17.5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "第一周：30×1/3=10千克。第二周吃「剩下的」1/4：10×1/4=2.5千克。注意单位1在变化",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "连续求几分之几：每一步的单位1不同。第一周以总数为单位1，第二周以「剩下的」为单位1",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红有20颗糖果，小亮比小红多1/4。小红算小亮有几颗。",
        "question": "20×(1+1/4)=?颗",
        "formula": "20×(1+1/4)=?",
        "answer": 25,
        "choices": [
          25,
          20,
          5,
          45
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "小红20",
              "val": 20,
              "color": "#00A896"
            },
            {
              "label": "多5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "分数乘法解决问题（求比一个数多/少几分之几）",
        "difficulty": 3,
        "hint": "多1/4就是×(1+1/4)",
        "variants": [
          {
            "question": "24比它少1/3是？",
            "formula": "24×(1-1/3)=?",
            "answer": 16,
            "hint": "×(1-1/3)"
          },
          {
            "question": "30增加1/6是？",
            "formula": "30×(1+1/6)=?",
            "answer": 35,
            "hint": "×(1+1/6)"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "小亮有几颗糖果",
              "小红有几颗糖果",
              "小亮比小红多几颗",
              "两人一共有几颗"
            ],
            "answer": "小亮有几颗糖果",
            "explain": "题目问小亮比小红多1/4，求小亮有几颗"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "小红20颗，小亮比小红多1/4",
              "小红20颗，小亮是小红的1/4",
              "小红20颗，小亮比小红多5颗",
              "小亮有20颗"
            ],
            "answer": "小红20颗，小亮比小红多1/4",
            "explain": "小红20颗是单位1，小亮=小红的(1+1/4)倍"
          },
          {
            "q": "🧩 小亮有几颗？",
            "choices": [
              "20×(1+1/4)=25",
              "20×1/4=5",
              "20+20=40",
              "20÷(1+1/4)=16"
            ],
            "answer": "20×(1+1/4)=25",
            "explain": "多1/4就是×(1+1/4)：20×(1+1/4)=20×5/4=25颗"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中小红20颗，小亮=小红+多出的5颗=25颗",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "小亮比小红多1/4，即小亮=小红的(1+1/4)倍。20×(1+1/4)=20×5/4=25颗",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求比一个数多几分之几的数：单位1×(1+分数)。少几分之几：单位1×(1-分数)。关键是找准单位1",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红站在操场中心，图书馆在她的东偏北30度方向，距离300米。",
        "question": "图书馆在小红的什么方向？（东偏北填1，西偏南填2）",
        "formula": "图书馆方向→?（1东偏北/2西偏南）",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "direction",
          "params": {
            "angle": 30,
            "distance": 300,
            "dir": "东偏北"
          }
        },
        "knowledge": "用方向和距离确定位置",
        "difficulty": 2,
        "hint": "方向+距离确定位置",
        "variants": [
          {
            "question": "南偏西45度距离200m是哪种方向(1南偏西/2北偏东)？",
            "formula": "南偏西→?",
            "answer": 1,
            "hint": "看方向"
          },
          {
            "question": "北偏东60度距离500m是哪种(1北偏东/2南偏西)？",
            "formula": "北偏东→?",
            "answer": 1,
            "hint": "看方向"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "图书馆在小红的什么方向",
              "图书馆离小红多远",
              "图书馆有多大",
              "图书馆在哪条街"
            ],
            "answer": "图书馆在小红的什么方向",
            "explain": "题目问图书馆的方向，东偏北填1西偏南填2"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "东偏北30度方向，距离300米",
              "东偏北30度",
              "距离300米",
              "在东边"
            ],
            "answer": "东偏北30度方向，距离300米",
            "explain": "确定位置需要方向和距离两个信息"
          },
          {
            "q": "🧩 图书馆在什么方向？",
            "choices": [
              "东偏北，填1",
              "西偏南，填2",
              "正东方，填3",
              "正北方，填0"
            ],
            "answer": "东偏北，填1",
            "explain": "题目说「东偏北30度方向」，所以是东偏北，填1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中以小红为中心，图书馆在东偏北30度方向，距离300米",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "确定位置需要方向和距离。东偏北30°表示从正东方向向北偏30°",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "用方向和距离确定位置：以观测点为中心，用方向角和距离共同确定。方向和距离缺一不可",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红从家出发向南走200米到学校，再向东走150米到图书馆。",
        "question": "从家到学校再到图书馆一共走了多少米？",
        "formula": "200 + 150 = ?",
        "answer": 350,
        "choices": [
          350,
          200,
          150,
          300
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "route",
          "params": {
            "segments": [
              {
                "dir": "南",
                "dist": 200
              },
              {
                "dir": "东",
                "dist": 150
              }
            ]
          }
        },
        "knowledge": "描述和绘制路线图",
        "difficulty": 2,
        "hint": "分段描述方向和距离",
        "variants": [
          {
            "question": "向北100再向东50共？米",
            "formula": "100+50=?",
            "answer": 150,
            "hint": "分段相加"
          },
          {
            "question": "向西300再向南200共？米",
            "formula": "300+200=?",
            "answer": 500,
            "hint": "分段相加"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "从家到学校再到图书馆一共走了多少米",
              "家到学校的距离",
              "学校到图书馆的距离",
              "家到图书馆的直线距离"
            ],
            "answer": "从家到学校再到图书馆一共走了多少米",
            "explain": "题目问路线总长度，需要把各段相加"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "向南200米到学校，再向东150米到图书馆",
              "向南200米",
              "向东150米",
              "总距离200米"
            ],
            "answer": "向南200米到学校，再向东150米到图书馆",
            "explain": "两段路线：第一段200米，第二段150米"
          },
          {
            "q": "🧩 一共走了多少米？",
            "choices": [
              "200+150=350",
              "200-150=50",
              "200×150=30000",
              "200÷150≈1.33"
            ],
            "answer": "200+150=350",
            "explain": "总路程=各段距离之和：200+150=350米"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中路线：家→南200米→学校→东150米→图书馆",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "总路程=各段距离之和：200+150=350米。注意不是直线距离",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "路线图：逐段描述方向和距离。总路程=各段相加。每段以新位置为观测点",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师告诉小红乘积为1的两个数互为倒数。小红想知道3/4的倒数。",
        "question": "3/4的倒数是？/3（填分子）",
        "formula": "3/4的倒数 = ?/3",
        "answer": 4,
        "choices": [
          4,
          3,
          1,
          7
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 4,
          "total": 3,
          "color": "#00A896"
        },
        "knowledge": "倒数的认识",
        "difficulty": 2,
        "hint": "分子分母交换位置",
        "variants": [
          {
            "question": "2/5的倒数是？/2（填分子）",
            "formula": "2/5倒数=?/2",
            "answer": 5,
            "hint": "交换"
          },
          {
            "question": "5/7的倒数是？/5（填分子）",
            "formula": "5/7倒数=?/5",
            "answer": 7,
            "hint": "交换"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "3/4的倒数（填分子，分母3）",
              "3/4的2倍",
              "3/4约分",
              "3/4化成小数"
            ],
            "answer": "3/4的倒数（填分子，分母3）",
            "explain": "题目问「3/4的倒数是?/3」，求倒数"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "乘积为1的两个数互为倒数",
              "3/4×3/4=9/16",
              "3/4+1=7/4",
              "3/4÷1=3/4"
            ],
            "answer": "乘积为1的两个数互为倒数",
            "explain": "倒数定义：两个数相乘等于1"
          },
          {
            "q": "🧩 3/4的倒数分子是几？",
            "choices": [
              "分子分母交换位置，4/3分子是4",
              "分子不变是3",
              "分子分母相加是7",
              "分子分母相乘是12"
            ],
            "answer": "分子分母交换位置，4/3分子是4",
            "explain": "求倒数：分子分母交换位置。3/4的倒数=4/3，分子是4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中3/4和4/3，分子分母交换位置",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "倒数：乘积为1的两个数互为倒数。3/4的倒数=4/3（分子分母交换），分子是4",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求倒数方法：分子分母交换位置。1的倒数是1，0没有倒数。真分数的倒数是假分数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把4/5米长的丝带平均分成2段。她算每段长多少米。",
        "question": "4/5 ÷ 2 = ?/5（填分子）",
        "formula": "4/5 ÷ 2 = ?/5",
        "answer": 2,
        "choices": [
          2,
          4,
          8,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 2,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "分数除以整数",
        "difficulty": 2,
        "hint": "除以整数=乘倒数",
        "variants": [
          {
            "question": "6/7÷3=?/7（填分子）",
            "formula": "6/7÷3=?/7",
            "answer": 2,
            "hint": "乘倒数"
          },
          {
            "question": "3/8÷3=?/8（填分子）",
            "formula": "3/8÷3=?/8",
            "answer": 1,
            "hint": "乘倒数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "4/5÷2等于多少（填分子，分母5）",
              "4/5×2等于多少",
              "4/5+2等于多少",
              "4/5-2等于多少"
            ],
            "answer": "4/5÷2等于多少（填分子，分母5）",
            "explain": "题目问「4/5÷2=?/5」，分数除以整数"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "4/5米丝带平均分成2段",
              "4/5米丝带剪成5段",
              "4/5米丝带剪成4段",
              "2米丝带分成4/5"
            ],
            "answer": "4/5米丝带平均分成2段",
            "explain": "分数除以整数：除以一个整数等于乘它的倒数"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "4/5×1/2=4/10=2/5，分子是2",
              "4×2=8，分子是8",
              "4÷2=2，分子是2（直接除）",
              "4-2=2，分子是2"
            ],
            "answer": "4/5×1/2=4/10=2/5，分子是2",
            "explain": "4/5÷2=4/5×1/2=4/10=2/5，分子是2"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中4/5平均分成2段，每段是2/5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "分数除以整数(0除外)=乘这个整数的倒数：4/5÷2=4/5×1/2=4/10=2/5，分子是2",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分数除以整数：除以一个整数(0除外)等于乘这个整数的倒数。能约分的先约分",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红有2米长绳子，每1/3米剪一段。她算可以剪几段。",
        "question": "2 ÷ 1/3 = ?",
        "formula": "2 ÷ 1/3 = ?",
        "answer": 6,
        "choices": [
          6,
          2,
          3,
          5
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 6,
          "parts": [
            {
              "label": "6段",
              "val": 6,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "一个数除以分数",
        "difficulty": 3,
        "hint": "除以分数=乘倒数",
        "variants": [
          {
            "question": "3÷1/4=?",
            "formula": "3÷1/4=?",
            "answer": 12,
            "hint": "乘倒数"
          },
          {
            "question": "5÷1/2=?",
            "formula": "5÷1/2=?",
            "answer": 10,
            "hint": "乘倒数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "2÷1/3等于多少",
              "2×1/3等于多少",
              "2+1/3等于多少",
              "2-1/3等于多少"
            ],
            "answer": "2÷1/3等于多少",
            "explain": "题目问2米绳子每1/3米剪一段，可以剪几段"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "总长2米，每段1/3米",
              "总长2米，每段1/2米",
              "总长3米，每段1米",
              "总长1米，每段1/3米"
            ],
            "answer": "总长2米，每段1/3米",
            "explain": "总长÷每段长度=段数"
          },
          {
            "q": "🧩 可以剪几段？",
            "choices": [
              "2÷1/3=2×3=6",
              "2×1/3=2/3",
              "2+1/3=7/3",
              "2-1/3=5/3"
            ],
            "answer": "2÷1/3=2×3=6",
            "explain": "除以分数=乘倒数：2÷1/3=2×3=6段"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中2米长的绳子，每1/3米一段，共6段",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除以分数=乘它的倒数：2÷1/3=2×3=6段",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "一个数除以分数=乘这个分数的倒数。a÷(b/c)=a×(c/b)。除法变乘法，除数变倒数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算1/2+1/3×1/4。老师告诉她先算乘法再算加法。",
        "question": "1/3 × 1/4 = ?/12（填分子）",
        "formula": "1/3 × 1/4 = ?/12",
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
          "total": 12,
          "color": "#00A896"
        },
        "knowledge": "分数混合运算",
        "difficulty": 3,
        "hint": "先乘除后加减",
        "variants": [
          {
            "question": "2/3×3/4=?/12（填分子）",
            "formula": "2/3×3/4=?/12",
            "answer": 6,
            "hint": "先算乘法"
          },
          {
            "question": "1/2-1/4×1/2中乘法=?/8（填分子）",
            "formula": "1/4×1/2=?/8",
            "answer": 1,
            "hint": "先算乘法"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "1/3×1/4等于多少（填分子，分母12）",
              "1/2+1/3等于多少",
              "1/3+1/4等于多少",
              "1/2×1/3等于多少"
            ],
            "answer": "1/3×1/4等于多少（填分子，分母12）",
            "explain": "题目是混合运算1/2+1/3×1/4，先算乘法部分"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "先乘除后加减，先算1/3×1/4",
              "先算1/2+1/3",
              "从右到左算",
              "先算加法"
            ],
            "answer": "先乘除后加减，先算1/3×1/4",
            "explain": "分数混合运算顺序同整数：先乘除后加减"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "1×1=1，分子是1",
              "1+1=2，分子是2",
              "1×4=4，分子是4",
              "3×4=12，分子是12"
            ],
            "answer": "1×1=1，分子是1",
            "explain": "1/3×1/4=(1×1)/(3×4)=1/12，分子是1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中1/12，把1/3再取1/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "分数混合运算：先乘除后加减。先算1/3×1/4=(1×1)/(3×4)=1/12，分子是1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分数混合运算顺序同整数：先乘除后加减，有括号先算括号。运算定律同样适用",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红有一些糖果，1/3是6颗。她算一共有多少颗。",
        "question": "x × 1/3 = 6，x = ?",
        "formula": "6 ÷ 1/3 = ?",
        "answer": 18,
        "choices": [
          18,
          6,
          2,
          9
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 18,
          "parts": [
            {
              "label": "1/3→6颗",
              "val": 6,
              "color": "#00A896"
            },
            {
              "label": "2/3→12颗",
              "val": 12,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "已知一个数的几分之几求这个数",
        "difficulty": 3,
        "hint": "对应量÷对应分率=单位1",
        "variants": [
          {
            "question": "1/4是8，总数？",
            "formula": "8÷1/4=?",
            "answer": 32,
            "hint": "除以分率"
          },
          {
            "question": "2/5是10，总数？",
            "formula": "10÷2/5=?",
            "answer": 25,
            "hint": "除以分率"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共有多少颗糖果",
              "6颗是几分之几",
              "1/3是多少颗",
              "还剩多少颗"
            ],
            "answer": "一共有多少颗糖果",
            "explain": "题目说1/3是6颗，求总数"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "1/3是6颗，求总数",
              "1/3颗糖果",
              "6颗是1/3的几倍",
              "3颗糖果"
            ],
            "answer": "1/3是6颗，求总数",
            "explain": "已知一个数的几分之几是多少，求这个数"
          },
          {
            "q": "🧩 一共有多少颗？",
            "choices": [
              "6÷1/3=6×3=18",
              "6×1/3=2",
              "6+3=9",
              "6-3=3"
            ],
            "answer": "6÷1/3=6×3=18",
            "explain": "对应量÷对应分率=单位1：6÷1/3=18颗"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中总数18颗，1/3=6颗，2/3=12颗",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "已知一个数的1/3是6，求这个数：6÷1/3=6×3=18颗。对应量÷对应分率=单位1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "已知一个数的几分之几是多少，求这个数：用除法（量÷对应分率=单位1）。也可用方程",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红读一本书，已读比未读多1/4。已知未读20页，已读比未读多多少页？",
        "question": "20 × 1/4 = ?页",
        "formula": "20 × 1/4 = ?",
        "answer": 5,
        "choices": [
          5,
          20,
          25,
          4
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "未读20",
              "val": 20,
              "color": "#00A896"
            },
            {
              "label": "多5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "已知比一个数多/少几分之几求这个数",
        "difficulty": 3,
        "hint": "找准单位1",
        "variants": [
          {
            "question": "比30少1/6是？",
            "formula": "30×(1-1/6)=?",
            "answer": 25,
            "hint": "×(1-1/6)"
          },
          {
            "question": "比40多1/8是？",
            "formula": "40×(1+1/8)=?",
            "answer": 45,
            "hint": "×(1+1/8)"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "已读比未读多多少页",
              "未读有多少页",
              "已读有多少页",
              "一共多少页"
            ],
            "answer": "已读比未读多多少页",
            "explain": "题目说已读比未读多1/4，未读20页，求多多少页"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "未读20页（单位1），已读比未读多1/4",
              "已读20页",
              "未读比已读多1/4",
              "共20页"
            ],
            "answer": "未读20页（单位1），已读比未读多1/4",
            "explain": "未读20页是单位1，「多的部分」=20×1/4"
          },
          {
            "q": "🧩 多多少页？",
            "choices": [
              "20×1/4=5",
              "20÷1/4=80",
              "20+1/4=20.25",
              "20×(1+1/4)=25"
            ],
            "answer": "20×1/4=5",
            "explain": "多的部分=单位1×分数：20×1/4=5页"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中未读20页，多出5页就是已读比未读多的部分",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "未读20页是单位1，已读比未读多1/4，多的部分=20×1/4=5页",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "已知比一个数多/少几分之几求这个数：找准单位1。多的部分=单位1×分数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "苹果和梨共36个，苹果是梨的2倍。小红算梨有几个。",
        "question": "36 ÷ (1+2) = ?",
        "formula": "36 ÷ 3 = ?",
        "answer": 12,
        "choices": [
          12,
          24,
          18,
          36
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 36,
          "parts": [
            {
              "label": "梨12",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "苹果24",
              "val": 24,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "分数乘除法解决问题综合",
        "difficulty": 3,
        "hint": "和倍问题总量÷份数和",
        "variants": [
          {
            "question": "甲乙共48甲是乙3倍乙？",
            "formula": "48÷4=?",
            "answer": 12,
            "hint": "总量÷份数和"
          },
          {
            "question": "甲乙共60甲比乙多2倍乙？",
            "formula": "60÷3=?",
            "answer": 20,
            "hint": "总量÷份数和"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "梨有几个",
              "苹果有几个",
              "苹果比梨多几个",
              "一共有几个"
            ],
            "answer": "梨有几个",
            "explain": "题目说苹果和梨共36个，苹果是梨的2倍，求梨"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "共36个，苹果是梨的2倍",
              "共36个，苹果比梨多2个",
              "苹果36个",
              "梨36个"
            ],
            "answer": "共36个，苹果是梨的2倍",
            "explain": "和倍问题：梨=1份，苹果=2份，共3份"
          },
          {
            "q": "🧩 梨有几个？",
            "choices": [
              "36÷(1+2)=12",
              "36÷2=18",
              "36×2=72",
              "36-2=34"
            ],
            "answer": "36÷(1+2)=12",
            "explain": "和倍问题：总量÷份数和=每份量。36÷3=12个（梨）"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中梨12个（1份），苹果24个（2份），共36个",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "和倍问题：苹果是梨的2倍，梨=1份，苹果=2份，共3份。36÷3=12个（梨）",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "和倍问题：总量÷份数和=每份量。差倍问题：差÷份数差=每份量。关键是把份数关系弄清楚",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "修一条路，甲队单独修10天完成，乙队单独修15天完成。两队合修几天完成？",
        "question": "1÷(1/10+1/15) = ?天",
        "formula": "1÷(1/10+1/15)=?",
        "answer": 6,
        "choices": [
          6,
          25,
          5,
          12
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 6,
          "parts": [
            {
              "label": "合修6天",
              "val": 6,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "工程问题",
        "difficulty": 3,
        "hint": "工作总量÷效率和=时间",
        "variants": [
          {
            "question": "甲5天乙10天合修？天",
            "formula": "1÷(1/5+1/10)=?",
            "answer": 3.33,
            "hint": "1÷效率和"
          },
          {
            "question": "甲6天乙12天合修？天",
            "formula": "1÷(1/6+1/12)=?",
            "answer": 4,
            "hint": "1÷效率和"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "两队合修几天完成",
              "甲队几天完成",
              "乙队几天完成",
              "两队一共修了多少"
            ],
            "answer": "两队合修几天完成",
            "explain": "题目问甲乙两队合修几天完成"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "甲单独10天，乙单独15天",
              "甲单独10天",
              "乙单独15天",
              "两队各修10天"
            ],
            "answer": "甲单独10天，乙单独15天",
            "explain": "工程问题：工作总量=1，效率=1÷时间"
          },
          {
            "q": "🧩 合修几天完成？",
            "choices": [
              "1÷(1/10+1/15)=6",
              "10+15=25",
              "10×15=150",
              "10-15=-5"
            ],
            "answer": "1÷(1/10+1/15)=6",
            "explain": "合做效率=1/10+1/15=1/6，时间=1÷1/6=6天"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中合修6天完成，甲效率1/10，乙效率1/15",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "工作总量=1，甲效率=1/10，乙效率=1/15，合做效率=1/10+1/15=1/6。时间=1÷1/6=6天",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "工程问题：工作总量÷效率和=合作时间。工作效率=1÷工作时间。合做效率=各自效率之和",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "班级有男生15人女生10人。老师问男生和女生人数的比。",
        "question": "15:10化简后前项是？",
        "formula": "15:10 = ?/2",
        "answer": 3,
        "choices": [
          3,
          15,
          5,
          2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "男15",
              "val": 15,
              "color": "#00A896"
            },
            {
              "label": "女10",
              "val": 10,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "比的意义",
        "difficulty": 2,
        "hint": "两个数相除又叫比",
        "variants": [
          {
            "question": "8:6化简前项？",
            "formula": "8:6=?/3",
            "answer": 4,
            "hint": "同除以2"
          },
          {
            "question": "12:9化简前项？",
            "formula": "12:9=?/3",
            "answer": 4,
            "hint": "同除以3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "15:10化简后前项是几",
              "15:10化简后后项是几",
              "15和10的比值",
              "15和10的最大公因数"
            ],
            "answer": "15:10化简后前项是几",
            "explain": "题目问「15:10化简后前项是几？」，化简后分母是2"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "男生15人女生10人，比是15:10",
              "男生15人",
              "女生10人",
              "共25人"
            ],
            "answer": "男生15人女生10人，比是15:10",
            "explain": "比的意义：两个数相除又叫比"
          },
          {
            "q": "🧩 化简后前项是几？",
            "choices": [
              "15和10同除以5，前项3",
              "15和10同除以5，后项2",
              "15÷10=1.5",
              "15+10=25"
            ],
            "answer": "15和10同除以5，前项3",
            "explain": "15:10=(15÷5):(10÷5)=3:2，前项是3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中男15女10，化简后男3女2（同除以5）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "比的意义：两个数相除又叫比。15:10化简，前后项同除以5=3:2，前项是3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "比的意义：a:b表示a÷b。前项÷后项=比值。比可以化简但比值不变",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师告诉小红比的前项后项同时乘一个数比值不变。1:2=2:?",
        "question": "1:2 = 2: ?，问号是几？",
        "formula": "1:2 = 2:?",
        "answer": 4,
        "choices": [
          4,
          2,
          1,
          3
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 4,
          "points": [
            {
              "pos": 1,
              "label": "1",
              "color": "#00A896"
            },
            {
              "pos": 2,
              "label": "2",
              "color": "#F5B800"
            },
            {
              "pos": 4,
              "label": "4",
              "color": "#FB923C"
            }
          ],
          "highlight": [
            0,
            4
          ]
        },
        "knowledge": "比的基本性质",
        "difficulty": 2,
        "hint": "前项后项同乘相同数",
        "variants": [
          {
            "question": "3:4=6:?",
            "formula": "3:4=6:?",
            "answer": 8,
            "hint": "同乘2"
          },
          {
            "question": "2:5=?:15",
            "formula": "2:5=?:15",
            "answer": 6,
            "hint": "同乘3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "1:2=2:?，问号是几",
              "1:2的比值",
              "1:2化简",
              "2:4化简"
            ],
            "answer": "1:2=2:?，问号是几",
            "explain": "题目问「1:2=2:?，问号是几？」"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "比的基本性质：前后项同乘相同数比值不变",
              "1:2的比值是0.5",
              "1+2=3",
              "2-1=1"
            ],
            "answer": "比的基本性质：前后项同乘相同数比值不变",
            "explain": "前项1→2乘2，后项也要乘2"
          },
          {
            "q": "🧩 问号是几？",
            "choices": [
              "前项乘2，后项也乘2，2×2=4",
              "前项加1，后项也加1，2+1=3",
              "后项不变是2",
              "后项乘1是2"
            ],
            "answer": "前项乘2，后项也乘2，2×2=4",
            "explain": "1:2=(1×2):(2×2)=2:4，问号是4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上1:2=2:4，前项后项同乘2",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "比的基本性质：前项后项同时乘相同的数(0除外)，比值不变。1:2=(1×2):(2×2)=2:4",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "比的基本性质：前项后项同乘或同除以相同的数(0除外)，比值不变（类似分数基本性质）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红要把比12:8化简。她同时除以4。",
        "question": "12:8化简后后项是？",
        "formula": "12:8 = 3:?",
        "answer": 2,
        "choices": [
          2,
          8,
          4,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 20,
          "parts": [
            {
              "label": "12",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "8",
              "val": 8,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "化简比",
        "difficulty": 2,
        "hint": "同除以最大公因数",
        "variants": [
          {
            "question": "15:10化简后后项？",
            "formula": "15:10=3:?",
            "answer": 2,
            "hint": "同除以5"
          },
          {
            "question": "18:12化简后后项？",
            "formula": "18:12=3:?",
            "answer": 2,
            "hint": "同除以6"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "12:8化简后后项是几",
              "12:8化简后前项是几",
              "12和8的比值",
              "12和8的最大公因数"
            ],
            "answer": "12:8化简后后项是几",
            "explain": "题目问「12:8化简后后项是几？」，化简后前项是3"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "12和8的最大公因数是4",
              "12÷8=1.5",
              "12+8=20",
              "12-8=4"
            ],
            "answer": "12和8的最大公因数是4",
            "explain": "化简比：前后项同除以最大公因数"
          },
          {
            "q": "🧩 化简后后项是几？",
            "choices": [
              "8÷4=2，后项是2",
              "12÷4=3，前项是3",
              "8÷2=4，后项是4",
              "8不变，后项是8"
            ],
            "answer": "8÷4=2，后项是2",
            "explain": "12:8=(12÷4):(8÷4)=3:2，后项是2"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中12:8化简成3:2（同除以4）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "化简比：前后项同除以最大公因数。12和8的最大公因数是4，12:8=3:2，后项是2",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "化简比：前后项同除以最大公因数，化成最简整数比。最简比前后项互质（只有公因数1）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师把30本练习本按2:3分给甲乙两组。小红算甲组分几本。",
        "question": "30 × 2/(2+3) = ?",
        "formula": "30 × 2/5 = ?",
        "answer": 12,
        "choices": [
          12,
          18,
          15,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 30,
          "parts": [
            {
              "label": "甲12",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "乙18",
              "val": 18,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "按比分配",
        "difficulty": 3,
        "hint": "总量×各自份数/总份数",
        "variants": [
          {
            "question": "40按3:5分甲？",
            "formula": "40×3/8=?",
            "answer": 15,
            "hint": "按份数分"
          },
          {
            "question": "24按1:2分乙？",
            "formula": "24×2/3=?",
            "answer": 16,
            "hint": "按份数分"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "甲组分几本",
              "乙组分几本",
              "甲比乙多几本",
              "一共几本"
            ],
            "answer": "甲组分几本",
            "explain": "题目说30本按2:3分给甲乙，求甲组分几本"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "30本按2:3分给甲乙",
              "30本按3:2分",
              "30本平均分",
              "30本按1:1分"
            ],
            "answer": "30本按2:3分给甲乙",
            "explain": "按比分配：总份数=2+3=5"
          },
          {
            "q": "🧩 甲组分几本？",
            "choices": [
              "30×2/(2+3)=30×2/5=12",
              "30×3/(2+3)=30×3/5=18",
              "30÷2=15",
              "30÷3=10"
            ],
            "answer": "30×2/(2+3)=30×2/5=12",
            "explain": "甲占2份：30×2/5=12本"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中30本分成甲12本、乙18本（2:3）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "按比分配：总份数=2+3=5，每份=30÷5=6本。甲=6×2=12本。或30×2/5=12",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "按比分配：总量÷总份数=每份量，再×各自份数。或总量×各自份数/总份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红画了一个圆。老师告诉她圆心到圆上任意一点的线段叫半径。如果半径3cm，直径多少？",
        "question": "直径 = 2 × 3 = ? cm",
        "formula": "d = 2r = 2×3",
        "answer": 6,
        "choices": [
          6,
          3,
          9,
          1.5
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "radius": 3
          }
        },
        "knowledge": "圆的认识",
        "difficulty": 1,
        "hint": "直径=半径×2",
        "variants": [
          {
            "question": "半径5cm直径？cm",
            "formula": "d=2×5",
            "answer": 10,
            "hint": "直径=2r"
          },
          {
            "question": "直径8cm半径？cm",
            "formula": "r=8÷2",
            "answer": 4,
            "hint": "半径=d/2"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "半径3cm的圆直径多少",
              "直径3cm的圆半径多少",
              "半径3cm的圆周长",
              "半径3cm的圆面积"
            ],
            "answer": "半径3cm的圆直径多少",
            "explain": "题目问半径3cm，直径多少"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "半径r=3cm",
              "直径d=3cm",
              "周长C=3cm",
              "面积S=3cm²"
            ],
            "answer": "半径r=3cm",
            "explain": "圆心到圆上的线段叫半径"
          },
          {
            "q": "🧩 直径是多少？",
            "choices": [
              "d=2r=2×3=6",
              "d=r=3",
              "d=r÷2=1.5",
              "d=r²=9"
            ],
            "answer": "d=2r=2×3=6",
            "explain": "同圆中直径=半径×2：d=2r=2×3=6cm"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中圆心到圆上的线段是半径3cm，通过圆心的线段是直径6cm",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "同圆中直径=半径×2：d=2r=2×3=6cm",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "圆的特征：圆心O、半径r、直径d。同圆中d=2r。圆有无数条半径和直径，都相等",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红量得一个圆的直径是10cm。她算周长（π取3.14）。",
        "question": "C = 3.14 × 10 = ? cm",
        "formula": "C = πd = 3.14×10",
        "answer": 31.4,
        "choices": [
          31.4,
          31,
          314,
          3.14
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "diameter": 10
          }
        },
        "knowledge": "圆的周长",
        "difficulty": 2,
        "hint": "C=πd",
        "variants": [
          {
            "question": "直径6cm周长？cm",
            "formula": "C=3.14×6",
            "answer": 18.84,
            "hint": "π乘直径"
          },
          {
            "question": "半径5cm周长？cm",
            "formula": "C=2×3.14×5",
            "answer": 31.4,
            "hint": "C=2πr"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "直径10cm的圆的周长",
              "半径10cm的圆的周长",
              "直径10cm的圆的面积",
              "直径10cm的圆的半径"
            ],
            "answer": "直径10cm的圆的周长",
            "explain": "题目问直径10cm，周长多少（π取3.14）"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "直径d=10cm，π≈3.14",
              "半径r=10cm",
              "直径d=3.14cm",
              "周长C=10cm"
            ],
            "answer": "直径d=10cm，π≈3.14",
            "explain": "圆周长=π×直径"
          },
          {
            "q": "🧩 周长是多少？",
            "choices": [
              "C=πd=3.14×10=31.4",
              "C=πd=3.14×10=314",
              "C=2πr=2×3.14×5=31.4",
              "C=d=10"
            ],
            "answer": "C=πd=3.14×10=31.4",
            "explain": "周长=π×直径：C=πd=3.14×10=31.4cm"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中圆的直径10cm，周长是直径的π倍",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "圆的周长=π×直径：C=πd=3.14×10=31.4cm。也可用C=2πr",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "周长公式：C=πd=2πr。π是圆周率≈3.14，是周长与直径的比值。任何圆的周长÷直径=π",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红算半径3cm的圆的面积（π取3.14）。",
        "question": "S = 3.14 × 3² = ?",
        "formula": "S = πr² = 3.14×9",
        "answer": 28.26,
        "choices": [
          28.26,
          28.6,
          9.42,
          18.84
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "radius": 3
          }
        },
        "knowledge": "圆的面积",
        "difficulty": 2,
        "hint": "S=πr²",
        "variants": [
          {
            "question": "半径2cm面积？",
            "formula": "S=3.14×4",
            "answer": 12.56,
            "hint": "πr²"
          },
          {
            "question": "半径5cm面积？",
            "formula": "S=3.14×25",
            "answer": 78.5,
            "hint": "πr²"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "半径3cm的圆的面积",
              "直径3cm的圆的面积",
              "半径3cm的圆的周长",
              "半径3cm的圆的直径"
            ],
            "answer": "半径3cm的圆的面积",
            "explain": "题目问半径3cm，面积多少（π取3.14）"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "半径r=3cm，π≈3.14",
              "直径d=3cm",
              "半径r=3.14cm",
              "面积S=3cm²"
            ],
            "answer": "半径r=3cm，π≈3.14",
            "explain": "圆面积=π×半径的平方"
          },
          {
            "q": "🧩 面积是多少？",
            "choices": [
              "S=πr²=3.14×3²=3.14×9=28.26",
              "S=πr=3.14×3=9.42",
              "S=πd=3.14×6=18.84",
              "S=r²=9"
            ],
            "answer": "S=πr²=3.14×3²=3.14×9=28.26",
            "explain": "面积=π×半径的平方：S=πr²=3.14×9=28.26cm²"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中半径3cm的圆，面积=πr²",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "圆的面积=π×半径的平方：S=πr²=3.14×3²=3.14×9=28.26cm²",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "面积公式：S=πr²。圆可以割拼成近似长方形，长=πr（半周长），宽=r，所以S=πr×r=πr²",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个圆环外圆半径4cm内圆半径2cm。小红算圆环面积（π取3.14）。",
        "question": "S环 = 3.14×(4²-2²) = ?",
        "formula": "3.14×(16-4)=?",
        "answer": 37.68,
        "choices": [
          37.68,
          37.6,
          12.56,
          50.24
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "ring",
          "params": {
            "outerRadius": 4,
            "innerRadius": 2
          }
        },
        "knowledge": "圆环的面积",
        "difficulty": 3,
        "hint": "S环=π(R²-r²)",
        "variants": [
          {
            "question": "外5内3圆环面积？",
            "formula": "3.14×(25-9)=?",
            "answer": 50.24,
            "hint": "π(R²-r²)"
          },
          {
            "question": "外3内1圆环面积？",
            "formula": "3.14×(9-1)=?",
            "answer": 25.12,
            "hint": "π(R²-r²)"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "圆环的面积",
              "大圆的面积",
              "小圆的面积",
              "圆环的周长"
            ],
            "answer": "圆环的面积",
            "explain": "题目问外圆半径4cm内圆半径2cm的圆环面积"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "外圆半径4cm，内圆半径2cm",
              "外圆半径2cm，内圆半径4cm",
              "外圆直径4cm，内圆直径2cm",
              "半径4cm"
            ],
            "answer": "外圆半径4cm，内圆半径2cm",
            "explain": "圆环=大圆-小圆"
          },
          {
            "q": "🧩 圆环面积是多少？",
            "choices": [
              "S=π(R²-r²)=3.14×(16-4)=37.68",
              "S=π(R-r)²=3.14×4=12.56",
              "S=πR²-π=3.14×16-3.14=47.1",
              "S=R²-r²=16-4=12"
            ],
            "answer": "S=π(R²-r²)=3.14×(16-4)=37.68",
            "explain": "圆环面积=π×(外圆半径²-内圆半径²)=3.14×(16-4)=37.68cm²"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中外圆半径4内圆半径2，圆环面积=大圆减小圆",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "圆环面积=πR²-πr²=π(R²-r²)=3.14×(4²-2²)=3.14×(16-4)=37.68cm²",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "圆环面积：S=π(R²-r²)。提取公因数π后先算R²-r²更简便。注意是半径的平方差，不是半径差的平方",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师告诉小红圆心角90°的扇形面积是整个圆的1/4。如果圆面积是12cm²，扇形面积多少？",
        "question": "12 × 1/4 = ? cm²",
        "formula": "12 × 1/4 = ?",
        "answer": 3,
        "choices": [
          3,
          12,
          4,
          9
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "sector",
          "params": {
            "angle": 90,
            "radius": 3
          }
        },
        "knowledge": "扇形",
        "difficulty": 2,
        "hint": "圆心角/360°=扇形占比",
        "variants": [
          {
            "question": "180°扇形占圆的？/4（填分子）",
            "formula": "180°=?/4",
            "answer": 2,
            "hint": "半圆"
          },
          {
            "question": "60°扇形占圆的？/6（填分子）",
            "formula": "60°=?/6",
            "answer": 1,
            "hint": "60/360=1/6"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "90°扇形的面积（圆面积12cm²）",
              "圆的面积",
              "扇形的周长",
              "圆心角是多少"
            ],
            "answer": "90°扇形的面积（圆面积12cm²）",
            "explain": "题目问圆心角90°，圆面积12cm²，扇形面积多少"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "圆心角90°，圆面积12cm²",
              "圆心角90°",
              "圆面积12cm²",
              "半径3cm"
            ],
            "answer": "圆心角90°，圆面积12cm²",
            "explain": "扇形面积=圆面积×(圆心角÷360°)"
          },
          {
            "q": "🧩 扇形面积是多少？",
            "choices": [
              "12×(90÷360)=12×1/4=3",
              "12×90=1080",
              "12÷90≈0.13",
              "12×4=48"
            ],
            "answer": "12×(90÷360)=12×1/4=3",
            "explain": "90°占360°的1/4：12×1/4=3cm²"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中90°扇形占整个圆的1/4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "扇形面积=圆面积×(圆心角/360°)：12×(90/360)=12×1/4=3cm²",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "扇形：圆心角占周角(360°)的几分之几，面积就占圆面积的几分之几。180°=半圆=1/2，90°=1/4",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个边长4cm的正方形内有一个最大的圆。小红算圆的面积（π取3.14）。",
        "question": "S = 3.14 × 2² = ?",
        "formula": "3.14×2²=?",
        "answer": 12.56,
        "choices": [
          12.56,
          12.56,
          16,
          50.24
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "composite",
          "params": {
            "outer": "square",
            "inner": "circle",
            "side": 4
          }
        },
        "knowledge": "解决圆的组合图形问题",
        "difficulty": 3,
        "hint": "正方形内最大圆直径=边长",
        "variants": [
          {
            "question": "边长6cm正方形内最大圆面积？",
            "formula": "3.14×3²=?",
            "answer": 28.26,
            "hint": "半径=边长/2"
          },
          {
            "question": "边长10cm正方形内最大圆面积？",
            "formula": "3.14×5²=?",
            "answer": 78.5,
            "hint": "半径=边长/2"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "正方形内最大圆的面积",
              "正方形的面积",
              "圆的周长",
              "正方形的周长"
            ],
            "answer": "正方形内最大圆的面积",
            "explain": "题目问边长4cm正方形内最大圆的面积"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "正方形边长4cm，最大圆直径=边长=4cm",
              "正方形边长4cm",
              "圆半径4cm",
              "圆直径2cm"
            ],
            "answer": "正方形边长4cm，最大圆直径=边长=4cm",
            "explain": "正方形内最大圆的直径=正方形边长，半径=边长÷2=2cm"
          },
          {
            "q": "🧩 圆的面积是多少？",
            "choices": [
              "S=πr²=3.14×2²=12.56",
              "S=πd=3.14×4=12.56",
              "S=4²=16",
              "S=π×4²=50.24"
            ],
            "answer": "S=πr²=3.14×2²=12.56",
            "explain": "半径=4÷2=2cm，S=πr²=3.14×2²=3.14×4=12.56cm²"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中边长4cm正方形内最大的圆，直径=4cm，半径=2cm",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "正方形内最大圆：直径=正方形边长=4cm，半径=2cm。S=πr²=3.14×4=12.56cm²",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "组合图形：正方形内最大圆的直径=边长。外方内圆：剩余面积=正方形-圆。外圆内方：正方形对角线=直径",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红考试得了95分满分100分。老师问她的得分率是百分之几。",
        "question": "95/100 = ?%",
        "formula": "95÷100=?%",
        "answer": 95,
        "choices": [
          95,
          100,
          5,
          59
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 100,
          "parts": [
            {
              "label": "95%",
              "val": 95,
              "color": "#00A896"
            },
            {
              "label": "5%",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "百分数的意义和读写",
        "difficulty": 1,
        "hint": "百分数表示一个数是另一个的百分之几",
        "variants": [
          {
            "question": "80分满分100得分率？%",
            "formula": "80÷100=?%",
            "answer": 80,
            "hint": "除以100"
          },
          {
            "question": "72分满分100得分率？%",
            "formula": "72÷100=?%",
            "answer": 72,
            "hint": "除以100"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "得分率是百分之几",
              "得了多少分",
              "满分是多少",
              "错了百分之几"
            ],
            "answer": "得分率是百分之几",
            "explain": "题目问得95分满分100分，得分率是百分之几"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "得95分，满分100分",
              "得95分",
              "满分100分",
              "95分以上"
            ],
            "answer": "得95分，满分100分",
            "explain": "百分数=部分÷总数×100%"
          },
          {
            "q": "🧩 得分率是多少？",
            "choices": [
              "95÷100=95%",
              "95×100=9500%",
              "100÷95≈105%",
              "95+100=195%"
            ],
            "answer": "95÷100=95%",
            "explain": "得分率=得分÷满分×100%=95÷100=95%"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中100格涂了95格，占95%",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "百分数=部分÷总数×100%：95÷100=95%。表示95分占100分的95%",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "百分数表示一个数是另一个数的百分之几。百分数只表示关系，不带单位。也叫百分率或百分比",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红要把0.25化成百分数。老师告诉她小数化百分数乘100再加%。",
        "question": "0.25 = ?%",
        "formula": "0.25×100=?%",
        "answer": 25,
        "choices": [
          25,
          0.25,
          2.5,
          250
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 1,
          "points": [
            {
              "pos": 0.25,
              "label": "0.25=25%",
              "color": "#00A896"
            }
          ],
          "highlight": [
            0,
            1
          ]
        },
        "knowledge": "百分数与小数分数的互化",
        "difficulty": 2,
        "hint": "小数点右移两位加%",
        "variants": [
          {
            "question": "0.8=?%",
            "formula": "0.8=?%",
            "answer": 80,
            "hint": "右移两位"
          },
          {
            "question": "0.05=?%",
            "formula": "0.05=?%",
            "answer": 5,
            "hint": "右移两位"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "0.25化成百分数",
              "0.25化成分数",
              "25%化成小数",
              "0.25等于多少"
            ],
            "answer": "0.25化成百分数",
            "explain": "题目问0.25等于百分之几"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "小数化百分数：乘100加%",
              "小数化百分数：除以100",
              "小数化百分数：加100",
              "0.25=1/4"
            ],
            "answer": "小数化百分数：乘100加%",
            "explain": "小数点右移两位，加百分号"
          },
          {
            "q": "🧩 0.25等于百分之几？",
            "choices": [
              "0.25×100=25%",
              "0.25÷100=0.0025%",
              "0.25+100=100.25%",
              "0.25×10=2.5%"
            ],
            "answer": "0.25×100=25%",
            "explain": "0.25×100=25，加%得25%"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "数轴上0.25=25%，小数点右移两位",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "小数化百分数：小数点右移两位，加%。0.25→25%",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "互化：小数→百分数×100加%；百分数→小数去%÷100；分数→百分数先化小数再化百分数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "班级50人今天到校48人。小红算出勤率。",
        "question": "48÷50×100% = ?%",
        "formula": "48÷50×100%=?%",
        "answer": 96,
        "choices": [
          96,
          48,
          50,
          100
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 50,
          "parts": [
            {
              "label": "到校48",
              "val": 48,
              "color": "#00A896"
            },
            {
              "label": "缺勤2",
              "val": 2,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "求百分率",
        "difficulty": 2,
        "hint": "达标数÷总数×100%",
        "variants": [
          {
            "question": "40人中38人达标率？%",
            "formula": "38÷40×100%",
            "answer": 95,
            "hint": "除以总数"
          },
          {
            "question": "200粒种子196发芽率？%",
            "formula": "196÷200×100%",
            "answer": 98,
            "hint": "除以总数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "出勤率",
              "到校人数",
              "缺勤人数",
              "总人数"
            ],
            "answer": "出勤率",
            "explain": "题目问50人到校48人，出勤率是多少"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "50人到校48人",
              "50人到校50人",
              "48人到校50人",
              "50人都没到"
            ],
            "answer": "50人到校48人",
            "explain": "出勤率=到校人数÷总人数×100%"
          },
          {
            "q": "🧩 出勤率是多少？",
            "choices": [
              "48÷50×100%=96%",
              "50÷48×100%≈104%",
              "48×50=2400%",
              "48+50=98%"
            ],
            "answer": "48÷50×100%=96%",
            "explain": "出勤率=48÷50×100%=96%"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中50人48人到校（绿色），2人缺勤（橙色）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "出勤率=到校人数÷总人数×100%=48÷50×100%=96%",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "百分率公式：部分÷总数×100%。出勤率、达标率、发芽率、合格率等都是这个公式。结果≤100%",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红原来体重40kg现在36kg。她算体重减轻了百分之几。",
        "question": "(40-36)÷40×100% = ?%",
        "formula": "4÷40×100%=?%",
        "answer": 10,
        "choices": [
          10,
          4,
          36,
          40
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 40,
          "parts": [
            {
              "label": "现在36",
              "val": 36,
              "color": "#00A896"
            },
            {
              "label": "减轻4",
              "val": 4,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "求一个数比另一个数多/少百分之几",
        "difficulty": 3,
        "hint": "差÷单位1×100%",
        "variants": [
          {
            "question": "从50增到60增了？%",
            "formula": "10÷50=?%",
            "answer": 20,
            "hint": "差÷单位1"
          },
          {
            "question": "从80降到60降了？%",
            "formula": "20÷80=?%",
            "answer": 25,
            "hint": "差÷单位1"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "体重减轻了百分之几",
              "减轻了多少千克",
              "现在体重多少",
              "原来体重多少"
            ],
            "answer": "体重减轻了百分之几",
            "explain": "题目问原来40kg现在36kg，减轻了百分之几"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "原来40kg，现在36kg，减轻4kg",
              "原来40kg",
              "现在36kg",
              "减轻4kg"
            ],
            "answer": "原来40kg，现在36kg，减轻4kg",
            "explain": "减轻百分之几=减轻部分÷原来×100%"
          },
          {
            "q": "🧩 减轻了百分之几？",
            "choices": [
              "4÷40×100%=10%",
              "40÷4×100%=1000%",
              "36÷40×100%=90%",
              "4÷36×100%≈11%"
            ],
            "answer": "4÷40×100%=10%",
            "explain": "减轻的部分÷原来×100%：4÷40×100%=10%"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中原40kg，现在36kg，减轻4kg（橙色部分）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "减轻百分之几=减轻的部分÷原来×100%=4÷40×100%=10%。原来40是单位1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求多/少百分之几：(大-小)÷单位1×100%。关键是找准单位1（「比」字后面的数）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一本书原价50元涨价10%。小红算现价多少元。",
        "question": "50 × (1+10%) = ?元",
        "formula": "50×110%=?",
        "answer": 55,
        "choices": [
          55,
          5,
          50,
          60
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 55,
          "parts": [
            {
              "label": "原价50",
              "val": 50,
              "color": "#00A896"
            },
            {
              "label": "涨5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "求比一个数多/少百分之几的数",
        "difficulty": 3,
        "hint": "单位1×(1±百分数)",
        "variants": [
          {
            "question": "40降10%是？",
            "formula": "40×90%=?",
            "answer": 36,
            "hint": "×(1-10%)"
          },
          {
            "question": "30增20%是？",
            "formula": "30×120%=?",
            "answer": 36,
            "hint": "×(1+20%)"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "现价多少元",
              "涨价多少元",
              "原价多少元",
              "涨价了百分之几"
            ],
            "answer": "现价多少元",
            "explain": "题目问原价50元涨价10%，现价多少"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "原价50元，涨价10%",
              "原价50元",
              "涨价10%",
              "现价50元"
            ],
            "answer": "原价50元，涨价10%",
            "explain": "现价=原价×(1+10%)"
          },
          {
            "q": "🧩 现价是多少？",
            "choices": [
              "50×(1+10%)=50×110%=55",
              "50×10%=5",
              "50+50=100",
              "50÷(1+10%)≈45.45"
            ],
            "answer": "50×(1+10%)=50×110%=55",
            "explain": "现价=原价×(1+10%)=50×110%=55元"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中原价50，涨了5元，现价55",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "涨价10%后现价=原价×(1+10%)=50×110%=55元",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求比一个数多/少百分之几的数：单位1×(1±百分数)。多加少减。关键是找准单位1",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一件衣服原价200元打八折。小红算现价多少元。",
        "question": "200 × 80% = ?元",
        "formula": "200×80%=?",
        "answer": 160,
        "choices": [
          160,
          200,
          40,
          80
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 200,
          "parts": [
            {
              "label": "现价160",
              "val": 160,
              "color": "#00A896"
            },
            {
              "label": "优惠40",
              "val": 40,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "折扣",
        "difficulty": 2,
        "hint": "几折=百分之几十",
        "variants": [
          {
            "question": "100元打七折？元",
            "formula": "100×70%=?",
            "answer": 70,
            "hint": "七折=70%"
          },
          {
            "question": "500元打九五折？元",
            "formula": "500×95%=?",
            "answer": 475,
            "hint": "九五折=95%"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "打八折后现价多少",
              "优惠了多少元",
              "原价多少元",
              "打了几折"
            ],
            "answer": "打八折后现价多少",
            "explain": "题目问原价200元打八折，现价多少"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "原价200元，八折=80%",
              "原价200元",
              "八折",
              "现价200元"
            ],
            "answer": "原价200元，八折=80%",
            "explain": "几折=十分之几=百分之几十"
          },
          {
            "q": "🧩 现价是多少？",
            "choices": [
              "200×80%=160",
              "200×8=1600",
              "200÷80%=250",
              "200-80=120"
            ],
            "answer": "200×80%=160",
            "explain": "现价=原价×折扣=200×80%=160元"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中原价200，优惠40，现价160",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "八折=80%，现价=原价×80%=200×0.8=160元",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "折扣：几折=十分之几=百分之几十。八折=80%，九五折=95%。现价=原价×折扣",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "今年小麦比去年增产二成。去年产500千克，小红算增产多少千克。",
        "question": "500 × 20% = ?千克",
        "formula": "500×20%=?",
        "answer": 100,
        "choices": [
          100,
          500,
          20,
          50
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 600,
          "parts": [
            {
              "label": "去年500",
              "val": 500,
              "color": "#00A896"
            },
            {
              "label": "增产100",
              "val": 100,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "成数",
        "difficulty": 2,
        "hint": "几成=十分之几",
        "variants": [
          {
            "question": "去年300增三成增？千克",
            "formula": "300×30%=?",
            "answer": 90,
            "hint": "三成=30%"
          },
          {
            "question": "去年200增一成五增？千克",
            "formula": "200×15%=?",
            "answer": 30,
            "hint": "一成五=15%"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "增产多少千克",
              "今年产多少千克",
              "去年产多少千克",
              "增产了百分之几"
            ],
            "answer": "增产多少千克",
            "explain": "题目问去年500千克增产二成，增产多少"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "去年500千克，增产二成=20%",
              "去年500千克",
              "增产二成",
              "今年500千克"
            ],
            "answer": "去年500千克，增产二成=20%",
            "explain": "几成=十分之几=百分之几十"
          },
          {
            "q": "🧩 增产多少千克？",
            "choices": [
              "500×20%=100",
              "500×2=1000",
              "500÷20%=2500",
              "500+20=520"
            ],
            "answer": "500×20%=100",
            "explain": "增产=去年产量×20%=500×0.2=100千克"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中去年500，增产100，今年600",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "二成=20%，增产=去年产量×20%=500×0.2=100千克",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "成数：几成=十分之几=百分之几十。二成=20%，一成五=15%。常用于农业产量增长",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "爸爸月收入5000元按3%缴纳个人所得税。小红算应纳税多少元。",
        "question": "5000 × 3% = ?元",
        "formula": "5000×3%=?",
        "answer": 150,
        "choices": [
          150,
          5000,
          15,
          300
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 5000,
          "parts": [
            {
              "label": "税150",
              "val": 150,
              "color": "#FB923C"
            },
            {
              "label": "到手4850",
              "val": 4850,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "税率",
        "difficulty": 3,
        "hint": "应纳税额=收入×税率",
        "variants": [
          {
            "question": "8000元按5%纳税？元",
            "formula": "8000×5%=?",
            "answer": 400,
            "hint": "收入×税率"
          },
          {
            "question": "6000元按2%纳税？元",
            "formula": "6000×2%=?",
            "answer": 120,
            "hint": "收入×税率"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "应纳税多少元",
              "到手多少元",
              "总收入多少元",
              "税率是多少"
            ],
            "answer": "应纳税多少元",
            "explain": "题目问月收入5000元按3%纳税，应纳税多少"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "收入5000元，税率3%",
              "收入5000元",
              "税率3%",
              "纳税5000元"
            ],
            "answer": "收入5000元，税率3%",
            "explain": "应纳税额=收入×税率"
          },
          {
            "q": "🧩 应纳税多少元？",
            "choices": [
              "5000×3%=150",
              "5000×0.3=1500",
              "5000÷3≈1667",
              "5000+3=5003"
            ],
            "answer": "5000×3%=150",
            "explain": "应纳税额=收入×税率=5000×3%=150元"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中收入5000，纳税150，到手4850",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "应纳税额=总收入×税率=5000×3%=150元",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "税率：应纳税额=收入×税率。税率是百分数。实际到手=收入-税额",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "妈妈存入银行20000元年利率2.5%存一年。小红算利息多少元。",
        "question": "20000 × 2.5% × 1 = ?元",
        "formula": "20000×2.5%=?",
        "answer": 500,
        "choices": [
          500,
          20000,
          50,
          2500
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 20500,
          "parts": [
            {
              "label": "本金20000",
              "val": 20000,
              "color": "#00A896"
            },
            {
              "label": "利息500",
              "val": 500,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "利率",
        "difficulty": 3,
        "hint": "利息=本金×利率×存期",
        "variants": [
          {
            "question": "10000元年利率3%一年利息？",
            "formula": "10000×3%=?",
            "answer": 300,
            "hint": "本金×利率"
          },
          {
            "question": "5000元年利率4%一年利息？",
            "formula": "5000×4%=?",
            "answer": 200,
            "hint": "本金×利率"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "利息多少元",
              "到期总额多少元",
              "本金多少元",
              "利率是多少"
            ],
            "answer": "利息多少元",
            "explain": "题目问存入20000元年利率2.5%存一年，利息多少"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "本金20000元，年利率2.5%，存1年",
              "本金20000元",
              "年利率2.5%",
              "存1年"
            ],
            "answer": "本金20000元，年利率2.5%，存1年",
            "explain": "利息=本金×利率×存期"
          },
          {
            "q": "🧩 利息是多少？",
            "choices": [
              "20000×2.5%×1=500",
              "20000×2.5%=50000",
              "20000÷2.5%=800000",
              "20000+2.5%=20500"
            ],
            "answer": "20000×2.5%×1=500",
            "explain": "利息=本金×利率×存期=20000×2.5%×1=500元"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中本金20000，利息500，到期共20500",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "利息=本金×利率×存期=20000×2.5%×1=500元。到期总额=本金+利息",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "利率：利息=本金×利率×存期。年利率按年算，月利率按月算。到期总额=本金+利息",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "扇形统计图中表示喜欢苹果的扇形占25%。小红知道整个圆表示100%。",
        "question": "25% = ?/4（填分子）",
        "formula": "25%=?/4",
        "answer": 1,
        "choices": [
          1,
          25,
          4,
          2
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "pie",
          "params": {
            "segments": [
              {
                "label": "苹果",
                "percent": 25,
                "color": "#00A896"
              },
              {
                "label": "其他",
                "percent": 75,
                "color": "#F5B800"
              }
            ]
          }
        },
        "knowledge": "扇形统计图",
        "difficulty": 2,
        "hint": "整个圆=100%",
        "variants": [
          {
            "question": "占50%=?/2（填分子）",
            "formula": "50%=?/2",
            "answer": 1,
            "hint": "50%=1/2"
          },
          {
            "question": "占75%=?/4（填分子）",
            "formula": "75%=?/4",
            "answer": 3,
            "hint": "75%=3/4"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "25%等于四分之几（填分子）",
              "25%等于多少",
              "25%化成小数",
              "25÷4等于多少"
            ],
            "answer": "25%等于四分之几（填分子）",
            "explain": "题目问扇形占25%，25%=?/4，填分子"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "扇形占25%，整个圆=100%",
              "扇形占25%",
              "整个圆=100%",
              "占1/4"
            ],
            "answer": "扇形占25%，整个圆=100%",
            "explain": "百分数化分数：25%=25/100"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "25%=25/100=1/4，分子是1",
              "25%=25/4，分子是25",
              "25%=2/4，分子是2",
              "25%=4/4，分子是4"
            ],
            "answer": "25%=25/100=1/4，分子是1",
            "explain": "25%=25/100，约分后=1/4，分子是1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中扇形占圆的25%（1/4），其他占75%（3/4）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "25%=25/100，约分=1/4，分子是1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "扇形统计图：整个圆=总量=100%，每个扇形表示部分占整体的百分比。扇形角度=360°×百分比",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红想表示一天气温变化情况。老师问她该用什么统计图。",
        "question": "看气温变化趋势用哪种图？（折线填1，条形填2）",
        "formula": "气温变化→?（1折线/2条形）",
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
              "pos": 3,
              "label": "折线",
              "color": "#00A896"
            },
            {
              "pos": 7,
              "label": "看趋势",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            10
          ]
        },
        "knowledge": "选择合适的统计图",
        "difficulty": 2,
        "hint": "折线看趋势条形比多少扇形看占比",
        "variants": [
          {
            "question": "表示各班人数用？图（1条形2折线）",
            "formula": "人数→?",
            "answer": 1,
            "hint": "条形比多少"
          },
          {
            "question": "表示部分占整体比例用？图（1扇形2条形）",
            "formula": "占比→?",
            "answer": 1,
            "hint": "扇形看占比"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "看气温变化趋势用什么统计图",
              "气温是多少度",
              "气温最高多少",
              "用什么颜色"
            ],
            "answer": "看气温变化趋势用什么统计图",
            "explain": "题目问看气温变化趋势用什么图，折线填1条形填2"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "气温变化需要看趋势",
              "气温是数字",
              "气温有最高最低",
              "气温在升高"
            ],
            "answer": "气温变化需要看趋势",
            "explain": "不同统计图有不同特点"
          },
          {
            "q": "🧩 用什么统计图？",
            "choices": [
              "折线统计图看趋势，填1",
              "条形统计图比多少，填2",
              "扇形统计图看占比，填3",
              "什么图都行，填0"
            ],
            "answer": "折线统计图看趋势，填1",
            "explain": "折线统计图能看出数据的变化趋势，适合气温变化，填1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中折线表示数据变化趋势",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "折线统计图能看出数据的变化趋势，适合表示气温变化",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "选择统计图：条形→比多少，折线→看趋势，扇形→看占比。根据数据特点和分析目的选择",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师让小红算1+3+5+7。她发现1+3=4=2²，1+3+5=9=3²。",
        "question": "1+3+5+7 = ?²",
        "formula": "1+3+5+7=?²",
        "answer": 4,
        "choices": [
          4,
          16,
          7,
          8
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "dotArray",
          "params": {
            "layers": 4
          }
        },
        "knowledge": "数与形（等差数列求和）",
        "difficulty": 3,
        "hint": "n个连续奇数之和=n²",
        "variants": [
          {
            "question": "1+3+5=?²",
            "formula": "1+3+5=?²",
            "answer": 3,
            "hint": "3个奇数=3²"
          },
          {
            "question": "1+3+5+7+9=?²",
            "formula": "1+3+5+7+9=?²",
            "answer": 5,
            "hint": "5个奇数=5²"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "1+3+5+7等于几的平方",
              "1+3+5+7等于多少",
              "1+3+5等于几的平方",
              "7的平方是多少"
            ],
            "answer": "1+3+5+7等于几的平方",
            "explain": "题目问连续奇数之和等于几的平方"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "1+3=4=2²，1+3+5=9=3²，规律n个奇数=n²",
              "1+3=4",
              "1+3+5=9",
              "7是奇数"
            ],
            "answer": "1+3=4=2²，1+3+5=9=3²，规律n个奇数=n²",
            "explain": "连续奇数之和=平方数"
          },
          {
            "q": "🧩 等于几的平方？",
            "choices": [
              "4个奇数=4²，填4",
              "和是16，填16",
              "4个奇数，填7",
              "和是16=2²，填2"
            ],
            "answer": "4个奇数=4²，填4",
            "explain": "1+3+5+7=16=4²，4个连续奇数之和=4²，填4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中点阵4层：第1层1个，第2层3个，第3层5个，第4层7个，共16=4²个",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1+3=4=2²，1+3+5=9=3²，1+3+5+7=16=4²。n个连续奇数之和=n²",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "数形结合：连续奇数之和=平方数。1+3+5+...+(2n-1)=n²。图形上对应正方形点阵",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师让小红算1/2+1/4+1/8+1/16。她发现越来越接近1。",
        "question": "1/2+1/4+1/8+1/16 = ?/16（填分子）",
        "formula": "=?/16",
        "answer": 15,
        "choices": [
          15,
          16,
          8,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 15,
          "total": 16,
          "color": "#00A896"
        },
        "knowledge": "数与形（分数序列）",
        "difficulty": 3,
        "hint": "无限逼近1",
        "variants": [
          {
            "question": "1/2+1/4=?/4（填分子）",
            "formula": "=?/4",
            "answer": 3,
            "hint": "逼近1"
          },
          {
            "question": "1/2+1/4+1/8=?/8（填分子）",
            "formula": "=?/8",
            "answer": 7,
            "hint": "逼近1"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "1/2+1/4+1/8+1/16等于多少（填分子，分母16）",
              "1/2+1/4等于多少",
              "1/2等于多少",
              "1/16等于多少"
            ],
            "answer": "1/2+1/4+1/8+1/16等于多少（填分子，分母16）",
            "explain": "题目问分数序列求和，分母16，填分子"
          },
          {
            "q": "🔢 题目给了哪些关键信息？",
            "choices": [
              "每个分数是前一个的一半，越来越接近1",
              "分数相加",
              "分母都是16",
              "分子都是1"
            ],
            "answer": "每个分数是前一个的一半，越来越接近1",
            "explain": "需要通分后相加"
          },
          {
            "q": "🧩 分子是几？",
            "choices": [
              "通分8/16+4/16+2/16+1/16=15/16，分子是15",
              "8+4+2+1+16=31，分子是31",
              "8+4+2+1=15，再加1=16，分子是16",
              "分子是8"
            ],
            "answer": "通分8/16+4/16+2/16+1/16=15/16，分子是15",
            "explain": "1/2=8/16，1/4=4/16，1/8=2/16，1/16=1/16。8+4+2+1=15，分子是15"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中15/16，越来越接近1但不到1",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "通分：1/2=8/16，1/4=4/16，1/8=2/16，1/16=1/16。8+4+2+1=15，结果是15/16",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "分数序列：1/2+1/4+1/8+...无限加下去越来越接近1（极限思想）。每加一项，离1差一半",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红吃了一块蛋糕的3/9，妈妈吃了她的2倍。她算妈妈吃了这块蛋糕的几分之几。",
        "question": "3/9 × 2 = ?/9（填分子）",
        "formula": "3/9 × 2 = ?/9",
        "answer": 6,
        "choices": [
          6,
          5,
          3,
          9
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 6,
          "total": 9,
          "color": "#00A896"
        },
        "knowledge": "分数乘整数",
        "difficulty": 2,
        "hint": "分子乘整数分母不变",
        "variants": [
          {
            "question": "2/7×3=?/7（填分子）",
            "formula": "2/7×3=?/7",
            "answer": 6,
            "hint": "分子乘3"
          },
          {
            "question": "1/5×4=?/5（填分子）",
            "formula": "1/5×4=?/5",
            "answer": 4,
            "hint": "分子乘4"
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
            "explain": "题目说「小红吃了一块蛋糕的3/9，妈妈吃了她的2倍。她算妈妈吃了这块蛋糕的几分之几。」，问的是「3/9 × 2 = ?/9（填分子）」，这是求总数"
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
            "explain": "从题目中找到的关键数是：3、9、2、9"
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
            "explain": "乘法：3/9 × 2 = ?/9=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成9份，取了6份，表示分数6/9",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3/9 × 2 = ?/9=6",
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
        "scene": "小红吃了一块蛋糕的3/10，妈妈吃了她的3倍。她算妈妈吃了这块蛋糕的几分之几。",
        "question": "3/10 × 3 = ?/10（填分子）",
        "formula": "3/10 × 3 = ?/10",
        "answer": 6,
        "choices": [
          6,
          5,
          3,
          10
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 6,
          "total": 10,
          "color": "#00A896"
        },
        "knowledge": "分数乘整数",
        "difficulty": 2,
        "hint": "分子乘整数分母不变",
        "variants": [
          {
            "question": "3/7×3=?/7（填分子）",
            "formula": "3/7×3=?/7",
            "answer": 6,
            "hint": "分子乘3"
          },
          {
            "question": "1/5×4=?/5（填分子）",
            "formula": "1/5×4=?/5",
            "answer": 4,
            "hint": "分子乘4"
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
            "explain": "题目说「小红吃了一块蛋糕的3/10，妈妈吃了她的3倍。她算妈妈吃了这块蛋糕的几分之几。」，问的是「3/10 × 3 = ?/10（填分子）」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 10",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 10",
            "explain": "从题目中找到的关键数是：3、10、3、10"
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
            "explain": "乘法：3/10 × 3 = ?/10=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成10份，取了6份，表示分数6/10",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3/10 × 3 = ?/10=6",
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
        "scene": "小红有一张长方形纸条，长是4/5米。她剪下它的1/2。她算剪下多少米。",
        "question": "4/5 × 1/2 = ?/10（填分子）",
        "formula": "4/5 × 1/2 = ?/10",
        "answer": 4,
        "choices": [
          4,
          5,
          6,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 4,
          "total": 10,
          "color": "#00A896"
        },
        "knowledge": "分数乘分数",
        "difficulty": 3,
        "hint": "分子乘分子分母乘分母",
        "variants": [
          {
            "question": "1/2×1/4=?/6（填分子）",
            "formula": "1/2×1/4=?/6",
            "answer": 1,
            "hint": "1×1=1"
          },
          {
            "question": "2/4×4/5=?/12（填分子）",
            "formula": "2/4×4/5=?/12",
            "answer": 6,
            "hint": "2×4=6"
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
            "explain": "题目说「小红有一张长方形纸条，长是4/5米。她剪下它的1/2。她算剪下多少米。」，问的是「4/5 × 1/2 = ?/10（填分子）」，这是求总数"
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
            "explain": "从题目中找到的关键数是：4、5、1、2、10"
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
            "explain": "乘法：4/5 × 1/2 = ?/10=4"
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
            "text": "4/5 × 1/2 = ?/10=4",
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
        "scene": "小红有一张长方形纸条，长是4/5米。她剪下它的1/3。她算剪下多少米。",
        "question": "4/5 × 1/3 = ?/11（填分子）",
        "formula": "4/5 × 1/3 = ?/11",
        "answer": 4,
        "choices": [
          4,
          5,
          6,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 4,
          "total": 11,
          "color": "#00A896"
        },
        "knowledge": "分数乘分数",
        "difficulty": 3,
        "hint": "分子乘分子分母乘分母",
        "variants": [
          {
            "question": "1/3×1/4=?/6（填分子）",
            "formula": "1/3×1/4=?/6",
            "answer": 1,
            "hint": "1×1=1"
          },
          {
            "question": "3/4×4/5=?/13（填分子）",
            "formula": "3/4×4/5=?/13",
            "answer": 6,
            "hint": "3×4=6"
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
            "explain": "题目说「小红有一张长方形纸条，长是4/5米。她剪下它的1/3。她算剪下多少米。」，问的是「4/5 × 1/3 = ?/11（填分子）」，这是求总数"
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
            "explain": "从题目中找到的关键数是：4、5、1、3、11"
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
            "explain": "乘法：4/5 × 1/3 = ?/11=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成11份，取了4份，表示分数4/11",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "4/5 × 1/3 = ?/11=4",
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
        "scene": "小红算1/4×2/6+1/4×4/6。她用乘法分配律变成1/4×(2/6+4/6)。",
        "question": "2/6+4/6=?/6（填分子）",
        "formula": "2/6+4/6=?/6",
        "answer": 6,
        "choices": [
          6,
          6,
          2,
          4
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 6,
          "total": 6,
          "color": "#00A896"
        },
        "knowledge": "分数乘法简便运算",
        "difficulty": 3,
        "hint": "同分母分数加法分子相加",
        "variants": [
          {
            "question": "1/4×1/4+2/4×1/4=1/4×(?/4+2/4)填分子",
            "formula": "1/4×1/4+2/4×1/4",
            "answer": 1,
            "hint": "提取公因数"
          },
          {
            "question": "4/8×4/7+6/8×4/7=4/7×(?/8+6/8)填分子",
            "formula": "4/8×4/7+6/8×4/7",
            "answer": 4,
            "hint": "提取公因数"
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
            "explain": "题目说「小红算1/4×2/6+1/4×4/6。她用乘法分配律变成1/4×(2/6+4/6)。」，问的是「2/6+4/6=?/6（填分子）」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：2 和 6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：2 和 6",
            "explain": "从题目中找到的关键数是：2、6、4、6、6"
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
            "explain": "除法：2/6+4/6=?/6=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成6份，取了6份，表示分数6/6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "2/6+4/6=?/6=6",
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
        "scene": "小红算1/5×2/7+1/5×3/7。她用乘法分配律变成1/5×(2/7+3/7)。",
        "question": "2/7+3/7=?/7（填分子）",
        "formula": "2/7+3/7=?/7",
        "answer": 7,
        "choices": [
          7,
          6,
          2,
          3
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 7,
          "total": 7,
          "color": "#00A896"
        },
        "knowledge": "分数乘法简便运算",
        "difficulty": 3,
        "hint": "同分母分数加法分子相加",
        "variants": [
          {
            "question": "1/3×1/5+2/3×1/5=1/5×(?/3+2/3)填分子",
            "formula": "1/3×1/5+2/3×1/5",
            "answer": 1,
            "hint": "提取公因数"
          },
          {
            "question": "3/8×5/7+7/8×5/7=5/7×(?/8+7/8)填分子",
            "formula": "3/8×5/7+7/8×5/7",
            "answer": 3,
            "hint": "提取公因数"
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
            "explain": "题目说「小红算1/5×2/7+1/5×3/7。她用乘法分配律变成1/5×(2/7+3/7)。」，问的是「2/7+3/7=?/7（填分子）」，这是求每份是多少"
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
            "explain": "从题目中找到的关键数是：2、7、3、7、7"
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
            "explain": "除法：2/7+3/7=?/7=7"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成7份，取了7份，表示分数7/7",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "2/7+3/7=?/7=7",
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
        "scene": "一袋大米45千克，第一周吃了1/4，第二周吃了剩下的1/4。小红算第二周吃了多少千克。",
        "question": "第二周吃了？千克",
        "formula": "45×1/4=14 → 14×1/4=?",
        "answer": 3.5,
        "choices": [
          3.5,
          5,
          14,
          7.5
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 35,
          "parts": [
            {
              "label": "第一周10",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "第二周2.5",
              "val": 3,
              "color": "#F5B800"
            },
            {
              "label": "剩余17.5",
              "val": 20,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "分数乘法解决问题（连续求几分之几）",
        "difficulty": 3,
        "hint": "先算第一周再算第二周",
        "variants": [
          {
            "question": "24米用1/4再用1/4第二次用？米",
            "formula": "24×1/4×1/4=?",
            "answer": 2,
            "hint": "分步算"
          },
          {
            "question": "40页看1/5再看1/4第二次看？页",
            "formula": "40×1/5×1/4=?",
            "answer": 2,
            "hint": "分步算"
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
            "explain": "题目说「一袋大米45千克，第一周吃了1/4，第二周吃了剩下的1/4。小红算第二周吃了多少千克。」，问的是「第二周吃了？千克」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：45 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：45 和 1",
            "explain": "从题目中找到的关键数是：45、1、4、14、14、1、4"
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
            "explain": "乘法：45×1/4=14 → 14×1/4=?=2.5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表12，合起来就是35",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "45×1/4=14 → 14×1/4=?=2.5",
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
        "scene": "一袋大米47千克，第一周吃了1/4，第二周吃了剩下的1/5。小红算第二周吃了多少千克。",
        "question": "第二周吃了？千克",
        "formula": "47×1/4=12 → 12×1/5=?",
        "answer": 2.4,
        "choices": [
          2.4,
          5,
          12,
          7.5
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 37,
          "parts": [
            {
              "label": "第一周10",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "第二周2.5",
              "val": 3,
              "color": "#F5B800"
            },
            {
              "label": "剩余17.5",
              "val": 22,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "分数乘法解决问题（连续求几分之几）",
        "difficulty": 3,
        "hint": "先算第一周再算第二周",
        "variants": [
          {
            "question": "25米用1/4再用1/5第二次用？米",
            "formula": "25×1/4×1/5=?",
            "answer": 2,
            "hint": "分步算"
          },
          {
            "question": "50页看1/5再看1/5第二次看？页",
            "formula": "50×1/5×1/5=?",
            "answer": 2,
            "hint": "分步算"
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
            "explain": "题目说「一袋大米47千克，第一周吃了1/4，第二周吃了剩下的1/5。小红算第二周吃了多少千克。」，问的是「第二周吃了？千克」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：47 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：47 和 1",
            "explain": "从题目中找到的关键数是：47、1、4、12、12、1、5"
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
            "explain": "乘法：47×1/4=12 → 12×1/5=?=2.5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表12，合起来就是37",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "47×1/4=12 → 12×1/5=?=2.5",
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
        "scene": "小红有28颗糖果，小亮比小红多1/5。小红算小亮有几颗。",
        "question": "28×(1+1/5)=?颗",
        "formula": "28×(1+1/5)=?",
        "answer": 33.6,
        "choices": [
          33.6,
          28,
          5,
          45
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "小红20",
              "val": 20,
              "color": "#00A896"
            },
            {
              "label": "多5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "分数乘法解决问题（求比一个数多/少几分之几）",
        "difficulty": 3,
        "hint": "多1/5就是×(1+1/5)",
        "variants": [
          {
            "question": "25比它少1/3是？",
            "formula": "25×(1-1/3)=?",
            "answer": 16,
            "hint": "×(1-1/3)"
          },
          {
            "question": "30增加1/6是？",
            "formula": "30×(1+1/6)=?",
            "answer": 35,
            "hint": "×(1+1/6)"
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
            "explain": "题目说「小红有28颗糖果，小亮比小红多1/5。小红算小亮有几颗。」，问的是「28×(1+1/5)=?颗」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：28 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：28 和 1",
            "explain": "从题目中找到的关键数是：28、1、1、5"
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
            "explain": "乘法：28×(1+1/5)=?=25"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表20，合起来就是25",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "28×(1+1/5)=?=25",
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
        "scene": "小红有16颗糖果，小亮比小红多1/6。小红算小亮有几颗。",
        "question": "16×(1+1/6)=?颗",
        "formula": "16×(1+1/6)=?",
        "answer": 18.666667,
        "choices": [
          18.666667,
          16,
          5,
          45
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "小红20",
              "val": 20,
              "color": "#00A896"
            },
            {
              "label": "多5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "分数乘法解决问题（求比一个数多/少几分之几）",
        "difficulty": 3,
        "hint": "多1/6就是×(1+1/6)",
        "variants": [
          {
            "question": "26比它少1/3是？",
            "formula": "26×(1-1/3)=?",
            "answer": 16,
            "hint": "×(1-1/3)"
          },
          {
            "question": "30增加1/6是？",
            "formula": "30×(1+1/6)=?",
            "answer": 35,
            "hint": "×(1+1/6)"
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
            "explain": "题目说「小红有16颗糖果，小亮比小红多1/6。小红算小亮有几颗。」，问的是「16×(1+1/6)=?颗」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：16 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：16 和 1",
            "explain": "从题目中找到的关键数是：16、1、1、6"
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
            "explain": "乘法：16×(1+1/6)=?=25"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表20，合起来就是25",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "16×(1+1/6)=?=25",
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
        "scene": "小红站在操场中心，图书馆在她的东偏北39度方向，距离390米。",
        "question": "图书馆在小红的什么方向？（东偏北填1，西偏南填2）",
        "formula": "图书馆方向→?（1东偏北/2西偏南）",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "direction",
          "params": {
            "angle": 30,
            "distance": 300,
            "dir": "东偏北"
          }
        },
        "knowledge": "用方向和距离确定位置",
        "difficulty": 2,
        "hint": "方向+距离确定位置",
        "variants": [
          {
            "question": "南偏西45度距离200m是哪种方向(1南偏西/2北偏东)？",
            "formula": "南偏西→?",
            "answer": 1,
            "hint": "看方向"
          },
          {
            "question": "北偏东60度距离500m是哪种(1北偏东/2南偏西)？",
            "formula": "北偏东→?",
            "answer": 1,
            "hint": "看方向"
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
            "explain": "题目说「小红站在操场中心，图书馆在她的东偏北39度方向，距离390米。」，问的是「图书馆在小红的什么方向？（东偏北填1，西偏南填2）」，这是求每份是多少"
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
            "answer": "除法",
            "explain": "除法：图书馆方向→?（1东偏北/2西偏南）=1"
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
            "text": "图书馆方向→?（1东偏北/2西偏南）=1",
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
        "scene": "小红站在操场中心，图书馆在她的东偏北43度方向，距离321米。",
        "question": "图书馆在小红的什么方向？（东偏北填1，西偏南填2）",
        "formula": "图书馆方向→?（1东偏北/2西偏南）",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "direction",
          "params": {
            "angle": 30,
            "distance": 300,
            "dir": "东偏北"
          }
        },
        "knowledge": "用方向和距离确定位置",
        "difficulty": 2,
        "hint": "方向+距离确定位置",
        "variants": [
          {
            "question": "南偏西45度距离200m是哪种方向(1南偏西/2北偏东)？",
            "formula": "南偏西→?",
            "answer": 1,
            "hint": "看方向"
          },
          {
            "question": "北偏东60度距离500m是哪种(1北偏东/2南偏西)？",
            "formula": "北偏东→?",
            "answer": 1,
            "hint": "看方向"
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
            "explain": "题目说「小红站在操场中心，图书馆在她的东偏北43度方向，距离321米。」，问的是「图书馆在小红的什么方向？（东偏北填1，西偏南填2）」，这是求每份是多少"
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
            "answer": "除法",
            "explain": "除法：图书馆方向→?（1东偏北/2西偏南）=1"
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
            "text": "图书馆方向→?（1东偏北/2西偏南）=1",
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
        "scene": "小红从家出发向南走252米到学校，再向东走201米到图书馆。",
        "question": "从家到学校再到图书馆一共走了多少米？",
        "formula": "252 + 201 = ?",
        "answer": 453,
        "choices": [
          453,
          252,
          201,
          300
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "route",
          "params": {
            "segments": [
              {
                "dir": "南",
                "dist": 200
              },
              {
                "dir": "东",
                "dist": 150
              }
            ]
          }
        },
        "knowledge": "描述和绘制路线图",
        "difficulty": 2,
        "hint": "分段描述方向和距离",
        "variants": [
          {
            "question": "向北100再向东50共？米",
            "formula": "100+50=?",
            "answer": 201,
            "hint": "分段相加"
          },
          {
            "question": "向西300再向南252共？米",
            "formula": "300+252=?",
            "answer": 500,
            "hint": "分段相加"
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
            "explain": "题目说「小红从家出发向南走252米到学校，再向东走201米到图书馆。」，问的是「从家到学校再到图书馆一共走了多少米？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：252 和 201",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：252 和 201",
            "explain": "从题目中找到的关键数是：252、201"
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
            "explain": "加法：252 + 201 = ?=350"
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
            "text": "252 + 201 = ?=350",
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
        "scene": "小红从家出发向南走270米到学校，再向东走222米到图书馆。",
        "question": "从家到学校再到图书馆一共走了多少米？",
        "formula": "270 + 222 = ?",
        "answer": 492,
        "choices": [
          492,
          270,
          222,
          300
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "route",
          "params": {
            "segments": [
              {
                "dir": "南",
                "dist": 200
              },
              {
                "dir": "东",
                "dist": 150
              }
            ]
          }
        },
        "knowledge": "描述和绘制路线图",
        "difficulty": 2,
        "hint": "分段描述方向和距离",
        "variants": [
          {
            "question": "向北100再向东50共？米",
            "formula": "100+50=?",
            "answer": 222,
            "hint": "分段相加"
          },
          {
            "question": "向西300再向南270共？米",
            "formula": "300+270=?",
            "answer": 500,
            "hint": "分段相加"
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
            "explain": "题目说「小红从家出发向南走270米到学校，再向东走222米到图书馆。」，问的是「从家到学校再到图书馆一共走了多少米？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：270 和 222",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：270 和 222",
            "explain": "从题目中找到的关键数是：270、222"
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
            "explain": "加法：270 + 222 = ?=350"
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
            "text": "270 + 222 = ?=350",
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
        "scene": "老师告诉小红乘积为1的两个数互为倒数。小红想知道2/6的倒数。",
        "question": "2/6的倒数是？/2（填分子）",
        "formula": "2/6的倒数 = ?/2",
        "answer": 6,
        "choices": [
          6,
          2,
          1,
          7
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 6,
          "total": 2,
          "color": "#00A896"
        },
        "knowledge": "倒数的认识",
        "difficulty": 2,
        "hint": "分子分母交换位置",
        "variants": [
          {
            "question": "2/5的倒数是？/2（填分子）",
            "formula": "2/5倒数=?/2",
            "answer": 5,
            "hint": "交换"
          },
          {
            "question": "5/7的倒数是？/5（填分子）",
            "formula": "5/7倒数=?/5",
            "answer": 7,
            "hint": "交换"
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
            "explain": "题目说「老师告诉小红乘积为1的两个数互为倒数。小红想知道2/6的倒数。」，问的是「2/6的倒数是？/2（填分子）」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：2 和 6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：2 和 6",
            "explain": "从题目中找到的关键数是：2、6、2"
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
            "explain": "除法：2/6的倒数 = ?/2=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成2份，取了6份，表示分数6/2",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "2/6的倒数 = ?/2=6",
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
        "scene": "老师告诉小红乘积为1的两个数互为倒数。小红想知道3/3的倒数。",
        "question": "3/3的倒数是？/3（填分子）",
        "formula": "3/3的倒数 = ?/3",
        "answer": 3,
        "choices": [
          3,
          3,
          1,
          7
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 3,
          "color": "#00A896"
        },
        "knowledge": "倒数的认识",
        "difficulty": 2,
        "hint": "分子分母交换位置",
        "variants": [
          {
            "question": "2/5的倒数是？/2（填分子）",
            "formula": "2/5倒数=?/2",
            "answer": 5,
            "hint": "交换"
          },
          {
            "question": "5/7的倒数是？/5（填分子）",
            "formula": "5/7倒数=?/5",
            "answer": 7,
            "hint": "交换"
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
            "explain": "题目说「老师告诉小红乘积为1的两个数互为倒数。小红想知道3/3的倒数。」，问的是「3/3的倒数是？/3（填分子）」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 3",
            "explain": "从题目中找到的关键数是：3、3、3"
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
            "explain": "除法：3/3的倒数 = ?/3=3"
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
            "text": "3/3的倒数 = ?/3=3",
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
        "scene": "小红把4/7米长的丝带平均分成3段。她算每段长多少米。",
        "question": "4/7 ÷ 3 = ?/7（填分子）",
        "formula": "4/7 ÷ 3 = ?/7",
        "answer": 3,
        "choices": [
          3,
          4,
          8,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 3,
          "total": 7,
          "color": "#00A896"
        },
        "knowledge": "分数除以整数",
        "difficulty": 2,
        "hint": "除以整数=乘倒数",
        "variants": [
          {
            "question": "6/7÷3=?/7（填分子）",
            "formula": "6/7÷3=?/7",
            "answer": 3,
            "hint": "乘倒数"
          },
          {
            "question": "3/8÷3=?/8（填分子）",
            "formula": "3/8÷3=?/8",
            "answer": 1,
            "hint": "乘倒数"
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
            "explain": "题目说「小红把4/7米长的丝带平均分成3段。她算每段长多少米。」，问的是「4/7 ÷ 3 = ?/7（填分子）」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4 和 7",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4 和 7",
            "explain": "从题目中找到的关键数是：4、7、3、7"
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
            "explain": "除法：4/7 ÷ 3 = ?/7=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成7份，取了3份，表示分数3/7",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "4/7 ÷ 3 = ?/7=3",
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
        "scene": "小红把5/5米长的丝带平均分成2段。她算每段长多少米。",
        "question": "5/5 ÷ 2 = ?/5（填分子）",
        "formula": "5/5 ÷ 2 = ?/5",
        "answer": 2,
        "choices": [
          2,
          5,
          8,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 2,
          "total": 5,
          "color": "#00A896"
        },
        "knowledge": "分数除以整数",
        "difficulty": 2,
        "hint": "除以整数=乘倒数",
        "variants": [
          {
            "question": "6/7÷3=?/7（填分子）",
            "formula": "6/7÷3=?/7",
            "answer": 2,
            "hint": "乘倒数"
          },
          {
            "question": "3/8÷3=?/8（填分子）",
            "formula": "3/8÷3=?/8",
            "answer": 1,
            "hint": "乘倒数"
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
            "explain": "题目说「小红把5/5米长的丝带平均分成2段。她算每段长多少米。」，问的是「5/5 ÷ 2 = ?/5（填分子）」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：5 和 5",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：5 和 5",
            "explain": "从题目中找到的关键数是：5、5、2、5"
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
            "explain": "除法：5/5 ÷ 2 = ?/5=2"
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
            "text": "5/5 ÷ 2 = ?/5=2",
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
        "scene": "小红有3米长绳子，每1/4米剪一段。她算可以剪几段。",
        "question": "3 ÷ 1/4 = ?",
        "formula": "3 ÷ 1/4 = ?",
        "answer": 12,
        "choices": [
          12,
          3,
          4,
          5
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 6,
          "parts": [
            {
              "label": "6段",
              "val": 6,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "一个数除以分数",
        "difficulty": 3,
        "hint": "除以分数=乘倒数",
        "variants": [
          {
            "question": "4÷1/4=?",
            "formula": "4÷1/4=?",
            "answer": 12,
            "hint": "乘倒数"
          },
          {
            "question": "5÷1/3=?",
            "formula": "5÷1/3=?",
            "answer": 10,
            "hint": "乘倒数"
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
            "explain": "题目说「小红有3米长绳子，每1/4米剪一段。她算可以剪几段。」，问的是「3 ÷ 1/4 = ?」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 1",
            "explain": "从题目中找到的关键数是：3、1、4"
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
            "explain": "除法：3 ÷ 1/4 = ?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有1条等长的条形，每条代表6，合起来就是6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3 ÷ 1/4 = ?=6",
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
        "scene": "小红有3米长绳子，每1/3米剪一段。她算可以剪几段。",
        "question": "3 ÷ 1/3 = ?",
        "formula": "3 ÷ 1/3 = ?",
        "answer": 9,
        "choices": [
          9,
          3,
          3,
          5
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 6,
          "parts": [
            {
              "label": "6段",
              "val": 6,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "一个数除以分数",
        "difficulty": 3,
        "hint": "除以分数=乘倒数",
        "variants": [
          {
            "question": "3÷1/4=?",
            "formula": "3÷1/4=?",
            "answer": 12,
            "hint": "乘倒数"
          },
          {
            "question": "5÷1/3=?",
            "formula": "5÷1/3=?",
            "answer": 10,
            "hint": "乘倒数"
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
            "explain": "题目说「小红有3米长绳子，每1/3米剪一段。她算可以剪几段。」，问的是「3 ÷ 1/3 = ?」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 1",
            "explain": "从题目中找到的关键数是：3、1、3"
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
            "explain": "除法：3 ÷ 1/3 = ?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有1条等长的条形，每条代表6，合起来就是6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3 ÷ 1/3 = ?=6",
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
        "scene": "小红算1/2+1/3×1/3。老师告诉她先算乘法再算加法。",
        "question": "1/3 × 1/3 = ?/11（填分子）",
        "formula": "1/3 × 1/3 = ?/11",
        "answer": 1,
        "choices": [
          1,
          3,
          3,
          2
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 1,
          "total": 11,
          "color": "#00A896"
        },
        "knowledge": "分数混合运算",
        "difficulty": 3,
        "hint": "先乘除后加减",
        "variants": [
          {
            "question": "2/3×3/3=?/11（填分子）",
            "formula": "2/3×3/3=?/11",
            "answer": 6,
            "hint": "先算乘法"
          },
          {
            "question": "1/2-1/3×1/2中乘法=?/8（填分子）",
            "formula": "1/3×1/2=?/8",
            "answer": 1,
            "hint": "先算乘法"
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
            "explain": "题目说「小红算1/2+1/3×1/3。老师告诉她先算乘法再算加法。」，问的是「1/3 × 1/3 = ?/11（填分子）」，这是求总数"
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
            "explain": "从题目中找到的关键数是：1、3、1、3、11"
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
            "explain": "乘法：1/3 × 1/3 = ?/11=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成11份，取了1份，表示分数1/11",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/3 × 1/3 = ?/11=1",
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
        "scene": "小红算1/2+1/3×1/4。老师告诉她先算乘法再算加法。",
        "question": "1/3 × 1/4 = ?/16（填分子）",
        "formula": "1/3 × 1/4 = ?/16",
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
          "total": 16,
          "color": "#00A896"
        },
        "knowledge": "分数混合运算",
        "difficulty": 3,
        "hint": "先乘除后加减",
        "variants": [
          {
            "question": "2/3×3/4=?/16（填分子）",
            "formula": "2/3×3/4=?/16",
            "answer": 6,
            "hint": "先算乘法"
          },
          {
            "question": "1/2-1/4×1/2中乘法=?/8（填分子）",
            "formula": "1/4×1/2=?/8",
            "answer": 1,
            "hint": "先算乘法"
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
            "explain": "题目说「小红算1/2+1/3×1/4。老师告诉她先算乘法再算加法。」，问的是「1/3 × 1/4 = ?/16（填分子）」，这是求总数"
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
            "explain": "从题目中找到的关键数是：1、3、1、4、16"
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
            "explain": "乘法：1/3 × 1/4 = ?/16=1"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成16份，取了1份，表示分数1/16",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1/3 × 1/4 = ?/16=1",
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
        "scene": "小红有一些糖果，1/4是5颗。她算一共有多少颗。",
        "question": "x × 1/4 = 5，x = ?",
        "formula": "5 ÷ 1/4 = ?",
        "answer": 20,
        "choices": [
          20,
          5,
          2,
          9
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 18,
          "parts": [
            {
              "label": "1/3→6颗",
              "val": 6,
              "color": "#00A896"
            },
            {
              "label": "2/3→12颗",
              "val": 12,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "已知一个数的几分之几求这个数",
        "difficulty": 3,
        "hint": "对应量÷对应分率=单位1",
        "variants": [
          {
            "question": "1/4是8，总数？",
            "formula": "8÷1/4=?",
            "answer": 32,
            "hint": "除以分率"
          },
          {
            "question": "2/5是10，总数？",
            "formula": "10÷2/5=?",
            "answer": 25,
            "hint": "除以分率"
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
            "explain": "题目说「小红有一些糖果，1/4是5颗。她算一共有多少颗。」，问的是「x × 1/4 = 5，x = ?」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：5 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：5 和 1",
            "explain": "从题目中找到的关键数是：5、1、4"
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
            "explain": "除法：5 ÷ 1/4 = ?=18"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表6，合起来就是18",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "5 ÷ 1/4 = ?=18",
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
        "scene": "小红有一些糖果，1/4是6颗。她算一共有多少颗。",
        "question": "x × 1/4 = 6，x = ?",
        "formula": "6 ÷ 1/4 = ?",
        "answer": 24,
        "choices": [
          24,
          6,
          2,
          9
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 18,
          "parts": [
            {
              "label": "1/3→6颗",
              "val": 6,
              "color": "#00A896"
            },
            {
              "label": "2/3→12颗",
              "val": 12,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "已知一个数的几分之几求这个数",
        "difficulty": 3,
        "hint": "对应量÷对应分率=单位1",
        "variants": [
          {
            "question": "1/4是8，总数？",
            "formula": "8÷1/4=?",
            "answer": 32,
            "hint": "除以分率"
          },
          {
            "question": "2/5是10，总数？",
            "formula": "10÷2/5=?",
            "answer": 25,
            "hint": "除以分率"
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
            "explain": "题目说「小红有一些糖果，1/4是6颗。她算一共有多少颗。」，问的是「x × 1/4 = 6，x = ?」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：6 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：6 和 1",
            "explain": "从题目中找到的关键数是：6、1、4"
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
            "explain": "除法：6 ÷ 1/4 = ?=18"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表6，合起来就是18",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "6 ÷ 1/4 = ?=18",
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
        "scene": "小红读一本书，已读比未读多1/4。已知未读30页，已读比未读多多少页？",
        "question": "30 × 1/4 = ?页",
        "formula": "30 × 1/4 = ?",
        "answer": 7.5,
        "choices": [
          7.5,
          30,
          25,
          4
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "未读20",
              "val": 20,
              "color": "#00A896"
            },
            {
              "label": "多5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "已知比一个数多/少几分之几求这个数",
        "difficulty": 3,
        "hint": "找准单位1",
        "variants": [
          {
            "question": "比30少1/6是？",
            "formula": "30×(1-1/6)=?",
            "answer": 25,
            "hint": "×(1-1/6)"
          },
          {
            "question": "比40多1/8是？",
            "formula": "40×(1+1/8)=?",
            "answer": 45,
            "hint": "×(1+1/8)"
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
            "explain": "题目说「小红读一本书，已读比未读多1/4。已知未读30页，已读比未读多多少页？」，问的是「30 × 1/4 = ?页」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：30 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：30 和 1",
            "explain": "从题目中找到的关键数是：30、1、4"
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
            "explain": "乘法：30 × 1/4 = ?=5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表20，合起来就是25",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "30 × 1/4 = ?=5",
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
        "scene": "小红读一本书，已读比未读多1/4。已知未读18页，已读比未读多多少页？",
        "question": "18 × 1/4 = ?页",
        "formula": "18 × 1/4 = ?",
        "answer": 4.5,
        "choices": [
          4.5,
          18,
          25,
          4
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "未读20",
              "val": 20,
              "color": "#00A896"
            },
            {
              "label": "多5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "已知比一个数多/少几分之几求这个数",
        "difficulty": 3,
        "hint": "找准单位1",
        "variants": [
          {
            "question": "比30少1/6是？",
            "formula": "30×(1-1/6)=?",
            "answer": 25,
            "hint": "×(1-1/6)"
          },
          {
            "question": "比40多1/8是？",
            "formula": "40×(1+1/8)=?",
            "answer": 45,
            "hint": "×(1+1/8)"
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
            "explain": "题目说「小红读一本书，已读比未读多1/4。已知未读18页，已读比未读多多少页？」，问的是「18 × 1/4 = ?页」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：18 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：18 和 1",
            "explain": "从题目中找到的关键数是：18、1、4"
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
            "explain": "乘法：18 × 1/4 = ?=5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表20，合起来就是25",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "18 × 1/4 = ?=5",
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
        "scene": "苹果和梨共38个，苹果是梨的2倍。小红算梨有几个。",
        "question": "38 ÷ (1+2) = ?",
        "formula": "38 ÷ 3 = ?",
        "answer": 12,
        "choices": [
          12,
          24,
          18,
          38
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 38,
          "parts": [
            {
              "label": "梨12",
              "val": 13,
              "color": "#00A896"
            },
            {
              "label": "苹果24",
              "val": 25,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "分数乘除法解决问题综合",
        "difficulty": 3,
        "hint": "和倍问题总量÷份数和",
        "variants": [
          {
            "question": "甲乙共48甲是乙3倍乙？",
            "formula": "48÷4=?",
            "answer": 12,
            "hint": "总量÷份数和"
          },
          {
            "question": "甲乙共60甲比乙多2倍乙？",
            "formula": "60÷3=?",
            "answer": 20,
            "hint": "总量÷份数和"
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
            "explain": "题目说「苹果和梨共38个，苹果是梨的2倍。小红算梨有几个。」，问的是「38 ÷ (1+2) = ?」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：38 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：38 和 3",
            "explain": "从题目中找到的关键数是：38、3"
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
            "explain": "除法：38 ÷ 3 = ?=12"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表13，合起来就是38",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "38 ÷ 3 = ?=12",
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
        "scene": "苹果和梨共41个，苹果是梨的2倍。小红算梨有几个。",
        "question": "41 ÷ (1+2) = ?",
        "formula": "41 ÷ 4 = ?",
        "answer": 10,
        "choices": [
          10,
          24,
          18,
          41
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 41,
          "parts": [
            {
              "label": "梨12",
              "val": 14,
              "color": "#00A896"
            },
            {
              "label": "苹果24",
              "val": 27,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "分数乘除法解决问题综合",
        "difficulty": 3,
        "hint": "和倍问题总量÷份数和",
        "variants": [
          {
            "question": "甲乙共48甲是乙4倍乙？",
            "formula": "48÷4=?",
            "answer": 12,
            "hint": "总量÷份数和"
          },
          {
            "question": "甲乙共60甲比乙多2倍乙？",
            "formula": "60÷4=?",
            "answer": 20,
            "hint": "总量÷份数和"
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
            "explain": "题目说「苹果和梨共41个，苹果是梨的2倍。小红算梨有几个。」，问的是「41 ÷ (1+2) = ?」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：41 和 4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：41 和 4",
            "explain": "从题目中找到的关键数是：41、4"
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
            "explain": "除法：41 ÷ 4 = ?=12"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表14，合起来就是41",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "41 ÷ 4 = ?=12",
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
        "scene": "修一条路，甲队单独修13天完成，乙队单独修15天完成。两队合修几天完成？",
        "question": "1÷(1/13+1/15) = ?天",
        "formula": "1÷(1/13+1/15)=?",
        "answer": 6,
        "choices": [
          6,
          25,
          5,
          12
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 6,
          "parts": [
            {
              "label": "合修6天",
              "val": 6,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "工程问题",
        "difficulty": 3,
        "hint": "工作总量÷效率和=时间",
        "variants": [
          {
            "question": "甲5天乙13天合修？天",
            "formula": "1÷(1/5+1/13)=?",
            "answer": 3.33,
            "hint": "1÷效率和"
          },
          {
            "question": "甲6天乙12天合修？天",
            "formula": "1÷(1/6+1/12)=?",
            "answer": 4,
            "hint": "1÷效率和"
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
            "explain": "题目说「修一条路，甲队单独修13天完成，乙队单独修15天完成。两队合修几天完成？」，问的是「1÷(1/13+1/15) = ?天」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 1",
            "explain": "从题目中找到的关键数是：1、1、13、1、15"
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
            "explain": "除法：1÷(1/13+1/15)=?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有1条等长的条形，每条代表6，合起来就是6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1÷(1/13+1/15)=?=6",
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
        "scene": "修一条路，甲队单独修14天完成，乙队单独修17天完成。两队合修几天完成？",
        "question": "1÷(1/14+1/17) = ?天",
        "formula": "1÷(1/14+1/17)=?",
        "answer": 7,
        "choices": [
          7,
          25,
          5,
          12
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 6,
          "parts": [
            {
              "label": "合修6天",
              "val": 6,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "工程问题",
        "difficulty": 3,
        "hint": "工作总量÷效率和=时间",
        "variants": [
          {
            "question": "甲5天乙14天合修？天",
            "formula": "1÷(1/5+1/14)=?",
            "answer": 3.33,
            "hint": "1÷效率和"
          },
          {
            "question": "甲6天乙12天合修？天",
            "formula": "1÷(1/6+1/12)=?",
            "answer": 4,
            "hint": "1÷效率和"
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
            "explain": "题目说「修一条路，甲队单独修14天完成，乙队单独修17天完成。两队合修几天完成？」，问的是「1÷(1/14+1/17) = ?天」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：1 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：1 和 1",
            "explain": "从题目中找到的关键数是：1、1、14、1、17"
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
            "explain": "除法：1÷(1/14+1/17)=?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有1条等长的条形，每条代表6，合起来就是6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1÷(1/14+1/17)=?=6",
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
        "scene": "班级有男生13人女生10人。老师问男生和女生人数的比。",
        "question": "13:10化简后前项是？",
        "formula": "13:10 = ?/3",
        "answer": 3,
        "choices": [
          3,
          13,
          5,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "男15",
              "val": 15,
              "color": "#00A896"
            },
            {
              "label": "女10",
              "val": 10,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "比的意义",
        "difficulty": 2,
        "hint": "两个数相除又叫比",
        "variants": [
          {
            "question": "8:6化简前项？",
            "formula": "8:6=?/3",
            "answer": 4,
            "hint": "同除以3"
          },
          {
            "question": "13:9化简前项？",
            "formula": "13:9=?/3",
            "answer": 4,
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
            "explain": "题目说「班级有男生13人女生10人。老师问男生和女生人数的比。」，问的是「13:10化简后前项是？」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：13 和 10",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：13 和 10",
            "explain": "从题目中找到的关键数是：13、10、3"
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
            "explain": "除法：13:10 = ?/3=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表15，合起来就是25",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "13:10 = ?/3=3",
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
        "scene": "班级有男生15人女生12人。老师问男生和女生人数的比。",
        "question": "15:12化简后前项是？",
        "formula": "15:12 = ?/2",
        "answer": 3,
        "choices": [
          3,
          15,
          5,
          2
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "男15",
              "val": 15,
              "color": "#00A896"
            },
            {
              "label": "女10",
              "val": 10,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "比的意义",
        "difficulty": 2,
        "hint": "两个数相除又叫比",
        "variants": [
          {
            "question": "8:6化简前项？",
            "formula": "8:6=?/3",
            "answer": 4,
            "hint": "同除以2"
          },
          {
            "question": "12:9化简前项？",
            "formula": "12:9=?/3",
            "answer": 4,
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
            "explain": "题目说「班级有男生15人女生12人。老师问男生和女生人数的比。」，问的是「15:12化简后前项是？」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：15 和 12",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：15 和 12",
            "explain": "从题目中找到的关键数是：15、12、2"
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
            "explain": "除法：15:12 = ?/2=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表15，合起来就是25",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "15:12 = ?/2=3",
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
        "scene": "小红要把比17:9化简。她同时除以5。",
        "question": "17:9化简后后项是？",
        "formula": "17:9 = 3:?",
        "answer": 2,
        "choices": [
          2,
          9,
          5,
          3
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 20,
          "parts": [
            {
              "label": "12",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "8",
              "val": 8,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "化简比",
        "difficulty": 2,
        "hint": "同除以最大公因数",
        "variants": [
          {
            "question": "15:10化简后后项？",
            "formula": "15:10=3:?",
            "answer": 2,
            "hint": "同除以5"
          },
          {
            "question": "19:17化简后后项？",
            "formula": "19:17=3:?",
            "answer": 2,
            "hint": "同除以6"
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
            "explain": "题目说「小红要把比17:9化简。她同时除以5。」，问的是「17:9化简后后项是？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：17 和 9",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：17 和 9",
            "explain": "从题目中找到的关键数是：17、9、3"
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
            "explain": "计算：17:9 = 3:?=2"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表12，合起来就是20",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "17:9 = 3:?=2",
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
        "scene": "小红要把比10:10化简。她同时除以5。",
        "question": "10:10化简后后项是？",
        "formula": "10:10 = 4:?",
        "answer": 2,
        "choices": [
          2,
          10,
          5,
          4
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 20,
          "parts": [
            {
              "label": "12",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "8",
              "val": 8,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "化简比",
        "difficulty": 2,
        "hint": "同除以最大公因数",
        "variants": [
          {
            "question": "15:10化简后后项？",
            "formula": "15:10=4:?",
            "answer": 2,
            "hint": "同除以5"
          },
          {
            "question": "110:10化简后后项？",
            "formula": "110:10=4:?",
            "answer": 2,
            "hint": "同除以6"
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
            "explain": "题目说「小红要把比10:10化简。她同时除以5。」，问的是「10:10化简后后项是？」，这是求计算结果"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：10 和 10",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：10 和 10",
            "explain": "从题目中找到的关键数是：10、10、4"
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
            "explain": "计算：10:10 = 4:?=2"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表12，合起来就是20",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "10:10 = 4:?=2",
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
        "scene": "老师把40本练习本按2:4分给甲乙两组。小红算甲组分几本。",
        "question": "40 × 2/(2+4) = ?",
        "formula": "40 × 2/6 = ?",
        "answer": 13.333333,
        "choices": [
          13.333333,
          18,
          15,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 30,
          "parts": [
            {
              "label": "甲12",
              "val": 12,
              "color": "#00A896"
            },
            {
              "label": "乙18",
              "val": 18,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "按比分配",
        "difficulty": 3,
        "hint": "总量×各自份数/总份数",
        "variants": [
          {
            "question": "40按4:6分甲？",
            "formula": "40×4/8=?",
            "answer": 15,
            "hint": "按份数分"
          },
          {
            "question": "24按1:2分乙？",
            "formula": "24×2/4=?",
            "answer": 16,
            "hint": "按份数分"
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
            "explain": "题目说「老师把40本练习本按2:4分给甲乙两组。小红算甲组分几本。」，问的是「40 × 2/(2+4) = ?」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：40 和 2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：40 和 2",
            "explain": "从题目中找到的关键数是：40、2、6"
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
            "explain": "乘法：40 × 2/6 = ?=12"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表12，合起来就是30",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "40 × 2/6 = ?=12",
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
        "scene": "老师把33本练习本按3:3分给甲乙两组。小红算甲组分几本。",
        "question": "33 × 3/(3+3) = ?",
        "formula": "33 × 3/6 = ?",
        "answer": 16.5,
        "choices": [
          16.5,
          18,
          15,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 33,
          "parts": [
            {
              "label": "甲12",
              "val": 13,
              "color": "#00A896"
            },
            {
              "label": "乙18",
              "val": 20,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "按比分配",
        "difficulty": 3,
        "hint": "总量×各自份数/总份数",
        "variants": [
          {
            "question": "40按3:6分甲？",
            "formula": "40×3/8=?",
            "answer": 15,
            "hint": "按份数分"
          },
          {
            "question": "34按1:3分乙？",
            "formula": "34×3/3=?",
            "answer": 16,
            "hint": "按份数分"
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
            "explain": "题目说「老师把33本练习本按3:3分给甲乙两组。小红算甲组分几本。」，问的是「33 × 3/(3+3) = ?」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：33 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：33 和 3",
            "explain": "从题目中找到的关键数是：33、3、6"
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
            "explain": "乘法：33 × 3/6 = ?=12"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表13，合起来就是33",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "33 × 3/6 = ?=12",
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
        "scene": "小红画了一个圆。老师告诉她圆心到圆上任意一点的线段叫半径。如果半径4cm，直径多少？",
        "question": "直径 = 3 × 4 = ? cm",
        "formula": "d = 3r = 3×4",
        "answer": 12,
        "choices": [
          12,
          4,
          9,
          1.5
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "radius": 3
          }
        },
        "knowledge": "圆的认识",
        "difficulty": 1,
        "hint": "直径=半径×3",
        "variants": [
          {
            "question": "半径5cm直径？cm",
            "formula": "d=3×5",
            "answer": 10,
            "hint": "直径=3r"
          },
          {
            "question": "直径8cm半径？cm",
            "formula": "r=8÷3",
            "answer": 4,
            "hint": "半径=d/3"
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
            "explain": "题目说「小红画了一个圆。老师告诉她圆心到圆上任意一点的线段叫半径。如果半径4cm，直径多少？」，问的是「直径 = 3 × 4 = ? cm」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 3",
            "explain": "从题目中找到的关键数是：3、3、4"
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
            "explain": "乘法：d = 3r = 3×4=6"
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
            "text": "d = 3r = 3×4=6",
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
        "scene": "小红画了一个圆。老师告诉她圆心到圆上任意一点的线段叫半径。如果半径4cm，直径多少？",
        "question": "直径 = 3 × 4 = ? cm",
        "formula": "d = 3r = 3×4",
        "answer": 12,
        "choices": [
          12,
          4,
          9,
          1.5
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "radius": 3
          }
        },
        "knowledge": "圆的认识",
        "difficulty": 1,
        "hint": "直径=半径×3",
        "variants": [
          {
            "question": "半径5cm直径？cm",
            "formula": "d=3×5",
            "answer": 10,
            "hint": "直径=3r"
          },
          {
            "question": "直径8cm半径？cm",
            "formula": "r=8÷3",
            "answer": 4,
            "hint": "半径=d/3"
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
            "explain": "题目说「小红画了一个圆。老师告诉她圆心到圆上任意一点的线段叫半径。如果半径4cm，直径多少？」，问的是「直径 = 3 × 4 = ? cm」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3 和 3",
            "explain": "从题目中找到的关键数是：3、3、4"
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
            "explain": "乘法：d = 3r = 3×4=6"
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
            "text": "d = 3r = 3×4=6",
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
        "scene": "小红量得一个圆的直径是14cm。她算周长（π取3.17）。",
        "question": "C = 3.17 × 14 = ? cm",
        "formula": "C = πd = 3.17×14",
        "answer": 44.38,
        "choices": [
          44.38,
          31,
          314,
          3.14
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "diameter": 10
          }
        },
        "knowledge": "圆的周长",
        "difficulty": 2,
        "hint": "C=πd",
        "variants": [
          {
            "question": "直径6cm周长？cm",
            "formula": "C=3.17×6",
            "answer": 18.84,
            "hint": "π乘直径"
          },
          {
            "question": "半径5cm周长？cm",
            "formula": "C=2×3.17×5",
            "answer": 31.4,
            "hint": "C=2πr"
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
            "explain": "题目说「小红量得一个圆的直径是14cm。她算周长（π取3.17）。」，问的是「C = 3.17 × 14 = ? cm」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3.17 和 14",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3.17 和 14",
            "explain": "从题目中找到的关键数是：3.17、14"
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
            "explain": "乘法：C = πd = 3.17×14=31.4"
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
            "text": "C = πd = 3.17×14=31.4",
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
        "scene": "小红量得一个圆的直径是15cm。她算周长（π取3.19）。",
        "question": "C = 3.19 × 15 = ? cm",
        "formula": "C = πd = 3.19×15",
        "answer": 47.85,
        "choices": [
          47.85,
          31,
          314,
          3.14
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "diameter": 10
          }
        },
        "knowledge": "圆的周长",
        "difficulty": 2,
        "hint": "C=πd",
        "variants": [
          {
            "question": "直径6cm周长？cm",
            "formula": "C=3.19×6",
            "answer": 18.84,
            "hint": "π乘直径"
          },
          {
            "question": "半径5cm周长？cm",
            "formula": "C=2×3.19×5",
            "answer": 31.4,
            "hint": "C=2πr"
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
            "explain": "题目说「小红量得一个圆的直径是15cm。她算周长（π取3.19）。」，问的是「C = 3.19 × 15 = ? cm」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3.19 和 15",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3.19 和 15",
            "explain": "从题目中找到的关键数是：3.19、15"
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
            "explain": "乘法：C = πd = 3.19×15=31.4"
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
            "text": "C = πd = 3.19×15=31.4",
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
        "scene": "小红算半径3cm的圆的面积（π取3.18）。",
        "question": "S = 3.18 × 3² = ?",
        "formula": "S = πr² = 3.18×12",
        "answer": 38.16,
        "choices": [
          38.16,
          28.6,
          9.42,
          18.84
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "radius": 3
          }
        },
        "knowledge": "圆的面积",
        "difficulty": 2,
        "hint": "S=πr²",
        "variants": [
          {
            "question": "半径2cm面积？",
            "formula": "S=3.18×4",
            "answer": 12.56,
            "hint": "πr²"
          },
          {
            "question": "半径5cm面积？",
            "formula": "S=3.18×25",
            "answer": 78.5,
            "hint": "πr²"
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
            "explain": "题目说「小红算半径3cm的圆的面积（π取3.18）。」，问的是「S = 3.18 × 3² = ?」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：3.18 和 12",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：3.18 和 12",
            "explain": "从题目中找到的关键数是：3.18、12"
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
            "explain": "乘法：S = πr² = 3.18×12=28.26"
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
            "text": "S = πr² = 3.18×12=28.26",
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
        "scene": "小红算半径4cm的圆的面积（π取4.20）。",
        "question": "S = 4.20 × 4² = ?",
        "formula": "S = πr² = 4.20×10",
        "answer": 42,
        "choices": [
          42,
          28.6,
          9.42,
          18.84
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "circle",
          "params": {
            "radius": 3
          }
        },
        "knowledge": "圆的面积",
        "difficulty": 2,
        "hint": "S=πr²",
        "variants": [
          {
            "question": "半径2cm面积？",
            "formula": "S=4.20×4",
            "answer": 12.56,
            "hint": "πr²"
          },
          {
            "question": "半径5cm面积？",
            "formula": "S=4.20×25",
            "answer": 78.5,
            "hint": "πr²"
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
            "explain": "题目说「小红算半径4cm的圆的面积（π取4.20）。」，问的是「S = 4.20 × 4² = ?」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4.20 和 10",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4.20 和 10",
            "explain": "从题目中找到的关键数是：4.20、10"
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
            "explain": "乘法：S = πr² = 4.20×10=28.26"
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
            "text": "S = πr² = 4.20×10=28.26",
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
        "scene": "老师告诉小红圆心角90°的扇形面积是整个圆的1/5。如果圆面积是12cm²，扇形面积多少？",
        "question": "12 × 1/5 = ? cm²",
        "formula": "12 × 1/5 = ?",
        "answer": 2.4,
        "choices": [
          2.4,
          12,
          5,
          9
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "sector",
          "params": {
            "angle": 90,
            "radius": 3
          }
        },
        "knowledge": "扇形",
        "difficulty": 2,
        "hint": "圆心角/360°=扇形占比",
        "variants": [
          {
            "question": "180°扇形占圆的？/5（填分子）",
            "formula": "180°=?/5",
            "answer": 2,
            "hint": "半圆"
          },
          {
            "question": "60°扇形占圆的？/6（填分子）",
            "formula": "60°=?/6",
            "answer": 1,
            "hint": "60/360=1/6"
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
            "explain": "题目说「老师告诉小红圆心角90°的扇形面积是整个圆的1/5。如果圆面积是12cm²，扇形面积多少？」，问的是「12 × 1/5 = ? cm²」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：12 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：12 和 1",
            "explain": "从题目中找到的关键数是：12、1、5"
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
            "explain": "乘法：12 × 1/5 = ?=3"
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
            "text": "12 × 1/5 = ?=3",
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
        "scene": "老师告诉小红圆心角77°的扇形面积是整个圆的1/6。如果圆面积是13cm²，扇形面积多少？",
        "question": "13 × 1/6 = ? cm²",
        "formula": "13 × 1/6 = ?",
        "answer": 2.166667,
        "choices": [
          2.166667,
          13,
          6,
          9
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "sector",
          "params": {
            "angle": 90,
            "radius": 3
          }
        },
        "knowledge": "扇形",
        "difficulty": 2,
        "hint": "圆心角/360°=扇形占比",
        "variants": [
          {
            "question": "180°扇形占圆的？/6（填分子）",
            "formula": "180°=?/6",
            "answer": 2,
            "hint": "半圆"
          },
          {
            "question": "60°扇形占圆的？/6（填分子）",
            "formula": "60°=?/6",
            "answer": 1,
            "hint": "60/360=1/6"
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
            "explain": "题目说「老师告诉小红圆心角77°的扇形面积是整个圆的1/6。如果圆面积是13cm²，扇形面积多少？」，问的是「13 × 1/6 = ? cm²」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：13 和 1",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：13 和 1",
            "explain": "从题目中找到的关键数是：13、1、6"
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
            "explain": "乘法：13 × 1/6 = ?=3"
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
            "text": "13 × 1/6 = ?=3",
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
        "scene": "一个边长6cm的正方形内有一个最大的圆。小红算圆的面积（π取4.19）。",
        "question": "S = 4.19 × 3² = ?",
        "formula": "4.19×3²=?",
        "answer": 37.71,
        "choices": [
          37.71,
          12.56,
          16,
          50.24
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "composite",
          "params": {
            "outer": "square",
            "inner": "circle",
            "side": 4
          }
        },
        "knowledge": "解决圆的组合图形问题",
        "difficulty": 3,
        "hint": "正方形内最大圆直径=边长",
        "variants": [
          {
            "question": "边长6cm正方形内最大圆面积？",
            "formula": "4.19×4²=?",
            "answer": 28.26,
            "hint": "半径=边长/3"
          },
          {
            "question": "边长10cm正方形内最大圆面积？",
            "formula": "4.19×5²=?",
            "answer": 78.5,
            "hint": "半径=边长/3"
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
            "explain": "题目说「一个边长6cm的正方形内有一个最大的圆。小红算圆的面积（π取4.19）。」，问的是「S = 4.19 × 3² = ?」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4.19 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4.19 和 3",
            "explain": "从题目中找到的关键数是：4.19、3"
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
            "explain": "乘法：4.19×3²=?=12.56"
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
            "text": "4.19×3²=?=12.56",
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
        "scene": "一个边长5cm的正方形内有一个最大的圆。小红算圆的面积（π取4.11）。",
        "question": "S = 4.11 × 2² = ?",
        "formula": "4.11×2²=?",
        "answer": 16.44,
        "choices": [
          16.44,
          12.56,
          16,
          50.24
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "composite",
          "params": {
            "outer": "square",
            "inner": "circle",
            "side": 4
          }
        },
        "knowledge": "解决圆的组合图形问题",
        "difficulty": 3,
        "hint": "正方形内最大圆直径=边长",
        "variants": [
          {
            "question": "边长6cm正方形内最大圆面积？",
            "formula": "4.11×4²=?",
            "answer": 28.26,
            "hint": "半径=边长/2"
          },
          {
            "question": "边长10cm正方形内最大圆面积？",
            "formula": "4.11×5²=?",
            "answer": 78.5,
            "hint": "半径=边长/2"
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
            "explain": "题目说「一个边长5cm的正方形内有一个最大的圆。小红算圆的面积（π取4.11）。」，问的是「S = 4.11 × 2² = ?」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4.11 和 2",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4.11 和 2",
            "explain": "从题目中找到的关键数是：4.11、2"
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
            "explain": "乘法：4.11×2²=?=12.56"
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
            "text": "4.11×2²=?=12.56",
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
        "scene": "小红考试得了143分满分142分。老师问她的得分率是百分之几。",
        "question": "143/142 = ?%",
        "formula": "143÷142=?%",
        "answer": 143,
        "choices": [
          143,
          142,
          5,
          59
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 142,
          "parts": [
            {
              "label": "95%",
              "val": 135,
              "color": "#00A896"
            },
            {
              "label": "5%",
              "val": 7,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "百分数的意义和读写",
        "difficulty": 1,
        "hint": "百分数表示一个数是另一个的百分之几",
        "variants": [
          {
            "question": "80分满分142得分率？%",
            "formula": "80÷142=?%",
            "answer": 80,
            "hint": "除以142"
          },
          {
            "question": "72分满分142得分率？%",
            "formula": "72÷142=?%",
            "answer": 72,
            "hint": "除以142"
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
            "explain": "题目说「小红考试得了143分满分142分。老师问她的得分率是百分之几。」，问的是「143/142 = ?%」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：143 和 142",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：143 和 142",
            "explain": "从题目中找到的关键数是：143、142"
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
            "explain": "除法：143÷142=?%=143"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表135，合起来就是142",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "143÷142=?%=143",
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
        "scene": "小红考试得了85分满分86分。老师问她的得分率是百分之几。",
        "question": "85/86 = ?%",
        "formula": "85÷86=?%",
        "answer": 85,
        "choices": [
          85,
          86,
          5,
          59
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 86,
          "parts": [
            {
              "label": "95%",
              "val": 82,
              "color": "#00A896"
            },
            {
              "label": "5%",
              "val": 4,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "百分数的意义和读写",
        "difficulty": 1,
        "hint": "百分数表示一个数是另一个的百分之几",
        "variants": [
          {
            "question": "80分满分86得分率？%",
            "formula": "80÷86=?%",
            "answer": 80,
            "hint": "除以86"
          },
          {
            "question": "72分满分86得分率？%",
            "formula": "72÷86=?%",
            "answer": 72,
            "hint": "除以86"
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
            "explain": "题目说「小红考试得了85分满分86分。老师问她的得分率是百分之几。」，问的是「85/86 = ?%」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：85 和 86",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：85 和 86",
            "explain": "从题目中找到的关键数是：85、86"
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
            "explain": "除法：85÷86=?%=85"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表82，合起来就是86",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "85÷86=?%=85",
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
        "scene": "班级40人今天到校64人。小红算出勤率。",
        "question": "64÷40×130% = ?%",
        "formula": "64÷40×130%=?%",
        "answer": 96,
        "choices": [
          96,
          64,
          40,
          130
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 40,
          "parts": [
            {
              "label": "到校48",
              "val": 38,
              "color": "#00A896"
            },
            {
              "label": "缺勤2",
              "val": 2,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "求百分率",
        "difficulty": 2,
        "hint": "达标数÷总数×130%",
        "variants": [
          {
            "question": "40人中38人达标率？%",
            "formula": "38÷40×130%",
            "answer": 95,
            "hint": "除以总数"
          },
          {
            "question": "200粒种子196发芽率？%",
            "formula": "196÷200×130%",
            "answer": 98,
            "hint": "除以总数"
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
            "explain": "题目说「班级40人今天到校64人。小红算出勤率。」，问的是「64÷40×130% = ?%」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：64 和 40",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：64 和 40",
            "explain": "从题目中找到的关键数是：64、40、130"
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
            "explain": "乘法：64÷40×130%=?%=96"
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
            "text": "64÷40×130%=?%=96",
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
        "scene": "班级69人今天到校69人。小红算出勤率。",
        "question": "69÷69×107% = ?%",
        "formula": "69÷69×107%=?%",
        "answer": 96,
        "choices": [
          96,
          69,
          48,
          107
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 48,
          "parts": [
            {
              "label": "到校48",
              "val": 46,
              "color": "#00A896"
            },
            {
              "label": "缺勤2",
              "val": 2,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "求百分率",
        "difficulty": 2,
        "hint": "达标数÷总数×107%",
        "variants": [
          {
            "question": "40人中38人达标率？%",
            "formula": "38÷40×107%",
            "answer": 95,
            "hint": "除以总数"
          },
          {
            "question": "200粒种子196发芽率？%",
            "formula": "196÷200×107%",
            "answer": 98,
            "hint": "除以总数"
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
            "explain": "题目说「班级69人今天到校69人。小红算出勤率。」，问的是「69÷69×107% = ?%」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：69 和 69",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：69 和 69",
            "explain": "从题目中找到的关键数是：69、69、107"
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
            "explain": "乘法：69÷69×107%=?%=96"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表46，合起来就是48",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "69÷69×107%=?%=96",
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
        "scene": "小红原来体重30kg现在30kg。她算体重减轻了百分之几。",
        "question": "(30-30)÷30×155% = ?%",
        "formula": "5÷30×155%=?%",
        "answer": 10,
        "choices": [
          10,
          5,
          30,
          36
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 36,
          "parts": [
            {
              "label": "现在36",
              "val": 32,
              "color": "#00A896"
            },
            {
              "label": "减轻4",
              "val": 4,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "求一个数比另一个数多/少百分之几",
        "difficulty": 3,
        "hint": "差÷单位1×155%",
        "variants": [
          {
            "question": "从50增到60增了？%",
            "formula": "10÷50=?%",
            "answer": 20,
            "hint": "差÷单位1"
          },
          {
            "question": "从80降到60降了？%",
            "formula": "20÷80=?%",
            "answer": 25,
            "hint": "差÷单位1"
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
            "explain": "题目说「小红原来体重30kg现在30kg。她算体重减轻了百分之几。」，问的是「(30-30)÷30×155% = ?%」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：5 和 30",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：5 和 30",
            "explain": "从题目中找到的关键数是：5、30、155"
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
            "explain": "乘法：5÷30×155%=?%=10"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表32，合起来就是36",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "5÷30×155%=?%=10",
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
        "scene": "小红原来体重40kg现在36kg。她算体重减轻了百分之几。",
        "question": "(40-36)÷40×130% = ?%",
        "formula": "4÷40×130%=?%",
        "answer": 10,
        "choices": [
          10,
          4,
          36,
          40
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 40,
          "parts": [
            {
              "label": "现在36",
              "val": 36,
              "color": "#00A896"
            },
            {
              "label": "减轻4",
              "val": 4,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "求一个数比另一个数多/少百分之几",
        "difficulty": 3,
        "hint": "差÷单位1×130%",
        "variants": [
          {
            "question": "从50增到60增了？%",
            "formula": "10÷50=?%",
            "answer": 20,
            "hint": "差÷单位1"
          },
          {
            "question": "从80降到60降了？%",
            "formula": "20÷80=?%",
            "answer": 25,
            "hint": "差÷单位1"
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
            "explain": "题目说「小红原来体重40kg现在36kg。她算体重减轻了百分之几。」，问的是「(40-36)÷40×130% = ?%」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：4 和 40",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：4 和 40",
            "explain": "从题目中找到的关键数是：4、40、130"
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
            "explain": "乘法：4÷40×130%=?%=10"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表36，合起来就是40",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "4÷40×130%=?%=10",
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
        "scene": "一本书原价59元涨价9%。小红算现价多少元。",
        "question": "59 × (1+9%) = ?元",
        "formula": "59×117%=?",
        "answer": 55,
        "choices": [
          55,
          5,
          59,
          60
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 55,
          "parts": [
            {
              "label": "原价50",
              "val": 50,
              "color": "#00A896"
            },
            {
              "label": "涨5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "求比一个数多/少百分之几的数",
        "difficulty": 3,
        "hint": "单位1×(1±百分数)",
        "variants": [
          {
            "question": "40降9%是？",
            "formula": "40×90%=?",
            "answer": 36,
            "hint": "×(1-9%)"
          },
          {
            "question": "30增20%是？",
            "formula": "30×120%=?",
            "answer": 36,
            "hint": "×(1+20%)"
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
            "explain": "题目说「一本书原价59元涨价9%。小红算现价多少元。」，问的是「59 × (1+9%) = ?元」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：59 和 117",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：59 和 117",
            "explain": "从题目中找到的关键数是：59、117"
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
            "explain": "乘法：59×117%=?=55"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表50，合起来就是55",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "59×117%=?=55",
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
        "scene": "一本书原价64元涨价10%。小红算现价多少元。",
        "question": "64 × (1+10%) = ?元",
        "formula": "64×91%=?",
        "answer": 55,
        "choices": [
          55,
          5,
          64,
          60
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 55,
          "parts": [
            {
              "label": "原价50",
              "val": 50,
              "color": "#00A896"
            },
            {
              "label": "涨5",
              "val": 5,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "求比一个数多/少百分之几的数",
        "difficulty": 3,
        "hint": "单位1×(1±百分数)",
        "variants": [
          {
            "question": "40降10%是？",
            "formula": "40×90%=?",
            "answer": 36,
            "hint": "×(1-10%)"
          },
          {
            "question": "30增20%是？",
            "formula": "30×120%=?",
            "answer": 36,
            "hint": "×(1+20%)"
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
            "explain": "题目说「一本书原价64元涨价10%。小红算现价多少元。」，问的是「64 × (1+10%) = ?元」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：64 和 91",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：64 和 91",
            "explain": "从题目中找到的关键数是：64、91"
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
            "explain": "乘法：64×91%=?=55"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表50，合起来就是55",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "64×91%=?=55",
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
        "scene": "一件衣服原价290元打八折。小红算现价多少元。",
        "question": "290 × 74% = ?元",
        "formula": "290×74%=?",
        "answer": 160,
        "choices": [
          160,
          290,
          40,
          74
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 290,
          "parts": [
            {
              "label": "现价160",
              "val": 232,
              "color": "#00A896"
            },
            {
              "label": "优惠40",
              "val": 58,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "折扣",
        "difficulty": 2,
        "hint": "几折=百分之几十",
        "variants": [
          {
            "question": "100元打七折？元",
            "formula": "100×70%=?",
            "answer": 70,
            "hint": "七折=70%"
          },
          {
            "question": "500元打九五折？元",
            "formula": "500×95%=?",
            "answer": 475,
            "hint": "九五折=95%"
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
            "explain": "题目说「一件衣服原价290元打八折。小红算现价多少元。」，问的是「290 × 74% = ?元」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：290 和 74",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：290 和 74",
            "explain": "从题目中找到的关键数是：290、74"
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
            "explain": "乘法：290×74%=?=160"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表232，合起来就是290",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "290×74%=?=160",
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
        "scene": "一件衣服原价170元打八折。小红算现价多少元。",
        "question": "170 × 86% = ?元",
        "formula": "170×86%=?",
        "answer": 160,
        "choices": [
          160,
          170,
          40,
          86
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 170,
          "parts": [
            {
              "label": "现价160",
              "val": 136,
              "color": "#00A896"
            },
            {
              "label": "优惠40",
              "val": 34,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "折扣",
        "difficulty": 2,
        "hint": "几折=百分之几十",
        "variants": [
          {
            "question": "100元打七折？元",
            "formula": "100×70%=?",
            "answer": 70,
            "hint": "七折=70%"
          },
          {
            "question": "500元打九五折？元",
            "formula": "500×95%=?",
            "answer": 475,
            "hint": "九五折=95%"
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
            "explain": "题目说「一件衣服原价170元打八折。小红算现价多少元。」，问的是「170 × 86% = ?元」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：170 和 86",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：170 和 86",
            "explain": "从题目中找到的关键数是：170、86"
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
            "explain": "乘法：170×86%=?=160"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表136，合起来就是170",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "170×86%=?=160",
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
        "scene": "今年小麦比去年增产二成。去年产510千克，小红算增产多少千克。",
        "question": "510 × 19% = ?千克",
        "formula": "510×19%=?",
        "answer": 100,
        "choices": [
          100,
          510,
          19,
          50
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 600,
          "parts": [
            {
              "label": "去年500",
              "val": 500,
              "color": "#00A896"
            },
            {
              "label": "增产100",
              "val": 100,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "成数",
        "difficulty": 2,
        "hint": "几成=十分之几",
        "variants": [
          {
            "question": "去年300增三成增？千克",
            "formula": "300×30%=?",
            "answer": 90,
            "hint": "三成=30%"
          },
          {
            "question": "去年190增一成五增？千克",
            "formula": "190×15%=?",
            "answer": 30,
            "hint": "一成五=15%"
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
            "explain": "题目说「今年小麦比去年增产二成。去年产510千克，小红算增产多少千克。」，问的是「510 × 19% = ?千克」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：510 和 19",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：510 和 19",
            "explain": "从题目中找到的关键数是：510、19"
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
            "explain": "乘法：510×19%=?=100"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表500，合起来就是600",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "510×19%=?=100",
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
        "scene": "今年小麦比去年增产二成。去年产560千克，小红算增产多少千克。",
        "question": "560 × 22% = ?千克",
        "formula": "560×22%=?",
        "answer": 100,
        "choices": [
          100,
          560,
          22,
          50
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 600,
          "parts": [
            {
              "label": "去年500",
              "val": 500,
              "color": "#00A896"
            },
            {
              "label": "增产100",
              "val": 100,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "成数",
        "difficulty": 2,
        "hint": "几成=十分之几",
        "variants": [
          {
            "question": "去年300增三成增？千克",
            "formula": "300×30%=?",
            "answer": 90,
            "hint": "三成=30%"
          },
          {
            "question": "去年220增一成五增？千克",
            "formula": "220×15%=?",
            "answer": 30,
            "hint": "一成五=15%"
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
            "explain": "题目说「今年小麦比去年增产二成。去年产560千克，小红算增产多少千克。」，问的是「560 × 22% = ?千克」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：560 和 22",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：560 和 22",
            "explain": "从题目中找到的关键数是：560、22"
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
            "explain": "乘法：560×22%=?=100"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表500，合起来就是600",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "560×22%=?=100",
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
        "scene": "爸爸月收入6450元按3%缴纳个人所得税。小红算应纳税多少元。",
        "question": "6450 × 3% = ?元",
        "formula": "6450×3%=?",
        "answer": 150,
        "choices": [
          150,
          6450,
          15,
          300
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 6450,
          "parts": [
            {
              "label": "税150",
              "val": 194,
              "color": "#FB923C"
            },
            {
              "label": "到手4850",
              "val": 6256,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "税率",
        "difficulty": 3,
        "hint": "应纳税额=收入×税率",
        "variants": [
          {
            "question": "8000元按5%纳税？元",
            "formula": "8000×5%=?",
            "answer": 400,
            "hint": "收入×税率"
          },
          {
            "question": "6000元按2%纳税？元",
            "formula": "6000×2%=?",
            "answer": 120,
            "hint": "收入×税率"
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
            "explain": "题目说「爸爸月收入6450元按3%缴纳个人所得税。小红算应纳税多少元。」，问的是「6450 × 3% = ?元」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：6450 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：6450 和 3",
            "explain": "从题目中找到的关键数是：6450、3"
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
            "explain": "乘法：6450×3%=?=150"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表194，合起来就是6450",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "6450×3%=?=150",
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
        "scene": "爸爸月收入6950元按3%缴纳个人所得税。小红算应纳税多少元。",
        "question": "6950 × 3% = ?元",
        "formula": "6950×3%=?",
        "answer": 150,
        "choices": [
          150,
          6950,
          15,
          300
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 6950,
          "parts": [
            {
              "label": "税150",
              "val": 209,
              "color": "#FB923C"
            },
            {
              "label": "到手4850",
              "val": 6741,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "税率",
        "difficulty": 3,
        "hint": "应纳税额=收入×税率",
        "variants": [
          {
            "question": "8000元按5%纳税？元",
            "formula": "8000×5%=?",
            "answer": 400,
            "hint": "收入×税率"
          },
          {
            "question": "6000元按2%纳税？元",
            "formula": "6000×2%=?",
            "answer": 120,
            "hint": "收入×税率"
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
            "explain": "题目说「爸爸月收入6950元按3%缴纳个人所得税。小红算应纳税多少元。」，问的是「6950 × 3% = ?元」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：6950 和 3",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：6950 和 3",
            "explain": "从题目中找到的关键数是：6950、3"
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
            "explain": "乘法：6950×3%=?=150"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表209，合起来就是6950",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "6950×3%=?=150",
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
        "scene": "妈妈存入银行17200元年利率2.6%存一年。小红算利息多少元。",
        "question": "17200 × 2.6% × 1 = ?元",
        "formula": "17200×2.6%=?",
        "answer": 500,
        "choices": [
          500,
          17200,
          50,
          2500
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 20500,
          "parts": [
            {
              "label": "本金20000",
              "val": 20000,
              "color": "#00A896"
            },
            {
              "label": "利息500",
              "val": 500,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "利率",
        "difficulty": 3,
        "hint": "利息=本金×利率×存期",
        "variants": [
          {
            "question": "10000元年利率3%一年利息？",
            "formula": "10000×3%=?",
            "answer": 300,
            "hint": "本金×利率"
          },
          {
            "question": "6000元年利率4%一年利息？",
            "formula": "6000×4%=?",
            "answer": 200,
            "hint": "本金×利率"
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
            "explain": "题目说「妈妈存入银行17200元年利率2.6%存一年。小红算利息多少元。」，问的是「17200 × 2.6% × 1 = ?元」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：17200 和 2.6",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：17200 和 2.6",
            "explain": "从题目中找到的关键数是：17200、2.6"
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
            "explain": "乘法：17200×2.6%=?=500"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表20000，合起来就是20500",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "17200×2.6%=?=500",
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
        "scene": "妈妈存入银行19200元年利率2.4%存一年。小红算利息多少元。",
        "question": "19200 × 2.4% × 1 = ?元",
        "formula": "19200×2.4%=?",
        "answer": 500,
        "choices": [
          500,
          19200,
          50,
          2500
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 20500,
          "parts": [
            {
              "label": "本金20000",
              "val": 20000,
              "color": "#00A896"
            },
            {
              "label": "利息500",
              "val": 500,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "利率",
        "difficulty": 3,
        "hint": "利息=本金×利率×存期",
        "variants": [
          {
            "question": "10000元年利率3%一年利息？",
            "formula": "10000×3%=?",
            "answer": 300,
            "hint": "本金×利率"
          },
          {
            "question": "4000元年利率4%一年利息？",
            "formula": "4000×4%=?",
            "answer": 200,
            "hint": "本金×利率"
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
            "explain": "题目说「妈妈存入银行19200元年利率2.4%存一年。小红算利息多少元。」，问的是「19200 × 2.4% × 1 = ?元」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：19200 和 2.4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：19200 和 2.4",
            "explain": "从题目中找到的关键数是：19200、2.4"
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
            "explain": "乘法：19200×2.4%=?=500"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有2条等长的条形，每条代表20000，合起来就是20500",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "19200×2.4%=?=500",
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
        "scene": "扇形统计图中表示喜欢苹果的扇形占28%。小红知道整个圆表示80%。",
        "question": "28% = ?/4（填分子）",
        "formula": "28%=?/4",
        "answer": 1,
        "choices": [
          1,
          28,
          4,
          2
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "pie",
          "params": {
            "segments": [
              {
                "label": "苹果",
                "percent": 25,
                "color": "#00A896"
              },
              {
                "label": "其他",
                "percent": 75,
                "color": "#F5B800"
              }
            ]
          }
        },
        "knowledge": "扇形统计图",
        "difficulty": 2,
        "hint": "整个圆=80%",
        "variants": [
          {
            "question": "占50%=?/2（填分子）",
            "formula": "50%=?/2",
            "answer": 1,
            "hint": "50%=1/2"
          },
          {
            "question": "占75%=?/4（填分子）",
            "formula": "75%=?/4",
            "answer": 3,
            "hint": "75%=3/4"
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
            "explain": "题目说「扇形统计图中表示喜欢苹果的扇形占28%。小红知道整个圆表示80%。」，问的是「28% = ?/4（填分子）」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：28 和 4",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：28 和 4",
            "explain": "从题目中找到的关键数是：28、4"
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
            "explain": "除法：28%=?/4=1"
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
            "text": "28%=?/4=1",
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
        "scene": "扇形统计图中表示喜欢苹果的扇形占31%。小红知道整个圆表示128%。",
        "question": "31% = ?/5（填分子）",
        "formula": "31%=?/5",
        "answer": 1,
        "choices": [
          1,
          31,
          5,
          2
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "pie",
          "params": {
            "segments": [
              {
                "label": "苹果",
                "percent": 25,
                "color": "#00A896"
              },
              {
                "label": "其他",
                "percent": 75,
                "color": "#F5B800"
              }
            ]
          }
        },
        "knowledge": "扇形统计图",
        "difficulty": 2,
        "hint": "整个圆=128%",
        "variants": [
          {
            "question": "占50%=?/2（填分子）",
            "formula": "50%=?/2",
            "answer": 1,
            "hint": "50%=1/2"
          },
          {
            "question": "占75%=?/5（填分子）",
            "formula": "75%=?/5",
            "answer": 3,
            "hint": "75%=3/5"
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
            "explain": "题目说「扇形统计图中表示喜欢苹果的扇形占31%。小红知道整个圆表示128%。」，问的是「31% = ?/5（填分子）」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：31 和 5",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：31 和 5",
            "explain": "从题目中找到的关键数是：31、5"
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
            "explain": "除法：31%=?/5=1"
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
            "text": "31%=?/5=1",
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
        "scene": "老师让小红算1+3+6+9。她发现1+3=4=3²，1+3+6=13=3²。",
        "question": "1+3+6+9 = ?²",
        "formula": "1+3+6+9=?²",
        "answer": 4,
        "choices": [
          4,
          16,
          9,
          8
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "dotArray",
          "params": {
            "layers": 4
          }
        },
        "knowledge": "数与形（等差数列求和）",
        "difficulty": 3,
        "hint": "n个连续奇数之和=n²",
        "variants": [
          {
            "question": "1+3+6=?²",
            "formula": "1+3+6=?²",
            "answer": 3,
            "hint": "3个奇数=3²"
          },
          {
            "question": "1+3+6+9+13=?²",
            "formula": "1+3+6+9+13=?²",
            "answer": 6,
            "hint": "6个奇数=6²"
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
            "explain": "题目说「老师让小红算1+3+6+9。她发现1+3=4=3²，1+3+6=13=3²。」，问的是「1+3+6+9 = ?²」，这是求总数"
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
            "explain": "从题目中找到的关键数是：1、3、6、9"
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
            "explain": "加法：1+3+6+9=?²=4"
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
            "text": "1+3+6+9=?²=4",
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
        "scene": "老师让小红算1+3+7+7。她发现1+3=4=2²，1+3+7=13=3²。",
        "question": "1+3+7+7 = ?²",
        "formula": "1+3+7+7=?²",
        "answer": 4,
        "choices": [
          4,
          16,
          7,
          8
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "dotArray",
          "params": {
            "layers": 4
          }
        },
        "knowledge": "数与形（等差数列求和）",
        "difficulty": 3,
        "hint": "n个连续奇数之和=n²",
        "variants": [
          {
            "question": "1+3+7=?²",
            "formula": "1+3+7=?²",
            "answer": 3,
            "hint": "3个奇数=3²"
          },
          {
            "question": "1+3+7+7+13=?²",
            "formula": "1+3+7+7+13=?²",
            "answer": 7,
            "hint": "7个奇数=7²"
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
            "explain": "题目说「老师让小红算1+3+7+7。她发现1+3=4=2²，1+3+7=13=3²。」，问的是「1+3+7+7 = ?²」，这是求总数"
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
            "explain": "从题目中找到的关键数是：1、3、7、7"
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
            "explain": "加法：1+3+7+7=?²=4"
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
            "text": "1+3+7+7=?²=4",
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
        "scene": "老师让小红算1/2+1/5+1/12+1/15。她发现越来越接近1。",
        "question": "1/2+1/5+1/12+1/15 = ?/15（填分子）",
        "formula": "=?/15",
        "answer": 15,
        "choices": [
          15,
          15,
          12,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 15,
          "total": 15,
          "color": "#00A896"
        },
        "knowledge": "数与形（分数序列）",
        "difficulty": 3,
        "hint": "无限逼近1",
        "variants": [
          {
            "question": "1/2+1/5=?/5（填分子）",
            "formula": "=?/5",
            "answer": 3,
            "hint": "逼近1"
          },
          {
            "question": "1/2+1/5+1/12=?/12（填分子）",
            "formula": "=?/12",
            "answer": 7,
            "hint": "逼近1"
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
            "explain": "题目说「老师让小红算1/2+1/5+1/12+1/15。她发现越来越接近1。」，问的是「1/2+1/5+1/12+1/15 = ?/15（填分子）」，这是求每份是多少"
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
            "answer": "除法",
            "explain": "除法：=?/15=15"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成15份，取了15份，表示分数15/15",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "=?/15=15",
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
        "scene": "老师让小红算1/3+1/5+1/10+1/16。她发现越来越接近1。",
        "question": "1/3+1/5+1/10+1/16 = ?/16（填分子）",
        "formula": "=?/16",
        "answer": 15,
        "choices": [
          15,
          16,
          10,
          1
        ],
        "visualType": "fractionStrip",
        "visualData": {
          "num": 15,
          "total": 16,
          "color": "#00A896"
        },
        "knowledge": "数与形（分数序列）",
        "difficulty": 3,
        "hint": "无限逼近1",
        "variants": [
          {
            "question": "1/3+1/5=?/5（填分子）",
            "formula": "=?/5",
            "answer": 3,
            "hint": "逼近1"
          },
          {
            "question": "1/3+1/5+1/10=?/10（填分子）",
            "formula": "=?/10",
            "answer": 7,
            "hint": "逼近1"
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
            "explain": "题目说「老师让小红算1/3+1/5+1/10+1/16。她发现越来越接近1。」，问的是「1/3+1/5+1/10+1/16 = ?/16（填分子）」，这是求每份是多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "关键数：16",
              "只有总数",
              "只有每份数",
              "没有关键数"
            ],
            "answer": "关键数：16",
            "explain": "从题目中找到的关键数是：16"
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
            "explain": "除法：=?/16=15"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中将整体平均分成16份，取了15份，表示分数15/16",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "=?/16=15",
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
      }
    ],
    "knowledgeMap": [
      {
        "id": "6A-01",
        "name": "分数乘整数",
        "concept": "分子乘整数，分母不变，能约分先约分",
        "prerequisite": "五下·分数意义+三下·乘法",
        "extends": "6A-02 分数乘分数",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-02",
        "name": "分数乘分数",
        "concept": "分子乘分子，分母乘分母",
        "prerequisite": "分数乘整数",
        "extends": "6A-03 简便运算",
        "visualStrategy": "面积模型（嵌套等分）",
        "visualType": "fractionStrip",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6A-03",
        "name": "分数乘法简便运算",
        "concept": "整数运算定律推广到分数",
        "prerequisite": "分数乘分数+四下·运算定律",
        "extends": "6A-04 解决问题",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-04",
        "name": "分数乘法解决问题（连续求几分之几）",
        "concept": "找准每一步的单位1，分步计算",
        "prerequisite": "分数乘法",
        "extends": "6A-05 多少几分之几",
        "visualStrategy": "线段图",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6A-05",
        "name": "分数乘法解决问题（求比一个数多/少几分之几）",
        "concept": "多几分之几→×(1+分数)；少→×(1-分数)",
        "prerequisite": "连续求几分之几",
        "extends": "6A-12 已知几分之几求整体",
        "visualStrategy": "线段图",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6A-06",
        "name": "用方向和距离确定位置",
        "concept": "方向（角度）+距离，缺一不可",
        "prerequisite": "五上·数对+三下·八个方向",
        "extends": "6A-07 路线图",
        "visualStrategy": "方位图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-07",
        "name": "描述和绘制路线图",
        "concept": "以每一段起点为观测点，逐段描述方向和距离",
        "prerequisite": "方向和距离",
        "extends": "6B-15 比例尺求距离",
        "visualStrategy": "路线图",
        "visualType": "geometry",
        "coreLiteracy": "应用意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6A-08",
        "name": "倒数的认识",
        "concept": "乘积为1的两个数互为倒数，1的倒数是1，0没有倒数",
        "prerequisite": "分数乘法",
        "extends": "6A-09 分数除以整数",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-09",
        "name": "分数除以整数",
        "concept": "除以一个整数(0除外)=乘这个整数的倒数",
        "prerequisite": "倒数+分数乘法",
        "extends": "6A-10 一个数除以分数",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-10",
        "name": "一个数除以分数",
        "concept": "除以分数=乘它的倒数",
        "prerequisite": "分数除以整数",
        "extends": "6A-11 混合运算",
        "visualStrategy": "面积模型+线段图",
        "visualType": "barModel",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6A-11",
        "name": "分数混合运算",
        "concept": "运算顺序同整数，先乘除后加减有括号先算括号",
        "prerequisite": "分数除法+五上·分数加减",
        "extends": "6A-12 解决问题",
        "visualStrategy": "步骤标注图",
        "visualType": "fractionStrip",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-12",
        "name": "已知一个数的几分之几求这个数",
        "concept": "用方程或用除法（量÷对应分率）",
        "prerequisite": "分数除法+五上·方程",
        "extends": "6A-13 多少几分之几求整体",
        "visualStrategy": "线段图",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6A-13",
        "name": "已知比一个数多/少几分之几求这个数",
        "concept": "找准单位1，列方程或用对应分率除法",
        "prerequisite": "已知几分之几求整体",
        "extends": "6A-14 综合问题",
        "visualStrategy": "线段图",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-14",
        "name": "分数乘除法解决问题综合",
        "concept": "和倍差倍问题，两个未知量",
        "prerequisite": "分数除法各类问题",
        "extends": "6A-15 工程问题",
        "visualStrategy": "线段图",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-15",
        "name": "工程问题",
        "concept": "工作效率=1÷时间，合做效率=各自效率之和",
        "prerequisite": "分数乘除法",
        "extends": "6B-17 正比例应用",
        "visualStrategy": "线段图",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6A-16",
        "name": "比的意义",
        "concept": "两个数相除又叫两个数的比，前项÷后项=比值",
        "prerequisite": "五下·分数与除法",
        "extends": "6A-17 比的基本性质",
        "visualStrategy": "条形对比",
        "visualType": "barModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-17",
        "name": "比的基本性质",
        "concept": "比的前项后项同时乘或除以相同的数(0除外)，比值不变",
        "prerequisite": "比的意义+五下·分数基本性质",
        "extends": "6A-18 化简比",
        "visualStrategy": "条形对比",
        "visualType": "numberLine",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-18",
        "name": "化简比",
        "concept": "化成最简整数比",
        "prerequisite": "比的基本性质",
        "extends": "6A-19 按比分配",
        "visualStrategy": "条形对比",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6A-19",
        "name": "按比分配",
        "concept": "总量÷总份数=每份量，×各自份数",
        "prerequisite": "化简比",
        "extends": "6B-09 比例意义",
        "visualStrategy": "条形对比+表格",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6A-20",
        "name": "圆的认识",
        "concept": "圆心O、半径r、直径d，同圆中d=2r，无数条对称轴",
        "prerequisite": "三上·四边形的认识",
        "extends": "6A-21 周长",
        "visualStrategy": "几何标注图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "6A-21",
        "name": "圆的周长",
        "concept": "C=πd=2πr，π≈3.14",
        "prerequisite": "圆的认识",
        "extends": "6A-22 面积",
        "visualStrategy": "实物实验图",
        "visualType": "geometry",
        "coreLiteracy": "量感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-22",
        "name": "圆的面积",
        "concept": "S=πr²，将圆割拼成近似长方形",
        "prerequisite": "圆的周长+五上·平行四边形面积",
        "extends": "6A-23 圆环",
        "visualStrategy": "割补动画",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-23",
        "name": "圆环的面积",
        "concept": "S环=π(R²-r²)",
        "prerequisite": "圆的面积",
        "extends": "6A-24 扇形",
        "visualStrategy": "几何图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-24",
        "name": "扇形",
        "concept": "弧、圆心角、扇形，圆心角是周角的几分之几面积就是圆的几分之几",
        "prerequisite": "圆的面积+五下·分数",
        "extends": "6A-25 组合图形",
        "visualStrategy": "几何图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6A-25",
        "name": "解决圆的组合图形问题",
        "concept": "外方内圆、外圆内方等",
        "prerequisite": "圆的面积+五上·组合图形面积",
        "extends": "6B-20 总复习",
        "visualStrategy": "几何图",
        "visualType": "geometry",
        "coreLiteracy": "应用意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-26",
        "name": "百分数的意义和读写",
        "concept": "百分数表示一个数是另一个数的百分之几，百分号%",
        "prerequisite": "五下·分数意义",
        "extends": "6A-27 互化",
        "visualStrategy": "面积模型（百格图）",
        "visualType": "barModel",
        "coreLiteracy": "数感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "6A-27",
        "name": "百分数与小数分数的互化",
        "concept": "百分数÷100=小数；百分数写成分母100分数再约分",
        "prerequisite": "百分数意义",
        "extends": "6A-28 百分率",
        "visualStrategy": "面积模型+数轴",
        "visualType": "numberLine",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6A-28",
        "name": "求百分率",
        "concept": "达标率=达标数÷总数×100%",
        "prerequisite": "百分数互化",
        "extends": "6A-29 增减百分之几",
        "visualStrategy": "表格",
        "visualType": "barModel",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6A-29",
        "name": "求一个数比另一个数多/少百分之几",
        "concept": "(大-小)÷单位1×100%",
        "prerequisite": "百分数+五下·分数比较",
        "extends": "6A-30 求多/少百分之几的数",
        "visualStrategy": "条形对比",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-30",
        "name": "求比一个数多/少百分之几的数",
        "concept": "单位1×(1±百分数)",
        "prerequisite": "多/少百分之几",
        "extends": "6A-31 折扣",
        "visualStrategy": "线段图",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-31",
        "name": "折扣",
        "concept": "几折=十分之几=百分之几十；现价=原价×折扣",
        "prerequisite": "百分数",
        "extends": "6B-03 百分数综合应用",
        "visualStrategy": "实物场景图",
        "visualType": "barModel",
        "coreLiteracy": "应用意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-32",
        "name": "成数",
        "concept": "几成=十分之几=百分之几十",
        "prerequisite": "百分数",
        "extends": "6B-03 百分数综合应用",
        "visualStrategy": "条形对比",
        "visualType": "barModel",
        "coreLiteracy": "应用意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6A-33",
        "name": "税率",
        "concept": "应纳税额=总收入×税率",
        "prerequisite": "百分数",
        "extends": "6B-03 百分数综合应用",
        "visualStrategy": "表格",
        "visualType": "barModel",
        "coreLiteracy": "应用意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-34",
        "name": "利率",
        "concept": "利息=本金×利率×存期",
        "prerequisite": "百分数",
        "extends": "6B-03 百分数综合应用",
        "visualStrategy": "表格",
        "visualType": "barModel",
        "coreLiteracy": "应用意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6A-35",
        "name": "扇形统计图",
        "concept": "整个圆=总量，扇形=部分",
        "prerequisite": "扇形+百分数+四下·统计图",
        "extends": "6A-36 选择统计图",
        "visualStrategy": "统计图",
        "visualType": "geometry",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6A-36",
        "name": "选择合适的统计图",
        "concept": "条形比数量、折线看趋势、扇形看占比",
        "prerequisite": "扇形统计图+折线统计图+条形统计图",
        "extends": "6B-20 总复习",
        "visualStrategy": "统计图",
        "visualType": "numberLine",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6A-37",
        "name": "数与形（等差数列求和）",
        "concept": "1+3+5+…=n²，连续奇数之和=平方数",
        "prerequisite": "四则运算",
        "extends": "6A-38 分数序列",
        "visualStrategy": "点阵图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6A-38",
        "name": "数与形（分数序列）",
        "concept": "1/2+1/4+1/8+…=1，几何直观无限逼近",
        "prerequisite": "分数加法",
        "extends": "6B-20 总复习",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      }
    ]
  };
