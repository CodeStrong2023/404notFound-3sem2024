// while
let contador = 0;
while(contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

//do while
let conteo = 0;
do{
    console .log(conteo);
    conteo++;
}while(conteo < 3);
console.log("Fin del ciclo do while");

// for
for(let contando = 0; contando <3 ;contando++){
    console.log(contando); 
}
console.log("Fin del ciclo for");

//palabra reservada break
for(let contando=0;contando<=10;contando++){
    if(contando%2==0){
        console.log(contando);//muestra todos los pares
        break;
    }
}
console.log("termina el ciclo al encontrar el primer numero par");

// Palabra continue
for (i = 0; i < 10; i++) {
    if (i % 2 !== 0) { // Si el módulo de 2 es distinto a 0 osea que es impar.
        continue; // Salta la iteración actual y salta a la siguiente.
    }
    console.log(i); // Muestra los pares.
}
console.log("Termina el ciclo al encontrar los números pares");