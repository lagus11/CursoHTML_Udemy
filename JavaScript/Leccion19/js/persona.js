class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }//constructor

    get nombre(){
        return this._nombre;
    }//nombre

    set nombre(nombre){
        this._nombre = nombre;
    }//nombre

    get apellido(){
        return this._apellido
    }//apellido

    set apellido(apellido){
        this._apellido = apellido;
    }//apellido
}//class