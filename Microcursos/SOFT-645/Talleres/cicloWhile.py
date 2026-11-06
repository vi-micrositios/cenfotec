intentos = 1    # Intentos fallidos 

while intentos <= 3:
    print("Intento", intentos)
    intentos += 1 # intentos = intentos + 1 

print("Cuenta bloqueada")


nota = float(input("Ingrese la nota obtenida (0-100): "))
while nota < 0 or nota > 100:
    nota = float(input("Nota no válida. Intente de nuevo: "))


# Ejemplo: El ciclo termina cuando el usuario ingresa salir

print("----------------- Ejemplo 3")
quiereSalir = "no"

while quiereSalir == "no":
    respuesta = input("Ingrese una nota o ingrese la palabra 'salir' para terminar el programa: ")

    if respuesta == "salir":
        print("Saliendo del programa")
        quiereSalir = "si"
