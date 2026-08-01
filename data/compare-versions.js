var fs = require('fs');

// Count variants in current vs HEAD
var current = fs.readFileSync('data/math-data.js', 'utf8');
var head = fs.readFileSync('data/math-data-head.js', 'utf8');

var currentVariants = (current.match(/variants/g) || []).length;
var headVariants = (head.match(/variants/g) || []).length;
var currentKnowledgeMap = (current.match(/knowledgeMap/g) || []).length;
var headKnowledgeMap = (head.match(/knowledgeMap/g) || []).length;

console.log('Current variants:', currentVariants, '| HEAD variants:', headVariants);
console.log('Current knowledgeMap:', currentKnowledgeMap, '| HEAD knowledgeMap:', headKnowledgeMap);
console.log('Current size:', current.length, '| HEAD size:', head.length);

// Count grades in current vs HEAD
var currentGrades = (current.match(/"(\d+[ab])":/g) || []).length;
var headGrades = (head.match(/"(\d+[ab])":/g) || []).length;
console.log('Current grades:', currentGrades, '| HEAD grades:', headGrades);

// Show what my new grades have
var my7a = current.indexOf('"7a":');
var my7b = current.indexOf('"7b":');
var my9bEnd = current.lastIndexOf('"9b":');
console.log('\n7a section starts at:', my7a);
console.log('9b section starts at:', my9bEnd);
console.log('9b section:', current.slice(my9bEnd, my9bEnd + 300));
