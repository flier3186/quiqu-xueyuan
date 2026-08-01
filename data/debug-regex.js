// Debug: show what the regex matches
var fs = require('fs');
var code = fs.readFileSync('data/math-data.js', 'utf8');

// Find lines with answer:b
var lines = code.split('\n');
lines.forEach(function(line, idx) {
  if (line.indexOf('answer:b') !== -1 && line.indexOf('answer:"b"') === -1) {
    console.log('Line ' + (idx+1) + ':', line.substring(0, 150));
    // Check what the regex matches
    var m = line.match(/^(?:(?:,|\{)\s*)answer:(\s*)([abcd])/);
    console.log('  regex match:', m ? m[0] : 'NO MATCH');
  }
});
