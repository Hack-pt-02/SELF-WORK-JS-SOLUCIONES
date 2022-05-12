
/* 10.- Inicializar una variable tipo num con 6 decimales e imprimir la variable cambiando el tipo y que aparezcan sólo 3 decimales. */

/* Iniciar una variable con 6 decimales */
let a = 2.333333;

/* Usar .toFixed para que aparezcan solo 3 decimales */
let b = String(a.toFixed(3));
console.log(typeof(b));
