let income = 1701.12;
let rest = income;

let tax1 = 0.00;
let tax2 = 0.00;
let tax3 = 0.00;

if(income < 2000.00){
  console.log("Isento");
}else {
  if(income > 4500.00){
    tax1 = (income - 4500.00) * 0.28;
    tax2 = 1500 * 0.18;
    tax3 = 1000 * 0.08;
  }else if(income > 3000.00 && income <= 4500.00){
    tax1 = (income - 3000.00) * 0.18;
    tax2 = 1000 * 0.08;
  }else if(income > 2000.00 && income <= 3000.00){
    tax1 = (income - 2000.00) * 0.08;
  }

  let totalTax = tax1 + tax2 + tax3;

  console.log(`R$ ${totalTax.toFixed(2)}`);
}