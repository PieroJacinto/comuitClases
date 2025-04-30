// funcion jestfn()

//mock simple sin implementacion
const mockSimple = jest.fn()

// mock con implementacion
const mockConImplementacion = jest.fn((x) => x.toUpperCase());

function recorrer(items, callback) {
  let counter = 0;
  for (const item of items) {
    counter += 1;
    callback(`${counter} ${item}`);
  }
}

const mockCallback = jest.fn((x) => x.toUpperCase());

test("forEach mock function", () => {
  const animales = ["Perro", "Gato", "Mono"];

  recorrer(animales, mockCallback);

  expect(mockCallback.mock.calls).toHaveLength(3);
  console.log(mockCallback.mock.results);
  
  expect(mockCallback.mock.calls[0][0]).toBe("1 Perro");
  expect(mockCallback.mock.calls[1][0]).toBe("2 Gato");
  expect(mockCallback.mock.calls[2][0]).toBe("3 Mono");

  expect(mockCallback.mock.results[0].value).toBe("1 PERRO");
  expect(mockCallback.mock.results[1].value).toBe("2 GATO");
  expect(mockCallback.mock.results[2].value).toBe("3 MONO");
});