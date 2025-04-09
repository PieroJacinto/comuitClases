let loading = false;

function funcionQueTiraError() {
  throw new Error("Prueba que podemos tirar un error en JavaScript");
}

try {
  loading = true;
  funcionQueTiraError();
} catch (error) {
  console.log(`Mostramos el error: ${error}`);
} finally {
  loading = false;
}

console.log("Linea luego del error");
console.log(loading);