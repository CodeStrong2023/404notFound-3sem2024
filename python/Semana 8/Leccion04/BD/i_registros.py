import psycopg2  # Esto es para poder conectarnos a Postgres.

conexion = psycopg2.connect(user='postgres', password='Admin', host='127.0.0.1', port='5432', database='test_bd')
# cursor: Nos permite ejecutar sentencias sql en postgres.
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'INSERT INTO persona (nombre, apellido, email)VALUES (%s, %s, %s)'
            valores = ('Carlos', 'Lara', 'clara@mail.com')  # Esto es una tupla.
            cursor.execute(sentencia, valores)  # De esta manera ejecutamos la sentencia.
            # conexion.commit() Esto el with lo hace de manera automática, se usa para guardar los cambios en la BD.
            registros_insertados = cursor.rowcount
            print(f'Los registros insertados son: {registros_insertados}')

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()