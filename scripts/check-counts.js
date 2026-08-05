const fs = require('fs');

const files = [
    'math-data-7a.js',
    'math-data-7b.js',
    'math-data-8a.js',
    'math-data-8b.js',
    'math-data-9a.js',
    'math-data-9b.js'
];

for (const file of files) {
    const content = fs.readFileSync(`f:/qiquleyuan/quiqu-xueyuan-master/quiqu-xueyuan-master/data/${file}`, 'utf8');
    const matches = content.match(/"id":\s*"[^"]+"/g);
    const knowledgeItems = matches ? matches.filter(m => m.includes('-0') || m.includes('-1') || m.includes('-2') || m.includes('-3') || m.includes('-4') || m.includes('-5') || m.includes('-6') || m.includes('-7') || m.includes('-8') || m.includes('-9')).length : 0;
    console.log(`${file}: ${matches ? matches.length : 0} total ID items`);
}