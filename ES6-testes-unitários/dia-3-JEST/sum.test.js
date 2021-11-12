const {sum, myRemove} = require('./sum');

describe('Verificações da função sum', ()=>{
  it('Verifica se o retorno de sum(4, 5) é 9', ()=>{
    expect(sum(4,5)).toBe(9);
  });
  
  it('Verifica se o retorno de sum(0, 0) é 0', ()=>{
    expect(sum(0,0)).toBe(0);
  });
  
  it('Verifica se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', ()=>{
    expect(() => {sum(4,'5')}).toThrowError();
  });
  
  it('Verifica se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', ()=>{
    expect(() => {sum(4,'5')}).toThrowError(new Error('parameters must be numbers'))
  });
});

describe('Verificações da função myRemove', ()=>{
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', ()=>{
    const array = [1, 2, 3, 4];
    expect(myRemove(array,3)).toEqual([1, 2, 4])
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', ()=>{
    const array = [1, 2, 3, 4];
    expect(myRemove(array,3)).not.toEqual([1, 2, 3, 4])
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', ()=>{
    const array = [1, 2, 3, 4];
    expect(myRemove(array,5)).toEqual([1, 2, 3, 4])
  });
  

});

