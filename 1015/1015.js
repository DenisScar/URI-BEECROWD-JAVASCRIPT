var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let p1 = lines.shift().split(" ");
let p2 = lines.shift().split(" ");

let x1 = parseFloat(p1.shift()).toFixed(1);
let y1 = parseFloat(p1.shift()).toFixed(1);

let x2 = parseFloat(p2.shift()).toFixed(1);
let y2 = parseFloat(p2.shift()).toFixed(1);

let distance = Math.pow(( Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2) ),0.5);

console.log(distance.toFixed(4));