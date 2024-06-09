import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true) { //Ciclo infinito
            System.out.println("******* Aplicacion Calculadora *******");
            //Mostramos el menú
            mostrarMenu();
            try {
                var operacion = Integer.parseInt(entrada.nextLine());
                if(operacion >= 1 && operacion <= 4){
                    System.out.println("Digite el valor para el operando1: ");
                    var operando1 =Integer.parseInt(entrada.nextLine());
                    System.out.println("Digite el valor para el operando2: ");
                    var operando2 =Integer.parseInt(entrada.nextLine());
                    int resultado;
                    switch(operacion){
                        case 1 -> { // Suma
                            resultado = operando1 + operando2;
                            System.out.println("Resultado de la suma: "+resultado);
                        }
                        case 2 -> { // Resta
                            resultado = operando1 - operando2;
                            System.out.println("Resultado de la resta: "+resultado);
                        }
                        case 3 -> { // Multiplicación
                            resultado = operando1 * operando2;
                            System.out.println("Resultado de la multiplicación: "+resultado);
                        }
                        case 4 -> { // División
                            resultado = operando1 / operando2;
                            System.out.println("Resultado de la división: "+resultado);
                        }
                        default -> System.out.println("Opción erronea: "+operacion);
                    } // Fin switch (buena práctica)
                } // Fin del if
                else if (operacion == 5){
                    System.out.println("Hasta pronto...");
                    break; //Rompe el ciclo y sale
                }
                else {
                    System.out.println("Opción erronea: "+operacion);
                }
            } catch (Exception e) { // Fin del try, comienzo del catch.
                System.out.println("Ocurrio un error: " + e.getMessage());
            }
            //Imprimimos un salto de linea antes de repetir el menú
            System.out.println();
        }// Fin while
    } // Fin main

    public static void mostrarMenu() {
        System.out.println("""
                    1. Suma
                    2. Resta
                    3. Multiplicacion
                    4. Division
                    5. Salir
                    """);
        System.out.print("Operación a realizar? ");
    }
} // Fin clase

