var fs = require('fs');
var vm = require('vm');

// Parse HEAD to understand structure
var head = fs.readFileSync('data/math-data-head.js', 'utf8');
var idx = head.indexOf('window.MATH_BY_GRADE =');
var stripped = head.slice(idx).replace(/^window\.MATH_BY_GRADE\s*=\s*/, '');

// Use JSON.parse by wrapping in object literal
// First, fix the 'a' variable issue by quoting it
var fixed = stripped.replace(/,choices:\[(\d+),\s*a,(\d+),\s*(\d+)\]/g, ',choices:[$1,"a",$2,$3]');
var ctx = vm.createContext({ MATH_BY_GRADE: {} });
vm.runInContext('MATH_BY_GRADE = ' + fixed, ctx);

var data = ctx.MATH_BY_GRADE;
console.log('3a has knowledgeMap:', !!data['3a'].knowledgeMap);
console.log('3a knowledgeMap first:', JSON.stringify(data['3a'].knowledgeMap[0]).substring(0, 200));
console.log('3a problem 0 has variants:', !!data['3a'].problems[0].variants);
console.log('3a problem 0 variants:', JSON.stringify(data['3a'].problems[0].variants).substring(0, 200));

// Count problems per grade
Object.keys(data).sort().forEach(function(g) {
  var hasKM = !!data[g].knowledgeMap;
  var hasV = data[g].problems.some(function(p) { return p.variants; });
  console.log(g, 'problems:', data[g].problems.length, 'knowledgeMap:', hasKM, 'variants:', hasV);
});
