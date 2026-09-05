// P1 批量修复：answer=0 占位 + 数字编号选项 → 真实答案 + 文本/数值选项
// 方法：以唯一的 formula 行定位题块，在块内替换 answer 与 choices；替换计数断言，绝不静默
const fs = require('fs'), path = require('path');
const DATA = path.join(__dirname, '..', 'data');
let applied = 0; const failed = [];

function patch(file, formulaAnchor, newAnswer, newChoices) {
  const p = path.join(DATA, file);
  let src = fs.readFileSync(p, 'utf8');
  const anchor = `"formula": ${JSON.stringify(formulaAnchor)}`;
  const idx = src.indexOf(anchor);
  if (idx < 0) { failed.push(file + ' anchor not found: ' + formulaAnchor.slice(0, 30)); return; }
  const after = src.slice(idx);
  // 幂等：若该题已修复（answer 已是新值），跳过不报错
  const already = after.match(new RegExp('"answer": ' + JSON.stringify(newAnswer).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ','));
  const aRe = /"answer": 0,/;
  if (!aRe.test(after)) {
    if (already) { console.log('SKIP(已修)', file, '→', formulaAnchor.slice(0, 34)); return; }
    failed.push(file + ' answer:0 not found after ' + formulaAnchor.slice(0, 30)); return;
  }
  // 其后最近的 choices 数字块
  const cRe = /"choices": \[\s*\d+,\s*\d+,\s*\d+,\s*\d+\s*\]/;
  const cM = after.match(cRe);
  if (!cM) { failed.push(file + ' numeric choices not found: ' + formulaAnchor.slice(0, 30)); return; }
  // answer 必须出现在 choices 之前（同一题块内），否则锚到了别的题
  const aPos = after.search(aRe), cPos = after.indexOf(cM[0]);
  if (cPos < aPos) { failed.push(file + ' choices before answer: ' + formulaAnchor.slice(0, 30)); return; }
  let next = src.slice(0, idx)
    + after.replace(aRe, '"answer": ' + JSON.stringify(newAnswer) + ',').replace(cRe, '"choices": ' + JSON.stringify(newChoices));
  // 计数验证：恰好替换一次
  if (next === src) { failed.push(file + ' no change: ' + formulaAnchor.slice(0, 30)); return; }
  fs.writeFileSync(p, next);
  applied++;
  console.log('OK', file, '→', formulaAnchor.slice(0, 34));
}

// 7a
patch('math-data-7a.js', '90°', '90°', ['90°', '45°', '60°', '180°']);
// 8a
patch('math-data-8a.js', '5sqrt(2)+2sqrt(2)-3sqrt(2)=4sqrt(2)', '4sqrt(2)', ['4sqrt(2)', 'sqrt(2)', '3sqrt(2)', '5sqrt(2)']);
patch('math-data-8a.js', 'sqrt(36*2) = 6*sqrt(2)', '6sqrt(2)', ['6sqrt(2)', '2sqrt(6)', '3sqrt(8)', '8sqrt(2)']);
patch('math-data-8a.js', 'h=5*12/13', '60/13', ['60/13', '30/13', '13/5', '65/12']);
// 8b
patch('math-data-8b.js', 'a^6*b^3/a^2*b^2 = a^4*b', 'a^4*b', ['a^4*b', 'a^5*b', 'a^4*b^3', 'a^3*b']);
patch('math-data-8b.js', 'P=3/5×3/5=9/25', '9/25', ['9/25', '3/5', '6/25', '9/10']);
patch('math-data-8b.js', '8a^6*b^3 / 4a*b^2 = 2a^5*b', '2a^5*b', ['2a^5*b', '2a^4*b', '8a^5*b', 'a^5*b']);
patch('math-data-8b.js', 'C=2πr=8π≈25.1, S=πr²=16π≈50.3', 'C=8π≈25.1, S=16π≈50.3', ['C=8π≈25.1, S=16π≈50.3', 'C=4π≈12.6, S=8π≈25.1', 'C=16π≈50.3, S=8π≈25.1', 'C=8π≈25.1, S=4π≈12.6']);
patch('math-data-8b.js', 'x=-b/2a=1, y=1-2-3=-4, 顶点(1,-4)', '(1,-4)', ['(1,-4)', '(-1,4)', '(1,4)', '(2,-3)']);
// 9a
patch('math-data-9a.js', '(x-2)(x-3)=0, x1=2 x2=3', 'x1=2, x2=3', ['x1=2, x2=3', 'x1=-2, x2=-3', 'x1=1, x2=6', 'x1=3, x2=-2']);
patch('math-data-9a.js', '顶点=(10,8)', '(10,8)', ['(10,8)', '(8,10)', '(10,-8)', '(20,8)']);
patch('math-data-9a.js', '(x,y)->(y,-x), (2,3)->(3,-2)', '(3,-2)', ['(3,-2)', '(-3,2)', '(2,-3)', '(-2,-3)']);
patch('math-data-9a.js', 'x²-4x+3=0, (x-1)(x-3)=0', 'x1=1, x2=3', ['x1=1, x2=3', 'x1=-1, x2=-3', 'x1=1, x2=-3', 'x1=-1, x2=3']);
patch('math-data-9a.js', '(20+2x)(15+2x)=450', 2.5, [2.5, 5, 2, 3]);
patch('math-data-9a.js', 'x<4且x≥-1, 解集-1≤x<4', '-1≤x<4', ['-1≤x<4', '-1<x≤4', 'x<-1或x≥4', 'x<4']);
// 9b（含 formula 数学错误一并修正：P(同色)=4/15 而非 1/5）
patch('math-data-9b.js', 'h = 30 * tan30度 ≈ ?', '约17.3米', ['约17.3米', '约30米', '约15米', '约51.9米']);
patch('math-data-9b.js', '主视图+俯视图+左视图', '圆柱', ['圆柱', '圆锥', '球', '棱柱']);
patch('math-data-9b.js', '6/x = x+1, x^2+x-6=0', '(2,3)和(-3,-2)', ['(2,3)和(-3,-2)', '(2,3)', '(-3,-2)', '(3,2)和(-2,-3)']);
patch('math-data-9b.js', '2(x+1)+3(x-1)=(x-1)(x+1)', 'x=0或x=5', ['x=0或x=5', 'x=1或x=5', 'x=0或x=1', 'x=5']);
patch('math-data-9b.js', '1 - P(同色) = 1 - 1/5 = 4/5', '11/15', ['11/15', '4/5', '4/15', '3/5']);
patch('math-data-9b.js', '三视图均为圆的几何体', '球', ['球', '圆柱', '圆锥', '正方体']);
patch('math-data-9b.js', 'x>2且x<4, 解集2<x<4', '2<x<4', ['2<x<4', '2≤x≤4', 'x<2或x>4', '2<x≤4']);
patch('math-data-9b.js', 'C=2πr=10π≈31.4, S=πr²=25π≈78.5', 'C=10π≈31.4, S=25π≈78.5', ['C=10π≈31.4, S=25π≈78.5', 'C=5π≈15.7, S=10π≈31.4', 'C=10π≈31.4, S=10π≈31.4', 'C=25π≈78.5, S=10π≈31.4']);
patch('math-data-9b.js', 'x=-b/2a=2, y=4-8+3=-1, 顶点(2,-1)', '(2,-1)', ['(2,-1)', '(-2,1)', '(2,1)', '(4,3)']);
patch('math-data-9b.js', '3x-5', '3x-5', ['3x-5', '3(x-5)', '5x-3', '3x+5']);
patch('math-data-9b.js', '由SAS可证△ABD≌△ACD，故BD=CD', '成立', ['成立', '不成立', '缺少条件', '无法判断']);

console.log(`\napplied=${applied} failed=${failed.length}`);
failed.forEach(f => console.log('FAILED:', f));
if (failed.length) process.exit(1);
