const fetch = require('node-fetch');

const fetchJoke = async () => { //usando async
  //'https://api.chucknorris.io/jokes/random?category=dev';
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  // console.log(fetch(url)); fluxo assincrono precisa ser controlado
  fetch (url) //const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`)); // catch vai pegar um possivel erro (api incorreta)
    //return resul.
}
fetchJoke();

// sem usar then(), catch()
const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

