//Neste exemplo, serão comparados valores para buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce . 
let numbers = [50, 85, -30, 3, 15];

const maiorNumero = (numeros) => {
  let numeroMaior = numeros[0];
  for (let numero of numeros) {
    numero > numeroMaior ? numeroMaior = numero : numeroMaior;
  }
  return numeroMaior
}
console.log(maiorNumero(numbers))

const biggestNumber = (valores) => {
  return valores.reduce((maiorValor, valor) => valor > maiorValor ? valor : maiorValor)
}
console.log(biggestNumber(numbers))

//faça uma função que some todos os números pares do array:
numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const somaPares = numbers.reduce((acc, numero) => numero%2 === 0 ? acc+numero : acc)
console.log(somaPares)

const somadorPares = numbers.filter((numero) => numero%2 === 0).reduce((acc, valor)=> acc + valor)
console.log(somadorPares)

//Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce 
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const maiorNota = (acc, materia) => materia.nota > acc.nota ? materia : acc;


const melhotMateria = (students) => students.map((estudante) => ({
  nome: estudante.nome,
  materia: estudante.materias.reduce(maiorNota).name}));
console.log(melhotMateria(estudantes)) 