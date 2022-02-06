inicio:
for(let contador = 0; contador <=10; contador++){
    if( contador %2 !== 0){
        break inicio;// ir a la siguiente iteracion
    }//if
    console.log(contador);
}//for

/*
BREAK
for(let contador = 0; contador <= 10; contador++){
    if( contador %2 == 0 ){ 
        console.log(contador);
        break;
    }//if
}//for
console.log("Fin del ciclo For");
*/

/*
let contador = 0;
while( contador <= 3 ){
    console.log( contador);
    contador++;
}
console.log("Fin ciclo while");
*/

/*
do{
    console.log(contador);
    contador++;
}while( contador < 3);
console.log("Fin ciclo do while");
*/
/*
for(let contador = 0; contador < 3; contador++){
    console.log(contador);
}
console.log("Fin ciclo for");
*/