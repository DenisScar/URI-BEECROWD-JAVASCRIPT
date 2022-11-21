let nums = [-14,21,7];

let numsOrd = nums.slice();

numsOrd.sort((a, b) => a - b);

//numsOrd.sort(Array.NUMERIC)

numsOrd.forEach(num => {
  console.log(num);
})

console.log("\n");

nums.forEach(num => {
  console.log(num);
})
