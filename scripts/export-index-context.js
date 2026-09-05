// 导出 26 条占位题的完整上下文（scene/hint/discoverySteps/explainLayers 中通常藏着正确答案）
const fs = require('fs'), path = require('path'), vm = require('vm');
const DATA = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(DATA).filter(f => /^math-data-/.test(f) && f !== 'math-data-core.js' && f !== 'math-data.js');
const out = [];
for (const f of files) {
  const code = fs.readFileSync(path.join(DATA, f), 'utf8');
  const sandbox = { window: {}, console };
  try { vm.runInNewContext(code, sandbox); } catch (e) {}
  for (const bank of Object.values(sandbox.window)) {
    if (!bank || typeof bank !== 'object') continue;
    const walkProblems = (node) => {
      if (!node || typeof node !== 'object') return;
      if (Array.isArray(node)) { node.forEach(walkProblems); return; }
      if (node.formula !== undefined && node.answer === 0 && Array.isArray(node.choices)) {
        const cs = node.choices;
        const q = String(node.question || '');
        const isIndex = cs.every(c => Number.isInteger(c) && c >= 0) && cs.length >= 2 && cs[0] === 0;
        const legitZero = /端点|个数.*0|剩|余|还剩|方差|温度|相差|等于几|整数部分|相等填0/.test(q);
        if (isIndex && !legitZero) {
          out.push('==================== ' + f);
          out.push('Q: ' + q);
          out.push('F: ' + node.formula);
          out.push('SCENE: ' + String(node.scene || '').slice(0, 90));
          out.push('HINT: ' + String(node.hint || '').slice(0, 90));
          out.push('CHOICES: ' + JSON.stringify(node.choices));
          if (node.variants) out.push('VARIANTS: ' + JSON.stringify(node.variants.map(v => ({ q: v.question, a: v.answer, f: v.formula }))));
          if (node.discoverySteps) out.push('STEPS: ' + node.discoverySteps.map(s => s.explain || s.q).join(' / ').slice(0, 220));
          if (node.explainLayers) out.push('LAYERS: ' + node.explainLayers.map(s => s.text).join(' / ').slice(0, 220));
        }
      }
      Object.values(node).forEach(v => { if (v && typeof v === 'object' && !Array.isArray(v) === false || (v && typeof v === 'object')) walkProblems(v); });
    };
    walkProblems(bank);
  }
}
fs.writeFileSync(path.join(__dirname, 'index-choice-context.txt'), out.join('\n'), 'utf8');
console.log('exported', out.filter(l => l.startsWith('====')).length, 'problems');
