"""
Ejemplo de comentario

Más sobre el comentario
"""

# Comentario de una linea 

# Datos de salida: Dato que devuelve el programa
print("Bienvedido(a) al programa")
print("Bienvedido(a) al programa", "datos.py, realizado el", 13, "de octubre")

print(15)
print(15.7)

# Datos de entrada: Dato que ingresa al programa
input("Ingrese su número favorito: ")  
input("Ingrese su color favorito: ")  

""" 
Variable: Es un nombre que hace referencia a un dato guardado en la memoria. Ese valor puede cambiar durante la ejecución.

Recomendaciones par nombrar: 
    - Debe comenzar con una letra (a-z, A-Z) o un guion bajo (_), pero no con un número.
    - Puede contener letras, números y guion bajo (_), pero no espacios ni caracteres especiales.
    - No puede usar palabras clave de Python (if, while, for, etc.).
    - Debe ser descriptiva y clara, evitando nombres genéricos como x, y, z.
    - No debe ser demasiado larga ni redundante.
    - Debe seguir la convención snake_case, camelCase o PascalCase.
"""
nombreVariable = "dato que almacena la variable"

nombre_curso = "Fundamentos de Python"
escuela = "SOFT"
codigo_curso = 645
variable_nuemero_decimal = 645.02

print(nombre_curso)
print(escuela, "-", codigo_curso, nombre_curso)

color_favorito = input("Ingrese su color favorito: ")  
print("El color favorito del usuario es:", color_favorito)

# Conversión de tipos de datos
numero_favorito = int(input("Ingrese su número entero favorito: "))  
numero_decimal_favorito = float(input("Ingrese su número decimal favorito: "))  

# Tipo de dato
print("El tipo de dato de", numero_favorito, "es:", type(numero_favorito))
print("El tipo de dato de", numero_decimal_favorito, "es", type(numero_decimal_favorito))


"""
Constante: Una constante es un valor que no debe cambiar durante la ejecución.

Recomendación: 
    - Nombre en mayúsculas y separarla con guiones bajos (_) si es necesario
"""
PI = 3.14
GRAVEDAD = 9.81
CANTIDAD_MAXIMA_PARTICIPANTES = 100