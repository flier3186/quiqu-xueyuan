// scripts/speak-diagnose.js · 口语对话 + 语音朗读诊断脚本
// 运行: node scripts/speak-diagnose.js
const fs = require('fs');
const path = require('path');

console.log('=== 口语对话 + 语音朗读 诊断报告 ===\n');

// ===== 1. 检查 speak-engine-v5.js 结构 =====
const speakEngine = fs.readFileSync(path.join(__dirname, '../engine/speak-engine-v5.js'), 'utf8');
console.log('【1. speak-engine-v5.js 结构】');
console.log('  - DeepSeek AI 调用:', speakEngine.includes('_callAI') ? '✅ 存在' : '❌ 缺失');
console.log('  - 降级对话树:', speakEngine.includes('_fallback') ? '✅ 存在' : '❌ 缺失');
console.log('  - 三老师配置:', speakEngine.includes('emma') && speakEngine.includes('leo') && speakEngine.includes('aria') ? '✅ 完整' : '❌ 不完整');
console.log('  - API key 检查:', speakEngine.includes('S.apiConfig') ? '✅ 存在' : '❌ 缺失');
console.log('  - TTS 差异化语音:', speakEngine.includes('pitch=1.25') && speakEngine.includes('pitch=0.75') ? '✅ 有差异化' : '❌ 无差异化');

// ===== 2. 检查 index.html 中口语面板渲染 =====
const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
console.log('\n【2. index.html 口语面板】');
console.log('  - renderSpeak 函数:', indexHtml.includes('function renderSpeak()') ? '✅ 存在' : '❌ 缺失');
console.log('  - 三老师选择 UI:', indexHtml.includes('se-teacher-card') ? '✅ 存在' : '❌ 缺失');
console.log('  - AI状态指示:', indexHtml.includes('deepseekOK') ? '✅ 存在' : '❌ 缺失');
console.log('  - API key 输入 UI:', indexHtml.includes('deepseekKeyInput') ? '✅ 存在' : '❌ 缺失');
console.log('  - 场景合并:', indexHtml.includes('SPEAK_SCENARIOS_NEW8') ? '✅ 合并' : '❌ 未合并');
console.log('  - 全局 speak() 函数:', indexHtml.includes('function speak(') ? '✅ 存在' : '❌ 缺失');
console.log('  - speechSynthesis 检查:', indexHtml.includes('speechSynthesis') ? '✅ 存在' : '❌ 缺失');

// ===== 3. 检查口语场景数据 =====
const scenarios = fs.readFileSync(path.join(__dirname, '../data/speak-8-new.js'), 'utf8');
console.log('\n【3. 口语场景数据】');
console.log('  - 新场景文件:', scenarios.length > 1000 ? '✅ 存在 (新版8场景)' : '❌ 缺失');
console.log('  - 场景数:', (scenarios.match(/id:/g)||[]).length, '个新场景');

// 检查内置场景
const builtInMatch = indexHtml.match(/const SPEAK_SCENARIOS = \[([\s\S]*?)\];/);
if (builtInMatch) {
  const builtIn = builtInMatch[1];
  const builtInCount = (builtIn.match(/id:/g) || []).length;
  console.log('  - 内置场景:', builtInCount, '个');
  console.log('  - 场景总数:', builtInCount + 8, '个');
}

// ===== 4. 检查 API key 存储逻辑 =====
console.log('\n【4. API Key 存储逻辑】');
console.log('  - 读取 key:', indexHtml.includes('S.apiConfig.deepseekKey') ? '✅ 正确' : '❌ 缺失');
console.log('  - 保存 key:', indexHtml.includes('saveDeepseekKey') ? '✅ 正确' : '❌ 缺失');
console.log('  - 测试 key:', indexHtml.includes('testDeepseekKey') ? '✅ 正确' : '❌ 缺失');
console.log('  - 清除 key:', indexHtml.includes('clearDeepseekKey') ? '✅ 正确' : '❌ 缺失');
console.log('  - defaultState 包含:', indexHtml.includes("apiConfig:{deepseekKey:''}") ? '✅ 正确' : '❌ 缺失');

// ===== 5. 检查 TTS 语音合成实现 =====
console.log('\n【5. TTS 语音合成实现】');
console.log('  - Web Speech API:', indexHtml.includes('speechSynthesis.speak') ? '✅ 使用' : '❌ 未使用');
console.log('  - 语音列表等待:', indexHtml.includes('voiceschanged') ? '✅ 有等待' : '❌ 无等待');
console.log('  - 移动端解锁:', indexHtml.includes('unlockAudio') ? '✅ 有解锁' : '❌ 无解锁');
console.log('  - 全局 speak() 配置:', indexHtml.includes("u.rate = 0.85") && indexHtml.includes("u.pitch = 1.1") ? '✅ rate=0.85, pitch=1.1' : '⚠️ 配置不同');

// ===== 6. 检查可能的网络/技术问题 =====
console.log('\n【6. 潜在问题检查】');

// 检查是否有 CORS 相关的 header 配置
const hasCorsCheck = speakEngine.includes('CORS') || speakEngine.includes('Access-Control');
console.log('  - CORS 处理:', hasCorsCheck ? '⚠️ 有处理' : '✅ 无特殊处理（DeepSeek支持CORS）');

// 检查是否有代理配置
const hasProxy = indexHtml.includes('proxy') || indexHtml.includes('PROXY');
console.log('  - 代理配置:', hasProxy ? '⚠️ 有代理配置' : '✅ 直连 API');

// 检查 fallback 逻辑
const hasFallback = speakEngine.includes('return null') && speakEngine.includes('_fallback');
console.log('  - 降级逻辑:', hasFallback ? '✅ 有降级机制' : '⚠️ 降级逻辑可能有问题');

// ===== 7. 检查三个老师的差异化配置 =====
console.log('\n【7. 三老师差异化配置】');
const emmaMatch = speakEngine.match(/emma:\s*\{([\s\S]*?)\},\s*\n\s*leo:/);
const leoMatch = speakEngine.match(/leo:\s*\{([\s\S]*?)\},\s*\n\s*aria:/);
const ariaMatch = speakEngine.match(/aria:\s*\{([\s\S]*?)\}/);

if (emmaMatch) {
  const emma = emmaMatch[1];
  console.log('  - Emma:', emma.includes('rate: 1.1') && emma.includes('pitch: 1.2') ? '✅ rate=1.1, pitch=1.2 (女声高频)' : '❌ 配置异常');
}
if (leoMatch) {
  const leo = leoMatch[1];
  console.log('  - Leo:', leo.includes('rate: 0.95') && leo.includes('pitch: 0.9') ? '✅ rate=0.95, pitch=0.9 (男声低频)' : '❌ 配置异常');
}
if (ariaMatch) {
  const aria = ariaMatch[1];
  console.log('  - Aria:', aria.includes('rate: 0.85') && aria.includes('pitch: 1.1') ? '✅ rate=0.85, pitch=1.1 (女声中性)' : '❌ 配置异常');
}

// ===== 8. 检查 systemPrompt 差异化 =====
console.log('\n【8. 三老师 System Prompt】');
const emmaSystem = speakEngine.match(/emma:\s*\{[\s\S]*?systemPrompt:\s*'([^']+)'/);
const leoSystem = speakEngine.match(/leo:\s*\{[\s\S]*?systemPrompt:\s*'([^']+)'/);
const ariaSystem = speakEngine.match(/aria:\s*\{[\s\S]*?systemPrompt:\s*'([^']+)'/);
console.log('  - Emma prompt:', emmaSystem ? '✅ ' + emmaSystem[1].slice(0, 50) + '...' : '❌ 缺失');
console.log('  - Leo prompt:', leoSystem ? '✅ ' + leoSystem[1].slice(0, 50) + '...' : '❌ 缺失');
console.log('  - Aria prompt:', ariaSystem ? '✅ ' + ariaSystem[1].slice(0, 50) + '...' : '❌ 缺失');

// ===== 9. 检查错误日志处理 =====
console.log('\n【9. 错误处理与降级】');
console.log('  - 401 Key 失效:', speakEngine.includes('resp.status === 401') ? '✅ 有处理' : '⚠️ 无特殊处理');
console.log('  - 429 限流重试:', speakEngine.includes('resp.status === 429') ? '✅ 有重试' : '⚠️ 无重试');
console.log('  - 网络异常重试:', speakEngine.includes('NetworkError') || speakEngine.includes('abort') ? '✅ 有重试' : '⚠️ 无重试');

console.log('\n=== 诊断完成 ===');
