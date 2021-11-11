// 1. Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(oddsAndEvens.sort((a,b)=>a-b))

const ordenar = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens
}

console.log(`Os números ${ordenar(oddsAndEvens)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

let resultado = 1;
const fatorial = (n) => {
  for (let i=n ; i>1; i-=1) {
    resultado *= i;
  }
  return resultado
}
console.log(fatorial(4))

const factorial = numero => numero >1 ? numero * factorial(numero -1): 1;

console.log(factorial(4))

function fatorial2 (numero2) {
  if (numero2 > 1) { 
    return numero2*fatorial2(numero2-1);
  } else {
    return 1;
  }
}
fatorial2(4)

//Crie uma função que receba uma frase e retorne qual a maior palava

function maiorPalavra(frase) {
  let somaLetras = 0; 
  let arrayPalavras = frase.split(' ');
  let maiorPalavra = '';
  for(let palavra of arrayPalavras) {
    if (palavra.length > somaLetras) {
      somaLetras = palavra.length
      maiorPalavra = palavra
    }
  }
  return maiorPalavra
}
console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))

const longestWord = (frase) => frase.split(' ').sort((palavraA,palavraB)=>palavraA.length - palavraB.length)[frase.split(' ').length-1];
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'))