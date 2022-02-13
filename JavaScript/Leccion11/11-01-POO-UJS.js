class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }//constructor

    obtenerDetalles(){
        return `Empleado: nombre ${this._nombre}, sueldo: ${this._sueldo}`;
    }//obtenerDetalles
}//Empleado

class Gerente extends Empleado{
    
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }//constructor
    obtenerDetalles(){
        return `Gerente: Empleado: ${super.obtenerDetalles()}, depto: ${this._departamento} `;
    }//obtenerDetalles
}//Gerente

function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo gerente');
        console.log(tipo._departamento);
    }

    else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo empleado');
        console.log(tipo._departamento);
    }

    else if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}//imprimir

let empleado1 = new Empleado('Juan', 4000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

determinarTipo(empleado1);
determinarTipo(gerente1);



