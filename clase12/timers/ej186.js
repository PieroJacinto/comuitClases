const crearPromesa = (mensaje) => {
  return new Promise ((onSuccess)=>{
    setTimeout(()=>{
      onSuccess(mensaje)
    }, 5000)
  })
};

const promesa = crearPromesa("la promesa se completo con exito");

promesa.then((mensaje)=>{
  console.log(mensaje)
});