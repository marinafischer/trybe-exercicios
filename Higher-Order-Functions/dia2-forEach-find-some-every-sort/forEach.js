//Agora vamos usar o forEach , para realizar a tabuada do 2. 

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const tabuadaDOis = numbers.forEach((numero)=>{
  console.log(`${numero} x 2 = ${numero*2}`)
})