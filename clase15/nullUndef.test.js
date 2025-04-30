test("Test null & undefined", () => {
  const valorNulo = null;
  var valorIndefinido;
  const nombre = "Nicolas";

  expect(valorNulo).toBeNull();
  expect(valorIndefinido).toBeUndefined();
  expect(nombre).not.toBeUndefined();
  expect(nombre).toBeDefined();
});