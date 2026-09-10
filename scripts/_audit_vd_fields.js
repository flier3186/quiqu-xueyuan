/**
 * P2-8 守门：visualData 字段统一性
 *   ① 归一化后，parts/bars/points 的每一项都必须有数值 val，且不得残留 value
 *   ② 渲染层不得因为字段缺失而吐出 "undefined" / "NaN"
 *   ③ 统计源数据里 value 与 val 的用量（信息性，反映历史债）
 * 失败退出码 = 4
 */
const { chromium } = require('playwright-core');
const PORT = process.env.PORT || 8147;
const GRADES = ['2a','2b','3a','3b','4a','4b','5a','5b','6a','6b'];

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage();
  const errs = [];
  page.on('pageerror', (e) => errs.push(String(e.message || e)));

  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'load' });
  await page.waitForTimeout(1200);

  const r = await page.evaluate(async (grades) => {
    const out = { srcVal: 0, srcValue: 0, totalItems: 0, badNorm: [], renderBad: [], rendered: 0, renders: {} };
    const KEYS = window.MATH_VD_CANON_KEYS || ['parts', 'bars', 'points'];
    const all = [];
    for (const g of grades) {
      await window.loadGrade(g);
      const d = window.MATH_BY_GRADE[g];
      if (!d || !Array.isArray(d.problems)) continue;
      d.problems.forEach((p) => all.push({ g, p }));
    }
    for (const { g, p } of all) {
      const vd = p.visualData;
      if (!vd || typeof vd !== 'object') continue;
      KEYS.forEach((k) => {
        const arr = vd[k];
        if (!Array.isArray(arr)) return;
        arr.forEach((it) => {
          if (!it || typeof it !== 'object') return;
          out.totalItems++;
          if (it.val != null) out.srcVal++; else if (it.value != null) out.srcValue++;
        });
      });
      // 归一化
      const nv = window.normVisualData(vd);
      KEYS.forEach((k) => {
        const arr = nv[k];
        if (!Array.isArray(arr)) return;
        arr.forEach((it) => {
          if (!it || typeof it !== 'object') return;
          const hadEither = (it.val != null) || (it.value != null) || ('value' in it);
          if (!hadEither) return;               // 不是数量项（如数轴刻度点），不参与
          const hasVal = it.val != null && isFinite(Number(it.val));
          const leftValue = ('value' in it);
          if (!hasVal || leftValue) {
            out.badNorm.push({ g, q: String(p.question).slice(0, 30), key: k, val: it.val, value: it.value });
          }
        });
      });
      // 渲染层 smoke：真正调用渲染器，检查输出里有没有 undefined / NaN
      try {
        const type = (p.visualData && p.visualData.type) || p.visualType || 'barModel';
        const html = window.MathVisualV5.render(type, vd, p);
        out.rendered++;
        if (/undefined|NaN/.test(String(html))) {
          out.renderBad.push({ g, q: String(p.question).slice(0, 30), type });
        }
        const mk = window.MathManipulative && window.MathManipulative.render
          ? window.MathManipulative.render(p) : '';
        if (/undefined|NaN/.test(String(mk))) {
          out.renderBad.push({ g, q: String(p.question).slice(0, 30), type: 'manip' });
        }
      } catch (e) {
        out.renderBad.push({ g, q: String(p.question).slice(0, 30), type: 'THROW ' + e.message });
      }
    }
    return out;
  }, GRADES);

  console.log('visualData 字段统一性审计（P2-8）');
  console.log('  数组项总数        :', r.totalItems);
  console.log('  源数据 val / value:', r.srcVal, '/', r.srcValue);
  console.log('  归一化异常        :', r.badNorm.length);
  console.log('  渲染调用          :', r.rendered, ' 渲染异常(undefined/NaN):', r.renderBad.length);
  if (r.badNorm.length) { console.log('\n前 10 条归一化异常:'); r.badNorm.slice(0, 10).forEach((x) => console.log('   ', JSON.stringify(x))); }
  if (r.renderBad.length) { console.log('\n前 10 条渲染异常:'); r.renderBad.slice(0, 10).forEach((x) => console.log('   ', JSON.stringify(x))); }
  if (errs.length) console.log('\nJS 错误:', errs);
  await browser.close();

  if (r.badNorm.length || r.renderBad.length || errs.length) { console.log('\n✗ P2-8 未通过'); process.exit(4); }
  console.log('\n✓ P2-8 通过：字段已统一到 val，全部渲染无 undefined/NaN');
})().catch((e) => { console.error('FAIL', e); process.exit(4); });
