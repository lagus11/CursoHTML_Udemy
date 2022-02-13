
let miFuncion = function (){
    console.log('Saludos desde mi función');
}//miFuncion

/*const miFuncionFlecha = () => {
    console.log('Saludos desde mi funcion Flecha');
}*/

//const miFuncionFlecha = () => console.log('saludos desde mi funcion flecha');

//miFuncionFlecha();

/*const saludar = () => {
    return 'Saludos desde función flecha';
}*/

const saludar = () => 'saludos desde funcion flecha'

console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'});
console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

//const funcionConParametros =  (mensaje) => console.log(mensaje);
const funcionConParametros =  mensaje => console.log(mensaje);
funcionConParametros('Saludos con parametros');


const funcionConVariosParametros1 = (op1, op2) => op1 + op2;

const funcionConVariosParametros2 = (op1, op2) => {
    let resultado = op1 + op2;
    return `resultado: ${resultado}`;
}
console.log(funcionConVariosParametros2(3, 5));


