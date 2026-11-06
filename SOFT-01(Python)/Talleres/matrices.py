# Matriz de información personal
"""
[
    ["Jehidam", "jja@test.com", 123],
    ["Dylan", "djg@test.com", 134],
    ["Julian", "jss@test.com", 145]
]
"""

datos_personales = [["Jehidam", "jja@test.com", 123], ["Dylan", "djg@test.com", 134], ["Julian", "jss@test.com", 145]]

print("Dato fila 1, índice 0:", datos_personales[1][0])
print("Dato fila 2, índice 0:", datos_personales[2][1])
print("Dato fila 0, índice 2:", datos_personales[0][2])

otros_datos = [["Jehidam", "jja@test.com", [123, 523]], ["Dylan", "djg@test.com", [134, 541]], ["Julian", "jss@test.com", [145, 124]]]
print("Dato 523:", otros_datos[0][2][1])

# Ejercicios de matrices
notas = [[80, 90, 75], [60, 70, 65], [95, 85, 100]]

print("Ejercicio 12")
total = 0
for fila in notas:
    print("total = ", total,  "+ ", fila[0])
    total = total + fila[0]
print(total)

print("Ejercicio 13")
for i in range(len(notas)):
    print(notas[i][i])

print("Ejercicio 15")
notas[1][1] = 75
print(notas[1])

print("Ejercicio 16")
notas.append([70, 70, 70])
print(notas)
print(len(notas))