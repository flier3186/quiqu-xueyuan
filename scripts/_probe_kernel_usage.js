// scripts/_probe_kernel_usage.js · 实测"模板+变量出题内核"在主链路的实际调用情况
// 关心：正常做题时 MathKernel.generate 会被调用几次？年级边界表/近N题去重是否真正生效？
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));
const PORT = process.env.PORT || 8161;

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);

  const r = await page.evaluate(async () => {
    const sleep = ms => new Promise(x => setTimeout(x, ms));
    try { if (typeof loadGrade === 'function') await loadGrade('3b'); } catch (e) {}
    for (let i = 0; i < 40 && !(window.MATH_BY_GRADE['3b'] && window.MATH_BY_GRADE['3b'].problems); i++) await sleep(150);
    const o = {};

    // 打点：统计内核调用
    let genCalls = 0, genTopics = {};
    const origGen = MathKernel.generate;
    MathKernel.generate = function (t, l) { genCalls++; genTopics[t] = (genTopics[t] || 0) + 1; return origGen.apply(this, arguments); };

    S.math.grade = '3'; S.math.semester = 'b'; S.math.idxBySem = { '3b': 0 }; S.math.daily = null;
    window.MATH_SESSION = null; window.MATH_REVIEW = null; window.MATH_IS_DIAG = false;
    switchView('math'); window.render(); await sleep(400);

    // 连续做 20 题（走主链路）
    const qs = [];
    for (let i = 0; i < 20; i++) {
      const p = window.CURRENT_MATH_PROBLEM || {};
      qs.push(String(p.question || p.formula || '').slice(0, 30));
      try { window.MATH_SESSION.problemIdx = i + 1; window.MATH_SESSION.stage = 'solve'; } catch (e) {}
      try { window.render(); } catch (e) {}
      await sleep(60);
    }
    MathKernel.generate = origGen;

    o.genCalls = genCalls;
    o.genTopics = genTopics;
    o.questions = qs.length;
    o.uniq = new Set(qs).size;
    o.sample = qs.slice(0, 6);
    o.kernelGrade = MathKernel.getGrade ? MathKernel.getGrade() : '?';
    o.kernelTopics = MathKernel.topics ? MathKernel.topics().length : -1;
    o.kernelState = MathKernel.state ? MathKernel.state() : null;
    o.gradeLimits2a = !!(window.GradeLimits && window.GradeLimits.getGrade && window.GradeLimits.getGrade('2a'));
    o.gradeLimits3b = !!(window.GradeLimits && window.GradeLimits.getGrade && window.GradeLimits.getGrade('3b'));
    // 2a 题量 vs 日练目标
    o.p2a = (window.MATH_BY_GRADE['2a'] && window.MATH_BY_GRADE['2a'].problems || []).length;
    o.p2b = (window.MATH_BY_GRADE['2b'] && window.MATH_BY_GRADE['2b'].problems || []).length;
    o.dailyCount = window.MATH_DAILY_COUNT;
    return o;
  });

  console.log('=== 主链路实测（连做 20 题）===');
  console.log('MathKernel.generate 调用次数：', r.genCalls, JSON.stringify(r.genTopics));
  console.log('出题数：', r.questions, ' 去重后：', r.uniq);
  console.log('样题：', JSON.stringify(r.sample));
  console.log('内核当前年级：', r.kernelGrade, ' 允许题型数：', r.kernelTopics, ' 状态：', JSON.stringify(r.kernelState));
  console.log('年级边界表 2a/3b 均存在：', r.gradeLimits2a, r.gradeLimits3b);
  console.log('册题量 2a/2b：', r.p2a, '/', r.p2b, ' 日练目标：', r.dailyCount, r.p2a < r.dailyCount ? '（2a 一册题量 < 日练目标！）' : '');
  await browser.close();
})();
