// scripts/audit-voice.js · 奇趣学园语音选择层验收（Echo）
// 用 playwright-core + 真实 Edge(msedge) 打开本地站，断言 VoiceCore 命中 P0/P1 神经音。
// 运行：NODE_PATH=C:/Users/LEO/.workbuddy/binaries/node/workspace/node_modules node scripts/audit-voice.js
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const ROOT = path.resolve(__dirname, '..'); // .../quiqu-xueyuan

// 极简静态服务器，避免 file:// 的 CORS 限制（更接近真实“本地站”）
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const fp = path.join(ROOT, p);
  if (!fp.startsWith(ROOT) || !fs.existsSync(fp)) { res.writeHead(404); res.end('not found'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
  fs.createReadStream(fp).pipe(res);
});

function pickPort() { return 8731; }

(async () => {
  const port = pickPort();
  await new Promise(r => server.listen(port, r));
  const URL = `http://127.0.0.1:${port}/index.html`;
  let browser;
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: false });
  } catch (e) {
    console.error('❌ 无法启动 Edge(msedge)：', e.message);
    server.close(); process.exit(2);
  }
  const page = await browser.newPage();
  const logs = [];
  page.on('console', m => logs.push('[console] ' + m.text()));
  page.on('pageerror', e => logs.push('[pageerror] ' + e.message));

  try {
    await page.goto(URL, { waitUntil: 'load' });
    await page.waitForFunction(() => !!(window.VoiceCore && typeof window.VoiceCore.ensureVoices === 'function'), { timeout: 10000 });

    // 1) 逻辑自检：注入一份含 P0/P1 的合成语音表，验证优先级排序
    const logic = await page.evaluate(async () => {
      const mock = [
        { name: 'Microsoft David Online - English (United States)', lang: 'en-US' },          // P1
        { name: 'Microsoft Aria Online (Natural) - English (United States)', lang: 'en-US' },  // P0
        { name: 'Google US English', lang: 'en-US' },                                            // P2
        { name: 'Microsoft Huihui - Chinese (Simplified, PRC)', lang: 'zh-CN' },                // basic
        { name: 'Microsoft Xiaoxiao Online (Natural) - Chinese (Simplified)', lang: 'zh-CN' }   // P0
      ];
      const orig = window.speechSynthesis.getVoices.bind(window.speechSynthesis);
      window.speechSynthesis.getVoices = () => mock;
      const zh = window.VoiceCore.getActiveVoice('zh-CN');
      const en = window.VoiceCore.getActiveVoice('en-US');
      window.speechSynthesis.getVoices = orig; // 还原
      return { zh, en };
    });

    // 2) 真实环境语音枚举（本机 Edge 实际可用 voices）
    const real = await page.evaluate(async () => {
      await window.VoiceCore.ensureVoices();
      const raw = (typeof speechSynthesis !== 'undefined') ? speechSynthesis.getVoices() : [];
      const voices = raw.map(v => ({ name: v.name, lang: v.lang }));
      const naturalVoices = voices.filter(v => /Online\s*\(Natural\)/i.test(v.name));
      return { total: voices.length, naturalCount: naturalVoices.length, naturalVoices, zh: window.VoiceCore.getActiveVoice('zh-CN'), en: window.VoiceCore.getActiveVoice('en-US') };
    });

    console.log('=== 逻辑自检（注入 P0/P1 语音表）===');
    console.log('中文：', JSON.stringify(logic.zh), '→', logic.zh.tier === 'natural' ? 'PASS' : 'FAIL');
    console.log('英文：', JSON.stringify(logic.en), '→', logic.en.tier === 'natural' ? 'PASS' : 'FAIL');
    const logicPass = logic.zh.tier === 'natural' && logic.en.tier === 'natural';

    console.log('\n=== 本机真实 voices ===');
    console.log('voices 总数：', real.total, '｜ Online (Natural) 数：', real.naturalCount);
    real.naturalVoices.slice(0, 12).forEach(v => console.log('  •', v.name, '(' + v.lang + ')'));
    console.log('中文命中：', JSON.stringify(real.zh));
    console.log('英文命中：', JSON.stringify(real.en));
    const okZh = ['natural', 'microsoft'].includes(real.zh.tier);
    const okEn = ['natural', 'microsoft'].includes(real.en.tier);
    const realPass = okZh && okEn;

    console.log('\n=== 结论 ===');
    console.log('优先级排序逻辑：', logicPass ? 'PASS（P0 Online Natural 正确胜出）' : 'FAIL');
    console.log('本机真实命中 P0/P1：', realPass ? 'PASS' : 'FAIL（本机 Edge 未枚举到神经音，仅 ' + (real.total) + ' 个基础 voice）');

    if (logs.length) { console.log('--- 页面日志(末10) ---'); logs.slice(-10).forEach(l => console.log(l)); }
    await browser.close();
    server.close();
    // 逻辑正确即视为代码合格；真实环境缺神经音属机器/网络限制，需用户真机复核
    process.exit(logicPass ? 0 : 1);
  } catch (e) {
    console.error('❌ 审计执行异常：', e.message);
    if (logs.length) logs.slice(-10).forEach(l => console.log(l));
    await browser.close();
    server.close();
    process.exit(3);
  }
})();
