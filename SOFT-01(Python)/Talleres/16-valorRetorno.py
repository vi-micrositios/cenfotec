# Ejemplo: Funciones con return
NOTA_MINIMA = 0
NOTA_MAXIMA = 100
NOTA_APROBACION = 70
NOTA_EXCELENCIA = 90


def leer_nota(numero):
    """Lee la nota indicada y la vuelve a pedir mientras esté fuera de 0 a 100. Devuelve la nota."""
    nota = float(input("Nota " + str(numero) + ": "))
    while nota < NOTA_MINIMA or nota > NOTA_MAXIMA:
        print("La nota debe estar entre 0 y 100.")
        nota = float(input("Nota " + str(numero) + ": "))
    return nota


def calcular_promedio(nota1, nota2, nota3):
    """Devuelve el promedio de las tres notas."""
    promedio = (nota1 + nota2 + nota3) / 3
    return promedio


def obtener_condicion(promedio):
    """Devuelve la condición según el promedio."""
    if promedio >= NOTA_EXCELENCIA:
        condicion = "Excelente"
    elif promedio >= NOTA_APROBACION:
        condicion = "Aprobado"
    else:
        condicion = "Reprobado"
    return condicion


def mostrar_resultado(nombre, promedio, condicion):
    """Procedimiento: muestra el resultado (no devuelve nada)."""
    print()
    print("Estudiante:", nombre)
    print("Promedio:", round(promedio, 2))
    print("Condición:", condicion)


def main():
    """Programa principal: guarda en variables los valores que devuelven las funciones."""
    nombre = input("Nombre del estudiante: ")
    nota1 = leer_nota(1)
    nota2 = leer_nota(2)
    nota3 = leer_nota(3)
    promedio = calcular_promedio(nota1, nota2, nota3)
    condicion = obtener_condicion(promedio)
    mostrar_resultado(nombre, promedio, condicion)

# Si este archivo se está ejecutando directamente, haga lo siguiente: 
if __name__ == "__main__":
    main()