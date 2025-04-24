const Persona = {
  nombre: "",
  apellido: "",
  mostrarNombreCompleto: function () {
    console.log(`${this.nombre} ${this.apellido}`);
  },
};

const persona = Object.create(Persona);
persona.nombre = "Nicolas";
persona.apellido = "Isnardi";

persona.mostrarNombreCompleto();