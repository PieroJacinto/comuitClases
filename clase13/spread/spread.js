
// const animales1 = ["leon", "perro", "gato"];
// const animales2 = ["gato", "delfin", "elefante"];

// const animales = [...animales1, ...animales2];

// console.log(animales); // [ 'leon', 'perro', 'gato', 'gato', 'delfin', 'elefante' ]

// en objetos:
// const persona = {
//   nombre: "Nicolas",
//   apellido: "Isnardi",
// };

// const datosUsuario = {
//   username: "nisnardi",
//   password: "1234",
// };

// const user = {
//   ...persona,
//   ...datosUsuario,
// };

// console.log(user);

// {
//   nombre: 'Nicolas',
//   apellido: 'Isnardi',
//   username: 'nisnardi',
//   password: '1234'
// }

// // ejemplo sobreescribiendo
// const persona = {
//   nombre: "Nicolas",
//   apellido: "Isnardi",
// };

// const datosUsuario = {
//   username: "nisnardi",
//   password: "1234",
// };

// const user = {
//   ...persona,
//   ...datosUsuario,
//   nombre: "Simon",
//   username: "mono2019",
// };

// console.log(user);

// // en funciones
// function mostrarDatosEnPantalla(valor1, valor2) {
//   console.log(`valor1: ${valor1}, valor2: ${valor2}`);
// }

// const animales = ["perro", "gato", "iguana"];

// mostrarDatosEnPantalla(...animales); // valor1: perro, valor2: gato

// function mostrarDatosEnPantalla(valor1, valor2, valor3, valor4) {
//   console.log(
//     `valor1: ${valor1}, valor2: ${valor2}, valor3: ${valor3}, valor4: ${valor4}`
//   );
// }

// const animales = ["perro", "gato"];

// mostrarDatosEnPantalla("delfin", ...animales, "leon");

const animales1 = ["leon", "perro", "gato"];
const animales2 = ["delfin", "loro", "mono"];

const animales = [...animales1, ...(true ? animales2 : [])];

console.log(animales); //[ 'leon', 'perro', 'gato' ]

const mostrarOtro = true;
const persona = {
  nombre: "Nicolas",
  apellido: "Isnardi",
};

const datosUsuario = {
  username: "nisnardi",
  password: "1234",
};

const user = {
  ...persona,
  ...datosUsuario,
  ...(mostrarOtro ? { nombre: "Simon", username: "mono2019" } : {}),
};

console.log(user);
// {
//   nombre: 'Nicolas',
//   apellido: 'Isnardi',
//   username: 'nisnardi',
//   password: '1234'
// }