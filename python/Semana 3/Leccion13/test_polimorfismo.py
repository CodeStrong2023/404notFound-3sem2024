from Empleado import Empleado
from Gerente import Gerente


def imprimir_detalle(objeto):  # Este es el método para aprender lo que es el Polimorfismo.
    # print(objeto)  # De manera indirecta llama al str de la clase 'Empleado' o 'Gerente'.
    print(type(objeto))  # Mostramos el tipo de dato que recibe.
    print(objeto.mostrar_detalles())
    if isinstance(objeto, Gerente):
        print(objeto.departamento)


empleado = Empleado("Ariel", 50000)
imprimir_detalle(empleado)

gerente = Gerente('Natalia', 60000, 'Sistemas')
imprimir_detalles(gerente)
