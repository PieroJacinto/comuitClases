// Filter
// El método filter retorna un nuevo array utilizando un filtro
// Pasamos una función que retorna verdadero o falso para saber si debemos añadir el nuevo elemento al nuevo array o no

const notas = [1, 2, 3, 4, 10, 5];
const notasGrosas = notas.filter(function (nota) {
  return nota >= 4;
});

console.log(notasGrosas); // [10] array con una sola nota grosa
console.log(notas); // [1, 2, 3, 4, 10, 5] array original