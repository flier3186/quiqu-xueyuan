// 验证：新教材题库 + 知识关联链渲染
const { chromium } = require('playwright-core');
const BASE = 'http://127.0.0.1:8147/index.html';

(async () => {
  const b = await chromium.launch({ channel: 'msedge', headless: true });
  const p = await b.newPage({ viewport: { width: 1280, height: 1000 } });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });

  await p.goto(BASE, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500);

  // 1. 数据完整性
  const data = await p.evaluate(() => ({
    hasChains: typeof MATH_CHAINS !== 'undefined' && MATH_CHAINS.length,
    grades: Object.keys(MATH_BY_GRADE || {}),
    totalProblems: Object.values(MATH_BY_GRADE || {}).reduce((s, g) => s + (g.problems || []).length, 0),
    sampleKnowledge: (MATH_BY_GRADE['5a'].problems || []).map(x => x.knowledge),
    chainNames: (MATH_CHAINS || []).map(c => c.name)
  }));
  console.log('关联链条数:', data.hasChains);
  console.log('年级册:', data.grades.join(','));
  console.log('主题题总数:', data.totalProblems);
  console.log('五上知识点:', data.sampleKnowledge.join(' | '));
  console.log('关联链:', data.chainNames.join('、'));

  // 2. 进入数学板块，逐册检查关联链渲染 + 本册高亮
  await p.evaluate(() => { document.querySelector('.nav-tab[data-view="math"]').click(); });
  await p.waitForTimeout(900);

  for (const [g, sem] of [['6', 'a'], ['5', 'a'], ['3', 'a']]) {
    await p.evaluate((gx) => {
      const pill = [...document.querySelectorAll('.grade-pill')].find(e => e.dataset.grade === gx);
      if (pill) pill.click();
    }, g);
    await p.waitForTimeout(700);
    const r = await p.evaluate(() => {
      const chains = document.querySelectorAll('.mc-chain');
      const hit = document.querySelectorAll('.mc-chain.hit');
      const onSteps = [...document.querySelectorAll('.mc-step.on')].map(e => e.textContent.trim());
      return { chains: chains.length, hit: hit.length, onSteps };
    });
    console.log(`  ${g}年级: 关联链卡片 ${r.chains} 张 | 命中本册 ${r.hit} 张 | 高亮环节: ${r.onSteps.join(' / ')}`);
  }

  // 3. 截图（数学板块底部）
  await p.evaluate(() => { document.querySelector('.nav-tab[data-view="math"]').click(); });
  await p.waitForTimeout(800);
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await p.waitForTimeout(600);
  await p.screenshot({ path: 'scripts/_chain_ui.png' });

  // 4. 切到六上，抽查一题是否正常渲染（新题 visualData 合法性）
  await p.evaluate(() => {
    const pill = [...document.querySelectorAll('.grade-pill')].find(e => e.dataset.grade === '6');
    if (pill) pill.click();
  });
  await p.waitForTimeout(800);
  const q = await p.evaluate(() => {
    const t = document.querySelector('#mathStage');
    return t ? t.textContent.slice(0, 90) : '无内容';
  });
  console.log('六上首题渲染:', q.replace(/\s+/g, ' '));

  console.log('pageerror:', errs.length, errs.slice(0, 3));
  await b.close();
})();
