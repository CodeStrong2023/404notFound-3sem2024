package ar.com.system2024.mundopc;

public class Teclado extends DispositivoEntrada{ // Extiende de la clase padre(Teclado es la clase hija).
    private final int idTeclado;
    private static int contadorTeclados;
    
    public Teclado(String tipoEntrada, String marca){ // Constructor.
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados; // Aquí se origina el conteo.
    }

    @Override
    public String toString() {
        return "Teclado{" + "idTeclado=" + idTeclado +", "+ super.toString()+ '}';
    }               
}