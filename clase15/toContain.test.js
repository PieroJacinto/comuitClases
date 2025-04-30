test("Test coleccion", () => {
  const animales = ["Perro", "Gato", "Mono"];

  expect(animales).toContain("Mono");
});