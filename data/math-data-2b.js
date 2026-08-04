window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['2b'] = {
    "title": "二年级下册·表内乘除法与万以内数",
    "sub": "数与代数 · 图形与几何 · 综合实践",
    "progress": 0,
    "units": [
      {
        "name": "表内乘法",
        "level": "current",
        "children": [
          {
            "name": "9的乘法口诀",
            "level": "current"
          },
          {
            "name": "乘法应用",
            "level": "current"
          }
        ]
      },
      {
        "name": "表内除法",
        "level": "current",
        "children": [
          {
            "name": "9的除法",
            "level": "current"
          },
          {
            "name": "除法应用",
            "level": "current"
          }
        ]
      },
      {
        "name": "万以内数的认识",
        "level": "current",
        "children": [
          {
            "name": "数的读写",
            "level": "current"
          },
          {
            "name": "万以内加减",
            "level": "current"
          }
        ]
      },
      {
        "name": "克和千克",
        "level": "current",
        "children": [
          {
            "name": "认识克",
            "level": "current"
          },
          {
            "name": "认识千克",
            "level": "current"
          }
        ]
      },
      {
        "name": "图形的运动",
        "level": "current",
        "children": [
          {
            "name": "轴对称",
            "level": "current"
          },
          {
            "name": "平移旋转",
            "level": "current"
          }
        ]
      },
      {
        "name": "混合运算",
        "level": "current",
        "children": [
          {
            "name": "两步混合",
            "level": "current"
          }
        ]
      },
      {
        "name": "有余数的除法",
        "level": "current",
        "children": [
          {
            "name": "余数与除法",
            "level": "current"
          }
        ]
      },
      {
        "name": "数学广角",
        "level": "current",
        "children": [
          {
            "name": "简单推理",
            "level": "current"
          }
        ]
      }
    ],
    "problems": [
      {
        "id": "2B-01",
        "scene": "小明买铅笔，每支3元，买5支。",
        "question": "一共多少钱？",
        "formula": "3×5=?",
        "answer": 15,
        "choices": [
          17,
          16,
          15,
          18
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每支3元",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 3,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 3,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 3,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 3,
              "color": "#8B5CF6"
            }
          ],
          "total": 15
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少元（总数）",
              "每份有多少元",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少元（总数）",
            "explain": "题目说「小明买铅笔，每支3元，买5支。」，问的是「一共多少钱？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份3个，共5份",
              "总数15，每份3个",
              "总数15，共5份",
              "只有总数"
            ],
            "answer": "每份3个，共5份",
            "explain": "每份是3元，有5份，这是两个关键数"
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
            "explain": "求5个3合起来是多少，用乘法：3×5=15"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有5条等长的条形，每条代表3个元，合起来就是总数15",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求5个3相加的和：3×5=15",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-02",
        "scene": "花园里有4排向日葵，每排6棵。",
        "question": "一共有多少棵向日葵？",
        "formula": "4×6=?",
        "answer": 24,
        "choices": [
          27,
          26,
          24,
          25
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每排6棵",
              "value": 6,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 6,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 6,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 6,
              "color": "#E8A0BF"
            }
          ],
          "total": 24
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少棵（总数）",
              "每份有多少棵",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少棵（总数）",
            "explain": "题目说「花园里有4排向日葵，每排6棵。」，问的是「一共有多少棵向日葵？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份6个，共4份",
              "总数24，每份6个",
              "总数24，共4份",
              "只有总数"
            ],
            "answer": "每份6个，共4份",
            "explain": "每份是6棵，有4份，这是两个关键数"
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
            "explain": "求4个6合起来是多少，用乘法：6×4=24"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有4条等长的条形，每条代表6个棵，合起来就是总数24",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求4个6相加的和：6×4=24",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-03",
        "scene": "妈妈买了7袋苹果，每袋8个。",
        "question": "一共多少个苹果？",
        "formula": "7×8=?",
        "answer": 56,
        "choices": [
          59,
          56,
          58,
          57
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每袋8个",
              "value": 8,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 8,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 8,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 8,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 8,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 8,
              "color": "#3B82F6"
            },
            {
              "label": "",
              "value": 8,
              "color": "#10B981"
            }
          ],
          "total": 56
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少个（总数）",
              "每份有多少个",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少个（总数）",
            "explain": "题目说「妈妈买了7袋苹果，每袋8个。」，问的是「一共多少个苹果？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份8个，共7份",
              "总数56，每份8个",
              "总数56，共7份",
              "只有总数"
            ],
            "answer": "每份8个，共7份",
            "explain": "每份是8个，有7份，这是两个关键数"
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
            "explain": "求7个8合起来是多少，用乘法：8×7=56"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有7条等长的条形，每条代表8个个，合起来就是总数56",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求7个8相加的和：8×7=56",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-04",
        "scene": "小华每天读5页书，读了6天。",
        "question": "一共读了多少页？",
        "formula": "5×6=?",
        "answer": 30,
        "choices": [
          30,
          33,
          31,
          32
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每天读5页书",
              "value": 5,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 5,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 5,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 5,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 5,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 5,
              "color": "#3B82F6"
            }
          ],
          "total": 30
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少页（总数）",
              "每份有多少页",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少页（总数）",
            "explain": "题目说「小华每天读5页书，读了6天。」，问的是「一共读了多少页？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份5个，共6份",
              "总数30，每份5个",
              "总数30，共6份",
              "只有总数"
            ],
            "answer": "每份5个，共6份",
            "explain": "每份是5页，有6份，这是两个关键数"
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
            "explain": "求6个5合起来是多少，用乘法：5×6=30"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有6条等长的条形，每条代表5个页，合起来就是总数30",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求6个5相加的和：5×6=30",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-05",
        "scene": "学校买了9盒彩笔，每盒4支。",
        "question": "一共多少支彩笔？",
        "formula": "9×4=?",
        "answer": 36,
        "choices": [
          39,
          38,
          36,
          37
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每盒4支",
              "value": 4,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 4,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 4,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 4,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 4,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 4,
              "color": "#3B82F6"
            },
            {
              "label": "",
              "value": 4,
              "color": "#10B981"
            },
            {
              "label": "",
              "value": 4,
              "color": "#F59E0B"
            },
            {
              "label": "",
              "value": 4,
              "color": "#EF4444"
            }
          ],
          "total": 36
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少支（总数）",
              "每份有多少支",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少支（总数）",
            "explain": "题目说「学校买了9盒彩笔，每盒4支。」，问的是「一共多少支彩笔？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份4个，共9份",
              "总数36，每份4个",
              "总数36，共9份",
              "只有总数"
            ],
            "answer": "每份4个，共9份",
            "explain": "每份是4支，有9份，这是两个关键数"
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
            "explain": "求9个4合起来是多少，用乘法：4×9=36"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有9条等长的条形，每条代表4个支，合起来就是总数36",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求9个4相加的和：4×9=36",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-06",
        "scene": "教室有3排课桌，每排7张。",
        "question": "教室有几张课桌？",
        "formula": "3×7=?",
        "answer": 21,
        "choices": [
          21,
          22,
          23,
          24
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每排7张",
              "value": 7,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 7,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 7,
              "color": "#FB923C"
            }
          ],
          "total": 21
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少张（总数）",
              "每份有多少张",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少张（总数）",
            "explain": "题目说「教室有3排课桌，每排7张。」，问的是「教室有几张课桌？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份7个，共3份",
              "总数21，每份7个",
              "总数21，共3份",
              "只有总数"
            ],
            "answer": "每份7个，共3份",
            "explain": "每份是7张，有3份，这是两个关键数"
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
            "explain": "求3个7合起来是多少，用乘法：7×3=21"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表7个张，合起来就是总数21",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求3个7相加的和：7×3=21",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-07",
        "scene": "小丽折纸鹤，每组8只，折了4组。",
        "question": "一共折了多少只？",
        "formula": "8×4=?",
        "answer": 32,
        "choices": [
          32,
          34,
          35,
          33
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每组8只",
              "value": 8,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 8,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 8,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 8,
              "color": "#E8A0BF"
            }
          ],
          "total": 32
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少只（总数）",
              "每份有多少只",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少只（总数）",
            "explain": "题目说「小丽折纸鹤，每组8只，折了4组。」，问的是「一共折了多少只？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份8个，共4份",
              "总数32，每份8个",
              "总数32，共4份",
              "只有总数"
            ],
            "answer": "每份8个，共4份",
            "explain": "每份是8只，有4份，这是两个关键数"
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
            "explain": "求4个8合起来是多少，用乘法：8×4=32"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有4条等长的条形，每条代表8个只，合起来就是总数32",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求4个8相加的和：8×4=32",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-08",
        "scene": "超市一天卖了6箱矿泉水，每箱9瓶。",
        "question": "一共卖了多少瓶？",
        "formula": "6×9=?",
        "answer": 54,
        "choices": [
          55,
          57,
          54,
          56
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每箱9瓶",
              "value": 9,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 9,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 9,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 9,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 9,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 9,
              "color": "#3B82F6"
            }
          ],
          "total": 54
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少瓶（总数）",
              "每份有多少瓶",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少瓶（总数）",
            "explain": "题目说「超市一天卖了6箱矿泉水，每箱9瓶。」，问的是「一共卖了多少瓶？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份9个，共6份",
              "总数54，每份9个",
              "总数54，共6份",
              "只有总数"
            ],
            "answer": "每份9个，共6份",
            "explain": "每份是9瓶，有6份，这是两个关键数"
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
            "explain": "求6个9合起来是多少，用乘法：9×6=54"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有6条等长的条形，每条代表9个瓶，合起来就是总数54",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求6个9相加的和：9×6=54",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-09",
        "scene": "停车场每排停5辆车，有8排。",
        "question": "一共有多少辆车？",
        "formula": "5×8=?",
        "answer": 40,
        "choices": [
          40,
          42,
          43,
          41
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每排停5辆车",
              "value": 5,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 5,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 5,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 5,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 5,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 5,
              "color": "#3B82F6"
            },
            {
              "label": "",
              "value": 5,
              "color": "#10B981"
            },
            {
              "label": "",
              "value": 5,
              "color": "#F59E0B"
            }
          ],
          "total": 40
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少辆（总数）",
              "每份有多少辆",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少辆（总数）",
            "explain": "题目说「停车场每排停5辆车，有8排。」，问的是「一共有多少辆车？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份5个，共8份",
              "总数40，每份5个",
              "总数40，共8份",
              "只有总数"
            ],
            "answer": "每份5个，共8份",
            "explain": "每份是5辆，有8份，这是两个关键数"
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
            "explain": "求8个5合起来是多少，用乘法：5×8=40"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有8条等长的条形，每条代表5个辆，合起来就是总数40",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求8个5相加的和：5×8=40",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-10",
        "scene": "老师买了3束花，每束9朵。",
        "question": "一共有多少朵花？",
        "formula": "3×9=?",
        "answer": 27,
        "choices": [
          28,
          29,
          30,
          27
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每束9朵",
              "value": 9,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 9,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 9,
              "color": "#FB923C"
            }
          ],
          "total": 27
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少朵（总数）",
              "每份有多少朵",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少朵（总数）",
            "explain": "题目说「老师买了3束花，每束9朵。」，问的是「一共有多少朵花？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份9个，共3份",
              "总数27，每份9个",
              "总数27，共3份",
              "只有总数"
            ],
            "answer": "每份9个，共3份",
            "explain": "每份是9朵，有3份，这是两个关键数"
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
            "explain": "求3个9合起来是多少，用乘法：9×3=27"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表9个朵，合起来就是总数27",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求3个9相加的和：9×3=27",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-11",
        "scene": "小明有6盒弹珠，每盒7颗。",
        "question": "一共有多少颗弹珠？",
        "formula": "6×7=?",
        "answer": 42,
        "choices": [
          44,
          45,
          42,
          43
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每盒7颗",
              "value": 7,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 7,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 7,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 7,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 7,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 7,
              "color": "#3B82F6"
            }
          ],
          "total": 42
        },
        "knowledge": "表内乘法",
        "difficulty": 2,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少颗（总数）",
              "每份有多少颗",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少颗（总数）",
            "explain": "题目说「小明有6盒弹珠，每盒7颗。」，问的是「一共有多少颗弹珠？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份7个，共6份",
              "总数42，每份7个",
              "总数42，共6份",
              "只有总数"
            ],
            "answer": "每份7个，共6份",
            "explain": "每份是7颗，有6份，这是两个关键数"
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
            "explain": "求6个7合起来是多少，用乘法：7×6=42"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有6条等长的条形，每条代表7个颗，合起来就是总数42",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求6个7相加的和：7×6=42",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-12",
        "scene": "手工课上每人做4只纸船，5人共做？",
        "question": "一共做了多少只纸船？",
        "formula": "5×4=?",
        "answer": 20,
        "choices": [
          22,
          21,
          23,
          20
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每人做4只纸船",
              "value": 4,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 4,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 4,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 4,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 4,
              "color": "#8B5CF6"
            }
          ],
          "total": 20
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少只（总数）",
              "每份有多少只",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少只（总数）",
            "explain": "题目说「手工课上每人做4只纸船，5人共做」，问的是「一共做了多少只纸船？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份4个，共5份",
              "总数20，每份4个",
              "总数20，共5份",
              "只有总数"
            ],
            "answer": "每份4个，共5份",
            "explain": "每份是4只，有5份，这是两个关键数"
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
            "explain": "求5个4合起来是多少，用乘法：4×5=20"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有5条等长的条形，每条代表4个只，合起来就是总数20",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求5个4相加的和：4×5=20",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-13",
        "scene": "小明每天跑4圈，一周7天共跑？",
        "question": "一周跑了多少圈？",
        "formula": "4×7=?",
        "answer": 28,
        "choices": [
          30,
          28,
          31,
          29
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每天跑4圈",
              "value": 4,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 4,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 4,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 4,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 4,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 4,
              "color": "#3B82F6"
            },
            {
              "label": "",
              "value": 4,
              "color": "#10B981"
            }
          ],
          "total": 28
        },
        "knowledge": "表内乘法",
        "difficulty": 2,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少圈（总数）",
              "每份有多少圈",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少圈（总数）",
            "explain": "题目说「小明每天跑4圈，一周7天共跑」，问的是「一周跑了多少圈？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份4个，共7份",
              "总数28，每份4个",
              "总数28，共7份",
              "只有总数"
            ],
            "answer": "每份4个，共7份",
            "explain": "每份是4圈，有7份，这是两个关键数"
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
            "explain": "求7个4合起来是多少，用乘法：4×7=28"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有7条等长的条形，每条代表4个圈，合起来就是总数28",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求7个4相加的和：4×7=28",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-14",
        "scene": "每盒巧克力6块，买8盒共几块？",
        "question": "一共多少块巧克力？",
        "formula": "6×8=?",
        "answer": 48,
        "choices": [
          49,
          50,
          48,
          51
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每盒巧克力6块",
              "value": 6,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 6,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 6,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 6,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 6,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 6,
              "color": "#3B82F6"
            },
            {
              "label": "",
              "value": 6,
              "color": "#10B981"
            },
            {
              "label": "",
              "value": 6,
              "color": "#F59E0B"
            }
          ],
          "total": 48
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少个（总数）",
              "每份有多少个",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少个（总数）",
            "explain": "题目说「每盒巧克力6块，买8盒共几块」，问的是「一共多少块巧克力？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份6个，共8份",
              "总数48，每份6个",
              "总数48，共8份",
              "只有总数"
            ],
            "answer": "每份6个，共8份",
            "explain": "每份是6个，有8份，这是两个关键数"
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
            "explain": "求8个6合起来是多少，用乘法：6×8=48"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有8条等长的条形，每条代表6个个，合起来就是总数48",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求8个6相加的和：6×8=48",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-15",
        "scene": "花坛有3行菊花，每行9盆。",
        "question": "一共有多少盆菊花？",
        "formula": "3×9=?",
        "answer": 27,
        "choices": [
          28,
          27,
          30,
          29
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每行9盆",
              "value": 9,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 9,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 9,
              "color": "#FB923C"
            }
          ],
          "total": 27
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少盆（总数）",
              "每份有多少盆",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少盆（总数）",
            "explain": "题目说「花坛有3行菊花，每行9盆。」，问的是「一共有多少盆菊花？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份9个，共3份",
              "总数27，每份9个",
              "总数27，共3份",
              "只有总数"
            ],
            "answer": "每份9个，共3份",
            "explain": "每份是9盆，有3份，这是两个关键数"
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
            "explain": "求3个9合起来是多少，用乘法：9×3=27"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表9个盆，合起来就是总数27",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求3个9相加的和：9×3=27",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-16",
        "scene": "小红的邮票每张3元，买9张共几元？",
        "question": "一共多少元？",
        "formula": "3×9=?",
        "answer": 27,
        "choices": [
          27,
          28,
          29,
          30
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每张3元",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 3,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 3,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 3,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 3,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 3,
              "color": "#3B82F6"
            },
            {
              "label": "",
              "value": 3,
              "color": "#10B981"
            },
            {
              "label": "",
              "value": 3,
              "color": "#F59E0B"
            },
            {
              "label": "",
              "value": 3,
              "color": "#EF4444"
            }
          ],
          "total": 27
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少元（总数）",
              "每份有多少元",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少元（总数）",
            "explain": "题目说「小红的邮票每张3元，买9张共几元」，问的是「一共多少元？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份3个，共9份",
              "总数27，每份3个",
              "总数27，共9份",
              "只有总数"
            ],
            "answer": "每份3个，共9份",
            "explain": "每份是3元，有9份，这是两个关键数"
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
            "explain": "求9个3合起来是多少，用乘法：3×9=27"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有9条等长的条形，每条代表3个元，合起来就是总数27",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求9个3相加的和：3×9=27",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-17",
        "scene": "每条船坐4人，7条船共坐几人？",
        "question": "一共可以坐多少人？",
        "formula": "4×7=?",
        "answer": 28,
        "choices": [
          31,
          30,
          28,
          29
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每条船坐4人",
              "value": 4,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 4,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 4,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 4,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 4,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 4,
              "color": "#3B82F6"
            },
            {
              "label": "",
              "value": 4,
              "color": "#10B981"
            }
          ],
          "total": 28
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少个（总数）",
              "每份有多少个",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少个（总数）",
            "explain": "题目说「每条船坐4人，7条船共坐几人」，问的是「一共可以坐多少人？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份4个，共7份",
              "总数28，每份4个",
              "总数28，共7份",
              "只有总数"
            ],
            "answer": "每份4个，共7份",
            "explain": "每份是4个，有7份，这是两个关键数"
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
            "explain": "求7个4合起来是多少，用乘法：4×7=28"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有7条等长的条形，每条代表4个个，合起来就是总数28",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求7个4相加的和：4×7=28",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-18",
        "scene": "每本书8元，买5本共几元？",
        "question": "一共多少元？",
        "formula": "8×5=?",
        "answer": 40,
        "choices": [
          43,
          42,
          40,
          41
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每本书8元",
              "value": 8,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 8,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 8,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 8,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 8,
              "color": "#8B5CF6"
            }
          ],
          "total": 40
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少元（总数）",
              "每份有多少元",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少元（总数）",
            "explain": "题目说「每本书8元，买5本共几元」，问的是「一共多少元？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份8个，共5份",
              "总数40，每份8个",
              "总数40，共5份",
              "只有总数"
            ],
            "answer": "每份8个，共5份",
            "explain": "每份是8元，有5份，这是两个关键数"
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
            "explain": "求5个8合起来是多少，用乘法：8×5=40"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有5条等长的条形，每条代表8个元，合起来就是总数40",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求5个8相加的和：8×5=40",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-19",
        "scene": "小明每天写6个大字，5天共写几个？",
        "question": "一共写了几个大字？",
        "formula": "6×5=?",
        "answer": 30,
        "choices": [
          31,
          30,
          32,
          33
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每天写6个大字",
              "value": 6,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 6,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 6,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 6,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 6,
              "color": "#8B5CF6"
            }
          ],
          "total": 30
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少个（总数）",
              "每份有多少个",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少个（总数）",
            "explain": "题目说「小明每天写6个大字，5天共写几个」，问的是「一共写了几个大字？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份6个，共5份",
              "总数30，每份6个",
              "总数30，共5份",
              "只有总数"
            ],
            "answer": "每份6个，共5份",
            "explain": "每份是6个，有5份，这是两个关键数"
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
            "explain": "求5个6合起来是多少，用乘法：6×5=30"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有5条等长的条形，每条代表6个个，合起来就是总数30",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求5个6相加的和：6×5=30",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-20",
        "scene": "学校买来7包气球，每包9个。",
        "question": "一共有多少个气球？",
        "formula": "7×9=?",
        "answer": 63,
        "choices": [
          66,
          65,
          63,
          64
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每包9个",
              "value": 9,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 9,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 9,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 9,
              "color": "#E8A0BF"
            },
            {
              "label": "",
              "value": 9,
              "color": "#8B5CF6"
            },
            {
              "label": "",
              "value": 9,
              "color": "#3B82F6"
            },
            {
              "label": "",
              "value": 9,
              "color": "#10B981"
            }
          ],
          "total": 63
        },
        "knowledge": "表内乘法",
        "difficulty": 1,
        "hint": "想对应的乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少个（总数）",
              "每份有多少个",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少个（总数）",
            "explain": "题目说「学校买来7包气球，每包9个。」，问的是「一共有多少个气球？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份9个，共7份",
              "总数63，每份9个",
              "总数63，共7份",
              "只有总数"
            ],
            "answer": "每份9个，共7份",
            "explain": "每份是9个，有7份，这是两个关键数"
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
            "explain": "求7个9合起来是多少，用乘法：9×7=63"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有7条等长的条形，每条代表9个个，合起来就是总数63",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求7个9相加的和：9×7=63",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-21",
        "scene": "妈妈买了18颗糖，平均分给3个小朋友。",
        "question": "每个小朋友几颗？",
        "formula": "18÷3=?",
        "answer": 6,
        "choices": [
          9,
          7,
          8,
          6
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 18,
          "parts": [
            {
              "value": 6,
              "label": "小朋友1",
              "color": "#00A896"
            },
            {
              "value": 6,
              "label": "小朋友2",
              "color": "#F5B800"
            },
            {
              "value": 6,
              "label": "小朋友3",
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "表内除法",
        "difficulty": 1,
        "hint": "想乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「妈妈买了18颗糖，平均分给3个小朋友。」，问的是「每个小朋友几颗？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数18，分给3小朋友",
              "每份6个，总数18",
              "每份6个，3份",
              "只有总数"
            ],
            "answer": "总数18，分给3小朋友",
            "explain": "总数是18，要平均分给3小朋友，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把18平均分成3份，用除法：18÷3=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数18在上方，下面分成3份，每份6",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：18÷3=6，每份6个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-22",
        "scene": "教室里24个同学，每6人一组。",
        "question": "可以分几组？",
        "formula": "24÷6=?",
        "answer": 4,
        "choices": [
          7,
          6,
          4,
          5
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 24,
          "parts": [
            {
              "value": 4,
              "label": "每6人一组",
              "color": "#00A896"
            },
            {
              "value": 4,
              "label": "同学2",
              "color": "#F5B800"
            },
            {
              "value": 4,
              "label": "同学3",
              "color": "#FB923C"
            },
            {
              "value": 4,
              "label": "同学4",
              "color": "#E8A0BF"
            },
            {
              "value": 4,
              "label": "",
              "color": "#8B5CF6"
            },
            {
              "value": 4,
              "label": "",
              "color": "#3B82F6"
            }
          ]
        },
        "knowledge": "表内除法",
        "difficulty": 1,
        "hint": "想乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「教室里24个同学，每6人一组。」，问的是「可以分几组？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数24，分给6同学",
              "每份4个，总数24",
              "每份4个，6份",
              "只有总数"
            ],
            "answer": "总数24，分给6同学",
            "explain": "总数是24，要平均分给6同学，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把24平均分成6份，用除法：24÷6=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数24在上方，下面分成6份，每份4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：24÷6=4，每份4个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-23",
        "scene": "老师买了35颗糖，平均分给5人。",
        "question": "每人几颗？",
        "formula": "35÷5=?",
        "answer": 7,
        "choices": [
          8,
          9,
          7,
          10
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 35,
          "parts": [
            {
              "value": 7,
              "label": "人1",
              "color": "#00A896"
            },
            {
              "value": 7,
              "label": "人2",
              "color": "#F5B800"
            },
            {
              "value": 7,
              "label": "人3",
              "color": "#FB923C"
            },
            {
              "value": 7,
              "label": "人4",
              "color": "#E8A0BF"
            },
            {
              "value": 7,
              "label": "",
              "color": "#8B5CF6"
            }
          ]
        },
        "knowledge": "表内除法",
        "difficulty": 1,
        "hint": "想乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「老师买了35颗糖，平均分给5人。」，问的是「每人几颗？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数35，分给5人",
              "每份7个，总数35",
              "每份7个，5份",
              "只有总数"
            ],
            "answer": "总数35，分给5人",
            "explain": "总数是35，要平均分给5人，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把35平均分成5份，用除法：35÷5=7"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数35在上方，下面分成5份，每份7",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：35÷5=7，每份7个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-24",
        "scene": "16只小鸟，每4只一组。",
        "question": "可以分几组？",
        "formula": "16÷4=?",
        "answer": 4,
        "choices": [
          4,
          7,
          6,
          5
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 16,
          "parts": [
            {
              "value": 4,
              "label": "每4只一组",
              "color": "#00A896"
            },
            {
              "value": 4,
              "label": "组2",
              "color": "#F5B800"
            },
            {
              "value": 4,
              "label": "组3",
              "color": "#FB923C"
            },
            {
              "value": 4,
              "label": "组4",
              "color": "#E8A0BF"
            }
          ]
        },
        "knowledge": "表内除法",
        "difficulty": 1,
        "hint": "想乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「16只小鸟，每4只一组。」，问的是「可以分几组？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数16，分给4组",
              "每份4个，总数16",
              "每份4个，4份",
              "只有总数"
            ],
            "answer": "总数16，分给4组",
            "explain": "总数是16，要平均分给4组，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把16平均分成4份，用除法：16÷4=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数16在上方，下面分成4份，每份4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：16÷4=4，每份4个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-25",
        "scene": "妈妈买了27个苹果，平均分给9人。",
        "question": "每人几个？",
        "formula": "27÷9=?",
        "answer": 3,
        "choices": [
          4,
          3,
          6,
          5
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 27,
          "parts": [
            {
              "value": 3,
              "label": "人1",
              "color": "#00A896"
            },
            {
              "value": 3,
              "label": "人2",
              "color": "#F5B800"
            },
            {
              "value": 3,
              "label": "人3",
              "color": "#FB923C"
            },
            {
              "value": 3,
              "label": "人4",
              "color": "#E8A0BF"
            },
            {
              "value": 3,
              "label": "",
              "color": "#8B5CF6"
            },
            {
              "value": 3,
              "label": "",
              "color": "#3B82F6"
            },
            {
              "value": 3,
              "label": "",
              "color": "#10B981"
            },
            {
              "value": 3,
              "label": "",
              "color": "#F59E0B"
            },
            {
              "value": 3,
              "label": "",
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "表内除法",
        "difficulty": 1,
        "hint": "想乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「妈妈买了27个苹果，平均分给9人。」，问的是「每人几个？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数27，分给9人",
              "每份3个，总数27",
              "每份3个，9份",
              "只有总数"
            ],
            "answer": "总数27，分给9人",
            "explain": "总数是27，要平均分给9人，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把27平均分成9份，用除法：27÷9=3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数27在上方，下面分成9份，每份3",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：27÷9=3，每份3个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-26",
        "scene": "30颗糖平均分给6个小朋友。",
        "question": "每人几颗？",
        "formula": "30÷6=?",
        "answer": 5,
        "choices": [
          8,
          7,
          5,
          6
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 30,
          "parts": [
            {
              "value": 5,
              "label": "小朋友1",
              "color": "#00A896"
            },
            {
              "value": 5,
              "label": "小朋友2",
              "color": "#F5B800"
            },
            {
              "value": 5,
              "label": "小朋友3",
              "color": "#FB923C"
            },
            {
              "value": 5,
              "label": "小朋友4",
              "color": "#E8A0BF"
            },
            {
              "value": 5,
              "label": "",
              "color": "#8B5CF6"
            },
            {
              "value": 5,
              "label": "",
              "color": "#3B82F6"
            }
          ]
        },
        "knowledge": "表内除法",
        "difficulty": 1,
        "hint": "想乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「30颗糖平均分给6个小朋友。」，问的是「每人几颗？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数30，分给6小朋友",
              "每份5个，总数30",
              "每份5个，6份",
              "只有总数"
            ],
            "answer": "总数30，分给6小朋友",
            "explain": "总数是30，要平均分给6小朋友，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把30平均分成6份，用除法：30÷6=5"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数30在上方，下面分成6份，每份5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：30÷6=5，每份5个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-27",
        "scene": "28个橘子，每4个装一盘。",
        "question": "可以装几盘？",
        "formula": "28÷4=?",
        "answer": 7,
        "choices": [
          7,
          10,
          9,
          8
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 28,
          "parts": [
            {
              "value": 7,
              "label": "每4个装一盘",
              "color": "#00A896"
            },
            {
              "value": 7,
              "label": "盘2",
              "color": "#F5B800"
            },
            {
              "value": 7,
              "label": "盘3",
              "color": "#FB923C"
            },
            {
              "value": 7,
              "label": "盘4",
              "color": "#E8A0BF"
            }
          ]
        },
        "knowledge": "表内除法",
        "difficulty": 1,
        "hint": "想乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「28个橘子，每4个装一盘。」，问的是「可以装几盘？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数28，分给4盘",
              "每份7个，总数28",
              "每份7个，4份",
              "只有总数"
            ],
            "answer": "总数28，分给4盘",
            "explain": "总数是28，要平均分给4盘，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把28平均分成4份，用除法：28÷4=7"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数28在上方，下面分成4份，每份7",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：28÷4=7，每份7个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-28",
        "scene": "45支铅笔，平均分给5个同学。",
        "question": "每人几支？",
        "formula": "45÷5=?",
        "answer": 9,
        "choices": [
          12,
          11,
          9,
          10
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 45,
          "parts": [
            {
              "value": 9,
              "label": "同学1",
              "color": "#00A896"
            },
            {
              "value": 9,
              "label": "同学2",
              "color": "#F5B800"
            },
            {
              "value": 9,
              "label": "同学3",
              "color": "#FB923C"
            },
            {
              "value": 9,
              "label": "同学4",
              "color": "#E8A0BF"
            },
            {
              "value": 9,
              "label": "",
              "color": "#8B5CF6"
            }
          ]
        },
        "knowledge": "表内除法",
        "difficulty": 1,
        "hint": "想乘法口诀",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「45支铅笔，平均分给5个同学。」，问的是「每人几支？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数45，分给5同学",
              "每份9个，总数45",
              "每份9个，5份",
              "只有总数"
            ],
            "answer": "总数45，分给5同学",
            "explain": "总数是45，要平均分给5同学，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把45平均分成5份，用除法：45÷5=9"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数45在上方，下面分成5份，每份9",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：45÷5=9，每份9个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-29",
        "scene": "学校图书馆有3500本故事书，借出去800本还剩几本？",
        "question": "还剩多少本？",
        "formula": "3500-800=?",
        "answer": 2700,
        "choices": [
          2703,
          2700,
          2701,
          2702
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "原来有3500个",
              "value": 3500,
              "color": "#00A896"
            },
            {
              "label": "减去800个",
              "value": 800,
              "color": "#FB923C"
            },
            {
              "label": "还剩2700个",
              "value": 2700,
              "color": "#F5B800"
            }
          ],
          "total": 3500
        },
        "knowledge": "万以内加减法",
        "difficulty": 2,
        "hint": "注意退位",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求剩下的（差）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求剩下的（差）",
            "explain": "题目说「学校图书馆有3500本故事书，借出去800本还剩几本」，问的是「还剩多少本？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "3500和800",
              "总数2700和3500",
              "总数2700和800",
              "只有一个数"
            ],
            "answer": "3500和800",
            "explain": "关键数是3500和800，需要求差"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "减法",
              "乘法",
              "除法",
              "加法"
            ],
            "answer": "减法",
            "explain": "求相差多少，用减法：3500-800=2700"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，从整体中减去一部分等于剩余",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "3500-800=2700，从整体中去掉一部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "减法的关键：整体-部分=另一部分",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-30",
        "scene": "小明家有2800棵树苗，又买来1500棵，一共有多少棵？",
        "question": "一共有多少棵？",
        "formula": "2800+1500=?",
        "answer": 4300,
        "choices": [
          4303,
          4300,
          4301,
          4302
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分2800",
              "value": 2800,
              "color": "#00A896"
            },
            {
              "label": "第二部分1500",
              "value": 1500,
              "color": "#F5B800"
            },
            {
              "label": "合计4300",
              "value": 4300,
              "color": "#E8A0BF"
            }
          ],
          "total": 4300
        },
        "knowledge": "万以内加减法",
        "difficulty": 2,
        "hint": "注意进位",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求总数（合起来）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求总数（合起来）",
            "explain": "题目说「小明家有2800棵树苗，又买来1500棵，一共有多少棵」，问的是「一共有多少棵？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "2800和1500",
              "总数4300和2800",
              "总数4300和1500",
              "只有一个数"
            ],
            "answer": "2800和1500",
            "explain": "关键数是2800和1500，需要合并"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "加法",
              "乘法",
              "除法",
              "减法"
            ],
            "answer": "加法",
            "explain": "求合起来一共，用加法：2800+1500=4300"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，两部分合起来等于总数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "2800+1500=4300，合并两部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加法的关键：部分+部分=整体",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-31",
        "scene": "一部手机2100元，比一台电脑便宜800元。电脑多少元？",
        "question": "电脑多少元？",
        "formula": "2100+800=?",
        "answer": 2900,
        "choices": [
          2903,
          2902,
          2901,
          2900
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分2100",
              "value": 2100,
              "color": "#00A896"
            },
            {
              "label": "第二部分800",
              "value": 800,
              "color": "#F5B800"
            },
            {
              "label": "合计2900",
              "value": 2900,
              "color": "#E8A0BF"
            }
          ],
          "total": 2900
        },
        "knowledge": "万以内加减法",
        "difficulty": 2,
        "hint": "注意进位",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求总数（合起来）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求总数（合起来）",
            "explain": "题目说「一部手机2100元，比一台电脑便宜800元。电脑多少元」，问的是「电脑多少元？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "2100和800",
              "总数2900和2100",
              "总数2900和800",
              "只有一个数"
            ],
            "answer": "2100和800",
            "explain": "关键数是2100和800，需要合并"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "加法",
              "乘法",
              "除法",
              "减法"
            ],
            "answer": "加法",
            "explain": "求合起来一共，用加法：2100+800=2900"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，两部分合起来等于总数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "2100+800=2900，合并两部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加法的关键：部分+部分=整体",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-32",
        "scene": "一本书有500页，小明看了280页，还剩多少页？",
        "question": "还剩多少页？",
        "formula": "500-280=?",
        "answer": 220,
        "choices": [
          222,
          221,
          223,
          220
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "原来有500个",
              "value": 500,
              "color": "#00A896"
            },
            {
              "label": "减去280个",
              "value": 280,
              "color": "#FB923C"
            },
            {
              "label": "还剩220个",
              "value": 220,
              "color": "#F5B800"
            }
          ],
          "total": 500
        },
        "knowledge": "万以内加减法",
        "difficulty": 2,
        "hint": "注意退位",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求剩下的（差）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求剩下的（差）",
            "explain": "题目说「一本书有500页，小明看了280页，还剩多少页」，问的是「还剩多少页？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "500和280",
              "总数220和500",
              "总数220和280",
              "只有一个数"
            ],
            "answer": "500和280",
            "explain": "关键数是500和280，需要求差"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "减法",
              "乘法",
              "除法",
              "加法"
            ],
            "answer": "减法",
            "explain": "求相差多少，用减法：500-280=220"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，从整体中减去一部分等于剩余",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "500-280=220，从整体中去掉一部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "减法的关键：整体-部分=另一部分",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-33",
        "scene": "三年级有450人，四年级比三年级多120人。",
        "question": "四年级有多少人？",
        "formula": "450+120=?",
        "answer": 570,
        "choices": [
          571,
          572,
          570,
          573
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分450",
              "value": 450,
              "color": "#00A896"
            },
            {
              "label": "第二部分120",
              "value": 120,
              "color": "#F5B800"
            },
            {
              "label": "合计570",
              "value": 570,
              "color": "#E8A0BF"
            }
          ],
          "total": 570
        },
        "knowledge": "万以内加减法",
        "difficulty": 2,
        "hint": "注意进位",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求总数（合起来）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求总数（合起来）",
            "explain": "题目说「三年级有450人，四年级比三年级多120人。」，问的是「四年级有多少人？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "450和120",
              "总数570和450",
              "总数570和120",
              "只有一个数"
            ],
            "answer": "450和120",
            "explain": "关键数是450和120，需要合并"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "加法",
              "乘法",
              "除法",
              "减法"
            ],
            "answer": "加法",
            "explain": "求合起来一共，用加法：450+120=570"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，两部分合起来等于总数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "450+120=570，合并两部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加法的关键：部分+部分=整体",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-34",
        "scene": "一条裤子180元，一件上衣比裤子贵260元。",
        "question": "一件上衣多少元？",
        "formula": "180+260=?",
        "answer": 440,
        "choices": [
          442,
          440,
          443,
          441
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分180",
              "value": 180,
              "color": "#00A896"
            },
            {
              "label": "第二部分260",
              "value": 260,
              "color": "#F5B800"
            },
            {
              "label": "合计440",
              "value": 440,
              "color": "#E8A0BF"
            }
          ],
          "total": 440
        },
        "knowledge": "万以内加减法",
        "difficulty": 2,
        "hint": "注意进位",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求总数（合起来）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求总数（合起来）",
            "explain": "题目说「一条裤子180元，一件上衣比裤子贵260元。」，问的是「一件上衣多少元？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "180和260",
              "总数440和180",
              "总数440和260",
              "只有一个数"
            ],
            "answer": "180和260",
            "explain": "关键数是180和260，需要合并"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "加法",
              "乘法",
              "除法",
              "减法"
            ],
            "answer": "加法",
            "explain": "求合起来一共，用加法：180+260=440"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，两部分合起来等于总数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "180+260=440，合并两部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加法的关键：部分+部分=整体",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-35",
        "scene": "公园里有1600盆牡丹，3200盆菊花。两种花一共多少盆？",
        "question": "一共多少盆？",
        "formula": "1600+3200=?",
        "answer": 4800,
        "choices": [
          4803,
          4800,
          4802,
          4801
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分1600",
              "value": 1600,
              "color": "#00A896"
            },
            {
              "label": "第二部分3200",
              "value": 3200,
              "color": "#F5B800"
            },
            {
              "label": "合计4800",
              "value": 4800,
              "color": "#E8A0BF"
            }
          ],
          "total": 4800
        },
        "knowledge": "万以内加减法",
        "difficulty": 2,
        "hint": "注意进位",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求总数（合起来）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求总数（合起来）",
            "explain": "题目说「公园里有1600盆牡丹，3200盆菊花。两种花一共多少盆」，问的是「一共多少盆？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "1600和3200",
              "总数4800和1600",
              "总数4800和3200",
              "只有一个数"
            ],
            "answer": "1600和3200",
            "explain": "关键数是1600和3200，需要合并"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "加法",
              "乘法",
              "除法",
              "减法"
            ],
            "answer": "加法",
            "explain": "求合起来一共，用加法：1600+3200=4800"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，两部分合起来等于总数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1600+3200=4800，合并两部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加法的关键：部分+部分=整体",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-36",
        "scene": "一袋大米50千克，吃了180千克。原来有多少千克？",
        "question": "原来有多少千克？",
        "formula": "180+50=?",
        "answer": 230,
        "choices": [
          233,
          231,
          232,
          230
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一部分180",
              "value": 180,
              "color": "#00A896"
            },
            {
              "label": "第二部分50",
              "value": 50,
              "color": "#F5B800"
            },
            {
              "label": "合计230",
              "value": 230,
              "color": "#E8A0BF"
            }
          ],
          "total": 230
        },
        "knowledge": "万以内加减法",
        "difficulty": 2,
        "hint": "注意进位",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求总数（合起来）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求总数（合起来）",
            "explain": "题目说「一袋大米50千克，吃了180千克。原来有多少千克」，问的是「原来有多少千克？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "180和50",
              "总数230和180",
              "总数230和50",
              "只有一个数"
            ],
            "answer": "180和50",
            "explain": "关键数是180和50，需要合并"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "加法",
              "乘法",
              "除法",
              "减法"
            ],
            "answer": "加法",
            "explain": "求合起来一共，用加法：180+50=230"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，两部分合起来等于总数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "180+50=230，合并两部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加法的关键：部分+部分=整体",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-37",
        "scene": "一袋盐重500克，两袋盐共重多少克？",
        "question": "两袋盐共重多少克？",
        "formula": "500+500=?",
        "answer": 1000,
        "choices": [
          1003,
          1001,
          1000,
          1002
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "第一袋500克",
              "value": 500,
              "color": "#00A896"
            },
            {
              "label": "第二袋500克",
              "value": 500,
              "color": "#F5B800"
            },
            {
              "label": "合计1000克",
              "value": 1000,
              "color": "#FB923C"
            }
          ],
          "total": 2000
        },
        "knowledge": "克和千克",
        "difficulty": 1,
        "hint": "注意单位换算：1千克=1000克",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题和什么有关？",
            "choices": [
              "重量（克和千克）",
              "长度",
              "时间",
              "钱数"
            ],
            "answer": "重量（克和千克）",
            "explain": "题目涉及重量单位：克（g）和千克（kg）"
          },
          {
            "q": "🔢 关键数是什么？注意单位统一了吗？",
            "choices": [
              "需要换算单位再计算",
              "直接计算不用换算",
              "只有重量没有数字",
              "不需要数字"
            ],
            "answer": "需要换算单位再计算",
            "explain": "1千克=1000克，先把单位统一再计算"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "先换算再加减",
              "直接乘除",
              "先加减再换算",
              "不需要计算"
            ],
            "answer": "先换算再加减",
            "explain": "先把千克换算成克（或相反），再进行加减运算"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示了重量关系，注意单位统一",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1千克=1000克，先把单位统一再+",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "重量计算的关键：先统一单位，再按加减法计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-38",
        "scene": "妈妈买了2千克苹果，吃了800克。还剩多少克？",
        "question": "还剩多少克？",
        "formula": "2000-800=?",
        "answer": 1200,
        "choices": [
          1200,
          1201,
          1203,
          1202
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "买来2千克(2000克)",
              "value": 2000,
              "color": "#00A896"
            },
            {
              "label": "吃了800克",
              "value": 800,
              "color": "#F5B800"
            },
            {
              "label": "还剩1200克",
              "value": 1200,
              "color": "#FB923C"
            }
          ],
          "total": 4000
        },
        "knowledge": "克和千克",
        "difficulty": 2,
        "hint": "注意单位换算：1千克=1000克",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题和什么有关？",
            "choices": [
              "重量（克和千克）",
              "长度",
              "时间",
              "钱数"
            ],
            "answer": "重量（克和千克）",
            "explain": "题目涉及重量单位：克（g）和千克（kg）"
          },
          {
            "q": "🔢 关键数是什么？注意单位统一了吗？",
            "choices": [
              "需要换算单位再计算",
              "直接计算不用换算",
              "只有重量没有数字",
              "不需要数字"
            ],
            "answer": "需要换算单位再计算",
            "explain": "1千克=1000克，先把单位统一再计算"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "先换算再加减",
              "直接乘除",
              "先加减再换算",
              "不需要计算"
            ],
            "answer": "先换算再加减",
            "explain": "先把千克换算成克（或相反），再进行加减运算"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示了重量关系，注意单位统一",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1千克=1000克，先把单位统一再-",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "重量计算的关键：先统一单位，再按加减法计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-39",
        "scene": "一袋面粉重3千克，一袋米比它重2千克。",
        "question": "一袋米重多少千克？",
        "formula": "3+2=?",
        "answer": 5,
        "choices": [
          5,
          7,
          8,
          6
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "面粉3千克",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "米比面粉重2千克",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "米重5千克",
              "value": 5,
              "color": "#FB923C"
            }
          ],
          "total": 10
        },
        "knowledge": "克和千克",
        "difficulty": 1,
        "hint": "注意单位换算：1千克=1000克",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题和什么有关？",
            "choices": [
              "重量（克和千克）",
              "长度",
              "时间",
              "钱数"
            ],
            "answer": "重量（克和千克）",
            "explain": "题目涉及重量单位：克（g）和千克（kg）"
          },
          {
            "q": "🔢 关键数是什么？注意单位统一了吗？",
            "choices": [
              "需要换算单位再计算",
              "直接计算不用换算",
              "只有重量没有数字",
              "不需要数字"
            ],
            "answer": "需要换算单位再计算",
            "explain": "1千克=1000克，先把单位统一再计算"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "先换算再加减",
              "直接乘除",
              "先加减再换算",
              "不需要计算"
            ],
            "answer": "先换算再加减",
            "explain": "先把千克换算成克（或相反），再进行加减运算"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示了重量关系，注意单位统一",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1千克=1000克，先把单位统一再+",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "重量计算的关键：先统一单位，再按加减法计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-40",
        "scene": "小明体重28千克，爸爸比小明重45千克。",
        "question": "爸爸体重多少千克？",
        "formula": "28+45=?",
        "answer": 73,
        "choices": [
          74,
          76,
          73,
          75
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "小明28千克",
              "value": 28,
              "color": "#00A896"
            },
            {
              "label": "爸爸比小明重45千克",
              "value": 45,
              "color": "#F5B800"
            },
            {
              "label": "爸爸73千克",
              "value": 73,
              "color": "#FB923C"
            }
          ],
          "total": 146
        },
        "knowledge": "克和千克",
        "difficulty": 2,
        "hint": "注意单位换算",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题和什么有关？",
            "choices": [
              "重量（克和千克）",
              "长度",
              "时间",
              "钱数"
            ],
            "answer": "重量（克和千克）",
            "explain": "题目涉及重量单位：克（g）和千克（kg）"
          },
          {
            "q": "🔢 关键数是什么？注意单位统一了吗？",
            "choices": [
              "需要换算单位再计算",
              "直接计算不用换算",
              "只有重量没有数字",
              "不需要数字"
            ],
            "answer": "需要换算单位再计算",
            "explain": "1千克=1000克，先把单位统一再计算"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "先换算再加减",
              "直接乘除",
              "先加减再换算",
              "不需要计算"
            ],
            "answer": "先换算再加减",
            "explain": "先把千克换算成克（或相反），再进行加减运算"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示了重量关系，注意单位统一",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1千克=1000克，先把单位统一再+",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "重量计算的关键：先统一单位，再按加减法计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-41",
        "scene": "一筐苹果重5千克，吃掉2千克后还剩几千克？",
        "question": "还剩几千克？",
        "formula": "5-2=?",
        "answer": 3,
        "choices": [
          6,
          3,
          4,
          5
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "苹果5千克",
              "value": 5,
              "color": "#00A896"
            },
            {
              "label": "吃掉2千克",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "还剩3千克",
              "value": 3,
              "color": "#FB923C"
            }
          ],
          "total": 10
        },
        "knowledge": "克和千克",
        "difficulty": 1,
        "hint": "注意单位换算",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题和什么有关？",
            "choices": [
              "重量（克和千克）",
              "长度",
              "时间",
              "钱数"
            ],
            "answer": "重量（克和千克）",
            "explain": "题目涉及重量单位：克（g）和千克（kg）"
          },
          {
            "q": "🔢 关键数是什么？注意单位统一了吗？",
            "choices": [
              "需要换算单位再计算",
              "直接计算不用换算",
              "只有重量没有数字",
              "不需要数字"
            ],
            "answer": "需要换算单位再计算",
            "explain": "1千克=1000克，先把单位统一再计算"
          },
          {
            "q": "🧩 用什么方法？",
            "choices": [
              "先换算再加减",
              "直接乘除",
              "先加减再换算",
              "不需要计算"
            ],
            "answer": "先换算再加减",
            "explain": "先把千克换算成克（或相反），再进行加减运算"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示了重量关系，注意单位统一",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1千克=1000克，先把单位统一再-",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "重量计算的关键：先统一单位，再按加减法计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-42",
        "scene": "一袋糖重200克，几袋这样的糖重1千克？",
        "question": "需要几袋？",
        "formula": "1000÷200=?",
        "answer": 5,
        "choices": [
          8,
          6,
          7,
          5
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "1袋200克",
              "value": 200,
              "color": "#00A896"
            },
            {
              "label": "1袋200克",
              "value": 200,
              "color": "#F5B800"
            },
            {
              "label": "1袋200克",
              "value": 200,
              "color": "#FB923C"
            },
            {
              "label": "1袋200克",
              "value": 200,
              "color": "#E8A0BF"
            },
            {
              "label": "1袋200克",
              "value": 200,
              "color": "#8B5CF6"
            }
          ],
          "total": 1000
        },
        "knowledge": "克和千克",
        "difficulty": 2,
        "hint": "注意单位换算：1千克=1000克",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 要知道几袋糖重1千克，先要弄清什么？",
            "choices": [
              "1千克=1000克",
              "1千克=100克",
              "1千克=10克",
              "1千克=1克"
            ],
            "answer": "1千克=1000克",
            "explain": "1千克等于1000克"
          },
          {
            "q": "🔢 每袋糖重多少克？",
            "choices": [
              "200克",
              "1000克",
              "5克",
              "100克"
            ],
            "answer": "200克",
            "explain": "每袋糖重200克"
          },
          {
            "q": "🧩 用什么方法求袋数？",
            "choices": [
              "除法：1000÷200=5",
              "乘法：200×5=1000",
              "加法：200+200+200+200+200=1000",
              "减法：1000-200=800"
            ],
            "answer": "除法：1000÷200=5",
            "explain": "求1000克里有多少个200克，用除法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示5袋200克糖排成一行，合起来正好1000克",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "1000÷200=5，求1000里有多少个200",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求一个数里包含几个另一个数，用除法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-43",
        "scene": "小明有20元，买了3支铅笔，每支4元。",
        "question": "还剩多少元？",
        "formula": "20-3×4=?",
        "answer": 8,
        "choices": [
          11,
          8,
          10,
          9
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每支4元",
              "value": 20,
              "color": "#00A896"
            },
            {
              "label": "买3支笔花12元",
              "value": 12,
              "color": "#FB923C"
            },
            {
              "label": "还剩8元",
              "value": 8,
              "color": "#F5B800"
            }
          ],
          "total": 20
        },
        "knowledge": "混合运算",
        "difficulty": 2,
        "hint": "先算乘法，再算减法",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 先算哪一步？",
            "choices": [
              "先算3×4=12（买笔花的钱）",
              "先算20-3=17",
              "先算4×3=12",
              "直接算20-4=16"
            ],
            "answer": "先算3×4=12（买笔花的钱）",
            "explain": "先算乘法，算出买3支笔花了12元"
          },
          {
            "q": "🔢 再算哪一步？",
            "choices": [
              "20-12=8（还剩的钱）",
              "20-3=17",
              "12-4=8",
              "3×4=12"
            ],
            "answer": "20-12=8（还剩的钱）",
            "explain": "再用总钱数减去花的钱"
          },
          {
            "q": "🧩 混合运算的顺序是什么？",
            "choices": [
              "先乘除后加减",
              "从左到右",
              "先加减后乘除",
              "从右到左"
            ],
            "answer": "先乘除后加减",
            "explain": "20-3×4，先算乘法3×4=12，再算减法20-12=8"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示了总钱数、花掉的钱和剩余的钱的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "20-3×4=20-12=8，先乘后减",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "混合运算：先算乘除法，再算加减法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-44",
        "scene": "妈妈买了5个苹果，每千克8元，共3千克。",
        "question": "一共多少元？",
        "formula": "8×3=?",
        "answer": 24,
        "choices": [
          27,
          24,
          25,
          26
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每千克8元",
              "value": 8,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 8,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 8,
              "color": "#FB923C"
            }
          ],
          "total": 24
        },
        "knowledge": "混合运算",
        "difficulty": 1,
        "hint": "注意乘法优先",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少元（总数）",
              "每份有多少元",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少元（总数）",
            "explain": "题目说「妈妈买了5个苹果，每千克8元，共3千克。」，问的是「一共多少元？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份8个，共3份",
              "总数24，每份8个",
              "总数24，共3份",
              "只有总数"
            ],
            "answer": "每份8个，共3份",
            "explain": "每份是8元，有3份，这是两个关键数"
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
            "explain": "求3个8合起来是多少，用乘法：8×3=24"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有3条等长的条形，每条代表8个元，合起来就是总数24",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求3个8相加的和：8×3=24",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-45",
        "scene": "小明有30颗糖，给了小红8颗，又买了5颗。",
        "question": "现在有几颗？",
        "formula": "30-8+5=?",
        "answer": 27,
        "choices": [
          30,
          28,
          27,
          29
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "原来30颗",
              "value": 30,
              "color": "#00A896"
            },
            {
              "label": "给小红8颗",
              "value": 8,
              "color": "#FB923C"
            },
            {
              "label": "又买5颗",
              "value": 5,
              "color": "#F5B800"
            },
            {
              "label": "现在27颗",
              "value": 27,
              "color": "#E8A0BF"
            }
          ],
          "total": 30
        },
        "knowledge": "混合运算",
        "difficulty": 2,
        "hint": "从左往右算",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 事情发生的顺序是什么？",
            "choices": [
              "先有30颗→给出8颗→又买5颗",
              "先买5颗→给出8颗",
              "先给出8颗→又买5颗",
              "同时发生"
            ],
            "answer": "先有30颗→给出8颗→又买5颗",
            "explain": "按时间顺序一步步来"
          },
          {
            "q": "🔢 第一步算什么？",
            "choices": [
              "30-8=22",
              "30+5=35",
              "8+5=13",
              "30-5=25"
            ],
            "answer": "30-8=22",
            "explain": "先减掉给出的8颗"
          },
          {
            "q": "🧩 第二步再算什么？",
            "choices": [
              "22+5=27",
              "22-5=17",
              "30+5=35",
              "30-8=22"
            ],
            "answer": "22+5=27",
            "explain": "再加上又买的5颗"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形象展示总变化过程：30→减8→加5=27",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "30-8+5=27，按顺序从左到右计算",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "加减混合运算按从左到右的顺序计算",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-46",
        "scene": "一箱饮料24瓶，分给6个同学，每人几瓶？",
        "question": "每人几瓶？",
        "formula": "24÷6=?",
        "answer": 4,
        "choices": [
          7,
          5,
          6,
          4
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 24,
          "parts": [
            {
              "value": 4,
              "label": "每人几瓶",
              "color": "#00A896"
            },
            {
              "value": 4,
              "label": "同学2",
              "color": "#F5B800"
            },
            {
              "value": 4,
              "label": "同学3",
              "color": "#FB923C"
            },
            {
              "value": 4,
              "label": "同学4",
              "color": "#E8A0BF"
            },
            {
              "value": 4,
              "label": "",
              "color": "#8B5CF6"
            },
            {
              "value": 4,
              "label": "",
              "color": "#3B82F6"
            }
          ]
        },
        "knowledge": "混合运算",
        "difficulty": 1,
        "hint": "注意除法优先",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「一箱饮料24瓶，分给6个同学，每人几瓶」，问的是「每人几瓶？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数24，分给6同学",
              "每份4个，总数24",
              "每份4个，6份",
              "只有总数"
            ],
            "answer": "总数24，分给6同学",
            "explain": "总数是24，要平均分给6同学，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把24平均分成6份，用除法：24÷6=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数24在上方，下面分成6份，每份4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：24÷6=4，每份4个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-47",
        "scene": "小明每天写6页作业，写了5天，还剩12页没写。",
        "question": "一共有多少页？",
        "formula": "6×5+12=?",
        "answer": 42,
        "choices": [
          43,
          45,
          44,
          42
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每天写6页作业",
              "value": 30,
              "color": "#00A896"
            },
            {
              "label": "还剩12页",
              "value": 12,
              "color": "#FB923C"
            },
            {
              "label": "一共42页",
              "value": 42,
              "color": "#F5B800"
            }
          ],
          "total": 42
        },
        "knowledge": "混合运算",
        "difficulty": 2,
        "hint": "先算乘法，再算加法",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 先算哪一步？",
            "choices": [
              "先算6×5=30（已写的页数）",
              "先算5+12=17",
              "先算6×12=72",
              "直接算6+5+12=23"
            ],
            "answer": "先算6×5=30（已写的页数）",
            "explain": "每天6页，写了5天，先算已写的页数"
          },
          {
            "q": "🔢 再算哪一步？",
            "choices": [
              "30+12=42（总页数）",
              "30-12=18",
              "6×5=30",
              "12+5=17"
            ],
            "answer": "30+12=42（总页数）",
            "explain": "已写的页数加上剩下的页数"
          },
          {
            "q": "🧩 这道题用了什么运算顺序？",
            "choices": [
              "先乘后加",
              "先加后乘",
              "从左到右",
              "先除后加"
            ],
            "answer": "先乘后加",
            "explain": "先算乘法6×5=30，再算加法30+12=42"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图分已写和未写两部分，合起来是总页数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "6×5+12=30+12=42，先乘后加",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求总和时，先算部分量再相加",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-48",
        "scene": "妈妈买了50元的东西，付了100元。",
        "question": "应该找回多少元？",
        "formula": "100-50=?",
        "answer": 50,
        "choices": [
          50,
          52,
          53,
          51
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "原来有100个",
              "value": 100,
              "color": "#00A896"
            },
            {
              "label": "减去50个",
              "value": 50,
              "color": "#FB923C"
            },
            {
              "label": "还剩50个",
              "value": 50,
              "color": "#F5B800"
            }
          ],
          "total": 100
        },
        "knowledge": "混合运算",
        "difficulty": 1,
        "hint": "注意运算顺序",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求剩下的（差）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求剩下的（差）",
            "explain": "题目说「妈妈买了50元的东西，付了100元。」，问的是「应该找回多少元？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "100和50",
              "总数50和100",
              "总数50和50",
              "只有一个数"
            ],
            "answer": "100和50",
            "explain": "关键数是100和50，需要求差"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "减法",
              "乘法",
              "除法",
              "加法"
            ],
            "answer": "减法",
            "explain": "求相差多少，用减法：100-50=50"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，从整体中减去一部分等于剩余",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "100-50=50，从整体中去掉一部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "减法的关键：整体-部分=另一部分",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-49",
        "scene": "一袋糖有36颗，平均分给4个小朋友，每人几颗？",
        "question": "每人几颗？",
        "formula": "36÷4=?",
        "answer": 9,
        "choices": [
          9,
          10,
          12,
          11
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 36,
          "parts": [
            {
              "value": 9,
              "label": "每人几颗",
              "color": "#00A896"
            },
            {
              "value": 9,
              "label": "小朋友2",
              "color": "#F5B800"
            },
            {
              "value": 9,
              "label": "小朋友3",
              "color": "#FB923C"
            },
            {
              "value": 9,
              "label": "小朋友4",
              "color": "#E8A0BF"
            }
          ]
        },
        "knowledge": "混合运算",
        "difficulty": 1,
        "hint": "注意除法优先",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每份有多少（或能分几份）",
              "一共多少（总数）",
              "谁比谁大",
              "剩下多少"
            ],
            "answer": "每份有多少（或能分几份）",
            "explain": "题目说「一袋糖有36颗，平均分给4个小朋友，每人几颗」，问的是「每人几颗？」，这是求每份数或份数"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "总数36，分给4小朋友",
              "每份9个，总数36",
              "每份9个，4份",
              "只有总数"
            ],
            "answer": "总数36，分给4小朋友",
            "explain": "总数是36，要平均分给4小朋友，这是两个关键数"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "除法",
              "乘法",
              "加法",
              "减法"
            ],
            "answer": "除法",
            "explain": "把36平均分成4份，用除法：36÷4=9"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数36在上方，下面分成4份，每份9",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "除法是平均分：36÷4=9，每份9个",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "平均分问题用除法：总数÷份数=每份数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-50",
        "scene": "小明有28元，买了3本书，每本8元。",
        "question": "还剩多少元？",
        "formula": "28-3×8=?",
        "answer": 4,
        "choices": [
          7,
          6,
          5,
          4
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每本8元",
              "value": 28,
              "color": "#00A896"
            },
            {
              "label": "买3本书花24元",
              "value": 24,
              "color": "#FB923C"
            },
            {
              "label": "还剩4元",
              "value": 4,
              "color": "#F5B800"
            }
          ],
          "total": 28
        },
        "knowledge": "混合运算",
        "difficulty": 2,
        "hint": "先算乘法，再算减法",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 先算哪一步？",
            "choices": [
              "先算3×8=24（买书花的钱）",
              "先算28-3=25",
              "先算8×3=24",
              "直接算28-8=20"
            ],
            "answer": "先算3×8=24（买书花的钱）",
            "explain": "每本8元买了3本，先算花了多少钱"
          },
          {
            "q": "🔢 再算哪一步？",
            "choices": [
              "28-24=4（还剩的钱）",
              "28-3=25",
              "24-8=16",
              "3×8=24"
            ],
            "answer": "28-24=4（还剩的钱）",
            "explain": "用总钱数减去花的钱"
          },
          {
            "q": "🧩 运算顺序是什么？",
            "choices": [
              "先乘后减",
              "先减后乘",
              "从左到右",
              "先除后减"
            ],
            "answer": "先乘后减",
            "explain": "28-3×8=28-24=4，先算乘法"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图展示总钱数、花掉的钱和剩余的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "28-3×8=28-24=4，先乘后减",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "混合运算：先乘除后加减",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-51",
        "scene": "学校买了4盒彩笔，每盒12支。",
        "question": "一共多少支彩笔？",
        "formula": "4×12=?",
        "answer": 48,
        "choices": [
          50,
          49,
          48,
          51
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "每盒12支",
              "value": 12,
              "color": "#00A896"
            },
            {
              "label": "",
              "value": 12,
              "color": "#F5B800"
            },
            {
              "label": "",
              "value": 12,
              "color": "#FB923C"
            },
            {
              "label": "",
              "value": 12,
              "color": "#E8A0BF"
            }
          ],
          "total": 48
        },
        "knowledge": "混合运算",
        "difficulty": 2,
        "hint": "注意乘法优先",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "一共多少支（总数）",
              "每份有多少支",
              "一共有多少份",
              "谁比谁多"
            ],
            "answer": "一共多少支（总数）",
            "explain": "题目说「学校买了4盒彩笔，每盒12支。」，问的是「一共多少支彩笔？」，这是求总数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每份12个，共4份",
              "总数48，每份12个",
              "总数48，共4份",
              "只有总数"
            ],
            "answer": "每份12个，共4份",
            "explain": "每份是12支，有4份，这是两个关键数"
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
            "explain": "求4个12合起来是多少，用乘法：12×4=48"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "图中有4条等长的条形，每条代表12个支，合起来就是总数48",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "乘法是求4个12相加的和：12×4=48",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求几个相同加数的和，用乘法。关键：每份数×份数=总数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-52",
        "scene": "一筐苹果重45千克，卖掉了28千克。",
        "question": "还剩多少千克？",
        "formula": "45-28=?",
        "answer": 17,
        "choices": [
          18,
          17,
          19,
          20
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "原来有45个",
              "value": 45,
              "color": "#00A896"
            },
            {
              "label": "减去28个",
              "value": 28,
              "color": "#FB923C"
            },
            {
              "label": "还剩17个",
              "value": 17,
              "color": "#F5B800"
            }
          ],
          "total": 45
        },
        "knowledge": "混合运算",
        "difficulty": 2,
        "hint": "注意退位",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "求剩下的（差）",
              "求每份有多少",
              "求谁是谁的几倍",
              "求一共有几份"
            ],
            "answer": "求剩下的（差）",
            "explain": "题目说「一筐苹果重45千克，卖掉了28千克。」，问的是「还剩多少千克？」"
          },
          {
            "q": "🔢 题目给了我们哪些关键数？",
            "choices": [
              "45和28",
              "总数17和45",
              "总数17和28",
              "只有一个数"
            ],
            "answer": "45和28",
            "explain": "关键数是45和28，需要求差"
          },
          {
            "q": "🧩 用什么方法计算？",
            "choices": [
              "减法",
              "乘法",
              "除法",
              "加法"
            ],
            "answer": "减法",
            "explain": "求相差多少，用减法：45-28=17"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "条形图中展示了各部分的数量关系，从整体中减去一部分等于剩余",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "45-28=17，从整体中去掉一部分",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "减法的关键：整体-部分=另一部分",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-53",
        "scene": "23颗糖平均分给4个小朋友，每人几颗，剩几颗？",
        "question": "每人几颗？剩几颗？",
        "formula": "23÷4=？...",
        "answer": 5,
        "choices": [
          5,
          8,
          7,
          6
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 23,
          "parts": [
            {
              "value": 5,
              "label": "每人几颗",
              "color": "#00A896"
            },
            {
              "value": 5,
              "label": "小朋友2",
              "color": "#F5B800"
            },
            {
              "value": 5,
              "label": "小朋友3",
              "color": "#FB923C"
            },
            {
              "value": 5,
              "label": "小朋友4",
              "color": "#E8A0BF"
            },
            {
              "value": 3,
              "label": "余数",
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "有余数的除法",
        "difficulty": 2,
        "hint": "商×除数+余数=被除数",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 这道题和普通除法有什么不同？",
            "choices": [
              "不能正好分完，有余数",
              "能正好分完",
              "是乘法",
              "是加法"
            ],
            "answer": "不能正好分完，有余数",
            "explain": "23÷4不能正好除尽，会剩下一些"
          },
          {
            "q": "🔢 关键关系是什么？",
            "choices": [
              "商×除数+余数=被除数",
              "商×除数=被除数",
              "被除数÷商=除数",
              "被除数-余数=商"
            ],
            "answer": "商×除数+余数=被除数",
            "explain": "23=4×5+3"
          },
          {
            "q": "🧩 余数有什么特点？",
            "choices": [
              "余数3＜除数4",
              "余数比除数大",
              "余数=除数",
              "余数=0"
            ],
            "answer": "余数3＜除数4",
            "explain": "余数一定比除数小，否则还能继续分"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数23分成4份，每份5，还剩下3",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "有余数除法：23÷4=5···3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "验算方法：商×除数+余数=被除数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-54",
        "scene": "31支铅笔，每6支装一盒。",
        "question": "可以装几盒？剩几支？",
        "formula": "31÷6=？...",
        "answer": 5,
        "choices": [
          7,
          6,
          8,
          5
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 31,
          "parts": [
            {
              "value": 5,
              "label": "每6支装一盒",
              "color": "#00A896"
            },
            {
              "value": 5,
              "label": "盒2",
              "color": "#F5B800"
            },
            {
              "value": 5,
              "label": "盒3",
              "color": "#FB923C"
            },
            {
              "value": 5,
              "label": "盒4",
              "color": "#E8A0BF"
            },
            {
              "value": 5,
              "label": "",
              "color": "#8B5CF6"
            },
            {
              "value": 5,
              "label": "",
              "color": "#3B82F6"
            },
            {
              "value": 1,
              "label": "余数",
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "有余数的除法",
        "difficulty": 2,
        "hint": "商×除数+余数=被除数",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 这道题和普通除法有什么不同？",
            "choices": [
              "不能正好分完，有余数",
              "能正好分完",
              "是乘法",
              "是加法"
            ],
            "answer": "不能正好分完，有余数",
            "explain": "31÷6不能正好除尽，会剩下一些"
          },
          {
            "q": "🔢 关键关系是什么？",
            "choices": [
              "商×除数+余数=被除数",
              "商×除数=被除数",
              "被除数÷商=除数",
              "被除数-余数=商"
            ],
            "answer": "商×除数+余数=被除数",
            "explain": "31=6×5+1"
          },
          {
            "q": "🧩 余数有什么特点？",
            "choices": [
              "余数1＜除数6",
              "余数比除数大",
              "余数=除数",
              "余数=0"
            ],
            "answer": "余数1＜除数6",
            "explain": "余数一定比除数小，否则还能继续分"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数31分成6份，每份5，还剩下1",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "有余数除法：31÷6=5···1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "验算方法：商×除数+余数=被除数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-55",
        "scene": "45个苹果，每8个装一袋。",
        "question": "可以装几袋？剩几个？",
        "formula": "45÷8=？...",
        "answer": 5,
        "choices": [
          5,
          6,
          8,
          7
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 45,
          "parts": [
            {
              "value": 5,
              "label": "每8个装一袋",
              "color": "#00A896"
            },
            {
              "value": 5,
              "label": "袋2",
              "color": "#F5B800"
            },
            {
              "value": 5,
              "label": "袋3",
              "color": "#FB923C"
            },
            {
              "value": 5,
              "label": "袋4",
              "color": "#E8A0BF"
            },
            {
              "value": 5,
              "label": "",
              "color": "#8B5CF6"
            },
            {
              "value": 5,
              "label": "",
              "color": "#3B82F6"
            },
            {
              "value": 5,
              "label": "",
              "color": "#10B981"
            },
            {
              "value": 5,
              "label": "",
              "color": "#00A896"
            },
            {
              "value": 5,
              "label": "余数",
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "有余数的除法",
        "difficulty": 2,
        "hint": "商×除数+余数=被除数",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 这道题和普通除法有什么不同？",
            "choices": [
              "不能正好分完，有余数",
              "能正好分完",
              "是乘法",
              "是加法"
            ],
            "answer": "不能正好分完，有余数",
            "explain": "45÷8不能正好除尽，会剩下一些"
          },
          {
            "q": "🔢 关键关系是什么？",
            "choices": [
              "商×除数+余数=被除数",
              "商×除数=被除数",
              "被除数÷商=除数",
              "被除数-余数=商"
            ],
            "answer": "商×除数+余数=被除数",
            "explain": "45=8×5+5"
          },
          {
            "q": "🧩 余数有什么特点？",
            "choices": [
              "余数5＜除数8",
              "余数比除数大",
              "余数=除数",
              "余数=0"
            ],
            "answer": "余数5＜除数8",
            "explain": "余数一定比除数小，否则还能继续分"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数45分成8份，每份5，还剩下5",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "有余数除法：45÷8=5···5",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "验算方法：商×除数+余数=被除数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-56",
        "scene": "50颗糖平均分给7个小朋友。",
        "question": "每人几颗？剩几颗？",
        "formula": "50÷7=？...",
        "answer": 7,
        "choices": [
          8,
          7,
          9,
          10
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 50,
          "parts": [
            {
              "value": 7,
              "label": "小朋友1",
              "color": "#00A896"
            },
            {
              "value": 7,
              "label": "小朋友2",
              "color": "#F5B800"
            },
            {
              "value": 7,
              "label": "小朋友3",
              "color": "#FB923C"
            },
            {
              "value": 7,
              "label": "小朋友4",
              "color": "#E8A0BF"
            },
            {
              "value": 7,
              "label": "",
              "color": "#8B5CF6"
            },
            {
              "value": 7,
              "label": "",
              "color": "#3B82F6"
            },
            {
              "value": 7,
              "label": "",
              "color": "#10B981"
            },
            {
              "value": 1,
              "label": "余数",
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "有余数的除法",
        "difficulty": 2,
        "hint": "商×除数+余数=被除数",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 这道题和普通除法有什么不同？",
            "choices": [
              "不能正好分完，有余数",
              "能正好分完",
              "是乘法",
              "是加法"
            ],
            "answer": "不能正好分完，有余数",
            "explain": "50÷7不能正好除尽，会剩下一些"
          },
          {
            "q": "🔢 关键关系是什么？",
            "choices": [
              "商×除数+余数=被除数",
              "商×除数=被除数",
              "被除数÷商=除数",
              "被除数-余数=商"
            ],
            "answer": "商×除数+余数=被除数",
            "explain": "50=7×7+1"
          },
          {
            "q": "🧩 余数有什么特点？",
            "choices": [
              "余数1＜除数7",
              "余数比除数大",
              "余数=除数",
              "余数=0"
            ],
            "answer": "余数1＜除数7",
            "explain": "余数一定比除数小，否则还能继续分"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数50分成7份，每份7，还剩下1",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "有余数除法：50÷7=7···1",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "验算方法：商×除数+余数=被除数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-57",
        "scene": "37个小朋友，每条船坐5人。",
        "question": "需要几条船？",
        "formula": "37÷5=?",
        "answer": 7,
        "choices": [
          10,
          9,
          7,
          11
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 37,
          "parts": [
            {
              "value": 5,
              "label": "每条船坐5人",
              "color": "#00A896"
            },
            {
              "value": 5,
              "label": "船2",
              "color": "#F5B800"
            },
            {
              "value": 5,
              "label": "船3",
              "color": "#FB923C"
            },
            {
              "value": 5,
              "label": "船4",
              "color": "#E8A0BF"
            },
            {
              "value": 5,
              "label": "船5",
              "color": "#8B5CF6"
            },
            {
              "value": 5,
              "label": "船6",
              "color": "#3B82F6"
            },
            {
              "value": 5,
              "label": "船7",
              "color": "#10B981"
            },
            {
              "value": 2,
              "label": "余2人还需1条船",
              "color": "#EF4444"
            }
          ]
        },
        "knowledge": "有余数的除法",
        "difficulty": 2,
        "hint": "进一法：不够一条船也要多加一条",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 37人坐船，每条船坐5人，先算什么？",
            "choices": [
              "37÷5=7···2",
              "37-5=32",
              "5×7=35",
              "37+5=42"
            ],
            "answer": "37÷5=7···2",
            "explain": "先算37÷5=7条船余2人"
          },
          {
            "q": "🔢 余下的2人怎么办？",
            "choices": [
              "需要再加1条船",
              "让他们游泳",
              "等下一班",
              "不走了"
            ],
            "answer": "需要再加1条船",
            "explain": "余下的2人也要坐船，所以需要再加1条"
          },
          {
            "q": "🧩 一共需要几条船？",
            "choices": [
              "7+1=8条",
              "7条",
              "6条",
              "9条"
            ],
            "answer": "7+1=8条",
            "explain": "7条船满员，再加1条给余下的2人，共8条"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "每个圈代表一条船坐5人，最后一个圈只有2人",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "37÷5=7···2，余2人也要1条船，7+1=8",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "进一法：有余数时商+1才是答案",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-58",
        "scene": "28个同学排队，每6人一排。",
        "question": "可以排几排？剩几人？",
        "formula": "28÷6=？...",
        "answer": 4,
        "choices": [
          6,
          4,
          5,
          7
        ],
        "visualType": "numberBond",
        "visualData": {
          "type": "numberBond",
          "total": 28,
          "parts": [
            {
              "value": 4,
              "label": "每6人一排",
              "color": "#00A896"
            },
            {
              "value": 4,
              "label": "同学2",
              "color": "#F5B800"
            },
            {
              "value": 4,
              "label": "同学3",
              "color": "#FB923C"
            },
            {
              "value": 4,
              "label": "同学4",
              "color": "#E8A0BF"
            },
            {
              "value": 4,
              "label": "",
              "color": "#8B5CF6"
            },
            {
              "value": 4,
              "label": "",
              "color": "#3B82F6"
            },
            {
              "value": 4,
              "label": "余数",
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "有余数的除法",
        "difficulty": 2,
        "hint": "商×除数+余数=被除数",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 这道题和普通除法有什么不同？",
            "choices": [
              "不能正好分完，有余数",
              "能正好分完",
              "是乘法",
              "是加法"
            ],
            "answer": "不能正好分完，有余数",
            "explain": "28÷6不能正好除尽，会剩下一些"
          },
          {
            "q": "🔢 关键关系是什么？",
            "choices": [
              "商×除数+余数=被除数",
              "商×除数=被除数",
              "被除数÷商=除数",
              "被除数-余数=商"
            ],
            "answer": "商×除数+余数=被除数",
            "explain": "28=6×4+4"
          },
          {
            "q": "🧩 余数有什么特点？",
            "choices": [
              "余数4＜除数6",
              "余数比除数大",
              "余数=除数",
              "余数=0"
            ],
            "answer": "余数4＜除数6",
            "explain": "余数一定比除数小，否则还能继续分"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "总数28分成6份，每份4，还剩下4",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "有余数除法：28÷6=4···4",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "验算方法：商×除数+余数=被除数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-59",
        "scene": "小明、小红、小华三人中，小明比小红高，小华最矮。",
        "question": "谁最高？",
        "formula": "推理",
        "answer": "小明",
        "choices": [
          "小明",
          "小华",
          "小方",
          "小红"
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "条件1",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "条件2",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "结论：小明",
              "value": 1,
              "color": "#FB923C"
            }
          ],
          "total": 1
        },
        "knowledge": "推理",
        "difficulty": 1,
        "hint": 1,
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍条件，题目给了几个条件？",
            "choices": [
              "2-3个条件",
              "1个条件",
              "4个条件",
              "没有条件"
            ],
            "answer": "2-3个条件",
            "explain": "推理题需要综合多个条件来判断"
          },
          {
            "q": "🔢 从哪个条件开始推理最直接？",
            "choices": [
              "最确定的那个条件",
              "随便选一个",
              "最长的条件",
              "最短的条件"
            ],
            "answer": "最确定的那个条件",
            "explain": "从最确定的线索开始，一步步推出结论"
          },
          {
            "q": "🧩 推理出的结论是什么？",
            "choices": [
              "答案是小明",
              "条件不足无法判断",
              "有多个可能",
              "没有正确答案"
            ],
            "answer": "答案是小明",
            "explain": "通过排除法，可以确定答案是小明"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "推理题用条形图展示各条件之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "通过已知条件逐步排除，得出结论",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "推理的关键：找最确定的线索，用排除法缩小范围",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-60",
        "scene": "箱子里有红球、黄球、蓝球各一个，红球最重，蓝球最轻。",
        "question": "最轻的是哪个球？",
        "formula": "推理",
        "answer": "蓝球",
        "choices": [
          "小明",
          "小红",
          "小华",
          "蓝球"
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "条件1",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "条件2",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "结论：蓝球",
              "value": 1,
              "color": "#FB923C"
            }
          ],
          "total": 1
        },
        "knowledge": "推理",
        "difficulty": 1,
        "hint": 1,
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍条件，题目给了几个条件？",
            "choices": [
              "2-3个条件",
              "1个条件",
              "4个条件",
              "没有条件"
            ],
            "answer": "2-3个条件",
            "explain": "推理题需要综合多个条件来判断"
          },
          {
            "q": "🔢 从哪个条件开始推理最直接？",
            "choices": [
              "最确定的那个条件",
              "随便选一个",
              "最长的条件",
              "最短的条件"
            ],
            "answer": "最确定的那个条件",
            "explain": "从最确定的线索开始，一步步推出结论"
          },
          {
            "q": "🧩 推理出的结论是什么？",
            "choices": [
              "答案是蓝球",
              "条件不足无法判断",
              "有多个可能",
              "没有正确答案"
            ],
            "answer": "答案是蓝球",
            "explain": "通过排除法，可以确定答案是蓝球"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "推理题用条形图展示各条件之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "通过已知条件逐步排除，得出结论",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "推理的关键：找最确定的线索，用排除法缩小范围",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-61",
        "scene": "三本书，语文书比数学书薄，英语书比语文书厚。",
        "question": "最厚的书是？",
        "formula": "推理",
        "answer": "英语书",
        "choices": [
          "小红",
          "小华",
          "英语书",
          "小明"
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "条件1",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "条件2",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "结论：英语书",
              "value": 1,
              "color": "#FB923C"
            }
          ],
          "total": 1
        },
        "knowledge": "推理",
        "difficulty": 1,
        "hint": 1,
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍条件，题目给了几个条件？",
            "choices": [
              "2-3个条件",
              "1个条件",
              "4个条件",
              "没有条件"
            ],
            "answer": "2-3个条件",
            "explain": "推理题需要综合多个条件来判断"
          },
          {
            "q": "🔢 从哪个条件开始推理最直接？",
            "choices": [
              "最确定的那个条件",
              "随便选一个",
              "最长的条件",
              "最短的条件"
            ],
            "answer": "最确定的那个条件",
            "explain": "从最确定的线索开始，一步步推出结论"
          },
          {
            "q": "🧩 推理出的结论是什么？",
            "choices": [
              "答案是英语书",
              "条件不足无法判断",
              "有多个可能",
              "没有正确答案"
            ],
            "answer": "答案是英语书",
            "explain": "通过排除法，可以确定答案是英语书"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "推理题用条形图展示各条件之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "通过已知条件逐步排除，得出结论",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "推理的关键：找最确定的线索，用排除法缩小范围",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-62",
        "scene": "四个水果：苹果、香蕉、橙子、葡萄，苹果比香蕉重，橙子最轻。",
        "question": "最重的是什么水果？",
        "formula": "推理",
        "answer": "苹果",
        "choices": [
          "苹果",
          "小明",
          "小红",
          "小华"
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "条件1",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "条件2",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "结论：苹果",
              "value": 1,
              "color": "#FB923C"
            }
          ],
          "total": 1
        },
        "knowledge": "推理",
        "difficulty": 1,
        "hint": 2,
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍条件，题目给了几个条件？",
            "choices": [
              "2-3个条件",
              "1个条件",
              "4个条件",
              "没有条件"
            ],
            "answer": "2-3个条件",
            "explain": "推理题需要综合多个条件来判断"
          },
          {
            "q": "🔢 从哪个条件开始推理最直接？",
            "choices": [
              "最确定的那个条件",
              "随便选一个",
              "最长的条件",
              "最短的条件"
            ],
            "answer": "最确定的那个条件",
            "explain": "从最确定的线索开始，一步步推出结论"
          },
          {
            "q": "🧩 推理出的结论是什么？",
            "choices": [
              "答案是苹果",
              "条件不足无法判断",
              "有多个可能",
              "没有正确答案"
            ],
            "answer": "答案是苹果",
            "explain": "通过排除法，可以确定答案是苹果"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "推理题用条形图展示各条件之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "通过已知条件逐步排除，得出结论",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "推理的关键：找最确定的线索，用排除法缩小范围",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-63",
        "scene": "小红、小丽、小方三人比赛跑步，小红不是第一，小丽比小方慢。",
        "question": "谁是第一名？",
        "formula": "推理",
        "answer": "小方",
        "choices": [
          "小明",
          "小华",
          "小方",
          "小红"
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "条件1",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "条件2",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "结论：小方",
              "value": 1,
              "color": "#FB923C"
            }
          ],
          "total": 1
        },
        "knowledge": "推理",
        "difficulty": 1,
        "hint": 2,
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍条件，题目给了几个条件？",
            "choices": [
              "2-3个条件",
              "1个条件",
              "4个条件",
              "没有条件"
            ],
            "answer": "2-3个条件",
            "explain": "推理题需要综合多个条件来判断"
          },
          {
            "q": "🔢 从哪个条件开始推理最直接？",
            "choices": [
              "最确定的那个条件",
              "随便选一个",
              "最长的条件",
              "最短的条件"
            ],
            "answer": "最确定的那个条件",
            "explain": "从最确定的线索开始，一步步推出结论"
          },
          {
            "q": "🧩 推理出的结论是什么？",
            "choices": [
              "答案是小方",
              "条件不足无法判断",
              "有多个可能",
              "没有正确答案"
            ],
            "answer": "答案是小方",
            "explain": "通过排除法，可以确定答案是小方"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "推理题用条形图展示各条件之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "通过已知条件逐步排除，得出结论",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "推理的关键：找最确定的线索，用排除法缩小范围",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-64",
        "scene": "三个盒子里放苹果、橘子、香蕉，第一个盒子不是苹果，第三个盒子放香蕉。",
        "question": "第二个盒子放什么？",
        "formula": "推理",
        "answer": "橘子",
        "choices": [
          "小红",
          "小明",
          "小华",
          "橘子"
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "条件1",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "条件2",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "结论：橘子",
              "value": 1,
              "color": "#FB923C"
            }
          ],
          "total": 1
        },
        "knowledge": "推理",
        "difficulty": 1,
        "hint": 2,
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍条件，题目给了几个条件？",
            "choices": [
              "2-3个条件",
              "1个条件",
              "4个条件",
              "没有条件"
            ],
            "answer": "2-3个条件",
            "explain": "推理题需要综合多个条件来判断"
          },
          {
            "q": "🔢 从哪个条件开始推理最直接？",
            "choices": [
              "最确定的那个条件",
              "随便选一个",
              "最长的条件",
              "最短的条件"
            ],
            "answer": "最确定的那个条件",
            "explain": "从最确定的线索开始，一步步推出结论"
          },
          {
            "q": "🧩 推理出的结论是什么？",
            "choices": [
              "答案是橘子",
              "条件不足无法判断",
              "有多个可能",
              "没有正确答案"
            ],
            "answer": "答案是橘子",
            "explain": "通过排除法，可以确定答案是橘子"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "推理题用条形图展示各条件之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "通过已知条件逐步排除，得出结论",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "推理的关键：找最确定的线索，用排除法缩小范围",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-65",
        "scene": "小明家住在4楼，小红住在比小明高2楼，小华住在比小红低3楼。",
        "question": "小华住几楼？",
        "formula": "推理",
        "answer": 3,
        "choices": [
          "小明",
          "小红",
          3,
          "小华"
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "条件1",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "条件2",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "结论：3",
              "value": 1,
              "color": "#FB923C"
            }
          ],
          "total": 1
        },
        "knowledge": "推理",
        "difficulty": 1,
        "hint": 2,
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍条件，题目给了几个条件？",
            "choices": [
              "2-3个条件",
              "1个条件",
              "4个条件",
              "没有条件"
            ],
            "answer": "2-3个条件",
            "explain": "推理题需要综合多个条件来判断"
          },
          {
            "q": "🔢 从哪个条件开始推理最直接？",
            "choices": [
              "最确定的那个条件",
              "随便选一个",
              "最长的条件",
              "最短的条件"
            ],
            "answer": "最确定的那个条件",
            "explain": "从最确定的线索开始，一步步推出结论"
          },
          {
            "q": "🧩 推理出的结论是什么？",
            "choices": [
              "答案是3",
              "条件不足无法判断",
              "有多个可能",
              "没有正确答案"
            ],
            "answer": "答案是3",
            "explain": "通过排除法，可以确定答案是3"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "推理题用条形图展示各条件之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "通过已知条件逐步排除，得出结论",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "推理的关键：找最确定的线索，用排除法缩小范围",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-66",
        "scene": "三根绳子，红绳比蓝绳短，黄绳比红绳长。",
        "question": "最长的绳子是？",
        "formula": "推理",
        "answer": "黄绳",
        "choices": [
          "黄绳",
          "小红",
          "小明",
          "小华"
        ],
        "visualType": "barModel",
        "visualData": {
          "type": "bar",
          "bars": [
            {
              "label": "条件1",
              "value": 3,
              "color": "#00A896"
            },
            {
              "label": "条件2",
              "value": 2,
              "color": "#F5B800"
            },
            {
              "label": "结论：黄绳",
              "value": 1,
              "color": "#FB923C"
            }
          ],
          "total": 1
        },
        "knowledge": "推理",
        "difficulty": 1,
        "hint": 1,
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 再读一遍条件，题目给了几个条件？",
            "choices": [
              "2-3个条件",
              "1个条件",
              "4个条件",
              "没有条件"
            ],
            "answer": "2-3个条件",
            "explain": "推理题需要综合多个条件来判断"
          },
          {
            "q": "🔢 从哪个条件开始推理最直接？",
            "choices": [
              "最确定的那个条件",
              "随便选一个",
              "最长的条件",
              "最短的条件"
            ],
            "answer": "最确定的那个条件",
            "explain": "从最确定的线索开始，一步步推出结论"
          },
          {
            "q": "🧩 推理出的结论是什么？",
            "choices": [
              "答案是黄绳",
              "条件不足无法判断",
              "有多个可能",
              "没有正确答案"
            ],
            "answer": "答案是黄绳",
            "explain": "通过排除法，可以确定答案是黄绳"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "推理题用条形图展示各条件之间的关系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "通过已知条件逐步排除，得出结论",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "推理的关键：找最确定的线索，用排除法缩小范围",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-67",
        "scene": "下列图形中，哪些是轴对称图形？",
        "question": "哪个图形不是轴对称图形？",
        "formula": "图形运动",
        "answer": "平行四边形",
        "choices": [
          "三角形",
          "正方形",
          "长方形",
          "平行四边形"
        ],
        "visualType": "geometry",
        "visualData": {
          "type": "shape",
          "shape": "rectangle",
          "params": {
            "length": 6,
            "width": 4
          }
        },
        "knowledge": "图形的运动",
        "difficulty": 1,
        "hint": "轴对称图形沿一条直线对折后两边完全重合",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 什么是轴对称图形？",
            "choices": [
              "沿一条直线对折后两边完全重合",
              "两边不一样",
              "圆形才是",
              "只有正方形才是"
            ],
            "answer": "沿一条直线对折后两边完全重合",
            "explain": "轴对称图形有一条对称轴，对折后两边完全重合"
          },
          {
            "q": "🔢 平行四边形为什么不是轴对称图形？",
            "choices": [
              "对折后两边不重合",
              "边数不对",
              "角不对",
              "颜色不对"
            ],
            "answer": "对折后两边不重合",
            "explain": "平行四边形沿任何直线对折，两边都不能完全重合"
          },
          {
            "q": "🧩 判断轴对称图形的方法？",
            "choices": [
              "找对称轴，看对折是否能重合",
              "看形状是否好看",
              "看颜色是否对称",
              "看大小是否一样"
            ],
            "answer": "找对称轴，看对折是否能重合",
            "explain": "找一条直线，看图形沿这条线对折后能否完全重合"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "几何图形展示轴对称的基本特征",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "轴对称图形有一条对称轴，对折后两边完全重合",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "判断方法：找对称轴→对折→看是否完全重合",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-68",
        "scene": "把一张纸对折后剪一个圆形，打开后有几个圆？",
        "question": "打开后有几个圆？",
        "formula": "图形运动",
        "answer": 2,
        "choices": [
          "1",
          "2",
          "3",
          "4"
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 2,
          "parts": [
            {
              "label": "左半边",
              "val": 1,
              "color": "#00A896"
            },
            {
              "label": "右半边",
              "val": 1,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "轴对称/对折",
        "difficulty": 1,
        "hint": "对折剪纸，打开后图形是轴对称的",
        "variants": [],
        "discoverySteps": [
          {
            "q": "📖 什么是轴对称图形？",
            "choices": [
              "沿一条直线对折后两边完全重合",
              "两边不一样",
              "圆形才是",
              "只有正方形才是"
            ],
            "answer": "沿一条直线对折后两边完全重合",
            "explain": "轴对称图形有一条对称轴，对折后两边完全重合"
          },
          {
            "q": "🔢 对折一次剪一个圆，展开后为什么是2个圆？",
            "choices": [
              "对折线是对称轴，两边各1个",
              "剪了2次",
              "纸有2层所以变2个",
              "圆自己分裂成2个"
            ],
            "answer": "对折线是对称轴，两边各1个",
            "explain": "对折后纸有2层，剪1个圆相当于同时剪了2层，展开后沿折痕（对称轴）左右各1个，共2个圆"
          },
          {
            "q": "🧩 判断轴对称图形的方法？",
            "choices": [
              "找对称轴，看对折是否能重合",
              "看形状是否好看",
              "看颜色是否对称",
              "看大小是否一样"
            ],
            "answer": "找对称轴，看对折是否能重合",
            "explain": "找一条直线，看图形沿这条线对折后能否完全重合"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 图形结构",
            "text": "一张纸对折后剪一个圆，展开后沿折痕对称出现2个圆",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "对折线就是对称轴，剪1刀实际剪了2层，所以展开后是2个圆",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "对折剪纸规律：对折n次剪1个图形，展开后得到2ⁿ个图形",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "id": "2B-BM-01",
        "scene": "小红有12颗糖果，小明比小红多5颗。小明有多少颗糖果？",
        "question": "小明有多少颗糖果？（用条形图表示）",
        "formula": "12 + 5 = ?",
        "answer": 17,
        "choices": [17, 15, 19, 7],
        "visualType": "barModelTranslate",
        "visualData": {
          "total": 17,
          "parts": [
            { "label": "小红", "val": 12, "color": "#00A896" },
            { "label": "多5颗", "val": 5, "color": "#F5B800" }
          ]
        },
        "knowledge": "Bar Model入门·比多少",
        "difficulty": 1,
        "hint": "画两条条形，一条表示12，一条比它长5",
        "rmeChoices": [
          { "label": "画条形图", "desc": "画两条条形表示数量关系", "correct": true },
          { "label": "直接列算式", "desc": "12+5=17", "correct": true },
          { "label": "画圆圈", "desc": "画12个圈再加5个圈", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "小明比小红多的5颗糖果，在条形图里对应哪一段？", "keywords": ["第二段","多5","右边","后面的","多出来的"] },
          { "type": "compare", "q": "如果小红多3颗，小明的条形要变长还是变短？", "keywords": ["变长","更长","多画","加","增加"] }
        ],
        "barTranslateLine": { "items": ["小红=12", "小明=12+5", "总共=17"] },
        "neriageErrors": [
          { "answer": 7, "reason": "减法错", "fix": "小明比小红多5颗，应该是加法：12+5=17" }
        ],
        "variants": []
      },
      {
        "id": "2B-BM-02",
        "scene": "图书馆有故事书28本，科技书比故事书多15本。科技书有多少本？",
        "question": "科技书有多少本？",
        "formula": "28 + 15 = ?",
        "answer": 43,
        "choices": [43, 38, 48, 13],
        "visualType": "barModelTranslate",
        "visualData": {
          "total": 43,
          "parts": [
            { "label": "故事书", "val": 28, "color": "#00A896" },
            { "label": "多15本", "val": 15, "color": "#E8A0BF" }
          ]
        },
        "knowledge": "Bar Model入门·比多少",
        "difficulty": 1,
        "hint": "科技书的条形 = 故事书条形 + 多出来的部分",
        "rmeChoices": [
          { "label": "画条形图", "desc": "画两条条形对比", "correct": true },
          { "label": "列算式", "desc": "28+15=43", "correct": true },
          { "label": "画圆圈", "desc": "画28个圈加15个圈", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "条形图里哪一段表示科技书比故事书多的本数？", "keywords": ["第二段","多15","右边","后面","突出的部分"] },
          { "type": "reverse", "q": "如果科技书有43本，故事书有28本，多几本？", "keywords": ["减法","15","43-28","差","少"] }
        ],
        "barTranslateLine": { "items": ["故事书=28", "科技书=28+15", "总共=43"] },
        "neriageErrors": [
          { "answer": 13, "reason": "减法错", "fix": "科技书比故事书多15本，应该用加法：28+15=43" }
        ],
        "variants": []
      },
      {
        "id": "2B-BM-03",
        "scene": "树上有15只鸟，又飞来8只。现在树上一共有多少只鸟？",
        "question": "一共有多少只鸟？",
        "formula": "15 + 8 = ?",
        "answer": 23,
        "choices": [23, 21, 25, 7],
        "visualType": "barModelTranslate",
        "visualData": {
          "total": 23,
          "parts": [
            { "label": "原来", "val": 15, "color": "#00A896" },
            { "label": "飞来", "val": 8, "color": "#F5B800" }
          ]
        },
        "knowledge": "Bar Model入门·合并",
        "difficulty": 1,
        "hint": "两条条形拼在一起就是总数",
        "rmeChoices": [
          { "label": "画条形图", "desc": "画两条条形表示原来和飞来的", "correct": true },
          { "label": "列算式", "desc": "15+8=23", "correct": true },
          { "label": "画图", "desc": "画15只鸟再加8只", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "总条形被分成了几段？每段表示什么？", "keywords": ["两段","原来","飞来","部分","整体"] },
          { "type": "compare", "q": "如果飞来10只而不是8只，总数会变大还是变小？", "keywords": ["变大","更多","增加","更长","更多只"] }
        ],
        "barTranslateLine": { "items": ["原来=15", "飞来=8", "总共=15+8=23"] },
        "neriageErrors": [
          { "answer": 7, "reason": "减法错", "fix": "飞来是增加，应该用加法：15+8=23" }
        ],
        "variants": []
      }
    ],
    "unitProgress": {
      "表内乘法": 0,
      "表内除法": 0,
      "万以内数的认识": 0,
      "克和千克": 0,
      "图形的运动": 0,
      "混合运算": 0,
      "有余数的除法": 0,
      "数学广角": 0
    }
  };
