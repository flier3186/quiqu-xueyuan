var fs = require('fs');
var vm = require('vm');

function parseMathData(code) {
  code = code.replace(/^\uFEFF/, '');
  // Find where window.MATH_BY_GRADE = { starts
  var idx = code.indexOf('window.MATH_BY_GRADE =');
  if (idx === -1) {
    idx = code.indexOf('window.MATH_BY_GRADE=');
  }
  if (idx === -1) {
    throw new Error('Cannot find MATH_BY_GRADE');
  }
  // Take from that position to end
  var stripped = code.slice(idx).replace(/^window\.MATH_BY_GRADE\s*=\s*/, '');
  var ctx = vm.createContext({ MATH_BY_GRADE: {} });
  vm.runInContext('MATH_BY_GRADE = ' + stripped, ctx);
  return ctx.MATH_BY_GRADE;
}

// Parse current file
var currentCode = fs.readFileSync('data/math-data.js', 'utf8');
var currentData = parseMathData(currentCode);
console.log('Current grades:', Object.keys(currentData).sort().join(', '));
var total = 0;
Object.keys(currentData).forEach(function(g) { total += currentData[g].problems.length; });
console.log('Current total problems:', total);
console.log('Current has knowledgeMap:', !!currentData['3a'].knowledgeMap);
console.log('Current 3a problem 0 keys:', Object.keys(currentData['3a'].problems[0]).sort().join(', '));
console.log('Current 3a problem 0 answer:', currentData['3a'].problems[0].answer);
console.log('Current 3a problem 0 variants:', currentData['3a'].problems[0].variants ? 'yes (' + currentData['3a'].problems[0].variants.length + ')' : 'no');

// Parse HEAD
var headCode = fs.readFileSync('data/math-data-head.js', 'utf8');
var headData = parseMathData(headCode);
console.log('\nHEAD grades:', Object.keys(headData).sort().join(', '));
total = 0;
Object.keys(headData).forEach(function(g) { total += headData[g].problems.length; });
console.log('HEAD total problems:', total);
console.log('HEAD has knowledgeMap:', !!headData['3a'].knowledgeMap);
console.log('HEAD 3a problem 0 keys:', Object.keys(headData['3a'].problems[0]).sort().join(', '));
console.log('HEAD 3a problem 0 answer:', headData['3a'].problems[0].answer);
console.log('HEAD 3a problem 0 variants:', headData['3a'].problems[0].variants ? 'yes (' + headData['3a'].problems[0].variants.length + ')' : 'no');
