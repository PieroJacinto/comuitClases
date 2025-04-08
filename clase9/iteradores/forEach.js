const alumnos = ["nico", "pedro", "marta", "belen", "emilia"];

alumnos.forEach(function (alumno) {
  console.log(alumno);
});

// con un fopr tradicional
for (let i = 0; i < alumnos.length; i++) {
  const element = alumnos[i];
  console.log(element);  
}

// arrow functions (funciones flecha)

// con arrow function
alumnos.forEach( (alumno) => {
  console.log(alumno);
});

// o como es solo de 1 linea, púedo prescindir de los parentesis y de las llaves
alumnos.forEach( alumno => console.log(alumno));


// puede recibir un segundo parametro, que es el index
alumnos.forEach( (alumno, index) => console.log(index, alumno));


// puede recibir un tercer parámetro, que es el arreglo completo
alumnos.forEach( (alumno, index, arreglo) => console.log(index, alumno, arreglo));