const fetchCaracters = async ()=> {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    return data.results;
  } catch (error) {
    console.log("error en el fetch de personajes:", error);
    
  }
}

module.exports = {
  fetchCaracters
}