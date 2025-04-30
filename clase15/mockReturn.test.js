test("forEach mock function", () => {
  const fetchMock = jest
    .fn()
    .mockReturnValueOnce({ page: 1, data: [{ nombre: "Nicolas" }] })
    .mockReturnValueOnce({ page: 2, data: [{ nombre: "Matias" }] })
    .mockReturnValue({ page: 3, data: [{ nombre: "Willi" }] });

  const data1 = fetchMock();
  const data2 = fetchMock();
  const data3 = fetchMock();
  const data4 = fetchMock();
  const data5 = fetchMock();

  expect(data1.page).toBe(1);
  expect(data1.data[0]).toEqual({ nombre: "Nicolas" });

  expect(data2.page).toBe(2);
  expect(data2.data[0]).toEqual({ nombre: "Matias" });

  expect(data3.page).toBe(3);
  expect(data3.data[0]).toEqual({ nombre: "Willi" });

  expect(data4.page).toBe(3);
  expect(data4.data[0]).toEqual({ nombre: "Willi" });

  expect(data5.page).toBe(3);
  expect(data5.data[0]).toEqual({ nombre: "Willi" });
});