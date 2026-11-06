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

# Recorrer uns lista con un ciclo for
for articulo in lista_compras:
    print("Comprar: ", articulo)

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

"""
Tomás usa una lista para gestionar sus tareas diarias. Puede agregar nuevas tareas, marcar las que ya realizó como completadas y ver las que aún están pendientes. Implemente un programa que muestre un menú con opciones: agregar tarea, completar tarea (eliminarla de la lista) y mostrar tareas pendientes.
"""
tareas = []
opcion = 1
while opcion != 4: # Si opción es diferente a 4 se ejecuta el ciclo, caso contrario termina 
    print("\n Gestor de tareas \n")
    print("1. Agregar una tarea")
    print("2. Marcar como completa una tarea")
    print("3. Mostrar las tareas pendientes")
    print("4. Salir")
    opcion = int(input("Seleccione una opción (1, 2, 3 o 4): "))
    if opcion == 1:
        tareaNueva = input("Ingrese el nombre de la tarea: ")
        tareas.append(tareaNueva)
        print("Tarea agregada")
    elif opcion == 3:
        print("---------- Tareas pendientes: ---------- ")
        for tareaPendiente in tareas: 
            print(tareaPendiente)
    elif opcion == 2:
        print("Esta es la lista de tareas pendientes:")
        # enumerate: iterar la lista y llevar un contador del índice
        for indice, tareaPendiente in enumerate(tareas):
            print(indice + 1,  "-", tareaPendiente)
        indiceTareaEliminar = int(input("Ingrese el número de la tarea que quiere eliminar: "))
        indiceTareaEliminar = indiceTareaEliminar - 1 
        tareas.pop(indiceTareaEliminar)
        print("Tarea eliminada")
    elif opcion == 4:
        print("¡Lo esperamos pronto!")
    else:
        print("Opción no válida")

"""
tareas: [
Lavar
Planchar
Cocinar
]
for tareaPendiente in tareas: 
- Lavar
- Planchar
- Cocinar

enumerate(tareas): 
(0, Lavar)
(1, Planchar)
(2, Cocinar)

for indice, tareaPendiente in enumerate(tareas):
indice = 0 , tareaPendiente = Lavar
indice = 1 , tareaPendiente = Planchar
indice = 2 , tareaPendiente = Cocinar
"""

ventas = [1200, 450, 3000, 800, 1500, 200, 4000, 600, 900, 2500] # Ventas diarias en USD de 10 asesores

# Filtro: Crear una lista con solo las ventas MAYORES a 1000 USD (WHERE ventas > 1000)
"""
for monto in venta:
    if monto > 1000:
        ventas_mayores.append(monto)
"""
ventas_mayores = [monto for monto in ventas if monto > 1000]
print("Ventas > $1000:", ventas_mayores)

# Transformación: Crear una lista al calcular el bono (10%) para los que vendieron más de 800 (SELECT monto*0.1)
"""
for monto in venta:
    if monto > 800:
        bonos.append(monto * 0.10)
"""
bonos = [monto * 0.10 for monto in ventas if monto > 800]
print("Bonos para vendedores destacados:", bonos)

# Transformación compleja: Si vende más de 2000, bono del 15%, si no, 5%.
"""
for monto in ventas:
    if monto > 2000:
        bonos_variables.append(monto * 0.15)
    else:
        bonos_variables.append(monto * 0.05)
"""
bonos_variables = [monto * 0.15 if monto > 2000 else monto * 0.05 for monto in ventas]
print("Bonos variables:", bonos_variables)