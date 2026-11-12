"""
SOFT-670 Python para el Análisis de Datos
TEMA 1: Primeros pasos en Python
TALLER DE NUMPY

Guía paso a paso de lo que se hace en clase. Cada línea de código tiene
encima un comentario que explica qué hace.
Ejecute el archivo completo con el botón "Run Python File" de Visual Studio
Code, o comente los pasos que todavía no se han visto.

Archivo de datos (carpeta datos, junto a este archivo):
    - Gaming_Academic_Performance.csv   Hábitos de juego, estudio, sueño y notas
                                        de 8000 estudiantes

Los archivos que genera el taller se guardan en la carpeta salidas.
"""

# Path permite construir rutas de archivos que funcionan en Windows, macOS y Linux
from pathlib import Path
# sys da información sobre el Python que se está ejecutando
import sys
# time permite medir cuánto tarda una parte del programa
import time

# Se importa NumPy con el alias np, que es la convención en todo el mundo
import numpy as np










# =============================================================================
# PASO 7. Leer un archivo grande con NumPy
# np.genfromtxt lee archivos de texto y, a diferencia de np.loadtxt, acepta
# valores faltantes: los convierte en nan ("no es un número"). usecols indica
# qué columnas leer, porque NumPy solo trabaja con números.
# Columnas leídas del archivo: age (1), gaming_hours (3), study_hours (4),
# sleep_hours (5), attendance (6) y grades (13).
# =============================================================================
# Ruta completa del archivo de datos
archivo = "D:\\CENFOTEC\\SOFT-670 Python para análisis de datos\\M9-2026 SMV9\\Teen_Mental_Health_Dataset.csv"
# Comprueba que el archivo existe antes de leerlo


# Lee el archivo: separado por comas, sin la fila de encabezados y solo 6 columnas
estudiantes = np.genfromtxt(archivo, delimiter=",", skip_header=1, usecols=(1, 3, 4, 5, 6, 13))
# Nombres de las columnas del arreglo, en el mismo orden de usecols
columnas = ["Edad", "Juego (h)", "Estudio (h)", "Sueño (h)", "Asistencia (%)", "Nota"]
# Muestra la forma: 8000 filas (estudiantes) y 6 columnas
print("Forma (filas, columnas):", estudiantes.shape)
# Muestra las primeras 5 filas, redondeadas a 2 decimales
# print("Primeras 5 filas:\n", estudiantes[:5].round(2))


# =============================================================================
# PASO 8. Valores faltantes
# np.isnan() devuelve True donde hay un nan. Con mean() normal, un solo nan
# hace que el resultado sea nan; las funciones que empiezan con nan (nanmean,
# nanmax, nanmin...) ignoran los faltantes.
# =============================================================================
# Cuenta los faltantes de cada columna: suma los True hacia abajo (axis=0)
print("Faltantes por columna:", np.isnan(estudiantes).sum(axis=0))
# Con mean() normal, las columnas con faltantes dan nan
""" print("Promedio con mean():", estudiantes.mean(axis=0).round(2))
# Con nanmean() se ignoran los faltantes
print("Promedio con nanmean():", np.nanmean(estudiantes, axis=0).round(2))

# any(axis=1) indica si cada fila tiene al menos un nan; ~ invierte la condición
filasCompletas = ~np.isnan(estudiantes).any(axis=1)
# Se conservan solo las filas sin faltantes
completas = estudiantes[filasCompletas]
# Muestra cuántas filas quedaron
print("Filas completas:", len(completas)) """

""" 
# =============================================================================
# PASO 9. Resumen de cada columna y detección de errores
# Se calcula el mínimo, el máximo y el promedio de cada columna. Revisar el
# mínimo y el máximo permite detectar valores imposibles.
# =============================================================================
# Mínimo de cada columna, ignorando los faltantes
minimos = np.nanmin(estudiantes, axis=0)
# Máximo de cada columna
maximos = np.nanmax(estudiantes, axis=0)
# Promedio de cada columna
promedios = np.nanmean(estudiantes, axis=0)

# Recorre las posiciones de las columnas (0 a 5)
for i in range(len(columnas)):
    # Muestra una línea por columna; :15 reserva 15 espacios y :7.2f muestra 2 decimales
    print(f"{columnas[i]:15} mínimo {minimos[i]:7.2f}   máximo {maximos[i]:7.2f}   promedio {promedios[i]:7.2f}")

# Guarda la columna de notas (posición 5) en una variable
notas = completas[:, 5]
# Cuenta las notas mayores que 100, que son imposibles (errores en los datos)
print("Notas mayores que 100 (errores):", (notas > 100).sum())
# Conserva solo las filas con nota válida
validos = completas[notas <= 100]
# Muestra cuántos estudiantes quedaron para el análisis
print("Estudiantes válidos:", len(validos))


# =============================================================================
# EJERCICIO 2. Estadísticas de los estudiantes con NumPy
# Con el arreglo validos:
# a) Obtenga el percentil 90 de cada columna.
# b) ¿Cuántos estudiantes juegan más de 6 horas diarias?
# c) Compare la nota promedio de quienes estudian más de 7 horas con la de
#    quienes estudian menos de 3 horas.
# d) Calcule la correlación de las horas de estudio y de las horas de juego
#    con la nota, usando np.corrcoef.
# =============================================================================
# --- Solución ---
# Percentil 90 de cada columna (axis=0)
print("a) Percentil 90:", np.percentile(validos, 90, axis=0).round(2))
# Columna de horas de juego (posición 1)
juego = validos[:, 1]
# Columna de horas de estudio (posición 2)
estudio = validos[:, 2]
# Columna de notas (posición 5)
notasValidas = validos[:, 5]
# Cuenta cuántos juegan más de 6 horas
print("b)", (juego > 6).sum())
# Promedio de la nota filtrando por horas de estudio
print("c) Más de 7 h:", round(notasValidas[estudio > 7].mean(), 2),
      "| Menos de 3 h:", round(notasValidas[estudio < 3].mean(), 2))
# corrcoef devuelve una matriz 2 x 2; la posición [0, 1] es la correlación entre las dos variables
print("d) Estudio - nota:", round(np.corrcoef(estudio, notasValidas)[0, 1], 3),
      "| Juego - nota:", round(np.corrcoef(juego, notasValidas)[0, 1], 3))


# =============================================================================
# PASO 10. Guardar resultados en archivos
# np.savetxt guarda un arreglo en un archivo de texto (CSV) que se puede abrir
# con cualquier programa. np.save guarda en el formato propio de NumPy (.npy),
# que es más rápido de leer con np.load.
# =============================================================================
# Guarda los estudiantes válidos: separado por comas, 2 decimales y con encabezados
np.savetxt(SALIDAS / "estudiantes_validos.csv", validos, delimiter=",", fmt="%.2f",
           header="edad,juego,estudio,sueno,asistencia,nota", comments="")
# Guarda el mismo arreglo en formato .npy
np.save(SALIDAS / "estudiantes_validos.npy", validos)
# Vuelve a cargar el archivo .npy para comprobar que se guardó bien
cargado = np.load(SALIDAS / "estudiantes_validos.npy")
# array_equal compara los dos arreglos: True si son idénticos
print("¿El archivo .npy tiene los mismos datos?", np.array_equal(validos, cargado))
# Muestra la carpeta donde quedaron los archivos
print("Archivos guardados en:", SALIDAS)


# =============================================================================
# RETO 1. Notas según las horas de juego
# Con el arreglo validos:
# a) Clasifique a los estudiantes en 4 grupos según las horas de juego:
#    menos de 2, de 2 a menos de 4, de 4 a menos de 6, y 6 o más
#    (use np.digitize).
# b) Para cada grupo, muestre la cantidad de estudiantes, la nota promedio y
#    las horas de sueño promedio.
# c) Guarde el resumen en salidas/resumen_por_juego.csv.
# =============================================================================
# --- Solución ---
# Límites de los grupos: digitize asigna 0 si es menor que 2, 1 si está entre 2 y 4, etc.
limites = [2, 4, 6]
# Número de grupo de cada estudiante según sus horas de juego
grupo = np.digitize(juego, limites)
# Nombres de los grupos, en el mismo orden de los números 0, 1, 2 y 3
nombresGrupos = ["Menos de 2 h", "2 a 4 h", "4 a 6 h", "6 h o más"]
# Lista donde se guarda una fila del resumen por cada grupo
filasResumen = []

# Recorre los números de grupo de 0 a 3
for numero in range(len(nombresGrupos)):
    # Máscara con los estudiantes de este grupo
    enGrupo = grupo == numero
    # Cantidad de estudiantes del grupo
    cantidad = enGrupo.sum()
    # Nota promedio del grupo
    notaPromedio = notasValidas[enGrupo].mean()
    # Horas de sueño promedio del grupo (columna 3)
    suenoPromedio = validos[enGrupo, 3].mean()
    # Muestra la línea del grupo
    print(f"{nombresGrupos[numero]:13} estudiantes {cantidad:5}   nota {notaPromedio:6.2f}   sueño {suenoPromedio:5.2f}")
    # Agrega la fila al resumen: número de grupo, cantidad, nota y sueño
    filasResumen.append([numero, cantidad, notaPromedio, suenoPromedio])

# Convierte la lista de filas en un arreglo y la guarda como CSV
np.savetxt(SALIDAS / "resumen_por_juego.csv", np.array(filasResumen), delimiter=",", fmt="%.2f",
           header="grupo,estudiantes,nota_promedio,sueno_promedio", comments="") """


# =============================================================
# CONCEPTO 7: Determinante
# Definición: número que se calcula a partir de una matriz cuadrada...
# Fórmula: para la matriz [[a, b], [c, d]], determinante = a*d - b*c
# Uso en análisis de datos: indica si una matriz tiene inversa...
# Fuente: ...
# =============================================================
g = np.array([[1, 2], [3, 4]])
print(round(np.linalg.det(g), 2))  # determinante de g (matriz cuadrada)
# Resultado: -2.0. Como no es 0, la matriz g tiene inversa.

# Prueba con otros datos:
h = np.array([[2, 5], [1, 3]])
print(round(np.linalg.det(h), 2))
# Resultado: 1.0
