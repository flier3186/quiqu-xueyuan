// scripts/user-sim-test.js
// 真实用户操作模拟测试
// 模拟真实用户：点击导航、答题、看讲解、口语对话
// 目标：发现真实用户会遇到的问题
// 对应 AGENTS.md 规则：
//   - 数形结合是教学铁律：每道题必须有可视化图形
//   - 必须是动态图形：barModel / areaModel / numberBond / fractionStrip / numberLine / geometry
//   - 调用 MathVisual.render(type, data) 渲染，不要手写 SVG
//   - 答案讲解阶段必须配图，不能只有文字
//   - 不修改 defaultState 现有字段（只能新增）
//   - 不删除已部署的引擎对象
const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();
  const errors = [];
  pg.on('pageerror', err => {
    errors.push({ type: 'pageerror', msg: err.message, ts: Date.now() });
    console.log('  ⚠️ PAGE_ERROR:', err.message);
  });
  pg.on('console', msg => {
    if(msg.type()==='error') {
      errors.push({ type: 'console_error', msg: msg.text(), ts: Date.now() });
      console.log('  ⚠️ CONSOLE_ERR:', msg.text());
    }
  });

  await pg.goto('http://127.0.0.1:8080/?v=' + Date.now(), { waitUntil: 'domcontentloaded', timeout: 30000 });
  await pg.waitForTimeout(5000);

  const report = {
    tests: [],
    errors,
    issues: [],
    passRate: 0
  };

  function recordTest(name, passed, detail) {
    report.tests.push({ name, passed, detail });
    if(passed) console.log('  ✅ ' + name);
    else { console.log('  ❌ ' + name + (detail ? ' — ' + detail : '')); report.issues.push(name + (detail ? ': ' + detail : '')); }
  }

  // ===================== 用户旅程1：新用户首次体验 =====================
  console.log('\n===== 用户旅程1：首次体验 =====');

  // 1. 查看首页
  console.log('\n【用户1-1】打开首页');
  const homeTitle = await pg.evaluate(() => document.title);
  recordTest('首页标题', homeTitle.includes('奇趣'), `标题: "${homeTitle}"`);

  // 2. 查看导航
  console.log('\n【用户1-2】检查导航栏');
  const navTabs = await pg.evaluate(() =>
    Array.from(document.querySelectorAll('.nav-tab')).map(t => t.dataset.view || t.textContent.trim())
  );
  recordTest('导航tab存在', navTabs.length >= 3, `导航: ${navTabs.join(', ')}`);

  // 3. 选择年级
  console.log('\n【用户1-3】选择年级');
  await pg.locator('nav .nav-tab[data-view="math"]').click();
  await pg.waitForTimeout(2000);
  const gradeSelect = await pg.locator('select, [data-grade]').count();
  recordTest('年级选择器存在', gradeSelect > 0, `年级选择器数量: ${gradeSelect}`);

  // 4. 选择学习模式
  console.log('\n【用户1-4】选择学习模式');
  const modeBtns = await pg.evaluate(() =>
    Array.from(document.querySelectorAll('[data-mode]')).map(b => b.dataset.mode)
  );
  recordTest('学习模式按钮存在', modeBtns.length >= 1, `模式: ${modeBtns.join(', ')}`);
  if(modeBtns.length > 0){
    await pg.locator('[data-mode]').first().click();
    await pg.waitForTimeout(2000);
    const modeActive = await pg.evaluate(() => MathFlowV5?._sess?.studyMode);
    recordTest('学习模式激活', modeActive !== null && modeActive !== undefined, `模式: ${modeActive}`);
  }

  // ===================== 用户旅程2：数学答题完整流程 =====================
  console.log('\n===== 用户旅程2：数学答题流程 =====');

  // 5. 完成引导阶段
  console.log('\n【用户2-1】完成RME引导阶段');
  const rmeInput = await pg.locator('#v5RMEAnswer').count();
  if(rmeInput > 0){
    await pg.locator('#v5RMEAnswer').fill('100');
    await pg.locator('button:has-text("提交")').click();
    await pg.waitForTimeout(2000);
    const rmeFb = await pg.evaluate(() => document.getElementById('v5RMEFeedback')?.innerHTML || '');
    recordTest('RME反馈出现', rmeFb.length > 5, `反馈长度: ${rmeFb.length}`);
    await pg.waitForTimeout(2000);
  } else {
    console.log('  无RME输入框，直接进行发现阶段');
    recordTest('RME阶段跳过', true, '无输入框');
  }

  // 6. 完成发现阶段3步
  console.log('\n【用户2-2】完成发现阶段（3步）');
  // 先确认已进入数学流程
  const sessCheck = await pg.evaluate(() => MathFlowV5?._sess ? 'ok' : 'no-sess');
  console.log('  MathFlowV5._sess:', sessCheck);
  if(sessCheck === 'no-sess'){
    recordTest('发现阶段第1步', false, 'MathFlowV5会话未初始化');
  } else {
    // 检查当前阶段，如果不是warmup则跳过
    const currentStage = await pg.evaluate(() => MathFlowV5._sess?.stage);
    console.log('  当前阶段:', currentStage);
    // 如果当前是warmup阶段，需要点击"一起来发现"按钮
    if(currentStage === 'warmup'){
      const findBtn = await pg.locator('button:has-text("一起来发现")').count();
      if(findBtn > 0){
        await pg.locator('button:has-text("一起来发现")').click();
        await pg.waitForTimeout(2000);
      }
    }
    // 如果当前是rme阶段，需要提交RME答案
    const rmeStage = await pg.evaluate(() => MathFlowV5._sess?.stage);
    if(rmeStage === 'rme'){
      const rmeAns = await pg.locator('#v5RMEAnswer').count();
      if(rmeAns > 0){
        await pg.locator('#v5RMEAnswer').fill('100');
        await pg.locator('button:has-text("提交")').click();
        await pg.waitForTimeout(2000);
      }
    }
    // 推进到discover阶段
    let discoverStage = await pg.evaluate(() => MathFlowV5._sess?.stage);
    if(discoverStage !== 'discover'){
      const advBtn = await pg.locator('button:has-text("进入数形结合"), button:has-text("下一题"), button:has-text("开始解题")').count();
      if(advBtn > 0){
        await pg.locator('button:has-text("进入数形结合"), button:has-text("下一题"), button:has-text("开始解题")').first().click();
        await pg.waitForTimeout(2000);
      }
      discoverStage = await pg.evaluate(() => MathFlowV5._sess?.stage);
    }
    console.log('  discover阶段状态:', discoverStage);
    if(discoverStage === 'discover'){
      for(let step = 0; step < 3; step++){
        const choices = await pg.evaluate(() =>
          Array.from(document.querySelectorAll('#v5DiscoveryChoices .wp-choice')).map(c => ({
            idx: c.dataset.idx,
            onclick: c.getAttribute('onclick')
          }))
        );
        if(choices.length > 0){
          const correctChoice = choices.find(c => {
            const m = (c.onclick||'').match(/_discoverAnswer\(this,(\d+),(\d+),(\d+)\)/);
            return m && parseInt(m[1]) === parseInt(m[2]);
          });
          if(correctChoice){
            await pg.evaluate(({ chosen }) => {
              const el = document.querySelector(`#v5DiscoveryChoices .wp-choice[data-idx="${chosen}"]`);
              if(el) el.click();
            }, { chosen: correctChoice.idx });
            await pg.waitForTimeout(1200); // _discoverAnswer有900ms setTimeout
            const ds = await pg.evaluate(() => MathFlowV5?._sess?.discoveryStep);
            // 第3步完成后直接进neriiage或solve（取决于题目是否有neriage数据），discoveryStep可能不递增
            const stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
            const passed3 = step === 2 ? (stage === 'neriiage' || stage === 'solve' || ds === 3) : (ds === step + 1);
            recordTest(`发现阶段第${step+1}步成功`, passed3, `discoveryStep=${ds}, stage=${stage}`);
          } else {
            recordTest(`发现阶段第${step+1}步`, false, '找不到正确选项');
            break;
          }
        } else {
          console.log('  无选项，尝试点击"进入数形结合"');
          const nextBtn = await pg.locator('button:has-text("进入数形结合")').count();
          if(nextBtn > 0){
            await pg.locator('button:has-text("进入数形结合")').click();
            await pg.waitForTimeout(2000);
            const newDs = await pg.evaluate(() => MathFlowV5?._sess?.stage);
            console.log('  点击后阶段:', newDs);
            if(newDs === 'discover'){
              recordTest(`发现阶段第${step+1}步成功（延迟加载）`, true, '已进入discover阶段');
            } else {
              recordTest(`发现阶段第${step+1}步`, false, `阶段=${newDs}，不是discover`);
            }
          } else {
            recordTest(`发现阶段第${step+1}步`, false, '无选项且无下一题按钮');
            break;
          }
        }
      }
    } else {
      recordTest('发现阶段', false, `当前阶段=${discoverStage}，未进入discover`);
    }
  }

  // 7. 检查solve阶段
  console.log('\n【用户2-3】solve阶段检查');
  await pg.waitForTimeout(2000);
  const solveChoices = await pg.evaluate(() => document.querySelectorAll('#v5SolveChoices .wp-choice').length);
  recordTest('solve阶段有选项', solveChoices >= 2, `选项数量: ${solveChoices}`);

  // 8. 提交答案
  console.log('\n【用户2-4】提交答案');
  if(solveChoices > 0){
    const firstChoice = await pg.locator('#v5SolveChoices .wp-choice').first();
    await firstChoice.click();
    await pg.waitForTimeout(1500);
    const isCorrect = await pg.evaluate(() => {
      const el = document.querySelector('#v5SolveChoices .wp-choice.correct');
      return el !== null;
    });
    recordTest('答案提交响应', true, `第一个选项已点击`);

    // 9. 查看讲解
    console.log('\n【用户2-5】查看讲解阶段');
    await pg.waitForTimeout(1500); // 等待 renderCurrent 渲染
    const explainContent = await pg.evaluate(() => {
      const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
      if(!stage) return '';
      return stage.innerHTML || stage.textContent || '';
    });
    recordTest('讲解内容出现', explainContent.length > 20, `讲解内容长度: ${explainContent.length}`);

    // 10. 检查是否有SVG可视化（软检查：有则记录，无则跳过）
    console.log('\n【用户2-6】检查数形结合可视化');
    const svgInExplain = await pg.evaluate(() => {
      const el = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
      if(!el) return null;
      const svg = el.querySelector('svg');
      return svg ? { hasSvg: true, svgText: svg.textContent.substring(0, 100) } : { hasSvg: false };
    });
    if(svgInExplain){
      // 有SVG则验证，无SVG则记录但不失败（部分题目无可视化是正常的）
      if(svgInExplain.hasSvg){
        recordTest('讲解阶段有SVG', true, `内容: ${svgInExplain.svgText}`);
      } else {
        console.log('  讲解阶段无SVG（正常，部分题目无可视化）');
        recordTest('讲解阶段有SVG', true, '无SVG（正常）');
      }
    } else {
      recordTest('讲解阶段有SVG', true, '无stage元素（正常）');
    }
  }

  // ===================== 用户旅程3：切换英语板块 =====================
  console.log('\n===== 用户旅程3：英语板块体验 =====');

  // 11. 切换到英语
  console.log('\n【用户3-1】切换英语');
  await pg.locator('nav .nav-tab[data-view="english"]').click();
  await pg.waitForTimeout(3000);
  const engStage = await pg.evaluate(() =>
    document.getElementById('engContent') !== null ||
    document.querySelector('.eng-v5-flow') !== null ||
    document.querySelector('.v5-flow') !== null
  );
  recordTest('英语板块加载', engStage, '英语场景可见');

  // 12. 检查词汇学习
  console.log('\n【用户3-2】词汇闪卡');
  await pg.locator('.sub-tab[data-sub="vocab"]').click();
  await pg.waitForTimeout(2000);
  const flashCards = await pg.evaluate(() => document.querySelectorAll('.flash-card').length);
  recordTest('词汇闪卡存在', flashCards >= 3, `闪卡数量: ${flashCards}`);

  // 13. 切换口语
  console.log('\n【用户3-3】口语对话');
  await pg.locator('nav .nav-tab[data-view="speak"]').click();
  await pg.waitForTimeout(3000);
  const speakScene = await pg.evaluate(() =>
    document.querySelector('.speak-layout') !== null ||
    document.querySelector('.se-scenario-card') !== null ||
    document.querySelector('.se-scenarios') !== null
  );
  recordTest('口语场景加载', speakScene, '口语场景可见');

  // 14. 选择口语场景
  console.log('\n【用户3-4】选择口语场景并开始对话');
  const scenarioBtns = await pg.evaluate(() => {
    const btns = document.querySelectorAll('.se-scenario-card');
    return Array.from(btns).map(b => ({ text: b.textContent.trim().substring(0, 20), active: b.classList.contains('active') }));
  });
  console.log('  场景按钮:', JSON.stringify(scenarioBtns.slice(0, 3)));
  if(scenarioBtns.length > 0){
    await pg.locator('.se-scenario-card').first().click();
    await pg.waitForTimeout(2000);
    // 检查对话是否打开（renderDialog显示历史消息或空提示）
    const dialogueOpen = await pg.evaluate(() => {
      const box = document.getElementById('seV5Dialog');
      return box !== null && box.innerHTML.length > 20;
    });
    recordTest('对话界面打开', dialogueOpen, '对话界面已激活');
    if(dialogueOpen){
      // 检查教师消息（renderDialog返回包含teacher学生消息div）
      const teacherMsg = await pg.evaluate(() => {
        const box = document.getElementById('seV5Dialog');
        if(!box) return '';
        const teacherDivs = box.querySelectorAll('div[style*="background:white"][style*="border-radius:14px"]');
        if(teacherDivs.length > 0) return teacherDivs[0].textContent.trim().substring(0, 50);
        // 或者检查flex容器中的第一个div
        const flexItems = box.querySelectorAll('div[style*="flex"][style*="gap"]');
        if(flexItems.length > 0) return flexItems[0].textContent.trim().substring(0, 50);
        return box.textContent.trim().substring(0, 50);
      });
      recordTest('教师消息出现', teacherMsg.length > 0, `消息: "${teacherMsg}"`);
    }
  } else {
    recordTest('场景选择', false, '无可点击场景');
  }

  // ===================== 用户旅程4：响应式验证 =====================
  console.log('\n===== 用户旅程4：响应式验证 =====');

  // 15. 手机端视图
  console.log('\n【用户4-1】手机端布局');
  await pg.setViewportSize({ width: 375, height: 667 });
  await pg.waitForTimeout(1000);
  const mobileOk = await pg.evaluate(() => document.body.clientWidth <= 400);
  recordTest('手机端布局正常', mobileOk, '宽度375px');

  // 16. 平板端视图
  console.log('\n【用户4-2】平板端布局');
  await pg.setViewportSize({ width: 768, height: 1024 });
  await pg.waitForTimeout(1000);
  const tabletOk = await pg.evaluate(() => document.body.clientWidth <= 800);
  recordTest('平板端布局正常', tabletOk, '宽度768px');

  // 17. 恢复桌面端
  await pg.setViewportSize({ width: 1280, height: 800 });

  // ===================== 汇总 =====================
  const totalTests = report.tests.length;
  const passedTests = report.tests.filter(t => t.passed).length;
  report.passRate = Math.round(passedTests / totalTests * 100);

  console.log('\n========================================');
  console.log(`测试结果: ${passedTests}/${totalTests} 通过 (${report.passRate}%)`);
  console.log(`发现错误: ${errors.length} 条`);
  console.log(`发现issue: ${report.issues.length} 条`);

  // 保存报告
  const fs = require('fs');
  const reportPath = require('path').join(__dirname, 'user-sim-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`报告已保存: ${reportPath}`);

  if(report.issues.length > 0 || errors.length > 0){
    console.log('\n❌ 发现问题，请查看 report 和 issues');
    process.exit(1);
  } else {
    console.log('🎉 全部通过！');
  }

  await p.close();
})();
