
/* 25.- Crear una función, tipCalculator(), que tenga dos parámetros: una cadena que represente la calidad del servicio recibido y un número que represente el coste total.

        --> 'fatal' debería devolver un 5% de propina.

        --> 'ok' debería devolver un 15% de propina.
    
        --> 'bueno' debería devolver un 20% de propina.
    
        --> 'excelente' debería devolver un 30% de propina.
    
        --> Toda la demás propina deben ser predeterminadas al 18%. */

        function tipCalculator(calidad, coste) {
                if (calidad == 'fatal') {
                    console.log(coste * 0.05)
                
                }else if (calidad == 'ok') {
                    console.log(coste * 0.15)
            
                } else if (calidad == 'bueno') {
                    console.log(coste * 0.20)
            
                } else if (calidad == 'excelente') {
                    console.log(coste * 0.30)
            
                }else{
                    console.log(coste * 0.18)
                }
            }
        
            tipCalculator("ok", 10); 
