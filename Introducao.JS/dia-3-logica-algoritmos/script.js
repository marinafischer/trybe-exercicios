//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n = 0;
let linhas =0;
let colunas = 0;
let horizontal = ""

n=5;
for(colunas = 0; colunas <n; colunas +=1) {
  horizontal += "*";  
}
for (linhas = 0; linhas <n; linhas +=1 ) {
  console.log(horizontal)
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
horizontal = '';

for(colunas = 0; colunas <n; colunas +=1) {
  horizontal += "*";  
  console.log(horizontal)
}

//3- Agora inverta o lado do triângulo. Por exemplo:

horizontal = '';
recuo =


console.log(recuo, horizontal)