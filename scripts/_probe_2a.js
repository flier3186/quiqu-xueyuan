const { chromium } = require('playwright-core');
const PORT = process.env.PORT || 8161;
(async () => {
  const b = await chromium.launch({ channel: 'msedge', headless: true });
  const p = await b.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  p.on('console', m => { if (m.type() === 'error') errs.push('console:' + m.text()); });
  await p.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'load' });
  await p.waitForTimeout(1500);
  const out = await p.evaluate(async () => {
    const r = {};
    r.hasGradeFile = !!(window.GRADE_FILES && window.GRADE_FILES['2a']);
    r.hasGradeOrder2a = (window.GRADE_ORDER || []).indexOf('2a') >= 0;
    const ok = await loadGrade('2a');
    r.loaded = !!(window.MATH_LOADED_GRADES || {})['2a'];
    r.loadOk = ok;
    const g = window.MATH_BY_GRADE['2a'];
    r.total = (g.problems || []).length;
    r.knowledgeMap = (g.knowledgeMap || []).length;
    // 逐题渲染（静态图）看有没有空白
    const rendered = [];
    for (const pr of g.problems) {
      let html = '';
      try { html = window.MathVisualV5.render(pr.visualType, pr.visualData, pr) || ''; } catch (e) { html = 'ERR:' + e.message; }
      const empty = !html || html.indexOf('mv-empty') >= 0 || html.indexOf('ERR:') === 0;
      rendered.push({ id: pr.id, vt: pr.visualType, len: html.length, empty: empty, head: html.slice(0, 60) });
    }
    r.renderEmpty = rendered.filter(x => x.empty).map(x => x.id + '/' + x.vt);
    r.renderLens = rendered.map(x => x.id + '=' + x.len).join(' ');
    // 日练池
    let daily = null;
    try { daily = window.MathDailyBank.build('2a'); } catch (e) {}
    r.dailyKept = daily ? daily.kept : null;
    r.dailyReview = daily ? (daily.reviewPool || []).length : null;
    return r;
  });
  console.log(JSON.stringify(out, null, 1));
  console.log('JS错误:', errs.length ? errs.slice(0, 5) : '无');
  await b.close();
})();
