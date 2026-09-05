// P1 修复：符号答案占位 0 / 矛盾题 → 可判定的文本选项或数值答案
// 方法论：结构化解析（JSON.parse）+ 内容断言（question/formula/answer 精确匹配）
// 断言不符即报错退出，绝不静默改错题。写回 JSON.stringify(obj,null,4)。
const fs = require('fs');
let applied = 0, failed = [];

function load(file) {
  const src = fs.readFileSync('data/' + file, 'utf8');
  const m = src.match(/^(window\.MATH_BY_GRADE = window\.MATH_BY_GRADE \|\| \{\};\r?\nwindow\.MATH_BY_GRADE\[["'][^"']+["']\] = )([\s\S]*?)(;?\s*)$/);
  if (!m) throw new Error(file + ' structure mismatch');
  // 探测原文件缩进（顶层第一个键 "title" 的前导空格数），写回时保持一致避免全文件重排
  const ind = src.match(/\r?\n(\s+)"title"/);
  return { header: m[1], obj: JSON.parse(m[2]), tail: m[3] || ';', indent: ind ? ind[1].length : 4 };
}
function save(file, ctx) {
  fs.writeFileSync('data/' + file, ctx.header + JSON.stringify(ctx.obj, null, ctx.indent) + ctx.tail);
}
function* allProblems(obj) {
  if (obj.problems) yield* obj.problems;
  if (obj.units) for (const u of obj.units) if (u.children) yield* u.children;
}
// 断言变体内容并修补
function patchVariant(file, probe, fix) {
  const ctx = load(file);
  let hit = 0, already = false;
  for (const p of allProblems(ctx.obj)) {
    if (!p.variants) continue;
    p.variants.forEach((v, j) => {
      if (v.question === probe.question && v.formula === probe.formula) {
        if (v.answer === probe.answer && j === probe.vIdx) hit++;
        else if (fix.answer !== undefined && v.answer === fix.answer && j === probe.vIdx) already = true;
      }
    });
  }
  if (hit === 0 && already) { console.log('SKIP(已修)', file, '→', String(fix.question || probe.question).slice(0, 30)); return; }
  if (hit !== 1) { failed.push(`${file} "${probe.question.slice(0, 20)}" hit=${hit}`); return; }
  // 重扫执行修补（跳过序号不匹配的）
  for (const p of allProblems(ctx.obj)) {
    if (!p.variants) continue;
    p.variants.forEach((v, j) => {
      if (v.question === probe.question && v.formula === probe.formula && v.answer === probe.answer && j === probe.vIdx) {
        Object.assign(v, fix);
      }
    });
  }
  save(file, ctx);
  applied++;
  console.log('OK', file, '→', String(fix.question || probe.question).slice(0, 30));
}

// ---- 1. 5A-PROB-015 v0：字母题占位 0 → 式子选择 ----
patchVariant('math-data-5a.js',
  { vIdx: 0, question: '小红a岁妈妈b岁妈妈比小红大几岁？', formula: 'b-a=?', answer: 0 },
  {
    question: '小红a岁，妈妈b岁，妈妈比小红大几岁？（用含a、b的式子表示）',
    formula: 'b-a=?',
    answer: 'b-a',
    hint: '妈妈比小红大的部分 = 妈妈年龄 - 小红年龄 = b-a',
    choices: ['b-a', 'a-b', 'a+b', 'ab']
  });

// ---- 2-3. 7a #17 垂直 / 直角度数 ----
patchVariant('math-data-7a.js',
  { vIdx: 0, question: '两条线相交成90度，它们的关系是什么？', formula: '互相垂直', answer: 0 },
  { answer: '互相垂直', choices: ['互相垂直', '互相平行', '相交但不垂直', '互相重合'] });
patchVariant('math-data-7a.js',
  { vIdx: 1, question: '直角三角形的直角是多少度？', formula: '90°', answer: 0 },
  { answer: '90°', choices: ['90°', '60°', '45°', '180°'] });

// ---- 4. 7b #16 矛盾题 → 有解版（补角-余角恒为90°，"大60度"无解，改为大30度）----
patchVariant('math-data-7b.js',
  { vIdx: 0, question: '一个角的补角比它的余角大60度，这个角是多少？', formula: '(180-x)-(90-x)=60, 90=60矛盾', answer: 0 },
  {
    question: '一个角比它的余角大30度，这个角是多少度？',
    formula: 'x-(90-x)=30',
    answer: 60,
    hint: 'x-(90-x)=2x-90=30，x=60',
    choices: [60, 30, 90, 120]
  });

// ---- 5. 9b #3 三视图都是圆 ----
patchVariant('math-data-9b.js',
  { vIdx: 0, question: '三视图都是圆，几何体是什么？', formula: '三个方向看都是圆', answer: 0 },
  { answer: '球', choices: ['球', '圆柱', '圆锥', '正方体'] });

// ---- 6. 9b #5 方程无解（数学上正确：x=2 是增根）----
patchVariant('math-data-9b.js',
  { vIdx: 0, question: '解方程 1/(x-2) + 1/(x+2) = 4/(x²-4)', formula: '无解', answer: 0 },
  {
    answer: '无解',
    hint: '去分母得 2x=4，x=2 会让分母为 0（增根），所以无解',
    choices: ['无解', 'x=2', 'x=-2', 'x=0']
  });

// ---- 7-8. 9b #8 圆柱 / 三棱锥 ----
patchVariant('math-data-9b.js',
  { vIdx: 0, question: '主视图和左视图是矩形，俯视图是圆，是什么几何体？', formula: '圆柱', answer: 0 },
  { answer: '圆柱', choices: ['圆柱', '圆锥', '球', '长方体'] });
patchVariant('math-data-9b.js',
  { vIdx: 1, question: '三个视图都是三角形，是什么几何体？', formula: '三棱锥', answer: 0 },
  { answer: '三棱锥', choices: ['三棱锥', '三棱柱', '圆柱', '四棱柱'] });

// ---- 9-10. 9b #15 代数式 ----
patchVariant('math-data-9b.js',
  { vIdx: 0, question: '用代数式表示「比y的2倍多3的数」', formula: '2y+3', answer: 0 },
  { answer: '2y+3', choices: ['2y+3', '2(y+3)', '3y+2', 'y²+3'] });
patchVariant('math-data-9b.js',
  { vIdx: 1, question: '用代数式表示「x的平方除以2」', formula: 'x²/2', answer: 0 },
  { answer: 'x²/2', choices: ['x²/2', '2x²', '2/x²', '(x/2)²'] });

// ---- 11. 9b #17 三线合一 ----
patchVariant('math-data-9b.js',
  { vIdx: 0, question: '在△ABC中，AB=AC，D是BC中点，AD与BC的关系？', formula: 'AD⊥BC且AD平分∠BAC', answer: 0 },
  { answer: 'AD⊥BC且AD平分∠BAC', choices: ['AD⊥BC且AD平分∠BAC', 'AD∥BC', 'AD=BC', 'AD⊥BC但不平分∠BAC'] });

// ---- 12. 8b #12 矛盾题 → 有解版（改为大50度）----
patchVariant('math-data-8b.js',
  { vIdx: 0, question: '一个角的补角比它的余角大50度，这个角是多少？', formula: '(180-x)-(90-x)=50, 90=50矛盾', answer: 0 },
  {
    question: '一个角比它的余角大50度，这个角是多少度？',
    formula: 'x-(90-x)=50',
    answer: 70,
    hint: 'x-(90-x)=2x-90=50，x=70',
    choices: [70, 50, 90, 140]
  });

console.log(`\napplied=${applied} failed=${failed.length}`);
failed.forEach(f => console.log('FAILED:', f));
if (failed.length) process.exit(1);
