test("Testeando toEqual en objetos", () => {
  const objeto1 = {
    nombre: "Nicolas",
  };

  const objeto2 = {
    nombre: "Nicolas",
  };

  // expect(objeto1).toBe(objeto2); // Esto tiraría un error por comparar por valor
  expect(objeto1).toEqual(objeto2);
});

test("Testeando toEqual en arrays", () => {
  const animales1 = ["Perro", "Gato"];
  const animales2 = ["Perro", "Gato"];

  // expect(animales1).toBe(animales2); // esto tira error por no ser el mismo valor
  expect(animales1).toEqual(animales2);
});