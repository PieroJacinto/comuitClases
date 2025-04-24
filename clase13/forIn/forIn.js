// exclusivo para objetos
const usuario = {
  name: "Nicolas",
  age: 45,
  city: "Toronto",
};

for (const propiedad in usuario) {
  console.log(`${propiedad}: ${usuario[propiedad]}`);
}