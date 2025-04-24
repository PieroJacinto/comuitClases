function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.mostrarNombreCompleto = function () {
    console.log(`${this.nombre} ${this.apellido}`);
  };
}

const persona = new Persona("Nicolas", "Isnardi");
const persona1 = new Persona("Ximena", "Cruz");

persona.mostrarNombreCompleto();
persona1.mostrarNombreCompleto();

console.log(persona);
console.log(persona1);