#declaramos una variable
try:
    archivo=open("prueba.txt","w") #la w es de write que significa escribir
    archivo.write("programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("con esto terminamos")
except Exception as e:
    print(e)
finally: #siempre se ejecuta
    archivo.close() #con esto se debe cerrar el archivo


