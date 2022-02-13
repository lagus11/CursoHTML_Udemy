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