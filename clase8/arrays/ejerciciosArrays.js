/*Ejercicio 126
Crear un documento con el nombre ej126.js
Copiar y pegar el código del ejercicio 125
Ahora los gustos de helado se piden en otro orden del que fueron ingresados
El primer elemento tiene que ser el último y el último el primero
Para agregar los gustos utilizar una función que acepte 2 parámetros, la colección 
de gustos de helados y el nuevo gusto
Esta función retorna la lista modificada
Mostrar en consola los gustos de helados */
let gustosHelados = [];

function agregarGusto(lista, gusto) {
    lista.unshift(gusto);
    return lista;
}

gustosHelados = agregarGusto(gustosHelados, "chocolate");
gustosHelados = agregarGusto(gustosHelados, "ddl");
gustosHelados = agregarGusto(gustosHelados, "frutilla");
gustosHelados = agregarGusto(gustosHelados, "vainilla");
gustosHelados = agregarGusto(gustosHelados, "banana");
gustosHelados = agregarGusto(gustosHelados, "marcaspone");
gustosHelados = agregarGusto(gustosHelados, "anana");
gustosHelados = agregarGusto(gustosHelados, "pistacho");
gustosHelados = agregarGusto(gustosHelados, "limon");
gustosHelados = agregarGusto(gustosHelados, "tramontana");
gustosHelados = agregarGusto(gustosHelados, "maracuya");
gustosHelados = agregarGusto(gustosHelados, "lemon pie");


console.log(gustosHelados);