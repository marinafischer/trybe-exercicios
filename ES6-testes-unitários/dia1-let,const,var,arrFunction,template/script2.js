let clickCount = 0;
const contador = document.getElementById('counter');
const btnCounter = document.getElementById('btn-counter');

btnCounter.addEventListener('click', ()=> contador.innerText = clickCount+= 1);

