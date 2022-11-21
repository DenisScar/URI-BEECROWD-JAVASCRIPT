let nums = [6.0,8.0,10.0];

nums.sort((a, b) => b - a);

nums.forEach(num => {
  console.log(num);
})

let a = nums[0];
let b = nums[1];
let c = nums[2];

if( a >= (b + c) ){
  console.log("NAO FORMA TRIANGULO");
}else {
if(Math.pow(a,2) === Math.pow(b,2) + Math.pow(c,2)){
  console.log("TRIANGULO RETANGULO");
}else if(Math.pow(a,2) > Math.pow(b,2) + Math.pow(c,2)){
  console.log("TRIANGULO OBTUSANGULO");
}else if(Math.pow(a,2) < Math.pow(b,2) + Math.pow(c,2)){
  console.log("TRIANGULO ACUTANGULO");
}

if(a === b && b === c && a === c){
  console.log("TRIANGULO EQUILATERO");
}
if( ((a === b) && (a !== c)) || ((b === c) && (b !== a)) || ((a === c) && (a !== b)) )  {
  console.log("TRIANGULO ISOSCELES");
}
}
