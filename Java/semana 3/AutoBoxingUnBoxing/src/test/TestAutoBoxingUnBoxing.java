package test;

public class TestAutoBoxingUnBoxing {
    public static void main(String[] args) {
        // Clases envolventes o Wrapper 
        /*
            Clases envolventes de tipo primitivos:
        
            int = La clase envolvente Integer.
            long = La clase envolvente Long.
            float = La clase envolvente Float.
            double = La clase envolvente Double.
            boolean = La clase envolvente Boolean.
            byte = La clase envolvente Byte.
            char = La clase envolvente Char.
            short = La clase envolvente Short.
        */
        
        int enteroPrim = 10; // Tipo Primitivo.
        System.out.println("enteroPrim = " + enteroPrim);
        Integer entero = 10; // Tipo Object con la clase Integer.
        System.out.println("entero = " + entero.doubleValue()); // Autoboxing: una literal primitiva de tipo entera se convierte a otro tipo.
        
        // Unboxing: se extrae la literal de entero y se asigna a entero2 y el valor de entero que era un objeto pasa a estar dentro de una variable primitiva.
        int entero2 = entero;
        System.out.println("entero2 = " + entero2);
        
    }
}