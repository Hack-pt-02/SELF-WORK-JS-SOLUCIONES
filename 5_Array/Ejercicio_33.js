// A PARTIR DE AQUÍ SON HIGH-ORDER-FUNCTION

/* 33.- A partir de este array de números, devolver un array con solo números pares: */

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let pares = numeros.filter(pares => pares % 2 == 0);
    
    console.log(pares);