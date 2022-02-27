class Dato{
    
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }//constructor

    get descripcion(){
        return this._descripcion;
    }//get descripcion

    set descripcion(descripcion){
        this._descripcion = descripcion;
    }//set descripcion

    get valor(){
        return this._valor;
    }//get valor

    set valor(valor){
        this._valor = valor;
    }//set valor

}//Dato