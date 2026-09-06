// 全项目数据盘点：题目 / 单词 / 对话 / 图片
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const eng = fs.readFileSync('engine/english-flow-v5.js', 'utf8');
const sm = fs.readFileSync('engine/scene-manager.js', 'utf8');
const spk = fs.readFileSync('engine/speak-engine-v5.js', 'utf8');

console.log('== index.html ==');
console.log("q: 出现:", (html.match(/\bq:/g) || []).length);
console.log("w:' 单词:", (html.match(/\bw:'/g) || []).length);
console.log('questions: 数组:', (html.match(/questions\s*[:=]/g) || []).length);
console.log('图片引用 assets/:', (html.match(/assets\/[A-Za-z0-9_\-\/.]+\.(png|jpg|jpeg|svg|webp)/g) || []).length, '唯一:', new Set(html.match(/assets\/[A-Za-z0-9_\-\/.]+\.(png|jpg|jpeg|svg|webp)/g) || []).size);

console.log('== english-flow-v5.js ==');
console.log("w:' 单词:", (eng.match(/\bw:'/g) || []).length);
console.log('对话模板:', (eng.match(/\b(en|say|text)\s*:/g) || []).length);

console.log('== scene-manager.js ==');
console.log('场景 words 数组:', (sm.match(/words\s*:\s*\[/g) || []).length);
console.log("单词字符串:", new Set((sm.match(/'([a-z][a-z ]{1,20})'/g) || []).map(x => x[1])).size);

console.log('== speak-engine-v5.js ==');
console.log('场景/对话数据:', (spk.match(/\b(SCENES|scenes|DIALOGS|dialogs)\b/g) || []).length);

console.log('== 资产目录 ==');
function walk(d) {
  let n = 0;
  for (const f of fs.readdirSync(d)) {
    const p = d + '/' + f;
    if (fs.statSync(p).isDirectory()) n += walk(p);
    else if (/\.(png|jpg|jpeg|svg|webp|gif)$/i.test(f)) n++;
  }
  return n;
}
for (const dir of ['assets']) {
  try { console.log(dir, '图片总数:', walk(dir)); } catch (e) { console.log(dir, 'ERR', e.message); }
}
