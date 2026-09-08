/**
 * 按 2026 年 9 月人教版（2024 版）新教材重构数学题库
 * 依据：人教新旧教材十二册目录对比（2024 秋一年级 → 2026 秋四、五、六年级全面替换）
 *
 * 本脚本：
 *   1. 提取 index.html 中的 var MATH_BY_GRADE 块
 *   2. 在对象层面应用补丁（更新 units 为新版目录、替换/新增与新教材冲突或新增单元的题目）
 *   3. 序列化回写
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.dirname(path.dirname(__filename));
const HTML = path.join(ROOT, 'index.html');

// ---------- 1. 提取原块 ----------
const html = fs.readFileSync(HTML, 'utf8');
const anchor = html.indexOf('var MATH_BY_GRADE');
if (anchor < 0) { console.error('未找到 MATH_BY_GRADE'); process.exit(1); }
const braceIdx = html.indexOf('{', anchor);

function balanced(text) {
  let depth = 0, inStr = false, esc = false, inCmt = false;
  const b = 0;
  for (let i = b; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (inCmt) { if (c === '\n') inCmt = false; continue; }
    if (inStr) { if (esc) { esc = false; continue; } if (c === '\\') { esc = true; continue; } if (c === "'") inStr = false; continue; }
    if (c === '/' && n === '/') { inCmt = true; continue; }
    if (c === "'") { inStr = true; continue; }
    if (c === '{') depth++;
    if (c === '}') { depth--; if (depth === 0) return text.slice(0, i + 1); }
  }
  return null;
}
const blockText = balanced(html.slice(braceIdx));
if (!blockText) { console.error('括号不平衡'); process.exit(1); }
const M = eval('(' + blockText + ')');

// ---------- 2. 新版教材单元目录（2024 版人教版） ----------
const NEW_UNITS = {
  // 三上（2025 秋已启用新版）
  '3a': [
    ['观察物体', [['从不同位置观察物体', 'done'], ['立体图形与平面图形', 'current'], ['搭一搭、看一看', 'locked']], 'current'],
    ['混合运算', [['乘加、乘减两步式题', 'done'], ['除加、除减两步式题', 'current'], ['带小括号的两步式题', 'locked']], 'current'],
    ['毫米、分米和千米', [['毫米的认识', 'current'], ['分米的认识', 'locked'], ['千米与米的换算', 'locked']], 'locked'],
    ['曹冲称象的故事（综合实践）', [['克、千克、吨', 'locked'], ['等量代换的思想', 'locked']], 'locked'],
    ['多位数乘一位数', [['口算乘法', 'locked'], ['笔算乘法（连续进位）', 'locked'], ['估算与笔算结合', 'locked']], 'locked'],
    ['数字编码（综合实践）', [['生活中的编码', 'locked'], ['设计编码方案', 'locked']], 'locked'],
    ['线和角', [['线段、直线、射线', 'locked'], ['直角、锐角、钝角', 'locked'], ['平角与周角', 'locked']], 'locked'],
    ['分数的初步认识', [['几分之一', 'locked'], ['几分之几', 'locked'], ['同分母分数比大小', 'locked']], 'locked'],
    ['复习与关联', [['数与运算', 'locked'], ['图形的认识与测量', 'locked']], 'locked']
  ],
  // 三下（2027 春启用新版，提前同步）
  '3b': [
    ['生活中的运动现象', [['平移与旋转', 'current'], ['生活中的运动实例', 'locked']], 'current'],
    ['除数是一位数的除法', [['口算除法', 'done'], ['笔算除法', 'current'], ['商的位数与验算', 'locked']], 'current'],
    ['长方形和正方形', [['四边形与长、正方形特征', 'done'], ['周长的含义与计算', 'current'], ['周长的应用', 'locked']], 'current'],
    ['图形的面积', [['面积与面积单位', 'locked'], ['长方形、正方形面积', 'locked'], ['面积单位间的进率', 'locked']], 'locked'],
    ['数据的收集与整理', [['收集数据', 'locked'], ['整理成统计表', 'locked'], ['分析数据', 'locked']], 'locked'],
    ['年、月、日的秘密（综合实践）', [['年、月、日的认识', 'locked'], ['制作活动日历', 'locked']], 'locked'],
    ['小数的初步认识', [['认识小数', 'locked'], ['简单的小数加减法', 'locked']], 'locked'],
    ['复习与关联', [['数与运算', 'locked'], ['图形的认识与测量', 'locked']], 'locked']
  ],
  // 四上（2026 秋启用新版 ★本学期）
  '4a': [
    ['万以上数的认识', [['亿以内数的认识', 'done'], ['亿以上数的认识', 'done'], ['大小比较、改写与近似数', 'current']], 'current'],
    ['1亿有多大（综合实践）', [['猜想—实验—推理', 'current'], ['大数的实际感受', 'locked']], 'locked'],
    ['角的度量', [['线段、直线、射线', 'current'], ['角的分类（旋转定义）', 'current'], ['量角与画角', 'locked']], 'locked'],
    ['多位数乘两位数', [['口算乘法', 'locked'], ['笔算乘法（106×63 型）', 'locked'], ['积的变化规律', 'locked']], 'locked'],
    ['加法模型和乘法模型', [['加法模型：总量=分量+分量', 'locked'], ['乘法模型：单价×数量=总价', 'locked'], ['乘法模型：速度×时间=路程', 'locked']], 'locked'],
    ['平行四边形和梯形', [['平行与垂直', 'locked'], ['平行四边形与梯形的特征', 'locked'], ['四边形的关系', 'locked']], 'locked'],
    ['条形统计图', [['单式条形统计图', 'locked'], ['复式条形统计图', 'locked'], ['数据分析与预测', 'locked']], 'locked'],
    ['寻找宝藏（综合实践）', [['方向与位置', 'locked'], ['绘制藏宝图', 'locked']], 'locked'],
    ['复习与关联', [['数与运算', 'locked'], ['数量关系', 'locked'], ['图形的认识与测量', 'locked'], ['数学广角：鸡兔同笼', 'locked']], 'locked']
  ],
  // 四下（2027 春启用新版，提前同步）
  '4b': [
    ['除数是两位数的除法', [['口算除法', 'current'], ['笔算除法与试商', 'current'], ['商的变化规律', 'locked']], 'current'],
    ['混合运算和运算律', [['四则混合运算顺序', 'done'], ['加法、乘法运算律', 'current'], ['简便运算', 'locked']], 'current'],
    ['三角形', [['三角形的特性', 'locked'], ['三角形的分类', 'locked'], ['三角形的内角和', 'locked']], 'locked'],
    ['小数的认识', [['小数的意义', 'locked'], ['小数的性质', 'locked'], ['小数点移动与单位换算', 'locked']], 'locked'],
    ['小数的加法和减法', [['小数加减法', 'locked'], ['小数加减混合运算', 'locked']], 'locked'],
    ['平均数', [['平均数的意义', 'locked'], ['求平均数', 'locked'], ['用平均数分析数据', 'locked']], 'locked'],
    ['制订旅游计划（综合实践）', [['收集信息与预算', 'locked'], ['方案设计与优化', 'locked']], 'locked'],
    ['复习与关联', [['数与运算', 'locked'], ['数量关系', 'locked'], ['图形的认识与测量', 'locked']], 'locked']
  ],
  // 五上（2026 秋启用新版 ★本学期）
  '5a': [
    ['观察简单组合体', [['从不同方向观察组合体', 'current'], ['根据视图搭立体图形', 'locked']], 'current'],
    ['小数乘法', [['小数乘整数', 'done'], ['小数乘小数', 'current'], ['积的近似数与估算', 'locked']], 'current'],
    ['小数除法', [['除数是整数的小数除法', 'locked'], ['一个数除以小数', 'locked'], ['循环小数与近似商', 'locked']], 'locked'],
    ['图形的运动', [['轴对称', 'locked'], ['平移', 'locked'], ['旋转', 'locked']], 'locked'],
    ['用字母表示数和数量关系', [['用字母表示数', 'locked'], ['表示数量关系', 'locked'], ['代入求值', 'locked']], 'locked'],
    ['多边形的面积', [['底和高的认识', 'locked'], ['平行四边形、三角形、梯形的面积', 'locked'], ['组合图形的面积', 'locked']], 'locked'],
    ['有趣的密铺（综合实践）', [['密铺的条件', 'locked'], ['设计密铺图案', 'locked']], 'locked'],
    ['可能性', [['可能性的大小', 'locked'], ['游戏公平性', 'locked']], 'locked'],
    ['复习与关联', [['数与运算', 'locked'], ['数量关系', 'locked'], ['图形的位置与测量', 'locked'], ['数学广角：植树问题', 'locked']], 'locked']
  ],
  // 五下（2027 春启用新版，提前同步）
  '5b': [
    ['因数和倍数', [['因数与倍数', 'done'], ['2、5、3 的倍数特征', 'current'], ['质数与合数', 'locked']], 'current'],
    ['分数的认识', [['分数的意义', 'locked'], ['分数与除法', 'locked'], ['分数的基本性质', 'locked']], 'locked'],
    ['分数的加法和减法', [['同分母分数加减', 'locked'], ['异分母分数加减', 'locked'], ['分数加减混合', 'locked']], 'locked'],
    ['长方体和正方体', [['长方体的认识', 'locked'], ['表面积', 'locked'], ['体积与容积', 'locked']], 'locked'],
    ['度量衡的故事（综合实践）', [['古代长度、容量、质量单位', 'locked'], ['单位换算与换算思想', 'locked']], 'locked'],
    ['折线统计图', [['单式折线统计图', 'locked'], ['复式折线统计图', 'locked'], ['数据分析与预测', 'locked']], 'locked'],
    ['复习与关联', [['数与运算', 'locked'], ['图形的认识与测量', 'locked'], ['数据的收集与表达', 'locked']], 'locked']
  ],
  // 六上（2026 秋启用新版 ★本学期）
  '6a': [
    ['确定位置', [['用有序数对确定位置', 'current'], ['用方向和距离确定位置', 'current'], ['生活中的定位应用', 'locked']], 'current'],
    ['分数乘法', [['分数乘整数', 'done'], ['分数乘分数', 'current'], ['分数、小数混合与运算律', 'locked']], 'current'],
    ['分数除法', [['倒数的认识', 'locked'], ['分数除以整数、除以分数', 'locked'], ['利用抽象"1"解决问题', 'locked']], 'locked'],
    ['生活中的负数（综合实践）', [['寻找负数', 'locked'], ['认识负数', 'locked'], ['应用负数', 'locked']], 'locked'],
    ['圆', [['圆和扇形的认识', 'locked'], ['圆的周长', 'locked'], ['圆的面积（数格子推导）', 'locked']], 'locked'],
    ['体育中的数学（综合实践）', [['选择体育问题', 'locked'], ['收集分析数据', 'locked'], ['交流分享', 'locked']], 'locked'],
    ['百分数', [['百分数的意义', 'locked'], ['百分数与分数、小数的互化', 'locked'], ['求百分率、折扣与利率', 'locked']], 'locked'],
    ['水是生命之源（综合实践）', [['状况调查', 'locked'], ['方案设计', 'locked'], ['交流展示', 'locked']], 'locked'],
    ['复习与关联', [['数与运算', 'locked'], ['图形的认识与测量', 'locked'], ['数据的收集与表达', 'locked'], ['数学广角：鸽巢问题', 'locked']], 'locked']
  ],
  // 六下（2027 春启用新版，提前同步）
  '6b': [
    ['比和比例关系', [['比的意义与基本性质', 'current'], ['比例的意义与基本性质', 'current'], ['正反比例、比例尺', 'locked']], 'current'],
    ['扇形统计图', [['扇形统计图的认识', 'locked'], ['从扇形图读信息与决策', 'locked']], 'locked'],
    ['圆柱和圆锥', [['圆柱的认识与表面积', 'locked'], ['圆柱的体积', 'locked'], ['圆锥的体积', 'locked']], 'locked'],
    ['有趣的平衡（综合实践）', [['杠杆平衡的条件', 'locked'], ['反比例关系的初步体验', 'locked']], 'locked'],
    ['校园平面图（综合实践）', [['测量与比例尺应用', 'locked'], ['绘制平面图', 'locked']], 'locked'],
    ['营养午餐（综合实践）', [['热量与营养搭配', 'locked'], ['方案设计', 'locked']], 'locked'],
    ['总复习', [['数与代数', 'locked'], ['图形与几何', 'locked'], ['统计与概率', 'locked'], ['综合与实践', 'locked']], 'locked']
  ]
};

// ---------- 3. 题目补丁：新教材不一致项 ----------
// 说明：只列出"新增/重写"的题目；保留题仅改 knowledge 字段以对齐新版单元名。
const NEW_PROBLEMS = {
  // ===== 三年级上册（新版已启用）：原 6 题中 5 题已移出（万以内加减法→二下、时分秒→二下、
  //      长方形和正方形→三下、两位数乘两位数→三下删除后并入四上多位数乘两位数）=====
  '3a': {
    0: { // 原「万以内进位加法」→「混合运算（乘加两步式题）」
      scene: '文具店里一支钢笔6元，一个笔记本4元。小明要买3支钢笔和1个笔记本，他先在心里算一算一共要花多少钱，再决定带多少钱出门。',
      question: '一共要付多少元？',
      formula: '3 × 6 + 4 = ?',
      answer: 22,
      choices: [18, 22, 24, 26],
      visualType: 'barModel',
      visualData: { parts: [{ label: '3支钢笔', val: 18, color: '#00A896' }, { label: '1个笔记本', val: 4, color: '#F5B800' }], total: 22 },
      knowledge: '混合运算（乘加两步）',
      difficulty: 2,
      hint: '先算乘法 3×6=18，再算加法 18+4=22（先乘除后加减）',
      variants: [
        { question: '买5支铅笔（每支2元）和1块橡皮（3元），一共多少元？', formula: '5 × 2 + 3 = ?', answer: 13, hint: '先算 5×2=10，再算 10+3=13' },
        { question: '买4个面包（每个5元），付给售货员30元，应找回多少元？', formula: '30 - 4 × 5 = ?', answer: 10, hint: '先算 4×5=20，再算 30-20=10' }
      ]
    },
    1: { // 原「万以内退位减法」→「多位数乘一位数（连续进位）」
      scene: '学校图书室新购进一批科普书，每包213本，一共进了4包。图书管理员要登记这批新书的总本数，再给它们编上架号。',
      question: '这批新书一共有多少本？',
      formula: '213 × 4 = ?',
      answer: 852,
      choices: [842, 852, 862, 8052],
      visualType: 'barModel',
      visualData: { parts: [{ label: '前2包', val: 426, color: '#00A896' }, { label: '后2包', val: 426, color: '#F5B800' }], total: 852 },
      knowledge: '多位数乘一位数',
      difficulty: 3,
      hint: '拆开算：200×4=800，13×4=52，合起来 800+52=852',
      variants: [
        { question: '每箱饮料128瓶，买了3箱，一共多少瓶？', formula: '128 × 3 = ?', answer: 384, hint: '100×3=300，28×3=84，300+84=384' },
        { question: '一台电风扇245元，买3台需要多少元？', formula: '245 × 3 = ?', answer: 735, hint: '200×3=600，45×3=135，600+135=735' }
      ]
    },
    2: { // 原「两位数乘两位数」→「毫米、分米和千米」
      scene: '周末全家去郊外游玩，导航显示从家到目的地有3千米。爸爸问小明：你知道3千米是多少米吗？小明想起数学课上学的长度单位换算。',
      question: '3千米合多少米？',
      formula: '3 × 1000 = ? (米)',
      answer: 3000,
      choices: [300, 3000, 30, 30000],
      visualType: 'numberLine',
      visualData: { start: 0, end: 3, points: [{ pos: 1, label: '1千米=1000米', color: '#00A896' }, { pos: 3, label: '3千米', color: '#F5B800' }], highlight: [0, 3] },
      knowledge: '毫米、分米和千米',
      difficulty: 2,
      hint: '1千米=1000米，3千米就是3个1000米，也就是3000米',
      variants: [
        { question: '5千米合多少米？', formula: '5 × 1000 = ? (米)', answer: 5000, hint: '5×1000=5000' },
        { question: '4000米合多少千米？', formula: '4000 ÷ 1000 = ? (千米)', answer: 4, hint: '1000米=1千米，4000里有4个1000' }
      ]
    },
    3: { // 原「经过时间的计算（时分秒已移出）」→「线和角」
      scene: '数学课上老师用活动角演示：把角的一条边绕着顶点旋转，转出的角越来越大。转到半圈时停下，老师说这时的角叫平角。',
      question: '平角是多少度？',
      formula: '360 ÷ 2 = ?（平角）',
      answer: 180,
      choices: [90, 180, 360, 45],
      visualType: 'numberLine',
      visualData: { start: 0, end: 360, points: [{ pos: 0.25, label: '直角90°', color: '#00A896' }, { pos: 0.5, label: '平角180°', color: '#F5B800' }, { pos: 1, label: '周角360°', color: '#FB923C' }], highlight: [0, 0.5] },
      knowledge: '线和角',
      difficulty: 2,
      hint: '平角是周角的一半：360÷2=180（度）；平角也等于2个直角',
      variants: [
        { question: '2个直角合起来是多少度？', formula: '90 × 2 = ?（度）', answer: 180, hint: '90×2=180，正好是一个平角' },
        { question: '周角360°是直角90°的几倍？', formula: '360 ÷ 90 = ?', answer: 4, hint: '360÷90=4' }
      ]
    },
    // 索引 4 = 分数的初步认识（保留，仅改 knowledge）
    5: { // 原「长方形周长（已移至三下）」→「曹冲称象的故事（质量单位）」
      scene: '课堂上老师讲曹冲称象的故事：把大象赶上船，看船下沉到画线处；再往船上装石头，装到船下沉到同一位置。每筐石头重500千克，一共装了6筐。',
      question: '这头大象重多少千克？',
      formula: '500 × 6 = ?（千克）',
      answer: 3000,
      choices: [300, 3000, 3300, 600],
      visualType: 'barModel',
      visualData: { parts: [{ label: '前3筐石头', val: 1500, color: '#00A896' }, { label: '后3筐石头', val: 1500, color: '#F5B800' }], total: 3000 },
      knowledge: '曹冲称象的故事（质量单位）',
      difficulty: 3,
      hint: '石头的总质量就是大象的质量：500×6=3000（千克）',
      variants: [
        { question: '每筐石头400千克，装了8筐，大象重多少千克？', formula: '400 × 8 = ?（千克）', answer: 3200, hint: '400×8=3200' },
        { question: '大象重2吨（2000千克），每筐石头500千克，需要几筐？', formula: '2000 ÷ 500 = ?（筐）', answer: 4, hint: '2000÷500=4' }
      ]
    }
  },

  // ===== 三年级下册（新版）：原「两位数乘两位数」已删除并入四上；「搭配（二）」已删除 =====
  '3b': {
    1: { // 原「两位数乘两位数」→「长方形和正方形的周长」（由三上移入）
      scene: '社区要在花园里修一个长方形花坛，长8米、宽5米。工人师傅要在花坛四周围上一圈栅栏，先要算一算需要多长的栅栏。',
      question: '花坛的周长是多少米？',
      formula: '(8 + 5) × 2 = ?',
      answer: 26,
      choices: [13, 26, 40, 21],
      visualType: 'geometry',
      visualData: { shape: 'rectangle', params: { length: 8, width: 5 } },
      knowledge: '长方形和正方形的周长',
      difficulty: 2,
      hint: '长方形周长 =（长+宽）×2 =（8+5）×2 = 26 米',
      variants: [
        { question: '正方形花坛边长6米，周长是多少米？', formula: '6 × 4 = ?', answer: 24, hint: '正方形周长=边长×4' },
        { question: '长方形花坛长12米、宽7米，周长是多少米？', formula: '(12 + 7) × 2 = ?', answer: 38, hint: '（12+7）×2=38' }
      ]
    },
    5: { // 原「搭配问题（已删除）」→「数据的收集与整理」
      scene: '老师调查了三(1)班同学最喜欢的课外活动，把结果整理成统计表：读书14人、踢球9人、画画12人。',
      question: '喜欢读书和画画的共有多少人？',
      formula: '14 + 12 = ?',
      answer: 26,
      choices: [23, 25, 26, 35],
      visualType: 'barModel',
      visualData: { parts: [{ label: '读书', val: 14, color: '#00A896' }, { label: '画画', val: 12, color: '#F5B800' }], total: 26 },
      knowledge: '数据的收集与整理',
      difficulty: 2,
      hint: '从统计表中找出读书14人、画画12人，合起来 14+12=26',
      variants: [
        { question: '喜欢踢球和画画的相差多少人？', formula: '12 - 9 = ?', answer: 3, hint: '12-9=3' },
        { question: '喜欢这三项活动的共有多少人？', formula: '14 + 9 + 12 = ?', answer: 35, hint: '14+9+12=35' }
      ]
    }
  },

  // ===== 四年级上册（2026 秋新版 ★）：删除公顷和平方千米、除数是两位数的除法、优化 =====
  '4a': {
    1: { // 原「23×45（两位数乘两位数）」→「多位数乘两位数」（新版代表例题 106×63 型）
      scene: '学校要为图书馆配一批新书，每套书106元。教务处王老师要购进63套，需要先算出总金额再向财务报账。',
      question: '一共需要多少元？',
      formula: '106 × 63 = ?',
      answer: 6678,
      choices: [6636, 6678, 6738, 6360],
      visualType: 'barModel',
      visualData: { parts: [{ label: '60套', val: 6360, color: '#00A896' }, { label: '3套', val: 318, color: '#F5B800' }], total: 6678 },
      knowledge: '多位数乘两位数',
      difficulty: 3,
      hint: '106×63 = 106×60 + 106×3 = 6360 + 318 = 6678；中间有0也要参与计算',
      variants: [
        { question: '每套208元，买34套，一共多少元？', formula: '208 × 34 = ?', answer: 7072, hint: '208×30=6240，208×4=832，6240+832=7072' },
        { question: '每套校服125元，买24套，一共多少元？', formula: '125 × 24 = ?', answer: 3000, hint: '125×20=2500，125×4=500，2500+500=3000' }
      ]
    },
    2: { // 原「大数加减法」→「加法模型和乘法模型」（新版核心新增单元）
      scene: '超市里每盒牛奶售价12元，妈妈买了8盒。收银员阿姨说，像"每件多少元、买了几件、一共多少元"这样的数量关系，可以用一个乘法模型来表示。',
      question: '一共要花多少元？（单价 × 数量 = 总价）',
      formula: '12 × 8 = ?',
      answer: 96,
      choices: [20, 84, 96, 108],
      visualType: 'barModel',
      visualData: { parts: [{ label: '5盒', val: 60, color: '#00A896' }, { label: '3盒', val: 36, color: '#F5B800' }], total: 96 },
      knowledge: '乘法模型（单价×数量=总价）',
      difficulty: 2,
      hint: '乘法模型：每份数 × 份数 = 总数。这里 单价12 × 数量8 = 总价96',
      variants: [
        { question: '汽车每小时行60千米，行了3小时，一共行了多少千米？（速度×时间=路程）', formula: '60 × 3 = ?', answer: 180, hint: '速度×时间=路程，60×3=180' },
        { question: '图书角男生捐书18本、女生捐书15本，一共捐了多少本？（总量=分量+分量）', formula: '18 + 15 = ?', answer: 33, hint: '加法模型：总量=分量+分量，18+15=33' }
      ]
    },
    4: { // 原「平行四边形面积（新版四上不学面积，只学边和角特征）」→「平行四边形和梯形的特征」
      scene: '数学课上老师拿出一个平行四边形框架，让同学们量一量边的长度：相邻的两条边分别是8厘米和5厘米。老师说平行四边形对边相等，让大家算周长。',
      question: '这个平行四边形的周长是多少厘米？',
      formula: '(8 + 5) × 2 = ?',
      answer: 26,
      choices: [13, 21, 26, 40],
      visualType: 'geometry',
      visualData: { shape: 'parallelogram', params: { base: 8, height: 4, side: 5 } },
      knowledge: '平行四边形和梯形的特征',
      difficulty: 2,
      hint: '平行四边形对边相等，周长 =（8+5）×2 = 26 厘米',
      variants: [
        { question: '等腰梯形上底6厘米、下底10厘米、两腰各5厘米，周长是多少厘米？', formula: '6 + 10 + 5 × 2 = ?', answer: 26, hint: '6+10+5+5=26' },
        { question: '平行四边形相邻两边分别是9厘米和7厘米，周长是多少厘米？', formula: '(9 + 7) × 2 = ?', answer: 32, hint: '（9+7）×2=32' }
      ]
    },
    5: { // 原「梯形面积」→「鸡兔同笼」（由四下移入四上复习与关联）
      scene: '农场里有鸡和兔子关在一起，数一数头共有10个，脚共有28只。饲养员想算出鸡和兔子各有多少只，这是古代《孙子算经》里的名题。',
      question: '兔子有多少只？',
      formula: '(28 - 10×2) ÷ (4 - 2) = ?',
      answer: 4,
      choices: [3, 4, 6, 8],
      visualType: 'barModel',
      visualData: { parts: [{ label: '鸡的脚数', val: 12, color: '#00A896' }, { label: '兔的脚数', val: 16, color: '#F5B800' }], total: 28 },
      knowledge: '数学广角：鸡兔同笼',
      difficulty: 4,
      hint: '假设都是鸡：10×2=20 只脚，多出 28-20=8 只脚，每把一只鸡换成兔多2只脚，8÷2=4 只兔',
      variants: [
        { question: '头共8个，脚共26只，兔子有多少只？', formula: '(26 - 8×2) ÷ (4 - 2) = ?', answer: 5, hint: '26-16=10，10÷2=5' },
        { question: '鸡兔同笼，头共12个，脚共32只，鸡有多少只？', formula: '(12×4 - 32) ÷ (4 - 2) = ?', answer: 8, hint: '假设都是兔：48-32=16，16÷2=8只鸡' }
      ]
    }
  },

  // ===== 四年级下册（新版）：三角形改学内角和；新增除数是两位数的除法（由四上移入）=====
  '4b': {
    2: { // 原「三角形面积（新版四下不学面积）」→「三角形的内角和」
      scene: '美术课上同学们量出一个三角形的两个内角分别是50°和60°。老师说，无论什么形状的三角形，三个内角加起来都是一个固定的度数。',
      question: '第三个内角是多少度？',
      formula: '180 - 50 - 60 = ?',
      answer: 70,
      choices: [60, 70, 80, 110],
      visualType: 'numberBond',
      visualData: { parts: [{ label: '∠1', val: 50, color: '#00A896' }, { label: '∠2', val: 60, color: '#F5B800' }, { label: '∠3', val: 70, color: '#FB923C' }], total: 180 },
      knowledge: '三角形的内角和',
      difficulty: 2,
      hint: '三角形内角和是180°，180-50-60=70（度）',
      variants: [
        { question: '直角三角形的一个锐角是35°，另一个锐角是多少度？', formula: '180 - 90 - 35 = ?', answer: 55, hint: '直角90°，180-90-35=55' },
        { question: '等腰三角形的顶角是40°，一个底角是多少度？', formula: '(180 - 40) ÷ 2 = ?', answer: 70, hint: '两个底角相等：（180-40）÷2=70' }
      ]
    },
    5: { // 原「鸡兔同笼（已移至四上）」→「除数是两位数的除法」（由四上移入四下）
      scene: '学校买来576本练习本，要平均分给18个班。后勤老师要先算出每班分到多少本，再安排分发。',
      question: '每个班分到多少本？',
      formula: '576 ÷ 18 = ?',
      answer: 32,
      choices: [28, 30, 32, 34],
      visualType: 'barModel',
      visualData: { parts: [{ label: '10个班', val: 320, color: '#00A896' }, { label: '8个班', val: 256, color: '#F5B800' }], total: 576 },
      knowledge: '除数是两位数的除法',
      difficulty: 3,
      hint: '576÷18：想 18×30=540，余36，18×2=36，所以商 30+2=32',
      variants: [
        { question: '912本练习本平均分给24个班，每班多少本？', formula: '912 ÷ 24 = ?', answer: 38, hint: '24×38=912' },
        { question: '750本图书平均分给25个班，每班多少本？', formula: '750 ÷ 25 = ?', answer: 30, hint: '25×30=750' }
      ]
    }
  },

  // ===== 五年级上册（2026 秋新版 ★）：「简易方程」删除解方程，改为用字母表示数和数量关系 =====
  '5a': {
    2: { // 原「解方程 x+15=40」→「用字母表示数和数量关系」（新版：只列关系式、代入求值，不解方程）
      scene: '文具店里的笔记本每本 a 元，小明买了5本。老师说：总价可以用 a×5 来表示，写成 5a；如果每本12元，就把 a=12 代进去算一算。',
      question: '当 a = 12 时，一共要付多少元？',
      formula: '5a = 5 × 12 = ?',
      answer: 60,
      choices: [17, 50, 60, 72],
      visualType: 'barModel',
      visualData: { parts: [{ label: '2本', val: 24, color: '#00A896' }, { label: '3本', val: 36, color: '#F5B800' }], total: 60 },
      knowledge: '用字母表示数和数量关系',
      difficulty: 3,
      hint: '数量关系：总价 = 单价×数量 = a×5 = 5a；把 a=12 代入，5×12=60',
      variants: [
        { question: '苹果每千克 b 元，买3千克，当 b=8 时一共多少元？', formula: '3b = 3 × 8 = ?', answer: 24, hint: '3×8=24' },
        { question: '长方形长 x 厘米、宽5厘米，周长是 (x+5)×2，当 x=10 时周长是多少？', formula: '(10 + 5) × 2 = ?', answer: 30, hint: '（10+5）×2=30' }
      ]
    }
  },

  // ===== 五年级下册（新版）：数学广角「找次品」删除，新增综合实践「度量衡的故事」=====
  '5b': {
    5: { // 原「找次品（新版删除）」→「度量衡的故事」（新版综合实践）
      scene: '"度量衡的故事"课堂上，老师讲古代的长度单位：一尺大约相当于现在的23厘米。同学们要算一算古书里说的"三尺"有多长。',
      question: '3尺大约是多少厘米？',
      formula: '23 × 3 = ?',
      answer: 69,
      choices: [63, 69, 76, 230],
      visualType: 'numberLine',
      visualData: { start: 0, end: 3, points: [{ pos: 1, label: '1尺≈23厘米', color: '#00A896' }, { pos: 3, label: '3尺', color: '#F5B800' }], highlight: [0, 3] },
      knowledge: '度量衡的故事（单位换算）',
      difficulty: 2,
      hint: '1尺≈23厘米，3尺就是3个23厘米：23×3=69',
      variants: [
        { question: '古代一石约60千克，5石约多少千克？', formula: '60 × 5 = ?', answer: 300, hint: '60×5=300' },
        { question: '一寸约3厘米，9寸约多少厘米？', formula: '3 × 9 = ?', answer: 27, hint: '3×9=27' }
      ]
    }
  },

  // ===== 六年级上册（2026 秋新版 ★）：删除"比""扇形统计图"；新增确定位置、生活中的负数 =====
  '6a': {
    2: { // 原「比的认识（新版移至六下比和比例关系）」→「确定位置（有序数对）」
      scene: '电影院里的座位用有序数对表示，(3,5) 表示第3列第5行。小红坐在 (4,2)，小亮坐在她正右方的第3个座位。',
      question: '小亮的座位用数对表示，列数是几？',
      formula: '4 + 3 = ?（列）',
      answer: 7,
      choices: [3, 5, 6, 7],
      visualType: 'numberBond',
      visualData: { parts: [{ label: '小红的列', val: 4, color: '#00A896' }, { label: '向右移', val: 3, color: '#F5B800' }], total: 7 },
      knowledge: '确定位置（有序数对）',
      difficulty: 2,
      hint: '数对第一个数表示列，向右移列数增加：4+3=7，小亮坐在 (7,2)',
      variants: [
        { question: '小明在 (2,6)，向正后方（行数增加）移2个位置，行数是几？', formula: '6 + 2 = ?（行）', answer: 8, hint: '数对第二个数表示行，6+2=8' },
        { question: '(5,3) 与 (5,7) 在同一列，它们相隔几行？', formula: '7 - 3 = ?', answer: 4, hint: '同一列，行相减：7-3=4' }
      ]
    },
    5: { // 原「扇形统计图（新版移至六下）」→「生活中的负数」（由六下前置于六上综合实践）
      scene: '冬天北方很冷，某天的最低气温降到零下5℃，最高气温是3℃。小红看天气预报，想知道这一天到底冷到什么程度，就算了算温差。',
      question: '这一天的温差是多少℃？',
      formula: '3 - (-5) = ?',
      answer: 8,
      choices: [-8, 2, 5, 8],
      visualType: 'numberLine',
      visualData: { start: -5, end: 3, points: [{ pos: 0, label: '-5℃（最低）', color: '#00A896' }, { pos: 1, label: '3℃（最高）', color: '#FB923C' }], highlight: [0, 1] },
      knowledge: '生活中的负数',
      difficulty: 2,
      hint: '温差 = 最高气温 - 最低气温 = 3-（-5）= 8（℃）；减去一个负数等于加上它',
      variants: [
        { question: '最低气温零下8℃，最高气温2℃，温差是多少℃？', formula: '2 - (-8) = ?', answer: 10, hint: '2+8=10' },
        { question: '收入500元记作+500元，支出300元记作-300元，结余多少元？', formula: '500 + (-300) = ?', answer: 200, hint: '500-300=200' }
      ]
    }
  },

  // ===== 六年级下册（新版）：负数、百分数（二）已上移至六上；新增比和比例关系、扇形统计图、有趣的平衡 =====
  '6b': {
    0: { // 原「负数（新版上移至六上）」→「比和比例关系」（由六上移入，原 6a#3 化简比题）
      scene: '六(1)班男生12人，女生18人。老师让同学们写出男女生人数比，并化成最简整数比，体会"比"表示两个量之间的倍数关系。',
      question: '男女生人数比化简后，前项与后项之和是多少？',
      formula: '12 : 18 = 2 : 3，2 + 3 = ?',
      answer: 5,
      choices: [5, 6, 15, 30],
      visualType: 'numberBond',
      visualData: { parts: [{ label: '男生', val: 12, color: '#00A896' }, { label: '女生', val: 18, color: '#F5B800' }], total: 30 },
      knowledge: '比和比例关系',
      difficulty: 3,
      hint: '12:18 同时除以6得 2:3，前项与后项之和 2+3=5',
      variants: [
        { question: '20:35 化成最简比，前项与后项之和是多少？', formula: '20 : 35 = 4 : 7，4 + 7 = ?', answer: 11, hint: '同除以5得4:7，4+7=11' },
        { question: '甲数16、乙数24，甲乙两数的最简比的后项是多少？', formula: '16 : 24 = 2 : 3，后项 = ?', answer: 3, hint: '同除以8得2:3，后项是3' }
      ]
    },
    // 索引 1..4 重排：圆柱体积、圆锥体积、比例尺、扇形统计图
    1: null, 2: null, // 占位：由重排逻辑处理
    5: { // 原「抽屉原理（新版上移至六上数学广角）」→「有趣的平衡」（新版六下新增综合实践）
      scene: '科学课上做杠杆平衡实验：左边距离支点2格处挂3个钩码。老师说，要让杠杆平衡，两边"钩码数×格数"必须相等。',
      question: '右边距离支点3格处应挂几个钩码？',
      formula: '3 × 2 ÷ 3 = ?',
      answer: 2,
      choices: [2, 3, 4, 6],
      visualType: 'numberBond',
      visualData: { parts: [{ label: '左边：3×2', val: 6, color: '#00A896' }, { label: '右边：2×3', val: 6, color: '#F5B800' }], total: 12 },
      knowledge: '有趣的平衡（反比例）',
      difficulty: 4,
      hint: '钩码数×格数相等才平衡：左边 3×2=6，右边 ?×3=6，所以挂 2 个',
      variants: [
        { question: '左边4个钩码距支点3格，右边距支点2格，应挂几个？', formula: '4 × 3 ÷ 2 = ?', answer: 6, hint: '4×3=12，12÷2=6' },
        { question: '左边5个钩码距支点4格，右边距支点5格，应挂几个？', formula: '5 × 4 ÷ 5 = ?', answer: 4, hint: '5×4=20，20÷5=4' }
      ]
    }
  }
};

// 6b 需要重排：原顺序 [负数, 折扣, 圆柱体积, 比例尺, 圆锥体积, 抽屉原理]
// 新版顺序 [比和比例关系, 圆柱体积, 圆锥体积, 比例尺, 扇形统计图, 有趣的平衡]
const REORDER_6B = ['new0', 'old2', 'old4', 'old3', 'from6a5', 'new5'];

// ---------- 4. 应用补丁 ----------
let changed = 0;

// 4.1 先取出 6a 的旧题（扇形统计图）供 6b 复用
const old6a5 = JSON.parse(JSON.stringify(M['6a'].problems[5]));   // 扇形统计图
const old6b2 = JSON.parse(JSON.stringify(M['6b'].problems[2]));   // 圆柱体积
const old6b3 = JSON.parse(JSON.stringify(M['6b'].problems[3]));   // 比例尺
const old6b4 = JSON.parse(JSON.stringify(M['6b'].problems[4]));   // 圆锥体积

// 4.2 更新 units
for (const [g, list] of Object.entries(NEW_UNITS)) {
  if (!M[g]) { console.warn('年级不存在:', g); continue; }
  M[g].units = list.map(([name, children, level]) => ({
    name,
    level,
    children: children.map(([cn, cl]) => ({ name: cn, level: cl }))
  }));
  changed++;
}

// 4.3 逐题补丁
for (const [g, patch] of Object.entries(NEW_PROBLEMS)) {
  for (const [idxStr, np] of Object.entries(patch)) {
    const idx = +idxStr;
    if (!np) continue;
    if (!M[g] || !M[g].problems[idx]) { console.warn('题目不存在:', g, idx); continue; }
    M[g].problems[idx] = Object.assign({}, M[g].problems[idx], np);
    changed++;
  }
}
// 清理 6b 的 null 占位（不生效）
delete NEW_PROBLEMS['6b'][1];
delete NEW_PROBLEMS['6b'][2];

// 4.4 6b 重排
const new6b = [
  M['6b'].problems[0],   // 新版：比和比例关系（已由 4.3 替换）
  old6b2,                // 圆柱体积
  old6b4,                // 圆锥体积
  old6b3,                // 比例尺
  old6a5,                // 扇形统计图（由六上移入）
  M['6b'].problems[5]    // 有趣的平衡（已由 4.3 替换）
];
M['6b'].problems = new6b;

// 4.5 保留题的 knowledge 对齐新版单元名
const KNOW_FIX = {
  '3a': { 4: '分数的初步认识' },
  '3b': { 0: '除数是一位数的除法', 2: '图形的面积', 3: '小数的初步认识', 4: '年、月、日的秘密' },
  '4a': { 0: '万以上数的认识', 3: '角的度量' },
  '4b': { 0: '混合运算和运算律', 1: '小数的认识', 3: '小数的加法和减法', 4: '平均数' },
  '5a': { 0: '小数乘法', 1: '小数除法', 3: '多边形的面积·三角形', 4: '多边形的面积·平行四边形', 5: '数学广角：植树问题' },
  '5b': { 0: '因数和倍数', 1: '长方体和正方体的体积', 2: '分数的认识', 3: '分数的加法和减法', 4: '折线统计图' },
  '6a': { 0: '分数乘法', 1: '分数除法', 3: '圆的周长', 4: '百分数' },
  '6b': { 1: '圆柱的体积', 2: '圆锥的体积', 3: '比例尺', 4: '扇形统计图' }
};
for (const [g, m] of Object.entries(KNOW_FIX)) {
  for (const [i, k] of Object.entries(m)) {
    if (M[g] && M[g].problems[+i]) { M[g].problems[+i].knowledge = k; changed++; }
  }
}

// ---------- 5. 回写 ----------
const newBlock = 'var MATH_BY_GRADE = ' + JSON.stringify(M, null, 2) + ';';
const before = html.slice(0, anchor);
const after = html.slice(braceIdx + blockText.length);
const newHtml = before + newBlock + after;
fs.writeFileSync(HTML, newHtml, 'utf8');

console.log('✅ 重构完成，共修改条目:', changed);
for (const [g, d] of Object.entries(M)) {
  console.log('  ' + g + ': units ' + d.units.length + ' 个单元 / ' + d.problems.length + ' 主题 ' +
    d.problems.reduce((s, p) => s + (p.variants || []).length, 0) + ' 变式');
}
