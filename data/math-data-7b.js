window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["7b"] = {
    "title": "七年级下册·相交线与平行线·平面直角坐标系",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
        {
            "id": "7B-01",
            "name": "相交线与平行线",
            "concept": "两条直线被第三条直线所截，同位角相等则两直线平行",
            "prerequisite": "7A-09",
            "extends": "7B-02 三角形的内角",
            "visualStrategy": "动态角度测量",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7B-02",
            "name": "三角形的内角与外角",
            "concept": "三角形内角和180度，外角等于不相邻两内角之和",
            "prerequisite": "7B-01",
            "extends": "7B-03 全等三角形",
            "visualStrategy": "角度测量",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7B-03",
            "name": "全等三角形",
            "concept": "能够完全重合的两个三角形全等，判定方法有SSS/SAS/ASA/AAS",
            "prerequisite": "7B-02",
            "extends": "7B-04 等腰三角形",
            "visualStrategy": "重叠对比",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "7B-04",
            "name": "等腰三角形",
            "concept": "两腰相等的三角形，底角相等",
            "prerequisite": "7B-03",
            "extends": "7B-05 尺规作图",
            "visualStrategy": "对称折叠",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "7B-05",
            "name": "尺规作图",
            "concept": "用圆规和直尺作角平分线、垂直平分线",
            "prerequisite": "7B-04",
            "extends": "7B-06 勾股定理",
            "visualStrategy": "作图演示",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "7B-06",
            "name": "勾股定理",
            "concept": "直角三角形两直角边的平方和等于斜边的平方",
            "prerequisite": "7B-05",
            "extends": "7B-07 实数",
            "visualStrategy": "面积拼接",
            "visualType": "areaModel",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "7B-07",
            "name": "实数",
            "concept": "有理数和无理数统称实数，数轴上的点与实数一一对应",
            "prerequisite": "7B-06",
            "extends": "8A-01 二次根式",
            "visualStrategy": "数轴覆盖",
            "visualType": "numberLine",
            "coreLiteracy": "数形结合",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "7B-08",
            "name": "二元一次方程组",
            "concept": "含两个未知数的一次方程组，代入法或消元法求解",
            "prerequisite": "7A-06",
            "extends": "7B-09 不等式组",
            "visualStrategy": "双变量模型",
            "visualType": "barModel",
            "coreLiteracy": "方程思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "7B-09",
            "name": "不等式组",
            "concept": "多个不等式的公共解集，可在数轴上表示",
            "prerequisite": "7B-08",
            "extends": "7B-10 数据的分析",
            "visualStrategy": "数轴重叠",
            "visualType": "numberLine",
            "coreLiteracy": "模型思想",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "7B-10",
            "name": "数据的分析",
            "concept": "平均数、中位数、众数、方差描述数据的集中与离散程度",
            "prerequisite": "7A-14",
            "extends": "8A-02 一次函数",
            "visualStrategy": "统计图表",
            "visualType": "barModel",
            "coreLiteracy": "数据分析",
            "difficulty": 1,
            "isKeyTopic": false
        },
        {
            "id": "7B-11",
            "name": "图形的平移",
            "concept": "平移不改变图形的形状和大小，只改变位置",
            "prerequisite": "7B-01",
            "extends": "7B-12 图形的旋转",
            "visualStrategy": "网格平移",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "7B-12",
            "name": "图形的旋转",
            "concept": "旋转围绕定点转动，对应点到定点距离相等",
            "prerequisite": "7B-11",
            "extends": "7B-13 中心对称",
            "visualStrategy": "旋转动画",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "7B-13",
            "name": "中心对称",
            "concept": "绕某点旋转180度后与原图形重合的图形",
            "prerequisite": "7B-12",
            "extends": "8A-01 二次根式",
            "visualStrategy": "对称中心",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "7B-14",
            "name": "四边形概述",
            "concept": "平行四边形对边平行且相等，对角线互相平分",
            "prerequisite": "7B-13",
            "extends": "8A-02 一次函数",
            "visualStrategy": "平行四边形",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "7B-15",
            "name": "平行四边形",
            "concept": "两组对边分别平行的四边形",
            "prerequisite": "7B-14",
            "extends": "8A-03 反比例函数",
            "visualStrategy": "动态变形",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "7B-16",
            "name": "矩形、菱形、正方形",
            "concept": "特殊平行四边形：矩形对角线相等，菱形对角线垂直",
            "prerequisite": "7B-15",
            "extends": "8A-04 二次方程",
            "visualStrategy": "分类对比",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "7B-17",
            "name": "几何变换综合",
            "concept": "平移、旋转、轴对称是三种基本几何变换",
            "prerequisite": "7B-16",
            "extends": "9A-01 二次函数",
            "visualStrategy": "变换组合",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "7B-18",
            "name": "数据的整理与描述",
            "concept": "收集、整理、描述数据，制作统计图表",
            "prerequisite": "7B-17",
            "extends": "7B-19 比例线段",
            "visualStrategy": "统计图表",
            "visualType": "barModel",
            "coreLiteracy": "数据意识",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7B-19",
            "name": "比例线段与平行线",
            "concept": "平行线分线段成比例定理",
            "prerequisite": "7A-19",
            "extends": "8A-01 二次根式",
            "visualStrategy": "平行线截线",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "7B-20",
            "name": "黄金分割",
            "concept": "把一条线段分成两部分，使较大部分是全长与较小部分的比例中项",
            "prerequisite": "7B-19",
            "extends": "7B-21 相似三角形初步",
            "visualStrategy": "黄金比例",
            "visualType": "barModel",
            "coreLiteracy": "数学文化",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "7B-21",
            "name": "相似三角形初步",
            "concept": "对应角相等，对应边成比例的三角形",
            "prerequisite": "7B-20",
            "extends": "8B-01 相似三角形",
            "visualStrategy": "缩放演示",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "7B-22",
            "name": "三角形的面积",
            "concept": "三角形面积=底×高÷2",
            "prerequisite": "7B-11",
            "extends": "7B-23 面积与比例",
            "visualStrategy": "等积变形",
            "visualType": "geometry",
            "coreLiteracy": "转化思想",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "7B-23",
            "name": "面积与比例",
            "concept": "等高三角形面积比等于底边比",
            "prerequisite": "7B-22",
            "extends": "7B-24 方程与不等式初步",
            "visualStrategy": "面积分割",
            "visualType": "geometry",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "7B-24",
            "name": "方程与不等式初步",
            "concept": "用方程和不等式解决几何问题",
            "prerequisite": "7B-17",
            "extends": "8A-01 二次根式",
            "visualStrategy": "几何建模",
            "visualType": "barModel",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": true
        }
    ],
    "units": [
        {
            "name": "相交线与平行线",
            "level": "current",
            "children": [
                {
                    "name": "相交线",
                    "level": "done"
                },
                {
                    "name": "平行线",
                    "level": "current"
                },
                {
                    "name": "判定与性质",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "平面直角坐标系",
            "level": "locked",
            "children": [
                {
                    "name": "坐标系认识",
                    "level": "locked"
                },
                {
                    "name": "点的坐标",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "三角形",
            "level": "locked",
            "children": [
                {
                    "name": "三角形边关系",
                    "level": "locked"
                },
                {
                    "name": "三角形内角和",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "多边形",
            "level": "locked",
            "children": [
                {
                    "name": "多边形内角和",
                    "level": "locked"
                },
                {
                    "name": "外角和",
                    "level": "locked"
                }
            ]
        }
    ],
    "problems": [
        {
            "scene": "两条平行线被一条直线所截，形成多个角。小明量得其中一个角为65度，想知道对应的同位角和同旁内角各是多少度。",
            "question": "同位角和同旁内角分别是多少度？",
            "formula": "同位角=65 同旁内角=115",
            "answer": 65,
            "choices": [
                65,
                115,
                25,
                155
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallel",
                "params": {
                    "angle1": 65,
                    "angle2": 115
                }
            },
            "knowledge": "平行线性质",
            "difficulty": 2,
            "hint": "同位角相等，同旁内角互补",
            "variants": [
                {
                    "question": "平行线被截，同位角为70度，同旁内角为？",
                    "formula": "同旁内角=180-70",
                    "answer": 110,
                    "hint": "互补关系"
                },
                {
                    "question": "同旁内角为120度，同位角为？",
                    "formula": "同位角=180-120",
                    "answer": 60,
                    "hint": "先求邻补角"
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
                    "explain": "题目说「两条平行线被一条直线所截，形成多个角。小明量得其中一个角为65度，想知道对应的同位角和同旁内角各是多少度。」，问的是「同位角和同旁内角分别是多少度？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：65 和 115",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：65 和 115",
                    "explain": "从题目中找到的关键数是：65、115"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "乘法",
                        "加法",
                        "减法",
                        "计算"
                    ],
                    "answer": "计算",
                    "explain": "计算：同位角=65 同旁内角=115=65"
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
                    "text": "同位角=65 同旁内角=115=65",
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
            "scene": "在平面直角坐标系中，点A的坐标是(3,4)，点B的坐标是(6,8)。小红想算出这两点之间的距离。",
            "question": "A、B两点距离是多少？",
            "formula": "sqrt((6-3)^2+(8-4)^2) = ?",
            "answer": 5,
            "choices": [
                4,
                5,
                6,
                7
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 10,
                "points": [
                    {
                        "pos": 5,
                        "label": "AB距离",
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "两点间距离公式",
            "difficulty": 3,
            "hint": "距离=sqrt(横差^2+纵差^2)",
            "variants": [
                {
                    "question": "点A(1,1)和点B(4,5)之间的距离？",
                    "formula": "sqrt((4-1)^2+(5-1)^2)",
                    "answer": 5,
                    "hint": "横差3，纵差4"
                },
                {
                    "question": "点A(2,3)和点B(5,7)之间的距离？",
                    "formula": "sqrt((5-2)^2+(7-3)^2)",
                    "answer": 5,
                    "hint": "勾股数3-4-5"
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
                    "explain": "题目说「在平面直角坐标系中，点A的坐标是(3,4)，点B的坐标是(6,8)。小红想算出这两点之间的距离。」，问的是「A、B两点距离是多少？」，这是求总数"
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
                    "explain": "从题目中找到的关键数是：6、3、2、8、4、2"
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
                    "explain": "加法：sqrt((6-3)^2+(8-4)^2) = ?=5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上从到10，帮助理解数量关系和运算过程",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "sqrt((6-3)^2+(8-4)^2) = ?=5",
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
            "scene": "一个三角形的两个内角分别是45度和60度，小明想知道第三个角是多少度。",
            "question": "第三个角是多少度？",
            "formula": "180 - 45 - 60 = ?",
            "answer": 75,
            "choices": [
                75,
                65,
                85,
                55
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "angles": [
                        45,
                        60,
                        75
                    ]
                }
            },
            "knowledge": "三角形内角和",
            "difficulty": 2,
            "hint": "三角形内角和180度",
            "variants": [
                {
                    "question": "三角形两个角为90度和30度，第三个角？",
                    "formula": "180-90-30=?",
                    "answer": 60,
                    "hint": "直角三角形"
                },
                {
                    "question": "三角形两个角为55度和55度，第三个角？",
                    "formula": "180-55-55=?",
                    "answer": 70,
                    "hint": "等腰三角形"
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
                    "explain": "题目说「一个三角形的两个内角分别是45度和60度，小明想知道第三个角是多少度。」，问的是「第三个角是多少度？」，这是求差是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：180 和 45",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：180 和 45",
                    "explain": "从题目中找到的关键数是：180、45、60"
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
                    "explain": "减法：180 - 45 - 60 = ?=75"
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
                    "text": "180 - 45 - 60 = ?=75",
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
            ]
        },
        {
            "scene": "小明用24米长的栅栏围一个长方形菜地，长是宽的2倍少1米。他想算出菜地的长和宽各是多少。",
            "question": "菜地的长和宽各是多少米？",
            "formula": "2(x+2x-1)=24, x=4",
            "answer": 4,
            "choices": [
                4,
                5,
                3,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 24,
                "parts": [
                    {
                        "label": "宽",
                        "val": 4,
                        "color": "#00A896"
                    },
                    {
                        "label": "长",
                        "val": 7,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "一元一次方程应用",
            "difficulty": 3,
            "hint": "宽=x，长=2x-1，周长=2(长+宽)",
            "variants": [
                {
                    "question": "周长36米，长是宽的2倍，长和宽各多少？",
                    "formula": "2(x+2x)=36",
                    "answer": 6,
                    "hint": "宽=6，长=12"
                },
                {
                    "question": "周长28米，长比宽多4米，长和宽各多少？",
                    "formula": "2(x+(x+4))=28",
                    "answer": 5,
                    "hint": "宽=5，长=9"
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
                    "explain": "题目说「小明用24米长的栅栏围一个长方形菜地，长是宽的2倍少1米。他想算出菜地的长和宽各是多少。」，问的是「菜地的长和宽各是多少米？」，这是求计算结果"
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
                    "explain": "从题目中找到的关键数是：2、2、1、24、4"
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
                    "explain": "计算：2(x+2x-1)=24, x=4=4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中有2条等长的条形，每条代表4，合起来就是24",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "2(x+2x-1)=24, x=4=4",
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
            "scene": "一个n边形的内角和是1080度，小红想知道这是几边形。",
            "question": "这是几边形？",
            "formula": "(n-2)*180=1080, n=8",
            "answer": 8,
            "choices": [
                8,
                6,
                10,
                7
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "polygon",
                "params": {
                    "sides": 8
                }
            },
            "knowledge": "多边形内角和",
            "difficulty": 3,
            "hint": "内角和=(n-2)*180度",
            "variants": [
                {
                    "question": "内角和720度，这是几边形？",
                    "formula": "(n-2)*180=720",
                    "answer": 6,
                    "hint": "n-2=4"
                },
                {
                    "question": "内角和1440度，这是几边形？",
                    "formula": "(n-2)*180=1440",
                    "answer": 10,
                    "hint": "n-2=8"
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
                    "explain": "题目说「一个n边形的内角和是1080度，小红想知道这是几边形。」，问的是「这是几边形？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：2 和 180",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：2 和 180",
                    "explain": "从题目中找到的关键数是：2、180、1080、8"
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
                    "explain": "乘法：(n-2)*180=1080, n=8=8"
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
                    "text": "(n-2)*180=1080, n=8=8",
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
            "scene": "一块三角形地的底是12米，高是8米。小红想算出这块地的面积，以及如果底增加4米面积增加多少。",
            "question": "原面积和增加面积各是多少？",
            "formula": "原面积=48, 增加=16",
            "answer": 48,
            "choices": [
                48,
                64,
                16,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 12,
                    "height": 8
                }
            },
            "knowledge": "三角形面积",
            "difficulty": 2,
            "hint": "面积=底×高÷2",
            "variants": [
                {
                    "question": "三角形底10高6，面积？",
                    "formula": "10*6/2",
                    "answer": 30,
                    "hint": "底乘高除以2"
                },
                {
                    "question": "三角形面积24底8，高？",
                    "formula": "24*2/8",
                    "answer": 6,
                    "hint": "高=面积×2÷底"
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
                    "explain": "题目说「一块三角形地的底是12米，高是8米。小红想算出这块地的面积，以及如果底增加4米面积增加多少。」，问的是「原面积和增加面积各是多少？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：12、8、4",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：12、8、4",
                    "explain": "从题目中找到的关键数是：12（底）、8（高）、4（增加量）"
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
                    "explain": "乘法：原面积=12×8÷2=48，增加面积=4×8÷2=16"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示了三角形及其底和高的关系",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积=底×高÷2=12×8÷2=48",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "三角形面积=底×高÷2",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明测量一个平行四边形菜地，底边长15米，对应高是8米。他想知道这块地的面积。",
            "question": "平行四边形菜地面积是多少平方米？",
            "formula": "15 * 8 = ?",
            "answer": 120,
            "choices": [
                120,
                60,
                23,
                46
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "base": 15,
                    "height": 8
                }
            },
            "knowledge": "平行四边形面积",
            "difficulty": 1,
            "hint": "面积=底×高",
            "variants": [
                {
                    "question": "平行四边形底20高5，面积？",
                    "formula": "20*5",
                    "answer": 100,
                    "hint": "直接相乘"
                },
                {
                    "question": "平行四边形面积72底12，高？",
                    "formula": "72/12",
                    "answer": 6,
                    "hint": "高=面积÷底"
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
                    "explain": "题目说「小明测量一个平行四边形菜地，底边长15米，对应高是8米。他想知道这块地的面积。」，问的是「平行四边形菜地面积是多少平方米？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：15 和 8",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：15 和 8",
                    "explain": "从题目中找到的关键数是：15（底）、8（高）"
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
                    "explain": "乘法：面积=底×高=15×8=120平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中的平行四边形展示底和高",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积=15×8=120平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形面积=底×高",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个梯形的上底是6厘米，下底是10厘米，高是5厘米。小红想算出它的面积。",
            "question": "梯形的面积是多少平方厘米？",
            "formula": "(6+10)*5/2 = ?",
            "answer": 40,
            "choices": [
                40,
                80,
                30,
                50
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "trapezoid",
                "params": {
                    "top": 6,
                    "bottom": 10,
                    "height": 5
                }
            },
            "knowledge": "梯形面积",
            "difficulty": 2,
            "hint": "面积=(上底+下底)×高÷2",
            "variants": [
                {
                    "question": "梯形上底8下底12高6，面积？",
                    "formula": "(8+12)*6/2",
                    "answer": 60,
                    "hint": "先加后乘再除"
                },
                {
                    "question": "梯形面积36上底5下底7，高？",
                    "formula": "36*2/(5+7)",
                    "answer": 6,
                    "hint": "高=面积×2÷(上底+下底)"
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
                    "explain": "题目说「一个梯形的上底是6厘米，下底是10厘米，高是5厘米。小红想算出它的面积。」，问的是「梯形的面积是多少平方厘米？」，这是求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：6、10、5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：6、10、5",
                    "explain": "从题目中找到的关键数是：6（上底）、10（下底）、5（高）"
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
                    "explain": "乘法：面积=(6+10)×5÷2=16×5÷2=40平方厘米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示梯形的上底、下底和高",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积=(6+10)×5÷2=40",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "梯形面积=(上底+下底)×高÷2",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用36米长的篱笆围一个长方形鸡舍，长是宽的2倍。他想算出鸡舍的长和宽。",
            "question": "鸡舍的长和宽各是多少米？",
            "formula": "2(x+2x)=36, x=6",
            "answer": 6,
            "choices": [
                6,
                12,
                9,
                18
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 36,
                "parts": [
                    {
                        "label": "宽",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "长",
                        "val": 12,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "周长与方程",
            "difficulty": 3,
            "hint": "设宽为x，长为2x，周长=2(长+宽)",
            "variants": [
                {
                    "question": "周长24米，长是宽的3倍，长宽各多少？",
                    "formula": "2(x+3x)=24, x=3",
                    "answer": 3,
                    "hint": "宽=3，长=9"
                },
                {
                    "question": "周长30米，长比宽多5米，长宽各多少？",
                    "formula": "2(x+(x+5))=30",
                    "answer": 5,
                    "hint": "宽=5，长=10"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每份是多少",
                        "总数",
                        "有几份",
                        "差是多少"
                    ],
                    "answer": "每份是多少",
                    "explain": "题目说「小明用36米长的篱笆围一个长方形鸡舍，长是宽的2倍。他想算出鸡舍的长和宽。」，问的是「鸡舍的长和宽各是多少米？」，这是求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：36、2",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：36、2",
                    "explain": "从题目中找到的关键数是：36（周长）、2（倍数关系）"
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
                    "explain": "除法：设宽=x，长=2x，2(x+2x)=36，3x=18，x=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示长方形的长和宽的关系",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "宽=6米，长=12米，周长=2×(6+12)=36米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "利用周长公式列方程求解",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校美术室有一块平行四边形展示板，底是1.5米，高是1.2米。王老师想知道给这块板贴饰面的费用，已知每平方米饰面80元。",
            "question": "贴饰面需要多少元？",
            "formula": "1.5*1.2*80 = ?",
            "answer": 144,
            "choices": [
                144,
                120,
                160,
                180
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 144,
                "parts": [
                    {
                        "label": "面积",
                        "val": 1.8,
                        "color": "#00A896"
                    },
                    {
                        "label": "单价",
                        "val": 80,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "面积与价格计算",
            "difficulty": 2,
            "hint": "先算面积再算总价",
            "variants": [
                {
                    "question": "平行四边形底2米高1.5米，每平方米100元，总价？",
                    "formula": "2*1.5*100",
                    "answer": 300,
                    "hint": "面积×单价"
                },
                {
                    "question": "平行四边形面积2.4平方米，每平方米75元，总价？",
                    "formula": "2.4*75",
                    "answer": 180,
                    "hint": "直接相乘"
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
                    "explain": "题目说「学校美术室有一块平行四边形展示板，底是1.5米，高是1.2米。王老师想知道给这块板贴饰面的费用，已知每平方米饰面80元。」，问的是「贴饰面需要多少元？」，这是求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1.5、1.2、80",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1.5、1.2、80",
                    "explain": "从题目中找到的关键数是：1.5（底）、1.2（高）、80（单价）"
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
                    "explain": "乘法：面积=1.5×1.2=1.8平方米，总价=1.8×80=144元"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示平行四边形及面积计算",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积=1.5×1.2=1.8㎡，总价=1.8×80=144元",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "总价=面积×单价",
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
                        "每份是多少",
                        "总数",
                        "有几份",
                        "差是多少"
                    ],
                    "answer": "每份是多少",
                    "explain": "题目求红球和白球各多少，求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：3、2、50",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：3、2、50",
                    "explain": "从题目中找到的关键数是：3、2、50"
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
                    "explain": "乘法：总份数=5，红球=50×3/5=30，白球=50×2/5=20"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中按比例展示红球30个和白球20个",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "红球=50×3/5=30，白球=50×2/5=20",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "按比例分配：每份=总量÷总份数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用相似三角形的原理测量旗杆高度：他站在旗杆旁，身高1.6米，影长2米，旗杆影长15米。",
            "question": "旗杆的高度是多少米？",
            "formula": "旗杆高/15=1.6/2, 旗杆高=12",
            "answer": 12,
            "choices": [
                12,
                10,
                15,
                8
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "height": 12,
                    "base": 15
                }
            },
            "knowledge": "相似三角形应用",
            "difficulty": 3,
            "hint": "同一时刻，物高与影长成正比",
            "variants": [
                {
                    "question": "树高3米，影长4米，同一时刻电线杆影长10米，电线杆多高？",
                    "formula": "3*10/4=7.5",
                    "answer": 7.5,
                    "hint": "物高与影长成正比"
                },
                {
                    "question": "测得一建筑物影长30米，同时1.5米竹竿影长2米，建筑物多高？",
                    "formula": "1.5*30/2=22.5",
                    "answer": 22.5,
                    "hint": "比例关系"
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
                    "explain": "题目求旗杆高度，求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：1.6、2、15",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：1.6、2、15",
                    "explain": "从题目中找到的关键数是：1.6、2、15"
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
                    "explain": "乘法：旗杆高=1.6×15÷2=12米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示相似三角形的测量原理",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "旗杆高/15=1.6/2，旗杆高=12米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "同一时刻，物高与影长成正比",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校测量一块梯形土地的面积，上底8米，下底12米，高5米。校长想知道这块地的面积。",
            "question": "梯形土地的面积是多少平方米？",
            "formula": "(8+12)*5/2=50",
            "answer": 50,
            "choices": [
                50,
                100,
                60,
                40
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "trapezoid",
                "params": {
                    "a": 8,
                    "b": 12,
                    "h": 5
                }
            },
            "knowledge": "梯形面积",
            "difficulty": 2,
            "hint": "梯形面积=(上底+下底)×高÷2",
            "variants": [
                {
                    "question": "平行四边形底10厘米，高6厘米，面积是多少？",
                    "formula": "10*6=60",
                    "answer": 60,
                    "hint": "平行四边形面积=底×高"
                },
                {
                    "question": "三角形底15分米，高8分米，面积是多少？",
                    "formula": "15*8/2=60",
                    "answer": 60,
                    "hint": "三角形面积=底×高÷2"
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
                    "explain": "题目求梯形面积，求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：8、12、5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：8、12、5",
                    "explain": "从题目中找到的关键数是：8（上底）、12（下底）、5（高）"
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
                    "explain": "乘法：面积=(8+12)×5÷2=50平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示梯形的上底、下底和高",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积=(8+12)×5÷2=50平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "梯形面积=(上底+下底)×高÷2",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用方程解决几何问题：一个三角形的底比高多3厘米，面积是28平方厘米。他想求出三角形的底和高。",
            "question": "三角形的底和高各是多少厘米？",
            "formula": "底×高/2=28, 设高=x, 底=x+3, x(x+3)=56, x=7",
            "answer": 7,
            "choices": [
                7,
                10,
                8,
                6
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 10,
                    "height": 7
                }
            },
            "knowledge": "方程与几何",
            "difficulty": 3,
            "hint": "设高为x，底为x+3，面积=底×高÷2",
            "variants": [
                {
                    "question": "一个长方形长比宽多4厘米，面积是60平方厘米，长和宽各是多少？",
                    "formula": "宽=x, 长=x+4, x(x+4)=60, x=6",
                    "answer": 6,
                    "hint": "列方程求解"
                },
                {
                    "question": "三角形底是高的2倍，面积是36平方厘米，底和高各是多少？",
                    "formula": "高=h, 底=2h, 2h*h/2=36, h=6",
                    "answer": 6,
                    "hint": "注意底是高的2倍"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每份是多少",
                        "总数",
                        "有几份",
                        "差是多少"
                    ],
                    "answer": "每份是多少",
                    "explain": "题目求底和高各多少，求每份是多少"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：3 和 28",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：3 和 28",
                    "explain": "从题目中找到的关键数是：3（底比高多的厘米数）、28（面积）"
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
                    "explain": "乘法：设高=x，底=x+3，x(x+3)=56，解得x=7"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示三角形的底和高的关系",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "高=7厘米，底=10厘米，面积=10×7÷2=28",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "用方程解决几何问题",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校调查学生最喜欢的学科，结果如下：数学18人，语文20人，英语15人，科学10人，其他7人。校长想用扇形统计图展示这些数据。",
            "question": "数学在扇形图中对应的圆心角是多少度？",
            "formula": "360°*18/(18+20+15+10+7)=360°*18/70≈93°",
            "answer": 93,
            "choices": [
                93,
                100,
                85,
                110
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "pie",
                "params": {
                    "angle": 93
                }
            },
            "knowledge": "扇形统计图",
            "difficulty": 2,
            "hint": "圆心角=360°×该部分占总体的百分比",
            "variants": [
                {
                    "question": "某班40人，喜欢篮球的有10人，在扇形图中占多少度？",
                    "formula": "360°*10/40=90°",
                    "answer": 90,
                    "hint": "圆心角=360°×比例"
                },
                {
                    "question": "全班60人，喜欢足球30人，喜欢篮球18人，喜欢乒乓球12人，各部分圆心角分别是多少？",
                    "formula": "足球180°，篮球108°，乒乓球72°",
                    "answer": 180,
                    "hint": "分别计算"
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
                    "explain": "题目求数学对应的圆心角，求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：18 和 70",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：18 和 70",
                    "explain": "从题目中找到的关键数是：18（喜欢数学的人数）、70（总人数）"
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
                    "explain": "除法：圆心角=360°×18÷70≈93°"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示各学科在扇形统计图中的占比",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "数学圆心角=360°×18/70≈93°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆心角=360°×部分÷总体",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用平移的方法移动一个图形，原图形的顶点坐标是(1,2)、(3,2)、(3,4)、(1,4)。他把它向右平移2个单位，向上平移3个单位。",
            "question": "平移后各顶点的坐标是什么？",
            "formula": "(1+2,2+3),(3+2,2+3),(3+2,4+3),(1+2,4+3)即(3,5),(5,5),(5,7),(3,7)",
            "answer": 3,
            "choices": [
                3,
                5,
                7,
                2
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 8,
                "points": [
                    {
                        "pos": 3,
                        "label": "新顶点",
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "图形的平移",
            "difficulty": 2,
            "hint": "向右平移x加，向上平移y加",
            "variants": [
                {
                    "question": "点(2,3)向左平移4个单位，再向下平移1个单位，新坐标？",
                    "formula": "(2-4,3-1)=(-2,2)",
                    "answer": -2,
                    "hint": "左减右加，下减上加"
                },
                {
                    "question": "点(-1,4)向右平移3个单位，向上平移2个单位，新坐标？",
                    "formula": "(-1+3,4+2)=(2,6)",
                    "answer": 2,
                    "hint": "坐标平移规则"
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
                    "explain": "题目求平移后坐标，求计算结果"
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
                    "explain": "从题目中找到的关键数是：向右2、向上3"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "加法",
                        "乘法",
                        "减法",
                        "除法"
                    ],
                    "answer": "加法",
                    "explain": "加法：每个点x加2，y加3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示图形平移前后的位置",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平移后坐标：(3,5),(5,5),(5,7),(3,7)",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平移：向右x加，向上y加",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明解方程组，已知一个角的补角比它的余角的3倍大20度。他想求出这个角的度数。",
            "question": "这个角是多少度？",
            "formula": "180-x=3(90-x)+20, x=70",
            "answer": 70,
            "choices": [
                70,
                60,
                80,
                50
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "angle": 70,
                    "complement": 20,
                    "supplement": 110
                }
            },
            "knowledge": "方程与角度",
            "difficulty": 3,
            "hint": "设角为x，补角=180-x，余角=90-x",
            "variants": [
                {
                    "question": "一个角比它的余角大30度，这个角是多少度？",
                    "formula": "x-(90-x)=30",
                    "answer": 60,
                    "hint": "x-(90-x)=2x-90=30，x=60",
                    "choices": [
                        60,
                        30,
                        90,
                        120
                    ]
                },
                {
                    "question": "一个角的余角是它的补角的1/4，这个角是多少度？",
                    "formula": "90-x=(180-x)/4, x=60",
                    "answer": 60,
                    "hint": "列方程求解"
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
                    "explain": "题目求角的度数，求计算结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：3、20",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：3、20",
                    "explain": "从题目中找到的关键数是：3（倍数）、20（差值）"
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
                    "explain": "除法：设角为x，补角=180-x，余角=90-x，180-x=3(90-x)+20，解得x=70"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示角、余角和补角的关系",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "180-x=3(90-x)+20，x=70",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "用方程解决角度问题",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校组织测量旗杆高度，小明用镜子反射原理：他把镜子放在离旗杆20米的地面上，自己站在离镜子2米的位置，眼睛离地面1.5米，刚好看到旗杆顶端。",
            "question": "旗杆的高度是多少米？",
            "formula": "旗杆高/20=1.5/2, 旗杆高=15米",
            "answer": 15,
            "choices": [
                15,
                20,
                10,
                25
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "height": 15,
                    "base": 20
                }
            },
            "knowledge": "相似三角形应用",
            "difficulty": 3,
            "hint": "利用相似三角形对应边成比例",
            "variants": [
                {
                    "question": "小明用影子法测树高，树影长12米，同时1.6米标杆影长2米，树高多少？",
                    "formula": "1.6*12/2=9.6",
                    "answer": 9.6,
                    "hint": "物高与影长成正比"
                },
                {
                    "question": "利用相似三角形，已知AB=3，BC=4，DE=6，求DF",
                    "formula": "DF=BC*DE/AB=8",
                    "answer": 8,
                    "hint": "对应边成比例"
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
                    "explain": "题目求旗杆高度，求总数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "关键数：20、2、1.5",
                        "只有总数",
                        "只有每份数",
                        "没有关键数"
                    ],
                    "answer": "关键数：20、2、1.5",
                    "explain": "从题目中找到的关键数是：20（旗杆到镜子距离）、2（人到镜子距离）、1.5（眼睛高度）"
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
                    "explain": "乘法：旗杆高=1.5×20÷2=15米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "图中展示相似三角形的测量原理",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "旗杆高/20=1.5/2，旗杆高=15米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "相似三角形对应边成比例",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "笼子里有一些鸡和兔子，从上面数共10个头，从下面数共28只脚。小华想知道笼子里有几只兔子。",
            "question": "笼子里有几只兔子？",
            "formula": "兔=(28-10*2)/2=4",
            "answer": 4,
            "choices": [
                4,
                6,
                5,
                3
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 10,
                "parts": [
                    {
                        "label": "兔(4脚)",
                        "val": 4,
                        "color": "#FB923C"
                    },
                    {
                        "label": "鸡(2脚)",
                        "val": 6,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "鸡兔同笼",
            "difficulty": 3,
            "hint": "假设全是鸡，多出的脚每2只对应一只兔",
            "variants": [
                {
                    "question": "共12个头、34只脚，兔几只？",
                    "formula": "(34-12*2)/2=5",
                    "answer": 5,
                    "hint": "先算多出的脚"
                },
                {
                    "question": "共8个头、20只脚，兔几只？",
                    "formula": "(20-8*2)/2=2",
                    "answer": 2,
                    "hint": "假设全是鸡"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "笼子里有几只兔子",
                        "笼子里有几只鸡",
                        "一共有多少个脑袋",
                        "兔子和鸡各几只脚"
                    ],
                    "answer": "笼子里有几只兔子",
                    "explain": "场景共有10个头、28只脚，要从鸡兔混合中求出兔子的只数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "共10个头，共28只脚",
                        "共28个头，共10只脚",
                        "有10只脚28个头",
                        "每个头都有两只脚"
                    ],
                    "answer": "共10个头，共28只脚",
                    "explain": "关键信息是头的总数10和脚的总数28，用它们结合鸡兔脚数差异求解。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(28-10×2)÷2=4",
                        "28÷2-10=4",
                        "(28-10)÷2=9",
                        "10×2-28= -8"
                    ],
                    "answer": "(28-10×2)÷2=4",
                    "explain": "假设全是鸡有10×2=20只脚，多出的28-20=8只脚每2只对应一只兔，8÷2=4只兔。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图先给每个头配上2只脚（当作鸡的样子），发现脚不够，再按每头补2只脚，能补出4个头的就都是兔，缺脚数化解为兔只数。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "全是鸡的脚数=10×2=20，实际28只多出8只脚，每换一只兔多2只脚，兔=8÷2=4。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "鸡兔同笼问题先假设全是少脚的那种，用实际脚数与假设脚数的差，除以每只的脚差，就得脚多的那种的只数，思路是把假设与实际做差再修正。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "笼子里共有35个头，94只脚，问兔子和鸡各有多少只。小明用鸡兔同笼的方法求解。",
            "question": "兔子有多少只？",
            "formula": "兔=(94-35*2)/2=12",
            "answer": 12,
            "choices": [
                12,
                23,
                10,
                14
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 35,
                "parts": [
                    {
                        "label": "兔",
                        "val": 12,
                        "color": "#FB923C"
                    },
                    {
                        "label": "鸡",
                        "val": 23,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "鸡兔同笼",
            "difficulty": 3,
            "hint": "兔=(总脚数-总头数×2)÷2",
            "variants": [
                {
                    "question": "共15个头、40只脚，兔几只？",
                    "formula": "(40-15*2)/2=5",
                    "answer": 5,
                    "hint": "代入公式"
                },
                {
                    "question": "共25个头、70只脚，兔几只？",
                    "formula": "(70-25*2)/2=10",
                    "answer": 10,
                    "hint": "先乘后减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "兔子有多少只",
                        "鸡有多少只",
                        "一共有多少只动物",
                        "脚一共多少只"
                    ],
                    "answer": "兔子有多少只",
                    "explain": "场景共有35个头、94只脚，用鸡兔同笼方法求出兔子的只数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "共35个头，94只脚",
                        "共94个头，35只脚",
                        "35个头共70只脚",
                        "共12个头"
                    ],
                    "answer": "共35个头，94只脚",
                    "explain": "关键信息是头的总数35和脚的总数94。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(94-35×2)÷2=12",
                        "94÷2-35=12",
                        "(94-70)÷2=12",
                        "35-94÷2= -12"
                    ],
                    "answer": "(94-35×2)÷2=12",
                    "explain": "兔=(总脚数-总头数×2)÷2=(94-70)÷2=12，所以有12只兔。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "先给35个头都配上2只脚得70只脚，比实际的94只还差24只，再给其中12个头各补2只脚，这12个就是兔。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "全是鸡的脚35×2=70，多出94-70=24只脚，兔=24÷2=12。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "数据再大也按同一套路：兔数=(总脚数-头数×2)÷2，先假设全鸡再求脚差修正，适用于各种规模的鸡兔题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "笼子里鸡和兔共8只，脚一共22只。小红想知道有几只兔子。",
            "question": "有几只兔子？",
            "formula": "兔=(22-8*2)/2=3",
            "answer": 3,
            "choices": [
                3,
                5,
                4,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 8,
                "parts": [
                    {
                        "label": "兔",
                        "val": 3,
                        "color": "#FB923C"
                    },
                    {
                        "label": "鸡",
                        "val": 5,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "鸡兔同笼",
            "difficulty": 3,
            "hint": "假设全是鸡，脚少8只，每换一只兔多2脚",
            "variants": [
                {
                    "question": "共9只、24只脚，兔几只？",
                    "formula": "(24-9*2)/2=3",
                    "answer": 3,
                    "hint": "套公式"
                },
                {
                    "question": "共7只、18只脚，兔几只？",
                    "formula": "(18-7*2)/2=2",
                    "answer": 2,
                    "hint": "假设全是鸡"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "有几只兔子",
                        "有几只鸡",
                        "鸡和兔一共有几只",
                        "脚一共有几只"
                    ],
                    "answer": "有几只兔子",
                    "explain": "场景鸡兔共8只、脚22只，要求兔子的只数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "共8只动物，共22只脚",
                        "共22只动物，8只脚",
                        "8个头16只脚",
                        "共3只鸡"
                    ],
                    "answer": "共8只动物，共22只脚",
                    "explain": "关键信息是总只数8和总脚数22。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(22-8×2)÷2=3",
                        "22÷2-8=3",
                        "(22-16)÷2=3",
                        "(22-8)÷2=7"
                    ],
                    "answer": "(22-8×2)÷2=3",
                    "explain": "全是鸡时脚数8×2=16，多出的22-16=6只脚，每只兔多2只，兔=6÷2=3只。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "8个头都先按2只脚算得16只脚，比22还差6只，给其中3个头各补2只脚就凑够，这3个补脚的就是兔。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "兔数=(22-8×2)÷2=(22-16)÷2=3。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知总只数与总脚数求兔，用脚数差除以2即为兔量，核心是假设全鸡再补脚的修正思路，适用所有双取值鸡兔题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "养殖场有鸡兔共20只，脚共50只。小刚想算出兔子的数量。",
            "question": "兔子有多少只？",
            "formula": "兔=(50-20*2)/2=5",
            "answer": 5,
            "choices": [
                5,
                15,
                10,
                8
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 20,
                "parts": [
                    {
                        "label": "兔",
                        "val": 5,
                        "color": "#FB923C"
                    },
                    {
                        "label": "鸡",
                        "val": 15,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "鸡兔同笼",
            "difficulty": 3,
            "hint": "兔=(脚数-头数×2)÷2",
            "variants": [
                {
                    "question": "共18只、48只脚，兔几只？",
                    "formula": "(48-18*2)/2=6",
                    "answer": 6,
                    "hint": "先算鸡的头"
                },
                {
                    "question": "共22只、60只脚，兔几只？",
                    "formula": "(60-22*2)/2=8",
                    "answer": 8,
                    "hint": "多出的脚除以2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "兔子有多少只",
                        "鸡有多少只",
                        "两种动物共有几只",
                        "一共有多少脚"
                    ],
                    "answer": "兔子有多少只",
                    "explain": "场景鸡兔共20只、脚50只，要求兔子的数量。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "共20只动物，共50只脚",
                        "共50只动物，20只脚",
                        "20个头共40只脚",
                        "共5只鸡"
                    ],
                    "answer": "共20只动物，共50只脚",
                    "explain": "关键信息是总只数20和总脚数50。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(50-20×2)÷2=5",
                        "50÷2-20=5",
                        "(50-40)÷2=5",
                        "(50-20)÷2=15"
                    ],
                    "answer": "(50-20×2)÷2=5",
                    "explain": "兔=(脚数-头数×2)÷2=(50-40)÷2=5，所以兔子有5只。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "20个头各按2只脚得40只脚，还差10只脚，给10÷2=5个头各补两只脚，这5个就是兔，条形补齐直观见数。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "全鸡脚数20×2=40，多出10只脚，兔=10÷2=5。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "重复套用兔数=(总脚数-头数×2)÷2即可，核心是先统一成全鸡再抵消差，适用于头脚数量已知的任意鸡兔题型。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "用正三角形（内角60度）来密铺地面，小华想知道一个顶点处需要拼几个正三角形才能铺满360度。",
            "question": "每个顶点需要几个正三角形？",
            "formula": "360 / 60 = ?",
            "answer": 6,
            "choices": [
                6,
                5,
                4,
                3
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 360,
                "points": [
                    {
                        "pos": 60,
                        "label": "内角",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 360,
                        "label": "一圈",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    60,
                    360
                ]
            },
            "knowledge": "有趣的密铺",
            "difficulty": 2,
            "hint": "一圈360度，看有多少个内角能凑成360",
            "variants": [
                {
                    "question": "正三角形内角60度，铺满360度需几个？",
                    "formula": "360/60=?",
                    "answer": 6,
                    "hint": "360除以60"
                },
                {
                    "question": "每个顶点用正三角形，几个刚好一圈？",
                    "formula": "360/60=?",
                    "answer": 6,
                    "hint": "求个数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每个顶点需要几个正三角形",
                        "正三角形的内角是多少度",
                        "一圈是多少度",
                        "正三角形有几条边"
                    ],
                    "answer": "每个顶点需要几个正三角形",
                    "explain": "场景求一个顶点处要拼几个内角60度的正三角形才能铺满360度。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "正三角形内角60度，一圈360度",
                        "正三角形内角90度，一圈360度",
                        "内角120度铺满一圈",
                        "一圈只有180度"
                    ],
                    "answer": "正三角形内角60度，一圈360度",
                    "explain": "关键信息是正三角形内角60度、一个顶点处合计要凑满360度。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "360÷60=6",
                        "360÷4=90",
                        "120÷60=2",
                        "60×6=360"
                    ],
                    "answer": "360÷60=6",
                    "explain": "一圈360度里能放几个60度：360÷60=6个。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把一圈360度当作满刻度，每个60度的角占一段，像六等分一个圆，6段正好把一周填满。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "密铺要求顶点处各角之和恰为360度，数量=360÷单个内角=360÷60=6。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "一种正多边形能否密铺，看顶点处能否恰好组成360度，需要数量=360÷内角，能整除就能铺满，适用于正三角、正六边等所有正多边形。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "用正方形瓷砖（每个角90度）密铺地面，小红想知道一个顶点处需要几块正方形。",
            "question": "每个顶点需要几块正方形？",
            "formula": "360 / 90 = ?",
            "answer": 4,
            "choices": [
                4,
                3,
                6,
                5
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 360,
                "points": [
                    {
                        "pos": 90,
                        "label": "直角",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 360,
                        "label": "一圈",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    90,
                    360
                ]
            },
            "knowledge": "有趣的密铺",
            "difficulty": 2,
            "hint": "一圈360度，90度需要4个才能凑满",
            "variants": [
                {
                    "question": "正方形每个角90度，几个铺满360度？",
                    "formula": "360/90=?",
                    "answer": 4,
                    "hint": "360除以90"
                },
                {
                    "question": "一个顶点处几块正方形刚好不留空隙？",
                    "formula": "360/90=?",
                    "answer": 4,
                    "hint": "正好整除"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每个顶点需要几块正方形",
                        "正方形的角是多少度",
                        "一圈是多少度",
                        "正方形有几条边"
                    ],
                    "answer": "每个顶点需要几块正方形",
                    "explain": "场景求一个顶点处要拼几个90度角的正方形瓷砖才能铺满360度。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "正方形每个角90度，一圈360度",
                        "正方形每个角60度",
                        "正方形每个角45度",
                        "一圈只有180度"
                    ],
                    "answer": "正方形每个角90度，一圈360度",
                    "explain": "关键信息是正方形的角90度、一个顶点凑满360度。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "360÷90=4",
                        "360÷180=2",
                        "90×4=360",
                        "360-90=270"
                    ],
                    "answer": "360÷90=4",
                    "explain": "360度里能放几个90度：360÷90=4块。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "一圈360度按每90度切一段，正好切成4等段，对应4块正方形瓷砖围出一个顶点。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "360÷90=4，四个直角恰好凑满一圈，所以每顶点4块。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "一个顶点的密铺数=360÷单个内角，能整除则可无缝铺贴，正方形、正三角形等都用同一规则判断。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "用正六边形（内角120度）密铺地面，小刚想知道一个顶点处需要几个正六边形。",
            "question": "每个顶点需要几个正六边形？",
            "formula": "360 / 120 = ?",
            "answer": 3,
            "choices": [
                3,
                4,
                6,
                2
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 360,
                "points": [
                    {
                        "pos": 120,
                        "label": "内角",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 360,
                        "label": "一圈",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    120,
                    360
                ]
            },
            "knowledge": "有趣的密铺",
            "difficulty": 2,
            "hint": "一圈360度，120度需要3个",
            "variants": [
                {
                    "question": "正六边形内角120度，几个铺满360度？",
                    "formula": "360/120=?",
                    "answer": 3,
                    "hint": "360除以120"
                },
                {
                    "question": "一个顶点处几个正六边形不漏缝？",
                    "formula": "360/120=?",
                    "answer": 3,
                    "hint": "个数计算"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "每个顶点需要几个正六边形",
                        "正六边形的内角是多少度",
                        "一圈是多少度",
                        "正六边形有几条边"
                    ],
                    "answer": "每个顶点需要几个正六边形",
                    "explain": "场景求一个顶点处要拼几个内角120度的正六边形才能铺满360度。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "正六边形内角120度，一圈360度",
                        "正六边形内角60度",
                        "内角都是90度",
                        "一圈共720度"
                    ],
                    "answer": "正六边形内角120度，一圈360度",
                    "explain": "关键信息是正六边形内角120度、一个顶点凑满360度。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "360÷120=3",
                        "120×3=360",
                        "360-120=240",
                        "360÷3=120"
                    ],
                    "answer": "360÷120=3",
                    "explain": "360度里放几个120度：360÷120=3个。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把一圈分成3个120度的扇段，3块正六边形围成一个顶点正好无缝隙，像把一个圆三等份。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "360÷120=3，三个120度恰好凑满一圈，3270。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "密铺顶点数量=360÷单个内角，正六边形120度恰能3个成360，因此可铺；抓住整除即可判断任意正多边形能否密铺。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "两条平行线被第三条直线所截，已知同位角∠1是65度。小红想知道与它对应的同位角∠2是多少度。",
            "question": "同位角∠2是多少度？",
            "formula": "∠2 = ∠1 = 65",
            "answer": 65,
            "choices": [
                65,
                115,
                25,
                130
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallel",
                "params": {
                    "angle1": 65,
                    "angle2": 65
                }
            },
            "knowledge": "平行线性质",
            "difficulty": 2,
            "hint": "两直线平行，同位角相等",
            "variants": [
                {
                    "question": "平行线下同位角∠1=50度，∠2=?",
                    "formula": "∠2=50",
                    "answer": 50,
                    "hint": "同位角相等"
                },
                {
                    "question": "平行线内错角∠1=40度，∠2=?",
                    "formula": "∠2=40",
                    "answer": 40,
                    "hint": "内错角相等"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "同位角∠2是多少度",
                        "∠1是多少度",
                        "同旁内角是多少度",
                        "两条直线是否平行"
                    ],
                    "answer": "同位角∠2是多少度",
                    "explain": "场景两条平行线被第三条直线所截，已知同位角∠1=65度，要求对应同位角∠2。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条直线平行，∠1=65度",
                        "两条直线相交，∠1=65度",
                        "直线互相垂直不变为65",
                        "∠1=130度"
                    ],
                    "answer": "两条直线平行，∠1=65度",
                    "explain": "关键信息是两直线平行、同位角∠1=65度。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "∠2=∠1=65",
                        "∠2=180-65=115",
                        "∠2=90-65=25",
                        "∠2=65×2=130"
                    ],
                    "answer": "∠2=∠1=65",
                    "explain": "两直线平行，同位角相等，所以∠2=∠1=65度。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图中两条平行线被第三条线斜切，同位角成对出现在同一方位，把∠1沿截线平移下去就和∠2位置重合、度数相等。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "两直线平行同位角相等，∠2=65。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行线被截时同位角、内错角都相等，同旁内角互补（和180），利用平行则相等或互补可推出所有相关角。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "三角形中两个内角分别是50度和60度。小红想算出第三个内角。",
            "question": "第三个内角是多少度？",
            "formula": "180 - 50 - 60 = ?",
            "answer": 70,
            "choices": [
                70,
                60,
                80,
                50
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 180,
                "points": [
                    {
                        "pos": 110,
                        "label": "已知两角",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 70,
                        "label": "第三角",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    70,
                    110
                ]
            },
            "knowledge": "三角形内角和",
            "difficulty": 2,
            "hint": "三角形内角和是180度",
            "variants": [
                {
                    "question": "两角为45度和45度，第三角？",
                    "formula": "180-45-45=?",
                    "answer": 90,
                    "hint": "等腰直角"
                },
                {
                    "question": "两角为80度和60度，第三角？",
                    "formula": "180-80-60=?",
                    "answer": 40,
                    "hint": "内角和180"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "第三个内角是多少度",
                        "三角形内角和是多少",
                        "已知的两个角是多少",
                        "三角形有几条边"
                    ],
                    "answer": "第三个内角是多少度",
                    "explain": "场景三角形两个内角分别是50度和60度，要求第三个内角。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两个内角是50度和60度",
                        "两个内角是50度和70度",
                        "两个内角是60度和80度",
                        "三角形内角和是90度"
                    ],
                    "answer": "两个内角是50度和60度",
                    "explain": "关键信息是两个已知内角50度、60度，以及三角形内角和为180度。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "180-50-60=70",
                        "180-50-70=60",
                        "90-50-60= -20",
                        "60+50=110"
                    ],
                    "answer": "180-50-60=70",
                    "explain": "三角形内角和是180度，第三个内角=180-50-60=70度。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把三角形180度的内角和看成总角量，50度、60度各占一段，剩下的那一段就是第三个内角70度。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "三角形内角和恒为180度，第三角=180-50-60=70。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "任何三角形内角和都等于180度，已知任意两角即可求第三角，这就是三角形角度问题的总钥匙。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个六边形（6条边），小华用公式计算它的内角和。",
            "question": "六边形的内角和是多少度？",
            "formula": "(6-2) * 180 = ?",
            "answer": 720,
            "choices": [
                720,
                540,
                900,
                360
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 720,
                "points": [
                    {
                        "pos": 540,
                        "label": "五边形",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 720,
                        "label": "六边形",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    540,
                    720
                ]
            },
            "knowledge": "多边形内角和",
            "difficulty": 2,
            "hint": "内角和=(边数-2)×180",
            "variants": [
                {
                    "question": "五边形的内角和？",
                    "formula": "(5-2)*180=?",
                    "answer": 540,
                    "hint": "3×180"
                },
                {
                    "question": "八边形的内角和？",
                    "formula": "(8-2)*180=?",
                    "answer": 1080,
                    "hint": "6×180"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "六边形的内角和是多少度",
                        "六边形有几条边",
                        "三角形内角和是多少",
                        "六边形每个外角是多少"
                    ],
                    "answer": "六边形的内角和是多少度",
                    "explain": "场景用公式计算六边形（6条边）的内角和。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "六边形有6条边",
                        "六边形有5条边",
                        "六边形有8条边",
                        "六边形每个角都是60度"
                    ],
                    "answer": "六边形有6条边",
                    "explain": "关键信息是六边形的边数为6，把它代入内角和公式。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(6-2)×180=720",
                        "6×180=1080",
                        "(5-2)×180=540",
                        "(6-1)×180=900"
                    ],
                    "answer": "(6-2)×180=720",
                    "explain": "内角和=(边数-2)×180=(6-2)×180=720度。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "从六边形一个顶点出发可连出3条对角线，把六边形分成4个三角形，4×180=720，像把角铺展测算总度数。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "多边形内角和=(n-2)×180，n=6时得4×180=720。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "任意n边形内角和=(n-2)×180，用分成n-2个三角形来理解公式，把边数代进去即可，适用三角形与任意多边形。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个三角形底边长8厘米，高5厘米。小明想算它的面积。",
            "question": "三角形面积是多少平方厘米？",
            "formula": "8 * 5 / 2 = ?",
            "answer": 20,
            "choices": [
                20,
                40,
                25,
                13
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 40,
                "points": [
                    {
                        "pos": 20,
                        "label": "面积",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 40,
                        "label": "底×高",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    20,
                    40
                ]
            },
            "knowledge": "三角形面积",
            "difficulty": 2,
            "hint": "三角形面积=底×高÷2",
            "variants": [
                {
                    "question": "底10高6的三角形面积？",
                    "formula": "10*6/2=?",
                    "answer": 30,
                    "hint": "底乘高除2"
                },
                {
                    "question": "底12高5的三角形面积？",
                    "formula": "12*5/2=?",
                    "answer": 30,
                    "hint": "先乘再除"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "三角形面积是多少平方厘米",
                        "三角形的底是多少",
                        "三角形的高是多少",
                        "三角形的周长是多少"
                    ],
                    "answer": "三角形面积是多少平方厘米",
                    "explain": "场景三角形底边长8厘米、高5厘米，要求它的面积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "底8厘米，高5厘米",
                        "底5厘米，高8厘米",
                        "底8厘米，高2厘米",
                        "面积就是40平方厘米"
                    ],
                    "answer": "底8厘米，高5厘米",
                    "explain": "关键信息是三角形的底8厘米和高5厘米。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "8×5÷2=20",
                        "8×5=40",
                        "8+5=13",
                        "5×8=40当作面积"
                    ],
                    "answer": "8×5÷2=20",
                    "explain": "三角形面积=底×高÷2=8×5÷2=20平方厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把两个完全一样的三角形拼成一个底8高5的平行四边形，面积是40，每个三角形是它的一半，即20。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "三角形面积=底×高÷2=40÷2=20。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "三角形面积等于同底同高平行四边形面积的一半，用底×高再除以2即可，是面积计算的奠基公式。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一块平行四边形的菜地，底15米，高8米。小红想算它的面积。",
            "question": "平行四边形面积是多少平方米？",
            "formula": "15 * 8 = ?",
            "answer": 120,
            "choices": [
                120,
                60,
                104,
                128
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "base": 15,
                    "height": 8
                }
            },
            "knowledge": "平行四边形面积",
            "difficulty": 2,
            "hint": "平行四边形面积=底×高",
            "variants": [
                {
                    "question": "底12高9的平行四边形面积？",
                    "formula": "12*9=?",
                    "answer": 108,
                    "hint": "底乘高"
                },
                {
                    "question": "底20高6的平行四边形面积？",
                    "formula": "20*6=?",
                    "answer": 120,
                    "hint": "直接相乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "平行四边形面积是多少平方米",
                        "平行四边形的底是多少",
                        "它的高是多少",
                        "它的周长是多少"
                    ],
                    "answer": "平行四边形面积是多少平方米",
                    "explain": "场景平行四边形菜地底15米、高8米，要求它的面积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "底15米，高8米",
                        "底8米，高15米",
                        "底15米，高4米",
                        "底15米，高18米"
                    ],
                    "answer": "底15米，高8米",
                    "explain": "关键信息是底15米、高8米。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "15×8=120",
                        "15×8÷2=60",
                        "15+8=23",
                        "16×8=128"
                    ],
                    "answer": "15×8=120",
                    "explain": "平行四边形面积=底×高=15×8=120平方米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图中把平行四边形沿高剪开再拼成长方形，拼后的底是15、高是8，面积120，剪拼转化看得清楚。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平行四边形面积=底×高=15×8=120。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形沿高剪拼可变为同底同高的长方形，所以面积=底×高，梯形、菱形等可拼补转化的图形也适用同一思路。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一块梯形地，上底6米，下底10米，高5米。小刚想算它的面积。",
            "question": "梯形面积是多少平方米？",
            "formula": "(6+10) * 5 / 2 = ?",
            "answer": 40,
            "choices": [
                40,
                80,
                32,
                30
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "trapezoid",
                "params": {
                    "top": 6,
                    "bottom": 10,
                    "height": 5
                }
            },
            "knowledge": "梯形面积",
            "difficulty": 2,
            "hint": "梯形面积=(上底+下底)×高÷2",
            "variants": [
                {
                    "question": "上底8下底12高5的梯形面积？",
                    "formula": "(8+12)*5/2=?",
                    "answer": 50,
                    "hint": "先加再乘除"
                },
                {
                    "question": "上底4下底6高8的梯形面积？",
                    "formula": "(4+6)*8/2=?",
                    "answer": 40,
                    "hint": "和乘高除2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "梯形面积是多少平方米",
                        "梯形的上底是多少",
                        "梯形的下底是多少",
                        "梯形的高是多少"
                    ],
                    "answer": "梯形面积是多少平方米",
                    "explain": "场景梯形地上底6米、下底10米、高5米，要求它的面积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "上底6米，下底10米，高5米",
                        "上底10米，下底5米，高6米",
                        "上底6米，下底5米",
                        "上底和下底都是8米"
                    ],
                    "answer": "上底6米，下底10米，高5米",
                    "explain": "关键信息是上底6米、下底10米、高5米。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(6+10)×5÷2=40",
                        "(6+10)×5=80",
                        "(6-10)×5= -20",
                        "(6+5)×10÷2=55"
                    ],
                    "answer": "(6+10)×5÷2=40",
                    "explain": "梯形面积=(上底+下底)×高÷2=(6+10)×5÷2=40平方米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "几何图中两个全等梯形拼成一个上底加下底、高不变的平行四边形，拼后面积80，每个梯形是它一半即40。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "上下底之和16、高5，面积=16×5÷2=40。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "梯形面积=(上底+下底)×高÷2，把它看作两底之和的一半再乘高，与三角形面积同属乘高再折半的逻辑。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个长方形周长是30厘米，长是9厘米。小红想知道宽是多少厘米。",
            "question": "宽是多少厘米？",
            "formula": "(30 - 9*2) / 2 = ?",
            "answer": 6,
            "choices": [
                6,
                12,
                7,
                5
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 30,
                "parts": [
                    {
                        "label": "2个长",
                        "val": 18,
                        "color": "#2563EB"
                    },
                    {
                        "label": "2个宽",
                        "val": 12,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "周长与方程",
            "difficulty": 2,
            "hint": "周长=2×(长+宽)，先求半周长",
            "variants": [
                {
                    "question": "周长24，长7，宽？",
                    "formula": "(24-7*2)/2=?",
                    "answer": 5,
                    "hint": "半周长减长"
                },
                {
                    "question": "周长40，长12，宽？",
                    "formula": "(40-12*2)/2=?",
                    "answer": 8,
                    "hint": "先算两长之和"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "宽是多少厘米",
                        "长方形的长是多少",
                        "长方形的周长是多少",
                        "周长的一半是多少"
                    ],
                    "answer": "宽是多少厘米",
                    "explain": "场景长方形周长30厘米、长9厘米，要求它的宽。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "周长30厘米，长9厘米",
                        "周长30厘米，宽9厘米",
                        "长9厘米，宽8厘米",
                        "周长9厘米，长30厘米"
                    ],
                    "answer": "周长30厘米，长9厘米",
                    "explain": "关键信息是周长30厘米和长9厘米。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(30-9×2)÷2=6",
                        "30-9=21",
                        "(30-9)÷2=10.5",
                        "9×2=18"
                    ],
                    "answer": "(30-9×2)÷2=6",
                    "explain": "先求半周长30÷2=15，宽=15-9=6；也可(30-18)÷2=6厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图把周长想成两条长加两条宽围成的一圈，先去掉两条长共18，剩下12是两条宽，每条宽就是6。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "周长=2×(长+宽)，半周长15减去长9得宽6。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "由周长求一边，先周长÷2得长与宽之和，再减已知边即另一边，也可列方程，适用于长方形、正方形求边。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个三角形的周长为18厘米，其中两边长分别是5厘米和7厘米。小华想求第三边。",
            "question": "第三边长多少厘米？",
            "formula": "18 - 5 - 7 = ?",
            "answer": 6,
            "choices": [
                6,
                8,
                5,
                12
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 18,
                "points": [
                    {
                        "pos": 12,
                        "label": "已知两边",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 6,
                        "label": "第三边",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    6,
                    12
                ]
            },
            "knowledge": "方程与几何",
            "difficulty": 2,
            "hint": "周长=三边之和",
            "variants": [
                {
                    "question": "周长24，两边8和9，第三边？",
                    "formula": "24-8-9=?",
                    "answer": 7,
                    "hint": "周长减两边"
                },
                {
                    "question": "周长30，两边11和13，第三边？",
                    "formula": "30-11-13=?",
                    "answer": 6,
                    "hint": "直接相减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "第三边长多少厘米",
                        "三角形的周长是多少",
                        "两边长各是多少",
                        "三角形的三条边是什么"
                    ],
                    "answer": "第三边长多少厘米",
                    "explain": "场景三角形周长18厘米、其中两边长5厘米和7厘米，要求第三边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "周长18厘米，两边5、7厘米",
                        "周长18厘米，两边8、9厘米",
                        "三边都是6厘米",
                        "周长只有5厘米"
                    ],
                    "answer": "周长18厘米，两边5、7厘米",
                    "explain": "关键信息是总周长18厘米、已知两边5厘米和7厘米。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "18-5-7=6",
                        "18+5+7=30",
                        "18-5=13",
                        "5+7=12就是第三边"
                    ],
                    "answer": "18-5-7=6",
                    "explain": "周长=三边之和，第三边=18-5-7=6厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把周长18当成一条总长数轴，第一段5、第二段7已被占位，剩下的第三段就是6，三段首尾相连成三角形。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "周长=三边之和，第三边=18-5-7=6。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知多边形周长与部分边，用周长减已知边之和即得未知边，三角形等多边形都用这个总长加减思路。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "铺地砖每平方米80元，一间房面积15平方米。小红想算铺完要花多少钱。",
            "question": "铺地砖一共多少元？",
            "formula": "80 * 15 = ?",
            "answer": 1200,
            "choices": [
                1200,
                1120,
                1300,
                95
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1200,
                "parts": [
                    {
                        "label": "每平方",
                        "val": 80,
                        "color": "#00A896"
                    },
                    {
                        "label": "面积",
                        "val": 15,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "面积与价格计算",
            "difficulty": 2,
            "hint": "总价=单价×面积",
            "variants": [
                {
                    "question": "每平方60元，20平方，总价？",
                    "formula": "60*20=?",
                    "answer": 1200,
                    "hint": "单价乘面积"
                },
                {
                    "question": "每平方100元，12平方，总价？",
                    "formula": "100*12=?",
                    "answer": 1200,
                    "hint": "直接相乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "铺地砖一共多少元",
                        "地砖每平方米多少元",
                        "房间面积是多少",
                        "一共要铺多少平方米"
                    ],
                    "answer": "铺地砖一共多少元",
                    "explain": "场景每平方米80元、房间面积15平方米，要算铺地砖一共花多少钱。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每平方米80元，面积15平方米",
                        "每平方米15元，面积80平方米",
                        "每平方米80元，面积20平方米",
                        "面积15平方米，每平95元"
                    ],
                    "answer": "每平方米80元，面积15平方米",
                    "explain": "关键信息是单价80元每平方米和面积15平方米。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "80×15=1200",
                        "80+15=95",
                        "80×14=1120",
                        "15×100=1500"
                    ],
                    "answer": "80×15=1200",
                    "explain": "总价=单价×面积=80×15=1200元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图把15行每行80元的长条排起来，总格数就是总价，把每平方米80元重复15次相加即1200。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总价=单价×面积=80×15=1200。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "凡是与面积有关的费用，总价=单面积价×面积数，把两项相乘即得总开销，适用铺砖、刷墙、铺草皮等计费。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "数轴上两个点分别表示-3和5。小刚想知道这两点之间的距离。",
            "question": "两点间的距离是多少？",
            "formula": "|5 - (-3)| = ?",
            "answer": 8,
            "choices": [
                8,
                2,
                -8,
                5
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -3,
                "end": 5,
                "points": [
                    {
                        "pos": -3,
                        "label": "A",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 5,
                        "label": "B",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    -3,
                    5
                ]
            },
            "knowledge": "两点间距离公式",
            "difficulty": 2,
            "hint": "距离=|右边-左边|，取正值",
            "variants": [
                {
                    "question": "数轴上-2和6的距离？",
                    "formula": "|6-(-2)|=?",
                    "answer": 8,
                    "hint": "差取绝对值"
                },
                {
                    "question": "数轴上0和-9的距离？",
                    "formula": "|0-(-9)|=?",
                    "answer": 9,
                    "hint": "到原点距离"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两点间的距离是多少",
                        "两点的坐标是多少",
                        "哪个点更大",
                        "两点坐标的和是多少"
                    ],
                    "answer": "两点间的距离是多少",
                    "explain": "场景数轴上两个点分别表示-3和5，要求这两点的距离。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两个点分别在-3和5",
                        "两个点分别是3和-5",
                        "两个点都在正半轴上",
                        "其中一个点是-8"
                    ],
                    "answer": "两个点分别在-3和5",
                    "explain": "关键信息是两点的坐标-3和5，分居原点两侧。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "|5-(-3)|=8",
                        "|5-3|=2",
                        "|-8|取负得到-8",
                        "5×(-3)=-15"
                    ],
                    "answer": "|5-(-3)|=8",
                    "explain": "距离=右边减左边并取正：5-(-3)=5+3=8。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "-3在0左3格、5在0右5格，中间的跨度是3+5=8格，把整段格子数一遍就是两者距离8。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "两点间距离=两坐标差的绝对值=|5-(-3)|=5+3=8。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "数轴上两点距离等于坐标之差的绝对值，或等于右坐标减左坐标，同号异号都适用，是坐标求距的通用公式。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "方格纸上的一个点从位置2出发，向右平移5格。小红想确定平移后的位置。",
            "question": "平移后点在什么位置？",
            "formula": "2 + 5 = ?",
            "answer": 7,
            "choices": [
                7,
                -3,
                5,
                8
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 7,
                "points": [
                    {
                        "pos": 2,
                        "label": "起点",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 7,
                        "label": "终点",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    2,
                    7
                ]
            },
            "knowledge": "图形的平移",
            "difficulty": 1,
            "hint": "向右平移做加法",
            "variants": [
                {
                    "question": "点从3向右平移4格到？",
                    "formula": "3+4=?",
                    "answer": 7,
                    "hint": "向右加"
                },
                {
                    "question": "点从9向左平移4格到？",
                    "formula": "9-4=?",
                    "answer": 5,
                    "hint": "向左减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "平移后点在什么位置",
                        "原来点的位置是什么",
                        "向右平移了几格",
                        "平移的方向是什么"
                    ],
                    "answer": "平移后点在什么位置",
                    "explain": "场景方格纸上的点从位置2出发向右平移5格，要求平移后的位置。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "起点是2，向右移5格",
                        "起点是5，向右移2格",
                        "起点是2向左移5格",
                        "起点是8向右移2格"
                    ],
                    "answer": "起点是2，向右移5格",
                    "explain": "关键信息是起点2和向右平移5格。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "2+5=7",
                        "2-5= -3",
                        "5+5=10",
                        "2×5=10"
                    ],
                    "answer": "2+5=7",
                    "explain": "向右平移做加法：2+5=7，平移后点在位置7。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "点从数轴的2向右跨5格，一格一格数到第7格停下，新位置一眼可见。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "图形平移向右加、向左减，2+5=7。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平移位置=起点±水平或竖直移动量，向右、上为正则加，向左、下为负则减，适用数轴与网格中的所有平移题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "扇形统计图中某个部分占整体的25%。小明想知道它对应的圆心角是多少度。",
            "question": "对应圆心角是多少度？",
            "formula": "360 * 25% = ?",
            "answer": 90,
            "choices": [
                90,
                25,
                36,
                72
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 360,
                "points": [
                    {
                        "pos": 90,
                        "label": "圆心角",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 360,
                        "label": "整圆",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    90,
                    360
                ]
            },
            "knowledge": "扇形统计图",
            "difficulty": 2,
            "hint": "圆心角=360×占比",
            "variants": [
                {
                    "question": "占比50%对应圆心角？",
                    "formula": "360*0.5=?",
                    "answer": 180,
                    "hint": "360乘占比"
                },
                {
                    "question": "占比10%对应圆心角？",
                    "formula": "360*0.1=?",
                    "answer": 36,
                    "hint": "乘0.1"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "对应圆心角是多少度",
                        "这个部分占整体的多少",
                        "整个圆是多少度",
                        "圆心角占总圆的比例"
                    ],
                    "answer": "对应圆心角是多少度",
                    "explain": "场景扇形统计图中某部分占整体的25%，要求它对应的圆心角。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "该部分占比25%，整个圆360度",
                        "该部分占90%，圆360度",
                        "该部分占25%，圆180度",
                        "圆心角就是25度"
                    ],
                    "answer": "该部分占比25%，整个圆360度",
                    "explain": "关键信息是占比25%和整圆360度。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "360×25%=90",
                        "360×25%=90但圆记成180",
                        "360÷25%=1440",
                        "25%×360=900"
                    ],
                    "answer": "360×25%=90",
                    "explain": "圆心角=360×占比=360×0.25=90度。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把整圆360度按25%即四分之一切开，四分之一的圆对应圆心角90度，像把圆平均分成4份看一块。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "扇形统计图中每部分圆心角=360°×该部分占比，360×0.25=90。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "扇形圆心角=360度乘该部分占比，把百分比换成小数再乘360即得度数，整个圆360度是永远的总量参照。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "把150元按3:2分给甲、乙两人。小红想算甲（占3份）分得多少元。",
            "question": "甲分得多少元？",
            "formula": "150 * 3 / (3+2) = ?",
            "answer": 90,
            "choices": [
                90,
                60,
                75,
                100
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 150,
                "parts": [
                    {
                        "label": "甲(3份)",
                        "val": 90,
                        "color": "#00A896"
                    },
                    {
                        "label": "乙(2份)",
                        "val": 60,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "比例分配",
            "difficulty": 2,
            "hint": "每份=150÷5=30，甲=30×3",
            "variants": [
                {
                    "question": "120元按3:1分，多得几分多少？",
                    "formula": "120*3/4=?",
                    "answer": 90,
                    "hint": "每份30"
                },
                {
                    "question": "200元按2:3分，多得几分多少？",
                    "formula": "200*3/5=?",
                    "answer": 120,
                    "hint": "每份40"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "甲分得多少元",
                        "乙分得多少元",
                        "两人一共分得多少元",
                        "甲乙各占几份"
                    ],
                    "answer": "甲分得多少元",
                    "explain": "场景把150元按3:2分给甲、乙，要求甲（占3份）分得的钱数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "总额150元，按3:2分给甲和乙",
                        "总额150元，甲乙各分一半",
                        "总额150元，按2:3分",
                        "总额90元按3:2分"
                    ],
                    "answer": "总额150元，按3:2分给甲和乙",
                    "explain": "关键信息是总数150元和甲乙份数比3:2。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "150÷(3+2)=30，30×3=90",
                        "150÷5=30，甲只得30",
                        "50×3=150就是甲",
                        "150×2÷5=60"
                    ],
                    "answer": "150÷(3+2)=30，30×3=90",
                    "explain": "每份=150÷(3+2)=30，甲占3份得30×3=90元。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把150元分成5等份，3份给甲、2份给乙，每份30元，甲3份共90元，比例在条中直观呈现。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总份数3+2=5，每份150÷5=30，甲得30×3=90。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "按比例分配用总数÷总份数得每份，每份乘自己的份数就是自己所得，总量按份数切成等份，适用分钱、分人数、分材料。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "两个相似三角形，相似比为2:3，大三角形的一条边是15厘米。小华想算小三角形对应边的长度。",
            "question": "小三角形对应边是多少厘米？",
            "formula": "15 * 2 / 3 = ?",
            "answer": 10,
            "choices": [
                10,
                22.5,
                9,
                12
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 15,
                "points": [
                    {
                        "pos": 10,
                        "label": "小",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 15,
                        "label": "大",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    10,
                    15
                ]
            },
            "knowledge": "相似三角形应用",
            "difficulty": 2,
            "hint": "对应边成比例：小÷大=2÷3",
            "variants": [
                {
                    "question": "相似比1:2，大三角形边16，小边？",
                    "formula": "16*1/2=?",
                    "answer": 8,
                    "hint": "乘比例"
                },
                {
                    "question": "相似比3:5，大三角形边25，小边？",
                    "formula": "25*3/5=?",
                    "answer": 15,
                    "hint": "先除再乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "小三角形对应边是多少厘米",
                        "大三角形这条边有多长",
                        "两三角形的相似比是多少",
                        "两条对应边的差是多少"
                    ],
                    "answer": "小三角形对应边是多少厘米",
                    "explain": "场景两个相似三角形相似比为2:3，大三角形的一条边是15厘米，要求小三角形对应的边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "相似比2:3，大三角形对应边15厘米",
                        "相似比3:2，大三角形边15厘米",
                        "相似比2:3，大三角形边22.5厘米",
                        "大边15厘米，小边也是15"
                    ],
                    "answer": "相似比2:3，大三角形对应边15厘米",
                    "explain": "关键信息是相似比为2:3（小∶大）和已知的大边15厘米。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "15×2÷3=10",
                        "15×3÷2=22.5",
                        "15÷2=7.5",
                        "15-3=12"
                    ],
                    "answer": "15×2÷3=10",
                    "explain": "对应边成比例，小边=大边×2÷3=15×2÷3=10厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把大边15按3份分，每份5厘米，小三角形对应边占其中2份即10厘米，比例尺放缩直观可见。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "相似三角形成比例，小∶大=2∶3，小边=15×2÷3=10。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "相似图形对应边成比例，用已知边乘自己的比例项再除以对方的比例项求对应边，比例尺思想适用地图放大缩小与实物模型。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "某数的3倍加上6等于21。小红列方程求这个数。",
            "question": "这个数是多少？",
            "formula": "3x + 6 = 21, x = 5",
            "answer": 5,
            "choices": [
                5,
                7,
                9,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 21,
                "parts": [
                    {
                        "label": "3x",
                        "val": 15,
                        "color": "#2563EB"
                    },
                    {
                        "label": "6",
                        "val": 6,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "一元一次方程应用",
            "difficulty": 2,
            "hint": "(21-6)÷3=5",
            "variants": [
                {
                    "question": "某数2倍加4等于14，这个数？",
                    "formula": "2x+4=14,x=5",
                    "answer": 5,
                    "hint": "(14-4)/2"
                },
                {
                    "question": "某数减3等于2，这个数？",
                    "formula": "x-3=2,x=5",
                    "answer": 5,
                    "hint": "移项"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这个数是多少",
                        "这个数的3倍是多少",
                        "加上的那个6是什么",
                        "方程右边的数是几"
                    ],
                    "answer": "这个数是多少",
                    "explain": "场景某数的3倍加上6等于21，要求列方程求出这个未知数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "某数的3倍加上6等于21",
                        "某数的3倍减去6等于21",
                        "某数加6等于它的3倍",
                        "某数的6倍加3"
                    ],
                    "answer": "某数的3倍加上6等于21",
                    "explain": "关键关系式是3x+6=21，整理后即可求解x。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "3x=21-6=15，x=5",
                        "3x=21+6=27，x=9",
                        "x=21-6=15",
                        "3x=21，x=7"
                    ],
                    "answer": "3x=21-6=15，x=5",
                    "explain": "移项得3x=21-6=15，再两边除以3得x=5。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图把未知数画成3份再加6块等于21，先拿走6剩15，再把15平均分3份每份5，倒推步骤清晰。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3x+6=21，移项得3x=15，x=15÷3=5。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "文字转方程要先翻译关系，倍是乘、加减照抄，再移项合并、除以系数解出未知数，适用于一切某个数倍加、减类方程题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        }
    ]
};
