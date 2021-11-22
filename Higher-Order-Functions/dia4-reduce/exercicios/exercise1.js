//Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  //return arrays.reduce((acc, vetor) => [acc + vetor])
  return arrays.reduce((acc, vetor) => acc.concat(vetor), []);
}
console.log(flatten())