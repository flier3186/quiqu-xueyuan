// Generate middle school math data (grades 7-9) and append to math-data.js
var fs = require('fs');

var MIDDLE_SCHOOL = {
  '7a': {
    title: '七年级上册·有理数与代数初步',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    units: [
      { name: '有理数', level: 'current', children: [{ name: '正数与负数', level: 'done' }, { name: '数轴', level: 'current' }, { name: '相反数与绝对值', level: 'locked' }] },
      { name: '有理数的加减法', level: 'locked', children: [{ name: '有理数加法', level: 'locked' }, { name: '有理数减法', level: 'locked' }] },
      { name: '整式的加减', level: 'locked', children: [{ name: '整式概念', level: 'locked' }, { name: '合并同类项', level: 'locked' }] },
      { name: '一元一次方程', level: 'locked', children: [{ name: '方程概念', level: 'locked' }, { name: '解方程', level: 'locked' }] },
    ],
    problems: [
      { scene: '气象站记录一天气温变化：早晨零下5摄氏度，中午上升8摄氏度，傍晚又下降3摄氏度。小明想算出傍晚的温度。', question: '傍晚气温是多少摄氏度？', formula: '-5 + 8 - 3 = ?', answer: 0, choices: [-2, 0, 2, -1], visualType: 'numberLine', visualData: { start: -5, end: 3, points: [{ pos: -5, label: '早晨', color: '#00A896' }, { pos: 3, label: '变化', color: '#F5B800' }], highlight: [-5, 3] }, knowledge: '有理数加减法', difficulty: 2, hint: '先加后减，注意符号' },
      { scene: '学校图书馆借阅统计：本周借阅童话书128本，科技书比童话书多45本，故事书比科技书少23本。老师想知道故事书借了多少本。', question: '故事书借了多少本？', formula: '128 + 45 - 23 = ?', answer: 150, choices: [150, 148, 152, 145], visualType: 'barModel', visualData: { total: 150, parts: [{ label: '童话', val: 128, color: '#00A896' }, { label: '科技', val: 173, color: '#F5B800' }, { label: '故事', val: 150, color: '#FB923C' }] }, knowledge: '整式运算', difficulty: 2, hint: '科技书=128+45，故事书=科技书-23' },
      { scene: '小明用绳子围一个长方形花圃，长12米宽8米。他想算出需要多长的绳子，还要算出花圃的面积。', question: '花圃周长和面积各是多少？', formula: '周长=(12+8)*2=40 面积=12*8=96', answer: 40, choices: [40, 96, 40, 96], visualType: 'geometry', visualData: { shape: 'rectangle', params: { length: 12, width: 8 } }, knowledge: '长方形周长与面积', difficulty: 2, hint: '周长=(长+宽)*2，面积=长*宽' },
      { scene: '某商场促销，一件衣服原价200元，先打八折再减30元。小红妈妈想算算实际应付多少元。', question: '实际应付多少元？', formula: '200*0.8-30 = ?', answer: 130, choices: [130, 140, 120, 150], visualType: 'numberLine', visualData: { start: 0, end: 200, points: [{ pos: 160, label: '八折', color: '#00A896' }, { pos: 130, label: '减30', color: '#FB923C' }] }, knowledge: '百分数应用', difficulty: 3, hint: '先打折再减钱' },
      { scene: '一个数的3倍加5等于20，小明想求出这个数是多少。', question: '这个数是多少？', formula: '3x + 5 = 20, x = ?', answer: 5, choices: [5, 4, 6, 3], visualType: 'barModel', visualData: { total: 20, parts: [{ label: '3倍', val: 15, color: '#00A896' }, { label: '加5', val: 5, color: '#F5B800' }] }, knowledge: '解一元一次方程', difficulty: 2, hint: '先移项再除以系数' },
    ],
  },
  '7b': {
    title: '七年级下册·相交线与平行线·平面直角坐标系',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    units: [
      { name: '相交线与平行线', level: 'current', children: [{ name: '相交线', level: 'done' }, { name: '平行线', level: 'current' }, { name: '判定与性质', level: 'locked' }] },
      { name: '平面直角坐标系', level: 'locked', children: [{ name: '坐标系认识', level: 'locked' }, { name: '点的坐标', level: 'locked' }] },
      { name: '三角形', level: 'locked', children: [{ name: '三角形边关系', level: 'locked' }, { name: '三角形内角和', level: 'locked' }] },
      { name: '多边形', level: 'locked', children: [{ name: '多边形内角和', level: 'locked' }, { name: '外角和', level: 'locked' }] },
    ],
    problems: [
      { scene: '两条平行线被一条直线所截，形成多个角。小明量得其中一个角为65度，想知道对应的同位角和同旁内角各是多少度。', question: '同位角和同旁内角分别是多少度？', formula: '同位角=65 同旁内角=115', answer: 65, choices: [65, 115, 65, 115], visualType: 'geometry', visualData: { shape: 'parallel', params: { angle1: 65, angle2: 115 } }, knowledge: '平行线性质', difficulty: 2, hint: '同位角相等，同旁内角互补' },
      { scene: '在平面直角坐标系中，点A的坐标是(3,4)，点B的坐标是(6,8)。小红想算出这两点之间的距离。', question: 'A、B两点距离是多少？', formula: 'sqrt((6-3)^2+(8-4)^2) = ?', answer: 5, choices: [4, 5, 6, 7], visualType: 'numberLine', visualData: { start: 0, end: 10, points: [{ pos: 5, label: 'AB距离', color: '#00A896' }] }, knowledge: '两点间距离公式', difficulty: 3, hint: '距离=sqrt(横差^2+纵差^2)' },
      { scene: '一个三角形的两个内角分别是45度和60度，小明想知道第三个角是多少度。', question: '第三个角是多少度？', formula: '180 - 45 - 60 = ?', answer: 75, choices: [75, 65, 85, 55], visualType: 'geometry', visualData: { shape: 'triangle', params: { angles: [45, 60, 75] } }, knowledge: '三角形内角和', difficulty: 2, hint: '三角形内角和180度' },
      { scene: '小明用24米长的栅栏围一个长方形菜地，长是宽的2倍少1米。他想算出菜地的长和宽各是多少。', question: '菜地的长和宽各是多少米？', formula: '2(x+2x-1)=24, x=4', answer: 4, choices: [4, 5, 3, 6], visualType: 'barModel', visualData: { total: 24, parts: [{ label: '宽', val: 4, color: '#00A896' }, { label: '长', val: 7, color: '#F5B800' }] }, knowledge: '一元一次方程应用', difficulty: 3, hint: '宽=x，长=2x-1，周长=2(长+宽)' },
      { scene: '一个n边形的内角和是1080度，小红想知道这是几边形。', question: '这是几边形？', formula: '(n-2)*180=1080, n=8', answer: 8, choices: [8, 6, 10, 7], visualType: 'geometry', visualData: { shape: 'polygon', params: { sides: 8 } }, knowledge: '多边形内角和', difficulty: 3, hint: '内角和=(n-2)*180度' },
    ],
  },
  '8a': {
    title: '八年级上册·二次根式·勾股定理',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    units: [
      { name: '二次根式', level: 'current', children: [{ name: '二次根式概念', level: 'done' }, { name: '二次根式运算', level: 'current' }, { name: '最简二次根式', level: 'locked' }] },
      { name: '勾股定理', level: 'locked', children: [{ name: '勾股定理发现', level: 'locked' }, { name: '勾股定理应用', level: 'locked' }] },
      { name: '实数', level: 'locked', children: [{ name: '无理数', level: 'locked' }, { name: '实数运算', level: 'locked' }] },
      { name: '全等三角形', level: 'locked', children: [{ name: '全等判定', level: 'locked' }, { name: '性质应用', level: 'locked' }] },
    ],
    problems: [
      { scene: '小明想计算一个直角三角形斜边的长度，已知两条直角边分别是3厘米和4厘米。', question: '斜边长度是多少厘米？', formula: 'sqrt(3^2+4^2) = ?', answer: 5, choices: [5, 6, 7, 4], visualType: 'geometry', visualData: { shape: 'triangle', params: { sides: [3, 4, 5], rightAngle: true } }, knowledge: '勾股定理', difficulty: 2, hint: '斜边^2=直角边1^2+直角边2^2' },
      { scene: '一个长方体箱子长8分米、宽6分米、高2分米。小红想知道最长的木棍能放进箱子里多长。', question: '最长木棍多少分米？', formula: 'sqrt(8^2+6^2+2^2) ≈ ?', answer: 0, choices: [9, 10, 10.2, 11], visualType: 'geometry', visualData: { shape: 'box', params: { l: 8, w: 6, h: 2 } }, knowledge: '空间勾股定理', difficulty: 3, hint: '先算底面对角线再算空间对角线' },
      { scene: '小明计算sqrt(50)+sqrt(8)-sqrt(18)，想知道结果是多少。', question: 'sqrt(50)+sqrt(8)-sqrt(18) = ?', formula: '5sqrt(2)+2sqrt(2)-3sqrt(2)=4sqrt(2)', answer: 0, choices: [0, 1, 2, 3], visualType: 'barModel', visualData: { total: 4, parts: [{ label: 'sqrt(50)', val: 5, color: '#00A896' }, { label: 'sqrt(8)', val: 2, color: '#F5B800' }, { label: 'sqrt(18)', val: -3, color: '#FB923C' }] }, knowledge: '二次根式运算', difficulty: 3, hint: '先化简再合并' },
      { scene: '一个等腰三角形底边长为10厘米，腰长为13厘米。小明想算出底边上的高。', question: '底边上的高是多少厘米？', formula: 'sqrt(13^2-5^2) = ?', answer: 12, choices: [11, 12, 13, 10], visualType: 'geometry', visualData: { shape: 'triangle', params: { base: 10, side: 13 } }, knowledge: '勾股定理应用', difficulty: 3, hint: '底边一半是5，用勾股定理求高' },
      { scene: '比较sqrt(15)和3.9的大小，小明想知道哪个更大。', question: '哪个更大？', formula: '3.9^2=15.21 > 15', answer: 1, choices: [0, 1, 2, 3], visualType: 'numberLine', visualData: { start: 3, end: 4, points: [{ pos: 3.873, label: 'sqrt(15)', color: '#00A896' }, { pos: 3.9, label: '3.9', color: '#FB923C' }] }, knowledge: '实数比较', difficulty: 2, hint: '3.9^2=15.21>15，所以3.9>sqrt(15)' },
    ],
  },
  '8b': {
    title: '八年级下册·分式·反比例函数',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    units: [
      { name: '分式', level: 'current', children: [{ name: '分式概念', level: 'done' }, { name: '分式运算', level: 'current' }, { name: '分式方程', level: 'locked' }] },
      { name: '反比例函数', level: 'locked', children: [{ name: '反比例函数图像', level: 'locked' }, { name: '反比例函数性质', level: 'locked' }] },
      { name: '四边形', level: 'locked', children: [{ name: '平行四边形', level: 'locked' }, { name: '矩形菱形正方形', level: 'locked' }] },
      { name: '数据的分析', level: 'locked', children: [{ name: '平均数中位数', level: 'locked' }, { name: '方差', level: 'locked' }] },
    ],
    problems: [
      { scene: '小明解分式方程 2/x = 1/(x-3)，想知道x的值是多少。', question: '方程的解是多少？', formula: '2(x-3) = x, x = ?', answer: 6, choices: [6, 3, 2, 9], visualType: 'numberLine', visualData: { start: 0, end: 10, points: [{ pos: 6, label: 'x', color: '#00A896' }] }, knowledge: '分式方程', difficulty: 3, hint: '交叉相乘再解方程，注意验根' },
      { scene: '已知反比例函数 y = 12/x，当 x = 4 时 y 等于多少？', question: '当 x=4 时 y=?', formula: 'y = 12/4 = ?', answer: 3, choices: [3, 4, 8, 48], visualType: 'barModel', visualData: { total: 12, parts: [{ label: 'x', val: 4, color: '#00A896' }, { label: 'y', val: 3, color: '#F5B800' }] }, knowledge: '反比例函数', difficulty: 2, hint: '代入x值求y' },
      { scene: '一个平行四边形的底是8厘米，高是5厘米。小红想算出它的面积，以及如果底增加2厘米面积增加多少。', question: '原面积和增加面积各是多少？', formula: '原面积=40, 增加=10', answer: 40, choices: [40, 50, 40, 10], visualType: 'geometry', visualData: { shape: 'parallelogram', params: { base: 8, height: 5 } }, knowledge: '平行四边形面积', difficulty: 2, hint: '面积=底*高' },
      { scene: '一组数据：12, 15, 18, 20, 25。小明想算出这组数据的平均数和中位数。', question: '平均数和中位数分别是多少？', formula: '平均数=18, 中位数=18', answer: 18, choices: [18, 18, 18, 20], visualType: 'barModel', visualData: { total: 18, parts: [{ label: '平均数', val: 18, color: '#00A896' }, { label: '中位数', val: 18, color: '#F5B800' }] }, knowledge: '数据的集中趋势', difficulty: 2, hint: '平均数=总和/个数，中位数是中间的数' },
      { scene: '小明计算 (a^2*b)^3 / (a*b)^2，化简结果是多少？', question: '化简结果是多少？', formula: 'a^6*b^3/a^2*b^2 = a^4*b', answer: 0, choices: [0, 1, 2, 3], visualType: 'barModel', visualData: { total: 1, parts: [{ label: '结果', val: 1, color: '#00A896' }] }, knowledge: '整式运算', difficulty: 3, hint: '先算乘方再算除法，同底数幂相除指数相减' },
    ],
  },
  '9a': {
    title: '九年级上册·一元二次方程·二次函数',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    units: [
      { name: '一元二次方程', level: 'current', children: [{ name: '方程概念', level: 'done' }, { name: '因式分解法', level: 'current' }, { name: '求根公式', level: 'locked' }] },
      { name: '二次函数', level: 'locked', children: [{ name: '二次函数图像', level: 'locked' }, { name: '二次函数性质', level: 'locked' }] },
      { name: '旋转', level: 'locked', children: [{ name: '旋转性质', level: 'locked' }, { name: '中心对称', level: 'locked' }] },
      { name: '圆', level: 'locked', children: [{ name: '圆的认识', level: 'locked' }, { name: '弧长与扇形', level: 'locked' }] },
    ],
    problems: [
      { scene: '小明解方程 x^2 - 5x + 6 = 0，想知道两个根分别是多少。', question: '方程的两个根是多少？', formula: '(x-2)(x-3)=0, x1=2 x2=3', answer: 0, choices: [0, 1, 2, 3], visualType: 'numberLine', visualData: { start: 0, end: 6, points: [{ pos: 2, label: 'x1', color: '#00A896' }, { pos: 3, label: 'x2', color: '#F5B800' }] }, knowledge: '一元二次方程', difficulty: 2, hint: '因式分解 (x-2)(x-3)=0' },
      { scene: '一个抛物线形拱桥，跨度20米，最高点离水面8米。小红想建立坐标系求抛物线方程。', question: '抛物线顶点坐标是多少？', formula: '顶点=(10,8)', answer: 0, choices: [0, 1, 2, 3], visualType: 'geometry', visualData: { shape: 'parabola', params: { vertex: [10, 8], width: 20 } }, knowledge: '二次函数图像', difficulty: 3, hint: '跨度20米，顶点在中间上方8米' },
      { scene: '小明把一根长40厘米的铁丝弯成一个矩形，使面积最大。他想算出这个矩形的长和宽。', question: '面积最大时长和宽各是多少？', formula: '长=宽=10, 面积=100', answer: 100, choices: [100, 90, 110, 80], visualType: 'geometry', visualData: { shape: 'rectangle', params: { length: 10, width: 10 } }, knowledge: '二次函数最值', difficulty: 3, hint: '周长固定时正方形面积最大' },
      { scene: '一个圆的半径是5厘米，小明想算出它的周长和面积。', question: '圆的周长和面积各是多少？', formula: '周长=10*pi约31.4, 面积=25*pi约78.5', answer: 25, choices: [25, 50, 75, 100], visualType: 'geometry', visualData: { shape: 'circle', params: { radius: 5 } }, knowledge: '圆的周长与面积', difficulty: 2, hint: 'C=2*pi*r, S=pi*r^2' },
      { scene: '小明将点A(2,3)绕原点顺时针旋转90度，想知道旋转后的坐标。', question: '旋转后的坐标是多少？', formula: '(x,y)->(y,-x), (2,3)->(3,-2)', answer: 0, choices: [0, 1, 2, 3], visualType: 'numberLine', visualData: { start: 0, end: 5, points: [{ pos: 2, label: 'A', color: '#00A896' }, { pos: 3, label: "A'", color: '#F5B800' }] }, knowledge: '图形旋转', difficulty: 3, hint: '顺时针90度：(x,y)->(y,-x)' },
    ],
  },
  '9b': {
    title: '九年级下册·反比例函数综合·锐角三角函数',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    units: [
      { name: '反比例函数综合', level: 'current', children: [{ name: '图像与性质', level: 'done' }, { name: '与一次函数综合', level: 'current' }, { name: '实际应用', level: 'locked' }] },
      { name: '锐角三角函数', level: 'locked', children: [{ name: '正弦余弦正切', level: 'locked' }, { name: '特殊角三角函数值', level: 'locked' }] },
      { name: '投影与视图', level: 'locked', children: [{ name: '三视图', level: 'locked' }, { name: '投影', level: 'locked' }] },
      { name: '随机事件的概率', level: 'locked', children: [{ name: '概率概念', level: 'locked' }, { name: '列表法与树状图', level: 'locked' }] },
    ],
    problems: [
      { scene: '已知反比例函数 y = k/x 的图像经过点 (2, 3)，求 k 的值以及当 x = 6 时 y 的值。', question: 'k 和 x=6 时的 y 分别是多少？', formula: 'k=2*3=6, y=6/6=1', answer: 1, choices: [1, 2, 3, 0.5], visualType: 'barModel', visualData: { total: 1, parts: [{ label: 'k', val: 6, color: '#00A896' }, { label: 'y(x=6)', val: 1, color: '#F5B800' }] }, knowledge: '反比例函数', difficulty: 2, hint: 'k=xy，代入点坐标' },
      { scene: '小明站在离楼30米的地方，测得楼顶的仰角为30度。他想算出楼的高度（忽略观测者身高）。', question: '楼高约多少米？', formula: 'h = 30 * tan30度 ≈ ?', answer: 0, choices: [0, 1, 2, 3], visualType: 'geometry', visualData: { shape: 'triangle', params: { base: 30, angle: 30 } }, knowledge: '锐角三角函数', difficulty: 3, hint: 'tan30度=sqrt(3)/3约0.577' },
      { scene: '一个不透明袋子里有3个红球和2个白球，小明随机摸出一个球，想知道摸到红球的概率。', question: '摸到红球的概率是多少？', formula: 'P(红) = 3/5', answer: 3, choices: [3, 2, 5, 1], visualType: 'barModel', visualData: { total: 5, parts: [{ label: '红球', val: 3, color: '#00A896' }, { label: '白球', val: 2, color: '#F5B800' }] }, knowledge: '概率计算', difficulty: 2, hint: '概率=目标结果数/总结果数' },
      { scene: '小明画一个几何体的三视图：主视图是长方形，俯视图是圆，左视图是长方形。他想判断这个几何体是什么。', question: '这个几何体是什么？', formula: '主视图+俯视图+左视图', answer: 0, choices: [0, 1, 2, 3], visualType: 'geometry', visualData: { shape: 'cylinder', params: {} }, knowledge: '三视图与几何体', difficulty: 2, hint: '俯视图是圆说明底面是圆形' },
      { scene: '已知反比例函数 y = 6/x 和一次函数 y = x + 1，小明想求它们的交点坐标。', question: '交点坐标是什么？', formula: '6/x = x+1, x^2+x-6=0', answer: 0, choices: [0, 1, 2, 3], visualType: 'numberLine', visualData: { start: -4, end: 4, points: [{ pos: -3, label: '交点1', color: '#00A896' }, { pos: 2, label: '交点2', color: '#F5B800' }] }, knowledge: '函数交点', difficulty: 3, hint: '联立方程，解一元二次方程' },
    ],
  },
};

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Read existing math-data.js
var existing = fs.readFileSync('data/math-data.js', 'utf8');

// Find the closing of the MATH_BY_GRADE object
var lastGradeEnd = existing.lastIndexOf('};');
if (lastGradeEnd === -1) {
  console.log('ERROR: Could not find MATH_BY_GRADE closing');
  process.exit(1);
}

// Generate new grade entries
var newEntries = '';
for (var grade in MIDDLE_SCHOOL) {
  var data = MIDDLE_SCHOOL[grade];
  var gradeName = '';
  if (grade === '7a') gradeName = '七年级上册';
  else if (grade === '7b') gradeName = '七年级下册';
  else if (grade === '8a') gradeName = '八年级上册';
  else if (grade === '8b') gradeName = '八年级下册';
  else if (grade === '9a') gradeName = '九年级上册';
  else gradeName = '九年级下册';

  var unitsStr = data.units.map(function(u) {
    var childrenStr = u.children.map(function(c) { return "{name:'" + esc(c.name) + "',level:'" + c.level + "'}"; }).join(',');
    return "      {name:'" + esc(u.name) + "',level:'" + u.level + "',children:[" + childrenStr + "]}";
  }).join(',\n');

  var problemsStr = data.problems.map(function(p) {
    var vd = JSON.stringify(p.visualData);
    var result = "      {scene:'" + esc(p.scene) + "',question:'" + esc(p.question) + "',formula:'" + esc(p.formula) + "',answer:" + p.answer + ",choices:[" + p.choices.join(',') + "],visualType:'" + p.visualType + "',visualData:" + vd + ",knowledge:'" + esc(p.knowledge) + "',difficulty:" + p.difficulty + ",hint:'" + esc(p.hint) + "'";
    if (p.variants) {
      result += ",variants:[" + p.variants.map(function(v) {
        return "{question:'" + esc(v.question) + "',formula:'" + esc(v.formula) + "',answer:" + v.answer + ",hint:'" + esc(v.hint) + "'}";
      }).join(',') + "]";
    }
    result += "}";
    return result;
  }).join(',\n');

  newEntries += "  // ========== " + gradeName + "（" + grade + "）" + data.title.split('\u00b7')[1] || '' + " ==========\n";
  newEntries += "  '" + grade + "':{\n";
  newEntries += "    title:'" + esc(data.title) + "',\n";
  newEntries += "    sub:'" + esc(data.sub) + "',\n";
  newEntries += "    progress:" + data.progress + ",\n";
  newEntries += "    units:[\n" + unitsStr + "\n    ],\n";
  newEntries += "    problems:[\n" + problemsStr + "\n    ],\n";
  newEntries += "  },\n";
}

// Insert new entries before the closing };
var before = existing.substring(0, lastGradeEnd);
var after = existing.substring(lastGradeEnd);
var result = before + newEntries + after;

fs.writeFileSync('data/math-data.js', result, 'utf8');
console.log('Appended grades:', Object.keys(MIDDLE_SCHOOL).join(', '));

// Verify syntax
try {
  require('./math-data.js');
  console.log('Syntax OK');
} catch(e) {
  console.log('SYNTAX ERROR:', e.message);
}

// Count
var count = 0;
for (var g in MIDDLE_SCHOOL) {
  var block = result.match(new RegExp("'"+g+"':[\\s\\S]*?problems:\\[(.+?)\\]", 'i'));
  if (block) count += (block[1].match(/\{scene:/g) || []).length;
}
console.log('New problems added:', count);
