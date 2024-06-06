import psycopg2 # Esto es para poder conectarnos a postgre.

conexion = psycopg2.connect(
    user = 'postgres',
    password = '232002',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_bd'   
)

try:
    with conexion:
        with conexion.cursor() as cursor:      
            sentencia = 'DELETE FROM persona WHERE id_persona IN %s' # Placeholder.
            entrada = input("Ingrese los id_persona a eliminar (separados por coma): ")
            valores = (tuple(entrada.split(",")),)
            cursor.execute(sentencia, valores) # Ejecutamos la sentencia
            registros_eliminados = cursor.rowcount # Vemos el números de filas afectadas por la operación.
            print(f"Los registros eliminados son: {registros_eliminados}")
except Exception as e:
    print(f"Ocurrio un error {e}")
finally:
    conexion.close()