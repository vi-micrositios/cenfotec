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
                            image: 'https://moodle.ucenfotec.ac.cr/draftfile.php/60198/user/draft/114369068/hardware.png',
                            imageAlt: ' ',
                            nextButton: 'Siguiente: Fase 2'
                        },
                        {
                            title: 'Fase 2: Diseño (arquitectura) ',
                            content: `<p> Qué se hace: Se define cómo funcionará internamente. Se diseña la arquitectura del sistema, las bases de datos, las interfaces de usuario (UI/UX) y los flujos de trabajo. Se crean diagramas UML y prototipos. </p>
                            <p>Entregable: Documento de análisis y diseño (técnico y visual)</p>`,
                            nextButton: 'Siguiente: Fase 3'
                        },
                        {
                            title: 'Fase 3: Implementación (codificación)',
                            content: `<p>Qué se hace: Los programadores escriben el código fuente según las especificaciones del diseño. Se dividen en módulos y se integran progresivamente.  </p>
                            <p>Entregable: Código fuente funcional (repositorio en Git). </p>`,
                            nextButton: 'Siguiente: Fase 4'
                        },
                        {
                            title: 'Fase 4: Pruebas (testing) ',
                            content: `<p>Qué se hace: Se ejecutan pruebas para encontrar errores (bugs) y verificar que el software cumpla los requisitos. Incluye pruebas unitarias, de integración, de sistema, de rendimiento y de aceptación por el usuario (UAT). </p> 
                            <p>Entregable: Reporte de errores y software estabilizado.
                                </p>`,
                            nextButton: 'Siguiente: Fase 5'
                        },
                        {
                            title: 'Fase 5: Despliegue (deployment)',
                            content: `<p>Qué se hace: El software se instala en el entorno de producción (servidores reales) para que los usuarios finales puedan usarlo. Puede ser un lanzamiento completo o por fases (piloto). </p>
                            <p>Entregable: Software en producción y manuales de usuario.</p>`,
                            nextButton: 'Siguiente: Fase 6'
                        },
                        {
                            title: 'Fase 6: Mantenimiento y soporte',
                            content: `<p>Qué se hace: Una vez en uso, surgen nuevos errores o necesidades. Se corrigen fallos, se optimiza el rendimiento y se añaden mejoras o nuevas funcionalidades (actualizaciones). </p>
                            <p>Entregable: Nuevas versiones (parches o actualizaciones mayores). </p>`,
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
            label: 'Análisis',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Tema 01 del módulo 02',
                    steps: [
                        {
                            title: 'Contenido ',
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
            label: 'Diseño',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Diseño',
                    steps: [
                        {
                            title: 'Contenido ',
                            content: `<p>Contenido en construcción</p>`,
                            nextButton: 'Siguiente: Paso 2'
                        }
                    ]
                }
            ]
        }
    ]
};
