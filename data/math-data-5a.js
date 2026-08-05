window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["5a"] = {
    "title": "五年级上册·小数乘除法与多边形面积",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "units": [
        {
            "name": "小数乘法",
            "level": "locked",
            "children": [
                {
                    "name": "小数乘整数",
                    "level": "locked"
                },
                {
                    "name": "小数乘小数",
                    "level": "locked"
                },
                {
                    "name": "积的近似数",
                    "level": "locked"
                },
                {
                    "name": "运算定律推广",
                    "level": "locked"
                },
                {
                    "name": "解决问题",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "位置",
            "level": "locked",
            "children": [
                {
                    "name": "用数对确定位置",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "小数除法",
            "level": "locked",
            "children": [
                {
                    "name": "除数是整数",
                    "level": "locked"
                },
                {
                    "name": "除数是小数",
                    "level": "locked"
                },
                {
                    "name": "商的近似数",
                    "level": "locked"
                },
                {
                    "name": "循环小数",
                    "level": "locked"
                },
                {
                    "name": "解决问题",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "可能性",
            "level": "locked",
            "children": [
                {
                    "name": "确定性",
                    "level": "locked"
                },
                {
                    "name": "可能性大小",
                    "level": "locked"
                },
                {
                    "name": "公平规则",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "简易方程",
            "level": "locked",
            "children": [
                {
                    "name": "用字母表示数",
                    "level": "locked"
                },
                {
                    "name": "运算定律和公式",
                    "level": "locked"
                },
                {
                    "name": "方程的意义",
                    "level": "locked"
                },
                {
                    "name": "等式性质",
                    "level": "locked"
                },
                {
                    "name": "解方程",
                    "level": "locked"
                },
                {
                    "name": "ax=b型",
                    "level": "locked"
                },
                {
                    "name": "列方程解题",
                    "level": "locked"
                },
                {
                    "name": "复杂方程",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "多边形的面积",
            "level": "locked",
            "children": [
                {
                    "name": "平行四边形面积",
                    "level": "locked"
                },
                {
                    "name": "三角形面积",
                    "level": "locked"
                },
                {
                    "name": "梯形面积",
                    "level": "locked"
                },
                {
                    "name": "组合图形",
                    "level": "locked"
                },
                {
                    "name": "不规则图形估算",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "数学广角",
            "level": "locked",
            "children": [
                {
                    "name": "植树问题",
                    "level": "locked"
                }
            ]
        }
    ],
    "problems": [
        {
            "scene": "小红买西瓜，每千克3.5元，买了4千克。她算算要付多少元。",
            "question": "一共要付多少元？",
            "formula": "3.5 × 4 = ?",
            "answer": 14,
            "choices": [
                14,
                13.5,
                12,
                16
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 14,
                "parts": [
                    {
                        "label": "每千克3",
                        "val": 14,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "小数乘整数",
            "difficulty": 2,
            "hint": "先算35×4=140再点小数点",
            "variants": [
                {
                    "question": "2.8×5=?",
                    "formula": "2.8×5=?",
                    "answer": 14,
                    "hint": "28×5=140点一位"
                },
                {
                    "question": "1.5×6=?",
                    "formula": "1.5×6=?",
                    "answer": 9,
                    "hint": "15×6=90点一位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求一共要付多少元",
                        "求每千克多少元",
                        "求几千克",
                        "求单价"
                    ],
                    "answer": "求一共要付多少元",
                    "explain": "题目问买4千克西瓜一共要付多少元"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每千克3.5元，买4千克",
                        "每千克4元",
                        "买3.5千克",
                        "每千克3元"
                    ],
                    "answer": "每千克3.5元，买4千克",
                    "explain": "单价3.5元/千克，数量4千克"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：3.5×4=14",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法：3.5×4=14",
                    "explain": "单价×数量=总价，3.5×4=14元"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图显示4个3.5合起来14，即3.5×4=14",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "小数乘整数：先按整数乘35×4=140，因数有1位小数，积从右数1位点小数点=14",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "小数乘整数：①按整数乘法算②看因数有几位小数③积从右数几位点小数点（不够补0）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-001"
        },
        {
            "scene": "小亮房间长4.5米宽3.2米。他想算房间面积是多少平方米。",
            "question": "房间面积是多少平方米？",
            "formula": "4.5 × 3.2 = ?",
            "answer": 14.4,
            "choices": [
                14.4,
                15.4,
                13.4,
                144
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 4.5,
                "cols": 3.2,
                "color": "#00A896"
            },
            "knowledge": "小数乘小数",
            "difficulty": 3,
            "hint": "45×32=1440点两位",
            "variants": [
                {
                    "question": "2.5×0.4=?",
                    "formula": "2.5×0.4=?",
                    "answer": 1,
                    "hint": "25×4=100点两位"
                },
                {
                    "question": "1.2×0.8=?",
                    "formula": "1.2×0.8=?",
                    "answer": 0.96,
                    "hint": "12×8=96点两位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求房间面积是多少平方米",
                        "求房间周长",
                        "求房间长",
                        "求房间宽"
                    ],
                    "answer": "求房间面积是多少平方米",
                    "explain": "题目问房间面积是多少平方米"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "长4.5米宽3.2米",
                        "长4米宽3米",
                        "长5米宽3米",
                        "边长4.5米"
                    ],
                    "answer": "长4.5米宽3.2米",
                    "explain": "长方形房间长4.5米，宽3.2米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：4.5×3.2=14.4",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法：4.5×3.2=14.4",
                    "explain": "长方形面积=长×宽=4.5×3.2=14.4平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积模型4.5行3.2列，共4.5×3.2=14.4个小格",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "小数乘小数：先按整数45×32=1440，因数共2位小数，积从右数2位点小数点=14.4",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "小数乘小数：①按整数乘法算②看两个因数共有几位小数③积从右数几位点小数点（不够前面补0）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-002"
        },
        {
            "scene": "小红算出苹果总价是8.736元，保留两位小数。",
            "question": "8.736保留两位小数约是多少？",
            "formula": "8.736 ≈ ? (两位)",
            "answer": 8.74,
            "choices": [
                8.74,
                8.73,
                8.7,
                8.8
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 8.73,
                "end": 8.74,
                "points": [
                    {
                        "pos": 8.736,
                        "label": "8.736",
                        "color": "#00A896"
                    },
                    {
                        "pos": 8.74,
                        "label": "8.74",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    8.73,
                    8.74
                ]
            },
            "knowledge": "积的近似数",
            "difficulty": 2,
            "hint": "第三位6≥5进一",
            "variants": [
                {
                    "question": "3.214保留两位？",
                    "formula": "3.214≈?",
                    "answer": 3.21,
                    "hint": "4<5舍去"
                },
                {
                    "question": "5.678保留两位？",
                    "formula": "5.678≈?",
                    "answer": 5.68,
                    "hint": "8≥5进一"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求8.736保留两位小数约是多少",
                        "求8.736保留一位",
                        "求8.736保留整数",
                        "求8.736的整数部分"
                    ],
                    "answer": "求8.736保留两位小数约是多少",
                    "explain": "题目要把8.736保留两位小数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "8.736保留两位小数，看第三位6",
                        "8.736保留一位",
                        "8.736的整数部分",
                        "8.736的小数部分"
                    ],
                    "answer": "8.736保留两位小数，看第三位6",
                    "explain": "保留两位小数要看第三位小数（千分位）是6"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "四舍五入：第三位6≥5进一，8.736≈8.74",
                        "直接舍去",
                        "第三位3<5舍去",
                        "第三位7≥5进一"
                    ],
                    "answer": "四舍五入：第三位6≥5进一，8.736≈8.74",
                    "explain": "保留两位看千分位，6≥5向前进一，8.73+0.01=8.74"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴8.73到8.74之间，8.736过中点8.735，更接近8.74",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "积的近似数：先算出准确积，再按要求四舍五入。8.736保留两位≈8.74",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求积近似数：①先算准确积②按要求位数四舍五入③注意≈符号④末尾0不能去掉",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-003"
        },
        {
            "scene": "小红算0.25×4.4，她用简便方法0.25×4×1.1。",
            "question": "0.25×4等于多少？",
            "formula": "0.25 × 4 = ?",
            "answer": 1,
            "choices": [
                1,
                1.1,
                0.9,
                1.2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1,
                "parts": [
                    {
                        "label": "0.25×4",
                        "val": 1,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "整数运算定律推广到小数",
            "difficulty": 2,
            "hint": "乘法结合律凑整",
            "variants": [
                {
                    "question": "0.125×8=?",
                    "formula": "0.125×8=?",
                    "answer": 1,
                    "hint": "凑整"
                },
                {
                    "question": "0.25×0.4=?",
                    "formula": "0.25×0.4=?",
                    "answer": 0.1,
                    "hint": "25×4=100点两位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求0.25×4等于多少",
                        "求0.25+4",
                        "求0.25-4",
                        "求0.25÷4"
                    ],
                    "answer": "求0.25×4等于多少",
                    "explain": "题目用简便方法算0.25×4.4，先算0.25×4"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "用乘法结合律凑整0.25×4",
                        "直接算0.25×4.4",
                        "先算4.4",
                        "先算0.25"
                    ],
                    "answer": "用乘法结合律凑整0.25×4",
                    "explain": "0.25×4=1是凑整的好算式，再用1×1.1"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法结合律凑整：0.25×4=1",
                        "直接乘",
                        "加法",
                        "除法"
                    ],
                    "answer": "乘法结合律凑整：0.25×4=1",
                    "explain": "0.25×4=1凑整，整数运算定律适用于小数"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图显示0.25×4=1，4个0.25合起来正好是1",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "整数运算定律推广到小数：0.25×4.4=0.25×4×1.1=1×1.1=1.1（结合律）",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "运算定律对小数同样适用：交换律、结合律、分配律。常见凑整：0.25×4=1，0.125×8=1",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-004"
        },
        {
            "scene": "出租车3千米内收8元，超过3千米每千米1.5元。小红坐了7千米。",
            "question": "超过部分(7-3=4千米)要付多少元？",
            "formula": "1.5 × 4 = ?",
            "answer": 6,
            "choices": [
                6,
                4.5,
                8,
                7.5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 14,
                "parts": [
                    {
                        "label": "起步8元",
                        "val": 8,
                        "color": "#00A896"
                    },
                    {
                        "label": "超出6元",
                        "val": 6,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "小数乘法解决问题",
            "difficulty": 3,
            "hint": "分段计费",
            "variants": [
                {
                    "question": "坐5千米超2千米付多少？",
                    "formula": "1.5×2=?",
                    "answer": 3,
                    "hint": "超出部分"
                },
                {
                    "question": "坐6千米超3千米付多少？",
                    "formula": "1.5×3=?",
                    "answer": 4.5,
                    "hint": "超出部分"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求超过部分要付多少元",
                        "求起步价",
                        "求总费用",
                        "求每千米多少元"
                    ],
                    "answer": "求超过部分要付多少元",
                    "explain": "题目问超过3千米的部分（4千米）要付多少元"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "起步3千米8元，超出每千米1.5元，坐7千米",
                        "3千米8元",
                        "每千米1.5元",
                        "坐7千米"
                    ],
                    "answer": "起步3千米8元，超出每千米1.5元，坐7千米",
                    "explain": "起步价8元（3千米），超出部分每千米1.5元，总路程7千米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "分段计费：超出7-3=4千米，1.5×4=6元",
                        "加法",
                        "除法",
                        "乘总数"
                    ],
                    "answer": "分段计费：超出7-3=4千米，1.5×4=6元",
                    "explain": "先算超出距离7-3=4千米，再算超出费用1.5×4=6元"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图两段：起步8元（绿）+超出6元（黄）=总14元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "分段计费：①起步价+②超出部分×单价。1.5×(7-3)=1.5×4=6元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "分段计费问题（出租/水费/电费）：①判断在哪段②分段算费③求和。注意起步部分和超出部分",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-005"
        },
        {
            "scene": "小红在方格纸上用数对(3,5)表示位置，列是3行是5。她想知道(3,5)表示第几列第几行。",
            "question": "数对(3,5)表示第几列？",
            "formula": "(3,5) → 第?列",
            "answer": 3,
            "choices": [
                3,
                5,
                8,
                2
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "grid",
                "params": {
                    "point": [
                        3,
                        5
                    ]
                }
            },
            "knowledge": "用数对确定位置与图形平移",
            "difficulty": 2,
            "hint": "数对(列,行)先列后行",
            "variants": [
                {
                    "question": "数对(4,2)表示第几行？",
                    "formula": "(4,2)→第?行",
                    "answer": 2,
                    "hint": "第二个数是行"
                },
                {
                    "question": "数对(5,7)表示第几列？",
                    "formula": "(5,7)→第?列",
                    "answer": 5,
                    "hint": "第一个数是列"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求数对(3,5)表示第几列",
                        "求第几行",
                        "求第几个",
                        "求位置总数"
                    ],
                    "answer": "求数对(3,5)表示第几列",
                    "explain": "题目问数对(3,5)表示第几列"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "数对(3,5)，列是3行是5",
                        "数对(5,3)",
                        "只有3",
                        "只有5"
                    ],
                    "answer": "数对(3,5)，列是3行是5",
                    "explain": "数对(3,5)表示第3列第5行"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "数对(列,行)先列后行，第一个数是列",
                        "第一个数是行",
                        "第二个数是列",
                        "两个数都是列"
                    ],
                    "answer": "数对(列,行)先列后行，第一个数是列",
                    "explain": "数对规定(列,行)，先写列再写行，所以(3,5)表示第3列"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "方格图上点(3,5)，横向第3列纵向第5行的交点",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "数对(列,行)：第一个数表示列（横向），第二个数表示行（纵向）。先列后行",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "用数对确定位置：(列,行)。平移：左右移动列变行不变，上下移动行变列不变",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-006"
        },
        {
            "scene": "小红买4.8千克大米共花了33.6元。她算每千克大米多少元。",
            "question": "每千克大米多少元？",
            "formula": "33.6 ÷ 4.8 = ?",
            "answer": 7,
            "choices": [
                7,
                8,
                6,
                7.5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 33.6,
                "parts": [
                    {
                        "label": "4.8kg×7元",
                        "val": 33.6,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "除数是整数的小数除法",
            "difficulty": 2,
            "hint": "商的小数点对齐被除数",
            "variants": [
                {
                    "question": "7.2÷6=?",
                    "formula": "7.2÷6=?",
                    "answer": 1.2,
                    "hint": "小数点对齐"
                },
                {
                    "question": "9.6÷8=?",
                    "formula": "9.6÷8=?",
                    "answer": 1.2,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「小红买4.8千克大米共花了33.6元。她算每千克大米多少元。」，问的是「每千克大米多少元？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：33.6 和 4.8",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：33.6 和 4.8",
                    "explain": "从题目中找到的关键数是：33.6、4.8"
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
                    "explain": "除法：33.6 ÷ 4.8 = ?=7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有1条等长的条形，每条代表33.6，合起来就是33.6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "33.6 ÷ 4.8 = ?=7",
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
            ],
            "id": "5A-PROB-007"
        },
        {
            "scene": "小红做除法7.2÷0.8，她把除数和被除数同时乘10变成72÷8。",
            "question": "72÷8等于多少？",
            "formula": "72 ÷ 8 = ?",
            "answer": 9,
            "choices": [
                9,
                8,
                7,
                10
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 72,
                "parts": [
                    {
                        "label": "9组",
                        "val": 72,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "除数是小数的除法",
            "difficulty": 3,
            "hint": "除数变整数被除数同扩大",
            "variants": [
                {
                    "question": "3.6÷0.6=?",
                    "formula": "3.6÷0.6=?",
                    "answer": 6,
                    "hint": "变36÷6"
                },
                {
                    "question": "5.4÷0.9=?",
                    "formula": "5.4÷0.9=?",
                    "answer": 6,
                    "hint": "变54÷9"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求每千克大米多少元",
                        "求总价",
                        "求几千克",
                        "求总重量"
                    ],
                    "answer": "求每千克大米多少元",
                    "explain": "题目问4.8千克大米33.6元，每千克多少元"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "4.8千克共33.6元",
                        "4.8元",
                        "33.6千克",
                        "每千克4.8元"
                    ],
                    "answer": "4.8千克共33.6元",
                    "explain": "总重4.8千克，总价33.6元，求单价"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：33.6÷4.8=7",
                        "加法",
                        "减法",
                        "乘法"
                    ],
                    "answer": "除法：33.6÷4.8=7",
                    "explain": "单价=总价÷数量，33.6÷4.8=7元/千克"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：4.8kg×7元=33.6元，每段7元共4.8段",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "小数除以整数：商的小数点要和被除数小数点对齐。33.6÷4.8=7",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "除数是整数的小数除法：①按整数除法算②商的小数点对齐被除数③不够除商0④有余数添0继续除",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-008"
        },
        {
            "scene": "小亮算10÷3，除不尽保留两位小数。",
            "question": "10÷3保留两位小数约是多少？",
            "formula": "10 ÷ 3 ≈ ?",
            "answer": 3.33,
            "choices": [
                3.33,
                3.34,
                3.3,
                3.35
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 3.3,
                "end": 3.4,
                "points": [
                    {
                        "pos": 3.33,
                        "label": "3.33",
                        "color": "#00A896"
                    }
                ],
                "highlight": [
                    3.3,
                    3.4
                ]
            },
            "knowledge": "商的近似数",
            "difficulty": 2,
            "hint": "第三位3<5舍去",
            "variants": [
                {
                    "question": "20÷7保留两位？",
                    "formula": "20÷7≈?",
                    "answer": 2.86,
                    "hint": "约2.857保留两位"
                },
                {
                    "question": "15÷6保留两位？",
                    "formula": "15÷6≈?",
                    "answer": 2.5,
                    "hint": "2.5就是2.50"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求72÷8等于多少",
                        "求7.2÷8",
                        "求72÷0.8",
                        "求7.2÷0.8"
                    ],
                    "answer": "求72÷8等于多少",
                    "explain": "题目把7.2÷0.8变成72÷8，要求算出结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "除数和被除数同时乘10变72÷8",
                        "只乘除数",
                        "只乘被除数",
                        "不变"
                    ],
                    "answer": "除数和被除数同时乘10变72÷8",
                    "explain": "7.2÷0.8，除数0.8乘10变8，被除数7.2也乘10变72"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：72÷8=9",
                        "加法",
                        "减法",
                        "乘法"
                    ],
                    "answer": "除法：72÷8=9",
                    "explain": "除数变整数被除数同扩大，72÷8=9"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：8组每组9，共72（即9组8）",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "除数是小数：除数扩大成整数，被除数同时扩大相同倍数。7.2÷0.8=72÷8=9",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "除数是小数的除法：①移动除数小数点变整数②被除数同移相同位数③不够补0④按除数是整数除法算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-009"
        },
        {
            "scene": "小红算1÷3=0.333...，老师告诉她这是循环小数。",
            "question": "1÷3的循环节是几？",
            "formula": "1÷3 = 0.333... 循环节=?",
            "answer": 3,
            "choices": [
                3,
                1,
                0,
                33
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 1,
                "points": [
                    {
                        "pos": 0.333,
                        "label": "0.333...",
                        "color": "#00A896"
                    }
                ],
                "highlight": [
                    0,
                    1
                ]
            },
            "knowledge": "循环小数",
            "difficulty": 2,
            "hint": "不断重复的数字是循环节",
            "variants": [
                {
                    "question": "2÷3的循环节是几？",
                    "formula": "2÷3=0.666...",
                    "answer": 6,
                    "hint": "循环节6"
                },
                {
                    "question": "1÷7的循环节有几位(填6)？",
                    "formula": "1÷7循环节位数=?",
                    "answer": 6,
                    "hint": "142857六位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求10÷3保留两位小数约是多少",
                        "求10÷3的准确值",
                        "求10÷3保留整数",
                        "求3÷10"
                    ],
                    "answer": "求10÷3保留两位小数约是多少",
                    "explain": "题目问10÷3保留两位小数约是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "10÷3除不尽，保留两位",
                        "10÷3能整除",
                        "10÷3保留一位",
                        "10÷3保留整数"
                    ],
                    "answer": "10÷3除不尽，保留两位",
                    "explain": "10÷3=3.333...除不尽，要保留两位小数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "四舍五入：第三位3<5舍去，10÷3≈3.33",
                        "第三位5进一",
                        "直接舍去",
                        "第三位6进一"
                    ],
                    "answer": "四舍五入：第三位3<5舍去，10÷3≈3.33",
                    "explain": "10÷3=3.333...，保留两位看第三位3<5舍去，≈3.33"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴3.3到3.4之间，3.33的位置在3.3附近",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "商的近似数：除不尽时按要求四舍五入。10÷3=3.333...保留两位≈3.33",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求商近似数：①除到比要求多一位②四舍五入③注意≈符号④保留位数末尾0不能去",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-010"
        },
        {
            "scene": "妈妈买3.5千克油，每个瓶子最多装0.8千克。需要几个瓶子？",
            "question": "需要多少个瓶子？(进一法)",
            "formula": "3.5 ÷ 0.8 = ? (个)",
            "answer": 5,
            "choices": [
                5,
                4,
                4.375,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 3.5,
                "parts": [
                    {
                        "label": "4瓶装3.2",
                        "val": 3.2,
                        "color": "#00A896"
                    },
                    {
                        "label": "余0.3",
                        "val": 0.3,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "小数除法解决问题",
            "difficulty": 3,
            "hint": "3.5÷0.8=4余0.3进一法需5瓶",
            "variants": [
                {
                    "question": "2.5千克每瓶0.4需几瓶？",
                    "formula": "2.5÷0.4=?",
                    "answer": 7,
                    "hint": "2.5÷0.4=6.25进一"
                },
                {
                    "question": "4米布每件0.6做几件？",
                    "formula": "4÷0.6=?",
                    "answer": 6,
                    "hint": "4÷0.6=6.66去尾法6件"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求1÷3的循环节是几",
                        "求1÷3的商",
                        "求1÷3的余数",
                        "求3÷1"
                    ],
                    "answer": "求1÷3的循环节是几",
                    "explain": "题目问1÷3=0.333...的循环节是几"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1÷3=0.333...不断重复3",
                        "1÷3=0.3",
                        "1÷3=1",
                        "1÷3=3"
                    ],
                    "answer": "1÷3=0.333...不断重复3",
                    "explain": "1÷3=0.333...数字3不断重复出现"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "不断重复的数字3是循环节",
                        "0是循环节",
                        "1是循环节",
                        "33是循环节"
                    ],
                    "answer": "不断重复的数字3是循环节",
                    "explain": "循环节是小数部分依次不断重复出现的数字"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴0到1之间，0.333...的位置，3不断循环",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "循环小数：一个小数从小数部分某位起一个或几个数字依次不断重复。1÷3=0.333...循环节3",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "循环小数分类：①纯循环（0.333...）②混循环（0.1666...）。简写：0.3̇=0.333...",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-011"
        },
        {
            "scene": "袋子里有5个红球，小红闭眼摸一个。老师问摸出什么颜色。",
            "question": "袋中全是红球，摸出红球是(一定填1,不可能填2,可能填3)",
            "formula": "全红 → 摸红 ? (1一定/2不可能/3可能)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 5,
                "parts": [
                    {
                        "label": "红球×5",
                        "val": 5,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "事件发生的确定性",
            "difficulty": 1,
            "hint": "全是红球一定摸到红球",
            "variants": [
                {
                    "question": "袋中全白球摸到红球(1一定2不可能)？",
                    "formula": "全白→摸红?",
                    "answer": 2,
                    "hint": "不可能"
                },
                {
                    "question": "袋中3红2白摸到红(1一定2不可能3可能)？",
                    "formula": "3红2白→摸红?",
                    "answer": 3,
                    "hint": "可能"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求需要多少个瓶子",
                        "求每瓶装多少",
                        "求总重量",
                        "求瓶子总数"
                    ],
                    "answer": "求需要多少个瓶子",
                    "explain": "题目问3.5千克油每瓶装0.8千克需要几个瓶子"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "3.5千克油，每瓶0.8千克",
                        "3.5千克",
                        "每瓶0.8千克",
                        "5瓶"
                    ],
                    "answer": "3.5千克油，每瓶0.8千克",
                    "explain": "总重3.5千克，每瓶最多装0.8千克"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法进一法：3.5÷0.8=4余0.3，需5瓶",
                        "加法",
                        "减法",
                        "乘法"
                    ],
                    "answer": "除法进一法：3.5÷0.8=4余0.3，需5瓶",
                    "explain": "3.5÷0.8=4.375，余下0.3也需要1瓶，进一法需5瓶"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：4瓶装3.2（绿）+余0.3（黄）=3.5。余下也要1瓶",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "进一法：3.5÷0.8=4.375，剩余部分也要装，需5瓶（向前进一）",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "小数除法解决问题：①进一法（装东西需几个，余下也要1个）②去尾法（做东西能做几个，余下不够1个舍去）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-012"
        },
        {
            "scene": "袋子里3个红球1个蓝球。小红摸一个球。",
            "question": "摸到哪种颜色的球可能性大？(红填1,蓝填2)",
            "formula": "3红1蓝 → 摸?可能性大 (1红/2蓝)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 4,
                "parts": [
                    {
                        "label": "红3个",
                        "val": 3,
                        "color": "#FB923C"
                    },
                    {
                        "label": "蓝1个",
                        "val": 1,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "可能性的大小",
            "difficulty": 2,
            "hint": "数量多可能性大",
            "variants": [
                {
                    "question": "2红3蓝摸到哪种可能性大(1红2蓝)？",
                    "formula": "2红3蓝→?",
                    "answer": 2,
                    "hint": "蓝多"
                },
                {
                    "question": "4红1蓝摸到哪种可能性大(1红2蓝)？",
                    "formula": "4红1蓝→?",
                    "answer": 1,
                    "hint": "红多"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求全红球摸出红球是什么事件",
                        "求摸出蓝球",
                        "求摸出白球",
                        "求球总数"
                    ],
                    "answer": "求全红球摸出红球是什么事件",
                    "explain": "题目问袋中全是红球，摸出红球是一定/不可能/可能"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "袋中全是红球5个",
                        "袋中全白球",
                        "袋中3红2白",
                        "袋中2红2蓝"
                    ],
                    "answer": "袋中全是红球5个",
                    "explain": "袋子里5个球全是红色"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "全是红球，摸出红球一定",
                        "不可能",
                        "可能",
                        "无法判断"
                    ],
                    "answer": "全是红球，摸出红球一定",
                    "explain": "全是红球，摸出红球是确定事件（一定）"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图全是红球5个，摸出红球一定发生",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "事件分类：①一定（必然发生）②不可能（一定不发生）③可能（可能发生也可能不发生）",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "确定性：一定和不可能都是确定事件；可能是不确定事件。生活中常用「可能」描述随机现象",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-013"
        },
        {
            "scene": "小红和小亮玩游戏，袋中2红2蓝，摸到红小红赢摸到蓝小亮赢。",
            "question": "这个游戏公平吗？(公平填1,不公平填2)",
            "formula": "2红2蓝 → ? (1公平/2不公平)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 4,
                "parts": [
                    {
                        "label": "红2",
                        "val": 2,
                        "color": "#FB923C"
                    },
                    {
                        "label": "蓝2",
                        "val": 2,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "根据可能性设计公平规则",
            "difficulty": 2,
            "hint": "双方可能性相等即公平",
            "variants": [
                {
                    "question": "3红1蓝游戏公平吗(1公平2不公平)？",
                    "formula": "3红1蓝→?",
                    "answer": 2,
                    "hint": "红多不公平"
                },
                {
                    "question": "4红4蓝游戏公平吗(1公平2不公平)？",
                    "formula": "4红4蓝→?",
                    "answer": 1,
                    "hint": "相等公平"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求摸到哪种颜色可能性大",
                        "求球总数",
                        "求红球个数",
                        "求蓝球个数"
                    ],
                    "answer": "求摸到哪种颜色可能性大",
                    "explain": "题目问3红1蓝摸一个球摸到哪种可能性大"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "3红1蓝共4个",
                        "3蓝1红",
                        "4红",
                        "2红2蓝"
                    ],
                    "answer": "3红1蓝共4个",
                    "explain": "袋子里3个红球1个蓝球"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "红3个多，摸到红可能性大",
                        "蓝多可能性大",
                        "一样大",
                        "无法判断"
                    ],
                    "answer": "红3个多，摸到红可能性大",
                    "explain": "数量多的颜色被摸到的可能性大"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：红3个（橙）+蓝1个（绿），红多所以摸红可能性大",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "可能性大小：数量多可能性大，数量少可能性小。3红1蓝，摸红可能性大",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "可能性大小=该事件数量÷总数量。3/4>1/4，所以摸红可能性大于摸蓝",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-014"
        },
        {
            "scene": "小红今年a岁，妈妈比她大25岁。老师问妈妈多少岁。",
            "question": "妈妈多少岁？(用含a的式子表示)",
            "formula": "妈妈 = a + ?",
            "answer": 25,
            "choices": [
                25,
                "a",
                5,
                250
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 100,
                "points": [
                    {
                        "pos": 25,
                        "label": "+25",
                        "color": "#00A896"
                    }
                ],
                "highlight": [
                    0,
                    25
                ]
            },
            "knowledge": "用字母表示数",
            "difficulty": 2,
            "hint": "a+25表示妈妈年龄",
            "variants": [
                {
                    "question": "小红a岁妈妈b岁妈妈比小红大几岁？",
                    "formula": "b-a=?",
                    "answer": 0,
                    "hint": "b-a"
                },
                {
                    "question": "每支x元买5支共多少元？",
                    "formula": "5x中x=?时共15元",
                    "answer": 3,
                    "hint": "15÷5=3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求这个游戏公平吗",
                        "求谁赢",
                        "求球总数",
                        "求红球数"
                    ],
                    "answer": "求这个游戏公平吗",
                    "explain": "题目问2红2蓝摸红小红赢摸蓝小亮赢，游戏公平吗"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "2红2蓝，摸红小红赢摸蓝小亮赢",
                        "3红1蓝",
                        "4红4蓝",
                        "2红3蓝"
                    ],
                    "answer": "2红2蓝，摸红小红赢摸蓝小亮赢",
                    "explain": "袋中2红2蓝，小红摸红赢小亮摸蓝赢"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "2红=2蓝，可能性相等，公平",
                        "红多不公平",
                        "蓝多不公平",
                        "无法判断"
                    ],
                    "answer": "2红=2蓝，可能性相等，公平",
                    "explain": "双方可能性相等（2/4=2/4）即公平"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：红2（橙）+蓝2（绿），相等所以公平",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "公平规则：双方可能性相等即公平。2红2蓝，摸红=摸蓝=2/4=1/2",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "设计公平游戏：使双方可能性相等。可通过调整数量、设计规则等方式实现公平",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-015"
        },
        {
            "scene": "老师教小红用字母表示长方形面积公式。",
            "question": "长方形面积S=长×宽，长a宽b，S=?",
            "formula": "S = a × ?",
            "answer": "b",
            "choices": [
                "b",
                2,
                "a",
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": "a",
                    "width": "b"
                }
            },
            "knowledge": "用字母表示运算定律和公式",
            "difficulty": 2,
            "hint": "S=ab",
            "variants": [
                {
                    "question": "长方形周长C=2(a+?)",
                    "formula": "C=2(a+?)",
                    "answer": "b",
                    "hint": "C=2(a+b)"
                },
                {
                    "question": "正方形边长a面积S=?",
                    "formula": "S=a×?",
                    "answer": "a",
                    "hint": "S=a²"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求妈妈多少岁（用含a的式子）",
                        "求小红多少岁",
                        "求a是多少",
                        "求年龄差"
                    ],
                    "answer": "求妈妈多少岁（用含a的式子）",
                    "explain": "题目问小红a岁妈妈比她大25岁，妈妈多少岁"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "小红a岁，妈妈比她大25岁",
                        "妈妈25岁",
                        "小红25岁",
                        "妈妈a岁"
                    ],
                    "answer": "小红a岁，妈妈比她大25岁",
                    "explain": "小红年龄是a，妈妈比小红大25"
                },
                {
                    "q": "🧩 用什么方法表示？",
                    "choices": [
                        "用字母表示：妈妈=a+25",
                        "妈妈=25",
                        "妈妈=a",
                        "妈妈=25a"
                    ],
                    "answer": "用字母表示：妈妈=a+25",
                    "explain": "妈妈年龄=小红年龄+25=a+25"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴0到100，标出+25的位置，表示妈妈比小红大25",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "用字母表示数：a+25表示妈妈年龄。字母可以表示任意数，含字母的式子表示数量关系",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "用字母表示数：①表示任意数②表示数量关系③表示运算定律④表示公式。字母使数学更简洁通用",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-016"
        },
        {
            "scene": "小红看到天平左边放x克砝码右边放50克，天平平衡。老师问这是什么。",
            "question": "x=50是什么？(方程填1,不等式填2)",
            "formula": "x=50 → ? (1方程/2不等式)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "x",
                    "right": 50,
                    "balanced": true
                }
            },
            "knowledge": "方程的意义",
            "difficulty": 2,
            "hint": "含未知数的等式叫方程",
            "variants": [
                {
                    "question": "3+5=8是方程吗(1是2不是)？",
                    "formula": "3+5=8→?",
                    "answer": 2,
                    "hint": "没有未知数不是方程"
                },
                {
                    "question": "x+2>5是方程吗(1是2不是)？",
                    "formula": "x+2>5→?",
                    "answer": 2,
                    "hint": "不是等式不是方程"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求长方形面积S=a×?",
                        "求周长",
                        "求边长",
                        "求面积值"
                    ],
                    "answer": "求长方形面积S=a×?",
                    "explain": "题目用字母表示长方形面积公式，长a宽b求S"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "长a宽b，S=长×宽",
                        "长2宽3",
                        "边长a",
                        "长a宽2"
                    ],
                    "answer": "长a宽b，S=长×宽",
                    "explain": "长方形长a宽b，面积公式S=长×宽"
                },
                {
                    "q": "🧩 用什么方法表示？",
                    "choices": [
                        "用字母表示：S=a×b",
                        "S=a+b",
                        "S=a-b",
                        "S=a÷b"
                    ],
                    "answer": "用字母表示：S=a×b",
                    "explain": "面积公式用字母表示：S=a×b（简写S=ab）"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图显示长方形长a宽b，面积S=a×b",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "用字母表示公式：S=ab（面积），C=2(a+b)（周长）。字母乘字母可省略×号",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "用字母表示运算定律和公式：①加法交换律 a+b=b+a ②乘法分配律 (a+b)c=ac+bc ③面积公式 S=ab",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-017"
        },
        {
            "scene": "老师告诉小红等式两边同时加同一个数等式仍成立。",
            "question": "如果x+3=10，两边同时减3，x=?",
            "formula": "x + 3 - 3 = 10 - 3 → x = ?",
            "answer": 7,
            "choices": [
                7,
                13,
                10,
                3
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "x",
                    "right": 7,
                    "balanced": true
                }
            },
            "knowledge": "等式的性质",
            "difficulty": 2,
            "hint": "等式两边同加减仍相等",
            "variants": [
                {
                    "question": "x-5=12两边加5，x=?",
                    "formula": "x=12+5",
                    "answer": 17,
                    "hint": "等式性质"
                },
                {
                    "question": "x+8=20两边减8，x=?",
                    "formula": "x=20-8",
                    "answer": 12,
                    "hint": "等式性质"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求x=50是什么",
                        "求x的值",
                        "求50是多少",
                        "求方程的解"
                    ],
                    "answer": "求x=50是什么",
                    "explain": "题目问天平平衡x=50是方程还是不等式"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "x=50含未知数且是等式",
                        "x=50是不等式",
                        "x=50没有未知数",
                        "x=50是算式"
                    ],
                    "answer": "x=50含未知数且是等式",
                    "explain": "x是未知数，=是等号，所以是方程"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "含未知数的等式叫方程，x=50是方程",
                        "没有未知数不是方程",
                        "不是等式不是方程",
                        "无法判断"
                    ],
                    "answer": "含未知数的等式叫方程，x=50是方程",
                    "explain": "方程定义：含有未知数的等式叫方程"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图显示天平平衡，左边x右边50，表示x=50",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "方程：含有未知数的等式。x=50含未知数x且是等式，所以是方程",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "方程的两个条件：①是等式②含未知数。缺一不可。如3+5=8是等式但无未知数，不是方程",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-018"
        },
        {
            "scene": "小红解方程x+15=40。",
            "question": "x等于多少？",
            "formula": "x + 15 = 40 → x = ?",
            "answer": 25,
            "choices": [
                25,
                55,
                40,
                15
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "x",
                    "right": 25,
                    "balanced": true
                }
            },
            "knowledge": "解方程",
            "difficulty": 2,
            "hint": "两边减15",
            "variants": [
                {
                    "question": "x+23=50，x=?",
                    "formula": "x=50-23",
                    "answer": 27,
                    "hint": "两边减23"
                },
                {
                    "question": "x-18=30，x=?",
                    "formula": "x=30+18",
                    "answer": 48,
                    "hint": "两边加18"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求x+3=10两边减3后x等于多少",
                        "求x+3",
                        "求10-3",
                        "求x+10"
                    ],
                    "answer": "求x+3=10两边减3后x等于多少",
                    "explain": "题目问x+3=10两边同时减3后x等于多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "x+3=10，两边减3",
                        "x+3=10两边加3",
                        "x-3=10",
                        "x+10=3"
                    ],
                    "answer": "x+3=10，两边减3",
                    "explain": "方程x+3=10，两边同时减3"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "等式性质：两边减3，x=10-3=7",
                        "两边加3",
                        "两边乘3",
                        "两边除3"
                    ],
                    "answer": "等式性质：两边减3，x=10-3=7",
                    "explain": "等式两边同加减同一个数仍相等，x+3-3=10-3，x=7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图显示天平两边同时减3仍平衡，x=7",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "等式性质：两边同时加/减/乘/除同一个数（除0外）等式仍成立。x+3=10→x=10-3=7",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "等式性质：①两边同加减同数仍相等②两边同乘除同数（除0外）仍相等。这是解方程的基础",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-019"
        },
        {
            "scene": "小亮解方程3x=18。",
            "question": "x等于多少？",
            "formula": "3x = 18 → x = ?",
            "answer": 6,
            "choices": [
                6,
                54,
                15,
                21
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "3x",
                    "right": 18,
                    "balanced": true
                }
            },
            "knowledge": "解ax=b型方程",
            "difficulty": 2,
            "hint": "两边除以3",
            "variants": [
                {
                    "question": "5x=45，x=?",
                    "formula": "x=45÷5",
                    "answer": 9,
                    "hint": "两边除以5"
                },
                {
                    "question": "4x=32，x=?",
                    "formula": "x=32÷4",
                    "answer": 8,
                    "hint": "两边除以4"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求x+15=40中x等于多少",
                        "求x+15",
                        "求40-15",
                        "求x+40"
                    ],
                    "answer": "求x+15=40中x等于多少",
                    "explain": "题目解方程x+15=40，求x"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "x+15=40",
                        "x-15=40",
                        "x+40=15",
                        "x=40"
                    ],
                    "answer": "x+15=40",
                    "explain": "方程x+15=40"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "两边减15：x=40-15=25",
                        "两边加15",
                        "两边乘15",
                        "两边除15"
                    ],
                    "answer": "两边减15：x=40-15=25",
                    "explain": "利用等式性质，两边同时减15，x=40-15=25"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图显示天平x+15=40，两边减15后x=25",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "解方程x+a=b：两边减a，x=b-a。x+15=40→x=40-15=25",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解方程步骤：①用等式性质变形②求出未知数③检验（代入原方程看是否成立）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-020"
        },
        {
            "scene": "小红有x颗糖果，小亮有15颗，两人一共35颗。小红列方程。",
            "question": "x+15=35，x等于多少？",
            "formula": "x + 15 = 35 → x = ?",
            "answer": 20,
            "choices": [
                20,
                50,
                35,
                15
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 35,
                "parts": [
                    {
                        "label": "小红x",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "小亮15",
                        "val": 15,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "列方程解决实际问题",
            "difficulty": 2,
            "hint": "找等量关系列方程",
            "variants": [
                {
                    "question": "x+8=25，x=?",
                    "formula": "x=25-8",
                    "answer": 17,
                    "hint": "两边减8"
                },
                {
                    "question": "x+12=40，x=?",
                    "formula": "x=40-12",
                    "answer": 28,
                    "hint": "两边减12"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求3x=18中x等于多少",
                        "求3x",
                        "求18÷3",
                        "求x+3"
                    ],
                    "answer": "求3x=18中x等于多少",
                    "explain": "题目解方程3x=18，求x"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "3x=18",
                        "x+3=18",
                        "3+x=18",
                        "x=18"
                    ],
                    "answer": "3x=18",
                    "explain": "方程3x=18"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "两边除以3：x=18÷3=6",
                        "两边加3",
                        "两边乘3",
                        "两边减3"
                    ],
                    "answer": "两边除以3：x=18÷3=6",
                    "explain": "利用等式性质，两边同时除以3，x=18÷3=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图显示天平3x=18，两边除3后x=6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "解方程ax=b：两边除以a，x=b÷a。3x=18→x=18÷3=6",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解方程类型：①x+a=b 两边减a ②x-a=b 两边加a ③ax=b 两边除a ④x÷a=b 两边乘a",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-021"
        },
        {
            "scene": "苹果比梨多5个，梨有x个苹果有3x个。老师让小红列方程3x-x=5。",
            "question": "2x=5，x等于多少？",
            "formula": "2x = 5... → x ≈ ?",
            "answer": 2.5,
            "choices": [
                2.5,
                2,
                3,
                5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 5,
                "parts": [
                    {
                        "label": "2x",
                        "val": 5,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "稍复杂的方程",
            "difficulty": 3,
            "hint": "3x-x=2x",
            "variants": [
                {
                    "question": "2x+3=11，x=?",
                    "formula": "2x=8→x=?",
                    "answer": 4,
                    "hint": "先减3再除2"
                },
                {
                    "question": "3x-x=8，x=?",
                    "formula": "2x=8→x=?",
                    "answer": 4,
                    "hint": "合并同类项"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求x+15=35中x等于多少",
                        "求x+15",
                        "求35-15",
                        "求x+35"
                    ],
                    "answer": "求x+15=35中x等于多少",
                    "explain": "题目小红有x颗糖小亮15颗共35颗，列方程x+15=35"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "小红x颗+小亮15颗=35颗",
                        "小红15颗",
                        "小亮x颗",
                        "共15颗"
                    ],
                    "answer": "小红x颗+小亮15颗=35颗",
                    "explain": "小红糖果数x+小亮15=总35，列方程x+15=35"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "两边减15：x=35-15=20",
                        "两边加15",
                        "两边乘15",
                        "两边除15"
                    ],
                    "answer": "两边减15：x=35-15=20",
                    "explain": "利用等式性质解方程，x=35-15=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：小红x=20（绿）+小亮15（黄）=总35",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "列方程解应用题：①找等量关系②设未知数③列方程④解方程⑤检验。x+15=35→x=20",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "列方程解应用题步骤：①审题找等量②设x③列方程④解方程⑤检验答。关键是找等量关系",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-022"
        },
        {
            "scene": "小红家的平行四边形花坛底6米高4米。她算花坛面积。",
            "question": "平行四边形面积是多少平方米？",
            "formula": "6 × 4 = ? m²",
            "answer": 24,
            "choices": [
                24,
                20,
                10,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "base": 6,
                    "height": 4
                }
            },
            "knowledge": "平行四边形的面积",
            "difficulty": 2,
            "hint": "底×高",
            "variants": [
                {
                    "question": "底8高5面积？",
                    "formula": "8×5=?",
                    "answer": 40,
                    "hint": "底乘高"
                },
                {
                    "question": "底10高3面积？",
                    "formula": "10×3=?",
                    "answer": 30,
                    "hint": "底乘高"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求2x=5中x等于多少",
                        "求2x",
                        "求5÷2",
                        "求x+2"
                    ],
                    "answer": "求2x=5中x等于多少",
                    "explain": "题目苹果3x个梨x个苹果比梨多5，列方程3x-x=5即2x=5"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "3x-x=2x=5",
                        "3x=5",
                        "x=5",
                        "2x=3"
                    ],
                    "answer": "3x-x=2x=5",
                    "explain": "苹果3x-梨x=多5，合并3x-x=2x，2x=5"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "两边除以2：x=5÷2=2.5",
                        "两边加2",
                        "两边乘2",
                        "两边减2"
                    ],
                    "answer": "两边除以2：x=5÷2=2.5",
                    "explain": "合并同类项后2x=5，两边除2，x=2.5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：2x=5，每段2.5，共2段",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "稍复杂方程：先合并同类项3x-x=2x，再解2x=5，x=5÷2=2.5",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解稍复杂方程：①合并同类项②移项（变号）③系数化1。形如 ax±bx=c",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-023"
        },
        {
            "scene": "小红画了一个三角形底5厘米高4厘米。她算三角形面积。",
            "question": "三角形面积是多少平方厘米？",
            "formula": "5 × 4 ÷ 2 = ? cm²",
            "answer": 10,
            "choices": [
                10,
                20,
                9,
                14
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 5,
                    "height": 4
                }
            },
            "knowledge": "三角形的面积",
            "difficulty": 2,
            "hint": "底×高÷2",
            "variants": [
                {
                    "question": "底6高8面积？",
                    "formula": "6×8÷2=?",
                    "answer": 24,
                    "hint": "底高除2"
                },
                {
                    "question": "底10高4面积？",
                    "formula": "10×4÷2=?",
                    "answer": 20,
                    "hint": "底高除2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求平行四边形面积是多少平方米",
                        "求周长",
                        "求底",
                        "求高"
                    ],
                    "answer": "求平行四边形面积是多少平方米",
                    "explain": "题目问底6米高4米的平行四边形花坛面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "底6米高4米",
                        "底5米高4米",
                        "底6米高3米",
                        "边长6米"
                    ],
                    "answer": "底6米高4米",
                    "explain": "平行四边形底6米高4米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "面积=底×高=6×4=24",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "面积=底×高=6×4=24",
                    "explain": "平行四边形面积=底×高=6×4=24平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图显示平行四边形底6高4，可割补成长6宽4的长方形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平行四边形面积=底×高。通过割补把平行四边形变成长方形，长=底宽=高",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形面积公式：S=ah（底×高）。注意高是底边对应的高，不是斜边",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-024"
        },
        {
            "scene": "小亮家的梯形花圃上底3米下底5米高4米。他算花圃面积。",
            "question": "梯形面积是多少平方米？",
            "formula": "(3+5) × 4 ÷ 2 = ? m²",
            "answer": 16,
            "choices": [
                16,
                32,
                8,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "trapezoid",
                "params": {
                    "top": 3,
                    "bottom": 5,
                    "height": 4
                }
            },
            "knowledge": "梯形的面积",
            "difficulty": 3,
            "hint": "(上底+下底)×高÷2",
            "variants": [
                {
                    "question": "上4下6高5面积？",
                    "formula": "(4+6)×5÷2=?",
                    "answer": 25,
                    "hint": "上底下底和乘高除2"
                },
                {
                    "question": "上2下8高4面积？",
                    "formula": "(2+8)×4÷2=?",
                    "answer": 20,
                    "hint": "上底下底和乘高除2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求三角形面积是多少平方厘米",
                        "求周长",
                        "求底",
                        "求高"
                    ],
                    "answer": "求三角形面积是多少平方厘米",
                    "explain": "题目问底5厘米高4厘米的三角形面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "底5厘米高4厘米",
                        "底4厘米高5厘米",
                        "边长5厘米",
                        "底6高8"
                    ],
                    "answer": "底5厘米高4厘米",
                    "explain": "三角形底5厘米高4厘米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "面积=底×高÷2=5×4÷2=10",
                        "加法",
                        "减法",
                        "底×高"
                    ],
                    "answer": "面积=底×高÷2=5×4÷2=10",
                    "explain": "三角形面积=底×高÷2=5×4÷2=10平方厘米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图显示三角形底5高4，两个完全一样的三角形可拼成平行四边形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "三角形面积=底×高÷2。两个完全一样的三角形拼成平行四边形（底×高），一个三角形就是一半",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "三角形面积公式：S=ah÷2（底×高÷2）。注意找对对应的底和高",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-025"
        },
        {
            "scene": "小红家的L形花坛可以分成两个长方形：一个3×4，一个2×3。她算总面积。",
            "question": "组合图形面积是多少？",
            "formula": "3×4 + 2×3 = ?",
            "answer": 18,
            "choices": [
                18,
                12,
                6,
                24
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "composite",
                "params": {
                    "parts": [
                        {
                            "shape": "rectangle",
                            "l": 3,
                            "w": 4
                        },
                        {
                            "shape": "rectangle",
                            "l": 2,
                            "w": 3
                        }
                    ]
                }
            },
            "knowledge": "组合图形的面积",
            "difficulty": 3,
            "hint": "分割成基本图形再求和",
            "variants": [
                {
                    "question": "分5×3和4×2总面积？",
                    "formula": "15+8=?",
                    "answer": 23,
                    "hint": "分割求和"
                },
                {
                    "question": "分6×2和3×3总面积？",
                    "formula": "12+9=?",
                    "answer": 21,
                    "hint": "分割求和"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求梯形面积是多少平方米",
                        "求周长",
                        "求上底",
                        "求下底"
                    ],
                    "answer": "求梯形面积是多少平方米",
                    "explain": "题目问上底3米下底5米高4米的梯形花圃面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "上底3米下底5米高4米",
                        "上底4下底5高3",
                        "上底3下底4高5",
                        "边长3米"
                    ],
                    "answer": "上底3米下底5米高4米",
                    "explain": "梯形上底3米下底5米高4米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "面积=(上底+下底)×高÷2=(3+5)×4÷2=16",
                        "加法",
                        "减法",
                        "上底×下底"
                    ],
                    "answer": "面积=(上底+下底)×高÷2=(3+5)×4÷2=16",
                    "explain": "梯形面积=(上底+下底)×高÷2=(3+5)×4÷2=16平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图显示梯形上3下5高4，两个完全一样的梯形可拼成平行四边形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "梯形面积=(上底+下底)×高÷2。两个完全一样的梯形拼成平行四边形（底=上+下，高=高）",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "梯形面积公式：S=(a+b)h÷2（上底+下底）×高÷2。注意上底和下底要分清",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-026"
        },
        {
            "scene": "小红用方格纸估算一片叶子的面积，数了整格12个半格8个。",
            "question": "叶子面积约是多少格？",
            "formula": "12 + 8÷2 = ? (格)",
            "answer": 16,
            "choices": [
                16,
                20,
                12,
                8
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "grid",
                "params": {
                    "fullCells": 12,
                    "halfCells": 8
                }
            },
            "knowledge": "不规则图形的面积估算",
            "difficulty": 2,
            "hint": "不满半格算半格",
            "variants": [
                {
                    "question": "整格15半格6面积约？",
                    "formula": "15+6÷2=?",
                    "answer": 18,
                    "hint": "半格算半"
                },
                {
                    "question": "整格10半格4面积约？",
                    "formula": "10+4÷2=?",
                    "answer": 12,
                    "hint": "半格算半"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求组合图形面积是多少",
                        "求周长",
                        "求单个长方形面积",
                        "求长方形个数"
                    ],
                    "answer": "求组合图形面积是多少",
                    "explain": "题目问L形花坛分成3×4和2×3两个长方形，总面积多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "分成3×4和2×3两个长方形",
                        "分成3×3和2×2",
                        "只有3×4",
                        "只有2×3"
                    ],
                    "answer": "分成3×4和2×3两个长方形",
                    "explain": "L形花坛分割成两个长方形：3×4和2×3"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "分割求和：3×4+2×3=12+6=18",
                        "加法单独",
                        "减法",
                        "乘法"
                    ],
                    "answer": "分割求和：3×4+2×3=12+6=18",
                    "explain": "分割成基本图形分别算面积再相加，3×4+2×3=18"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图显示L形组合图形，分成3×4和2×3两个长方形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "组合图形面积=各部分面积之和。分割法：分成基本图形分别算再相加",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "组合图形面积求法：①分割法（分成基本图形求和）②添补法（补成大图形减去补的部分）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-027"
        },
        {
            "scene": "学校在20米长的路一边植树，每隔5米栽一棵两端都栽。",
            "question": "一共要栽多少棵树？",
            "formula": "20 ÷ 5 + 1 = ? (棵)",
            "answer": 5,
            "choices": [
                5,
                4,
                6,
                3
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 20,
                "points": [
                    {
                        "pos": 0,
                        "label": "第1棵",
                        "color": "#00A896"
                    },
                    {
                        "pos": 5,
                        "label": "第2棵",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 10,
                        "label": "第3棵",
                        "color": "#FB923C"
                    },
                    {
                        "pos": 15,
                        "label": "第4棵",
                        "color": "#E8A0BF"
                    },
                    {
                        "pos": 20,
                        "label": "第5棵",
                        "color": "#00A896"
                    }
                ],
                "highlight": [
                    0,
                    20
                ]
            },
            "knowledge": "植树问题（两端都栽）",
            "difficulty": 2,
            "hint": "棵数=间隔数+1",
            "variants": [
                {
                    "question": "30米路每隔6米两端栽几棵？",
                    "formula": "30÷6+1=?",
                    "answer": 6,
                    "hint": "间隔数加1"
                },
                {
                    "question": "40米路每隔8米两端栽几棵？",
                    "formula": "40÷8+1=?",
                    "answer": 6,
                    "hint": "间隔数加1"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求叶子面积约是多少格",
                        "求叶子周长",
                        "求整格数",
                        "求半格数"
                    ],
                    "answer": "求叶子面积约是多少格",
                    "explain": "题目用方格纸估算叶子面积，整格12半格8"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "整格12个半格8个",
                        "整格8半格12",
                        "只有整格12",
                        "只有半格8"
                    ],
                    "answer": "整格12个半格8个",
                    "explain": "数方格：整格12个，半格8个"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "整格+半格÷2：12+8÷2=12+4=16",
                        "12+8",
                        "12-8",
                        "12×8"
                    ],
                    "answer": "整格+半格÷2：12+8÷2=12+4=16",
                    "explain": "半格按半算，12+8÷2=16格"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "方格图：整格12个（满格）+半格8个（不满格），半格按半算",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "不规则图形估算：数方格法。整格算1，半格算0.5。12+8÷2=16",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "不规则图形面积估算：①数方格法（满格1半格0.5）②分割法③转化法。估算结果约近似值",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-028"
        },
        {
            "scene": "在20米长的路一边植树，每隔5米栽一棵两端都不栽。",
            "question": "一共要栽多少棵树？",
            "formula": "20 ÷ 5 - 1 = ? (棵)",
            "answer": 3,
            "choices": [
                3,
                4,
                5,
                2
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 20,
                "points": [
                    {
                        "pos": 5,
                        "label": "第1棵",
                        "color": "#00A896"
                    },
                    {
                        "pos": 10,
                        "label": "第2棵",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 15,
                        "label": "第3棵",
                        "color": "#FB923C"
                    }
                ],
                "highlight": [
                    0,
                    20
                ]
            },
            "knowledge": "植树问题（两端不栽）",
            "difficulty": 3,
            "hint": "两端不栽棵数=间隔数-1",
            "variants": [
                {
                    "question": "30米路每隔6米两端不栽几棵？",
                    "formula": "30÷6-1=?",
                    "answer": 4,
                    "hint": "间隔数减1"
                },
                {
                    "question": "圆形周长20米每隔5米栽几棵？",
                    "formula": "20÷5=?",
                    "answer": 4,
                    "hint": "环形棵数=间隔数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求一共要栽多少棵树",
                        "求间隔数",
                        "求路长",
                        "求间隔距离"
                    ],
                    "answer": "求一共要栽多少棵树",
                    "explain": "题目问20米路每隔5米栽一棵两端都栽共几棵"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "路长20米，每隔5米，两端都栽",
                        "20米每隔4米",
                        "两端不栽",
                        "一端栽"
                    ],
                    "answer": "路长20米，每隔5米，两端都栽",
                    "explain": "路长20米，间隔5米，两端都栽树"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "两端都栽：棵数=间隔数+1=20÷5+1=5",
                        "间隔数",
                        "间隔数-1",
                        "间隔数×2"
                    ],
                    "answer": "两端都栽：棵数=间隔数+1=20÷5+1=5",
                    "explain": "间隔数=20÷5=4，两端都栽棵数=间隔数+1=5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴0到20，标出5个点：0,5,10,15,20，两端都栽共5棵",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "植树问题（两端都栽）：棵数=间隔数+1。20÷5=4个间隔，4+1=5棵",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "植树问题：①两端都栽 棵数=间隔数+1②两端不栽 棵数=间隔数-1③一端栽/环形 棵数=间隔数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-029"
        },
        {
            "scene": "小红买西瓜，每千克4.6元，买了6千克。她算算要付多少元。",
            "question": "一共要付多少元？",
            "formula": "4.6 × 6 = ?",
            "answer": 27.6,
            "choices": [
                27.6,
                13.5,
                12,
                16
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 14,
                "parts": [
                    {
                        "label": "3.5×4",
                        "val": 14,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "小数乘整数",
            "difficulty": 2,
            "hint": "先算46×6=160再点小数点",
            "variants": [
                {
                    "question": "2.8×6=?",
                    "formula": "2.8×6=?",
                    "answer": 14,
                    "hint": "28×6=160点一位"
                },
                {
                    "question": "1.6×6=?",
                    "formula": "1.6×6=?",
                    "answer": 9,
                    "hint": "16×6=90点一位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求一共要栽多少棵树",
                        "求间隔数",
                        "求路长",
                        "求间隔距离"
                    ],
                    "answer": "求一共要栽多少棵树",
                    "explain": "题目问20米路每隔5米栽一棵两端都不栽共几棵"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "路长20米，每隔5米，两端都不栽",
                        "20米每隔4米",
                        "两端都栽",
                        "一端栽"
                    ],
                    "answer": "路长20米，每隔5米，两端都不栽",
                    "explain": "路长20米，间隔5米，两端都不栽树"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "两端不栽：棵数=间隔数-1=20÷5-1=3",
                        "间隔数",
                        "间隔数+1",
                        "间隔数×2"
                    ],
                    "answer": "两端不栽：棵数=间隔数-1=20÷5-1=3",
                    "explain": "间隔数=20÷5=4，两端不栽棵数=间隔数-1=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴0到20，标出3个点：5,10,15，两端不栽共3棵",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "植树问题（两端不栽）：棵数=间隔数-1。20÷5=4个间隔，4-1=3棵",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "植树问题分类：①两端都栽 棵数=间隔数+1②两端不栽 棵数=间隔数-1③一端栽 棵数=间隔数④环形 棵数=间隔数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "5A-PROB-030"
        },
        {
            "scene": "小红买西瓜，每千克4.7元，买了5千克。她算算要付多少元。",
            "question": "一共要付多少元？",
            "formula": "4.7 × 5 = ?",
            "answer": 23.5,
            "choices": [
                23.5,
                13.5,
                12,
                16
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 14,
                "parts": [
                    {
                        "label": "3.5×4",
                        "val": 14,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "小数乘整数",
            "difficulty": 2,
            "hint": "先算47×5=150再点小数点",
            "variants": [
                {
                    "question": "2.8×7=?",
                    "formula": "2.8×7=?",
                    "answer": 14,
                    "hint": "28×7=150点一位"
                },
                {
                    "question": "1.7×6=?",
                    "formula": "1.7×6=?",
                    "answer": 9,
                    "hint": "17×6=90点一位"
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
                    "explain": "题目说「小红买西瓜，每千克4.7元，买了5千克。她算算要付多少元。」，问的是「一共要付多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4.7 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4.7 和 5",
                    "explain": "从题目中找到的关键数是：4.7、5"
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
                    "explain": "乘法：4.7 × 5 = ?=14"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有1条等长的条形，每条代表14，合起来就是14",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4.7 × 5 = ?=14",
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
            ],
            "id": "5A-PROB-031"
        },
        {
            "scene": "小亮房间长3.6米宽3.2米。他想算房间面积是多少平方米。",
            "question": "房间面积是多少平方米？",
            "formula": "3.6 × 3.2 = ?",
            "answer": 11.52,
            "choices": [
                11.52,
                15.4,
                13.4,
                144
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 4.5,
                "cols": 3.2,
                "color": "#00A896"
            },
            "knowledge": "小数乘小数",
            "difficulty": 3,
            "hint": "36×32=1330点两位",
            "variants": [
                {
                    "question": "2.6×0.3=?",
                    "formula": "2.6×0.3=?",
                    "answer": 1,
                    "hint": "26×3=100点两位"
                },
                {
                    "question": "1.2×0.8=?",
                    "formula": "1.2×0.8=?",
                    "answer": 0.96,
                    "hint": "12×8=96点两位"
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
                    "explain": "题目说「小亮房间长3.6米宽3.2米。他想算房间面积是多少平方米。」，问的是「房间面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：3.6 和 3.2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：3.6 和 3.2",
                    "explain": "从题目中找到的关键数是：3.6、3.2"
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
                    "explain": "乘法：3.6 × 3.2 = ?=14.4"
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
                    "text": "3.6 × 3.2 = ?=14.4",
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
            ],
            "id": "5A-PROB-032"
        },
        {
            "scene": "小亮房间长4.7米宽4.2米。他想算房间面积是多少平方米。",
            "question": "房间面积是多少平方米？",
            "formula": "4.7 × 4.2 = ?",
            "answer": 19.74,
            "choices": [
                19.74,
                15.4,
                13.4,
                144
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 4.5,
                "cols": 3.2,
                "color": "#00A896"
            },
            "knowledge": "小数乘小数",
            "difficulty": 3,
            "hint": "47×42=1440点两位",
            "variants": [
                {
                    "question": "2.7×0.4=?",
                    "formula": "2.7×0.4=?",
                    "answer": 1,
                    "hint": "27×4=100点两位"
                },
                {
                    "question": "1.2×0.8=?",
                    "formula": "1.2×0.8=?",
                    "answer": 0.96,
                    "hint": "12×8=96点两位"
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
                    "explain": "题目说「小亮房间长4.7米宽4.2米。他想算房间面积是多少平方米。」，问的是「房间面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4.7 和 4.2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4.7 和 4.2",
                    "explain": "从题目中找到的关键数是：4.7、4.2"
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
                    "explain": "乘法：4.7 × 4.2 = ?=14.4"
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
                    "text": "4.7 × 4.2 = ?=14.4",
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
            ],
            "id": "5A-PROB-033"
        },
        {
            "scene": "小红算0.35×5.5，她用简便方法0.35×5×1.1。",
            "question": "0.35×5等于多少？",
            "formula": "0.35 × 5 = ?",
            "answer": 1.75,
            "choices": [
                1.75,
                1.1,
                0.9,
                1.2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1,
                "parts": [
                    {
                        "label": "0.25×4",
                        "val": 1,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "整数运算定律推广到小数",
            "difficulty": 2,
            "hint": "乘法结合律凑整",
            "variants": [
                {
                    "question": "0.135×8=?",
                    "formula": "0.135×8=?",
                    "answer": 1,
                    "hint": "凑整"
                },
                {
                    "question": "0.35×0.5=?",
                    "formula": "0.35×0.5=?",
                    "answer": 0.1,
                    "hint": "35×5=100点两位"
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
                    "explain": "题目说「小红算0.35×5.5，她用简便方法0.35×5×1.1。」，问的是「0.35×5等于多少？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.35 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.35 和 5",
                    "explain": "从题目中找到的关键数是：0.35、5"
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
                    "explain": "乘法：0.35 × 5 = ?=1"
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
                    "text": "0.35 × 5 = ?=1",
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
            ],
            "id": "5A-PROB-034"
        },
        {
            "scene": "小红算0.37×6.6，她用简便方法0.37×6×1.1。",
            "question": "0.37×6等于多少？",
            "formula": "0.37 × 6 = ?",
            "answer": 2.22,
            "choices": [
                2.22,
                1.1,
                0.9,
                1.2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1,
                "parts": [
                    {
                        "label": "0.25×4",
                        "val": 1,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "整数运算定律推广到小数",
            "difficulty": 2,
            "hint": "乘法结合律凑整",
            "variants": [
                {
                    "question": "0.137×8=?",
                    "formula": "0.137×8=?",
                    "answer": 1,
                    "hint": "凑整"
                },
                {
                    "question": "0.37×0.6=?",
                    "formula": "0.37×0.6=?",
                    "answer": 0.1,
                    "hint": "37×6=100点两位"
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
                    "explain": "题目说「小红算0.37×6.6，她用简便方法0.37×6×1.1。」，问的是「0.37×6等于多少？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.37 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.37 和 6",
                    "explain": "从题目中找到的关键数是：0.37、6"
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
                    "explain": "乘法：0.37 × 6 = ?=1"
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
                    "text": "0.37 × 6 = ?=1",
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
            ],
            "id": "5A-PROB-035"
        },
        {
            "scene": "出租车4千米内收9元，超过4千米每千米1.7元。小红坐了7千米。",
            "question": "超过部分(7-4=4千米)要付多少元？",
            "formula": "1.7 × 4 = ?",
            "answer": 6.8,
            "choices": [
                6.8,
                4.5,
                9,
                7.5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 14,
                "parts": [
                    {
                        "label": "起步8元",
                        "val": 8,
                        "color": "#00A896"
                    },
                    {
                        "label": "超出6元",
                        "val": 6,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "小数乘法解决问题",
            "difficulty": 3,
            "hint": "分段计费",
            "variants": [
                {
                    "question": "坐7千米超2千米付多少？",
                    "formula": "1.7×2=?",
                    "answer": 4,
                    "hint": "超出部分"
                },
                {
                    "question": "坐6千米超4千米付多少？",
                    "formula": "1.7×4=?",
                    "answer": 4.5,
                    "hint": "超出部分"
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
                    "explain": "题目说「出租车4千米内收9元，超过4千米每千米1.7元。小红坐了7千米。」，问的是「超过部分(7-4=4千米)要付多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1.7 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1.7 和 4",
                    "explain": "从题目中找到的关键数是：1.7、4"
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
                    "explain": "乘法：1.7 × 4 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表8，合起来就是14",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1.7 × 4 = ?=6",
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
            ],
            "id": "5A-PROB-036"
        },
        {
            "scene": "出租车4千米内收12元，超过4千米每千米1.5元。小红坐了7千米。",
            "question": "超过部分(7-4=6千米)要付多少元？",
            "formula": "1.5 × 6 = ?",
            "answer": 9,
            "choices": [
                9,
                4.5,
                12,
                7.5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 14,
                "parts": [
                    {
                        "label": "起步8元",
                        "val": 8,
                        "color": "#00A896"
                    },
                    {
                        "label": "超出6元",
                        "val": 6,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "小数乘法解决问题",
            "difficulty": 3,
            "hint": "分段计费",
            "variants": [
                {
                    "question": "坐5千米超2千米付多少？",
                    "formula": "1.5×2=?",
                    "answer": 4,
                    "hint": "超出部分"
                },
                {
                    "question": "坐6千米超4千米付多少？",
                    "formula": "1.5×4=?",
                    "answer": 4.5,
                    "hint": "超出部分"
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
                    "explain": "题目说「出租车4千米内收12元，超过4千米每千米1.5元。小红坐了7千米。」，问的是「超过部分(7-4=6千米)要付多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1.5 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1.5 和 6",
                    "explain": "从题目中找到的关键数是：1.5、6"
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
                    "explain": "乘法：1.5 × 6 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表8，合起来就是14",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1.5 × 6 = ?=6",
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
            ],
            "id": "5A-PROB-037"
        },
        {
            "scene": "小红在方格纸上用数对(4,7)表示位置，列是4行是7。她想知道(4,7)表示第几列第几行。",
            "question": "数对(4,7)表示第几列？",
            "formula": "(4,7) → 第?列",
            "answer": 4,
            "choices": [
                4,
                7,
                8,
                2
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "grid",
                "params": {
                    "point": [
                        3,
                        5
                    ]
                }
            },
            "knowledge": "用数对确定位置与图形平移",
            "difficulty": 2,
            "hint": "数对(列,行)先列后行",
            "variants": [
                {
                    "question": "数对(4,2)表示第几行？",
                    "formula": "(4,2)→第?行",
                    "answer": 2,
                    "hint": "第二个数是行"
                },
                {
                    "question": "数对(7,7)表示第几列？",
                    "formula": "(7,7)→第?列",
                    "answer": 7,
                    "hint": "第一个数是列"
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
                    "explain": "题目说「小红在方格纸上用数对(4,7)表示位置，列是4行是7。她想知道(4,7)表示第几列第几行。」，问的是「数对(4,7)表示第几列？」，这是求计算结果"
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
                    "explain": "从题目中找到的关键数是：4、7"
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
                    "explain": "计算：(4,7) → 第?列=4"
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
                    "text": "(4,7) → 第?列=4",
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
            ],
            "id": "5A-PROB-038"
        },
        {
            "scene": "小红在方格纸上用数对(4,4)表示位置，列是4行是4。她想知道(4,4)表示第几列第几行。",
            "question": "数对(4,4)表示第几列？",
            "formula": "(4,4) → 第?列",
            "answer": 4,
            "choices": [
                4,
                4,
                8,
                2
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "grid",
                "params": {
                    "point": [
                        3,
                        5
                    ]
                }
            },
            "knowledge": "用数对确定位置与图形平移",
            "difficulty": 2,
            "hint": "数对(列,行)先列后行",
            "variants": [
                {
                    "question": "数对(4,2)表示第几行？",
                    "formula": "(4,2)→第?行",
                    "answer": 2,
                    "hint": "第二个数是行"
                },
                {
                    "question": "数对(4,7)表示第几列？",
                    "formula": "(4,7)→第?列",
                    "answer": 4,
                    "hint": "第一个数是列"
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
                    "explain": "题目说「小红在方格纸上用数对(4,4)表示位置，列是4行是4。她想知道(4,4)表示第几列第几行。」，问的是「数对(4,4)表示第几列？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4 和 4",
                    "explain": "从题目中找到的关键数是：4、4"
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
                    "explain": "计算：(4,4) → 第?列=4"
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
                    "text": "(4,4) → 第?列=4",
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
            ],
            "id": "5A-PROB-039"
        },
        {
            "scene": "小红买6.10千克大米共花了27.9元。她算每千克大米多少元。",
            "question": "每千克大米多少元？",
            "formula": "27.9 ÷ 6.10 = ?",
            "answer": 4.57377,
            "choices": [
                4.57377,
                10,
                9,
                7.5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 33.6,
                "parts": [
                    {
                        "label": "4.8kg×7元",
                        "val": 33.6,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "除数是整数的小数除法",
            "difficulty": 2,
            "hint": "商的小数点对齐被除数",
            "variants": [
                {
                    "question": "7.2÷9=?",
                    "formula": "7.2÷9=?",
                    "answer": 1.2,
                    "hint": "小数点对齐"
                },
                {
                    "question": "9.9÷10=?",
                    "formula": "9.9÷10=?",
                    "answer": 1.2,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「小红买6.10千克大米共花了27.9元。她算每千克大米多少元。」，问的是「每千克大米多少元？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：27.9 和 6.10",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：27.9 和 6.10",
                    "explain": "从题目中找到的关键数是：27.9、6.10"
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
                    "explain": "除法：27.9 ÷ 6.10 = ?=7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有1条等长的条形，每条代表33.6，合起来就是33.6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "27.9 ÷ 6.10 = ?=7",
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
            ],
            "id": "5A-PROB-040"
        },
        {
            "scene": "小红买4.10千克大米共花了30.5元。她算每千克大米多少元。",
            "question": "每千克大米多少元？",
            "formula": "30.5 ÷ 4.10 = ?",
            "answer": 7,
            "choices": [
                7,
                10,
                5,
                7.5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 33.6,
                "parts": [
                    {
                        "label": "4.8kg×7元",
                        "val": 33.6,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "除数是整数的小数除法",
            "difficulty": 2,
            "hint": "商的小数点对齐被除数",
            "variants": [
                {
                    "question": "7.2÷5=?",
                    "formula": "7.2÷5=?",
                    "answer": 1.2,
                    "hint": "小数点对齐"
                },
                {
                    "question": "9.5÷10=?",
                    "formula": "9.5÷10=?",
                    "answer": 1.2,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「小红买4.10千克大米共花了30.5元。她算每千克大米多少元。」，问的是「每千克大米多少元？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：30.5 和 4.10",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：30.5 和 4.10",
                    "explain": "从题目中找到的关键数是：30.5、4.10"
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
                    "explain": "除法：30.5 ÷ 4.10 = ?=7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有1条等长的条形，每条代表33.6，合起来就是33.6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "30.5 ÷ 4.10 = ?=7",
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
            ],
            "id": "5A-PROB-041"
        },
        {
            "scene": "小红做除法7.3÷0.13，她把除数和被除数同时乘13变成713÷13。",
            "question": "713÷13等于多少？",
            "formula": "713 ÷ 13 = ?",
            "answer": 54,
            "choices": [
                54,
                12,
                7,
                13
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 78,
                "parts": [
                    {
                        "label": "9组",
                        "val": 78,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "除数是小数的除法",
            "difficulty": 3,
            "hint": "除数变整数被除数同扩大",
            "variants": [
                {
                    "question": "3.6÷0.6=?",
                    "formula": "3.6÷0.6=?",
                    "answer": 6,
                    "hint": "变36÷6"
                },
                {
                    "question": "5.4÷0.9=?",
                    "formula": "5.4÷0.9=?",
                    "answer": 6,
                    "hint": "变54÷9"
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
                    "explain": "题目说「小红做除法7.3÷0.13，她把除数和被除数同时乘13变成713÷13。」，问的是「713÷13等于多少？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：713 和 13",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：713 和 13",
                    "explain": "从题目中找到的关键数是：713、13"
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
                    "explain": "除法：713 ÷ 13 = ?=9"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有1条等长的条形，每条代表78，合起来就是78",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "713 ÷ 13 = ?=9",
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
            ],
            "id": "5A-PROB-042"
        },
        {
            "scene": "小红做除法10.3÷0.10，她把除数和被除数同时乘13变成104÷10。",
            "question": "104÷10等于多少？",
            "formula": "104 ÷ 10 = ?",
            "answer": 10,
            "choices": [
                9,
                7,
                10,
                12
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 84,
                "parts": [
                    {
                        "label": "9组",
                        "val": 84,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "除数是小数的除法",
            "difficulty": 3,
            "hint": "除数变整数被除数同扩大",
            "variants": [
                {
                    "question": "3.6÷0.6=?",
                    "formula": "3.6÷0.6=?",
                    "answer": 6,
                    "hint": "变36÷6"
                },
                {
                    "question": "5.4÷0.9=?",
                    "formula": "5.4÷0.9=?",
                    "answer": 6,
                    "hint": "变54÷9"
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
                    "explain": "题目说「小红做除法10.3÷0.10，她把除数和被除数同时乘13变成104÷10。」，问的是「104÷10等于多少？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：104 和 10",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：104 和 10",
                    "explain": "从题目中找到的关键数是：104、10"
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
                    "explain": "除法：104 ÷ 10 = ?=9"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有1条等长的条形，每条代表84，合起来就是84",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "104 ÷ 10 = ?=9",
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
            ],
            "id": "5A-PROB-043"
        },
        {
            "scene": "妈妈买4.4千克油，每个瓶子最多装0.8千克。需要几个瓶子？",
            "question": "需要多少个瓶子？(进一法)",
            "formula": "4.4 ÷ 0.8 = ? (个)",
            "answer": 4,
            "choices": [
                4,
                4,
                4.375,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 3.5,
                "parts": [
                    {
                        "label": "4瓶装3.2",
                        "val": 3,
                        "color": "#00A896"
                    },
                    {
                        "label": "余0.3",
                        "val": 0.5,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "小数除法解决问题",
            "difficulty": 3,
            "hint": "4.4÷0.8=4余0.4进一法需4瓶",
            "variants": [
                {
                    "question": "2.4千克每瓶0.4需几瓶？",
                    "formula": "2.4÷0.4=?",
                    "answer": 7,
                    "hint": "2.4÷0.4=6.24进一"
                },
                {
                    "question": "4米布每件0.6做几件？",
                    "formula": "4÷0.6=?",
                    "answer": 6,
                    "hint": "4÷0.6=6.66去尾法6件"
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
                    "explain": "题目说「妈妈买4.4千克油，每个瓶子最多装0.8千克。需要几个瓶子？」，问的是「需要多少个瓶子？(进一法)」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4.4 和 0.8",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4.4 和 0.8",
                    "explain": "从题目中找到的关键数是：4.4、0.8"
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
                    "explain": "除法：4.4 ÷ 0.8 = ? (个)=4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表3，合起来就是3.5",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4.4 ÷ 0.8 = ? (个)=4",
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
            ],
            "id": "5A-PROB-044"
        },
        {
            "scene": "妈妈买4.5千克油，每个瓶子最多装0.11千克。需要几个瓶子？",
            "question": "需要多少个瓶子？(进一法)",
            "formula": "4.5 ÷ 0.11 = ? (个)",
            "answer": 5,
            "choices": [
                5,
                4,
                4.375,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 3.5,
                "parts": [
                    {
                        "label": "4瓶装3.2",
                        "val": 3,
                        "color": "#00A896"
                    },
                    {
                        "label": "余0.3",
                        "val": 0.5,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "小数除法解决问题",
            "difficulty": 3,
            "hint": "4.5÷0.11=4余0.4进一法需5瓶",
            "variants": [
                {
                    "question": "2.5千克每瓶0.4需几瓶？",
                    "formula": "2.5÷0.4=?",
                    "answer": 7,
                    "hint": "2.5÷0.4=6.25进一"
                },
                {
                    "question": "4米布每件0.6做几件？",
                    "formula": "4÷0.6=?",
                    "answer": 6,
                    "hint": "4÷0.6=6.66去尾法6件"
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
                    "explain": "题目说「妈妈买4.5千克油，每个瓶子最多装0.11千克。需要几个瓶子？」，问的是「需要多少个瓶子？(进一法)」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4.5 和 0.11",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4.5 和 0.11",
                    "explain": "从题目中找到的关键数是：4.5、0.11"
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
                    "explain": "除法：4.5 ÷ 0.11 = ? (个)=5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表3，合起来就是3.5",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4.5 ÷ 0.11 = ? (个)=5",
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
            ],
            "id": "5A-PROB-045"
        },
        {
            "scene": "袋子里有6个红球，小红闭眼摸一个。老师问摸出什么颜色。",
            "question": "袋中全是红球，摸出红球是(一定填1,不可能填3,可能填3)",
            "formula": "全红 → 摸红 ? (1一定/3不可能/3可能)",
            "answer": 1,
            "choices": [
                1,
                3,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6,
                "parts": [
                    {
                        "label": "红球×5",
                        "val": 6,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "事件发生的确定性",
            "difficulty": 1,
            "hint": "全是红球一定摸到红球",
            "variants": [
                {
                    "question": "袋中全白球摸到红球(1一定3不可能)？",
                    "formula": "全白→摸红?",
                    "answer": 3,
                    "hint": "不可能"
                },
                {
                    "question": "袋中3红3白摸到红(1一定3不可能3可能)？",
                    "formula": "3红3白→摸红?",
                    "answer": 3,
                    "hint": "可能"
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
                    "explain": "题目说「袋子里有6个红球，小红闭眼摸一个。老师问摸出什么颜色。」，问的是「袋中全是红球，摸出红球是(一定填1,不可能填3,可能填3)」，这是求计算结果"
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
                    "explain": "从题目中找到的关键数是：1、3、3"
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
                    "explain": "计算：全红 → 摸红 ? (1一定/3不可能/3可能)=1"
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
                    "text": "全红 → 摸红 ? (1一定/3不可能/3可能)=1",
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
            ],
            "id": "5A-PROB-046"
        },
        {
            "scene": "袋子里有7个红球，小红闭眼摸一个。老师问摸出什么颜色。",
            "question": "袋中全是红球，摸出红球是(一定填1,不可能填2,可能填3)",
            "formula": "全红 → 摸红 ? (1一定/2不可能/3可能)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 7,
                "parts": [
                    {
                        "label": "红球×5",
                        "val": 7,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "事件发生的确定性",
            "difficulty": 1,
            "hint": "全是红球一定摸到红球",
            "variants": [
                {
                    "question": "袋中全白球摸到红球(1一定2不可能)？",
                    "formula": "全白→摸红?",
                    "answer": 2,
                    "hint": "不可能"
                },
                {
                    "question": "袋中3红2白摸到红(1一定2不可能3可能)？",
                    "formula": "3红2白→摸红?",
                    "answer": 3,
                    "hint": "可能"
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
                    "explain": "题目说「袋子里有7个红球，小红闭眼摸一个。老师问摸出什么颜色。」，问的是「袋中全是红球，摸出红球是(一定填1,不可能填2,可能填3)」，这是求计算结果"
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
                    "explain": "从题目中找到的关键数是：1、2、3"
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
                    "explain": "计算：全红 → 摸红 ? (1一定/2不可能/3可能)=1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有1条等长的条形，每条代表7，合起来就是7",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "全红 → 摸红 ? (1一定/2不可能/3可能)=1",
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
            ],
            "id": "5A-PROB-047"
        },
        {
            "scene": "袋子里3个红球1个蓝球。小红摸一个球。",
            "question": "摸到哪种颜色的球可能性大？(红填1,蓝填11)",
            "formula": "3红1蓝 → 摸?可能性大 (1红/11蓝)",
            "answer": 1,
            "choices": [
                1,
                11,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 4,
                "parts": [
                    {
                        "label": "红3个",
                        "val": 3,
                        "color": "#FB923C"
                    },
                    {
                        "label": "蓝1个",
                        "val": 1,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "可能性的大小",
            "difficulty": 2,
            "hint": "数量多可能性大",
            "variants": [
                {
                    "question": "11红3蓝摸到哪种可能性大(1红11蓝)？",
                    "formula": "11红3蓝→?",
                    "answer": 11,
                    "hint": "蓝多"
                },
                {
                    "question": "4红1蓝摸到哪种可能性大(1红11蓝)？",
                    "formula": "4红1蓝→?",
                    "answer": 1,
                    "hint": "红多"
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
                    "explain": "题目说「袋子里3个红球1个蓝球。小红摸一个球。」，问的是「摸到哪种颜色的球可能性大？(红填1,蓝填11)」，这是求计算结果"
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
                    "explain": "从题目中找到的关键数是：3、1、1、11"
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
                    "explain": "计算：3红1蓝 → 摸?可能性大 (1红/11蓝)=1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表3，合起来就是4",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3红1蓝 → 摸?可能性大 (1红/11蓝)=1",
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
            ],
            "id": "5A-PROB-048"
        },
        {
            "scene": "袋子里3个红球1个蓝球。小红摸一个球。",
            "question": "摸到哪种颜色的球可能性大？(红填1,蓝填7)",
            "formula": "3红1蓝 → 摸?可能性大 (1红/7蓝)",
            "answer": 1,
            "choices": [
                1,
                7,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 4,
                "parts": [
                    {
                        "label": "红3个",
                        "val": 3,
                        "color": "#FB923C"
                    },
                    {
                        "label": "蓝1个",
                        "val": 1,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "可能性的大小",
            "difficulty": 2,
            "hint": "数量多可能性大",
            "variants": [
                {
                    "question": "7红3蓝摸到哪种可能性大(1红7蓝)？",
                    "formula": "7红3蓝→?",
                    "answer": 7,
                    "hint": "蓝多"
                },
                {
                    "question": "4红1蓝摸到哪种可能性大(1红7蓝)？",
                    "formula": "4红1蓝→?",
                    "answer": 1,
                    "hint": "红多"
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
                    "explain": "题目说「袋子里3个红球1个蓝球。小红摸一个球。」，问的是「摸到哪种颜色的球可能性大？(红填1,蓝填7)」，这是求计算结果"
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
                    "explain": "从题目中找到的关键数是：3、1、1、7"
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
                    "explain": "计算：3红1蓝 → 摸?可能性大 (1红/7蓝)=1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表3，合起来就是4",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3红1蓝 → 摸?可能性大 (1红/7蓝)=1",
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
            ],
            "id": "5A-PROB-049"
        },
        {
            "scene": "小红和小亮玩游戏，袋中3红3蓝，摸到红小红赢摸到蓝小亮赢。",
            "question": "这个游戏公平吗？(公平填1,不公平填3)",
            "formula": "3红3蓝 → ? (1公平/3不公平)",
            "answer": 1,
            "choices": [
                1,
                3,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 4,
                "parts": [
                    {
                        "label": "红2",
                        "val": 2,
                        "color": "#FB923C"
                    },
                    {
                        "label": "蓝2",
                        "val": 2,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "根据可能性设计公平规则",
            "difficulty": 2,
            "hint": "双方可能性相等即公平",
            "variants": [
                {
                    "question": "3红1蓝游戏公平吗(1公平3不公平)？",
                    "formula": "3红1蓝→?",
                    "answer": 3,
                    "hint": "红多不公平"
                },
                {
                    "question": "4红4蓝游戏公平吗(1公平3不公平)？",
                    "formula": "4红4蓝→?",
                    "answer": 1,
                    "hint": "相等公平"
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
                    "explain": "题目说「小红和小亮玩游戏，袋中3红3蓝，摸到红小红赢摸到蓝小亮赢。」，问的是「这个游戏公平吗？(公平填1,不公平填3)」，这是求计算结果"
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
                    "explain": "从题目中找到的关键数是：3、3、1、3"
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
                    "explain": "计算：3红3蓝 → ? (1公平/3不公平)=1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表2，合起来就是4",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3红3蓝 → ? (1公平/3不公平)=1",
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
            ],
            "id": "5A-PROB-050"
        },
        {
            "scene": "小红和小亮玩游戏，袋中3红3蓝，摸到红小红赢摸到蓝小亮赢。",
            "question": "这个游戏公平吗？(公平填1,不公平填3)",
            "formula": "3红3蓝 → ? (1公平/3不公平)",
            "answer": 1,
            "choices": [
                1,
                3,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 4,
                "parts": [
                    {
                        "label": "红2",
                        "val": 2,
                        "color": "#FB923C"
                    },
                    {
                        "label": "蓝2",
                        "val": 2,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "根据可能性设计公平规则",
            "difficulty": 2,
            "hint": "双方可能性相等即公平",
            "variants": [
                {
                    "question": "3红1蓝游戏公平吗(1公平3不公平)？",
                    "formula": "3红1蓝→?",
                    "answer": 3,
                    "hint": "红多不公平"
                },
                {
                    "question": "4红4蓝游戏公平吗(1公平3不公平)？",
                    "formula": "4红4蓝→?",
                    "answer": 1,
                    "hint": "相等公平"
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
                    "explain": "题目说「小红和小亮玩游戏，袋中3红3蓝，摸到红小红赢摸到蓝小亮赢。」，问的是「这个游戏公平吗？(公平填1,不公平填3)」，这是求计算结果"
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
                    "explain": "从题目中找到的关键数是：3、3、1、3"
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
                    "explain": "计算：3红3蓝 → ? (1公平/3不公平)=1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表2，合起来就是4",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3红3蓝 → ? (1公平/3不公平)=1",
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
            ],
            "id": "5A-PROB-051"
        },
        {
            "scene": "老师教小红用字母表示长方形面积公式。",
            "question": "长方形面积S=长×宽，长a宽b，S=?",
            "formula": "S = a × ?",
            "answer": "b",
            "choices": [
                "b",
                "2",
                "a",
                "1"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": "a",
                    "width": "b"
                }
            },
            "knowledge": "用字母表示运算定律和公式",
            "difficulty": 2,
            "hint": "S=ab",
            "variants": [
                {
                    "question": "长方形周长C=2(a+?)",
                    "formula": "C=2(a+?)",
                    "answer": "b",
                    "hint": "C=2(a+b)"
                },
                {
                    "question": "正方形边长a面积S=?",
                    "formula": "S=a×?",
                    "answer": "a",
                    "hint": "S=a²"
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
                    "explain": "题目说「老师教小红用字母表示长方形面积公式。」，问的是「长方形面积S=长×宽，长a宽b，S=?」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：b",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：b",
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
                    "answer": "乘法",
                    "explain": "乘法：S = a × ?=b"
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
                    "text": "S = a × ?=b",
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
            ],
            "id": "5A-PROB-052"
        },
        {
            "scene": "老师教小红用字母表示长方形面积公式。",
            "question": "长方形面积S=长×宽，长a宽b，S=?",
            "formula": "S = a × ?",
            "answer": "b",
            "choices": [
                "b",
                "2",
                "a",
                "1"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": "a",
                    "width": "b"
                }
            },
            "knowledge": "用字母表示运算定律和公式",
            "difficulty": 2,
            "hint": "S=ab",
            "variants": [
                {
                    "question": "长方形周长C=2(a+?)",
                    "formula": "C=2(a+?)",
                    "answer": "b",
                    "hint": "C=2(a+b)"
                },
                {
                    "question": "正方形边长a面积S=?",
                    "formula": "S=a×?",
                    "answer": "a",
                    "hint": "S=a²"
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
                    "explain": "题目说「老师教小红用字母表示长方形面积公式。」，问的是「长方形面积S=长×宽，长a宽b，S=?」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：b",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：b",
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
                    "answer": "乘法",
                    "explain": "乘法：S = a × ?=b"
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
                    "text": "S = a × ?=b",
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
            ],
            "id": "5A-PROB-053"
        },
        {
            "scene": "小红看到天平左边放x克砝码右边放71克，天平平衡。老师问这是什么。",
            "question": "x=71是什么？(方程填1,不等式填2)",
            "formula": "x=71 → ? (1方程/2不等式)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "x",
                    "right": 50,
                    "balanced": true
                }
            },
            "knowledge": "方程的意义",
            "difficulty": 2,
            "hint": "含未知数的等式叫方程",
            "variants": [
                {
                    "question": "3+5=8是方程吗(1是2不是)？",
                    "formula": "3+5=8→?",
                    "answer": 2,
                    "hint": "没有未知数不是方程"
                },
                {
                    "question": "x+2>5是方程吗(1是2不是)？",
                    "formula": "x+2>5→?",
                    "answer": 2,
                    "hint": "不是等式不是方程"
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
                    "explain": "题目说「小红看到天平左边放x克砝码右边放71克，天平平衡。老师问这是什么。」，问的是「x=71是什么？(方程填1,不等式填2)」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：71 和 1",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：71 和 1",
                    "explain": "从题目中找到的关键数是：71、1、2"
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
                    "explain": "计算：x=71 → ? (1方程/2不等式)=1"
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
                    "text": "x=71 → ? (1方程/2不等式)=1",
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
            ],
            "id": "5A-PROB-054"
        },
        {
            "scene": "小红看到天平左边放x克砝码右边放41克，天平平衡。老师问这是什么。",
            "question": "x=41是什么？(方程填1,不等式填3)",
            "formula": "x=41 → ? (1方程/3不等式)",
            "answer": 1,
            "choices": [
                1,
                3,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "x",
                    "right": 50,
                    "balanced": true
                }
            },
            "knowledge": "方程的意义",
            "difficulty": 2,
            "hint": "含未知数的等式叫方程",
            "variants": [
                {
                    "question": "3+5=8是方程吗(1是3不是)？",
                    "formula": "3+5=8→?",
                    "answer": 3,
                    "hint": "没有未知数不是方程"
                },
                {
                    "question": "x+3>5是方程吗(1是3不是)？",
                    "formula": "x+3>5→?",
                    "answer": 3,
                    "hint": "不是等式不是方程"
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
                    "explain": "题目说「小红看到天平左边放x克砝码右边放41克，天平平衡。老师问这是什么。」，问的是「x=41是什么？(方程填1,不等式填3)」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：41 和 1",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：41 和 1",
                    "explain": "从题目中找到的关键数是：41、1、3"
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
                    "explain": "计算：x=41 → ? (1方程/3不等式)=1"
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
                    "text": "x=41 → ? (1方程/3不等式)=1",
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
            ],
            "id": "5A-PROB-055"
        },
        {
            "scene": "老师告诉小红等式两边同时加同一个数等式仍成立。",
            "question": "如果x+3=12，两边同时减3，x=?",
            "formula": "x + 3 - 3 = 12 - 3 → x = ?",
            "answer": 9,
            "choices": [
                9,
                13,
                12,
                3
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "x",
                    "right": 7,
                    "balanced": true
                }
            },
            "knowledge": "等式的性质",
            "difficulty": 2,
            "hint": "等式两边同加减仍相等",
            "variants": [
                {
                    "question": "x-5=12两边加5，x=?",
                    "formula": "x=12+5",
                    "answer": 17,
                    "hint": "等式性质"
                },
                {
                    "question": "x+8=20两边减8，x=?",
                    "formula": "x=20-8",
                    "answer": 12,
                    "hint": "等式性质"
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
                    "explain": "题目说「老师告诉小红等式两边同时加同一个数等式仍成立。」，问的是「如果x+3=12，两边同时减3，x=?」，这是求差是多少"
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
                    "explain": "从题目中找到的关键数是：3、3、12、3"
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
                    "explain": "减法：x + 3 - 3 = 12 - 3 → x = ?=7"
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
                    "text": "x + 3 - 3 = 12 - 3 → x = ?=7",
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
            ],
            "id": "5A-PROB-056"
        },
        {
            "scene": "老师告诉小红等式两边同时加同一个数等式仍成立。",
            "question": "如果x+3=13，两边同时减3，x=?",
            "formula": "x + 3 - 3 = 13 - 3 → x = ?",
            "answer": 10,
            "choices": [
                10,
                13,
                13,
                3
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "x",
                    "right": 7,
                    "balanced": true
                }
            },
            "knowledge": "等式的性质",
            "difficulty": 2,
            "hint": "等式两边同加减仍相等",
            "variants": [
                {
                    "question": "x-5=12两边加5，x=?",
                    "formula": "x=12+5",
                    "answer": 17,
                    "hint": "等式性质"
                },
                {
                    "question": "x+8=20两边减8，x=?",
                    "formula": "x=20-8",
                    "answer": 12,
                    "hint": "等式性质"
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
                    "explain": "题目说「老师告诉小红等式两边同时加同一个数等式仍成立。」，问的是「如果x+3=13，两边同时减3，x=?」，这是求差是多少"
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
                    "explain": "从题目中找到的关键数是：3、3、13、3"
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
                    "explain": "减法：x + 3 - 3 = 13 - 3 → x = ?=7"
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
                    "text": "x + 3 - 3 = 13 - 3 → x = ?=7",
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
            ],
            "id": "5A-PROB-057"
        },
        {
            "scene": "小红解方程x+19=49。",
            "question": "x等于多少？",
            "formula": "x + 19 = 49 → x = ?",
            "answer": 30,
            "choices": [
                30,
                55,
                49,
                19
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "x",
                    "right": 25,
                    "balanced": true
                }
            },
            "knowledge": "解方程",
            "difficulty": 2,
            "hint": "两边减19",
            "variants": [
                {
                    "question": "x+23=50，x=?",
                    "formula": "x=50-23",
                    "answer": 27,
                    "hint": "两边减23"
                },
                {
                    "question": "x-18=30，x=?",
                    "formula": "x=30+18",
                    "answer": 48,
                    "hint": "两边加18"
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
                    "explain": "题目说「小红解方程x+19=49。」，问的是「x等于多少？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：19 和 49",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：19 和 49",
                    "explain": "从题目中找到的关键数是：19、49"
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
                    "explain": "加法：x + 19 = 49 → x = ?=25"
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
                    "text": "x + 19 = 49 → x = ?=25",
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
            ],
            "id": "5A-PROB-058"
        },
        {
            "scene": "小红解方程x+20=55。",
            "question": "x等于多少？",
            "formula": "x + 20 = 55 → x = ?",
            "answer": 35,
            "choices": [
                35,
                55,
                55,
                20
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "x",
                    "right": 25,
                    "balanced": true
                }
            },
            "knowledge": "解方程",
            "difficulty": 2,
            "hint": "两边减20",
            "variants": [
                {
                    "question": "x+23=50，x=?",
                    "formula": "x=50-23",
                    "answer": 27,
                    "hint": "两边减23"
                },
                {
                    "question": "x-18=30，x=?",
                    "formula": "x=30+18",
                    "answer": 48,
                    "hint": "两边加18"
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
                    "explain": "题目说「小红解方程x+20=55。」，问的是「x等于多少？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：20 和 55",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：20 和 55",
                    "explain": "从题目中找到的关键数是：20、55"
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
                    "explain": "加法：x + 20 = 55 → x = ?=25"
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
                    "text": "x + 20 = 55 → x = ?=25",
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
            ],
            "id": "5A-PROB-059"
        },
        {
            "scene": "小亮解方程2x=22。",
            "question": "x等于多少？",
            "formula": "2x = 22 → x = ?",
            "answer": 6,
            "choices": [
                6,
                54,
                15,
                21
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "3x",
                    "right": 18,
                    "balanced": true
                }
            },
            "knowledge": "解ax=b型方程",
            "difficulty": 2,
            "hint": "两边除以2",
            "variants": [
                {
                    "question": "5x=45，x=?",
                    "formula": "x=45÷5",
                    "answer": 9,
                    "hint": "两边除以5"
                },
                {
                    "question": "4x=22，x=?",
                    "formula": "x=22÷4",
                    "answer": 8,
                    "hint": "两边除以4"
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
                    "explain": "题目说「小亮解方程2x=22。」，问的是「x等于多少？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：2 和 22",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：2 和 22",
                    "explain": "从题目中找到的关键数是：2、22"
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
                    "explain": "计算：2x = 22 → x = ?=6"
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
                    "text": "2x = 22 → x = ?=6",
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
            ],
            "id": "5A-PROB-060"
        },
        {
            "scene": "小亮解方程3x=25。",
            "question": "x等于多少？",
            "formula": "3x = 25 → x = ?",
            "answer": 6,
            "choices": [
                6,
                54,
                15,
                21
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "balance",
                "params": {
                    "left": "3x",
                    "right": 18,
                    "balanced": true
                }
            },
            "knowledge": "解ax=b型方程",
            "difficulty": 2,
            "hint": "两边除以3",
            "variants": [
                {
                    "question": "5x=45，x=?",
                    "formula": "x=45÷5",
                    "answer": 9,
                    "hint": "两边除以5"
                },
                {
                    "question": "4x=32，x=?",
                    "formula": "x=32÷4",
                    "answer": 8,
                    "hint": "两边除以4"
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
                    "explain": "题目说「小亮解方程3x=25。」，问的是「x等于多少？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：3 和 25",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：3 和 25",
                    "explain": "从题目中找到的关键数是：3、25"
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
                    "explain": "计算：3x = 25 → x = ?=6"
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
                    "text": "3x = 25 → x = ?=6",
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
            ],
            "id": "5A-PROB-061"
        },
        {
            "scene": "小红有x颗糖果，小亮有16颗，两人一共46颗。小红列方程。",
            "question": "x+16=46，x等于多少？",
            "formula": "x + 16 = 46 → x = ?",
            "answer": 30,
            "choices": [
                30,
                50,
                46,
                16
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 46,
                "parts": [
                    {
                        "label": "小红x",
                        "val": 26,
                        "color": "#00A896"
                    },
                    {
                        "label": "小亮15",
                        "val": 20,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "列方程解决实际问题",
            "difficulty": 2,
            "hint": "找等量关系列方程",
            "variants": [
                {
                    "question": "x+8=25，x=?",
                    "formula": "x=25-8",
                    "answer": 17,
                    "hint": "两边减8"
                },
                {
                    "question": "x+12=40，x=?",
                    "formula": "x=40-12",
                    "answer": 28,
                    "hint": "两边减12"
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
                    "explain": "题目说「小红有x颗糖果，小亮有16颗，两人一共46颗。小红列方程。」，问的是「x+16=46，x等于多少？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：16 和 46",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：16 和 46",
                    "explain": "从题目中找到的关键数是：16、46"
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
                    "explain": "加法：x + 16 = 46 → x = ?=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表26，合起来就是46",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "x + 16 = 46 → x = ?=20",
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
            ],
            "id": "5A-PROB-062"
        },
        {
            "scene": "小红有x颗糖果，小亮有18颗，两人一共51颗。小红列方程。",
            "question": "x+18=51，x等于多少？",
            "formula": "x + 18 = 51 → x = ?",
            "answer": 33,
            "choices": [
                33,
                50,
                51,
                18
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 51,
                "parts": [
                    {
                        "label": "小红x",
                        "val": 29,
                        "color": "#00A896"
                    },
                    {
                        "label": "小亮15",
                        "val": 22,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "列方程解决实际问题",
            "difficulty": 2,
            "hint": "找等量关系列方程",
            "variants": [
                {
                    "question": "x+8=25，x=?",
                    "formula": "x=25-8",
                    "answer": 17,
                    "hint": "两边减8"
                },
                {
                    "question": "x+12=40，x=?",
                    "formula": "x=40-12",
                    "answer": 28,
                    "hint": "两边减12"
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
                    "explain": "题目说「小红有x颗糖果，小亮有18颗，两人一共51颗。小红列方程。」，问的是「x+18=51，x等于多少？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：18 和 51",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：18 和 51",
                    "explain": "从题目中找到的关键数是：18、51"
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
                    "explain": "加法：x + 18 = 51 → x = ?=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表29，合起来就是51",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "x + 18 = 51 → x = ?=20",
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
            ],
            "id": "5A-PROB-063"
        },
        {
            "scene": "苹果比梨多7个，梨有x个苹果有4x个。老师让小红列方程4x-x=7。",
            "question": "3x=7，x等于多少？",
            "formula": "3x = 7... → x ≈ ?",
            "answer": 2.5,
            "choices": [
                2.5,
                3,
                4,
                7
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 7,
                "parts": [
                    {
                        "label": "2x",
                        "val": 7,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "稍复杂的方程",
            "difficulty": 3,
            "hint": "4x-x=3x",
            "variants": [
                {
                    "question": "3x+4=11，x=?",
                    "formula": "3x=8→x=?",
                    "answer": 4,
                    "hint": "先减4再除3"
                },
                {
                    "question": "4x-x=8，x=?",
                    "formula": "3x=8→x=?",
                    "answer": 4,
                    "hint": "合并同类项"
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
                    "explain": "题目说「苹果比梨多7个，梨有x个苹果有4x个。老师让小红列方程4x-x=7。」，问的是「3x=7，x等于多少？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：3 和 7",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：3 和 7",
                    "explain": "从题目中找到的关键数是：3、7"
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
                    "explain": "计算：3x = 7... → x ≈ ?=2.5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有1条等长的条形，每条代表7，合起来就是7",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3x = 7... → x ≈ ?=2.5",
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
            ],
            "id": "5A-PROB-064"
        },
        {
            "scene": "苹果比梨多7个，梨有x个苹果有3x个。老师让小红列方程3x-x=7。",
            "question": "3x=7，x等于多少？",
            "formula": "3x = 7... → x ≈ ?",
            "answer": 2.5,
            "choices": [
                2.5,
                3,
                3,
                7
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 7,
                "parts": [
                    {
                        "label": "2x",
                        "val": 7,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "稍复杂的方程",
            "difficulty": 3,
            "hint": "3x-x=3x",
            "variants": [
                {
                    "question": "3x+3=11，x=?",
                    "formula": "3x=8→x=?",
                    "answer": 4,
                    "hint": "先减3再除3"
                },
                {
                    "question": "3x-x=8，x=?",
                    "formula": "3x=8→x=?",
                    "answer": 4,
                    "hint": "合并同类项"
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
                    "explain": "题目说「苹果比梨多7个，梨有x个苹果有3x个。老师让小红列方程3x-x=7。」，问的是「3x=7，x等于多少？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：3 和 7",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：3 和 7",
                    "explain": "从题目中找到的关键数是：3、7"
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
                    "explain": "计算：3x = 7... → x ≈ ?=2.5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有1条等长的条形，每条代表7，合起来就是7",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3x = 7... → x ≈ ?=2.5",
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
            ],
            "id": "5A-PROB-065"
        },
        {
            "scene": "小红家的平行四边形花坛底6米高6米。她算花坛面积。",
            "question": "平行四边形面积是多少平方米？",
            "formula": "6 × 6 = ? m²",
            "answer": 24,
            "choices": [
                24,
                20,
                10,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "base": 6,
                    "height": 4
                }
            },
            "knowledge": "平行四边形的面积",
            "difficulty": 2,
            "hint": "底×高",
            "variants": [
                {
                    "question": "底8高5面积？",
                    "formula": "8×5=?",
                    "answer": 40,
                    "hint": "底乘高"
                },
                {
                    "question": "底10高3面积？",
                    "formula": "10×3=?",
                    "answer": 30,
                    "hint": "底乘高"
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
                    "explain": "题目说「小红家的平行四边形花坛底6米高6米。她算花坛面积。」，问的是「平行四边形面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：6 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：6 和 6",
                    "explain": "从题目中找到的关键数是：6、6"
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
                    "explain": "乘法：6 × 6 = ? m²=24"
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
                    "text": "6 × 6 = ? m²=24",
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
            ],
            "id": "5A-PROB-066"
        },
        {
            "scene": "小红家的平行四边形花坛底6米高3米。她算花坛面积。",
            "question": "平行四边形面积是多少平方米？",
            "formula": "6 × 3 = ? m²",
            "answer": 24,
            "choices": [
                24,
                20,
                10,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "base": 6,
                    "height": 4
                }
            },
            "knowledge": "平行四边形的面积",
            "difficulty": 2,
            "hint": "底×高",
            "variants": [
                {
                    "question": "底8高5面积？",
                    "formula": "8×5=?",
                    "answer": 40,
                    "hint": "底乘高"
                },
                {
                    "question": "底10高3面积？",
                    "formula": "10×3=?",
                    "answer": 30,
                    "hint": "底乘高"
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
                    "explain": "题目说「小红家的平行四边形花坛底6米高3米。她算花坛面积。」，问的是「平行四边形面积是多少平方米？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：6、3"
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
                    "explain": "乘法：6 × 3 = ? m²=24"
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
                    "text": "6 × 3 = ? m²=24",
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
            ],
            "id": "5A-PROB-067"
        },
        {
            "scene": "小红画了一个三角形底6厘米高6厘米。她算三角形面积。",
            "question": "三角形面积是多少平方厘米？",
            "formula": "6 × 6 ÷ 2 = ? cm²",
            "answer": 10,
            "choices": [
                10,
                20,
                9,
                14
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 5,
                    "height": 4
                }
            },
            "knowledge": "三角形的面积",
            "difficulty": 2,
            "hint": "底×高÷2",
            "variants": [
                {
                    "question": "底6高8面积？",
                    "formula": "6×8÷2=?",
                    "answer": 24,
                    "hint": "底高除2"
                },
                {
                    "question": "底10高6面积？",
                    "formula": "10×6÷2=?",
                    "answer": 20,
                    "hint": "底高除2"
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
                    "explain": "题目说「小红画了一个三角形底6厘米高6厘米。她算三角形面积。」，问的是「三角形面积是多少平方厘米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：6 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：6 和 6",
                    "explain": "从题目中找到的关键数是：6、6、2"
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
                    "explain": "乘法：6 × 6 ÷ 2 = ? cm²=10"
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
                    "text": "6 × 6 ÷ 2 = ? cm²=10",
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
            ],
            "id": "5A-PROB-068"
        },
        {
            "scene": "小红画了一个三角形底7厘米高3厘米。她算三角形面积。",
            "question": "三角形面积是多少平方厘米？",
            "formula": "7 × 3 ÷ 2 = ? cm²",
            "answer": 10,
            "choices": [
                10,
                20,
                9,
                14
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 5,
                    "height": 4
                }
            },
            "knowledge": "三角形的面积",
            "difficulty": 2,
            "hint": "底×高÷2",
            "variants": [
                {
                    "question": "底6高8面积？",
                    "formula": "6×8÷2=?",
                    "answer": 24,
                    "hint": "底高除2"
                },
                {
                    "question": "底10高3面积？",
                    "formula": "10×3÷2=?",
                    "answer": 20,
                    "hint": "底高除2"
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
                    "explain": "题目说「小红画了一个三角形底7厘米高3厘米。她算三角形面积。」，问的是「三角形面积是多少平方厘米？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：7、3、2"
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
                    "explain": "乘法：7 × 3 ÷ 2 = ? cm²=10"
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
                    "text": "7 × 3 ÷ 2 = ? cm²=10",
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
            ],
            "id": "5A-PROB-069"
        },
        {
            "scene": "小亮家的梯形花圃上底4米下底7米高5米。他算花圃面积。",
            "question": "梯形面积是多少平方米？",
            "formula": "(4+7) × 5 ÷ 3 = ? m²",
            "answer": 16,
            "choices": [
                16,
                32,
                8,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "trapezoid",
                "params": {
                    "top": 3,
                    "bottom": 5,
                    "height": 4
                }
            },
            "knowledge": "梯形的面积",
            "difficulty": 3,
            "hint": "(上底+下底)×高÷3",
            "variants": [
                {
                    "question": "上5下6高7面积？",
                    "formula": "(5+6)×7÷3=?",
                    "answer": 25,
                    "hint": "上底下底和乘高除3"
                },
                {
                    "question": "上3下8高5面积？",
                    "formula": "(3+8)×5÷3=?",
                    "answer": 20,
                    "hint": "上底下底和乘高除3"
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
                    "explain": "题目说「小亮家的梯形花圃上底4米下底7米高5米。他算花圃面积。」，问的是「梯形面积是多少平方米？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：4、7、5、3"
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
                    "explain": "乘法：(4+7) × 5 ÷ 3 = ? m²=16"
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
                    "text": "(4+7) × 5 ÷ 3 = ? m²=16",
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
            ],
            "id": "5A-PROB-070"
        },
        {
            "scene": "小亮家的梯形花圃上底3米下底5米高5米。他算花圃面积。",
            "question": "梯形面积是多少平方米？",
            "formula": "(3+5) × 5 ÷ 2 = ? m²",
            "answer": 16,
            "choices": [
                16,
                32,
                8,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "trapezoid",
                "params": {
                    "top": 3,
                    "bottom": 5,
                    "height": 4
                }
            },
            "knowledge": "梯形的面积",
            "difficulty": 3,
            "hint": "(上底+下底)×高÷2",
            "variants": [
                {
                    "question": "上5下6高5面积？",
                    "formula": "(5+6)×5÷2=?",
                    "answer": 25,
                    "hint": "上底下底和乘高除2"
                },
                {
                    "question": "上2下8高5面积？",
                    "formula": "(2+8)×5÷2=?",
                    "answer": 20,
                    "hint": "上底下底和乘高除2"
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
                    "explain": "题目说「小亮家的梯形花圃上底3米下底5米高5米。他算花圃面积。」，问的是「梯形面积是多少平方米？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：3、5、5、2"
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
                    "explain": "乘法：(3+5) × 5 ÷ 2 = ? m²=16"
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
                    "text": "(3+5) × 5 ÷ 2 = ? m²=16",
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
            ],
            "id": "5A-PROB-071"
        },
        {
            "scene": "小红家的L形花坛可以分成两个长方形：一个3×3，一个3×3。她算总面积。",
            "question": "组合图形面积是多少？",
            "formula": "3×3 + 3×3 = ?",
            "answer": 18,
            "choices": [
                18,
                12,
                6,
                24
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "composite",
                "params": {
                    "parts": [
                        {
                            "shape": "rectangle",
                            "l": 3,
                            "w": 4
                        },
                        {
                            "shape": "rectangle",
                            "l": 2,
                            "w": 3
                        }
                    ]
                }
            },
            "knowledge": "组合图形的面积",
            "difficulty": 3,
            "hint": "分割成基本图形再求和",
            "variants": [
                {
                    "question": "分5×3和3×3总面积？",
                    "formula": "15+8=?",
                    "answer": 23,
                    "hint": "分割求和"
                },
                {
                    "question": "分6×3和3×3总面积？",
                    "formula": "13+9=?",
                    "answer": 21,
                    "hint": "分割求和"
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
                    "explain": "题目说「小红家的L形花坛可以分成两个长方形：一个3×3，一个3×3。她算总面积。」，问的是「组合图形面积是多少？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：3、3、3、3"
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
                    "explain": "乘法：3×3 + 3×3 = ?=18"
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
                    "text": "3×3 + 3×3 = ?=18",
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
            ],
            "id": "5A-PROB-072"
        },
        {
            "scene": "小红家的L形花坛可以分成两个长方形：一个3×4，一个3×3。她算总面积。",
            "question": "组合图形面积是多少？",
            "formula": "3×4 + 3×3 = ?",
            "answer": 21,
            "choices": [
                21,
                12,
                6,
                24
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "composite",
                "params": {
                    "parts": [
                        {
                            "shape": "rectangle",
                            "l": 3,
                            "w": 4
                        },
                        {
                            "shape": "rectangle",
                            "l": 2,
                            "w": 3
                        }
                    ]
                }
            },
            "knowledge": "组合图形的面积",
            "difficulty": 3,
            "hint": "分割成基本图形再求和",
            "variants": [
                {
                    "question": "分5×3和4×3总面积？",
                    "formula": "15+8=?",
                    "answer": 23,
                    "hint": "分割求和"
                },
                {
                    "question": "分6×3和3×3总面积？",
                    "formula": "13+9=?",
                    "answer": 21,
                    "hint": "分割求和"
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
                    "explain": "题目说「小红家的L形花坛可以分成两个长方形：一个3×4，一个3×3。她算总面积。」，问的是「组合图形面积是多少？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：3 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：3 和 4",
                    "explain": "从题目中找到的关键数是：3、4、3、3"
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
                    "explain": "乘法：3×4 + 3×3 = ?=18"
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
                    "text": "3×4 + 3×3 = ?=18",
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
            ],
            "id": "5A-PROB-073"
        },
        {
            "scene": "小红用方格纸估算一片叶子的面积，数了整格16个半格7个。",
            "question": "叶子面积约是多少格？",
            "formula": "16 + 7÷2 = ? (格)",
            "answer": 16,
            "choices": [
                16,
                20,
                16,
                7
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "grid",
                "params": {
                    "fullCells": 12,
                    "halfCells": 8
                }
            },
            "knowledge": "不规则图形的面积估算",
            "difficulty": 2,
            "hint": "不满半格算半格",
            "variants": [
                {
                    "question": "整格15半格6面积约？",
                    "formula": "15+6÷2=?",
                    "answer": 18,
                    "hint": "半格算半"
                },
                {
                    "question": "整格10半格4面积约？",
                    "formula": "10+4÷2=?",
                    "answer": 16,
                    "hint": "半格算半"
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
                    "explain": "题目说「小红用方格纸估算一片叶子的面积，数了整格16个半格7个。」，问的是「叶子面积约是多少格？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：16 和 7",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：16 和 7",
                    "explain": "从题目中找到的关键数是：16、7、2"
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
                    "explain": "除法：16 + 7÷2 = ? (格)=16"
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
                    "text": "16 + 7÷2 = ? (格)=16",
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
            ],
            "id": "5A-PROB-074"
        },
        {
            "scene": "小红用方格纸估算一片叶子的面积，数了整格17个半格8个。",
            "question": "叶子面积约是多少格？",
            "formula": "17 + 8÷2 = ? (格)",
            "answer": 16,
            "choices": [
                16,
                20,
                17,
                8
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "grid",
                "params": {
                    "fullCells": 12,
                    "halfCells": 8
                }
            },
            "knowledge": "不规则图形的面积估算",
            "difficulty": 2,
            "hint": "不满半格算半格",
            "variants": [
                {
                    "question": "整格15半格6面积约？",
                    "formula": "15+6÷2=?",
                    "answer": 18,
                    "hint": "半格算半"
                },
                {
                    "question": "整格10半格4面积约？",
                    "formula": "10+4÷2=?",
                    "answer": 17,
                    "hint": "半格算半"
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
                    "explain": "题目说「小红用方格纸估算一片叶子的面积，数了整格17个半格8个。」，问的是「叶子面积约是多少格？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：17 和 8",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：17 和 8",
                    "explain": "从题目中找到的关键数是：17、8、2"
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
                    "explain": "除法：17 + 8÷2 = ? (格)=16"
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
                    "text": "17 + 8÷2 = ? (格)=16",
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
            ],
            "id": "5A-PROB-075"
        }
    ],
    "knowledgeMap": [
        {
            "id": "5A-01",
            "name": "小数乘整数",
            "concept": "先按整数乘，因数有几位小数积就有几位",
            "prerequisite": "四下·小数意义+三下·乘法",
            "extends": "5A-02 小数乘小数",
            "visualStrategy": "面积模型",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-02",
            "name": "小数乘小数",
            "concept": "因数共有几位小数积就有几位，位数不够前面补0",
            "prerequisite": "小数乘整数",
            "extends": "5A-03 积的近似数",
            "visualStrategy": "面积模型",
            "visualType": "areaModel",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "5A-03",
            "name": "积的近似数",
            "concept": "四舍五入保留指定小数位数",
            "prerequisite": "四下·小数近似数",
            "extends": "5A-10 商的近似数",
            "visualStrategy": "数轴",
            "visualType": "numberLine",
            "coreLiteracy": "数感",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "5A-04",
            "name": "整数运算定律推广到小数",
            "concept": "乘法交换/结合/分配律适用于小数",
            "prerequisite": "小数乘法+四下·运算定律",
            "extends": "6A-03 分数简便",
            "visualStrategy": "面积模型",
            "visualType": "barModel",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "5A-05",
            "name": "小数乘法解决问题",
            "concept": "分段计费（出租/水费），估算购物",
            "prerequisite": "小数乘法",
            "extends": "6A-31 折扣",
            "visualStrategy": "表格+线段图",
            "visualType": "barModel",
            "coreLiteracy": "应用意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "5A-06",
            "name": "用数对确定位置与图形平移",
            "concept": "(列,行)表示位置，平移后数对变化",
            "prerequisite": "三下·八个方向+四下·平移",
            "extends": "6A-06 方向和距离",
            "visualStrategy": "方格纸（坐标系雏形）",
            "visualType": "geometry",
            "coreLiteracy": "空间观念",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-08",
            "name": "除数是整数的小数除法",
            "concept": "商的小数点要和被除数小数点对齐",
            "prerequisite": "四下·小数加减+三下·除法",
            "extends": "5A-09 除数是小数",
            "visualStrategy": "竖式格子+面积模型",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-09",
            "name": "除数是小数的除法",
            "concept": "除数扩大成整数，被除数同时扩大相同倍数",
            "prerequisite": "除数是整数的小数除法",
            "extends": "5A-10 商的近似数",
            "visualStrategy": "竖式格子+动画",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "5A-10",
            "name": "商的近似数",
            "concept": "除不尽时四舍五入保留小数位",
            "prerequisite": "除数是小数的除法",
            "extends": "5A-11 循环小数",
            "visualStrategy": "竖式格子",
            "visualType": "numberLine",
            "coreLiteracy": "数感",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "5A-11",
            "name": "循环小数",
            "concept": "一个小数从小数部分某位起一个或几个数字依次不断重复出现",
            "prerequisite": "商的近似数",
            "extends": "6B-01 负数认识",
            "visualStrategy": "数轴+循环节标注",
            "visualType": "numberLine",
            "coreLiteracy": "数感",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "5A-12",
            "name": "小数除法解决问题",
            "concept": "进一法和去尾法取近似值",
            "prerequisite": "小数除法",
            "extends": "6A-28 求百分率",
            "visualStrategy": "实物场景图",
            "visualType": "barModel",
            "coreLiteracy": "应用意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "5A-13",
            "name": "事件发生的确定性和不确定性",
            "concept": "一定/不可能/可能",
            "prerequisite": "生活常识",
            "extends": "5A-14 可能性大小",
            "visualStrategy": "实物场景图",
            "visualType": "barModel",
            "coreLiteracy": "数据意识",
            "difficulty": 1,
            "isKeyTopic": false
        },
        {
            "id": "5A-14",
            "name": "可能性的大小",
            "concept": "数量多可能性大，数量少可能性小",
            "prerequisite": "确定性",
            "extends": "5A-15 公平规则",
            "visualStrategy": "条形对比图",
            "visualType": "barModel",
            "coreLiteracy": "数据意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "5A-15",
            "name": "根据可能性设计公平规则",
            "concept": "双方可能性相等即为公平",
            "prerequisite": "可能性大小",
            "extends": "6B-31 统计概率总复习",
            "visualStrategy": "表格",
            "visualType": "barModel",
            "coreLiteracy": "应用意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "5A-16",
            "name": "用字母表示数",
            "concept": "字母可以表示数、数量关系、运算定律",
            "prerequisite": "四则运算+运算定律",
            "extends": "5A-17 公式",
            "visualStrategy": "线段图",
            "visualType": "numberLine",
            "coreLiteracy": "符号意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-17",
            "name": "用字母表示运算定律和公式",
            "concept": "S=ab，C=2(a+b)",
            "prerequisite": "用字母表示数",
            "extends": "5A-18 方程意义",
            "visualStrategy": "几何标注图",
            "visualType": "geometry",
            "coreLiteracy": "符号意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "5A-18",
            "name": "方程的意义",
            "concept": "含有未知数的等式叫方程",
            "prerequisite": "用字母表示数",
            "extends": "5A-19 等式性质",
            "visualStrategy": "天平图",
            "visualType": "geometry",
            "coreLiteracy": "模型意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-19",
            "name": "等式的性质",
            "concept": "等式两边同时加/减/乘/除同一个数（除0外），仍相等",
            "prerequisite": "方程意义",
            "extends": "5A-20 解方程",
            "visualStrategy": "天平图",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-20",
            "name": "解方程",
            "concept": "利用等式性质解x+a=b / x-a=b 型",
            "prerequisite": "等式性质",
            "extends": "5A-21 ax=b型",
            "visualStrategy": "天平图+步骤标注",
            "visualType": "geometry",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-21",
            "name": "解 ax=b / x÷a=b 型方程",
            "concept": "利用等式性质",
            "prerequisite": "解方程基础",
            "extends": "5A-22 列方程",
            "visualStrategy": "天平图+步骤标注",
            "visualType": "geometry",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "5A-22",
            "name": "列方程解决实际问题",
            "concept": "找等量关系→设未知数→列方程→解→检验",
            "prerequisite": "解方程",
            "extends": "5A-23 复杂方程",
            "visualStrategy": "线段图/天平图",
            "visualType": "barModel",
            "coreLiteracy": "模型意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-23",
            "name": "稍复杂的方程",
            "concept": "ax±b=c / ax±bx=c 型",
            "prerequisite": "列方程解题",
            "extends": "6A-12 已知几分之几求整体",
            "visualStrategy": "线段图",
            "visualType": "barModel",
            "coreLiteracy": "模型意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "5A-24",
            "name": "平行四边形的面积",
            "concept": "底×高（割补成长方形）",
            "prerequisite": "四下·平行四边形特征+三下·面积",
            "extends": "5A-25 三角形面积",
            "visualStrategy": "割补动画",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-25",
            "name": "三角形的面积",
            "concept": "底×高÷2（两个完全一样的三角形拼成平行四边形）",
            "prerequisite": "平行四边形面积",
            "extends": "5A-26 梯形面积",
            "visualStrategy": "拼接示意图",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-26",
            "name": "梯形的面积",
            "concept": "(上底+下底)×高÷2",
            "prerequisite": "三角形面积+平行四边形面积",
            "extends": "5A-27 组合图形",
            "visualStrategy": "拼接+割补图",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "5A-27",
            "name": "组合图形的面积",
            "concept": "分割或添补为基本图形再求面积",
            "prerequisite": "多边形面积",
            "extends": "5A-28 不规则估算",
            "visualStrategy": "分割/添补示意图",
            "visualType": "geometry",
            "coreLiteracy": "应用意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "5A-28",
            "name": "不规则图形的面积估算",
            "concept": "数方格法，不满一格按半格算",
            "prerequisite": "组合图形面积",
            "extends": "6B-28 图形测量总复习",
            "visualStrategy": "方格纸",
            "visualType": "geometry",
            "coreLiteracy": "量感",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "5A-29",
            "name": "植树问题（两端都栽）",
            "concept": "棵数=间隔数+1",
            "prerequisite": "除法意义",
            "extends": "5A-30 其他植树",
            "visualStrategy": "线段图",
            "visualType": "numberLine",
            "coreLiteracy": "模型意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "5A-30",
            "name": "植树问题（两端不栽/一端栽/环形）",
            "concept": "棵数=间隔数-1（两端不栽）；棵数=间隔数（一端栽/环形）",
            "prerequisite": "两端都栽",
            "extends": "6B-22 反比例应用",
            "visualStrategy": "线段图+环形图",
            "visualType": "numberLine",
            "coreLiteracy": "模型意识",
            "difficulty": 3,
            "isKeyTopic": true
        }
    ]
};
