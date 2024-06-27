let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;


function reiniciarJuego() {
    ataqueJugador = null;
    ataqueEnemigo = null;
    vidasJugador = 3;
    vidasEnemigo = 3;
    document.getElementById('personaje-jugador').innerText = '';
    document.getElementById('personaje-enemigo').innerText = '';
    document.getElementById('ataque-jugador').innerText = '';
    document.getElementById('ataque-enemigo').innerText = '';
    document.getElementById('vidas-jugador').innerText = '3';
    document.getElementById('vidas-enemigo').innerText = '3';
    document.getElementById('boton-ataque').disabled = false;

    let seccionMensajes = document.getElementById('mensajes');
    while (seccionMensajes.firstChild) {
        seccionMensajes.removeChild(seccionMensajes.firstChild);
    }

    let radios = document.querySelectorAll('input[type=radio][name=personaje]');
    radios.forEach(radio => radio.checked = false);

    
    document.getElementById('seleccionar-personaje').style.display = 'block';
    document.getElementById('seleccionar-ataque').style.display = 'none';
    document.getElementById('mensajes').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'none';
}
function iniciarJuego() {
    alert('Reglas del juego: \n 1. Elige tu personaje \n 2. Ataca al enemigo \n 3. Si tu vida llega a 0, pierdes \n 4. Si la vida del enemigo llega a 0, ganas');

    document.getElementById('seleccionar-ataque').style.display = 'none';
    document.getElementById('mensajes').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'none';

    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', function() {
        if (seleccionarPersonajeJugador()) {
            document.getElementById('seleccionar-ataque').style.display = 'block';
            document.getElementById('reiniciar').style.display = 'block';
            document.getElementById('mensajes').style.display = 'block';
            
        }
    });

    let botonAtaque = document.getElementById('boton-ataque');
    botonAtaque.addEventListener('click', ataqueAleatorioJugador);

    let botonReiniciar = document.getElementById('boton-reiniciar');
    botonReiniciar.addEventListener('click', reiniciarJuego);
}
function seleccionarPersonajeJugador() {
    let inputZuko = document.getElementById('zuko');
    let inputKatara = document.getElementById('katara');
    let inputAang = document.getElementById('aang');
    let inputToph = document.getElementById('toph');
    let spanPersonajeJugador = document.getElementById('personaje-jugador');

    if (inputZuko.checked) {
        spanPersonajeJugador.innerHTML = 'Zuko';
    } else if (inputKatara.checked) {
        spanPersonajeJugador.innerHTML = 'Katara';
    } else if (inputAang.checked) {
        spanPersonajeJugador.innerHTML = 'Aang';
    } else if (inputToph.checked) {
        spanPersonajeJugador.innerHTML = 'Toph';
    } else {
        alert('Selecciona un personaje');
        return false; 
    }
    document.getElementById('seleccionar-personaje').style.display = 'none';

    seleccionarPersonajeEnemigo();
    return true; 
}

function seleccionarPersonajeEnemigo() {
    let personajeJugador = document.getElementById('personaje-jugador').innerHTML;
    let personajes = ['Zuko', 'Katara', 'Aang', 'Toph'];
    personajes = personajes.filter(personaje => personaje !== personajeJugador); 

    let personajeAleatorio = personajes[aleatorio(0, personajes.length - 1)];
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo');
    spanPersonajeEnemigo.innerHTML = personajeAleatorio;
}

function ataqueAleatorioJugador() {
    let spanPersonajeJugador = document.getElementById('personaje-jugador').innerHTML;

    if (spanPersonajeJugador === "") {
        alert('Primero selecciona un personaje para atacar');
        return;
    }

    let ataqueAleatorio = aleatorio(1, 3);
    
    if (ataqueAleatorio == 1) {
        ataqueJugador = 'Puño';
    } else if (ataqueAleatorio == 2) {
        ataqueJugador = 'Patada';
    } else {
        ataqueJugador = 'Barrida';
    }
    document.getElementById('ataque-jugador').innerText = ataqueJugador;
    ataqueAleatorioEnemigo();
    determinarGanadorYActualizarVidas();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Puño';
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Patada';
    } else {
        ataqueEnemigo = 'Barrida';
    }
    document.getElementById('ataque-enemigo').innerText = ataqueEnemigo;
}

function actualizarMensaje() {
    let seccionMensajes = document.getElementById('mensajes');
    let personajeJugador = document.getElementById('personaje-jugador').innerText;
    let personajeEnemigo = document.getElementById('personaje-enemigo').innerText;
    let ataqueJugador = document.getElementById('ataque-jugador').innerText;
    let ataqueEnemigo = document.getElementById('ataque-enemigo').innerText;
    let vidasJugador = parseInt(document.getElementById('vidas-jugador').innerText);
    let vidasEnemigo = parseInt(document.getElementById('vidas-enemigo').innerText);

    let nuevoMensaje = document.createElement('p');

    if (vidasJugador > vidasEnemigo) {
        nuevoMensaje.innerText = `Tu personaje ${personajeJugador} atacó con ${ataqueJugador}, el personaje ${personajeEnemigo} del enemigo atacó con ${ataqueEnemigo} - GANASTE 🎉`;
    } else if (vidasJugador < vidasEnemigo) {
        nuevoMensaje.innerText = `Tu personaje ${personajeJugador} atacó con ${ataqueJugador}, el personaje ${personajeEnemigo} del enemigo atacó con ${ataqueEnemigo} - PERDISTE 😢`;
    } else {
        nuevoMensaje.innerText = `Tu personaje ${personajeJugador} atacó con ${ataqueJugador}, el personaje ${personajeEnemigo} del enemigo atacó con ${ataqueEnemigo} - EMPATE 😐`;
    }

    seccionMensajes.appendChild(nuevoMensaje);
}

function determinarGanadorYActualizarVidas() {
    if (ataqueJugador == ataqueEnemigo) {

        actualizarMensajeConResultado('EMPATE 😐');
    } else if (
        (ataqueJugador == 'Barrida' && ataqueEnemigo == 'Patada') ||
        (ataqueJugador == 'Patada' && ataqueEnemigo == 'Puño') ||
        (ataqueJugador == 'Puño' && ataqueEnemigo == 'Barrida') 
    ) {
        if (vidasEnemigo > 0) {
            vidasEnemigo--;
        }
        actualizarMensajeConResultado('GANASTE 🎉');
    } else {
        if (vidasJugador > 0) {
            vidasJugador--;
        }
        actualizarMensajeConResultado('PERDISTE 😢');
    }

    document.getElementById('vidas-jugador').innerText = vidasJugador;
    document.getElementById('vidas-enemigo').innerText = vidasEnemigo;

    let ganador = '';
    if (vidasJugador === 0) {
        ganador = 'El enemigo';
        document.getElementById('boton-ataque').disabled = true;
    } else if (vidasEnemigo === 0) {
        ganador = 'El jugador';
        document.getElementById('boton-ataque').disabled = true;
    }

    if (ganador !== '') {
        mostrarMensajeFinal(ganador);
    }
}

function actualizarMensajeConResultado(resultado) {
    let seccionMensajes = document.getElementById('mensajes');
    let personajeJugador = document.getElementById('personaje-jugador').innerText;
    let personajeEnemigo = document.getElementById('personaje-enemigo').innerText;
    let ataqueJugador = document.getElementById('ataque-jugador').innerText;
    let ataqueEnemigo = document.getElementById('ataque-enemigo').innerText;
    let nuevoMensaje = document.createElement('p');
    nuevoMensaje.innerText = `Tu personaje ${personajeJugador} atacó con ${ataqueJugador}, el personaje ${personajeEnemigo} del enemigo atacó con ${ataqueEnemigo} - ${resultado}`;
    seccionMensajes.appendChild(nuevoMensaje);
}

function mostrarMensajeFinal(ganador) {
    alert(`${ganador} ha ganado la batalla!`);
    let mensajeFinal = document.getElementById('mensaje-final');
    if (!mensajeFinal) {
        mensajeFinal = document.createElement('div');
        mensajeFinal.id = 'mensaje-final';
        document.body.appendChild(mensajeFinal);
    }
    
    mensajeFinal.style.display = 'block';
    document.getElementById('reiniciar').style.display = 'block';
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);
