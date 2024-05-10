class DispositivoEntrada:
    def __init__(self, marca, tipo_entrada):
        self._marca = marca
        self._tipo_entrada = tipo_entrada

    @property
    def _marca(self):
        return self.marca

    @_marca.setter
    def _marca(self, marca):
        self.marca = marca

    @property
    def _tipo_entrada(self):
        return self.tipo_entrada

    @_tipo_entrada.setter
    def _tipo_entrada(self, tipo_entrada):
        self.tipo_entrada = tipo_entrada

    