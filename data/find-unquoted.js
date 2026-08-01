// Find remaining unquoted bare identifiers in math-data.js
var fs = require('fs');
var code = fs.readFileSync('data/math-data.js', 'utf8').replace(/^\uFEFF/, '');

// Find ,answer:a ,answer:b patterns and variants patterns
var lines = code.split('\n');
for (var i = 0; i < lines.length; i++) {
  var line = lines[i];
  // Look for unquoted answer: a or answer: b
  var answerMatch = line.match(/answer:\s*([a-d])(?=[,\s\]}])/);
  if (answerMatch && !line.includes('answer:"' + answerMatch[1] + '"')) {
    console.log('Line', i+1, ':', line.substring(0, 120));
  }
  // Look for unquoted letters in choices
  var choicesMatch = line.match(/choices:\[([^\]]+)\]/);
  if (choicesMatch) {
    var inner = choicesMatch[1];
    var parts = inner.split(',');
    parts.forEach(function(p, idx) {
      p = p.trim();
      if (/^[a-d]$/.test(p)) {
        console.log('Line', i+1, 'choices part', idx, ':', p, 'in', line.substring(0, 120));
      }
    });
  }
}
