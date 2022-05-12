/* 35.- A partir de este array de números, ordena la secuencia en forma creciente y luego filtra números < de 10.
*/

let num = [100, 2, 20, 35, 4, 44];

let orden = num.sort((a, b) => a - b)
                .filter(number => number < 10);

console.log(orden);

