// 临时诊断脚本：在 node 里实测 Edge 神经语音 WebSocket，确定正确 DRM 令牌算法
const TOKEN = '6A5AA1D4EAFF4E9FB37E23D68491D6F4';
const SEC_VER = '1-143.0.3650.75';
const HOST = 'speech.platform.bing.com';

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

async function genGec(shiftSec, multiply, round) {
  let ticks = Math.floor(Date.now() / 1000 + 11644473600 + (shiftSec || 0));
  if (round) ticks -= ticks % 300;
  if (multiply) ticks = ticks * 10000000;
  const buf = new TextEncoder().encode(String(ticks) + TOKEN);
  const digest = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
}

const VOICE = 'en-US-EmmaMultilingualNeural';
const TEXT = 'Hello, this is a test.';

function buildMsg(text, voice) {
  const ts = new Date().toUTCString().replace('GMT', 'GMT+0000 (Coordinated Universal Time)');
  const speechConfig = `X-Timestamp:${ts}\r\nContent-Type:application/json; charset=utf-8\r\nPath:speech.config\r\n\r\n{"context":{"synthesis":{"audio":{"metadataoptions":{"sentenceBoundaryEnabled":"false","wordBoundaryEnabled":"false"},"outputFormat":"audio-24khz-48kbitrate-mono-mp3"}}}}`;
  const escaped = String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const ssml = `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'><voice name='${voice}'><prosody pitch='+0Hz' rate='+0%' volume='+0%'>${escaped}</prosody></voice></speak>`;
  const ssmlMsg = `X-RequestId:${uuid()}\r\nContent-Type:application/ssml+xml\r\nX-Timestamp:${ts}\r\nPath:ssml\r\n\r\n${ssml}`;
  return { speechConfig, ssmlMsg };
}

async function attempt(multiply, shift, round) {
  const gec = await genGec(shift, multiply, round);
  const url = `wss://${HOST}/consumer/speech/synthesize/readaloud/edge/v1?TrustedClientToken=${TOKEN}&Sec-MS-GEC=${gec}&Sec-MS-GEC-Version=${SEC_VER}&ConnectionId=${uuid()}`;
  return new Promise((resolve) => {
    let ws;
    try { ws = new WebSocket(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.3650.75 Safari/537.36', 'Origin': 'https://www.bing.com' } }); } catch (e) { return resolve({ ok: false, err: 'new WS: ' + e.message }); }
    ws.binaryType = 'arraybuffer';
    let audioBytes = 0;
    let gotTurnEnd = false;
    let firstStr = '';
    const timer = setTimeout(() => { try { ws.close(); } catch (e) {} resolve({ ok: false, err: 'timeout', audioBytes, firstStr }); }, 12000);
    ws.onopen = () => {
      const { speechConfig, ssmlMsg } = buildMsg(TEXT, VOICE);
      ws.send(speechConfig);
      ws.send(ssmlMsg);
    };
    ws.onmessage = (ev) => {
      if (typeof ev.data === 'string') {
        if (!firstStr) firstStr = ev.data.slice(0, 80).replace(/\n/g, ' ');
        if (ev.data.indexOf('Path:turn.end') >= 0) {
          gotTurnEnd = true;
          clearTimeout(timer);
          try { ws.close(); } catch (e) {}
          resolve({ ok: audioBytes > 1000, audioBytes, firstStr });
        }
      } else if (ev.data && ev.data.byteLength > 2) {
        const headLen = new DataView(ev.data).getUint16(0);
        if (ev.data.byteLength > 2 + headLen) audioBytes += ev.data.byteLength - 2 - headLen;
      }
    };
    ws.onerror = (e) => { /* resolve on close */ };
    ws.onclose = (e) => { clearTimeout(timer); if (!gotTurnEnd) resolve({ ok: false, err: 'close code=' + (e && e.code), audioBytes, firstStr }); };
  });
}

(async () => {
  const variants = [
    { name: 'A: ticks(秒,无×1e7,无取整)', multiply: false, shift: 0 },
    { name: 'B: ticks(秒,无×1e7,取整300)', multiply: false, shift: 0, round: true },
    { name: 'B2: ticks(秒,无×1e7,shift-300取整)', multiply: false, shift: -300, round: true },
    { name: 'C: ticks×1e7(原代码)', multiply: true, shift: 0 },
    { name: 'D: 秒,shift+300', multiply: false, shift: 300 },
    { name: 'E: 秒,shift-300', multiply: false, shift: -300 },
  ];
  for (const v of variants) {
    const r = await attempt(v.multiply, v.shift);
    console.log(`[${v.name}] =>`, JSON.stringify(r));
  }
})();
