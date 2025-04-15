// arguments
// function sumar() {
//   // console.log(arguments); // Arguments] { '0': 10, '1': 20, '2': 30, '3': 40 }
//   // console.log(typeof arguments); // object
//   // console.log(arguments.length); // 4
//   // console.log(arguments[0]); // 10
//   // console.log(arguments[1]); // 20
//   // console.log(arguments[2]); // 30
//   // console.log(arguments[3]); // 40
//   // console.log(arguments[6]);
// }

// sumar(10, 20, 30, 40,60, 100, "hola");

function sumar() {
  let resultado = 0;
  for (let index = 0; index < arguments.length; index++) {
    resultado += arguments[index];
  }
  return resultado;
}

const resultado = sumar(10, 20, 30, 40);
console.log(resultado);