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
        else{
            System.out.println("Has superado el límite: "+Orden.MAX_COMPUTADORAS);
        }
    }
    
    // Mostrar Orden
    public void mostrarOrden(){
        System.out.println("Orden #: "+this.idOrden);
        System.out.println("Computadoras de la orden #: "+this.idOrden);
        for(int i = 0; i < this.contadorComputadora; i++){
            System.out.println(this.computadora[i]);
        }
    }
    
    
}