var fs = require('fs');
var d = fs.readFileSync('data/english-vocab.js', 'utf8');
console.log('total size:', d.length, 'bytes');
console.log('has grade3:', d.indexOf("'3':") > -1);
console.log('has grade4:', d.indexOf("'4':") > -1);
console.log('has grade5:', d.indexOf("'5':") > -1);
console.log('has grade6:', d.indexOf("'6':") > -1);

// Count words per grade
var grades = ['3', '4', '5', '6'];
var totalWords = 0;
grades.forEach(function(g) {
  var start = d.indexOf("'" + g + "':");
  var nextGrade = grades[grades.indexOf(g) + 1];
  var end = nextGrade ? d.indexOf("'" + nextGrade + "':") : d.length;
  var block = d.substring(start, end);
  var words = (block.match(/\{w:'[^']+'/g) || []).length;
  totalWords += words;
  console.log('grade ' + g + ':', words, 'words');
});
console.log('total words:', totalWords);
