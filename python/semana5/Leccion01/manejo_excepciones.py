resultado = None

try:
    a = int(input("Digite el primer numero: "))
    b = int(input("Digite el segundo numero: "))
    resultado = a / b  # modificamos.
except TypeError as e:
    print(f'TypeError - Ocurrió un error:  {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrió un error: {type(e)}')
except Exception as e:
    print(f'Exception - Ocurrió un error: {type(e)}')
else:
    print('No se arrojo ninguna exepcion')
finally: # Siempre se va a ejecutar
    print('Ejecucuion de este bloque Finally')

print (f' El resultado es: {resultado}')
print ('seguimos...')
