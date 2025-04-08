/*
    1. definir funcion ordenar numeros que acepta 4 parametros: numero1, numero2, numero3, 
        descendente (valor predeterminado false)
    2. dentro de la funcion declarar variables para almacenar numeros ordenados: menor, medio, mayor
    3. implementar logica para determinar cual es el menor:
        - si numero1 es menor igual que numero2 y numero3 entonces numero1 es el menor
        - si numero2 es menor igual que numero1 y numero3 entonces numero2 es el menor
        - de lo contrario numero3 es el menor
    4. teniendo en cuenta cual es el numero menor ordenamos los otros 2 para determinar cual es el del medio y cual es el mayor
    5. usar una condición para mostrar los números en el orden correcto según el 4to parámetro:
        - si descendente es verdadero: menor, medio, mayor
        - si no: mayor, medio, menor
    6. llamar la función y ejecutar
*/

function ordenarNumeros(numero1, numero2, numero3, descendente) {
  let menor, medio, mayor;

  if(numero1 <= numero2 && numero1 <= numero3){
      menor = numero1;
      if(numero2 <= numero3){
          medio = numero2;
          mayor = numero3;
      }
      else{
          medio = numero3;
          mayor = numero2;
      }
  }
  else if(numero2 <= numero1 && numero2 <= numero3){
      menor = numero2;
      if(numero1 <= numero3){
          medio = numero1;
          mayor = numero3;
      }
      else{
          medio = numero3;
          mayor = numero1;
      }
  }
  else{
      menor = numero3;
      if(numero1 <= numero2){
          medio = numero1;
          mayor = numero2;
      }
      else{
          medio = numero2;
          mayor = numero1;
      }
  }

  if(descendente){
      console.log(`${mayor}, ${medio}, ${menor}`);
  }
  else{
      console.log(`${menor}, ${medio}, ${mayor}`);
  }
}

ordenarNumeros(10, 8, 25, true);