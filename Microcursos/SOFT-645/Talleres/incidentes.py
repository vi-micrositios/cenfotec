
incidentes = []

severidades_validas = ["baja", "media", "alta"]
estados_validos = ["abierto", "cerrado"]

opcion = ""

while opcion != "6":

    print("\n===== MONITOREO DE INCIDENTES =====")
    print("1. Registrar incidente")
    print("2. Consultar incidentes")
    print("3. Modificar incidente")
    print("4. Eliminar incidente")
    print("5. Buscar por severidad")
    print("6. Salir")

    opcion = input("Seleccione una opción: ")

    # Registrar incidente
    if opcion == "1":

        print("\n--- Registrar incidente ---")

        id_incidente = input("ID del incidente: ")

        existe = False

        for incidente in incidentes:
            if incidente["id"] == id_incidente:
                existe = True

        if existe:
            print("Error: el ID ya está registrado.")

        else:
            departamento = input("Departamento: ")
            tipo = input("Tipo de incidente: ")

            severidad = input(
                "Severidad (baja, media, alta): "
            ).lower()

            estado = input(
                "Estado (abierto, cerrado): "
            ).lower()

            if severidad not in severidades_validas:
                print("Error: severidad inválida.")

            elif estado not in estados_validos:
                print("Error: estado inválido.")

            else:
                incidente = {
                    "id": id_incidente,
                    "departamento": departamento,
                    "tipo": tipo,
                    "severidad": severidad,
                    "estado": estado
                }

                incidentes.append(incidente)

                print("Incidente registrado correctamente.")

    # Consultar incidentes
    elif opcion == "2":

        print("\n--- Consultar incidentes ---")

        if len(incidentes) == 0:
            print("No hay incidentes registrados.")

        else:
            for incidente in incidentes:
                print("-------------------------")
                print("ID:", incidente["id"])
                print("Departamento:", incidente["departamento"])
                print("Tipo:", incidente["tipo"])
                print("Severidad:", incidente["severidad"])
                print("Estado:", incidente["estado"])

    # Modificar incidente
    elif opcion == "3":

        print("\n--- Modificar incidente ---")

        id_incidente = input("Ingrese el ID del incidente: ")

        encontrado = False

        for incidente in incidentes:

            if incidente["id"] == id_incidente:

                encontrado = True

                print("Deje vacío un campo para mantener su valor.")

                departamento = input(
                    "Departamento (" +
                    incidente["departamento"] + "): "
                )

                tipo = input(
                    "Tipo (" + incidente["tipo"] + "): "
                )

                severidad = input(
                    "Severidad (" +
                    incidente["severidad"] + "): "
                ).lower()

                estado = input(
                    "Estado (" + incidente["estado"] + "): "
                ).lower()

                if severidad != "" and severidad not in severidades_validas:
                    print("Error: severidad inválida.")

                elif estado != "" and estado not in estados_validos:
                    print("Error: estado inválido.")

                else:
                    if departamento != "":
                        incidente["departamento"] = departamento

                    if tipo != "":
                        incidente["tipo"] = tipo

                    if severidad != "":
                        incidente["severidad"] = severidad

                    if estado != "":
                        incidente["estado"] = estado

                    print("Incidente modificado correctamente.")

                break

        if not encontrado:
            print("No se encontró el incidente.")

    # Eliminar incidente
    elif opcion == "4":

        print("\n--- Eliminar incidente ---")

        id_incidente = input("Ingrese el ID del incidente: ")

        encontrado = False

        for incidente in incidentes:

            if incidente["id"] == id_incidente:
                incidentes.remove(incidente)
                encontrado = True
                print("Incidente eliminado correctamente.")
                break

        if not encontrado:
            print("No se encontró el incidente.")

    # Buscar por severidad
    elif opcion == "5":

        print("\n--- Buscar por severidad ---")

        severidad = input(
            "Ingrese la severidad (baja, media, alta): "
        ).lower()

        if severidad not in severidades_validas:
            print("Error: severidad inválida.")

        else:
            encontrados = 0

            for incidente in incidentes:

                if incidente["severidad"] == severidad:

                    print("-------------------------")
                    print("ID:", incidente["id"])
                    print("Departamento:", incidente["departamento"])
                    print("Tipo:", incidente["tipo"])
                    print("Severidad:", incidente["severidad"])
                    print("Estado:", incidente["estado"])

                    encontrados = encontrados + 1

            if encontrados == 0:
                print("No hay incidentes con esa severidad.")

    # Salir del sistema
    elif opcion == "6":
        print("Saliendo del sistema...")

    else:
        print("Opción inválida. Intente nuevamente.")
