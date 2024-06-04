import psycopg2  # Esto es para poder conectarnos a Postgres

conexion = psycopg2.connect(user='postgres', password='Admin', host='127.0.0.1', port='5432', database='test_bd')
# cursor: Nos permite ejecutar sentencias sql en postgres
try:
    with conexion:
        with conexion.cursor() as cursor:
            # Placeholder %s: parámetro posicional.
            sentencia = 'SELECT * FROM persona WHERE id_persona IN %s'  # Sentencia para hacer una consulta en la tabla.
            entrada = input('Digite los id_persona a buscar(separados por coma): ')
            llaves_primarias = (tuple(entrada.split(', ')),)  # Tupla de tuplas.
            cursor.execute(sentencia, llaves_primarias)  # De esta manera ejecutamos la sentencia
            registros = cursor.fetchall()  # fetchall: Permite recuperar todos los registros que serán una lista
            for registro in registros:
                print(registro)

except Exception as e:
    print(f'Ocurrió un error: {e}')
finally:
    conexion.close()

