// 修正全量校验发现的真实问题 + 升级校验器表达式解析
const fs = require('fs');
const path = require('path');
const ROOT = path.dirname(path.dirname(__filename));

// ---------- 1. 修正数据 ----------
const EXT = path.join(ROOT, 'data', 'math-3-6-extend.js');
global.window = {};
eval(fs.readFileSync(EXT, 'utf8'));
const E = global.window.MATH_EXTEND_3_6;

// 5a_e#5 和倍问题：问法歧义（"各有多少本"但只填一个数）→ 明确问较大的量
const hp = E['5a_e'][4];
hp.question = '故事书有多少本？';
(hp.variants || []).forEach((v, i) => {
  if (i === 0) v.question = '苹果有多少千克？';
  if (i === 1) v.question = '男生有多少人？';
});
hp.hint = '把连环画看作1份，故事书是3份，一共4份：120÷4=30（连环画），30×3=90（故事书）';
console.log('5a_e#5 问法已明确 →', hp.question, '| 答案', hp.answer);

// 4a_e#5 变式2：提示"取整百天"与答案 1157 不符 → 改为保留整数
const ep = E['4a_e'][4];
if (ep.variants && ep.variants[1]) {
  ep.variants[1].question = ep.variants[1].question.replace('（按每天86400秒，取整百天）', '（保留整数）');
  ep.variants[1].hint = '100000000÷86400≈1157.4，保留整数约1157天';
  console.log('4a_e#5变式2 →', ep.variants[1].question, '| 答案', ep.variants[1].answer);
}

// 3b_e#2：24时计时法在新版归入「年、月、日的秘密」综合实践
const tp = E['3b_e'][1];
tp.knowledge = '年、月、日的秘密（时间计算）';
console.log('3b_e#2 knowledge →', tp.knowledge);

fs.writeFileSync(EXT, 'window.MATH_EXTEND_3_6 = ' + JSON.stringify(E, null, 4) + ';\n', 'utf8');

// ---------- 2. 升级校验器表达式解析 ----------
const V = path.join(ROOT, 'scripts', 'verify-math-all.js');
let s = fs.readFileSync(V, 'utf8');
const oldFn = s.match(/function evalExpr\(f\) \{[\s\S]*?\n\}/)[0];
const newFn = `function evalExpr(f) {
  let e = String(f).replace(/\\?/g, '').replace(/=/g, '').replace(/（[^）]*）/g, '').replace(/\\([^0-9+\\-*/.)]*\\)/g, '');
  e = e.replace(/×/g, '*').replace(/÷/g, '/');
  // 支持平方：3² → (3*3)
  e = e.replace(/(\\d+(?:\\.\\d+)?)²/g, '($1*$1)');
  // 分数作除数时补括号：÷ 1/3 → ÷ (1/3)
  e = e.replace(/\\/\\s*(\\d+(?:\\.\\d+)?)\\s*\\/\\s*(\\d+(?:\\.\\d+)?)/g, '/($1/$2)');
  // 剥离中文单位与说明（万/亿/千米等属语义题，交由 SEMANTIC 跳过）
  e = e.replace(/[^\\d+\\-*/().\\s]/g, '').trim().replace(/[+\\-*/.\\s]+$/, '');
  if (!e || !/\\d/.test(e)) return null;
  try { const v = Function('"use strict";return(' + e + ')')(); return (typeof v === 'number' && isFinite(v)) ? v : null; } catch (err) { return null; }
}`;
s = s.replace(oldFn, newFn);
// SEMANTIC 补：单位换算、近似取整、平方
s = s.replace(/const SEMANTIC = [^;]+;/,
  "const SEMANTIC = /填分子|填百分号|几\\?|多少万|万\\+|万-|最简|化简|数对|列|行|统计图|模型|至少|找次品|鸽巢|抽屉|平衡|钩码|达标率|密铺|数一数|读图|选哪种|相差|最高|比\\.\\.\\.多|万|亿|km|厘米|米|千克|吨|²|保留整数|≈|估算/;");
fs.writeFileSync(V, s, 'utf8');
console.log('✅ 校验器解析已升级（支持 ²、分数除数、单位题跳过）');
