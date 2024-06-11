package domain;

public enum TipoEscritura {
    CLASICO ("ESCRITURA A MANO"),
    MODERNO ("ESCRITURA DIGITAL");
    
    private final String descripcion;
    
    private TipoEscritura (String descripcion){//constructor
        this.descripcion=descripcion;
    }
    //metodo get
    public String getDescripcion(){
        return this.descripcion;
    }
    
    
}
