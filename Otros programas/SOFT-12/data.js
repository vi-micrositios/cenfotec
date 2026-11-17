const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-12 <br> Programación Web Avanzada',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-12/imgs/logo.png', // Cambiar por imagen real
        description: 'Desarrollo de aplicaciones web sofisticadas con marcos de trabajo de CSS y JavaScript, programación del servidor y de API, tecnologías de acceso a datos y consumo de API de terceros.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        {
            id: 'modulo_001',
            label: 'Repaso de HTML, CSS y JavaScript',
            subtemas: [
                {
                    id: 'm001-t001',
                    label: 'Diseño y desarrollo de páginas web adaptables con HTML y CSS',
                    steps: [
                        {
                            title: 'Principios del diseño adaptable',
                            content: `<ul>
    <li><strong>Mobile first</strong>: los estilos base son para teléfono; las consultas de medios amplían para pantallas mayores.</li>
    <li><strong>Rejillas fluidas</strong>: anchos en <code>%</code>, <code>fr</code> o <code>minmax()</code> en lugar de píxeles fijos.</li>
    <li><strong>Imágenes flexibles</strong>: <code>max-width: 100%</code> y versiones según la resolución.</li>
    <li><strong>Tipografía fluida</strong>: tamaños que se ajustan con <code>clamp()</code>.</li>
</ul>
<pre class="codigo">
&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;

h1 { font-size: clamp(1.5rem, 4vw, 2.75rem); }
img { max-width: 100%; height: auto; }
</pre>`,
                            nextButton: 'Siguiente: Estructura adaptable con Grid'
                        },
                        {
                            title: 'Estructura adaptable con Grid',
                            content: `<pre class="codigo">
.pagina {
    display: grid;
    grid-template-areas:
        "encabezado"
        "principal"
        "lateral"
        "pie";
    gap: 1rem;
}
@media (min-width: 992px) {
    .pagina {
        grid-template-columns: 3fr 1fr;
        grid-template-areas:
            "encabezado encabezado"
            "principal  lateral"
            "pie        pie";
    }
}
header { grid-area: encabezado; }
main   { grid-area: principal; }
aside  { grid-area: lateral; }
footer { grid-area: pie; }
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las <strong>consultas de contenedor</strong> (<code>@container</code>) permiten que un componente se adapte al ancho de su contenedor y no al de la ventana.</p>`,
                            nextButton: 'Siguiente: Imágenes adaptables'
                        },
                        {
                            title: 'Imágenes adaptables',
                            content: `<pre class="codigo">
&lt;picture&gt;
    &lt;source srcset="imgs/producto-800.webp" media="(min-width: 768px)" type="image/webp"&gt;
    &lt;img src="imgs/producto-400.jpg" alt="Audífonos inalámbricos" loading="lazy" width="400" height="400"&gt;
&lt;/picture&gt;
</pre>
<ul>
    <li><code>loading="lazy"</code> retrasa la descarga de imágenes fuera de pantalla.</li>
    <li>Declarar <code>width</code> y <code>height</code> evita saltos de diseño al cargar.</li>
    <li>El formato WebP o AVIF reduce el peso frente a JPG o PNG.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t002',
                    label: 'Diseño de interfaces interactivas con CSS y JavaScript',
                    steps: [
                        {
                            title: 'Estados visuales con clases',
                            content: `<p>La forma más mantenible de crear interacción es que JavaScript <strong>cambie clases</strong> y CSS defina la apariencia de cada estado.</p>
<pre class="codigo">
.menu { transform: translateX(-100%); transition: transform .3s; }
.menu.abierto { transform: translateX(0); }
</pre>
<pre class="codigo">
const boton = document.querySelector("#btnMenu");
const menu = document.querySelector(".menu");

boton.addEventListener("click", () =&gt; {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto);
});
</pre>`,
                            nextButton: 'Siguiente: Componentes interactivos accesibles'
                        },
                        {
                            title: 'Componentes interactivos accesibles',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Atributos ARIA clave</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Menú desplegable</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>aria-expanded</code>, <code>aria-controls</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Pestañas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>role="tablist"</code>, <code>role="tab"</code>, <code>aria-selected</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ventana modal</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;dialog&gt;</code> o <code>role="dialog"</code>, <code>aria-modal="true"</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Mensajes dinámicos</strong></td><td style="padding:13px 12px;"><code>aria-live="polite"</code></td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
&lt;dialog id="carrito"&gt;
    &lt;h2&gt;Su carrito&lt;/h2&gt;
    &lt;button id="cerrarCarrito"&gt;Cerrar&lt;/button&gt;
&lt;/dialog&gt;
&lt;script&gt;
    document.querySelector("#verCarrito").addEventListener("click", () =&gt; carrito.showModal());
    document.querySelector("#cerrarCarrito").addEventListener("click", () =&gt; carrito.close());
&lt;/script&gt;
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La etiqueta nativa <code>&lt;dialog&gt;</code> gestiona el foco y la tecla Escape automáticamente.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t003',
                    label: 'Validación de formularios, campos dinámicos y envío de datos asincrónico',
                    steps: [
                        {
                            title: 'API de validación de restricciones',
                            content: `<pre class="codigo">
const form = document.querySelector("#formRegistro");
const correo = document.querySelector("#correo");

correo.addEventListener("input", () =&gt; {
    if (correo.validity.typeMismatch) {
        correo.setCustomValidity("Ingrese un correo con el formato nombre@dominio.com");
    } else {
        correo.setCustomValidity("");
    }
});

form.addEventListener("submit", (e) =&gt; {
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
    }
});
</pre>`,
                            nextButton: 'Siguiente: Campos dinámicos'
                        },
                        {
                            title: 'Campos dinámicos',
                            content: `<p>Algunos formularios agregan o muestran campos según lo que elige el usuario, por ejemplo varias direcciones de envío.</p>
<pre class="codigo">
&lt;template id="plantillaDireccion"&gt;
    &lt;fieldset class="direccion"&gt;
        &lt;label&gt;Dirección &lt;input name="direccion[]" required&gt;&lt;/label&gt;
        &lt;button type="button" class="quitar"&gt;Quitar&lt;/button&gt;
    &lt;/fieldset&gt;
&lt;/template&gt;
</pre>
<pre class="codigo">
const contenedor = document.querySelector("#direcciones");
const plantilla = document.querySelector("#plantillaDireccion");

document.querySelector("#agregarDireccion").addEventListener("click", () =&gt; {
    contenedor.appendChild(plantilla.content.cloneNode(true));
});

contenedor.addEventListener("click", (e) =&gt; {
    if (e.target.matches(".quitar")) e.target.closest(".direccion").remove();
});
</pre>`,
                            nextButton: 'Siguiente: Envío asincrónico'
                        },
                        {
                            title: 'Envío asincrónico',
                            content: `<pre class="codigo">
form.addEventListener("submit", async (e) =&gt; {
    e.preventDefault();
    const boton = form.querySelector("button[type=submit]");
    boton.disabled = true;

    try {
        const datos = Object.fromEntries(new FormData(form));
        const resp = await fetch("/api/usuarios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });
        if (!resp.ok) throw new Error((await resp.json()).mensaje);
        mostrarMensaje("Registro exitoso", "exito");
        form.reset();
    } catch (error) {
        mostrarMensaje(error.message, "error");
    } finally {
        boton.disabled = false;
    }
});
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Deshabilitar el botón mientras se envía evita solicitudes duplicadas por doble clic.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-t004',
                    label: 'Optimización y depuración del código',
                    steps: [
                        {
                            title: 'Depuración con las herramientas del navegador',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Panel</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Elementos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inspeccionar HTML y CSS, probar cambios en vivo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Consola</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ver errores y mensajes; ejecutar código.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fuentes (Sources)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puntos de interrupción y ejecución paso a paso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Red</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solicitudes, tiempos, códigos de estado y tamaños.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Rendimiento y Lighthouse</strong></td><td style="padding:13px 12px;">Auditoría de rendimiento, accesibilidad y buenas prácticas.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
console.table(productos);        // muestra un arreglo como tabla
console.time("filtrado");
const caros = productos.filter(p =&gt; p.precio &gt; 50000);
console.timeEnd("filtrado");
debugger;                        // detiene la ejecución si las herramientas están abiertas
</pre>`,
                            nextButton: 'Siguiente: Optimización'
                        },
                        {
                            title: 'Optimización',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Beneficio</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Minificar CSS y JS</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Archivos más pequeños.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cargar scripts con <code>defer</code></strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No bloquea el dibujo de la página.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comprimir imágenes y usar <code>loading="lazy"</code></strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menos datos descargados.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Delegación de eventos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menos manejadores en memoria.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Debounce en búsquedas</strong></td><td style="padding:13px 12px;">Menos solicitudes mientras se escribe.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
function debounce(fn, espera = 300) {
    let temporizador;
    return (...args) =&gt; {
        clearTimeout(temporizador);
        temporizador = setTimeout(() =&gt; fn(...args), espera);
    };
}
buscador.addEventListener("input", debounce(e =&gt; buscar(e.target.value)));
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Las métricas Core Web Vitals (LCP, INP, CLS) miden la experiencia real de carga, interacción y estabilidad visual.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_002',
            label: 'Bootstrap y Sass',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Introducción a Bootstrap',
                    steps: [
                        {
                            title: '¿Qué es Bootstrap?',
                            content: `<p><strong>Bootstrap</strong> es el marco de trabajo de CSS más utilizado. Ofrece un sistema de rejilla adaptable, utilidades y componentes (barras de navegación, tarjetas, modales, formularios) con JavaScript incluido.</p>
<pre class="codigo">
&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
</pre>
<p><strong>O con npm:</strong></p>
<pre class="codigo">
npm install bootstrap
</pre>`,
                            nextButton: 'Siguiente: Puntos de quiebre'
                        },
                        {
                            title: 'Puntos de quiebre',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Prefijo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ancho mínimo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dispositivo típico</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>(ninguno)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teléfono</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>sm</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">576 px</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Teléfono horizontal</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>md</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">768 px</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tableta</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>lg</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">992 px</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Computadora portátil</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>xl</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1200 px</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escritorio</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>xxl</code></td><td style="padding:13px 12px;">1400 px</td><td style="padding:13px 12px;">Pantalla grande</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Bootstrap es <strong>mobile first</strong>: <code>col-md-6</code> significa “la mitad del ancho desde tableta en adelante”.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Diseños de programación con Bootstrap',
                    steps: [
                        {
                            title: 'Sistema de rejilla',
                            content: `<pre class="codigo">
&lt;div class="container"&gt;
    &lt;div class="row g-4"&gt;
        &lt;div class="col-12 col-md-6 col-lg-3"&gt;Producto 1&lt;/div&gt;
        &lt;div class="col-12 col-md-6 col-lg-3"&gt;Producto 2&lt;/div&gt;
        &lt;div class="col-12 col-md-6 col-lg-3"&gt;Producto 3&lt;/div&gt;
        &lt;div class="col-12 col-md-6 col-lg-3"&gt;Producto 4&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
<ul>
    <li><code>container</code>: ancho máximo centrado; <code>container-fluid</code>: ancho completo.</li>
    <li><code>row</code>: fila flexible; <code>g-4</code>: espacio entre columnas.</li>
    <li>Cada fila tiene 12 columnas.</li>
</ul>`,
                            nextButton: 'Siguiente: Utilidades'
                        },
                        {
                            title: 'Utilidades',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Categoría</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Espaciado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>m-3</code>, <code>px-2</code>, <code>mt-auto</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Flexbox</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>d-flex</code>, <code>justify-content-between</code>, <code>align-items-center</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Visibilidad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>d-none d-md-block</code> (oculto en teléfono)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Texto</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>text-center</code>, <code>fw-bold</code>, <code>text-muted</code></td></tr>
<tr><td style="padding:13px 12px;"><strong>Colores</strong></td><td style="padding:13px 12px;"><code>bg-primary</code>, <code>text-danger</code>, <code>border-success</code></td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Componentes frecuentes'
                        },
                        {
                            title: 'Componentes frecuentes',
                            content: `<pre class="codigo">
&lt;nav class="navbar navbar-expand-lg bg-body-tertiary"&gt;
    &lt;div class="container"&gt;
        &lt;a class="navbar-brand" href="#"&gt;TiendaTica&lt;/a&gt;
        &lt;button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu"
                aria-controls="menu" aria-expanded="false" aria-label="Abrir menú"&gt;
            &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
        &lt;/button&gt;
        &lt;div class="collapse navbar-collapse" id="menu"&gt;
            &lt;ul class="navbar-nav ms-auto"&gt;
                &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;Productos&lt;/a&gt;&lt;/li&gt;
                &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;Carrito&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/nav&gt;
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Personalización de estilos en Bootstrap',
                    steps: [
                        {
                            title: 'Variables CSS de Bootstrap',
                            content: `<p>Bootstrap 5 expone variables CSS que se pueden sobrescribir sin modificar sus archivos.</p>
<pre class="codigo">
:root {
    --bs-primary: #164a98;
    --bs-primary-rgb: 22, 74, 152;
    --bs-body-font-family: 'Poppins', sans-serif;
    --bs-border-radius: .75rem;
}
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
Nunca modifique los archivos de Bootstrap dentro de <code>node_modules</code>: los cambios se pierden al actualizar.</p>`,
                            nextButton: 'Siguiente: Hoja de estilos propia'
                        },
                        {
                            title: 'Hoja de estilos propia',
                            content: `<pre class="codigo">
&lt;link rel="stylesheet" href="bootstrap.min.css"&gt;
&lt;link rel="stylesheet" href="css/tema.css"&gt;   &lt;!-- después, para sobrescribir --&gt;
</pre>
<pre class="codigo">
/* css/tema.css */
.btn-primary {
    --bs-btn-bg: #164a98;
    --bs-btn-hover-bg: #2b93d1;
}
.card { box-shadow: 0 6px 20px rgba(0,0,0,.08); }
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Para cambios profundos (paleta completa, puntos de quiebre, eliminar componentes no usados) se recomienda compilar Bootstrap desde Sass.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t004',
                    label: 'Desarrollo de componentes personalizados con Bootstrap',
                    steps: [
                        {
                            title: 'Componente reutilizable',
                            content: `<p>Un componente personalizado combina clases de Bootstrap con estilos propios bajo un nombre de clase único.</p>
<pre class="codigo">
&lt;article class="card producto h-100"&gt;
    &lt;span class="badge bg-danger producto__oferta"&gt;-20%&lt;/span&gt;
    &lt;img src="imgs/audifonos.webp" class="card-img-top" alt="Audífonos inalámbricos"&gt;
    &lt;div class="card-body d-flex flex-column"&gt;
        &lt;h3 class="h5 card-title"&gt;Audífonos inalámbricos&lt;/h3&gt;
        &lt;p class="producto__precio mt-auto"&gt;₡24 900&lt;/p&gt;
        &lt;button class="btn btn-primary w-100" data-id="17"&gt;Agregar al carrito&lt;/button&gt;
    &lt;/div&gt;
&lt;/article&gt;
</pre>
<pre class="codigo">
.producto { position: relative; transition: transform .2s; }
.producto:hover { transform: translateY(-4px); }
.producto__oferta { position: absolute; top: .75rem; left: .75rem; }
.producto__precio { font-size: 1.25rem; font-weight: 700; color: var(--bs-primary); }
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La convención <strong>BEM</strong> (bloque__elemento--modificador) evita conflictos de nombres con las clases de Bootstrap.</p>`,
                            nextButton: 'Siguiente: Componentes con JavaScript'
                        },
                        {
                            title: 'Componentes con JavaScript',
                            content: `<pre class="codigo">
// Mostrar una notificación (toast) de Bootstrap al agregar un producto
const toast = new bootstrap.Toast(document.querySelector("#toastCarrito"));

document.querySelector(".productos").addEventListener("click", (e) =&gt; {
    const boton = e.target.closest("[data-id]");
    if (!boton) return;
    agregarAlCarrito(boton.dataset.id);
    toast.show();
});
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t005',
                    label: 'Fundamentos de Hojas de Estilo Sintácticamente Asombrosas (Sass)',
                    steps: [
                        {
                            title: '¿Qué es Sass?',
                            content: `<p><strong>Sass</strong> es un preprocesador de CSS: se escribe en un lenguaje con variables, anidamiento, funciones y módulos, y se compila a CSS estándar.</p>
<pre class="codigo">
npm install -D sass
npx sass scss/estilos.scss css/estilos.css --watch
</pre>`,
                            nextButton: 'Siguiente: Variables y anidamiento'
                        },
                        {
                            title: 'Variables y anidamiento',
                            content: `<pre class="codigo">
$primario: #164a98;
$radio: .75rem;

.tarjeta {
    border-radius: $radio;
    border: 1px solid lighten($primario, 50%);

    &amp;__titulo {               // .tarjeta__titulo
        color: $primario;
    }
    &amp;:hover {                 // .tarjeta:hover
        box-shadow: 0 4px 12px rgba($primario, .2);
    }
}
</pre>
<p class="nota">
<i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
No anide más de tres niveles: genera selectores demasiado específicos y difíciles de sobrescribir.</p>`,
                            nextButton: 'Siguiente: Mixins, módulos y bucles'
                        },
                        {
                            title: 'Mixins, módulos y bucles',
                            content: `<pre class="codigo">
// _mixins.scss
@mixin desde($ancho) {
    @media (min-width: $ancho) { @content; }
}

// estilos.scss
@use 'mixins' as m;

.galeria {
    display: grid;
    grid-template-columns: 1fr;
    @include m.desde(768px) { grid-template-columns: repeat(3, 1fr); }
}

@each $nombre, $color in (exito: #4aa147, error: #d2232a) {
    .alerta-#{$nombre} { border-left: 4px solid $color; }
}
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>@use</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Importa un módulo con espacio de nombres.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>@mixin</code> / <code>@include</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bloques de estilos reutilizables con parámetros.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>@extend</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hereda los estilos de otro selector.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>@each</code>, <code>@for</code></td><td style="padding:13px 12px;">Generan reglas repetitivas.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t006',
                    label: 'Integración de Sass con Bootstrap',
                    steps: [
                        {
                            title: 'Compilar Bootstrap con variables propias',
                            content: `<pre class="codigo">
// scss/tema.scss
// 1. Variables que sobrescriben las de Bootstrap (antes de importarlo)
$primary: #164a98;
$secondary: #00928d;
$font-family-base: 'Poppins', sans-serif;
$border-radius: .75rem;
$enable-shadows: true;

// 2. Bootstrap completo
@import "bootstrap/scss/bootstrap";

// 3. Estilos propios
@import "componentes/producto";
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Bootstrap 5.3 todavía usa <code>@import</code> en su código fuente; por eso se sigue esta forma de integración.</p>`,
                            nextButton: 'Siguiente: Importar solo lo necesario'
                        },
                        {
                            title: 'Importar solo lo necesario',
                            content: `<pre class="codigo">
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/card";
@import "bootstrap/scss/utilities/api";
</pre>
<p>Importar solo los componentes que se usan reduce el tamaño del CSS final. También se pueden agregar colores al mapa <code>$theme-colors</code> para generar clases como <code>btn-marca</code>.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003',
            label: 'Marcos de trabajo de JavaScript',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Introducción a los marcos de trabajo de JavaScript',
                    steps: [
                        {
                            title: '¿Por qué un marco de trabajo?',
                            content: `<p>En aplicaciones grandes, manipular el DOM a mano se vuelve difícil de mantener. Los marcos de trabajo de JavaScript organizan la interfaz en <strong>componentes</strong> y actualizan la pantalla automáticamente cuando cambian los datos (<strong>programación declarativa</strong>).</p>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Imperativo</strong>
<pre class="codigo">
// Imperativo: se indica cada cambio en el DOM
contador++;
document.querySelector("#total").textContent = contador;
document.querySelector("#badge").hidden = contador === 0;
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Declarativo</strong>
<pre class="codigo">
// Declarativo (React): se describe cómo debe verse según el estado
&lt;span id="total"&gt;{contador}&lt;/span&gt;
{contador &gt; 0 &amp;&amp; &lt;span className="badge"&gt;{contador}&lt;/span&gt;}
</pre>
</div>`,
                            nextButton: 'Siguiente: Conceptos comunes'
                        },
                        {
                            title: 'Conceptos comunes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Componente</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pieza reutilizable de interfaz con su lógica y su presentación.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Estado</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos que cambian y provocan que la interfaz se actualice.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Propiedades (props)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos que un componente padre envía a un hijo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Enrutamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Navegar entre vistas sin recargar la página (SPA).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Ciclo de vida</strong></td><td style="padding:13px 12px;">Momentos en que un componente se crea, actualiza y destruye.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Marco</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Característica principal</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>React</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Biblioteca de componentes con JSX; ecosistema muy amplio.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Angular</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Marco completo con TypeScript, inyección de dependencias y estructura definida.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Vue</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Progresivo y de curva de aprendizaje suave.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Svelte</strong></td><td style="padding:13px 12px;">Compila los componentes a JavaScript sin una capa en tiempo de ejecución.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Desarrollo de aplicaciones web con marcos de trabajo de JavaScript',
                    steps: [
                        {
                            title: 'Crear un proyecto con React y Vite',
                            content: `<pre class="codigo">
npm create vite@latest tienda -- --template react
cd tienda
npm install
npm run dev
</pre>
<pre class="codigo">
tienda/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── components/
│   │   ├── TarjetaProducto.jsx
│   │   └── Carrito.jsx
│   ├── pages/
│   └── services/api.js
└── package.json
</pre>`,
                            nextButton: 'Siguiente: Componentes y propiedades'
                        },
                        {
                            title: 'Componentes y propiedades',
                            content: `<pre class="codigo">
// components/TarjetaProducto.jsx
export default function TarjetaProducto({ producto, onAgregar }) {
    return (
        &lt;article className="card h-100"&gt;
            &lt;img src={producto.imagen} alt={producto.nombre} className="card-img-top" /&gt;
            &lt;div className="card-body"&gt;
                &lt;h3 className="h5"&gt;{producto.nombre}&lt;/h3&gt;
                &lt;p&gt;₡{producto.precio.toLocaleString("es-CR")}&lt;/p&gt;
                &lt;button className="btn btn-primary" onClick={() =&gt; onAgregar(producto)}&gt;
                    Agregar
                &lt;/button&gt;
            &lt;/div&gt;
        &lt;/article&gt;
    );
}
</pre>`,
                            nextButton: 'Siguiente: Estado y efectos'
                        },
                        {
                            title: 'Estado y efectos',
                            content: `<pre class="codigo">
import { useState, useEffect } from "react";
import TarjetaProducto from "./components/TarjetaProducto";

export default function App() {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() =&gt; {                         // se ejecuta al montar el componente
        fetch("/api/productos")
            .then(r =&gt; r.json())
            .then(setProductos)
            .catch(() =&gt; setError("No se pudieron cargar los productos"));
    }, []);

    const agregar = (p) =&gt; setCarrito(prev =&gt; [...prev, p]);

    if (error) return &lt;p role="alert"&gt;{error}&lt;/p&gt;;
    return (
        &lt;main className="container"&gt;
            &lt;p&gt;Artículos en el carrito: {carrito.length}&lt;/p&gt;
            &lt;div className="row g-3"&gt;
                {productos.map(p =&gt; (
                    &lt;div className="col-md-4" key={p.id}&gt;
                        &lt;TarjetaProducto producto={p} onAgregar={agregar} /&gt;
                    &lt;/div&gt;
                ))}
            &lt;/div&gt;
        &lt;/main&gt;
    );
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
La propiedad <code>key</code> identifica cada elemento de una lista para que React actualice solo los que cambian.</p>`,
                            nextButton: 'Siguiente: Enrutamiento'
                        },
                        {
                            title: 'Enrutamiento',
                            content: `<pre class="codigo">
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

&lt;BrowserRouter&gt;
    &lt;nav&gt;&lt;Link to="/"&gt;Inicio&lt;/Link&gt; &lt;Link to="/carrito"&gt;Carrito&lt;/Link&gt;&lt;/nav&gt;
    &lt;Routes&gt;
        &lt;Route path="/" element={&lt;Catalogo /&gt;} /&gt;
        &lt;Route path="/producto/:id" element={&lt;DetalleProducto /&gt;} /&gt;
        &lt;Route path="/carrito" element={&lt;Carrito /&gt;} /&gt;
    &lt;/Routes&gt;
&lt;/BrowserRouter&gt;
</pre>
<p>Para compartir el estado entre muchas vistas (carrito, sesión) se usa el <strong>Context API</strong> de React o bibliotecas como Redux Toolkit o Zustand.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Otros marcos de trabajo de JavaScript',
                    steps: [
                        {
                            title: 'Angular',
                            content: `<pre class="codigo">
// producto.component.ts
@Component({
    selector: 'app-producto',
    standalone: true,
    template: \`
        &lt;h3&gt;{{ producto.nombre }}&lt;/h3&gt;
        &lt;button (click)="agregar.emit(producto)"&gt;Agregar&lt;/button&gt;\`
})
export class ProductoComponent {
    @Input() producto!: Producto;
    @Output() agregar = new EventEmitter&lt;Producto&gt;();
}
</pre>
<p>Angular incluye enrutamiento, formularios, cliente HTTP y pruebas. Usa TypeScript y es común en aplicaciones empresariales grandes.</p>`,
                            nextButton: 'Siguiente: Vue y Svelte'
                        },
                        {
                            title: 'Vue y Svelte',
                            content: `<pre class="codigo">
&lt;!-- Vue: Producto.vue --&gt;
&lt;script setup&gt;
const props = defineProps({ producto: Object });
const emit = defineEmits(['agregar']);
&lt;/script&gt;
&lt;template&gt;
    &lt;h3&gt;{{ producto.nombre }}&lt;/h3&gt;
    &lt;button @click="emit('agregar', producto)"&gt;Agregar&lt;/button&gt;
&lt;/template&gt;
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">React</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Angular</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Vue</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Svelte</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tipo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Biblioteca</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Marco completo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Marco progresivo</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Compilador</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lenguaje</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JSX</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TypeScript</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plantillas HTML</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Plantillas HTML</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Curva de aprendizaje</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alta</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Baja</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Marco “meta”</strong></td><td style="padding:13px 12px;">Next.js</td><td style="padding:13px 12px;">—</td><td style="padding:13px 12px;">Nuxt</td><td style="padding:13px 12px;">SvelteKit</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Los marcos “meta” agregan renderizado en el servidor (SSR) y generación estática, que mejoran el rendimiento inicial y el posicionamiento en buscadores.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Optimización de rendimiento en marcos de trabajo de JavaScript',
                    steps: [
                        {
                            title: 'Evitar renderizados innecesarios',
                            content: `<pre class="codigo">
import { memo, useMemo, useCallback } from "react";

const TarjetaProducto = memo(function TarjetaProducto({ producto, onAgregar }) { /* ... */ });

function Catalogo({ productos, filtro }) {
    const visibles = useMemo(
        () =&gt; productos.filter(p =&gt; p.nombre.includes(filtro)),
        [productos, filtro]                 // solo se recalcula si cambian
    );
    const agregar = useCallback((p) =&gt; { /* ... */ }, []);
    // ...
}
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Evita</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>memo</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Volver a renderizar un componente si sus props no cambiaron.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>useMemo</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recalcular un valor costoso.</td></tr>
<tr><td style="padding:13px 12px;"><code>useCallback</code></td><td style="padding:13px 12px;">Crear una función nueva en cada renderizado.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Carga diferida y división de código'
                        },
                        {
                            title: 'Carga diferida y división de código',
                            content: `<pre class="codigo">
import { lazy, Suspense } from "react";
const PanelAdmin = lazy(() =&gt; import("./pages/PanelAdmin"));

&lt;Suspense fallback={&lt;p&gt;Cargando…&lt;/p&gt;}&gt;
    &lt;PanelAdmin /&gt;
&lt;/Suspense&gt;
</pre>
<ul>
    <li>El código del panel solo se descarga cuando se visita esa ruta.</li>
    <li>Listas muy largas se virtualizan: solo se dibujan los elementos visibles.</li>
    <li>React DevTools Profiler y Lighthouse identifican los componentes lentos.</li>
    <li><code>npm run build</code> genera una versión minificada para producción.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Integración de librerías externas con marcos de trabajo de JavaScript',
                    steps: [
                        {
                            title: 'Librerías de npm',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Necesidad</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Librerías</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Solicitudes HTTP</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">axios, TanStack Query</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Gráficos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Chart.js, Recharts</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mapas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Leaflet, Google Maps</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Formularios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">React Hook Form, Zod</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Fechas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">date-fns, Day.js</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Componentes de interfaz</strong></td><td style="padding:13px 12px;">React-Bootstrap, MUI</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo: gráfico de ventas'
                        },
                        {
                            title: 'Ejemplo: gráfico de ventas',
                            content: `<pre class="codigo">
npm install chart.js react-chartjs-2
</pre>
<pre class="codigo">
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export default function VentasMensuales({ ventas }) {
    const datos = {
        labels: ventas.map(v =&gt; v.mes),
        datasets: [{ label: "Ventas (₡)", data: ventas.map(v =&gt; v.total) }]
    };
    return &lt;Bar data={datos} aria-label="Gráfico de ventas mensuales" /&gt;;
}
</pre>
<ul>
    <li>Revise la licencia, el mantenimiento y las descargas semanales antes de adoptar una librería.</li>
    <li>Ejecute <code>npm audit</code> para detectar vulnerabilidades conocidas.</li>
    <li>Encapsule la librería en un componente propio: si se cambia, solo se modifica un archivo.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Servidor y API',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Conceptos básicos y arquitecturas comunes como cliente-servidor',
                    steps: [
                        {
                            title: 'Arquitectura cliente-servidor',
                            content: `<p>El <strong>cliente</strong> (navegador o aplicación móvil) solicita recursos y el <strong>servidor</strong> los procesa y responde. En aplicaciones modernas, el servidor expone una <strong>API</strong> que devuelve datos en JSON, y el cliente construye la interfaz.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-display" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Cliente</b><br><small>SPA o app móvil</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-network-wired" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>API</b><br><small>HTTP + JSON</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Servidor</b><br><small>Lógica de negocio</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-database" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Base de datos</b><br><small>Persistencia</small></div></div>
</div>
</div>`,
                            nextButton: 'Siguiente: Arquitecturas comunes'
                        },
                        {
                            title: 'Arquitecturas comunes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Arquitectura</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Monolítica</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una sola aplicación con frontend, backend y acceso a datos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>En capas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Presentación, lógica de negocio y acceso a datos separados.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SPA + API</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Frontend independiente que consume una API REST o GraphQL.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Microservicios</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Servicios pequeños e independientes por dominio.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Sin servidor (serverless)</strong></td><td style="padding:13px 12px;">Funciones que se ejecutan bajo demanda en la nube.</td></tr>
</tbody>
</table>
</div>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Renderizado</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dónde se genera el HTML</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CSR (cliente)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">En el navegador con JavaScript.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>SSR (servidor)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">En el servidor en cada solicitud.</td></tr>
<tr><td style="padding:13px 12px;"><strong>SSG (estático)</strong></td><td style="padding:13px 12px;">Al compilar el sitio.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Creación de interfaces de programación de aplicaciones (API)',
                    steps: [
                        {
                            title: 'Principios REST',
                            content: `<ul>
    <li>Los <strong>recursos</strong> se identifican con sustantivos en plural: <code>/api/productos</code>.</li>
    <li>Los <strong>métodos HTTP</strong> indican la acción.</li>
    <li>Cada solicitud es <strong>independiente</strong> (sin estado en el servidor).</li>
    <li>Las respuestas usan <strong>códigos de estado</strong> adecuados.</li>
</ul>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método y ruta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Acción</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código de éxito</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>GET /api/productos</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Listar (con filtros y paginación)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">200</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>GET /api/productos/17</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Obtener uno</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">200 (404 si no existe)</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>POST /api/productos</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crear</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">201</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>PUT /api/productos/17</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reemplazar</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">200</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>PATCH /api/productos/17</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Actualizar parcialmente</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">200</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>DELETE /api/productos/17</code></td><td style="padding:13px 12px;">Eliminar</td><td style="padding:13px 12px;">204</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: API con Express'
                        },
                        {
                            title: 'API con Express',
                            content: `<pre class="codigo">
// routes/productos.js
const router = require("express").Router();
const Producto = require("../models/Producto");

router.get("/", async (req, res, next) =&gt; {
    try {
        const { categoria, pagina = 1, limite = 12 } = req.query;
        const filtro = categoria ? { categoria } : {};
        const productos = await Producto.find(filtro)
            .skip((pagina - 1) * limite).limit(Number(limite));
        res.json(productos);
    } catch (err) { next(err); }
});

router.post("/", async (req, res, next) =&gt; {
    try {
        const nuevo = await Producto.create(req.body);
        res.status(201).json(nuevo);
    } catch (err) { next(err); }
});

module.exports = router;
</pre>`,
                            nextButton: 'Siguiente: Manejo centralizado de errores'
                        },
                        {
                            title: 'Manejo centralizado de errores',
                            content: `<pre class="codigo">
// server.js
app.use("/api/productos", require("./routes/productos"));

app.use((req, res) =&gt; res.status(404).json({ mensaje: "Ruta no encontrada" }));

app.use((err, req, res, next) =&gt; {
    console.error(err);
    const estado = err.name === "ValidationError" ? 400 : 500;
    res.status(estado).json({ mensaje: estado === 400 ? err.message : "Error interno" });
});
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Documente la API con <strong>OpenAPI (Swagger)</strong>: describe rutas, parámetros y respuestas, y genera una página de prueba interactiva.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Pruebas y depuración de interfaces de programación de aplicaciones (API)',
                    steps: [
                        {
                            title: 'Pruebas manuales',
                            content: `<p>Herramientas como <strong>Postman</strong>, <strong>Insomnia</strong> o <strong>Thunder Client</strong> permiten enviar solicitudes, guardar colecciones y usar variables de entorno.</p>
<pre class="codigo">
// Script de prueba en Postman (pestaña Tests)
pm.test("Responde 201", () =&gt; pm.response.to.have.status(201));
pm.test("Devuelve el id", () =&gt; pm.expect(pm.response.json()).to.have.property("_id"));
</pre>`,
                            nextButton: 'Siguiente: Pruebas automatizadas'
                        },
                        {
                            title: 'Pruebas automatizadas',
                            content: `<pre class="codigo">
// tests/productos.test.js  (Jest + Supertest)
const request = require("supertest");
const app = require("../app");

describe("API de productos", () =&gt; {
    test("GET /api/productos devuelve una lista", async () =&gt; {
        const res = await request(app).get("/api/productos");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test("POST sin nombre responde 400", async () =&gt; {
        const res = await request(app).post("/api/productos").send({ precio: 1000 });
        expect(res.status).toBe(400);
    });
});
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Separe la creación de la aplicación (<code>app.js</code>) del arranque del servidor (<code>server.js</code>) para poder probarla sin abrir un puerto.</p>`,
                            nextButton: 'Siguiente: Depuración'
                        },
                        {
                            title: 'Depuración',
                            content: `<ul>
    <li>Registre las solicitudes con un middleware como <code>morgan</code>.</li>
    <li>Use el depurador de VS Code con puntos de interrupción en las rutas.</li>
    <li>Revise el cuerpo y los encabezados que realmente llegan al servidor.</li>
    <li>Reproduzca el error con una prueba antes de corregirlo.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Seguridad y rendimiento en el desarrollo de la programación del servidor',
                    steps: [
                        {
                            title: 'Autenticación con JWT',
                            content: `<pre class="codigo">
const jwt = require("jsonwebtoken");

// Al iniciar sesión
const token = jwt.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET, { expiresIn: "1h" });

// Middleware de protección
function autenticar(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ mensaje: "Token requerido" });
    try {
        req.usuario = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch {
        res.status(401).json({ mensaje: "Token inválido o vencido" });
    }
}

const soloAdmin = (req, res, next) =&gt;
    req.usuario.rol === "admin" ? next() : res.status(403).json({ mensaje: "Acceso denegado" });

router.delete("/:id", autenticar, soloAdmin, eliminarProducto);
</pre>`,
                            nextButton: 'Siguiente: Medidas de seguridad'
                        },
                        {
                            title: 'Medidas de seguridad',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medida</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Implementación en Express</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Encabezados de seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>helmet()</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>CORS restringido</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>cors({ origin: "https://mitienda.com" })</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Límite de solicitudes</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>express-rate-limit</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Validación de entradas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">express-validator, Joi o Zod</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contraseñas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">bcrypt con factor de costo 10 o más</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Secretos</strong></td><td style="padding:13px 12px;">Variables de entorno, nunca en el repositorio</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Rendimiento'
                        },
                        {
                            title: 'Rendimiento',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Efecto</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Compresión (<code>compression</code>)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Respuestas más livianas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Paginación</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No devolver miles de registros de una vez.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Índices en la base de datos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consultas más rápidas.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Caché (memoria o Redis)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evita repetir consultas costosas.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Operaciones asincrónicas</strong></td><td style="padding:13px 12px;">No bloquear el hilo de Node.js.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Mida antes de optimizar: herramientas como autocannon o k6 permiten simular carga y medir tiempos de respuesta.</p>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Acceso a datos',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Almacenamiento de datos y bases de datos relacionales vs no relacionales',
                    steps: [
                        {
                            title: 'Bases de datos relacionales',
                            content: `<p>Organizan los datos en <strong>tablas</strong> con filas y columnas, relacionadas por claves. Usan SQL y garantizan transacciones <strong>ACID</strong>.</p>
<pre class="codigo">
SELECT p.nombre, c.nombre AS categoria
FROM productos p
JOIN categorias c ON c.id = p.categoria_id
WHERE p.precio &lt; 30000
ORDER BY p.precio;
</pre>
<p>Ejemplos: PostgreSQL, MySQL, SQL Server, Oracle.</p>`,
                            nextButton: 'Siguiente: Bases de datos NoSQL'
                        },
                        {
                            title: 'Bases de datos NoSQL',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Documentos</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Documentos JSON flexibles.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MongoDB, Firestore</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Clave-valor</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pares clave → valor.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redis, DynamoDB</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Columnas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Familias de columnas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cassandra</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Grafos</strong></td><td style="padding:13px 12px;">Nodos y relaciones.</td><td style="padding:13px 12px;">Neo4j</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: ¿Cuál elegir?'
                        },
                        {
                            title: '¿Cuál elegir?',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Relacional</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Documentos</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Esquema</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fijo, definido de antemano.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Flexible.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Relaciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muchas y complejas (JOIN).</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se incrustan o referencian.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transacciones</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ACID completas.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ACID por documento; multidocumento con costo.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Escalamiento</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Principalmente vertical.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Horizontal (fragmentación).</td></tr>
<tr><td style="padding:13px 12px;"><strong>Caso típico</strong></td><td style="padding:13px 12px;">Contabilidad, inventarios, pagos.</td><td style="padding:13px 12px;">Catálogos, perfiles, contenido.</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Muchas aplicaciones usan ambas (persistencia políglota): por ejemplo, PostgreSQL para pedidos y Redis para la caché de sesiones.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Consultas avanzadas en bases de datos NoSQL',
                    steps: [
                        {
                            title: 'Operadores de consulta en MongoDB',
                            content: `<pre class="codigo">
db.productos.find({
    precio: { $gte: 10000, $lte: 50000 },
    categoria: { $in: ["audio", "video"] },
    etiquetas: "inalámbrico",
    "stock.cantidad": { $gt: 0 }
}).sort({ precio: 1 }).limit(10);
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operador</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$eq</code>, <code>$ne</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Igual, distinto</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$gt</code>, <code>$gte</code>, <code>$lt</code>, <code>$lte</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comparaciones</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$in</code>, <code>$nin</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Está o no en una lista</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$and</code>, <code>$or</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lógicos</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$regex</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Patrón de texto</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><code>$elemMatch</code></td><td style="padding:13px 12px;">Elemento de arreglo que cumple varias condiciones</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Canal de agregación'
                        },
                        {
                            title: 'Canal de agregación',
                            content: `<pre class="codigo">
// Ventas totales por categoría en 2026, de mayor a menor
db.pedidos.aggregate([
    { $match: { fecha: { $gte: ISODate("2026-01-01") } } },
    { $unwind: "$items" },
    { $group: { _id: "$items.categoria",
                total: { $sum: { $multiply: ["$items.precio", "$items.cantidad"] } },
                unidades: { $sum: "$items.cantidad" } } },
    { $sort: { total: -1 } }
]);
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Etapa</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$match</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Filtra documentos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$unwind</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Separa un arreglo en documentos.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$group</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrupa y calcula (suma, promedio, conteo).</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>$lookup</code></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Une con otra colección.</td></tr>
<tr><td style="padding:13px 12px;"><code>$project</code></td><td style="padding:13px 12px;">Selecciona o calcula campos.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Índices'
                        },
                        {
                            title: 'Índices',
                            content: `<pre class="codigo">
db.productos.createIndex({ categoria: 1, precio: 1 });
db.productos.createIndex({ nombre: "text", descripcion: "text" });
db.productos.find({ $text: { $search: "audífonos" } });
db.productos.find({ categoria: "audio" }).explain("executionStats");
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
<code>explain</code> muestra si la consulta usó un índice (IXSCAN) o recorrió toda la colección (COLLSCAN).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Mapeo objeto-relacional (ORM)',
                    steps: [
                        {
                            title: '¿Qué es un ORM?',
                            content: `<p>Un <strong>ORM</strong> traduce entre los objetos del lenguaje de programación y las tablas (o documentos) de la base de datos. Permite trabajar con clases y métodos en lugar de escribir SQL a mano.</p>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Base de datos</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Lenguaje</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Prisma</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">PostgreSQL, MySQL, SQLite, MongoDB</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TypeScript / JavaScript</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Sequelize</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relacionales</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JavaScript</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>TypeORM</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relacionales</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">TypeScript</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Mongoose (ODM)</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MongoDB</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JavaScript</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entity Framework</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relacionales</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">C#</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Hibernate / JPA</strong></td><td style="padding:13px 12px;">Relacionales</td><td style="padding:13px 12px;">Java</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Ejemplo con Mongoose'
                        },
                        {
                            title: 'Ejemplo con Mongoose',
                            content: `<pre class="codigo">
const { Schema, model } = require("mongoose");

const productoSchema = new Schema({
    nombre:    { type: String, required: true, trim: true },
    precio:    { type: Number, required: true, min: 0 },
    categoria: { type: String, enum: ["audio", "video", "accesorios"] },
    stock:     { type: Number, default: 0 }
}, { timestamps: true });

module.exports = model("Producto", productoSchema);

// Uso
const baratos = await Producto.find({ precio: { $lt: 20000 } }).sort("precio");
</pre>`,
                            nextButton: 'Siguiente: Ejemplo con Prisma'
                        },
                        {
                            title: 'Ejemplo con Prisma',
                            content: `<pre class="codigo">
// schema.prisma
model Producto {
  id        Int      @id @default(autoincrement())
  nombre    String
  precio    Decimal
  categoria Categoria @relation(fields: [categoriaId], references: [id])
  categoriaId Int
}
</pre>
<pre class="codigo">
const productos = await prisma.producto.findMany({
    where: { precio: { lt: 20000 } },
    include: { categoria: true }
});
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Desventajas</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Menos código repetitivo.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consultas complejas pueden ser ineficientes.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Validación y migraciones.</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capa adicional que aprender.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Protección contra inyección SQL.</strong></td><td style="padding:13px 12px;">Puede ocultar lo que realmente se ejecuta.</td></tr>
</tbody>
</table>
</div>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Almacenamiento y acceso a datos en la nube',
                    steps: [
                        {
                            title: 'Servicios de datos en la nube',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Servicio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>MongoDB Atlas</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Base de datos de documentos administrada.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Amazon RDS, Azure SQL, Cloud SQL</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bases relacionales administradas.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Firebase Firestore</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Base de documentos en tiempo real.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Amazon S3, Azure Blob, Cloudinary</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Almacenamiento de archivos e imágenes.</td></tr>
<tr><td style="padding:13px 12px;"><strong>Supabase</strong></td><td style="padding:13px 12px;">PostgreSQL con autenticación y API.</td></tr>
</tbody>
</table>
</div>
<p>Un servicio <strong>administrado</strong> se encarga de respaldos, actualizaciones, réplicas y escalamiento.</p>`,
                            nextButton: 'Siguiente: Conexión segura'
                        },
                        {
                            title: 'Conexión segura',
                            content: `<pre class="codigo">
const mongoose = require("mongoose");
await mongoose.connect(process.env.MONGO_URI);
</pre>
<ul>
    <li>Guarde la cadena de conexión en variables de entorno.</li>
    <li>Cree un usuario de base de datos con los permisos mínimos.</li>
    <li>Restrinja el acceso por dirección IP.</li>
    <li>Las imágenes de productos se guardan en un servicio de archivos y en la base de datos solo su URL.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Integración y entrega continua',
                    steps: [
                        {
                            title: 'Canal de CI/CD para una aplicación web',
                            content: `<pre class="codigo">
# .github/workflows/deploy.yml
name: CI/CD
on:
  push:
    branches: [main]
jobs:
  pruebas:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm test
        env:
          MONGO_URI: \${{ secrets.MONGO_URI_TEST }}
  despliegue:
    needs: pruebas
    runs-on: ubuntu-latest
    steps:
      - run: curl -X POST \${{ secrets.RENDER_DEPLOY_HOOK }}
</pre>
<ul>
    <li>El despliegue solo ocurre si las pruebas pasan (<code>needs: pruebas</code>).</li>
    <li>Los secretos se guardan en la configuración del repositorio, no en el archivo.</li>
    <li>Plataformas como Render, Railway, Vercel o Netlify despliegan automáticamente desde GitHub.</li>
</ul>`,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas',
                            content: `<ol>
    <li>Use ambientes separados: desarrollo, pruebas y producción.</li>
    <li>Use una base de datos distinta para las pruebas.</li>
    <li>Versione los cambios del esquema con migraciones.</li>
    <li>Mantenga la rama principal siempre desplegable.</li>
    <li>Monitoree la aplicación después de cada despliegue.</li>
</ol>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Consumo de API de terceros',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Comparación de REST y SOAP',
                    steps: [
                        {
                            title: 'REST',
                            content: `<p><strong>REST</strong> es un estilo de arquitectura que usa los métodos de HTTP sobre recursos identificados por URL. Normalmente intercambia JSON.</p>
<pre class="codigo">
GET /api/clima?ciudad=San%20Jose HTTP/1.1
Accept: application/json

{ "ciudad": "San José", "temperatura": 22, "estado": "nublado" }
</pre>`,
                            nextButton: 'Siguiente: SOAP'
                        },
                        {
                            title: 'SOAP',
                            content: `<p><strong>SOAP</strong> es un protocolo que intercambia mensajes XML con una estructura estricta (sobre, encabezado y cuerpo). Su contrato se describe en un archivo <strong>WSDL</strong>.</p>
<pre class="codigo">
&lt;soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"&gt;
  &lt;soap:Body&gt;
    &lt;ObtenerTipoCambio xmlns="http://bccr.fi.cr/"&gt;
      &lt;Fecha&gt;2026-11-16&lt;/Fecha&gt;
    &lt;/ObtenerTipoCambio&gt;
  &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;
</pre>`,
                            nextButton: 'Siguiente: Comparación'
                        },
                        {
                            title: 'Comparación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Criterio</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">REST</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">SOAP</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tipo</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estilo arquitectónico</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Protocolo</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Formato</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JSON (también XML)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solo XML</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Contrato</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">OpenAPI (opcional)</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">WSDL (obligatorio)</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Transporte</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTP</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTP, SMTP y otros</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Seguridad</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">HTTPS, OAuth 2.0, JWT</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">WS-Security</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>Uso típico</strong></td><td style="padding:13px 12px;">Aplicaciones web y móviles</td><td style="padding:13px 12px;">Banca, gobierno y sistemas heredados</td></tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
También existen GraphQL (el cliente pide exactamente los campos que necesita) y gRPC (comunicación binaria eficiente entre servicios).</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Manejo de solicitudes HTTP',
                    steps: [
                        {
                            title: 'Partes de una solicitud',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Parte</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Método</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>POST</code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>URL y parámetros de consulta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>/api/pedidos?pagina=2</code></td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Parámetros de ruta</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>/api/pedidos/<strong>58</strong></code></td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Encabezados</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Authorization: Bearer ...</code>, <code>Content-Type: application/json</code></td></tr>
<tr><td style="padding:13px 12px;"><strong>Cuerpo</strong></td><td style="padding:13px 12px;"><code>{ "productoId": 17, "cantidad": 2 }</code></td></tr>
</tbody>
</table>
</div>`,
                            nextButton: 'Siguiente: Cliente HTTP reutilizable'
                        },
                        {
                            title: 'Cliente HTTP reutilizable',
                            content: `<pre class="codigo">
// services/api.js
const BASE = "https://api.mitienda.com";

export async function solicitar(ruta, { metodo = "GET", datos, token } = {}) {
    const resp = await fetch(BASE + ruta, {
        method: metodo,
        headers: {
            "Content-Type": "application/json",
            ...(token &amp;&amp; { Authorization: \`Bearer \${token}\` })
        },
        body: datos ? JSON.stringify(datos) : undefined,
        signal: AbortSignal.timeout(8000)          // cancela después de 8 s
    });
    const cuerpo = resp.status === 204 ? null : await resp.json();
    if (!resp.ok) throw new Error(cuerpo?.mensaje || \`Error \${resp.status}\`);
    return cuerpo;
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Centralizar las solicitudes en un módulo evita repetir encabezados, manejo de errores y la URL base en cada componente.</p>`,
                            nextButton: 'Siguiente: Con axios'
                        },
                        {
                            title: 'Con axios',
                            content: `<pre class="codigo">
import axios from "axios";
const api = axios.create({ baseURL: "https://api.mitienda.com", timeout: 8000 });

api.interceptors.request.use(cfg =&gt; {
    const token = localStorage.getItem("token");
    if (token) cfg.headers.Authorization = \`Bearer \${token}\`;
    return cfg;
});

const { data } = await api.get("/pedidos", { params: { pagina: 2 } });
</pre>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Análisis de respuestas de APIs',
                    steps: [
                        {
                            title: 'Leer una respuesta',
                            content: `<pre class="codigo">
{
  "datos": [
    { "id": 1, "nombre": "Audífonos", "precio": 24900 }
  ],
  "paginacion": { "pagina": 1, "porPagina": 12, "total": 87 },
  "enlaces": { "siguiente": "/api/productos?pagina=2" }
}
</pre>
<ul>
    <li>Verifique primero el <strong>código de estado</strong>.</li>
    <li>Revise el <code>Content-Type</code> antes de convertir a JSON.</li>
    <li>Identifique la estructura: ¿los datos vienen en la raíz o dentro de una propiedad?</li>
    <li>Lea los metadatos de paginación para solicitar más resultados.</li>
</ul>`,
                            nextButton: 'Siguiente: Manejo de errores'
                        },
                        {
                            title: 'Manejo de errores',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead><tr><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Causa probable</th><th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Acción en el cliente</th></tr></thead>
<tbody>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>400</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Datos inválidos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mostrar el mensaje junto a los campos.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>401</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sin sesión o token vencido.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Redirigir al inicio de sesión.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>403</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sin permisos.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Informar que no tiene acceso.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>404</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recurso inexistente.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mostrar “no encontrado”.</td></tr>
<tr><td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>429</strong></td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Demasiadas solicitudes.</td><td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Esperar y reintentar.</td></tr>
<tr style="background:#f3f9ff;"><td style="padding:13px 12px;"><strong>5xx</strong></td><td style="padding:13px 12px;">Falla del servidor.</td><td style="padding:13px 12px;">Mensaje genérico y reintento.</td></tr>
</tbody>
</table>
</div>
<pre class="codigo">
// Formato estándar de error (RFC 9457 "Problem Details")
{ "type": "/errores/stock", "title": "Stock insuficiente", "status": 409, "detail": "Solo quedan 2 unidades" }
</pre>`,
                            nextButton: 'Siguiente: Validar la estructura recibida'
                        },
                        {
                            title: 'Validar la estructura recibida',
                            content: `<pre class="codigo">
import { z } from "zod";
const Producto = z.object({ id: z.number(), nombre: z.string(), precio: z.number().nonnegative() });

const productos = z.array(Producto).parse(respuesta.datos); // lanza error si no coincide
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Validar la respuesta protege a la aplicación de cambios inesperados en una API externa.</p>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Integración de APIs en aplicaciones web',
                    steps: [
                        {
                            title: 'Estados de carga, error y vacío',
                            content: `<pre class="codigo">
function ListaPedidos() {
    const [estado, setEstado] = useState({ cargando: true, error: null, datos: [] });

    useEffect(() =&gt; {
        solicitar("/pedidos")
            .then(datos =&gt; setEstado({ cargando: false, error: null, datos }))
            .catch(err =&gt; setEstado({ cargando: false, error: err.message, datos: [] }));
    }, []);

    if (estado.cargando) return &lt;p aria-busy="true"&gt;Cargando pedidos…&lt;/p&gt;;
    if (estado.error) return &lt;p role="alert"&gt;{estado.error}&lt;/p&gt;;
    if (estado.datos.length === 0) return &lt;p&gt;Aún no tiene pedidos.&lt;/p&gt;;
    return &lt;ul&gt;{estado.datos.map(p =&gt; &lt;li key={p.id}&gt;Pedido #{p.id}&lt;/li&gt;)}&lt;/ul&gt;;
}
</pre>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Toda integración debe contemplar tres estados además del éxito: <strong>cargando</strong>, <strong>error</strong> y <strong>vacío</strong>.</p>`,
                            nextButton: 'Siguiente: Capa de servicios'
                        },
                        {
                            title: 'Capa de servicios',
                            content: `<pre class="codigo">
// services/pedidos.js
import { solicitar } from "./api";
export const listarPedidos = () =&gt; solicitar("/pedidos");
export const crearPedido = (carrito, token) =&gt;
    solicitar("/pedidos", { metodo: "POST", datos: { items: carrito }, token });
</pre>
<ul>
    <li>Los componentes no conocen las URL: llaman a funciones con nombres del negocio.</li>
    <li>Si la API cambia, solo se modifica la capa de servicios.</li>
    <li>Bibliotecas como TanStack Query agregan caché, reintentos y actualización automática.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Consumo de APIs de terceros',
                    steps: [
                        {
                            title: 'Antes de integrar una API externa',
                            content: `<ol>
    <li>Lea la documentación y los términos de uso.</li>
    <li>Revise los límites de solicitudes y el costo.</li>
    <li>Obtenga una clave (API key) o credenciales OAuth.</li>
    <li>Pruebe en el ambiente de pruebas (sandbox).</li>
    <li>Defina qué hará la aplicación si la API no responde.</li>
</ol>`,
                            nextButton: 'Siguiente: Proteger las claves'
                        },
                        {
                            title: 'Proteger las claves',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
<i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
// En el frontend: cualquiera ve la clave en las herramientas del navegador
fetch("https://api.clima.com/v1?key=ABC123SECRETA&amp;ciudad=Heredia");
</pre>
</div>
<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
<i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
// Backend como intermediario (proxy)
app.get("/api/clima", async (req, res) =&gt; {
    const url = \`https://api.clima.com/v1?key=\${process.env.CLIMA_KEY}&amp;ciudad=\${encodeURIComponent(req.query.ciudad)}\`;
    const resp = await fetch(url);
    res.status(resp.status).json(await resp.json());
});
</pre>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El backend puede además guardar en caché las respuestas para reducir el consumo de la cuota.</p>`,
                            nextButton: 'Siguiente: Pasarela de pago simulada'
                        },
                        {
                            title: 'Pasarela de pago simulada',
                            content: `<p>Las pasarelas de pago (Stripe, PayPal, Tilopay, ONVO) ofrecen ambientes de prueba con tarjetas ficticias.</p>
<div style="margin:auto; text-align:center; color:#333;">
<div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;">
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-cart-shopping" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Carrito</b><br><small>El cliente confirma</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-server" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Backend</b><br><small>Crea la intención de pago</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-credit-card" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pasarela</b><br><small>Formulario seguro</small></div></div>
<span style="color:#00928d;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #00928d; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-bell" style="font-size:25px;color:#00928d;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Webhook</b><br><small>Notifica el resultado</small></div></div>
<span style="color:#712c86;font-size:20px;" aria-hidden="true">→</span>
<div style="padding:12px 15px; border:2px solid #712c86; border-radius:12px; min-width:105px; max-width:180px;"><i class="fa-solid fa-receipt" style="font-size:25px;color:#c81f66;" aria-hidden="true"></i><div style="margin-top:6px;"><b>Pedido</b><br><small>Se marca como pagado</small></div></div>
</div>
</div>
<ul>
    <li>El monto se calcula en el servidor, nunca se confía en el precio enviado por el navegador.</li>
    <li>Los datos de la tarjeta los procesa la pasarela; la aplicación no los almacena.</li>
    <li>Verifique la firma de los webhooks para confirmar que provienen de la pasarela.</li>
</ul>`,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
