/*function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);  
   }
   
   function seleccionarPersonajeJugador() {
       let personaje=document.getElementById("personaje-jugador")
       let personajes = document.getElementsByName('personaje');
       let personajeEnemigo = document.getElementById("personaje-enemigo");
       let personajeSeleccionado = '';
       for (let i = 0; i < personajes.length; i++) {
           if (personajes[i].checked) {
               personajeSeleccionado = personajes[i].id;
               break;
           }
       }
       if (personajeSeleccionado) {
           personaje.innerHTML=personajeSeleccionado;
           let personajeEnemigoSeleccionado = '';
           while (!personajeEnemigoSeleccionado || personajeEnemigoSeleccionado === personajeSeleccionado) {
               let indiceAleatorio = Math.floor(Math.random() * personajes.length);
               personajeEnemigoSeleccionado = personajes[indiceAleatorio].id;
           }
           personajeEnemigo.innerHTML = personajeEnemigoSeleccionado;
       } else {
           alert('NO HAS SELECCIONADO NINGÚN PERSONAJE');
       }
   }
   
window.addEventListener('load',iniciarJuego)    */

let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById('boton-personaje');
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);

    let botonPunio = document.getElementById('boton-punio') //Ahora creamos un escuchador de eventos
    botonPunio.addEventListener('click', ataquePunio)
    let botonPatada = document.getElementById('boton-patada')
    botonPatada.addEventListener('click', ataquePatada)
    let botonBarrida = document.getElementById('boton-barrida')
    botonBarrida.addEventListener('click', ataqueBarrida)

}

function seleccionarPersonajeJugador(){
    let inputZuko = document.getElementById('zuko')
    let inputKatara = document.getElementById('katara')
    let inputAang = document.getElementById('aang')
    let inputToph = document.getElementById('toph')
    let spanPersonajeJugador = document.getElementById('personaje-jugador')

    if(inputZuko.checked){
        spanPersonajeJugador.innerHTML = 'Zuko'
    }else if(inputKatara.checked){
        spanPersonajeJugador.innerHTML = 'Katara'
    }else if(inputAang.checked){
        spanPersonajeJugador.innerHTML = 'Aang'
    }else if(inputToph.checked){
        spanPersonajeJugador.innerHTML = 'Toph'
    }else{
        alert('Selecciona un personaje')
    }
    seleccinarPersonajeEnemigo()
}

function seleccinarPersonajeEnemigo(){ //esta función va dentro de seleccionarPersonajeJugador() al final
    let personajeAleatorio = aleatorio(1, 4) //A continuación creamos las variables para cada personaje
    let spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

    //comenzamos con la lógica
    if(personajeAleatorio == 1){
        spanPersonajeEnemigo.innerHTML = 'Zuko'
    } else if(personajeAleatorio == 2){
        spanPersonajeEnemigo.innerHTML = 'Katara'
    } else if(personajeAleatorio == 3){
        spanPersonajeEnemigo.innerHTML = 'Aang'
    } else {
        spanPersonajeEnemigo.innerHTML = 'Toph'
    }
}

function ataquePunio(){ //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Punio'
    ataqueAleatorioEnemigo()
}

function ataquePatada(){ //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Patada'
    ataqueAleatorioEnemigo()
}

function ataqueBarrida(){ //Modificamos la variable global ataqueJugador
    ataqueJugador = 'Barrida'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){//Ahora ocupando la variable global nueva le decimos el ataque y necesitamos la función aleatorio
    let ataqueAleatorio = aleatorio(1, 3)
   
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'Punio'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'Patada'
    } else {
        ataqueEnemigo = 'Barrida'
    }
}



function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min +1) + min)
}

window.addEventListener('load', iniciarJuego)
