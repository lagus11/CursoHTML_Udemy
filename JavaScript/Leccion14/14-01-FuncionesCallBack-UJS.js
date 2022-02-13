
function miFuncion1(){
    console.log('funcion 1');
}//miFuncion1

function miFuncion2(){
    console.log('funcion 2');
}//miFuncion2

//Función de tipo callBack
let imp = function imprimir(mensaje){
    console.log(mensaje);
}//imprimir

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}//sumar

sumar(1, 3, imp);

//llamadas asincronas con uso setTimeout
function miFuncionCallback(){
    console.log('Saludo asíncrono despues de 3 seg');
}//miFuncionCallBack

setTimeout(miFuncionCallback, 3000);//despues de 3 seg
setTimeout(function(){
    console.log('saludos asincrono 2')}, 4000);

setTimeout( () => console.log('saludo asíncrono 3'), 5000);


//segunda parte
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}//reloj

setInterval(reloj, 1000);


