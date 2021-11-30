// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8-9");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const erroEsperado = new Error('Não temos esse pokémon para você :(');
    const filtro = (pokemon) => pokemon.name === 'Marina' ;
    const funcaoRetornoErro = (erro, mensagem) => {
      try{
        expect(erro).toEqual(erroEsperado);
        done();
      } catch(error){
        done(error);
      }
    }
    getPokemonDetails(filtro,funcaoRetornoErro)
  });

  it("retorna os dados do Bulbasaur", (done) => {
    const mensagemEsperada = `Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf`;
    const filtro = (pokemon) => pokemon.name === 'Bulbasaur';
    const funcaoRetorno = (erro, mensagem) => {
      try{
        expect(mensagem).toEqual(mensagemEsperada);
        done();
      } catch(error){
        done(error);
      }
    }
    getPokemonDetails(filtro,funcaoRetorno)
  });
  it("retorna os dados do Charmander", (done) => {
    const mensagemEsperada = `Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember`;
    const filtro = (pokemon) => pokemon.name === 'Charmander';
    const funcaoRetorno = (erro, mensagem) => {
      try{
        expect(mensagem).toEqual(mensagemEsperada);
        done();
      } catch(error){
        done(error);
      }
    }
    getPokemonDetails(filtro,funcaoRetorno)
  });
});