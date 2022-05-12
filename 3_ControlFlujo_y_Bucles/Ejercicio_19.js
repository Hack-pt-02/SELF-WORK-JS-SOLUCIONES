
/* 19.- Crear un programa que dadas 2 variables booleanas, “buen_tiempo” y “trabajo”, nos diga si puedo ir a la playa. Si trabajo, no puedo ir, si no trabajo verifico que haga buen tiempo. En los casos negativos imprimir un mensaje adecuado. */

    let buen_tiempo = false;
    let trabajo = false;

    if (trabajo) {
    
        console.log("No puedo ir a la playa, tengo trabajo");

    } else if (trabajo != true && buen_tiempo) {
    
        console.log("Me voy a la playa. Tengo el dia libre y hace buen dia");

    } else {
    
        console.log("Tengo el dia libre, pero no hace buen tiempo para ir a la playa");

    }  