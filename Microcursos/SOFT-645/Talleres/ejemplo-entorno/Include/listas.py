# Lista (nombre de la lista = [dato 1, dato 2, dato 3 , ... ])
provincias = ['Cartago', "Heredia", "Puntarenas", "Guanacaste"] # Lista de string
print('Lista de provincias:', provincias)

provincias.append("Limón") # Agregar un elemento al final de la lista
print("Provincias actualizadas:", provincias)

provincias.append("Alajuela") # Agregar un elemento al final de la lista
print("Provincias actualizadas:", provincias)
"""
[
'Cartago': índice 0     |   índice -4
"Heredia": índice 1     |   índice -3
"Puntarenas": índice 2  |   índice -2
"Guanacaste": índice 3  |   índice -1
]
"""
# Agregar un elemento ("San José") en el índice 2
provincias.insert(2, "San José")
print("Provincias actualizadas:", provincias)

print("Elemento en índice 5:", provincias[5]) # Obtener el elemento de la lista en el índice 5
print("Elemento en índice 3:", provincias[3]) # Obtener el elemento de la lista en el índice 3
print("Elemento en índice -1:", provincias[-1]) # Obtener el elemento de la lista en el índice -1
print("Elemento en índice -3:", provincias[-3]) # Obtener el elemento de la lista en el índice -3

provincias.pop() # Eliminar el último elemento de la lista 
print("Provincias actualizadas:", provincias)

provincias.pop(1) # Eliminar el elemento en el índice 1
print("Provincias actualizadas:", provincias)

listaNumeros = [8, 23, 54, 6, -3, 0]
print("Lista de números:", listaNumeros)

listaCosasAleatorias = ["Casa", 20, 12.5, True]
print("Lista de datos aleatorios:", listaCosasAleatorias)

# Ejercicio: Crear una lista con mínimo dos pasatiempos y mostrar cada uno de los pasatiempos con el mensaje  "Pasatiempo:  ""


lista_compras = ["Arroz", "Frijoles", "Maíz"]
# len(elmento) : Averiguar el largo del elemento
print("Largo de la lista:", len(lista_compras)) # Mostrar el largo de la lista

print("Lista de compras:\n\n\n", lista_compras) # \n: Salto de línea
for elemento in lista_compras:
    print("Comprar:", elemento)

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
Redondea un número	           round(valor, decimales)          round(promedio, 2)
Devuelve una lista ordenada	   sorted(lista)                    sorted(saldos)
"""



"""
Tomás usa una lista para gestionar sus tareas diarias. Puede agregar nuevas tareas, marcar las que ya
realizó como completadas y ver las que aún están pendientes. Implemente un programa que muestre un
menú con opciones: agregar tarea, completar tarea (eliminarla de la lista) y mostrar tareas pendientes.
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
        break
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