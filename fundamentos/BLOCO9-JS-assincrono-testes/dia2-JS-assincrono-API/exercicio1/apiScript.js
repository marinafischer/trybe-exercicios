// apiScript.js
const piadaContent = document.querySelector('#jokeContainer');


const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then((resposta)=>resposta.json())
    .then((objeto)=>{
      piadaContent.innerHTML = objeto.joke 
    })
};

window.onload = () => fetchJoke();