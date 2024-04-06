package ar.com.system2023.mundopc;

public class Teclado extends DispositivoEntrada {
    // Atributos.
    private final int idTeclado;
    private static int contadorTeclado;
    
    // Constructor.
    public Teclado(String tipoEntrada, String marca) {
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclado;
    }
    
    // toString.
    @Override
    public String toString() {
        return "Teclado{" + "idTeclado=" + idTeclado + '}';
    }
    
}
