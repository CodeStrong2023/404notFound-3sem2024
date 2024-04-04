package ar.com.system2024.mundopc;

public class Monitor {
    private final int idMonitor;
    private String marca;
    private double tamanio;
    private static int contadorMonitores;
    
    private Monitor(){ // Constructor Vacío
        this.idMonitor = ++Monitor.contadorMonitores; // Incremento de cada uno de los monitores
    }
    
    public Monitor(String marca, double tamanio){
        this(); // Llamado al constructor vacío (private Monitor)
        this.marca = marca;
        this.tamanio = tamanio;        
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getTamanio() {
        return this.tamanio;
    }

    public void setTamanio(double tamanio) {
        this.tamanio = tamanio;
    }
    
    // Ingresamos manualmente el getidMonitor
    public int getIdMonitor(){
        return this.idMonitor;
    }

    @Override
    public String toString() {
        return "Monitor{" + "idMonitor=" + idMonitor + ", marca=" + marca + ", tamanio=" + tamanio + '}';
    }
    
    
    
}
