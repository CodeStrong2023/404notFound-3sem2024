package ar.com.system2023.mundopc;

public class Computadora {
    private final int idComputadora; // Al ser una variable constante de tipo final, solo utilizamos el get, el set NO.
    private String nombre;
    private Monitor monitor;
    private Teclado teclado;
    private Raton raton;
    private static int contadorComputadoras;
    
    // Relación de agregación: Los objetos de tipo monitor pueden existir sin necesidad de objetos de tipo Computadora. 
    
    // Constructor vacío.
    private Computadora(){
        this.idComputadora = ++Computadora.contadorComputadoras; // Incremento de computadoras.
    }
    
    // Constructor 2.
    public Computadora(String nombre, Monitor monitor, Teclado teclado, Raton raton){
        this();
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    public int getIdComputadora(){
        return this.idComputadora;
    }
    
    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Monitor getMonitor() {
        return this.monitor;
    }

    public void setMonitor(Monitor monitor) {
        this.monitor = monitor;
    }

    public Teclado getTeclado() {
        return this.teclado;
    }

    public void setTeclado(Teclado teclado) {
        this.teclado = teclado;
    }

    public Raton getRaton() {
        return this.raton;
    }

    public void setRaton(Raton raton) {
        this.raton = raton;
    }

    @Override
    public String toString() { // Nos muestra la relación entre todos los métodos.
        return "Computadora{" + "idComputadora=" + idComputadora + ", nombre=" + nombre + ", monitor=" + monitor + ", teclado=" + teclado + ", raton=" + raton + '}';
    }    
}