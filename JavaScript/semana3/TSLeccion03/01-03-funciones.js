miFunction(8,2); //esto se le conoce como hosting
function miFunction(a,b){
    //console.log("sumamos: "+(a+b));
    return a+b;
}

//llamamos la funcion
miFunction(3,5);

let resultado=miFunction(6,7);
console.log(resultado);

// Funciones de tipo expresión o anónima.
x = function(a, b){ return a + b};
resultado = x(5, 6);
console.log(resultado);

// Funciones de tipo serlf y involing: funciones que se mandan a llamar así mismas una sola vez(NO se pueden reutilizar).
(function(a, b){
    console.log('Ejecutando la función: '+ (a + b));
})(9, 6); // Función útil para proyectos web.


console.log(typeof miFuncion);
function miFuncionDos(a, b){ // Cuerpo de la función.
    console.log(arguments.length);
} // Arguments(array): Para saber cuántos argumentos se han definido, solo se usa dentro de la misma función.

miFuncionDos(5, 7, 3, 6);

// toString:
var miFuncionTexto = miFuncionDos.toString(); // Convierte la función a texto.
console.log(miFuncionTexto);

// Funciones flecha: No se utiliza ni function, ni las llaves, ni tampoco la palabra reservada return.
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 7); // Asignamos el valor a una variable.
console.log(resultado);

// (a, b) Parámetros: lista de variables que definimos en una función.
// (3, 7) Argumentos: los valores que pasamos cuando llamamos a una función.


// Función de tipo expresión:
let  sumar = function(a = 4, b = 8){
    console.log(arguments[0]); // Muestra el parámetro de a.
    console.log(arguments[1]); // Muestra el parámetro de b.
    return a + b + arguments[2];
}
resultado = sumar(3, 2, 9); // Sobreescribimos los argumentos de la función.
console.log(resultado);

// Hoisting, para utilizar una función en una parte del archivo antes de haberla declarado.
// Sumar todos los argumentos:
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; // Arguments es para arreglos.
    }
    return suma;
}

// Paso por valor: cuando utilizamos tipos que no son objetos, ej: numéricos, booleanos, etc.
// Tipos primitivos:
let k = 10;
function cambiarValor(a){ // Paso por valor.
    a = 20;
}

cambiarValor(k);
console.log(k);

// Paso por referencia: 
// A la función o al método le pasamos la referencia hexadecimal del espacio de memoria dónde está alojado el objeto.
const persona = { // Buena práctica definir una variable de tipo const al crear un objeto.
    nombre: 'Juan', // : para el objeto.
    apellido: 'Lepez'
} 
console.log(persona);

function cambiarValorObjeto(p1){
    p1.nombre = 'Ignacio';
    p1.apellido = 'Perez';
}

cambiarValorObjeto(persona);
console.log(persona);
