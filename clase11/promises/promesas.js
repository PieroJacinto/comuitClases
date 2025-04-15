const promesa = new Promise((resolve, reject) => {
  const error = false;

  if (error) {
    reject(new Error("Algo salió mal"));
  } else {
    resolve("Se resolvió con éxito la promesa");
  }
});

promesa
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error.message);
    console.log(promesa);
  });