const distancia = parseInt(prompt('Ingrese la distancia (en metros) a recorrer:', ''));

        if (Number.isNaN (distancia)) {
            document.write('la distancia ingresada no es valida');

            } else if (distancia ==0 || distancia <=1000){
            document.write (`Para recorrer una distancia de ${distancia} metros, el medio de transporte adecuado es a pie.`,);

            } else if (distancia <=10000)  { 
            document.write (`Para recorrer una distancia de ${distancia} metros, el medio de transporte adecuado es la bicicleta.`,);

            } else if (distancia <=30000)  {
            document.write (`Para recorrer una distancia de ${distancia} metros, el medio de transporte adecuado es el colectivo.`,);

            } else if (distancia <=100000) {
            document.write (`Para recorrer una distancia de ${distancia} metros, el medio de transporte adecuado es el auto.`,);

            }else if (distancia >100000) {
            document.write (`Para recorrer una distancia de ${distancia} metros, el medio de transporte adecuado es el avion.`,);

            }

            

        