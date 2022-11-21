let salary = 2000.00;

let readjustment = 0.00;
let salaryUpdated = 0.00;
let salaryIncrement = 0.00;
let percent = 0.00;

if(salary >= 0 && salary <= 400.00){
    readjustment = 0.15;
}else if(salary > 400.00 && salary <= 800.00){
    readjustment = 0.12;
}else if(salary > 800.00 && salary <= 1200.00){
    readjustment = 0.10;
}else if(salary > 1200.00 && salary <= 2000.00){
    readjustment = 0.07;
}else if(salary > 2000.00){
    readjustment = 0.04;
}

salaryIncrement = salary * readjustment;
salaryUpdated = salary + salaryIncrement;
percent = readjustment * 100;

console.log(`Novo salario: ${salaryUpdated.toFixed(2)}`);
console.log(`Reajuste ganho: ${salaryIncrement.toFixed(2)}`);
console.log(`Em percentual: ${percent.toFixed(0)} %`);
