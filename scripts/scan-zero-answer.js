// 扫描所有题库中 answer===0 且语义上不该为 0 的占位变体（P1 排查）
const fs = require('fs');
const files = fs.readdirSync('data').filter(f => /^math-data-/.test(f));
let hits = [];
for (const f of files) {
  const src = fs.readFileSync('data/' + f, 'utf8');
  const m = src.match(/^window\.MATH_BY_GRADE = window\.MATH_BY_GRADE \|\| \{\};\r?\nwindow\.MATH_BY_GRADE\[["']([^"']+)["']\] = ([\s\S]*?);?\s*$/);
  if (!m) { console.log(f, 'STRUCT SKIP'); continue; }
  let obj;
  try { obj = JSON.parse(m[2]); } catch (e) { console.log(f, 'PARSE FAIL', e.message.slice(0, 60)); continue; }
  const walk = (probs) => {
    (probs || []).forEach((p, i) => {
      (p.variants || []).forEach((v, j) => {
        if (v.answer === 0 && v.question) {
          hits.push(`${f} #${p.id || i} v${j} ans=0: ${String(v.question).slice(0, 44)} | formula=${v.formula}`);
        }
      });
    });
  };
  if (obj.units) walk(obj.units.flatMap(u => u.children || []));
  if (obj.problems) walk(obj.problems);
}
console.log('total answer=0 variants:', hits.length);
hits.forEach(h => console.log(' ', h));
