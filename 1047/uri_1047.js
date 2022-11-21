let initialHour = 7;
let initialMinute = 10
let endHour = 8;
let endMinute = 9;

let initialTime = initialHour + (initialMinute / 60);
let endTime = endHour + (endMinute / 60);
let delta = endTime - initialTime;

let hours = 0;
let minutes = 0;

if(delta <= 0){
  delta += 24;
}

hours = Math.trunc(delta);
minutes = (delta - Math.trunc(delta)) * 60;
console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes.toFixed(0)} MINUTO(S)`)
