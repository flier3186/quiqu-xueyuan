/**
 * 生成 data/math-chain-map.js —— knowledge（课时名）→ 知识链 step（教材单元名）映射表
 *
 * 背景（P1-6）：
 *   题库里每道题的 `knowledge` 是「课时名」（如「8的乘法口诀」），
 *   而 MATH_CHAINS 的 step 是「教材单元名」（如「表内乘法」），
 *   两者字面不同 → _mathStepStatus 按字面比对，实测覆盖率仅 7%，知识链几乎不亮。
 *
 * 做法：用一张**可审计的规则表**（规则 = 允许年级 + 名称正则）把课时名归入主线 step，
 *      生成静态映射文件；再由 scripts/_audit_chain_map.js 把关（覆盖率低于阈值即失败）。
 *
 * 用法：node scripts/_gen_chain_map.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const GRADES = ['2a','2b','3a','3b','4a','4b','5a','5b','6a','6b'];

// ---- 1. 读取各册真实知识点 ----
const { readKnowledge, REACHABLE_GRADES } = require('./_lib_math_knowledge');

// ---- 2. 规则表 ----
// ref = 主线 step 的定位串 "<chainId>|<g>|<t>"，须与 index.html 的 MATH_CHAINS 完全一致。
// g   = 限定年级（null=不限）；no = 反向正则，命中则本规则不作数（防误伤）。
// 规则按顺序求值，命中即记（允许多条命中 → 一个课时可属多条主线，符合教材"知识结构化"）。
const R = (ref, re, g, no) => ({ ref, re, g: g || null, no: no || null });

const RULES = [
  // ===== 数量关系模型 model =====
  // 注意：不能用裸 /加减/ —— 会误伤"分数加减/小数加减"。加年级限定 + 反向排除。
  R('model|1b|数量间的加减关系',
    /不进位加|进位加|不退位减|退位减|连加连减|加减法验算|加法笔算|减法笔算|万以内加减|万以内的加法和减法|两位数加两位数|两位数减两位数|几百几十加减|Bar ?Model入门|^解决问题$/,
    ['2a','2b','3a'], /分数|小数|百分|乘|除/),
  R('model|2b|数量间的乘除关系', /倍的认识|倍比|混合运算|数量间的乘除关系/),
  R('model|4a|加法模型和乘法模型',
    /单价数量总价|速度时间路程|优化问题|四则运算|各部分关系|运算定律|交换律|结合律|分配律|简便运算|租船问题|Bar ?Model翻译行|乘法模型|路程问题|和倍问题|盈亏问题/,
    null, /分数|小数/),
  R('model|5a|用字母表示数量关系', /用字母表示|方程|等式|解方程/),
  R('model|6a|分数与百分数数量关系', /已知.*几分之几.*求|工程问题|分数乘除法解决问题/),

  // ===== 乘法运算的一致性 mul =====
  R('mul|2a|表内乘法', /乘法口诀|乘法的初步认识|表内乘|用乘法解决问题/),
  R('mul|3a|多位数乘一位数', /乘法|多位数乘一位数|因数中间有0|因数末尾有0/, ['3a']),
  R('mul|4a|多位数乘两位数', /两位数乘|三位数乘|连乘问题|积的变化规律|因数有0的乘法/),
  R('mul|5a|小数乘法', /小数乘|积的近似数|运算定律推广到小数/),
  R('mul|6a|分数乘法', /分数乘|倒数/),

  // ===== 除法运算的一致性 div =====
  R('div|2b|有余数的除法', /表内除法|表内乘、除法|有余数的除法/),
  R('div|3b|除数是一位数的除法', /口算除法|笔算除法|三位数除一位数|除法验算|商中间有0|商末尾有0|除法估算|连除问题/, ['3b']),
  R('div|4b|除数是两位数的除法', /整十数除|除数是整十数|除数是两位数的除法|试商|商的变化规律/),
  R('div|5a|小数除法', /小数除法|小数的除法|商的近似数|循环小数/),
  R('div|6a|分数除法', /分数除以整数|除以分数|分数混合运算|分数除法|分数乘除法解决问题/),

  // ===== 分数—除法—比—百分数 frac =====
  R('frac|3a|分数的初步认识', /分数初步认识|分数比较大小|同分母分数加减|分数简单应用|分数认识·分数圆|分数认识·分数条|等值分数·分数墙/),
  R('frac|5b|分数的认识与加减',
    /分数的意义|分数与除法|真分数|假分数|带分数|分数的基本性质|最大公因数|最小公倍数|约分|通分|分数和小数的互化|同分母分数加减法|异分母分数加减|分数加减混合/),
  R('frac|6a|分数乘除', /分数乘|分数除以整数|除以分数|分数混合运算|倒数|数与形（分数序列）/),
  R('frac|6a|百分数', /百分数|百分率|百分之几|折扣|成数|税率|利率/),
  R('frac|6b|比和比例关系', /比的意义|化简比|按比分配|比的基本性质|比例|正比例|反比例/),

  // ===== 图形的认识与测量 measure =====
  // 度量单位本位（厘米/米/毫米/分米/千米/吨）与周长同属"包含多少个度量单位"这条度量主线
  R('measure|3b|长方形、正方形的周长与面积',
    /周长|面积单位|面积实际问题|长方形面积|正方形面积|四边形的认识|长方形正方形特征|公顷的认识|平方千米的认识|认识厘米|认识米|长度单位|长度单位换算|毫米的认识|分米的认识|千米的认识|吨的认识|毫米、分米和千米|质量单位|身体上的尺子|克和千克/,
    null, /平行四边形|梯形|内角和|组合图形|不规则/),
  R('measure|4a|平行四边形和梯形',
    /平行与垂直|画垂线和平行线|平行四边形和梯形|平行四边形的特征|四边形内角和|线段直线射线|角的度量|角的分类|画指定度数的角|认识角|直角|锐角钝角|线段$/),
  R('measure|4b|三角形', /三角形/),
  R('measure|5a|多边形的面积', /平行四边形的?面积|三角形的面积|梯形的面积|组合图形的面积|不规则图形的面积估算|多边形面积/),
  R('measure|6a|圆（周长与面积）', /圆的|圆环的面积|扇形(?!统计图)/),
  R('measure|6b|圆柱和圆锥', /圆柱|圆锥|长方体|正方体|体积|容积|排水法/),

  // ===== 位置与方向 position =====
  R('position|3b|生活中的运动现象（平移旋转）', /图形的运动|轴对称|平移|旋转/, null, /数对/),
  R('position|4a|寻找宝藏（方向位置）', /东南西北|八个方向|描述行走路线|校园小导游/),
  R('position|6a|确定位置（数对+方向距离）', /数对|方向和距离|绘制路线图/),
  R('position|6b|校园平面图（比例尺）', /比例尺|图形的放大与缩小/),

  // ===== 数据意识的培养 data =====
  R('data|3b|数据的收集与整理', /统计表|分类与整理/),
  R('data|4a|条形统计图', /条形统计图|平均数/),
  R('data|5b|折线统计图', /折线统计图/),
  R('data|6b|扇形统计图', /扇形统计图|选择合适的统计图|统计图的选择/),

  // ===== 数系的扩展 num =====
  R('num|2b|万以内数的认识', /万以内数的认识|万以内加减法/),
  R('num|4a|万以上数的认识', /亿以内|亿以上|亿有多大|1亿|十进制计数法|计算器使用|求近似数|大数的改写/),
  // 小数的认识：只收"认识/性质/读写/比较/换算/加减"，不收"小数乘除"（那是 mul/div 主线）
  R('num|4b|小数的认识',
    /小数的意义|小数的性质|小数的读法和写法|小数大小比较|小数比较大小|小数点移动|小数与单位换算|求小数近似数|小数初步认识|小数的读写|小数加减法|小数加减混合运算|分数小数统一/),
  R('num|5b|分数的认识', /分数的意义|分数与除法|真分数|假分数|带分数|分数的基本性质/),
  R('num|6a|生活中的负数', /负数/),
];

function normK(k) {
  return String(k || '').replace(/（[^）]*）/g, '').replace(/\([^)]*\)/g, '').replace(/\s+/g, '').trim();
}

// ---- 3. 生成 ----
const items = readKnowledge();
const map = {};
const hitsByRef = {};
const unmapped = [];

for (const it of items) {
  const nk = normK(it.k);
  const refs = [];
  for (const r of RULES) {
    if (r.g && r.g.indexOf(it.g) < 0) continue;
    if (r.no && r.no.test(it.k)) continue;
    if (!r.re.test(it.k)) continue;
    if (refs.indexOf(r.ref) < 0) refs.push(r.ref);
  }
  if (refs.length) {
    const prev = map[nk] || [];
    map[nk] = Array.from(new Set(prev.concat(refs)));
    refs.forEach((r) => { (hitsByRef[r] = hitsByRef[r] || []).push(it.g + '/' + it.k); });
  } else {
    unmapped.push(it.g + '/' + it.k);
  }
}

// ---- 3.5 校验：每条 ref 必须真实存在于 MATH_CHAINS（防规则写错字导致永不点亮）----
const chainsSrc = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const cm = chainsSrc.match(/var MATH_CHAINS = \[[\s\S]*?\n\];/);
const validRefs = new Set();
if (cm) {
  const block = cm[0];
  const ids = [];
  const reChainId = /id:'([^']+)'/g;
  let c;
  while ((c = reChainId.exec(block))) ids.push({ id: c[1], at: c.index });
  const reStep = /\{g:'([^']+)',t:'([^']+)'\}/g;
  let p;
  while ((p = reStep.exec(block))) {
    const chain = ids.filter((x) => x.at < p.index).pop();
    if (chain) validRefs.add(chain.id + '|' + p[1] + '|' + p[2]);
  }
}
const badRefs = Object.keys(hitsByRef).filter((r) => !validRefs.has(r));
if (badRefs.length) {
  console.log('\n!!! 规则里的 ref 不存在于 MATH_CHAINS（会永远点不亮）:');
  badRefs.forEach((r) => console.log('   ' + r));
}
const neverHit = [...validRefs].filter((r) => !hitsByRef[r]);
console.log('\nMATH_CHAINS 有效 step 数:', validRefs.size, ' 被规则覆盖:', Object.keys(hitsByRef).length,
  ' 无课时可点的 step:', neverHit.length);
neverHit.forEach((r) => console.log('   (空) ' + r));
if (badRefs.length) process.exitCode = 2;

// ---- 4. 覆盖率报告 ----
const total = items.length;
const mapped = total - unmapped.length;
console.log('知识点总数(去重后 册×名称):', total);
console.log('已入主线:', mapped, '  未入主线:', unmapped.length,
  '  覆盖率:', (mapped / total * 100).toFixed(1) + '%');
// 体验指标：只统计 UI 可达年级（2~6），见 _lib_math_knowledge.js 的说明
const reach = items.filter((it) => REACHABLE_GRADES.indexOf(it.g) >= 0);
const reachMapped = reach.filter((it) => map[normK(it.k)]).length;
console.log('[可达年级 2-6] 知识点', reach.length, ' 已入主线', reachMapped,
  ' 覆盖率', (reachMapped / reach.length * 100).toFixed(1) + '%',
  ' 题量加权', (reach.filter((it) => map[normK(it.k)]).reduce((a, b) => a + b.n, 0) / reach.reduce((a, b) => a + b.n, 0) * 100).toFixed(1) + '%');

// 按题量加权（对照评估报告口径：802 题）
let wTot = 0, wHit = 0;
for (const it of items) { wTot += it.n; if (map[normK(it.k)]) wHit += it.n; }
console.log('按题量加权覆盖率:', (wHit / wTot * 100).toFixed(1) + '%', `(${wHit}/${wTot} 题)`);

console.log('\n--- 各主线 step 命中课时数 ---');
const refKeys = Object.keys(hitsByRef).sort();
for (const k of refKeys) console.log('  ' + k.padEnd(46) + ' ' + hitsByRef[k].length);

console.log('\n--- 未入主线的知识点（共 ' + unmapped.length + '）---');
unmapped.forEach((u) => console.log('  ' + u));

// ---- 5. 写文件 ----
const out = `/**
 * AUTO-GENERATED by scripts/_gen_chain_map.js —— 请勿手改。
 * 生成时间: ${new Date().toISOString().slice(0, 10)}
 *
 * 作用：把题目的 knowledge（课时名）映射到 MATH_CHAINS 的主线 step（教材单元名），
 *      解决"课时名 ≠ 单元名"导致知识链几乎不点亮的问题（P1-6）。
 *
 * 键 = 规范化后的 knowledge（去括号注释/空白，见 index.html 的 _normK）
 * 值 = ["<chainId>|<册>|<step单元名>", ...]
 *
 * 维护：改题库 knowledge 或改 MATH_CHAINS 后，重跑 node scripts/_gen_chain_map.js，
 *      再由 node scripts/_audit_chain_map.js 把关覆盖率。
 */
window.MATH_CHAIN_MAP = ${JSON.stringify(map, null, 1)};
window.MATH_CHAIN_MAP_META = {
  generated: '${new Date().toISOString().slice(0, 10)}',
  knowledgeTotal: ${total},
  knowledgeMapped: ${mapped},
  coverage: ${(mapped / total).toFixed(4)},
  weightedCoverage: ${(wHit / wTot).toFixed(4)}
};
`;
fs.writeFileSync(path.join(ROOT, 'data', 'math-chain-map.js'), out, 'utf8');
console.log('\n已写入 data/math-chain-map.js（' + Object.keys(map).length + ' 条映射）');
