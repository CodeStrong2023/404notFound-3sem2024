from Cuadrado import Cuadrado
cuadrado1 = Cuadrado(5, 'Azul')
print(cuadrado1.ancho)
print(cuadrado1.alto)
print(f'Cálculo del área del cuadrado: {cuadrado1.calcular_area()}' )

# MRO = Method Resolution Order
# Permite conocer la jearaquía de las clases frente a la clase actual en la que estamos llamando a un método.

print(Cuadrado.mro())
print(cuadrado1)

rectangulo1 = Rectangulo(5,8,"Verde")
print(f"Calculo del area del rectangulo: {rectangulo1.calcular_area()}")
print(rectangulo1)
print(cuadrado1)

