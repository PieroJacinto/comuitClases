// length
const alumnos = ["nico", "pedro", "marta", "belen", "emilia"];
const cantidadDeElementos = alumnos.length;
const ultimoIndice = cantidadDeElementos - 1;
// console.log(alumnos[ultimoIndice]); // emilia

// una forma mas corta de escribirlo

console.log(alumnos[alumnos.length - 1]); // emilia

//push
// para agregar 1 o mas elementos a el final de un array
// nos devuelve el largo del nuevo array

const animales = ["perro", "pato", "vaca"];
console.log(animales);
let cantidadDeAnimales = animales.push("gato");

console.log(animales);
// [ 'perro', 'pato', 'vaca', 'gato' ]
console.log(cantidadDeAnimales); // 4

cantidadDeAnimales = animales.push("elefante", "delfin");

console.log(animales);
// [ 'perro', 'pato', 'vaca', 'gato', 'elefante', 'delfin' ]
console.log(cantidadDeAnimales); // 6


//unshift
//para agregar 1 o mas elementos a el inicio de un array

cantidadDeAnimales = animales.unshift("tigre", "garza")
console.log(animales);
console.log(cantidadDeAnimales);


// shift
// elimina el primer elemento de un array
// Retorna el elemento eliminado
// este método modifica la propiedad length del array

const tigre = animales.shift()
console.log(tigre);
console.log(animales.length);


/* 
Pop
El método pop elimina el último elemento de un array
Retorna el elemento eliminado
Este método modifica la propiedad length del array
*/

const delfin = animales.pop()
console.log(delfin);
console.log(animales.length);

console.log(animales);

/*
Sort
Utilizando el método sort podemos ordenar un array
Retorna el array ordenado
Los elementos son ordenados convirtiéndolos a strings y comparando la posición del valor Unicode de dichos strings
*/

let numeros = [1, 4, 2, 5, 3, 8, 9];
// numeros = numeros.sort();

console.log(numeros);
// [ 1, 2, 3, 4, 5, 8, 9 ]

/*
Reverse
El método reverse nos permite revertir el orden que tiene un array
Retorna el array modificado
*/
numeros = numeros.reverse()
console.log(numeros);

// me ordena strings alfabeticamente (ojo con las mayusculas)
let nombres = [ "piero", "armando", "bruno", "cristian"]
console.log(nombres.sort());

/*
Join
El método join permite unir los valores de un array en un string
Acepta como valor un string para unir los elementos
*/
let resultado = numeros.join(" - ");

console.log(resultado);
// 1 - 4 - 2 - 5 - 3 - 8 - 9

resultado = numeros.reverse().join(", ");

console.log(resultado);
// 1, 4, 2, 5, 3, 8, 9

/*
Concat
El método concat nos permite unir 2 arrays y obtener un nuevo array con los elementos de ambos
*/
const animales2 = ["perro", "vaca", "gato"];
const mutantes = ["Charles Francis Xavier", "Cíclope", "Bestia", "Jean Grey"];
const animalesMutantes = animales2.concat(mutantes);

console.log(animalesMutantes);
/*
[ 
  'perro',
  'vaca',
  'gato',
  'Charles Francis Xavier',
  'Cíclope',
  'Bestia',
  'Jean Grey' 
]
*/
/*
IndexOf
El método indexOf retorna el primer índice donde se encuentra un elemento
Si no encuentra el elemento buscado retorna -1
*/
if (mutantes.indexOf("Bestia") != -1) {
  console.log("Bestia es parte de los mutantes");
}

// Bestia es parte de los mutantes

if (mutantes.indexOf("Logan") != -1) {
  console.log("Logan es parte de los mutantes");
} else {
  console.log("Logan no es parte de los mutantes");
}
// Logan no es parte de los mutantes

/*
toString
El método toString nos retorna la representación del contenido de un array en string
Es similar a join pero no sabemos como une los elementos ya que no lo especificamos
*/
console.log(mutantes.toString());
