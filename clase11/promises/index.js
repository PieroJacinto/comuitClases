async function obtenerPersonajes(){
  try{
    console.log("inciando peticion a la API");
    
    const response = await fetch('https://rickandmortyapi.com/api/character');
 
    const data = await response.json();
    console.log("datos recibidos correctamente");   
    console.log("data primer personaje:", data.results[0]); 
    
    return data;
  } 
  catch (error){
    console.log("error al obtener los personajes", error.message);    
  }
}
obtenerPersonajes()