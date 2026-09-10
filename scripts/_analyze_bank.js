// 题库体检：单元分块 / 重复 / 答案-算式一致性
const fs = require('fs'), path = require('path');
const DIR = path.join(__dirname, '..', 'data');
global.window = {};
const files = fs.readdirSync(DIR).filter(f => /^math-data-\d+[ab]\.js$/.test(f)).sort();
files.forEach(f => { try { eval(fs.readFileSync(path.join(DIR, f), 'utf8')); } catch (e) { console.log('ERR', f, e.message); } });
const G = global.window.MATH_BY_GRADE || {};

const norm = s => String(s || '').replace(/[、，,·\s（）()]/g, '');
function resolveUnit(knowledge, units) {
  const k = norm(knowledge);
  if (!k) return -1;
  let best = -1, bestLen = 0;
  units.forEach((u, ui) => {
    const un = norm(u.name);
    if (!un) return;
    if (k.includes(un) || un.includes(k)) { if (Math.min(un.length, k.length) > bestLen) { bestLen = Math.min(un.length, k.length); best = ui; } }
  });
  return best;
}

function evalFormula(f) {
  if (!f) return null;
  const m = String(f).match(/^\s*([\d.]+)\s*([+\-×x*÷/])\s*([\d.]+)\s*=\s*\?/);
  if (!m) return null;
  const a = parseFloat(m[1]), b = parseFloat(m[3]);
  if (/[+]/ .test(m[2])) return a + b;
  if (/-/.test(m[2])) return a - b;
  if (/[×x*]/.test(m[2])) return a * b;
  if (/[÷/]/.test(m[2])) return b === 0 ? null : a / b;
  return null;
}
const close = (x, y) => { const n = parseFloat(y); return isFinite(x) && isFinite(n) && Math.abs(x - n) < 1e-6; };

let TOT = { lit: 0, stem: 0, badAns: 0, badFormula: 0 };
for (const semKey of Object.keys(G)) {
  const d = G[semKey]; const ps = d.problems || []; const units = d.units || [];
  // 1) 单元分块（连续游程 + 继承）
  const runs = []; let cur = null;
  ps.forEach((p, i) => { const k = p.knowledge || '(空)'; if (!cur || cur.k !== k) { cur = { k, start: i, n: 1, unit: resolveUnit(k, units) }; runs.push(cur); } else cur.n++; });
  let last = 0; const blocks = [];
  runs.forEach(r => { const u = r.unit >= 0 ? r.unit : last; last = u; if (!blocks[u]) blocks[u] = { n: 0, kps: 0 }; blocks[u].n += r.n; blocks[u].kps++; });
  // 2) 重复
  const byQ = {}; ps.forEach((p, i) => { const q = (p.question || '').trim(); if (!q) return; (byQ[q] = byQ[q] || []).push(i); });
  let lit = 0, stem = 0;
  Object.keys(byQ).forEach(q => { const g = byQ[q]; if (g.length < 2) return; stem += g.length - 1;
    const sig = g.map(i => JSON.stringify([ps[i].answer, ps[i].formula]));
    if (new Set(sig).size === 1) lit += g.length - 1; });
  // 3) 答案 / 算式
  let badAns = 0, badFormula = 0;
  ps.forEach(p => { const v = evalFormula(p.formula); if (v !== null && !close(v, p.answer)) badAns++;
    if (p.formula && /\.\d*0\b|\d+\.\d{2,}/.test(String(p.formula)) && /[÷/]/.test(String(p.formula))) badFormula++; });
  TOT.lit += lit; TOT.stem += stem; TOT.badAns += badAns; TOT.badFormula += badFormula;
  console.log(semKey.padEnd(4), 'n=' + String(ps.length).padStart(3), '| units=' + units.length,
    '| 块:' + blocks.map((b, i) => i + ':' + (b ? b.n : 0)).join(','),
    '| 字面重复=' + lit, '同题干=' + stem, '答案≠算式=' + badAns, '怪算式=' + badFormula);
}
console.log('\nTOTAL 字面重复=' + TOT.lit, '同题干异数=' + TOT.stem, '答案≠算式=' + TOT.badAns, '怪算式=' + TOT.badFormula);
