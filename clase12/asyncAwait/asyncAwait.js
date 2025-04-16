function obtenerDatos(numero) {
  return new Promise((onSuccess) => {
    const onSuccessHandler = () => {
      let datos = [];

      switch (numero) {
        case 2:
          datos = ["Marta", "elefante", "Chau"];
          break;
        case 3:
          datos = ["Javier", "mono", "Hello"];
          break;
        default:
          datos = ["Nico", "perro", "Hola"];
          break;
      }

      onSuccess(datos);
    };

    setTimeout(onSuccessHandler, 1000);
  });
}

async function mostrarDatosEnPantalla() {
  const datos = await obtenerDatos(1);
  const datos1 = await obtenerDatos(2);
  const datos2 = await obtenerDatos(3);

  return [datos, datos1, datos2];
}

// Esta función retorna una promesa.
mostrarDatosEnPantalla().then((datos) => console.log(datos));