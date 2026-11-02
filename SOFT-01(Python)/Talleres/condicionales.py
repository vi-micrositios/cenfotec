'''
Condicional simple
if condición: 
    código a ejecutar SI se cumple la condición 
'''
if age > 18: 
    print("Es mayor de edad")


'''
Condicional doble
if condición: 
    código a ejecutar SI se cumple la condición 
else: 
    código a ejecutar si NO se cumple la condición
'''

if age >= 18: 
    print("Es mayor de edad")
else:
    print("Es menor de edad")


'''
Condicional múltiple
if condición: 
    código a ejecutar SI se cumple la condición 
elif condición: 
    código a ejecutar SI se cumple la condición
else: 
    código a ejecutar si NO se cumplen las condicionales previas
'''
age = int(input("Ingrese su edad: "))

if age < 0: 
    print("Error: La edad debe ser un número positivo")
elif age < 1:                     # (75 < 1)
    print("Es un bebé")
elif age < 12:                  # (75 < 12)
    print("Es un infante")
elif age < 18:                  # (75 < 18)
    print("Es un adolescente")
elif age < 65:                  # (75 < 65)
    print("Es un adulto")
else:
    print("Es un adulto mayor")


'''
Ejercicio: Modifique el programa anterior para: 
    - edad < 65 muestre es un adulto
    - edad mayor o igual a 65 muestre es un adulto mayor 
    - edad un número negativo muestre Error debe ser un número positivo 
'''
