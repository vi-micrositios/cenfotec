const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-01 <br> Principios de programación 1',
        image: 'https://raw.githubusercontent.com/vimora-cursos/micrositio-soft01/develop/imgs/logo.png', // Cambiar por imagen real
        description: 'Estudio de estructuras secuenciales, condicionales e iterativas y procedimientos lógicos y abstracciones de computación que permiten la resolución de problemas por medio de la elaboración de programas de software.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
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
                            content: `<p>s el proceso estructurado y metódico que se sigue para diseñar, desarrollar y mantener un software de alta calidad.</p>
                            <p> 
                                <i class="fas fa-warning" style="color: #00928d;" aria-hidden="true"></i>
                                No es solo "escribir código"; es un marco de trabajo que garantiza que el producto final cumpla con los requisitos del cliente, se entregue a tiempo y dentro del presupuesto.
                            </p>
                                `,
                            nextButton: 'Siguiente: Fases'
                        },
                        {
                            title: 'Fases del SDLC ',
                            content: `
                            <ol>
                                <li>Fase 1: Planificación y análisis de requisitos <br> Qué se hace: Reuniones con el cliente y los usuarios finales. Se define qué debe hacer el software y para quién. Se analiza la viabilidad (técnica, económica y legal). <br>
                                Entregable: Documento de Especificación de Requisitos de Software (ERS o SRS).
                                </li>

                                <li>Fase 2: Diseño (Arquitectura) <br> Qué se hace: Se define cómo funcionará internamente. Se diseña la arquitectura del sistema, las bases de datos, las interfaces de usuario (UI/UX) y los flujos de trabajo. Se crean diagramas UML y prototipos. <br> 
                                Entregable: Documento de análisis y diseño (técnico y visual).
                                </li>

                                <li>Fase 3: Implementación (codificación) <br>      
                                Qué se hace: Los programadores escriben el código fuente según las especificaciones del diseño. Se dividen en módulos y se integran progresivamente.  <br> 
                                Entregable: Código fuente funcional (repositorio en Git).                          
                                </li>
                                
                                <li>Fase 4: Pruebas (Testing) <br> 
                                Qué se hace: Se ejecutan pruebas para encontrar errores (bugs) y verificar que el software cumpla los requisitos. Incluye pruebas unitarias, de integración, de sistema, de rendimiento y de aceptación por el usuario (UAT). <br> 
                                Entregable: Reporte de errores y software estabilizado.
                                </li>

                                <li>Fase 5: Despliegue (Deployment) <br> 
                                Qué se hace: El software se instala en el entorno de producción (servidores reales) para que los usuarios finales puedan usarlo. Puede ser un lanzamiento completo o por fases (piloto). <br> 
                                Entregable: Software en producción y manuales de usuario.
                                </li>

                                <li>Fase 6: Mantenimiento y Soporte <br> 
                                Qué se hace: Una vez en uso, surgen nuevos errores o necesidades. Se corrigen fallos, se optimiza el rendimiento y se añaden mejoras o nuevas funcionalidades (actualizaciones). <br> 
                                Entregable: Nuevas versiones (parches o actualizaciones mayores).
                                </li>
                            </ol>`,
                            nextButton: 'Siguiente: Metodologías '
                        },
                        {
                            title: 'Metodologías',
                            content: `<p>Es el conjunto de programas e instrucciones que indican al hardware qué hacer.</p>
                                        <p>Por ejemplo:</p>
                                        <ul>
                                            <li>Windows</li>
                                            <li>Linux</li>
                                            <li>Microsoft Word
                                            <li>Google Chrome</li>
                                            <li>Visual Studio Code</li>
                                            <li>Python</li>
                                            <li>videojuegos</li>
                                        </ul>
                                        <p>Una forma sencilla de recordarlo: hardware = lo que podemos tocar y software = instrucciones y programas.</p>`,
                            nextButton: 'Siguiente: Casos de uso'
                        },
                        {
                            title: 'Casos de uso',
                            content: `<p>Los casos de uso describen interacciones entre actores y el sistema para lograr un objetivo.</p>
                                        <ul>
                                            <li><strong>Actores:</strong> Usuarios u otros sistemas.</li>
                                            <li><strong>Flujo básico y alternativo.</strong></li>
                                            <li><strong>Pre y post condiciones.</strong></li>
                                        </ul>
                                        <p>Son una herramienta visual para validar requerimientos con los stakeholders.</p>`,
                            nextButton: 'Siguiente: Prototipos'
                        },
                        {
                            title: 'Prototipos',
                            content: `<p>Los prototipos son versiones tempranas del sistema que permiten validar conceptos y obtener retroalimentación rápida.</p>
                                        <ul>
                                            <li><strong>Prototipos de baja fidelidad:</strong> Bocetos en papel.</li>
                                            <li><strong>Prototipos de alta fidelidad:</strong> Interactivos con herramientas.</li>
                                            <li><strong>Prototipos evolutivos:</strong> Se refinan hasta convertirse en el producto final.</li>
                                        </ul>
                                        <p>Ayudan a reducir riesgos y mejorar la comprensión de los requerimientos.</p>`,
                            nextButton: ' ' // último paso, se oculta el botón
                        }
                    ]
                },
                {
                    id: 'm001-algoritmo',
                    label: 'Algoritmo y programa',
                    steps: [
                        {
                            title: 'Ciclos de vida del software',
                            content: `<p>Los modelos de ciclo de vida definen las fases y actividades del desarrollo.</p>
                                        <ul>
                                            <li><strong>Cascada:</strong> Secuencial y rígido.</li>
                                            <li><strong>Ágil:</strong> Iterativo y flexible (Scrum, XP).</li>
                                            <li><strong>Espiral:</strong> Enfoque en riesgos.</li>
                                        </ul>
                                        <p>La elección depende del proyecto y el contexto.</p>`,
                            nextButton: 'Siguiente: Metodologías ágiles'
                        },
                        {
                            title: 'Metodologías ágiles xx',
                            content: `<p>Las metodologías ágiles promueven la adaptación continua, la colaboración y la entrega temprana de valor.</p>
                                        <ul>
                                            <li><strong>Scrum:</strong> Sprints, roles, reuniones.</li>
                                            <li><strong>Kanban:</strong> Flujo continuo y visualización.</li>
                                            <li><strong>XP:</strong> Prácticas de ingeniería como TDD, pair programming.</li>
                                        </ul>
                                        <p>Son ampliamente utilizadas en la industria moderna.</p>`,
                            nextButton: 'Siguiente: Análisis '
                        },
                        {
                            title: 'Obtención de requerimientos',
                            content: `<p>La obtención de requerimientos es el proceso de recopilar información...</p>
                                        <ul>...</ul>
                                        <p>Una buena obtención reduce ambigüedades y fallos posteriores.</p>`,
                            image: 'https://moodle.ucenfotec.ac.cr/draftfile.php/60198/user/draft/114369068/hardware.png',
                            imageAlt: 'Diagrama de obtención de requerimientos',
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm001-lenguaje',
                    label: 'Lenguaje de programación',
                    steps: [
                        {
                            title: 'Ciclos de vida del software',
                            content: `<p>Los modelos de ciclo de vida definen las fases y actividades del desarrollo.</p>
                                        <ul>
                                            <li><strong>Cascada:</strong> Secuencial y rígido.</li>
                                            <li><strong>Ágil:</strong> Iterativo y flexible (Scrum, XP).</li>
                                            <li><strong>Espiral:</strong> Enfoque en riesgos.</li>
                                        </ul>
                                        <p>La elección depende del proyecto y el contexto.</p>`,
                            nextButton: 'Siguiente: Metodologías ágiles'
                        },
                        {
                            title: 'Metodologías ágiles',
                            content: `<p>Las metodologías ágiles promueven la adaptación continua, la colaboración y la entrega temprana de valor.</p>
                                        <ul>
                                            <li><strong>Scrum:</strong> Sprints, roles, reuniones.</li>
                                            <li><strong>Kanban:</strong> Flujo continuo y visualización.</li>
                                            <li><strong>XP:</strong> Prácticas de ingeniería como TDD, pair programming.</li>
                                        </ul>
                                        <p>Son ampliamente utilizadas en la industria moderna.</p>`,
                            nextButton: ' '
                        }
                    ]
                }
                // Puede agregar más subtemas aquí
            ]
        },
        {
            id: 'modulo_002',
            label: 'Desarrollo del software',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Tema 01 del módulo 02',
                    steps: [
                        {
                            title: 'Contenido 1 / diapositiva 1',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 2 / diapositiva 2',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 3 / diapositiva 3',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },
        {
            id: 'req-modulo_003',
            label: 'Ingeniería de requerimientos',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Tema 01 del módulo 03',
                    steps: [
                        {
                            title: 'Contenido 1 / diapositiva 1',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 2 / diapositiva 2',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 3 / diapositiva 3',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Gestión de requerimientos',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Tema 01 del módulo 04',
                    steps: [
                        {
                            title: 'Contenido 1 / diapositiva 1',
                            content: `<p>Contenido en construcción</p>`,
                            image: 'https://media-public.canva.com/1pRVQ/MAHETj1pRVQ/1/tl.png',
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 2 / diapositiva 2',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 3 / diapositiva 3',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Calidad',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Tema 01 del módulo 05',
                    steps: [
                        {
                            title: 'Contenido 1 / diapositiva 1',
                            content: `<p>Contenido en construcción</p>`,
                            image: 'https://media-public.canva.com/1pRVQ/MAHETj1pRVQ/1/tl.png',
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 2 / diapositiva 2',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 3 / diapositiva 3',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Pruebas de software',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Tema 01 del módulo 06',
                    steps: [
                        {
                            title: 'Contenido 1 / diapositiva 1',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 2 / diapositiva 2',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Contenido 3 / diapositiva 3',
                            image: 'https://media-public.canva.com/1pRVQ/MAHETj1pRVQ/1/tl.png',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: ' '
                        }
                    ]
                }
            ]
        }
    ]
};
