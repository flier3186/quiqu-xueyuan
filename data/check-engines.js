var fs = require('fs');
var c = fs.readFileSync('index.html', 'utf8');
var e = c.match(/<script src="engine\/[^"]+\.js"><\/script>/g);
console.log('Engines in index.html:');
e.forEach(function(s) { console.log(' ', s); });
