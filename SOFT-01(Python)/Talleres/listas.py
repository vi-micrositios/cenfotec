# Lista (nombre de la lista = [dato 1, dato 2, dato 3 , ... ])

provincias = ["Cartago", "Puntarenas", "Alajuela"]
print("Lista de provincias:", provincias)

# Agregar datos al final 
provincias.append("Guanacaste")
print("Lista de provincias actualizada:", provincias)

"""
[
"Cartago", :        índice 0        |   índice -3 
"Puntarenas", :     índice 1        |   índice -2
"Alajuela":         índice 2        |   índice -1 
]
"""

# Agregar datos en un índice particular
provincias.insert(1, "Heredia")
print("Lista de provincias actualizada:", provincias)

provincias.insert(3, "San José")
print("Lista de provincias actualizada:", provincias)

#      0         1            2             3           4          5 
# ['Cartago', 'Heredia', 'Puntarenas', "San José, 'Alajuela', 'Guanacaste']

# Eliminar el último elemento de la lista
provincias.pop()
print("Lista de provincias actualizada:", provincias)

# Eliminar una posición en particular
provincias.pop(2) # Eliminar el elemento en la posición 2
print("Lista de provincias actualizada:", provincias)

# Consultar datos ['Cartago', 'Heredia', 'San José', 'Alajuela']
print("Elemento en el índice 3", provincias[3])
print("Elemento en el índice -1", provincias[-1])

print("Elemento en el índice 1", provincias[1])
print("Elemento en el índice -3", provincias[-3])

# Actualizar el dato de una posición en particular
provincias[-3] = "Limón"
print("Lista de provincias actualizada:", provincias)

provincias[2] = "Guanacaste"
print("Lista de provincias actualizada:", provincias)

listaNumeros = [8, 23, 54, 6, -3, 0]
listaPares = [2, 4, 6, 8, 10]
print("Lista de números:", listaNumeros)
print("Listas unidas: ", listaNumeros + listaPares + provincias)

listaCosasAleatorias = ["Casa", 20, 12.5, True]
print("Lista de datos aleatorios:", listaCosasAleatorias)

# len(nombreLista): Averiguar el largo de la lista
lista_compras = ["Arroz", "Frijoles", "Maíz"]
print("Cantidad de elementos en la lista de compras:", len(lista_compras))

articulo = "Zapatos"
print("Variable articulo:", articulo)

"""
Resumen de operaciones
Operación	                    Función o método	            Ejemplo
Agregar al final	            append()	                    clientes.append("Ana")
Insertar	                    insert()	                    clientes.insert(1, "Luis")
Eliminar por valor	            remove()	                    clientes.remove("Ana")
Eliminar por posición	        pop()	                        clientes.pop(0)
Eliminar con índice	            del	                            del clientes[2]
Contar elementos	            len()	                        len(clientes)
Buscar elemento	                in	                            "Ana" in clientes
Obtener índice	                index()	                        clientes.index("Ana")
Contar repeticiones	            count()	                        clientes.count("Ana")
Ordenar	                        sort()	                        clientes.sort()
Invertir	                    reverse()	                    clientes.reverse()
Copiar	                        copy()	                        clientes.copy()
Unir listas	                    +	                            lista1 + lista2
Repetir lista	                *	                            ["BAC"] * 3
Obtener sublista	            [:]	                            clientes[1:4]
Suma todos los elementos	   sum(lista)                       sum(saldos)
Devuelve el valor mayor	       max(lista)                       max(saldos)
Devuelve el valor menor	       min(lista)                       min(saldos)
Cuenta los elementos	       len(lista)                       len(saldos)
Calcula el promedio	           sum(lista)/len(lista)            sum(saldos)/len(saldos)
"""