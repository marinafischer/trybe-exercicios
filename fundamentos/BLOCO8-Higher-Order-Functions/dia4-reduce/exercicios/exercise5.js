//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc1, nome) => {
    return acc1 + nome.split('').reduce((acc2, letra) => {
      if (letra === 'a' || letra === 'A') {
        return acc2 + 1
      }
      return acc2
    },0)
  },0)
}
console.log(containsA())