const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

function extractBlock(startLine0) {
  let depth = 0, buf = [];
  for (let i = startLine0; i < lines.length; i++) {
    buf.push(lines[i]);
    for (const ch of lines[i]) { if (ch === '{' || ch === '[') depth++; if (ch === '}' || ch === ']') { depth--; if (depth === 0) return buf.join('\n'); } }
  }
  return buf.join('\n');
}

// VOCAB_BY_GRADE（2692 行起）
let vb = extractBlock(2691);
const words = [...vb.matchAll(/w:'([^']+)'/g)].map(x => x[1]);
console.log('VOCAB_BY_GRADE 词条:', words.length, '| 年级:', (vb.match(/\d+\s*:\s*\[/g) || []).length);

// MATH_BY_GRADE（1474 行起）
let mb = extractBlock(1473);
console.log('MATH_BY_GRADE 大小:', mb.length, '字符 | 字段采样:', [...new Set([...mb.matchAll(/([a-zA-Z_]+)\s*:/g)].map(x => x[1]))].slice(0, 20).join(','));
console.log("题干字段出现:", ['q:', 'stem:', 'text:', 'question:'].map(k => k + ' ' + (mb.match(new RegExp('\\b' + replace1(k))) || []).length).join(' | '));
function replace1(k) { return k.slice(0, -1) + "'" ; }
