
//Clase persona--------------------------------------------------
class Persona {
    
    static idPersona = 0; 

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.idPersona;
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

    get toString(){
        return this._nombre + ' ' + this._apellido + ' ' + this._edad;
    }//toString
}//Persona

let persona1 = new Persona('Agustin', 'Hernandez', 23);
let persona2 = new Persona('Jonh', 'Lennon', 50);
console.log(persona1.toString);
console.log(persona2);


//clase Empleado-------------------------------------------------------------------------------------
class Empleado extends Persona{
    
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = Persona.idPersona;
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

    get toString(){
        return super.toString + ' , ' + this._idEmpleado + ' , ' + this._sueldo;
    }//toString 
}//Empleado

let empleado1 = new Empleado('Adalberto', 'Martinez', 24, 1500);
let empleado2 = new Empleado('Daniel', 'Lopez', 20, 3340);


console.log(empleado1);
console.log(empleado2);
console.log(empleado1.toString);
console.log(empleado2.toString);

//cliente------------------------------------------------------
class Cliente extends Persona{
    constructor(nombre, apellido, edad){
        super(nombre, apellido, edad);
        this._idCliente = Persona.idPersona;
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

    get toString(){
        return super.toString + ' , ' + this._idCliente + ' , ' + this._fecha;
    }//toString
}//Cliente

let cliente1 = new Cliente('Armando', 'Perez', 18);
let cliente2 = new Cliente('Yeshua', 'Reyes', 23);

console.log(cliente1.toString);
console.log(cliente2.toString);