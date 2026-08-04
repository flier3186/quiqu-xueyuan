window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['6b'] = {
    "title": "六年级下册·圆柱圆锥与比例",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "units": [
      {
        "name": "负数",
        "level": "locked",
        "children": [
          {
            "name": "负数的认识",
            "level": "locked"
          },
          {
            "name": "数轴表示",
            "level": "locked"
          }
        ]
      },
      {
        "name": "百分数综合应用",
        "level": "locked",
        "children": [
          {
            "name": "折扣成数",
            "level": "locked"
          },
          {
            "name": "税率利率",
            "level": "locked"
          },
          {
            "name": "购物方案",
            "level": "locked"
          }
        ]
      },
      {
        "name": "圆柱与圆锥",
        "level": "locked",
        "children": [
          {
            "name": "圆柱认识",
            "level": "locked"
          },
          {
            "name": "圆柱表面积",
            "level": "locked"
          },
          {
            "name": "圆柱体积",
            "level": "locked"
          },
          {
            "name": "圆锥认识",
            "level": "locked"
          },
          {
            "name": "圆锥体积",
            "level": "locked"
          }
        ]
      },
      {
        "name": "比例",
        "level": "locked",
        "children": [
          {
            "name": "比例的意义",
            "level": "locked"
          },
          {
            "name": "基本性质",
            "level": "locked"
          },
          {
            "name": "解比例",
            "level": "locked"
          },
          {
            "name": "正比例",
            "level": "locked"
          },
          {
            "name": "反比例",
            "level": "locked"
          }
        ]
      },
      {
        "name": "比例尺和图形变换",
        "level": "locked",
        "children": [
          {
            "name": "比例尺",
            "level": "locked"
          },
          {
            "name": "求图上实际距离",
            "level": "locked"
          },
          {
            "name": "放大与缩小",
            "level": "locked"
          }
        ]
      },
      {
        "name": "用比例解决问题",
        "level": "locked",
        "children": [
          {
            "name": "正比例应用",
            "level": "locked"
          },
          {
            "name": "反比例应用",
            "level": "locked"
          }
        ]
      },
      {
        "name": "数学广角",
        "level": "locked",
        "children": [
          {
            "name": "鸽巢问题",
            "level": "locked"
          }
        ]
      },
      {
        "name": "总复习",
        "level": "locked",
        "children": [
          {
            "name": "数与代数",
            "level": "locked"
          },
          {
            "name": "图形与几何",
            "level": "locked"
          },
          {
            "name": "统计与概率",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "scene": "小红看温度计，零上5度记作+5，零下3度记作多少？",
        "question": "零下3度记作多少度？（填-3选1，填3选2）",
        "formula": "零下3°→?（1:-3 / 2:3）",
        "answer": 1,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": -5,
          "end": 5,
          "points": [
            {
              "pos": -3,
              "label": "-3°",
              "color": "#00A896"
            },
            {
              "pos": 5,
              "label": "+5°",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            -5,
            5
          ]
        },
        "knowledge": "负数的认识",
        "difficulty": 1,
        "hint": "0是分界点负号不能省",
        "variants": [
          {
            "question": "零下10度记作？（1:-10/2:10）",
            "formula": "零下10°→?",
            "answer": 1,
            "hint": "负数"
          },
          {
            "question": "零上8度记作？（1:+8/2:-8）",
            "formula": "零上8°→?",
            "answer": 1,
            "hint": "正数"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "零下3度怎么记",
              "零上5度怎么记",
              "温度计怎么用",
              "3度是冷是热"
            ],
            "answer": "零下3度怎么记",
            "explain": "题目说「零上5度记作+5，零下3度记作多少」，问的是零下3度怎么用数字记下来"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "0是分界点，零下用负号",
              "3比5小",
              "零上用正号，零下也用正号",
              "温度计只有红色"
            ],
            "answer": "0是分界点，零下用负号",
            "explain": "温度计上0度是分界点，零上记作正数（+5），零下要记作负数，负号不能省略"
          },
          {
            "q": "🧩 用什么方法表示零下3度？",
            "choices": [
              "写成 -3",
              "写成 3",
              "写成 +3",
              "写成 0"
            ],
            "answer": "写成 -3",
            "explain": "零下的温度用负数表示，零下3度记作 -3，负号表示「零下」"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 数轴/温度计结构",
            "text": "数轴上0是原点，0的右边是正数（+5），0的左边是负数。-3在0的左边3格处，表示零下3度",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "正数和负数以0为界：大于0的是正数（+5），小于0的是负数（-3）。负号「-」不能省，省了就变成正数了",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "生活中很多量都有「相反方向」：零上零下、赚钱亏钱、上升下降。用正负数就能区分：一种用正数，相反的就用负数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红在数轴上标出-2、0、3三个数。她发现0的左边和右边不一样。",
        "question": "数轴上0的左边是什么数？（正数填1，负数填2）",
        "formula": "0左边→?（1正/2负）",
        "answer": 2,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": -3,
          "end": 4,
          "points": [
            {
              "pos": -2,
              "label": "-2",
              "color": "#00A896"
            },
            {
              "pos": 0,
              "label": "0",
              "color": "#F5B800"
            },
            {
              "pos": 3,
              "label": "3",
              "color": "#FB923C"
            }
          ],
          "highlight": [
            -3,
            4
          ]
        },
        "knowledge": "在直线上表示正数、0、负数",
        "difficulty": 2,
        "hint": "0右正左负",
        "variants": [
          {
            "question": "数轴上0的右边是？（1正2负）",
            "formula": "0右→?",
            "answer": 1,
            "hint": "右边正"
          },
          {
            "question": "-3在0的哪边？（1左2右）",
            "formula": "-3→?",
            "answer": 1,
            "hint": "负数在左"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "0的左边是什么数",
              "0的右边是什么数",
              "-2在哪儿",
              "3比-2大多少"
            ],
            "answer": "0的左边是什么数",
            "explain": "题目说「数轴上标出-2、0、3，0的左边和右边不一样」，问的是0的左边是什么数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "0是原点，左负右正",
              "0的左边是正数",
              "-2在0的右边",
              "3在0的左边"
            ],
            "answer": "0是原点，左负右正",
            "explain": "数轴上0是原点，规定右边为正方向，所以0的右边是正数，0的左边是负数"
          },
          {
            "q": "🧩 0的左边是什么数？",
            "choices": [
              "负数",
              "正数",
              "0",
              "可能是正也可能是负"
            ],
            "answer": "负数",
            "explain": "数轴上0的左边表示负数，-2就在0的左边。记住口诀：0右正、左负"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 数轴结构",
            "text": "数轴从左到右：-2（左）→ 0（中间）→ 3（右）。0是分界点，左边都是负数，右边都是正数",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "数轴三要素：原点（0）、正方向（向右）、单位长度。规定了正方向，相反方向就是负方向",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "所有有理数都能在数轴上找到位置：正数在0右边，负数在0左边，0本身既不是正数也不是负数",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "商场搞活动，一件衣服原价400元，先打八折再满300减50。小红算实付多少元。",
        "question": "400×80%-50 = ?元",
        "formula": "400×0.8-50=?",
        "answer": 270,
        "choices": [
          270,
          320,
          350,
          280
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 400,
          "parts": [
            {
              "label": "打折后320",
              "val": 320,
              "color": "#00A896"
            },
            {
              "label": "优惠80",
              "val": 80,
              "color": "#FB923C"
            }
          ]
        },
        "knowledge": "百分数综合应用（折扣成数税率利率购物方案）",
        "difficulty": 3,
        "hint": "先打折再满减",
        "variants": [
          {
            "question": "500打七折再满200减30实付？",
            "formula": "500×0.7-30=?",
            "answer": 320,
            "hint": "先折后减"
          },
          {
            "question": "300打九折实付？",
            "formula": "300×0.9=?",
            "answer": 270,
            "hint": "只打折"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "实际付多少元",
              "原价多少元",
              "打折省了多少元",
              "满减省了多少元"
            ],
            "answer": "实际付多少元",
            "explain": "题目说「原价400元，先打八折再满300减50，算实付多少元」，求的是最后实际付的钱"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "原价400，打八折后320，满300减50",
              "原价400，减50剩350",
              "打八折就是减80元",
              "满300减50就是打五折"
            ],
            "answer": "原价400，打八折后320，满300减50",
            "explain": "原价400元，八折就是400×0.8=320元；满300减50，因为320超过300所以再减50"
          },
          {
            "q": "🧩 用什么方法计算实付？",
            "choices": [
              "先乘（打折）再减（满减）",
              "先减再乘",
              "只做减法",
              "只做乘法"
            ],
            "answer": "先乘（打折）再减（满减）",
            "explain": "第一步打折：400×0.8=320；第二步满减：320-50=270元。先折后减"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 条形模型",
            "text": "条形图分两段：第一段「打折后320元」（原价400的八折），第二段「优惠80元」（打折少付的）。实付=320-50=270元",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "打折=原价×折扣（八折=×0.8）；满减=达到门槛后减固定金额。两种优惠叠加：实付=原价×折扣-满减金额",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "购物时要算「折上减」：先按折扣算折后价，再看是否满足满减条件。比较不同方案时，算出每种实付价选最省的",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红观察一个易拉罐。老师问她圆柱有几个面。",
        "question": "圆柱有几个面？",
        "formula": "圆柱面数=?",
        "answer": 3,
        "choices": [
          3,
          2,
          4,
          5
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cylinder",
          "params": {}
        },
        "knowledge": "圆柱的认识",
        "difficulty": 1,
        "hint": "两个底面+一个侧面=3个面",
        "variants": [
          {
            "question": "圆柱侧面展开是什么形？（1长方形2三角形）",
            "formula": "侧面→?",
            "answer": 1,
            "hint": "展开是长方形"
          },
          {
            "question": "圆柱两个底面是什么形？（1圆2正方形）",
            "formula": "底面→?",
            "answer": 1,
            "hint": "底面是圆"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "圆柱有几个面",
              "圆柱有多高",
              "圆柱是什么颜色",
              "圆柱怎么用"
            ],
            "answer": "圆柱有几个面",
            "explain": "题目说「观察一个易拉罐，圆柱有几个面」，问的是圆柱由几个面组成"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "圆柱有上下两个底面+一个侧面",
              "圆柱只有一个面",
              "圆柱有四个面",
              "圆柱没有底面"
            ],
            "answer": "圆柱有上下两个底面+一个侧面",
            "explain": "圆柱上下各有一个圆形的底面（两个底面完全相同），侧面是一个曲面"
          },
          {
            "q": "🧩 圆柱一共有几个面？",
            "choices": [
              "3个",
              "2个",
              "4个",
              "5个"
            ],
            "answer": "3个",
            "explain": "2个底面 + 1个侧面 = 3个面"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 立体图形结构",
            "text": "圆柱像易拉罐：上下两个圆形底面（一样大），中间一个弯曲的侧面。展开后侧面是个长方形",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "圆柱的面=底面+底面+侧面=2+1=3个。两个底面是相同的圆，侧面展开是长方形（长=底面周长，宽=高）",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "数立体图形的面：圆柱3个面，圆锥2个面，长方体6个面。面可以是平的（底面）也可以是曲的（侧面）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个圆柱底面半径2cm高5cm。小红算表面积（π取3.14）。",
        "question": "S表 = 2×3.14×2×(2+5) = ?",
        "formula": "2πr(r+h)=2×3.14×2×7",
        "answer": 87.92,
        "choices": [
          87.92,
          87.9,
          62.8,
          43.96
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cylinder",
          "params": {
            "radius": 2,
            "height": 5
          }
        },
        "knowledge": "圆柱的表面积",
        "difficulty": 3,
        "hint": "S表=2πr²+2πrh=2πr(r+h)",
        "variants": [
          {
            "question": "半径3高4表面积？",
            "formula": "2×3.14×3×7=?",
            "answer": 131.88,
            "hint": "2πr(r+h)"
          },
          {
            "question": "半径1高10表面积？",
            "formula": "2×3.14×1×11=?",
            "answer": 69.08,
            "hint": "2πr(r+h)"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "圆柱的表面积",
              "圆柱的体积",
              "圆柱的底面积",
              "圆柱的高"
            ],
            "answer": "圆柱的表面积",
            "explain": "题目说「底面半径2cm高5cm，算表面积」，求的是圆柱表面的总面积"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "半径r=2，高h=5，公式S表=2πr(r+h)",
              "半径r=5，高h=2",
              "只有高5cm",
              "只有半径2cm"
            ],
            "answer": "半径r=2，高h=5，公式S表=2πr(r+h)",
            "explain": "半径2cm，高5cm，表面积=2个底面积+侧面积=2πr²+2πrh=2πr(r+h)"
          },
          {
            "q": "🧩 用什么方法计算表面积？",
            "choices": [
              "代入公式 2×3.14×2×(2+5)",
              "用 3.14×2×5",
              "用 2×3.14×2",
              "用 3.14×2²"
            ],
            "answer": "代入公式 2×3.14×2×(2+5)",
            "explain": "S表=2πr(r+h)=2×3.14×2×(2+5)=2×3.14×2×7=87.92cm²"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 展开图结构",
            "text": "圆柱展开：上下两个圆（底面，半径2）+ 中间一个长方形（侧面，长=2πr=12.56，宽=高5）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "表面积=侧面积+2×底面积。侧面积=底面周长×高=2πr×h；底面积=πr²。合并：S=2πrh+2πr²=2πr(r+h)",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "求立体图形表面积=把所有面的面积加起来。圆柱关键是「侧面展开是长方形」，长=底面周长，宽=高",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个圆柱底面半径3cm高10cm。小红算体积（π取3.14）。",
        "question": "V = 3.14×3²×10 = ?",
        "formula": "πr²h=3.14×9×10",
        "answer": 282.6,
        "choices": [
          282.6,
          282,
          28.26,
          314
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cylinder",
          "params": {
            "radius": 3,
            "height": 10
          }
        },
        "knowledge": "圆柱的体积",
        "difficulty": 2,
        "hint": "V=Sh=πr²h",
        "variants": [
          {
            "question": "半径2高5体积？",
            "formula": "3.14×4×5=?",
            "answer": 62.8,
            "hint": "πr²h"
          },
          {
            "question": "半径4高3体积？",
            "formula": "3.14×16×3=?",
            "answer": 150.72,
            "hint": "πr²h"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "圆柱的体积",
              "圆柱的表面积",
              "圆柱的底面积",
              "圆柱的侧面积"
            ],
            "answer": "圆柱的体积",
            "explain": "题目说「底面半径3cm高10cm，算体积」，求的是圆柱内部空间的大小"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "半径r=3，高h=10，公式V=πr²h",
              "半径r=10，高h=3",
              "只有底面积",
              "只有高"
            ],
            "answer": "半径r=3，高h=10，公式V=πr²h",
            "explain": "半径3cm，高10cm，体积=底面积×高=πr²×h"
          },
          {
            "q": "🧩 用什么方法计算体积？",
            "choices": [
              "代入公式 3.14×3²×10",
              "用 3.14×3×10",
              "用 2×3.14×3×10",
              "用 3.14×3²"
            ],
            "answer": "代入公式 3.14×3²×10",
            "explain": "V=πr²h=3.14×3²×10=3.14×9×10=282.6cm³"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 割补动画结构",
            "text": "圆柱可以切拼成长方体：底面圆切成扇形拼成近似长方形，圆柱变成「底面是长方形、高不变」的长方体",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "圆柱体积=底面积×高=πr²×h。切拼成长方体后，长方体体积=底面积×高，所以圆柱也是底面积×高",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "所有「柱体」（圆柱、长方体、棱柱）体积都=底面积×高。关键是找到底面积和高",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红观察一个圆锥模型。老师问她圆锥有几个面。",
        "question": "圆锥有几个面？",
        "formula": "圆锥面数=?",
        "answer": 2,
        "choices": [
          2,
          1,
          3,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cone",
          "params": {}
        },
        "knowledge": "圆锥的认识",
        "difficulty": 1,
        "hint": "一个底面+一个侧面=2个面",
        "variants": [
          {
            "question": "圆锥的底面是什么形？（1圆2正方形）",
            "formula": "底面→?",
            "answer": 1,
            "hint": "底面是圆"
          },
          {
            "question": "圆锥有几个顶点？",
            "formula": "顶点=?",
            "answer": 1,
            "hint": "一个顶点"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "圆锥有几个面",
              "圆锥有多高",
              "圆锥是什么颜色",
              "圆锥怎么转出来"
            ],
            "answer": "圆锥有几个面",
            "explain": "题目说「观察一个圆锥模型，圆锥有几个面」，问的是圆锥由几个面组成"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "圆锥有一个底面+一个侧面",
              "圆锥有两个底面",
              "圆锥没有侧面",
              "圆锥有四个面"
            ],
            "answer": "圆锥有一个底面+一个侧面",
            "explain": "圆锥下面有一个圆形底面，侧面是一个曲面（展开是扇形），还有一个尖尖的顶点"
          },
          {
            "q": "🧩 圆锥一共有几个面？",
            "choices": [
              "2个",
              "1个",
              "3个",
              "4个"
            ],
            "answer": "2个",
            "explain": "1个底面 + 1个侧面 = 2个面"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 立体图形结构",
            "text": "圆锥像冰淇淋蛋筒：下面一个圆形底面，侧面是曲面（展开是扇形），最上面一个尖尖的顶点",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "圆锥的面=底面+侧面=1+1=2个。底面是圆，侧面展开是扇形。高=顶点到底面圆心的距离（藏在内部）",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "圆柱3个面（2底+1侧），圆锥2个面（1底+1侧）。圆锥比圆柱少一个底面，因为上面是尖的顶点",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一个圆锥底面积12cm²高6cm。小红算体积。",
        "question": "V = 1/3 × 12 × 6 = ?",
        "formula": "V=1/3Sh=1/3×12×6",
        "answer": 24,
        "choices": [
          24,
          72,
          12,
          36
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "cone",
          "params": {
            "base": 12,
            "height": 6
          }
        },
        "knowledge": "圆锥的体积",
        "difficulty": 2,
        "hint": "V=1/3Sh",
        "variants": [
          {
            "question": "底9高6圆锥体积？",
            "formula": "1/3×9×6=?",
            "answer": 18,
            "hint": "1/3Sh"
          },
          {
            "question": "底10高9圆锥体积？",
            "formula": "1/3×10×9=?",
            "answer": 30,
            "hint": "1/3Sh"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "圆锥的体积",
              "圆锥的表面积",
              "圆锥的底面积",
              "圆锥的高"
            ],
            "answer": "圆锥的体积",
            "explain": "题目说「底面积12cm²高6cm，算体积」，求的是圆锥内部空间的大小"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "底面积S=12，高h=6，公式V=1/3×S×h",
              "底面积S=6，高h=12",
              "只有底面积",
              "只有高"
            ],
            "answer": "底面积S=12，高h=6，公式V=1/3×S×h",
            "explain": "底面积12cm²，高6cm。圆锥体积=1/3×底面积×高，比等底等高的圆柱少"
          },
          {
            "q": "🧩 用什么方法计算圆锥体积？",
            "choices": [
              "代入公式 1/3×12×6",
              "用 12×6",
              "用 1/3×12",
              "用 12+6"
            ],
            "answer": "代入公式 1/3×12×6",
            "explain": "V=1/3×S×h=1/3×12×6=24cm³。别忘了除以3！"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 实验对比图",
            "text": "等底等高的圆柱和圆锥：把圆锥装满沙子倒进圆柱，正好3次倒满。说明圆锥体积=圆柱的1/3",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "圆锥体积=1/3×底面积×高=1/3Sh。等底等高时，圆柱体积是圆锥的3倍，圆锥是圆柱的1/3",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "柱体体积=Sh，锥体体积=1/3Sh。锥体（圆锥、棱锥）体积都是等底等高柱体的1/3",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红发现2:3和4:6的比值相等。老师说可以写成比例2:3=4:6。",
        "question": "2:3=4: ?，问号是几？",
        "formula": "2:3 = 4:?",
        "answer": 6,
        "choices": [
          6,
          3,
          4,
          8
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 6,
          "points": [
            {
              "pos": 2,
              "label": "2",
              "color": "#00A896"
            },
            {
              "pos": 3,
              "label": "3",
              "color": "#F5B800"
            },
            {
              "pos": 4,
              "label": "4",
              "color": "#FB923C"
            },
            {
              "pos": 6,
              "label": "6",
              "color": "#E8A0BF"
            }
          ],
          "highlight": [
            0,
            6
          ]
        },
        "knowledge": "比例的意义",
        "difficulty": 2,
        "hint": "两个比比值相等就是比例",
        "variants": [
          {
            "question": "1:4=2:?",
            "formula": "1:4=2:?",
            "answer": 8,
            "hint": "比值相等"
          },
          {
            "question": "3:5=?:10",
            "formula": "3:5=?:10",
            "answer": 6,
            "hint": "比值相等"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "问号处填几",
              "2:3等于多少",
              "4:6等于多少",
              "比值是几"
            ],
            "answer": "问号处填几",
            "explain": "题目说「2:3=4:?，比值相等」，问的是问号处应该填几"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "2:3和4:?比值相等，两个比组成比例",
              "2:3的比值是2",
              "4:?的比值是4",
              "两个比不相等"
            ],
            "answer": "2:3和4:?比值相等，两个比组成比例",
            "explain": "比例就是两个比值相等的比。2:3=2/3，所以4:?的比值也要等于2/3"
          },
          {
            "q": "🧩 用什么方法求问号？",
            "choices": [
              "比值相等：2/3=4/?→?=6",
              "直接猜一个数",
              "2+4=6所以填6",
              "3+4=7所以填7"
            ],
            "answer": "比值相等：2/3=4/?→?=6",
            "explain": "2:3=2÷3=2/3，4:6=4÷6=2/3，比值相等，所以?=6"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 数轴对比",
            "text": "数轴上标出2、3、4、6：2到3的距离和4到6的距离成比例。2:3=4:6，两个比相等",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "比例=两个比值相等的比。2:3的比值=2/3，4:6的比值=4/6=2/3，相等所以2:3=4:6是比例",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "判断能否组成比例：算两个比的比值，相等就能组成比例。比值=前项÷后项",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师告诉小红比例的内项积等于外项积。2:3=4:6中内项是3和4。",
        "question": "内项积 3×4 = ?",
        "formula": "3×4=?",
        "answer": 12,
        "choices": [
          12,
          6,
          8,
          18
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 12,
          "points": [
            {
              "pos": 6,
              "label": "外项2×6=12",
              "color": "#00A896"
            },
            {
              "pos": 12,
              "label": "内项3×4=12",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            12
          ]
        },
        "knowledge": "比例的基本性质",
        "difficulty": 2,
        "hint": "内项积=外项积",
        "variants": [
          {
            "question": "3:4=6:8中外项积3×8=?",
            "formula": "3×8=?",
            "answer": 24,
            "hint": "外项积"
          },
          {
            "question": "2:5=4:10中内项积5×4=?",
            "formula": "5×4=?",
            "answer": 20,
            "hint": "内项积"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "内项积是多少",
              "外项积是多少",
              "比例是多少",
              "比值是多少"
            ],
            "answer": "内项积是多少",
            "explain": "题目说「2:3=4:6中内项是3和4」，问的是内项积3×4等于多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "内项是3和4，外项是2和6",
              "内项是2和6",
              "外项是3和4",
              "所有数都是内项"
            ],
            "answer": "内项是3和4，外项是2和6",
            "explain": "在比例a:b=c:d中，两端的a和d是外项，中间的b和c是内项。所以2:3=4:6中外项是2和6，内项是3和4"
          },
          {
            "q": "🧩 用什么方法计算内项积？",
            "choices": [
              "乘法 3×4",
              "加法 3+4",
              "减法 4-3",
              "除法 4÷3"
            ],
            "answer": "乘法 3×4",
            "explain": "内项积=内项相乘=3×4=12。外项积=2×6=12。两个积相等！"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 比例式标注",
            "text": "2:3=4:6 中，2和6在两端（外项），3和4在中间（内项）。交叉相乘：2×6=12，3×4=12，相等",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "比例基本性质：内项积=外项积。在a:b=c:d中，b×c=a×d（交叉相乘相等）",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "用比例基本性质可以解比例：已知三项求第四项，交叉相乘变成方程再解。这是解比例的核心方法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红解比例 x:4=3:6。她用基本性质变成6x=4×3。",
        "question": "6x=12，x=?",
        "formula": "6x=12→x=?",
        "answer": 2,
        "choices": [
          2,
          12,
          4,
          3
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 6,
          "points": [
            {
              "pos": 2,
              "label": "x=2",
              "color": "#00A896"
            },
            {
              "pos": 4,
              "label": "4",
              "color": "#F5B800"
            },
            {
              "pos": 6,
              "label": "6",
              "color": "#FB923C"
            }
          ],
          "highlight": [
            0,
            6
          ]
        },
        "knowledge": "解比例",
        "difficulty": 2,
        "hint": "内项积=外项积再解方程",
        "variants": [
          {
            "question": "x:5=6:10，x=?",
            "formula": "10x=30→x=?",
            "answer": 3,
            "hint": "先乘再除"
          },
          {
            "question": "x:3=8:12，x=?",
            "formula": "12x=24→x=?",
            "answer": 2,
            "hint": "先乘再除"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "x的值",
              "6的值",
              "12的值",
              "4的值"
            ],
            "answer": "x的值",
            "explain": "题目说「解比例x:4=3:6，变成6x=12」，问的是x等于多少"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "x:4=3:6，交叉相乘得6x=12",
              "x:4=3:6，x=4",
              "6x=12，x=12",
              "3:6=0.5"
            ],
            "answer": "x:4=3:6，交叉相乘得6x=12",
            "explain": "用比例基本性质：内项积=外项积，4×3=6×x，即6x=12"
          },
          {
            "q": "🧩 用什么方法求x？",
            "choices": [
              "除法 12÷6",
              "乘法 12×6",
              "加法 12+6",
              "减法 12-6"
            ],
            "answer": "除法 12÷6",
            "explain": "6x=12，两边同时除以6，x=12÷6=2"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 数轴标注",
            "text": "数轴上标出x=2、4、6：2:4=1:2，3:6=1:2，比值相等。x=2让两个比组成比例",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "解比例三步：①用基本性质交叉相乘变成方程 ②解方程求未知数 ③代回去检验比值是否相等",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "解比例就是利用「内项积=外项积」把比例变成方程，再用学过的解方程方法求解",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红买苹果单价5元/千克。买1千克5元2千克10元3千克15元。",
        "question": "总价÷数量=5（一定），这是什么比例？（正比例填1，反比例填2）",
        "formula": "比值一定→?（1正/2反）",
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
          "end": 15,
          "points": [
            {
              "pos": 5,
              "label": "1kg→5元",
              "color": "#00A896"
            },
            {
              "pos": 10,
              "label": "2kg→10元",
              "color": "#F5B800"
            },
            {
              "pos": 15,
              "label": "3kg→15元",
              "color": "#FB923C"
            }
          ],
          "highlight": [
            0,
            15
          ]
        },
        "knowledge": "正比例",
        "difficulty": 2,
        "hint": "比值一定正比例",
        "variants": [
          {
            "question": "速度60km/h路程和时间成？（1正2反）",
            "formula": "路程/时间=60→?",
            "answer": 1,
            "hint": "比值一定正比例"
          },
          {
            "question": "3个苹果12元5个20元成？（1正2反）",
            "formula": "总价/数量=4→?",
            "answer": 1,
            "hint": "比值一定正比例"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "判断是什么比例关系",
              "算总价是多少",
              "算数量是多少",
              "算单价是多少"
            ],
            "answer": "判断是什么比例关系",
            "explain": "题目说「买苹果单价5元/千克，总价÷数量=5（一定）」，问这是什么比例"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "总价÷数量=5（比值一定），1kg5元2kg10元3kg15元",
              "总价×数量=5",
              "数量越多总价越少",
              "单价在变化"
            ],
            "answer": "总价÷数量=5（比值一定），1kg5元2kg10元3kg15元",
            "explain": "单价5元/千克不变，总价÷数量=5。数量变总价也变，但比值（单价）不变"
          },
          {
            "q": "🧩 这是什么比例？",
            "choices": [
              "正比例（比值一定）",
              "反比例（乘积一定）",
              "不是比例",
              "无法判断"
            ],
            "answer": "正比例（比值一定）",
            "explain": "两个量的比值一定（不变），就是正比例。总价÷数量=单价（一定），所以成正比例"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 数轴/坐标系",
            "text": "数轴上标出1kg→5元、2kg→10元、3kg→15元。数量增加总价也增加，图像是过原点的直线（正比例图像）",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "正比例：y/x=k（一定）。两个量同增同减，比值不变。总价=单价×数量，单价一定时总价和数量成正比",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "判断正比例：算两个量的比值，如果比值一定（不变），就是正比例。图像是过原点的直线",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红做作业每天做4页要6天每天做3页要8天。总页数24不变。",
        "question": "每天页数×天数=24（一定），这是什么比例？（正比例填1，反比例填2）",
        "formula": "乘积一定→?（1正/2反）",
        "answer": 2,
        "choices": [
          1,
          2,
          3,
          0
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 8,
          "points": [
            {
              "pos": 3,
              "label": "3页×8天",
              "color": "#00A896"
            },
            {
              "pos": 4,
              "label": "4页×6天",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            8
          ]
        },
        "knowledge": "反比例",
        "difficulty": 2,
        "hint": "乘积一定反比例",
        "variants": [
          {
            "question": "速度和时间成反比速度40需3h速度60需？h",
            "formula": "40×3=60×?",
            "answer": 2,
            "hint": "乘积一定"
          },
          {
            "question": "每行20人排18行每行30排？行",
            "formula": "20×18=30×?",
            "answer": 12,
            "hint": "乘积一定"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "判断是什么比例关系",
              "算总页数是多少",
              "算天数是多少",
              "算每天页数是多少"
            ],
            "answer": "判断是什么比例关系",
            "explain": "题目说「每天4页6天，每天3页8天，每天页数×天数=24（一定）」，问这是什么比例"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每天页数×天数=24（乘积一定），4×6=24，3×8=24",
              "每天页数÷天数=24",
              "总页数在变化",
              "天数越多页数越多"
            ],
            "answer": "每天页数×天数=24（乘积一定），4×6=24，3×8=24",
            "explain": "总页数24不变，每天页数×天数=24。每天页数多则天数少，每天页数少则天数多"
          },
          {
            "q": "🧩 这是什么比例？",
            "choices": [
              "反比例（乘积一定）",
              "正比例（比值一定）",
              "不是比例",
              "无法判断"
            ],
            "answer": "反比例（乘积一定）",
            "explain": "两个量的乘积一定（不变），就是反比例。每天页数×天数=总页数（一定），所以成反比例"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 数轴/表格",
            "text": "数轴上标出3页×8天、4页×6天：每天页数增加，天数反而减少，但乘积都是24。一个变大另一个变小",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "反比例：x×y=k（一定）。两个量「此消彼长」，一个变大另一个变小，但乘积不变。图像是双曲线",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "判断反比例：算两个量的乘积，如果乘积一定（不变），就是反比例。正比例是比值一定，反比例是乘积一定",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "地图上比例尺是1:100000。小红想知道图上1cm表示实际多少米。",
        "question": "1cm × 100000 = ? cm = ? m",
        "formula": "1×100000=100000cm=?m",
        "answer": 1000,
        "choices": [
          1000,
          100,
          10000,
          100000
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 1000,
          "points": [
            {
              "pos": 1,
              "label": "图上1cm",
              "color": "#00A896"
            },
            {
              "pos": 1000,
              "label": "实际1000m",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            1000
          ]
        },
        "knowledge": "比例尺",
        "difficulty": 2,
        "hint": "图上距离:实际距离=比例尺",
        "variants": [
          {
            "question": "1:50000图上1cm实际？m",
            "formula": "1×50000=?m",
            "answer": 500,
            "hint": "换算"
          },
          {
            "question": "1:200000图上1cm实际？m",
            "formula": "1×200000=?m",
            "answer": 2000,
            "hint": "换算"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "图上1cm表示实际多少米",
              "比例尺是多大",
              "图上距离多少",
              "实际距离多少cm"
            ],
            "answer": "图上1cm表示实际多少米",
            "explain": "题目说「比例尺1:100000，图上1cm表示实际多少米」，求的是实际距离换算成米"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "比例尺1:100000，图上1cm",
              "比例尺1:1000，图上1m",
              "比例尺1:100，图上1cm",
              "图上1cm实际1m"
            ],
            "answer": "比例尺1:100000，图上1cm",
            "explain": "比例尺1:100000意思是图上1cm=实际100000cm。还要把cm换算成m"
          },
          {
            "q": "🧩 用什么方法算实际距离？",
            "choices": [
              "1×100000=100000cm=1000m",
              "1×1000=1000cm",
              "1×100=100m",
              "1×100000=100000m"
            ],
            "answer": "1×100000=100000cm=1000m",
            "explain": "实际距离=图上距离×比例尺分母=1×100000=100000cm，再换算100000cm÷100=1000m"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 地图示意图",
            "text": "数轴对比：图上1cm（小段）对应实际1000m（大段）。比例尺1:100000表示图上距离缩小了10万倍",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "比例尺=图上距离:实际距离。1:100000=图上1cm:实际100000cm。单位换算：1m=100cm，所以100000cm=1000m",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "比例尺三种表示：数值比例尺（1:100000）、线段比例尺（图上画一段表示实际多少）、文字比例尺。互相可以转换",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "比例尺1:50000，图上距离4cm。小红算实际距离多少米。",
        "question": "4 × 50000 = ? cm = ? m",
        "formula": "4×50000=200000cm=?m",
        "answer": 2000,
        "choices": [
          2000,
          200,
          20000,
          500
        ],
        "visualType": "numberLine",
        "visualData": {
          "start": 0,
          "end": 2000,
          "points": [
            {
              "pos": 4,
              "label": "图上4cm",
              "color": "#00A896"
            },
            {
              "pos": 2000,
              "label": "实际2000m",
              "color": "#F5B800"
            }
          ],
          "highlight": [
            0,
            2000
          ]
        },
        "knowledge": "用比例尺求图上或实际距离",
        "difficulty": 2,
        "hint": "实际=图上÷比例尺注意单位",
        "variants": [
          {
            "question": "1:20000图上3cm实际？m",
            "formula": "3×20000=?m",
            "answer": 600,
            "hint": "换算"
          },
          {
            "question": "1:100000图上5cm实际？m",
            "formula": "5×100000=?m",
            "answer": 5000,
            "hint": "换算"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "实际距离多少米",
              "图上距离多少cm",
              "比例尺是多大",
              "实际距离多少cm"
            ],
            "answer": "实际距离多少米",
            "explain": "题目说「比例尺1:50000，图上4cm，算实际距离多少米」，求的是实际距离换算成米"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "比例尺1:50000，图上4cm",
              "比例尺1:5000，图上4m",
              "比例尺1:500，图上4cm",
              "图上4cm实际4m"
            ],
            "answer": "比例尺1:50000，图上4cm",
            "explain": "比例尺1:50000意思是图上1cm=实际50000cm。图上4cm就是4×50000cm"
          },
          {
            "q": "🧩 用什么方法算实际距离？",
            "choices": [
              "4×50000=200000cm=2000m",
              "4×5000=20000cm",
              "4×500=2000cm",
              "4×50000=200000m"
            ],
            "answer": "4×50000=200000cm=2000m",
            "explain": "实际距离=图上距离×比例尺分母=4×50000=200000cm，再换算200000cm÷100=2000m"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 线段图",
            "text": "数轴对比：图上4cm（小段）对应实际2000m（大段）。图上距离很小，实际距离很大，因为比例尺缩小了5万倍",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "实际距离=图上距离÷比例尺（即图上距离×分母）。注意单位换算：cm÷100=m。4×50000=200000cm=2000m",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "图上距离、实际距离、比例尺三者知二求一：实际=图上÷比例尺，图上=实际×比例尺，比例尺=图上÷实际",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红把一个长方形按2:1放大。原长3cm放大后长几cm？",
        "question": "3 × 2 = ? cm",
        "formula": "3×2=?",
        "answer": 6,
        "choices": [
          6,
          3,
          1.5,
          9
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "rectangle",
          "params": {
            "scale": 2,
            "originalLength": 3
          }
        },
        "knowledge": "图形的放大与缩小",
        "difficulty": 2,
        "hint": "按比例放大形状不变",
        "variants": [
          {
            "question": "长4cm按1:2缩小后？cm",
            "formula": "4×1/2=?",
            "answer": 2,
            "hint": "缩小"
          },
          {
            "question": "长5cm按3:1放大后？cm",
            "formula": "5×3=?",
            "answer": 15,
            "hint": "放大"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "放大后的长是多少cm",
              "原来的长是多少cm",
              "放大几倍",
              "缩小后的长是多少"
            ],
            "answer": "放大后的长是多少cm",
            "explain": "题目说「长方形按2:1放大，原长3cm，放大后长几cm」，求的是放大后的长度"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "原长3cm，放大比2:1",
              "原长2cm，放大比3:1",
              "原长3cm，缩小比1:2",
              "原长6cm，放大比1:2"
            ],
            "answer": "原长3cm，放大比2:1",
            "explain": "2:1放大意思是新图形是原来的2倍大。原长3cm，放大后=3×2"
          },
          {
            "q": "🧩 用什么方法算放大后的长？",
            "choices": [
              "乘法 3×2",
              "加法 3+2",
              "除法 3÷2",
              "减法 3-2"
            ],
            "answer": "乘法 3×2",
            "explain": "按2:1放大，每条边都乘2。放大后长=3×2=6cm。形状不变，大小变大"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 网格图",
            "text": "网格图上：原图长3格，放大后长6格（2倍）。每条边都放大相同倍数，形状不变只是变大了",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "按k:1放大，每条边×k；按1:k缩小，每条边÷k。放大缩小后形状不变（角度不变），大小变（边长按比例变）",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "图形放大缩小：每条边按相同比例变化。放大比>1（变大），缩小比<1（变小）。形状不变，对应角相等",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "小红买3本笔记本花15元。她算买5本同样的笔记本花多少元。",
        "question": "15÷3×5 = ?元",
        "formula": "15÷3×5=?",
        "answer": 25,
        "choices": [
          25,
          15,
          30,
          20
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 25,
          "parts": [
            {
              "label": "3本15元",
              "val": 15,
              "color": "#00A896"
            },
            {
              "label": "2本10元",
              "val": 10,
              "color": "#F5B800"
            }
          ]
        },
        "knowledge": "用正比例解决问题",
        "difficulty": 3,
        "hint": "单价一定总价和数量成正比",
        "variants": [
          {
            "question": "4本20元7本？元",
            "formula": "20÷4×7=?",
            "answer": 35,
            "hint": "正比例"
          },
          {
            "question": "2本10元6本？元",
            "formula": "10÷2×6=?",
            "answer": 30,
            "hint": "正比例"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "5本笔记本花多少元",
              "3本笔记本花多少元",
              "每本多少元",
              "一共多少本"
            ],
            "answer": "5本笔记本花多少元",
            "explain": "题目说「3本15元，买5本花多少元」，求的是5本的总价"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "3本15元，单价一定（正比例）",
              "3本15元，单价在变",
              "5本15元",
              "3本5元"
            ],
            "answer": "3本15元，单价一定（正比例）",
            "explain": "3本15元，单价=15÷3=5元/本。单价不变，买得越多花钱越多，是正比例关系"
          },
          {
            "q": "🧩 用什么方法算5本的总价？",
            "choices": [
              "先求单价15÷3=5，再求5本5×5=25",
              "用 15+5=20",
              "用 15×5=75",
              "用 15-5=10"
            ],
            "answer": "先求单价15÷3=5，再求5本5×5=25",
            "explain": "方法一：先求单价15÷3=5元，再求5本5×5=25元。也可以列比例3:15=5:?→?=25"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 条形模型",
            "text": "条形图分两段：第一段「3本15元」，第二段「2本10元」。合起来5本=15+10=25元。每本5元不变",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "正比例应用：单价一定，总价和数量成正比。15÷3=5（单价），5×5=25（5本总价）。或列比例3:15=5:x",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "正比例解题：先判断是否正比例（比值一定），再列比例式求解。关键是找到不变的比值（单价、速度等）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "一批货物每天运8吨要6天。小红算每天运12吨要几天。",
        "question": "8×6÷12 = ?天",
        "formula": "8×6÷12=?",
        "answer": 4,
        "choices": [
          4,
          6,
          8,
          12
        ],
        "visualType": "barModel",
        "visualData": {
          "total": 48,
          "parts": [
            {
              "label": "总量48吨",
              "val": 48,
              "color": "#00A896"
            }
          ]
        },
        "knowledge": "用反比例解决问题",
        "difficulty": 3,
        "hint": "总量一定效率和天数成反比",
        "variants": [
          {
            "question": "每天6吨要8天每天8吨要？天",
            "formula": "6×8÷8=?",
            "answer": 6,
            "hint": "反比例"
          },
          {
            "question": "每天10吨要6天每天12吨要？天",
            "formula": "10×6÷12=?",
            "answer": 5,
            "hint": "反比例"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "每天运12吨要几天",
              "每天运8吨要几天",
              "一共多少吨",
              "每天运多少吨"
            ],
            "answer": "每天运12吨要几天",
            "explain": "题目说「每天运8吨要6天，每天运12吨要几天」，求的是效率改变后的天数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "每天8吨要6天，总量一定（反比例）",
              "每天8吨要6天，单价在变",
              "每天12吨要6天",
              "总量在变化"
            ],
            "answer": "每天8吨要6天，总量一定（反比例）",
            "explain": "总量=8×6=48吨不变。每天运得多则天数少，每天运得少则天数多，是反比例关系"
          },
          {
            "q": "🧩 用什么方法算天数？",
            "choices": [
              "先求总量8×6=48，再求天数48÷12=4",
              "用 8+6=14",
              "用 8×12=96",
              "用 12-6=6"
            ],
            "answer": "先求总量8×6=48，再求天数48÷12=4",
            "explain": "方法一：先求总量8×6=48吨，再求天数48÷12=4天。也可以列比例8×6=12×?→?=4"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 条形模型",
            "text": "条形图显示总量48吨不变。每天8吨分6天运完，每天12吨分4天运完。效率提高天数减少",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "反比例应用：总量一定，效率和天数成反比。8×6=12×?，交叉相乘求未知数。总量=效率×天数",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "反比例解题：先判断是否反比例（乘积一定），再列乘积等式求解。关键是找到不变的乘积（总量、路程等）",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "有4只鸽子飞进3个鸽巢。老师问至少有一个巢里有几只鸽子。",
        "question": "4÷3=1...1，至少一个巢有？只",
        "formula": "至少一个巢=?只",
        "answer": 2,
        "choices": [
          2,
          1,
          3,
          4
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "pigeonhole",
          "params": {
            "pigeons": 4,
            "holes": 3
          }
        },
        "knowledge": "鸽巢问题",
        "difficulty": 3,
        "hint": "n+1个物品放入n个巢至少一个巢有2个",
        "variants": [
          {
            "question": "5只鸽子4个巢至少一巢？只",
            "formula": "5÷4→?",
            "answer": 2,
            "hint": "至少2"
          },
          {
            "question": "7只鸽子3个巢至少一巢？只",
            "formula": "7÷3=2...1→?",
            "answer": 3,
            "hint": "至少3"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "至少一个巢里有几只鸽子",
              "一共几只鸽子",
              "一共有几个巢",
              "平均每个巢几只"
            ],
            "answer": "至少一个巢里有几只鸽子",
            "explain": "题目说「4只鸽子飞进3个鸽巢，至少一个巢里有几只」，求的是最少有一个巢里有几只"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "4只鸽子，3个鸽巢",
              "3只鸽子，4个鸽巢",
              "4只鸽子，4个鸽巢",
              "3只鸽子，3个鸽巢"
            ],
            "answer": "4只鸽子，3个鸽巢",
            "explain": "鸽子比鸽巢多1只（4-3=1），多的这至少会让某个巢多1只"
          },
          {
            "q": "🧩 用什么方法算至少几只？",
            "choices": [
              "4÷3=1余1，至少1+1=2只",
              "用 4-3=1只",
              "用 4+3=7只",
              "用 4×3=12只"
            ],
            "answer": "4÷3=1余1，至少1+1=2只",
            "explain": "平均分：4÷3=1余1。每个巢先放1只，剩下的1只无论放哪个巢，那个巢就有1+1=2只"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 抽屉图",
            "text": "3个鸽巢，4只鸽子。最均匀的放法：2+1+1=4，即一个巢2只，另两个巢各1只。所以至少有一个巢有2只",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "鸽巢原理：n+1只鸽子放进n个巢，至少有一个巢有2只。用除法：4÷3=1...1，至少=商+1=2",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "鸽巢原理通用公式：m只鸽子n个巢，至少一个巢有⌈m÷n⌉只（向上取整）。m=n+1时至少2只",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      },
      {
        "scene": "老师带小红复习小学数学。数的认识包括整数、小数、分数、百分数和负数，形成完整数系。",
        "question": "小学学过的数有几种？（整数、小数、分数、百分数、负数）",
        "formula": "数的种类=?种",
        "answer": 5,
        "choices": [
          5,
          3,
          4,
          6
        ],
        "visualType": "geometry",
        "visualData": {
          "shape": "knowledgeTree",
          "params": {
            "type": "number_system",
            "branches": [
              "整数",
              "小数",
              "分数",
              "百分数",
              "负数"
            ]
          }
        },
        "knowledge": "总复习（数的认识+运算+式与方程+比和比例+图形测量+图形运动+图形位置+统计概率）",
        "difficulty": 3,
        "hint": "整数小数分数百分数负数共5种",
        "variants": [
          {
            "question": "图形运动有几种？（平移旋转轴对称放大缩小）",
            "formula": "图形运动=?种",
            "answer": 4,
            "hint": "4种变换"
          },
          {
            "question": "统计图有几种？（条形折线扇形）",
            "formula": "统计图=?种",
            "answer": 3,
            "hint": "3种统计图"
          }
        ],
        "discoverySteps": [
          {
            "q": "📖 再读一遍场景，这道题要我们求什么？",
            "choices": [
              "小学学过几种数",
              "小学学过几种运算",
              "小学学过几种图形",
              "小学学过几种统计图"
            ],
            "answer": "小学学过几种数",
            "explain": "题目说「数的认识包括整数、小数、分数、百分数和负数」，问学过几种数"
          },
          {
            "q": "🔢 题目给了我们哪些关键信息？",
            "choices": [
              "整数、小数、分数、百分数、负数共5种",
              "整数、小数共2种",
              "整数、分数、百分数共3种",
              "只有整数和小数2种"
            ],
            "answer": "整数、小数、分数、百分数、负数共5种",
            "explain": "小学阶段学过的数：整数（1,2,3…）、小数（0.5）、分数（1/2）、百分数（50%）、负数（-3）"
          },
          {
            "q": "🧩 一共有几种数？",
            "choices": [
              "5种",
              "3种",
              "4种",
              "6种"
            ],
            "answer": "5种",
            "explain": "数一数：整数、小数、分数、百分数、负数，一共5种。它们组成完整的数系"
          }
        ],
        "explainLayers": [
          {
            "icon": "👀",
            "title": "看图 — 知识图谱",
            "text": "知识树状图：数的认识分5个分支——整数、小数、分数、百分数、负数。它们从简单到复杂，逐步扩展数系",
            "bg": "var(--teal-soft)",
            "color": "var(--teal)"
          },
          {
            "icon": "🧠",
            "title": "理解 — 数学关系",
            "text": "数系发展：整数→小数（分得更细）→分数（部分与整体）→百分数（特殊的分数）→负数（相反方向）。0是分界点",
            "bg": "var(--yellow-soft)",
            "color": "var(--yellow-700)"
          },
          {
            "icon": "🚀",
            "title": "推广 — 通用规律",
            "text": "小学数系完整链：从自然数到有理数。初中将进一步学习无理数、实数。每种数都有它的用途和表示方法",
            "bg": "var(--coral-soft)",
            "color": "var(--coral)"
          }
        ]
      }
    ],
    "knowledgeMap": [
      {
        "id": "6B-01",
        "name": "负数的认识",
        "concept": "0是分界点，正数>0>负数，负号不能省略",
        "prerequisite": "生活常识",
        "extends": "6B-02 数轴表示",
        "visualStrategy": "温度计/数轴",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "6B-02",
        "name": "在直线上表示正数、0、负数",
        "concept": "数轴以0为原点，右正左负",
        "prerequisite": "负数认识",
        "extends": "6B-09 比例意义",
        "visualStrategy": "数轴",
        "visualType": "numberLine",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6B-03",
        "name": "百分数综合应用（折扣成数税率利率购物方案）",
        "concept": "综合运用折扣满减税率利率做最优选择（合并6B-03~07）",
        "prerequisite": "六上·折扣+成数+税率+利率",
        "extends": "6B-20 总复习",
        "visualStrategy": "表格+场景图",
        "visualType": "barModel",
        "coreLiteracy": "应用意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6B-04",
        "name": "圆柱的认识",
        "concept": "底面是两个相同的圆，侧面是曲面，高是两底面距离",
        "prerequisite": "五下·长方体和正方体",
        "extends": "6B-05 圆柱表面积",
        "visualStrategy": "立体展开图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "6B-05",
        "name": "圆柱的表面积",
        "concept": "S表=2πr²+2πrh=2πr(r+h)",
        "prerequisite": "圆柱认识+六上·圆面积",
        "extends": "6B-06 圆柱体积",
        "visualStrategy": "展开图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6B-06",
        "name": "圆柱的体积",
        "concept": "V=Sh=πr²h，将圆柱切割拼成长方体推导",
        "prerequisite": "圆柱表面积+五下·体积",
        "extends": "6B-08 圆锥体积",
        "visualStrategy": "割补动画",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6B-07",
        "name": "圆锥的认识",
        "concept": "一个顶点、一个底面圆、一个侧面曲面，高是顶点到底面圆心",
        "prerequisite": "圆柱认识",
        "extends": "6B-08 圆锥体积",
        "visualStrategy": "立体图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 1,
        "isKeyTopic": false
      },
      {
        "id": "6B-08",
        "name": "圆锥的体积",
        "concept": "V=1/3Sh，等底等高圆锥体积=圆柱的1/3",
        "prerequisite": "圆柱体积",
        "extends": "6B-20 总复习",
        "visualStrategy": "实验对比图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6B-09",
        "name": "比例的意义",
        "concept": "表示两个比相等的式子，两个比比值相等",
        "prerequisite": "六上·比的意义",
        "extends": "6B-10 基本性质",
        "visualStrategy": "条形对比",
        "visualType": "numberLine",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6B-10",
        "name": "比例的基本性质",
        "concept": "内项积=外项积（交叉相乘相等）",
        "prerequisite": "比例的意义",
        "extends": "6B-11 解比例",
        "visualStrategy": "比例式标注图",
        "visualType": "numberLine",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6B-11",
        "name": "解比例",
        "concept": "利用比例基本性质",
        "prerequisite": "比例基本性质+五上·方程",
        "extends": "6B-12 正比例",
        "visualStrategy": "比例式→方程",
        "visualType": "numberLine",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6B-12",
        "name": "正比例",
        "concept": "y/x=k（一定），两个量比值不变，图像是过原点的直线",
        "prerequisite": "比例+六上·分数+五上·数对",
        "extends": "6B-13 反比例",
        "visualStrategy": "坐标系+线段图",
        "visualType": "numberLine",
        "coreLiteracy": "模型意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6B-13",
        "name": "反比例",
        "concept": "xy=k（一定），两个量乘积不变，图像是双曲线",
        "prerequisite": "正比例",
        "extends": "6B-14 比例尺",
        "visualStrategy": "坐标系+表格",
        "visualType": "numberLine",
        "coreLiteracy": "模型意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6B-14",
        "name": "比例尺",
        "concept": "图上距离:实际距离=比例尺，三种表达方式",
        "prerequisite": "六上·比+四上·求近似数",
        "extends": "6B-15 求距离",
        "visualStrategy": "地图示意图",
        "visualType": "numberLine",
        "coreLiteracy": "应用意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "6B-15",
        "name": "用比例尺求图上或实际距离",
        "concept": "实际=图上÷比例尺，注意单位换算",
        "prerequisite": "比例尺",
        "extends": "6B-16 放大缩小",
        "visualStrategy": "线段图",
        "visualType": "numberLine",
        "coreLiteracy": "应用意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6B-16",
        "name": "图形的放大与缩小",
        "concept": "按比例放大缩小，形状不变大小变",
        "prerequisite": "比例+五下·图形运动",
        "extends": "6B-17 正比例应用",
        "visualStrategy": "网格图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "6B-17",
        "name": "用正比例解决问题",
        "concept": "先判断是否正比例，再列比例式",
        "prerequisite": "正比例+六上·分数应用题",
        "extends": "6B-20 总复习",
        "visualStrategy": "表格+比例式",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6B-18",
        "name": "用反比例解决问题",
        "concept": "先判断是否反比例，再列乘积等式",
        "prerequisite": "反比例",
        "extends": "6B-20 总复习",
        "visualStrategy": "表格+等式",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "6B-19",
        "name": "鸽巢问题",
        "concept": "n+1只鸽子放进n个巢，至少一个巢≥2只",
        "prerequisite": "除法意义",
        "extends": "6B-20 总复习",
        "visualStrategy": "抽屉图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "6B-20",
        "name": "总复习（数与代数+图形与几何+统计概率）",
        "concept": "整数→小数→分数→百分数→负数形成完整数系；四则运算+运算定律；式与方程；比和比例；图形认识与测量；图形运动；图形与位置；统计与概率（合并6B-24~31，改知识图谱）",
        "prerequisite": "全部小学知识",
        "extends": "初中数学衔接",
        "visualStrategy": "知识图谱（树状图+对比表）",
        "visualType": "geometry",
        "coreLiteracy": "综合素养",
        "difficulty": 3,
        "isKeyTopic": true
      }
    ]
  };
