

const persona = {
  nombre: "Nico",
  saludar: function () {
    console.log("Hola, mi nombre es " + this.nombre);
  },
};

persona.saludar(); // Hola, mi nombre es Nico
