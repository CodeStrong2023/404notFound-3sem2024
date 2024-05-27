package accesodatos;

public interface IAccesoDatos { // Una interface no tiene constructores.
    int MAX_REGISTRO = 10; // Constante(public, final, static).
    
    // Método insertar es abstracto y sin cuerpo:
    void insertar();
    
    void listar();
    
    void actualizar();
    
    void eliminar();
}
