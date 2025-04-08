/* valores q js interpeta como falso ( como condicion ):
- false
- null
- undefined
- 0
- NaN
- ''
*/


const nombre = "Piero";
if (nombre ) {
  console.log("Bienvenido/a: " + nombre);
} else {
  console.log("por favor ingrese su nombre");
}