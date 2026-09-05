// 补丁：math-data-6a 的 "?/15" 近似题（scene 含 1/2+1/5+1/12+1/15，formula 只有 "=?/15"）
const fs = require('fs');
const p = 'data/math-data-6a.js';
const s = fs.readFileSync(p, 'utf8');
const m = s.match(/^window\.MATH_BY_GRADE = window\.MATH_BY_GRADE \|\| \{\};\r?\nwindow\.MATH_BY_GRADE\[["']([^"']+)["']\] = ([\s\S]*?);?\s*$/);
if (!m) { console.error('结构不匹配'); process.exit(1); }
const obj = JSON.parse(m[2]);
let hit = 0;
(function walk(n) {
  if (!n || typeof n !== 'object') return;
  if (Array.isArray(n)) { n.forEach(walk); return; }
  if (n.formula === '=?/15') {
    n.formula = '1/2+1/5+1/12+1/15 = ?/60';
    n.answer = 51;
    n.choices = [51, 50, 60, 45];
    n.hint = '先通分到60分母再相加';
    hit++;
  }
  Object.values(n).forEach(walk);
})(obj);
if (hit !== 1) { console.error('命中 ' + hit + ' 处，异常'); process.exit(1); }
fs.writeFileSync(p, 'window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};\nwindow.MATH_BY_GRADE["' + m[1] + '"] = ' + JSON.stringify(obj, null, 4) + ';', 'utf8');
console.log('OK: 1 道已修复');
