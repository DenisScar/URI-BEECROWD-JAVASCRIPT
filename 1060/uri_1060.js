let nums = [7.0,-5,6,-3.4,4.6,12];

let cont = 0;

nums.forEach(num => {
  if(num > 0){
    cont += 1;
  }
})

console.log(`${cont} valores positivos`)
