
package domain;

public class Gerente extends Empleado{
    private String departamento;
    
    public Gerente(String nombre, int sueldo, String departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
      //Sobreescribimos el metodo
    @Override
    public String obtenerDetalles() {
        return super.obtenerDetalles()+", Departamento: "+this.departamento;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }
    
    
 }
