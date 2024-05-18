# MANEJO DE CONTEXTO WITH: sintaxis simplificada, abre y cierra el archivo
with open('prueba.txt', 'r', encoding='utf8') as archivo:
    print(archivo.read())
# No hace falta ni el try, ni el finally
# en el contexto de with lo que se ejecuta de manera automatica
# tiliza diferentes métodos:__enter__ este es el que abre
# Ahora el sicuiente método es el que cierra: __exit__
