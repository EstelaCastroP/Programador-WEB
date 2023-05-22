const metros = 13000;
let transporte= '';

        if (metros > 0 && metros <= 1000){
            transporte = 'pie';
        } else if (metros > 1000 && metros <= 10000){
            transporte = 'bicicleta';
        } else if (metros > 10000 && metros <= 30000){
            trasnporte = 'colectivo';
        } else if (metros > 30000 && metros <= 100000){
            trasnporte = 'auto';
        } else if (metros > 100000){
            trasnporte = 'avion';
        }
 
        console.log (`Para ${metros} metros recomendamos ir en ${trasnporte}`);
            

        