beforeAll(() => {
  console.log("Se ejecuta antes que todos los tests y sólo una vez");
});

beforeEach(() => {
  console.log("Se ejecuta antes de cada test");
});

afterEach(() => {
  console.log("Se ejecuta después de cada test");
});

afterAll(() => {
  console.log("Se ejecuta después de todos los test");
});

describe("Modulo Suma", () => {
  test("Sumar 2 + 2 siempre devuelve 4", () => {
    expect(2 + 2).toBe(4);
  });

  test("Sumar 2 como string y 2 como número devuelve 22", () => {
    expect(2 + "2").toBe("22");
  });
});

describe("Modulo Resta", () => {
  test("restar un número más grande a un número más chico da siempre un numero negativo", () => {
    expect(2 - 8).toBe(-6);
  });
  test.todo("Restar un string y un número para ver que pasa");
});