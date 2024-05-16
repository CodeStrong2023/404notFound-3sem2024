function Aleatorio() {
    return Math.floor(Math.random() * 3) + 1;
}

function eleccion(jugada) {
    if (jugada == 1) {
        return "piedra ✊";
    } else if (jugada == 2) {
        return "papel ✋";
    } else if (jugada == 3) {
        return "tijera ✌️";
    } else {
        return "elección no válida";
    }
}

let triunfos = 1;
let perdidas = 1;
function jugar(){



    for (let i = 0; i < 3; i++) {
        let pc = Aleatorio();
        let jugador = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"));

        alert("PC elige: " + eleccion(pc));
        alert("Tú eliges: " + eleccion(jugador));

        // Combate
        if (pc == jugador) {
            alert("Empate");
        } else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
            alert("Ganaste");
            triunfos++;
        } else {
            alert("Perdiste");
            perdidas++;
        }
    }

    alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
    if (confirm("¿Quieres jugar de nuevo?")) {
        jugar();
    }
}
