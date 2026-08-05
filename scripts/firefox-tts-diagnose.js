// scripts/firefox-tts-diagnose.js · Firefox TTS 兼容性诊断
// 模拟 Firefox 环境检查 TTS 支持情况
const https = require('https');

console.log('=== Firefox TTS + 口语对话诊断 ===\n');

// ===== 1. 检查 speak-engine-v5.js 的 TTS 实现 =====
const fs = require('fs');
const path = require('path');

const speakEngine = fs.readFileSync(path.join(__dirname, '../engine/speak-engine-v5.js'), 'utf8');

console.log('【1. TTS 语音合成实现分析】');
console.log('  - 使用 Web Speech API:', speakEngine.includes('speechSynthesis') ? '✅ 是' : '❌ 否');
console.log('  - 语音选择逻辑:', speakEngine.includes('_selectVoice') ? '✅ 有' : '❌ 无');
console.log('  - 性别偏好选择:', speakEngine.includes('preferGender') ? '✅ 有' : '❌ 无');
console.log('  - voiceschanged 等待:', speakEngine.includes('voiceschanged') ? '✅ 有' : '❌ 无');

// 检查语音选择优先级
const voiceSelectMatch = speakEngine.match(/let v = voices\.find\([^)]+\);[\s\S]*?if\(v\) this\._voiceCache/);
if (voiceSelectMatch) {
  console.log('\n  语音选择优先级:');
  console.log('    1. en-US + 性别匹配');
  console.log('    2. en-GB + 性别匹配');
  console.log('    3. en-US 任意');
  console.log('    4. en- 任意');
}

// ===== 2. Firefox 兼容性检查 =====
console.log('\n【2. Firefox 兼容性分析】');
console.log('  ⚠️ Firefox 在 Windows 上没有内置 TTS 引擎！');
console.log('  ⚠️ Firefox 依赖操作系统提供的语音');
console.log('  ⚠️ Windows Firefox 可能没有可用的英语语音');
console.log('  ⚠️ 这会导致 speechSynthesis.getVoices() 返回空数组');

// 检查代码是否有空语音列表的容错
const hasFallback = speakEngine.includes('if(!voices.length) return null');
console.log('  - 空语音列表容错:', hasFallback ? '✅ 有' : '⚠️ 无');

// ===== 3. API 调用逻辑检查 =====
console.log('\n【3. API 调用链路检查】');

// 检查 _callAI 函数
const callAIMatch = speakEngine.match(/async _callAI\([^)]+\)\s*\{([\s\S]*?)^\s*\},\s*$/m);
if (callAIMatch) {
  const callAI = callAIMatch[1];
  console.log('  - API 端点:', callAI.includes('deepseek.com') ? '✅ api.deepseek.com' : '❌ 未知');
  console.log('  - 模型:', callAI.includes('deepseek-chat') ? '✅ deepseek-chat' : '❌ 未知');
  console.log('  - Key 读取:', callAI.includes('S.apiConfig') ? '✅ 从 S.apiConfig 读取' : '❌ 未读取');
  console.log('  - 超时设置:', callAI.includes('AbortController') || callAI.includes('15000') ? '✅ 15秒超时' : '⚠️ 无超时');
  console.log('  - 重试逻辑:', callAI.includes('attempt') && callAI.includes('retry') ? '✅ 有重试' : '⚠️ 无重试');
}

// 检查降级逻辑
const handleInputMatch = speakEngine.match(/async handleInput\([^)]+\)\s*\{([\s\S]*?)^\s*\},\s*$/m);
if (handleInputMatch) {
  const handleInput = handleInputMatch[1];
  console.log('\n  对话处理流程:');
  console.log('    1. 调用 _callAI (AI API)');
  console.log('    2. 如果 reply 为空，调用 _fallback (降级对话树)');
  console.log('    3. 保存对话历史');
  console.log('    4. 调用 speak() TTS 朗读');
}

// ===== 4. 检查"机械重复"的可能原因 =====
console.log('\n【4. "机械重复" 原因分析】');

// 检查降级模式鼓励语
const fallbackMatch = speakEngine.match(/const teacherGood = \{([\s\S]*?)\};/);
if (fallbackMatch) {
  const goodPhrases = fallbackMatch[1].match(/['"`]([^'"`]+)['"`]/g);
  console.log('  降级模式鼓励语数量:', goodPhrases ? goodPhrases.length : 0);
  console.log('  - 每个老师有', goodPhrases ? Math.floor(goodPhrases.length / 3) : 0, '条鼓励语');
  console.log('  - 随机选择一条，但模式固定');
}

// 检查 AI prompt
const emmaPromptMatch = speakEngine.match(/emma:\s*\{[\s\S]*?systemPrompt:\s*'([^']+)'/);
if (emmaPromptMatch) {
  const prompt = emmaPromptMatch[1];
  console.log('\n  Emma 的 System Prompt:');
  console.log('    "' + prompt.slice(0, 80) + '..."');
  console.log('  - 限制回复长度: 1-3句话');
  console.log('  - 使用简单词汇');
  console.log('  - 鼓励使用感叹号');
}

// ===== 5. 检查关键问题 =====
console.log('\n【5. 关键问题定位】');

// 检查是否有 console.log 调试信息
const debugLogs = speakEngine.match(/console\.log/g);
console.log('  - speak-engine-v5.js 调试日志:', debugLogs ? debugLogs.length : 0, '处');

// 检查 index.html 中的初始化
const indexHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const initMatch = indexHtml.match(/SpeakEngineV5\.init\(\)/);
console.log('  - 口语引擎初始化:', initMatch ? '✅ 有 init() 调用' : '❌ 无初始化');

// 检查 API key 保存逻辑
const saveKeyMatch = indexHtml.match(/function saveDeepseekKey\(\)\s*\{([\s\S]*?)^\s*\}/m);
if (saveKeyMatch) {
  const saveKey = saveKeyMatch[1];
  console.log('  - API key 保存:', saveKey.includes('saveState()') ? '✅ 调用 saveState()' : '⚠️ 可能未保存');
  console.log('  - API key 读取:', saveKey.includes('S.apiConfig') ? '✅ 读取 S.apiConfig' : '⚠️ 可能未读取');
}

// ===== 6. Firefox 特殊问题 =====
console.log('\n【6. Firefox 特有问题分析】');
console.log('  🔴 问题1: Firefox 没有内置 TTS 引擎');
console.log('     - Windows Firefox 的 speechSynthesis.getVoices() 可能返回空数组');
console.log('     - 导致语音无法播放');
console.log('  🔴 问题2: Firefox 对 Web Speech API 支持不完整');
console.log('     - SpeechRecognition 支持较差');
console.log('     - 部分浏览器版本不支持');
console.log('  🟡 问题3: API 调用可能受 Firefox 隐私保护影响');
console.log('     - Firefox 的跟踪保护可能阻止第三方 API 调用');
console.log('     - 特别是直接调用 api.deepseek.com');

// ===== 7. 解决方案 =====
console.log('\n【7. 解决方案】');
console.log('  方案1: 修复 Firefox TTS 兼容性（推荐）');
console.log('     - 添加 Firefox TTS 检测和降级提示');
console.log('     - 使用更可靠的语音选择逻辑');
console.log('  方案2: 增强降级对话模式的自然度');
console.log('     - 增加更多随机变化');
console.log('     - 添加上下文感知的回复');
console.log('  方案3: 检查 Firefox 隐私设置');
console.log('     - 关闭跟踪保护对 DeepSeek API 的影响');
console.log('     - 检查是否阻止了跨域请求');

console.log('\n=== 诊断完成 ===');
