package test;

import enumeraciones.Dias;

public class TestEnumeraciones {

    public static void main(String[] args) {
        System.out.println("Día 1: " + Dias.LUNES);
        indicarDiaSemana(Dias.MARTES);//Las enumeraciones se tratan como cadena
        //ahora no se deben utilizar comillas, se accede a travez de el operador de punto
    }

    private static void indicarDiaSemana(Dias dias) {
        switch (dias) {
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
            //Agregar todos los dias de la semana
            //Agregar el default
            case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
            default:
                System.out.println("Día no válido");
                break;
        }
    }
}
