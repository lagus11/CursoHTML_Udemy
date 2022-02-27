
const mostrarReloj = () => {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${min}:${seg}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
                   'Junio', 'Julio', 'Agosto', 'Septiembre',
                    'Octubre', 'Noviembre', 'Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles',
                  'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}//mostrarReloj

const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }//if
    return hora;
}//formatoHora

setInterval(mostrarReloj, 1000);