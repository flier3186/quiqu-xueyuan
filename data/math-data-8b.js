window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["8b"] = {
    "title": "八年级下册·分式·反比例函数",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
        {
            "id": "8B-01",
            "name": "频数与频率",
            "concept": "频数是出现的次数，频率=频数/总数",
            "prerequisite": "7B-10",
            "extends": "8B-02 数据的波动",
            "visualStrategy": "频数分布表",
            "visualType": "barModel",
            "coreLiteracy": "数据分析",
            "difficulty": 1,
            "isKeyTopic": false
        },
        {
            "id": "8B-02",
            "name": "数据的波动",
            "concept": "方差衡量数据的离散程度，方差越大数据越分散",
            "prerequisite": "8B-01",
            "extends": "8B-03 概率的运算",
            "visualStrategy": "波动分析",
            "visualType": "barModel",
            "coreLiteracy": "数据分析",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "8B-03",
            "name": "概率的运算",
            "concept": "互斥事件概率相加，独立事件概率相乘",
            "prerequisite": "7A-15",
            "extends": "8B-04 列举法求概率",
            "visualStrategy": "树状图",
            "visualType": "barModel",
            "coreLiteracy": "随机观念",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-04",
            "name": "列举法求概率",
            "concept": "用列表或树状图列举所有等可能结果",
            "prerequisite": "8B-03",
            "extends": "8B-05 频率估计概率",
            "visualStrategy": "树状图",
            "visualType": "barModel",
            "coreLiteracy": "随机观念",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-05",
            "name": "频率估计概率",
            "concept": "大量重复试验中，频率稳定在概率附近",
            "prerequisite": "8B-04",
            "extends": "8B-06 二次根式的运算",
            "visualStrategy": "实验模拟",
            "visualType": "barModel",
            "coreLiteracy": "随机观念",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-06",
            "name": "二次根式的运算",
            "concept": "√a·√b=√(ab)，√a/√b=√(a/b)",
            "prerequisite": "8A-01",
            "extends": "8B-07 二次根式的化简",
            "visualStrategy": "根式运算",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "8B-07",
            "name": "二次根式的化简",
            "concept": "把根号内能开方的因子开出来",
            "prerequisite": "8B-06",
            "extends": "8B-08 二次根式方程",
            "visualStrategy": "化简演示",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-08",
            "name": "二次根式方程",
            "concept": "含有二次根式的方程，注意检验增根",
            "prerequisite": "8B-07",
            "extends": "8B-09 勾股定理的应用",
            "visualStrategy": "方程求解",
            "visualType": "numberLine",
            "coreLiteracy": "方程思想",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8B-09",
            "name": "勾股定理的应用",
            "concept": "利用勾股定理解决实际问题，如距离计算",
            "prerequisite": "7B-06",
            "extends": "8B-10 勾股定理的逆定理",
            "visualStrategy": "实际应用",
            "visualType": "geometry",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8B-10",
            "name": "勾股定理的逆定理",
            "concept": "若a²+b²=c²，则以a,b,c为边的三角形是直角三角形",
            "prerequisite": "8B-09",
            "extends": "8B-11 命题与定理",
            "visualStrategy": "判定验证",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8B-11",
            "name": "命题与定理",
            "concept": "判断真假的陈述句是命题，真命题是经过证明的定理",
            "prerequisite": "7B-03",
            "extends": "8B-12 逆命题与逆定理",
            "visualStrategy": "真假判断",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-12",
            "name": "逆命题与逆定理",
            "concept": "交换原命题的条件和结论得到逆命题，逆命题不一定是真命题",
            "prerequisite": "8B-11",
            "extends": "8B-13 角平分线的性质",
            "visualStrategy": "对偶关系",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-13",
            "name": "角平分线的性质",
            "concept": "角平分线上的点到角两边的距离相等",
            "prerequisite": "8B-12",
            "extends": "8B-14 线段垂直平分线",
            "visualStrategy": "距离相等",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-14",
            "name": "线段垂直平分线",
            "concept": "垂直平分线上的点到线段两端距离相等",
            "prerequisite": "8B-13",
            "extends": "8B-15 三角形的四心",
            "visualStrategy": "对称轴",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-15",
            "name": "三角形的四心",
            "concept": "重心、垂心、外心、内心是三角形的特殊点",
            "prerequisite": "8B-14",
            "extends": "8B-16 多边形内角和",
            "visualStrategy": "特殊点定位",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8B-16",
            "name": "多边形内角和",
            "concept": "n边形内角和=(n-2)×180°",
            "prerequisite": "7B-02",
            "extends": "8B-17 多边形外角和",
            "visualStrategy": "内角计算",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-17",
            "name": "多边形外角和",
            "concept": "任意多边形外角和等于360°",
            "prerequisite": "8B-16",
            "extends": "9A-01 二次函数",
            "visualStrategy": "外角测量",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-18",
            "name": "概率与整式运算",
            "concept": "独立事件概率相乘，整式运算遵循指数法则",
            "prerequisite": "8B-03",
            "extends": "9A-06 二次函数的应用",
            "visualStrategy": "树状图与式子",
            "visualType": "barModel",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8B-19",
            "name": "比例线段与平行线",
            "concept": "平行线分线段成比例定理及其推论",
            "prerequisite": "7B-19",
            "extends": "8B-20 相似三角形",
            "visualStrategy": "平行线截线",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8B-20",
            "name": "相似三角形的判定",
            "concept": "两角对应相等、两边对应成比例且夹角相等、三边对应成比例",
            "prerequisite": "8B-19",
            "extends": "8B-21 相似三角形的性质",
            "visualStrategy": "动态验证",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8B-21",
            "name": "相似三角形的性质",
            "concept": "相似三角形对应边成比例，对应角相等，面积比等于相似比的平方",
            "prerequisite": "8B-20",
            "extends": "8B-22 位似图形",
            "visualStrategy": "缩放演示",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8B-22",
            "name": "位似图形",
            "concept": "两个图形相似且对应点连线交于一点，该点为位似中心",
            "prerequisite": "8B-21",
            "extends": "9A-01 一元二次方程",
            "visualStrategy": "位似变换",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8B-23",
            "name": "投影与视图",
            "concept": "平行投影与中心投影，三视图的画法",
            "prerequisite": "7B-13 图形的平移",
            "extends": "9A-01 一元二次方程",
            "visualStrategy": "投影演示",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8B-24",
            "name": "几何变换综合",
            "concept": "平移、旋转、对称、相似的综合应用",
            "prerequisite": "8B-15 轴对称与中心对称",
            "extends": "9A-01 一元二次方程",
            "visualStrategy": "变换综合",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": true
        }
    ],
    "units": [
        {
            "name": "分式",
            "level": "current",
            "children": [
                {
                    "name": "分式概念",
                    "level": "done"
                },
                {
                    "name": "分式运算",
                    "level": "current"
                },
                {
                    "name": "分式方程",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "反比例函数",
            "level": "locked",
            "children": [
                {
                    "name": "反比例函数图像",
                    "level": "locked"
                },
                {
                    "name": "反比例函数性质",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "四边形",
            "level": "locked",
            "children": [
                {
                    "name": "平行四边形",
                    "level": "locked"
                },
                {
                    "name": "矩形菱形正方形",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "数据的分析",
            "level": "locked",
            "children": [
                {
                    "name": "平均数中位数",
                    "level": "locked"
                },
                {
                    "name": "方差",
                    "level": "locked"
                }
            ]
        }
    ],
    "problems": [
        {
            "scene": "小明解分式方程 2/x = 1/(x-3)，想知道x的值是多少。",
            "question": "方程的解是多少？",
            "formula": "2(x-3) = x, x = ?",
            "answer": 6,
            "choices": [
                6,
                3,
                2,
                9
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 10,
                "points": [
                    {
                        "pos": 6,
                        "label": "x",
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "分式方程",
            "difficulty": 3,
            "hint": "交叉相乘再解方程，注意验根",
            "variants": [
                {
                    "question": "解方程 3/x = 1/(x-2)",
                    "formula": "3(x-2)=x",
                    "answer": 3,
                    "hint": "交叉相乘"
                },
                {
                    "question": "解方程 1/(x+1) = 2/(x+3)",
                    "formula": "x+3=2(x+1)",
                    "answer": 1,
                    "hint": "交叉相乘后移项"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "未知数 x 的取值",
                        "方程的增根",
                        "分式方程的类型",
                        "分母的取值"
                    ],
                    "answer": "未知数 x 的取值",
                    "explain": "小明解分式方程 2/x = 1/(x-3)，要求出能满足等式的 x 值"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "等式两边是分式：2/x 与 1/(x-3)，分母里含未知数 x",
                        "x 已经等于 6",
                        "两个分母都是常数",
                        "这是一元一次整式方程"
                    ],
                    "answer": "等式两边是分式：2/x 与 1/(x-3)，分母里含未知数 x",
                    "explain": "分式方程的分母含未知数，两边可交叉相乘去分母"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "交叉相乘：2(x-3) = 1·x，展开解得 x = 6",
                        "两边取倒数相加",
                        "直接约掉分母得 2 = 1",
                        "令两个分母相等求解"
                    ],
                    "answer": "交叉相乘：2(x-3) = 1·x，展开解得 x = 6",
                    "explain": "交叉相乘把分式方程化为整式：2(x-3)=1·x → 2x-6=x → x=6，且 x=6 使分母 x-3 不为 0，是有效解"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上标出解 x=6，它落在取值区间内，两边分母 6 和 3 都不为 0",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "交叉相乘 2(x-3)=1·x，展开 2x-6=x，移项 x=6，代回原式 2/6=1/3 成立",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解分式方程：两边交叉相乘去分母，求出解后必须验根（使分母为 0 的是增根要舍去）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "已知反比例函数 y = 12/x，当 x = 4 时 y 等于多少？",
            "question": "当 x=4 时 y=?",
            "formula": "y = 12/4 = ?",
            "answer": 3,
            "choices": [
                3,
                4,
                8,
                48
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 12,
                "parts": [
                    {
                        "label": "x",
                        "val": 4,
                        "color": "#00A896"
                    },
                    {
                        "label": "y",
                        "val": 3,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "反比例函数",
            "difficulty": 2,
            "hint": "代入x值求y",
            "variants": [
                {
                    "question": "y=20/x，当x=5时y=?",
                    "formula": "y=20/5",
                    "answer": 4,
                    "hint": "直接代入"
                },
                {
                    "question": "y=k/x过点(2,6)，k=?",
                    "formula": "k=2*6",
                    "answer": 12,
                    "hint": "k=xy"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "当 x=4 时 y 的函数值",
                        "常数 k 的值",
                        "反比例函数的图像",
                        "x 的取值范围"
                    ],
                    "answer": "当 x=4 时 y 的函数值",
                    "explain": "反比例函数 y=12/x，代入 x=4 求出对应的 y 值"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "k=12 是常数，给定了自变量的值 x=4",
                        "y 是已知的 4",
                        "函数图像经过原点",
                        "没有给出任何数值"
                    ],
                    "answer": "k=12 是常数，给定了自变量的值 x=4",
                    "explain": "y 与 x 成反比，k=12 固定，把 x=4 代入表达式即可"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "代入：y = 12/4 = 3",
                        "y = 12×4 = 48",
                        "y = 12-4 = 8",
                        "y = 4/12 = 1/3"
                    ],
                    "answer": "代入：y = 12/4 = 3",
                    "explain": "把 x=4 代进 y=12/x，y=12÷4=3"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图展示 k=12 分成份：x 份为 4，y 份为 3",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "y = 12/4 = 3，即当 x=4 时反比例函数的值为 3",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "反比例函数 y=k/x：已知 k 和 x，直接代入 y=k/x 求函数值",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个平行四边形的底是8厘米，高是5厘米。小红想算出它的面积，以及如果底增加2厘米面积增加多少。",
            "question": "原面积和增加面积各是多少？",
            "formula": "原面积=40, 增加=10",
            "answer": 40,
            "choices": [
                40,
                50,
                30,
                10
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "base": 8,
                    "height": 5
                }
            },
            "knowledge": "平行四边形面积",
            "difficulty": 2,
            "hint": "面积=底*高",
            "variants": [
                {
                    "question": "平行四边形底10高6，面积？",
                    "formula": "10*6",
                    "answer": 60,
                    "hint": "底乘高"
                },
                {
                    "question": "平行四边形面积48底12，高？",
                    "formula": "48/12",
                    "answer": 4,
                    "hint": "高=面积/底"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "平行四边形的原面积，以及底增加 2 厘米后多出的面积",
                        "底和高分别多少",
                        "新底边的长度",
                        "图形的周长"
                    ],
                    "answer": "平行四边形的原面积，以及底增加 2 厘米后多出的面积",
                    "explain": "底 8 厘米、高 5 厘米的平行四边形，先求原面积，再求底加 2 厘米后多出的面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "底 8 厘米、高 5 厘米，还要把底增加 2 厘米",
                        "只给了底和高相等",
                        "高是底的 2 倍",
                        "没有给高"
                    ],
                    "answer": "底 8 厘米、高 5 厘米，还要把底增加 2 厘米",
                    "explain": "底=8、高=5；底增加后变为 10，高始终是 5"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "原面积=8×5=40；增加面积=2×5=10（两问的主答是原面积 40）",
                        "原面积=8×5÷2=20",
                        "增加面积=8×5=40",
                        "原面积与增加面积相同都是 50"
                    ],
                    "answer": "原面积=8×5=40；增加面积=2×5=10（两问的主答是原面积 40）",
                    "explain": "原面积=底×高=8×5=40 平方厘米；底增加 2 厘米只多出 2×高=2×5=10 平方厘米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "平行四边形底 8、高 5，一个底延长 2 厘米，高不变",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "原面积=8×5=40 平方厘米；多出部分是一块 2×5=10 平方厘米的平行四边形",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形面积=底×高；底变化而高不变时，面积的变化量=底的变化量×高",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一组数据：12, 15, 18, 20, 25。小明想算出这组数据的平均数和中位数。",
            "question": "平均数和中位数分别是多少？",
            "formula": "平均数=18, 中位数=18",
            "answer": 18,
            "choices": [
                18,
                20,
                16,
                21
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 18,
                "parts": [
                    {
                        "label": "平均数",
                        "val": 18,
                        "color": "#00A896"
                    },
                    {
                        "label": "中位数",
                        "val": 18,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "数据的集中趋势",
            "difficulty": 2,
            "hint": "平均数=总和/个数，中位数是中间的数",
            "variants": [
                {
                    "question": "数据：10,20,30,40,50，平均数和中位数？",
                    "formula": "平均=30, 中位=30",
                    "answer": 30,
                    "hint": "对称数据"
                },
                {
                    "question": "数据：5,10,15,20,100，平均数和中位数？",
                    "formula": "平均=30, 中位=15",
                    "answer": 15,
                    "hint": "极端值影响平均数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这组数据的平均数和中位数",
                        "数据的个数",
                        "数据的最大值",
                        "数据的排序"
                    ],
                    "answer": "这组数据的平均数和中位数",
                    "explain": "对 12,15,18,20,25 求平均数，并按从小到大取中间一个数作为中位数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "5 个数据：12,15,18,20,25（个数为奇数 5）",
                        "数据已经排好序",
                        "数据个数是偶数",
                        "只有两个数据"
                    ],
                    "answer": "5 个数据：12,15,18,20,25（个数为奇数 5）",
                    "explain": "平均数需所有数据求和除以个数；5 个数据中点位置是第 3 个"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "平均数=(12+15+18+20+25)÷5=90÷5=18；中位数=第3个=18",
                        "中位数=首尾平均数",
                        "平均数=中间那个数直接取 18",
                        "中位数=(25-12)÷2"
                    ],
                    "answer": "平均数=(12+15+18+20+25)÷5=90÷5=18；中位数=第3个=18",
                    "explain": "平均数=90÷5=18；排好序后中间第 3 个数是 18，所以中位数也是 18"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图两根等长：中位数 18 与平均数 18 都在中间位置",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平均数为 90÷5=18；按序 12,15,18,20,25 中位数是第 3 个 18",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平均数=总和÷个数；奇数个数据时中位数=最中间一个（先从小到大排序）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明计算 (a^2*b)^3 / (a*b)^2，化简结果是多少？",
            "question": "化简结果是多少？",
            "formula": "a^6*b^3/a^2*b^2 = a^4*b",
            "answer": "a^4*b",
            "choices": [
                "a^4*b",
                "a^5*b",
                "a^4*b^3",
                "a^3*b"
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 1,
                "parts": [
                    {
                        "label": "结果",
                        "val": 1,
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "整式运算",
            "difficulty": 3,
            "hint": "先算乘方再算除法，同底数幂相除指数相减",
            "variants": [
                {
                    "question": "(x^2)^3 * x^4 = ?",
                    "formula": "x^6*x^4=x^10",
                    "answer": 10,
                    "hint": "指数相加"
                },
                {
                    "question": "a^6/a^2 = ?",
                    "formula": "a^(6-2)=a^4",
                    "answer": 4,
                    "hint": "指数相减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "整式化简的结果",
                        "a 和 b 的具体数值",
                        "指数的个数",
                        "分式的值"
                    ],
                    "answer": "整式化简的结果",
                    "explain": "化简 (a²b)³ ÷ (ab)²，得到关于 a、b 的幂的乘积形式"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "(a²b)³ 是先乘方再除 (ab)²，底数是 a 和 b",
                        "a、b 有具体数值",
                        "只有数字没有字母",
                        "这是一元一次方程"
                    ],
                    "answer": "(a²b)³ 是先乘方再除 (ab)²，底数是 a 和 b",
                    "explain": "需先算乘方再算除法，同底数幂相除指数相减"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "(a²b)³=a⁶b³，(ab)²=a²b²，两式相除得 a⁴b",
                        "结果等于 a⁶÷a²=a³",
                        "结果只有 b 没有 a",
                        "结果是 a^6·b^2"
                    ],
                    "answer": "(a²b)³=a⁶b³，(ab)²=a²b²，两式相除得 a⁴b",
                    "explain": "乘方：a 指数 2×3=6、b 指数 3；除法 6-2=4、3-2=1，得 a⁴b"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "整式的乘方与除法过程：先指数相乘再指数相减",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "(a²b)³=a⁶b³，(ab)²=a²b²，a⁶b³÷a²b²=a⁴b",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "幂的运算：(a^m)^n=a^(mn)；a^m÷a^n=a^(m-n)，分步乘方再作同底数幂除法",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明解分式方程 3/(x-1) = 2/(x+1)，他想知道x的值是多少。",
            "question": "方程的解是多少？",
            "formula": "3(x+1) = 2(x-1), x = ?",
            "answer": -5,
            "choices": [
                -5,
                5,
                1,
                -1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": -10,
                "end": 10,
                "points": [
                    {
                        "pos": -5,
                        "label": "x",
                        "color": "#00A896"
                    }
                ]
            },
            "knowledge": "分式方程求解",
            "difficulty": 3,
            "hint": "交叉相乘，注意检验增根",
            "variants": [
                {
                    "question": "解方程 2/(x+2) = 1/x",
                    "formula": "2x=x+2, x=2",
                    "answer": 2,
                    "hint": "交叉相乘"
                },
                {
                    "question": "解方程 1/(x-2) = 2/(x+2)",
                    "formula": "x+2=2(x-2)",
                    "answer": 6,
                    "hint": "移项求解"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "未知数 x 的解",
                        "增根",
                        "方程的定义域",
                        "分母的符号"
                    ],
                    "answer": "未知数 x 的解",
                    "explain": "解分式方程 3/(x-1)=2/(x+1)，求出满足等式的 x 值"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两边是分式：3/(x-1) 与 2/(x+1)，分母含 x",
                        "分母已经约掉",
                        "x 是已知常数",
                        "x=0 肯定不能取"
                    ],
                    "answer": "两边是分式：3/(x-1) 与 2/(x+1)，分母含 x",
                    "explain": "等式两边分母不同，需要交叉相乘去分母"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "交叉相乘：3(x+1)=2(x-1)，展开 3x+3=2x-2，解得 x=-5",
                        "直接取 3=2",
                        "x 等于 1 或 -1",
                        "交叉相乘后得 3x-3=2x+2 解得 5"
                    ],
                    "answer": "交叉相乘：3(x+1)=2(x-1)，展开 3x+3=2x-2，解得 x=-5",
                    "explain": "3(x+1)=2(x-1) → 3x+3=2x-2 → x=-5；检验分母 x-1、x+1 均不为 0，是有效解"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上解 x=-5 落在区间内，两边分母 -6 与 -4 均非 0",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "交叉相乘 3(x+1)=2(x-1)，3x+3=2x-2，得 x=-5，代回 3/(-6)=2/(-4) 即 -1/2 成立",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "解分式方程通用步：交叉相乘去分母→整理成整式→求解→验根（分母为 0 者舍去）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "已知反比例函数y=k/x经过点(-2, 6)，小红想求出k的值和当x=3时的y值。",
            "question": "k和x=3时的y分别是多少？",
            "formula": "k=-12, y=-12/3=-4",
            "answer": -4,
            "choices": [
                -4,
                4,
                -2,
                2
            ],
            "visualType": "barModel",
            "visualData": {
                "total": -4,
                "parts": [
                    {
                        "label": "k",
                        "val": -12,
                        "color": "#00A896"
                    },
                    {
                        "label": "y(x=3)",
                        "val": -4,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "反比例函数系数",
            "difficulty": 2,
            "hint": "k=xy，代入点坐标求k",
            "variants": [
                {
                    "question": "反比例函数过点(3,4)，求k和当x=6时y",
                    "formula": "k=12, y=12/6=2",
                    "answer": 2,
                    "hint": "k=xy"
                },
                {
                    "question": "y=k/x过点(-4,3)，求k和当x=-2时y",
                    "formula": "k=-12, y=-12/-2=6",
                    "answer": 6,
                    "hint": "k=xy"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "反比例函数的 k 值，以及 x=3 时 y 的值",
                        "图像与坐标轴交点",
                        "点的分布",
                        "函数的增减性"
                    ],
                    "answer": "反比例函数的 k 值，以及 x=3 时 y 的值",
                    "explain": "反比例函数 y=k/x 过点(-2,6)，先由点求 k，再求 x=3 时 y 的值"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "过点(-2,6) 即 x=-2、y=6，k=x·y；还要求 x=3 时的 y",
                        "k 已经等于 3",
                        "点不在曲线上",
                        "只给了一点"
                    ],
                    "answer": "过点(-2,6) 即 x=-2、y=6，k=x·y；还要求 x=3 时的 y",
                    "explain": "反比例函数满足 k=x·y，把已知点的坐标相乘得 k"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "k=(-2)×6=-12；y=-12/3=-4（主答是 x=3 时的 y）",
                        "k=(-2)+6=4",
                        "y=-12×3=-36",
                        "k=(-2)÷6=-1/3"
                    ],
                    "answer": "k=(-2)×6=-12；y=-12/3=-4（主答是 x=3 时的 y）",
                    "explain": "k=x·y=(-2)×6=-12，函数为 y=-12/x，x=3 时 y=-12÷3=-4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "反比例函数 k 值与 y 值关系：k 由点坐标相乘得到，代入新 x 求 y",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "k=(-2)×6=-12，写成 y=-12/x，x=3 时代入 y=-12/3=-4",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "反比例函数 y=k/x 恒有 k=x·y；已知一个点求 k，再代 x 求另一处函数值",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一组数据：15, 20, 25, 30, 35, 40。小明想算出这组数据的方差。",
            "question": "这组数据的方差是多少？",
            "formula": "平均数=27.5, 方差=87.5",
            "answer": 87,
            "choices": [
                87,
                75,
                100,
                50
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 87.5,
                "parts": [
                    {
                        "label": "平均数",
                        "val": 27.5,
                        "color": "#00A896"
                    },
                    {
                        "label": "方差",
                        "val": 87.5,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "数据的离散程度",
            "difficulty": 3,
            "hint": "方差=各数据与平均数差的平方和÷数据个数",
            "variants": [
                {
                    "question": "数据：2,4,6,8,10，方差？",
                    "formula": "平均=6, 方差=8",
                    "answer": 8,
                    "hint": "对称数据"
                },
                {
                    "question": "数据：10,10,10,10,10，方差？",
                    "formula": "平均=10, 方差=0",
                    "answer": 0,
                    "hint": "数据相同方差为0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这组数据的方差（离散程度）",
                        "平均数",
                        "数据的个数",
                        "数据的和"
                    ],
                    "answer": "这组数据的方差（离散程度）",
                    "explain": "对 15,20,25,30,35,40 求方差，衡量数据分散程度"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "6 个数据：15,20,25,30,35,40，需先算平均数",
                        "数据只有一个",
                        "平均数已知为 10",
                        "方差不依赖均值"
                    ],
                    "answer": "6 个数据：15,20,25,30,35,40，需先算平均数",
                    "explain": "先求平均数，再求各数据与平均数差的平方和，最后除以 n-1（样本方差）"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "平均数=(15+…+40)÷6=27.5；各偏差平方和=437.5，方差=437.5÷5≈87.5，取整约 87",
                        "方差=平均数的平方",
                        "方差=(40-15)÷2",
                        "方差=各数据直接相加"
                    ],
                    "answer": "平均数=(15+…+40)÷6=27.5；各偏差平方和=437.5，方差=437.5÷5≈87.5，取整约 87",
                    "explain": "平均 165÷6=27.5；各偏差平方和(-12.5)²+(-7.5)²+(-2.5)²+2.5²+7.5²+12.5²=437.5，方差 437.5÷5=87.5，约 87"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数据条形显示各值围绕平均数 27.5 分布，离散程度由方差刻画",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平均=27.5，各偏差平方和=437.5，方差=437.5÷5=87.5≈87",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "方差=各数据与平均数的差的平方和÷(n-1)，衡量数据波动大小，越小越集中",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个袋子中有3个红球和2个白球，小明随机摸出一个球后放回，再摸一个。他想算出两次都摸到红球的概率。",
            "question": "两次都摸到红球的概率是多少？",
            "formula": "P=3/5×3/5=9/25",
            "answer": "9/25",
            "choices": [
                "9/25",
                "3/5",
                "6/25",
                "9/10"
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 9,
                "parts": [
                    {
                        "label": "红球",
                        "val": 3,
                        "color": "#00A896"
                    },
                    {
                        "label": "白球",
                        "val": 2,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "概率的乘法",
            "difficulty": 3,
            "hint": "放回抽样，两次独立，概率相乘",
            "variants": [
                {
                    "question": "袋中有2红3蓝，不放回摸两次都是红球的概率？",
                    "formula": "2/5×1/4=1/10",
                    "answer": 1,
                    "hint": "不放回，第二次分母减1"
                },
                {
                    "question": "袋中有4红2蓝，摸两次（放回）一红一蓝的概率？",
                    "formula": "4/6×2/6×2=8/18",
                    "answer": 8,
                    "hint": "两种顺序：红蓝或蓝红"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两次都摸到红球的概率",
                        "一次摸到红球的概率",
                        "白球的数量",
                        "摸球的次数"
                    ],
                    "answer": "两次都摸到红球的概率",
                    "explain": "袋中 3 红 2 白，有放回地摸两次，求两次都摸到红球的概率"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "红球 3 个、白球 2 个（共 5 个），每次摸后放回",
                        "摸完不放回",
                        "袋中只有红球",
                        "每次概率都变化"
                    ],
                    "answer": "红球 3 个、白球 2 个（共 5 个），每次摸后放回",
                    "explain": "每次摸到红球概率是 3/5，放回后两次独立"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "P(红)=3/5，两次都红=3/5×3/5=9/25",
                        "两次概率相加 3/5+3/5",
                        "概率=3/5÷2",
                        "两次都红就是 3/5"
                    ],
                    "answer": "P(红)=3/5，两次都红=3/5×3/5=9/25",
                    "explain": "每次摸红概率 3/5，放回使两次独立，相乘得 3/5×3/5=9/25"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：袋中 5 个球含 3 红 2 白；首次摸红占 3/5",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "第一次 3/5，放回后第二次仍 3/5，两次都红=3/5×3/5=9/25",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "独立事件同时发生的概率=各事件概率相乘；放回抽样每次概率不变",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明计算 (2a²b)³ ÷ (4ab²)，他想知道化简结果是多少。",
            "question": "化简结果是多少？",
            "formula": "8a^6*b^3 / 4a*b^2 = 2a^5*b",
            "answer": "2a^5*b",
            "choices": [
                "2a^5*b",
                "2a^4*b",
                "8a^5*b",
                "a^5*b"
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 2,
                "parts": [
                    {
                        "label": "系数",
                        "val": 2,
                        "color": "#00A896"
                    },
                    {
                        "label": "a^5*b",
                        "val": 1,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "整式乘除运算",
            "difficulty": 3,
            "hint": "先算乘方再算除法，同底数幂相除指数相减",
            "variants": [
                {
                    "question": "(x^3)^2 ÷ x^4 = ?",
                    "formula": "x^6/x^4=x^2",
                    "answer": 2,
                    "hint": "指数相减"
                },
                {
                    "question": "(3a²b)² ÷ (6ab) = ?",
                    "formula": "9a^4*b^2/6ab=3/2*a^3*b",
                    "answer": 3,
                    "hint": "系数相除，指数相减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "整式化简后的结果",
                        "系数的值",
                        "a、b 的具体数值",
                        "指数的和"
                    ],
                    "answer": "整式化简后的结果",
                    "explain": "化简 (2a²b)³ ÷ (4ab²)，先算乘方再算除法"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "先计算 (2a²b)³=8a⁶b³，再除以 4ab²",
                        "底数只有 a",
                        "除数是常数 4",
                        "指数都是 1"
                    ],
                    "answer": "先计算 (2a²b)³=8a⁶b³，再除以 4ab²",
                    "explain": "系数与字母分别处理：乘方时系数和指数都参与"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "(2a²b)³=8a⁶b³，÷4ab² 得 2a⁵b",
                        "系数直接 2÷4=1/2",
                        "a 指数 6÷2=3",
                        "结果为 8a⁶b³ 不除"
                    ],
                    "answer": "(2a²b)³=8a⁶b³，÷4ab² 得 2a⁵b",
                    "explain": "系数 8÷4=2；a 指数 6-1=5、b 指数 3-2=1，得 2a⁵b"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "整式展开：系数 2 的三次方为 8，与除数 4 相除得 2",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "(2a²b)³=2³·a⁶·b³=8a⁶b³；8a⁶b³÷4ab²=2a⁵b",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "单项式乘除：先乘方展开（系数指数各算），再系数相除、同底数幂指数相减",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用相似三角形测量旗杆高度，他站在旗杆旁，身高1.6米，影长2米，旗杆影长15米。",
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
            "difficulty": 2,
            "hint": "同一时刻，物高与影长成正比",
            "variants": [
                {
                    "question": "树高3米，影长4米，同一时刻电线杆影长10米，电线杆多高？",
                    "formula": "3*10/4=7.5",
                    "answer": 8,
                    "hint": "物高与影长成正比"
                },
                {
                    "question": "测得一建筑物影长30米，同时1.5米竹竿影长2米，建筑物多高？",
                    "formula": "1.5*30/2=22.5",
                    "answer": 22,
                    "hint": "比例关系"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "旗杆的高度",
                        "小明的身高",
                        "影子的长度",
                        "比例系数的值"
                    ],
                    "answer": "旗杆的高度",
                    "explain": "同一时刻用身高与影长的比例推算旗杆高度"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "身高 1.6 米、人影 2 米、旗杆影 15 米，物高与影长成正比",
                        "旗杆高就是影长",
                        "小明身高等于影长",
                        "只给了一个影长"
                    ],
                    "answer": "身高 1.6 米、人影 2 米、旗杆影 15 米，物高与影长成正比",
                    "explain": "同一时刻物高与影长比值固定：1.6/2 = 旗杆高/15"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "旗杆高=1.6×15÷2=12 米",
                        "旗杆高=15+1.6",
                        "旗杆高=1.6×2",
                        "旗杆高=15÷2"
                    ],
                    "answer": "旗杆高=1.6×15÷2=12 米",
                    "explain": "比例 1.6/2 = h/15，交叉相乘 h=1.6×15÷2=12 米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "相似三角形：人物高 1.6 与影 2 构成小三角形，旗杆影 15 对应大三角形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "由 1.6/2 = 旗杆高/15，旗杆高=1.6×15÷2=12 米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "同一时刻物高与影长成正比，用比例式交叉相乘求不可直接测量的高度",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校测量一个平行四边形花坛的面积，底边12米，高8米。校长想知道花坛的面积。",
            "question": "平行四边形花坛的面积是多少平方米？",
            "formula": "12*8=96",
            "answer": 96,
            "choices": [
                96,
                48,
                192,
                72
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "base": 12,
                    "height": 8
                }
            },
            "knowledge": "平行四边形面积",
            "difficulty": 2,
            "hint": "平行四边形面积=底×高",
            "variants": [
                {
                    "question": "三角形底15厘米，高10厘米，面积是多少？",
                    "formula": "15*10/2=75",
                    "answer": 75,
                    "hint": "三角形面积=底×高÷2"
                },
                {
                    "question": "梯形上底6米，下底10米，高5米，面积是多少？",
                    "formula": "(6+10)*5/2=40",
                    "answer": 40,
                    "hint": "梯形面积=(上底+下底)×高÷2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "平行四边形花坛的面积",
                        "底边的长度",
                        "高的长度",
                        "花坛的周长"
                    ],
                    "answer": "平行四边形花坛的面积",
                    "explain": "底 12 米、高 8 米的平行四边形，求面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "底 12 米，对应的高 8 米",
                        "底和高相等",
                        "高是底的 2 倍",
                        "只给了周长"
                    ],
                    "answer": "底 12 米，对应的高 8 米",
                    "explain": "底=12、这条底边上的高=8"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "面积=底×高=12×8=96",
                        "面积=12×8÷2=48",
                        "面积=(12+8)×2=40",
                        "面积=12+8=20"
                    ],
                    "answer": "面积=底×高=12×8=96",
                    "explain": "平行四边形面积=底×对应高=12×8=96 平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "平行四边形底 12、高 8，高垂直于底边",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积=底×对应高=12×8=96 平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形面积=底×高，注意高要与底垂直",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明解方程组，已知一个角的补角比它的余角的2倍大30度。他想求出这个角的度数。",
            "question": "这个角是多少度？",
            "formula": "180-x=2(90-x)+30, x=30",
            "answer": 30,
            "choices": [
                30,
                60,
                45,
                90
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "angle",
                "params": {
                    "angle": 30,
                    "complement": 60,
                    "supplement": 150
                }
            },
            "knowledge": "方程与角度",
            "difficulty": 3,
            "hint": "设角为x，补角=180-x，余角=90-x",
            "variants": [
                {
                    "question": "一个角比它的余角大50度，这个角是多少度？",
                    "formula": "x-(90-x)=50",
                    "answer": 70,
                    "hint": "x-(90-x)=2x-90=50，x=70",
                    "choices": [
                        70,
                        50,
                        90,
                        140
                    ]
                },
                {
                    "question": "一个角的余角是它的补角的1/3，这个角是多少度？",
                    "formula": "90-x=(180-x)/3, x=45",
                    "answer": 45,
                    "hint": "列方程求解"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这个角的度数",
                        "补角的度数",
                        "余角的度数",
                        "两个角的倍数差"
                    ],
                    "answer": "这个角的度数",
                    "explain": "一个角的补角比它的余角的 2 倍还大 30°，求这个角"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "设角为 x：补角=180°-x、余角=90°-x，且补角=2×余角+30°",
                        "x 直接等于 30°",
                        "角是直角",
                        "补角等于余角"
                    ],
                    "answer": "设角为 x：补角=180°-x、余角=90°-x，且补角=2×余角+30°",
                    "explain": "先表达补角与余角，再根据给出的倍数关系列方程"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "列方程 180-x=2(90-x)+30，展开解得 x=30",
                        "180-x=90-x",
                        "补角-余角直接 30",
                        "2×(180-x)=90-x+30"
                    ],
                    "answer": "列方程 180-x=2(90-x)+30，展开解得 x=30",
                    "explain": "180-x=180-2x+30 → 2x=30 → x=30°，代回检验成立"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "角度图：角 30°，它的余角 60°、补角 150°，补角确比余角 2 倍(120°)多 30°",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "180-x=2(90-x)+30 → 180-x=180-2x+30 → x=30°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "补角=180°-角、余角=90°-角；由倍数/差值关系列一元一次方程求解",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校调查学生最喜欢的学科，结果如下：数学15人，语文20人，英语12人，科学8人，其他5人。校长想用扇形统计图展示这些数据。",
            "question": "语文在扇形图中对应的圆心角是多少度？",
            "formula": "360°*20/(15+20+12+8+5)=360°*20/60=120°",
            "answer": 120,
            "choices": [
                120,
                100,
                140,
                90
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "pie",
                "params": {
                    "angle": 120
                }
            },
            "knowledge": "扇形统计图",
            "difficulty": 2,
            "hint": "圆心角=360°×该部分占总体的百分比",
            "variants": [
                {
                    "question": "某班40人，喜欢篮球的有12人，在扇形图中占多少度？",
                    "formula": "360°*12/40=108°",
                    "answer": 108,
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
                        "语文在扇形图中对应的圆心角",
                        "学生总人数",
                        "语文的人数",
                        "其他学科的圆心角"
                    ],
                    "answer": "语文在扇形图中对应的圆心角",
                    "explain": "总人数是 15+20+12+8+5=60，语文 20 人，求其对应圆心角"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "总人数 60，其中语文 20 人",
                        "总人数就是 20",
                        "没有给总人数",
                        "语文人数最多但没给总数"
                    ],
                    "answer": "总人数 60，其中语文 20 人",
                    "explain": "扇形圆心角占圆 360°，占比=该部分人数÷总人数"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "圆心角=360°×(20÷60)=360°×1/3=120°",
                        "圆心角=360°-20",
                        "圆心角=20×60",
                        "圆心角=360°÷2"
                    ],
                    "answer": "圆心角=360°×(20÷60)=360°×1/3=120°",
                    "explain": "语文占 20/60=1/3，圆心角=360°×1/3=120°"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "饼图：整个圆 360°对应 60 人，语文 20 人约占 1/3、即 120°",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "语文占比=20/(15+20+12+8+5)=1/3，圆心角=360°×1/3=120°",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "扇形统计图：圆心角=360°×该部分人数÷总人数，比例对应圆心角",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明画了一个圆，半径为4厘米。他想算出这个圆的周长和面积。",
            "question": "圆的周长和面积分别是多少？",
            "formula": "C=2πr=8π≈25.1, S=πr²=16π≈50.3",
            "answer": "C=8π≈25.1, S=16π≈50.3",
            "choices": [
                "C=8π≈25.1, S=16π≈50.3",
                "C=4π≈12.6, S=8π≈25.1",
                "C=16π≈50.3, S=8π≈25.1",
                "C=8π≈25.1, S=4π≈12.6"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "radius": 4
                }
            },
            "knowledge": "圆的周长与面积",
            "difficulty": 1,
            "hint": "周长=2πr，面积=πr²",
            "variants": [
                {
                    "question": "圆半径3厘米，周长和面积分别是多少？",
                    "formula": "C=6π≈18.8, S=9π≈28.3",
                    "answer": 18,
                    "hint": "代入公式"
                },
                {
                    "question": "圆直径10厘米，周长和面积分别是多少？",
                    "formula": "r=5, C=10π, S=25π",
                    "answer": 25,
                    "hint": "先求半径"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "圆的周长和面积",
                        "半径的长度",
                        "直径的长度",
                        "π 的值"
                    ],
                    "answer": "圆的周长和面积",
                    "explain": "半径 4 厘米的圆，分别求它的周长和面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径 r=4 厘米，周长 C=2πr、面积 S=πr²",
                        "直径是 4",
                        "圆是半圆",
                        "半径与直径相等"
                    ],
                    "answer": "半径 r=4 厘米，周长 C=2πr、面积 S=πr²",
                    "explain": "记住两个公式：周长 2πr、面积 πr²，都代入 r=4"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "C=2π×4=8π≈25.1；S=π×4²=16π≈50.3",
                        "C=4π≈12.6、S=8π",
                        "周长=面积=16π",
                        "周长用 π×4 计算"
                    ],
                    "answer": "C=2π×4=8π≈25.1；S=π×4²=16π≈50.3",
                    "explain": "周长 C=2πr=8π≈25.1 厘米；面积 S=πr²=16π≈50.3 平方厘米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "圆及半径 4，圆周是半径外缘一周，圆面积是内部区域",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "周长=2π×4=8π≈25.1 厘米；面积=π×4²=16π≈50.3 平方厘米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆周长 C=2πr、圆面积 S=πr²；半径乘 2 得周长、平方乘 π 得面积",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红画了一条抛物线y=x²-2x-3，她想找出这条抛物线的顶点坐标。",
            "question": "抛物线的顶点坐标是什么？",
            "formula": "x=-b/2a=1, y=1-2-3=-4, 顶点(1,-4)",
            "answer": "(1,-4)",
            "choices": [
                "(1,-4)",
                "(-1,4)",
                "(1,4)",
                "(2,-3)"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parabola",
                "params": {
                    "vertex": [
                        1,
                        -4
                    ],
                    "roots": [
                        -1,
                        3
                    ]
                }
            },
            "knowledge": "二次函数顶点",
            "difficulty": 2,
            "hint": "顶点横坐标x=-b/(2a)",
            "variants": [
                {
                    "question": "抛物线y=x²-4x+3，顶点坐标？",
                    "formula": "x=2, y=-1, 顶点(2,-1)",
                    "answer": 2,
                    "hint": "代入公式"
                },
                {
                    "question": "抛物线y=2x²-4x+1，顶点坐标？",
                    "formula": "x=1, y=-1, 顶点(1,-1)",
                    "answer": 1,
                    "hint": "注意a=2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "抛物线的顶点坐标",
                        "对称轴方程",
                        "抛物线与 x 轴交点",
                        "开口方向"
                    ],
                    "answer": "抛物线的顶点坐标",
                    "explain": "求抛物线 y=x²-2x-3 的顶点坐标"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "二次项系数 a=1、一次项系数 b=-2、常数 c=-3",
                        "a、b、c 都等于 0",
                        "抛物线过顶点",
                        "顶点就是原点"
                    ],
                    "answer": "二次项系数 a=1、一次项系数 b=-2、常数 c=-3",
                    "explain": "顶点横坐标用 x=-b/(2a) 求，纵坐标代回"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "x=-(-2)/(2×1)=1，代回 y=1-2-3=-4，顶点(1,-4)",
                        "顶点横坐标=-2",
                        "代 x=0 得顶点",
                        "顶点是(0,-3)"
                    ],
                    "answer": "x=-(-2)/(2×1)=1，代回 y=1-2-3=-4，顶点(1,-4)",
                    "explain": "由 x=-b/(2a) 得 x=2/2=1，代回 y=1-2-3=-4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "抛物线 y=x²-2x-3 开口向上，对称轴 x=1，最低点即顶点(1,-4)",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "顶点横坐标 x=-b/(2a)=1，y=1²-2×1-3=-4",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "抛物线顶点 ( -b/(2a), f(-b/(2a)) )；先求对称轴代回得顶点的 y",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明站在离旗杆25米处，测得旗杆顶端的仰角为45度。他想算出旗杆的高度（忽略观测者身高）。",
            "question": "旗杆的高度约为多少米？",
            "formula": "h=25*tan45°=25×1=25",
            "answer": 25,
            "choices": [
                25,
                50,
                12,
                35
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 25,
                    "angle": 45,
                    "height": 25
                }
            },
            "knowledge": "特殊角三角函数",
            "difficulty": 1,
            "hint": "tan45°=1",
            "variants": [
                {
                    "question": "离树20米，仰角30度，树高多少？",
                    "formula": "h=20*tan30°=20√3/3≈11.5",
                    "answer": 12,
                    "hint": "tan30°=√3/3"
                },
                {
                    "question": "离楼15米，仰角60度，楼高多少？",
                    "formula": "h=15*tan60°=15√3≈26",
                    "answer": 26,
                    "hint": "tan60°=√3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "旗杆的高度",
                        "观测点到旗杆的距离",
                        "仰角的度数",
                        "tan45° 的值"
                    ],
                    "answer": "旗杆的高度",
                    "explain": "距旗杆 25 米处测仰角 45°，求旗杆高度（忽略观测者身高）"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "水平距离 25 米、仰角 45°，构成直角三角形，h=25×tan45°",
                        "旗杆高等于距 25 米",
                        "仰角是 90°",
                        "水平距离是 45 米"
                    ],
                    "answer": "水平距离 25 米、仰角 45°，构成直角三角形，h=25×tan45°",
                    "explain": "对边(高度)/邻边(距离)=tan 仰角，即 h/25=tan45°"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "h=25×tan45°=25×1=25 米",
                        "h=25÷tan45°",
                        "h=25×0.5",
                        "h=25-45"
                    ],
                    "answer": "h=25×tan45°=25×1=25 米",
                    "explain": "因 tan45°=1，h=25×1=25 米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形：水平底 25 米、仰角 45°，对边（旗杆高）与邻边相等",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "tan45°=旗杆高/25，=1，故旗杆高=25 米（45° 时对边=邻边）",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "测高：h=水平距离×tan(仰角)；45° 时 tan=1 对边等于邻边",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校统计学生每周阅读时间，得到以下数据：3小时4人，4小时6人，5小时10人，6小时5人，7小时2人。校长想知道学生平均每周阅读时间。",
            "question": "学生平均每周阅读时间是多少小时？",
            "formula": "平均=(3×4+4×6+5×10+6×5+7×2)/(4+6+10+5+2)=120/27≈4.4",
            "answer": 4,
            "choices": [
                4,
                5,
                3,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 4,
                "parts": [
                    {
                        "label": "3小时",
                        "val": 4,
                        "color": "#00A896"
                    },
                    {
                        "label": "4小时",
                        "val": 6,
                        "color": "#F5B800"
                    },
                    {
                        "label": "5小时",
                        "val": 10,
                        "color": "#FB923C"
                    },
                    {
                        "label": "6小时",
                        "val": 5,
                        "color": "#E8A0BF"
                    },
                    {
                        "label": "7小时",
                        "val": 2,
                        "color": "#1E3A5F"
                    }
                ]
            },
            "knowledge": "加权平均数",
            "difficulty": 2,
            "hint": "加权平均数=总和÷总人数",
            "variants": [
                {
                    "question": "数据：2小时3人，3小时5人，4小时2人，平均时间？",
                    "formula": "(6+15+8)/10=2.9",
                    "answer": 3,
                    "hint": "分别计算再求平均"
                },
                {
                    "question": "数据：80分5人，90分3人，100分2人，平均分？",
                    "formula": "(400+270+200)/10=87",
                    "answer": 87,
                    "hint": "加权求和"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "学生平均每周阅读时间",
                        "阅读总时长",
                        "学生总人数",
                        "各小时的人数"
                    ],
                    "answer": "学生平均每周阅读时间",
                    "explain": "按 3 小时 4 人、4 小时 6 人、5 小时 10 人、6 小时 5 人、7 小时 2 人统计，求加权平均数"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每组阅读小时数与人数的对应：3×4、4×6、5×10、6×5、7×2，总人数 27",
                        "只数出 5 人",
                        "每组都是 1 人",
                        "总时长直接用 27"
                    ],
                    "answer": "每组阅读小时数与人数的对应：3×4、4×6、5×10、6×5、7×2，总人数 27",
                    "explain": "总人数=4+6+10+5+2=27，总时长=各小时×人数求和"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "加权平均=(3×4+4×6+5×10+6×5+7×2)÷27=120/27≈4.4，取整约 4 小时",
                        "直接 5 小时",
                        "平均=27÷5",
                        "平均=120×27"
                    ],
                    "answer": "加权平均=(3×4+4×6+5×10+6×5+7×2)÷27=120/27≈4.4，取整约 4 小时",
                    "explain": "分子=12+24+50+30+14=120，÷27≈4.4 小时，四舍五入约 4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图分布阅读时间与人数，越多人集中在中间值附近",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "总时长=120，总人数=27，平均=120/27≈4.4 约 4 小时",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "加权平均数=各值×权重之和÷权重之和；重复出现的数据按频数加权",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "5只鸽子飞进4个鸽巢。小华想知道是否一定有一个鸽巢里至少有两只鸽子。",
            "question": "至少有一个鸽巢里有几只鸽子？",
            "formula": "ceil(5/4)=2",
            "answer": 2,
            "choices": [
                2,
                1,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 5,
                "parts": [
                    {
                        "label": "巢1",
                        "val": 2,
                        "color": "#00A896"
                    },
                    {
                        "label": "其余",
                        "val": 3,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "鸽巢原理",
            "difficulty": 3,
            "hint": "平均分配后必有至少一个超平均",
            "variants": [
                {
                    "question": "6只鸽子飞进5个巢，至少一巢几只？",
                    "formula": "ceil(6/5)=2",
                    "answer": 2,
                    "hint": "多出一只就要挤进去"
                },
                {
                    "question": "10只鸽子飞进9个巢，至少一巢几只？",
                    "formula": "ceil(10/9)=2",
                    "answer": 2,
                    "hint": "比巢数多一只"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "至少有一个鸽巢里有几只鸽子",
                        "一共有多少只鸽子",
                        "一共有几个鸽巢",
                        "平均每个鸽巢几只鸽子"
                    ],
                    "answer": "至少有一个鸽巢里有几只鸽子",
                    "explain": "5只鸽子进4个鸽巢，要判断一定能保证的那个鸽巢里最少有几只鸽子。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "5只鸽子、4个鸽巢",
                        "4只鸽子、5个鸽巢",
                        "鸽子和鸽巢一样多",
                        "鸽子比鸽巢少1只"
                    ],
                    "answer": "5只鸽子、4个鸽巢",
                    "explain": "关键信息是鸽子数5＞巢数4，正好多1只，所以必有一巢至少2只。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "5÷4=1……1，至少有一个巢装2只",
                        "5÷4=1.25，平均每巢1.25，答案1",
                        "4个巢刚好放4只，答案0",
                        "把剩下的鸽子再加一巢，答案3"
                    ],
                    "answer": "5÷4=1……1，至少有一个巢装2只",
                    "explain": "5÷4=1余1：先每巢放1只，剩下的1只无论进哪个巢，都使该巢有2只，所以至少一巢2只。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：5只鸽子排成一条，4个鸽巢各分配。若每巢先放1只正好4只，剩1只鸽子必然落入其中一个巢。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "鸽巢原理：把5只鸽子塞进4个巢，由 5=4×1+1 知至少一个巢有1+1=2只。余数决定了『至少』的数。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "鸽巢原理通用式：m 个物体放进 n 个抽屉（m＞n），至少有一个抽屉有 ⌈m/n⌉ 个物体。先均分再加1是核心思考。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "把7个苹果放进3个抽屉里。小刚想知道至少有一个抽屉里放几个苹果。",
            "question": "至少有一个抽屉里有几个苹果？",
            "formula": "ceil(7/3)=3",
            "answer": 3,
            "choices": [
                3,
                2,
                4,
                7
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 7,
                "parts": [
                    {
                        "label": "抽屉1",
                        "val": 3,
                        "color": "#00A896"
                    },
                    {
                        "label": "抽屉2",
                        "val": 2,
                        "color": "#2563EB"
                    },
                    {
                        "label": "抽屉3",
                        "val": 2,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "鸽巢原理",
            "difficulty": 3,
            "hint": "7÷3 向上取整得3",
            "variants": [
                {
                    "question": "8个苹果放3个抽屉，至少一抽屉几个？",
                    "formula": "ceil(8/3)=3",
                    "answer": 3,
                    "hint": "向上取整"
                },
                {
                    "question": "10个苹果放4个抽屉，至少一抽屉几个？",
                    "formula": "ceil(10/4)=3",
                    "answer": 3,
                    "hint": "10/4=2.5取3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "至少有一个抽屉里有几个苹果",
                        "一共有几个苹果",
                        "一共有几个抽屉",
                        "苹果比抽屉多几个"
                    ],
                    "answer": "至少有一个抽屉里有几个苹果",
                    "explain": "把7个苹果放进3个抽屉，问一定能保证的那个抽屉里最少有几个苹果。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "7个苹果、3个抽屉",
                        "3个苹果、7个抽屉",
                        "苹果和抽屉一样多",
                        "苹果比抽屉少"
                    ],
                    "answer": "7个苹果、3个抽屉",
                    "explain": "苹果数7＞抽屉数3，7÷3=2余1，说明必有一抽屉至少3个。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "7÷3=2……1，至少有一个抽屉放3个",
                        "7÷3≈2.3取整，每个抽屉2个",
                        "7÷3=2……1只算余数，答案1",
                        "把7个全放一个抽屉，答案7"
                    ],
                    "answer": "7÷3=2……1，至少有一个抽屉放3个",
                    "explain": "7÷3=2余1：每抽屉先放2个共6个，剩1个必进某抽屉，使该抽屉有3个。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：7个苹果对应3个抽屉。每抽屉分2个剩1个，这个剩余苹果落进哪个抽屉，哪个抽屉就有3个。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "7=3×2+1，商2加余数位1得『至少2+1=3』。若 7=3×2+1 中余数不为0则至少是商+1。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "鸽巢原理取上整写法是 ⌈m/n⌉。m 个物品、n 个容器时，至少一个容器有 ⌈m/n⌉ 个物品。这一条能统一所有鸽巢问题。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "抽屉里有红、蓝两种颜色的袜子各若干，小红随便摸出3只袜子。她想判断至少有几只颜色相同。",
            "question": "3只袜子中至少有几只颜色相同？",
            "formula": "ceil(3/2)=2",
            "answer": 2,
            "choices": [
                2,
                1,
                3,
                0
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 3,
                "parts": [
                    {
                        "label": "红色",
                        "val": 2,
                        "color": "#EF4444"
                    },
                    {
                        "label": "蓝色",
                        "val": 1,
                        "color": "#2563EB"
                    }
                ]
            },
            "knowledge": "鸽巢原理",
            "difficulty": 3,
            "hint": "3只袜子2种颜色，必有2只同色",
            "variants": [
                {
                    "question": "3种颜色摸4只袜子，至少几只同色？",
                    "formula": "ceil(4/3)=2",
                    "answer": 2,
                    "hint": "颜色数+1"
                },
                {
                    "question": "2种颜色摸5只袜子，至少几只同色？",
                    "formula": "ceil(5/2)=3",
                    "answer": 3,
                    "hint": "向上取整"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "3只袜子中至少有几只颜色相同",
                        "一共有几只袜子",
                        "有几种颜色",
                        "摸到红色袜子的概率"
                    ],
                    "answer": "3只袜子中至少有几只颜色相同",
                    "explain": "抽屉里有红蓝两种颜色袜子，摸出3只，判断其中至少有几只颜色相同。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "3只袜子、红蓝2种颜色",
                        "3只袜子、3种颜色",
                        "只摸1只袜子",
                        "袜子和颜色一一对应"
                    ],
                    "answer": "3只袜子、红蓝2种颜色",
                    "explain": "颜色种类2相当于2个抽屉，袜子3只相当于3个物体。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "3÷2=1……1，至少2只颜色相同",
                        "3÷2=1.5，恰好1只同色",
                        "红蓝各摸一只刚好不撞色，答案0",
                        "3只都可能是同色，最多3只"
                    ],
                    "answer": "3÷2=1……1，至少2只颜色相同",
                    "explain": "把颜色当抽屉：2种颜色先各放1只共2只，第3只必与其中一种撞色，所以至少2只同色。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "两类颜色看作两个抽屉，3只袜子无论怎么分配，最坏情况红1蓝1恰各占一类，第3只必定与某一类重复。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "鸽巢原理：3只袜子、2种颜色，⌈3/2⌉=2。这就是『最坏也要有两个同类』的保证。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "把不同类别（颜色、月份、属性）当成抽屉，物品比抽屉多1时，必有两个物品同抽屉。识别『谁当抽屉』是解题关键。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个班有13名同学。小明想知道一年12个月份里，是否至少有两个人在同一个月过生日。",
            "question": "至少有几名同学生日在同一个月？",
            "formula": "ceil(13/12)=2",
            "answer": 2,
            "choices": [
                2,
                1,
                3,
                13
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 13,
                "parts": [
                    {
                        "label": "某月",
                        "val": 2,
                        "color": "#00A896"
                    },
                    {
                        "label": "其他",
                        "val": 11,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "鸽巢原理",
            "difficulty": 3,
            "hint": "13人12个月，必有两人同月",
            "variants": [
                {
                    "question": "25人，至少几人同月生日？",
                    "formula": "ceil(25/12)=3",
                    "answer": 3,
                    "hint": "向上取整"
                },
                {
                    "question": "49人分7个组，至少一组几人？",
                    "formula": "ceil(49/7)=7",
                    "answer": 7,
                    "hint": "整除正好"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "至少有几名同学生日在同一个月",
                        "全班一共有几名学生",
                        "一年有几个月份",
                        "最多几人生日在同月"
                    ],
                    "answer": "至少有几名同学生日在同一个月",
                    "explain": "13名同学、一年12个月份，问是否一定月内至少两人同月生日。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "13名同学、12个月份",
                        "12名同学、13个月份",
                        "同学和月份一样多",
                        "只有10名同学"
                    ],
                    "answer": "13名同学、12个月份",
                    "explain": "生日月份有12种，相当于12个抽屉；13名同学相当于13个物体，恰好多1。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "13÷12=1……1，至少2人同月生日",
                        "13÷12≈1，每人独享一月，答案1",
                        "正好每月一人，答案13",
                        "有12个月就恰好12人，答案0"
                    ],
                    "answer": "13÷12=1……1，至少2人同月生日",
                    "explain": "12个月每人只能占一个月，13人必有2人挤进同一月，所以至少2人同月。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把12个月画成12个格子，13个同学依次分配。前12人可各占一格，第13人无新格可去，只能进已有人的格子，于是某月至少2人。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "鸽巢原理：13=12×1+1，⌈13/12⌉=2。人数比月份多1，保证至少一个月有2人生日。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "生活里很多『保证存在』问题都是鸽巢原理：n+1个物体放进n个盒，必有一盒≥2个。先确定物体数和抽屉数即可套公式。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小华解分式方程：x 除以 3 等于 5。",
            "question": "x 的值是多少？",
            "formula": "x/3=5, x=15",
            "answer": 15,
            "choices": [
                15,
                5,
                8,
                2
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 15,
                "points": [
                    {
                        "pos": 5,
                        "label": "商",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 15,
                        "label": "x",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    5,
                    15
                ]
            },
            "knowledge": "分式方程",
            "difficulty": 2,
            "hint": "两边同乘3",
            "variants": [
                {
                    "question": "x/4=3，x=?",
                    "formula": "x=12",
                    "answer": 12,
                    "hint": "两边乘4"
                },
                {
                    "question": "x/5=2，x=?",
                    "formula": "x=10",
                    "answer": 10,
                    "hint": "两边乘5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "未知数 x 的值",
                        "3除以x的结果",
                        "等号右边的数",
                        "方程有多少个解"
                    ],
                    "answer": "未知数 x 的值",
                    "explain": "解分式方程 x÷3=5，求出未知数 x。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "方程 x÷3=5",
                        "方程 3÷x=5",
                        "方程 x×3=5",
                        "方程 x+3=5"
                    ],
                    "answer": "方程 x÷3=5",
                    "explain": "关键信息是分式方程 x/3=5，用等式的两边同乘3消去分母。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "x=5×3=15",
                        "x=5+3=8",
                        "x=5−3=2",
                        "x=5÷3≈1.67"
                    ],
                    "answer": "x=5×3=15",
                    "explain": "等式两边同乘3：x/3×3=5×3，得 x=15。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上把 x/3=5 看成『x 被切成3份每份是5』，所以整段 x 是 3×5。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "分式方程去分母：两边同乘3得 x=15。检验 15÷3=5 成立。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "凡方程含分母，就去分母：等式两边同乘分母。『两边同乘以相同的非零数，等式仍成立』是解一切方程的基本依据。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小刚解分式方程：3 除以 x 等于 1。",
            "question": "x 的值是多少？",
            "formula": "3/x=1, x=3",
            "answer": 3,
            "choices": [
                3,
                1,
                4,
                2
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 3,
                "points": [
                    {
                        "pos": 1,
                        "label": "商",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 3,
                        "label": "x",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    1,
                    3
                ]
            },
            "knowledge": "分式方程求解",
            "difficulty": 2,
            "hint": "3/x=1 得 x=3",
            "variants": [
                {
                    "question": "6/x=2，x=?",
                    "formula": "x=3",
                    "answer": 3,
                    "hint": "两边同乘x"
                },
                {
                    "question": "12/x=4，x=?",
                    "formula": "x=3",
                    "answer": 3,
                    "hint": "解出x"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "未知数 x 的值",
                        "3除以x的商",
                        "等号右边的1",
                        "方程的解的个数"
                    ],
                    "answer": "未知数 x 的值",
                    "explain": "解分式方程 3÷x=1，求出未知数 x。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "方程 3÷x=1",
                        "方程 x÷3=1",
                        "方程 3×x=1",
                        "方程 3+x=1"
                    ],
                    "answer": "方程 3÷x=1",
                    "explain": "关键信息是 3/x=1，分子已知、分母未知，直接判断分母等于分子。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "3÷x=1，所以 x=3",
                        "x=3−1=2",
                        "x=3+1=4",
                        "x=1（直接取等号右边）"
                    ],
                    "answer": "3÷x=1，所以 x=3",
                    "explain": "3÷x=1 说明 3=x×1，即 x=3。也可两边乘 x 再得 x=3。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "3÷x=1 意味着把3分成若干份每份是1，份数正好是3。数轴上体现被除数、除数、商三者关系。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "除数=被除数÷商：x=3÷1=3。检验 3÷3=1 成立。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "被除数÷除数=商的三量关系：除数=被除数÷商。形如 k/x=b 的分式方程都可用此法或交叉相乘求解。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "反比例函数 y = 6/x，当 x=2 时，小红想求 y 的值。",
            "question": "当 x=2 时 y 的值是多少？",
            "formula": "y = 6/2 = 3",
            "answer": 3,
            "choices": [
                3,
                12,
                4,
                6
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 6,
                "points": [
                    {
                        "pos": 3,
                        "label": "y",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 6,
                        "label": "k",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    3,
                    6
                ]
            },
            "knowledge": "反比例函数",
            "difficulty": 2,
            "hint": "y=k/x，代入 x=2",
            "variants": [
                {
                    "question": "y=12/x，x=4 时 y=?",
                    "formula": "12/4=3",
                    "answer": 3,
                    "hint": "代入相除"
                },
                {
                    "question": "y=24/x，x=8 时 y=?",
                    "formula": "24/8=3",
                    "answer": 3,
                    "hint": "k除以x"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "x=2 时函数 y 的值",
                        "比例系数 k 的值",
                        "函数的图像形状",
                        "x 的取值范围"
                    ],
                    "answer": "x=2 时函数 y 的值",
                    "explain": "反比例函数 y=6/x，求当 x=2 时的 y 值。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "函数式 y=6/x，x=2",
                        "函数式 y=2/x",
                        "k=2、x=6",
                        "只有函数式没有 x"
                    ],
                    "answer": "函数式 y=6/x，x=2",
                    "explain": "已知反比例函数 y=6/x 与给定 x=2，代入即可得 y。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "代入 x=2：y=6÷2=3",
                        "y=6×2=12",
                        "y=6−2=4",
                        "y=2×3=6（把k当y）"
                    ],
                    "answer": "代入 x=2：y=6÷2=3",
                    "explain": "反比例函数 y=k/x，代入 x=2：y=6/2=3。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "反比例函数图像是双曲线，k=6 固定不变。在 x=2 处对应的纵坐标 y=3，即为双曲线上该点的位置。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "反比例 y=k/x 中 k 恒定等于 x·y。代入已知 x=2 得 y=6/2=3，验证 k=2×3=6。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "反比例函数给定 k 与一个 x，y 就唯一确定：y=k/x。反过来给一点 (x,y) 可求 k=x·y。『k 恒定』是反比例的核心。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "反比例函数 y = k/x 的图像经过点(2,3)。小刚想求出比例系数 k。",
            "question": "比例系数 k 是多少？",
            "formula": "k = 2*3 = 6",
            "answer": 6,
            "choices": [
                6,
                5,
                9,
                2
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 6,
                "points": [
                    {
                        "pos": 2,
                        "label": "x",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 6,
                        "label": "k",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    2,
                    6
                ]
            },
            "knowledge": "反比例函数系数",
            "difficulty": 2,
            "hint": "k=x·y=2×3=6",
            "variants": [
                {
                    "question": "过点(4,2)的反比例函数k=?",
                    "formula": "4*2=8",
                    "answer": 8,
                    "hint": "x乘y"
                },
                {
                    "question": "过点(1,10)的反比例函数k=?",
                    "formula": "1*10=10",
                    "answer": 10,
                    "hint": "x乘y"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "反比例函数的比例系数 k",
                        "图像上一点的 y 值",
                        "图像的对称轴",
                        "x 的取值范围"
                    ],
                    "answer": "反比例函数的比例系数 k",
                    "explain": "反比例函数 y=k/x 过点 (2,3)，求比例系数 k。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "函数图像经过点(2,3)",
                        "函数经过点(3,2)",
                        "k 直接等于2",
                        "只给了一个坐标"
                    ],
                    "answer": "函数图像经过点(2,3)",
                    "explain": "反比例函数上点的坐标满足 x·y=k，用 (2,3) 代入即可求 k。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "k=x·y=2×3=6",
                        "k=2+3=5",
                        "k=3×3=9",
                        "k=2（只看x坐标）"
                    ],
                    "answer": "k=x·y=2×3=6",
                    "explain": "反比例关系里 k=x·y。把点(2,3)代入：k=2×3=6。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "反比例图像上每个点的横纵坐标乘积都等于同一个常数 k。点(2,3) 的横纵积即 k。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "由 y=k/x 移项得 k=x·y。代入点(2,3)：k=2×3=6。函数式为 y=6/x。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知反比例函数过一点，k=该点x×y。k 一旦确定，函数完全确定。这与上题『给定k求y』互为逆过程，二者互用。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一组成绩是 2、4、6。小红想算它们的平均数。",
            "question": "这组数据的平均数是多少？",
            "formula": "(2+4+6)/3 = ?",
            "answer": 4,
            "choices": [
                4,
                5,
                3,
                6
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 12,
                "parts": [
                    {
                        "label": "2",
                        "val": 2,
                        "color": "#00A896"
                    },
                    {
                        "label": "4",
                        "val": 4,
                        "color": "#2563EB"
                    },
                    {
                        "label": "6",
                        "val": 6,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "数据的集中趋势",
            "difficulty": 1,
            "hint": "平均数=总和÷个数",
            "variants": [
                {
                    "question": "1、3、5、7 的平均数？",
                    "formula": "(1+3+5+7)/4=4",
                    "answer": 4,
                    "hint": "总和除个数"
                },
                {
                    "question": "10、20、30 的平均数？",
                    "formula": "60/3=20",
                    "answer": 20,
                    "hint": "60除以3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这组数据的平均数",
                        "这组数据的中位数",
                        "这组数据的众数",
                        "这组数据的个数"
                    ],
                    "answer": "这组数据的平均数",
                    "explain": "数据为2、4、6，求它们的算术平均数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "三个数 2、4、6，共3个",
                        "三个数2、4、6，只有前两个",
                        "数据有6个",
                        "只给了最大的数6"
                    ],
                    "answer": "三个数 2、4、6，共3个",
                    "explain": "共3个数2、4、6，用总和÷个数即得平均数。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "(2+4+6)÷3=12÷3=4",
                        "2+4+6=12，直接当平均数",
                        "最大的6当平均数",
                        "(2+6)÷4=2"
                    ],
                    "answer": "(2+4+6)÷3=12÷3=4",
                    "explain": "平均数=总和÷个数：(2+4+6)÷3=12÷3=4。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：三根条2、4、6 长度不齐，把三根拼平后每根等高等于4，这个『拉平』的值就是平均数。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平均数=所有数据之和÷数据个数。总和12，个数3，平均数4。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "算术平均数 x̄=(x₁+x₂+…+xₙ)/n 即各数加总再除以个数。它是描述一组数据集中位置的常用指标。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一组数据从小到大排列为 1、3、5、7、9。小刚想求这组数据的中位数。",
            "question": "这组数据的中位数是多少？",
            "formula": "中间的数 = 5",
            "answer": 5,
            "choices": [
                5,
                3,
                7,
                4
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 1,
                "end": 9,
                "points": [
                    {
                        "pos": 5,
                        "label": "中位数",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    5,
                    5
                ]
            },
            "knowledge": "数据的集中趋势",
            "difficulty": 1,
            "hint": "奇数个数据中间一个就是中位数",
            "variants": [
                {
                    "question": "2、4、8 的中位数？",
                    "formula": "中间为4",
                    "answer": 4,
                    "hint": "中间值"
                },
                {
                    "question": "10、12、14、16 的中位数？",
                    "formula": "(12+14)/2=13",
                    "answer": 13,
                    "hint": "偶数个取中间两数平均"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "一组数据的中位数",
                        "这组数据的平均数",
                        "这组数据的极差",
                        "数据的总和"
                    ],
                    "answer": "一组数据的中位数",
                    "explain": "数据升序排列为1、3、5、7、9，求中位数（正中间的值）。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "5个数已升序排列，要取第3个",
                        "5个数要彻底重新排序",
                        "数据个数是偶数",
                        "中位数就是最大数9"
                    ],
                    "answer": "5个数已升序排列，要取第3个",
                    "explain": "奇数个数据，正中间那个就是中位数；第3个数是5。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "5个数，中间第3个=5",
                        "直接取最小数1",
                        "直接取最大数9",
                        "取两端的平均数 (1+9)÷2=5"
                    ],
                    "answer": "5个数，中间第3个=5",
                    "explain": "数据已排序，个数5为奇数，取正中间第 (5+1)/2=3 个，即5。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上5个点 1,3,5,7,9 依次排开，正中间的点是5，它把数据分成左右各一半。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "中位数须先排序。奇数个取中间一个（第(n+1)/2个），偶数个取中间两个的平均。这里是第3个=5。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "中位数不受极端值影响，能代表数据中心。求法：先升序排序，看奇数取中间、偶数取中间两数平均。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一组数据的最高分是90分，最低分是60分。小红想求这组数据的极差。",
            "question": "这组数据的极差是多少？",
            "formula": "90 - 60 = ?",
            "answer": 30,
            "choices": [
                30,
                150,
                75,
                20
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 60,
                "end": 90,
                "points": [
                    {
                        "pos": 60,
                        "label": "最低",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 90,
                        "label": "最高",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    60,
                    90
                ]
            },
            "knowledge": "数据的离散程度",
            "difficulty": 1,
            "hint": "极差=最大值-最小值",
            "variants": [
                {
                    "question": "最大85最小40，极差？",
                    "formula": "85-40=45",
                    "answer": 45,
                    "hint": "最大减最小"
                },
                {
                    "question": "最大100最小10，极差？",
                    "formula": "100-10=90",
                    "answer": 90,
                    "hint": "直接相减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这组数据的极差",
                        "这组数据的平均数",
                        "这组数据的中位数",
                        "数据的个数"
                    ],
                    "answer": "这组数据的极差",
                    "explain": "最高分90、最低分60，求这组数据的极差。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "最高分90分、最低分60分",
                        "最高分60分、最低分90分",
                        "只有一个分数",
                        "分数都相同"
                    ],
                    "answer": "最高分90分、最低分60分",
                    "explain": "极差=最大值−最小值，需要最高90和最低60。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "极差=90−60=30",
                        "极差=90+60=150",
                        "极差=(90+60)÷2=75",
                        "极差=90−70=20"
                    ],
                    "answer": "极差=90−60=30",
                    "explain": "极差=最大值−最小值=90−60=30。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上最高分90 在最右、最低分60 在最左，两点的距离就是极差，也就是这段数轴上数据摆动的范围。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "极差=最大值−最小值，反映数据的离散程度（波动范围）。90−60=30。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "极差是最简单的离散度指标：极差=最大−最小。它只看两端，忽略中间数据；描述『跨度』而非分布。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "期中成绩80分占40%，期末成绩90分占60%。小红想算这学期的加权平均分。",
            "question": "加权平均分是多少？",
            "formula": "80*0.4 + 90*0.6 = ?",
            "answer": 86,
            "choices": [
                86,
                85,
                84,
                88
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 100,
                "parts": [
                    {
                        "label": "期中(40%)",
                        "val": 32,
                        "color": "#2563EB"
                    },
                    {
                        "label": "期末(60%)",
                        "val": 54,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "加权平均数",
            "difficulty": 2,
            "hint": "各成绩乘权重再相加",
            "variants": [
                {
                    "question": "平时90占50%，考试70占50%，加权？",
                    "formula": "90*0.5+70*0.5=80",
                    "answer": 80,
                    "hint": "各乘0.5相加"
                },
                {
                    "question": "作业100占20%，测验80占80%，加权？",
                    "formula": "100*0.2+80*0.8=84",
                    "answer": 84,
                    "hint": "按权重分配"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "这学期的加权平均分",
                        "两门成绩的普通平均分",
                        "期末总分",
                        "期中总分"
                    ],
                    "answer": "这学期的加权平均分",
                    "explain": "期中80分占40%、期末90分占60%，求加权平均分。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "期中80(权重40%)、期末90(权重60%)",
                        "期中80(60%)、期末90(40%)",
                        "两门权重各50%",
                        "只有期中一种成绩"
                    ],
                    "answer": "期中80(权重40%)、期末90(权重60%)",
                    "explain": "每个成绩乘上对应权重再相加：80×0.4+90×0.6。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "加权均=80×0.4+90×0.6=32+54=86",
                        "(80+90)÷2=85（没按权重）",
                        "权重弄反：80×0.6+90×0.4=84",
                        "把90×0.6算54、80×0.4算34，和88"
                    ],
                    "answer": "加权均=80×0.4+90×0.6=32+54=86",
                    "explain": "加权平均=各值×权重再求和：80×0.4+90×0.6=32+54=86。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：期中占4成、期末占6成，权重大的期末对总分影响也大，图形上期末的长条更宽、权重大。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "加权平均=Σ(值×权重)，权重和为1。80×0.4=32、90×0.6=54，和86。注意别与普通平均(85)搞混。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "加权平均把每项乘各自权重再相加，权重反映重要程度。当权重各相等时，它退化为普通平均数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "同时抛两枚硬币，小红想知道两枚都是正面的概率。",
            "question": "两枚都是正面的概率是多少？",
            "formula": "1/2 * 1/2 = 0.25",
            "answer": 0.25,
            "choices": [
                0.25,
                0.5,
                0.75,
                1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 1,
                "points": [
                    {
                        "pos": 0.25,
                        "label": "概率",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 1,
                        "label": "1",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    0.25,
                    1
                ]
            },
            "knowledge": "概率的乘法",
            "difficulty": 2,
            "hint": "独立事件概率相乘",
            "variants": [
                {
                    "question": "两枚硬币一正一反的概率？",
                    "formula": "2*1/4=0.5",
                    "answer": 0.5,
                    "hint": "两种情况"
                },
                {
                    "question": "三枚硬币都是正面的概率？",
                    "formula": "(1/2)^3=0.125",
                    "answer": 0.125,
                    "hint": "三个0.5相乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两枚硬币都朝正面的概率",
                        "一枚硬币正面的概率",
                        "两枚硬币一正一反的概率",
                        "抛硬币的次数"
                    ],
                    "answer": "两枚硬币都朝正面的概率",
                    "explain": "同时抛两枚硬币，求两枚都是正面的概率。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "每枚硬币正面概率是 1/2，抛两枚",
                        "每枚正面概率是 1，只抛一枚",
                        "两枚硬币互相影响",
                        "正面概率无法确定"
                    ],
                    "answer": "每枚硬币正面概率是 1/2，抛两枚",
                    "explain": "两枚硬币抛掷相互独立，各自正面概率都是1/2，同为1/2。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "两枚都正=1/2×1/2=1/4=0.25",
                        "两枚都正=1/2+1/2=1",
                        "两枚都正=1/2×3/2=0.75",
                        "两枚都正=1/2=0.5"
                    ],
                    "answer": "两枚都正=1/2×1/2=1/4=0.25",
                    "explain": "独立事件同时发生概率相乘：1/2×1/2=1/4=0.25。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "两枚硬币抛掷有4种等可能结果（正正、正反、反正、反反），其中正正是1种，占1/4。树状图可清晰列出。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "独立事件的乘法法则：P(A且B)=P(A)×P(B)=1/2×1/2=1/4。列表格或树状图都能验证是4种里的1种。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "两独立事件同时发生的概率等于各自概率之积。n枚硬币都是正面的概率=(1/2)ⁿ。先确认独立，再相乘。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "袋中有3个红球和2个蓝球，小红随机摸出1个球，想求摸到红球的概率。",
            "question": "摸到红球的概率是多少？",
            "formula": "3 / 5 = 0.6",
            "answer": 0.6,
            "choices": [
                0.6,
                0.4,
                0.5,
                0.3
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 5,
                "parts": [
                    {
                        "label": "红球",
                        "val": 3,
                        "color": "#EF4444"
                    },
                    {
                        "label": "蓝球",
                        "val": 2,
                        "color": "#2563EB"
                    }
                ]
            },
            "knowledge": "概率的乘法",
            "difficulty": 2,
            "hint": "概率=有利情况÷总情况",
            "variants": [
                {
                    "question": "4红1蓝，摸红概率？",
                    "formula": "4/5=0.8",
                    "answer": 0.8,
                    "hint": "红除以总"
                },
                {
                    "question": "2红3蓝，摸红概率？",
                    "formula": "2/5=0.4",
                    "answer": 0.4,
                    "hint": "有利除以总"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "随机摸一个球是红球的概率",
                        "袋中球的总数",
                        "红球的个数",
                        "蓝球的个数"
                    ],
                    "answer": "随机摸一个球是红球的概率",
                    "explain": "袋中有3个红球、2个蓝球，求随机摸出一个为红球的概率。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "3个红球、2个蓝球，共5个",
                        "2个红球、3个蓝球，共5个",
                        "全是红球",
                        "红蓝各半"
                    ],
                    "answer": "3个红球、2个蓝球，共5个",
                    "explain": "有利情况3个红球，总球数5个，用有利÷总数。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "P(红)=3÷5=0.6",
                        "P(红)=2÷5=0.4（算成蓝球）",
                        "P(红)=1÷2=0.5（红蓝对半）",
                        "P(红)=3÷2=1.5"
                    ],
                    "answer": "P(红)=3÷5=0.6",
                    "explain": "概率=有利情况÷总情况：3个红球÷5个球=0.6。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图：5个球中3格红色、2格蓝色。摸一次能看到，红球占3格，即总体的3/5。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "古典概型 P=有利的情况数÷总情况数=3/5=0.6。每个球被摸到的机会均等。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "『从n个等可能结果中取出有利的m种』概率就是m/n。核心是先数清总结果数与有利结果数，再相除。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小华计算整式乘法：(x+2)(x+3) 展开后，想知道常数项是多少。",
            "question": "展开后的常数项是多少？",
            "formula": "2*3 = 6",
            "answer": 6,
            "choices": [
                6,
                5,
                3,
                9
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 6,
                "points": [
                    {
                        "pos": 2,
                        "label": "2",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 6,
                        "label": "常数项",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    2,
                    6
                ]
            },
            "knowledge": "整式运算",
            "difficulty": 2,
            "hint": "(x+a)(x+b)=x²+(a+b)x+ab，常数项=ab",
            "variants": [
                {
                    "question": "(x+1)(x+4) 常数项？",
                    "formula": "1*4=4",
                    "answer": 4,
                    "hint": "末项相乘"
                },
                {
                    "question": "(x+3)(x+5) 常数项？",
                    "formula": "3*5=15",
                    "answer": 15,
                    "hint": "末两项相乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "展开后多项式里的常数项",
                        "x² 项的系数",
                        "x 一次项的系数",
                        "展开后有几个多项式"
                    ],
                    "answer": "展开后多项式里的常数项",
                    "explain": "(x+2)(x+3) 展开后，求其中的常数项。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "整式乘法 (x+2)(x+3)，形式 (x+a)(x+b)",
                        "(x+2)(x+3) 是一次式相乘",
                        "只要看 x 的系数",
                        "常数项由 x 决定"
                    ],
                    "answer": "整式乘法 (x+2)(x+3)，形式 (x+a)(x+b)",
                    "explain": "(x+a)(x+b)=x²+(a+b)x+ab，常数项来自常数 a×b。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "常数项=ab=2×3=6",
                        "一次项系数=a+b=2+3=5",
                        "常数项取中间值(a+b)÷2=3",
                        "常数项=2×3+3的结果9"
                    ],
                    "answer": "常数项=ab=2×3=6",
                    "explain": "展开 (x+2)(x+3)=x²+5x+6，仅末尾不含x的项是6，即2×3。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴/分配律展开：x·x、x·3、2·x、2·3 四项，其中含两个常数的乘积2×3 这一项不含x，就是常数项。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "公式 (x+a)(x+b)=x²+(a+b)x+ab。ab 是常数项，a+b 是一次项系数。代入 a=2、b=3，常数项=6。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "两个一次二项式相乘的常数项等于两个常数相乘；一次项系数等于两常数之和。这条系数规律适用于任意含参的同类乘法。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小刚计算整式除法：6x² 除以 2x，想知道商的系数。",
            "question": "6x²÷2x 的商系数是多少？",
            "formula": "6/2 = 3",
            "answer": 3,
            "choices": [
                3,
                6,
                2,
                12
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 6,
                "points": [
                    {
                        "pos": 3,
                        "label": "系数",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 6,
                        "label": "6",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    3,
                    6
                ]
            },
            "knowledge": "整式乘除运算",
            "difficulty": 2,
            "hint": "系数相除，同底数幂相减",
            "variants": [
                {
                    "question": "8x²÷4x 系数？",
                    "formula": "8/4=2",
                    "answer": 2,
                    "hint": "系数相除"
                },
                {
                    "question": "12x³÷3x 系数？",
                    "formula": "12/3=4",
                    "answer": 4,
                    "hint": "先除系数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "6x²÷2x 这个商的系数",
                        "6x² 的系数",
                        "2x 的系数",
                        "商的次数"
                    ],
                    "answer": "6x²÷2x 这个商的系数",
                    "explain": "求 6x²÷2x 所得商的系数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "整式除法 6x²÷2x，系数6和2",
                        "整式乘法 6x²×2x",
                        "只要看字母 x",
                        "被除数没有系数"
                    ],
                    "answer": "整式除法 6x²÷2x，系数6和2",
                    "explain": "商的系数由系数相除得到：6÷2；字母部分按同底数幂相减。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "商的系数=6÷2=3",
                        "直接用被除数系数6",
                        "直接用除数系数2",
                        "系数相乘 6×2=12"
                    ],
                    "answer": "商的系数=6÷2=3",
                    "explain": "整式除法：系数相除、同底数幂指数相减。6÷2=3，商为3x。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "6x² 上面有系数6，2x 有系数2，把两者数字部分单独相除得3；字母 x 每一边各一次抵消后剩x。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "整式除法分两步：系数相除、同底数幂指数相减。6x²÷2x=3x，系数3。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "单项式相除：系数除系数、同底数幂指数相减 (xᵐ÷xⁿ=xᵐ⁻ⁿ)。这是整式乘除运算的基本规则。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个圆的半径是7厘米。小红想求它的周长（π取3.14，结果取整数）。",
            "question": "圆的周长约是多少厘米？",
            "formula": "2*3.14*7 = 43.96 ≈ 44",
            "answer": 44,
            "choices": [
                44,
                46,
                42,
                40
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "radius": 7
                }
            },
            "knowledge": "圆的周长与面积",
            "difficulty": 2,
            "hint": "周长 C=2πr",
            "variants": [
                {
                    "question": "半径5的圆周长约？",
                    "formula": "2*3.14*5≈31",
                    "answer": 31,
                    "hint": "2πr"
                },
                {
                    "question": "半径10的圆周长约？",
                    "formula": "2*3.14*10≈63",
                    "answer": 63,
                    "hint": "2πr"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "圆的周长（取整数）",
                        "圆的面积",
                        "圆的直径",
                        "圆的半径"
                    ],
                    "answer": "圆的周长（取整数）",
                    "explain": "半径为7厘米的圆，求周长，π取3.14、结果取整数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径7厘米，π取3.14，取整数",
                        "直径7厘米",
                        "半径14厘米",
                        "要用面积公式"
                    ],
                    "answer": "半径7厘米，π取3.14，取整数",
                    "explain": "知半径7和π≈3.14，用周长公式 C=2πr。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "C=2×3.14×7=43.96≈44",
                        "C=3.14×7≈22（漏乘2）",
                        "C=3.14×7²≈154（用了面积）",
                        "C=2×7×3≈46（π取3）"
                    ],
                    "answer": "C=2×3.14×7=43.96≈44",
                    "explain": "周长 C=2πr=2×3.14×7=43.96，四舍五入取整得44。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "圆内半径7cm 从圆心到圆周，直径长14cm（两条半径）。周长就是把圆周拉直后的长度，等于 π×直径。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "周长 C=2πr=πd。代入 r=7：C=2×3.14×7=43.96，四舍五入为44。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆周长恒用 C=2πr 或 C=πd。注意与面积 S=πr² 区分：周长乘的是 r（一次），面积乘 r²。取整一般四舍五入。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个圆的半径是3厘米。小刚想求它的面积（π取3.14，结果取整数）。",
            "question": "圆的面积约是多少平方厘米？",
            "formula": "3.14*3^2 = 28.26 ≈ 28",
            "answer": 28,
            "choices": [
                28,
                30,
                26,
                32
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "circle",
                "params": {
                    "radius": 3
                }
            },
            "knowledge": "圆的周长与面积",
            "difficulty": 2,
            "hint": "面积 S=πr²",
            "variants": [
                {
                    "question": "半径5的圆面积约？",
                    "formula": "3.14*25≈79",
                    "answer": 79,
                    "hint": "πr²"
                },
                {
                    "question": "半径2的圆面积约？",
                    "formula": "3.14*4≈13",
                    "answer": 13,
                    "hint": "πr²"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "圆的面积（取整数）",
                        "圆的周长",
                        "圆的直径",
                        "圆的半径"
                    ],
                    "answer": "圆的面积（取整数）",
                    "explain": "半径为3厘米的圆，求面积，π取3.14、结果取整数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "半径3厘米，π取3.14，取整数",
                        "直径3厘米",
                        "半径6厘米",
                        "要用周长公式"
                    ],
                    "answer": "半径3厘米，π取3.14，取整数",
                    "explain": "知半径3和π≈3.14，用面积公式 S=πr²。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "S=3.14×3²=3.14×9=28.26≈28",
                        "S=2×3.14×3≈19（误用周长）",
                        "S=3.14×3≈9（忘了平方）",
                        "S=3.14×9=28.26，向上取整算30"
                    ],
                    "answer": "S=3.14×3²=3.14×9=28.26≈28",
                    "explain": "面积 S=πr²=3.14×9=28.26，四舍五入取整得28。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "圆半径3cm，面积指圆内包围的区域大小。图形上半径平方 r²=9 参与面积计算，比周长公式里的一次方更'胖'。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积 S=πr²=3.14×3²=3.14×9=28.26，四舍五入为28平方厘米。注意先平方再乘π。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆面积 S=πr²（半径平方），圆周长 C=2πr（半径一次方）。r 增大时面积增速远快于周长，二者不可混用。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "抛物线 y = x² - 4x + 3 的顶点，小红用配方法求顶点横坐标。",
            "question": "顶点横坐标是多少？",
            "formula": "x = -(-4)/(2*1) = 2",
            "answer": 2,
            "choices": [
                2,
                -2,
                4,
                1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 4,
                "points": [
                    {
                        "pos": 2,
                        "label": "顶点x",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 4,
                        "label": "b",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    2,
                    4
                ]
            },
            "knowledge": "二次函数顶点",
            "difficulty": 2,
            "hint": "顶点横坐标 x=-b/(2a)",
            "variants": [
                {
                    "question": "y=x²-2x 顶点横坐标？",
                    "formula": "x=2/2=1",
                    "answer": 1,
                    "hint": "-b/2a"
                },
                {
                    "question": "y=x²+6x+5 顶点横坐标？",
                    "formula": "x=-6/2=-3",
                    "answer": -3,
                    "hint": "-b/2a"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "抛物线的顶点横坐标",
                        "抛物线的顶点纵坐标",
                        "抛物线与y轴交点",
                        "抛物线的开口方向"
                    ],
                    "answer": "抛物线的顶点横坐标",
                    "explain": "抛物线 y=x²−4x+3，用配方法求顶点横坐标。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "抛物线 y=x²−4x+3，a=1、b=−4",
                        "抛物线 y=x²+4x−3，a=1、b=4",
                        "函数是一次函数",
                        "顶点在原点"
                    ],
                    "answer": "抛物线 y=x²−4x+3，a=1、b=−4",
                    "explain": "一般式对应的 a=1、b=−4、c=3，顶点横坐标 x=−b/(2a)。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "x=−b/(2a)=−(−4)/(2×1)=4÷2=2",
                        "x=−(−4)=4，直接用b的相反数",
                        "x=−2（符号算错）",
                        "x=1（误以为顶点在x=1）"
                    ],
                    "answer": "x=−b/(2a)=−(−4)/(2×1)=4÷2=2",
                    "explain": "顶点横坐标 x=−b/(2a)：代入 a=1、b=−4，x=4/2=2。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "抛物线开口向上，对称轴竖直经过顶点。顶点的横坐标就是对称轴的位置 x=−b/(2a)，把抛物线左右对称起来的中线。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "对 y=ax²+bx+c，顶点横坐标 x=−b/(2a)。a=1、b=−4 代入 x=4/2=2。再代入原式可得 y=−1，顶点(2,−1)。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "二次函数顶点横坐标恒为 x=−b/(2a)，不依赖 c。配合代入原式能求出顶点纵坐标。∩形开口看 a 的符号。这条公式适用于任意二次函数。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红求特殊角45度的正切值。",
            "question": "tan45° 的值是多少？",
            "formula": "tan45 = 1",
            "answer": 1,
            "choices": [
                1,
                0.5,
                0,
                1.73
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 1,
                "points": [
                    {
                        "pos": 1,
                        "label": "tan45",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 0,
                        "label": "0",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    1,
                    0
                ]
            },
            "knowledge": "特殊角三角函数",
            "difficulty": 1,
            "hint": "45度角正切等于1",
            "variants": [
                {
                    "question": "tan0° = ?",
                    "formula": "tan0=0",
                    "answer": 0,
                    "hint": "正切最小0"
                },
                {
                    "question": "cos45° ≈ ?",
                    "formula": "sqrt(2)/2=0.707",
                    "answer": 0.707,
                    "hint": "根号2的一半"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "45° 角的正切值",
                        "45° 角的正弦值",
                        "45° 角的余弦值",
                        "三角形的斜边"
                    ],
                    "answer": "45° 角的正切值",
                    "explain": "求特殊角45°的 tan 值。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "45° 是特殊角，tan=对边÷邻边",
                        "45° 角的对边和邻边不等",
                        "正切只与斜边有关",
                        "45° 没有对应特殊值"
                    ],
                    "answer": "45° 是特殊角，tan=对边÷邻边",
                    "explain": "45°直角三角形是等腰直角，对边=邻边，二者比值1。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "tan45°=对边÷邻边=1",
                        "tan45°=1/2=0.5",
                        "tan45°=0",
                        "tan45°=√3≈1.73"
                    ],
                    "answer": "tan45°=对边÷邻边=1",
                    "explain": "45°直角等腰三角形中，对边=邻边，tan45°=对边/邻边=1。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "45°角的直角三角形两锐角相等，是等腰直角三角形，两直角边（对边、邻边）等长。它们的比恰好是1。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "tanθ=对边/邻边。45°等腰直角中两直角边相等，所以 tan45°=1。与 sin/cos 不同，正切可以大于1。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "特殊角正切：tan30°=√3/3、tan45°=1、tan60°=√3。正切=对边/邻边，与正弦、余弦一样都是直角三角形边长比的本质。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一块平行四边形的土地，底10米、高6米。小华想算它的面积。",
            "question": "平行四边形面积是多少平方米？",
            "formula": "10 * 6 = ?",
            "answer": 60,
            "choices": [
                60,
                30,
                66,
                16
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "parallelogram",
                "params": {
                    "base": 10,
                    "height": 6
                }
            },
            "knowledge": "平行四边形面积",
            "difficulty": 2,
            "hint": "平行四边形面积=底×高",
            "variants": [
                {
                    "question": "底8高7的平行四边形面积？",
                    "formula": "8*7=56",
                    "answer": 56,
                    "hint": "底乘高"
                },
                {
                    "question": "底15高4的平行四边形面积？",
                    "formula": "15*4=60",
                    "answer": 60,
                    "hint": "直接相乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "平行四边形的面积",
                        "平行四边形的周长",
                        "平行四边形的高",
                        "平行四边形的底"
                    ],
                    "answer": "平行四边形的面积",
                    "explain": "平行四边形底10米、高6米，求面积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "底10米、高6米",
                        "底10米、斜边6米",
                        "只给了底10米",
                        "只给了高6米"
                    ],
                    "answer": "底10米、高6米",
                    "explain": "面积公式需要底和对应的高：底10、高6。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "S=底×高=10×6=60",
                        "S=10×6÷2=30（误用三角形）",
                        "S=10+6=16",
                        "S=10×6+6=66"
                    ],
                    "answer": "S=底×高=10×6=60",
                    "explain": "平行四边形面积=底×高=10×6=60平方米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "平行四边形底10m，高6m 是底边到对边的垂直距离。沿高把一块剪下平移到另一侧，就拼成长方形（长10、宽6）。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "平行四边形面积=底×高，是把斜边『拉正』成长方形推导来的。S=10×6=60。注意高一定要垂直于底。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "平行四边形、长方形、正方形面积都可归结为『底×高』(S=底×高)，区别仅在是否需分割平移。此公式通用。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "扇形统计图中某部分占整体的75%。小红想知道它对应的圆心角是多少度。",
            "question": "对应的圆心角是多少度？",
            "formula": "360 * 75% = ?",
            "answer": 270,
            "choices": [
                270,
                75,
                135,
                180
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 360,
                "points": [
                    {
                        "pos": 270,
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
                    270,
                    360
                ]
            },
            "knowledge": "扇形统计图",
            "difficulty": 2,
            "hint": "圆心角=360×占比",
            "variants": [
                {
                    "question": "占比25%对应圆心角？",
                    "formula": "360*0.25=90",
                    "answer": 90,
                    "hint": "乘0.25"
                },
                {
                    "question": "占比20%对应圆心角？",
                    "formula": "360*0.2=72",
                    "answer": 72,
                    "hint": "乘0.2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "扇形部分对应的圆心角",
                        "扇形部分的百分比",
                        "整个圆的圆心角",
                        "扇形部分的面积"
                    ],
                    "answer": "扇形部分对应的圆心角",
                    "explain": "扇形统计图中某部分占整体的75%，求它对应的圆心角的度数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "部分占比75%，整个圆对应360°",
                        "部分占比75%，且圆心90°",
                        "整圆对应75°",
                        "部分占比25%"
                    ],
                    "answer": "部分占比75%，整个圆对应360°",
                    "explain": "整个圆圆心角是360°，某部分的圆心角=360°×该部分占比。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "圆心角=360°×75%=270°",
                        "圆心角=75°（直接用百分比）",
                        "圆心角=360°×75%的一半=135°",
                        "圆心角=360°÷2=180°"
                    ],
                    "answer": "圆心角=360°×75%=270°",
                    "explain": "圆心角=占比×360°：75%=0.75，360×0.75=270°。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "扇形统计图把整圆按占比切成若干扇形，整个圆是360°。占75%的扇形角度为360°的75%，超过半圆很多。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "扇形圆心角与占比成正比：圆心角=360°×占比。360×0.75=270°，正好占整圆的3/4。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "圆心角=360°×该部分百分比。反过来，由圆心角也能求占比。扇形统计图里，角度、占比、频数三类量相互换算，抓『占比』做桥梁即可。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        }
    ]
};
