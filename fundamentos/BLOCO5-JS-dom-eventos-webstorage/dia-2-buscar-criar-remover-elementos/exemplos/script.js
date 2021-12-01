//Acesse o elemento elementoOndeVoceEsta .
let ondeEstou = document.getElementById('elementoOndeVoceEsta')
console.log(ondeEstou)

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = ondeEstou.parentElement
pai.style.color = 'pink'
console.log(pai)
/*
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFIlho = ondeEstou.firstElementChild
primeiroFilhoDoFIlho.innerHTML = 'Olá, eu sou o primeiro filho do filho'
console.log(primeiroFilhoDoFIlho)

//Acesse o primeiroFilho a partir de pai .
let primeiroFilho = pai.firstElementChild
console.log(primeiroFilho)

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
primeiroFilho = ondeEstou.previousElementSibling
console.log(primeiroFilho)

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
let atencao = ondeEstou.nextSibling
console.log(atencao)

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
let terceiroFilho = ondeEstou.nextElementSibling
console.log(terceiroFilho)

//Agora acesse o terceiroFilho a partir de pai.
terceiroFilho = pai.lastElementChild.previousElementSibling
console.log(terceiroFilho)

//Crie um irmão para elementoOndeVoceEsta .
let novoIrmao = document.createElement('section')
novoIrmao.id = 'quintoFilho'
pai.appendChild(novoIrmao)
console.log(novoIrmao)


//Crie um filho para elementoOndeVoceEsta .
let outroFilho = document.createElement('section')
outroFilho.id = 'terceiroFilho'
ondeEstou.appendChild(outroFilho)
console.log(outroFilho)
//Crie um filho para primeiroFilhoDoFilho .
let meuNeto = document.createElement('section')
meuNeto.id='meuNeto'
primeiroFilhoDoFIlho.appendChild(meuNeto)
console.log(meuNeto)
//A partir desse filho criado, acesse terceiroFilho .
terceiroFilho = meuNeto.parentElement.parentElement.nextElementSibling
console.log(terceiroFilho)

//Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.
*/



for (let i = pai.childNodes.length - 1; i >= 0; i -= 1) {
  const filho = pai.childNodes[i];
  if (filho.id !== 'elementoOndeVoceEsta') {
    filho.remove();
  }
}

let segundoFilho = ondeEstou.lastElementChild
ondeEstou.removeChild(segundoFilho)


// for (let i = 0; i <= pai.childNodes.length - 1; i++) {
//   const filho = pai.childNodes[i];
//   if (filho.id !== 'elementoOndeVoceEsta') {
//     console.log('entrei')
//     filho.remove();
//   }
// }