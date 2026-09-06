// 数学题库全量校验：算式↔答案、选项、变式、可视化数据、文本卫生
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

// 从指定行提取完整平衡块
function extractBlock(start0) {
  let depth = 0, buf = [];
  for (let i = start0; i < lines.length; i++) {
    buf.push(lines[i]);
    for (const ch of lines[i]) {
      if (ch === '{') depth++;
      if (ch === '}') { depth--; if (depth === 0) return buf.join('\n'); }
    }
  }
  return buf.join('\n');
}

const start = lines.findIndex(l => l.includes('var MATH_BY_GRADE'));
const full = lines.slice(start).join('\n');
// 字符串/注释感知的平衡块提取
function balancedBlock(text) {
  const begin = text.indexOf('{');
  let depth = 0, inStr = false, inCmt = false, esc = false;
  for (let i = begin; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (inCmt) { if (c === '\n') inCmt = false; continue; }
    if (inStr) {
      if (esc) { esc = false; continue; }
      if (c === '\\') { esc = true; continue; }
      if (c === "'") inStr = false;
      continue;
    }
    if (c === '/' && n === '/') { inCmt = true; continue; }
    if (c === "'") { inStr = true; continue; }
    if (c === '{') depth++;
    if (c === '}') { depth--; if (depth === 0) return text.slice(begin, i + 1); }
  }
  return null;
}
const src = balancedBlock(full);
if (!src) { console.log('提取失败'); process.exit(1); }
const MATH_BY_GRADE = eval('(' + src + ')');

let totalProblems = 0, totalVariants = 0;
const fails = [];
function calc(expr) {
  // 只允许数字与运算符的安全求值
  const clean = String(expr).replace(/[=？”?！!\s]/g, '').replace(/[x×]/g, '*').replace(/[÷]/g, '/');
  if (!/^[-+*/().0-9]+$/.test(clean)) return null;
  try { return Function('"use strict";return (' + clean + ')')(); } catch (e) { return null; }
}
function near(a, b) { return Math.abs(a - b) < 1e-9; }

for (const [grade, gd] of Object.entries(MATH_BY_GRADE)) {
  (gd.problems || []).forEach((p, pi) => {
    totalProblems++;
    const tag = `${grade}#${pi + 1}`;
    // 1 算式 vs 答案
    if (p.formula) {
      const v = calc(p.formula);
      if (v === null) fails.push(`${tag} formula 不可解析: ${p.formula}`);
      else if (!near(v, p.answer)) fails.push(`${tag} 答案不一致: formula=${p.formula} 计算=${v} answer=${p.answer}`);
    }
    // 2 选项
    if (p.choices) {
      if (!p.choices.includes(p.answer)) fails.push(`${tag} answer ${p.answer} 不在 choices [${p.choices}]`);
      if (new Set(p.choices).size !== p.choices.length) fails.push(`${tag} choices 有重复: [${p.choices}]`);
      if (p.choices.length < 3 || p.choices.length > 4) fails.push(`${tag} choices 数量异常: ${p.choices.length}`);
    }
    // 3 可视化
    const vd = p.visualData;
    if (vd && vd.parts && vd.total !== undefined) {
      const sum = vd.parts.reduce((s, x) => s + (+x.val || 0), 0);
      if (!near(sum, vd.total)) fails.push(`${tag} visualData parts 和=${sum} ≠ total=${vd.total} (${p.visualType})`);
      if (p.visualType === 'barModel' && !near(vd.total, p.answer)) fails.push(`${tag} barModel total=${vd.total} ≠ answer=${p.answer}`);
    }
    // 4 数值卫生
    if (!isFinite(p.answer)) fails.push(`${tag} answer 非有限数: ${p.answer}`);
    if (p.answer < 0) fails.push(`${tag} answer 为负: ${p.answer}`);
    // 5 文本卫生
    for (const [k, v] of [['scene', p.scene], ['question', p.question], ['hint', p.hint]]) {
      if (v && /[<>]|undefined|NaN/.test(String(v))) fails.push(`${tag} ${k} 含异常字符: ${String(v).slice(0, 40)}`);
    }
    // 6 变式
    (p.variants || []).forEach((v, vi) => {
      totalVariants++;
      const vt = `${tag}变式${vi + 1}`;
      if (v.formula) {
        const c = calc(v.formula);
        if (c === null) fails.push(`${vt} formula 不可解析: ${v.formula}`);
        else if (!near(c, v.answer)) fails.push(`${vt} 答案不一致: ${v.formula} 计算=${c} answer=${v.answer}`);
      }
      if (v.answer === undefined || !isFinite(v.answer)) fails.push(`${vt} answer 缺失/非法`);
      if (v.question && /[<>]|undefined|NaN/.test(v.question)) fails.push(`${vt} question 含异常字符`);
    });
  });
}

console.log(`年级: ${Object.keys(MATH_BY_GRADE).join(', ')}`);
console.log(`主题: ${totalProblems} | 变式: ${totalVariants} | 合计: ${totalProblems + totalVariants}`);
console.log(`FAIL: ${fails.length}`);
fails.forEach(f => console.log('  ✗ ' + f));
if (!fails.length) console.log('  全部通过 ✓');
