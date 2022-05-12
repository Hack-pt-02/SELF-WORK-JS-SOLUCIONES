/* 36.- Devuelve las dos edades más altas dado una matriz de números que representan edades.
function dosEdadesMasAltas(){

      //code
 }
dosEdadesMasAltas([1, 2, 10, 8, 22, 3, 6, 12, 80, 4, 55, 19])//[80, 55] */

let array = [1,2,10,8,22,3,6,12,80,4,55,19];
            
array.sort((a,b) => a - b);
  
console.log(array[array.length -1],array[array.length -2]); // [80, 55]


 
function edadMasAlta(array){
     
    return array.sort((a,b) => a - b)
                 .slice(-2);
}
 
console.log(edadMasAlta(array)); 