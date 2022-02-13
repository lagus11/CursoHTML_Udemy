//clase Empleado-------------------------------------------------------------------------------------
class Empleado extends Persona{

    static contadorEmpleados = 0;
    
    constructor(nombre, apellido, edad, sueldo){
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
        super(nombre, apellido, edad);
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