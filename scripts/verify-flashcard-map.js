// 闪卡配图映射交叉审计
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// 提取 ENG_PHOTO_MAP
const m1 = html.match(/const ENG_PHOTO_MAP=\{[\s\S]*?\n\};/);
const photoSrc = m1 ? m1[0] : '';
const photoKeys = [...photoSrc.matchAll(/'([a-z][a-z ]*?)'\s*:/g)].map(x => x[1]);
console.log('ENG_PHOTO_MAP 词条数:', photoKeys.length);

// 提取 ENG_ABSTRACT_WORDS（Set 结构）
const m2 = html.match(/ENG_ABSTRACT_WORDS=new Set\(\[([^\]]*)\]\)/);
const abstractSrc = m2 ? m2[0] : '';
const abstractWords = [...abstractSrc.matchAll(/'([a-z]+)'/g)].map(x => x[1]);
console.log('ENG_ABSTRACT_WORDS 数:', abstractWords.length);

// 提取 emojiMap（engEmojiFallback 内）
const m3 = html.match(/var emojiMap=\{[\s\S]*?\n  \}/) || html.match(/emojiMap=\{[\s\S]*?\n\s*\}/);
let emojiPairs = [];
if (m3) {
  emojiPairs = [...m3[0].matchAll(/([a-zA-Z]+):'([^']*)'/g)];
  console.log('emojiMap 词条数:', emojiPairs.length);
  // 卫生检查：值必须是 emoji（非 ASCII 开头），不能是纯中文/英文串
  const bad = emojiPairs.filter(([, , v]) => !v || /^[\u4e00-\u9fa5A-Za-z]/.test(v)); // keycap 1️⃣ 以数字开头属正常
  console.log('emojiMap 非 emoji 值:', bad.length ? bad.map(([, k, v]) => k + '→' + v).join(', ') : '无 ✓');
} else {
  console.log('emojiMap 未找到！用宽松匹配重试');
  const m3b = html.match(/emojiMap=\{[\s\S]{0,4000}?\}/);
  if (m3b) {
    emojiPairs = [...m3b[0].matchAll(/([a-zA-Z]+):'([^']*)'/g)];
    console.log('宽松 emojiMap 词条数:', emojiPairs.length);
    const bad = emojiPairs.filter(([, , v]) => !v || /^[\u4e00-\u9fa5A-Za-z]/.test(v)); // keycap 1️⃣ 以数字开头属正常
    console.log('emojiMap 非 emoji 值:', bad.length ? bad.map(([, k, v]) => k + '→' + v).join(', ') : '无 ✓');
  }
}

// 场景词 + 词库词全集
const sm = fs.readFileSync('engine/scene-manager.js', 'utf8');
const sceneBlock = sm.match(/const SCENES = \[[\s\S]*?\n  \];/)[0];
const sceneWords = [...new Set([...sceneBlock.matchAll(/'([a-z]+)'/g)].map(x => x[1]).filter(w => !['supermarket', 'restaurant', 'school', 'park', 'weather', 'clothes', 'animals', 'birthday'].includes(w)))];
const vocabBlock = html.match(/const VOCAB_BY_GRADE = \{[\s\S]*?\n\};/)[0];
const vocabWords = [...vocabBlock.matchAll(/w:'([a-z]+)'/g)].map(x => x[1]);
const all = [...new Set([...sceneWords, ...vocabWords])];
console.log('\n需要配图的词全集:', all.length);

// 覆盖检查：具体名词应有 PHOTO_MAP 覆盖；在 ABSTRACT 里的应确属抽象词
const photoSet = new Set(photoKeys);
const abstractSet = new Set(abstractWords);
const uncovered = all.filter(w => !photoSet.has(w) && !abstractSet.has(w));
console.log('两边都未覆盖（闪卡会拿词本身当 Flickr 标签）:', uncovered.join(', ') || '无 ✓');

// 抽象词表里混入的具体名词（会错误地走 emoji 卡）
const suspiciousAbstract = abstractWords.filter(w => ['apple', 'bread', 'milk', 'egg', 'rice', 'noodle', 'chicken', 'juice', 'soup', 'book', 'pen', 'desk', 'chair', 'teacher', 'tree', 'flower', 'bird', 'dog', 'sun', 'rain', 'cloud', 'shirt', 'pants', 'shoes', 'hat', 'dress', 'elephant', 'lion', 'monkey', 'rabbit', 'tiger', 'cake', 'candle', 'gift', 'ruler', 'pencil', 'eraser', 'crayon', 'bag', 'classroom', 'window', 'door', 'picture', 'blackboard'].includes(w));
console.log('ABSTRACT 混入具体名词:', suspiciousAbstract.join(', ') || '无 ✓');

// emojiMap 覆盖：抽象词应都有 emoji 兜底
const emojiKeys = new Set(emojiPairs.map(([, k]) => k));
const absNoEmoji = abstractWords.filter(w => !emojiKeys.has(w));
console.log('抽象词无 emoji 兜底:', absNoEmoji.join(', ') || '无 ✓');
