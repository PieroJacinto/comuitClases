function funcionPadre(valor1) {
  function funcionHijo(valor2) {
    console.log(`Valor 1 ${valor1} desde dentro de la función hijo`);
    console.log(`Valor 2 ${valor2} desde dentro de la función hijo`);
  }

  funcionHijo(2); // Puedo llamar la función hijo desde dentro de la función padre

  console.log(`Valor 1 ${valor1} desde dentro de la función padre`);
  // console.log(`Valor 2 ${valor2} desde dentro de la función padre`); // Tira error
}

// console.log(`Valor 1 ${valor1} desde fuera de la función padre`); // Tira error
// console.log(`Valor 2 ${valor2} desde fuera de la función padre`); // Tira error

funcionPadre(1);
// funcionHijo(3); // Tira error