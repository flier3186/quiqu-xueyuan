const fs = require('fs');

const files = [
    'math-data-7a.js',
    'math-data-7b.js',
    'math-data-8a.js',
    'math-data-8b.js',
    'math-data-9a.js',
    'math-data-9b.js'
];

const prefixMap = {
    'math-data-7a.js': '7A-',
    'math-data-7b.js': '7B-',
    'math-data-8a.js': '8A-',
    'math-data-8b.js': '8B-',
    'math-data-9a.js': '9A-',
    'math-data-9b.js': '9B-'
};

for (const file of files) {
    const content = fs.readFileSync(`f:/qiquleyuan/quiqu-xueyuan-master/quiqu-xueyuan-master/data/${file}`, 'utf8');
    const prefix = prefixMap[file];
    // Count occurrences of the prefix in "id" fields
    const regex = new RegExp(`"id":\\s*"${prefix.replace('-', '\\-')}\\d+"`, 'g');
    const matches = content.match(regex);
    console.log(`${file}: ${matches ? matches.length : 0} knowledge items`);
}