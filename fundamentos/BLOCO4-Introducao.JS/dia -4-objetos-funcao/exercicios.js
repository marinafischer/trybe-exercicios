/*let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 

console.log(`Bem-vinda, ${info.personagem}`)

//2-Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 
info.recorrente='Sim';
console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for(let key in info) {
  console.log(key);
}

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for(let key in info) {
  console.log(info[key]);
}

//4 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};



//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificarPalindromo(palavra) {
  if(palavra === palavra.split('').reverse().join('')) {
    return true;
  }
  else {
    return false;
  }
}
console.log(verificarPalindromo('arara'))

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let teste = [2, 3, 6, 7, 10, 1];
function maiorValor(vetor) {
  let maiorNumero = vetor[0]
  for (let i in vetor) {
    if (vetor[i] > maiorNumero){
      maiorNumero = vetor[i];
    } 
  }
  console.log(vetor.indexOf(maiorNumero));
}
maiorValor(teste)

function indiceMaiorNumero(numeros) {
  let maiorIndice = 0
  for (i in numeros) {
    if (numeros[i]>numeros[maiorIndice]) {
      maiorIndice = i
    }
  }
  console.log(maiorIndice)
}
indiceMaiorNumero(teste)

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


let teste2 = [2, 4, 6, 7, 10, 0, -3]; 

function indiceMenorValor(vetor) {
  let menorIndice = 0;
  for (let i in vetor) {
    if (vetor[i] < vetor[menorIndice]) {
      menorIndice = i
    }
  }
  console.log(menorIndice)
}
indiceMenorValor(teste2)
//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.


let teste3 =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome (vetor) {
  let oMaiorNome = ''
  console.log(oMaiorNome.length)
  for(let i in vetor) {
    if (vetor[i].length > oMaiorNome.length) {
      oMaiorNome = vetor[i]
    }
  }
  return oMaiorNome
}

console.log(maiorNome(teste3))

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


let teste3 = [2, 3, 2, 5, 8, 2, 3]; 

function oInteiroRepete (vetor) {
  let acumulador = 0;
  for (let i in vetor) {
    if () {

    }
  }
}

//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.


function somatorioDeNumeros (N) {
  let somatorio = 0
  for(let i = 0; i<=N; i++) {
    somatorio += i
  }
  return somatorio
}
console.log(somatorioDeNumeros(5))


//bonus  Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
const numerosRomanos = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000,
};

function romanoParaDecimal(numero) {
  numero = numero.toLowerCase();
  const len = numero.length;
  let soma = numerosRomanos[numero[len - 1]];
  let atual = numerosRomanos[numero[len - 1]];
  for (let i = 2; i <= len; i += 1) {
    const prox = numerosRomanos[numero[len - i]];
    if (atual <= prox) {
      soma += prox;
    } else {
      soma -= prox;
    }
    atual = prox;
  }
  return soma;
}

console.log(romanoParaDecimal('MMXVIII')); // 2018
console.log(romanoParaDecimal('VI')); // 6
console.log(romanoParaDecimal('IV')); // 4
console.log(romanoParaDecimal('XL'));



let vetor = ['Marina', 'Carol', 'Eduardo'];

for(let index in vetor) {
  console.log(index);
}

for(let nome of vetor) {
  console.log(nome);
}
*/


for(let key in info2) {
  if (info[key] == info2[key]) {
    console.log('Ambos recorrentes')
  } else {
    console.log(info[key] +' e '+ info2[key]);
  }
}