
package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        
    }
    private static void imprimirNumeros(int ...numeros){
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: "+numeros[i]);
            
        }
    }
    
     private static void variosParametros(String nombre, String apellido, int ...numeros) {
        System.out.println("Nombre y apellido: " + nombre + " " + apellido);
        imprimirNumeros(numeros);
    }
}
