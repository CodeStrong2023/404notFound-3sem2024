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
console.log(perosna['apellido']);//Accedemos como si fuera un arreglo
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
let personaArray = Object.values();
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
console.log(padre);
console.log(padre.nombreCompleto()) //Utilizamos la función
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());