function funcionQueTiraError() {
  throw new Error("Prueba que podemos tirar un error en JavaScript guacho");
}

funcionQueTiraError();

console.log("Linea luego del error");