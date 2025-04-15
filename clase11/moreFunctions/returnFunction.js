function obtenerFuncionSumar() {
  const suma = function (numero1, numero2) {
    return numero1 + numero2;
  };

  return suma;
}

const mostrarSuma = obtenerFuncionSumar();

const resultado = mostrarSuma(10, 20);

console.log();


//otr forma de ejecutarla

// obtenerFuncionSumar()(10, 20)