# declaramos una variable
try:
    archivo = open("prueba.txt","w", encoding='UTF8')  # la w es de write que significa escribir
    archivo.write("programamos con diferentes tipos de archivos, ahora en txt.\n")
    archivo.write("los acentos son imortantes para las palabras.\n")
    archivo.write("como por ejemplo: acción, ejecución y producción\n")
    archivo.write('Las letras son:\nr read leer \na append anexa \nw write escribe \nx crea un archivo')
    archivo.write('\nt esta es para texto o text \nb archivos binarios \n w+ lee y escribe son iguales r+\n')
    archivo.write("saludos a todos los alumnos de la tecnicatura\n")
    archivo.write("con esto terminamos")
except Exception as e:
    print(e)
finally:  # siempre se ejecuta
    archivo.close()  # con esto se debe cerrar el archivo

# archivo.write("Todo quedo perfecto") # Esto es un error.
