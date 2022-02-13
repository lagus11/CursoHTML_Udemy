
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver('Resolvio correcto');
    }else{
        rechazar('Se produjo un error');
    }
});

/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);*/
/*
miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));
*/

let promesa = new Promise((resolver) =>{
    //console.log('inicio promesa')
    setTimeout(() => {resolver('saludos con promesa y timeout')}, 3000);
    //console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una funcion regresa una promesa
async function miFuncionConPromesa(){
    return `saludos con promesa y async`;
}//miFuncionConPromesa

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa');
    });
    
    console.log( await miPromesa);
}//funcionConPromesaYAwait

//funcionConPromesaYAwait();

//promesas, await, async y setTimeout

async function funcionConPromesaAwaitTimeout(){
    console.log('Inicio función');
    let miPromesa = new Promise(resolver =>{
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });
    console.log( await miPromesa); //<--- esperar el resultado
    console.log('Fin función');
}//funcionConPromesaAwaitTimeout

funcionConPromesaAwaitTimeout();

