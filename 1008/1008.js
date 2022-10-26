var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

let NUMBER = parseInt(lines.shift());
let HOURS = parseInt(lines.shift());
let VALUE = parseFloat(lines.shift());
let SALARY = HOURS * VALUE;

console.log(`NUMBER = ${NUMBER}`);
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`);