from Cuadrado import Cuadrado
from Rectangulo import Rectangulo

print("creacion de objeto clase cuadrado".center(50,"_"))
cuadrado1 = Cuadrado(8, 'Azul')
print(cuadrado1.ancho)
print(cuadrado1.alto)
print(f'Cálculo del área del cuadrado: {cuadrado1.calcular_area()}' )

# MRO = Method Resolution Order
# Permite conocer la jearaquía de las clases frente a la clase actual en la que estamos llamando a un método.

print(Cuadrado.mro())
print(cuadrado1)

rectangulo1 = Rectangulo(3,9,"Verde")
rectangulo1.alto = 23 # La función 'validarValores' hace que se ignoren los valores que no son admitidos.
print("creacion de objeto clase rectangulo".center(50,"_"))
print(f"Calculo del area del rectangulo: {rectangulo1.calcular_area()}")
print(rectangulo1)
print(cuadrado1)

