class orden:
    contador_ordenes = 0

    def __init__(self, productos):
        orden.contador_ordenes += 1
        self._id_orden = orden.contador_ordenes
        self._productos = list(productos)

    def agregar_productos(self, producto):
        self._productos.append(producto)

    def calcular_total(self):
        total = 0  # Variable temporal.
        for producto in self._productos:
            total += producto.precio
        return total

    def __str__(self):
        producto_str = ""
        for producto in self._productos:
            producto_str += producto.__str__() + " | "

        return f"ID orden: {self._id_orden}, \nProducto: {producto_str}"


if __name__ == "__main__":  # Solo sera visible si se ejecuta desde aqui.
    producto1 = Producto("Camiseta", 5000)
    producto2 = Producto("Pantalon", 12000)

    # Lista de productos
    productos1 = [producto1, producto2]

    # Primer objeto de la clase 'Orden' y le pasamos la lista de productos.
    orden1 = Orden(productos1)
    print(orden1)
    
    # Tarea: Modificar la orden2, ingresando nuevos productos con sus nombres y precios.
    # Crear una nueva lista de productos y agregarla a la orden2

    # orden2 = Orden(productos1)
    # print(orden2)
    producto3 = Producto('Buzo', 145.00)
    producto4 = Producto('Campera', 180.00)
    productos2 = [producto3, producto4]
    orden2 = Orden(productos2)
    print(orden2)
