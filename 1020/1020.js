var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines.shift());
let rest = 0;

let years;
let months;
let days;

if(value % 365 >= 0){
    rest = value % 365;
    years = (value - rest)/365;
    value = rest;
}

if(value % 30 >= 0){
    rest = value % 30;
    months = (value - rest)/30;
    value = rest;
}

days = value;

console.log(`${years} ano(s)`)
console.log(`${months} mes(es)`)
console.log(`${days} dia(s)`)