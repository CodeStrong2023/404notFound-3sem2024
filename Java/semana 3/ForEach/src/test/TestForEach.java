package test;

public class TestForEach {
    public static void main(String[] args) {
        int edades[] = {5, 6, 8, 9}; //sintaxis resumida
        for (int edad: edades) { //Sintaxis del ForEach
            System.out.println("edad = " + edad);
        }
    }
}