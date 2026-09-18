window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE["8a"] = {
    "title": "八年级上册·二次根式·勾股定理",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "knowledgeMap": [
        {
            "id": "8A-01",
            "name": "二次根式",
            "concept": "形如√a(a≥0)的式子，√a·√b=√(ab)",
            "prerequisite": "7B-07",
            "extends": "8A-02 一次函数",
            "visualStrategy": "面积开方",
            "visualType": "areaModel",
            "coreLiteracy": "运算能力",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "8A-02",
            "name": "一次函数",
            "concept": "y=kx+b(k≠0)的图象是一条直线",
            "prerequisite": "7B-10",
            "extends": "8A-03 反比例函数",
            "visualStrategy": "坐标系直线",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "8A-03",
            "name": "反比例函数",
            "concept": "y=k/x(k≠0)的图象是双曲线",
            "prerequisite": "8A-02",
            "extends": "8A-04 二次方程",
            "visualStrategy": "双曲线绘制",
            "visualType": "numberLine",
            "coreLiteracy": "函数思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8A-04",
            "name": "一元二次方程",
            "concept": "ax²+bx+c=0(a≠0)，求根公式x=(-b±√(b²-4ac))/(2a)",
            "prerequisite": "8A-03",
            "extends": "8A-05 根的判别式",
            "visualStrategy": "抛物线与x轴",
            "visualType": "numberLine",
            "coreLiteracy": "方程思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8A-05",
            "name": "根的判别式",
            "concept": "Δ=b²-4ac决定根的个数：Δ>0两个实根，Δ=0一个实根，Δ<0无实根",
            "prerequisite": "8A-04",
            "extends": "8A-06 韦达定理",
            "visualStrategy": "判别式分析",
            "visualType": "numberLine",
            "coreLiteracy": "分类思想",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8A-06",
            "name": "韦达定理",
            "concept": "x₁+x₂=-b/a，x₁·x₂=c/a",
            "prerequisite": "8A-05",
            "extends": "8A-07 一元二次不等式",
            "visualStrategy": "根与系数",
            "visualType": "numberLine",
            "coreLiteracy": "方程思想",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8A-07",
            "name": "一元二次不等式",
            "concept": "ax²+bx+c>0(a>0)的解集在两根之外",
            "prerequisite": "8A-06",
            "extends": "8A-08 相似三角形",
            "visualStrategy": "数轴区间",
            "visualType": "numberLine",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8A-08",
            "name": "相似三角形",
            "concept": "对应角相等、对应边成比例的两个三角形相似",
            "prerequisite": "7B-02",
            "extends": "8A-09 相似多边形",
            "visualStrategy": "缩放对比",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8A-09",
            "name": "相似多边形",
            "concept": "对应角相等、对应边成比例的多边形",
            "prerequisite": "8A-08",
            "extends": "8A-10 位似变换",
            "visualStrategy": "缩放演示",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8A-10",
            "name": "位似变换",
            "concept": "以某点为中心按比例放大或缩小的变换",
            "prerequisite": "8A-09",
            "extends": "8A-11 圆的基本性质",
            "visualStrategy": "中心缩放",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8A-11",
            "name": "圆的基本性质",
            "concept": "同圆或等圆的半径相等，直径是最长的弦",
            "prerequisite": "7B-16",
            "extends": "8A-12 点与圆的位置关系",
            "visualStrategy": "圆规作图",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 2,
            "isKeyTopic": true
        },
        {
            "id": "8A-12",
            "name": "点与圆的位置关系",
            "concept": "点在圆外/圆上/圆内，取决于点到圆心距离与半径的关系",
            "prerequisite": "8A-11",
            "extends": "8A-13 直线与圆的位置关系",
            "visualStrategy": "距离比较",
            "visualType": "geometry",
            "coreLiteracy": "分类思想",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8A-13",
            "name": "直线与圆的位置关系",
            "concept": "相离(距离>半径)、相切(距离=半径)、相交(距离<半径)",
            "prerequisite": "8A-12",
            "extends": "8A-14 切线的性质",
            "visualStrategy": "距离分析",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8A-14",
            "name": "切线的性质",
            "concept": "圆的切线垂直于过切点的半径",
            "prerequisite": "8A-13",
            "extends": "8A-15 弧长与扇形面积",
            "visualStrategy": "切线作图",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8A-15",
            "name": "弧长与扇形面积",
            "concept": "弧长l=nπr/180，扇形面积S=nπr²/360",
            "prerequisite": "8A-14",
            "extends": "8A-16 圆周角定理",
            "visualStrategy": "扇形展开",
            "visualType": "geometry",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8A-16",
            "name": "圆周角定理",
            "concept": "同弧所对的圆周角等于圆心角的一半",
            "prerequisite": "8A-15",
            "extends": "8A-17 圆内接四边形",
            "visualStrategy": "角度测量",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8A-17",
            "name": "圆内接四边形",
            "concept": "圆内接四边形对角互补",
            "prerequisite": "8A-16",
            "extends": "9A-01 二次函数",
            "visualStrategy": "内接四边形",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8A-18",
            "name": "直角三角形斜边高",
            "concept": "斜边上的高=两直角边乘积÷斜边",
            "prerequisite": "8A-01",
            "extends": "8A-08 相似三角形",
            "visualStrategy": "面积法",
            "visualType": "geometry",
            "coreLiteracy": "运算能力",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8A-19",
            "name": "比例与比例线段",
            "concept": "平行线分线段成比例定理",
            "prerequisite": "7B-19 比例线段与平行线",
            "extends": "8B-01 相似三角形",
            "visualStrategy": "平行线截线",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8A-20",
            "name": "黄金分割",
            "concept": "把一条线段分成两部分，较大部分是全长与较小部分的比例中项",
            "prerequisite": "8A-19 比例与比例线段",
            "extends": "8B-01 相似三角形",
            "visualStrategy": "黄金比例",
            "visualType": "barModel",
            "coreLiteracy": "数学文化",
            "difficulty": 3,
            "isKeyTopic": false
        },
        {
            "id": "8A-21",
            "name": "一次方程组的应用",
            "concept": "用二元一次方程组解决实际问题",
            "prerequisite": "8A-02 二元一次方程组",
            "extends": "8B-01 一次函数",
            "visualStrategy": "方程建模",
            "visualType": "numberLine",
            "coreLiteracy": "模型思想",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8A-22",
            "name": "勾股定理逆定理",
            "concept": "如果三角形三边满足a²+b²=c²，则该三角形是直角三角形",
            "prerequisite": "8A-01 二次根式",
            "extends": "8B-01 直角三角形综合",
            "visualStrategy": "面积验证",
            "visualType": "geometry",
            "coreLiteracy": "推理意识",
            "difficulty": 3,
            "isKeyTopic": true
        },
        {
            "id": "8A-23",
            "name": "统计图表的选择与应用",
            "concept": "根据数据特点选择合适的统计图表",
            "prerequisite": "7A-14 统计图表",
            "extends": "8B-01 数据的波动",
            "visualStrategy": "图表对比",
            "visualType": "barModel",
            "coreLiteracy": "数据分析",
            "difficulty": 2,
            "isKeyTopic": false
        },
        {
            "id": "8A-24",
            "name": "几何变换综合",
            "concept": "平移、旋转、对称的综合应用",
            "prerequisite": "7B-13 图形的平移",
            "extends": "8B-01 图形的相似",
            "visualStrategy": "变换演示",
            "visualType": "geometry",
            "coreLiteracy": "几何直观",
            "difficulty": 3,
            "isKeyTopic": true
        }
    ],
    "units": [
        {
            "name": "二次根式",
            "level": "current",
            "children": [
                {
                    "name": "二次根式概念",
                    "level": "done"
                },
                {
                    "name": "二次根式运算",
                    "level": "current"
                },
                {
                    "name": "最简二次根式",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "勾股定理",
            "level": "locked",
            "children": [
                {
                    "name": "勾股定理发现",
                    "level": "locked"
                },
                {
                    "name": "勾股定理应用",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "实数",
            "level": "locked",
            "children": [
                {
                    "name": "无理数",
                    "level": "locked"
                },
                {
                    "name": "实数运算",
                    "level": "locked"
                }
            ]
        },
        {
            "name": "全等三角形",
            "level": "locked",
            "children": [
                {
                    "name": "全等判定",
                    "level": "locked"
                },
                {
                    "name": "性质应用",
                    "level": "locked"
                }
            ]
        }
    ],
    "problems": [
        {
            "scene": "小明想计算一个直角三角形斜边的长度，已知两条直角边分别是3厘米和4厘米。",
            "question": "斜边长度是多少厘米？",
            "formula": "sqrt(3^2+4^2) = ?",
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
                    ],
                    "rightAngle": true
                }
            },
            "knowledge": "勾股定理",
            "difficulty": 2,
            "hint": "斜边^2=直角边1^2+直角边2^2",
            "variants": [
                {
                    "question": "直角边为5和12，斜边长？",
                    "formula": "sqrt(5^2+12^2)",
                    "answer": 13,
                    "hint": "勾股数5-12-13"
                },
                {
                    "question": "斜边13，一直角边5，另一直角边？",
                    "formula": "sqrt(13^2-5^2)",
                    "answer": 12,
                    "hint": "反用勾股定理"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "斜边的长度",
                        "两条直角边的长度",
                        "三角形面积",
                        "直角的度数"
                    ],
                    "answer": "斜边的长度",
                    "explain": "已知两直角边3厘米、4厘米，求斜边"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "直角边3厘米、4厘米，有一个直角",
                        "斜边已经知道",
                        "三角形是等腰的",
                        "只给了面积"
                    ],
                    "answer": "直角边3厘米、4厘米，有一个直角",
                    "explain": "两条直角边3厘米和4厘米，夹角是直角"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "勾股定理：√(3²+4²)=√25=5",
                        "3+4=7",
                        "3×4÷2=6",
                        "√(3+4)"
                    ],
                    "answer": "勾股定理：√(3²+4²)=√25=5",
                    "explain": "斜边²=3²+4²=9+16=25，斜边=√25=5"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形两条直角边3、4，斜边待求",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "斜边²=3²+4²=25，斜边=5",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "勾股定理：直角三角形斜边²=两直角边平方和",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个长方体箱子长8分米、宽6分米、高2分米。小红想知道最长的木棍能放进箱子里多长。",
            "question": "最长木棍多少分米？",
            "formula": "sqrt(8^2+6^2+2^2) ≈ ?",
            "answer": 10.2,
            "choices": [
                9,
                10,
                10.2,
                11
            ],
            "visualType": "numberBond",
            "visualData": {
                "total": 104,
                "parts": [
                    {
                        "val": 64,
                        "color": "teal",
                        "label": "长²"
                    },
                    {
                        "val": 36,
                        "color": "yellow",
                        "label": "宽²"
                    },
                    {
                        "val": 4,
                        "color": "coral",
                        "label": "高²"
                    }
                ]
            },
            "knowledge": "空间勾股定理",
            "difficulty": 3,
            "hint": "先算底面对角线再算空间对角线",
            "variants": [
                {
                    "question": "长方体长6宽8高12，体对角线？",
                    "formula": "sqrt(6^2+8^2+12^2)",
                    "answer": 15,
                    "hint": "逐步计算"
                },
                {
                    "question": "正方体棱长3，体对角线？",
                    "formula": "sqrt(3^2+3^2+3^2)",
                    "answer": 5,
                    "hint": "sqrt(27)≈5.2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "能放进箱子最长木棍的长度（体对角线）",
                        "箱子的长",
                        "箱子的容积",
                        "底面对角线"
                    ],
                    "answer": "能放进箱子最长木棍的长度（体对角线）",
                    "explain": "求长方体箱子里最长木棍的长度，也就是体对角线"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "长8分米、宽6分米、高2分米",
                        "长=宽=高",
                        "箱子是正方形",
                        "只知道长和高"
                    ],
                    "answer": "长8分米、宽6分米、高2分米",
                    "explain": "长8、宽6、高2，最长的木棍沿体对角线斜着放"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "√(8²+6²+2²)=√104≈10.2",
                        "(8+6)×2=28",
                        "√(8+6+2)",
                        "(8+6+2)÷2"
                    ],
                    "answer": "√(8²+6²+2²)=√104≈10.2",
                    "explain": "体对角线=√(长²+宽²+高²)=√(64+36+4)=√104≈10.2分米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "长方体长8、宽6、高2，体对角线穿过箱子内部",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "先算底面对角线√(8²+6²)=10，再算√(10²+2²)=√104≈10.2",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "长方体体对角线 d=√(长²+宽²+高²)",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明计算sqrt(50)+sqrt(8)-sqrt(18)，想知道结果是多少。",
            "question": "sqrt(50)+sqrt(8)-sqrt(18) = ?",
            "formula": "5sqrt(2)+2sqrt(2)-3sqrt(2)=4sqrt(2)",
            "answer": "4sqrt(2)",
            "choices": [
                "4sqrt(2)",
                "sqrt(2)",
                "3sqrt(2)",
                "5sqrt(2)"
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 4,
                "parts": [
                    {
                        "label": "sqrt(50)",
                        "val": 5,
                        "color": "#00A896"
                    },
                    {
                        "label": "sqrt(8)",
                        "val": 2,
                        "color": "#F5B800"
                    },
                    {
                        "label": "sqrt(18)",
                        "val": -3,
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "二次根式运算",
            "difficulty": 3,
            "hint": "先化简再合并",
            "variants": [
                {
                    "question": "sqrt(12)+sqrt(27)-sqrt(3)=?",
                    "formula": "2sqrt(3)+3sqrt(3)-sqrt(3)=4sqrt(3)",
                    "answer": 4,
                    "hint": "化简后合并"
                },
                {
                    "question": "sqrt(8)*sqrt(2)=?",
                    "formula": "sqrt(16)=4",
                    "answer": 4,
                    "hint": "先乘再开方"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "化简合并后的结果",
                        "三个根式各自的值",
                        "每个根号里的数",
                        "根号的个数"
                    ],
                    "answer": "化简合并后的结果",
                    "explain": "把√50+√8−√18三个根式化简后合并成一项"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "√50=5√2、√8=2√2、√18=3√2",
                        "三个数直接相加",
                        "√50≈7√2",
                        "根号内是50、8、18"
                    ],
                    "answer": "√50=5√2、√8=2√2、√18=3√2",
                    "explain": "50=25×2、8=4×2、18=9×2，都含有√2"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "5√2+2√2−3√2=(5+2−3)√2=4√2",
                        "5+2+3=10",
                        "(50+8−18)",
                        "(5+2−3)×50"
                    ],
                    "answer": "5√2+2√2−3√2=(5+2−3)√2=4√2",
                    "explain": "同类根式合并：系数加减、√2不变，5+2−3=4"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "√50、√8、√18都写成√2的形式",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "√50=5√2、√8=2√2、√18=3√2，合并得4√2",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "二次根式加减：先化成最简根式，再合并同类根式",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个等腰三角形底边长为10厘米，腰长为13厘米。小明想算出底边上的高。",
            "question": "底边上的高是多少厘米？",
            "formula": "sqrt(13^2-5^2) = ?",
            "answer": 12,
            "choices": [
                11,
                12,
                13,
                10
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 10,
                    "side": 13
                }
            },
            "knowledge": "勾股定理应用",
            "difficulty": 3,
            "hint": "底边一半是5，用勾股定理求高",
            "variants": [
                {
                    "question": "等腰三角形腰15，底边18，底边上的高？",
                    "formula": "sqrt(15^2-9^2)",
                    "answer": 12,
                    "hint": "底边一半=9"
                },
                {
                    "question": "等腰三角形腰10，底边12，高？",
                    "formula": "sqrt(10^2-6^2)",
                    "answer": 8,
                    "hint": "底边一半=6"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "底边上的高",
                        "底边的一半",
                        "腰的长度",
                        "三角形面积"
                    ],
                    "answer": "底边上的高",
                    "explain": "已知等腰三角形底10厘米、腰13厘米，求底边上的高"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "底10厘米、腰13厘米，底边一半是5厘米",
                        "底=高",
                        "腰是高的2倍",
                        "只知道底"
                    ],
                    "answer": "底10厘米、腰13厘米，底边一半是5厘米",
                    "explain": "等腰三角形底边10厘米，一半是5厘米；腰13厘米是斜边"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "√(13²−5²)=√144=12",
                        "13−5=8",
                        "2×(13−10)=6",
                        "√(13²+5²)"
                    ],
                    "answer": "√(13²−5²)=√144=12",
                    "explain": "底边上的高垂直平分底边：h²=13²−5²=169−25=144，h=12"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "等腰三角形底边10、腰13，高把底边分成两个5",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "高²=腰²−半底²=13²−5²=144，高=12",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "等腰三角形底边上的高垂直平分底边，用勾股定理求高",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "比较sqrt(15)和3.9的大小，小明想知道哪个更大。",
            "question": "哪个更大？",
            "formula": "3.9^2=15.21 > 15",
            "answer": 1,
            "choices": [
                0,
                1,
                2,
                3
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 3,
                "end": 4,
                "points": [
                    {
                        "pos": 3.873,
                        "label": "sqrt(15)",
                        "color": "#00A896"
                    },
                    {
                        "pos": 3.9,
                        "label": "3.9",
                        "color": "#FB923C"
                    }
                ]
            },
            "knowledge": "实数比较",
            "difficulty": 2,
            "hint": "3.9^2=15.21>15，所以3.9>sqrt(15)",
            "variants": [
                {
                    "question": "比较sqrt(10)和3.2的大小",
                    "formula": "3.2^2=10.24>10",
                    "answer": 1,
                    "hint": "平方比较法"
                },
                {
                    "question": "比较sqrt(20)和4.5的大小",
                    "formula": "4.5^2=20.25>20",
                    "answer": 1,
                    "hint": "平方比较法"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "√15和3.9哪个更大",
                        "√15等于几",
                        "3.9的平方",
                        "两数的和"
                    ],
                    "answer": "√15和3.9哪个更大",
                    "explain": "比较√15和3.9两个数的大小"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "3.9²=15.21＞15，所以3.9更大",
                        "√15≈4",
                        "3.9＜√15",
                        "两者相等"
                    ],
                    "answer": "3.9²=15.21＞15，所以3.9更大",
                    "explain": "比大小就看3.9²和15谁大：3.9²=15.21＞15"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "3.9²=15.21＞15，所以3.9＞√15",
                        "3.9与15相减",
                        "(√15)²=15，直接比",
                        "两数都开方"
                    ],
                    "answer": "3.9²=15.21＞15，所以3.9＞√15",
                    "explain": "因为3.9²=15.21＞15，说明3.9比√15大"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上√15≈3.873在3.9的左侧",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "3.9²=15.21＞15，即3.9＞√15",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "含根号的数与小数比大小：给小数平方再和被开方数比",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一根竹竿长10米，斜靠在墙上，竹竿顶端距地面8米。小明想知道竹竿底端离墙有多远。",
            "question": "竹竿底端离墙多少米？",
            "formula": "sqrt(10^2-8^2) = ?",
            "answer": 6,
            "choices": [
                6,
                4,
                8,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        6,
                        8,
                        10
                    ],
                    "rightAngle": true
                }
            },
            "knowledge": "勾股定理应用",
            "difficulty": 2,
            "hint": "直角边=sqrt(斜边²-另一直角边²)",
            "variants": [
                {
                    "question": "斜边13，一直角边5，另一直角边？",
                    "formula": "sqrt(13^2-5^2)",
                    "answer": 12,
                    "hint": "勾股数5-12-13"
                },
                {
                    "question": "直角边6和8，斜边？",
                    "formula": "sqrt(6^2+8^2)",
                    "answer": 10,
                    "hint": "勾股数6-8-10"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "竹竿底端离墙的距离",
                        "竹竿的长度",
                        "竹竿顶端离地的高度",
                        "墙的高度"
                    ],
                    "answer": "竹竿底端离墙的距离",
                    "explain": "竹竿斜靠墙上，求底端到墙根的距离"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "竹竿10米是斜边、顶端距地面8米是直角边、有直角",
                        "竹竿底端在墙里",
                        "两条直角边都给了",
                        "竹竿长8米"
                    ],
                    "answer": "竹竿10米是斜边、顶端距地面8米是直角边、有直角",
                    "explain": "竹竿、墙、地面构成直角三角形：斜边10米、一直角边8米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "√(10²−8²)=√36=6",
                        "10−8=2",
                        "√(10²+8²)",
                        "10×2−8"
                    ],
                    "answer": "√(10²−8²)=√36=6",
                    "explain": "底端距离²=斜边²−墙高²=100−64=36，底端距离=6米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "竹竿、墙、地面构成直角三角形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "底端距离=√(10²−8²)=√36=6米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "勾股定理变式：直角边=√(斜边²−另一直角边²)",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明想测量池塘两岸A、B两点之间的距离，他在岸边找了点C，量得AC=30米，BC=40米，角C=90度。",
            "question": "池塘两岸距离AB是多少米？",
            "formula": "sqrt(30^2+40^2) = ?",
            "answer": 50,
            "choices": [
                50,
                70,
                10,
                60
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        30,
                        40,
                        50
                    ],
                    "rightAngle": true
                }
            },
            "knowledge": "勾股定理实际应用",
            "difficulty": 2,
            "hint": "AB是斜边，AB=sqrt(AC²+BC²)",
            "variants": [
                {
                    "question": "直角边6和8，斜边？",
                    "formula": "sqrt(6^2+8^2)",
                    "answer": 10,
                    "hint": "勾股数6-8-10"
                },
                {
                    "question": "直角边9和12，斜边？",
                    "formula": "sqrt(9^2+12^2)",
                    "answer": 15,
                    "hint": "勾股数9-12-15"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "A、B两点间的距离（斜边）",
                        "AC的长度",
                        "BC的长度",
                        "角C的度数"
                    ],
                    "answer": "A、B两点间的距离（斜边）",
                    "explain": "直角三角形中已知两直角边30米、40米，求斜边AB"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "AC=30米、BC=40米、角C=90°",
                        "AC=BC",
                        "角C=60°",
                        "AB边已经知道"
                    ],
                    "answer": "AC=30米、BC=40米、角C=90°",
                    "explain": "两条直角边30米和40米，夹角C是直角"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "AB=√(30²+40²)=√2500=50",
                        "30+40=70",
                        "40−30=10",
                        "√(30+40)"
                    ],
                    "answer": "AB=√(30²+40²)=√2500=50",
                    "explain": "勾股定理：AB²=30²+40²=900+1600=2500，AB=50米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形ABC、直角在C，求斜边AB",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "AB²=AC²+BC²=30²+40²=2500，AB=50",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "勾股定理：斜边²=两直角边平方和",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明化简sqrt(72)，他想知道结果是多少。",
            "question": "sqrt(72)化简结果是多少？",
            "formula": "sqrt(36*2) = 6*sqrt(2)",
            "answer": "6sqrt(2)",
            "choices": [
                "6sqrt(2)",
                "2sqrt(6)",
                "3sqrt(8)",
                "8sqrt(2)"
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6,
                "parts": [
                    {
                        "label": "sqrt(72)",
                        "val": 6,
                        "color": "#00A896"
                    },
                    {
                        "label": "sqrt(2)",
                        "val": 1,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "二次根式化简",
            "difficulty": 2,
            "hint": "把72分解为完全平方数×2",
            "variants": [
                {
                    "question": "化简sqrt(50)",
                    "formula": "sqrt(25*2)=5*sqrt(2)",
                    "answer": 5,
                    "hint": "50=25×2"
                },
                {
                    "question": "化简sqrt(27)",
                    "formula": "sqrt(9*3)=3*sqrt(3)",
                    "answer": 3,
                    "hint": "27=9×3"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "√72化简后的最简形式",
                        "72的因数",
                        "36开方的结果",
                        "√2的值"
                    ],
                    "answer": "√72化简后的最简形式",
                    "explain": "把√72化简成最简二次根式"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "72=36×2，36是完全平方数",
                        "72是质数",
                        "72=8×9",
                        "√72≈8.5不用化简"
                    ],
                    "answer": "72=36×2，36是完全平方数",
                    "explain": "72可以拆成36×2，36能开出整数6"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "√72=√36×√2=6√2",
                        "√72=72",
                        "72÷2=36",
                        "√(36+2)"
                    ],
                    "answer": "√72=√36×√2=6√2",
                    "explain": "√(36×2)=√36×√2=6×√2=6√2"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把72分解成36×2，其中36开出6",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "√72=√(36×2)=√36×√2=6√2",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "化简二次根式：把被开方数拆成完全平方数×另一数",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明计算sqrt(12)×sqrt(3)，他想知道结果是多少。",
            "question": "sqrt(12)×sqrt(3) = ?",
            "formula": "sqrt(36) = 6",
            "answer": 6,
            "choices": [
                6,
                9,
                3,
                12
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 6,
                "parts": [
                    {
                        "label": "sqrt(12)",
                        "val": 2,
                        "color": "#00A896"
                    },
                    {
                        "label": "sqrt(3)",
                        "val": 3,
                        "color": "#F5B800"
                    }
                ]
            },
            "knowledge": "二次根式乘法",
            "difficulty": 2,
            "hint": "√a×√b=√(ab)",
            "variants": [
                {
                    "question": "sqrt(8)×sqrt(2)=?",
                    "formula": "sqrt(16)=4",
                    "answer": 4,
                    "hint": "8×2=16"
                },
                {
                    "question": "sqrt(5)×sqrt(20)=?",
                    "formula": "sqrt(100)=10",
                    "answer": 10,
                    "hint": "5×20=100"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "√12×√3的结果",
                        "两个根式各自的值",
                        "12和3的积",
                        "根号的个数"
                    ],
                    "answer": "√12×√3的结果",
                    "explain": "计算两个二次根式相乘的结果"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "12×3=36，√a×√b=√(a×b)",
                        "12和3互质",
                        "√12=√3",
                        "两数相加为15"
                    ],
                    "answer": "12×3=36，√a×√b=√(a×b)",
                    "explain": "根式乘法可以合到一个根号里：√12×√3=√(12×3)"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "√(12×3)=√36=6",
                        "12+3=15",
                        "3×√12=6√3",
                        "√(12+3)"
                    ],
                    "answer": "√(12×3)=√36=6",
                    "explain": "12×3=36，√36=6"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "两个根式合进一个根号：12×3=36",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "√12×√3=√36=6",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "二次根式乘法：√a×√b=√(ab)",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个直角三角形的两条直角边分别是5厘米和12厘米。小明想算出斜边上的高。",
            "question": "斜边上的高是多少厘米？",
            "formula": "h=5*12/13",
            "answer": "60/13",
            "choices": [
                "60/13",
                "30/13",
                "13/5",
                "65/12"
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        5,
                        12,
                        13
                    ],
                    "rightAngle": true,
                    "altitude": true
                }
            },
            "knowledge": "直角三角形斜边高",
            "difficulty": 3,
            "hint": "先用勾股定理求斜边，再用面积法求高",
            "variants": [
                {
                    "question": "直角边6和8，斜边上的高？",
                    "formula": "h=6*8/10",
                    "answer": 4.8,
                    "hint": "斜边=10，高=4.8"
                },
                {
                    "question": "直角边9和12，斜边上的高？",
                    "formula": "h=9*12/15",
                    "answer": 7.2,
                    "hint": "斜边=15，高=7.2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "斜边上的高",
                        "斜边的长度",
                        "三角形的面积",
                        "两直角边的长"
                    ],
                    "answer": "斜边上的高",
                    "explain": "已知直角边5、12，求斜边上的高"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "直角边5和12，斜边=√(5²+12²)=13",
                        "两条边相等",
                        "斜边已经知道",
                        "面积已经给出"
                    ],
                    "answer": "直角边5和12，斜边=√(5²+12²)=13",
                    "explain": "斜边13；面积=5×12÷2=30"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "面积法：高=2×30÷13=60/13",
                        "5+12=17",
                        "5×12=60",
                        "2×13÷5"
                    ],
                    "answer": "面积法：高=2×30÷13=60/13",
                    "explain": "面积=直角边积÷2=斜边×高÷2，所以高=60/13"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形斜边13及斜边上的高",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积=5×12÷2=30=13×高÷2，高=60/13",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "斜边上的高=两直角边乘积÷斜边（面积法）",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用勾股定理测量池塘宽度，他在岸边选取一点C，测量AC=8米，BC=6米，角C=90度。他想算出池塘的宽度AB。",
            "question": "池塘的宽度AB是多少米？",
            "formula": "AB=sqrt(8²+6²)=sqrt(100)=10",
            "answer": 10,
            "choices": [
                10,
                14,
                8,
                6
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "a": 8,
                    "b": 6,
                    "c": 10
                }
            },
            "knowledge": "勾股定理应用",
            "difficulty": 2,
            "hint": "直角三角形斜边=√(a²+b²)",
            "variants": [
                {
                    "question": "直角边5和12，斜边多少？",
                    "formula": "sqrt(25+144)=13",
                    "answer": 13,
                    "hint": "勾股数"
                },
                {
                    "question": "斜边13，一直角边5，另一直角边多少？",
                    "formula": "sqrt(169-25)=12",
                    "answer": 12,
                    "hint": "勾股定理逆用"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "池塘宽度AB（斜边）",
                        "AC的长度",
                        "BC的长度",
                        "池塘的面积"
                    ],
                    "answer": "池塘宽度AB（斜边）",
                    "explain": "直角三角形已知两直角边8米、6米，求斜边AB"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "AC=8米、BC=6米、角C=90°",
                        "AC=BC=8",
                        "角C=45°",
                        "AB边已经知道"
                    ],
                    "answer": "AC=8米、BC=6米、角C=90°",
                    "explain": "直角边8米和6米，夹角C是直角"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "AB=√(8²+6²)=√100=10",
                        "8+6=14",
                        "√(8²−6²)=√28",
                        "(8+6)×2"
                    ],
                    "answer": "AB=√(8²+6²)=√100=10",
                    "explain": "AB²=8²+6²=64+36=100，AB=10米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形直角在C，求斜边AB",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "AB=√(8²+6²)=√100=10米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "勾股定理：斜边²=两直角边平方和",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校测量旗杆高度，小明用影子法：旗杆影长12米，同时1.5米竹竿影长2米。他想算出旗杆的高度。",
            "question": "旗杆的高度是多少米？",
            "formula": "旗杆高/12=1.5/2, 旗杆高=9",
            "answer": 9,
            "choices": [
                9,
                12,
                8,
                10
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "height": 9,
                    "base": 12
                }
            },
            "knowledge": "相似三角形应用",
            "difficulty": 2,
            "hint": "同一时刻，物高与影长成正比",
            "variants": [
                {
                    "question": "树影长8米，1米标杆影长0.5米，树高多少？",
                    "formula": "树高/8=1/0.5, 树高=16",
                    "answer": 16,
                    "hint": "比例关系"
                },
                {
                    "question": "建筑物影长30米，1.6米人影长2米，建筑物多高？",
                    "formula": "建高/30=1.6/2, 建高=24",
                    "answer": 24,
                    "hint": "物高与影长成正比"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "旗杆的高度",
                        "旗杆的影长",
                        "竹竿的高度",
                        "竹竿的影长"
                    ],
                    "answer": "旗杆的高度",
                    "explain": "同一时刻用物高与影长成正比求旗杆高"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "旗杆影长12米、竹竿影长2米、竹竿高1.5米",
                        "旗杆影长=竹竿影长",
                        "竹竿高12米",
                        "只给旗杆影长"
                    ],
                    "answer": "旗杆影长12米、竹竿影长2米、竹竿高1.5米",
                    "explain": "同一时刻：竹竿1.5米影子2米，旗杆影子12米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "旗杆高=1.5×12÷2=9米",
                        "1.5×2=3",
                        "12+1.5−2",
                        "1.5×12=18"
                    ],
                    "answer": "旗杆高=1.5×12÷2=9米",
                    "explain": "旗杆高/12=1.5/2，旗杆高=1.5×12÷2=9米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "竹竿(1.5米/影2米)与旗杆(影12米)是两个相似三角形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "旗杆高/12=1.5/2，旗杆高=9米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "同一时刻物高与影长成正比，比例式交叉相乘求高",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明用比例线段测量河的宽度，他在岸边选取两点A、B，在河对岸选取一点C，测量AB=40米，角A=60度，角B=45度。他想算出河宽。",
            "question": "河的宽度大约是多少米？",
            "formula": "河宽=AB×tan60°×tan45°/(tan60°+tan45°)≈24.6",
            "answer": 25,
            "choices": [
                25,
                30,
                20,
                35
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 40,
                    "angleA": 60,
                    "angleB": 45
                }
            },
            "knowledge": "解直角三角形",
            "difficulty": 3,
            "hint": "利用三角函数求高",
            "variants": [
                {
                    "question": "河宽30米，两岸视角分别为30度和60度，两岸距离多少？",
                    "formula": "30/tan30+30/tan60≈52",
                    "answer": 52,
                    "hint": "分别求两段"
                },
                {
                    "question": "山顶视角30度，后退100米后视角20度，山高多少？",
                    "formula": "h=100*tan30*tan20/(tan30-tan20)",
                    "answer": 98.5,
                    "hint": "列方程求解"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "河的宽度",
                        "AB的长度",
                        "角A的度数",
                        "tan60°的值"
                    ],
                    "answer": "河的宽度",
                    "explain": "用底边AB和两个角度推算河的宽度"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "AB=40米、角A=60°、角B=45°",
                        "河宽=AB",
                        "角A=角B",
                        "三条边都已知"
                    ],
                    "answer": "AB=40米、角A=60°、角B=45°",
                    "explain": "底边AB=40米，∠A=60°、∠B=45°，河宽是对应的高"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "河宽=40×√3×1÷(√3+1)≈24.6，约25米",
                        "40÷2=20",
                        "40+60−45",
                        "40×tan45°=40"
                    ],
                    "answer": "河宽=40×√3×1÷(√3+1)≈24.6，约25米",
                    "explain": "设河宽为h：h=AB×tan60°×tan45°÷(tan60°+tan45°)≈24.6，四舍五入25米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "A、B在岸上、C在河对岸，河宽是三角形的高",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "河宽=40×√3×1÷(√3+1)≈24.6米，约为25米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "用三角函数测不可到达的距离：高=底×两角正切积÷(正切和)",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校要在一块三角形空地上种植草坪，已知三边长分别为13米、14米、15米。校长想知道这块地的面积。",
            "question": "三角形空地的面积是多少平方米？",
            "formula": "半周长p=(13+14+15)/2=21, S=√(21×8×7×6)=84",
            "answer": 84,
            "choices": [
                84,
                42,
                91,
                78
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "a": 13,
                    "b": 14,
                    "c": 15
                }
            },
            "knowledge": "海伦公式",
            "difficulty": 3,
            "hint": "先求半周长，再用海伦公式",
            "variants": [
                {
                    "question": "三角形三边6、8、10，面积多少？",
                    "formula": "p=12, S=√(12×6×4×2)=24",
                    "answer": 24,
                    "hint": "直角三角形"
                },
                {
                    "question": "等边三角形边长4，面积多少？",
                    "formula": "p=6, S=√(6×2×2×2)=4√3",
                    "answer": 7,
                    "hint": "代入公式"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "三角形空地的面积",
                        "三边的长度",
                        "半周长",
                        "草坪的周长"
                    ],
                    "answer": "三角形空地的面积",
                    "explain": "三条边都已知，求三角形面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "三边13米、14米、15米",
                        "只知道两条边",
                        "三角形是直角三角形",
                        "三边相等"
                    ],
                    "answer": "三边13米、14米、15米",
                    "explain": "a=13、b=14、c=15"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "半周长p=21，S=√(21×8×7×6)=84",
                        "13×14÷2=91",
                        "15×14÷2=105",
                        "(13+14+15)÷2=21"
                    ],
                    "answer": "半周长p=21，S=√(21×8×7×6)=84",
                    "explain": "p=(13+14+15)÷2=21；S=√(p(p−a)(p−b)(p−c))=√(21×8×7×6)=√7056=84"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "三边13、14、15的三角形",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "p=21，面积=√(21×8×7×6)=84平方米",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "海伦公式：p=(a+b+c)/2，面积=√(p(p−a)(p−b)(p−c))",
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
                        "旗杆的高度",
                        "小明的身高",
                        "影子的长度",
                        "人与旗杆的距离"
                    ],
                    "answer": "旗杆的高度",
                    "explain": "用身高与影长的比例换算旗杆高度"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "身高1.6米、人影2米、旗杆影15米",
                        "旗杆高15米",
                        "影子一样长",
                        "只给旗杆影长"
                    ],
                    "answer": "身高1.6米、人影2米、旗杆影15米",
                    "explain": "同一时刻物高与影长成正比：人1.6米对影2米，旗杆影15米"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "旗杆高=1.6×15÷2=12米",
                        "1.6+15=16.6",
                        "15×2=30",
                        "1.6×2=3.2"
                    ],
                    "answer": "旗杆高=1.6×15÷2=12米",
                    "explain": "旗杆高/15=1.6/2，旗杆高=1.6×15÷2=12米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "人(1.6米/影2米)与旗杆(影15米)构成相似三角形",
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
                    "text": "同一时刻物高与影长成正比，用比例式交叉相乘",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校测量一个梯形花坛的面积，上底6米，下底10米，高4米。校长想知道花坛的面积。",
            "question": "梯形花坛的面积是多少平方米？",
            "formula": "(6+10)*4/2=32",
            "answer": 32,
            "choices": [
                32,
                64,
                24,
                40
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "trapezoid",
                "params": {
                    "a": 6,
                    "b": 10,
                    "h": 4
                }
            },
            "knowledge": "梯形面积",
            "difficulty": 2,
            "hint": "梯形面积=(上底+下底)×高÷2",
            "variants": [
                {
                    "question": "平行四边形底8厘米，高5厘米，面积是多少？",
                    "formula": "8*5=40",
                    "answer": 40,
                    "hint": "平行四边形面积=底×高"
                },
                {
                    "question": "三角形底12分米，高8分米，面积是多少？",
                    "formula": "12*8/2=48",
                    "answer": 48,
                    "hint": "三角形面积=底×高÷2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "梯形花坛的面积",
                        "上底的长度",
                        "花坛的周长",
                        "花坛的高"
                    ],
                    "answer": "梯形花坛的面积",
                    "explain": "已知上底、下底、高，求梯形面积"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "上底6米、下底10米、高4米",
                        "上底=下底",
                        "梯形是等腰的",
                        "只给了高"
                    ],
                    "answer": "上底6米、下底10米、高4米",
                    "explain": "上底=6、下底=10、高=4"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "(6+10)×4÷2=32",
                        "6×10×4=240",
                        "(6+10)×4=64",
                        "6+10+4=20"
                    ],
                    "answer": "(6+10)×4÷2=32",
                    "explain": "面积=(上底+下底)×高÷2=16×4÷2=32平方米"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "梯形花坛上底6、下底10、高4",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "面积=(6+10)×4÷2=32平方米",
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
            "scene": "小明用方程解决几何问题：一个长方形的长比宽多4厘米，面积是60平方厘米。他想求出长方形的长和宽。",
            "question": "长方形的长和宽各是多少厘米？",
            "formula": "宽=x, 长=x+4, x(x+4)=60, x=6",
            "answer": 6,
            "choices": [
                6,
                10,
                8,
                4
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 10,
                    "width": 6
                }
            },
            "knowledge": "方程与几何",
            "difficulty": 3,
            "hint": "设宽为x，长为x+4，面积=长×宽",
            "variants": [
                {
                    "question": "一个正方形边长增加2厘米，面积增加20平方厘米，原边长多少？",
                    "formula": "(x+2)²-x²=20, x=4",
                    "answer": 4,
                    "hint": "列方程求解"
                },
                {
                    "question": "三角形底比高多2厘米，面积是24平方厘米，底和高各多少？",
                    "formula": "h(h+2)/2=24, h=6",
                    "answer": 6,
                    "hint": "注意底比高多2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "长方形的长和宽",
                        "长方形的面积",
                        "长比宽多多少",
                        "长方形的周长"
                    ],
                    "answer": "长方形的长和宽",
                    "explain": "已知长比宽多4厘米、面积60平方厘米，求长和宽"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "面积60平方厘米，长=宽+4厘米",
                        "长=宽",
                        "宽是长的4倍",
                        "只给了周长"
                    ],
                    "answer": "面积60平方厘米，长=宽+4厘米",
                    "explain": "设宽=x，长=x+4；面积=长×宽=60"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "设宽=x：x(x+4)=60，解得x=6",
                        "(x+4)×2=60",
                        "60÷4=15",
                        "x²+4x=60直接用平方"
                    ],
                    "answer": "设宽=x：x(x+4)=60，解得x=6",
                    "explain": "x(x+4)=60 → x²+4x−60=0 → (x−6)(x+10)=0，x=6（宽），长=10"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "长方形长10厘米、宽6厘米、面积60平方厘米",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "设宽=x、长=x+4，x(x+4)=60，x=6",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "几何问题设未知数列方程：面积=长×宽可化为一元二次方程",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "学校调查学生最喜欢的运动项目，篮球25人，足球20人，乒乓球15人，其他10人。校长想知道喜欢篮球的占全班的百分比。",
            "question": "喜欢篮球的占全班人数的百分之几？",
            "formula": "25/(25+20+15+10)*100%=41.7%≈42%",
            "answer": 42,
            "choices": [
                42,
                35,
                50,
                30
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 70,
                "parts": [
                    {
                        "label": "篮球",
                        "val": 25,
                        "color": "#00A896"
                    },
                    {
                        "label": "足球",
                        "val": 20,
                        "color": "#F5B800"
                    },
                    {
                        "label": "乒乓球",
                        "val": 15,
                        "color": "#FB923C"
                    },
                    {
                        "label": "其他",
                        "val": 10,
                        "color": "#E8A0BF"
                    }
                ]
            },
            "knowledge": "统计与百分比",
            "difficulty": 2,
            "hint": "百分比=部分÷总数×100%",
            "variants": [
                {
                    "question": "班级50人，喜欢语文30人，喜欢数学25人，两科都喜欢的10人，只喜欢语文的有多少人？",
                    "formula": "30-10=20",
                    "answer": 20,
                    "hint": "用集合思想"
                },
                {
                    "question": "果园有苹果树100棵，梨树80棵，桃树60棵，苹果树占总数的百分比？",
                    "formula": "100/(100+80+60)*100%=40%",
                    "answer": 40,
                    "hint": "先求总数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "喜欢篮球的占全班的百分比",
                        "喜欢篮球的人数",
                        "全班总人数",
                        "各项目的人数"
                    ],
                    "answer": "喜欢篮球的占全班的百分比",
                    "explain": "求喜欢篮球的人数占全班人数的百分比"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "篮球25人，全班25+20+15+10=70人",
                        "篮球人数最多",
                        "全班只有25人",
                        "没有其他项目"
                    ],
                    "answer": "篮球25人，全班25+20+15+10=70人",
                    "explain": "篮球25人，全班共70人"
                },
                {
                    "q": "🧩 用什么方法计算？",
                    "choices": [
                        "25÷70×100%≈42%",
                        "25÷100=25%",
                        "70÷25",
                        "25+70"
                    ],
                    "answer": "25÷70×100%≈42%",
                    "explain": "百分比=部分÷总数×100%=25÷70×100%≈41.7%，约42%"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "全班70人，喜欢篮球的25人",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "篮球占比=25÷70×100%≈42%",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "百分比=部分÷总数×100%",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个直角三角形两条直角边分别是3厘米和4厘米。小明想算斜边的长度。",
            "question": "斜边长度是多少厘米？",
            "formula": "sqrt(3^2+4^2)=sqrt(25)=5",
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
            "knowledge": "勾股定理",
            "difficulty": 2,
            "hint": "斜边^2=两直角边平方和",
            "variants": [
                {
                    "question": "直角边6和8，斜边？",
                    "formula": "sqrt(36+64)=10",
                    "answer": 10,
                    "hint": "6-8-10"
                },
                {
                    "question": "直角边5和12，斜边？",
                    "formula": "sqrt(25+144)=13",
                    "answer": 13,
                    "hint": "5-12-13"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "直角三角形斜边的长度",
                        "两条直角边各自的长",
                        "三角形三条边的总和",
                        "三角形的面积"
                    ],
                    "answer": "直角三角形斜边的长度",
                    "explain": "场景给出两条直角边3厘米和4厘米，问的是对着直角的那个最长边——斜边有多长。目标是算出斜边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条直角边分别是3厘米和4厘米",
                        "两条直角边分别是3厘米和5厘米",
                        "三条边都已经给出",
                        "斜边是6厘米"
                    ],
                    "answer": "两条直角边分别是3厘米和4厘米",
                    "explain": "关键信息是两条直角边为3厘米和4厘米，它们成直角；斜边未知，正好用勾股定理来求。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "斜边²=3²+4²=25，斜边=5",
                        "斜边=3+4=7",
                        "斜边=4²−3²=16−9=7",
                        "斜边=3×4=12"
                    ],
                    "answer": "斜边²=3²+4²=25，斜边=5",
                    "explain": "勾股定理 c²=a²+b²：代入 a=3、b=4，得 c²=9+16=25，开方 c=5。斜边是5厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形里两条直角边（3cm、4cm）在直角顶点处相交成90°。斜边是连接两直角边端点的那条最长的边，正对着直角，图示勾边、股边与斜边的相对位置一目了然。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "勾股定理说直角边平方和等于斜边平方，即 c²=a²+b²。把3、4代入：c²=9+16=25，取正根 c=5。所以斜边长5厘米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "已知两条直角边求斜边，一律用 c=√(a²+b²)。反过来已知斜边和一条直角边，则另一直角边 a=√(c²−b²)。这条规律适用于任意直角三角形。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "直角三角形两直角边分别为6厘米和8厘米。小红想求斜边。",
            "question": "斜边是多少厘米？",
            "formula": "sqrt(6^2+8^2)=10",
            "answer": 10,
            "choices": [
                10,
                9,
                14,
                12
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        6,
                        8,
                        10
                    ]
                }
            },
            "knowledge": "勾股定理",
            "difficulty": 2,
            "hint": "常用勾股数 6-8-10",
            "variants": [
                {
                    "question": "直角边9和12，斜边？",
                    "formula": "sqrt(81+144)=15",
                    "answer": 15,
                    "hint": "3倍3-4-5"
                },
                {
                    "question": "直角边8和15，斜边？",
                    "formula": "sqrt(64+225)=17",
                    "answer": 17,
                    "hint": "8-15-17"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "直角三角形的斜边长度",
                        "直角边6厘米的长",
                        "直角边8厘米的长",
                        "三角形的面积"
                    ],
                    "answer": "直角三角形的斜边长度",
                    "explain": "两条直角边分别是6和8厘米，要求这条直角所对的斜边，即直角三角形里最长的那条边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条直角边分别是6厘米和8厘米",
                        "两条直角边分别是6厘米和10厘米",
                        "斜边已经告诉我们是10",
                        "两直角边之和为12"
                    ],
                    "answer": "两条直角边分别是6厘米和8厘米",
                    "explain": "已知两条直角边6cm、8cm，斜边未知。提示里提到的常用勾股数6-8-10可以帮助口算。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "斜边²=6²+8²=100，斜边=10",
                        "斜边=6+8=14",
                        "斜边=8²−6²=28",
                        "斜边=6×8−6=42"
                    ],
                    "answer": "斜边²=6²+8²=100，斜边=10",
                    "explain": "勾股定理 c²=a²+b²：6²+8²=36+64=100，c=√100=10。这也是常用勾股数6-8-10。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形中，6cm 和 8cm 两条直角边较短，斜边10cm 是最长的一条，横跨在直角对面。三边呈现出 6-8-10 这种整比关系。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "由勾股定理 c²=a²+b²：c²=6²+8²=36+64=100，c=√100=10。斜边长10厘米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "记住几组常用勾股数 3-4-5、6-8-10、5-12-13、8-15-17；它们的整数倍仍是勾股数，如 12-16-20。考试口算斜边时可直接套用。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "直角三角形两条直角边为5厘米和12厘米。小刚想求斜边长度。",
            "question": "斜边是多少厘米？",
            "formula": "sqrt(5^2+12^2)=13",
            "answer": 13,
            "choices": [
                13,
                12,
                17,
                10
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        5,
                        12,
                        13
                    ]
                }
            },
            "knowledge": "勾股定理",
            "difficulty": 2,
            "hint": "5-12-13 是常用勾股数",
            "variants": [
                {
                    "question": "直角边20和21，斜边？",
                    "formula": "sqrt(400+441)=29",
                    "answer": 29,
                    "hint": "20-21-29"
                },
                {
                    "question": "直角边7和24，斜边？",
                    "formula": "sqrt(49+576)=25",
                    "answer": 25,
                    "hint": "7-24-25"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "直角三角形的斜边长度",
                        "直角边5厘米的长",
                        "直角边12厘米的长",
                        "斜边上的中线长"
                    ],
                    "answer": "直角三角形的斜边长度",
                    "explain": "两条直角边是5和12厘米，要求斜边，也就是直角所对的最长边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条直角边分别是5厘米和12厘米",
                        "两条直角边分别是5厘米和13厘米",
                        "这是一条等边三角形",
                        "斜边长度已知为13"
                    ],
                    "answer": "两条直角边分别是5厘米和12厘米",
                    "explain": "关键信息是两直角边5cm、12cm，斜边未知；这是常见的 5-12-13 勾股数。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "斜边²=5²+12²=169，斜边=13",
                        "斜边=5+12=17",
                        "斜边=12+13=25",
                        "斜边=5×12−12=48"
                    ],
                    "answer": "斜边²=5²+12²=169，斜边=13",
                    "explain": "勾股定理 c²=a²+b²：25+144=169，c=√169=13。记住 5-12-13 是常用勾股数。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形两直角边5cm、12cm，一短一长差距明显，斜边13cm 是最长边。三边 5-12-13 成整数比。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "勾股定理 c²=a²+b²：5²+12²=25+144=169，c=√169=13。斜边长13厘米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "无论直角边大小，斜边 c=√(a²+b²) 恒成立。看到整数组可先好判断是否是常见勾股数，不是则老老实实代入开方。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一把梯子斜靠在墙上，梯子长13米，顶端距地面12米。小明想算梯子底端距墙多远。",
            "question": "梯子底端距墙多少米？",
            "formula": "sqrt(13^2-12^2)=sqrt(25)=5",
            "answer": 5,
            "choices": [
                5,
                8,
                10,
                25
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        5,
                        12,
                        13
                    ]
                }
            },
            "knowledge": "勾股定理应用",
            "difficulty": 3,
            "hint": "斜边^2-直角边^2=另一直角边^2",
            "variants": [
                {
                    "question": "梯子长10米，高8米，底端距墙？",
                    "formula": "sqrt(100-64)=6",
                    "answer": 6,
                    "hint": "3-4-5的2倍"
                },
                {
                    "question": "梯子长17米，高15米，底端距墙？",
                    "formula": "sqrt(289-225)=8",
                    "answer": 8,
                    "hint": "8-15-17"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "梯子底端到墙面的距离",
                        "梯子的总长度",
                        "顶端离地面的高度",
                        "墙的高度"
                    ],
                    "answer": "梯子底端到墙面的距离",
                    "explain": "梯子长13米、顶端离地12米，要求的是梯子底端离墙多远，这是直角三角形的一条直角边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "梯子长13米，顶端离地12米",
                        "梯子长13米，底端离墙12米",
                        "梯子是竖直的，没有斜度",
                        "墙高未知但等于梯子长"
                    ],
                    "answer": "梯子长13米，顶端离地12米",
                    "explain": "墙、地面、梯子构成直角三角形：梯子13m 是斜边，顶端离地12m 是直角边，底端到墙的距离是另一条直角边。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "底²=13²−12²=169−144=25，底=5",
                        "底=13−12=1",
                        "底=13+12=25",
                        "底=13×12−12=50"
                    ],
                    "answer": "底²=13²−12²=169−144=25，底=5",
                    "explain": "已知斜边与一条直角边，用 c²−b²=a²：13²−12²=169−144=25，开方得5米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "竖直的墙、水平的地面和倾斜的梯子合围成一个直角三角形。梯子13m 是斜边，墙面12m 是一条直角边，梯子底端到墙的水平距离正是我们要找的另一条直角边。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "这是勾股定理的实际应用：c²−a²=b²。b²=13²−12²=169−144=25，b=5。所以底端距墙5米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "凡是『斜靠墙面、旗杆影子、空中悬线』这类测量问题，都把实物画成直角三角形。已知斜边和一直角边，用 a=√(c²−b²) 求另一边，是测不可直接量距离的通用方法。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一架梯子长10米，梯子底端离墙6米。小红想算梯子顶端能到多高。",
            "question": "梯子顶端能达到多高？",
            "formula": "sqrt(10^2-6^2)=sqrt(64)=8",
            "answer": 8,
            "choices": [
                8,
                6,
                4,
                10
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        6,
                        8,
                        10
                    ]
                }
            },
            "knowledge": "勾股定理应用",
            "difficulty": 3,
            "hint": "斜边^2-底^2=高^2",
            "variants": [
                {
                    "question": "梯子长25米，底离墙7米，高？",
                    "formula": "sqrt(625-49)=24",
                    "answer": 24,
                    "hint": "7-24-25"
                },
                {
                    "question": "梯子长13米，底离墙5米，高？",
                    "formula": "sqrt(169-25)=12",
                    "answer": 12,
                    "hint": "5-12-13"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "梯子顶端能达到的最大高度",
                        "梯子底端离墙的距离",
                        "梯子的固定长度",
                        "墙面的宽度"
                    ],
                    "answer": "梯子顶端能达到的最大高度",
                    "explain": "梯子长10米、底端离墙6米，要求顶端能爬到多高，即竖直方向的直角边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "梯子长10米，底端离墙6米",
                        "梯子长10米，顶端离地6米",
                        "梯子水平放在地面",
                        "墙高恰好是梯子长"
                    ],
                    "answer": "梯子长10米，底端离墙6米",
                    "explain": "梯子10m 是斜边，底端离墙的水平距离6m 是一条直角边，顶端高度是另一条直角边。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "高²=10²−6²=100−36=64，高=8",
                        "高=10−6=4",
                        "高=10+6=16",
                        "高=6+10−6=10"
                    ],
                    "answer": "高²=10²−6²=100−36=64，高=8",
                    "explain": "勾股定理变式 c²−b²=h²：100−36=64，h=√64=8米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "梯子靠墙形成直角三角形：10m 是斜边，6m 是墙面底端到梯子底端的水平距离，垂直向上能达到的高度是另一边，就是所求。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "h²=c²−b²=10²−6²=100−36=64，h=8。梯子顶端最高能到8米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "同一类『已知斜边和一条直角边求另一条』的问题，公式固定为 a=√(c²−b²)。与上一题同为勾股变式，只是求的目标边不同，换数字即得。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个直角三角形斜边长15，一条直角边长9。小刚想求另一条直角边。",
            "question": "另一条直角边是多少？",
            "formula": "sqrt(15^2-9^2)=sqrt(144)=12",
            "answer": 12,
            "choices": [
                12,
                6,
                8,
                14
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        9,
                        12,
                        15
                    ]
                }
            },
            "knowledge": "勾股定理实际应用",
            "difficulty": 3,
            "hint": "斜边^2-一边^2=另一边^2",
            "variants": [
                {
                    "question": "斜边20，一边16，另一边？",
                    "formula": "sqrt(400-256)=12",
                    "answer": 12,
                    "hint": "3-4-5的4倍"
                },
                {
                    "question": "斜边26，一边10，另一边？",
                    "formula": "sqrt(676-100)=24",
                    "answer": 24,
                    "hint": "5-12-13的2倍"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "直角三角形另一条直角边",
                        "已知的那条直角边",
                        "三角形的斜边",
                        "三角形的周长"
                    ],
                    "answer": "直角三角形另一条直角边",
                    "explain": "已知斜边15和一条直角边9，要求的是另一条未给出的直角边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "斜边长15，一条直角边长9",
                        "斜边长15，两条直角边都是9",
                        "三角形三边都相等",
                        "斜边就是直角边"
                    ],
                    "answer": "斜边长15，一条直角边长9",
                    "explain": "这是 9-12-15 型三角形：斜边15，已知一直角边9，另一条待求，属于勾股数的倍数关系。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "另边²=15²−9²=225−81=144，另边=12",
                        "另边=15−9=6",
                        "另边=15−7=8",
                        "另边=15−1=14"
                    ],
                    "answer": "另边²=15²−9²=225−81=144，另边=12",
                    "explain": "用 b²=c²−a²：15²−9²=225−81=144，b=√144=12。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形里斜边15 是最长边，一条直角边9 已画，另一条直角边是图上竖直的方向，就是我们要求的边。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "斜边已知时求直角边用 b=√(c²−a²)：b²=225−81=144，b=12。9-12-15 正是 3-4-5 的三倍。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "求直角边与求斜边互为逆运算：已知斜边 c 和一条直角边 a，则 b=√(c²−a²)。熟练后可以识别常见勾股数组的缩倍、放倍来快速作答。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个长方体长3、宽4、高12。小明想求它的空间对角线（体对角线）长度。",
            "question": "体对角线长度是多少？",
            "formula": "sqrt(3^2+4^2+12^2)=13",
            "answer": 13,
            "choices": [
                13,
                12,
                15,
                19
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 13,
                "points": [
                    {
                        "pos": 5,
                        "label": "面对角线",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 13,
                        "label": "体对角线",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    5,
                    13
                ]
            },
            "knowledge": "空间勾股定理",
            "difficulty": 3,
            "hint": "体对角线^2=三边平方和",
            "variants": [
                {
                    "question": "长方体长2宽3高6，体对角线？",
                    "formula": "sqrt(4+9+36)=7",
                    "answer": 7,
                    "hint": "三边平方和开方"
                },
                {
                    "question": "长方体长6宽8高24，体对角线？",
                    "formula": "sqrt(36+64+576)=26",
                    "answer": 26,
                    "hint": "勾股数叠加"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "长方体的体对角线（空间对角线）长度",
                        "长方体的体积",
                        "长方体的表面积",
                        "长为12的那条棱的长度"
                    ],
                    "answer": "长方体的体对角线（空间对角线）长度",
                    "explain": "长方体长3、宽4、高12，求从一个顶点到对角顶点的空间对角线长度。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "长方体的长3、宽4、高12",
                        "长方体是正方体，边长3",
                        "只有底面的对角线",
                        "对角线长度直接给出"
                    ],
                    "answer": "长方体的长3、宽4、高12",
                    "explain": "关键信息是三条棱3、4、12。体对角线的平方等于三边的平方和。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "体对角线²=3²+4²+12²=9+16+144=169，体对角线=13",
                        "体对角线=3+4+12=19",
                        "体对角线=3×4×12=144",
                        "体对角线=√(3²+4²)=5"
                    ],
                    "answer": "体对角线²=3²+4²+12²=9+16+144=169，体对角线=13",
                    "explain": "空间勾股定理 d²=a²+b²+h²：9+16+144=169，d=√169=13。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "体对角线是长方体内部从一个顶点贯穿到对角顶点的线段。可先求底面对角线 √(3²+4²)=5，再过这条底面对角线与高12 构造出一个新的直角三角形。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "两次勾股：d²=(√(3²+4²))²+12²=3²+4²+12²=169，d=13。一步写成空间公式 d²=a²+b²+h² 更快。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "空间勾股定理 d=√(a²+b²+h²) 对任意长方体、房间对角线都成立。它把三维问题化成三个棱的平方和，是勾股定理向空间的推广。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红计算二次根式的和：根号9加上根号16。",
            "question": "√9 + √16 的结果是多少？",
            "formula": "sqrt(9) + sqrt(16) = 3 + 4 = 7",
            "answer": 7,
            "choices": [
                7,
                5,
                12,
                25
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 7,
                "points": [
                    {
                        "pos": 3,
                        "label": "√9",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 7,
                        "label": "和",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    3,
                    7
                ]
            },
            "knowledge": "二次根式运算",
            "difficulty": 1,
            "hint": "先开方再相加",
            "variants": [
                {
                    "question": "√25 + √9 = ?",
                    "formula": "5+3=?",
                    "answer": 8,
                    "hint": "先开方"
                },
                {
                    "question": "√36 - √4 = ?",
                    "formula": "6-2=?",
                    "answer": 4,
                    "hint": "开方后相减"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两个二次根式的和",
                        "√9 单独的值",
                        "√16 单独的值",
                        "两个根式的乘积"
                    ],
                    "answer": "两个二次根式的和",
                    "explain": "计算 √9 + √16 的结果，是把两个能开成整数的根式加起来。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "√9 和 √16 两个二次根式相加",
                        "9 和16 两个整数直接相加",
                        "两个带根号的需要合并同类根式",
                        "结果要开成根式"
                    ],
                    "answer": "√9 和 √16 两个二次根式相加",
                    "explain": "关键信息是 √9 与 √16 相加，它们都能开出整数：√9=3、√16=4。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "√9+√16=3+4=7",
                        "√9+√16=√(9+16)=√25=5",
                        "√9+√16=9+16=25",
                        "√9+√16=3×4=12"
                    ],
                    "answer": "√9+√16=3+4=7",
                    "explain": "先把每个根式开方成整数，再相加：3+4=7。注意不可把被开方数直接相加。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上 √9=3、√16=4 是各自对应的点，两数独立分别落在3和4的位置，把它们加起来得到7。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "√a+√b 一般不等于 √(a+b)。只有被开方数相同（同类根式）才能合并。这里都能开成整数，所以直接 3+4=7。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "计算二次根式加减前，先把能开方的开成整数；被开方数相同的才合并。开尽与开不尽要区分对待。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小刚计算二次根式乘法：根号8乘以根号2。",
            "question": "√8 × √2 的结果是多少？",
            "formula": "sqrt(8*2)=sqrt(16)=4",
            "answer": 4,
            "choices": [
                4,
                6,
                16,
                8
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 4,
                "points": [
                    {
                        "pos": 2,
                        "label": "√2",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 4,
                        "label": "结果",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    2,
                    4
                ]
            },
            "knowledge": "二次根式乘法",
            "difficulty": 2,
            "hint": "根号内相乘再开方",
            "variants": [
                {
                    "question": "√3 × √12 = ?",
                    "formula": "sqrt(36)=6",
                    "answer": 6,
                    "hint": "根号内相乘"
                },
                {
                    "question": "√50 × √2 = ?",
                    "formula": "sqrt(100)=10",
                    "answer": 10,
                    "hint": "凑平方数"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "两个二次根式相乘的积",
                        "√8 单独的值",
                        "√2 单独的值",
                        "两个根式的商"
                    ],
                    "answer": "两个二次根式相乘的积",
                    "explain": "计算 √8 × √2 的结果，即求两个二次根式的乘积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "√8 和 √2 两个二次根式相乘",
                        "8 和2 两个整数直接相乘",
                        "两个根号内的数相同",
                        "结果是开不尽的"
                    ],
                    "answer": "√8 和 √2 两个二次根式相乘",
                    "explain": "关键信息是 √8×√2。乘法中根号内直接相乘：8×2=16，16 是开得尽的。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "√8×√2=√(8×2)=√16=4",
                        "√8×√2=8×2=16",
                        "√8×√2=√8+√2=10",
                        "√8×√2=(8+2)²=100"
                    ],
                    "answer": "√8×√2=√(8×2)=√16=4",
                    "explain": "二次根式乘法：√a·√b=√(ab)。√(8×2)=√16=4。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "√8≈2.83、√2≈1.41，数轴上这两个点相乘结果约为4；说明根号内的量相乘后能开尽。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "乘法法则 √a·√b=√(ab)。把被开方数相乘：8×2=16，√16=4。先乘后开更简便。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "二次根式相乘先把被开方数相乘再一起开方，此法则反过来也用于拆分。凡 √a·√b 都化为 √(ab)。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红化简根号48，把它化成 a√3 的形式，想知道根号外的系数 a 是多少。",
            "question": "√48 化后根号外的系数是多少？",
            "formula": "sqrt(48)=4*sqrt(3)",
            "answer": 4,
            "choices": [
                4,
                8,
                16,
                3
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 7,
                "points": [
                    {
                        "pos": 3,
                        "label": "√3",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 7,
                        "label": "√48",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    3,
                    7
                ]
            },
            "knowledge": "二次根式化简",
            "difficulty": 2,
            "hint": "48=16×3，√16=4",
            "variants": [
                {
                    "question": "√75化简后系数？",
                    "formula": "75=25*3,sqrt(75)=5*sqrt(3)",
                    "answer": 5,
                    "hint": "提平方因子25"
                },
                {
                    "question": "√27化简后系数？",
                    "formula": "27=9*3,sqrt(27)=3*sqrt(3)",
                    "answer": 3,
                    "hint": "提平方因子9"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "√48 化简后根号外的系数 a",
                        "√3 的值",
                        "48 分解后的因数",
                        "√48 到底等不等于48"
                    ],
                    "answer": "√48 化简后根号外的系数 a",
                    "explain": "把 √48 化成 a√3 的形式，要求根号外的系数 a 是多少。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "48=16×3，16 是完全平方",
                        "48=8×6，8 是完全平方",
                        "48 本身就是完全平方数",
                        "48=48 不用化简"
                    ],
                    "answer": "48=16×3，16 是完全平方",
                    "explain": "把48分出一个最大的完全平方因子，16×3；16 能开出4。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "√48=√(16×3)=√16·√3=4√3，根号外系数 4",
                        "√48=√(8×6)=8√6，根号外系数 8",
                        "√48=48÷3=16，根号外系数 16",
                        "√48 化简后是 √3，系数 3"
                    ],
                    "answer": "√48=√(16×3)=√16·√3=4√3，根号外系数 4",
                    "explain": "√(m·n)=√m·√n（m为完全平方）：48=16×3，√16=4，所以 √48=4√3，系数 a=4。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "把48拆成16×3：16是开得尽的大正方形面积，开出4；3开不尽留在根号里。数轴上表现为 4 移到根号外。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "化简二次根式，找出最大的完全平方因子：√48=√16×√3=4√3。根号外系数就是4。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "化简根式通用法：把被开方数分解成『最大的完全平方 × 剩余项』，完全平方开出来后写在根号外作系数。例如 √72=6√2。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小刚化简根号75，化成 a√3 的形式，求根号外的系数 a。",
            "question": "√75 化后根号外的系数是多少？",
            "formula": "sqrt(75)=5*sqrt(3)",
            "answer": 5,
            "choices": [
                5,
                15,
                25,
                3
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 9,
                "points": [
                    {
                        "pos": 3,
                        "label": "√3",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 9,
                        "label": "√75",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    3,
                    9
                ]
            },
            "knowledge": "二次根式化简",
            "difficulty": 2,
            "hint": "75=25×3，√25=5",
            "variants": [
                {
                    "question": "√18化简后系数？",
                    "formula": "18=9*2,sqrt(18)=3*sqrt(2)",
                    "answer": 3,
                    "hint": "提9"
                },
                {
                    "question": "√32化简后系数？",
                    "formula": "32=16*2,sqrt(32)=4*sqrt(2)",
                    "answer": 4,
                    "hint": "提16"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "√75 化简成 a√3 后根号外的系数 a",
                        "√3 本身的值",
                        "75 的所有因数",
                        "√75 直接等于75"
                    ],
                    "answer": "√75 化简成 a√3 后根号外的系数 a",
                    "explain": "把 √75 化成 a√3 的形式，求根号外的系数 a。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "75=25×3，25 是完全平方",
                        "75=15×5，15 是完全平方",
                        "75 是完全平方数",
                        "75 无法分解"
                    ],
                    "answer": "75=25×3，25 是完全平方",
                    "explain": "把75分出最大完全平方因子25×3，25能开出5。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "√75=√(25×3)=√25·√3=5√3，根号外系数 5",
                        "√75=√(15×5)=15√5，根号外系数 15",
                        "√75=75÷3=25，根号外系数 25",
                        "√75 化简后系数是 3"
                    ],
                    "answer": "√75=√(25×3)=√25·√3=5√3，根号外系数 5",
                    "explain": "√75=√25·√3=5√3，根号外系数 a=5。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "75 拆成25×3：25 是完全平方开得5，剩3 留在根号。图上可看成一个大正方形25 与剩块3。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "找出最大完全平方因子25，√75=√25×√3=5√3。系数 a=5。与上一题的√48 是同类型化简。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "根号内是正整数时，找其中最大的平方因子（25、36、49…）提出来。这是化简任意二次根式的统一步骤。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红比较两个实数的大小：根号4与根号9，想知道哪个更大。",
            "question": "√4 和 √9 中较大的是多少？",
            "formula": "sqrt(4)=2, sqrt(9)=3, 较大的为3",
            "answer": 3,
            "choices": [
                3,
                2,
                4,
                5
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 3,
                "points": [
                    {
                        "pos": 2,
                        "label": "√4",
                        "color": "#2563EB"
                    },
                    {
                        "pos": 3,
                        "label": "√9",
                        "color": "#F5B800"
                    }
                ],
                "highlight": [
                    2,
                    3
                ]
            },
            "knowledge": "实数比较",
            "difficulty": 1,
            "hint": "先开方再比较大小",
            "variants": [
                {
                    "question": "√16 和 √25 哪个大？",
                    "formula": "4<5，较大为5",
                    "answer": 5,
                    "hint": "开方比较"
                },
                {
                    "question": "√1 和 √4 哪个大？",
                    "formula": "1<2，较大为2",
                    "answer": 2,
                    "hint": "开方比较"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "√4 和 √9 中较大的那个数",
                        "√4 是不是大于√9",
                        "9 和4 谁大",
                        "两个根式谁更靠左"
                    ],
                    "answer": "√4 和 √9 中较大的那个数",
                    "explain": "比较 √4 与 √9 的大小，找出更大的那个值。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "√4=2，√9=3，比较2和3",
                        "√4=4，√9=9，比较4和9",
                        "两个根式相等",
                        "都不开方直接比4和9"
                    ],
                    "answer": "√4=2，√9=3，比较2和3",
                    "explain": "先把两个根式开方：√4=2、√9=3，再比较2和3。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "√4=2，√9=3，较大的数是 3",
                        "√9=9，9比4大，较大的数是9",
                        "√4=2，2小于3，较大的数是2",
                        "√4+√9=2+3=5，结果取5"
                    ],
                    "answer": "√4=2，√9=3，较大的数是 3",
                    "explain": "开方得 √4=2、√9=3，3 比2 大，所以较大的是3（来自√9）。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "数轴上 √4=2 在左、√9=3 在右，越靠右数越大，3 更大。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "对正数，算术平方根单调递增：被开方数越大，开根结果越大。√4=2＜√9=3。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "比较两个正根式，可以先各自开方成实数再比；也可利用被开方数大小直接判断大小关系。这是比较无理数的常用思路。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "直角三角形两直角边分别为3和4，斜边为5。小红想求斜边上的高。",
            "question": "斜边上的高是多少？",
            "formula": "h = 3*4/5 = 2.4",
            "answer": 2.4,
            "choices": [
                2.4,
                2,
                3,
                1.8
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 3,
                "points": [
                    {
                        "pos": 2.4,
                        "label": "高",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 3,
                        "label": "直角边",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    2.4,
                    3
                ]
            },
            "knowledge": "直角三角形斜边高",
            "difficulty": 3,
            "hint": "面积法：两直角边乘积=斜边×高",
            "variants": [
                {
                    "question": "直角边6、8，斜边10，斜边上的高？",
                    "formula": "6*8/10=4.8",
                    "answer": 4.8,
                    "hint": "面积除以斜边"
                },
                {
                    "question": "直角边5、12，斜边13，斜边上的高？",
                    "formula": "5*12/13≈4.6",
                    "answer": 4.6,
                    "hint": "乘积除以斜边"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "斜边上的高（从直角顶点到斜边的垂线段）",
                        "斜边的长度",
                        "面积的大小",
                        "两直角边乘积"
                    ],
                    "answer": "斜边上的高（从直角顶点到斜边的垂线段）",
                    "explain": "直角边3、4，斜边5，求从直角顶点向斜边作垂线的这段高的长度。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两直角边3、4，斜边5",
                        "只有一条直角边3",
                        "只知道斜边5",
                        "三边都是已知的等边"
                    ],
                    "answer": "两直角边3、4，斜边5",
                    "explain": "已知直角边3、4和斜边5。用面积法：两直角边乘积=斜边×斜边上的高。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "面积=3×4÷2=6，高=2×6÷5=2.4",
                        "高=3×4=12",
                        "高=5²−3² 开方=4",
                        "高=3+4−5=2"
                    ],
                    "answer": "面积=3×4÷2=6，高=2×6÷5=2.4",
                    "explain": "面积法：S=3×4/2=6，又 S=5×h/2，所以 h=6×2÷5=12÷5=2.4。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形内，从直角顶点向斜边作一条垂线，就是斜边上的高。三角形被这道高分成两个小直角三角形。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "同一三角形的面积有两种算法：½·ab 与 ½·ch，二者相等。3×4/2=5h/2，h=2.4。等面积建立方程求解。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "直角三角形斜边上的高 h=ab/c（两直角边乘积除以斜边）。『用两种方式表示同一面积』是求高、求距离的经典等面积方法。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小明想求特殊角30度的正弦值。",
            "question": "sin30° 的值是多少？",
            "formula": "sin30 = 1/2 = 0.5",
            "answer": 0.5,
            "choices": [
                0.5,
                0.866,
                0,
                1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 1,
                "points": [
                    {
                        "pos": 0.5,
                        "label": "sin30",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 1,
                        "label": "1",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    0.5,
                    1
                ]
            },
            "knowledge": "解直角三角形",
            "difficulty": 1,
            "hint": "30度角所对直角边是斜边的一半",
            "variants": [
                {
                    "question": "sin90° = ?",
                    "formula": "sin90=1",
                    "answer": 1,
                    "hint": "正弦最大为1"
                },
                {
                    "question": "sin0° = ?",
                    "formula": "sin0=0",
                    "answer": 0,
                    "hint": "正弦最小为0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "30° 角的正弦值",
                        "30° 角的余弦值",
                        "30° 的正切值",
                        "三角形的斜边"
                    ],
                    "answer": "30° 角的正弦值",
                    "explain": "求特殊角30°的 sin 值。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "30° 是特殊角，sin=对边÷斜边",
                        "只要知道角度不用看边",
                        "30° 等于任何角",
                        "正弦值取决于斜边长度"
                    ],
                    "answer": "30° 是特殊角，sin=对边÷斜边",
                    "explain": "正弦定义 sin=对边/斜边。30° 的特殊性在于其对边是斜边的一半。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "sin30°=对边÷斜边=1/2=0.5",
                        "sin30°=√3/2≈0.866",
                        "sin30°=0",
                        "sin30°=1"
                    ],
                    "answer": "sin30°=对边÷斜边=1/2=0.5",
                    "explain": "30° 所对直角边是斜边的一半，所以 sin30°=1/2=0.5。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "在30°的直角三角形里，30°所对的短直角边长度是斜边的一半，即对边:斜边=1:2。这是30°角独有的边比。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "sinθ=对边/斜边。30° 对边=斜边一半，比值=1:2，sin30°=1/2=0.5。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "特殊角三角函数要记牢：sin30°=1/2、sin45°=√2/2、sin60°=√3/2。口诀『30对应斜半边』帮助记忆。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "小红想求特殊角60度的余弦值。",
            "question": "cos60° 的值是多少？",
            "formula": "cos60 = 1/2 = 0.5",
            "answer": 0.5,
            "choices": [
                0.5,
                0.866,
                0,
                1
            ],
            "visualType": "numberLine",
            "visualData": {
                "start": 0,
                "end": 1,
                "points": [
                    {
                        "pos": 0.5,
                        "label": "cos60",
                        "color": "#F5B800"
                    },
                    {
                        "pos": 1,
                        "label": "1",
                        "color": "#2563EB"
                    }
                ],
                "highlight": [
                    0.5,
                    1
                ]
            },
            "knowledge": "解直角三角形",
            "difficulty": 1,
            "hint": "cos60°=1/2",
            "variants": [
                {
                    "question": "cos0° = ?",
                    "formula": "cos0=1",
                    "answer": 1,
                    "hint": "余弦最大为1"
                },
                {
                    "question": "cos90° = ?",
                    "formula": "cos90=0",
                    "answer": 0,
                    "hint": "余弦最小为0"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "60° 角的余弦值",
                        "60° 角的正弦值",
                        "60° 的正切值",
                        "三角形的斜边"
                    ],
                    "answer": "60° 角的余弦值",
                    "explain": "求特殊角60°的 cos 值。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "60° 是特殊角，cos=邻边÷斜边",
                        "只要是直角都取60°",
                        "余弦与角度无关",
                        "60° 的对边是斜边"
                    ],
                    "answer": "60° 是特殊角，cos=邻边÷斜边",
                    "explain": "余弦定义 cos=邻边/斜边。60°与30°互余，cos60°=sin30°=1/2。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "cos60°=邻边÷斜边=1/2=0.5",
                        "cos60°=√3/2≈0.866",
                        "cos60°=0",
                        "cos60°=1"
                    ],
                    "answer": "cos60°=邻边÷斜边=1/2=0.5",
                    "explain": "60° 的邻边是斜边的一半，cos60°=1/2=0.5。与 sin30° 相等。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "60°角的直角三角形中，与60°相邻的直角边恰为斜边的一半，形成30-60-90的特殊三角形边比 1:√3:2。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "cosθ=邻边/斜边=1/2=0.5。利用互余关系 cos60°=sin30°，两个特殊角互为补充。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "记忆特殊值表：cos60°=1/2、cos30°=√3/2、cos0°=1、cos90°=0。互余角正余弦互换，可减少记忆量。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "两个相似三角形，相似比为2:3，大三角形对应边是15厘米。小红想求小三角形对应边。",
            "question": "小三角形对应边是多少厘米？",
            "formula": "15 * 2 / 3 = 10",
            "answer": 10,
            "choices": [
                10,
                22.5,
                8,
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
                    "question": "相似比3:5，小边9，大边？",
                    "formula": "9*5/3=15",
                    "answer": 15,
                    "hint": "乘比例倒数"
                },
                {
                    "question": "相似比1:4，大边20，小边？",
                    "formula": "20*1/4=5",
                    "answer": 5,
                    "hint": "乘1/4"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "小三角形的对应边长度",
                        "大三角形的对应边",
                        "两个三角形的面积比值",
                        "相似三角形的个数"
                    ],
                    "answer": "小三角形的对应边长度",
                    "explain": "两个相似三角形相似比 2:3，大对面相应边15厘米，求小的对应边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "相似比(小:大)=2:3，大三角形对应边15",
                        "相似比(大:小)=2:3",
                        "两个三角形全等",
                        "只给了一个边长"
                    ],
                    "answer": "相似比(小:大)=2:3，大三角形对应边15",
                    "explain": "关键是小:大=2:3，大边对应15cm。对应边成比例。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "小边=15×2÷3=10",
                        "小边=15×3÷2=22.5",
                        "小边=15−3=12",
                        "小边=15÷2≈8"
                    ],
                    "answer": "小边=15×2÷3=10",
                    "explain": "对应边成比例：小/大=2/3，小=15×(2/3)=10厘米。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "两个相似三角形形状相同、大小不同，各对应边成同一比例。小三角形的边对应当大三角形中那条15cm 的边。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "相似比=对应边之比。小:大=2:3 写成分式 小/大=2/3，已知大边15，则小边=15×2/3=10。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "相似图形中任取一组对应边，比值都等于相似比 k。由一条已知边和比例，用比例式交叉相乘就能求另一条边。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "三角形三条边长分别为3、4、5，半周长是6。小华用海伦公式求面积。",
            "question": "三角形面积是多少？",
            "formula": "sqrt(6*3*2*1)=sqrt(36)=6",
            "answer": 6,
            "choices": [
                6,
                12,
                8,
                5
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
            "knowledge": "海伦公式",
            "difficulty": 3,
            "hint": "海伦公式：p=半周长，S=√[p(p-a)(p-b)(p-c)]",
            "variants": [
                {
                    "question": "三角形6、8、10的面积？",
                    "formula": "6*8/2=24",
                    "answer": 24,
                    "hint": "直角三角形用底高"
                },
                {
                    "question": "等边三角形边长4，面积？",
                    "formula": "sqrt(3)/4*16≈6.9",
                    "answer": 6.9,
                    "hint": "等边面积公式"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "三角形的面积",
                        "三角形的周长",
                        "三角形的高",
                        "三角形的中线"
                    ],
                    "answer": "三角形的面积",
                    "explain": "三边为3、4、5，且给出半周长6，用小华的海伦公式求面积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "三边3、4、5，半周长p=6",
                        "只有三边之和是6",
                        "三角形是等边的",
                        "半周长是3、4、5的乘积"
                    ],
                    "answer": "三边3、4、5，半周长p=6",
                    "explain": "三条边3、4、5，(3+4+5)/2=6 正是半周长，代入海伦公式。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "S=√(6×3×2×1)=√36=6",
                        "S=3×4=12",
                        "S=3×4×5=60",
                        "S=3+4−5=2"
                    ],
                    "answer": "S=√(6×3×2×1)=√36=6",
                    "explain": "海伦公式 S=√(p(p−a)(p−b)(p−c))：代入 p=6、a=3、b=4、c=5，得√(6×3×2×1)=√36=6。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "三边3、4、5 是一个直角三角形（直角边3、4）。底乘高公式 3×4/2=6 也能得到相同面积，与海伦结果一致，是个很好的自检。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "海伦公式 S=√(p(p−a)(p−b)(p−c))，其中 p 是半周长。p=6，S=√(6×3×2×1)=√36=6。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "当只知道三角形三边、不会求高时，海伦公式 S=√(s(s−a)(s−b)(s−c))（s 为半周长）是通用解法，适合所有三角形，不要求直角。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一块梯形地面，上底4米、下底6米、高5米。小红想算它的面积。",
            "question": "梯形面积是多少平方米？",
            "formula": "(4+6)*5/2 = ?",
            "answer": 25,
            "choices": [
                25,
                50,
                20,
                30
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "trapezoid",
                "params": {
                    "top": 4,
                    "bottom": 6,
                    "height": 5
                }
            },
            "knowledge": "梯形面积",
            "difficulty": 2,
            "hint": "梯形面积=(上底+下底)×高÷2",
            "variants": [
                {
                    "question": "上底3下底7高4面积？",
                    "formula": "(3+7)*4/2=20",
                    "answer": 20,
                    "hint": "和乘高除2"
                },
                {
                    "question": "上底5下底9高6面积？",
                    "formula": "(5+9)*6/2=42",
                    "answer": 42,
                    "hint": "先加再乘"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "梯形的面积",
                        "梯形的周长",
                        "梯形的高",
                        "梯形上下底之和"
                    ],
                    "answer": "梯形的面积",
                    "explain": "一块梯形地面，上底4、下底6、高5，求面积。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "上底4米、下底6米、高5米",
                        "只有上底4米和下底6米",
                        "只给了高5米",
                        "梯形的高是5、宽是6"
                    ],
                    "answer": "上底4米、下底6米、高5米",
                    "explain": "上底4、下底6、高5 都是求梯形面积所需的值。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "S=(4+6)×5÷2=25",
                        "S=(4+6)×5=50",
                        "S=4×6=24",
                        "S=4+6+5=15"
                    ],
                    "answer": "S=(4+6)×5÷2=25",
                    "explain": "梯形面积=(上底+下底)×高÷2：10×5÷2=25。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "梯形有两条平行的底：上底4、下底6，高5 是垂直连接上下底的距离。图示清楚标出三条关键量。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "梯形面积=(上底+下底)×高÷2。代入(4+6)×5÷2=50÷2=25 平方米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "面积公式 S=½(a+b)h 对任意梯形成立。它其实是把梯形补齐成平行四边形再取一半，理解来源后不易记错。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "等腰三角形的腰长5，底边长6。小红想求底边上的高。",
            "question": "底边上的高是多少？",
            "formula": "sqrt(5^2-3^2)=sqrt(16)=4",
            "answer": 4,
            "choices": [
                4,
                3,
                5,
                6
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "base": 6,
                    "side": 5
                }
            },
            "knowledge": "方程与几何",
            "difficulty": 3,
            "hint": "等腰三角形底边上的高分底边为两半",
            "variants": [
                {
                    "question": "等腰腰13底10，底边上的高？",
                    "formula": "sqrt(169-25)=12",
                    "answer": 12,
                    "hint": "勾股定理"
                },
                {
                    "question": "等腰腰5底8，底边上的高？",
                    "formula": "sqrt(25-16)=3",
                    "answer": 3,
                    "hint": "3-4-5"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "等腰三角形底边上的高",
                        "等腰三角形的腰长",
                        "底边的长度",
                        "三角形的周长"
                    ],
                    "answer": "等腰三角形底边上的高",
                    "explain": "等腰三角形腰长5、底边长6，求底边上的高。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "腰长5、底边长6，高把底平分",
                        "腰长5、底边长5",
                        "两条腰不相等",
                        "底边上的高就是腰"
                    ],
                    "answer": "腰长5、底边长6，高把底平分",
                    "explain": "等腰三角形底边上的高把底边分成两段相等，各为3；高、腰、半底构成直角三角形。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "高²=5²−3²=25−9=16，高=4",
                        "高=6÷2=3",
                        "高=√(5²+6²)=√61",
                        "高=5（直接取腰长）"
                    ],
                    "answer": "高²=5²−3²=25−9=16，高=4",
                    "explain": "半底=6÷2=3，高²=腰²−半底²=25−9=16，高=4。正是3-4-5勾股。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "等腰三角形底边上的高把底边6 分成两个3，还把它分成左右两个全等的直角三角形，每个的腰5、半底3、高待求——正好是3-4-5模型。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "高、半底、腰构成直角三角形：高²=腰²−半底²=25−9=16，高=4。几何与方程的有机结合。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "等腰三角形的高、腰、半底永远构成一个直角三角形，因此任何等腰三角形都能用勾股定理求高。遇到等腰先作高，是重要辅助线。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一次测验共40人参加，其中36人及格。老师想算及格率。",
            "question": "及格率是多少百分数？",
            "formula": "36 / 40 = 90%",
            "answer": 90,
            "choices": [
                90,
                80,
                85,
                95
            ],
            "visualType": "barModel",
            "visualData": {
                "total": 40,
                "parts": [
                    {
                        "label": "及格",
                        "val": 36,
                        "color": "#00A896"
                    },
                    {
                        "label": "不及格",
                        "val": 4,
                        "color": "#EF4444"
                    }
                ]
            },
            "knowledge": "统计与百分比",
            "difficulty": 2,
            "hint": "及格率=及格人数÷总人数×100%",
            "variants": [
                {
                    "question": "50人中45人及格，及格率？",
                    "formula": "45/50=90%",
                    "answer": 90,
                    "hint": "部分除总数"
                },
                {
                    "question": "20人中18人及格，及格率？",
                    "formula": "18/20=90%",
                    "answer": 90,
                    "hint": "约分后乘100"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "及格率（用百分数表示）",
                        "及格的人数",
                        "总人数",
                        "不及格的人数"
                    ],
                    "answer": "及格率（用百分数表示）",
                    "explain": "40人测验其中36人及格，求及格率是多少百分数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "及格36人，总人数40人",
                        "及格40人，总人数36人",
                        "只有总人数40人",
                        "及格率直接给出"
                    ],
                    "answer": "及格36人，总人数40人",
                    "explain": "及格数36、总数40，二者相除再乘100% 即得及格率。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "及格率=36÷40×100%=90%",
                        "及格率=40÷36≈111%",
                        "及格率=36÷40=0.9（漏乘100%）",
                        "及格率=36−40+100=96"
                    ],
                    "answer": "及格率=36÷40×100%=90%",
                    "explain": "及格率=及格人数÷总人数×100%=36/40=0.9×100%=90%。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "条形图里总数40 格，及格36 格占其中很大一部分，约 9/10，约90%。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "及格率、出勤率等比率都等于『部分 ÷ 整体 ×100%』。36÷40=0.9，再乘100% 得 90%。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "把小数转百分数要×100%；反之百分数转小数÷100。凡是求『率』（合格率、命中率、出勤率）都用 部分÷总数×100% 这个模板。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "直角三角形两条直角边分别是8厘米和15厘米。小红想求斜边长度。",
            "question": "斜边是多少厘米？",
            "formula": "sqrt(8^2+15^2)=17",
            "answer": 17,
            "choices": [
                17,
                16,
                19,
                15
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "triangle",
                "params": {
                    "sides": [
                        8,
                        15,
                        17
                    ]
                }
            },
            "knowledge": "勾股定理",
            "difficulty": 2,
            "hint": "8-15-17 是常用勾股数",
            "variants": [
                {
                    "question": "直角边9和40，斜边？",
                    "formula": "sqrt(81+1600)=41",
                    "answer": 41,
                    "hint": "9-40-41"
                },
                {
                    "question": "直角边11和60，斜边？",
                    "formula": "sqrt(121+3600)=61",
                    "answer": 61,
                    "hint": "11-60-61"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "直角三角形的斜边长度",
                        "直角边8厘米的长",
                        "直角边15厘米的长",
                        "三角形的面积"
                    ],
                    "answer": "直角三角形的斜边长度",
                    "explain": "两条直角边8和15厘米，求斜边，即直角所对的最长边。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "两条直角边8厘米和15厘米",
                        "两条直角边8厘米和17厘米",
                        "直角三角形是等腰的",
                        "斜边已知是17"
                    ],
                    "answer": "两条直角边8厘米和15厘米",
                    "explain": "已知两直角边8、15，这是一组常见勾股数 8-15-17。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "斜边²=8²+15²=64+225=289，斜边=17",
                        "斜边=8+15=23",
                        "斜边=15−8=7",
                        "斜边=√(8×15)=√120"
                    ],
                    "answer": "斜边²=8²+15²=64+225=289，斜边=17",
                    "explain": "勾股定理 c²=a²+b²：64+225=289，c=√289=17。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "直角三角形两直角边8、15，斜边17 是最长的一条。三边 8-15-17 成整数比，属于一组经典勾股数。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "勾股定理 c²=a²+b²：c²=64+225=289，c=17。斜边长17厘米。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "勾股著名整数组有 3-4-5、5-12-13、8-15-17、7-24-25。熟悉它们能秒判斜边；不熟悉时无条件代入 c=√(a²+b²)。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        },
        {
            "scene": "一个正方形的边长是5厘米。小红想求它的对角线长度（保留两位小数）。",
            "question": "对角线长约多少厘米？",
            "formula": "5*sqrt(2)=7.07",
            "answer": 7.07,
            "choices": [
                7.07,
                5,
                10,
                7
            ],
            "visualType": "geometry",
            "visualData": {
                "shape": "rectangle",
                "params": {
                    "length": 5,
                    "width": 5
                }
            },
            "knowledge": "勾股定理应用",
            "difficulty": 3,
            "hint": "正方形对角线=边长×√2",
            "variants": [
                {
                    "question": "边长3的正方形对角线？",
                    "formula": "3*sqrt(2)=4.24",
                    "answer": 4.24,
                    "hint": "边长乘1.414"
                },
                {
                    "question": "边长10的正方形对角线？",
                    "formula": "10*sqrt(2)=14.14",
                    "answer": 14.14,
                    "hint": "乘根号2"
                }
            ],
            "discoverySteps": [
                {
                    "q": "📖 再读一遍场景，这道题要我们求什么？",
                    "choices": [
                        "正方形的对角线长度",
                        "正方形的边长",
                        "正方形的周长",
                        "正方形的面积"
                    ],
                    "answer": "正方形的对角线长度",
                    "explain": "正方形边长5厘米，求对角线长度并保留两位小数。"
                },
                {
                    "q": "🔢 题目给了我们哪些关键信息？",
                    "choices": [
                        "正方形边长5厘米，对角线把正方形分成两个等腰直角三角形",
                        "正方形边长5，对角线是边，长5",
                        "正方形对角线就是周长",
                        "边长是5、对角线是整数"
                    ],
                    "answer": "正方形边长5厘米，对角线把正方形分成两个等腰直角三角形",
                    "explain": "对角线把正方形分成两个直角等腰三角形，直角边都是5、5。"
                },
                {
                    "q": "🧩 用什么方法/公式计算？",
                    "choices": [
                        "对角线=5√2≈5×1.414=7.07",
                        "对角线=5+5=10",
                        "对角线=5×5=25",
                        "对角线=√(5+5)≈3.16"
                    ],
                    "answer": "对角线=5√2≈5×1.414=7.07",
                    "explain": "勾股 d=√(5²+5²)=√50=5√2≈7.07。"
                }
            ],
            "explainLayers": [
                {
                    "icon": "👀",
                    "title": "看图 — 图形结构",
                    "text": "正方形沿对角线剪开成两个全等的等腰直角三角形，每个的直角边都是边长5。对角线就是这个三角形的斜边，两个5的平方和开方得到。",
                    "bg": "var(--teal-soft)",
                    "color": "var(--teal)"
                },
                {
                    "icon": "🧠",
                    "title": "理解 — 数学关系",
                    "text": "对角线 d=√(5²+5²)=√50=5√2。√2≈1.414，所以 5×1.414=7.07。正方形对角线=边长×√2。",
                    "bg": "var(--yellow-soft)",
                    "color": "var(--yellow-700)"
                },
                {
                    "icon": "🚀",
                    "title": "推广 — 通用规律",
                    "text": "一般矩形的对角线 d=√(长²+宽²)；正方形是特例 d=边长×√2。√2 的近似值1.414 要常用，遇到『保留两位小数』记得用到。",
                    "bg": "var(--coral-soft)",
                    "color": "var(--coral)"
                }
            ]
        }
    ]
};
