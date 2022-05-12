// titulo: QuickCapitalizeLetter
// 31.- Encuentra la forma más rápida de convertir la primera letra de una cadena en mayúscula a través de una función 

// ejemplo: capitalize('simon') => Simon

const capitalize = ([primeraLetra, ...restoDeLaCadena]) => {
  return primeraLetra.toUpperCase() + restoDeLaCadena.join("");
}

console.log(capitalize('simon'));


// Gemma method
