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
                },
                {
                    id: 'm005-IA',
                    label: 'IA en programación',
                    steps: [
                        {
                            title: 'Aplicaciones de inteligencia artificial en programación',
                            content: ` <p>La Inteligencia Artificial tiene diversas aplicaciones en la programación, como la generación de código, detección de errores, optimización de programas y apoyo en el aprendizaje de nuevos lenguajes. Estas herramientas permiten realizar tareas de forma más rápida y eficiente.</p>

                            <p>Sin embargo, la IA no reemplaza la necesidad de aprender las bases de la programación. Es fundamental comprender la lógica, los algoritmos y los conceptos principales para poder revisar, corregir y utilizar correctamente el código generado. Por ello, la IA debe verse como una herramienta de apoyo y no como un sustituto del conocimiento.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/ia.png',
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
                },
                {
                    id: 'm002-t004',
                    label: 'Constantes',
                    steps: [
                        {
                            title: 'Constantes',
                            content: `<p>Es un valor que no cambia durante la ejecución de un programa. </p>
                            <p>En Python, no existen constantes como en otros lenguajes de programación, sin embargo, se sigue una convención para indicar que una variable debe tratarse como una constante: <strong> Nombre en mayúsculas y separarla con guiones bajos (_) si es necesario.</strong> </p>

                            <p>Ejemplos de constantes:</p>
                             <ul>
                                <li>PI = 3.1416</li>
                                <li>GRAVITY = 9.81</li>
                                <li>MAXIMO_USUARIOS= 1000</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/constantes.png',
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_003_calidad',
            label: 'Calidad',
            subtemas: [
                {
                    id: 'm003-t001',
                    label: 'Estándar de codificación',
                    steps: [
                        {
                            title: 'Estándar de codificación propuesto para el lenguaje de programación',
                            content: `<p>Conjunto de reglas acordadas por un equipo o una organización para escribir código de manera uniforme. No se trata de reglas arbitrarias, sino de decisiones tomadas para que todo el mundo escriba de la misma forma y cualquier persona pueda leer el código sin confusión.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/reglas.png',
                            nextButton: 'Siguiente: ¿Por qué es necesario?'
                        },
                        {
                            title: '¿Por qué es necesario?',
                            content: `
                            <ul>
                                <li>Legibilidad: Un código uniforme es más fácil de leer y entender.</li>
                                <li>Mantenimiento: Cualquier miembro del equipo puede corregir o ampliar el código sin perderse.</li>
                                <li>Reducción de errores: Las reglas evitan confusiones que llevan a fallos.</li>
                                <li>Profesionalismo: Un código limpio refleja disciplina y respeto por el trabajo.</li>
                            </ul>`,
                            nextButton: 'Siguiente: Ejemplos de reglas'
                        },
                        {
                            title: 'Ejemplos de reglas típicas en un estándar',
                            content: `<p><strong>Nombres de variables y funciones</strong></p>
                            <ul>
                                <li>Usar nombres descriptivos, no letras sueltas. Incorrecto: x = 10. Correcto: edad_usuario = 10.
                                <li>Dependiendo del lenguaje, se usa una convención:</li>
                                <ul>
                                    <li>camelCase: edadUsuario, calcularTotal (común en Java, JavaScript).</li>
                                    <li>snake_case: edad_usuario, calcular_total (común en Python, C).</li>
                                    <li>PascalCase para clases: MiClase, GestorUsuarios.</li>
                                </ul>
                            </ul>
                            
                            <p><strong>Indentación (sangría)</strong></p>
                            <ul>
                                <li> Cada nivel de anidación (por ejemplo, dentro de una función o un bloque) debe desplazarse hacia la derecha una cantidad fija de espacios.</li>
                                <li>Lo más común: 4 espacios por nivel en Python; 2 o 4 en otros lenguajes.</li>
                            </ul>`,
                            nextButton: 'Siguiente: Ejemplos de reglas'
                        },
                        {
                            title: 'Ejemplos de reglas típicas en un estándar',
                            content: `<p><strong>Comentarios</strong></p>
                            <ul>
                                <li>Explicar el por qué de una decisión, no el qué (el qué ya se ve en el código).</li>
                                <li>Mal comentario: # Suma 1 a x (obvio).</li>
                                <li>Buen comentario: # Se incrementa el contador porque cada venta suma un punto al cliente.</li>
                            </ul>
                            
                            <p><strong>Longitud de líneas</strong></p>
                            <ul>
                                <li>No exceder, por ejemplo, 79 o 100 caracteres por línea, para que el código quede visible sin desplazarse horizontalmente.</li>
                            </ul>
                            
                            <p><strong>Espacios y separación</strong></p>
                            <ul>
                                <li>Dejar un espacio alrededor de operadores: total = precio + impuesto (no total=precio+impuesto).</li>
                                <li>Separar bloques lógicos con una línea en blanco.</li>
                            </ul>`,
                            nextButton: 'Siguiente: ¿Quién define el estándar?'
                        },
                        {
                            title: '¿Quién define el estándar?',
                            content: `<p>Cada lenguaje tiene sus convenciones oficiales. Por ejemplo:</p>
                            <ul>
                                <li>Python tiene la PEP 8 (Python Enhancement Proposal 8), que es la guía de estilo oficial.</li>
                                <li>Java tiene las Google Java Style Guide o las Oracle Code Conventions.</li>
                                <li>C tiene estándares como MISRA C para sistemas críticos.</li>
                            </ul>
                            
                            `,
                            nextButton: 'Siguiente: ¿Quién define el estándar?'
                        }
                    ]
                },
                {
                    id: 'm003-t002',
                    label: 'Estilo de programación',
                    steps: [
                        {
                            title: '¿Qué es el estilo de programación?',
                            content: `<p>Es la forma personal (pero consistente) en que un programador escribe su código. Mientras que el estándar es una regla impuesta por un equipo, el estilo es el conjunto de hábitos que usted desarrolla y que, si son buenos, coinciden con el estándar.</p>
                            <p>El estilo abarca aspectos como:</p>
                            <ul>
                                <li>Cómo nombra sus variables.</li>
                                <li>Cómo organiza sus funciones.</li>
                                <li>Cómo comenta.</li>
                                <li>Cómo estructura visualmente el código (espacios, saltos de línea).</li>
                                <li>Cómo elige las estructuras de control (aunque en este módulo aún no ve condicionales ni bucles, el estilo se aplica desde lo más básico).</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/estilo.png',
                            nextButton: 'Siguiente: Principios'
                        },
                        {
                            title: 'Principios de un buen estilo',
                            content: `
                            <ul>
                                <li>Claridad sobre astucia</li>
                                <ul> 
                                    <li>Es mejor escribir un código largo pero claro que uno corto pero confuso. La computadora no premia la brevedad; el ser humano que lea su código sí premia la claridad.</li>
                                </ul> 
                                <li>Consistencia</li>
                                <ul> 
                                    <li>Si usted decide usar snake_case para variables, úselo en todo el programa. No mezcle edad_usuario con edadUsuario en el mismo archivo.</li>
                                </ul> 
                                <li>Simplicidad</li>
                                <ul> 
                                    <li>Evite trucos innecesarios. Si puede resolver algo en tres líneas sencillas, no lo haga en una línea enrevesada.</li>
                                </ul> 
                                <li>Modularidad </li>
                                <ul> 
                                    <li>Divida el programa en partes pequeñas y reutilizables (funciones). Esto es parte del estilo.</li>
                                </ul> 
                                
                            </ul>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t003',
                    label: 'Listas de revisión',
                    steps: [
                        {
                            title: 'Listas de revisión (checklist)',
                            content: `<p>Conjunto ordenado de preguntas o puntos que un programador verifica antes de dar por terminado un programa. Es como la lista que usa un piloto antes de despegar: aunque sea experto, revisa punto por punto para no olvidar nada.</p>
                            <p>Son útiles para:</p>
                            <ul>
                                <li>Evitar olvidos comunes.</li>
                                <li>Estandarizar la calidad.</li>
                                <li>Ahorrar tiempo porque detecta errores antes de que lleguen al usuario.</li>
                                <li>Como guía de aprendizaje para programadores junior.</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/checklist.png',
                            nextButton: 'Siguiente: Ejemplo'
                        },
                        {
                            title: 'Ejemplo de lista de revisión básica para un programa secuencial',
                            content: `
                            <ol>
                                <li>¿El programa pide todos los datos de entrada necesarios?</li>
                                <li>¿Los nombres de las variables son descriptivos?</li>
                                <li>¿El código está indentado correctamente?</li>
                                <li>¿Hay comentarios donde se necesita?</li>
                                <li>¿El programa maneja valores inesperados (por ejemplo, letras donde se esperan números)?</li>
                                <li>¿El resultado que muestra es el correcto según la lógica?</li>
                                <li>¿Se probó con varios valores diferentes?</li>
                                <li>¿El código sigue el estándar acordado?</li>
                                <li>¿Hay líneas duplicadas que se puedan eliminar?</li>
                                <li>¿El programa termina correctamente (no se queda "pegado")?</li>
                                </ul> 
                                
                            </ol>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t004',
                    label: 'Revisión conjunta',
                    steps: [
                        {
                            title: 'Revisión conjunta de algoritmos y programas',
                            content: `<p>También llamada peer review o code review, es un proceso en el que uno o varios compañeros de equipo leen, analizan y comentan el algoritmo o el programa escrito por otro. El objetivo no es criticar a la persona, sino mejorar el producto y compartir conocimiento.</p>
                            <p>Proceso:</p>
                            <ol>
                                <li>Preparación: El autor del código lo comparte con los revisores (puede ser en papel, en una pantalla o mediante una herramienta como GitHub).</li>
                                <li>Lectura individual: Cada revisor lee el código por su cuenta y anota dudas, errores o sugerencias.</li>
                                <li>Reunión de revisión: Todos se juntan (presencial o virtualmente) y discuten los hallazgos.</li>
                                <li>Clasificación de hallazgos:</li>
                                <ul>
                                    <li>Errores: El código no hace lo que debería.</li>
                                    <li>Mejoras de estilo: Funciona, pero podría ser más claro.</li>
                                    <li>Sugerencias: Ideas opcionales para optimizar o simplificar.</li>
                                </ul>
                                <li>Corrección: El autor corrige lo necesario y, si es pertinente, se vuelve a revisar.</li>
                                <li>Aprobación: Cuando el código cumple con el estándar y funciona, se aprueba.</li>
                            </ol>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/checklist.png',
                            nextButton: 'Siguiente: Reglas'
                        },
                        {
                            title: 'Reglas para una revisión conjunta exitosa',
                            content: `
                            <ol>
                                <li>Revisar el código, no a la persona: Los comentarios deben ser sobre el código, nunca sobre la inteligencia o el esfuerzo del autor.</li>
                                <li>Ser específico: En lugar de decir "esto está mal", decir "en la línea 5, la variable x no está definida antes de usarse".</li>
                                <li>Ser respetuoso: Usar frases como "¿Qué le parece si...?" en lugar de "Esto está mal".</li>
                                <li>Escuchar: El autor también puede defender sus decisiones si tienen fundamento.</li>
                                
                            </ol>`,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t005',
                    label: 'Casos de prueba',
                    steps: [
                        {
                            title: 'Caso de prueba',
                            content: `<p>Es una situación específica con datos de entrada concretos y un resultado esperado concreto, que se usa para verificar si el programa funciona correctamente. Es como un examen: se le da al programa una pregunta (entrada) y se verifica si la respuesta (salida) es la correcta.</p>
                            <p>Es necesario porque un programa puede funcionar con un dato y fallar con otro. Por ejemplo, una calculadora de división puede funcionar bien con 10 ÷ 2, pero fallar con 10 ÷ 0. Los casos de prueba ayudan a descubrir esos fallos antes de que el usuario los encuentre.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/casosPrueba.png',
                            nextButton: 'Siguiente: Tipos de casos de prueba'
                        },
                        {
                            title: 'Tipos de casos de prueba',
                            content: `
                            <p><strong> Casos normales (válidos)</strong></p>
                            <ul>
                                <li>Datos típicos que el programa debería manejar sin problema.</li>
                                <li>Ejemplo: para un programa que suma dos números, probar con 5 y 3. Resultado esperado: 8.</li>
                            </ul>

                            <p><strong>Casos límite (frontera)</strong></p>
                            <ul>
                                <li>Datos que están en el borde de lo permitido.</li>
                                <li>Ejemplo: si el programa acepta edades de 0 a 120, probar con 0, con 120, con 1 y con 119.</li>
                            </ul>
                            
                            <p><strong>Casos inválidos (erróneos)</strong></p>
                            <ul>
                                <li>Datos que el programa no debería aceptar, para ver si los rechaza correctamente o si falla.</li>
                                <li>Ejemplo: ingresar letras cuando se piden números, o ingresar una edad negativa.</li>
                            </ul>

                            <p><strong>Casos extremos</strong></p>
                            <ul>
                                <li>Datos muy grandes o muy pequeños.</li>
                                <li>Ejemplo: multiplicar números enormes para ver si el programa se detiene.</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Documentación de casos de prueba'
                        },
                        {
                            title: 'Documentación de un caso de prueba',
                            content: `
                            <p>Se suele usar una tabla con columnas: </p>
                            <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
                                <thead>
                                    <tr style="background-color: #006eae; color: white;">
                                    <th style="border: 1px solid #ccc; padding: 10px;">N.º</th>
                                    <th style="border: 1px solid #ccc; padding: 10px;">Descripción</th>
                                    <th style="border: 1px solid #ccc; padding: 10px;">Entrada (datos de la prueba)</th>
                                    <th style="border: 1px solid #ccc; padding: 10px;">Salida esperada</th>
                                    <th style="border: 1px solid #ccc; padding: 10px;">Resultado de la prueba</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td style="border: 1px solid #ccc; padding: 10px;">&nbsp;</td>
                                    <td style="border: 1px solid #ccc; padding: 10px;">&nbsp;</td>
                                    <td style="border: 1px solid #ccc; padding: 10px;">&nbsp;</td>
                                    <td style="border: 1px solid #ccc; padding: 10px;">&nbsp;</td>
                                    <td style="border: 1px solid #ccc; padding: 10px;">&nbsp;</td>
                                    </tr>
                                </tbody>
                                </table>
                            <p>La última columna se llena después de ejecutar el programa con ese caso.</p>
                            `,
                            nextButton: 'Siguiente: Ejemplo '
                        },{
                            title: 'Ejemplo de casos de prueba',
                            content: `
                            <p>Para un programa que calcula el área de un rectángulo (base × altura): </p>
                            <table style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
                                <thead>
                                    <tr style="background-color: #006eae; color: white;">
                                    <th style="padding: 12px; border: 1px solid #ddd;">N.º</th>
                                    <th style="padding: 12px; border: 1px solid #ddd;">Descripción</th>
                                    <th style="padding: 12px; border: 1px solid #ddd;">Base</th>
                                    <th style="padding: 12px; border: 1px solid #ddd;">Altura</th>
                                    <th style="padding: 12px; border: 1px solid #ddd;">Área esperada</th>
                                    <th style="padding: 12px; border: 1px solid #ddd;>Resultado de la prueba</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">1</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Rectángulo típico</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">10</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">50</td>
                                    </tr>
                                    <tr style="background-color: #f5f9fb;">
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">2</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Base cero</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                    </tr>
                                    <tr>
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">3</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Altura cero</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">10</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                    </tr>
                                    <tr style="background-color: #f5f9fb;">
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">4</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Ambos cero</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                    </tr>
                                    <tr>
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">5</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Números decimales</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">2.5</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">4.0</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">10.0</td>
                                    </tr>
                                    <tr style="background-color: #f5f9fb;">
                                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">6</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Números negativos</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">-3</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                                    <td style="padding: 10px; border: 1px solid #ddd;">Mensaje de error</td>
                                    </tr>
                                </tbody>
                            </table>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t006',
                    label: 'Prueba y depuración',
                    steps: [
                        {
                            title: 'Probar (test) vs depurar (debug)',
                            content: `<p>Probar (test): Es ejecutar el programa con casos de prueba para descubrir si hay errores. La prueba responde a la pregunta: "¿Funciona?".</p>

                            <p>Depurar (debug): Es el proceso de encontrar la causa del error y corregirla. La depuración responde a la pregunta: "¿Por qué no funciona y cómo lo arreglo?".</p>

                            <p>Primero se prueba, luego se depura.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/testing.png',
                            nextButton: 'Siguiente: Errores de sintaxis'
                        },
                        {
                            title: 'Errores de sintaxis',
                            content: `
                            <ul>
                                <li>El código está mal escrito y el lenguaje no lo entiende.</li>
                                <li>Ejemplo: olvidar un paréntesis, una comilla o un dos puntos.</li>
                                <li>El compilador o intérprete los detecta y no deja ejecutar el programa.</li>
                                <li>Solución: leer el mensaje de error, que suele indicar la línea y el tipo de problema.</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Documentación de casos de prueba'
                        },
                        {
                            title: 'Errores de lógica',
                            content: `
                            <ul>
                                <li>El código está bien escrito (el lenguaje lo entiende), pero hace algo distinto a lo que se esperaba.</li>
                                <li>Ejemplo: en lugar de sumar, restó; en lugar de multiplicar por 2, multiplicó por 3.</li>
                                <li>El programa se ejecuta, pero el resultado es incorrecto.</li>
                                <li>Solución: usar la tabla de traza, revisar paso a paso, comparar con el algoritmo original.</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Errores en tiempo de ejecución'
                        },
                        {
                            title: 'Errores en tiempo de ejecución',
                            content: `
                            <ul>
                                <li>El programa empieza a ejecutarse, pero en medio de la ejecución ocurre algo inesperado y se detiene abruptamente.</li>
                                <li>Ejemplo: dividir entre cero, acceder a una variable que no existe, ingresar un tipo de dato incorrecto.</li>
                                <li>Solución: identificar la línea donde ocurre, validar los datos de entrada, usar estructuras de control (que se verán más adelante).</li>
                            </ul>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t007',
                    label: 'Proceso de prueba y depuración ',
                    steps: [
                        {
    title: 'Paso 1: Entender qué debería hacer el programa',
    content: `
        <div style="
            border-left:5px solid #006eae;
            padding:20px;
            background:#f4f9fc;
            border-radius:12px;
            color:#333;
        ">
            <div style="
                display:flex;
                align-items:center;
                gap:14px;
                margin-bottom:15px;
            ">
                <i class="fa-solid fa-lightbulb"
                   aria-hidden="true"
                   style="font-size:30px;color:#006eae;"></i>

                <strong style="
                    font-size:20px;
                    color:#006eae;
                ">
                    Antes de probar, hay que entender.
                </strong>
            </div>

            <p style="margin:0;line-height:1.7;">
                Tener claro el <strong>algoritmo</strong>, las
                <strong>entradas</strong> y las
                <strong>salidas esperadas</strong>.
            </p>

            <div style="
                margin-top:18px;
                padding:14px;
                background:#ffffff;
                border-radius:8px;
                border:1px solid #d9e8f0;
            ">
                <i class="fa-solid fa-code"
                   aria-hidden="true"
                   style="color:#006eae;margin-right:8px;"></i>

                <strong>Pregunta clave:</strong>
                ¿Qué debería hacer exactamente el programa?
            </div>
        </div>
    `,
    image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/test.png',
    nextButton: 'Siguiente: Paso 2'
},

{
    title: 'Paso 2: Diseñar los casos de prueba',
    content: `
        <div style="
            border-left:5px solid #712c86;
            padding:20px;
            background:#faf5fc;
            border-radius:12px;
            color:#333;
        ">
            <div style="
                display:flex;
                align-items:center;
                gap:14px;
                margin-bottom:15px;
            ">
                <i class="fa-solid fa-table-list"
                   aria-hidden="true"
                   style="font-size:30px;color:#712c86;"></i>

                <strong style="
                    font-size:20px;
                    color:#712c86;
                ">
                    Preparar las pruebas
                </strong>
            </div>

            <p style="line-height:1.7;margin-top:0;">
                Crear una tabla de casos de prueba que contemple
                diferentes situaciones.
            </p>

            <div style="
                display:grid;
                grid-template-columns:repeat(2,1fr);
                gap:10px;
                margin-top:15px;
            ">

                <div style="
                    padding:12px;
                    background:#fff;
                    border-radius:8px;
                    border:1px solid #e4d8e9;
                ">
                    <i class="fa-solid fa-circle-check"
                       aria-hidden="true"
                       style="color:#4aa147;"></i>
                    <strong> Normal</strong>
                </div>

                <div style="
                    padding:12px;
                    background:#fff;
                    border-radius:8px;
                    border:1px solid #e4d8e9;
                ">
                    <i class="fa-solid fa-ruler-horizontal"
                       aria-hidden="true"
                       style="color:#712c86;"></i>
                    <strong> Límite</strong>
                </div>

                <div style="
                    padding:12px;
                    background:#fff;
                    border-radius:8px;
                    border:1px solid #e4d8e9;
                ">
                    <i class="fa-solid fa-ban"
                       aria-hidden="true"
                       style="color:#d2232a;"></i>
                    <strong> Inválido</strong>
                </div>

                <div style="
                    padding:12px;
                    background:#fff;
                    border-radius:8px;
                    border:1px solid #e4d8e9;
                ">
                    <i class="fa-solid fa-bolt"
                       aria-hidden="true"
                       style="color:#00734a;"></i>
                    <strong> Extremo</strong>
                </div>

            </div>
        </div>
    `,
    image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/test.png',
    nextButton: 'Siguiente: Paso 3'
},

{
    title: 'Paso 3: Ejecutar el programa con cada caso',
    content: `
        <div style="
            border-left:5px solid #00928d;
            padding:20px;
            background:#f2fbfa;
            border-radius:12px;
            color:#333;
        ">
            <div style="
                display:flex;
                align-items:center;
                gap:14px;
                margin-bottom:15px;
            ">
                <i class="fa-solid fa-play"
                   aria-hidden="true"
                   style="font-size:30px;color:#00928d;"></i>

                <strong style="
                    font-size:20px;
                    color:#00928d;
                ">
                    Ejecutar y comparar
                </strong>
            </div>

            <p style="line-height:1.7;margin:0;">
                Ejecutar el programa con <strong>cada caso de prueba</strong>
                y anotar si el resultado coincide con lo esperado.
            </p>

            <div style="
                margin-top:18px;
                display:flex;
                align-items:center;
                justify-content:center;
                gap:15px;
                flex-wrap:wrap;
            ">

                <span style="
                    padding:10px 16px;
                    background:#ffffff;
                    border:2px solid #00928d;
                    border-radius:8px;
                ">
                    Resultado esperado
                </span>

                <i class="fa-solid fa-arrow-right"
                   aria-hidden="true"
                   style="color:#00928d;font-size:20px;"></i>

                <span style="
                    padding:10px 16px;
                    background:#ffffff;
                    border:2px solid #00928d;
                    border-radius:8px;
                ">
                    Resultado obtenido
                </span>

            </div>
        </div>
    `,
    image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/test.png',
    nextButton: 'Siguiente: Paso 4'
},

{
    title: 'Paso 4: Identificar los fallos',
    content: `
        <div style="
            border-left:5px solid #d2232a;
            padding:20px;
            background:#fff5f5;
            border-radius:12px;
            color:#333;
        ">
            <div style="
                display:flex;
                align-items:center;
                gap:14px;
                margin-bottom:15px;
            ">
                <i class="fa-solid fa-triangle-exclamation"
                   aria-hidden="true"
                   style="font-size:30px;color:#d2232a;"></i>

                <strong style="
                    font-size:20px;
                    color:#d2232a;
                ">
                    Registrar el fallo
                </strong>
            </div>

            <p style="line-height:1.7;margin-top:0;">
                Si un caso falla, registrar exactamente
                <strong>qué salida dio el programa</strong> y
                <strong>qué salida se esperaba</strong>.
            </p>

            <div style="
                margin-top:18px;
                display:grid;
                grid-template-columns:1fr 1fr;
                gap:12px;
            ">

                <div style="
                    padding:15px;
                    background:#ffffff;
                    border-radius:8px;
                    border:1px solid #f0cccc;
                ">
                    <i class="fa-solid fa-xmark"
                       aria-hidden="true"
                       style="color:#d2232a;"></i>

                    <strong style="color:#d2232a;">
                        Salida obtenida
                    </strong>

                    <div style="margin-top:8px;">
                        30
                    </div>
                </div>

                <div style="
                    padding:15px;
                    background:#ffffff;
                    border-radius:8px;
                    border:1px solid #c9e2d4;
                ">
                    <i class="fa-solid fa-check"
                       aria-hidden="true"
                       style="color:#00734a;"></i>

                    <strong style="color:#00734a;">
                        Salida esperada
                    </strong>

                    <div style="margin-top:8px;">
                        50
                    </div>
                </div>

            </div>
        </div>
    `,
    image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/test.png',
    nextButton: 'Siguiente: Paso 5'
},

{
    title: 'Paso 5: Localizar la causa del fallo',
    content: `
        <div style="
            border-left:5px solid #2b93d1;
            padding:20px;
            background:#f3f9fd;
            border-radius:12px;
            color:#333;
        ">
            <div style="
                display:flex;
                align-items:center;
                gap:14px;
                margin-bottom:15px;
            ">
                <i class="fa-solid fa-magnifying-glass"
                   aria-hidden="true"
                   style="font-size:30px;color:#2b93d1;"></i>

                <strong style="
                    font-size:20px;
                    color:#006eae;
                ">
                    Investigar dónde se desvía
                </strong>
            </div>

            <p style="line-height:1.7;margin-top:0;">
                Leer el código línea por línea y utilizar una
                <strong>tabla de traza</strong> para simular la ejecución.
            </p>

            <div style="
                margin-top:15px;
                padding:15px;
                background:#ffffff;
                border-radius:8px;
                border:1px solid #cfe4f2;
            ">
                <i class="fa-solid fa-bug"
                   aria-hidden="true"
                   style="color:#d2232a;margin-right:7px;"></i>

                <strong>Punto de control</strong>

                <p style="margin:10px 0 0;line-height:1.6;">
                    Imprimir valores intermedios de las variables
                    para descubrir dónde se produce la desviación.
                </p>
            </div>

            <div style="
                margin-top:12px;
                padding:12px;
                background:#263238;
                color:#ffffff;
                border-radius:8px;
                font-family:monospace;
            ">
                base = 10<br>
                altura = 5<br>
                área = base * altura
            </div>

        </div>
    `,
    image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/test.png',
    nextButton: 'Siguiente: Paso 6'
},

{
    title: 'Paso 6: Corregir el error',
    content: `
        <div style="
            border-left:5px solid #4aa147;
            padding:20px;
            background:#f5fbf5;
            border-radius:12px;
            color:#333;
        ">
            <div style="
                display:flex;
                align-items:center;
                gap:14px;
                margin-bottom:15px;
            ">
                <i class="fa-solid fa-wrench"
                   aria-hidden="true"
                   style="font-size:30px;color:#4aa147;"></i>

                <strong style="
                    font-size:20px;
                    color:#00734a;
                ">
                    Aplicar la corrección
                </strong>
            </div>

            <p style="line-height:1.7;margin-top:0;">
                Modificar únicamente la línea o líneas responsables
                del problema.
            </p>

            <div style="
                margin-top:18px;
                padding:15px;
                background:#ffffff;
                border-radius:8px;
                border:1px solid #cde5d1;
            ">

                <div style="
                    color:#d2232a;
                    text-decoration:line-through;
                    margin-bottom:8px;
                ">
                    <i class="fa-solid fa-xmark"
                       aria-hidden="true"></i>
                    área = base + altura
                </div>

                <div style="color:#00734a;">
                    <i class="fa-solid fa-check"
                       aria-hidden="true"></i>
                    área = base * altura
                </div>

            </div>

            <p style="
                margin:15px 0 0;
                font-size:14px;
                color:#555;
            ">
                <i class="fa-solid fa-circle-info"
                   aria-hidden="true"
                   style="color:#4aa147;"></i>
                Hacer un cambio a la vez facilita identificar
                qué modificación solucionó el problema.
            </p>

        </div>
    `,
    image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/test.png',
    nextButton: 'Siguiente: Paso 7'
},

{
    title: 'Paso 7: Volver a probar',
    content: `
        <div style="
            border-left:5px solid #00734a;
            padding:20px;
            background:#f3faf7;
            border-radius:12px;
            color:#333;
        ">
            <div style="
                display:flex;
                align-items:center;
                gap:14px;
                margin-bottom:15px;
            ">
                <i class="fa-solid fa-rotate"
                   aria-hidden="true"
                   style="font-size:30px;color:#00734a;"></i>

                <strong style="
                    font-size:20px;
                    color:#00734a;
                ">
                    Ejecutar nuevamente las pruebas
                </strong>
            </div>

            <p style="line-height:1.7;margin-top:0;">
                No basta con repetir solamente el caso que falló.
                Hay que ejecutar <strong>todos los casos de prueba</strong>.
            </p>

            <div style="
                margin-top:18px;
                display:flex;
                justify-content:center;
                gap:10px;
                flex-wrap:wrap;
            ">

                <span style="
                    padding:10px 14px;
                    border-radius:20px;
                    background:#4aa147;
                    color:#fff;
                ">
                    <i class="fa-solid fa-check"
                       aria-hidden="true"></i>
                    Caso 1
                </span>

                <span style="
                    padding:10px 14px;
                    border-radius:20px;
                    background:#4aa147;
                    color:#fff;
                ">
                    <i class="fa-solid fa-check"
                       aria-hidden="true"></i>
                    Caso 2
                </span>

                <span style="
                    padding:10px 14px;
                    border-radius:20px;
                    background:#4aa147;
                    color:#fff;
                ">
                    <i class="fa-solid fa-check"
                       aria-hidden="true"></i>
                    Caso 3
                </span>

                <span style="
                    padding:10px 14px;
                    border-radius:20px;
                    background:#4aa147;
                    color:#fff;
                ">
                    <i class="fa-solid fa-check"
                       aria-hidden="true"></i>
                    Caso 4
                </span>

            </div>

            <div style="
                margin-top:18px;
                text-align:center;
                font-weight:bold;
                color:#00734a;
            ">
                El ciclo se repite hasta que todos los casos pasen.
            </div>

        </div>
    `,
    image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/test.png',
    nextButton: 'Siguiente: Paso 8'
},

{
    title: 'Paso 8: Documentar',
    content: `
        <div style="
            border-left:5px solid #00928d;
            padding:20px;
            background:#f2fbfa;
            border-radius:12px;
            color:#333;
        ">
            <div style="
                display:flex;
                align-items:center;
                gap:14px;
                margin-bottom:15px;
            ">
                <i class="fa-solid fa-file-circle-check"
                   aria-hidden="true"
                   style="font-size:30px;color:#00928d;"></i>

                <strong style="
                    font-size:20px;
                    color:#00734a;
                ">
                    Registrar lo aprendido
                </strong>
            </div>

            <p style="line-height:1.7;margin-top:0;">
                Anotar qué error se encontró, cómo se corrigió
                y qué caso de prueba permitió detectarlo.
            </p>

            <div style="
                margin-top:18px;
                background:#ffffff;
                border-radius:10px;
                padding:16px;
                border:1px solid #cce8e5;
            ">

                <div style="
                    display:flex;
                    gap:10px;
                    margin-bottom:12px;
                ">
                    <i class="fa-solid fa-bug"
                       aria-hidden="true"
                       style="color:#d2232a;"></i>

                    <div>
                        <strong>Error encontrado</strong><br>
                        La operación utilizaba suma en lugar de multiplicación.
                    </div>
                </div>

                <div style="
                    display:flex;
                    gap:10px;
                    margin-bottom:12px;
                ">
                    <i class="fa-solid fa-wrench"
                       aria-hidden="true"
                       style="color:#4aa147;"></i>

                    <div>
                        <strong>Corrección</strong><br>
                        Se modificó la operación responsable.
                    </div>
                </div>

                <div style="
                    display:flex;
                    gap:10px;
                ">
                    <i class="fa-solid fa-vial"
                       aria-hidden="true"
                       style="color:#006eae;"></i>

                    <div>
                        <strong>Caso que lo detectó</strong><br>
                        Prueba con base 10 y altura 5.
                    </div>
                </div>

            </div>

            <div style="
                margin-top:18px;
                padding:13px;
                background:#00734a;
                color:#ffffff;
                border-radius:8px;
                text-align:center;
                font-weight:bold;
            ">
                <i class="fa-solid fa-circle-check"
                   aria-hidden="true"></i>
                ¡Proceso completado!
            </div>

        </div>
    `,
    image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/test.png',
    nextButton: 'Finalizar'
}

                    ]
                }
            ]
        }
        /** Plantilla nuevo módulo
        ,
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
