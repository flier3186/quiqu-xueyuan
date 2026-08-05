window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['3b'] = {
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
        "id": "3B-FRAC-01",
        "scene": "妈妈买了一个披萨，切成了4等份。小红吃了1份，小明吃了1份。两人一共吃了这个披萨的几分之几？",
        "question": "两人一共吃了这个披萨的几分之几？",
        "formula": "1/4 + 1/4 = ?",
        "answer": "1/2",
        "choices": ["1/2", "1/4", "3/4", "1/8"],
        "visualType": "fractionCircleAnim",
        "visualData": { "num": 1, "den": 4, "color": "#E8A0BF" },
        "knowledge": "分数认识·分数圆",
        "difficulty": 1,
        "hint": "把涂色部分合在一起看",
        "rmeChoices": [
          { "label": "画圆圈", "desc": "画4等份圆，涂2份", "correct": true },
          { "label": "画条形图", "desc": "画两条条形对比", "correct": false },
          { "label": "直接写算式", "desc": "1/4+1/4=2/4=1/2", "correct": true }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "涂色的2份合起来是整个披萨的几分之几？", "keywords": ["一半","1/2","2/4","两等份","对半","平分"] },
          { "type": "reverse", "q": "如果小红吃了1/2，小明吃了1/4，还剩几分之几？", "keywords": ["减法","1/4","1/2-1/4","还剩","剩下"] }
        ],
        "neriageErrors": [
          { "answer": "2/8", "reason": "分子加分母", "fix": "同分母分数相加：分母不变，分子相加。1/4+1/4=2/4=1/2" }
        ],
        "variants": []
      },
      {
        "id": "3B-FRAC-02",
        "scene": "一根绳子长1米，剪掉了1/4米。还剩几分之几？",
        "question": "还剩几分之几？",
        "formula": "1 - 1/4 = ?",
        "answer": "3/4",
        "choices": ["3/4", "1/4", "1/2", "1/3"],
        "visualType": "fractionStrip",
        "visualData": { "num": 3, "total": 4, "color": "#00A896" },
        "knowledge": "分数认识·分数条",
        "difficulty": 1,
        "hint": "把绳子分成4段，剪掉1段还剩3段",
        "rmeChoices": [
          { "label": "画条形图", "desc": "画4段条形，涂3段", "correct": true },
          { "label": "列算式", "desc": "1-1/4=3/4", "correct": true },
          { "label": "画圆圈", "desc": "画圆分成4份", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "绳子被分成了4段，剪掉1段，剩下几段？", "keywords": ["3段","3/4","剩下","还剩","剪掉1段"] },
          { "type": "compare", "q": "如果剪掉2段而不是1段，还剩几分之几？", "keywords": ["2/4","1/2","2段","更多","减掉"] }
        ],
        "neriageErrors": [
          { "answer": "1/3", "reason": "错误约分", "fix": "1-1/4=4/4-1/4=3/4，不是1/3" }
        ],
        "variants": []
      },
      {
        "id": "3B-FRAC-03",
        "scene": "用分数墙来看，1/2等于几分之几？",
        "question": "1/2等于？（找分数墙上和1/2等长的行）",
        "formula": "1/2 = ?/4 = ?/8",
        "answer": "2/4",
        "choices": ["2/4", "1/4", "3/4", "4/8"],
        "visualType": "fractionWall",
        "visualData": {},
        "knowledge": "等值分数·分数墙",
        "difficulty": 2,
        "hint": "在分数墙上找到1/2那一行，再看下面哪一行和它一样长",
        "rmeChoices": [
          { "label": "看分数墙", "desc": "在墙上找等长行", "correct": true },
          { "label": "画分数圆", "desc": "画圆涂1/2再涂2/4", "correct": true },
          { "label": "直接背答案", "desc": "1/2=2/4是死的", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "在分数墙上1/2那行，下面哪一行有一段和它一样长？", "keywords": ["2/4","4/8","等长","一样","对等"] },
          { "type": "reverse", "q": "分数墙上1/3等于下面哪个分数？", "keywords": ["2/6","3/9","4/12","等值","一样长"] }
        ],
        "neriageErrors": [
          { "answer": "1/4", "reason": "分子分母同时加1", "fix": "等值分数是分子分母同时乘以同一个数，不是加。1/2=2/4（×2），不是1+1/2+1" }
        ],
        "variants": []
      },
      {
        "id": "3B-GEO-01",
        "scene": "平行四边形的底是6厘米，高是4厘米。用割补法把它变成矩形后，面积是多少？",
        "question": "平行四边形的面积是多少？",
        "formula": "底 × 高 = ?",
        "answer": 24,
        "choices": [24, 20, 28, 10],
        "visualType": "cutPasteGeometry",
        "visualData": { "base": 6, "height": 4 },
        "knowledge": "平行四边形面积·割补法",
        "difficulty": 2,
        "hint": "把左边的三角形切下来补到右边，变成一个矩形",
        "rmeChoices": [
          { "label": "割补法", "desc": "切三角形补到右边变矩形", "correct": true },
          { "label": "直接乘底高", "desc": "6×4=24", "correct": true },
          { "label": "加法", "desc": "6+4=10", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "割补后矩形的长和宽分别是多少？", "keywords": ["长6","宽4","底6","高4","长乘宽","24"] },
          { "type": "compare", "q": "如果底变成8，高不变，面积变成多少？", "keywords": ["32","8乘4","变长","更大","8×4"] }
        ],
        "neriageErrors": [
          { "answer": 10, "reason": "底+高", "fix": "平行四边形面积=底×高，不是底+高。6×4=24，不是6+4=10" }
        ],
        "variants": []
      },
      {
        "id": "3B-GEO-02",
        "scene": "平行四边形底8dm，高5dm。割补成长方形后，长方形的长和宽各是多少？",
        "question": "长方形的面积是多少？",
        "formula": "8 × 5 = ?",
        "answer": 40,
        "choices": [40, 30, 50, 13],
        "visualType": "cutPasteGeometry",
        "visualData": { "base": 8, "height": 5 },
        "knowledge": "平行四边形面积·割补法",
        "difficulty": 2,
        "hint": "割补后长方形的长=平行四边形的底，宽=平行四边形的高",
        "rmeChoices": [
          { "label": "割补法", "desc": "切三角形变矩形", "correct": true },
          { "label": "直接乘", "desc": "8×5=40", "correct": true },
          { "label": "周长公式", "desc": "(8+5)×2=26", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "割补后长方形的长和宽是多少？", "keywords": ["长8","宽5","底8","高5","40"] },
          { "type": "reverse", "q": "如果面积是40，底是8，高是多少？", "keywords": ["5","除法","40÷8","逆运算","÷"] }
        ],
        "neriageErrors": [
          { "answer": 26, "reason": "用了周长公式", "fix": "面积=底×高=8×5=40，不是(8+5)×2=26" }
        ],
        "variants": []
      },
      {
        "id": "3B-GEO-03",
        "scene": "平行四边形面积是36cm²，底是9cm。高是多少？",
        "question": "平行四边形的高是多少？",
        "formula": "36 ÷ 9 = ?",
        "answer": 4,
        "choices": [4, 6, 9, 324],
        "visualType": "cutPasteGeometry",
        "visualData": { "base": 9, "height": 4 },
        "knowledge": "平行四边形面积·逆运算",
        "difficulty": 2,
        "hint": "面积=底×高，所以高=面积÷底",
        "rmeChoices": [
          { "label": "逆运算", "desc": "高=面积÷底", "correct": true },
          { "label": "除法", "desc": "36÷9=4", "correct": true },
          { "label": "乘法", "desc": "36×9=324", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "用逆运算：面积÷底=高，怎么算？", "keywords": ["36÷9","4","除法","逆运算","÷"] },
          { "type": "compare", "q": "如果底变成6，高还是4，面积变成多少？", "keywords": ["24","6×4","变小","底变了","乘法"] }
        ],
        "neriageErrors": [
          { "answer": 324, "reason": "用了乘法", "fix": "已知面积和底求高，用除法：36÷9=4，不是36×9=324" }
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
        "visualType": "areaModel",
        "coreLiteracy": "运算能力",
        "difficulty": 3,
        "isKeyTopic": true
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
