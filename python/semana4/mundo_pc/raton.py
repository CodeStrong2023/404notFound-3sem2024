from mundo_pc.DispositivoEntrada import DispositivoEntrada


class Raton(DispositivoEntrada):  # Clase hija de DispositivoEntrada.

    contador_ratones = 0

    def __init__(self, marca, tipo_entrada):  # Atributos heredados de la clase Dispositivo entrada.
        Raton.contador_ratones += 1  # Incremento en 1.
        self._id_raton = Raton.contador_ratones
        super().__init__(marca, tipo_entrada)  # super(): Llamando a la clase padre y sus argumentos.

    def __str__(self):
        return f'Id: {self._id_raton}, Marca: {self._marca}, Tipo Entrada: {self._tipo_entrada}'


# Hacemos pruebas:
if __name__ == '__main__':
    raton1 = Raton('HP', 'USB')
    print(raton1)
    raton2 = Raton('Acer', 'Bluetooth')
    print(raton2)




