// scripts/_verify_wiring.js · 验证：闯关/推荐/知识链等入口是否真的可用
const path = require('path');
const { chromium } = require(path.join('C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules', 'playwright-core'));

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errs = [];
  page.on('pageerror', e => errs.push('PAGEERROR: ' + String(e).slice(0, 180)));
  page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE: ' + m.text().slice(0, 180)); });
  await page.goto('http://127.0.0.1:8151/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);

  const r = await page.evaluate(() => {
    const o = {};
    // 1. 年级对象字段
    const g3a = window.MATH_BY_GRADE && window.MATH_BY_GRADE['3a'];
    o.gradeFields = g3a ? Object.keys(g3a) : null;
    o.hasVariants = !!(g3a && g3a.variants);
    o.hasKnowledge = !!(g3a && g3a.knowledge);
    o.hasKnowledgeMap = !!(g3a && g3a.knowledgeMap);
    // 2. 闯关入口
    o.challengeFnExists = typeof window.startMathChallenge === 'function';
    try { window.startMathChallenge && window.startMathChallenge(); o.challengeErr = null; }
    catch (e) { o.challengeErr = String(e).slice(0, 160); }
    o.challengeCount = (typeof challengeQuestions !== 'undefined' && challengeQuestions) ? challengeQuestions.length : 'n/a';
    // 3. LearningPath 推荐
    try {
      o.findNext = typeof window.LearningPath !== 'undefined' && window.LearningPath._findNextKnowledge
        ? JSON.stringify(window.LearningPath._findNextKnowledge('3a')) : 'LearningPath 缺失';
    } catch (e) { o.findNext = 'THROW: ' + String(e).slice(0, 120); }
    // 4. 知识链
    o.chains = (typeof MATH_CHAINS !== 'undefined' && MATH_CHAINS) ? MATH_CHAINS.length : 0;
    // 5. 听算
    o.listeningSource = typeof window.ListeningMath !== 'undefined';
    return o;
  });
  console.log(JSON.stringify(r, null, 1));
  console.log('\n=== 运行时错误 ===');
  console.log([...new Set(errs)].slice(0, 15).join('\n') || '(无)');
  await browser.close();
})();
