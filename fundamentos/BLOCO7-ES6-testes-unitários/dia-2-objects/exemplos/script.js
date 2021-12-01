const customer1 = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

console.log(customer1);

customer1.lastName = 'Faria';
console.log(customer1);

const customer2 = {
  firstName: 'Maria',
  age: 23,
  job: 'Medic',
};

console.log(customer2);

let novaChave = 'profissao'
const profissao = 'Engenheiro'
customer2[novaChave] = profissao;
console.log(customer2);

function aumentaObjeto (objeto, chave, valor) {
  objeto[chave] = valor;
  return objeto
}

console.log(aumentaObjeto({
  firstName: 'Maria',
  age: 23,
}, 'profissão', 'medica'))

//Tente criar uma função que exiba as habilidades do objeto student . Cada habilidade deve ser exibida no formato "Nome da habilidade, Nível: valor da chave referente à habilidade". Após tentar criar a função

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listaHabilidades = (estudante) => {
  let resposta = '';
  for (let key in estudante) {
    resposta += `
    ${key}, Nível:${estudante[key]}.`
  }
  return resposta
}
console.log(listaHabilidades(student1))
console.log(listaHabilidades(student2))

const listSkilss = (student) => {
  const arraySkills = Object.keys(student);
  for (let k in arraySkills) {
    console.log( `
    ${arraySkills[k]}, Nível:${student[arraySkills[k]]}.`)
  }
};

console.log(listSkilss(student1))
console.log(listSkilss(student2))