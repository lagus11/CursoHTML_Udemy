//Dispositivo de entrada-------------------------------------------------
class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }//constructor

    get tipoEntrada(){
        return this._tipoEntrada;
    }//get tipoEntrada

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }//set tipoEntrada

    get marca(){
        return this._marca;
    }//get marca

    set marca(marca){
        this._marca = marca;
    }//set marca
}//Dispositivo de entrada

//Raton-----------------------------------------------------------------------------
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }//constructor

    get idRaton(){
        return this._idRaton;
    }//get idRaton

    toString(){
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this.tipoEntrada}, marca: ${this._marca} ]`;
    }//toString
}//Raton

//Teclado-----------------------------------------------------------------------------
class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }//constructor

    get idTeclado(){
        return this._idTeclado;
    }//get idTeclado

    toString(){
        return `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this.tipoEntrada}, marca: ${this._marca} ]`;
    }//toString
}//Teclado

//Monitor----------------------------------------------------------------------------
class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }//constructor

    get idMonitor(){
        return this._idMonitor;
    }//get Monitor

    get marca(){
        return this._marca;
    }//get marca

    set marca(marca){
        this._marca = marca;
    }//set marca

    get tamaño(){
        return this._tamaño;
    }//get tamaño

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }//set tamaño

    toString(){
        return `Monitor: [idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño} ]`; 
    }//toString
}//Monitor

//Computadora-----------------------------------------------------------------

class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }//constructor

    get nombre(){
        return this._nombre;
    }//get nombre

    set nombre(nombre){
        this._nombre = nombre;
    }//set nombre

    get monitor(){
        return this._monitor;
    }//get monitor

    set monitor(monitor){
        this._monitor = monitor;
    }//set monitor

    get teclado(){
        return this._teclado;
    }//get teclado

    set teclado(teclado){
        this._teclado = teclado;
    }//set teclado

    get raton(){
        return this._raton;
    }//get raton

    set raton(raton){
        this._raton = raton;
    }//set raton

    toString(){
        return `computadora ${this._idComputadora}: ${this._nombre} \n ${this.monitor} \n ${this._raton} \n ${this._teclado}`; 
    }//toString
}//Computadora


//Orden---------------------------------------------------------------------
class Orden{

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }//constructor

    get idOrden(){
        return this._idOrden;
    }//get idOrden

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }//agregarComputadora

    mostrarOrden(){
        let computadoraOrden = '';
        for(let computadora of this._computadoras){
            computadoraOrden += `\n${computadora}\n`;
        }//for
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadoraOrden}`);
    }//mostrarOrden
}//Orden

//Prueba-------------------------------------------------------
let raton1 = new Raton('USB', 'HP');
let raton2 = new Raton('Bluetooth', 'Dell');

let teclado1 = new Teclado('Bluetooth', 'MSI');
let teclado2 = new Teclado('USB', 'Acer');

let monitor1 = new Monitor('HP', 15);
let monitor2 = new Monitor('Dell', 27);
//console.log(monitor1.toString());
//console.log(monitor2.toString());

let computadora1 = new Computadora('HP', monitor1, teclado1, raton1);
//console.log(`${computadora1}`);

let computadora2 = new Computadora('Armada', monitor2, teclado2, raton2);
//console.log(`${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();