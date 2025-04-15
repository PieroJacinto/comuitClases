function map(coleccion = [], callback = () => {}) {
  for (let index = 0; index < coleccion.length; index++) {
    callback(coleccion[index]);
  }
}

const alumnos = ["Juan", "Marta", "Pepe", "Agustina", "Soledad"];
const mostrarNombreDeAlumno = (alumno) => console.log(alumno);

map(alumnos, mostrarNombreDeAlumno);