package domain;

public class Empleado {
    protected String nombre;
    protected double sueldo;
    public Empleado (String nombre, double sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo;
    }
    public String obtenerDetalles(){
        return "nombre: "+this.nombre+", sueldo: "+this.sueldo;
    }
}
