import psycopg2  # Esto es para poder conectarnos a Postgres

conexion = psycopg2.connect(
    user='postgres',
    password='Admin',
    host='127.0.0.1',
    port='5432',
    database='test_bd'
)

# cursor: Nos permite ejecutar sentencias sql en postgres
cursor = conexion.cursor()
sentencia = 'SELECT * FROM persona'  # Sentencia para hacer una consulta en la tabla
cursor.execute(sentencia)  # De esta manera ejecutamos la sentencia
registros = cursor.fetchall()  # fetchall: Permite recuperar todos los registros que serán una lista
print(registros)

# Cerramos el objeto cursor y conexión
cursor.close()
conexion.close()
