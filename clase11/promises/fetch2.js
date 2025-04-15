const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon";

// fetch(POKE_API_URL)
//   .then((response) => {
//     return response.json();
//   })
//   .then((allPokemon) => console.log(allPokemon));

async function obtenerPokemones(){
  try{
    // ACA ESTAMOS ESPERANDO QUE SE CARGUE LA RESPUESTA
    // DE LA PETICION DE LA API
    const response = await fetch( POKE_API_URL)
    // esperamos que se complete la conversion  JSON.
    const data = await response.json()
    console.log(data)
  }catch(error){
    console.log(error.message);  
    
  }
}
obtenerPokemones();

//ottras nfunciones q se van a ejecutar al mismo tiempo