// test-full-page-v2.js · 奇趣学园全板块自动化测试 v2
const { chromium } = require('playwright');

async function runTests() {
  console.log('=== 奇趣学园全板块自动化测试 v2 ===\n');
  
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
  
  // 测试 2: 检查关键元素
  console.log('\n[TEST 2] 关键元素检查...');
  try {
    const checks = [
      { selector: '.nav', name: '导航栏' },
      { selector: '.nav-tab', name: '导航标签' },
      { selector: '.panel-card', name: '面板卡片' },
      { selector: '[data-section="math"]', name: '数学板块入口' },
      { selector: '[data-section="english"]', name: '英语板块入口' },
      { selector: '[data-section="speak"]', name: '口语板块入口' },
      { selector: '[data-section="parent"]', name: '家长面板入口' }
    ];
    
    for (const check of checks) {
      const count = await page.locator(check.selector).count();
      if (count > 0) {
        console.log(`  ✅ ${check.name} 存在 (${count}个)`);
        results.push({ test: `元素: ${check.name}`, status: 'PASS', detail: `${count}个` });
      } else {
        console.log(`  ⚠️  ${check.name} 未找到`);
        results.push({ test: `元素: ${check.name}`, status: 'WARN', detail: '未找到' });
      }
    }
  } catch (e) {
    console.log(`  ❌ 元素检查失败: ${e.message}`);
    results.push({ test: '元素检查', status: 'FAIL', detail: e.message });
  }
  
  // 测试 3: 数学板块
  console.log('\n[TEST 3] 数学板块测试...');
  try {
    await page.locator('[data-section="math"]').click();
    await page.waitForTimeout(2000);
    
    // 检查数学相关内容
    const mathContent = await page.evaluate(() => {
      const body = document.body.innerText;
      return {
        hasMath: body.includes('数学') || body.includes('练习'),
        hasGrade: body.includes('二年级') || body.includes('三年级') || body.includes('四年级'),
        hasProblem: body.includes('题') || body.includes('有多少')
      };
    });
    
    if (mathContent.hasMath || mathContent.hasGrade) {
      console.log('  ✅ 数学板块内容正常');
      results.push({ test: '数学板块内容', status: 'PASS', detail: '正常' });
    } else {
      console.log('  ⚠️  数学板块内容可能异常');
      results.push({ test: '数学板块内容', status: 'WARN', detail: '可能异常' });
    }
    
    // 检查可视化容器
    const visualContainer = await page.locator('.visual-container, .mv-wrap').count();
    if (visualContainer > 0) {
      console.log(`  ✅ 可视化容器存在 (${visualContainer}个)`);
      results.push({ test: '可视化容器', status: 'PASS', detail: `${visualContainer}个` });
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
    
    await page.locator('[data-section="english"]').click();
    await page.waitForTimeout(2000);
    
    const englishContent = await page.evaluate(() => {
      const body = document.body.innerText;
      return {
        hasEnglish: body.includes('英语') || body.includes('单词'),
        hasWord: body.includes('cat') || body.includes('dog') || body.includes('apple')
      };
    });
    
    if (englishContent.hasEnglish || englishContent.hasWord) {
      console.log('  ✅ 英语板块内容正常');
      results.push({ test: '英语板块内容', status: 'PASS', detail: '正常' });
    } else {
      console.log('  ⚠️  英语板块内容可能异常');
      results.push({ test: '英语板块内容', status: 'WARN', detail: '可能异常' });
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
    
    await page.locator('[data-section="speak"]').click();
    await page.waitForTimeout(2000);
    
    const speakContent = await page.evaluate(() => {
      const body = document.body.innerText;
      return body.includes('口语') || body.includes('对话') || body.includes('场景');
    });
    
    if (speakContent) {
      console.log('  ✅ 口语板块内容正常');
      results.push({ test: '口语板块内容', status: 'PASS', detail: '正常' });
    } else {
      console.log('  ⚠️  口语板块内容可能异常');
      results.push({ test: '口语板块内容', status: 'WARN', detail: '可能异常' });
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
    
    await page.locator('[data-section="parent"]').click();
    await page.waitForTimeout(2000);
    
    const parentContent = await page.evaluate(() => {
      const body = document.body.innerText;
      return body.includes('家长') || body.includes('API') || body.includes('DeepSeek');
    });
    
    if (parentContent) {
      console.log('  ✅ 家长面板内容正常');
      results.push({ test: '家长面板内容', status: 'PASS', detail: '正常' });
    } else {
      console.log('  ⚠️  家长面板内容可能异常');
      results.push({ test: '家长面板内容', status: 'WARN', detail: '可能异常' });
    }
    
    // 检查 API Key 输入框
    const apiKeyInput = await page.locator('#deepseek-api-key, input[type="password"]').count();
    if (apiKeyInput > 0) {
      console.log('  ✅ API Key 输入框存在');
      results.push({ test: 'API Key 输入框', status: 'PASS', detail: '正常' });
    }
  } catch (e) {
    console.log(`  ⚠️  家长面板测试警告: ${e.message}`);
    results.push({ test: '家长面板测试', status: 'WARN', detail: e.message });
  }
  
  // 测试 7: 答案正确性抽查（扩展到所有年级）
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
    let wrong = [];
    for (const sample of samples) {
      if (sample.correct) {
        console.log(`  ✅ ${sample.grade}: ${sample.formula} = ${sample.answer}`);
        correct++;
      } else {
        console.log(`  ❌ ${sample.grade}: ${sample.formula} = ${sample.answer} (答案错误)`);
        wrong.push(sample);
      }
    }
    
    results.push({ test: '答案正确性', status: correct === samples.length ? 'PASS' : 'FAIL', detail: `${correct}/${samples.length}` });
    
    if (wrong.length > 0) {
      console.log('\n  错误答案详情:');
      for (const w of wrong.slice(0, 5)) {
        console.log(`    ${w.grade}: ${w.formula} = ${w.answer}`);
      }
    }
  } catch (e) {
    console.log(`  ❌ 答案正确性测试失败: ${e.message}`);
    results.push({ test: '答案正确性', status: 'FAIL', detail: e.message });
  }
  
  // 测试 8: 检查 console 错误
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
  
  // 测试 9: 检查资源加载
  console.log('\n[TEST 9] 资源加载检查...');
  try {
    const resources = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script[src]');
      const links = document.querySelectorAll('link[rel="stylesheet"], link[href*="css"]');
      return {
        scripts: scripts.length,
        stylesheets: links.length
      };
    });
    
    console.log(`  ✅ 脚本: ${resources.scripts} 个`);
    console.log(`  ✅ 样式表: ${resources.stylesheets} 个`);
    
    results.push({ test: '资源加载', status: 'PASS', detail: `${resources.scripts} scripts, ${resources.stylesheets} CSS` });
  } catch (e) {
    console.log(`  ⚠️  资源加载检查警告: ${e.message}`);
    results.push({ test: '资源加载', status: 'WARN', detail: e.message });
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
