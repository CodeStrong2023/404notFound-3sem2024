package ar.com.system2024.mundopc;

public class Orden {
    private final int idOrden;
    private Computadora computadora[]; // Arreglo de objetos.
    private static int contadorOrdenes;
    private static final int MAX_COMPUTADORAS = 10; // Constante.
    private int contadorComputadora; // Con este atributo vamos a saber cuántos objetos de tipo computadora se han agregado al arrelgo.
    // Y así iterar los elementos que sean diferentes de num.
    
    
    // Constructor vacío.
    public Orden(){ 
        this.idOrden = ++Orden.contadorOrdenes; // Incremento.
        this.computadora = new Computadora[Orden.MAX_COMPUTADORAS];
    }
    
    // Método para agregar una nueva computadora al arreglo.
    public void agregarComputadora(Computadora computadora){
        if(this.contadorComputadora < Orden.MAX_COMPUTADORAS){
            this.computadora[this.contadorComputadora++] = computadora;
        }
    }
    
    
}
