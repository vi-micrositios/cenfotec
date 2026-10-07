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
                            <p><strong>Principales componentes del computador:</strong></p>

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
                            content: `<p>Es la parte física del computador, es decir son componentes que podemos tocar.</p>
                                        <p>Por ejemplo:</p>
                                        <ul>
                                            <li>teclado</li>
                                            <li>mouse</li>
                                            <li>monitor</li>
                                            <li>memoria RAM</li>
                                            <li>disco SSD</li>
                                            <li>procesador</li>
                                            <li>tarjeta madre</li>
                                            <li>impresora</li>
                                        </ul>`,
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
                                            <li>Microsoft Word</li>
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/algoritmo.png',
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/diagramaFlujo.png',
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
<pre class="codigo">
base = float(input("Ingrese la base: "))
altura = float(input("Ingrese la altura: "))
area = base * altura
print("El área es:", area)
</pre>
                                    `,
                            nextButton: ''
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
                                <li>Python</li>
                                <li>Java</li>
                                <li>C</li>
                                <li>C++</li>
                                <li>JavaScript</li>
                                <li>C#</li>
                                <li>Kotlin</li>
                            </ul>
                            <p>Para escribir programas se necesita un editor de código.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/lenguaje.png',
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/editor.png',
                            nextButton: 'Siguiente: Compilador'
                        },
                        {
                            title: 'Compilador',
                            content: `<p>Es un programa que traduce código fuente escrito en un lenguaje de programación a otra forma que pueda ser ejecutada por la computadora o por una máquina virtual.</p>
                            <p>Programa en C++</p>
                            <pre class="codigo">int suma = 5 + 3; </pre>

                            <p>El compilador puede convertirlo en algo parecido a:</p>
<pre class="codigo">
mov eax, 5
add eax, 3
</pre>

                            <p>Que significa aproximadamente:</p>
<pre class="codigo">
mov eax, 5 &nbsp;&nbsp; → Guardar el número 5 en el registro EAX
add eax, 3 &nbsp;&nbsp; → Sumarle 3 a EAX
</pre>

                            <p>Lenguajes como C y C++ utilizan tradicionalmente procesos de compilación.</p>`,
                            nextButton: 'Siguiente: Intérprete'
                        },
                        {
                            title: 'Intérprete',
                            content: `<p>Un intérprete ejecuta instrucciones de un programa mediante un sistema que las procesa durante la ejecución. </p>

                            <p>Python utiliza un intérprete para ejecutar sus programas.</p>
                            <p>Ejemplo en Python:</p>
                            <pre class="codigo"> print("Hola") </pre>

                            <p>Al ejecutar el programa, el intérprete de Python procesa las instrucciones y produce:</p>
                            <pre class="codigo"> Hola </pre>`,
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/mantenimiento.png',
                            nextButton: 'Siguiente: Ejemplos de reglas'
                        },
                        {
                            title: 'Ejemplos de reglas típicas en un estándar',
                            content: `<p><strong>Nombres de variables y funciones</strong></p>
                            <ul>
                                <li>Usar nombres descriptivos, no letras sueltas. Incorrecto: x = 10. Correcto: edad_usuario = 10.</li>
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
                                <li>No exceder 100 caracteres por línea, para que el código quede visible sin desplazarse horizontalmente.</li>
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/lenguajes.png',
                            nextButton: ''
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/listaCotejo.png',
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
                                                                
                            </ol>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/listaRevision.png',
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/recomendaciones.png',
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
                        }, {
                            title: 'Ejemplo de casos de prueba',
                            content: `
                            <p>Para un programa que calcula el área de un rectángulo (base × altura): </p>
                            <table style="width: 100%; border-collapse: collapse;">
                                <thead>
                                    <tr style="background-color: #006eae; color: white;">
                                        <th style="padding: 12px; border: 1px solid #ddd;">N.º</th>
                                        <th style="padding: 12px; border: 1px solid #ddd;">Descripción</th>
                                        <th style="padding: 12px; border: 1px solid #ddd;">Base</th>
                                        <th style="padding: 12px; border: 1px solid #ddd;">Altura</th>
                                        <th style="padding: 12px; border: 1px solid #ddd;">Área esperada</th>
                                        <th style="padding: 12px; border: 1px solid #ddd;">Resultado de la prueba</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">1</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Rectángulo típico</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">10</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">50</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;"> </td>
                                    </tr>

                                    <tr style="background-color: #f5f9fb;">
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">2</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Base cero</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;"> </td>
                                    </tr>

                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">3</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Altura cero</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">10</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;"> </td>
                                    </tr>

                                    <tr style="background-color: #f5f9fb;">
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">4</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Ambos cero</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;"> </td>
                                    </tr>

                                    <tr>
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">5</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Números decimales</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">2.5</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">4.0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">10.0</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;"> </td>
                                    </tr>

                                    <tr style="background-color: #f5f9fb;">
                                        <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">6</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Números negativos</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">-3</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">5</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;">Mensaje de error</td>
                                        <td style="padding: 10px; border: 1px solid #ddd;"> </td>
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/test.png',
                            nextButton: 'Siguiente:Errores de lógica'
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/bug.png',
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/bugs.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm003-t007',
                    label: 'Proceso básico de pruebas y depuración',
                    steps: [
                        {
                            title: 'Paso 1: Entender qué debería hacer el programa',
                            content: `
                                <p>Tener claro el <strong>algoritmo</strong>, las <strong>entradas</strong> y las <strong>salidas esperadas</strong>. </p>

                                <p class="nota">
                                    <i class="fa-solid fa-code" aria-hidden="true" style="color:#006eae;margin-right:8px;"></i>
                                    <strong>Pregunta clave:</strong> <br>
                                    ¿Qué debería hacer exactamente el programa?
                                </p>
                            `,
                            nextButton: 'Siguiente: Paso 2'
                        },
                        {
                            title: 'Paso 2: Diseñar los casos de prueba',
                            content: `
                                <p>Crear una tabla de casos de prueba que contemple diferentes situaciones:</p>

                                <ul style="list-style-type: none;">
                                    <li> <i class="fa-solid fa-circle-check" aria-hidden="true" style="color:#4aa147;"></i>  Normal (válidos) </li>
                                    <li> <i class="fa-solid fa-ruler-horizontal" aria-hidden="true" style="color:#712c86;"></i> Límite (frontera)</li>
                                    <li> <i class="fa-solid fa-ban" aria-hidden="true" style="color:#d2232a;"></i> Inválido (erróneo)</li>
                                    <li> <i class="fa-solid fa-bolt" aria-hidden="true" style="color:#00734a;"></i> Extremo</li>
                                </ul>
                            `,
                            nextButton: 'Siguiente: Paso 3'
                        },
                        {
                            title: 'Paso 3: Ejecutar el programa con cada caso',
                            content: `
                                <p>Ejecutar el programa con <strong>cada caso de prueba</strong> y anotar si el resultado coincide con lo esperado.</p>

                                <p>
                                    <span style="margin:10px 20px; padding:10px 16px; background:#ffffff; border:2px solid #00928d; border-radius:8px;">
                                        Resultado esperado
                                    </span>

                                    <i class="fa-solid fa-arrow-right" aria-hidden="true" style="margin:0 10px; color:#00928d; font-size:20px;"></i>

                                    <span style="margin:10px 20px; padding:10px 16px; background:#ffffff; border:2px solid #00928d; border-radius:8px;">
                                        Resultado obtenido
                                    </span>

                                </p>
                            `,
                            nextButton: 'Siguiente: Paso 4'
                        },
                        {
                            title: 'Paso 4: Identificar los fallos',
                            content: `
                                <p>Si un caso falla, registrar exactamente <strong>qué salida dio el programa</strong> y <strong>qué salida se esperaba</strong>.</p>

                                <p style=" padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc;">
                                    <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> 
                                    <strong style="color:#d2232a;"> Salida obtenida </strong> <br>

                                    <span style="margin-top:8px;"> 15 </span>
                                </p>

                                <p style=" padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4;">
                                    <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> 
                                    <strong style="color:#4aa147;"> Salida esperada </strong> <br>

                                    <span style="margin-top:8px;"> 50 </span>
                                </p>
                            `,
                            nextButton: 'Siguiente: Paso 5'
                        }, {
                            title: 'Paso 5: Localizar la causa del fallo',
                            content: `
                                <p>Leer el código línea por línea y utilizar una tabla de traza para simular la ejecución.</p>

                                <p class="nota">
                                    <i class="fa-solid fa-bug" aria-hidden="true" style="color:#d2232a; margin-right:8px;"></i>
                                    <strong>Punto de control</strong> <br>
                                    Agregar "puntos de control": imprimir valores intermedios de variables para ver dónde se desvía el programa. <br> 
                                    Ejemplo: si el área debería ser 50 y da 30, imprimir la base y la altura justo antes de multiplicar para ver si los valores son los correctos.
                                </p>

<pre class="codigo">
base = 10 <br>
altura = 5 <br>
print(base, altura)
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 6'
                        }, {
                            title: 'Paso 6: Corregir el error',
                            content: `
                                <p>Modificar únicamente la línea o líneas responsables del problema.</p>

                                <pre class="codigo"> area = base * altura </pre>

                                <p class="nota">
                                    <i class="fa-solid fa-circle-info" aria-hidden="true" style="color:#4aa147;"></i>
                                    Hacer un cambio a la vez facilita identificar qué modificación solucionó el problema.
                                </p>
                            `,
                            nextButton: 'Siguiente: Paso 7'
                        }, {
                            title: 'Paso 7: Volver a probar',
                            content: `
                                <p>Ejecutar de nuevo todos los casos de prueba (no solo el que falló, porque el cambio podría haber roto algo que antes funcionaba).</p>

                                <ul style="list-style-type: none;">
                                    <li><i class="fa-solid fa-check" aria-hidden="true" style="color:#4aa147;"></i> Caso 1 </li>
                                    <li><i class="fa-solid fa-check" aria-hidden="true" style="color:#4aa147;"></i> Caso 2 </li>
                                    <li><i class="fa-solid fa-check" aria-hidden="true" style="color:#4aa147;"></i> Caso 3 </li>
                                    <li><i class="fa-solid fa-check" aria-hidden="true" style="color:#4aa147;"></i> Caso 4 </li>
                                </ul>

                                <p class="nota">
                                    <i class="fa-solid fa-circle-info" aria-hidden="true" style="color:#4aa147;"></i>
                                    El ciclo se repite hasta que todos los casos pasen.
                                </p>
                            `,
                            nextButton: 'Siguiente: Paso 8'
                        }, {
                            title: 'Paso 8: Documentar',
                            content: `
                                <p>Anotar qué error se encontró, cómo se corrigió y qué caso de prueba lo detectó. Esto ayuda a no repetir el mismo error en el futuro.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/documentar.png',
                            nextButton: 'Siguiente: Herramientas útiles para depurar'
                        }, {
                            title: 'Herramientas útiles para depurar',
                            content: `
                                <ul>
                                    <li>Impresiones de depuración: Colocar print() en medio del código para ver valores de variables.</li>
                                    <li> Depurador (debugger): Herramienta del IDE que permite ejecutar el programa paso a paso y ver los valores de las variables en cada momento.</li>
                                    <li>Tabla de traza</li>
                                </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/ide.png',
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_004',
            label: 'Control condicional',
            subtemas: [
                {
                    id: 'm004-t001',
                    label: 'Estructuras condicionales',
                    steps: [
                        {
                            title: '¿Qué es una estructura condicional?',
                            content: `<p>Es una instrucción (o conjunto de instrucciones) que le permite al programa evaluar una condición y, según el resultado de esa evaluación (verdadero o falso), ejecutar un bloque de código u otro.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/decision.png',
                            nextButton: 'Siguiente: Condición'
                        },
                        {
                            title: 'La condición: el corazón de la estructura',
                            content: `<p>Una condición es una expresión que solo puede dar como resultado verdadero (True) o falso (False). Se construye usando operadores de comparación y operadores lógicos.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/dosRutas.png',
                            nextButton: 'Siguiente: Operadores de comparación'
                        },
                        {
                            title: 'Operadores de comparación',
                            content: `<p>Se utilizan para comparar dos valores. Si el resultado de la comparación es correcto la expresión es considerada verdadera. </p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-top:none; border-radius:0 0 14px 14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                                <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">

                                    <thead>
                                        <tr>
                                            <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operador</th>
                                            <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
                                            <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                                            <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code style="background:#9cc8ff; color:#003d61; padding:4px 8px; border-radius:6px;">==</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Igual a</td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code>5 == 5</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">
                                                Verdadero
                                            </td>
                                        </tr>

                                        <tr style="background:#f3f9ff;">
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code style="background:#9cc8ff; color:#003d61; padding:4px 8px; border-radius:6px;">!=</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Distinto de</td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code>5 != 3</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">
                                                Verdadero
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code style="background:#9cc8ff; color:#003d61; padding:4px 8px; border-radius:6px;">&gt;</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor que</td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code>7 &gt; 10</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#d2232a; font-weight:bold;">
                                                Falso
                                            </td>
                                        </tr>

                                        <tr style="background:#f3f9ff;">
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code style="background:#9cc8ff; color:#003d61; padding:4px 8px; border-radius:6px;">&lt;</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor que</td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code>3 &lt; 8</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">
                                                Verdadero
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code style="background:#9cc8ff; color:#003d61; padding:4px 8px; border-radius:6px;">&gt;=</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor o igual que</td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code>5 &gt;= 5</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">
                                                Verdadero
                                            </td>
                                        </tr>

                                        <tr style="background:#f3f9ff;">
                                            <td style="padding:13px 12px;">
                                                <code style="background:#9cc8ff; color:#003d61; padding:4px 8px; border-radius:6px;">&lt;=</code>
                                            </td>
                                            <td style="padding:13px 12px;">Menor o igual que</td>
                                            <td style="padding:13px 12px;">
                                                <code>4 &lt;= 2</code>
                                            </td>
                                            <td style="padding:13px 12px; color:#d2232a; font-weight:bold;">
                                                Falso
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Operadores lógicos'
                        },
                        {
                            title: 'Operadores lógicos o booleanos',
                            content: `<p>Permiten combinar la evaluación de dos valores booleanos y devolver un solo resultado verdadero o falso. </p>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-top:none; border-radius:0 0 14px 14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                                <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">

                                    <thead>
                                        <tr>
                                            <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operador</th>
                                            <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
                                            <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                                            <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code style="background:#9cc8ff; color:#003d61; padding:4px 8px; border-radius:6px;">and (Y)</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                Verdadero solo si ambas son verdaderas
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code>(5 &gt; 3) and (2 &lt; 4)</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">
                                                Verdadero
                                            </td>
                                        </tr>

                                        <tr style="background:#f3f9ff;">
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code style="background:#9cc8ff; color:#003d61; padding:4px 8px; border-radius:6px;">or (O)</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                Verdadero si al menos una es verdadera
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">
                                                <code>(5 &gt; 10) or (2 &lt; 4)</code>
                                            </td>
                                            <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">
                                                Verdadero
                                            </td>
                                        </tr>

                                        <tr>
                                            <td style="padding:13px 12px;">
                                                <code style="background:#9cc8ff; color:#003d61; padding:4px 8px; border-radius:6px;">not (NO)</code>
                                            </td>
                                            <td style="padding:13px 12px;">
                                                Invierte el valor
                                            </td>
                                            <td style="padding:13px 12px;">
                                                <code>not (5 &gt; 3)</code>
                                            </td>
                                            <td style="padding:13px 12px; color:#d2232a; font-weight:bold;">
                                                Falso
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t002',
                    label: 'Tipos de estructuras condicionales',
                    steps: [
                        {
                            title: 'Condicional simple (if)',
                            content: `<p>Evalúa una condición. Si es verdadera, ejecuta un bloque de código. Si es falsa, no hace nada y continúa con la siguiente instrucción.</p>

                            <p><strong>Sintaxis genérica:</strong></p>
<pre class="codigo">
si (condición) entonces
    instrucciones
fin si
</pre>
                            
                            <p> Ejemplo:</p> 
<pre class="codigo">
if edad >= 18:
    print("Es mayor de edad")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si la edad es 20, muestra el mensaje. <br>
                            Si es 15, no muestra nada y sigue.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/unaRuta.png',
                            nextButton: 'Siguiente: Condicional doble'
                        },
                        {
                            title: 'Condicional doble (if-else)',
                            content: `<p>Evalúa una condición. Si es verdadera, ejecuta un bloque. Si es falsa, ejecuta otro bloque.</p>
                            <p><strong>Sintaxis genérica:</strong></p>
<pre class="codigo">
si (condición) entonces
    instrucciones A
si no
    instrucciones B
fin si
</pre>
                            
                            <p> Ejemplo:</p> 
<pre class="codigo">
if nota >= 70:
    print("Aprobado")
else:
    print("Reprobado")
</pre>
                            <p> Nunca se ejecutan ambos bloques: o se ejecuta uno, o se ejecuta el otro. Siempre se ejecuta exactamente uno de los dos. </p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si la nota es 20, muestra el mensaje "Reprobado". <br>
                            Si es 85, muestra el mensaje "Aprobado".</p>
                            
                            `,
                            nextButton: 'Siguiente: Condicional múltiple'
                        },
                        {
                            title: 'Condicional múltiple (if-else-if o elif)',
                            content: `<p>Se usa cuando hay más de dos caminos posibles. Se evalúan varias condiciones en orden. La primera que sea verdadera ejecuta su bloque y se sale de toda la estructura. Si ninguna es verdadera, se ejecuta el bloque final (else), que es opcional.</p>
                            <p><strong>Sintaxis genérica:</strong></p>
<pre class="codigo">
si (condición 1) entonces
    instrucciones A
si no, si (condición 2) entonces
    instrucciones B
si no, si (condición 3) entonces
    instrucciones C
si no
    instrucciones D
fin si
</pre>
                            
                            <p> Ejemplo:</p> 
<pre class="codigo">
nota = float(input("Ingrese la nota: "))
if nota >= 90:
    print("Excelente")
elif nota >= 80:
    print("Muy bueno")
elif nota >= 70:
    print("Aprobado")
else:
    print("Reprobado")
</pre>
                            <p> Nunca se ejecutan ambos bloques: o se ejecuta uno, o se ejecuta el otro. Siempre se ejecuta exactamente uno de los dos. </p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si la nota es 20, muestra el mensaje "Reprobado". <br>
                            Si la nota es 73, muestra el mensaje "Aprobado". <br>
                            Si la nota es 80, muestra el mensaje "Muy bueno". <br>
                            Si es 85, muestra el mensaje "Excelente".</p>
                            
                            `,
                            nextButton: 'Siguiente: Condicional anidada'
                        },
                        {
                            title: 'Condicional anidada',
                            content: `<p>Es una estructura condicional dentro de otra. Se usa cuando una decisión depende de otra decisión previa.</p>
                            <p><strong>Sintaxis genérica:</strong></p>
<pre class="codigo">
si (edad >= 18) entonces
    si (tiene_licencia == verdadero) entonces
        mostrar "Puede conducir"
    si no
        mostrar "Es mayor de edad, pero no tiene licencia"
    fin si
si no
    mostrar "Es menor de edad, no puede conducir"
fin si
</pre>
                            <p> Ejemplo:</p>
<pre class="codigo">
edad = int(input("Edad: "))
tiene_licencia = input("¿Tiene licencia? (s/n): ") == "s"
if edad &gt;= 18:
    if tiene_licencia:
        print("Puede conducir")
    else:
        print("Es mayor de edad, pero no tiene licencia")
else:
    print("Es menor de edad, no puede conducir")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            La pregunta por la licencia solo se hace si la persona es mayor de edad.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/tresRutas.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t003',
                    label: 'Flujos condicionales',
                    steps: [
                        {
                            title: '¿Qué es un flujo condicional?',
                            content: `<p>Es el camino que sigue la ejecución del programa cuando se encuentra con una estructura condicional. A diferencia del flujo secuencial (que siempre va hacia adelante), el flujo condicional se bifurca: puede tomar un camino u otro, e incluso puede saltarse bloques enteros de código.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/cuatroRutas.png',
                            nextButton: 'Siguiente: Representación'
                        },
                        {
                            title: 'Representación gráfica',
                            content: `<p>En un diagrama de flujo, una condición se representa con un rombo. Del rombo salen dos flechas: una etiquetada "Sí" (o "Verdadero") y otra etiquetada "No" (o "Falso"). Cada flecha lleva a un bloque distinto.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/algoritmoDecisiones.png',
                            nextButton: 'Siguiente: Características'
                        },
                        {
                            title: 'Características del flujo condicional',
                            content: `
                            <ul>
                                <li>No es lineal: El programa puede saltar de una línea a otra, dependiendo de la condición.</li>
                                <li>Es excluyente en el if-else: Solo se ejecuta uno de los dos caminos.</li>
                                <li>Puede no ejecutar nada: En el if simple, si la condición es falsa, el bloque interno se salta por completo.</li>
                                <li>Puede anidarse: Un flujo condicional puede contener otro dentro, creando árboles de decisión.</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/multiplesRutas.png',
                            nextButton: 'Siguiente: Recorrido del flujo'
                        },
                        {
                            title: 'Recorrido del flujo condicional',
                            content: `<p>Para entender un flujo condicional, conviene seguir línea por línea qué instrucciones se ejecutan con distintos datos de entrada.</p>
                            <p><strong>Programa que aplica 10% de descuento a compras mayores a 20 000:</strong></p>
<pre class="codigo">
precio = float(input("Precio: "))      # línea 1
cantidad = int(input("Cantidad: "))    # línea 2
total = precio * cantidad              # línea 3
if total &gt; 20000:                      # línea 4
    total = total * 0.9                # línea 5
print("Total:", total)                 # línea 6
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Precio</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cantidad</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">total > 20000</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Líneas ejecutadas</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Salida</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5000</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1, 2, 3, 4, 5, 6</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Total: 22500.0</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">3000</td>
                                <td style="padding:13px 12px;">2</td>
                                <td style="padding:13px 12px;"><span style="color:#d2232a; font-weight:bold;">Falso</span></td>
                                <td style="padding:13px 12px;">1, 2, 3, 4, 6</td>
                                <td style="padding:13px 12px;">Total: 6000.0</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Con la segunda entrada la línea 5 se salta por completo: la condición es falsa y el flujo continúa directamente en la línea 6.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t004',
                    label: 'Funcionalidad del flujo condicional',
                    steps: [
                        {
                            title: 'Funcionalidad del flujo condicional',
                            content: `<p>El flujo condicional permite que un programa:</p>
                            <ul>
                                <li><strong>Valide datos de entrada</strong>: Verificar si el usuario ingresó un número positivo, si la contraseña es correcta, si el correo tiene formato válido.</li>
                                <li><strong>Tome decisiones</strong>: Aplicar un descuento solo si el cliente es frecuente; mostrar un mensaje solo si la edad es mayor a 18.</li>
                                <li><strong>Maneje múltiples escenarios</strong>: Clasificar un triángulo según sus lados; asignar una letra según la nota; determinar el día de la semana según un número.</li>
                                <li><strong>Evite errores</strong>: Antes de dividir, verificar que el divisor no sea cero; antes de acceder a una lista, verificar que el índice exista.</li>
                                <li><strong>Controle el flujo de un menú</strong>: Si el usuario elige la opción 1, hacer esto; si elige la 2, hacer aquello.</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Validar datos'
                        },
                        {
                            title: 'Validar datos de entrada',
                            content: `<p>Antes de usar un dato, el programa verifica que tenga sentido. Si no lo tiene, informa al usuario en lugar de producir un resultado incorrecto.</p>
<pre class="codigo">
edad = int(input("Ingrese su edad: "))
if edad &lt; 0 or edad &gt; 120:
    print("Edad no válida")
else:
    print("Edad registrada:", edad)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si la edad es -3 o 200, muestra "Edad no válida". <br>
                            Si es 25, muestra "Edad registrada: 25".</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/validacionDatos.png',
                            nextButton: 'Siguiente: Evitar errores'
                        },
                        {
                            title: 'Evitar errores en tiempo de ejecución',
                            content: `<p>Algunas operaciones detienen el programa si los datos no son adecuados. Una condición previa evita el error.</p>
<pre class="codigo">
dividendo = float(input("Dividendo: "))
divisor = float(input("Divisor: "))
if divisor == 0:
    print("No se puede dividir entre cero")
else:
    print("Resultado:", dividendo / divisor)
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Sin el <code>if</code>, ingresar 0 como divisor produce el error <code>ZeroDivisionError</code> y el programa termina abruptamente.</p>
                            `,
                            nextButton: 'Siguiente: Múltiples escenarios'
                        },
                        {
                            title: 'Manejar múltiples escenarios',
                            content: `<p>Cuando hay más de dos resultados posibles se usa una condicional múltiple. Ejemplo: clasificar un triángulo según la medida de sus lados.</p>
<pre class="codigo">
lado1 = float(input("Lado 1: "))
lado2 = float(input("Lado 2: "))
lado3 = float(input("Lado 3: "))

if lado1 == lado2 and lado2 == lado3:
    print("Triángulo equilátero")
elif lado1 == lado2 or lado1 == lado3 or lado2 == lado3:
    print("Triángulo isósceles")
else:
    print("Triángulo escaleno")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El orden importa: primero se pregunta por el caso más restrictivo (tres lados iguales). Si se preguntara primero por "dos lados iguales", un triángulo equilátero se clasificaría como isósceles.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/triangulos.png',
                            nextButton: 'Siguiente: Controlar un menú'
                        },
                        {
                            title: 'Controlar un menú de opciones',
                            content: `<p>Un menú le muestra opciones al usuario y ejecuta una acción distinta según la que elija.</p>
<pre class="codigo">
print("1. Sumar")
print("2. Restar")
opcion = input("Elija una opción: ")
num1 = float(input("Primer número: "))
num2 = float(input("Segundo número: "))

if opcion == "1":
    print("Resultado:", num1 + num2)
elif opcion == "2":
    print("Resultado:", num1 - num2)
else:
    print("Opción no válida")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El <code>else</code> final atiende cualquier opción que el programa no reconoce, por ejemplo "7" o "hola".</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
¿Qué ocurre si en el primer número el usuario escribe una letra? <code>float()</code> produce un error que ninguna condición <code>if</code> puede evitar. Ese caso se resuelve con <strong>excepciones</strong>, el siguiente tema.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/menuOpciones.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t007',
                    label: 'Excepciones',
                    steps: [
                        {
                            title: '¿Qué es una excepción?',
                            content: `<p>Una excepción es un <strong>error que ocurre durante la ejecución</strong> de un programa. Si no se maneja, el programa se detiene y Python muestra un mensaje de error (traceback).</p>
                            <p><strong>Ejemplo:</strong></p>
<pre class="codigo">
edad = int(input("Ingrese su edad: "))   # el usuario escribe: hola
</pre>
                            <p><strong>Resultado:</strong></p>
<pre class="codigo">
ValueError: invalid literal for int() with base 10: 'hola'
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Las validaciones con <code>if</code> no evitan este error, porque ocurre en la conversión, <strong>antes</strong> de llegar a cualquier condición.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/excepcion.png',
                            nextButton: 'Siguiente: Excepciones comunes'
                        },
                        {
                            title: 'Excepciones comunes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Excepción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuándo ocurre</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ValueError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un valor no tiene el formato esperado.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>int("hola")</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ZeroDivisionError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se divide entre cero.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>10 / 0</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>IndexError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se usa un índice que no existe en una lista (módulo 6).</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[1, 2, 3][5]</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>NameError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se usa una variable que no ha sido creada.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>print(totl)</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>TypeError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se opera con tipos incompatibles.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"Edad: " + 20</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>FileNotFoundError</code></td>
                                <td style="padding:13px 12px;">Se intenta abrir un archivo que no existe (módulo 6).</td>
                                <td style="padding:13px 12px;"><code>open("datos.txt")</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: try y except'
                        },
                        {
                            title: 'Manejo de excepciones con try y except',
                            content: `<p>El bloque <code>try</code> contiene las instrucciones que podrían fallar. Si ocurre una excepción, el flujo salta al bloque <code>except</code> en lugar de detener el programa.</p>
                            <p><strong>Sintaxis genérica:</strong></p>
<pre class="codigo">
intentar
    instrucciones que pueden fallar
capturar error
    instrucciones si ocurre el error
fin intentar
</pre>
<pre class="codigo">
try:
    edad = int(input("Ingrese su edad: "))
    print("Edad registrada:", edad)
except ValueError:
    print("Debe ingresar un número entero")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si el usuario escribe 25, se ejecuta todo el <code>try</code> y se salta el <code>except</code>. <br>
                            Si escribe "hola", el <code>print</code> del <code>try</code> no se ejecuta y se muestra el mensaje del <code>except</code>.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El bloque <code>try</code> también es una forma de <strong>flujo condicional</strong>: si no ocurre un error se sigue un camino; si ocurre, se sigue otro. En el módulo 5 se combinará con ciclos para volver a pedir el dato hasta que sea válido.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/tryExcept.png',
                            nextButton: 'Siguiente: Varias excepciones'
                        },
                        {
                            title: 'Capturar varias excepciones',
                            content: `<p>Un mismo <code>try</code> puede tener varios bloques <code>except</code>, uno por cada tipo de error, para dar un mensaje adecuado en cada caso.</p>
<pre class="codigo">
try:
    dividendo = float(input("Dividendo: "))
    divisor = float(input("Divisor: "))
    print("Resultado:", dividendo / divisor)
except ValueError:
    print("Debe ingresar valores numéricos")
except ZeroDivisionError:
    print("No se puede dividir entre cero")
</pre>
                            `,
                            nextButton: 'Siguiente: else y finally'
                        },
                        {
                            title: 'Bloques else y finally',
                            content: `<ul>
                                <li><strong>else</strong>: se ejecuta solo si <strong>no</strong> ocurrió ninguna excepción en el <code>try</code>.</li>
                                <li><strong>finally</strong>: se ejecuta <strong>siempre</strong>, haya ocurrido o no una excepción. Se usa para tareas de cierre.</li>
                            </ul>
<pre class="codigo">
try:
    numero = int(input("Ingrese un número: "))
except ValueError:
    print("Dato no válido")
else:
    print("El doble es:", numero * 2)
finally:
    print("Fin del proceso")
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Entrada</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Salida</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El doble es: 16<br>Fin del proceso</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">abc</td>
                                <td style="padding:13px 12px;">Dato no válido<br>Fin del proceso</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas con excepciones',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto: oculta cualquier error</strong>
<pre class="codigo">
try:
    edad = int(input("Edad: "))
except:
    pass
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
try:
    edad = int(input("Edad: "))
except ValueError:
    print("La edad debe ser un número entero")
</pre>
                            </div>
                            <ul>
                                <li>Capture excepciones <strong>específicas</strong> (<code>ValueError</code>, <code>ZeroDivisionError</code>) y no un <code>except</code> genérico.</li>
                                <li>Mantenga el bloque <code>try</code> pequeño: solo las instrucciones que pueden fallar.</li>
                                <li>Nunca deje un <code>except</code> vacío: el error desaparece pero el problema sigue ahí.</li>
                                <li>Muestre mensajes que le indiquen al usuario qué hacer.</li>
                                <li>Las excepciones no sustituyen las validaciones: un <code>try</code> verifica que la edad sea un número; un <code>if</code> verifica que esté en un rango válido.</li>
                            </ul>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t005',
                    label: 'Calidad de la programación con flujo condicional',
                    steps: [
                        {
                            title: 'Calidad en las estructuras condicionales',
                            content: `<p>Un programa con condiciones puede funcionar bien con algunos datos y fallar con otros, porque cada dato puede llevar el flujo por un camino diferente.</p>
                            <p>Programar con calidad significa que <strong>cada camino</strong> sea correcto, fácil de leer y haya sido probado.</p>
                            <ul>
                                <li>Las condiciones están en el orden correcto.</li>
                                <li>No hay condiciones repetidas ni innecesarias.</li>
                                <li>El código está bien indentado y se entiende sin esfuerzo.</li>
                                <li>Se probaron todos los caminos y los valores límite.</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/calidadCondicional.png',
                            nextButton: 'Siguiente: Orden de las condiciones'
                        },
                        {
                            title: 'Ordenar bien las condiciones',
                            content: `<p>En una condicional múltiple se ejecuta solo la <strong>primera</strong> condición verdadera. Si una condición general va antes que una específica, la específica nunca se alcanza.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
if nota &gt;= 70:
    print("Aprobado")
elif nota &gt;= 90:
    print("Excelente")   # nunca se ejecuta
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
if nota &gt;= 90:
    print("Excelente")
elif nota &gt;= 70:
    print("Aprobado")
</pre>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Con una nota de 95, la versión incorrecta muestra "Aprobado", porque 95 >= 70 ya es verdadero.</p>
                            `,
                            nextButton: 'Siguiente: Condiciones redundantes'
                        },
                        {
                            title: 'Evitar condiciones redundantes',
                            content: `<p>Una condición redundante evalúa algo que ya se sabe. Hace el código más largo y más propenso a errores.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
if aprobado == True:
    print("Felicidades")

if nota &gt;= 70:
    print("Aprobado")
elif nota &lt; 70:
    print("Reprobado")
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
if aprobado:
    print("Felicidades")

if nota &gt;= 70:
    print("Aprobado")
else:
    print("Reprobado")
</pre>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si la nota no es mayor o igual a 70, ya se sabe que es menor: basta con <code>else</code>.</p>
                            `,
                            nextButton: 'Siguiente: Anidamiento excesivo'
                        },
                        {
                            title: 'Evitar el anidamiento excesivo',
                            content: `<p>Anidar muchas condiciones crea código en forma de "escalera" que es difícil de leer. A menudo se puede simplificar con operadores lógicos o con <code>elif</code>.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
if edad &gt;= 18:
    if tiene_licencia:
        if tiene_seguro:
            print("Puede conducir")
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
if edad &gt;= 18 and tiene_licencia and tiene_seguro:
    print("Puede conducir")
</pre>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Use el anidamiento cuando cada nivel tiene su propio <code>else</code> con un mensaje distinto; si no, combine las condiciones.</p>
                            `,
                            nextButton: 'Siguiente: Indentación y legibilidad'
                        },
                        {
                            title: 'Indentación y legibilidad',
                            content: `<p>En Python la indentación no es solo estética: <strong>define qué instrucciones pertenecen a cada bloque</strong>.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
if saldo &gt;= monto:
    saldo = saldo - monto
print("Retiro realizado")   # se muestra siempre
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
if saldo &gt;= monto:
    saldo = saldo - monto
    print("Retiro realizado")
else:
    print("Saldo insuficiente")
</pre>
                            </div>
                            <ul>
                                <li>Use 4 espacios por nivel de indentación (PEP 8).</li>
                                <li>Nombre las variables booleanas como preguntas: <code>es_mayor</code>, <code>tiene_licencia</code>, <code>esta_activo</code>.</li>
                                <li>Use paréntesis para aclarar condiciones complejas: <code>(edad &gt;= 18) and (nota &gt;= 70)</code>.</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Casos de prueba'
                        },
                        {
                            title: 'Casos de prueba para condicionales',
                            content: `<p>Para probar una estructura condicional se debe diseñar al menos un caso por cada camino y, además, probar los <strong>valores límite</strong> (los valores justo donde cambia el resultado).</p>
                            <p>Ejemplo para el programa que clasifica notas (Excelente ≥ 90, Muy bueno ≥ 80, Aprobado ≥ 70, Reprobado):</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">N.º</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Nota</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado esperado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Límite inferior de Excelente</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">90</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Excelente</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Justo debajo del límite</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">89</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muy bueno</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Límite inferior de Muy bueno</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">80</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Muy bueno</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Límite inferior de Aprobado</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">70</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprobado</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Justo debajo de Aprobado</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">69</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reprobado</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">6</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valor inválido (negativo)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">-5</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mensaje de nota no válida</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">7</td>
                                <td style="padding:13px 12px;">Valor inválido (mayor a 100)</td>
                                <td style="padding:13px 12px;">105</td>
                                <td style="padding:13px 12px;">Mensaje de nota no válida</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Los errores en condicionales suelen esconderse en los límites: usar <code>&gt;</code> en lugar de <code>&gt;=</code> solo se detecta probando exactamente el valor límite.</p>
                            `,
                            nextButton: 'Siguiente: Lista de revisión'
                        },
                        {
                            title: 'Lista de revisión para condicionales',
                            content: `<ol>
                                <li>¿Cada condición produce un resultado verdadero o falso?</li>
                                <li>¿Las condiciones de la estructura múltiple van de la más específica a la más general?</li>
                                <li>¿Existe algún camino que nunca se puede ejecutar?</li>
                                <li>¿Se usa <code>else</code> en lugar de repetir la condición contraria?</li>
                                <li>¿Se usan <code>==</code> para comparar y <code>=</code> para asignar correctamente?</li>
                                <li>¿La indentación refleja lo que debe ejecutarse dentro de cada bloque?</li>
                                <li>¿Se validan los datos de entrada antes de usarlos?</li>
    <li>¿Se manejan con <code>try</code>/<code>except</code> las conversiones que pueden fallar (<code>int()</code>, <code>float()</code>)?</li>
                                <li>¿Se probó al menos un caso por cada camino?</li>
                                <li>¿Se probaron los valores límite?</li>
                            </ol>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/checklist.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm004-t006',
                    label: 'Análisis básico de programas',
                    steps: [
                        {
                            title: '¿Qué es analizar un programa?',
                            content: `<p>Analizar un programa es leer su código y <strong>predecir qué hará</strong> con ciertos datos, sin necesidad de ejecutarlo en la computadora.</p>
                            <p>Esta habilidad permite detectar errores de lógica antes de probar, entender código escrito por otras personas y verificar que el algoritmo resuelve el problema.</p>
                            <p>La técnica más usada es la <strong>prueba de escritorio</strong> (también llamada traza).</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/analisisPrograma.png',
                            nextButton: 'Siguiente: Prueba de escritorio'
                        },
                        {
                            title: 'Prueba de escritorio',
                            content: `<p>Consiste en simular la ejecución del programa "a mano", anotando en una tabla cómo cambian las variables.</p>
                            <ol>
                                <li>Elegir los datos de entrada que se van a probar.</li>
                                <li>Crear una tabla con una columna por cada variable, condición y salida.</li>
                                <li>Recorrer el programa línea por línea, en el orden en que se ejecutaría.</li>
                                <li>Anotar cada cambio de valor y el resultado (verdadero o falso) de cada condición.</li>
                                <li>Comparar la salida obtenida con la salida esperada.</li>
                            </ol>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/pruebaEscritorio.png',
                            nextButton: 'Siguiente: Ejemplo'
                        },
                        {
                            title: 'Ejemplo de prueba de escritorio',
                            content: `<pre class="codigo">
monto = float(input("Monto de la compra: "))
es_frecuente = input("¿Cliente frecuente? (s/n): ")
descuento = 0
if monto &gt; 50000:
    descuento = monto * 0.10
if es_frecuente == "s":
    descuento = descuento + 5000
total = monto - descuento
print("Total a pagar:", total)
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">monto</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">es_frecuente</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">monto &gt; 50000</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">es_frecuente == "s"</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">descuento</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Salida</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">60000</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">s</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">11000</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Total a pagar: 49000.0</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">60000</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">n</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#d2232a; font-weight:bold;">Falso</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">6000</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Total a pagar: 54000.0</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">30000</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">s</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#d2232a; font-weight:bold;">Falso</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5000</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Total a pagar: 25000.0</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">50000</td>
                                <td style="padding:13px 12px;">n</td>
                                <td style="padding:13px 12px;"><span style="color:#d2232a; font-weight:bold;">Falso</span></td>
                                <td style="padding:13px 12px;"><span style="color:#d2232a; font-weight:bold;">Falso</span></td>
                                <td style="padding:13px 12px;">0</td>
                                <td style="padding:13px 12px;">Total a pagar: 50000.0</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Las dos condiciones son <strong>independientes</strong> (son dos <code>if</code>, no un <code>if-elif</code>), por eso un cliente puede recibir ambos descuentos.</p>
                            `,
                            nextButton: 'Siguiente: Detectar errores'
                        },
                        {
                            title: 'Detectar errores con el análisis',
                            content: `<p>Analice el siguiente programa. ¿Puede mostrar alguna vez "Clima cálido"?</p>
<pre class="codigo">
temperatura = float(input("Temperatura: "))
if temperatura &gt; 30:
    print("Hace calor")
elif temperatura &gt; 20:
    print("Clima agradable")
elif temperatura &gt; 25:
    print("Clima cálido")
else:
    print("Hace frío")
</pre>
                            <p>Nunca. Cualquier temperatura mayor que 25 también es mayor que 20, así que entra antes en "Clima agradable". Ese bloque es <strong>código inalcanzable</strong>.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Corrección</strong>
<pre class="codigo">
if temperatura &gt; 30:
    print("Hace calor")
elif temperatura &gt; 25:
    print("Clima cálido")
elif temperatura &gt; 20:
    print("Clima agradable")
else:
    print("Hace frío")
</pre>
                            </div>
                            `,
                            nextButton: 'Siguiente: Preguntas guía'
                        },
                        {
                            title: 'Preguntas guía para analizar',
                            content: `<ul>
                                <li>¿Qué datos entran y qué valores pueden tomar?</li>
                                <li>¿Cuántos caminos posibles tiene el programa?</li>
                                <li>¿Hay algún camino que nunca se ejecuta?</li>
                                <li>¿Qué ocurre exactamente en los valores límite?</li>
                                <li>¿Todas las variables tienen valor en todos los caminos?</li>
                            </ul>
                            <p>La última pregunta detecta un error frecuente:</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
if nota &gt;= 70:
    mensaje = "Aprobado"
print(mensaje)
</pre>
                            </div>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Si la nota es 50, la variable <code>mensaje</code> nunca se crea y el programa termina con <code>NameError</code>. Solución: asignarle un valor en el <code>else</code> o antes del <code>if</code>.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_005',
            label: 'Control iterativo',
            subtemas: [
                {
                    id: 'm005-t001',
                    label: 'Estructuras iterativas',
                    steps: [
                        {
                            title: '¿Qué es una estructura iterativa?',
                            content: `<p>Es una estructura que permite <strong>repetir un bloque de instrucciones</strong> varias veces, ya sea una cantidad conocida de veces o mientras se cumpla una condición.</p>
                            <p>También se le llama <strong>ciclo</strong>, <strong>bucle</strong> o <strong>loop</strong>. Cada repetición del bloque se llama <strong>iteración</strong>.</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Imagine que debe mostrar los números del 1 al 100. Sin ciclos necesitaría 100 instrucciones <code>print</code>; con un ciclo bastan dos líneas.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/ciclo.png',
                            nextButton: 'Siguiente: Elementos de un ciclo'
                        },
                        {
                            title: 'Elementos de un ciclo',
                            content: `<p>Todo ciclo bien construido tiene cuatro elementos:</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Inicialización</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valor inicial de la variable que controla el ciclo.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>contador = 1</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Condición</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se evalúa antes de cada iteración. Mientras sea verdadera, el ciclo continúa.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>contador &lt;= 5</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cuerpo</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Instrucciones que se repiten.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>print(contador)</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><strong>Actualización</strong></td>
                                <td style="padding:13px 12px;">Cambio de la variable de control que acerca el ciclo a su fin.</td>
                                <td style="padding:13px 12px;"><code>contador = contador + 1</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Si falta la actualización, la condición nunca se vuelve falsa y el ciclo se repite para siempre (ciclo infinito).</p>
                            `,
                            nextButton: 'Siguiente: Ciclo while'
                        },
                        {
                            title: 'Ciclo mientras (while)',
                            content: `<p>Repite un bloque <strong>mientras</strong> una condición sea verdadera. La condición se evalúa antes de cada iteración.</p>
                            <p><strong>Sintaxis genérica:</strong></p>
<pre class="codigo">
mientras (condición) hacer
    instrucciones
fin mientras
</pre>
                            <p><strong>Ejemplo:</strong></p>
<pre class="codigo">
contador = 1
while contador &lt;= 5:
    print(contador)
    contador = contador + 1
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Muestra 1, 2, 3, 4 y 5. Cuando <code>contador</code> vale 6, la condición es falsa y el ciclo termina.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/cicloWhile.png',
                            nextButton: 'Siguiente: Ciclo for'
                        },
                        {
                            title: 'Ciclo para (for)',
                            content: `<p>Repite un bloque una cantidad <strong>conocida</strong> de veces. En Python se combina con la función <code>range()</code>, que genera una secuencia de números.</p>
                            <p><strong>Sintaxis genérica:</strong></p>
<pre class="codigo">
para i desde 1 hasta 5 hacer
    instrucciones
fin para
</pre>
                            <p><strong>Ejemplo:</strong></p>
<pre class="codigo">
for i in range(1, 6):
    print(i)
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Expresión</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Números que genera</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>range(5)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0, 1, 2, 3, 4</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>range(1, 6)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1, 2, 3, 4, 5</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>range(0, 10, 2)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0, 2, 4, 6, 8</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>range(5, 0, -1)</code></td>
                                <td style="padding:13px 12px;">5, 4, 3, 2, 1</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El valor final de <code>range</code> <strong>no se incluye</strong>: <code>range(1, 6)</code> llega hasta 5.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/cicloFor.png',
                            nextButton: 'Siguiente: ¿while o for?'
                        },
                        {
                            title: '¿while o for?',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">for</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">while</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Se usa cuando</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se conoce de antemano cuántas veces se repetirá.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La repetición depende de una condición que cambia durante la ejecución.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Ejemplo típico</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pedir las notas de 30 estudiantes.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pedir números hasta que el usuario escriba 0.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Actualización</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Automática (la hace <code>range</code>).</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Manual, dentro del cuerpo del ciclo.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><strong>Riesgo de ciclo infinito</strong></td>
                                <td style="padding:13px 12px;">Bajo.</td>
                                <td style="padding:13px 12px;">Alto, si se olvida la actualización.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Contadores y acumuladores'
                        },
                        {
                            title: 'Contadores y acumuladores',
                            content: `<p>Son variables que se actualizan dentro de un ciclo:</p>
                            <ul>
                                <li><strong>Contador</strong>: aumenta en una cantidad fija (generalmente 1) para contar cuántas veces ocurre algo. <code>contador = contador + 1</code></li>
                                <li><strong>Acumulador</strong>: suma (o multiplica) valores variables para obtener un total. <code>total = total + precio</code></li>
                            </ul>
                            <p><strong>Ejemplo:</strong></p>
<pre class="codigo">
suma = 0          # acumulador
positivos = 0     # contador
for i in range(5):
    numero = float(input("Ingrese un número: "))
    suma = suma + numero
    if numero &gt; 0:
        positivos = positivos + 1
print("Suma:", suma)
print("Cantidad de positivos:", positivos)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Ambos deben inicializarse <strong>antes</strong> del ciclo. Un acumulador de sumas inicia en 0 y uno de multiplicaciones inicia en 1.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/contadorAcumulador.png',
                            nextButton: 'Siguiente: Ciclos anidados'
                        },
                        {
                            title: 'Ciclos anidados',
                            content: `<p>Un ciclo puede contener otro ciclo. Por cada iteración del ciclo externo, el ciclo interno se ejecuta <strong>completo</strong>.</p>
<pre class="codigo">
for i in range(1, 4):
    for j in range(1, 4):
        print(i, "x", j, "=", i * j)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El ciclo externo se repite 3 veces y el interno 3 veces por cada una: en total se muestran 3 × 3 = 9 líneas.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/ciclosAnidados.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t002',
                    label: 'Flujos iterativos',
                    steps: [
                        {
                            title: '¿Qué es un flujo iterativo?',
                            content: `<p>Es el camino que sigue la ejecución cuando encuentra una estructura iterativa. A diferencia del flujo secuencial (siempre hacia adelante) y del condicional (que se bifurca), el flujo iterativo <strong>regresa a un punto anterior</strong> para volver a ejecutar un bloque.</p>
                            <p>Cada vez que regresa, evalúa la condición: si es verdadera, repite; si es falsa, sale del ciclo y continúa con la siguiente instrucción.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/flujoIterativo.png',
                            nextButton: 'Siguiente: Representación'
                        },
                        {
                            title: 'Representación gráfica',
                            content: `<p>En un diagrama de flujo, la condición del ciclo se representa con un rombo. La salida "Sí" lleva al cuerpo del ciclo y, al terminarlo, una flecha <strong>regresa al rombo</strong>. La salida "No" lleva a la instrucción que sigue al ciclo.</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            La flecha de retorno es lo que distingue visualmente un ciclo de una simple decisión.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/diagramaCiclo.png',
                            nextButton: 'Siguiente: Características'
                        },
                        {
                            title: 'Características del flujo iterativo',
                            content: `<ul>
                                <li><strong>Es repetitivo</strong>: un mismo bloque se ejecuta varias veces.</li>
                                <li><strong>Está controlado por una condición</strong>: la condición decide si se repite o se sale.</li>
                                <li><strong>Puede no ejecutarse</strong>: en un <code>while</code>, si la condición es falsa desde el inicio, el cuerpo se salta por completo.</li>
                                <li><strong>Debe terminar</strong>: algo dentro del ciclo tiene que cambiar para que la condición llegue a ser falsa.</li>
                                <li><strong>Puede combinarse</strong>: un ciclo puede contener condicionales y otros ciclos.</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Controlado por contador'
                        },
                        {
                            title: 'Ciclo controlado por contador',
                            content: `<p>Se sabe de antemano cuántas veces se repetirá. Una variable cuenta las iteraciones.</p>
<pre class="codigo">
cantidad = int(input("¿Cuántos estudiantes? "))
suma = 0
for i in range(cantidad):
    nota = float(input("Nota del estudiante: "))
    suma = suma + nota
print("Promedio:", suma / cantidad)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si el usuario indica 4 estudiantes, el ciclo se repite exactamente 4 veces.</p>
                            `,
                            nextButton: 'Siguiente: Controlado por centinela'
                        },
                        {
                            title: 'Ciclo controlado por centinela',
                            content: `<p>No se sabe cuántas veces se repetirá. El ciclo continúa hasta que aparece un <strong>valor centinela</strong>: un valor especial que indica el final de los datos.</p>
<pre class="codigo">
total = 0
numero = float(input("Ingrese un número (0 para terminar): "))
while numero != 0:
    total = total + numero
    numero = float(input("Ingrese un número (0 para terminar): "))
print("Suma total:", total)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El primer dato se lee <strong>antes</strong> del ciclo y los siguientes al final del cuerpo. Así el valor centinela (0) nunca se procesa como si fuera un dato.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/centinela.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t003',
                    label: 'Funcionalidad del flujo iterativo',
                    steps: [
                        {
                            title: 'Funcionalidad del flujo iterativo',
                            content: `<p>El flujo iterativo permite que un programa:</p>
                            <ul>
                                <li><strong>Procese muchos datos</strong>: calcular el promedio de 30 notas o el total de una lista de compras.</li>
                                <li><strong>Valide hasta obtener un dato correcto</strong>: volver a pedir un valor mientras sea inválido.</li>
                                <li><strong>Repita un menú</strong>: mostrar opciones hasta que el usuario elija salir.</li>
                                <li><strong>Realice cálculos acumulativos</strong>: sumas, promedios, potencias, factoriales.</li>
                                <li><strong>Encuentre valores especiales</strong>: el mayor, el menor o la cantidad de datos que cumplen una condición.</li>
                                <li><strong>Recorra estructuras de datos</strong>: visitar cada elemento de un arreglo o matriz (módulo 6).</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Validar hasta que sea correcto'
                        },
                        {
                            title: 'Validar datos hasta que sean correctos',
                            content: `<p>Con un condicional solo se puede avisar que el dato es inválido. Con un ciclo se puede <strong>pedir de nuevo</strong> hasta que sea válido.</p>
<pre class="codigo">
nota = float(input("Ingrese una nota (0-100): "))
while nota &lt; 0 or nota &gt; 100:
    print("Nota no válida.")
    nota = float(input("Ingrese una nota (0-100): "))
print("Nota registrada:", nota)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si el usuario escribe 150 y luego -2, el programa los rechaza. Cuando escribe 85, sale del ciclo.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/validacionCiclo.png',
                            nextButton: 'Siguiente: Validar con try y while'
                        },
                        {
                            title: 'Validar con try y while',
                            content: `<p>Al combinar <code>try</code>/<code>except</code> (módulo 4) con un ciclo, el programa ya no se detiene si el usuario escribe letras: vuelve a pedir el dato hasta que tenga el tipo y el rango correctos.</p>
<pre class="codigo">
edad_valida = False
while not edad_valida:
    try:
        edad = int(input("Ingrese su edad: "))
        if edad &gt;= 0 and edad &lt;= 120:
            edad_valida = True
        else:
            print("La edad debe estar entre 0 y 120.")
    except ValueError:
        print("Debe ingresar un número entero.")
print("Edad registrada:", edad)
</pre>
<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
<table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
<thead>
<tr>
    <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Entrada</th>
    <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué ocurre</th>
</tr>
</thead>
<tbody>
<tr>
    <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">veinte</td>
    <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ValueError</code>: se muestra el mensaje y se repite el ciclo.</td>
</tr>
<tr style="background:#f3f9ff;">
    <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">150</td>
    <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Es un número, pero está fuera de rango: se repite el ciclo.</td>
</tr>
<tr>
    <td style="padding:13px 12px;">25</td>
    <td style="padding:13px 12px;">Dato válido: <code>edad_valida</code> pasa a <code>True</code> y el ciclo termina.</td>
</tr>
</tbody>
</table>
</div>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
El <code>try</code> controla el <strong>tipo</strong> del dato y el <code>if</code> controla que tenga <strong>sentido</strong>. En el módulo 6 esta lógica se guardará en una función para reutilizarla.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/validacionTry.png',
                            nextButton: 'Siguiente: Menú que se repite'
                        },
                        {
                            title: 'Menú que se repite',
                            content: `<p>Al combinar un ciclo con una condicional múltiple, el menú se muestra una y otra vez hasta que el usuario decide salir.</p>
<pre class="codigo">
TIPO_CAMBIO = 510  # valor de ejemplo
opcion = ""
while opcion != "3":
    print("1. Colones a dólares")
    print("2. Dólares a colones")
    print("3. Salir")
    opcion = input("Elija una opción: ")
    if opcion == "1":
        colones = float(input("Monto en colones: "))
        print("Dólares:", colones / TIPO_CAMBIO)
    elif opcion == "2":
        dolares = float(input("Monto en dólares: "))
        print("Colones:", dolares * TIPO_CAMBIO)
    elif opcion != "3":
        print("Opción no válida")
print("Programa finalizado")
</pre>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/menuCiclo.png',
                            nextButton: 'Siguiente: Cálculos acumulativos'
                        },
                        {
                            title: 'Cálculos acumulativos',
                            content: `<p>El factorial de un número n (n!) es el producto de todos los enteros desde 1 hasta n. Por ejemplo, 5! = 1 × 2 × 3 × 4 × 5 = 120.</p>
<pre class="codigo">
n = int(input("Ingrese un número: "))
factorial = 1
for i in range(1, n + 1):
    factorial = factorial * i
print(n, "! =", factorial)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El acumulador inicia en 1 porque se va a multiplicar. Si iniciara en 0, el resultado siempre sería 0.</p>
                            `,
                            nextButton: 'Siguiente: Mayor y menor'
                        },
                        {
                            title: 'Encontrar el mayor y el menor',
                            content: `<pre class="codigo">
cantidad = int(input("¿Cuántos números? "))
numero = float(input("Número: "))
mayor = numero
menor = numero
for i in range(cantidad - 1):
    numero = float(input("Número: "))
    if numero &gt; mayor:
        mayor = numero
    if numero &lt; menor:
        menor = numero
print("Mayor:", mayor)
print("Menor:", menor)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>mayor</code> y <code>menor</code> se inicializan con el <strong>primer dato</strong>, no con 0. Si se iniciara <code>menor = 0</code> y todos los números fueran positivos, el programa diría que el menor es 0.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/mayorMenor.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t004',
                    label: 'Calidad de la programación con flujo iterativo',
                    steps: [
                        {
                            title: 'Calidad en las estructuras iterativas',
                            content: `<p>Un error dentro de un ciclo se repite en cada iteración, por lo que sus efectos se multiplican. Además, los ciclos introducen errores propios: que no terminen, que se repitan una vez de más o de menos, o que acumulen mal los valores.</p>
                            <p>Un ciclo de calidad <strong>termina siempre</strong>, se repite <strong>exactamente</strong> las veces necesarias y es fácil de leer.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/calidadIterativa.png',
                            nextButton: 'Siguiente: Ciclos infinitos'
                        },
                        {
                            title: 'Evitar ciclos infinitos',
                            content: `<p>Un ciclo infinito ocurre cuando la condición nunca llega a ser falsa.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
contador = 1
while contador &lt;= 5:
    print(contador)
# falta actualizar contador
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
contador = 1
while contador &lt;= 5:
    print(contador)
    contador = contador + 1
</pre>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si un programa se queda "pegado" en la terminal, puede detenerlo con <strong>Ctrl + C</strong>.</p>
                            `,
                            nextButton: 'Siguiente: Uno más o uno menos'
                        },
                        {
                            title: 'Errores de uno más o uno menos',
                            content: `<p>Es uno de los errores más comunes: el ciclo se repite una vez de más o una vez de menos. Suele deberse a usar <code>&lt;</code> en lugar de <code>&lt;=</code> o a olvidar que <code>range</code> no incluye el valor final.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
# Se quería mostrar del 1 al 10
for i in range(1, 10):
    print(i)        # muestra solo hasta 9
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
for i in range(1, 11):
    print(i)
</pre>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Antes de ejecutar, pregúntese: ¿cuál es el primer valor?, ¿cuál es el último?, ¿cuántas veces se repite?</p>
                            `,
                            nextButton: 'Siguiente: Inicializar correctamente'
                        },
                        {
                            title: 'Inicializar correctamente',
                            content: `<p>Contadores y acumuladores deben inicializarse <strong>fuera y antes</strong> del ciclo. Si se inicializan dentro, se reinician en cada iteración.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
for i in range(3):
    total = 0
    precio = float(input("Precio: "))
    total = total + precio
print(total)    # solo muestra el último precio
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
total = 0
for i in range(3):
    precio = float(input("Precio: "))
    total = total + precio
print(total)
</pre>
                            </div>
                            `,
                            nextButton: 'Siguiente: Legibilidad'
                        },
                        {
                            title: 'Legibilidad y buenas prácticas',
                            content: `<ul>
                                <li>Use nombres descriptivos para contadores y acumuladores: <code>total_ventas</code>, <code>cantidad_aprobados</code>. Las letras <code>i</code> y <code>j</code> son aceptables solo como índices de un <code>for</code>.</li>
                                <li>No modifique la variable de control de un <code>for</code> dentro del cuerpo del ciclo.</li>
                                <li>Mantenga el cuerpo del ciclo corto y enfocado en una tarea.</li>
                                <li>No repita dentro del ciclo cálculos que dan siempre el mismo resultado; hágalos antes.</li>
                                <li>Prefiera <code>for</code> cuando conoce la cantidad de repeticiones: es más difícil cometer errores.</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/buenasPracticas.png',
                            nextButton: 'Siguiente: Casos de prueba'
                        },
                        {
                            title: 'Casos de prueba para ciclos',
                            content: `<p>Además de probar valores normales, un ciclo debe probarse con <strong>cero, una y varias iteraciones</strong>.</p>
                            <p>Ejemplo para el programa que suma números hasta que se ingresa 0:</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">N.º</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Datos de entrada</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado esperado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cero iteraciones (centinela inmediato)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Suma total: 0</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una iteración</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">7, 0</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Suma total: 7.0</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varias iteraciones</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5, 10, 15, 0</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Suma total: 30.0</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valores negativos</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">-4, 10, 0</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Suma total: 6.0</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">5</td>
                                <td style="padding:13px 12px;">Valores decimales</td>
                                <td style="padding:13px 12px;">2.5, 2.5, 0</td>
                                <td style="padding:13px 12px;">Suma total: 5.0</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Lista de revisión'
                        },
                        {
                            title: 'Lista de revisión para ciclos',
                            content: `<ol>
                                <li>¿Las variables de control, contadores y acumuladores se inicializan antes del ciclo?</li>
                                <li>¿Los acumuladores de suma inician en 0 y los de multiplicación en 1?</li>
                                <li>¿La condición llega a ser falsa en algún momento?</li>
                                <li>¿La variable de control se actualiza dentro del ciclo (en un <code>while</code>)?</li>
                                <li>¿El ciclo se repite exactamente las veces necesarias (ni una más, ni una menos)?</li>
                                <li>¿El valor centinela queda fuera de los cálculos?</li>
                                <li>¿Se eligió el tipo de ciclo adecuado (<code>for</code> o <code>while</code>)?</li>
                                <li>¿Se probó con cero, una y varias iteraciones?</li>
                            </ol>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/checklist.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm005-t005',
                    label: 'Análisis básico de programas',
                    steps: [
                        {
                            title: 'Prueba de escritorio de un ciclo',
                            content: `<p>La prueba de escritorio de un ciclo se hace igual que la de un programa condicional, pero se agrega una columna para el <strong>número de iteración</strong> y se anota una fila por cada vuelta.</p>
                            <p>La última fila siempre corresponde a la evaluación en la que la condición es falsa y el ciclo termina.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/pruebaEscritorioCiclo.png',
                            nextButton: 'Siguiente: Ejemplo'
                        },
                        {
                            title: 'Ejemplo de prueba de escritorio',
                            content: `<pre class="codigo">
suma = 0
i = 1
while i &lt;= 4:
    suma = suma + i
    i = i + 1
print(suma)
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Iteración</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">i (al evaluar)</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">i &lt;= 4</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">suma (al final)</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">i (al final)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">6</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">—</td>
                                <td style="padding:13px 12px;">5</td>
                                <td style="padding:13px 12px;"><span style="color:#d2232a; font-weight:bold;">Falso</span></td>
                                <td style="padding:13px 12px;">Sale del ciclo</td>
                                <td style="padding:13px 12px;">—</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Salida: <strong>10</strong>. El cuerpo se ejecutó 4 veces, pero la condición se evaluó 5 veces.</p>
                            `,
                            nextButton: 'Siguiente: Contar iteraciones'
                        },
                        {
                            title: 'Contar iteraciones',
                            content: `<p>Saber cuántas veces se repite un ciclo es parte esencial del análisis.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valores que toma la variable</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Iteraciones</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>for i in range(5)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0, 1, 2, 3, 4</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>for i in range(2, 10)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2, 3, …, 9</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>for i in range(0, 10, 3)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0, 3, 6, 9</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>x = 1</code><br><code>while x &lt; 100: x = x * 2</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1, 2, 4, 8, 16, 32, 64</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">7</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>x = 10</code><br><code>while x &lt; 5: ...</code></td>
                                <td style="padding:13px 12px;">—</td>
                                <td style="padding:13px 12px;">0</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Para <code>range(inicio, fin)</code> con paso 1, la cantidad de iteraciones es <code>fin - inicio</code>.</p>
                            `,
                            nextButton: 'Siguiente: Detectar errores'
                        },
                        {
                            title: 'Detectar errores con el análisis',
                            content: `<p>Analice el programa con <code>cantidad = 3</code>. ¿Cuántas notas pide?</p>
<pre class="codigo">
cantidad = int(input("Cantidad de notas: "))
suma = 0
contador = 1
while contador &lt; cantidad:
    nota = float(input("Nota: "))
    suma = suma + nota
    contador = contador + 1
print("Promedio:", suma / cantidad)
</pre>
                            <p>Pide solo <strong>2 notas</strong>: <code>contador</code> toma los valores 1 y 2; con 3 la condición <code>3 &lt; 3</code> es falsa. Es un error de uno menos.</p>
                            <p>Además, si <code>cantidad</code> es 0, el programa termina con <code>ZeroDivisionError</code>.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Corrección</strong>
<pre class="codigo">
contador = 0
while contador &lt; cantidad:
    ...
if cantidad &gt; 0:
    print("Promedio:", suma / cantidad)
</pre>
                            </div>
                            `,
                            nextButton: 'Siguiente: Preguntas guía'
                        },
                        {
                            title: 'Preguntas guía para analizar ciclos',
                            content: `<ul>
                                <li>¿Con qué valor inicia la variable de control?</li>
                                <li>¿Qué condición hace que el ciclo termine?</li>
                                <li>¿Qué cambia en cada iteración?</li>
                                <li>¿Cuántas veces se ejecuta el cuerpo?</li>
                                <li>¿Puede ejecutarse cero veces? ¿Es correcto que así sea?</li>
                                <li>¿Puede no terminar nunca?</li>
                                <li>¿Qué valor tienen las variables al salir del ciclo?</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/preguntasGuia.png',
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        {
            id: 'modulo_006',
            label: 'Abstracciones',
            subtemas: [
                {
                    id: 'm006-t001',
                    label: 'Abstracción procedimental',
                    steps: [
                        {
                            title: '¿Qué es la abstracción?',
                            content: `<p>Abstraer es <strong>enfocarse en lo esencial y ocultar los detalles</strong> que no son necesarios en un momento dado.</p>
                            <p>Por ejemplo, para manejar un carro basta con saber usar el volante, los pedales y la palanca; no es necesario entender cómo funciona el motor por dentro.</p>
                            <p>En programación ya se ha usado abstracción: al escribir <code>print()</code> o <code>input()</code> se obtiene un resultado sin conocer las instrucciones internas que lo producen.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/abstraccion.png',
                            nextButton: 'Siguiente: Abstracción procedimental'
                        },
                        {
                            title: 'Abstracción procedimental',
                            content: `<p>Consiste en agrupar un conjunto de instrucciones que realizan una tarea específica bajo un <strong>nombre</strong>. Ese grupo se llama <strong>procedimiento</strong> o <strong>función</strong>, y se puede ejecutar (invocar) cada vez que se necesite.</p>
                            <p>Permite aplicar la estrategia de <strong>divide y vencerás</strong>: un problema grande se divide en subproblemas pequeños, y cada uno se resuelve con su propia función.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/divideVenceras.png',
                            nextButton: 'Siguiente: Funciones en Python'
                        },
                        {
                            title: 'Funciones en Python',
                            content: `<p>Una función se define con la palabra reservada <code>def</code>, seguida del nombre, paréntesis y dos puntos. Su cuerpo va indentado.</p>
                            <p><strong>Sintaxis genérica:</strong></p>
<pre class="codigo">
función nombre_funcion()
    instrucciones
fin función
</pre>
                            <p><strong>Ejemplo:</strong></p>
<pre class="codigo">
def saludar():
    print("¡Bienvenido al curso!")

saludar()
saludar()
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Definir la función no ejecuta nada: solo la "guarda". El mensaje se muestra dos veces porque la función se <strong>invoca</strong> dos veces.</p>
                            `,
                            nextButton: 'Siguiente: Parámetros y argumentos'
                        },
                        {
                            title: 'Parámetros y argumentos',
                            content: `<p>Los parámetros permiten que una función reciba datos y trabaje con valores diferentes cada vez que se invoca.</p>
<pre class="codigo">
def saludar(nombre):
    print("Hola,", nombre)

saludar("Ana")
saludar("Luis")
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Dónde aparece</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">En el ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Parámetro</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">En la definición de la función. Es una variable que recibe el dato.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>nombre</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><strong>Argumento</strong></td>
                                <td style="padding:13px 12px;">En la invocación. Es el valor que se envía.</td>
                                <td style="padding:13px 12px;"><code>"Ana"</code>, <code>"Luis"</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Retorno de valores'
                        },
                        {
                            title: 'Retorno de valores (return)',
                            content: `<p>Una función puede calcular un resultado y <strong>devolverlo</strong> a quien la invocó usando <code>return</code>.</p>
<pre class="codigo">
def calcular_area(base, altura):
    area = base * altura
    return area

resultado = calcular_area(10, 5)
print("Área:", resultado)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>print</code> muestra un valor en pantalla; <code>return</code> lo entrega al programa para que pueda guardarlo en una variable, compararlo o usarlo en otro cálculo.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/funcionCajaNegra.png',
                            nextButton: 'Siguiente: Alcance de las variables'
                        },
                        {
                            title: 'Alcance de las variables',
                            content: `<p>Las variables creadas dentro de una función son <strong>locales</strong>: solo existen mientras la función se ejecuta y no se pueden usar fuera de ella.</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
def calcular_total(precio, cantidad):
    total = precio * cantidad

calcular_total(500, 3)
print(total)   # NameError: total no existe aquí
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
def calcular_total(precio, cantidad):
    total = precio * cantidad
    return total

total = calcular_total(500, 3)
print(total)
</pre>
                            </div>
                            `,
                            nextButton: 'Siguiente: Ejemplo con funciones'
                        },
                        {
                            title: 'Ejemplo: programa organizado en funciones',
                            content: `<pre class="codigo">
def leer_nota():
    nota = float(input("Nota (0-100): "))
    while nota &lt; 0 or nota &gt; 100:
        nota = float(input("Nota no válida. Intente de nuevo: "))
    return nota

def obtener_condicion(nota):
    if nota &gt;= 70:
        return "Aprobado"
    else:
        return "Reprobado"

# Programa principal
nota = leer_nota()
print(obtener_condicion(nota))
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El programa principal se lee casi como un algoritmo en lenguaje natural: leer la nota y mostrar la condición. Los detalles quedan ocultos dentro de cada función.</p>
                            `,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Ventajas y buenas prácticas',
                            content: `<p><strong>Ventajas:</strong></p>
                            <ul>
                                <li>Reutilización: se escribe una vez y se usa muchas veces.</li>
                                <li>Legibilidad: el programa principal es corto y claro.</li>
                                <li>Mantenimiento: un cambio se hace en un solo lugar.</li>
                                <li>Pruebas: cada función se puede probar por separado.</li>
                            </ul>
                            <p><strong>Buenas prácticas:</strong></p>
                            <ul>
                                <li>Cada función realiza una sola tarea.</li>
                                <li>Use nombres que empiecen con un verbo: <code>calcular_promedio</code>, <code>leer_nota</code>, <code>mostrar_menu</code>.</li>
                                <li>Prefiera recibir datos por parámetros y devolver resultados con <code>return</code>, en lugar de usar variables globales.</li>
                                <li>Mantenga las funciones cortas; si una crece demasiado, divídala.</li>
                            </ul>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t002',
                    label: 'Arreglos y matrices',
                    steps: [
                        {
                            title: '¿Qué es un arreglo?',
                            content: `<p>Un arreglo es una estructura que almacena <strong>varios valores bajo un mismo nombre</strong>. Cada valor ocupa una posición identificada por un número llamado <strong>índice</strong>.</p>
                            <p>En Python los arreglos se representan con <strong>listas</strong>, que se escriben entre corchetes:</p>
<pre class="codigo">
notas = [85, 70, 92, 64]
nombres = ["Ana", "Luis", "María"]
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Sin arreglos, guardar las notas de 30 estudiantes requeriría 30 variables distintas.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/arreglo.png',
                            nextButton: 'Siguiente: Índices'
                        },
                        {
                            title: 'Índices',
                            content: `<p>El primer elemento está en el índice <strong>0</strong> y el último en el índice <code>len(lista) - 1</code>.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Índice</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">0</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">1</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">2</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">3</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px;"><strong>notas</strong></td>
                                <td style="padding:13px 12px;">85</td>
                                <td style="padding:13px 12px;">70</td>
                                <td style="padding:13px 12px;">92</td>
                                <td style="padding:13px 12px;">64</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
<pre class="codigo">
print(notas[0])    # 85
print(notas[3])    # 64
print(notas[-1])   # 64 (el índice -1 es el último elemento)
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Acceder a un índice que no existe, como <code>notas[4]</code>, produce el error <code>IndexError</code>.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/indices.png',
                            nextButton: 'Siguiente: Operaciones básicas'
                        },
                        {
                            title: 'Operaciones básicas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operación</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crear una lista vacía</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>notas = []</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[]</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agregar al final</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>notas.append(80)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[80]</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Leer un elemento</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>notas[0]</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>80</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modificar un elemento</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>notas[0] = 85</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[85]</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cantidad de elementos</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>len(notas)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>1</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Verificar si un valor existe</td>
                                <td style="padding:13px 12px;"><code>85 in notas</code></td>
                                <td style="padding:13px 12px;"><span style="color:#00734a; font-weight:bold;">Verdadero</span></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Recorrer un arreglo'
                        },
                        {
                            title: 'Recorrer un arreglo',
                            content: `<p>Recorrer un arreglo es visitar cada uno de sus elementos usando un ciclo. Hay dos formas:</p>
                            <p><strong>Por elemento (cuando solo se necesita el valor):</strong></p>
<pre class="codigo">
for nota in notas:
    print(nota)
</pre>
                            <p><strong>Por índice (cuando se necesita la posición o modificar el elemento):</strong></p>
<pre class="codigo">
for i in range(len(notas)):
    print("Posición", i, ":", notas[i])
</pre>
                            <p><strong>Ejemplo: llenar un arreglo y calcular el promedio</strong></p>
<pre class="codigo">
notas = []
for i in range(4):
    notas.append(float(input("Nota: ")))

suma = 0
for nota in notas:
    suma = suma + nota
print("Promedio:", suma / len(notas))
</pre>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/recorrerArreglo.png',
                            nextButton: 'Siguiente: Matrices'
                        },
                        {
                            title: '¿Qué es una matriz?',
                            content: `<p>Una matriz es un arreglo de <strong>dos dimensiones</strong>, organizado en filas y columnas, como una tabla. Cada elemento se identifica con dos índices: <code>matriz[fila][columna]</code>.</p>
                            <p>En Python se representa como una lista de listas:</p>
<pre class="codigo">
# Notas de 3 estudiantes en 3 evaluaciones
notas = [
    [80, 75, 90],   # fila 0: estudiante 1
    [65, 70, 60],   # fila 1: estudiante 2
    [95, 88, 92]    # fila 2: estudiante 3
]
print(notas[1][2])   # 60: estudiante 2, evaluación 3
</pre>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/matriz.png',
                            nextButton: 'Siguiente: Recorrer una matriz'
                        },
                        {
                            title: 'Recorrer una matriz',
                            content: `<p>Para recorrer una matriz se usan <strong>ciclos anidados</strong>: el externo recorre las filas y el interno las columnas de cada fila.</p>
<pre class="codigo">
for fila in range(len(notas)):
    suma = 0
    for columna in range(len(notas[fila])):
        suma = suma + notas[fila][columna]
    promedio = suma / len(notas[fila])
    print("Estudiante", fila + 1, "promedio:", promedio)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Salida: estudiante 1 → 81.67, estudiante 2 → 65.0, estudiante 3 → 91.67 (aproximadamente).</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/recorrerMatriz.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t003',
                    label: 'Ordenamiento en arreglos',
                    steps: [
                        {
                            title: '¿Qué es ordenar un arreglo?',
                            content: `<p>Ordenar es reorganizar los elementos de un arreglo según un criterio: de menor a mayor (<strong>ascendente</strong>) o de mayor a menor (<strong>descendente</strong>).</p>
                            <p>Ordenar facilita presentar la información, encontrar el mayor o el menor y, sobre todo, buscar datos de forma más rápida (búsqueda binaria).</p>
                            <p>Existen muchos algoritmos de ordenamiento. En este tema se estudian tres clásicos: <strong>burbuja, selección e inserción</strong>.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/ordenamiento.png',
                            nextButton: 'Siguiente: Intercambio de valores'
                        },
                        {
                            title: 'Intercambio de valores',
                            content: `<p>Casi todos los algoritmos de ordenamiento necesitan <strong>intercambiar</strong> dos elementos. Para no perder un valor se usa una variable temporal.</p>
                            <p><strong>Con variable temporal:</strong></p>
<pre class="codigo">
temporal = lista[0]
lista[0] = lista[1]
lista[1] = temporal
</pre>
                            <p><strong>Forma abreviada de Python:</strong></p>
<pre class="codigo">
lista[0], lista[1] = lista[1], lista[0]
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Es como intercambiar el contenido de dos vasos: se necesita un tercer vaso vacío.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/intercambio.png',
                            nextButton: 'Siguiente: Burbuja'
                        },
                        {
                            title: 'Ordenamiento burbuja',
                            content: `<p>Recorre el arreglo comparando cada par de elementos <strong>vecinos</strong>. Si están en el orden incorrecto, los intercambia. Al final de cada pasada, el elemento mayor "sube" hasta el final, como una burbuja.</p>
<pre class="codigo">
def ordenar_burbuja(lista):
    n = len(lista)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if lista[j] &gt; lista[j + 1]:
                temporal = lista[j]
                lista[j] = lista[j + 1]
                lista[j + 1] = temporal

numeros = [5, 3, 8, 1, 4]
ordenar_burbuja(numeros)
print(numeros)
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pasada</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Arreglo al terminar la pasada</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inicio</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[5, 3, 8, 1, 4]</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[3, 5, 1, 4, <strong>8</strong>]</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[3, 1, 4, <strong>5, 8</strong>]</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[1, 3, <strong>4, 5, 8</strong>]</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">4</td>
                                <td style="padding:13px 12px;">[<strong>1, 3, 4, 5, 8</strong>]</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/burbuja.png',
                            nextButton: 'Siguiente: Selección'
                        },
                        {
                            title: 'Ordenamiento por selección',
                            content: `<p>En cada pasada <strong>busca el menor</strong> de los elementos que faltan por ordenar y lo coloca en su posición definitiva.</p>
<pre class="codigo">
def ordenar_seleccion(lista):
    n = len(lista)
    for i in range(n - 1):
        posicion_menor = i
        for j in range(i + 1, n):
            if lista[j] &lt; lista[posicion_menor]:
                posicion_menor = j
        lista[i], lista[posicion_menor] = lista[posicion_menor], lista[i]
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pasada</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Menor encontrado</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Arreglo al terminar la pasada</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inicio</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">—</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[5, 3, 8, 1, 4]</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[<strong>1</strong>, 3, 8, 5, 4]</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[<strong>1, 3</strong>, 8, 5, 4]</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[<strong>1, 3, 4</strong>, 5, 8]</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">4</td>
                                <td style="padding:13px 12px;">5</td>
                                <td style="padding:13px 12px;">[<strong>1, 3, 4, 5, 8</strong>]</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/seleccion.png',
                            nextButton: 'Siguiente: Inserción'
                        },
                        {
                            title: 'Ordenamiento por inserción',
                            content: `<p>Funciona como ordenar las cartas en la mano: toma un elemento y lo <strong>inserta</strong> en el lugar correcto entre los que ya están ordenados, desplazando a la derecha los mayores.</p>
<pre class="codigo">
def ordenar_insercion(lista):
    for i in range(1, len(lista)):
        actual = lista[i]
        j = i - 1
        while j &gt;= 0 and lista[j] &gt; actual:
            lista[j + 1] = lista[j]
            j = j - 1
        lista[j + 1] = actual
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Paso</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento insertado</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Arreglo al terminar el paso</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inicio</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">—</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[5, 3, 8, 1, 4]</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[<strong>3, 5</strong>, 8, 1, 4]</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[<strong>3, 5, 8</strong>, 1, 4]</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">3</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">[<strong>1, 3, 5, 8</strong>, 4]</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">4</td>
                                <td style="padding:13px 12px;">4</td>
                                <td style="padding:13px 12px;">[<strong>1, 3, 4, 5, 8</strong>]</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/insercion.png',
                            nextButton: 'Siguiente: Comparación'
                        },
                        {
                            title: 'Comparación de algoritmos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Algoritmo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Idea principal</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventaja</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Burbuja</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Intercambia vecinos desordenados.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Es el más sencillo de entender.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Selección</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Busca el menor y lo coloca en su lugar.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hace pocos intercambios (uno por pasada).</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><strong>Inserción</strong></td>
                                <td style="padding:13px 12px;">Inserta cada elemento entre los ya ordenados.</td>
                                <td style="padding:13px 12px;">Es muy rápido si el arreglo está casi ordenado.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p>Python ya incluye funciones de ordenamiento:</p>
<pre class="codigo">
numeros.sort()                     # ordena la lista original
numeros.sort(reverse=True)         # orden descendente
ordenados = sorted(numeros)        # crea una lista nueva ordenada
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            En el curso se programan los algoritmos para comprender su lógica. En proyectos reales se usan las funciones del lenguaje, que son más eficientes.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t004',
                    label: 'Búsquedas en arreglos',
                    steps: [
                        {
                            title: '¿Qué es una búsqueda?',
                            content: `<p>Buscar es determinar si un valor se encuentra dentro de un arreglo y, si está, <strong>en qué posición</strong>.</p>
                            <p>Por convención, si el valor no se encuentra, la búsqueda devuelve <code>-1</code>, porque ningún índice válido es negativo en este contexto.</p>
                            <p>Se estudian dos algoritmos: <strong>búsqueda secuencial</strong> y <strong>búsqueda binaria</strong>.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/busqueda.png',
                            nextButton: 'Siguiente: Búsqueda secuencial'
                        },
                        {
                            title: 'Búsqueda secuencial',
                            content: `<p>También llamada <strong>lineal</strong>. Revisa los elementos uno por uno, desde el inicio, hasta encontrar el valor o llegar al final del arreglo.</p>
<pre class="codigo">
def buscar_secuencial(lista, valor):
    for i in range(len(lista)):
        if lista[i] == valor:
            return i
    return -1

codigos = [104, 87, 230, 15, 62]
posicion = buscar_secuencial(codigos, 15)
if posicion != -1:
    print("Encontrado en la posición", posicion)
else:
    print("No se encontró")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Funciona con arreglos ordenados o desordenados. En el mejor caso hace 1 comparación; en el peor, tantas como elementos tenga el arreglo.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/busquedaSecuencial.png',
                            nextButton: 'Siguiente: Búsqueda binaria'
                        },
                        {
                            title: 'Búsqueda binaria',
                            content: `<p>Solo funciona en arreglos <strong>ordenados</strong>. Compara el valor buscado con el elemento del centro:</p>
                            <ul>
                                <li>Si es igual, lo encontró.</li>
                                <li>Si el valor buscado es mayor, descarta la mitad izquierda.</li>
                                <li>Si es menor, descarta la mitad derecha.</li>
                            </ul>
                            <p>Repite el proceso con la mitad que queda hasta encontrarlo o hasta que no queden elementos.</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Es como buscar una palabra en un diccionario: se abre por la mitad y se decide hacia qué lado continuar.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/busquedaBinaria.png',
                            nextButton: 'Siguiente: Binaria en Python'
                        },
                        {
                            title: 'Búsqueda binaria en Python',
                            content: `<pre class="codigo">
def buscar_binaria(lista, valor):
    inicio = 0
    fin = len(lista) - 1
    while inicio &lt;= fin:
        medio = (inicio + fin) // 2
        if lista[medio] == valor:
            return medio
        elif lista[medio] &lt; valor:
            inicio = medio + 1
        else:
            fin = medio - 1
    return -1
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El operador <code>//</code> hace una división entera, para que <code>medio</code> sea siempre un índice válido.</p>
                            `,
                            nextButton: 'Siguiente: Prueba de escritorio'
                        },
                        {
                            title: 'Prueba de escritorio de la búsqueda binaria',
                            content: `<p>Arreglo: <code>[3, 8, 15, 21, 34, 42, 57, 66, 78]</code> (índices 0 a 8).</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Búsqueda</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">inicio</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">fin</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">medio</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">lista[medio]</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Decisión</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">57</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">34</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">34 &lt; 57 → inicio = 5</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">57</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">6</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">57</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Encontrado en la posición 6</strong></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">60</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">0</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">4</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">34</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">34 &lt; 60 → inicio = 5</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">60</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">5</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">6</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">57</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">57 &lt; 60 → inicio = 7</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">60</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">7</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">8</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">7</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">66</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">66 &gt; 60 → fin = 6</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">60</td>
                                <td style="padding:13px 12px;">7</td>
                                <td style="padding:13px 12px;">6</td>
                                <td style="padding:13px 12px;">—</td>
                                <td style="padding:13px 12px;">—</td>
                                <td style="padding:13px 12px;"><strong>inicio &gt; fin: devuelve -1</strong></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Comparación'
                        },
                        {
                            title: 'Comparación de búsquedas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Secuencial</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Binaria</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Requisito</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ninguno.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El arreglo debe estar ordenado.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Cómo avanza</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elemento por elemento.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Descarta la mitad en cada paso.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Comparaciones máximas con 1000 elementos</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">1000</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">10</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><strong>Cuándo usarla</strong></td>
                                <td style="padding:13px 12px;">Arreglos pequeños o desordenados.</td>
                                <td style="padding:13px 12px;">Arreglos grandes y ordenados.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p>En Python, <code>valor in lista</code> indica si un valor existe y <code>lista.index(valor)</code> devuelve su posición; ambos hacen una búsqueda secuencial.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/comparacionBusquedas.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t005',
                    label: 'Ficheros de texto',
                    steps: [
                        {
                            title: '¿Qué es un archivo de texto?',
                            content: `<p>Las variables guardan los datos en la memoria RAM, por lo que <strong>se pierden al terminar el programa</strong>. Un archivo (o fichero) guarda la información en el almacenamiento, de forma permanente.</p>
                            <p>Un archivo de texto contiene caracteres legibles organizados en líneas. Ejemplos: <code>.txt</code>, <code>.csv</code>.</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Con archivos, un programa puede guardar datos hoy y volver a leerlos mañana, o procesar información que otra persona preparó.</p>
<p class="nota">
<i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
Un archivo también es una <strong>abstracción</strong>: el programa trabaja con líneas de texto sin conocer cómo el sistema operativo guarda los datos en el disco, del mismo modo que una función oculta los detalles de una tarea.</p>`,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/archivoTexto.png',
                            nextButton: 'Siguiente: Abrir y cerrar'
                        },
                        {
                            title: 'Abrir y cerrar un archivo',
                            content: `<p>Para trabajar con un archivo primero se <strong>abre</strong> con <code>open()</code>, indicando el nombre y el modo, y al terminar se <strong>cierra</strong> con <code>close()</code>.</p>
<pre class="codigo">
archivo = open("datos.txt", "r", encoding="utf-8")
# ... trabajar con el archivo ...
archivo.close()
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Si el archivo no existe</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Si el archivo existe</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"r"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Leer (read)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Error <code>FileNotFoundError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lo lee</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"w"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escribir (write)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lo crea</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Borra su contenido</strong> y escribe desde cero</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>"a"</code></td>
                                <td style="padding:13px 12px;">Agregar (append)</td>
                                <td style="padding:13px 12px;">Lo crea</td>
                                <td style="padding:13px 12px;">Escribe al final, sin borrar</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Use <code>encoding="utf-8"</code> para que las tildes y la ñ se guarden y lean correctamente.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/modosApertura.png',
                            nextButton: 'Siguiente: La instrucción with'
                        },
                        {
                            title: 'La instrucción with',
                            content: `<p>Si el programa falla antes de llegar a <code>close()</code>, el archivo queda abierto. La instrucción <code>with</code> <strong>cierra el archivo automáticamente</strong> al terminar su bloque, incluso si ocurre un error.</p>
<pre class="codigo">
with open("datos.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()
print(contenido)   # aquí el archivo ya está cerrado
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>with</code> es la forma recomendada de trabajar con archivos en Python.</p>
                            `,
                            nextButton: 'Siguiente: Escribir'
                        },
                        {
                            title: 'Escribir en un archivo',
                            content: `<p>El método <code>write()</code> escribe texto. No agrega el salto de línea automáticamente: hay que incluir <code>\\n</code>.</p>
                            <p><strong>Crear un archivo:</strong></p>
<pre class="codigo">
with open("notas.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Ana,85\\n")
    archivo.write("Luis,70\\n")
    archivo.write("María,92\\n")
</pre>
                            <p><strong>Agregar al final:</strong></p>
<pre class="codigo">
with open("notas.txt", "a", encoding="utf-8") as archivo:
    archivo.write("Pedro,64\\n")
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            El modo <code>"w"</code> borra todo el contenido anterior del archivo. Si desea conservarlo, use <code>"a"</code>.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/escribirArchivo.png',
                            nextButton: 'Siguiente: Leer'
                        },
                        {
                            title: 'Leer un archivo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Forma</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué devuelve</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>archivo.read()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todo el contenido en un solo texto.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>archivo.readlines()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una lista con cada línea como elemento.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>for linea in archivo:</code></td>
                                <td style="padding:13px 12px;">Una línea en cada iteración (recomendada para archivos grandes).</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
<pre class="codigo">
with open("notas.txt", "r", encoding="utf-8") as archivo:
    for linea in archivo:
        print(linea.strip())
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Cada línea leída incluye el salto de línea al final. El método <code>strip()</code> lo elimina, junto con los espacios sobrantes.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/leerArchivo.png',
                            nextButton: 'Siguiente: Procesar datos'
                        },
                        {
                            title: 'Procesar datos de un archivo',
                            content: `<p>Es común que cada línea tenga varios datos separados por comas (formato CSV). El método <code>split(",")</code> los separa en una lista.</p>
                            <p>Contenido de <code>notas.txt</code>:</p>
<pre class="codigo">
Ana,85
Luis,70
María,92
Pedro,64
</pre>
<pre class="codigo">
suma = 0
cantidad = 0
with open("notas.txt", "r", encoding="utf-8") as archivo:
    for linea in archivo:
        datos = linea.strip().split(",")
        nombre = datos[0]
        nota = float(datos[1])
        print(nombre, "obtuvo", nota)
        suma = suma + nota
        cantidad = cantidad + 1
if cantidad &gt; 0:
    print("Promedio del grupo:", suma / cantidad)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Para la línea <code>"Ana,85"</code>, <code>split(",")</code> devuelve <code>["Ana", "85"]</code>. El 85 sigue siendo texto, por eso se convierte con <code>float()</code>.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/procesarArchivo.png',
                            nextButton: 'Siguiente: Errores con archivos'
                        },
                        {
                            title: 'Manejo de errores con archivos',
                            content: `<p>Trabajar con archivos es una de las fuentes más comunes de excepciones: el archivo puede no existir o tener datos con formato incorrecto.</p>
<pre class="codigo">
try:
    with open("notas.txt", "r", encoding="utf-8") as archivo:
        for linea in archivo:
            datos = linea.strip().split(",")
            print(datos[0], float(datos[1]))
except FileNotFoundError:
    print("El archivo notas.txt no existe")
except (ValueError, IndexError):
    print("El archivo tiene una línea con formato incorrecto")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>IndexError</code> ocurre si una línea no tiene coma (por ejemplo, una línea vacía), porque <code>datos[1]</code> no existe.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 'm006-t006',
                    label: 'Archivos y directorios',
                    steps: [
                        {
                            title: 'Rutas de archivos',
                            content: `<p>Un <strong>directorio</strong> (carpeta) organiza archivos y otros directorios. La <strong>ruta</strong> indica dónde se encuentra un archivo.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo de ruta</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Absoluta</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desde la raíz del disco. Funciona solo en esa computadora.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>C:/Users/ana/curso/notas.txt</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><strong>Relativa</strong></td>
                                <td style="padding:13px 12px;">Desde el directorio donde se ejecuta el programa.</td>
                                <td style="padding:13px 12px;"><code>datos/notas.txt</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Prefiera rutas relativas: el programa seguirá funcionando si se copia la carpeta del proyecto a otra computadora.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/rutas.png',
                            nextButton: 'Siguiente: El módulo os'
                        },
                        {
                            title: 'El módulo os',
                            content: `<p>Python incluye el módulo <code>os</code> para trabajar con archivos y directorios del sistema operativo. Se importa al inicio del programa.</p>
<pre class="codigo">
import os
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué hace</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.getcwd()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Devuelve el directorio de trabajo actual.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.listdir(ruta)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Devuelve una lista con los nombres del contenido de un directorio.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.path.exists(ruta)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Indica si la ruta existe (<span style="color:#00734a; font-weight:bold;">Verdadero</span> o <span style="color:#d2232a; font-weight:bold;">Falso</span>).</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.path.isfile(ruta)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Indica si la ruta es un archivo.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.path.isdir(ruta)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Indica si la ruta es un directorio.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>os.path.join(a, b)</code></td>
                                <td style="padding:13px 12px;">Une partes de una ruta con el separador correcto del sistema.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Windows separa las carpetas con <code>\\</code> y Linux o macOS con <code>/</code>. <code>os.path.join</code> elige el correcto automáticamente.</p>
                            `,
                            nextButton: 'Siguiente: Crear y eliminar'
                        },
                        {
                            title: 'Crear, renombrar y eliminar',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué hace</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.mkdir(ruta)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crea un directorio.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.makedirs(ruta, exist_ok=True)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crea un directorio (y los intermedios) sin error si ya existe.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.rename(actual, nuevo)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambia el nombre de un archivo o directorio.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.remove(ruta)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elimina un archivo.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>os.rmdir(ruta)</code></td>
                                <td style="padding:13px 12px;">Elimina un directorio vacío.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
<pre class="codigo">
import os

os.makedirs("reportes", exist_ok=True)
ruta = os.path.join("reportes", "resumen.txt")
if os.path.exists(ruta):
    os.remove(ruta)
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Los archivos eliminados con <code>os.remove</code> <strong>no van a la papelera</strong>: se borran de forma permanente.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/directorios.png',
                            nextButton: 'Siguiente: Listar archivos'
                        },
                        {
                            title: 'Listar archivos de un directorio',
                            content: `<p>Con <code>os.listdir</code> y un ciclo se puede recorrer el contenido de un directorio y filtrar los archivos que interesan.</p>
<pre class="codigo">
import os

carpeta = "notas"
for nombre in os.listdir(carpeta):
    if nombre.endswith(".txt"):
        print("Archivo de texto:", nombre)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>endswith(".txt")</code> verifica que el nombre termine en .txt, para ignorar otros tipos de archivo y subdirectorios.</p>
                            `,
                            nextButton: 'Siguiente: Varios archivos'
                        },
                        {
                            title: 'Trabajar con varios archivos',
                            content: `<p>Ejemplo: la carpeta <code>notas</code> contiene un archivo por grupo (<code>grupo1.txt</code>, <code>grupo2.txt</code>…) con líneas <code>nombre,nota</code>. El programa calcula el promedio de cada grupo y lo guarda en <code>resumen.txt</code>.</p>
<pre class="codigo">
import os

carpeta = "notas"
try:
    with open("resumen.txt", "w", encoding="utf-8") as resumen:
        for nombre in os.listdir(carpeta):
            if nombre.endswith(".txt"):
                ruta = os.path.join(carpeta, nombre)
                suma = 0
                cantidad = 0
                with open(ruta, "r", encoding="utf-8") as archivo:
                    for linea in archivo:
                        datos = linea.strip().split(",")
                        suma = suma + float(datos[1])
                        cantidad = cantidad + 1
                if cantidad &gt; 0:
                    promedio = round(suma / cantidad, 2)
                    resumen.write(nombre + ": " + str(promedio) + "\\n")
    print("Resumen generado")
except FileNotFoundError:
    print("No existe la carpeta", carpeta)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Este ejemplo integra lo visto en el curso: ciclos, condicionales, acumuladores, listas, excepciones, archivos y directorios.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/variosArchivos.png',
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas con archivos y directorios',
                            content: `<ol>
                                <li>Use <code>with</code> para abrir archivos, así se cierran siempre.</li>
                                <li>Indique <code>encoding="utf-8"</code> al abrir archivos de texto.</li>
                                <li>Verifique que el archivo o directorio exista, o maneje <code>FileNotFoundError</code>.</li>
                                <li>Use rutas relativas y <code>os.path.join</code> en lugar de escribir rutas fijas de su computadora.</li>
                                <li>Tenga cuidado con el modo <code>"w"</code>: reemplaza el contenido anterior.</li>
                                <li>Confirme antes de eliminar archivos o directorios, porque no hay papelera.</li>
                                <li>Mantenga un formato consistente en los archivos de datos (por ejemplo, siempre <code>nombre,nota</code>).</li>
                            </ol>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/checklist.png',
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
        /** Plantilla nuevo módulo
        ,
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/dosRutas.png',
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
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/dosRutas.png',
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
