const { fetchCaracters } = require("./rickAndMorty.js");

describe("fetch De personajes", ()=> {
  test('deberia obtener una lista de personajes correctamente', async()=>{
    const mockCharacters = {
      results: [
        {id:1, name:"Rick Sanchez", species: "Human"},
        {id: 2, name:"Morty Smith", species: "Human"}
      ]
    }

     const result = await fetchCaracters()
    // //verificar que el fetch se llamo correctamente
    // expect(fetch).toHaveBeenCalledTimes(1);
    // expect(fetch).toHaveBeenCalledWith("https://rickandmortyapi.com/api/character");

    // verificamo
    expect(result[0].name).toBe("Rick Sanchez")
  })
})