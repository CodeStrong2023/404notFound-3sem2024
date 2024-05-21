import os

class CatalogoPeliculas:
    ruta_archivo = "peliculas.txt"

    @classmethod
    def agregar_peliculas(cls, pelicula):
        with open(cls.ruta_archivo, 'a', encoding='UTF8') as archivo:
            archivo.write(f'{pelicula.nombre}\n')

    @classmethod
    def listar_pelicular(cls):
        with open(cls.ruta_archivo, 'r', encoding='UTF8') as archivo:
            print(f'Catalogo de peliculas'.center(50, '-'))
            print(archivo.read())
    
    @classmethod
    def eliminar_peliculas(cls):
        os.remove(cls.ruta_archivo)