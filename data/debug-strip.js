var fs = require('fs');
var code = fs.readFileSync('data/math-data.js', 'utf8').replace(/^\uFEFF/, '');
console.log('First 400 chars:', JSON.stringify(code.slice(0, 400)));

var stripped = code.replace(/^\/\/.*(?:\n\/\/.*)*\n/, '').replace(/^window\.MATH_BY_GRADE\s*=\s*/, '');
console.log('\nFirst 200 of stripped:', JSON.stringify(stripped.slice(0, 200)));
console.log('Ends with };:', stripped.trim().endsWith('};'));
