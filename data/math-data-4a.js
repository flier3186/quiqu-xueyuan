window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["4a"] = {
    "title": "四年级上册·大数的认识与除数两位数除法",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "units": [
        {
            "name": "大数的认识",
            "level": "locked",
            "children": [
                {
                    "name": "亿以内数的认识",
                    "level": "locked"
                },
                {
                    "name": "数的读写",
                    "level": "locked"
                },
                {
                    "name": "大小比较与改写",
                    "level": "locked"
                },
                {
                    "name": "近似数",
                    "level": "locked"
                },
                {
                    "name": "十进制计数法",
                    "level": "locked"
                },
                {
                    "name": "亿以上数",
                    "level": "locked"
                },
                {
                    "name": "计算器",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "公顷和平方千米",
            "level": "locked",
            "children": [
                {
                    "name": "公顷",
                    "level": "locked"
                },
                {
                    "name": "平方千米",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "角的度量",
            "level": "locked",
            "children": [
                {
                    "name": "线段直线射线",
                    "level": "locked"
                },
                {
                    "name": "量角器",
                    "level": "locked"
                },
                {
                    "name": "角的分类",
                    "level": "locked"
                },
                {
                    "name": "画角",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "三位数乘两位数",
            "level": "locked",
            "children": [
                {
                    "name": "笔算乘法",
                    "level": "locked"
                },
                {
                    "name": "因数有0",
                    "level": "locked"
                },
                {
                    "name": "积的变化规律",
                    "level": "locked"
                },
                {
                    "name": "单价数量总价",
                    "level": "locked"
                },
                {
                    "name": "速度时间路程",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "平行四边形和梯形",
            "level": "locked",
            "children": [
                {
                    "name": "平行与垂直",
                    "level": "locked"
                },
                {
                    "name": "画垂线",
                    "level": "locked"
                },
                {
                    "name": "特征",
                    "level": "locked"
                },
                {
                    "name": "高",
                    "level": "locked"
                },
                {
                    "name": "内角和",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "除数是两位数",
            "level": "locked",
            "children": [
                {
                    "name": "口算除法",
                    "level": "locked"
                },
                {
                    "name": "除数整十数",
                    "level": "locked"
                },
                {
                    "name": "四舍法试商",
                    "level": "locked"
                },
                {
                    "name": "五入法试商",
                    "level": "locked"
                },
                {
                    "name": "商的变化规律",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "条形统计图",
            "level": "locked",
            "children": [
                {
                    "name": "1格表多单位",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "数学广角",
            "level": "locked",
            "children": [
                {
                    "name": "优化",
                    "level": "locked"
                }
            ]
        }
    ],
    "problems": [
        {
            "scene": "学校图书馆藏书约28500册，小红想知道28500中数字2表示多少。",
            "question": "28500中的2表示多少？",
            "formula": "2×10000 = ?",
            "answer": 20000,
            "choices": [
                20000,
                2000,
                200,
                200000
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 28500,
                "parts": [
                    {
                        "label": "2万",
                        "val": 20000,
                        "color": "#00A896"
                    },
                    {
                        "label": "8千",
                        "val": 8000,
                        "color": "#F5B800"
                    },
                    {
                        "label": "5百",
                        "val": 500,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "亿以内数的认识",
            "difficulty": 2,
            "hint": "2在万位表示2万",
            "variants": [
                {
                    "question": "46000中4表示多少？",
                    "formula": "4×10000=?",
                    "answer": 40000,
                    "hint": "4在万位"
                },
                {
                    "question": "730000中7表示多少？",
                    "formula": "7×100000=?",
                    "answer": 700000,
                    "hint": "7在十万位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "28500中数字2表示多少",
                        "28500中数字8表示多少",
                        "28500是几位数",
                        "28500读作什么"
                    ],
                    "answer": "28500中数字2表示多少",
                    "explain": "题目说28500册书，小红想知道「数字2表示多少」，求2所在数位的值"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "数28500，2在万位",
                        "数28500，8在千位",
                        "数46000，4在万位",
                        "只有28500"
                    ],
                    "answer": "数28500，2在万位",
                    "explain": "28500里2在万位，万位上的2表示2个万"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "数位×计数单位（2×10000）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "数位×计数单位（2×10000）",
                    "explain": "2在万位表示2个万，2×10000=20000"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里28500分成2万、8千、5百三段，2万这段就是数字2表示的值20000",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "数位顺序：个十百千万。2在万位表示2×10000=20000",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "数字在不同数位表示不同值：数位×计数单位。关键：从右到左是个十百千万十万百万",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-001"
        },
        {
            "scene": "小亮在存折上看到余额5040800元。老师教他读法，他好奇这个数读出来有几个零。",
            "question": "5040800读作中读出几个零？",
            "formula": "5040800读出( )个零",
            "answer": 2,
            "choices": [
                2,
                1,
                3,
                0
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 3,
                "points": [
                    {
                        "pos": 2,
                        "label": "2个零",
                        "color": "#00A896"
                    }
                ],
                "highlight": [
                    0,
                    3
                ]
            },
            "knowledge": "亿以内数的读写",
            "difficulty": 2,
            "hint": "每级末尾0不读，中间0读一个",
            "variants": [
                {
                    "question": "3000400读几个零？",
                    "formula": "3000400读(?)零",
                    "answer": 1,
                    "hint": "万级末尾0不读"
                },
                {
                    "question": "3040000读几个零？",
                    "formula": "3040000读(?)零",
                    "answer": 1,
                    "hint": "万级中间0读一个"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "5040800读作中读出几个零",
                        "5040800是几位数",
                        "5040800中5表示多少",
                        "5040800等于多少万"
                    ],
                    "answer": "5040800读作中读出几个零",
                    "explain": "题目说存折余额5040800元，问「读作中读出几个零」，求读法里零的个数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "数5040800，求读几个零",
                        "数3000400，求读几个零",
                        "数5040800，求几位数",
                        "只有5040800"
                    ],
                    "answer": "数5040800，求读几个零",
                    "explain": "数是5040800，要求读作时读出几个零"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "每级末尾0不读，中间0读一个",
                        "所有0都读",
                        "所有0都不读",
                        "只读末尾0"
                    ],
                    "answer": "每级末尾0不读，中间0读一个",
                    "explain": "5040800分万级和个级：504万0800，万级中间0读一个，个级开头0读一个，共读2个零"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上标着2个零，表示5040800读作「五百零四万零八百」读出2个零",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "读数规则：每级末尾0不读，中间0只读一个。5040800=504万+0800，读两个零",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "大数读法：分级读，每级末尾0不读，中间0只读一个。关键：先分级再读",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-002"
        },
        {
            "scene": "甲市人口325万人，乙市人口280万人。小芳比较哪个城市人多。",
            "question": "3250000比2800000多多少万？",
            "formula": "325万 - 280万 = ?万",
            "answer": 45,
            "choices": [
                45,
                405,
                5,
                450
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 280,
                "end": 325,
                "points": [
                    {
                        "pos": 280,
                        "label": "乙市",
                        "color": "#00A896"
                    },
                    {
                        "pos": 325,
                        "label": "甲市",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    280,
                    325
                ]
            },
            "knowledge": "亿以内数的大小比较",
            "difficulty": 2,
            "hint": "位数相同从高位比",
            "variants": [
                {
                    "question": "46万比38万多几万？",
                    "formula": "46-38=?",
                    "answer": 8,
                    "hint": "46减38"
                },
                {
                    "question": "62万比58万多几万？",
                    "formula": "62-58=?",
                    "answer": 4,
                    "hint": "62减58"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "325万比280万多多少万",
                        "325万和280万谁多",
                        "325万是多少",
                        "280万是多少"
                    ],
                    "answer": "325万比280万多多少万",
                    "explain": "题目说甲市325万人乙市280万人，问「多多少万」，求两数差"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "甲325万，乙280万",
                        "甲280万，乙325万",
                        "甲325万，乙比甲多",
                        "只有325万"
                    ],
                    "answer": "甲325万，乙280万",
                    "explain": "甲市325万人，乙市280万人，这是两个关键数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "减法（325-280）",
                        "加法",
                        "乘法",
                        "除法"
                    ],
                    "answer": "减法（325-280）",
                    "explain": "求多多少用减法：325-280=45万"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上280在乙市位置，325在甲市位置，两点的距离就是45万",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "位数相同比最高位再求差：325-280=45。甲市比乙市多45万人",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "大数比较：位数多的大，位数相同比最高位。求差用减法。关键：先比大小再求差",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-003"
        },
        {
            "scene": "学校有学生4386人，小红用四舍五入法估算约多少人。",
            "question": "4386四舍五入到千位约是多少？",
            "formula": "4386 ≈ ? (千位)",
            "answer": 4000,
            "choices": [
                4000,
                5000,
                4400,
                4300
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 4000,
                "end": 5000,
                "points": [
                    {
                        "pos": 4000,
                        "label": "4000",
                        "color": "#00A896"
                    },
                    {
                        "pos": 4386,
                        "label": "4386",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 5000,
                        "label": "5000",
                        "color": "#FB923C"
                    }
                ],
                "highlight": [
                    4000,
                    5000
                ]
            },
            "knowledge": "求近似数",
            "difficulty": 2,
            "hint": "百位3<5舍去",
            "variants": [
                {
                    "question": "5680四舍五入到千位？",
                    "formula": "5680≈?",
                    "answer": 6000,
                    "hint": "百位6≥5进一"
                },
                {
                    "question": "3200四舍五入到千位？",
                    "formula": "3200≈?",
                    "answer": 3000,
                    "hint": "百位2<5舍去"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "4386四舍五入到千位约是多少",
                        "4386精确等于多少",
                        "4386四舍五入到百位",
                        "4386是几位数"
                    ],
                    "answer": "4386四舍五入到千位约是多少",
                    "explain": "题目说学校4386人，用四舍五入估算，问「到千位约是多少」，求近似数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "数4386，四舍五入到千位",
                        "数5680，四舍五入到千位",
                        "数4386，精确值",
                        "只有4386"
                    ],
                    "answer": "数4386，四舍五入到千位",
                    "explain": "数是4386，要四舍五入到千位，看百位决定舍入"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "看百位3<5舍去变4000",
                        "看百位3<5进一变5000",
                        "看十位",
                        "用乘法"
                    ],
                    "answer": "看百位3<5舍去变4000",
                    "explain": "四舍五入到千位看百位，百位是3小于5舍去，4386≈4000"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上4386在4000和5000之间，离4000更近，所以约等于4000",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "四舍五入到千位看百位：3<5舍去，4386≈4000；百位≥5则进一",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "四舍五入：看省略部分最高位，≥5进1，<5舍去。关键：找准要看的数位",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-004"
        },
        {
            "scene": "老师告诉小明每相邻两个计数单位之间的进率都是10。小明想知道10个一万是多少。",
            "question": "10个一万是多少？",
            "formula": "10 × 10000 = ?",
            "answer": 100000,
            "choices": [
                100000,
                10000,
                1000000,
                1000
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 100000,
                "parts": [
                    {
                        "label": "10个一万",
                        "val": 100000,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "十进制计数法",
            "difficulty": 2,
            "hint": "10个一万是十万",
            "variants": [
                {
                    "question": "10个十万是多少？",
                    "formula": "10×100000=?",
                    "answer": 1000000,
                    "hint": "10个十万是一百万"
                },
                {
                    "question": "10个一百万是多少？",
                    "formula": "10×1000000=?",
                    "answer": 10000000,
                    "hint": "10个一百万是一千万"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "10个一万是多少",
                        "10个十万是多少",
                        "10个一千是多少",
                        "一万是多少"
                    ],
                    "answer": "10个一万是多少",
                    "explain": "题目说相邻计数单位进率都是10，问「10个一万是多少」，求进率结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "10个一万，相邻进率10",
                        "10个十万",
                        "10个一千",
                        "只有一万"
                    ],
                    "answer": "10个一万，相邻进率10",
                    "explain": "关键信息：10个一万，相邻计数单位进率10"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（10×10000）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（10×10000）",
                    "explain": "10个一万就是10×10000=100000，即十万"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里一条代表10个一万的大条形，长度是100000，表示10个一万=十万",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "十进制：10个一万=十万，10×10000=100000。每相邻两个计数单位进率10",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "十进制计数法：10个某单位=上一级单位。关键：个十百千万十万百万千万亿，进率都是10",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-005"
        },
        {
            "scene": "全球人口约7800000000人。小亮好奇这个数怎么读。",
            "question": "7800000000是几位数？",
            "formula": "7800000000有( )位",
            "answer": 10,
            "choices": [
                10,
                9,
                8,
                11
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 10,
                "points": [
                    {
                        "pos": 10,
                        "label": "10位",
                        "color": "#00A896"
                    }
                ],
                "highlight": [
                    0,
                    10
                ]
            },
            "knowledge": "亿以上数的认识",
            "difficulty": 3,
            "hint": "数一数有多少位",
            "variants": [
                {
                    "question": "300000000是几位数？",
                    "formula": "300000000有(?)",
                    "answer": 9,
                    "hint": "数位数"
                },
                {
                    "question": "1200000000是几位数？",
                    "formula": "1200000000有(?)",
                    "answer": 10,
                    "hint": "数位数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "7800000000是几位数",
                        "7800000000读作什么",
                        "7800000000等于几亿",
                        "7800000000里7表示多少"
                    ],
                    "answer": "7800000000是几位数",
                    "explain": "题目说全球人口7800000000人，问「是几位数」，数这个数有几位"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "数7800000000，求位数",
                        "数300000000，求位数",
                        "数7800000000，求读法",
                        "只有7800000000"
                    ],
                    "answer": "数7800000000，求位数",
                    "explain": "数是7800000000，要求它是几位数"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "数数字个数（10位）",
                        "用乘法",
                        "用除法",
                        "读出来"
                    ],
                    "answer": "数数字个数（10位）",
                    "explain": "7800000000有7、8和8个0共10个数字，是10位数"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴从0到10，标在10的位置，表示7800000000是10位数",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "数位数就是数这个数有几个数字。7800000000有10个数字，是10位数",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "亿以上数位扩展到亿级：个级、万级、亿级，每级4位。关键：10位数含亿级",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-006"
        },
        {
            "scene": "小红用计算器算38×46，她先输入38再输入乘号和46。",
            "question": "38×46等于多少？",
            "formula": "38 × 46 = ?",
            "answer": 1748,
            "choices": [
                1748,
                1648,
                1848,
                1740
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 38,
                "cols": 46,
                "color": "#00A896"
            },
            "knowledge": "计算器使用",
            "difficulty": 2,
            "hint": "用计算器验证",
            "variants": [
                {
                    "question": "52×37=?",
                    "formula": "52×37=?",
                    "answer": 1924,
                    "hint": "用计算器"
                },
                {
                    "question": "65×48=?",
                    "formula": "65×48=?",
                    "answer": 3120,
                    "hint": "用计算器"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "38×46等于多少",
                        "38+46等于多少",
                        "38×46怎么输入",
                        "38是几"
                    ],
                    "answer": "38×46等于多少",
                    "explain": "题目说小红用计算器算38×46，问「等于多少」，求乘法结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "38×46，用计算器算",
                        "38+46，用计算器",
                        "38×46，手算",
                        "只有38"
                    ],
                    "answer": "38×46，用计算器算",
                    "explain": "两个因数是38和46，用计算器计算"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（用计算器验证）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（用计算器验证）",
                    "explain": "38×46用计算器算，先输38再输×再输46，得1748"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积图里38行46列的方格阵，总方格数就是38×46=1748",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "计算器按顺序输入：数字→运算符→数字→等号。38×46=1748",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "计算器探索规律：大数乘法用计算器验证，可发现数字规律。关键：正确输入运算符",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-007"
        },
        {
            "scene": "学校的操场面积约1公顷。小红想知道1公顷等于多少平方米。",
            "question": "1公顷等于多少平方米？",
            "formula": "1公顷 = ? m²",
            "answer": 10000,
            "choices": [
                10000,
                1000,
                100,
                100000
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 100,
                    "unit": "m",
                    "label": "1公顷=100m×100m"
                }
            },
            "knowledge": "公顷的认识",
            "difficulty": 2,
            "hint": "1公顷=10000m²",
            "variants": [
                {
                    "question": "2公顷=多少m²？",
                    "formula": "2公顷=?",
                    "answer": 20000,
                    "hint": "2×10000"
                },
                {
                    "question": "5公顷=多少m²？",
                    "formula": "5公顷=?",
                    "answer": 50000,
                    "hint": "5×10000"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "1公顷等于多少平方米",
                        "1平方米等于多少公顷",
                        "1公顷等于多少平方千米",
                        "1平方米有多大"
                    ],
                    "answer": "1公顷等于多少平方米",
                    "explain": "题目说操场约1公顷，问「1公顷等于多少平方米」，求面积单位换算"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1公顷，换算成平方米",
                        "1平方米，换算公顷",
                        "1公顷=1km²",
                        "只有1公顷"
                    ],
                    "answer": "1公顷，换算成平方米",
                    "explain": "关键信息：1公顷要换算成平方米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "1公顷=100m×100m=10000m²",
                        "用加法",
                        "用减法",
                        "用除法"
                    ],
                    "answer": "1公顷=100m×100m=10000m²",
                    "explain": "1公顷是边长100米正方形的面积，100×100=10000平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是边长100米的正方形，面积100×100=10000平方米，就是1公顷",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1公顷=100m×100m=10000m²。公顷是测量土地面积的单位",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "公顷是较大土地面积单位：1公顷=10000m²。关键：公顷用来量土地、操场等",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-008"
        },
        {
            "scene": "一个自然保护区面积约3平方千米。小亮想知道1平方千米等于多少公顷。",
            "question": "1平方千米等于多少公顷？",
            "formula": "1km² = ? 公顷",
            "answer": 100,
            "choices": [
                100,
                1000,
                10,
                10000
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 1000,
                    "unit": "m",
                    "label": "1km²=1000m×1000m"
                }
            },
            "knowledge": "平方千米的认识",
            "difficulty": 2,
            "hint": "1km²=100公顷",
            "variants": [
                {
                    "question": "2km²=多少公顷？",
                    "formula": "2km²=?",
                    "answer": 200,
                    "hint": "2×100"
                },
                {
                    "question": "5km²=多少公顷？",
                    "formula": "5km²=?",
                    "answer": 500,
                    "hint": "5×100"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "1平方千米等于多少公顷",
                        "1公顷等于多少平方千米",
                        "1平方千米等于多少平方米",
                        "1公顷等于多少平方米"
                    ],
                    "answer": "1平方千米等于多少公顷",
                    "explain": "题目说保护区约3平方千米，问「1平方千米等于多少公顷」，求单位换算"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1平方千米，换算成公顷",
                        "1公顷，换算平方千米",
                        "1平方千米=1000m",
                        "只有3平方千米"
                    ],
                    "answer": "1平方千米，换算成公顷",
                    "explain": "关键信息：1平方千米要换算成公顷"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "1km²=100公顷",
                        "1km²=10000公顷",
                        "用加法",
                        "用减法"
                    ],
                    "answer": "1km²=100公顷",
                    "explain": "1km=1000m，1km²=1000×1000=1000000m²，1公顷=10000m²，所以1km²=100公顷"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是边长1000米的正方形，面积1000000m²，等于100个公顷",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1km²=1000m×1000m=1000000m²，1公顷=10000m²，1km²=100公顷",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "面积单位：1km²=100公顷=1000000m²。关键：平方千米是更大面积单位",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-009"
        },
        {
            "scene": "小红用手电筒照向天空，光线像射线一样只有一个端点。老师问射线有几个端点。",
            "question": "射线有几个端点？",
            "formula": "射线端点数 = ?",
            "answer": 1,
            "choices": [
                1,
                0,
                2,
                3
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "line",
                "params": {
                    "type": "ray",
                    "endpoints": 1
                }
            },
            "knowledge": "线段直线射线",
            "difficulty": 1,
            "hint": "射线1个端点",
            "variants": [
                {
                    "question": "线段有几个端点？",
                    "formula": "线段端点=?",
                    "answer": 2,
                    "hint": "线段2个端点"
                },
                {
                    "question": "直线有几个端点？",
                    "formula": "直线端点=?",
                    "answer": 0,
                    "hint": "直线没有端点"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "射线有几个端点",
                        "线段有几个端点",
                        "直线有几个端点",
                        "射线有多长"
                    ],
                    "answer": "射线有几个端点",
                    "explain": "题目说手电筒光线像射线只有一个端点，问「射线有几个端点」"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "手电筒光线像射线，1个端点",
                        "线段2个端点",
                        "直线0个端点",
                        "只有射线"
                    ],
                    "answer": "手电筒光线像射线，1个端点",
                    "explain": "关键信息：手电筒光线像射线，只有一个端点"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "射线1个端点（填1）",
                        "线段2个端点",
                        "直线0个端点",
                        "用乘法"
                    ],
                    "answer": "射线1个端点（填1）",
                    "explain": "射线有一个端点，向一方无限延伸，所以填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一条带箭头的线，一端有点（端点），另一端无限延伸，就是射线",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "线段2个端点，直线0个端点，射线1个端点。射线=一个端点+向一方无限延伸",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "三种线：线段2端点有限，直线0端点无限，射线1端点半无限。关键：端点数区分三种线",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-010"
        },
        {
            "scene": "小红用量角器量一个角，读数是90度。她想知道直角是多少度。",
            "question": "直角等于多少度？",
            "formula": "直角 = ?°",
            "answer": 90,
            "choices": [
                90,
                180,
                45,
                60
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "degree": 90,
                    "type": "right"
                }
            },
            "knowledge": "角的度量",
            "difficulty": 1,
            "hint": "直角90度",
            "variants": [
                {
                    "question": "平角多少度？",
                    "formula": "平角=?°",
                    "answer": 180,
                    "hint": "平角180度"
                },
                {
                    "question": "周角多少度？",
                    "formula": "周角=?°",
                    "answer": 360,
                    "hint": "周角360度"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "直角等于多少度",
                        "平角等于多少度",
                        "锐角等于多少度",
                        "周角等于多少度"
                    ],
                    "answer": "直角等于多少度",
                    "explain": "题目说小红量角读数90度，问「直角是多少度」，求直角的度数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "量角读数90度，是直角",
                        "读数180度",
                        "读数45度",
                        "只有90度"
                    ],
                    "answer": "量角读数90度，是直角",
                    "explain": "关键信息：量角器读数是90度，这个角是直角"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "直角=90度（填90）",
                        "直角=180度",
                        "用乘法",
                        "用除法"
                    ],
                    "answer": "直角=90度（填90）",
                    "explain": "直角就是90度的角，是角的度量基准，填90"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一个标着90度的直角符号，两条边互相垂直",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "角的度量单位是度（°），直角=90°，是度量其他角的基础",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "角的分类：锐角<90°<钝角<180°，平角180°，周角360°。关键：90°是直角基准",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-011"
        },
        {
            "scene": "小亮画了一个角，量得是45度。老师问这是什么角。",
            "question": "45°的角是什么角？(锐角填1,直角填2,钝角填3)",
            "formula": "45° → ? (1锐/2直/3钝)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "degree": 45,
                    "type": "acute"
                }
            },
            "knowledge": "角的分类",
            "difficulty": 2,
            "hint": "小于90°是锐角",
            "variants": [
                {
                    "question": "120°是什么角(1锐2直3钝)？",
                    "formula": "120°→?",
                    "answer": 3,
                    "hint": "大于90小于180是钝角"
                },
                {
                    "question": "90°是什么角(1锐2直3钝)？",
                    "formula": "90°→?",
                    "answer": 2,
                    "hint": "等于90是直角"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "45°是什么角",
                        "90°是什么角",
                        "120°是什么角",
                        "45°是几度"
                    ],
                    "answer": "45°是什么角",
                    "explain": "题目说小亮画了45度的角，问「是什么角」，判断角的类型"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "角45度，要分类",
                        "角90度，要分类",
                        "角120度，要分类",
                        "只有45度"
                    ],
                    "answer": "角45度，要分类",
                    "explain": "关键信息：角是45度，要判断它属于锐角、直角还是钝角"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "小于90°是锐角（填1）",
                        "等于90°是直角",
                        "大于90°是钝角",
                        "用乘法"
                    ],
                    "answer": "小于90°是锐角（填1）",
                    "explain": "45°<90°，是锐角，锐角填1，所以填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一个45度的角，开口比直角小，属于锐角",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "角分类按度数：锐角<90°，直角=90°，90°<钝角<180°。45°<90°是锐角",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "角按大小分类：锐角<直角<钝角<平角<周角。关键：以90°和180°为分界",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-012"
        },
        {
            "scene": "美术课上小红要画一个60度的角。她用量角器画好后想验证。",
            "question": "60°的角属于哪类？(锐角填1,钝角填2)",
            "formula": "60° → ? (1锐/2钝)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "degree": 60,
                    "type": "acute"
                }
            },
            "knowledge": "画指定度数的角",
            "difficulty": 2,
            "hint": "小于90°是锐角",
            "variants": [
                {
                    "question": "画100°的角是什么角(1锐2钝)？",
                    "formula": "100°→?",
                    "answer": 2,
                    "hint": "钝角"
                },
                {
                    "question": "画30°的角是什么角(1锐2钝)？",
                    "formula": "30°→?",
                    "answer": 1,
                    "hint": "锐角"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "60°的角属于哪类",
                        "60°等于多少",
                        "60°怎么画",
                        "60°是什么角类型"
                    ],
                    "answer": "60°的角属于哪类",
                    "explain": "题目说小红画60度角，问「属于哪类」，判断画出的角是什么类型"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "画了60°的角，要分类",
                        "画了100°的角",
                        "画了30°的角",
                        "只有60°"
                    ],
                    "answer": "画了60°的角，要分类",
                    "explain": "关键信息：画的是60度的角，要判断它属于锐角还是钝角"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "60°<90°是锐角（填1）",
                        "60°>90°是钝角",
                        "用乘法",
                        "用除法"
                    ],
                    "answer": "60°<90°是锐角（填1）",
                    "explain": "60°小于90°，是锐角，锐角填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一个60度的角，比直角小，用量角器画出后属于锐角",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "画角步骤：点对点、线对线、找刻度。60°<90°画出来是锐角",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "画角要用量角器：定点→对齐0°线→找刻度→连线。关键：画完按度数判断类型",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-013"
        },
        {
            "scene": "学校买来12箱粉笔，每箱145盒。总务处要算一共有多少盒粉笔。",
            "question": "一共买了多少盒粉笔？",
            "formula": "145 × 12 = ?",
            "answer": 1740,
            "choices": [
                1740,
                1640,
                1840,
                174
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 145,
                "cols": 12,
                "color": "#00A896"
            },
            "knowledge": "三位数乘两位数笔算",
            "difficulty": 3,
            "hint": "145×10=1450,145×2=290,相加",
            "variants": [
                {
                    "question": "234×11=?",
                    "formula": "234×11=?",
                    "answer": 2574,
                    "hint": "234×10加234"
                },
                {
                    "question": "156×23=?",
                    "formula": "156×23=?",
                    "answer": 3588,
                    "hint": "分步算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一共买了多少盒粉笔",
                        "每箱多少盒",
                        "买了多少箱",
                        "每箱比每箱多几盒"
                    ],
                    "answer": "一共买了多少盒粉笔",
                    "explain": "题目说12箱粉笔每箱145盒，问「一共多少盒」，求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "12箱，每箱145盒",
                        "145箱，每箱12盒",
                        "一共1740盒，12箱",
                        "只有12箱"
                    ],
                    "answer": "12箱，每箱145盒",
                    "explain": "箱数12，每箱145盒，这是两个关键数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（145×12）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（145×12）",
                    "explain": "求12个145合起来用乘法：145×12=1740"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积图里145行12列的方格阵，总方格数就是145×12=1740",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "三位数乘两位数：145×10=1450，145×2=290，1450+290=1740",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "三位数乘两位数：用两位数每位分别乘三位数，积相加。关键：分位相乘再合并",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-014"
        },
        {
            "scene": "一箱装106个苹果，装了30箱。果农要算一共多少个苹果。",
            "question": "一共多少个苹果？",
            "formula": "106 × 30 = ?",
            "answer": 3180,
            "choices": [
                3180,
                3080,
                318,
                3280
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 106,
                "cols": 30,
                "color": "#00A896"
            },
            "knowledge": "因数有0的乘法",
            "difficulty": 2,
            "hint": "106×3=318添一个0",
            "variants": [
                {
                    "question": "204×20=?",
                    "formula": "204×20=?",
                    "answer": 4080,
                    "hint": "204×2添0"
                },
                {
                    "question": "308×50=?",
                    "formula": "308×50=?",
                    "answer": 15400,
                    "hint": "308×5添0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一共多少个苹果",
                        "每箱多少个",
                        "装了几箱",
                        "每箱比每箱多几个"
                    ],
                    "answer": "一共多少个苹果",
                    "explain": "题目说一箱106个苹果装了30箱，问「一共多少个」，求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每箱106个，装30箱",
                        "每箱30个，装106箱",
                        "一共3180个，30箱",
                        "只有106个"
                    ],
                    "answer": "每箱106个，装30箱",
                    "explain": "每箱106个，共30箱，这是两个关键数，因数中间有0"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（106×30，末尾添0）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（106×30，末尾添0）",
                    "explain": "106×3=318，再添一个0，106×30=3180"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积图里106行30列的方格阵，总方格数就是106×30=3180",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "因数末尾有0：先算106×3=318，再添一个0，得3180",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "因数末尾有0的乘法：0先不算最后补，中间0乘得0。关键：末尾0个数决定添几个0",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-015"
        },
        {
            "scene": "小红发现3×4=12，如果把4变成8（乘2），积也跟着变。她好奇积变成多少。",
            "question": "3×8=? (3不变,4变8)",
            "formula": "3 × 8 = ?",
            "answer": 24,
            "choices": [
                24,
                12,
                6,
                48
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 24,
                "parts": [
                    {
                        "label": "3×4=12",
                        "val": 12,
                        "color": "#00A896"
                    },
                    {
                        "label": "3×4=12",
                        "val": 12,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "积的变化规律",
            "difficulty": 2,
            "hint": "一个因数乘2积也乘2",
            "variants": [
                {
                    "question": "5×6=30,5×12=?",
                    "formula": "5×12=?",
                    "answer": 60,
                    "hint": "6变12乘2"
                },
                {
                    "question": "4×7=28,4×14=?",
                    "formula": "4×14=?",
                    "answer": 56,
                    "hint": "7变14乘2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "3×8等于多少（3不变4变8）",
                        "3×4等于多少",
                        "4×8等于多少",
                        "3×6等于多少"
                    ],
                    "answer": "3×8等于多少（3不变4变8）",
                    "explain": "题目说3×4=12，把4变成8（乘2），问积变成多少，求新积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "原式3×4=12，4乘2变8",
                        "原式5×6=30",
                        "原式4×7=28",
                        "只有3×4=12"
                    ],
                    "answer": "原式3×4=12，4乘2变8",
                    "explain": "关键信息：3×4=12，一个因数4乘2变成8，3不变"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "积也乘2（12×2=24）",
                        "积不变",
                        "积除以2",
                        "用加法"
                    ],
                    "answer": "积也乘2（12×2=24）",
                    "explain": "一个因数不变，另一个乘2，积也乘2：12×2=24，3×8=24"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里两条等长条形各代表12，合起来24，表示3×8=24是3×4=12的2倍",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "积的变化规律：一个因数不变，另一个因数乘几，积也乘几。3×4=12，3×8=24",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "积的变化规律：一个因数不变，另一个因数乘（除以）几，积也乘（除以）几。关键：因数变化引起积变化",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-016"
        },
        {
            "scene": "文具店钢笔每支8元，小红买了15支。她算算一共要付多少元。",
            "question": "一共要付多少元？",
            "formula": "8 × 15 = ?",
            "answer": 120,
            "choices": [
                120,
                102,
                130,
                112
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 120,
                "parts": [
                    {
                        "label": "10支",
                        "val": 80,
                        "color": "#00A896"
                    },
                    {
                        "label": "5支",
                        "val": 40,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "单价数量总价",
            "difficulty": 2,
            "hint": "单价×数量=总价",
            "variants": [
                {
                    "question": "每支6元买20支多少元？",
                    "formula": "6×20=?",
                    "answer": 120,
                    "hint": "单价乘数量"
                },
                {
                    "question": "每本12元买8本多少元？",
                    "formula": "12×8=?",
                    "answer": 96,
                    "hint": "单价乘数量"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一共要付多少元",
                        "每支多少元",
                        "买了几支",
                        "每支比每支多几元"
                    ],
                    "answer": "一共要付多少元",
                    "explain": "题目说钢笔每支8元买15支，问「一共要付多少元」，求总价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "单价8元，数量15支",
                        "单价15元，数量8支",
                        "总价120元，15支",
                        "只有8元"
                    ],
                    "answer": "单价8元，数量15支",
                    "explain": "单价8元，数量15支，这是两个关键数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（单价×数量）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（单价×数量）",
                    "explain": "单价×数量=总价：8×15=120元"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里两条条形，一条10支80元，一条5支40元，合起来120元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "单价×数量=总价。8×15=120，也可以8×10=80加8×5=40=120",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "单价×数量=总价，已知两个可求第三个。关键：单价数量总价三量关系",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-017"
        },
        {
            "scene": "小红骑车每分钟行200米，骑了15分钟。她算算一共骑了多少米。",
            "question": "一共骑了多少米？",
            "formula": "200 × 15 = ?",
            "answer": 3000,
            "choices": [
                3000,
                2100,
                2150,
                300
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 3000,
                "points": [
                    {
                        "pos": 0,
                        "label": "出发",
                        "color": "#00A896"
                    },
                    {
                        "pos": 3000,
                        "label": "到达",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    3000
                ]
            },
            "knowledge": "速度时间路程",
            "difficulty": 2,
            "hint": "速度×时间=路程",
            "variants": [
                {
                    "question": "每分80米走20分多少米？",
                    "formula": "80×20=?",
                    "answer": 1600,
                    "hint": "速度乘时间"
                },
                {
                    "question": "每分60米走30分多少米？",
                    "formula": "60×30=?",
                    "answer": 1800,
                    "hint": "速度乘时间"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一共骑了多少米",
                        "每分钟骑多少米",
                        "骑了几分钟",
                        "每分钟比每分钟多几米"
                    ],
                    "answer": "一共骑了多少米",
                    "explain": "题目说小红骑车每分钟200米骑15分钟，问「一共骑了多少米」，求路程"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "速度200米/分，时间15分",
                        "速度15米/分，时间200分",
                        "路程3000米，15分",
                        "只有200米/分"
                    ],
                    "answer": "速度200米/分，时间15分",
                    "explain": "速度200米/分，时间15分，这是两个关键数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法（速度×时间）",
                        "加法",
                        "减法",
                        "除法"
                    ],
                    "answer": "乘法（速度×时间）",
                    "explain": "速度×时间=路程：200×15=3000米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴从0到3000，0是出发3000是到达，这段距离就是3000米",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "速度×时间=路程。200×15=3000，小红一共骑了3000米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "速度×时间=路程，已知两个可求第三个。关键：速度时间路程三量关系",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-018"
        },
        {
            "scene": "小红在纸上画了两条线，它们永不相交。老师问这样的两条线叫什么。",
            "question": "同一平面内不相交的两条直线叫什么？(平行填1,垂直填2)",
            "formula": "不相交 → ? (1平/2垂)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "lines",
                "params": {
                    "type": "parallel"
                }
            },
            "knowledge": "平行与垂直",
            "difficulty": 2,
            "hint": "不相交叫平行",
            "variants": [
                {
                    "question": "相交成直角叫什么(1平2垂)？",
                    "formula": "成直角→?",
                    "answer": 2,
                    "hint": "成直角叫垂直"
                },
                {
                    "question": "两条线距离处处相等是(1平2垂)？",
                    "formula": "等距→?",
                    "answer": 1,
                    "hint": "平行线距离相等"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "不相交的两条直线叫什么",
                        "相交的两条直线叫什么",
                        "垂直的两条直线叫什么",
                        "平行的两条直线距离"
                    ],
                    "answer": "不相交的两条直线叫什么",
                    "explain": "题目说小红画了两条永不相交的线，问「叫什么」，求这两条线的名称"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条线永不相交",
                        "两条线相交成直角",
                        "两条线距离不等",
                        "只有两条线"
                    ],
                    "answer": "两条线永不相交",
                    "explain": "关键信息：两条线在同一平面内永不相交"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "不相交叫平行（填1）",
                        "相交成直角叫垂直",
                        "用乘法",
                        "用除法"
                    ],
                    "answer": "不相交叫平行（填1）",
                    "explain": "同一平面内不相交的两条直线叫平行线，平行填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是两条永不相交的直线，方向一致距离相等，这就是平行线",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "同一平面内两条直线位置关系：不相交=平行，相交成直角=垂直",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行（不相交）和垂直（成直角）是特殊位置关系。关键：平行距离处处相等",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-019"
        },
        {
            "scene": "小红要从直线外一点画这条直线的垂线。她用三角尺的直角来画。",
            "question": "从直线外一点到这条直线所画的线段中什么最短？(垂线段填1,斜线段填2)",
            "formula": "最短 → ? (1垂/2斜)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "perpendicular",
                "params": {
                    "fromPoint": true
                }
            },
            "knowledge": "画垂线和平行线",
            "difficulty": 2,
            "hint": "垂线段最短",
            "variants": [
                {
                    "question": "画平行线要用什么工具(1三角尺2圆规)？",
                    "formula": "画平行线用?",
                    "answer": 1,
                    "hint": "用三角尺和直尺"
                },
                {
                    "question": "从点到直线什么线最短(1垂2斜)？",
                    "formula": "最短是?",
                    "answer": 1,
                    "hint": "垂线段最短"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "从点到直线什么线段最短",
                        "平行线怎么画",
                        "垂线怎么画",
                        "直线有多长"
                    ],
                    "answer": "从点到直线什么线段最短",
                    "explain": "题目说小红从直线外一点画垂线，问「什么线段最短」，求最短线段类型"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "从直线外一点画线段",
                        "从直线内一点画线",
                        "画平行线",
                        "只有一点"
                    ],
                    "answer": "从直线外一点画线段",
                    "explain": "关键信息：从直线外一点向直线画线段，问哪种最短"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "垂线段最短（填1）",
                        "斜线段最短",
                        "用乘法",
                        "用除法"
                    ],
                    "answer": "垂线段最短（填1）",
                    "explain": "从直线外一点到直线的线段中，垂线段最短，垂线段填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形里从直线外一点画了几条线段到直线，其中垂直的那条最短",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "从点到直线的所有线段中，垂线段最短。垂线段=点到直线的距离",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "垂线段最短是重要性质：点到直线距离=垂线段长度。关键：画垂线用三角尺直角",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-020"
        },
        {
            "scene": "小红画了一个四边形，两组对边分别平行。老师问这是什么图形。",
            "question": "两组对边分别平行的四边形叫什么？(平行四边形填1,梯形填2)",
            "formula": "两组平行 → ? (1平/2梯)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {}
            },
            "knowledge": "平行四边形和梯形特征",
            "difficulty": 2,
            "hint": "两组对边平行是平行四边形",
            "variants": [
                {
                    "question": "只有一组对边平行是(1平2梯)？",
                    "formula": "一组平行→?",
                    "answer": 2,
                    "hint": "只有一组平行是梯形"
                },
                {
                    "question": "长方形属于(1平2梯)？",
                    "formula": "长方形属于?",
                    "answer": 1,
                    "hint": "长方形是特殊的平行四边形"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两组对边分别平行的四边形叫什么",
                        "只有一组对边平行的四边形叫什么",
                        "长方形属于什么",
                        "四边形内角和是多少"
                    ],
                    "answer": "两组对边分别平行的四边形叫什么",
                    "explain": "题目说小红画了两组对边分别平行的四边形，问「叫什么」，求图形名称"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两组对边分别平行",
                        "只有一组对边平行",
                        "两组对边相等",
                        "只有四边形"
                    ],
                    "answer": "两组对边分别平行",
                    "explain": "关键信息：四边形的两组对边都分别平行"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "两组平行是平行四边形（填1）",
                        "一组平行是梯形",
                        "用乘法",
                        "用除法"
                    ],
                    "answer": "两组平行是平行四边形（填1）",
                    "explain": "两组对边分别平行的四边形叫平行四边形，填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一个平行四边形，两组对边分别平行且相等，倾斜的对边方向一致",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "四边形分类：两组对边平行=平行四边形，只有一组对边平行=梯形",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形对边平行且相等，梯形只有一组对边平行。关键：看对边平行组数区分",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-021"
        },
        {
            "scene": "小红从平行四边形一个顶点向对边画垂线。老师告诉这条线段叫高。",
            "question": "平行四边形的高有几条？(无数条填1,只有一条填2)",
            "formula": "高 → ? (1无数/2一条)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                4
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "height": true
                }
            },
            "knowledge": "平行四边形和梯形的高",
            "difficulty": 2,
            "hint": "平行四边形有无数条高",
            "variants": [
                {
                    "question": "梯形的高有几条(1无数2一条)？",
                    "formula": "梯形高=?",
                    "answer": 1,
                    "hint": "梯形也有无数条高"
                },
                {
                    "question": "画高要用什么工具(1三角尺2圆规)？",
                    "formula": "画高用?",
                    "answer": 1,
                    "hint": "用三角尺画垂线"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "平行四边形的高有几条",
                        "平行四边形有几条边",
                        "梯形的高有几条",
                        "平行四边形有几个角"
                    ],
                    "answer": "平行四边形的高有几条",
                    "explain": "题目说小红从平行四边形顶点向对边画垂线叫高，问「高有几条」"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "从顶点向对边画垂线叫高",
                        "高只有一条",
                        "平行四边形的边",
                        "只有顶点"
                    ],
                    "answer": "从顶点向对边画垂线叫高",
                    "explain": "关键信息：从平行四边形一个顶点向对边画垂线，这条线段叫高"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "平行四边形有无数条高（填1）",
                        "只有一条高",
                        "用乘法",
                        "用除法"
                    ],
                    "answer": "平行四边形有无数条高（填1）",
                    "explain": "平行四边形任意一点向对边都能画垂线，所以有无数条高，填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一个平行四边形，从顶点向对边画了一条垂直的线段，这就是高",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平行四边形的高：从一点向对边作垂线，垂足到该点的线段。对边平行故有无数条高",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形和梯形都有无数条高，高垂直于底。关键：高用三角尺画垂线得到",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-022"
        },
        {
            "scene": "小亮把一个四边形的四个角剪下来拼在一起，发现正好拼成一个周角。",
            "question": "四边形内角和等于多少度？",
            "formula": "四边形内角和 = ?°",
            "answer": 360,
            "choices": [
                360,
                180,
                90,
                540
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "quadrilateral",
                "params": {
                    "angleSum": 360
                }
            },
            "knowledge": "四边形内角和",
            "difficulty": 2,
            "hint": "四边形内角和360°",
            "variants": [
                {
                    "question": "三角形内角和多少度？",
                    "formula": "三角形内角和=?",
                    "answer": 180,
                    "hint": "三角形内角和180°"
                },
                {
                    "question": "五边形内角和多少度？",
                    "formula": "五边形内角和=?",
                    "answer": 540,
                    "hint": "540°"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "四边形内角和等于多少度",
                        "三角形内角和等于多少度",
                        "五边形内角和等于多少度",
                        "四边形有几个角"
                    ],
                    "answer": "四边形内角和等于多少度",
                    "explain": "题目说小亮把四边形四个角剪下拼成周角，问「内角和等于多少度」"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "四角拼成周角，求内角和",
                        "三角拼成周角",
                        "四边形的边数",
                        "只有四边形"
                    ],
                    "answer": "四角拼成周角，求内角和",
                    "explain": "关键信息：四边形四个角剪下拼在一起正好拼成一个周角"
                },
                {
                    "q": "🧩 用什么方法判断？",
                    "choices": [
                        "周角=360°（填360）",
                        "平角=180°",
                        "用乘法",
                        "用除法"
                    ],
                    "answer": "周角=360°（填360）",
                    "explain": "四个角拼成周角，周角=360°，所以四边形内角和=360°"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一个四边形，四个角剪下拼在一起正好围成一圈，即360°",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "四边形内角和=360°=周角。也可分成2个三角形：180°×2=360°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "n边形内角和=(n-2)×180°。关键：四边形=2个三角形=360°",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-023"
        },
        {
            "scene": "统计图上1格表示5人。小红所在兴趣小组有15人，需要画几格？",
            "question": "15人需要画几格？",
            "formula": "15 ÷ 5 = ? (格)",
            "answer": 3,
            "choices": [
                3,
                15,
                5,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 15,
                "parts": [
                    {
                        "label": "格1",
                        "val": 5,
                        "color": "#00A896"
                    },
                    {
                        "label": "格2",
                        "val": 5,
                        "color": "#F5B800"
                    },
                    {
                        "label": "格3",
                        "val": 5,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "条形统计图",
            "difficulty": 2,
            "hint": "1格5人，15÷5=3格",
            "variants": [
                {
                    "question": "20人每格5人几格？",
                    "formula": "20÷5=?",
                    "answer": 4,
                    "hint": "20÷5"
                },
                {
                    "question": "25人每格5人几格？",
                    "formula": "25÷5=?",
                    "answer": 5,
                    "hint": "25÷5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "15人需要画几格",
                        "1格表示几人",
                        "一共有几人",
                        "画了几格"
                    ],
                    "answer": "15人需要画几格",
                    "explain": "题目说统计图1格表示5人，兴趣小组15人，问「需要画几格」"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1格5人，共15人",
                        "1格1人，共15人",
                        "1格5人，共5人",
                        "只有15人"
                    ],
                    "answer": "1格5人，共15人",
                    "explain": "关键信息：1格表示5人，要表示15人"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法（15÷5）",
                        "乘法",
                        "加法",
                        "减法"
                    ],
                    "answer": "除法（15÷5）",
                    "explain": "求15里有几个5用除法：15÷5=3，需要画3格"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形统计图里3个格子都画满，每格5人，三格共表示15人",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "1格表示5人，15人里有几个5人就用几格：15÷5=3，画3格",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "条形统计图1格可表示多个单位（如5人、10人），格数=总数÷每格人数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-029"
        },
        {
            "scene": "妈妈给客人沏茶：洗水壶1分、烧水8分、洗茶杯2分、接茶1分。妈妈合理安排最少要几分钟？",
            "question": "最少需要多少分钟？",
            "formula": "1 + 8 + 1 = ? (分)",
            "answer": 10,
            "choices": [
                10,
                12,
                8,
                11
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 10,
                "points": [
                    {
                        "pos": 0,
                        "label": "洗壶",
                        "color": "#00A896"
                    },
                    {
                        "pos": 1,
                        "label": "烧水",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 9,
                        "label": "接茶",
                        "color": "#FB923C"
                    },
                    {
                        "pos": 10,
                        "label": "完成",
                        "color": "#E8A0BF"
                    }
                ],
                "highlight": [
                    0,
                    10
                ]
            },
            "knowledge": "策略优化：沏茶/烙饼（2024版已删·保留作拓展）",
            "difficulty": 3,
            "hint": "烧水时洗茶杯",
            "variants": [
                {
                    "question": "烧水8分洗杯2分(同时)接茶1分共几分？",
                    "formula": "8+1=?",
                    "answer": 9,
                    "hint": "洗杯和烧水同时"
                },
                {
                    "question": "煮饭20分炒菜10分(同时)盛饭2分共几分？",
                    "formula": "20+2=?",
                    "answer": 22,
                    "hint": "炒菜和煮饭同时"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "最少需要多少分钟",
                        "一共需要多少分钟",
                        "烧水需要几分钟",
                        "洗茶杯需要几分钟"
                    ],
                    "answer": "最少需要多少分钟",
                    "explain": "题目说妈妈沏茶洗水壶1分烧水8分洗茶杯2分接茶1分，问「最少要几分钟」，求最优方案时间"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "洗壶1分、烧水8分、洗茶杯2分、接茶1分",
                        "烧水8分、接茶1分",
                        "洗壶1分、烧水8分",
                        "只有烧水8分"
                    ],
                    "answer": "洗壶1分、烧水8分、洗茶杯2分、接茶1分",
                    "explain": "四个步骤时间：洗壶1分、烧水8分、洗杯2分、接茶1分"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "合理安排同时做（1+8+1）",
                        "全部相加",
                        "全部相乘",
                        "用除法"
                    ],
                    "answer": "合理安排同时做（1+8+1）",
                    "explain": "洗壶1分后烧水8分，烧水时同时洗杯2分，最后接茶1分，共1+8+1=10分"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴从0到10，0洗壶、1烧水、9接茶、10完成，烧水时洗杯同时进行",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "优化：烧水8分时同时洗杯2分，省下2分。总时间1+8+1=10分",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "优化问题找可同时进行的事并行做，省时间。关键：找出能同时进行的步骤",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-030"
        },
        {
            "scene": "学校图书馆藏书约33655册，小红想知道33655中数字3表示多少。",
            "question": "33655中的3表示多少？",
            "formula": "3×10000 = ?",
            "answer": 30000,
            "choices": [
                30000,
                2000,
                200,
                200000
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 33655,
                "parts": [
                    {
                        "label": "3万",
                        "val": 30000,
                        "color": "#00A896"
                    },
                    {
                        "label": "其余位",
                        "val": 3655,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "亿以内数的认识",
            "difficulty": 2,
            "hint": "3在万位表示3万",
            "variants": [
                {
                    "question": "46000中4表示多少？",
                    "formula": "4×10000=?",
                    "answer": 40000,
                    "hint": "4在万位"
                },
                {
                    "question": "730000中7表示多少？",
                    "formula": "7×100000=?",
                    "answer": 700000,
                    "hint": "7在十万位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求数字3在33655里表示多少",
                        "求图书馆藏书总数",
                        "求33655除以3",
                        "求33655的近似数"
                    ],
                    "answer": "求数字3在33655里表示多少",
                    "explain": "题目问33655中的数字3表示多少，就是看3所在的数位表示的值"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "33655中3在万位，表示3个一万",
                        "3在千位表示3个一千",
                        "33655约3万册",
                        "3表示3个十"
                    ],
                    "answer": "33655中3在万位，表示3个一万",
                    "explain": "33655从右往左数位依次是个、十、百、千、万，3排在万位"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "位值计算：3个一万=3×10000=30000",
                        "3×1000=3000",
                        "3+10000=10003",
                        "30000÷10=3000"
                    ],
                    "answer": "位值计算：3个一万=3×10000=30000",
                    "explain": "万位上的3表示3个一万，3×10000=30000"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：33655拆成3万和其余部分两段，3万是最大的一段",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "位值原理：数字所在数位不同，表示的大小就不同；万位的3表示3个一万，即30000",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "看数位定大小：从右往左依次是个、十、百、千、万，哪一位上的数字就表示几个这样的计数单位",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-031"
        },
        {
            "scene": "学校图书馆藏书约36505册，小红想知道36505中数字3表示多少。",
            "question": "36505中的3表示多少？",
            "formula": "3×10000 = ?",
            "answer": 30000,
            "choices": [
                30000,
                2000,
                200,
                200000
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 36505,
                "parts": [
                    {
                        "label": "3万",
                        "val": 30000,
                        "color": "#00A896"
                    },
                    {
                        "label": "其余位",
                        "val": 6505,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "亿以内数的认识",
            "difficulty": 2,
            "hint": "3在万位表示3万",
            "variants": [
                {
                    "question": "46000中4表示多少？",
                    "formula": "4×10000=?",
                    "answer": 40000,
                    "hint": "4在万位"
                },
                {
                    "question": "730000中7表示多少？",
                    "formula": "7×100000=?",
                    "answer": 700000,
                    "hint": "7在十万位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求数字3在36505里表示多少",
                        "求图书馆藏书总数",
                        "求36505除以3",
                        "求36505的近似数"
                    ],
                    "answer": "求数字3在36505里表示多少",
                    "explain": "题目问36505中的数字3表示多少，就是看3所在的数位表示的值"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "36505中3在万位，表示3个一万",
                        "3在千位表示3个一千",
                        "36505约3万册",
                        "3表示3个十"
                    ],
                    "answer": "36505中3在万位，表示3个一万",
                    "explain": "36505从右往左数位依次是个、十、百、千、万，3排在万位"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "位值计算：3个一万=3×10000=30000",
                        "3×1000=3000",
                        "3+10000=10003",
                        "30000÷10=3000"
                    ],
                    "answer": "位值计算：3个一万=3×10000=30000",
                    "explain": "万位上的3表示3个一万，3×10000=30000"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：36505拆成3万和其余部分两段，3万是最大的一段",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "位值原理：数字所在数位不同，表示的大小就不同；万位的3表示3个一万，即30000",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "看数位定大小：从右往左依次是个、十、百、千、万，哪一位上的数字就表示几个这样的计数单位",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-032"
        },
        {
            "scene": "老师告诉小明每相邻两个计数单位之间的进率都是10。小明想知道12个一万是多少。",
            "question": "12个一万是多少？",
            "formula": "12 × 10000 = ?",
            "answer": 120000,
            "choices": [
                120000,
                100000,
                1000000,
                10000
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 120000,
                "parts": [
                    {
                        "label": "12个一万",
                        "val": 120000,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "十进制计数法",
            "difficulty": 2,
            "hint": "12×10000=120000",
            "variants": [
                {
                    "question": "12个十万是多少？",
                    "formula": "12×100000=?",
                    "answer": 1200000,
                    "hint": "12×100000=1200000"
                },
                {
                    "question": "12个一百万是多少？",
                    "formula": "12×1000000=?",
                    "answer": 12000000,
                    "hint": "12×1000000=12000000"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求12个一万合起来是多少",
                        "求1个一万是多少",
                        "求12除以10000",
                        "求相邻进率是多少"
                    ],
                    "answer": "求12个一万合起来是多少",
                    "explain": "题目问12个一万是多少，就是把12个一万相加求和"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1个一万是10000，一共有12个",
                        "1个一万是1000",
                        "12个一万是12",
                        "没有给计数单位"
                    ],
                    "answer": "1个一万是10000，一共有12个",
                    "explain": "一万写作10000，题目说有12个这样的一万"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "用乘法：12×10000=120000",
                        "12+10000=10012",
                        "10000÷12",
                        "12×1000=12000"
                    ],
                    "answer": "用乘法：12×10000=120000",
                    "explain": "12个一万就是12×10000=120000，读作十二万"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：一条长条表示12个一万合在一起的总量，共120000",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "计数单位叠加：1个一万=10000，12个一万=12×10000=120000",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "十进制计数法：每相邻两个计数单位之间的进率都是10，用计数单位个数乘单位值就能快速求和",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-033"
        },
        {
            "scene": "老师告诉小明每相邻两个计数单位之间的进率都是10。小明想知道13个一万是多少。",
            "question": "13个一万是多少？",
            "formula": "13 × 10000 = ?",
            "answer": 130000,
            "choices": [
                130000,
                100000,
                1000000,
                10000
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 130000,
                "parts": [
                    {
                        "label": "13个一万",
                        "val": 130000,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "十进制计数法",
            "difficulty": 2,
            "hint": "13×10000=130000",
            "variants": [
                {
                    "question": "13个十万是多少？",
                    "formula": "13×100000=?",
                    "answer": 1300000,
                    "hint": "13×100000=1300000"
                },
                {
                    "question": "13个一百万是多少？",
                    "formula": "13×1000000=?",
                    "answer": 13000000,
                    "hint": "13×1000000=13000000"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求13个一万合起来是多少",
                        "求1个一万是多少",
                        "求13除以10000",
                        "求相邻进率是多少"
                    ],
                    "answer": "求13个一万合起来是多少",
                    "explain": "题目问13个一万是多少，就是把13个一万相加求和"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1个一万是10000，一共有13个",
                        "1个一万是1000",
                        "13个一万是13",
                        "没有给计数单位"
                    ],
                    "answer": "1个一万是10000，一共有13个",
                    "explain": "一万写作10000，题目说有13个这样的一万"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "用乘法：13×10000=130000",
                        "13+10000=10013",
                        "10000÷13",
                        "13×1000=13000"
                    ],
                    "answer": "用乘法：13×10000=130000",
                    "explain": "13个一万就是13×10000=130000，读作十三万"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：一条长条表示13个一万合在一起的总量，共130000",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "计数单位叠加：1个一万=10000，13个一万=13×10000=130000",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "十进制计数法：每相邻两个计数单位之间的进率都是10，用计数单位个数乘单位值就能快速求和",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-034"
        },
        {
            "scene": "小红用计算器算40×40，她先输入40再输入乘号和40。",
            "question": "40×40等于多少？",
            "formula": "40 × 40 = ?",
            "answer": 1600,
            "choices": [
                1600,
                1648,
                1848,
                1740
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 40,
                "cols": 40,
                "color": "#00A896"
            },
            "knowledge": "计算器使用",
            "difficulty": 2,
            "hint": "用计算器验证",
            "variants": [
                {
                    "question": "52×37=?",
                    "formula": "52×37=?",
                    "answer": 1924,
                    "hint": "用计算器"
                },
                {
                    "question": "65×48=?",
                    "formula": "65×48=?",
                    "answer": 3120,
                    "hint": "用计算器"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求40×40的积是多少",
                        "求40+40的和是多少",
                        "求40÷40的商是多少",
                        "求计算器按键步骤"
                    ],
                    "answer": "求40×40的积是多少",
                    "explain": "题目问40×40等于多少，是求两个40相乘的积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两个因数都是40",
                        "一个因数是40一个是4",
                        "因数一共有3个",
                        "只有40一个数"
                    ],
                    "answer": "两个因数都是40",
                    "explain": "小红输入40、乘号、40，两个因数都是40"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "用乘法计算：40×40=1600",
                        "40+40=80",
                        "40×4=160",
                        "400÷40=10"
                    ],
                    "answer": "用乘法计算：40×40=1600",
                    "explain": "40×40：先算4×4=16，两个因数末尾各有1个0，积的末尾添2个0，得1600"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积模型：40行40列的方格阵，总格数就是40×40",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "整十数相乘：先算4×4=16，两个因数末尾共有2个0，积的末尾添2个0得1600",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "整十整百相乘：先算数字部分，再数因数末尾共有几个0，在积的末尾添上同样多的0",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-035"
        },
        {
            "scene": "小红用计算器算44×44，她先输入44再输入乘号和44。",
            "question": "44×44等于多少？",
            "formula": "44 × 44 = ?",
            "answer": 1936,
            "choices": [
                1936,
                1648,
                1848,
                1740
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 44,
                "cols": 44,
                "color": "#00A896"
            },
            "knowledge": "计算器使用",
            "difficulty": 2,
            "hint": "用计算器验证",
            "variants": [
                {
                    "question": "52×37=?",
                    "formula": "52×37=?",
                    "answer": 1924,
                    "hint": "用计算器"
                },
                {
                    "question": "65×48=?",
                    "formula": "65×48=?",
                    "answer": 3120,
                    "hint": "用计算器"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求44×44的积是多少",
                        "求44+44的和是多少",
                        "求44÷44的商是多少",
                        "求计算器按键步骤"
                    ],
                    "answer": "求44×44的积是多少",
                    "explain": "题目问44×44等于多少，是求两个44相乘的积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两个因数都是44",
                        "一个因数是44一个是4",
                        "因数一共有3个",
                        "只有44一个数"
                    ],
                    "answer": "两个因数都是44",
                    "explain": "小红输入44、乘号、44，两个因数都是44"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "用乘法计算：44×44=1936",
                        "44+44=88",
                        "44×40=1760",
                        "44÷44=1"
                    ],
                    "answer": "用乘法计算：44×44=1936",
                    "explain": "44×44：44×40=1760，44×4=176，1760+176=1936"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积模型：44行44列的方格阵，总格数就是44×44",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "拆数相乘：44×44=44×40+44×4=1760+176=1936",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "两位数乘两位数：拆成整十数和一位数分别相乘再相加，用计算器验证结果",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-036"
        },
        {
            "scene": "一个大型公园的面积大约是3公顷。小红想知道相当于多少平方米。",
            "question": "3公顷等于多少平方米？",
            "formula": "3公顷=?m²",
            "answer": 30000,
            "choices": [
                30000,
                3000,
                300,
                300000
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 100,
                    "unit": "m",
                    "label": "1公顷=100m×100m"
                }
            },
            "knowledge": "公顷的认识",
            "difficulty": 2,
            "hint": "1公顷=10000m²",
            "variants": [
                {
                    "question": "2公顷=多少m²？",
                    "formula": "2公顷=?",
                    "answer": 20000,
                    "hint": "2×10000"
                },
                {
                    "question": "5公顷=多少m²？",
                    "formula": "5公顷=?",
                    "answer": 50000,
                    "hint": "5×10000"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求3公顷等于多少平方米",
                        "求公园的周长",
                        "求1平方米有多大",
                        "求3公顷有多大"
                    ],
                    "answer": "求3公顷等于多少平方米",
                    "explain": "题目问3公顷相当于多少平方米，需要把公顷换算成平方米"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1公顷=10000平方米，有3公顷",
                        "1公顷=1000平方米",
                        "1公顷=100平方米",
                        "不知道进率"
                    ],
                    "answer": "1公顷=10000平方米，有3公顷",
                    "explain": "1公顷是边长100米的正方形面积，即100×100=10000平方米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "用乘法换算：3×10000=30000",
                        "3×1000=3000",
                        "3×100=300",
                        "10000÷3"
                    ],
                    "answer": "用乘法换算：3×10000=30000",
                    "explain": "高级单位换低级单位要乘进率：3公顷=3×10000=30000平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：1公顷是边长100米的正方形，3公顷就是3个这样的正方形拼起来",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积单位换算：1公顷=10000平方米，3公顷=3×10000=30000平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "面积单位进率：1平方千米=100公顷=1000000平方米，换算时高级单位乘进率得到低级单位",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-037"
        },
        {
            "scene": "一片森林的面积大约是2公顷。小亮想知道相当于多少平方米。",
            "question": "2公顷等于多少平方米？",
            "formula": "2公顷=?m²",
            "answer": 20000,
            "choices": [
                20000,
                2000,
                200,
                200000
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 100,
                    "unit": "m",
                    "label": "1公顷=100m×100m"
                }
            },
            "knowledge": "公顷的认识",
            "difficulty": 2,
            "hint": "1公顷=10000m²",
            "variants": [
                {
                    "question": "2公顷=多少m²？",
                    "formula": "2公顷=?",
                    "answer": 20000,
                    "hint": "2×10000"
                },
                {
                    "question": "5公顷=多少m²？",
                    "formula": "5公顷=?",
                    "answer": 50000,
                    "hint": "5×10000"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求2公顷等于多少平方米",
                        "求森林的周长",
                        "求1平方米有多大",
                        "求2公顷有多大"
                    ],
                    "answer": "求2公顷等于多少平方米",
                    "explain": "题目问2公顷相当于多少平方米，需要把公顷换算成平方米"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1公顷=10000平方米，有2公顷",
                        "1公顷=1000平方米",
                        "1公顷=100平方米",
                        "不知道进率"
                    ],
                    "answer": "1公顷=10000平方米，有2公顷",
                    "explain": "1公顷是边长100米的正方形面积，即100×100=10000平方米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "用乘法换算：2×10000=20000",
                        "2×1000=2000",
                        "2×100=200",
                        "10000÷2"
                    ],
                    "answer": "用乘法换算：2×10000=20000",
                    "explain": "高级单位换低级单位要乘进率：2公顷=2×10000=20000平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：1公顷是边长100米的正方形，2公顷就是2个这样的正方形拼起来",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积单位换算：1公顷=10000平方米，2公顷=2×10000=20000平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "面积单位进率：1平方千米=100公顷=1000000平方米，换算时高级单位乘进率得到低级单位",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-038"
        },
        {
            "scene": "一个自然保护区面积约4平方千米。小亮想知道1平方千米等于多少公顷。",
            "question": "1平方千米等于多少公顷？",
            "formula": "1km² = ? 公顷",
            "answer": 100,
            "choices": [
                100,
                1000,
                10,
                10000
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 1000,
                    "unit": "m",
                    "label": "1km²=1000m×1000m"
                }
            },
            "knowledge": "平方千米的认识",
            "difficulty": 2,
            "hint": "1km²=100公顷",
            "variants": [
                {
                    "question": "2km²=多少公顷？",
                    "formula": "2km²=?",
                    "answer": 200,
                    "hint": "2×100"
                },
                {
                    "question": "5km²=多少公顷？",
                    "formula": "5km²=?",
                    "answer": 500,
                    "hint": "5×100"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求1平方千米等于多少公顷",
                        "求保护区的面积",
                        "求1公顷有多大",
                        "求1000米有多长"
                    ],
                    "answer": "求1平方千米等于多少公顷",
                    "explain": "题目问1平方千米等于多少公顷，是面积单位间的换算"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1平方千米=100公顷",
                        "1平方千米=10公顷",
                        "1平方千米=1000公顷",
                        "不知道进率"
                    ],
                    "answer": "1平方千米=100公顷",
                    "explain": "1平方千米是边长1000米的正方形面积，能分成100个边长100米的正方形"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "用进率换算：1km²=100公顷",
                        "1km²=10公顷",
                        "1km²=1000公顷",
                        "100km²=1公顷"
                    ],
                    "answer": "用进率换算：1km²=100公顷",
                    "explain": "面积单位进率中，1平方千米=100公顷"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：1平方千米是边长1000米的正方形，1公顷是边长100米的正方形，正好能排成100个",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "单位进率：1平方千米=100公顷=1000000平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "面积单位换算：高级单位换低级单位要乘进率，1平方千米=100公顷要记牢",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-039"
        },
        {
            "scene": "一个自然保护区面积约6平方千米。小亮想知道1平方千米等于多少公顷。",
            "question": "1平方千米等于多少公顷？",
            "formula": "1km² = ? 公顷",
            "answer": 100,
            "choices": [
                100,
                1000,
                10,
                10000
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "square",
                "params": {
                    "side": 1000,
                    "unit": "m",
                    "label": "1km²=1000m×1000m"
                }
            },
            "knowledge": "平方千米的认识",
            "difficulty": 2,
            "hint": "1km²=100公顷",
            "variants": [
                {
                    "question": "2km²=多少公顷？",
                    "formula": "2km²=?",
                    "answer": 200,
                    "hint": "2×100"
                },
                {
                    "question": "5km²=多少公顷？",
                    "formula": "5km²=?",
                    "answer": 500,
                    "hint": "5×100"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求1平方千米等于多少公顷",
                        "求保护区的面积",
                        "求1公顷有多大",
                        "求1000米有多长"
                    ],
                    "answer": "求1平方千米等于多少公顷",
                    "explain": "题目问1平方千米等于多少公顷，是面积单位间的换算"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1平方千米=100公顷",
                        "1平方千米=10公顷",
                        "1平方千米=1000公顷",
                        "不知道进率"
                    ],
                    "answer": "1平方千米=100公顷",
                    "explain": "1平方千米是边长1000米的正方形面积，能分成100个边长100米的正方形"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "用进率换算：1km²=100公顷",
                        "1km²=10公顷",
                        "1km²=1000公顷",
                        "100km²=1公顷"
                    ],
                    "answer": "用进率换算：1km²=100公顷",
                    "explain": "面积单位进率中，1平方千米=100公顷"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：1平方千米是边长1000米的正方形，1公顷是边长100米的正方形，正好能排成100个",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "单位进率：1平方千米=100公顷=1000000平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "面积单位换算：高级单位换低级单位要乘进率，1平方千米=100公顷要记牢",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-040"
        },
        {
            "scene": "小明在学习线的类型：射线有一个端点，可以向一端无限延伸。老师问直线的特点。",
            "question": "直线有几个端点？",
            "formula": "直线端点数=?",
            "answer": 0,
            "choices": [
                0,
                1,
                2,
                3
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "line",
                "params": {
                    "type": "line",
                    "endpoints": 0
                }
            },
            "knowledge": "线段直线射线",
            "difficulty": 1,
            "hint": "直线没有端点",
            "variants": [
                {
                    "question": "线段有几个端点？",
                    "formula": "线段端点=?",
                    "answer": 2,
                    "hint": "线段2个端点"
                },
                {
                    "question": "直线有几个端点？",
                    "formula": "直线端点=?",
                    "answer": 0,
                    "hint": "直线没有端点"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求直线有几个端点",
                        "求直线有多长",
                        "求射线有几个端点",
                        "求线段有几个端点"
                    ],
                    "answer": "求直线有几个端点",
                    "explain": "题目问直线有几个端点，要回忆直线的特征"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "直线向两端无限延伸，没有端点",
                        "直线有1个端点",
                        "直线有2个端点",
                        "直线有3个端点"
                    ],
                    "answer": "直线向两端无限延伸，没有端点",
                    "explain": "直线是无限长的，向两端都可以无限延伸，因此没有端点"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "端点个数=0",
                        "端点个数=1",
                        "端点个数=2",
                        "端点个数=3"
                    ],
                    "answer": "端点个数=0",
                    "explain": "直线没有端点，端点个数记作0"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：直线两端都带箭头，可以向两边无限延伸，没有任何端点",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "三种线的端点：线段2个、射线1个、直线0个",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "区分线段、射线、直线：看端点个数和能否延伸，直线两端无限延伸、无端点",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-041"
        },
        {
            "scene": "小红拉紧了一段毛线，两端用手捏住。老师说这像线段。老师问线段有几个端点。",
            "question": "线段有几个端点？",
            "formula": "线段端点数=?",
            "answer": 2,
            "choices": [
                2,
                0,
                1,
                3
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "line",
                "params": {
                    "type": "segment",
                    "endpoints": 2
                }
            },
            "knowledge": "线段直线射线",
            "difficulty": 1,
            "hint": "线段2个端点",
            "variants": [
                {
                    "question": "线段有几个端点？",
                    "formula": "线段端点=?",
                    "answer": 2,
                    "hint": "线段2个端点"
                },
                {
                    "question": "直线有几个端点？",
                    "formula": "直线端点=?",
                    "answer": 0,
                    "hint": "直线没有端点"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求线段有几个端点",
                        "求线段有多长",
                        "求直线有几个端点",
                        "求射线有几个端点"
                    ],
                    "answer": "求线段有几个端点",
                    "explain": "题目问拉紧的毛线像线段，线段有几个端点"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "线段两端都被捏住，有2个端点",
                        "线段有1个端点",
                        "线段没有端点",
                        "线段有3个端点"
                    ],
                    "answer": "线段两端都被捏住，有2个端点",
                    "explain": "毛线两端用手捏住，正好就是线段的两个端点"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "端点个数=2",
                        "端点个数=1",
                        "端点个数=0",
                        "端点个数=3"
                    ],
                    "answer": "端点个数=2",
                    "explain": "线段有两个端点，长度可以测量"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：线段两端各有一个小圆点，表示2个端点",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "线段特征：直直的、有2个端点、长度可以测量",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "三种线对比：线段2个端点可测量，射线1个端点，直线0个端点",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-042"
        },
        {
            "scene": "小红用量角器量一个角，读数是130度。她想知道直角是多少度。",
            "question": "直角等于多少度？",
            "formula": "直角 = ?°",
            "answer": 90,
            "choices": [
                90,
                180,
                45,
                60
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "degree": 90,
                    "type": "right"
                }
            },
            "knowledge": "角的度量",
            "difficulty": 1,
            "hint": "直角90度",
            "variants": [
                {
                    "question": "平角多少度？",
                    "formula": "平角=?°",
                    "answer": 180,
                    "hint": "平角180度"
                },
                {
                    "question": "周角多少度？",
                    "formula": "周角=?°",
                    "answer": 360,
                    "hint": "周角360度"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求直角等于多少度",
                        "求量出的角是多少度",
                        "求平角多少度",
                        "求锐角多少度"
                    ],
                    "answer": "求直角等于多少度",
                    "explain": "题目问直角是多少度，要记住直角的大小"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "直角是90°，大小固定",
                        "直角是130°",
                        "直角是45°",
                        "直角随角的大小变化"
                    ],
                    "answer": "直角是90°，大小固定",
                    "explain": "用量角器量一个直角，读数一定是90°"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "直角=90°",
                        "直角=130°",
                        "直角=180°",
                        "直角=45°"
                    ],
                    "answer": "直角=90°",
                    "explain": "直角的大小固定是90°，与题目中先量到的角无关"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：直角用直角符号（小正方形）标记，度数为90°",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "特殊角：直角=90°，平角=180°，周角=360°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "角的分类依据度数：小于90°是锐角，等于90°是直角，大于90°小于180°是钝角",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-043"
        },
        {
            "scene": "小红用量角器量一个角，读数是76度。她想知道直角是多少度。",
            "question": "直角等于多少度？",
            "formula": "直角 = ?°",
            "answer": 90,
            "choices": [
                90,
                180,
                45,
                60
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "degree": 90,
                    "type": "right"
                }
            },
            "knowledge": "角的度量",
            "difficulty": 1,
            "hint": "直角90度",
            "variants": [
                {
                    "question": "平角多少度？",
                    "formula": "平角=?°",
                    "answer": 180,
                    "hint": "平角180度"
                },
                {
                    "question": "周角多少度？",
                    "formula": "周角=?°",
                    "answer": 360,
                    "hint": "周角360度"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求直角等于多少度",
                        "求量出的角是多少度",
                        "求平角多少度",
                        "求锐角多少度"
                    ],
                    "answer": "求直角等于多少度",
                    "explain": "题目问直角是多少度，要记住直角的大小"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "直角是90°，大小固定",
                        "直角是76°",
                        "直角是45°",
                        "直角随角的大小变化"
                    ],
                    "answer": "直角是90°，大小固定",
                    "explain": "用量角器量一个直角，读数一定是90°"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "直角=90°",
                        "直角=76°",
                        "直角=180°",
                        "直角=45°"
                    ],
                    "answer": "直角=90°",
                    "explain": "直角的大小固定是90°，与题目中先量到的角无关"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：直角用直角符号（小正方形）标记，度数为90°",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "特殊角：直角=90°，平角=180°，周角=360°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "角的分类依据度数：小于90°是锐角，等于90°是直角，大于90°小于180°是钝角",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-044"
        },
        {
            "scene": "小亮画了一个角，量得是46度。老师问这是什么角。",
            "question": "46°的角是什么角？(锐角填1,直角填2,钝角填3)",
            "formula": "46° → ? (1锐/2直/3钝)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "degree": 46,
                    "type": "acute"
                }
            },
            "knowledge": "角的分类",
            "difficulty": 2,
            "hint": "小于90°是锐角",
            "variants": [
                {
                    "question": "120°是什么角(1锐2直3钝)？",
                    "formula": "120°→?",
                    "answer": 3,
                    "hint": "大于90小于180是钝角"
                },
                {
                    "question": "90°是什么角(1锐2直3钝)？",
                    "formula": "90°→?",
                    "answer": 2,
                    "hint": "等于90是直角"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "判断46°的角是锐角、直角还是钝角",
                        "求46°角的补角",
                        "求46°角的余角",
                        "量出46°角的大小"
                    ],
                    "answer": "判断46°的角是锐角、直角还是钝角",
                    "explain": "题目问46°的角属于哪一类角，要按度数分类"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "46°小于90°",
                        "46°等于90°",
                        "46°大于90°",
                        "46°大于180°"
                    ],
                    "answer": "46°小于90°",
                    "explain": "46°比90°小，也比180°小"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "小于90°是锐角，填1",
                        "等于90°是直角，填2",
                        "大于90°是钝角，填3",
                        "大于180°填0"
                    ],
                    "answer": "小于90°是锐角，填1",
                    "explain": "0°<46°<90°，所以46°是锐角，填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：一个46°的角，开口比直角小，是锐角的形状",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "角的分类：锐角<90°<钝角<180°，直角=90°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "给角分类只比较度数与90°、180°的大小关系，与边的长短无关",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-045"
        },
        {
            "scene": "小亮画了一个角，量得是50度。老师问这是什么角。",
            "question": "50°的角是什么角？(锐角填1,直角填2,钝角填3)",
            "formula": "50° → ? (1锐/2直/3钝)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "degree": 50,
                    "type": "acute"
                }
            },
            "knowledge": "角的分类",
            "difficulty": 2,
            "hint": "小于90°是锐角",
            "variants": [
                {
                    "question": "120°是什么角(1锐2直3钝)？",
                    "formula": "120°→?",
                    "answer": 3,
                    "hint": "大于90小于180是钝角"
                },
                {
                    "question": "90°是什么角(1锐2直3钝)？",
                    "formula": "90°→?",
                    "answer": 2,
                    "hint": "等于90是直角"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "判断50°的角是锐角、直角还是钝角",
                        "求50°角的补角",
                        "求50°角的余角",
                        "量出50°角的大小"
                    ],
                    "answer": "判断50°的角是锐角、直角还是钝角",
                    "explain": "题目问50°的角属于哪一类角，要按度数分类"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "50°小于90°",
                        "50°等于90°",
                        "50°大于90°",
                        "50°大于180°"
                    ],
                    "answer": "50°小于90°",
                    "explain": "50°比90°小，也比180°小"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "小于90°是锐角，填1",
                        "等于90°是直角，填2",
                        "大于90°是钝角，填3",
                        "大于180°填0"
                    ],
                    "answer": "小于90°是锐角，填1",
                    "explain": "0°<50°<90°，所以50°是锐角，填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：一个50°的角，开口比直角小，是锐角的形状",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "角的分类：锐角<90°<钝角<180°，直角=90°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "给角分类只比较度数与90°、180°的大小关系，与边的长短无关",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-046"
        },
        {
            "scene": "美术课上小红要画一个77度的角。她用量角器画好后想验证。",
            "question": "77°的角属于哪类？(锐角填1,钝角填2)",
            "formula": "77° → ? (1锐/2钝)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "degree": 77,
                    "type": "acute"
                }
            },
            "knowledge": "画指定度数的角",
            "difficulty": 2,
            "hint": "小于90°是锐角",
            "variants": [
                {
                    "question": "画100°的角是什么角(1锐2钝)？",
                    "formula": "100°→?",
                    "answer": 2,
                    "hint": "钝角"
                },
                {
                    "question": "画30°的角是什么角(1锐2钝)？",
                    "formula": "30°→?",
                    "answer": 1,
                    "hint": "锐角"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "判断77°的角属于哪一类",
                        "求77°角的补角",
                        "画一个77°的角",
                        "量77°角的大小"
                    ],
                    "answer": "判断77°的角属于哪一类",
                    "explain": "题目问画好的77°角属于锐角还是钝角"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "77°小于90°",
                        "77°等于90°",
                        "77°大于90°",
                        "77°大于180°"
                    ],
                    "answer": "77°小于90°",
                    "explain": "77°比90°小，属于锐角的范围"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "小于90°是锐角，填1",
                        "大于90°是钝角，填2",
                        "等于90°填3",
                        "大于180°填0"
                    ],
                    "answer": "小于90°是锐角，填1",
                    "explain": "77°<90°，是锐角，填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：77°的角比直角小一点，是锐角的形状",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "角的分类：锐角小于90°，77°是锐角",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "画角后验证：用量角器检查度数，再按与90°的大小关系判断类型",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-047"
        },
        {
            "scene": "美术课上小红要画一个83度的角。她用量角器画好后想验证。",
            "question": "83°的角属于哪类？(锐角填1,钝角填2)",
            "formula": "83° → ? (1锐/2钝)",
            "answer": 1,
            "choices": [
                1,
                2,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "degree": 83,
                    "type": "acute"
                }
            },
            "knowledge": "画指定度数的角",
            "difficulty": 2,
            "hint": "小于90°是锐角",
            "variants": [
                {
                    "question": "画100°的角是什么角(1锐2钝)？",
                    "formula": "100°→?",
                    "answer": 2,
                    "hint": "钝角"
                },
                {
                    "question": "画30°的角是什么角(1锐2钝)？",
                    "formula": "30°→?",
                    "answer": 1,
                    "hint": "锐角"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "判断83°的角属于哪一类",
                        "求83°角的补角",
                        "画一个83°的角",
                        "量83°角的大小"
                    ],
                    "answer": "判断83°的角属于哪一类",
                    "explain": "题目问画好的83°角属于锐角还是钝角"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "83°小于90°",
                        "83°等于90°",
                        "83°大于90°",
                        "83°大于180°"
                    ],
                    "answer": "83°小于90°",
                    "explain": "83°比90°小，属于锐角的范围"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "小于90°是锐角，填1",
                        "大于90°是钝角，填2",
                        "等于90°填3",
                        "大于180°填0"
                    ],
                    "answer": "小于90°是锐角，填1",
                    "explain": "83°<90°，是锐角，填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：83°的角比直角小一点，是锐角的形状",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "角的分类：锐角小于90°，83°是锐角",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "画角后验证：用量角器检查度数，再按与90°的大小关系判断类型",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-048"
        },
        {
            "scene": "学校买来13箱粉笔，每箱133盒。总务处要算一共有多少盒粉笔。",
            "question": "一共买了多少盒粉笔？",
            "formula": "133 × 13 = ?",
            "answer": 1729,
            "choices": [
                1729,
                1640,
                1840,
                174
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 133,
                "cols": 13,
                "color": "#00A896"
            },
            "knowledge": "三位数乘两位数笔算",
            "difficulty": 3,
            "hint": "133×10=1330，133×3=399，相加得1729",
            "variants": [
                {
                    "question": "234×11=?",
                    "formula": "234×11=?",
                    "answer": 2574,
                    "hint": "234×10加234"
                },
                {
                    "question": "156×23=?",
                    "formula": "156×23=?",
                    "answer": 3588,
                    "hint": "分步算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求一共买了多少盒粉笔",
                        "求每箱有多少盒",
                        "求一共有几箱",
                        "求每箱比每盒多几盒"
                    ],
                    "answer": "求一共买了多少盒粉笔",
                    "explain": "题目问13箱粉笔一共有多少盒，是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每箱133盒，共13箱",
                        "每箱13盒，共133箱",
                        "一共13盒",
                        "一共133盒"
                    ],
                    "answer": "每箱133盒，共13箱",
                    "explain": "每箱133盒（每份数），共13箱（份数）"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "总数=每份数×份数：133×13=1729",
                        "133+13=146",
                        "133×3=399",
                        "133÷13"
                    ],
                    "answer": "总数=每份数×份数：133×13=1729",
                    "explain": "133×13：133×10=1330，133×3=399，1330+399=1729盒"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积模型：长133、宽13的方格阵，总格数就是133×13",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "三位数乘两位数：把13拆成10和3，133×10+133×3=1330+399=1729",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求总数：总数=每份数×份数，笔算时把两位数拆成整十数和一位数分别乘再相加",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-049"
        },
        {
            "scene": "学校买来15箱粉笔，每箱138盒。总务处要算一共有多少盒粉笔。",
            "question": "一共买了多少盒粉笔？",
            "formula": "138 × 15 = ?",
            "answer": 2070,
            "choices": [
                2070,
                1640,
                1840,
                174
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 138,
                "cols": 15,
                "color": "#00A896"
            },
            "knowledge": "三位数乘两位数笔算",
            "difficulty": 3,
            "hint": "138×10=1380，138×5=690，相加得2070",
            "variants": [
                {
                    "question": "234×11=?",
                    "formula": "234×11=?",
                    "answer": 2574,
                    "hint": "234×10加234"
                },
                {
                    "question": "156×23=?",
                    "formula": "156×23=?",
                    "answer": 3588,
                    "hint": "分步算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求一共买了多少盒粉笔",
                        "求每箱有多少盒",
                        "求一共有几箱",
                        "求每箱比每盒多几盒"
                    ],
                    "answer": "求一共买了多少盒粉笔",
                    "explain": "题目问15箱粉笔一共有多少盒，是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每箱138盒，共15箱",
                        "每箱15盒，共138箱",
                        "一共15盒",
                        "一共138盒"
                    ],
                    "answer": "每箱138盒，共15箱",
                    "explain": "每箱138盒（每份数），共15箱（份数）"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "总数=每份数×份数：138×15=2070",
                        "138+15=153",
                        "138×5=690",
                        "138÷15"
                    ],
                    "answer": "总数=每份数×份数：138×15=2070",
                    "explain": "138×15：138×10=1380，138×5=690，1380+690=2070盒"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积模型：长138、宽15的方格阵，总格数就是138×15",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "三位数乘两位数：把15拆成10和5，138×10+138×5=1380+690=2070",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求总数：总数=每份数×份数，笔算时把两位数拆成整十数和一位数分别乘再相加",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-050"
        },
        {
            "scene": "一箱装119个苹果，装了35箱。果农要算一共多少个苹果。",
            "question": "一共多少个苹果？",
            "formula": "119 × 35 = ?",
            "answer": 4165,
            "choices": [
                4165,
                3080,
                318,
                3280
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 119,
                "cols": 35,
                "color": "#00A896"
            },
            "knowledge": "因数有0的乘法",
            "difficulty": 2,
            "hint": "119×30=3570，119×5=595，相加得4165",
            "variants": [
                {
                    "question": "204×20=?",
                    "formula": "204×20=?",
                    "answer": 4080,
                    "hint": "204×2添0"
                },
                {
                    "question": "358×50=?",
                    "formula": "358×50=?",
                    "answer": 17900,
                    "hint": "358×5添0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求一共多少个苹果",
                        "求每箱装多少个",
                        "求一共有几箱",
                        "求每箱少几个"
                    ],
                    "answer": "求一共多少个苹果",
                    "explain": "题目问35箱苹果一共有多少个，是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每箱119个，共35箱",
                        "每箱35个，共119箱",
                        "一共119个",
                        "一共35个"
                    ],
                    "answer": "每箱119个，共35箱",
                    "explain": "一箱119个（每份数），装了35箱（份数）"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "总数=每份数×份数：119×35=4165",
                        "119+35=154",
                        "119×3=357",
                        "119÷35"
                    ],
                    "answer": "总数=每份数×份数：119×35=4165",
                    "explain": "119×35：119×30=3570，119×5=595，3570+595=4165个"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积模型：长119、宽35的方格阵，总格数就是119×35",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "乘法笔算：119×35拆成119×30和119×5，分别算再相加得4165",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "因数末尾有0的乘法：先算0前面的数的积，再看因数末尾共有几个0，在积的末尾添几个0",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-051"
        },
        {
            "scene": "一箱装129个苹果，装了39箱。果农要算一共多少个苹果。",
            "question": "一共多少个苹果？",
            "formula": "129 × 39 = ?",
            "answer": 5031,
            "choices": [
                5031,
                3080,
                318,
                3280
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 129,
                "cols": 39,
                "color": "#00A896"
            },
            "knowledge": "因数有0的乘法",
            "difficulty": 2,
            "hint": "129×30=3870，129×9=1161，相加得5031",
            "variants": [
                {
                    "question": "204×20=?",
                    "formula": "204×20=?",
                    "answer": 4080,
                    "hint": "204×2添0"
                },
                {
                    "question": "398×50=?",
                    "formula": "398×50=?",
                    "answer": 19900,
                    "hint": "398×5添0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求一共多少个苹果",
                        "求每箱装多少个",
                        "求一共有几箱",
                        "求每箱少几个"
                    ],
                    "answer": "求一共多少个苹果",
                    "explain": "题目问39箱苹果一共有多少个，是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每箱129个，共39箱",
                        "每箱39个，共129箱",
                        "一共129个",
                        "一共39个"
                    ],
                    "answer": "每箱129个，共39箱",
                    "explain": "一箱129个（每份数），装了39箱（份数）"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "总数=每份数×份数：129×39=5031",
                        "129+39=168",
                        "129×3=387",
                        "129÷39"
                    ],
                    "answer": "总数=每份数×份数：129×39=5031",
                    "explain": "129×39：129×30=3870，129×9=1161，3870+1161=5031个"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "面积模型：长129、宽39的方格阵，总格数就是129×39",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "乘法笔算：129×39拆成129×30和129×9，分别算再相加得5031",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "因数末尾有0的乘法：先算0前面的数的积，再看因数末尾共有几个0，在积的末尾添几个0",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-052"
        },
        {
            "scene": "小红发现4×5=20，如果把5变成10（乘2），积也跟着变。她好奇积变成多少。",
            "question": "4×10=? (4不变,5变10)",
            "formula": "4 × 10 = ?",
            "answer": 40,
            "choices": [
                40,
                11,
                6,
                48
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 40,
                "parts": [
                    {
                        "label": "4×5=20",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "4×5=20",
                        "val": 20,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "积的变化规律",
            "difficulty": 2,
            "hint": "一个因数乘2积也乘2",
            "variants": [
                {
                    "question": "5×6=30，把6变成12（乘2），5×12=?",
                    "formula": "5×12=?",
                    "answer": 60,
                    "hint": "一个因数乘2积也乘2"
                },
                {
                    "question": "3×4=12，把4变成8（乘2），3×8=?",
                    "formula": "3×8=?",
                    "answer": 24,
                    "hint": "一个因数乘2积也乘2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求4×10的积变成多少",
                        "求4×5的积是多少",
                        "求5变成了几",
                        "求积减少了多少"
                    ],
                    "answer": "求4×10的积变成多少",
                    "explain": "题目问把5变成10（乘2）后，4×10的积是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一个因数5变成10，相当于乘2",
                        "一个因数10变成5，相当于除以2",
                        "两个因数都变了",
                        "4也乘了2"
                    ],
                    "answer": "一个因数5变成10，相当于乘2",
                    "explain": "原来的4×5中，5变成10相当于乘2，另一个因数4不变"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "积也乘2：20×2=40",
                        "积不变仍是20",
                        "积除以2等于10",
                        "20+2=22"
                    ],
                    "answer": "积也乘2：20×2=40",
                    "explain": "一个因数乘2，积也乘2：4×5=20，4×10=20×2=40"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：两段各代表20，合起来表示积从20变成40",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "积的变化规律：一个因数不变，另一个因数乘2，积也乘2",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "一个因数不变，另一个因数乘几（或除以几），积也乘几（或除以几）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-053"
        },
        {
            "scene": "小红发现4×4=16，如果把第二个因数从4变成11，积也跟着变。她好奇积变成多少。",
            "question": "4×11=? (4不变,4变11)",
            "formula": "4 × 11 = ?",
            "answer": 44,
            "choices": [
                44,
                11,
                6,
                48
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 44,
                "parts": [
                    {
                        "label": "4×11",
                        "val": 44,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "积的变化规律",
            "difficulty": 2,
            "hint": "一个因数从4变成11，4×11=44",
            "variants": [
                {
                    "question": "5×6=30，把6变成12（乘2），5×12=?",
                    "formula": "5×12=?",
                    "answer": 60,
                    "hint": "一个因数乘2积也乘2"
                },
                {
                    "question": "4×7=28，把7变成14（乘2），4×14=?",
                    "formula": "4×14=?",
                    "answer": 56,
                    "hint": "一个因数乘2积也乘2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求4×11的积是多少",
                        "求4×4的积是多少",
                        "求因数4变成了几",
                        "求积减少了多少"
                    ],
                    "answer": "求4×11的积是多少",
                    "explain": "题目问一个因数从4变成11后，4×11的积是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "第一个4不变，第二个因数从4变成11",
                        "两个因数都变成11",
                        "因数变成了2个",
                        "积和原来一样"
                    ],
                    "answer": "第一个4不变，第二个因数从4变成11",
                    "explain": "算式4×11中，第一个4不变，第二个因数从4变成11"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "直接相乘：4×11=44",
                        "4×4=16",
                        "4+11=15",
                        "4×10=40"
                    ],
                    "answer": "直接相乘：4×11=44",
                    "explain": "4×11：4×10=40，4×1=4，40+4=44"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：一条长条表示4×11的积，共44",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "因数变化积也变：第二个因数从4变成11，积从16变成44",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "积的变化规律：一个因数不变，另一个因数乘几，积也乘几；可直接相乘或按倍数推算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-054"
        },
        {
            "scene": "文具店钢笔每支8元，小红买了18支。她算算一共要付多少元。",
            "question": "一共要付多少元？",
            "formula": "8 × 18 = ?",
            "answer": 144,
            "choices": [
                144,
                102,
                130,
                112
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 144,
                "parts": [
                    {
                        "label": "10支",
                        "val": 80,
                        "color": "#00A896"
                    },
                    {
                        "label": "8支",
                        "val": 64,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "单价数量总价",
            "difficulty": 2,
            "hint": "单价×数量=总价",
            "variants": [
                {
                    "question": "每支6元买20支多少元？",
                    "formula": "6×20=?",
                    "answer": 120,
                    "hint": "单价乘数量"
                },
                {
                    "question": "每本12元买8本多少元？",
                    "formula": "12×8=?",
                    "answer": 96,
                    "hint": "单价乘数量"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求买18支钢笔一共要付多少元",
                        "求每支钢笔多少元",
                        "求买了多少支",
                        "求找回多少元"
                    ],
                    "answer": "求买18支钢笔一共要付多少元",
                    "explain": "题目问买18支钢笔一共要付多少钱，是求总价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每支8元，买18支",
                        "每支18元，买8支",
                        "一共8元",
                        "一共18元"
                    ],
                    "answer": "每支8元，买18支",
                    "explain": "钢笔每支8元（单价），买了18支（数量）"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "总价=单价×数量：8×18=144",
                        "8+18=26",
                        "8×20=160",
                        "18÷8"
                    ],
                    "answer": "总价=单价×数量：8×18=144",
                    "explain": "总价=单价×数量=8×18=144元"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：18支分成10支（80元）和8支（64元）两段，合起来144元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总价=单价×数量：8×18=8×10+8×8=80+64=144元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "购物问题三量关系：总价=单价×数量，单价=总价÷数量，数量=总价÷单价",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-055"
        },
        {
            "scene": "文具店钢笔每支8元，小红买了21支。她算算一共要付多少元。",
            "question": "一共要付多少元？",
            "formula": "8 × 21 = ?",
            "answer": 168,
            "choices": [
                168,
                102,
                130,
                112
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 168,
                "parts": [
                    {
                        "label": "20支",
                        "val": 160,
                        "color": "#00A896"
                    },
                    {
                        "label": "1支",
                        "val": 8,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "单价数量总价",
            "difficulty": 2,
            "hint": "单价×数量=总价",
            "variants": [
                {
                    "question": "每支6元买20支多少元？",
                    "formula": "6×20=?",
                    "answer": 120,
                    "hint": "单价乘数量"
                },
                {
                    "question": "每本12元买8本多少元？",
                    "formula": "12×8=?",
                    "answer": 96,
                    "hint": "单价乘数量"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求买21支钢笔一共要付多少元",
                        "求每支钢笔多少元",
                        "求买了多少支",
                        "求找回多少元"
                    ],
                    "answer": "求买21支钢笔一共要付多少元",
                    "explain": "题目问买21支钢笔一共要付多少钱，是求总价"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每支8元，买21支",
                        "每支21元，买8支",
                        "一共8元",
                        "一共21元"
                    ],
                    "answer": "每支8元，买21支",
                    "explain": "钢笔每支8元（单价），买了21支（数量）"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "总价=单价×数量：8×21=168",
                        "8+21=29",
                        "8×20=160",
                        "21÷8"
                    ],
                    "answer": "总价=单价×数量：8×21=168",
                    "explain": "总价=单价×数量=8×21=168元"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：21支分成20支（160元）和1支（8元）两段，合起来168元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总价=单价×数量：8×21=8×20+8×1=160+8=168元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "购物问题三量关系：总价=单价×数量，知道其中两个量就能求第三个",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-056"
        },
        {
            "scene": "小红在纸上画了两条线，它们永不相交。老师问这样的两条线叫什么。",
            "question": "同一平面内不相交的两条直线叫什么？(平行填1,垂直填9)",
            "formula": "不相交 → ? (1平/9垂)",
            "answer": 1,
            "choices": [
                1,
                9,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "lines",
                "params": {
                    "type": "parallel"
                }
            },
            "knowledge": "平行与垂直",
            "difficulty": 2,
            "hint": "不相交叫平行",
            "variants": [
                {
                    "question": "相交成直角叫什么(1平9垂)？",
                    "formula": "成直角→?",
                    "answer": 9,
                    "hint": "成直角叫垂直"
                },
                {
                    "question": "两条线距离处处相等是(1平9垂)？",
                    "formula": "等距→?",
                    "answer": 1,
                    "hint": "平行线距离相等"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "判断两条不相交的直线叫什么",
                        "求两条线的长度",
                        "求两条线的交点",
                        "判断两条线是否相交"
                    ],
                    "answer": "判断两条不相交的直线叫什么",
                    "explain": "题目问同一平面内永不相交的两条直线叫什么"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条直线永不相交",
                        "两条直线相交",
                        "两条直线重合",
                        "两条线只有一个交点"
                    ],
                    "answer": "两条直线永不相交",
                    "explain": "小红画的两条线永不相交，这正是平行的特征"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "不相交的两条直线叫平行线，填1",
                        "相交成直角叫平行线",
                        "有交点叫平行线",
                        "填9表示平行"
                    ],
                    "answer": "不相交的两条直线叫平行线，填1",
                    "explain": "同一平面内永不相交的两条直线互相平行，填1；相交成直角才叫垂直（填9）"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：两条平行线之间的距离处处相等，永不相交",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平行定义：同一平面内不相交的两条直线叫平行线",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行与垂直：不相交→平行，相交成直角→垂直，先看是否相交再看夹角",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-057"
        },
        {
            "scene": "小红在纸上画了两条线，它们永不相交。老师问这样的两条线叫什么。",
            "question": "同一平面内不相交的两条直线叫什么？(平行填1,垂直填11)",
            "formula": "不相交 → ? (1平/11垂)",
            "answer": 1,
            "choices": [
                1,
                11,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "lines",
                "params": {
                    "type": "parallel"
                }
            },
            "knowledge": "平行与垂直",
            "difficulty": 2,
            "hint": "不相交叫平行",
            "variants": [
                {
                    "question": "相交成直角叫什么(1平11垂)？",
                    "formula": "成直角→?",
                    "answer": 11,
                    "hint": "成直角叫垂直"
                },
                {
                    "question": "两条线距离处处相等是(1平11垂)？",
                    "formula": "等距→?",
                    "answer": 1,
                    "hint": "平行线距离相等"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "判断两条不相交的直线叫什么",
                        "求两条线的长度",
                        "求两条线的交点",
                        "判断两条线是否相交"
                    ],
                    "answer": "判断两条不相交的直线叫什么",
                    "explain": "题目问同一平面内永不相交的两条直线叫什么"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条直线永不相交",
                        "两条直线相交",
                        "两条直线重合",
                        "两条线只有一个交点"
                    ],
                    "answer": "两条直线永不相交",
                    "explain": "小红画的两条线永不相交，这正是平行的特征"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "不相交的两条直线叫平行线，填1",
                        "相交成直角叫平行线",
                        "有交点叫平行线",
                        "填11表示平行"
                    ],
                    "answer": "不相交的两条直线叫平行线，填1",
                    "explain": "同一平面内永不相交的两条直线互相平行，填1；相交成直角才叫垂直（填11）"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：两条平行线之间的距离处处相等，永不相交",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平行定义：同一平面内不相交的两条直线叫平行线",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行与垂直：不相交→平行，相交成直角→垂直，先看是否相交再看夹角",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-058"
        },
        {
            "scene": "小红要从直线外一点画这条直线的垂线。她用三角尺的直角来画。",
            "question": "从直线外一点到这条直线所画的线段中什么最短？(垂线段填1,斜线段填10)",
            "formula": "最短 → ? (1垂/10斜)",
            "answer": 1,
            "choices": [
                1,
                10,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "perpendicular",
                "params": {
                    "fromPoint": true
                }
            },
            "knowledge": "画垂线和平行线",
            "difficulty": 2,
            "hint": "垂线段最短",
            "variants": [
                {
                    "question": "画平行线要用什么工具(1三角尺10圆规)？",
                    "formula": "画平行线用?",
                    "answer": 1,
                    "hint": "用三角尺和直尺"
                },
                {
                    "question": "从点到直线什么线最短(1垂10斜)？",
                    "formula": "最短是?",
                    "answer": 1,
                    "hint": "垂线段最短"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求从直线外一点到直线的线段中什么最短",
                        "求直线的长度",
                        "求点到直线的距离",
                        "求垂线的条数"
                    ],
                    "answer": "求从直线外一点到直线的线段中什么最短",
                    "explain": "题目问从直线外一点到这条直线的所有线段中，哪种最短"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "从一点可以向直线画无数条线段",
                        "从一点只能画一条线段",
                        "所有线段都一样长",
                        "一条线段也画不出"
                    ],
                    "answer": "从一点可以向直线画无数条线段",
                    "explain": "从直线外一点可以向直线画无数条线段，其中有一条是垂直线段"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "垂直线段最短，填1",
                        "斜线段最短，填10",
                        "所有线段一样长",
                        "没有最短的"
                    ],
                    "answer": "垂直线段最短，填1",
                    "explain": "从直线外一点到直线所画的线段中，垂直线段最短，填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：点A到直线画出一条垂直线段和一条斜线段对比，垂直线段明显最短",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "点到直线的距离：垂直线段的长度就是点到直线的距离，垂直线段最短",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "垂线性质：从直线外一点到直线的所有线段中垂直线段最短，过一点有且只有一条垂线",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-059"
        },
        {
            "scene": "小红要从直线外一点画这条直线的垂线。她用三角尺的直角来画。",
            "question": "从直线外一点到这条直线所画的线段中什么最短？(垂线段填1,斜线段填12)",
            "formula": "最短 → ? (1垂/12斜)",
            "answer": 1,
            "choices": [
                1,
                12,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "perpendicular",
                "params": {
                    "fromPoint": true
                }
            },
            "knowledge": "画垂线和平行线",
            "difficulty": 2,
            "hint": "垂线段最短",
            "variants": [
                {
                    "question": "画平行线要用什么工具(1三角尺12圆规)？",
                    "formula": "画平行线用?",
                    "answer": 1,
                    "hint": "用三角尺和直尺"
                },
                {
                    "question": "从点到直线什么线最短(1垂12斜)？",
                    "formula": "最短是?",
                    "answer": 1,
                    "hint": "垂线段最短"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求从直线外一点到直线的线段中什么最短",
                        "求直线的长度",
                        "求点到直线的距离",
                        "求垂线的条数"
                    ],
                    "answer": "求从直线外一点到直线的线段中什么最短",
                    "explain": "题目问从直线外一点到这条直线的所有线段中，哪种最短"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "从一点可以向直线画无数条线段",
                        "从一点只能画一条线段",
                        "所有线段都一样长",
                        "一条线段也画不出"
                    ],
                    "answer": "从一点可以向直线画无数条线段",
                    "explain": "从直线外一点可以向直线画无数条线段，其中有一条是垂直线段"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "垂直线段最短，填1",
                        "斜线段最短，填12",
                        "所有线段一样长",
                        "没有最短的"
                    ],
                    "answer": "垂直线段最短，填1",
                    "explain": "从直线外一点到直线所画的线段中，垂直线段最短，填1；斜线段填12"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：点A到直线画出一条垂直线段和一条斜线段对比，垂直线段明显最短",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "点到直线的距离：垂直线段的长度就是点到直线的距离，垂直线段最短",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "垂线性质：从直线外一点到直线的所有线段中垂直线段最短，过一点有且只有一条垂线",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-060"
        },
        {
            "scene": "小红画了一个四边形，两组对边分别平行。老师问这是什么图形。",
            "question": "两组对边分别平行的四边形叫什么？(平行四边形填1,梯形填3)",
            "formula": "两组平行 → ? (1平/3梯)",
            "answer": 1,
            "choices": [
                1,
                3,
                0
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {}
            },
            "knowledge": "平行四边形和梯形特征",
            "difficulty": 2,
            "hint": "两组对边平行是平行四边形",
            "variants": [
                {
                    "question": "只有一组对边平行是(1平3梯)？",
                    "formula": "一组平行→?",
                    "answer": 3,
                    "hint": "只有一组平行是梯形"
                },
                {
                    "question": "长方形属于(1平3梯)？",
                    "formula": "长方形属于?",
                    "answer": 1,
                    "hint": "长方形是特殊的平行四边形"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "判断两组对边分别平行的四边形叫什么",
                        "求四边形的周长",
                        "求四边形的面积",
                        "数四边形的边数"
                    ],
                    "answer": "判断两组对边分别平行的四边形叫什么",
                    "explain": "题目问两组对边分别平行的四边形是什么图形"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两组对边分别平行",
                        "只有一组对边平行",
                        "没有对边平行",
                        "四条边都相等"
                    ],
                    "answer": "两组对边分别平行",
                    "explain": "小红画的四边形两组对边分别平行"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "两组对边平行是平行四边形，填1",
                        "只有一组平行是平行四边形",
                        "两组平行是梯形",
                        "填3是平行四边形"
                    ],
                    "answer": "两组对边平行是平行四边形，填1",
                    "explain": "两组对边分别平行的四边形是平行四边形，填1；只有一组对边平行才叫梯形（填3）"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：平行四边形的两组对边分别平行且相等",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "图形定义：两组对边分别平行的四边形是平行四边形",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "四边形家族：两组对边平行→平行四边形，只有一组对边平行→梯形；长方形、正方形是特殊的平行四边形",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-061"
        },
        {
            "scene": "小亮画了一个四边形，只有一组对边平行。老师问这是什么图形。",
            "question": "只有一组对边平行的四边形叫什么？(平行四边形填1,梯形填3)",
            "formula": "一组平行→? (1平/3梯)",
            "answer": 3,
            "choices": [
                3,
                1,
                0,
                2
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "trapezoid",
                "params": {}
            },
            "knowledge": "平行四边形和梯形特征",
            "difficulty": 2,
            "hint": "只有一组对边平行是梯形",
            "variants": [
                {
                    "question": "只有一组对边平行是(1平3梯)？",
                    "formula": "一组平行→?",
                    "answer": 3,
                    "hint": "只有一组平行是梯形"
                },
                {
                    "question": "长方形属于(1平3梯)？",
                    "formula": "长方形属于?",
                    "answer": 1,
                    "hint": "长方形是特殊的平行四边形"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "判断只有一组对边平行的四边形叫什么",
                        "求四边形的周长",
                        "求四边形的面积",
                        "数四边形的边数"
                    ],
                    "answer": "判断只有一组对边平行的四边形叫什么",
                    "explain": "题目问只有一组对边平行的四边形是什么图形"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "只有一组对边平行",
                        "两组对边都平行",
                        "没有对边平行",
                        "四条边都相等"
                    ],
                    "answer": "只有一组对边平行",
                    "explain": "小亮画的四边形只有一组对边平行"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "只有一组对边平行是梯形，填3",
                        "只有一组平行是平行四边形",
                        "两组平行才是梯形",
                        "填1是梯形"
                    ],
                    "answer": "只有一组对边平行是梯形，填3",
                    "explain": "只有一组对边平行的四边形是梯形，填3；两组对边都平行才是平行四边形（填1）"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：梯形的上、下底互相平行，两腰不平行",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "图形定义：只有一组对边平行的四边形是梯形",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "四边形家族对比：平行四边形两组对边平行，梯形只有一组对边平行",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-062"
        },
        {
            "scene": "小红从平行四边形一个顶点向对边画垂线。老师告诉这条线段叫高。",
            "question": "平行四边形的高有几条？(无数条填1,只有一条填11)",
            "formula": "高 → ? (1无数/11一条)",
            "answer": 1,
            "choices": [
                1,
                11,
                3,
                4
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "height": true
                }
            },
            "knowledge": "平行四边形和梯形的高",
            "difficulty": 2,
            "hint": "平行四边形有无数条高",
            "variants": [
                {
                    "question": "梯形的高有几条(1无数11一条)？",
                    "formula": "梯形高=?",
                    "answer": 1,
                    "hint": "梯形也有无数条高"
                },
                {
                    "question": "画高要用什么工具(1三角尺11圆规)？",
                    "formula": "画高用?",
                    "answer": 1,
                    "hint": "用三角尺画垂线"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求平行四边形的高有几条",
                        "求平行四边形的面积",
                        "求高的长度",
                        "求底有几条"
                    ],
                    "answer": "求平行四边形的高有几条",
                    "explain": "题目问从顶点向对边画垂线得到的平行四边形的高有多少条"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "从一边上任一点都可作高，有无数条",
                        "高只有1条",
                        "高只有2条",
                        "高只有4条"
                    ],
                    "answer": "从一边上任一点都可作高，有无数条",
                    "explain": "平行四边形的高是从一条边上的点向对边作的垂线段"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "高有无数条，填1",
                        "高只有1条，填11",
                        "高有2条",
                        "高有4条"
                    ],
                    "answer": "高有无数条，填1",
                    "explain": "平行四边形对边间的距离处处相等，可以作无数条高，填1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：平行四边形从一条边向对边画一条垂线段，对边之间还能画无数条",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "高的定义：从平行四边形一条边上的一点向对边引垂线，这点和垂足之间的线段叫高",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形的高有无数条，都在两条平行对边之间；梯形的高也有无数条",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-063"
        },
        {
            "scene": "小红从平行四边形一个顶点向对边画垂线。老师告诉这条线段叫高。",
            "question": "平行四边形的高有几条？(无数条填1,只有一条填3)",
            "formula": "高 → ? (1无数/3一条)",
            "answer": 1,
            "choices": [
                1,
                3,
                4
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "height": true
                }
            },
            "knowledge": "平行四边形和梯形的高",
            "difficulty": 2,
            "hint": "平行四边形有无数条高",
            "variants": [
                {
                    "question": "梯形的高有几条(1无数3一条)？",
                    "formula": "梯形高=?",
                    "answer": 1,
                    "hint": "梯形也有无数条高"
                },
                {
                    "question": "画高要用什么工具(1三角尺3圆规)？",
                    "formula": "画高用?",
                    "answer": 1,
                    "hint": "用三角尺画垂线"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求平行四边形的高有几条",
                        "求平行四边形的面积",
                        "求高的长度",
                        "求底有几条"
                    ],
                    "answer": "求平行四边形的高有几条",
                    "explain": "题目问从顶点向对边画垂线得到的平行四边形的高有多少条"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "从一边上任一点都可作高，有无数条",
                        "高只有1条",
                        "高只有2条",
                        "高只有4条"
                    ],
                    "answer": "从一边上任一点都可作高，有无数条",
                    "explain": "平行四边形的高是从一条边上的点向对边作的垂线段"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "高有无数条，填1",
                        "高只有1条，填3",
                        "高有2条",
                        "高有4条"
                    ],
                    "answer": "高有无数条，填1",
                    "explain": "平行四边形对边间的距离处处相等，可以作无数条高，填1；只有一条填3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：平行四边形从一条边向对边画一条垂线段，对边之间还能画无数条",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "高的定义：从平行四边形一条边上的一点向对边引垂线，这点和垂足之间的线段叫高",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形的高有无数条，都在两条平行对边之间；梯形的高也有无数条",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-064"
        },
        {
            "scene": "小亮连接四边形的一条对角线，把它分成了两个三角形。每个三角形内角和是180度。",
            "question": "四边形内角和等于多少度？",
            "formula": "180×2=?",
            "answer": 360,
            "choices": [
                360,
                180,
                90,
                540
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "quadrilateral",
                "params": {
                    "angleSum": 360
                }
            },
            "knowledge": "四边形内角和",
            "difficulty": 2,
            "hint": "四边形内角和360°",
            "variants": [
                {
                    "question": "三角形内角和多少度？",
                    "formula": "三角形内角和=?",
                    "answer": 180,
                    "hint": "三角形内角和180°"
                },
                {
                    "question": "五边形内角和多少度？",
                    "formula": "五边形内角和=?",
                    "answer": 540,
                    "hint": "540°"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求四边形的内角和",
                        "求三角形的内角和",
                        "求一条对角线的长度",
                        "求四边形的周长"
                    ],
                    "answer": "求四边形的内角和",
                    "explain": "题目问四边形内角和等于多少度"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一条对角线把四边形分成2个三角形",
                        "分成3个三角形",
                        "分成1个三角形",
                        "分不出三角形"
                    ],
                    "answer": "一条对角线把四边形分成2个三角形",
                    "explain": "连接四边形的一条对角线，把它分成2个三角形"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "内角和=180°×2=360°",
                        "180°×3=540°",
                        "180°×1=180°",
                        "180°×4=720°"
                    ],
                    "answer": "内角和=180°×2=360°",
                    "explain": "每个三角形内角和180°，2个三角形就是180×2=360°"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：四边形用一条对角线分成2个三角形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "分割求内角和：四边形内角和=180°×(4-2)=360°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "n边形内角和=180°×(n-2)：三角形180°，四边形360°，五边形540°",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-065"
        },
        {
            "scene": "小刚把一个五边形从同一个顶点连对角线，分成了3个三角形。",
            "question": "五边形内角和等于多少度？",
            "formula": "180×3=?",
            "answer": 540,
            "choices": [
                540,
                360,
                720,
                180
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "regularPolygon",
                "params": {
                    "sides": 5,
                    "radius": 65,
                    "color": "#00A896"
                }
            },
            "knowledge": "四边形内角和",
            "difficulty": 2,
            "hint": "180°×3=540°",
            "variants": [
                {
                    "question": "三角形内角和多少度？",
                    "formula": "三角形内角和=?",
                    "answer": 180,
                    "hint": "三角形内角和180°"
                },
                {
                    "question": "五边形内角和多少度？",
                    "formula": "五边形内角和=?",
                    "answer": 540,
                    "hint": "540°"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求五边形的内角和",
                        "求四边形的内角和",
                        "求三角形的内角和",
                        "求对角线的条数"
                    ],
                    "answer": "求五边形的内角和",
                    "explain": "题目问五边形内角和等于多少度"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "从同一顶点连对角线分成3个三角形",
                        "分成2个三角形",
                        "分成4个三角形",
                        "分不出三角形"
                    ],
                    "answer": "从同一顶点连对角线分成3个三角形",
                    "explain": "五边形从同一个顶点连对角线，可以分成3个三角形"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "内角和=180°×3=540°",
                        "180°×2=360°",
                        "180°×4=720°",
                        "180°×5=900°"
                    ],
                    "answer": "内角和=180°×3=540°",
                    "explain": "每个三角形内角和180°，3个三角形就是180×3=540°"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图：五边形从同一个顶点连出对角线，分成3个三角形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "分割求内角和：五边形内角和=180°×(5-2)=540°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "n边形内角和=180°×(n-2)，分成的三角形个数等于边数减2",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-066"
        },
        {
            "scene": "体育老师有117个跳绳，平均分给16个班。每班分几个？",
            "question": "每班分多少个跳绳？",
            "formula": "117 ÷ 16 = ?",
            "answer": 7,
            "choices": [
                7,
                60,
                40,
                8
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 4,
                "cols": 16,
                "color": "#00A896"
            },
            "knowledge": "口算除法（整十数除）",
            "difficulty": 2,
            "hint": "117÷16=7余5",
            "variants": [
                {
                    "question": "150÷30=?",
                    "formula": "150÷30=?",
                    "answer": 5,
                    "hint": "15÷3=5"
                },
                {
                    "question": "240÷40=?",
                    "formula": "240÷40=?",
                    "answer": 6,
                    "hint": "24÷4=6"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每班分到多少个跳绳",
                        "操场上一共有多少跳绳",
                        "有几个班在领跳绳",
                        "每个班剩下多少"
                    ],
                    "answer": "每班分到多少个跳绳",
                    "explain": "体育老师把117个跳绳平均分给16个班，问每班分几个，就是求每一份的数量"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "117个跳绳平均分给16个班",
                        "16个跳绳分给117个班",
                        "每班要分到117个",
                        "只知道有16个班"
                    ],
                    "answer": "117个跳绳平均分给16个班",
                    "explain": "总数是117个跳绳，平均分成16份，也就是分给16个班"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：117÷16，商7余5",
                        "加法：117+16",
                        "减法：117−16",
                        "乘法：16×7"
                    ],
                    "answer": "除法：117÷16，商7余5",
                    "explain": "117÷16：16×7=112，余数为117−112=5，所以商7余5，每班分7个，还剩5个"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里7个班各占1份，每份16个跳绳，7份是112个，图上看还剩5个跳绳",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "117÷16=7余5：16×7=112，总数117减去112余5，每班分到7个",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平均分求每份的数量用除法：总数÷份数=每份数，余数要小于除数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-067"
        },
        {
            "scene": "体育老师有68个跳绳，平均分给19个班。每班分几个？",
            "question": "每班分多少个跳绳？",
            "formula": "68 ÷ 19 = ?",
            "answer": 3,
            "choices": [
                3,
                60,
                40,
                8
            ],
            "visualType": "areaModel",
            "visualData": {
                "rows": 4,
                "cols": 19,
                "color": "#00A896"
            },
            "knowledge": "口算除法（整十数除）",
            "difficulty": 2,
            "hint": "68÷19=3余11",
            "variants": [
                {
                    "question": "150÷30=?",
                    "formula": "150÷30=?",
                    "answer": 5,
                    "hint": "15÷3=5"
                },
                {
                    "question": "240÷40=?",
                    "formula": "240÷40=?",
                    "answer": 6,
                    "hint": "24÷4=6"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每班分到多少个跳绳",
                        "一共有多少个跳绳",
                        "有几个班分跳绳",
                        "每班剩下几个"
                    ],
                    "answer": "每班分到多少个跳绳",
                    "explain": "体育老师把68个跳绳平均分给19个班，问每班分几个"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "68个跳绳平均分给19个班",
                        "19个跳绳分给68个班",
                        "每班都要68个",
                        "只知道19个班"
                    ],
                    "answer": "68个跳绳平均分给19个班",
                    "explain": "总数是68个跳绳，平均分成19份"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：68÷19，商3余11",
                        "乘法：19×3",
                        "加法：68+19",
                        "减法：68−19"
                    ],
                    "answer": "除法：68÷19，商3余11",
                    "explain": "19×3=57，余数为68−57=11，商3余11，每班3个，还剩11个"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中3个班各占1份，每份19个跳绳，3份是57个，还剩11个跳绳",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "68÷19=3余11：19×3=57，余数为68−57=11",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平均分求每份用除法，商是每份数，余数必须小于除数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-068"
        },
        {
            "scene": "学校有95本故事书，每班分26本。能分给几个班？",
            "question": "能分给几个班？",
            "formula": "95 ÷ 26 = ? (个)",
            "answer": 3,
            "choices": [
                3,
                4,
                2,
                26
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 95,
                "parts": [
                    {
                        "label": "3个班",
                        "val": 78,
                        "color": "#00A896"
                    },
                    {
                        "label": "余",
                        "val": 17,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "笔算除法（除数是整十数）",
            "difficulty": 2,
            "hint": "95÷26=3余17",
            "variants": [
                {
                    "question": "85÷20=?余?",
                    "formula": "85÷20=?",
                    "answer": 4,
                    "hint": "85÷20=4余5"
                },
                {
                    "question": "76÷26=?余?",
                    "formula": "76÷26=?",
                    "answer": 2,
                    "hint": "76÷26=2余24"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "能分给几个班",
                        "每班分到几本",
                        "一共有多少本书",
                        "剩下多少本"
                    ],
                    "answer": "能分给几个班",
                    "explain": "学校有95本故事书，每班分26本，问能分给几个班"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "95本书，每班分26本",
                        "26本书分给95班",
                        "每班要95本",
                        "只有26本书"
                    ],
                    "answer": "95本书，每班分26本",
                    "explain": "总数是95本，每一个班拿26本，求能分出几份"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：95÷26，商3余17",
                        "乘法：26×3",
                        "减法：95−26",
                        "加法：95+26"
                    ],
                    "answer": "除法：95÷26，商3余17",
                    "explain": "26×3=78，余数为95−78=17，商3余17，能分给3个班，还剩17本"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中3个班各占1份，每份26本，3份是78本，还剩17本书",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "95÷26=3余17：26×3=78，余数为95−78=17，能分给3个班",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求能分出几份用除法：总数÷每份数=份数，余数比每份少时不够再分一班",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-069"
        },
        {
            "scene": "学校有103本故事书，每班分30本。能分给几个班？",
            "question": "能分给几个班？",
            "formula": "103 ÷ 30 = ? (个)",
            "answer": 3,
            "choices": [
                3,
                4,
                2,
                30
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 103,
                "parts": [
                    {
                        "label": "3个班",
                        "val": 90,
                        "color": "#00A896"
                    },
                    {
                        "label": "余",
                        "val": 13,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "笔算除法（除数是整十数）",
            "difficulty": 2,
            "hint": "103÷30=3余13",
            "variants": [
                {
                    "question": "85÷20=?余?",
                    "formula": "85÷20=?",
                    "answer": 4,
                    "hint": "85÷20=4余5"
                },
                {
                    "question": "76÷30=?余?",
                    "formula": "76÷30=?",
                    "answer": 2,
                    "hint": "76÷30=2余16"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "能分给几个班",
                        "每班分到几本",
                        "一共有多少本书",
                        "剩下多少本"
                    ],
                    "answer": "能分给几个班",
                    "explain": "学校有103本故事书，每班分30本，问能分给几个班"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "103本书，每班分30本",
                        "30本书分给103班",
                        "每班要103本",
                        "只有30本书"
                    ],
                    "answer": "103本书，每班分30本",
                    "explain": "总数是103本，每一个班拿30本，求能分出几份"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：103÷30，商3余13",
                        "乘法：30×3",
                        "减法：103−30",
                        "加法：103+30"
                    ],
                    "answer": "除法：103÷30，商3余13",
                    "explain": "30×3=90，余数为103−90=13，商3余13，能分给3个班，还剩13本"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中3个班各占1份，每份30本，3份是90本，还剩13本书",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "103÷30=3余13：30×3=90，余数为103−90=13",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求能分出几份用除法：总数÷每份数=份数，余数小于每份数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-070"
        },
        {
            "scene": "小红做除法109÷19，她把19看成20来试商。",
            "question": "109÷19等于多少？",
            "formula": "109 ÷ 19 = ?",
            "answer": 5,
            "choices": [
                4,
                3,
                5,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 109,
                "parts": [
                    {
                        "label": "4组",
                        "val": 109,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "四舍法试商",
            "difficulty": 3,
            "hint": "把19看成20试商5",
            "variants": [
                {
                    "question": "96÷32=?",
                    "formula": "96÷32=?",
                    "answer": 3,
                    "hint": "32看成30试商3"
                },
                {
                    "question": "68÷22=?",
                    "formula": "68÷22=?",
                    "answer": 3,
                    "hint": "22看成20试商3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "109÷19的商",
                        "被除数是谁",
                        "除数是多少",
                        "被除数里的因数"
                    ],
                    "answer": "109÷19的商",
                    "explain": "小红算109÷19，问这个除法的商是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "被除数109，除数19，把19看成20试商",
                        "被除数19，除数109",
                        "把109看成100",
                        "把除数看成整百"
                    ],
                    "answer": "被除数109，除数19，把19看成20试商",
                    "explain": "被除数是109，除数是19，试商时把19看成20来估计商的大小"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：用20试商5，19×5=95，余14",
                        "加法：19+5",
                        "减法：109−19",
                        "乘法：109×19"
                    ],
                    "answer": "除法：用20试商5，19×5=95，余14",
                    "explain": "把19看成20，20×5=100不超过109，估商5；再验算19×5=95，余数为109−95=14"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里5份，每份19，5份是95，图上看还剩14",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "109÷19=5余14：试商时把19看成20估商5，19×5=95，余数为109−95=14",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "除数不是整十数时，先看作较近的整十数估商，再用原除数验算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-071"
        },
        {
            "scene": "小红做除法117÷22，她把22看成20来试商。",
            "question": "117÷22等于多少？",
            "formula": "117 ÷ 22 = ?",
            "answer": 5,
            "choices": [
                4,
                3,
                5,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 117,
                "parts": [
                    {
                        "label": "4组",
                        "val": 117,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "四舍法试商",
            "difficulty": 3,
            "hint": "把22看成20试商5",
            "variants": [
                {
                    "question": "96÷32=?",
                    "formula": "96÷32=?",
                    "answer": 3,
                    "hint": "32看成30试商3"
                },
                {
                    "question": "68÷22=?",
                    "formula": "68÷22=?",
                    "answer": 3,
                    "hint": "22看成20试商3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "117÷22的商",
                        "被除数是谁",
                        "除数是多少",
                        "商是几位数"
                    ],
                    "answer": "117÷22的商",
                    "explain": "小红算117÷22，问这个除法的商是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "被除数117，除数22，把22看成20试商",
                        "被除数22，除数117",
                        "把117看成100",
                        "把除数看成整百"
                    ],
                    "answer": "被除数117，除数22，把22看成20试商",
                    "explain": "被除数是117，除数是22，试商时把22看成20来估计商的大小"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：用20试商5，22×5=110，余7",
                        "加法：22+5",
                        "减法：117−22",
                        "乘法：117×22"
                    ],
                    "answer": "除法：用20试商5，22×5=110，余7",
                    "explain": "把22看成20，20×5=100不超过117，估商5；再验算22×5=110，余数为117−110=7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里5份，每份22，5份是110，还剩7",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "117÷22=5余7：把22看成20估商5，22×5=110，余数为117−110=7",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "除数个位小于5时往小看成整十数估商，再用原除数验算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-072"
        },
        {
            "scene": "小亮做除法171÷26，他把26看成30来试商。",
            "question": "171÷26等于多少？(填商)",
            "formula": "171 ÷ 26 = ? (商)",
            "answer": 7,
            "choices": [
                7,
                6,
                8,
                5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 171,
                "parts": [
                    {
                        "label": "6组坐156人",
                        "val": 156,
                        "color": "#00A896"
                    },
                    {
                        "label": "余15人",
                        "val": 15,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "五入法试商",
            "difficulty": 3,
            "hint": "26看成30试商5，调大到6，进一得7",
            "variants": [
                {
                    "question": "156÷26=?",
                    "formula": "156÷26=?",
                    "answer": 6,
                    "hint": "26看成30试商"
                },
                {
                    "question": "192÷32=?",
                    "formula": "192÷32=?",
                    "answer": 6,
                    "hint": "32看成30试商"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "171÷26的商是多少",
                        "被除数是谁",
                        "除数是多少",
                        "余数是多少"
                    ],
                    "answer": "171÷26的商是多少",
                    "explain": "小亮算171÷26，问这个除法的商是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "被除数171，除数26，把26看成30试商",
                        "被除数26，除数171",
                        "把171看成170",
                        "把除数看成整百"
                    ],
                    "answer": "被除数171，除数26，把26看成30试商",
                    "explain": "被除数是171，除数是26，试商时把26看成30来估计商的大小"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：26×6=156，余15，进一得7",
                        "乘法：26×7",
                        "减法：171−26",
                        "加法：171+26"
                    ],
                    "answer": "除法：26×6=156，余15，进一得7",
                    "explain": "把26看成30估商5偏小，调大为6：26×6=156，余数为171−156=15，余下的15还要再装满1组，进一得7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中6组，每组26，6组是156，还剩15人",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "171÷26=6余15：26×6=156，余数为171−156=15，余下还要1组，进一得7",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "当题目要求每份都装满不能剩下时，商有余数要进一（向上取整）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-073"
        },
        {
            "scene": "小亮做除法189÷30，试商6后还余9。",
            "question": "189÷30等于多少？(填商)",
            "formula": "189 ÷ 30 = ? (商)",
            "answer": 7,
            "choices": [
                7,
                6,
                8,
                5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 189,
                "parts": [
                    {
                        "label": "6组坐180人",
                        "val": 180,
                        "color": "#00A896"
                    },
                    {
                        "label": "余9人",
                        "val": 9,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "五入法试商",
            "difficulty": 3,
            "hint": "189÷30=6余9，进一得7",
            "variants": [
                {
                    "question": "156÷26=?",
                    "formula": "156÷26=?",
                    "answer": 6,
                    "hint": "26看成30试商"
                },
                {
                    "question": "192÷32=?",
                    "formula": "192÷32=?",
                    "answer": 6,
                    "hint": "32看成30试商"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "189÷30的商是多少",
                        "被除数是谁",
                        "除数是多少",
                        "余数是多少"
                    ],
                    "answer": "189÷30的商是多少",
                    "explain": "小亮算189÷30，试商6后还余9，问这个除法的商是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "被除数189，除数30，试商6后还余9",
                        "被除数30，除数189",
                        "被除数能整除",
                        "试商就是商"
                    ],
                    "answer": "被除数189，除数30，试商6后还余9",
                    "explain": "被除数是189，除数是30，试商6后还有余数9"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：189÷30=6余9，进一得7",
                        "乘法：30×6",
                        "减法：189−30",
                        "加法：189+30"
                    ],
                    "answer": "除法：189÷30=6余9，进一得7",
                    "explain": "30×6=180，余数为189−180=9，余下的9还要1组，进一得7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中6组，每组30，6组是180，还剩9人",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "189÷30=6余9：30×6=180，余数为189−180=9，进一得7",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "除到个位有余数且不能剩下时，商会取整数后进一，保证都装得下",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-074"
        },
        {
            "scene": "统计图上1格表示5人。小红所在兴趣小组有21人，需要画几格？",
            "question": "21人需要画几格？",
            "formula": "21 ÷ 5 = ? (格)",
            "answer": 5,
            "choices": [
                3,
                21,
                5,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 21,
                "parts": [
                    {
                        "label": "格1",
                        "val": 5,
                        "color": "#00A896"
                    },
                    {
                        "label": "格2",
                        "val": 5,
                        "color": "#F5B800"
                    },
                    {
                        "label": "格3",
                        "val": 5,
                        "color": "#FB923C"
                    },
                    {
                        "label": "格4",
                        "val": 5,
                        "color": "#7C5CFC"
                    },
                    {
                        "label": "余1人",
                        "val": 1,
                        "color": "#EF476F"
                    }
                ]
            },
            "knowledge": "条形统计图",
            "difficulty": 2,
            "hint": "1格5人，21÷5=4格余1人，需画5格",
            "variants": [
                {
                    "question": "20人每格5人几格？",
                    "formula": "20÷5=?",
                    "answer": 4,
                    "hint": "20÷5"
                },
                {
                    "question": "25人每格5人几格？",
                    "formula": "25÷5=?",
                    "answer": 5,
                    "hint": "25÷5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "21人需要画几格",
                        "1格表示几人",
                        "一共有几人",
                        "已经画了几格"
                    ],
                    "answer": "21人需要画几格",
                    "explain": "统计图1格表示5人，兴趣小组21人，问需要画几格"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1格表示5人，一共21人",
                        "1格表示1人，一共21人",
                        "1格表示5人，一共5人",
                        "1格表示21人"
                    ],
                    "answer": "1格表示5人，一共21人",
                    "explain": "每1格表示5人，小组一共有21人"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：21÷5=4余1，需画5格",
                        "乘法：5×4",
                        "减法：21−5",
                        "加法：21+5"
                    ],
                    "answer": "除法：21÷5=4余1，需画5格",
                    "explain": "21÷5：5×4=20，余1，余下的1人也要画1格，共5格"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中4格满格，每格5人，四格是20人，还剩1人再画1格",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "21÷5=4余1：5×4=20，余1，余下的1人也要占1格，共5格",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "有余数时不能丢掉，要向上取整，格数=商+1",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-075"
        },
        {
            "scene": "统计图上1格表示6人。小红所在兴趣小组有12人，需要画几格？",
            "question": "12人需要画几格？",
            "formula": "12 ÷ 6 = ? (格)",
            "answer": 2,
            "choices": [
                3,
                12,
                6,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 12,
                "parts": [
                    {
                        "label": "格1",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "格2",
                        "val": 6,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "条形统计图",
            "difficulty": 2,
            "hint": "1格6人，12÷6=2格",
            "variants": [
                {
                    "question": "20人每格6人几格？",
                    "formula": "20÷6=?",
                    "answer": 4,
                    "hint": "20÷6"
                },
                {
                    "question": "26人每格6人几格？",
                    "formula": "26÷6=?",
                    "answer": 5,
                    "hint": "26÷6=4格余2人，需画5格"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "12人需要画几格",
                        "1格表示几人",
                        "一共有几人",
                        "已经画了几格"
                    ],
                    "answer": "12人需要画几格",
                    "explain": "统计图1格表示6人，兴趣小组12人，问需要画几格"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "1格表示6人，一共12人",
                        "1格表示1人，一共12人",
                        "1格表示6人，一共6人",
                        "1格表示12人"
                    ],
                    "answer": "1格表示6人，一共12人",
                    "explain": "每1格表示6人，小组一共有12人"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "除法：12÷6=2",
                        "乘法：6×2",
                        "减法：12−6",
                        "加法：12+6"
                    ],
                    "answer": "除法：12÷6=2",
                    "explain": "12÷6=2，正好整除，画2格即可"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中2格满格，每格6人，两格共表示12人",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "12÷6=2：每格6人，12人正好分成2格",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "整除时格数=总数÷每格人数，一格能表示多个单位",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ],
            "id": "4A-PROB-076"
        },
        {
            "id": "4A-BM-01",
            "scene": "学校买来45本故事书，科技书比故事书多12本。科技书有多少本？",
            "question": "科技书有多少本？",
            "formula": "45 + 12 = ?",
            "answer": 57,
            "choices": [
                57,
                47,
                67,
                33
            ],
            "visualType": "barModelTranslate",
            "visualData": {
                "total": 57,
                "parts": [
                    {
                        "label": "故事书",
                        "val": 45,
                        "color": "#00A896"
                    },
                    {
                        "label": "多12本",
                        "val": 12,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "Bar Model翻译行·比多少",
            "difficulty": 1,
            "hint": "科技书的条形 = 故事书条形 + 多出来的部分",
            "rmeChoices": [
                {
                    "label": "画条形图",
                    "desc": "画条形表示数量关系",
                    "correct": true
                },
                {
                    "label": "列算式",
                    "desc": "45+12=57",
                    "correct": true
                },
                {
                    "label": "画圆圈",
                    "desc": "画45个圈加12个圈",
                    "correct": false
                }
            ],
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "条形图里哪一段表示科技书比故事书多的本数？",
                    "keywords": [
                        "第二段",
                        "多12",
                        "右边",
                        "后面",
                        "突出的部分"
                    ]
                ,
                    "options": [{"text":"右边多出来的那段（表示多12本）","correct":true},{"text":"第一段（故事书45本）","correct":false},{"text":"整条（科技书57本）","correct":false}]
                },
                {
                    "type": "reverse",
                    "q": "如果科技书有57本，故事书有45本，多几本？",
                    "keywords": [
                        "减法",
                        "12",
                        "57-45",
                        "差",
                        "少"
                    ]
                ,
                    "options": [{"text":"12本","correct":true},{"text":"57本","correct":false},{"text":"45本","correct":false}]
                }
            ],
            "barTranslateLine": {
                "items": [
                    "故事书=45",
                    "科技书=45+12",
                    "总共=57"
                ]
            },
            "variants": [],
            "neriageErrors": [
                {
                    "cardIndex": 0,
                    "errorMsg": "常见错误",
                    "correctCardIndex": 1,
                    "isKey": false
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求科技书有多少本",
                        "求故事书有多少本",
                        "求两种书一共多少本",
                        "求科技书多出的本数"
                    ],
                    "answer": "求科技书有多少本",
                    "explain": "题目问科技书有多少本，已知故事书45本，科技书比故事书多12本"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "故事书45本，科技书多12本",
                        "科技书45本，故事书多12本",
                        "两种书一样多",
                        "两种书一共57本"
                    ],
                    "answer": "故事书45本，科技书多12本",
                    "explain": "关键信息：故事书=45本，科技书=故事书+12本"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "科技书=45+12=57本",
                        "45-12=33本",
                        "45×12=540本",
                        "45÷12"
                    ],
                    "answer": "科技书=45+12=57本",
                    "explain": "求比一个数多几的数用加法：45+12=57本"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：故事书一段45，科技书条形比故事书多出一段12，总长57",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "比多少问题：科技书=故事书+多的部分=45+12=57",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求比一个数多几的数用加法，求比一个数少几的数用减法，先分清谁多谁少",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "id": "4A-BM-02",
            "scene": "水果店上午卖出38kg苹果，下午比上午多卖15kg。下午卖出多少kg？",
            "question": "下午卖出多少kg苹果？",
            "formula": "38 + 15 = ?",
            "answer": 53,
            "choices": [
                53,
                43,
                63,
                23
            ],
            "visualType": "barModelTranslate",
            "visualData": {
                "total": 53,
                "parts": [
                    {
                        "label": "上午",
                        "val": 38,
                        "color": "#00A896"
                    },
                    {
                        "label": "多15kg",
                        "val": 15,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "Bar Model翻译行·比多少",
            "difficulty": 1,
            "hint": "下午的条形 = 上午条形 + 多卖的部分",
            "rmeChoices": [
                {
                    "label": "画条形图",
                    "desc": "画两条条形对比",
                    "correct": true
                },
                {
                    "label": "列算式",
                    "desc": "38+15=53",
                    "correct": true
                },
                {
                    "label": "画线段",
                    "desc": "画线段表示数量",
                    "correct": false
                }
            ],
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "条形图中多出来的那段表示什么？",
                    "keywords": [
                        "下午多卖",
                        "多15",
                        "第二段",
                        "突出的部分",
                        "比上午多的部分"
                    ]
                ,
                    "options": [{"text":"下午比上午多卖的15kg","correct":true},{"text":"上午卖出的38kg","correct":false},{"text":"下午总共卖出的53kg","correct":false}]
                },
                {
                    "type": "compare",
                    "q": "如果下午多卖20kg而不是15kg，下午卖出多少？",
                    "keywords": [
                        "58",
                        "38+20",
                        "更多",
                        "变长",
                        "增加"
                    ]
                ,
                    "options": [{"text":"58kg（38+20）","correct":true},{"text":"53kg（38+15）","correct":false},{"text":"20kg","correct":false}]
                }
            ],
            "barTranslateLine": {
                "items": [
                    "上午=38",
                    "下午=38+15",
                    "总共=53"
                ]
            },
            "variants": [],
            "neriageErrors": [
                {
                    "cardIndex": 0,
                    "errorMsg": "常见错误",
                    "correctCardIndex": 1,
                    "isKey": false
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求下午卖出多少kg苹果",
                        "求上午卖出多少kg",
                        "求上午下午一共卖出多少kg",
                        "求下午多卖多少kg"
                    ],
                    "answer": "求下午卖出多少kg苹果",
                    "explain": "题目问下午卖出多少kg苹果，已知上午38kg，下午比上午多15kg"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "上午38kg，下午多15kg",
                        "下午38kg，上午多15kg",
                        "上午和下午一样多",
                        "上午下午一共53kg"
                    ],
                    "answer": "上午38kg，下午多15kg",
                    "explain": "关键信息：上午=38kg，下午=上午+15kg"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "下午=38+15=53kg",
                        "38-15=23kg",
                        "38×15=570kg",
                        "38÷15"
                    ],
                    "answer": "下午=38+15=53kg",
                    "explain": "求比一个数多几的数用加法：38+15=53kg"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：上午一段38，下午条形比上午多出一段15，总长53",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "比多少问题：下午=上午+多的部分=38+15=53",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "比多少应用题先确定谁多谁少，求多的用加法、求少的用减法",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "id": "4A-BM-03",
            "scene": "一年级有135人，二年级比一年级多28人。两个年级一共有多少人？",
            "question": "两个年级一共有多少人？",
            "formula": "135 + (135+28) = ?",
            "answer": 298,
            "choices": [
                298,
                270,
                326,
                107
            ],
            "visualType": "barModelTranslate",
            "visualData": {
                "total": 298,
                "parts": [
                    {
                        "label": "一年级",
                        "val": 135,
                        "color": "#00A896"
                    },
                    {
                        "label": "二年级",
                        "val": 163,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "Bar Model翻译行·两步应用",
            "difficulty": 2,
            "hint": "先求二年级人数，再求总人数",
            "rmeChoices": [
                {
                    "label": "画条形图",
                    "desc": "画条形表示两个年级人数",
                    "correct": true
                },
                {
                    "label": "分步算式",
                    "desc": "先算二年级，再算总数",
                    "correct": true
                },
                {
                    "label": "一步算式",
                    "desc": "135+28=163，然后135+163",
                    "correct": false
                }
            ],
            "russianQuestions": [
                {
                    "type": "quantity",
                    "q": "两条条形分别代表什么？总条形是什么？",
                    "keywords": [
                        "一年级",
                        "二年级",
                        "两段",
                        "总条形",
                        "两部分"
                    ]
                ,
                    "options": [{"text":"一年级135人 + 二年级多28人，总条形是两个年级一共298人","correct":true},{"text":"一年级135人 + 二年级135人","correct":false},{"text":"总条形就是二年级的人数","correct":false}]
                },
                {
                    "type": "reverse",
                    "q": "如果两个年级共298人，一年级135人，二年级多少人？",
                    "keywords": [
                        "减法",
                        "163",
                        "298-135",
                        "差",
                        "少"
                    ]
                ,
                    "options": [{"text":"163人（298-135）","correct":true},{"text":"135人","correct":false},{"text":"298人","correct":false}]
                }
            ],
            "barTranslateLine": {
                "items": [
                    "一年级=135",
                    "二年级=135+28=163",
                    "总共=135+163=298"
                ]
            },
            "variants": [],
            "neriageErrors": [
                {
                    "cardIndex": 0,
                    "errorMsg": "常见错误",
                    "correctCardIndex": 1,
                    "isKey": false
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求两个年级一共有多少人",
                        "求二年级有多少人",
                        "求一年级有多少人",
                        "求二年级比一年级多几人"
                    ],
                    "answer": "求两个年级一共有多少人",
                    "explain": "题目问两个年级一共有多少人，要先算出二年级人数再相加"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一年级135人，二年级多28人",
                        "一年级28人，二年级135人",
                        "两个年级都是135人",
                        "二年级比一年级少28人"
                    ],
                    "answer": "一年级135人，二年级多28人",
                    "explain": "关键信息：一年级=135人，二年级=一年级+28人"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "先求二年级=135+28=163，总数=135+163=298",
                        "只算135+28=163人",
                        "只算135+135=270人",
                        "135×2+28=298"
                    ],
                    "answer": "先求二年级=135+28=163，总数=135+163=298",
                    "explain": "两步计算：二年级135+28=163人，总人数135+163=298人"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形模型：一年级一段135，二年级一段163，两段合起来是总条形298",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "两步应用：先求二年级人数（比135多28），再求两个年级的总人数",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "两步应用题先解决中间问题（求另一个量），再解决最终问题（求和），逐步列式",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        }
    ],
    "knowledgeMap": [
        {
            "id": "4A-01",
            "name": "亿以内数的认识",
            "concept": "万级、个级，数位顺序表到千万位",
            "prerequisite": "三上·万以内数",
            "extends": "4A-02 读写",
            "visualStrategy": "数位表",
            "visualType": "barModel",
            "coreLiteracy": "数感",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "4A-02",
            "name": "亿以内数的读写",
            "concept": "从高位读起，每级末尾0不读，中间0只读一个",
            "prerequisite": "数位认识",
            "extends": "4A-03 大小比较",
            "visualStrategy": "数位表",
            "visualType": "numberLine",
            "coreLiteracy": "符号意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "4A-03",
            "name": "亿以内数的大小比较与改写",
            "concept": "位数多的大，位数相同比最高位；改写以万为单位",
            "prerequisite": "数位读写",
            "extends": "4A-04 近似数",
            "visualStrategy": "数位表",
            "visualType": "numberLine",
            "coreLiteracy": "数感",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-04",
            "name": "求近似数（四舍五入）",
            "concept": "看省略部分最高位，≥5进1，<5舍去",
            "prerequisite": "大小比较",
            "extends": "4B-16 小数近似数",
            "visualStrategy": "数轴跳跃",
            "visualType": "numberLine",
            "coreLiteracy": "数感",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "4A-05",
            "name": "数的产生与十进制计数法",
            "concept": "自然数、0、十进制，每相邻两个计数单位进率10",
            "prerequisite": "大数认识",
            "extends": "4A-06 亿以上数",
            "visualStrategy": "计数单位塔",
            "visualType": "barModel",
            "coreLiteracy": "数感",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-06",
            "name": "亿以上数的认识与读写",
            "concept": "扩展到亿级，读法和万以内一致",
            "prerequisite": "亿以内数",
            "extends": "5A-16 字母表示数",
            "visualStrategy": "数位表",
            "visualType": "numberLine",
            "coreLiteracy": "符号意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "4A-07",
            "name": "计算工具与计算器使用",
            "concept": "算盘、计算器，用计算器探索规律",
            "prerequisite": "大数读写",
            "extends": "5B-04 探索规律",
            "visualStrategy": "实物图",
            "visualType": "areaModel",
            "coreLiteracy": "应用意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-08",
            "name": "公顷的认识",
            "concept": "1公顷=10000m²，量土地面积",
            "prerequisite": "三下·面积单位",
            "extends": "4A-09 平方千米",
            "visualStrategy": "实物对比",
            "visualType": "geometry",
            "coreLiteracy": "量感",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "4A-09",
            "name": "平方千米的认识",
            "concept": "1km²=100公顷=1000000m²",
            "prerequisite": "公顷",
            "extends": "5B-11 体积单位",
            "visualStrategy": "实物对比",
            "visualType": "geometry",
            "coreLiteracy": "量感",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-10",
            "name": "线段、直线、射线",
            "concept": "线段2端点、直线0端点、射线1端点",
            "prerequisite": "二上·线段",
            "extends": "4A-11 角的度量",
            "visualStrategy": "几何对比图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 1,
            "isKeyTopic": true
        },
        {
            "id": "4A-11",
            "name": "角的度量单位与量角器使用",
            "concept": "1°的定义，量角器两圈刻度",
            "prerequisite": "三上·角的初步认识",
            "extends": "4A-12 角的分类",
            "visualStrategy": "量角器示意图",
            "visualType": "geometry",
            "coreLiteracy": "量感",
            "difficulty": 1,
            "isKeyTopic": true
        },
        {
            "id": "4A-12",
            "name": "角的分类",
            "concept": "锐角<90°<钝角<180°<优角<360°",
            "prerequisite": "量角器使用",
            "extends": "4A-13 画角",
            "visualStrategy": "几何对比图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-13",
            "name": "画指定度数的角",
            "concept": "用量角器画角——点对点、线对线、找刻度",
            "prerequisite": "角的分类",
            "extends": "4B-18 三角形分类",
            "visualStrategy": "步骤示意图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-14",
            "name": "三位数乘两位数笔算",
            "concept": "用两位数每位分别乘三位数，积相加",
            "prerequisite": "三下·两位数乘两位数",
            "extends": "4A-15 因数有0",
            "visualStrategy": "面积模型+竖式格子",
            "visualType": "areaModel",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "4A-15",
            "name": "因数中间或末尾有0的乘法",
            "concept": "末尾0先不算最后补，中间0乘得0",
            "prerequisite": "三位数乘两位数",
            "extends": "4A-16 积的变化规律",
            "visualStrategy": "竖式格子",
            "visualType": "areaModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-16",
            "name": "积的变化规律",
            "concept": "一个因数不变，另一个因数乘几，积也乘几",
            "prerequisite": "笔算乘法",
            "extends": "4A-28 商的变化规律",
            "visualStrategy": "表格+条形对比",
            "visualType": "barModel",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "4A-17",
            "name": "单价×数量=总价",
            "concept": "三种量，已知两个求第三个",
            "prerequisite": "乘法笔算",
            "extends": "4A-18 速度路程",
            "visualStrategy": "场景示意图",
            "visualType": "barModel",
            "coreLiteracy": "模型意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-18",
            "name": "速度×时间=路程",
            "concept": "三种量，已知两个求第三个",
            "prerequisite": "总价模型",
            "extends": "6B-16 正比例",
            "visualStrategy": "线段图",
            "visualType": "numberLine",
            "coreLiteracy": "模型意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-19",
            "name": "平行与垂直",
            "concept": "同一平面内，不相交=平行，相交成直角=垂直",
            "prerequisite": "直线和角",
            "extends": "4A-20 画垂线",
            "visualStrategy": "几何对比图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "4A-20",
            "name": "画垂线与平行线",
            "concept": "用三角尺和直尺画垂线、平行线",
            "prerequisite": "平行与垂直",
            "extends": "4A-22 高",
            "visualStrategy": "步骤示意图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-21",
            "name": "平行四边形和梯形的特征",
            "concept": "平行四边形对边平行且相等，梯形只有一组对边平行",
            "prerequisite": "平行与垂直",
            "extends": "4A-22 高",
            "visualStrategy": "几何分类图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "4A-22",
            "name": "平行四边形和梯形的高",
            "concept": "从一点向对边作垂线，垂足到该点的线段",
            "prerequisite": "画垂线",
            "extends": "5A-24 平行四边形面积",
            "visualStrategy": "几何标注图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-23",
            "name": "四边形内角和",
            "concept": "所有四边形内角和=360°",
            "prerequisite": "四边形特征",
            "extends": "4B-19 三角形内角和",
            "visualStrategy": "几何验证图",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-24",
            "name": "口算除法（整十数除整十/几百几十）",
            "concept": "80÷20=4，看作8个十÷2个十",
            "prerequisite": "三下·除数一位数除法",
            "extends": "4A-25 除数整十数",
            "visualStrategy": "面积模型",
            "visualType": "areaModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "4A-25",
            "name": "笔算除法（除数是整十数）",
            "concept": "从高位除起，先看前两位",
            "prerequisite": "口算除法",
            "extends": "4A-26 四舍法试商",
            "visualStrategy": "竖式格子",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "4A-26",
            "name": "笔算除法（除数接近整十数，四舍法试商）",
            "concept": "把除数看作接近的整十数试商",
            "prerequisite": "除数是整十数",
            "extends": "4A-27 五入法试商",
            "visualStrategy": "竖式格子",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "4A-27",
            "name": "笔算除法（五入法试商）",
            "concept": "余数≥除数时调大商",
            "prerequisite": "四舍法试商",
            "extends": "4A-28 商的变化规律",
            "visualStrategy": "竖式格子",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "4A-28",
            "name": "商的变化规律",
            "concept": "被除数除数同时乘一个数商不变",
            "prerequisite": "笔算除法",
            "extends": "5B-17 分数基本性质",
            "visualStrategy": "表格+条形对比",
            "visualType": "barModel",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "4A-29",
            "name": "条形统计图（1格表多个单位）",
            "concept": "1格可以表示1、2、5、10等单位",
            "prerequisite": "三下·复式统计表",
            "extends": "4B-28 复式条形统计图",
            "visualStrategy": "统计图",
            "visualType": "barModel",
            "coreLiteracy": "数据意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "4A-30",
            "name": "优化（沏茶问题、烙饼问题）",
            "concept": "合理安排时间、空间，找最优方案",
            "prerequisite": "生活常识",
            "extends": "6B-23 鸽巢问题",
            "visualStrategy": "流程图+时间轴",
            "visualType": "numberLine",
            "coreLiteracy": "应用意识",
            "difficulty": 3,
            "isKeyTopic": false
        }
    ]
};
