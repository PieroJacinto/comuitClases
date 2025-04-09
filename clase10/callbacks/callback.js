// function hacerAlgo(funcionComoParametro) {
//   console.log("hacer algo");
//   funcionComoParametro();
// }

// let termino = function () {
//   console.log("termino");
// };

// hacerAlgo(termino);

// let numero = 0;

// function sumar(n, callback) {
//   n++;
//   callback(n);
// }

// sumar(numero, function (resultado) {
//   console.log(resultado); // 1
// });

// console.log(numero); // 0

// otro ejemplo:

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Callback
// numeros.forEach(function (numero) {
//   console.log(numero);
// });

// // Callback
// let numerosPares = numeros.filter(function (numero) {
//   return numero % 2 === 0;
// });

// // Callback
// let resultado = numeros.reduce(function (resultado, numero) {
//   return resultado + numero;
// });

// // Callback
// let numerosModificados = numeros.map(function (numero) {
//   return numero + 10;
// });

// Función saludar que acepta un mensaje y una función de despedida
function saludar(mensaje, despedida) {
  // Mostrar el mensaje en pantalla
  console.log(mensaje);
  
  // Llamar a la función pasada por parámetro
  despedida();
}

// Llamar a la función saludar con el mensaje "Bienvenidos a JavaScript"
saludar("Bienvenidos a JavaScript", function() {
  console.log("Gracias por visitar");
});
