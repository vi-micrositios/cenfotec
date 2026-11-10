// =====================================================================
// Registrar empleado (empleado-registrar.html)
// Endpoint: POST /empleados
// =====================================================================

// ---------- Elementos del HTML ----------
const formulario = document.getElementById("frmEmpleado"); //Recomendación: Copiar y pegar los id, para evitar nombres diferentes
const inputNombre = document.getElementById("txtNombre");
const inputCorreo = document.getElementById("txtCorreo");
const inputContrasenna = document.getElementById("txtContrasenna");
const selectProvincia = document.querySelector("#sltProvincia"); // querySelector permite seleccionar elementos del DOM usando selectores CSS.
const inputCanton = document.querySelector("#txtCanton");
const inputDistrito = document.querySelector("#txtDistrito");
const inputUbicacion = document.querySelector("#txtUbicacion");

// Todos los campos que tienen el atributo required dentro de este formulario
const camposRequeridos = document.querySelectorAll("#frmEmpleado [required]");


/* ---------------------------------------------------------------------
 Enviar los datos al servidor

POST http://localhost:3000/empleados
{
  "nombre": "Bryan",
  "correo": "bryan@empresax.net",
  "contrasenna": "Cenfo2026!",
  "direccion": { 
    "provincia": "Cartago", 
    "canton": "Central", 
    "distrito": "Oriental" 
    }
}
---------------------------------------------------------------------*/

async function registrarEmpleado() {
    // El objeto debe tener los mismos nombres que CrearEmpleadoDto
    const datosEmpleado = {
        nombre: inputNombre.value.trim(),
        correo: inputCorreo.value.trim(),
        contrasenna: inputContrasenna.value,
        direccion: {
            provincia: selectProvincia.value,
            canton: inputCanton.value.trim(),
            distrito: inputDistrito.value.trim()
        }
    };

    // Las otras señas son opcionales: solo se envían si se escribieron
    if (inputUbicacion.value.trim() !== "") {
        datosEmpleado.direccion.ubicacion = inputUbicacion.value.trim();
    }

    try {
        const respuesta = await fetch("http://localhost:3000/empleados", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"   // avisa que el body es JSON
            },
            body: JSON.stringify(datosEmpleado)       // objeto → texto JSON
        });
        const datos = await respuesta.json();

        if (!respuesta.ok) {
            // Por ejemplo: 409 "Ya existe un empleado con ese correo."
            Swal.fire({
                icon: "error",
                title: "No se pudo completar la acción",
                text: `Error al registrar empleado: ${datos.message}`,
                confirmButtonColor: "#48589b"
            });
        }else{
            Swal.fire({
                icon: "success",
                title: "Empleado registrado",
                text: `${datos.nombre} se registró correctamente.`,
                confirmButtonColor: "#48589b"
            });
            formulario.reset();
        }

        
    } catch (error) {
        console.log(error);
    }
}

// ---------- Eventos ----------
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();   // evita que la página se recargue

    // ToDo: Validar los datos antes de hacer el envío al servidor
    registrarEmpleado();
    
});