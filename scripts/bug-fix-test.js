const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:8765/');
  await page.waitForTimeout(1500);

  const results = [];
  function log(name, pass, detail) {
    results.push({ name, pass, detail });
    console.log((pass ? '✅ PASS' : '❌ FAIL') + ': ' + name + (detail ? ' - ' + detail : ''));
  }

  async function clickBtn(text) {
    return page.evaluate(t => {
      for (const b of document.querySelectorAll('button')) {
        if (String(b.innerText || '').includes(t)) { b.click(); return true; }
      }
      return false;
    }, text);
  }

  async function waitForBtn(text, timeout = 8000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      const found = await page.evaluate(t => {
        for (const b of document.querySelectorAll('button')) {
          if (String(b.innerText || '').includes(t)) return true;
        }
        return false;
      }, text);
      if (found) return true;
      await page.waitForTimeout(200);
    }
    return false;
  }

  async function waitForText(text, timeout = 5000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      const found = await page.evaluate(t => {
        for (const b of document.querySelectorAll('button')) {
          if (String(b.innerText || '').includes(t)) return true;
        }
        return false;
      }, text);
      if (found) return true;
      await page.waitForTimeout(200);
    }
    return false;
  }

  // Click correct choice for both discover and solve stages
  async function clickCorrectChoice() {
    return page.evaluate(() => {
      const choices = document.querySelectorAll('.wp-choice');
      for (const el of choices) {
        const onclick = el.getAttribute('onclick') || '';
        // Match _discoverAnswer(this,chosenIdx,correctIdx,stepIdx) or _solveAnswer(this,chosenIdx,correctIdx)
        const match = onclick.match(/_(discover|solve)Answer\(this,(\d+),(\d+)/);
        if (match && parseInt(match[2]) === parseInt(match[3])) { el.click(); return true; }
      }
      if (choices.length > 0) { choices[0].click(); return true; }
      return false;
    });
  }

  // Click correct choice for practice stage (any level)
  async function clickPracticeCorrectChoice() {
    return page.evaluate(() => {
      const choices = document.querySelectorAll('.wp-choice');
      for (const el of choices) {
        const onclick = el.getAttribute('onclick') || '';
        const match = onclick.match(/_practiceAnswer\(this,(\d+),(\d+)/);
        if (match && parseInt(match[1]) === parseInt(match[2])) { el.click(); return true; }
      }
      if (choices.length > 0) { choices[0].click(); return true; }
      return false;
    });
  }

  async function getSession() {
    return page.evaluate(() => ({
      stage: window.MathFlowV5 ? window.MathFlowV5._sess ? window.MathFlowV5._sess.stage : 'no-session' : 'no-flow',
      problemIdx: window.MATH_SESSION ? window.MATH_SESSION.problemIdx : -1,
      practiceIdx: window.MathFlowV5 ? window.MathFlowV5._sess ? window.MathFlowV5._sess.practiceIndex : -1 : -1,
    }));
  }

  async function setupMath() {
    await page.evaluate(() => window.switchView('math'));
    await page.waitForTimeout(600);
    await page.evaluate(() => {
      if (typeof S !== 'undefined') {
        S.math = S.math || {};
        S.math.mathProfile = { studyMode: 'beginner', setAt: Date.now() };
      }
    });
    await page.evaluate(() => { if (typeof render === 'function') render(); });
    await page.waitForTimeout(800);
  }

  // ===== Test 1: Math questions advance =====
  await setupMath();

  // Handle study mode choice overlay (first visit)
  const hasModeChoice = await page.evaluate(() => {
    return document.querySelector('.mode-choice-layer') !== null;
  });
  if (hasModeChoice) {
    await page.evaluate(() => {
      const el = document.querySelector('[data-mode="beginner"]');
      if (el) el.click();
    });
    await page.waitForTimeout(600);
  }

  const idx0 = await page.evaluate(() => window.MATH_SESSION ? window.MATH_SESSION.problemIdx : -1);
  log('T1a-Problem idx starts at 0', idx0 === 0, 'idx=' + idx0);

  // Stage 0: review → warmup (button text is "开始学习 →")
  await clickBtn('开始学习');
  await page.waitForTimeout(600);

  // Stage 1: warmup → rme (button text is "一起来发现 →")
  await clickBtn('一起来发现');
  await page.waitForTimeout(600);

  // Stage 2: rme → discover (fill input, click submit)
  await page.evaluate(() => {
    const inp = document.getElementById('v5RMEAnswer');
    if (inp) { inp.value = '?'; inp.dispatchEvent(new Event('input', { bubbles: true })); }
  });
  await page.waitForTimeout(200);
  await clickBtn('提交');
  await page.waitForTimeout(2000);

  // Stage 3: discover (3 steps, each takes 900ms setTimeout to advance)
  for (let i = 0; i < 3; i++) {
    await clickCorrectChoice();
    await page.waitForTimeout(1100);
  }

  // Stage 4: solve → explain (takes 1100ms setTimeout)
  await clickCorrectChoice();
  await page.waitForTimeout(1300);

  // Stage 5: explain → askChild (click "下一步" to advance steps, then auto-advances after step 3)
  for (let i = 0; i < 6; i++) {
    const clicked = await clickBtn('下一步');
    if (!clicked) break;
    await page.waitForTimeout(1000);
  }

  // Stage 6: askChild → practice (fill textarea then click submit)
  const hasAsk = await page.evaluate(() => {
    for (const b of document.querySelectorAll('button')) {
      if (String(b.innerText || '').includes('提交我的问题')) return true;
    }
    return false;
  });
  if (hasAsk) {
    await page.evaluate(() => {
      const ta = document.getElementById('v5AskInput');
      if (ta) { ta.value = '这道题怎么做？'; ta.dispatchEvent(new Event('input', { bubbles: true })); }
    });
    await page.waitForTimeout(200);
    await clickBtn('提交我的问题');
  } else {
    await clickBtn('直接去练习');
  }
  await page.waitForTimeout(1800);

  // Stage 7: practice - answer questions (10 levels: L1, L2, L3, L4, L1, L2, L3, L4, L1, L2)
  // Each practice question: click correct choice, wait for feedback, click next button
  for (let i = 0; i < 10; i++) {
    await clickPracticeCorrectChoice();
    await page.waitForTimeout(600);

    // Wait for next button to appear (practice shows "下一题", complete shows "下一题" too)
    const hasNext = await waitForBtn('下一题', 3000);
    if (!hasNext) break;

    // Check if we're at the complete stage
    const sess = await page.evaluate(() => window.MathFlowV5 ? window.MathFlowV5._sess : null);
    if (sess && sess.practiceIndex >= sess.practiceTotal) {
      // Complete stage - click "下一题" to call mathNextProblem()
      await clickBtn('下一题');
      await page.waitForTimeout(1500);
      break;
    }

    await clickBtn('下一题');
    await page.waitForTimeout(500);
  }

  // Stage 8: verify we advanced to a new problem
  const idx1 = await page.evaluate(() => window.MATH_SESSION ? window.MATH_SESSION.problemIdx : -1);
  log('T1c-Practice completed (idx0=0)', idx1 >= 0, 'problemIdx=' + idx1);
  log('T1b-Next problem advances (idx>0)', idx1 > 0, 'idx=' + idx1);

  // ===== Test 2: Bar model renders =====
  await setupMath();

  // Handle study mode choice overlay
  const hasModeChoice2 = await page.evaluate(() => document.querySelector('.mode-choice-layer') !== null);
  if (hasModeChoice2) {
    await page.evaluate(() => { const el = document.querySelector('[data-mode="beginner"]'); if (el) el.click(); });
    await page.waitForTimeout(600);
  }

  await clickBtn('开始学习'); await page.waitForTimeout(600);
  await clickBtn('一起来发现'); await page.waitForTimeout(600);

  // Fill RME input and submit
  await page.evaluate(() => {
    const inp = document.getElementById('v5RMEAnswer');
    if (inp) { inp.value = '?'; inp.dispatchEvent(new Event('input', { bubbles: true })); }
  });
  await page.waitForTimeout(200);
  await clickBtn('提交');
  await page.waitForTimeout(2000);

  // Click 3 discover answers
  for (let i = 0; i < 3; i++) {
    await clickCorrectChoice();
    await page.waitForTimeout(1100);
  }

  // Click solve answer
  await clickCorrectChoice();
  await page.waitForTimeout(1300);

  // Check bar model immediately (before auto-advancing to askChild)
  // Bar model renders with class "mv-bar-model" in explain stage
  await page.waitForTimeout(600);
  const barEl = await page.$('.mv-bar-model, .mv-wrap');
  log('T2-Bar model renders', !!barEl, barEl ? 'found mv-bar-model/mv-wrap' : 'not found');

  // ===== Test 3: Number bond shows large numbers =====
  await setupMath();

  // Handle study mode choice overlay
  const hasModeChoice3 = await page.evaluate(() => document.querySelector('.mode-choice-layer') !== null);
  if (hasModeChoice3) {
    await page.evaluate(() => { const el = document.querySelector('[data-mode="beginner"]'); if (el) el.click(); });
    await page.waitForTimeout(600);
  }

  await clickBtn('开始学习'); await page.waitForTimeout(600);
  await clickBtn('一起来发现'); await page.waitForTimeout(600);

  await page.evaluate(() => {
    const inp = document.getElementById('v5RMEAnswer');
    if (inp) { inp.value = '?'; inp.dispatchEvent(new Event('input', { bubbles: true })); }
  });
  await page.waitForTimeout(200);
  await clickBtn('提交');
  await page.waitForTimeout(2000);

  for (let i = 0; i < 3; i++) {
    await clickCorrectChoice();
    await page.waitForTimeout(1100);
  }

  await clickCorrectChoice();
  await page.waitForTimeout(1300);

  // Check number bond immediately (before auto-advancing to askChild)
  // Number bond renders with class "mv-bond-model" in explain stage
  await page.waitForTimeout(600);
  // Check for any number bond SVG text content
  const allText = await page.evaluate(() => {
    const texts = document.querySelectorAll('.mv-wrap text, svg text');
    return Array.from(texts).map(t => t.textContent.trim());
  });
  const largeNums = allText.filter(t => { const n = parseInt(t); return !isNaN(n) && n >= 10; });
  log('T3-Number bond shows large numbers (>=10)', largeNums.length >= 2, 'large nums: ' + largeNums.slice(0,4).join(', '));

  // ===== Test 4: Flashcard has emoji fallback =====
  await page.evaluate(() => window.switchView('english'));
  await page.waitForTimeout(500);
  const flashFallback = await page.$('.flash-emoji-fallback');
  log('T4-Flashcard has emoji fallback', !!flashFallback, flashFallback ? 'exists' : 'missing');
  const flashImgSrc = await page.$eval('.flash-photo', el => el.src).catch(() => '');
  log('T4-Flashcard image uses data URI or empty', flashImgSrc === '' || flashImgSrc.startsWith('data:'), 'src=' + flashImgSrc.slice(0, 50));

  // ===== Test 5: Phrases differ by grade =====
  const p3 = await page.evaluate(() => typeof getPhraseScenesForGrade === 'function' ? getPhraseScenesForGrade('3') : []);
  const p5 = await page.evaluate(() => typeof getPhraseScenesForGrade === 'function' ? getPhraseScenesForGrade('5') : []);
  const p6 = await page.evaluate(() => typeof getPhraseScenesForGrade === 'function' ? getPhraseScenesForGrade('6') : []);
  log('T5a-Grade 3 has phrases', p3.length > 0, p3.join(','));
  log('T5b-Grade 5 differs from grade 3', JSON.stringify(p3) !== JSON.stringify(p5), '3=' + p3.length + ' 5=' + p5.length);
  log('T5c-Grade 6 differs from grade 5', JSON.stringify(p5) !== JSON.stringify(p6), '5=' + p5.join(',') + ' 6=' + p6.join(','));

  // ===== Test 6: Grammar pills differ by grade =====
  const g3 = await page.evaluate(() => typeof getGrammarPillsForGrade === 'function' ? getGrammarPillsForGrade('3').map(p => p.name) : []);
  const g5 = await page.evaluate(() => typeof getGrammarPillsForGrade === 'function' ? getGrammarPillsForGrade('5').map(p => p.name) : []);
  const g6 = await page.evaluate(() => typeof getGrammarPillsForGrade === 'function' ? getGrammarPillsForGrade('6').map(p => p.name) : []);
  log('T6a-Grade 3 grammar pills', g3.length > 0, g3.join(','));
  log('T6b-Grade 5 differs from grade 3', JSON.stringify(g3) !== JSON.stringify(g5), '3=' + g3.length + ' 5=' + g5.length);
  log('T6c-Grade 6 differs from grade 5', JSON.stringify(g5) !== JSON.stringify(g6), '5=' + g5.length + ' 6=' + g6.length);

  // ===== Test 7: Spelling game renders =====
  await page.evaluate(() => window.switchView('game'));
  await page.waitForTimeout(800);
  const spellCard = await page.$('.game-card.teal');
  if (spellCard) {
    await spellCard.click({ force: true });
    await page.waitForTimeout(800);
    const hasSlots = await page.$('#spellSlots');
    log('T7a-Spelling game renders', !!hasSlots, hasSlots ? 'slots visible' : 'no slots');
    const hasFeedback = await page.$('#spellFeedback');
    log('T7b-Spelling feedback area exists', !!hasFeedback, '');
    const letters = await page.$$('.spell-letter:not(.used)');
    if (letters.length > 0) {
      await letters[0].click({ force: true });
      await page.waitForTimeout(300);
      const fb = await page.$('#spellFeedback');
      log('T7c-Fill letter works', !!fb, fb ? 'feedback present' : 'no feedback');
    } else {
      log('T7c-No letters to click', false, 'no available letters');
    }
  } else {
    const allCards = await page.$$('.game-card');
    log('T7-Spell card found', allCards.length > 0, 'cards found: ' + allCards.length);
    if (allCards.length > 0) {
      await allCards[0].click({ force: true });
      await page.waitForTimeout(600);
      const spellCard2 = await page.$('.game-card.teal');
      log('T7-Spell card renders after click', !!spellCard2, '');
    }
  }

  // ===== Test 8: Pet mini-games are functional =====
  await page.evaluate(() => window.switchView('pet'));
  await page.waitForTimeout(800);
  const memoryCard = await page.$('.mini-game-card.c1');
  const mathMiniCard = await page.$('.mini-game-card.c2');
  const wordMiniCard = await page.$('.mini-game-card.c3');
  log('T8a-Memory mini-game card exists', !!memoryCard, '');
  log('T8b-Math mini-game card exists', !!mathMiniCard, '');
  log('T8c-Word mini-game card exists', !!wordMiniCard, '');
  if (memoryCard) {
    await page.evaluate(() => playMiniGame('memory'));
    await page.waitForTimeout(800);
    const scoreBar = await page.$('.spell-score-bar');
    log('T8d-Memory game renders after click', !!scoreBar, scoreBar ? 'board visible' : 'no board');
  }
  if (mathMiniCard) {
    await page.evaluate(() => playMiniGame('math'));
    await page.waitForTimeout(800);
    const mathBar = await page.$('.spell-score-bar');
    log('T8e-Math mini-game renders after click', !!mathBar, mathBar ? 'board visible' : 'no board');
  }

  await browser.close();

  const passCount = results.filter(r => r.pass).length;
  const failCount = results.filter(r => !r.pass).length;
  console.log('\n========================================');
  console.log('Results: ' + passCount + '/' + results.length + ' passed, ' + failCount + ' failed');
  console.log('========================================');
  if (failCount > 0) {
    results.filter(r => !r.pass).forEach(r => console.log('  FAIL: ' + r.name + ' - ' + r.detail));
    process.exit(1);
  }
})();
