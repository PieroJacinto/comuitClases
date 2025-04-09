function funcionConVariable() {
  var nombre = "Nicolas";
  const apellido = "Isnardi";
  let edad = 45;

  // Podemos acceder a la variable nombre ya que la estamos usando dentro de la función
  console.log(`Nombre: ${nombre} desde dentro de la función`);
  console.log(`Apellido: ${apellido} desde dentro de la función`);
  console.log(`Edad: ${edad} desde dentro de la función`);
}

// funcionConVariable();

// console.log(`Nombre: ${nombre} desde afuera de la función`); // No podemos acceder desde afuera de la función
// console.log(`Apellido: ${apellido} desde afuera de la función`); // No podemos acceder desde afuera de la función
// console.log(`Edad: ${edad} desde afuera de la función`); // No podemos acceder desde afuera de la función