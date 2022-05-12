
/* 24.- Escribir una función que, dados un mínimo y un máximos, cree un número aleatorio entre un número y un máximo. */

    function numeroAleatorio(min, max) {
        return Math.round((Math.random() * (max - min) + min));
    }
 
    console.log (numeroAleatorio(1,100));