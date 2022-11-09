var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = parseInt(lines.shift());
let y = parseFloat(lines.shift());

let consumption = x / y;

console.log(`${consumption.toFixed(3)} km/l`);