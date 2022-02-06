//No es posible clear objetos antes de declarar la clase
//No se aplica el concepto de hoisting
//let persona3 = new Persona('Karla', 'Juarez');
/*
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }//constructor

    get nombre(){
        return this._nombre;
    }//get

    set nombre(nombre){
        this._nombre = nombre;
    }//set
}//class

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);
console.log(persona1._nombre);
persona1.nombre = 'Carlos'; //set nombre
console.log(persona1.nombre);

let persona2 = new Persona('Agustin', 'Hernandez');
console.log(persona2);

let persona3 = new Persona('Karla', 'Juarez');
console.log( persona3 );
*/

//clase padre
class Persona{

    static contadorPersona = 0; //atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;

        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }else{
            console.log('Se han superado el maximo de objetos permitidos')
        }

    }//constructor

    get nombre(){
        return this._nombre;
    }//get

    get apellido(){
        return this._apellido;
    }//get

    set nombre(nombre){
        this._nombre = nombre;
    }//set

    set apellido(apellido){
        this._apellido = apellido;
    }//set

    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }//nombreCompleto

    //sobreescribiendo el metodo de la clase padre (Object)
    toString(){
        //se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre
        //o de tipo hijo
        return this.nombreCompleto();
    }//toString

    static saludar(){
        console.log('Saludos desde métodos static');
    }//saludar

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }//saludar2

}//class

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //llamar al constructor de la clase padre
        this._departamento = departamento;
    }//constructor

    get departamento(){
        return this.departamento;
    }//get

    set departamento(departamento){
        this._departamento = departamento;
    }//set

    //sobreEscritura
    nombreCompleto(){
        return super.nombreCompleto()+ ' , ' + this._departamento;
    }//nombreCompleto

}//Empleado

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());//get nombre

let empleado1 = new Empleado('Maria', 'Jimenez', ' Sistemas');
console.log(empleado1.toString());

let persona2 = new Persona('Karla', 'Ramirez');
console.log( persona2.toString());
console.log(Persona.contadorPersona);


let persona3 = new Persona('Persona 3', 'Ramirez');
let persona4 = new Persona('Persona 4', 'Ramirez');
let persona5 = new Persona('Persona 5', 'Ramirez');

console.log( persona4.toString());
console.log( persona5.toString());

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);


/*
console.log( empleado1.nombre );
console.log( empleado1.nombreCompleto() );
console.log(empleado1.toString());

//persona1.saludar(); no es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorPersona);
console.log(Persona.contadorPersona);

console.log(Empleado.contadorPersona);


console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);
*/