function mostrarIntegrantesDeClase(
  profesor,
  alumnos,
  ...restoDeLosIntegrantes
) {
  console.log("Profesor: ", profesor); // Nicolas
  console.log("Alumnos", alumnos); // [ 'Juan', 'María' ]
  console.log(
    "Resto de los que hacen posible un curso:",
    restoDeLosIntegrantes
  ); // [ 'Soledad', 'Pablo' ]
}

mostrarIntegrantesDeClase("Piero", ["Juan", "María"], "Soledad", "Pablo");