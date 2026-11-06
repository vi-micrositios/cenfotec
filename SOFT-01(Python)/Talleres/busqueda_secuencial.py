# Búsqueda secuencial (puede estar ordenada o desordenada la lista)

lista = [5, 6, 9, 2, -3, 4, 0]
buscado = 9

posicion = -1                      # -1 significa «no está»
i = 0
while i < len(lista) and posicion == -1:
    if lista[i] == buscado:
        posicion = i
    i = i + 1
print(posicion)