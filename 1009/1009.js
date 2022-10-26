var input = require('fs').readFileSync('stdin', 'utf8');

var lines = input.split('\n');

let NAME = lines.shift();
let SALARY = parseFloat(lines.shift());
let SALES = parseFloat(lines.shift());
let TOTAL = SALARY + SALES * 0.15;

console.log(`TOTAL = R$ ${TOTAL.toFixed(2)}`);