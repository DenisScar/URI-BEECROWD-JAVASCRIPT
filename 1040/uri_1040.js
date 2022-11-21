let n1 = 2.0
let n2 = 4.0
let n3 = 7.5
let n4 = 8.0
let exame = 6.4

let media=((n1*2)+(n2*3)+(n3*4)+(n4*1))/10

if(media >= 7){
  console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`);
} else if(media < 5){
  console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`);
} else {
  let mediaFinal = (media + exame)/2;
  let status = "";
  
  if(mediaFinal >= 5){
    status = "Aluno aprovado.";
  } else{
    status = "Aluno reprovado.";
  }
  
  console.log(`Media: ${media} \nAluno em exame.\nNota do exame: ${exame}\n${status}\nMedia final: ${mediaFinal}`)
}