test("Testear que verdadero sea igual que verdadero", () => {
  const valorQueQuieroTestear = true;
  const valorEsperado = false;

  expect(valorQueQuieroTestear).toBe(valorEsperado);
});