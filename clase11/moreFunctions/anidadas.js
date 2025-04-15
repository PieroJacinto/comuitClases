function mostrarMensajeSecreto(mensaje) {
  function mensajeSecreto(secreto) {
    return `${mensaje} secreto: ${secreto}`;
  }

  const nuevoMensaje = mensajeSecreto("Que bueno es JavaScript!");

  console.log(nuevoMensaje);
}

mostrarMensajeSecreto("Mostar este mensaje");