
/* 22.- Crear un programa que calcule la suma de los primeros “n” números, donde el valor de n, se recibe desde el “prompt”. */

    let n = parseInt(prompt("Dame un numero -n- y te haré la suma de los primeros -n- números"));
    let num = 0;
        
    for (let i = 0; i <= n; i++) {
            
        num += i;
        
    }
        
    alert(num);
