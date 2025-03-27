// let numero = 0;

// do {
//   console.log('número: ', numero);
//   numero++;
// } while (numero < 10) 


// contador basico

// let contador = 0;
// do{
//     console.log(`Iteracion numero: ${contador}`);
//     contador++
    
// }while(contador < 5);

// solicitando una entrada valida al usuario
let intentos = 0;
let numero;

do{ 
    numero = parseInt(prompt("ingresa un numero entre 1 y 10:"));
    intentos++;

    if(numero < 1 || numero >10){
        console.log(`Intento ${intentos}: numero fuera del rango valido`);
        
    }
} while ( numero < 1 || numero >10)
    
console.log(`numero valido ingresado: ${numero} despues de ${intentos} intentos`);

 