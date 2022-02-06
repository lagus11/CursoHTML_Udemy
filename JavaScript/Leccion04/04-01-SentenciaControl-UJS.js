//Cuarta parte
let mes = '10';
let estacion = 'Estacion desconocida';

switch (mes){
    case 1: case 2: case 12:
        estacion = 'Invierno';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otoño';
        break;
    default:
        estacion = 'Estacion desconocida';
        break;
}
console.log(estacion);

/*let numero = 7;
let numeroTexto = 'Valor desconocido';

switch ( numero ){
    case 1:
        numeroTexto = "Numero uno";
        break;
    case 2:
        numeroTexto = "Numero dos";
        break;
    case 3:
        numeroTexto = "Numero tres";
        break;
    case 4:
        numeroTexto = "Numero cuatro";
        break;
    case 5:
        numeroTexto = "Numero cinco";
        break;
    default:
        numeroTexto = 'Caso no encontrado';
        break;
}
console.log(numeroTexto);
*/


//Ejecicio Hora del dia
/*
let hora = 6;
let mensaje = "";

if( hora >= 6 && hora <=11 ){
    mensaje = "Buenos dias";
}
else if ( hora >= 12 && hora <= 18 ){
    mensaje = "Buenas Tardes";
}
else if ( hora >= 19 && hora <= 24 ){
    mensaje = "Buenas noches";
}
else if ( hora >= 0 && hora < 6 ){
    mensaje = "Duermiendo";
}
else {
    mensaje = "No valido";
}
console.log(mensaje);
*/


//Tercera Parte
/*
let mes = 1;
let estacion;

if ( mes == 1 || mes == 2 || mes == 12 ){
    estacion = "Invierno";
}
else if ( mes == 3 || mes == 4 || mes == 5 ){
    estacion = "Primavera";
}
else if ( mes == 6 || mes == 7 || mes == 8 ){
    estacion = "Verano";
}
else if ( mes == 9 || mes == 10 || mes == 11 ){
    estacion = "Otoño";
}
else {
    estacion = "Valor incorrecto";
}

console.log(estacion);
*/


//Segunda parte
/*
let numero = 7;

if( numero == 1 ){
    console.log("Numero uno");
}else if( numero == 2 ){
    console.log("Numero dos");
}
else if( numero == 3){
    console.log("Numero tres");
}
else if( numero == 4){
    console.log("Numero cuatro");
}
else if( numero == 5){
    console.log("Numero cinco");
}else {
    console.log("Numero desconocido");
}
*/

//Primera Parte
/*
let condicion = true;

if(2>3){
    console.log("Condicion verdadera");
    console.log("fin del programa");
}else{
    console.log("Condicion falsa");
}
*/