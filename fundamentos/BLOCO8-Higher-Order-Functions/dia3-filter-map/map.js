// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];


// const listProducts = (products, prices) => {
//   return products.map((produto, i)=> ({[produto] : prices[i]}))
// }

// const listaProduto = (produtos, precos) => {
//   return precos.map((preco, index)=>({[produtos[index]]: preco}))
// }

// //console.log(listProducts(products, prices))
// console.log(listaProduto(products, prices))

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
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

//Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

const estudantesManha = estudantes.filter((aluno) => (
  aluno.turno === 'Manhã')).map((aluno)=>`${aluno.nome} ${aluno.sobrenome}`)

console.log(estudantesManha)

//Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
const statusEstudante = (nome, studentes) => {
  const infoAluno = studentes.find((student)=> student.nome === nome)
  return infoAluno.materias.map((materia)=> ( 
    `${materia.name}: ${materia.nota > 60 ? 'Aprovado': 'Reprovado'}`
  ));
} 

console.log(statusEstudante('Mario', estudantes))