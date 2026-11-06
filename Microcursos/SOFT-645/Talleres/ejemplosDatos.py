"""
1. Venta de empanadas
Una empanada cuesta ₡1 200. El programa debe solicitar cuántas empanadas desea comprar una persona y calcular el total a pagar.

Debe mostrar:
    - Precio de una empanada.
    - Cantidad de empanadas.
    - Total a pagar.
"""
PRECIO_EMPANADA = 1200

cantidad = int(input("¿Cuántas empanadas desea comprar? "))
total = PRECIO_EMPANADA * cantidad

print("Precio por empanada:", PRECIO_EMPANADA)
print("Cantidad de empanadas:", cantidad)
print("Total a pagar:", total)

"""
2. Compra de tablet con impuesto
Una tablet cuesta ₡180 000. El cliente debe pagar además un impuesto del 13 %.

Debe calcular:
    - Precio.
    - Impuesto.
    - Precio final.
"""
PRECIO_TABLET = 180000
IMPUESTO = 13

impuesto = PRECIO_TABLET * IMPUESTO / 100
precio_final = PRECIO_TABLET + impuesto

print("Precio:", PRECIO_TABLET)
print("Impuesto:", impuesto)
print("Precio final:", precio_final)

"""
3. Ahorro para una bicicleta
Una persona desea ahorrar para comprar una bicicleta. El programa debe solicitar cuánto dinero ahorra cada mes y durante cuántos meses realizará el ahorro.

Debe mostrar:
    - Ahorro mensual.
    - Cantidad de meses.
    - Ahorro total.
"""
ahorro_mensual = float(input("¿Cuánto ahorra cada mes? "))
meses = int(input("¿Durante cuántos meses ahorrará? "))

ahorro_total = ahorro_mensual * meses

print("Ahorro mensual:", ahorro_mensual)
print("Cantidad de meses:", meses)
print("Ahorro total:", ahorro_total)

"""
4. Alquiler entre roomies
El alquiler de un apartamento cuesta ₡250 000. El programa debe solicitar la cantidad de personas que comparten el alquiler y calcular cuánto debe pagar cada una.

Debe mostrar:
    - Costo total del alquiler.
    - Cantidad de personas.
    - Pago por persona.
"""
COSTO_ALQUILER = 250000

personas = int(input("¿Cuántas personas comparten el alquiler? "))
pago_por_persona = COSTO_ALQUILER / personas

print("Costo total del alquiler:", COSTO_ALQUILER)
print("Cantidad de personas:", personas)
print("Pago por persona:", pago_por_persona)