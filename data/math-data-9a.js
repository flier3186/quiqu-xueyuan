window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["9a"] = {
    "title": "九年级上册·一元二次方程·二次函数",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
        {
            "id": "9A-01",
            "name": "二次函数概念",
            "concept": "y=ax²+bx+c(a≠0)的图象是抛物线",
            "prerequisite": "8A-02",
            "extends": "9A-02 二次函数图象与性质",
            "visualStrategy": "坐标系抛物线",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "9A-02",
            "name": "二次函数图象与性质",
            "concept": "开口方向由a决定，顶点坐标为(-b/2a, (4ac-b²)/4a)",
            "prerequisite": "9A-01",
            "extends": "9A-03 二次函数与方程",
            "visualStrategy": "动态抛物线",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-03",
            "name": "二次函数与方程",
            "concept": "二次函数图象与x轴交点的横坐标是对应方程的根",
            "prerequisite": "9A-02",
            "extends": "9A-04 二次函数最值",
            "visualStrategy": "交点分析",
            "visualType": "numberLine",
            "coreLiteracy": "数形结合",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-04",
            "name": "二次函数最值",
            "concept": "a>0时顶点为最小值点，a<0时顶点为最大值点",
            "prerequisite": "9A-03",
            "extends": "9A-05 二次不等式",
            "visualStrategy": "最值分析",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "9A-05",
            "name": "二次不等式",
            "concept": "ax²+bx+c>0的解集与抛物线在x轴上方部分对应",
            "prerequisite": "9A-04",
            "extends": "9A-06 二次函数的应用",
            "visualStrategy": "不等式区间",
            "visualType": "numberLine",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "9A-06",
            "name": "二次函数的应用",
            "concept": "用二次函数模型解决实际问题，如面积最大、利润最大",
            "prerequisite": "9A-05",
            "extends": "9A-07 锐角三角函数",
            "visualStrategy": "实际应用",
            "visualType": "numberLine",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-07",
            "name": "锐角三角函数",
            "concept": "sinA=对边/斜边，cosA=邻边/斜边，tanA=对边/邻边",
            "prerequisite": "7B-06",
            "extends": "9A-08 特殊角的三角函数值",
            "visualStrategy": "直角三角形",
            "visualType": "geometry",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "9A-08",
            "name": "特殊角的三角函数值",
            "concept": "sin30°=1/2, cos30°=√3/2, tan30°=√3/3",
            "prerequisite": "9A-07",
            "extends": "9A-09 解直角三角形",
            "visualStrategy": "特殊角对照",
            "visualType": "geometry",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "9A-09",
            "name": "解直角三角形",
            "concept": "已知两边或一边一角可解直角三角形",
            "prerequisite": "9A-08",
            "extends": "9A-10 三角函数的应用",
            "visualStrategy": "三角形求解",
            "visualType": "geometry",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-10",
            "name": "三角函数的应用",
            "concept": "用三角函数解决测量问题，如高度、距离计算",
            "prerequisite": "9A-09",
            "extends": "9A-11 弧长与扇形面积",
            "visualStrategy": "实际测量",
            "visualType": "geometry",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "9A-11",
            "name": "弧长与扇形面积",
            "concept": "l=nπr/180, S=nπr²/360",
            "prerequisite": "8A-15",
            "extends": "9A-12 圆锥的侧面展开图",
            "visualStrategy": "扇形展开",
            "visualType": "geometry",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "9A-12",
            "name": "圆锥的侧面展开图",
            "concept": "圆锥侧面展开是扇形，扇形半径=圆锥母线长",
            "prerequisite": "9A-11",
            "extends": "9A-13 旋转体体积",
            "visualStrategy": "展开图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "9A-13",
            "name": "旋转体体积",
            "concept": "圆锥体积=1/3·底面积·高",
            "prerequisite": "9A-12",
            "extends": "9A-14 投影与视图",
            "visualStrategy": "立体展开",
            "visualType": "geometry",
            "coreLiteracy": "空间观念",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "9A-14",
            "name": "投影与视图",
            "concept": "正投影得到三视图：主视图、俯视图、左视图",
            "prerequisite": "9A-13",
            "extends": "9A-15 相似三角形的判定",
            "visualStrategy": "三视图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "9A-15",
            "name": "相似三角形的判定",
            "concept": "两角对应相等、两边成比例夹角相等、三边成比例",
            "prerequisite": "8A-08",
            "extends": "9A-16 位似与相似",
            "visualStrategy": "判定对比",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-16",
            "name": "位似与相似",
            "concept": "位似是特殊的相似，位似中心到对应点的比等于位似比",
            "prerequisite": "9A-15",
            "extends": "9A-17 圆的切线长定理",
            "visualStrategy": "位似变换",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "9A-17",
            "name": "圆的切线长定理",
            "concept": "从圆外一点引圆的两条切线，切线长相等",
            "prerequisite": "8A-14",
            "extends": "9B-01 圆的方程",
            "visualStrategy": "切线作图",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "9A-18",
            "name": "圆锥侧面积",
            "concept": "侧面积=πrl，r为底面半径，l为母线长",
            "prerequisite": "9A-11",
            "extends": "9B-14 圆锥侧面积",
            "visualStrategy": "展开图",
            "visualType": "geometry",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "9A-19",
            "name": "一元二次方程的应用",
            "concept": "用一元二次方程解决实际问题，如面积、利润、增长率问题",
            "prerequisite": "9A-01",
            "extends": "9A-20 二次函数与方程的关系",
            "visualStrategy": "方程建模",
            "visualType": "numberLine",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-20",
            "name": "二次函数与方程的关系",
            "concept": "二次函数与x轴交点的横坐标是一元二次方程的根",
            "prerequisite": "9A-18",
            "extends": "9A-21 二次函数的图象与性质",
            "visualStrategy": "函数图象",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-21",
            "name": "二次函数的图象与性质",
            "concept": "抛物线的开口方向、顶点坐标、对称轴",
            "prerequisite": "9A-20",
            "extends": "9A-22 二次函数的最值问题",
            "visualStrategy": "动态图象",
            "visualType": "numberLine",
            "coreLiteracy": "数形结合",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-22",
            "name": "二次函数的最值问题",
            "concept": "求二次函数在给定区间上的最大值和最小值",
            "prerequisite": "9A-21",
            "extends": "9A-23 二次函数与几何综合",
            "visualStrategy": "最值分析",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-23",
            "name": "二次函数与几何综合",
            "concept": "用二次函数解决几何中的最值与存在性问题",
            "prerequisite": "9A-22",
            "extends": "9A-24 反比例函数与一次函数综合",
            "visualStrategy": "函数综合",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "9A-24",
            "name": "反比例函数与一次函数综合",
            "concept": "反比例函数与一次函数的交点问题",
            "prerequisite": "9A-23",
            "extends": "9B-01 反比例函数综合",
            "visualStrategy": "函数交点",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 3,
            "isKeyTopic": true
        }
    ],
    "units": [
        {
            "name": "一元二次方程",
            "level": "current",
            "children": [
                {
                    "name": "方程概念",
                    "level": "done"
                },
                {
                    "name": "因式分解法",
                    "level": "current"
                },
                {
                    "name": "求根公式",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "二次函数",
            "level": "locked",
            "children": [
                {
                    "name": "二次函数图像",
                    "level": "locked"
                },
                {
                    "name": "二次函数性质",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "旋转",
            "level": "locked",
            "children": [
                {
                    "name": "旋转性质",
                    "level": "locked"
                },
                {
                    "name": "中心对称",
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
                    "name": "弧长与扇形",
                    "level": "locked"
                }
            ]
        }
    ],
    "problems": [
        {
            "scene": "小明解方程 x^2 - 5x + 6 = 0，想知道两个根分别是多少。",
            "question": "方程的两个根是多少？",
            "formula": "(x-2)(x-3)=0, x1=2 x2=3",
            "answer": "x1=2, x2=3",
            "choices": [
                "x1=2, x2=3",
                "x1=-2, x2=-3",
                "x1=1, x2=6",
                "x1=3, x2=-2"
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 6,
                "points": [
                    {
                        "pos": 2,
                        "label": "x1",
                        "color": "#00A896"
                    },
                    {
                        "pos": 3,
                        "label": "x2",
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "一元二次方程",
            "difficulty": 2,
            "hint": "因式分解 (x-2)(x-3)=0",
            "variants": [
                {
                    "question": "解方程 x^2-3x+2=0",
                    "formula": "(x-1)(x-2)=0",
                    "answer": 1,
                    "hint": "因式分解"
                },
                {
                    "question": "解方程 x^2-4x+4=0",
                    "formula": "(x-2)^2=0",
                    "answer": 2,
                    "hint": "完全平方"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求方程的两个根",
                        "求方程的系数",
                        "求方程有几个解",
                        "求方程的常数项"
                    ],
                    "answer": "求方程的两个根",
                    "explain": "题目问方程 x²-5x+6=0 的两个根分别是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "方程是 x²-5x+6=0，可因式分解",
                        "方程只有一个根",
                        "方程是 x²+5x+6=0",
                        "根是 0 和 6"
                    ],
                    "answer": "方程是 x²-5x+6=0，可因式分解",
                    "explain": "a=1, b=-5, c=6，常数项6可分解为(-2)×(-3)"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "因式分解 (x-2)(x-3)=0，得 x1=2, x2=3",
                        "直接开平方",
                        "两边同时除以 x",
                        "配方解出 x=5"
                    ],
                    "answer": "因式分解 (x-2)(x-3)=0，得 x1=2, x2=3",
                    "explain": "两个因式乘积为0，则至少一个为0：x-2=0 得 x=2，x-3=0 得 x=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴：两个根 x1=2、x2=3 在数轴上的位置",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "一元二次方程 x²-5x+6=0 因式分解为 (x-2)(x-3)=0，乘积为0则每个因式可为0，解得 x=2 或 x=3",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "因式分解法解一元二次方程：先把方程化为 (x-p)(x-q)=0 的形式，再令每个因式为0",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个抛物线形拱桥，跨度20米，最高点离水面8米。小红想建立坐标系求抛物线方程。",
            "question": "抛物线顶点坐标是多少？",
            "formula": "顶点=(10,8)",
            "answer": "(10,8)",
            "choices": [
                "(10,8)",
                "(8,10)",
                "(10,-8)",
                "(20,8)"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parabola",
                "params": {
                    "vertex": [
                        10,
                        8
                    ],
                    "width": 20
                }
            },
            "knowledge": "二次函数图像",
            "difficulty": 3,
            "hint": "跨度20米，顶点在中间上方8米",
            "variants": [
                {
                    "question": "抛物线顶点(3,5)过点(0,-4)，求方程",
                    "formula": "y=a(x-3)^2+5, a=-1",
                    "answer": -1,
                    "hint": "代入点求a"
                },
                {
                    "question": "抛物线y=x^2-4x+3的顶点坐标？",
                    "formula": "x=-b/2a=2, y=4-8+3=-1",
                    "answer": "(2,-1)",
                    "hint": "顶点公式"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求抛物线的顶点坐标",
                        "求拱桥的长度",
                        "求抛物线的解析式",
                        "求拱桥的宽度"
                    ],
                    "answer": "求抛物线的顶点坐标",
                    "explain": "题目问拱桥抛物线顶点坐标是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "跨度20米，最高点离水面8米",
                        "跨度10米，最高点8米",
                        "最高点离水面20米",
                        "只有跨度数据"
                    ],
                    "answer": "跨度20米，最高点离水面8米",
                    "explain": "跨度20米→对称轴在中点 x=10；最高点离水面8米→顶点纵坐标8"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "顶点=对称轴位置和最高高度：(10,8)",
                        "(20,8)",
                        "(8,10)",
                        "(10,20)"
                    ],
                    "answer": "顶点=对称轴位置和最高高度：(10,8)",
                    "explain": "抛物线对称轴在跨度中间 x=10，顶点最高处 y=8"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "抛物线图形：顶点在拱的最高点，横坐标是跨度的中点",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "跨度20米→顶点横坐标是它的一半10；最高点离水面8米→顶点纵坐标8",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "实际问题中的抛物线顶点：顶点横坐标=对称轴位置，顶点纵坐标=最大值或最小值",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明把一根长40厘米的铁丝弯成一个矩形，使面积最大。他想算出这个矩形的长和宽。",
            "question": "面积最大时长和宽各是多少？",
            "formula": "长=宽=10厘米，面积=100平方厘米",
            "answer": "长10厘米，宽10厘米",
            "choices": [
                "长10厘米，宽10厘米",
                "长12厘米，宽8厘米",
                "长15厘米，宽5厘米",
                "长9厘米，宽11厘米"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 10,
                    "width": 10
                }
            },
            "knowledge": "二次函数最值",
            "difficulty": 3,
            "hint": "周长固定时正方形面积最大：边长=40÷4=10厘米",
            "variants": [
                {
                    "question": "周长36厘米的矩形，面积最大时边长是多少？",
                    "formula": "边长=36÷4=9厘米",
                    "answer": "9厘米",
                    "hint": "正方形面积最大，边长=36÷4=9"
                },
                {
                    "question": "周长24米的矩形，面积最大是多少？",
                    "formula": "边长=6, 面积=36",
                    "answer": 36,
                    "hint": "正方形面积最大"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求面积最大时矩形的长和宽",
                        "求铁丝的总长度",
                        "求矩形的面积",
                        "求矩形的周长"
                    ],
                    "answer": "求面积最大时矩形的长和宽",
                    "explain": "40厘米铁丝围成矩形，问面积最大时长和宽各是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "铁丝总长40厘米，围成矩形",
                        "铁丝长100厘米",
                        "矩形长10宽30",
                        "面积是100平方厘米"
                    ],
                    "answer": "铁丝总长40厘米，围成矩形",
                    "explain": "铁丝长度=矩形周长=40厘米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "周长固定时正方形面积最大：40÷4=10，长=宽=10",
                        "长20宽20",
                        "长30宽10",
                        "任意长宽都一样"
                    ],
                    "answer": "周长固定时正方形面积最大：40÷4=10，长=宽=10",
                    "explain": "周长40固定，长+宽=20，两数和固定时两数相等积最大，即长=宽=10厘米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "矩形图：长10宽10的正方形，面积100平方厘米",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "周长40固定，长+宽=20。两数和固定时，两数越接近乘积越大，相等时最大，所以长=宽=10",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "周长固定的矩形中，正方形面积最大（二次函数最值问题）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个圆的半径是5厘米，小明想算出它的周长和面积。",
            "question": "圆的周长和面积各是多少？",
            "formula": "周长=2×3.14×5≈31.4厘米，面积=3.14×5²≈78.5平方厘米",
            "answer": "周长约31.4厘米，面积约78.5平方厘米",
            "choices": [
                "周长约31.4厘米，面积约78.5平方厘米",
                "周长约78.5厘米，面积约31.4平方厘米",
                "周长约15.7厘米，面积约31.4平方厘米",
                "周长约31.4厘米，面积约15.7平方厘米"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "radius": 5
                }
            },
            "knowledge": "圆的周长与面积",
            "difficulty": 2,
            "hint": "C=2πr，S=πr²",
            "variants": [
                {
                    "question": "圆半径3厘米，周长和面积？",
                    "formula": "C=2π×3≈18.8, S=π×3²≈28.3",
                    "answer": "周长约18.8厘米，面积约28.3平方厘米",
                    "hint": "C=2πr, S=πr²"
                },
                {
                    "question": "圆直径10厘米，面积？",
                    "formula": "r=5, S=25π≈78.5",
                    "answer": 78.5,
                    "hint": "先求半径再代面积公式"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求圆的周长和面积",
                        "只求圆的半径",
                        "求圆的直径",
                        "只求圆的面积"
                    ],
                    "answer": "求圆的周长和面积",
                    "explain": "题目问半径5厘米的圆的周长和面积各是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径是5厘米",
                        "半径是10厘米",
                        "直径是5厘米",
                        "周长是5厘米"
                    ],
                    "answer": "半径是5厘米",
                    "explain": "已知圆的半径 r=5 厘米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "C=2πr≈31.4，S=πr²≈78.5",
                        "C=πr，S=2πr",
                        "C=πr²",
                        "C=2πr²"
                    ],
                    "answer": "C=2πr≈31.4，S=πr²≈78.5",
                    "explain": "周长=2×3.14×5=31.4；面积=3.14×25=78.5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "圆形图：半径5厘米的圆",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "周长公式 C=2πr 求圆一周的长度，面积公式 S=πr² 求圆面的大小",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知半径求周长和面积：C=2πr、S=πr²，π取3.14",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明将点A(2,3)绕原点顺时针旋转90度，想知道旋转后的坐标。",
            "question": "旋转后的坐标是多少？",
            "formula": "(x,y)->(y,-x), (2,3)->(3,-2)",
            "answer": "(3,-2)",
            "choices": [
                "(3,-2)",
                "(-3,2)",
                "(2,-3)",
                "(-2,-3)"
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 5,
                "points": [
                    {
                        "pos": 2,
                        "label": "A",
                        "color": "#00A896"
                    },
                    {
                        "pos": 3,
                        "label": "A'",
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "图形旋转",
            "difficulty": 3,
            "hint": "顺时针90度：(x,y)->(y,-x)",
            "variants": [
                {
                    "question": "点(1,2)逆时针旋转90度后的坐标？",
                    "formula": "(x,y)→(-y,x), (1,2)→(-2,1)",
                    "answer": "(-2,1)",
                    "hint": "逆时针90度公式"
                },
                {
                    "question": "点(3,4)绕原点旋转180度后的坐标？",
                    "formula": "(x,y)→(-x,-y), (3,4)→(-3,-4)",
                    "answer": "(-3,-4)",
                    "hint": "180度旋转公式"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求旋转后点的坐标",
                        "求旋转的角度",
                        "求点的距离",
                        "只求横坐标"
                    ],
                    "answer": "求旋转后点的坐标",
                    "explain": "点A(2,3)绕原点顺时针旋转90度，问旋转后坐标"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "点A(2,3)绕原点顺时针旋转90度",
                        "点A(2,3)绕原点逆时针旋转",
                        "点A绕点(2,3)旋转",
                        "旋转180度"
                    ],
                    "answer": "点A(2,3)绕原点顺时针旋转90度",
                    "explain": "旋转中心是原点，方向是顺时针，角度90度"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "顺时针90度公式：(x,y)→(y,-x)，得(3,-2)",
                        "(x,y)→(-y,x)",
                        "(x,y)→(-x,-y)",
                        "坐标保持不变"
                    ],
                    "answer": "顺时针90度公式：(x,y)→(y,-x)，得(3,-2)",
                    "explain": "顺时针旋转90度，横纵坐标互换且新纵坐标取相反数：(2,3)→(3,-2)"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "坐标系：点A(2,3)绕原点顺时针转90°到(3,-2)",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "顺时针90°：(x,y)→(y,-x)，即x、y互换后新的y取相反数",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "旋转坐标公式：顺时针90°(y,-x)、逆时针90°(-y,x)、180°(-x,-y)",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明解方程 x^2 - 4x - 5 = 0，他想知道两个根分别是多少。",
            "question": "方程的两个根是多少？",
            "formula": "(x-5)(x+1)=0, x1=5, x2=-1",
            "answer": "x1=5, x2=-1",
            "choices": [
                "x1=5, x2=-1",
                "x1=-5, x2=1",
                "x1=5, x2=1",
                "x1=-5, x2=-1"
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -6,
                "end": 6,
                "points": [
                    {
                        "pos": -1,
                        "label": "x1",
                        "color": "#00A896"
                    },
                    {
                        "pos": 5,
                        "label": "x2",
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "一元二次方程因式分解",
            "difficulty": 2,
            "hint": "寻找两个数，乘积为-5，和为-4",
            "variants": [
                {
                    "question": "解方程 x^2-2x-3=0",
                    "formula": "(x-3)(x+1)=0",
                    "answer": "x1=3, x2=-1",
                    "hint": "因式分解"
                },
                {
                    "question": "解方程 x^2-7x+12=0",
                    "formula": "(x-3)(x-4)=0",
                    "answer": "x1=3, x2=4",
                    "hint": "寻找两数积12和-7"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求方程的两个根",
                        "求方程的判别式",
                        "求方程有几个解",
                        "求方程的系数"
                    ],
                    "answer": "求方程的两个根",
                    "explain": "题目问方程 x²-4x-5=0 的两个根分别是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "方程是 x²-4x-5=0",
                        "方程是 x²-4x+5=0",
                        "常数项是4",
                        "两个根相等"
                    ],
                    "answer": "方程是 x²-4x-5=0",
                    "explain": "a=1, b=-4, c=-5，需找两个数使积为-5、和为4"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "因式分解 (x-5)(x+1)=0，得 x1=5, x2=-1",
                        "直接开平方得 x=5",
                        "只解出 x=-1",
                        "无解"
                    ],
                    "answer": "因式分解 (x-5)(x+1)=0，得 x1=5, x2=-1",
                    "explain": "乘积为0则因式为0：x-5=0 得 x=5；x+1=0 得 x=-1"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴：两个根 x1=5、x2=-1",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "找两个数，乘积=-5、和为4：是5和-1，所以 (x-5)(x+1)=0，解得 x=5 或 x=-1",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "十字相乘法：把常数项分解成两数之积，使两数之和等于一次项系数（带符号）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "抛物线y=x²-4x+3与x轴的交点坐标是多少？小红想知道这两个交点。",
            "question": "抛物线与x轴的交点横坐标分别是多少？",
            "formula": "x²-4x+3=0, (x-1)(x-3)=0",
            "answer": "x1=1, x2=3",
            "choices": [
                "x1=1, x2=3",
                "x1=-1, x2=-3",
                "x1=1, x2=-3",
                "x1=-1, x2=3"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parabola",
                "params": {
                    "vertex": [
                        2,
                        -1
                    ],
                    "roots": [
                        1,
                        3
                    ]
                }
            },
            "knowledge": "二次函数与x轴交点",
            "difficulty": 3,
            "hint": "令y=0，解一元二次方程",
            "variants": [
                {
                    "question": "抛物线y=x²-5x+6与x轴交点",
                    "formula": "x²-5x+6=0, (x-2)(x-3)=0",
                    "answer": "x1=2, x2=3",
                    "hint": "因式分解"
                },
                {
                    "question": "抛物线y=x²-2x-3与x轴交点",
                    "formula": "x²-2x-3=0, (x-3)(x+1)=0",
                    "answer": "x1=3, x2=-1",
                    "hint": "因式分解"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求抛物线与x轴的交点横坐标",
                        "求抛物线的顶点",
                        "求抛物线的开口方向",
                        "求抛物线的解析式"
                    ],
                    "answer": "求抛物线与x轴的交点横坐标",
                    "explain": "题目问抛物线 y=x²-4x+3 与x轴的交点横坐标"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "抛物线 y=x²-4x+3",
                        "抛物线与y轴的交点",
                        "顶点是(2,-1)",
                        "开口向下"
                    ],
                    "answer": "抛物线 y=x²-4x+3",
                    "explain": "与x轴交点处 y=0，令 x²-4x+3=0"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "令y=0，因式分解 (x-1)(x-3)=0，得 x1=1, x2=3",
                        "(x+1)(x+3)=0",
                        "直接读顶点",
                        "图像与x轴不相交"
                    ],
                    "answer": "令y=0，因式分解 (x-1)(x-3)=0，得 x1=1, x2=3",
                    "explain": "y=0 时 (x-1)(x-3)=0，x=1 或 x=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "抛物线图像：与x轴交于 x=1 和 x=3",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "抛物线与x轴交点的横坐标就是方程 ax²+bx+c=0 的根",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "二次函数与方程：令 y=0 解一元二次方程，根就是交点的横坐标",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个矩形花园长20米宽15米，小红想围绕花园修一条宽度相同的小路，使花园加小路总面积为450平方米。她想算出小路的宽度。",
            "question": "小路宽度是多少米？",
            "formula": "(20+2x)(15+2x)=450, 解得 x≈1.93",
            "answer": 1.9,
            "choices": [
                1.9,
                2.5,
                5,
                3
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 20,
                    "width": 15,
                    "pathWidth": 1.9
                }
            },
            "knowledge": "一元二次方程应用",
            "difficulty": 3,
            "hint": "设小路宽x米，(20+2x)(15+2x)=450，展开得4x²+70x-150=0，取正根x≈1.93",
            "variants": [
                {
                    "question": "长方形长10宽8，修路后面积144，路宽？",
                    "formula": "(10+2x)(8+2x)=144, x≈1.5",
                    "answer": 1.5,
                    "hint": "解方程求x：x²+9x-16=0，x≈1.52"
                },
                {
                    "question": "正方形地边长20，修路后面积576，路宽？",
                    "formula": "(20+2x)²=576, x=2",
                    "answer": 2,
                    "hint": "(20+2x)=24，x=2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求小路的宽度",
                        "求花园的面积",
                        "求加路后的总面积",
                        "求花园的长和宽"
                    ],
                    "answer": "求小路的宽度",
                    "explain": "花园加等宽小路后总面积450，问小路宽多少米"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "花园长20米宽15米，加小路后总面积450",
                        "花园面积是450",
                        "小路宽2.5米",
                        "加路后长20米"
                    ],
                    "answer": "花园长20米宽15米，加小路后总面积450",
                    "explain": "原矩形20×15，四周加等宽小路x后：长20+2x、宽15+2x，总面积450"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "列方程 (20+2x)(15+2x)=450，解得 x≈1.93",
                        "20×15=300 直接作答",
                        "450-300=150 作答",
                        "x=2.5"
                    ],
                    "answer": "列方程 (20+2x)(15+2x)=450，解得 x≈1.93",
                    "explain": "展开得 4x²+70x-150=0，取正根 x≈1.93；2.5 代入得 (25)(20)=500≠450"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "矩形图：外矩形(20+2x)×(15+2x)包围内矩形20×15",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "设小路宽x，(20+2x)(15+2x)=450，解一元二次方程取正根约1.93米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "修路/围栏类问题：设宽度x，用扩大后的长宽列方程，注意舍去负根",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明测量一座塔的高度，他在离塔底30米处测得塔顶仰角为60度。他想算出塔的高度（忽略观测者身高）。",
            "question": "塔高约多少米？",
            "formula": "h = 30 * tan60度 = 30*sqrt(3) ≈ ?",
            "answer": 52,
            "choices": [
                52,
                30,
                17,
                60
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 30,
                    "angle": 60
                }
            },
            "knowledge": "特殊角三角函数",
            "difficulty": 3,
            "hint": "tan60°=√3≈1.732",
            "variants": [
                {
                    "question": "距离塔40米，仰角45度，塔高？",
                    "formula": "h=40*tan45=40",
                    "answer": 40,
                    "hint": "tan45=1"
                },
                {
                    "question": "距离塔20米，仰角30度，塔高？",
                    "formula": "h=20*tan30=20*sqrt(3)/3",
                    "answer": 12,
                    "hint": "tan30=√3/3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求塔的高度",
                        "求仰角的度数",
                        "求观测的距离",
                        "求塔的周长"
                    ],
                    "answer": "求塔的高度",
                    "explain": "离塔底30米测得仰角60度，问塔高"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "离塔底30米，仰角60度",
                        "离塔底60米，仰角30度",
                        "塔高30米",
                        "仰角是90度"
                    ],
                    "answer": "离塔底30米，仰角60度",
                    "explain": "水平距离30米、仰角60°，构成直角三角形"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "h=30×tan60°=30√3≈52",
                        "h=30×sin60°",
                        "h=30×cos60°",
                        "h=30÷tan60°"
                    ],
                    "answer": "h=30×tan60°=30√3≈52",
                    "explain": "tan60°=对边/邻边=塔高/30，tan60°=√3≈1.732，塔高≈51.96≈52米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形：底边30米，仰角60°，对边即塔高",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "塔高=水平距离×tan(仰角)=30×tan60°≈52米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "测高问题：高度=水平距离×tan(仰角)；tan60°=√3≈1.732、tan45°=1、tan30°=√3/3",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个圆锥的底面半径是3厘米，母线长是5厘米。小明想算出这个圆锥的侧面积。",
            "question": "圆锥的侧面积是多少平方厘米？",
            "formula": "S=πrl=π*3*5=15π≈47.1",
            "answer": 47,
            "choices": [
                47,
                28,
                90,
                15
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "cone",
                "params": {
                    "radius": 3,
                    "slantHeight": 5
                }
            },
            "knowledge": "圆锥侧面积",
            "difficulty": 2,
            "hint": "侧面积=π×半径×母线长",
            "variants": [
                {
                    "question": "圆锥底面半径4母线长6，侧面积？",
                    "formula": "π*4*6=24π≈75.4",
                    "answer": 75,
                    "hint": "代入公式"
                },
                {
                    "question": "圆锥底面直径6母线长5，侧面积？",
                    "formula": "r=3, S=π*3*5=15π",
                    "answer": 47,
                    "hint": "先求半径"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求圆锥的侧面积",
                        "求圆锥的体积",
                        "求圆锥的高",
                        "求圆锥的母线长"
                    ],
                    "answer": "求圆锥的侧面积",
                    "explain": "底面半径3厘米、母线长5厘米，问圆锥侧面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "底面半径3厘米，母线长5厘米",
                        "底面半径5厘米，母线3厘米",
                        "底面直径3厘米",
                        "只有母线长"
                    ],
                    "answer": "底面半径3厘米，母线长5厘米",
                    "explain": "侧面积需要底面半径 r=3 和母线 l=5"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "S=πrl=3.14×3×5≈47.1",
                        "S=πr²",
                        "S=2πr",
                        "S=πr(r+l)"
                    ],
                    "answer": "S=πrl=3.14×3×5≈47.1",
                    "explain": "圆锥侧面积公式 S=πrl，代入得15π≈47.1平方厘米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "圆锥展开图：侧面是扇形，弧长=2πr，半径=母线l",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "侧面积=1/2×弧长×母线=πrl=3.14×3×5≈47.1平方厘米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆锥侧面积 S=πrl（r底面半径、l母线长），全面积再加底面积πr²",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用韦达定理解决方程问题，已知方程x²-5x+6=0的两个根是x1和x2。他想算出x1²+x2²的值。",
            "question": "x1²+x2²的值是多少？",
            "formula": "x1+x2=5, x1*x2=6, x1²+x2²=(x1+x2)²-2x1x2=25-12=13",
            "answer": 13,
            "choices": [
                13,
                19,
                7,
                25
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 15,
                "points": [
                    {
                        "pos": 2,
                        "label": "x1",
                        "color": "#00A896"
                    },
                    {
                        "pos": 3,
                        "label": "x2",
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "韦达定理应用",
            "difficulty": 3,
            "hint": "利用韦达定理和完全平方公式",
            "variants": [
                {
                    "question": "方程x²-4x+3=0，求x1²+x2²",
                    "formula": "16-6=10",
                    "answer": 10,
                    "hint": "韦达定理"
                },
                {
                    "question": "方程x²-6x+8=0，求1/x1+1/x2",
                    "formula": "(x1+x2)/(x1*x2)=6/8=3/4",
                    "answer": 0.75,
                    "hint": "通分计算，3/4=0.75"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求 x1²+x2² 的值",
                        "求两个根分别是多少",
                        "求 x1 和 x2",
                        "求方程的解"
                    ],
                    "answer": "求 x1²+x2² 的值",
                    "explain": "已知方程 x²-5x+6=0 的两根 x1、x2，求 x1²+x2²"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "方程 x²-5x+6=0，两根为x1、x2",
                        "只知道一个根",
                        "方程无解",
                        "x1=x2"
                    ],
                    "answer": "方程 x²-5x+6=0，两根为x1、x2",
                    "explain": "a=1, b=-5, c=6，可用韦达定理"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "韦达定理：x1+x2=5，x1x2=6，x1²+x2²=5²-2×6=13",
                        "直接解方程再代入",
                        "x1²+x2²=25",
                        "x1²+x2²=12"
                    ],
                    "answer": "韦达定理：x1+x2=5，x1x2=6，x1²+x2²=5²-2×6=13",
                    "explain": "(x1+x2)²=x1²+2x1x2+x2²，所以 x1²+x2²=(x1+x2)²-2x1x2=25-12=13"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴：两个根2和3的位置",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "韦达定理：两根之和=-b/a=5，两根之积=c/a=6；由完全平方公式 x1²+x2²=(x1+x2)²-2x1x2=13",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "对称式求值：x1²+x2²=(x1+x2)²-2x1x2；1/x1+1/x2=(x1+x2)/(x1x2)，用韦达定理整体代入",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校测量一座塔的高度，小明在离塔底30米处测得塔顶仰角为60度。他想算出塔的高度（忽略观测者身高）。",
            "question": "塔高约多少米？",
            "formula": "h=30*tan60°=30*√3≈52",
            "answer": 52,
            "choices": [
                52,
                30,
                60,
                45
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 30,
                    "angle": 60,
                    "height": 52
                }
            },
            "knowledge": "解直角三角形应用",
            "difficulty": 3,
            "hint": "tan60°=√3≈1.732",
            "variants": [
                {
                    "question": "在离楼20米处测得楼顶仰角45度，楼高多少？",
                    "formula": "h=20*tan45°=20",
                    "answer": 20,
                    "hint": "tan45°=1"
                },
                {
                    "question": "在离旗杆40米处测得旗杆顶仰角30度，旗杆高多少？",
                    "formula": "h=40*tan30°≈23",
                    "answer": 23,
                    "hint": "tan30°=√3/3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求塔的高度",
                        "求仰角的度数",
                        "求观测的距离",
                        "求塔的宽度"
                    ],
                    "answer": "求塔的高度",
                    "explain": "离塔底30米测得仰角60度，问塔高"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "离塔底30米，仰角60度",
                        "离塔底60米，仰角30度",
                        "塔高30米",
                        "观测点在塔顶"
                    ],
                    "answer": "离塔底30米，仰角60度",
                    "explain": "水平距离30米、仰角60°，构成直角三角形"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "h=30×tan60°=30×√3≈52",
                        "h=30×sin60°",
                        "h=30×cos60°",
                        "h=30÷tan60°"
                    ],
                    "answer": "h=30×tan60°=30×√3≈52",
                    "explain": "tan60°=√3≈1.732，h≈51.96≈52米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形：底边30米，仰角60°，对边即塔高",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "塔高=水平距离×tan(仰角)=30×tan60°≈52米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "测高问题：高度=水平距离×tan(仰角)，仰角越大塔越高",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用相似三角形的性质测量池塘两岸的距离。他在岸边选取一点C，测量AC=10米，BC=8米，角C=60度。他想算出AB的距离。",
            "question": "池塘两岸A、B之间的距离是多少米？",
            "formula": "AB²=10²+8²-2*10*8*cos60°=100+64-80=84, AB≈9.2",
            "answer": 9,
            "choices": [
                9,
                10,
                8,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "a": 10,
                    "b": 8,
                    "c": 9,
                    "angle": 60
                }
            },
            "knowledge": "余弦定理",
            "difficulty": 3,
            "hint": "利用余弦定理求第三边",
            "variants": [
                {
                    "question": "三角形两边5、7，夹角60度，第三边多少？",
                    "formula": "c²=25+49-35=39, c≈6.2",
                    "answer": 6,
                    "hint": "余弦定理"
                },
                {
                    "question": "三角形两边8、10，夹角120度，第三边多少？",
                    "formula": "c²=64+100+80=244, c≈15.6",
                    "answer": 16,
                    "hint": "注意cos120°=-1/2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求AB的距离",
                        "求角C的度数",
                        "求AC的长",
                        "求BC的长"
                    ],
                    "answer": "求AB的距离",
                    "explain": "池塘两岸A、B间的距离，已知AC、BC和角C"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "AC=10米，BC=8米，角C=60度",
                        "AB=10米，AC=8米",
                        "角C=90度",
                        "AC=8米，角C=60度"
                    ],
                    "answer": "AC=10米，BC=8米，角C=60度",
                    "explain": "已知两边 AC=10、BC=8 和夹角 C=60°，求对边 AB"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "余弦定理：AB²=10²+8²-2×10×8×cos60°=84，AB≈9.2",
                        "勾股定理 AB²=10²+8²",
                        "AB=10+8=18",
                        "正弦定理"
                    ],
                    "answer": "余弦定理：AB²=10²+8²-2×10×8×cos60°=84，AB≈9.2",
                    "explain": "cos60°=1/2，AB²=100+64-80=84，AB≈9.17≈9米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "三角形：边AC=10、BC=8、夹角60°、对边AB",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "已知两边及其夹角求第三边用余弦定理 c²=a²+b²-2abcosC",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "余弦定理：c²=a²+b²-2abcosC；夹角为90°时退化为勾股定理",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校要在一块圆形花坛周围铺一条环形小路，花坛半径10米，小路宽2米。校长想知道小路的面积。",
            "question": "环形小路的面积是多少平方米？",
            "formula": "S=π(R²-r²)=π(144-100)=44π≈138",
            "answer": 138,
            "choices": [
                138,
                120,
                150,
                100
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "annulus",
                "params": {
                    "innerRadius": 10,
                    "outerRadius": 12
                }
            },
            "knowledge": "圆环面积",
            "difficulty": 2,
            "hint": "圆环面积=π(R²-r²)",
            "variants": [
                {
                    "question": "内圆半径3厘米，外圆半径5厘米，圆环面积多少？",
                    "formula": "π(25-9)=16π≈50",
                    "answer": 50,
                    "hint": "代入公式"
                },
                {
                    "question": "圆环面积12π，内圆半径2，外圆半径多少？",
                    "formula": "π(R²-4)=12π, R=4",
                    "answer": 4,
                    "hint": "逆用公式"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求环形小路的面积",
                        "求花坛的面积",
                        "求小路的宽度",
                        "求圆的周长"
                    ],
                    "answer": "求环形小路的面积",
                    "explain": "花坛周围铺环形小路，问小路面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "花坛半径10米，小路宽2米",
                        "小路宽10米",
                        "花坛半径12米",
                        "外圆半径10米"
                    ],
                    "answer": "花坛半径10米，小路宽2米",
                    "explain": "外圆半径=10+2=12米，内圆半径=10米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "S=π(R²-r²)=3.14×(12²-10²)=44π≈138",
                        "S=πR²",
                        "S=πr²",
                        "S=2π(R-r)"
                    ],
                    "answer": "S=π(R²-r²)=3.14×(12²-10²)=44π≈138",
                    "explain": "圆环面积=外圆面积-内圆面积=π(144-100)=44π≈138平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "圆环图：内圆半径10米、外圆半径12米",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "外圆半径=花坛半径+路宽=12米；圆环面积=π(R²-r²)=44π≈138",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "环形面积=π(R²-r²)，R是外圆半径、r是内圆半径",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用统计知识分析班级成绩，全班40人，平均分75分，标准差10分。他想算出大约有多少人成绩在65-85分之间。",
            "question": "成绩在65-85分之间的人数大约是多少？",
            "formula": "约68%的人在此范围内，40*0.68≈27",
            "answer": 27,
            "choices": [
                27,
                20,
                30,
                35
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 40,
                "parts": [
                    {
                        "label": "65-85分",
                        "val": 27,
                        "color": "#00A896"
                    },
                    {
                        "label": "其他",
                        "val": 13,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "正态分布",
            "difficulty": 3,
            "hint": "约68%的数据在平均值±1个标准差范围内",
            "variants": [
                {
                    "question": "全班50人，平均分80，标准差8，约多少人成绩在72-88分？",
                    "formula": "50*0.68≈34",
                    "answer": 34,
                    "hint": "68%法则"
                },
                {
                    "question": "某班30人，平均分70，标准差5，约多少人成绩在65-75分？",
                    "formula": "30*0.68≈20",
                    "answer": 20,
                    "hint": "代入计算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求成绩在65-85分的人数",
                        "求平均分",
                        "求标准差",
                        "求全班人数"
                    ],
                    "answer": "求成绩在65-85分的人数",
                    "explain": "全班40人，问成绩在均值±1个标准差范围内约多少人"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "全班40人，平均分75，标准差10",
                        "平均分85，标准差15",
                        "全班20人",
                        "平均分75，标准差5"
                    ],
                    "answer": "全班40人，平均分75，标准差10",
                    "explain": "均值75±10 → 65~85分"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "约68%的数据在±1个标准差内：40×0.68≈27",
                        "40×0.5=20",
                        "40×0.95=38",
                        "40×0.99≈40"
                    ],
                    "answer": "约68%的数据在±1个标准差内：40×0.68≈27",
                    "explain": "正态分布约68%落在均值±1σ，40×68%=27.2≈27人"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "分布图：均值75两侧±10的阴影区约68%",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "±1σ含约68%、±2σ约95%、±3σ约99.7%",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "68-95-99.7法则：估算正态分布数据落在均值附近区间的比例",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用二次根式解决几何问题，一个直角三角形的两条直角边分别是√12厘米和√27厘米。他想算出斜边的长度。",
            "question": "斜边的长度是多少厘米？",
            "formula": "斜边=√(12+27)=√39≈6.2",
            "answer": 6,
            "choices": [
                6,
                7,
                5,
                8
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "a": 3.46,
                    "b": 5.2,
                    "c": 6.24
                }
            },
            "knowledge": "二次根式与勾股定理",
            "difficulty": 3,
            "hint": "先化简二次根式，再用勾股定理",
            "variants": [
                {
                    "question": "直角边√8和√18，斜边多少？",
                    "formula": "√(8+18)=√26",
                    "answer": 5,
                    "hint": "化简后相加"
                },
                {
                    "question": "直角边√20和√5，斜边多少？",
                    "formula": "√(20+5)=5",
                    "answer": 5,
                    "hint": "化简计算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求斜边的长度",
                        "求直角边的长度",
                        "求三角形的面积",
                        "求三角形的周长"
                    ],
                    "answer": "求斜边的长度",
                    "explain": "两条直角边含二次根式，求斜边"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条直角边分别是√12厘米和√27厘米",
                        "直角边是12和27",
                        "斜边是√12",
                        "两条直角边都是6"
                    ],
                    "answer": "两条直角边分别是√12厘米和√27厘米",
                    "explain": "勾股定理用两条直角边求斜边"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "斜边²=(√12)²+(√27)²=12+27=39，斜边=√39≈6.2",
                        "斜边=12+27=39",
                        "斜边=√12×√27",
                        "斜边=√(12×27)"
                    ],
                    "answer": "斜边²=(√12)²+(√27)²=12+27=39，斜边=√39≈6.2",
                    "explain": "勾股定理 c²=a²+b²=12+27=39，c=√39≈6.2厘米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形：两条直角边√12、√27",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "(√a)²=a，勾股定理 c²=a²+b²=12+27=39",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "含二次根式的勾股定理：先平方去掉根号再相加，最后开方",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校组织测量旗杆高度，小红用镜子反射原理：她把镜子放在离旗杆15米的地面上，自己站在离镜子1.5米的位置，眼睛离地面1.6米，刚好看到旗杆顶端。",
            "question": "旗杆的高度是多少米？",
            "formula": "旗杆高/15=1.6/1.5, 旗杆高=16",
            "answer": 16,
            "choices": [
                16,
                15,
                18,
                14
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "height": 16,
                    "base": 15
                }
            },
            "knowledge": "相似三角形应用",
            "difficulty": 3,
            "hint": "利用相似三角形对应边成比例",
            "variants": [
                {
                    "question": "小明用影子法测树高，树影长10米，同时1.5米标杆影长2米，树高多少？",
                    "formula": "1.5*10/2=7.5",
                    "answer": 8,
                    "hint": "物高与影长成正比"
                },
                {
                    "question": "利用相似三角形，已知AB=4，BC=6，DE=8，求DF",
                    "formula": "DF=BC*DE/AB=12",
                    "answer": 12,
                    "hint": "对应边成比例"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求旗杆的高度",
                        "求镜子的位置",
                        "求人的身高",
                        "求观测的距离"
                    ],
                    "answer": "求旗杆的高度",
                    "explain": "镜子反射法测旗杆高度"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "镜子离旗杆15米，人离镜子1.5米，眼睛离地1.6米",
                        "人离旗杆15米",
                        "眼睛离地15米",
                        "镜子离旗杆1.6米"
                    ],
                    "answer": "镜子离旗杆15米，人离镜子1.5米，眼睛离地1.6米",
                    "explain": "反射原理：入射角=反射角，两个直角三角形相似"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "相似三角形：旗杆高/15=1.6/1.5，旗杆高=16",
                        "15+1.5+1.6=18",
                        "15×1.6=24",
                        "1.6÷1.5≈1.07"
                    ],
                    "answer": "相似三角形：旗杆高/15=1.6/1.5，旗杆高=16",
                    "explain": "对应边成比例：h/15=1.6/1.5，h=15×1.6÷1.5=16米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "示意图：旗杆、地面与镜子、人眼构成相似三角形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "光的反射使入射角等于反射角，两个直角三角形相似，对应边成比例",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "测量高度的方法：镜子法、标杆影长法，都用相似三角形对应边成比例",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明解不等式组，已知2x-3<5且x+2≥1，他想找出x的取值范围。",
            "question": "不等式组的解集是什么？",
            "formula": "x<4且x≥-1, 解集-1≤x<4",
            "answer": "-1≤x<4",
            "choices": [
                "-1≤x<4",
                "-1<x≤4",
                "x<-1或x≥4",
                "x<4"
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -2,
                "end": 5,
                "points": [
                    {
                        "pos": -1,
                        "label": "x≥-1",
                        "color": "#00A896"
                    },
                    {
                        "pos": 4,
                        "label": "x<4",
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "一元一次不等式组",
            "difficulty": 2,
            "hint": "分别解两个不等式，取公共部分",
            "variants": [
                {
                    "question": "解不等式组：x+1>3且2x<8",
                    "formula": "x>2且x<4",
                    "answer": "2<x<4",
                    "hint": "取公共部分"
                },
                {
                    "question": "解不等式组：3x-6≤0且x+2>0",
                    "formula": "x≤2且x>-2",
                    "answer": "-2<x≤2",
                    "hint": "分别求解再取交集"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "求不等式组的解集",
                        "求x的具体值",
                        "求不等式的个数",
                        "判断有无解"
                    ],
                    "answer": "求不等式组的解集",
                    "explain": "两个不等式组成不等式组，求x的取值范围"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "2x-3<5 且 x+2≥1",
                        "2x-3>5",
                        "x+2<1",
                        "只有一个不等式"
                    ],
                    "answer": "2x-3<5 且 x+2≥1",
                    "explain": "不等式①2x-3<5，不等式②x+2≥1"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "解①得x<4，解②得x≥-1，取交集得-1≤x<4",
                        "只取x<4",
                        "只取x≥-1",
                        "两个解没有公共部分"
                    ],
                    "answer": "解①得x<4，解②得x≥-1，取交集得-1≤x<4",
                    "explain": "x≥-1 且 x<4，公共部分是 -1≤x<4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴：-1≤x<4 的区间",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "分别解每个不等式：2x<8得x<4、x≥-1，再在数轴上取公共部分",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "不等式组解集：同大取大、同小取小、大小小大取中间、大大小小无解",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红解一元二次方程 x² - 5x + 6 = 0，用因式分解得到两个根。",
            "question": "方程较大的解是多少？",
            "formula": "(x-2)(x-3)=0, x=2 或 3",
            "answer": 3,
            "choices": [
                3,
                2,
                5,
                6
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 5,
                "points": [
                    {
                        "pos": 2,
                        "label": "小根",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 3,
                        "label": "大根",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    2,
                    3
                ]
            },
            "knowledge": "一元二次方程",
            "difficulty": 2,
            "hint": "因式分解后取较大的根",
            "variants": [
                {
                    "question": "x²-7x+12=0 较大解？",
                    "formula": "(x-3)(x-4)=0",
                    "answer": 4,
                    "hint": "取大根"
                },
                {
                    "question": "x²-6x+8=0 较大解？",
                    "formula": "(x-2)(x-4)=0",
                    "answer": 4,
                    "hint": "取大根"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "方程较大的一个根",
                        "方程较小的一个根",
                        "方程的常数项6",
                        "方程一次项的系数5"
                    ],
                    "answer": "方程较大的一个根",
                    "explain": "小红要解 x²-5x+6=0，问的是两个根里较大的那个，不是任意一个根。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "可因式分解为 (x-2)(x-3)=0",
                        "方程没有实数根",
                        "两个根相等都等于3",
                        "只需要看常数项6"
                    ],
                    "answer": "可因式分解为 (x-2)(x-3)=0",
                    "explain": "x²-5x+6 可拆成两个一次因式，分别等于0就能得到 x=2 和 x=3 两个根。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "因式分解 (x-2)(x-3)=0，取较大根3",
                        "取两根中较小的2",
                        "直接把常数6当答案",
                        "把一次项系数5当答案"
                    ],
                    "answer": "因式分解 (x-2)(x-3)=0，取较大根3",
                    "explain": "公式：两个因式的积为0则各自为0。代入：x-2=0 得 x=2，x-3=0 得 x=3。结果：较大的解是 3。题问“较大”，故取 3 而非 2。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "场景对应一条数轴。数轴上应标出两个根 x=2 与 x=3，它们把数轴分成三段：左段(<2)、中段(2到3)、右段(>3)。我们要找的是偏右的 3。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "因式分解把二次方程降到两个一次方程。(x-2)(x-3)=0 说明只要有一个括号内为0即可，故 x=2 或 x=3。比较大小取较大的 3。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "对可因式分解的二次方程，把 x²+px+q 写成 (x-r₁)(x-r₂)=0 的形式，每个因式算一次即得两根，再按题意比较大小或符号取对应解。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小华解一元二次方程 x² = 9，且 x 为正数。",
            "question": "x 的值是多少？",
            "formula": "x^2=9, x=3",
            "answer": 3,
            "choices": [
                3,
                -3,
                9,
                6
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -3,
                "end": 3,
                "points": [
                    {
                        "pos": -3,
                        "label": "-3",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 3,
                        "label": "3",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -3,
                    3
                ]
            },
            "knowledge": "一元二次方程",
            "difficulty": 1,
            "hint": "正数的平方根取正",
            "variants": [
                {
                    "question": "x²=16 (x>0)，x=?",
                    "formula": "x=4",
                    "answer": 4,
                    "hint": "取正根"
                },
                {
                    "question": "x²=25 (x>0)，x=?",
                    "formula": "x=5",
                    "answer": 5,
                    "hint": "取正根"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "满足 x²=9 的正数 x",
                        "9 的绝对值",
                        "满足 x²=9 的负数 x",
                        "x 的平方根个数"
                    ],
                    "answer": "满足 x²=9 的正数 x",
                    "explain": "小华仅取 x 为正数这一支，所以要找的是正的那个平方根。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "方程是 x²=9，且要求 x 为正数",
                        "方程是 x²=6，x 任意",
                        "只给了 x=-3",
                        "题目没有任何限制条件"
                    ],
                    "answer": "方程是 x²=9，且要求 x 为正数",
                    "explain": "底数是 9，而 x 被限定为正数，这过滤掉了负根。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "求平方根：x=±√9=±3，取正得3",
                        "取负根 -3",
                        "认为 x=9",
                        "认为 x=6"
                    ],
                    "answer": "求平方根：x=±√9=±3，取正得3",
                    "explain": "开平方：x²=9 两边同时开方得 x=±3；题目限定 x 为正数，故舍掉 -3 保留 3。结果：x=3。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上应找到 ±3 两个对称位置，它们到原点距离相等(都等于3)。题目要求正数，所以只看原点右侧的 +3 这一点。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "开平方得到一对相反数 ±3。由于强调 x 为正数，-3 被舍弃，留下的就是正根 3。符号条件决定最终选哪个根。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "形如 x²=a（a>0）的最简二次方程，答案总是一对互为相反数的根 ±√a；解题时先写出这对根，再依题意取舍。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小刚用因式分解解方程 x² - 4 = 0，取正数解。",
            "question": "方程的正数解是多少？",
            "formula": "(x-2)(x+2)=0, x=2",
            "answer": 2,
            "choices": [
                2,
                -2,
                4,
                0
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -2,
                "end": 2,
                "points": [
                    {
                        "pos": -2,
                        "label": "-2",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 2,
                        "label": "2",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -2,
                    2
                ]
            },
            "knowledge": "一元二次方程因式分解",
            "difficulty": 2,
            "hint": "平方差公式：x²-4=(x-2)(x+2)",
            "variants": [
                {
                    "question": "x²-9=0 的正数解？",
                    "formula": "x=3",
                    "answer": 3,
                    "hint": "平方差"
                },
                {
                    "question": "x²-1=0 的正数解？",
                    "formula": "x=1",
                    "answer": 1,
                    "hint": "(x-1)(x+1)=0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "方程 x²-4=0 的正数解",
                        "方程 x²-4=0 的负数解",
                        "方程所有的根之和",
                        "常数项 -4"
                    ],
                    "answer": "方程 x²-4=0 的正数解",
                    "explain": "题目限定取正数解，即两个根里为正的那个。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "x²-4 可用平方差公式分解",
                        "方程没有实数根",
                        "两个根相等",
                        "解一定是0"
                    ],
                    "answer": "x²-4 可用平方差公式分解",
                    "explain": "x²-4 是平方差形式，能写成 (x-2)(x+2)，这是求根的关键。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "平方差公式：(x-2)(x+2)=0，取正解2",
                        "取负解 -2",
                        "取常数4",
                        "取0作为解"
                    ],
                    "answer": "平方差公式：(x-2)(x+2)=0，取正解2",
                    "explain": "公式：a²-b²=(a-b)(a+b)。代入：x²-4=(x-2)(x+2)=0，得 x=±2。结果：正数解是 2。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上应标出 x=-2 与 x=2 两处对称的根。它们关于原点对称。题目只要正数，故标记右侧的 +2。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平方差公式把二次式拆成两个互补的一次因式。x-2=0 得 2，x+2=0 得 -2。按“正数解”舍去 -2，保留 2。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "对形如 x²-c=0 的方程，利用平方差 a²-b²=(a-b)(a+b) 分解，比直接开方更能体现“拆因式、逐式取零”的通用二次方程解法。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "两个连续正整数的乘积等于12。小红列方程求较小的那个数。",
            "question": "较小的连续整数是多少？",
            "formula": "3×4=12，较小为3",
            "answer": 3,
            "choices": [
                3,
                2,
                4,
                5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 12,
                "parts": [
                    {
                        "label": "较小数",
                        "val": 3,
                        "color": "#2563EB"
                    },
                    {
                        "label": "较大数",
                        "val": 4,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "一元二次方程应用",
            "difficulty": 3,
            "hint": "x(x+1)=12，分解得 x=3",
            "variants": [
                {
                    "question": "连续正整数乘积为20，较小数？",
                    "formula": "4×5=20",
                    "answer": 4,
                    "hint": "x(x+1)=20"
                },
                {
                    "question": "连续正整数乘积为30，较小数？",
                    "formula": "5×6=30",
                    "answer": 5,
                    "hint": "x(x+1)=30"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两个连续正整数里较小的那个",
                        "两个连续整数的乘积",
                        "两个连续正整数里较大的那个",
                        "两个数的和"
                    ],
                    "answer": "两个连续正整数里较小的那个",
                    "explain": "乘积等于12，问较小的连续正整数是多少。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "较小的数可设为 x，另一个是 x+1",
                        "两个数没有任何关系",
                        "乘积等于13",
                        "只要求较大的数"
                    ],
                    "answer": "较小的数可设为 x，另一个是 x+1",
                    "explain": "连续整数相差1，设较小的为 x，较大的自然是 x+1。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "列方程 x(x+1)=12，解得 x=3",
                        "设 x(x+1)=10，解得4",
                        "直接用 2×6=12",
                        "把12当作较小数"
                    ],
                    "answer": "列方程 x(x+1)=12，解得 x=3",
                    "explain": "关系：相邻数相差1，设较小者为 x 则另一数为 x+1。依据“相乘得12”列 x(x+1)=12，试探可得 3×4=12。位数结果：较小的数是 3。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "可用长短条形模型表示两个相邻整数：一根长度为3，紧挨着的另一根长度为4，两者拼合起来正好是12，直观对应 3×4=12。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "用 x 表示较小的数，较大的即 x+1。x(x+1)=12 展开成一个标准二次方程，因式分解后取正整数解，得到较小数为 3。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解决“连续整数乘积为已知”的问题，设较小数为 x、另一个为 x+1，建立并解二次方程，再按“正整数”条件筛选根。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "抛物线 y = x² 经过点 (2, y)。小红想求这个点的 y 值。",
            "question": "x=2 时 y 的值是多少？",
            "formula": "y = 2^2 = 4",
            "answer": 4,
            "choices": [
                4,
                2,
                8,
                1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 4,
                "points": [
                    {
                        "pos": 2,
                        "label": "x",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 4,
                        "label": "y",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    2,
                    4
                ]
            },
            "knowledge": "二次函数图像",
            "difficulty": 1,
            "hint": "代入 x=2 求 y",
            "variants": [
                {
                    "question": "y=x²，x=3 时 y=?",
                    "formula": "3^2=9",
                    "answer": 9,
                    "hint": "平方"
                },
                {
                    "question": "y=x²，x=5 时 y=?",
                    "formula": "5^2=25",
                    "answer": 25,
                    "hint": "平方"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "x=2 时抛物线上的 y 值",
                        "抛物线的顶点",
                        "x 轴上交点的横坐标",
                        "抛物线的开口方向"
                    ],
                    "answer": "x=2 时抛物线上的 y 值",
                    "explain": "点(2,y)在抛物线 y=x² 上，求该点的纵坐标。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "函数是 y=x²，且 x=2",
                        "函数是 y=2x",
                        "只有顶点坐标",
                        "不知道函数解析式"
                    ],
                    "answer": "函数是 y=x²，且 x=2",
                    "explain": "已知函数解析式 y=x² 和一个横坐标 x=2。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "代入解析式：y=2²=4",
                        "代入 y=2×2=4",
                        "取 y=2",
                        "取 y=8"
                    ],
                    "answer": "代入解析式：y=2²=4",
                    "explain": "公式：把横坐标代入函数式求函数值。代入：y=2²=4。结果：x=2 时 y=4。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "抛物线 y=x² 开口向上、顶点在原点，关于 y 轴对称。在 x=2 处从横轴竖直向上交到曲线，该点的纵坐标即函数值 4。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "代入法求函数值：把 x=2 替换进 y=x² 得 y=4。因为 x² 是平方关系，2 的平方为 4，不是 2 或 8。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知函数解析式求某点的函数值，就是把该点的自变量值整体代入式中的每个 x，按运算顺序(先乘方再乘除加减)算出结果。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "二次函数 y = x² 的图像开口向上。小华想知道它的最小值。",
            "question": "y = x² 的最小值是多少？",
            "formula": "顶点在原点，最小 y=0",
            "answer": 0,
            "choices": [
                0,
                1,
                -1,
                2
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -1,
                "end": 1,
                "points": [
                    {
                        "pos": 0,
                        "label": "最小",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 1,
                        "label": "1",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    0,
                    1
                ]
            },
            "knowledge": "二次函数最值",
            "difficulty": 1,
            "hint": "x=0 时 y 最小为 0",
            "variants": [
                {
                    "question": "y=x²+1 的最小值？",
                    "formula": "x=0时y=1",
                    "answer": 1,
                    "hint": "顶点上移1"
                },
                {
                    "question": "y=x²-3 的最小值？",
                    "formula": "x=0时y=-3",
                    "answer": -3,
                    "hint": "顶点下移3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "y=x² 的最小值",
                        "y=x² 与x轴的交点",
                        "y=x² 的最大值",
                        "顶点的横坐标"
                    ],
                    "answer": "y=x² 的最小值",
                    "explain": "开口向上的抛物线存在最小值，问最小的 y 值是多少。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "二次项系数为正，图像开口向上",
                        "二次项系数为负",
                        "函数没有顶点",
                        "最小值出现在 x=1"
                    ],
                    "answer": "二次项系数为正，图像开口向上",
                    "explain": "y=x² 的二次项系数1>0，确定开口向上、有最小值。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "顶点在原点(x=0)，最小 y=0",
                        "最小值是1",
                        "最小值是-1",
                        "最小值是2"
                    ],
                    "answer": "顶点在原点(x=0)，最小 y=0",
                    "explain": "公式：y=a(x-h)²+k 的顶点为(h,k)。代入：y=x² 已是顶点式，h=0、k=0。结果：最小值 y=0（当 x=0 时）。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "抛物线 y=x² 开口向上、对称轴是 y 轴，顶点恰好位于原点(0,0)，这是全曲线的最低点，对应的 y 就是最小值 0。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "对 y=x²，任何非零 x 的平方都为正，只有 x=0 时 y=0，因此0是最小值。顶点式里 k=0 直接读出最值。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "把二次函数写成顶点式 y=a(x-h)²+k，当 a>0 开口向上时最小值是 k，当 a<0 开口向下时最大值是 k，最值点横坐标为 h。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "抛物线 y = x² - 4 与 x 轴相交，小刚想求正半轴的交点横坐标。",
            "question": "与 x 轴正半轴的交点横坐标是多少？",
            "formula": "x^2-4=0, x=2",
            "answer": 2,
            "choices": [
                2,
                -2,
                4,
                0
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -2,
                "end": 2,
                "points": [
                    {
                        "pos": -2,
                        "label": "-2",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 2,
                        "label": "2",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -2,
                    2
                ]
            },
            "knowledge": "二次函数与x轴交点",
            "difficulty": 2,
            "hint": "令 y=0 解方程",
            "variants": [
                {
                    "question": "y=x²-9 正交点横坐标？",
                    "formula": "x=3",
                    "answer": 3,
                    "hint": "令y=0"
                },
                {
                    "question": "y=x²-1 正交点横坐标？",
                    "formula": "x=1",
                    "answer": 1,
                    "hint": "解x²=1"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "抛物线在 x 轴正半轴交点的横坐标",
                        "抛物线的顶点",
                        "抛物线与y轴交点的纵坐标",
                        "负半轴交点的横坐标"
                    ],
                    "answer": "抛物线在 x 轴正半轴交点的横坐标",
                    "explain": "令 y=0 得两个交点，挑正半轴(右侧)的那个横坐标。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "抛物线与x轴相交，需要令 y=0",
                        "方程无法求解",
                        "只有一个交点",
                        "交点都在负半轴"
                    ],
                    "answer": "抛物线与x轴相交，需要令 y=0",
                    "explain": "与 x 轴的交点意味着该处 y=0，据此解方程。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "令 y=0，x²-4=0 得 x=±2，取正得2",
                        "令 y=0 取负根",
                        "令 x=0 得交点",
                        "答案是4"
                    ],
                    "answer": "令 y=0，x²-4=0 得 x=±2，取正得2",
                    "explain": "交点在 x 轴上表示纵坐标为零，代入得 x²-4=0，移项后开平方得 x=±2，右半轴正是 +2。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "抛物线 y=x²-4 由 y=x² 下移4得到，顶点在(0,-4)。它与 x 轴在两个对称点相交，横坐标分别为 -2 和 +2，只看右侧的 +2。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "x 轴上的点纵坐标都是0，所以令 x²-4=0 求出两个根 ±2。正半轴对应 x>0，选 2。函数零点即与 x 轴交点横坐标。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "抛物线开口向上、向下相切横轴或割轴，其与 x 轴的交点即“零点”，通过令目标函数式取零、解对应方程获得，是二次函数与方程的核心联系。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "抛物线 y = x² - 2x + 1，小红配方求顶点横坐标。",
            "question": "顶点横坐标是多少？",
            "formula": "x = 2/(2*1) = 1",
            "answer": 1,
            "choices": [
                1,
                -1,
                2,
                0
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 2,
                "points": [
                    {
                        "pos": 1,
                        "label": "顶点x",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 2,
                        "label": "2a",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    1,
                    2
                ]
            },
            "knowledge": "二次函数顶点",
            "difficulty": 2,
            "hint": "顶点横坐标 x=-b/(2a)",
            "variants": [
                {
                    "question": "y=x²-6x+5 顶点横坐标？",
                    "formula": "x=6/2=3",
                    "answer": 3,
                    "hint": "-b/2a"
                },
                {
                    "question": "y=x²+2x 顶点横坐标？",
                    "formula": "x=-2/2=-1",
                    "answer": -1,
                    "hint": "-b/2a"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "抛物线的顶点横坐标",
                        "抛物线的顶点纵坐标",
                        "与x轴交点的横坐标",
                        "抛物线的开口方向"
                    ],
                    "answer": "抛物线的顶点横坐标",
                    "explain": "问 y=x²-2x+1 顶点关于 x 的坐标。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "a=1，b=-2，用 x=-b/(2a)",
                        "a=1，b=2",
                        "顶点就是顶点纵坐标",
                        "看常数项1"
                    ],
                    "answer": "a=1，b=-2，用 x=-b/(2a)",
                    "explain": "读出一般式的 a、b，代入顶点横坐标公式。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "x=-b/(2a)=2/(2×1)=1",
                        "x=-(-2)/(2×1)=-1",
                        "x=2",
                        "x=0"
                    ],
                    "answer": "x=-b/(2a)=2/(2×1)=1",
                    "explain": "把系数读出 a=1、b=-2，套顶点公式得 2÷(2×1)=1，对称轴的竖线就落在 1 上。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "y=x²-2x+1 恰是 (x-1)² 的展开式，图形是开口向上的一个抛物线，其对称轴(也是顶点横坐标)恰好在 x=1 处。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "对顶点式 y=a(x-h)²+k，最值点横坐标 h 即可由配方法对应求得。本题系数套用即得 x=-b/(2a)=1，也就是图象的轴线位置。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "任给二次式，顶点横坐标都可经 x=-b/(2a) 一步得出，代回解析式还能得到纵坐标，据此快速判断最值与函数走向。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个圆的半径是5厘米。小红求它的周长（π取3.14，取整数）。",
            "question": "圆的周长约是多少厘米？",
            "formula": "2*3.14*5 = 31.4 ≈ 31",
            "answer": 31,
            "choices": [
                31,
                33,
                30,
                35
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "radius": 5
                }
            },
            "knowledge": "圆的周长与面积",
            "difficulty": 2,
            "hint": "C=2πr",
            "variants": [
                {
                    "question": "半径8的圆周长约？",
                    "formula": "2*3.14*8≈50",
                    "answer": 50,
                    "hint": "2πr"
                },
                {
                    "question": "半径6的圆周长约？",
                    "formula": "2*3.14*6≈38",
                    "answer": 38,
                    "hint": "2πr"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "半径5厘米的圆的周长",
                        "圆的面积",
                        "圆的直径",
                        "圆的半径"
                    ],
                    "answer": "半径5厘米的圆的周长",
                    "explain": "已知半径求圆的周长，π取3.14并取整数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径 r=5，π=3.14，取整数",
                        "直径 d=5",
                        "半径 r=10",
                        "只用面积公式"
                    ],
                    "answer": "半径 r=5，π=3.14，取整数",
                    "explain": "周长公式需要的半径是5，且约定π取3.14、结果取整。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "C=2πr=2×3.14×5=31.4≈31",
                        "C=πr=3.14×5=15.7",
                        "C=2×3.14×5=33",
                        "C=30"
                    ],
                    "answer": "C=2πr=2×3.14×5=31.4≈31",
                    "explain": "公式：周长 C=2πr。代入 r=5、π=3.14：C=2×3.14×5=31.4。结果：取整约为 31 厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中是一个半径5厘米的圆，圆心到圆周任意一点距离都为5。周长可看作把圆周“展开”拉直后的长度，就是 2πr。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "周长与半径成正比：C=2πr。代入 r=5 得 31.4，题目要求约数，四舍五入到整数得 31。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆的周长公式 C=πd=2πr，直径等于半径2倍。在任何“已知半径求周长”的问题中，直接套用 C=2πr。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个圆环外圆半径5、内圆半径3。小华求圆环面积（π取3.14，取整数）。",
            "question": "圆环面积约是多少？",
            "formula": "3.14*(5^2-3^2) = 3.14*16 ≈ 50",
            "answer": 50,
            "choices": [
                50,
                40,
                60,
                25
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 50,
                "points": [
                    {
                        "pos": 25,
                        "label": "外圆",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 50,
                        "label": "环面积",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    25,
                    50
                ]
            },
            "knowledge": "圆环面积",
            "difficulty": 2,
            "hint": "圆环面积=大圆面积-小圆面积",
            "variants": [
                {
                    "question": "外半径6内半径2的圆环面积约？",
                    "formula": "3.14*(36-4)≈100",
                    "answer": 100,
                    "hint": "大减小"
                },
                {
                    "question": "外半径7内半径5的圆环面积约？",
                    "formula": "3.14*(49-25)≈75",
                    "answer": 75,
                    "hint": "平方差"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "外圆和内圆之间圆环的面积",
                        "外圆的周长",
                        "内圆的面积",
                        "外圆的直径"
                    ],
                    "answer": "外圆和内圆之间圆环的面积",
                    "explain": "求大圆面积与小圆面积之差，即圆环面积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "外径5、内径3，π=3.14，取整数",
                        "外径3、内径5",
                        "两个圆半径相等",
                        "只需要外圆面积"
                    ],
                    "answer": "外径5、内径3，π=3.14，取整数",
                    "explain": "关键在于外圆半径5、内圆半径3，两者差构成圆环。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "3.14×(5²-3²)=3.14×16≈50",
                        "3.14×5²=78.5",
                        "3.14×(5-3)=6.28",
                        "3.14×16=60"
                    ],
                    "answer": "3.14×(5²-3²)=3.14×16≈50",
                    "explain": "公式：圆环面积=π(R²-r²)。代入 R=5、r=3：π×(25-9)=3.14×16=50.24。结果：取整约 50。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中是两个同心圆：外圆半径5，内圆半径3。两圆之间的环形带即待求区域，面积等于从大圆里“挖掉”小圆后的剩余部分。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "圆环面积=大圆面积-小圆面积=πR²-πr²=π(R²-r²)。代入 R=5、r=3 得3.14×16=50.24，取整约 50。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求两个同心中间区域的面积，总是用较大的圆面积减去较小的圆面积，即 π(R²-r²)，与圆环宽度 (R-r) 直接相乘是不同的。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "坐标平面上的点 (3,4) 绕原点旋转180度。小红想求旋转后点的横坐标。",
            "question": "旋转180度后点的横坐标是多少？",
            "formula": "绕原点180度，(x,y)变为(-x,-y)",
            "answer": -3,
            "choices": [
                -3,
                3,
                -4,
                4
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -3,
                "end": 3,
                "points": [
                    {
                        "pos": -3,
                        "label": "新x",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 3,
                        "label": "原x",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    -3,
                    3
                ]
            },
            "knowledge": "图形旋转",
            "difficulty": 2,
            "hint": "绕原点旋转180度横纵坐标都取相反数",
            "variants": [
                {
                    "question": "点(-2,5)绕原点180度后的横坐标？",
                    "formula": "变成(2,-5)，横坐标2",
                    "answer": 2,
                    "hint": "取相反数"
                },
                {
                    "question": "点(0,6)绕原点180度后的横坐标？",
                    "formula": "变成(0,-6)，横坐标0",
                    "answer": 0,
                    "hint": "0不变"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "绕原点旋转180°后点的横坐标",
                        "旋转前点的横坐标",
                        "旋转后点的纵坐标",
                        "旋转的角度"
                    ],
                    "answer": "绕原点旋转180°后点的横坐标",
                    "explain": "把点(3,4)绕原点转180°，问新点的横坐标。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "原点是(3,4)，绕原点旋转180°",
                        "绕原点旋转90°",
                        "旋转中心不是原点",
                        "横纵坐标都保持不变"
                    ],
                    "answer": "原点是(3,4)，绕原点旋转180°",
                    "explain": "旋转中心是原点，角度为180°，这是确定新坐标的依据。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "绕原点180°：坐标取相反数，-(3)=-3",
                        "横坐标保持为3",
                        "横坐标变为-4",
                        "旋转后横坐标是4"
                    ],
                    "answer": "绕原点180°：坐标取相反数，-(3)=-3",
                    "explain": "公式：绕原点旋转180°后 (x,y) 变为 (-x,-y)。代入 (3,4) 得 (-3,-4)。结果：新点横坐标为 -3。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "在坐标平面中，点(3,4)在第一象限。绕原点转180°相当于沿过原点的对角线翻到第三象限的对称位置(-3,-4)，横纵坐标都变号。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "旋转180°后点关于原点中心对称，每个坐标都取其相反数。3的相反数是-3，所以横坐标为-3。旋转90°则交换并变号，规则不同。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "绕原点旋转180°时 (x,y)→(-x,-y)；旋转90°时 (x,y)→(-y,x)或(y,-x)，先确认旋转角度，再按对应规则变换坐标。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个圆锥的母线长5、底面半径3。小红求它的侧面积（π取3.14，取整数）。",
            "question": "圆锥侧面积约是多少？",
            "formula": "π*3*5 = 15π ≈ 47",
            "answer": 47,
            "choices": [
                47,
                45,
                50,
                40
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 47,
                "points": [
                    {
                        "pos": 15,
                        "label": "πr",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 47,
                        "label": "侧面积",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    15,
                    47
                ]
            },
            "knowledge": "圆锥侧面积",
            "difficulty": 3,
            "hint": "圆锥侧面积=πrl（r底面半径，l母线）",
            "variants": [
                {
                    "question": "底面半径2母线5的圆锥侧面积约？",
                    "formula": "3.14*2*5≈31",
                    "answer": 31,
                    "hint": "πrl"
                },
                {
                    "question": "底面半径4母线10的圆锥侧面积约？",
                    "formula": "3.14*4*10≈126",
                    "answer": 126,
                    "hint": "πrl"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "圆锥的侧面积",
                        "圆锥的底面积",
                        "圆锥的体积",
                        "圆周长"
                    ],
                    "answer": "圆锥的侧面积",
                    "explain": "已知圆锥母线5、底面半径3，求侧面展开形成的扇形面积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "母线 l=5，底面半径 r=3，π=3.14",
                        "母线在底部",
                        "只用体积公式",
                        "l=3，r=5"
                    ],
                    "answer": "母线 l=5，底面半径 r=3，π=3.14",
                    "explain": "侧面积公式需要的母线l=5和底面半径r=3都已知。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "S侧=πrl=3.14×3×5=47.1≈47",
                        "S侧=πr²=3.14×9",
                        "S侧=πl²=3.14×25",
                        "S侧=πrl=50"
                    ],
                    "answer": "S侧=πrl=3.14×3×5=47.1≈47",
                    "explain": "侧面是扇形：面积=½×底面圆弧长×母线=½×(2π×3)×5=15π≈47.1，取整 47。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "侧面展开是一个扇形：半径为母线长5，扇形弧长等于底面圆周长2πr。扇形面积就由“半径×弧长÷2”给出，即 πrl。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "扇形展开后，弧长等于底面圆周 2πr，扇形面积取“半径乘弧长再减半”即 πrl；本题 15π≈47，勿把母线 l 误当高。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆锥侧面积公式为 S=πrl，其中r为底面半径、l为母线；全面积再加一个底面积πr²。任何圆锥侧面积都直接套 S=πrl。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个圆锥的母线长5、底面半径2。小华求它的侧面积（π取3.14，取整数）。",
            "question": "圆锥侧面积约是多少？",
            "formula": "π*2*5 = 10π ≈ 31",
            "answer": 31,
            "choices": [
                31,
                30,
                20,
                40
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 31,
                "points": [
                    {
                        "pos": 10,
                        "label": "πr",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 31,
                        "label": "侧面积",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    10,
                    31
                ]
            },
            "knowledge": "圆锥侧面积",
            "difficulty": 3,
            "hint": "侧面积=πrl",
            "variants": [
                {
                    "question": "底面半径3母线4的圆锥侧面积约？",
                    "formula": "3.14*3*4≈38",
                    "answer": 38,
                    "hint": "πrl"
                },
                {
                    "question": "底面半径6母线5的圆锥侧面积约？",
                    "formula": "3.14*6*5≈94",
                    "answer": 94,
                    "hint": "πrl"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "圆锥的侧面积",
                        "圆锥的高",
                        "底面圆的周长",
                        "圆锥的全面积"
                    ],
                    "answer": "圆锥的侧面积",
                    "explain": "已知母线5、底面半径2，求侧面展开扇形的面积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "母线 l=5，底面半径 r=2",
                        "底面半径 r=5",
                        "母线 l=2",
                        "只有高度信息"
                    ],
                    "answer": "母线 l=5，底面半径 r=2",
                    "explain": "侧面积公式用到的母线为5、底面半径为2。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "S侧=πrl=3.14×2×5=31.4≈31",
                        "S侧=3.14×2²=12.56",
                        "S侧=3.14×5²=78.5",
                        "S侧=3.14×2×5=30"
                    ],
                    "answer": "S侧=πrl=3.14×2×5=31.4≈31",
                    "explain": "直接套用公式：S=πrl=3.14×2×5=10π≈31.4，四舍五入到个位得 31。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把侧面展平成为一个以母线为半径的扇面，扇面外沿的弧对应底圆一周。半径较短时扇面收窄，面积随之变小，这里是10π。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "侧面积只乘底面半径与母线，即 π×2×5≈31；这里的2是底圆半径不是直径或高，取值时一旦张冠李戴结果即偏。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆锥侧面积通用公式 S=πrl。若给出直径d，先把直径除以2得到半径r，再代入公式计算，避免误用直径。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红求特殊角60度的正弦值。",
            "question": "sin60° 的值约是多少？",
            "formula": "sqrt(3)/2 ≈ 0.866",
            "answer": 0.866,
            "choices": [
                0.866,
                0.5,
                1,
                0.707
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 1,
                "points": [
                    {
                        "pos": 0.866,
                        "label": "sin60",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 1,
                        "label": "1",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    0.866,
                    1
                ]
            },
            "knowledge": "特殊角三角函数",
            "difficulty": 1,
            "hint": "sin60°=√3/2",
            "variants": [
                {
                    "question": "sin45° ≈ ?",
                    "formula": "sqrt(2)/2=0.707",
                    "answer": 0.707,
                    "hint": "根号2除以2"
                },
                {
                    "question": "cos30° ≈ ?",
                    "formula": "sqrt(3)/2=0.866",
                    "answer": 0.866,
                    "hint": "根号3除以2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "特殊角60°的正弦值",
                        "60°的余弦值",
                        "60°的正切值",
                        "60°的另一特殊角值"
                    ],
                    "answer": "特殊角60°的正弦值",
                    "explain": "已知角度60°，求 sin60° 的数值约等于多少。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "角度为60°，sin60°=√3/2",
                        "角度为45°",
                        "角度为30°",
                        "sin60°=1"
                    ],
                    "answer": "角度为60°，sin60°=√3/2",
                    "explain": "60°是特殊角，其正弦值为√3/2。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "sin60°=√3/2≈0.866",
                        "sin60°=1/2=0.5",
                        "sin60°=1",
                        "sin60°=√2/2≈0.707"
                    ],
                    "answer": "sin60°=√3/2≈0.866",
                    "explain": "公式：特殊角正弦值 sin60°=√3/2。代入 √3≈1.732：1.732/2≈0.866。结果：约 0.866。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "在30°-60°-90°直角三角形里，短直角边对30°、长直角边对60°。sin60°=对边/斜边=长直角边/斜边=√3/2。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "sin60°=√3/2≈0.866，这是必须记住的特殊角三角函数值。判别：0.5是sin30°，0.707是sin45°，勿混淆。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "特殊角度(0°、30°、45°、60°、90°)的正弦、余弦、正切值应熟练记忆，如 sin30°=1/2、sin45°=√2/2、sin60°=√3/2。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一元二次方程 x² - 5x + 6 = 0，小红用韦达定理求两根之和。",
            "question": "两根之和是多少？",
            "formula": "x1+x2 = -b/a = 5",
            "answer": 5,
            "choices": [
                5,
                6,
                -5,
                3
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 6,
                "points": [
                    {
                        "pos": 5,
                        "label": "两根和",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 6,
                        "label": "c",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    5,
                    6
                ]
            },
            "knowledge": "韦达定理应用",
            "difficulty": 2,
            "hint": "两根之和=-b/a",
            "variants": [
                {
                    "question": "x²-7x+12=0 两根和？",
                    "formula": "7/1=7",
                    "answer": 7,
                    "hint": "-b/a"
                },
                {
                    "question": "x²+3x+2=0 两根和？",
                    "formula": "-3/1=-3",
                    "answer": -3,
                    "hint": "-b/a"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "方程 x²-5x+6=0 两根之和",
                        "两根之积",
                        "方程的常数项",
                        "方程的判别式"
                    ],
                    "answer": "方程 x²-5x+6=0 两根之和",
                    "explain": "用韦达定理直接求两根之和，不必展开求根。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "首项系数a=1，一次项系数b=-5",
                        "常数项c=5",
                        "a=-5，b=1",
                        "只需要看常数项6"
                    ],
                    "answer": "首项系数a=1，一次项系数b=-5",
                    "explain": "读出 a=1、b=-5、c=6，套韦达定理。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "x1+x2=-b/a=5/1=5",
                        "x1+x2=c/a=6",
                        "x1+x2=b/a=-5",
                        "x1+x2=3"
                    ],
                    "answer": "x1+x2=-b/a=5/1=5",
                    "explain": "系数 b=-5、a=1，依两根和定理即 -b 除以 a，得到 -(-5)÷1=5，两根合计为 5。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "方程 x²-5x+6=0 的两根其实是2和3。韦达定理说它们之和5等于一次项系数变号，数轴上两根关于和的中点5/2对称分布。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "对 ax²+bx+c=0，两根之和恒等于 -b/a。这里 a=1、b=-5，故和为5。求“和”用 -b/a，与求积 c/a 区分。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "两根之和即一次项系数取负，反映了根分布的中点位置；把因式(x-r₁)(x-r₂)展开对照系数，可以直观验证这一结论。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一元二次方程 x² - 7x + 10 = 0，小华用韦达定理求两根之积。",
            "question": "两根之积是多少？",
            "formula": "x1*x2 = c/a = 10",
            "answer": 10,
            "choices": [
                10,
                7,
                -7,
                5
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 10,
                "points": [
                    {
                        "pos": 7,
                        "label": "b",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 10,
                        "label": "两根积",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    7,
                    10
                ]
            },
            "knowledge": "韦达定理应用",
            "difficulty": 2,
            "hint": "两根之积=c/a",
            "variants": [
                {
                    "question": "x²-5x+6=0 两根积？",
                    "formula": "6/1=6",
                    "answer": 6,
                    "hint": "c/a"
                },
                {
                    "question": "x²+4x+3=0 两根积？",
                    "formula": "3/1=3",
                    "answer": 3,
                    "hint": "c/a"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "方程 x²-7x+10=0 两根之积",
                        "两根之和",
                        "判别式的值",
                        "常数项10"
                    ],
                    "answer": "方程 x²-7x+10=0 两根之积",
                    "explain": "用韦达定理直接求两根乘积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "首项 a=1，常数项 c=10",
                        "一次项系数 b=10",
                        "c=-7",
                        "a=0"
                    ],
                    "answer": "首项 a=1，常数项 c=10",
                    "explain": "求两根之积需要 a 与 c，这里 a=1、c=10。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "x1·x2=c/a=10/1=10",
                        "x1·x2=-b/a=7",
                        "x1·x2=-7",
                        "x1·x2=5"
                    ],
                    "answer": "x1·x2=c/a=10/1=10",
                    "explain": "公式：韦达定理 x1·x2=c/a。代入 c=10、a=1：10/1=10。结果：两根之积为 10。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "方程 x²-7x+10=0 的两根为2和5。数轴上两处根的乘积2×5=10，正好等于常数项，体现了韦达定理的几何一致性。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "两根之积恒等于 c/a。a=1、c=10，乘积为10。它和两根之和不同公式，求和用 -b/a，求积用 c/a，别弄混。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "两根之积即常数项本身，源于因式展开后所有常数项的累乘；同一方程里只要系数给出，两根的积恒可一眼读出。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "直角三角形斜边长10，一个锐角为30度。小刚想求30度角所对的直角边。",
            "question": "30度角所对的直角边是多少？",
            "formula": "10 * sin30 = 10 * 0.5 = 5",
            "answer": 5,
            "choices": [
                5,
                10,
                8,
                6
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 10,
                "points": [
                    {
                        "pos": 5,
                        "label": "对边",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 10,
                        "label": "斜边",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    5,
                    10
                ]
            },
            "knowledge": "解直角三角形应用",
            "difficulty": 2,
            "hint": "对边=斜边×sin(角度)",
            "variants": [
                {
                    "question": "斜边20，30度所对直角边？",
                    "formula": "20*0.5=10",
                    "answer": 10,
                    "hint": "斜边乘sin30"
                },
                {
                    "question": "斜边8，30度所对直角边？",
                    "formula": "8*0.5=4",
                    "answer": 4,
                    "hint": "斜边的一半"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "30°角所对的直角边长度",
                        "斜边的长度",
                        "邻边的长度",
                        "另一锐角的度数"
                    ],
                    "answer": "30°角所对的直角边长度",
                    "explain": "已知斜边与一个锐角，求这个角所对的那条直角边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "斜边=10，锐角=30°，求对边",
                        "斜边=10，求邻边",
                        "已知两条直角边",
                        "角度是45°"
                    ],
                    "answer": "斜边=10，锐角=30°，求对边",
                    "explain": "对边与斜边都用正弦联系，已知斜边10、角30°。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "对边=斜边×sin30°=10×0.5=5",
                        "对边=斜边×sin30°=10",
                        "对边=10×0.8=8",
                        "对边=10×0.6=6"
                    ],
                    "answer": "对边=斜边×sin30°=10×0.5=5",
                    "explain": "公式：对边=斜边×sinθ。代入斜边10、sin30°=0.5：10×0.5=5。结果：对边为 5。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形中，30°所对的直角边是最短的那条。在30°-60°-90°直角三角形里，30°对边恰为斜边的一半(10÷2=5)。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "由 sinθ=对边/斜边 变形成 对边=斜边×sinθ。sin30°=0.5，所以对边=10×0.5=5，且30°对边等于斜边一半。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解直角三角形时，根据“已知量和所求边的关系”选择正弦(对/斜)、余弦(邻/斜)、正切(对/邻)对应公式变形求解。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "三角形两条边长分别是3和4，夹角为90度。小红用余弦定理求夹角所对的边。",
            "question": "90度角所对的边是多少？",
            "formula": "sqrt(3^2+4^2)=5",
            "answer": 5,
            "choices": [
                5,
                6,
                7,
                4
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        3,
                        4,
                        5
                    ]
                }
            },
            "knowledge": "余弦定理",
            "difficulty": 3,
            "hint": "夹角90度时余弦定理就是勾股定理",
            "variants": [
                {
                    "question": "两边5、12夹角90度，对边？",
                    "formula": "sqrt(25+144)=13",
                    "answer": 13,
                    "hint": "勾股数"
                },
                {
                    "question": "两边6、8夹角90度，对边？",
                    "formula": "sqrt(36+64)=10",
                    "answer": 10,
                    "hint": "勾股数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "90°夹角所对的边(斜边)",
                        "两条直角边的长度",
                        "锐角的大小",
                        "三角形的面积"
                    ],
                    "answer": "90°夹角所对的边(斜边)",
                    "explain": "已知两边3、4及其夹角90°，求夹角所对的那条边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两边3、4，夹角90°",
                        "三边都是直角边",
                        "夹角是60°",
                        "只有一条边"
                    ],
                    "answer": "两边3、4，夹角90°",
                    "explain": "夹角90°意味着用余弦定理时 cos90°=0，退化为勾股定理。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "勾股定理：√(3²+4²)=√25=5",
                        "3²+4²=6",
                        "√(3+4)=√7",
                        "两条边直接相加得7"
                    ],
                    "answer": "勾股定理：√(3²+4²)=√25=5",
                    "explain": "按直角情形处理：3 与 4 各自平方后相加为 25，再开平方得第三边 5，即广为流传的“勾三股四弦五”。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图形是一个直角三角形，两条直角边3和4构成90°夹角，斜边是它们的对角线。3-4-5 是经典勾股数组合。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "90°夹角时余弦定理 c²=a²+b²-2ab·cos90° 中 cos90°=0，退化成勾股定理 c²=a²+b²。算得 c=5。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知夹角与其夹的两条边求对边，若夹角恰为直角则退化为勾股；若为一般角，则要扣掉 2ab·cosC 这一交叉项才能还原第三边。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "直角三角形两条直角边分别是根号3和根号6。小华求斜边的长度。",
            "question": "斜边长度是多少？",
            "formula": "sqrt(3+6)=sqrt(9)=3",
            "answer": 3,
            "choices": [
                3,
                2,
                4,
                9
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 3,
                "points": [
                    {
                        "pos": 2,
                        "label": "√3",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 3,
                        "label": "斜边",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    2,
                    3
                ]
            },
            "knowledge": "二次根式与勾股定理",
            "difficulty": 3,
            "hint": "斜边²=(√3)²+(√6)²=3+6=9",
            "variants": [
                {
                    "question": "直角边√2、√7，斜边？",
                    "formula": "sqrt(2+7)=3",
                    "answer": 3,
                    "hint": "平方和后开方"
                },
                {
                    "question": "直角边√5、√11，斜边？",
                    "formula": "sqrt(5+11)=4",
                    "answer": 4,
                    "hint": "平方相加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "直角三角形的斜边长度",
                        "一条直角边的长度",
                        "两条直角边的平方和",
                        "三角形的周长"
                    ],
                    "answer": "直角三角形的斜边长度",
                    "explain": "已知两条直角边√3和√6，求斜边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "直角边√3和√6，用斜边²=直角边平方和",
                        "直角边是3和6",
                        "三边都是整数",
                        "只有一条直角边"
                    ],
                    "answer": "直角边√3和√6，用斜边²=直角边平方和",
                    "explain": "斜边的平方等于两条直角边的平方和（勾股定理）。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "斜边²=(√3)²+(√6)²=3+6=9，斜边=3",
                        "斜边=√3+√6",
                        "斜边²=3×6=18",
                        "斜边=9"
                    ],
                    "answer": "斜边²=(√3)²+(√6)²=3+6=9，斜边=3",
                    "explain": "逐项平方：先算(√3)²=3、(√6)²=6，相加得9，再开平方得斜边 3，全程不要在相加前开根号。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形两条直角边是带根号的线段√3与√6。把它们的平方相加得到9，再开平方得到斜边3，图形整体是整数边长。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平方运算消去根号：(√3)²=3、(√6)²=6，和为9，斜边=√9=3。要平方后再相加，不能直接把根号里的数相加(√3+√6≠√9)。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "凡遇根号边长，先利用 (√a)²=a 去根号再套勾股定理；(√a)²+(√b)²=a+b，得到的结果再判断是否仍需开方。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "两个三角形相似，相似比为1:3，大三角形的一条边是12。小华求小三角形对应边。",
            "question": "小三角形对应边是多少？",
            "formula": "12 * 1 / 3 = 4",
            "answer": 4,
            "choices": [
                4,
                36,
                9,
                6
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 12,
                "points": [
                    {
                        "pos": 4,
                        "label": "小",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 12,
                        "label": "大",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    4,
                    12
                ]
            },
            "knowledge": "相似三角形应用",
            "difficulty": 2,
            "hint": "对应边成比例：小÷大=1÷3",
            "variants": [
                {
                    "question": "相似比2:7，小边6，大边？",
                    "formula": "6*7/2=21",
                    "answer": 21,
                    "hint": "乘比例倒数"
                },
                {
                    "question": "相似比3:4，大边16，小边？",
                    "formula": "16*3/4=12",
                    "answer": 12,
                    "hint": "乘3/4"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "小三角形的对应边长度",
                        "大三角形的对应边",
                        "两个三角形的相似比",
                        "大三角形的面积"
                    ],
                    "answer": "小三角形的对应边长度",
                    "explain": "两个三角形相似比1:3，已知大边12，求小三角形对应边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "相似比1:3，大三角形对应边12",
                        "相似比3:1，小边12",
                        "两个三角形面积相等",
                        "只有小三角形边长"
                    ],
                    "answer": "相似比1:3，大三角形对应边12",
                    "explain": "相似比1:3，即小三角形边是大三角形的1/3。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "小边=大边×1/3=12×1/3=4",
                        "小边=12×3=36",
                        "小边=12÷1=9",
                        "小边=12-6=6"
                    ],
                    "answer": "小边=大边×1/3=12×1/3=4",
                    "explain": "公式：对应边成比例，小边/大边=1/3。代入大边12：12×(1/3)=4。结果：小边为 4。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "两个相似三角形形状相同、大小放大3倍。把大三角形按1:3缩小，每条对应边都变为原来的1/3，故12变成4。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "相似三角形对应边成比例：小/大=1/3。所以小边=12×(1/3)=4。相似比可以是小:大，也可能是大:小，注意谁是分子。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知相似比与一条边，求对应边用比例式“小边:大边=相似比”，把已知边代入并交叉相乘，求出未知边。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "不等式组 2 < x < 5，小红想数一数满足条件的整数解的个数。",
            "question": "整数解有多少个？",
            "formula": "整数解：3、4，共2个",
            "answer": 2,
            "choices": [
                2,
                3,
                4,
                1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 2,
                "end": 5,
                "points": [
                    {
                        "pos": 3,
                        "label": "3",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 4,
                        "label": "4",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    3,
                    4
                ]
            },
            "knowledge": "一元一次不等式组",
            "difficulty": 2,
            "hint": "大于2小于5的整数是3和4",
            "variants": [
                {
                    "question": "1<x<4 的整数解个数？",
                    "formula": "2、3，共2个",
                    "answer": 2,
                    "hint": "数整数"
                },
                {
                    "question": "0≤x≤3 的整数解个数？",
                    "formula": "0、1、2、3，共4个",
                    "answer": 4,
                    "hint": "含端点"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "不等式2<x<5的整数解个数",
                        "不等式的解集范围",
                        "不等式两端的端点",
                        "不等式的符号"
                    ],
                    "answer": "不等式2<x<5的整数解个数",
                    "explain": "求出满足2<x<5的所有整数，再数一数有多少个。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "开区间2<x<5，两端点不取",
                        "闭区间含2和5",
                        "只有下限没有上限",
                        "x可取小数"
                    ],
                    "answer": "开区间2<x<5，两端点不取",
                    "explain": "严格不等号<表示2和5本身都不在解集内，x严格大于2且小于5。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "列整数：3、4，共2个",
                        "列整数：2、3、4、5，共4个",
                        "列整数：2、3、4，共3个",
                        "1个"
                    ],
                    "answer": "列整数：3、4，共2个",
                    "explain": "方法：列出区间内所有整数。代入：2<x<5 内为 3、4。结果：整数解共 2 个。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从2到5之间用空心圆圈标记端点2和5(表示不包含)，中间的整数点3、4被实心强调，数一数正好2个整数。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "开区间(2,5)的整数只有3和4，因为端点2、5不含。若写2≤x≤5则会多含端点，答案不同。2是最小可能数。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "数不等式整数解，先确认端点是开(<>)还是闭(≤≥)确定是否含端点，再列出区间内全部整数逐一计数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "标准正态分布中，小红想知道约有多少百分比的数据落在均值两侧各1个标准差范围内。",
            "question": "约有多少百分比的数据落在均值±1个标准差内？",
            "formula": "约68%",
            "answer": 68,
            "choices": [
                68,
                95,
                99,
                50
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -3,
                "end": 3,
                "points": [
                    {
                        "pos": -1,
                        "label": "-1σ",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 1,
                        "label": "+1σ",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -1,
                    1
                ]
            },
            "knowledge": "正态分布",
            "difficulty": 2,
            "hint": "正态分布 68-95-99.7 法则",
            "variants": [
                {
                    "question": "落在±2个标准差内约多少%？",
                    "formula": "约95%",
                    "answer": 95,
                    "hint": "68-95-99.7法则"
                },
                {
                    "question": "落在±3个标准差内约多少%？",
                    "formula": "约99.7%",
                    "answer": 99.7,
                    "hint": "68-95-99.7法则"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "均值±1个标准差内的数据百分比",
                        "±2个标准差内的百分比",
                        "正态分布的均值",
                        "标准差的大小"
                    ],
                    "answer": "均值±1个标准差内的数据百分比",
                    "explain": "按正态经验法则，问落在均值两侧各1个标准差内的比例。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "标准正态分布，问均值±1σ的占比",
                        "问均值±2σ的占比",
                        "问均值±3σ的占比",
                        "数据均匀分布"
                    ],
                    "answer": "标准正态分布，问均值±1σ的占比",
                    "explain": "锁定的是68-95-99.7法则中的“±1个标准差”。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "用68-95-99.7法则，±1σ约占总数的68%",
                        "±1σ占约95%",
                        "±1σ占约99%",
                        "±1σ占约50%"
                    ],
                    "answer": "用68-95-99.7法则，±1σ约占总数的68%",
                    "explain": "公式：正态分布经验法则。代入：均值±1σ范围。结果：约 68% 的数据落入该区间。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "标准正态分布曲线关于均值对称、呈钟形。曲线下被±1σ两条竖线围住的中间区域，宽度占整个分布的大部分，即约68%。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "68-95-99.7法则：约68%的数据落在区间[μ-σ, μ+σ]内。这里就是+1与-1个标准差的范围，所以约68%。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "对正态分布，均值μ、标准差σ给出经验区间：±1σ含约68%、±2σ含约95%、±3σ含约99.7%，95%常对应“约2个标准差”。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        }
    ]
};
