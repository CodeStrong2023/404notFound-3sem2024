package test;
import domain.Persona;
public class TestForEach {
    public static void main(String[] args) {
        int edades[] = {5, 6, 8, 9}; //sintaxis resumida
        for (int edad: edades) { //Sintaxis del ForEach
            System.out.println("edad = " + edad);
        }
        Persona personas[]={new Persona("juan"),new Persona("carla"),new Persona("beatriz")}; 
    //forEach
    for(Persona persona:personas){
        System.out.println("persona = "+persona);
    }
    }
}