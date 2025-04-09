const usuario = {nombre: "Piero"};
const isUserValid = ()=> {
  if(usuario.nombre === "Piero") {
    console.log("exito!!");
  } else {
    console.log("fallo!!");
  }
}
isUserValid();

function contar() {
  let contador = 0;
  return function () {
    contador++;
    console.log(contador);
  };
}

const incrementar = contar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();

function mostrarValor() {
  let valor = 5;
  console.log(valor);
}
mostrarValor();