// Expand middle school math data (7a-9b) - fixed version
const fs = require('fs');
const path = 'F:\\qiquleyuan\\quiqu-xueyuan-master\\quiqu-xueyuan-master\\data\\math-data.js';
let content = fs.readFileSync(path, 'utf8');

// Helper to find the grade block and replace its knowledgeMap
function replaceKnowledgeMap(gradeKey, newKm) {
  // Find the specific grade block
  const gradeStart = content.indexOf(`  "${gradeKey}": {`);
  if (gradeStart === -1) {
    console.log(`WARNING: Could not find ${gradeKey}`);
    return;
  }
  // Find the "knowledgeMap": [ that's within this grade block
  const blockEnd = content.indexOf(`\n  "${String.fromCharCode(gradeStart + 100)}`, gradeStart) || content.length;
  // Just find next grade key
  const nextGradeMatch = content.substring(gradeStart).match(/,\n  "[0-9][ab]":\s*\{/);
  const blockEndReal = nextGradeMatch ? gradeStart + nextGradeMatch.index : content.length;
  
  const block = content.substring(gradeStart, blockEndReal);
  const kmMatch = block.match(/("knowledgeMap": \[)([\s\S]*?)(\]\s*,\s*"units")/);
  if (!kmMatch) {
    console.log(`WARNING: No knowledgeMap found in ${gradeKey}`);
    return;
  }
  
  const kmEntries = newKm.map(k => 
    `      {\n        "id": "${k.id}",\n        "name": "${k.name}",\n        "concept": "${k.concept}",\n        "prerequisite": "${k.prerequisite}",\n        "extends": "${k.extends}",\n        "visualStrategy": "${k.visualStrategy}",\n        "visualType": "${k.visualType}",\n        "coreLiteracy": "${k.coreLiteracy}",\n        "difficulty": ${k.difficulty},\n        "isKeyTopic": ${k.isKeyTopic}\n      }`
  ).join(',\n');
  
  const newBlock = block.replace(
    /("knowledgeMap": \[)([\s\S]*?)(\]\s*,\s*"units")/,
    `$1\n${kmEntries}\n    $3`
  );
  
  content = content.substring(0, gradeStart) + newBlock + content.substring(blockEndReal);
  console.log(`  ${gradeKey}: ${newKm.length}知识点 map added`);
}

// 7A knowledge map expansion (6 -> 17)
const km7a = [
  {id:'7A-01',name:'正数与负数',concept:'大于0的数是正数，小于0的数是负数，0既不是正数也不是负数',prerequisite:'三年级·认识整数',extends:'7A-02 数轴',visualStrategy:'数轴双向延伸',visualType:'numberLine',coreLiteracy:'符号意识',difficulty:1,isKeyTopic:true},
  {id:'7A-02',name:'数轴',concept:'规定了原点、正方向、单位长度的直线',prerequisite:'7A-01',extends:'7A-03 相反数',visualStrategy:'动态数轴',visualType:'numberLine',coreLiteracy:'数感',difficulty:1,isKeyTopic:true},
  {id:'7A-03',name:'相反数与绝对值',concept:'只有符号不同的两个数互为相反数；绝对值是数到原点的距离',prerequisite:'7A-02',extends:'7A-04 有理数加减',visualStrategy:'数轴距离',visualType:'numberLine',coreLiteracy:'抽象能力',difficulty:2,isKeyTopic:true},
  {id:'7A-04',name:'有理数的加减法',concept:'同号相加取相同符号，异号相加取绝对值较大者的符号',prerequisite:'7A-03',extends:'7A-05 整式加减',visualStrategy:'数轴跳跃',visualType:'numberLine',coreLiteracy:'运算能力',difficulty:2,isKeyTopic:true},
  {id:'7A-05',name:'整式的加减',concept:'合并同类项：字母相同、指数相同的项才能合并',prerequisite:'7A-04',extends:'7A-06 一元一次方程',visualStrategy:'代数积木',visualType:'barModel',coreLiteracy:'代数思维',difficulty:2,isKeyTopic:true},
  {id:'7A-06',name:'一元一次方程',concept:'只含一个未知数，未知数指数为1的方程',prerequisite:'7A-05',extends:'7A-07 不等式',visualStrategy:'天平平衡',visualType:'barModel',coreLiteracy:'方程思想',difficulty:2,isKeyTopic:true},
  {id:'7A-07',name:'不等式与不等式组',concept:'用不等号表示大小关系的式子，解集可在数轴上表示',prerequisite:'7A-06',extends:'7A-08 平面直角坐标系',visualStrategy:'数轴表示',visualType:'numberLine',coreLiteracy:'模型思想',difficulty:3,isKeyTopic:false},
  {id:'7A-08',name:'平面直角坐标系',concept:'用有序数对(x,y)确定平面内点的位置',prerequisite:'7A-07',extends:'7A-09 直线的平移与旋转',visualStrategy:'坐标网格',visualType:'geometry',coreLiteracy:'数形结合',difficulty:2,isKeyTopic:true},
  {id:'7A-09',name:'直线的平移与旋转',concept:'直线平移不改变斜率，旋转改变角度',prerequisite:'7A-08',extends:'7B-01 相交线与平行线',visualStrategy:'动态变换',visualType:'geometry',coreLiteracy:'几何直观',difficulty:3,isKeyTopic:false},
  {id:'7A-10',name:'幂的运算',concept:'同底数幂相乘：底数不变指数相加',prerequisite:'四年级·乘法',extends:'7A-11 整式乘法',visualStrategy:'面积模型',visualType:'areaModel',coreLiteracy:'符号意识',difficulty:2,isKeyTopic:true},
  {id:'7A-11',name:'整式乘法',concept:'单项式乘多项式：用分配律逐项相乘',prerequisite:'7A-10',extends:'7A-12 因式分解',visualStrategy:'分配律模型',visualType:'areaModel',coreLiteracy:'代数思维',difficulty:3,isKeyTopic:false},
  {id:'7A-12',name:'因式分解',concept:'把多项式化为几个整式的积的形式',prerequisite:'7A-11',extends:'7B-03 分式',visualStrategy:'面积还原',visualType:'areaModel',coreLiteracy:'分解思想',difficulty:3,isKeyTopic:true},
  {id:'7A-13',name:'数据的收集与整理',concept:'了解数据收集的方法：全面调查与抽样调查',prerequisite:'三年级·统计',extends:'7A-14 统计图表',visualStrategy:'调查表',visualType:'barModel',coreLiteracy:'数据意识',difficulty:1,isKeyTopic:false},
  {id:'7A-14',name:'统计图表',concept:'条形图、折线图、扇形图各有适用场景',prerequisite:'7A-13',extends:'7A-15 概率初步',visualStrategy:'图表对比',visualType:'barModel',coreLiteracy:'数据分析',difficulty:2,isKeyTopic:false},
  {id:'7A-15',name:'概率初步',concept:'事件发生的可能性大小用0到1之间的数表示',prerequisite:'7A-14',extends:'8A-01 二次根式',visualStrategy:'转盘实验',visualType:'areaModel',coreLiteracy:'随机观念',difficulty:2,isKeyTopic:false},
  {id:'7A-16',name:'代数式与函数初步',concept:'用字母表示数，理解变量与常量的区别',prerequisite:'7A-15',extends:'7A-17 函数概念',visualStrategy:'表格与图象',visualType:'numberLine',coreLiteracy:'函数思想',difficulty:2,isKeyTopic:true},
  {id:'7A-17',name:'函数概念',concept:'一个自变量对应唯一因变量的映射关系',prerequisite:'7A-16',extends:'8A-02 一次函数',visualStrategy:'坐标系图象',visualType:'numberLine',coreLiteracy:'函数思想',difficulty:3,isKeyTopic:true},
];

// 7B knowledge map expansion (4 -> 17)
const km7b = [
  {id:'7B-01',name:'相交线与平行线',concept:'两条直线被第三条直线所截，同位角相等则两直线平行',prerequisite:'7A-09',extends:'7B-02 三角形的内角',visualStrategy:'动态角度测量',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:true},
  {id:'7B-02',name:'三角形的内角与外角',concept:'三角形内角和180度，外角等于不相邻两内角之和',prerequisite:'7B-01',extends:'7B-03 全等三角形',visualStrategy:'角度测量',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:true},
  {id:'7B-03',name:'全等三角形',concept:'能够完全重合的两个三角形全等，判定方法有SSS/SAS/ASA/AAS',prerequisite:'7B-02',extends:'7B-04 等腰三角形',visualStrategy:'重叠对比',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'7B-04',name:'等腰三角形',concept:'两腰相等的三角形，底角相等',prerequisite:'7B-03',extends:'7B-05 尺规作图',visualStrategy:'对称折叠',visualType:'geometry',coreLiteracy:'几何直观',difficulty:2,isKeyTopic:false},
  {id:'7B-05',name:'尺规作图',concept:'用圆规和直尺作角平分线、垂直平分线',prerequisite:'7B-04',extends:'7B-06 勾股定理',visualStrategy:'作图演示',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:false},
  {id:'7B-06',name:'勾股定理',concept:'直角三角形两直角边的平方和等于斜边的平方',prerequisite:'7B-05',extends:'7B-07 实数',visualStrategy:'面积拼接',visualType:'areaModel',coreLiteracy:'模型思想',difficulty:3,isKeyTopic:true},
  {id:'7B-07',name:'实数',concept:'有理数和无理数统称实数，数轴上的点与实数一一对应',prerequisite:'7B-06',extends:'8A-01 二次根式',visualStrategy:'数轴覆盖',visualType:'numberLine',coreLiteracy:'数形结合',difficulty:2,isKeyTopic:false},
  {id:'7B-08',name:'二元一次方程组',concept:'含两个未知数的一次方程组，代入法或消元法求解',prerequisite:'7A-06',extends:'7B-09 不等式组',visualStrategy:'双变量模型',visualType:'barModel',coreLiteracy:'方程思想',difficulty:3,isKeyTopic:true},
  {id:'7B-09',name:'不等式组',concept:'多个不等式的公共解集，可在数轴上表示',prerequisite:'7B-08',extends:'7B-10 数据的分析',visualStrategy:'数轴重叠',visualType:'numberLine',coreLiteracy:'模型思想',difficulty:2,isKeyTopic:false},
  {id:'7B-10',name:'数据的分析',concept:'平均数、中位数、众数、方差描述数据的集中与离散程度',prerequisite:'7A-14',extends:'8A-02 一次函数',visualStrategy:'统计图表',visualType:'barModel',coreLiteracy:'数据分析',difficulty:1,isKeyTopic:false},
  {id:'7B-11',name:'图形的平移',concept:'平移不改变图形的形状和大小，只改变位置',prerequisite:'7B-01',extends:'7B-12 图形的旋转',visualStrategy:'网格平移',visualType:'geometry',coreLiteracy:'几何直观',difficulty:2,isKeyTopic:false},
  {id:'7B-12',name:'图形的旋转',concept:'旋转围绕定点转动，对应点到定点距离相等',prerequisite:'7B-11',extends:'7B-13 中心对称',visualStrategy:'旋转动画',visualType:'geometry',coreLiteracy:'几何直观',difficulty:2,isKeyTopic:false},
  {id:'7B-13',name:'中心对称',concept:'绕某点旋转180度后与原图形重合的图形',prerequisite:'7B-12',extends:'8A-01 二次根式',visualStrategy:'对称中心',visualType:'geometry',coreLiteracy:'几何直观',difficulty:2,isKeyTopic:false},
  {id:'7B-14',name:'四边形概述',concept:'平行四边形对边平行且相等，对角线互相平分',prerequisite:'7B-13',extends:'8A-02 一次函数',visualStrategy:'平行四边形',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'7B-15',name:'平行四边形',concept:'两组对边分别平行的四边形',prerequisite:'7B-14',extends:'8A-03 反比例函数',visualStrategy:'动态变形',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:false},
  {id:'7B-16',name:'矩形、菱形、正方形',concept:'特殊平行四边形：矩形对角线相等，菱形对角线垂直',prerequisite:'7B-15',extends:'8A-04 二次方程',visualStrategy:'分类对比',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'7B-17',name:'几何变换综合',concept:'平移、旋转、轴对称是三种基本几何变换',prerequisite:'7B-16',extends:'9A-01 二次函数',visualStrategy:'变换组合',visualType:'geometry',coreLiteracy:'几何直观',difficulty:3,isKeyTopic:false},
];

// 8A knowledge map expansion (4 -> 17)
const km8a = [
  {id:'8A-01',name:'二次根式',concept:'形如√a(a≥0)的式子，√a·√b=√(ab)',prerequisite:'7B-07',extends:'8A-02 一次函数',visualStrategy:'面积开方',visualType:'areaModel',coreLiteracy:'运算能力',difficulty:2,isKeyTopic:true},
  {id:'8A-02',name:'一次函数',concept:'y=kx+b(k≠0)的图象是一条直线',prerequisite:'7B-10',extends:'8A-03 反比例函数',visualStrategy:'坐标系直线',visualType:'numberLine',coreLiteracy:'函数思想',difficulty:2,isKeyTopic:true},
  {id:'8A-03',name:'反比例函数',concept:'y=k/x(k≠0)的图象是双曲线',prerequisite:'8A-02',extends:'8A-04 二次方程',visualStrategy:'双曲线绘制',visualType:'numberLine',coreLiteracy:'函数思想',difficulty:3,isKeyTopic:true},
  {id:'8A-04',name:'一元二次方程',concept:'ax²+bx+c=0(a≠0)，求根公式x=(-b±√(b²-4ac))/(2a)',prerequisite:'8A-03',extends:'8A-05 根的判别式',visualStrategy:'抛物线与x轴',visualType:'numberLine',coreLiteracy:'方程思想',difficulty:3,isKeyTopic:true},
  {id:'8A-05',name:'根的判别式',concept:'Δ=b²-4ac决定根的个数：Δ>0两个实根，Δ=0一个实根，Δ<0无实根',prerequisite:'8A-04',extends:'8A-06 韦达定理',visualStrategy:'判别式分析',visualType:'numberLine',coreLiteracy:'分类思想',difficulty:3,isKeyTopic:false},
  {id:'8A-06',name:'韦达定理',concept:'x₁+x₂=-b/a，x₁·x₂=c/a',prerequisite:'8A-05',extends:'8A-07 一元二次不等式',visualStrategy:'根与系数',visualType:'numberLine',coreLiteracy:'方程思想',difficulty:3,isKeyTopic:false},
  {id:'8A-07',name:'一元二次不等式',concept:'ax²+bx+c>0(a>0)的解集在两根之外',prerequisite:'8A-06',extends:'8A-08 相似三角形',visualStrategy:'数轴区间',visualType:'numberLine',coreLiteracy:'模型思想',difficulty:3,isKeyTopic:false},
  {id:'8A-08',name:'相似三角形',concept:'对应角相等、对应边成比例的两个三角形相似',prerequisite:'7B-02',extends:'8A-09 相似多边形',visualStrategy:'缩放对比',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'8A-09',name:'相似多边形',concept:'对应角相等、对应边成比例的多边形',prerequisite:'8A-08',extends:'8A-10 位似变换',visualStrategy:'缩放演示',visualType:'geometry',coreLiteracy:'几何直观',difficulty:3,isKeyTopic:false},
  {id:'8A-10',name:'位似变换',concept:'以某点为中心按比例放大或缩小的变换',prerequisite:'8A-09',extends:'8A-11 圆的基本性质',visualStrategy:'中心缩放',visualType:'geometry',coreLiteracy:'几何直观',difficulty:3,isKeyTopic:false},
  {id:'8A-11',name:'圆的基本性质',concept:'同圆或等圆的半径相等，直径是最长的弦',prerequisite:'7B-16',extends:'8A-12 点与圆的位置关系',visualStrategy:'圆规作图',visualType:'geometry',coreLiteracy:'几何直观',difficulty:2,isKeyTopic:true},
  {id:'8A-12',name:'点与圆的位置关系',concept:'点在圆外/圆上/圆内，取决于点到圆心距离与半径的关系',prerequisite:'8A-11',extends:'8A-13 直线与圆的位置关系',visualStrategy:'距离比较',visualType:'geometry',coreLiteracy:'分类思想',difficulty:2,isKeyTopic:false},
  {id:'8A-13',name:'直线与圆的位置关系',concept:'相离(距离>半径)、相切(距离=半径)、相交(距离<半径)',prerequisite:'8A-12',extends:'8A-14 切线的性质',visualStrategy:'距离分析',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'8A-14',name:'切线的性质',concept:'圆的切线垂直于过切点的半径',prerequisite:'8A-13',extends:'8A-15 弧长与扇形面积',visualStrategy:'切线作图',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:false},
  {id:'8A-15',name:'弧长与扇形面积',concept:'弧长l=nπr/180，扇形面积S=nπr²/360',prerequisite:'8A-14',extends:'8A-16 圆周角定理',visualStrategy:'扇形展开',visualType:'geometry',coreLiteracy:'运算能力',difficulty:3,isKeyTopic:true},
  {id:'8A-16',name:'圆周角定理',concept:'同弧所对的圆周角等于圆心角的一半',prerequisite:'8A-15',extends:'8A-17 圆内接四边形',visualStrategy:'角度测量',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'8A-17',name:'圆内接四边形',concept:'圆内接四边形对角互补',prerequisite:'8A-16',extends:'9A-01 二次函数',visualStrategy:'内接四边形',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:false},
];

// 8B knowledge map expansion (4 -> 17)
const km8b = [
  {id:'8B-01',name:'频数与频率',concept:'频数是出现的次数，频率=频数/总数',prerequisite:'7B-10',extends:'8B-02 数据的波动',visualStrategy:'频数分布表',visualType:'barModel',coreLiteracy:'数据分析',difficulty:1,isKeyTopic:false},
  {id:'8B-02',name:'数据的波动',concept:'方差衡量数据的离散程度，方差越大数据越分散',prerequisite:'8B-01',extends:'8B-03 概率的运算',visualStrategy:'波动分析',visualType:'barModel',coreLiteracy:'数据分析',difficulty:2,isKeyTopic:true},
  {id:'8B-03',name:'概率的运算',concept:'互斥事件概率相加，独立事件概率相乘',prerequisite:'7A-15',extends:'8B-04 列举法求概率',visualStrategy:'树状图',visualType:'barModel',coreLiteracy:'随机观念',difficulty:2,isKeyTopic:false},
  {id:'8B-04',name:'列举法求概率',concept:'用列表或树状图列举所有等可能结果',prerequisite:'8B-03',extends:'8B-05 频率估计概率',visualStrategy:'树状图',visualType:'barModel',coreLiteracy:'随机观念',difficulty:2,isKeyTopic:false},
  {id:'8B-05',name:'频率估计概率',concept:'大量重复试验中，频率稳定在概率附近',prerequisite:'8B-04',extends:'8B-06 二次根式的运算',visualStrategy:'实验模拟',visualType:'barModel',coreLiteracy:'随机观念',difficulty:2,isKeyTopic:false},
  {id:'8B-06',name:'二次根式的运算',concept:'√a·√b=√(ab)，√a/√b=√(a/b)',prerequisite:'8A-01',extends:'8B-07 二次根式的化简',visualStrategy:'根式运算',visualType:'barModel',coreLiteracy:'运算能力',difficulty:2,isKeyTopic:true},
  {id:'8B-07',name:'二次根式的化简',concept:'把根号内能开方的因子开出来',prerequisite:'8B-06',extends:'8B-08 二次根式方程',visualStrategy:'化简演示',visualType:'barModel',coreLiteracy:'运算能力',difficulty:2,isKeyTopic:false},
  {id:'8B-08',name:'二次根式方程',concept:'含有二次根式的方程，注意检验增根',prerequisite:'8B-07',extends:'8B-09 勾股定理的应用',visualStrategy:'方程求解',visualType:'numberLine',coreLiteracy:'方程思想',difficulty:3,isKeyTopic:false},
  {id:'8B-09',name:'勾股定理的应用',concept:'利用勾股定理解决实际问题，如距离计算',prerequisite:'7B-06',extends:'8B-10 勾股定理的逆定理',visualStrategy:'实际应用',visualType:'geometry',coreLiteracy:'模型思想',difficulty:3,isKeyTopic:true},
  {id:'8B-10',name:'勾股定理的逆定理',concept:'若a²+b²=c²，则以a,b,c为边的三角形是直角三角形',prerequisite:'8B-09',extends:'8B-11 命题与定理',visualStrategy:'判定验证',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:false},
  {id:'8B-11',name:'命题与定理',concept:'判断真假的陈述句是命题，真命题是经过证明的定理',prerequisite:'7B-03',extends:'8B-12 逆命题与逆定理',visualStrategy:'真假判断',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:false},
  {id:'8B-12',name:'逆命题与逆定理',concept:'交换原命题的条件和结论得到逆命题，逆命题不一定是真命题',prerequisite:'8B-11',extends:'8B-13 角平分线的性质',visualStrategy:'对偶关系',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:false},
  {id:'8B-13',name:'角平分线的性质',concept:'角平分线上的点到角两边的距离相等',prerequisite:'8B-12',extends:'8B-14 线段垂直平分线',visualStrategy:'距离相等',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:false},
  {id:'8B-14',name:'线段垂直平分线',concept:'垂直平分线上的点到线段两端距离相等',prerequisite:'8B-13',extends:'8B-15 三角形的四心',visualStrategy:'对称轴',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:false},
  {id:'8B-15',name:'三角形的四心',concept:'重心、垂心、外心、内心是三角形的特殊点',prerequisite:'8B-14',extends:'8B-16 多边形内角和',visualStrategy:'特殊点定位',visualType:'geometry',coreLiteracy:'几何直观',difficulty:3,isKeyTopic:false},
  {id:'8B-16',name:'多边形内角和',concept:'n边形内角和=(n-2)×180°',prerequisite:'7B-02',extends:'8B-17 多边形外角和',visualStrategy:'内角计算',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:false},
  {id:'8B-17',name:'多边形外角和',concept:'任意多边形外角和等于360°',prerequisite:'8B-16',extends:'9A-01 二次函数',visualStrategy:'外角测量',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:false},
];

// 9A knowledge map expansion (4 -> 17)
const km9a = [
  {id:'9A-01',name:'二次函数概念',concept:'y=ax²+bx+c(a≠0)的图象是抛物线',prerequisite:'8A-02',extends:'9A-02 二次函数图象与性质',visualStrategy:'坐标系抛物线',visualType:'numberLine',coreLiteracy:'函数思想',difficulty:2,isKeyTopic:true},
  {id:'9A-02',name:'二次函数图象与性质',concept:'开口方向由a决定，顶点坐标为(-b/2a, (4ac-b²)/4a)',prerequisite:'9A-01',extends:'9A-03 二次函数与方程',visualStrategy:'动态抛物线',visualType:'numberLine',coreLiteracy:'函数思想',difficulty:3,isKeyTopic:true},
  {id:'9A-03',name:'二次函数与方程',concept:'二次函数图象与x轴交点的横坐标是对应方程的根',prerequisite:'9A-02',extends:'9A-04 二次函数最值',visualStrategy:'交点分析',visualType:'numberLine',coreLiteracy:'数形结合',difficulty:3,isKeyTopic:true},
  {id:'9A-04',name:'二次函数最值',concept:'a>0时顶点为最小值点，a<0时顶点为最大值点',prerequisite:'9A-03',extends:'9A-05 二次不等式',visualStrategy:'最值分析',visualType:'numberLine',coreLiteracy:'函数思想',difficulty:3,isKeyTopic:false},
  {id:'9A-05',name:'二次不等式',concept:'ax²+bx+c>0的解集与抛物线在x轴上方部分对应',prerequisite:'9A-04',extends:'9A-06 二次函数的应用',visualStrategy:'不等式区间',visualType:'numberLine',coreLiteracy:'模型思想',difficulty:3,isKeyTopic:false},
  {id:'9A-06',name:'二次函数的应用',concept:'用二次函数模型解决实际问题，如面积最大、利润最大',prerequisite:'9A-05',extends:'9A-07 锐角三角函数',visualStrategy:'实际应用',visualType:'numberLine',coreLiteracy:'模型思想',difficulty:3,isKeyTopic:true},
  {id:'9A-07',name:'锐角三角函数',concept:'sinA=对边/斜边，cosA=邻边/斜边，tanA=对边/邻边',prerequisite:'7B-06',extends:'9A-08 特殊角的三角函数值',visualStrategy:'直角三角形',visualType:'geometry',coreLiteracy:'运算能力',difficulty:2,isKeyTopic:true},
  {id:'9A-08',name:'特殊角的三角函数值',concept:'sin30°=1/2, cos30°=√3/2, tan30°=√3/3',prerequisite:'9A-07',extends:'9A-09 解直角三角形',visualStrategy:'特殊角对照',visualType:'geometry',coreLiteracy:'运算能力',difficulty:2,isKeyTopic:true},
  {id:'9A-09',name:'解直角三角形',concept:'已知两边或一边一角可解直角三角形',prerequisite:'9A-08',extends:'9A-10 三角函数的应用',visualStrategy:'三角形求解',visualType:'geometry',coreLiteracy:'运算能力',difficulty:3,isKeyTopic:true},
  {id:'9A-10',name:'三角函数的应用',concept:'用三角函数解决测量问题，如高度、距离计算',prerequisite:'9A-09',extends:'9A-11 弧长与扇形面积',visualStrategy:'实际测量',visualType:'geometry',coreLiteracy:'模型思想',difficulty:3,isKeyTopic:false},
  {id:'9A-11',name:'弧长与扇形面积',concept:'l=nπr/180, S=nπr²/360',prerequisite:'8A-15',extends:'9A-12 圆锥的侧面展开图',visualStrategy:'扇形展开',visualType:'geometry',coreLiteracy:'运算能力',difficulty:2,isKeyTopic:false},
  {id:'9A-12',name:'圆锥的侧面展开图',concept:'圆锥侧面展开是扇形，扇形半径=圆锥母线长',prerequisite:'9A-11',extends:'9A-13 旋转体体积',visualStrategy:'展开图',visualType:'geometry',coreLiteracy:'几何直观',difficulty:3,isKeyTopic:false},
  {id:'9A-13',name:'旋转体体积',concept:'圆锥体积=1/3·底面积·高',prerequisite:'9A-12',extends:'9A-14 投影与视图',visualStrategy:'立体展开',visualType:'geometry',coreLiteracy:'空间观念',difficulty:2,isKeyTopic:false},
  {id:'9A-14',name:'投影与视图',concept:'正投影得到三视图：主视图、俯视图、左视图',prerequisite:'9A-13',extends:'9A-15 相似三角形的判定',visualStrategy:'三视图',visualType:'geometry',coreLiteracy:'几何直观',difficulty:2,isKeyTopic:false},
  {id:'9A-15',name:'相似三角形的判定',concept:'两角对应相等、两边成比例夹角相等、三边成比例',prerequisite:'8A-08',extends:'9A-16 位似与相似',visualStrategy:'判定对比',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'9A-16',name:'位似与相似',concept:'位似是特殊的相似，位似中心到对应点的比等于位似比',prerequisite:'9A-15',extends:'9A-17 圆的切线长定理',visualStrategy:'位似变换',visualType:'geometry',coreLiteracy:'几何直观',difficulty:3,isKeyTopic:false},
  {id:'9A-17',name:'圆的切线长定理',concept:'从圆外一点引圆的两条切线，切线长相等',prerequisite:'8A-14',extends:'9B-01 圆的方程',visualStrategy:'切线作图',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:false},
];

// 9B knowledge map expansion (4 -> 17)
const km9b = [
  {id:'9B-01',name:'圆的方程',concept:'(x-a)²+(y-b)²=r²，圆心(a,b)，半径r',prerequisite:'9A-17',extends:'9B-02 直线与圆的位置关系',visualStrategy:'坐标系圆',visualType:'numberLine',coreLiteracy:'数形结合',difficulty:3,isKeyTopic:true},
  {id:'9B-02',name:'直线与圆的位置关系',concept:'相离(d>r)、相切(d=r)、相交(d<r)',prerequisite:'9B-01',extends:'9B-03 圆与圆的位置关系',visualStrategy:'距离分析',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:false},
  {id:'9B-03',name:'圆与圆的位置关系',concept:'外离、外切、相交、内切、内含五种位置关系',prerequisite:'9B-02',extends:'9B-04 正多边形与圆',visualStrategy:'圆心距分析',visualType:'geometry',coreLiteracy:'分类思想',difficulty:3,isKeyTopic:false},
  {id:'9B-04',name:'正多边形与圆',concept:'正n边形内角=(n-2)×180°/n，有外接圆和内切圆',prerequisite:'8B-16',extends:'9B-05 圆的对称性',visualStrategy:'正多边形',visualType:'geometry',coreLiteracy:'几何直观',difficulty:2,isKeyTopic:false},
  {id:'9B-05',name:'圆的对称性',concept:'圆是轴对称图形，过圆心的直线是对称轴',prerequisite:'9B-04',extends:'9B-06 垂径定理',visualStrategy:'对称演示',visualType:'geometry',coreLiteracy:'推理意识',difficulty:2,isKeyTopic:true},
  {id:'9B-06',name:'垂径定理',concept:'垂直于弦的直径平分弦，且平分弦所对的两条弧',prerequisite:'9B-05',extends:'9B-07 圆心角、弧、弦的关系',visualStrategy:'弦与直径',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'9B-07',name:'圆心角、弧、弦的关系',concept:'在同圆或等圆中，相等的圆心角所对的弧相等，弦也相等',prerequisite:'9B-06',extends:'9B-08 圆周角定理推论',visualStrategy:'圆心与圆周',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:false},
  {id:'9B-08',name:'圆周角定理推论',concept:'同弧所对的圆周角相等，直径所对的圆周角是直角',prerequisite:'9B-07',extends:'9B-09 圆内接四边形性质',visualStrategy:'角度关系',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:false},
  {id:'9B-09',name:'圆内接四边形性质',concept:'圆内接四边形对角互补，外角等于内对角',prerequisite:'9B-08',extends:'9B-10 切线的判定',visualStrategy:'内接四边形',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'9B-10',name:'切线的判定',concept:'经过半径外端且垂直于这条半径的直线是圆的切线',prerequisite:'9B-09',extends:'9B-11 切线长定理推论',visualStrategy:'切线判定',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:false},
  {id:'9B-11',name:'切线长定理推论',concept:'从圆外一点引圆的两条切线，圆心与该点的连线平分两条切线的夹角',prerequisite:'9B-10',extends:'9B-12 三角形的内切圆',visualStrategy:'切线夹角',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:false},
  {id:'9B-12',name:'三角形的内切圆',concept:'与三角形三边都相切的圆，圆心是三条角平分线的交点',prerequisite:'9B-11',extends:'9B-13 扇形面积公式',visualStrategy:'内切圆',visualType:'geometry',coreLiteracy:'几何直观',difficulty:2,isKeyTopic:false},
  {id:'9B-13',name:'扇形面积公式',concept:'S=nπr²/360=lr/2（l为弧长）',prerequisite:'9B-12',extends:'9B-14 圆锥侧面积',visualStrategy:'扇形面积',visualType:'geometry',coreLiteracy:'运算能力',difficulty:2,isKeyTopic:false},
  {id:'9B-14',name:'圆锥侧面积',concept:'S侧=πrl（r为底面半径，l为母线长）',prerequisite:'9B-13',extends:'9B-15 球的表面积与体积',visualStrategy:'展开图',visualType:'geometry',coreLiteracy:'运算能力',difficulty:3,isKeyTopic:false},
  {id:'9B-15',name:'球的表面积与体积',concept:'S=4πr²，V=4/3πr³',prerequisite:'9B-14',extends:'毕业复习',visualStrategy:'球体',visualType:'geometry',coreLiteracy:'空间观念',difficulty:2,isKeyTopic:false},
  {id:'9B-16',name:'相似三角形的综合',concept:'利用相似三角形性质解决复杂几何问题',prerequisite:'9A-15',extends:'9B-17 二次函数与几何综合',visualStrategy:'综合应用',visualType:'geometry',coreLiteracy:'推理意识',difficulty:3,isKeyTopic:true},
  {id:'9B-17',name:'二次函数与几何综合',concept:'用二次函数模型解决几何最值与存在性问题',prerequisite:'9B-16',extends:'中考总复习',visualStrategy:'函数综合',visualType:'numberLine',coreLiteracy:'函数思想',difficulty:3,isKeyTopic:true},
];

console.log('Starting data expansion...\n');

// Process in one pass - find all grade blocks and replace
const grades = ['7a', '7b', '8a', '8b', '9a', '9b'];
const kmMap = { '7a': km7a, '7b': km7b, '8a': km8a, '8b': km8b, '9a': km9a, '9b': km9b };

grades.forEach(gradeKey => {
  const km = kmMap[gradeKey];
  const gradeStart = content.indexOf(`  "${gradeKey}": {`);
  if (gradeStart === -1) {
    console.log(`WARNING: Could not find ${gradeKey}`);
    return;
  }
  
  // Find the end of this grade block (next grade or end of file)
  const remaining = content.substring(gradeStart);
  const nextGradeMatch = remaining.match(/,\n  "[0-9][ab]":\s*\{/);
  const blockEnd = nextGradeMatch ? gradeStart + nextGradeMatch.index : content.length;
  
  const block = content.substring(gradeStart, blockEnd);
  const kmMatch = block.match(/("knowledgeMap": \[)([\s\S]*?)(\]\s*,\s*"units")/);
  if (!kmMatch) {
    console.log(`WARNING: No knowledgeMap found in ${gradeKey}`);
    return;
  }
  
  const kmEntries = km.map(k => 
    `      {\n        "id": "${k.id}",\n        "name": "${k.name}",\n        "concept": "${k.concept}",\n        "prerequisite": "${k.prerequisite}",\n        "extends": "${k.extends}",\n        "visualStrategy": "${k.visualStrategy}",\n        "visualType": "${k.visualType}",\n        "coreLiteracy": "${k.coreLiteracy}",\n        "difficulty": ${k.difficulty},\n        "isKeyTopic": ${k.isKeyTopic}\n      }`
  ).join(',\n');
  
  const newBlock = block.replace(
    /("knowledgeMap": \[)([\s\S]*?)(\]\s*,\s*"units")/,
    `$1\n${kmEntries}\n    $3`
  );
  
  content = content.substring(0, gradeStart) + newBlock + content.substring(blockEnd);
  console.log(`  ${gradeKey}: ${km.length}知识点 map added`);
});

fs.writeFileSync(path, content, 'utf8');
console.log('\nDone! File updated.');

// Verify
const m2 = JSON.parse(content.slice(content.indexOf('{'), content.lastIndexOf('}')+1));
let total = 0;
Object.keys(m2).forEach(g => {
  const km = m2[g].knowledgeMap ? m2[g].knowledgeMap.length : 0;
  const pm = m2[g].problems ? m2[g].problems.length : 0;
  total += km;
  console.log(`${g}: ${km}知识点, ${pm}道题`);
});
console.log(`\n总知识点数: ${total} (目标: 231)`);
