// forma tradicional
/*
const persona = { nombre: "Marta", edad: 35 };
const nombre = persona.nombre;
const edad = persona.edad;

console.log(nombre); // "Marta"
console.log(edad); // 35
*/

// con destructuring:
// const persona = { nombre: "Marta", edad: 35 };
// const { nombre, edad } = persona;

// console.log(nombre); // "Marta"
// console.log(edad); // 35

// tambien podemos cambiar el nombre a las propiedades del objeto
// const persona = { nombre: "Marta", edad: 35 };
// const { nombre: pepito, edad } = persona;

// console.log(pepito); // "Marta"
// console.log(edad); // 35

/// tambieb podemos utilizar spread:
// const persona = { nombre: "Marta", edad: 35, enPareja: true };
// const { nombre, ...otrasPropiedades } = persona;

// console.log(nombre); // "Marta"
// console.log(otrasPropiedades); // { edad: 35, enPareja: true }

const persona = {
  nombre: "Marta",
  edad: 35,
  enPareja: true,
  domicilio: { calle: "lala", altura: 1234 },
};
const {
  nombre,
  domicilio: { calle, altura },
} = persona;

console.log(nombre); // "Marta"
console.log(calle); // lala
console.log(altura); // 1234