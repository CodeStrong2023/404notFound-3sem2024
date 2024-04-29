class Empleado: #no hereda sino solo de la clase object
    def __init__(self, nombre, sueldo):
        self._nombre = nombre
        self._sueldo = sueldo

    def __str__(self):
        return f'Empleado: [Nombre: {self._nombre}, Sueldo: {self._sueldo}]'
