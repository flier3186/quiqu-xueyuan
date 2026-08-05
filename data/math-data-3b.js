window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["3b"] = {
    "title": "三年级下册·除法与两位数乘法",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "units": [
        {
            "name": "位置与方向",
            "level": "current",
            "children": [
                {
                    "name": "八个方向",
                    "level": "current"
                },
                {
                    "name": "行走路线",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "除数是一位数的除法",
            "level": "locked",
            "children": [
                {
                    "name": "口算除法",
                    "level": "locked"
                },
                {
                    "name": "笔算除法",
                    "level": "locked"
                },
                {
                    "name": "估算",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "复式统计表",
            "level": "locked",
            "children": [
                {
                    "name": "复式统计表",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "两位数乘两位数",
            "level": "locked",
            "children": [
                {
                    "name": "口算乘法",
                    "level": "locked"
                },
                {
                    "name": "笔算乘法",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "面积",
            "level": "locked",
            "children": [
                {
                    "name": "面积单位",
                    "level": "locked"
                },
                {
                    "name": "面积计算",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "年、月、日",
            "level": "locked",
            "children": [
                {
                    "name": "认识年月日",
                    "level": "locked"
                },
                {
                    "name": "24时计时法",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "小数的初步认识",
            "level": "locked",
            "children": [
                {
                    "name": "认识小数",
                    "level": "locked"
                },
                {
                    "name": "小数加减",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "数学广角",
            "level": "locked",
            "children": [
                {
                    "name": "搭配",
                    "level": "locked"
                }
            ]
        }
    ],
    "problems": [
        {
            "scene": "早晨小红去上学，太阳从东边升起。她面朝太阳站立，老师问她身后是什么方向。",
            "question": "面朝东方，身后是什么方向？（东1南2西3北4）",
            "formula": "相对方向 = ?",
            "answer": 3,
            "choices": [
                3,
                4,
                2,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "front": "东",
                    "back": "西"
                }
            },
            "knowledge": "认识东南西北",
            "difficulty": 1,
            "hint": "东和西是相对的",
            "variants": [
                {
                    "question": "面朝南身后是什么方向(东1南2西3北4)？",
                    "formula": "相对方向=?",
                    "answer": 4,
                    "hint": "南北相对"
                },
                {
                    "question": "面朝北身后是什么方向(东1南2西3北4)？",
                    "formula": "相对方向=?",
                    "answer": 2,
                    "hint": "南北相对"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "面朝东方时身后的方向",
                        "面朝东方时左手的方向",
                        "地图上方的方向",
                        "东和南之间的方向"
                    ],
                    "answer": "面朝东方时身后的方向",
                    "explain": "题目说小红「面朝太阳（东方）站立」，问「身后是什么方向」，是求面东时背对的方向"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "面朝东方，求身后方向",
                        "面朝西方，求左手方向",
                        "地图上方是北，求上方方向",
                        "东和南之间叫什么"
                    ],
                    "answer": "面朝东方，求身后方向",
                    "explain": "关键信息有两个：一是面朝东方，二是要求身后的方向"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "相对方向：东的对面是西",
                        "上北下南左西右东",
                        "东和南之间是东南",
                        "南北相对"
                    ],
                    "answer": "相对方向：东的对面是西",
                    "explain": "东和西是相对的，面朝东，身后就是西，所以填3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "方向标图里东和西相对，小红面朝东，箭头指向东，身后箭头指向相反的西",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "四个基本方向两两相对：东↔西、南↔北。面朝一个方向，身后就是它的相对方向",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "记住方向相对关系：东对西、南对北。面朝某方向，身后就是相对方向，左手是顺时针下一个方向",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-001"
        },
        {
            "scene": "地图上方的方向是北。小亮看地图，知道北京在地图上方，他好奇北京在什么方向。",
            "question": "地图上\"上\"是什么方向？（东1南2西3北4）",
            "formula": "上方方向 = ?",
            "answer": 4,
            "choices": [
                4,
                2,
                3,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "up": "北"
                }
            },
            "knowledge": "认识东南西北",
            "difficulty": 1,
            "hint": "上北下南左西右东",
            "variants": [
                {
                    "question": "地图下方是什么方向(东1南2西3北4)？",
                    "formula": "下方方向=?",
                    "answer": 2,
                    "hint": "上北下南"
                },
                {
                    "question": "地图左方是什么方向(东1南2西3北4)？",
                    "formula": "左方方向=?",
                    "answer": 3,
                    "hint": "左西右东"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "东和南之间的方向",
                        "东和北之间的方向",
                        "西和北之间的方向",
                        "面朝东方身后的方向"
                    ],
                    "answer": "东和南之间的方向",
                    "explain": "题目说老师告诉小亮「东和北之间叫东北」，问他「东和南之间叫什么」，求的是东和南之间的方向"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "东和北之间叫东北，求东和南之间",
                        "面朝东方求身后",
                        "地图上方是北",
                        "四个基本方向"
                    ],
                    "answer": "东和北之间叫东北，求东和南之间",
                    "explain": "已知东和北之间是东北，要求东和南之间的方向名"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "两个方向之间取名字组合",
                        "上北下南",
                        "相对方向",
                        "数格子"
                    ],
                    "answer": "两个方向之间取名字组合",
                    "explain": "东和南之间就是把「东」和「南」组合，叫东南，所以填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "方向标图上东和南之间的区域标着「东南」，是两个基本方向之间的斜方向",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "八个方向=四个基本方向+四个斜方向。斜方向由相邻两个基本方向组合命名：东南、东北、西南、西北",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "两个相邻基本方向之间的方向，按顺时针顺序组合命名。关键：东和南→东南，西和北→西北",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-002"
        },
        {
            "scene": "放学时太阳从西方落下。小红背着书包回家，她面朝西方走。老师问她左手边是什么方向。",
            "question": "面朝西方，左手边是什么方向？（东1南2西3北4）",
            "formula": "左手方向 = ?",
            "answer": 2,
            "choices": [
                2,
                4,
                1,
                3
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "front": "西",
                    "left": "南"
                }
            },
            "knowledge": "认识东南西北",
            "difficulty": 1,
            "hint": "面西左南右北",
            "variants": [
                {
                    "question": "面朝东左手是什么方向(东1南2西3北4)？",
                    "formula": "左手方向=?",
                    "answer": 4,
                    "hint": "面东左北右南"
                },
                {
                    "question": "面朝南左手是什么方向(东1南2西3北4)？",
                    "formula": "左手方向=?",
                    "answer": 3,
                    "hint": "面南左东右西"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一共走了几格",
                        "向东走了几格",
                        "向北走了几格",
                        "家到学校的方向"
                    ],
                    "answer": "一共走了几格",
                    "explain": "题目说小亮「先向东走3格，再向北走2格」，问「一共走了几格」，求的是两段路程的总格数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "东3格和北2格",
                        "东3格和南2格",
                        "西4格和南3格",
                        "东5格和北4格"
                    ],
                    "answer": "东3格和北2格",
                    "explain": "两段路程分别是向东3格、向北2格"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "加法",
                        "减法",
                        "乘法",
                        "除法"
                    ],
                    "answer": "加法",
                    "explain": "求两段路程一共几格，把3和2合起来用加法：3+2=5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从0出发，先跳到3（东3格），再跳到5（北2格），0到5就是总格数5",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "两段路程相加：3+2=5。数轴上每跳一次就累加一段距离",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "描述行走路线时，把每段路程相加就是总路程。关键：分段距离相加=总距离",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-003"
        },
        {
            "scene": "小亮站在操场中心，老师告诉他东和北之间的方向叫东北。他好奇东和南之间叫什么方向。",
            "question": "东和南之间是什么方向？（东南1东北2西南3西北4）",
            "formula": "东和南之间 = ?",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                4
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "between": "东南"
                }
            },
            "knowledge": "认识八个方向",
            "difficulty": 2,
            "hint": "东和南之间叫东南",
            "variants": [
                {
                    "question": "西和北之间是什么方向(东南1东北2西南3西北4)？",
                    "formula": "西和北之间=?",
                    "answer": 4,
                    "hint": "西北"
                },
                {
                    "question": "西和南之间是什么方向(东南1东北2西南3西北4)？",
                    "formula": "西和南之间=?",
                    "answer": 3,
                    "hint": "西南"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每盒装几颗草莓",
                        "一共多少颗草莓",
                        "需要几个盒子",
                        "每盒比每盒多几颗"
                    ],
                    "answer": "每盒装几颗草莓",
                    "explain": "题目说妈妈买了60颗草莓平均装进3个盒子，问「每盒装几颗」，是求每份有多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "总数60，平均分3份",
                        "每份20，共3份",
                        "总数60，每份20",
                        "只有总数60"
                    ],
                    "answer": "总数60，平均分3份",
                    "explain": "草莓总数是60颗，平均装进3个盒子，即平均分成3份"
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
                    "explain": "把总数平均分成几份求每份是多少用除法：60÷3=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里有3条等长的条形，每条代表20颗，合起来总数是60颗",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "把60看作6个十，6个十÷3=2个十，就是20。算式：60÷3=20",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "整十数除以一位数，先用十位上的数除，再在结果末尾添0。关键：总数÷份数=每份数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-004"
        },
        {
            "scene": "小红看学校地图，图书馆在教学楼的东北方向。她好奇教学楼的什么方向是西北。",
            "question": "教学楼的西北方向是哪个？（东南1东北2西南3西北4）",
            "formula": "西北 = ?",
            "answer": 4,
            "choices": [
                4,
                2,
                3,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "direction": "西北"
                }
            },
            "knowledge": "认识八个方向",
            "difficulty": 2,
            "hint": "西和北之间叫西北",
            "variants": [
                {
                    "question": "东南方向是哪个(东南1东北2西南3西北4)？",
                    "formula": "东南=?",
                    "answer": 1,
                    "hint": "东和南之间"
                },
                {
                    "question": "东北方向是哪个(东南1东北2西南3西北4)？",
                    "formula": "东北=?",
                    "answer": 2,
                    "hint": "东和北之间"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每个盒子装几颗草莓",
                        "一共多少颗草莓",
                        "需要几个盒子",
                        "每盒相差几颗"
                    ],
                    "answer": "每个盒子装几颗草莓",
                    "explain": "题目说96颗草莓平均装进4个盒子，问「每个盒子装几颗」，求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "总数96，平均分4份",
                        "总数96，每份24",
                        "每份24，共4份",
                        "只有总数96"
                    ],
                    "answer": "总数96，平均分4份",
                    "explain": "草莓总数96颗，平均装进4个盒子，即平均分成4份"
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
                    "explain": "把总数平均分成几份求每份用除法：96÷4=24"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里有4条等长条形，每条代表24颗，合起来总数96颗",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "两位数除以一位数：80÷4=20，16÷4=4，合起来20+4=24。算式：96÷4=24",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "笔算除法从高位除起，除到哪位商在哪位，余数要比除数小。关键：分位相除再合并",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-005"
        },
        {
            "scene": "小明家在学校的西南方向。老师让同学们在图上标出小明家的位置，并说出西南是哪两个方向之间。",
            "question": "西南是哪两个方向之间？（东南1东北2西南3西北4）",
            "formula": "西南 = ?",
            "answer": 3,
            "choices": [
                3,
                4,
                1,
                2
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "direction": "西南"
                }
            },
            "knowledge": "认识八个方向",
            "difficulty": 2,
            "hint": "西和南之间叫西南",
            "variants": [
                {
                    "question": "西北是哪两个方向之间(东南1东北2西南3西北4)？",
                    "formula": "西北=?",
                    "answer": 4,
                    "hint": "西和北之间"
                },
                {
                    "question": "东北是哪两个方向之间(东南1东北2西南3西北4)？",
                    "formula": "东北=?",
                    "answer": 2,
                    "hint": "东和北之间"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每个书架放多少本",
                        "一共多少本书",
                        "需要几个书架",
                        "每个书架相差几本"
                    ],
                    "answer": "每个书架放多少本",
                    "explain": "题目说369本新书平均放在3个书架，问「每个书架放多少本」，求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "总数369，平均分3份",
                        "总数369，每份123",
                        "每份123，共3份",
                        "只有总数369"
                    ],
                    "answer": "总数369，平均分3份",
                    "explain": "新书总数369本，平均放在3个书架，即平均分成3份"
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
                    "explain": "把总数平均分成几份求每份用除法：369÷3=123"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里有3条等长条形，每条代表123本，合起来总数369本",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "三位数除以一位数分位算：300÷3=100，60÷3=20，9÷3=3，合起来123。算式：369÷3=123",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "三位数除一位数从高位除起，高位不够除看前两位。关键：分位相除，商对齐数位",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-006"
        },
        {
            "scene": "小亮从家出发去学校，先向东走3格，再向北走2格。老师让他算一共走了几格。",
            "question": "小亮一共走了几格？",
            "formula": "3 + 2 = ?",
            "answer": 5,
            "choices": [
                5,
                6,
                1,
                4
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 5,
                "points": [
                    {
                        "pos": 3,
                        "label": "东3格",
                        "color": "#00A896"
                    },
                    {
                        "pos": 5,
                        "label": "北2格",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    5
                ]
            },
            "knowledge": "描述行走路线",
            "difficulty": 2,
            "hint": "把两段路程相加",
            "variants": [
                {
                    "question": "东4格南3格共几格？",
                    "formula": "4+3=?",
                    "answer": 7,
                    "hint": "两段相加"
                },
                {
                    "question": "东5格北4格共几格？",
                    "formula": "5+4=?",
                    "answer": 9,
                    "hint": "两段相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "用乘法验算除法的结果",
                        "计算96÷4等于多少",
                        "计算24×4等于多少",
                        "计算96-4等于多少"
                    ],
                    "answer": "用乘法验算除法的结果",
                    "explain": "题目说小红算出96÷4=24，老师让她用乘法验算，是验证除法算得对不对"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "商24，除数4，求被除数",
                        "被除数96，除数4",
                        "商24，被除数96",
                        "只有商24"
                    ],
                    "answer": "商24，除数4，求被除数",
                    "explain": "验算时已知商是24、除数是4，用乘法算24×4看是否等于被除数96"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法",
                        "除法",
                        "加法",
                        "减法"
                    ],
                    "answer": "乘法",
                    "explain": "除法验算用乘法：商×除数=被除数，24×4=96"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积图里长24、宽4的长方形被分成80和16两部分，合起来就是96",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "除法验算公式：商×除数=被除数。24×4=96，和原被除数相同，说明算对了",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "除法验算用乘法：商×除数(+余数)=被除数。关键：乘除是逆运算，可互相验算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-007"
        },
        {
            "scene": "小红从家去公园，先向西走4格，再向南走3格。她要算一共走了几格路。",
            "question": "小红一共走了几格？",
            "formula": "4 + 3 = ?",
            "answer": 7,
            "choices": [
                7,
                1,
                12,
                5
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 7,
                "points": [
                    {
                        "pos": 4,
                        "label": "西4格",
                        "color": "#00A896"
                    },
                    {
                        "pos": 7,
                        "label": "南3格",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    7
                ]
            },
            "knowledge": "描述行走路线",
            "difficulty": 2,
            "hint": "两段路程相加",
            "variants": [
                {
                    "question": "西5格北2格共几格？",
                    "formula": "5+2=?",
                    "answer": 7,
                    "hint": "两段相加"
                },
                {
                    "question": "西6格南3格共几格？",
                    "formula": "6+3=?",
                    "answer": 9,
                    "hint": "两段相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每个书架放多少本",
                        "一共多少本书",
                        "需要几个书架",
                        "商中间有没有0"
                    ],
                    "answer": "每个书架放多少本",
                    "explain": "题目说612本图书平均放在6个书架，问「每个书架放多少本」，求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "总数612，平均分6份",
                        "总数612，每份102",
                        "每份102，共6份",
                        "只有总数612"
                    ],
                    "answer": "总数612，平均分6份",
                    "explain": "图书总数612本，平均放在6个书架，即平均分成6份"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法（十位不够商1商0）",
                        "乘法",
                        "加法",
                        "减法"
                    ],
                    "answer": "除法（十位不够商1商0）",
                    "explain": "612÷6，百位6÷6=1，十位1不够商6就商0占位，个位12÷6=2，得102"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里有6条等长条形，每条代表102本，合起来总数612本，注意102中间有0",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "612÷6：百位6÷6=1，十位1不够除以6商0占位，个位12÷6=2，商是102",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "除法中哪一位不够商1就商0占位，0不能漏掉。关键：商的0占位保证数位对齐",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-008"
        },
        {
            "scene": "小芳从学校去图书馆，先向东走5格，再向北走4格。她要算一共走了几格。",
            "question": "小芳一共走了几格？",
            "formula": "5 + 4 = ?",
            "answer": 9,
            "choices": [
                9,
                20,
                1,
                6
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 9,
                "points": [
                    {
                        "pos": 5,
                        "label": "东5格",
                        "color": "#00A896"
                    },
                    {
                        "pos": 9,
                        "label": "北4格",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    9
                ]
            },
            "knowledge": "描述行走路线",
            "difficulty": 2,
            "hint": "两段路程相加",
            "variants": [
                {
                    "question": "东3格北6格共几格？",
                    "formula": "3+6=?",
                    "answer": 9,
                    "hint": "两段相加"
                },
                {
                    "question": "东7格北2格共几格？",
                    "formula": "7+2=?",
                    "answer": 9,
                    "hint": "两段相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "78÷4大约等于多少",
                        "78÷4精确等于多少",
                        "4元一支笔一共多少元",
                        "78元能买几支笔"
                    ],
                    "answer": "78÷4大约等于多少",
                    "explain": "题目说妈妈有78元买4元一支的笔，小红「估算」大约能买多少支，求的是大约值"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "被除数78，除数4，要估算",
                        "被除数80，除数4",
                        "被除数78，除数4，求精确值",
                        "只有78"
                    ],
                    "answer": "被除数78，除数4，要估算",
                    "explain": "已知78÷4，题目要求估算，需要把78看成接近的整十数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "把78估成80再除以4",
                        "直接算78÷4",
                        "把4估成10",
                        "用乘法"
                    ],
                    "answer": "把78估成80再除以4",
                    "explain": "78接近80，把78估成80，80÷4=20，所以78÷4≈20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上78和80靠得很近，78被估成80，80÷4=20，估算结果约20",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "估算把被除数看成接近的整十整百数：78≈80，80÷4=20，所以78÷4≈20",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "除法估算把被除数估成接近且能被除数整除的整十整百数。关键：估算看接近、好算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-009"
        },
        {
            "scene": "妈妈买了60颗草莓，平均装进3个盒子里。小红帮忙分装，她想知道每盒装几颗。",
            "question": "每盒装几颗草莓？",
            "formula": "60 ÷ 3 = ?",
            "answer": 20,
            "choices": [
                20,
                30,
                15,
                180
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 60,
                "parts": [
                    {
                        "label": "盒1",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "盒2",
                        "val": 20,
                        "color": "#F5B800"
                    },
                    {
                        "label": "盒3",
                        "val": 20,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "口算除法",
            "difficulty": 2,
            "hint": "6÷3=2添一个0",
            "variants": [
                {
                    "question": "80÷4=?",
                    "formula": "80÷4=?",
                    "answer": 20,
                    "hint": "8÷4=2添0"
                },
                {
                    "question": "90÷3=?",
                    "formula": "90÷3=?",
                    "answer": 30,
                    "hint": "9÷3=3添0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两个班一共多少人喜欢足球",
                        "三(1)班比三(2)班多几人",
                        "哪个班人多",
                        "平均每班几人"
                    ],
                    "answer": "两个班一共多少人喜欢足球",
                    "explain": "题目说三(1)班15人、三(2)班12人喜欢足球，问「一共多少人」，求两班总人数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "三(1)班15人，三(2)班12人",
                        "三(1)班12人，三(2)班15人",
                        "三(1)班20人，三(2)班18人",
                        "只有一个班的人数"
                    ],
                    "answer": "三(1)班15人，三(2)班12人",
                    "explain": "两个班喜欢足球的人数分别是15人和12人"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "加法",
                        "减法",
                        "乘法",
                        "除法"
                    ],
                    "answer": "加法",
                    "explain": "把两个班的人数合起来用加法：15+12=27"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里两条条形，一条代表三(1)班15人，一条代表三(2)班12人，合起来27人",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "复式统计表把两个班的数据合并对比：15+12=27，两个班一共27人",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "复式统计表把多个单式表合并，便于对比和求总数。关键：合并数据用加法，对比用减法",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-010"
        },
        {
            "scene": "学校买了400本练习本，平均分给2个年级。教务处要算每个年级分多少本。",
            "question": "每个年级分多少本？",
            "formula": "400 ÷ 2 = ?",
            "answer": 200,
            "choices": [
                200,
                100,
                300,
                402
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 400,
                "parts": [
                    {
                        "label": "年级1",
                        "val": 200,
                        "color": "#00A896"
                    },
                    {
                        "label": "年级2",
                        "val": 200,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "口算除法",
            "difficulty": 2,
            "hint": "4÷2=2添两个0",
            "variants": [
                {
                    "question": "600÷3=?",
                    "formula": "600÷3=?",
                    "answer": 200,
                    "hint": "6÷3=2添两个0"
                },
                {
                    "question": "800÷4=?",
                    "formula": "800÷4=?",
                    "answer": 200,
                    "hint": "8÷4=2添两个0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "买20盒一共多少元",
                        "每盒多少元",
                        "买了几盒",
                        "20盒比1盒多几元"
                    ],
                    "answer": "买20盒一共多少元",
                    "explain": "题目说每盒水彩笔12元，老师买了20盒，问「一共多少元」，求总价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每盒12元，买20盒",
                        "每盒20元，买12盒",
                        "一共240元，买20盒",
                        "只有每盒12元"
                    ],
                    "answer": "每盒12元，买20盒",
                    "explain": "每份是12元，有20份，这是两个关键数"
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
                    "explain": "求20个12合起来是多少用乘法：12×20=240"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积图里长12、宽20的长方形面积就是240，表示12×20=240",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "两位数乘整十数：先算12×2=24，再在末尾添一个0，得240。算式：12×20=240",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "乘整十数先用两位数乘整十数的十位数字，再添0。关键：单价×数量=总价",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-011"
        },
        {
            "scene": "体育老师有80个皮球，平均分给4个班。他要算每个班分到几个皮球。",
            "question": "每个班分到几个皮球？",
            "formula": "80 ÷ 4 = ?",
            "answer": 20,
            "choices": [
                20,
                40,
                10,
                320
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 80,
                "parts": [
                    {
                        "label": "班1",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "班2",
                        "val": 20,
                        "color": "#F5B800"
                    },
                    {
                        "label": "班3",
                        "val": 20,
                        "color": "#FB923C"
                    },
                    {
                        "label": "班4",
                        "val": 20,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "口算除法",
            "difficulty": 2,
            "hint": "8÷4=2添一个0",
            "variants": [
                {
                    "question": "60÷2=?",
                    "formula": "60÷2=?",
                    "answer": 30,
                    "hint": "6÷2=3添0"
                },
                {
                    "question": "100÷5=?",
                    "formula": "100÷5=?",
                    "answer": 20,
                    "hint": "10÷5=2添0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "报告厅一共能坐多少人",
                        "每排多少人",
                        "有几排座位",
                        "每排比每排多几人"
                    ],
                    "answer": "报告厅一共能坐多少人",
                    "explain": "题目说报告厅有14排座位每排12个，问「一共能坐多少人」，求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "14排，每排12个",
                        "12排，每排14个",
                        "一共168个，14排",
                        "只有14排"
                    ],
                    "answer": "14排，每排12个",
                    "explain": "排数是14，每排12个，这是两个关键数"
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
                    "explain": "求14个12合起来是多少用乘法：14×12=168"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积图里长14、宽12，分成100+40+20+8四块，合起来面积168，表示14×12=168",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "两位数乘两位数：14×10=140，14×2=28，140+28=168。算式：14×12=168",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "用第二个因数每位分别乘第一个因数，积相加。关键：分位相乘再相加",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-012"
        },
        {
            "scene": "妈妈买了96颗新鲜的草莓，要平均装进4个盒子。小红帮忙分装，她想知道每个盒子装几颗。",
            "question": "每个盒子装几颗草莓？",
            "formula": "96 ÷ 4 = ?",
            "answer": 24,
            "choices": [
                24,
                22,
                25,
                23
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 96,
                "parts": [
                    {
                        "label": "盒1",
                        "val": 24,
                        "color": "#00A896"
                    },
                    {
                        "label": "盒2",
                        "val": 24,
                        "color": "#F5B800"
                    },
                    {
                        "label": "盒3",
                        "val": 24,
                        "color": "#FB923C"
                    },
                    {
                        "label": "盒4",
                        "val": 24,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "笔算除法",
            "difficulty": 2,
            "hint": "80÷4=20，16÷4=4",
            "variants": [
                {
                    "question": "84÷4=?",
                    "formula": "84÷4=?",
                    "answer": 21,
                    "hint": "80÷4加4÷4"
                },
                {
                    "question": "108÷4=?",
                    "formula": "108÷4=?",
                    "answer": 27,
                    "hint": "100÷4加8÷4"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一共发多少本书",
                        "每班多少本",
                        "有几个班",
                        "每班相差几本"
                    ],
                    "answer": "一共发多少本书",
                    "explain": "题目说每班发45本共24个班，问「一共发多少本」，求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每班45本，共24个班",
                        "每班24本，共45个班",
                        "一共1080本，24个班",
                        "只有45本"
                    ],
                    "answer": "每班45本，共24个班",
                    "explain": "每份45本，有24份，这是两个关键数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（注意进位）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（注意进位）",
                    "explain": "求24个45合起来用乘法，满几十进几：45×24=1080"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积图里长45、宽24，分成800+100+160+20四块，合起来1080，表示45×24=1080",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "进位乘法：45×20=900，45×4=180，900+180=1080。算式：45×24=1080",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "进位乘法满几十进几，最后相加。关键：分位相乘，满十进位，别忘加进位数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-013"
        },
        {
            "scene": "学校有84名同学参加跳绳比赛，平均分成3组。体育老师要算每组有多少人。",
            "question": "每组有多少人？",
            "formula": "84 ÷ 3 = ?",
            "answer": 28,
            "choices": [
                28,
                24,
                21,
                27
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 84,
                "parts": [
                    {
                        "label": "组1",
                        "val": 28,
                        "color": "#00A896"
                    },
                    {
                        "label": "组2",
                        "val": 28,
                        "color": "#F5B800"
                    },
                    {
                        "label": "组3",
                        "val": 28,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "笔算除法",
            "difficulty": 2,
            "hint": "60÷3=20，24÷3=8",
            "variants": [
                {
                    "question": "78÷3=?",
                    "formula": "78÷3=?",
                    "answer": 26,
                    "hint": "60÷3加18÷3"
                },
                {
                    "question": "93÷3=?",
                    "formula": "93÷3=?",
                    "answer": 31,
                    "hint": "90÷3加3÷3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "3箱饮料一共多少元",
                        "每箱多少元",
                        "每瓶多少元",
                        "一共有多少瓶"
                    ],
                    "answer": "3箱饮料一共多少元",
                    "explain": "题目说有3箱饮料每箱12瓶每瓶4元，问「一共多少元」，求总价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "3箱、每箱12瓶、每瓶4元",
                        "3箱、每瓶4元",
                        "12瓶、每瓶4元",
                        "只有3箱"
                    ],
                    "answer": "3箱、每箱12瓶、每瓶4元",
                    "explain": "三个关键信息：箱数3、每箱瓶数12、每瓶单价4元"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "连乘（3×12×4）",
                        "连除",
                        "先除再乘",
                        "只用加法"
                    ],
                    "answer": "连乘（3×12×4）",
                    "explain": "先算3×12=36瓶，再算36×4=144元，用连乘：3×12×4=144"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里3条等长条形，每条代表一箱48元（12瓶×4元），合起来144元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "连乘分两步：3×12=36（总瓶数），36×4=144（总价）。算式：3×12×4=144",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "连乘问题按顺序逐步相乘，先求中间量再求总量。关键：找清每步求什么",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-014"
        },
        {
            "scene": "小芳有75张画片，平均分给5个好朋友。她要算每个朋友分到多少张画片。",
            "question": "每个朋友分到多少张画片？",
            "formula": "75 ÷ 5 = ?",
            "answer": 15,
            "choices": [
                15,
                25,
                10,
                35
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 75,
                "parts": [
                    {
                        "label": "友1",
                        "val": 15,
                        "color": "#00A896"
                    },
                    {
                        "label": "友2",
                        "val": 15,
                        "color": "#F5B800"
                    },
                    {
                        "label": "友3",
                        "val": 15,
                        "color": "#FB923C"
                    },
                    {
                        "label": "友4",
                        "val": 15,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "友5",
                        "val": 15,
                        "color": "#1E3A5F"
                    }
                ]
            },
            "knowledge": "笔算除法",
            "difficulty": 2,
            "hint": "50÷5=10，25÷5=5",
            "variants": [
                {
                    "question": "65÷5=?",
                    "formula": "65÷5=?",
                    "answer": 13,
                    "hint": "50÷5加15÷5"
                },
                {
                    "question": "85÷5=?",
                    "formula": "85÷5=?",
                    "answer": 17,
                    "hint": "50÷5加35÷5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "1平方厘米大约有多大",
                        "1平方分米有多大",
                        "1平方米有多大",
                        "1厘米有多长"
                    ],
                    "answer": "1平方厘米大约有多大",
                    "explain": "题目说小红用1平方厘米小正方形量指甲盖约放1个，问「1平方厘米大约有多大」"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1平方厘米约指甲盖大小",
                        "1平方分米约手掌大小",
                        "1平方米约地砖大小",
                        "1厘米约指甲盖大小"
                    ],
                    "answer": "1平方厘米约指甲盖大小",
                    "explain": "关键信息：1平方厘米的小正方形大约能铺满一个指甲盖"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "记住1cm²约指甲盖大小",
                        "用乘法计算",
                        "用除法计算",
                        "量长度"
                    ],
                    "answer": "记住1cm²约指甲盖大小",
                    "explain": "面积单位靠生活参照记忆，1平方厘米约指甲盖大小，填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一个边长1厘米的小正方形，约指甲盖大小，面积是1平方厘米",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积是面的大小，1平方厘米=边长1cm的正方形面积，用生活物体参照记忆",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "面积单位用生活物体参照：1cm²约指甲盖、1dm²约手掌、1m²约地砖。关键：面积单位有大小之分",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-015"
        },
        {
            "scene": "图书馆有369本新书，平均放在3个书架上。管理员要算每个书架放多少本。",
            "question": "每个书架放多少本？",
            "formula": "369 ÷ 3 = ?",
            "answer": 123,
            "choices": [
                123,
                113,
                103,
                133
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 369,
                "parts": [
                    {
                        "label": "架1",
                        "val": 123,
                        "color": "#00A896"
                    },
                    {
                        "label": "架2",
                        "val": 123,
                        "color": "#F5B800"
                    },
                    {
                        "label": "架3",
                        "val": 123,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "三位数除一位数",
            "difficulty": 3,
            "hint": "300÷3=100，60÷3=20，9÷3=3",
            "variants": [
                {
                    "question": "486÷3=?",
                    "formula": "486÷3=?",
                    "answer": 162,
                    "hint": "分位相除"
                },
                {
                    "question": "246÷2=?",
                    "formula": "246÷2=?",
                    "answer": 123,
                    "hint": "分位相除"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "菜地的面积是多少平方米",
                        "菜地的周长是多少米",
                        "菜地的长是多少米",
                        "菜地的宽是多少米"
                    ],
                    "answer": "菜地的面积是多少平方米",
                    "explain": "题目说长方形菜地长6米宽4米，问「面积是多少」，求的是面积不是周长"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "长6米、宽4米",
                        "长4米、宽6米",
                        "面积24平方米、长6米",
                        "只有长6米"
                    ],
                    "answer": "长6米、宽4米",
                    "explain": "长方形菜地的长是6米，宽是4米，这是两个关键数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（长×宽）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（长×宽）",
                    "explain": "长方形面积=长×宽：6×4=24平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一个长6米、宽4米的长方形，里面可以铺24个1平方米的小方格",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "长方形面积=长×宽。6×4=24，所以菜地面积是24平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "长方形面积=长×宽，正方形面积=边长×边长。关键：面积用乘法，周长用加法，别混淆",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-016"
        },
        {
            "scene": "学校买了448本练习本，平均分给4个班。教务处要算每个班分多少本。",
            "question": "每个班分多少本？",
            "formula": "448 ÷ 4 = ?",
            "answer": 112,
            "choices": [
                112,
                102,
                122,
                112
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 448,
                "parts": [
                    {
                        "label": "班1",
                        "val": 112,
                        "color": "#00A896"
                    },
                    {
                        "label": "班2",
                        "val": 112,
                        "color": "#F5B800"
                    },
                    {
                        "label": "班3",
                        "val": 112,
                        "color": "#FB923C"
                    },
                    {
                        "label": "班4",
                        "val": 112,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "三位数除一位数",
            "difficulty": 3,
            "hint": "400÷4=100，48÷4=12",
            "variants": [
                {
                    "question": "636÷6=?",
                    "formula": "636÷6=?",
                    "answer": 106,
                    "hint": "分位相除"
                },
                {
                    "question": "848÷4=?",
                    "formula": "848÷4=?",
                    "answer": 212,
                    "hint": "分位相除"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "1平方分米等于多少平方厘米",
                        "1平方分米等于多少平方米",
                        "1分米等于多少厘米",
                        "1平方厘米有多大"
                    ],
                    "answer": "1平方分米等于多少平方厘米",
                    "explain": "题目说小红用1平方厘米小正方形铺满1平方分米大正方形，问「1平方分米等于多少平方厘米」"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "用1cm²小正方形铺满1dm²",
                        "1dm=10cm",
                        "1m²=100dm²",
                        "1平方分米约手掌大小"
                    ],
                    "answer": "用1cm²小正方形铺满1dm²",
                    "explain": "关键信息：用1平方厘米的小正方形去铺1平方分米的大正方形"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（10×10）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（10×10）",
                    "explain": "1分米=10厘米，1平方分米=10×10=100平方厘米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积图里是一个10×10的大正方形，里面有100个小格，每格1平方厘米",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1dm=10cm，1dm²=10cm×10cm=100cm²。相邻面积单位进率是100",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "相邻面积单位进率100：1dm²=100cm²，1m²=100dm²。关键：长度进率10，面积进率100",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-017"
        },
        {
            "scene": "体育室有856根跳绳，平均分给4个年级。体育老师要算每个年级分到多少根。",
            "question": "每个年级分到多少根？",
            "formula": "856 ÷ 4 = ?",
            "answer": 214,
            "choices": [
                214,
                204,
                224,
                234
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 856,
                "parts": [
                    {
                        "label": "年级1",
                        "val": 214,
                        "color": "#00A896"
                    },
                    {
                        "label": "年级2",
                        "val": 214,
                        "color": "#F5B800"
                    },
                    {
                        "label": "年级3",
                        "val": 214,
                        "color": "#FB923C"
                    },
                    {
                        "label": "年级4",
                        "val": 214,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "三位数除一位数",
            "difficulty": 3,
            "hint": "800÷4=200，56÷4=14",
            "variants": [
                {
                    "question": "945÷3=?",
                    "formula": "945÷3=?",
                    "answer": 315,
                    "hint": "分位相除"
                },
                {
                    "question": "696÷6=?",
                    "formula": "696÷6=?",
                    "answer": 116,
                    "hint": "分位相除"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "需要多少块地砖",
                        "客厅的周长是多少",
                        "每块地砖多大",
                        "客厅的长是多少"
                    ],
                    "answer": "需要多少块地砖",
                    "explain": "题目说客厅长6米宽4米，用1平方米地砖铺地，问「需要多少块」，求地砖块数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "客厅长6米宽4米，每块地砖1平方米",
                        "客厅面积24平方米，地砖2平方米",
                        "客厅长6米，每块1平方米",
                        "只有客厅长6米"
                    ],
                    "answer": "客厅长6米宽4米，每块地砖1平方米",
                    "explain": "客厅长6米宽4米，地砖每块面积1平方米，这是关键信息"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "先乘再除（6×4÷1）",
                        "只用乘法",
                        "只用加法",
                        "只用减法"
                    ],
                    "answer": "先乘再除（6×4÷1）",
                    "explain": "先算面积6×4=24平方米，再算24÷1=24块，用乘除两步"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是长6米宽4米的长方形，里面铺满24个1平方米的小方格，每格是一块地砖",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "先算客厅面积6×4=24平方米，再算24÷1=24块。算式：6×4÷1=24",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "铺地砖问题：总面积÷每块面积=块数。关键：先求面积再除以单位面积",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-018"
        },
        {
            "scene": "小红算了一道除法：96÷4=24。老师教她用乘法验算，看看算得对不对。",
            "question": "用乘法验算：24 × 4 = ?",
            "answer": 96,
            "formula": "24 × 4 = ?",
            "choices": [
                96,
                86,
                106,
                28
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 25,
                "b": 6,
                "parts": [
                    150
                ],
                "result": 150
            },
            "knowledge": "除法验算",
            "difficulty": 2,
            "hint": "商×除数=被除数",
            "variants": [
                {
                    "question": "验算85÷5=17，17×5=?",
                    "formula": "17×5=?",
                    "answer": 85,
                    "hint": "商乘除数"
                },
                {
                    "question": "验算78÷6=13，13×6=?",
                    "formula": "13×6=?",
                    "answer": 78,
                    "hint": "商乘除数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一年有多少个月",
                        "一年有多少天",
                        "一个月有多少天",
                        "一年有几个季度"
                    ],
                    "answer": "一年有多少个月",
                    "explain": "题目说小红数日历发现一年有几个月，问「一年有多少个月」"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "小红在数一年的月数",
                        "大月有31天",
                        "二月28或29天",
                        "一年有365天"
                    ],
                    "answer": "小红在数一年的月数",
                    "explain": "关键信息：小红数一年有几个月，要求这个月数"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "生活常识记忆（一年12个月）",
                        "用乘法",
                        "用除法",
                        "量长度"
                    ],
                    "answer": "生活常识记忆（一年12个月）",
                    "explain": "一年有12个月是生活常识，1月到12月共12个月，填12"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴从1月到12月，起点1终点12，一年共12个月",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "一年有12个月，大月(1,3,5,7,8,10,12)有31天，小月(4,6,9,11)有30天，二月28或29天",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "年月日关系：一年12个月、4季度；大月31天小月30天，二月特殊。关键：记住大小月规律",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-019"
        },
        {
            "scene": "小亮算了一道除法：75÷5=15。老师让他用乘法验算。",
            "question": "用乘法验算：15 × 5 = ?",
            "answer": 75,
            "formula": "15 × 5 = ?",
            "choices": [
                75,
                65,
                55,
                20
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 15,
                "b": 5,
                "parts": [
                    50,
                    25
                ],
                "result": 75
            },
            "knowledge": "除法验算",
            "difficulty": 2,
            "hint": "商×除数=被除数",
            "variants": [
                {
                    "question": "验算84÷3=28，28×3=?",
                    "formula": "28×3=?",
                    "answer": 84,
                    "hint": "商乘除数"
                },
                {
                    "question": "验算92÷4=23，23×4=?",
                    "formula": "23×4=?",
                    "answer": 92,
                    "hint": "商乘除数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "下午3时等于24时计时法几时",
                        "凌晨3时等于几时",
                        "下午3时等于几时",
                        "24时等于几时"
                    ],
                    "answer": "下午3时等于24时计时法几时",
                    "explain": "题目说小红下午3时上体育课，老师告诉24时计时法叫15时，问「下午3时等于24时计时法几时」"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "下午3时要换成24时计时法",
                        "凌晨3时要换算",
                        "24时要换算",
                        "只有3时"
                    ],
                    "answer": "下午3时要换成24时计时法",
                    "explain": "关键信息：把普通计时法的下午3时换算成24时计时法"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "下午加12",
                        "凌晨加12",
                        "减12",
                        "乘12"
                    ],
                    "answer": "下午加12",
                    "explain": "下午时间换成24时计时法要加12：3+12=15，所以是15时"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴从0到24时，凌晨3时在3的位置，下午3时在15的位置，相差12",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "24时计时法：下午和晚上的时数+12。下午3时=3+12=15时",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "普通计时法转24时计时法：凌晨上午不变，下午晚上加12。关键：12时是分界点",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-020"
        },
        {
            "scene": "小芳算了一道除法：369÷3=123。老师让她用乘法验算。",
            "question": "用乘法验算：123 × 3 = ?",
            "answer": 369,
            "formula": "123 × 3 = ?",
            "choices": [
                369,
                359,
                379,
                126
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 123,
                "b": 3,
                "parts": [
                    300,
                    60,
                    9
                ],
                "result": 369
            },
            "knowledge": "除法验算",
            "difficulty": 2,
            "hint": "商×除数=被除数",
            "variants": [
                {
                    "question": "验算448÷4=112，112×4=?",
                    "formula": "112×4=?",
                    "answer": 448,
                    "hint": "商乘除数"
                },
                {
                    "question": "验算856÷4=214，214×4=?",
                    "formula": "214×4=?",
                    "answer": 856,
                    "hint": "商乘除数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "图书馆开了几小时",
                        "图书馆几点开门",
                        "图书馆几点关门",
                        "一天有几小时"
                    ],
                    "answer": "图书馆开了几小时",
                    "explain": "题目说图书馆9时开门11时关门，问「开了几小时」，求经过时间"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "9时开门，11时关门",
                        "11时开门，9时关门",
                        "9时开门，关门2小时",
                        "只有9时开门"
                    ],
                    "answer": "9时开门，11时关门",
                    "explain": "开始时间是9时，结束时间是11时，这是两个关键数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "减法（结束-开始）",
                        "加法",
                        "乘法",
                        "除法"
                    ],
                    "answer": "减法（结束-开始）",
                    "explain": "经过时间=结束时间-开始时间：11-9=2小时"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴从9到11，9是开门11是关门，中间这段长度就是2小时",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "经过时间=结束时间-开始时间。11-9=2，开了2小时",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求经过时间用减法：结束-开始=经过时间。关键：同一天直接减，跨天要分段算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-021"
        },
        {
            "scene": "学校有612本图书，平均放在6个书架上。管理员要算每个书架放多少本。",
            "question": "每个书架放多少本？",
            "formula": "612 ÷ 6 = ?",
            "answer": 102,
            "choices": [
                102,
                12,
                100,
                112
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 612,
                "parts": [
                    {
                        "label": "架1",
                        "val": 102,
                        "color": "#00A896"
                    },
                    {
                        "label": "架2",
                        "val": 102,
                        "color": "#F5B800"
                    },
                    {
                        "label": "架3",
                        "val": 102,
                        "color": "#FB923C"
                    },
                    {
                        "label": "架4",
                        "val": 102,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "架5",
                        "val": 102,
                        "color": "#1E3A5F"
                    },
                    {
                        "label": "架6",
                        "val": 102,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "商中间有0",
            "difficulty": 3,
            "hint": "不够商1就商0占位",
            "variants": [
                {
                    "question": "416÷4=?",
                    "formula": "416÷4=?",
                    "answer": 104,
                    "hint": "十位不够商1商0"
                },
                {
                    "question": "832÷8=?",
                    "formula": "832÷8=?",
                    "answer": 104,
                    "hint": "十位不够商1商0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "0.3等于十分之几",
                        "0.3等于百分之几",
                        "0.3等于多少元",
                        "0.3等于几"
                    ],
                    "answer": "0.3等于十分之几",
                    "explain": "题目说小红用1元买冰棒找回0.3元，问「0.3等于十分之几」，求小数化分数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "小数0.3，要化成十分之几",
                        "小数0.3，要化成百分之几",
                        "分数3/10，要化小数",
                        "只有0.3"
                    ],
                    "answer": "小数0.3，要化成十分之几",
                    "explain": "关键信息：把小数0.3换算成十分之几的分数形式"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "一位小数=十分之几（填3）",
                        "两位小数=百分之几",
                        "用乘法",
                        "用减法"
                    ],
                    "answer": "一位小数=十分之几（填3）",
                    "explain": "0.3是一位小数，表示十分之三，分母是10分子是3，填3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分数条把一个整体平均分成10份，涂了3份，表示3/10，就是0.3",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "一位小数表示十分之几：0.3=3/10。小数点右边第一位是十分位",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "小数是分数的另一种写法：一位小数=十分之几，两位小数=百分之几。关键：小数点后第几位决定分母",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-022"
        },
        {
            "scene": "农场收获了840千克苹果，平均装进4辆卡车。农场主算每辆卡车装多少千克。",
            "question": "每辆卡车装多少千克？",
            "formula": "840 ÷ 4 = ?",
            "answer": 210,
            "choices": [
                210,
                200,
                21,
                110
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 840,
                "parts": [
                    {
                        "label": "车1",
                        "val": 210,
                        "color": "#00A896"
                    },
                    {
                        "label": "车2",
                        "val": 210,
                        "color": "#F5B800"
                    },
                    {
                        "label": "车3",
                        "val": 210,
                        "color": "#FB923C"
                    },
                    {
                        "label": "车4",
                        "val": 210,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "商末尾有0",
            "difficulty": 3,
            "hint": "个位不够商1商0占位",
            "variants": [
                {
                    "question": "630÷3=?",
                    "formula": "630÷3=?",
                    "answer": 210,
                    "hint": "个位商0"
                },
                {
                    "question": "960÷4=?",
                    "formula": "960÷4=?",
                    "answer": 240,
                    "hint": "个位商0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "比较0.8和0.6谁大",
                        "比较0.8和0.6的和",
                        "0.8减0.6等于多少",
                        "0.8和0.6谁小"
                    ],
                    "answer": "比较0.8和0.6谁大",
                    "explain": "题目比较0.8和0.6，0.8大，填较小的0.6的十分位6使0.8>0.6成立"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "小红0.8米，小亮0.6米",
                        "小红0.6米，小亮0.8米",
                        "小红1.2米，小亮0.9米",
                        "只有0.8米"
                    ],
                    "answer": "小红0.8米，小亮0.6米",
                    "explain": "两个要比大小的数是0.8和0.6"
                },
                {
                    "q": "🧩 用什么方法比较？",
                    "choices": [
                        "整数部分相同比十分位",
                        "先比整数部分",
                        "用加法",
                        "用减法"
                    ],
                    "answer": "整数部分相同比十分位",
                    "explain": "0.8和0.6整数部分都是0，比十分位8>6，所以0.8>0.6，填6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上0.6在小亮位置，0.8在小红位置，0.8在0.6右边，右边数更大",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "小数比较：先比整数部分，相同再比十分位。0.8和0.6整数都是0，十分位8>6，所以0.8>0.6",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "小数比较大从高位比起：整数部分→十分位→百分位。关键：数轴上右边总比左边大",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-023"
        },
        {
            "scene": "体育老师有909个乒乓球，平均分给3个班。他要算每个班分到多少个。",
            "question": "每个班分到多少个乒乓球？",
            "formula": "909 ÷ 3 = ?",
            "answer": 303,
            "choices": [
                303,
                33,
                300,
                313
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 909,
                "parts": [
                    {
                        "label": "班1",
                        "val": 303,
                        "color": "#00A896"
                    },
                    {
                        "label": "班2",
                        "val": 303,
                        "color": "#F5B800"
                    },
                    {
                        "label": "班3",
                        "val": 303,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "商中间有0",
            "difficulty": 3,
            "hint": "十位0除以3得0",
            "variants": [
                {
                    "question": "606÷6=?",
                    "formula": "606÷6=?",
                    "answer": 101,
                    "hint": "十位商0"
                },
                {
                    "question": "408÷4=?",
                    "formula": "408÷4=?",
                    "answer": 102,
                    "hint": "十位商0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "买铅笔和橡皮一共多少元",
                        "铅笔比橡皮贵多少元",
                        "铅笔多少元",
                        "橡皮多少元"
                    ],
                    "answer": "买铅笔和橡皮一共多少元",
                    "explain": "题目说铅笔2.5元橡皮1.3元，问「一共多少元」，求两样东西总价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "铅笔2.5元，橡皮1.3元",
                        "铅笔1.3元，橡皮2.5元",
                        "一共3.8元，铅笔2.5元",
                        "只有铅笔2.5元"
                    ],
                    "answer": "铅笔2.5元，橡皮1.3元",
                    "explain": "铅笔价格2.5元，橡皮价格1.3元，这是两个关键数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "加法（小数点对齐）",
                        "减法",
                        "乘法",
                        "除法"
                    ],
                    "answer": "加法（小数点对齐）",
                    "explain": "求两样东西总价用加法，小数点对齐：2.5+1.3=3.8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里两条条形，一条代表铅笔2.5元，一条代表橡皮1.3元，合起来3.8元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "小数加减法：小数点对齐，按整数加减法算。2.5+1.3，5+3=8，2+1=3，得3.8",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "小数加减法关键是小数点对齐，相同数位相加减。关键：小数点对齐=数位对齐",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-024"
        },
        {
            "scene": "妈妈有78元，想买4元一支的笔。小红估算大约能买多少支，先估被除数。",
            "question": "78÷4大约等于多少？",
            "formula": "80 ÷ 4 ≈ ?",
            "answer": 20,
            "choices": [
                20,
                19,
                22,
                15
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 80,
                "points": [
                    {
                        "pos": 78,
                        "label": "实际78",
                        "color": "#00A896"
                    },
                    {
                        "pos": 80,
                        "label": "估算80",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    80
                ]
            },
            "knowledge": "除法估算",
            "difficulty": 2,
            "hint": "78估成80再除",
            "variants": [
                {
                    "question": "62÷3≈?",
                    "formula": "60÷3≈?",
                    "answer": 20,
                    "hint": "62估成60"
                },
                {
                    "question": "89÷3≈?",
                    "formula": "90÷3≈?",
                    "answer": 30,
                    "hint": "89估成90"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一共有多少种不同穿法",
                        "上衣多少件",
                        "裤子多少条",
                        "上衣比裤子多几件"
                    ],
                    "answer": "一共有多少种不同穿法",
                    "explain": "题目说小红有2件上衣3条裤子搭配衣服，问「一共有多少种穿法」，求搭配总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "2件上衣，3条裤子",
                        "3件上衣，2条裤子",
                        "一共6种穿法，2件上衣",
                        "只有2件上衣"
                    ],
                    "answer": "2件上衣，3条裤子",
                    "explain": "上衣2件，裤子3条，这是两个关键数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（2×3）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（2×3）",
                    "explain": "每件上衣配3条裤子，2件上衣就是2×3=6种穿法"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里两条条形，每条代表一件上衣配3条裤子的3种穿法，合起来6种",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "搭配问题用乘法：每件上衣配3条裤子共3种，2件上衣就是2×3=6种",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "搭配问题：A类数量×B类数量=搭配总数。关键：每类各选一种，用乘法",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "3B-PROB-025"
        },
        {
            "scene": "小亮有142颗糖果，想平均分给7个朋友。他估算每人大约分多少颗。",
            "question": "142÷7大约等于多少？",
            "formula": "140 ÷ 7 ≈ ?",
            "answer": 20,
            "choices": [
                20,
                21,
                18,
                15
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 150,
                "points": [
                    {
                        "pos": 142,
                        "label": "实际142",
                        "color": "#00A896"
                    },
                    {
                        "pos": 140,
                        "label": "估算140",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    150
                ]
            },
            "knowledge": "除法估算",
            "difficulty": 2,
            "hint": "142估成140再除",
            "variants": [
                {
                    "question": "118÷6≈?",
                    "formula": "120÷6≈?",
                    "answer": 20,
                    "hint": "118估成120"
                },
                {
                    "question": "159÷8≈?",
                    "formula": "160÷8≈?",
                    "answer": 20,
                    "hint": "159估成160"
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
                    "explain": "题目说「小亮有142颗糖果，想平均分给7个朋友。他估算每人大约分多少颗。」，问的是「142÷7大约等于多少？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：140 和 7",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：140 和 7",
                    "explain": "从题目中找到的关键数是：140、7"
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
                    "explain": "除法：140 ÷ 7 ≈ ?=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从到150，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "140 ÷ 7 ≈ ?=20",
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
            "id": "3B-PROB-026"
        },
        {
            "scene": "学校有59箱图书，要分给3个阅览室。老师估算每个阅览室大约分多少箱。",
            "question": "59÷3大约等于多少？",
            "formula": "60 ÷ 3 ≈ ?",
            "answer": 20,
            "choices": [
                20,
                19,
                21,
                18
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 60,
                "points": [
                    {
                        "pos": 59,
                        "label": "实际59",
                        "color": "#00A896"
                    },
                    {
                        "pos": 60,
                        "label": "估算60",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    60
                ]
            },
            "knowledge": "除法估算",
            "difficulty": 2,
            "hint": "59估成60再除",
            "variants": [
                {
                    "question": "39÷4≈?",
                    "formula": "40÷4≈?",
                    "answer": 10,
                    "hint": "39估成40"
                },
                {
                    "question": "79÷4≈?",
                    "formula": "80÷4≈?",
                    "answer": 20,
                    "hint": "79估成80"
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
                    "explain": "题目说「学校有59箱图书，要分给3个阅览室。老师估算每个阅览室大约分多少箱。」，问的是「59÷3大约等于多少？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：60 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：60 和 3",
                    "explain": "从题目中找到的关键数是：60、3"
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
                    "explain": "除法：60 ÷ 3 ≈ ?=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从到60，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "60 ÷ 3 ≈ ?=20",
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
            "id": "3B-PROB-027"
        },
        {
            "scene": "三(1)班有15人喜欢足球，三(2)班有12人喜欢足球。体育老师要统计两个班一共有多少人喜欢足球。",
            "question": "两个班一共多少 人喜欢足球？",
            "formula": "15 + 12 = ?",
            "answer": 27,
            "choices": [
                27,
                17,
                3,
                18
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 27,
                "parts": [
                    {
                        "label": "三1班",
                        "val": 15,
                        "color": "#00A896"
                    },
                    {
                        "label": "三2班",
                        "val": 12,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "复式统计表",
            "difficulty": 2,
            "hint": "两个班人数相加",
            "variants": [
                {
                    "question": "三1班20人三2班18人共几人？",
                    "formula": "20+18=?",
                    "answer": 38,
                    "hint": "人数相加"
                },
                {
                    "question": "三1班12人三2班15人共几人？",
                    "formula": "12+15=?",
                    "answer": 27,
                    "hint": "人数相加"
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
                    "explain": "题目说「三(1)班有15人喜欢足球，三(2)班有12人喜欢足球。体育老师要统计两个班一共有多少人喜欢足球。」，问的是「两个班一共多少 人喜欢足球？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：15、12"
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
                    "explain": "加法：15 + 12 = ?=27"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表15，合起来就是27",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "15 + 12 = ?=27",
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
            "id": "3B-PROB-028"
        },
        {
            "scene": "三(1)班20人喜欢画画，三(2)班18人喜欢画画。美术老师要统计一共多少 人。",
            "question": "两个班一共多少人喜欢画画？",
            "formula": "20 + 18 = ?",
            "answer": 38,
            "choices": [
                38,
                28,
                2,
                48
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 38,
                "parts": [
                    {
                        "label": "三1班",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "三2班",
                        "val": 18,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "复式统计表",
            "difficulty": 2,
            "hint": "两班人数相加",
            "variants": [
                {
                    "question": "三1班15人三2班17人共几人？",
                    "formula": "15+17=?",
                    "answer": 32,
                    "hint": "人数相加"
                },
                {
                    "question": "三1班22人三2班19人共几人？",
                    "formula": "22+19=?",
                    "answer": 41,
                    "hint": "人数相加"
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
                    "explain": "题目说「三(1)班20人喜欢画画，三(2)班18人喜欢画画。美术老师要统计一共多少 人。」，问的是「两个班一共多少人喜欢画画？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：20 和 18",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：20 和 18",
                    "explain": "从题目中找到的关键数是：20、18"
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
                    "explain": "加法：20 + 18 = ?=38"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表20，合起来就是38",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "20 + 18 = ?=38",
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
            "id": "3B-PROB-029"
        },
        {
            "scene": "三(1)班12人喜欢音乐，三(2)班15人喜欢音乐。音乐老师要统计一共多少 人。",
            "question": "两个班一共多少人喜欢音乐？",
            "formula": "12 + 15 = ?",
            "answer": 27,
            "choices": [
                27,
                17,
                3,
                28
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 27,
                "parts": [
                    {
                        "label": "三1班",
                        "val": 12,
                        "color": "#00A896"
                    },
                    {
                        "label": "三2班",
                        "val": 15,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "复式统计表",
            "difficulty": 2,
            "hint": "两班人数相加",
            "variants": [
                {
                    "question": "三1班18人三2班14人共几人？",
                    "formula": "18+14=?",
                    "answer": 32,
                    "hint": "人数相加"
                },
                {
                    "question": "三1班16人三2班20人共几人？",
                    "formula": "16+20=?",
                    "answer": 36,
                    "hint": "人数相加"
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
                    "explain": "题目说「三(1)班12人喜欢音乐，三(2)班15人喜欢音乐。音乐老师要统计一共多少 人。」，问的是「两个班一共多少人喜欢音乐？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：12 和 15",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：12 和 15",
                    "explain": "从题目中找到的关键数是：12、15"
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
                    "explain": "加法：12 + 15 = ?=27"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表12，合起来就是27",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "12 + 15 = ?=27",
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
            "id": "3B-PROB-030"
        },
        {
            "scene": "文具店每盒水彩笔12元，老师买了20盒。小红算算一共要付多少元。",
            "question": "买20盒一共多少元？",
            "formula": "12 × 20 = ?",
            "answer": 240,
            "choices": [
                240,
                140,
                24,
                200
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 12,
                "b": 20,
                "parts": [
                    240
                ],
                "result": 240
            },
            "knowledge": "两位数乘整十数",
            "difficulty": 2,
            "hint": "12×2=24添一个0",
            "variants": [
                {
                    "question": "15×30=?",
                    "formula": "15×30=?",
                    "answer": 450,
                    "hint": "15×3=45添0"
                },
                {
                    "question": "24×10=?",
                    "formula": "24×10=?",
                    "answer": 240,
                    "hint": "24×1=24添0"
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
                    "explain": "题目说「文具店每盒水彩笔12元，老师买了20盒。小红算算一共要付多少元。」，问的是「买20盒一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：12 和 20",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：12 和 20",
                    "explain": "从题目中找到的关键数是：12、20"
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
                    "explain": "乘法：12 × 20 = ?=240"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用12×20的方格区域表示面积，每个小方格代表1，合起来就是240",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "12 × 20 = ?=240",
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
            "id": "3B-PROB-031"
        },
        {
            "scene": "超市每箱牛奶15元，食堂买了30箱。厨师长算一共要付多少元。",
            "question": "买30箱一共多少元？",
            "formula": "15 × 30 = ?",
            "answer": 450,
            "choices": [
                450,
                350,
                45,
                300
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 15,
                "b": 30,
                "parts": [
                    450
                ],
                "result": 450
            },
            "knowledge": "两位数乘整十数",
            "difficulty": 2,
            "hint": "15×3=45添一个0",
            "variants": [
                {
                    "question": "18×20=?",
                    "formula": "18×20=?",
                    "answer": 360,
                    "hint": "18×2=36添0"
                },
                {
                    "question": "25×40=?",
                    "formula": "25×40=?",
                    "answer": 1000,
                    "hint": "25×4=100添0"
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
                    "explain": "题目说「超市每箱牛奶15元，食堂买了30箱。厨师长算一共要付多少元。」，问的是「买30箱一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：15 和 30",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：15 和 30",
                    "explain": "从题目中找到的关键数是：15、30"
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
                    "explain": "乘法：15 × 30 = ?=450"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用15×30的方格区域表示面积，每个小方格代表1，合起来就是450",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "15 × 30 = ?=450",
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
            "id": "3B-PROB-032"
        },
        {
            "scene": "学校每包纸24本，总务处买了10包。要算一共多少本。",
            "question": "10包一共多少本？",
            "formula": "24 × 10 = ?",
            "answer": 240,
            "choices": [
                240,
                140,
                24,
                34
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 24,
                "b": 10,
                "parts": [
                    240
                ],
                "result": 240
            },
            "knowledge": "两位数乘整十数",
            "difficulty": 2,
            "hint": "24×1=24添一个0",
            "variants": [
                {
                    "question": "32×20=?",
                    "formula": "32×20=?",
                    "answer": 640,
                    "hint": "32×2=64添0"
                },
                {
                    "question": "45×20=?",
                    "formula": "45×20=?",
                    "answer": 900,
                    "hint": "45×2=90添0"
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
                    "explain": "题目说「学校每包纸24本，总务处买了10包。要算一共多少本。」，问的是「10包一共多少本？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：24 和 10",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：24 和 10",
                    "explain": "从题目中找到的关键数是：24、10"
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
                    "explain": "乘法：24 × 10 = ?=240"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用24×10的方格区域表示面积，每个小方格代表1，合起来就是240",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "24 × 10 = ?=240",
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
            "id": "3B-PROB-033"
        },
        {
            "scene": "学校报告厅有14排座位，每排12个。开家长会老师让小刚算一共能坐多少人。",
            "question": "报告厅一共能坐多少人？",
            "formula": "14 × 12 = ?",
            "answer": 168,
            "choices": [
                168,
                148,
                188,
                158
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 14,
                "b": 12,
                "parts": [
                    100,
                    40,
                    20,
                    8
                ],
                "result": 168
            },
            "knowledge": "两位数乘两位数不进位",
            "difficulty": 3,
            "hint": "14×10=140加14×2=28",
            "variants": [
                {
                    "question": "13×12=?",
                    "formula": "13×12=?",
                    "answer": 156,
                    "hint": "13×10加13×2"
                },
                {
                    "question": "15×11=?",
                    "formula": "15×11=?",
                    "answer": 165,
                    "hint": "15×10加15"
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
                    "explain": "题目说「学校报告厅有14排座位，每排12个。开家长会老师让小刚算一共能坐多少人。」，问的是「报告厅一共能坐多少人？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：14 和 12",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：14 和 12",
                    "explain": "从题目中找到的关键数是：14、12"
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
                    "explain": "乘法：14 × 12 = ?=168"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用14×12的方格区域表示面积，每个小方格代表1，合起来就是168",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "14 × 12 = ?=168",
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
            "id": "3B-PROB-034"
        },
        {
            "scene": "教室里有21排桌子，每排13张。总务处要算一共多少张桌子。",
            "question": "教室一共多少张桌子？",
            "formula": "21 × 13 = ?",
            "answer": 273,
            "choices": [
                273,
                253,
                293,
                263
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 21,
                "b": 13,
                "parts": [
                    200,
                    10,
                    60,
                    3
                ],
                "result": 273
            },
            "knowledge": "两位数乘两位数不进位",
            "difficulty": 3,
            "hint": "21×10=210加21×3=63",
            "variants": [
                {
                    "question": "22×13=?",
                    "formula": "22×13=?",
                    "answer": 286,
                    "hint": "22×10加22×3"
                },
                {
                    "question": "31×12=?",
                    "formula": "31×12=?",
                    "answer": 372,
                    "hint": "31×10加31×2"
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
                    "explain": "题目说「教室里有21排桌子，每排13张。总务处要算一共多少张桌子。」，问的是「教室一共多少张桌子？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：21 和 13",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：21 和 13",
                    "explain": "从题目中找到的关键数是：21、13"
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
                    "explain": "乘法：21 × 13 = ?=273"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用21×13的方格区域表示面积，每个小方格代表1，合起来就是273",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "21 × 13 = ?=273",
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
            "id": "3B-PROB-035"
        },
        {
            "scene": "图书角每层放32本书，共12层。管理员要算一共放多少本书。",
            "question": "一共放多少本书？",
            "formula": "32 × 12 = ?",
            "answer": 384,
            "choices": [
                384,
                364,
                404,
                374
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 32,
                "b": 12,
                "parts": [
                    300,
                    20,
                    60,
                    4
                ],
                "result": 384
            },
            "knowledge": "两位数乘两位数不进位",
            "difficulty": 3,
            "hint": "32×10=320加32×2=64",
            "variants": [
                {
                    "question": "23×13=?",
                    "formula": "23×13=?",
                    "answer": 299,
                    "hint": "23×10加23×3"
                },
                {
                    "question": "42×12=?",
                    "formula": "42×12=?",
                    "answer": 504,
                    "hint": "42×10加42×2"
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
                    "explain": "题目说「图书角每层放32本书，共12层。管理员要算一共放多少本书。」，问的是「一共放多少本书？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：32 和 12",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：32 和 12",
                    "explain": "从题目中找到的关键数是：32、12"
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
                    "explain": "乘法：32 × 12 = ?=384"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用32×12的方格区域表示面积，每个小方格代表1，合起来就是384",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "32 × 12 = ?=384",
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
            "id": "3B-PROB-036"
        },
        {
            "scene": "学校给每班发45本新书，共24个班。教务处要算一共多少本书。",
            "question": "一共发多少本书？",
            "formula": "45 × 24 = ?",
            "answer": 1080,
            "choices": [
                1080,
                980,
                1180,
                1070
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 45,
                "b": 24,
                "parts": [
                    800,
                    100,
                    160,
                    20
                ],
                "result": 1080
            },
            "knowledge": "两位数乘两位数进位",
            "difficulty": 3,
            "hint": "45×20=900加45×4=180",
            "variants": [
                {
                    "question": "36×25=?",
                    "formula": "36×25=?",
                    "answer": 900,
                    "hint": "36×20加36×5"
                },
                {
                    "question": "48×32=?",
                    "formula": "48×32=?",
                    "answer": 1536,
                    "hint": "48×30加48×2"
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
                    "explain": "题目说「学校给每班发45本新书，共24个班。教务处要算一共多少本书。」，问的是「一共发多少本书？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：45 和 24",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：45 和 24",
                    "explain": "从题目中找到的关键数是：45、24"
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
                    "explain": "乘法：45 × 24 = ?=1080"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用45×24的方格区域表示面积，每个小方格代表1，合起来就是1080",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "45 × 24 = ?=1080",
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
            "id": "3B-PROB-037"
        },
        {
            "scene": "超市每箱苹果36个，卖了25箱。店长算一共卖了多少个苹果。",
            "question": "一共卖了多少个苹果？",
            "formula": "36 × 25 = ?",
            "answer": 900,
            "choices": [
                900,
                800,
                1000,
                890
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 36,
                "b": 25,
                "parts": [
                    600,
                    120,
                    300,
                    0
                ],
                "result": 900
            },
            "knowledge": "两位数乘两位数进位",
            "difficulty": 3,
            "hint": "36×20=720加36×5=180",
            "variants": [
                {
                    "question": "45×16=?",
                    "formula": "45×16=?",
                    "answer": 720,
                    "hint": "45×10加45×6"
                },
                {
                    "question": "38×24=?",
                    "formula": "38×24=?",
                    "answer": 912,
                    "hint": "38×20加38×4"
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
                    "explain": "题目说「超市每箱苹果36个，卖了25箱。店长算一共卖了多少个苹果。」，问的是「一共卖了多少个苹果？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：36 和 25",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：36 和 25",
                    "explain": "从题目中找到的关键数是：36、25"
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
                    "explain": "乘法：36 × 25 = ?=900"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用36×25的方格区域表示面积，每个小方格代表1，合起来就是900",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "36 × 25 = ?=900",
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
            "id": "3B-PROB-038"
        },
        {
            "scene": "操场每排48人，共15排。体育老师算一共多少人在做操。",
            "question": "一共有多少人在做操？",
            "formula": "48 × 15 = ?",
            "answer": 720,
            "choices": [
                720,
                620,
                820,
                710
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 48,
                "b": 15,
                "parts": [
                    400,
                    80,
                    200,
                    40
                ],
                "result": 720
            },
            "knowledge": "两位数乘两位数进位",
            "difficulty": 3,
            "hint": "48×10=480加48×5=240",
            "variants": [
                {
                    "question": "52×14=?",
                    "formula": "52×14=?",
                    "answer": 728,
                    "hint": "52×10加52×4"
                },
                {
                    "question": "65×12=?",
                    "formula": "65×12=?",
                    "answer": 780,
                    "hint": "65×10加65×2"
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
                    "explain": "题目说「操场每排48人，共15排。体育老师算一共多少人在做操。」，问的是「一共有多少人在做操？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：48 和 15",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：48 和 15",
                    "explain": "从题目中找到的关键数是：48、15"
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
                    "explain": "乘法：48 × 15 = ?=720"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用48×15的方格区域表示面积，每个小方格代表1，合起来就是720",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "48 × 15 = ?=720",
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
            "id": "3B-PROB-039"
        },
        {
            "scene": "超市有3箱饮料，每箱12瓶，每瓶4元。小红算一共多少元。",
            "question": "一共多少元？",
            "formula": "3 × 12 × 4 = ?",
            "answer": 144,
            "choices": [
                144,
                124,
                164,
                134
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 144,
                "parts": [
                    {
                        "label": "箱1",
                        "val": 48,
                        "color": "#00A896"
                    },
                    {
                        "label": "箱2",
                        "val": 48,
                        "color": "#F5B800"
                    },
                    {
                        "label": "箱3",
                        "val": 48,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "连乘问题",
            "difficulty": 3,
            "hint": "先算3×12=36，再算36×4",
            "variants": [
                {
                    "question": "2箱每箱15瓶每瓶3元共几元？",
                    "formula": "2×15×3=?",
                    "answer": 90,
                    "hint": "先乘再乘"
                },
                {
                    "question": "4箱每箱10瓶每瓶5元共几元？",
                    "formula": "4×10×5=?",
                    "answer": 200,
                    "hint": "先乘再乘"
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
                    "explain": "题目说「超市有3箱饮料，每箱12瓶，每瓶4元。小红算一共多少元。」，问的是「一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：3 和 12",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：3 和 12",
                    "explain": "从题目中找到的关键数是：3、12、4"
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
                    "explain": "乘法：3 × 12 × 4 = ?=144"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表48，合起来就是144",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3 × 12 × 4 = ?=144",
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
            "id": "3B-PROB-040"
        },
        {
            "scene": "妈妈买了60个苹果，每袋装5个，每箱装4袋。小红算需要几个箱子。",
            "question": "需要几个箱子？",
            "formula": "60 ÷ 5 ÷ 4 = ?",
            "answer": 3,
            "choices": [
                3,
                4,
                2,
                12
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 60,
                "parts": [
                    {
                        "label": "箱1",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "箱2",
                        "val": 20,
                        "color": "#F5B800"
                    },
                    {
                        "label": "箱3",
                        "val": 20,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "连除问题",
            "difficulty": 3,
            "hint": "先算60÷5=12袋，再算12÷4=3箱",
            "variants": [
                {
                    "question": "80个每袋4个每箱5袋需几箱？",
                    "formula": "80÷4÷5=?",
                    "answer": 4,
                    "hint": "先除再除"
                },
                {
                    "question": "96个每袋6个每箱4袋需几箱？",
                    "formula": "96÷6÷4=?",
                    "answer": 4,
                    "hint": "先除再除"
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
                    "explain": "题目说「妈妈买了60个苹果，每袋装5个，每箱装4袋。小红算需要几个箱子。」，问的是「需要几个箱子？」，这是求每份是多少"
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
                    "explain": "从题目中找到的关键数是：60、5、4"
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
                    "explain": "除法：60 ÷ 5 ÷ 4 = ?=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表20，合起来就是60",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "60 ÷ 5 ÷ 4 = ?=3",
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
            "id": "3B-PROB-041"
        },
        {
            "scene": "学校买来4盒乒乓球，每盒15个，每个2元。老师算一共花了多少元。",
            "question": "一共花了多少元？",
            "formula": "4 × 15 × 2 = ?",
            "answer": 120,
            "choices": [
                120,
                100,
                140,
                30
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 120,
                "parts": [
                    {
                        "label": "盒1",
                        "val": 30,
                        "color": "#00A896"
                    },
                    {
                        "label": "盒2",
                        "val": 30,
                        "color": "#F5B800"
                    },
                    {
                        "label": "盒3",
                        "val": 30,
                        "color": "#FB923C"
                    },
                    {
                        "label": "盒4",
                        "val": 30,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "连乘问题",
            "difficulty": 3,
            "hint": "先算4×15=60，再算60×2",
            "variants": [
                {
                    "question": "3盒每箱20个每个5元共几元？",
                    "formula": "3×20×5=?",
                    "answer": 300,
                    "hint": "先乘再乘"
                },
                {
                    "question": "5盒每箱12个每个3元共几元？",
                    "formula": "5×12×3=?",
                    "answer": 180,
                    "hint": "先乘再乘"
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
                    "explain": "题目说「学校买来4盒乒乓球，每盒15个，每个2元。老师算一共花了多少元。」，问的是「一共花了多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4 和 15",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4 和 15",
                    "explain": "从题目中找到的关键数是：4、15、2"
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
                    "explain": "乘法：4 × 15 × 2 = ?=120"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表30，合起来就是120",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4 × 15 × 2 = ?=120",
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
            "id": "3B-PROB-042"
        },
        {
            "scene": "小红用1平方厘米的小正方形量指甲盖，大约能放1个。她好奇1平方厘米有多大。",
            "question": "1平方厘米大约有多大？（填1表示指甲盖大小）",
            "formula": "1cm² = ?",
            "answer": 1,
            "choices": [
                1,
                10,
                100,
                5
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 1,
                    "unit": "cm"
                }
            },
            "knowledge": "面积单位",
            "difficulty": 1,
            "hint": "1平方厘米约指甲盖大小",
            "variants": [
                {
                    "question": "1平方分米大约有多大(填1表示手掌)？",
                    "formula": "1dm²=?",
                    "answer": 1,
                    "hint": "约手掌大小"
                },
                {
                    "question": "1平方米大约有多大(填1表示地砖)？",
                    "formula": "1m²=?",
                    "answer": 1,
                    "hint": "约一块地砖"
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
                    "explain": "题目说「小红用1平方厘米的小正方形量指甲盖，大约能放1个。她好奇1平方厘米有多大。」，问的是「1平方厘米大约有多大？（填1表示指甲盖大小）」，这是求计算结果"
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
                    "explain": "计算：1cm² = ?=1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "体对角线² = 长²+宽²+高²，即 8²+6²+2²=64+36+4=104，再用数 bond 图表示分解与组合",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1cm² = ?=1",
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
            "id": "3B-PROB-043"
        },
        {
            "scene": "老师让同学们用1平方厘米的小正方形摆一个长3厘米宽2厘米的长方形。小红要算需要多少个小正方形。",
            "question": "需要多少个1平方厘米的小正方形？",
            "formula": "3 × 2 = ?",
            "answer": 6,
            "choices": [
                6,
                5,
                7,
                8
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 3,
                "b": 2,
                "parts": [
                    6
                ],
                "result": 6
            },
            "knowledge": "面积单位",
            "difficulty": 1,
            "hint": "长乘宽就是面积",
            "variants": [
                {
                    "question": "长4宽3需几个1cm²？",
                    "formula": "4×3=?",
                    "answer": 12,
                    "hint": "长乘宽"
                },
                {
                    "question": "长5宽2需几个1cm²？",
                    "formula": "5×2=?",
                    "answer": 10,
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
                    "explain": "题目说「老师让同学们用1平方厘米的小正方形摆一个长3厘米宽2厘米的长方形。小红要算需要多少个小正方形。」，问的是「需要多少个1平方厘米的小正方形？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：3、2"
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
                    "explain": "乘法：3 × 2 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用3×2的方格区域表示面积，每个小方格代表1，合起来就是6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3 × 2 = ?=6",
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
            "id": "3B-PROB-044"
        },
        {
            "scene": "小亮用1平方分米的正方形量桌面，大约能放20个。他好奇桌面面积大约是多少。",
            "question": "桌面大约多少平方分米？",
            "formula": "20 × 1 = ?",
            "answer": 20,
            "choices": [
                20,
                2,
                200,
                10
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 20,
                "parts": [
                    {
                        "label": "每行5",
                        "val": 5,
                        "color": "#00A896"
                    },
                    {
                        "label": "每行5",
                        "val": 5,
                        "color": "#F5B800"
                    },
                    {
                        "label": "每行5",
                        "val": 5,
                        "color": "#FB923C"
                    },
                    {
                        "label": "每行5",
                        "val": 5,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "面积单位",
            "difficulty": 1,
            "hint": "20个1平方分米就是20平方分米",
            "variants": [
                {
                    "question": "12个1dm²是多少dm²？",
                    "formula": "12×1=?",
                    "answer": 12,
                    "hint": "12个1平方分米"
                },
                {
                    "question": "15个1dm²是多少dm²？",
                    "formula": "15×1=?",
                    "answer": 15,
                    "hint": "15个1平方分米"
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
                    "explain": "题目说「小亮用1平方分米的正方形量桌面，大约能放20个。他好奇桌面面积大约是多少。」，问的是「桌面大约多少平方分米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：20 和 1",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：20 和 1",
                    "explain": "从题目中找到的关键数是：20、1"
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
                    "explain": "乘法：20 × 1 = ?=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表5，合起来就是20",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "20 × 1 = ?=20",
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
            "id": "3B-PROB-045"
        },
        {
            "scene": "爷爷在院子里开垦了一块长方形菜地，长6米、宽4米。他要在菜地里种青菜，想先算算这块地有多大。",
            "question": "菜地的面积是多少平方米？",
            "formula": "6 × 4 = ?",
            "answer": 24,
            "choices": [
                24,
                20,
                28,
                10
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 6,
                    "width": 4
                }
            },
            "knowledge": "长方形面积",
            "difficulty": 2,
            "hint": "面积=长×宽",
            "variants": [
                {
                    "question": "长8宽3面积？",
                    "formula": "8×3=?",
                    "answer": 24,
                    "hint": "长乘宽"
                },
                {
                    "question": "长9宽2面积？",
                    "formula": "9×2=?",
                    "answer": 18,
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
                    "explain": "题目说「爷爷在院子里开垦了一块长方形菜地，长6米、宽4米。他要在菜地里种青菜，想先算算这块地有多大。」，问的是「菜地的面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：6 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：6 和 4",
                    "explain": "从题目中找到的关键数是：6、4"
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
                    "explain": "乘法：6 × 4 = ?=24"
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
                    "text": "6 × 4 = ?=24",
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
            "id": "3B-PROB-046"
        },
        {
            "scene": "学校有一块长方形花圃，长8米、宽5米。园丁要种菊花，先算花圃面积。",
            "question": "花圃的面积是多少平方米？",
            "formula": "8 × 5 = ?",
            "answer": 40,
            "choices": [
                40,
                30,
                45,
                13
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 8,
                    "width": 5
                }
            },
            "knowledge": "长方形面积",
            "difficulty": 2,
            "hint": "面积=长×宽",
            "variants": [
                {
                    "question": "长7宽6面积？",
                    "formula": "7×6=?",
                    "answer": 42,
                    "hint": "长乘宽"
                },
                {
                    "question": "长10宽4面积？",
                    "formula": "10×4=?",
                    "answer": 40,
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
                    "explain": "题目说「学校有一块长方形花圃，长8米、宽5米。园丁要种菊花，先算花圃面积。」，问的是「花圃的面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：8 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：8 和 5",
                    "explain": "从题目中找到的关键数是：8、5"
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
                    "explain": "乘法：8 × 5 = ?=40"
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
                    "text": "8 × 5 = ?=40",
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
            "id": "3B-PROB-047"
        },
        {
            "scene": "学校有一块正方形草坪，边长7米。园丁要算草坪面积。",
            "question": "草坪的面积是多少平方米？",
            "formula": "7 × 7 = ?",
            "answer": 49,
            "choices": [
                49,
                28,
                14,
                42
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 7
                }
            },
            "knowledge": "正方形面积",
            "difficulty": 2,
            "hint": "面积=边长×边长",
            "variants": [
                {
                    "question": "边长8正方形面积？",
                    "formula": "8×8=?",
                    "answer": 64,
                    "hint": "边长乘边长"
                },
                {
                    "question": "边长9正方形面积？",
                    "formula": "9×9=?",
                    "answer": 81,
                    "hint": "边长乘边长"
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
                    "explain": "题目说「学校有一块正方形草坪，边长7米。园丁要算草坪面积。」，问的是「草坪的面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：7 和 7",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：7 和 7",
                    "explain": "从题目中找到的关键数是：7、7"
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
                    "explain": "乘法：7 × 7 = ?=49"
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
                    "text": "7 × 7 = ?=49",
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
            "id": "3B-PROB-048"
        },
        {
            "scene": "小红用1平方厘米的小正方形铺满了一个1平方分米的大正方形。她好奇一共用了多少个小正方形。",
            "question": "1平方分米等于多少平方厘米？",
            "formula": "1dm² = ? cm²",
            "answer": 100,
            "choices": [
                100,
                10,
                1000,
                1
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 10,
                "b": 10,
                "parts": [
                    100
                ],
                "result": 100
            },
            "knowledge": "面积单位进率",
            "difficulty": 2,
            "hint": "1dm=10cm，1dm²=10×10=100cm²",
            "variants": [
                {
                    "question": "2dm²=多少cm²？",
                    "formula": "2dm²=?cm²",
                    "answer": 200,
                    "hint": "2×100"
                },
                {
                    "question": "5dm²=多少cm²？",
                    "formula": "5dm²=?cm²",
                    "answer": 500,
                    "hint": "5×100"
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
                    "explain": "题目说「小红用1平方厘米的小正方形铺满了一个1平方分米的大正方形。她好奇一共用了多少个小正方形。」，问的是「1平方分米等于多少平方厘米？」，这是求计算结果"
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
                    "explain": "计算：1dm² = ? cm²=100"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用10×10的方格区域表示面积，每个小方格代表1，合起来就是100",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1dm² = ? cm²=100",
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
            "id": "3B-PROB-049"
        },
        {
            "scene": "老师让同学们算1平方米等于多少平方分米。小亮用1平方分米的正方形去铺。",
            "question": "1平方米等于多少平方分米？",
            "formula": "1m² = ? dm²",
            "answer": 100,
            "choices": [
                100,
                10,
                1000,
                1
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 10,
                "b": 10,
                "parts": [
                    100
                ],
                "result": 100
            },
            "knowledge": "面积单位进率",
            "difficulty": 2,
            "hint": "1m=10dm，1m²=10×10=100dm²",
            "variants": [
                {
                    "question": "3m²=多少dm²？",
                    "formula": "3m²=?dm²",
                    "answer": 300,
                    "hint": "3×100"
                },
                {
                    "question": "6m²=多少dm²？",
                    "formula": "6m²=?dm²",
                    "answer": 600,
                    "hint": "6×100"
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
                    "explain": "题目说「老师让同学们算1平方米等于多少平方分米。小亮用1平方分米的正方形去铺。」，问的是「1平方米等于多少平方分米？」，这是求计算结果"
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
                    "explain": "计算：1m² = ? dm²=100"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用10×10的方格区域表示面积，每个小方格代表1，合起来就是100",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1m² = ? dm²=100",
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
            "id": "3B-PROB-050"
        },
        {
            "scene": "教室地面面积是8平方米。小红要换算成平方分米来记录。",
            "question": "8平方米等于多少平方分米？",
            "formula": "8 × 100 = ?",
            "answer": 800,
            "choices": [
                800,
                80,
                8000,
                8
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 800,
                "parts": [
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#00A896"
                    },
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#F5B800"
                    },
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#FB923C"
                    },
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "4m²",
                        "val": 400,
                        "color": "#1E3A5F"
                    }
                ]
            },
            "knowledge": "面积单位进率",
            "difficulty": 2,
            "hint": "1m²=100dm²，8m²=800dm²",
            "variants": [
                {
                    "question": "4m²=多少dm²？",
                    "formula": "4×100=?",
                    "answer": 400,
                    "hint": "4×100"
                },
                {
                    "question": "10m²=多少dm²？",
                    "formula": "10×100=?",
                    "answer": 1000,
                    "hint": "10×100"
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
                    "explain": "题目说「教室地面面积是8平方米。小红要换算成平方分米来记录。」，问的是「8平方米等于多少平方分米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：8 和 100",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：8 和 100",
                    "explain": "从题目中找到的关键数是：8、100"
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
                    "explain": "乘法：8 × 100 = ?=800"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有5条等长的条形，每条代表100，合起来就是800",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "8 × 100 = ?=800",
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
            "id": "3B-PROB-051"
        },
        {
            "scene": "小明家装修客厅，客厅长6米、宽4米。用面积1平方米的地砖铺地，要算需要多少块地砖。",
            "question": "需要多少块地砖？",
            "formula": "6 × 4 ÷ 1 = ?",
            "answer": 24,
            "choices": [
                24,
                10,
                20,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 6,
                    "width": 4
                }
            },
            "knowledge": "面积实际问题",
            "difficulty": 3,
            "hint": "先算面积6×4=24，每块1m²需24块",
            "variants": [
                {
                    "question": "长5宽4每块1m²需几块？",
                    "formula": "5×4=?",
                    "answer": 20,
                    "hint": "长乘宽"
                },
                {
                    "question": "长8宽3每块1m²需几块？",
                    "formula": "8×3=?",
                    "answer": 24,
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
                    "explain": "题目说「小明家装修客厅，客厅长6米、宽4米。用面积1平方米的地砖铺地，要算需要多少块地砖。」，问的是「需要多少块地砖？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：6 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：6 和 4",
                    "explain": "从题目中找到的关键数是：6、4、1"
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
                    "explain": "乘法：6 × 4 ÷ 1 = ?=24"
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
                    "text": "6 × 4 ÷ 1 = ?=24",
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
            "id": "3B-PROB-052"
        },
        {
            "scene": "工人要粉刷一面墙，墙长8米、高3米。每桶涂料刷4平方米，要算需要几桶涂料。",
            "question": "需要几桶涂料？",
            "formula": "8 × 3 ÷ 4 = ?",
            "answer": 6,
            "choices": [
                6,
                4,
                8,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 8,
                    "width": 3
                }
            },
            "knowledge": "面积实际问题",
            "difficulty": 3,
            "hint": "先算面积8×3=24，再算24÷4=6",
            "variants": [
                {
                    "question": "长6高3每桶4m²需几桶？",
                    "formula": "6×3÷4=?",
                    "answer": 5,
                    "hint": "先乘再除"
                },
                {
                    "question": "长10高4每桶5m²需几桶？",
                    "formula": "10×4÷5=?",
                    "answer": 8,
                    "hint": "先乘再除"
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
                    "explain": "题目说「工人要粉刷一面墙，墙长8米、高3米。每桶涂料刷4平方米，要算需要几桶涂料。」，问的是「需要几桶涂料？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：8 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：8 和 3",
                    "explain": "从题目中找到的关键数是：8、3、4"
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
                    "explain": "乘法：8 × 3 ÷ 4 = ?=6"
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
                    "text": "8 × 3 ÷ 4 = ?=6",
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
            "id": "3B-PROB-053"
        },
        {
            "scene": "地面长5米、宽4米，用面积2平方米的方砖铺设。要算需要多少块方砖。",
            "question": "需要多少块方砖？",
            "formula": "5 × 4 ÷ 2 = ?",
            "answer": 10,
            "choices": [
                10,
                8,
                12,
                20
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 5,
                    "width": 4
                }
            },
            "knowledge": "面积实际问题",
            "difficulty": 3,
            "hint": "先算面积5×4=20，再算20÷2=10",
            "variants": [
                {
                    "question": "长6宽4每块2m²需几块？",
                    "formula": "6×4÷2=?",
                    "answer": 12,
                    "hint": "先乘再除"
                },
                {
                    "question": "长8宽5每块4m²需几块？",
                    "formula": "8×5÷4=?",
                    "answer": 10,
                    "hint": "先乘再除"
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
                    "explain": "题目说「地面长5米、宽4米，用面积2平方米的方砖铺设。要算需要多少块方砖。」，问的是「需要多少块方砖？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：5、4、2"
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
                    "explain": "乘法：5 × 4 ÷ 2 = ?=10"
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
                    "text": "5 × 4 ÷ 2 = ?=10",
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
            "id": "3B-PROB-054"
        },
        {
            "scene": "小红翻开日历，数了数一年有几个月。她好奇一年到底有多少个月。",
            "question": "一年有多少个月？",
            "formula": "一年 = ? 月",
            "answer": 12,
            "choices": [
                12,
                10,
                24,
                6
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 1,
                "end": 12,
                "points": [
                    {
                        "pos": 1,
                        "label": "1月",
                        "color": "#00A896"
                    },
                    {
                        "pos": 12,
                        "label": "12月",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    1,
                    12
                ]
            },
            "knowledge": "年月日",
            "difficulty": 1,
            "hint": "一年有12个月",
            "variants": [
                {
                    "question": "半年有几个月？",
                    "formula": "半年=?月",
                    "answer": 6,
                    "hint": "12÷2"
                },
                {
                    "question": "一年有几个季度？",
                    "formula": "一年=?季度",
                    "answer": 4,
                    "hint": "春夏秋冬四季"
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
                    "explain": "题目说「小红翻开日历，数了数一年有几个月。她好奇一年到底有多少个月。」，问的是「一年有多少个月？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：12",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：12",
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
                    "explain": "计算：一年 = ? 月=12"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从1到12，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "一年 = ? 月=12",
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
            "id": "3B-PROB-055"
        },
        {
            "scene": "老师让同学们记住大月和小月。大月有31天，小红好奇哪些是大月。",
            "question": "大月有多少天？",
            "formula": "大月 = ? 天",
            "answer": 31,
            "choices": [
                31,
                30,
                28,
                29
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 28,
                "end": 31,
                "points": [
                    {
                        "pos": 31,
                        "label": "大月",
                        "color": "#00A896"
                    }
                ],
                "highlight": [
                    31,
                    31
                ]
            },
            "knowledge": "年月日",
            "difficulty": 1,
            "hint": "大月31天小月30天",
            "variants": [
                {
                    "question": "小月有多少天？",
                    "formula": "小月=?天",
                    "answer": 30,
                    "hint": "小月30天"
                },
                {
                    "question": "二月平年多少天？",
                    "formula": "平年二月=?天",
                    "answer": 28,
                    "hint": "平年28闰年29"
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
                    "explain": "题目说「老师让同学们记住大月和小月。大月有31天，小红好奇哪些是大月。」，问的是「大月有多少天？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：31",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：31",
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
                    "explain": "计算：大月 = ? 天=31"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从28到31，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "大月 = ? 天=31",
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
            "id": "3B-PROB-056"
        },
        {
            "scene": "小亮查日历发现二月有时28天有时29天。老师告诉他平年二月28天，闰年二月29天。",
            "question": "平年二月有多少天？",
            "formula": "平年二月 = ? 天",
            "answer": 28,
            "choices": [
                28,
                29,
                30,
                31
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 28,
                "end": 31,
                "points": [
                    {
                        "pos": 28,
                        "label": "平年",
                        "color": "#00A896"
                    },
                    {
                        "pos": 29,
                        "label": "闰年",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    28,
                    29
                ]
            },
            "knowledge": "年月日",
            "difficulty": 1,
            "hint": "平年28闰年29",
            "variants": [
                {
                    "question": "闰年二月多少天？",
                    "formula": "闰年二月=?天",
                    "answer": 29,
                    "hint": "闰年29天"
                },
                {
                    "question": "平年全年多少天？",
                    "formula": "平年全年=?天",
                    "answer": 365,
                    "hint": "365天"
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
                    "explain": "题目说「小亮查日历发现二月有时28天有时29天。老师告诉他平年二月28天，闰年二月29天。」，问的是「平年二月有多少天？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：28",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：28",
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
                    "explain": "计算：平年二月 = ? 天=28"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从28到31，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平年二月 = ? 天=28",
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
            "id": "3B-PROB-057"
        },
        {
            "scene": "小红看钟表，下午3时她在上体育课。老师告诉她24时计时法下午3时叫15时。小红好奇下午3时是几时。",
            "question": "下午3时等于24时计时法的几时？",
            "formula": "下午3时 = ? 时",
            "answer": 15,
            "choices": [
                15,
                3,
                13,
                14
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 24,
                "points": [
                    {
                        "pos": 3,
                        "label": "凌晨3时",
                        "color": "#00A896"
                    },
                    {
                        "pos": 15,
                        "label": "下午3时",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    24
                ]
            },
            "knowledge": "24时计时法",
            "difficulty": 2,
            "hint": "下午加12",
            "variants": [
                {
                    "question": "下午5时=24时制几时？",
                    "formula": "下午5时=?时",
                    "answer": 17,
                    "hint": "5+12"
                },
                {
                    "question": "下午8时=24时制几时？",
                    "formula": "下午8时=?时",
                    "answer": 20,
                    "hint": "8+12"
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
                    "explain": "题目说「小红看钟表，下午3时她在上体育课。老师告诉她24时计时法下午3时叫15时。小红好奇下午3时是几时。」，问的是「下午3时等于24时计时法的几时？」，这是求计算结果"
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
                    "explain": "从题目中找到的关键数是：3"
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
                    "explain": "计算：下午3时 = ? 时=15"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从到24，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "下午3时 = ? 时=15",
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
            "id": "3B-PROB-058"
        },
        {
            "scene": "小亮晚上8时开始写作业。他用24时计时法记录，想知道晚上8时是几时。",
            "question": "晚上8时等于24时计时法的几时？",
            "formula": "晚上8时 = ? 时",
            "answer": 20,
            "choices": [
                20,
                8,
                18,
                21
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 24,
                "points": [
                    {
                        "pos": 8,
                        "label": "上午8时",
                        "color": "#00A896"
                    },
                    {
                        "pos": 20,
                        "label": "晚上8时",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    24
                ]
            },
            "knowledge": "24时计时法",
            "difficulty": 2,
            "hint": "晚上加12",
            "variants": [
                {
                    "question": "晚上9时=24时制几时？",
                    "formula": "晚上9时=?时",
                    "answer": 21,
                    "hint": "9+12"
                },
                {
                    "question": "晚上10时=24时制几时？",
                    "formula": "晚上10时=?时",
                    "answer": 22,
                    "hint": "10+12"
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
                    "explain": "题目说「小亮晚上8时开始写作业。他用24时计时法记录，想知道晚上8时是几时。」，问的是「晚上8时等于24时计时法的几时？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：8",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：8",
                    "explain": "从题目中找到的关键数是：8"
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
                    "explain": "计算：晚上8时 = ? 时=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从到24，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "晚上8时 = ? 时=20",
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
            "id": "3B-PROB-059"
        },
        {
            "scene": "小芳下午5时放学。她用24时计时法记录放学时间。",
            "question": "下午5时等于24时计时法的几时？",
            "formula": "下午5时 = ? 时",
            "answer": 17,
            "choices": [
                17,
                5,
                15,
                18
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 24,
                "points": [
                    {
                        "pos": 5,
                        "label": "凌晨5时",
                        "color": "#00A896"
                    },
                    {
                        "pos": 17,
                        "label": "下午5时",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    24
                ]
            },
            "knowledge": "24时计时法",
            "difficulty": 2,
            "hint": "下午加12",
            "variants": [
                {
                    "question": "下午6时=24时制几时？",
                    "formula": "下午6时=?时",
                    "answer": 18,
                    "hint": "6+12"
                },
                {
                    "question": "下午7时=24时制几时？",
                    "formula": "下午7时=?时",
                    "answer": 19,
                    "hint": "7+12"
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
                    "explain": "题目说「小芳下午5时放学。她用24时计时法记录放学时间。」，问的是「下午5时等于24时计时法的几时？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：5",
                    "explain": "从题目中找到的关键数是：5"
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
                    "explain": "计算：下午5时 = ? 时=17"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从到24，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "下午5时 = ? 时=17",
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
            "id": "3B-PROB-060"
        },
        {
            "scene": "图书馆9时开门，11时关门。小红想知道图书馆开了几小时。",
            "question": "图书馆开了几小时？",
            "formula": "11 - 9 = ?",
            "answer": 2,
            "choices": [
                2,
                20,
                1,
                3
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 9,
                "end": 11,
                "points": [
                    {
                        "pos": 9,
                        "label": "开门",
                        "color": "#00A896"
                    },
                    {
                        "pos": 11,
                        "label": "关门",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    9,
                    11
                ]
            },
            "knowledge": "计算经过时间",
            "difficulty": 2,
            "hint": "结束时间-开始时间",
            "variants": [
                {
                    "question": "8时到12时经过几时？",
                    "formula": "12-8=?",
                    "answer": 4,
                    "hint": "12减8"
                },
                {
                    "question": "9时到11时经过几时？",
                    "formula": "11-9=?",
                    "answer": 2,
                    "hint": "11减9"
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
                    "explain": "题目说「图书馆9时开门，11时关门。小红想知道图书馆开了几小时。」，问的是「图书馆开了几小时？」，这是求差是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：11 和 9",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：11 和 9",
                    "explain": "从题目中找到的关键数是：11、9"
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
                    "explain": "减法：11 - 9 = ?=2"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从9到11，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "11 - 9 = ?=2",
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
            "id": "3B-PROB-061"
        },
        {
            "scene": "电影14时开始，16时结束。小亮想知道电影放了多少小时。",
            "question": "电影放了多少小时？",
            "formula": "16 - 14 = ?",
            "answer": 2,
            "choices": [
                2,
                4,
                30,
                1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 14,
                "end": 16,
                "points": [
                    {
                        "pos": 14,
                        "label": "开始",
                        "color": "#00A896"
                    },
                    {
                        "pos": 16,
                        "label": "结束",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    14,
                    16
                ]
            },
            "knowledge": "计算经过时间",
            "difficulty": 2,
            "hint": "结束-开始",
            "variants": [
                {
                    "question": "13时到15时经过几时？",
                    "formula": "15-13=?",
                    "answer": 2,
                    "hint": "15减13"
                },
                {
                    "question": "10时到14时经过几时？",
                    "formula": "14-10=?",
                    "answer": 4,
                    "hint": "14减10"
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
                    "explain": "题目说「电影14时开始，16时结束。小亮想知道电影放了多少小时。」，问的是「电影放了多少小时？」，这是求差是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：16 和 14",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：16 和 14",
                    "explain": "从题目中找到的关键数是：16、14"
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
                    "explain": "减法：16 - 14 = ?=2"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从14到16，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "16 - 14 = ?=2",
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
            "id": "3B-PROB-062"
        },
        {
            "scene": "小芳8时到校，17时放学。她想知道一天在学校待了多少小时。",
            "question": "小芳在学校待了多少小时？",
            "formula": "17 - 8 = ?",
            "answer": 9,
            "choices": [
                9,
                8,
                7,
                10
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 8,
                "end": 17,
                "points": [
                    {
                        "pos": 8,
                        "label": "到校",
                        "color": "#00A896"
                    },
                    {
                        "pos": 17,
                        "label": "放学",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    8,
                    17
                ]
            },
            "knowledge": "计算经过时间",
            "difficulty": 2,
            "hint": "结束-开始",
            "variants": [
                {
                    "question": "7时到16时经过几时？",
                    "formula": "16-7=?",
                    "answer": 9,
                    "hint": "16减7"
                },
                {
                    "question": "8时到15时经过几时？",
                    "formula": "15-8=?",
                    "answer": 7,
                    "hint": "15减8"
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
                    "explain": "题目说「小芳8时到校，17时放学。她想知道一天在学校待了多少小时。」，问的是「小芳在学校待了多少小时？」，这是求差是多少"
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
                    "explain": "从题目中找到的关键数是：17、8"
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
                    "explain": "减法：17 - 8 = ?=9"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从8到17，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "17 - 8 = ?=9",
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
            "id": "3B-PROB-063"
        },
        {
            "scene": "小红用1元买了一根冰棒，找回0.3元。她好奇0.3元是多少钱。",
            "question": "0.3等于十分之几？（填分子）",
            "formula": "0.3 = ?/10",
            "answer": 3,
            "choices": [
                3,
                30,
                10,
                1
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 3,
                "total": 10,
                "color": "#00A896"
            },
            "knowledge": "小数初步认识",
            "difficulty": 1,
            "hint": "0.3=3/10",
            "variants": [
                {
                    "question": "0.7=十分之几(填分子)？",
                    "formula": "0.7=?/10",
                    "answer": 7,
                    "hint": "0.7=7/10"
                },
                {
                    "question": "0.5=十分之几(填分子)？",
                    "formula": "0.5=?/10",
                    "answer": 5,
                    "hint": "0.5=5/10"
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
                    "explain": "题目说「小红用1元买了一根冰棒，找回0.3元。她好奇0.3元是多少钱。」，问的是「0.3等于十分之几？（填分子）」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.3 和 10",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.3 和 10",
                    "explain": "从题目中找到的关键数是：0.3、10"
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
                    "explain": "除法：0.3 = ?/10=3"
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
                    "text": "0.3 = ?/10=3",
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
            "id": "3B-PROB-064"
        },
        {
            "scene": "小亮量得自己的铅笔长0.8分米。他想知道0.8等于十分之几。",
            "question": "0.8等于十分之几？（填分子）",
            "formula": "0.8 = ?/10",
            "answer": 8,
            "choices": [
                8,
                80,
                10,
                18
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 8,
                "total": 10,
                "color": "#00A896"
            },
            "knowledge": "小数初步认识",
            "difficulty": 1,
            "hint": "0.8=8/10",
            "variants": [
                {
                    "question": "0.2=十分之几(填分子)？",
                    "formula": "0.2=?/10",
                    "answer": 2,
                    "hint": "0.2=2/10"
                },
                {
                    "question": "0.9=十分之几(填分子)？",
                    "formula": "0.9=?/10",
                    "answer": 9,
                    "hint": "0.9=9/10"
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
                    "explain": "题目说「小亮量得自己的铅笔长0.8分米。他想知道0.8等于十分之几。」，问的是「0.8等于十分之几？（填分子）」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.8 和 10",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.8 和 10",
                    "explain": "从题目中找到的关键数是：0.8、10"
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
                    "explain": "除法：0.8 = ?/10=8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中将整体平均分成10份，取了8份，表示分数8/10",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "0.8 = ?/10=8",
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
            "id": "3B-PROB-065"
        },
        {
            "scene": "小芳的身高是1.2米。她好奇1.2米中的0.2等于十分之几。",
            "question": "0.2等于十分之几？（填分子）",
            "formula": "0.2 = ?/10",
            "answer": 2,
            "choices": [
                2,
                20,
                10,
                12
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 2,
                "total": 10,
                "color": "#00A896"
            },
            "knowledge": "小数初步认识",
            "difficulty": 1,
            "hint": "0.2=2/10",
            "variants": [
                {
                    "question": "0.4=十分之几(填分子)？",
                    "formula": "0.4=?/10",
                    "answer": 4,
                    "hint": "0.4=4/10"
                },
                {
                    "question": "0.6=十分之几(填分子)？",
                    "formula": "0.6=?/10",
                    "answer": 6,
                    "hint": "0.6=6/10"
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
                    "explain": "题目说「小芳的身高是1.2米。她好奇1.2米中的0.2等于十分之几。」，问的是「0.2等于十分之几？（填分子）」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.2 和 10",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.2 和 10",
                    "explain": "从题目中找到的关键数是：0.2、10"
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
                    "explain": "除法：0.2 = ?/10=2"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中将整体平均分成10份，取了2份，表示分数2/10",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "0.2 = ?/10=2",
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
            "id": "3B-PROB-066"
        },
        {
            "scene": "小红跳远跳了0.8米，小亮跳了0.6米。老师问谁跳得更远。",
            "question": "0.8和0.6谁大？（填较大的数的十分位）",
            "formula": "0.8 > 0.?",
            "answer": 6,
            "choices": [
                6,
                8,
                0,
                2
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 1,
                "points": [
                    {
                        "pos": 0.6,
                        "label": "小亮",
                        "color": "#00A896"
                    },
                    {
                        "pos": 0.8,
                        "label": "小红",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    1
                ]
            },
            "knowledge": "小数比较大小",
            "difficulty": 2,
            "hint": "先比整数部分再比小数部分",
            "variants": [
                {
                    "question": "0.3和0.7谁大(填较大十分位)？",
                    "formula": "0.7>0.?",
                    "answer": 3,
                    "hint": "0.7大于0.3"
                },
                {
                    "question": "0.4和0.9谁大(填较大十分位)？",
                    "formula": "0.9>0.?",
                    "answer": 4,
                    "hint": "0.9大于0.4"
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
                    "explain": "题目说「小红跳远跳了0.8米，小亮跳了0.6米。老师问谁跳得更远。」，问的是「0.8和0.6谁大？（填较大的数的十分位）」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.8 和 0",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.8 和 0",
                    "explain": "从题目中找到的关键数是：0.8、0"
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
                    "explain": "计算：0.8 > 0.?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从到1，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "0.8 > 0.?=6",
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
            "id": "3B-PROB-067"
        },
        {
            "scene": "小明的身高是1.2米，小亮是0.9米。老师问谁更高。",
            "question": "1.2和0.9谁大？（填较高身高的十分位）",
            "formula": "1.2 > 0.?",
            "answer": 9,
            "choices": [
                9,
                2,
                0,
                1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 2,
                "points": [
                    {
                        "pos": 0.9,
                        "label": "小亮",
                        "color": "#00A896"
                    },
                    {
                        "pos": 1.2,
                        "label": "小明",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    2
                ]
            },
            "knowledge": "小数比较大小",
            "difficulty": 2,
            "hint": "先比整数部分",
            "variants": [
                {
                    "question": "1.5和0.8谁大(填较高十分位)？",
                    "formula": "1.5>0.?",
                    "answer": 8,
                    "hint": "整数部分1>0"
                },
                {
                    "question": "2.1和1.9谁大(填较大十分位)？",
                    "formula": "2.1>1.?",
                    "answer": 9,
                    "hint": "整数部分2>1"
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
                    "explain": "题目说「小明的身高是1.2米，小亮是0.9米。老师问谁更高。」，问的是「1.2和0.9谁大？（填较高身高的十分位）」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1.2 和 0",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1.2 和 0",
                    "explain": "从题目中找到的关键数是：1.2、0"
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
                    "explain": "计算：1.2 > 0.?=9"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从到2，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1.2 > 0.?=9",
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
            "id": "3B-PROB-068"
        },
        {
            "scene": "一支铅笔0.5元，一块橡皮0.3元。老师问哪个更贵。",
            "question": "0.5和0.3谁大？（填较贵的十分位）",
            "formula": "0.5 > 0.?",
            "answer": 3,
            "choices": [
                3,
                5,
                0,
                8
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 1,
                "points": [
                    {
                        "pos": 0.3,
                        "label": "橡皮",
                        "color": "#00A896"
                    },
                    {
                        "pos": 0.5,
                        "label": "铅笔",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    1
                ]
            },
            "knowledge": "小数比较大小",
            "difficulty": 2,
            "hint": "整数相同比小数部分",
            "variants": [
                {
                    "question": "0.7和0.2谁大(填较大十分位)？",
                    "formula": "0.7>0.?",
                    "answer": 2,
                    "hint": "0.7大于0.2"
                },
                {
                    "question": "0.6和0.4谁大(填较大十分位)？",
                    "formula": "0.6>0.?",
                    "answer": 4,
                    "hint": "0.6大于0.4"
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
                    "explain": "题目说「一支铅笔0.5元，一块橡皮0.3元。老师问哪个更贵。」，问的是「0.5和0.3谁大？（填较贵的十分位）」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.5 和 0",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.5 和 0",
                    "explain": "从题目中找到的关键数是：0.5、0"
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
                    "explain": "计算：0.5 > 0.?=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从到1，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "0.5 > 0.?=3",
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
            "id": "3B-PROB-069"
        },
        {
            "scene": "文具店里一支铅笔2.5元，一块橡皮1.3元。小亮想买这两样文具，他算算一共多少元。",
            "question": "买铅笔和橡皮一共多少元？",
            "formula": "2.5 + 1.3 = ?",
            "answer": 3.8,
            "choices": [
                3.8,
                3.7,
                3.5,
                4.8
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 3.8,
                "parts": [
                    {
                        "label": "铅笔",
                        "val": 2.5,
                        "color": "#00A896"
                    },
                    {
                        "label": "橡皮",
                        "val": 1.3,
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
                    "hint": "满十进一"
                },
                {
                    "question": "1.8+0.7=?",
                    "formula": "1.8+0.7=?",
                    "answer": 2.5,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「文具店里一支铅笔2.5元，一块橡皮1.3元。小亮想买这两样文具，他算算一共多少元。」，问的是「买铅笔和橡皮一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：2.5 和 1.3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：2.5 和 1.3",
                    "explain": "从题目中找到的关键数是：2.5、1.3"
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
                    "explain": "加法：2.5 + 1.3 = ?=3.8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表2.5，合起来就是3.8",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2.5 + 1.3 = ?=3.8",
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
            "id": "3B-PROB-070"
        },
        {
            "scene": "小红有4.2元零花钱，买了一个发卡用去1.5元。她算算还剩多少钱。",
            "question": "小红还剩多少元？",
            "formula": "4.2 - 1.5 = ?",
            "answer": 2.7,
            "choices": [
                2.7,
                3.7,
                2.5,
                3.3
            ],
            "visualType": "numberBond",
            "visualData": {
                "total": 4.2,
                "parts": [
                    {
                        "val": 1.5,
                        "color": "#FB923C"
                    },
                    {
                        "val": 2.7,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "小数加减法",
            "difficulty": 2,
            "hint": "小数点对齐再相减",
            "variants": [
                {
                    "question": "5.3-2.8=?",
                    "formula": "5.3-2.8=?",
                    "answer": 2.5,
                    "hint": "借位减"
                },
                {
                    "question": "3.6-1.8=?",
                    "formula": "3.6-1.8=?",
                    "answer": 1.8,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「小红有4.2元零花钱，买了一个发卡用去1.5元。她算算还剩多少钱。」，问的是「小红还剩多少元？」，这是求差是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4.2 和 1.5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4.2 和 1.5",
                    "explain": "从题目中找到的关键数是：4.2、1.5"
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
                    "explain": "减法：4.2 - 1.5 = ?=2.7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示了部分与整体的关系：1.5 和 2.7 合起来是 4.2",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4.2 - 1.5 = ?=2.7",
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
            "id": "3B-PROB-071"
        },
        {
            "scene": "小亮身高1.3米，爸爸比他高0.5米。他算算爸爸有多高。",
            "question": "爸爸身高多少米？",
            "formula": "1.3 + 0.5 = ?",
            "answer": 1.8,
            "choices": [
                1.8,
                1.4,
                0.8,
                1.5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1.8,
                "parts": [
                    {
                        "label": "小亮",
                        "val": 1.3,
                        "color": "#00A896"
                    },
                    {
                        "label": "高出",
                        "val": 0.5,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "小数加减法",
            "difficulty": 2,
            "hint": "小数点对齐再相加",
            "variants": [
                {
                    "question": "1.5+0.4=?",
                    "formula": "1.5+0.4=?",
                    "answer": 1.9,
                    "hint": "小数点对齐"
                },
                {
                    "question": "2.3+0.6=?",
                    "formula": "2.3+0.6=?",
                    "answer": 2.9,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「小亮身高1.3米，爸爸比他高0.5米。他算算爸爸有多高。」，问的是「爸爸身高多少米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1.3 和 0.5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1.3 和 0.5",
                    "explain": "从题目中找到的关键数是：1.3、0.5"
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
                    "explain": "加法：1.3 + 0.5 = ?=1.8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表1.3，合起来就是1.8",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1.3 + 0.5 = ?=1.8",
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
            "id": "3B-PROB-072"
        },
        {
            "scene": "小红有2件不同颜色的上衣和3条不同款式的裤子，明天春游她想搭配出一套漂亮的衣服。",
            "question": "一共有多少种不同的穿法？",
            "formula": "2 × 3 = ?",
            "answer": 6,
            "choices": [
                6,
                5,
                8,
                3
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6,
                "parts": [
                    {
                        "label": "上衣1配3裤",
                        "val": 3,
                        "color": "#00A896"
                    },
                    {
                        "label": "上衣2配3裤",
                        "val": 3,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "搭配问题",
            "difficulty": 2,
            "hint": "每件上衣配3条裤子",
            "variants": [
                {
                    "question": "3上衣4裤子几种穿法？",
                    "formula": "3×4=?",
                    "answer": 12,
                    "hint": "用乘法"
                },
                {
                    "question": "2上衣5裤子几种穿法？",
                    "formula": "2×5=?",
                    "answer": 10,
                    "hint": "上衣数乘裤子数"
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
                    "explain": "题目说「小红有2件不同颜色的上衣和3条不同款式的裤子，明天春游她想搭配出一套漂亮的衣服。」，问的是「一共有多少种不同的穿法？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：2 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：2 和 3",
                    "explain": "从题目中找到的关键数是：2、3"
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
                    "explain": "乘法：2 × 3 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表3，合起来就是6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2 × 3 = ?=6",
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
            "id": "3B-PROB-073"
        },
        {
            "scene": "小亮有3种主食和2种饮料可选，他要搭配一份早餐。",
            "question": "一共有多少种不同的搭配？",
            "formula": "3 × 2 = ?",
            "answer": 6,
            "choices": [
                6,
                5,
                3,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6,
                "parts": [
                    {
                        "label": "主食1配2饮",
                        "val": 2,
                        "color": "#00A896"
                    },
                    {
                        "label": "主食2配2饮",
                        "val": 2,
                        "color": "#F5B800"
                    },
                    {
                        "label": "主食3配2饮",
                        "val": 2,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "搭配问题",
            "difficulty": 2,
            "hint": "每种主食配2种饮料",
            "variants": [
                {
                    "question": "4主食3饮料几种搭配？",
                    "formula": "4×3=?",
                    "answer": 12,
                    "hint": "用乘法"
                },
                {
                    "question": "2主食4饮料几种搭配？",
                    "formula": "2×4=?",
                    "answer": 8,
                    "hint": "用乘法"
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
                    "explain": "题目说「小亮有3种主食和2种饮料可选，他要搭配一份早餐。」，问的是「一共有多少种不同的搭配？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：3、2"
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
                    "explain": "乘法：3 × 2 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表2，合起来就是6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3 × 2 = ?=6",
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
            "id": "3B-PROB-074"
        },
        {
            "scene": "小芳要从3本书中选2本借回家看，她想知道有多少种选法。",
            "question": "从3本选2本有多少种选法？",
            "formula": "3 × 2 ÷ 2 = ?",
            "answer": 3,
            "choices": [
                3,
                6,
                2,
                1
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 3,
                "parts": [
                    {
                        "label": "选法1",
                        "val": 1,
                        "color": "#00A896"
                    },
                    {
                        "label": "选法2",
                        "val": 1,
                        "color": "#F5B800"
                    },
                    {
                        "label": "选法3",
                        "val": 1,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "搭配问题",
            "difficulty": 2,
            "hint": "3选2有3种选法",
            "variants": [
                {
                    "question": "从4本选2本几种选法？",
                    "formula": "4×3÷2=?",
                    "answer": 6,
                    "hint": "组合数"
                },
                {
                    "question": "从3本选1本几种选法？",
                    "formula": "3=?",
                    "answer": 3,
                    "hint": "3选1有3种"
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
                    "explain": "题目说「小芳要从3本书中选2本借回家看，她想知道有多少种选法。」，问的是「从3本选2本有多少种选法？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：3、2、2"
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
                    "explain": "乘法：3 × 2 ÷ 2 = ?=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表1，合起来就是3",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3 × 2 ÷ 2 = ?=3",
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
            "id": "3B-PROB-075"
        },
        {
            "scene": "早晨小红去上学，太阳从东边升起。她面朝太阳站立，老师问她身后是什么方向。",
            "question": "面朝东方，身后是什么方向？（东1南2西4北5）",
            "formula": "相对方向 = ?",
            "answer": 4,
            "choices": [
                4,
                5,
                2,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "front": "东",
                    "back": "西"
                }
            },
            "knowledge": "认识东南西北",
            "difficulty": 1,
            "hint": "东和西是相对的",
            "variants": [
                {
                    "question": "面朝南身后是什么方向(东1南2西4北5)？",
                    "formula": "相对方向=?",
                    "answer": 5,
                    "hint": "南北相对"
                },
                {
                    "question": "面朝北身后是什么方向(东1南2西4北5)？",
                    "formula": "相对方向=?",
                    "answer": 2,
                    "hint": "南北相对"
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
                    "explain": "题目说「早晨小红去上学，太阳从东边升起。她面朝太阳站立，老师问她身后是什么方向。」，问的是「面朝东方，身后是什么方向？（东1南2西4北5）」，这是求计算结果"
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
                    "explain": "计算：相对方向 = ?=4"
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
                    "text": "相对方向 = ?=4",
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
            "id": "3B-PROB-076"
        },
        {
            "scene": "早晨小红去上学，太阳从东边升起。她面朝太阳站立，老师问她身后是什么方向。",
            "question": "面朝东方，身后是什么方向？（东1南2西2北4）",
            "formula": "相对方向 = ?",
            "answer": 2,
            "choices": [
                2,
                4,
                2,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "front": "东",
                    "back": "西"
                }
            },
            "knowledge": "认识东南西北",
            "difficulty": 1,
            "hint": "东和西是相对的",
            "variants": [
                {
                    "question": "面朝南身后是什么方向(东1南2西2北4)？",
                    "formula": "相对方向=?",
                    "answer": 4,
                    "hint": "南北相对"
                },
                {
                    "question": "面朝北身后是什么方向(东1南2西2北4)？",
                    "formula": "相对方向=?",
                    "answer": 2,
                    "hint": "南北相对"
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
                    "explain": "题目说「早晨小红去上学，太阳从东边升起。她面朝太阳站立，老师问她身后是什么方向。」，问的是「面朝东方，身后是什么方向？（东1南2西2北4）」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：2",
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
                    "explain": "计算：相对方向 = ?=2"
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
                    "text": "相对方向 = ?=2",
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
            "id": "3B-PROB-077"
        },
        {
            "scene": "地图上方的方向是北。小亮看地图，知道北京在地图上方，他好奇北京在什么方向。",
            "question": "地图上\"上\"是什么方向？（东1南3西4北6）",
            "formula": "上方方向 = ?",
            "answer": 6,
            "choices": [
                6,
                3,
                4,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "up": "北"
                }
            },
            "knowledge": "认识东南西北",
            "difficulty": 1,
            "hint": "上北下南左西右东",
            "variants": [
                {
                    "question": "地图下方是什么方向(东1南3西4北6)？",
                    "formula": "下方方向=?",
                    "answer": 3,
                    "hint": "上北下南"
                },
                {
                    "question": "地图左方是什么方向(东1南3西4北6)？",
                    "formula": "左方方向=?",
                    "answer": 4,
                    "hint": "左西右东"
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
                    "explain": "题目说「地图上方的方向是北。小亮看地图，知道北京在地图上方，他好奇北京在什么方向。」，问的是「地图上\"上\"是什么方向？（东1南3西4北6）」，这是求计算结果"
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
                    "explain": "计算：上方方向 = ?=6"
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
                    "text": "上方方向 = ?=6",
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
            "id": "3B-PROB-078"
        },
        {
            "scene": "地图上方的方向是北。小亮看地图，知道北京在地图上方，他好奇北京在什么方向。",
            "question": "地图上\"上\"是什么方向？（东1南3西3北5）",
            "formula": "上方方向 = ?",
            "answer": 5,
            "choices": [
                5,
                3,
                3,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "up": "北"
                }
            },
            "knowledge": "认识东南西北",
            "difficulty": 1,
            "hint": "上北下南左西右东",
            "variants": [
                {
                    "question": "地图下方是什么方向(东1南3西3北5)？",
                    "formula": "下方方向=?",
                    "answer": 3,
                    "hint": "上北下南"
                },
                {
                    "question": "地图左方是什么方向(东1南3西3北5)？",
                    "formula": "左方方向=?",
                    "answer": 3,
                    "hint": "左西右东"
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
                    "explain": "题目说「地图上方的方向是北。小亮看地图，知道北京在地图上方，他好奇北京在什么方向。」，问的是「地图上\"上\"是什么方向？（东1南3西3北5）」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：5",
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
                    "explain": "计算：上方方向 = ?=5"
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
                    "text": "上方方向 = ?=5",
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
            "id": "3B-PROB-079"
        },
        {
            "scene": "放学时太阳从西方落下。小红背着书包回家，她面朝西方走。老师问她左手边是什么方向。",
            "question": "面朝西方，左手边是什么方向？（东1南2西4北4）",
            "formula": "左手方向 = ?",
            "answer": 2,
            "choices": [
                2,
                4,
                1,
                4
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "front": "西",
                    "left": "南"
                }
            },
            "knowledge": "认识东南西北",
            "difficulty": 1,
            "hint": "面西左南右北",
            "variants": [
                {
                    "question": "面朝东左手是什么方向(东1南2西4北4)？",
                    "formula": "左手方向=?",
                    "answer": 4,
                    "hint": "面东左北右南"
                },
                {
                    "question": "面朝南左手是什么方向(东1南2西4北4)？",
                    "formula": "左手方向=?",
                    "answer": 4,
                    "hint": "面南左东右西"
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
                    "explain": "题目说「放学时太阳从西方落下。小红背着书包回家，她面朝西方走。老师问她左手边是什么方向。」，问的是「面朝西方，左手边是什么方向？（东1南2西4北4）」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：2",
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
                    "explain": "计算：左手方向 = ?=2"
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
                    "text": "左手方向 = ?=2",
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
            "id": "3B-PROB-080"
        },
        {
            "scene": "放学时太阳从西方落下。小红背着书包回家，她面朝西方走。老师问她左手边是什么方向。",
            "question": "面朝西方，左手边是什么方向？（东1南2西3北6）",
            "formula": "左手方向 = ?",
            "answer": 2,
            "choices": [
                2,
                6,
                1,
                3
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "front": "西",
                    "left": "南"
                }
            },
            "knowledge": "认识东南西北",
            "difficulty": 1,
            "hint": "面西左南右北",
            "variants": [
                {
                    "question": "面朝东左手是什么方向(东1南2西3北6)？",
                    "formula": "左手方向=?",
                    "answer": 6,
                    "hint": "面东左北右南"
                },
                {
                    "question": "面朝南左手是什么方向(东1南2西3北6)？",
                    "formula": "左手方向=?",
                    "answer": 3,
                    "hint": "面南左东右西"
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
                    "explain": "题目说「放学时太阳从西方落下。小红背着书包回家，她面朝西方走。老师问她左手边是什么方向。」，问的是「面朝西方，左手边是什么方向？（东1南2西3北6）」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：2",
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
                    "explain": "计算：左手方向 = ?=2"
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
                    "text": "左手方向 = ?=2",
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
            "id": "3B-PROB-081"
        },
        {
            "scene": "小亮站在操场中心，老师告诉他东和北之间的方向叫东北。他好奇东和南之间叫什么方向。",
            "question": "东和南之间是什么方向？（东南1东北2西南4西北5）",
            "formula": "东和南之间 = ?",
            "answer": 1,
            "choices": [
                1,
                2,
                4,
                5
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "between": "东南"
                }
            },
            "knowledge": "认识八个方向",
            "difficulty": 2,
            "hint": "东和南之间叫东南",
            "variants": [
                {
                    "question": "西和北之间是什么方向(东南1东北2西南4西北5)？",
                    "formula": "西和北之间=?",
                    "answer": 5,
                    "hint": "西北"
                },
                {
                    "question": "西和南之间是什么方向(东南1东北2西南4西北5)？",
                    "formula": "西和南之间=?",
                    "answer": 4,
                    "hint": "西南"
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
                    "explain": "题目说「小亮站在操场中心，老师告诉他东和北之间的方向叫东北。他好奇东和南之间叫什么方向。」，问的是「东和南之间是什么方向？（东南1东北2西南4西北5）」，这是求计算结果"
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
                    "explain": "计算：东和南之间 = ?=1"
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
                    "text": "东和南之间 = ?=1",
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
            "id": "3B-PROB-082"
        },
        {
            "scene": "小亮站在操场中心，老师告诉他东和北之间的方向叫东北。他好奇东和南之间叫什么方向。",
            "question": "东和南之间是什么方向？（东南1东北3西南3西北4）",
            "formula": "东和南之间 = ?",
            "answer": 1,
            "choices": [
                1,
                3,
                3,
                4
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "between": "东南"
                }
            },
            "knowledge": "认识八个方向",
            "difficulty": 2,
            "hint": "东和南之间叫东南",
            "variants": [
                {
                    "question": "西和北之间是什么方向(东南1东北3西南3西北4)？",
                    "formula": "西和北之间=?",
                    "answer": 4,
                    "hint": "西北"
                },
                {
                    "question": "西和南之间是什么方向(东南1东北3西南3西北4)？",
                    "formula": "西和南之间=?",
                    "answer": 3,
                    "hint": "西南"
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
                    "explain": "题目说「小亮站在操场中心，老师告诉他东和北之间的方向叫东北。他好奇东和南之间叫什么方向。」，问的是「东和南之间是什么方向？（东南1东北3西南3西北4）」，这是求计算结果"
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
                    "explain": "计算：东和南之间 = ?=1"
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
                    "text": "东和南之间 = ?=1",
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
            "id": "3B-PROB-083"
        },
        {
            "scene": "小红看学校地图，图书馆在教学楼的东北方向。她好奇教学楼的什么方向是西北。",
            "question": "教学楼的西北方向是哪个？（东南1东北3西南3西北6）",
            "formula": "西北 = ?",
            "answer": 6,
            "choices": [
                6,
                3,
                2,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "direction": "西北"
                }
            },
            "knowledge": "认识八个方向",
            "difficulty": 2,
            "hint": "西和北之间叫西北",
            "variants": [
                {
                    "question": "东南方向是哪个(东南1东北3西南3西北6)？",
                    "formula": "东南=?",
                    "answer": 1,
                    "hint": "东和南之间"
                },
                {
                    "question": "东北方向是哪个(东南1东北3西南3西北6)？",
                    "formula": "东北=?",
                    "answer": 3,
                    "hint": "东和北之间"
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
                    "explain": "题目说「小红看学校地图，图书馆在教学楼的东北方向。她好奇教学楼的什么方向是西北。」，问的是「教学楼的西北方向是哪个？（东南1东北3西南3西北6）」，这是求计算结果"
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
                    "explain": "计算：西北 = ?=6"
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
                    "text": "西北 = ?=6",
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
            "id": "3B-PROB-084"
        },
        {
            "scene": "小红看学校地图，图书馆在教学楼的东北方向。她好奇教学楼的什么方向是西北。",
            "question": "教学楼的西北方向是哪个？（东南1东北2西南3西北5）",
            "formula": "西北 = ?",
            "answer": 5,
            "choices": [
                5,
                2,
                3,
                1
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "direction": "西北"
                }
            },
            "knowledge": "认识八个方向",
            "difficulty": 2,
            "hint": "西和北之间叫西北",
            "variants": [
                {
                    "question": "东南方向是哪个(东南1东北2西南3西北5)？",
                    "formula": "东南=?",
                    "answer": 1,
                    "hint": "东和南之间"
                },
                {
                    "question": "东北方向是哪个(东南1东北2西南3西北5)？",
                    "formula": "东北=?",
                    "answer": 2,
                    "hint": "东和北之间"
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
                    "explain": "题目说「小红看学校地图，图书馆在教学楼的东北方向。她好奇教学楼的什么方向是西北。」，问的是「教学楼的西北方向是哪个？（东南1东北2西南3西北5）」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：5",
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
                    "explain": "计算：西北 = ?=5"
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
                    "text": "西北 = ?=5",
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
            "id": "3B-PROB-085"
        },
        {
            "scene": "小明家在学校的西南方向。老师让同学们在图上标出小明家的位置，并说出西南是哪两个方向之间。",
            "question": "西南是哪两个方向之间？（东南1东北5西南3西北4）",
            "formula": "西南 = ?",
            "answer": 3,
            "choices": [
                3,
                4,
                1,
                5
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "direction": "西南"
                }
            },
            "knowledge": "认识八个方向",
            "difficulty": 2,
            "hint": "西和南之间叫西南",
            "variants": [
                {
                    "question": "西北是哪两个方向之间(东南1东北5西南3西北4)？",
                    "formula": "西北=?",
                    "answer": 4,
                    "hint": "西和北之间"
                },
                {
                    "question": "东北是哪两个方向之间(东南1东北5西南3西北4)？",
                    "formula": "东北=?",
                    "answer": 5,
                    "hint": "东和北之间"
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
                    "explain": "题目说「小明家在学校的西南方向。老师让同学们在图上标出小明家的位置，并说出西南是哪两个方向之间。」，问的是「西南是哪两个方向之间？（东南1东北5西南3西北4）」，这是求计算结果"
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
                    "explain": "计算：西南 = ?=3"
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
                    "text": "西南 = ?=3",
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
            "id": "3B-PROB-086"
        },
        {
            "scene": "小明家在学校的西南方向。老师让同学们在图上标出小明家的位置，并说出西南是哪两个方向之间。",
            "question": "西南是哪两个方向之间？（东南1东北2西南3西北6）",
            "formula": "西南 = ?",
            "answer": 3,
            "choices": [
                3,
                6,
                1,
                2
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "compass",
                "params": {
                    "direction": "西南"
                }
            },
            "knowledge": "认识八个方向",
            "difficulty": 2,
            "hint": "西和南之间叫西南",
            "variants": [
                {
                    "question": "西北是哪两个方向之间(东南1东北2西南3西北6)？",
                    "formula": "西北=?",
                    "answer": 6,
                    "hint": "西和北之间"
                },
                {
                    "question": "东北是哪两个方向之间(东南1东北2西南3西北6)？",
                    "formula": "东北=?",
                    "answer": 2,
                    "hint": "东和北之间"
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
                    "explain": "题目说「小明家在学校的西南方向。老师让同学们在图上标出小明家的位置，并说出西南是哪两个方向之间。」，问的是「西南是哪两个方向之间？（东南1东北2西南3西北6）」，这是求计算结果"
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
                    "explain": "计算：西南 = ?=3"
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
                    "text": "西南 = ?=3",
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
            "id": "3B-PROB-087"
        },
        {
            "scene": "妈妈买了85颗草莓，平均装进3个盒子里。小红帮忙分装，她想知道每盒装几颗。",
            "question": "每盒装几颗草莓？",
            "formula": "85 ÷ 3 = ?",
            "answer": 28,
            "choices": [
                28,
                30,
                15,
                180
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 85,
                "parts": [
                    {
                        "label": "盒1",
                        "val": 28,
                        "color": "#00A896"
                    },
                    {
                        "label": "盒2",
                        "val": 28,
                        "color": "#F5B800"
                    },
                    {
                        "label": "盒3",
                        "val": 29,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "口算除法",
            "difficulty": 2,
            "hint": "6÷3=2添一个0",
            "variants": [
                {
                    "question": "80÷4=?",
                    "formula": "80÷4=?",
                    "answer": 20,
                    "hint": "8÷4=2添0"
                },
                {
                    "question": "90÷3=?",
                    "formula": "90÷3=?",
                    "answer": 30,
                    "hint": "9÷3=3添0"
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
                    "explain": "题目说「妈妈买了85颗草莓，平均装进3个盒子里。小红帮忙分装，她想知道每盒装几颗。」，问的是「每盒装几颗草莓？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：85 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：85 和 3",
                    "explain": "从题目中找到的关键数是：85、3"
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
                    "explain": "除法：85 ÷ 3 = ?=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表28，合起来就是85",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "85 ÷ 3 = ?=20",
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
            "id": "3B-PROB-088"
        },
        {
            "scene": "妈妈买了49颗草莓，平均装进4个盒子里。小红帮忙分装，她想知道每盒装几颗。",
            "question": "每盒装几颗草莓？",
            "formula": "49 ÷ 4 = ?",
            "answer": 12,
            "choices": [
                12,
                30,
                15,
                180
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 49,
                "parts": [
                    {
                        "label": "盒1",
                        "val": 16,
                        "color": "#00A896"
                    },
                    {
                        "label": "盒2",
                        "val": 16,
                        "color": "#F5B800"
                    },
                    {
                        "label": "盒3",
                        "val": 17,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "口算除法",
            "difficulty": 2,
            "hint": "6÷4=2添一个0",
            "variants": [
                {
                    "question": "80÷4=?",
                    "formula": "80÷4=?",
                    "answer": 20,
                    "hint": "8÷4=2添0"
                },
                {
                    "question": "90÷4=?",
                    "formula": "90÷4=?",
                    "answer": 30,
                    "hint": "9÷4=4添0"
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
                    "explain": "题目说「妈妈买了49颗草莓，平均装进4个盒子里。小红帮忙分装，她想知道每盒装几颗。」，问的是「每盒装几颗草莓？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：49 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：49 和 4",
                    "explain": "从题目中找到的关键数是：49、4"
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
                    "explain": "除法：49 ÷ 4 = ?=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表16，合起来就是49",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "49 ÷ 4 = ?=20",
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
            "id": "3B-PROB-089"
        },
        {
            "scene": "学校买了396本练习本，平均分给2个年级。教务处要算每个年级分多少本。",
            "question": "每个年级分多少本？",
            "formula": "396 ÷ 2 = ?",
            "answer": 198,
            "choices": [
                198,
                100,
                300,
                402
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 396,
                "parts": [
                    {
                        "label": "年级1",
                        "val": 198,
                        "color": "#00A896"
                    },
                    {
                        "label": "年级2",
                        "val": 198,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "口算除法",
            "difficulty": 2,
            "hint": "4÷2=2添两个0",
            "variants": [
                {
                    "question": "600÷3=?",
                    "formula": "600÷3=?",
                    "answer": 200,
                    "hint": "6÷3=2添两个0"
                },
                {
                    "question": "800÷4=?",
                    "formula": "800÷4=?",
                    "answer": 200,
                    "hint": "8÷4=2添两个0"
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
                    "explain": "题目说「学校买了396本练习本，平均分给2个年级。教务处要算每个年级分多少本。」，问的是「每个年级分多少本？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：396 和 2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：396 和 2",
                    "explain": "从题目中找到的关键数是：396、2"
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
                    "explain": "除法：396 ÷ 2 = ?=200"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表198，合起来就是396",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "396 ÷ 2 = ?=200",
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
            "id": "3B-PROB-090"
        },
        {
            "scene": "学校买了436本练习本，平均分给2个年级。教务处要算每个年级分多少本。",
            "question": "每个年级分多少本？",
            "formula": "436 ÷ 2 = ?",
            "answer": 218,
            "choices": [
                218,
                100,
                300,
                402
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 436,
                "parts": [
                    {
                        "label": "年级1",
                        "val": 218,
                        "color": "#00A896"
                    },
                    {
                        "label": "年级2",
                        "val": 218,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "口算除法",
            "difficulty": 2,
            "hint": "4÷2=2添两个0",
            "variants": [
                {
                    "question": "600÷3=?",
                    "formula": "600÷3=?",
                    "answer": 200,
                    "hint": "6÷3=2添两个0"
                },
                {
                    "question": "800÷4=?",
                    "formula": "800÷4=?",
                    "answer": 200,
                    "hint": "8÷4=2添两个0"
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
                    "explain": "题目说「学校买了436本练习本，平均分给2个年级。教务处要算每个年级分多少本。」，问的是「每个年级分多少本？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：436 和 2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：436 和 2",
                    "explain": "从题目中找到的关键数是：436、2"
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
                    "explain": "除法：436 ÷ 2 = ?=200"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表218，合起来就是436",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "436 ÷ 2 = ?=200",
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
            "id": "3B-PROB-091"
        },
        {
            "scene": "体育老师有101个皮球，平均分给4个班。他要算每个班分到几个皮球。",
            "question": "每个班分到几个皮球？",
            "formula": "101 ÷ 4 = ?",
            "answer": 25,
            "choices": [
                25,
                40,
                10,
                320
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 101,
                "parts": [
                    {
                        "label": "班1",
                        "val": 25,
                        "color": "#00A896"
                    },
                    {
                        "label": "班2",
                        "val": 25,
                        "color": "#F5B800"
                    },
                    {
                        "label": "班3",
                        "val": 25,
                        "color": "#FB923C"
                    },
                    {
                        "label": "班4",
                        "val": 26,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "口算除法",
            "difficulty": 2,
            "hint": "8÷4=2添一个0",
            "variants": [
                {
                    "question": "60÷2=?",
                    "formula": "60÷2=?",
                    "answer": 30,
                    "hint": "6÷2=3添0"
                },
                {
                    "question": "100÷5=?",
                    "formula": "100÷5=?",
                    "answer": 20,
                    "hint": "10÷5=2添0"
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
                    "explain": "题目说「体育老师有101个皮球，平均分给4个班。他要算每个班分到几个皮球。」，问的是「每个班分到几个皮球？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：101 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：101 和 4",
                    "explain": "从题目中找到的关键数是：101、4"
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
                    "explain": "除法：101 ÷ 4 = ?=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表25，合起来就是101",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "101 ÷ 4 = ?=20",
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
            "id": "3B-PROB-092"
        },
        {
            "scene": "体育老师有109个皮球，平均分给5个班。他要算每个班分到几个皮球。",
            "question": "每个班分到几个皮球？",
            "formula": "109 ÷ 5 = ?",
            "answer": 21,
            "choices": [
                21,
                40,
                10,
                320
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 109,
                "parts": [
                    {
                        "label": "班1",
                        "val": 27,
                        "color": "#00A896"
                    },
                    {
                        "label": "班2",
                        "val": 27,
                        "color": "#F5B800"
                    },
                    {
                        "label": "班3",
                        "val": 27,
                        "color": "#FB923C"
                    },
                    {
                        "label": "班4",
                        "val": 28,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "口算除法",
            "difficulty": 2,
            "hint": "8÷5=2添一个0",
            "variants": [
                {
                    "question": "60÷2=?",
                    "formula": "60÷2=?",
                    "answer": 30,
                    "hint": "6÷2=3添0"
                },
                {
                    "question": "100÷5=?",
                    "formula": "100÷5=?",
                    "answer": 20,
                    "hint": "10÷5=2添0"
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
                    "explain": "题目说「体育老师有109个皮球，平均分给5个班。他要算每个班分到几个皮球。」，问的是「每个班分到几个皮球？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：109 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：109 和 5",
                    "explain": "从题目中找到的关键数是：109、5"
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
                    "explain": "除法：109 ÷ 5 = ?=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表27，合起来就是109",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "109 ÷ 5 = ?=20",
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
            "id": "3B-PROB-093"
        },
        {
            "scene": "妈妈买了80颗新鲜的草莓，要平均装进5个盒子。小红帮忙分装，她想知道每个盒子装几颗。",
            "question": "每个盒子装几颗草莓？",
            "formula": "80 ÷ 5 = ?",
            "answer": 16,
            "choices": [
                16,
                22,
                25,
                23
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 80,
                "parts": [
                    {
                        "label": "盒1",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "盒2",
                        "val": 20,
                        "color": "#F5B800"
                    },
                    {
                        "label": "盒3",
                        "val": 20,
                        "color": "#FB923C"
                    },
                    {
                        "label": "盒4",
                        "val": 20,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "笔算除法",
            "difficulty": 2,
            "hint": "80÷5=20，16÷5=5",
            "variants": [
                {
                    "question": "85÷5=?",
                    "formula": "85÷5=?",
                    "answer": 21,
                    "hint": "80÷5加5÷5"
                },
                {
                    "question": "108÷5=?",
                    "formula": "108÷5=?",
                    "answer": 27,
                    "hint": "100÷5加8÷5"
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
                    "explain": "题目说「妈妈买了80颗新鲜的草莓，要平均装进5个盒子。小红帮忙分装，她想知道每个盒子装几颗。」，问的是「每个盒子装几颗草莓？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：80 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：80 和 5",
                    "explain": "从题目中找到的关键数是：80、5"
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
                    "explain": "除法：80 ÷ 5 = ?=24"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表20，合起来就是80",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "80 ÷ 5 = ?=24",
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
            "id": "3B-PROB-094"
        },
        {
            "scene": "妈妈买了89颗新鲜的草莓，要平均装进5个盒子。小红帮忙分装，她想知道每个盒子装几颗。",
            "question": "每个盒子装几颗草莓？",
            "formula": "89 ÷ 5 = ?",
            "answer": 17,
            "choices": [
                17,
                22,
                25,
                23
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 89,
                "parts": [
                    {
                        "label": "盒1",
                        "val": 22,
                        "color": "#00A896"
                    },
                    {
                        "label": "盒2",
                        "val": 22,
                        "color": "#F5B800"
                    },
                    {
                        "label": "盒3",
                        "val": 22,
                        "color": "#FB923C"
                    },
                    {
                        "label": "盒4",
                        "val": 23,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "笔算除法",
            "difficulty": 2,
            "hint": "80÷5=20，16÷5=5",
            "variants": [
                {
                    "question": "85÷5=?",
                    "formula": "85÷5=?",
                    "answer": 21,
                    "hint": "80÷5加5÷5"
                },
                {
                    "question": "108÷5=?",
                    "formula": "108÷5=?",
                    "answer": 27,
                    "hint": "100÷5加8÷5"
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
                    "explain": "题目说「妈妈买了89颗新鲜的草莓，要平均装进5个盒子。小红帮忙分装，她想知道每个盒子装几颗。」，问的是「每个盒子装几颗草莓？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：89 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：89 和 5",
                    "explain": "从题目中找到的关键数是：89、5"
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
                    "explain": "除法：89 ÷ 5 = ?=24"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表22，合起来就是89",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "89 ÷ 5 = ?=24",
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
            "id": "3B-PROB-095"
        },
        {
            "scene": "学校有92名同学参加跳绳比赛，平均分成4组。体育老师要算每组有多少人。",
            "question": "每组有多少人？",
            "formula": "92 ÷ 4 = ?",
            "answer": 23,
            "choices": [
                23,
                24,
                21,
                27
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 92,
                "parts": [
                    {
                        "label": "组1",
                        "val": 31,
                        "color": "#00A896"
                    },
                    {
                        "label": "组2",
                        "val": 31,
                        "color": "#F5B800"
                    },
                    {
                        "label": "组3",
                        "val": 30,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "笔算除法",
            "difficulty": 2,
            "hint": "60÷4=20，24÷4=8",
            "variants": [
                {
                    "question": "78÷4=?",
                    "formula": "78÷4=?",
                    "answer": 26,
                    "hint": "60÷4加18÷4"
                },
                {
                    "question": "94÷4=?",
                    "formula": "94÷4=?",
                    "answer": 31,
                    "hint": "90÷4加4÷4"
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
                    "explain": "题目说「学校有92名同学参加跳绳比赛，平均分成4组。体育老师要算每组有多少人。」，问的是「每组有多少人？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：92 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：92 和 4",
                    "explain": "从题目中找到的关键数是：92、4"
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
                    "explain": "除法：92 ÷ 4 = ?=28"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表31，合起来就是92",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "92 ÷ 4 = ?=28",
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
            "id": "3B-PROB-096"
        },
        {
            "scene": "学校有101名同学参加跳绳比赛，平均分成4组。体育老师要算每组有多少人。",
            "question": "每组有多少人？",
            "formula": "101 ÷ 4 = ?",
            "answer": 25,
            "choices": [
                25,
                24,
                21,
                27
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 101,
                "parts": [
                    {
                        "label": "组1",
                        "val": 34,
                        "color": "#00A896"
                    },
                    {
                        "label": "组2",
                        "val": 34,
                        "color": "#F5B800"
                    },
                    {
                        "label": "组3",
                        "val": 33,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "笔算除法",
            "difficulty": 2,
            "hint": "60÷4=20，24÷4=8",
            "variants": [
                {
                    "question": "78÷4=?",
                    "formula": "78÷4=?",
                    "answer": 26,
                    "hint": "60÷4加18÷4"
                },
                {
                    "question": "94÷4=?",
                    "formula": "94÷4=?",
                    "answer": 31,
                    "hint": "90÷4加4÷4"
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
                    "explain": "题目说「学校有101名同学参加跳绳比赛，平均分成4组。体育老师要算每组有多少人。」，问的是「每组有多少人？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：101 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：101 和 4",
                    "explain": "从题目中找到的关键数是：101、4"
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
                    "explain": "除法：101 ÷ 4 = ?=28"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表34，合起来就是101",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "101 ÷ 4 = ?=28",
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
            "id": "3B-PROB-097"
        },
        {
            "scene": "小芳有103张画片，平均分给6个好朋友。她要算每个朋友分到多少张画片。",
            "question": "每个朋友分到多少张画片？",
            "formula": "103 ÷ 6 = ?",
            "answer": 17,
            "choices": [
                17,
                25,
                10,
                35
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 103,
                "parts": [
                    {
                        "label": "友1",
                        "val": 21,
                        "color": "#00A896"
                    },
                    {
                        "label": "友2",
                        "val": 21,
                        "color": "#F5B800"
                    },
                    {
                        "label": "友3",
                        "val": 21,
                        "color": "#FB923C"
                    },
                    {
                        "label": "友4",
                        "val": 21,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "友5",
                        "val": 19,
                        "color": "#1E3A5F"
                    }
                ]
            },
            "knowledge": "笔算除法",
            "difficulty": 2,
            "hint": "60÷6=10，26÷6=6",
            "variants": [
                {
                    "question": "66÷6=?",
                    "formula": "66÷6=?",
                    "answer": 13,
                    "hint": "60÷6加16÷6"
                },
                {
                    "question": "86÷6=?",
                    "formula": "86÷6=?",
                    "answer": 17,
                    "hint": "60÷6加36÷6"
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
                    "explain": "题目说「小芳有103张画片，平均分给6个好朋友。她要算每个朋友分到多少张画片。」，问的是「每个朋友分到多少张画片？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：103 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：103 和 6",
                    "explain": "从题目中找到的关键数是：103、6"
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
                    "explain": "除法：103 ÷ 6 = ?=15"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有5条等长的条形，每条代表21，合起来就是103",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "103 ÷ 6 = ?=15",
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
            "id": "3B-PROB-098"
        },
        {
            "scene": "小芳有110张画片，平均分给7个好朋友。她要算每个朋友分到多少张画片。",
            "question": "每个朋友分到多少张画片？",
            "formula": "110 ÷ 7 = ?",
            "answer": 15,
            "choices": [
                15,
                25,
                10,
                35
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 110,
                "parts": [
                    {
                        "label": "友1",
                        "val": 22,
                        "color": "#00A896"
                    },
                    {
                        "label": "友2",
                        "val": 22,
                        "color": "#F5B800"
                    },
                    {
                        "label": "友3",
                        "val": 22,
                        "color": "#FB923C"
                    },
                    {
                        "label": "友4",
                        "val": 22,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "友5",
                        "val": 22,
                        "color": "#1E3A5F"
                    }
                ]
            },
            "knowledge": "笔算除法",
            "difficulty": 2,
            "hint": "70÷7=10，27÷7=7",
            "variants": [
                {
                    "question": "67÷7=?",
                    "formula": "67÷7=?",
                    "answer": 13,
                    "hint": "70÷7加17÷7"
                },
                {
                    "question": "87÷7=?",
                    "formula": "87÷7=?",
                    "answer": 17,
                    "hint": "70÷7加37÷7"
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
                    "explain": "题目说「小芳有110张画片，平均分给7个好朋友。她要算每个朋友分到多少张画片。」，问的是「每个朋友分到多少张画片？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：110 和 7",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：110 和 7",
                    "explain": "从题目中找到的关键数是：110、7"
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
                    "explain": "除法：110 ÷ 7 = ?=15"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有5条等长的条形，每条代表22，合起来就是110",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "110 ÷ 7 = ?=15",
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
            "id": "3B-PROB-099"
        },
        {
            "scene": "图书馆有447本新书，平均放在4个书架上。管理员要算每个书架放多少本。",
            "question": "每个书架放多少本？",
            "formula": "447 ÷ 4 = ?",
            "answer": 111,
            "choices": [
                111,
                113,
                103,
                133
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 347,
                "parts": [
                    {
                        "label": "架1",
                        "val": 116,
                        "color": "#00A896"
                    },
                    {
                        "label": "架2",
                        "val": 116,
                        "color": "#F5B800"
                    },
                    {
                        "label": "架3",
                        "val": 115,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "三位数除一位数",
            "difficulty": 3,
            "hint": "400÷4=100，60÷4=20，9÷4=4",
            "variants": [
                {
                    "question": "486÷4=?",
                    "formula": "486÷4=?",
                    "answer": 162,
                    "hint": "分位相除"
                },
                {
                    "question": "246÷2=?",
                    "formula": "246÷2=?",
                    "answer": 123,
                    "hint": "分位相除"
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
                    "explain": "题目说「图书馆有447本新书，平均放在4个书架上。管理员要算每个书架放多少本。」，问的是「每个书架放多少本？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：447 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：447 和 4",
                    "explain": "从题目中找到的关键数是：447、4"
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
                    "explain": "除法：447 ÷ 4 = ?=123"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表116，合起来就是347",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "447 ÷ 4 = ?=123",
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
            "id": "3B-PROB-100"
        },
        {
            "scene": "图书馆有484本新书，平均放在4个书架上。管理员要算每个书架放多少本。",
            "question": "每个书架放多少本？",
            "formula": "484 ÷ 4 = ?",
            "answer": 121,
            "choices": [
                121,
                113,
                103,
                133
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 384,
                "parts": [
                    {
                        "label": "架1",
                        "val": 128,
                        "color": "#00A896"
                    },
                    {
                        "label": "架2",
                        "val": 128,
                        "color": "#F5B800"
                    },
                    {
                        "label": "架3",
                        "val": 128,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "三位数除一位数",
            "difficulty": 3,
            "hint": "400÷4=100，60÷4=20，9÷4=4",
            "variants": [
                {
                    "question": "486÷4=?",
                    "formula": "486÷4=?",
                    "answer": 162,
                    "hint": "分位相除"
                },
                {
                    "question": "246÷2=?",
                    "formula": "246÷2=?",
                    "answer": 123,
                    "hint": "分位相除"
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
                    "explain": "题目说「图书馆有484本新书，平均放在4个书架上。管理员要算每个书架放多少本。」，问的是「每个书架放多少本？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：484 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：484 和 4",
                    "explain": "从题目中找到的关键数是：484、4"
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
                    "explain": "除法：484 ÷ 4 = ?=123"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表128，合起来就是384",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "484 ÷ 4 = ?=123",
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
            "id": "3B-PROB-101"
        },
        {
            "scene": "学校买了552本练习本，平均分给5个班。教务处要算每个班分多少本。",
            "question": "每个班分多少本？",
            "formula": "552 ÷ 5 = ?",
            "answer": 110,
            "choices": [
                110,
                102,
                122,
                112
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 542,
                "parts": [
                    {
                        "label": "班1",
                        "val": 136,
                        "color": "#00A896"
                    },
                    {
                        "label": "班2",
                        "val": 136,
                        "color": "#F5B800"
                    },
                    {
                        "label": "班3",
                        "val": 136,
                        "color": "#FB923C"
                    },
                    {
                        "label": "班4",
                        "val": 134,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "三位数除一位数",
            "difficulty": 3,
            "hint": "500÷5=100，58÷5=12",
            "variants": [
                {
                    "question": "636÷6=?",
                    "formula": "636÷6=?",
                    "answer": 106,
                    "hint": "分位相除"
                },
                {
                    "question": "858÷5=?",
                    "formula": "858÷5=?",
                    "answer": 212,
                    "hint": "分位相除"
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
                    "explain": "题目说「学校买了552本练习本，平均分给5个班。教务处要算每个班分多少本。」，问的是「每个班分多少本？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：552 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：552 和 5",
                    "explain": "从题目中找到的关键数是：552、5"
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
                    "explain": "除法：552 ÷ 5 = ?=112"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表136，合起来就是542",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "552 ÷ 5 = ?=112",
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
            "id": "3B-PROB-102"
        },
        {
            "scene": "学校买了587本练习本，平均分给6个班。教务处要算每个班分多少本。",
            "question": "每个班分多少本？",
            "formula": "587 ÷ 6 = ?",
            "answer": 97,
            "choices": [
                97,
                102,
                122,
                112
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 587,
                "parts": [
                    {
                        "label": "班1",
                        "val": 147,
                        "color": "#00A896"
                    },
                    {
                        "label": "班2",
                        "val": 147,
                        "color": "#F5B800"
                    },
                    {
                        "label": "班3",
                        "val": 147,
                        "color": "#FB923C"
                    },
                    {
                        "label": "班4",
                        "val": 146,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "三位数除一位数",
            "difficulty": 3,
            "hint": "600÷6=100，68÷6=12",
            "variants": [
                {
                    "question": "636÷6=?",
                    "formula": "636÷6=?",
                    "answer": 106,
                    "hint": "分位相除"
                },
                {
                    "question": "868÷6=?",
                    "formula": "868÷6=?",
                    "answer": 212,
                    "hint": "分位相除"
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
                    "explain": "题目说「学校买了587本练习本，平均分给6个班。教务处要算每个班分多少本。」，问的是「每个班分多少本？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：587 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：587 和 6",
                    "explain": "从题目中找到的关键数是：587、6"
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
                    "explain": "除法：587 ÷ 6 = ?=112"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表147，合起来就是587",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "587 ÷ 6 = ?=112",
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
            "id": "3B-PROB-103"
        },
        {
            "scene": "体育室有1267根跳绳，平均分给5个年级。体育老师要算每个年级分到多少根。",
            "question": "每个年级分到多少根？",
            "formula": "1267 ÷ 5 = ?",
            "answer": 253,
            "choices": [
                253,
                204,
                224,
                234
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1267,
                "parts": [
                    {
                        "label": "年级1",
                        "val": 317,
                        "color": "#00A896"
                    },
                    {
                        "label": "年级2",
                        "val": 317,
                        "color": "#F5B800"
                    },
                    {
                        "label": "年级3",
                        "val": 317,
                        "color": "#FB923C"
                    },
                    {
                        "label": "年级4",
                        "val": 316,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "三位数除一位数",
            "difficulty": 3,
            "hint": "800÷5=200，56÷5=15",
            "variants": [
                {
                    "question": "955÷3=?",
                    "formula": "955÷3=?",
                    "answer": 315,
                    "hint": "分位相除"
                },
                {
                    "question": "696÷6=?",
                    "formula": "696÷6=?",
                    "answer": 116,
                    "hint": "分位相除"
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
                    "explain": "题目说「体育室有1267根跳绳，平均分给5个年级。体育老师要算每个年级分到多少根。」，问的是「每个年级分到多少根？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1267 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1267 和 5",
                    "explain": "从题目中找到的关键数是：1267、5"
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
                    "explain": "除法：1267 ÷ 5 = ?=214"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表317，合起来就是1267",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1267 ÷ 5 = ?=214",
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
            "id": "3B-PROB-104"
        },
        {
            "scene": "体育室有753根跳绳，平均分给3个年级。体育老师要算每个年级分到多少根。",
            "question": "每个年级分到多少根？",
            "formula": "753 ÷ 3 = ?",
            "answer": 251,
            "choices": [
                251,
                204,
                224,
                234
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 753,
                "parts": [
                    {
                        "label": "年级1",
                        "val": 188,
                        "color": "#00A896"
                    },
                    {
                        "label": "年级2",
                        "val": 188,
                        "color": "#F5B800"
                    },
                    {
                        "label": "年级3",
                        "val": 188,
                        "color": "#FB923C"
                    },
                    {
                        "label": "年级4",
                        "val": 189,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "三位数除一位数",
            "difficulty": 3,
            "hint": "800÷3=200，56÷3=13",
            "variants": [
                {
                    "question": "935÷3=?",
                    "formula": "935÷3=?",
                    "answer": 315,
                    "hint": "分位相除"
                },
                {
                    "question": "696÷6=?",
                    "formula": "696÷6=?",
                    "answer": 116,
                    "hint": "分位相除"
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
                    "explain": "题目说「体育室有753根跳绳，平均分给3个年级。体育老师要算每个年级分到多少根。」，问的是「每个年级分到多少根？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：753 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：753 和 3",
                    "explain": "从题目中找到的关键数是：753、3"
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
                    "explain": "除法：753 ÷ 3 = ?=214"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表188，合起来就是753",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "753 ÷ 3 = ?=214",
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
            "id": "3B-PROB-105"
        },
        {
            "scene": "小红算了一道除法：112÷6=25。老师教她用乘法验算，看看算得对不对。",
            "question": "用乘法验算：25 × 6 = ?",
            "answer": 150,
            "formula": "25 × 6 = ?",
            "choices": [
                150,
                86,
                106,
                28
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 25,
                "b": 6,
                "parts": [
                    150
                ],
                "result": 150
            },
            "knowledge": "除法验算",
            "difficulty": 2,
            "hint": "商×除数=被除数",
            "variants": [
                {
                    "question": "验算85÷5=17，17×5=?",
                    "formula": "17×5=?",
                    "answer": 85,
                    "hint": "商乘除数"
                },
                {
                    "question": "验算78÷6=13，13×6=?",
                    "formula": "13×6=?",
                    "answer": 78,
                    "hint": "商乘除数"
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
                    "explain": "题目说「小红算了一道除法：112÷6=25。老师教她用乘法验算，看看算得对不对。」，问的是「用乘法验算：25 × 6 = ?」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：25 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：25 和 6",
                    "explain": "从题目中找到的关键数是：25、6"
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
                    "explain": "乘法：25 × 6 = 150"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用24×4的方格区域表示面积，每个小方格代表1，合起来就是96",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "25 × 6 = 150",
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
            "id": "3B-PROB-106"
        },
        {
            "scene": "小红算了一道除法：90÷3=28。老师教她用乘法验算，看看算得对不对。",
            "question": "用乘法验算：28 × 3 = ?",
            "answer": 84,
            "formula": "28 × 3 = ?",
            "choices": [
                84,
                86,
                106,
                28
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 24,
                "b": 4,
                "parts": [
                    80,
                    16
                ],
                "result": 96
            },
            "knowledge": "除法验算",
            "difficulty": 2,
            "hint": "商×除数=被除数",
            "variants": [
                {
                    "question": "验算85÷5=17，17×5=?",
                    "formula": "17×5=?",
                    "answer": 85,
                    "hint": "商乘除数"
                },
                {
                    "question": "验算78÷6=13，13×6=?",
                    "formula": "13×6=?",
                    "answer": 78,
                    "hint": "商乘除数"
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
                    "explain": "题目说「小红算了一道除法：90÷3=28。老师教她用乘法验算，看看算得对不对。」，问的是「用乘法验算：28 × 3 = ?」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：28、3"
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
                    "explain": "乘法：28 × 3 = ?=90"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用24×4的方格区域表示面积，每个小方格代表1，合起来就是96",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "28 × 3 = ?=90",
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
            "id": "3B-PROB-107"
        },
        {
            "scene": "小亮算了一道除法：107÷7=20。老师让他用乘法验算。",
            "question": "用乘法验算：20 × 7 = ?",
            "answer": 140,
            "formula": "20 × 7 = ?",
            "choices": [
                140,
                65,
                55,
                20
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 15,
                "b": 5,
                "parts": [
                    50,
                    25
                ],
                "result": 75
            },
            "knowledge": "除法验算",
            "difficulty": 2,
            "hint": "商×除数=被除数",
            "variants": [
                {
                    "question": "验算84÷3=28，28×3=?",
                    "formula": "28×3=?",
                    "answer": 84,
                    "hint": "商乘除数"
                },
                {
                    "question": "验算92÷4=23，23×4=?",
                    "formula": "23×4=?",
                    "answer": 92,
                    "hint": "商乘除数"
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
                    "explain": "题目说「小亮算了一道除法：107÷7=20。老师让他用乘法验算。」，问的是「用乘法验算：20 × 7 = ?」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：20 和 7",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：20 和 7",
                    "explain": "从题目中找到的关键数是：20、7"
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
                    "explain": "乘法：20 × 7 = ?=105"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用15×5的方格区域表示面积，每个小方格代表1，合起来就是75",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "20 × 7 = ?=105",
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
            "id": "3B-PROB-108"
        },
        {
            "scene": "小亮算了一道除法：88÷4=21。老师让他用乘法验算。",
            "question": "用乘法验算：21 × 4 = ?",
            "answer": 84,
            "formula": "21 × 4 = ?",
            "choices": [
                84,
                65,
                55,
                20
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 15,
                "b": 5,
                "parts": [
                    50,
                    25
                ],
                "result": 75
            },
            "knowledge": "除法验算",
            "difficulty": 2,
            "hint": "商×除数=被除数",
            "variants": [
                {
                    "question": "验算84÷3=28，28×3=?",
                    "formula": "28×3=?",
                    "answer": 84,
                    "hint": "商乘除数"
                },
                {
                    "question": "验算92÷4=23，23×4=?",
                    "formula": "23×4=?",
                    "answer": 92,
                    "hint": "商乘除数"
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
                    "explain": "题目说「小亮算了一道除法：88÷4=21。老师让他用乘法验算。」，问的是「用乘法验算：21 × 4 = ?」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：21 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：21 和 4",
                    "explain": "从题目中找到的关键数是：21、4"
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
                    "explain": "乘法：21 × 4 = ?=88"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用15×5的方格区域表示面积，每个小方格代表1，合起来就是75",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "21 × 4 = ?=88",
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
            "id": "3B-PROB-109"
        },
        {
            "scene": "小芳算了一道除法：542÷4=109。老师让她用乘法验算。",
            "question": "用乘法验算：109 × 4 = ?",
            "answer": 436,
            "formula": "109 × 4 = ?",
            "choices": [
                436,
                359,
                379,
                126
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 123,
                "b": 3,
                "parts": [
                    300,
                    60,
                    9
                ],
                "result": 369
            },
            "knowledge": "除法验算",
            "difficulty": 2,
            "hint": "商×除数=被除数",
            "variants": [
                {
                    "question": "验算448÷4=112，112×4=?",
                    "formula": "112×4=?",
                    "answer": 448,
                    "hint": "商乘除数"
                },
                {
                    "question": "验算856÷4=214，214×4=?",
                    "formula": "214×4=?",
                    "answer": 856,
                    "hint": "商乘除数"
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
                    "explain": "题目说「小芳算了一道除法：542÷4=109。老师让她用乘法验算。」，问的是「用乘法验算：109 × 4 = ?」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：109 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：109 和 4",
                    "explain": "从题目中找到的关键数是：109、4"
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
                    "explain": "乘法：109 × 4 = ?=542"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用123×3的方格区域表示面积，每个小方格代表1，合起来就是369",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "109 × 4 = ?=542",
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
            "id": "3B-PROB-110"
        },
        {
            "scene": "小芳算了一道除法：517÷3=122。老师让她用乘法验算。",
            "question": "用乘法验算：122 × 3 = ?",
            "answer": 366,
            "formula": "122 × 3 = ?",
            "choices": [
                366,
                359,
                379,
                126
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 123,
                "b": 3,
                "parts": [
                    300,
                    60,
                    9
                ],
                "result": 369
            },
            "knowledge": "除法验算",
            "difficulty": 2,
            "hint": "商×除数=被除数",
            "variants": [
                {
                    "question": "验算448÷4=112，112×4=?",
                    "formula": "112×4=?",
                    "answer": 448,
                    "hint": "商乘除数"
                },
                {
                    "question": "验算856÷4=214，214×4=?",
                    "formula": "214×4=?",
                    "answer": 856,
                    "hint": "商乘除数"
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
                    "explain": "题目说「小芳算了一道除法：517÷3=122。老师让她用乘法验算。」，问的是「用乘法验算：122 × 3 = ?」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：122 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：122 和 3",
                    "explain": "从题目中找到的关键数是：122、3"
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
                    "explain": "乘法：122 × 3 = ?=517"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用123×3的方格区域表示面积，每个小方格代表1，合起来就是369",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "122 × 3 = ?=517",
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
            "id": "3B-PROB-111"
        },
        {
            "scene": "学校有710本图书，平均放在5个书架上。管理员要算每个书架放多少本。",
            "question": "每个书架放多少本？",
            "formula": "710 ÷ 5 = ?",
            "answer": 142,
            "choices": [
                142,
                12,
                100,
                112
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 710,
                "parts": [
                    {
                        "label": "架1",
                        "val": 118,
                        "color": "#00A896"
                    },
                    {
                        "label": "架2",
                        "val": 118,
                        "color": "#F5B800"
                    },
                    {
                        "label": "架3",
                        "val": 118,
                        "color": "#FB923C"
                    },
                    {
                        "label": "架4",
                        "val": 118,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "架5",
                        "val": 118,
                        "color": "#1E3A5F"
                    },
                    {
                        "label": "架6",
                        "val": 120,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "商中间有0",
            "difficulty": 3,
            "hint": "不够商1就商0占位",
            "variants": [
                {
                    "question": "415÷4=?",
                    "formula": "415÷4=?",
                    "answer": 104,
                    "hint": "十位不够商1商0"
                },
                {
                    "question": "832÷8=?",
                    "formula": "832÷8=?",
                    "answer": 104,
                    "hint": "十位不够商1商0"
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
                    "explain": "题目说「学校有710本图书，平均放在5个书架上。管理员要算每个书架放多少本。」，问的是「每个书架放多少本？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：710 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：710 和 5",
                    "explain": "从题目中找到的关键数是：710、5"
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
                    "explain": "除法：710 ÷ 5 = ?=102"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有6条等长的条形，每条代表118，合起来就是710",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "710 ÷ 5 = ?=102",
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
            "id": "3B-PROB-112"
        },
        {
            "scene": "学校有771本图书，平均放在6个书架上。管理员要算每个书架放多少本。",
            "question": "每个书架放多少本？",
            "formula": "771 ÷ 6 = ?",
            "answer": 128,
            "choices": [
                128,
                12,
                100,
                112
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 771,
                "parts": [
                    {
                        "label": "架1",
                        "val": 129,
                        "color": "#00A896"
                    },
                    {
                        "label": "架2",
                        "val": 129,
                        "color": "#F5B800"
                    },
                    {
                        "label": "架3",
                        "val": 129,
                        "color": "#FB923C"
                    },
                    {
                        "label": "架4",
                        "val": 129,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "架5",
                        "val": 129,
                        "color": "#1E3A5F"
                    },
                    {
                        "label": "架6",
                        "val": 126,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "商中间有0",
            "difficulty": 3,
            "hint": "不够商1就商0占位",
            "variants": [
                {
                    "question": "416÷4=?",
                    "formula": "416÷4=?",
                    "answer": 104,
                    "hint": "十位不够商1商0"
                },
                {
                    "question": "832÷8=?",
                    "formula": "832÷8=?",
                    "answer": 104,
                    "hint": "十位不够商1商0"
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
                    "explain": "题目说「学校有771本图书，平均放在6个书架上。管理员要算每个书架放多少本。」，问的是「每个书架放多少本？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：771 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：771 和 6",
                    "explain": "从题目中找到的关键数是：771、6"
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
                    "explain": "除法：771 ÷ 6 = ?=102"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有6条等长的条形，每条代表129，合起来就是771",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "771 ÷ 6 = ?=102",
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
            "id": "3B-PROB-113"
        },
        {
            "scene": "体育老师有918个乒乓球，平均分给3个班。他要算每个班分到多少个。",
            "question": "每个班分到多少个乒乓球？",
            "formula": "918 ÷ 3 = ?",
            "answer": 306,
            "choices": [
                306,
                33,
                300,
                313
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 918,
                "parts": [
                    {
                        "label": "班1",
                        "val": 306,
                        "color": "#00A896"
                    },
                    {
                        "label": "班2",
                        "val": 306,
                        "color": "#F5B800"
                    },
                    {
                        "label": "班3",
                        "val": 306,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "商中间有0",
            "difficulty": 3,
            "hint": "十位0除以3得0",
            "variants": [
                {
                    "question": "606÷6=?",
                    "formula": "606÷6=?",
                    "answer": 101,
                    "hint": "十位商0"
                },
                {
                    "question": "408÷4=?",
                    "formula": "408÷4=?",
                    "answer": 102,
                    "hint": "十位商0"
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
                    "explain": "题目说「体育老师有918个乒乓球，平均分给3个班。他要算每个班分到多少个。」，问的是「每个班分到多少个乒乓球？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：918 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：918 和 3",
                    "explain": "从题目中找到的关键数是：918、3"
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
                    "explain": "除法：918 ÷ 3 = ?=303"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表306，合起来就是918",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "918 ÷ 3 = ?=303",
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
            "id": "3B-PROB-114"
        },
        {
            "scene": "体育老师有1000个乒乓球，平均分给3个班。他要算每个班分到多少个。",
            "question": "每个班分到多少个乒乓球？",
            "formula": "1000 ÷ 3 = ?",
            "answer": 333,
            "choices": [
                333,
                33,
                300,
                313
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1000,
                "parts": [
                    {
                        "label": "班1",
                        "val": 333,
                        "color": "#00A896"
                    },
                    {
                        "label": "班2",
                        "val": 333,
                        "color": "#F5B800"
                    },
                    {
                        "label": "班3",
                        "val": 334,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "商中间有0",
            "difficulty": 3,
            "hint": "十位0除以3得0",
            "variants": [
                {
                    "question": "606÷6=?",
                    "formula": "606÷6=?",
                    "answer": 101,
                    "hint": "十位商0"
                },
                {
                    "question": "408÷4=?",
                    "formula": "408÷4=?",
                    "answer": 102,
                    "hint": "十位商0"
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
                    "explain": "题目说「体育老师有1000个乒乓球，平均分给3个班。他要算每个班分到多少个。」，问的是「每个班分到多少个乒乓球？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1000 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1000 和 3",
                    "explain": "从题目中找到的关键数是：1000、3"
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
                    "explain": "除法：1000 ÷ 3 = ?=303"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表333，合起来就是1000",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1000 ÷ 3 = ?=303",
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
            "id": "3B-PROB-115"
        },
        {
            "scene": "农场收获了1201千克苹果，平均装进3辆卡车。农场主算每辆卡车装多少千克。",
            "question": "每辆卡车装多少千克？",
            "formula": "1201 ÷ 3 = ?",
            "answer": 400,
            "choices": [
                400,
                200,
                21,
                110
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1201,
                "parts": [
                    {
                        "label": "车1",
                        "val": 300,
                        "color": "#00A896"
                    },
                    {
                        "label": "车2",
                        "val": 300,
                        "color": "#F5B800"
                    },
                    {
                        "label": "车3",
                        "val": 300,
                        "color": "#FB923C"
                    },
                    {
                        "label": "车4",
                        "val": 301,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "商末尾有0",
            "difficulty": 3,
            "hint": "个位不够商1商0占位",
            "variants": [
                {
                    "question": "630÷3=?",
                    "formula": "630÷3=?",
                    "answer": 210,
                    "hint": "个位商0"
                },
                {
                    "question": "960÷3=?",
                    "formula": "960÷3=?",
                    "answer": 240,
                    "hint": "个位商0"
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
                    "explain": "题目说「农场收获了1201千克苹果，平均装进3辆卡车。农场主算每辆卡车装多少千克。」，问的是「每辆卡车装多少千克？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1201 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1201 和 3",
                    "explain": "从题目中找到的关键数是：1201、3"
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
                    "explain": "除法：1201 ÷ 3 = ?=210"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表300，合起来就是1201",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1201 ÷ 3 = ?=210",
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
            "id": "3B-PROB-116"
        },
        {
            "scene": "农场收获了697千克苹果，平均装进4辆卡车。农场主算每辆卡车装多少千克。",
            "question": "每辆卡车装多少千克？",
            "formula": "697 ÷ 4 = ?",
            "answer": 174,
            "choices": [
                174,
                200,
                21,
                110
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 697,
                "parts": [
                    {
                        "label": "车1",
                        "val": 174,
                        "color": "#00A896"
                    },
                    {
                        "label": "车2",
                        "val": 174,
                        "color": "#F5B800"
                    },
                    {
                        "label": "车3",
                        "val": 174,
                        "color": "#FB923C"
                    },
                    {
                        "label": "车4",
                        "val": 175,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "商末尾有0",
            "difficulty": 3,
            "hint": "个位不够商1商0占位",
            "variants": [
                {
                    "question": "630÷3=?",
                    "formula": "630÷3=?",
                    "answer": 210,
                    "hint": "个位商0"
                },
                {
                    "question": "960÷4=?",
                    "formula": "960÷4=?",
                    "answer": 240,
                    "hint": "个位商0"
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
                    "explain": "题目说「农场收获了697千克苹果，平均装进4辆卡车。农场主算每辆卡车装多少千克。」，问的是「每辆卡车装多少千克？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：697 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：697 和 4",
                    "explain": "从题目中找到的关键数是：697、4"
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
                    "explain": "除法：697 ÷ 4 = ?=210"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表174，合起来就是697",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "697 ÷ 4 = ?=210",
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
            "id": "3B-PROB-117"
        },
        {
            "scene": "三(1)班有21人喜欢足球，三(2)班有13人喜欢足球。体育老师要统计两个班一共有多少人喜欢足球。",
            "question": "两个班一共多少 人喜欢足球？",
            "formula": "21 + 13 = ?",
            "answer": 34,
            "choices": [
                34,
                17,
                3,
                18
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 27,
                "parts": [
                    {
                        "label": "三1班",
                        "val": 15,
                        "color": "#00A896"
                    },
                    {
                        "label": "三2班",
                        "val": 12,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "复式统计表",
            "difficulty": 2,
            "hint": "两个班人数相加",
            "variants": [
                {
                    "question": "三1班20人三2班18人共几人？",
                    "formula": "20+18=?",
                    "answer": 38,
                    "hint": "人数相加"
                },
                {
                    "question": "三1班13人三2班21人共几人？",
                    "formula": "13+21=?",
                    "answer": 27,
                    "hint": "人数相加"
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
                    "explain": "题目说「三(1)班有21人喜欢足球，三(2)班有13人喜欢足球。体育老师要统计两个班一共有多少人喜欢足球。」，问的是「两个班一共多少 人喜欢足球？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：21 和 13",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：21 和 13",
                    "explain": "从题目中找到的关键数是：21、13"
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
                    "explain": "加法：21 + 13 = ?=27"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表15，合起来就是27",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "21 + 13 = ?=27",
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
            "id": "3B-PROB-118"
        },
        {
            "scene": "三(1)班有22人喜欢足球，三(2)班有15人喜欢足球。体育老师要统计两个班一共有多少人喜欢足球。",
            "question": "两个班一共多少 人喜欢足球？",
            "formula": "22 + 15 = ?",
            "answer": 37,
            "choices": [
                37,
                17,
                3,
                18
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 27,
                "parts": [
                    {
                        "label": "三1班",
                        "val": 15,
                        "color": "#00A896"
                    },
                    {
                        "label": "三2班",
                        "val": 12,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "复式统计表",
            "difficulty": 2,
            "hint": "两个班人数相加",
            "variants": [
                {
                    "question": "三1班20人三2班18人共几人？",
                    "formula": "20+18=?",
                    "answer": 38,
                    "hint": "人数相加"
                },
                {
                    "question": "三1班15人三2班22人共几人？",
                    "formula": "15+22=?",
                    "answer": 27,
                    "hint": "人数相加"
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
                    "explain": "题目说「三(1)班有22人喜欢足球，三(2)班有15人喜欢足球。体育老师要统计两个班一共有多少人喜欢足球。」，问的是「两个班一共多少 人喜欢足球？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：22 和 15",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：22 和 15",
                    "explain": "从题目中找到的关键数是：22、15"
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
                    "explain": "加法：22 + 15 = ?=27"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表15，合起来就是27",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "22 + 15 = ?=27",
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
            "id": "3B-PROB-119"
        },
        {
            "scene": "三(1)班19人喜欢画画，三(2)班20人喜欢画画。美术老师要统计一共多少 人。",
            "question": "两个班一共多少人喜欢画画？",
            "formula": "19 + 20 = ?",
            "answer": 39,
            "choices": [
                39,
                28,
                2,
                48
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 38,
                "parts": [
                    {
                        "label": "三1班",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "三2班",
                        "val": 18,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "复式统计表",
            "difficulty": 2,
            "hint": "两班人数相加",
            "variants": [
                {
                    "question": "三1班15人三2班17人共几人？",
                    "formula": "15+17=?",
                    "answer": 32,
                    "hint": "人数相加"
                },
                {
                    "question": "三1班22人三2班19人共几人？",
                    "formula": "22+19=?",
                    "answer": 41,
                    "hint": "人数相加"
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
                    "explain": "题目说「三(1)班19人喜欢画画，三(2)班20人喜欢画画。美术老师要统计一共多少 人。」，问的是「两个班一共多少人喜欢画画？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：19 和 20",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：19 和 20",
                    "explain": "从题目中找到的关键数是：19、20"
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
                    "explain": "加法：19 + 20 = ?=38"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表20，合起来就是38",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "19 + 20 = ?=38",
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
            "id": "3B-PROB-120"
        },
        {
            "scene": "三(1)班21人喜欢画画，三(2)班23人喜欢画画。美术老师要统计一共多少 人。",
            "question": "两个班一共多少人喜欢画画？",
            "formula": "21 + 23 = ?",
            "answer": 44,
            "choices": [
                44,
                28,
                2,
                48
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 38,
                "parts": [
                    {
                        "label": "三1班",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "三2班",
                        "val": 18,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "复式统计表",
            "difficulty": 2,
            "hint": "两班人数相加",
            "variants": [
                {
                    "question": "三1班15人三2班17人共几人？",
                    "formula": "15+17=?",
                    "answer": 32,
                    "hint": "人数相加"
                },
                {
                    "question": "三1班22人三2班19人共几人？",
                    "formula": "22+19=?",
                    "answer": 41,
                    "hint": "人数相加"
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
                    "explain": "题目说「三(1)班21人喜欢画画，三(2)班23人喜欢画画。美术老师要统计一共多少 人。」，问的是「两个班一共多少人喜欢画画？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：21 和 23",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：21 和 23",
                    "explain": "从题目中找到的关键数是：21、23"
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
                    "explain": "加法：21 + 23 = ?=38"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表20，合起来就是38",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "21 + 23 = ?=38",
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
            "id": "3B-PROB-121"
        },
        {
            "scene": "三(1)班15人喜欢音乐，三(2)班17人喜欢音乐。音乐老师要统计一共多少 人。",
            "question": "两个班一共多少人喜欢音乐？",
            "formula": "15 + 17 = ?",
            "answer": 32,
            "choices": [
                32,
                17,
                3,
                28
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 27,
                "parts": [
                    {
                        "label": "三1班",
                        "val": 12,
                        "color": "#00A896"
                    },
                    {
                        "label": "三2班",
                        "val": 15,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "复式统计表",
            "difficulty": 2,
            "hint": "两班人数相加",
            "variants": [
                {
                    "question": "三1班18人三2班14人共几人？",
                    "formula": "18+14=?",
                    "answer": 32,
                    "hint": "人数相加"
                },
                {
                    "question": "三1班16人三2班20人共几人？",
                    "formula": "16+20=?",
                    "answer": 36,
                    "hint": "人数相加"
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
                    "explain": "题目说「三(1)班15人喜欢音乐，三(2)班17人喜欢音乐。音乐老师要统计一共多少 人。」，问的是「两个班一共多少人喜欢音乐？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：15 和 17",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：15 和 17",
                    "explain": "从题目中找到的关键数是：15、17"
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
                    "explain": "加法：15 + 17 = ?=27"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表12，合起来就是27",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "15 + 17 = ?=27",
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
            "id": "3B-PROB-122"
        },
        {
            "scene": "三(1)班16人喜欢音乐，三(3)班30人喜欢音乐。音乐老师要统计一共多少 人。",
            "question": "两个班一共多少人喜欢音乐？",
            "formula": "16 + 30 = ?",
            "answer": 46,
            "choices": [
                46,
                17,
                3,
                28
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 27,
                "parts": [
                    {
                        "label": "三1班",
                        "val": 12,
                        "color": "#00A896"
                    },
                    {
                        "label": "三2班",
                        "val": 15,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "复式统计表",
            "difficulty": 2,
            "hint": "两班人数相加",
            "variants": [
                {
                    "question": "三1班18人三3班14人共几人？",
                    "formula": "18+14=?",
                    "answer": 32,
                    "hint": "人数相加"
                },
                {
                    "question": "三1班16人三3班30人共几人？",
                    "formula": "16+30=?",
                    "answer": 36,
                    "hint": "人数相加"
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
                    "explain": "题目说「三(1)班16人喜欢音乐，三(3)班30人喜欢音乐。音乐老师要统计一共多少 人。」，问的是「两个班一共多少人喜欢音乐？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：16 和 30",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：16 和 30",
                    "explain": "从题目中找到的关键数是：16、30"
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
                    "explain": "加法：16 + 30 = ?=27"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表12，合起来就是27",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "16 + 30 = ?=27",
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
            "id": "3B-PROB-123"
        },
        {
            "scene": "文具店每盒水彩笔14元，老师买了30盒。小红算算一共要付多少元。",
            "question": "买30盒一共多少元？",
            "formula": "14 × 30 = ?",
            "answer": 420,
            "choices": [
                420,
                140,
                24,
                200
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 12,
                "b": 20,
                "parts": [
                    240
                ],
                "result": 240
            },
            "knowledge": "两位数乘整十数",
            "difficulty": 2,
            "hint": "14×2=24添一个0",
            "variants": [
                {
                    "question": "15×30=?",
                    "formula": "15×30=?",
                    "answer": 450,
                    "hint": "15×3=45添0"
                },
                {
                    "question": "24×10=?",
                    "formula": "24×10=?",
                    "answer": 240,
                    "hint": "24×1=24添0"
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
                    "explain": "题目说「文具店每盒水彩笔14元，老师买了30盒。小红算算一共要付多少元。」，问的是「买30盒一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：14 和 30",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：14 和 30",
                    "explain": "从题目中找到的关键数是：14、30"
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
                    "explain": "乘法：14 × 30 = ?=240"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用12×20的方格区域表示面积，每个小方格代表1，合起来就是240",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "14 × 30 = ?=240",
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
            "id": "3B-PROB-124"
        },
        {
            "scene": "文具店每盒水彩笔16元，老师买了18盒。小红算算一共要付多少元。",
            "question": "买18盒一共多少元？",
            "formula": "16 × 18 = ?",
            "answer": 288,
            "choices": [
                288,
                140,
                24,
                200
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 12,
                "b": 20,
                "parts": [
                    240
                ],
                "result": 240
            },
            "knowledge": "两位数乘整十数",
            "difficulty": 2,
            "hint": "16×2=24添一个0",
            "variants": [
                {
                    "question": "15×30=?",
                    "formula": "15×30=?",
                    "answer": 450,
                    "hint": "15×3=45添0"
                },
                {
                    "question": "24×10=?",
                    "formula": "24×10=?",
                    "answer": 240,
                    "hint": "24×1=24添0"
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
                    "explain": "题目说「文具店每盒水彩笔16元，老师买了18盒。小红算算一共要付多少元。」，问的是「买18盒一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：16 和 18",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：16 和 18",
                    "explain": "从题目中找到的关键数是：16、18"
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
                    "explain": "乘法：16 × 18 = ?=240"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用12×20的方格区域表示面积，每个小方格代表1，合起来就是240",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "16 × 18 = ?=240",
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
            "id": "3B-PROB-125"
        },
        {
            "scene": "超市每箱牛奶18元，食堂买了32箱。厨师长算一共要付多少元。",
            "question": "买32箱一共多少元？",
            "formula": "18 × 32 = ?",
            "answer": 576,
            "choices": [
                576,
                350,
                45,
                300
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 15,
                "b": 30,
                "parts": [
                    450
                ],
                "result": 450
            },
            "knowledge": "两位数乘整十数",
            "difficulty": 2,
            "hint": "18×3=45添一个0",
            "variants": [
                {
                    "question": "18×20=?",
                    "formula": "18×20=?",
                    "answer": 360,
                    "hint": "18×2=36添0"
                },
                {
                    "question": "25×40=?",
                    "formula": "25×40=?",
                    "answer": 1000,
                    "hint": "25×4=100添0"
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
                    "explain": "题目说「超市每箱牛奶18元，食堂买了32箱。厨师长算一共要付多少元。」，问的是「买32箱一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：18 和 32",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：18 和 32",
                    "explain": "从题目中找到的关键数是：18、32"
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
                    "explain": "乘法：18 × 32 = ?=450"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用15×30的方格区域表示面积，每个小方格代表1，合起来就是450",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "18 × 32 = ?=450",
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
            "id": "3B-PROB-126"
        },
        {
            "scene": "超市每箱牛奶21元，食堂买了35箱。厨师长算一共要付多少元。",
            "question": "买35箱一共多少元？",
            "formula": "21 × 35 = ?",
            "answer": 735,
            "choices": [
                735,
                350,
                45,
                300
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 15,
                "b": 30,
                "parts": [
                    450
                ],
                "result": 450
            },
            "knowledge": "两位数乘整十数",
            "difficulty": 2,
            "hint": "21×3=45添一个0",
            "variants": [
                {
                    "question": "18×20=?",
                    "formula": "18×20=?",
                    "answer": 360,
                    "hint": "18×2=36添0"
                },
                {
                    "question": "25×40=?",
                    "formula": "25×40=?",
                    "answer": 1000,
                    "hint": "25×4=100添0"
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
                    "explain": "题目说「超市每箱牛奶21元，食堂买了35箱。厨师长算一共要付多少元。」，问的是「买35箱一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：21 和 35",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：21 和 35",
                    "explain": "从题目中找到的关键数是：21、35"
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
                    "explain": "乘法：21 × 35 = ?=450"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用15×30的方格区域表示面积，每个小方格代表1，合起来就是450",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "21 × 35 = ?=450",
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
            "id": "3B-PROB-127"
        },
        {
            "scene": "学校每包纸30本，总务处买了13包。要算一共多少本。",
            "question": "13包一共多少本？",
            "formula": "30 × 13 = ?",
            "answer": 390,
            "choices": [
                390,
                140,
                30,
                34
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 24,
                "b": 10,
                "parts": [
                    240
                ],
                "result": 240
            },
            "knowledge": "两位数乘整十数",
            "difficulty": 2,
            "hint": "30×1=30添一个0",
            "variants": [
                {
                    "question": "32×20=?",
                    "formula": "32×20=?",
                    "answer": 640,
                    "hint": "32×2=64添0"
                },
                {
                    "question": "45×20=?",
                    "formula": "45×20=?",
                    "answer": 900,
                    "hint": "45×2=90添0"
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
                    "explain": "题目说「学校每包纸30本，总务处买了13包。要算一共多少本。」，问的是「13包一共多少本？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：30 和 13",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：30 和 13",
                    "explain": "从题目中找到的关键数是：30、13"
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
                    "explain": "乘法：30 × 13 = ?=240"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用24×10的方格区域表示面积，每个小方格代表1，合起来就是240",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "30 × 13 = ?=240",
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
            "id": "3B-PROB-128"
        },
        {
            "scene": "学校每包纸34本，总务处买了14包。要算一共多少本。",
            "question": "14包一共多少本？",
            "formula": "34 × 14 = ?",
            "answer": 476,
            "choices": [
                476,
                140,
                34,
                34
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 24,
                "b": 10,
                "parts": [
                    240
                ],
                "result": 240
            },
            "knowledge": "两位数乘整十数",
            "difficulty": 2,
            "hint": "34×1=34添一个0",
            "variants": [
                {
                    "question": "32×20=?",
                    "formula": "32×20=?",
                    "answer": 640,
                    "hint": "32×2=64添0"
                },
                {
                    "question": "45×20=?",
                    "formula": "45×20=?",
                    "answer": 900,
                    "hint": "45×2=90添0"
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
                    "explain": "题目说「学校每包纸34本，总务处买了14包。要算一共多少本。」，问的是「14包一共多少本？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：34 和 14",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：34 和 14",
                    "explain": "从题目中找到的关键数是：34、14"
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
                    "explain": "乘法：34 × 14 = ?=240"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用24×10的方格区域表示面积，每个小方格代表1，合起来就是240",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "34 × 14 = ?=240",
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
            "id": "3B-PROB-129"
        },
        {
            "scene": "学校报告厅有13排座位，每排16个。开家长会老师让小刚算一共能坐多少人。",
            "question": "报告厅一共能坐多少人？",
            "formula": "13 × 16 = ?",
            "answer": 208,
            "choices": [
                208,
                148,
                188,
                158
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 14,
                "b": 12,
                "parts": [
                    100,
                    40,
                    20,
                    8
                ],
                "result": 168
            },
            "knowledge": "两位数乘两位数不进位",
            "difficulty": 3,
            "hint": "13×10=130加13×2=28",
            "variants": [
                {
                    "question": "13×16=?",
                    "formula": "13×16=?",
                    "answer": 156,
                    "hint": "13×10加13×2"
                },
                {
                    "question": "15×11=?",
                    "formula": "15×11=?",
                    "answer": 165,
                    "hint": "15×10加15"
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
                    "explain": "题目说「学校报告厅有13排座位，每排16个。开家长会老师让小刚算一共能坐多少人。」，问的是「报告厅一共能坐多少人？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：13 和 16",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：13 和 16",
                    "explain": "从题目中找到的关键数是：13、16"
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
                    "explain": "乘法：13 × 16 = ?=168"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用14×12的方格区域表示面积，每个小方格代表1，合起来就是168",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "13 × 16 = ?=168",
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
            "id": "3B-PROB-130"
        },
        {
            "scene": "学校报告厅有14排座位，每排18个。开家长会老师让小刚算一共能坐多少人。",
            "question": "报告厅一共能坐多少人？",
            "formula": "14 × 18 = ?",
            "answer": 252,
            "choices": [
                252,
                148,
                188,
                158
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 14,
                "b": 12,
                "parts": [
                    100,
                    40,
                    20,
                    8
                ],
                "result": 168
            },
            "knowledge": "两位数乘两位数不进位",
            "difficulty": 3,
            "hint": "14×10=140加14×2=28",
            "variants": [
                {
                    "question": "13×18=?",
                    "formula": "13×18=?",
                    "answer": 156,
                    "hint": "13×10加13×2"
                },
                {
                    "question": "15×11=?",
                    "formula": "15×11=?",
                    "answer": 165,
                    "hint": "15×10加15"
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
                    "explain": "题目说「学校报告厅有14排座位，每排18个。开家长会老师让小刚算一共能坐多少人。」，问的是「报告厅一共能坐多少人？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：14 和 18",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：14 和 18",
                    "explain": "从题目中找到的关键数是：14、18"
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
                    "explain": "乘法：14 × 18 = ?=168"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用14×12的方格区域表示面积，每个小方格代表1，合起来就是168",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "14 × 18 = ?=168",
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
            "id": "3B-PROB-131"
        },
        {
            "scene": "教室里有25排桌子，每排18张。总务处要算一共多少张桌子。",
            "question": "教室一共多少张桌子？",
            "formula": "25 × 18 = ?",
            "answer": 450,
            "choices": [
                450,
                253,
                293,
                263
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 21,
                "b": 13,
                "parts": [
                    200,
                    10,
                    60,
                    3
                ],
                "result": 273
            },
            "knowledge": "两位数乘两位数不进位",
            "difficulty": 3,
            "hint": "25×10=250加25×3=63",
            "variants": [
                {
                    "question": "22×18=?",
                    "formula": "22×18=?",
                    "answer": 286,
                    "hint": "22×10加22×3"
                },
                {
                    "question": "31×12=?",
                    "formula": "31×12=?",
                    "answer": 372,
                    "hint": "31×10加31×2"
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
                    "explain": "题目说「教室里有25排桌子，每排18张。总务处要算一共多少张桌子。」，问的是「教室一共多少张桌子？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：25 和 18",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：25 和 18",
                    "explain": "从题目中找到的关键数是：25、18"
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
                    "explain": "乘法：25 × 18 = ?=273"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用21×13的方格区域表示面积，每个小方格代表1，合起来就是273",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "25 × 18 = ?=273",
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
            "id": "3B-PROB-132"
        },
        {
            "scene": "教室里有27排桌子，每排10张。总务处要算一共多少张桌子。",
            "question": "教室一共多少张桌子？",
            "formula": "27 × 10 = ?",
            "answer": 270,
            "choices": [
                270,
                253,
                293,
                263
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 21,
                "b": 13,
                "parts": [
                    200,
                    10,
                    60,
                    3
                ],
                "result": 273
            },
            "knowledge": "两位数乘两位数不进位",
            "difficulty": 3,
            "hint": "27×10=270加27×3=63",
            "variants": [
                {
                    "question": "22×10=?",
                    "formula": "22×10=?",
                    "answer": 286,
                    "hint": "22×10加22×3"
                },
                {
                    "question": "31×12=?",
                    "formula": "31×12=?",
                    "answer": 372,
                    "hint": "31×10加31×2"
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
                    "explain": "题目说「教室里有27排桌子，每排10张。总务处要算一共多少张桌子。」，问的是「教室一共多少张桌子？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：27 和 10",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：27 和 10",
                    "explain": "从题目中找到的关键数是：27、10"
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
                    "explain": "乘法：27 × 10 = ?=273"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用21×13的方格区域表示面积，每个小方格代表1，合起来就是273",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "27 × 10 = ?=273",
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
            "id": "3B-PROB-133"
        },
        {
            "scene": "图书角每层放46本书，共17层。管理员要算一共放多少本书。",
            "question": "一共放多少本书？",
            "formula": "46 × 17 = ?",
            "answer": 782,
            "choices": [
                782,
                364,
                404,
                374
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 32,
                "b": 12,
                "parts": [
                    300,
                    20,
                    60,
                    4
                ],
                "result": 384
            },
            "knowledge": "两位数乘两位数不进位",
            "difficulty": 3,
            "hint": "46×10=460加46×2=64",
            "variants": [
                {
                    "question": "23×13=?",
                    "formula": "23×13=?",
                    "answer": 299,
                    "hint": "23×10加23×3"
                },
                {
                    "question": "42×17=?",
                    "formula": "42×17=?",
                    "answer": 504,
                    "hint": "42×10加42×2"
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
                    "explain": "题目说「图书角每层放46本书，共17层。管理员要算一共放多少本书。」，问的是「一共放多少本书？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：46 和 17",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：46 和 17",
                    "explain": "从题目中找到的关键数是：46、17"
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
                    "explain": "乘法：46 × 17 = ?=384"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用32×12的方格区域表示面积，每个小方格代表1，合起来就是384",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "46 × 17 = ?=384",
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
            "id": "3B-PROB-134"
        },
        {
            "scene": "图书角每层放27本书，共10层。管理员要算一共放多少本书。",
            "question": "一共放多少本书？",
            "formula": "27 × 10 = ?",
            "answer": 270,
            "choices": [
                270,
                364,
                404,
                374
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 32,
                "b": 12,
                "parts": [
                    300,
                    20,
                    60,
                    4
                ],
                "result": 384
            },
            "knowledge": "两位数乘两位数不进位",
            "difficulty": 3,
            "hint": "27×10=270加27×2=64",
            "variants": [
                {
                    "question": "23×13=?",
                    "formula": "23×13=?",
                    "answer": 299,
                    "hint": "23×10加23×3"
                },
                {
                    "question": "42×10=?",
                    "formula": "42×10=?",
                    "answer": 504,
                    "hint": "42×10加42×2"
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
                    "explain": "题目说「图书角每层放27本书，共10层。管理员要算一共放多少本书。」，问的是「一共放多少本书？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：27 和 10",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：27 和 10",
                    "explain": "从题目中找到的关键数是：27、10"
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
                    "explain": "乘法：27 × 10 = ?=384"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用32×12的方格区域表示面积，每个小方格代表1，合起来就是384",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "27 × 10 = ?=384",
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
            "id": "3B-PROB-135"
        },
        {
            "scene": "学校给每班发46本新书，共35个班。教务处要算一共多少本书。",
            "question": "一共发多少本书？",
            "formula": "46 × 35 = ?",
            "answer": 1610,
            "choices": [
                1610,
                980,
                1180,
                1070
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 45,
                "b": 24,
                "parts": [
                    800,
                    100,
                    160,
                    20
                ],
                "result": 1080
            },
            "knowledge": "两位数乘两位数进位",
            "difficulty": 3,
            "hint": "46×20=900加46×4=180",
            "variants": [
                {
                    "question": "36×25=?",
                    "formula": "36×25=?",
                    "answer": 900,
                    "hint": "36×20加36×5"
                },
                {
                    "question": "48×32=?",
                    "formula": "48×32=?",
                    "answer": 1536,
                    "hint": "48×30加48×2"
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
                    "explain": "题目说「学校给每班发46本新书，共35个班。教务处要算一共多少本书。」，问的是「一共发多少本书？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：46 和 35",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：46 和 35",
                    "explain": "从题目中找到的关键数是：46、35"
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
                    "explain": "乘法：46 × 35 = ?=1080"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用45×24的方格区域表示面积，每个小方格代表1，合起来就是1080",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "46 × 35 = ?=1080",
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
            "id": "3B-PROB-136"
        },
        {
            "scene": "学校给每班发50本新书，共21个班。教务处要算一共多少本书。",
            "question": "一共发多少本书？",
            "formula": "50 × 21 = ?",
            "answer": 1050,
            "choices": [
                1050,
                980,
                1180,
                1070
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 45,
                "b": 24,
                "parts": [
                    800,
                    100,
                    160,
                    20
                ],
                "result": 1080
            },
            "knowledge": "两位数乘两位数进位",
            "difficulty": 3,
            "hint": "50×20=900加50×4=180",
            "variants": [
                {
                    "question": "36×25=?",
                    "formula": "36×25=?",
                    "answer": 900,
                    "hint": "36×20加36×5"
                },
                {
                    "question": "48×32=?",
                    "formula": "48×32=?",
                    "answer": 1536,
                    "hint": "48×30加48×2"
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
                    "explain": "题目说「学校给每班发50本新书，共21个班。教务处要算一共多少本书。」，问的是「一共发多少本书？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：50 和 21",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：50 和 21",
                    "explain": "从题目中找到的关键数是：50、21"
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
                    "explain": "乘法：50 × 21 = ?=1080"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用45×24的方格区域表示面积，每个小方格代表1，合起来就是1080",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "50 × 21 = ?=1080",
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
            "id": "3B-PROB-137"
        },
        {
            "scene": "超市每箱苹果46个，卖了37箱。店长算一共卖了多少个苹果。",
            "question": "一共卖了多少个苹果？",
            "formula": "46 × 37 = ?",
            "answer": 1702,
            "choices": [
                1702,
                800,
                1000,
                890
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 36,
                "b": 25,
                "parts": [
                    600,
                    120,
                    300,
                    0
                ],
                "result": 900
            },
            "knowledge": "两位数乘两位数进位",
            "difficulty": 3,
            "hint": "46×20=720加46×5=180",
            "variants": [
                {
                    "question": "45×16=?",
                    "formula": "45×16=?",
                    "answer": 720,
                    "hint": "45×10加45×6"
                },
                {
                    "question": "38×24=?",
                    "formula": "38×24=?",
                    "answer": 912,
                    "hint": "38×20加38×4"
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
                    "explain": "题目说「超市每箱苹果46个，卖了37箱。店长算一共卖了多少个苹果。」，问的是「一共卖了多少个苹果？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：46 和 37",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：46 和 37",
                    "explain": "从题目中找到的关键数是：46、37"
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
                    "explain": "乘法：46 × 37 = ?=900"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用36×25的方格区域表示面积，每个小方格代表1，合起来就是900",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "46 × 37 = ?=900",
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
            "id": "3B-PROB-138"
        },
        {
            "scene": "超市每箱苹果50个，卖了23箱。店长算一共卖了多少个苹果。",
            "question": "一共卖了多少个苹果？",
            "formula": "50 × 23 = ?",
            "answer": 1150,
            "choices": [
                1150,
                800,
                1000,
                890
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 36,
                "b": 25,
                "parts": [
                    600,
                    120,
                    300,
                    0
                ],
                "result": 900
            },
            "knowledge": "两位数乘两位数进位",
            "difficulty": 3,
            "hint": "50×20=720加50×5=180",
            "variants": [
                {
                    "question": "45×16=?",
                    "formula": "45×16=?",
                    "answer": 720,
                    "hint": "45×10加45×6"
                },
                {
                    "question": "38×24=?",
                    "formula": "38×24=?",
                    "answer": 912,
                    "hint": "38×20加38×4"
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
                    "explain": "题目说「超市每箱苹果50个，卖了23箱。店长算一共卖了多少个苹果。」，问的是「一共卖了多少个苹果？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：50 和 23",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：50 和 23",
                    "explain": "从题目中找到的关键数是：50、23"
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
                    "explain": "乘法：50 × 23 = ?=900"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用36×25的方格区域表示面积，每个小方格代表1，合起来就是900",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "50 × 23 = ?=900",
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
            "id": "3B-PROB-139"
        },
        {
            "scene": "操场每排41人，共12排。体育老师算一共多少人在做操。",
            "question": "一共有多少人在做操？",
            "formula": "41 × 12 = ?",
            "answer": 492,
            "choices": [
                492,
                620,
                820,
                710
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 48,
                "b": 15,
                "parts": [
                    400,
                    80,
                    200,
                    40
                ],
                "result": 720
            },
            "knowledge": "两位数乘两位数进位",
            "difficulty": 3,
            "hint": "41×10=410加41×5=240",
            "variants": [
                {
                    "question": "52×14=?",
                    "formula": "52×14=?",
                    "answer": 728,
                    "hint": "52×10加52×4"
                },
                {
                    "question": "65×12=?",
                    "formula": "65×12=?",
                    "answer": 780,
                    "hint": "65×10加65×2"
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
                    "explain": "题目说「操场每排41人，共12排。体育老师算一共多少人在做操。」，问的是「一共有多少人在做操？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：41 和 12",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：41 和 12",
                    "explain": "从题目中找到的关键数是：41、12"
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
                    "explain": "乘法：41 × 12 = ?=720"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用48×15的方格区域表示面积，每个小方格代表1，合起来就是720",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "41 × 12 = ?=720",
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
            "id": "3B-PROB-140"
        },
        {
            "scene": "操场每排46人，共15排。体育老师算一共多少人在做操。",
            "question": "一共有多少人在做操？",
            "formula": "46 × 15 = ?",
            "answer": 690,
            "choices": [
                690,
                620,
                820,
                710
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 48,
                "b": 15,
                "parts": [
                    400,
                    80,
                    200,
                    40
                ],
                "result": 720
            },
            "knowledge": "两位数乘两位数进位",
            "difficulty": 3,
            "hint": "46×10=460加46×5=240",
            "variants": [
                {
                    "question": "52×14=?",
                    "formula": "52×14=?",
                    "answer": 728,
                    "hint": "52×10加52×4"
                },
                {
                    "question": "65×12=?",
                    "formula": "65×12=?",
                    "answer": 780,
                    "hint": "65×10加65×2"
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
                    "explain": "题目说「操场每排46人，共15排。体育老师算一共多少人在做操。」，问的是「一共有多少人在做操？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：46 和 15",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：46 和 15",
                    "explain": "从题目中找到的关键数是：46、15"
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
                    "explain": "乘法：46 × 15 = ?=720"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用48×15的方格区域表示面积，每个小方格代表1，合起来就是720",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "46 × 15 = ?=720",
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
            "id": "3B-PROB-141"
        },
        {
            "scene": "超市有3箱饮料，每箱10瓶，每瓶4元。小红算一共多少元。",
            "question": "一共多少元？",
            "formula": "3 × 10 × 4 = ?",
            "answer": 120,
            "choices": [
                120,
                124,
                164,
                134
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 144,
                "parts": [
                    {
                        "label": "箱1",
                        "val": 48,
                        "color": "#00A896"
                    },
                    {
                        "label": "箱2",
                        "val": 48,
                        "color": "#F5B800"
                    },
                    {
                        "label": "箱3",
                        "val": 48,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "连乘问题",
            "difficulty": 3,
            "hint": "先算3×10=36，再算36×4",
            "variants": [
                {
                    "question": "2箱每箱15瓶每瓶3元共几元？",
                    "formula": "2×15×3=?",
                    "answer": 90,
                    "hint": "先乘再乘"
                },
                {
                    "question": "4箱每箱10瓶每瓶5元共几元？",
                    "formula": "4×10×5=?",
                    "answer": 200,
                    "hint": "先乘再乘"
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
                    "explain": "题目说「超市有3箱饮料，每箱10瓶，每瓶4元。小红算一共多少元。」，问的是「一共多少元？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：3、10、4"
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
                    "explain": "乘法：3 × 10 × 4 = ?=144"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表48，合起来就是144",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3 × 10 × 4 = ?=144",
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
            "id": "3B-PROB-142"
        },
        {
            "scene": "超市有4箱饮料，每箱12瓶，每瓶5元。小红算一共多少元。",
            "question": "一共多少元？",
            "formula": "4 × 12 × 5 = ?",
            "answer": 240,
            "choices": [
                240,
                124,
                164,
                134
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 144,
                "parts": [
                    {
                        "label": "箱1",
                        "val": 48,
                        "color": "#00A896"
                    },
                    {
                        "label": "箱2",
                        "val": 48,
                        "color": "#F5B800"
                    },
                    {
                        "label": "箱3",
                        "val": 48,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "连乘问题",
            "difficulty": 3,
            "hint": "先算4×12=46，再算46×5",
            "variants": [
                {
                    "question": "2箱每箱15瓶每瓶4元共几元？",
                    "formula": "2×15×4=?",
                    "answer": 90,
                    "hint": "先乘再乘"
                },
                {
                    "question": "5箱每箱10瓶每瓶5元共几元？",
                    "formula": "5×10×5=?",
                    "answer": 200,
                    "hint": "先乘再乘"
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
                    "explain": "题目说「超市有4箱饮料，每箱12瓶，每瓶5元。小红算一共多少元。」，问的是「一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4 和 12",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4 和 12",
                    "explain": "从题目中找到的关键数是：4、12、5"
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
                    "explain": "乘法：4 × 12 × 5 = ?=144"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表48，合起来就是144",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4 × 12 × 5 = ?=144",
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
            "id": "3B-PROB-143"
        },
        {
            "scene": "学校买来4盒乒乓球，每盒14个，每个3元。老师算一共花了多少元。",
            "question": "一共花了多少元？",
            "formula": "4 × 14 × 3 = ?",
            "answer": 168,
            "choices": [
                168,
                100,
                140,
                30
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 120,
                "parts": [
                    {
                        "label": "盒1",
                        "val": 30,
                        "color": "#00A896"
                    },
                    {
                        "label": "盒2",
                        "val": 30,
                        "color": "#F5B800"
                    },
                    {
                        "label": "盒3",
                        "val": 30,
                        "color": "#FB923C"
                    },
                    {
                        "label": "盒4",
                        "val": 30,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "连乘问题",
            "difficulty": 3,
            "hint": "先算4×14=60，再算60×3",
            "variants": [
                {
                    "question": "3盒每箱30个每个5元共几元？",
                    "formula": "3×30×5=?",
                    "answer": 300,
                    "hint": "先乘再乘"
                },
                {
                    "question": "5盒每箱13个每个3元共几元？",
                    "formula": "5×13×3=?",
                    "answer": 180,
                    "hint": "先乘再乘"
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
                    "explain": "题目说「学校买来4盒乒乓球，每盒14个，每个3元。老师算一共花了多少元。」，问的是「一共花了多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4 和 14",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4 和 14",
                    "explain": "从题目中找到的关键数是：4、14、3"
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
                    "explain": "乘法：4 × 14 × 3 = ?=120"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表30，合起来就是120",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4 × 14 × 3 = ?=120",
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
            "id": "3B-PROB-144"
        },
        {
            "scene": "学校买来4盒乒乓球，每盒16个，每个2元。老师算一共花了多少元。",
            "question": "一共花了多少元？",
            "formula": "4 × 16 × 2 = ?",
            "answer": 128,
            "choices": [
                128,
                100,
                140,
                30
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 120,
                "parts": [
                    {
                        "label": "盒1",
                        "val": 30,
                        "color": "#00A896"
                    },
                    {
                        "label": "盒2",
                        "val": 30,
                        "color": "#F5B800"
                    },
                    {
                        "label": "盒3",
                        "val": 30,
                        "color": "#FB923C"
                    },
                    {
                        "label": "盒4",
                        "val": 30,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "连乘问题",
            "difficulty": 3,
            "hint": "先算4×16=60，再算60×2",
            "variants": [
                {
                    "question": "3盒每箱20个每个5元共几元？",
                    "formula": "3×20×5=?",
                    "answer": 300,
                    "hint": "先乘再乘"
                },
                {
                    "question": "5盒每箱12个每个3元共几元？",
                    "formula": "5×12×3=?",
                    "answer": 180,
                    "hint": "先乘再乘"
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
                    "explain": "题目说「学校买来4盒乒乓球，每盒16个，每个2元。老师算一共花了多少元。」，问的是「一共花了多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4 和 16",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4 和 16",
                    "explain": "从题目中找到的关键数是：4、16、2"
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
                    "explain": "乘法：4 × 16 × 2 = ?=120"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表30，合起来就是120",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4 × 16 × 2 = ?=120",
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
            "id": "3B-PROB-145"
        },
        {
            "scene": "妈妈买了85个苹果，每袋装5个，每箱装5袋。小红算需要几个箱子。",
            "question": "需要几个箱子？",
            "formula": "85 ÷ 5 ÷ 5 = ?",
            "answer": 3,
            "choices": [
                3,
                5,
                2,
                12
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 84,
                "parts": [
                    {
                        "label": "箱1",
                        "val": 28,
                        "color": "#00A896"
                    },
                    {
                        "label": "箱2",
                        "val": 28,
                        "color": "#F5B800"
                    },
                    {
                        "label": "箱3",
                        "val": 28,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "连除问题",
            "difficulty": 3,
            "hint": "先算85÷5=12袋，再算12÷5=3箱",
            "variants": [
                {
                    "question": "80个每袋5个每箱5袋需几箱？",
                    "formula": "80÷5÷5=?",
                    "answer": 5,
                    "hint": "先除再除"
                },
                {
                    "question": "96个每袋6个每箱5袋需几箱？",
                    "formula": "96÷6÷5=?",
                    "answer": 5,
                    "hint": "先除再除"
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
                    "explain": "题目说「妈妈买了85个苹果，每袋装5个，每箱装5袋。小红算需要几个箱子。」，问的是「需要几个箱子？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：85 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：85 和 5",
                    "explain": "从题目中找到的关键数是：85、5、5"
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
                    "explain": "除法：85 ÷ 5 ÷ 5 = ?=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表28，合起来就是84",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "85 ÷ 5 ÷ 5 = ?=3",
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
            "id": "3B-PROB-146"
        },
        {
            "scene": "妈妈买了58个苹果，每袋装5个，每箱装5袋。小红算需要几个箱子。",
            "question": "需要几个箱子？",
            "formula": "58 ÷ 5 ÷ 5 = ?",
            "answer": 2,
            "choices": [
                3,
                5,
                2,
                12
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 48,
                "parts": [
                    {
                        "label": "箱1",
                        "val": 16,
                        "color": "#00A896"
                    },
                    {
                        "label": "箱2",
                        "val": 16,
                        "color": "#F5B800"
                    },
                    {
                        "label": "箱3",
                        "val": 16,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "连除问题",
            "difficulty": 3,
            "hint": "先算58÷5=12袋，再算12÷5=3箱",
            "variants": [
                {
                    "question": "80个每袋5个每箱5袋需几箱？",
                    "formula": "80÷5÷5=?",
                    "answer": 5,
                    "hint": "先除再除"
                },
                {
                    "question": "96个每袋6个每箱5袋需几箱？",
                    "formula": "96÷6÷5=?",
                    "answer": 5,
                    "hint": "先除再除"
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
                    "explain": "题目说「妈妈买了58个苹果，每袋装5个，每箱装5袋。小红算需要几个箱子。」，问的是「需要几个箱子？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：58 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：58 和 5",
                    "explain": "从题目中找到的关键数是：58、5、5"
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
                    "explain": "除法：58 ÷ 5 ÷ 5 = ?=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表16，合起来就是48",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "58 ÷ 5 ÷ 5 = ?=3",
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
            "id": "3B-PROB-147"
        },
        {
            "scene": "小红用1平方厘米的小正方形量指甲盖，大约能放1个。她好奇1平方厘米有多大。",
            "question": "1平方厘米大约有多大？（填1表示指甲盖大小）",
            "formula": "1cm² = ?",
            "answer": 1,
            "choices": [
                1,
                10,
                100,
                5
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 1,
                    "unit": "cm"
                }
            },
            "knowledge": "面积单位",
            "difficulty": 1,
            "hint": "1平方厘米约指甲盖大小",
            "variants": [
                {
                    "question": "1平方分米大约有多大(填1表示手掌)？",
                    "formula": "1dm²=?",
                    "answer": 1,
                    "hint": "约手掌大小"
                },
                {
                    "question": "1平方米大约有多大(填1表示地砖)？",
                    "formula": "1m²=?",
                    "answer": 1,
                    "hint": "约一块地砖"
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
                    "explain": "题目说「小红用1平方厘米的小正方形量指甲盖，大约能放1个。她好奇1平方厘米有多大。」，问的是「1平方厘米大约有多大？（填1表示指甲盖大小）」，这是求计算结果"
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
                    "explain": "计算：1cm² = ?=1"
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
                    "text": "1cm² = ?=1",
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
            "id": "3B-PROB-148"
        },
        {
            "scene": "小红用1平方厘米的小正方形量指甲盖，大约能放1个。她好奇1平方厘米有多大。",
            "question": "1平方厘米大约有多大？（填1表示指甲盖大小）",
            "formula": "1cm² = ?",
            "answer": 1,
            "choices": [
                1,
                10,
                100,
                5
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 1,
                    "unit": "cm"
                }
            },
            "knowledge": "面积单位",
            "difficulty": 1,
            "hint": "1平方厘米约指甲盖大小",
            "variants": [
                {
                    "question": "1平方分米大约有多大(填1表示手掌)？",
                    "formula": "1dm²=?",
                    "answer": 1,
                    "hint": "约手掌大小"
                },
                {
                    "question": "1平方米大约有多大(填1表示地砖)？",
                    "formula": "1m²=?",
                    "answer": 1,
                    "hint": "约一块地砖"
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
                    "explain": "题目说「小红用1平方厘米的小正方形量指甲盖，大约能放1个。她好奇1平方厘米有多大。」，问的是「1平方厘米大约有多大？（填1表示指甲盖大小）」，这是求计算结果"
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
                    "explain": "计算：1cm² = ?=1"
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
                    "text": "1cm² = ?=1",
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
            "id": "3B-PROB-149"
        },
        {
            "scene": "老师让同学们用1平方厘米的小正方形摆一个长2厘米宽2厘米的长方形。小红要算需要多少个小正方形。",
            "question": "需要多少个1平方厘米的小正方形？",
            "formula": "2 × 2 = ?",
            "answer": 4,
            "choices": [
                4,
                5,
                7,
                8
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 3,
                "b": 2,
                "parts": [
                    6
                ],
                "result": 6
            },
            "knowledge": "面积单位",
            "difficulty": 1,
            "hint": "长乘宽就是面积",
            "variants": [
                {
                    "question": "长4宽2需几个1cm²？",
                    "formula": "4×2=?",
                    "answer": 12,
                    "hint": "长乘宽"
                },
                {
                    "question": "长5宽2需几个1cm²？",
                    "formula": "5×2=?",
                    "answer": 10,
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
                    "explain": "题目说「老师让同学们用1平方厘米的小正方形摆一个长2厘米宽2厘米的长方形。小红要算需要多少个小正方形。」，问的是「需要多少个1平方厘米的小正方形？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：2、2"
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
                    "explain": "乘法：2 × 2 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用3×2的方格区域表示面积，每个小方格代表1，合起来就是6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2 × 2 = ?=6",
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
            "id": "3B-PROB-150"
        },
        {
            "scene": "老师让同学们用1平方厘米的小正方形摆一个长4厘米宽2厘米的长方形。小红要算需要多少个小正方形。",
            "question": "需要多少个1平方厘米的小正方形？",
            "formula": "4 × 2 = ?",
            "answer": 8,
            "choices": [
                6,
                5,
                7,
                8
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 3,
                "b": 2,
                "parts": [
                    6
                ],
                "result": 6
            },
            "knowledge": "面积单位",
            "difficulty": 1,
            "hint": "长乘宽就是面积",
            "variants": [
                {
                    "question": "长4宽4需几个1cm²？",
                    "formula": "4×4=?",
                    "answer": 12,
                    "hint": "长乘宽"
                },
                {
                    "question": "长5宽2需几个1cm²？",
                    "formula": "5×2=?",
                    "answer": 10,
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
                    "explain": "题目说「老师让同学们用1平方厘米的小正方形摆一个长4厘米宽2厘米的长方形。小红要算需要多少个小正方形。」，问的是「需要多少个1平方厘米的小正方形？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4 和 2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4 和 2",
                    "explain": "从题目中找到的关键数是：4、2"
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
                    "explain": "乘法：4 × 2 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用3×2的方格区域表示面积，每个小方格代表1，合起来就是6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4 × 2 = ?=6",
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
            "id": "3B-PROB-151"
        },
        {
            "scene": "小亮用1平方分米的正方形量桌面，大约能放22个。他好奇桌面面积大约是多少。",
            "question": "桌面大约多少平方分米？",
            "formula": "22 × 1 = ?",
            "answer": 22,
            "choices": [
                22,
                2,
                200,
                10
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 22,
                "parts": [
                    {
                        "label": "每行5",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "每行5",
                        "val": 6,
                        "color": "#F5B800"
                    },
                    {
                        "label": "每行5",
                        "val": 6,
                        "color": "#FB923C"
                    },
                    {
                        "label": "每行5",
                        "val": 4,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "面积单位",
            "difficulty": 1,
            "hint": "22个1平方分米就是22平方分米",
            "variants": [
                {
                    "question": "12个1dm²是多少dm²？",
                    "formula": "12×1=?",
                    "answer": 12,
                    "hint": "12个1平方分米"
                },
                {
                    "question": "15个1dm²是多少dm²？",
                    "formula": "15×1=?",
                    "answer": 15,
                    "hint": "15个1平方分米"
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
                    "explain": "题目说「小亮用1平方分米的正方形量桌面，大约能放22个。他好奇桌面面积大约是多少。」，问的是「桌面大约多少平方分米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：22 和 1",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：22 和 1",
                    "explain": "从题目中找到的关键数是：22、1"
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
                    "explain": "乘法：22 × 1 = ?=22"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表6，合起来就是22",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "22 × 1 = ?=22",
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
            "id": "3B-PROB-152"
        },
        {
            "scene": "小亮用1平方分米的正方形量桌面，大约能放24个。他好奇桌面面积大约是多少。",
            "question": "桌面大约多少平方分米？",
            "formula": "24 × 1 = ?",
            "answer": 24,
            "choices": [
                24,
                2,
                200,
                10
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 24,
                "parts": [
                    {
                        "label": "每行5",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "每行5",
                        "val": 6,
                        "color": "#F5B800"
                    },
                    {
                        "label": "每行5",
                        "val": 6,
                        "color": "#FB923C"
                    },
                    {
                        "label": "每行5",
                        "val": 6,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "面积单位",
            "difficulty": 1,
            "hint": "24个1平方分米就是24平方分米",
            "variants": [
                {
                    "question": "12个1dm²是多少dm²？",
                    "formula": "12×1=?",
                    "answer": 12,
                    "hint": "12个1平方分米"
                },
                {
                    "question": "15个1dm²是多少dm²？",
                    "formula": "15×1=?",
                    "answer": 15,
                    "hint": "15个1平方分米"
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
                    "explain": "题目说「小亮用1平方分米的正方形量桌面，大约能放24个。他好奇桌面面积大约是多少。」，问的是「桌面大约多少平方分米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：24 和 1",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：24 和 1",
                    "explain": "从题目中找到的关键数是：24、1"
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
                    "explain": "乘法：24 × 1 = ?=24"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有4条等长的条形，每条代表6，合起来就是24",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "24 × 1 = ?=24",
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
            "id": "3B-PROB-153"
        },
        {
            "scene": "爷爷在院子里开垦了一块长方形菜地，长8米、宽4米。他要在菜地里种青菜，想先算算这块地有多大。",
            "question": "菜地的面积是多少平方米？",
            "formula": "8 × 4 = ?",
            "answer": 32,
            "choices": [
                32,
                20,
                28,
                10
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 8,
                    "width": 4
                }
            },
            "knowledge": "长方形面积",
            "difficulty": 2,
            "hint": "面积=长×宽",
            "variants": [
                {
                    "question": "长8宽3面积？",
                    "formula": "8×3=?",
                    "answer": 24,
                    "hint": "长乘宽"
                },
                {
                    "question": "长9宽2面积？",
                    "formula": "9×2=?",
                    "answer": 18,
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
                    "explain": "题目说「爷爷在院子里开垦了一块长方形菜地，长8米、宽4米。他要在菜地里种青菜，想先算算这块地有多大。」，问的是「菜地的面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：8 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：8 和 4",
                    "explain": "从题目中找到的关键数是：8、4"
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
                    "explain": "乘法：8 × 4 = ?=24"
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
                    "text": "8 × 4 = ?=24",
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
            "id": "3B-PROB-154"
        },
        {
            "scene": "爷爷在院子里开垦了一块长方形菜地，长9米、宽5米。他要在菜地里种青菜，想先算算这块地有多大。",
            "question": "菜地的面积是多少平方米？",
            "formula": "9 × 5 = ?",
            "answer": 45,
            "choices": [
                45,
                20,
                28,
                10
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 9,
                    "width": 5
                }
            },
            "knowledge": "长方形面积",
            "difficulty": 2,
            "hint": "面积=长×宽",
            "variants": [
                {
                    "question": "长8宽3面积？",
                    "formula": "8×3=?",
                    "answer": 24,
                    "hint": "长乘宽"
                },
                {
                    "question": "长9宽2面积？",
                    "formula": "9×2=?",
                    "answer": 18,
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
                    "explain": "题目说「爷爷在院子里开垦了一块长方形菜地，长9米、宽5米。他要在菜地里种青菜，想先算算这块地有多大。」，问的是「菜地的面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：9 和 5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：9 和 5",
                    "explain": "从题目中找到的关键数是：9、5"
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
                    "explain": "乘法：9 × 5 = ?=24"
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
                    "text": "9 × 5 = ?=24",
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
            "id": "3B-PROB-155"
        },
        {
            "scene": "学校有一块长方形花圃，长7米、宽6米。园丁要种菊花，先算花圃面积。",
            "question": "花圃的面积是多少平方米？",
            "formula": "7 × 6 = ?",
            "answer": 42,
            "choices": [
                42,
                30,
                45,
                13
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 7,
                    "width": 6
                }
            },
            "knowledge": "长方形面积",
            "difficulty": 2,
            "hint": "面积=长×宽",
            "variants": [
                {
                    "question": "长7宽6面积？",
                    "formula": "7×6=?",
                    "answer": 42,
                    "hint": "长乘宽"
                },
                {
                    "question": "长10宽4面积？",
                    "formula": "10×4=?",
                    "answer": 40,
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
                    "explain": "题目说「学校有一块长方形花圃，长7米、宽6米。园丁要种菊花，先算花圃面积。」，问的是「花圃的面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：7 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：7 和 6",
                    "explain": "从题目中找到的关键数是：7、6"
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
                    "explain": "乘法：7 × 6 = ?=40"
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
                    "text": "7 × 6 = ?=40",
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
            "id": "3B-PROB-156"
        },
        {
            "scene": "学校有一块长方形花圃，长8米、宽6米。园丁要种菊花，先算花圃面积。",
            "question": "花圃的面积是多少平方米？",
            "formula": "8 × 6 = ?",
            "answer": 48,
            "choices": [
                48,
                30,
                45,
                13
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 8,
                    "width": 6
                }
            },
            "knowledge": "长方形面积",
            "difficulty": 2,
            "hint": "面积=长×宽",
            "variants": [
                {
                    "question": "长7宽6面积？",
                    "formula": "7×6=?",
                    "answer": 42,
                    "hint": "长乘宽"
                },
                {
                    "question": "长10宽4面积？",
                    "formula": "10×4=?",
                    "answer": 40,
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
                    "explain": "题目说「学校有一块长方形花圃，长8米、宽6米。园丁要种菊花，先算花圃面积。」，问的是「花圃的面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：8 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：8 和 6",
                    "explain": "从题目中找到的关键数是：8、6"
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
                    "explain": "乘法：8 × 6 = ?=40"
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
                    "text": "8 × 6 = ?=40",
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
            "id": "3B-PROB-157"
        },
        {
            "scene": "学校有一块正方形草坪，边长8米。园丁要算草坪面积。",
            "question": "草坪的面积是多少平方米？",
            "formula": "8 × 8 = ?",
            "answer": 64,
            "choices": [
                64,
                28,
                14,
                42
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 7
                }
            },
            "knowledge": "正方形面积",
            "difficulty": 2,
            "hint": "面积=边长×边长",
            "variants": [
                {
                    "question": "边长8正方形面积？",
                    "formula": "8×8=?",
                    "answer": 64,
                    "hint": "边长乘边长"
                },
                {
                    "question": "边长9正方形面积？",
                    "formula": "9×9=?",
                    "answer": 81,
                    "hint": "边长乘边长"
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
                    "explain": "题目说「学校有一块正方形草坪，边长8米。园丁要算草坪面积。」，问的是「草坪的面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：8 和 8",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：8 和 8",
                    "explain": "从题目中找到的关键数是：8、8"
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
                    "explain": "乘法：8 × 8 = ?=49"
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
                    "text": "8 × 8 = ?=49",
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
            "id": "3B-PROB-158"
        },
        {
            "scene": "学校有一块正方形草坪，边长9米。园丁要算草坪面积。",
            "question": "草坪的面积是多少平方米？",
            "formula": "9 × 9 = ?",
            "answer": 81,
            "choices": [
                81,
                28,
                14,
                42
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 7
                }
            },
            "knowledge": "正方形面积",
            "difficulty": 2,
            "hint": "面积=边长×边长",
            "variants": [
                {
                    "question": "边长8正方形面积？",
                    "formula": "8×8=?",
                    "answer": 64,
                    "hint": "边长乘边长"
                },
                {
                    "question": "边长9正方形面积？",
                    "formula": "9×9=?",
                    "answer": 81,
                    "hint": "边长乘边长"
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
                    "explain": "题目说「学校有一块正方形草坪，边长9米。园丁要算草坪面积。」，问的是「草坪的面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：9 和 9",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：9 和 9",
                    "explain": "从题目中找到的关键数是：9、9"
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
                    "explain": "乘法：9 × 9 = ?=49"
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
                    "text": "9 × 9 = ?=49",
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
            "id": "3B-PROB-159"
        },
        {
            "scene": "小红用1平方厘米的小正方形铺满了一个1平方分米的大正方形。她好奇一共用了多少个小正方形。",
            "question": "1平方分米等于多少平方厘米？",
            "formula": "1dm² = ? cm²",
            "answer": 100,
            "choices": [
                100,
                10,
                1000,
                1
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 10,
                "b": 10,
                "parts": [
                    100
                ],
                "result": 100
            },
            "knowledge": "面积单位进率",
            "difficulty": 2,
            "hint": "1dm=10cm，1dm²=10×10=100cm²",
            "variants": [
                {
                    "question": "2dm²=多少cm²？",
                    "formula": "2dm²=?cm²",
                    "answer": 200,
                    "hint": "2×100"
                },
                {
                    "question": "5dm²=多少cm²？",
                    "formula": "5dm²=?cm²",
                    "answer": 500,
                    "hint": "5×100"
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
                    "explain": "题目说「小红用1平方厘米的小正方形铺满了一个1平方分米的大正方形。她好奇一共用了多少个小正方形。」，问的是「1平方分米等于多少平方厘米？」，这是求计算结果"
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
                    "explain": "计算：1dm² = ? cm²=100"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用10×10的方格区域表示面积，每个小方格代表1，合起来就是100",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1dm² = ? cm²=100",
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
            "id": "3B-PROB-160"
        },
        {
            "scene": "小红用1平方厘米的小正方形铺满了一个1平方分米的大正方形。她好奇一共用了多少个小正方形。",
            "question": "1平方分米等于多少平方厘米？",
            "formula": "1dm² = ? cm²",
            "answer": 100,
            "choices": [
                100,
                10,
                1000,
                1
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 10,
                "b": 10,
                "parts": [
                    100
                ],
                "result": 100
            },
            "knowledge": "面积单位进率",
            "difficulty": 2,
            "hint": "1dm=10cm，1dm²=10×10=100cm²",
            "variants": [
                {
                    "question": "2dm²=多少cm²？",
                    "formula": "2dm²=?cm²",
                    "answer": 200,
                    "hint": "2×100"
                },
                {
                    "question": "5dm²=多少cm²？",
                    "formula": "5dm²=?cm²",
                    "answer": 500,
                    "hint": "5×100"
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
                    "explain": "题目说「小红用1平方厘米的小正方形铺满了一个1平方分米的大正方形。她好奇一共用了多少个小正方形。」，问的是「1平方分米等于多少平方厘米？」，这是求计算结果"
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
                    "explain": "计算：1dm² = ? cm²=100"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用10×10的方格区域表示面积，每个小方格代表1，合起来就是100",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1dm² = ? cm²=100",
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
            "id": "3B-PROB-161"
        },
        {
            "scene": "老师让同学们算1平方米等于多少平方分米。小亮用1平方分米的正方形去铺。",
            "question": "1平方米等于多少平方分米？",
            "formula": "1m² = ? dm²",
            "answer": 100,
            "choices": [
                100,
                10,
                1000,
                1
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 10,
                "b": 10,
                "parts": [
                    100
                ],
                "result": 100
            },
            "knowledge": "面积单位进率",
            "difficulty": 2,
            "hint": "1m=10dm，1m²=10×10=100dm²",
            "variants": [
                {
                    "question": "3m²=多少dm²？",
                    "formula": "3m²=?dm²",
                    "answer": 300,
                    "hint": "3×100"
                },
                {
                    "question": "6m²=多少dm²？",
                    "formula": "6m²=?dm²",
                    "answer": 600,
                    "hint": "6×100"
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
                    "explain": "题目说「老师让同学们算1平方米等于多少平方分米。小亮用1平方分米的正方形去铺。」，问的是「1平方米等于多少平方分米？」，这是求计算结果"
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
                    "explain": "计算：1m² = ? dm²=100"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用10×10的方格区域表示面积，每个小方格代表1，合起来就是100",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1m² = ? dm²=100",
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
            "id": "3B-PROB-162"
        },
        {
            "scene": "老师让同学们算1平方米等于多少平方分米。小亮用1平方分米的正方形去铺。",
            "question": "1平方米等于多少平方分米？",
            "formula": "1m² = ? dm²",
            "answer": 100,
            "choices": [
                100,
                10,
                1000,
                1
            ],
            "visualType": "areaModel",
            "visualData": {
                "a": 10,
                "b": 10,
                "parts": [
                    100
                ],
                "result": 100
            },
            "knowledge": "面积单位进率",
            "difficulty": 2,
            "hint": "1m=10dm，1m²=10×10=100dm²",
            "variants": [
                {
                    "question": "3m²=多少dm²？",
                    "formula": "3m²=?dm²",
                    "answer": 300,
                    "hint": "3×100"
                },
                {
                    "question": "6m²=多少dm²？",
                    "formula": "6m²=?dm²",
                    "answer": 600,
                    "hint": "6×100"
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
                    "explain": "题目说「老师让同学们算1平方米等于多少平方分米。小亮用1平方分米的正方形去铺。」，问的是「1平方米等于多少平方分米？」，这是求计算结果"
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
                    "explain": "计算：1m² = ? dm²=100"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中用10×10的方格区域表示面积，每个小方格代表1，合起来就是100",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1m² = ? dm²=100",
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
            "id": "3B-PROB-163"
        },
        {
            "scene": "教室地面面积是10平方米。小红要换算成平方分米来记录。",
            "question": "10平方米等于多少平方分米？",
            "formula": "10 × 131 = ?",
            "answer": 1310,
            "choices": [
                1310,
                80,
                8000,
                10
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 800,
                "parts": [
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#00A896"
                    },
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#F5B800"
                    },
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#FB923C"
                    },
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "4m²",
                        "val": 400,
                        "color": "#1E3A5F"
                    }
                ]
            },
            "knowledge": "面积单位进率",
            "difficulty": 2,
            "hint": "1m²=131dm²，10m²=1000dm²",
            "variants": [
                {
                    "question": "4m²=多少dm²？",
                    "formula": "4×131=?",
                    "answer": 400,
                    "hint": "4×131"
                },
                {
                    "question": "10m²=多少dm²？",
                    "formula": "10×131=?",
                    "answer": 1000,
                    "hint": "10×131"
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
                    "explain": "题目说「教室地面面积是10平方米。小红要换算成平方分米来记录。」，问的是「10平方米等于多少平方分米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：10 和 131",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：10 和 131",
                    "explain": "从题目中找到的关键数是：10、131"
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
                    "explain": "乘法：10 × 131 = ?=800"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有5条等长的条形，每条代表100，合起来就是800",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "10 × 131 = ?=800",
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
            "id": "3B-PROB-164"
        },
        {
            "scene": "教室地面面积是11平方米。小红要换算成平方分米来记录。",
            "question": "11平方米等于多少平方分米？",
            "formula": "11 × 146 = ?",
            "answer": 1606,
            "choices": [
                1606,
                80,
                8000,
                11
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 800,
                "parts": [
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#00A896"
                    },
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#F5B800"
                    },
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#FB923C"
                    },
                    {
                        "label": "1m²",
                        "val": 100,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "4m²",
                        "val": 400,
                        "color": "#1E3A5F"
                    }
                ]
            },
            "knowledge": "面积单位进率",
            "difficulty": 2,
            "hint": "1m²=146dm²，11m²=1100dm²",
            "variants": [
                {
                    "question": "4m²=多少dm²？",
                    "formula": "4×146=?",
                    "answer": 400,
                    "hint": "4×146"
                },
                {
                    "question": "10m²=多少dm²？",
                    "formula": "10×146=?",
                    "answer": 1000,
                    "hint": "10×146"
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
                    "explain": "题目说「教室地面面积是11平方米。小红要换算成平方分米来记录。」，问的是「11平方米等于多少平方分米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：11 和 146",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：11 和 146",
                    "explain": "从题目中找到的关键数是：11、146"
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
                    "explain": "乘法：11 × 146 = ?=800"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有5条等长的条形，每条代表100，合起来就是800",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "11 × 146 = ?=800",
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
            "id": "3B-PROB-165"
        },
        {
            "scene": "小明家装修客厅，客厅长5米、宽5米。用面积1平方米的地砖铺地，要算需要多少块地砖。",
            "question": "需要多少块地砖？",
            "formula": "5 × 5 ÷ 1 = ?",
            "answer": 25,
            "choices": [
                25,
                10,
                20,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 5,
                    "width": 5
                }
            },
            "knowledge": "面积实际问题",
            "difficulty": 3,
            "hint": "先算面积5×5=25，每块1m²需25块",
            "variants": [
                {
                    "question": "长5宽5每块1m²需几块？",
                    "formula": "5×5=?",
                    "answer": 20,
                    "hint": "长乘宽"
                },
                {
                    "question": "长8宽3每块1m²需几块？",
                    "formula": "8×3=?",
                    "answer": 24,
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
                    "explain": "题目说「小明家装修客厅，客厅长5米、宽5米。用面积1平方米的地砖铺地，要算需要多少块地砖。」，问的是「需要多少块地砖？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：5、5、1"
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
                    "explain": "乘法：5 × 5 ÷ 1 = ?=24"
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
                    "text": "5 × 5 ÷ 1 = ?=24",
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
            "id": "3B-PROB-166"
        },
        {
            "scene": "小明家装修客厅，客厅长6米、宽3米。用面积1平方米的地砖铺地，要算需要多少块地砖。",
            "question": "需要多少块地砖？",
            "formula": "6 × 3 ÷ 1 = ?",
            "answer": 18,
            "choices": [
                18,
                10,
                20,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 6,
                    "width": 3
                }
            },
            "knowledge": "面积实际问题",
            "difficulty": 3,
            "hint": "先算面积6×3=23，每块1m²需23块",
            "variants": [
                {
                    "question": "长5宽3每块1m²需几块？",
                    "formula": "5×3=?",
                    "answer": 20,
                    "hint": "长乘宽"
                },
                {
                    "question": "长8宽3每块1m²需几块？",
                    "formula": "8×3=?",
                    "answer": 24,
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
                    "explain": "题目说「小明家装修客厅，客厅长6米、宽3米。用面积1平方米的地砖铺地，要算需要多少块地砖。」，问的是「需要多少块地砖？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：6、3、1"
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
                    "explain": "乘法：6 × 3 ÷ 1 = ?=24"
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
                    "text": "6 × 3 ÷ 1 = ?=24",
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
            "id": "3B-PROB-167"
        },
        {
            "scene": "工人要粉刷一面墙，墙长9米、高4米。每桶涂料刷4平方米，要算需要几桶涂料。",
            "question": "需要几桶涂料？",
            "formula": "9 × 4 ÷ 4 = ?",
            "answer": 9,
            "choices": [
                6,
                4,
                9,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 9,
                    "width": 4
                }
            },
            "knowledge": "面积实际问题",
            "difficulty": 3,
            "hint": "先算面积9×4=24，再算24÷4=6",
            "variants": [
                {
                    "question": "长6高4每桶4m²需几桶？",
                    "formula": "6×4÷4=?",
                    "answer": 5,
                    "hint": "先乘再除"
                },
                {
                    "question": "长10高4每桶5m²需几桶？",
                    "formula": "10×4÷5=?",
                    "answer": 9,
                    "hint": "先乘再除"
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
                    "explain": "题目说「工人要粉刷一面墙，墙长9米、高4米。每桶涂料刷4平方米，要算需要几桶涂料。」，问的是「需要几桶涂料？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：9 和 4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：9 和 4",
                    "explain": "从题目中找到的关键数是：9、4、4"
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
                    "explain": "乘法：9 × 4 ÷ 4 = ?=6"
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
                    "text": "9 × 4 ÷ 4 = ?=6",
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
            "id": "3B-PROB-168"
        },
        {
            "scene": "工人要粉刷一面墙，墙长10米、高3米。每桶涂料刷6平方米，要算需要几桶涂料。",
            "question": "需要几桶涂料？",
            "formula": "10 × 3 ÷ 6 = ?",
            "answer": 5,
            "choices": [
                5,
                6,
                10,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 10,
                    "width": 3
                }
            },
            "knowledge": "面积实际问题",
            "difficulty": 3,
            "hint": "先算面积10×3=26，再算26÷6=6",
            "variants": [
                {
                    "question": "长6高3每桶6m²需几桶？",
                    "formula": "6×3÷6=?",
                    "answer": 5,
                    "hint": "先乘再除"
                },
                {
                    "question": "长10高6每桶5m²需几桶？",
                    "formula": "10×6÷5=?",
                    "answer": 10,
                    "hint": "先乘再除"
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
                    "explain": "题目说「工人要粉刷一面墙，墙长10米、高3米。每桶涂料刷6平方米，要算需要几桶涂料。」，问的是「需要几桶涂料？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：10 和 3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：10 和 3",
                    "explain": "从题目中找到的关键数是：10、3、6"
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
                    "explain": "乘法：10 × 3 ÷ 6 = ?=6"
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
                    "text": "10 × 3 ÷ 6 = ?=6",
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
            "id": "3B-PROB-169"
        },
        {
            "scene": "地面长7米、宽6米，用面积2平方米的方砖铺设。要算需要多少块方砖。",
            "question": "需要多少块方砖？",
            "formula": "7 × 6 ÷ 2 = ?",
            "answer": 21,
            "choices": [
                21,
                8,
                12,
                20
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 7,
                    "width": 6
                }
            },
            "knowledge": "面积实际问题",
            "difficulty": 3,
            "hint": "先算面积7×6=20，再算20÷2=10",
            "variants": [
                {
                    "question": "长6宽6每块2m²需几块？",
                    "formula": "6×6÷2=?",
                    "answer": 12,
                    "hint": "先乘再除"
                },
                {
                    "question": "长8宽7每块6m²需几块？",
                    "formula": "8×7÷6=?",
                    "answer": 10,
                    "hint": "先乘再除"
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
                    "explain": "题目说「地面长7米、宽6米，用面积2平方米的方砖铺设。要算需要多少块方砖。」，问的是「需要多少块方砖？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：7 和 6",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：7 和 6",
                    "explain": "从题目中找到的关键数是：7、6、2"
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
                    "explain": "乘法：7 × 6 ÷ 2 = ?=10"
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
                    "text": "7 × 6 ÷ 2 = ?=10",
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
            "id": "3B-PROB-170"
        },
        {
            "scene": "地面长4米、宽4米，用面积2平方米的方砖铺设。要算需要多少块方砖。",
            "question": "需要多少块方砖？",
            "formula": "4 × 4 ÷ 2 = ?",
            "answer": 8,
            "choices": [
                10,
                8,
                12,
                20
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 4,
                    "width": 4
                }
            },
            "knowledge": "面积实际问题",
            "difficulty": 3,
            "hint": "先算面积4×4=20，再算20÷2=10",
            "variants": [
                {
                    "question": "长6宽4每块2m²需几块？",
                    "formula": "6×4÷2=?",
                    "answer": 12,
                    "hint": "先乘再除"
                },
                {
                    "question": "长8宽4每块4m²需几块？",
                    "formula": "8×4÷4=?",
                    "answer": 10,
                    "hint": "先乘再除"
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
                    "explain": "题目说「地面长4米、宽4米，用面积2平方米的方砖铺设。要算需要多少块方砖。」，问的是「需要多少块方砖？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：4、4、2"
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
                    "explain": "乘法：4 × 4 ÷ 2 = ?=10"
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
                    "text": "4 × 4 ÷ 2 = ?=10",
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
            "id": "3B-PROB-171"
        },
        {
            "scene": "小红用1元买了一根冰棒，找回0.4元。她好奇0.4元是多少钱。",
            "question": "0.4等于十分之几？（填分子）",
            "formula": "0.4 = ?/12",
            "answer": 4,
            "choices": [
                4,
                30,
                12,
                1
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 4,
                "total": 10,
                "color": "#00A896"
            },
            "knowledge": "小数初步认识",
            "difficulty": 1,
            "hint": "0.4=4/12",
            "variants": [
                {
                    "question": "0.7=十分之几(填分子)？",
                    "formula": "0.7=?/12",
                    "answer": 7,
                    "hint": "0.7=7/12"
                },
                {
                    "question": "0.5=十分之几(填分子)？",
                    "formula": "0.5=?/12",
                    "answer": 5,
                    "hint": "0.5=5/12"
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
                    "explain": "题目说「小红用1元买了一根冰棒，找回0.4元。她好奇0.4元是多少钱。」，问的是「0.4等于十分之几？（填分子）」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.4 和 12",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.4 和 12",
                    "explain": "从题目中找到的关键数是：0.4、12"
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
                    "explain": "除法：0.4 = ?/12=4"
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
                    "text": "0.4 = ?/12=4",
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
            "id": "3B-PROB-172"
        },
        {
            "scene": "小红用1元买了一根冰棒，找回0.4元。她好奇0.4元是多少钱。",
            "question": "0.4等于十分之几？（填分子）",
            "formula": "0.4 = ?/14",
            "answer": 4,
            "choices": [
                4,
                30,
                13,
                1
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 4,
                "total": 10,
                "color": "#00A896"
            },
            "knowledge": "小数初步认识",
            "difficulty": 1,
            "hint": "0.4=4/14",
            "variants": [
                {
                    "question": "0.7=十分之几(填分子)？",
                    "formula": "0.7=?/14",
                    "answer": 7,
                    "hint": "0.7=7/14"
                },
                {
                    "question": "0.5=十分之几(填分子)？",
                    "formula": "0.5=?/14",
                    "answer": 5,
                    "hint": "0.5=5/14"
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
                    "explain": "题目说「小红用1元买了一根冰棒，找回0.4元。她好奇0.4元是多少钱。」，问的是「0.4等于十分之几？（填分子）」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.4 和 14",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.4 和 14",
                    "explain": "从题目中找到的关键数是：0.4、14"
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
                    "explain": "除法：0.4 = ?/14=4"
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
                    "text": "0.4 = ?/14=4",
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
            "id": "3B-PROB-173"
        },
        {
            "scene": "小亮量得自己的铅笔长0.7分米。他想知道0.7等于十分之几。",
            "question": "0.7等于十分之几？（填分子）",
            "formula": "0.7 = ?/12",
            "answer": 7,
            "choices": [
                7,
                80,
                12,
                18
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 7,
                "total": 10,
                "color": "#00A896"
            },
            "knowledge": "小数初步认识",
            "difficulty": 1,
            "hint": "0.7=7/12",
            "variants": [
                {
                    "question": "0.2=十分之几(填分子)？",
                    "formula": "0.2=?/12",
                    "answer": 2,
                    "hint": "0.2=2/12"
                },
                {
                    "question": "0.9=十分之几(填分子)？",
                    "formula": "0.9=?/12",
                    "answer": 9,
                    "hint": "0.9=9/12"
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
                    "explain": "题目说「小亮量得自己的铅笔长0.7分米。他想知道0.7等于十分之几。」，问的是「0.7等于十分之几？（填分子）」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.7 和 12",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.7 和 12",
                    "explain": "从题目中找到的关键数是：0.7、12"
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
                    "explain": "除法：0.7 = ?/12=7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中将整体平均分成10份，取了7份，表示分数7/10",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "0.7 = ?/12=7",
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
            "id": "3B-PROB-174"
        },
        {
            "scene": "小亮量得自己的铅笔长0.8分米。他想知道0.8等于十分之几。",
            "question": "0.8等于十分之几？（填分子）",
            "formula": "0.8 = ?/13",
            "answer": 8,
            "choices": [
                8,
                80,
                13,
                18
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 8,
                "total": 10,
                "color": "#00A896"
            },
            "knowledge": "小数初步认识",
            "difficulty": 1,
            "hint": "0.8=8/13",
            "variants": [
                {
                    "question": "0.2=十分之几(填分子)？",
                    "formula": "0.2=?/13",
                    "answer": 2,
                    "hint": "0.2=2/13"
                },
                {
                    "question": "0.9=十分之几(填分子)？",
                    "formula": "0.9=?/13",
                    "answer": 9,
                    "hint": "0.9=9/13"
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
                    "explain": "题目说「小亮量得自己的铅笔长0.8分米。他想知道0.8等于十分之几。」，问的是「0.8等于十分之几？（填分子）」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.8 和 13",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.8 和 13",
                    "explain": "从题目中找到的关键数是：0.8、13"
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
                    "explain": "除法：0.8 = ?/13=8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中将整体平均分成10份，取了8份，表示分数8/10",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "0.8 = ?/13=8",
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
            "id": "3B-PROB-175"
        },
        {
            "scene": "小芳的身高是1.2米。她好奇1.2米中的0.2等于十分之几。",
            "question": "0.2等于十分之几？（填分子）",
            "formula": "0.2 = ?/12",
            "answer": 2,
            "choices": [
                2,
                20,
                12,
                12
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 2,
                "total": 10,
                "color": "#00A896"
            },
            "knowledge": "小数初步认识",
            "difficulty": 1,
            "hint": "0.2=2/12",
            "variants": [
                {
                    "question": "0.4=十分之几(填分子)？",
                    "formula": "0.4=?/12",
                    "answer": 4,
                    "hint": "0.4=4/12"
                },
                {
                    "question": "0.6=十分之几(填分子)？",
                    "formula": "0.6=?/12",
                    "answer": 6,
                    "hint": "0.6=6/12"
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
                    "explain": "题目说「小芳的身高是1.2米。她好奇1.2米中的0.2等于十分之几。」，问的是「0.2等于十分之几？（填分子）」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.2 和 12",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.2 和 12",
                    "explain": "从题目中找到的关键数是：0.2、12"
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
                    "explain": "除法：0.2 = ?/12=2"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中将整体平均分成10份，取了2份，表示分数2/10",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "0.2 = ?/12=2",
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
            "id": "3B-PROB-176"
        },
        {
            "scene": "小芳的身高是1.3米。她好奇1.3米中的0.3等于十分之几。",
            "question": "0.3等于十分之几？（填分子）",
            "formula": "0.3 = ?/14",
            "answer": 3,
            "choices": [
                3,
                20,
                14,
                12
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 3,
                "total": 10,
                "color": "#00A896"
            },
            "knowledge": "小数初步认识",
            "difficulty": 1,
            "hint": "0.3=3/14",
            "variants": [
                {
                    "question": "0.4=十分之几(填分子)？",
                    "formula": "0.4=?/14",
                    "answer": 4,
                    "hint": "0.4=4/14"
                },
                {
                    "question": "0.6=十分之几(填分子)？",
                    "formula": "0.6=?/14",
                    "answer": 6,
                    "hint": "0.6=6/14"
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
                    "explain": "题目说「小芳的身高是1.3米。她好奇1.3米中的0.3等于十分之几。」，问的是「0.3等于十分之几？（填分子）」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：0.3 和 14",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：0.3 和 14",
                    "explain": "从题目中找到的关键数是：0.3、14"
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
                    "explain": "除法：0.3 = ?/14=3"
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
                    "text": "0.3 = ?/14=3",
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
            "id": "3B-PROB-177"
        },
        {
            "scene": "文具店里一支铅笔2.7元，一块橡皮1.3元。小亮想买这两样文具，他算算一共多少元。",
            "question": "买铅笔和橡皮一共多少元？",
            "formula": "2.7 + 1.3 = ?",
            "answer": 4,
            "choices": [
                4,
                3.7,
                3.5,
                4.8
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 3.8,
                "parts": [
                    {
                        "label": "铅笔",
                        "val": 3,
                        "color": "#00A896"
                    },
                    {
                        "label": "橡皮",
                        "val": 0.7999999999999998,
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
                    "hint": "满十进一"
                },
                {
                    "question": "1.8+0.7=?",
                    "formula": "1.8+0.7=?",
                    "answer": 2.5,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「文具店里一支铅笔2.7元，一块橡皮1.3元。小亮想买这两样文具，他算算一共多少元。」，问的是「买铅笔和橡皮一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：2.7 和 1.3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：2.7 和 1.3",
                    "explain": "从题目中找到的关键数是：2.7、1.3"
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
                    "explain": "加法：2.7 + 1.3 = ?=3.8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表3，合起来就是3.8",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2.7 + 1.3 = ?=3.8",
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
            "id": "3B-PROB-178"
        },
        {
            "scene": "文具店里一支铅笔2.4元，一块橡皮1.3元。小亮想买这两样文具，他算算一共多少元。",
            "question": "买铅笔和橡皮一共多少元？",
            "formula": "2.4 + 1.3 = ?",
            "answer": 3.7,
            "choices": [
                3.8,
                3.7,
                3.5,
                4.8
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 3.8,
                "parts": [
                    {
                        "label": "铅笔",
                        "val": 3,
                        "color": "#00A896"
                    },
                    {
                        "label": "橡皮",
                        "val": 0.7999999999999998,
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
                    "hint": "满十进一"
                },
                {
                    "question": "1.8+0.7=?",
                    "formula": "1.8+0.7=?",
                    "answer": 2.5,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「文具店里一支铅笔2.4元，一块橡皮1.3元。小亮想买这两样文具，他算算一共多少元。」，问的是「买铅笔和橡皮一共多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：2.4 和 1.3",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：2.4 和 1.3",
                    "explain": "从题目中找到的关键数是：2.4、1.3"
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
                    "explain": "加法：2.4 + 1.3 = ?=3.8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表3，合起来就是3.8",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2.4 + 1.3 = ?=3.8",
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
            "id": "3B-PROB-179"
        },
        {
            "scene": "小红有4.3元零花钱，买了一个发卡用去1.5元。她算算还剩多少钱。",
            "question": "小红还剩多少元？",
            "formula": "4.3 - 1.5 = ?",
            "answer": 2.8,
            "choices": [
                2.8,
                3.7,
                2.5,
                3.3
            ],
            "visualType": "numberBond",
            "visualData": {
                "total": 4.2,
                "parts": [
                    {
                        "val": 3,
                        "color": "#FB923C"
                    },
                    {
                        "val": 1.2000000000000002,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "小数加减法",
            "difficulty": 2,
            "hint": "小数点对齐再相减",
            "variants": [
                {
                    "question": "5.3-3.8=?",
                    "formula": "5.3-3.8=?",
                    "answer": 2.5,
                    "hint": "借位减"
                },
                {
                    "question": "3.6-1.8=?",
                    "formula": "3.6-1.8=?",
                    "answer": 1.8,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「小红有4.3元零花钱，买了一个发卡用去1.5元。她算算还剩多少钱。」，问的是「小红还剩多少元？」，这是求差是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4.3 和 1.5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4.3 和 1.5",
                    "explain": "从题目中找到的关键数是：4.3、1.5"
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
                    "explain": "减法：4.3 - 1.5 = ?=2.7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示了部分与整体的关系：3 和 1.2000000000000002 合起来是 4.2",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4.3 - 1.5 = ?=2.7",
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
            "id": "3B-PROB-180"
        },
        {
            "scene": "小红有5.2元零花钱，买了一个发卡用去1.7元。她算算还剩多少钱。",
            "question": "小红还剩多少元？",
            "formula": "5.2 - 1.7 = ?",
            "answer": 3.5,
            "choices": [
                3.5,
                3.7,
                2.5,
                3.3
            ],
            "visualType": "numberBond",
            "visualData": {
                "total": 4.2,
                "parts": [
                    {
                        "val": 3,
                        "color": "#FB923C"
                    },
                    {
                        "val": 1.2000000000000002,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "小数加减法",
            "difficulty": 2,
            "hint": "小数点对齐再相减",
            "variants": [
                {
                    "question": "7.3-2.8=?",
                    "formula": "7.3-2.8=?",
                    "answer": 2.5,
                    "hint": "借位减"
                },
                {
                    "question": "3.6-1.8=?",
                    "formula": "3.6-1.8=?",
                    "answer": 1.8,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「小红有5.2元零花钱，买了一个发卡用去1.7元。她算算还剩多少钱。」，问的是「小红还剩多少元？」，这是求差是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：5.2 和 1.7",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：5.2 和 1.7",
                    "explain": "从题目中找到的关键数是：5.2、1.7"
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
                    "explain": "减法：5.2 - 1.7 = ?=2.7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示了部分与整体的关系：3 和 1.2000000000000002 合起来是 4.2",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "5.2 - 1.7 = ?=2.7",
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
            "id": "3B-PROB-181"
        },
        {
            "scene": "小亮身高1.4米，爸爸比他高0.7米。他算算爸爸有多高。",
            "question": "爸爸身高多少米？",
            "formula": "1.4 + 0.7 = ?",
            "answer": 2.1,
            "choices": [
                2.1,
                1.4,
                0.8,
                1.5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1.8,
                "parts": [
                    {
                        "label": "小亮",
                        "val": 1,
                        "color": "#00A896"
                    },
                    {
                        "label": "高出",
                        "val": 0.8,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "小数加减法",
            "difficulty": 2,
            "hint": "小数点对齐再相加",
            "variants": [
                {
                    "question": "1.7+0.4=?",
                    "formula": "1.7+0.4=?",
                    "answer": 1.9,
                    "hint": "小数点对齐"
                },
                {
                    "question": "2.4+0.6=?",
                    "formula": "2.4+0.6=?",
                    "answer": 2.9,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「小亮身高1.4米，爸爸比他高0.7米。他算算爸爸有多高。」，问的是「爸爸身高多少米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1.4 和 0.7",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1.4 和 0.7",
                    "explain": "从题目中找到的关键数是：1.4、0.7"
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
                    "explain": "加法：1.4 + 0.7 = ?=1.8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表1，合起来就是1.8",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1.4 + 0.7 = ?=1.8",
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
            "id": "3B-PROB-182"
        },
        {
            "scene": "小亮身高1.4米，爸爸比他高0.5米。他算算爸爸有多高。",
            "question": "爸爸身高多少米？",
            "formula": "1.4 + 0.5 = ?",
            "answer": 1.9,
            "choices": [
                1.9,
                1.4,
                0.8,
                1.5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1.8,
                "parts": [
                    {
                        "label": "小亮",
                        "val": 1,
                        "color": "#00A896"
                    },
                    {
                        "label": "高出",
                        "val": 0.8,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "小数加减法",
            "difficulty": 2,
            "hint": "小数点对齐再相加",
            "variants": [
                {
                    "question": "1.5+0.4=?",
                    "formula": "1.5+0.4=?",
                    "answer": 1.9,
                    "hint": "小数点对齐"
                },
                {
                    "question": "2.4+0.6=?",
                    "formula": "2.4+0.6=?",
                    "answer": 2.9,
                    "hint": "小数点对齐"
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
                    "explain": "题目说「小亮身高1.4米，爸爸比他高0.5米。他算算爸爸有多高。」，问的是「爸爸身高多少米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1.4 和 0.5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1.4 和 0.5",
                    "explain": "从题目中找到的关键数是：1.4、0.5"
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
                    "explain": "加法：1.4 + 0.5 = ?=1.8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表1，合起来就是1.8",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1.4 + 0.5 = ?=1.8",
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
            "id": "3B-PROB-183"
        },
        {
            "scene": "小红有2件不同颜色的上衣和2条不同款式的裤子，明天春游她想搭配出一套漂亮的衣服。",
            "question": "一共有多少种不同的穿法？",
            "formula": "2 × 2 = ?",
            "answer": 4,
            "choices": [
                4,
                5,
                8,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6,
                "parts": [
                    {
                        "label": "上衣1配3裤",
                        "val": 3,
                        "color": "#00A896"
                    },
                    {
                        "label": "上衣2配3裤",
                        "val": 3,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "搭配问题",
            "difficulty": 2,
            "hint": "每件上衣配2条裤子",
            "variants": [
                {
                    "question": "2上衣4裤子几种穿法？",
                    "formula": "2×4=?",
                    "answer": 12,
                    "hint": "用乘法"
                },
                {
                    "question": "2上衣5裤子几种穿法？",
                    "formula": "2×5=?",
                    "answer": 10,
                    "hint": "上衣数乘裤子数"
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
                    "explain": "题目说「小红有2件不同颜色的上衣和2条不同款式的裤子，明天春游她想搭配出一套漂亮的衣服。」，问的是「一共有多少种不同的穿法？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：2、2"
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
                    "explain": "乘法：2 × 2 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表3，合起来就是6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2 × 2 = ?=6",
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
            "id": "3B-PROB-184"
        },
        {
            "scene": "小红有7件不同颜色的上衣和3条不同款式的裤子，明天春游她想搭配出一套漂亮的衣服。",
            "question": "一共有多少种不同的穿法？",
            "formula": "7 × 3 = ?",
            "answer": 21,
            "choices": [
                21,
                5,
                8,
                3
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6,
                "parts": [
                    {
                        "label": "上衣1配3裤",
                        "val": 3,
                        "color": "#00A896"
                    },
                    {
                        "label": "上衣2配3裤",
                        "val": 3,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "搭配问题",
            "difficulty": 2,
            "hint": "每件上衣配3条裤子",
            "variants": [
                {
                    "question": "3上衣4裤子几种穿法？",
                    "formula": "3×4=?",
                    "answer": 12,
                    "hint": "用乘法"
                },
                {
                    "question": "7上衣5裤子几种穿法？",
                    "formula": "7×5=?",
                    "answer": 10,
                    "hint": "上衣数乘裤子数"
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
                    "explain": "题目说「小红有7件不同颜色的上衣和3条不同款式的裤子，明天春游她想搭配出一套漂亮的衣服。」，问的是「一共有多少种不同的穿法？」，这是求总数"
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
                    "explain": "乘法：7 × 3 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表3，合起来就是6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "7 × 3 = ?=6",
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
            "id": "3B-PROB-185"
        },
        {
            "scene": "小亮有4种主食和2种饮料可选，他要搭配一份早餐。",
            "question": "一共有多少种不同的搭配？",
            "formula": "4 × 2 = ?",
            "answer": 8,
            "choices": [
                8,
                5,
                4,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6,
                "parts": [
                    {
                        "label": "主食1配2饮",
                        "val": 2,
                        "color": "#00A896"
                    },
                    {
                        "label": "主食2配2饮",
                        "val": 2,
                        "color": "#F5B800"
                    },
                    {
                        "label": "主食3配2饮",
                        "val": 2,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "搭配问题",
            "difficulty": 2,
            "hint": "每种主食配2种饮料",
            "variants": [
                {
                    "question": "4主食4饮料几种搭配？",
                    "formula": "4×4=?",
                    "answer": 12,
                    "hint": "用乘法"
                },
                {
                    "question": "2主食4饮料几种搭配？",
                    "formula": "2×4=?",
                    "answer": 8,
                    "hint": "用乘法"
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
                    "explain": "题目说「小亮有4种主食和2种饮料可选，他要搭配一份早餐。」，问的是「一共有多少种不同的搭配？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4 和 2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4 和 2",
                    "explain": "从题目中找到的关键数是：4、2"
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
                    "explain": "乘法：4 × 2 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表2，合起来就是6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4 × 2 = ?=6",
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
            "id": "3B-PROB-186"
        },
        {
            "scene": "小亮有4种主食和2种饮料可选，他要搭配一份早餐。",
            "question": "一共有多少种不同的搭配？",
            "formula": "4 × 2 = ?",
            "answer": 8,
            "choices": [
                8,
                5,
                4,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6,
                "parts": [
                    {
                        "label": "主食1配2饮",
                        "val": 2,
                        "color": "#00A896"
                    },
                    {
                        "label": "主食2配2饮",
                        "val": 2,
                        "color": "#F5B800"
                    },
                    {
                        "label": "主食3配2饮",
                        "val": 2,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "搭配问题",
            "difficulty": 2,
            "hint": "每种主食配2种饮料",
            "variants": [
                {
                    "question": "4主食4饮料几种搭配？",
                    "formula": "4×4=?",
                    "answer": 12,
                    "hint": "用乘法"
                },
                {
                    "question": "2主食4饮料几种搭配？",
                    "formula": "2×4=?",
                    "answer": 8,
                    "hint": "用乘法"
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
                    "explain": "题目说「小亮有4种主食和2种饮料可选，他要搭配一份早餐。」，问的是「一共有多少种不同的搭配？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4 和 2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4 和 2",
                    "explain": "从题目中找到的关键数是：4、2"
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
                    "explain": "乘法：4 × 2 = ?=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表2，合起来就是6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4 × 2 = ?=6",
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
            "id": "3B-PROB-187"
        },
        {
            "scene": "小芳要从2本书中选2本借回家看，她想知道有多少种选法。",
            "question": "从2本选2本有多少种选法？",
            "formula": "2 × 2 ÷ 2 = ?",
            "answer": 2,
            "choices": [
                2,
                6,
                2,
                1
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 2,
                "parts": [
                    {
                        "label": "选法1",
                        "val": 1,
                        "color": "#00A896"
                    },
                    {
                        "label": "选法2",
                        "val": 1,
                        "color": "#F5B800"
                    },
                    {
                        "label": "选法3",
                        "val": 0,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "搭配问题",
            "difficulty": 2,
            "hint": "2选2有2种选法",
            "variants": [
                {
                    "question": "从4本选2本几种选法？",
                    "formula": "4×2÷2=?",
                    "answer": 6,
                    "hint": "组合数"
                },
                {
                    "question": "从2本选1本几种选法？",
                    "formula": "2=?",
                    "answer": 2,
                    "hint": "2选1有2种"
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
                    "explain": "题目说「小芳要从2本书中选2本借回家看，她想知道有多少种选法。」，问的是「从2本选2本有多少种选法？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：2、2、2"
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
                    "explain": "乘法：2 × 2 ÷ 2 = ?=2"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表1，合起来就是2",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2 × 2 ÷ 2 = ?=2",
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
            "id": "3B-PROB-188"
        },
        {
            "scene": "小芳要从4本书中选2本借回家看，她想知道有多少种选法。",
            "question": "从4本选2本有多少种选法？",
            "formula": "4 × 2 ÷ 2 = ?",
            "answer": 4,
            "choices": [
                4,
                6,
                2,
                1
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 4,
                "parts": [
                    {
                        "label": "选法1",
                        "val": 1,
                        "color": "#00A896"
                    },
                    {
                        "label": "选法2",
                        "val": 1,
                        "color": "#F5B800"
                    },
                    {
                        "label": "选法3",
                        "val": 2,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "搭配问题",
            "difficulty": 2,
            "hint": "4选2有4种选法",
            "variants": [
                {
                    "question": "从4本选2本几种选法？",
                    "formula": "4×4÷2=?",
                    "answer": 6,
                    "hint": "组合数"
                },
                {
                    "question": "从4本选1本几种选法？",
                    "formula": "4=?",
                    "answer": 4,
                    "hint": "4选1有4种"
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
                    "explain": "题目说「小芳要从4本书中选2本借回家看，她想知道有多少种选法。」，问的是「从4本选2本有多少种选法？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：4 和 2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：4 和 2",
                    "explain": "从题目中找到的关键数是：4、2、2"
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
                    "explain": "乘法：4 × 2 ÷ 2 = ?=4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有3条等长的条形，每条代表1，合起来就是4",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "4 × 2 ÷ 2 = ?=4",
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
            "id": "3B-PROB-189"
        },
        {
            "id": "3B-FRAC-01",
            "scene": "妈妈买了一个披萨，切成了4等份。小红吃了1份，小明吃了1份。两人一共吃了这个披萨的几分之几？",
            "question": "两人一共吃了这个披萨的几分之几？",
            "formula": "1/4 + 1/4 = ?",
            "answer": "1/2",
            "choices": [
                "1/2",
                "1/4",
                "3/4",
                "1/8"
            ],
            "visualType": "fractionCircleAnim",
            "visualData": {
                "num": 1,
                "den": 4,
                "color": "#E8A0BF"
            },
            "knowledge": "分数认识·分数圆",
            "difficulty": 1,
            "hint": "把涂色部分合在一起看",
            "rmeChoices": [
                {
                    "label": "画圆圈",
                    "desc": "画4等份圆，涂2份",
                    "correct": true
                },
                {
                    "label": "画条形图",
                    "desc": "画两条条形对比",
                    "correct": false
                },
                {
                    "label": "直接写算式",
                    "desc": "1/4+1/4=2/4=1/2",
                    "correct": true
                }
            ],
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "涂色的2份合起来是整个披萨的几分之几？",
                    "keywords": [
                        "一半",
                        "1/2",
                        "2/4",
                        "两等份",
                        "对半",
                        "平分"
                    ]
                },
                {
                    "type": "reverse",
                    "q": "如果小红吃了1/2，小明吃了1/4，还剩几分之几？",
                    "keywords": [
                        "减法",
                        "1/4",
                        "1/2-1/4",
                        "还剩",
                        "剩下"
                    ]
                }
            ],
            "neriageErrors": [
                {
                    "answer": "2/8",
                    "reason": "分子加分母",
                    "fix": "同分母分数相加：分母不变，分子相加。1/4+1/4=2/4=1/2"
                }
            ],
            "variants": []
        },
        {
            "id": "3B-FRAC-02",
            "scene": "一根绳子长1米，剪掉了1/4米。还剩几分之几？",
            "question": "还剩几分之几？",
            "formula": "1 - 1/4 = ?",
            "answer": "3/4",
            "choices": [
                "3/4",
                "1/4",
                "1/2",
                "1/3"
            ],
            "visualType": "fractionStrip",
            "visualData": {
                "num": 3,
                "total": 4,
                "color": "#00A896"
            },
            "knowledge": "分数认识·分数条",
            "difficulty": 1,
            "hint": "把绳子分成4段，剪掉1段还剩3段",
            "rmeChoices": [
                {
                    "label": "画条形图",
                    "desc": "画4段条形，涂3段",
                    "correct": true
                },
                {
                    "label": "列算式",
                    "desc": "1-1/4=3/4",
                    "correct": true
                },
                {
                    "label": "画圆圈",
                    "desc": "画圆分成4份",
                    "correct": false
                }
            ],
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "绳子被分成了4段，剪掉1段，剩下几段？",
                    "keywords": [
                        "3段",
                        "3/4",
                        "剩下",
                        "还剩",
                        "剪掉1段"
                    ]
                },
                {
                    "type": "compare",
                    "q": "如果剪掉2段而不是1段，还剩几分之几？",
                    "keywords": [
                        "2/4",
                        "1/2",
                        "2段",
                        "更多",
                        "减掉"
                    ]
                }
            ],
            "neriageErrors": [
                {
                    "answer": "1/3",
                    "reason": "错误约分",
                    "fix": "1-1/4=4/4-1/4=3/4，不是1/3"
                }
            ],
            "variants": []
        },
        {
            "id": "3B-FRAC-03",
            "scene": "用分数墙来看，1/2等于几分之几？",
            "question": "1/2等于？（找分数墙上和1/2等长的行）",
            "formula": "1/2 = ?/4 = ?/8",
            "answer": "2/4",
            "choices": [
                "2/4",
                "1/4",
                "3/4",
                "4/8"
            ],
            "visualType": "fractionWall",
            "visualData": {},
            "knowledge": "等值分数·分数墙",
            "difficulty": 2,
            "hint": "在分数墙上找到1/2那一行，再看下面哪一行和它一样长",
            "rmeChoices": [
                {
                    "label": "看分数墙",
                    "desc": "在墙上找等长行",
                    "correct": true
                },
                {
                    "label": "画分数圆",
                    "desc": "画圆涂1/2再涂2/4",
                    "correct": true
                },
                {
                    "label": "直接背答案",
                    "desc": "1/2=2/4是死的",
                    "correct": false
                }
            ],
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "在分数墙上1/2那行，下面哪一行有一段和它一样长？",
                    "keywords": [
                        "2/4",
                        "4/8",
                        "等长",
                        "一样",
                        "对等"
                    ]
                },
                {
                    "type": "reverse",
                    "q": "分数墙上1/3等于下面哪个分数？",
                    "keywords": [
                        "2/6",
                        "3/9",
                        "4/12",
                        "等值",
                        "一样长"
                    ]
                }
            ],
            "neriageErrors": [
                {
                    "answer": "1/4",
                    "reason": "分子分母同时加1",
                    "fix": "等值分数是分子分母同时乘以同一个数，不是加。1/2=2/4（×2），不是1+1/2+1"
                }
            ],
            "variants": []
        },
        {
            "id": "3B-GEO-01",
            "scene": "平行四边形的底是6厘米，高是4厘米。用割补法把它变成矩形后，面积是多少？",
            "question": "平行四边形的面积是多少？",
            "formula": "底 × 高 = ?",
            "answer": 24,
            "choices": [
                24,
                20,
                28,
                10
            ],
            "visualType": "cutPasteGeometry",
            "visualData": {
                "base": 6,
                "height": 4
            },
            "knowledge": "平行四边形面积·割补法",
            "difficulty": 2,
            "hint": "把左边的三角形切下来补到右边，变成一个矩形",
            "rmeChoices": [
                {
                    "label": "割补法",
                    "desc": "切三角形补到右边变矩形",
                    "correct": true
                },
                {
                    "label": "直接乘底高",
                    "desc": "6×4=24",
                    "correct": true
                },
                {
                    "label": "加法",
                    "desc": "6+4=10",
                    "correct": false
                }
            ],
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "割补后矩形的长和宽分别是多少？",
                    "keywords": [
                        "长6",
                        "宽4",
                        "底6",
                        "高4",
                        "长乘宽",
                        "24"
                    ]
                },
                {
                    "type": "compare",
                    "q": "如果底变成8，高不变，面积变成多少？",
                    "keywords": [
                        "32",
                        "8乘4",
                        "变长",
                        "更大",
                        "8×4"
                    ]
                }
            ],
            "neriageErrors": [
                {
                    "answer": 10,
                    "reason": "底+高",
                    "fix": "平行四边形面积=底×高，不是底+高。6×4=24，不是6+4=10"
                }
            ],
            "variants": []
        },
        {
            "id": "3B-GEO-02",
            "scene": "平行四边形底8dm，高5dm。割补成长方形后，长方形的长和宽各是多少？",
            "question": "长方形的面积是多少？",
            "formula": "8 × 5 = ?",
            "answer": 40,
            "choices": [
                40,
                30,
                50,
                13
            ],
            "visualType": "cutPasteGeometry",
            "visualData": {
                "base": 8,
                "height": 5
            },
            "knowledge": "平行四边形面积·割补法",
            "difficulty": 2,
            "hint": "割补后长方形的长=平行四边形的底，宽=平行四边形的高",
            "rmeChoices": [
                {
                    "label": "割补法",
                    "desc": "切三角形变矩形",
                    "correct": true
                },
                {
                    "label": "直接乘",
                    "desc": "8×5=40",
                    "correct": true
                },
                {
                    "label": "周长公式",
                    "desc": "(8+5)×2=26",
                    "correct": false
                }
            ],
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "割补后长方形的长和宽是多少？",
                    "keywords": [
                        "长8",
                        "宽5",
                        "底8",
                        "高5",
                        "40"
                    ]
                },
                {
                    "type": "reverse",
                    "q": "如果面积是40，底是8，高是多少？",
                    "keywords": [
                        "5",
                        "除法",
                        "40÷8",
                        "逆运算",
                        "÷"
                    ]
                }
            ],
            "neriageErrors": [
                {
                    "answer": 26,
                    "reason": "用了周长公式",
                    "fix": "面积=底×高=8×5=40，不是(8+5)×2=26"
                }
            ],
            "variants": []
        },
        {
            "id": "3B-GEO-03",
            "scene": "平行四边形面积是36cm²，底是9cm。高是多少？",
            "question": "平行四边形的高是多少？",
            "formula": "36 ÷ 9 = ?",
            "answer": 4,
            "choices": [
                4,
                6,
                9,
                324
            ],
            "visualType": "cutPasteGeometry",
            "visualData": {
                "base": 9,
                "height": 4
            },
            "knowledge": "平行四边形面积·逆运算",
            "difficulty": 2,
            "hint": "面积=底×高，所以高=面积÷底",
            "rmeChoices": [
                {
                    "label": "逆运算",
                    "desc": "高=面积÷底",
                    "correct": true
                },
                {
                    "label": "除法",
                    "desc": "36÷9=4",
                    "correct": true
                },
                {
                    "label": "乘法",
                    "desc": "36×9=324",
                    "correct": false
                }
            ],
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "用逆运算：面积÷底=高，怎么算？",
                    "keywords": [
                        "36÷9",
                        "4",
                        "除法",
                        "逆运算",
                        "÷"
                    ]
                },
                {
                    "type": "compare",
                    "q": "如果底变成6，高还是4，面积变成多少？",
                    "keywords": [
                        "24",
                        "6×4",
                        "变小",
                        "底变了",
                        "乘法"
                    ]
                }
            ],
            "neriageErrors": [
                {
                    "answer": 324,
                    "reason": "用了乘法",
                    "fix": "已知面积和底求高，用除法：36÷9=4，不是36×9=324"
                }
            ],
            "variants": []
        }
    ],
    "knowledgeMap": [
        {
            "id": "3B-01",
            "name": "认识东、南、西、北",
            "concept": "四个基本方向，地图上北下南左西右东",
            "prerequisite": "生活常识",
            "extends": "3B-02 八个方向",
            "visualStrategy": "方向标图",
            "visualType": "geometry",
            "coreLiteracy": "空间观念",
            "difficulty": 1,
            "isKeyTopic": true
        },
        {
            "id": "3B-02",
            "name": "认识东南、东北、西南、西北",
            "concept": "八个方向，描述物体所在方位",
            "prerequisite": "四个基本方向",
            "extends": "3B-03 行走路线",
            "visualStrategy": "方向标图",
            "visualType": "geometry",
            "coreLiteracy": "空间观念",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-03",
            "name": "描述行走路线",
            "concept": "用方向词描述简单路线",
            "prerequisite": "八个方向",
            "extends": "6A-06 方向和距离",
            "visualStrategy": "路径图",
            "visualType": "numberLine",
            "coreLiteracy": "应用意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-04",
            "name": "口算除法（整十整百除一位数）",
            "concept": "60÷3=20，看作6个十÷3",
            "prerequisite": "表内除法",
            "extends": "3B-05 笔算除法",
            "visualStrategy": "面积模型",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-05",
            "name": "笔算除法（两位数除以一位数）",
            "concept": "从高位除起，除到哪商在哪，余数比除数小",
            "prerequisite": "口算除法",
            "extends": "3B-06 三位数除一位数",
            "visualStrategy": "竖式格子+面积模型",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-06",
            "name": "笔算除法（三位数除以一位数）",
            "concept": "高位不够除看前两位",
            "prerequisite": "两位数除一位数",
            "extends": "3B-07 除法验算",
            "visualStrategy": "竖式格子",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "3B-07",
            "name": "除法验算",
            "concept": "商×除数+余数=被除数",
            "prerequisite": "笔算除法",
            "extends": "3B-08 商有0",
            "visualStrategy": "竖式格子",
            "visualType": "areaModel",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-08",
            "name": "商中间或末尾有0",
            "concept": "哪一位不够商1就商0占位",
            "prerequisite": "笔算除法",
            "extends": "3B-09 估算",
            "visualStrategy": "竖式格子",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "3B-09",
            "name": "除法估算",
            "concept": "把被除数估成接近的整百整十数再除",
            "prerequisite": "笔算除法",
            "extends": "4A-04 求近似数",
            "visualStrategy": "数轴跳跃",
            "visualType": "numberLine",
            "coreLiteracy": "数感",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-10",
            "name": "复式统计表",
            "concept": "将两个单式统计表合并，便于对比",
            "prerequisite": "二下·数据收集整理",
            "extends": "4A-29 条形统计图",
            "visualStrategy": "表格",
            "visualType": "barModel",
            "coreLiteracy": "数据意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-11",
            "name": "口算乘法（两位数乘整十数）",
            "concept": "12×20=12×2×10",
            "prerequisite": "三上·多位数乘一位数",
            "extends": "3B-12 笔算乘法",
            "visualStrategy": "面积模型",
            "visualType": "areaModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-12",
            "name": "笔算乘法（两位数乘两位数，不进位）",
            "concept": "用第二个因数每位分别乘，积相加",
            "prerequisite": "口算乘法",
            "extends": "3B-13 进位乘法",
            "visualStrategy": "面积模型+竖式格子",
            "visualType": "areaModelAnim",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true,
            "knowledge": "两位数乘两位数不进位",
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "23×12中，3×2=6，20×10=200，合计多少？",
                    "keywords": [
                        "276",
                        "6",
                        "200",
                        "合计",
                        "相加"
                    ]
                },
                {
                    "type": "reverse",
                    "q": "两位数乘两位数怎么算？",
                    "keywords": [
                        "分步",
                        "竖式",
                        "分别乘",
                        "积相加"
                    ]
                }
            ],
            "rmeChoices": [
                {
                    "label": "面积模型",
                    "desc": "画23×12的矩形，分成4块",
                    "correct": true
                },
                {
                    "label": "直接竖式",
                    "desc": "直接列竖式计算",
                    "correct": true
                },
                {
                    "label": "心算",
                    "desc": "直接心算得出答案",
                    "correct": false
                }
            ],
            "neriageErrors": [
                {
                    "cardIndex": 0,
                    "errorMsg": "忘记把两部分积相加",
                    "correctCardIndex": 1,
                    "isKey": true
                },
                {
                    "cardIndex": 1,
                    "errorMsg": "数位没对齐，十位乘个位",
                    "correctCardIndex": 1,
                    "isKey": true
                }
            ]
        },
        {
            "id": "3B-13",
            "name": "笔算乘法（进位）",
            "concept": "满几十进几，最后相加",
            "prerequisite": "不进位笔算",
            "extends": "3B-14 连乘连除",
            "visualStrategy": "面积模型+竖式格子",
            "visualType": "areaModel",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "3B-14",
            "name": "解决问题（连乘连除）",
            "concept": "用乘除法解决两步计算的实际问题",
            "prerequisite": "笔算乘法",
            "extends": "4B-03 四则运算",
            "visualStrategy": "场景示意图",
            "visualType": "barModel",
            "coreLiteracy": "模型意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "3B-15",
            "name": "面积和面积单位",
            "concept": "cm²/dm²/m²，面积是面的大小",
            "prerequisite": "三上·周长",
            "extends": "3B-16 面积计算",
            "visualStrategy": "实物对比+网格",
            "visualType": "geometry",
            "coreLiteracy": "量感",
            "difficulty": 1,
            "isKeyTopic": true
        },
        {
            "id": "3B-16",
            "name": "长方形、正方形面积",
            "concept": "长方形面积=长×宽，正方形面积=边长×边长",
            "prerequisite": "面积概念+三上·周长",
            "extends": "3B-17 面积进率",
            "visualStrategy": "面积模型",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-17",
            "name": "面积单位进率",
            "concept": "1dm²=100cm²，1m²=100dm²",
            "prerequisite": "面积计算",
            "extends": "3B-18 面积应用",
            "visualStrategy": "面积模型",
            "visualType": "areaModel",
            "coreLiteracy": "量感",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-18",
            "name": "解决面积实际问题",
            "concept": "铺地砖、粉刷墙等，注意区分周长和面积",
            "prerequisite": "面积计算",
            "extends": "4A-08 公顷",
            "visualStrategy": "场景示意图",
            "visualType": "geometry",
            "coreLiteracy": "应用意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "3B-19",
            "name": "年、月、日",
            "concept": "大月31天小月30天，二月28或29天，平年365闰年366",
            "prerequisite": "生活常识",
            "extends": "3B-20 24时计时法",
            "visualStrategy": "表格",
            "visualType": "numberLine",
            "coreLiteracy": "量感",
            "difficulty": 1,
            "isKeyTopic": true
        },
        {
            "id": "3B-20",
            "name": "24时计时法",
            "concept": "下午1时=13时，24时=第二天0时",
            "prerequisite": "三上·时、分、秒",
            "extends": "3B-21 经过时间",
            "visualStrategy": "时间线",
            "visualType": "numberLine",
            "coreLiteracy": "应用意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-21",
            "name": "计算经过时间",
            "concept": "用24时计时法算经过时间",
            "prerequisite": "24时计时法",
            "extends": "5A-05 时间应用",
            "visualStrategy": "时间线",
            "visualType": "numberLine",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-22",
            "name": "小数的初步认识",
            "concept": "0.1=1/10，小数点左边是整数右边是小数",
            "prerequisite": "三上·分数初步",
            "extends": "3B-23 小数比较",
            "visualStrategy": "面积模型+数轴",
            "visualType": "fractionStrip",
            "coreLiteracy": "数感",
            "difficulty": 1,
            "isKeyTopic": true
        },
        {
            "id": "3B-23",
            "name": "小数比较大小",
            "concept": "先比整数部分，再比小数部分",
            "prerequisite": "小数认识",
            "extends": "3B-24 小数加减",
            "visualStrategy": "数轴",
            "visualType": "numberLine",
            "coreLiteracy": "数感",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-24",
            "name": "简单小数加减",
            "concept": "小数点对齐，按整数加减法算",
            "prerequisite": "小数比较",
            "extends": "4B-21 小数加减",
            "visualStrategy": "竖式格子",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "3B-25",
            "name": "搭配（二）",
            "concept": "用连线法或列表法找出所有搭配方案",
            "prerequisite": "三上·集合",
            "extends": "4A-30 优化",
            "visualStrategy": "连线图/表格",
            "visualType": "barModel",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": true
        }
    ]
};
