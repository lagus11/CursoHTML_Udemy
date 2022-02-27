class Ingreso extends Dato{

    static contadorIngresos = 0;
    
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }//constructor 

    get id(){
        return this._id;
    }//get id

}//ingreso