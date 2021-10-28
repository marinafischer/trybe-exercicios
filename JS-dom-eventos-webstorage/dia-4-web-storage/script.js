window.onload = function () {
  if (localStorage.length > 0) {
    let dadosNavegador = JSON.parse(localStorage.getItem('configuracao'))
    for (let i in dadosNavegador) {
      configuracao[i] = dadosNavegador[i]
    }
    alteraCorFundo(configuracao)
    alteraCorLetra(configuracao)
    alteraTamanhoFonte(configuracao)
    alteraEspacamento(configuracao)
    seletorEspacamento.value = configuracao.espacamento
    alteraTamanhoFonte(configuracao)
    seletorFonte.value = configuracao.fonte
  }
}

let configuracao = {
  corFundo: "",
  corLetra: "",
  tamanhoFonte: "",
  espacamento: "",
  fonte: "",
}

//variaveis

let seletorFundoPreto = document.getElementById('seletorFundoPreto');
let seletorFundoBranco = document.getElementById('seletorFundoBranco');
let seletorFundoAzul = document.getElementById('seletorFundoAzul');
let seletorFundoRosa = document.getElementById('seletorFundoRosa')
let paragrafos = document.getElementsByTagName('p')
let noticia = document.getElementsByClassName('noticia')
let contentorNoticias = document.querySelector('.contentor-noticias')
let titulos = document.getElementsByTagName('h2')
let seletorLetraPreta = document.getElementById('seletorLetraPreta');
let seletorLetraBranca = document.getElementById('seletorLetraBranca');
let seletorLetraAzul = document.getElementById('seletorLetraAzul');
let seletorLetraVerde = document.getElementById('seletorLetraVerde');
let seletorTamanhoP = document.getElementById('seletorTamanhoP');
let seletorTamanhoM = document.getElementById('seletorTamanhoM');
let seletorTamanhoG = document.getElementById('seletorTamanhoG');
let seletorTamanhoXG = document.getElementById('seletorTamanhoXG');
let seletorEspacamento = document.querySelector('.espacamento');
let seletorFonte = document.querySelector('.fonte')
    
//Mudança de cor de fundo
seletorFundoPreto.addEventListener('click', function(){
  fundo('black');
})
seletorFundoBranco.addEventListener('click',function (){
  fundo('white')
})
seletorFundoAzul.addEventListener('click',function (){
  fundo('rgb(32, 32, 102)')
})
seletorFundoRosa.addEventListener('click',function (){
  fundo('pink')
})

function fundo(cor = 'rgb(218, 218, 218)'){
  configuracao.corFundo = cor;
  alteraCorFundo(configuracao);
}

function alteraCorFundo(objeto) {
  for (let i=0; i<paragrafos.length; i++) {
    paragrafos[i].style.backgroundColor = objeto.corFundo
  } 
  for (let j=0; j<noticia.length; j++) {
    noticia[j].style.backgroundColor = objeto.corFundo
    titulos[j].style.backgroundColor = objeto.corFundo
  }
  contentorNoticias.style.backgroundColor = objeto.corFundo
  localStorage.setItem('configuracao', JSON.stringify(objeto))
}

//Mudando de cor de letra

seletorLetraPreta.addEventListener('click', function(){
  letra('black')
})
seletorLetraBranca.addEventListener('click', function(){
  letra('white')
})
seletorLetraAzul.addEventListener('click', function(){
  letra('rgb(196, 192, 255)')
})
seletorLetraVerde.addEventListener('click', function(){
  letra('rgb(60, 129, 64)')
})

function letra(cor = 'black'){
  configuracao.corLetra = cor;
  alteraCorLetra(configuracao);
}

function alteraCorLetra(objeto) {
  for (let i=0; i<paragrafos.length; i++) {
    paragrafos[i].style.color = objeto.corLetra
  } 
  for (let j=0; j<titulos.length; j++) {
    titulos[j].style.color = objeto.corLetra
  }
  localStorage.setItem('configuracao', JSON.stringify(objeto))
}

//Mudando Tamanho de Letra

seletorTamanhoP.addEventListener('click', function(){
  tamanhoLetra('15px')
})
seletorTamanhoM.addEventListener('click', function(){
  tamanhoLetra('20px')
})
seletorTamanhoG.addEventListener('click', function(){
  tamanhoLetra('25px')
})
seletorTamanhoXG.addEventListener('click', function(){
  tamanhoLetra('30px')
})

function tamanhoLetra(tam = '20px'){
  configuracao.tamanhoFonte = tam;
  alteraTamanhoFonte(configuracao);
}

function alteraTamanhoFonte(objeto) {
  for (let i=0; i<paragrafos.length; i++) {
    paragrafos[i].style.fontSize = objeto.tamanhoFonte
  } 
  localStorage.setItem('configuracao', JSON.stringify(objeto))
}

//espaçamento entre linhas 

seletorEspacamento.addEventListener('change', function(e){
  espacamento(e.target.value)
})

function espacamento(espaco) {
  configuracao.espacamento = espaco;
  alteraEspacamento(configuracao);
}

function alteraEspacamento(objeto) {
  for (let i=0; i<paragrafos.length; i++) {
    paragrafos[i].style.lineHeight = objeto.espacamento
  } 
  localStorage.setItem('configuracao', JSON.stringify(objeto))
}


console.log(localStorage)

//mudança da fonte

seletorFonte.addEventListener('change', function(e){
  console.log(e.target.value)
  tipoFonte(e.target.value)
})

function tipoFonte(fonte) {
  configuracao.fonte = fonte;
  alteraTamanhoFonte(configuracao)
}

function alteraTamanhoFonte(objeto) {
  for (let i=0; i<paragrafos.length; i++) {
    paragrafos[i].style.fontFamily = objeto.fonte
  } 
  localStorage.setItem('configuracao', JSON.stringify(objeto))
}



