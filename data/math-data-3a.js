window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["3a"] = {
    "title": "三年级上册·2024版人教版（观察物体·混合运算·毫米分米千米·曹冲称象·多位数乘一位数·数字编码·线和角·分数）",
    "sub": "数与代数 · 图形与几何 · 综合与实践",
    "progress": 0,
    "units": [
        {
            "name": "观察物体(一)",
            "level": "current",
            "children": [
                {
                    "name": "从不同位置观察物体",
                    "level": "current"
                },
                {
                    "name": "立体图形与平面图形",
                    "level": "locked"
                },
                {
                    "name": "搭一搭、看一看",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "混合运算",
            "level": "locked",
            "children": [
                {
                    "name": "乘加、乘减两步式题",
                    "level": "locked"
                },
                {
                    "name": "除加、除减两步式题",
                    "level": "locked"
                },
                {
                    "name": "带小括号的两步式题",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "毫米、分米和千米",
            "level": "locked",
            "children": [
                {
                    "name": "毫米的认识",
                    "level": "locked"
                },
                {
                    "name": "分米的认识",
                    "level": "locked"
                },
                {
                    "name": "千米与米的换算",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "曹冲称象的故事（综合实践）",
            "level": "locked",
            "children": [
                {
                    "name": "克、千克、吨",
                    "level": "locked"
                },
                {
                    "name": "等量代换的思想",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "多位数乘一位数",
            "level": "locked",
            "children": [
                {
                    "name": "口算乘法",
                    "level": "locked"
                },
                {
                    "name": "笔算乘法（连续进位）",
                    "level": "locked"
                },
                {
                    "name": "估算与笔算结合",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "数字编码（综合实践）",
            "level": "locked",
            "children": [
                {
                    "name": "生活中的编码",
                    "level": "locked"
                },
                {
                    "name": "设计编码方案",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "线和角",
            "level": "locked",
            "children": [
                {
                    "name": "线段、直线、射线",
                    "level": "locked"
                },
                {
                    "name": "直角、锐角、钝角",
                    "level": "locked"
                },
                {
                    "name": "平角与周角",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "分数的初步认识",
            "level": "locked",
            "children": [
                {
                    "name": "几分之一",
                    "level": "locked"
                },
                {
                    "name": "几分之几",
                    "level": "locked"
                },
                {
                    "name": "同分母分数比大小",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "复习与关联",
            "level": "locked",
            "children": [
                {
                    "name": "数与运算",
                    "level": "locked"
                },
                {
                    "name": "图形的认识与测量",
                    "level": "locked"
                }
            ]
        }
    ],
    "problems": [
                {
            "id": "3A-OBS-01",
            "scene": "课堂上每个同学都拿了一个正方体魔方观察。老师问：从正面看这个正方体，看到的面是什么形状？",
            "question": "从正面观察一个正方体，看到的面是( )形。",
            "formula": "",
            "answer": "正方形",
            "choices": [
                "正方形",
                "长方形",
                "三角形",
                "圆"
            ],
            "knowledge": "观察物体",
            "difficulty": 2,
            "hint": "正方体的六个面都是完全相同的正方形",
            "variants": [
                {
                    "question": "从上面观察同一个正方体，看到的面是( )形。",
                    "formula": "",
                    "answer": "正方形",
                    "hint": "每个面都是正方形"
                }
            ],
            "visualType": "geometry",
            "visualData": {
                "type": "geometry",
                "shape": "cube",
                "side": 4
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "从正面看正方体看到什么形状",
                        "正方体一共有几个面",
                        "正方体有几条棱"
                    ],
                    "answer": "从正面看正方体看到什么形状",
                    "explain": "题目问的是从正面观察正方体，看到的面是什么形状。"
                },
                {
                    "q": "🔢 正方体的面有什么特点？",
                    "choices": [
                        "六个面都是完全相同的正方形",
                        "六个面都是长方形",
                        "六个面大小各不相同"
                    ],
                    "answer": "六个面都是完全相同的正方形",
                    "explain": "正方体的六个面都是同样大的正方形。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "观察立体图形的面",
                        "把正方体拆开数面",
                        "量一量棱的长度"
                    ],
                    "answer": "观察立体图形的面",
                    "explain": "从正面看到的那个面是正方形，所以填「正方形」。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 正方体的面",
                    "text": "正方体每个面都是四边一样长、四个角都是直角的正方形。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 正面看到的面",
                    "text": "从正面垂直看过去，看到的就是一个正方形。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 换个方向看",
                    "text": "不管从正面、上面还是侧面看正方体，看到的都是同样大的正方形。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-OBS-02",
            "scene": "小明家有一个茶叶筒（圆柱形的）。他分别从侧面和上面观察它。",
            "question": "从侧面观察一个圆柱，看到的形状是( )形。",
            "formula": "",
            "answer": "长方形",
            "choices": [
                "长方形",
                "圆",
                "正方形",
                "三角形"
            ],
            "knowledge": "观察物体",
            "difficulty": 2,
            "hint": "圆柱侧面展开是长方形，正视图为长方形",
            "variants": [
                {
                    "question": "从上面观察同一个圆柱，看到的形状是( )形。",
                    "formula": "",
                    "answer": "圆",
                    "hint": "上面看是圆形底面"
                }
            ],
            "visualType": "geometry",
            "visualData": {
                "type": "geometry",
                "shape": "cylinder",
                "radius": 2,
                "height": 4
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "从侧面看圆柱是什么形状",
                        "圆柱有多高",
                        "圆柱有几个面"
                    ],
                    "answer": "从侧面看圆柱是什么形状",
                    "explain": "题目问的是从侧面观察圆柱，看到的形状是什么。"
                },
                {
                    "q": "🔢 圆柱的形状有什么特点？",
                    "choices": [
                        "上下两个面是圆，侧面是弯曲的曲面",
                        "上下两个面是正方形",
                        "整体是一个球"
                    ],
                    "answer": "上下两个面是圆，侧面是弯曲的曲面",
                    "explain": "圆柱上下底面是圆，侧面的曲面展开后是长方形。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "观察立体图形的面",
                        "数一数圆柱有几条边",
                        "量一量圆柱的直径"
                    ],
                    "answer": "观察立体图形的面",
                    "explain": "从侧面正对着看圆柱，看到的形状是长方形。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 圆柱的样子",
                    "text": "茶叶筒上下是圆形的盖子，侧面是弯弯的曲面。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 从侧面看",
                    "text": "从侧面正对着看，弯弯的曲面看起来就是一个长方形。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 换个方向看",
                    "text": "从上面往下看圆柱看到的是圆，从侧面看是长方形。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-OBS-03",
            "scene": "美术课搭积木：把 3 个同样的小正方体横着排成一排。",
            "question": "从正面看这排积木，能看到( )个正方形。",
            "formula": "3 = ?",
            "answer": 3,
            "choices": [
                3,
                2,
                4,
                1
            ],
            "knowledge": "观察物体",
            "difficulty": 2,
            "hint": "3 个并排，正面看到 3 个正方形",
            "variants": [
                {
                    "question": "把 2 个同样的小正方体上下叠放，从正面看能看到( )个正方形。",
                    "formula": "2 = ?",
                    "answer": 2,
                    "hint": "上下 2 个，正面看到 2 个"
                }
            ],
            "visualType": "geometry",
            "visualData": {
                "type": "geometry",
                "shape": "cubes",
                "topView": [
                    1,
                    1,
                    1
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "从正面能看到几个正方形",
                        "这堆积木一共有几个正方体",
                        "这堆积木有多高"
                    ],
                    "answer": "从正面能看到几个正方形",
                    "explain": "题目问的是从正面能看到几个正方形。"
                },
                {
                    "q": "🔢 题目给了什么信息？",
                    "choices": [
                        "3 个同样的小正方体横着排成一排",
                        "3 个正方体叠成三层",
                        "有 3 个正方体藏在后面"
                    ],
                    "answer": "3 个同样的小正方体横着排成一排",
                    "explain": "3 个正方体并排，彼此没有遮挡。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "逐个数正面看到的面",
                        "把三个正方体的面全加起来",
                        "先算体积再换算"
                    ],
                    "answer": "逐个数正面看到的面",
                    "explain": "并排的 3 个正方体各露出 1 个正面，一共 3 个正方形。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 积木摆放",
                    "text": "3 个一样的小正方体横着并排，谁也不挡住谁。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数正面",
                    "text": "每个正方体从正面露出 1 个正方形，3 个就是 3 个。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 有遮挡的情况",
                    "text": "如果后面还藏着一排，从正面就看不到了，只数看得见的。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-MIX-01",
            "scene": "文具店里一支钢笔 6 元，一个笔记本 4 元。小明要买 3 支钢笔和 1 个笔记本，他先算一算一共要花多少钱。",
            "question": "一共要付多少元？",
            "formula": "3 × 6 + 4 = ?",
            "answer": 22,
            "choices": [
                18,
                22,
                24,
                26
            ],
            "knowledge": "混合运算",
            "difficulty": 2,
            "hint": "先算乘法 3×6=18，再算加法 18+4=22（先乘除后加减）",
            "variants": [
                {
                    "question": "买 5 支铅笔（每支 2 元）和 1 块橡皮（3 元），一共多少元？",
                    "formula": "5 × 2 + 3 = ?",
                    "answer": 13,
                    "hint": "先算 5×2=10，再算 10+3=13"
                },
                {
                    "question": "买 4 个面包（每个 5 元），付给售货员 30 元，应找回多少元？",
                    "formula": "30 - 4 × 5 = ?",
                    "answer": 10,
                    "hint": "先算 4×5=20，再算 30-20=10"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 22,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 11,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 11,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "一共要付多少元",
                        "一支钢笔多少元",
                        "3 支钢笔比笔记本贵多少元"
                    ],
                    "answer": "一共要付多少元",
                    "explain": "题目问的是一共要花的钱数。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "钢笔每支 6 元买 3 支，笔记本 4 元买 1 个",
                        "钢笔每支 3 元",
                        "笔记本买了 3 个"
                    ],
                    "answer": "钢笔每支 6 元买 3 支，笔记本 4 元买 1 个",
                    "explain": "钢笔的钱要 3 支一起算，笔记本只买 1 个。"
                },
                {
                    "q": "🧩 先算哪一步？",
                    "choices": [
                        "先算 3×6=18，再加 4",
                        "先算 3+4=7，再乘 6",
                        "先算 6+4=10，再乘 3"
                    ],
                    "answer": "先算 3×6=18，再加 4",
                    "explain": "先乘后加：3×6=18，18+4=22 元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 线段图",
                    "text": "3 支钢笔每支 6 元，就是 3 个 6 元，合起来 18 元。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 运算顺序",
                    "text": "这是乘加题，先算乘法 3×6=18，再加 4 得 22。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 有乘又有加",
                    "text": "式子里有乘法和加法时，都先算乘法，再加结果。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-MIX-02",
            "scene": "每盒铅笔 8 元，小明买了 2 盒，又买了一块 3 元的橡皮。",
            "question": "小明一共花了多少元？",
            "formula": "2 × 8 + 3 = ?",
            "answer": 19,
            "choices": [
                16,
                19,
                22,
                27
            ],
            "knowledge": "混合运算",
            "difficulty": 2,
            "hint": "先算乘法 2×8=16，再加 3 得 19",
            "variants": [
                {
                    "question": "4 支笔每支 2 元，和 1 本 7 元的本子，一共多少元？",
                    "formula": "4 × 2 + 7 = ?",
                    "answer": 15,
                    "hint": "先算 4×2=8，再加 7"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 19,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 10,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 9,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "小明一共花了多少元",
                        "一盒铅笔多少元",
                        "橡皮比铅笔贵多少元"
                    ],
                    "answer": "小明一共花了多少元",
                    "explain": "题目问的是一共花了多少钱。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "铅笔每盒 8 元买 2 盒，橡皮 3 元",
                        "铅笔每盒 2 元",
                        "橡皮买了 2 块"
                    ],
                    "answer": "铅笔每盒 8 元买 2 盒，橡皮 3 元",
                    "explain": "铅笔的钱按 2 盒算，橡皮只买 1 块。"
                },
                {
                    "q": "🧩 先算哪一步？",
                    "choices": [
                        "先算 2×8=16，再加 3",
                        "先算 2+3=5，再乘 8",
                        "先算 8+3=11，再乘 2"
                    ],
                    "answer": "先算 2×8=16，再加 3",
                    "explain": "先算乘法 2×8=16，再加 3 得 19 元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 线段图",
                    "text": "2 盒铅笔每盒 8 元，就是 2 个 8 元，共 16 元。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 运算顺序",
                    "text": "先算乘法 2×8=16，再加上橡皮的 3 元，得 19 元。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 乘加应用",
                    "text": "买东西遇到「几个几元」再加一件，都先乘后加。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-MIX-03",
            "scene": "小军有 24 元，先买 3 支笔（每支 4 元），剩下的钱买每本 6 元的本子。",
            "question": "剩下的钱能买几本本子？",
            "formula": "(24 - 3 × 4) ÷ 6 = ?",
            "answer": 2,
            "choices": [
                2,
                3,
                4,
                6
            ],
            "knowledge": "混合运算",
            "difficulty": 2,
            "hint": "先算括号里 24-12=12，再算 12÷6=2",
            "variants": [
                {
                    "question": "36 元买 4 支笔（每支 3 元），剩下的钱买每本 8 元的本子，能买几本？",
                    "formula": "(36 - 4 × 3) ÷ 8 = ?",
                    "answer": 3,
                    "hint": "括号里 36-12=24，24÷8=3"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 2,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 1,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 1,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "剩下的钱能买几本本子",
                        "3 支笔一共多少钱",
                        "小军一共有多少钱"
                    ],
                    "answer": "剩下的钱能买几本本子",
                    "explain": "题目问的是剩下的钱能买几本本子。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "共 24 元，3 支笔每支 4 元，每本本子 6 元",
                        "每本本子 4 元",
                        "笔每支 6 元"
                    ],
                    "answer": "共 24 元，3 支笔每支 4 元，每本本子 6 元",
                    "explain": "先算买笔花了多少，再看剩下的钱买本子。"
                },
                {
                    "q": "🧩 先算哪一步？",
                    "choices": [
                        "先算 3×4=12，再 24-12=12，最后 12÷6",
                        "先算 24-3=21，再除以 6",
                        "先算 24÷6=4，再减 12"
                    ],
                    "answer": "先算 3×4=12，再 24-12=12，最后 12÷6",
                    "explain": "买笔用去 12 元，剩下 12 元，12÷6=2 本。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 线段图",
                    "text": "整条线段表示 24 元，先去掉买笔的 3×4=12 元。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 有小括号",
                    "text": "剩下 24-12=12 元，每本 6 元，12÷6=2 本，写成 (24-3×4)÷6。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 括号的作用",
                    "text": "有小括号时先算括号里的，括号里再先乘除后加减。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-MIX-04",
            "scene": "一包糖有 5 排，每排 6 颗。小红吃了 8 颗。",
            "question": "还剩多少颗糖？",
            "formula": "5 × 6 - 8 = ?",
            "answer": 22,
            "choices": [
                22,
                30,
                38,
                7
            ],
            "knowledge": "混合运算",
            "difficulty": 2,
            "hint": "先算 5×6=30，再减 8 得 22",
            "variants": [
                {
                    "question": "每盘 7 个草莓，有 4 盘，吃了 10 个，还剩几个？",
                    "formula": "4 × 7 - 10 = ?",
                    "answer": 18,
                    "hint": "先算 4×7=28，再减 10"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 22,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 11,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 11,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "还剩多少颗糖",
                        "一共有多少颗糖",
                        "小红吃了多少颗糖"
                    ],
                    "answer": "还剩多少颗糖",
                    "explain": "题目问吃掉一些后还剩多少颗糖。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "5 排每排 6 颗，吃了 8 颗",
                        "每排 8 颗，共 5 颗",
                        "一共吃了 5 颗"
                    ],
                    "answer": "5 排每排 6 颗，吃了 8 颗",
                    "explain": "先算总颗数 5×6，再减去吃掉的 8 颗。"
                },
                {
                    "q": "🧩 先算哪一步？",
                    "choices": [
                        "先算 5×6=30，再减 8",
                        "先算 6-8，再乘 5",
                        "先算 5-8，再乘 6"
                    ],
                    "answer": "先算 5×6=30，再减 8",
                    "explain": "先算乘法 5×6=30，再算 30-8=22 颗。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 线段图",
                    "text": "5 排每排 6 颗，一共 30 颗糖。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 运算顺序",
                    "text": "先算 5×6=30，再减吃掉 8 颗，还剩 22 颗。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 乘减应用",
                    "text": "先求总数再减去一部分，就是乘减两步题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-MIX-05",
            "scene": "计算 36 - 12 ÷ 3 时，要先算哪一步？",
            "question": "36 - 12 ÷ 3 = ?",
            "formula": "36 - 12 ÷ 3 = ?",
            "answer": 32,
            "choices": [
                32,
                30,
                11,
                24
            ],
            "knowledge": "混合运算",
            "difficulty": 2,
            "hint": "先算除法 12÷3=4，再算减法 36-4=32",
            "variants": [
                {
                    "question": "18 + 4 × 2 = ?",
                    "formula": "18 + 4 × 2 = ?",
                    "answer": 26,
                    "hint": "先算 4×2=8，再加 18"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 32,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 16,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 16,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "算出 36-12÷3 的结果",
                        "36 减 12 等于多少",
                        "12 除以 3 等于多少"
                    ],
                    "answer": "算出 36-12÷3 的结果",
                    "explain": "题目要算出这个式子的结果。"
                },
                {
                    "q": "🔢 式子里有哪些运算？",
                    "choices": [
                        "有减法也有除法，除数是 3",
                        "只有减法",
                        "只有加法"
                    ],
                    "answer": "有减法也有除法，除数是 3",
                    "explain": "式子里混合了减法和除法。"
                },
                {
                    "q": "🧩 先算哪一步？",
                    "choices": [
                        "先算除法 12÷3=4，再算 36-4",
                        "先算减法 36-12=24，再除以 3",
                        "先算 36+12=48，再除以 3"
                    ],
                    "answer": "先算除法 12÷3=4，再算 36-4",
                    "explain": "先乘除后加减：12÷3=4，36-4=32。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 看清式子",
                    "text": "式子是 36 - 12 ÷ 3，除号后面没有括号。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 先乘除后加减",
                    "text": "先算除法 12÷3=4，再算 36-4=32。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 常见错误",
                    "text": "先算 36-12=24 再除以 3 就错了，除法排在加减前面。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "scene": "科学课上老师让同学们测量回形针的厚度。小明发现回形针大约厚1毫米，他想知道1厘米等于多少毫米。",
            "question": "1厘米等于多少毫米？",
            "formula": "1cm = ? mm",
            "answer": 10,
            "choices": [
                10,
                100,
                5,
                20
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 10,
                "points": [
                    {
                        "pos": 0,
                        "label": "0cm",
                        "color": "#00A896"
                    },
                    {
                        "pos": 10,
                        "label": "1cm",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    10
                ]
            },
            "knowledge": "毫米的认识",
            "difficulty": 1,
            "hint": "1cm=10mm",
            "variants": [
                {
                    "question": "2cm=多少mm？",
                    "formula": "2cm=?mm",
                    "answer": 20,
                    "hint": "2×10"
                },
                {
                    "question": "5cm=多少mm？",
                    "formula": "5cm=?mm",
                    "answer": 50,
                    "hint": "5×10"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "1 厘米等于多少毫米",
                        "1 毫米等于多少厘米",
                        "回形针有多长"
                    ],
                    "answer": "1 厘米等于多少毫米",
                    "explain": "题目问的是 1 厘米等于多少毫米。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "1 厘米 = 10 毫米",
                        "1 米 = 100 厘米",
                        "1 分米 = 10 厘米"
                    ],
                    "answer": "1 厘米 = 10 毫米",
                    "explain": "厘米和毫米之间的进率是 10。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用长度单位的进率换算",
                        "把 1 和 10 相加",
                        "把 10 分成 1 和 0"
                    ],
                    "answer": "用长度单位的进率换算",
                    "explain": "1 厘米 = 10 毫米，所以答案是 10。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 直尺刻度",
                    "text": "直尺把 1 厘米平均分成 10 个小格，每一小格就是 1 毫米。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 单位进率",
                    "text": "1 厘米 = 10 毫米，1 厘米里正好有 10 个 1 毫米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 长度单位换算",
                    "text": "相邻长度单位进率都是 10：1米=10分米，1分米=10厘米，1厘米=10毫米。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-16"
        },
                {
            "scene": "美术课上小红画了一条3厘米长的线段。她想换算成毫米来记录，因为毫米更精确。",
            "question": "3厘米等于多少毫米？",
            "formula": "3 × 10 = ?",
            "answer": 30,
            "choices": [
                30,
                13,
                300,
                3
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 30,
                "parts": [
                    {
                        "label": "1cm",
                        "val": 10,
                        "color": "#00A896"
                    },
                    {
                        "label": "1cm",
                        "val": 10,
                        "color": "#F5B800"
                    },
                    {
                        "label": "1cm",
                        "val": 10,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "毫米的认识",
            "difficulty": 1,
            "hint": "1cm=10mm，3cm就是3个10",
            "variants": [
                {
                    "question": "4cm=多少mm？",
                    "formula": "4×10=?",
                    "answer": 40,
                    "hint": "4个10"
                },
                {
                    "question": "6cm=多少mm？",
                    "formula": "6×10=?",
                    "answer": 60,
                    "hint": "6个10"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "3 厘米等于多少毫米",
                        "3 毫米等于多少厘米",
                        "这条线段有多长"
                    ],
                    "answer": "3 厘米等于多少毫米",
                    "explain": "题目问 3 厘米换算成毫米是多少。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "1 厘米 = 10 毫米",
                        "1 米 = 1000 毫米",
                        "1 毫米 = 10 厘米"
                    ],
                    "answer": "1 厘米 = 10 毫米",
                    "explain": "厘米换毫米要用进率 10。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用 3×10，把 3 个 10 相加",
                        "用 3+10",
                        "用 10÷3"
                    ],
                    "answer": "用 3×10，把 3 个 10 相加",
                    "explain": "3 厘米就是 3 个 1 厘米，3×10=30 毫米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 条形模型",
                    "text": "条形图把 3 厘米分成 3 段，每段是 10 毫米。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 3 个 10",
                    "text": "3 厘米 = 3 个 10 毫米 = 10+10+10 = 30 毫米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 几厘米换毫米",
                    "text": "几厘米换毫米，就用几乘 10。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-17"
        },
                {
            "scene": "小亮量得自己的铅笔长5厘米2毫米。他想知道换算成毫米一共是多少毫米。",
            "question": "5厘米2毫米等于多少毫米？",
            "formula": "50 + 2 = ?",
            "answer": 52,
            "choices": [
                52,
                42,
                62,
                7
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 52,
                "parts": [
                    {
                        "label": "5cm",
                        "val": 50,
                        "color": "#00A896"
                    },
                    {
                        "label": "2mm",
                        "val": 2,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "毫米的认识",
            "difficulty": 1,
            "hint": "5cm=50mm再加2mm",
            "variants": [
                {
                    "question": "3cm4mm=多少mm？",
                    "formula": "30+4=?",
                    "answer": 34,
                    "hint": "30加4"
                },
                {
                    "question": "7cm5mm=多少mm？",
                    "formula": "70+5=?",
                    "answer": 75,
                    "hint": "70加5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "5 厘米 2 毫米一共是多少毫米",
                        "5 厘米等于多少毫米",
                        "2 毫米等于多少厘米"
                    ],
                    "answer": "5 厘米 2 毫米一共是多少毫米",
                    "explain": "题目要求把两个长度合起来换算成毫米。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "5 厘米和 2 毫米两部分，1 厘米 = 10 毫米",
                        "直接把 5 和 2 相加",
                        "1 毫米 = 10 厘米"
                    ],
                    "answer": "5 厘米和 2 毫米两部分，1 厘米 = 10 毫米",
                    "explain": "5 厘米要换成毫米，再加上剩下的 2 毫米。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "先 5×10=50，再 50+2",
                        "5+2=7",
                        "50-2=48"
                    ],
                    "answer": "先 5×10=50，再 50+2",
                    "explain": "5 厘米 = 50 毫米，再加 2 毫米，共 52 毫米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 铅笔长度",
                    "text": "铅笔长 5 厘米 2 毫米，可以拆成 5 厘米和 2 毫米两段。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 先换再加",
                    "text": "5 厘米 = 50 毫米，再加上 2 毫米就是 52 毫米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 复名数换算",
                    "text": "几厘米几毫米，先把厘米换成毫米，再加上毫米的部分。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-18"
        },
                {
            "scene": "老师让同学们用手掌量课桌的宽度。小明的手掌张开大约是1分米，他想知道1米等于多少分米。",
            "question": "1米等于多少分米？",
            "formula": "1m = ? dm",
            "answer": 10,
            "choices": [
                10,
                100,
                5,
                20
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 10,
                "points": [
                    {
                        "pos": 0,
                        "label": "0m",
                        "color": "#00A896"
                    },
                    {
                        "pos": 10,
                        "label": "1m",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    10
                ]
            },
            "knowledge": "分米的认识",
            "difficulty": 1,
            "hint": "1m=10dm",
            "variants": [
                {
                    "question": "2m=多少dm？",
                    "formula": "2m=?dm",
                    "answer": 20,
                    "hint": "2×10"
                },
                {
                    "question": "4m=多少dm？",
                    "formula": "4m=?dm",
                    "answer": 40,
                    "hint": "4×10"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "1 米等于多少分米",
                        "1 分米等于多少米",
                        "课桌有多宽"
                    ],
                    "answer": "1 米等于多少分米",
                    "explain": "题目问 1 米等于多少分米。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "1 米 = 10 分米",
                        "1 米 = 100 毫米",
                        "1 分米 = 100 厘米"
                    ],
                    "answer": "1 米 = 10 分米",
                    "explain": "米和分米之间的进率是 10。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用米和分米的进率换算",
                        "把 1 和 10 相乘得 10 米",
                        "把 10 分成 1 和 0"
                    ],
                    "answer": "用米和分米的进率换算",
                    "explain": "1 米 = 10 分米，所以填 10。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 米尺",
                    "text": "1 米长的尺子上有 10 个 1 分米的格。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 进率",
                    "text": "1 米里正好有 10 个 1 分米，所以 1米=10分米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 长度进率",
                    "text": "每相邻两个长度单位之间的进率都是 10。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-19"
        },
                {
            "scene": "小芳量得书桌高7分米。她想换算成厘米来记录，因为厘米她更熟悉。",
            "question": "7分米等于多少厘米？",
            "formula": "7 × 10 = ?",
            "answer": 70,
            "choices": [
                70,
                17,
                700,
                7
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 70,
                "parts": [
                    {
                        "label": "1dm",
                        "val": 10,
                        "color": "#00A896"
                    },
                    {
                        "label": "1dm",
                        "val": 10,
                        "color": "#F5B800"
                    },
                    {
                        "label": "1dm",
                        "val": 10,
                        "color": "#FB923C"
                    },
                    {
                        "label": "4dm",
                        "val": 40,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "分米的认识",
            "difficulty": 1,
            "hint": "1dm=10cm，7dm就是7个10",
            "variants": [
                {
                    "question": "5dm=多少cm？",
                    "formula": "5×10=?",
                    "answer": 50,
                    "hint": "5个10"
                },
                {
                    "question": "9dm=多少cm？",
                    "formula": "9×10=?",
                    "answer": 90,
                    "hint": "9个10"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "7 分米等于多少厘米",
                        "7 厘米等于多少分米",
                        "书桌有多高"
                    ],
                    "answer": "7 分米等于多少厘米",
                    "explain": "题目问 7 分米换算成厘米是多少。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "1 分米 = 10 厘米",
                        "1 米 = 10 厘米",
                        "1 厘米 = 10 分米"
                    ],
                    "answer": "1 分米 = 10 厘米",
                    "explain": "分米换厘米要用进率 10。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用 7×10，7 个 10 相加",
                        "用 7+10",
                        "用 10÷7"
                    ],
                    "answer": "用 7×10，7 个 10 相加",
                    "explain": "7 分米 = 7 个 10 厘米 = 70 厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 条形模型",
                    "text": "条形图把 7 分米分成 7 段，每段 10 厘米。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 7 个 10",
                    "text": "7×10=70，所以 7 分米 = 70 厘米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 几分米换厘米",
                    "text": "几分米换厘米，就用几乘 10。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-20"
        },
                {
            "scene": "一根绳子长1米5分米。小红想把它换算成分米来记录，方便剪裁。",
            "question": "1米5分米等于多少分米？",
            "formula": "10 + 5 = ?",
            "answer": 15,
            "choices": [
                15,
                25,
                5,
                105
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 15,
                "parts": [
                    {
                        "label": "1m",
                        "val": 10,
                        "color": "#00A896"
                    },
                    {
                        "label": "5dm",
                        "val": 5,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "分米的认识",
            "difficulty": 1,
            "hint": "1m=10dm再加5dm",
            "variants": [
                {
                    "question": "2m3dm=多少dm？",
                    "formula": "20+3=?",
                    "answer": 23,
                    "hint": "20加3"
                },
                {
                    "question": "3m8dm=多少dm？",
                    "formula": "30+8=?",
                    "answer": 38,
                    "hint": "30加8"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "1 米 5 分米一共是多少分米",
                        "1 米等于多少分米",
                        "5 分米等于多少米"
                    ],
                    "answer": "1 米 5 分米一共是多少分米",
                    "explain": "题目要求把这两个长度合起来换算成分米。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "1 米和 5 分米两部分，1 米 = 10 分米",
                        "直接把 1 和 5 相加",
                        "1 米 = 100 分米"
                    ],
                    "answer": "1 米和 5 分米两部分，1 米 = 10 分米",
                    "explain": "1 米要换成分米，再加上 5 分米。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "先 1×10=10，再 10+5",
                        "1+5=6",
                        "10-5=5"
                    ],
                    "answer": "先 1×10=10，再 10+5",
                    "explain": "1 米 = 10 分米，再加 5 分米，共 15 分米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 绳子长度",
                    "text": "绳子长 1 米 5 分米，可以看成 1 米和 5 分米两段。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 先换再加",
                    "text": "1 米 = 10 分米，10+5=15 分米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 复名数换算",
                    "text": "几米几分米换分米，先把米乘 10，再加上分米数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-21"
        },
                {
            "scene": "学校操场一圈是400米，体育老师让同学们跑两圈半，正好是1千米。小明好奇1千米等于多少米。",
            "question": "1千米等于多少米？",
            "formula": "1km = ? m",
            "answer": 1000,
            "choices": [
                1000,
                100,
                10000,
                500
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 1000,
                "points": [
                    {
                        "pos": 0,
                        "label": "起点",
                        "color": "#00A896"
                    },
                    {
                        "pos": 1000,
                        "label": "1km",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    1000
                ]
            },
            "knowledge": "千米的认识",
            "difficulty": 2,
            "hint": "1km=1000m",
            "variants": [
                {
                    "question": "2km=多少m？",
                    "formula": "2km=?m",
                    "answer": 2000,
                    "hint": "2×1000"
                },
                {
                    "question": "5km=多少m？",
                    "formula": "5km=?m",
                    "answer": 5000,
                    "hint": "5×1000"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "1 千米等于多少米",
                        "1 米等于多少千米",
                        "操场一圈有多少米"
                    ],
                    "answer": "1 千米等于多少米",
                    "explain": "题目问 1 千米等于多少米。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "1 千米 = 1000 米",
                        "1 千米 = 100 米",
                        "1 米 = 1000 千米"
                    ],
                    "answer": "1 千米 = 1000 米",
                    "explain": "千米和米之间的进率是 1000。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用千米和米的进率换算",
                        "把 1 和 1000 相加",
                        "把 1000 除以 10"
                    ],
                    "answer": "用千米和米的进率换算",
                    "explain": "1 千米 = 1000 米，所以填 1000。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 操场跑道",
                    "text": "操场一圈 400 米，跑 2 圈半正好 1000 米，就是 1 千米。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 进率 1000",
                    "text": "1 千米 = 1000 米，里面有 10 个 100 米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 生活中的千米",
                    "text": "跑步两圈半操场约 1 千米，千米用来量很长的路。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-22"
        },
                {
            "scene": "从家到学校有3千米。小红每天步行上学，她想知道3千米等于多少米。",
            "question": "3千米等于多少米？",
            "formula": "3 × 1000 = ?",
            "answer": 3000,
            "choices": [
                3000,
                300,
                30,
                3003
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 3000,
                "parts": [
                    {
                        "label": "1km",
                        "val": 1000,
                        "color": "#00A896"
                    },
                    {
                        "label": "1km",
                        "val": 1000,
                        "color": "#F5B800"
                    },
                    {
                        "label": "1km",
                        "val": 1000,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "千米的认识",
            "difficulty": 2,
            "hint": "1km=1000m，3km就是3个1000",
            "variants": [
                {
                    "question": "4km=多少m？",
                    "formula": "4×1000=?",
                    "answer": 4000,
                    "hint": "4个1000"
                },
                {
                    "question": "6km=多少m？",
                    "formula": "6×1000=?",
                    "answer": 6000,
                    "hint": "6个1000"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "3 千米等于多少米",
                        "3 米等于多少千米",
                        "从家到学校有多远"
                    ],
                    "answer": "3 千米等于多少米",
                    "explain": "题目问 3 千米换算成米是多少。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "1 千米 = 1000 米",
                        "1 千米 = 100 米",
                        "1 米 = 1000 千米"
                    ],
                    "answer": "1 千米 = 1000 米",
                    "explain": "千米换米要用进率 1000。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用 3×1000，3 个 1000 相加",
                        "用 3+1000",
                        "用 1000÷3"
                    ],
                    "answer": "用 3×1000，3 个 1000 相加",
                    "explain": "3 千米 = 3 个 1000 米 = 3000 米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 路程线",
                    "text": "从家到学校 3 千米，就是 3 段 1000 米的路。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 3 个 1000",
                    "text": "3×1000=3000，所以 3 千米 = 3000 米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 几千米换米",
                    "text": "几千米换米，就用几乘 1000。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-23"
        },
                {
            "scene": "小明骑车从家到公园要2千米500米。他想知道换算成米一共是多少米。",
            "question": "2千米500米等于多少米？",
            "formula": "2000 + 500 = ?",
            "answer": 2500,
            "choices": [
                2500,
                2050,
                250,
                2005
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 2500,
                "parts": [
                    {
                        "label": "2km",
                        "val": 2000,
                        "color": "#00A896"
                    },
                    {
                        "label": "500m",
                        "val": 500,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "千米的认识",
            "difficulty": 2,
            "hint": "2km=2000m再加500m",
            "variants": [
                {
                    "question": "3km200m=多少m？",
                    "formula": "3000+200=?",
                    "answer": 3200,
                    "hint": "3000加200"
                },
                {
                    "question": "1km800m=多少m？",
                    "formula": "1000+800=?",
                    "answer": 1800,
                    "hint": "1000加800"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "2 千米 500 米一共是多少米",
                        "2 千米等于多少米",
                        "500 米等于多少千米"
                    ],
                    "answer": "2 千米 500 米一共是多少米",
                    "explain": "题目要求把两段路程合起来换算成米。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "2 千米和 500 米两部分，1 千米 = 1000 米",
                        "直接把 2 和 500 相加",
                        "1 米 = 1000 千米"
                    ],
                    "answer": "2 千米和 500 米两部分，1 千米 = 1000 米",
                    "explain": "2 千米要换成米，再加上 500 米。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "先 2×1000=2000，再 2000+500",
                        "2+500=502",
                        "2000-500=1500"
                    ],
                    "answer": "先 2×1000=2000，再 2000+500",
                    "explain": "2 千米 = 2000 米，加 500 米，共 2500 米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 路程线",
                    "text": "从家到公园的路分成 2 千米和 500 米两段。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 先换再加",
                    "text": "2 千米 = 2000 米，2000+500=2500 米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 复名数换算",
                    "text": "几千米几米换米，先乘 1000，再加上米数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-24"
        },
                {
            "scene": "动物园里有一头大象重约5吨。饲养员告诉同学们1吨等于1000千克，小明好奇5吨等于多少千克。",
            "question": "5吨等于多少千克？",
            "formula": "5 × 1000 = ?",
            "answer": 5000,
            "choices": [
                5000,
                500,
                50,
                5005
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 5000,
                "parts": [
                    {
                        "label": "1吨",
                        "val": 1000,
                        "color": "#00A896"
                    },
                    {
                        "label": "1吨",
                        "val": 1000,
                        "color": "#F5B800"
                    },
                    {
                        "label": "1吨",
                        "val": 1000,
                        "color": "#FB923C"
                    },
                    {
                        "label": "2吨",
                        "val": 2000,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "吨的认识",
            "difficulty": 2,
            "hint": "1吨=1000kg，5吨就是5个1000",
            "variants": [
                {
                    "question": "3吨=多少kg？",
                    "formula": "3×1000=?",
                    "answer": 3000,
                    "hint": "3个1000"
                },
                {
                    "question": "8吨=多少kg？",
                    "formula": "8×1000=?",
                    "answer": 8000,
                    "hint": "8个1000"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "5 吨等于多少千克",
                        "5 千克等于多少吨",
                        "大象有多重"
                    ],
                    "answer": "5 吨等于多少千克",
                    "explain": "题目问 5 吨换算成千克是多少。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "1 吨 = 1000 千克",
                        "1 吨 = 100 千克",
                        "1 千克 = 1000 吨"
                    ],
                    "answer": "1 吨 = 1000 千克",
                    "explain": "吨换千克要用进率 1000。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用 5×1000，5 个 1000 相加",
                        "用 5+1000",
                        "用 1000÷5"
                    ],
                    "answer": "用 5×1000，5 个 1000 相加",
                    "explain": "5 吨 = 5 个 1000 千克 = 5000 千克。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 大象",
                    "text": "一头大象重约 5 吨，非常重，要用大单位吨。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 5 个 1000",
                    "text": "5×1000=5000，所以 5 吨 = 5000 千克。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 几吨换千克",
                    "text": "几吨换千克，就用几乘 1000。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-25"
        },
                {
            "scene": "一辆卡车上装了2吨500千克的煤。司机要算算一共多少千克，好通过收费站。",
            "question": "2吨500千克等于多少千克？",
            "formula": "2000 + 500 = ?",
            "answer": 2500,
            "choices": [
                2500,
                2050,
                250,
                2005
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 2500,
                "parts": [
                    {
                        "label": "2吨",
                        "val": 2000,
                        "color": "#00A896"
                    },
                    {
                        "label": "500kg",
                        "val": 500,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "吨的认识",
            "difficulty": 2,
            "hint": "2吨=2000kg再加500kg",
            "variants": [
                {
                    "question": "3吨200kg=多少kg？",
                    "formula": "3000+200=?",
                    "answer": 3200,
                    "hint": "3000加200"
                },
                {
                    "question": "1吨800kg=多少kg？",
                    "formula": "1000+800=?",
                    "answer": 1800,
                    "hint": "1000加800"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "2 吨 500 千克一共是多少千克",
                        "2 吨等于多少千克",
                        "500 千克等于多少吨"
                    ],
                    "answer": "2 吨 500 千克一共是多少千克",
                    "explain": "题目要求把两段质量合起来换算成千克。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "2 吨和 500 千克两部分，1 吨 = 1000 千克",
                        "直接把 2 和 500 相加",
                        "1 千克 = 1000 吨"
                    ],
                    "answer": "2 吨和 500 千克两部分，1 吨 = 1000 千克",
                    "explain": "2 吨要换成千克，再加上 500 千克。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "先 2×1000=2000，再 2000+500",
                        "2+500=502",
                        "2000-500=1500"
                    ],
                    "answer": "先 2×1000=2000，再 2000+500",
                    "explain": "2 吨 = 2000 千克，加 500 千克，共 2500 千克。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 卡车装煤",
                    "text": "卡车上的煤分成 2 吨和 500 千克两堆。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 先换再加",
                    "text": "2 吨 = 2000 千克，2000+500=2500 千克。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 复名数换算",
                    "text": "几吨几千克换千克，先乘 1000，再加上千克数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-26"
        },
                {
            "scene": "工厂仓库里有3吨钢材，运走了1吨200千克。管理员要算还剩多少千克钢材。",
            "question": "还剩多少千克钢材？",
            "formula": "3000 - 1200 = ?",
            "answer": 1800,
            "choices": [
                1800,
                2800,
                800,
                2200
            ],
            "visualType": "numberBond",
            "visualData": {
                "total": 3000,
                "parts": [
                    {
                        "val": 1200,
                        "color": "#FB923C"
                    },
                    {
                        "val": 1800,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "吨的认识",
            "difficulty": 2,
            "hint": "3吨=3000kg减去1200kg",
            "variants": [
                {
                    "question": "4吨-1吨500kg=多少kg？",
                    "formula": "4000-1500=?",
                    "answer": 2500,
                    "hint": "4000减1500"
                },
                {
                    "question": "2吨-800kg=多少kg？",
                    "formula": "2000-800=?",
                    "answer": 1200,
                    "hint": "2000减800"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "还剩多少千克钢材",
                        "原来有多少千克钢材",
                        "运走了多少千克钢材"
                    ],
                    "answer": "还剩多少千克钢材",
                    "explain": "题目问运走后还剩多少千克钢材。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "原有 3 吨，运走 1 吨 200 千克",
                        "原有 3 千克",
                        "运走 1200 吨"
                    ],
                    "answer": "原有 3 吨，运走 1 吨 200 千克",
                    "explain": "要把两个质量都换成千克再相减。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "先都换成千克：3000-1200",
                        "直接把 3-1 得 2 千克",
                        "用 3 吨 + 1200 千克"
                    ],
                    "answer": "先都换成千克：3000-1200",
                    "explain": "3 吨 = 3000 千克，1 吨 200 千克 = 1200 千克，3000-1200=1800 千克。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 仓库钢材",
                    "text": "仓库原有 3 吨钢材，运走了一部分。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 统一单位",
                    "text": "3 吨 = 3000 千克，1 吨 200 千克 = 1200 千克。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 单位不同先换再算",
                    "text": "单位不一样时，先换成相同的单位再加减。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-27"
        },
                                                                {
                                    "id": "3A-CAO-01",
                                    "scene": "妈妈在厨房称食材，一个鸡蛋很轻，一袋大米很重。",
                                    "question": "一个鸡蛋约重 50( )。",
                                    "formula": "",
                                    "answer": "克",
                                    "choices": [
                                        "克",
                                        "千克",
                                        "吨"
                                    ],
                                    "knowledge": "克和千克",
                                    "difficulty": 2,
                                    "hint": "较轻的物体用“克”做单位",
                                    "variants": [
                                        {
                                            "question": "一个西瓜约重 5( )。",
                                            "formula": "",
                                            "answer": "千克",
                                            "hint": "较重的物体用“千克”"
                                        }
                                    ],
                                    "visualType": "concept",
                                    "visualData": {
                                        "type": "concept",
                                        "conceptKey": "mass"
                                    },
                                    "discoverySteps": [
                                        {
                                            "q": "📖 这道题要我们求什么？",
                                            "choices": [
                                                "填出鸡蛋质量合适的单位",
                                                "算出鸡蛋有多少个",
                                                "算出妈妈买了多少食材"
                                            ],
                                            "answer": "填出鸡蛋质量合适的单位",
                                            "explain": "题目要求给 50 填一个质量单位。"
                                        },
                                        {
                                            "q": "🔢 一个鸡蛋大概有多重？",
                                            "choices": [
                                                "较轻的物体用「克」做单位",
                                                "很重的物体用「吨」",
                                                "中等重量用「千克」"
                                            ],
                                            "answer": "较轻的物体用「克」做单位",
                                            "explain": "一个鸡蛋很轻，用克合适。"
                                        },
                                        {
                                            "q": "🧩 用什么方法解决？",
                                            "choices": [
                                                "比较物体轻重，选合适的质量单位",
                                                "用尺子量鸡蛋",
                                                "数一数鸡蛋有几个"
                                            ],
                                            "answer": "比较物体轻重，选合适的质量单位",
                                            "explain": "一个鸡蛋约 50 克，所以填「克」。"
                                        }
                                    ],
                                    "explainLayers": [
                                        {
                                            "icon": "👀",
                                            "title": "看图 — 厨房称重",
                                            "text": "妈妈在厨房称食材，一个鸡蛋放在小秤上。",
                                            "bg": "var(--teal-soft)",
                                            "color": "var(--teal)"
                                        },
                                        {
                                            "icon": "🧠",
                                            "title": "理解 — 单位选择",
                                            "text": "一个鸡蛋约 50 克，用「克」做单位最合适。",
                                            "bg": "var(--yellow-soft)",
                                            "color": "var(--yellow-700)"
                                        },
                                        {
                                            "icon": "🚀",
                                            "title": "推广 — 质量单位",
                                            "text": "很轻的用克，一袋米用千克，很重的货物用吨。",
                                            "bg": "var(--coral-soft)",
                                            "color": "var(--coral)"
                                        }
                                    ]
                                },
                                                                {
                                    "id": "3A-CAO-02",
                                    "scene": "超市里一袋食盐标着 500，一头牛站在秤上。",
                                    "question": "一袋食盐重 500( )。",
                                    "formula": "",
                                    "answer": "克",
                                    "choices": [
                                        "克",
                                        "千克",
                                        "吨"
                                    ],
                                    "knowledge": "克和千克",
                                    "difficulty": 2,
                                    "hint": "食盐一般用克",
                                    "variants": [
                                        {
                                            "question": "一头牛约重 500( )。",
                                            "formula": "",
                                            "answer": "千克",
                                            "hint": "大型动物用千克"
                                        }
                                    ],
                                    "visualType": "concept",
                                    "visualData": {
                                        "type": "concept",
                                        "conceptKey": "mass"
                                    },
                                    "discoverySteps": [
                                        {
                                            "q": "📖 这道题要我们求什么？",
                                            "choices": [
                                                "填出 500 后面合适的质量单位",
                                                "算出食盐一袋多少钱",
                                                "算出牛有多重"
                                            ],
                                            "answer": "填出 500 后面合适的质量单位",
                                            "explain": "题目要求给 500 填一个质量单位。"
                                        },
                                        {
                                            "q": "🔢 一袋食盐大概有多重？",
                                            "choices": [
                                                "一袋食盐一般用「克」",
                                                "一袋食盐用「吨」",
                                                "一袋食盐用「千米」"
                                            ],
                                            "answer": "一袋食盐一般用「克」",
                                            "explain": "一袋食盐不重，用克合适。"
                                        },
                                        {
                                            "q": "🧩 用什么方法解决？",
                                            "choices": [
                                                "比较物体轻重，选合适的质量单位",
                                                "用秤称一头牛",
                                                "用尺子量长度"
                                            ],
                                            "answer": "比较物体轻重，选合适的质量单位",
                                            "explain": "一袋食盐 500 克，所以填「克」。"
                                        }
                                    ],
                                    "explainLayers": [
                                        {
                                            "icon": "👀",
                                            "title": "看图 — 超市货架",
                                            "text": "货架上食盐袋标着 500，旁边一头牛站在大秤上。",
                                            "bg": "var(--teal-soft)",
                                            "color": "var(--teal)"
                                        },
                                        {
                                            "icon": "🧠",
                                            "title": "理解 — 单位选择",
                                            "text": "一袋食盐 500 克，一只手就能拎起来。",
                                            "bg": "var(--yellow-soft)",
                                            "color": "var(--yellow-700)"
                                        },
                                        {
                                            "icon": "🚀",
                                            "title": "推广 — 别用错单位",
                                            "text": "「千米」是长度单位，不能用来表示轻重。",
                                            "bg": "var(--coral-soft)",
                                            "color": "var(--coral)"
                                        }
                                    ]
                                },
                                                                {
                                    "id": "3A-CAO-03",
                                    "scene": "建筑工地上，一辆大卡车正在装货。",
                                    "question": "一辆卡车的载重量约 5( )。",
                                    "formula": "",
                                    "answer": "吨",
                                    "choices": [
                                        "吨",
                                        "千克",
                                        "克"
                                    ],
                                    "knowledge": "吨的认识",
                                    "difficulty": 2,
                                    "hint": "很重很重的物体用“吨”",
                                    "variants": [
                                        {
                                            "question": "一节火车车厢约能装 60( )货物。",
                                            "formula": "",
                                            "answer": "吨",
                                            "hint": "火车载重用吨"
                                        }
                                    ],
                                    "visualType": "balanceScale",
                                    "visualData": {
                                        "type": "balance"
                                    },
                                    "discoverySteps": [
                                        {
                                            "q": "📖 这道题要我们求什么？",
                                            "choices": [
                                                "填出卡车载重量合适的单位",
                                                "算出卡车装了几箱货",
                                                "算出卡车有多长"
                                            ],
                                            "answer": "填出卡车载重量合适的单位",
                                            "explain": "题目要求给 5 填一个质量单位。"
                                        },
                                        {
                                            "q": "🔢 卡车能装多重的货？",
                                            "choices": [
                                                "很重很重的物体用「吨」",
                                                "很重很重的物体用「克」",
                                                "很重很重的物体用「千米」"
                                            ],
                                            "answer": "很重很重的物体用「吨」",
                                            "explain": "卡车载重量很大，用吨合适。"
                                        },
                                        {
                                            "q": "🧩 用什么方法解决？",
                                            "choices": [
                                                "比较物体轻重，选合适的质量单位",
                                                "数一数卡车有几个轮子",
                                                "量一量卡车的长度"
                                            ],
                                            "answer": "比较物体轻重，选合适的质量单位",
                                            "explain": "卡车载重约 5 吨，所以填「吨」。"
                                        }
                                    ],
                                    "explainLayers": [
                                        {
                                            "icon": "👀",
                                            "title": "看图 — 工地卡车",
                                            "text": "建筑工地上大卡车正在装很重的建筑材料。",
                                            "bg": "var(--teal-soft)",
                                            "color": "var(--teal)"
                                        },
                                        {
                                            "icon": "🧠",
                                            "title": "理解 — 单位选择",
                                            "text": "载重量约 5 吨，5 吨 = 5000 千克，非常重。",
                                            "bg": "var(--yellow-soft)",
                                            "color": "var(--yellow-700)"
                                        },
                                        {
                                            "icon": "🚀",
                                            "title": "推广 — 用吨的场合",
                                            "text": "大象、卡车、轮船这些很重的都用吨作单位。",
                                            "bg": "var(--coral-soft)",
                                            "color": "var(--coral)"
                                        }
                                    ]
                                },
                {
            "id": "3A-CAO-04",
            "scene": "课堂上老师讲曹冲称象：把大象赶上船，看船下沉到画线处；再往船上装石头，装到船下沉到同一位置。每筐石头重 500 千克，一共装了 6 筐。",
            "question": "这头大象重多少千克？",
            "formula": "500 × 6 = ?（千克）",
            "answer": 3000,
            "choices": [
                3000,
                300,
                600,
                3300
            ],
            "knowledge": "吨的认识",
            "difficulty": 2,
            "hint": "石头的总质量就是大象的质量：500×6=3000（千克）",
            "variants": [
                {
                    "question": "每筐石头 400 千克，装了 8 筐，大象重多少千克？",
                    "formula": "400 × 8 = ?（千克）",
                    "answer": 3200,
                    "hint": "400×8=3200"
                }
            ],
            "visualType": "barModel",
            "visualData": {
                "type": "barModel",
                "bars": [
                    {
                        "label": "前3筐",
                        "val": 1500,
                        "color": "#F5B800"
                    },
                    {
                        "label": "后3筐",
                        "val": 1500,
                        "color": "#00A896"
                    }
                ],
                "total": 3000
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "这头大象重多少千克",
                        "每筐石头重多少千克",
                        "一共装了几筐石头"
                    ],
                    "answer": "这头大象重多少千克",
                    "explain": "题目问大象的质量是多少千克。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每筐石头 500 千克，一共 6 筐",
                        "大象重 500 千克",
                        "石头一共重 6 千克"
                    ],
                    "answer": "每筐石头 500 千克，一共 6 筐",
                    "explain": "石头的总质量和大象一样重。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "等量代换：石头总重 = 大象体重，500×6",
                        "500+6=506",
                        "6÷500"
                    ],
                    "answer": "等量代换：石头总重 = 大象体重，500×6",
                    "explain": "石头总重 500×6=3000 千克，就是大象的体重。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 称象的船",
                    "text": "大象上船后船下沉到画线处，换成石头也沉到同一位置。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 等量代换",
                    "text": "石头和大象让船沉得一样深，说明两者一样重。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 换成能称的物体",
                    "text": "称不动的大物体，可以换成能称的小物体，称完再加起来。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-CAO-05",
            "scene": "水果摊上，1 个苹果重 200 克。爷爷说：1 个西瓜的重量等于 4 个苹果。",
            "question": "这个西瓜重多少克？",
            "formula": "4 × 200 = ?（克）",
            "answer": 800,
            "choices": [
                800,
                200,
                400,
                1600
            ],
            "knowledge": "等量代换",
            "difficulty": 2,
            "hint": "4 个 200 克：4×200=800（克）",
            "variants": [
                {
                    "question": "1 本书重 300 克，1 摞书等于 5 本书，这摞书重多少克？",
                    "formula": "5 × 300 = ?（克）",
                    "answer": 1500,
                    "hint": "5×300=1500"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 800,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 400,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 400,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "这个西瓜重多少克",
                        "一个苹果重多少克",
                        "西瓜和苹果一共多少克"
                    ],
                    "answer": "这个西瓜重多少克",
                    "explain": "题目问西瓜的质量是多少克。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "1 个苹果 200 克，1 个西瓜 = 4 个苹果",
                        "西瓜重 200 克",
                        "苹果重 4 克"
                    ],
                    "answer": "1 个苹果 200 克，1 个西瓜 = 4 个苹果",
                    "explain": "西瓜的重量等于 4 个苹果的重量。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "等量代换：4×200=800（克）",
                        "4+200=204（克）",
                        "200÷4=50（克）"
                    ],
                    "answer": "等量代换：4×200=800（克）",
                    "explain": "4 个 200 克，就是 4×200=800 克。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 天平",
                    "text": "天平一边是 1 个西瓜，另一边是 4 个一样的苹果。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 等量代换",
                    "text": "4 个苹果共 4×200=800 克，所以西瓜也重 800 克。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 用小的去量大的",
                    "text": "知道 1 个小物的重量，就能算出几个这样小物的总重量。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "scene": "文具店里一盒铅笔20支，老师买了3盒。小红帮忙算算一共多少支铅笔。",
            "question": "3盒一共多少支铅笔？",
            "formula": "20 × 3 = ?",
            "answer": 60,
            "choices": [
                60,
                23,
                50,
                30
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 20,
                "b": 3,
                "parts": [
                    60
                ],
                "result": 60
            },
            "knowledge": "口算乘法",
            "difficulty": 2,
            "hint": "2×3=6添一个0",
            "variants": [
                {
                    "question": "30×4=?",
                    "formula": "30×4=?",
                    "answer": 120,
                    "hint": "3×4=12添0"
                },
                {
                    "question": "40×2=?",
                    "formula": "40×2=?",
                    "answer": 80,
                    "hint": "4×2=8添0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "3 盒一共多少支铅笔",
                        "每盒多少支铅笔",
                        "老师买了几盒铅笔"
                    ],
                    "answer": "3 盒一共多少支铅笔",
                    "explain": "题目问 3 盒一共有多少支铅笔。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "一盒 20 支，买了 3 盒",
                        "一盒 3 支",
                        "一共 20 盒"
                    ],
                    "answer": "一盒 20 支，买了 3 盒",
                    "explain": "每盒一样多，一共 3 盒。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用 20×3，先算 2×3=6 再补 0",
                        "20+3",
                        "20÷3"
                    ],
                    "answer": "用 20×3，先算 2×3=6 再补 0",
                    "explain": "20×3=60 支。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 条形模型",
                    "text": "3 个盒子每盒 20 支，就是 3 个 20 相加。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 口算技巧",
                    "text": "先算 2×3=6，再在末尾补 1 个 0，得 60。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 整十数乘一位数",
                    "text": "整十数乘一位数，先算十位上的数相乘，再补一个 0。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-40"
        },
                {
            "scene": "学校给每个班发200本练习本，发了4个班。教务处要算一共发了多少本。",
            "question": "一共发了多少本练习本？",
            "formula": "200 × 4 = ?",
            "answer": 800,
            "choices": [
                800,
                204,
                400,
                80
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 200,
                "b": 4,
                "parts": [
                    800
                ],
                "result": 800
            },
            "knowledge": "口算乘法",
            "difficulty": 2,
            "hint": "2×4=8添两个0",
            "variants": [
                {
                    "question": "300×3=?",
                    "formula": "300×3=?",
                    "answer": 900,
                    "hint": "3×3=9添两个0"
                },
                {
                    "question": "400×2=?",
                    "formula": "400×2=?",
                    "answer": 800,
                    "hint": "4×2=8添两个0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "4 个班一共发了多少本练习本",
                        "每班发了多少本",
                        "一共有几个班"
                    ],
                    "answer": "4 个班一共发了多少本练习本",
                    "explain": "题目问一共发了多少本练习本。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每班 200 本，发了 4 个班",
                        "每班 4 本",
                        "一共 200 个班"
                    ],
                    "answer": "每班 200 本，发了 4 个班",
                    "explain": "每班一样多，一共 4 个班。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用 200×4，先算 2×4=8 再补两个 0",
                        "200+4",
                        "200÷4"
                    ],
                    "answer": "用 200×4，先算 2×4=8 再补两个 0",
                    "explain": "200×4=800 本。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 条形模型",
                    "text": "4 个班每班 200 本，就是 4 个 200 相加。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 口算技巧",
                    "text": "先算 2×4=8，再补两个 0，得 800。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 整百数乘一位数",
                    "text": "整百数乘一位数，先算百位上的数相乘，再补两个 0。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-41"
        },
                {
            "scene": "操场上一排站30人，排了5排。体育老师要算一共多少人在做操。",
            "question": "一共有多少人在做操？",
            "formula": "30 × 5 = ?",
            "answer": 150,
            "choices": [
                150,
                35,
                300,
                50
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 30,
                "b": 5,
                "parts": [
                    150
                ],
                "result": 150
            },
            "knowledge": "口算乘法",
            "difficulty": 2,
            "hint": "3×5=15添一个0",
            "variants": [
                {
                    "question": "50×3=?",
                    "formula": "50×3=?",
                    "answer": 150,
                    "hint": "5×3=15添0"
                },
                {
                    "question": "60×4=?",
                    "formula": "60×4=?",
                    "answer": 240,
                    "hint": "6×4=24添0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "一共有多少人在做操",
                        "每排有多少人",
                        "一共排了几排"
                    ],
                    "answer": "一共有多少人在做操",
                    "explain": "题目问做操的总人数。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "一排 30 人，排了 5 排",
                        "一排 5 人",
                        "一共 30 排"
                    ],
                    "answer": "一排 30 人，排了 5 排",
                    "explain": "每排一样多，一共 5 排。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用 30×5，先算 3×5=15 再补 0",
                        "30+5",
                        "30÷5"
                    ],
                    "answer": "用 30×5，先算 3×5=15 再补 0",
                    "explain": "30×5=150 人。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 做操队列",
                    "text": "操场上排了 5 排，每排 30 人，排得整整齐齐。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 口算技巧",
                    "text": "先算 3×5=15，再在末尾补 1 个 0，得 150。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 整十数乘一位数",
                    "text": "整十数乘一位数，先用十位数字相乘，再补 0。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-42"
        },
                {
            "scene": "一本故事书23元，老师买了2本送给同学。小红帮忙算算一共要付多少元。",
            "question": "买2本一共多少元？",
            "formula": "23 × 2 = ?",
            "answer": 46,
            "choices": [
                46,
                25,
                43,
                26
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 23,
                "b": 2,
                "parts": [
                    40,
                    6
                ],
                "result": 46
            },
            "knowledge": "笔算乘法不进位",
            "difficulty": 2,
            "hint": "20×2=40，3×2=6",
            "variants": [
                {
                    "question": "32×3=?",
                    "formula": "32×3=?",
                    "answer": 96,
                    "hint": "30×3加3×3"
                },
                {
                    "question": "21×4=?",
                    "formula": "21×4=?",
                    "answer": 84,
                    "hint": "20×4加1×4"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "买 2 本一共多少元",
                        "一本故事书多少元",
                        "买了几本故事书"
                    ],
                    "answer": "买 2 本一共多少元",
                    "explain": "题目问买 2 本一共要付多少钱。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "一本 23 元，买 2 本",
                        "一本 2 元",
                        "买了 23 本"
                    ],
                    "answer": "一本 23 元，买 2 本",
                    "explain": "每本 23 元，一共买 2 本。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 23×2，个位 3×2、十位 2×2",
                        "23+2=25",
                        "23÷2"
                    ],
                    "answer": "笔算 23×2，个位 3×2、十位 2×2",
                    "explain": "3×2=6，2×2=4，合起来是 46 元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "23×2 竖式里，个位 3×2=6，十位 2×2=4。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 不进位乘法",
                    "text": "每一位都乘 2 都不用进位，直接得 46。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 两位数乘一位数",
                    "text": "从个位开始，每一位依次乘一位数，不进位就直接写。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-43"
        },
                {
            "scene": "学校图书馆每个书架放312本书，共有3个书架。管理员要算一共放多少本书。",
            "question": "3个书架一共放多少本书？",
            "formula": "312 × 3 = ?",
            "answer": 936,
            "choices": [
                936,
                336,
                636,
                926
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 312,
                "b": 3,
                "parts": [
                    900,
                    30,
                    6
                ],
                "result": 936
            },
            "knowledge": "笔算乘法不进位",
            "difficulty": 2,
            "hint": "300×3=900，10×3=30，2×3=6",
            "variants": [
                {
                    "question": "213×3=?",
                    "formula": "213×3=?",
                    "answer": 639,
                    "hint": "分位相乘"
                },
                {
                    "question": "412×2=?",
                    "formula": "412×2=?",
                    "answer": 824,
                    "hint": "分位相乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "3 个书架一共放多少本书",
                        "每个书架放多少本书",
                        "一共有几个书架"
                    ],
                    "answer": "3 个书架一共放多少本书",
                    "explain": "题目问 3 个书架一共放多少本书。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每个书架 312 本，共 3 个",
                        "每个书架 3 本",
                        "共 312 个书架"
                    ],
                    "answer": "每个书架 312 本，共 3 个",
                    "explain": "每个书架一样多，一共 3 个。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 312×3，从个位依次乘 3",
                        "312+3",
                        "312÷3"
                    ],
                    "answer": "笔算 312×3，从个位依次乘 3",
                    "explain": "2×3=6，1×3=3，3×3=9，得 936 本。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "312×3 竖式中，个位 2×3=6，十位 1×3=3，百位 3×3=9。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 三位数乘一位数",
                    "text": "从个位起每一位都乘 3，没有进位，结果是 936。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 竖式顺序",
                    "text": "笔算乘法都从个位算起，一位一位往前乘。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-44"
        },
                {
            "scene": "教室里有21张桌子，每张桌子配4把椅子。总务处要算一共需要多少把椅子。",
            "question": "一共需要多少把椅子？",
            "formula": "21 × 4 = ?",
            "answer": 84,
            "choices": [
                84,
                24,
                81,
                85
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 21,
                "b": 4,
                "parts": [
                    80,
                    4
                ],
                "result": 84
            },
            "knowledge": "笔算乘法不进位",
            "difficulty": 2,
            "hint": "20×4=80，1×4=4",
            "variants": [
                {
                    "question": "22×3=?",
                    "formula": "22×3=?",
                    "answer": 66,
                    "hint": "20×3加2×3"
                },
                {
                    "question": "31×3=?",
                    "formula": "31×3=?",
                    "answer": 93,
                    "hint": "30×3加1×3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "一共需要多少把椅子",
                        "每张桌子配几把椅子",
                        "教室里有几张桌子"
                    ],
                    "answer": "一共需要多少把椅子",
                    "explain": "题目问一共需要多少把椅子。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "21 张桌子，每张配 4 把椅子",
                        "21 把椅子",
                        "每张桌子配 21 把椅子"
                    ],
                    "answer": "21 张桌子，每张配 4 把椅子",
                    "explain": "桌子数乘每张配的椅子数就是总数。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 21×4，个位 1×4、十位 2×4",
                        "21+4=25",
                        "21÷4"
                    ],
                    "answer": "笔算 21×4，个位 1×4、十位 2×4",
                    "explain": "1×4=4，2×4=8，得 84 把。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "21×4 竖式中，个位 1×4=4，十位 2×4=8。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 不进位乘法",
                    "text": "每一位乘 4 都不进位，结果就是 84。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 「每」字提示",
                    "text": "题里出现「每张配 4 把」这样的说法，一般就用乘法。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-45"
        },
                {
            "scene": "超市里一箱酸奶25元，妈妈买了3箱。小明帮忙算算一共要付多少元。",
            "question": "买3箱一共多少元？",
            "formula": "25 × 3 = ?",
            "answer": 75,
            "choices": [
                75,
                65,
                85,
                55
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 25,
                "b": 3,
                "parts": [
                    60,
                    15
                ],
                "result": 75
            },
            "knowledge": "笔算乘法进位",
            "difficulty": 3,
            "hint": "20×3=60，5×3=15，相加",
            "variants": [
                {
                    "question": "35×3=?",
                    "formula": "35×3=?",
                    "answer": 105,
                    "hint": "30×3加5×3进位"
                },
                {
                    "question": "45×2=?",
                    "formula": "45×2=?",
                    "answer": 90,
                    "hint": "40×2加5×2进位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "买 3 箱一共多少元",
                        "一箱酸奶多少元",
                        "买了几箱酸奶"
                    ],
                    "answer": "买 3 箱一共多少元",
                    "explain": "题目问买 3 箱酸奶一共多少钱。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "一箱 25 元，买 3 箱",
                        "一箱 3 元",
                        "买了 25 箱"
                    ],
                    "answer": "一箱 25 元，买 3 箱",
                    "explain": "每箱 25 元，一共 3 箱。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 25×3，个位 5×3=15 向十位进 1",
                        "25+3=28",
                        "只算 2×3=6"
                    ],
                    "answer": "笔算 25×3，个位 5×3=15 向十位进 1",
                    "explain": "5×3=15 写 5 进 1，2×3+1=7，得 75 元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "25×3 竖式中，个位 5×3=15，写 5 向十位进 1。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 进位",
                    "text": "十位算 2×3=6，再加上进位的 1 得 7，结果是 75。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 进位乘法",
                    "text": "个位相乘满十就要向前一位进 1，下一步别忘了加上。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-46"
        },
                {
            "scene": "学校组织春游，每辆大巴坐45人，共3辆。老师要算一共能坐多少人。",
            "question": "3辆大巴一共坐多少人？",
            "formula": "45 × 3 = ?",
            "answer": 135,
            "choices": [
                135,
                125,
                145,
                115
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 45,
                "b": 3,
                "parts": [
                    120,
                    15
                ],
                "result": 135
            },
            "knowledge": "笔算乘法进位",
            "difficulty": 3,
            "hint": "40×3=120，5×3=15",
            "variants": [
                {
                    "question": "55×3=?",
                    "formula": "55×3=?",
                    "answer": 165,
                    "hint": "50×3加5×3"
                },
                {
                    "question": "38×4=?",
                    "formula": "38×4=?",
                    "answer": 152,
                    "hint": "30×4加8×4进位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "3 辆大巴一共坐多少人",
                        "每辆大巴坐多少人",
                        "一共几辆大巴"
                    ],
                    "answer": "3 辆大巴一共坐多少人",
                    "explain": "题目问 3 辆大巴一共能坐多少人。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每辆坐 45 人，共 3 辆",
                        "每辆坐 3 人",
                        "共 45 辆"
                    ],
                    "answer": "每辆坐 45 人，共 3 辆",
                    "explain": "每辆一样多，一共 3 辆。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 45×3，个位 5×3=15 向十位进 1",
                        "45+3=48",
                        "45÷3=15"
                    ],
                    "answer": "笔算 45×3，个位 5×3=15 向十位进 1",
                    "explain": "5×3=15 写 5 进 1，4×3+1=13，得 135 人。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "45×3 竖式中，个位 5×3=15，写 5 向十位进 1。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 连续算下去",
                    "text": "十位 4×3=12，加进位 1 得 13，结果是 135。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 进位往上传",
                    "text": "个位进位给十位，十位满十还要向百位写。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-47"
        },
                {
            "scene": "食堂每天用38千克大米，4天要用多少千克？厨师长要算一算。",
            "question": "4天一共用多少千克大米？",
            "formula": "38 × 4 = ?",
            "answer": 152,
            "choices": [
                152,
                142,
                162,
                150
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 38,
                "b": 4,
                "parts": [
                    120,
                    32
                ],
                "result": 152
            },
            "knowledge": "笔算乘法进位",
            "difficulty": 3,
            "hint": "30×4=120，8×4=32",
            "variants": [
                {
                    "question": "48×3=?",
                    "formula": "48×3=?",
                    "answer": 144,
                    "hint": "40×3加8×3"
                },
                {
                    "question": "56×4=?",
                    "formula": "56×4=?",
                    "answer": 224,
                    "hint": "50×4加6×4进位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "几天一共用多少千克大米",
                        "每天用多少千克大米",
                        "食堂一共有多少千克大米"
                    ],
                    "answer": "几天一共用多少千克大米",
                    "explain": "题目问几天一共用多少千克大米。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每天用 38 千克，用份数相乘",
                        "每天用 4 千克",
                        "一共 38 天"
                    ],
                    "answer": "每天用 38 千克，用份数相乘",
                    "explain": "每天一样多，用每天的量乘份数。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 38×4，个位 8×4=32 向十位进 3",
                        "38+4=42",
                        "38÷4"
                    ],
                    "answer": "笔算 38×4，个位 8×4=32 向十位进 3",
                    "explain": "8×4=32 写 2 进 3，3×4+3=15，得 152 千克。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "38×4 竖式中，个位 8×4=32，写 2 向十位进 3。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 进位加法",
                    "text": "十位 3×4=12，加上进位的 3 得 15。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 结果是 152",
                    "text": "个位相乘满十要向前一位进 1，算完别忘了加。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-48"
        },
                {
            "scene": "学校要买48个足球，每个足球6元。体育老师要算一共要花多少钱。",
            "question": "买48个足球一共要花多少元？",
            "formula": "48 × 6 = ?",
            "answer": 288,
            "choices": [
                288,
                278,
                188,
                298
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 48,
                "b": 6,
                "parts": [
                    240,
                    48
                ],
                "result": 288
            },
            "knowledge": "笔算乘法连续进位",
            "difficulty": 3,
            "hint": "40×6=240，8×6=48",
            "variants": [
                {
                    "question": "58×6=?",
                    "formula": "58×6=?",
                    "answer": 348,
                    "hint": "50×6加8×6"
                },
                {
                    "question": "67×5=?",
                    "formula": "67×5=?",
                    "answer": 335,
                    "hint": "60×5加7×5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "求 48 个 6 一共是多少",
                        "求 48 和 6 的和",
                        "求 48 减去 6 得多少"
                    ],
                    "answer": "求 48 个 6 一共是多少",
                    "explain": "题目用乘法算，求 48 个 6 的总数。"
                },
                {
                    "q": "🔢 题目要用哪种运算？",
                    "choices": [
                        "题目要用 48 乘 6",
                        "题目要用 48 除以 6",
                        "题目要用 48 加 6"
                    ],
                    "answer": "题目要用 48 乘 6",
                    "explain": "48 和 6 相乘，列式 48×6。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 48×6，个位 8×6=48 向十位进 4",
                        "48+6=54",
                        "48-6=42"
                    ],
                    "answer": "笔算 48×6，个位 8×6=48 向十位进 4",
                    "explain": "8×6=48 写 8 进 4，4×6+4=28，得 288。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "48×6 竖式中，个位 8×6=48，写 8 向十位进 4。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 连续进位",
                    "text": "十位 4×6=24，加上进位的 4 得 28。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 结果是 288",
                    "text": "个位和十位都要进位，这种题叫连续进位乘法。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-49"
        },
                {
            "scene": "一个书架有75本书，图书馆有8个这样的书架。管理员要算一共多少本书。",
            "question": "8个书架一共多少本书？",
            "formula": "75 × 8 = ?",
            "answer": 600,
            "choices": [
                600,
                500,
                560,
                610
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 75,
                "b": 8,
                "parts": [
                    560,
                    40
                ],
                "result": 600
            },
            "knowledge": "笔算乘法连续进位",
            "difficulty": 3,
            "hint": "70×8=560，5×8=40",
            "variants": [
                {
                    "question": "85×8=?",
                    "formula": "85×8=?",
                    "answer": 680,
                    "hint": "80×8加5×8"
                },
                {
                    "question": "69×7=?",
                    "formula": "69×7=?",
                    "answer": 483,
                    "hint": "60×7加9×7进位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "8 个书架一共多少本书",
                        "一个书架多少本书",
                        "一共有几个书架"
                    ],
                    "answer": "8 个书架一共多少本书",
                    "explain": "题目问 8 个书架一共放多少本书。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每个书架 75 本，共 8 个",
                        "每个书架 8 本",
                        "共 75 个书架"
                    ],
                    "answer": "每个书架 75 本，共 8 个",
                    "explain": "每个书架一样多，一共 8 个。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 75×8，个位 5×8=40 进 4，十位 7×8+4",
                        "75+8=83",
                        "75÷8"
                    ],
                    "answer": "笔算 75×8，个位 5×8=40 进 4，十位 7×8+4",
                    "explain": "5×8=40 写 0 进 4，7×8+4=60，得 600 本。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "75×8 竖式中，个位 5×8=40，写 0 向十位进 4。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 又一次进位",
                    "text": "十位 7×8=56，加上进位的 4 得 60，写 0 再向百位进 6。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 连续进位",
                    "text": "连续进位时，每一步都要记得加上进上来的数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-50"
        },
                {
            "scene": "工厂每天生产69个零件，一周7天生产多少个？车间主任要算一算。",
            "question": "7天一共生产多少个零件？",
            "formula": "69 × 7 = ?",
            "answer": 483,
            "choices": [
                483,
                463,
                473,
                493
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 69,
                "b": 7,
                "parts": [
                    420,
                    63
                ],
                "result": 483
            },
            "knowledge": "笔算乘法连续进位",
            "difficulty": 3,
            "hint": "60×7=420，9×7=63",
            "variants": [
                {
                    "question": "78×6=?",
                    "formula": "78×6=?",
                    "answer": 468,
                    "hint": "70×6加8×6"
                },
                {
                    "question": "89×5=?",
                    "formula": "89×5=?",
                    "answer": 445,
                    "hint": "80×5加9×5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "7 天一共生产多少个零件",
                        "每天生产多少个零件",
                        "一周有几天"
                    ],
                    "answer": "7 天一共生产多少个零件",
                    "explain": "题目问 7 天一共生产多少个零件。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每天 69 个，算 7 天",
                        "每天 7 个",
                        "共 69 天"
                    ],
                    "answer": "每天 69 个，算 7 天",
                    "explain": "每天一样多，一共 7 天。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 69×7，个位 9×7=63 进 6，十位 6×7+6",
                        "69+7=76",
                        "69÷7"
                    ],
                    "answer": "笔算 69×7，个位 9×7=63 进 6，十位 6×7+6",
                    "explain": "9×7=63 写 3 进 6，6×7+6=48，得 483 个。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "69×7 竖式中，个位 9×7=63，写 3 向十位进 6。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 加进位",
                    "text": "十位 6×7=42，加上进位的 6 得 48。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 别丢进位",
                    "text": "个位进位的 6 别丢，要加在十位的结果上。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-51"
        },
                {
            "scene": "学校购买图书，每套102元，买了4套。财务要算一共花了多少元。",
            "question": "买4套一共多少元？",
            "formula": "102 × 4 = ?",
            "answer": 408,
            "choices": [
                408,
                108,
                404,
                48
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 102,
                "b": 4,
                "parts": [
                    400,
                    0,
                    8
                ],
                "result": 408
            },
            "knowledge": "因数中间有0的乘法",
            "difficulty": 3,
            "hint": "0乘任何数得0",
            "variants": [
                {
                    "question": "204×3=?",
                    "formula": "204×3=?",
                    "answer": 612,
                    "hint": "0位乘得0"
                },
                {
                    "question": "308×2=?",
                    "formula": "308×2=?",
                    "answer": 616,
                    "hint": "0位乘得0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "买 4 套一共多少元",
                        "每套多少元",
                        "买了几套"
                    ],
                    "answer": "买 4 套一共多少元",
                    "explain": "题目问买 4 套一共花多少钱。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每套 102 元，买 4 套",
                        "每套 4 元",
                        "买了 102 套"
                    ],
                    "answer": "每套 102 元，买 4 套",
                    "explain": "每套 102 元，一共 4 套。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 102×4，个位 2×4=8，十位 0×4=0，百位 1×4=4",
                        "102+4=106",
                        "102÷4"
                    ],
                    "answer": "笔算 102×4，个位 2×4=8，十位 0×4=0，百位 1×4=4",
                    "explain": "102×4=408 元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "102×4 竖式中，个位 2×4=8，十位 0×4=0，百位 1×4=4。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 中间有 0",
                    "text": "因数中间的 0 乘 4 得 0，这一位要写 0，不能漏。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 对比检查",
                    "text": "102×4=408，比 100×4=400 多 8，正好对得上。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-52"
        },
                {
            "scene": "农场有3个鸡舍，每个鸡舍养350只鸡。农场主想知道一共有多少只鸡。",
            "question": "一共多少只鸡？",
            "formula": "350 × 3 = ?",
            "answer": 1050,
            "choices": [
                1050,
                950,
                1150,
                1005
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 350,
                "b": 3,
                "parts": [
                    1050
                ],
                "result": 1050
            },
            "knowledge": "因数末尾有0的乘法",
            "difficulty": 3,
            "hint": "先算35×3=105再添0",
            "variants": [
                {
                    "question": "260×3=?",
                    "formula": "260×3=?",
                    "answer": 780,
                    "hint": "26×3=78添0"
                },
                {
                    "question": "480×2=?",
                    "formula": "480×2=?",
                    "answer": 960,
                    "hint": "48×2=96添0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "一共多少只鸡",
                        "每个鸡舍养多少只鸡",
                        "一共有几个鸡舍"
                    ],
                    "answer": "一共多少只鸡",
                    "explain": "题目问一共有多少只鸡。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每份 350，要算 3 份",
                        "每份 3，要算 350 份",
                        "只要算 350 加 3"
                    ],
                    "answer": "每份 350，要算 3 份",
                    "explain": "350 个一份，一共 3 份，用乘法 350×3。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 350×3，先算 35×3=105 再补 0",
                        "350+3=353",
                        "350÷3"
                    ],
                    "answer": "笔算 350×3，先算 35×3=105 再补 0",
                    "explain": "350×3=1050 只。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 末尾有 0",
                    "text": "350 的末尾有一个 0，先不看它，算 35×3=105。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 补回 0",
                    "text": "算完 105 再把末尾的 0 补回来，得 1050。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 末尾有 0 的乘法",
                    "text": "因数末尾有 0，先算前面的数，再补上同样多的 0。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-53"
        },
                {
            "scene": "图书馆有206个书架，每层放5本连环画。管理员要算一共能放多少本连环画。",
            "question": "一共能放多少本连环画？",
            "formula": "206 × 5 = ?",
            "answer": 1030,
            "choices": [
                1030,
                1000,
                1036,
                2030
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 206,
                "b": 5,
                "parts": [
                    1000,
                    0,
                    30
                ],
                "result": 1030
            },
            "knowledge": "因数中间有0的乘法",
            "difficulty": 3,
            "hint": "200×5=1000，0×5=0，6×5=30",
            "variants": [
                {
                    "question": "307×4=?",
                    "formula": "307×4=?",
                    "answer": 1228,
                    "hint": "0位乘得0"
                },
                {
                    "question": "408×3=?",
                    "formula": "408×3=?",
                    "answer": 1224,
                    "hint": "0位乘得0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "一共多少本连环画",
                        "每层放几本连环画",
                        "一共几层书架"
                    ],
                    "answer": "一共多少本连环画",
                    "explain": "题目问一共多少本连环画。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "每份 206，一共 5 份",
                        "每份 5，一共 206 份",
                        "只要算 206 加 5"
                    ],
                    "answer": "每份 206，一共 5 份",
                    "explain": "206 一份，5 份就是 206×5。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "笔算 206×5，个位 6×5=30 进 3，十位 0×5 加 3",
                        "206+5=211",
                        "206÷5"
                    ],
                    "answer": "笔算 206×5，个位 6×5=30 进 3，十位 0×5 加 3",
                    "explain": "6×5=30 写 0 进 3，十位 0×5+3=3，百位 2×5=10，得 1030 本。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 竖式",
                    "text": "206×5 竖式中，个位 6×5=30，写 0 向十位进 3。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 0 加进位",
                    "text": "十位是 0，0×5=0 再加进位的 3，得 3。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 中间的 0 要占位",
                    "text": "百位 2×5=10，结果是 1030，中间的 0 不能丢。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-54"
        },
                {
            "id": "3A-CODE-01",
            "scene": "寄信时要在信封上写邮政编码。",
            "question": "我国邮政编码由( )位数字组成。",
            "formula": "",
            "answer": 6,
            "choices": [
                6,
                7,
                8,
                5
            ],
            "knowledge": "数字编码",
            "difficulty": 2,
            "hint": "邮政编码是 6 位数字",
            "variants": [
                {
                    "question": "居民身份证号码有( )位。",
                    "formula": "",
                    "answer": 18,
                    "choices": [
                        18,
                        15,
                        16,
                        12
                    ],
                    "hint": "身份证是 18 位"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 6,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 3,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 3,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "我国的邮政编码由几位数字组成",
                        "信封上要不要写邮编",
                        "邮政编码用什么笔写"
                    ],
                    "answer": "我国的邮政编码由几位数字组成",
                    "explain": "题目问邮政编码由几位数字组成。"
                },
                {
                    "q": "🔢 邮政编码有什么特点？",
                    "choices": [
                        "由 6 位数字组成，前 2 位表示省市",
                        "由 3 位数字组成",
                        "由 11 位数字组成"
                    ],
                    "answer": "由 6 位数字组成，前 2 位表示省市",
                    "explain": "邮政编码一共 6 位数字。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "了解编码规则，数一数位数",
                        "按自己的想法写一个数",
                        "数信封上一共有几个字"
                    ],
                    "answer": "了解编码规则，数一数位数",
                    "explain": "邮政编码是 6 位数字，所以填 6。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 信封上的邮编",
                    "text": "信封右上角方框里写的就是 6 位数字的邮政编码。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 位数",
                    "text": "一位一位数过去，邮政编码正好是 6 位。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 其他编码",
                    "text": "身份证是 18 位，电话号码是 11 位，每种编码的位数都固定。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                                                                {
                                    "id": "3A-CODE-02",
                                    "scene": "老师的身份证号为 1101012015******1234。",
                                    "question": "身份证号码倒数第 2 位表示( )。",
                                    "formula": "",
                                    "answer": "性别",
                                    "choices": [
                                        "性别",
                                        "年龄",
                                        "出生地"
                                    ],
                                    "knowledge": "数字编码",
                                    "difficulty": 2,
                                    "hint": "第 17 位（倒数第 2 位）是性别码，奇男偶女",
                                    "variants": [
                                        {
                                            "question": "身份证号码第 7～14 位表示( )。",
                                            "formula": "",
                                            "answer": "出生日期",
                                            "choices": [
                                                "出生日期",
                                                "性别",
                                                "地址"
                                            ],
                                            "hint": "7-14 位是出生年月日"
                                        }
                                    ],
                                    "visualType": "concept",
                                    "visualData": {
                                        "type": "concept",
                                        "conceptKey": "idcode"
                                    },
                                    "discoverySteps": [
                                        {
                                            "q": "📖 这道题要我们求什么？",
                                            "choices": [
                                                "身份证号码倒数第 2 位表示什么",
                                                "身份证号码一共有几位",
                                                "身份证号码前 6 位表示什么"
                                            ],
                                            "answer": "身份证号码倒数第 2 位表示什么",
                                            "explain": "题目问倒数第 2 位数字表示什么。"
                                        },
                                        {
                                            "q": "🔢 身份证号码有什么规则？",
                                            "choices": [
                                                "第 17 位（倒数第 2 位）是性别码，奇数男偶数女",
                                                "倒数第 2 位表示出生年月",
                                                "前 6 位表示性别"
                                            ],
                                            "answer": "第 17 位（倒数第 2 位）是性别码，奇数男偶数女",
                                            "explain": "身份证倒数第 2 位表示性别。"
                                        },
                                        {
                                            "q": "🧩 用什么方法解决？",
                                            "choices": [
                                                "解读编码含义，看第 17 位的作用",
                                                "把号码里的数字都加起来",
                                                "数一数号码一共几位"
                                            ],
                                            "answer": "解读编码含义，看第 17 位的作用",
                                            "explain": "倒数第 2 位是性别码，所以填「性别」。"
                                        }
                                    ],
                                    "explainLayers": [
                                        {
                                            "icon": "👀",
                                            "title": "看图 — 身份证号",
                                            "text": "号码 1101012015******1234 里，倒数第 2 位是 3。",
                                            "bg": "var(--teal-soft)",
                                            "color": "var(--teal)"
                                        },
                                        {
                                            "icon": "🧠",
                                            "title": "理解 — 性别码",
                                            "text": "倒数第 2 位是 3，是奇数，表示性别（男）。",
                                            "bg": "var(--yellow-soft)",
                                            "color": "var(--yellow-700)"
                                        },
                                        {
                                            "icon": "🚀",
                                            "title": "推广 — 编码的分段",
                                            "text": "身份证前 6 位是地区，接着 8 位是出生日期，倒数第 2 位是性别。",
                                            "bg": "var(--coral-soft)",
                                            "color": "var(--coral)"
                                        }
                                    ]
                                },
                {
            "id": "3A-CODE-03",
            "scene": "学校给每个学生编学号：入学年份(4位)+班级(2位)+序号(2位)。",
            "question": "2023 年入学、3 班、15 号的同学，学号应编为( )。",
            "formula": "",
            "answer": "20230315",
            "choices": [
                "20230315",
                "2023315",
                "230315"
            ],
            "knowledge": "数字编码",
            "difficulty": 2,
            "hint": "年份4位+班级2位+序号2位 → 2023 03 15",
            "variants": [
                {
                    "question": "2024 年入学、5 班、8 号的同学，学号是( )。",
                    "formula": "",
                    "answer": "20240508",
                    "choices": [
                        "20240508",
                        "2024508",
                        "240508"
                    ],
                    "hint": "2024 05 08"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": "20230315",
                "parts": [
                    {
                        "label": "一部分",
                        "val": 10115158,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 10115157,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "按规则编出这位同学的学号",
                        "学校一共有几个班",
                        "这位同学叫什么名字"
                    ],
                    "answer": "按规则编出这位同学的学号",
                    "explain": "题目要求按规则编出一个学号。"
                },
                {
                    "q": "🔢 学号的编码规则是什么？",
                    "choices": [
                        "入学年份 4 位 + 班级 2 位 + 序号 2 位",
                        "入学年份 2 位 + 班级 2 位",
                        "只写一个序号"
                    ],
                    "answer": "入学年份 4 位 + 班级 2 位 + 序号 2 位",
                    "explain": "学号由年份、班级、序号三段拼成。"
                },
                {
                    "q": "🧩 怎么拼出学号？",
                    "choices": [
                        "2023 年 03 班 15 号写成 20230315",
                        "写成 230315",
                        "写成 2023315"
                    ],
                    "answer": "2023 年 03 班 15 号写成 20230315",
                    "explain": "2023 是 4 位年份，3 班写成 03，15 号写成 15。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 学号结构",
                    "text": "学号分三段：2023｜03｜15，每一段的位数都是固定的。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 补零",
                    "text": "班级 3 要写成两位的 03，序号 15 写成 15，拼起来就是 20230315。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 编码规律",
                    "text": "位数不够时在前面补 0，这样每一段的长度才一致。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-CODE-04",
            "scene": "宾馆房间号“3402”表示 3 楼、4 室、02 号房。",
            "question": "5 楼、1 室、07 号房的房间号是( )。",
            "formula": "",
            "answer": "5107",
            "choices": [
                "5107",
                "50107",
                "507"
            ],
            "knowledge": "数字编码",
            "difficulty": 2,
            "hint": "楼号+室号(2位)+房号(2位) → 5 01 07",
            "variants": [
                {
                    "question": "房间号“2605”表示( )。",
                    "formula": "",
                    "answer": "2楼6室05号",
                    "choices": [
                        "2楼6室05号",
                        "26楼5号",
                        "2楼65号"
                    ],
                    "hint": "2 楼、6 室、05 号"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": "5107",
                "parts": [
                    {
                        "label": "一部分",
                        "val": 2554,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 2553,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "写出 5 楼 1 室 07 号房的房间号",
                        "宾馆一共有几层",
                        "房间 3402 是几楼"
                    ],
                    "answer": "写出 5 楼 1 室 07 号房的房间号",
                    "explain": "题目要求按规则写出房间号。"
                },
                {
                    "q": "🔢 3402 表示什么？",
                    "choices": [
                        "3 楼 4 室 02 号房，楼号 1 位 + 室号 2 位 + 房号 2 位",
                        "34 楼 2 号房",
                        "3 楼 402 号房"
                    ],
                    "answer": "3 楼 4 室 02 号房，楼号 1 位 + 室号 2 位 + 房号 2 位",
                    "explain": "3402 分成 3｜4｜02，表示 3 楼 4 室 02 号房。"
                },
                {
                    "q": "🧩 怎么编出房间号？",
                    "choices": [
                        "5 楼 01 室 07 号写成 5107",
                        "写成 50701",
                        "写成 507"
                    ],
                    "answer": "5 楼 01 室 07 号写成 5107",
                    "explain": "室号 1 补成 01，房号 07 不变，拼成 5107。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 房间号结构",
                    "text": "3402 可以分成 3｜4｜02，表示 3 楼 4 室 02 号房。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 补零",
                    "text": "1 室要写成两位 01，所以 5 楼 1 室 07 号写成 5107。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 位数要固定",
                    "text": "每段位数固定，读的人才能准确地拆开来。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-ANG-01",
            "scene": "美术课上，老师让大家比较三种线。",
            "question": "线段有( )个端点。",
            "formula": "",
            "answer": 2,
            "choices": [
                2,
                1,
                0,
                3
            ],
            "knowledge": "线段直线射线",
            "difficulty": 2,
            "hint": "线段两端都有端点",
            "variants": [
                {
                    "question": "射线有( )个端点。",
                    "formula": "",
                    "answer": 1,
                    "choices": [
                        1,
                        2,
                        0
                    ],
                    "hint": "射线只有一个端点"
                },
                {
                    "question": "直线有( )个端点。",
                    "formula": "",
                    "answer": 0,
                    "choices": [
                        0,
                        1,
                        2
                    ],
                    "hint": "直线没有端点"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 2,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 1,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 1,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "线段有几个端点",
                        "线段有多长",
                        "线段能不能延长"
                    ],
                    "answer": "线段有几个端点",
                    "explain": "题目问线段有几个端点。"
                },
                {
                    "q": "🔢 线段的样子有什么特点？",
                    "choices": [
                        "线段两端各有一个端点",
                        "线段只有一端有端点",
                        "线段一个端点都没有"
                    ],
                    "answer": "线段两端各有一个端点",
                    "explain": "线段两头都封住了。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "看图数端点，两端各一个",
                        "数成 0 个端点",
                        "数成 1 个端点"
                    ],
                    "answer": "看图数端点，两端各一个",
                    "explain": "两端各 1 个端点，一共 2 个。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 线段",
                    "text": "线段是直直的、两头都有端点，长度可以量出来。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数端点",
                    "text": "从左端到右端各算 1 个端点，一共 2 个。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 三种线",
                    "text": "射线只有 1 个端点，直线没有端点，三种线要分清。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                                                                {
                                    "id": "3A-ANG-02",
                                    "scene": "把一条线段的一端无限延长，会怎样？",
                                    "question": "把线段一端无限延长，得到( )。",
                                    "formula": "",
                                    "answer": "射线",
                                    "choices": [
                                        "射线",
                                        "直线",
                                        "线段"
                                    ],
                                    "knowledge": "线段直线射线",
                                    "difficulty": 2,
                                    "hint": "一端无限延长是射线",
                                    "variants": [
                                        {
                                            "question": "把线段两端都无限延长，得到( )。",
                                            "formula": "",
                                            "answer": "直线",
                                            "choices": [
                                                "直线",
                                                "射线",
                                                "线段"
                                            ],
                                            "hint": "两端无限延长是直线"
                                        }
                                    ],
                                    "visualType": "concept",
                                    "visualData": {
                                        "type": "concept",
                                        "conceptKey": "lines"
                                    },
                                    "discoverySteps": [
                                        {
                                            "q": "📖 这道题要我们求什么？",
                                            "choices": [
                                                "把线段一端无限延长得到什么",
                                                "线段有几个端点",
                                                "线段有多长"
                                            ],
                                            "answer": "把线段一端无限延长得到什么",
                                            "explain": "题目问一端无限延长后得到的是什么线。"
                                        },
                                        {
                                            "q": "🔢 一端延长后有什么变化？",
                                            "choices": [
                                                "只剩一个端点，另一端可以无限延长",
                                                "两端都能延长",
                                                "端点变得更多了"
                                            ],
                                            "answer": "只剩一个端点，另一端可以无限延长",
                                            "explain": "延长一端后，这一头就看不到头了。"
                                        },
                                        {
                                            "q": "🧩 用什么方法解决？",
                                            "choices": [
                                                "一端无限延长是射线",
                                                "一端延长是直线",
                                                "一端延长还是线段"
                                            ],
                                            "answer": "一端无限延长是射线",
                                            "explain": "只延长一端得到的是射线。"
                                        }
                                    ],
                                    "explainLayers": [
                                        {
                                            "icon": "👀",
                                            "title": "看图 — 延长",
                                            "text": "线段两端有端点，一端一直延长出去就看不到头。",
                                            "bg": "var(--teal-soft)",
                                            "color": "var(--teal)"
                                        },
                                        {
                                            "icon": "🧠",
                                            "title": "理解 — 射线",
                                            "text": "这样的线只有 1 个端点，叫做射线。",
                                            "bg": "var(--yellow-soft)",
                                            "color": "var(--yellow-700)"
                                        },
                                        {
                                            "icon": "🚀",
                                            "title": "推广 — 直线和线段",
                                            "text": "两端都无限延长的是直线，两端都有限的是线段。",
                                            "bg": "var(--coral-soft)",
                                            "color": "var(--coral)"
                                        }
                                    ]
                                },
                {
            "id": "3A-ANG-03",
            "scene": "三角板上有三种角，最大的那个角是直角。",
            "question": "三角板上的直角是( )度。",
            "formula": "",
            "answer": 90,
            "choices": [
                90,
                180,
                45,
                60
            ],
            "knowledge": "锐角直角钝角",
            "difficulty": 2,
            "hint": "直角 = 90°",
            "variants": [
                {
                    "question": "一个锐角一定( )90 度。",
                    "formula": "",
                    "answer": "小于",
                    "choices": [
                        "小于",
                        "等于",
                        "大于"
                    ],
                    "hint": "锐角小于 90°"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 90,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 45,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 45,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "三角板上的直角是多少度",
                        "三角板有几条边",
                        "锐角是多少度"
                    ],
                    "answer": "三角板上的直角是多少度",
                    "explain": "题目问三角板上直角是多少度。"
                },
                {
                    "q": "🔢 直角有什么特点？",
                    "choices": [
                        "直角是 90°，可以用三角板上的直角比一比",
                        "直角是 180°",
                        "直角是 45°"
                    ],
                    "answer": "直角是 90°，可以用三角板上的直角比一比",
                    "explain": "直角就是 90°。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "记住直角 = 90°",
                        "记住直角 = 100°",
                        "记住直角 = 360°"
                    ],
                    "answer": "记住直角 = 90°",
                    "explain": "直角的两条边张开得正正好好，是 90 度。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 三角板",
                    "text": "三角板上最大的那个角就是直角，方方正正的。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 90 度",
                    "text": "直角的两条边张开的程度正好是 90°。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 三类角",
                    "text": "比直角小的叫锐角，比直角大的叫钝角。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                                                                {
                                    "id": "3A-ANG-04",
                                    "scene": "老师用活动角演示：把角慢慢张开。",
                                    "question": "比直角大、比平角小的角，是( )角。",
                                    "formula": "",
                                    "answer": "钝",
                                    "choices": [
                                        "钝",
                                        "锐",
                                        "平"
                                    ],
                                    "knowledge": "锐角直角钝角",
                                    "difficulty": 2,
                                    "hint": "大于直角小于平角的是钝角",
                                    "variants": [
                                        {
                                            "question": "比直角小的是( )角。",
                                            "formula": "",
                                            "answer": "锐",
                                            "choices": [
                                                "锐",
                                                "钝",
                                                "平"
                                            ],
                                            "hint": "小于直角是锐角"
                                        }
                                    ],
                                    "visualType": "concept",
                                    "visualData": {
                                        "type": "concept",
                                        "conceptKey": "angles"
                                    },
                                    "discoverySteps": [
                                        {
                                            "q": "📖 这道题要我们求什么？",
                                            "choices": [
                                                "判断这个角是什么角",
                                                "这个角有多少度",
                                                "角用什么符号表示"
                                            ],
                                            "answer": "判断这个角是什么角",
                                            "explain": "题目要我们判断这个角属于哪一类。"
                                        },
                                        {
                                            "q": "🔢 钝角的大小范围是怎样的？",
                                            "choices": [
                                                "钝角比直角大、比平角小",
                                                "钝角比直角小",
                                                "钝角和平角一样大"
                                            ],
                                            "answer": "钝角比直角大、比平角小",
                                            "explain": "比直角大的角就是钝角。"
                                        },
                                        {
                                            "q": "🧩 用什么方法判断？",
                                            "choices": [
                                                "和直角比一比，比直角大的就是钝角",
                                                "和 0° 比一比",
                                                "数角的边数"
                                            ],
                                            "answer": "和直角比一比，比直角大的就是钝角",
                                            "explain": "比直角大的角是钝角，所以填「钝」。"
                                        }
                                    ],
                                    "explainLayers": [
                                        {
                                            "icon": "👀",
                                            "title": "看图 — 活动角",
                                            "text": "老师把活动角慢慢张开，张得比直角还大。",
                                            "bg": "var(--teal-soft)",
                                            "color": "var(--teal)"
                                        },
                                        {
                                            "icon": "🧠",
                                            "title": "理解 — 三类角",
                                            "text": "比直角小的是锐角，正好 90° 的是直角，比直角大的是钝角。",
                                            "bg": "var(--yellow-soft)",
                                            "color": "var(--yellow-700)"
                                        },
                                        {
                                            "icon": "🚀",
                                            "title": "推广 — 用直角去比",
                                            "text": "判断角的种类，最方便的是拿三角板上的直角去比一比。",
                                            "bg": "var(--coral-soft)",
                                            "color": "var(--coral)"
                                        }
                                    ]
                                },
                                                                {
                                    "id": "3A-ANG-05",
                                    "scene": "钟面上，时针和分针会组成不同的角。",
                                    "question": "钟面 3 时整，时针与分针成( )角。",
                                    "formula": "",
                                    "answer": "直",
                                    "choices": [
                                        "直",
                                        "锐",
                                        "平"
                                    ],
                                    "knowledge": "锐角直角钝角",
                                    "difficulty": 2,
                                    "hint": "3 时两针夹角 90°，是直角",
                                    "variants": [
                                        {
                                            "question": "钟面 6 时整，时针与分针成( )角。",
                                            "formula": "",
                                            "answer": "平",
                                            "choices": [
                                                "平",
                                                "直",
                                                "锐"
                                            ],
                                            "hint": "6 时两针成一条直线，是平角"
                                        }
                                    ],
                                    "visualType": "concept",
                                    "visualData": {
                                        "type": "concept",
                                        "conceptKey": "angles"
                                    },
                                    "discoverySteps": [
                                        {
                                            "q": "📖 这道题要我们求什么？",
                                            "choices": [
                                                "3 时整时针与分针成什么角",
                                                "时针指几",
                                                "分针指几"
                                            ],
                                            "answer": "3 时整时针与分针成什么角",
                                            "explain": "题目问 3 时整时针与分针组成了什么角。"
                                        },
                                        {
                                            "q": "🔢 3 时整两针各指哪里？",
                                            "choices": [
                                                "时针指 3、分针指 12",
                                                "时针指 12、分针指 3",
                                                "两针重合在一起"
                                            ],
                                            "answer": "时针指 3、分针指 12",
                                            "explain": "3 时整，时针指着 3，分针指着 12。"
                                        },
                                        {
                                            "q": "🧩 用什么方法解决？",
                                            "choices": [
                                                "一大格 30°，两针隔 3 大格正好 90°",
                                                "两针只隔 1 大格",
                                                "两针隔 6 大格"
                                            ],
                                            "answer": "一大格 30°，两针隔 3 大格正好 90°",
                                            "explain": "3×30°=90°，是直角，所以填「直」。"
                                        }
                                    ],
                                    "explainLayers": [
                                        {
                                            "icon": "👀",
                                            "title": "看图 — 钟面",
                                            "text": "钟面被 12 个数字分成 12 大格，每一大格是 30°。",
                                            "bg": "var(--teal-soft)",
                                            "color": "var(--teal)"
                                        },
                                        {
                                            "icon": "🧠",
                                            "title": "理解 — 数大格",
                                            "text": "3 时整，时针和分针之间正好隔 3 大格，3×30°=90°。",
                                            "bg": "var(--yellow-soft)",
                                            "color": "var(--yellow-700)"
                                        },
                                        {
                                            "icon": "🚀",
                                            "title": "推广 — 90° 是直角",
                                            "text": "90° 就是直角，所以 3 时整两针组成直角。",
                                            "bg": "var(--coral-soft)",
                                            "color": "var(--coral)"
                                        }
                                    ]
                                },
                {
            "id": "3A-ANG-06",
            "scene": "数学课上老师用活动角演示：把角的一条边绕顶点旋转，转到半圈时停下，老师说这时的角叫平角。",
            "question": "平角是多少度？",
            "formula": "360 ÷ 2 = ?（平角）",
            "answer": 180,
            "choices": [
                90,
                180,
                360,
                45
            ],
            "knowledge": "平角周角",
            "difficulty": 2,
            "hint": "平角是周角的一半：360÷2=180（度）；也等于 2 个直角",
            "variants": [
                {
                    "question": "2 个直角合起来是多少度？",
                    "formula": "90 × 2 = ?（度）",
                    "answer": 180,
                    "hint": "90×2=180，正好是一个平角"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 180,
                "parts": [
                    {
                        "label": "直角",
                        "val": 90,
                        "color": "#F5B800"
                    },
                    {
                        "label": "直角",
                        "val": 90,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "平角是多少度",
                        "平角有几条边",
                        "周角是多少度"
                    ],
                    "answer": "平角是多少度",
                    "explain": "题目问平角是多少度。"
                },
                {
                    "q": "🔢 平角和周角有什么关系？",
                    "choices": [
                        "平角是周角的一半：360÷2=180 度",
                        "平角是 90 度",
                        "平角是 360 度"
                    ],
                    "answer": "平角是周角的一半：360÷2=180 度",
                    "explain": "平角正好是周角的一半。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用 360÷2=180（度）",
                        "用 360÷4=90（度）",
                        "用 360×2"
                    ],
                    "answer": "用 360÷2=180（度）",
                    "explain": "平角 = 180 度。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 活动角",
                    "text": "活动角的一条边绕顶点转到半圈时停下，两边正好成一条直线。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 半个整圈",
                    "text": "半圈是整圈 360° 的一半，360÷2=180°。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 平角和直角",
                    "text": "平角等于 2 个直角，180° = 90°×2。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-ANG-07",
            "scene": "老师问：一个周角里能装下几个直角？",
            "question": "周角等于( )个直角。",
            "formula": "360 ÷ 90 = ?",
            "answer": 4,
            "choices": [
                4,
                2,
                3
            ],
            "knowledge": "平角周角",
            "difficulty": 2,
            "hint": "周角 360°，直角 90°，360÷90=4",
            "variants": [
                {
                    "question": "平角等于( )个直角。",
                    "formula": "180 ÷ 90 = ?",
                    "answer": 2,
                    "hint": "180÷90=2"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 4,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 2,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 2,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "周角等于几个直角",
                        "周角是多少度",
                        "平角等于几个直角"
                    ],
                    "answer": "周角等于几个直角",
                    "explain": "题目问一个周角里能装下几个直角。"
                },
                {
                    "q": "🔢 周角和直角各是多少度？",
                    "choices": [
                        "周角 360°，直角 90°",
                        "周角 180°，直角 90°",
                        "周角 360°，直角 180°"
                    ],
                    "answer": "周角 360°，直角 90°",
                    "explain": "周角是转满一整圈的角度。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用 360÷90=4（个）",
                        "用 360÷2=180（个）",
                        "用 360-90=270（个）"
                    ],
                    "answer": "用 360÷90=4（个）",
                    "explain": "周角里面正好能装 4 个直角。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 活动角转圈",
                    "text": "活动角的一条边转满一整圈回到原位，这时就是周角。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 用除法",
                    "text": "一整圈 360°，一个直角 90°，里面能装 360÷90=4 个。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 周角的关系",
                    "text": "1 个周角 = 2 个平角 = 4 个直角。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                                {
                    "scene": "妈妈把一个圆形大蛋糕平均分给全家人，每人都分到同样大的一份。小明吃了其中 1 块，他想知道自己吃了这块蛋糕的几分之几。",
                    "question": "小明吃了这块蛋糕的几分之一？（填分母）",
                    "formula": "1 / ?",
                    "answer": 8,
                    "choices": [
                        8,
                        1,
                        7,
                        4
                    ],
                    "visualType": "geometry",
                    "visualData": {
                        "shape": "fractionCircle",
                        "params": {
                            "numerator": 1,
                            "denominator": 8,
                            "color": "#00A896"
                        }
                    },
                    "knowledge": "分数初步认识",
                    "difficulty": 1,
                    "hint": "先数一数，图上的蛋糕一共被平均分成了几份",
                    "variants": [
                        {
                            "question": "蛋糕分6份每份是几分之一（填分母）？",
                            "formula": "1/?",
                            "answer": 6,
                            "hint": "分6份就是1/6"
                        },
                        {
                            "question": "蛋糕分4份每份是几分之一（填分母）？",
                            "formula": "1/?",
                            "answer": 4,
                            "hint": "分4份就是1/4"
                        }
                    ],
                    "discoverySteps": [
                        {
                            "q": "📖 这道题要我们求什么？",
                            "choices": [
                                "小明吃的 1 块是整块蛋糕的几分之一",
                                "蛋糕一共分给了几个人",
                                "蛋糕有多大"
                            ],
                            "answer": "小明吃的 1 块是整块蛋糕的几分之一",
                            "explain": "题目要我们填出分母，看 1 块占整块蛋糕的几分之一。"
                        },
                        {
                            "q": "🔢 整块蛋糕被平均分成了几份？",
                            "choices": [
                                "整块蛋糕被平均分成了 8 份",
                                "整块蛋糕只分成 1 份",
                                "整块蛋糕没有平均分"
                            ],
                            "answer": "整块蛋糕被平均分成了 8 份",
                            "explain": "每个人分到的都一样大，说明是平均分。"
                        },
                        {
                            "q": "🧩 分母应该怎么看？",
                            "choices": [
                                "看平均分成几份，分母就是几",
                                "用吃的块数当分母",
                                "把份数当分子"
                            ],
                            "answer": "看平均分成几份，分母就是几",
                            "explain": "平均分成 8 份，1 份就是 1/8，所以分母是 8。"
                        }
                    ],
                    "explainLayers": [
                        {
                            "icon": "👀",
                            "title": "看图 — 圆形模型",
                            "text": "一个圆形蛋糕被平均分成 8 个一样大的扇形。",
                            "bg": "var(--teal-soft)",
                            "color": "var(--teal)"
                        },
                        {
                            "icon": "🧠",
                            "title": "理解 — 分数含义",
                            "text": "取其中 1 份就是 1/8，8 是分母，表示平均分成的份数。",
                            "bg": "var(--yellow-soft)",
                            "color": "var(--yellow-700)"
                        },
                        {
                            "icon": "🚀",
                            "title": "推广 — 分数条",
                            "text": "把一条线段平均分成 8 份，取 1 份同样表示 1/8。",
                            "bg": "var(--coral-soft)",
                            "color": "var(--coral)"
                        }
                    ],
                    "id": "3A-TIME-70"
                },
                                {
                    "scene": "小红把一根彩带平均分成同样长的几段，取其中 1 段来折花。她想知道这 1 段是整根彩带的几分之几。",
                    "question": "1段是整根彩带的几分之一？（填分母）",
                    "formula": "1 / ?",
                    "answer": 5,
                    "choices": [
                        5,
                        1,
                        4,
                        10
                    ],
                    "visualType": "fractionStrip",
                    "visualData": {
                        "num": 1,
                        "total": 5,
                        "color": "#00A896"
                    },
                    "knowledge": "分数初步认识",
                    "difficulty": 1,
                    "hint": "先数一数，图上的彩带被平均分成了几段",
                    "variants": [
                        {
                            "question": "分10段每段是几分之一（填分母）？",
                            "formula": "1/?",
                            "answer": 10,
                            "hint": "分10份就是1/10"
                        },
                        {
                            "question": "分3段每段是几分之一（填分母）？",
                            "formula": "1/?",
                            "answer": 3,
                            "hint": "分3份就是1/3"
                        }
                    ],
                    "discoverySteps": [
                        {
                            "q": "📖 这道题要我们求什么？",
                            "choices": [
                                "1 段是整根彩带的几分之一",
                                "彩带有多长",
                                "彩带是什么颜色"
                            ],
                            "answer": "1 段是整根彩带的几分之一",
                            "explain": "题目要填分母，看 1 段占整根彩带的几分之一。"
                        },
                        {
                            "q": "🔢 整根彩带被平均分成了几段？",
                            "choices": [
                                "整根彩带被平均分成了 5 段",
                                "整根彩带只分成 1 段",
                                "整根彩带没有平均分"
                            ],
                            "answer": "整根彩带被平均分成了 5 段",
                            "explain": "每段一样长，说明是平均分。"
                        },
                        {
                            "q": "🧩 分母应该怎么看？",
                            "choices": [
                                "看平均分成几段，分母就是几",
                                "把 1 段当分母",
                                "用段数当分子"
                            ],
                            "answer": "看平均分成几段，分母就是几",
                            "explain": "平均分成 5 段，1 段就是 1/5，所以分母是 5。"
                        }
                    ],
                    "explainLayers": [
                        {
                            "icon": "👀",
                            "title": "看图 — 彩带分段",
                            "text": "整根彩带被平均分成 5 段，每一段都一样长。",
                            "bg": "var(--teal-soft)",
                            "color": "var(--teal)"
                        },
                        {
                            "icon": "🧠",
                            "title": "理解 — 分数含义",
                            "text": "其中 1 段就是整根的 1/5，5 是分母。",
                            "bg": "var(--yellow-soft)",
                            "color": "var(--yellow-700)"
                        },
                        {
                            "icon": "🚀",
                            "title": "推广 — 分数条",
                            "text": "把一条线段平均分成 5 份，取 1 份也写作 1/5。",
                            "bg": "var(--coral-soft)",
                            "color": "var(--coral)"
                        }
                    ],
                    "id": "3A-TIME-71"
                },
                                {
                    "scene": "小亮把一张正方形纸对折，再对折一次，把其中 1 份涂上颜色。他想知道涂色部分是整张纸的几分之几。",
                    "question": "涂色部分是整张纸的几分之一？（填分母）",
                    "formula": "1 / ?",
                    "answer": 4,
                    "choices": [
                        4,
                        1,
                        3,
                        8
                    ],
                    "visualType": "fractionStrip",
                    "visualData": {
                        "num": 1,
                        "total": 4,
                        "color": "#00A896"
                    },
                    "knowledge": "分数初步认识",
                    "difficulty": 1,
                    "hint": "想一想，对折两次把纸平均分成了几份",
                    "variants": [
                        {
                            "question": "折成2份每份是几分之一（填分母）？",
                            "formula": "1/?",
                            "answer": 2,
                            "hint": "分2份就是1/2"
                        },
                        {
                            "question": "折成8份每份是几分之一（填分母）？",
                            "formula": "1/?",
                            "answer": 8,
                            "hint": "分8份就是1/8"
                        }
                    ],
                    "discoverySteps": [
                        {
                            "q": "📖 这道题要我们求什么？",
                            "choices": [
                                "涂色部分是整张纸的几分之一",
                                "一共对折了几次",
                                "这张纸有多大"
                            ],
                            "answer": "涂色部分是整张纸的几分之一",
                            "explain": "题目要填分母，看涂色的 1 份占整张纸的几分之一。"
                        },
                        {
                            "q": "🔢 对折两次后分成了几份？",
                            "choices": [
                                "对折两次，平均分成 4 份",
                                "对折两次只分成 2 份",
                                "只折了一次"
                            ],
                            "answer": "对折两次，平均分成 4 份",
                            "explain": "每对折一次份数翻一倍：1→2→4。"
                        },
                        {
                            "q": "🧩 分母应该怎么看？",
                            "choices": [
                                "看平均分成几份，分母就是几",
                                "用折的次数当分母",
                                "用涂色的份数当分母"
                            ],
                            "answer": "看平均分成几份，分母就是几",
                            "explain": "平均分成 4 份，涂 1 份就是 1/4，所以分母是 4。"
                        }
                    ],
                    "explainLayers": [
                        {
                            "icon": "👀",
                            "title": "看图 — 正方形折叠",
                            "text": "正方形纸对折一次变 2 份，再对折一次变成 4 份。",
                            "bg": "var(--teal-soft)",
                            "color": "var(--teal)"
                        },
                        {
                            "icon": "🧠",
                            "title": "理解 — 分数含义",
                            "text": "涂色的 1 份就是整张纸的 1/4，4 是分母。",
                            "bg": "var(--yellow-soft)",
                            "color": "var(--yellow-700)"
                        },
                        {
                            "icon": "🚀",
                            "title": "推广 — 对折翻倍",
                            "text": "每对折一次份数翻一倍：1→2→4→8，分母也跟着变大。",
                            "bg": "var(--coral-soft)",
                            "color": "var(--coral)"
                        }
                    ],
                    "id": "3A-TIME-72"
                },
                                {
                    "scene": "同样大的两块蛋糕，小红那块平均分成的份数少，小亮那块平均分成的份数多。老师问：1/3 和 1/5 哪个分数更小？",
                    "question": "1/3和1/5哪个分数更小？（填较小分数的分母）",
                    "formula": "1/3 > 1/?",
                    "answer": 5,
                    "choices": [
                        5,
                        3,
                        8,
                        2
                    ],
                    "visualType": "fractionStrip",
                    "visualData": {
                        "num": 1,
                        "total": 5,
                        "color": "#F5B800"
                    },
                    "knowledge": "分数比较大小",
                    "difficulty": 2,
                    "hint": "分子相同，分母越大，分数反而越小",
                    "variants": [
                        {
                            "question": "1/4和1/6哪个分数更小（填较小分数的分母）？",
                            "formula": "1/4>1/?",
                            "answer": 6,
                            "hint": "分子相同，分母大的反而小"
                        },
                        {
                            "question": "1/3和1/7哪个分数更小（填较小分数的分母）？",
                            "formula": "1/3>1/?",
                            "answer": 7,
                            "hint": "分子相同，分母大的反而小"
                        }
                    ],
                    "discoverySteps": [
                        {
                            "q": "📖 这道题要我们求什么？",
                            "choices": [
                                "1/3 和 1/5 哪个分数更小",
                                "1/3 和 1/5 哪个分数更大",
                                "1/3 是多少"
                            ],
                            "answer": "1/3 和 1/5 哪个分数更小",
                            "explain": "题目问 1/3 和 1/5 里哪个更小，要填较小分数的分母。"
                        },
                        {
                            "q": "🔢 这两个分数有什么共同点？",
                            "choices": [
                                "分子都是 1，分母不同",
                                "分母相同，都是 5",
                                "分子和分母都相同"
                            ],
                            "answer": "分子都是 1，分母不同",
                            "explain": "分子都是 1，比大小只要看分母。"
                        },
                        {
                            "q": "🧩 用什么方法比较？",
                            "choices": [
                                "分子相同，分母大的分数反而小",
                                "分母大的分数就大",
                                "分母小的分数就小"
                            ],
                            "answer": "分子相同，分母大的分数反而小",
                            "explain": "5 比 3 大，所以 1/5 更小，填 5。"
                        }
                    ],
                    "explainLayers": [
                        {
                            "icon": "👀",
                            "title": "看图 — 两块蛋糕",
                            "text": "1/3 是把整体平均分成 3 份取 1 份，1/5 是分成 5 份取 1 份。",
                            "bg": "var(--teal-soft)",
                            "color": "var(--teal)"
                        },
                        {
                            "icon": "🧠",
                            "title": "理解 — 份数越多每份越小",
                            "text": "分的份数越多，每一份就越小，所以 1/5 比 1/3 小。",
                            "bg": "var(--yellow-soft)",
                            "color": "var(--yellow-700)"
                        },
                        {
                            "icon": "🚀",
                            "title": "推广 — 分子相同比大小",
                            "text": "分子都是 1 时，分母越大，这个分数越小。",
                            "bg": "var(--coral-soft)",
                            "color": "var(--coral)"
                        }
                    ],
                    "id": "3A-TIME-73"
                },
                {
            "scene": "两个同样大的比萨，小红吃了2/5，小明吃了3/5。老师问谁吃得更多。",
            "question": "2/5和3/5谁大？（填共同分母）",
            "formula": "3/5 > 2/?",
            "answer": 5,
            "choices": [
                5,
                2,
                3,
                10
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 3,
                "total": 5,
                "color": "#00A896"
            },
            "knowledge": "分数比较大小",
            "difficulty": 2,
            "hint": "分母相同分子大的大",
            "variants": [
                {
                    "question": "3/7和4/7谁大(填共同分母)？",
                    "formula": "4/7>3/?",
                    "answer": 7,
                    "hint": "分子大的大"
                },
                {
                    "question": "5/8和3/8谁大(填共同分母)？",
                    "formula": "5/8>3/?",
                    "answer": 8,
                    "hint": "分子大的大"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "2/5 和 3/5 哪个分数更大",
                        "2/5 和 3/5 哪个分数更小",
                        "2/5 是多少"
                    ],
                    "answer": "2/5 和 3/5 哪个分数更大",
                    "explain": "题目问 2/5 和 3/5 哪个更大。"
                },
                {
                    "q": "🔢 这两个分数有什么共同点？",
                    "choices": [
                        "分母相同，都是 5",
                        "分子相同，都是 5",
                        "分母不一样"
                    ],
                    "answer": "分母相同，都是 5",
                    "explain": "两块比萨都平均分成 5 份，分数线下的数都是 5。"
                },
                {
                    "q": "🧩 用什么方法比较？",
                    "choices": [
                        "分母相同，分子大的分数就大",
                        "分母相同，分子大反而小",
                        "只要看分母谁大"
                    ],
                    "answer": "分母相同，分子大的分数就大",
                    "explain": "3 比 2 大，所以 3/5 比 2/5 大。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 两块比萨",
                    "text": "两个一样大的比萨都平均分成 5 份，每份同样大。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 比份数",
                    "text": "小红吃 2 份，小明吃 3 份，3 份比 2 份多。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 分母相同比大小",
                    "text": "分母相同时，分子越大，这个分数就越大。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-74"
        },
                {
            "scene": "小芳有1/4块巧克力，小亮有1/6块同样大的巧克力。老师问谁的巧克力更多。",
            "question": "1/4和1/6谁大？（填较大的分母）",
            "formula": "1/4 > 1/?",
            "answer": 6,
            "choices": [
                6,
                4,
                2,
                10
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 1,
                "total": 4,
                "color": "#00A896"
            },
            "knowledge": "分数比较大小",
            "difficulty": 2,
            "hint": "分子相同分母小的反而大",
            "variants": [
                {
                    "question": "1/5和1/8谁大(填较大分母)？",
                    "formula": "1/5>1/?",
                    "answer": 8,
                    "hint": "分母小的大"
                },
                {
                    "question": "1/3和1/9谁大(填较大分母)？",
                    "formula": "1/3>1/?",
                    "answer": 9,
                    "hint": "分母小的大"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "1/4 和 1/6 哪个分数更大",
                        "1/4 和 1/6 哪个分数更小",
                        "1/4 是多少"
                    ],
                    "answer": "1/4 和 1/6 哪个分数更大",
                    "explain": "题目问 1/4 和 1/6 哪个更大。"
                },
                {
                    "q": "🔢 这两个分数有什么共同点？",
                    "choices": [
                        "分子都是 1，分母分别是 4 和 6",
                        "分母都是 4",
                        "分子都是 4"
                    ],
                    "answer": "分子都是 1，分母分别是 4 和 6",
                    "explain": "分子都是 1，比大小只要看分母。"
                },
                {
                    "q": "🧩 用什么方法比较？",
                    "choices": [
                        "分子相同，分母小的分数大",
                        "分子相同，分母大的分数大",
                        "分子大的分数大"
                    ],
                    "answer": "分子相同，分母小的分数大",
                    "explain": "4 比 6 小，所以 1/4 更大。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 两块巧克力",
                    "text": "1/4 是分成 4 份取 1 份，1/6 是分成 6 份取 1 份。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 份数少每份大",
                    "text": "分的份数少，每份就大，所以 1/4 比 1/6 大。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 分子相同比大小",
                    "text": "分子都是 1 时，分母越大，这个分数越小。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-75"
        },
                {
            "scene": "小红第一次吃了1/5块蛋糕，第二次吃了2/5块。她想知道两次一共吃了这块蛋糕的几分之几。",
            "question": "两次一共吃了这块蛋糕的几分之几？（填分子）",
            "formula": "1/5 + 2/5 = ?/5",
            "answer": 3,
            "choices": [
                3,
                2,
                5,
                1
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 3,
                "total": 5,
                "color": "#00A896"
            },
            "knowledge": "同分母分数加减",
            "difficulty": 2,
            "hint": "分母不变分子相加",
            "variants": [
                {
                    "question": "2/7+3/7=?/7(填分子)",
                    "formula": "2/7+3/7=?",
                    "answer": 5,
                    "hint": "分子相加"
                },
                {
                    "question": "1/8+4/8=?/8(填分子)",
                    "formula": "1/8+4/8=?",
                    "answer": 5,
                    "hint": "分子相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "两次一共吃了这块蛋糕的几分之几",
                        "第二次比第一次多吃多少",
                        "这块蛋糕一共多大"
                    ],
                    "answer": "两次一共吃了这块蛋糕的几分之几",
                    "explain": "题目要填分子，算两次一共吃了的份数。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "两次吃的分数分母都是 5，分子是 1 和 2",
                        "两次吃的分母不一样",
                        "两次吃的分子都是 5"
                    ],
                    "answer": "两次吃的分数分母都是 5，分子是 1 和 2",
                    "explain": "1/5 和 2/5 的分母相同，都是 5。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "分母不变，分子相加：1+2=3",
                        "分母相加：5+5=10",
                        "分子分母都相加"
                    ],
                    "answer": "分母不变，分子相加：1+2=3",
                    "explain": "1/5+2/5=3/5，分子是 3。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 蛋糕分份",
                    "text": "分母 5 表示蛋糕被平均分成 5 份，每份一样大。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 分子相加",
                    "text": "1/5 和 2/5 合起来，分母不变，分子 1+2=3。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 同分母分数相加",
                    "text": "同分母分数相加，只加分子，分母不动。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-76"
        },
                {
            "scene": "一卷彩带长5/7米，用去了1/7米。小芳想知道还剩几分之几米彩带。",
            "question": "还剩几分之几米彩带？（填分子）",
            "formula": "5/7 - 1/7 = ?/7",
            "answer": 4,
            "choices": [
                4,
                6,
                3,
                1
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 4,
                "total": 7,
                "color": "#00A896"
            },
            "knowledge": "同分母分数加减",
            "difficulty": 2,
            "hint": "分母不变分子相减",
            "variants": [
                {
                    "question": "6/8-2/8=?/8(填分子)",
                    "formula": "6/8-2/8=?",
                    "answer": 4,
                    "hint": "分子相减"
                },
                {
                    "question": "7/9-3/9=?/9(填分子)",
                    "formula": "7/9-3/9=?",
                    "answer": 4,
                    "hint": "分子相减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "还剩几分之几米彩带",
                        "一共用去几分之几米彩带",
                        "彩带原来有多长"
                    ],
                    "answer": "还剩几分之几米彩带",
                    "explain": "题目要填分子，算用去后还剩下的份数。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "两个分数分母都是 7，分子是 5 和 1",
                        "两个分数分母不一样",
                        "两个分数分子都是 7"
                    ],
                    "answer": "两个分数分母都是 7，分子是 5 和 1",
                    "explain": "5/7 和 1/7 的分母相同，都是 7。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "分母不变，分子相减：5-1=4",
                        "分母相减：7-7=0",
                        "分子分母都相减"
                    ],
                    "answer": "分母不变，分子相减：5-1=4",
                    "explain": "5/7-1/7=4/7，分子是 4。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 彩带分份",
                    "text": "彩带被平均分成 7 等份，5/7 表示取其中 5 份。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 分子相减",
                    "text": "用去 1/7 就是去掉 1 份，还剩 5-1=4 份。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 同分母分数相减",
                    "text": "同分母分数相减，只减分子，分母不变。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-77"
        },
                {
            "scene": "妈妈把一个大比萨切成9块，小红吃了2块，小明吃了3块。他们一共吃了这个比萨的几分之几。",
            "question": "他们一共吃了比萨的几分之几？（填分子）",
            "formula": "2/9 + 3/9 = ?/9",
            "answer": 5,
            "choices": [
                5,
                6,
                9,
                1
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 5,
                "total": 9,
                "color": "#00A896"
            },
            "knowledge": "同分母分数加减",
            "difficulty": 2,
            "hint": "分母不变分子相加",
            "variants": [
                {
                    "question": "3/10+4/10=?/10(填分子)",
                    "formula": "3/10+4/10=?",
                    "answer": 7,
                    "hint": "分子相加"
                },
                {
                    "question": "2/6+3/6=?/6(填分子)",
                    "formula": "2/6+3/6=?",
                    "answer": 5,
                    "hint": "分子相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "他们一共吃了这个比萨的几分之几",
                        "还剩几分之几比萨",
                        "比萨一共切成几块"
                    ],
                    "answer": "他们一共吃了这个比萨的几分之几",
                    "explain": "题目要填分子，算两人一共吃了的份数。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "比萨平均分成 9 块，小红吃 2 块、小明吃 3 块",
                        "比萨只分成 2 块",
                        "两人各吃了 9 块"
                    ],
                    "answer": "比萨平均分成 9 块，小红吃 2 块、小明吃 3 块",
                    "explain": "分母是 9，两人吃的块数分别是 2 和 3。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "分母不变，分子相加：2+3=5",
                        "分母相加：9+9=18",
                        "用 3-2=1"
                    ],
                    "answer": "分母不变，分子相加：2+3=5",
                    "explain": "2/9+3/9=5/9，分子是 5。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 比萨切块",
                    "text": "比萨平均切成 9 块，每 1 块就是它的 1/9。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数块数",
                    "text": "小红吃 2 块、小明吃 3 块，合起来 2+3=5 块。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 同分母分数相加",
                    "text": "同分母分数相加，分母不变，分子相加。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-78"
        },
                {
            "scene": "妈妈买了24个草莓，小红吃了其中的1/3。小红吃了多少个草莓？",
            "question": "小红吃了多少个草莓？",
            "formula": "24 ÷ 3 × 1 = ?",
            "answer": 8,
            "choices": [
                8,
                6,
                12,
                3
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 24,
                "parts": [
                    {
                        "label": "1/3",
                        "val": 8,
                        "color": "#00A896"
                    },
                    {
                        "label": "1/3",
                        "val": 8,
                        "color": "#F5B800"
                    },
                    {
                        "label": "1/3",
                        "val": 8,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "分数简单应用",
            "difficulty": 2,
            "hint": "先算24÷3=8",
            "variants": [
                {
                    "question": "24个草莓吃1/4吃了几个？",
                    "formula": "24÷4=?",
                    "answer": 6,
                    "hint": "24除4"
                },
                {
                    "question": "24个草莓吃1/6吃了几个？",
                    "formula": "24÷6=?",
                    "answer": 4,
                    "hint": "24除6"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "小红吃了多少个草莓",
                        "妈妈买了多少个草莓",
                        "草莓每个多少元"
                    ],
                    "answer": "小红吃了多少个草莓",
                    "explain": "题目问小红吃了多少个草莓。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "一共有 24 个草莓，小红吃了其中的 1/3",
                        "一共有 3 个草莓",
                        "小红吃了 24 个草莓"
                    ],
                    "answer": "一共有 24 个草莓，小红吃了其中的 1/3",
                    "explain": "把 24 个草莓平均分成 3 份，取 1 份。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "先 24÷3=8，再取 1 份",
                        "先 24×3=72",
                        "用 24+3=27"
                    ],
                    "answer": "先 24÷3=8，再取 1 份",
                    "explain": "24÷3=8，1 份就是 8 个。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 草莓分份",
                    "text": "把 24 个草莓平均分成 3 份，每份一样多。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 求 1 份",
                    "text": "24÷3=8，每份是 8 个草莓。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 求几分之一",
                    "text": "求一个数的几分之一，就用这个数除以平均分的份数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-79"
        },
                {
            "scene": "班里有30个同学，其中2/5是女生。老师要算班里有几个女生。",
            "question": "班里有几个女生？",
            "formula": "30 ÷ 5 × 2 = ?",
            "answer": 12,
            "choices": [
                12,
                10,
                15,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 30,
                "parts": [
                    {
                        "label": "1/5",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "1/5",
                        "val": 6,
                        "color": "#F5B800"
                    },
                    {
                        "label": "2/5女生",
                        "val": 12,
                        "color": "#FB923C"
                    },
                    {
                        "label": "2/5",
                        "val": 6,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "分数简单应用",
            "difficulty": 2,
            "hint": "先算30÷5=6，再算6×2=12",
            "variants": [
                {
                    "question": "30人3/5是男生几人？",
                    "formula": "30÷5×3=?",
                    "answer": 18,
                    "hint": "先除再乘"
                },
                {
                    "question": "40人2/5是女生几人？",
                    "formula": "40÷5×2=?",
                    "answer": 16,
                    "hint": "先除再乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "班里有几个女生",
                        "班里有几个男生",
                        "班里一共有几个人"
                    ],
                    "answer": "班里有几个女生",
                    "explain": "题目问班里有几个女生。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "一共 30 人，女生占其中的 2/5",
                        "女生占 5/2",
                        "班里一共 5 人"
                    ],
                    "answer": "一共 30 人，女生占其中的 2/5",
                    "explain": "把 30 个同学平均分成 5 份，女生占 2 份。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "先 30÷5=6，再 6×2=12",
                        "先 30×5=150",
                        "用 30÷2=15"
                    ],
                    "answer": "先 30÷5=6，再 6×2=12",
                    "explain": "每份 6 人，2 份就是 12 人。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 全班分份",
                    "text": "把 30 个同学平均分成 5 份，每份 6 人。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 求 2 份",
                    "text": "女生占其中 2 份，6×2=12 人。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 求几分之几",
                    "text": "求一个数的几分之几，先除以份数求 1 份，再乘份数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-80"
        },
                {
            "scene": "一根彩带长20米，小红用了其中的3/4。她用了多少米彩带？",
            "question": "小红用了多少米彩带？",
            "formula": "20 ÷ 4 × 3 = ?",
            "answer": 15,
            "choices": [
                15,
                12,
                5,
                10
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 20,
                "parts": [
                    {
                        "label": "3/4用了",
                        "val": 15,
                        "color": "#00A896"
                    },
                    {
                        "label": "1/4剩",
                        "val": 5,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "分数简单应用",
            "difficulty": 2,
            "hint": "先算20÷4=5，再算5×3=15",
            "variants": [
                {
                    "question": "20米用2/5用了几米？",
                    "formula": "20÷5×2=?",
                    "answer": 8,
                    "hint": "先除再乘"
                },
                {
                    "question": "24米用5/6用了几米？",
                    "formula": "24÷6×5=?",
                    "answer": 20,
                    "hint": "先除再乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "小红用了多少米彩带",
                        "彩带一共有多少米",
                        "还剩多少米彩带"
                    ],
                    "answer": "小红用了多少米彩带",
                    "explain": "题目问小红用了多少米彩带。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "彩带长 20 米，用了其中的 3/4",
                        "用了其中的 4/3",
                        "彩带长 4 米"
                    ],
                    "answer": "彩带长 20 米，用了其中的 3/4",
                    "explain": "把 20 米平均分成 4 份，用了 3 份。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "先 20÷4=5，再 5×3=15",
                        "先 20×4=80",
                        "用 20÷3"
                    ],
                    "answer": "先 20÷4=5，再 5×3=15",
                    "explain": "每份 5 米，3 份就是 15 米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 彩带分份",
                    "text": "把 20 米长的彩带平均分成 4 份，每份 5 米。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 求 3 份",
                    "text": "用了其中 3 份，5×3=15 米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 求几分之几",
                    "text": "求一个数的几分之几，先求 1 份，再乘份数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3A-TIME-81"
        },
                {
            "id": "3A-REV-01",
            "scene": "一个长方形花坛，长 5 厘米、宽 3 厘米。",
            "question": "这个长方形的周长是多少厘米？",
            "formula": "(5 + 3) × 2 = ?",
            "answer": 16,
            "choices": [
                16,
                15,
                8,
                30
            ],
            "knowledge": "复习与关联",
            "difficulty": 2,
            "hint": "长方形周长 =（长+宽）×2 =（5+3）×2 = 16 厘米",
            "variants": [
                {
                    "question": "正方形边长 4 厘米，周长是多少厘米？",
                    "formula": "4 × 4 = ?",
                    "answer": 16,
                    "hint": "正方形周长=边长×4"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 16,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 8,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 8,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "这个长方形的周长是多少厘米",
                        "这个长方形的面积是多少",
                        "长比宽长多少厘米"
                    ],
                    "answer": "这个长方形的周长是多少厘米",
                    "explain": "题目问长方形的周长。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "长 5 厘米，宽 3 厘米",
                        "长 5 厘米，宽 5 厘米",
                        "长 3 厘米，宽 3 厘米"
                    ],
                    "answer": "长 5 厘米，宽 3 厘米",
                    "explain": "花坛是长方形，长和宽都告诉了我们。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "周长 =（长+宽）×2，先 5+3=8 再乘 2",
                        "用 5×3=15",
                        "用 5+3+5=13"
                    ],
                    "answer": "周长 =（长+宽）×2，先 5+3=8 再乘 2",
                    "explain": "（5+3）×2=16 厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 长方形花坛",
                    "text": "长方形有 2 条长边和 2 条宽边，围一圈就是周长。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 长加宽再乘 2",
                    "text": "长 + 宽 = 5+3=8 厘米，里面有 2 组，8×2=16 厘米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 求周长的方法",
                    "text": "长方形周长 =（长+宽）×2，也可以把 4 条边一条条加起来。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
                {
            "id": "3A-REV-02",
            "scene": "一本书一共 48 页，第一天看了 20 页。",
            "question": "还剩多少页没看？",
            "formula": "48 - 20 = ?",
            "answer": 28,
            "choices": [
                28,
                20,
                68,
                18
            ],
            "knowledge": "复习与关联",
            "difficulty": 2,
            "hint": "总数减去已看：48-20=28",
            "variants": [
                {
                    "question": "一盒糖 36 颗，吃了 9 颗，还剩几颗？",
                    "formula": "36 - 9 = ?",
                    "answer": 27,
                    "hint": "36-9=27"
                }
            ],
            "visualType": "numberBond",
            "visualData": {
                "type": "numberBond",
                "total": 28,
                "parts": [
                    {
                        "label": "一部分",
                        "val": 14,
                        "color": "#F5B800"
                    },
                    {
                        "label": "另一部分",
                        "val": 14,
                        "color": "#00A896"
                    }
                ]
            },
            "discoverySteps": [
                {
                    "q": "📖 这道题要我们求什么？",
                    "choices": [
                        "还剩多少页没看",
                        "已经看了多少页",
                        "这本书一共多少页"
                    ],
                    "answer": "还剩多少页没看",
                    "explain": "题目问剩下的页数。"
                },
                {
                    "q": "🔢 题目给了哪些关键信息？",
                    "choices": [
                        "一共 48 页，第一天看了 20 页",
                        "一共 20 页",
                        "第一天看了 48 页"
                    ],
                    "answer": "一共 48 页，第一天看了 20 页",
                    "explain": "总页数和看过的页数都告诉了我们。"
                },
                {
                    "q": "🧩 用什么方法解决？",
                    "choices": [
                        "用总数减已看：48-20",
                        "用 48+20",
                        "用 48÷20"
                    ],
                    "answer": "用总数减已看：48-20",
                    "explain": "48-20=28 页。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 一本书",
                    "text": "整本书一共 48 页，第一天看掉了 20 页。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 用减法",
                    "text": "剩下的就是从 48 里去掉 20，48-20=28 页。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 求剩下多少",
                    "text": "求剩下多少，就用总数减去已经用掉或看掉的部分。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        }
    ]
};
