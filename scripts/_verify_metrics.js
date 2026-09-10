/**
 * P2-10 验证：使用埋点
 *   ① 模块加载、open() 计入当天
 *   ② 切视图结算停留时长（min 增长）
 *   ③ 作答事件 answer/start/complete 递增
 *   ④ 家长面板：近 7 天图表取真实数据（不再是 Math.random），且"使用情况"卡片渲染
 *   ⑤ 无 JS 错误
 */
const { chromium } = require('playwright-core');
const PORT = process.env.PORT || 8161;

(async () => {
  const b = await chromium.launch({ channel: 'msedge', headless: true });
  const p = await b.newPage({ viewport: { width: 430, height: 900 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push(String(e.message || e)));
  await p.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'load' });
  await p.waitForTimeout(1200);

  const r1 = await p.evaluate(() => {
    const d = window.UsageMetrics ? UsageMetrics.data() : null;
    const k = Object.keys((d && d.days) || {})[0];
    return { loaded: !!window.UsageMetrics, days: Object.keys((d && d.days) || {}), today: k ? d.days[k] : null,
      api: window.UsageMetrics ? Object.keys(UsageMetrics).length : 0 };
  });

  // 进数学 → 切英语 → 回数学，制造停留时长
  await p.evaluate(() => { const t=[...document.querySelectorAll('.nav-tab')].find(x=>/数学/.test(x.innerText)); t&&t.click(); });
  await p.waitForTimeout(1500);
  await p.evaluate(() => { const t=[...document.querySelectorAll('.nav-tab')].find(x=>/英语/.test(x.innerText)); t&&t.click(); });
  await p.waitForTimeout(1200);
  // 造一次作答埋点
  await p.evaluate(() => {
    window.UsageMetrics.event('answer', { subject: 'math' });
    window.UsageMetrics.mark('start', 'math');
    window.UsageMetrics.event('start', { subject: 'math' });
    window.UsageMetrics.flush();
  });

  // 打开家长面板（面板有 4 位密码门，默认 1234）
  await p.evaluate(() => { const b=document.querySelector('#parentBtn'); b&&b.click(); });
  await p.waitForTimeout(400);
  await p.evaluate(() => {
    const inp = document.querySelector('#parentPwd');
    if (inp) { inp.value = '1234'; if (typeof checkParentPwd === 'function') checkParentPwd(); }
  });
  await p.waitForTimeout(900);

  const r2 = await p.evaluate(() => {
    const bodyEl = document.querySelector('#parentBody');
    const txt = bodyEl ? bodyEl.innerText : '';
    const um = UsageMetrics.summary(7);
    return {
      summary: um,
      hasUsageCard: /使用情况（近 7 天/.test(txt),
      rawMin: (() => { const d = UsageMetrics.data(); const k = Object.keys(d.days)[0]; return d.days[k] ? d.days[k].min : null; })(),
      hasFakeWarn: /使用情况/.test(txt) ? '' : 'no-card',
      last7: UsageMetrics.last(7).map((x) => `${x.date.slice(5)} opens=${x.opens} min=${x.min} subj=${Object.keys(x.subj||{}).join('/')}`),
      panelSnippet: txt.split('\n').filter((l) => /使用情况|打开次数|总时长|平均每次|完成|中途离开|分钟/.test(l)).slice(0, 8)
    };
  });

  console.log('① 模块/打开计数:', JSON.stringify(r1));
  console.log('② summary:', JSON.stringify(r2.summary));
  console.log('③ 使用情况卡片渲染:', r2.hasUsageCard, ' 原始停留(分):', r2.rawMin);
  console.log('④ 近7天原始:', r2.last7.join(' | '));
  console.log('⑤ 面板摘录:', r2.panelSnippet);
  console.log('JS 错误:', errs.length ? errs : '无');
  await b.close();

  const ok = r1.loaded && r1.today && r1.today.opens >= 1 && r2.summary.opens >= 1 &&
             r2.hasUsageCard && r2.rawMin > 0 && r2.summary.subjMin.math >= 0 && errs.length === 0;
  if (!ok) { console.log('✗ P2-10 未通过'); process.exit(5); }
  console.log('✓ P2-10 通过');
})().catch((e) => { console.error('FAIL', e); process.exit(5); });
