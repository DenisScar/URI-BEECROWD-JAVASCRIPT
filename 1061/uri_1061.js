const input = `Dia 5\n08 : 12 : 23\nDia 9\n06 : 13 : 23`

let lines = input.split("\n");

let dayIni = parseFloat(lines[0].split(" ")[1]);
let timeIniArr = lines[1].split(" : ");
let timeIni = parseFloat(timeIniArr[0]) + parseFloat(timeIniArr[1])/60 + parseFloat(timeIniArr[2])/3600;
let dayEnd = parseFloat(lines[2].split(" ")[1]);
let timeEndArr = lines[3].split(" : ");
let timeEnd = parseFloat(timeEndArr[0]) + parseFloat(timeEndArr[1])/60 + parseFloat(timeEndArr[2])/3600;

totalTimeIni = (((dayIni * 24) + timeIni)) / 24;
totalTimeEnd = (((dayEnd * 24) + timeEnd)) / 24;
totalTime = totalTimeEnd - totalTimeIni;

let rest = 0;

let days = Math.trunc(totalTime);
rest = totalTime - days;

let hours = Math.trunc(rest * 24);
rest = (rest * 24) - hours;

let minutes = Math.trunc(rest * 60);

let seconds = rest;

console.log(`${days} dia(s)`)
console.log(`${hours} hora(s)`)
console.log(`${minutes} minuto(s)`)
console.log(`${seconds.toFixed(0)} segundo (s)`)
