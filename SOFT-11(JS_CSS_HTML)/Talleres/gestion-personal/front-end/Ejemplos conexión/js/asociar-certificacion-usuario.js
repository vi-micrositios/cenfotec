const listaUsuarios = document.getElementById("sltUsuario");
const listaCertificaciones = document.getElementById("sltCertificacion");
const botonAsociar = document.getElementById("btnAsociar"); 

async function cargarEmpleados() {
    try {
        const respuesta = await fetch("http://localhost:3000/empleados"); // No se indica el tipo de método (GET) porque fetch() usa GET por defecto
        const empleados = await respuesta.json();

        listaUsuarios.innerHTML = ""; //Instrucción que limpia el select antes de cargar los empleados
        
        empleados.forEach(empleado => {
            const nuevaOpcion = document.createElement("option"); // Crear dinámicamente cada opción del select
            nuevaOpcion.value = empleado.correo; // Guardar el dato de la cédula del usuario
            nuevaOpcion.textContent = empleado.nombre; // Mostrar el nombre del usuario    
            listaUsuarios.appendChild(nuevaOpcion);  

        });
    } catch (error) {
        console.log(error);
    }
}

async function cargarCertificaciones() {
    try {
        const respuesta = await fetch("http://localhost:3000/certificaciones"); // No se indica el tipo de método (GET) porque fetch() usa GET por defecto
        const certificaciones = await respuesta.json();

        listaCertificaciones.innerHTML = ""; //Instrucción que limpia el select antes de cargar los empleados
        
        certificaciones.forEach(certificacion => {
            const nuevaOpcion = document.createElement("option"); // Crear dinámicamente cada opción del select
            nuevaOpcion.value = certificacion._id; // Guardar el dato de la cédula del usuario
            nuevaOpcion.textContent = certificacion.nombre; // Mostrar el nombre del usuario    
            listaCertificaciones.appendChild(nuevaOpcion);  

        });
    } catch (error) {
        console.log(error);
    }
}

async function asociarCertificacion() {
    const correo = listaUsuarios.value;

    // El correo va en la RUTA (identifica al empleado)
    // y el id de la certificación va en el BODY (el dato que se agrega)
    const datosCertificacion = {
        certificacionId: listaCertificaciones.value
    };

    try {
        const respuesta = await fetch(`http://localhost:3000/empleados/${encodeURIComponent(correo)}/certificaciones`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datosCertificacion)
        });
        const datos = await respuesta.json();

        if (!respuesta.ok) {
            Swal.fire({
                icon: "error",
                title: "No se pudo asociar la certificación",
                confirmButtonColor: "#48589b"
            });
            return; 
        }
        console.log(datos)
        Swal.fire({
            icon: "success",
            title: "Certificación asociada",
            text: `A ${datos.nombre} se le asoció la certificación correctamente.`,
            confirmButtonColor: "#48589b"
        });
    } catch (error) {
        console.log(error);
    }
}

botonAsociar.addEventListener("click", asociarCertificacion);

cargarEmpleados();
cargarCertificaciones();