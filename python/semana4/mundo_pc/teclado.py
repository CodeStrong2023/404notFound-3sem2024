from mundo_pc.DispositivoEntrada import DispositivoEntrada


class Teclado(DispositivoEntrada):  # Hereda de la clase DispositivoEntrada.

    contador_teclados = 0

    def _init_(self, marca, tipo_entrada):  # Atributos heredados de la clase padre.
        Teclado.contador_teclados += 1  # Incremento en 1.
        self._id_teclados = Teclado.contador_teclados
        super().__init__(marca, tipo_entrada)  # Llamamos a la clase padre y sus atributos.

    def _str_(self):
        return f'Id {self._id_teclados}) Marca: {self._marca} / Tipo Entrada: {self._tipo_entrada}'


# Si se ejecuta dentro del archivo se puede ver todo,
# si se ejecuta al finalizar el paquete de mundo_pc no se va a ejecutar.
if __name__ == '__main__':
    teclado1 = Teclado('HP', 'USB')
    print(teclado1)
    teclado2 = Teclado('Gamer', 'Bluetooth')
    print(teclado2)