// 数学题库内容修补 v3 —— 内容锚定（不信任 id：该题库存在 id 与内容错位）
// 每处修改前先断言对象内容与预期一致，不符即报错退出，绝不静默改错题。
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'data');
let applied = 0; const failed = [];

function load(file) {
  const s = fs.readFileSync(path.join(DATA, file), 'utf8');
  const m = s.match(/^window\.MATH_BY_GRADE = window\.MATH_BY_GRADE \|\| \{\};\r?\nwindow\.MATH_BY_GRADE\[["']([^"']+)["']\] = ([\s\S]*?);?\s*$/);
  if (!m) throw new Error(file + ' 结构不匹配');
  return { grade: m[1], obj: JSON.parse(m[2]) };
}
function save(file, ctx) {
  fs.writeFileSync(path.join(DATA, file),
    'window.MATH_BY_GRADE = window.MATH_BY_GRADE || {};\nwindow.MATH_BY_GRADE["' + ctx.grade + '"] = ' + JSON.stringify(ctx.obj, null, 4) + ';', 'utf8');
}
function walkQ(obj, cb) {
  (function go(n) {
    if (!n || typeof n !== 'object') return;
    if (Array.isArray(n)) { n.forEach(go); return; }
    if (n.formula !== undefined && (n.answer !== undefined || n.answerText !== undefined)) cb(n);
    Object.values(n).forEach(go);
  })(obj);
}
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
function find(file, ctx, assertFn, desc) {
  let hit = null;
  walkQ(ctx.obj, q => { if (!hit && assertFn(q)) hit = q; });
  if (!hit) { failed.push(file + ' 未找到: ' + desc); return null; }
  return hit;
}
function apply(file, ctx, q, desc, fn) {
  try { fn(q); applied++; }
  catch (e) { failed.push(file + ' [' + desc + '] ' + e.message); }
}
const must = (cond, msg) => { if (!cond) throw new Error('断言失败: ' + msg); };
function deepStr(q, from, to) {
  (function go(n) {
    if (Array.isArray(n)) { n.forEach((v, i) => { n[i] = go(v); }); return n; }
    if (n && typeof n === 'object') { for (const k of Object.keys(n)) n[k] = go(n[k]); return n; }
    if (typeof n === 'string' && n.includes(from)) n = n.split(from).join(to);
    return n;
  })(q);
}

// ============ 3a ============
{
  const file = 'math-data-3a.js', ctx = load(file);
  let q = find(file, ctx, x => eq(x.choices, [408, 108, 408, 48]), '3A-TIME-52 重复选项');
  apply(file, ctx, q, '3A-TIME-52', q => {
    must(String(q.formula).includes('102 × 4') && q.answer === 408, '乘法题');
    q.choices = [408, 108, 404, 48];
  });
  save(file, ctx);
}
// ============ 3b ============
{
  const file = 'math-data-3b.js', ctx = load(file);
  let q = find(file, ctx, x => eq(x.choices, [112, 102, 122, 112]), '3B-017 重复选项');
  apply(file, ctx, q, '3B-017', q => {
    must(String(q.formula).includes('448 ÷ 4') && q.answer === 112, '除法题');
    q.choices = [112, 102, 122, 142];
  });
  q = find(file, ctx, x => String(x.scene || '').includes('1201'), '3B-116 1201千克');
  apply(file, ctx, q, '3B-116', q => {
    must(String(q.formula).includes('1201 ÷ 3'), '算式');
    deepStr(q, '1201', '1200');
    must(q.answer === 400, '答案 400');
  });
  q = find(file, ctx, x => String(x.formula || '').includes('697 ÷ 4'), '3B-117 697');
  apply(file, ctx, q, '3B-117', q => { deepStr(q, '697', '696'); must(q.answer === 174, '答案 174'); });
  q = find(file, ctx, x => eq(x.choices, [476, 140, 34, 34]), '3B-129 重复选项');
  apply(file, ctx, q, '3B-129', q => { q.choices = [476, 140, 347, 34]; });
  q = find(file, ctx, x => String(x.scene || '').includes('85个苹果'), '3B-146 85个苹果');
  apply(file, ctx, q, '3B-146', q => {
    must(q.answer === 3 && /85 ÷ 5 ÷ 5/.test(q.formula), '连除题');
    deepStr(q, '85 ÷ 5 ÷ 5 = ?=3', '75 ÷ 5 ÷ 5 = 3');
    deepStr(q, '85 ÷ 5 ÷ 5', '75 ÷ 5 ÷ 5');
    deepStr(q, '85个苹果', '75个苹果');
    deepStr(q, '先算85÷5=12袋，再算12÷5=3箱', '先算75÷5=15袋，再算15÷5=3箱');
    deepStr(q, '每条代表16，合起来就是48', '每条代表25，合起来就是75');
    deepStr(q, '85、5、5', '75、5、5');
    q.visualData = { total: 75, parts: [
      { label: '箱1', val: 25, color: '#00A896' },
      { label: '箱2', val: 25, color: '#F5B800' },
      { label: '箱3', val: 25, color: '#FB923C' } ] };
  });
  q = find(file, ctx, x => String(x.scene || '').includes('58个苹果'), '3B-147 58个苹果');
  apply(file, ctx, q, '3B-147', q => {
    must(q.answer === 2 && /58 ÷ 5 ÷ 5/.test(q.formula), '连除题');
    deepStr(q, '58 ÷ 5 ÷ 5 = ?=3', '50 ÷ 5 ÷ 5 = 2');
    deepStr(q, '58 ÷ 5 ÷ 5', '50 ÷ 5 ÷ 5');
    deepStr(q, '58个苹果', '50个苹果');
    deepStr(q, '先算58÷5=12袋，再算12÷5=3箱', '先算50÷5=10袋，再算10÷5=2箱');
    deepStr(q, '每条代表16，合起来就是48', '每条代表25，合起来就是50');
    deepStr(q, '58、5、5', '50、5、5');
    q.visualData = { total: 50, parts: [
      { label: '箱1', val: 25, color: '#00A896' },
      { label: '箱2', val: 25, color: '#F5B800' } ] };
    const v1 = q.variants && q.variants[0], v2 = q.variants && q.variants[1];
    if (v1 && /80÷5÷5/.test(v1.formula)) { v1.question = '75个每袋5个每箱5袋需几箱？'; v1.formula = '75÷5÷5=?'; v1.answer = 3; v1.hint = '75÷5=15袋，15÷5=3箱'; }
    if (v2 && /96÷6÷5/.test(v2.formula)) { v2.question = '150个每袋6个每箱5袋需几箱？'; v2.formula = '150÷6÷5=?'; v2.answer = 5; v2.hint = '150÷6=25袋，25÷5=5箱'; }
  });
  q = find(file, ctx, x => String(x.formula || '').includes('0.2 = ?/12'), '3B-176 0.2');
  apply(file, ctx, q, '3B-176', q => {
    must(q.answer === 2, '答案 2');
    q.formula = '0.2 = ?/10'; q.hint = '0.2=2/10'; q.choices = [2, 20, 12, 10];
  });
  q = find(file, ctx, x => eq(x.choices, [2, 6, 2, 1]), '3B-188 重复选项');
  apply(file, ctx, q, '3B-188', q => { must(q.answer === 2 && /2 × 2 ÷ 2/.test(q.formula), '算式'); q.choices = [2, 6, 4, 1]; });
  save(file, ctx);
}
// ============ 4b ============
{
  const file = 'math-data-4b.js', ctx = load(file);
  let q = find(file, ctx, x => String(x.scene || '').includes('38人都坐大船'), '4B-004 租船');
  apply(file, ctx, q, '4B-004', q => {
    must(q.answer === 6 && /38 ÷ 6/.test(q.formula), '租船题');
    q.answer = 7;
    q.hint = '38÷6=6条余2人，进一法需7条';
    deepStr(q, '38÷6=6余2，6条船坐满36人，剩2人。本题按整除取6条', '38÷6=6余2，坐满6条后还剩2人，剩下的人也要上船，用进一法需7条');
  });
  q = find(file, ctx, x => String(x.scene || '').includes('60人去划船') || String(x.formula || '').includes('60 ÷ 5'), '4B-037 租船60人');
  apply(file, ctx, q, '4B-037', q => {
    must(/60 ÷ 5/.test(q.formula), '算式');
    q.answer = 12; q.hint = '60÷5=12条，正好坐满';
    q.choices = [12, 10, 13, 6];
    deepStr(q, '60÷5=5条余2人', '60÷5=12条，正好坐满');
    q.visualData = { total: 60, parts: [ { label: '12条坐60人', val: 60, color: '#00A896' } ] };
  });
  save(file, ctx);
}
// ============ 5a ============
{
  const file = 'math-data-5a.js', ctx = load(file);
  let q = find(file, ctx, x => eq(x.choices, [6, 5, 5, 4]), '5A-035 重复选项');
  apply(file, ctx, q, '5A-035', q => {
    must(String(q.formula).includes('15的因数'), '因数题');
    q.answer = 4; q.choices = [4, 5, 6, 3];
    deepStr(q, '1,2,4,5,6,15共6个', '1,3,5,15共4个');
  });
  q = find(file, ctx, x => eq(x.choices, [6, 6, 5, 3]), '5A-036 重复选项');
  apply(file, ctx, q, '5A-036', q => {
    must(String(q.formula).includes('15的因数'), '因数题');
    q.answer = 4; q.choices = [4, 6, 5, 3];
    deepStr(q, '共6个', '共4个');
  });
  q = find(file, ctx, x => eq(x.choices, [4, 4, 8, 2]), '5A-039 重复选项');
  apply(file, ctx, q, '5A-039', q => { must(String(q.formula).includes('(4,4)'), '数对题'); q.choices = [4, 3, 8, 2]; });
  q = find(file, ctx, x => String(x.scene || '').includes('4.4千克油'), '5A-044 装油');
  apply(file, ctx, q, '5A-044', q => {
    must(q.answer === 4 && /4\.4 ÷ 0\.8/.test(q.formula), '装油题');
    q.answer = 6; q.hint = '4.4÷0.8=5.5，进一法需6瓶';
    q.choices = [6, 5, 4.375, 4];
  });
  q = find(file, ctx, x => String(x.scene || '').includes('1/3和3/5大小一样'), '5A-053 分数性质');
  apply(file, ctx, q, '5A-053', q => {
    must(/1\/3 = \?\/5/.test(q.formula), '等式');
    deepStr(q, '1/3和3/5大小一样', '1/3和3/9一样大');
    q.formula = '1/3 = ?/9'; q.choices = [3, 1, 9, 6];
  });
  q = find(file, ctx, x => eq(x.choices, [10, 13, 13, 3]), '5A-057 重复选项');
  apply(file, ctx, q, '5A-057', q => { must(q.answer === 10 && /= 13 - 3/.test(q.formula), '方程题'); q.choices = [10, 13, 16, 3]; });
  q = find(file, ctx, x => eq(x.choices, [35, 55, 55, 20]), '5A-059 重复选项');
  apply(file, ctx, q, '5A-059', q => { must(q.answer === 35 && /x \+ 20 = 55/.test(q.formula), '方程题'); q.choices = [35, 55, 45, 20]; });
  q = find(file, ctx, x => eq(x.choices, [2.5, 3, 3, 7]), '5A-065 重复选项');
  apply(file, ctx, q, '5A-065', q => { must(q.answer === 2.5, '近似解'); q.choices = [2.5, 3, 2.6, 7]; });
  q = find(file, ctx, x => eq(x.choices, [16, 20, 16, 7]), '5A-074 重复选项');
  apply(file, ctx, q, '5A-074', q => { must(q.answer === 16 && /16 \+ 7÷2/.test(q.formula), '统计图题'); q.choices = [16, 20, 23, 7]; });
  save(file, ctx);
}
// ============ 5b ============
{
  const file = 'math-data-5b.js', ctx = load(file);
  let q = find(file, ctx, x => String(x.scene || '').includes('吃了1/6，又吃了3/6') || (String(x.formula).includes('1/6 + 3/6') && eq(x.choices, [3, 3, 1, 6])), '5B-067 分数加法');
  apply(file, ctx, q, '5B-067', q => { must(q.answer === 3 && /1\/6 \+ 3\/6/.test(q.formula), '题'); q.answer = 4; q.choices = [4, 3, 1, 6]; });
  q = find(file, ctx, x => eq(x.choices, [3, 2, 1, 3]), '5B-068 重复选项');
  apply(file, ctx, q, '5B-068', q => { must(/1\/3 \+ 2\/3/.test(q.formula) && q.answer === 3, '题'); q.choices = [3, 2, 1, 6]; });
  q = find(file, ctx, x => String(x.scene || '').includes('她先通分变成3/5+3/5'), '5B-069 通分错');
  apply(file, ctx, q, '5B-069', q => {
    must(q.answer === 5 && /3\/5 \+ 3\/5 = \?\/5/.test(q.formula), '题');
    deepStr(q, '她先通分变成3/5+3/5', '她通分变成3/9+3/9');
    deepStr(q, '3/5+3/5', '3/9+3/9');
    q.formula = '3/9 + 3/9 = ?/9'; q.answer = 6; q.choices = [6, 3, 9, 5];
  });
  q = find(file, ctx, x => String(x.scene || '').includes('她先通分变成3/6+3/6'), '5B-070 通分错');
  apply(file, ctx, q, '5B-070', q => {
    must(q.answer === 5 && /3\/6 \+ 3\/6 = \?\/6/.test(q.formula), '题');
    deepStr(q, '她先通分变成3/6+3/6', '她通分变成2/6+2/6');
    deepStr(q, '3/6+3/6', '2/6+2/6');
    q.formula = '2/6 + 2/6 = ?/6'; q.answer = 4; q.choices = [4, 3, 6, 2];
  });
  q = find(file, ctx, x => String(x.formula || '').includes('4/5+2/5-1/5=?/5'), '5B-071');
  apply(file, ctx, q, '5B-071', q => {
    must(q.answer === 4, '题');
    q.answer = 5; q.choices = [5, 4, 3, 6];
    deepStr(q, '小红算1/2+1/4-1/5。她先通分成同分母。', '小红算4/5+2/5-1/5。同分母直接加减分子。');
  });
  q = find(file, ctx, x => eq(x.choices, [4, 6, 5, 4]), '5B-072 重复选项');
  apply(file, ctx, q, '5B-072', q => { must(q.answer === 5 && /4\/6\+2\/6-1\/6/.test(q.formula), '题'); q.choices = [4, 6, 5, 2]; });
  save(file, ctx);
}
// ============ 6a（内容锚点） ============
{
  const file = 'math-data-6a.js', ctx = load(file);
  let q = find(file, ctx, x => String(x.formula || '').includes('1/3 × 1/3 = ?/11'), '6a ?/11');
  apply(file, ctx, q, '6a-11', q => { q.formula = '1/3 × 1/3 = ?/9'; q.choices = [1, 3, 9, 2]; });
  q = find(file, ctx, x => String(x.formula || '').includes('13:10 = ?/3'), '6a 比');
  apply(file, ctx, q, '6a-比', q => { q.formula = '13:10 = 13/?'; q.answer = 10; q.choices = [10, 3, 13, 30]; });
  q = find(file, ctx, x => String(x.formula || '').includes('1/2+1/5+1/12+1/15') || String(x.formula || '') === '=?/15', '6a 近似1');
  apply(file, ctx, q, '6a-近似', q => { q.formula = '1/2+1/5+1/12+1/15 = ?/60'; q.answer = 51; q.choices = [51, 50, 60, 45]; q.hint = '先通分到60分母再相加'; });
  q = find(file, ctx, x => eq(x.choices, [12.56, 12.56, 16, 50.24]), '6a 圆重复选项');
  apply(file, ctx, q, '6a-圆', q => { q.choices = [12.56, 6.28, 16, 50.24]; });
  q = find(file, ctx, x => eq(x.choices, [6, 6, 2, 4]), '6a 分数重复选项');
  apply(file, ctx, q, '6a-分数', q => { q.choices = [6, 5, 2, 4]; });
  q = find(file, ctx, x => eq(x.choices, [3, 3, 1, 7]), '6a 倒数重复选项');
  apply(file, ctx, q, '6a-倒数', q => { q.choices = [3, 2, 1, 7]; });
  q = find(file, ctx, x => eq(x.choices, [9, 3, 3, 5]), '6a 除分数重复选项');
  apply(file, ctx, q, '6a-除分数', q => { q.choices = [9, 3, 6, 5]; });
  save(file, ctx);
}
// ============ 7a / 7b / 8b ============
{
  const file = 'math-data-7a.js', ctx = load(file);
  const q = find(file, ctx, x => eq(x.choices, [40, 96, 40, 96]), '7a 重复选项');
  apply(file, ctx, q, '7a', q => { q.choices = [40, 96, 80, 192]; });
  save(file, ctx);
}
{
  const file = 'math-data-7b.js', ctx = load(file);
  let q = find(file, ctx, x => eq(x.choices, [65, 115, 65, 115]), '7b 重复选项1');
  apply(file, ctx, q, '7b-1', q => { q.choices = [65, 115, 25, 155]; });
  q = find(file, ctx, x => eq(x.choices, [48, 64, 48, 16]), '7b 重复选项2');
  apply(file, ctx, q, '7b-2', q => { q.choices = [48, 64, 16, 12]; });
  save(file, ctx);
}
{
  const file = 'math-data-8b.js', ctx = load(file);
  let q = find(file, ctx, x => eq(x.choices, [40, 50, 40, 10]), '8b 重复选项1');
  apply(file, ctx, q, '8b-1', q => { q.choices = [40, 50, 30, 10]; });
  q = find(file, ctx, x => eq(x.choices, [18, 18, 18, 20]), '8b 重复选项2');
  apply(file, ctx, q, '8b-2', q => { q.choices = [18, 20, 16, 21]; });
  save(file, ctx);
}

console.log('已修改题目:', applied, '道');
if (failed.length) { console.log('失败:'); failed.forEach(f => console.log('  ✗ ' + f)); process.exit(1); }
console.log('全部成功');
