const fs = require('fs');
const code = fs.readFileSync('f:/qiquleyuan/quiqu-xueyuan-master/quiqu-xueyuan-master/data/math-data.js', 'utf8');
const ids = code.match(/id:\s*['"]q/g);
console.log('math problems:', ids ? ids.length : 0);

const html = fs.readFileSync('f:/qiquleyuan/quiqu-xueyuan-master/quiqu-xueyuan-master/index.html', 'utf8');
const words = html.match(/'([^']+)'[\s\n]*:[\s\n]*\{[\s\n]*pos:/g);
console.log('eng words:', words ? words.length : 0);

// Check new geometry problem data format
const geoProbs = code.match(/visualType[\s\S]{0,200}geometry/g);
console.log('geometry problems:', geoProbs ? geoProbs.length : 0);

// Check fractionStrip data format
const fsProbs = code.match(/visualType[\s\S]{0,200}fractionStrip/g);
console.log('fractionStrip problems:', fsProbs ? fsProbs.length : 0);

// Check numberLine data format
const nlProbs = code.match(/visualType[\s\S]{0,200}numberLine/g);
console.log('numberLine problems:', nlProbs ? nlProbs.length : 0);
