# nombre del diccionario = { clave1: valor1, clave2: valor 2}

"""

Datos personales (clave)    |   dato
nombre                      |   Mateo                                   
celular                     |   84848484    
edad                        |   42
correos                     |   mateo@gmail.com, mmateo@gmail.net
dirección                   |   Alajuela
"""

datosPersonales = {"Nombre": "Mateo", "Celular": 84848484, "Edad": 45, "Correos": ["mateo@gmail.com", "mmateo@gmail.net"], "Dirección":"Puntarenas"}

print("Datos personales:", datosPersonales)

# Mostrar los valores del diccionario
for valor in datosPersonales.values():
    print(valor)

# Agregar clave: valor
datosPersonales.setdefault("Cédula", 201010101)

# Mostrar cada elemento del diccionario
for clave, valor in datosPersonales.items():
    print(clave, ":", valor)

"""
Libros: 
Nombre del libro 1 : { 
    autor: 
    año: 
    genero: 
}, 
Nombre del libro 2 : { 
    autor: 
    año: 
    genero: 
}
"""

libros = {
    "El principito": {"autor": "Antoine de Saint Exusperi", "anio": "1943","genero": "Infantil"},
    "Don Quijote de la Mancha": {"autor": "Miguel de Cervantes", "anio": "1900","genero": "Novela"}
}

print("----------------------------------- Libros ----------------------------------------")
print("Lista de libros") # Mostrar las claves
for libro in libros:
    print("-", libro)

print("Información de cada libro")
for libro, datosLibro in libros.items():
    print("-", libro)
    print("-- Autor:", datosLibro["autor"])
    print("-- Año:", datosLibro["anio"])
    print("-- Género:", datosLibro["genero"])

# in en diccionarios permite buscar si existe la clave en el diccionario
nombreLibroBuscar = "El gato negro"
if nombreLibroBuscar in libros:
    print("Libro encontrado:", nombreLibroBuscar)
    datosLibro = libros[nombreLibroBuscar]
    print("- Autor:", datosLibro["autor"])
    print("- Año:", datosLibro["anio"])
    print("- Género:", datosLibro["genero"])
else:
    print("Libro no encontrado")

# Eliminar un libro (una clave del diccionario libros)
nombreLibroEliminar = "El principito"
if nombreLibroEliminar in libros:
    print("Libro eliminado:", nombreLibroEliminar)
    del libros[nombreLibroEliminar]
    print("Diccionario actualizado:", libros)
else:
    print("Libro a eliminar no encontrado")

# Agregar un nuevo si no existe
nuevoLibro = "Plantas medicinales"
if nuevoLibro in libros:
    print("El libro ya existe")
else: 
    libros[nuevoLibro] = {
        "autor": "UNED", 
        "anio": "2010",
        "genero": "Botánica"
    }
    print("Libro agregado", libros)

libros.setdefault("Botánica", {"autor": "UNED", "anio": "2022","genero": "Botánica"})
print("Diccionario de libros:", libros)


"""
Ejercicio agregar un nuevo libro al diccionario y mostrar la información de cada libro indicando: 
- Nombre del libro 
- Autor
- Año
"""
libros.setdefault("Plantae", {"autor": "Semillas Plantae", "anio": "2025","genero": "Botánica"})
print("------------ Solución del ejercicio: información de los libros ------------")
for libro, datosLibro in libros.items():
    print("\n-", libro)
    print("-- Autor:", datosLibro["autor"])
    print("-- Año:", datosLibro["anio"])

