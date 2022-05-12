/* 34.- A partir de estos días filtrar por días que empiezan por "m": */

    const días = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];

    const diasQueEmpiezanPorM = dias.filter( dia => {
        
        return dia.charAt(0) === 'm';
      
    })
      
    console.log(diasQueEmpiezanPorM);