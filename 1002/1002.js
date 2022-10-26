var input = require('fs').readFileSync('stdin', 'utf8');

//var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var raio = parseFloat(input);

const n = 3.14159;
let area = n * Math.pow(raio, 2);

console.log(`A = ${area.toFixed(4)}`);
