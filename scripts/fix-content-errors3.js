// 补充修复：4b-004 租船进一法；5b 的 035/036 因数题、053 分数性质、072孪生题
const fs = require('fs');
function load(f) {
  const s = fs.readFileSync('data/' + f, 'utf8');
  const m = s.match(/^window\.MATH_BY_GRADE = window\.MATH_BY_GRADE \|\| \{\};\r?\nwindow\.MATH_BY_GRADE\[["']([^"']+)["']\] = ([\s\S]*?);?\s*$/);
  if (!m) throw new Error(f + ' 结构不匹配');
  return { f, grade: m[1], obj: JSON.parse(m[2]) };
}
function save(c) {
  fs.writeFileSync('data/' + c.f,
    'window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};\nwindow.MATH_BY_GRADE["' + c.grade + '"] = ' + JSON.stringify(c.obj, null, 4) + ';', 'utf8');
}
function qs(o) {
  const out = [];
  (function w(n) {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(w); return; }
    if (n.formula !== undefined && n.answer !== undefined) out.push(n);
    Object.keys(n).forEach(k => w(n[k]));
  })(o);
  return out;
}
function deep(q, a, b) {
  (function w(n) {
    if (Array.isArray(n)) { n.forEach((v, i) => { n[i] = w(v); }); return n; }
    if (n && typeof n === 'object') { Object.keys(n).forEach(k => { n[k] = w(n[k]); }); return n; }
    if (typeof n === 'string' && n.includes(a)) n = n.split(a).join(b);
    return n;
  })(q);
}

let c = load('math-data-4b.js');
qs(c.obj).filter(q => String(q.formula).includes('38 ÷ 6')).forEach(q => {
  if (q.answer === 6) {
    q.answer = 7;
    q.hint = '38÷6=6条余2人，进一法需7条';
    deep(q, '38÷6=6余2，6条船坐满36人，剩2人。本题按整除取6条', '38÷6=6余2，坐满6条后还剩2人，剩下的人也要上船，用进一法需7条');
    console.log('4b-004 修复');
  }
});
save(c);

c = load('math-data-5b.js');
qs(c.obj).forEach(q => {
  const f = String(q.formula || ''), s = String(q.scene || '');
  if (f.includes('15的因数个数') && JSON.stringify(q.choices) === '[6,5,5,4]') {
    q.answer = 4; q.choices = [4, 5, 6, 3];
    deep(q, '1,2,4,5,6,15共6个', '1,3,5,15共4个');
    console.log('5b-035 修复');
  } else if (f.includes('15的因数个数') && JSON.stringify(q.choices) === '[6,6,5,3]') {
    q.answer = 4; q.choices = [4, 6, 5, 3];
    deep(q, '共6个', '共4个');
    console.log('5b-036 修复');
  } else if (s.includes('1/3和3/5大小一样')) {
    q.formula = '1/3 = ?/9'; q.choices = [3, 1, 9, 6];
    deep(q, '1/3和3/5大小一样', '1/3和3/9一样大');
    console.log('5b-053 修复');
  } else if (f.includes('4/6+2/6-1/6') && q.answer === 4) {
    q.answer = 5; q.choices = [5, 4, 6, 2];
    deep(q, '小红算1/2+1/4-1/6。她先通分成同分母。', '小红算4/6+2/6-1/6。同分母直接加减分子。');
    console.log('5b-072t 修复');
  }
});
save(c);
console.log('done');
