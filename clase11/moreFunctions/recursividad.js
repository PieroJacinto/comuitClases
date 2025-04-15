function mostrarNumeros(numero = 0) {
  console.log(numero);
  if (numero < 10) {
    mostrarNumeros(numero + 1);
  }
}

mostrarNumeros();