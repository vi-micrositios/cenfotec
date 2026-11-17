# Una lista que se envía a una función NO se copia: la función recibe LA MISMA lista. Si la función cambia sus elementos, el cambio se ve después de la llamada.

CONSUMO_DIARIO = 5

# ---------- Caso 1: un número (int) como parámetro ----------
def gastar_numero(energia):
    """Resta el consumo a un número.

    Parámetros: energia (int).
    """
    # energia es una copia del valor: cambiarla aquí no afecta
    # a la variable de main().
    energia = energia - CONSUMO_DIARIO
    print("  Dentro de la función, energia =", energia)


# ---------- Caso 2: una lista como parámetro ----------
def gastar_lista(recursos):
    """Resta el consumo a cada elemento de la lista.

    Parámetros: recursos (list): la función modifica sus elementos.
    """
    # recursos es LA MISMA lista de main(): al cambiar sus elementos
    # con recursos[i] = ..., el cambio se conserva después de la llamada.
    for i in range(len(recursos)):
        recursos[i] = recursos[i] - CONSUMO_DIARIO
    print("  Dentro de la función, recursos =", recursos)


# ---------- Caso 3: asignar una lista nueva al parámetro ----------
def reemplazar_lista(recursos):
    """Asigna una lista nueva al parámetro.

    Parámetros: recursos (list).
    """
    # Con el signo = el parámetro pasa a apuntar a OTRA lista.
    # La lista de main() no cambia.

    # recursos = [70, 30, 45]   # 0xc1
    # recursos = [0, 0, 0]      # 1xc1
    recursos = [0, 0, 0]
    print("  Dentro de la función, recursos =", recursos)


# ---------- Caso 4: devolver una lista nueva (sin tocar la original) ----------
def calcular_restantes(recursos):
    """Calcula los recursos restantes en una lista nueva.

    Parámetros: recursos (list): no se modifica.
    Devuelve: list nueva con los recursos restantes.
    """
    # Se crea una lista nueva con append(): la lista recibida no cambia.
    restantes = []
    for cantidad in recursos:
        restantes.append(cantidad - CONSUMO_DIARIO)
    return restantes


def main():
    """Programa principal: muestra los cuatro casos.

    Parámetros: ninguno.
    Devuelve: nada.
    """
    print("CASO 1: un número")
    energia = 40
    print("  Antes de la llamada, energia =", energia) 
    gastar_numero(energia)
    print("  Después de la llamada, energia =", energia)   # sigue en 40

    print("\n CASO 2: una lista (se modifican sus elementos)")
    recursos = [70, 30, 45]
    print("  Antes de la llamada, recursos =", recursos) 
    gastar_lista(recursos)
    print("  Después de la llamada, recursos =", recursos)  # cambió: [65, 25, 40]

    print("\n CASO 3: una lista (se le asigna una lista nueva)")
    recursos = [70, 30, 45]
    print("  Antes de la llamada, recursos =", recursos) 
    reemplazar_lista(recursos)
    print("  Después de la llamada, recursos =", recursos)  # no cambió: [70, 30, 45]

    print("\n CASO 4: la función devuelve una lista nueva")
    recursos = [70, 30, 45]
    print("  Antes de la llamada, recursos =", recursos) 
    restantes = calcular_restantes(recursos)
    print("  Lista original: recursos  =", recursos)        # no cambió: [70, 30, 45]
    print("  Lista nueva:    restantes =", restantes)       # [65, 25, 40]

# Si este archivo se está ejecutando directamente, haga lo siguiente: 
if __name__ == "__main__":

    gastar_numero(40)
    gastar_numero(-80)
    gastar_numero(0)

    gastar_lista([50, 60, 70])
    gastar_lista([-10, 60, 70])
    gastar_lista([50, 10, 5, 60, 70]) 

    main()
    