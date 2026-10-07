// Ruta base de las imágenes del curso (subir las imágenes de Canva a esta carpeta del repositorio)
const IMG = 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-645(Python)/imgs/';

const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-645 <br> Fundamentos de Python',
        image: IMG + 'logo.png',
        description: 'Python es un lenguaje de programación de código abierto que permite el diseño de código orientado a objetos, imperativo y funcional, destacado por su fácil lectura y uso en la analítica y visualización de datos y en la automatización de tareas. El curso aborda la introducción a Python, los tipos de datos y variables, las estructuras de datos y el almacenamiento.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas principales y sus subtemas con pasos
    temas: [
        // =====================================================================
        // TEMA 1. INTRODUCCIÓN A PYTHON
        // =====================================================================
        {
            id: 'tema_001',
            label: 'Introducción a Python',
            subtemas: [
                {
                    id: 't001-pensamiento',
                    label: 'Pensamiento computacional',
                    steps: [
                        {
                            title: '¿Qué es el pensamiento computacional?',
                            content: `<p>Es una forma de razonar para resolver problemas de manera que la solución pueda ser ejecutada por una computadora.</p>
                            <p>No se trata de "pensar como una computadora", sino de organizar el razonamiento humano en pasos claros, precisos y ordenados.</p>
                            <p>
                            <i class="fas fa-warning" style="color: #00928d;"></i>
                            La computadora no piensa, no tiene iniciativa ni creatividad. Solo hace exactamente lo que el ser humano le indica a través de un programa.
                            </p>
                            `,
                            image: IMG + 'pensamientoComputacional.png',
                            nextButton: 'Siguiente: Los cuatro pilares'
                        },
                        {
                            title: 'Los cuatro pilares',
                            content: `<ul>
                                <li><strong>Descomposición</strong>: dividir un problema grande en partes más pequeñas y manejables.</li>
                                <li><strong>Reconocimiento de patrones</strong>: identificar similitudes entre problemas o dentro de un mismo problema.</li>
                                <li><strong>Abstracción</strong>: enfocarse en la información importante e ignorar los detalles que no son necesarios.</li>
                                <li><strong>Algoritmo</strong>: diseñar los pasos ordenados que resuelven el problema.</li>
                            </ul>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Ejemplo: organizar un viaje. Se descompone en transporte, hospedaje y comida (descomposición); se nota que todos los viajes requieren lo mismo (patrones); no importa el color del bus, sino el horario (abstracción); y se define el orden de las reservas (algoritmo).</p>
                            `,
                            image: IMG + 'pilares.png',
                            nextButton: 'Siguiente: Algoritmo'
                        },
                        {
                            title: 'Algoritmo',
                            content: `<p>Un algoritmo es un conjunto de instrucciones ordenadas que permiten resolver un problema o realizar una tarea. Debe tener instrucciones:</p>
                            <ul>
                                <li><strong>Claras</strong>: cada paso debe poder entenderse.</li>
                                <li><strong>Ordenadas</strong>: los pasos tienen una secuencia lógica.</li>
                                <li><strong>Precisas</strong>: no deben existir instrucciones ambiguas.</li>
                                <li><strong>Finitas</strong>: el algoritmo debe terminar en algún momento.</li>
                            </ul>
                            <p>Algoritmo para preparar una taza de café:</p>
                            <ol>
                                <li>Tomar una taza.</li>
                                <li>Calentar agua.</li>
                                <li>Colocar café en la taza.</li>
                                <li>Agregar el agua caliente.</li>
                                <li>Mezclar y servir.</li>
                            </ol>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/algoritmo.png',
                            nextButton: 'Siguiente: Del algoritmo al programa'
                        },
                        {
                            title: 'Del algoritmo al programa',
                            content: `<p>Un algoritmo describe <strong>cómo</strong> resolver un problema; un programa es la implementación de ese algoritmo en un lenguaje que la computadora puede procesar.</p>
                            <p>Algoritmo para calcular el área de un rectángulo:</p>
                            <ol>
                                <li>Solicitar la base.</li>
                                <li>Solicitar la altura.</li>
                                <li>Multiplicar base × altura.</li>
                                <li>Mostrar el resultado.</li>
                            </ol>
                            <p>Programa en Python:</p>
<pre class="codigo">
base = float(input("Ingrese la base: "))
altura = float(input("Ingrese la altura: "))
area = base * altura
print("El área es:", area)
</pre>
                            `,
                            nextButton: 'Siguiente: ¿Por qué Python?'
                        },
                        {
                            title: '¿Por qué Python?',
                            content: `<p>Python es un lenguaje <strong>interpretado</strong>, de código abierto y de propósito general. Sus principales características son:</p>
                            <ul>
                                <li><strong>Sintaxis legible</strong>: se parece al lenguaje natural y usa la indentación para organizar el código.</li>
                                <li><strong>Multiparadigma</strong>: permite programar de forma imperativa, orientada a objetos y funcional.</li>
                                <li><strong>Gran ecosistema</strong>: miles de bibliotecas para análisis de datos, visualización, inteligencia artificial, web y automatización.</li>
                                <li><strong>Multiplataforma</strong>: funciona en Windows, macOS y Linux.</li>
                            </ul>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Un <strong>intérprete</strong> procesa las instrucciones durante la ejecución, a diferencia de un <strong>compilador</strong>, que traduce todo el programa antes de ejecutarlo (como en C o C++).</p>
                            `,
                            image: IMG + 'python.png',
                            nextButton: 'Siguiente: IA y programación'
                        },
                        {
                            title: 'Inteligencia artificial en la programación',
                            content: `<p>La inteligencia artificial puede generar código, detectar errores, explicar conceptos y sugerir mejoras. Es un <strong>socio cognitivo</strong> que potencia el análisis y la creatividad.</p>
                            <p>Sin embargo, no reemplaza el aprendizaje de las bases. Es fundamental comprender la lógica, los algoritmos y los conceptos para poder <strong>revisar, corregir y responsabilizarse</strong> del código generado.</p>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Nunca entregue código que no entiende, aunque funcione.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/ia.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't001-instalacion',
                    label: 'Instalación del ambiente de desarrollo',
                    steps: [
                        {
                            title: 'Herramientas necesarias',
                            content: `<p>Para programar en Python se necesitan dos herramientas:</p>
                            <ul>
                                <li><strong>El intérprete de Python</strong>: el programa que ejecuta el código. Se descarga desde python.org.</li>
                                <li><strong>Un editor de código</strong>: el programa donde se escribe el código. En el curso se utiliza <strong>Visual Studio Code</strong>.</li>
                            </ul>
                            <p>Otros editores conocidos son PyCharm, Spyder, IDLE (incluido con Python) y Jupyter Notebook.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/editor.png',
                            nextButton: 'Siguiente: Instalar Python'
                        },
                        {
                            title: 'Instalar Python',
                            content: `<ol>
                                <li>Ingresar a <strong>python.org/downloads</strong> y descargar la versión más reciente de Python 3.</li>
                                <li>Ejecutar el instalador.</li>
                                <li>En Windows, marcar la casilla <strong>"Add python.exe to PATH"</strong> antes de presionar <em>Install Now</em>.</li>
                                <li>Al finalizar, abrir una terminal y verificar la instalación:</li>
                            </ol>
<pre class="codigo">
python --version
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            En macOS y Linux el comando suele ser <code>python3 --version</code>.</p>
                            `,
                            nextButton: 'Siguiente: Instalar Visual Studio Code'
                        },
                        {
                            title: 'Instalar Visual Studio Code',
                            content: `<ol>
                                <li>Descargar Visual Studio Code desde <strong>code.visualstudio.com</strong> e instalarlo.</li>
                                <li>Abrir el panel de <strong>Extensiones</strong> (Ctrl + Shift + X).</li>
                                <li>Buscar e instalar la extensión <strong>Python</strong> de Microsoft.</li>
                                <li>Crear una carpeta para el curso y abrirla con <em>Archivo → Abrir carpeta</em>.</li>
                            </ol>
                            <a href="https://docs.google.com/document/d/1Qk2zS0k_AJDP_VvGlmmbtgxJ_MBNCsqUO0Tl-C0gEHE/edit?usp=sharing"
                                target="_blank" rel="noopener noreferrer" title="Abrir el taller de instalación de Visual Studio Code y Python 3">
                                <strong>Instalación de las herramientas necesarias</strong>
                                <span style="display: block; margin-top: 0.25rem;">
                                    Visual Studio Code + Python 3 · Guía paso a paso
                                </span>
                                <i class="fa-solid fa-up-right-from-square" aria-hidden="true" style="color: #00928d; margin-left: 0.4rem;"></i>
                            </a>
                            `,
                            nextButton: 'Siguiente: Formas de ejecutar Python'
                        },
                        {
                            title: 'Formas de ejecutar Python',
                            content: `<p><strong>1. Modo interactivo (REPL)</strong>: se escribe <code>python</code> en la terminal y cada instrucción se ejecuta al presionar Enter. Útil para hacer pruebas rápidas.</p>
<pre class="codigo">
&gt;&gt;&gt; 2 + 3
5
&gt;&gt;&gt; exit()
</pre>
                            <p><strong>2. Archivo de código (script)</strong>: se guarda el código en un archivo con extensión <code>.py</code> y se ejecuta completo.</p>
<pre class="codigo">
python hola.py
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            En Visual Studio Code también puede ejecutar el archivo con el botón <i class="fa-solid fa-play" aria-hidden="true"></i> de la esquina superior derecha.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't001-primeros-pasos',
                    label: 'Primeros pasos con Python',
                    steps: [
                        {
                            title: 'El primer programa',
                            content: `<p>Por tradición, el primer programa en cualquier lenguaje muestra un saludo en pantalla. En Python basta con una línea:</p>
<pre class="codigo">
print("¡Hola, mundo!")
</pre>
                            <p>Salida:</p>
<pre class="codigo">
¡Hola, mundo!
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>print()</code> es una <strong>función</strong> incorporada de Python: recibe un valor entre paréntesis y lo muestra en la pantalla.</p>
                            `,
                            image: IMG + 'holaMundo.png',
                            nextButton: 'Siguiente: Python como calculadora'
                        },
                        {
                            title: 'Python como calculadora',
                            content: `<p>En el modo interactivo, Python evalúa expresiones y muestra el resultado:</p>
<pre class="codigo">
&gt;&gt;&gt; 10 + 5
15
&gt;&gt;&gt; 7 * 3
21
&gt;&gt;&gt; 20 / 4
5.0
&gt;&gt;&gt; 2 ** 10
1024
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            La división con <code>/</code> siempre produce un número decimal (<code>5.0</code>), aunque el resultado sea exacto.</p>
                            `,
                            nextButton: 'Siguiente: Errores comunes'
                        },
                        {
                            title: 'Primeros errores comunes',
                            content: `<p>Los mensajes de error son una ayuda: indican la línea y el tipo de problema.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Error</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Causa</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>print("Hola)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>SyntaxError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Falta cerrar las comillas.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Print("Hola")</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>NameError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Python distingue mayúsculas de minúsculas.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&nbsp;&nbsp;print("Hola")</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>IndentationError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sangría donde no corresponde.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>"Edad: " + 20</code></td>
                                <td style="padding:13px 12px;"><code>TypeError</code></td>
                                <td style="padding:13px 12px;">No se puede unir texto con un número sin convertirlo.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/bug.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't001-sintaxis',
                    label: 'Sintaxis básica y convenciones',
                    steps: [
                        {
                            title: 'Reglas básicas de sintaxis',
                            content: `<ul>
                                <li><strong>Una instrucción por línea</strong>: no se usa punto y coma al final.</li>
                                <li><strong>Distingue mayúsculas y minúsculas</strong>: <code>edad</code>, <code>Edad</code> y <code>EDAD</code> son tres nombres distintos.</li>
                                <li><strong>La indentación es obligatoria</strong>: define qué instrucciones pertenecen a cada bloque. Se usan 4 espacios por nivel.</li>
                                <li><strong>Los bloques inician con dos puntos (:)</strong>: después de <code>if</code>, <code>for</code>, <code>while</code>, <code>def</code>, entre otros.</li>
                            </ul>
<pre class="codigo">
edad = 20
if edad &gt;= 18:
    print("Mayor de edad")    # 4 espacios de indentación
print("Fin del programa")
</pre>
                            `,
                            nextButton: 'Siguiente: Comentarios'
                        },
                        {
                            title: 'Comentarios',
                            content: `<p>Los comentarios son notas para las personas; Python los ignora al ejecutar.</p>
<pre class="codigo">
# Comentario de una línea

"""
Comentario de varias líneas
(docstring), usado para documentar
programas y funciones.
"""
</pre>
                            <p>Un buen comentario explica el <strong>por qué</strong>, no el <strong>qué</strong>:</p>
                            <ul>
                                <li>Mal comentario: <code># Suma 1 a puntos</code> (es obvio).</li>
                                <li>Buen comentario: <code># Cada compra suma un punto de fidelidad al cliente</code></li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Convenciones de nombres'
                        },
                        {
                            title: 'Convenciones de nombres',
                            content: `<p>Un nombre (identificador):</p>
                            <ul>
                                <li>Debe comenzar con una letra o un guion bajo (_), nunca con un número.</li>
                                <li>Puede contener letras, números y guion bajo, pero no espacios ni caracteres especiales.</li>
                                <li>No puede ser una palabra reservada (<code>if</code>, <code>for</code>, <code>while</code>, <code>def</code>, <code>True</code>...).</li>
                                <li>Debe ser descriptivo: <code>precio_total</code> en lugar de <code>pt</code> o <code>x</code>.</li>
                            </ul>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Convención</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variables y funciones</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">snake_case</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>nota_final</code>, <code>calcular_total</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Constantes</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MAYÚSCULAS</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>IVA</code>, <code>MAXIMO_INTENTOS</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Clases</td>
                                <td style="padding:13px 12px;">PascalCase</td>
                                <td style="padding:13px 12px;"><code>Estudiante</code>, <code>GestorArchivos</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: PEP 8'
                        },
                        {
                            title: 'PEP 8: la guía de estilo oficial',
                            content: `<p>La <strong>PEP 8</strong> (Python Enhancement Proposal 8) es la guía de estilo oficial de Python. Algunas de sus reglas:</p>
                            <ul>
                                <li>4 espacios por nivel de indentación (no tabulaciones).</li>
                                <li>Líneas de máximo 79 caracteres.</li>
                                <li>Un espacio alrededor de los operadores: <code>total = precio + impuesto</code>.</li>
                                <li>Sin espacios dentro de los paréntesis: <code>print(total)</code>, no <code>print( total )</code>.</li>
                                <li>Dos líneas en blanco antes de cada función y una línea en blanco para separar bloques lógicos.</li>
                            </ul>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
Precio=1500;cantidad=3
TOTAL=Precio*cantidad
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
precio = 1500
cantidad = 3
total = precio * cantidad
</pre>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/reglas.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't001-entornos',
                    label: 'Uso de entornos virtuales',
                    steps: [
                        {
                            title: '¿Qué es un entorno virtual?',
                            content: `<p>Es una carpeta aislada que contiene su propia copia del intérprete de Python y sus propias bibliotecas. Cada proyecto puede tener su entorno, sin afectar a los demás.</p>
                            <p><strong>¿Por qué es necesario?</strong></p>
                            <ul>
                                <li>Un proyecto puede necesitar la versión 1.0 de una biblioteca y otro la versión 2.0.</li>
                                <li>Evita llenar la instalación general de Python con paquetes que solo usa un proyecto.</li>
                                <li>Permite que otra persona reproduzca exactamente el mismo ambiente.</li>
                            </ul>
                            `,
                            image: IMG + 'entornoVirtual.png',
                            nextButton: 'Siguiente: Crear y activar'
                        },
                        {
                            title: 'Crear y activar un entorno virtual',
                            content: `<p>Desde la terminal, dentro de la carpeta del proyecto:</p>
                            <p><strong>1. Crear el entorno</strong> (se crea una carpeta llamada <code>.venv</code>):</p>
<pre class="codigo">
python -m venv .venv
</pre>
                            <p><strong>2. Activarlo:</strong></p>
<pre class="codigo">
# Windows
.venv\\Scripts\\activate

# macOS / Linux
source .venv/bin/activate
</pre>
                            <p>Cuando está activo, la terminal muestra <code>(.venv)</code> al inicio de la línea.</p>
                            <p><strong>3. Desactivarlo:</strong></p>
<pre class="codigo">
deactivate
</pre>
                            `,
                            nextButton: 'Siguiente: Instalar paquetes con pip'
                        },
                        {
                            title: 'Instalar paquetes con pip',
                            content: `<p><strong>pip</strong> es el gestor de paquetes de Python. Con el entorno activo, los paquetes se instalan solo en ese proyecto.</p>
<pre class="codigo">
pip install requests          # instalar un paquete
pip list                      # ver los paquetes instalados
pip uninstall requests        # desinstalar un paquete
</pre>
                            <p>Para compartir el proyecto se guarda la lista de dependencias en un archivo:</p>
<pre class="codigo">
pip freeze &gt; requirements.txt      # guardar la lista
pip install -r requirements.txt    # instalar todo en otra computadora
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            La carpeta <code>.venv</code> no se comparte ni se sube a GitHub: se comparte el archivo <code>requirements.txt</code>.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        // =====================================================================
        // TEMA 2. LENGUAJE DE PROGRAMACIÓN
        // =====================================================================
        {
            id: 'tema_002',
            label: 'Lenguaje de programación',
            subtemas: [
                {
                    id: 't002-tipos',
                    label: 'Tipos de datos',
                    steps: [
                        {
                            title: 'Datos y tipos de datos',
                            content: `<p>Un dato es información representada mediante números, letras o la combinación de ambos. El <strong>tipo de dato</strong> indica qué clase de valor es y qué operaciones se pueden hacer con él.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplos</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>int</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Número entero, positivo o negativo.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>0</code>, <code>25</code>, <code>-15</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>float</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Número con parte decimal.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>3.14</code>, <code>-2.5</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>complex</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Número con parte real e imaginaria.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>3+4j</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>str</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cadena de caracteres (texto).</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"San José"</code>, <code>'A'</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>bool</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valor de verdad.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>True</code>, <code>False</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>NoneType</code></td>
                                <td style="padding:13px 12px;">Ausencia de valor.</td>
                                <td style="padding:13px 12px;"><code>None</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/datos.png',
                            nextButton: 'Siguiente: Conocer el tipo de un dato'
                        },
                        {
                            title: 'Conocer el tipo de un dato',
                            content: `<p>La función <code>type()</code> indica el tipo de un valor:</p>
<pre class="codigo">
print(type(25))          # &lt;class 'int'&gt;
print(type(25.0))        # &lt;class 'float'&gt;
print(type("25"))        # &lt;class 'str'&gt;
print(type(True))        # &lt;class 'bool'&gt;
print(type(None))        # &lt;class 'NoneType'&gt;
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>25</code> y <code>"25"</code> se ven parecidos, pero son tipos distintos: el primero es un número y el segundo es texto. <code>25 + 1</code> da 26, pero <code>"25" + 1</code> produce un error.</p>
                            `,
                            nextButton: 'Siguiente: Cadenas de texto'
                        },
                        {
                            title: 'Cadenas de texto (str)',
                            content: `<p>Se escriben entre comillas simples o dobles. Cada carácter tiene una posición (índice) que inicia en 0.</p>
<pre class="codigo">
nombre = "Python"
print(nombre[0])          # P
print(nombre[-1])         # n (último carácter)
print(nombre[0:3])        # Pyt (del 0 al 2)
print(len(nombre))        # 6
</pre>
                            <p><strong>Métodos útiles:</strong></p>
<pre class="codigo">
texto = "  Hola Mundo  "
texto.upper()             # "  HOLA MUNDO  "
texto.lower()             # "  hola mundo  "
texto.strip()             # "Hola Mundo" (quita espacios)
texto.replace("Hola", "Adiós")
"a,b,c".split(",")        # ['a', 'b', 'c']
</pre>
                            `,
                            nextButton: 'Siguiente: Conversión de tipos'
                        },
                        {
                            title: 'Conversión de tipos',
                            content: `<p>Python permite convertir un valor de un tipo a otro con funciones incorporadas:</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>int()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>int("42")</code>, <code>int(3.9)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>42</code>, <code>3</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>float()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>float("2.5")</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>2.5</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>str()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>str(100)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"100"</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>bool()</code></td>
                                <td style="padding:13px 12px;"><code>bool(0)</code>, <code>bool("hola")</code></td>
                                <td style="padding:13px 12px;"><code>False</code>, <code>True</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            <code>int("hola")</code> produce <code>ValueError</code>: solo se puede convertir un texto que realmente represente un número.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't002-variables',
                    label: 'Variables y constantes',
                    steps: [
                        {
                            title: 'Variables',
                            content: `<p>Una variable es un nombre que hace referencia a un valor guardado en la memoria. Ese valor puede cambiar durante la ejecución.</p>
                            <p><strong>Sintaxis:</strong> <code>nombre = valor</code></p>
<pre class="codigo">
edad = 23
nombre = "Ana"
temperatura = 17.5
esta_matriculado = True
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El signo <code>=</code> no significa "igual" sino <strong>asignación</strong>: guarda el valor de la derecha en la variable de la izquierda.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/variables.png',
                            nextButton: 'Siguiente: Tipado dinámico'
                        },
                        {
                            title: 'Tipado dinámico',
                            content: `<p>En Python no se declara el tipo de una variable: el tipo lo determina el valor que se le asigna, y puede cambiar.</p>
<pre class="codigo">
dato = 10
print(type(dato))     # &lt;class 'int'&gt;
dato = "diez"
print(type(dato))     # &lt;class 'str'&gt;
</pre>
                            <p><strong>Asignación múltiple:</strong></p>
<pre class="codigo">
x, y, z = 1, 2, 3
a = b = 0
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Que se pueda cambiar el tipo no significa que sea buena idea: mantenga cada variable con un único tipo para que el código sea predecible.</p>
                            `,
                            nextButton: 'Siguiente: Constantes'
                        },
                        {
                            title: 'Constantes',
                            content: `<p>Una constante es un valor que no debe cambiar durante la ejecución.</p>
                            <p>Python no tiene constantes reales, pero existe una <strong>convención</strong>: escribir el nombre en mayúsculas, separando palabras con guion bajo. Así se indica a otras personas que ese valor no debe modificarse.</p>
<pre class="codigo">
PI = 3.1416
IVA = 0.13
MAXIMO_INTENTOS = 3

precio = 10000
total = precio + precio * IVA
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si el IVA cambia, basta con modificar una sola línea y todo el programa queda actualizado.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/constantes.png',
                            nextButton: 'Siguiente: Variables locales y globales'
                        },
                        {
                            title: 'Variables locales y globales',
                            content: `<p>Según dónde se creen, las variables tienen distinto <strong>alcance</strong>:</p>
                            <ul>
                                <li><strong>Global</strong>: se crea fuera de cualquier función y se puede leer en todo el archivo.</li>
                                <li><strong>Local</strong>: se crea dentro de una función y solo existe mientras esa función se ejecuta.</li>
                            </ul>
<pre class="codigo">
IVA = 0.13                      # global

def calcular_total(precio):
    impuesto = precio * IVA     # local
    return precio + impuesto

print(calcular_total(1000))     # 1130.0
print(impuesto)                 # NameError
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Buena práctica: las funciones reciben los datos por parámetros y devuelven el resultado con <code>return</code>, en lugar de modificar variables globales.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't002-operadores',
                    label: 'Operadores',
                    steps: [
                        {
                            title: 'Operadores aritméticos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operador</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operación</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>+</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Suma</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>7 + 2</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>9</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>-</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Resta</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>7 - 2</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>5</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>*</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Multiplicación</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>7 * 2</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>14</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>/</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">División</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>7 / 2</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>3.5</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>//</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">División entera</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>7 // 2</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>3</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>%</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Módulo (residuo)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>7 % 2</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>1</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>**</code></td>
                                <td style="padding:13px 12px;">Potencia</td>
                                <td style="padding:13px 12px;"><code>7 ** 2</code></td>
                                <td style="padding:13px 12px;"><code>49</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El módulo <code>%</code> es muy útil: <code>numero % 2 == 0</code> indica si un número es par.</p>
                            `,
                            nextButton: 'Siguiente: Precedencia y asignación'
                        },
                        {
                            title: 'Precedencia y operadores de asignación',
                            content: `<p><strong>Orden de evaluación</strong> (de mayor a menor prioridad):</p>
                            <ol>
                                <li>Paréntesis <code>( )</code></li>
                                <li>Potencia <code>**</code></li>
                                <li>Multiplicación y divisiones <code>*  /  //  %</code></li>
                                <li>Suma y resta <code>+  -</code></li>
                            </ol>
<pre class="codigo">
print(2 + 3 * 4)       # 14
print((2 + 3) * 4)     # 20
</pre>
                            <p><strong>Operadores de asignación compuesta:</strong></p>
<pre class="codigo">
total = 100
total += 50    # equivale a total = total + 50  → 150
total -= 20    # total = total - 20  → 130
total *= 2     # total = total * 2   → 260
total /= 4     # total = total / 4   → 65.0
</pre>
                            `,
                            nextButton: 'Siguiente: Operadores de comparación'
                        },
                        {
                            title: 'Operadores de comparación',
                            content: `<p>Comparan dos valores y producen un resultado <code>True</code> o <code>False</code>.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
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
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>==</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Igual a</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>5 == 5</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">True</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>!=</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Distinto de</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>5 != 3</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">True</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&gt;</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor que</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>7 &gt; 10</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#d2232a; font-weight:bold;">False</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&lt;</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menor que</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>3 &lt; 8</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">True</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>&gt;=</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mayor o igual que</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>5 &gt;= 5</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">True</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>&lt;=</code></td>
                                <td style="padding:13px 12px;">Menor o igual que</td>
                                <td style="padding:13px 12px;"><code>4 &lt;= 2</code></td>
                                <td style="padding:13px 12px; color:#d2232a; font-weight:bold;">False</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            No confunda <code>=</code> (asignar) con <code>==</code> (comparar).</p>
                            `,
                            nextButton: 'Siguiente: Operadores lógicos'
                        },
                        {
                            title: 'Operadores lógicos',
                            content: `<p>Combinan condiciones y producen un único resultado <code>True</code> o <code>False</code>.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
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
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>and</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verdadero solo si ambas son verdaderas</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>(5 &gt; 3) and (2 &lt; 4)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">True</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>or</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Verdadero si al menos una es verdadera</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>(5 &gt; 10) or (2 &lt; 4)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff; color:#00734a; font-weight:bold;">True</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>not</code></td>
                                <td style="padding:13px 12px;">Invierte el valor</td>
                                <td style="padding:13px 12px;"><code>not (5 &gt; 3)</code></td>
                                <td style="padding:13px 12px; color:#d2232a; font-weight:bold;">False</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
<pre class="codigo">
edad = 25
tiene_licencia = True
puede_conducir = edad &gt;= 18 and tiene_licencia
print(puede_conducir)   # True
</pre>
                            `,
                            nextButton: 'Siguiente: Pertenencia e identidad'
                        },
                        {
                            title: 'Operadores de pertenencia e identidad',
                            content: `<p><strong>Pertenencia</strong> (<code>in</code>, <code>not in</code>): verifican si un valor está dentro de una secuencia.</p>
<pre class="codigo">
print("a" in "casa")              # True
print(5 in [1, 2, 3])             # False
print("x" not in "Python")        # True
</pre>
                            <p><strong>Identidad</strong> (<code>is</code>, <code>is not</code>): verifican si dos nombres hacen referencia al mismo objeto. Se usan principalmente para comparar con <code>None</code>.</p>
<pre class="codigo">
resultado = None
if resultado is None:
    print("Aún no hay resultado")
</pre>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't002-entrada-salida',
                    label: 'Entrada y salida de datos',
                    steps: [
                        {
                            title: 'Entrada de datos: input()',
                            content: `<p><code>input()</code> muestra un mensaje, espera a que el usuario escriba y devuelve lo escrito <strong>siempre como texto (str)</strong>.</p>
<pre class="codigo">
nombre = input("¿Cuál es su nombre? ")
print("Hola,", nombre)
</pre>
                            <p>Si se necesita un número, hay que convertirlo:</p>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
edad = input("Edad: ")
print(edad + 1)          # TypeError
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
edad = int(input("Edad: "))
print(edad + 1)
</pre>
                            </div>
                            `,
                            image: IMG + 'entradaSalida.png',
                            nextButton: 'Siguiente: Salida de datos'
                        },
                        {
                            title: 'Salida de datos: print()',
                            content: `<p><code>print()</code> puede recibir varios valores separados por comas; los muestra separados por un espacio.</p>
<pre class="codigo">
print("Total:", 1500, "colones")      # Total: 1500 colones
</pre>
                            <p>Parámetros opcionales:</p>
<pre class="codigo">
print("A", "B", "C", sep="-")          # A-B-C
print("Cargando", end="...")
print("listo")                         # Cargando...listo
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>sep</code> cambia el separador entre valores y <code>end</code> cambia lo que se imprime al final (por defecto, un salto de línea).</p>
                            `,
                            nextButton: 'Siguiente: Formato con f-strings'
                        },
                        {
                            title: 'Formato con f-strings',
                            content: `<p>Las <strong>f-strings</strong> permiten insertar variables y expresiones dentro de un texto. Se coloca una <code>f</code> antes de las comillas y las variables entre llaves.</p>
<pre class="codigo">
nombre = "Ana"
nota = 87.456
print(f"{nombre} obtuvo {nota} puntos")
print(f"Nota redondeada: {nota:.2f}")        # 87.46
print(f"El doble es {nota * 2:.1f}")         # 174.9
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Formato</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Decimales</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>f"{3.14159:.2f}"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>3.14</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Separador de miles</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>f"{1500000:,}"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>1,500,000</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Porcentaje</td>
                                <td style="padding:13px 12px;"><code>f"{0.13:.0%}"</code></td>
                                <td style="padding:13px 12px;"><code>13%</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Ejemplo completo'
                        },
                        {
                            title: 'Ejemplo: entrada, proceso y salida',
                            content: `<p>Programa que calcula el total de una compra con IVA:</p>
<pre class="codigo">
IVA = 0.13

producto = input("Producto: ")
precio = float(input("Precio unitario: "))
cantidad = int(input("Cantidad: "))

subtotal = precio * cantidad
impuesto = subtotal * IVA
total = subtotal + impuesto

print(f"Producto: {producto}")
print(f"Subtotal: ₡{subtotal:,.2f}")
print(f"IVA:      ₡{impuesto:,.2f}")
print(f"Total:    ₡{total:,.2f}")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Todo programa sigue este esquema básico: <strong>entrada</strong> (pedir datos), <strong>proceso</strong> (calcular) y <strong>salida</strong> (mostrar resultados).</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't002-condicionales',
                    label: 'Estructuras condicionales',
                    steps: [
                        {
                            title: '¿Qué es una estructura condicional?',
                            content: `<p>Permite que el programa evalúe una condición y, según el resultado (<code>True</code> o <code>False</code>), ejecute un bloque de código u otro.</p>
                            <p>Sin condicionales, un programa siempre ejecuta las mismas instrucciones en el mismo orden. Con ellas, el programa puede <strong>tomar decisiones</strong>.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/decision.png',
                            nextButton: 'Siguiente: if'
                        },
                        {
                            title: 'Condicional simple (if)',
                            content: `<p>Si la condición es verdadera, ejecuta el bloque. Si es falsa, lo salta y continúa.</p>
<pre class="codigo">
edad = int(input("Edad: "))
if edad &gt;= 18:
    print("Es mayor de edad")
print("Fin")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Con edad 20 se muestra el mensaje y "Fin". Con edad 15 solo se muestra "Fin".</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/unaRuta.png',
                            nextButton: 'Siguiente: if-else'
                        },
                        {
                            title: 'Condicional doble (if-else)',
                            content: `<p>Si la condición es verdadera ejecuta un bloque; si es falsa, ejecuta otro. Siempre se ejecuta exactamente uno de los dos.</p>
<pre class="codigo">
nota = float(input("Nota: "))
if nota &gt;= 70:
    print("Aprobado")
else:
    print("Reprobado")
</pre>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/dosRutas.png',
                            nextButton: 'Siguiente: if-elif-else'
                        },
                        {
                            title: 'Condicional múltiple (if-elif-else)',
                            content: `<p>Se usa cuando hay más de dos caminos. Las condiciones se evalúan en orden; la primera verdadera ejecuta su bloque y se sale de la estructura.</p>
<pre class="codigo">
nota = float(input("Nota: "))
if nota &gt;= 90:
    print("Excelente")
elif nota &gt;= 80:
    print("Muy bueno")
elif nota &gt;= 70:
    print("Aprobado")
else:
    print("Reprobado")
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            El orden importa: si se pregunta primero por <code>nota &gt;= 70</code>, una nota de 95 mostraría "Aprobado" y nunca llegaría a "Excelente".</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/tresRutas.png',
                            nextButton: 'Siguiente: Condicional anidada'
                        },
                        {
                            title: 'Condicional anidada',
                            content: `<p>Una condicional dentro de otra. Se usa cuando una decisión depende de otra previa.</p>
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
                            Si cada nivel no tiene su propio <code>else</code>, es mejor combinar las condiciones con <code>and</code>: <code>if edad &gt;= 18 and tiene_licencia:</code></p>
                            `,
                            nextButton: 'Siguiente: match-case'
                        },
                        {
                            title: 'Selección múltiple (match-case)',
                            content: `<p>Desde Python 3.10 existe <code>match</code>, útil cuando se compara una variable contra varios valores fijos, como en un menú.</p>
<pre class="codigo">
opcion = input("Opción (1-3): ")
match opcion:
    case "1":
        print("Agregar registro")
    case "2":
        print("Consultar registros")
    case "3":
        print("Salir")
    case _:
        print("Opción no válida")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>case _</code> funciona como el <code>else</code>: atiende cualquier valor que no coincida con los casos anteriores.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/menuOpciones.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't002-bucles',
                    label: 'Estructuras iterativas (bucles)',
                    steps: [
                        {
                            title: '¿Qué es un bucle?',
                            content: `<p>Es una estructura que permite <strong>repetir un bloque de instrucciones</strong> una cantidad conocida de veces o mientras se cumpla una condición. Cada repetición se llama <strong>iteración</strong>.</p>
                            <p>Python tiene dos bucles:</p>
                            <ul>
                                <li><code>while</code>: repite mientras una condición sea verdadera.</li>
                                <li><code>for</code>: recorre los elementos de una secuencia.</li>
                            </ul>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/ciclo.png',
                            nextButton: 'Siguiente: while'
                        },
                        {
                            title: 'Bucle while',
                            content: `<p>Evalúa la condición antes de cada iteración. Mientras sea verdadera, ejecuta el bloque.</p>
<pre class="codigo">
contador = 1                # inicialización
while contador &lt;= 5:        # condición
    print(contador)         # cuerpo
    contador += 1           # actualización
</pre>
                            <p><strong>Validar un dato hasta que sea correcto:</strong></p>
<pre class="codigo">
nota = float(input("Nota (0-100): "))
while nota &lt; 0 or nota &gt; 100:
    nota = float(input("Nota no válida. Intente de nuevo: "))
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Si la condición nunca llega a ser falsa, se produce un <strong>ciclo infinito</strong>. Se detiene con Ctrl + C.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/cicloWhile.png',
                            nextButton: 'Siguiente: for y range()'
                        },
                        {
                            title: 'Bucle for y range()',
                            content: `<p>Recorre los elementos de una secuencia (texto, lista, rango de números...). Con <code>range()</code> se repite una cantidad conocida de veces.</p>
<pre class="codigo">
for i in range(1, 6):
    print(i)              # 1, 2, 3, 4, 5

for letra in "Hola":
    print(letra)          # H, o, l, a
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
                            El valor final de <code>range</code> <strong>no se incluye</strong>.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/cicloFor.png',
                            nextButton: 'Siguiente: Contadores y acumuladores'
                        },
                        {
                            title: 'Contadores y acumuladores',
                            content: `<ul>
                                <li><strong>Contador</strong>: aumenta en una cantidad fija para contar cuántas veces ocurre algo.</li>
                                <li><strong>Acumulador</strong>: suma (o multiplica) valores para obtener un total.</li>
                            </ul>
<pre class="codigo">
suma = 0          # acumulador
aprobados = 0     # contador
for i in range(5):
    nota = float(input("Nota: "))
    suma += nota
    if nota &gt;= 70:
        aprobados += 1
print(f"Promedio: {suma / 5:.2f}")
print(f"Aprobados: {aprobados}")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Ambos se inicializan <strong>antes</strong> del bucle. Si se inicializan dentro, se reinician en cada iteración.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/contadorAcumulador.png',
                            nextButton: 'Siguiente: break y continue'
                        },
                        {
                            title: 'Control del bucle: break y continue',
                            content: `<ul>
                                <li><code>break</code>: termina el bucle de inmediato.</li>
                                <li><code>continue</code>: salta el resto de la iteración actual y pasa a la siguiente.</li>
                            </ul>
<pre class="codigo">
# break: detener al encontrar el primer múltiplo de 7
for numero in range(1, 50):
    if numero % 7 == 0:
        print("Primer múltiplo de 7:", numero)
        break

# continue: mostrar solo los impares
for numero in range(1, 10):
    if numero % 2 == 0:
        continue
    print(numero)
</pre>
                            `,
                            nextButton: 'Siguiente: Menú repetitivo'
                        },
                        {
                            title: 'Ejemplo: menú que se repite',
                            content: `<p>Al combinar un bucle con una condicional múltiple, el menú se muestra hasta que el usuario decide salir. Esta estructura es la base del proyecto del curso.</p>
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
        print(f"Dólares: {colones / TIPO_CAMBIO:.2f}")
    elif opcion == "2":
        dolares = float(input("Monto en dólares: "))
        print(f"Colones: {dolares * TIPO_CAMBIO:,.2f}")
    elif opcion != "3":
        print("Opción no válida")
print("Programa finalizado")
</pre>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/menuCiclo.png',
                            nextButton: 'Siguiente: Funciones'
                        },
                        {
                            title: 'Organizar el código con funciones',
                            content: `<p>Una función agrupa instrucciones bajo un nombre para reutilizarlas. Se define con <code>def</code>, puede recibir <strong>parámetros</strong> y devolver un resultado con <code>return</code>.</p>
<pre class="codigo">
def calcular_promedio(suma, cantidad):
    if cantidad == 0:
        return 0
    return suma / cantidad

def mostrar_condicion(promedio):
    if promedio &gt;= 70:
        print("Aprobado")
    else:
        print("Reprobado")

promedio = calcular_promedio(255, 3)
print(f"Promedio: {promedio:.2f}")
mostrar_condicion(promedio)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            En el proyecto, cada operación (agregar, consultar, modificar, eliminar) puede ser una función. Así el programa principal queda corto y claro.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/funcionCajaNegra.png',
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        // =====================================================================
        // TEMA 3. ESTRUCTURAS DE DATOS
        // =====================================================================
        {
            id: 'tema_003',
            label: 'Estructuras de datos',
            subtemas: [
                {
                    id: 't003-introduccion',
                    label: '¿Qué es una estructura de datos?',
                    steps: [
                        {
                            title: '¿Qué es una estructura de datos?',
                            content: `<p>Es una forma de <strong>organizar y almacenar varios valores</strong> bajo un mismo nombre, para poder acceder a ellos y manipularlos de forma eficiente.</p>
                            <p>Sin estructuras de datos, guardar las notas de 30 estudiantes requeriría 30 variables distintas.</p>
                            `,
                            image: IMG + 'estructurasDatos.png',
                            nextButton: 'Siguiente: Comparación'
                        },
                        {
                            title: 'Estructuras de datos de Python',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estructura</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Sintaxis</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ordenada</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modificable</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Duplicados</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Lista</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[1, 2, 3]</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Tupla</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>(1, 2, 3)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Diccionario</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>{"a": 1}</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí (por inserción)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sí</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Claves no</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><strong>Conjunto</strong></td>
                                <td style="padding:13px 12px;"><code>{1, 2, 3}</code></td>
                                <td style="padding:13px 12px;">No</td>
                                <td style="padding:13px 12px;">Sí</td>
                                <td style="padding:13px 12px;">No</td>
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
                    id: 't003-listas',
                    label: 'Listas',
                    steps: [
                        {
                            title: '¿Qué es una lista?',
                            content: `<p>Una lista es una colección <strong>ordenada y modificable</strong> de elementos. Se escribe entre corchetes y puede contener valores de cualquier tipo.</p>
<pre class="codigo">
notas = [85, 70, 92, 64]
nombres = ["Ana", "Luis", "María"]
mixta = ["Ana", 25, True, 1.75]
vacia = []
</pre>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/arreglo.png',
                            nextButton: 'Siguiente: Índices y rebanadas'
                        },
                        {
                            title: 'Índices y rebanadas',
                            content: `<p>Cada elemento ocupa una posición (índice) que inicia en <strong>0</strong>. Los índices negativos cuentan desde el final.</p>
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
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>notas</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">85</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">70</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">92</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">64</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><strong>Índice negativo</strong></td>
                                <td style="padding:13px 12px;">-4</td>
                                <td style="padding:13px 12px;">-3</td>
                                <td style="padding:13px 12px;">-2</td>
                                <td style="padding:13px 12px;">-1</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
<pre class="codigo">
print(notas[0])       # 85
print(notas[-1])      # 64
print(notas[1:3])     # [70, 92]  (del índice 1 al 2)
print(notas[:2])      # [85, 70]
print(notas[::-1])    # [64, 92, 70, 85] (invertida)
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            <code>notas[4]</code> produce <code>IndexError</code>: ese índice no existe.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/indices.png',
                            nextButton: 'Siguiente: Métodos de las listas'
                        },
                        {
                            title: 'Métodos de las listas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operación</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agregar al final</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>lista.append(80)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Añade un elemento al final.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Insertar</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>lista.insert(0, 99)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Inserta en una posición.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar por valor</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>lista.remove(70)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elimina la primera aparición.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar por posición</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>lista.pop(1)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Elimina y devuelve el elemento.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modificar</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>lista[0] = 100</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cambia el valor de una posición.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ordenar</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>lista.sort()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ordena la lista original.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Buscar posición</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>lista.index(92)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Devuelve el índice del valor.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Contar</td>
                                <td style="padding:13px 12px;"><code>lista.count(85)</code></td>
                                <td style="padding:13px 12px;">Cantidad de veces que aparece.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p><strong>Funciones útiles:</strong> <code>len(lista)</code>, <code>sum(lista)</code>, <code>max(lista)</code>, <code>min(lista)</code>, <code>sorted(lista)</code>.</p>
                            `,
                            nextButton: 'Siguiente: Recorrer una lista'
                        },
                        {
                            title: 'Recorrer una lista',
                            content: `<p><strong>Por elemento</strong> (cuando solo se necesita el valor):</p>
<pre class="codigo">
for nota in notas:
    print(nota)
</pre>
                            <p><strong>Con índice</strong> usando <code>enumerate()</code>:</p>
<pre class="codigo">
for i, nota in enumerate(notas):
    print(f"Posición {i}: {nota}")
</pre>
                            <p><strong>Ejemplo: llenar una lista y calcular el promedio</strong></p>
<pre class="codigo">
notas = []
for i in range(4):
    notas.append(float(input("Nota: ")))
print(f"Promedio: {sum(notas) / len(notas):.2f}")
print(f"Mayor: {max(notas)}")
</pre>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/recorrerArreglo.png',
                            nextButton: 'Siguiente: Listas anidadas'
                        },
                        {
                            title: 'Listas anidadas (matrices)',
                            content: `<p>Una lista puede contener otras listas. Así se representa una tabla de filas y columnas.</p>
<pre class="codigo">
# Notas de 3 estudiantes en 3 evaluaciones
notas = [
    [80, 75, 90],
    [65, 70, 60],
    [95, 88, 92]
]
print(notas[1][2])     # 60: fila 1, columna 2

for fila in notas:
    print(f"Promedio: {sum(fila) / len(fila):.2f}")
</pre>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/matriz.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't003-tuplas',
                    label: 'Tuplas',
                    steps: [
                        {
                            title: '¿Qué es una tupla?',
                            content: `<p>Una tupla es una colección <strong>ordenada e inmutable</strong>: una vez creada, sus elementos no se pueden agregar, eliminar ni modificar. Se escribe entre paréntesis.</p>
<pre class="codigo">
coordenada = (9.93, -84.08)
dias = ("lunes", "martes", "miércoles", "jueves", "viernes")
un_elemento = (5,)       # la coma es obligatoria
</pre>
                            <p>Se accede a sus elementos igual que en las listas:</p>
<pre class="codigo">
print(dias[0])           # lunes
print(len(dias))         # 5
print("sábado" in dias)  # False
</pre>
                            `,
                            image: IMG + 'tupla.png',
                            nextButton: 'Siguiente: Inmutabilidad'
                        },
                        {
                            title: 'Inmutabilidad',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Produce error</strong>
<pre class="codigo">
dias[0] = "domingo"      # TypeError
dias.append("sábado")    # AttributeError
</pre>
                            </div>
                            <p>Las tuplas solo tienen dos métodos: <code>count()</code> e <code>index()</code>.</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            La inmutabilidad es una protección: garantiza que datos que no deben cambiar (como los días de la semana o una coordenada) no se modifiquen por error.</p>
                            `,
                            nextButton: 'Siguiente: Desempaquetado'
                        },
                        {
                            title: 'Desempaquetado y usos',
                            content: `<p><strong>Desempaquetado</strong>: asignar cada elemento de la tupla a una variable.</p>
<pre class="codigo">
latitud, longitud = (9.93, -84.08)
print(latitud)    # 9.93
</pre>
                            <p><strong>Devolver varios valores desde una función:</strong></p>
<pre class="codigo">
def estadisticas(notas):
    return min(notas), max(notas), sum(notas) / len(notas)

menor, mayor, promedio = estadisticas([70, 85, 92])
</pre>
                            <p><strong>¿Cuándo usar una tupla?</strong></p>
                            <ul>
                                <li>Datos fijos que no deben cambiar.</li>
                                <li>Registros con estructura fija: <code>("Ana", 20, "ana@correo.com")</code>.</li>
                                <li>Como clave de un diccionario (las listas no pueden serlo).</li>
                            </ul>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't003-diccionarios',
                    label: 'Diccionarios',
                    steps: [
                        {
                            title: '¿Qué es un diccionario?',
                            content: `<p>Un diccionario almacena pares <strong>clave: valor</strong>. En lugar de acceder por posición, se accede por una clave descriptiva. Se escribe entre llaves.</p>
<pre class="codigo">
estudiante = {
    "carne": "2026-001",
    "nombre": "Ana Mora",
    "edad": 20,
    "activo": True
}
print(estudiante["nombre"])    # Ana Mora
</pre>
                            <ul>
                                <li>Las claves son <strong>únicas</strong> e inmutables (generalmente textos o números).</li>
                                <li>Los valores pueden ser de cualquier tipo, incluso listas u otros diccionarios.</li>
                            </ul>
                            `,
                            image: IMG + 'diccionario.png',
                            nextButton: 'Siguiente: Operaciones'
                        },
                        {
                            title: 'Operaciones con diccionarios',
                            content: `<pre class="codigo">
estudiante["correo"] = "ana@correo.com"   # agregar
estudiante["edad"] = 21                   # modificar
del estudiante["activo"]                  # eliminar
print("nombre" in estudiante)             # True (verifica la clave)
print(len(estudiante))                    # cantidad de pares
</pre>
                            <p><strong>Acceso seguro con get():</strong></p>
<pre class="codigo">
print(estudiante["telefono"])                    # KeyError
print(estudiante.get("telefono"))                # None
print(estudiante.get("telefono", "Sin dato"))    # Sin dato
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Use <code>get()</code> cuando no esté seguro de que la clave exista.</p>
                            `,
                            nextButton: 'Siguiente: Recorrer un diccionario'
                        },
                        {
                            title: 'Recorrer un diccionario',
                            content: `<pre class="codigo">
precios = {"café": 1500, "té": 1200, "jugo": 1800}

for producto in precios.keys():
    print(producto)

for precio in precios.values():
    print(precio)

for producto, precio in precios.items():
    print(f"{producto}: ₡{precio}")
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Devuelve</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>keys()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las claves</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>values()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Los valores</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>items()</code></td>
                                <td style="padding:13px 12px;">Los pares (clave, valor) como tuplas</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Lista de diccionarios'
                        },
                        {
                            title: 'Lista de diccionarios: registros',
                            content: `<p>Una lista de diccionarios es la forma más común de representar un conjunto de registros, como una tabla en la que cada diccionario es una fila.</p>
<pre class="codigo">
estudiantes = [
    {"carne": "001", "nombre": "Ana", "nota": 85},
    {"carne": "002", "nombre": "Luis", "nota": 62},
    {"carne": "003", "nombre": "María", "nota": 94}
]

for est in estudiantes:
    condicion = "Aprobado" if est["nota"] &gt;= 70 else "Reprobado"
    print(f"{est['nombre']}: {est['nota']} - {condicion}")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Esta estructura es la que se usará en el proyecto para cargar los datos de un archivo, manipularlos en memoria y volver a guardarlos.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't003-conjuntos',
                    label: 'Conjuntos (sets)',
                    steps: [
                        {
                            title: '¿Qué es un conjunto?',
                            content: `<p>Un conjunto es una colección <strong>sin orden y sin elementos repetidos</strong>. Se escribe entre llaves o se crea con <code>set()</code>.</p>
<pre class="codigo">
colores = {"rojo", "azul", "verde"}
vacio = set()            # {} crea un diccionario vacío, no un conjunto

numeros = [1, 2, 2, 3, 3, 3]
unicos = set(numeros)
print(unicos)            # {1, 2, 3}
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Como no tienen orden, los conjuntos <strong>no tienen índices</strong>: <code>colores[0]</code> produce un error.</p>
                            `,
                            image: IMG + 'conjunto.png',
                            nextButton: 'Siguiente: Operaciones de conjuntos'
                        },
                        {
                            title: 'Operaciones de conjuntos',
                            content: `<pre class="codigo">
python_ = {"Ana", "Luis", "María"}
java = {"Luis", "Pedro", "María"}
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operación</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operador</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Unión (en alguno)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>python_ | java</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ana, Luis, María, Pedro</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Intersección (en ambos)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>python_ &amp; java</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Luis, María</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diferencia (solo en el primero)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>python_ - java</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ana</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Diferencia simétrica (en uno solo)</td>
                                <td style="padding:13px 12px;"><code>python_ ^ java</code></td>
                                <td style="padding:13px 12px;">Ana, Pedro</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p>Métodos: <code>add()</code>, <code>remove()</code>, <code>discard()</code> (no da error si el elemento no existe).</p>
                            `,
                            nextButton: 'Siguiente: Aplicaciones'
                        },
                        {
                            title: 'Aplicaciones de los conjuntos',
                            content: `<ul>
                                <li><strong>Eliminar duplicados</strong> de una lista.</li>
                                <li><strong>Verificar pertenencia</strong> de forma muy rápida, aun con miles de elementos.</li>
                                <li><strong>Comparar grupos</strong>: elementos en común o diferentes.</li>
                            </ul>
<pre class="codigo">
correos = ["ana@x.com", "luis@x.com", "ana@x.com"]
print(f"Correos únicos: {len(set(correos))}")    # 2

matriculados = {"001", "002", "003", "004"}
asistieron = {"001", "003"}
ausentes = matriculados - asistieron
print(f"Ausentes: {ausentes}")                   # {'002', '004'}
</pre>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't003-comprension',
                    label: 'Manipulación y comprensión de listas',
                    steps: [
                        {
                            title: '¿Qué es una comprensión de listas?',
                            content: `<p>Es una forma compacta de <strong>crear una lista nueva a partir de otra secuencia</strong>, en una sola línea.</p>
                            <p><strong>Sintaxis:</strong> <code>[expresión for elemento in secuencia]</code></p>
                            <p><strong>Con un bucle for tradicional:</strong></p>
<pre class="codigo">
cuadrados = []
for n in range(1, 6):
    cuadrados.append(n ** 2)
</pre>
                            <p><strong>Con comprensión de listas:</strong></p>
<pre class="codigo">
cuadrados = [n ** 2 for n in range(1, 6)]
print(cuadrados)      # [1, 4, 9, 16, 25]
</pre>
                            `,
                            image: IMG + 'comprensionListas.png',
                            nextButton: 'Siguiente: Con condición'
                        },
                        {
                            title: 'Comprensión con condición',
                            content: `<p><strong>Filtrar</strong> elementos: <code>[expresión for elemento in secuencia if condición]</code></p>
<pre class="codigo">
notas = [85, 62, 94, 70, 55]
aprobadas = [n for n in notas if n &gt;= 70]
print(aprobadas)      # [85, 94, 70]
</pre>
                            <p><strong>Transformar</strong> según una condición (con <code>if-else</code> antes del <code>for</code>):</p>
<pre class="codigo">
condicion = ["A" if n &gt;= 70 else "R" for n in notas]
print(condicion)      # ['A', 'R', 'A', 'A', 'R']
</pre>
                            <p><strong>Con textos:</strong></p>
<pre class="codigo">
nombres = ["  ana ", "LUIS", "maría  "]
limpios = [n.strip().title() for n in nombres]
print(limpios)        # ['Ana', 'Luis', 'María']
</pre>
                            `,
                            nextButton: 'Siguiente: Comprensión de diccionarios y conjuntos'
                        },
                        {
                            title: 'Comprensión de diccionarios y conjuntos',
                            content: `<p>La misma idea funciona con diccionarios y conjuntos:</p>
<pre class="codigo">
# Diccionario: {clave: valor for ...}
productos = ["café", "té", "jugo"]
longitudes = {p: len(p) for p in productos}
print(longitudes)     # {'café': 4, 'té': 2, 'jugo': 4}

# Conjunto: {expresión for ...}
letras = {letra for letra in "programacion"}
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Claridad antes que brevedad: si una comprensión necesita varias condiciones o bucles anidados y se vuelve difícil de leer, es mejor usar un <code>for</code> tradicional.</p>
                            `,
                            nextButton: 'Siguiente: Otras herramientas'
                        },
                        {
                            title: 'Otras herramientas de manipulación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Herramienta</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>sorted()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>sorted([3, 1, 2], reverse=True)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[3, 2, 1]</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>zip()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>list(zip(["Ana", "Luis"], [85, 70]))</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>[('Ana', 85), ('Luis', 70)]</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>join()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>", ".join(["a", "b", "c"])</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"a, b, c"</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>sorted(..., key=)</code></td>
                                <td style="padding:13px 12px;"><code>sorted(estudiantes, key=lambda e: e["nota"])</code></td>
                                <td style="padding:13px 12px;">Ordena los registros por nota</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>lambda</code> crea una función pequeña sin nombre. En el ejemplo indica que el criterio de orden es el valor de la clave <code>"nota"</code>.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        // =====================================================================
        // TEMA 4. ALMACENAMIENTO
        // =====================================================================
        {
            id: 'tema_004',
            label: 'Almacenamiento',
            subtemas: [
                {
                    id: 't004-texto',
                    label: 'Archivos de texto',
                    steps: [
                        {
                            title: '¿Por qué almacenar en archivos?',
                            content: `<p>Las variables, listas y diccionarios viven en la <strong>memoria RAM</strong>: cuando el programa termina, los datos se pierden.</p>
                            <p>Para que la información <strong>persista</strong> entre ejecuciones, se guarda en un archivo en el disco. La próxima vez que el programa se ejecute, puede leer esos datos y continuar donde quedó.</p>
                            `,
                            image: IMG + 'almacenamiento.png',
                            nextButton: 'Siguiente: Abrir un archivo'
                        },
                        {
                            title: 'Abrir un archivo: open() y modos',
                            content: `<p>La función <code>open()</code> abre un archivo. Se recomienda usarla con <code>with</code>, que <strong>cierra el archivo automáticamente</strong> al terminar el bloque.</p>
<pre class="codigo">
with open("datos.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()
</pre>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Si el archivo no existe</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"r"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lectura (predeterminado)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Error <code>FileNotFoundError</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"w"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Escritura: <strong>borra</strong> el contenido anterior</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lo crea</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"a"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agregar al final</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lo crea</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>"x"</code></td>
                                <td style="padding:13px 12px;">Creación exclusiva</td>
                                <td style="padding:13px 12px;">Lo crea (da error si ya existe)</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>encoding="utf-8"</code> evita problemas con tildes y la letra ñ.</p>
                            `,
                            nextButton: 'Siguiente: Escribir'
                        },
                        {
                            title: 'Escribir en un archivo',
                            content: `<p><strong>Modo "w"</strong>: crea el archivo o reemplaza su contenido.</p>
<pre class="codigo">
with open("tareas.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Estudiar listas\\n")
    archivo.write("Hacer el laboratorio\\n")
</pre>
                            <p><strong>Modo "a"</strong>: agrega al final sin borrar lo anterior.</p>
<pre class="codigo">
tarea = input("Nueva tarea: ")
with open("tareas.txt", "a", encoding="utf-8") as archivo:
    archivo.write(tarea + "\\n")
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            <code>write()</code> no agrega el salto de línea automáticamente: hay que escribir <code>\\n</code> al final de cada línea.</p>
                            `,
                            nextButton: 'Siguiente: Leer'
                        },
                        {
                            title: 'Leer un archivo',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Devuelve</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>read()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todo el contenido como un solo texto.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>readline()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una línea cada vez que se llama.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>readlines()</code></td>
                                <td style="padding:13px 12px;">Una lista con todas las líneas.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p><strong>La forma más común</strong>: recorrer el archivo línea por línea.</p>
<pre class="codigo">
with open("tareas.txt", "r", encoding="utf-8") as archivo:
    for numero, linea in enumerate(archivo, start=1):
        print(f"{numero}. {linea.strip()}")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Cada línea leída incluye el <code>\\n</code> final; <code>strip()</code> lo elimina.</p>
                            `,
                            nextButton: 'Siguiente: Registros en texto'
                        },
                        {
                            title: 'Guardar registros en un archivo de texto',
                            content: `<p>Para guardar registros con varios campos, cada línea representa un registro y los campos se separan con un carácter (por ejemplo <code>|</code> o <code>;</code>).</p>
                            <p>Contenido de <code>estudiantes.txt</code>:</p>
<pre class="codigo">
001|Ana Mora|85
002|Luis Rojas|62
</pre>
                            <p><strong>Leer los registros a una lista de diccionarios:</strong></p>
<pre class="codigo">
estudiantes = []
with open("estudiantes.txt", "r", encoding="utf-8") as archivo:
    for linea in archivo:
        carne, nombre, nota = linea.strip().split("|")
        estudiantes.append({"carne": carne, "nombre": nombre, "nota": int(nota)})
</pre>
                            <p><strong>Guardar la lista de vuelta en el archivo:</strong></p>
<pre class="codigo">
with open("estudiantes.txt", "w", encoding="utf-8") as archivo:
    for est in estudiantes:
        archivo.write(f"{est['carne']}|{est['nombre']}|{est['nota']}\\n")
</pre>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't004-csv',
                    label: 'Archivos CSV',
                    steps: [
                        {
                            title: '¿Qué es un archivo CSV?',
                            content: `<p>CSV (<em>Comma-Separated Values</em>) es un formato de texto para guardar datos en forma de tabla: cada línea es una fila y los valores se separan con comas. La primera línea suele contener los nombres de las columnas.</p>
<pre class="codigo">
carne,nombre,nota
001,Ana Mora,85
002,Luis Rojas,62
003,María Solís,94
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Los archivos CSV se pueden abrir en Excel o Google Sheets, por lo que son ideales para intercambiar datos entre programas.</p>
                            `,
                            image: IMG + 'csv.png',
                            nextButton: 'Siguiente: Leer CSV'
                        },
                        {
                            title: 'Leer un CSV con el módulo csv',
                            content: `<p>Python incluye el módulo <code>csv</code>, que maneja correctamente los separadores, las comillas y los valores que contienen comas.</p>
                            <p><strong>Con csv.reader</strong>: cada fila es una lista.</p>
<pre class="codigo">
import csv

with open("estudiantes.csv", "r", encoding="utf-8", newline="") as archivo:
    lector = csv.reader(archivo)
    encabezado = next(lector)       # salta la primera línea
    for fila in lector:
        print(fila)                 # ['001', 'Ana Mora', '85']
</pre>
                            <p><strong>Con csv.DictReader</strong>: cada fila es un diccionario cuyas claves son los encabezados.</p>
<pre class="codigo">
with open("estudiantes.csv", "r", encoding="utf-8", newline="") as archivo:
    for fila in csv.DictReader(archivo):
        print(fila["nombre"], fila["nota"])
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Todos los valores se leen como texto: hay que convertir los números con <code>int()</code> o <code>float()</code>.</p>
                            `,
                            nextButton: 'Siguiente: Escribir CSV'
                        },
                        {
                            title: 'Escribir un CSV',
                            content: `<p><strong>Con csv.writer</strong>:</p>
<pre class="codigo">
import csv

with open("estudiantes.csv", "w", encoding="utf-8", newline="") as archivo:
    escritor = csv.writer(archivo)
    escritor.writerow(["carne", "nombre", "nota"])
    escritor.writerow(["001", "Ana Mora", 85])
</pre>
                            <p><strong>Con csv.DictWriter</strong> (a partir de una lista de diccionarios):</p>
<pre class="codigo">
campos = ["carne", "nombre", "nota"]
with open("estudiantes.csv", "w", encoding="utf-8", newline="") as archivo:
    escritor = csv.DictWriter(archivo, fieldnames=campos)
    escritor.writeheader()
    escritor.writerows(estudiantes)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>newline=""</code> evita que aparezcan líneas en blanco entre filas en Windows.</p>
                            `,
                            nextButton: 'Siguiente: Procesar datos'
                        },
                        {
                            title: 'Ejemplo: procesar datos de un CSV',
                            content: `<p>Leer el archivo, calcular estadísticas y generar un reporte con los aprobados.</p>
<pre class="codigo">
import csv

with open("estudiantes.csv", "r", encoding="utf-8", newline="") as archivo:
    estudiantes = list(csv.DictReader(archivo))

notas = [int(e["nota"]) for e in estudiantes]
print(f"Promedio del grupo: {sum(notas) / len(notas):.2f}")

aprobados = [e for e in estudiantes if int(e["nota"]) &gt;= 70]
with open("aprobados.csv", "w", encoding="utf-8", newline="") as archivo:
    escritor = csv.DictWriter(archivo, fieldnames=["carne", "nombre", "nota"])
    escritor.writeheader()
    escritor.writerows(aprobados)
</pre>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't004-directorios',
                    label: 'Gestión de archivos y directorios',
                    steps: [
                        {
                            title: 'Rutas de archivos',
                            content: `<p>Una ruta indica dónde se encuentra un archivo:</p>
                            <ul>
                                <li><strong>Ruta absoluta</strong>: desde la raíz del disco. <code>C:\\Usuarios\\Ana\\curso\\datos.txt</code></li>
                                <li><strong>Ruta relativa</strong>: desde la carpeta donde se ejecuta el programa. <code>datos/estudiantes.csv</code></li>
                            </ul>
                            <p>El módulo <code>pathlib</code> permite trabajar con rutas de forma independiente del sistema operativo:</p>
<pre class="codigo">
from pathlib import Path

carpeta = Path("datos")
ruta = carpeta / "estudiantes.csv"      # une las partes con el separador correcto
print(ruta.name)        # estudiantes.csv
print(ruta.suffix)      # .csv
print(Path.cwd())       # carpeta actual de trabajo
</pre>
                            `,
                            image: IMG + 'directorios.png',
                            nextButton: 'Siguiente: Verificar y crear'
                        },
                        {
                            title: 'Verificar y crear',
                            content: `<pre class="codigo">
from pathlib import Path

ruta = Path("datos/estudiantes.csv")

print(ruta.exists())        # ¿existe?
print(ruta.is_file())       # ¿es un archivo?
print(ruta.parent.is_dir()) # ¿la carpeta 'datos' es un directorio?

# Crear la carpeta si no existe (incluidas las intermedias)
Path("datos/respaldos").mkdir(parents=True, exist_ok=True)
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Verificar si el archivo existe antes de leerlo evita el error <code>FileNotFoundError</code> la primera vez que se ejecuta el programa.</p>
                            `,
                            nextButton: 'Siguiente: Listar, renombrar y eliminar'
                        },
                        {
                            title: 'Listar, renombrar, copiar y eliminar',
                            content: `<pre class="codigo">
from pathlib import Path
import shutil

carpeta = Path("datos")

# Listar todos los archivos .csv de la carpeta
for archivo in carpeta.glob("*.csv"):
    print(archivo.name)

# Renombrar
Path("datos/viejo.txt").rename("datos/nuevo.txt")

# Copiar (respaldo)
shutil.copy("datos/estudiantes.csv", "datos/respaldos/estudiantes.csv")

# Eliminar un archivo
Path("datos/temporal.txt").unlink(missing_ok=True)
</pre>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Los archivos eliminados con Python <strong>no van a la papelera</strong>: se borran definitivamente.</p>
                            `,
                            nextButton: 'Siguiente: Módulo os'
                        },
                        {
                            title: 'Equivalencias con el módulo os',
                            content: `<p>En código existente es común encontrar el módulo <code>os</code>, que hace lo mismo con funciones:</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tarea</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">pathlib</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">os</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Existe?</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ruta.exists()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.path.exists(ruta)</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Unir rutas</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>carpeta / "a.txt"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.path.join(carpeta, "a.txt")</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crear carpeta</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ruta.mkdir()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.mkdir(ruta)</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Listar contenido</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ruta.iterdir()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>os.listdir(ruta)</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Eliminar archivo</td>
                                <td style="padding:13px 12px;"><code>ruta.unlink()</code></td>
                                <td style="padding:13px 12px;"><code>os.remove(ruta)</code></td>
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
                    id: 't004-excepciones',
                    label: 'Manejo de excepciones',
                    steps: [
                        {
                            title: '¿Qué es una excepción?',
                            content: `<p>Una excepción es un error que ocurre <strong>durante la ejecución</strong>. Si no se maneja, el programa se detiene abruptamente y muestra un mensaje técnico al usuario.</p>
                            <p>Al trabajar con archivos y datos del usuario hay muchas situaciones fuera del control del programador: un archivo que no existe, una carpeta sin permisos, un texto donde se esperaba un número.</p>
                            <p>El manejo de excepciones permite <strong>anticipar esos errores</strong> y responder de forma controlada.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/bugs.png',
                            nextButton: 'Siguiente: try-except'
                        },
                        {
                            title: 'Estructura try-except',
                            content: `<pre class="codigo">
try:
    # código que puede fallar
except TipoDeError:
    # qué hacer si ocurre ese error
</pre>
                            <p><strong>Ejemplo:</strong></p>
<pre class="codigo">
try:
    edad = int(input("Edad: "))
    print(f"El próximo año tendrá {edad + 1}")
except ValueError:
    print("Debe ingresar un número entero")
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si el usuario escribe "veinte", en lugar de detenerse con un error técnico, el programa muestra un mensaje claro y continúa.</p>
                            `,
                            nextButton: 'Siguiente: Excepciones con archivos'
                        },
                        {
                            title: 'Excepciones comunes con archivos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Excepción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuándo ocurre</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>FileNotFoundError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se intenta leer un archivo que no existe.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>PermissionError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No hay permisos, o el archivo está abierto en otro programa (por ejemplo, en Excel).</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>IsADirectoryError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se intenta abrir una carpeta como si fuera un archivo.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>UnicodeDecodeError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El archivo tiene una codificación distinta a la indicada.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ValueError</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un dato del archivo no se puede convertir (por ejemplo, <code>int("abc")</code>) o una línea no tiene los campos esperados.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>OSError</code></td>
                                <td style="padding:13px 12px;">Error general del sistema de archivos (incluye a varios de los anteriores).</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Varias excepciones'
                        },
                        {
                            title: 'Varios except, else y finally',
                            content: `<pre class="codigo">
try:
    with open("estudiantes.txt", "r", encoding="utf-8") as archivo:
        lineas = archivo.readlines()
except FileNotFoundError:
    print("El archivo no existe. Se iniciará una lista vacía.")
    lineas = []
except PermissionError:
    print("No se tiene permiso para leer el archivo.")
    lineas = []
else:
    print(f"Se leyeron {len(lineas)} registros.")
finally:
    print("Proceso de carga finalizado.")
</pre>
                            <ul>
                                <li><code>except</code>: se ejecuta si ocurre ese tipo de error. Puede haber varios.</li>
                                <li><code>else</code>: se ejecuta solo si <strong>no</strong> ocurrió ningún error.</li>
                                <li><code>finally</code>: se ejecuta <strong>siempre</strong>, haya o no error.</li>
                            </ul>
                            `,
                            nextButton: 'Siguiente: Buenas prácticas'
                        },
                        {
                            title: 'Buenas prácticas',
                            content: `<div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #f0cccc; margin-bottom:12px;">
                            <i class="fa-solid fa-xmark" aria-hidden="true" style="color:#d2232a;"></i> <strong style="color:#d2232a;">Incorrecto</strong>
<pre class="codigo">
try:
    # ... 30 líneas de código ...
except:
    pass          # oculta cualquier error, incluso los propios
</pre>
                            </div>
                            <div style="padding:15px; background:#ffffff; border-radius:8px; border:1px solid #c9e2d4; margin-bottom:12px;">
                            <i class="fa-solid fa-check" aria-hidden="true" style="color:#00734a;"></i> <strong style="color:#00734a;">Correcto</strong>
<pre class="codigo">
try:
    nota = int(campos[2])
except ValueError as error:
    print(f"Línea con nota inválida: {error}")
</pre>
                            </div>
                            <ul>
                                <li>Capture excepciones <strong>específicas</strong>, no un <code>except</code> vacío.</li>
                                <li>Ponga dentro del <code>try</code> solo las líneas que pueden fallar.</li>
                                <li>Muestre mensajes claros para el usuario; nunca silencie un error con <code>pass</code> sin una razón.</li>
                                <li>Use <code>as error</code> para conocer el detalle del problema.</li>
                            </ul>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't004-proyecto',
                    label: 'Aplicación: CRUD en archivo',
                    steps: [
                        {
                            title: '¿Qué es un CRUD?',
                            content: `<p>CRUD son las cuatro operaciones básicas sobre datos almacenados, y son las que debe implementar el proyecto del curso:</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Letra</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Operación</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">En el proyecto</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>C</strong>reate</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Crear</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agregar un registro</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>R</strong>ead</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Leer</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Consultar registros</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>U</strong>pdate</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Actualizar</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modificar un registro</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><strong>D</strong>elete</td>
                                <td style="padding:13px 12px;">Eliminar</td>
                                <td style="padding:13px 12px;">Eliminar un registro</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p><strong>Estrategia:</strong> al iniciar, se cargan los datos del archivo a una lista de diccionarios; las operaciones trabajan sobre la lista; después de cada cambio, se guarda la lista en el archivo.</p>
                            `,
                            image: IMG + 'crud.png',
                            nextButton: 'Siguiente: Cargar y guardar'
                        },
                        {
                            title: 'Paso 1: cargar y guardar',
                            content: `<pre class="codigo">
import csv
from pathlib import Path

ARCHIVO = Path("contactos.csv")
CAMPOS = ["id", "nombre", "telefono"]

def cargar():
    if not ARCHIVO.exists():
        return []
    try:
        with open(ARCHIVO, "r", encoding="utf-8", newline="") as f:
            return list(csv.DictReader(f))
    except OSError as error:
        print(f"No se pudo leer el archivo: {error}")
        return []

def guardar(registros):
    try:
        with open(ARCHIVO, "w", encoding="utf-8", newline="") as f:
            escritor = csv.DictWriter(f, fieldnames=CAMPOS)
            escritor.writeheader()
            escritor.writerows(registros)
    except OSError as error:
        print(f"No se pudo guardar: {error}")
</pre>
                            `,
                            nextButton: 'Siguiente: Operaciones CRUD'
                        },
                        {
                            title: 'Paso 2: operaciones CRUD',
                            content: `<pre class="codigo">
def buscar(registros, id_buscado):
    for r in registros:
        if r["id"] == id_buscado:
            return r
    return None

def agregar(registros):
    id_nuevo = input("ID: ").strip()
    if buscar(registros, id_nuevo):
        print("Ya existe un registro con ese ID.")
        return
    nombre = input("Nombre: ").strip()
    telefono = input("Teléfono: ").strip()
    registros.append({"id": id_nuevo, "nombre": nombre, "telefono": telefono})
    guardar(registros)

def consultar(registros):
    if not registros:
        print("No hay registros.")
    for r in registros:
        print(f"{r['id']:&gt;4} | {r['nombre']:&lt;20} | {r['telefono']}")

def modificar(registros):
    r = buscar(registros, input("ID a modificar: ").strip())
    if r is None:
        print("No encontrado.")
        return
    r["nombre"] = input(f"Nombre [{r['nombre']}]: ") or r["nombre"]
    r["telefono"] = input(f"Teléfono [{r['telefono']}]: ") or r["telefono"]
    guardar(registros)

def eliminar(registros):
    r = buscar(registros, input("ID a eliminar: ").strip())
    if r is None:
        print("No encontrado.")
        return
    registros.remove(r)
    guardar(registros)
</pre>
                            `,
                            nextButton: 'Siguiente: Programa principal'
                        },
                        {
                            title: 'Paso 3: programa principal',
                            content: `<pre class="codigo">
def menu():
    registros = cargar()
    opcion = ""
    while opcion != "5":
        print("\\n--- Agenda de contactos ---")
        print("1. Agregar")
        print("2. Consultar")
        print("3. Modificar")
        print("4. Eliminar")
        print("5. Salir")
        opcion = input("Opción: ").strip()
        match opcion:
            case "1": agregar(registros)
            case "2": consultar(registros)
            case "3": modificar(registros)
            case "4": eliminar(registros)
            case "5": print("¡Hasta luego!")
            case _:   print("Opción no válida")

menu()
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Este ejemplo integra todos los temas del curso: tipos de datos, operadores, condicionales, bucles, funciones, listas, diccionarios, archivos CSV, rutas y excepciones.</p>
                            `,
                            nextButton: 'Siguiente: Lista de revisión'
                        },
                        {
                            title: 'Lista de revisión del proyecto',
                            content: `<ol>
                                <li>¿El programa funciona aunque el archivo no exista la primera vez?</li>
                                <li>¿Se pueden agregar, consultar, modificar y eliminar registros?</li>
                                <li>¿Los cambios se conservan al cerrar y volver a abrir el programa?</li>
                                <li>¿Se evita registrar dos veces el mismo identificador?</li>
                                <li>¿Se validan los datos de entrada (números, campos vacíos)?</li>
                                <li>¿Se manejan las excepciones con mensajes claros para el usuario?</li>
                                <li>¿El código está organizado en funciones con nombres descriptivos?</li>
                                <li>¿Se sigue la guía de estilo PEP 8?</li>
                                <li>¿Se probaron casos normales, límite e inválidos?</li>
                            </ol>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/refs/heads/main/SOFT-01(Python)/imgs/checklist.png',
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
