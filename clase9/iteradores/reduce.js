/*
Reduce
- El método reduce nos permite recorrer un array y obtener un sólo dato como resultado final
- Acepta una función con dos parámetros
- Primer parámetro es el acumulador
- El segundo valor es cada item en el array
- El segundo parámetro del reduce, es el valor inicial que le queremos dar al acumulador
- Podemos utilizar el acumulador para ir sumando valores, por ejemplo:
*/
const notas = [1, 2, 3, 4, 10, 5];
const sumaDeNotas = notas.reduce(function (total, nota) {
  return total + nota;
},0);

console.log(sumaDeNotas); // 25 resultado final de sumar todas las notas