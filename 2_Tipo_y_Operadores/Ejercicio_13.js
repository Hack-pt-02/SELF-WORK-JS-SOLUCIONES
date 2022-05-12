
/* 13.- Escribir el resultado y el tipo de dato de la siguiente coercion:
        10 + "1"
        10 - "1" */

let num = 10;
let str = "1";

console.log(num + str); /* -->  number + string = 101 -> string */
console.log(num - str); /* -->  number - string = NaN -> number */