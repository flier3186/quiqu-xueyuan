/**
 * P2-7 验证：删掉内联占位题库后，
 *   ① 首页/数学区无 JS 报错
 *   ② 各册都能懒加载出真实题库（题量 > 0，且不是旧的 6 题占位）
 *   ③ MATH_EXTEND_3_6 的扩展题真正进入了题库（修复前 hasProbe=false）
 */
const { chromium } = require('playwright-core');
const PORT = process.env.PORT || 8147;

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e.message || e)));
  page.on('console', (m) => { if (m.type() === 'error') errs.push('console: ' + m.text()); });

  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'load' });
  await page.waitForTimeout(1200);

  const out = await page.evaluate(async () => {
    const r = { grades: {}, extend: {} };
    // ① 扩展题：逐册验证至少 1 道在库
    const E = window.MATH_EXTEND_3_6 || {};
    for (const g of ['2a','2b','3a','3b','4a','4b','5a','5b','6a','6b']) {
      await window.loadGrade(g);
      const d = window.MATH_BY_GRADE[g];
      const probs = (d && d.problems) || [];
      let bankKept = 0;
      try { bankKept = window.MathDailyBank.build(g).kept; } catch (e) {}
      r.grades[g] = { problems: probs.length, bankKept, title: (d && d.title) || null };
    }
    for (const ek of Object.keys(E)) {
      const g = ek.replace(/_e$/, '');
      const d = window.MATH_BY_GRADE[g];
      const probs = (d && d.problems) || [];
      const arr = E[ek] || [];
      const hit = arr.filter((x) => probs.some((p) => String(p.question).trim() === String(x.question).trim())).length;
      r.extend[ek] = `${hit}/${arr.length}`;
    }
    r.extendTotal = window.MATH_EXTEND_TOTAL || 0;
    r.patchKeys = Object.keys(window.MATH_GRADE_PATCH || {});
    return r;
  });

  console.log('各册题量 / 净化池:');
  for (const g of Object.keys(out.grades)) {
    const x = out.grades[g];
    console.log(`  ${g}  题库 ${String(x.problems).padStart(4)}  净化池 ${String(x.bankKept).padStart(4)}  ${x.title || '(无标题)'}`);
  }
  console.log('\n扩展题入库情况（命中/总数）:', JSON.stringify(out.extend));
  console.log('扩展题登记总数:', out.extendTotal, ' 补丁册:', out.patchKeys.join(','));
  console.log('\nJS 错误:', errs.length ? errs : '无');
  await browser.close();
  const allOk = Object.values(out.grades).every((x) => x.problems > 6) &&
                Object.values(out.extend).every((s) => Number(s.split('/')[0]) > 0) &&
                errs.length === 0;
  if (!allOk) process.exit(1);
})().catch((e) => { console.error('FAIL', e); process.exit(1); });
