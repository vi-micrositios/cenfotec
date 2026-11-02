# Mostrar el índice de cada elemento en la lista y el elemento
"""
colores = ["rojo", "blanco", "amarillo", "azul", "verde"]
              0       1           2         3        4  
"""
colores = ["rojo", "blanco", "amarillo", "azul", "verde"] 
print("----- Mostrar el índice de cada elemento en la lista y el elemento con while -----")
i = 0
while i < len(colores):
    print("Índice:", i, "- Nombre:", colores[i])
    i += 1

"""
enumerate(colores)

enumerate() permite iterar sobre un iterable, generando índices junto con los elementos

colores = ["rojo", "blanco", "amarillo", "azul", "verde"]
enumerate de colores:  
    -  0     "rojo", 
    -  1     "blanco", 
    -  2     "amarillo", 
    -  3     "azul", 
    -  4     "verde"
"""
print("----- Mostrar el índice de cada elemento en la lista y el elemento con for -----")
for indice, nombreColor in enumerate(colores):
    print("Índice:", indice,  "- Nombre:", nombreColor)

    

# Eliminar un elemento de la lista por índice 
animales = ["Caballo", "Vaca", "Perro", "Gato"]

# Mostrar los elementos con numeración desde 1
for indice, nombre in enumerate(animales, start=1):
    print(indice, "-", nombre)

# Solicitar el elemento que desea eliminar
opcion = int(input("Ingrese el número del elemento que desea eliminar: "))

# Eliminar el elemento seleccionado
if opcion >= 1 and opcion <= len(animales):
    eliminado = animales.pop(opcion - 1)
    print("Elemento eliminado:", eliminado)
else:
    print("Opción no válida.")

# Mostrar la lista actualizada
print("Lista actualizada:")

for indice, nombre in enumerate(animales, start=1):
    print(indice, "-", nombre)




"""
Ejercicio: Tomás usa una lista para gestionar sus tareas diarias. Puede agregar nuevas tareas, marcar las que ya realizó como completadas y ver las que aún están pendientes. Implemente un programa que muestre un menú con opciones: agregar tarea, completar tarea (eliminarla de la lista) y mostrar tareas pendientes.
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