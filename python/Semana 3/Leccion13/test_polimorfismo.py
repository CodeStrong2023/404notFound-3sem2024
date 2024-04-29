from Empleado import Empleado
from Gerente import Gerente

def imprimir_detalle(objeto):
    print(objeto) # De manera indirecta llama al str de la clase 'Empleado' o 'Gerente'.
    print(type(objeto)) # Mostramos el tipo de dato que recibe.

empleado = Empleado("Ariel", 50000)
imprimir_detalle(empleado)