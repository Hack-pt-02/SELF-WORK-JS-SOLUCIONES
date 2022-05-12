
/* 32.- Calcular la serie de fibonacci que devuelve hasta n-números bajo forma de array.  
        --> Ejemplo => [1, 2, 3, 5, 8, 13, 21, 34].
*/

        function fibonacci(n) {
        
                let final = [1, 1]
        
                for (let i = 2; i < n; i++) {
            
                        final.push(final[i - 2] + final[i - 1])
        
                }
        
                return final;
        }