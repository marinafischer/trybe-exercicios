const carros = ['gol', 'fox', 'prisma'];
const motos = ['vespa', 'xl'];
const veiculos = [...carros, ...motos];
carros.push('savero');
//console.log(veiculos);

const pessoa = {
  nome: 'Marina',
  idade: 30,
  endereco: {
    cidade: 'Veranopolis',
    rua: 'Tiradentes',
    numero: '1230'
  }
}

const conhecimentoTrybe = {
  softSkills: true,
  hardSkills: true,
  work: true,
}

const pessoaTrybe = {
  ...pessoa,
  cpf: 000000000,
  ...conhecimentoTrybe,
  //...carros,
}
pessoa.endereco.cidade = 'São Leopoldo'
//console.log(pessoaTrybe)

const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [58, 1.68];
//console.log(imc(...patientInfo)); 

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'manga', 'abacaxi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'tônica', 'chia'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));