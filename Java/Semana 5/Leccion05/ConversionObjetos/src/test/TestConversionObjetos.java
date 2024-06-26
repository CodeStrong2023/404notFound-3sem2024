package test;

import domain.*;

public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
        //System.out.println(empleado);
        System.out.println(empleado.obtenerDetalles()); // Si queremos acceder a métodos Escritor.
        //empleado.getTipoEscritura(); // No se puede hacer.

        // Downcasting.
        //((Escritor)empleado).getTipoEscritura(); // Tenemos dos opciones: Esta es una.
        Escritor escritor = (Escritor)empleado; // Esto es la segundo opción.
        escritor.getTipoEscritura();
        
        //Upcasting
        Empleado empleado2= escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}
