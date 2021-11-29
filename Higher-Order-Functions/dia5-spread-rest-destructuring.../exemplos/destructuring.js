// //1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudaçãoconst saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring
// const [texto, imprimeTexto] = saudacoes;
// imprimeTexto(texto)

// //2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// // const vetor = [comida, animal, bebida];
// // [animal, bebida, comida] = vetor;

// //[comida, animal, bebida] = [bebida, comida, animal]

// [comida, animal, bebida] = ['arroz','gato','água']

// console.log(comida, animal, bebida); // arroz gato água



// //3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares .
// let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// [,,, ...numerosPares] = numerosPares

// console.log(numerosPares); // [6, 8, 10, 12];

// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'brazilian' } = person;
// console.log(nationality)

// const nums = [1,2,3]
// const [x,y,z,h=4] = nums
// console.log(h)

//Do jeito que está, quando passamos person para a função GetNationality o retorno é João is undefined . Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian .

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const {nationality = 'Brazilian'} = person

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));