// scripts/_verify_grade_leak.js · 验证：不同年级是否拿到不同题目（浏览器实测）
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));

(async () => {
  const browser = await chromium.launch({
    channel: 'msedge',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errs = [];
  page.on('pageerror', e => errs.push(String(e).slice(0, 200)));
  await page.goto('http://127.0.0.1:8151/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);

  const res = await page.evaluate(() => {
    const out = {};
    out.hasKernel = typeof window.MathKernel !== 'undefined';
    out.gradeKeys = Object.keys(window.MATH_BY_GRADE || {});
    out.limitKeys = Object.keys(window.GRADE_NUMBER_LIMITS || {});
    // 模拟 renderMath 的出题链路：不同年级各出 6 题
    out.byGrade = {};
    ['2', '3', '4', '5', '6'].forEach(g => {
      ['a', 'b'].forEach(sem => {
        const key = g + sem;
        if (!window.MATH_BY_GRADE[key]) return;
        // 关键：切到该年级后再出题（模拟用户点年级按钮）
        if (window.MathKernel && window.MathKernel.setGrade) window.MathKernel.setGrade(key);
        const list = [];
        const bank = window.MATH_BY_GRADE[key].problems || [];
        for (let i = 0; i < 4; i++) {
          // 主链路：教材对齐题库
          const p = bank[i];
          if (p) { list.push({ f: p.formula, k: p.knowledge, src: 'bank' }); continue; }
          let q = null;
          if (window.MathKernel && typeof window.MathKernel.generate === 'function') {
            const inst = window.MathKernel.generate();
            q = { f: inst.formula, k: inst.knowledge, src: 'kernel' };
          }
          list.push(q);
        }
        out.byGrade[key] = list;
      });
    });
    return out;
  });

  console.log('=== 内核存在:', res.hasKernel, '===');
  console.log('=== MATH_BY_GRADE 年级:', res.gradeKeys.join(','), '===');
  console.log('=== 年级边界表覆盖年级:', res.limitKeys.join(','), '===');
  console.log('\n=== 各年级实际抽到的题（各 4 题）===');
  Object.keys(res.byGrade).forEach(k => {
    const uniq = new Set();
    res.byGrade[k].forEach(p => { if (p) uniq.add(p.f); });
    console.log(`\n[${k}]  ${res.byGrade[k].map(p => p && p.f).join('  |  ')}`);
  });

  // 只看 6a 与 3a 是否同分布
  const f6 = (res.byGrade['6a'] || []).map(p => p && p.f);
  const f3 = (res.byGrade['3a'] || []).map(p => p && p.f);
  console.log('\n>>> 6a 题:', f6.join(' | '));
  console.log('>>> 3a 题:', f3.join(' | '));

  console.log('\n=== 页面错误 ===');
  console.log(errs.slice(0, 8).join('\n') || '(无)');
  await browser.close();
})();
