# Búsque binaria (debe estar ordenada la lista)

lista = sorted([5, 6, 9, 2, -3, 4, 0]) # [-3, 0, 2, 4, 5, 6, 9]
buscado = 9

posicion = -1
inicio = 0
fin = len(lista) - 1
while inicio <= fin and posicion == -1:
    medio = (inicio + fin) // 2
    if lista[medio] == buscado:
        posicion = medio
    elif lista[medio] < buscado:
        inicio = medio + 1         # se descarta la mitad izquierda
    else:
        fin = medio - 1            # se descarta la mitad derecha
print(posicion)