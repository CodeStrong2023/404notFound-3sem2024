//let persona3 = new Persona("Carla", "Ponce"), esto no se debe hacer

class Persona{ //Clase padre

    static contadorObjetosPersona = 0; // Atributo estático
    email = 'Valor default email'; // Atributo no estático

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa el contador: " + Persona.contadorObjetosPersona);
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre+ ' '+this._apellido;
    }
    // Sobreescribiendo el metodo de la clase padre (Objet)
    toString(){ //Regresa un string
        //Se aplica polimorfismo que significa = multiples formas en tiempo de ejecucion
        // El metodo que se ejecuta depende si es una referencia de padre o hija
        return this.nombreCompleto(); 
    }

    static saludar(){
        console.log('Saludos desde este método static');
    }

    static saludar2(persona){
        console.log(persona.nombre+' '+persona.apellido);
    }
}

class Empleado extends Persona{ //Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento
    }
    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura 
 nombreCompleto(){
    return super.nombreCompleto()+ ', '+this._departamento;
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

let empleado1 = new Empleado("Maria", "Gimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//Object.prototype.toString Esta es la manera de acceder a atributos y métodos de manera dinámica
console.log(empleado1.toString());
console.log(persona1.toString());

//persona1.saludar(); No se utiliza desde el objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

//console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

// El atributo no estático se asocia con los ojetos.
console.log(persona1.email);
console.log(empleado1.email);
//console.log(Persona.email); No se puede acceder desde la clase.

