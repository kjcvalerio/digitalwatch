var intervalo, agora;

window.onload = iniciar;

function iniciar() {intervalo = setInterval(mostrarHora, 1000);}

function mostrarHora() {
    agora = new Date();
    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    var segundo = agora.getSeconds();
    document.getElementById('relogio').innerHTML = hora + ":" + minuto + ":" + segundo;
}



