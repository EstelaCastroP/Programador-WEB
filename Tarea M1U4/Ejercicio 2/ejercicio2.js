const numeros = [1, 900, 5, 230, 17, 132, 74];

let mayor = 0;

for (let i=0; i<numeros.length; i++){
    if (numeros [i] > mayor) {
        mayor = numeros [i];
    }
}
    
console.log(`El mayor de ${numeros} es ${mayor}`);
