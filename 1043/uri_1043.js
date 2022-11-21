let a = 6.0;
let b = 4.0;
let c = 2.0;

let perimeter = 0;
let area = 0;

if( (a > Math.abs(b - c) && a < b + c) || (b > Math.abs(a - c) && b < a + c) || (c > Math.abs(a - b) && c < a + b) ){
  perimeter = a + b + c;
  console.log(`Perimetro = ${perimeter.toFixed(1)}`)
}else{
  area = ( (a + b) * c ) / 2;
  console.log(`Area = ${area.toFixed(1)}`)
}