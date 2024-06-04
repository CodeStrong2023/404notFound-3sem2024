import psycopg2  # Esto es para poder conectarnos a Postgres

conexion = psycopg2.connect(user='postgres', password='Admin', host='127.0.0.1', port='5432',database='test_bd')
try:
    with conexion:
        with conexion.cursor() as cursor:
            sentencia = 'SELECT * FROM persona'  # Sentencia para hacer una consulta en la tabla
            cursor.execute(sentencia)  # De esta manera ejecutamos la sentencia
            registros = cursor.fetchall()  # fetchall: Permite recuperar todos los registros que serán una lista
            print(registros)
except Exception as e:
    print(f'Ocurrio un error: {e}')
finally:
    conexion.close()


# https://www.psycopg.org/docs/usage.html