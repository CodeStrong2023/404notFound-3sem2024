
package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    static{ //Bloque de inicializacion estatico
        System.out.println("Ejecucion bloque estatico");
        ++Persona.contadorPersona;
        //idPerosona = 10; No es un atributo estatico, por esto nos muestra error
    }
     { //Bloque de inicialización NO estático (contexto dinámico)
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersona++; //Incrementamos el atributo
    } 
    
    //Los bloques de inicialización se ejecutan antes del constructor
    
    public Persona(){
        System.out.println("Ejecución del constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    
    
}
