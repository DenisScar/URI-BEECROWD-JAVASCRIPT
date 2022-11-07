var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let part1 = lines.shift(" ").split(" ");
let part2 = lines.shift(" ").split(" ");

let part1_cod = parseInt(part1.shift());
let part1_qtd = parseInt(part1.shift());
let part1_price = parseFloat(part1.shift());

let part2_cod = parseInt(part2.shift());
let part2_qtd = parseInt(part2.shift());
let part2_price = parseFloat(part2.shift());

let price_total = (part1_qtd * part1_price + part2_qtd * part2_price);

console.log(`VALOR A PAGAR: R$ ${price_total.toFixed(2)}`);