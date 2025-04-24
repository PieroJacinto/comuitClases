const coleccion: Array<number> = [10, 20, 30];

class Persona {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

const persona1 = new Persona("Nicolas");
const persona2 = new Persona("Axel");
const personas: Array<Persona> = [persona1, persona2];