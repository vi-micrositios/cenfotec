age = int(input("Ingrese su edad: "))

# ¿Qué ocurre si el usuario del programa ingresa una letra y no un número? 

# Una excepción es un error que ocurre durante la ejecución de un programa. Si no se maneja, el programa se detiene y Python muestra un mensaje de error

# Las validaciones con if no evitan este error, porque ocurre en la conversión, antes de llegar a cualquier condición

if age < 0: 
    print("Error: La edad debe ser un número positivo")
elif age < 1:                     
    print("Es un bebé")
elif age < 12:                  
    print("Es un infante")
elif age < 18:                  
    print("Es un adolescente")
elif age < 65:                  
    print("Es un adulto")
else:
    print("Es un adulto mayor")

