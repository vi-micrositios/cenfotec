lista = [5, 6, 9, 2, -3, 4, 0]
buscado = 9

print ("¿8 está en la lista?:", 8 in lista)

print ("¿-3 está en la lista?:", -3 in lista)
print("Índice del elemento -3:", lista.index(-3))


if buscado in lista:
    print(lista.index(buscado))

if 8 in lista:
    print("Índice del elemento 8:", lista.index(8))

if -3 in lista:
    print("Índice del elemento -3:", lista.index(-3))
