var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines.shift());
let rest = 0;

console.log(value);

if(value % 100 >= 0){
    rest = value % 100;
    console.log(`${(value - rest)/100} nota(s) de R$ 100,00`);
    value = rest;
}
if(value % 50 >= 0){
    rest = value % 50;
    console.log(`${(value - rest)/50} nota(s) de R$ 50,00`);
    value = rest;
}
if(value % 20 >= 0){
    rest = value % 20;
    console.log(`${(value - rest)/20} nota(s) de R$ 20,00`);
    value = rest;
}
if(value % 10 >= 0){
    rest = value % 10;
    console.log(`${(value - rest)/10} nota(s) de R$ 10,00`);
    value = rest;
}
if(value % 5 >= 0){
    rest = value % 5;
    console.log(`${(value - rest)/5} nota(s) de R$ 5,00`);
    value = rest;
}
if(value % 2 >= 0){
    rest = value % 2;
    console.log(`${(value - rest)/2} nota(s) de R$ 2,00`);
    value = rest;
}
if(value % 1 >= 0){
    rest = value % 1;
    console.log(`${(value - rest)/1} nota(s) de R$ 1,00`);
    value = rest;
}