import csv

# Lista de clientes
clientes = [
    {"id": "C001", "nombre": "Ana", "ingreso": 850000},
    {"id": "C002", "nombre": "Luis", "ingreso": 920000}
]

try:
    # Crear y escribir el archivo CSV
    with open("MT8-2026 SMVB/Archivos/clientes.csv", "w", newline="", encoding="utf-8") as archivo:
        campos = ["id", "nombre", "ingreso"]

        escritor = csv.DictWriter(archivo, fieldnames=campos)

        escritor.writeheader()
        escritor.writerows(clientes)

    print("Archivo CSV creado correctamente.")

except FileNotFoundError:
    print("Error: la carpeta 'Archivos' no existe.")

except OSError as error:
    print("Error al crear o escribir el archivo:", error)