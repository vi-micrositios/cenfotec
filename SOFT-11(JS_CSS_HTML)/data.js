const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-11 <br> Proyecto integrador 1',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/logo.png', // Cambiar por imagen real
        description: 'Estudio de estructuras secuenciales, condicionales e iterativas y procedimientos lógicos y abstracciones de computación que permiten la resolución de problemas por medio de la elaboración de programas de software.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        
        // =====================================================================
        // MÓDULO 1: ANÁLISIS Y ESPECIFICACIÓN DE REQUERIMIENTOS
        // =====================================================================
        {
            id: 'modulo_01',
            label: 'Análisis',
            subtemas: [
                {
                    id: 'm01-educcion',
                    label: 'Educción de requerimientos',
                    steps: [
                        {
                            title: '¿Qué es la educción de requerimientos?',
                            content: `<p>La educción (o elicitación) es el proceso de <strong>descubrir, obtener y comprender</strong> las necesidades de los interesados (stakeholders) sobre el sistema que se va a construir.</p>
                            <p>Los requerimientos no se "recolectan" como si estuvieran listos: el cliente muchas veces no sabe expresar lo que necesita, por lo que el analista debe ayudarle a descubrirlo.</p>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Un error en esta etapa se arrastra a todas las demás: corregir un requerimiento mal entendido en producción cuesta mucho más que hacerlo durante el análisis.
                            </p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m01_educcion.png',
                            nextButton: 'Siguiente: Interesados'
                        },
                        {
                            title: 'Identificación de interesados (stakeholders)',
                            content: `<p>Antes de preguntar, hay que saber <strong>a quién</strong> preguntar. Los interesados son todas las personas u organizaciones afectadas por el sistema:</p>
                            <ul>
                                <li><strong>Cliente o patrocinador:</strong> quien financia y toma decisiones.</li>
                                <li><strong>Usuarios finales:</strong> quienes usarán el sistema todos los días.</li>
                                <li><strong>Expertos del dominio:</strong> conocen las reglas del negocio.</li>
                                <li><strong>Equipo técnico:</strong> desarrolladores, administradores de infraestructura.</li>
                                <li><strong>Entes reguladores:</strong> leyes y normas que el sistema debe cumplir.</li>
                            </ul>`,
                            nextButton: 'Siguiente: Técnicas'
                        },
                        {
                            title: 'Técnicas de educción',
                            content: `<ul>
                                <li><strong>Entrevistas:</strong> estructuradas (preguntas definidas) o abiertas (conversación guiada).</li>
                                <li><strong>Cuestionarios y encuestas:</strong> útiles cuando hay muchos usuarios.</li>
                                <li><strong>Observación:</strong> ver cómo el usuario realiza hoy su trabajo.</li>
                                <li><strong>Talleres (workshops) y lluvia de ideas:</strong> varios interesados construyen juntos.</li>
                                <li><strong>Análisis de documentos:</strong> formularios, reportes, reglamentos existentes.</li>
                                <li><strong>Prototipos:</strong> mostrar algo visual para provocar retroalimentación.</li>
                            </ul>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                En la práctica se combinan varias técnicas: una entrevista inicial, observación del proceso y luego un prototipo para confirmar lo entendido.
                            </p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm01-necesidades',
                    label: 'Identificación de necesidades y problemas del usuario',
                    steps: [
                        {
                            title: 'Problema vs. solución',
                            content: `<p>El usuario suele llegar pidiendo una <strong>solución</strong> ("quiero una app"), pero el analista debe identificar el <strong>problema</strong> real que hay detrás ("los pedidos se pierden porque se anotan en papel").</p>
                            <p>Entender el problema permite proponer la solución adecuada, que no siempre es la que el usuario imaginó.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m01_necesidades.png',
                            nextButton: 'Siguiente: Declaración del problema'
                        },
                        {
                            title: 'Declaración del problema',
                            content: `<p>Una forma clara de documentar el problema es con la siguiente plantilla:</p>
                            <table class="table">
                                <tr><td><strong>El problema de</strong></td><td>describir el problema</td></tr>
                                <tr><td><strong>afecta a</strong></td><td>los interesados afectados</td></tr>
                                <tr><td><strong>cuyo impacto es</strong></td><td>consecuencias del problema</td></tr>
                                <tr><td><strong>una solución exitosa sería</strong></td><td>beneficios esperados</td></tr>
                            </table>
                            <p>Ejemplo: <em>El problema de</em> la reserva manual de laboratorios <em>afecta a</em> docentes y estudiantes, <em>cuyo impacto es</em> choques de horario y laboratorios vacíos; <em>una solución exitosa sería</em> un sistema de reservas en línea con disponibilidad en tiempo real.</p>`,
                            nextButton: 'Siguiente: Técnicas de análisis'
                        },
                        {
                            title: 'Herramientas para encontrar la causa raíz',
                            content: `<ul>
                                <li><strong>Los 5 porqués:</strong> preguntar "¿por qué?" repetidamente hasta llegar a la causa de fondo.</li>
                                <li><strong>Diagrama de Ishikawa (espina de pescado):</strong> agrupa las causas por categorías (personas, procesos, tecnología, entorno).</li>
                                <li><strong>Personas (user personas):</strong> perfiles ficticios que representan a los tipos de usuario y sus necesidades.</li>
                                <li><strong>Mapa de experiencia (journey map):</strong> describe los pasos del usuario y dónde se frustra.</li>
                            </ul>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm01-funcionalesNoFuncionales',
                    label: 'Requerimientos funcionales y no funcionales',
                    steps: [
                        {
                            title: 'Requerimientos funcionales (RF)',
                            content: `<p>Describen <strong>lo que el sistema debe hacer</strong>: servicios, funciones y comportamiento ante determinadas entradas.</p>
                            <ul>
                                <li>RF-01: El sistema debe permitir al usuario registrarse con nombre, correo y contraseña.</li>
                                <li>RF-02: El sistema debe permitir al administrador registrar nuevos productos.</li>
                                <li>RF-03: El sistema debe generar un reporte de ventas por rango de fechas.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m01_rf_rnf.png',
                            nextButton: 'Siguiente: No funcionales'
                        },
                        {
                            title: 'Requerimientos no funcionales (RNF)',
                            content: `<p>Describen <strong>cómo debe comportarse</strong> el sistema: restricciones y atributos de calidad.</p>
                            <ul>
                                <li><strong>Rendimiento:</strong> las búsquedas deben responder en menos de 2 segundos.</li>
                                <li><strong>Usabilidad:</strong> un usuario nuevo debe completar un registro sin ayuda.</li>
                                <li><strong>Seguridad:</strong> las contraseñas se almacenan cifradas.</li>
                                <li><strong>Disponibilidad:</strong> el sistema debe estar disponible el 99 % del tiempo.</li>
                                <li><strong>Portabilidad / compatibilidad:</strong> debe funcionar en Chrome, Firefox y dispositivos móviles.</li>
                            </ul>`,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Características de un buen requerimiento',
                            content: `<p>Un requerimiento bien escrito es:</p>
                            <ul>
                                <li><strong>Claro y no ambiguo:</strong> tiene una única interpretación.</li>
                                <li><strong>Verificable:</strong> se puede probar si se cumple.</li>
                                <li><strong>Completo y consistente:</strong> no contradice a otros.</li>
                                <li><strong>Atómico:</strong> expresa una sola necesidad.</li>
                                <li><strong>Trazable:</strong> tiene un identificador y un origen.</li>
                            </ul>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Evite palabras como "rápido", "fácil", "amigable" o "etc.": no se pueden verificar. Cámbielas por valores medibles.
                            </p>`,
                            nextButton: 'Siguiente: Del requerimiento al código'
                        },
                        {
                            title: 'Del requerimiento al código',
                            content: `<p>Cada requerimiento termina reflejado en alguna parte del sistema. Así se ven RF-01 y un RNF en el formulario y en el modelo de datos:</p><pre class="code"><code>&lt;!-- RF-01: registrarse con nombre, correo y contraseña --&gt;
&lt;form id="frmRegistro"&gt;
    &lt;input type="text" name="nombre" required&gt;
    &lt;input type="email" name="correo" required&gt;
    &lt;!-- RNF-03: contraseña de al menos 8 caracteres --&gt;
    &lt;input type="password" name="clave" minlength="8" required&gt;
&lt;/form&gt;</code></pre><pre class="code"><code>// models/usuario.js
const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },              // RF-01
    correo: { type: String, required: true, unique: true }, // RF-01
    clave:  { type: String, required: true, minlength: 8 }  // RNF-03
});</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Anotar el identificador del requerimiento en el código facilita la trazabilidad que se estudia en el módulo 2.
</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm01-casosUsoPrototipos',
                    label: 'Especificación mediante casos de uso y prototipos',
                    steps: [
                        {
                            title: 'Casos de uso',
                            content: `<p>Un caso de uso describe la interacción entre un <strong>actor</strong> (usuario u otro sistema) y el sistema para lograr un objetivo concreto.</p>
                            <ul>
                                <li><strong>Actor:</strong> quien inicia o participa (Cliente, Administrador).</li>
                                <li><strong>Caso de uso:</strong> objetivo expresado con verbo en infinitivo (Registrar pedido).</li>
                                <li><strong>Relaciones:</strong> asociación, <em>include</em> (siempre se ejecuta) y <em>extend</em> (se ejecuta bajo condición).</li>
                            </ul>
                            <p>El diagrama de casos de uso (UML) da una vista general del alcance del sistema.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m01_casos_uso.png',
                            nextButton: 'Siguiente: Especificación'
                        },
                        {
                            title: 'Especificación de un caso de uso',
                            content: `<p>Cada caso de uso se detalla en una plantilla:</p>
                            <table class="table">
                                <tr><td><strong>Nombre</strong></td><td>CU-01 Iniciar sesión</td></tr>
                                <tr><td><strong>Actor</strong></td><td>Usuario registrado</td></tr>
                                <tr><td><strong>Precondición</strong></td><td>El usuario tiene una cuenta activa</td></tr>
                                <tr><td><strong>Flujo principal</strong></td><td>1. Ingresa correo y contraseña. 2. El sistema valida los datos. 3. El sistema muestra la página de inicio.</td></tr>
                                <tr><td><strong>Flujo alterno</strong></td><td>2a. Credenciales incorrectas: el sistema muestra un mensaje de error.</td></tr>
                                <tr><td><strong>Postcondición</strong></td><td>Se crea una sesión activa</td></tr>
                            </table>`,
                            nextButton: 'Siguiente: Prototipos'
                        },
                        {
                            title: 'Prototipos',
                            content: `<p>Un prototipo es una representación preliminar de la interfaz que permite al usuario "ver" el sistema antes de construirlo.</p>
                            <ul>
                                <li><strong>Baja fidelidad (wireframes):</strong> bocetos en papel o herramientas simples; rápidos y baratos.</li>
                                <li><strong>Alta fidelidad (mockups):</strong> colores, tipografía e interacción real, por ejemplo en Figma.</li>
                            </ul>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Cada pantalla del prototipo debería poder relacionarse con uno o más casos de uso.
                            </p>`,
                            nextButton: 'Siguiente: Del prototipo a la pantalla'
                        },
                        {
                            title: 'Del prototipo a la pantalla',
                            content: `<p>Un wireframe de "Iniciar sesión" (CU-01) se convierte en HTML con Bootstrap casi de forma directa:</p><pre class="code"><code>&lt;div class="container"&gt;
  &lt;div class="row justify-content-center mt-5"&gt;
    &lt;div class="col-md-4"&gt;
      &lt;div class="card shadow-sm"&gt;
        &lt;div class="card-body"&gt;
          &lt;h2 class="h4 mb-3 text-center"&gt;Iniciar sesión&lt;/h2&gt;
          &lt;form id="frmLogin"&gt;
            &lt;div class="mb-3"&gt;
              &lt;label for="txtCorreo" class="form-label"&gt;Correo&lt;/label&gt;
              &lt;input type="email" id="txtCorreo" class="form-control" required&gt;
            &lt;/div&gt;
            &lt;div class="mb-3"&gt;
              &lt;label for="txtClave" class="form-label"&gt;Contraseña&lt;/label&gt;
              &lt;input type="password" id="txtClave" class="form-control" required&gt;
            &lt;/div&gt;
            &lt;button type="submit" class="btn btn-primary w-100"&gt;Ingresar&lt;/button&gt;
          &lt;/form&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Cada elemento del prototipo (campos, botón, mensaje de error) debe corresponder a un paso del flujo del caso de uso.
</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm01-validacionVerificacion',
                    label: 'Validación y verificación de requerimientos',
                    steps: [
                        {
                            title: 'Validación vs. verificación',
                            content: `<ul>
                                <li><strong>Validación:</strong> ¿estamos construyendo <em>el producto correcto</em>? Confirma con el cliente que los requerimientos reflejan sus necesidades reales.</li>
                                <li><strong>Verificación:</strong> ¿estamos construyendo <em>el producto correctamente</em>? Revisa que los requerimientos estén bien escritos, sean consistentes y cumplan los estándares.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m01_validacion.png',
                            nextButton: 'Siguiente: Técnicas'
                        },
                        {
                            title: 'Técnicas de validación y verificación',
                            content: `<ul>
                                <li><strong>Revisiones e inspecciones:</strong> el equipo y el cliente leen el documento buscando errores u omisiones.</li>
                                <li><strong>Recorridos con prototipos:</strong> el usuario navega el prototipo y confirma el comportamiento.</li>
                                <li><strong>Generación de casos de prueba:</strong> si no se puede escribir una prueba para un requerimiento, este no es verificable.</li>
                                <li><strong>Listas de chequeo:</strong> criterios como ambigüedad, completitud y trazabilidad.</li>
                            </ul>
                            <p>El resultado de esta etapa es una versión <strong>aprobada</strong> (línea base) de los requerimientos.</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm01-seguridad',
                    label: 'Requerimientos de seguridad',
                    steps: [
                        {
                            title: 'La seguridad desde el inicio',
                            content: `<p>La seguridad no se "agrega" al final: debe definirse como requerimiento desde el análisis (<em>security by design</em>).</p>
                            <p>Se basa en tres principios (tríada CIA):</p>
                            <ul>
                                <li><strong>Confidencialidad:</strong> solo las personas autorizadas acceden a la información.</li>
                                <li><strong>Integridad:</strong> los datos no se modifican sin autorización.</li>
                                <li><strong>Disponibilidad:</strong> el sistema y los datos están accesibles cuando se necesitan.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m01_seguridad.png',
                            nextButton: 'Siguiente: Ejemplos'
                        },
                        {
                            title: 'Ejemplos de requerimientos de seguridad',
                            content: `<ul>
                                <li><strong>Autenticación:</strong> el sistema debe exigir contraseñas de al menos 8 caracteres con letras y números.</li>
                                <li><strong>Autorización:</strong> solo los usuarios con rol administrador pueden eliminar registros.</li>
                                <li><strong>Protección de datos:</strong> las contraseñas se almacenan con un algoritmo de hash (por ejemplo, bcrypt).</li>
                                <li><strong>Auditoría:</strong> el sistema registra quién y cuándo modificó cada registro.</li>
                                <li><strong>Sesiones:</strong> la sesión expira tras 30 minutos de inactividad.</li>
                            </ul>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                En Costa Rica, la Ley 8968 de Protección de la Persona frente al tratamiento de sus datos personales también genera requerimientos que el sistema debe cumplir.
                            </p>`,
                            nextButton: 'Siguiente: En el código'
                        },
                        {
                            title: 'Requerimientos de seguridad en el código',
                            content: `<p>Los requerimientos de seguridad se verifican en el servidor. Ejemplo de la regla de contraseñas:</p><pre class="code"><code>// RS-01: mínimo 8 caracteres, al menos una letra y un número
const regexClave = /^(?=.*[A-Za-z])(?=.*\\d).{8,}$/;

function claveValida(clave) {
    return regexClave.test(clave);
}

console.log(claveValida('abc123'));     // false (muy corta)
console.log(claveValida('abcdefgh'));   // false (sin números)
console.log(claveValida('cenfo2026'));  // true</code></pre><pre class="code"><code>// RS-05: la sesión expira tras 30 minutos de inactividad
app.use(session({
    secret: process.env.SESSION_SECRET,
    rolling: true,                          // reinicia el tiempo con cada solicitud
    cookie: { maxAge: 1000 * 60 * 30 }
}));</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },

        // =====================================================================
        // MÓDULO 2: GESTIÓN Y MODELADO DE REQUERIMIENTOS
        // =====================================================================
        {
            id: 'modulo_02',
            label: 'Modelado',
            subtemas: [
                {
                    id: 'm02-planificacion',
                    label: 'Planificación de la gestión de requerimientos',
                    steps: [
                        {
                            title: '¿Qué es la gestión de requerimientos?',
                            content: `<p>Es el conjunto de actividades para <strong>organizar, controlar y dar seguimiento</strong> a los requerimientos durante todo el proyecto, ya que estos cambian con el tiempo.</p>
                            <p>El plan de gestión de requerimientos define:</p>
                            <ul>
                                <li>Cómo se identifican y nombran los requerimientos (RF-01, RNF-01…).</li>
                                <li>Qué atributos se registran: prioridad, estado, autor, versión, origen.</li>
                                <li>Quién aprueba los cambios y cómo se solicitan.</li>
                                <li>Qué herramienta se usa para documentarlos (hoja de cálculo, Jira, Azure DevOps, Trello).</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m02_gestion_req.png',
                            nextButton: 'Siguiente: Estados'
                        },
                        {
                            title: 'Estados de un requerimiento',
                            content: `<p>Un requerimiento pasa por distintos estados durante su vida:</p>
                            <p><strong>Propuesto → Aprobado → Implementado → Verificado</strong></p>
                            <p>También puede quedar <strong>Rechazado</strong> o <strong>Diferido</strong> (para una versión futura).</p>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Llevar el estado actualizado permite saber en cualquier momento cuánto del alcance está terminado.
                            </p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm02-priorizacionTrazabilidad',
                    label: 'Priorización, trazabilidad y control de cambios',
                    steps: [
                        {
                            title: 'Priorización',
                            content: `<p>No todo se puede construir a la vez. Priorizar permite entregar primero lo que más valor aporta.</p>
                            <p><strong>Técnica MoSCoW:</strong></p>
                            <ul>
                                <li><strong>Must have:</strong> imprescindible; sin esto el sistema no sirve.</li>
                                <li><strong>Should have:</strong> importante, pero puede esperar un poco.</li>
                                <li><strong>Could have:</strong> deseable si hay tiempo.</li>
                                <li><strong>Won't have (this time):</strong> queda fuera de esta versión.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m02_trazabilidad.png',
                            nextButton: 'Siguiente: Trazabilidad'
                        },
                        {
                            title: 'Trazabilidad',
                            content: `<p>Es la capacidad de seguir un requerimiento desde su <strong>origen</strong> hasta su <strong>implementación y prueba</strong>.</p>
                            <p>Se registra en una <strong>matriz de trazabilidad</strong>:</p>
                            <table class="table">
                                <tr><th>Requerimiento</th><th>Caso de uso</th><th>Pantalla / módulo</th><th>Caso de prueba</th></tr>
                                <tr><td>RF-01</td><td>CU-01</td><td>registro.html</td><td>CP-01</td></tr>
                                <tr><td>RF-02</td><td>CU-03</td><td>productos.html</td><td>CP-04</td></tr>
                            </table>
                            <p>Permite saber qué se ve afectado cuando un requerimiento cambia.</p>`,
                            nextButton: 'Siguiente: Control de cambios'
                        },
                        {
                            title: 'Control de cambios',
                            content: `<p>Los cambios son normales, pero deben gestionarse:</p>
                            <ol>
                                <li>Se registra una <strong>solicitud de cambio</strong>.</li>
                                <li>Se <strong>analiza el impacto</strong> (tiempo, costo, otros requerimientos) usando la matriz de trazabilidad.</li>
                                <li>El responsable o comité <strong>aprueba o rechaza</strong>.</li>
                                <li>Se actualiza la documentación y la versión.</li>
                            </ol>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Los cambios no controlados provocan el "scope creep": el alcance crece sin que crezcan el tiempo ni el presupuesto.
                            </p>`,
                            nextButton: 'Siguiente: Trazabilidad en el código'
                        },
                        {
                            title: 'Trazabilidad en el día a día',
                            content: `<p>La trazabilidad no vive solo en la matriz: también se refleja en las ramas, los commits y las pruebas.</p><pre class="code"><code>git checkout -b feature/RF-01-registro
git commit -m "RF-01: formulario de registro de usuarios (CU-01)"
git commit -m "RF-01: validación de correo único en el modelo"</code></pre><pre class="code"><code>// pruebas/usuarios.test.js
test('CP-01 (RF-01): registra un usuario con datos válidos', async () =&gt; { /* ... */ });
test('CP-02 (RF-01): rechaza un correo ya registrado', async () =&gt; { /* ... */ });</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Si un requerimiento cambia, buscar "RF-01" en el repositorio muestra todo lo que se ve afectado.
</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm02-calidadRequerimientos',
                    label: 'Aseguramiento de la calidad de los requerimientos',
                    steps: [
                        {
                            title: 'Calidad del documento de requerimientos',
                            content: `<p>El estándar <strong>ISO/IEC/IEEE 29148</strong> establece las características de calidad de los requerimientos y de su especificación:</p>
                            <ul>
                                <li><strong>Necesario:</strong> si se elimina, el sistema queda incompleto.</li>
                                <li><strong>Factible:</strong> puede construirse con los recursos disponibles.</li>
                                <li><strong>No ambiguo y verificable.</strong></li>
                                <li><strong>Consistente y completo</strong> en el conjunto.</li>
                                <li><strong>Trazable</strong> hacia su origen y hacia su implementación.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m02_calidad_req.png',
                            nextButton: 'Siguiente: Errores comunes'
                        },
                        {
                            title: 'Errores comunes',
                            content: `<table class="table">
                                <tr><th>Mal escrito</th><th>Mejorado</th></tr>
                                <tr><td>El sistema debe ser rápido.</td><td>La consulta de productos debe responder en máximo 2 segundos con 100 usuarios concurrentes.</td></tr>
                                <tr><td>El sistema debe permitir registrar y editar usuarios y productos.</td><td>Dividir en requerimientos atómicos: uno por acción y por entidad.</td></tr>
                                <tr><td>El sistema debe ser fácil de usar.</td><td>Un usuario nuevo debe completar una compra en menos de 5 pasos.</td></tr>
                            </table>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm02-modeladoNegocio',
                    label: 'Modelado del negocio',
                    steps: [
                        {
                            title: '¿Por qué modelar el negocio?',
                            content: `<p>Antes de modelar el software hay que entender <strong>cómo funciona la organización</strong>: sus procesos, actores, reglas y la información que maneja.</p>
                            <p>El modelado del negocio responde preguntas como:</p>
                            <ul>
                                <li>¿Qué procesos realiza la organización y en qué orden?</li>
                                <li>¿Quién participa en cada proceso?</li>
                                <li>¿Qué información se crea, consulta o modifica?</li>
                                <li>¿Qué reglas de negocio se deben respetar?</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m02_bpmn.png',
                            nextButton: 'Siguiente: Herramientas'
                        },
                        {
                            title: 'Herramientas de modelado del negocio',
                            content: `<ul>
                                <li><strong>BPMN (Business Process Model and Notation):</strong> diagramas de procesos con eventos, tareas, compuertas y carriles (responsables).</li>
                                <li><strong>Diagramas de actividades UML:</strong> describen el flujo de un proceso.</li>
                                <li><strong>Reglas de negocio:</strong> enunciados como "un cliente no puede tener más de 3 préstamos activos".</li>
                                <li><strong>Glosario:</strong> define los términos del dominio para que todos hablen el mismo idioma.</li>
                            </ul>`,
                            nextButton: 'Siguiente: Entidades del negocio'
                        },
                        {
                            title: 'De los procesos a la información',
                            content: `<p>Cada proceso del negocio manipula <strong>entidades</strong>: cliente, pedido, producto, reserva… Identificarlas es el primer paso para pensar en la base de datos.</p>
                            <p>Ejemplo — proceso "Realizar pedido":</p>
                            <ul>
                                <li>Entidades: <strong>Cliente</strong>, <strong>Pedido</strong>, <strong>Producto</strong>.</li>
                                <li>Relaciones: un cliente realiza muchos pedidos; un pedido contiene muchos productos.</li>
                                <li>Regla: un pedido debe tener al menos un producto.</li>
                            </ul>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Estas entidades serán, más adelante, las colecciones y esquemas de la base de datos en MongoDB.
                            </p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm02-tecnicasModelado',
                    label: 'Técnicas de modelado de requerimientos',
                    steps: [
                        {
                            title: 'Modelos UML para requerimientos',
                            content: `<ul>
                                <li><strong>Diagrama de casos de uso:</strong> qué hace el sistema y para quién.</li>
                                <li><strong>Diagrama de actividades:</strong> el flujo de un caso de uso o proceso.</li>
                                <li><strong>Diagrama de secuencia:</strong> el intercambio de mensajes entre usuario, interfaz, servidor y base de datos.</li>
                                <li><strong>Diagrama de clases (modelo de dominio):</strong> las entidades, sus atributos y relaciones.</li>
                                <li><strong>Diagrama de estados:</strong> los estados por los que pasa un objeto (pedido: creado, pagado, enviado, entregado).</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m02_modelado_datos.png',
                            nextButton: 'Siguiente: Historias de usuario'
                        },
                        {
                            title: 'Historias de usuario',
                            content: `<p>En proyectos ágiles los requerimientos se expresan como historias de usuario:</p>
                            <p><em>Como <strong>[rol]</strong>, quiero <strong>[acción]</strong>, para <strong>[beneficio]</strong>.</em></p>
                            <p>Ejemplo: Como estudiante, quiero reservar un laboratorio en línea, para no tener que ir a la oficina.</p>
                            <p><strong>Criterios de aceptación:</strong></p>
                            <ul>
                                <li>Solo se muestran los laboratorios disponibles en la fecha seleccionada.</li>
                                <li>No se puede reservar en una fecha pasada.</li>
                            </ul>`,
                            nextButton: 'Siguiente: Modelado de datos'
                        },
                        {
                            title: 'Modelado de datos: pensar en la base de datos',
                            content: `<p>A partir del modelo de dominio se diseña cómo se guardará la información. En el curso se usa <strong>MongoDB</strong>, una base de datos orientada a <strong>documentos</strong>:</p>
                            <table class="table">
                                <tr><th>Modelo relacional</th><th>MongoDB</th></tr>
                                <tr><td>Base de datos</td><td>Base de datos</td></tr>
                                <tr><td>Tabla</td><td>Colección</td></tr>
                                <tr><td>Fila</td><td>Documento (JSON/BSON)</td></tr>
                                <tr><td>Columna</td><td>Campo</td></tr>
                                <tr><td>Llave foránea</td><td>Referencia (ObjectId) o documento embebido</td></tr>
                            </table>`,
                            nextButton: 'Siguiente: Embeber o referenciar'
                        },
                        {
                            title: '¿Embeber o referenciar?',
                            content: `<p>La decisión clave al modelar en MongoDB es cómo representar las relaciones:</p>
                            <ul>
                                <li><strong>Embeber</strong> (un documento dentro de otro): cuando los datos se consultan siempre juntos y la cantidad es limitada. Ej.: las direcciones de un cliente.</li>
                                <li><strong>Referenciar</strong> (guardar el _id del otro documento): cuando los datos se consultan por separado, crecen mucho o se comparten. Ej.: los pedidos de un cliente.</li>
                            </ul>
<pre class="code"><code>// Documento de la colección "pedidos"
{
  "_id": "665f1c...",
  "cliente": "664a2b...",          // referencia a "clientes"
  "fecha": "2026-10-05",
  "detalle": [                      // embebido
    { "producto": "Café", "cantidad": 2, "precio": 1500 }
  ],
  "estado": "pagado"
}</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Regla práctica: modele según cómo se va a <strong>consultar</strong> la información, no solo según cómo está organizada.
                            </p>`,
                            nextButton: 'Siguiente: Ejercicio de modelado'
                        },
                        {
                            title: 'Ejercicio de modelado: reservas de laboratorios',
                            content: `<p><strong>Caso:</strong> los estudiantes reservan laboratorios por fecha y bloque horario. Cada laboratorio tiene capacidad y equipos.</p><ol><li>Identifique las entidades: <strong>Usuario</strong>, <strong>Laboratorio</strong>, <strong>Reserva</strong>.</li><li>Defina atributos y relaciones: un usuario hace muchas reservas; un laboratorio recibe muchas reservas.</li><li>Decida qué embeber y qué referenciar según las consultas.</li></ol><pre class="code"><code>// Colección "laboratorios": los equipos se embeben (pocos y siempre se consultan juntos)
{
  "_id": "lab01",
  "nombre": "Lab 3-12",
  "capacidad": 30,
  "equipos": [
    { "tipo": "PC", "cantidad": 30 },
    { "tipo": "Proyector", "cantidad": 1 }
  ]
}

// Colección "reservas": usuario y laboratorio se referencian (crecen y se consultan por separado)
{
  "_id": "res001",
  "usuario": "usr045",
  "laboratorio": "lab01",
  "fecha": "2026-10-12",
  "bloque": "08:00-10:00",
  "estado": "confirmada"
}</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Pregunta para discutir: ¿cómo consultaría todas las reservas de un laboratorio en una fecha? ¿El modelo lo facilita?
</p>`,
                            nextButton: 'Siguiente: De clases a esquemas'
                        },
                        {
                            title: 'Diagrama de clases → esquemas',
                            content: `<p>Cada clase del modelo de dominio se convierte en un esquema de Mongoose; cada asociación, en una referencia o en un subdocumento:</p><pre class="code"><code>// models/reserva.js
const reservaSchema = new mongoose.Schema({
    usuario:     { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    laboratorio: { type: mongoose.Schema.Types.ObjectId, ref: 'Laboratorio', required: true },
    fecha:       { type: Date, required: true },
    bloque:      { type: String, enum: ['08:00-10:00', '10:00-12:00', '13:00-15:00'] },
    estado:      { type: String, enum: ['pendiente', 'confirmada', 'cancelada'], default: 'pendiente' }
});

// Regla de negocio: un laboratorio no puede reservarse dos veces en el mismo bloque
reservaSchema.index({ laboratorio: 1, fecha: 1, bloque: 1 }, { unique: true });</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm02-especificacionFormal',
                    label: 'Especificación formal de requerimientos',
                    steps: [
                        {
                            title: '¿Qué es una especificación formal?',
                            content: `<p>Es la descripción de los requerimientos mediante una notación con <strong>sintaxis y semántica precisas</strong> (basada en matemáticas o lógica), lo que elimina la ambigüedad del lenguaje natural.</p>
                            <p>Se usa principalmente en sistemas críticos: aviación, medicina, banca, transporte.</p>
                            <p>Ejemplos de notaciones: <strong>Z</strong>, <strong>VDM</strong>, <strong>B</strong> y <strong>OCL</strong> (Object Constraint Language, complemento de UML).</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m02_formal.png',
                            nextButton: 'Siguiente: Ejemplo'
                        },
                        {
                            title: 'Precondiciones, postcondiciones e invariantes',
                            content: `<p>Una forma accesible de especificar formalmente es mediante contratos:</p>
                            <ul>
                                <li><strong>Precondición:</strong> lo que debe cumplirse antes de ejecutar la operación.</li>
                                <li><strong>Postcondición:</strong> lo que se garantiza al terminar.</li>
                                <li><strong>Invariante:</strong> lo que siempre debe ser verdadero.</li>
                            </ul>
<pre class="code"><code>-- OCL: operación retirar(monto) de una Cuenta
context Cuenta::retirar(monto : Real)
  pre:  monto > 0 and monto <= self.saldo
  post: self.saldo = self.saldo@pre - monto

context Cuenta
  inv: self.saldo >= 0</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Estas reglas luego se traducen en validaciones del código y del esquema de la base de datos (por ejemplo, <code>min: 0</code> en Mongoose).
                            </p>`,
                            nextButton: 'Siguiente: Del contrato al código'
                        },
                        {
                            title: 'Del contrato al código',
                            content: `<p>La especificación OCL de <code>retirar</code> se implementa verificando la precondición y garantizando la invariante:</p><pre class="code"><code>function retirar(cuenta, monto) {
    // pre: monto &gt; 0 and monto &lt;= saldo
    if (monto &lt;= 0) throw new Error('El monto debe ser positivo');
    if (monto &gt; cuenta.saldo) throw new Error('Saldo insuficiente');

    const saldoAnterior = cuenta.saldo;
    cuenta.saldo -= monto;

    // post: saldo = saldo@pre - monto
    console.assert(cuenta.saldo === saldoAnterior - monto);
    return cuenta;
}</code></pre><pre class="code"><code>// inv: saldo &gt;= 0  →  regla en el esquema
const cuentaSchema = new mongoose.Schema({
    saldo: { type: Number, min: [0, 'El saldo no puede ser negativo'] }
});</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },

        // =====================================================================
        // MÓDULO 3: DESARROLLO DE INTERFAZ DE USUARIO
        // =====================================================================
        {
            id: 'modulo_03',
            label: 'Interfaz de usuario',
            subtemas: [
                {
                    id: 'm03-requerimientosSitio',
                    label: 'Requerimientos de un sitio web',
                    steps: [
                        {
                            title: '¿Qué se debe definir antes de construir un sitio?',
                            content: `<ul>
                                <li><strong>Objetivo del sitio:</strong> informar, vender, gestionar datos, comunicar.</li>
                                <li><strong>Público meta:</strong> edad, conocimientos tecnológicos, dispositivos que usa.</li>
                                <li><strong>Contenido:</strong> textos, imágenes, formularios, datos dinámicos.</li>
                                <li><strong>Funcionalidades:</strong> registro, búsqueda, carrito, reportes.</li>
                                <li><strong>Restricciones:</strong> navegadores soportados, tiempo de carga, accesibilidad.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m03_req_sitio.png',
                            nextButton: 'Siguiente: RNF de un sitio'
                        },
                        {
                            title: 'Requerimientos no funcionales de un sitio web',
                            content: `<ul>
                                <li><strong>Diseño adaptable (responsive):</strong> se ajusta a celular, tableta y computadora.</li>
                                <li><strong>Accesibilidad:</strong> cumplir pautas WCAG (texto alternativo en imágenes, contraste, navegación con teclado).</li>
                                <li><strong>Usabilidad:</strong> navegación clara y consistente.</li>
                                <li><strong>Rendimiento:</strong> imágenes optimizadas, carga rápida.</li>
                                <li><strong>Compatibilidad:</strong> funciona en los navegadores principales.</li>
                            </ul>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm03-estructuraDiseno',
                    label: 'Estructura y diseño de un sitio web',
                    steps: [
                        {
                            title: 'Arquitectura de la información',
                            content: `<p>Define cómo se organiza y navega el contenido. Se representa con un <strong>mapa del sitio</strong>:</p>
<pre class="code"><code>Inicio
├── Catálogo
│   └── Detalle de producto
├── Carrito
├── Mi cuenta
│   ├── Iniciar sesión
│   └── Registro
└── Contacto</code></pre>
                            <p>Cada página del mapa debería corresponder a uno o más casos de uso.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m03_mapa_sitio.png',
                            nextButton: 'Siguiente: Estructura de archivos'
                        },
                        {
                            title: 'Estructura de archivos del proyecto',
                            content: `<p>Separar responsabilidades facilita el mantenimiento:</p>
<pre class="code"><code>mi-proyecto/
├── index.html
├── pages/
│   ├── registro.html
│   └── catalogo.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── imgs/</code></pre>
                            <p><strong>HTML</strong> = estructura · <strong>CSS</strong> = presentación · <strong>JavaScript</strong> = comportamiento.</p>`,
                            nextButton: 'Siguiente: Principios de diseño'
                        },
                        {
                            title: 'Principios de diseño visual',
                            content: `<ul>
                                <li><strong>Jerarquía visual:</strong> lo más importante se ve primero (tamaño, color, posición).</li>
                                <li><strong>Consistencia:</strong> mismos colores, tipografía y botones en todo el sitio.</li>
                                <li><strong>Espacio en blanco:</strong> ayuda a leer y a enfocar.</li>
                                <li><strong>Contraste:</strong> texto legible sobre el fondo.</li>
                                <li><strong>Mobile first:</strong> diseñar primero para pantallas pequeñas.</li>
                            </ul>`,
                            nextButton: 'Siguiente: Plantilla base'
                        },
                        {
                            title: 'Plantilla base de una página',
                            content: `<p>Esta estructura semántica se repite en todas las páginas del proyecto:</p><pre class="code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Reservas CENFOTEC&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt; &lt;!-- menú --&gt; &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;section id="contenido"&gt; &lt;!-- contenido de la página --&gt; &lt;/section&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2026 Proyecto integrador&lt;/p&gt;
    &lt;/footer&gt;

    &lt;script src="js/main.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm03-html',
                    label: 'Lenguaje de Marcado de Hipertexto (HTML)',
                    steps: [
                        {
                            title: '¿Qué es HTML?',
                            content: `<p>HTML es el lenguaje que define la <strong>estructura y el contenido</strong> de una página web mediante etiquetas.</p>
<pre class="code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Mi sitio&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Bienvenido&lt;/h1&gt;
    &lt;p&gt;Este es mi primer sitio.&lt;/p&gt;
    &lt;script src="js/main.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m03_html.png',
                            nextButton: 'Siguiente: Etiquetas básicas'
                        },
                        {
                            title: 'Etiquetas básicas',
                            content: `<table class="table">
                                <tr><th>Etiqueta</th><th>Uso</th></tr>
                                <tr><td><code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code></td><td>Títulos</td></tr>
                                <tr><td><code>&lt;p&gt;</code></td><td>Párrafo</td></tr>
                                <tr><td><code>&lt;a href=""&gt;</code></td><td>Enlace</td></tr>
                                <tr><td><code>&lt;img src="" alt=""&gt;</code></td><td>Imagen (con texto alternativo)</td></tr>
                                <tr><td><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code></td><td>Listas</td></tr>
                                <tr><td><code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code></td><td>Tablas</td></tr>
                                <tr><td><code>&lt;div&gt;</code>, <code>&lt;span&gt;</code></td><td>Contenedores genéricos</td></tr>
                            </table>`,
                            nextButton: 'Siguiente: HTML semántico'
                        },
                        {
                            title: 'HTML semántico',
                            content: `<p>Las etiquetas semánticas describen el <strong>significado</strong> del contenido, lo que mejora la accesibilidad y el posicionamiento en buscadores.</p>
<pre class="code"><code>&lt;header&gt;  Encabezado y logo        &lt;/header&gt;
&lt;nav&gt;     Menú de navegación        &lt;/nav&gt;
&lt;main&gt;
    &lt;section&gt; Sección temática    &lt;/section&gt;
    &lt;article&gt; Contenido independiente &lt;/article&gt;
    &lt;aside&gt;   Contenido lateral   &lt;/aside&gt;
&lt;/main&gt;
&lt;footer&gt;  Pie de página             &lt;/footer&gt;</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Evite construir todo con <code>&lt;div&gt;</code>: use la etiqueta que mejor describa cada parte.
                            </p>`,
                            nextButton: 'Siguiente: Ejemplo práctico'
                        },
                        {
                            title: 'Ejemplo: listas, tablas e imágenes',
                            content: `<pre class="code"><code>&lt;section&gt;
    &lt;h2&gt;Laboratorios disponibles&lt;/h2&gt;
    &lt;img src="imgs/lab.jpg" alt="Laboratorio con 30 computadoras" width="300"&gt;

    &lt;ul&gt;
        &lt;li&gt;Lab 3-12 — 30 computadoras&lt;/li&gt;
        &lt;li&gt;Lab 3-14 — 25 computadoras&lt;/li&gt;
    &lt;/ul&gt;

    &lt;table&gt;
        &lt;thead&gt;
            &lt;tr&gt;&lt;th&gt;Laboratorio&lt;/th&gt;&lt;th&gt;Capacidad&lt;/th&gt;&lt;th&gt;Acción&lt;/th&gt;&lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
            &lt;tr&gt;
                &lt;td&gt;Lab 3-12&lt;/td&gt;
                &lt;td&gt;30&lt;/td&gt;
                &lt;td&gt;&lt;a href="reservar.html?lab=3-12"&gt;Reservar&lt;/a&gt;&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/section&gt;</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Use <code>&lt;thead&gt;</code> y <code>&lt;tbody&gt;</code>: más adelante JavaScript llenará el <code>&lt;tbody&gt;</code> con datos de la base de datos.
</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm03-css',
                    label: 'Hojas de Estilo en Cascada (CSS)',
                    steps: [
                        {
                            title: '¿Qué es CSS?',
                            content: `<p>CSS define la <strong>presentación</strong>: colores, tipografía, tamaños, posición y animaciones.</p>
<pre class="code"><code>/* selector { propiedad: valor; } */
h1 {
    color: #00928d;
    font-size: 2rem;
}
.destacado { background-color: #f2f2f2; }   /* clase */
#menu      { display: flex; }               /* id    */</code></pre>
                            <p>"Cascada" significa que, cuando varias reglas aplican al mismo elemento, gana la más específica o la última declarada.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m03_css.png',
                            nextButton: 'Siguiente: Modelo de caja'
                        },
                        {
                            title: 'Modelo de caja',
                            content: `<p>Todo elemento HTML es una caja compuesta por:</p>
                            <ul>
                                <li><strong>Content:</strong> el contenido.</li>
                                <li><strong>Padding:</strong> espacio interno.</li>
                                <li><strong>Border:</strong> borde.</li>
                                <li><strong>Margin:</strong> espacio externo, entre cajas.</li>
                            </ul>
<pre class="code"><code>.tarjeta {
    padding: 16px;
    border: 1px solid #ccc;
    margin: 10px;
    box-sizing: border-box;
}</code></pre>`,
                            nextButton: 'Siguiente: Flexbox y Grid'
                        },
                        {
                            title: 'Diseño con Flexbox y Grid',
                            content: `<p><strong>Flexbox</strong> organiza elementos en una dimensión (fila o columna):</p>
<pre class="code"><code>.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}</code></pre>
                            <p><strong>Grid</strong> organiza en dos dimensiones (filas y columnas):</p>
<pre class="code"><code>.catalogo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}</code></pre>`,
                            nextButton: 'Siguiente: Diseño adaptable'
                        },
                        {
                            title: 'Diseño adaptable (media queries)',
                            content: `<p>Las <em>media queries</em> aplican estilos según el tamaño de la pantalla:</p>
<pre class="code"><code>/* Celulares: una columna */
.catalogo { grid-template-columns: 1fr; }

/* Pantallas de 768px o más: tres columnas */
@media (min-width: 768px) {
    .catalogo { grid-template-columns: repeat(3, 1fr); }
}</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Escriba primero los estilos para celular y agregue media queries para pantallas más grandes (mobile first).
                            </p>`,
                            nextButton: 'Siguiente: Pseudo-clases'
                        },
                        {
                            title: 'Pseudo-clases y transiciones',
                            content: `<pre class="code"><code>/* Cambia al pasar el mouse */
.btn-reservar:hover {
    background-color: #00928d;
    color: white;
}

/* Filas alternas de una tabla */
tbody tr:nth-child(even) {
    background-color: #f5f5f5;
}

/* Campo con el foco */
input:focus {
    outline: 2px solid #00928d;
}

/* Animación suave */
.tarjeta {
    transition: transform 0.2s;
}
.tarjeta:hover {
    transform: translateY(-4px);
}</code></pre>`,
                            nextButton: 'Siguiente: Variables CSS'
                        },
                        {
                            title: 'Variables CSS',
                            content: `<p>Las variables (custom properties) centralizan colores y medidas para mantener la consistencia del sitio:</p><pre class="code"><code>:root {
    --color-primario: #00928d;
    --color-texto: #333;
    --radio: 8px;
}

.boton {
    background: var(--color-primario);
    color: white;
    border-radius: var(--radio);
}

h1 {
    color: var(--color-texto);
}</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Si el cliente pide cambiar el color institucional, solo se modifica una línea.
</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm03-bootstrap',
                    label: 'Bootstrap',
                    steps: [
                        {
                            title: '¿Qué es Bootstrap?',
                            content: `<p>Bootstrap es un <strong>framework de CSS</strong> con estilos y componentes listos (botones, menús, tarjetas, formularios, ventanas modales) que permiten construir interfaces adaptables rápidamente, usando solo clases en el HTML.</p><ul><li>Diseño <strong>mobile first</strong> y adaptable.</li><li>Sistema de rejilla de <strong>12 columnas</strong>.</li><li>Componentes consistentes y accesibles.</li></ul><pre class="code"><code>&lt;!-- En el &lt;head&gt;: estilos de Bootstrap --&gt;
&lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
&lt;!-- Sus estilos van DESPUÉS para poder personalizar --&gt;
&lt;link rel="stylesheet" href="css/styles.css"&gt;

&lt;!-- Antes de &lt;/body&gt;: JavaScript de Bootstrap (menús, modales) --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m03_bootstrap.png',
                            nextButton: 'Siguiente: Rejilla'
                        },
                        {
                            title: 'Sistema de rejilla (grid)',
                            content: `<p>La página se divide en <code>container</code> → <code>row</code> → <code>col</code>. Cada fila tiene 12 columnas, y los sufijos (<code>sm</code>, <code>md</code>, <code>lg</code>) indican a partir de qué ancho aplica:</p><pre class="code"><code>&lt;div class="container"&gt;
    &lt;div class="row"&gt;
        &lt;!-- Celular: 12 (una por fila) · Tableta: 6 (dos) · Escritorio: 4 (tres) --&gt;
        &lt;div class="col-12 col-md-6 col-lg-4"&gt;Columna A&lt;/div&gt;
        &lt;div class="col-12 col-md-6 col-lg-4"&gt;Columna B&lt;/div&gt;
        &lt;div class="col-12 col-md-12 col-lg-4"&gt;Columna C&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre><table class="table"><tr><th>Prefijo</th><th>Ancho mínimo</th></tr><tr><td>col-</td><td>0 (celular)</td></tr><tr><td>col-sm-</td><td>576px</td></tr><tr><td>col-md-</td><td>768px</td></tr><tr><td>col-lg-</td><td>992px</td></tr><tr><td>col-xl-</td><td>1200px</td></tr></table>`,
                            nextButton: 'Siguiente: Navbar'
                        },
                        {
                            title: 'Barra de navegación',
                            content: `<pre class="code"><code>&lt;nav class="navbar navbar-expand-lg navbar-dark bg-dark"&gt;
    &lt;div class="container"&gt;
        &lt;a class="navbar-brand" href="index.html"&gt;Reservas&lt;/a&gt;
        &lt;button class="navbar-toggler" type="button"
                data-bs-toggle="collapse" data-bs-target="#menu"&gt;
            &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;
        &lt;/button&gt;
        &lt;div class="collapse navbar-collapse" id="menu"&gt;
            &lt;ul class="navbar-nav ms-auto"&gt;
                &lt;li class="nav-item"&gt;&lt;a class="nav-link active" href="index.html"&gt;Inicio&lt;/a&gt;&lt;/li&gt;
                &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="laboratorios.html"&gt;Laboratorios&lt;/a&gt;&lt;/li&gt;
                &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="login.html"&gt;Iniciar sesión&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/nav&gt;</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    En celular el menú se contrae en el botón "hamburguesa" automáticamente; para esto se necesita el <code>bootstrap.bundle.min.js</code>.
</p>`,
                            nextButton: 'Siguiente: Tarjetas'
                        },
                        {
                            title: 'Tarjetas y botones',
                            content: `<pre class="code"><code>&lt;div class="row g-4"&gt;
    &lt;div class="col-md-4"&gt;
        &lt;div class="card h-100"&gt;
            &lt;img src="imgs/lab312.jpg" class="card-img-top" alt="Laboratorio 3-12"&gt;
            &lt;div class="card-body"&gt;
                &lt;h5 class="card-title"&gt;Lab 3-12&lt;/h5&gt;
                &lt;p class="card-text"&gt;30 computadoras · Proyector&lt;/p&gt;
                &lt;a href="#" class="btn btn-primary"&gt;Reservar&lt;/a&gt;
                &lt;a href="#" class="btn btn-outline-secondary"&gt;Detalle&lt;/a&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;!-- más tarjetas... --&gt;
&lt;/div&gt;</code></pre><p>Variantes de botón: <code>btn-primary</code>, <code>btn-success</code>, <code>btn-danger</code>, <code>btn-warning</code>, <code>btn-outline-*</code>, tamaños <code>btn-sm</code> y <code>btn-lg</code>.</p>`,
                            nextButton: 'Siguiente: Tablas y alertas'
                        },
                        {
                            title: 'Tablas, alertas e insignias',
                            content: `<pre class="code"><code>&lt;div class="alert alert-success" role="alert"&gt;Reserva registrada correctamente.&lt;/div&gt;
&lt;div class="alert alert-danger" role="alert"&gt;El laboratorio ya está reservado.&lt;/div&gt;

&lt;div class="table-responsive"&gt;
    &lt;table class="table table-striped table-hover"&gt;
        &lt;thead class="table-dark"&gt;
            &lt;tr&gt;&lt;th&gt;Fecha&lt;/th&gt;&lt;th&gt;Laboratorio&lt;/th&gt;&lt;th&gt;Estado&lt;/th&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
            &lt;tr&gt;
                &lt;td&gt;12/10/2026&lt;/td&gt;
                &lt;td&gt;Lab 3-12&lt;/td&gt;
                &lt;td&gt;&lt;span class="badge text-bg-success"&gt;Confirmada&lt;/span&gt;&lt;/td&gt;
                &lt;td&gt;&lt;button class="btn btn-sm btn-danger"&gt;Cancelar&lt;/button&gt;&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
    &lt;/table&gt;
&lt;/div&gt;</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    <code>table-responsive</code> agrega desplazamiento horizontal en pantallas pequeñas.
</p>`,
                            nextButton: 'Siguiente: Modales'
                        },
                        {
                            title: 'Ventanas modales',
                            content: `<p>Un modal muestra contenido sobre la página sin cambiar de pantalla; es útil para confirmar acciones o editar registros:</p><pre class="code"><code>&lt;button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#mdlConfirmar"&gt;
    Eliminar
&lt;/button&gt;

&lt;div class="modal fade" id="mdlConfirmar" tabindex="-1"&gt;
    &lt;div class="modal-dialog"&gt;
        &lt;div class="modal-content"&gt;
            &lt;div class="modal-header"&gt;
                &lt;h5 class="modal-title"&gt;Confirmar&lt;/h5&gt;
                &lt;button type="button" class="btn-close" data-bs-dismiss="modal"&gt;&lt;/button&gt;
            &lt;/div&gt;
            &lt;div class="modal-body"&gt;¿Desea eliminar esta reserva?&lt;/div&gt;
            &lt;div class="modal-footer"&gt;
                &lt;button class="btn btn-secondary" data-bs-dismiss="modal"&gt;Cancelar&lt;/button&gt;
                &lt;button class="btn btn-danger" id="btnEliminar"&gt;Eliminar&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre><p>En el módulo 5 se abrirá y cerrará este modal desde jQuery.</p>`,
                            nextButton: 'Siguiente: Utilidades'
                        },
                        {
                            title: 'Clases utilitarias',
                            content: `<p>Bootstrap incluye clases de una sola propiedad que evitan escribir CSS para casos comunes:</p><table class="table"><tr><th>Clase</th><th>Efecto</th></tr><tr><td><code>m-3</code>, <code>mt-2</code>, <code>px-4</code></td><td>Margen y relleno (0 a 5)</td></tr><tr><td><code>text-center</code>, <code>fw-bold</code></td><td>Alineación y peso del texto</td></tr><tr><td><code>bg-light</code>, <code>text-danger</code></td><td>Colores de fondo y texto</td></tr><tr><td><code>d-flex</code>, <code>justify-content-between</code></td><td>Flexbox</td></tr><tr><td><code>d-none d-md-block</code></td><td>Oculto en celular, visible desde tableta</td></tr><tr><td><code>shadow</code>, <code>rounded</code></td><td>Sombra y bordes redondeados</td></tr></table><pre class="code"><code>&lt;div class="d-flex justify-content-between align-items-center p-3 bg-light rounded shadow-sm"&gt;
    &lt;h2 class="h5 m-0"&gt;Mis reservas&lt;/h2&gt;
    &lt;button class="btn btn-success"&gt;+ Nueva&lt;/button&gt;
&lt;/div&gt;</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Personalice Bootstrap en su propio <code>styles.css</code> (cargado después), por ejemplo cambiando <code>--bs-primary</code> o sobrescribiendo clases.
</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm03-formularios',
                    label: 'Formularios',
                    steps: [
                        {
                            title: 'Estructura de un formulario',
                            content: `<p>Los formularios permiten que el usuario <strong>ingrese datos</strong> que luego se envían al servidor.</p>
<pre class="code"><code>&lt;form id="frmRegistro"&gt;
    &lt;label for="txtNombre"&gt;Nombre&lt;/label&gt;
    &lt;input type="text" id="txtNombre" name="nombre"&gt;

    &lt;label for="txtCorreo"&gt;Correo&lt;/label&gt;
    &lt;input type="email" id="txtCorreo" name="correo"&gt;

    &lt;button type="submit"&gt;Registrarse&lt;/button&gt;
&lt;/form&gt;</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Cada <code>&lt;input&gt;</code> debe tener su <code>&lt;label&gt;</code> asociado (atributo <code>for</code> = <code>id</code>) por accesibilidad.
                            </p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m03_formularios.png',
                            nextButton: 'Siguiente: Tipos de campos'
                        },
                        {
                            title: 'Tipos de campos',
                            content: `<table class="table">
                                <tr><th>Control</th><th>Uso</th></tr>
                                <tr><td><code>type="text"</code></td><td>Texto corto</td></tr>
                                <tr><td><code>type="email"</code></td><td>Correo electrónico</td></tr>
                                <tr><td><code>type="password"</code></td><td>Contraseña (oculta)</td></tr>
                                <tr><td><code>type="number"</code></td><td>Números (con min, max)</td></tr>
                                <tr><td><code>type="date"</code></td><td>Fecha</td></tr>
                                <tr><td><code>type="radio"</code> / <code>"checkbox"</code></td><td>Opción única / múltiple</td></tr>
                                <tr><td><code>&lt;select&gt;</code></td><td>Lista desplegable</td></tr>
                                <tr><td><code>&lt;textarea&gt;</code></td><td>Texto largo</td></tr>
                            </table>
                            <p>El atributo <code>name</code> de cada campo será el nombre del dato que llega al servidor y, normalmente, el nombre del campo en la base de datos.</p>`,
                            nextButton: 'Siguiente: Formulario con Bootstrap'
                        },
                        {
                            title: 'Formulario con Bootstrap',
                            content: `<pre class="code"><code>&lt;form id="frmReserva" class="row g-3"&gt;
    &lt;div class="col-md-6"&gt;
        &lt;label for="selLab" class="form-label"&gt;Laboratorio&lt;/label&gt;
        &lt;select id="selLab" name="laboratorio" class="form-select" required&gt;
            &lt;option value=""&gt;Seleccione...&lt;/option&gt;
            &lt;option value="lab01"&gt;Lab 3-12&lt;/option&gt;
            &lt;option value="lab02"&gt;Lab 3-14&lt;/option&gt;
        &lt;/select&gt;
    &lt;/div&gt;
    &lt;div class="col-md-6"&gt;
        &lt;label for="txtFecha" class="form-label"&gt;Fecha&lt;/label&gt;
        &lt;input type="date" id="txtFecha" name="fecha" class="form-control" required&gt;
    &lt;/div&gt;
    &lt;div class="col-12"&gt;
        &lt;label class="form-label d-block"&gt;Bloque&lt;/label&gt;
        &lt;div class="form-check form-check-inline"&gt;
            &lt;input class="form-check-input" type="radio" name="bloque" id="b1" value="08:00-10:00" checked&gt;
            &lt;label class="form-check-label" for="b1"&gt;08:00 - 10:00&lt;/label&gt;
        &lt;/div&gt;
        &lt;div class="form-check form-check-inline"&gt;
            &lt;input class="form-check-input" type="radio" name="bloque" id="b2" value="10:00-12:00"&gt;
            &lt;label class="form-check-label" for="b2"&gt;10:00 - 12:00&lt;/label&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-12"&gt;
        &lt;label for="txtMotivo" class="form-label"&gt;Motivo&lt;/label&gt;
        &lt;textarea id="txtMotivo" name="motivo" class="form-control" rows="3"&gt;&lt;/textarea&gt;
    &lt;/div&gt;
    &lt;div class="col-12"&gt;
        &lt;button type="submit" class="btn btn-primary"&gt;Reservar&lt;/button&gt;
    &lt;/div&gt;
&lt;/form&gt;</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Observe que los atributos <code>name</code> (laboratorio, fecha, bloque) coinciden con los campos del esquema <code>Reserva</code> modelado en el módulo 2.
</p>`,
                            nextButton: 'Siguiente: Leer los datos'
                        },
                        {
                            title: 'Leer los datos del formulario',
                            content: `<pre class="code"><code>const formulario = document.getElementById('frmReserva');

formulario.addEventListener('submit', (e) =&gt; {
    e.preventDefault();
    const datos = Object.fromEntries(new FormData(formulario));
    console.log(datos);
    // { laboratorio: "lab01", fecha: "2026-10-12", bloque: "08:00-10:00", motivo: "..." }
});</code></pre><p><code>FormData</code> toma todos los campos por su atributo <code>name</code>; ese objeto es justo el que se enviará al servidor en el módulo 6.</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm03-validaciones',
                    label: 'Validaciones de interfaz gráfica',
                    steps: [
                        {
                            title: '¿Por qué validar?',
                            content: `<p>Validar en la interfaz da <strong>retroalimentación inmediata</strong> al usuario y evita enviar datos incorrectos al servidor.</p>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                La validación en el cliente mejora la experiencia, pero <strong>no reemplaza</strong> la validación en el servidor: cualquier persona puede saltarse el JavaScript del navegador.
                            </p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m03_validaciones.png',
                            nextButton: 'Siguiente: Validación HTML5'
                        },
                        {
                            title: 'Validación con atributos HTML5',
                            content: `<pre class="code"><code>&lt;input type="text" name="nombre" required minlength="3"&gt;
&lt;input type="email" name="correo" required&gt;
&lt;input type="number" name="edad" min="18" max="99"&gt;
&lt;input type="text" name="cedula" pattern="[0-9]{9}"
       title="Debe contener 9 dígitos"&gt;</code></pre>
                            <p>El navegador bloquea el envío y muestra un mensaje si algún campo no cumple.</p>`,
                            nextButton: 'Siguiente: Validación con JavaScript'
                        },
                        {
                            title: 'Validación con JavaScript',
                            content: `<pre class="code"><code>const formulario = document.getElementById('frmRegistro');

formulario.addEventListener('submit', function (evento) {
    const nombre = document.getElementById('txtNombre');
    let hayError = false;

    if (nombre.value.trim() === '') {
        nombre.classList.add('error');
        hayError = true;
    } else {
        nombre.classList.remove('error');
    }

    if (hayError) {
        evento.preventDefault();   // detiene el envío
        alert('Revise los campos marcados en rojo');
    }
});</code></pre>
<pre class="code"><code>/* CSS */
.error { border: 2px solid #d9534f; }</code></pre>`,
                            nextButton: 'Siguiente: Validación con Bootstrap'
                        },
                        {
                            title: 'Validación con estilos de Bootstrap',
                            content: `<p>Bootstrap muestra los mensajes de error con las clases <code>is-invalid</code> / <code>is-valid</code> y el elemento <code>invalid-feedback</code>:</p><pre class="code"><code>&lt;form id="frmRegistro" class="needs-validation" novalidate&gt;
    &lt;div class="mb-3"&gt;
        &lt;label for="txtCorreo" class="form-label"&gt;Correo&lt;/label&gt;
        &lt;input type="email" id="txtCorreo" class="form-control" required&gt;
        &lt;div class="invalid-feedback"&gt;Ingrese un correo válido.&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="mb-3"&gt;
        &lt;label for="txtClave" class="form-label"&gt;Contraseña&lt;/label&gt;
        &lt;input type="password" id="txtClave" class="form-control" minlength="8" required&gt;
        &lt;div class="invalid-feedback"&gt;Mínimo 8 caracteres.&lt;/div&gt;
    &lt;/div&gt;
    &lt;button class="btn btn-primary"&gt;Registrarse&lt;/button&gt;
&lt;/form&gt;</code></pre><pre class="code"><code>const form = document.getElementById('frmRegistro');

form.addEventListener('submit', (e) =&gt; {
    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
    }
    form.classList.add('was-validated');   // activa los estilos de Bootstrap
});</code></pre>`,
                            nextButton: 'Siguiente: Validaciones personalizadas'
                        },
                        {
                            title: 'Validaciones personalizadas',
                            content: `<p>Para reglas que HTML5 no cubre (confirmar contraseña, fechas futuras) se valida con JavaScript y se marca el campo:</p><pre class="code"><code>function marcar(campo, esValido, mensaje) {
    campo.classList.toggle('is-invalid', !esValido);
    campo.classList.toggle('is-valid', esValido);
    campo.nextElementSibling.textContent = mensaje || '';
}

document.getElementById('frmReserva').addEventListener('submit', (e) =&gt; {
    const fecha = document.getElementById('txtFecha');
    const hoy = new Date().toISOString().slice(0, 10);

    const fechaOk = fecha.value !== '' &amp;&amp; fecha.value &gt;= hoy;
    marcar(fecha, fechaOk, 'La fecha debe ser hoy o posterior.');

    if (!fechaOk) e.preventDefault();
});</code></pre><p>
    <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
    Recuerde: estas mismas reglas deben repetirse en el servidor (módulo 6).
</p>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },

        // =====================================================================
        // MÓDULO 4: LENGUAJE JAVASCRIPT
        // =====================================================================
        {
            id: 'modulo_04',
            label: 'JavaScript',
            subtemas: [
                {
                    id: 'm04-introduccion',
                    label: 'Introducción a JavaScript',
                    steps: [
                        {
                            title: '¿Qué es JavaScript?',
                            content: `<p>JavaScript es un lenguaje de programación interpretado que agrega <strong>comportamiento e interactividad</strong> a las páginas web. Hoy también se ejecuta en el servidor gracias a Node.js.</p>
                            <ul>
                                <li>Se ejecuta en el navegador (cliente) o en Node.js (servidor).</li>
                                <li>Es de tipado dinámico: el tipo de una variable se define por su valor.</li>
                                <li>Es orientado a eventos: reacciona a clics, envíos de formularios, teclas, etc.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m04_javascript.png',
                            nextButton: 'Siguiente: Cómo incluirlo'
                        },
                        {
                            title: 'Cómo incluir JavaScript y variables',
                            content: `<pre class="code"><code>&lt;!-- Al final del body --&gt;
&lt;script src="js/main.js"&gt;&lt;/script&gt;</code></pre>
<pre class="code"><code>// main.js
let contador = 0;          // puede cambiar
const IVA = 0.13;          // constante
console.log('Hola mundo'); // se ve en la consola (F12)</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="col or: #00928d;" aria-hidden="true"></i>
                                Usar <code>const</code> por defecto y <code>let</code> solo cuando el valor deba cambiar. Prohibido usar <code>var</code>.
                            </p>`,
                            nextButton: 'Siguiente: Primer programa'
                        },
                        {
                            title: 'Primer programa interactivo',
                            content: `<pre class="code"><code>&lt;h1 id="saludo"&gt;Hola&lt;/h1&gt;
&lt;input type="text" id="txtNombre" placeholder="Su nombre"&gt;
&lt;button id="btnSaludar"&gt;Saludar&lt;/button&gt;
&lt;p&gt;Clics: &lt;span id="contador"&gt;0&lt;/span&gt;&lt;/p&gt;</code></pre><pre class="code"><code>// js/main.js
let clics = 0;

document.getElementById('btnSaludar').addEventListener('click', () =&gt; {
    const nombre = document.getElementById('txtNombre').value;
    clics++;
    document.getElementById('saludo').textContent = 'Hola, ' + nombre;
    document.getElementById('contador').textContent = clics;
});</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Abra la consola del navegador (F12) para ver errores y probar instrucciones.
</p>`,
                            nextButton: 'Siguiente: Template literals'
                        },
                        {
                            title: 'Plantillas de texto (template literals)',
                            content: `<p>Con comillas invertidas se pueden insertar variables y escribir texto en varias líneas:</p><pre class="code"><code>const nombre = 'Ana';
const edad = 21;

// Concatenación tradicional
console.log('Hola, ' + nombre + '. Tiene ' + edad + ' años');

// Template literal
console.log(\`Hola, \${nombre}. Tiene \${edad} años\`);

// Muy útil para generar HTML
const tarjeta = \`
    &lt;div class="card"&gt;
        &lt;div class="card-body"&gt;\${nombre} (\${edad})&lt;/div&gt;
    &lt;/div&gt;\`;</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm04-tiposOperadores',
                    label: 'Tipos de datos y operadores',
                    steps: [
                        {
                            title: 'Tipos de datos',
                            content: `<table class="table">
                                <tr><th>Tipo</th><th>Ejemplo</th></tr>
                                <tr><td>string</td><td><code>'Ana'</code></td></tr>
                                <tr><td>number</td><td><code>25</code>, <code>3.14</code></td></tr>
                                <tr><td>boolean</td><td><code>true</code>, <code>false</code></td></tr>
                                <tr><td>undefined</td><td>variable sin valor asignado</td></tr>
                                <tr><td>null</td><td>ausencia intencional de valor</td></tr>
                                <tr><td>object</td><td><code>{ nombre: 'Ana', edad: 25 }</code></td></tr>
                                <tr><td>array</td><td><code>[1, 2, 3]</code></td></tr>
                            </table>
                            <p>Se puede conocer el tipo con <code>typeof</code>: <code>typeof 25</code> devuelve <code>'number'</code>.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m04_tipos_datos.png',
                            nextButton: 'Siguiente: Operadores'
                        },
                        {
                            title: 'Operadores',
                            content: `<ul>
                                <li><strong>Aritméticos:</strong> <code>+ - * / % **</code></li>
                                <li><strong>Asignación:</strong> <code>= += -= *= /=</code></li>
                                <li><strong>Comparación:</strong> <code>=== !== &gt; &lt; &gt;= &lt;=</code></li>
                                <li><strong>Lógicos:</strong> <code>&amp;&amp;</code> (y), <code>||</code> (o), <code>!</code> (no)</li>
                            </ul>
<pre class="code"><code>5 == '5'    // true  (convierte tipos)
5 === '5'   // false (compara valor y tipo)
'5' + 2     // '52'  (concatena)
Number('5') + 2  // 7</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Use siempre <code>===</code> y <code>!==</code>. Los valores de un formulario siempre llegan como texto: conviértalos con <code>Number()</code>.
                            </p>`,
                            nextButton: 'Siguiente: Conversión de tipos'
                        },
                        {
                            title: 'Conversión de tipos y valores "falsy"',
                            content: `<pre class="code"><code>Number('25')        // 25
Number('abc')       // NaN (Not a Number)
parseInt('25.7')    // 25
parseFloat('25.7')  // 25.7
String(100)         // '100'
(1500).toFixed(2)   // '1500.00'

isNaN(Number('abc'))   // true → útil para validar</code></pre><p>En una condición, estos valores se consideran <strong>falsos</strong>: <code>false</code>, <code>0</code>, <code>''</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>.</p><pre class="code"><code>const nombre = '';
if (!nombre) {
    console.log('El nombre es obligatorio');
}</code></pre>`,
                            nextButton: 'Siguiente: Ejemplo'
                        },
                        {
                            title: 'Ejemplo: calcular un total',
                            content: `<pre class="code"><code>&lt;input type="number" id="txtPrecio" placeholder="Precio"&gt;
&lt;input type="number" id="txtCantidad" placeholder="Cantidad"&gt;
&lt;button id="btnCalcular"&gt;Calcular&lt;/button&gt;
&lt;p id="resultado"&gt;&lt;/p&gt;</code></pre><pre class="code"><code>const IVA = 0.13;

document.getElementById('btnCalcular').addEventListener('click', () =&gt; {
    const precio = Number(document.getElementById('txtPrecio').value);
    const cantidad = Number(document.getElementById('txtCantidad').value);

    if (isNaN(precio) || isNaN(cantidad) || precio &lt;= 0 || cantidad &lt;= 0) {
        document.getElementById('resultado').textContent = 'Datos inválidos';
        return;
    }

    const subtotal = precio * cantidad;
    const total = subtotal + subtotal * IVA;
    document.getElementById('resultado').textContent = 'Total: ₡' + total.toFixed(2);
});</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm04-estructurasControl',
                    label: 'Estructuras de control',
                    steps: [
                        {
                            title: 'Condicionales',
                            content: `<pre class="code"><code>const nota = 85;

if (nota >= 90) {
    console.log('Excelente');
} else if (nota >= 70) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

switch (dia) {
    case 'sábado':
    case 'domingo':
        console.log('Fin de semana');
        break;
    default:
        console.log('Día hábil');
}

// Operador ternario
const estado = nota >= 70 ? 'Aprobado' : 'Reprobado';</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m04_control.png',
                            nextButton: 'Siguiente: Ciclos'
                        },
                        {
                            title: 'Ciclos',
                            content: `<pre class="code"><code>// for clásico
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while
let intentos = 0;
while (intentos < 3) {
    intentos++;
}

// for...of: recorre los elementos de un arreglo
const frutas = ['mango', 'piña', 'banano'];
for (const fruta of frutas) {
    console.log(fruta);
}</code></pre>`,
                            nextButton: 'Siguiente: Generar HTML'
                        },
                        {
                            title: 'Ejemplo: generar HTML con un ciclo',
                            content: `<pre class="code"><code>&lt;table class="table"&gt;
    &lt;tbody id="tblMultiplicar"&gt;&lt;/tbody&gt;
&lt;/table&gt;</code></pre><pre class="code"><code>const numero = 7;
let filas = '';

for (let i = 1; i &lt;= 10; i++) {
    filas += \`&lt;tr&gt;&lt;td&gt;\${numero} × \${i}&lt;/td&gt;&lt;td&gt;\${numero * i}&lt;/td&gt;&lt;/tr&gt;\`;
}

document.getElementById('tblMultiplicar').innerHTML = filas;</code></pre>`,
                            nextButton: 'Siguiente: break y continue'
                        },
                        {
                            title: 'break, continue y validación con ciclos',
                            content: `<pre class="code"><code>const notas = [85, 40, 92, -5, 70];

// continue: salta los valores inválidos
let suma = 0, validas = 0;
for (const nota of notas) {
    if (nota &lt; 0 || nota &gt; 100) continue;
    suma += nota;
    validas++;
}
console.log('Promedio:', suma / validas);

// break: se detiene al encontrar el primer reprobado
for (const nota of notas) {
    if (nota &lt; 70) {
        console.log('Hay al menos un reprobado:', nota);
        break;
    }
}</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm04-funcionesArreglos',
                    label: 'Funciones y arreglos',
                    steps: [
                        {
                            title: 'Funciones',
                            content: `<pre class="code"><code>// Declaración
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

// Función flecha
const aplicarIVA = (monto) => monto * 1.13;

console.log(aplicarIVA(calcularTotal(1000, 3))); // 3390</code></pre>
                            <p>Las funciones permiten reutilizar código y dividir un problema en partes pequeñas.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m04_funciones_arreglos.png',
                            nextButton: 'Siguiente: Arreglos'
                        },
                        {
                            title: 'Arreglos y métodos',
                            content: `<pre class="code"><code>const notas = [80, 95, 60, 72];

notas.push(88);                         // agrega al final
notas.length;                           // 5
notas.filter(n => n >= 70);             // [80, 95, 72, 88]
notas.map(n => n + 5);                  // suma 5 a cada nota
notas.find(n => n > 90);                // 95
notas.reduce((suma, n) => suma + n, 0); // 395</code></pre>`,
                            nextButton: 'Siguiente: Objetos y JSON'
                        },
                        {
                            title: 'Arreglos de objetos y JSON',
                            content: `<p>Los datos de una aplicación suelen manejarse como arreglos de objetos, igual que los documentos de MongoDB:</p>
<pre class="code"><code>const estudiantes = [
    { nombre: 'Ana',  nota: 90 },
    { nombre: 'Luis', nota: 65 }
];

const aprobados = estudiantes.filter(e => e.nota >= 70);

// Convertir a texto JSON y de vuelta
const texto = JSON.stringify(estudiantes);
const lista = JSON.parse(texto);</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                JSON es el formato con el que el navegador y el servidor intercambian datos.
                            </p>`,
                            nextButton: 'Siguiente: Objetos'
                        },
                        {
                            title: 'Objetos y desestructuración',
                            content: `<pre class="code"><code>const usuario = {
    nombre: 'Ana',
    correo: 'ana@cenfotec.ac.cr',
    rol: 'estudiante',
    saludar() {
        return 'Hola, soy ' + this.nombre;
    }
};

usuario.telefono = '8888-8888';     // agregar propiedad
delete usuario.telefono;           // eliminar propiedad
console.log(usuario.saludar());

// Desestructuración
const { nombre, correo } = usuario;

// Copiar y modificar (spread)
const actualizado = { ...usuario, rol: 'admin' };

// Recorrer propiedades
for (const clave in usuario) {
    console.log(clave, usuario[clave]);
}</code></pre>`,
                            nextButton: 'Siguiente: Carrito de compras'
                        },
                        {
                            title: 'Ejemplo: carrito de compras',
                            content: `<pre class="code"><code>const carrito = [];

function agregar(nombre, precio, cantidad) {
    const existente = carrito.find(p =&gt; p.nombre === nombre);
    if (existente) {
        existente.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, cantidad });
    }
}

function eliminar(nombre) {
    const i = carrito.findIndex(p =&gt; p.nombre === nombre);
    if (i !== -1) carrito.splice(i, 1);
}

function total() {
    return carrito.reduce((suma, p) =&gt; suma + p.precio * p.cantidad, 0);
}

agregar('Café', 1500, 2);
agregar('Té', 1200, 1);
agregar('Café', 1500, 1);
console.log(carrito);   // Café x3, Té x1
console.log(total());   // 5700</code></pre>`,
                            nextButton: 'Siguiente: Ordenar y consultar'
                        },
                        {
                            title: 'Ordenar y consultar arreglos',
                            content: `<pre class="code"><code>const productos = [
    { nombre: 'Café', precio: 1500, stock: 10 },
    { nombre: 'Té', precio: 1200, stock: 0 },
    { nombre: 'Queque', precio: 2000, stock: 5 }
];

// Ordenar por precio (menor a mayor)
productos.sort((a, b) =&gt; a.precio - b.precio);

// Ordenar por nombre
productos.sort((a, b) =&gt; a.nombre.localeCompare(b.nombre));

productos.some(p =&gt; p.stock === 0);    // true: ¿alguno agotado?
productos.every(p =&gt; p.precio &gt; 1000); // true: ¿todos cuestan más de 1000?
productos.map(p =&gt; p.nombre).includes('Té'); // true

// Buscar por texto
const texto = 'ca';
productos.filter(p =&gt; p.nombre.toLowerCase().includes(texto));</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm04-apiNavegador',
                    label: 'Interfaz de programación de aplicaciones en la navegación',
                    steps: [
                        {
                            title: 'El DOM',
                            content: `<p>El <strong>DOM</strong> (Document Object Model) es la representación de la página como un árbol de objetos que JavaScript puede leer y modificar.</p>
<pre class="code"><code>const titulo = document.getElementById('titulo');
const botones = document.querySelectorAll('.btn');

titulo.textContent = 'Nuevo título';
titulo.classList.add('activo');

const item = document.createElement('li');
item.textContent = 'Nuevo elemento';
document.querySelector('#lista').appendChild(item);</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m04_dom.png',
                            nextButton: 'Siguiente: Eventos'
                        },
                        {
                            title: 'Eventos',
                            content: `<pre class="code"><code>const boton = document.getElementById('btnSaludar');

boton.addEventListener('click', () => {
    const nombre = document.getElementById('txtNombre').value;
    document.getElementById('salida').textContent = 'Hola, ' + nombre;
});</code></pre>
                            <p>Eventos comunes: <code>click</code>, <code>submit</code>, <code>input</code>, <code>change</code>, <code>keyup</code>, <code>DOMContentLoaded</code>.</p>`,
                            nextButton: 'Siguiente: Otras APIs'
                        },
                        {
                            title: 'Otras APIs del navegador',
                            content: `<ul>
                                <li><strong>fetch:</strong> hace solicitudes HTTP al servidor (se usará en el módulo 6).</li>
                                <li><strong>localStorage / sessionStorage:</strong> guardan datos simples en el navegador.</li>
                                <li><strong>window.location:</strong> lee o cambia la URL actual.</li>
                                <li><strong>setTimeout / setInterval:</strong> ejecutan código después de un tiempo.</li>
                            </ul>
<pre class="code"><code>localStorage.setItem('tema', 'oscuro');
const tema = localStorage.getItem('tema');

window.location.href = 'catalogo.html';</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Nunca guarde contraseñas ni datos sensibles en localStorage.
                            </p>`,
                            nextButton: 'Siguiente: async/await'
                        },
                        {
                            title: 'Asincronía: promesas y async/await',
                            content: `<p>Las operaciones que toman tiempo (consultar un servidor) son <strong>asíncronas</strong>: el programa no se detiene a esperarlas. <code>async/await</code> permite escribirlas como si fueran secuenciales:</p><pre class="code"><code>async function cargarProductos() {
    try {
        const respuesta = await fetch('/api/productos');
        if (!respuesta.ok) throw new Error('Error ' + respuesta.status);

        const productos = await respuesta.json();
        console.log(productos);
    } catch (error) {
        console.error('No se pudieron cargar:', error.message);
    }
}

cargarProductos();</code></pre><p>
    <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
    <code>await</code> solo puede usarse dentro de una función marcada con <code>async</code>.
</p>`,
                            nextButton: 'Siguiente: Mostrar en tarjetas'
                        },
                        {
                            title: 'Ejemplo: mostrar datos en tarjetas Bootstrap',
                            content: `<pre class="code"><code>&lt;div class="container"&gt;
    &lt;div class="row g-3" id="contenedorLabs"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre class="code"><code>async function mostrarLaboratorios() {
    const respuesta = await fetch('/api/laboratorios');
    const labs = await respuesta.json();

    const contenedor = document.getElementById('contenedorLabs');
    contenedor.innerHTML = '';

    labs.forEach(lab =&gt; {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = \`
            &lt;div class="card h-100"&gt;
                &lt;div class="card-body"&gt;
                    &lt;h5 class="card-title"&gt;&lt;/h5&gt;
                    &lt;p class="card-text"&gt;Capacidad: \${lab.capacidad}&lt;/p&gt;
                &lt;/div&gt;
            &lt;/div&gt;\`;
        col.querySelector('.card-title').textContent = lab.nombre; // texto seguro
        contenedor.appendChild(col);
    });
}

document.addEventListener('DOMContentLoaded', mostrarLaboratorios);</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Los textos escritos por usuarios se asignan con <code>textContent</code>, no dentro del HTML, para evitar inyección de código (XSS).
</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm04-nodejs',
                    label: 'Entorno de ejecución Node.js',
                    steps: [
                        {
                            title: '¿Qué es Node.js?',
                            content: `<p>Node.js es un entorno que permite <strong>ejecutar JavaScript fuera del navegador</strong>, por ejemplo en un servidor. Usa el motor V8 de Chrome.</p>
                            <p>Con Node.js se puede usar el mismo lenguaje en el cliente (frontend) y en el servidor (backend).</p>
<pre class="code"><code>// hola.js
console.log('Hola desde Node.js');</code></pre>
<pre class="code"><code>// En la terminal
node -v          # verifica la versión instalada
node hola.js     # ejecuta el archivo</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m04_nodejs.png',
                            nextButton: 'Siguiente: npm'
                        },
                        {
                            title: 'npm y package.json',
                            content: `<p><strong>npm</strong> (Node Package Manager) instala bibliotecas de terceros.</p>
<pre class="code"><code>npm init -y            # crea package.json
npm install express    # instala una dependencia
npm install            # reinstala todo lo de package.json</code></pre>
                            <p>El archivo <code>package.json</code> describe el proyecto y sus dependencias. La carpeta <code>node_modules</code> contiene las bibliotecas instaladas.</p>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                <code>node_modules</code> no se sube al repositorio: se agrega al archivo <code>.gitignore</code>.
                            </p>`,
                            nextButton: 'Siguiente: Módulos'
                        },
                        {
                            title: 'Módulos en Node.js',
                            content: `<p>El código se divide en archivos (módulos) que se exportan e importan:</p>
<pre class="code"><code>// utilidades.js
function sumar(a, b) {
    return a + b;
}
module.exports = { sumar };

// app.js
const { sumar } = require('./utilidades');
console.log(sumar(2, 3)); // 5</code></pre>
                            <p>Node también trae módulos propios como <code>fs</code> (archivos), <code>path</code> (rutas) y <code>http</code> (servidor).</p>`,
                            nextButton: 'Siguiente: Scripts de npm'
                        },
                        {
                            title: 'Scripts de npm',
                            content: `<p>En <code>package.json</code> se definen comandos para no tener que recordarlos:</p><pre class="code"><code>{
  "name": "proyecto-reservas",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    "express": "^4.19.2",
    "mongoose": "^8.5.0"
  }
}</code></pre><pre class="code"><code>npm run dev     # desarrollo (reinicia al guardar)
npm start       # producción</code></pre>`,
                            nextButton: 'Siguiente: Módulo fs'
                        },
                        {
                            title: 'Leer y escribir archivos con fs',
                            content: `<pre class="code"><code>const fs = require('fs');
const path = require('path');

const ruta = path.join(__dirname, 'datos', 'productos.json');

// Leer
const texto = fs.readFileSync(ruta, 'utf-8');
const productos = JSON.parse(texto);

// Modificar y guardar
productos.push({ nombre: 'Galleta', precio: 800 });
fs.writeFileSync(ruta, JSON.stringify(productos, null, 2));

console.log('Productos guardados:', productos.length);</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Guardar en archivos sirve para practicar, pero no soporta varios usuarios a la vez: por eso el proyecto usa MongoDB Atlas.
</p>`,
                            nextButton: 'Siguiente: Servidor básico'
                        },
                        {
                            title: 'Un servidor web básico',
                            content: `<p>Con el módulo <code>http</code> de Node se puede crear un servidor sin instalar nada:</p><pre class="code"><code>const http = require('http');

const servidor = http.createServer((req, res) =&gt; {
    if (req.url === '/api/saludo') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensaje: 'Hola desde Node' }));
    } else {
        res.writeHead(404);
        res.end('No encontrado');
    }
});

servidor.listen(3000, () =&gt; console.log('http://localhost:3000'));</code></pre><p>En el módulo 6 se usa <strong>Express</strong>, que simplifica las rutas, el manejo de JSON y los archivos estáticos.</p>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },

        // =====================================================================
        // MÓDULO 5: BIBLIOTECA MULTIPLATAFORMA JQUERY
        // =====================================================================
        {
            id: 'modulo_05',
            label: 'jQuery',
            subtemas: [
                {
                    id: 'm05-introduccion',
                    label: 'Introducción a jQuery',
                    steps: [
                        {
                            title: '¿Qué es jQuery?',
                            content: `<p>jQuery es una biblioteca de JavaScript que <strong>simplifica</strong> la manipulación del DOM, el manejo de eventos, las animaciones y las solicitudes al servidor, con un código más corto y compatible entre navegadores.</p>
                            <p>Su lema: <em>"Write less, do more"</em>.</p>
<pre class="code"><code>// JavaScript puro
document.getElementById('titulo').style.color = 'red';

// jQuery
$('#titulo').css('color', 'red');</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m05_jquery.png',
                            nextButton: 'Siguiente: Cómo incluirla'
                        },
                        {
                            title: 'Cómo incluir jQuery',
                            content: `<pre class="code"><code>&lt;script src="https://code.jquery.com/jquery-3.7.1.min.js"&gt;&lt;/script&gt;
&lt;script src="js/main.js"&gt;&lt;/script&gt;</code></pre>
<pre class="code"><code>// main.js: espera a que el DOM esté listo
$(function () {
    console.log('jQuery está listo');
});</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                El script de jQuery debe cargarse <strong>antes</strong> que los archivos que lo usan.
                            </p>`,
                            nextButton: 'Siguiente: Con Bootstrap'
                        },
                        {
                            title: 'jQuery y Bootstrap juntos',
                            content: `<p>El orden de carga de los scripts al final del <code>&lt;body&gt;</code> es importante:</p><pre class="code"><code>    &lt;!-- 1. jQuery --&gt;
    &lt;script src="https://code.jquery.com/jquery-3.7.1.min.js"&gt;&lt;/script&gt;
    &lt;!-- 2. Bootstrap --&gt;
    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
    &lt;!-- 3. Su código --&gt;
    &lt;script src="js/main.js"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre><pre class="code"><code>$(function () {
    // Mostrar una alerta de Bootstrap que se oculta sola
    $('#alerta').removeClass('d-none').hide().fadeIn(300);
    setTimeout(() =&gt; $('#alerta').fadeOut(300), 3000);
});</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm05-selectores',
                    label: 'Selectores',
                    steps: [
                        {
                            title: 'Selectores básicos',
                            content: `<p>jQuery usa la misma sintaxis de selectores de CSS:</p>
                            <table class="table">
                                <tr><th>Selector</th><th>Selecciona</th></tr>
                                <tr><td><code>$('p')</code></td><td>Todos los párrafos</td></tr>
                                <tr><td><code>$('#menu')</code></td><td>El elemento con id "menu"</td></tr>
                                <tr><td><code>$('.btn')</code></td><td>Elementos con la clase "btn"</td></tr>
                                <tr><td><code>$('ul li')</code></td><td>Los li dentro de un ul</td></tr>
                                <tr><td><code>$('input[type="email"]')</code></td><td>Por atributo</td></tr>
                            </table>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m05_selectores.png',
                            nextButton: 'Siguiente: Filtros y recorrido'
                        },
                        {
                            title: 'Filtros y recorrido del DOM',
                            content: `<pre class="code"><code>$('tr:even')            // filas pares
$('li:first')           // primer li
$('input:checked')      // casillas marcadas

$('#lista').children()  // hijos directos
$('.item').parent()     // elemento padre
$('#tabla').find('td')  // descendientes que sean td
$('li').eq(2)           // el tercer li</code></pre>`,
                            nextButton: 'Siguiente: Ejemplo: filtro'
                        },
                        {
                            title: 'Ejemplo: filtrar una lista en tiempo real',
                            content: `<pre class="code"><code>&lt;input type="text" id="txtFiltro" class="form-control mb-3" placeholder="Buscar laboratorio..."&gt;
&lt;ul class="list-group" id="lstLabs"&gt;
    &lt;li class="list-group-item"&gt;Lab 3-12 Redes&lt;/li&gt;
    &lt;li class="list-group-item"&gt;Lab 3-14 Programación&lt;/li&gt;
    &lt;li class="list-group-item"&gt;Lab 2-05 Diseño&lt;/li&gt;
&lt;/ul&gt;</code></pre><pre class="code"><code>$('#txtFiltro').on('input', function () {
    const texto = $(this).val().toLowerCase();

    $('#lstLabs li').each(function () {
        const coincide = $(this).text().toLowerCase().includes(texto);
        $(this).toggle(coincide);   // muestra u oculta
    });
});</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm05-manipulacion',
                    label: 'Manipulación de la estructura de contenido',
                    steps: [
                        {
                            title: 'Leer y modificar contenido',
                            content: `<pre class="code"><code>$('#titulo').text('Nuevo título');        // texto
$('#contenedor').html('&lt;b&gt;Hola&lt;/b&gt;');  // HTML
const nombre = $('#txtNombre').val();      // valor de un input
$('#txtNombre').val('');                   // limpiar input

$('img').attr('alt', 'Descripción');       // atributos
$('.caja').css('background', '#eee');      // estilos
$('.caja').addClass('activa').removeClass('oculta');</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m05_manipulacion.png',
                            nextButton: 'Siguiente: Agregar y eliminar'
                        },
                        {
                            title: 'Agregar, eliminar y mostrar elementos',
                            content: `<pre class="code"><code>$('#lista').append('&lt;li&gt;Al final&lt;/li&gt;');
$('#lista').prepend('&lt;li&gt;Al inicio&lt;/li&gt;');
$('.temporal').remove();
$('#tabla tbody').empty();   // vacía el contenido

$('#mensaje').hide();
$('#mensaje').fadeIn(400);
$('#panel').slideToggle();</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Un uso típico: recorrer un arreglo de datos recibidos del servidor y agregar una fila a una tabla por cada elemento.
                            </p>`,
                            nextButton: 'Siguiente: Ejemplo'
                        },
                        {
                            title: 'Ejemplo: llenar una tabla',
                            content: `<pre class="code"><code>const productos = [
    { nombre: 'Café', precio: 1500 },
    { nombre: 'Té',   precio: 1200 }
];

const $tbody = $('#tblProductos tbody');
$tbody.empty();

$.each(productos, function (i, p) {
    $tbody.append(
        '&lt;tr&gt;&lt;td&gt;' + p.nombre + '&lt;/td&gt;&lt;td&gt;₡' + p.precio + '&lt;/td&gt;&lt;/tr&gt;'
    );
});</code></pre>`,
                            nextButton: 'Siguiente: Tarjetas dinámicas'
                        },
                        {
                            title: 'Generar tarjetas dinámicamente',
                            content: `<pre class="code"><code>const labs = [
    { nombre: 'Lab 3-12', capacidad: 30 },
    { nombre: 'Lab 3-14', capacidad: 25 }
];

const $contenedor = $('#contenedorLabs').empty();

labs.forEach(lab =&gt; {
    const $col = $('&lt;div class="col-md-4"&gt;&lt;/div&gt;');
    const $card = $('&lt;div class="card h-100"&gt;&lt;div class="card-body"&gt;&lt;/div&gt;&lt;/div&gt;');

    $card.find('.card-body')
        .append($('&lt;h5 class="card-title"&gt;&lt;/h5&gt;').text(lab.nombre))
        .append($('&lt;p class="card-text"&gt;&lt;/p&gt;').text('Capacidad: ' + lab.capacidad))
        .append('&lt;button class="btn btn-primary btn-reservar"&gt;Reservar&lt;/button&gt;');

    $col.append($card).appendTo($contenedor);
});</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Crear elementos con <code>$('&lt;etiqueta&gt;')</code> y asignar el texto con <code>.text()</code> evita inyectar HTML no deseado.
</p>`,
                            nextButton: 'Siguiente: Formularios con jQuery'
                        },
                        {
                            title: 'Leer, llenar y limpiar formularios',
                            content: `<pre class="code"><code>// Convertir el formulario en objeto
function datosFormulario($form) {
    const datos = {};
    $.each($form.serializeArray(), (i, campo) =&gt; datos[campo.name] = campo.value);
    return datos;
}

const datos = datosFormulario($('#frmReserva'));

// Llenar un formulario para editar
function llenarFormulario(reserva) {
    $('#selLab').val(reserva.laboratorio);
    $('#txtFecha').val(reserva.fecha.slice(0, 10));
    $(\`input[name="bloque"][value="\${reserva.bloque}"]\`).prop('checked', true);
}

// Llenar un &lt;select&gt; desde un arreglo
function llenarSelect(labs) {
    const $sel = $('#selLab').empty().append('&lt;option value=""&gt;Seleccione...&lt;/option&gt;');
    labs.forEach(l =&gt; $sel.append($('&lt;option&gt;').val(l._id).text(l.nombre)));
}

// Limpiar
$('#frmReserva')[0].reset();
$('#frmReserva .is-invalid').removeClass('is-invalid');</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm05-eventos',
                    label: 'Manejo de eventos con jQuery',
                    steps: [
                        {
                            title: 'Eventos con .on()',
                            content: `<pre class="code"><code>$('#btnGuardar').on('click', function () {
    alert('Guardado');
});

$('#txtBuscar').on('keyup', function () {
    console.log($(this).val());
});

$('#frmRegistro').on('submit', function (e) {
    e.preventDefault();
    // validar y enviar datos
});</code></pre>
                            <p><code>$(this)</code> hace referencia al elemento que disparó el evento.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m05_eventos.png',
                            nextButton: 'Siguiente: Delegación'
                        },
                        {
                            title: 'Delegación de eventos',
                            content: `<p>Los elementos agregados dinámicamente (por ejemplo, filas nuevas de una tabla) no reciben eventos asignados antes. La solución es <strong>delegar</strong> el evento en un elemento padre que sí existe:</p>
<pre class="code"><code>$('#tblProductos').on('click', '.btn-eliminar', function () {
    $(this).closest('tr').remove();
});</code></pre>`,
                            nextButton: 'Siguiente: AJAX'
                        },
                        {
                            title: 'Solicitudes al servidor con jQuery (AJAX)',
                            content: `<pre class="code"><code>$.ajax({
    url: '/api/productos',
    method: 'GET',
    success: function (datos) {
        console.log(datos);
    },
    error: function () {
        alert('No se pudieron cargar los productos');
    }
});</code></pre>
                            <p>Esta misma idea se retoma en el módulo 6 con <code>fetch</code> para enviar y recibir datos de la API construida con Express.</p>`,
                            nextButton: 'Siguiente: Validar con jQuery'
                        },
                        {
                            title: 'Validar un formulario con jQuery y Bootstrap',
                            content: `<pre class="code"><code>$('#frmRegistro').on('submit', function (e) {
    e.preventDefault();
    let valido = true;

    const $nombre = $('#txtNombre');
    if ($nombre.val().trim().length &lt; 3) {
        $nombre.addClass('is-invalid');
        valido = false;
    } else {
        $nombre.removeClass('is-invalid').addClass('is-valid');
    }

    const $correo = $('#txtCorreo');
    const correoOk = /^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test($correo.val());
    $correo.toggleClass('is-invalid', !correoOk).toggleClass('is-valid', correoOk);
    valido = valido &amp;&amp; correoOk;

    if (valido) {
        // enviar datos al servidor
    }
});

// Quitar el error mientras el usuario corrige
$('#frmRegistro input').on('input', function () {
    $(this).removeClass('is-invalid');
});</code></pre>`,
                            nextButton: 'Siguiente: Modal con jQuery'
                        },
                        {
                            title: 'Modal de confirmación con jQuery',
                            content: `<p>Se combina la delegación de eventos con el modal de Bootstrap del módulo 3:</p><pre class="code"><code>const modal = new bootstrap.Modal('#mdlConfirmar');
let idSeleccionado = null;

// Botón "Eliminar" de cada fila (creada dinámicamente)
$('#tblReservas').on('click', '.btn-eliminar', function () {
    idSeleccionado = $(this).data('id');     // lee data-id="..."
    modal.show();
});

// Confirmar dentro del modal
$('#btnEliminar').on('click', function () {
    $(\`#tblReservas tr[data-id="\${idSeleccionado}"]\`).fadeOut(300, function () {
        $(this).remove();
    });
    modal.hide();
});</code></pre>`,
                            nextButton: 'Siguiente: POST con jQuery'
                        },
                        {
                            title: 'Enviar datos con $.ajax (POST)',
                            content: `<pre class="code"><code>$('#frmReserva').on('submit', function (e) {
    e.preventDefault();

    $.ajax({
        url: '/api/reservas',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            laboratorio: $('#selLab').val(),
            fecha: $('#txtFecha').val(),
            bloque: $('input[name="bloque"]:checked').val()
        }),
        success: function (reserva) {
            $('#alerta').removeClass('d-none alert-danger').addClass('alert-success')
                        .text('Reserva creada');
            $('#frmReserva')[0].reset();
        },
        error: function (xhr) {
            $('#alerta').removeClass('d-none alert-success').addClass('alert-danger')
                        .text(xhr.responseJSON?.mensaje || 'Error al reservar');
        }
    });
});</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },

        // =====================================================================
        // MÓDULO 6: DESARROLLO DE APLICACIONES
        // (Node.js + Express + MongoDB Atlas + Mongoose)
        // =====================================================================
        {
            id: 'modulo_06',
            label: 'Desarrollo de aplicaciones',
            subtemas: [
                {
                    id: 'm06-estructura',
                    label: 'Estructura de la aplicación',
                    steps: [
                        {
                            title: 'Arquitectura cliente-servidor',
                            content: `<p>La aplicación del proyecto se divide en tres capas:</p>
                            <ul>
                                <li><strong>Frontend (cliente):</strong> HTML, CSS, JavaScript/jQuery en el navegador.</li>
                                <li><strong>Backend (servidor):</strong> Node.js con Express; expone una API que recibe y responde solicitudes.</li>
                                <li><strong>Base de datos:</strong> MongoDB Atlas (en la nube), accedida mediante Mongoose.</li>
                            </ul>
                            <p><strong>Navegador ⇄ (HTTP / JSON) ⇄ Express ⇄ (Mongoose) ⇄ MongoDB Atlas</strong></p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m06_arquitectura.png',
                            nextButton: 'Siguiente: Estructura de carpetas'
                        },
                        {
                            title: 'Estructura de carpetas',
                            content: `<pre class="code"><code>proyecto/
├── public/              ← frontend
│   ├── index.html
│   ├── css/
│   └── js/
├── models/              ← esquemas de Mongoose
│   └── usuario.js
├── routes/              ← rutas de la API
│   └── usuarios.js
├── .env                 ← variables secretas (no se sube)
├── .gitignore
├── package.json
└── app.js               ← punto de entrada del servidor</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Cada colección de la base de datos suele tener su propio modelo y su propio archivo de rutas.
                            </p>`,
                            nextButton: 'Siguiente: API REST'
                        },
                        {
                            title: 'API REST',
                            content: `<p>El servidor expone recursos mediante URLs y métodos HTTP:</p>
                            <table class="table">
                                <tr><th>Método</th><th>Ruta</th><th>Acción</th></tr>
                                <tr><td>GET</td><td>/api/usuarios</td><td>Listar usuarios</td></tr>
                                <tr><td>GET</td><td>/api/usuarios/:id</td><td>Obtener un usuario</td></tr>
                                <tr><td>POST</td><td>/api/usuarios</td><td>Crear usuario</td></tr>
                                <tr><td>PUT</td><td>/api/usuarios/:id</td><td>Actualizar usuario</td></tr>
                                <tr><td>DELETE</td><td>/api/usuarios/:id</td><td>Eliminar usuario</td></tr>
                            </table>
                            <p>Estas operaciones corresponden al CRUD: <strong>C</strong>reate, <strong>R</strong>ead, <strong>U</strong>pdate, <strong>D</strong>elete.</p>`,
                            nextButton: 'Siguiente: Middleware'
                        },
                        {
                            title: 'Middleware en Express',
                            content: `<p>Un <strong>middleware</strong> es una función que se ejecuta entre la solicitud y la respuesta. Recibe <code>req</code>, <code>res</code> y <code>next</code>:</p><pre class="code"><code>// Registrar cada solicitud en la consola
app.use((req, res, next) =&gt; {
    console.log(new Date().toISOString(), req.method, req.url);
    next();                 // continúa al siguiente middleware o ruta
});

app.use(express.json());
app.use(express.static('public'));
app.use('/api/reservas', require('./routes/reservas'));

// Ruta no encontrada
app.use((req, res) =&gt; res.status(404).json({ mensaje: 'Ruta no encontrada' }));

// Manejador de errores (4 parámetros)
app.use((err, req, res, next) =&gt; {
    console.error(err);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
});</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    El orden importa: Express ejecuta los middlewares en el orden en que se registran.
</p>`,
                            nextButton: 'Siguiente: Controladores'
                        },
                        {
                            title: 'Separar rutas y controladores',
                            content: `<pre class="code"><code>proyecto/
├── controllers/
│   └── reservas.controller.js   ← lógica
├── routes/
│   └── reservas.routes.js       ← solo las URLs
└── models/
    └── reserva.js</code></pre><pre class="code"><code>// controllers/reservas.controller.js
const Reserva = require('../models/reserva');

exports.listar = async (req, res) =&gt; {
    const reservas = await Reserva.find().populate('laboratorio', 'nombre');
    res.json(reservas);
};

exports.crear = async (req, res) =&gt; {
    const reserva = await Reserva.create(req.body);
    res.status(201).json(reserva);
};</code></pre><pre class="code"><code>// routes/reservas.routes.js
const router = require('express').Router();
const ctrl = require('../controllers/reservas.controller');

router.get('/', ctrl.listar);
router.post('/', ctrl.crear);

module.exports = router;</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm06-nodejs',
                    label: 'Entorno de ejecución Node.js',
                    steps: [
                        {
                            title: 'Preparar el proyecto',
                            content: `<pre class="code"><code>mkdir proyecto && cd proyecto
npm init -y
npm install express mongoose dotenv
npm install --save-dev nodemon</code></pre>
                            <ul>
                                <li><strong>express:</strong> framework para crear el servidor y las rutas.</li>
                                <li><strong>mongoose:</strong> conecta con MongoDB y define esquemas.</li>
                                <li><strong>dotenv:</strong> lee variables del archivo <code>.env</code>.</li>
                                <li><strong>nodemon:</strong> reinicia el servidor al guardar cambios.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m06_stack.png',
                            nextButton: 'Siguiente: MongoDB Atlas'
                        },
                        {
                            title: 'Configurar MongoDB Atlas',
                            content: `<ol>
                                <li>Crear una cuenta en MongoDB Atlas y un clúster gratuito (M0).</li>
                                <li>En <strong>Database Access</strong>, crear un usuario y contraseña de base de datos.</li>
                                <li>En <strong>Network Access</strong>, permitir la IP desde donde se conectará.</li>
                                <li>En <strong>Connect → Drivers</strong>, copiar la cadena de conexión.</li>
                            </ol>
<pre class="code"><code># .env
MONGO_URI=mongodb+srv://usuario:clave@cluster0.xxxxx.mongodb.net/proyecto
PORT=3000</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                El archivo <code>.env</code> contiene credenciales: agréguelo a <code>.gitignore</code> y nunca lo suba a GitHub.
                            </p>`,
                            nextButton: 'Siguiente: Servidor con Express'
                        },
                        {
                            title: 'Servidor con Express y conexión a la BD',
                            content: `<pre class="code"><code>// app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());            // interpreta JSON del body
app.use(express.static('public'));  // sirve el frontend

app.use('/api/usuarios', require('./routes/usuarios'));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Conectado a MongoDB Atlas');
        app.listen(process.env.PORT, () =>
            console.log('Servidor en http://localhost:' + process.env.PORT));
    })
    .catch(err => console.error('Error de conexión:', err.message));</code></pre>`,
                            nextButton: 'Siguiente: Modelo con Mongoose'
                        },
                        {
                            title: 'Del modelo de datos al esquema de Mongoose',
                            content: `<p>El modelado hecho en el módulo 2 se traduce en un <strong>esquema</strong>: define los campos, sus tipos y sus reglas de validación.</p>
<pre class="code"><code>// models/usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre:   { type: String, required: true, trim: true },
    correo:   { type: String, required: true, unique: true, lowercase: true },
    clave:    { type: String, required: true, minlength: 8 },
    rol:      { type: String, enum: ['cliente', 'admin'], default: 'cliente' },
    pedidos:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pedido' }]
}, { timestamps: true });

module.exports = mongoose.model('Usuario', usuarioSchema);</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Antes de programar, dibuje sus entidades, atributos y relaciones, y decida qué se embebe y qué se referencia. El esquema es el reflejo de esas decisiones.
                            </p>`,
                            nextButton: 'Siguiente: Subdocumentos'
                        },
                        {
                            title: 'Modelo con subdocumentos y referencias',
                            content: `<p>Así se implementa en Mongoose el modelo de pedidos diseñado en el módulo 2: el cliente se <strong>referencia</strong> y el detalle se <strong>embebe</strong>.</p><pre class="code"><code>// models/pedido.js
const mongoose = require('mongoose');

const detalleSchema = new mongoose.Schema({
    producto: { type: String, required: true },
    cantidad: { type: Number, required: true, min: 1 },
    precio:   { type: Number, required: true, min: 0 }
}, { _id: false });

const pedidoSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    detalle: {
        type: [detalleSchema],
        validate: [d =&gt; d.length &gt; 0, 'El pedido debe tener al menos un producto']
    },
    estado:  { type: String, enum: ['creado', 'pagado', 'enviado'], default: 'creado' }
}, { timestamps: true });

// Campo calculado (no se guarda en la BD)
pedidoSchema.virtual('total').get(function () {
    return this.detalle.reduce((s, d) =&gt; s + d.cantidad * d.precio, 0);
});
pedidoSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Pedido', pedidoSchema);</code></pre>`,
                            nextButton: 'Siguiente: Validaciones en el esquema'
                        },
                        {
                            title: 'Validaciones personalizadas en el esquema',
                            content: `<pre class="code"><code>const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'Mínimo 3 caracteres']
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/, 'Correo inválido']
    },
    cedula: {
        type: String,
        validate: {
            validator: v =&gt; /^\\d{9}$/.test(v),
            message: props =&gt; \`\${props.value} no es una cédula válida\`
        }
    },
    edad: { type: Number, min: [18, 'Debe ser mayor de edad'] }
});</code></pre><p>Cuando un dato no cumple, <code>save()</code> o <code>create()</code> lanzan un <code>ValidationError</code> con el mensaje definido, que se puede devolver al frontend.</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm06-git',
                    label: 'Gestión de código fuente',
                    steps: [
                        {
                            title: 'Control de versiones con Git',
                            content: `<p>Git registra la historia de cambios del proyecto y permite que varias personas trabajen en el mismo código.</p>
<pre class="code"><code>git init                          # inicia el repositorio
git add .                         # prepara los cambios
git commit -m "Crea modelo Usuario"
git remote add origin https://github.com/usuario/proyecto.git
git push -u origin main           # sube a GitHub
git pull                          # trae cambios del equipo</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m06_git.png',
                            nextButton: 'Siguiente: Ramas'
                        },
                        {
                            title: 'Ramas y trabajo en equipo',
                            content: `<pre class="code"><code>git checkout -b feature/registro   # crea y cambia a una rama
# ... trabajar y hacer commits ...
git push origin feature/registro</code></pre>
                            <p>Luego se crea un <strong>Pull Request</strong> en GitHub para que el equipo revise el código antes de unirlo a <code>main</code>.</p>
                            <ul>
                                <li>Haga commits pequeños y con mensajes descriptivos.</li>
                                <li>Haga <code>git pull</code> antes de empezar a trabajar.</li>
                                <li>Resuelva los conflictos con cuidado y pruebe antes de subir.</li>
                            </ul>`,
                            nextButton: 'Siguiente: .gitignore'
                        },
                        {
                            title: 'Archivo .gitignore',
                            content: `<pre class="code"><code># .gitignore
node_modules/
.env</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Si por error sube el archivo <code>.env</code>, cambie de inmediato la contraseña del usuario de base de datos en Atlas: eliminar el archivo no borra el historial.
                            </p>`,
                            nextButton: 'Siguiente: Flujo del equipo'
                        },
                        {
                            title: 'Flujo de trabajo del equipo',
                            content: `<pre class="code"><code># 1. Actualizar main
git checkout main
git pull

# 2. Crear la rama de la tarea
git checkout -b feature/RF-05-cancelar-reserva

# 3. Trabajar y guardar avances
git add .
git commit -m "RF-05: ruta DELETE /api/reservas/:id"

# 4. Traer cambios recientes de main y resolver conflictos
git pull origin main

# 5. Subir la rama y abrir el Pull Request en GitHub
git push -u origin feature/RF-05-cancelar-reserva</code></pre>`,
                            nextButton: 'Siguiente: Conflictos'
                        },
                        {
                            title: 'Resolver un conflicto',
                            content: `<p>Un conflicto ocurre cuando dos personas cambian las mismas líneas. Git marca el archivo así:</p><pre class="code"><code>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
const PUERTO = 3000;
=======
const PUERTO = process.env.PORT || 3000;
&gt;&gt;&gt;&gt;&gt;&gt;&gt; feature/despliegue</code></pre><ol><li>Decida qué versión conservar (o combine ambas).</li><li>Borre las marcas <code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code>=======</code> y <code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.</li><li>Pruebe y haga <code>git add</code> + <code>git commit</code>.</li></ol><pre class="code"><code>git status          # muestra los archivos en conflicto
git log --oneline   # historial resumido
git diff            # cambios no guardados</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm06-envioDatos',
                    label: 'Envío de datos al servidor',
                    steps: [
                        {
                            title: 'Rutas en Express (backend)',
                            content: `<pre class="code"><code>// routes/usuarios.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Crear
router.post('/', async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json(usuario);
    } catch (err) {
        res.status(400).json({ mensaje: err.message });
    }
});

// Listar
router.get('/', async (req, res) => {
    const usuarios = await Usuario.find().select('-clave');
    res.json(usuarios);
});

module.exports = router;</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m06_crud.png',
                            nextButton: 'Siguiente: Enviar desde el frontend'
                        },
                        {
                            title: 'Enviar datos desde el frontend con fetch',
                            content: `<pre class="code"><code>// public/js/registro.js
$('#frmRegistro').on('submit', async function (e) {
    e.preventDefault();

    const datos = {
        nombre: $('#txtNombre').val(),
        correo: $('#txtCorreo').val(),
        clave:  $('#txtClave').val()
    };

    const respuesta = await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    if (respuesta.ok) {
        alert('Usuario registrado');
    } else {
        const error = await respuesta.json();
        alert('Error: ' + error.mensaje);
    }
});</code></pre>`,
                            nextButton: 'Siguiente: Consultas'
                        },
                        {
                            title: 'Operaciones básicas con Mongoose',
                            content: `<pre class="code"><code>await Usuario.create({ nombre: 'Ana', correo: 'ana@mail.com', clave: '...' });
await Usuario.find({ rol: 'admin' });
await Usuario.findById(id);
await Usuario.findByIdAndUpdate(id, { nombre: 'Ana M.' }, { new: true });
await Usuario.findByIdAndDelete(id);

// Traer los documentos referenciados
await Usuario.findById(id).populate('pedidos');</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                <code>populate()</code> reemplaza los ObjectId referenciados por los documentos completos; úselo cuando la relación se modeló por referencia.
                            </p>`,
                            nextButton: 'Siguiente: CRUD completo'
                        },
                        {
                            title: 'CRUD completo en Express',
                            content: `<pre class="code"><code>// routes/laboratorios.js
const router = require('express').Router();
const Laboratorio = require('../models/laboratorio');

// Obtener uno
router.get('/:id', async (req, res) =&gt; {
    const lab = await Laboratorio.findById(req.params.id);
    if (!lab) return res.status(404).json({ mensaje: 'No existe' });
    res.json(lab);
});

// Actualizar
router.put('/:id', async (req, res) =&gt; {
    try {
        const lab = await Laboratorio.findByIdAndUpdate(
            req.params.id,
            { nombre: req.body.nombre, capacidad: req.body.capacidad },
            { new: true, runValidators: true }
        );
        if (!lab) return res.status(404).json({ mensaje: 'No existe' });
        res.json(lab);
    } catch (err) {
        res.status(400).json({ mensaje: err.message });
    }
});

// Eliminar
router.delete('/:id', async (req, res) =&gt; {
    const lab = await Laboratorio.findByIdAndDelete(req.params.id);
    if (!lab) return res.status(404).json({ mensaje: 'No existe' });
    res.json({ mensaje: 'Eliminado' });
});

module.exports = router;</code></pre><p>
    <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
    Use <code>runValidators: true</code> en las actualizaciones; de lo contrario Mongoose no aplica las validaciones del esquema.
</p>`,
                            nextButton: 'Siguiente: Listar en tabla'
                        },
                        {
                            title: 'Listar en una tabla Bootstrap',
                            content: `<pre class="code"><code>&lt;table class="table table-hover"&gt;
    &lt;thead&gt;&lt;tr&gt;&lt;th&gt;Nombre&lt;/th&gt;&lt;th&gt;Capacidad&lt;/th&gt;&lt;th&gt;&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
    &lt;tbody id="tbodyLabs"&gt;&lt;/tbody&gt;
&lt;/table&gt;</code></pre><pre class="code"><code>// public/js/laboratorios.js
async function cargarTabla() {
    const respuesta = await fetch('/api/laboratorios');
    const labs = await respuesta.json();
    const $tbody = $('#tbodyLabs').empty();

    labs.forEach(lab =&gt; {
        const $fila = $('&lt;tr&gt;').attr('data-id', lab._id);
        $fila.append($('&lt;td&gt;').text(lab.nombre));
        $fila.append($('&lt;td&gt;').text(lab.capacidad));
        $fila.append(\`&lt;td class="text-end"&gt;
            &lt;button class="btn btn-sm btn-warning btn-editar"&gt;Editar&lt;/button&gt;
            &lt;button class="btn btn-sm btn-danger btn-eliminar"&gt;Eliminar&lt;/button&gt;
        &lt;/td&gt;\`);
        $tbody.append($fila);
    });
}

$('#tbodyLabs').on('click', '.btn-eliminar', async function () {
    const id = $(this).closest('tr').data('id');
    if (!confirm('¿Eliminar el laboratorio?')) return;

    const respuesta = await fetch('/api/laboratorios/' + id, { method: 'DELETE' });
    if (respuesta.ok) cargarTabla();
});

$(cargarTabla);</code></pre>`,
                            nextButton: 'Siguiente: Editar'
                        },
                        {
                            title: 'Editar un registro (PUT)',
                            content: `<pre class="code"><code>let idEditando = null;

$('#tbodyLabs').on('click', '.btn-editar', async function () {
    idEditando = $(this).closest('tr').data('id');
    const lab = await (await fetch('/api/laboratorios/' + idEditando)).json();

    $('#txtNombre').val(lab.nombre);
    $('#txtCapacidad').val(lab.capacidad);
    $('#btnGuardar').text('Actualizar');
});

$('#frmLab').on('submit', async function (e) {
    e.preventDefault();
    const datos = { nombre: $('#txtNombre').val(), capacidad: Number($('#txtCapacidad').val()) };

    const url = idEditando ? '/api/laboratorios/' + idEditando : '/api/laboratorios';
    const metodo = idEditando ? 'PUT' : 'POST';

    const respuesta = await fetch(url, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    });

    if (respuesta.ok) {
        idEditando = null;
        this.reset();
        $('#btnGuardar').text('Guardar');
        cargarTabla();
    } else {
        alert((await respuesta.json()).mensaje);
    }
});</code></pre>`,
                            nextButton: 'Siguiente: Filtros y paginación'
                        },
                        {
                            title: 'Consultas con filtros, orden y paginación',
                            content: `<pre class="code"><code>// GET /api/laboratorios?buscar=redes&amp;pagina=2&amp;limite=10
router.get('/', async (req, res) =&gt; {
    const { buscar = '', pagina = 1, limite = 10 } = req.query;

    const filtro = buscar
        ? { nombre: { $regex: buscar, $options: 'i' } }   // contiene, sin importar mayúsculas
        : {};

    const [datos, total] = await Promise.all([
        Laboratorio.find(filtro)
            .sort({ nombre: 1 })
            .skip((pagina - 1) * limite)
            .limit(Number(limite)),
        Laboratorio.countDocuments(filtro)
    ]);

    res.json({ datos, total, paginas: Math.ceil(total / limite) });
});</code></pre><pre class="code"><code>// Otras consultas útiles
await Reserva.find({ fecha: { $gte: inicio, $lte: fin } });     // rango de fechas
await Reserva.find({ estado: { $in: ['pendiente', 'confirmada'] } });
await Laboratorio.find({ capacidad: { $gt: 20 } }).select('nombre capacidad');
await Reserva.countDocuments({ laboratorio: idLab, estado: 'confirmada' });</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm06-sesiones',
                    label: 'Manejo de sesiones',
                    steps: [
                        {
                            title: '¿Qué es una sesión?',
                            content: `<p>HTTP no recuerda quién hizo cada solicitud. Una <strong>sesión</strong> permite que el servidor reconozca al usuario después de iniciar sesión, mediante un identificador guardado en una cookie.</p>
                            <ol>
                                <li>El usuario envía correo y contraseña.</li>
                                <li>El servidor valida y crea la sesión.</li>
                                <li>El navegador guarda una cookie con el id de sesión.</li>
                                <li>En cada solicitud, el servidor lee la cookie y sabe quién es el usuario.</li>
                            </ol>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m06_sesiones.png',
                            nextButton: 'Siguiente: express-session'
                        },
                        {
                            title: 'Sesiones con express-session y MongoDB',
                            content: `<pre class="code"><code>npm install express-session connect-mongo</code></pre>
<pre class="code"><code>// app.js
const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 30 }  // 30 minutos
}));</code></pre>
                            <p>Las sesiones se guardan en una colección <code>sessions</code> de Atlas, así no se pierden al reiniciar el servidor.</p>`,
                            nextButton: 'Siguiente: Login y protección de rutas'
                        },
                        {
                            title: 'Inicio de sesión y rutas protegidas',
                            content: `<pre class="code"><code>// Iniciar sesión
router.post('/login', async (req, res) => {
    const usuario = await Usuario.findOne({ correo: req.body.correo });
    const valido = usuario && await bcrypt.compare(req.body.clave, usuario.clave);
    if (!valido) return res.status(401).json({ mensaje: 'Credenciales inválidas' });

    req.session.usuarioId = usuario._id;
    req.session.rol = usuario.rol;
    res.json({ mensaje: 'Bienvenido' });
});

// Middleware para proteger rutas
function requiereLogin(req, res, next) {
    if (!req.session.usuarioId) return res.status(401).json({ mensaje: 'Debe iniciar sesión' });
    next();
}

// Cerrar sesión
router.post('/logout', (req, res) => {
    req.session.destroy(() => res.json({ mensaje: 'Sesión cerrada' }));
});</code></pre>`,
                            nextButton: 'Siguiente: Autorización por rol'
                        },
                        {
                            title: 'Autorización por rol',
                            content: `<pre class="code"><code>// middlewares/auth.js
function requiereLogin(req, res, next) {
    if (!req.session.usuarioId) {
        return res.status(401).json({ mensaje: 'Debe iniciar sesión' });
    }
    next();
}

function requiereRol(...roles) {
    return (req, res, next) =&gt; {
        if (!roles.includes(req.session.rol)) {
            return res.status(403).json({ mensaje: 'No tiene permiso' });
        }
        next();
    };
}

module.exports = { requiereLogin, requiereRol };</code></pre><pre class="code"><code>// routes/laboratorios.js
const { requiereLogin, requiereRol } = require('../middlewares/auth');

router.get('/', requiereLogin, ctrl.listar);                          // cualquier usuario
router.post('/', requiereLogin, requiereRol('admin'), ctrl.crear);    // solo admin
router.delete('/:id', requiereLogin, requiereRol('admin'), ctrl.eliminar);</code></pre>`,
                            nextButton: 'Siguiente: Sesión en el frontend'
                        },
                        {
                            title: 'Usar la sesión desde el frontend',
                            content: `<pre class="code"><code>// Servidor: ¿quién está conectado?
router.get('/me', requiereLogin, async (req, res) =&gt; {
    const usuario = await Usuario.findById(req.session.usuarioId).select('nombre rol');
    res.json(usuario);
});</code></pre><pre class="code"><code>// public/js/sesion.js (se incluye en todas las páginas privadas)
async function verificarSesion() {
    const respuesta = await fetch('/api/auth/me');

    if (respuesta.status === 401) {
        window.location.href = 'login.html';
        return;
    }

    const usuario = await respuesta.json();
    $('#nombreUsuario').text(usuario.nombre);
    if (usuario.rol !== 'admin') $('.solo-admin').addClass('d-none');
}

$('#btnSalir').on('click', async () =&gt; {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = 'login.html';
});

$(verificarSesion);</code></pre><p>
    <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
    Ocultar botones en el frontend mejora la experiencia, pero la protección real es el middleware del servidor.
</p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm06-seguridad',
                    label: 'Seguridad en las aplicaciones',
                    steps: [
                        {
                            title: 'Contraseñas cifradas con bcrypt',
                            content: `<p>Las contraseñas <strong>nunca</strong> se guardan en texto plano. Se almacena un <em>hash</em> que no se puede revertir.</p>
<pre class="code"><code>npm install bcrypt</code></pre>
<pre class="code"><code>// models/usuario.js — antes de guardar
const bcrypt = require('bcrypt');

usuarioSchema.pre('save', async function () {
    if (!this.isModified('clave')) return;
    this.clave = await bcrypt.hash(this.clave, 10);
});</code></pre>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m06_seguridad.png',
                            nextButton: 'Siguiente: Validar en el servidor'
                        },
                        {
                            title: 'Validación en el servidor',
                            content: `<p>Todo dato que llega del cliente debe considerarse <strong>no confiable</strong>:</p>
                            <ul>
                                <li>Use las validaciones del esquema de Mongoose (<code>required</code>, <code>min</code>, <code>enum</code>, <code>match</code>).</li>
                                <li>No guarde directamente <code>req.body</code> si contiene campos sensibles (por ejemplo, alguien podría enviar <code>rol: 'admin'</code>): seleccione solo los campos permitidos.</li>
                                <li>Evite inyección NoSQL: no use valores del usuario como operadores de consulta (por ejemplo <code>{ "$gt": "" }</code>). Mongoose ofrece la opción <code>sanitizeFilter</code>.</li>
                            </ul>`,
                            nextButton: 'Siguiente: Otras prácticas'
                        },
                        {
                            title: 'Buenas prácticas de seguridad',
                            content: `<ul>
                                <li><strong>Variables de entorno:</strong> credenciales y secretos en <code>.env</code>, nunca en el código.</li>
                                <li><strong>Autorización por rol:</strong> verificar <code>req.session.rol</code> antes de operaciones de administrador.</li>
                                <li><strong>Mensajes de error genéricos:</strong> "credenciales inválidas" en lugar de "el correo no existe".</li>
                                <li><strong>Cookies seguras:</strong> <code>httpOnly</code> y <code>secure</code> (en HTTPS).</li>
                                <li><strong>Escapar contenido:</strong> usar <code>.text()</code> en lugar de <code>.html()</code> al mostrar datos ingresados por usuarios (evita XSS).</li>
                                <li><strong>Atlas:</strong> limitar el acceso por IP y dar al usuario de BD solo los permisos necesarios.</li>
                            </ul>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Consulte la lista OWASP Top 10 para conocer las vulnerabilidades más comunes en aplicaciones web.
                            </p>`,
                            nextButton: 'Siguiente: Campos permitidos'
                        },
                        {
                            title: 'Aceptar solo los campos permitidos',
                            content: `<pre class="code"><code>// ❌ Peligroso: el cliente podría enviar { "rol": "admin" }
const usuario = await Usuario.create(req.body);

// ✅ Seguro: se toman solo los campos esperados
const { nombre, correo, clave } = req.body;
const usuario = await Usuario.create({ nombre, correo, clave });</code></pre><pre class="code"><code>// Nunca devolver la contraseña
usuarioSchema.set('toJSON', {
    transform: (doc, ret) =&gt; {
        delete ret.clave;
        return ret;
    }
});</code></pre>`,
                            nextButton: 'Siguiente: Errores e IDs'
                        },
                        {
                            title: 'Manejo seguro de errores e identificadores',
                            content: `<pre class="code"><code>const mongoose = require('mongoose');

// Evita que un id mal formado provoque un error 500
function validarId(req, res, next) {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).json({ mensaje: 'Identificador inválido' });
    }
    next();
}

router.get('/:id', validarId, ctrl.obtener);

// Activar el filtro contra inyección NoSQL en toda la aplicación
mongoose.set('sanitizeFilter', true);

// Responder errores de validación de forma clara, sin exponer detalles internos
function manejarError(err, res) {
    if (err.name === 'ValidationError') {
        const mensajes = Object.values(err.errors).map(e =&gt; e.message);
        return res.status(400).json({ mensaje: mensajes.join('. ') });
    }
    if (err.code === 11000) {
        return res.status(409).json({ mensaje: 'El registro ya existe' });
    }
    console.error(err);
    res.status(500).json({ mensaje: 'Error interno' });
}</code></pre>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },

        // =====================================================================
        // MÓDULO 7: ASPECTOS DEL DESARROLLO DEL SOFTWARE
        // =====================================================================
        {
            id: 'modulo_07',
            label: 'Desarrollo del software',
            subtemas: [
                {
                    id: 'm07-tradicionales',
                    label: 'Metodologías tradicionales',
                    steps: [
                        {
                            title: 'Características de las metodologías tradicionales',
                            content: `<p>También llamadas <strong>predictivas</strong> o "pesadas": planifican todo el proyecto al inicio, con énfasis en la documentación y en fases secuenciales.</p>
                            <ul>
                                <li>Requerimientos estables y definidos desde el principio.</li>
                                <li>Contratos con alcance, tiempo y costo fijos.</li>
                                <li>Control mediante entregables formales al cerrar cada fase.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m07_cascada.png',
                            nextButton: 'Siguiente: Modelos'
                        },
                        {
                            title: 'Modelos tradicionales',
                            content: `<ul>
                                <li><strong>Cascada:</strong> las fases del SDLC se ejecutan una tras otra; no se avanza hasta terminar la anterior.</li>
                                <li><strong>Modelo en V:</strong> cada fase de desarrollo tiene una fase de prueba asociada.</li>
                                <li><strong>Espiral:</strong> ciclos iterativos con fuerte análisis de riesgos.</li>
                                <li><strong>RUP (Proceso Unificado):</strong> iterativo, guiado por casos de uso y centrado en la arquitectura.</li>
                            </ul>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Su mayor riesgo: el cliente ve el producto hasta el final, cuando los cambios son más costosos.
                            </p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm07-agiles',
                    label: 'Metodologías ágiles',
                    steps: [
                        {
                            title: 'El Manifiesto Ágil',
                            content: `<p>En 2001, un grupo de desarrolladores propuso valorar:</p>
                            <ul>
                                <li><strong>Individuos e interacciones</strong> sobre procesos y herramientas.</li>
                                <li><strong>Software funcionando</strong> sobre documentación extensiva.</li>
                                <li><strong>Colaboración con el cliente</strong> sobre negociación contractual.</li>
                                <li><strong>Respuesta ante el cambio</strong> sobre seguir un plan.</li>
                            </ul>
                            <p>No elimina lo de la derecha; da más valor a lo de la izquierda.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m07_scrum.png',
                            nextButton: 'Siguiente: Scrum'
                        },
                        {
                            title: 'Scrum',
                            content: `<p>Marco de trabajo iterativo e incremental basado en <strong>sprints</strong> de 1 a 4 semanas.</p>
                            <ul>
                                <li><strong>Roles:</strong> Product Owner (prioriza), Scrum Master (facilita), equipo de desarrollo.</li>
                                <li><strong>Artefactos:</strong> Product Backlog, Sprint Backlog, Incremento.</li>
                                <li><strong>Eventos:</strong> Sprint Planning, Daily Scrum (15 min), Sprint Review, Sprint Retrospective.</li>
                            </ul>`,
                            nextButton: 'Siguiente: Kanban y XP'
                        },
                        {
                            title: 'Kanban y XP',
                            content: `<ul>
                                <li><strong>Kanban:</strong> visualiza el flujo de trabajo en un tablero (Por hacer → En progreso → Hecho) y limita el trabajo en curso (WIP).</li>
                                <li><strong>XP (Extreme Programming):</strong> prácticas técnicas como programación en parejas, desarrollo guiado por pruebas (TDD), integración continua y refactorización.</li>
                            </ul>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                En el proyecto integrador puede organizar el trabajo del equipo con Scrum y un tablero Kanban.
                            </p>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm07-procedimientosDatos',
                    label: 'Metodologías orientadas a procedimientos y datos',
                    steps: [
                        {
                            title: 'Metodologías estructuradas (orientadas a procesos)',
                            content: `<p>Se centran en las <strong>funciones</strong> que realiza el sistema y en cómo fluye la información entre ellas.</p>
                            <ul>
                                <li><strong>Diagramas de flujo de datos (DFD):</strong> procesos, almacenes de datos, entidades externas y flujos.</li>
                                <li><strong>Diccionario de datos:</strong> define cada dato del sistema.</li>
                                <li><strong>Descomposición funcional:</strong> dividir un proceso grande en subprocesos más simples.</li>
                            </ul>
                            <p>Ejemplos: Análisis Estructurado de Yourdon/DeMarco, SSADM, Métrica.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m07_dfd_er.png',
                            nextButton: 'Siguiente: Orientadas a datos'
                        },
                        {
                            title: 'Metodologías orientadas a datos',
                            content: `<p>Parten de la idea de que los <strong>datos son más estables</strong> que los procesos: primero se modela la información y luego las funciones que la usan.</p>
                            <ul>
                                <li><strong>Modelo entidad-relación (E-R):</strong> entidades, atributos y relaciones.</li>
                                <li><strong>Normalización</strong> en bases de datos relacionales.</li>
                                <li><strong>Modelado de documentos</strong> en bases NoSQL como MongoDB.</li>
                            </ul>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Por eso en el curso se modela la base de datos antes de programar: un buen modelo de datos simplifica todo el desarrollo posterior.
                            </p>`,
                            nextButton: 'Siguiente: Orientadas a objetos'
                        },
                        {
                            title: 'Comparación con la orientación a objetos',
                            content: `<table class="table">
                                <tr><th>Enfoque</th><th>Centro del análisis</th><th>Modelos típicos</th></tr>
                                <tr><td>Procedimientos</td><td>Funciones y flujos</td><td>DFD, diagramas de flujo</td></tr>
                                <tr><td>Datos</td><td>Información y relaciones</td><td>E-R, modelo de documentos</td></tr>
                                <tr><td>Objetos</td><td>Objetos que unen datos y comportamiento</td><td>UML: clases, casos de uso, secuencia</td></tr>
                            </table>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm07-calidad',
                    label: 'Calidad de software',
                    steps: [
                        {
                            title: '¿Qué es la calidad de software?',
                            content: `<p>Es el grado en que el software <strong>cumple los requerimientos</strong> y satisface las necesidades de los usuarios.</p>
                            <p>El estándar <strong>ISO/IEC 25010</strong> define características de calidad del producto:</p>
                            <ul>
                                <li>Adecuación funcional · Eficiencia de desempeño · Compatibilidad</li>
                                <li>Usabilidad · Fiabilidad · Seguridad</li>
                                <li>Mantenibilidad · Portabilidad</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m07_calidad.png',
                            nextButton: 'Siguiente: Aseguramiento y control'
                        },
                        {
                            title: 'Aseguramiento y control de calidad',
                            content: `<ul>
                                <li><strong>Aseguramiento de la calidad (QA):</strong> preventivo; define procesos y estándares para evitar defectos (revisiones de código, guías de estilo).</li>
                                <li><strong>Control de calidad (QC):</strong> detectivo; encuentra defectos en el producto mediante pruebas.</li>
                            </ul>
                            <p><strong>Niveles de prueba:</strong> unitarias, de integración, de sistema y de aceptación.</p>
                            <p><strong>Ejemplo de caso de prueba:</strong> CP-01 — Registrar usuario con correo ya existente → Resultado esperado: mensaje "El correo ya está registrado".</p>`,
                            nextButton: 'Siguiente: Pruebas unitarias'
                        },
                        {
                            title: 'Pruebas unitarias con node:test',
                            content: `<p>Node.js incluye un ejecutor de pruebas sin instalar nada adicional:</p><pre class="code"><code>// utils/calculos.js
function calcularTotal(detalle) {
    if (!Array.isArray(detalle) || detalle.length === 0) {
        throw new Error('Detalle vacío');
    }
    return detalle.reduce((s, d) =&gt; s + d.cantidad * d.precio, 0);
}
module.exports = { calcularTotal };</code></pre><pre class="code"><code>// pruebas/calculos.test.js
const test = require('node:test');
const assert = require('node:assert');
const { calcularTotal } = require('../utils/calculos');

test('CP-10: calcula el total de un pedido', () =&gt; {
    const total = calcularTotal([
        { cantidad: 2, precio: 1500 },
        { cantidad: 1, precio: 1200 }
    ]);
    assert.strictEqual(total, 4200);
});

test('CP-11: rechaza un pedido vacío', () =&gt; {
    assert.throws(() =&gt; calcularTotal([]), /Detalle vacío/);
});</code></pre><pre class="code"><code>node --test      # ejecuta todos los archivos *.test.js</code></pre>`,
                            nextButton: 'Siguiente: Probar la API'
                        },
                        {
                            title: 'Probar la API manualmente',
                            content: `<p>Con Postman, Thunder Client (extensión de VS Code) o un archivo <code>.http</code> se verifican las rutas antes de conectar el frontend:</p><pre class="code"><code>### Crear laboratorio
POST http://localhost:3000/api/laboratorios
Content-Type: application/json

{ "nombre": "Lab 3-12", "capacidad": 30 }

### Caso negativo: capacidad inválida (se espera 400)
POST http://localhost:3000/api/laboratorios
Content-Type: application/json

{ "nombre": "Lab X", "capacidad": -5 }

### Listar
GET http://localhost:3000/api/laboratorios?buscar=lab</code></pre><table class="table"><tr><th>Caso</th><th>Esperado</th><th>Obtenido</th></tr><tr><td>CP-20 Crear con datos válidos</td><td>201</td><td>201 ✔</td></tr><tr><td>CP-21 Capacidad negativa</td><td>400</td><td>400 ✔</td></tr><tr><td>CP-22 Eliminar sin sesión</td><td>401</td><td>200 ✘ (bug)</td></tr></table>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm07-gestionProyectos',
                    label: 'Gestión de proyectos de software',
                    steps: [
                        {
                            title: 'La triple restricción',
                            content: `<p>Todo proyecto se equilibra entre <strong>alcance</strong>, <strong>tiempo</strong> y <strong>costo</strong>, y el resultado afecta la <strong>calidad</strong>. Si una cambia, las demás se ven afectadas.</p>
                            <p>Áreas principales de la gestión de proyectos:</p>
                            <ul>
                                <li>Alcance: qué se va a entregar (y qué no).</li>
                                <li>Cronograma: actividades, duraciones y dependencias.</li>
                                <li>Riesgos: qué puede salir mal y cómo responder.</li>
                                <li>Comunicación: cómo y cuándo se informa el avance.</li>
                            </ul>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m07_triple_restriccion.png',
                            nextButton: 'Siguiente: Herramientas de planificación'
                        },
                        {
                            title: 'Planificación y seguimiento',
                            content: `<ul>
                                <li><strong>EDT / WBS:</strong> descomposición del trabajo en paquetes manejables.</li>
                                <li><strong>Diagrama de Gantt:</strong> cronograma visual de actividades.</li>
                                <li><strong>Estimación:</strong> por juicio de expertos, puntos de historia o Planning Poker.</li>
                                <li><strong>Gráfico burndown:</strong> muestra el trabajo pendiente en cada sprint.</li>
                                <li><strong>Matriz de riesgos:</strong> probabilidad × impacto.</li>
                            </ul>`,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm07-herramientas',
                    label: 'Entornos de desarrollo y herramientas',
                    steps: [
                        {
                            title: 'Entornos de desarrollo',
                            content: `<ul>
                                <li><strong>Editor / IDE:</strong> Visual Studio Code con extensiones (Live Server, Prettier, ESLint).</li>
                                <li><strong>Entorno de ejecución:</strong> Node.js y npm.</li>
                                <li><strong>Base de datos:</strong> MongoDB Atlas y MongoDB Compass para explorar colecciones.</li>
                                <li><strong>Pruebas de API:</strong> Postman o Thunder Client para probar las rutas de Express.</li>
                                <li><strong>Navegador:</strong> herramientas de desarrollo (F12): consola, red, inspector.</li>
                            </ul>
                            <p>Se suelen distinguir ambientes de <strong>desarrollo</strong>, <strong>pruebas</strong> y <strong>producción</strong>.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/m07_herramientas.png',
                            nextButton: 'Siguiente: Gestión de proyectos'
                        },
                        {
                            title: 'Herramientas de gestión de proyectos',
                            content: `<ul>
                                <li><strong>Tableros:</strong> Trello, Jira, GitHub Projects, Azure DevOps.</li>
                                <li><strong>Repositorio y colaboración:</strong> GitHub (issues, pull requests, revisiones).</li>
                                <li><strong>Diseño y prototipos:</strong> Figma, draw.io / diagrams.net para UML.</li>
                                <li><strong>Comunicación:</strong> Teams, Slack, Discord.</li>
                            </ul>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Vincule cada tarjeta del tablero con un requerimiento o historia de usuario: así mantiene la trazabilidad desde el análisis hasta el código.
                            </p>`,
                            nextButton: 'Siguiente: Configuración'
                        },
                        {
                            title: 'Configuración del proyecto',
                            content: `<p>Archivos que ayudan a que todo el equipo trabaje igual:</p><pre class="code"><code># .env.example  (sí se sube; muestra qué variables se necesitan, sin valores reales)
MONGO_URI=
SESSION_SECRET=
PORT=3000</code></pre><pre class="code"><code>// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.eol": "\\n"
}</code></pre><pre class="code"><code># README.md (mínimo)
## Instalación
1. git clone &lt;repositorio&gt;
2. npm install
3. Copiar .env.example como .env y completar los valores
4. npm run dev</code></pre><p>
    <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
    Un README claro permite que cualquier integrante (o el profesor) levante el proyecto en minutos.
</p>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        }
        /* Plantilla de un nuevo módulo

        poner: https://view.genially.com/6a1f6e0e5223b5322d8622fc
        ,{
            id: 'modulo_08',
            label: 'Nuevo módulo',
            subtemas: [
                {
                    id: 'm08-t001',
                    label: 'Tema',
                    steps: [
                        {
                            title: 'Contenido ',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        }
        */
    ]
};
