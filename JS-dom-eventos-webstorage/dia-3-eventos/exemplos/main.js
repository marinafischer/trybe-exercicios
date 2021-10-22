const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function adicionaClasse(e) {
  let elementoTech = document.querySelector('.tech');
  elementoTech.classList.remove('tech');
  e.target.classList.add('tech');
  input.value = '';
}

firstLi.addEventListener('click',adicionaClasse)
secondLi.addEventListener('click',adicionaClasse)
thirdLi.addEventListener('click',adicionaClasse)

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function adicionaTexto () {
  let elementoTech = document.querySelector('.tech')
  elementoTech.innerText = input.value
}
input.addEventListener('keyup', adicionaTexto)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

// 4.1. Que tal redirecionar para seu portifólio?
function redirecionar() {
  window.location.replace('https://marinafischer.github.io/')
}

myWebpage.addEventListener('dblclick', redirecionar)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

myWebpage.addEventListener('mouseover', mudaCor)
myWebpage.addEventListener('mouseleave', voltaCor)

function mudaCor (e) {
  e.target.style.color = 'red';
}

function voltaCor (e) {
  e.target.style.color = 'white';
}

