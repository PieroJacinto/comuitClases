var mascota = {
    nombre: 'Firulais',
    edad: 3,
};
function mostrarDatosMascota(mascota) {
    console.log("La mascota se llama ".concat(mascota.nombre, " y tiene ").concat(mascota.edad));
    if (mascota.fechaDeNacimiento) {
        console.log("La mascota naci\u00F3 en ".concat(mascota.fechaDeNacimiento));
    }
}
console.log("Mascota sin fecha de nacimiento:");
mostrarDatosMascota(mascota);
mascota.fechaDeNacimiento = "2022-10-15";
console.log("Mascota con fecha de nacimiento:");
mostrarDatosMascota(mascota);
