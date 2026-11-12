"""
SOFT-670 Python para el Análisis de Datos
Ejercicio: redes sociales y bienestar de 2500 adolescentes (uso de archivos con NumPy)
SOLUCIÓN PARA EL DOCENTE
"""
from pathlib import Path
import numpy as np

# Paso 1. Cargar el archivo
DATOS = Path(__file__).parent / "datos"
archivo = DATOS / "Teen_Mental_Health_Dataset.csv"
print("¿Existe el archivo?", archivo.exists())

datos = np.genfromtxt(archivo, delimiter=",", skip_header=1, usecols=(0, 2, 4, 5, 6, 7, 9, 10))
print("Forma (filas, columnas):", datos.shape)

# Paso 2. Revisar los valores faltantes
print("Faltantes por columna:", np.isnan(datos).sum(axis=0))
completas = datos[~np.isnan(datos).any(axis=1)]
print("Filas completas:", len(completas))

# Paso 3. Resumir cada columna
columnas = ["Edad", "Redes (h)", "Sueño (h)", "Pantalla noche (h)",
            "Rendimiento", "Actividad (h)", "Estrés", "Ansiedad"]
minimos = completas.min(axis=0)
maximos = completas.max(axis=0)
promedios = completas.mean(axis=0)
print("\nResumen de las columnas")
for i in range(len(columnas)):
    print(f"{columnas[i]:19} mínimo {minimos[i]:6.2f}   máximo {maximos[i]:6.2f}   promedio {promedios[i]:6.2f}")

# Paso 4. Comparar grupos con filtros
redes = completas[:, 1]
sueno = completas[:, 2]
rendimiento = completas[:, 4]
estres = completas[:, 6]

alto = redes > 6
bajo = redes < 2
print("\nComparación                Más de 6 h   Menos de 2 h")
print(f"Adolescentes               {alto.sum():10}   {bajo.sum():12}")
print(f"Sueño promedio (h)         {sueno[alto].mean():10.2f}   {sueno[bajo].mean():12.2f}")
print(f"Rendimiento promedio       {rendimiento[alto].mean():10.2f}   {rendimiento[bajo].mean():12.2f}")
print(f"Estrés promedio            {estres[alto].mean():10.2f}   {estres[bajo].mean():12.2f}")

# Paso 5. Percentiles y correlaciones
print("\nPercentiles 25, 50 y 75 de las horas en redes:", np.percentile(redes, [25, 50, 75]))
print("Correlación redes - sueño:", round(np.corrcoef(redes, sueno)[0, 1], 3))
print("Correlación redes - rendimiento:", round(np.corrcoef(redes, rendimiento)[0, 1], 3))
print("Correlación redes - estrés:", round(np.corrcoef(redes, estres)[0, 1], 3))
# La relación más fuerte es con el estrés (0,91, positiva): a más horas en redes, más estrés.
# Con el rendimiento (-0,863) y el sueño (-0,769) la relación es negativa.

# Paso 6. Guardar el resultado
np.savetxt(DATOS / "adolescentes_alto_uso.csv", completas[alto], delimiter=",", fmt="%.2f",
           header="edad,redes,sueno,pantalla_noche,rendimiento,actividad,estres,ansiedad", comments="")
print("\nFilas guardadas en adolescentes_alto_uso.csv:", alto.sum())

# Reto opcional. Uso de redes por edad
print("\nEdad   Adolescentes   Promedio de horas en redes")
for edad in np.unique(completas[:, 0]):
    grupo = completas[:, 0] == edad
    print(f"{int(edad):4}   {grupo.sum():12}   {redes[grupo].mean():10.2f}")

# Paso 7. Respuesta
# Quienes pasan más horas en redes sociales duermen menos (5,21 h frente a 7,41 h),
# tienen peor rendimiento académico y más estrés (9,13 frente a 1,63). El uso casi no
# cambia con la edad. Es una correlación: no prueba que las redes causen esos efectos.
