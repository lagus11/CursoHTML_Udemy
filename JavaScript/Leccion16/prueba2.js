
/*
let arreglo = [1,2,3,4,5,6,7,8,9,2,2,2,2,3,3];

let obtenerNumero = (numeros, numBuscar) => {
    let contador = -1;
    for(numero of numeros){
        if(numero === numBuscar){
            contador = ++contador;
        }//if
    }//for
    return contador;
}//obtenerNumero

console.log(obtenerNumero(arreglo,2));

*/

'use strict';

const arreglo2 = [1,2,3,1,2,4,1,1,1,1,1,1,1,4];
let obtenerNumero2 = (arregloBuscar) => {
    
    let arregloAux = arregloBuscar.slice();
    let contador = 1;
    let numero = '';

    for(let j = 0; j < arregloBuscar.length; j++){
        for(let i = j+1; i< arregloAux.length; i++){
            if(arregloBuscar[j] === arregloAux[i]){
                contador++;
                arregloAux[i] = 'a';
            }//if
        }//for 
            numero += `Numero: ${arregloBuscar[j]}, cantidad veces: ${contador} \n`;
            contador = 1;
    }//for
    return numero;
}//obtenerNumero2

console.log(obtenerNumero2(arreglo2));