
/* 26.- Escribir un programa que imprima en consola todos los números del 1 al 100.

        --> Para los múltiplos de 3 imprime "java".
        --> Para los múltiplos de 5 imprime "script".
        --> Para los múltiplos de 3 y 5 imprime "javascript". */

        for (let i = 0; i <= 100; i++) {
                if (i % 15 == 0) {
                  console.log("JAVASCRIPT");
                
                } else if ( i % 3 == 0) {
                  console.log("JAVA");
                
                } else if ( i % 5 == 0) {
                  console.log("SCRIPT");
                
                } else {
                  console.log(i);
                
                }
        }