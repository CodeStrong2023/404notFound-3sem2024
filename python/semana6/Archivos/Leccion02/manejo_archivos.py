#declaramos una variable
try:
    archivo=open("prueba.txt","w", encoding='UTF8') #la w es de write que significa escribir
    archivo.write("programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("los acentos son imortantes para las palabras.\n")
    archivo.write("como por ejemplo: acción, ejecución y producción\n")
    archivo.write("con esto terminamos")
except Exception as e:
    print(e)
finally: #siempre se ejecuta
    archivo.close() #con esto se debe cerrar el archivo

#archivo.write("Todo quedo perfecto") # Esto es un error.
