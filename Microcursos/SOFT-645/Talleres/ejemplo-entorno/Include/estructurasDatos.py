ejemploVariable = "Verde"
print("Variable:", ejemploVariable)

EJEMPLO_CONSTANTE = 9.8
print("Constante:", EJEMPLO_CONSTANTE)

ejemploLista = ["amarillo", 9, True, 12.3, "a"]
print("Lista:", ejemploLista)

ejemploTupla = ("amarillo", 9, True, 12.3, "a") 
print("Tupla:", ejemploTupla)
print("Tupla posición 1:", ejemploTupla[1])
# ejemploTupla[1] = 1 # Error, la tupla es inmutable 

ejemploDiccionario = {"Clave 1": "Valor 1", "Clave 2": "Valor 2"}
print("Diccionario:", ejemploDiccionario)

ejemploConjuntos = {1, 2, 3, 4}
print("Conjunto:", ejemploConjuntos)

ejemploConjuntos.add(5)
ejemploConjuntos.add(2)
ejemploConjuntos.add("azul")
print("Conjunto actualizado:", ejemploConjuntos)