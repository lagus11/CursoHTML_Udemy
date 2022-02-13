"use strict";

/*
try{
    let x = 10;
    //miFuncion();
    throw 'Mi error';
}catch(error){
    console.log(error);
}//try catch
finally{
    console.log('Termina la revisión de errores');
}//finally
    console.log('Continuamos...');

*/

//let resultado = 5;
let resultado = '-5';
try {
    //x = 10;
    if(isNaN(resultado)){
        throw 'No es un numero';
    }//if
    else if( resultado === ''){
        throw 'Es cadena vacía';
    }
    else if(resultado >= 0){
        throw 'Valor positivo';
    }
    else if(resultado <= 0){
        throw 'Valor negativo';
    }
}catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.mensaje);
}//try catch
finally{
    console.log('Termina revisión de erorres');
}


