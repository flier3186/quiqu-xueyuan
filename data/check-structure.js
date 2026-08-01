var fs = require('fs');
var vm = require('vm');

// Check HEAD structure
var headData = fs.readFileSync('data/math-data-head.js', 'utf8');
var ctx = vm.createContext({ MATH_BY_GRADE: {} });
vm.runInContext('MATH_BY_GRADE = ' + headData.replace(/^window\.MATH_BY_GRADE\s*=\s*/, ''), ctx);
var headGrades = ctx.MATH_BY_GRADE;

// Look at first problem of 3a
var p3a = headGrades['3a'].problems[0];
console.log('3a problem 0 keys:', Object.keys(p3a).sort().join(', '));
console.log('3a problem 0 answer:', p3a.answer);
console.log('3a problem 0 choices:', JSON.stringify(p3a.choices));
console.log('3a problem 0 variants:', JSON.stringify(p3a.variants ? p3a.variants.slice(0,1) : 'NONE'));
console.log('3a knowledgeMap present:', !!headGrades['3a'].knowledgeMap);
console.log('3a knowledgeMap first:', JSON.stringify(headGrades['3a'].knowledgeMap[0]).substring(0, 100));

// Look at a problem with variable answer
for (var i = 0; i < headGrades['3a'].problems.length; i++) {
  var pp = headGrades['3a'].problems[i];
  if (typeof pp.answer === 'string' || (typeof pp.answer === 'number' && pp.choices && pp.choices.some(function(c) { return typeof c === 'string' || c === 'a'; }))) {
    console.log('Problem', i, 'answer:', JSON.stringify(pp.answer), 'choices:', pp.choices);
  }
}

// Check 7a problems from my new file
var myData = fs.readFileSync('data/math-data.js', 'utf8');
var ctx2 = vm.createContext({ MATH_BY_GRADE: {} });
vm.runInContext('MATH_BY_GRADE = ' + myData.replace(/^window\.MATH_BY_GRADE\s*=\s*/, ''), ctx2);
var myGrades = ctx2.MATH_BY_GRADE;

console.log('\n--- My 7a problem 0 keys:', Object.keys(myGrades['7a'].problems[0]).sort().join(', '));
console.log('My 7a problem 0 answer:', myGrades['7a'].problems[0].answer);
console.log('My 7a has knowledgeMap:', !!myGrades['7a'].knowledgeMap);
