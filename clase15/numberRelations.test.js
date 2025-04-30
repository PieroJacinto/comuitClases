test("Test números", () => {
  expect(2).toBeGreaterThan(1);
  expect(1).toBeGreaterThanOrEqual(1);

  expect(1).toBeLessThan(2);
  expect(1).toBeLessThanOrEqual(1);

  expect(1).toBe(1);
  expect(1).toEqual(1);

  expect(0.3985).toBeCloseTo(0.4);
});