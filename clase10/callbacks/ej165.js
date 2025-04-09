const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function map(coleccion, funcion) {
  const resultado = [];
  
  coleccion.forEach(function(elemento) {    
    resultado.push(funcion(elemento));
  });
  return resultado;
}

function multiplicarPorDos(numero) {
  return numero * 2;
}

const nuevaColeccion = map(numeros, multiplicarPorDos);

console.log("Colección original:", numeros);
console.log("Nueva colección (multiplicada por 2):", nuevaColeccion);