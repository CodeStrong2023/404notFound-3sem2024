from Cuadrado import Cuadrado
cuadrado1 = Cuadrado(5, 'Azul')
print(cuadrado1.ancho)
print(cuadrado1.alto)
print(f'Cálculo del área del cuadrado: {cuadrado1.calcular_area()}' )

# MRO = Method Resolution Order
# Permite conocer la jearaquía de las clases frente a la clase actual en la que estamos llamando a un método.

print(Cuadrado.mro())