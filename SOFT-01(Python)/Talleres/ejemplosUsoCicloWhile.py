# Ejemplo 1: Calcular el promedio de 30 notas (procesar datos y realizar cálculos acumulativos)

suma = 0
contador = 1

while contador <= 30:
    nota = float(input("Ingrese la nota: "))
    suma = suma + nota
    contador = contador + 1

promedio = suma / 30
print("El promedio de las 30 notas es:", promedio)

# Ejemplo 2: Calcular el total de una compra (procesar datos y realizar  cálculos acumulativos)
total = 0
precio = 0

while precio != -1:
    precio = float(input("Ingrese el precio del producto (-1 para terminar): "))
    if precio != -1:
        total = total + precio

print("El total de la compra es:", total)

# Ejemplo 3: Validar una nota (validar hasta obtener un dato correcto)
nota = -1

while nota < 0 or nota > 100:
    nota = float(input("Ingrese una nota entre 0 y 100: "))
    if nota < 0 or nota > 100:
        print("Nota inválida. Intente de nuevo.")

print("La nota ingresada es:", nota)

# Ejemplo 4: Menú que se repite (Repetir un menú)
opcion = ""

while opcion != "3":
    print("1. Saludar")
    print("2. Mostrar un mensaje")
    print("3. Salir")

    opcion = input("Elija una opción: ")

    if opcion == "1":
        print("¡Hola! Bienvenido al programa.")
    elif opcion == "2":
        print("Estamos aprendiendo ciclos en Python.")
    elif opcion != "3":
        print("Opción no válida")

print("Programa finalizado")

# Ejemplo 5: Calcular una potencia (realizar cálculos acumulativos)

base = int(input("Ingrese la base: "))
exponente = int(input("Ingrese un exponente entero no negativo: "))

resultado = 1
contador = 1

while contador <= exponente:
    resultado = resultado * base
    contador = contador + 1

print("El resultado es:", resultado)

# Ejemplo 6: Calcular el factorial de un número (realizar cálculos acumulativos) 
numero = int(input("Ingrese un número entero no negativo: "))

factorial = 1
contador = 1

while contador <= numero:
    factorial = factorial * contador
    contador = contador + 1

print("El factorial de", numero, "es:", factorial)

# Ejemplo 7: Encontrar el número mayor (encontrar valores especiales)

contador = 1
mayor = 0

while contador <= 5:
    numero = int(input("Ingrese un número positivo: "))

    if contador == 1 or numero > mayor:
        mayor = numero

    contador = contador + 1

print("El número mayor es:", mayor)

# Ejemplo 8: Contar números pares (encontrar valores especiales / datos que cumplan con una condición)

contador = 1
cantidad_pares = 0

while contador <= 10:
    numero = int(input("Ingrese un número entero: "))

    if numero % 2 == 0:
        cantidad_pares = cantidad_pares + 1

    contador = contador + 1

print("La cantidad de números pares es:", cantidad_pares)

# # Ejemplo 9: Calcular el promedio hasta ingresar cero (procesar datos y realizar  cálculos acumulativos)
suma = 0
cantidad = 0
numero = 1

while numero != 0:
    numero = float(input("Ingrese un número (0 para terminar): "))

    if numero != 0:
        suma = suma + numero
        cantidad = cantidad + 1

if cantidad > 0:
    promedio = suma / cantidad
    print("El promedio es:", promedio)
else:
    print("No se ingresaron datos para calcular el promedio.")

# Ejemplo 10: Recorrer una matriz de notas (módulo 6: recorrer estructuras de datos)
# En este ejemplo se utiliza una matriz (módulo 6)

notas = [
    [85, 90, 78],
    [70, 88, 95],
    [92, 80, 84]
]

fila = 0
suma = 0

while fila < 3:
    columna = 0

    while columna < 3:
        suma = suma + notas[fila][columna]
        columna = columna + 1

    fila = fila + 1

promedio = suma / 9
