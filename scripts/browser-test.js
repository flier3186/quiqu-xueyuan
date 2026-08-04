const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('console', msg => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
  page.on('pageerror', err => consoleErrors.push(err.message));

  const BASE_URL = 'http://127.0.0.1:8080/';
  let pass = 0, fail = 0;
  function log(tag, ok, msg) {
    if (ok) { console.log(`  PASS  ${tag}: ${msg}`); pass++; }
    else { console.log(`  FAIL  ${tag}: ${msg}`); fail++; }
  }

  // ====== Test 1: Page Load ======
  console.log('=== Test 1: Page Load ===');
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    const title = await page.title();
    const h1 = await page.textContent('h1').catch(() => '');
    log('page_load', !!title && h1.length > 0, `title="${title}" h1="${h1.slice(0,40)}"`);
  } catch (e) { log('page_load', false, e.message); }

  // ====== Test 2: Math Module ======
  console.log('=== Test 2: Math Module ===');
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.locator('nav .nav-tab[data-view="math"]').click();
    await page.waitForTimeout(2000);
    const hasContent = await page.locator('#contentArea').count() > 0;
    const hasMathStage = await page.locator('.math-stage-host, [id="mathStage"]').count() > 0;
    const hasSVGCSS = await page.locator('svg').count();
    log('math_module', hasContent && hasMathStage, `contentArea=${hasContent} mathStage=${hasMathStage} svgs=${hasSVGCSS}`);
  } catch (e) { log('math_module', false, e.message); }

  // ====== Test 3: English Module ======
  console.log('=== Test 3: English Module ===');
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.locator('nav .nav-tab[data-view="english"]').click();
    await page.waitForTimeout(2000);
    const engContent = await page.locator('#contentArea').innerHTML();
    const hasWords = engContent.includes('单词') || engContent.includes('ruler') || engContent.length > 500;
    log('english_module', hasWords, `contentLen=${engContent.length}`);
  } catch (e) { log('english_module', false, e.message); }

  // ====== Test 4: Speak Module ======
  console.log('=== Test 4: Speak Module ===');
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.locator('nav .nav-tab[data-view="speak"]').click();
    await page.waitForTimeout(2000);
    const speakContent = await page.locator('#contentArea').innerHTML();
    const hasSpeak = speakContent.includes('speak') || speakContent.includes('口语') || speakContent.length > 300;
    log('speak_module', hasSpeak, `contentLen=${speakContent.length}`);
  } catch (e) { log('speak_module', false, e.message); }

  // ====== Test 5: Pet Module ======
  console.log('=== Test 5: Pet Module ===');
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.locator('nav .nav-tab[data-view="pet"]').click();
    await page.waitForTimeout(2000);
    const petContent = await page.locator('#contentArea').innerHTML();
    const hasPet = petContent.includes('pet') || petContent.includes('宠物') || petContent.includes('pet-stage');
    log('pet_module', hasPet, `contentLen=${petContent.length}`);
  } catch (e) { log('pet_module', false, e.message); }

  // ====== Test 6: Game Module ======
  console.log('=== Test 6: Game Module ===');
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.locator('nav .nav-tab[data-view="game"]').click();
    await page.waitForTimeout(1500);
    const gameContent = await page.locator('#contentArea').innerHTML();
    const hasGame = gameContent.length > 200;
    log('game_module', hasGame, `contentLen=${gameContent.length}`);
  } catch (e) { log('game_module', false, e.message); }

  // ====== Test 7: Parent Panel Full Flow ======
  console.log('=== Test 7: Parent Panel Full Flow ===');
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.locator('#parentBtn').click();
    await page.waitForTimeout(500);
    await page.locator('#parentPwd').fill('1234');
    await page.locator('button', { hasText: '进入' }).click();
    await page.waitForTimeout(2500);

    const modalVisible = await page.locator('#parentModal').isVisible();
    const tabs = await page.locator('.parent-tab').count();
    log('parent_panel_open', modalVisible && tabs === 6, `visible=${modalVisible} tabs=${tabs}`);

    if (modalVisible && tabs === 6) {
      const overviewVisible = await page.locator('.parent-section[data-psec="overview"]').isVisible();
      log('parent_tab_overview', overviewVisible, `visible=${overviewVisible}`);

      await page.locator('.parent-tab[data-pt="weak"]').click();
      await page.waitForTimeout(500);
      const weakVisible = await page.locator('.parent-section[data-psec="weak"]').isVisible();
      const overviewHidden = !(await page.locator('.parent-section[data-psec="overview"]').isVisible());
      log('parent_tab_weak', weakVisible && overviewHidden, `weak=${weakVisible} overviewHidden=${overviewHidden}`);

      await page.locator('.parent-tab[data-pt="week"]').click();
      await page.waitForTimeout(500);
      const weekVisible = await page.locator('.parent-section[data-psec="week"]').isVisible();
      const weakHidden = !(await page.locator('.parent-section[data-psec="weak"]').isVisible());
      log('parent_tab_week', weekVisible && weakHidden, `week=${weekVisible} weakHidden=${weakHidden}`);

      await page.locator('.parent-tab[data-pt="ai"]').click();
      await page.waitForTimeout(500);
      const aiVisible = await page.locator('.parent-section[data-psec="ai"]').isVisible();
      const weekHidden2 = !(await page.locator('.parent-section[data-psec="week"]').isVisible());
      log('parent_tab_ai', aiVisible && weekHidden2, `ai=${aiVisible} weekHidden=${weekHidden2}`);

      await page.locator('.parent-tab[data-pt="errors"]').click();
      await page.waitForTimeout(500);
      const errorsVisible = await page.locator('.parent-section[data-psec="errors"]').isVisible();
      const aiHidden = !(await page.locator('.parent-section[data-psec="ai"]').isVisible());
      log('parent_tab_errors', errorsVisible && aiHidden, `errors=${errorsVisible} aiHidden=${aiHidden}`);

      await page.locator('.parent-tab[data-pt="profiles"]').click();
      await page.waitForTimeout(500);
      const profilesVisible = await page.locator('.parent-section[data-psec="profiles"]').isVisible();
      const errorsHidden = !(await page.locator('.parent-section[data-psec="errors"]').isVisible());
      log('parent_tab_profiles', profilesVisible && errorsHidden, `profiles=${profilesVisible} errorsHidden=${errorsHidden}`);

      await page.locator('#parentClose').click();
      await page.waitForTimeout(500);
      log('parent_panel_close', !(await page.locator('#parentModal').isVisible()), 'panel closed');
    }
  } catch (e) { log('parent_panel', false, e.message); }

  // ====== Test 8: Math Visualization ======
  console.log('=== Test 8: Math Visualization ===');
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.locator('nav .nav-tab[data-view="math"]').click();
    await page.waitForTimeout(3000);
    const svgCount = await page.locator('svg').count();
    const hasMathContent = svgCount > 5;
    log('math_visualization', hasMathContent, `svgs=${svgCount}`);
  } catch (e) { log('math_visualization', false, e.message); }

  // ====== Test 9: Dashboard Content ======
  console.log('=== Test 9: Dashboard Content ===');
  try {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const body = await page.textContent('body');
    const hasLearning = body.includes('学习') && body.includes('分钟');
    const hasStreak = body.includes('天') || body.includes('连续');
    log('dashboard_content', hasLearning && hasStreak, `hasLearning=${hasLearning} hasStreak=${hasStreak}`);
  } catch (e) { log('dashboard_content', false, e.message); }

  // ====== Test 10: Mobile Viewport ======
  console.log('=== Test 10: Mobile Viewport ===');
  try {
    const mobileCtx = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const mobilePage = await mobileCtx.newPage();
    const mobileErrors = [];
    mobilePage.on('console', msg => { if (msg.type() === 'error') mobileErrors.push(msg.text()); });
    mobilePage.on('pageerror', err => mobileErrors.push(err.message));
    await mobilePage.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 30000 });
    await mobilePage.waitForTimeout(2000);
    const body = await mobilePage.textContent('body');
    log('mobile_viewport', mobileErrors.length === 0 && body.length > 1000, `bodyLen=${body.length} jsErrors=${mobileErrors.length}`);
    await mobilePage.close();
  } catch (e) { log('mobile_viewport', false, e.message); }

  // ====== Test 11: Console Errors ======
  console.log('=== Test 11: Console Errors ===');
  log('console_clean', consoleErrors.length === 0, `errors=${consoleErrors.length} warnings=0`);
  if (consoleErrors.length > 0) {
    consoleErrors.slice(0, 5).forEach(e => console.log('    -', e.slice(0, 120)));
  }

  await browser.close();

  console.log('\n========================================');
  console.log(`  PASS: ${pass}  FAIL: ${fail}`);
  console.log(`  JS Console Errors: ${consoleErrors.length}`);
  process.exit(fail > 0 ? 1 : 0);
})();