window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['4b'] = {
    "title": "四年级下册·四则运算与小数加减法",
    "sub": "数与代数 · 图形与几何 · 统计概率 · 综合实践",
    "progress": 0,
    "units": [
      {
        "name": "四则运算",
        "level": "locked",
        "children": [
          {
            "name": "加减法意义",
            "level": "locked"
          },
          {
            "name": "乘除法意义",
            "level": "locked"
          },
          {
            "name": "带括号运算",
            "level": "locked"
          },
          {
            "name": "租船问题",
            "level": "locked"
          }
        ]
      },
      {
        "name": "观察物体",
        "level": "locked",
        "children": [
          {
            "name": "从不同方向看",
            "level": "locked"
          }
        ]
      },
      {
        "name": "运算定律",
        "level": "locked",
        "children": [
          {
            "name": "加法交换结合律",
            "level": "locked"
          },
          {
            "name": "乘法交换结合律",
            "level": "locked"
          },
          {
            "name": "乘法分配律",
            "level": "locked"
          },
          {
            "name": "简便运算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "小数的意义和性质",
        "level": "locked",
        "children": [
          {
            "name": "小数意义",
            "level": "locked"
          },
          {
            "name": "读写法",
            "level": "locked"
          },
          {
            "name": "性质",
            "level": "locked"
          },
          {
            "name": "大小比较",
            "level": "locked"
          },
          {
            "name": "小数点移动",
            "level": "locked"
          },
          {
            "name": "单位换算",
            "level": "locked"
          },
          {
            "name": "近似数",
            "level": "locked"
          }
        ]
      },
      {
        "name": "三角形",
        "level": "locked",
        "children": [
          {
            "name": "认识",
            "level": "locked"
          },
          {
            "name": "分类",
            "level": "locked"
          },
          {
            "name": "内角和",
            "level": "locked"
          },
          {
            "name": "三边关系",
            "level": "locked"
          }
        ]
      },
      {
        "name": "小数加减法",
        "level": "locked",
        "children": [
          {
            "name": "加减法",
            "level": "locked"
          },
          {
            "name": "混合运算",
            "level": "locked"
          },
          {
            "name": "简便运算",
            "level": "locked"
          }
        ]
      },
      {
        "name": "图形的运动",
        "level": "locked",
        "children": [
          {
            "name": "轴对称",
            "level": "locked"
          },
          {
            "name": "平移",
            "level": "locked"
          },
          {
            "name": "平移求面积",
            "level": "locked"
          }
        ]
      },
      {
        "name": "统计",
        "level": "locked",
        "children": [
          {
            "name": "平均数",
            "level": "locked"
          },
          {
            "name": "复式条形统计图",
            "level": "locked"
          }
        ]
      },
      {
        "name": "数学广角",
        "level": "locked",
        "children": [
          {
            "name": "鸡兔同笼",
            "level": "locked"
          }
        ]
      }
    ],
    "problems": [
      {
        "id": "4B-FRAC-C-01",
        "scene": "小明吃了1/4个蛋糕，小红吃了1/4个蛋糕。两人一共吃了这个蛋糕的几分之几？",
        "question": "两人一共吃了蛋糕的几分之几？",
        "formula": "1/4 + 1/4 = ?",
        "answer": "1/2",
        "choices": ["1/2", "1/4", "3/4", "2/8"],
        "visualType": "fractionCircleAnim",
        "visualData": { "num": 1, "den": 4, "color": "#E8A0BF" },
        "knowledge": "分数认识·分数圆",
        "difficulty": 1,
        "hint": "把两个1/4拼在一起看",
        "rmeChoices": [
          { "label": "画分数圆", "desc": "画两个1/4圆拼在一起", "correct": true },
          { "label": "列算式", "desc": "1/4+1/4=2/4=1/2", "correct": true },
          { "label": "画条形图", "desc": "画两条条形对比", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "两个1/4拼在一起是几个1/4？", "keywords": ["2/4","1/2","两份","两个","拼一起","一半"] },
          { "type": "reverse", "q": "如果每人吃1/8，两人一共吃了多少？", "keywords": ["1/4","2/8","1+1","相加","加法"] }
        ],
        "neriageErrors": [
          { "answer": "1/8", "reason": "分子分母分别加", "fix": "同分母分数相加：分母不变，分子相加。1/4+1/4=2/4=1/2，不是1/8" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-C-02",
        "scene": "一条路修了3/8，还剩几分之几没修？",
        "question": "还剩几分之几没修？",
        "formula": "1 - 3/8 = ?",
        "answer": "5/8",
        "choices": ["5/8", "3/8", "1/8", "3/5"],
        "visualType": "fractionCircleAnim",
        "visualData": { "num": 3, "den": 8, "color": "#FB923C" },
        "knowledge": "分数认识·分数圆减法",
        "difficulty": 2,
        "hint": "把圆分成8份，涂了3份，没涂的是几分之几？",
        "rmeChoices": [
          { "label": "画分数圆", "desc": "画8等份圆，涂3份", "correct": true },
          { "label": "列算式", "desc": "1-3/8=5/8", "correct": true },
          { "label": "画条形图", "desc": "画8段条形涂3段", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "没涂的部分占了圆的几分之几？", "keywords": ["5/8","5份","没涂","剩余","剩下"] },
          { "type": "compare", "q": "如果修了5/8，还剩几分之几？", "keywords": ["3/8","5份","减","差","少"] }
        ],
        "neriageErrors": [
          { "answer": "3/5", "reason": "分子分母颠倒", "fix": "1-3/8=8/8-3/8=5/8，不是3/5" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-C-03",
        "scene": "一块巧克力分成6小块，小华吃了2块，小明吃了1块。两人一共吃了这块巧克力的几分之几？",
        "question": "两人一共吃了这块巧克力的几分之几？",
        "formula": "2/6 + 1/6 = ?",
        "answer": "1/2",
        "choices": ["1/2", "3/6", "1/3", "2/6"],
        "visualType": "fractionCircleAnim",
        "visualData": { "num": 3, "den": 6, "color": "#00A896" },
        "knowledge": "分数认识·分数圆加法",
        "difficulty": 2,
        "hint": "2/6 + 1/6 = 3/6 = 1/2",
        "rmeChoices": [
          { "label": "画分数圆", "desc": "画6等份圆，涂3份", "correct": true },
          { "label": "列算式", "desc": "2/6+1/6=3/6=1/2", "correct": true },
          { "label": "画条形图", "desc": "画6段条形", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "3/6化简后等于几分之几？", "keywords": ["1/2","3/6","化简","一半","对半"] },
          { "type": "reverse", "q": "如果小华吃了3/6，小明吃了1/6，还剩几分之几？", "keywords": ["2/6","1/3","减法","剩","还有"] }
        ],
        "neriageErrors": [
          { "answer": "3/12", "reason": "分子分母分别相加", "fix": "同分母分数相加：分母不变。2/6+1/6=3/6=1/2，不是3/12" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-S-01",
        "scene": "一根铁丝长1米，用去了3/10米。还剩几分之几？",
        "question": "还剩几分之几？",
        "formula": "1 - 3/10 = ?",
        "answer": "7/10",
        "choices": ["7/10", "3/10", "1/10", "7/100"],
        "visualType": "fractionStrip",
        "visualData": { "num": 7, "total": 10, "color": "#00A896" },
        "knowledge": "分数认识·分数条",
        "difficulty": 1,
        "hint": "把1米分成10段，用去3段还剩7段",
        "rmeChoices": [
          { "label": "画分数条", "desc": "画10段条形涂7段", "correct": true },
          { "label": "列算式", "desc": "1-3/10=7/10", "correct": true },
          { "label": "画圆圈", "desc": "画圆分10份", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "用去3/10，还剩10段中的几段？", "keywords": ["7段","7/10","还剩","剩余","10-3"] },
          { "type": "compare", "q": "如果用了7/10，还剩几分之几？", "keywords": ["3/10","减","差","少","剩余"] }
        ],
        "neriageErrors": [
          { "answer": "7/100", "reason": "分母错误", "fix": "1-3/10=10/10-3/10=7/10，不是7/100" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-S-02",
        "scene": "一块地种了番茄和黄瓜。番茄占了3/7，黄瓜占了2/7。两种蔬菜一共占了这块地的几分之几？",
        "question": "番茄和黄瓜一共占了这块地的几分之几？",
        "formula": "3/7 + 2/7 = ?",
        "answer": "5/7",
        "choices": ["5/7", "1/7", "6/7", "5/14"],
        "visualType": "fractionStrip",
        "visualData": { "num": 5, "total": 7, "color": "#F5B800" },
        "knowledge": "分数认识·分数条加法",
        "difficulty": 1,
        "hint": "同分母分数相加，分母不变，分子相加",
        "rmeChoices": [
          { "label": "画分数条", "desc": "画7段条形，涂5段", "correct": true },
          { "label": "列算式", "desc": "3/7+2/7=5/7", "correct": true },
          { "label": "画圆圈", "desc": "画圆分7份", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "番茄和黄瓜一共占了7份中的几份？", "keywords": ["5份","5/7","加起来","合起来","3+2"] },
          { "type": "reverse", "q": "如果番茄占3/7，黄瓜占4/7，一共占几分之几？", "keywords": ["1","7/7","满的","整块","1"] }
        ],
        "neriageErrors": [
          { "answer": "5/14", "reason": "分母相加", "fix": "同分母分数相加：分母不变。3/7+2/7=5/7，不是5/14" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-S-03",
        "scene": "一本书看了5/9，还剩几分之几没看？",
        "question": "还剩几分之几没看？",
        "formula": "1 - 5/9 = ?",
        "answer": "4/9",
        "choices": ["4/9", "5/9", "1/9", "9/9"],
        "visualType": "fractionStrip",
        "visualData": { "num": 4, "total": 9, "color": "#E8A0BF" },
        "knowledge": "分数认识·分数条减法",
        "difficulty": 1,
        "hint": "把书分成9份，看了5份还剩4份",
        "rmeChoices": [
          { "label": "画分数条", "desc": "画9段条形涂4段", "correct": true },
          { "label": "列算式", "desc": "1-5/9=4/9", "correct": true },
          { "label": "画圆圈", "desc": "画圆分9份", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "没看的部分占了9份中的几份？", "keywords": ["4份","4/9","还没看","剩下","剩余"] },
          { "type": "compare", "q": "如果看了7/9，还剩几分之几？", "keywords": ["2/9","减","差","少"] }
        ],
        "neriageErrors": [
          { "answer": "9/9", "reason": "忘记减", "fix": "1-5/9=9/9-5/9=4/9，不是9/9" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-W-01",
        "scene": "在分数墙上找一找，1/2等于下面哪个分数？",
        "question": "1/2 = ?（在分数墙上找等值分数）",
        "formula": "1/2 = ?",
        "answer": "2/4",
        "choices": ["2/4", "1/4", "3/4", "1/3"],
        "visualType": "fractionWall",
        "visualData": {},
        "knowledge": "等值分数·分数墙",
        "difficulty": 2,
        "hint": "在分数墙上找到1/2那行，看下面哪行有一段和它一样长",
        "rmeChoices": [
          { "label": "看分数墙", "desc": "在墙上找等长行", "correct": true },
          { "label": "画分数圆", "desc": "画圆涂1/2和2/4对比", "correct": true },
          { "label": "背答案", "desc": "1/2=2/4是记忆", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "分数墙上1/2那行，下面哪行有一段和它等长？", "keywords": ["2/4","4/8","等长","一样","对等"] },
          { "type": "compare", "q": "分数墙上3/4等于下面哪个分数？", "keywords": ["6/8","3/4","等值","一样长","6÷8"] }
        ],
        "neriageErrors": [
          { "answer": "1/4", "reason": "分子分母分别加1", "fix": "等值分数是分子分母同时乘同一个数。1/2=2/4（×2），不是1+1/2+1" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-W-02",
        "scene": "分数墙上，3/4等于下面哪个分数？",
        "question": "3/4 = ?（找等值分数）",
        "formula": "3/4 = ?",
        "answer": "6/8",
        "choices": ["6/8", "3/8", "1/2", "9/12"],
        "visualType": "fractionWall",
        "visualData": {},
        "knowledge": "等值分数·分数墙",
        "difficulty": 2,
        "hint": "找到3/4那行，看下面哪行有相同长度的段",
        "rmeChoices": [
          { "label": "看分数墙", "desc": "找3/4等长行", "correct": true },
          { "label": "画分数条", "desc": "画条对比3/4和6/8", "correct": true },
          { "label": "背答案", "desc": "3/4=6/8是死的", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "分数墙上3/4那行，下面哪行有等长的段？", "keywords": ["6/8","等长","一样","对等","3×2/4×2"] },
          { "type": "reverse", "q": "6/8化简后等于几分之几？", "keywords": ["3/4","化简","÷2","等值","简化"] }
        ],
        "neriageErrors": [
          { "answer": "3/8", "reason": "只看分母", "fix": "3/4=6/8（分子分母同时×2），不是3/8" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-W-03",
        "scene": "分数墙上，2/6和哪个分数等值？",
        "question": "2/6 = ?（找等值分数）",
        "formula": "2/6 = ?",
        "answer": "1/3",
        "choices": ["1/3", "2/3", "3/6", "1/2"],
        "visualType": "fractionWall",
        "visualData": {},
        "knowledge": "等值分数·分数墙",
        "difficulty": 2,
        "hint": "找到2/6那行，看哪一行有相同长度的段",
        "rmeChoices": [
          { "label": "看分数墙", "desc": "找2/6等长行", "correct": true },
          { "label": "画分数条", "desc": "画条对比2/6和1/3", "correct": true },
          { "label": "背答案", "desc": "2/6=1/3是记忆", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "分数墙上2/6那行，哪行有等长段？", "keywords": ["1/3","等长","一样","对等","2÷2/6÷2"] },
          { "type": "compare", "q": "1/3和2/6哪个大？", "keywords": ["一样大","相等","等值","相同","相等"] }
        ],
        "neriageErrors": [
          { "answer": "2/3", "reason": "分子分母处理错误", "fix": "2/6=1/3（分子分母同时÷2），不是2/3" }
        ],
        "variants": []
      },
      {
        "id": "4B-NEG-01",
        "scene": "温度计显示-3℃，这表示零下3摄氏度。如果温度升高5℃，现在温度是多少？",
        "question": "现在温度是多少℃？",
        "formula": "-3 + 5 = ?",
        "answer": 2,
        "choices": [2, -2, 8, -8],
        "visualType": "numberLineFraction",
        "visualData": {
          "min": -5, "max": 5, "step": 1,
          "points": [{ "pos": -3, "label": "-3℃" }, { "pos": 2, "label": "2℃" }],
          "highlight": [-3, 2]
        },
        "knowledge": "负数认识·数轴",
        "difficulty": 2,
        "hint": "在数轴上从-3向右移动5格",
        "rmeChoices": [
          { "label": "画数轴", "desc": "画数轴从-3右移5格", "correct": true },
          { "label": "列算式", "desc": "-3+5=2", "correct": true },
          { "label": "直接想", "desc": "零下3度升高5度", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "从-3向右数5格，停在哪个数？", "keywords": ["2","右移","加5","数轴上","到2"] },
          { "type": "compare", "q": "如果从-3升高8度，温度变成多少？", "keywords": ["5","-3+8","更多","升高","变"] }
        ],
        "neriageErrors": [
          { "answer": -8, "reason": "方向搞反", "fix": "升高是向右移动（加），-3+5=2，不是-3-5=-8" }
        ],
        "variants": []
      },
      {
        "id": "4B-NEG-02",
        "scene": "电梯从地下2层（-2）上升5层，现在在第几层？",
        "question": "电梯现在在第几层？",
        "formula": "-2 + 5 = ?",
        "answer": 3,
        "choices": [3, -3, 7, -7],
        "visualType": "numberLineFraction",
        "visualData": {
          "min": -5, "max": 5, "step": 1,
          "points": [{ "pos": -2, "label": "-2层" }, { "pos": 3, "label": "3层" }],
          "highlight": [-2, 3]
        },
        "knowledge": "负数认识·数轴应用",
        "difficulty": 2,
        "hint": "从-2开始，向右数5格",
        "rmeChoices": [
          { "label": "画数轴", "desc": "画数轴从-2右移5格", "correct": true },
          { "label": "列算式", "desc": "-2+5=3", "correct": true },
          { "label": "直接想", "desc": "地下2层上5层", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "从-2向右数5格停在几层？", "keywords": ["3层","+5","右移","数轴","到3"] },
          { "type": "reverse", "q": "如果从3层下5层，到第几层？", "keywords": ["-2","下5层","减5","-2","向下"] }
        ],
        "neriageErrors": [
          { "answer": -7, "reason": "方向搞反", "fix": "上升是向右移动（加），-2+5=3，不是-2-5=-7" }
        ],
        "variants": []
      },
      {
        "id": "4B-NEG-03",
        "scene": "潜水员在水下8米（-8m），又下潜了5米。现在在水下多少米？",
        "question": "现在在水下多少米？",
        "formula": "-8 + (-5) = ?",
        "answer": -13,
        "choices": [-13, -3, 13, 3],
        "visualType": "numberLineFraction",
        "visualData": {
          "min": -15, "max": 5, "step": 5,
          "points": [{ "pos": -8, "label": "-8m" }, { "pos": -13, "label": "-13m" }],
          "highlight": [-8, -13]
        },
        "knowledge": "负数认识·数轴延伸",
        "difficulty": 2,
        "hint": "又下潜就是继续往负方向移动",
        "rmeChoices": [
          { "label": "画数轴", "desc": "画数轴从-8左移5格", "correct": true },
          { "label": "列算式", "desc": "-8+(-5)=-13", "correct": true },
          { "label": "直接想", "desc": "水下8米再下潜5米", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "从-8再往负方向移动5格，到多少？", "keywords": ["-13","左移","更负","水下13","-8-5"] },
          { "type": "compare", "q": "如果从-8上升3米，到多少？", "keywords": ["-5","右移","+3","上升","没那么深"] }
        ],
        "neriageErrors": [
          { "answer": -3, "reason": "符号错误", "fix": "再下潜5米是继续往负方向，-8+(-5)=-13，不是-8+5=-3" }
        ],
        "variants": []
      },
      {
        "id": "4B-FRAC-N-01",
        "scene": "在数轴上标出1/2和0.5的位置，它们在同一点吗？",
        "question": "1/2和0.5在数轴上是否在同一点？",
        "formula": "1/2 = ?",
        "answer": "0.5",
        "choices": ["0.5", "0.2", "0.8", "1.5"],
        "visualType": "numberLineFraction",
        "visualData": {
          "min": 0, "max": 1, "step": 0.5,
          "points": [{ "pos": 0.5, "label": "1/2 和 0.5" }],
          "decimal": true
        },
        "knowledge": "分数小数统一·数轴",
        "difficulty": 2,
        "hint": "1/2 = 0.5，它们在数轴上的位置相同",
        "rmeChoices": [
          { "label": "画数轴", "desc": "在0和1之间标出1/2和0.5", "correct": true },
          { "label": "直接答", "desc": "1/2=0.5是等价", "correct": true },
          { "label": "画圆圈", "desc": "画圆表示分数", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "1/2和0.5在数轴上是否重合？", "keywords": ["同一点","一样","相等","重合","是"] },
          { "type": "compare", "q": "0.25和1/4在数轴上是否重合？", "keywords": ["同一点","一样","相等","重合","是"] }
        ],
        "neriageErrors": [
          { "answer": "0.2", "reason": "误以为不同", "fix": "1/2=0.5，它们在数轴上是同一个点，不是不同位置" }
        ],
        "variants": []
      }
    ],
    "knowledgeMap": [
      {
        "id": "4B-01",
        "name": "加减法的意义和各部分关系",
        "concept": "加法和减法互为逆运算，各部分名称",
        "prerequisite": "三上·加减法",
        "extends": "4B-03 四则运算",
        "visualStrategy": "线段图",
        "visualType": "barModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-02",
        "name": "乘除法的意义和各部分关系",
        "concept": "乘法和除法互为逆运算，各部分名称",
        "prerequisite": "三下·乘除法",
        "extends": "4B-03 四则运算",
        "visualStrategy": "面积模型",
        "visualType": "areaModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-03",
        "name": "带括号的四则运算（含中括号）",
        "concept": "先算小括号再算中括号，最后算括号外",
        "prerequisite": "四则运算意义",
        "extends": "4B-04 租船问题",
        "visualStrategy": "步骤标注图",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-04",
        "name": "解决问题（租船问题）",
        "concept": "用四则运算解决最优方案问题",
        "prerequisite": "带括号运算",
        "extends": "6A-15 工程问题",
        "visualStrategy": "表格",
        "visualType": "barModel",
        "coreLiteracy": "应用意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "4B-05",
        "name": "观察物体（从不同方向看）",
        "concept": "从前面/上面/左面看到不同形状",
        "prerequisite": "三上·观察物体（一）",
        "extends": "5B-01 三视图",
        "visualStrategy": "三视图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-06",
        "name": "加法交换律和结合律",
        "concept": "a+b=b+a，(a+b)+c=a+(b+c)",
        "prerequisite": "加法意义",
        "extends": "4B-08 分配律",
        "visualStrategy": "数轴跳跃",
        "visualType": "barModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-07",
        "name": "乘法交换律和结合律",
        "concept": "a×b=b×a，(a×b)×c=a×(b×c)",
        "prerequisite": "乘法意义",
        "extends": "4B-08 分配律",
        "visualStrategy": "面积模型",
        "visualType": "areaModel",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-08",
        "name": "乘法分配律",
        "concept": "(a+b)×c=a×c+b×c",
        "prerequisite": "乘法结合律",
        "extends": "4B-09 简便运算",
        "visualStrategy": "面积模型",
        "visualType": "areaModel",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "4B-09",
        "name": "简便运算（连减、连除）",
        "concept": "a-b-c=a-(b+c)；a÷b÷c=a÷(b×c)",
        "prerequisite": "运算定律",
        "extends": "4B-23 小数简便",
        "visualStrategy": "线段图/面积模型",
        "visualType": "numberBond",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-10",
        "name": "小数的意义",
        "concept": "0.1=1/10，0.01=1/100，0.001=1/1000",
        "prerequisite": "三下·小数初步+三上·分数",
        "extends": "4B-11 读写法",
        "visualStrategy": "面积模型+数轴",
        "visualType": "fractionStrip",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-11",
        "name": "小数的读法和写法",
        "concept": "整数部分按整数读，小数部分顺次读",
        "prerequisite": "小数意义",
        "extends": "4B-12 性质",
        "visualStrategy": "数位表",
        "visualType": "numberLine",
        "coreLiteracy": "符号意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-12",
        "name": "小数的性质",
        "concept": "小数末尾添0或去0大小不变",
        "prerequisite": "小数意义",
        "extends": "4B-13 大小比较",
        "visualStrategy": "面积模型",
        "visualType": "fractionStrip",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-13",
        "name": "小数大小比较",
        "concept": "先比整数部分，再逐位比小数部分",
        "prerequisite": "小数性质",
        "extends": "4B-14 小数点移动",
        "visualStrategy": "数轴",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-14",
        "name": "小数点移动引起大小变化",
        "concept": "小数点右移1位×10，左移1位÷10",
        "prerequisite": "小数大小比较",
        "extends": "4B-15 单位换算",
        "visualStrategy": "数位表+动画",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 3,
        "isKeyTopic": true
      },
      {
        "id": "4B-15",
        "name": "小数与单位换算",
        "concept": "高级→低级×进率；低级→高级÷进率",
        "prerequisite": "小数点移动",
        "extends": "4B-16 近似数",
        "visualStrategy": "数位表",
        "visualType": "numberLine",
        "coreLiteracy": "量感",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-16",
        "name": "求小数近似数",
        "concept": "四舍五入保留指定小数位数",
        "prerequisite": "四上·求近似数",
        "extends": "5A-03 积的近似数",
        "visualStrategy": "数轴",
        "visualType": "numberLine",
        "coreLiteracy": "数感",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-17",
        "name": "三角形的认识",
        "concept": "三条边、三个角、三个顶点，稳定性",
        "prerequisite": "三上·四边形",
        "extends": "4B-18 分类",
        "visualStrategy": "几何标注图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 1,
        "isKeyTopic": true
      },
      {
        "id": "4B-18",
        "name": "三角形的分类",
        "concept": "按角分（锐角/直角/钝角），按边分（等腰/等边）",
        "prerequisite": "三角形认识+四上·角分类",
        "extends": "4B-19 内角和",
        "visualStrategy": "几何分类图",
        "visualType": "geometry",
        "coreLiteracy": "几何直观",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-19",
        "name": "三角形内角和",
        "concept": "任意三角形内角和=180°",
        "prerequisite": "三角形分类",
        "extends": "4A-23 四边形内角和",
        "visualStrategy": "几何验证图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-20",
        "name": "三角形三边关系",
        "concept": "任意两边之和大于第三边",
        "prerequisite": "三角形认识",
        "extends": "5B-06 长方体棱",
        "visualStrategy": "几何对比图",
        "visualType": "geometry",
        "coreLiteracy": "推理意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "4B-21",
        "name": "小数加减法",
        "concept": "小数点对齐，按整数加减法算",
        "prerequisite": "小数意义+三下·简单小数加减",
        "extends": "4B-22 混合运算",
        "visualStrategy": "竖式格子",
        "visualType": "barModel",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-22",
        "name": "小数加减混合运算",
        "concept": "含括号和不含括号，运算顺序同整数",
        "prerequisite": "小数加减法",
        "extends": "4B-23 简便运算",
        "visualStrategy": "步骤标注图",
        "visualType": "numberBond",
        "coreLiteracy": "运算能力",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-23",
        "name": "整数运算定律推广到小数",
        "concept": "加法交换/结合律、减法的性质",
        "prerequisite": "小数加减+四上·运算定律",
        "extends": "5A-04 小数运算定律",
        "visualStrategy": "数轴跳跃",
        "visualType": "barModel",
        "coreLiteracy": "推理意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-24",
        "name": "轴对称",
        "concept": "对折后完全重合，对称点到对称轴距离相等",
        "prerequisite": "三下·图形的运动（一）",
        "extends": "4B-25 平移",
        "visualStrategy": "网格图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-25",
        "name": "平移",
        "concept": "方向+距离，平移后形状大小不变",
        "prerequisite": "三下·图形的运动（一）",
        "extends": "4B-26 平移求面积",
        "visualStrategy": "网格图",
        "visualType": "geometry",
        "coreLiteracy": "空间观念",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-26",
        "name": "利用平移求不规则图形面积",
        "concept": "割补平移将不规则→规则",
        "prerequisite": "平移+三下·面积",
        "extends": "5A-28 不规则面积估算",
        "visualStrategy": "网格图",
        "visualType": "geometry",
        "coreLiteracy": "应用意识",
        "difficulty": 3,
        "isKeyTopic": false
      },
      {
        "id": "4B-27",
        "name": "平均数",
        "concept": "平均数=总数÷份数，不代表具体某个数",
        "prerequisite": "除法意义",
        "extends": "4B-28 复式条形图",
        "visualStrategy": "条形对比图",
        "visualType": "barModel",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": true
      },
      {
        "id": "4B-28",
        "name": "复式条形统计图",
        "concept": "两组数据并列对比",
        "prerequisite": "条形统计图+平均数",
        "extends": "5B-28 折线统计图",
        "visualStrategy": "统计图",
        "visualType": "barModel",
        "coreLiteracy": "数据意识",
        "difficulty": 2,
        "isKeyTopic": false
      },
      {
        "id": "4B-29",
        "name": "鸡兔同笼",
        "concept": "假设法：假设全是鸡→多出的腿÷2=兔数",
        "prerequisite": "四则运算",
        "extends": "6B-23 鸽巢问题",
        "visualStrategy": "画图+抬腿法",
        "visualType": "barModel",
        "coreLiteracy": "模型意识",
        "difficulty": 3,
        "isKeyTopic": true
      }
    ]
  };
