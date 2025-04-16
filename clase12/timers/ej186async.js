const crearPromesa = (mensaje) => {
  return new Promise ((onSuccess)=>{
    setTimeout(()=>{
      onSuccess(mensaje)
    }, 5000)
  })
};

const mostrarMensaje = async () => {
  try{
    const mensaje = await crearPromesa("La promesa se resolvió");
    console.log(mensaje);    
  } catch (error){
    console.log(error);    
  }
}
mostrarMensaje();
