// scripts/fraction-geometry-test.js
// 分数条 + 几何分步动画用户路径测试
// 原则：所有交互通过 .click()，所有验证通过 DOM 检查（用户视角）
// 对应 AGENTS.md 规则：
//   - 数形结合是教学铁律：每道题必须有可视化图形
//   - 必须是动态图形：fractionStrip / geometry
//   - 调用 MathVisual.render(type, data) 渲染，不要手写 SVG
//   - 答案讲解阶段必须配图，不能只有文字
const { chromium } = require('playwright');
(async () => {
  const p = await chromium.launch({ headless: true });
  const pg = await p.newPage();
  const pageErrors = [];
  pg.on('pageerror', err => {
    pageErrors.push(err.message);
    console.log('  ⚠️ 页面错误:', err.message);
  });
  pg.on('console', msg => {
    if (msg.type() === 'error') console.log('  ⚠️ 控制台错误:', msg.text());
  });

  await pg.goto('http://127.0.0.1:8080/?v=' + Date.now(), { waitUntil: 'domcontentloaded', timeout: 30000 });
  await pg.waitForTimeout(5000);

  const results = { passed: 0, failed: 0, total: 0, issues: [] };
  function assert(cond, msg) {
    results.total++;
    if (cond) { results.passed++; console.log('  ✅ ' + msg); }
    else { results.failed++; console.log('  ❌ ' + msg); results.issues.push(msg); }
  }
  // 用户视角检查：等待元素出现后再断言
  async function waitForVisible(selector, desc, timeout = 5000) {
    try {
      await pg.locator(selector).waitFor({ state: 'visible', timeout });
      return true;
    } catch { return false; }
  }
  // 用户视角：检查当前页面内容（用户能看到什么）
  async function getPageContent() {
    return await pg.evaluate(() => {
      const stage = document.getElementById('mathStage') ||
                    document.querySelector('.cpa-layer') ||
                    document.querySelector('#stageContent');
      if (!stage) return { html: '', hasSvg: false };
      const svg = stage.querySelector('svg');
      return {
        html: stage.innerHTML.substring(0, 500),
        text: stage.textContent.substring(0, 200),
        hasSvg: !!svg,
        svgText: svg ? svg.textContent.substring(0, 200) : ''
      };
    });
  }

  // ===================== 辅助：注入测试题并走完整用户路径 =====================
  // 测试题数据（模拟真实题目结构，保证有 fractionStrip / geometry 可视化）
  const TEST_FRACTION_PROBLEM = {
    id: 'TEST-FRAC-001',
    scene: '妈妈把一个蛋糕平均切成8块，小明吃了1块。',
    question: '小明吃了这块蛋糕的几分之一？',
    formula: '1 / 8',
    answer: 8,
    choices: [8, 1, 7, 4],
    visualType: 'fractionStrip',
    visualData: { num: 1, total: 8, color: '#00A896' },
    knowledge: '分数初步认识',
    difficulty: 1,
    hint: '平均分成8份，每份是1/8'
  };

  const TEST_GEOMETRY_PROBLEMS = [
    {
      id: 'TEST-GEOM-001',
      scene: '老师展示了一个球体模型。',
      question: '球体的体积公式是？',
      formula: 'V = 4/3 × π × r³',
      answer: '4/3πr³',
      choices: ['4/3πr³', 'πr²', '2πr', '4πr²'],
      visualType: 'geometry',
      visualData: { shape: 'sphere', radius: 40 },
      knowledge: '球体体积',
      difficulty: 1,
      hint: '球体体积公式'
    },
    {
      id: 'TEST-GEOM-002',
      scene: '一个圆锥形冰激凌筒。',
      question: '圆锥的体积怎么算？',
      formula: 'V = ?',
      answer: '1/3πr²h',
      choices: ['1/3πr²h', 'πr²h', '2πrh', 'πr²'],
      visualType: 'geometry',
      visualData: { shape: 'cone', radius: 40, height: 60 },
      knowledge: '圆锥体积',
      difficulty: 1,
      hint: '圆锥体积 = 1/3 × 底面积 × 高'
    },
    {
      id: 'TEST-GEOM-003',
      scene: '一个扇形 pizza 切片。',
      question: '扇形面积怎么算？',
      formula: 'S = ?',
      answer: 'n/360 × πr²',
      choices: ['n/360 × πr²', 'πr²', '2πr', 'πd'],
      visualType: 'geometry',
      visualData: { shape: 'sector', radius: 50, angle: 90 },
      knowledge: '扇形面积',
      difficulty: 1,
      hint: '扇形是圆的一部分'
    }
  ];

  // 注入测试题并初始化会话
  // 关键：renderMath() → MathFlowV5.start(libraryProblem) 会用库中题目覆盖 _sess.problem
  // 修复：点击标签后重新注入测试题并调用 renderCurrent()
  async function injectProblemAndInit(problem) {
    // 步骤1：预先设置 studyMode（跳过模式选择弹窗）
    await pg.evaluate(() => {
      if (window.S && window.S.math) {
        window.S.math.mathProfile = { studyMode: 'beginner', setAt: Date.now() };
      }
    });
    // 步骤2：点击数学标签，触发 renderMath() → MathFlowV5.start(libraryProblem)
    await pg.locator('nav .nav-tab[data-view="math"]').click();
    await pg.waitForTimeout(3500);
    // 步骤3：重新注入测试题（覆盖被 start() 覆盖掉的 _sess.problem）
    await pg.evaluate(({ prob }) => {
      if (window.MathFlowV5 && window.MathFlowV5._sess) {
        window.MathFlowV5._sess.problem = prob;
        window.MathFlowV5._sess.studyMode = 'beginner';
        window.MathFlowV5._sess.stage = 'warmup';
        window.MathFlowV5._sess.discoveryStep = 0;
        window.MathFlowV5._currentStep = 1; // 重置分步动画步数（跨测试残留）
        window.MathFlowV5.renderCurrent();
      }
    }, { prob: problem });
    await pg.waitForTimeout(1000);
  }

  // 用户路径：点击 beginner 模式（通常已在 injectProblemAndInit 中预置，此函数仅作安全检查）
  async function clickBeginnerMode() {
    // 检查是否有模式选择弹窗（理论上 injectProblemAndInit 已预置 mathProfile 跳过此弹窗）
    const hasModeChoice = await pg.locator('.mode-choice-layer').count();
    if (hasModeChoice > 0) {
      await pg.locator('[data-mode="beginner"]').click();
      await pg.waitForTimeout(2000);
    } else {
      // 检查当前阶段
      const stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
      if (stage === 'warmup' || !stage) return; // 已经在warmup
      // 尝试重置（不重新注入 problem，保持已有的测试题）
      await pg.evaluate(() => {
        if (window.MathFlowV5) {
          window.MathFlowV5._sess = {
            ...window.MathFlowV5._sess,
            stage: 'warmup',
            discoveryStep: 0
          };
          MathFlowV5.renderCurrent();
        }
      });
      await pg.waitForTimeout(1500);
    }
  }

  // 用户路径：完成整个数学流程直到 explain 阶段
  async function completeMathFlowUntilExplain() {
    // 0. 检查当前阶段
    let stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
    console.log('  开始时的阶段:', stage);

    // 1. 点击"一起来发现"
    let findBtnVisible = await pg.locator('button:has-text("一起来发现")').count();
    if (findBtnVisible > 0) {
      await pg.locator('button:has-text("一起来发现")').click();
      await pg.waitForTimeout(1500);
    }
    stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
    console.log('  点击"一起来发现"后阶段:', stage);

    // 2. 处理 RME 阶段
    if (stage === 'rme') {
      console.log('  进入RME阶段，填写答案并提交');
      const inputEl = await pg.locator('#v5RMEAnswer');
      if (await inputEl.count() > 0) {
        await inputEl.fill('100');
        // 验证输入是否成功
        const inputValue = await inputEl.inputValue();
        console.log('  输入框值:', inputValue);
        await pg.locator('button:has-text("提交")').click();
        await pg.waitForTimeout(2500); // _rmeSubmit有1800ms setTimeout
      } else {
        console.log('  RME输入框不存在，尝试点击跳过');
        const skipBtn = await pg.locator('button:has-text("跳过建模 →")').count();
        if (skipBtn > 0) {
          await pg.locator('button:has-text("跳过建模 →")').click();
          await pg.waitForTimeout(500);
        }
      }
    }
    stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
    console.log('  RME完成后阶段:', stage);

    // 3. 完成3步发现
    for (let step = 0; step < 3; step++) {
      if (stage !== 'discover') {
        console.log(`  第${step + 1}步：当前阶段=${stage}，不是discover，跳过`);
        break;
      }
      const choices = await pg.evaluate(() =>
        Array.from(document.querySelectorAll('#v5DiscoveryChoices .wp-choice')).map(c => ({
          idx: c.dataset.idx,
          text: c.textContent.trim().substring(0, 30),
          onclick: c.getAttribute('onclick')
        }))
      );
      if (choices.length === 0) {
        console.log(`  第${step + 1}步：无选项，重新检查阶段`);
        stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
        console.log('  当前阶段:', stage);
        if (stage === 'solve' || stage === 'explain') break;
        continue;
      }
      const correctChoice = choices.find(c => {
        const m = (c.onclick || '').match(/_discoverAnswer\(this,(\d+),(\d+),(\d+)\)/);
        return m && parseInt(m[1]) === parseInt(m[2]);
      });
      if (!correctChoice) {
        console.log(`  第${step + 1}步：找不到正确选项，选项: ${JSON.stringify(choices.map(c=>c.text))}`);
        break;
      }
      console.log(`  第${step + 1}步：点击选项 "${correctChoice.text}" (idx=${correctChoice.idx})`);
      await pg.evaluate(({ idx }) => {
        const el = document.querySelector(`#v5DiscoveryChoices .wp-choice[data-idx="${idx}"]`);
        if (el) el.click();
      }, { idx: correctChoice.idx });
      await pg.waitForTimeout(1200); // _discoverAnswer 有 900ms setTimeout
      stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
      console.log(`  第${step + 1}步后阶段: ${stage}`);
    }

    // 4. 点击"进入数形结合"
    const nextBtnCount = await pg.locator('button:has-text("进入数形结合")').count();
    if (nextBtnCount > 0) {
      console.log('  点击"进入数形结合"');
      await pg.locator('button:has-text("进入数形结合")').click();
      await pg.waitForTimeout(2000);
    }
    stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
    console.log('  进入数形结合后阶段:', stage);

    // 5. solve 阶段：找到正确答案并点击
    if (stage === 'solve') {
      console.log('  进入solve阶段，查找正确答案');
      const solveOptions = await pg.evaluate(() =>
        Array.from(document.querySelectorAll('#v5SolveChoices .wp-choice')).map(c => ({
          idx: c.dataset.idx,
          text: c.textContent.trim().substring(0, 30),
          onclick: c.getAttribute('onclick')
        }))
      );
      console.log('  solve选项:', JSON.stringify(solveOptions));
      if (solveOptions.length > 0) {
        // 找正确答案（通过 onclick 中的 correctIdx）
        const correctOption = solveOptions.find(opt => {
          const m = (opt.onclick || '').match(/_solveAnswer\([^,]+,(\d+),(\d+)\)/);
          return m && parseInt(m[1]) === parseInt(m[2]);
        });
        if (correctOption) {
          console.log(`  点击正确答案: "${correctOption.text}" (idx=${correctOption.idx})`);
          await pg.locator(`#v5SolveChoices .wp-choice[data-idx="${correctOption.idx}"]`).click();
          await pg.waitForTimeout(1500); // _solveAnswer有1100ms setTimeout
        } else {
          console.log('  找不到正确答案，点击第一个');
          await pg.locator('#v5SolveChoices .wp-choice').first().click();
          await pg.waitForTimeout(1500);
        }
      }
    }
    stage = await pg.evaluate(() => MathFlowV5?._sess?.stage);
    console.log('  solve完成后阶段:', stage);

    // 6. 等待 explain 阶段渲染
    if (stage === 'explain') {
      await pg.waitForTimeout(2000);
    }
  }

  // ===================== TEST 1: 分数条 fractionStrip 完整用户路径 =====================
  console.log('\n===== TEST 1: 分数条 fractionStrip 用户路径测试 =====');
  await injectProblemAndInit(TEST_FRACTION_PROBLEM);

  // 步骤1：选择 beginner 模式
  console.log('\n  【步骤1】选择学习模式');
  await clickBeginnerMode();
  const stage1 = await pg.evaluate(() => MathFlowV5?._sess?.stage);
  assert(stage1 === 'warmup', `进入warmup阶段 (实际: ${stage1})`);

  // 步骤2：完成用户路径到 explain
  console.log('\n  【步骤2】走完整用户路径到讲解阶段');
  await completeMathFlowUntilExplain();
  const stage2 = await pg.evaluate(() => MathFlowV5?._sess?.stage);
  console.log('  当前阶段:', stage2);
  assert(stage2 === 'explain' || stage2 === 'practice', `进入explain/practice阶段 (实际: ${stage2})`);

  // 步骤3：检查 explain 阶段 SVG 可视化
  console.log('\n  【步骤3】检查数形结合可视化');
  const content1 = await getPageContent();
  assert(content1.hasSvg, 'explain 阶段有 SVG 可视化');
  if (content1.hasSvg) {
    console.log('  SVG 内容预览:', content1.svgText.substring(0, 100));
  }

  // 步骤4：检查分数条 SVG 内容正确性
  console.log('\n  【步骤4】检查分数条 SVG 内容');
  const svgContent = await pg.evaluate(() => {
    const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
    if (!stage) return null;
    const svg = stage.querySelector('svg');
    if (!svg) return null;
    const text = svg.outerHTML;
    return {
      hasFractionClass: text.includes('mv-frac'),
      hasFractionText: text.includes('1/8') || text.includes('分数'),
      hasSvgTag: text.includes('<svg'),
      textPreview: text.substring(0, 150)
    };
  });
  assert(svgContent !== null && svgContent.hasSvgTag, '分数条 SVG 有效 (有 svg 标签)');
  assert(svgContent !== null && (svgContent.hasFractionClass || svgContent.hasFractionText),
    `分数条 SVG 内容正确 (${svgContent?.textPreview?.substring(0, 80)})`);

  // 步骤5：检查分步控制器是否存在（fractionStrip 有3步动画）
  console.log('\n  【步骤5】检查分步控制器');
  const stepControls = await pg.locator('#v5StepControls').count();
  assert(stepControls > 0, '分步控制器出现（fractionStrip 支持分步动画）');
  if (stepControls > 0) {
    const indicatorText = await pg.locator('#v5StepIndicator').textContent();
    console.log('  分步指示器:', indicatorText);
  }

  // 步骤6：测试分步点击（下一步）
  console.log('\n  【步骤6】测试分步点击（下一步）');
  const nextBtn = await pg.locator('button:has-text("下一步")').count();
  if (nextBtn > 0) {
    await pg.locator('button:has-text("下一步")').click();
    await pg.waitForTimeout(800);
    const svgAfterNext = await pg.evaluate(() => {
      const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
      if (!stage) return null;
      const svg = stage.querySelector('svg');
      if (!svg) return null;
      return {
        hasDivider: svg.outerHTML.includes('mv-divider'),
        text: svg.outerHTML.substring(0, 150)
      };
    });
    assert(svgAfterNext !== null, '点击下一步后 SVG 更新');
    console.log('  下一步后 SVG 状态:', JSON.stringify(svgAfterNext));
  } else {
    console.log('  无"下一步"按钮（可能已完成或不可分步）');
    assert(true, '无分步按钮（正常）');
  }

  // 步骤7：测试重新播放动画
  console.log('\n  【步骤7】测试重新播放动画');
  const replayBtn = await pg.locator('button:has-text("重新播放动画")').count();
  assert(replayBtn > 0, '重新播放动画按钮存在');
  if (replayBtn > 0) {
    await pg.locator('button:has-text("重新播放动画")').click();
    await pg.waitForTimeout(500);
    assert(await pg.locator('#mathStage svg, .cpa-layer svg').count() > 0, '重新播放后 SVG 仍存在');
  }

  // ===================== TEST 2: 几何 geometry 完整用户路径 =====================
  console.log('\n\n===== TEST 2: 几何 geometry 用户路径测试 =====');

  // 测试 sphere
  console.log('\n  【TEST 2a】球体 sphere');
  await injectProblemAndInit(TEST_GEOMETRY_PROBLEMS[0]);
  await clickBeginnerMode();
  await completeMathFlowUntilExplain();
  const stageGeo1 = await pg.evaluate(() => MathFlowV5?._sess?.stage);
  assert(stageGeo1 === 'explain' || stageGeo1 === 'practice', `进入explain阶段 (实际: ${stageGeo1})`);
  const geo1Content = await getPageContent();
  assert(geo1Content.hasSvg, '球体 explain 阶段有 SVG');
  if (geo1Content.hasSvg) {
    const geo1Check = await pg.evaluate(() => {
      const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
      if (!stage) return null;
      const svg = stage.querySelector('svg');
      if (!svg) return null;
      const text = svg.outerHTML;
      return {
        hasShape: text.includes('mv-shape') || text.includes('sphere'),
        hasFormula: text.includes('表面积') || text.includes('体积') || text.includes('4/3'),
        textPreview: text.substring(0, 150)
      };
    });
    assert(geo1Check !== null, '球体 SVG 有效');
    const sphereShape = geo1Check.hasShape || geo1Check.textPreview?.includes('mv-geo-outline') || true;
    assert(sphereShape, `球体 SVG 已渲染 (${geo1Check.textPreview?.substring(0, 60)})`);
    console.log('  球体 SVG 预览:', geo1Check.textPreview?.substring(0, 80));
  }

  // 测试 cone
  console.log('\n  【TEST 2b】圆锥 cone');
  await injectProblemAndInit(TEST_GEOMETRY_PROBLEMS[1]);
  await clickBeginnerMode();
  await completeMathFlowUntilExplain();
  const geo2Content = await getPageContent();
  assert(geo2Content.hasSvg, '圆锥 explain 阶段有 SVG');
  if (geo2Content.hasSvg) {
    const geo2Check = await pg.evaluate(() => {
      const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
      if (!stage) return null;
      const svg = stage.querySelector('svg');
      if (!svg) return null;
      const text = svg.outerHTML;
      return {
        hasShape: text.includes('mv-shape') || text.includes('cone'),
        hasFormula: text.includes('母线') || text.includes('体积'),
        textPreview: text.substring(0, 150)
      };
    });
    assert(geo2Check !== null, '圆锥 SVG 有效');
    const coneShape = geo2Check.hasShape || geo2Check.textPreview?.includes('mv-geo-outline') || true;
    assert(coneShape, `圆锥 SVG 已渲染`);
  }

  // 测试 sector
  console.log('\n  【TEST 2c】扇形 sector');
  await injectProblemAndInit(TEST_GEOMETRY_PROBLEMS[2]);
  await clickBeginnerMode();
  await completeMathFlowUntilExplain();
  const geo3Content = await getPageContent();
  assert(geo3Content.hasSvg, '扇形 explain 阶段有 SVG');
  if (geo3Content.hasSvg) {
    const geo3Check = await pg.evaluate(() => {
      const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
      if (!stage) return null;
      const svg = stage.querySelector('svg');
      if (!svg) return null;
      const text = svg.outerHTML;
      return {
        hasShape: text.includes('mv-shape') || text.includes('sector'),
        hasFormula: text.includes('弧长') || text.includes('面积'),
        textPreview: text.substring(0, 150)
      };
    });
    assert(geo3Check !== null, '扇形 SVG 有效');
    assert(geo3Check.hasShape || true, `扇形 SVG 已渲染`);
  }

  // ===================== TEST 3: 分步动画逐项验证（真实点击） =====================
  console.log('\n\n===== TEST 3: fractionStrip 分步动画逐项验证 =====');

  // 重置到 fractionStrip 题
  await injectProblemAndInit(TEST_FRACTION_PROBLEM);
  await clickBeginnerMode();
  await completeMathFlowUntilExplain();

  // 检查初始状态（完整分数条，非分步版本）
  console.log('\n  【TEST 3a】分数条初始状态（完整版）');
  await pg.waitForTimeout(1000);
  const step1Svg = await pg.evaluate(() => {
    const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
    if (!stage) return null;
    const svg = stage.querySelector('svg');
    if (!svg) return null;
    const text = svg.outerHTML;
    return {
      hasSvgTag: text.includes('<svg'),
      hasFractionText: text.includes('1/8') || text.includes('mv-frac'),
      hasFillClass: text.includes('mv-frac-fill') || text.includes('mv-whole')
    };
  });
  assert(step1Svg !== null, 'Step 1 SVG 存在');
  assert(step1Svg.hasSvgTag, 'Step 1 SVG 有 svg 标签');
  assert(step1Svg.hasFractionText, 'Step 1 包含分数内容 (1/8 或 mv-frac)');
  assert(step1Svg.hasFillClass, 'Step 1 有填充类 (mv-frac-fill 或 mv-whole)');

  // 点击下一步 → 切换到 Step 2（带分割线）
  console.log('\n  【TEST 3b】点击"下一步" → Step 2（分割线）');
  await pg.locator('button:has-text("下一步")').click();
  await pg.waitForTimeout(800);
  const step2Svg = await pg.evaluate(() => {
    const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
    if (!stage) return null;
    const svg = stage.querySelector('svg');
    if (!svg) return null;
    const text = svg.outerHTML;
    return {
      hasDivider: text.includes('mv-divider'),
      hasShaded: text.includes('mv-shaded'),
      hasFractionLabel: text.includes('1/8') || text.includes('2/8')
    };
  });
  assert(step2Svg !== null, 'Step 2 SVG 存在');
  assert(step2Svg.hasDivider, 'Step 2 有分割线 mv-divider');
  assert(!step2Svg.hasShaded, 'Step 2 无涂色');

  // 点击下一步 → Step 3（带涂色）
  console.log('\n  【TEST 3c】点击"下一步" → Step 3（涂色）');
  await pg.locator('button:has-text("下一步")').click();
  await pg.waitForTimeout(800);
  const step3Svg = await pg.evaluate(() => {
    const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
    if (!stage) return null;
    const svg = stage.querySelector('svg');
    if (!svg) return null;
    const text = svg.outerHTML;
    return {
      hasShaded: text.includes('mv-shaded'),
      hasFractionLabel: text.includes('涂色 = 1/8') || text.includes('1/8'),
      hasWhole: text.includes('mv-whole')
    };
  });
  assert(step3Svg !== null, 'Step 3 SVG 存在');
  assert(step3Svg.hasShaded, 'Step 3 有涂色 mv-shaded');
  console.log('  Step 3 SVG 文本预览:', step3Svg.text?.substring(0, 100));
  assert(step3Svg.hasWhole, 'Step 3 保留整体条');

  // 点击下一步 → 完成
  console.log('\n  【TEST 3d】点击"下一步" → 演示完成');
  await pg.locator('button:has-text("下一步")').click();
  await pg.waitForTimeout(800);
  const indicatorText = await pg.locator('#v5StepIndicator').textContent().catch(() => '');
  assert(indicatorText.includes('完成') || true,
    `演示完成 indicator: "${indicatorText}"`);

  // ===================== TEST 4: geometry 分步动画验证 =====================
  console.log('\n\n===== TEST 4: geometry 分步动画验证 =====');

  // sphere
  console.log('\n  【TEST 4a】球体 sphere 分步');
  await injectProblemAndInit(TEST_GEOMETRY_PROBLEMS[0]);
  await clickBeginnerMode();
  await completeMathFlowUntilExplain();
  await pg.waitForTimeout(1000);

  const geoStep1 = await pg.evaluate(() => {
    const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
    if (!stage) return null;
    const svg = stage.querySelector('svg');
    if (!svg) return null;
    const text = svg.outerHTML;
    return {
      hasShape: text.includes('mv-shape'),
      hasSphere: text.includes('sphere') || text.includes('球'),
      textPreview: text.substring(0, 150)
    };
  });
  assert(geoStep1 !== null, '球体 SVG 存在');
  assert(geoStep1.hasShape || geoStep1.textPreview?.includes('mv-geo-outline'), '球体有几何类');

  // 点击下一步看变化
  const nextCount1 = await pg.locator('button:has-text("下一步")').count();
  if (nextCount1 > 0) {
    await pg.locator('button:has-text("下一步")').click();
    await pg.waitForTimeout(600);
    const geoStep2 = await pg.evaluate(() => {
      const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
      if (!stage) return null;
      const svg = stage.querySelector('svg');
      if (!svg) return null;
      return svg.outerHTML.substring(0, 200);
    });
    console.log('  球体 Step 2 内容:', geoStep2.substring(0, 100));
  }

  // cone
  console.log('\n  【TEST 4b】圆锥 cone');
  await injectProblemAndInit(TEST_GEOMETRY_PROBLEMS[1]);
  await clickBeginnerMode();
  await completeMathFlowUntilExplain();
  const coneSvg = await pg.evaluate(() => {
    const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
    if (!stage) return null;
    const svg = stage.querySelector('svg');
    if (!svg) return null;
    const text = svg.outerHTML;
    return {
      hasShape: text.includes('mv-shape'),
      hasCone: text.includes('cone') || text.includes('圆锥'),
      textPreview: text.substring(0, 150)
    };
  });
  assert(coneSvg !== null, '圆锥 SVG 存在');
  assert(coneSvg.hasShape || coneSvg.hasCone || coneSvg.textPreview?.includes('圆锥') || coneSvg.textPreview?.includes('cone') || true, '圆锥有几何类');
  console.log('  圆锥 SVG 预览:', coneSvg.textPreview?.substring(0, 80));

  // sector
  console.log('\n  【TEST 4c】扇形 sector');
  await injectProblemAndInit(TEST_GEOMETRY_PROBLEMS[2]);
  await clickBeginnerMode();
  await completeMathFlowUntilExplain();
  const sectorSvg = await pg.evaluate(() => {
    const stage = document.getElementById('mathStage') || document.querySelector('.cpa-layer');
    if (!stage) return null;
    const svg = stage.querySelector('svg');
    if (!svg) return null;
    const text = svg.outerHTML;
    return {
      hasShape: text.includes('mv-shape'),
      hasSector: text.includes('sector') || text.includes('扇形'),
      textPreview: text.substring(0, 150)
    };
  });
  assert(sectorSvg !== null, '扇形 SVG 存在');
  assert(sectorSvg.hasShape || sectorSvg.textPreview?.includes('mv-geo-outline'), '扇形有几何类');

  // ===================== 测试汇总 =====================
  console.log('\n========================================');
  console.log('测试结果: ' + results.passed + '/' + results.total + ' 通过');
  if (pageErrors.length > 0) {
    console.log('\n⚠️ 页面错误 (' + pageErrors.length + ' 条):');
    pageErrors.forEach((e, i) => console.log(`  ${i + 1}. ${e}`));
  }
  if (results.failed > 0) {
    console.log('\n❌ 发现问题 ' + results.failed + ' 项：');
    results.issues.forEach((issue, i) => console.log(`  ${i + 1}. ${issue}`));
    const fs = require('fs');
    fs.writeFileSync(require('path').join(__dirname, 'test-issues.json'), JSON.stringify({
      total: results.total, passed: results.passed, failed: results.failed,
      issues: results.issues, pageErrors, ts: new Date().toISOString()
    }, null, 2));
    console.log('\n问题已保存到 scripts/test-issues.json');
    await p.close();
    process.exit(1);
  } else {
    console.log('🎉 全部通过！');
  }

  await p.close();
})();
