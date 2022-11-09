var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let dist = parseInt(lines.shift());

let time = dist * 2;

console.log(`${time} minutos`);