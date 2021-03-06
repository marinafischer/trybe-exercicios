//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const corretorProva = (gabarito, estudante, funcao) => {
  const notaFinal = funcao(gabarito, estudante);
  return notaFinal
}

const somaNota = (gabarito, estudante) => {
  let acumulador = 0;
  for(let i in gabarito) {
    if (gabarito[i] === estudante[i]) {
      acumulador += 1;

    } if (gabarito[i] !== estudante[i] && estudante[i] !== 'N.A') {
      acumulador -= 0.5;
    }
  }
  return acumulador
}  


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(corretorProva(RIGHT_ANSWERS , STUDENT_ANSWERS, somaNota))