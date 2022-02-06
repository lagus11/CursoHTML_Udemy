let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        //return this.nombre + ' ' + this.apellido;
        return titulo + ' : ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de apply para usar
let arreglo = ['Ing', '789456123'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

//Uso de call para usar el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('Lic', '69696969'));
console.log(persona1.nombreCompleto.call(persona2)); 




//Funcion constructor de objetos de tipo Persona
/*function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
}
Persona.prototype.tel = '44332211';

let padre = new Persona('Agustin', 'Hernandez', 'aghernandez@gmail.com');
console.log(padre);
padre.tel = '11223344'
console.log(padre.tel);

let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com');
madre.tel = '66889900'
console.log(madre.tel);
*/
/*
let padre = new Persona('Agustin', 'Hernandez', 'aghernandez@gmail.com');
console.log(padre);
padre.tel = '55443322';
console.log(padre.tel);

let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com');
console.log(madre);
console.log(madre.tel);

padre.nombre = 'Carlos';
console.log(padre);

console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());

let miObjeto = new Object();
let miObjeto2 = {

}

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){

}
*/


/*
let x = 10;

let persona = {
    nombre: 'Agustin',
    apellido: 'Hernandez',
    email: 'ahernandez@mail.com',
    edad: 23,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}//persona

//get y set con objetos
console.log( persona.nombreCompleto );
console.log( persona.lang);
persona.lang = 'US';
console.log( persona.lang);
console.log(persona.idioma);
*/

/*
console.log(persona.nombre);
console.log(persona.nombreCompleto());

//agregar una nueva propiedad
persona.tel = '1234567890';
persona.tel = '1234567777';

console.log(persona);

delete persona.tel;
console.log(persona);

//concatenar cada valor de cada propiedad
console.log( persona.nombre + ',' +persona.apellido);

//for in
for(nombrePropiedad in persona){
    console.log( persona[nombrePropiedad]);
}//for

//Object
let personaArray = Object.values( persona );
console.log(personaArray);

//cadena
let personaString = JSON.stringify( persona );
console.log(personaString);

*/
/*
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log(persona2.tel);

console.log( persona.nombre);
console.log(persona['apellido']);

for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
*/