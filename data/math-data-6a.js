window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["6a"] = {
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
            "knowledge": "比的意义（2024版移入六下·拓展保留）",
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
            "knowledge": "按比分配（2024版移入六下·拓展保留）",
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
                6.28,
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
            "knowledge": "扇形统计图（2024版移入六下·拓展保留）",
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
            "knowledge": "选择合适的统计图（2024版移入六下·拓展保留）",
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
                        "求妈妈吃的占蛋糕的几分之几",
                        "求小红吃了多少",
                        "求蛋糕还剩几分之几",
                        "求蛋糕有几份"
                    ],
                    "answer": "求妈妈吃的占蛋糕的几分之几",
                    "explain": "小红吃3/9，妈妈吃的是她的2倍，问妈妈吃了这块蛋糕的几分之几"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "小红吃3/9，妈妈是她的2倍",
                        "妈妈吃3/9，小红是她的2倍",
                        "小红吃了2份",
                        "妈妈吃1/9"
                    ],
                    "answer": "小红吃3/9，妈妈是她的2倍",
                    "explain": "妈妈吃的=小红吃的×2=3/9×2"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：3/9×2=6/9，分子填6",
                        "加法：3/9+2=2又3/9",
                        "减法：3/9-2",
                        "除法：3/9÷2"
                    ],
                    "answer": "乘法：3/9×2=6/9，分子填6",
                    "explain": "分数乘整数：分子3×2=6，分母9不变，得6/9"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：整体平均分成9份，涂色6份，表示6/9，即妈妈吃的那部分",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3/9×2：只乘分子，3×2=6，分母9不变，结果是6/9",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "分数乘整数：用分子乘整数的积作分子，分母不变",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红吃了一块蛋糕的3/10，妈妈吃了她的3倍。她算妈妈吃了这块蛋糕的几分之几。",
            "question": "3/10 × 3 = ?/10（填分子）",
            "formula": "3/10 × 3 = ?/10",
            "answer": 9,
            "choices": [
                9,
                6,
                3,
                10
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 9,
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
                    "answer": 9,
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
                        "求妈妈吃的占蛋糕的几分之几",
                        "求小红吃了多少",
                        "求蛋糕还剩几分之几",
                        "求蛋糕有几份"
                    ],
                    "answer": "求妈妈吃的占蛋糕的几分之几",
                    "explain": "小红吃3/10，妈妈吃的是她的3倍，问妈妈吃了这块蛋糕的几分之几"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "小红吃3/10，妈妈是她的3倍",
                        "妈妈吃3/10，小红是她的3倍",
                        "小红吃了3份",
                        "妈妈吃1/10"
                    ],
                    "answer": "小红吃3/10，妈妈是她的3倍",
                    "explain": "妈妈吃的=小红吃的×3=3/10×3"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：3/10×3=9/10，分子填9",
                        "加法：3/10+3=3又3/10",
                        "减法：3/10-3",
                        "除法：3/10÷3"
                    ],
                    "answer": "乘法：3/10×3=9/10，分子填9",
                    "explain": "分数乘整数：分子3×3=9，分母10不变，得9/10"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：整体平均分成10份，涂色9份，表示9/10，即妈妈吃的那部分",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3/10×3：只乘分子，3×3=9，分母10不变，结果是9/10",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "分数乘整数：用分子乘整数的积作分子，分母不变",
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
                    "question": "1/2×1/4=?/8（填分子）",
                    "formula": "1/2×1/4=?/8",
                    "answer": 1,
                    "hint": "1×1=1"
                },
                {
                    "question": "2/4×4/5=?/20（填分子）",
                    "formula": "2/4×4/5=?/20",
                    "answer": 8,
                    "hint": "2×4=8"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求剪下纸条长多少米",
                        "求纸条全长",
                        "求剩下多长",
                        "求剪了几次"
                    ],
                    "answer": "求剪下纸条长多少米",
                    "explain": "纸条长4/5米，剪下它的1/2，问剪下多少米"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "纸条长4/5米，剪下1/2",
                        "纸条长1/2米，剪下4/5",
                        "纸条长5米",
                        "剪下2份"
                    ],
                    "answer": "纸条长4/5米，剪下1/2",
                    "explain": "求4/5米的1/2是多少，用乘法"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：4/5×1/2=4/10，分子填4",
                        "加法：4/5+1/2",
                        "减法：4/5-1/2",
                        "除法：4/5÷1/2"
                    ],
                    "answer": "乘法：4/5×1/2=4/10，分子填4",
                    "explain": "分数乘分数：分子4×1=4，分母5×2=10，得4/10"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：把4/5平均分成2份取1份，相当于整体分成10份取4份，即4/10",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4/5×1/2：分子乘分子4×1=4，分母乘分母5×2=10",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "分数乘分数：分子相乘作分子，分母相乘作分母",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红有一张长方形纸条，长是4/5米。她剪下它的1/3。她算剪下多少米。",
            "question": "4/5 × 1/3 = ?/15（填分子）",
            "formula": "4/5 × 1/3 = ?/15",
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
                "total": 15,
                "color": "#00A896"
            },
            "knowledge": "分数乘分数",
            "difficulty": 3,
            "hint": "分子乘分子分母乘分母",
            "variants": [
                {
                    "question": "1/3×1/4=?/12（填分子）",
                    "formula": "1/3×1/4=?/12",
                    "answer": 1,
                    "hint": "1×1=1"
                },
                {
                    "question": "3/4×4/5=?/20（填分子）",
                    "formula": "3/4×4/5=?/20",
                    "answer": 12,
                    "hint": "3×4=12"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求剪下纸条长多少米",
                        "求纸条全长",
                        "求剩下多长",
                        "求剪了几次"
                    ],
                    "answer": "求剪下纸条长多少米",
                    "explain": "纸条长4/5米，剪下它的1/3，问剪下多少米"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "纸条长4/5米，剪下1/3",
                        "纸条长1/3米，剪下4/5",
                        "纸条长5米",
                        "剪下3份"
                    ],
                    "answer": "纸条长4/5米，剪下1/3",
                    "explain": "求4/5米的1/3是多少，用乘法"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：4/5×1/3=4/15，分子填4",
                        "加法：4/5+1/3",
                        "减法：4/5-1/3",
                        "除法：4/5÷1/3"
                    ],
                    "answer": "乘法：4/5×1/3=4/15，分子填4",
                    "explain": "分数乘分数：分子4×1=4，分母5×3=15，得4/15"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：把4/5平均分成3份取1份，相当于整体分成15份取4份，即4/15",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4/5×1/3：分子乘分子4×1=4，分母乘分母5×3=15",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "分数乘分数：分子相乘作分子，分母相乘作分母",
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
                5,
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
                        "求括号里2/6+4/6的和是多少",
                        "求1/4是多少",
                        "求乘法的积",
                        "求一共有几份"
                    ],
                    "answer": "求括号里2/6+4/6的和是多少",
                    "explain": "乘法分配律把1/4×2/6+1/4×4/6变成1/4×(2/6+4/6)，要先算括号里的加法"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两个同分母分数2/6和4/6",
                        "两个分数是1/4和2/6",
                        "只有2/6一个分数",
                        "分母不同"
                    ],
                    "answer": "两个同分母分数2/6和4/6",
                    "explain": "括号里是2/6+4/6，同分母分数相加"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "加法：2/6+4/6=(2+4)/6=6/6，分子填6",
                        "乘法：2×4=8",
                        "减法：4-2=2",
                        "除法：4÷2=2"
                    ],
                    "answer": "加法：2/6+4/6=(2+4)/6=6/6，分子填6",
                    "explain": "同分母分数相加，分子相加分母不变：2+4=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：整体平均分成6份，2份加4份共6份，全部涂满表示6/6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2/6+4/6：同分母，分子相加2+4=6，得6/6=1",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "同分母分数加减法：分母不变，分子相加减",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红算1/5×2/7+1/5×3/7。她用乘法分配律变成1/5×(2/7+3/7)。",
            "question": "2/7+3/7=?/7（填分子）",
            "formula": "2/7+3/7=?/7",
            "answer": 5,
            "choices": [
                5,
                7,
                6,
                2
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 5,
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
                        "求括号里2/7+3/7的和是多少",
                        "求1/5是多少",
                        "求乘法的积",
                        "求一共有几份"
                    ],
                    "answer": "求括号里2/7+3/7的和是多少",
                    "explain": "乘法分配律把1/5×2/7+1/5×3/7变成1/5×(2/7+3/7)，要先算括号里的加法"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两个同分母分数2/7和3/7",
                        "两个分数是1/5和2/7",
                        "只有2/7一个分数",
                        "分母不同"
                    ],
                    "answer": "两个同分母分数2/7和3/7",
                    "explain": "括号里是2/7+3/7，同分母分数相加"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "加法：2/7+3/7=(2+3)/7=5/7，分子填5",
                        "乘法：2×3=6",
                        "减法：3-2=1",
                        "除法：3÷2"
                    ],
                    "answer": "加法：2/7+3/7=(2+3)/7=5/7，分子填5",
                    "explain": "同分母分数相加，分子相加分母不变：2+3=5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：整体平均分成7份，2份加3份共5份，涂色5份表示5/7",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2/7+3/7：同分母，分子相加2+3=5，得5/7",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "同分母分数加减法：分母不变，分子相加减",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一袋大米80千克，第一周吃了1/4，第二周吃了剩下的1/4。小红算第二周吃了多少千克。",
            "question": "第二周吃了？千克",
            "formula": "80×1/4=20 → (80-20)×1/4=?",
            "answer": 15,
            "choices": [
                15,
                20,
                5,
                45
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 80,
                "parts": [
                    {
                        "label": "第一周20",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "第二周15",
                        "val": 15,
                        "color": "#F5B800"
                    },
                    {
                        "label": "剩余45",
                        "val": 45,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "分数乘法解决问题（连续求几分之几）",
            "difficulty": 3,
            "hint": "先算第一周再算第二周",
            "variants": [
                {
                    "question": "24米先用1/4，第一次用？米",
                    "formula": "24×1/4=?",
                    "answer": 6,
                    "hint": "求总量的1/4用乘法"
                },
                {
                    "question": "40个先用1/5，第一次用？个",
                    "formula": "40×1/5=?",
                    "answer": 8,
                    "hint": "求总量的1/5用乘法"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求第二周吃了多少千克",
                        "求第一周吃了多少千克",
                        "求一共吃了多少千克",
                        "求还剩多少千克"
                    ],
                    "answer": "求第二周吃了多少千克",
                    "explain": "第一周吃总量的1/4，第二周吃剩下的1/4，问第二周吃多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "大米80千克，第一周1/4，第二周是剩下的1/4",
                        "大米80千克，两周都吃1/4",
                        "第一周吃剩下的1/4",
                        "只有80千克一个信息"
                    ],
                    "answer": "大米80千克，第一周1/4，第二周是剩下的1/4",
                    "explain": "第一周吃了80×1/4=20千克，剩下80-20=60千克"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：80×1/4=20 → (80-20)×1/4=15",
                        "80×1/4=20直接作答案",
                        "80×(1/4+1/4)=40",
                        "80×1/4÷1/4=20"
                    ],
                    "answer": "乘法：80×1/4=20 → (80-20)×1/4=15",
                    "explain": "连续求几分之几：先算第一周20千克，再算剩下的60千克的1/4，得15千克"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：总量80千克分成三段，第一周20、第二周15、剩余45",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "分步算：第一周80×1/4=20千克；剩下80-20=60千克；第二周60×1/4=15千克",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "连续求一个数的几分之几：每一步的单位1都在变化，要分步计算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一袋大米60千克，第一周吃了1/4，第二周吃了剩下的1/5。小红算第二周吃了多少千克。",
            "question": "第二周吃了？千克",
            "formula": "60×1/4=15 → (60-15)×1/5=?",
            "answer": 9,
            "choices": [
                9,
                15,
                5,
                36
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 60,
                "parts": [
                    {
                        "label": "第一周15",
                        "val": 15,
                        "color": "#00A896"
                    },
                    {
                        "label": "第二周9",
                        "val": 9,
                        "color": "#F5B800"
                    },
                    {
                        "label": "剩余36",
                        "val": 36,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "分数乘法解决问题（连续求几分之几）",
            "difficulty": 3,
            "hint": "先算第一周再算第二周",
            "variants": [
                {
                    "question": "25米先用1/5，第一次用？米",
                    "formula": "25×1/5=?",
                    "answer": 5,
                    "hint": "求总量的1/5用乘法"
                },
                {
                    "question": "50页先看1/5再看剩下的1/5，第二次看？页",
                    "formula": "50×1/5=10 → (50-10)×1/5=?",
                    "answer": 8,
                    "hint": "分步算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求第二周吃了多少千克",
                        "求第一周吃了多少千克",
                        "求一共吃了多少千克",
                        "求还剩多少千克"
                    ],
                    "answer": "求第二周吃了多少千克",
                    "explain": "第一周吃总量的1/4，第二周吃剩下的1/5，问第二周吃多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "大米60千克，第一周1/4，第二周是剩下的1/5",
                        "大米60千克，两周都吃1/4",
                        "第一周吃剩下的1/5",
                        "只有60千克一个信息"
                    ],
                    "answer": "大米60千克，第一周1/4，第二周是剩下的1/5",
                    "explain": "第一周吃了60×1/4=15千克，剩下60-15=45千克"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：60×1/4=15 → (60-15)×1/5=9",
                        "60×1/4=15直接作答案",
                        "60×(1/4+1/5)=27",
                        "60×1/5=12直接作答案"
                    ],
                    "answer": "乘法：60×1/4=15 → (60-15)×1/5=9",
                    "explain": "连续求几分之几：先算第一周15千克，再算剩下的45千克的1/5，得9千克"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：总量60千克分成三段，第一周15、第二周9、剩余36",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "分步算：第一周60×1/4=15千克；剩下45千克；第二周45×1/5=9千克",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "连续求一个数的几分之几：每一步的单位1都在变化，要分步计算",
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
                "total": 33.6,
                "parts": [
                    {
                        "label": "小红28",
                        "val": 28,
                        "color": "#00A896"
                    },
                    {
                        "label": "多5.6",
                        "val": 5.6,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "分数乘法解决问题（求比一个数多/少几分之几）",
            "difficulty": 3,
            "hint": "多1/5就是×(1+1/5)",
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
                        "求小亮有几颗糖果",
                        "求小红有几颗糖果",
                        "求小亮比小红多几颗",
                        "求两人共几颗"
                    ],
                    "answer": "求小亮有几颗糖果",
                    "explain": "小红28颗，小亮比小红多1/5，问小亮有几颗"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "小红28颗，小亮多1/5",
                        "小亮28颗，小红多1/5",
                        "小红28颗小亮少1/5",
                        "只有28颗一个信息"
                    ],
                    "answer": "小红28颗，小亮多1/5",
                    "explain": "小亮的糖果=小红的(1+1/5)倍"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：28×(1+1/5)=28×6/5=33.6",
                        "28+1/5",
                        "28×1/5=5.6直接作答案",
                        "28÷(1+1/5)"
                    ],
                    "answer": "乘法：28×(1+1/5)=28×6/5=33.6",
                    "explain": "求比一个数多几分之几的数：用这个数×(1+几分之几)"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：小红28颗为一份，小亮是它的(1+1/5)，多出5.6颗",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "小亮=28×(1+1/5)=28×1.2=33.6颗",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求比一个数多（少）几分之几：单位1×(1±几分之几)",
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
                "total": 18.666667,
                "parts": [
                    {
                        "label": "小红16",
                        "val": 16,
                        "color": "#00A896"
                    },
                    {
                        "label": "多2.67",
                        "val": 2.666667,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "分数乘法解决问题（求比一个数多/少几分之几）",
            "difficulty": 3,
            "hint": "多1/6就是×(1+1/6)",
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
                        "求小亮有几颗糖果",
                        "求小红有几颗糖果",
                        "求小亮比小红多几颗",
                        "求两人共几颗"
                    ],
                    "answer": "求小亮有几颗糖果",
                    "explain": "小红16颗，小亮比小红多1/6，问小亮有几颗"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "小红16颗，小亮多1/6",
                        "小亮16颗，小红多1/6",
                        "小红16颗小亮少1/6",
                        "只有16颗一个信息"
                    ],
                    "answer": "小红16颗，小亮多1/6",
                    "explain": "小亮的糖果=小红的(1+1/6)倍"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：16×(1+1/6)=16×7/6≈18.67",
                        "16+1/6",
                        "16×1/6=2.67直接作答案",
                        "16÷(1+1/6)"
                    ],
                    "answer": "乘法：16×(1+1/6)=16×7/6≈18.67",
                    "explain": "求比一个数多几分之几的数：用这个数×(1+几分之几)"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：小红16颗为一份，小亮是它的(1+1/6)，多出约2.67颗",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "小亮=16×(1+1/6)=16×7/6≈18.67颗",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求比一个数多（少）几分之几：单位1×(1±几分之几)",
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
                    "angle": 39,
                    "distance": 390,
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
                        "求图书馆在小红的什么方向",
                        "求图书馆离小红多远",
                        "求小红走了多少米",
                        "求学校在哪"
                    ],
                    "answer": "求图书馆在小红的什么方向",
                    "explain": "题目给出图书馆在东偏北39°方向，距离390米，问填1还是2"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "图书馆在东偏北39°，距离390米",
                        "图书馆在西偏南39°",
                        "图书馆在南偏东",
                        "没有距离信息"
                    ],
                    "answer": "图书馆在东偏北39°，距离390米",
                    "explain": "方向是东偏北，距离390米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "方向是东偏北，填1",
                        "方向是西偏南，填2",
                        "方向是北偏东",
                        "方向是南偏西"
                    ],
                    "answer": "方向是东偏北，填1",
                    "explain": "东偏北39°对应代码1，所以填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "方位图：小红在中心，图书馆在东偏北39°方向、距离390米处",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "描述位置要方向和距离两个要素：东偏北39°对应代码1",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "用方向和距离确定位置：方向（东偏北/西偏南等）+距离缺一不可",
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
                    "angle": 43,
                    "distance": 321,
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
                        "求图书馆在小红的什么方向",
                        "求图书馆离小红多远",
                        "求小红走了多少米",
                        "求学校在哪"
                    ],
                    "answer": "求图书馆在小红的什么方向",
                    "explain": "题目给出图书馆在东偏北43°方向，距离321米，问填1还是2"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "图书馆在东偏北43°，距离321米",
                        "图书馆在西偏南43°",
                        "图书馆在南偏东",
                        "没有距离信息"
                    ],
                    "answer": "图书馆在东偏北43°，距离321米",
                    "explain": "方向是东偏北，距离321米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "方向是东偏北，填1",
                        "方向是西偏南，填2",
                        "方向是北偏东",
                        "方向是南偏西"
                    ],
                    "answer": "方向是东偏北，填1",
                    "explain": "东偏北43°对应代码1，所以填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "方位图：小红在中心，图书馆在东偏北43°方向、距离321米处",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "描述位置要方向和距离两个要素：东偏北43°对应代码1",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "用方向和距离确定位置：方向（东偏北/西偏南等）+距离缺一不可",
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
                            "dist": 252
                        },
                        {
                            "dir": "东",
                            "dist": 201
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
                    "question": "向西300再向南252共？米",
                    "formula": "300+252=?",
                    "answer": 552,
                    "hint": "分段相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求从家到图书馆一共走了多少米",
                        "求家到学校多少米",
                        "求学校到图书馆多少米",
                        "求最短直线距离"
                    ],
                    "answer": "求从家到图书馆一共走了多少米",
                    "explain": "先向南252米到学校，再向东201米到图书馆，求总路程"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两段路程252米和201米",
                        "只有252米一段",
                        "只有201米一段",
                        "三段时间"
                    ],
                    "answer": "两段路程252米和201米",
                    "explain": "第一段252米，第二段201米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "加法：252+201=453",
                        "减法：252-201=51",
                        "乘法：252×201",
                        "除法：252÷201"
                    ],
                    "answer": "加法：252+201=453",
                    "explain": "总路程=各段路程相加：252+201=453米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "路线图：从家向南252米到学校，再向东201米到图书馆，两段连起来",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总路程=252+201=453米，与方向无关，只把各段距离相加",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "描述路线要说出方向和距离；求总路程时把各段距离相加",
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
                            "dist": 270
                        },
                        {
                            "dir": "东",
                            "dist": 222
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
                    "question": "向西300再向南270共？米",
                    "formula": "300+270=?",
                    "answer": 570,
                    "hint": "分段相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求从家到图书馆一共走了多少米",
                        "求家到学校多少米",
                        "求学校到图书馆多少米",
                        "求最短直线距离"
                    ],
                    "answer": "求从家到图书馆一共走了多少米",
                    "explain": "先向南270米到学校，再向东222米到图书馆，求总路程"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两段路程270米和222米",
                        "只有270米一段",
                        "只有222米一段",
                        "三段时间"
                    ],
                    "answer": "两段路程270米和222米",
                    "explain": "第一段270米，第二段222米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "加法：270+222=492",
                        "减法：270-222=48",
                        "乘法：270×222",
                        "除法：270÷222"
                    ],
                    "answer": "加法：270+222=492",
                    "explain": "总路程=各段路程相加：270+222=492米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "路线图：从家向南270米到学校，再向东222米到图书馆，两段连起来",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总路程=270+222=492米，与方向无关，只把各段距离相加",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "描述路线要说出方向和距离；求总路程时把各段距离相加",
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
                        "求2/6的倒数的分子",
                        "求2/6的值",
                        "求6的倒数",
                        "求2的倒数"
                    ],
                    "answer": "求2/6的倒数的分子",
                    "explain": "乘积为1的两个数互为倒数，问2/6的倒数是?/2，填分子"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "2/6的分子是2分母是6",
                        "分子是6分母是2",
                        "两个数都是2",
                        "倒数是6/2"
                    ],
                    "answer": "2/6的分子是2分母是6",
                    "explain": "2/6交换分子分母得到6/2"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "交换分子分母：6/2，分子填6",
                        "分子分母都加1",
                        "分子乘2",
                        "取相反数"
                    ],
                    "answer": "交换分子分母：6/2，分子填6",
                    "explain": "求倒数就是交换分子和分母的位置：2/6→6/2"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：2/6与6/2互为倒数，乘积为1",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2/6的倒数是6/2，分母2不变位置的是分子，分子填6",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "乘积为1的两个数互为倒数：把分子分母交换位置",
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
                2,
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
                        "求3/3的倒数的分子",
                        "求3/3的值",
                        "求3的倒数",
                        "求1的倒数"
                    ],
                    "answer": "求3/3的倒数的分子",
                    "explain": "乘积为1的两个数互为倒数，问3/3的倒数是?/3，填分子"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "3/3的分子是3分母是3",
                        "分子是3分母是1",
                        "分子分母不同",
                        "倒数是1/3"
                    ],
                    "answer": "3/3的分子是3分母是3",
                    "explain": "3/3交换分子分母仍是3/3"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "交换分子分母：3/3，分子填3",
                        "分子分母都加1",
                        "分子乘3",
                        "取相反数"
                    ],
                    "answer": "交换分子分母：3/3，分子填3",
                    "explain": "求倒数就是交换分子和分母的位置：3/3→3/3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：3/3等于1，它的倒数仍是3/3，乘积为1",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3/3的倒数是3/3，分子分母交换后不变，分子填3",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "乘积为1的两个数互为倒数：把分子分母交换位置",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红把4/7米长的丝带平均分成3段。她算每段长多少米。",
            "question": "4/7 ÷ 3 = ?/21（填分子）",
            "formula": "4/7 ÷ 3 = ?/21",
            "answer": 4,
            "choices": [
                4,
                3,
                8,
                1
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 4,
                "total": 21,
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
                        "求每段丝带长多少米",
                        "求丝带全长",
                        "求平均分成几段",
                        "求一共用多少"
                    ],
                    "answer": "求每段丝带长多少米",
                    "explain": "4/7米丝带平均分成3段，问每段长多少米"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "丝带长4/7米，平均分成3段",
                        "丝带长3米，分成4段",
                        "每段长4/7米",
                        "丝带长7米"
                    ],
                    "answer": "丝带长4/7米，平均分成3段",
                    "explain": "把4/7平均分成3份，求每份"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法转乘法：4/7÷3=4/7×1/3=4/21，分子填4",
                        "4/7÷3=3/7",
                        "4/7×3=12/7",
                        "4/7-3"
                    ],
                    "answer": "除法转乘法：4/7÷3=4/7×1/3=4/21，分子填4",
                    "explain": "分数除以整数等于乘这个整数的倒数：4/7÷3=4/7×1/3=4/21"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：把4/7平均分成3段，每段是整体的4/21",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4/7÷3=4/7×1/3=4/21：分子4×1=4，分母7×3=21",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "分数除以整数：等于乘这个整数的倒数，分子乘分子、分母乘分母",
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
                        "求每段丝带长多少米",
                        "求丝带全长",
                        "求平均分成几段",
                        "求一共用多少"
                    ],
                    "answer": "求每段丝带长多少米",
                    "explain": "4/5米丝带平均分成2段，问每段长多少米"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "丝带长4/5米，平均分成2段",
                        "丝带长2米，分成4段",
                        "每段长4/5米",
                        "丝带长5米"
                    ],
                    "answer": "丝带长4/5米，平均分成2段",
                    "explain": "把4/5平均分成2份，求每份"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：4/5÷2=2/5，分子填2",
                        "4/5÷2=4/10",
                        "4/5×2=8/5",
                        "4/5-2"
                    ],
                    "answer": "除法：4/5÷2=2/5，分子填2",
                    "explain": "4/5是4个1/5，平均分成2段，每段2个1/5，得2/5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：把4/5平均分成2段，每段是2/5",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4/5÷2：4份分成2份，每份2份，分子4÷2=2，得2/5",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "分数除以整数：分子能被整除时直接除分子，分母不变",
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
                "total": 12,
                "parts": [
                    {
                        "label": "12段",
                        "val": 12,
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
                    "answer": 16,
                    "hint": "乘倒数"
                },
                {
                    "question": "5÷1/3=?",
                    "formula": "5÷1/3=?",
                    "answer": 15,
                    "hint": "乘倒数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求可以剪成几段",
                        "求绳子一共多长",
                        "求每段多长",
                        "求还剩多长"
                    ],
                    "answer": "求可以剪成几段",
                    "explain": "3米绳子每1/4米剪一段，问可以剪几段"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "绳子3米，每段1/4米",
                        "绳子1/4米，共3段",
                        "每段3米",
                        "绳子长4米"
                    ],
                    "answer": "绳子3米，每段1/4米",
                    "explain": "看3米里面有几个1/4米，用除法"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：3÷1/4=3×4=12段",
                        "3×1/4=3/4",
                        "3+1/4",
                        "3-1/4"
                    ],
                    "answer": "除法：3÷1/4=3×4=12段",
                    "explain": "一个数除以分数等于乘它的倒数：3÷1/4=3×4=12"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：3米绳子按每1/4米一段，共12段",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3÷1/4=3×4=12段：除以1/4就是乘4",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "一个数除以分数：等于乘这个分数的倒数",
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
                6,
                5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 9,
                "parts": [
                    {
                        "label": "9段",
                        "val": 9,
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
                    "answer": 15,
                    "hint": "乘倒数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求可以剪成几段",
                        "求绳子一共多长",
                        "求每段多长",
                        "求还剩多长"
                    ],
                    "answer": "求可以剪成几段",
                    "explain": "3米绳子每1/3米剪一段，问可以剪几段"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "绳子3米，每段1/3米",
                        "绳子1/3米，共3段",
                        "每段3米",
                        "绳子长4米"
                    ],
                    "answer": "绳子3米，每段1/3米",
                    "explain": "看3米里面有几个1/3米，用除法"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：3÷1/3=3×3=9段",
                        "3×1/3=1",
                        "3+1/3",
                        "3-1/3"
                    ],
                    "answer": "除法：3÷1/3=3×3=9段",
                    "explain": "一个数除以分数等于乘它的倒数：3÷1/3=3×3=9"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：3米绳子按每1/3米一段，共9段",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3÷1/3=3×3=9段：除以1/3就是乘3",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "一个数除以分数：等于乘这个分数的倒数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红算1/2+1/3×1/3。老师告诉她先算乘法再算加法。",
            "question": "1/3 × 1/3 = ?/9（填分子）",
            "formula": "1/3 × 1/3 = ?/9",
            "answer": 1,
            "choices": [
                1,
                3,
                9,
                2
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 1,
                "total": 9,
                "color": "#00A896"
            },
            "knowledge": "分数混合运算",
            "difficulty": 3,
            "hint": "先乘除后加减",
            "variants": [
                {
                    "question": "2/3×3/3=?/9（填分子）",
                    "formula": "2/3×3/3=?/9",
                    "answer": 6,
                    "hint": "先算乘法"
                },
                {
                    "question": "1/2-1/3×1/2中乘法=?/6（填分子）",
                    "formula": "1/3×1/2=?/6",
                    "answer": 1,
                    "hint": "先算乘法"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求乘法1/3×1/3的结果",
                        "求加法1/2+的结果",
                        "求1/2是多少",
                        "求整个算式的结果"
                    ],
                    "answer": "求乘法1/3×1/3的结果",
                    "explain": "先算乘法再算加法，题目只问乘法部分，填分子"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两个分数都是1/3",
                        "分数是1/2和1/3",
                        "只有分母3",
                        "三个分数"
                    ],
                    "answer": "两个分数都是1/3",
                    "explain": "1/3×1/3，分子1×1=1，分母3×3=9"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：1/3×1/3=1/9，分子填1",
                        "加法：1/3+1/3=2/3",
                        "乘法：1/3×1/3=3/9",
                        "除法：1/3÷1/3"
                    ],
                    "answer": "乘法：1/3×1/3=1/9，分子填1",
                    "explain": "分数乘分数：分子乘分子1×1=1，分母乘分母3×3=9"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：整体分成9份取1份，表示1/9",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1/3×1/3=1/9：分子1×1=1，分母3×3=9",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "分数乘分数：分子相乘作分子，分母相乘作分母",
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
                        "求乘法1/3×1/4的结果",
                        "求加法1/2+的结果",
                        "求1/2是多少",
                        "求整个算式的结果"
                    ],
                    "answer": "求乘法1/3×1/4的结果",
                    "explain": "先算乘法再算加法，题目只问乘法部分，填分子"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "分数是1/3和1/4",
                        "两个分数都是1/3",
                        "分数是1/2和1/4",
                        "三个分数"
                    ],
                    "answer": "分数是1/3和1/4",
                    "explain": "1/3×1/4，分子1×1=1，分母3×4=12"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：1/3×1/4=1/12，分子填1",
                        "加法：1/3+1/4=7/12",
                        "乘法：1/3×1/4=4/12",
                        "除法：1/3÷1/4"
                    ],
                    "answer": "乘法：1/3×1/4=1/12，分子填1",
                    "explain": "分数乘分数：分子乘分子1×1=1，分母乘分母3×4=12"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：整体分成12份取1份，表示1/12",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1/3×1/4=1/12：分子1×1=1，分母3×4=12",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "分数乘分数：分子相乘作分子，分母相乘作分母",
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
                "total": 20,
                "parts": [
                    {
                        "label": "1/4→5颗",
                        "val": 5,
                        "color": "#00A896"
                    },
                    {
                        "label": "3/4→15颗",
                        "val": 15,
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
                        "求糖果一共有多少颗",
                        "求1/4是多少颗",
                        "求吃了多少颗",
                        "求还剩多少颗"
                    ],
                    "answer": "求糖果一共有多少颗",
                    "explain": "糖果的1/4是5颗，问一共有多少颗"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "总数的1/4是5颗",
                        "总数的1/4是20颗",
                        "总数是5颗",
                        "每份5颗共3份"
                    ],
                    "answer": "总数的1/4是5颗",
                    "explain": "5颗对应的是全体的1/4"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：5÷1/4=5×4=20颗",
                        "乘法：5×1/4=1.25",
                        "加法：5+4=9",
                        "减法：5-1/4"
                    ],
                    "answer": "除法：5÷1/4=5×4=20颗",
                    "explain": "已知一个数的几分之几是多少求这个数：用除法，对应量÷对应分率"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：20颗分4份，每份5颗，1/4就是5颗",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总数=5÷1/4=5×4=20颗",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知一个数的几分之几求这个数：对应量÷对应分率=单位1",
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
                "total": 24,
                "parts": [
                    {
                        "label": "1/4→6颗",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "3/4→18颗",
                        "val": 18,
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
                        "求糖果一共有多少颗",
                        "求1/4是多少颗",
                        "求吃了多少颗",
                        "求还剩多少颗"
                    ],
                    "answer": "求糖果一共有多少颗",
                    "explain": "糖果的1/4是6颗，问一共有多少颗"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "总数的1/4是6颗",
                        "总数的1/4是24颗",
                        "总数是6颗",
                        "每份6颗共3份"
                    ],
                    "answer": "总数的1/4是6颗",
                    "explain": "6颗对应的是全体的1/4"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：6÷1/4=6×4=24颗",
                        "乘法：6×1/4=1.5",
                        "加法：6+4=10",
                        "减法：6-1/4"
                    ],
                    "answer": "除法：6÷1/4=6×4=24颗",
                    "explain": "已知一个数的几分之几是多少求这个数：用除法，对应量÷对应分率"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：24颗分4份，每份6颗，1/4就是6颗",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总数=6÷1/4=6×4=24颗",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知一个数的几分之几求这个数：对应量÷对应分率=单位1",
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
                "total": 30,
                "parts": [
                    {
                        "label": "未读30",
                        "val": 30,
                        "color": "#00A896"
                    },
                    {
                        "label": "多7.5",
                        "val": 7.5,
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
                        "求已读比未读多多少页",
                        "求未读有多少页",
                        "求已读有多少页",
                        "求全书多少页"
                    ],
                    "answer": "求已读比未读多多少页",
                    "explain": "未读30页，已读比未读多1/4，问多多少页"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "未读30页，已读多1/4",
                        "已读30页，未读多1/4",
                        "已读多30页",
                        "没有给未读页数"
                    ],
                    "answer": "未读30页，已读多1/4",
                    "explain": "多的页数=未读页数×1/4"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：30×1/4=7.5页",
                        "除法：30÷1/4=120",
                        "加法：30+1/4",
                        "减法：30-1/4"
                    ],
                    "answer": "乘法：30×1/4=7.5页",
                    "explain": "求比一个数多几分之几的部分：单位1×几分之几"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：未读30页为一份，已读多出的部分是它的1/4，即7.5页",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "多的页数=30×1/4=7.5页",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求一个数的几分之几：用这个数乘分率",
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
                "total": 18,
                "parts": [
                    {
                        "label": "未读18",
                        "val": 18,
                        "color": "#00A896"
                    },
                    {
                        "label": "多4.5",
                        "val": 4.5,
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
                        "求已读比未读多多少页",
                        "求未读有多少页",
                        "求已读有多少页",
                        "求全书多少页"
                    ],
                    "answer": "求已读比未读多多少页",
                    "explain": "未读18页，已读比未读多1/4，问多多少页"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "未读18页，已读多1/4",
                        "已读18页，未读多1/4",
                        "已读多18页",
                        "没有给未读页数"
                    ],
                    "answer": "未读18页，已读多1/4",
                    "explain": "多的页数=未读页数×1/4"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：18×1/4=4.5页",
                        "除法：18÷1/4=72",
                        "加法：18+1/4",
                        "减法：18-1/4"
                    ],
                    "answer": "乘法：18×1/4=4.5页",
                    "explain": "求比一个数多几分之几的部分：单位1×几分之几"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：未读18页为一份，已读多出的部分是它的1/4，即4.5页",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "多的页数=18×1/4=4.5页",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求一个数的几分之几：用这个数乘分率",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "苹果和梨共38个，苹果是梨的2倍。小红算梨有几个。",
            "question": "38 ÷ (1+2) = ?",
            "formula": "38 ÷ 3 = ?",
            "answer": 12.67,
            "choices": [
                12.67,
                12,
                24,
                38
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 38,
                "parts": [
                    {
                        "label": "梨12.67",
                        "val": 12.67,
                        "color": "#00A896"
                    },
                    {
                        "label": "苹果25.33",
                        "val": 25.33,
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
                    "question": "甲乙共60甲是乙的2倍乙？",
                    "formula": "60÷3=?",
                    "answer": 20,
                    "hint": "总量÷份数和"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求梨有几个",
                        "求苹果有几个",
                        "求一共几个",
                        "求苹果比梨多几个"
                    ],
                    "answer": "求梨有几个",
                    "explain": "苹果和梨共38个，苹果是梨的2倍，问梨有几个"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "苹果是梨的2倍，共38个",
                        "苹果是梨的3倍",
                        "梨是苹果的2倍",
                        "没有总数"
                    ],
                    "answer": "苹果是梨的2倍，共38个",
                    "explain": "梨看作1份，苹果是2份，共3份对应38个"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：38÷(1+2)=38÷3≈12.67",
                        "38÷2=19",
                        "38×2=76",
                        "38-2=36"
                    ],
                    "answer": "除法：38÷(1+2)=38÷3≈12.67",
                    "explain": "和倍问题：总数÷份数和(1+2)=1份的量，即梨的个数"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：38个分成3份，梨1份约12.67个，苹果2份约25.33个",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "梨=38÷(1+2)=38÷3≈12.67个",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "和倍问题：先求1份（小的量）=总数÷份数和，再乘倍数求大的量",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "苹果和梨共41个，苹果是梨的2倍。小红算梨有几个。",
            "question": "41 ÷ (1+2) = ?",
            "formula": "41 ÷ 3 = ?",
            "answer": 13.67,
            "choices": [
                13.67,
                10,
                24,
                41
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 41,
                "parts": [
                    {
                        "label": "梨13.67",
                        "val": 13.67,
                        "color": "#00A896"
                    },
                    {
                        "label": "苹果27.33",
                        "val": 27.33,
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
                    "question": "甲乙共60甲是乙的2倍乙？",
                    "formula": "60÷3=?",
                    "answer": 20,
                    "hint": "总量÷份数和"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求梨有几个",
                        "求苹果有几个",
                        "求一共几个",
                        "求苹果比梨多几个"
                    ],
                    "answer": "求梨有几个",
                    "explain": "苹果和梨共41个，苹果是梨的2倍，问梨有几个"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "苹果是梨的2倍，共41个",
                        "苹果是梨的3倍",
                        "梨是苹果的2倍",
                        "没有总数"
                    ],
                    "answer": "苹果是梨的2倍，共41个",
                    "explain": "梨看作1份，苹果是2份，共3份对应41个"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：41÷(1+2)=41÷3≈13.67",
                        "41÷2=20.5",
                        "41×2=82",
                        "41-2=39"
                    ],
                    "answer": "除法：41÷(1+2)=41÷3≈13.67",
                    "explain": "和倍问题：总数÷份数和(1+2)=1份的量，即梨的个数"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：41个分成3份，梨1份约13.67个，苹果2份约27.33个",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "梨=41÷(1+2)=41÷3≈13.67个",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "和倍问题：先求1份（小的量）=总数÷份数和，再乘倍数求大的量",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "修一条路，甲队单独修13天完成，乙队单独修15天完成。两队合修几天完成？",
            "question": "1÷(1/13+1/15) = ?天",
            "formula": "1÷(1/13+1/15)=?",
            "answer": 6.96,
            "choices": [
                6.96,
                25,
                5,
                12
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6.96,
                "parts": [
                    {
                        "label": "合修6.96天",
                        "val": 6.96,
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
                        "求两队合修几天完成",
                        "求甲队单独修几天",
                        "求乙队单独修几天",
                        "求两队各修多少"
                    ],
                    "answer": "求两队合修几天完成",
                    "explain": "甲队13天完成、乙队15天完成，问两队合修几天完成"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "甲队效率1/13，乙队效率1/15",
                        "甲队13天乙队13天",
                        "两队效率都是1/13",
                        "没有给时间"
                    ],
                    "answer": "甲队效率1/13，乙队效率1/15",
                    "explain": "工作效率=1÷单独完成时间"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：1÷(1/13+1/15)=1÷28/195=195/28≈6.96天",
                        "13+15=28",
                        "(13+15)÷2=14",
                        "1÷(13+15)"
                    ],
                    "answer": "除法：1÷(1/13+1/15)=1÷28/195=195/28≈6.96天",
                    "explain": "工程问题：合作时间=工作总量1÷效率和"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：整条路看作总量1，甲每天修1/13，乙每天修1/15",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "效率和=1/13+1/15=28/195，合作时间=1÷28/195≈6.96天",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "工程问题：单独效率=1÷单独时间，合作时间=1÷效率和",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "修一条路，甲队单独修14天完成，乙队单独修17天完成。两队合修几天完成？",
            "question": "1÷(1/14+1/17) = ?天",
            "formula": "1÷(1/14+1/17)=?",
            "answer": 7.68,
            "choices": [
                7.68,
                25,
                5,
                12
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 7.68,
                "parts": [
                    {
                        "label": "合修7.68天",
                        "val": 7.68,
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
                        "求两队合修几天完成",
                        "求甲队单独修几天",
                        "求乙队单独修几天",
                        "求两队各修多少"
                    ],
                    "answer": "求两队合修几天完成",
                    "explain": "甲队14天完成、乙队17天完成，问两队合修几天完成"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "甲队效率1/14，乙队效率1/17",
                        "甲队14天乙队14天",
                        "两队效率都是1/14",
                        "没有给时间"
                    ],
                    "answer": "甲队效率1/14，乙队效率1/17",
                    "explain": "工作效率=1÷单独完成时间"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：1÷(1/14+1/17)=1÷31/238=238/31≈7.68天",
                        "14+17=31",
                        "(14+17)÷2=15.5",
                        "1÷(14+17)"
                    ],
                    "answer": "除法：1÷(1/14+1/17)=1÷31/238=238/31≈7.68天",
                    "explain": "工程问题：合作时间=工作总量1÷效率和"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：整条路看作总量1，甲每天修1/14，乙每天修1/17",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "效率和=1/14+1/17=31/238，合作时间=1÷31/238≈7.68天",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "工程问题：单独效率=1÷单独时间，合作时间=1÷效率和",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "班级有男生13人女生10人。老师问男生和女生人数的比。",
            "question": "13:10化简后前项是？",
            "formula": "13:10 最简比前项=?",
            "answer": 13,
            "choices": [
                13,
                10,
                3,
                30
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 23,
                "parts": [
                    {
                        "label": "男13",
                        "val": 13,
                        "color": "#00A896"
                    },
                    {
                        "label": "女10",
                        "val": 10,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "比的意义（2024版移入六下·拓展保留）",
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
                    "question": "9:6化简前项？",
                    "formula": "9:6=?/2",
                    "answer": 3,
                    "hint": "同除以3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求最简比的前项",
                        "求最简比的后项",
                        "求男女生的和",
                        "求女生人数"
                    ],
                    "answer": "求最简比的前项",
                    "explain": "男生13人女生10人，问13:10化简后前项是几"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "男生13人，女生10人",
                        "男生10人，女生13人",
                        "男女生各15人",
                        "没有给人数"
                    ],
                    "answer": "男生13人，女生10人",
                    "explain": "比是13:10，前项是比号前的数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "13和10互质，13:10已是最简，前项13",
                        "13:10=3:2，前项3",
                        "13-10=3，前项3",
                        "13+10=23，前项23"
                    ],
                    "answer": "13和10互质，13:10已是最简，前项13",
                    "explain": "化简比用前项后项同时除以最大公因数；互质时就是最简比"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：男生13人、女生10人，比是13:10",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "13和10只有公因数1，13:10已经是最简整数比，前项是13",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "化简比：前后项同除以它们的最大公因数，得到最简整数比",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "班级有男生15人女生12人。老师问男生和女生人数的比。",
            "question": "15:12化简后前项是？",
            "formula": "15:12 最简比=?:4",
            "answer": 5,
            "choices": [
                5,
                15,
                3,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 27,
                "parts": [
                    {
                        "label": "男15",
                        "val": 15,
                        "color": "#00A896"
                    },
                    {
                        "label": "女12",
                        "val": 12,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "比的意义（2024版移入六下·拓展保留）",
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
                        "求最简比的前项",
                        "求最简比的后项",
                        "求男女生的和",
                        "求女生人数"
                    ],
                    "answer": "求最简比的前项",
                    "explain": "男生15人女生12人，问15:12化简后前项是几"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "男生15人，女生12人",
                        "男生12人，女生15人",
                        "男女生各15人",
                        "没有给人数"
                    ],
                    "answer": "男生15人，女生12人",
                    "explain": "比是15:12，前项是比号前的数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "15和12同除以3得5:4，前项5",
                        "15:12=15，前项15",
                        "15-12=3，前项3",
                        "15÷12≈1.25，前项1.25"
                    ],
                    "answer": "15和12同除以3得5:4，前项5",
                    "explain": "化简比用前项后项同时除以最大公因数3，得最简比5:4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：男生15人、女生12人，比是15:12",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "15和12的最大公因数是3，15÷3=5、12÷3=4，最简比5:4，前项5",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "化简比：前后项同除以它们的最大公因数，得到最简整数比",
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
            "knowledge": "按比分配（2024版移入六下·拓展保留）",
            "difficulty": 3,
            "hint": "总量×各自份数/总份数",
            "variants": [
                {
                    "question": "40按4:6分甲？",
                    "formula": "40×4/10=?",
                    "answer": 16,
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
                        "求甲组分几本",
                        "求乙组分几本",
                        "求一共几本",
                        "求每份几本"
                    ],
                    "answer": "求甲组分几本",
                    "explain": "40本按2:4分给甲乙两组，问甲组分几本"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "40本按2:4分，甲占2份",
                        "40本按2:4分，甲占4份",
                        "40本平均分",
                        "甲分4份"
                    ],
                    "answer": "40本按2:4分，甲占2份",
                    "explain": "总份数=2+4=6，甲占2/6"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：40×2/6=40×1/3≈13.33本",
                        "40×4/6≈26.67",
                        "40÷2=20",
                        "40-2=38"
                    ],
                    "answer": "乘法：40×2/6=40×1/3≈13.33本",
                    "explain": "按比分配：甲=总量×甲份数/总份数"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：40本按2:4分成6份，甲2份、乙4份",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "甲=40×2/6=80/6≈13.33本",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "按比分配：先求总份数，再用总量×各部分的份数占比",
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
            "knowledge": "按比分配（2024版移入六下·拓展保留）",
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
                    "question": "32按1:3分乙？",
                    "formula": "32×3/4=?",
                    "answer": 24,
                    "hint": "按份数分"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求甲组分几本",
                        "求乙组分几本",
                        "求一共几本",
                        "求每份几本"
                    ],
                    "answer": "求甲组分几本",
                    "explain": "33本按3:3分给甲乙两组，问甲组分几本"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "33本按3:3分，甲占3份",
                        "33本按3:3分，甲占6份",
                        "33本平均分",
                        "甲分3本"
                    ],
                    "answer": "33本按3:3分，甲占3份",
                    "explain": "总份数=3+3=6，甲占3/6"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：33×3/6=16.5本",
                        "33×3/3=33",
                        "33÷3=11",
                        "33-3=30"
                    ],
                    "answer": "乘法：33×3/6=16.5本",
                    "explain": "按比分配：甲=总量×甲份数/总份数"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：33本按3:3分成6份，甲乙各3份",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "甲=33×3/6=16.5本",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "按比分配：先求总份数，再用总量×各部分的份数占比",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红画了一个圆。老师告诉她圆心到圆上任意一点的线段叫半径。如果半径4cm，直径多少？",
            "question": "直径 = 2 × 4 = ? cm",
            "formula": "d = 2r = 2×4",
            "answer": 8,
            "choices": [
                8,
                4,
                12,
                6
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "radius": 4
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
                        "求直径是多少厘米",
                        "求半径是多少厘米",
                        "求圆周长",
                        "求圆的面积"
                    ],
                    "answer": "求直径是多少厘米",
                    "explain": "半径4cm，问直径多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径4cm",
                        "直径4cm",
                        "半径8cm",
                        "没有给半径"
                    ],
                    "answer": "半径4cm",
                    "explain": "同圆中直径是半径的2倍"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：d=2r=2×4=8cm",
                        "加法：4+4=8但写错公式",
                        "除法：4÷2=2",
                        "乘法：4×4=16"
                    ],
                    "answer": "乘法：d=2r=2×4=8cm",
                    "explain": "直径=半径×2：d=2r，2×4=8cm"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：圆内画一条过圆心的直径，半径4cm，直径是两条半径，共8cm",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "直径=半径×2=2×4=8cm",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "同圆内直径是半径的2倍，半径是直径的一半",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小亮画了一个圆。老师告诉他圆心到圆上任意一点的线段叫半径。如果半径5cm，直径多少？",
            "question": "直径 = 2 × 5 = ? cm",
            "formula": "d = 2r = 2×5",
            "answer": 10,
            "choices": [
                10,
                5,
                25,
                20
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "radius": 5
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
                        "求直径是多少厘米",
                        "求半径是多少厘米",
                        "求圆周长",
                        "求圆的面积"
                    ],
                    "answer": "求直径是多少厘米",
                    "explain": "半径5cm，问直径多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径5cm",
                        "直径5cm",
                        "半径10cm",
                        "没有给半径"
                    ],
                    "answer": "半径5cm",
                    "explain": "同圆中直径是半径的2倍"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：d=2r=2×5=10cm",
                        "加法：5+5=10但写错公式",
                        "除法：5÷2=2.5",
                        "乘法：5×5=25"
                    ],
                    "answer": "乘法：d=2r=2×5=10cm",
                    "explain": "直径=半径×2：d=2r，2×5=10cm"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：圆内画一条过圆心的直径，半径5cm，直径是两条半径，共10cm",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "直径=半径×2=2×5=10cm",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "同圆内直径是半径的2倍，半径是直径的一半",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红量得一个圆的直径是14cm。她算周长（π取3.14）。",
            "question": "C = 3.14 × 14 = ? cm",
            "formula": "C = πd = 3.14×14",
            "answer": 43.96,
            "choices": [
                43.96,
                31,
                314,
                3.14
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "diameter": 14
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
                        "求圆的周长",
                        "求圆的面积",
                        "求直径",
                        "求半径"
                    ],
                    "answer": "求圆的周长",
                    "explain": "直径14cm，π取3.14，问周长"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "直径14cm，π取3.14",
                        "半径14cm",
                        "直径7cm",
                        "没有给直径"
                    ],
                    "answer": "直径14cm，π取3.14",
                    "explain": "已知直径求周长，用C=πd"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：C=3.14×14=43.96cm",
                        "3.15×14=44.1",
                        "2×3.14×14=87.92",
                        "3.14×7=21.98"
                    ],
                    "answer": "乘法：C=3.14×14=43.96cm",
                    "explain": "圆的周长=圆周率×直径：C=πd，π取3.14"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：圆上标直径14cm，周长是直径的π倍",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "C=πd=3.14×14=43.96cm",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆周率π约等于3.14，周长C=πd=2πr",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红量得一个圆的直径是15cm。她算周长（π取3.14）。",
            "question": "C = 3.14 × 15 = ? cm",
            "formula": "C = πd = 3.14×15",
            "answer": 47.1,
            "choices": [
                47.1,
                31,
                314,
                3.14
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "diameter": 15
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
                        "求圆的周长",
                        "求圆的面积",
                        "求直径",
                        "求半径"
                    ],
                    "answer": "求圆的周长",
                    "explain": "直径15cm，π取3.14，问周长"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "直径15cm，π取3.14",
                        "半径15cm",
                        "直径30cm",
                        "没有给直径"
                    ],
                    "answer": "直径15cm，π取3.14",
                    "explain": "已知直径求周长，用C=πd"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：C=3.14×15=47.1cm",
                        "3.15×15=47.25",
                        "2×3.14×15=94.2",
                        "3.14×7.5=23.55"
                    ],
                    "answer": "乘法：C=3.14×15=47.1cm",
                    "explain": "圆的周长=圆周率×直径：C=πd，π取3.14"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：圆上标直径15cm，周长是直径的π倍",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "C=πd=3.14×15=47.1cm",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆周率π约等于3.14，周长C=πd=2πr",
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
                        "求圆的面积",
                        "求圆的周长",
                        "求半径",
                        "求直径"
                    ],
                    "answer": "求圆的面积",
                    "explain": "半径3cm，π取3.14，问面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径3cm，π取3.14",
                        "直径3cm",
                        "半径6cm",
                        "没有给半径"
                    ],
                    "answer": "半径3cm，π取3.14",
                    "explain": "已知半径求面积，用S=πr²"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：S=3.14×3²=3.14×9=28.26",
                        "3.14×6=18.84",
                        "3.14×3=9.42",
                        "3.14×12=37.68"
                    ],
                    "answer": "乘法：S=3.14×3²=3.14×9=28.26",
                    "explain": "圆的面积=π×半径的平方：S=πr²，3²=9"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：圆内标半径3cm，面积是πr²",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "S=πr²=3.14×3²=3.14×9=28.26cm²",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆的面积=圆周率×半径的平方，先算r²再乘π",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红算半径4cm的圆的面积（π取3.14）。",
            "question": "S = 3.14 × 4² = ?",
            "formula": "S = πr² = 3.14×16",
            "answer": 50.24,
            "choices": [
                50.24,
                28.6,
                9.42,
                18.84
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "radius": 4
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
                        "求圆的面积",
                        "求圆的周长",
                        "求半径",
                        "求直径"
                    ],
                    "answer": "求圆的面积",
                    "explain": "半径4cm，π取3.14，问面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径4cm，π取3.14",
                        "直径4cm",
                        "半径8cm",
                        "没有给半径"
                    ],
                    "answer": "半径4cm，π取3.14",
                    "explain": "已知半径求面积，用S=πr²"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：S=3.14×4²=3.14×16=50.24",
                        "3.14×8=25.12",
                        "3.14×4=12.56",
                        "3.14×20=62.8"
                    ],
                    "answer": "乘法：S=3.14×4²=3.14×16=50.24",
                    "explain": "圆的面积=π×半径的平方：S=πr²，4²=16"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：圆内标半径4cm，面积是πr²",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "S=πr²=3.14×4²=3.14×16=50.24cm²",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆的面积=圆周率×半径的平方，先算r²再乘π",
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
                        "求扇形面积",
                        "求圆的面积",
                        "求圆心角",
                        "求圆的周长"
                    ],
                    "answer": "求扇形面积",
                    "explain": "圆心角90°的扇形是圆的1/4，圆面积12cm²，问扇形面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "圆心角90°，圆面积12cm²",
                        "圆心角180°，圆面积12cm²",
                        "扇形占1/5",
                        "没有给圆面积"
                    ],
                    "answer": "圆心角90°，圆面积12cm²",
                    "explain": "90°是360°的1/4，扇形占圆的1/4"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：12×1/4=3cm²",
                        "12×1/5=2.4",
                        "12÷1/4=48",
                        "12-1/4"
                    ],
                    "answer": "乘法：12×1/4=3cm²",
                    "explain": "扇形面积=圆面积×（圆心角÷360°）=12×1/4=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：圆被分成4个90°的扇形，其中一个就是整个圆的1/4",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "90°÷360°=1/4，扇形面积=12×1/4=3cm²",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "扇形面积=圆面积×圆心角/360°，90°的扇形是圆的四分之一",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "老师告诉小红圆心角77°的扇形面积是整个圆的77/360。如果圆面积是13cm²，扇形面积多少？",
            "question": "13 × 77/360 = ? cm²",
            "formula": "13 × 77/360 = ?",
            "answer": 2.78,
            "choices": [
                2.78,
                2.17,
                13,
                6
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "sector",
                "params": {
                    "angle": 77,
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
                    "answer": 3,
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
                        "求扇形面积",
                        "求圆的面积",
                        "求圆心角",
                        "求圆的周长"
                    ],
                    "answer": "求扇形面积",
                    "explain": "圆心角77°的扇形是圆的77/360，圆面积13cm²，问扇形面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "圆心角77°，圆面积13cm²",
                        "圆心角90°，圆面积13cm²",
                        "扇形占1/6",
                        "没有给圆面积"
                    ],
                    "answer": "圆心角77°，圆面积13cm²",
                    "explain": "77°占360°的77/360"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：13×77/360=1001/360≈2.78cm²",
                        "13×1/6≈2.17",
                        "13÷77/360",
                        "13-77/360"
                    ],
                    "answer": "乘法：13×77/360=1001/360≈2.78cm²",
                    "explain": "扇形面积=圆面积×（圆心角÷360°）=13×77/360≈2.78"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：圆内画圆心角77°的扇形，占整个圆的77/360",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "扇形面积=13×77/360=1001/360≈2.78cm²",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "扇形面积=圆面积×圆心角/360°，圆心角越小扇形占比越小",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个边长6cm的正方形内有一个最大的圆。小红算圆的面积（π取3.14）。",
            "question": "S = 3.14 × 3² = ?",
            "formula": "3.14×3²=?",
            "answer": 28.26,
            "choices": [
                28.26,
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
                    "side": 6
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
                    "hint": "半径=边长÷2"
                },
                {
                    "question": "边长10cm正方形内最大圆面积？",
                    "formula": "3.14×5²=?",
                    "answer": 78.5,
                    "hint": "半径=边长÷2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求正方形内最大圆的面积",
                        "求正方形的面积",
                        "求圆的周长",
                        "求阴影面积"
                    ],
                    "answer": "求正方形内最大圆的面积",
                    "explain": "边长6cm的正方形内有一个最大的圆，π取3.14，问圆的面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "正方形边长6cm，圆直径=边长6cm",
                        "正方形边长6cm，圆半径6cm",
                        "圆直径12cm",
                        "没有给边长"
                    ],
                    "answer": "正方形边长6cm，圆直径=边长6cm",
                    "explain": "正方形内最大圆的直径等于正方形边长"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：半径=6÷2=3，S=3.14×3²=28.26",
                        "S=6×6=36",
                        "S=3.14×6=18.84",
                        "S=3.14×36=113.04"
                    ],
                    "answer": "乘法：半径=6÷2=3，S=3.14×3²=28.26",
                    "explain": "正方形内最大圆直径=边长，半径=边长÷2，再算S=πr²"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：正方形内切圆，直径等于正方形边长6cm",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "半径=6÷2=3cm，S=πr²=3.14×3²=28.26cm²",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "正方形内最大圆：直径=边长，先求半径再算圆面积",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个边长5cm的正方形内有一个最大的圆。小红算圆的面积（π取3.14）。",
            "question": "S = 3.14 × 2.5² = ?",
            "formula": "3.14×2.5²=?",
            "answer": 19.625,
            "choices": [
                19.625,
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
                    "side": 5
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
                    "hint": "半径=边长÷2"
                },
                {
                    "question": "边长10cm正方形内最大圆面积？",
                    "formula": "3.14×5²=?",
                    "answer": 78.5,
                    "hint": "半径=边长÷2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求正方形内最大圆的面积",
                        "求正方形的面积",
                        "求圆的周长",
                        "求阴影面积"
                    ],
                    "answer": "求正方形内最大圆的面积",
                    "explain": "边长5cm的正方形内有一个最大的圆，π取3.14，问圆的面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "正方形边长5cm，圆直径=边长5cm",
                        "正方形边长5cm，圆半径5cm",
                        "圆直径10cm",
                        "没有给边长"
                    ],
                    "answer": "正方形边长5cm，圆直径=边长5cm",
                    "explain": "正方形内最大圆的直径等于正方形边长"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：半径=5÷2=2.5，S=3.14×2.5²=19.625",
                        "S=5×5=25",
                        "S=3.14×5=15.7",
                        "S=3.14×25=78.5"
                    ],
                    "answer": "乘法：半径=5÷2=2.5，S=3.14×2.5²=19.625",
                    "explain": "正方形内最大圆直径=边长，半径=边长÷2，再算S=πr²"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：正方形内切圆，直径等于正方形边长5cm",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "半径=5÷2=2.5cm，S=πr²=3.14×6.25=19.625cm²",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "正方形内最大圆：直径=边长，先求半径再算圆面积",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红考试得了142分满分143分。老师问她的得分率是百分之几。",
            "question": "142/143 = ?%",
            "formula": "142÷143=?%",
            "answer": 99.3,
            "choices": [
                99.3,
                100,
                142,
                95
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 143,
                "parts": [
                    {
                        "label": "得分142",
                        "val": 142,
                        "color": "#00A896"
                    },
                    {
                        "label": "失分1",
                        "val": 1,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "百分数的意义和读写",
            "difficulty": 1,
            "hint": "百分数表示一个数是另一个的百分之几",
            "variants": [
                {
                    "question": "80分满分100得分率？%",
                    "formula": "80÷100=?",
                    "answer": 80,
                    "hint": "除以满分"
                },
                {
                    "question": "72分满分100得分率？%",
                    "formula": "72÷100=?",
                    "answer": 72,
                    "hint": "除以满分"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求得分率是百分之几",
                        "求得了多少分",
                        "求满分是多少",
                        "求失了多少分"
                    ],
                    "answer": "求得分率是百分之几",
                    "explain": "得了142分满分143分，问得分率"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "得分142分，满分143分",
                        "得分143分，满分142分",
                        "得分142分满分100分",
                        "没有给分数"
                    ],
                    "answer": "得分142分，满分143分",
                    "explain": "得分率=得分÷满分"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：142÷143≈0.993=99.3%",
                        "143÷142≈100.7%",
                        "142÷100=142%",
                        "143-142=1%"
                    ],
                    "answer": "除法：142÷143≈0.993=99.3%",
                    "explain": "得分率=得分÷满分×100%，142÷143≈99.3%"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：满分143分中得了142分，几乎满分",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "得分率=142÷143≈0.993=99.3%",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "百分率=部分÷整体×100%，满分就是整体",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红考试得了85分满分86分。老师问她的得分率是百分之几。",
            "question": "85/86 = ?%",
            "formula": "85÷86=?%",
            "answer": 98.8,
            "choices": [
                98.8,
                85,
                86,
                100
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 86,
                "parts": [
                    {
                        "label": "得分85",
                        "val": 85,
                        "color": "#00A896"
                    },
                    {
                        "label": "失分1",
                        "val": 1,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "百分数的意义和读写",
            "difficulty": 1,
            "hint": "百分数表示一个数是另一个的百分之几",
            "variants": [
                {
                    "question": "80分满分100得分率？%",
                    "formula": "80÷100=?",
                    "answer": 80,
                    "hint": "除以满分"
                },
                {
                    "question": "72分满分100得分率？%",
                    "formula": "72÷100=?",
                    "answer": 72,
                    "hint": "除以满分"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求得分率是百分之几",
                        "求得了多少分",
                        "求满分是多少",
                        "求失了多少分"
                    ],
                    "answer": "求得分率是百分之几",
                    "explain": "得了85分满分86分，问得分率"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "得分85分，满分86分",
                        "得分86分，满分85分",
                        "得分85分满分100分",
                        "没有给分数"
                    ],
                    "answer": "得分85分，满分86分",
                    "explain": "得分率=得分÷满分"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：85÷86≈0.988=98.8%",
                        "86÷85≈101.2%",
                        "85÷100=85%",
                        "86-85=1%"
                    ],
                    "answer": "除法：85÷86≈0.988=98.8%",
                    "explain": "得分率=得分÷满分×100%，85÷86≈98.8%"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：满分86分中得了85分，几乎满分",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "得分率=85÷86≈0.988=98.8%",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "百分率=部分÷整体×100%，满分就是整体",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "班级80人今天到校64人。小红算出勤率。",
            "question": "64÷80×100% = ?%",
            "formula": "64÷80×100%=?%",
            "answer": 80,
            "choices": [
                80,
                64,
                96,
                100
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 80,
                "parts": [
                    {
                        "label": "到校64",
                        "val": 64,
                        "color": "#00A896"
                    },
                    {
                        "label": "缺勤16",
                        "val": 16,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "求百分率",
            "difficulty": 2,
            "hint": "到校数÷总数×100%",
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
                        "求出勤率是百分之几",
                        "求到校多少人",
                        "求全班多少人",
                        "求缺勤多少人"
                    ],
                    "answer": "求出勤率是百分之几",
                    "explain": "全班80人到校64人，问出勤率"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "全班80人，到校64人",
                        "全班40人到校64人",
                        "全班64人到校80人",
                        "没有给总数"
                    ],
                    "answer": "全班80人，到校64人",
                    "explain": "出勤率=到校人数÷全班人数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：64÷80=0.8=80%",
                        "64÷40=160%",
                        "80÷64=125%",
                        "64-80=-16%"
                    ],
                    "answer": "除法：64÷80=0.8=80%",
                    "explain": "出勤率=到校人数÷总人数×100%，64÷80=80%"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：全班80人，到校64人占80%，缺勤16人",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "出勤率=64÷80=0.8=80%",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "百分率=部分÷整体×100%，出勤率最高100%",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "班级69人今天到校69人。小红算出勤率。",
            "question": "69÷69×100% = ?%",
            "formula": "69÷69×100%=?%",
            "answer": 100,
            "choices": [
                100,
                96,
                69,
                48
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 69,
                "parts": [
                    {
                        "label": "到校69",
                        "val": 69,
                        "color": "#00A896"
                    },
                    {
                        "label": "缺勤0",
                        "val": 0,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "求百分率",
            "difficulty": 2,
            "hint": "到校数÷总数×100%",
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
                        "求出勤率是百分之几",
                        "求到校多少人",
                        "求全班多少人",
                        "求缺勤多少人"
                    ],
                    "answer": "求出勤率是百分之几",
                    "explain": "全班69人全部到校，问出勤率"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "全班69人，到校69人",
                        "全班69人到校48人",
                        "全班48人到校69人",
                        "没有给总数"
                    ],
                    "answer": "全班69人，到校69人",
                    "explain": "出勤率=到校人数÷全班人数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：69÷69=1=100%",
                        "69÷69×96%",
                        "69÷48≈143.8%",
                        "69-69=0%"
                    ],
                    "answer": "除法：69÷69=1=100%",
                    "explain": "全部到校时出勤率就是100%"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：全班69人全部到校，出勤率100%",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "出勤率=69÷69=1=100%",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "百分率=部分÷整体×100%，全部达到时就是100%",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红原来体重30kg现在30kg。她算体重减轻了百分之几。",
            "question": "(30-30)÷30×100% = ?%",
            "formula": "(30-30)÷30×100%=?%",
            "answer": 0,
            "choices": [
                0,
                5,
                10,
                30
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 30,
                "parts": [
                    {
                        "label": "现在30",
                        "val": 30,
                        "color": "#00A896"
                    },
                    {
                        "label": "减轻0",
                        "val": 0,
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
                        "求体重减轻了百分之几",
                        "求现在体重",
                        "求原来体重",
                        "求体重差"
                    ],
                    "answer": "求体重减轻了百分之几",
                    "explain": "原来30kg现在30kg，体重没变，问减轻了百分之几"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "原来30kg，现在30kg",
                        "原来30kg，现在35kg",
                        "原来35kg，现在30kg",
                        "没有给体重"
                    ],
                    "answer": "原来30kg，现在30kg",
                    "explain": "减轻量=原来-现在=30-30=0kg"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：(30-30)÷30=0=0%",
                        "(30-30)÷30×10%",
                        "5÷30≈16.7%",
                        "30÷30=100%"
                    ],
                    "answer": "除法：(30-30)÷30=0=0%",
                    "explain": "减轻百分之几=（原来-现在）÷原来×100%，没变就是0%"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：原来30kg和现在30kg一样长，没有变化",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "减轻量=30-30=0kg，0÷30=0%，所以减轻了0%",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "多/少百分之几=差÷单位1×100%，差为0则结果为0%",
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
                        "求体重减轻了百分之几",
                        "求现在体重",
                        "求原来体重",
                        "求体重差"
                    ],
                    "answer": "求体重减轻了百分之几",
                    "explain": "原来40kg现在36kg，问体重减轻了百分之几"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "原来40kg，现在36kg",
                        "原来36kg，现在40kg",
                        "减轻了4kg但没有单位1",
                        "没有给体重"
                    ],
                    "answer": "原来40kg，现在36kg",
                    "explain": "减轻量=40-36=4kg，单位1是原来40kg"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：4÷40=0.1=10%",
                        "4÷36≈11.1%",
                        "36÷40=90%",
                        "40÷36≈111.1%"
                    ],
                    "answer": "除法：4÷40=0.1=10%",
                    "explain": "减轻百分之几=（原来-现在）÷原来×100%，4÷40=10%"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：原来40kg，现在36kg，减轻了4kg",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "减轻量=40-36=4kg，4÷40=0.1=10%",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "多/少百分之几=差÷单位1×100%，单位1是原来的量",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一本书原价59元涨价9%。小红算现价多少元。",
            "question": "59 × (1+9%) = ?元",
            "formula": "59×109%=?",
            "answer": 64.31,
            "choices": [
                64.31,
                55,
                59,
                60
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 64.31,
                "parts": [
                    {
                        "label": "原价59",
                        "val": 59,
                        "color": "#00A896"
                    },
                    {
                        "label": "涨5.31",
                        "val": 5.31,
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
                        "求涨价后的现价",
                        "求涨了多少元",
                        "求原价",
                        "求降了多少"
                    ],
                    "answer": "求涨价后的现价",
                    "explain": "原价59元涨价9%，问现价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "原价59元，涨价9%",
                        "原价59元，降价9%",
                        "现价59元",
                        "涨价59元"
                    ],
                    "answer": "原价59元，涨价9%",
                    "explain": "现价=原价×(1+9%)=59×109%"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：59×109%=64.31元",
                        "59×91%=53.69",
                        "59×9%=5.31",
                        "59+9=68"
                    ],
                    "answer": "乘法：59×109%=64.31元",
                    "explain": "涨价a%后的价格=原价×(1+a%)，59×1.09=64.31"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：原价59元，涨了5.31元，现价64.31元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "现价=59×(1+9%)=59×109%=64.31元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求比一个数多（少）百分之几的数：单位1×(1±百分数)",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一本书原价64元涨价10%。小红算现价多少元。",
            "question": "64 × (1+10%) = ?元",
            "formula": "64×110%=?",
            "answer": 70.4,
            "choices": [
                70.4,
                55,
                64,
                60
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 70.4,
                "parts": [
                    {
                        "label": "原价64",
                        "val": 64,
                        "color": "#00A896"
                    },
                    {
                        "label": "涨6.4",
                        "val": 6.4,
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
                        "求涨价后的现价",
                        "求涨了多少元",
                        "求原价",
                        "求降了多少"
                    ],
                    "answer": "求涨价后的现价",
                    "explain": "原价64元涨价10%，问现价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "原价64元，涨价10%",
                        "原价64元，降价10%",
                        "现价64元",
                        "涨价64元"
                    ],
                    "answer": "原价64元，涨价10%",
                    "explain": "现价=原价×(1+10%)=64×110%"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：64×110%=70.4元",
                        "64×91%=58.24",
                        "64×10%=6.4",
                        "64+10=74"
                    ],
                    "answer": "乘法：64×110%=70.4元",
                    "explain": "涨价a%后的价格=原价×(1+a%)，64×1.1=70.4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：原价64元，涨了6.4元，现价70.4元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "现价=64×(1+10%)=64×110%=70.4元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求比一个数多（少）百分之几的数：单位1×(1±百分数)",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一件衣服原价290元打八折。小红算现价多少元。",
            "question": "290 × 80% = ?元",
            "formula": "290×80%=?",
            "answer": 232,
            "choices": [
                232,
                160,
                290,
                40
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 290,
                "parts": [
                    {
                        "label": "现价232",
                        "val": 232,
                        "color": "#00A896"
                    },
                    {
                        "label": "优惠58",
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
                        "求打八折后的现价",
                        "求优惠了多少元",
                        "求原价",
                        "求打了几折"
                    ],
                    "answer": "求打八折后的现价",
                    "explain": "原价290元打八折，问现价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "原价290元，打八折（80%）",
                        "原价290元，打二折",
                        "现价290元",
                        "打八折=20%"
                    ],
                    "answer": "原价290元，打八折（80%）",
                    "explain": "八折就是按原价的80%出售"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：290×80%=232元",
                        "290×20%=58",
                        "290÷80%≈362.5",
                        "290-80=210"
                    ],
                    "answer": "乘法：290×80%=232元",
                    "explain": "现价=原价×折扣，八折=80%，290×0.8=232"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：原价290元，现价232元，优惠了58元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "现价=290×80%=290×0.8=232元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "打几折就是按原价的十分之几（百分之几十）出售",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一件衣服原价170元打八折。小红算现价多少元。",
            "question": "170 × 80% = ?元",
            "formula": "170×80%=?",
            "answer": 136,
            "choices": [
                136,
                160,
                170,
                40
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 170,
                "parts": [
                    {
                        "label": "现价136",
                        "val": 136,
                        "color": "#00A896"
                    },
                    {
                        "label": "优惠34",
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
                        "求打八折后的现价",
                        "求优惠了多少元",
                        "求原价",
                        "求打了几折"
                    ],
                    "answer": "求打八折后的现价",
                    "explain": "原价170元打八折，问现价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "原价170元，打八折（80%）",
                        "原价170元，打二折",
                        "现价170元",
                        "打八折=20%"
                    ],
                    "answer": "原价170元，打八折（80%）",
                    "explain": "八折就是按原价的80%出售"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：170×80%=136元",
                        "170×20%=34",
                        "170÷80%≈212.5",
                        "170-80=90"
                    ],
                    "answer": "乘法：170×80%=136元",
                    "explain": "现价=原价×折扣，八折=80%，170×0.8=136"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：原价170元，现价136元，优惠了34元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "现价=170×80%=170×0.8=136元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "打几折就是按原价的十分之几（百分之几十）出售",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "今年小麦比去年增产二成。去年产510千克，小红算增产多少千克。",
            "question": "510 × 20% = ?千克",
            "formula": "510×20%=?",
            "answer": 102,
            "choices": [
                102,
                100,
                510,
                50
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 612,
                "parts": [
                    {
                        "label": "去年510",
                        "val": 510,
                        "color": "#00A896"
                    },
                    {
                        "label": "增产102",
                        "val": 102,
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
                        "求增产了多少千克",
                        "求去年产量",
                        "求今年产量",
                        "求总共多少"
                    ],
                    "answer": "求增产了多少千克",
                    "explain": "今年比去年增产二成，去年510千克，问增产多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "去年510千克，增产二成（20%）",
                        "去年510千克，减产二成",
                        "增产510千克",
                        "二成=2%"
                    ],
                    "answer": "去年510千克，增产二成（20%）",
                    "explain": "二成=十分之二=20%"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：510×20%=102千克",
                        "510×2%=10.2",
                        "510÷20%=2550",
                        "510+20=530"
                    ],
                    "answer": "乘法：510×20%=102千克",
                    "explain": "增产=去年产量×成数，二成=20%，510×20%=102"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：去年510千克，今年增产102千克，共612千克",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "增产=510×20%=510×0.2=102千克",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "成数：几成就是十分之几，如二成=20%，增产=单位1×成数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "今年小麦比去年增产二成。去年产560千克，小红算增产多少千克。",
            "question": "560 × 20% = ?千克",
            "formula": "560×20%=?",
            "answer": 112,
            "choices": [
                112,
                100,
                560,
                50
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 672,
                "parts": [
                    {
                        "label": "去年560",
                        "val": 560,
                        "color": "#00A896"
                    },
                    {
                        "label": "增产112",
                        "val": 112,
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
                        "求增产了多少千克",
                        "求去年产量",
                        "求今年产量",
                        "求总共多少"
                    ],
                    "answer": "求增产了多少千克",
                    "explain": "今年比去年增产二成，去年560千克，问增产多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "去年560千克，增产二成（20%）",
                        "去年560千克，减产二成",
                        "增产560千克",
                        "二成=2%"
                    ],
                    "answer": "去年560千克，增产二成（20%）",
                    "explain": "二成=十分之二=20%"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：560×20%=112千克",
                        "560×2%=11.2",
                        "560÷20%=2800",
                        "560+20=580"
                    ],
                    "answer": "乘法：560×20%=112千克",
                    "explain": "增产=去年产量×成数，二成=20%，560×20%=112"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：去年560千克，今年增产112千克，共672千克",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "增产=560×20%=560×0.2=112千克",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "成数：几成就是十分之几，如二成=20%，增产=单位1×成数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "爸爸月收入6450元按3%缴纳个人所得税。小红算应纳税多少元。",
            "question": "6450 × 3% = ?元",
            "formula": "6450×3%=?",
            "answer": 193.5,
            "choices": [
                193.5,
                150,
                6450,
                300
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6450,
                "parts": [
                    {
                        "label": "税193.5",
                        "val": 193.5,
                        "color": "#FB923C"
                    },
                    {
                        "label": "到手6256.5",
                        "val": 6256.5,
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
                        "求应纳税多少元",
                        "求月收入多少",
                        "求到手多少",
                        "求税率"
                    ],
                    "answer": "求应纳税多少元",
                    "explain": "月收入6450元按3%纳税，问应纳税多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "收入6450元，税率3%",
                        "收入6450元，税率30%",
                        "税3元",
                        "税率6450%"
                    ],
                    "answer": "收入6450元，税率3%",
                    "explain": "应纳税额=收入×税率"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：6450×3%=193.5元",
                        "6450×30%=1935",
                        "6450÷3=2150",
                        "6450-3=6447"
                    ],
                    "answer": "乘法：6450×3%=193.5元",
                    "explain": "应纳税额=计税收入×税率，6450×3%=193.5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：月收入6450元，其中193.5元是税，到手6256.5元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "应纳税=6450×3%=6450×0.03=193.5元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "纳税问题：应纳税额=收入×税率，税率是百分之几",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "爸爸月收入6950元按3%缴纳个人所得税。小红算应纳税多少元。",
            "question": "6950 × 3% = ?元",
            "formula": "6950×3%=?",
            "answer": 208.5,
            "choices": [
                208.5,
                150,
                6950,
                300
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6950,
                "parts": [
                    {
                        "label": "税208.5",
                        "val": 208.5,
                        "color": "#FB923C"
                    },
                    {
                        "label": "到手6741.5",
                        "val": 6741.5,
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
                        "求应纳税多少元",
                        "求月收入多少",
                        "求到手多少",
                        "求税率"
                    ],
                    "answer": "求应纳税多少元",
                    "explain": "月收入6950元按3%纳税，问应纳税多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "收入6950元，税率3%",
                        "收入6950元，税率30%",
                        "税3元",
                        "税率6950%"
                    ],
                    "answer": "收入6950元，税率3%",
                    "explain": "应纳税额=收入×税率"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：6950×3%=208.5元",
                        "6950×30%=2085",
                        "6950÷3≈2316.67",
                        "6950-3=6947"
                    ],
                    "answer": "乘法：6950×3%=208.5元",
                    "explain": "应纳税额=计税收入×税率，6950×3%=208.5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：月收入6950元，其中208.5元是税，到手6741.5元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "应纳税=6950×3%=6950×0.03=208.5元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "纳税问题：应纳税额=收入×税率，税率是百分之几",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "妈妈存入银行17200元年利率2.6%存一年。小红算利息多少元。",
            "question": "17200 × 2.6% × 1 = ?元",
            "formula": "17200×2.6%=?",
            "answer": 447.2,
            "choices": [
                447.2,
                500,
                17200,
                2500
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 17647.2,
                "parts": [
                    {
                        "label": "本金17200",
                        "val": 17200,
                        "color": "#00A896"
                    },
                    {
                        "label": "利息447.2",
                        "val": 447.2,
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
                    "answer": 240,
                    "hint": "本金×利率"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求一年后的利息",
                        "求本金",
                        "求年利率",
                        "求本息合计"
                    ],
                    "answer": "求一年后的利息",
                    "explain": "存入17200元，年利率2.6%，存一年，问利息"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "本金17200元，年利率2.6%，存1年",
                        "本金17200元，年利率26%",
                        "利率2.6元",
                        "存10年"
                    ],
                    "answer": "本金17200元，年利率2.6%，存1年",
                    "explain": "利息=本金×利率×存期"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：17200×2.6%=447.2元",
                        "17200×26%=4472",
                        "17200÷2.6≈6615.38",
                        "17200+2.6"
                    ],
                    "answer": "乘法：17200×2.6%=447.2元",
                    "explain": "利息=本金×利率×存期，17200×2.6%=447.2"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：本金17200元，一年后利息447.2元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "利息=17200×2.6%=17200×0.026=447.2元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "储蓄问题：利息=本金×利率×存期，利率用百分数表示",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "妈妈存入银行19200元年利率2.4%存一年。小红算利息多少元。",
            "question": "19200 × 2.4% × 1 = ?元",
            "formula": "19200×2.4%=?",
            "answer": 460.8,
            "choices": [
                460.8,
                500,
                19200,
                2500
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 19660.8,
                "parts": [
                    {
                        "label": "本金19200",
                        "val": 19200,
                        "color": "#00A896"
                    },
                    {
                        "label": "利息460.8",
                        "val": 460.8,
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
                    "answer": 160,
                    "hint": "本金×利率"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求一年后的利息",
                        "求本金",
                        "求年利率",
                        "求本息合计"
                    ],
                    "answer": "求一年后的利息",
                    "explain": "存入19200元，年利率2.4%，存一年，问利息"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "本金19200元，年利率2.4%，存1年",
                        "本金19200元，年利率24%",
                        "利率2.4元",
                        "存10年"
                    ],
                    "answer": "本金19200元，年利率2.4%，存1年",
                    "explain": "利息=本金×利率×存期"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法：19200×2.4%=460.8元",
                        "19200×24%=4608",
                        "19200÷2.4=8000",
                        "19200+2.4"
                    ],
                    "answer": "乘法：19200×2.4%=460.8元",
                    "explain": "利息=本金×利率×存期，19200×2.4%=460.8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：本金19200元，一年后利息460.8元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "利息=19200×2.4%=19200×0.024=460.8元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "储蓄问题：利息=本金×利率×存期，利率用百分数表示",
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
            "knowledge": "扇形统计图（2024版移入六下·拓展保留）",
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
                        "求25%等于四分之几",
                        "求苹果占百分之几",
                        "求整个圆表示多少",
                        "求其他占多少"
                    ],
                    "answer": "求25%等于四分之几",
                    "explain": "苹果占25%，问25%等于?/4，填分子"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "苹果占25%，整个圆100%",
                        "苹果占28%，整个圆80%",
                        "苹果占25%，整个圆25%",
                        "没有给百分比"
                    ],
                    "answer": "苹果占25%，整个圆100%",
                    "explain": "25%写成分数是25/100"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "化简：25%=25/100=1/4，分子填1",
                        "25%=4/4",
                        "25%=25/4",
                        "25%=1/2"
                    ],
                    "answer": "化简：25%=25/100=1/4，分子填1",
                    "explain": "百分数化分数：写成分母100的分数再约分，25/100=1/4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "扇形图：苹果占整个圆的25%，即四分之一",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "25%=25/100=1/4，分子填1",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "整个圆表示100%，扇形占的百分比=扇形占圆的几分之几",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "扇形统计图中表示喜欢苹果的扇形占40%。小红知道整个圆表示100%。",
            "question": "40% = ?/5（填分子）",
            "formula": "40%=?/5",
            "answer": 2,
            "choices": [
                2,
                40,
                5,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "pie",
                "params": {
                    "segments": [
                        {
                            "label": "苹果",
                            "percent": 40,
                            "color": "#00A896"
                        },
                        {
                            "label": "其他",
                            "percent": 60,
                            "color": "#F5B800"
                        }
                    ]
                }
            },
            "knowledge": "扇形统计图（2024版移入六下·拓展保留）",
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
                    "question": "占60%=?/5（填分子）",
                    "formula": "60%=?/5",
                    "answer": 3,
                    "hint": "60%=3/5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求40%等于五分之几",
                        "求苹果占百分之几",
                        "求整个圆表示多少",
                        "求其他占多少"
                    ],
                    "answer": "求40%等于五分之几",
                    "explain": "苹果占40%，问40%等于?/5，填分子"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "苹果占40%，整个圆100%",
                        "苹果占31%，整个圆128%",
                        "苹果占40%，整个圆40%",
                        "没有给百分比"
                    ],
                    "answer": "苹果占40%，整个圆100%",
                    "explain": "40%写成分数是40/100"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "化简：40%=40/100=2/5，分子填2",
                        "40%=5/5",
                        "40%=40/5",
                        "40%=1/2"
                    ],
                    "answer": "化简：40%=40/100=2/5，分子填2",
                    "explain": "百分数化分数：写成分母100的分数再约分，40/100=2/5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "扇形图：苹果占整个圆的40%，即五分之二",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "40%=40/100=2/5，分子填2",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "整个圆表示100%，扇形占的百分比=扇形占圆的几分之几",
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
                        "求1+3+5+7等于几的平方",
                        "求1+3+5+7的和",
                        "求有几个加数",
                        "求最大的数"
                    ],
                    "answer": "求1+3+5+7等于几的平方",
                    "explain": "前4个连续奇数1、3、5、7相加，问和是几的平方"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "连续奇数1、3、5、7，共4个",
                        "连续奇数1、3、6、9，共4个",
                        "加数都相等",
                        "最大的数是7"
                    ],
                    "answer": "连续奇数1、3、5、7，共4个",
                    "explain": "1+3=4=2²，1+3+5=9=3²，加数的个数与平方数相同"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "4个连续奇数之和=4²：1+3+5+7=16=4²",
                        "1+3+5+7=3²",
                        "1+3+5+7=5²",
                        "1+3+5+7=2²"
                    ],
                    "answer": "4个连续奇数之和=4²：1+3+5+7=16=4²",
                    "explain": "前n个连续奇数之和=n²，4个奇数就是4²"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "点子图：1+3+5+7排成4层，正好组成4×4的方阵",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1+3+5+7=16=4²，有几个连续奇数就是几的平方",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "规律：从1开始n个连续奇数之和等于n²",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "老师让小红算1+3+5+7+9。她发现1+3=4=2²，1+3+5=9=3²。",
            "question": "1+3+5+7+9 = ?²",
            "formula": "1+3+5+7+9=?²",
            "answer": 5,
            "choices": [
                5,
                4,
                16,
                25
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "dotArray",
                "params": {
                    "layers": 5
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
                    "question": "1+3+5+7=?²",
                    "formula": "1+3+5+7=?²",
                    "answer": 4,
                    "hint": "4个奇数=4²"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求1+3+5+7+9等于几的平方",
                        "求1+3+5+7+9的和",
                        "求有几个加数",
                        "求最大的数"
                    ],
                    "answer": "求1+3+5+7+9等于几的平方",
                    "explain": "前5个连续奇数1、3、5、7、9相加，问和是几的平方"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "连续奇数1、3、5、7、9，共5个",
                        "连续奇数1、3、7、7、13，共5个",
                        "加数都相等",
                        "最大的数是9"
                    ],
                    "answer": "连续奇数1、3、5、7、9，共5个",
                    "explain": "1+3=4=2²，1+3+5=9=3²，加数的个数与平方数相同"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "5个连续奇数之和=5²：1+3+5+7+9=25=5²",
                        "1+3+5+7+9=4²",
                        "1+3+5+7+9=3²",
                        "1+3+5+7+9=16"
                    ],
                    "answer": "5个连续奇数之和=5²：1+3+5+7+9=25=5²",
                    "explain": "前n个连续奇数之和=n²，5个奇数就是5²"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "点子图：1+3+5+7+9排成5层，正好组成5×5的方阵",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1+3+5+7+9=25=5²，有几个连续奇数就是几的平方",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "规律：从1开始n个连续奇数之和等于n²",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "老师让小红算1/2+1/5+1/12+1/15。她发现越来越接近1。",
            "question": "1/2+1/5+1/12+1/15 = ?/60（填分子）",
            "formula": "1/2+1/5+1/12+1/15 = ?/60",
            "answer": 51,
            "choices": [
                51,
                50,
                60,
                45
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 51,
                "total": 60,
                "color": "#00A896"
            },
            "knowledge": "数与形（分数序列）",
            "difficulty": 3,
            "hint": "先通分到60分母再相加",
            "variants": [
                {
                    "question": "1/2+1/5=?/10（填分子）",
                    "formula": "=?/10",
                    "answer": 7,
                    "hint": "通分到10"
                },
                {
                    "question": "1/2+1/5+1/12=?/60（填分子）",
                    "formula": "=?/60",
                    "answer": 47,
                    "hint": "通分到60"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求四个分数的和（填分子）",
                        "求每个分数是多少",
                        "求最接近哪个数",
                        "求分母是多少"
                    ],
                    "answer": "求四个分数的和（填分子）",
                    "explain": "1/2+1/5+1/12+1/15，问结果写成?/60，填分子"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "四个分数分母是2、5、12、15",
                        "四个分数分母都是60",
                        "只有两个分数",
                        "分母是15"
                    ],
                    "answer": "四个分数分母是2、5、12、15",
                    "explain": "2、5、12、15的公分母是60"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "通分相加：30/60+12/60+5/60+4/60=51/60，分子51",
                        "30+12+5+4=51直接相加",
                        "15+15=30",
                        "60-51=9"
                    ],
                    "answer": "通分相加：30/60+12/60+5/60+4/60=51/60，分子51",
                    "explain": "异分母分数相加先通分：公分母60，分子30+12+5+4=51"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：整体分成60份，取51份，表示51/60，接近1",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "通分：1/2=30/60、1/5=12/60、1/12=5/60、1/15=4/60，和=51/60",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "异分母分数加法：先通分成同分母，再把分子相加",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "老师让小红算1/3+1/5+1/10+1/16。她发现越来越接近1。",
            "question": "1/3+1/5+1/10+1/16 = ?/240（填分子）",
            "formula": "=?/240",
            "answer": 167,
            "choices": [
                167,
                15,
                240,
                160
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 167,
                "total": 240,
                "color": "#00A896"
            },
            "knowledge": "数与形（分数序列）",
            "difficulty": 3,
            "hint": "无限逼近1",
            "variants": [
                {
                    "question": "1/3+1/5=?/15（填分子）",
                    "formula": "=?/15",
                    "answer": 8,
                    "hint": "通分到15"
                },
                {
                    "question": "1/3+1/5+1/10=?/30（填分子）",
                    "formula": "=?/30",
                    "answer": 19,
                    "hint": "通分到30"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求四个分数的和（填分子）",
                        "求每个分数是多少",
                        "求最接近哪个数",
                        "求分母是多少"
                    ],
                    "answer": "求四个分数的和（填分子）",
                    "explain": "1/3+1/5+1/10+1/16，问结果写成?/240，填分子"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "四个分数分母是3、5、10、16",
                        "四个分数分母都是240",
                        "只有两个分数",
                        "分母是16"
                    ],
                    "answer": "四个分数分母是3、5、10、16",
                    "explain": "3、5、10、16的公分母是240"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "通分相加：80/240+48/240+24/240+15/240=167/240，分子167",
                        "80+48+24+15=167直接相加",
                        "16×15=240",
                        "240-167=73"
                    ],
                    "answer": "通分相加：80/240+48/240+24/240+15/240=167/240，分子167",
                    "explain": "异分母分数相加先通分：公分母240，分子80+48+24+15=167"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条：整体分成240份，取167份，表示167/240，接近1",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "通分：1/3=80/240、1/5=48/240、1/10=24/240、1/16=15/240，和=167/240",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "异分母分数加法：先通分成同分母，再把分子相加",
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
