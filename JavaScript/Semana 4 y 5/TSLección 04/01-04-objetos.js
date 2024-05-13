let x = 10;//variable tipo primitivo
console.log(x.length);
console.log('Tipos primitivos');
// Objeto
let persona = {
    nombre: 'Carlos',
    apellido:'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'ES',
    get lang (){
        return this.idioma.toUpperCase();// Convierte las minúsculas a mayúsculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ //Método o función en JavaScrip
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){// Este es el método get
        return this.nombre+', Edad: '+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria 
persona2.nombre = 'Juan';
persona2.direccion = 'Salada14';
persona2.telefono = '54928465768';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']);//Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('Cambiamos y eliminamos un error');
persona.apellida = 'Betancud';//Cambiamos dinamicamente un valor del objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);

//Distintas formas de imprimir un objeto
//Número 1: La más sencilla: concatenar cada valor de cada propiedad
console.log(persona.nombre+', '+persona.apellido);
console.log('Distintas formas de imprimir un objeto: Forma 1');

//Número 2: A travéz del ciclo for in
console.log('Distintas formas de imprimir un objeto: Forma 2');
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número 3: La función objet.values()
console.log('Distintas formas de imprimir un objeto: Forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizaremos el método JSON.stringify
console.log('Distintas formas de imprimir un objeto: Forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'lopezl@gmail.com');
padre.nombre = 'Luis'; //Modificamos el nombre
padre.telefono = '6588378537';// Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()) //Utilizamos la función
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono); // La propiedad no esta definida
console.log(madre.nombreCompleto());

//Diferentes formaas de crear objetos

//caso objeto1
let miObjeto = new Object(); // Esta es una opcicion formal
//caso objeto 2
let miObjeto2 = {};// esta opcion brebe y recomendada

// caso string 1
let miCadena1 = new String("Hola");
//caso string 2
let miCadena2 = "Hola";//esta es la sintaxis siplificada y recomendada

//caso con numeros 1
let miNumero = new Number(1);//es formal no recomendable
//caso con numeros 2
let miNumero2 = 1;// sintaxis recomendada

//caso boolean 1
let miBoolean1 = false;//formal
//caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

// Casos arreglos 1
let miArreglo1 = new Array();
// Caso arreglos 2
let miArreglo2 = [];

// Caso funcion 1
let miFuncion1 = new function(){}; //Todo despues de new es considerado objeto
//caso funcion 2
let miFuncion2 = function(){}; //Notacion simplificad y recomendada

//Uso de prototype
Persona3.prototype.telefono = '2942434833';
console.log(padre)
console.log(madre.telefono);
madre.telefono = '29423484379';
console.log(madre.telefono);

// Uso de call
// Permite llamar a un método que está definido en un objeto desde otro objeto.
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+ ': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Lic.', '5492618585856'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing', '5492618585856'));


// Método apply
// Similar a call, permite llamar un método en un objeto que no tiene definido cierto método.
let arreglo = ['Ing.', '5492618686865']; // Creamos el arreglo y pasamos los elementos necesarios.
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));



