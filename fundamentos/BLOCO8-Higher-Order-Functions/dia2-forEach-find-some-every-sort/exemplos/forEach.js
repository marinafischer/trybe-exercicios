//Agora vamos usar o forEach , para realizar a tabuada do 2. 

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const tabuadaDOis = numbers.forEach((numero)=>{
//   console.log(`${numero} x 2 = ${numero*2}`)
// })

// const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

// const convertToUpperCase = (name, index) => {
//   names[index] = name.toUpperCase();
// };

// names.forEach(convertToUpperCase);
// console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

//1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList)