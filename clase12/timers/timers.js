// const saludar = function (nombre, apodo) {
//   console.log(`hola ${nombre} ${apodo}`);
// };

// setTimeout(saludar, 5000, "Marta", "Martita");
const saludar = function () {
  console.log("hola");
};

const id = setInterval(saludar, 1000);
console.log(id);

// se corta la ejecución
const cortar = setTimeout(function(){
clearInterval(id)}, 5000);