var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(lines.shift());
let notas = 0;

console.log("NOTAS:");

resto = valor % 100;
notas = (valor - resto)/100;
valor = resto;

console.log(`${notas} nota(s) de R$ 100.00`);

resto = valor % 50;
notas = (valor - resto)/50;
valor = resto;

console.log(`${notas} nota(s) de R$ 50.00`);

resto = valor % 20;
notas = (valor - resto)/20;
valor = resto;

console.log(`${notas} nota(s) de R$ 20.00`);

resto = valor % 10;
notas = (valor - resto)/10;
valor = resto;

console.log(`${notas} nota(s) de R$ 10.00`);

resto = valor % 5;
notas = (valor - resto)/5;
valor = resto;

console.log(`${notas} nota(s) de R$ 5.00`);

resto = valor % 2;
notas = (valor - resto)/2;
valor = resto;

console.log(`${notas} nota(s) de R$ 2.00`);

console.log("MOEDAS:");

resto = valor % 1.00;
notas = (valor - resto)/1.00;
valor = resto;

console.log(`${notas} moeda(s) de R$ 1.00`);

resto = valor % 0.50;
notas = (valor - resto)/0.50;
valor = resto;

console.log(`${notas} moeda(s) de R$ 0.50`);

resto = valor % 0.25;
notas = (valor - resto)/0.25;
valor = resto;

console.log(`${notas} moeda(s) de R$ 0.25`);

resto = valor % 0.10;
notas = (valor - resto)/0.10;
valor = resto;

console.log(`${notas} moeda(s) de R$ 0.10`);

resto = valor % 0.05;
notas = (valor - resto)/0.05;
valor = resto;

console.log(`${notas} moeda(s) de R$ 0.05`);

resto = valor;
notas = valor / 0.01;

console.log(`${notas.toFixed(0)} moeda(s) de R$ 0.01`);