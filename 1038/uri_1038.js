let prodCode = 2;
let qtd = 3;
let price = 0;
let total = 0;

switch (prodCode) {
  case 1:
    price = 4.00;
    break;
  case 2:
    price = 4.50;
    break;
  case 3:
    price = 5.0;
    break;
  case 4:
    price = 2.00;
    break;
  case 5:
    price = 1.50;
    break;
}

total = price * qtd;

console.log(`Total: R$ ${total.toFixed(2)}`)