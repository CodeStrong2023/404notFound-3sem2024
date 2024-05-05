package test;

import domain.*;

public class TestInstanceOf {
    public static void main(String[] args) {
        Empleado empleado1 = new Empleado("Juan", 10000);
        determinarTipo(empleado1);
        empleado1 = new Gerente("Jose", 5000, "Sistemas");
<<<<<<< HEAD
        determinarTipo(empleado1);
=======
	// determinarTipo(empleado1);
       
    }
    public static void determinarTipo(Empleado empleado){
       if(empleado instanceof Gerente){
           System.out.println("Es de tipo Gerente");
           Gerente gerente = (Gerente) empleado;
	   //((Gerente) empleado).getDepartamento();
           System.out.println("gerente = " + gerente.getDepartamento());
       }
       else if(empleado instanceof Empleado){
           System.out.println("Es de tipo Empleado");
	   //Gerente gerente = (Gerente) empleado;
           //System.out.println("gerente = " + gerente.getDepartamento());
       }
       else if(empleado instanceof Object){
           System.out.println("Es de tipo Object");
       }
>>>>>>> c83d0082266a6421afc6cc8d4a6c7e7ddf390290
    }
    
    public static void determinarTipo(Empleado empleado){
        if(empleado instanceof Gerente){
            System.out.println("Es de tipo Gerente");
        }
        else if(empleado instanceof Empleado){
            System.out.println("Es de tipo Empleado");
        }
        else if(empleado instanceof Object){
            System.out.println("Es de tipo Object");
        }
            
    }
}