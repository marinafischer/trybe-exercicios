let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1) Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
for(let numero of numbers){
  console.log(numero);
}

//2)Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let acumulador=0;
for(let i in numbers) {
  acumulador += numbers[i]
}
console.log(acumulador);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(acumulador>20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igua a 20')
}

//3)Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let media=0;
media = acumulador/numbers.length
console.log(media)

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media>20) {
  console.log('maior que 20')
} else {
  console.log('menor ou igual a 20')
}

//4)Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maior = numbers[0];
for(let i in numbers) {
  if (maior < numbers[i]) {
    maior = numbers[i];
  } else {
    maior = maior;
  }
}
console.log(maior)

//5)Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let totalImpares = 0;
for(numero of numbers) {
  if(numero%2 !== 0) {
    totalImpares +=1;
  }
}
if(totalImpares === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(`Foram encontrados ${totalImpares} números ímpares`)
}

//6)Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor=numbers[0];
for(numero of numbers) {
  if(numero < menor) {
    menor = numero;
  } else {
    menor = menor;
  }
}
console.log(`o menor valor é ${menor}`)


// 7)Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let vetor = [];
for(let i=1; i<=25; i += 1) {
  vetor.push(i)
}
console.log(vetor);


// 8) Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

for (let valor of vetor) {
  console.log(valor/2);
}


/*
Ordene o array numbers em ordem crescente e imprima seus valores;
Ordene o array numbers em ordem decrescente e imprima seus valores;
Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
*/

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = []; 
let multiploSegundo =0;

for(let i=0; i<numbers.length; i+=1){
  multiploSegundo = numbers[i] * numbers[i+1];
  if((i+1) === numbers.length){
    multiploSegundo = numbers[i]*2;
  }
  novoNumbers.push(multiploSegundo)
}
console.log(novoNumbers)