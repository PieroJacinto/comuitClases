test("Testeando igualdad por referencia", () => {
  function Animal(nombre) {
    this.nombre = nombre;
  }

  // Este expect pasa sin problemas
  expect(new Animal("Amelia")).toEqual({ nombre: "Amelia" });

  // Este expect tira error ya que no son el mismo objeto
  expect(new Animal("Amelia")).toStrictEqual({ nombre: "Amelia" });
});