function sumarNumeros(incio, fin) {
    var suma = 0;
    for (var i = incio; i <= fin; i++) {
        suma += i;
    }
    return "La suma de los numeros enmtre ".concat(incio, " y ").concat(fin, " es: ").concat(suma);
}
console.log(sumarNumeros(1, 10));
console.log(sumarNumeros(10, 100));
console.log(sumarNumeros(100, 1000));
