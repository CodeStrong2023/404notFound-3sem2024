function seleccionarPersonajeJugador() {
    let personajes = document.getElementsByName('personaje');
    let personajeSeleccionado = '';
    for (let i = 0; i < personajes.length; i++) {
        if (personajes[i].checked) {
            personajeSeleccionado = personajes[i].id;
            break;
        }
    }
    if (personajeSeleccionado) {
        alert('SELECCIONASTE A ' + personajeSeleccionado.toUpperCase());
    } else {
        alert('NO HAS SELECCIONADO NINGÚN PERSONAJE');
    }
}

let botonPersonajeJugador = document.getElementById('boton-personaje');
botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);