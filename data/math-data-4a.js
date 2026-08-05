window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};
window.MATH_BY_GRADE['4a'] = {
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
        "id": "4A-BM-01",
        "scene": "学校买来45本故事书，科技书比故事书多12本。科技书有多少本？",
        "question": "科技书有多少本？",
        "formula": "45 + 12 = ?",
        "answer": 57,
        "choices": [57, 47, 67, 33],
        "visualType": "barModelTranslate",
        "visualData": {
          "total": 57,
          "parts": [
            { "label": "故事书", "val": 45, "color": "#00A896" },
            { "label": "多12本", "val": 12, "color": "#F5B800" }
          ]
        },
        "knowledge": "Bar Model翻译行·比多少",
        "difficulty": 1,
        "hint": "科技书的条形 = 故事书条形 + 多出来的部分",
        "rmeChoices": [
          { "label": "画条形图", "desc": "画条形表示数量关系", "correct": true },
          { "label": "列算式", "desc": "45+12=57", "correct": true },
          { "label": "画圆圈", "desc": "画45个圈加12个圈", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "条形图里哪一段表示科技书比故事书多的本数？", "keywords": ["第二段","多12","右边","后面","突出的部分"] },
          { "type": "reverse", "q": "如果科技书有57本，故事书有45本，多几本？", "keywords": ["减法","12","57-45","差","少"] }
        ],
        "barTranslateLine": { "items": ["故事书=45", "科技书=45+12", "总共=57"] },
        "variants": []
      },
      {
        "id": "4A-BM-02",
        "scene": "水果店上午卖出38kg苹果，下午比上午多卖15kg。下午卖出多少kg？",
        "question": "下午卖出多少kg苹果？",
        "formula": "38 + 15 = ?",
        "answer": 53,
        "choices": [53, 43, 63, 23],
        "visualType": "barModelTranslate",
        "visualData": {
          "total": 53,
          "parts": [
            { "label": "上午", "val": 38, "color": "#00A896" },
            { "label": "多15kg", "val": 15, "color": "#E8A0BF" }
          ]
        },
        "knowledge": "Bar Model翻译行·比多少",
        "difficulty": 1,
        "hint": "下午的条形 = 上午条形 + 多卖的部分",
        "rmeChoices": [
          { "label": "画条形图", "desc": "画两条条形对比", "correct": true },
          { "label": "列算式", "desc": "38+15=53", "correct": true },
          { "label": "画线段", "desc": "画线段表示数量", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "条形图中多出来的那段表示什么？", "keywords": ["下午多卖","多15","第二段","突出的部分","比上午多的部分"] },
          { "type": "compare", "q": "如果下午多卖20kg而不是15kg，下午卖出多少？", "keywords": ["58","38+20","更多","变长","增加"] }
        ],
        "barTranslateLine": { "items": ["上午=38", "下午=38+15", "总共=53"] },
        "variants": []
      },
      {
        "id": "4A-BM-03",
        "scene": "一年级有135人，二年级比一年级多28人。两个年级一共有多少人？",
        "question": "两个年级一共有多少人？",
        "formula": "135 + (135+28) = ?",
        "answer": 298,
        "choices": [298, 270, 326, 107],
        "visualType": "barModelTranslate",
        "visualData": {
          "total": 298,
          "parts": [
            { "label": "一年级", "val": 135, "color": "#00A896" },
            { "label": "二年级", "val": 163, "color": "#F5B800" }
          ]
        },
        "knowledge": "Bar Model翻译行·两步应用",
        "difficulty": 2,
        "hint": "先求二年级人数，再求总人数",
        "rmeChoices": [
          { "label": "画条形图", "desc": "画条形表示两个年级人数", "correct": true },
          { "label": "分步算式", "desc": "先算二年级，再算总数", "correct": true },
          { "label": "一步算式", "desc": "135+28=163，然后135+163", "correct": false }
        ],
        "russianQuestions": [
          { "type": "quantity", "q": "两条条形分别代表什么？总条形是什么？", "keywords": ["一年级","二年级","两段","总条形","两部分"] },
          { "type": "reverse", "q": "如果两个年级共298人，一年级135人，二年级多少人？", "keywords": ["减法","163","298-135","差","少"] }
        ],
        "barTranslateLine": { "items": ["一年级=135", "二年级=135+28=163", "总共=135+163=298"] },
        "variants": []
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
