var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const consumption = 12; // km/l
let time = parseInt(lines.shift()); // h
let speed = parseInt(lines.shift()); // km/h

let dist = time * speed; // km

let volume = dist / consumption;

console.log(volume.toFixed(3));