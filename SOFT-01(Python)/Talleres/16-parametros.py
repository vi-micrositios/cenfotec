# Procedimientos con parámetros (sin return)

"""Muestra una línea formada por el carácter repetido."""
def mostrar_linea(caracter, cantidad):
    print(caracter * cantidad)

"""Muestra el texto enmarcado entre dos líneas."""
def mostrar_titulo(texto):
    mostrar_linea("*", len(texto) + 4)
    print("  " + texto)
    mostrar_linea("*", len(texto) + 4)

"""Muestra la tabla de multiplicar de numero, desde 1 hasta el valor de hasta."""
def mostrar_tabla(numero, hasta):
    for i in range(1, hasta + 1):
        print(numero, "x", i, "=", numero * i)

"""Programa principal: el mismo procedimiento se llama con distintos argumentos."""
def main():
    mostrar_titulo("TABLAS DE MULTIPLICAR")
    numero = int(input("¿Qué tabla desea ver? "))
    hasta = int(input("¿Hasta qué número? "))
    mostrar_tabla(numero, hasta)
    mostrar_linea("-", 20)


# Si este archivo se está ejecutando directamente, haga lo siguiente: 
if __name__ == "__main__":
    main()