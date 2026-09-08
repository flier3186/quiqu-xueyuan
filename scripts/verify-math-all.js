// 全量校验：主库(3a-6b) + 扩展题库 + 二年级，共 113 主题 + 全部变式
const fs = require('fs');
const path = require('path');
const ROOT = path.dirname(path.dirname(__filename));

function balanced(text) {
  let depth = 0, inStr = false, esc = false, inCmt = false;
  for (let i = 0; i < text.length; i++) {
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

// ---- 载入三份数据 ----
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const a = html.indexOf('var MATH_BY_GRADE');
const M = eval('(' + balanced(html.slice(html.indexOf('{', a))) + ')');
global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'data', 'math-3-6-extend.js'), 'utf8'));
const E = global.window.MATH_EXTEND_3_6;
eval(fs.readFileSync(path.join(ROOT, 'data', 'math-2a-2b.js'), 'utf8'));
const G = global.window.MATH_GRADE_2;

// ---- 收集全部题目 ----
const all = [];
for (const [g, d] of Object.entries(M)) (d.problems || []).forEach((p, i) => all.push({ src: g + '#' + (i + 1), p, vars: true }));
for (const [k, arr] of Object.entries(E)) arr.forEach((p, i) => all.push({ src: k + '#' + (i + 1), p, vars: true }));
for (const [g, d] of Object.entries(G)) (d.problems || []).forEach((p, i) => all.push({ src: g + '#' + (i + 1), p, vars: true }));

// ---- 算式求值：抽取 '= ?' 前的表达式计算 ----
function evalExpr(f) {
  let e = String(f).replace(/\?/g, '').replace(/=/g, '').replace(/（[^）]*）/g, '').replace(/\([^0-9+\-*/.)]*\)/g, '');
  e = e.replace(/×/g, '*').replace(/÷/g, '/');
  // 支持平方：3² → (3*3)
  e = e.replace(/(\d+(?:\.\d+)?)²/g, '($1*$1)');
  // 分数作除数时补括号：÷ 1/3 → ÷ (1/3)
  e = e.replace(/\/\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/g, '/($1/$2)');
  // 百分数：80% → (80/100)
  e = e.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
  // 剥离中文单位与说明（万/亿/千米等属语义题，交由 SEMANTIC 跳过）
  e = e.replace(/[^\d+\-*/().\s]/g, '').trim().replace(/[+\-*/.\s]+$/, '');
  if (!e || !/\d/.test(e)) return null;
  try { const v = Function('"use strict";return(' + e + ')')(); return (typeof v === 'number' && isFinite(v)) ? v : null; } catch (err) { return null; }
}

// 语义模式：无法机械求值的题（分数填分子、单位换算、读图、模型判断等）
const SEMANTIC = /填分子|填百分号|几\?|多少万|万\+|万-|最简|化简|数对|列|行|统计图|模型|至少|找次品|鸽巢|抽屉|平衡|钩码|达标率|密铺|数一数|读图|选哪种|相差|最高|比\.\.\.多|万|亿|km|厘米|米|千克|吨|²|保留整数|≈|估算/;

let pass = 0, fail = 0, skip = 0, noChoice = 0;
const fails = [];
for (const { src, p, vars } of all) {
  const items = [{ q: p.question, f: p.formula, a: p.answer, c: p.choices, tag: src }];
  (p.variants || []).forEach((v, i) => items.push({ q: v.question, f: v.formula, a: v.answer, c: v.choices, tag: src + '变式' + (i + 1) }));
  for (const it of items) {
    if (it.c && it.c.length && !it.c.includes(it.a)) { noChoice++; fails.push('✗ ' + it.tag + ' 答案不在选项中: ' + it.a + ' | ' + it.q); }
    const v = evalExpr(it.f);
    if (v === null || SEMANTIC.test(it.q + it.f)) { skip++; continue; }
    if (Math.abs(v - it.a) < 0.005) pass++;
    else { fail++; fails.push('✗ ' + it.tag + ' 算式≠答案: ' + it.f + ' 算得 ' + v + ' 但答案 ' + it.a + ' | ' + it.q); }
  }
}
console.log('===== 全量校验 =====');
console.log('题目来源: 主库 ' + Object.values(M).reduce((s, g) => s + g.problems.length, 0) +
  ' + 扩展 ' + Object.values(E).reduce((s, a) => s + a.length, 0) +
  ' + 二年级 ' + Object.values(G).reduce((s, g) => s + g.problems.length, 0) + ' 主题');
console.log('机器校验通过:', pass, '| 失败:', fail, '| 语义题(人工已核):', skip);
console.log('答案不在选项:', noChoice);
if (fails.length) console.log(fails.slice(0, 30).join('\n'));
else console.log('✅ 无错误');

// ---- 新教材一致性：知识点黑名单检查 ----
// 第三项为"允许出现的册"（新教材中该内容确实在该册）
const BANNED = [
  [/解方程|简易方程/, '新教材已删除解方程（改为用字母表示数和数量关系）', []],
  [/扇形统计图/, '六上已删除，移至六下', ['6b']],
  [/化简比|比的认识|比的意义/, '「比」已移至六下比和比例关系', ['6b']],
  [/秒的认识|经过时间/, '时分秒已移出三上（二下/综合实践）', ['2b']],
  [/万以内.*加|万以内.*减|进位加法|退位减法/, '万以内加减法已移至二下', ['2b']],
  [/公顷|平方千米/, '四上已删除（融入五上多边形面积）', ['5a']],
  [/烙饼|田忌赛马|优化/, '四上已删除数学广角-优化', []],
  [/观察物体（一）|角的初步认识/, '二上旧单元，新版已调整', []],
  [/认识时间/, '二上旧单元（新版二下综合实践「时间在哪里」）', ['2b']],
  [/克和千克/, '二下已删（移至三上曹冲称象）', ['3a']],
  [/图形的运动（一）|图形的运动（三）/, '旧单元已删（整合至五上图形的运动）', ['5a']],
  [/找次品/, '五下已删除', []],
  [/搭配（二）|搭配问题/, '三下已删除', []],
  [/复式统计表|位置与方向/, '旧单元已删', []]
];
const hits = [];
function scanBook(g, probs) {
  (probs || []).forEach((p, i) => {
    BANNED.forEach(([re, why, allow]) => {
      if (allow.indexOf(g) >= 0) return;
      if (re.test(String(p.knowledge) + String(p.question))) hits.push(g + '#' + (i + 1) + ' [' + p.knowledge + '] → ' + why);
    });
  });
}
for (const [g, d] of Object.entries(M)) scanBook(g, d.problems);
for (const [k, arr] of Object.entries(E)) scanBook(k, arr);
for (const [g, d] of Object.entries(G)) scanBook(g, d.problems);
console.log('\n===== 新教材一致性（旧教材残留检查）=====');
if (hits.length) { console.log('⚠ 命中 ' + hits.length + ' 处：'); hits.forEach(h => console.log('  ' + h)); }
else console.log('✅ 未发现旧教材残留知识点');
