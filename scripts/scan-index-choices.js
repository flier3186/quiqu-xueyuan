// P1 扩展扫描：主题题中 answer===0 且选项为数字编号序列（0..n）的占位坏模式
// 这类题 question 是文字问答，孩子却只能选数字，选 0 即"判对"
const fs = require('fs'), path = require('path'), vm = require('vm');
const DATA = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(DATA).filter(f => /^math-data-/.test(f) && f !== 'math-data-core.js' && f !== 'math-data.js');
let hits = [];
for (const f of files) {
  const grade = f.replace('math-data-', '').replace('.js', '');
  const code = fs.readFileSync(path.join(DATA, f), 'utf8');
  const sandbox = { window: {}, console };
  try { vm.runInNewContext(code, sandbox); } catch (e) {}
  for (const bank of Object.values(sandbox.window)) {
    if (!bank || typeof bank !== 'object') continue;
    const collect = (node, isVariant) => {
      if (!node || typeof node !== 'object') return;
      if (Array.isArray(node)) { node.forEach(n => collect(n, isVariant)); return; }
      if (node.formula !== undefined && node.answer === 0 && Array.isArray(node.choices)) {
        const cs = node.choices;
        const isIndexChoices = cs.every(c => Number.isInteger(c) && c >= 0) &&
          cs.length >= 2 && cs[0] === 0;
        const q = String(node.question || '');
        // 排除真 0 答案：问"几个/多少"且 0 合理的（如直线端点）
        const legitZero = /端点|个数.*0|剩|余|还剩|方差|温度|相差|等于几|整数部分/.test(q);
        if (isIndexChoices && !legitZero) {
          hits.push(`${f} ${isVariant ? 'variant' : 'MAIN'} "${q.slice(0, 36)}" formula=${String(node.formula).slice(0, 24)} choices=[${cs}]`);
        }
      }
      for (const [k, v] of Object.entries(node)) {
        if (k === 'variants') collect(v, true);
        else if (k !== 'discoverySteps' && k !== 'explainLayers' && typeof v === 'object') collect(v, isVariant);
      }
    };
    collect(bank, false);
  }
}
console.log('suspect index-choice placeholders:', hits.length);
hits.forEach(h => console.log(' ', h));
