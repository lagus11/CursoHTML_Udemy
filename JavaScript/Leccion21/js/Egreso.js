class Egreso extends Dato{

    static contadorEgresos = 0;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }//constructor

    get id(){
        return this._id;
    }//get
}//Egreso