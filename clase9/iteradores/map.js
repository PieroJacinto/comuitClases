// MAP
/*
- El método map crea un nuevo array con el resultado de la función que le pasamos como parámetros

*/

const mascotas = ["Amelia", "Ciro", "Ulises", "Carlos"];
const mascotasMayuscula = mascotas.map((mascota) => {
  return mascota.toUpperCase();
});

console.log(mascotasMayuscula); // [ 'AMELIA', 'CIRO', 'ULISES', 'CARLOS' ] Todos en mayúscula
console.log(mascotas); // ['Amelia', 'Ciro', 'Ulises', 'Carlos'] Este array quedó igual que antes