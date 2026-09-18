window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["7a"] = {
    "title": "七年级上册·有理数与代数初步",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
        {
            "id": "7A-01",
            "name": "正数与负数",
            "concept": "大于0的数是正数，小于0的数是负数，0既不是正数也不是负数",
            "prerequisite": "三年级·认识整数",
            "extends": "7A-02 数轴",
            "visualStrategy": "数轴双向延伸",
            "visualType": "numberLine",
            "coreLiteracy": "符号意识",
            "difficulty": 1,
            "isKeyTopic": true
        },
        {
            "id": "7A-02",
            "name": "数轴",
            "concept": "规定了原点、正方向、单位长度的直线",
            "prerequisite": "7A-01",
            "extends": "7A-03 相反数",
            "visualStrategy": "动态数轴",
            "visualType": "numberLine",
            "coreLiteracy": "数感",
            "difficulty": 1,
            "isKeyTopic": true
        },
        {
            "id": "7A-03",
            "name": "相反数与绝对值",
            "concept": "只有符号不同的两个数互为相反数；绝对值是数到原点的距离",
            "prerequisite": "7A-02",
            "extends": "7A-04 有理数加减",
            "visualStrategy": "数轴距离",
            "visualType": "numberLine",
            "coreLiteracy": "抽象能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-04",
            "name": "有理数的加减法",
            "concept": "同号相加取相同符号，异号相加取绝对值较大者的符号",
            "prerequisite": "7A-03",
            "extends": "7A-05 整式加减",
            "visualStrategy": "数轴跳跃",
            "visualType": "numberLine",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-05",
            "name": "整式的加减",
            "concept": "合并同类项：字母相同、指数相同的项才能合并",
            "prerequisite": "7A-04",
            "extends": "7A-06 一元一次方程",
            "visualStrategy": "代数积木",
            "visualType": "barModel",
            "coreLiteracy": "代数思维",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-06",
            "name": "一元一次方程",
            "concept": "只含一个未知数，未知数指数为1的方程",
            "prerequisite": "7A-05",
            "extends": "7A-07 不等式",
            "visualStrategy": "天平平衡",
            "visualType": "barModel",
            "coreLiteracy": "方程思想",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-07",
            "name": "不等式与不等式组",
            "concept": "用不等号表示大小关系的式子，解集可在数轴上表示",
            "prerequisite": "7A-06",
            "extends": "7A-08 平面直角坐标系",
            "visualStrategy": "数轴表示",
            "visualType": "numberLine",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "7A-08",
            "name": "平面直角坐标系",
            "concept": "用有序数对(x,y)确定平面内点的位置",
            "prerequisite": "7A-07",
            "extends": "7A-09 直线的平移与旋转",
            "visualStrategy": "坐标网格",
            "visualType": "geometry",
            "coreLiteracy": "数形结合",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-09",
            "name": "直线的平移与旋转",
            "concept": "直线平移不改变斜率，旋转改变角度",
            "prerequisite": "7A-08",
            "extends": "7B-01 相交线与平行线",
            "visualStrategy": "动态变换",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "7A-10",
            "name": "幂的运算",
            "concept": "同底数幂相乘：底数不变指数相加",
            "prerequisite": "四年级·乘法",
            "extends": "7A-11 整式乘法",
            "visualStrategy": "面积模型",
            "visualType": "areaModel",
            "coreLiteracy": "符号意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-11",
            "name": "整式乘法",
            "concept": "单项式乘多项式：用分配律逐项相乘",
            "prerequisite": "7A-10",
            "extends": "7A-12 因式分解",
            "visualStrategy": "分配律模型",
            "visualType": "areaModel",
            "coreLiteracy": "代数思维",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "7A-12",
            "name": "因式分解",
            "concept": "把多项式化为几个整式的积的形式",
            "prerequisite": "7A-11",
            "extends": "7B-03 分式",
            "visualStrategy": "面积还原",
            "visualType": "areaModel",
            "coreLiteracy": "分解思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "7A-13",
            "name": "数据的收集与整理",
            "concept": "了解数据收集的方法：全面调查与抽样调查",
            "prerequisite": "三年级·统计",
            "extends": "7A-14 统计图表",
            "visualStrategy": "调查表",
            "visualType": "barModel",
            "coreLiteracy": "数据意识",
            "difficulty": 1,
            "isKeyTopic": false
        },
        {
            "id": "7A-14",
            "name": "统计图表",
            "concept": "条形图、折线图、扇形图各有适用场景",
            "prerequisite": "7A-13",
            "extends": "7A-15 概率初步",
            "visualStrategy": "图表对比",
            "visualType": "barModel",
            "coreLiteracy": "数据分析",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "7A-15",
            "name": "概率初步",
            "concept": "事件发生的可能性大小用0到1之间的数表示",
            "prerequisite": "7A-14",
            "extends": "8A-01 二次根式",
            "visualStrategy": "转盘实验",
            "visualType": "areaModel",
            "coreLiteracy": "随机观念",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "7A-16",
            "name": "代数式与函数初步",
            "concept": "用字母表示数，理解变量与常量的区别",
            "prerequisite": "7A-15",
            "extends": "7A-17 函数概念",
            "visualStrategy": "表格与图象",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-17",
            "name": "函数概念",
            "concept": "一个自变量对应唯一因变量的映射关系",
            "prerequisite": "7A-16",
            "extends": "8A-02 一次函数",
            "visualStrategy": "坐标系图象",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "7A-18",
            "name": "统计图表初步",
            "concept": "用条形图、折线图、扇形图描述数据",
            "prerequisite": "7A-17",
            "extends": "7A-19 比例",
            "visualStrategy": "多图表对比",
            "visualType": "barModel",
            "coreLiteracy": "数据意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-19",
            "name": "比例与比例线段",
            "concept": "若a/b=c/d则ad=bc，比例的基本性质",
            "prerequisite": "6A-10 比和比例",
            "extends": "7B-01 相交线与平行线",
            "visualStrategy": "比例模型",
            "visualType": "barModel",
            "coreLiteracy": "模型思想",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-20",
            "name": "比例分配问题",
            "concept": "按一定比例分配总量，各部分成比例",
            "prerequisite": "6A-10",
            "extends": "7A-19 比例",
            "visualStrategy": "比例条形",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-21",
            "name": "方程的应用",
            "concept": "用一元一次方程解决实际问题，设未知数列方程",
            "prerequisite": "7A-06",
            "extends": "7A-05 整式加减",
            "visualStrategy": "方程建模",
            "visualType": "barModel",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "7A-22",
            "name": "几何初步认识",
            "concept": "点动成线，线动成面，面动成体",
            "prerequisite": "3A-01 认识图形",
            "extends": "7B-01 相交线与平行线",
            "visualStrategy": "动态形成",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 1,
            "isKeyTopic": false
        },
        {
            "id": "7A-23",
            "name": "角的度量与计算",
            "concept": "1度=60分，1分=60秒，角的和差计算",
            "prerequisite": "4A-02 角的度量",
            "extends": "7A-18 余角与补角",
            "visualStrategy": "角度测量",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7A-24",
            "name": "统计图表综合分析",
            "concept": "根据实际问题选择合适的统计图表",
            "prerequisite": "7A-14",
            "extends": "7A-15 概率初步",
            "visualStrategy": "图表选择",
            "visualType": "barModel",
            "coreLiteracy": "数据分析",
            "difficulty": 2,
            "isKeyTopic": false
        }
    ],
    "units": [
        {
            "name": "有理数",
            "level": "current",
            "children": [
                {
                    "name": "正数与负数",
                    "level": "done"
                },
                {
                    "name": "数轴",
                    "level": "current"
                },
                {
                    "name": "相反数与绝对值",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "有理数的加减法",
            "level": "locked",
            "children": [
                {
                    "name": "有理数加法",
                    "level": "locked"
                },
                {
                    "name": "有理数减法",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "整式的加减",
            "level": "locked",
            "children": [
                {
                    "name": "整式概念",
                    "level": "locked"
                },
                {
                    "name": "合并同类项",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "一元一次方程",
            "level": "locked",
            "children": [
                {
                    "name": "方程概念",
                    "level": "locked"
                },
                {
                    "name": "解方程",
                    "level": "locked"
                }
            ]
        }
    ],
    "problems": [
        {
            "scene": "气象站记录一天气温变化：早晨零下5摄氏度，中午上升8摄氏度，傍晚又下降3摄氏度。小明想算出傍晚的温度。",
            "question": "傍晚气温是多少摄氏度？",
            "formula": "-5 + 8 - 3 = ?",
            "answer": 0,
            "choices": [
                -2,
                0,
                2,
                -1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -5,
                "end": 3,
                "points": [
                    {
                        "pos": -5,
                        "label": "早晨",
                        "color": "#00A896"
                    },
                    {
                        "pos": 3,
                        "label": "变化",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -5,
                    3
                ]
            },
            "knowledge": "有理数加减法",
            "difficulty": 2,
            "hint": "先加后减，注意符号",
            "variants": [
                {
                    "question": "早晨-3度，中午上升6度，傍晚下降4度，傍晚温度？",
                    "formula": "-3+6-4=?",
                    "answer": -1,
                    "hint": "从左到右逐步计算"
                },
                {
                    "question": "气温从-8度上升10度再下降3度，结果？",
                    "formula": "-8+10-3=?",
                    "answer": -1,
                    "hint": "注意负数运算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "傍晚的气温",
                        "早晨的气温",
                        "上升了多少度",
                        "一共升了几次"
                    ],
                    "answer": "傍晚的气温",
                    "explain": "场景要算出傍晚的温度，也就是把早上升温、傍晚降温之后剩下的值"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "早晨-5度、上升8度、下降3度",
                        "只在中午看温度",
                        "气温没有变化",
                        "只有一个傍晚的数"
                    ],
                    "answer": "早晨-5度、上升8度、下降3度",
                    "explain": "从早晨零下5度出发，中午升8度到3度，傍晚再降3度"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "-5+8-3=0",
                        "-5+8+3",
                        "5+8-3",
                        "8-3+5"
                    ],
                    "answer": "-5+8-3=0",
                    "explain": "先加再减：-5+8=3，3-3=0，所以傍晚是0摄氏度"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从-5出发，向右移8到3，再向左移3回到0，终点就是傍晚的气温",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "升温就是加正数、降温就是减正数：-5+8=3，3-3=0",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "气温或方向的变化写成带符号的加减，按顺序求出每一步的结果，看清符号是关键",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校图书馆借阅统计：本周借阅童话书128本，科技书比童话书多45本，故事书比科技书少23本。老师想知道故事书借了多少本。",
            "question": "故事书借了多少本？",
            "formula": "128 + 45 - 23 = ?",
            "answer": 150,
            "choices": [
                150,
                148,
                152,
                145
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 150,
                "parts": [
                    {
                        "label": "童话",
                        "val": 128,
                        "color": "#00A896"
                    },
                    {
                        "label": "科技",
                        "val": 173,
                        "color": "#F5B800"
                    },
                    {
                        "label": "故事",
                        "val": 150,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "整式运算",
            "difficulty": 2,
            "hint": "科技书=128+45，故事书=科技书-23",
            "variants": [
                {
                    "question": "童话书150本，科技书比它少30本，故事书比科技书多20本，故事书多少本？",
                    "formula": "150-30+20=?",
                    "answer": 140,
                    "hint": "逐步计算"
                },
                {
                    "question": "童话书100本，科技书是它的2倍少20本，故事书是科技书的一半，故事书多少本？",
                    "formula": "(100*2-20)/2=?",
                    "answer": 90,
                    "hint": "分步计算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "故事书借了多少本",
                        "科技书借了多少本",
                        "童话书借了多少本",
                        "两类书相差几本"
                    ],
                    "answer": "故事书借了多少本",
                    "explain": "要算出故事书的本数，它要在科技书的基础上再减23本"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "童话128本、科技比童话多45、故事比科技少23",
                        "只给科技书的本数",
                        "三种数量相等",
                        "只有童话和科技的差"
                    ],
                    "answer": "童话128本、科技比童话多45、故事比科技少23",
                    "explain": "先由128和45求出科技书，再由科技书减去23求出故事书"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "(128+45)-23=150",
                        "128+45=173",
                        "128-45-23",
                        "128+45+23"
                    ],
                    "answer": "(128+45)-23=150",
                    "explain": "科技书=128+45=173本，故事书=173-23=150本"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "三本数的关系：童话128，科技比它多45为173，故事又少23为150",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "先算科技书128+45=173，再算故事书173-23=150",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "有多步关系的数量，先推出中间量，再一步步往下算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用绳子围一个长方形花圃，长12米宽8米。他想算出需要多长的绳子，还要算出花圃的面积。",
            "question": "花圃的周长是多少米？",
            "formula": "周长=(12+8)*2=40",
            "answer": 40,
            "choices": [
                40,
                96,
                80,
                192
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 12,
                    "width": 8
                }
            },
            "knowledge": "长方形周长与面积",
            "difficulty": 2,
            "hint": "周长=(长+宽)*2，面积=长*宽",
            "variants": [
                {
                    "question": "正方形花坛的周长是多少米？",
                    "formula": "周长=15*4",
                    "answer": 60,
                    "hint": "正方形周长=边长*4"
                },
                {
                    "question": "长方形长20米，宽是长的一半，它的周长是多少米？",
                    "formula": "宽=10, 周长=(20+10)*2",
                    "answer": 60,
                    "hint": "先求宽"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "花圃的周长和面积",
                        "只算绳子的颜色",
                        "只要花圃的面积",
                        "只要长和宽"
                    ],
                    "answer": "花圃的周长和面积",
                    "explain": "场景既要绳子绕一圈的长度（周长），也要花圃占地的面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "长12米、宽8米",
                        "长和宽都是8",
                        "只知道面积",
                        "周长已经给出"
                    ],
                    "answer": "长12米、宽8米",
                    "explain": "长12宽8，要求周长与面积两种量"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "周长=(12+8)×2=40",
                        "周长=12×8",
                        "周长=12+8",
                        "面积=(12+8)×2"
                    ],
                    "answer": "周长=(12+8)×2=40",
                    "explain": "周长=(12+8)×2=40米；面积=12×8=96平方米。本题求解的周长是40"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "长方形长12、宽8，绳子绕一周的长度就是两个长加两个宽",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "周长=(12+8)×2=40米，面积=12×8=96平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求围一圈的长度用周长公式，求占地的多少用面积公式，两者的单位也不同",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "某商场促销，一件衣服原价200元，先打八折再减30元。小红妈妈想算算实际应付多少元。",
            "question": "实际应付多少元？",
            "formula": "200*0.8-30 = ?",
            "answer": 130,
            "choices": [
                130,
                140,
                120,
                150
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 200,
                "points": [
                    {
                        "pos": 160,
                        "label": "八折",
                        "color": "#00A896"
                    },
                    {
                        "pos": 130,
                        "label": "减30",
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "百分数应用",
            "difficulty": 3,
            "hint": "先打折再减钱",
            "variants": [
                {
                    "question": "原价300元打七折再减50元，实际应付多少？",
                    "formula": "300*0.7-50=?",
                    "answer": 160,
                    "hint": "先算打折价"
                },
                {
                    "question": "原价150元打九折再减20元，实际应付多少？",
                    "formula": "150*0.9-20=?",
                    "answer": 115,
                    "hint": "逐步计算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "打完折再减30后的实际价格",
                        "衣服的原价",
                        "一共优惠多少元",
                        "打八折后的价格"
                    ],
                    "answer": "打完折再减30后的实际价格",
                    "explain": "要算最终实付，顺序是先打八折再减30元"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "原价200、八折即×0.8、再减30",
                        "只给原价200",
                        "八折就是直接减30",
                        "不用考虑打折"
                    ],
                    "answer": "原价200、八折即×0.8、再减30",
                    "explain": "八折表示付原价的80%，即200×0.8"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "200×0.8-30=130",
                        "200+0.8-30",
                        "200×0.8+30",
                        "200-30×0.8"
                    ],
                    "answer": "200×0.8-30=130",
                    "explain": "200×0.8=160，160-30=130元"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把原价200元当整体，先取它的八折部分，再往下减30元",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "200×0.8=160，160-30=130元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "折扣先乘以折扣率，再进行的加减要按先后顺序：先打折后减钱",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个数的3倍加5等于20，小明想求出这个数是多少。",
            "question": "这个数是多少？",
            "formula": "3x + 5 = 20, x = ?",
            "answer": 5,
            "choices": [
                5,
                4,
                6,
                3
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 20,
                "parts": [
                    {
                        "label": "3倍",
                        "val": 15,
                        "color": "#00A896"
                    },
                    {
                        "label": "加5",
                        "val": 5,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "解一元一次方程",
            "difficulty": 2,
            "hint": "先移项再除以系数",
            "variants": [
                {
                    "question": "一个数的2倍减3等于11，这个数是多少？",
                    "formula": "2x-3=11",
                    "answer": 7,
                    "hint": "先加3再除以2"
                },
                {
                    "question": "一个数的4倍加8等于32，这个数是多少？",
                    "formula": "4x+8=32",
                    "answer": 6,
                    "hint": "先减8再除以4"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "未知数x的值",
                        "3倍是多少",
                        "加5是多少",
                        "两边之和是多少"
                    ],
                    "answer": "未知数x的值",
                    "explain": "要解出3x+5=20中的x"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一个数的3倍加5等于20",
                        "3倍直接等于20",
                        "x等于3",
                        "20是加数"
                    ],
                    "answer": "一个数的3倍加5等于20",
                    "explain": "把未知数3倍后再加上5，结果正好等于20"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "3x=15，x=5",
                        "3x=20+5",
                        "x=20-3",
                        "3x-5=20"
                    ],
                    "answer": "3x=15，x=5",
                    "explain": "两边同时减5得3x=15，再除以3得x=5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "未知数的3倍再加上5的一整段等于20",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3x+5=20 → 3x=15 → x=5",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解一步方程先做移项把含x的放到一边，再把系数除过去",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "超市促销，苹果每千克8元，小明买了3千克，妈妈给了他50元。小明想知道找零多少元。",
            "question": "应该找零多少元？",
            "formula": "50 - 8*3 = ?",
            "answer": 26,
            "choices": [
                26,
                24,
                28,
                22
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 50,
                "parts": [
                    {
                        "label": "花费",
                        "val": 24,
                        "color": "#00A896"
                    },
                    {
                        "label": "找零",
                        "val": 26,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "有理数混合运算",
            "difficulty": 2,
            "hint": "先算乘法再算减法",
            "variants": [
                {
                    "question": "香蕉每千克5元，买4千克，给30元，找零？",
                    "formula": "30-5*4=?",
                    "answer": 10,
                    "hint": "先乘后减"
                },
                {
                    "question": "橙子每千克6元，买5千克，给40元，够吗？",
                    "formula": "6*5=30<40",
                    "answer": 1,
                    "hint": "比较大小"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "妈妈应该找回多少钱",
                        "苹果的总价",
                        "买了多少千克",
                        "苹果每千克几元"
                    ],
                    "answer": "妈妈应该找回多少钱",
                    "explain": "要算找零，用付的钱减去买苹果花的钱"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每千克8元、买3千克、给50元",
                        "只给了付的钱",
                        "单价就是总价",
                        "买3千克花了50元"
                    ],
                    "answer": "每千克8元、买3千克、给50元",
                    "explain": "先算3千克花费8×3=24元，再用50去减"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "50-8×3=26",
                        "50-8=42",
                        "8×3+50",
                        "50-24÷3"
                    ],
                    "answer": "50-8×3=26",
                    "explain": "花费=8×3=24元，找零=50-24=26元"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "50元分成买苹果的花费和找回的零钱两部分",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "8×3=24，50-24=26元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "找零=付的钱－总价，总价=单价×数量，先乘后减",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红在数轴上从原点出发，先向右移动5个单位，再向左移动3个单位，她想知道现在在哪里。",
            "question": "小红现在在数轴上的什么位置？",
            "formula": "0 + 5 - 3 = ?",
            "answer": 2,
            "choices": [
                2,
                -2,
                8,
                -8
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -5,
                "end": 5,
                "points": [
                    {
                        "pos": 0,
                        "label": "起点",
                        "color": "#00A896"
                    },
                    {
                        "pos": 5,
                        "label": "右移5",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 2,
                        "label": "终点",
                        "color": "#FB923C"
                    }
                ],
                "highlight": [
                    0,
                    2
                ]
            },
            "knowledge": "数轴上的点移动",
            "difficulty": 1,
            "hint": "向右为正，向左为负",
            "variants": [
                {
                    "question": "从0出发，向左4单位再向右7单位，终点？",
                    "formula": "0-4+7=?",
                    "answer": 3,
                    "hint": "左负右正"
                },
                {
                    "question": "从-2出发，向右5单位再向左3单位，终点？",
                    "formula": "-2+5-3=?",
                    "answer": 0,
                    "hint": "注意起点"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "小红现在所在的位置",
                        "一共走了多少步",
                        "向右移动了几格",
                        "起点的位置"
                    ],
                    "answer": "小红现在所在的位置",
                    "explain": "要算出先右移5再左移3后停在哪个数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "从0出发、右移5、左移3",
                        "从5出发",
                        "只移动了3步",
                        "一直往同一边走"
                    ],
                    "answer": "从0出发、右移5、左移3",
                    "explain": "原点为0起算，向右为正、向左为负"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "0+5-3=2",
                        "0-5+3",
                        "5-0-3",
                        "0+5+3"
                    ],
                    "answer": "0+5-3=2",
                    "explain": "0+5=5，5-3=2，所以最终停在2"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从0到5再到2的移动轨迹",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "向右加5、向左减3：0+5-3=2",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "数轴移动把“向右”记为加法、“向左”记为减法，带着符号按顺序计算",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明解方程2x - 7 = 9，他想知道x等于多少才能满足方程。",
            "question": "方程的解x是多少？",
            "formula": "2x = 9 + 7, x = ?",
            "answer": 8,
            "choices": [
                8,
                6,
                16,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 9,
                "parts": [
                    {
                        "label": "2x",
                        "val": 16,
                        "color": "#00A896"
                    },
                    {
                        "label": "-7",
                        "val": 7,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "解一元一次方程",
            "difficulty": 2,
            "hint": "先移项再除以系数",
            "variants": [
                {
                    "question": "解方程3x + 5 = 20",
                    "formula": "3x=15, x=5",
                    "answer": 5,
                    "hint": "先减5再除以3"
                },
                {
                    "question": "解方程5x - 3 = 17",
                    "formula": "5x=20, x=4",
                    "answer": 4,
                    "hint": "先加3再除以5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "方程中x的值",
                        "2x是多少",
                        "-7的倒数",
                        "右边的数字9"
                    ],
                    "answer": "方程中x的值",
                    "explain": "要解出2x-7=9中的x"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "2x-7=9、2是x的系数",
                        "x直接等于7",
                        "2x直接等于9",
                        "等式两边相等且值不变"
                    ],
                    "answer": "2x-7=9、2是x的系数",
                    "explain": "把7移到右边变号，得到2x=9+7=16"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "x=(9+7)/2=8",
                        "x=9-7",
                        "2x=9-7",
                        "x=7+9"
                    ],
                    "answer": "x=(9+7)/2=8",
                    "explain": "2x=16，两边除以2得x=8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "等式两边保持平衡：一边是2x，另一边是9再加上移过来的7",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2x-7=9 → 2x=16 → x=8",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解方程移项要变号，再整体除以x的系数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校组织植树活动，一班植了25棵，二班植的是一班的1.2倍少3棵。校长想知道两个班一共植了多少棵树。",
            "question": "两个班共植树多少棵？",
            "formula": "25 + (25*1.2-3) = ?",
            "answer": 52,
            "choices": [
                52,
                50,
                55,
                48
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 52,
                "parts": [
                    {
                        "label": "一班",
                        "val": 25,
                        "color": "#00A896"
                    },
                    {
                        "label": "二班",
                        "val": 27,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "代数式求值",
            "difficulty": 2,
            "hint": "先算二班：25×1.2-3=27棵",
            "variants": [
                {
                    "question": "一班30棵，二班是一班的2倍多5棵，共多少？",
                    "formula": "30+(30*2+5)",
                    "answer": 95,
                    "hint": "先算二班再求和"
                },
                {
                    "question": "一班40棵，二班比一班少10棵，共多少？",
                    "formula": "40+(40-10)",
                    "answer": 70,
                    "hint": "简单减法"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两个班一共植的棵数",
                        "一班植的棵数",
                        "二班植的棵数",
                        "两班相差几棵"
                    ],
                    "answer": "两个班一共植的棵数",
                    "explain": "要先求出二班的棵数，再把一班、二班合起来"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一班25棵、二班是一班的1.2倍少3棵",
                        "二班比一班少3棵",
                        "只给了一班的棵数",
                        "二班是一班的1倍"
                    ],
                    "answer": "一班25棵、二班是一班的1.2倍少3棵",
                    "explain": "二班=25×1.2-3=27棵"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "25+27=52",
                        "25+30=55",
                        "25×2=50",
                        "27-25=2"
                    ],
                    "answer": "25+27=52",
                    "explain": "二班=25×1.2-3=27，一共=25+27=52棵"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "两段：一班25棵，二班是按25乘1.2再减3得来",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "25×1.2=30，30-3=27；25+27=52棵",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "遇见“比某数的几倍少几”，先按倍数算出再减，最后再合计",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个角的补角比它的余角大多少度？小明想用代数的方法算出这个差值。",
            "question": "补角比余角大多少度？",
            "formula": "(180-x) - (90-x) = 90",
            "answer": 90,
            "choices": [
                90,
                45,
                180,
                60
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "angle": 45,
                    "complement": 135,
                    "supplement": 90
                }
            },
            "knowledge": "余角与补角",
            "difficulty": 2,
            "hint": "余角=90°-角，补角=180°-角",
            "variants": [
                {
                    "question": "一个角是30度，它的余角和补角各是多少？",
                    "formula": "余角=60, 补角=150",
                    "answer": 60,
                    "hint": "分别计算"
                },
                {
                    "question": "一个角的补角是120度，它的余角是多少？",
                    "formula": "角=60, 余角=30",
                    "answer": 30,
                    "hint": "先求角再求余角"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "补角比余角大多少度",
                        "角本身是多少度",
                        "余角的度数",
                        "补角的度数"
                    ],
                    "answer": "补角比余角大多少度",
                    "explain": "要比较一个角的补角与余角的差距"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "补角=180-x、余角=90-x",
                        "补角=90-x",
                        "余角=180-x",
                        "两者大小相等"
                    ],
                    "answer": "补角=180-x、余角=90-x",
                    "explain": "任一角x，它的补角为180-x，余角为90-x"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "(180-x)-(90-x)=90",
                        "(90-x)-(180-x)",
                        "180-90=90",
                        "x+(90-x)=90"
                    ],
                    "answer": "(180-x)-(90-x)=90",
                    "explain": "两式相减(180-x)-(90-x)=180-x-90+x=90"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "同一角x透过补角(180-x)与余角(90-x)去看的大小差",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "(180-x)-(90-x)=90度",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "补角总比余角大90度，与角的大小无关，可作快速判断",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用比例分配的方法分糖果，红球和白球的比例是3:2，共有50个球。他想算出红球和白球各有多少个。",
            "question": "红球和白球各有多少个？",
            "formula": "红球=50*3/5=30, 白球=50*2/5=20",
            "answer": 30,
            "choices": [
                30,
                20,
                25,
                15
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 50,
                "parts": [
                    {
                        "label": "红球",
                        "val": 30,
                        "color": "#00A896"
                    },
                    {
                        "label": "白球",
                        "val": 20,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "比例分配",
            "difficulty": 2,
            "hint": "总份数=3+2=5，红球占3/5，白球占2/5",
            "variants": [
                {
                    "question": "男女生比例5:3，共40人，男女生各多少人？",
                    "formula": "男生=40*5/8=25, 女生=40*3/8=15",
                    "answer": 25,
                    "hint": "总份数=8"
                },
                {
                    "question": "甲乙丙比例2:3:4，总和90，各多少？",
                    "formula": "甲=90*2/9=20, 乙=30, 丙=40",
                    "answer": 20,
                    "hint": "总份数=9"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "红球和白球各有多少个",
                        "球的总个数",
                        "比例是几比几",
                        "红球比白球多几个"
                    ],
                    "answer": "红球和白球各有多少个",
                    "explain": "要按3:2把50个球分给红、白两色"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "红球:白球=3:2、共50个",
                        "红球和白球一样多",
                        "红球有50个",
                        "比例是5:3"
                    ],
                    "answer": "红球:白球=3:2、共50个",
                    "explain": "总份数3+2=5，每份=50÷5=10个"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "红=3×10=30、白=2×10=20",
                        "红=2×10、白=3×10",
                        "红白各25个",
                        "红=50÷3"
                    ],
                    "answer": "红=3×10=30、白=2×10=20",
                    "explain": "每份10个球，红球3份得30，白球2份得20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把50个球分成5份，红色拿3份、白色拿2份",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "每份=50÷5=10，红=30、白=20",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "按比例分配先划总份数，用总量除以总份数得到每份，再乘各占的份数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校统计各年级人数，一年级120人，二年级比一年级多15人，三年级比二年级少10人。校长想知道三个年级一共有多少人。",
            "question": "三个年级共有多少人？",
            "formula": "120+(120+15)+(120+15-10)=370",
            "answer": 370,
            "choices": [
                370,
                360,
                380,
                350
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 370,
                "parts": [
                    {
                        "label": "一年级",
                        "val": 120,
                        "color": "#00A896"
                    },
                    {
                        "label": "二年级",
                        "val": 135,
                        "color": "#F5B800"
                    },
                    {
                        "label": "三年级",
                        "val": 125,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "混合运算应用",
            "difficulty": 2,
            "hint": "二年级=120+15，三年级=二年级-10",
            "variants": [
                {
                    "question": "一年级150人，二年级少20人，三年级多10人，共多少人？",
                    "formula": "150+130+140",
                    "answer": 420,
                    "hint": "逐步计算"
                },
                {
                    "question": "苹果100个，橘子多20个，梨少10个，共多少个？",
                    "formula": "100+120+90",
                    "answer": 310,
                    "hint": "先求各部分"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "三个年级一共有多少人",
                        "二年级有多少人",
                        "三年级有多少人",
                        "每两个年级相差几人"
                    ],
                    "answer": "三个年级一共有多少人",
                    "explain": "要把三个年级的人数加起来"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一年级120、二年级多15、三年级少10",
                        "三个年级人数都一样",
                        "只给了一年级人数",
                        "总数直接给出"
                    ],
                    "answer": "一年级120、二年级多15、三年级少10",
                    "explain": "先算二年级120+15=135，三年级135-10=125"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "120+135+125=370",
                        "120+15-10",
                        "120×3=360",
                        "120+15+10"
                    ],
                    "answer": "120+135+125=370",
                    "explain": "二年级135、三年级125，总和120+135+125=370"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "三段高度分别是一、二、三年级的人数",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "120、135、125，合计370人",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求“一共”时先把各部分量分别算准，再进行求和",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个角的度数是它的补角的1/3，小明想知道这个角是多少度。",
            "question": "这个角是多少度？",
            "formula": "x=(180-x)/3, 4x=180, x=45",
            "answer": 45,
            "choices": [
                45,
                60,
                30,
                90
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "angle": 45,
                    "supplement": 135
                }
            },
            "knowledge": "余角与补角应用",
            "difficulty": 3,
            "hint": "设角为x，补角=180-x，列方程",
            "variants": [
                {
                    "question": "一个角是它的余角的2倍，这个角是多少度？",
                    "formula": "x=2(90-x), 3x=180, x=60",
                    "answer": 60,
                    "hint": "列方程求解"
                },
                {
                    "question": "一个角的补角是它的余角的3倍，这个角是多少？",
                    "formula": "180-x=3(90-x), x=45",
                    "answer": 45,
                    "hint": "注意补角和余角的关系"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这个角有多少度",
                        "补角的度数",
                        "角的两条边",
                        "x和补角的差"
                    ],
                    "answer": "这个角有多少度",
                    "explain": "要从“角是补角的1/3”这一关系里解出x"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "角是补角的1/3、补角=180-x",
                        "x就是补角",
                        "补角是x的三倍",
                        "不用列方程"
                    ],
                    "answer": "角是补角的1/3、补角=180-x",
                    "explain": "x=(180-x)/3，两边乘3得3x=180-x"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "3x=180-x，x=45",
                        "x=180/3=60",
                        "4x=180，x=60",
                        "x=180-45"
                    ],
                    "answer": "3x=180-x，x=45",
                    "explain": "3x=180-x → 4x=180 → x=45"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "角x与它的补角180-x之间是1:3的关系",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "x=(180-x)/3 → 4x=180 → x=45",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "描述“占几分之几”的角度关系，把文字翻译成方程再求解",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明测量一块长方形土地，长是宽的2倍少5米，周长是110米。他想算出这块地的长和宽。",
            "question": "这块地的长和宽各是多少米？",
            "formula": "宽=x, 长=2x-5, 2(x+2x-5)=110",
            "answer": 20,
            "choices": [
                20,
                25,
                15,
                30
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 35,
                    "width": 20
                }
            },
            "knowledge": "一元一次方程应用",
            "difficulty": 3,
            "hint": "设宽为x，长为2x-5，周长=2(长+宽)",
            "variants": [
                {
                    "question": "长方形长比宽的3倍多2米，周长52米，长宽各多少？",
                    "formula": "宽=x, 长=3x+2, 2(x+3x+2)=52",
                    "answer": 6,
                    "hint": "解方程求x"
                },
                {
                    "question": "长方形宽是长的一半少3米，周长46米，长宽各多少？",
                    "formula": "长=x, 宽=x/2-3, 2(x+x/2-3)=46",
                    "answer": 16,
                    "hint": "注意比例关系"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这块地的长和宽",
                        "这块地的面积",
                        "这块地的周长",
                        "长比宽多多少米"
                    ],
                    "answer": "这块地的长和宽",
                    "explain": "要由周长和长宽关系求出长和宽"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "长是宽的2倍少5、周长是110米",
                        "长和宽相等",
                        "长就是周长",
                        "宽是长的2倍"
                    ],
                    "answer": "长是宽的2倍少5、周长是110米",
                    "explain": "设宽=x，长=2x-5，周长=2(x+2x-5)"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "2(x+2x-5)=110，x=20",
                        "x+2x-5=110",
                        "(x+2x-5)×2=110，x=35",
                        "2x-5=110"
                    ],
                    "answer": "2(x+2x-5)=110，x=20",
                    "explain": "2(3x-5)=110 → 6x-10=110 → x=20（宽），长=2×20-5=35"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "长方形宽20、长35，绕一周的长度是110米",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2(x+2x-5)=110 → x=20，长=35",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "周长与长宽关系都已知时，设宽为未知数，把周长公式写成方程",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校组织捐款，一班捐了240元，二班比一班多捐了1/4，三班比二班少捐了20元。校长想知道三个班共捐了多少元。",
            "question": "三个班共捐款多少元？",
            "formula": "二班=240*(1+1/4)=300, 三班=300-20=280, 总=820",
            "answer": 820,
            "choices": [
                820,
                800,
                840,
                780
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 820,
                "parts": [
                    {
                        "label": "一班",
                        "val": 240,
                        "color": "#00A896"
                    },
                    {
                        "label": "二班",
                        "val": 300,
                        "color": "#F5B800"
                    },
                    {
                        "label": "三班",
                        "val": 280,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "分数应用",
            "difficulty": 3,
            "hint": "二班=240×(1+1/4)，三班=二班-20",
            "variants": [
                {
                    "question": "甲数120，乙数比甲多1/3，丙数比乙少15，三数之和？",
                    "formula": "乙=160, 丙=145, 总=425",
                    "answer": 425,
                    "hint": "逐步计算"
                },
                {
                    "question": "一本书100页，第一天看1/5，第二天比第一天多10页，两天共看多少？",
                    "formula": "第一天=20, 第二天=30, 共=50",
                    "answer": 50,
                    "hint": "分步计算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "三个班一共捐了多少元",
                        "二班捐了多少元",
                        "三班捐了多少元",
                        "一班捐了多少元"
                    ],
                    "answer": "三个班一共捐了多少元",
                    "explain": "要把三个班的捐款加起来"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一班240、二班多1/4、三班少20",
                        "二班就是240",
                        "三班比一班多",
                        "各班的捐款相同"
                    ],
                    "answer": "一班240、二班多1/4、三班少20",
                    "explain": "二班=240×(1+1/4)=300，三班=300-20=280"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "240+300+280=820",
                        "240×3=720",
                        "300+280=580",
                        "240×(1+1/4)=300"
                    ],
                    "answer": "240+300+280=820",
                    "explain": "二班300、三班280，总和240+300+280=820"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "三段分别是一、二、三班的捐款金额",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "二班=240×1.25=300，三班=300-20=280，共820元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "“比某数多几分之几”就乘以(1+分数)，填满各部分后再合计",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个扇形的半径是6厘米，圆心角是60度。小明想算出这个扇形的面积。",
            "question": "扇形的面积是多少平方厘米？",
            "formula": "S=60/360*π*6²=6π≈18.85",
            "answer": 19,
            "choices": [
                19,
                37,
                12,
                24
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "sector",
                "params": {
                    "radius": 6,
                    "angle": 60
                }
            },
            "knowledge": "扇形面积",
            "difficulty": 2,
            "hint": "扇形面积=圆心角/360×圆面积",
            "variants": [
                {
                    "question": "半径4厘米，圆心角90度，扇形面积？",
                    "formula": "90/360*π*16=4π≈12.57",
                    "answer": 13,
                    "hint": "90度是圆的1/4"
                },
                {
                    "question": "半径10厘米，圆心角120度，扇形面积？",
                    "formula": "120/360*π*100=100π/3≈104.7",
                    "answer": 105,
                    "hint": "120度是圆的1/3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这个扇形的面积",
                        "圆的半径",
                        "圆心角的度数",
                        "扇形的周长"
                    ],
                    "answer": "这个扇形的面积",
                    "explain": "要求圆心角60度扇形的面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径6厘米、圆心角60度",
                        "只给了半径",
                        "圆心角是360度",
                        "半径是60"
                    ],
                    "answer": "半径6厘米、圆心角60度",
                    "explain": "先算整圆面积π×6²，再乘圆心角占的比例60/360"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "60/360×π×6²≈18.85，约19",
                        "π×6²=36π",
                        "60+6=66",
                        "360/60×6²"
                    ],
                    "answer": "60/360×π×6²≈18.85，约19",
                    "explain": "π×36≈113.1，再乘1/6≈18.85，四舍五入约为19"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "圆盘半径6，剪下圆心角60度的一片就是扇形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "S=60/360×π×6²=6π≈18.85，约为19",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "扇形面积=圆心角/360×πr²，圆心角占圆周角的比例就对应面积占比",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校调查学生喜欢的运动项目，足球20人，篮球15人，乒乓球10人，其他5人。校长想知道喜欢足球的占全班的百分比。",
            "question": "喜欢足球的占全班人数的百分之几？",
            "formula": "20/(20+15+10+5)*100%=40%",
            "answer": 40,
            "choices": [
                40,
                35,
                45,
                50
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 50,
                "parts": [
                    {
                        "label": "足球",
                        "val": 20,
                        "color": "#00A896"
                    },
                    {
                        "label": "篮球",
                        "val": 15,
                        "color": "#F5B800"
                    },
                    {
                        "label": "乒乓球",
                        "val": 10,
                        "color": "#FB923C"
                    },
                    {
                        "label": "其他",
                        "val": 5,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "统计与百分比",
            "difficulty": 2,
            "hint": "百分比=部分÷总数×100%",
            "variants": [
                {
                    "question": "班级40人，喜欢语文24人，喜欢数学20人，两科都喜欢的8人，只喜欢语文的有多少人？",
                    "formula": "24-8=16",
                    "answer": 16,
                    "hint": "用集合思想"
                },
                {
                    "question": "果园有苹果树80棵，梨树60棵，桃树40棵，苹果树占总数的百分比？",
                    "formula": "80/(80+60+40)*100%=40%",
                    "answer": 40,
                    "hint": "先求总数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "喜欢足球的占全班的百分比",
                        "喜欢足球的人数",
                        "全班总人数",
                        "各项目人数的差"
                    ],
                    "answer": "喜欢足球的占全班的百分比",
                    "explain": "要算喜欢足球的人数占全班的比例"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "足球20人、总数20+15+10+5=50",
                        "总数就是20",
                        "没有其他项目",
                        "百分比已经给出"
                    ],
                    "answer": "足球20人、总数20+15+10+5=50",
                    "explain": "总人数50，其中足球占20"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "20÷50×100%=40%",
                        "20÷100×100%",
                        "50÷20",
                        "20-50"
                    ],
                    "answer": "20÷50×100%=40%",
                    "explain": "20÷50=0.4，写成百分数就是40%"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "全班50人，其中喜欢足球的20人占一段",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "足球占比=20÷50×100%=40%",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "百分比=部分÷总数×100%，先把各部分累出总数再相除",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用尺规作图画一个直角，他想验证这个直角是否为90度。他用量角器测量，发现两条边互相垂直。",
            "question": "互相垂直的两条线形成的角是多少度？",
            "formula": "90°",
            "answer": "90°",
            "choices": [
                "90°",
                "45°",
                "60°",
                "180°"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "angle": 90
                }
            },
            "knowledge": "垂直与直角",
            "difficulty": 1,
            "hint": "垂直形成直角，直角=90°",
            "variants": [
                {
                    "question": "两条线相交成90度，它们的关系是什么？",
                    "formula": "互相垂直",
                    "answer": "互相垂直",
                    "hint": "垂直定义",
                    "choices": [
                        "互相垂直",
                        "互相平行",
                        "相交但不垂直",
                        "互相重合"
                    ]
                },
                {
                    "question": "直角三角形的直角是多少度？",
                    "formula": "90°",
                    "answer": "90°",
                    "hint": "直角定义",
                    "choices": [
                        "90°",
                        "60°",
                        "45°",
                        "180°"
                    ]
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两条垂直线形成的角度",
                        "两条线的长度",
                        "角的顶点位置",
                        "一共有几条线"
                    ],
                    "answer": "两条垂直线形成的角度",
                    "explain": "看互相垂直的两条线相交形成的角度"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条边互相垂直、构成直角",
                        "角是45度",
                        "它们是平行的",
                        "角是直角的一半"
                    ],
                    "answer": "两条边互相垂直、构成直角",
                    "explain": "垂直的两线夹角是直角，直角恒为90度"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "垂直=直角=90°",
                        "垂直=180°",
                        "垂直=45°",
                        "垂直=60°"
                    ],
                    "answer": "垂直=直角=90°",
                    "explain": "两条直线互相垂直时，夹角是直角，即90度"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "两条线呈“十字”交叉，夹角正好是一个直角",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "互相垂直的两线夹角=90°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "垂直是特殊的相交：夹角固定为90度，反过来也可据此判断两线是否垂直",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "水果店上午卖出苹果120个，下午卖出苹果85个。店主想知道这一天一共卖出了多少个苹果。",
            "question": "全天一共卖出多少个苹果？",
            "formula": "120 + 85 = ?",
            "answer": 205,
            "choices": [
                200,
                205,
                210,
                195
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 205,
                "parts": [
                    {
                        "label": "上午",
                        "val": 120,
                        "color": "#00A896"
                    },
                    {
                        "label": "下午",
                        "val": 85,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "加法模型",
            "difficulty": 1,
            "hint": "求总数用加法：加数+加数=和",
            "variants": [
                {
                    "question": "上午卖出130个，下午卖出75个，一共？",
                    "formula": "130+75=?",
                    "answer": 205,
                    "hint": "两个加数相加"
                },
                {
                    "question": "上午86个，下午94个，一共？",
                    "formula": "86+94=?",
                    "answer": 180,
                    "hint": "整十数相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "全天一共卖出多少个苹果",
                        "上午和下午卖出苹果的差",
                        "每箱苹果卖多少钱",
                        "水果店还剩多少个苹果"
                    ],
                    "answer": "全天一共卖出多少个苹果",
                    "explain": "场景要求店主算出这一天上午和下午加起来一共卖出的苹果数，是求两部分数量的总和。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "上午卖出120个，下午卖出85个",
                        "上午卖出120个，下午卖出100个",
                        "上午卖出85个，下午卖出205个",
                        "店里只剩下85个苹果"
                    ],
                    "answer": "上午卖出120个，下午卖出85个",
                    "explain": "关键信息是上午卖出120个、下午卖出85个，其余选项都把场景里的数字错位搭配了。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "120 + 85",
                        "120 - 85",
                        "85 × 120",
                        "120 ÷ 85"
                    ],
                    "answer": "120 + 85",
                    "explain": "求总数用加法，加数+加数=和：120+85=205，所以全天一共卖出205个苹果。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里两条条形分别表示上午120个和下午85个苹果，把两条首尾相接或并排，整体长度就是一天的销量，直观看出是两段数量相加。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "这是加法模型：总数量=上午数量+下午数量=120+85，先算120+80=200再补5，得到205。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "把几部分数量合并成一个整体都用加法，那就是部分+部分=整体；条形图里这等于把各段拼接看总长，可搬到任何求总和的问题上。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校图书角有故事书68本，科普书45本。管理员想统计两类书一共有多少本。",
            "question": "故事书和科普书一共有多少本？",
            "formula": "68 + 45 = ?",
            "answer": 113,
            "choices": [
                103,
                113,
                123,
                108
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 113,
                "parts": [
                    {
                        "label": "故事书",
                        "val": 68,
                        "color": "#00A896"
                    },
                    {
                        "label": "科普书",
                        "val": 45,
                        "color": "#2563EB"
                    }
                ]
            },
            "knowledge": "加法模型",
            "difficulty": 1,
            "hint": "总数=其中一部分+另一部分",
            "variants": [
                {
                    "question": "故事书72本，科普书38本，一共？",
                    "formula": "72+38=?",
                    "answer": 110,
                    "hint": "两位数加法"
                },
                {
                    "question": "故事书58本，科普书67本，一共？",
                    "formula": "58+67=?",
                    "answer": 125,
                    "hint": "注意进位"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "故事书和科普书一共有多少本",
                        "两类书相差多少本",
                        "科普书比故事书多多少本",
                        "图书角一共有多少种书"
                    ],
                    "answer": "故事书和科普书一共有多少本",
                    "explain": "场景要统计故事书68本和科普书45本合起来的总本数，是求两类书数量的总和。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "故事书68本，科普书45本",
                        "故事书45本，科普书68本",
                        "故事书和科普书共68本",
                        "两类书各占总书数的一半"
                    ],
                    "answer": "故事书68本，科普书45本",
                    "explain": "关键数据是故事书68本、科普书45本，要用这两类书的数量来求总数。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "68 + 45",
                        "68 - 45",
                        "45 × 68",
                        "68 ÷ 45"
                    ],
                    "answer": "68 + 45",
                    "explain": "总数=其中一部分+另一部分：68+45=113，两类书一共有113本。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图中两条条形分别标出68本和45本，并排拼在一起的整体长度就是总本数，一眼看出是把两段长度合并。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "这里也是加法模型：总数=故事书+科普书=68+45，个位8+5=13写3进1，十位6+4+1=11，得到113。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "凡把两类或多类事物合在一起求总量，都按部分+部分=整体；先分别表示每一类再合并相加，规律对任意加总都通用。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "每盒饮料有6瓶，同学们买了4盒。老师想算出总共买了多少瓶饮料。",
            "question": "一共买了多少瓶饮料？",
            "formula": "6 × 4 = ?",
            "answer": 24,
            "choices": [
                20,
                24,
                28,
                30
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 24,
                "parts": [
                    {
                        "label": "每盒",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "每盒",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "每盒",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "每盒",
                        "val": 6,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "乘法模型",
            "difficulty": 1,
            "hint": "求几个相同加数的和，用乘法：因数×因数=积",
            "variants": [
                {
                    "question": "每盒8瓶，5盒一共？",
                    "formula": "8×5=?",
                    "answer": 40,
                    "hint": "用乘法口诀"
                },
                {
                    "question": "每盒6瓶，7盒一共？",
                    "formula": "6×7=?",
                    "answer": 42,
                    "hint": "六七四十二"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一共买了多少瓶饮料",
                        "一盒有几瓶",
                        "买了几盒",
                        "每盒要几元"
                    ],
                    "answer": "一共买了多少瓶饮料",
                    "explain": "把4盒饮料的瓶数都合起来得到总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每盒6瓶、买了4盒",
                        "每盒12瓶",
                        "买了6盒",
                        "每盒有24瓶"
                    ],
                    "answer": "每盒6瓶、买了4盒",
                    "explain": "关键是每盒6瓶且一共有4盒"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "6×4=24",
                        "6+4=10",
                        "6-4=2",
                        "6÷4"
                    ],
                    "answer": "6×4=24",
                    "explain": "每份6瓶、共4份，6+6+6+6与6×4结果相同，得24瓶"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "4个盒子各装6瓶，把4段并排起来就是总数",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "6+6+6+6=24，写成乘法即6×4=24",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "每份数量相同且有若干份时，总数=每份数×份数；这种“份数累加”可推广到盒子、队列、价格等各类问题",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一台电风扇45元，商店买了3台放在教室。老师想知道总共要花多少钱。",
            "question": "3台电风扇一共多少元？",
            "formula": "45 × 3 = ?",
            "answer": 135,
            "choices": [
                125,
                135,
                140,
                145
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 135,
                "parts": [
                    {
                        "label": "第1台",
                        "val": 45,
                        "color": "#00A896"
                    },
                    {
                        "label": "第2台",
                        "val": 45,
                        "color": "#F5B800"
                    },
                    {
                        "label": "第3台",
                        "val": 45,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "乘法模型",
            "difficulty": 1,
            "hint": "每份数×份数=总数",
            "variants": [
                {
                    "question": "一台38元，5台一共？",
                    "formula": "38×5=?",
                    "answer": 190,
                    "hint": "先乘后加"
                },
                {
                    "question": "一台52元，4台一共？",
                    "formula": "52×4=?",
                    "answer": 208,
                    "hint": "50×4+2×4"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "3台电风扇一共多少元",
                        "一台电风扇多少元",
                        "比预算多花了多少元",
                        "还剩下几台电风扇"
                    ],
                    "answer": "3台电风扇一共多少元",
                    "explain": "场景要算单价45元的电风扇买3台总共要花多少钱，是求3个45元的总和。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一台45元，买了3台",
                        "一台135元，买了3台",
                        "一台45元，一共135台",
                        "买了45台，每台3元"
                    ],
                    "answer": "一台45元，买了3台",
                    "explain": "关键信息是单价45元、买了3台，用它们才能求总价。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "45 × 3",
                        "45 + 3",
                        "135 ÷ 3",
                        "45 - 3"
                    ],
                    "answer": "45 × 3",
                    "explain": "每份数×份数=总数：45×3=135，所以3台一共135元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图中3条等长条形各代表45元，三格并排的总长度表示3台的总价，凸显出每份45元、共3份的重复结构。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "购物总价是乘法模型：总价=单价×台数=45×3，拆成40×3+5×3=120+15得135。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "买多件同价商品用单价×数量=总价，条形图以等长条显示每份数，重复几份就乘几，适用于买几件、用几小时等一切总量问题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "某地白天气温是零下4摄氏度，午后升温到零上6摄氏度。小明想知道气温到底上升了多少摄氏度。",
            "question": "气温上升了多少摄氏度？",
            "formula": "6 - (-4) = ?",
            "answer": 10,
            "choices": [
                2,
                6,
                10,
                4
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -4,
                "end": 6,
                "points": [
                    {
                        "pos": -4,
                        "label": "最低",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 6,
                        "label": "最高",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -4,
                    6
                ]
            },
            "knowledge": "生活中负数",
            "difficulty": 2,
            "hint": "上升量=较高温度-较低温度，减去一个负数等于加上它的相反数",
            "variants": [
                {
                    "question": "从-6度上升到2度，上升多少？",
                    "formula": "2-(-6)=?",
                    "answer": 8,
                    "hint": "用数轴数一数"
                },
                {
                    "question": "从-3度上升到5度，上升多少？",
                    "formula": "5-(-3)=?",
                    "answer": 8,
                    "hint": "减去负数等于加相反数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "气温上升了多少摄氏度",
                        "午后气温是多少度",
                        "白天气温是多少度",
                        "气温下降了多少摄氏度"
                    ],
                    "answer": "气温上升了多少摄氏度",
                    "explain": "场景要从零下4度升到零上6度的过程中，求出上升的度数，即两端气温的差。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "白天气温零下4度，午后升温到零上6度",
                        "白天零上4度，午后零下6度",
                        "午后从6度降到零下4度",
                        "白天和午后都是6度"
                    ],
                    "answer": "白天气温零下4度，午后升温到零上6度",
                    "explain": "关键信息是起点零下4摄氏度和终点零上6摄氏度，两者跨过0点。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "6 - (-4)",
                        "6 + (-4)",
                        "(-4) - 6",
                        "6 × 4"
                    ],
                    "answer": "6 - (-4)",
                    "explain": "上升量=较高温度-较低温度，减去一个负数等于加上它的相反数，6-(-4)=6+4=10摄氏度。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上零下4度在0左边、零上6度在0右边，两点之间跨过的格数就是上升量，从-4走到+6正好10格。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "低点-4、高点6，温差=高-低=6-(-4)，减负号变加相反数得6+4=10。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "比较两个带正负号的温度或海拔用高点-低点，低点是负数时把减法化成加法；数轴上两点跨度就是差值，温差不老在手、格数在数轴上。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小华这个月零花钱记作支出50元（-50），又收到压岁钱200元。他想知道自己这个月实际结余多少元。",
            "question": "实际结余多少元？",
            "formula": "200 - 50 = ?",
            "answer": 150,
            "choices": [
                150,
                250,
                100,
                200
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -50,
                "end": 200,
                "points": [
                    {
                        "pos": -50,
                        "label": "支出",
                        "color": "#EF4444"
                    },
                    {
                        "pos": 200,
                        "label": "收入",
                        "color": "#00A896"
                    }
                ],
                "highlight": [
                    -50,
                    200
                ]
            },
            "knowledge": "生活中负数",
            "difficulty": 2,
            "hint": "支出记负数，结余=收入-支出",
            "variants": [
                {
                    "question": "支出80元，收入300元，结余？",
                    "formula": "300-80=?",
                    "answer": 220,
                    "hint": "收入减支出"
                },
                {
                    "question": "支出45元，收入120元，结余？",
                    "formula": "120-45=?",
                    "answer": 75,
                    "hint": "直接相减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "实际结余多少元",
                        "一共收到多少压岁钱",
                        "零花钱支出多少元",
                        "这个月收入多少元"
                    ],
                    "answer": "实际结余多少元",
                    "explain": "场景要算支出50元（记-50）又收到200元后，这个月实际剩下的钱是多少。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "支出50元，收到压岁钱200元",
                        "支出200元，收到50元",
                        "只支出50元，没有收入",
                        "结余150元，支出200元"
                    ],
                    "answer": "支出50元，收到压岁钱200元",
                    "explain": "关键信息是支出的50元（记为-50）和收入的200元，结余由两者相抵得出。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "200 - 50",
                        "200 + 50",
                        "50 - 200",
                        "50 × 200"
                    ],
                    "answer": "200 - 50",
                    "explain": "支出记负数，结余=收入-支出=200-50=150，所以实际结余150元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "收入200元像在数轴上往右走一大段，支出50元用负号表示往左退，两者抵消后剩余位置就是结余150，体现有进有出。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "收入200、支出50，结余=收入-支出=200-50=150，支出记为负数恰好表示要从收入里扣除的部分。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "记帐问题收为正、支为负，结余=收入-支出；既有收入又有支出就在同一单位上相减，适合结余、扣款、盈亏等生活账目。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "两处地点，一处海拔低于海平面20米，另一处高于海平面30米。小刚想知道这两处的高度相差多少米。",
            "question": "两处高度相差多少米？",
            "formula": "30 - (-20) = ?",
            "answer": 50,
            "choices": [
                10,
                50,
                20,
                30
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -20,
                "end": 30,
                "points": [
                    {
                        "pos": -20,
                        "label": "低处",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 30,
                        "label": "高处",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -20,
                    30
                ]
            },
            "knowledge": "生活中负数",
            "difficulty": 2,
            "hint": "低于海平面记作负，相差=高-低",
            "variants": [
                {
                    "question": "一处-15米，一处25米，相差？",
                    "formula": "25-(-15)=?",
                    "answer": 40,
                    "hint": "用数轴求距离"
                },
                {
                    "question": "一处-10米，一处15米，相差？",
                    "formula": "15-(-10)=?",
                    "answer": 25,
                    "hint": "减去负数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两处高度相差多少米",
                        "高处的海拔是多少米",
                        "低处低于海平面多少米",
                        "两处的平均高度是多少"
                    ],
                    "answer": "两处高度相差多少米",
                    "explain": "场景要求低于海平面20米和高于海平面30米的两处地点之间的高度差。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一处海拔-20米，另一处+30米",
                        "一处海拔20米，另一处30米",
                        "一处海拔-30米，另一处20米",
                        "两处都高于海平面"
                    ],
                    "answer": "一处海拔-20米，另一处+30米",
                    "explain": "关键信息是一处在海平面下20米（记-20米）、另一处在海平面上30米，分居海平面两侧。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "30 - (-20)",
                        "30 + 20",
                        "30 - 20",
                        "20 + 30"
                    ],
                    "answer": "30 - (-20)",
                    "explain": "相差=高-低=30-(-20)=30+20=50，所以两处高度相差50米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "以海平面作0，-20在0下方、+30在0上方，两点间沿着高度方向的距离是它们跨过的总跨度50米，横穿了海平面。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "高30、低-20，相差=高-低=30-(-20)=30+20=50，减负号即加正号，得到50。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "两个一正一负的数求相差，等于各自到0的距离加在一起；把负号视为到0以下的距离即可，适用海拔、温差、正负相对量。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明计算一道有理数题：先算-7加12，再减去5。他想知道最后结果是多少。",
            "question": "算式 -7 + 12 - 5 的结果是多少？",
            "formula": "-7 + 12 - 5 = ?",
            "answer": 0,
            "choices": [
                -2,
                0,
                2,
                -1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -7,
                "end": 5,
                "points": [
                    {
                        "pos": -7,
                        "label": "起点",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 5,
                        "label": "终点",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -7,
                    5
                ]
            },
            "knowledge": "有理数加减法",
            "difficulty": 2,
            "hint": "从左到右逐步计算，注意符号",
            "variants": [
                {
                    "question": "计算 -3 + 8 - 5 = ?",
                    "formula": "-3+8-5=?",
                    "answer": 0,
                    "hint": "先加后减"
                },
                {
                    "question": "计算 -5 + 2 + 3 = ?",
                    "formula": "-5+2+3=?",
                    "answer": 0,
                    "hint": "把正负分别相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "算式 -7 + 12 - 5 的结果是多少",
                        "-7和12的差是多少",
                        "5加12再减7的结果",
                        "只算12减5的结果"
                    ],
                    "answer": "算式 -7 + 12 - 5 的结果是多少",
                    "explain": "场景要求先算-7加12，再减去5，求出这个有理数运算的最终结果。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "先算-7加12，再减去5",
                        "先算12减5，再和-7相加",
                        "只有-7和5两个数参与",
                        "12和5相加保持为正"
                    ],
                    "answer": "先算-7加12，再减去5",
                    "explain": "关键是把运算按从左到右的顺序分成两步：先-7+12，得到的中间数再减5。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "-7+12=5，再5-5=0",
                        "-7+12=5，再5+5=10",
                        "12-5=7，再7-7=0",
                        "-7-12+5= -14"
                    ],
                    "answer": "-7+12=5，再5-5=0",
                    "explain": "从左到右逐步计算：-7+12=5，5-5=0，所以结果等于0。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从-7出发向右12格到5，再向左5格回到原点0，每步停在哪个位置一清二楚，最终落在0。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "先正后负：-7+12=5，再加-5即向左5格，5-5=0，符号决定了移动方向。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "有理数加减按符号定方向：加正数向右、加负数向左；连加连减从左到右逐步移动，最终位置即结果，可推广到任意正负号连续运算。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明做有理数乘除混合运算：先乘-3和4，再除以-2。他想知道最后商是多少。",
            "question": "算式 (-3) × 4 ÷ (-2) 的结果是多少？",
            "formula": "(-3) × 4 ÷ (-2) = ?",
            "answer": 6,
            "choices": [
                6,
                -6,
                24,
                -24
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -12,
                "end": 6,
                "points": [
                    {
                        "pos": -12,
                        "label": "乘积",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 6,
                        "label": "结果",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -12,
                    6
                ]
            },
            "knowledge": "有理数乘除法",
            "difficulty": 2,
            "hint": "负负得正，先乘后除",
            "variants": [
                {
                    "question": "计算 -8 × 3 ÷ (-4) = ?",
                    "formula": "-8×3÷(-4)=?",
                    "answer": 6,
                    "hint": "负负得正"
                },
                {
                    "question": "计算 -6 × (-2) ÷ 3 = ?",
                    "formula": "-6×(-2)÷3=?",
                    "answer": 4,
                    "hint": "先乘得正12再除"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "算式 (-3) × 4 ÷ (-2) 的结果是多少",
                        "-3乘以4的积是多少",
                        "4除以-2的商是多少",
                        "-3和4的差是多少"
                    ],
                    "answer": "算式 (-3) × 4 ÷ (-2) 的结果是多少",
                    "explain": "场景要求先乘-3和4，再除以-2，求出最后的商。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "先乘-3和4，再除以-2",
                        "先除以-2，再乘4",
                        "只有-3和4两个数参与",
                        "先算4除以-2"
                    ],
                    "answer": "先乘-3和4，再除以-2",
                    "explain": "关键信息是运算顺序：先算(-3)×4的积，再用这个积除以-2。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(-3)×4=-12，(-12)÷(-2)=6",
                        "(-3)×4=-12，再÷(-2)=-6",
                        "(-3)×4=12，再÷(-2)=-6",
                        "(-3)×4=-12，再÷2=-6"
                    ],
                    "answer": "(-3)×4=-12，(-12)÷(-2)=6",
                    "explain": "先乘：(-3)×4=-12；再除：(-12)÷(-2)，负负得正得6。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "先看(-3)×4把-3放大到-12，再被-2除，两次符号变更使结果落在正数6，数轴上看到两回折返。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "同号相除得正，-12÷(-2)=6；先算绝对值再定符号，负负得正得到6。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "乘除混合按顺序先算数值，再数负号个数决定符号，偶数个负号为证，奇数为负；适用任意有理数乘除链。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红想知道数-8到原点的距离，也就是它的绝对值是多少。",
            "question": "-8 的绝对值是多少？",
            "formula": "|-8| = ?",
            "answer": 8,
            "choices": [
                8,
                -8,
                0,
                16
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -8,
                "end": 8,
                "points": [
                    {
                        "pos": -8,
                        "label": "-8",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 0,
                        "label": "原点",
                        "color": "#FB923C"
                    }
                ],
                "highlight": [
                    -8,
                    0
                ]
            },
            "knowledge": "绝对值",
            "difficulty": 1,
            "hint": "绝对值表示到原点的距离，一定是非负数",
            "variants": [
                {
                    "question": "|12| = ?",
                    "formula": "|12|=?",
                    "answer": 12,
                    "hint": "正数的绝对值是它本身"
                },
                {
                    "question": "|-100| = ?",
                    "formula": "|-100|=?",
                    "answer": 100,
                    "hint": "负数的绝对值是它的相反数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "数-8的绝对值是多少",
                        "数8的相反数是多少",
                        "-8加8的结果是多少",
                        "-8到16有多远"
                    ],
                    "answer": "数-8的绝对值是多少",
                    "explain": "场景要找数-8到原点的距离，也就是求-8的绝对值。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "-8到原点的距离",
                        "8到原点的距离",
                        "-8在0的哪一侧",
                        "-8加8的和"
                    ],
                    "answer": "-8到原点的距离",
                    "explain": "关键信息是绝对值表示数到原点的距离，要算的是-8离0有多远。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "|-8| = 8",
                        "|-8| = -8",
                        "|-8| = 0",
                        "|-8| = 16"
                    ],
                    "answer": "|-8| = 8",
                    "explain": "绝对值是到原点的距离，一定是非负数，-8到0的距离是8。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "-8在0左边8格，把这段从-8量到0的距离数一遍正好8格，它就是绝对值，是带箭头的非负长度。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "绝对值表示数到原点的距离，任何数的绝对值都≥0，所以|-8|=8。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "去绝对值总得非负数：负数的绝对值是它的相反数，正数、0的绝对值是本身，等于到数轴原点的距离，适用所有绝对值题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小刚想找一找数 8 的相反数，也就是只改变符号得到的新数。",
            "question": "8 的相反数是多少？",
            "formula": "-8 = ?",
            "answer": -8,
            "choices": [
                -8,
                8,
                0,
                1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -8,
                "end": 8,
                "points": [
                    {
                        "pos": 8,
                        "label": "8",
                        "color": "#F5B800"
                    },
                    {
                        "pos": -8,
                        "label": "相反数",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    -8,
                    8
                ]
            },
            "knowledge": "相反数",
            "difficulty": 1,
            "hint": "相反数只有符号不同，和等于0",
            "variants": [
                {
                    "question": "-5 的相反数？",
                    "formula": "-(-5)=?",
                    "answer": 5,
                    "hint": "负负得正"
                },
                {
                    "question": "0 的相反数？",
                    "formula": "-0=?",
                    "answer": 0,
                    "hint": "0的相反数是它本身"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "8的相反数是多少",
                        "8的绝对值是多少",
                        "8的平方是多少",
                        "比8大1的数是多少"
                    ],
                    "answer": "8的相反数是多少",
                    "explain": "场景要找8的相反数，也就是只改变符号而得到的新数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "与8符号相反的数",
                        "与8到原点等距的另一个数",
                        "数8本身的大小",
                        "比8少1的数"
                    ],
                    "answer": "与8符号相反的数",
                    "explain": "关键信息是相反数只有符号不同，8的相反数长度和8一样但符号相反。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "-8",
                        "8",
                        "0",
                        "1"
                    ],
                    "answer": "-8",
                    "explain": "相反数只改变符号，8的相反数是-8，两数相加和等于0。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上8在0右8格，它的相反数在0左同样8格，两数关于原点对称，一眼看到-8。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "相反数符号相反且和为0，8+(-8)=0，所以8的相反数是-8。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求相反数即把正负号取反：正的变负、负的变正、0仍是0，两个相反数在数轴上关于原点成对对称。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明计算有理数混合运算：先算-2的平方，再加上3乘4的积。",
            "question": "算式 (-2)² + 3 × 4 的结果是多少？",
            "formula": "(-2)^2 + 3*4 = ?",
            "answer": 16,
            "choices": [
                16,
                8,
                10,
                20
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 16,
                "points": [
                    {
                        "pos": 4,
                        "label": "平方",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 16,
                        "label": "结果",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    4,
                    16
                ]
            },
            "knowledge": "有理数混合运算",
            "difficulty": 2,
            "hint": "先算乘方，再算乘法，最后算加法",
            "variants": [
                {
                    "question": "计算 3² + 2×5 = ?",
                    "formula": "3^2+2*5=?",
                    "answer": 19,
                    "hint": "先平方后乘"
                },
                {
                    "question": "计算 (-1)² + 4×3 = ?",
                    "formula": "(-1)^2+4*3=?",
                    "answer": 13,
                    "hint": "负数平方是正数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "算式 (-2)² + 3 × 4 的结果是多少",
                        "-2的平方是多少",
                        "3乘4的积是多少",
                        "4加3的和再平方的结果"
                    ],
                    "answer": "算式 (-2)² + 3 × 4 的结果是多少",
                    "explain": "场景要求先算-2的平方，再加上3乘4的积，求出这个混合运算的结果。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "先算-2的平方，再算3乘4，最后相加",
                        "先算平方与加法再乘4",
                        "只有-2和3两个数参与",
                        "先算乘法再算平方"
                    ],
                    "answer": "先算-2的平方，再算3乘4，最后相加",
                    "explain": "关键信息是运算顺序：幂→乘法→加法，即(-2)²=4、3×4=12。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(-2)²=4，3×4=12，再4+12=16",
                        "(-2)²=-4，3×4=12，-4+12=8",
                        "(-2)²=4，3×4=12，4-12= -8",
                        "(-2)²=2，3×4=12，2+12=14"
                    ],
                    "answer": "(-2)²=4，3×4=12，再4+12=16",
                    "explain": "先算乘方(-2)²=4，再算乘法3×4=12，最后加法4+12=16。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上先把(-2)自乘到4，再把3×4扩到12，最后从4继续走12格落到16，体现先算小块再合并。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "运算顺序是乘方→乘除→加减，(-2)²=4（负数的偶次幂为正）、3×4=12，相加得16。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "混合运算的关键是顺序：先乘方、再乘除、后加减，括号内优先；负数偶次幂为正，按此逐步化简只有一个确定结果。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红化简整式 3x + 5x - 2x，再求当 x=3 时这个式子的值。",
            "question": "当 x=3 时式子的值是多少？",
            "formula": "3x+5x-2x = 6x = 6*3 = ?",
            "answer": 18,
            "choices": [
                18,
                16,
                24,
                12
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 18,
                "points": [
                    {
                        "pos": 6,
                        "label": "6x",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 18,
                        "label": "x=3",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    6,
                    18
                ]
            },
            "knowledge": "整式加减",
            "difficulty": 2,
            "hint": "先合并同类项，再代入求值",
            "variants": [
                {
                    "question": "化简 2x+3x，x=4 时值？",
                    "formula": "5x=5*4=?",
                    "answer": 20,
                    "hint": "先合并"
                },
                {
                    "question": "化简 7a-2a，a=5 时值？",
                    "formula": "5a=5*5=?",
                    "answer": 25,
                    "hint": "同类项相减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "当x=3时式子的值是多少",
                        "化简后x的系数是多少",
                        "式子里的常数项是多少",
                        "x等于3时式子里有几个x"
                    ],
                    "answer": "当x=3时式子的值是多少",
                    "explain": "场景要先化简3x+5x-2x，再求当x=3时这个式子的值。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "式子3x+5x-2x，且x=3",
                        "共有3个x、5个x、2个x",
                        "x=3时式子等于24",
                        "式子是3x+5x再加2x"
                    ],
                    "answer": "式子3x+5x-2x，且x=3",
                    "explain": "关键是要把3x、5x、-2x合并同类项，再把x=3代入结果。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "3x+5x-2x=6x，6×3=18",
                        "3+5-2=6，结果就是6",
                        "6x直接当作6",
                        "x=3时代入得3+5-2=6"
                    ],
                    "answer": "3x+5x-2x=6x，6×3=18",
                    "explain": "先合并同类项3x+5x-2x=6x，再代入x=3得6×3=18。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把3x、5x和-2x看成三段，前两段相加、第三段相减，合并成6x，再把x放大到3得18，数轴上看到缩放。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "先合并同类项：3+5-2=6得6x，再代入求值6×3=18。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求代数式的值先合并含相同字母的项（同类项），再整体代入字母的值，合并能简化运算，适用于一切含同类项的式子求值。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "代数式 2a² - a 中，小明代入 a=3 求这个式子的值。",
            "question": "当 a=3 时代数式的值是多少？",
            "formula": "2*3^2 - 3 = ?",
            "answer": 15,
            "choices": [
                15,
                12,
                9,
                18
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 15,
                "parts": [
                    {
                        "label": "2a²",
                        "val": 18,
                        "color": "#00A896"
                    },
                    {
                        "label": "-a",
                        "val": 3,
                        "color": "#EF4444"
                    }
                ]
            },
            "knowledge": "代数式求值",
            "difficulty": 2,
            "hint": "先算平方和乘法，再算减法",
            "variants": [
                {
                    "question": "x=2 时 x²+3 的值？",
                    "formula": "2^2+3=?",
                    "answer": 7,
                    "hint": "先平方"
                },
                {
                    "question": "m=4 时 3m-1 的值？",
                    "formula": "3*4-1=?",
                    "answer": 11,
                    "hint": "先乘后减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "当a=3时代数式的值是多少",
                        "2a的平方是多少",
                        "a减2a是多少",
                        "代数式里a的个数"
                    ],
                    "answer": "当a=3时代数式的值是多少",
                    "explain": "场景要把字母a=3代入代数式2a²-a，求出式子的值。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "a=3，代数式是2a²-a",
                        "a=3，代数式是2a-a²",
                        "a=3，只有2a一项",
                        "a=3，式子是a²+2"
                    ],
                    "answer": "a=3，代数式是2a²-a",
                    "explain": "关键信息是给定的代数式2a²-a以及a=3这个值。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "2×3²-3=2×9-3=15",
                        "2×3-3=6-3=3",
                        "2×(3-1)=4",
                        "3²-3=6"
                    ],
                    "answer": "2×3²-3=2×9-3=15",
                    "explain": "先算乘方3²=9，再算乘法2×9=18，最后算减法18-3=15。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里先看3的平方是9，占2份得18，再扣掉1份3，剩下15，直观展现乘方与减法的先后。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "代入后先算幂：3²=9，2×9=18，再减3，2a²-a得15。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "代数式求值先把字母换成数，严格遵守乘方→乘除→加减的顺序，先定部分再合成整体，适用于任意代入求值问题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明解方程 2x + 3 = 11，他把 3 移到右边再除以 2。",
            "question": "方程的解 x 是多少？",
            "formula": "2x+3=11, 2x=8, x=4",
            "answer": 4,
            "choices": [
                4,
                3,
                7,
                8
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 8,
                "points": [
                    {
                        "pos": 4,
                        "label": "x",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 8,
                        "label": "2x",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    4,
                    8
                ]
            },
            "knowledge": "解一元一次方程",
            "difficulty": 2,
            "hint": "移项要变号：(11-3)/2=4",
            "variants": [
                {
                    "question": "3x - 2 = 10，x=?",
                    "formula": "3x=12,x=4",
                    "answer": 4,
                    "hint": "先移项再除"
                },
                {
                    "question": "x/4 = 3，x=?",
                    "formula": "x=3*4=12",
                    "answer": 12,
                    "hint": "两边同乘4"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "方程的解x是多少",
                        "3和11的和是多少",
                        "2x表示多少",
                        "方程的系数是多少"
                    ],
                    "answer": "方程的解x是多少",
                    "explain": "场景要把方程2x+3=11中的3移到右边再除以2，求出x的值。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "方程2x+3=11",
                        "把11移到左边再减3",
                        "2x等于8，3移走",
                        "x等于11除以2"
                    ],
                    "answer": "方程2x+3=11",
                    "explain": "关键是给定方程2x+3=11，通过移项和除以系数来求解x。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "2x=11-3=8，x=8÷2=4",
                        "2x=11+3=14，x=7",
                        "x=11-3=8",
                        "2x=11，x=5.5"
                    ],
                    "answer": "2x=11-3=8，x=8÷2=4",
                    "explain": "移项要变号：2x=11-3=8，再两边除以2得x=4。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把方程当一台天平：左边2x加3、右边11，先拿走3使2x=8，再把8平均分成2份，每份4就是x。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "移项变号后2x=11-3=8，两边同除2得x=4。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解一元一次方程把含x项放一边、常数放另一边，移项要变号，最后除以系数，即移项→合并→除系数，适用各类一次方程。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "某数的3倍减去5等于19。小红列方程求这个数。",
            "question": "这个数是多少？",
            "formula": "3x-5=19, x=8",
            "answer": 8,
            "choices": [
                8,
                6,
                9,
                7
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 19,
                "points": [
                    {
                        "pos": 8,
                        "label": "x",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 19,
                        "label": "结果",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    8,
                    19
                ]
            },
            "knowledge": "一元一次方程应用",
            "difficulty": 2,
            "hint": "(19+5)/3 = 8",
            "variants": [
                {
                    "question": "某数加7等于15，这个数？",
                    "formula": "x+7=15,x=8",
                    "answer": 8,
                    "hint": "直接相减"
                },
                {
                    "question": "某数的2倍加4等于20，这个数？",
                    "formula": "2x+4=20,x=8",
                    "answer": 8,
                    "hint": "(20-4)/2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这个数是多少",
                        "这个数的3倍是多少",
                        "减去5还剩多少",
                        "方程里的常数是多少"
                    ],
                    "answer": "这个数是多少",
                    "explain": "场景某数的3倍减去5等于19，要列方程求出这个未知数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "某数的3倍减去5等于19",
                        "某数加5等于19",
                        "某数的3倍加5等于19",
                        "某数就等于19减5"
                    ],
                    "answer": "某数的3倍减去5等于19",
                    "explain": "关键关系式是3x-5=19，把它整理后即可求x。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "3x=19+5=24，x=8",
                        "3x=19-5=14，x=14÷3",
                        "x=19-5=14",
                        "3x=19，x=19÷3"
                    ],
                    "answer": "3x=19+5=24，x=8",
                    "explain": "移项得3x=19+5=24，再两边除以3得x=8。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "用数轴倒推：先看19加回5到24，再把24平均分成3份，每份8就是这个未知数，反着走每一步。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "题意化为3x-5=19，移项得3x=24，除以3得x=8。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "文字题先设未知数、按题意列等式，再用逆运算或移项倒推，乘除互逆、加减互逆，求得未知数，适用一切倍数加、减类方程题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "数轴上有一点在-3的位置，小红让它向右移动7个单位，想确定它现在的位置。",
            "question": "移动后点位于哪个数？",
            "formula": "-3 + 7 = ?",
            "answer": 4,
            "choices": [
                4,
                -4,
                10,
                -10
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -3,
                "end": 4,
                "points": [
                    {
                        "pos": -3,
                        "label": "起点",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 4,
                        "label": "终点",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -3,
                    4
                ]
            },
            "knowledge": "数轴上的点移动",
            "difficulty": 1,
            "hint": "向右移动做加法",
            "variants": [
                {
                    "question": "从-5向右移动9个单位到？",
                    "formula": "-5+9=?",
                    "answer": 4,
                    "hint": "向右是加"
                },
                {
                    "question": "从2向左移动6个单位到？",
                    "formula": "2-6=?",
                    "answer": -4,
                    "hint": "向左是减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "移动后点位于哪个数",
                        "原来点的位置是什么",
                        "向右移动了几格",
                        "移动的方向是什么"
                    ],
                    "answer": "移动后点位于哪个数",
                    "explain": "场景中-3位置的数轴点向右移动7个单位，要确定它的新位置。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "起点是-3，向右移动7个单位",
                        "起点是3，向左移动7格",
                        "起点是7，向右移动-3格",
                        "起点-3移动到了-10"
                    ],
                    "answer": "起点是-3，向右移动7个单位",
                    "explain": "关键信息是起点-3和向右平移7格。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "-3 + 7 = 4",
                        "-3 - 7 = -10",
                        "3 + 7 = 10",
                        "-3 + 7 = 10"
                    ],
                    "answer": "-3 + 7 = 4",
                    "explain": "向右移动做加法：-3+7=4，落点在4。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "从-3这个点向右跨7格，一格一格数过去，跨过0后在右边第4格停下，即位置4。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "数轴上向右加、向左减，-3+7=4，答案4。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "数轴移动按方向定加减：向右加、向左减，格数就是移动量，起点求和得终点，适用一切数轴和平移类移动题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个角是35度，小红想算出它的余角（与它相加等于90度的角）。",
            "question": "这个角的余角是多少度？",
            "formula": "90 - 35 = ?",
            "answer": 55,
            "choices": [
                55,
                65,
                45,
                145
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 90,
                "points": [
                    {
                        "pos": 35,
                        "label": "已知角",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 55,
                        "label": "余角",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    35,
                    55
                ]
            },
            "knowledge": "余角与补角",
            "difficulty": 1,
            "hint": "两角之和为90度，它们互为余角",
            "variants": [
                {
                    "question": "一个角50度，余角？",
                    "formula": "90-50=?",
                    "answer": 40,
                    "hint": "90减已知角"
                },
                {
                    "question": "一个角25度，余角？",
                    "formula": "90-25=?",
                    "answer": 65,
                    "hint": "直接相减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这个角的余角是多少度",
                        "这个角本身是多少度",
                        "这个角的补角是多少度",
                        "两个角的和是多少"
                    ],
                    "answer": "这个角的余角是多少度",
                    "explain": "场景要求与35度角相加等于90度的那个角，即余角的度数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "一个角是35度，求它的余角",
                        "一个角是55度，求补角",
                        "一个角是90度，求余角",
                        "一个角是145度，求余角"
                    ],
                    "answer": "一个角是35度，求它的余角",
                    "explain": "关键信息是这个角为35度，余角与它的和为90度。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "90 - 35 = 55",
                        "180 - 35 = 145",
                        "90 + 35 = 125",
                        "90 - 55 = 35"
                    ],
                    "answer": "90 - 35 = 55",
                    "explain": "两角之和为90度互为余角，余角=90-35=55度。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把90度看作直角度盘的满量，35度占掉一段，剩下的55度就是余角，像在量角器上挖去一段看剩余。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "余角之和为90、补角之和为180，35度的余角=90-35=55。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "互为余角两角和为90、互为补角和为180，已知一角求另一角用90或180减去该角，适用所有余补角计算。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个角恰好是它余角的2倍。小红想算出这个角是多少度。",
            "question": "这个角是多少度？",
            "formula": "x = 2(90-x), 3x = 180, x = 60",
            "answer": 60,
            "choices": [
                60,
                45,
                30,
                70
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 90,
                "points": [
                    {
                        "pos": 60,
                        "label": "这个角",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 30,
                        "label": "余角",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    60,
                    30
                ]
            },
            "knowledge": "角的计算",
            "difficulty": 2,
            "hint": "设角为x，x=2(90-x)，解得x=60",
            "variants": [
                {
                    "question": "一个角是补角的一半，这个角？",
                    "formula": "x=(180-x)/2,x=60",
                    "answer": 60,
                    "hint": "设和为180"
                },
                {
                    "question": "两角互余且相等，各多少度？",
                    "formula": "2x=90,x=45",
                    "answer": 45,
                    "hint": "各占一半"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这个角是多少度",
                        "这个角的余角是多少度",
                        "这个角的2倍是多少度",
                        "余角比这个角大多少"
                    ],
                    "answer": "这个角是多少度",
                    "explain": "场景这个角恰好是它余角的2倍，要求这个角的大小。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "这个角是它余角的2倍",
                        "这个角等于90度的一半",
                        "这个角是补角的2倍",
                        "余角是这个角的2倍"
                    ],
                    "answer": "这个角是它余角的2倍",
                    "explain": "关键关系是这个角x等于它的余角（90-x）的2倍。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "x=2(90-x)，3x=180，x=60",
                        "x=2(90-x)，x=180-2x得x=90",
                        "x=90-2x，得x=45",
                        "x=2x，即余角为0"
                    ],
                    "answer": "x=2(90-x)，3x=180，x=60",
                    "explain": "设角为x，x=2(90-x)，展开x=180-2x得3x=180，所以x=60度。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角90度被分成角x与余角两部分，角占两倍份额，画成三段时角占两段，每段30度、两段共60。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "列方程x=2(90-x)，去括号x=180-2x，移项3x=180得x=60。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "遇到某个角是另一个角的若干倍且和为90或180时，设未知数列方程求解，利用倍数与和的关系建立等式，适用倍角、差角问题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "线段 AB 长5厘米，点 B 在点 A 与点 C 之间且 BC 长7厘米。小刚想求线段 AC 的总长。",
            "question": "线段 AC 长多少厘米？",
            "formula": "AB + BC = 5 + 7 = ?",
            "answer": 12,
            "choices": [
                12,
                2,
                7,
                10
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 12,
                "points": [
                    {
                        "pos": 5,
                        "label": "B",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 12,
                        "label": "C",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    0,
                    12
                ]
            },
            "knowledge": "线段的和差",
            "difficulty": 1,
            "hint": "总长=两段之和",
            "variants": [
                {
                    "question": "AB=8，BC=9，B在中间，AC=? ",
                    "formula": "8+9=?",
                    "answer": 17,
                    "hint": "两段相加"
                },
                {
                    "question": "AB=20，BC=13，B在中间，AC=? ",
                    "formula": "20+13=?",
                    "answer": 33,
                    "hint": "线段和"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "线段AC长多少厘米",
                        "线段AB长多少厘米",
                        "BC比AB长多少",
                        "两条线段是否相等"
                    ],
                    "answer": "线段AC长多少厘米",
                    "explain": "场景点B在AC之间，AB=5厘米、BC=7厘米，要求整个AC的长度。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "AB长5厘米，BC长7厘米",
                        "AB长7厘米，BC长5厘米",
                        "AB长12厘米，BC长5厘米",
                        "AC本身长7厘米"
                    ],
                    "answer": "AB长5厘米，BC长7厘米",
                    "explain": "关键信息是中间点B把AC分成AB=5和BC=7两段。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "AB+BC=5+7=12",
                        "BC-AB=7-5=2",
                        "AB=5，AC就等于7",
                        "AB×BC=35"
                    ],
                    "answer": "AB+BC=5+7=12",
                    "explain": "总长等于两段之和，AC=AB+BC=5+7=12厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把线段画成一条整段，A到B为5格、B到C为7格，两段首尾相接的总长就是AC，共12格。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "点在中间时把线段分段相加，AC=AB+BC=5+7=12。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "一条线段被中间点分成两段，总长等于两段之和；已知总长与一段可求另一段，适用所有线段和差与折线长度问题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "六（1）班共40人，其中男生25人。老师想知道男生人数占全班的百分之几。",
            "question": "男生占全班的百分之几？",
            "formula": "25 / 40 = 62.5%",
            "answer": 62.5,
            "choices": [
                62.5,
                60,
                65,
                58
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 40,
                "parts": [
                    {
                        "label": "男生",
                        "val": 25,
                        "color": "#2563EB"
                    },
                    {
                        "label": "女生",
                        "val": 15,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "统计与百分比",
            "difficulty": 2,
            "hint": "百分比=部分÷总数×100%",
            "variants": [
                {
                    "question": "50人中30人是女生，占多少？",
                    "formula": "30/50=60%",
                    "answer": 60,
                    "hint": "部分除以总数"
                },
                {
                    "question": "80人中20人及格，及格率？",
                    "formula": "20/80=25%",
                    "answer": 25,
                    "hint": "及格人数除以总人数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "男生占全班的百分之几",
                        "全班的女生人数",
                        "男生比女生多几人",
                        "全班共有多少人"
                    ],
                    "answer": "男生占全班的百分之几",
                    "explain": "场景六(1)班共40人、其中男生25人，要求男生人数占全班的百分比。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "全班40人，男生25人",
                        "全班25人，男生40人",
                        "男生占40人里的20人",
                        "全班共65人"
                    ],
                    "answer": "全班40人，男生25人",
                    "explain": "关键信息是总数40人和男生25人。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "25÷40×100%=62.5%",
                        "40÷25×100%=160%",
                        "25+40=65，占65%",
                        "25÷40=0.6=60%"
                    ],
                    "answer": "25÷40×100%=62.5%",
                    "explain": "百分比=部分÷总数×100%，25÷40=0.625，即62.5%。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图把全班40人当作一整条，其中男生25人占一段，男生段占整条的25/40，折算成百分之就是62.5%。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "占比=男生÷全班=25÷40=0.625=62.5%。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "部分占整体的百分之几用部分÷整体×100%，得数是百分数，适用及格率、出勤率、占比统计等一切百分比问题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "把120元按3:2分给甲、乙两人。小红想算出甲应分得多少元。",
            "question": "甲分得多少元？",
            "formula": "120 * 3 / (3+2) = ?",
            "answer": 72,
            "choices": [
                72,
                48,
                60,
                80
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 120,
                "parts": [
                    {
                        "label": "甲(3份)",
                        "val": 72,
                        "color": "#00A896"
                    },
                    {
                        "label": "乙(2份)",
                        "val": 48,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "比例分配",
            "difficulty": 2,
            "hint": "先求每份：120÷(3+2)=24，再乘3",
            "variants": [
                {
                    "question": "100元按4:1分，多得几分多少？",
                    "formula": "100*4/5=?",
                    "answer": 80,
                    "hint": "每份20元"
                },
                {
                    "question": "90元按2:1分，多得几分多少？",
                    "formula": "90*2/3=?",
                    "answer": 60,
                    "hint": "每份30元"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "甲应分得多少元",
                        "乙应分得多少元",
                        "两人一共得到多少元",
                        "两人相差多少元"
                    ],
                    "answer": "甲应分得多少元",
                    "explain": "场景把120元按3:2分给甲、乙，要求甲（占3份）应分得的钱数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "总额120元，按3:2分给甲和乙",
                        "甲和乙各得60元",
                        "总额120元，按1:2分",
                        "120元按3:1分"
                    ],
                    "answer": "总额120元，按3:2分给甲和乙",
                    "explain": "关键信息是总数120元和甲乙份数比3:2。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "120÷(3+2)=24，24×3=72",
                        "120÷5=24，甲就只得24",
                        "120÷(3+2)=24，24×2=48",
                        "120÷3=40"
                    ],
                    "answer": "120÷(3+2)=24，24×3=72",
                    "explain": "先求每份：120÷(3+2)=24，甲占3份得24×3=72元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把120元画成5等条，3条归甲、2条归乙，每份24元，甲占3份共72元，比例关系一目了然。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总份数3+2=5，每份120÷5=24，甲得24×3=72。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "按比例分配先求总份数，再总数÷总份数得每份，每份×各得份数即该部分量，适用按人数、比例分钱分物的一切问题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        }
    ]
};
