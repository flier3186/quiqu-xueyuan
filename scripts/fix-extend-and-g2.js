/**
 * 按 2024 版新教材修正：
 *   A. data/math-3-6-extend.js（3-6 年级扩展题）中的冲突题
 *   B. data/math-2a-2b.js（二年级）单元目录与冲突题（二年级 2025 秋已启用新版）
 * 冲突题会同步重建 discoverySteps / explainLayers，避免引导层与题干文不对题。
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.dirname(path.dirname(__filename));

// ---------- 通用：重建引导层 ----------
const VIS_DESC = {
  barModel: '条形模型：把总量分成几个部分，部分相加得到总量',
  numberBond: '数字分解图：整体的各个部分与总数之间的关系',
  numberLine: '数轴：把数量标在数轴上，看清大小与差距',
  fractionStrip: '分数条：把一个整体平均分成若干份',
  areaModel: '面积模型：把乘法拆成几块面积相加',
  geometry: '几何图形：从图形的边长与高的关系入手'
};
function makeGuide(prob) {
  const f = String(prob.formula || '');
  const op = /×/.test(f) ? '乘法' : /÷/.test(f) ? '除法' : /\+/.test(f) ? '加法' : /-/.test(f) ? '减法' : '计算';
  const key = String(prob.hint || '').split(/[；;。]/)[0];
  const q = prob.question;
  prob.discoverySteps = [
    {
      q: '📖 再读一遍场景，这道题要我们求什么？',
      choices: [q, '求每份有多少', '求一共有多少份', '谁比谁多'],
      answer: q,
      explain: '题目问的是「' + q + '」，这是这道题要求解的最终问题。'
    },
    {
      q: '🔢 题目给了我们哪些关键信息？',
      choices: ['关键信息：' + key, '没有给出任何数', '只有问题没有条件', '只有答案没有过程'],
      answer: '关键信息：' + key,
      explain: key
    },
    {
      q: '🧩 要解决这个问题，你觉得该用什么方法？',
      choices: [op, '加法', '减法', '乘法', '除法'].filter((v, i, a) => a.indexOf(v) === i).slice(0, 4),
      answer: op,
      explain: '看算式「' + f + '」，所以用' + op + '来解决。'
    }
  ];
  prob.explainLayers = [
    { icon: '👀', title: '看图 — 图形结构', text: (VIS_DESC[prob.visualType] || '示意图') + '。先看清图里每个部分表示什么。' },
    { icon: '🔢', title: '看式 — 数量关系', text: '算式：' + f + '　正确答案：' + prob.answer },
    { icon: '💡', title: '看理 — 为什么这样做', text: prob.hint }
  ];
  return prob;
}

// ---------- A. 3-6 扩展题冲突项 ----------
const EXT = path.join(ROOT, 'data', 'math-3-6-extend.js');
let src = fs.readFileSync(EXT, 'utf8');
global.window = {};
eval(src);
const E = global.window.MATH_EXTEND_3_6;

const EXT_FIX = {
  '3a_e': {
    1: { // 秒的认识（时分秒已移出三上）→ 毫米、分米和千米
      scene: '手工课上老师让同学们量一根彩带的长度，小红量得3分米5厘米。老师说，把它们合起来用厘米作单位记录更方便。',
      question: '这根彩带长多少厘米？',
      formula: '3 × 10 + 5 = ?',
      answer: 35,
      choices: [8, 35, 305, 350],
      visualType: 'barModel',
      visualData: { parts: [{ label: '3分米', val: 30, color: '#00A896' }, { label: '5厘米', val: 5, color: '#F5B800' }], total: 35 },
      knowledge: '毫米、分米和千米',
      difficulty: 2,
      hint: '1分米=10厘米，3分米=30厘米，30+5=35（厘米）',
      variants: [
        { question: '2分米6厘米合多少厘米？', formula: '2 × 10 + 6 = ?', answer: 26, hint: '2分米=20厘米，20+6=26' },
        { question: '70厘米合多少分米？', formula: '70 ÷ 10 = ?', answer: 7, hint: '10厘米=1分米，70÷10=7' }
      ]
    },
    4: { // 万以内加减法（已移至二下）→ 多位数乘一位数的估算
      scene: '学校艺术节，操场边要摆花盆，每排摆213盆，一共摆4排。后勤老师不用精算，先估一估大约需要多少盆。',
      question: '大约需要多少盆花？',
      formula: '200 × 4 = ?',
      answer: 800,
      choices: [800, 840, 852, 900],
      visualType: 'barModel',
      visualData: { parts: [{ label: '估算：4个200', val: 800, color: '#00A896' }], total: 800 },
      knowledge: '多位数乘一位数（估算）',
      difficulty: 2,
      hint: '估算时把213看成200，200×4=800，实际需要852盆，估少了',
      variants: [
        { question: '每排摆389盆，摆3排，大约多少盆？', formula: '400 × 3 = ?', answer: 1200, hint: '389≈400，400×3=1200' },
        { question: '每箱198本，买5箱，大约多少本？', formula: '200 × 5 = ?', answer: 1000, hint: '198≈200，200×5=1000' }
      ]
    },
    6: { // 长方形周长（已移至三下）→ 曹冲称象的故事（质量单位）
      scene: '"曹冲称象"的故事里，先把大象赶上船看船下沉的位置，再换成装石头。每袋石头重50千克，装到船下沉到同一位置正好用了20袋。',
      question: '这头大象重多少千克？',
      formula: '50 × 20 = ?',
      answer: 1000,
      choices: [70, 700, 1000, 2000],
      visualType: 'barModel',
      visualData: { parts: [{ label: '前10袋', val: 500, color: '#00A896' }, { label: '后10袋', val: 500, color: '#F5B800' }], total: 1000 },
      knowledge: '曹冲称象的故事（质量单位）',
      difficulty: 2,
      hint: '石头的总质量就是大象的质量：50×20=1000（千克），也正好是1吨',
      variants: [
        { question: '每袋石头25千克，装了40袋，大象重多少千克？', formula: '25 × 40 = ?', answer: 1000, hint: '25×40=1000' },
        { question: '大象重3吨，每袋石头50千克，需要几袋？', formula: '3000 ÷ 50 = ?', answer: 60, hint: '3吨=3000千克，3000÷50=60' }
      ]
    }
  },
  '3b_e': {
    3: { // 两位数乘两位数（新版三下已删除，并入四上）→ 年、月、日
      scene: '老师让同学们观察年历：一年有12个月，其中31天的大月有7个，30天的小月有4个，2月比较特殊。',
      question: '一年中大月比小月多几个月？',
      formula: '7 - 4 = ?',
      answer: 3,
      choices: [2, 3, 4, 11],
      visualType: 'barModel',
      visualData: { parts: [{ label: '大月', val: 7, color: '#00A896' }, { label: '小月', val: 4, color: '#F5B800' }], total: 11 },
      knowledge: '年、月、日的秘密',
      difficulty: 2,
      hint: '大月7个、小月4个，7-4=3（个）；再加上特殊的2月，正好12个月',
      variants: [
        { question: '一年中大月和小月一共有几个月？', formula: '7 + 4 = ?', answer: 11, hint: '7+4=11，再加2月是12个月' },
        { question: '上半年（1-6月）有几个大月？（1、3、5月）', formula: '3 个', answer: 3, hint: '1月、3月、5月，共3个' }
      ]
    }
  },
  '4a_e': {
    3: { // 烙饼问题（数学广角-优化已删除）→ 乘法模型：速度×时间=路程
      scene: '爸爸开车带全家去郊游，汽车每小时行驶85千米，一共行驶了4小时。这正好用到"速度×时间=路程"这个乘法模型。',
      question: '一共行驶了多少千米？',
      formula: '85 × 4 = ?',
      answer: 340,
      choices: [89, 325, 340, 425],
      visualType: 'numberLine',
      visualData: { start: 0, end: 4, points: [{ pos: 1, label: '1小时85千米', color: '#00A896' }, { pos: 4, label: '4小时', color: '#F5B800' }], highlight: [0, 4] },
      knowledge: '乘法模型（速度×时间=路程）',
      difficulty: 2,
      hint: '乘法模型：速度 × 时间 = 路程，85×4=340（千米）',
      variants: [
        { question: '每小时行60千米，行5小时，一共行多少千米？', formula: '60 × 5 = ?', answer: 300, hint: '60×5=300' },
        { question: '路程240千米，每小时行80千米，需要几小时？', formula: '240 ÷ 80 = ?', answer: 3, hint: '路程÷速度=时间，240÷80=3' }
      ]
    },
    4: { // 万以内加减法（二下内容）→ 1亿有多大（综合实践）
      scene: '综合实践课上，老师带大家探究"1亿有多大"：同学们先猜想，再做实验——量出100张纸约厚1厘米，再推想1亿张纸叠起来有多高。',
      question: '如果1亿张纸叠起来高10000米，合多少千米？',
      formula: '10000 ÷ 1000 = ?',
      answer: 10,
      choices: [1, 10, 100, 1000],
      visualType: 'numberLine',
      visualData: { start: 0, end: 10000, points: [{ pos: 0.1, label: '1000米=1千米', color: '#00A896' }, { pos: 1, label: '10000米', color: '#F5B800' }], highlight: [0, 1] },
      knowledge: '1亿有多大（综合实践）',
      difficulty: 3,
      hint: '1千米=1000米，10000÷1000=10（千米），比珠穆朗玛峰还高',
      variants: [
        { question: '1亿张纸叠起来高10千米，合多少米？', formula: '10 × 1000 = ?', answer: 10000, hint: '10×1000=10000' },
        { question: '1亿秒大约是多少天？（按每天86400秒，取整百天）', formula: '100000000 ÷ 86400 ≈ ?（天）', answer: 1157, hint: '1亿÷86400≈1157天，约3年多' }
      ]
    }
  },
  '4b_e': {
    3: { // 鸡兔同笼（新版已移至四上）→ 除数是两位数的除法（由四上移入四下）
      scene: '学校食堂买来840千克大米，平均分给21个班级的午餐配送点。后勤老师要算出每个配送点分到多少千克。',
      question: '每个配送点分到多少千克？',
      formula: '840 ÷ 21 = ?',
      answer: 40,
      choices: [4, 40, 42, 400],
      visualType: 'barModel',
      visualData: { parts: [{ label: '20个点', val: 800, color: '#00A896' }, { label: '1个点', val: 40, color: '#F5B800' }], total: 840 },
      knowledge: '除数是两位数的除法',
      difficulty: 3,
      hint: '840÷21：想 21×40=840，所以商是40',
      variants: [
        { question: '960千克大米分给32个点，每个点多少千克？', formula: '960 ÷ 32 = ?', answer: 30, hint: '32×30=960' },
        { question: '630千克分给15个点，每个点多少千克？', formula: '630 ÷ 15 = ?', answer: 42, hint: '15×42=630' }
      ]
    }
  },
  '5a_e': {
    1: { // 「解方程应用题」标注与新教材冲突（新版不学解方程），题目本身是除法应用，改标注与情境
      scene: '妈妈买了5千克苹果，一共付了32.5元。小明想知道每千克苹果多少元，用"总价÷数量=单价"这个数量关系就能算出来。',
      question: '每千克苹果多少元？',
      formula: '32.5 ÷ 5 = ?',
      answer: 6.5,
      choices: [5.5, 6.5, 7.5, 65],
      visualType: 'barModel',
      visualData: { parts: [{ label: '2千克', val: 13, color: '#00A896' }, { label: '3千克', val: 19.5, color: '#F5B800' }], total: 32.5 },
      knowledge: '小数除法的应用（数量关系）',
      difficulty: 3,
      hint: '数量关系：总价 ÷ 数量 = 单价，32.5÷5=6.5（元）',
      variants: [
        { question: '买4千克香蕉付了22元，每千克多少元？', formula: '22 ÷ 4 = ?', answer: 5.5, hint: '22÷4=5.5' },
        { question: '每千克6.5元，买3千克要多少元？', formula: '6.5 × 3 = ?', answer: 19.5, hint: '单价×数量=总价，6.5×3=19.5' }
      ]
    }
  },
  '6a_e': {
    3: { // 扇形统计图（新版移至六下）→ 百分数：求百分率
      scene: '体育老师统计六(1)班的跳绳达标情况：全班40人，达标的有38人。老师说，用百分数能更清楚地表示达标情况。',
      question: '这个班的跳绳达标率是多少？（填百分号前的数）',
      formula: '38 ÷ 40 × 100 = ?',
      answer: 95,
      choices: [38, 85, 95, 105],
      visualType: 'barModel',
      visualData: { parts: [{ label: '达标38人', val: 38, color: '#00A896' }, { label: '未达标2人', val: 2, color: '#F5B800' }], total: 40 },
      knowledge: '百分数（求百分率）',
      difficulty: 3,
      hint: '达标率 = 达标人数 ÷ 总人数 × 100% = 38÷40×100% = 95%',
      variants: [
        { question: '全班50人，达标46人，达标率是多少？', formula: '46 ÷ 50 × 100 = ?', answer: 92, hint: '46÷50=0.92=92%' },
        { question: '达标率95%，全班40人，达标多少人？', formula: '40 × 95% = ?', answer: 38, hint: '40×0.95=38' }
      ]
    }
  },
  '6b_e': {
    1: { // 负数的认识（新版已前移至六上）→ 比和比例关系
      scene: '美术课上调制颜料，黄色颜料和蓝色颜料按 3:5 调配。老师问：如果黄色颜料用了9份，蓝色颜料应该用多少份？',
      question: '蓝色颜料应该用多少份？',
      formula: '9 ÷ 3 × 5 = ?',
      answer: 15,
      choices: [11, 15, 18, 45],
      visualType: 'barModel',
      visualData: { parts: [{ label: '黄', val: 9, color: '#F5B800' }, { label: '蓝', val: 15, color: '#00A896' }], total: 24 },
      knowledge: '比和比例关系',
      difficulty: 3,
      hint: '按 3:5 调配，黄9份是3份的3倍，蓝也要是5份的3倍：5×3=15',
      variants: [
        { question: '按 2:7 调配，第一种用了6份，第二种用多少份？', formula: '6 ÷ 2 × 7 = ?', answer: 21, hint: '6÷2=3，7×3=21' },
        { question: '按 3:5 调配，一共用了24份，蓝色占多少份？', formula: '24 × 5 ÷ 8 = ?', answer: 15, hint: '总份数3+5=8，24×5÷8=15' }
      ]
    },
    3: { // 抽屉原理（新版移至六上数学广角）→ 有趣的平衡（六下新增综合实践）
      scene: '科学课上做杠杆平衡实验：左边距离支点4格处挂3个钩码。老师让大家找规律：两边"钩码数×格数"相等时杠杆平衡。',
      question: '右边距离支点6格处应挂几个钩码？',
      formula: '3 × 4 ÷ 6 = ?',
      answer: 2,
      choices: [2, 4, 6, 8],
      visualType: 'numberBond',
      visualData: { parts: [{ label: '左边：3×4', val: 12, color: '#00A896' }, { label: '右边：2×6', val: 12, color: '#F5B800' }], total: 24 },
      knowledge: '有趣的平衡（反比例）',
      difficulty: 4,
      hint: '钩码数×格数相等才平衡：左边 3×4=12，右边 ?×6=12，所以挂2个',
      variants: [
        { question: '左边5个钩码距支点6格，右边距支点3格，应挂几个？', formula: '5 × 6 ÷ 3 = ?', answer: 10, hint: '5×6=30，30÷3=10' },
        { question: '左边6个钩码距支点2格，右边距支点4格，应挂几个？', formula: '6 × 2 ÷ 4 = ?', answer: 3, hint: '6×2=12，12÷4=3' }
      ]
    }
  }
};

let n1 = 0;
for (const [k, idxMap] of Object.entries(EXT_FIX)) {
  for (const [i, np] of Object.entries(idxMap)) {
    if (!E[k] || !E[k][+i]) continue;
    E[k][+i] = makeGuide(Object.assign({}, E[k][+i], np));
    n1++;
  }
}
fs.writeFileSync(EXT, 'window.MATH_EXTEND_3_6 = ' + JSON.stringify(E, null, 4) + ';\n', 'utf8');
console.log('✅ 扩展题库修正', n1, '题');

// ---------- B. 二年级：units + 冲突题 ----------
const G2 = path.join(ROOT, 'data', 'math-2a-2b.js');
let src2 = fs.readFileSync(G2, 'utf8');
global.window = {};
eval(src2);
const G = global.window.MATH_GRADE_2;

// 新版二年级单元目录
G['2a'].units = [
  { name: '分类与整理', level: 'current', children: [{ name: '按不同标准分类', level: 'done' }, { name: '整理成统计表', level: 'current' }] },
  { name: '1-6的表内乘法', level: 'current', children: [{ name: '乘法的初步认识', level: 'done' }, { name: '2-6的乘法口诀', level: 'current' }, { name: '乘法解决问题', level: 'locked' }] },
  { name: '1-6的表内除法', level: 'locked', children: [{ name: '除法的初步认识', level: 'locked' }, { name: '用乘法口诀求商', level: 'locked' }] },
  { name: '校园小导游（综合实践）', level: 'locked', children: [{ name: '描述路线', level: 'locked' }, { name: '绘制路线图', level: 'locked' }] },
  { name: '厘米和米', level: 'locked', children: [{ name: '认识厘米', level: 'locked' }, { name: '认识米', level: 'locked' }, { name: '测量与换算', level: 'locked' }] },
  { name: '身体上的尺子（综合实践）', level: 'locked', children: [{ name: '一拃、一步、一庹', level: 'locked' }, { name: '用身体尺估测', level: 'locked' }] },
  { name: '7-9的表内乘、除法', level: 'locked', children: [{ name: '7-9的乘法口诀', level: 'locked' }, { name: '用口诀求商', level: 'locked' }] },
  { name: '复习与关联', level: 'locked', children: [{ name: '数与运算', level: 'locked' }, { name: '数量关系', level: 'locked' }] }
];
G['2b'].units = [
  { name: '时间在哪里（综合实践）', level: 'current', children: [{ name: '认识时、分', level: 'done' }, { name: '时间的简单计算', level: 'current' }] },
  { name: '有余数的除法', level: 'current', children: [{ name: '余数的认识', level: 'done' }, { name: '有余数除法的计算', level: 'current' }, { name: '进一法与去尾法', level: 'locked' }] },
  { name: '数量间的乘除关系', level: 'locked', children: [{ name: '求几个相同加数的和', level: 'locked' }, { name: '平均分与包含除', level: 'locked' }] },
  { name: '万以内数的认识', level: 'locked', children: [{ name: '1000以内数的认识', level: 'locked' }, { name: '10000以内数的认识', level: 'locked' }, { name: '大小比较与近似数', level: 'locked' }] },
  { name: '万以内的加法和减法', level: 'locked', children: [{ name: '口算加减', level: 'locked' }, { name: '笔算加减与验算', level: 'locked' }] },
  { name: '数学连环画（综合实践）', level: 'locked', children: [{ name: '读懂连环画中的数学', level: 'locked' }, { name: '创作数学连环画', level: 'locked' }] },
  { name: '复习与关联', level: 'locked', children: [{ name: '数与运算', level: 'locked' }, { name: '数量关系', level: 'locked' }] }
];

const G2_FIX = {
  '2a': {
    2: { // 100以内进位加法（新版二下）→ 1-6的表内除法
      scene: '老师把18本练习本平均分给3个小组，让组长来领。同学们刚学完除法，正好用乘法口诀来求商。',
      question: '每个小组分到几本？',
      formula: '18 ÷ 3 = ?',
      answer: 6,
      choices: [3, 6, 9, 15],
      knowledge: '1-6的表内除法',
      difficulty: 2,
      hint: '想：3×（  ）=18，三六十八，所以 18÷3=6',
      variants: [
        { question: '24本练习本平均分给4个小组，每组几本？', formula: '24 ÷ 4 = ?', answer: 6, hint: '四六二十四，24÷4=6' },
        { question: '30颗糖平均分给5人，每人几颗？', formula: '30 ÷ 5 = ?', answer: 6, hint: '五六三十，30÷5=6' }
      ]
    },
    3: { // 加减混合运算 → 7-9的表内乘法
      scene: '文具店里每盒水彩笔有9支，美术老师买了7盒，要给参加绘画比赛的同学们每人发一支。',
      question: '一共有多少支水彩笔？',
      formula: '9 × 7 = ?',
      answer: 63,
      choices: [16, 56, 63, 72],
      knowledge: '7-9的表内乘法',
      difficulty: 2,
      hint: '七九六十三，9×7=63',
      variants: [
        { question: '每盒8支，买6盒，一共多少支？', formula: '8 × 6 = ?', answer: 48, hint: '六八四十八' },
        { question: '每盒9支，63支能装几盒？', formula: '63 ÷ 9 = ?', answer: 7, hint: '七九六十三，63÷9=7' }
      ]
    },
    6: { // 角的初步认识（新版二上无此单元）→ 分类与整理
      scene: '老师让同学们把学过的图形分类整理：圆形卡片4张、三角形卡片5张、正方形卡片3张，先分类再统计。',
      question: '一共有多少张图形卡片？',
      formula: '4 + 5 + 3 = ?',
      answer: 12,
      choices: [9, 11, 12, 15],
      knowledge: '分类与整理',
      difficulty: 2,
      hint: '先分类再合起来：4+5+3=12（张）',
      variants: [
        { question: '三角形比正方形多几张？', formula: '5 - 3 = ?', answer: 2, hint: '5-3=2' },
        { question: '圆形和正方形一共几张？', formula: '4 + 3 = ?', answer: 7, hint: '4+3=7' }
      ]
    },
    7: { // 角的初步认识 → 1-6的表内除法
      scene: '体育课上把24根跳绳平均分给6个小组，每个小组拿到同样多，正好够每人一根。',
      question: '每个小组分到几根跳绳？',
      formula: '24 ÷ 6 = ?',
      answer: 4,
      choices: [3, 4, 6, 8],
      knowledge: '1-6的表内除法',
      difficulty: 2,
      hint: '四六二十四，24÷6=4',
      variants: [
        { question: '36根跳绳分给6个小组，每组几根？', formula: '36 ÷ 6 = ?', answer: 6, hint: '六六三十六' },
        { question: '12根跳绳每组2根，可以分给几个组？', formula: '12 ÷ 2 = ?', answer: 6, hint: '二六十二' }
      ]
    },
    8: { // 观察物体（一）（新版移至三上）→ 身体上的尺子
      scene: '"身体上的尺子"实践活动课：同学们先量出自己一步大约长50厘米，再用"步"来估测教室的长度。',
      question: '走4步大约是多少厘米？',
      formula: '50 × 4 = ?',
      answer: 200,
      choices: [54, 100, 200, 250],
      knowledge: '身体上的尺子（综合实践）',
      difficulty: 2,
      hint: '一步约50厘米，4步就是4个50：50×4=200（厘米）',
      variants: [
        { question: '一步50厘米，走6步大约多少厘米？', formula: '50 × 6 = ?', answer: 300, hint: '50×6=300' },
        { question: '一拃约12厘米，3拃大约多少厘米？', formula: '12 × 3 = ?', answer: 36, hint: '12×3=36' }
      ]
    },
    9: { // 观察物体（一）→ 7-9的表内除法
      scene: '手工课上，老师把56个气球平均分给8个小组做装饰，每个小组分到的气球同样多。',
      question: '每个小组分到几个气球？',
      formula: '56 ÷ 8 = ?',
      answer: 7,
      choices: [6, 7, 8, 9],
      knowledge: '7-9的表内乘、除法',
      difficulty: 2,
      hint: '七八五十六，56÷8=7',
      variants: [
        { question: '72个气球分给9个小组，每组几个？', formula: '72 ÷ 9 = ?', answer: 8, hint: '八九七十二' },
        { question: '7个小组每组9个气球，一共多少个？', formula: '7 × 9 = ?', answer: 63, hint: '七九六十三' }
      ]
    },
    10: { // 认识时间（新版二下综合实践）→ 校园小导游
      scene: '"校园小导游"实践活动：同学们要向家长介绍校园路线——从校门向东走30米到教学楼，再向北走40米到操场。',
      question: '从校门到操场一共要走多少米？',
      formula: '30 + 40 = ?',
      answer: 70,
      choices: [10, 50, 70, 120],
      knowledge: '校园小导游（综合实践）',
      difficulty: 2,
      hint: '把两段路合起来：30+40=70（米）',
      variants: [
        { question: '从校门向东走25米，再向北走35米，一共走多少米？', formula: '25 + 35 = ?', answer: 60, hint: '25+35=60' },
        { question: '去程70米，原路返回，来回一共多少米？', formula: '70 × 2 = ?', answer: 140, hint: '70×2=140' }
      ]
    },
    11: { // 认识时间 → 1-6的表内乘法
      scene: '课间操时同学们排队，每组5人，一共站了6组。体育委员要报出参加课间操的总人数。',
      question: '一共有多少人参加课间操？',
      formula: '5 × 6 = ?',
      answer: 30,
      choices: [11, 25, 30, 36],
      knowledge: '1-6的表内乘法',
      difficulty: 2,
      hint: '五六三十，5×6=30',
      variants: [
        { question: '每组4人，站7组，一共多少人？', formula: '4 × 7 = ?', answer: 28, hint: '四七二十八' },
        { question: '一共30人，每组5人，可以站几组？', formula: '30 ÷ 5 = ?', answer: 6, hint: '五六三十，30÷5=6' }
      ]
    }
  },
  '2b': {
    0: { // 表内除法（新版二上已学）→ 时间在哪里
      scene: '"时间在哪里"实践活动：同学们记录一节课40分钟，课间休息10分钟，把这两段时间加起来看看一共多久。',
      question: '一节课加课间休息一共多少分钟？',
      formula: '40 + 10 = ?',
      answer: 50,
      choices: [30, 50, 60, 70],
      knowledge: '时间在哪里（综合实践）',
      difficulty: 2,
      hint: '40+10=50（分钟）',
      variants: [
        { question: '一节课40分钟，两节课一共多少分钟？', formula: '40 × 2 = ?', answer: 80, hint: '40×2=80' },
        { question: '1小时=60分钟，一节课40分钟后还剩多少分钟？', formula: '60 - 40 = ?', answer: 20, hint: '60-40=20' }
      ]
    },
    1: { // 表内除法 → 数量间的乘除关系
      scene: '文具店里的铅笔每支3元，小明带了15元。这就是"总价÷单价=数量"的乘除关系。',
      question: '15元能买几支铅笔？',
      formula: '15 ÷ 3 = ?',
      answer: 5,
      choices: [3, 5, 12, 18],
      knowledge: '数量间的乘除关系',
      difficulty: 2,
      hint: '总价 ÷ 单价 = 数量，15÷3=5（支）',
      variants: [
        { question: '每支3元，买5支要多少元？', formula: '3 × 5 = ?', answer: 15, hint: '单价×数量=总价' },
        { question: '18元买9支，每支多少元？', formula: '18 ÷ 9 = ?', answer: 2, hint: '总价÷数量=单价' }
      ]
    },
    4: { // 混合运算（新版移至三上）→ 万以内的加法和减法
      scene: '学校图书室有故事书1200本，科技书比故事书少350本。管理员要统计科技书有多少本。',
      question: '科技书有多少本？',
      formula: '1200 - 350 = ?',
      answer: 850,
      choices: [750, 850, 950, 1550],
      knowledge: '万以内的加法和减法',
      difficulty: 3,
      hint: '科技书比故事书少350本：1200-350=850（本）',
      variants: [
        { question: '故事书1200本，科技书850本，一共多少本？', formula: '1200 + 850 = ?', answer: 2050, hint: '1200+850=2050' },
        { question: '一年级318人、二年级295人，一共多少人？', formula: '318 + 295 = ?', answer: 613, hint: '318+295=613' }
      ]
    },
    5: { // 混合运算 → 万以内的加法和减法
      scene: '学校开运动会，一年级有318人参加，二年级有295人参加。组委会要统计两个年级一共来了多少人。',
      question: '两个年级一共多少人参加？',
      formula: '318 + 295 = ?',
      answer: 613,
      choices: [513, 603, 613, 703],
      knowledge: '万以内的加法和减法',
      difficulty: 3,
      hint: '318+295：个位8+5=13进1，十位1+9+1=11进1，百位3+2+1=6，得613',
      variants: [
        { question: '一年级318人，二年级比一年级少23人，二年级多少人？', formula: '318 - 23 = ?', answer: 295, hint: '318-23=295' },
        { question: '两个年级共613人，其中一年级318人，二年级多少人？', formula: '613 - 318 = ?', answer: 295, hint: '613-318=295' }
      ]
    },
    8: { // 克和千克（新版移至三上曹冲称象）→ 数学连环画
      scene: '"数学连环画"实践活动：同学们把学过的数学知识画成连环画。一本数学连环画有24页，每天看4页。',
      question: '几天能看完？',
      formula: '24 ÷ 4 = ?',
      answer: 6,
      choices: [4, 6, 8, 20],
      knowledge: '数学连环画（综合实践）',
      difficulty: 2,
      hint: '24÷4=6（天）',
      variants: [
        { question: '每天看6页，24页几天看完？', formula: '24 ÷ 6 = ?', answer: 4, hint: '四六二十四' },
        { question: '一本36页，每天看4页，几天看完？', formula: '36 ÷ 4 = ?', answer: 9, hint: '四九三十六' }
      ]
    },
    9: { // 克和千克 → 数量间的乘除关系
      scene: '学校食堂把点心装盒，每盒装8个，装了5盒。这用到"每份数×份数=总数"的乘法关系。',
      question: '一共有多少个点心？',
      formula: '8 × 5 = ?',
      answer: 40,
      choices: [13, 35, 40, 45],
      knowledge: '数量间的乘除关系',
      difficulty: 2,
      hint: '每份数 × 份数 = 总数，8×5=40（个）',
      variants: [
        { question: '40个点心每盒装8个，能装几盒？', formula: '40 ÷ 8 = ?', answer: 5, hint: '五八四十' },
        { question: '40个点心装5盒，每盒几个？', formula: '40 ÷ 5 = ?', answer: 8, hint: '总数÷份数=每份数' }
      ]
    },
    10: { // 图形的运动（新版移至五上）→ 有余数的除法
      scene: '妈妈买了50块糖果，要装进每盒最多装6块的礼品盒里。包装时会出现"装满几盒、还剩几块"的情况。',
      question: '50块糖最多可以装满几盒？',
      formula: '50 ÷ 6 = ?（盒）余2',
      answer: 8,
      choices: [7, 8, 9, 6],
      knowledge: '有余数的除法',
      difficulty: 3,
      hint: '50÷6=8（盒）……2（块），最多装满8盒（去尾法）',
      variants: [
        { question: '38块糖每盒装5块，最多装满几盒？', formula: '38 ÷ 5 = ?（盒）余3', answer: 7, hint: '38÷5=7……3' },
        { question: '23人坐船，每条船坐4人，至少要几条船？', formula: '23 ÷ 4 = 5 余3，至少 ? 条', answer: 6, hint: '余下3人也要坐船，5+1=6（进一法）' }
      ]
    },
    11: { // 图形的运动 → 万以内数的认识
      scene: '数学课上老师用计数器拨数：千位上拨5个珠子、百位上拨3个珠子，让同学们写出这个数并读出来。',
      question: '这个数是多少？',
      formula: '5000 + 300 = ?',
      answer: 5300,
      choices: [5030, 5300, 530, 5003],
      knowledge: '万以内数的认识',
      difficulty: 3,
      hint: '5个千是5000，3个百是300，合起来是5300',
      variants: [
        { question: '由7个千、2个十组成的数是多少？', formula: '7000 + 20 = ?', answer: 7020, hint: '7个千和2个十，是7020' },
        { question: '5300里有几个百？', formula: '5300 ÷ 100 = ?', answer: 53, hint: '5300÷100=53' }
      ]
    }
  }
};

let n2 = 0;
for (const [g, idxMap] of Object.entries(G2_FIX)) {
  for (const [i, np] of Object.entries(idxMap)) {
    if (!G[g] || !G[g].problems[+i]) continue;
    G[g].problems[+i] = Object.assign({}, G[g].problems[+i], np);
    n2++;
  }
}
// 二年级题无 discoverySteps/explainLayers（仅 variants），无需重建
fs.writeFileSync(G2, '// 二年级数学数据（人教版 2024 版新教材）\n// 全局变量：window.MATH_GRADE_2 = { \'2a\': {...}, \'2b\': {...} }\nwindow.MATH_GRADE_2 = ' + JSON.stringify(G, null, 2) + ';\n', 'utf8');
console.log('✅ 二年级修正', n2, '题 + 单元目录已更新为新教材');
