package ar.com.system2024.mundopc;

public class Raton extends DispositivoEntrada{ // Extiende de la clase padre(Raton es la clase hija).
    private final int idRaton;
    private static int contadorRatones;
    
    public Raton(String tipoEntrada, String marca){ // Constructor.
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones; // Aquí se origina el conteo.
    }

    @Override
    public String toString() {
        return "Raton{" + "idRaton=" + idRaton +", "+ super.toString()+ '}';
    }
    
}