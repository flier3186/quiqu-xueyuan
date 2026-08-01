var fs = require('fs');
var child = require('child_process');

// Get HEAD version to a local file
try {
  var head = child.execSync('git show HEAD:data/math-data.js', { encoding: 'utf8' });
  fs.writeFileSync('data/math-data-head.js', head);
  console.log('Saved HEAD to data/math-data-head.js');
} catch(e) {
  console.log('git show failed:', e.message);
  process.exit(1);
}

// Check HEAD version
var headData = fs.readFileSync('data/math-data-head.js', 'utf8');
console.log('HEAD size:', headData.length);
console.log('HEAD grades:', (headData.match(/"(\d+[ab])"/g) || []).map(function(g) { return g.replace(/"/g, ''); }).join(', '));
console.log('HEAD has knowledgeMap:', headData.includes('knowledgeMap'));
console.log('HEAD has variants:', headData.includes('variants'));

// Check if HEAD has the same eval error
var vm = require('vm');
var ctx = vm.createContext({ MATH_BY_GRADE: {} });
try {
  vm.runInContext('MATH_BY_GRADE = ' + headData.replace(/^window\.MATH_BY_GRADE\s*=\s*/, ''), ctx);
  console.log('HEAD eval: SUCCESS, grades:', Object.keys(ctx.MATH_BY_GRADE).join(', '));
} catch(e) {
  console.log('HEAD eval error:', e.message);
}
