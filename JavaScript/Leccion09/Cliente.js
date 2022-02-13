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