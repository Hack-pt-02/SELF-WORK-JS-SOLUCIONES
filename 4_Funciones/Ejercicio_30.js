
/* 30.- Escribir una función que calcule el área del radio de 1 al 10. */

function getArea (r){
    
    for(let i=0;i<r; i++){
       
        let area=(Math.PI * Math.pow (i,2));
        
        console.log (Math.round(area));
    }
}

getArea(10)