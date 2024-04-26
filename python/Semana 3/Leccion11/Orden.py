class orden:
    contador_ordenes = 0
    def __init__(self, productos):
        orden.contador_ordenes += 1
        self._id_orden = orden.contador_ordenes
        self._productos = list(productos)

    def agregar_productos(self, producto):
        self._productos.append(producto)
