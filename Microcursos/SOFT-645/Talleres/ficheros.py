"""
Función clave: open(ruta, modo)

Modos principales:
  - 'r' : Read (lectura). El archivo debe existir.
  - 'w' : Write (escritura). Si el archivo existe, lo sobrescribe (borra lo anterior). Si no existe, lo crea.
  - 'a' : Append (agregar). Añade texto al final del archivo sin borrar lo que ya tenía.
"""

# Escribir un archivo de texto

with open("MT8-2026 SMVB/Archivos/monitoreo-atm.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Inicio de monitoreo ATM - 2026-07-28\n")
    archivo.write("ATM-101: Efectivo bajo (50,000 colones)\n")
    archivo.write("ATM-102: Operación normal\n")
    archivo.write("Última línea\n")

# Leer el archivo línea por línea
with open("MT8-2026 SMVB\\Archivos\\monitoreo-atm.txt", "r", encoding="utf-8") as archivo:
    print("Contenido del log/archivo ")
    for linea in archivo:  # Itera sobre cada línea del archivo
        print(f"> {linea.strip()}")  # .strip() elimina saltos de línea

# Agregar datos al final
with open("MT8-2026 SMVB/Archivos/monitoreo-atm.txt", "a", encoding="utf-8") as archivo:
    archivo.write("ATM-103: Fuera de servicio") 


# ruta absoluta: D:\CENFOTEC\SOFT-645 Fundamentos de Python\MT8-2026 SMVB\Archivos
# ruta relativa: MT8-2026 SMVB\Archivos