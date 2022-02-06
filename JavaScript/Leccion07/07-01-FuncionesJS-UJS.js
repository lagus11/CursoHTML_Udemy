//hoisting
/*
miFuncion(4, 2);

//declaracion de la funcion
function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
    //console.log("Suma:" + (a + b));
}//miFuncion

let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaracion funcion de tipo Expresion
let x = function (a, b){
    return a + b;
};

resultado = x(1, 2);
console.log(resultado);


(function (a, b){
    console.log('Ejecutando la funcion ' + (a + b));
})

(3, 4);

console.log(typeof miFuncion);


var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Llamando a la funcion
//miFuncion(2, 3);
//miFuncion(20, 3);
*/

//Declaracion funcion de tipo Expresion
/*
let x = function (a = 4, b = 5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    
    console.log(a);
    console.log(b);
    
    console.log(arguments[2]);
    return a + b + arguments[2];
};

resultado = x(3, 5, 6);
console.log(resultado);

//Funcion Flecha
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);
*/

/*
let resultado = sumarTodo(5, 4, 13, 10, 9, 10);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
    
}//sumarTodo

*/

//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
    console.log(a);
}//cambiarValor

//Paso por valor
cambiarValor(x);//10
console.log(x);

const persona = {
    nombre: 'Agustin',
    apellido: 'Hernandez',
    telefono: '1234567890'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

cambiarValorObjeto(persona);
console.log(persona);