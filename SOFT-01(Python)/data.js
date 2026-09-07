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
            id: 'modulo_001',
            label: 'Conceptos básicos',
            subtemas: [
                {
                    id: 'm001-computador',
                    label: 'Partes del computador',
                    steps: [
                        {
                            title: 'Partes del computador',
                            content: `<p>Una computadora es una máquina electrónica diseñada para recibir datos (entrada), procesarlos (hacer cálculos o tomar decisiones lógicas) y entregar un resultado (salida), todo de manera automática y a una velocidad alta.</p>
                            <p>
                            <i class="fas fa-warning" style="color: #00928d;"></i>
                            Por muy inteligente que parezca, la computadora es completamente "tonta" por sí sola. No piensa, no tiene iniciativa ni creatividad. Solo hace exactamente lo que el ser humano le indica a través de un programa.
                            </p>
                            <p>Principales componentes del computador</p>

                            <ul>
                                <li><strong>CPU (Unidad Central de Procesamiento) o procesador</strong>: Es la unidad que ejecuta las instrucciones de los programas. Se puede ver como el "cerebro" de la computadora, que hace los cálculos y toma decisiones (ejecuta las órdenes). </li>
                                
                                <li><strong>Memoria RAM (memoria de corto plazo)</strong>: Random Access Memory es una memoria temporal que utiliza el computador mientras está trabajando. Si se apaga la PC, la RAM se borra.</li>

                                <li><strong>Almacenamiento (memoria de largo plazo)</strong>: Los dispositivos de almacenamiento permiten guardar información de forma permanente. <br>

                                Ejemplos: SSD, disco duro (HDD), memoria USB, tarjeta SD</li>
                                
                                <li><strong>Periféricos de Entrada/Salida</strong>: Permiten introducir información al computador (entrada) y/o permiten recibir información del computador (salida).
                                <br> 
                                Ejemplo: Teclado (entrada), monitor (salida), mouse (entrada), impresora (salida).</li>
                            </ul>
                                `,
                            nextButton: 'Siguiente: Hardware'
                        },
                        {
                            title: 'Hardware',
                            content: `<p>Es la parte física del computador, es decir son componentes que podemos tocar. <p>
                                        <p>Por ejemplo:</p>
                                        <ul>
                                            <li>teclado
                                            <li>mouse</li>
                                            <li>monitor</li>
                                            <li>memoria RAM</li>
                                            <li>disco SSD</li>
                                            <li>procesador</li>
                                            <li>tarjeta madre</li>
                                            <li>impresora</li>
                                        </ul>
                                        <p>El análisis es clave para construir una especificación sólida.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/hardware.png',
                            nextButton: 'Siguiente: Software'
                        },
                        {
                            title: 'Software',
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
                            image: 'https://github.com/vi-micrositios/cenfotec/blob/main/SOFT-01(Python)/imgs/software.png?raw=true',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm001-algoritmo',
                    label: 'Algoritmo y programa',
                    steps: [
                        {
                            title: 'Algoritmo',
                            content: `<p>Un algoritmo es un conjunto de instrucciones ordenadas que permiten resolver un problema o realizar una tarea.</p>
                                    <p>Por ejemplo: Algoritmo para resolver el problema de preparar una taza de café:</p>
                                    <ul>
                                        <li>Tomar una taza.</li>
                                        <li>Calentar agua.</li>
                                        <li>Colocar café en la taza.</li>
                                        <li>Agregar el agua caliente.</li>
                                        <li>Mezclar.</li>
                                        <li>Servir.</li>
                                    </ul>`,
                            nextButton: 'Siguiente: Características'
                        },
                        {
                            title: 'Características de un algoritmo',
                            content: `<p>Un algoritmo debe tener instrucciones:</p>
                                        <ul>
                                            <li>Claras: Cada paso debe poder entenderse.</li>
                                            <li>Ordenadas: Los pasos tienen una secuencia lógica.</li>
                                            <li>Precisos: No deberían existir instrucciones ambiguas.</li>
                                            <li>Finitas: Debe existir un momento en que el algoritmo termina.</li>

                                        </ul>`,
                            nextButton: 'Siguiente: Programa'
                        },
                        {
                            title: 'Programa',
                            content: `<p>Un algoritmo describe cómo resolver un problema y un programa es una implementación de ese algoritmo utilizando un lenguaje que la computadora puede procesar.</p>
                                    <p>Por ejemplo: Algoritmo para calcular el área de un rectángulo:</p>
                                    <ol>
                                        <li>Solicitar la base.</li>
                                        <li>Solicitar la altura.</li>
                                        <li>Multiplicar base × altura.</li>
                                        <li>Mostrar el resultado.</li>
                                    </ol>
                                    <p>Programa en Python</p>
                                    <p class="python-code">
                                        base = float(input("Ingrese la base: "))
                                        altura = float(input("Ingrese la altura: "))
                                        area = base * altura
                                        print("El área es:", area)
                                    </p>
                                    `,
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
        }
        /** Plantilla nuevo módulo
        ,
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
            label: 'Pruebas',
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
        */
    ]
};
