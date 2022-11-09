var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());

let maiorAB = (a + b + Math.abs(a - b)) / 2;

maiorAB > c ? console.log(`${maiorAB} eh o maior`) : console.log(`${c} eh o maior`);