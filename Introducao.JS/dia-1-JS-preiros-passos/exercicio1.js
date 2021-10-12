/*
const a = 30;
const b = 20;

const adicao = a+b;
const subtracao = a-b;
const multiplicacao = a*b;
const divisao = a/b;
const modulo = (a%b);


const a = 15;
const b = 27;

if (a >b ) {
  console.log('a é maior que b')
} 
else if (b > a) {
  console.log('b é maior que a')
}


const a = 15;
const b = 27;
const c = 5;

if (a >b && a>c ) {
  console.log('a é o maior')
} 
else if (b > a && b>c) {
  console.log('b é o maior')
} 
else {
  console.log('c é o maior')
}


const numero;

if (numero > 0) {
  console.log('numero positivo');
} 
else if (numero == 0 ) {
  console.log('numero é zero');
}
else {
  console.log('numero negativo');
}

let anguloA=90;
let anguloB=-30;
let anguloC=90;

if (anguloA>0 && anguloB>0 && anguloC>0){
  if (anguloA+anguloB+anguloC != 180) {
    console.log(false);
  } else {
    console.log(true);
  };
} else {
    console.log('error')
  }


let pecaXadrez = "";

switch (pecaXadrez) {
  case "cavalo":
    console.log('anda em L');
    break;
  case "rainha":
    console.log('diagonal, vertical e hoizontal');
    break;
  case "rei":
    console.log('anda uma casa para qualquer direção');
    break;
  case "peão":
    console.log('anda uma casa para frente(primeiro movimento até duas casas)');
    break;
  default:
    console.log('peça invalida');
    break;    
}
*/

const custo=80;
const valorVenda=100;

const lucro = valorVenda - (custo+0.2*custo);

if (custo==0 || valorVenda==0) {
  console.log('valor invalido')
} else {
  console.log(lucro*1000)
}