import psycopg2 as bd  # Esto es para poder conectarnos a Postgres

conexion = bd.connect(user='postgres', password='Admin', host='127.0.0.1', port='5432', database='test_bd')
try:
    conexion.autocommit = False  # Para que no se guarde de manera automática.
    cursor = conexion.cursor()
    sentencia = 'INSERT INTO persona(nombre, apellido, email)VALUES(%s, %s, %s)'
    valores = ('María', 'Esparza', 'mesparza@mail.com')
    cursor.execute(sentencia, valores)
    print('Termina la transacción')


except Exception as e:
    conexion.rollback()
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()
