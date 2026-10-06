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
        // INTRODUCCIÓN: DESARROLLO DE SOFTWARE
        // =====================================================================
        {
            id: 'tema_001',
            label: 'Desarrollo de software',
            subtemas: [
                {
                    id: 'm001-cicloVida',
                    label: 'Ciclo de vida',
                    steps: [
                        {
                            title: 'Ciclo de vida del desarrollo de software (SDLC)',
                            content: `<p>Proceso estructurado y metódico que se sigue para diseñar, desarrollar y mantener un software de alta calidad.</p>
                            <p> 
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                No es solo "escribir código"; es un marco de trabajo que garantiza que el producto final cumpla con los requisitos del cliente, se entregue a tiempo y dentro del presupuesto.
                            </p>
                                `,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm001-fases',
                    label: 'Fases del SDLC',
                    steps: [
                        {
                            title: 'Fase 1: Planificación y análisis de requisitos',
                            content: `<p>Qué se hace: Reuniones con el cliente y los usuarios finales. Se define qué debe hacer el software y para quién. Se analiza la viabilidad (técnica, económica y legal). </p>
                            <p> Entregable: Documento de Especificación de Requisitos de Software (ERS o SRS).</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/requerimientos.png',
                            nextButton: 'Siguiente: Fase 2'
                        },
                        {
                            title: 'Fase 2: Diseño (arquitectura) ',
                            content: `<p> Qué se hace: Se define cómo funcionará internamente. Se diseña la arquitectura del sistema, las bases de datos, las interfaces de usuario (UI/UX) y los flujos de trabajo. Se crean diagramas UML y prototipos. </p>
                            <p>Entregable: Documento de análisis y diseño (técnico y visual)</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/disenno.png',
                            nextButton: 'Siguiente: Fase 3'
                        },
                        {
                            title: 'Fase 3: Implementación (codificación)',
                            content: `<p>Qué se hace: Los programadores escriben el código fuente según las especificaciones del diseño. Se dividen en módulos y se integran progresivamente.  </p>
                            <p>Entregable: Código fuente funcional (repositorio en Git). </p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/desarrollo.png',
                            nextButton: 'Siguiente: Fase 4'
                        },
                        {
                            title: 'Fase 4: Pruebas (testing) ',
                            content: `<p>Qué se hace: Se ejecutan pruebas para encontrar errores (bugs) y verificar que el software cumpla los requisitos. Incluye pruebas unitarias, de integración, de sistema, de rendimiento y de aceptación por el usuario (UAT). </p> 
                            <p>Entregable: Reporte de errores y software estabilizado.
                                </p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/pruebas.png',
                            nextButton: 'Siguiente: Fase 5'
                        },
                        {
                            title: 'Fase 5: Despliegue (deployment)',
                            content: `<p>Qué se hace: El software se instala en el entorno de producción (servidores reales) para que los usuarios finales puedan usarlo. Puede ser un lanzamiento completo o por fases (piloto). </p>
                            <p>Entregable: Software en producción y manuales de usuario.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/despliegue.png',
                            nextButton: 'Siguiente: Fase 6'
                        },
                        {
                            title: 'Fase 6: Mantenimiento y soporte',
                            content: `<p>Qué se hace: Una vez en uso, surgen nuevos errores o necesidades. Se corrigen fallos, se optimiza el rendimiento y se añaden mejoras o nuevas funcionalidades (actualizaciones). </p>
                            <p>Entregable: Nuevas versiones (parches o actualizaciones mayores). </p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-11(JS_CSS_HTML)/imgs/mantenimiento.png',
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },

        // =====================================================================
        // MÓDULO 1: ANÁLISIS Y ESPECIFICACIÓN DE REQUERIMIENTOS
        // =====================================================================
        {
            id: 'modulo_01',
            label: 'Módulo 1: Análisis y especificación de requerimientos',
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
            label: 'Módulo 2: Gestión y modelado de requerimientos',
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
<pre><code>// Documento de la colección "pedidos"
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
<pre><code>-- OCL: operación retirar(monto) de una Cuenta
context Cuenta::retirar(monto : Real)
  pre:  monto > 0 and monto <= self.saldo
  post: self.saldo = self.saldo@pre - monto

context Cuenta
  inv: self.saldo >= 0</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Estas reglas luego se traducen en validaciones del código y del esquema de la base de datos (por ejemplo, <code>min: 0</code> en Mongoose).
                            </p>`,
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
            label: 'Módulo 3: Desarrollo de interfaz de usuario',
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
<pre><code>Inicio
├── Catálogo
│   └── Detalle de producto
├── Carrito
├── Mi cuenta
│   ├── Iniciar sesión
│   └── Registro
└── Contacto</code></pre>
                            <p>Cada página del mapa debería corresponder a uno o más casos de uso.</p>`,
                            nextButton: 'Siguiente: Estructura de archivos'
                        },
                        {
                            title: 'Estructura de archivos del proyecto',
                            content: `<p>Separar responsabilidades facilita el mantenimiento:</p>
<pre><code>mi-proyecto/
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
<pre><code>&lt;!DOCTYPE html&gt;
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
<pre><code>&lt;header&gt;  Encabezado y logo        &lt;/header&gt;
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
<pre><code>/* selector { propiedad: valor; } */
h1 {
    color: #00928d;
    font-size: 2rem;
}
.destacado { background-color: #f2f2f2; }   /* clase */
#menu      { display: flex; }               /* id    */</code></pre>
                            <p>"Cascada" significa que, cuando varias reglas aplican al mismo elemento, gana la más específica o la última declarada.</p>`,
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
<pre><code>.tarjeta {
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
<pre><code>.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}</code></pre>
                            <p><strong>Grid</strong> organiza en dos dimensiones (filas y columnas):</p>
<pre><code>.catalogo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}</code></pre>`,
                            nextButton: 'Siguiente: Diseño adaptable'
                        },
                        {
                            title: 'Diseño adaptable (media queries)',
                            content: `<p>Las <em>media queries</em> aplican estilos según el tamaño de la pantalla:</p>
<pre><code>/* Celulares: una columna */
.catalogo { grid-template-columns: 1fr; }

/* Pantallas de 768px o más: tres columnas */
@media (min-width: 768px) {
    .catalogo { grid-template-columns: repeat(3, 1fr); }
}</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Escriba primero los estilos para celular y agregue media queries para pantallas más grandes (mobile first).
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
<pre><code>&lt;form id="frmRegistro"&gt;
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
                            nextButton: 'Siguiente: Validación HTML5'
                        },
                        {
                            title: 'Validación con atributos HTML5',
                            content: `<pre><code>&lt;input type="text" name="nombre" required minlength="3"&gt;
&lt;input type="email" name="correo" required&gt;
&lt;input type="number" name="edad" min="18" max="99"&gt;
&lt;input type="text" name="cedula" pattern="[0-9]{9}"
       title="Debe contener 9 dígitos"&gt;</code></pre>
                            <p>El navegador bloquea el envío y muestra un mensaje si algún campo no cumple.</p>`,
                            nextButton: 'Siguiente: Validación con JavaScript'
                        },
                        {
                            title: 'Validación con JavaScript',
                            content: `<pre><code>const formulario = document.getElementById('frmRegistro');

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
<pre><code>/* CSS */
.error { border: 2px solid #d9534f; }</code></pre>`,
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
            label: 'Módulo 4: Lenguaje JavaScript',
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
                            nextButton: 'Siguiente: Cómo incluirlo'
                        },
                        {
                            title: 'Cómo incluir JavaScript y variables',
                            content: `<pre><code>&lt;!-- Al final del body --&gt;
&lt;script src="js/main.js"&gt;&lt;/script&gt;</code></pre>
<pre><code>// main.js
let contador = 0;          // puede cambiar
const IVA = 0.13;          // constante
console.log('Hola mundo'); // se ve en la consola (F12)</code></pre>
                            <p>
                                <i class="fas fa-lightbulb" style="color: #00928d;" aria-hidden="true"></i>
                                Use <code>const</code> por defecto y <code>let</code> solo cuando el valor deba cambiar. Evite <code>var</code>.
                            </p>`,
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
<pre><code>5 == '5'    // true  (convierte tipos)
5 === '5'   // false (compara valor y tipo)
'5' + 2     // '52'  (concatena)
Number('5') + 2  // 7</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Use siempre <code>===</code> y <code>!==</code>. Los valores de un formulario siempre llegan como texto: conviértalos con <code>Number()</code>.
                            </p>`,
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
                            content: `<pre><code>const nota = 85;

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
                            nextButton: 'Siguiente: Ciclos'
                        },
                        {
                            title: 'Ciclos',
                            content: `<pre><code>// for clásico
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
                            content: `<pre><code>// Declaración
function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

// Función flecha
const aplicarIVA = (monto) => monto * 1.13;

console.log(aplicarIVA(calcularTotal(1000, 3))); // 3390</code></pre>
                            <p>Las funciones permiten reutilizar código y dividir un problema en partes pequeñas.</p>`,
                            nextButton: 'Siguiente: Arreglos'
                        },
                        {
                            title: 'Arreglos y métodos',
                            content: `<pre><code>const notas = [80, 95, 60, 72];

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
<pre><code>const estudiantes = [
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
<pre><code>const titulo = document.getElementById('titulo');
const botones = document.querySelectorAll('.btn');

titulo.textContent = 'Nuevo título';
titulo.classList.add('activo');

const item = document.createElement('li');
item.textContent = 'Nuevo elemento';
document.querySelector('#lista').appendChild(item);</code></pre>`,
                            nextButton: 'Siguiente: Eventos'
                        },
                        {
                            title: 'Eventos',
                            content: `<pre><code>const boton = document.getElementById('btnSaludar');

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
<pre><code>localStorage.setItem('tema', 'oscuro');
const tema = localStorage.getItem('tema');

window.location.href = 'catalogo.html';</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Nunca guarde contraseñas ni datos sensibles en localStorage.
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
<pre><code>// hola.js
console.log('Hola desde Node.js');</code></pre>
<pre><code>// En la terminal
node -v          # verifica la versión instalada
node hola.js     # ejecuta el archivo</code></pre>`,
                            nextButton: 'Siguiente: npm'
                        },
                        {
                            title: 'npm y package.json',
                            content: `<p><strong>npm</strong> (Node Package Manager) instala bibliotecas de terceros.</p>
<pre><code>npm init -y            # crea package.json
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
<pre><code>// utilidades.js
function sumar(a, b) {
    return a + b;
}
module.exports = { sumar };

// app.js
const { sumar } = require('./utilidades');
console.log(sumar(2, 3)); // 5</code></pre>
                            <p>Node también trae módulos propios como <code>fs</code> (archivos), <code>path</code> (rutas) y <code>http</code> (servidor).</p>`,
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
            label: 'Módulo 5: Biblioteca multiplataforma jQuery',
            subtemas: [
                {
                    id: 'm05-introduccion',
                    label: 'Introducción a jQuery',
                    steps: [
                        {
                            title: '¿Qué es jQuery?',
                            content: `<p>jQuery es una biblioteca de JavaScript que <strong>simplifica</strong> la manipulación del DOM, el manejo de eventos, las animaciones y las solicitudes al servidor, con un código más corto y compatible entre navegadores.</p>
                            <p>Su lema: <em>"Write less, do more"</em>.</p>
<pre><code>// JavaScript puro
document.getElementById('titulo').style.color = 'red';

// jQuery
$('#titulo').css('color', 'red');</code></pre>`,
                            nextButton: 'Siguiente: Cómo incluirla'
                        },
                        {
                            title: 'Cómo incluir jQuery',
                            content: `<pre><code>&lt;script src="https://code.jquery.com/jquery-3.7.1.min.js"&gt;&lt;/script&gt;
&lt;script src="js/main.js"&gt;&lt;/script&gt;</code></pre>
<pre><code>// main.js: espera a que el DOM esté listo
$(function () {
    console.log('jQuery está listo');
});</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                El script de jQuery debe cargarse <strong>antes</strong> que los archivos que lo usan.
                            </p>`,
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
                            nextButton: 'Siguiente: Filtros y recorrido'
                        },
                        {
                            title: 'Filtros y recorrido del DOM',
                            content: `<pre><code>$('tr:even')            // filas pares
$('li:first')           // primer li
$('input:checked')      // casillas marcadas

$('#lista').children()  // hijos directos
$('.item').parent()     // elemento padre
$('#tabla').find('td')  // descendientes que sean td
$('li').eq(2)           // el tercer li</code></pre>`,
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
                            content: `<pre><code>$('#titulo').text('Nuevo título');        // texto
$('#contenedor').html('&lt;b&gt;Hola&lt;/b&gt;');  // HTML
const nombre = $('#txtNombre').val();      // valor de un input
$('#txtNombre').val('');                   // limpiar input

$('img').attr('alt', 'Descripción');       // atributos
$('.caja').css('background', '#eee');      // estilos
$('.caja').addClass('activa').removeClass('oculta');</code></pre>`,
                            nextButton: 'Siguiente: Agregar y eliminar'
                        },
                        {
                            title: 'Agregar, eliminar y mostrar elementos',
                            content: `<pre><code>$('#lista').append('&lt;li&gt;Al final&lt;/li&gt;');
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
                            content: `<pre><code>const productos = [
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
                            content: `<pre><code>$('#btnGuardar').on('click', function () {
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
                            nextButton: 'Siguiente: Delegación'
                        },
                        {
                            title: 'Delegación de eventos',
                            content: `<p>Los elementos agregados dinámicamente (por ejemplo, filas nuevas de una tabla) no reciben eventos asignados antes. La solución es <strong>delegar</strong> el evento en un elemento padre que sí existe:</p>
<pre><code>$('#tblProductos').on('click', '.btn-eliminar', function () {
    $(this).closest('tr').remove();
});</code></pre>`,
                            nextButton: 'Siguiente: AJAX'
                        },
                        {
                            title: 'Solicitudes al servidor con jQuery (AJAX)',
                            content: `<pre><code>$.ajax({
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
            label: 'Módulo 6: Desarrollo de aplicaciones',
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
                            nextButton: 'Siguiente: Estructura de carpetas'
                        },
                        {
                            title: 'Estructura de carpetas',
                            content: `<pre><code>proyecto/
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
                            content: `<pre><code>mkdir proyecto && cd proyecto
npm init -y
npm install express mongoose dotenv
npm install --save-dev nodemon</code></pre>
                            <ul>
                                <li><strong>express:</strong> framework para crear el servidor y las rutas.</li>
                                <li><strong>mongoose:</strong> conecta con MongoDB y define esquemas.</li>
                                <li><strong>dotenv:</strong> lee variables del archivo <code>.env</code>.</li>
                                <li><strong>nodemon:</strong> reinicia el servidor al guardar cambios.</li>
                            </ul>`,
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
<pre><code># .env
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
                            content: `<pre><code>// app.js
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
<pre><code>// models/usuario.js
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
<pre><code>git init                          # inicia el repositorio
git add .                         # prepara los cambios
git commit -m "Crea modelo Usuario"
git remote add origin https://github.com/usuario/proyecto.git
git push -u origin main           # sube a GitHub
git pull                          # trae cambios del equipo</code></pre>`,
                            nextButton: 'Siguiente: Ramas'
                        },
                        {
                            title: 'Ramas y trabajo en equipo',
                            content: `<pre><code>git checkout -b feature/registro   # crea y cambia a una rama
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
                            content: `<pre><code># .gitignore
node_modules/
.env</code></pre>
                            <p>
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                Si por error sube el archivo <code>.env</code>, cambie de inmediato la contraseña del usuario de base de datos en Atlas: eliminar el archivo no borra el historial.
                            </p>`,
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
                            content: `<pre><code>// routes/usuarios.js
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
                            nextButton: 'Siguiente: Enviar desde el frontend'
                        },
                        {
                            title: 'Enviar datos desde el frontend con fetch',
                            content: `<pre><code>// public/js/registro.js
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
                            content: `<pre><code>await Usuario.create({ nombre: 'Ana', correo: 'ana@mail.com', clave: '...' });
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
                            nextButton: 'Siguiente: express-session'
                        },
                        {
                            title: 'Sesiones con express-session y MongoDB',
                            content: `<pre><code>npm install express-session connect-mongo</code></pre>
<pre><code>// app.js
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
                            content: `<pre><code>// Iniciar sesión
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
<pre><code>npm install bcrypt</code></pre>
<pre><code>// models/usuario.js — antes de guardar
const bcrypt = require('bcrypt');

usuarioSchema.pre('save', async function () {
    if (!this.isModified('clave')) return;
    this.clave = await bcrypt.hash(this.clave, 10);
});</code></pre>`,
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
            label: 'Módulo 7: Aspectos del desarrollo del software',
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
