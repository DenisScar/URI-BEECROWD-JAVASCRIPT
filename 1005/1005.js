var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var MEDIA = (3.5*A + 7.5*B)/(3.5 + 7.5);

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);
