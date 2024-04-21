class Persona:
    contador_persona = 0 # Variable de clase.
    
    @classmethod
    def generar_siguiente_valor(cls):
        cls.contador_persona += 1 # Incremento del contador
        return cls.contador_persona
    
    def __init__(self, nombre, edad):
        self.id_persona = Persona.generar_siguiente_valor()
        self.nombre = nombre
        self.edad = edad
        
    def __str__(self):
        return f"Persona: [{self.id_persona} = {self.nombre}, {self.edad}]"
        
        
persona1 = Persona("Gonzalo", 21)
print(persona1)

persona2 = Persona("Claudia", 45)
print(persona2)

persona3 = Persona("Mirta", 72)
print(persona3)

persona4 = Persona("Guadalupe", 18)
print(persona4)