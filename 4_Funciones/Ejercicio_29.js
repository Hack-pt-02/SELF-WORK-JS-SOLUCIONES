
/* 29.- Te dan el lengthy widthde un polígono de 4 lados. El polígono puede ser un rectángulo o un cuadrado. Si es un cuadrado, devuelve su área. Si es un rectángulo, devuelve su perímetro. 
    --> Para este ejercicios debes asumir que es un cuadrado, de lo contrario, es un rectángulo.
*/

function areaOrPerim(l, w){

    if (l == w){

        return l * w;

    } else{

        return (l + w) * 2;

    }
}

areaOrPerim(4, 4);




