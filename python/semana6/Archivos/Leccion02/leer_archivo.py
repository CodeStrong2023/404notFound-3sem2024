archivo = open('prueba.txt', 'r',
               encoding='UTF8')  # Las letras son: 'r' read, 'a' append, 'w' write, 'x'
# print(archivo.read())
# print(archivo.read(16))
# print(archivo.read(10))  # Continuamos desde la línea anterior
print(archivo.readline())
print(archivo.readline())


