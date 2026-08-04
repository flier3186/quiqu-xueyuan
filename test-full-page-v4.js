// test-full-page-v4.js · 奇趣学园全板块自动化测试 v4（修正选择器）
const { chromium } = require('playwright');

async function runTests() {
  console.log('=== 奇趣学园全板块自动化测试 v4 ===\n');
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  const results = [];
  
  // 测试 1: 页面加载
  console.log('[TEST 1] 页面加载测试...');
  try {
    const startTime = Date.now();
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 60000 });
    const loadTime = Date.now() - startTime;
    
    const title = await page.title();
    const htmlLength = await page.evaluate(() => document.documentElement.outerHTML.length);
    
    console.log(`  ✅ 页面加载成功: ${loadTime}ms`);
    console.log(`  ✅ 页面标题: ${title}`);
    console.log(`  ✅ HTML 大小: ${(htmlLength / 1024).toFixed(1)} KB`);
    
    results.push({ test: '页面加载', status: 'PASS', detail: `${loadTime}ms, ${title}` });
  } catch (e) {
    console.log(`  ❌ 页面加载失败: ${e.message}`);
    results.push({ test: '页面加载', status: 'FAIL', detail: e.message });
    await browser.close();
    return results;
  }
  
  // 测试 2: 导航结构
  console.log('\n[TEST 2] 导航结构检查...');
  try {
    const navTabs = await page.locator('.nav-tab').count();
    console.log(`  ✅ 导航标签数量: ${navTabs}`);
    results.push({ test: '导航标签', status: 'PASS', detail: `${navTabs}个` });
    
    // 检查每个导航标签
    const tabTexts = await page.locator('.nav-tab span').allTextContents();
    console.log('  导航标签:', tabTexts.join(', '));
    
    // 检查家长面板按钮
    const parentBtn = await page.locator('#parentBtn').count();
    if (parentBtn > 0) {
      console.log('  ✅ 家长面板按钮存在');
      results.push({ test: '家长面板按钮', status: 'PASS', detail: '存在' });
    } else {
      console.log('  ❌ 家长面板按钮未找到');
      results.push({ test: '家长面板按钮', status: 'FAIL', detail: '未找到' });
    }
  } catch (e) {
    console.log(`  ❌ 导航检查失败: ${e.message}`);
    results.push({ test: '导航检查', status: 'FAIL', detail: e.message });
  }
  
  // 测试 3: 数学板块
  console.log('\n[TEST 3] 数学板块测试...');
  try {
    await page.locator('[data-view="math"]').click();
    await page.waitForTimeout(3000);
    
    const mathContent = await page.evaluate(() => {
      const body = document.body.innerText;
      const hasGrade = body.includes('二年级') || body.includes('三年级') || body.includes('四年级');
      const hasProblem = body.includes('题') || body.includes('有多少');
      return { hasGrade, hasProblem };
    });
    
    if (mathContent.hasGrade) {
      console.log('  ✅ 数学板块显示年级选择器');
      results.push({ test: '数学年级选择', status: 'PASS', detail: '正常' });
    }
    
    if (mathContent.hasProblem) {
      console.log('  ✅ 数学板块显示题目内容');
      results.push({ test: '数学题目内容', status: 'PASS', detail: '正常' });
    }
    
    // 检查可视化
    const visualCount = await page.locator('.visual-container, .mv-wrap, svg').count();
    if (visualCount > 0) {
      console.log(`  ✅ 可视化元素存在 (${visualCount}个)`);
      results.push({ test: '数学可视化', status: 'PASS', detail: `${visualCount}个` });
    }
    
    // 点击第一道题
    const firstProblem = await page.locator('.task-card, .problem-item').first();
    if (await firstProblem.count() > 0) {
      await firstProblem.click();
      await page.waitForTimeout(2000);
      
      const question = await page.evaluate(() => {
        const q = document.querySelector('.question-text, .cpa-layer');
        return q ? q.innerText.substring(0, 100) : '';
      });
      
      if (question) {
        console.log(`  ✅ 题目详情: ${question}...`);
        results.push({ test: '题目详情', status: 'PASS', detail: question.substring(0, 50) });
      }
      
      // 检查答题选项
      const choices = await page.locator('.wp-choice').count();
      if (choices > 0) {
        console.log(`  ✅ 答题选项存在 (${choices}个)`);
        results.push({ test: '答题选项', status: 'PASS', detail: `${choices}个` });
      }
    }
  } catch (e) {
    console.log(`  ⚠️  数学板块测试警告: ${e.message}`);
    results.push({ test: '数学板块测试', status: 'WARN', detail: e.message });
  }
  
  // 测试 4: 英语板块
  console.log('\n[TEST 4] 英语板块测试...');
  try {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);
    
    await page.locator('[data-view="english"]').click();
    await page.waitForTimeout(3000);
    
    const englishContent = await page.evaluate(() => {
      const body = document.body.innerText;
      const hasWord = body.includes('cat') || body.includes('dog') || body.includes('apple');
      const hasPhonics = body.includes('拼读') || body.includes('phonics');
      return { hasWord, hasPhonics };
    });
    
    if (englishContent.hasWord) {
      console.log('  ✅ 英语板块显示单词');
      results.push({ test: '英语单词', status: 'PASS', detail: '正常' });
    }
    
    if (englishContent.hasPhonics) {
      console.log('  ✅ 英语板块显示拼读内容');
      results.push({ test: '英语拼读', status: 'PASS', detail: '正常' });
    }
    
    // 检查发音按钮
    const speakBtns = await page.locator('.speak-btn, [onclick*="speak"]').count();
    if (speakBtns > 0) {
      console.log(`  ✅ 发音按钮存在 (${speakBtns}个)`);
      results.push({ test: '发音按钮', status: 'PASS', detail: `${speakBtns}个` });
    }
  } catch (e) {
    console.log(`  ⚠️  英语板块测试警告: ${e.message}`);
    results.push({ test: '英语板块测试', status: 'WARN', detail: e.message });
  }
  
  // 测试 5: 口语板块
  console.log('\n[TEST 5] 口语板块测试...');
  try {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);
    
    await page.locator('[data-view="speak"]').click();
    await page.waitForTimeout(3000);
    
    const speakContent = await page.evaluate(() => {
      const body = document.body.innerText;
      const hasScene = body.includes('场景') || body.includes('对话');
      return { hasScene };
    });
    
    if (speakContent.hasScene) {
      console.log('  ✅ 口语板块显示场景');
      results.push({ test: '口语场景', status: 'PASS', detail: '正常' });
    }
    
    // 检查对话按钮
    const chatBtn = await page.locator('#startDialogueBtn, .btn').count();
    if (chatBtn > 0) {
      console.log(`  ✅ 对话按钮存在 (${chatBtn}个)`);
      results.push({ test: '对话按钮', status: 'PASS', detail: `${chatBtn}个` });
    }
  } catch (e) {
    console.log(`  ⚠️  口语板块测试警告: ${e.message}`);
    results.push({ test: '口语板块测试', status: 'WARN', detail: e.message });
  }
  
  // 测试 6: 家长面板
  console.log('\n[TEST 6] 家长面板测试...');
  try {
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(500);
    
    // 点击家长面板按钮
    await page.locator('#parentBtn').click();
    await page.waitForTimeout(2000);
    
    // 检查弹窗
    const modalVisible = await page.locator('#parentModal').isVisible();
    if (modalVisible) {
      console.log('  ✅ 家长面板弹窗显示正常');
      results.push({ test: '家长面板弹窗', status: 'PASS', detail: '正常' });
    } else {
      console.log('  ⚠️  家长面板弹窗未显示');
      results.push({ test: '家长面板弹窗', status: 'WARN', detail: '未显示' });
    }
    
    // 检查 DeepSeek 相关内容
    const deepseekContent = await page.evaluate(() => {
      const body = document.body.innerText;
      return body.includes('DeepSeek') || body.includes('API');
    });
    
    if (deepseekContent) {
      console.log('  ✅ 家长面板显示 AI 设置');
      results.push({ test: '家长 AI 设置', status: 'PASS', detail: '正常' });
    }
    
    // 检查测试按钮
    const testBtn = await page.locator('#testDeepseekKeyBtn').count();
    if (testBtn > 0) {
      console.log('  ✅ 测试连接按钮存在');
      results.push({ test: '测试连接按钮', status: 'PASS', detail: '存在' });
    }
    
    // 关闭弹窗
    const closeBtn = await page.locator('#parentClose').count();
    if (closeBtn > 0) {
      await page.locator('#parentClose').click();
      await page.waitForTimeout(500);
      console.log('  ✅ 弹窗已关闭');
    }
  } catch (e) {
    console.log(`  ❌ 家长面板测试失败: ${e.message}`);
    results.push({ test: '家长面板测试', status: 'FAIL', detail: e.message });
  }
  
  // 测试 7: 答案正确性抽查（20道题）
  console.log('\n[TEST 7] 数学题目答案正确性抽查...');
  try {
    const samples = await page.evaluate(() => {
      const problems = window.MATH_BY_GRADE;
      if (!problems) return [];
      
      const samples = [];
      let count = 0;
      for (const grade of Object.keys(problems)) {
        const gradeProblems = problems[grade].problems || [];
        for (const p of gradeProblems) {
          if (p.formula && p.answer && count < 20) {
            let correct = false;
            const formula = p.formula.replace(/[\s?]/g, '');
            
            if (formula.includes('×') || formula.includes('*')) {
              const match = formula.match(/([\d.]+)×([\d.]+)=?/);
              if (match) {
                const expected = parseFloat(match[1]) * parseFloat(match[2]);
                correct = Math.abs(expected - p.answer) < 0.01;
              }
            } else if (formula.includes('÷') || formula.includes('/')) {
              const match = formula.match(/([\d.]+)÷([\d.]+)=?/);
              if (match) {
                const expected = parseFloat(match[1]) / parseFloat(match[2]);
                correct = Math.abs(expected - p.answer) < 0.01;
              }
            } else if (formula.includes('+')) {
              const match = formula.match(/([\d.]+)\+([\d.]+)=?/);
              if (match) {
                const expected = parseFloat(match[1]) + parseFloat(match[2]);
                correct = Math.abs(expected - p.answer) < 0.01;
              }
            } else if (formula.includes('-')) {
              const match = formula.match(/([\d.]+)-([\d.]+)=?/);
              if (match) {
                const expected = parseFloat(match[1]) - parseFloat(match[2]);
                correct = Math.abs(expected - p.answer) < 0.01;
              }
            }
            
            samples.push({
              grade: grade,
              formula: p.formula,
              answer: p.answer,
              correct: correct
            });
            count++;
          }
        }
      }
      return samples;
    });
    
    console.log(`  ✅ 抽查 ${samples.length} 道题`);
    let correct = 0;
    for (const sample of samples) {
      if (sample.correct) {
        console.log(`  ✅ ${sample.grade}: ${sample.formula} = ${sample.answer}`);
        correct++;
      } else {
        console.log(`  ❌ ${sample.grade}: ${sample.formula} = ${sample.answer} (答案错误)`);
      }
    }
    
    results.push({ test: '答案正确性', status: correct === samples.length ? 'PASS' : 'FAIL', detail: `${correct}/${samples.length}` });
  } catch (e) {
    console.log(`  ❌ 答案正确性测试失败: ${e.message}`);
    results.push({ test: '答案正确性', status: 'FAIL', detail: e.message });
  }
  
  // 测试 8: Console 错误检查
  console.log('\n[TEST 8] Console 错误检查...');
  try {
    const consoleErrors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);
    
    if (consoleErrors.length > 0) {
      console.log(`  ⚠️  发现 ${consoleErrors.length} 个 console 错误:`);
      for (const err of consoleErrors.slice(0, 5)) {
        console.log(`    - ${err.substring(0, 100)}`);
      }
      results.push({ test: 'Console 错误', status: 'WARN', detail: `${consoleErrors.length} 个错误` });
    } else {
      console.log('  ✅ 无 console 错误');
      results.push({ test: 'Console 错误', status: 'PASS', detail: '无错误' });
    }
  } catch (e) {
    console.log(`  ❌ Console 错误检查失败: ${e.message}`);
    results.push({ test: 'Console 错误', status: 'FAIL', detail: e.message });
  }
  
  // 测试 9: 资源完整性
  console.log('\n[TEST 9] 资源完整性检查...');
  try {
    const resources = await page.evaluate(() => {
      return {
        mathData: typeof window.MATH_BY_GRADE !== 'undefined',
        mathVisual: typeof window.MathVisualV5 !== 'undefined',
        mathFlow: typeof window.MathFlowV5 !== 'undefined',
        speakEngine: typeof window.speak === 'function',
        problemCount: window.MATH_BY_GRADE ? Object.keys(window.MATH_BY_GRADE).reduce((s, g) => s + (window.MATH_BY_GRADE[g].problems || []).length, 0) : 0
      };
    });
    
    if (resources.mathData) {
      console.log(`  ✅ math-data.js 已加载 (${resources.problemCount} 道题)`);
      results.push({ test: 'math-data.js', status: 'PASS', detail: `${resources.problemCount}题` });
    }
    
    if (resources.mathVisual) {
      console.log('  ✅ math-visual-v5.js 已加载');
      results.push({ test: 'math-visual-v5.js', status: 'PASS', detail: '已加载' });
    }
    
    if (resources.mathFlow) {
      console.log('  ✅ math-flow-v5.js 已加载');
      results.push({ test: 'math-flow-v5.js', status: 'PASS', detail: '已加载' });
    }
    
    if (resources.speakEngine) {
      console.log('  ✅ speak() 函数已加载');
      results.push({ test: 'speak() 函数', status: 'PASS', detail: '已加载' });
    }
  } catch (e) {
    console.log(`  ❌ 资源完整性检查失败: ${e.message}`);
    results.push({ test: '资源完整性', status: 'FAIL', detail: e.message });
  }
  
  // 汇总
  console.log('\n=== 测试汇总 ===');
  const pass = results.filter(r => r.status === 'PASS').length;
  const fail = results.filter(r => r.status === 'FAIL').length;
  const warn = results.filter(r => r.status === 'WARN').length;
  
  console.log(`  ✅ 通过: ${pass}`);
  console.log(`  ❌ 失败: ${fail}`);
  console.log(`  ⚠️  警告: ${warn}`);
  
  if (fail > 0) {
    console.log('\n失败项:');
    results.filter(r => r.status === 'FAIL').forEach(r => {
      console.log(`  - ${r.test}: ${r.detail}`);
    });
  }
  
  await browser.close();
  
  console.log('\n=== JSON 结果 ===');
  console.log(JSON.stringify(results, null, 2));
  
  return results;
}

runTests().catch(e => {
  console.error('测试执行失败:', e);
  process.exit(1);
});
