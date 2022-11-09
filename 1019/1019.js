var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines.shift());
let rest = 0;

let hours;
let minutes;
let seconds;

if(value % 3600 >= 0){
    rest = value % 3600;
    hours = (value - rest)/3600;
    value = rest;
}

if(value % 60 >= 0){
    rest = value % 60;
    minutes = (value - rest)/60;
    value = rest;
}

seconds = value;

console.log(`${hours}:${minutes}:${seconds}`)