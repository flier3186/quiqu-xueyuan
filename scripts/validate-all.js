const fs = require('fs');
const root = 'F:/qiquleyuan/quiqu-xueyuan-master/quiqu-xueyuan-master';

// Validate index.html inline scripts
const html = fs.readFileSync(root + '/index.html', 'utf8');
const scriptMatches = html.match(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/g) || [];
console.log('Found', scriptMatches.length, 'inline script blocks');

let errors = 0;
scriptMatches.forEach((s, i) => {
  const js = s.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
  try {
    new Function(js);
    console.log('  Block ' + (i + 1) + ': OK (' + js.length + ' chars)');
  } catch (e) {
    console.log('  Block ' + (i + 1) + ': ERROR - ' + e.message.substring(0, 120));
    errors++;
  }
});

// Validate data files
const dataFiles = [
  'data/math-data.js',
  'data/english-vocab.js',
  'data/english-phonics.js',
  'data/english-scenarios.js',
  'data/english-listening.js',
  'data/english-grammar.js',
  'engine/speak-engine-v5.js',
  'engine/math-flow-v5.js',
  'engine/spaced-review-v5.js',
  'engine/math-visual-v5.js'
];

dataFiles.forEach(f => {
  try {
    const d = fs.readFileSync(root + '/' + f, 'utf8');
    // Handle assignments like MATH_BY_GRADE = { ... }
    const assignMatch = d.match(/^(window\.)?(\w+)\s*=\s*/);
    if (assignMatch) {
      const name = assignMatch[2];
      new Function(name + '=function(){' + d + 'return typeof MATH_BY_GRADE!==\'undefined\'}()');
      console.log(f + ': OK');
    } else {
      new Function(d);
      console.log(f + ': OK');
    }
  } catch (e) {
    console.log(f + ': ERROR - ' + e.message.substring(0, 120));
    errors++;
  }
});

// Summary
const m2 = JSON.parse(fs.readFileSync(root + '/data/math-data.js', 'utf8').slice(
  fs.readFileSync(root + '/data/math-data.js', 'utf8').indexOf('{'),
  fs.readFileSync(root + '/data/math-data.js', 'utf8').lastIndexOf('}') + 1
));
let totalKP = 0, totalP = 0;
Object.keys(m2).forEach(g => {
  totalKP += (m2[g].knowledgeMap || []).length;
  totalP += (m2[g].problems || []).length;
});
console.log('\nMath summary: ' + Object.keys(m2).length + ' grades, ' + totalKP + ' knowledge points, ' + totalP + ' problems');
console.log('Errors: ' + errors);
process.exit(errors > 0 ? 1 : 0);
