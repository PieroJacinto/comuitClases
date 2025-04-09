function crearMultiplicador(numero1) {
  return function (numero2, callback) {
    const resultado = numero1 * numero2;
    callback(resultado);
  };
}
const resultado = crearMultiplicador(3)(5);
console.log(resultado);


// otra forma:
/*
function crearMultiplicador(numero1) {
  return function (numero2, callback) {
    const resultado = numero1 * numero2;
    callback(resultado);
  };
}

const multiplicarPor5 = crearMultiplicador(5);

multiplicarPor5(3, (resultado)=> {
  console.log(resultado);  
})

*/