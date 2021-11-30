const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('verifica se está tudo maiúsculo', (done) => {
  uppercase('Olá Marina', (resultado)=>{
    try {
      expect(resultado).toBe('OLÁ MARINA');
      done()
    } catch(error) {
      done(error);
    }
  });
});