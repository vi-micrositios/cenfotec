# Procedimientos: 
KM_A_MILLAS = 0.621371
OPCION_SALIR = 3


def mostrar_encabezado():
    """Muestra el título del programa."""
    print("===================================")
    print("      CONVERSOR DE UNIDADES")
    print("===================================")


def mostrar_menu():
    """Muestra las opciones del menú."""
    print()
    print("1. Celsius a Fahrenheit")
    print("2. Kilómetros a millas")
    print("3. Salir")


def convertir_temperatura():
    """Lee grados Celsius y muestra su equivalente en Fahrenheit."""
    celsius = float(input("Grados Celsius: "))
    fahrenheit = celsius * 9 / 5 + 32
    print(celsius, "°C equivalen a", fahrenheit, "°F")


def convertir_distancia():
    """Lee kilómetros y muestra su equivalente en millas."""
    kilometros = float(input("Kilómetros: "))
    millas = kilometros * KM_A_MILLAS
    print(kilometros, "km equivalen a", round(millas, 2), "millas")





def main():
    """Programa principal: llama a los procedimientos según la opción elegida."""
    mostrar_encabezado()
    opcion = 0
    while opcion != OPCION_SALIR:
        mostrar_menu()
        opcion = int(input("Seleccione una opción: "))
        if opcion == 1:
            convertir_temperatura()
        elif opcion == 2:
            convertir_distancia()
        elif opcion != OPCION_SALIR:
            print("Opción no válida.")
    mostrar_despedida()

def mostrar_despedida():
    """Muestra el mensaje final."""
    print("Gracias por usar el conversor.")

# Si este archivo se está ejecutando directamente, haga lo siguiente: 
if __name__ == "__main__":
    main()