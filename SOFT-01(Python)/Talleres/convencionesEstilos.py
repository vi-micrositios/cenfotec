# snake_case
# camelCase
# PascalCase

""" 
Cantidad de intentos fallidos 
"""

cantidad_intentos_fallidos = 2
cantidadIntentosFallidos = 2
CantidadIntentosFallidos = 2

"""
Ejercicio 4: Consumo de combustible
Una persona desea calcular cuánto dinero necesitará para comprar combustible para realizar un viaje.

El programa debe solicitar la distancia del viaje en kilómetros, el rendimiento del vehículo en kilómetros por litro y el precio de un litro de combustible.

Debe calcular la cantidad aproximada de litros necesarios para realizar el viaje y el costo total del combustible.

Fórmulas:
litros necesarios = distancia / rendimiento
costo = litros necesarios × precio por litro
"""

# Posible solución
distanciaViaje=float(input("Ingrese la distancia del viaje en km: "))
rendimiento_vehiculo = float(input("Ingrese el rendimiento del vehículo en km por litro:"))
precio=float(input("Ingrese el precio de un litro de combustible: ")) 

litrosNecesarios=distanciaViaje/rendimiento_vehiculo
costo_total=litrosNecesarios*precio

print("Distancia:",distanciaViaje) 
print("Litros necesarios:",litrosNecesarios)
print("Costo total:",costo_total)


