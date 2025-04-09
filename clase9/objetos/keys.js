const persona = {
  nombre: "Nico",
  edad: 38,
};

persona.dni = 20202138;
persona.calle = "arcos 220";

const propiedades = Object.keys(persona);

propiedades.forEach(function (propiedad) {
  console.log(persona[propiedad]);
});
/*
  Nico
  38
  20202138
  arcos 220
*/