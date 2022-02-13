class Producto{

    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }//constructor

    get idProducto(){
        return this._idProducto;
    }//get idProducto

    get nombre(){
        return this._nombre;
    }//get nombre

    set nombre(nombre){
        this.nombre = nombre;
    }//set nombre

    get precio(){
        return this._precio;
    }//get precio

    set precio(precio){
        return this._precio = precio;
    }//set precio

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }//toString
}//Producto

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);


//Orden-------------------------------------------------------------
class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }//get MAX_PRODUCTOS

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }//constructor

    get idOrden(){
        return this._idOrden;
    }//get idOrden

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }//if
        else{
            console.log("No se pueden agregar más productos");
        }//else
    }//agregarProducto

    calcularTotal(){
        let totalVenta = 0;
        for(let producto of this._productos){
            totalVenta += producto.precio; //totalVenta = totalVenta + Producto.Precio

        }//for
        return totalVenta;
    }//calcularTotal

    mostrarOrden(){
        let productoOrden = '';
        for(let producto of this._productos){
            productoOrden += '\n' + producto.toString() + ' ';
        }//for
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productoOrden}`);
    }//mostrarOden
}//Orden

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Cinturon', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();