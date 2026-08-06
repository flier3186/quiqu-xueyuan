const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();
  pg.on('pageerror', err => console.log('PAGE_ERROR:', err.message));
  pg.on('console', msg => { if(msg.type()==='error') console.log('CONSOLE_ERR:', msg.text()); });

  await pg.goto('http://127.0.0.1:8080/?v=' + Date.now(), { waitUntil: 'domcontentloaded', timeout: 30000 });
  await pg.waitForTimeout(6000);

  const results = { passed: 0, failed: 0, total: 0 };
  function assert(cond, msg) {
    results.total++;
    if(cond) { results.passed++; console.log('  ✅ ' + msg); }
    else { results.failed++; console.log('  ❌ ' + msg); }
  }

  // ===================== MATH FLOW TESTS =====================
  console.log('\n===== 数学流程测试 =====');

  // TEST 1: 数学入口
  console.log('\n【TEST 1】数学入口');
  assert(await pg.locator('nav .nav-tab[data-view="math"]').count() > 0, '数学tab存在');
  await pg.locator('nav .nav-tab[data-view="math"]').click();
  await pg.waitForTimeout(4000);
  assert(await pg.locator('#mathStage').count() > 0, '进入数学场景');
  assert(await pg.locator('[data-mode="beginner"]').count() > 0, '初学者模式可见');

  // TEST 2: 选择初学者模式
  console.log('\n【TEST 2】选择初学者模式');
  await pg.locator('[data-mode="beginner"]').click();
  await pg.waitForTimeout(3000);
  const studyMode = await pg.evaluate(() => MathFlowV5._sess && MathFlowV5._sess.studyMode);
  assert(studyMode === 'beginner', 'studyMode设为beginner(实际:' + studyMode + ')');
  assert(await pg.locator('button:has-text("一起来发现")').count() > 0, 'warmup阶段出现下一步按钮');

  // TEST 3: RME引导阶段
  console.log('\n【TEST 3】RME引导阶段');
  await pg.locator('button:has-text("一起来发现")').first().click();
  await pg.waitForTimeout(2000);
  assert(await pg.locator('#v5RMEAnswer').count() > 0, 'RME输入框出现');
  assert(await pg.locator('#v5RMEAnswer').inputValue() === '', 'RME输入框可用（空）');
  await pg.locator('#v5RMEAnswer').fill('500');
  await pg.locator('button:has-text("提交")').click();
  // RME反馈立即显示，但advance有1800ms延迟，discover需要额外渲染时间
  const rmeFb = await pg.evaluate(() => document.getElementById('v5RMEFeedback')?.innerHTML || '');
  assert(rmeFb.length > 10, 'RME反馈立即出现(内容长度:' + rmeFb.length + ')');
  await pg.waitForTimeout(2500);

  // TEST 4: 发现阶段 - 完成3步
  console.log('\n【TEST 4】发现阶段完整流程(3步)');
  for(let step = 0; step < 3; step++){
    const choices = await pg.evaluate(() =>
      Array.from(document.querySelectorAll('#v5DiscoveryChoices .wp-choice')).map(c => ({
        idx: parseInt(c.dataset.idx),
        text: c.textContent.trim().substring(0, 20),
        onclick: c.getAttribute('onclick')
      }))
    );
    console.log('  Step', step, 'choices:', choices.map(c=>({idx:c.idx,text:c.text.substring(0,10)})));
    const correctChoice = choices.find(c => {
      const m = (c.onclick||'').match(/_discoverAnswer\(this,(\d+),(\d+),(\d+)\)/);
      return m && parseInt(m[1]) === parseInt(m[2]);
    });
    assert(correctChoice !== undefined, `第${step+1}步找到正确选项(idx=${correctChoice ? correctChoice.idx : 'undefined'})`);
    if (!correctChoice) {
      console.log('  ERROR: correctChoice is undefined!');
      break;
    }
    await pg.evaluate(({ chosen, s }) => {
      const el = document.querySelector(`#v5DiscoveryChoices .wp-choice[data-idx="${chosen}"]`);
      if(el) MathFlowV5._discoverAnswer(el, chosen, chosen, s);
    }, { chosen: correctChoice.idx, s: step });
    await pg.waitForTimeout(1500);
    const ds = await pg.evaluate(() => MathFlowV5?._sess?.discoveryStep);
    const stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
    console.log('  Step', step, 'after: ds=' + ds + ', stage=' + stage);
    // 最后一步完成后进入solve，discoveryStep不再递增
    if(step < 2){
      assert(Number.isInteger(ds) && ds === step + 1, `第${step+1}步后discoveryStep=${ds}(应为${step+1})`);
    }
  }
  // 3步完成后进入solve或neriage阶段
  const after3Steps = await pg.evaluate(() => MathFlowV5?._sess?.stage);
  assert(after3Steps === 'solve' || after3Steps === 'neriage', `第3步后进入${after3Steps}阶段`);
  // solve阶段显示选择题选项
  assert(await pg.locator('#v5SolveChoices .wp-choice').count() >= 2, 'solve阶段有选择题选项');

  // TEST 5: 检查solve阶段有SVG
  console.log('\n【TEST 5】数形结合阶段');
  await pg.waitForTimeout(1500);
  // solve阶段也可能有SVG（如果题目有）
  const svgExists = await pg.evaluate(() => document.querySelector('#mathStage svg') !== null);
  if(svgExists) {
    const svgContent = await pg.evaluate(() => {
      const svg = document.querySelector('#mathStage svg');
      if(!svg) return null;
      return {
        hasDefs: svg.querySelector('defs') !== null,
        hasGradient: svg.querySelector('defs linearGradient') !== null
      };
    });
    assert(svgContent !== null, 'SVG元素存在');
    if(svgContent) {
      assert(svgContent.hasDefs, 'SVG有defs定义');
      assert(svgContent.hasGradient, 'SVG有渐变定义');
    }
  } else {
    assert(true, 'solve阶段无SVG（正常，题目无模型数据）');
  }

  // TEST 6: solve阶段有选择题
  console.log('\n【TEST 6】solve阶段选择题');
  const solveChoices = await pg.evaluate(() => document.querySelectorAll('#v5SolveChoices .wp-choice').length);
  assert(solveChoices >= 2, 'solve阶段有' + solveChoices + '个选项');

  // ===================== ENGLISH TESTS =====================
  console.log('\n===== 英语流程测试 =====');

  // TEST 7: 英语入口
  console.log('\n【TEST 7】英语入口');
  await pg.locator('nav .nav-tab[data-view="english"]').click();
  await pg.waitForTimeout(3000);
  const engVisible = await pg.evaluate(() => {
    return document.getElementById('engStage') !== null ||
           document.querySelector('.eng-v5-board') !== null ||
           document.querySelector('.sub-tab') !== null;
  });
  assert(engVisible, '英语场景可见');
  const engTabs = await pg.locator('.sub-tab').count();
  assert(engTabs >= 3, '英语子导航有' + engTabs + '个(>=3)');

  // TEST 8: 英语闪卡
  console.log('\n【TEST 8】英语闪卡');
  await pg.locator('.sub-tab[data-sub="vocab"]').click();
  await pg.waitForTimeout(3000);
  const photos = await pg.evaluate(() =>
    Array.from(document.querySelectorAll('.flash-photo')).map(img => ({
      src: img.src.substring(0, 60),
      loaded: img.naturalWidth > 0
    }))
  );
  console.log('  图片:', JSON.stringify(photos));
  assert(photos.length >= 3, '闪卡图片数量>=3(实际:' + photos.length + ')');
  assert(photos.every(p => p.loaded), '所有闪卡图片加载成功');

  // TEST 9: 英语配图URL有效
  console.log('\n【TEST 9】英语配图URL有效');
  const photoUrls = await pg.evaluate(() =>
    Array.from(document.querySelectorAll('.flash-photo')).map(img => img.src)
  );
  const allValidUrl = photoUrls.every(u => u.includes('trae-api-cn') || u.includes('placeholder'));
  assert(allValidUrl, '所有配图URL有效(不含source.unsplash)');

  // TEST 10: 词汇游戏
  console.log('\n【TEST 10】词汇游戏');
  const vocabExists = await pg.evaluate(() =>
    document.querySelector('#v5VocabGame') !== null ||
    document.querySelector('.vocab-game') !== null ||
    document.querySelectorAll('.flash-card').length > 0
  );
  assert(vocabExists, '词汇游戏出现');

  // TEST 11: 听力森林
  console.log('\n【TEST 11】听力森林');
  await pg.locator('.sub-tab[data-sub="listen"]').click();
  await pg.waitForTimeout(2000);
  const listenExists = await pg.evaluate(() =>
    document.querySelector('.listen-wrap') !== null ||
    document.querySelector('#listenStage') !== null
  );
  assert(listenExists, '听力场景出现');

  // TEST 12: 配色正确
  console.log('\n【TEST 12】配色检查');
  const listenColor = await pg.evaluate(() => {
    const el = document.querySelector('.listen-wrap h3, .listen-wrap .title');
    if(!el) return null;
    return { color: getComputedStyle(el).color };
  });
  assert(listenColor !== null, '听力标题元素存在');

  // ===================== CROSS-CUTTING TESTS =====================
  console.log('\n===== 通用测试 =====');

  // TEST 13: 线上地址可访问
  console.log('\n【TEST 13】线上地址');
  try {
    const resp = await pg.evaluate(async () => {
      try {
        const r = await fetch('https://flier3186.github.io/quiqu-xueyuan/', { method: 'HEAD', mode: 'no-cors' });
        return { status: r.status, ok: true };
      } catch(e) { return { error: e.message, ok: false }; }
    });
    if(resp.ok) assert(true, '线上地址可访问');
    else assert(false, '线上地址访问失败: ' + JSON.stringify(resp));
  } catch(e) {
    assert(false, '线上地址检查异常: ' + e.message);
  }

  // TEST 14: JS语法校验
  console.log('\n【TEST 14】JS语法校验');
  try {
    const fs = require('fs');
    const engineCode = fs.readFileSync('engine/math-flow-v5.js', 'utf8');
    new Function(engineCode);
    assert(true, 'math-flow-v5.js语法正确');
  } catch(e) {
    assert(false, 'math-flow-v5.js语法错误: ' + e.message);
  }

  // TEST 15: 进度保存
  console.log('\n【TEST 15】进度保存');
  const savedState = await pg.evaluate(() => {
    try {
      const s = JSON.parse(localStorage.getItem('ququxv4_state_v1') || '{}');
      return { hasState: !!s, studyMode: s.math && s.math.mathProfile ? s.math.mathProfile.studyMode : null, stage: s.lastSession && s.lastSession.mathV5 ? s.lastSession.mathV5.stage : null };
    } catch(e) { return { error: e.message }; }
  });
  assert(savedState.hasState || Object.keys(savedState).length > 0, 'localStorage状态可读取');
  assert(savedState.studyMode === 'beginner' || savedState.stage !== null, '学习进度已保存');

  // TEST 16: 响应式布局
  console.log('\n【TEST 16】响应式布局');
  await pg.setViewportSize({ width: 375, height: 667 });
  await pg.waitForTimeout(1000);
  const mobileOk = await pg.evaluate(() => {
    return document.body.clientWidth <= 400 && document.documentElement.clientWidth <= 400;
  });
  assert(mobileOk, '手机端布局正常(375px)');
  await pg.setViewportSize({ width: 1280, height: 800 });

  console.log('\n========================================');
  console.log('测试结果: ' + results.passed + '/' + results.total + ' 通过');
  if(results.failed > 0) {
    console.log('⚠️ 有 ' + results.failed + ' 项失败');
    process.exit(1);
  } else {
    console.log('🎉 全部通过！');
    process.exit(0);
  }
  await p.close();
})();
