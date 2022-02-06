//Decima Parte
let x = 5;
let y = 10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);


let resultado = 4 + 5 * 6 / 3;
console.log(resultado);

resultado = ( 4 + 5) * 6 / 3;
console.log(resultado);

//Novena Parte
/*
let miNumero = "17";

let edad = Number(miNumero);
console.log(edad);

if( isNaN(edad)){
    console.log("No es un numero");
}
else{
    if(edad >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
    let edad2 = Number(miNumero)
    let resultado = ( edad2 >= 18) ? "Puede votar" : "No puede votar";
    console.log(resultado);
}
*/

//Octava parte
/*
let resultado = (3>1) ? "Verdadero" : "Falso";
console.log(resultado);

let numero = 10;
resultado = ( numero %2 == 0 ) ? "Numero Par" : "Numero Impar";
console.log(resultado);
*/

//Septima Parte
//Ejemplo AND (&&), regresa true solo si ambos operandos son true
/*
let a = 10;
let valMin = 0, valMax = 10;

if( a >= valMin && a <= valMax ){
    console.log("Dentro del rango");
}
else{
    console.log("Fuera de rango");
}

//Ejemplo OR (||), regresa true si cualquier operando es true
let vacaciones = false, diaDescanso = false;

if( vacaciones || diaDescanso){
    console.log("padre puede ir al juego");
}
else{
    console.log("padre no puede ir al juego");
}
*/
//Ejercicio mayor de edad
/*let edad = 7, adulto = 18;

if( edad >= adulto ){
    console.log("Es un adulto");
}
else{
    console.log("No es un adulto");
}
*/
//Ejercicio numero par
/*
let a = 9;

if( a % 2 == 0 ){
    console.log("Numero Par");
}
else{
    console.log("Numero Impar");
}
*/

//Sexta parte
/*let a = 3, b = 3, c = "3";

let z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);

*/
//Quinta Parte
/*let a = 3, b = 2, c = "3";

let z = (a == c); // se revisa el valor sin importar el tipo
console.log( z );

z = a === c;// se revisa los valores pero tambien los tipos
console.log( z );

z = (a != c); // distinto se revisa el valor sin importar el tipo
console.log( z );

z = a !== c;// dinstinto se revisa los valores pero tambien los tipos
console.log( z );
*/

//Cuarta parte
/*let a = 1;

a += 3; // a = a + 3
console.log( a );

a -= 2; // a = a - 2
console.log( a );

a *= 3; // a = a * 3
console.log( a );

a /= 2; // a = a / 2
console.log( a );

a **= 3; // a = a ** 3
console.log( a );

a %= 2; // a = a % 2
console.log( a );

*/

//Tercera parte
/*
let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log( z );

z = c + a * b / d;
console.log( z );

z = (c + a) * b / c;
console.log( z );
*/

//Segunda parte
/*let a = 3, b = 2;
let z = a + b;

//Incremento
//Pre-Incremento (el operador ++ antes de la variable)
z = ++a;
console.log( a );
console.log( z );

//post-incremento (el operador ++ despues de la variable)
z = b++;
console.log( b );
console.log( z );


//decremento
//Pre-decremento (el operador --- antes de la variable)
z = --a;
console.log( a );
console.log( z );

//Post-decremento (el operador --- despues de la variable)
z = b--;
console.log( b );
console.log( z );
*/

//Primera Parte
/*
console.log( "Resultado de la suma: " + z);

z =  a - b;
console.log( "Resultado de la resta: " + z);

z = a * b;
console.log( "Resultado de la mult: " + z);

z = a / b;
console.log( "Resultado de la division: " + z);

z =  a % b;//residuo de la division
console.log( "Resultado de operacion modulo (residuo); " + z);

z = a ** b;
console.log( "Resultado de operador exponente: " + z);

*/