const mascota:{
  nombre:string,
  edad: number,
  fechaDeNacimiento?: string;
} = {
  nombre: 'Firulais',
  edad: 3,
  
}

function mostrarDatosMascota (mascota: {
  nombre:string,
  edad: number,
  fechaDeNacimiento?: string;
}):void {
  console.log(`La mascota se llama ${mascota.nombre} y tiene ${mascota.edad}`);  
  if(mascota.fechaDeNacimiento){
    console.log(`La mascota nació en ${mascota.fechaDeNacimiento}`);    
  }
}
console.log("Mascota sin fecha de nacimiento:");
mostrarDatosMascota(mascota);

mascota.fechaDeNacimiento = "2022-10-15";
console.log("Mascota con fecha de nacimiento:");
mostrarDatosMascota(mascota);
