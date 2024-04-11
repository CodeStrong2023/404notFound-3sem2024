
package test;

public class TestArgumentosVariables {
    public static void main(String[] args) {
        
    }
    private static void imprimirNumeros(int ...numeros){
        for (int i = 0; i < numeros.length; i++) {
            System.out.println("Elementos: "+numeros[i]);
            
        }
    }
}
