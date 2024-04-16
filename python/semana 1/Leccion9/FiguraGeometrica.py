class FiguraGeometrica:
    def __init__(self, ancho, alto):
        if self.validarValores(ancho):
            self._ancho = ancho
        else:
            self._ancho = 0
            print("Error, valor para el ancho no válido")
            
        if self.validarValores(alto):
            self._alto = alto
        else:
            self._alto = 0
            print("Error, valor para el alto no válido")
            
    @property
    def ancho(self):
        return self._ancho
    
    @ancho.setter
    def ancho(self, ancho):
        if self.validarValores(ancho):
            self._ancho = ancho
        
    @property
    def alto(self):
        return self._alto
    
    @alto.setter
    def alto(self, alto):
        if self.validarValores(alto):
            self._alto

    def __str__(self):
        return f"FiguraGeometrica [Ancho: {self._ancho}, Alto: {self._alto}]"
    
    # Función para validar los datos ingresados.
    def validarValores(self, valor):
        return True if 0 < valor < 10 else False
