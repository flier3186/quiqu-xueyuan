var fs = require('fs');
var c = fs.readFileSync('data/math-data.js', 'utf8');
var grades = c.match(/"(\d+[ab])"/g);
console.log('Grades in file:', grades ? grades.map(function(g) { return g.replace(/"/g, ''); }).join(', ') : 'NONE');
console.log('Total problems (counting "answer":):', (c.match(/,answer:/g) || []).length);
console.log('File size:', c.length);
