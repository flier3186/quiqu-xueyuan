/**
 * 按 2024 版人教版重构三年级（3a/3b）数学题库。
 *
 * 策略（最小风险）：
 *   1) 保留仍属本册的题，knowledge 标签原样不动（知识链映射 math-chain-map 已覆盖这些标签）。
 *   2) 删除已移出三年级的题（时、分、秒→二下；万以内加减→二下；倍→二下；集合→删；
 *      两位数乘两位数→删；搭配→删；位置与方向→被平移旋转取代）。
 *   3) 把 3a 的「长方形和正方形/周长」整组题移入 3b（2024 版三下才有）。
 *   4) 为新单元补题：观察物体、混合运算、数字编码、线和角、曹冲称象（克千克吨/等量代换）、
 *      平移旋转、年月中、复习与关联。
 *   5) units 结构整体替换为 2024 版目录。
 *
 * 运行：node scripts/realign-grade3-2024.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'data');

function loadGrade(file) {
  const code = fs.readFileSync(file, 'utf8');
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window.MATH_BY_GRADE;
}

const src3a = loadGrade(path.join(DATA, 'math-data-3a.js'));
const src3b = loadGrade(path.join(DATA, 'math-data-3b.js'));

const TEAL = '#00A896', YEL = '#F5B800', CORAL = '#FB923C';

// ---- 通用脚手架：自动生成 discoverySteps / explainLayers ----
function discovery(question, hint, methodLabel) {
  return [
    { q: '📖 先读题：这道题要我们求什么？', choices: ['认真读题，明确问题', '直接猜一个', '跳过不看题'], answer: '认真读题，明确问题', explain: question },
    { q: '🔢 题目给了哪些已知条件？', choices: ['找出题目中的数和关键关系', '凭感觉', '只看答案'], answer: '找出题目中的数和关键关系', explain: hint },
    { q: '🧩 用什么方法计算？', choices: [methodLabel || '根据问题选择合适的方法', '随便选一个', '一律用加法'], answer: methodLabel || '根据问题选择合适的方法', explain: hint }
  ];
}
function explain(hint) {
  return [
    { icon: '👀', title: '看图 — 图形结构', text: '通过图示理解题目中数量或图形之间的关系。', bg: 'var(--teal-soft)', color: 'var(--teal)' },
    { icon: '🧠', title: '理解 — 数学关系', text: hint, bg: 'var(--yellow-soft)', color: 'var(--yellow-700)' },
    { icon: '🚀', title: '推广 — 通用规律', text: '掌握这类题的通用解法，以后遇到类似的也能做对。', bg: 'var(--coral-soft)', color: 'var(--coral)' }
  ];
}
function bond(parts, total) {
  return { type: 'numberBond', total, parts: parts.map(p => ({ label: p.l, val: p.v, color: p.c || TEAL })) };
}
function bars(arr) {
  return { type: 'bar', bars: arr.map(b => ({ label: b.l, val: b.v, color: b.c || TEAL })), total: arr.reduce((s, b) => s + b.v, 0) };
}

function mk(spec) {
  const p = {
    id: spec.id,
    unit: spec.unit,
    scene: spec.scene,
    question: spec.question,
    formula: spec.formula,
    answer: spec.answer,
    choices: spec.choices,
    knowledge: spec.knowledge,
    difficulty: spec.difficulty || 2,
    hint: spec.hint,
    variants: spec.variants || [],
    visualType: spec.visualType || (spec.visualData && spec.visualData.type) || 'numberBond',
    visualData: spec.visualData || bond([{ l: '一部分', v: Math.round(spec.answer / 2), c: YEL }, { l: '另一部分', v: spec.answer - Math.round(spec.answer / 2), c: TEAL }], spec.answer),
    discoverySteps: discovery(spec.question, spec.hint, spec.method),
    explainLayers: explain(spec.hint)
  };
  return p;
}

// ============== 3a 保留集（knowledge 标签，原样不动） ==============
const KEEP3A = new Set([
  '毫米的认识', '分米的认识', '千米的认识',
  '吨的认识',
  '口算乘法', '笔算乘法不进位', '笔算乘法进位', '笔算乘法连续进位', '因数中间有0的乘法', '因数末尾有0的乘法',
  '分数初步认识', '分数比较大小', '同分母分数加减', '分数简单应用'
]);
// 从 3a 移到 3b 的组
const MOVE3A_TO_3B = new Set(['四边形的认识', '长方形正方形特征', '周长', '长方形正方形周长', '周长实际问题']);

const retained3a = src3a['3a'].problems.filter(p => KEEP3A.has(p.knowledge));
const movedTo3b = src3a['3a'].problems.filter(p => MOVE3A_TO_3B.has(p.knowledge));

const UA = {
  '毫米的认识': '毫米、分米和千米', '分米的认识': '毫米、分米和千米', '千米的认识': '毫米、分米和千米',
  '吨的认识': '曹冲称象的故事（综合实践）',
  '口算乘法': '多位数乘一位数', '笔算乘法不进位': '多位数乘一位数', '笔算乘法进位': '多位数乘一位数', '笔算乘法连续进位': '多位数乘一位数', '因数中间有0的乘法': '多位数乘一位数', '因数末尾有0的乘法': '多位数乘一位数',
  '分数初步认识': '分数的初步认识', '分数比较大小': '分数的初步认识', '同分母分数加减': '分数的初步认识', '分数简单应用': '分数的初步认识'
};

// ============== 3a 新增题 ==============
const NEW_3A = [
  // 观察物体(一)
  mk({ id: '3A-OBS-01', knowledge: '观察物体', unit: '观察物体(一)', scene: '课堂上每个同学都拿了一个正方体魔方观察。老师问：从正面看这个正方体，看到的面是什么形状？', question: '从正面观察一个正方体，看到的面是( )形。', formula: '', answer: '正方形', choices: ['正方形', '长方形', '三角形', '圆'], hint: '正方体的六个面都是完全相同的正方形', method: '观察立体图形的面',
    variants: [{ question: '从上面观察同一个正方体，看到的面是( )形。', formula: '', answer: '正方形', hint: '每个面都是正方形' }] }),
  mk({ id: '3A-OBS-02', knowledge: '观察物体', unit: '观察物体(一)', scene: '小明家有一个茶叶筒（圆柱形的）。他分别从侧面和上面观察它。', question: '从侧面观察一个圆柱，看到的形状是( )形。', formula: '', answer: '长方形', choices: ['长方形', '圆', '正方形', '三角形'], hint: '圆柱侧面展开是长方形，正视图为长方形', method: '观察立体图形的面',
    variants: [{ question: '从上面观察同一个圆柱，看到的形状是( )形。', formula: '', answer: '圆', hint: '上面看是圆形底面' }] }),
  mk({ id: '3A-OBS-03', knowledge: '观察物体', unit: '观察物体(一)', scene: '美术课搭积木：把 3 个同样的小正方体横着排成一排。', question: '从正面看这排积木，能看到( )个正方形。', formula: '3 = ?', answer: 3, choices: [3, 2, 4, 1], hint: '3 个并排，正面看到 3 个正方形', method: '数一数',
    variants: [{ question: '把 2 个同样的小正方体上下叠放，从正面看能看到( )个正方形。', formula: '2 = ?', answer: 2, hint: '上下 2 个，正面看到 2 个' }] }),

  // 混合运算
  mk({ id: '3A-MIX-01', knowledge: '混合运算', unit: '混合运算', scene: '文具店里一支钢笔 6 元，一个笔记本 4 元。小明要买 3 支钢笔和 1 个笔记本，他先算一算一共要花多少钱。', question: '一共要付多少元？', formula: '3 × 6 + 4 = ?', answer: 22, choices: [18, 22, 24, 26], hint: '先算乘法 3×6=18，再算加法 18+4=22（先乘除后加减）', method: '乘加两步式题',
    variants: [{ question: '买 5 支铅笔（每支 2 元）和 1 块橡皮（3 元），一共多少元？', formula: '5 × 2 + 3 = ?', answer: 13, hint: '先算 5×2=10，再算 10+3=13' },
      { question: '买 4 个面包（每个 5 元），付给售货员 30 元，应找回多少元？', formula: '30 - 4 × 5 = ?', answer: 10, hint: '先算 4×5=20，再算 30-20=10' }] }),
  mk({ id: '3A-MIX-02', knowledge: '混合运算', unit: '混合运算', scene: '每盒铅笔 8 元，小明买了 2 盒，又买了一块 3 元的橡皮。', question: '小明一共花了多少元？', formula: '2 × 8 + 3 = ?', answer: 19, choices: [16, 19, 22, 27], hint: '先算乘法 2×8=16，再加 3 得 19', method: '乘加两步式题',
    variants: [{ question: '4 支笔每支 2 元，和 1 本 7 元的本子，一共多少元？', formula: '4 × 2 + 7 = ?', answer: 15, hint: '先算 4×2=8，再加 7' }] }),
  mk({ id: '3A-MIX-03', knowledge: '混合运算', unit: '混合运算', scene: '小军有 24 元，先买 3 支笔（每支 4 元），剩下的钱买每本 6 元的本子。', question: '剩下的钱能买几本本子？', formula: '(24 - 3 × 4) ÷ 6 = ?', answer: 2, choices: [2, 3, 4, 6], hint: '先算括号里 24-12=12，再算 12÷6=2', method: '带小括号的两步式题',
    variants: [{ question: '36 元买 4 支笔（每支 3 元），剩下的钱买每本 8 元的本子，能买几本？', formula: '(36 - 4 × 3) ÷ 8 = ?', answer: 3, hint: '括号里 36-12=24，24÷8=3' }] }),
  mk({ id: '3A-MIX-04', knowledge: '混合运算', unit: '混合运算', scene: '一包糖有 5 排，每排 6 颗。小红吃了 8 颗。', question: '还剩多少颗糖？', formula: '5 × 6 - 8 = ?', answer: 22, choices: [22, 30, 38, 7], hint: '先算 5×6=30，再减 8 得 22', method: '乘减两步式题',
    variants: [{ question: '每盘 7 个草莓，有 4 盘，吃了 10 个，还剩几个？', formula: '4 × 7 - 10 = ?', answer: 18, hint: '先算 4×7=28，再减 10' }] }),
  mk({ id: '3A-MIX-05', knowledge: '混合运算', unit: '混合运算', scene: '计算 36 - 12 ÷ 3 时，要先算哪一步？', question: '36 - 12 ÷ 3 = ?', formula: '36 - 12 ÷ 3 = ?', answer: 32, choices: [32, 30, 11, 24], hint: '先算除法 12÷3=4，再算减法 36-4=32', method: '先乘除后加减',
    variants: [{ question: '18 + 4 × 2 = ?', formula: '18 + 4 × 2 = ?', answer: 26, hint: '先算 4×2=8，再加 18' }] }),

  // 曹冲称象（克、千克、吨 / 等量代换）
  mk({ id: '3A-CAO-01', knowledge: '克和千克', unit: '曹冲称象的故事（综合实践）', scene: '妈妈在厨房称食材，一个鸡蛋很轻，一袋大米很重。', question: '一个鸡蛋约重 50( )。', formula: '', answer: '克', choices: ['克', '千克', '吨'], hint: '较轻的物体用“克”做单位', method: '选择合适的质量单位',
    variants: [{ question: '一个西瓜约重 5( )。', formula: '', answer: '千克', hint: '较重的物体用“千克”' }] }),
  mk({ id: '3A-CAO-02', knowledge: '克和千克', unit: '曹冲称象的故事（综合实践）', scene: '超市里一袋食盐标着 500，一头牛站在秤上。', question: '一袋食盐重 500( )。', formula: '', answer: '克', choices: ['克', '千克', '吨'], hint: '食盐一般用克', method: '选择合适的质量单位',
    variants: [{ question: '一头牛约重 500( )。', formula: '', answer: '千克', hint: '大型动物用千克' }] }),
  mk({ id: '3A-CAO-03', knowledge: '吨的认识', unit: '曹冲称象的故事（综合实践）', scene: '建筑工地上，一辆大卡车正在装货。', question: '一辆卡车的载重量约 5( )。', formula: '', answer: '吨', choices: ['吨', '千克', '克'], hint: '很重很重的物体用“吨”', method: '选择合适的质量单位',
    variants: [{ question: '一节火车车厢约能装 60( )货物。', formula: '', answer: '吨', hint: '火车载重用吨' }] }),
  mk({ id: '3A-CAO-04', knowledge: '吨的认识', unit: '曹冲称象的故事（综合实践）', scene: '课堂上老师讲曹冲称象：把大象赶上船，看船下沉到画线处；再往船上装石头，装到船下沉到同一位置。每筐石头重 500 千克，一共装了 6 筐。', question: '这头大象重多少千克？', formula: '500 × 6 = ?（千克）', answer: 3000, choices: [3000, 300, 600, 3300], hint: '石头的总质量就是大象的质量：500×6=3000（千克）', method: '等量代换',
    visualData: bars([{ l: '前3筐', v: 1500, c: YEL }, { l: '后3筐', v: 1500, c: TEAL }]),
    variants: [{ question: '每筐石头 400 千克，装了 8 筐，大象重多少千克？', formula: '400 × 8 = ?（千克）', answer: 3200, hint: '400×8=3200' }] }),
  mk({ id: '3A-CAO-05', knowledge: '等量代换', unit: '曹冲称象的故事（综合实践）', scene: '水果摊上，1 个苹果重 200 克。爷爷说：1 个西瓜的重量等于 4 个苹果。', question: '这个西瓜重多少克？', formula: '4 × 200 = ?（克）', answer: 800, choices: [800, 200, 400, 1600], hint: '4 个 200 克：4×200=800（克）', method: '等量代换',
    variants: [{ question: '1 本书重 300 克，1 摞书等于 5 本书，这摞书重多少克？', formula: '5 × 300 = ?（克）', answer: 1500, hint: '5×300=1500' }] }),

  // 数字编码（综合实践）
  mk({ id: '3A-CODE-01', knowledge: '数字编码', unit: '数字编码（综合实践）', scene: '寄信时要在信封上写邮政编码。', question: '我国邮政编码由( )位数字组成。', formula: '', answer: 6, choices: [6, 7, 8, 5], hint: '邮政编码是 6 位数字', method: '了解编码规则',
    variants: [{ question: '居民身份证号码有( )位。', formula: '', answer: 18, choices: [18, 15, 16, 12], hint: '身份证是 18 位' }] }),
  mk({ id: '3A-CODE-02', knowledge: '数字编码', unit: '数字编码（综合实践）', scene: '老师的身份证号为 1101012015******1234。', question: '身份证号码倒数第 2 位表示( )。', formula: '', answer: '性别', choices: ['性别', '年龄', '出生地'], hint: '第 17 位（倒数第 2 位）是性别码，奇男偶女', method: '解读编码含义',
    variants: [{ question: '身份证号码第 7～14 位表示( )。', formula: '', answer: '出生日期', choices: ['出生日期', '性别', '地址'], hint: '7-14 位是出生年月日' }] }),
  mk({ id: '3A-CODE-03', knowledge: '数字编码', unit: '数字编码（综合实践）', scene: '学校给每个学生编学号：入学年份(4位)+班级(2位)+序号(2位)。', question: '2023 年入学、3 班、15 号的同学，学号应编为( )。', formula: '', answer: '20230315', choices: ['20230315', '2023315', '230315'], hint: '年份4位+班级2位+序号2位 → 2023 03 15', method: '按规则编码',
    variants: [{ question: '2024 年入学、5 班、8 号的同学，学号是( )。', formula: '', answer: '20240508', choices: ['20240508', '2024508', '240508'], hint: '2024 05 08' }] }),
  mk({ id: '3A-CODE-04', knowledge: '数字编码', unit: '数字编码（综合实践）', scene: '宾馆房间号“3402”表示 3 楼、4 室、02 号房。', question: '5 楼、1 室、07 号房的房间号是( )。', formula: '', answer: '5107', choices: ['5107', '50107', '507'], hint: '楼号+室号(2位)+房号(2位) → 5 01 07', method: '解读房间编码',
    variants: [{ question: '房间号“2605”表示( )。', formula: '', answer: '2楼6室05号', choices: ['2楼6室05号', '26楼5号', '2楼65号'], hint: '2 楼、6 室、05 号' }] }),

  // 线和角
  mk({ id: '3A-ANG-01', knowledge: '线段直线射线', unit: '线和角', scene: '美术课上，老师让大家比较三种线。', question: '线段有( )个端点。', formula: '', answer: 2, choices: [2, 1, 0, 3], hint: '线段两端都有端点', method: '认识线',
    variants: [{ question: '射线有( )个端点。', formula: '', answer: 1, choices: [1, 2, 0], hint: '射线只有一个端点' },
      { question: '直线有( )个端点。', formula: '', answer: 0, choices: [0, 1, 2], hint: '直线没有端点' }] }),
  mk({ id: '3A-ANG-02', knowledge: '线段直线射线', unit: '线和角', scene: '把一条线段的一端无限延长，会怎样？', question: '把线段一端无限延长，得到( )。', formula: '', answer: '射线', choices: ['射线', '直线', '线段'], hint: '一端无限延长是射线', method: '认识线',
    variants: [{ question: '把线段两端都无限延长，得到( )。', formula: '', answer: '直线', choices: ['直线', '射线', '线段'], hint: '两端无限延长是直线' }] }),
  mk({ id: '3A-ANG-03', knowledge: '锐角直角钝角', unit: '线和角', scene: '三角板上有三种角，最大的那个角是直角。', question: '三角板上的直角是( )度。', formula: '', answer: 90, choices: [90, 180, 45, 60], hint: '直角 = 90°', method: '认识角',
    variants: [{ question: '一个锐角一定( )90 度。', formula: '', answer: '小于', choices: ['小于', '等于', '大于'], hint: '锐角小于 90°' }] }),
  mk({ id: '3A-ANG-04', knowledge: '锐角直角钝角', unit: '线和角', scene: '老师用活动角演示：把角慢慢张开。', question: '比直角小、比锐角大的角，是( )角。', formula: '', answer: '钝', choices: ['钝', '锐', '平'], hint: '大于直角小于平角的是钝角', method: '认识角',
    variants: [{ question: '比直角小的是( )角。', formula: '', answer: '锐', choices: ['锐', '钝', '平'], hint: '小于直角是锐角' }] }),
  mk({ id: '3A-ANG-05', knowledge: '锐角直角钝角', unit: '线和角', scene: '钟面上，时针和分针会组成不同的角。', question: '钟面 3 时整，时针与分针成( )角。', formula: '', answer: '直', choices: ['直', '锐', '平'], hint: '3 时两针夹角 90°，是直角', method: '认识角',
    variants: [{ question: '钟面 6 时整，时针与分针成( )角。', formula: '', answer: '平', choices: ['平', '直', '锐'], hint: '6 时两针成一条直线，是平角' }] }),
  mk({ id: '3A-ANG-06', knowledge: '平角周角', unit: '线和角', scene: '数学课上老师用活动角演示：把角的一条边绕顶点旋转，转到半圈时停下，老师说这时的角叫平角。', question: '平角是多少度？', formula: '360 ÷ 2 = ?（平角）', answer: 180, choices: [90, 180, 360, 45], hint: '平角是周角的一半：360÷2=180（度）；也等于 2 个直角', method: '认识平角周角',
    visualData: bond([{ l: '直角', v: 90, c: YEL }, { l: '直角', v: 90, c: TEAL }], 180),
    variants: [{ question: '2 个直角合起来是多少度？', formula: '90 × 2 = ?（度）', answer: 180, hint: '90×2=180，正好是一个平角' }] }),
  mk({ id: '3A-ANG-07', knowledge: '平角周角', unit: '线和角', scene: '老师问：一个周角里能装下几个直角？', question: '周角等于( )个直角。', formula: '360 ÷ 90 = ?', answer: 4, choices: [4, 2, 3], hint: '周角 360°，直角 90°，360÷90=4', method: '认识平角周角',
    variants: [{ question: '平角等于( )个直角。', formula: '180 ÷ 90 = ?', answer: 2, hint: '180÷90=2' }] }),

  // 复习与关联
  mk({ id: '3A-REV-01', knowledge: '复习与关联', unit: '复习与关联', scene: '一个长方形花坛，长 5 厘米、宽 3 厘米。', question: '这个长方形的周长是多少厘米？', formula: '(5 + 3) × 2 = ?', answer: 16, choices: [16, 15, 8, 30], hint: '长方形周长 =（长+宽）×2 =（5+3）×2 = 16 厘米', method: '周长计算',
    variants: [{ question: '正方形边长 4 厘米，周长是多少厘米？', formula: '4 × 4 = ?', answer: 16, hint: '正方形周长=边长×4' }] }),
  mk({ id: '3A-REV-02', knowledge: '复习与关联', unit: '复习与关联', scene: '一本书一共 48 页，第一天看了 20 页。', question: '还剩多少页没看？', formula: '48 - 20 = ?', answer: 28, choices: [28, 20, 68, 18], hint: '总数减去已看：48-20=28', method: '减法应用',
    variants: [{ question: '一盒糖 36 颗，吃了 9 颗，还剩几颗？', formula: '36 - 9 = ?', answer: 27, hint: '36-9=27' }] })
];

// ============== 组装 3a ==============
const ORDER_3A = ['观察物体(一)', '混合运算', '毫米、分米和千米', '曹冲称象的故事（综合实践）', '多位数乘一位数', '数字编码（综合实践）', '线和角', '分数的初步认识', '复习与关联'];
const new3aByUnit = {};
NEW_3A.forEach(p => { (new3aByUnit[p.unit] = new3aByUnit[p.unit] || []).push(p); });
const problems3a = [];
ORDER_3A.forEach(u => {
  src3a['3a'].problems.filter(p => UA[p.knowledge] === u).forEach(p => problems3a.push(p));
  (new3aByUnit[u] || []).forEach(p => problems3a.push(p));
});
// 注：unit 仅为组装时的临时分组键，最终写入须剥离（保持与旧版一致的问题 schema，
// 避免与 math-visual-v5 中作"度量单位后缀"语义的 problem.unit 冲突）。
problems3a.forEach(p => { delete p.unit; });

const data3a = {
  title: '三年级上册·2024版人教版（观察物体·混合运算·毫米分米千米·曹冲称象·多位数乘一位数·数字编码·线和角·分数）',
  sub: '数与代数 · 图形与几何 · 综合与实践',
  progress: 0,
  units: buildUnits(ORDER_3A),
  problems: problems3a
};

// ============== 3b ==============
const KEEP3B = new Set([
  '口算除法', '笔算除法', '三位数除一位数', '除法验算', '商中间有0', '商末尾有0', '除法估算',
  '复式统计表',
  '面积单位', '长方形面积', '正方形面积', '面积单位进率', '面积实际问题',
  '年月日', '24时计时法', '计算经过时间',
  '小数初步认识', '小数比较大小', '小数加减法'
]);
const retained3b = src3b['3b'].problems.filter(p => KEEP3B.has(p.knowledge));
const UB = {
  '口算除法': '除数是一位数的除法', '笔算除法': '除数是一位数的除法', '三位数除一位数': '除数是一位数的除法', '除法验算': '除数是一位数的除法', '商中间有0': '除数是一位数的除法', '商末尾有0': '除数是一位数的除法', '除法估算': '除数是一位数的除法',
  '复式统计表': '数据的收集与整理',
  '面积单位': '图形的面积', '长方形面积': '图形的面积', '正方形面积': '图形的面积', '面积单位进率': '图形的面积', '面积实际问题': '图形的面积',
  '年月日': '年、月、日的秘密', '24时计时法': '年、月、日的秘密', '计算经过时间': '年、月、日的秘密',
  '小数初步认识': '小数的初步认识', '小数比较大小': '小数的初步认识', '小数加减法': '小数的初步认识'
};

const NEW_3B = [
  // 生活中的运动现象（平移旋转）
  mk({ id: '3B-MOVE-01', knowledge: '平移', unit: '生活中的运动现象', scene: '教室的窗户装着滑轨，推开时是贴着轨道直直地滑动。', question: '推拉教室的窗户是( )现象。', formula: '', answer: '平移', choices: ['平移', '旋转'], hint: '沿直线移动位置不变的是平移', method: '认识平移旋转',
    variants: [{ question: '拉开抽屉是( )现象。', formula: '', answer: '平移', choices: ['平移', '旋转'], hint: '抽屉沿直线移动' }] }),
  mk({ id: '3B-MOVE-02', knowledge: '旋转', unit: '生活中的运动现象', scene: '广场上的大风车，叶片绕着中心不停地转。', question: '风车的叶片转动是( )现象。', formula: '', answer: '旋转', choices: ['旋转', '平移'], hint: '绕一个点转动是旋转', method: '认识平移旋转',
    variants: [{ question: '钟面上分针的走动是( )现象。', formula: '', answer: '旋转', choices: ['旋转', '平移'], hint: '分针绕中心转' }] }),
  mk({ id: '3B-MOVE-03', knowledge: '平移', unit: '生活中的运动现象', scene: '下面哪些是平移？小明在判断。', question: '下面属于平移的是( )。', formula: '', answer: '电梯上下运动', choices: ['电梯上下运动', '方向盘转动', '车轮滚动'], hint: '沿直线移动的是平移', method: '判断平移旋转',
    variants: [{ question: '下面属于旋转的是( )。', formula: '', answer: '拧开水龙头', choices: ['拧开水龙头', '推拉门', '滑滑梯'], hint: '绕轴转动的是旋转' }] }),
  mk({ id: '3B-MOVE-04', knowledge: '旋转', unit: '生活中的运动现象', scene: '公园里的秋千，坐上去后绕横杆摆来摆去。', question: '荡秋千是( )现象。', formula: '', answer: '旋转', choices: ['旋转', '平移'], hint: '绕固定点摆动属于旋转', method: '认识平移旋转',
    variants: [{ question: '坐缆车上下山是( )现象。', formula: '', answer: '平移', choices: ['平移', '旋转'], hint: '缆车沿轨道直线移动' }] }),
  mk({ id: '3B-MOVE-05', knowledge: '平移', unit: '生活中的运动现象', scene: '周一升旗仪式，国旗顺着旗杆缓缓上升。', question: '升旗时国旗上升是( )现象。', formula: '', answer: '平移', choices: ['平移', '旋转'], hint: '国旗沿直线向上移动', method: '判断平移旋转',
    variants: [{ question: '工厂里的转轮工作是( )现象。', formula: '', answer: '旋转', choices: ['旋转', '平移'], hint: '转轮绕中心转动' }] }),

  // 年、月、日的秘密（补充）
  mk({ id: '3B-YMD-01', knowledge: '年、月、日', unit: '年、月、日的秘密', scene: '一年有 12 个月，分成了 4 个季度。', question: '一年有( )个月。', formula: '', answer: 12, choices: [12, 10, 11, 13], hint: '一年 12 个月', method: '认识年月日',
    variants: [{ question: '一年有( )个季度。', formula: '', answer: 4, choices: [4, 3, 2], hint: '12 个月分成 4 个季度' }] }),
  mk({ id: '3B-YMD-02', knowledge: '年、月、日', unit: '年、月、日的秘密', scene: '日历上，1、3、5、7、8、10、12 月都是大月。', question: '大月每月有( )天。', formula: '', answer: 31, choices: [31, 30, 28, 29], hint: '大月 31 天', method: '认识大小月',
    variants: [{ question: '小月（除 2 月外）每月有( )天。', formula: '', answer: 30, choices: [30, 31, 28], hint: '小月 30 天' }] }),
  mk({ id: '3B-YMD-03', knowledge: '年、月、日', unit: '年、月、日的秘密', scene: '判断闰年：年份能被 4 整除的一般是闰年（整百年除外）。', question: '2024 年是( )年（2 月有 29 天）。', formula: '', answer: '闰', choices: ['闰', '平'], hint: '2024÷4=506 没有余数，是闰年', method: '判断闰年',
    variants: [{ question: '2023 年是( )年。', formula: '', answer: '平', choices: ['平', '闰'], hint: '2023÷4 有余数，是平年' }] }),
  mk({ id: '3B-YMD-04', knowledge: '年、月、日', unit: '年、月、日的秘密', scene: '节日日历上标着儿童节和国庆节。', question: '儿童节是( )月( )日。', formula: '', answer: '6月1日', choices: ['6月1日', '6月6日', '5月1日'], hint: '儿童节 6 月 1 日', method: '记节日',
    variants: [{ question: '国庆节是( )月( )日。', formula: '', answer: '10月1日', choices: ['10月1日', '9月10日', '1月1日'], hint: '国庆节 10 月 1 日' }] }),

  // 复习与关联（3b）
  mk({ id: '3B-REV-01', knowledge: '复习与关联', unit: '复习与关联', scene: '一个长方形鱼塘，长 12 米、宽 8 米。', question: '这个鱼塘的周长是多少米？', formula: '(12 + 8) × 2 = ?', answer: 40, choices: [40, 96, 20, 32], hint: '长方形周长 =（长+宽）×2 =（12+8）×2 = 40 米', method: '周长计算',
    variants: [{ question: '正方形花坛边长 9 米，周长是多少米？', formula: '9 × 4 = ?', answer: 36, hint: '正方形周长=边长×4' }] }),
  mk({ id: '3B-REV-02', knowledge: '复习与关联', unit: '复习与关联', scene: '一块长方形菜地，长 10 米、宽 6 米。', question: '这块菜地的面积是多少平方米？', formula: '10 × 6 = ?', answer: 60, choices: [60, 32, 16, 120], hint: '长方形面积 = 长×宽 = 10×6 = 60 平方米', method: '面积计算',
    variants: [{ question: '正方形手帕边长 5 分米，面积是多少平方分米？', formula: '5 × 5 = ?', answer: 25, hint: '正方形面积=边长×边长' }] })
];

const ORDER_3B = ['生活中的运动现象', '除数是一位数的除法', '长方形和正方形', '图形的面积', '数据的收集与整理', '年、月、日的秘密', '小数的初步认识', '复习与关联'];
const new3bByUnit = {};
NEW_3B.forEach(p => { (new3bByUnit[p.unit] = new3bByUnit[p.unit] || []).push(p); });
const problems3b = [];
ORDER_3B.forEach(u => {
  if (u === '长方形和正方形') {
    movedTo3b.forEach(p => problems3b.push(p));
  } else {
    src3b['3b'].problems.filter(p => UB[p.knowledge] === u).forEach(p => problems3b.push(p));
  }
  (new3bByUnit[u] || []).forEach(p => problems3b.push(p));
});
problems3b.forEach(p => { delete p.unit; });

const data3b = {
  title: '三年级下册·2024版人教版（平移旋转·除数是一位数·长方形和正方形·面积·数据整理·年月中·小数）',
  sub: '数与代数 · 图形与几何 · 统计与概率 · 综合与实践',
  progress: 0,
  units: buildUnits(ORDER_3B),
  problems: problems3b
};

// ---- 生成 units 结构（首单元 current，其余 locked，对应子项同样）----
function buildUnits(names) {
  return names.map((name, i) => ({
    name,
    level: i === 0 ? 'current' : 'locked',
    children: defaultChildren(name, i === 0)
  }));
}
function defaultChildren(name, first) {
  const map = {
    '观察物体(一)': ['从不同位置观察物体', '立体图形与平面图形', '搭一搭、看一看'],
    '混合运算': ['乘加、乘减两步式题', '除加、除减两步式题', '带小括号的两步式题'],
    '毫米、分米和千米': ['毫米的认识', '分米的认识', '千米与米的换算'],
    '曹冲称象的故事（综合实践）': ['克、千克、吨', '等量代换的思想'],
    '多位数乘一位数': ['口算乘法', '笔算乘法（连续进位）', '估算与笔算结合'],
    '数字编码（综合实践）': ['生活中的编码', '设计编码方案'],
    '线和角': ['线段、直线、射线', '直角、锐角、钝角', '平角与周角'],
    '分数的初步认识': ['几分之一', '几分之几', '同分母分数比大小'],
    '复习与关联': ['数与运算', '图形的认识与测量'],
    '生活中的运动现象': ['平移与旋转', '生活中的运动实例'],
    '除数是一位数的除法': ['口算除法', '笔算除法', '商的位数与验算'],
    '长方形和正方形': ['四边形与长、正方形特征', '周长的含义与计算', '周长的应用'],
    '图形的面积': ['面积与面积单位', '长方形、正方形面积', '面积单位间的进率'],
    '数据的收集与整理': ['收集数据', '整理成统计表', '分析数据'],
    '年、月、日的秘密': ['年、月、日的认识', '制作活动日历'],
    '小数的初步认识': ['认识小数', '简单的小数加减法'],
    '复习与关联': ['数与运算', '图形的认识与测量']
  };
  const ch = map[name] || ['知识点'];
  return ch.map((c, j) => ({ name: c, level: (first && j === 0) ? 'current' : 'locked' }));
}

// ---- 写出文件 ----
function serialize(grade, obj) {
  return 'window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};\n' +
    'window.MATH_BY_GRADE["' + grade + '"] = ' + JSON.stringify(obj, null, 4) + ';\n';
}
fs.writeFileSync(path.join(DATA, 'math-data-3a.js'), serialize('3a', data3a), 'utf8');
fs.writeFileSync(path.join(DATA, 'math-data-3b.js'), serialize('3b', data3b), 'utf8');

console.log('✅ 3a 题库已重构：' + problems3a.length + ' 题（保留 ' + retained3a.length + '，新增 ' + NEW_3A.length + '）');
console.log('✅ 3b 题库已重构：' + problems3b.length + ' 题（保留 ' + retained3b.length + '，移入 ' + movedTo3b.length + '，新增 ' + NEW_3B.length + '）');
