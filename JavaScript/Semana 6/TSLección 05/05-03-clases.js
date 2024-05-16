class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido
    }

}

let persona1 = new Persona('Martín', 'Perez');
console.log(persona1.nombre)
persona1.nombre = 'Juan Carlos'
console.log(persona1.nombre);
//console.log(persona1);
let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2.nombre)
persona2.nombre = 'María Laura';
console.log(persona2.nombre)
//console.log(persona2);
persona1.apellido = 'Gómez'
console.log(persona1.apellido)
persona2.apellido = 'García'
console.log(persona2.apellido)