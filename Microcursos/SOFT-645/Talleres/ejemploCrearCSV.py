import csv

# Lista de clientes
clientes = [
    {"id": "C001", "nombre": "Ana", "ingreso": 850000},
    {"id": "C003", "nombre": "Marco", "ingreso": 1850000},
    {"id": "C004", "nombre": "Dariana", "ingreso": 1850000},
    {"id": "C005", "nombre": "Enrique", "ingreso": 1850000},
    {"id": "C006", "nombre": "Fernanda", "ingreso": 1850000},
    {"id": "C002", "nombre": "Luis", "ingreso": 920000}
]

"""
id,     nombre,     ingreso
C001,   Ana,        850000
C003,   Marco,      1850000
"""

# Crear y escribir el archivo CSV
with open("MT8-2026 SMVB/Archivos/clientes.csv", "w", newline="", encoding="utf-8") as archivo:
    columnas = ["id", "nombre", "ingreso"]

    escritor = csv.DictWriter(archivo, fieldnames=columnas)

    escritor.writeheader()  # Escribe los encabezados
    escritor.writerows(clientes)  # Escribe los datos

print("Archivo CSV creado correctamente.")
