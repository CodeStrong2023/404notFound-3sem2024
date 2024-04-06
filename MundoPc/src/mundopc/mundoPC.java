package mundopc;

import ar.com.system2023.mundopc.*; // Con el * se importan todas las clases que están dentro de ese paquete.

public class mundoPC {
    public static void main(String[] args) {
        Monitor monitorHP = new Monitor("HP", 13); // Importar la clase Monitor.
        Teclado tecladoHP = new Teclado("Bluetooth", "HP");
        Raton ratonHP = new Raton("Bluetooth", "HP");
        Computadora computadoraHP = new Computadora("Computadora HP", monitorHP, tecladoHP, ratonHP);
        
        // Creamos otros objetos de diferente marca.
        Monitor monitorGamer = new Monitor("Gamer", 32);
        Teclado tecladoGamer = new Teclado("Bluetooth", "Gamer");
        Raton ratonGamer = new Raton("Bluetooth", "Gamer");
        Computadora computadoraGamer = new Computadora("Computadora Gamer", monitorGamer, tecladoGamer, ratonGamer);
        Orden orden1 = new Orden(); // Inicializamos el arreglo vacío.
        Orden orden2 = new Orden(); // Una nueva lista para el objeto orden2.
        orden1.agregarComputadora(computadoraHP);
        orden1.agregarComputadora(computadoraGamer);
        
        Computadora computadorasVarias = new Computadora("Computadora de diferentes marcas", monitorHP, tecladoGamer, ratonHP);
        orden2.agregarComputadora(computadorasVarias);
        
        orden1.mostrarOrden();
        orden2.mostrarOrden();
        
        
        
        // Crear más objetos de tipo computadora con todos sus elementos.
        // Completar una lista en el objeto orden1 que llegue a los 10 elementos.
        // Probar de ésta manera los métodos al máximo rendimiento.// 
        
        //Marca Dell
        Monitor monitorDell = new Monitor("Dell", 20);
        Teclado tecladoDell = new Teclado("Bluetooth", "Dell");
        Raton ratonDell = new Raton("Bluetooth", "Dell");
        Computadora computadoraDell = new Computadora("Computadora Dell", monitorDell, tecladoDell, ratonDell);
        
        // Marca Lenovo
        Monitor monitorLenovo = new Monitor("Lenovo", 18);
        Teclado tecladoLenovo = new Teclado("Bluetooth", "Lenovo");
        Raton ratonLenovo = new Raton("Bluetooth", "Lenovo");
        Computadora computadoraLenovo = new Computadora("Computadora Lenovo", monitorLenovo, tecladoLenovo, ratonLenovo);
        
        // Marca Apple
        Monitor monitorApple = new Monitor("Apple", 22);
        Teclado tecladoApple = new Teclado("Bluetooth", "Apple");
        Raton ratonApple = new Raton("Bluetooth", "Apple");
        Computadora computadoraApple = new Computadora("Computadora Apple", monitorApple, tecladoApple, ratonApple);
        
        // Marca Asus
        Monitor monitorAsus = new Monitor("Asus", 20);
        Teclado tecladoAsus = new Teclado("Bluetooth", "Asus");
        Raton ratonAsus = new Raton("Bluetooth", "Asus");
        Computadora computadoraAsus = new Computadora("Computadora Asus", monitorAsus, tecladoAsus, ratonAsus);
        
        // Marca Acer
        Monitor monitorAcer = new Monitor("Acer", 18);
        Teclado tecladoAcer = new Teclado("Bluetooth", "Acer");
        Raton ratonAcer = new Raton("Bluetooth", "Acer");
        Computadora computadoraAcer = new Computadora("Computadora Acer", monitorAcer, tecladoAcer, ratonAcer);
        
        // Marca Samsung
        Monitor monitorSamsung = new Monitor("Samsung", 32);
        Teclado tecladoSamsung = new Teclado("Bluetooth", "Samsung");
        Raton ratonSamsung = new Raton("Bluetooth", "Samsung");
        Computadora computadoraSamsung = new Computadora("Computadora Samsung", monitorSamsung, tecladoSamsung, ratonSamsung);
        
        // Marca Huawei
        Monitor monitorHuawei = new Monitor("Huawei", 18);
        Teclado tecladoHuawei = new Teclado("Bluetooth", "Huawei");
        Raton ratonHuawei = new Raton("Bluetooth", "Huawei");
        Computadora computadoraHuawei = new Computadora("Computadora Huawei", monitorHuawei, tecladoHuawei, ratonHuawei);
        
        // Marca MSI
        Monitor monitorMSI = new Monitor("MSI", 30);
        Teclado tecladoMSI = new Teclado("Bluetooth", "MSI");
        Raton ratonMSI = new Raton("Bluetooth", "MSI");
        Computadora computadoraMSI = new Computadora("Computadora MSI", monitorMSI, tecladoMSI, ratonMSI);
        
        orden1.agregarComputadora(computadoraDell);
        orden1.agregarComputadora(computadoraLenovo);
        orden1.agregarComputadora(computadoraApple);
        orden1.agregarComputadora(computadoraAsus);
        orden1.agregarComputadora(computadoraAcer);
        orden1.agregarComputadora(computadoraSamsung);
        orden1.agregarComputadora(computadoraHuawei);
        orden1.agregarComputadora(computadoraMSI);
        
        orden1.mostrarOrden();
    }
}