const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

// fetch(API_URL)
//   .then((response) => {
      
//     return response.json();
//   })
//   .then((data) => {
//     const trago = data.drinks[0];    
//     const {strDrink: nombreTrago} =  trago

//     console.log(nombreTrago);
    
//   })
//   .catch((error) => {
//     console.log(error);
//   });
  
async function obtenerTrago (){
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const trago = data.drinks[0];    
    const {strDrink: nombreTrago} =  trago
    console.log(nombreTrago);
    
  } catch (error) {
    console.log(error);
    
  }
}
obtenerTrago()