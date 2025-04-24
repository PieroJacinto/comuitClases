enum IconsSize {
  SMALL = 8,
  MEDIUM = 12,
  LARGE = 24,
  XL= 48
}

const icono = {
  nombre: "wave",
  tamanio: IconsSize.XL,
}

function showIcon( nombre: string, tamanio):void {
  console.log(`El nombre del icono es ${nombre} y su tamaño es de ${tamanio} puntos`);  
}

showIcon(icono.nombre, icono.tamanio);

showIcon("muscle", IconsSize.SMALL)