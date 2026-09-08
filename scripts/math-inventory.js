// 题库全景盘点：年级 / 单元 / 知识点 / 题目情境
const fs = require('fs');
const path = require('path');
const ROOT = path.dirname(path.dirname(__filename));
const lines = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8').split('\n');

function balanced(text) {
  let depth = 0, inStr = false, esc = false, inCmt = false;
  const b = text.indexOf('{');
  for (let i = b; i < text.length; i++) {
    const c = text[i], n = text[i + 1];
    if (inCmt) { if (c === '\n') inCmt = false; continue; }
    if (inStr) { if (esc) { esc = false; continue; } if (c === '\\') { esc = true; continue; } if (c === "'") inStr = false; continue; }
    if (c === '/' && n === '/') { inCmt = true; continue; }
    if (c === "'") { inStr = true; continue; }
    if (c === '{') depth++;
    if (c === '}') { depth--; if (depth === 0) return text.slice(b, i + 1); }
  }
  return null;
}

const start = lines.findIndex(l => l.includes('var MATH_BY_GRADE'));
const M = eval('(' + balanced(lines.slice(start).join('\n')) + ')');

const GRADE_NAME = { '3a': '三上', '3b': '三下', '4a': '四上', '4b': '四下', '5a': '五上', '5b': '五下', '6a': '六上', '6b': '六下' };
const out = [];
let totalMain = 0, totalVar = 0;
const knowledgeCount = {};

for (const [g, d] of Object.entries(M)) {
  const probs = d.problems || [];
  const varN = probs.reduce((s, p) => s + (p.variants || []).length, 0);
  totalMain += probs.length; totalVar += varN;
  out.push('## ' + g + '（' + (GRADE_NAME[g] || g) + '）主题 ' + probs.length + ' 题，变式 ' + varN + ' 题');
  out.push('教材单元(units): ' + JSON.stringify(d.units || []));
  probs.forEach((p, i) => {
    const k = p.knowledge || '?';
    knowledgeCount[k] = (knowledgeCount[k] || 0) + 1;
    out.push('  #' + (i + 1) + ' [' + k + ' | 难' + (p.difficulty || '?') + ' | ' + (p.visualType || '无图') + '] ' + (p.question || '').slice(0, 46));
    out.push('       情境: ' + (p.scene || '').slice(0, 40) + '  算式: ' + (p.formula || ''));
  });
  out.push('');
}

console.log(out.join('\n'));
console.log('=== 总计：主题 ' + totalMain + ' 题，变式 ' + totalVar + ' 题，共 ' + (totalMain + totalVar) + ' 题');
console.log('\n=== 知识点分布（全库）');
Object.entries(knowledgeCount).sort((a, b) => b[1] - a[1]).forEach(([k, n]) => console.log('  ' + n + ' 题 | ' + k));

fs.writeFileSync(path.join(ROOT, 'scripts', '_math_inventory.txt'), out.join('\n'), 'utf8');
