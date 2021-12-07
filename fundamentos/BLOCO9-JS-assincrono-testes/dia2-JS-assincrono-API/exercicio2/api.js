const url = 'https://api.coincap.io/v2/assets'

function jogaMoedaTela (moeda) {
  const lista = document.querySelector('ul');
  const li = document.createElement('li');
  li.innerHTML = moeda;
  lista.appendChild(li)
}

function extraiInfo (arrayMoedas) {
  return arrayMoedas.forEach(moeda => {
    const {name, symbol, priceUsd} = moeda;
    const texto = `${name} (${symbol}): $${Number(priceUsd).toFixed(2)}`
    return jogaMoedaTela(texto)
  }) 
}

function fetchCriptoAPI () {
  fetch(url)
    .then((resposta)=>resposta.json())
    .then((objeto)=>{
      const criptos = objeto.data.filter((cripto, i)=> i<10); 
      extraiInfo(criptos);
    })
    .catch((error) => jogaMoedaTela(error))
}

window.onload = () => fetchCriptoAPI();