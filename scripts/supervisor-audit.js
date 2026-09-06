/**
 * supervisor-audit.js — 监督员验收清单实测（2026-09-06）
 * 依据 docs/TEAM-CHARTER.md 验收清单，逐项客观取证。
 */
const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');

const URL = 'http://127.0.0.1:8141/index.html';
const OUT = path.join(__dirname, '..', 'selfcheck', 'supervisor');
fs.mkdirSync(OUT, { recursive: true });
const lines = [];
const log = (s) => { lines.push(s); console.log(s); };

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  const page = await browser.newPage({ viewport: { width: 900, height: 1400 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2500);

  // ---- 清单5：UI 重设计证据 ----
  const ui = await page.evaluate(() => {
    const bg = getComputedStyle(document.body).backgroundImage + ' / ' + getComputedStyle(document.body).backgroundColor;
    const font = getComputedStyle(document.body).fontSize;
    const tabs = document.querySelectorAll('.bottom-tab, [class*="tab"]').length;
    return { bg, font, tabs };
  });
  log(`[清单5-UI] body背景=${ui.bg.slice(0,80)} | 正文字号=${ui.font}`);
  await page.screenshot({ path: path.join(OUT, 'ui-home.png'), fullPage: false });

  // ---- 清单3：发音 ----
  const voices = await page.evaluate(() => speechSynthesis.getVoices().map(v => v.name));
  log(`[清单3-语音] 本机Edge枚举voices(${voices.length}): ${voices.slice(0,5).join(' | ')}`);
  const av1 = await page.evaluate(() => window.VoiceCore ? VoiceCore.getActiveVoice('zh') : 'NO_VOICECORE');
  const av2 = await page.evaluate(() => window.VoiceCore ? VoiceCore.getActiveVoice('en') : 'NO_VOICECORE');
  log(`[清单3-语音] zh命中=${JSON.stringify(av1)} | en命中=${JSON.stringify(av2)}`);
  const checkBtn = await page.evaluate(() => {
    const b = Array.from(document.querySelectorAll('button')).find(x => /发音体检/.test(x.textContent || ''));
    if (b) { b.click(); return true; } return false;
  });
  await page.waitForTimeout(1500);
  const checkOut = await page.evaluate(() => {
    const el = document.getElementById('efVoiceCheckOut') || document.querySelector('[id*="oiceCheck"]');
    return el ? el.textContent.slice(0, 120) : '(无输出节点)';
  });
  log(`[清单3-语音] 体检按钮=${checkBtn} 输出=${checkOut}`);

  // ---- 清单1+2：数学练习答案泄漏与比例（连做5题） ----
  await page.evaluate(() => {
    const t = document.querySelector('[data-view="math"]') || Array.from(document.querySelectorAll('[onclick]')).find(x => /数学/.test(x.textContent || ''));
    if (t) t.click();
  });
  await page.waitForTimeout(1200);
  const isNum = (s, n) => new RegExp('(^|[^0-9.])' + String(n).replace('.', '\\.') + '(?=[^0-9.]|$)').test(s);
  for (let q = 0; q < 5; q++) {
    const probe = await page.evaluate(({ isStandaloneSrc }) => {
      const area = document.querySelector('#contentArea') || document.body;
      const svgTexts = [...area.querySelectorAll('svg text')].map(t => t.textContent.trim());
      const formula = (document.querySelector('.math-formula, [class*="formula"]') || {}).textContent || '';
      const bodyTxt = area.innerText || '';
      return { svgTexts, formula: formula.trim().slice(0, 60), bodySnippet: bodyTxt.slice(0, 0) };
    }, {}).catch(() => null);
    // 读取当前题的 answer（从全局会话取，用于对照）
    const ans = await page.evaluate(() => {
      try {
        const s = window.MATH_SESSION || window.S || null;
        if (s && s.current && s.current.answer != null) return s.current.answer;
        if (window.MathFlowV5 && MathFlowV5._current && MathFlowV5._current.answer != null) return MathFlowV5._current.answer;
      } catch (e) {}
      return null;
    });
    let leakTxt = [];
    if (ans != null && probe) {
      leakTxt = probe.svgTexts.filter(t => new RegExp('(^|[^0-9.])' + String(ans).replace('.', '\\.') + '(?=[^0-9.]|$)').test(t));
    }
    // barModel 比例实测
    const bar = await page.evaluate(() => {
      const rects = [...document.querySelectorAll('#contentArea svg rect')].filter(rc => {
        const h = parseFloat(rc.getAttribute('height')) || 0, w = parseFloat(rc.getAttribute('width')) || 0;
        return h >= 20 && w > 5;
      }).map(rc => parseFloat(rc.getAttribute('width')));
      return rects;
    });
    log(`[清单1-题${q + 1}] answer=${ans} formula="${probe ? probe.formula : '?'}" 图形文本数=${probe ? probe.svgTexts.length : 0} 泄漏文本=${leakTxt.length ? leakTxt.join(';') : '无'}`);
    if (bar.length >= 2) log(`[清单2-题${q + 1}] 条形宽(px)=${bar.join(',')} 最大/最小=${(Math.max(...bar) / Math.min(...bar)).toFixed(2)}`);
    await page.screenshot({ path: path.join(OUT, `math-q${q + 1}.png`) });
    // 进入下一题：点"下一题/提交"
    await page.evaluate(() => {
      const bs = Array.from(document.querySelectorAll('#contentArea button, #contentArea [onclick]'));
      const submit = bs.find(x => /提交|确定/.test(x.textContent || ''));
      const next = bs.find(x => /下一题|跳过/.test(x.textContent || ''));
      (submit || next || bs[bs.length - 1]).click();
    });
    await page.waitForTimeout(900);
  }

  log(`[回归] pageerror=${errors.length}${errors.length ? ' -> ' + errors[0] : ''}`);
  await browser.close();
  fs.writeFileSync(path.join(OUT, 'audit-log.txt'), lines.join('\n'), 'utf8');
  console.log('DONE');
})();
