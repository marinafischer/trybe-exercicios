const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const novaChave = (objeto, chave, valor) => {
  objeto[chave] = valor

}
novaChave(lesson2, 'turno', 'noite');
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listaChaves = objeto => Object.keys(objeto);
console.log(listaChaves(lesson2));
// Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObj = obj => Object.entries(obj).length;
console.log(tamanhoObj(lesson1));
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listaValores = object => Object.values(object);
console.log(listaValores(lesson3))
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons)
const allLessons = () => Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons())
//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalAlunos = (objeto) => {
  let total = 0;
  for (let i in objeto) {
    total += objeto[i].numeroEstudantes;
  }
  return total
}
console.log(totalAlunos(allLessons()))

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
 const obterValorPosicao = (objeto, valor) => {
  console.log(objeto[Object.keys(objeto)[valor]]);
 }
 obterValorPosicao(lesson1,0)

 //Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

 const verificaEntrada = (objeto, chave, valor) => {
  let arraisEntrada = Object.entries(objeto);
  for (let i in arraisEntrada) {
    if (arraisEntrada[i][0] === chave && arraisEntrada[i][1] === valor) {
      return true;
    }
  }
  return false;
 }
console.log(verificaEntrada(lesson1,'materia', 'Biologia'))
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
const totalAlunosPorMateria = (objeto, disciplina) => {
  let total = 0;
  for (let i in objeto) {
    if(objeto[i].materia == disciplina ) {
      total += objeto[i].numeroEstudantes;
    }
  }
  return total
}
console.log(totalAlunosPorMateria(allLessons(), 'Matemática'))
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

