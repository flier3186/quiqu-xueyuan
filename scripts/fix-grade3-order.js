// 修正 3a/3b 的题序与知识点标注错位
const fs = require('fs');
const path = require('path');
const ROOT = path.dirname(path.dirname(__filename));
const HTML = path.join(ROOT, 'index.html');
const BACKUP = path.join(ROOT, '.tmp-petgen', 'index-before-curriculum.html');

function extract(file) {
  const html = fs.readFileSync(file, 'utf8');
  const anchor = html.indexOf('var MATH_BY_GRADE');
  const braceIdx = html.indexOf('{', anchor);
  let depth = 0, inStr = false, esc = false, inCmt = false, end = -1;
  const s = html.slice(braceIdx);
  for (let i = 0; i < s.length; i++) {
    const c = s[i], n = s[i + 1];
    if (inCmt) { if (c === '\n') inCmt = false; continue; }
    if (inStr) { if (esc) { esc = false; continue; } if (c === '\\') { esc = true; continue; } if (c === "'") inStr = false; continue; }
    if (c === '/' && n === '/') { inCmt = true; continue; }
    if (c === "'") { inStr = true; continue; }
    if (c === '{') depth++;
    if (c === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  return { M: eval('(' + s.slice(0, end) + ')'), anchor, braceIdx, block: s.slice(0, end), html };
}

const cur = extract(HTML);
const bak = extract(BACKUP);
const M = cur.M;
const B = bak.M;

// --- 3a: 索引4 应为「曹冲称象」(当前写在索引5)，索引5 应恢复原「分数的初步认识」 ---
const cao = M['3a'].problems[5];              // 曹冲称象（新写）
M['3a'].problems[5] = B['3a'].problems[5];    // 原分数初步认识 3/8
M['3a'].problems[5].knowledge = '分数的初步认识';
M['3a'].problems[4] = cao;                    // 曹冲称象移到 #5
console.log('3a #5 =>', M['3a'].problems[4].knowledge, '|', M['3a'].problems[4].question);
console.log('3a #6 =>', M['3a'].problems[5].knowledge, '|', M['3a'].problems[5].question, '| 答案', M['3a'].problems[5].answer);

// --- 3b: 修正 knowledge 错位（题序未变，仅标注写反）---
M['3b'].problems[2].knowledge = '小数的初步认识';   // #3 小数加减法
M['3b'].problems[3].knowledge = '图形的面积';       // #4 长方形面积
M['3b'].problems[4].knowledge = '年、月、日的秘密';
console.log('3b #3 =>', M['3b'].problems[2].knowledge, '|', M['3b'].problems[2].question);
console.log('3b #4 =>', M['3b'].problems[3].knowledge, '|', M['3b'].problems[3].question);

const newBlock = 'var MATH_BY_GRADE = ' + JSON.stringify(M, null, 2) + ';';
const out = cur.html.slice(0, cur.anchor) + newBlock + cur.html.slice(cur.braceIdx + cur.block.length);
fs.writeFileSync(HTML, out, 'utf8');
console.log('✅ 错位已修正');
