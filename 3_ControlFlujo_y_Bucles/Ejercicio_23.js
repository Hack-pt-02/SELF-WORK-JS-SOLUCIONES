
/* 23.- Crear un programa que calcule el factorial de un número n, donde el valor de n se recibe desde el “prompt” y además se verifique si el valor es de tipo number. Si no lo es, se sale del programa con un mensaje de error. */

    let fact = Number(prompt("Ingresa un número:"));
    let total = 1; 
                
    if(typeof fact === "number" && !Number.isNaN(fact)){
                	
        for (i=1; i<=fact; i++) {
                        
            console.log(total = total * i);
                    
        }
    }else{
                
        console.log("No es un número");
                    
    }
        
    console.log(typeof(fact)); 