function sumarNumeros(incio: number, fin: number):string{
    let suma = 0;
    for (let i = incio; i <= fin; i++) {
        suma += i;
    }
    return `La suma de los numeros entre ${incio} y ${fin} es: ${suma}`
}

console.log(sumarNumeros(1, 10));
console.log(sumarNumeros(10, 100));
console.log(sumarNumeros(100, 1000));

