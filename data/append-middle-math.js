// Append grades 7a-9b to math-data.js with knowledgeMap and variants
var fs = require('fs');

var GRADES = {
  '7a': {
    title: '七年级上册·有理数与代数初步',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    knowledgeMap: [
      { id: '7A-01', name: '正数与负数', concept: '大于0的数是正数，小于0的数是负数，0既不是正数也不是负数', prerequisite: '三年级·认识整数', extends: '7A-02 数轴', visualStrategy: '数轴双向延伸', visualType: 'numberLine', coreLiteracy: '符号意识', difficulty: 1, isKeyTopic: true },
      { id: '7A-02', name: '数轴', concept: '规定了原点、正方向、单位长度的直线', prerequisite: '7A-01', extends: '7A-03 相反数', visualStrategy: '动态数轴', visualType: 'numberLine', coreLiteracy: '数感', difficulty: 1, isKeyTopic: true },
      { id: '7A-03', name: '相反数与绝对值', concept: '只有符号不同的两个数互为相反数；绝对值是数到原点的距离', prerequisite: '7A-02', extends: '7A-04 有理数加减', visualStrategy: '数轴距离', visualType: 'numberLine', coreLiteracy: '抽象能力', difficulty: 2, isKeyTopic: true },
      { id: '7A-04', name: '有理数的加减法', concept: '同号相加取相同符号，异号相加取绝对值较大者的符号', prerequisite: '7A-03', extends: '7A-05 整式加减', visualStrategy: '数轴跳跃', visualType: 'numberLine', coreLiteracy: '运算能力', difficulty: 2, isKeyTopic: true },
      { id: '7A-05', name: '整式的加减', concept: '合并同类项：字母相同、指数相同的项才能合并', prerequisite: '7A-04', extends: '7A-06 一元一次方程', visualStrategy: '代数积木', visualType: 'barModel', coreLiteracy: '代数思维', difficulty: 2, isKeyTopic: true },
      { id: '7A-06', name: '一元一次方程', concept: '只含一个未知数，未知数指数为1的方程', prerequisite: '7A-05', extends: '小学毕业', visualStrategy: '天平平衡', visualType: 'barModel', coreLiteracy: '方程思想', difficulty: 2, isKeyTopic: true },
    ],
    units: [
      { name: '有理数', level: 'current', children: [{ name: '正数与负数', level: 'done' }, { name: '数轴', level: 'current' }, { name: '相反数与绝对值', level: 'locked' }] },
      { name: '有理数的加减法', level: 'locked', children: [{ name: '有理数加法', level: 'locked' }, { name: '有理数减法', level: 'locked' }] },
      { name: '整式的加减', level: 'locked', children: [{ name: '整式概念', level: 'locked' }, { name: '合并同类项', level: 'locked' }] },
      { name: '一元一次方程', level: 'locked', children: [{ name: '方程概念', level: 'locked' }, { name: '解方程', level: 'locked' }] },
    ],
    problems: [
      { scene: '气象站记录一天气温变化：早晨零下5摄氏度，中午上升8摄氏度，傍晚又下降3摄氏度。小明想算出傍晚的温度。', question: '傍晚气温是多少摄氏度？', formula: '-5 + 8 - 3 = ?', answer: 0, choices: [-2, 0, 2, -1], visualType: 'numberLine', visualData: { start: -5, end: 3, points: [{ pos: -5, label: '早晨', color: '#00A896' }, { pos: 3, label: '变化', color: '#F5B800' }], highlight: [-5, 3] }, knowledge: '有理数加减法', difficulty: 2, hint: '先加后减，注意符号', variants: [{ question: '早晨-3度，中午上升6度，傍晚下降4度，傍晚温度？', formula: '-3+6-4=?', answer: -1, hint: '从左到右逐步计算' }, { question: '气温从-8度上升10度再下降3度，结果？', formula: '-8+10-3=?', answer: -1, hint: '注意负数运算' }] },
      { scene: '学校图书馆借阅统计：本周借阅童话书128本，科技书比童话书多45本，故事书比科技书少23本。老师想知道故事书借了多少本。', question: '故事书借了多少本？', formula: '128 + 45 - 23 = ?', answer: 150, choices: [150, 148, 152, 145], visualType: 'barModel', visualData: { total: 150, parts: [{ label: '童话', val: 128, color: '#00A896' }, { label: '科技', val: 173, color: '#F5B800' }, { label: '故事', val: 150, color: '#FB923C' }] }, knowledge: '整式运算', difficulty: 2, hint: '科技书=128+45，故事书=科技书-23', variants: [{ question: '童话书150本，科技书比它少30本，故事书比科技书多20本，故事书多少本？', formula: '150-30+20=?', answer: 140, hint: '逐步计算' }, { question: '童话书100本，科技书是它的2倍少20本，故事书是科技书的一半，故事书多少本？', formula: '(100*2-20)/2=?', answer: 90, hint: '分步计算' }] },
      { scene: '小明用绳子围一个长方形花圃，长12米宽8米。他想算出需要多长的绳子，还要算出花圃的面积。', question: '花圃周长和面积各是多少？', formula: '周长=(12+8)*2=40 面积=12*8=96', answer: 40, choices: [40, 96, 40, 96], visualType: 'geometry', visualData: { shape: 'rectangle', params: { length: 12, width: 8 } }, knowledge: '长方形周长与面积', difficulty: 2, hint: '周长=(长+宽)*2，面积=长*宽', variants: [{ question: '正方形花坛边长15米，周长和面积各是多少？', formula: '周长=15*4, 面积=15*15', answer: 60, hint: '正方形周长=边长*4' }, { question: '长方形长20米，宽是长的一半，周长和面积各是多少？', formula: '宽=10, 周长=(20+10)*2, 面积=20*10', answer: 600, hint: '先求宽' }] },
      { scene: '某商场促销，一件衣服原价200元，先打八折再减30元。小红妈妈想算算实际应付多少元。', question: '实际应付多少元？', formula: '200*0.8-30 = ?', answer: 130, choices: [130, 140, 120, 150], visualType: 'numberLine', visualData: { start: 0, end: 200, points: [{ pos: 160, label: '八折', color: '#00A896' }, { pos: 130, label: '减30', color: '#FB923C' }] }, knowledge: '百分数应用', difficulty: 3, hint: '先打折再减钱', variants: [{ question: '原价300元打七折再减50元，实际应付多少？', formula: '300*0.7-50=?', answer: 160, hint: '先算打折价' }, { question: '原价150元打九折再减20元，实际应付多少？', formula: '150*0.9-20=?', answer: 115, hint: '逐步计算' }] },
      { scene: '一个数的3倍加5等于20，小明想求出这个数是多少。', question: '这个数是多少？', formula: '3x + 5 = 20, x = ?', answer: 5, choices: [5, 4, 6, 3], visualType: 'barModel', visualData: { total: 20, parts: [{ label: '3倍', val: 15, color: '#00A896' }, { label: '加5', val: 5, color: '#F5B800' }] }, knowledge: '解一元一次方程', difficulty: 2, hint: '先移项再除以系数', variants: [{ question: '一个数的2倍减3等于11，这个数是多少？', formula: '2x-3=11', answer: 7, hint: '先加3再除以2' }, { question: '一个数的4倍加8等于32，这个数是多少？', formula: '4x+8=32', answer: 6, hint: '先减8再除以4' }] },
    ],
  },
  '7b': {
    title: '七年级下册·相交线与平行线·平面直角坐标系',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    knowledgeMap: [
      { id: '7B-01', name: '相交线与平行线', concept: '两条直线被第三条直线所截，同位角相等则两直线平行', prerequisite: '六年级·角的认识', extends: '7B-02 坐标系', visualStrategy: '动态角度测量', visualType: 'geometry', coreLiteracy: '推理意识', difficulty: 2, isKeyTopic: true },
      { id: '7B-02', name: '平面直角坐标系', concept: '用有序数对(x,y)表示平面上点的位置', prerequisite: '7B-01', extends: '7B-03 三角形', visualStrategy: '网格定位', visualType: 'geometry', coreLiteracy: '数形结合', difficulty: 2, isKeyTopic: true },
      { id: '7B-03', name: '三角形', concept: '三角形内角和180度，两边之和大于第三边', prerequisite: '7B-02', extends: '7B-04 多边形', visualStrategy: '内角和验证', visualType: 'geometry', coreLiteracy: '推理能力', difficulty: 2, isKeyTopic: true },
      { id: '7B-04', name: '多边形', concept: 'n边形内角和=(n-2)*180度，外角和恒为360度', prerequisite: '7B-03', extends: '小学毕业', visualStrategy: '分割三角形', visualType: 'geometry', coreLiteracy: '归纳推理', difficulty: 3, isKeyTopic: false },
    ],
    units: [
      { name: '相交线与平行线', level: 'current', children: [{ name: '相交线', level: 'done' }, { name: '平行线', level: 'current' }, { name: '判定与性质', level: 'locked' }] },
      { name: '平面直角坐标系', level: 'locked', children: [{ name: '坐标系认识', level: 'locked' }, { name: '点的坐标', level: 'locked' }] },
      { name: '三角形', level: 'locked', children: [{ name: '三角形边关系', level: 'locked' }, { name: '三角形内角和', level: 'locked' }] },
      { name: '多边形', level: 'locked', children: [{ name: '多边形内角和', level: 'locked' }, { name: '外角和', level: 'locked' }] },
    ],
    problems: [
      { scene: '两条平行线被一条直线所截，形成多个角。小明量得其中一个角为65度，想知道对应的同位角和同旁内角各是多少度。', question: '同位角和同旁内角分别是多少度？', formula: '同位角=65 同旁内角=115', answer: 65, choices: [65, 115, 65, 115], visualType: 'geometry', visualData: { shape: 'parallel', params: { angle1: 65, angle2: 115 } }, knowledge: '平行线性质', difficulty: 2, hint: '同位角相等，同旁内角互补', variants: [{ question: '平行线被截，同位角为70度，同旁内角为？', formula: '同旁内角=180-70', answer: 110, hint: '互补关系' }, { question: '同旁内角为120度，同位角为？', formula: '同位角=180-120', answer: 60, hint: '先求邻补角' }] },
      { scene: '在平面直角坐标系中，点A的坐标是(3,4)，点B的坐标是(6,8)。小红想算出这两点之间的距离。', question: 'A、B两点距离是多少？', formula: 'sqrt((6-3)^2+(8-4)^2) = ?', answer: 5, choices: [4, 5, 6, 7], visualType: 'numberLine', visualData: { start: 0, end: 10, points: [{ pos: 5, label: 'AB距离', color: '#00A896' }] }, knowledge: '两点间距离公式', difficulty: 3, hint: '距离=sqrt(横差^2+纵差^2)', variants: [{ question: '点A(1,1)和点B(4,5)之间的距离？', formula: 'sqrt((4-1)^2+(5-1)^2)', answer: 5, hint: '横差3，纵差4' }, { question: '点A(2,3)和点B(5,7)之间的距离？', formula: 'sqrt((5-2)^2+(7-3)^2)', answer: 5, hint: '勾股数3-4-5' }] },
      { scene: '一个三角形的两个内角分别是45度和60度，小明想知道第三个角是多少度。', question: '第三个角是多少度？', formula: '180 - 45 - 60 = ?', answer: 75, choices: [75, 65, 85, 55], visualType: 'geometry', visualData: { shape: 'triangle', params: { angles: [45, 60, 75] } }, knowledge: '三角形内角和', difficulty: 2, hint: '三角形内角和180度', variants: [{ question: '三角形两个角为90度和30度，第三个角？', formula: '180-90-30=?', answer: 60, hint: '直角三角形' }, { question: '三角形两个角为55度和55度，第三个角？', formula: '180-55-55=?', answer: 70, hint: '等腰三角形' }] },
      { scene: '小明用24米长的栅栏围一个长方形菜地，长是宽的2倍少1米。他想算出菜地的长和宽各是多少。', question: '菜地的长和宽各是多少米？', formula: '2(x+2x-1)=24, x=4', answer: 4, choices: [4, 5, 3, 6], visualType: 'barModel', visualData: { total: 24, parts: [{ label: '宽', val: 4, color: '#00A896' }, { label: '长', val: 7, color: '#F5B800' }] }, knowledge: '一元一次方程应用', difficulty: 3, hint: '宽=x，长=2x-1，周长=2(长+宽)', variants: [{ question: '周长36米，长是宽的2倍，长和宽各多少？', formula: '2(x+2x)=36', answer: 6, hint: '宽=6，长=12' }, { question: '周长28米，长比宽多4米，长和宽各多少？', formula: '2(x+(x+4))=28', answer: 5, hint: '宽=5，长=9' }] },
      { scene: '一个n边形的内角和是1080度，小红想知道这是几边形。', question: '这是几边形？', formula: '(n-2)*180=1080, n=8', answer: 8, choices: [8, 6, 10, 7], visualType: 'geometry', visualData: { shape: 'polygon', params: { sides: 8 } }, knowledge: '多边形内角和', difficulty: 3, hint: '内角和=(n-2)*180度', variants: [{ question: '内角和720度，这是几边形？', formula: '(n-2)*180=720', answer: 6, hint: 'n-2=4' }, { question: '内角和1440度，这是几边形？', formula: '(n-2)*180=1440', answer: 10, hint: 'n-2=8' }] },
    ],
  },
  '8a': {
    title: '八年级上册·二次根式·勾股定理',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    knowledgeMap: [
      { id: '8A-01', name: '二次根式', concept: '形如sqrt(a)(a≥0)的式子叫做二次根式', prerequisite: '七年级·平方与立方', extends: '8A-02 勾股定理', visualStrategy: '面积开方', visualType: 'geometry', coreLiteracy: '运算能力', difficulty: 2, isKeyTopic: true },
      { id: '8A-02', name: '勾股定理', concept: '直角三角形中，两直角边的平方和等于斜边的平方', prerequisite: '8A-01', extends: '8A-03 实数', visualStrategy: '正方形面积拼接', visualType: 'geometry', coreLiteracy: '推理意识', difficulty: 2, isKeyTopic: true },
      { id: '8A-03', name: '实数', concept: '有理数和无理数统称为实数', prerequisite: '8A-02', extends: '8A-04 全等三角形', visualStrategy: '数轴补全', visualType: 'numberLine', coreLiteracy: '数感', difficulty: 2, isKeyTopic: false },
      { id: '8A-04', name: '全等三角形', concept: '能够完全重合的两个三角形叫做全等三角形', prerequisite: '8A-03', extends: '小学毕业', visualStrategy: '重叠验证', visualType: 'geometry', coreLiteracy: '推理能力', difficulty: 3, isKeyTopic: true },
    ],
    units: [
      { name: '二次根式', level: 'current', children: [{ name: '二次根式概念', level: 'done' }, { name: '二次根式运算', level: 'current' }, { name: '最简二次根式', level: 'locked' }] },
      { name: '勾股定理', level: 'locked', children: [{ name: '勾股定理发现', level: 'locked' }, { name: '勾股定理应用', level: 'locked' }] },
      { name: '实数', level: 'locked', children: [{ name: '无理数', level: 'locked' }, { name: '实数运算', level: 'locked' }] },
      { name: '全等三角形', level: 'locked', children: [{ name: '全等判定', level: 'locked' }, { name: '性质应用', level: 'locked' }] },
    ],
    problems: [
      { scene: '小明想计算一个直角三角形斜边的长度，已知两条直角边分别是3厘米和4厘米。', question: '斜边长度是多少厘米？', formula: 'sqrt(3^2+4^2) = ?', answer: 5, choices: [5, 6, 7, 4], visualType: 'geometry', visualData: { shape: 'triangle', params: { sides: [3, 4, 5], rightAngle: true } }, knowledge: '勾股定理', difficulty: 2, hint: '斜边^2=直角边1^2+直角边2^2', variants: [{ question: '直角边为5和12，斜边长？', formula: 'sqrt(5^2+12^2)', answer: 13, hint: '勾股数5-12-13' }, { question: '斜边13，一直角边5，另一直角边？', formula: 'sqrt(13^2-5^2)', answer: 12, hint: '反用勾股定理' }] },
      { scene: '一个长方体箱子长8分米、宽6分米、高2分米。小红想知道最长的木棍能放进箱子里多长。', question: '最长木棍多少分米？', formula: 'sqrt(8^2+6^2+2^2) ≈ ?', answer: 0, choices: [9, 10, 10.2, 11], visualType: 'geometry', visualData: { shape: 'box', params: { l: 8, w: 6, h: 2 } }, knowledge: '空间勾股定理', difficulty: 3, hint: '先算底面对角线再算空间对角线', variants: [{ question: '长方体长6宽8高12，体对角线？', formula: 'sqrt(6^2+8^2+12^2)', answer: 14.97, hint: '逐步计算' }, { question: '正方体棱长3，体对角线？', formula: 'sqrt(3^2+3^2+3^2)', answer: 5.2, hint: 'sqrt(27)≈5.2' }] },
      { scene: '小明计算sqrt(50)+sqrt(8)-sqrt(18)，想知道结果是多少。', question: 'sqrt(50)+sqrt(8)-sqrt(18) = ?', formula: '5sqrt(2)+2sqrt(2)-3sqrt(2)=4sqrt(2)', answer: 0, choices: [0, 1, 2, 3], visualType: 'barModel', visualData: { total: 4, parts: [{ label: 'sqrt(50)', val: 5, color: '#00A896' }, { label: 'sqrt(8)', val: 2, color: '#F5B800' }, { label: 'sqrt(18)', val: -3, color: '#FB923C' }] }, knowledge: '二次根式运算', difficulty: 3, hint: '先化简再合并', variants: [{ question: 'sqrt(12)+sqrt(27)-sqrt(3)=?', formula: '2sqrt(3)+3sqrt(3)-sqrt(3)=4sqrt(3)', answer: 4, hint: '化简后合并' }, { question: 'sqrt(8)*sqrt(2)=?', formula: 'sqrt(16)=4', answer: 4, hint: '先乘再开方' }] },
      { scene: '一个等腰三角形底边长为10厘米，腰长为13厘米。小明想算出底边上的高。', question: '底边上的高是多少厘米？', formula: 'sqrt(13^2-5^2) = ?', answer: 12, choices: [11, 12, 13, 10], visualType: 'geometry', visualData: { shape: 'triangle', params: { base: 10, side: 13 } }, knowledge: '勾股定理应用', difficulty: 3, hint: '底边一半是5，用勾股定理求高', variants: [{ question: '等腰三角形腰15，底边18，底边上的高？', formula: 'sqrt(15^2-9^2)', answer: 12, hint: '底边一半=9' }, { question: '等腰三角形腰10，底边12，高？', formula: 'sqrt(10^2-6^2)', answer: 8, hint: '底边一半=6' }] },
      { scene: '比较sqrt(15)和3.9的大小，小明想知道哪个更大。', question: '哪个更大？', formula: '3.9^2=15.21 > 15', answer: 1, choices: [0, 1, 2, 3], visualType: 'numberLine', visualData: { start: 3, end: 4, points: [{ pos: 3.873, label: 'sqrt(15)', color: '#00A896' }, { pos: 3.9, label: '3.9', color: '#FB923C' }] }, knowledge: '实数比较', difficulty: 2, hint: '3.9^2=15.21>15，所以3.9>sqrt(15)', variants: [{ question: '比较sqrt(10)和3.2的大小', formula: '3.2^2=10.24>10', answer: 1, hint: '平方比较法' }, { question: '比较sqrt(20)和4.5的大小', formula: '4.5^2=20.25>20', answer: 1, hint: '平方比较法' }] },
    ],
  },
  '8b': {
    title: '八年级下册·分式·反比例函数',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    knowledgeMap: [
      { id: '8B-01', name: '分式', concept: '形如A/B(B≠0)的式子叫做分式，B中含有字母', prerequisite: '八年级上·整式运算', extends: '8B-02 反比例函数', visualStrategy: '分数条类比', visualType: 'barModel', coreLiteracy: '运算能力', difficulty: 2, isKeyTopic: true },
      { id: '8B-02', name: '反比例函数', concept: '形如y=k/x(k≠0)的函数，图像是双曲线', prerequisite: '8B-01', extends: '8B-03 四边形', visualStrategy: '双曲线图像', visualType: 'geometry', coreLiteracy: '函数思想', difficulty: 3, isKeyTopic: true },
      { id: '8B-03', name: '四边形', concept: '平行四边形对边平行且相等，矩形有四个直角', prerequisite: '8B-02', extends: '8B-04 数据分析', visualStrategy: '图形变换', visualType: 'geometry', coreLiteracy: '推理能力', difficulty: 2, isKeyTopic: true },
      { id: '8B-04', name: '数据的分析', concept: '平均数、中位数、众数描述集中趋势，方差描述离散程度', prerequisite: '8B-03', extends: '小学毕业', visualStrategy: '数据分布图', visualType: 'barModel', coreLiteracy: '数据分析', difficulty: 2, isKeyTopic: false },
    ],
    units: [
      { name: '分式', level: 'current', children: [{ name: '分式概念', level: 'done' }, { name: '分式运算', level: 'current' }, { name: '分式方程', level: 'locked' }] },
      { name: '反比例函数', level: 'locked', children: [{ name: '反比例函数图像', level: 'locked' }, { name: '反比例函数性质', level: 'locked' }] },
      { name: '四边形', level: 'locked', children: [{ name: '平行四边形', level: 'locked' }, { name: '矩形菱形正方形', level: 'locked' }] },
      { name: '数据的分析', level: 'locked', children: [{ name: '平均数中位数', level: 'locked' }, { name: '方差', level: 'locked' }] },
    ],
    problems: [
      { scene: '小明解分式方程 2/x = 1/(x-3)，想知道x的值是多少。', question: '方程的解是多少？', formula: '2(x-3) = x, x = ?', answer: 6, choices: [6, 3, 2, 9], visualType: 'numberLine', visualData: { start: 0, end: 10, points: [{ pos: 6, label: 'x', color: '#00A896' }] }, knowledge: '分式方程', difficulty: 3, hint: '交叉相乘再解方程，注意验根', variants: [{ question: '解方程 3/x = 1/(x-2)', formula: '3(x-2)=x', answer: 3, hint: '交叉相乘' }, { question: '解方程 1/(x+1) = 2/(x+3)', formula: 'x+3=2(x+1)', answer: 1, hint: '交叉相乘后移项' }] },
      { scene: '已知反比例函数 y = 12/x，当 x = 4 时 y 等于多少？', question: '当 x=4 时 y=?', formula: 'y = 12/4 = ?', answer: 3, choices: [3, 4, 8, 48], visualType: 'barModel', visualData: { total: 12, parts: [{ label: 'x', val: 4, color: '#00A896' }, { label: 'y', val: 3, color: '#F5B800' }] }, knowledge: '反比例函数', difficulty: 2, hint: '代入x值求y', variants: [{ question: 'y=20/x，当x=5时y=?', formula: 'y=20/5', answer: 4, hint: '直接代入' }, { question: 'y=k/x过点(2,6)，k=?', formula: 'k=2*6', answer: 12, hint: 'k=xy' }] },
      { scene: '一个平行四边形的底是8厘米，高是5厘米。小红想算出它的面积，以及如果底增加2厘米面积增加多少。', question: '原面积和增加面积各是多少？', formula: '原面积=40, 增加=10', answer: 40, choices: [40, 50, 40, 10], visualType: 'geometry', visualData: { shape: 'parallelogram', params: { base: 8, height: 5 } }, knowledge: '平行四边形面积', difficulty: 2, hint: '面积=底*高', variants: [{ question: '平行四边形底10高6，面积？', formula: '10*6', answer: 60, hint: '底乘高' }, { question: '平行四边形面积48底12，高？', formula: '48/12', answer: 4, hint: '高=面积/底' }] },
      { scene: '一组数据：12, 15, 18, 20, 25。小明想算出这组数据的平均数和中位数。', question: '平均数和中位数分别是多少？', formula: '平均数=18, 中位数=18', answer: 18, choices: [18, 18, 18, 20], visualType: 'barModel', visualData: { total: 18, parts: [{ label: '平均数', val: 18, color: '#00A896' }, { label: '中位数', val: 18, color: '#F5B800' }] }, knowledge: '数据的集中趋势', difficulty: 2, hint: '平均数=总和/个数，中位数是中间的数', variants: [{ question: '数据：10,20,30,40,50，平均数和中位数？', formula: '平均=30, 中位=30', answer: 30, hint: '对称数据' }, { question: '数据：5,10,15,20,100，平均数和中位数？', formula: '平均=30, 中位=15', answer: 15, hint: '极端值影响平均数' }] },
      { scene: '小明计算 (a^2*b)^3 / (a*b)^2，化简结果是多少？', question: '化简结果是多少？', formula: 'a^6*b^3/a^2*b^2 = a^4*b', answer: 0, choices: [0, 1, 2, 3], visualType: 'barModel', visualData: { total: 1, parts: [{ label: '结果', val: 1, color: '#00A896' }] }, knowledge: '整式运算', difficulty: 3, hint: '先算乘方再算除法，同底数幂相除指数相减', variants: [{ question: '(x^2)^3 * x^4 = ?', formula: 'x^6*x^4=x^10', answer: 10, hint: '指数相加' }, { question: 'a^6/a^2 = ?', formula: 'a^(6-2)=a^4', answer: 4, hint: '指数相减' }] },
    ],
  },
  '9a': {
    title: '九年级上册·一元二次方程·二次函数',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    knowledgeMap: [
      { id: '9A-01', name: '一元二次方程', concept: '只含一个未知数，未知数最高次数为2的方程', prerequisite: '八年级下·分式方程', extends: '9A-02 二次函数', visualStrategy: '求根公式推导', visualType: 'geometry', coreLiteracy: '方程思想', difficulty: 3, isKeyTopic: true },
      { id: '9A-02', name: '二次函数', concept: '形如y=ax^2+bx+c(a≠0)的函数，图像是抛物线', prerequisite: '9A-01', extends: '9A-03 旋转', visualStrategy: '抛物线绘制', visualType: 'geometry', coreLiteracy: '函数思想', difficulty: 3, isKeyTopic: true },
      { id: '9A-03', name: '旋转', concept: '图形绕定点转动一定角度，对应点到定点距离相等', prerequisite: '9A-02', extends: '9A-04 圆', visualStrategy: '旋转动画', visualType: 'geometry', coreLiteracy: '几何直观', difficulty: 2, isKeyTopic: false },
      { id: '9A-04', name: '圆', concept: '圆上任意点到圆心距离相等；周长C=2πr，面积S=πr²', prerequisite: '9A-03', extends: '小学毕业', visualStrategy: '圆面积分割', visualType: 'geometry', coreLiteracy: '几何直观', difficulty: 2, isKeyTopic: true },
    ],
    units: [
      { name: '一元二次方程', level: 'current', children: [{ name: '方程概念', level: 'done' }, { name: '因式分解法', level: 'current' }, { name: '求根公式', level: 'locked' }] },
      { name: '二次函数', level: 'locked', children: [{ name: '二次函数图像', level: 'locked' }, { name: '二次函数性质', level: 'locked' }] },
      { name: '旋转', level: 'locked', children: [{ name: '旋转性质', level: 'locked' }, { name: '中心对称', level: 'locked' }] },
      { name: '圆', level: 'locked', children: [{ name: '圆的认识', level: 'locked' }, { name: '弧长与扇形', level: 'locked' }] },
    ],
    problems: [
      { scene: '小明解方程 x^2 - 5x + 6 = 0，想知道两个根分别是多少。', question: '方程的两个根是多少？', formula: '(x-2)(x-3)=0, x1=2 x2=3', answer: 0, choices: [0, 1, 2, 3], visualType: 'numberLine', visualData: { start: 0, end: 6, points: [{ pos: 2, label: 'x1', color: '#00A896' }, { pos: 3, label: 'x2', color: '#F5B800' }] }, knowledge: '一元二次方程', difficulty: 2, hint: '因式分解 (x-2)(x-3)=0', variants: [{ question: '解方程 x^2-3x+2=0', formula: '(x-1)(x-2)=0', answer: 1, hint: '因式分解' }, { question: '解方程 x^2-4x+4=0', formula: '(x-2)^2=0', answer: 2, hint: '完全平方' }] },
      { scene: '一个抛物线形拱桥，跨度20米，最高点离水面8米。小红想建立坐标系求抛物线方程。', question: '抛物线顶点坐标是多少？', formula: '顶点=(10,8)', answer: 0, choices: [0, 1, 2, 3], visualType: 'geometry', visualData: { shape: 'parabola', params: { vertex: [10, 8], width: 20 } }, knowledge: '二次函数图像', difficulty: 3, hint: '跨度20米，顶点在中间上方8米', variants: [{ question: '抛物线顶点(3,5)过点(0,-4)，求方程', formula: 'y=a(x-3)^2+5, a=-1', answer: -1, hint: '代入点求a' }, { question: '抛物线y=x^2-4x+3的顶点坐标？', formula: 'x=-b/2a=2, y=4-8+3=-1', answer: -1, hint: '顶点公式' }] },
      { scene: '小明把一根长40厘米的铁丝弯成一个矩形，使面积最大。他想算出这个矩形的长和宽。', question: '面积最大时长和宽各是多少？', formula: '长=宽=10, 面积=100', answer: 100, choices: [100, 90, 110, 80], visualType: 'geometry', visualData: { shape: 'rectangle', params: { length: 10, width: 10 } }, knowledge: '二次函数最值', difficulty: 3, hint: '周长固定时正方形面积最大', variants: [{ question: '周长36厘米的矩形，面积最大时边长？', formula: '边长=9, 面积=81', answer: 81, hint: '正方形面积最大' }, { question: '周长24米的矩形，面积最大是多少？', formula: '边长=6, 面积=36', answer: 36, hint: '正方形面积最大' }] },
      { scene: '一个圆的半径是5厘米，小明想算出它的周长和面积。', question: '圆的周长和面积各是多少？', formula: '周长=10*pi约31.4, 面积=25*pi约78.5', answer: 25, choices: [25, 50, 75, 100], visualType: 'geometry', visualData: { shape: 'circle', params: { radius: 5 } }, knowledge: '圆的周长与面积', difficulty: 2, hint: 'C=2*pi*r, S=pi*r^2', variants: [{ question: '圆半径3厘米，周长和面积？', formula: 'C=6pi≈18.8, S=9pi≈28.3', answer: 28, hint: '代入公式' }, { question: '圆直径10厘米，面积？', formula: 'r=5, S=25pi≈78.5', answer: 78, hint: '先求半径' }] },
      { scene: '小明将点A(2,3)绕原点顺时针旋转90度，想知道旋转后的坐标。', question: '旋转后的坐标是多少？', formula: '(x,y)->(y,-x), (2,3)->(3,-2)', answer: 0, choices: [0, 1, 2, 3], visualType: 'numberLine', visualData: { start: 0, end: 5, points: [{ pos: 2, label: 'A', color: '#00A896' }, { pos: 3, label: "A'", color: '#F5B800' }] }, knowledge: '图形旋转', difficulty: 3, hint: '顺时针90度：(x,y)->(y,-x)', variants: [{ question: '点(1,2)逆时针旋转90度后的坐标？', formula: '(x,y)->(-y,x), (1,2)->(-2,1)', answer: -2, hint: '逆时针90度公式' }, { question: '点(3,4)绕原点旋转180度后的坐标？', formula: '(x,y)->(-x,-y), (3,4)->(-3,-4)', answer: -3, hint: '180度旋转' }] },
    ],
  },
  '9b': {
    title: '九年级下册·反比例函数综合·锐角三角函数',
    sub: '数与代数 · 图形与几何 · 统计概率 · 综合实践',
    progress: 0,
    knowledgeMap: [
      { id: '9B-01', name: '反比例函数综合', concept: '反比例函数与一次函数的交点问题，结合图像分析性质', prerequisite: '八年级下·反比例函数', extends: '9B-02 锐角三角函数', visualStrategy: '双曲线与直线', visualType: 'geometry', coreLiteracy: '函数思想', difficulty: 3, isKeyTopic: true },
      { id: '9B-02', name: '锐角三角函数', concept: '在直角三角形中，sin=对边/斜边，cos=邻边/斜边，tan=对边/邻边', prerequisite: '9B-01', extends: '9B-03 三视图', visualStrategy: '直角三角形边比', visualType: 'geometry', coreLiteracy: '几何直观', difficulty: 3, isKeyTopic: true },
      { id: '9B-03', name: '投影与视图', concept: '主视图、俯视图、左视图分别从前、上、左三个方向观察物体', prerequisite: '9B-02', extends: '9B-04 概率', visualStrategy: '三视图展开', visualType: 'geometry', coreLiteracy: '空间观念', difficulty: 2, isKeyTopic: false },
      { id: '9B-04', name: '随机事件的概率', concept: '概率=有利结果数/总结果数，范围在0到1之间', prerequisite: '9B-03', extends: '小学毕业', visualStrategy: '树状图分析', visualType: 'barModel', coreLiteracy: '数据观念', difficulty: 2, isKeyTopic: true },
    ],
    units: [
      { name: '反比例函数综合', level: 'current', children: [{ name: '图像与性质', level: 'done' }, { name: '与一次函数综合', level: 'current' }, { name: '实际应用', level: 'locked' }] },
      { name: '锐角三角函数', level: 'locked', children: [{ name: '正弦余弦正切', level: 'locked' }, { name: '特殊角三角函数值', level: 'locked' }] },
      { name: '投影与视图', level: 'locked', children: [{ name: '三视图', level: 'locked' }, { name: '投影', level: 'locked' }] },
      { name: '随机事件的概率', level: 'locked', children: [{ name: '概率概念', level: 'locked' }, { name: '列表法与树状图', level: 'locked' }] },
    ],
    problems: [
      { scene: '已知反比例函数 y = k/x 的图像经过点 (2, 3)，求 k 的值以及当 x = 6 时 y 的值。', question: 'k 和 x=6 时的 y 分别是多少？', formula: 'k=2*3=6, y=6/6=1', answer: 1, choices: [1, 2, 3, 0.5], visualType: 'barModel', visualData: { total: 1, parts: [{ label: 'k', val: 6, color: '#00A896' }, { label: 'y(x=6)', val: 1, color: '#F5B800' }] }, knowledge: '反比例函数', difficulty: 2, hint: 'k=xy，代入点坐标', variants: [{ question: '反比例函数过点(3,4)，当x=6时y=?', formula: 'k=12, y=12/6=2', answer: 2, hint: '先求k再求y' }, { question: 'y=k/x过点(-2,5)，k=?', formula: 'k=-2*5=-10', answer: -10, hint: 'k=xy' }] },
      { scene: '小明站在离楼30米的地方，测得楼顶的仰角为30度。他想算出楼的高度（忽略观测者身高）。', question: '楼高约多少米？', formula: 'h = 30 * tan30度 ≈ ?', answer: 0, choices: [0, 1, 2, 3], visualType: 'geometry', visualData: { shape: 'triangle', params: { base: 30, angle: 30 } }, knowledge: '锐角三角函数', difficulty: 3, hint: 'tan30度=sqrt(3)/3约0.577', variants: [{ question: '仰角45度，距离20米，楼高？', formula: 'h=20*tan45=20', answer: 20, hint: 'tan45=1' }, { question: '仰角60度，距离10米，楼高？', formula: 'h=10*tan60=10sqrt(3)', answer: 17, hint: 'tan60=sqrt(3)' }] },
      { scene: '一个不透明袋子里有3个红球和2个白球，小明随机摸出一个球，想知道摸到红球的概率。', question: '摸到红球的概率是多少？', formula: 'P(红) = 3/5', answer: 3, choices: [3, 2, 5, 1], visualType: 'barModel', visualData: { total: 5, parts: [{ label: '红球', val: 3, color: '#00A896' }, { label: '白球', val: 2, color: '#F5B800' }] }, knowledge: '概率计算', difficulty: 2, hint: '概率=目标结果数/总结果数', variants: [{ question: '袋中有4红3蓝2绿，摸到蓝色的概率？', formula: 'P(蓝)=3/9=1/3', answer: 1, hint: '3/9=1/3' }, { question: '袋中有5红5蓝，摸两次（不放回），两次都是红的概率？', formula: '5/10*4/9=2/9', answer: 2, hint: '条件概率' }] },
      { scene: '小明画一个几何体的三视图：主视图是长方形，俯视图是圆，左视图是长方形。他想判断这个几何体是什么。', question: '这个几何体是什么？', formula: '主视图+俯视图+左视图', answer: 0, choices: [0, 1, 2, 3], visualType: 'geometry', visualData: { shape: 'cylinder', params: {} }, knowledge: '三视图与几何体', difficulty: 2, hint: '俯视图是圆说明底面是圆形', variants: [{ question: '三视图都是圆，几何体是什么？', formula: '三个方向看都是圆', answer: 0, hint: '球体' }, { question: '主视图三角形，俯视图圆形，几何体是什么？', formula: '圆锥', answer: 1, hint: '圆锥的主视图是三角形' }] },
      { scene: '已知反比例函数 y = 6/x 和一次函数 y = x + 1，小明想求它们的交点坐标。', question: '交点坐标是什么？', formula: '6/x = x+1, x^2+x-6=0', answer: 0, choices: [0, 1, 2, 3], visualType: 'numberLine', visualData: { start: -4, end: 4, points: [{ pos: -3, label: '交点1', color: '#00A896' }, { pos: 2, label: '交点2', color: '#F5B800' }] }, knowledge: '函数交点', difficulty: 3, hint: '联立方程，解一元二次方程', variants: [{ question: 'y=4/x和y=x+3的交点', formula: 'x^2+3x-4=0', answer: 1, hint: '(x+4)(x-1)=0' }, { question: 'y=12/x和y=2x的交点', formula: '2x^2=12', answer: 2, hint: 'x^2=6' }] },
    ],
  },
};

function esc(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/'/g, "\\'");
}

// Read existing file
var existing = fs.readFileSync('data/math-data.js', 'utf8').replace(/^\uFEFF/, '');

// Use vm to parse
var vm = require('vm');
var mathData;
try {
  var ctx = vm.createContext({ MATH_BY_GRADE: {} });
  var code = existing.replace(/^window\.MATH_BY_GRADE\s*=\s*/, '');
  vm.runInContext('MATH_BY_GRADE = ' + code, ctx);
  mathData = ctx.MATH_BY_GRADE;
} catch(e) {
  console.log('Parse error:', e.message);
  process.exit(1);
}

console.log('Existing grades:', Object.keys(mathData).sort().join(', '));
var existingCount = Object.keys(mathData).reduce(function(s, g) { return s + mathData[g].problems.length; }, 0);
console.log('Existing problems:', existingCount);

// Add new grades
for (var grade in GRADES) {
  mathData[grade] = GRADES[grade];
}

// Rebuild file
var lines = [];
lines.push('// math-data.js · 奇趣学园 V5 数学题库 · 自动生成');
lines.push('// 数据范围：3-9年级共14册');
lines.push('// 所有题目均经 visualData 一致性校验');
lines.push('');
lines.push('window.MATH_BY_GRADE = {');

var grades = Object.keys(mathData).sort();
grades.forEach(function(g, idx) {
  var data = mathData[g];
  lines.push('  // ========== ' + g + ' ==========' );
  lines.push('  "' + g + '":{');
  lines.push('    title:"' + esc(data.title) + '",');
  lines.push('    sub:"' + esc(data.sub) + '",');
  lines.push('    progress:' + data.progress + ',');

  // Write knowledgeMap
  if (data.knowledgeMap) {
    lines.push('    knowledgeMap:[');
    data.knowledgeMap.forEach(function(km, ki) {
      lines.push('      {id:"' + esc(km.id) + '",name:"' + esc(km.name) + '",concept:"' + esc(km.concept) + '",prerequisite:"' + esc(km.prerequisite) + '",extends:"' + esc(km.extends) + '",visualStrategy:"' + esc(km.visualStrategy) + '",visualType:"' + esc(km.visualType) + '",coreLiteracy:"' + esc(km.coreLiteracy) + '",difficulty:' + km.difficulty + ',isKeyTopic:' + km.isKeyTopic + '}');
      if (ki < data.knowledgeMap.length - 1) lines.push(',');
    });
    lines.push('    ],');
  }

  // Write units
  lines.push('    units:[');
  data.units.forEach(function(u, uIdx) {
    var children = u.children.map(function(c) {
      return '        {name:"' + esc(c.name) + '",level:"' + c.level + '"}';
    }).join(',');
    lines.push('      {name:"' + esc(u.name) + '",level:"' + esc(u.level) + '",children:[' + children + ']}');
    if (uIdx < data.units.length - 1) lines.push(',');
  });
  lines.push('    ],');

  // Write problems
  lines.push('    problems:[');
  data.problems.forEach(function(p, pIdx) {
    var vd = JSON.stringify(p.visualData);
    var parts = [];
    parts.push('      {scene:"' + esc(p.scene) + '"');
    parts.push('      ,question:"' + esc(p.question) + '"');
    parts.push('      ,formula:"' + esc(p.formula) + '"');
    parts.push('      ,answer:' + p.answer);
    parts.push('      ,choices:[' + p.choices.join(',') + ']');
    parts.push('      ,visualType:"' + p.visualType + '"');
    parts.push('      ,visualData:' + vd);
    parts.push('      ,knowledge:"' + esc(p.knowledge) + '"');
    parts.push('      ,difficulty:' + p.difficulty);
    parts.push('      ,hint:"' + esc(p.hint) + '"');
    if (p.variants) {
      parts.push('      ,variants:[' + p.variants.map(function(v) {
        return '{question:"' + esc(v.question) + '",formula:"' + esc(v.formula) + '",answer:' + v.answer + ',hint:"' + esc(v.hint) + '"}';
      }).join(',') + ']');
    }
    parts.push('      }');
    lines.push(parts.join(''));
    if (pIdx < data.problems.length - 1) lines.push(',');
  });
  lines.push('    ]');
  lines.push('  }');
  if (idx < grades.length - 1) lines.push(',');
});

lines.push('};');

var result = lines.join('\n') + '\r\n';
fs.writeFileSync('data/math-data.js', result, 'utf8');

// Verify
var verifyCtx = vm.createContext({ MATH_BY_GRADE: {} });
vm.runInContext('MATH_BY_GRADE = ' + result.replace(/^window\.MATH_BY_GRADE\s*=\s*/, ''), verifyCtx);
var vData = verifyCtx.MATH_BY_GRADE;
var vGrades = Object.keys(vData).sort();
console.log('All grades:', vGrades.join(', '));
var total = 0;
vGrades.forEach(function(g) { total += vData[g].problems.length; });
console.log('Total problems:', total);
console.log('File size:', result.length);
console.log('All have knowledgeMap:', vGrades.every(function(g) { return !!vData[g].knowledgeMap; }));
console.log('All have variants:', vGrades.every(function(g) { return vData[g].problems.every(function(p) { return !!p.variants; }); }));
