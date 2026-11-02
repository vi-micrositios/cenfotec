age = int(input("Ingrese su edad: "))

"""
Bebé: 0 - 1
Infante: 1 - 12
Adolescente: 12 - 18 
"""

if age >= 0 and age < 1:
    print("Es un bebé") 
elif age >= 1 and age < 12:   
    acompanante = input("¿Tiene acompañante? (si/no): ")
    if acompanante == "si":
        print("Es un infante con acompañante, puede participar")
    else:
        print("Es un infante, necesita acompañante")
elif age >= 12 and age < 18: 
    permiso = input("¿Tiene permiso para participar? (si/no): ")
    if permiso == "si":
        print("Es adolescente, puede participar")
    else:
        print("Es adolescente, no puede participar")
else:
    print("Error: Edad no permitida")


# Ejercicio: Si la persona es:
    # Infante y tiene acompñante, mostrar "Es un infante con acompañante, puede participar"  
    # Adolescente y trae el permiso de participar, mostrar "Es adolescente, puede participar" 