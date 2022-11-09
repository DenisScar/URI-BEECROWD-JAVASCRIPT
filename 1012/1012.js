var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());
const pi = 3.14159;

let triangle = a * c / 2;
let circle = pi * Math.pow(c,2);
let trapeze = ((a + b) * c) / 2;
let square = b * b;
let rectangle = a * b;

console.log(`TRIANGULO: ${triangle.toFixed(3)}`);
console.log(`CIRCULO: ${circle.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapeze.toFixed(3)}`);
console.log(`QUADRADO: ${square.toFixed(3)}`);
console.log(`RETANGULO: ${rectangle.toFixed(3)}`);