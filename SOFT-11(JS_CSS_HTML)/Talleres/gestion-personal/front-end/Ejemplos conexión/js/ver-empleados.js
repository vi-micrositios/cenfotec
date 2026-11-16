// =====================================================================
// Obtener empleados 
// Endpoint: GET /empleados
// =====================================================================

const tablaEmpleados = document.getElementById("tblUsuarios").querySelector("tbody"); 

async function cargarTabla() {
    try {
        const respuesta = await fetch("http://localhost:3000/empleados"); // No se indica el tipo de método (GET) porque fetch() usa GET por defecto
        const empleados = await respuesta.json();

        tablaEmpleados.innerHTML = ""; // Instrucción que limpia la tabla

        if (empleados.length === 0) {
            tablaEmpleados.innerHTML = "No hay empleados registrados.";
            return; // Sin empleados termina la ejecución de la función 
        }

        empleados.forEach(empleado => {
            // Certificaciones y proyectos se muestran como etiquetas
            let certificaciones = "";
            empleado.certificaciones.forEach(certificacion => {
                certificaciones += `<span class="etiqueta">${certificacion.nombre}</span> `;
            });

            let proyectos = "";
            empleado.proyectos.forEach(proyecto => {
                proyectos += `<span class="etiqueta">${proyecto.nombre}</span> `;
            });

            const fila = document.createElement("tr"); //  Crear en memoria un nuevo elemento HTML <tr> (una fila de tabla). Con innerHTML vamos a crear todo lo que estará dentro de esa etiqueta 

            //Comilla francesa (``), permite utilizar variables o expresiones en un string. Por ejemplo dentro de de la fila crear la celda (td) con lo datos de usuario traidos de la BD (interpolación de variables: Insertar variables o expresiones directamente dentro de una cadena utilizando la sintaxis ${})
            fila.innerHTML = `
                <td> <strong>${empleado.nombre}</strong> </td>
                <td> ${empleado.correo} </td>
                <td>${certificaciones || "—"}</td>
                <td>${proyectos || "—"}</td>
            `;
            tablaEmpleados.appendChild(fila);
        });
    } catch (error) {
        console.log(error);
        tablaEmpleados.innerHTML = "No se pudieron cargar los empleados.";
    }
}

cargarTabla();
