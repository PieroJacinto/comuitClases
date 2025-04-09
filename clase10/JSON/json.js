const objetoJavaScript = {
  nombre: "Nicolas",
  apellido: "Isnardi",
  edad: 45,
  amigos: ["Cristian", "Char", "Mauri"],
  hinchaDe: {
    nombre: "Club Atlético Boca Juniors",
  },
};

// Pasamos el objeto de JS a JSON
const objetoPasadoAJson = JSON.stringify(objetoJavaScript,null,4);
console.log(objetoPasadoAJson);

// Pasamos el objeto de JSON a JavaScript
const objetoJs = JSON.parse(objetoPasadoAJson);
console.log(objetoJs);

console.log(objetoJs.nombre);
