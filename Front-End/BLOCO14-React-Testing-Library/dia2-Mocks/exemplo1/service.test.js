const service = require('./service');


it( 'Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', ()=>{
  service.geraNumeroAleatorio = jest.fn().mockReturnValur(10);
  expect(service.geraNumeroAleatorio()).toBe(10);
  expect(service.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
});

it('crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
  service.geraNumeroAleatorio.mockImplementationOnce((a,b)=>a/b);
  const result = service.geraNumeroAleatorio(10,2);
  expect(service.geraNumeroAleatorio).toHaveBeenCalled();
  expect(service.geraNumeroAleatorio).toHaveBeenCalledWith(10, 2);
  expect(service.geraNumeroAleatorio).toHaveBeenCalledTimes(1);
  expect(result).toBe(5);
});