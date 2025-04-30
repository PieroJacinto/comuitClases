function validarUsuario() {
  throw new Error("Testing jest Error");
}

test("Test throw error", () => {
  expect(() => {
    validarUsuario();
  }).toThrow();

  expect(() => {
    validarUsuario();
  }).toThrow("Testing jest Error");

  expect(() => {
    validarUsuario();
  }).toThrow(new Error("Testing jest Error"));
});