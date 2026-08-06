// 英语词汇扩充：添加新词汇和例句
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'word-dict.js');
const original = fs.readFileSync(filePath, 'utf8');

// 新词汇
const newWords = [
  { word: 'happy', pos: 'adj. 形容词', def: '快乐的。感到高兴的。', ex: 'I am happy today.' },
  { word: 'sad', pos: 'adj. 形容词', def: '悲伤的。不高兴的。', ex: 'She looks sad.' },
  { word: 'hungry', pos: 'adj. 形容词', def: '饥饿的。想吃东西。', ex: 'I am hungry for lunch.' },
  { word: 'thirsty', pos: 'adj. 形容词', def: '口渴的。想喝水。', ex: 'I am thirsty after running.' },
  { word: 'tired', pos: 'adj. 形容词', def: '疲惫的。累了。', ex: 'I am tired after school.' },
  { word: 'busy', pos: 'adj. 形容词', def: '忙碌的。没空。', ex: 'Mom is busy cooking.' },
  { word: 'clean', pos: 'adj./v.', def: '干净的；打扫。', ex: 'Please clean your room.' },
  { word: 'dirty', pos: 'adj. 形容词', def: '脏的。不干净。', ex: 'The floor is dirty.' },
  { word: 'weak', pos: 'adj. 形容词', def: '虚弱的。没力气。', ex: 'He feels weak today.' },
  { word: 'important', pos: 'adj. 形容词', def: '重要的。有重大意义的。', ex: 'Study is important for us.' },
  { word: 'different', pos: 'adj. 形容词', def: '不同的。有区别。', ex: 'We have different hobbies.' },
  { word: 'famous', pos: 'adj. 形容词', def: '著名的。有名气的。', ex: 'He is a famous singer.' },
  { word: 'popular', pos: 'adj. 形容词', def: '受欢迎的。大家都喜欢。', ex: 'This game is popular with kids.' },
  { word: 'dangerous', pos: 'adj. 形容词', def: '危险的。不安全的。', ex: 'It is dangerous to swim here.' },
  { word: 'exciting', pos: 'adj. 形容词', def: '令人兴奋的。很刺激。', ex: 'The game is exciting.' },
  { word: 'interesting', pos: 'adj. 形容词', def: '有趣的。有意思的。', ex: 'This book is interesting.' },
  { word: 'enjoy', pos: 'v. 动词', def: '享受。喜欢做某事。', ex: 'I enjoy reading books.' },
  { word: 'remember', pos: 'v. 动词', def: '记得。不忘记。', ex: 'I remember his name.' },
  { word: 'decide', pos: 'v. 动词', def: '决定。做出选择。', ex: 'I decide to study hard.' },
  { word: 'practice', pos: 'v./n.', def: '练习。反复做以熟练。', ex: 'Practice makes perfect.' },
  { word: 'improve', pos: 'v. 动词', def: '提高。变得更好。', ex: 'I want to improve my English.' },
  { word: 'understand', pos: 'v. 动词', def: '理解。明白意思。', ex: 'I understand the rule.' },
  { word: 'believe', pos: 'v. 动词', def: '相信。认为真的。', ex: 'I believe you can do it.' },
  { word: 'experience', pos: 'n./v.', def: '经验；经历。做过的事。', ex: 'He has much experience.' },
  { word: 'environment', pos: 'n. 名词', def: '环境。周围的自然条件。', ex: 'We should protect the environment.' },
  { word: 'traditional', pos: 'adj. 形容词', def: '传统的。老规矩的。', ex: 'This is a traditional festival.' },
  { word: 'international', pos: 'adj. 形容词', def: '国际的。跨国界的。', ex: 'This is an international school.' },
  { word: 'knowledge', pos: 'n. 名词', def: '知识。学到的东西。', ex: 'Knowledge is power.' },
  { word: 'technology', pos: 'n. 名词', def: '技术。科技手段。', ex: 'Technology changes our life.' },
  { word: 'temperature', pos: 'n. 名词', def: '温度。冷热程度。', ex: 'The temperature is 30 degrees.' },
  { word: 'weather', pos: 'n. 名词', def: '天气。晴雨冷热。', ex: 'The weather is sunny today.' },
  { word: 'communicate', pos: 'v. 动词', def: '交流。传递信息。', ex: 'We communicate by phone.' },
  { word: 'organize', pos: 'v. 动词', def: '组织。安排整理。', ex: 'We organize a school trip.' },
  { word: 'consider', pos: 'v. 动词', def: '考虑。仔细想。', ex: 'Please consider my advice.' },
  { word: 'suggest', pos: 'v. 动词', def: '建议。提出意见。', ex: 'I suggest we go early.' },
  { word: 'achieve', pos: 'v. 动词', def: '达到。取得成功。', ex: 'We should achieve our goals.' },
  { word: 'develop', pos: 'v. 动词', def: '发展。逐步成长。', ex: 'We need to develop new skills.' },
  { word: 'describe', pos: 'v. 动词', def: '描述。用话说明。', ex: 'Can you describe the picture?' },
  { word: 'influence', pos: 'n./v.', def: '影响。对人或事的作用。', ex: 'Books influence our thinking.' },
  { word: 'respect', pos: 'n./v.', def: '尊重。敬重他人。', ex: 'We should respect elders.' },
  { word: 'responsible', pos: 'adj. 形容词', def: '负责的。有责任的。', ex: 'He is responsible for the project.' },
  { word: 'necessary', pos: 'adj. 形容词', def: '必要的。必须的。', ex: 'It is necessary to study hard.' },
  { word: 'successful', pos: 'adj. 形容词', def: '成功的。达到目的的。', ex: 'She is a successful writer.' },
  { word: 'careful', pos: 'adj. 形容词', def: '小心的。仔细的。', ex: 'Be careful with the glass.' },
  { word: 'wonderful', pos: 'adj. 形容词', def: '精彩的。极好的。', ex: 'What a wonderful day!' },
  { word: 'possible', pos: 'adj. 形容词', def: '可能的。可以实现的。', ex: 'Anything is possible.' },
  { word: 'comfortable', pos: 'adj. 形容词', def: '舒适的。舒服自在。', ex: 'This chair is comfortable.' },
];

// 收集已有词汇 - 用简单字符串匹配
const existingWords = new Set();
// 匹配格式: 'word': {
const re = /'([^']+)'\s*:\s*\{/g;
let m;
while ((m = re.exec(original)) !== null) {
  existingWords.add(m[1].toLowerCase());
}
console.log('现有词汇数:', existingWords.size);
console.log('包含 happy?', existingWords.has('happy'));
console.log('包含 answer?', existingWords.has('answer'));

// 过滤已存在的词汇
const newEntries = newWords.filter(w => !existingWords.has(w.word.toLowerCase()));
console.log('新增词汇数:', newEntries.length);

// 找到文件末尾的 };（Windows \r\n 或 Unix \n）
const lastCRLF = original.lastIndexOf('};\r\n');
const lastLF = original.lastIndexOf('};\n');
const endPos = lastCRLF > lastLF ? lastCRLF : lastLF;
console.log('插入位置:', endPos, '文件长度:', original.length);

if (endPos === -1) {
  console.error('未找到 WORD_DICT 结束位置');
  process.exit(1);
}

// 构建新条目
const newItems = newEntries.map(w => {
  return `  '${w.word}': { pos: '${w.pos}', def: '${w.def}', ex: '${w.ex}' }`;
}).join(',\n');

// 插入：去掉原文件末尾的 , 换行，再加入新条目
let before = original.substring(0, endPos);
// 去掉末尾可能的 ,\r\n 或 ,\n
before = before.replace(/,\r?\n$/, '');
const result = before + ',\n' + newItems + original.substring(endPos);

fs.writeFileSync(filePath, result, 'utf8');
console.log('英语词汇扩充完成');

// 验证
const w = {};
global.window = w;
require(filePath);
console.log('扩充后总词汇数:', Object.keys(w.WORD_DICT || {}).length);
console.log('包含 happy?', !!w.WORD_DICT && w.WORD_DICT.happy);
console.log('包含 comfortable?', !!w.WORD_DICT && w.WORD_DICT.comfortable);
