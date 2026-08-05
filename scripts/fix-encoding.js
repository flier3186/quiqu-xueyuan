const fs = require('fs');

const files = [
    'f:/qiquleyuan/quiqu-xueyuan-master/quiqu-xueyuan-master/data/math-data-7a.js',
    'f:/qiquleyuan/quiqu-xueyuan-master/quiqu-xueyuan-master/data/math-data-7b.js'
];

for (const file of files) {
    // Read as buffer to preserve raw bytes
    const buf = fs.readFileSync(file);
    
    // Remove BOM if present
    let content = buf.toString('utf8');
    if (content.charCodeAt(0) === 0xFEFF) {
        content = content.substring(1);
    }
    
    // Write back without BOM
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed: ${file}`);
}

console.log('Done');
