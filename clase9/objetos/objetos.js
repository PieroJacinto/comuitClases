const persona = {
  nombre: "Nico",
  edad: 38,
};

console.log(persona.dni); // undefined

persona.nombre = "Martín";
persona.edad = 20;
persona.dni = 20202123;

console.log(persona);
// { nombre: 'Martín', edad: 20, dni: 20202123 }

console.log(persona.dni); // 20202123
console.log(persona.dni); // 202021