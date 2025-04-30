function fetchDatos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("todo bien"), 4000);
  });
}

test("Test async", async () => {
  const mensaje = await fetchDatos();
  expect(mensaje).toBe("todo bien");
});