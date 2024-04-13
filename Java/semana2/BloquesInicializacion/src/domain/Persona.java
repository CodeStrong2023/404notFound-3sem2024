
package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersona;
    
    static{ //Bloque de inicializacion estatico
        System.out.println("Ejecucion bloque estatico");
        ++Persona.contadorPersona;
        //idPerosona = 10; No es un atributo estatico, por esto nos muestra error
    }
    
    
    
}
