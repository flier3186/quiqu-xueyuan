// scripts/_shot_stage2.js · 阶段 2 界面实拍（母版兜底 / 摸底入口 / 摸底中 / 定级报告）
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));
const PORT = process.env.PORT || 8161;

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);

  await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    if (typeof loadGrade === 'function') await loadGrade('3a');
    for (let i = 0; i < 40 && !(window.MATH_BY_GRADE['3a'] && window.MATH_BY_GRADE['3a'].problems); i++) await sleep(150);
    localStorage.removeItem('quiqu_math_diag_v1');
    S.math.grade = '3'; S.math.semester = 'a'; S.math.idxBySem = { '3a': 0 };
    S.math.mathProfile = { studyMode: 'advanced', setAt: Date.now() };
    window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false;
    switchView('math'); window.render(); await sleep(600);
  });

  // 1) 入口卡
  await page.screenshot({ path: 'scripts/_s2_1_entry.png' });

  // 2) 摸底中
  await page.evaluate(async () => { window.MathDiagnostic.startRun(); await new Promise(r => setTimeout(r, 500)); });
  await page.screenshot({ path: 'scripts/_s2_2_running.png' });

  // 3) 全对做完 → 定级报告
  await page.evaluate(async () => {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    let guard = 0;
    while (window.MathDiagnostic._state() && !window.MathDiagnostic._state().done && guard++ < 30) {
      const cur = window.MathDiagnostic.current();
      if (!cur) break;
      window.MathDiagnostic.answer(String(cur.problem.answer));
      await sleep(120);
    }
    await sleep(400);
  });
  await page.screenshot({ path: 'scripts/_s2_3_result.png' });

  // 4) 母版兜底实拍：把底层渲染器打成空，看是否仍有图
  const fb = await page.evaluate(async () => {
    window.MathDiagnostic.exit(); await new Promise(r => setTimeout(r, 400));
    const p = window.CURRENT_MATH_PROBLEM;
    const orig = MathVisualV5.render; MathVisualV5.render = function () { return ''; };
    const h = window._mvHTML(p); MathVisualV5.render = orig;
    const host = document.getElementById('mathStage');
    const d = document.createElement('div');
    d.style.cssText = 'padding:16px;background:#fff;border-radius:14px;margin-bottom:12px';
    d.innerHTML = '<div style="font-size:13px;font-weight:800;color:#1349A6;margin-bottom:8px">兜底演示：底层渲染器返回空时，课程图母版仍能画出参数化图形</div>' + h;
    document.querySelector('.math-scope > div').insertBefore(d, host);
    await new Promise(r => setTimeout(r, 300));
    return h.length;
  });
  await page.screenshot({ path: 'scripts/_s2_4_fallback.png' });
  console.log('fallback html len =', fb);
  await browser.close();
})();
