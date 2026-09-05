// P2 结构化版：按 JSON 引用定位（免疫 id 出现位置），修复 21 组真冗余 + 6a d=3r 数学错误
// 写回时探测每文件原缩进，保证 diff 最小化
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'data');
let applied = 0; const failed = [];

function load(file) {
  const src = fs.readFileSync(path.join(DATA, file), 'utf8');
  const a0 = src.indexOf('{');
  const guard = src.indexOf('|| {}');
  const a = (guard >= 0 && a0 === guard + 3) ? src.indexOf('{', guard + 5) : a0;
  const b = src.lastIndexOf('}');
  const ind = src.match(/\r?\n(\s+)"title"/);
  return { src, a, b, obj: JSON.parse(src.slice(a, b + 1)), indent: ind ? ind[1].length : 4 };
}
function save(file, ctx) {
  fs.writeFileSync(path.join(DATA, file), ctx.src.slice(0, ctx.a) + JSON.stringify(ctx.obj, null, ctx.indent) + ctx.src.slice(ctx.b + 1));
}
function* problemsOf(obj) {
  if (obj.problems) yield* obj.problems;
  if (obj.units) for (const u of obj.units) for (const c of (u.children || [])) yield c;
}
const norm = s => String(s).replace(/\s/g, '');

// 主数组定位：唯一 id 匹配 + formula 断言（兼容旧值或已改新值）
function patch(file, id, assertFormula, fields) {
  const ctx = load(file);
  const cands = [...problemsOf(ctx.obj)].filter(p => p.id === id);
  if (cands.length !== 1) { failed.push(`${file} ${id}: found ${cands.length} matches`); return; }
  const p = cands[0];
  const cur = norm(p.formula);
  if (cur !== norm(assertFormula) && !(fields.formula && cur === norm(fields.formula))) {
    failed.push(`${file} ${id}: formula mismatch (got=${String(p.formula).slice(0, 26)})`); return;
  }
  Object.assign(p, fields);
  save(file, ctx);
  applied++;
  console.log('OK', file, id, '→', String(fields.question || fields.scene || assertFormula).slice(0, 36));
}

// ===== 3b =====
patch('math-data-3b.js', '3B-PROB-148', '1cm² = ?', {
  scene: '小红想知道邮票有多大，她用1平方厘米的小正方形去铺，正好铺满一层。',
  question: '一张邮票的面积大约是6平方厘米，要摆几个1平方厘米的小正方形？',
  formula: '6÷1=?', answer: 6, choices: [6, 3, 12, 8]
});
patch('math-data-3b.js', '3B-PROB-149', '1cm² = ?', {
  scene: '小亮拿出一块橡皮，他想用1平方厘米的小正方形量一量橡皮的面。',
  question: '一块橡皮的面积大约是4平方厘米，要用几个1平方厘米的小正方形铺满？',
  formula: '4÷1=?', answer: 4, choices: [4, 2, 8, 6]
});
patch('math-data-3b.js', '3B-PROB-160', '1dm² = ? cm²', {
  scene: '小红用1平方厘米的小正方形铺满了一个1平方分米的大正方形。她想铺满5个这样的大正方形。',
  question: '5平方分米等于多少平方厘米？',
  formula: '5dm²=?cm²', answer: 500, choices: [500, 50, 5000, 100]
});
patch('math-data-3b.js', '3B-PROB-161', '1dm² = ? cm²', {
  scene: '一张课桌的桌面面积大约是24平方分米。小亮想知道这相当于多少平方厘米。',
  question: '24平方分米等于多少平方厘米？',
  formula: '24dm²=?cm²', answer: 2400, choices: [2400, 240, 24000, 100]
});
patch('math-data-3b.js', '3B-PROB-162', '1m² = ? dm²', {
  scene: '教室的黑板面积大约是4平方米。小红想知道相当于多少平方分米。',
  question: '4平方米等于多少平方分米？',
  formula: '4m²=?dm²', answer: 400, choices: [400, 40, 4000, 100]
});
patch('math-data-3b.js', '3B-PROB-163', '1m² = ? dm²', {
  scene: '家里的方桌桌面大约是2平方米。小亮想知道相当于多少平方分米。',
  question: '2平方米等于多少平方分米？',
  formula: '2m²=?dm²', answer: 200, choices: [200, 20, 2000, 100]
});
patch('math-data-3b.js', '3B-PROB-176', '0.2 = ?/10', {
  scene: '小明一步跳了1.7米远。他好奇1.7米中的0.7等于十分之几。',
  question: '0.7等于十分之几？（填分子）',
  formula: '0.7=?/10', answer: 7, choices: [7, 70, 10, 17]
});
patch('math-data-3b.js', '3B-PROB-187', '4 × 2 = ?', {
  scene: '小美有3件上衣和2条裙子，她要搭配出一套穿搭。',
  question: '一共有多少种不同的搭配？',
  formula: '3×2=?', answer: 6, choices: [6, 5, 3, 2]
});
// ===== 4a =====
patch('math-data-4a.js', '4A-PROB-037', '1公顷 = ? m²', {
  scene: '一个大型公园的面积大约是3公顷。小红想知道相当于多少平方米。',
  question: '3公顷等于多少平方米？',
  formula: '3公顷=?m²', answer: 30000, choices: [30000, 3000, 300, 300000]
});
patch('math-data-4a.js', '4A-PROB-038', '1公顷 = ? m²', {
  scene: '一片森林的面积大约是2公顷。小亮想知道相当于多少平方米。',
  question: '2公顷等于多少平方米？',
  formula: '2公顷=?m²', answer: 20000, choices: [20000, 2000, 200, 200000]
});
patch('math-data-4a.js', '4A-PROB-041', '射线端点数 = ?', {
  scene: '小明在学习线的类型：射线有一个端点，可以向一端无限延伸。老师问直线的特点。',
  question: '直线有几个端点？',
  formula: '直线端点数=?', answer: 0, choices: [0, 1, 2, 3]
});
patch('math-data-4a.js', '4A-PROB-042', '射线端点数 = ?', {
  scene: '小红拉紧了一段毛线，两端用手捏住。老师说这像线段。老师问线段有几个端点。',
  question: '线段有几个端点？',
  formula: '线段端点数=?', answer: 2, choices: [2, 0, 1, 3]
});
patch('math-data-4a.js', '4A-PROB-065', '四边形内角和 = ?°', {
  scene: '小亮连接四边形的一条对角线，把它分成了两个三角形。每个三角形内角和是180度。',
  question: '四边形内角和等于多少度？',
  formula: '180×2=?', answer: 360, choices: [360, 180, 90, 540]
});
patch('math-data-4a.js', '4A-PROB-066', '四边形内角和 = ?°', {
  scene: '小刚把一个五边形从同一个顶点连对角线，分成了3个三角形。',
  question: '五边形内角和等于多少度？',
  formula: '180×3=?', answer: 540, choices: [540, 360, 720, 180]
});
patch('math-data-4a.js', '4A-PROB-062', '两组平行 → ? (1平/3梯)', {
  scene: '小亮画了一个四边形，只有一组对边平行。老师问这是什么图形。',
  question: '只有一组对边平行的四边形叫什么？(平行四边形填1,梯形填3)',
  formula: '一组平行→? (1平/3梯)', answer: 3, choices: [3, 1, 0, 2]
});
// ===== 4b =====
patch('math-data-4b.js', '4B-PROB-048', '3/100 = ?', {
  scene: '小红把一个正方形平均分成100份，涂了其中的17份。老师问涂色部分用小数表示是多少。',
  question: '17/100用小数表示是多少？',
  formula: '17/100=?', answer: 0.17, choices: [0.17, 1.7, 0.017, 17]
});
patch('math-data-4b.js', '4B-PROB-049', '3/100 = ?', {
  scene: '小亮把一个正方形平均分成100份，涂了其中的9份。老师问涂色部分用小数表示是多少。',
  question: '9/100用小数表示是多少？',
  formula: '9/100=?', answer: 0.09, choices: [0.09, 0.9, 0.009, 9]
});
patch('math-data-4b.js', '4B-PROB-052', '三角形边数 = ?', {
  scene: '小红观察教室里的窗户，它是长方形的。老师问长方形有几条边。',
  question: '长方形有几条边？',
  formula: '长方形边数=?', answer: 4, choices: [4, 3, 2, 6]
});
patch('math-data-4b.js', '4B-PROB-053', '三角形边数 = ?', {
  scene: '小亮数一数停车场标志牌，它是一个五边形。老师问五边形有几条边。',
  question: '五边形有几条边？',
  formula: '五边形边数=?', answer: 5, choices: [5, 4, 3, 6]
});
patch('math-data-4b.js', '4B-PROB-056', '三角形内角和 = ?°', {
  scene: '两个完全一样的三角形可以拼成一个平行四边形。每个三角形内角和是180度。',
  question: '平行四边形的内角和是多少度？',
  formula: '180×2=?', answer: 360, choices: [360, 180, 90, 270]
});
patch('math-data-4b.js', '4B-PROB-057', '三角形内角和 = ?°', {
  scene: '一个直角三角形里有一个直角（90度），另外两个角都是锐角。',
  question: '直角三角形中两个锐角的和是多少度？',
  formula: '180-90=?', answer: 90, choices: [90, 180, 45, 60]
});
patch('math-data-4b.js', '4B-PROB-069', '7 × 3 = ?', {
  scene: '小刚遇到一个不规则图形，他通过平移把它变成一个长6宽4的长方形。',
  question: '平移后长方形的面积是多少？',
  formula: '6×4=?', answer: 24, choices: [24, 10, 20, 18]
});
// ===== 5a =====
patch('math-data-5a.js', '5A-PROB-052', 'S = a × ?', {
  scene: '老师问小红：正方形的边长是a，怎样用字母表示它的周长C？',
  question: '正方形周长C=a×?（填数）',
  formula: 'C = a × ?', answer: 4, choices: [4, 2, 'a', 1]
});
patch('math-data-5a.js', '5A-PROB-053', 'S = a × ?', {
  scene: '老师教小亮用字母表示长方体体积公式：V=长×宽×高。',
  question: '长方体长a宽b高c，体积V=?（用字母式子表示）',
  formula: 'V = ?', answer: 'abc', choices: ['abc', 'a+b+c', '3abc', 'ab']
});
patch('math-data-5a.js', '5A-PROB-051', '3红3蓝 → ? (1公平/3不公平)', {
  scene: '小红和小亮玩游戏，袋中4红2蓝，摸到红小红赢摸到蓝小亮赢。',
  question: '这个游戏公平吗？(公平填1,不公平填3)',
  formula: '4红2蓝→? (1公平/3不公平)', answer: 3, choices: [3, 1, 0, 2]
});
// ===== 5b =====
patch('math-data-5b.js', '5B-PROB-031', '从前面看 → ?个面', {
  scene: '小红换了一个方向观察同一个长方体纸盒，这次她从上面往下看。',
  question: '从上面看一个长方体能看到几个面？',
  formula: '从上面看 → ?个面', answer: 1, choices: [1, 2, 3, 4]
});
patch('math-data-5b.js', '5B-PROB-032', '从前面看 → ?个面', {
  scene: '小红先从前面看了一次长方体，又从上面看了一次。她把两次看到的面合起来数。',
  question: '从前面和上面两个方向看长方体，一共能看到几个不同的面？',
  formula: '前面+上面 → ?个面', answer: 2, choices: [2, 1, 3, 4]
});
patch('math-data-5b.js', '5B-PROB-037', '长方体面数 = ?', {
  scene: '小红观察一个长方体纸盒，数完了面，老师又让她数棱。',
  question: '长方体有多少条棱？',
  formula: '长方体棱数=?', answer: 12, choices: [12, 6, 8, 4]
});
patch('math-data-5b.js', '5B-PROB-038', '长方体面数 = ?', {
  scene: '小红继续观察长方体纸盒，这一次数顶点。',
  question: '长方体有多少个顶点？',
  formula: '长方体顶点数=?', answer: 8, choices: [8, 6, 12, 4]
});
patch('math-data-5b.js', '5B-PROB-039', '正方体面数 = ?', {
  scene: '小亮观察正方体魔方，数完了面，他又开始数棱。',
  question: '正方体有多少条棱？',
  formula: '正方体棱数=?', answer: 12, choices: [12, 6, 8, 4]
});
patch('math-data-5b.js', '5B-PROB-040', '正方体面数 = ?', {
  scene: '小亮观察正方体魔方，最后来数顶点。',
  question: '正方体有多少个顶点？',
  formula: '正方体顶点数=?', answer: 8, choices: [8, 6, 12, 4]
});
patch('math-data-5b.js', '5B-PROB-043', '1dm³ = ? cm³', {
  scene: '老师拿出一个棱长3dm的正方体盒子。小红想知道它的体积是多少立方厘米。',
  question: '3dm³等于多少cm³？',
  formula: '3dm³=?cm³', answer: 3000, choices: [3000, 300, 30, 30000]
});
patch('math-data-5b.js', '5B-PROB-044', '1dm³ = ? cm³', {
  scene: '一个奶箱的容积大约是2dm³。小亮想知道相当于多少立方厘米。',
  question: '2dm³等于多少cm³？',
  formula: '2dm³=?cm³', answer: 2000, choices: [2000, 200, 20, 20000]
});
patch('math-data-5b.js', '5B-PROB-046', '5 × 4 × 4 = ? cm³', {
  scene: '小刚算一个长6cm宽3cm高2cm的长方体体积。',
  question: '体积是多少立方厘米？',
  formula: '6×3×2=?cm³', answer: 36, choices: [36, 11, 18, 30]
});

// ===== 6a：d=3r 数学错误（直径=2×半径）+ 完全同文双份 → 修正并变式化 =====
(function fix6a() {
  const ctx = load('math-data-6a.js');
  const targets = [...problemsOf(ctx.obj)].filter(p => norm(p.formula) === norm('d = 3r = 3×4'));
  if (targets.length !== 2) { failed.push(`6a d=3r: found ${targets.length}`); return; }
  const [t1, t2] = targets;
  Object.assign(t1, {
    formula: 'd = 2r = 2×4', answer: 8, choices: [8, 4, 12, 6],
    question: '直径 = 2 × 4 = ? cm'
  });
  Object.assign(t2, {
    scene: '小亮画了一个圆。老师告诉他圆心到圆上任意一点的线段叫半径。如果半径5cm，直径多少？',
    formula: 'd = 2r = 2×5', answer: 10, choices: [10, 5, 25, 20],
    question: '直径 = 2 × 5 = ? cm'
  });
  save('math-data-6a.js', ctx);
  applied += 2;
  console.log('OK math-data-6a.js d=3r ×2 → d=2r 修正');
})();

console.log(`\napplied=${applied} failed=${failed.length}`);
failed.forEach(f => console.log('FAILED:', f));
if (failed.length) process.exit(1);
