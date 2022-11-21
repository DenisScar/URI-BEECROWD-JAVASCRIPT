let coordX = 0.0;
let coordY = 0.0;

if(coordX === 0 && coordY === 0){
  console.log("Origem");
}else if(coordX === 0 && coordY !== 0){
  console.log("Eixo Y");
}else if(coordX !== 0 && coordY === 0){
  console.log("Eixo X");
}else if(coordX < 0 && coordY < 0){
  console.log("Q3");
}else if(coordX < 0 && coordY > 0){
  console.log("Q2");
}else if(coordX > 0 && coordY < 0){
  console.log("Q4");
}else if(coordX > 0 && coordY > 0){
  console.log("Q1");
}
