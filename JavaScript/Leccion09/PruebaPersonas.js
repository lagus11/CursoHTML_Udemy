//Clase persona--------------------------------------------------
class Persona {
    
    static contadorPersona = 0; 

    constructor(nombre, apellido, edad){
        this._idPersona =  ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }//constructor

    get idPersona(){
        return this._idPersona;
    }//idPersona
    
    get nombre(){
        return this._nombre;
    }//get nombre

    set nombre(nombre){
        this._nombre = nombre;
    }//set nombre

    get apellido(){
        return this._apellido;
    }//get apellido

    set apellido(apellido){
        this._apellido = apellido;
    }//set apellido

    get edad(){
        return this._edad;
    }//get edad

    set edad(edad){
        this._edad = edad;
    }//set edad

    toString(){
        return this._idPersona + ' ' + this._nombre + ' ' 
        + this._apellido + ' ' + this._edad;
    }//toString
}//Persona


//clase Empleado-------------------------------------------------------------------------------------
class Empleado extends Persona{

    static contadorEmpleados = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }//constructor

    get idEmpleado(){
        return this._idEmpleado;
    }//get idEmpleado

    get sueldo(){
        return this._sueldo;
    }//get sueldo

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }//set sueldo

    toString(){
        return super.toString() + ' , ' + this._idEmpleado + ' , ' + this._sueldo;
    }//toString 
}//Empleado

//cliente------------------------------------------------------
class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fecha = new Date();
    }//constructor

    get idCliente(){
        return this._idCliente;
    }//get idCliente

    get fechaRegistro(){
        return this._fecha;
    }//get fechaRegistro

    set fechaRegistro(fecha){
        this._fecha = fecha;
    }//set fechaRegistro

    toString(){
        return super.toString() + ' , ' + this._idCliente + ' , ' + this._fecha;
    }//toString
}//Cliente


//Prueba clase Persona-------------------------------------------
//Persona
let persona1 = new Persona('Juan', 'Perez', 28);
console.log( persona1.toString());

let persona2 =  new Persona('Carlos', 'Ramirez', 35);
console.log( persona2.toString());

//Empleados
let empleado1 = new Empleado('Karla', 'Gomez', 25, 5000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Laura', 'Quintero', 33, 7000);
console.log(empleado2.toString());

//Cliente
let cliente1 = new Cliente('Miguel', 'Cervantes', 30);
console.log(cliente1.toString());

let cliente2 = new Cliente('Maria', 'Lara', 38);
console.log(cliente2.toString());