function saludar() {
  console.log("hola");
}

// saludar(); // Muestra en consola hola
// saludar(); // Muestra en consola hola

// funcion ANONIMA
// Al asignar una función a una variable no hace falta ponerle nombre a la función
const saludar2 =  () => {
  console.log("hola");
};

// saludar2(); // Muestra en consola hola
// saludar2(); // Muestra en consola hola

// console.log(saludar2());

// para que la funcion devuelva algo, necesitamos utilizar la palabra reservada return
function obtenerSaludo() {
  return "hola";
}

// obtenerSaludo retorna un tipo de dato string y lo podemos mostrar en console.log()
console.log(obtenerSaludo());

// Podemos guardar el valor retornado de una función en una variable y luego utilizarlo
const saludo = obtenerSaludo();
// console.log(saludo);

const saludo3 = function(){
  return "hola"
}

let saludando = saludo3()

// console.log(saludando);
// parametros en las funciones

function saludar(nombreDelUsuario) {
  console.log("Hola " + nombreDelUsuario + "!!!");
}

saludar("Marta"); // Muestra en consola: Hola: Marta!!!
saludar("Xime"); // Muestra en consola: Hola: Xime!!!
saludar("Raúl"); // Muestra en consola: Hola: Raúl!!!
// con variable:

const saludar4 = function (nombreDelUsuario) {
  console.log("Hola " + nombreDelUsuario + "!!!");
};

saludar4("Marta"); // Muestra en consola: Hola: Marta!!!
saludar4("Xime"); // Muestra en consola: Hola: Xime!!!
saludar4("Raúl"); // Muestra en consola: Hola: Raúl!!!