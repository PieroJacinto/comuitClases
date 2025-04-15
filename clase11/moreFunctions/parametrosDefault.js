// function sumar(numero1 = 1, numero2 = 2) {
//   return numero1 + numero2;
// }

// console.log(sumar(3,3))
function mostrarItemsDeColeccion(coleccion = []) {
  for (let index = 0; index < coleccion.length; index++) {
    console.log(coleccion[index]);
  }
}

// No importa si la función es llamada sin parametros ya que tiene como valor por defecto un array vacio con la propiedad length
mostrarItemsDeColeccion();