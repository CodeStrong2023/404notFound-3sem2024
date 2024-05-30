function iniciarJuego(){
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
   
window.addEventListener('load',iniciarJuego)    