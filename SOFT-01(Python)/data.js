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
                                    <p class="p-code">
                                        base = float(input("Ingrese la base: "))
                                        altura = float(input("Ingrese la altura: "))
                                        area = base * altura
                                        print("El área es:", area)
                                    </p>
                                    `,
                            nextButton: ' '
                        }
                    ]
                },
                {
                    id: 'm001-lenguaje',
                    label: 'Compilador y editor',
                    steps: [
                        {
                            title: 'Lenguaje de programación',
                            content: `<p>Un lenguaje de programación permite expresar instrucciones de una manera estructurada para que puedan ser procesadas por una computadora. Ejemplos:</p>
                                        <ul>
                                            <li>Python
                                            <li>Java</li>
                                            <li>C</li>
                                            <li>C++</li>
                                            <li>JavaScript</li>
                                            <li>C#</li>
                                            <li>Kotlin</li>
                                        </ul>
                                        <p>Para escribir programas se necesita un editor de código.</p>`,
                            nextButton: 'Siguiente: Editor del lenguaje'
                        },
                        {
                            title: 'Editor del lenguaje de programación',
                            content: `<p>Un editor permite crear y modificar archivos que contienen código fuente. Por ejemplo: </p>
                                        <ul>
                                            <li>Visual Studio Code</li>
                                            <li>PyCharm</li>
                                            <li>Spyder</li>
                                            <li>IDLE</li>
                                            <li>Sublime Text</li>
                                            <li>Jupyter Notebook</li>
                                        </ul>
                                        <a href="https://docs.google.com/document/d/1Qk2zS0k_AJDP_VvGlmmbtgxJ_MBNCsqUO0Tl-C0gEHE/edit?usp=sharing"
                                        target="_blank" rel="noopener noreferrer" title="Abrir el taller de instalación de Visual Studio Code y Python 3">
                                        <strong>Instalación de las herramientas necesarias</strong>
                                        <span style="display: block; margin-top: 0.25rem;">
                                            Visual Studio Code + Python 3 · Guía paso a paso
                                        </span>

                                        <i class="fa-solid fa-up-right-from-square" aria-hidden="true" style="color: #00928d; margin-left: 0.4rem;">
                                        </i>
                                    </a>`,
                            nextButton: 'Siguiente: Compilador'
                        }, 
                        {
                            title: 'Compilador',
                            content: `<p>Es un programa que traduce código fuente escrito en un lenguaje de programación a otra forma que pueda ser ejecutada por la computadora o por una máquina virtual.</p>
                            <p>Programa en C++</p>
                            <p class="p-code">
                                int suma = 5 + 3;
                            </p>

                            <p>El compilador puede convertirlo en algo parecido a:</p>
                            <p class="p-code">
                                mov eax, 5<br>
                                add eax, 3
                            </p>

                            <p>Que significa aproximadamente:</p>
                            <p class="p-code">
                                mov eax, 5 &nbsp;&nbsp;→ Guardar el número 5 en el registro EAX<br>
                                add eax, 3 &nbsp;&nbsp;→ Sumarle 3 a EAX
                            </p>

                            <p>Lenguajes como C y C++ utilizan tradicionalmente procesos de compilación.</p>`,
                            nextButton: 'Siguiente: Intérprete'
                        },
                        {
                            title: 'Intérprete',
                            content: `<p>Un intérprete ejecuta instrucciones de un programa mediante un sistema que las procesa durante la ejecución. </p>

                            <p>Python utiliza un intérprete para ejecutar sus programas.</p>
                            <p>Ejemplo en Python:</p>
                            <p class="p-code">
                                print("Hola")
                            </p>

                            <p>Al ejecutar el programa, el intérprete de Python procesa las instrucciones y produce:</p>
                            <p class="p-code">
                                Hola
                            </p>`,
                            nextButton: ''
                        }
                        
                    ]
                },
                {
                    id: 'm004-problema-resultado',
                    label: 'Del problema al resultado',
                    steps: [
                        {
                            title: 'Del problema al resultado',
                            content: `<div style=" margin:auto; text-align:center; color:#333; ">

                                <div style=" display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:8px;
                                ">
                            <!-- PROBLEMA --> <div style="     padding:12px 15px;     border:2px solid #712c86;     border-radius:12px;     min-width:105px; ">     <i class="fa-solid fa-lightbulb"        style="font-size:25px;color:#c81f66;"></i>
                                <div style="margin-top:6px;">         <b>Problema</b><br>         <small>Necesidad a resolver</small>     </div> </div>
                            <span style="color:#00928d;font-size:20px;">→</span>

                            <!-- ALGORITMO --> <div style="     padding:12px 15px;     border:2px solid #00928d;     border-radius:12px;     min-width:105px; ">     <i class="fa-solid fa-brain"        style="font-size:25px;color:#00928d;"></i>
                                <div style="margin-top:6px;">         <b>Algoritmo</b><br>         <small>Pasos para resolverlo</small>     </div> </div>
                            <span style="color:#712c86;font-size:20px;">→</span>

                            <!-- CÓDIGO --> <div style="     padding:12px 15px;     border:2px solid #712c86;     border-radius:12px;     min-width:105px; ">     <i class="fa-solid fa-code"        style="font-size:25px;color:#c81f66;"></i>
                                <div style="margin-top:6px;">         <b>Código</b><br>         <small>Solución escrita</small>     </div> </div>
                            <span style="color:#00928d;font-size:20px;">→</span>

                            <!-- EDITAR --> <div style="     padding:12px 15px;     border:2px solid #00928d;     border-radius:12px;     min-width:105px; ">     <i class="fa-solid fa-pen-to-square"        style="font-size:25px;color:#00928d;"></i>
                                <div style="margin-top:6px;">         <b>Editar</b><br>         <small>Modificar el código</small>     </div> </div>
                            <span style="color:#712c86;font-size:20px;">→</span>

                            <!-- COMPILAR --> <div style="     padding:12px 15px;     border:2px solid #712c86;     border-radius:12px;     min-width:120px; ">     <i class="fa-solid fa-gears"        style="font-size:25px;color:#c81f66;"></i>
                                <div style="margin-top:6px;">         <b>Compilar</b><br>         <small>Transformar el código</small>     </div> </div>
                            <span style="color:#00928d;font-size:20px;">→</span>

                            <!-- INTERPRETAR --> <div style="     padding:12px 15px;     border:2px solid #00928d;     border-radius:12px;     min-width:120px; ">     <i class="fa-solid fa-language"        style="font-size:25px;color:#00928d;"></i>
                                <div style="margin-top:6px;">         <b>Interpretar</b><br>         <small>Procesar instrucciones</small>     </div> </div>
                            <span style="color:#712c86;font-size:20px;">→</span>

                            <!-- ENLAZAR --> <div style="     padding:12px 15px;     border:2px solid #712c86;     border-radius:12px;     min-width:105px; ">     <i class="fa-solid fa-link"        style="font-size:25px;color:#c81f66;"></i>
                                <div style="margin-top:6px;">         <b>Enlazar</b><br>         <small>Unir las diferentes piezas</small>     </div> </div>
                            <span style="color:#00928d;font-size:20px;">→</span>

                            <!-- EJECUTAR --> <div style="     padding:12px 15px;     border:2px solid #00928d;     border-radius:12px;     min-width:105px; ">     <i class="fa-solid fa-play"        style="font-size:25px;color:#00928d;"></i>
                                <div style="margin-top:6px;">         <b>Ejecutar</b><br>         <small>Poner el programa en marcha</small>     </div> </div>
                            <span style="color:#712c86;font-size:20px;">→</span>

                            <!-- RESULTADO --> <div style="     padding:12px 15px;     border:2px solid #712c86;     border-radius:12px;     min-width:105px; ">     <i class="fa-solid fa-circle-check"        style="font-size:25px;color:#c81f66;"></i>
                                <div style="margin-top:6px;">         <b>Resultado</b><br>         <small>Solución obtenida</small>     </div> </div>

                                </div>

                            </div>`,
                            nextButton: ''
                        }
                    ]
                }
                // Puede agregar más subtemas aquí
            ]
        },
        {
            id: 'modulo_002',
            label: 'Programación secuencial',
            subtemas: [
                {
                    id: 'm002-t001',
                    label: 'Flujo de control secuencial',
                    steps: [
                        {
                            title: 'Estructuras secuenciales',
                            content: `<p>Una computadora no piensa ni tiene voluntad propia. Solo hace lo que se le ordena, en el orden exacto en que se lo dice. </p>
                            <p>La forma más básica y fundamental de darle órdenes a una máquina es una instrucción tras otra, de arriba hacia abajo, sin saltos ni desvíos. </p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/pasos_lineales.png',
                            nextButton: 'Siguiente: Flujos secuenciales'
                        },
                        {
                            title: 'Flujos secuenciales',
                            content: `<p>Es el "camino" que sigue el programa. </p>
                            <p>Se puede visualizar como una escalera: se pone un pie en el primer escalón, luego en el segundo, luego en el tercero, y llega al final. Ese es el flujo secuencial. Es el comportamiento por defecto de cualquier programa que no tenga condiciones ni bucles.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/escalera.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t002',
                    label: 'Datos',
                    steps: [
                        {
                            title: 'Datos',
                            content: `<p>Es la información representada simbólicamente a través de números, letras o la combinación de ambas. </p>
                            <p>Se clasifican en datos de entrada o datos de salida. Además, en Python se pueden utilizar cuatro tipos de datos: numéricos, caracteres, booleanos y el tipo de dato "none".</p>
                            <p>Ejemplos:</p>
                             <ul>
                                <li>Una canción, un vídeo o una fotografía.</li>
                                <li>La representación binaria del número 5 que es 101.</li>
                                <li>Al presionar una tecla del teclado, el dato en la computadora se convierte en un dato de entrada.</li>
                                <li>Al hacer una suma en la calculadora, el resultado que se muestra en pantalla es un dato de salida.</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/datos.png',
                            nextButton: 'Siguiente: Datos numéricos'
                        },
                        {
                            title: 'Datos numéricos',
                            content: `<p>Los datos numéricos representan un número. </p>
                            <p>Python permite utilizar tres tipos de datos: enteros, flotantes y complejos:</p>
                            <ul>
                                <li>Enteros (int): Son valores que no tienen punto decimal. Pueden ser positivos o negativos, se incluye el cero. Ejemplo: 0, 3, 115, -15, -245.</li>
                                <li>Flotantes (float): Se utiliza para representar los valores reales, que poseen una parte entera y una parte decimal. Ejemplo: –12.57, 45.76, 3.5, -2.5.</li>
                                <li>Complejos (complex): Números con una parte real e imaginaria. Ejemplo: 3+4j.</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Datos booleanos'
                        },
                        {
                            title: 'Datos booleanos',
                            content: `<p>Representan valores de verdad que pueden ser únicamente falsos o verdaderos.Por ejemplo:</p>
                            <ul>
                                <li>Un interruptor puede estar encendido (verdadero) o apagado (falso).</li>
                                <li>En Costa Rica cae nieve (False) o cae lluvia (True).</li>
                                <li>Yo estoy en el un curso de Python = verdadero.</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Strings'
                        },
                        {
                            title: 'Cadena de caracteres o strings',
                            content: `<p>Representan secuencias de caracteres que pueden ser desde una letra, un número o hasta una frase. Por ejemplo:</p>
                            <ul>
                                <li>Un carácter: “s”, “n”, “x”, "3".</li>
                                <li>Frases: “Rose”, “San José”, “Viva Guanacaste”.</li>
                            </ul>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm002-t003',
                    label: 'Variables',
                    steps: [
                        {
                            title: 'Variables',
                            content: `<p>Es un espacio de memoria en la computadora, en donde un programa almacena un dato que puede o no cambiar durante la ejecución.   </p>
                            <p>Con las variables se puede almacenar, consultar, mostrar o asignar datos cada vez que se necesite.</p>
                            <p><strong>Sintaxis</strong>: El nombre de la variable = al dato que almacena la variable. </p>
                             <ul>
                                <li>edad = 23</li>
                                <li>colorFavorito = "azul"</li>
                                <li>cedula = "6-0000-0000"</li>
                                <li>creditos_matriculados = 12</li>
                                <li>temperatura = 17.5</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/variables.png',
                            nextButton: 'Siguiente: Nombre de variables'
                        },
                        {
                            title: 'Nombre de variables',
                            content: `<p>Elegir nombres adecuados para variables y constantes es fundamental para que el código sea legible, comprensible y mantenible. </p>
                            <ul>
                                <li>Debe comenzar con una letra (a-z, A-Z) o un guion bajo (_), pero no con un número.</li>
                                <li>Puede contener letras, números y guion bajo (_), pero no espacios ni caracteres especiales.</li>
                                <li>No puede usar palabras clave de Python (if, while, for, etc.).</li>
                                <li>Debe ser descriptiva y clara, evitando nombres genéricos como x, y, z.</li>
                                <li>No debe ser demasiado larga ni redundante.</li>
                                <li>Debe seguir la convención snake_case, camelCase o PascalCase.</li>
                            </ul>
                            `,
                            nextButton: ''
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
