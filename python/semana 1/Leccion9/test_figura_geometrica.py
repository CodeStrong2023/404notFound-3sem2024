from Cuadrado import Cuadrado
from FiguraGeometrica import FiguraGeometrica
from Rectangulo import Rectangulo

# Desde el archivo Cuadrado importamos la clase Cuadrado

print("Creación de objeto clase Cuadrado".center(50, "_"))
cuadrado1 = Cuadrado(8, "Azul")
cuadrado1.alto = 7
cuadrado1.ancho = 7
# print(cuadrado1.ancho)
# print(cuadrado1.alto)
print(f"Cálculo del área del cuadrado: {cuadrado1.calcular_area()}")

# MRO = Method Resolution Order
# Permite conocer la jerarquía de las clases frente a la clase actual en la que estamos llamando a  un método.

# print(Cuadrado.mro())


print(cuadrado1)
print("Creación de objeto clase Rectángulo".center(50, "_"))
rectangulo1 = Rectangulo(3, 9, "Verde")
rectangulo1.ancho = 8
print(f"Cálculo del área del rectangulo: {rectangulo1.calcular_area()}")
print(rectangulo1)

figura1 = FiguraGeometrica()
