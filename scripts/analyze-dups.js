// 精确量化真重复：同年级内 算式+答案+场景+问题 完全一致的题分组
// 区分：主题重复（有 id，真冗余）vs variants 内部（设计性变体，通常可接受）
const fs = require('fs'), path = require('path'), vm = require('vm');
const DATA = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(DATA).filter(f => /^math-data-/.test(f) && f !== 'math-data-core.js' && f !== 'math-data.js');
const groups = {}; // key -> {grade, formula, answer, scene, question, main:[ids], variants:n}
for (const f of files) {
  const grade = f.replace('math-data-', '').replace('.js', '');
  const code = fs.readFileSync(path.join(DATA, f), 'utf8');
  const sandbox = { window: {}, console };
  try { vm.runInNewContext(code, sandbox); } catch (e) {}
  const banks = Object.values(sandbox.window).filter(v => v && typeof v === 'object');
  const collect = (node, isVariant, out) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { node.forEach(n => collect(n, isVariant, out)); return; }
    if (node.formula !== undefined) out.push({ node, isVariant });
    for (const [k, v] of Object.entries(node)) {
      if (k === 'variants') collect(v, true, out);
      else if (k !== 'discoverySteps' && k !== 'explainLayers' && typeof v === 'object') collect(v, isVariant, out);
    }
  };
  for (const bank of banks) {
    const out = [];
    collect(bank, false, out);
    for (const { node, isVariant } of out) {
      const formula = String(node.formula || '').replace(/\s/g, '');
      const ans = String(node.answer);
      const ctx = String(node.scene || '') + '|' + String(node.question || '');
      const key = grade + '@' + formula + '=' + ans + '#' + ctx;
      if (!groups[key]) groups[key] = { grade, formula, ans, ctx, main: 0, variants: 0, ids: [] };
      if (isVariant) groups[key].variants++;
      else { groups[key].main++; if (node.id) groups[key].ids.push(node.id); }
    }
  }
}
const dups = Object.values(groups).filter(g => (g.main + g.variants) > 1);
const mainDups = dups.filter(g => g.main > 1);
const varDups = dups.filter(g => g.main <= 1 && g.variants > 1);
console.log('总组数:', Object.keys(groups).length, '| 重复组:', dups.length);
console.log('主题重复组(真冗余):', mainDups.length, '涉及主题数:', mainDups.reduce((s, g) => s + g.main, 0));
console.log('仅variants重复(设计性):', varDups.length);
console.log('\n--- 主题重复 Top 15 ---');
mainDups.sort((a, b) => b.main - a.main).slice(0, 15).forEach(g =>
  console.log(`${g.grade} ×${g.main} [${g.ids.slice(0, 4).join(',')}] ${g.formula}=${g.ans} ${g.ctx.slice(0, 30)}`));
