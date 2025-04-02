const datos = [
  "hola",
  42,
  false,
  null,
  function () {
    console.log("hola");
  },
];

const saludo = datos[0];
const significadoDeLaVida = datos[1];
const casada = datos[2];
let miVariable = datos[3];
const saludar = datos[4];

console.log(saludo);
console.log(significadoDeLaVida);
console.log("casada?:", casada);
console.log(miVariable);

// Acá se viene el gran momento de tu vida:
saludar(); // muestra en consola hola

