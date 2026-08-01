var fs = require('fs');
var d = fs.readFileSync('data/math-data.js', 'utf8');
console.log('size:', d.length);
console.log('last 100:', JSON.stringify(d.slice(-100)));

// Find all trailing braces
for (var i = d.length - 1; i > d.length - 10; i--) {
  console.log('pos', i, ':', JSON.stringify(d[i]), d[i] === '}' ? '(brace)' : '');
}

// The structure should be:
// window.MATH_BY_GRADE = { "3a":{...}, ..., "6b":{...} }
// So the end should be: ...problems:[...]}}}
// Wait: ] closes problems array, } closes 6b/9b object, } closes MATH_BY_GRADE
// But there's no extra } for window.MATH_BY_GRADE = { }
// Unless there's a semicolon: window.MATH_BY_GRADE = { ... } ;
// Let's check the very end more carefully

var last5 = d.slice(-5);
console.log('last 5:', JSON.stringify(last5));

// Check if the file has a semicolon
console.log('has ; at end:', d.endsWith(';\r\n'));
console.log('has }} at end:', d.endsWith('}}'));

// Let's just check what the file structure is
var idx = d.length;
var depth = 0;
for (var i = d.length - 1; i >= Math.max(0, d.length - 1000); i--) {
  if (d[i] === '}') depth++;
  if (d[i] === '{') depth--;
  if (depth < 0) {
    console.log('Unbalanced at', i, 'depth:', depth);
    console.log('Context:', JSON.stringify(d.slice(Math.max(0, i-50), i+50)));
    break;
  }
}
console.log('Final depth:', depth);
