const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById("hora").innerHTML = `${hr} : ${min} : ${seg}`;

    const meses =["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias =["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();
    document.getElementById("fecha").innerHTML = ` ${diaSemana}, ${dia} ${meses[mes]} ${anio}`;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora = (hora) => {
    if (hora < 10) {
        hora = "0" + hora;
    }
    return hora;
}


setInterval(mostrarReloj, 1000);