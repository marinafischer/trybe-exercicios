//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const resultadoSorteio = (aposta, funcao) => {
  const numeroSorteado = Math.floor(Math.random() * 5 + 1);
  funcao(aposta, numeroSorteado)? console.log('Parabéns você ganhou') : console.log('Tente novamente')
}

const verificaResultado = (aposta, numeroSorteado) => aposta === numeroSorteado

// {
//   console.log(aposta, numeroSorteado)
//   aposta === numeroSorteado ? true : false
//   // if (aposta === numeroSorteado) {
//   //   return true
//   // }
//   // return false
// }

resultadoSorteio(3, verificaResultado)