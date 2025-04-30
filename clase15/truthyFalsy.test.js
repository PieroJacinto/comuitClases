test("Test truty & falsy", () => {
  // Falsy
  const textoVacio = "";
  const cero = 0;
  const nulo = null;
  const indefinido = null;

  // Truthy
  const objeto = {};
  const coleccion = [];
  const nombre = "Nicolas";

  expect(textoVacio).toBeFalsy();
  expect(cero).toBeFalsy();
  expect(nulo).toBeFalsy();
  expect(indefinido).toBeFalsy();

  expect(objeto).toBeTruthy();
  expect(coleccion).toBeTruthy();
  expect(nombre).toBeTruthy();
});