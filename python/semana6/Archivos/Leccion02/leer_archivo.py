archivo = open('prueba.txt', 'r',
               encoding='UTF8')  # Las letras son: 'r' read, 'a' append, 'w' write, 'x'
# print(archivo.read())
# print(archivo.read(16))
# print(archivo.read(10))  # Continuamos desde la línea anterior
# print(archivo.readline())
# print(archivo.readline())

# Vamos a iterar el archivo, cada una de las líneas
# for línea in archivo:
    # print(linea): iteramos todos los elementos del archivo
print(archivo.readlines()[11])  # Accedemos al archivo como si fuera una lista.
