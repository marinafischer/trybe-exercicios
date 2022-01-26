import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// test('verifica se ao receber piada ela é renderizada na tela', async () => {
//   // global.fetch = (url) => {
//   //   return Promise.resolve({
//   //     json: ()=> Promise.resolve({
//   //       id: 'fdfsdfdf',
//   //       joke: 'Pq a galinha atravessou a rua',
//   //       status: 200,
//   //     })
//   //   })
//   // }

//   global.fetch = jest.fn().mockResolvedValue({
//     json: jest.fn().mockResolvedValue({
//       id: 'fdfsdfdf',
//       joke: 'Pq a galinha atravessou a rua',
//       status: 200,
//     })
//   })

//   render(<App />);
//   const renderJoke = await screen.findByText('Pq a galinha atravessou a rua');
//   expect(renderJoke).toBeInTheDocument();
// });

// A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , isso é bem util para que não tenha interferência entre um teste e outro.

afterEach(() => jest.clearAllMocks());

//É importante termos o async em it('fetch joke', async () => { , para que se possa utilizar await findByText onde estamos dizendo ao nosso teste: ei espere até que consiga encontrar esse texto no dom ou de erro por limite de tempo ;

it('fetches a joke', async () => {
  // A constante joke cria um objeto similar ao que é retornado da API ;
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  //O jest.spyon espiona as chamadas a função fetch do objeto global , é por meio deste objeto global que conseguimos usar qualquer função do sistema, por exemplo a função parseInt ;
  //Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock . Repare que para cada .then utilizamos .mockResolvedValue e simulamos o retorno que o fetch teria, primeiro retornamos um objeto que contem a função .json e dentro dela criamos um mock que retorna a nossa piada, satisfazendo o que é esperado no nosso componente;

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  //As funções toBeCalledTimes e toBeCalledWith servem para garantir respectivamente, o número de chamadas ao nosso fetch e que ele foi chamado com os argumentos corretos.
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});