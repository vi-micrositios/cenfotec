"""
Las excepciones más comunes con archivos son:
  - FileNotFoundError: El archivo no existe.
  - PermissionError: Sin permisos para leer/escribir (ej. archivo abierto en Excel).
  - IsADirectoryError: Se ententó abrir una carpeta como si fuera un archivo.
  - OSError: Otros errores del sistema.
"""

try:
    # Código que puede fallar
    with open("MT8-2026 SMVB\\Archivos\\monitoreo-atm.txt", "r") as archivo:
        datos = archivo.read()
except FileNotFoundError:
    print("ERROR CRÍTICO: El archivo 'reporte_diario.csv' no fue generado.")
except PermissionError:
    print("ERROR: No se puede leer el archivo.")
except Exception as e:  # Atrapa CUALQUIER otra excepción no contemplada
    print(f"Error inesperado: {e}")
finally: # SIEMPRE se ejecuta (haya error o no)
    print("Intento de lectura finalizado.")

