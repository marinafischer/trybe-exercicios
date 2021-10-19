/*
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


let n = 5;
let espaco = ' ';
let asterisco = '*';
let linha='';
let contador = n;

for (let i = 0; i<n; i++) {
  for(let j = 0; j<=n; j++) {
    if (j<contador) {
      linha += espaco;
    } else {
      linha += asterisco;
    }
  }
  console.log(linha)
  contador-=1;
  linha='';
}
*/


let n = 5;
let asterisco = '*';
let espaço = ' ';
let linha = '';

let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

for (let i = 0; i <= meio; i ++) {
  for (let j = 0; j <= n; j ++) {
    if (j > esquerda && j < direita) {
      linha += asterisco;
    } else {
      linha += espaço;
    }
  }
  console.log(linha);
  linha = '';
  direita += 1;
  esquerda -= 1
};