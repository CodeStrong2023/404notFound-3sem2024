import psycopg2 # Esto es para poder conectarnos a postgre.

conexion = psycopg2.connect(
    user = 'postgres',
    password = 'admin',
    host = '127.0.0.1',
    port = '5432',
    database = 'test_bd'   
)

try:
    with conexion:
        with conexion.cursor() as cursor:      
            sentencia = 'INSERT INTO persona (nombre, apellido, email) VALUES (%s, %s, %s)' # Placeholder.
            valores = (
                    ("Carlos", "Lara", "clara@gmail.com"),
                    ("Marcos", "Canto", "mcanto@gmail.com"),
                    ("Marcelo", "Cuenca", "mcuenca@gmail.com")
                )
            cursor.executemany(sentencia, valores) # Ejecutamos la sentencia
            registros_insertados = cursor.rowcount
            print(f"Los registros insertadas son: {registros_insertados}")
except Exception as e:
    print(f"Ocurrio un error {e}")
finally:
    conexion.close()