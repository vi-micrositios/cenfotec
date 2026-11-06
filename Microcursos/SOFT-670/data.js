const data = {
    // Pantalla de bienvenida
    welcome: {
        title: 'SOFT-670 <br> Python para el Análisis de Datos',
        image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/logo.png',
        description: 'Python es el lenguaje más utilizado para transformar datos en información útil para la toma de decisiones. El curso aborda la preparación del entorno de trabajo, la manipulación de datos con Pandas y NumPy, el análisis descriptivo y la visualización con Matplotlib, y los métodos avanzados de analítica, como los modelos predictivos con scikit-learn, Keras y TensorFlow.',
        instruction: 'Seleccione cada pestaña para acceder a la información'
    },
    // Temas, subtemas y pasos
    temas: [
        // =====================================================================
        // TEMA 1. PRIMEROS PASOS EN PYTHON
        // =====================================================================
        {
            id: 'tema_001',
            label: 'Primeros pasos en Python',
            subtemas: [
                {
                    id: 't1-entorno',
                    label: 'Entorno de desarrollo',
                    steps: [
                        {
                            title: '¿Qué se necesita para analizar datos con Python?',
                            content: `<p>Para trabajar en el curso se necesitan tres elementos:</p>
                            <ul>
                                <li><strong>Python</strong>: el lenguaje y su intérprete.</li>
                                <li><strong>Bibliotecas de análisis</strong>: paquetes que agregan funciones especializadas, como Pandas, NumPy, Matplotlib, scikit-learn y TensorFlow.</li>
                                <li><strong>Un entorno de desarrollo (IDE)</strong>: la herramienta donde se escribe y ejecuta el código.</li>
                            </ul>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Entorno</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventajas</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuándo usarlo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Google Colab</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No requiere instalación; trae las bibliotecas listas y ofrece GPU gratuita.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para empezar de inmediato y para los modelos de Machine Learning.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Jupyter Notebook / JupyterLab</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuadernos interactivos en la computadora propia.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Para trabajar sin conexión con archivos locales.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><strong>Visual Studio Code</strong></td>
                                <td style="padding:13px 12px;">Editor completo que abre cuadernos (.ipynb) y scripts (.py).</td>
                                <td style="padding:13px 12px;">Para proyectos más grandes y para combinar cuadernos con código.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/entornoDesarrollo.png',
                            nextButton: 'Siguiente: Opción 1: Google Colab'
                        },
                        {
                            title: 'Opción 1: Google Colab',
                            content: `<ol>
                                <li>Ingresar a <strong>colab.research.google.com</strong> con una cuenta de Google.</li>
                                <li>Seleccionar <em>Nuevo cuaderno</em>.</li>
                                <li>Escribir código en una celda y presionar <strong>Shift + Enter</strong> para ejecutarla.</li>
                                <li>Para usar un archivo de datos, abrir el panel <i class="fa-regular fa-folder" aria-hidden="true"></i> <em>Archivos</em> y subirlo, o montar Google Drive.</li>
                            </ol>
                            <p>Verificar las bibliotecas disponibles:</p>
                            
<pre class="codigo">
import pandas as pd
import numpy as np
import matplotlib
import tensorflow as tf

print("Pandas:", pd.__version__)
print("NumPy:", np.__version__)
print("Matplotlib:", matplotlib.__version__)
print("TensorFlow:", tf.__version__)
</pre>
                            
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Los archivos subidos al panel de Colab se borran al cerrar la sesión. Guarde los datos importantes en Google Drive.</p>
                            `,
                            nextButton: 'Siguiente: Opción 2: instalación local'
                        },
                        {
                            title: 'Opción 2: instalación local',
                            content: `<ol>
                                <li>Instalar Python 3 desde <strong>python.org</strong> (en Windows, marcar <em>Add python.exe to PATH</em>).</li>
                                <li>Instalar <strong>Visual Studio Code</strong> y las extensiones <strong>Python</strong> y <strong>Jupyter</strong> de Microsoft.</li>
                                <li>Crear una carpeta para el curso y, dentro de ella, un entorno virtual.</li>
                                <li>Activar el entorno e instalar las bibliotecas.</li>
                            </ol>
                            
<pre class="codigo">
# Crear y activar el entorno virtual
python -m venv .venv
.venv\\Scripts\\activate          # Windows
source .venv/bin/activate         # macOS / Linux

# Instalar las bibliotecas del curso
pip install pandas numpy matplotlib openpyxl scikit-learn statsmodels tensorflow jupyter
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Otra alternativa es <strong>Anaconda</strong>, que instala Python, Jupyter y las principales bibliotecas de datos en un solo paso.</p>
                            `,
                            nextButton: 'Siguiente: Trabajar con cuadernos Jupyter'
                        },
                        {
                            title: 'Trabajar con cuadernos Jupyter',
                            content: `<p>Un cuaderno (<code>.ipynb</code>) combina celdas de código, sus resultados y celdas de texto. Es el formato más usado en análisis de datos porque permite documentar el razonamiento junto con el código.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Celda de código</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Contiene Python. Se ejecuta con Shift + Enter y su resultado aparece debajo.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Celda de texto (Markdown)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Explicaciones, títulos y conclusiones del análisis.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Kernel</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El proceso que ejecuta el código y guarda las variables en memoria.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Reiniciar y ejecutar todo</td>
                                <td style="padding:13px 12px;">Borra la memoria y ejecuta las celdas en orden. Sirve para comprobar que el cuaderno funciona de principio a fin.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Las celdas pueden ejecutarse en cualquier orden, y eso causa errores difíciles de encontrar. Antes de entregar un cuaderno, use <em>Reiniciar y ejecutar todo</em>.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/jupyter.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't1-pandas-numpy',
                    label: 'Pandas y NumPy',
                    steps: [
                        {
                            title: '¿Qué son NumPy y Pandas?',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Biblioteca</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estructura principal</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>NumPy</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Arreglo (<code>ndarray</code>): valores del mismo tipo en una o más dimensiones.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cálculo numérico rápido y vectorizado.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><strong>Pandas</strong></td>
                                <td style="padding:13px 12px;"><code>Series</code> (una columna) y <code>DataFrame</code> (una tabla).</td>
                                <td style="padding:13px 12px;">Lectura, limpieza, transformación y análisis de datos tabulares.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p>Por convención se importan con estos alias:</p>
                            
<pre class="codigo">
import numpy as np
import pandas as pd
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Pandas está construido sobre NumPy: cada columna de un DataFrame se apoya en un arreglo.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/numpyPandas.png',
                            nextButton: 'Siguiente: Arreglos de NumPy'
                        },
                        {
                            title: 'Arreglos de NumPy',
                            content: `<p>Un arreglo permite operar sobre todos sus valores a la vez, sin escribir ciclos. A esto se le llama <strong>vectorización</strong>.</p>
                            
<pre class="codigo">
precios = np.array([1500, 2300, 980, 4100])

print(precios * 1.13)        # aplicar IVA a todos los precios
print(precios[precios &gt; 1000])  # filtrar: [1500 2300 4100]
print(precios.shape)         # (4,)

matriz = np.array([[1, 2, 3],
                   [4, 5, 6]])
print(matriz.shape)          # (2, 3): 2 filas, 3 columnas
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Con una lista de Python, <code>precios * 1.13</code> produce un error; con un arreglo, multiplica cada elemento.</p>
                            `,
                            nextButton: 'Siguiente: Funciones estadísticas de NumPy'
                        },
                        {
                            title: 'Funciones estadísticas de NumPy',
                            content: `
<pre class="codigo">
ventas = np.array([[120, 95, 130],
                   [80, 110, 105]])

print(ventas.sum())          # 640: total
print(ventas.mean())         # promedio general
print(ventas.sum(axis=0))    # [200 205 235]: total por columna
print(ventas.sum(axis=1))    # [345 295]: total por fila
print(ventas.std())          # desviación estándar

rng = np.random.default_rng(42)          # generador con semilla
simulados = rng.normal(loc=100, scale=15, size=5)
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Parámetro</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>axis=0</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Opera hacia abajo: un resultado por columna.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>axis=1</code></td>
                                <td style="padding:13px 12px;">Opera hacia la derecha: un resultado por fila.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            La <strong>semilla</strong> (<code>42</code>) hace que los números aleatorios sean los mismos cada vez que se ejecuta el código, lo que permite reproducir los resultados.</p>
                            `,
                            nextButton: 'Siguiente: Series de Pandas'
                        },
                        {
                            title: 'Series de Pandas',
                            content: `<p>Una <code>Series</code> es una columna de datos con un <strong>índice</strong> que identifica cada valor.</p>
                            
<pre class="codigo">
ventas = pd.Series([120, 95, 130], index=["enero", "febrero", "marzo"])

print(ventas["febrero"])     # 95
print(ventas.mean())         # 115.0
print(ventas[ventas &gt; 100])  # enero y marzo
</pre>
                            
                            `,
                            nextButton: 'Siguiente: DataFrames de Pandas'
                        },
                        {
                            title: 'DataFrames de Pandas',
                            content: `<p>Un <code>DataFrame</code> es una tabla: cada columna es una Series y todas comparten el mismo índice.</p>
                            
<pre class="codigo">
df = pd.DataFrame({
    "producto": ["Café", "Leche", "Arroz"],
    "precio": [3200, 950, 1450],
    "unidades": [10, 25, 18]
})

print(df.shape)      # (3, 3)
print(df.columns)    # nombres de las columnas
print(df.dtypes)     # tipo de dato de cada columna
df.head()            # primeras filas
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            En un cuaderno, la última expresión de una celda se muestra automáticamente como tabla; no hace falta <code>print()</code>.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/dataframe.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't1-importacion',
                    label: 'Importación y manipulación de datos',
                    steps: [
                        {
                            title: 'Fuentes de datos',
                            content: `<p>Pandas lee datos de muchos formatos con funciones que empiezan con <code>read_</code>:</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Formato</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">CSV</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>pd.read_csv()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>pd.read_csv("ventas.csv")</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Excel</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>pd.read_excel()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>pd.read_excel("ventas.xlsx", sheet_name="2025")</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">JSON</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>pd.read_json()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>pd.read_json("datos.json")</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Base de datos</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>pd.read_sql()</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>pd.read_sql("SELECT * FROM ventas", conexion)</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Página web (tablas)</td>
                                <td style="padding:13px 12px;"><code>pd.read_html()</code></td>
                                <td style="padding:13px 12px;"><code>pd.read_html(url)[0]</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/importarDatos.png',
                            nextButton: 'Siguiente: El conjunto de datos del curso'
                        },
                        {
                            title: 'El conjunto de datos del curso',
                            content: `<p>Los ejemplos usan <code>ventas.csv</code>, con las ventas de una cadena de minisúperes:</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Columna</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>fecha</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Fecha de la venta</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">2025-03-14</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>sucursal</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">San José, Heredia, Cartago o Alajuela</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Heredia</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>categoria</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bebidas, Snacks, Lácteos o Limpieza</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Lácteos</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>producto</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Nombre del producto</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Leche entera</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>unidades</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cantidad vendida</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">12</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>precio_unitario</code></td>
                                <td style="padding:13px 12px;">Precio en colones</td>
                                <td style="padding:13px 12px;">950</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            
<pre class="codigo">
df = pd.read_csv("ventas.csv", parse_dates=["fecha"])
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Parámetro</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Uso</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>sep=";"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuando las columnas se separan con punto y coma.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>decimal=","</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuando los decimales usan coma.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>encoding="latin-1"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cuando las tildes aparecen mal escritas.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>parse_dates=["fecha"]</code></td>
                                <td style="padding:13px 12px;">Convierte la columna a tipo fecha.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Explorar los datos'
                        },
                        {
                            title: 'Explorar los datos',
                            content: `<p>Lo primero después de cargar los datos es conocerlos:</p>
                            
<pre class="codigo">
df.head()        # primeras 5 filas
df.tail(3)       # últimas 3 filas
df.sample(5)     # 5 filas al azar
df.shape         # (filas, columnas)
df.info()        # columnas, tipos y valores no nulos
df.describe()    # resumen estadístico de las columnas numéricas
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>info()</code> revela problemas comunes: columnas numéricas leídas como texto, fechas sin convertir y valores faltantes.</p>
                            `,
                            nextButton: 'Siguiente: Primeras manipulaciones'
                        },
                        {
                            title: 'Primeras manipulaciones',
                            content: `
<pre class="codigo">
# Crear una columna calculada
df["total"] = df["unidades"] * df["precio_unitario"]

# Seleccionar columnas
df[["fecha", "producto", "total"]]

# Ordenar de mayor a menor
df.sort_values("total", ascending=False)

# Filtrar filas
df[df["sucursal"] == "Heredia"]

# Renombrar y eliminar columnas
df = df.rename(columns={"precio_unitario": "precio"})
df = df.drop(columns=["producto"])
</pre>
                            
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            La mayoría de los métodos de Pandas <strong>devuelven un DataFrame nuevo</strong> y no modifican el original. Para conservar el cambio, asigne el resultado: <code>df = df.rename(...)</code>.</p>
                            `,
                            nextButton: 'Siguiente: Exportar resultados'
                        },
                        {
                            title: 'Exportar resultados',
                            content: `
<pre class="codigo">
df.to_csv("ventas_limpias.csv", index=False)
df.to_excel("reporte.xlsx", sheet_name="Ventas", index=False)
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>index=False</code> evita que se guarde el índice como una columna adicional. Para exportar a Excel se requiere la biblioteca <code>openpyxl</code>.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't1-matplotlib',
                    label: 'Visualización con Matplotlib',
                    steps: [
                        {
                            title: 'Anatomía de un gráfico',
                            content: `<p>Matplotlib es la biblioteca base de visualización en Python. Un gráfico se compone de:</p>
                            <ul>
                                <li><strong>Figure</strong>: el lienzo completo.</li>
                                <li><strong>Axes</strong>: el área del gráfico, con sus ejes.</li>
                                <li><strong>Título, etiquetas de los ejes y leyenda</strong>: indican qué se está mostrando.</li>
                            </ul>
                            
<pre class="codigo">
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(8, 4))
ax.plot([1, 2, 3, 4], [10, 25, 18, 30])
ax.set_title("Título del gráfico")
ax.set_xlabel("Eje X")
ax.set_ylabel("Eje Y")
plt.show()
</pre>
                            
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/matplotlib.png',
                            nextButton: 'Siguiente: Gráfico de líneas: evolución en el tiempo'
                        },
                        {
                            title: 'Gráfico de líneas: evolución en el tiempo',
                            content: `
<pre class="codigo">
ventas_mes = df.groupby(df["fecha"].dt.month)["total"].sum()

fig, ax = plt.subplots(figsize=(8, 4))
ax.plot(ventas_mes.index, ventas_mes.values, marker="o")
ax.set_title("Ventas por mes")
ax.set_xlabel("Mes")
ax.set_ylabel("Total (₡)")
ax.grid(True, alpha=0.3)
plt.show()
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El gráfico de líneas es el indicado cuando el eje X tiene un orden natural, como el tiempo.</p>
                            `,
                            nextButton: 'Siguiente: Gráfico de barras: comparar categorías'
                        },
                        {
                            title: 'Gráfico de barras: comparar categorías',
                            content: `
<pre class="codigo">
por_sucursal = df.groupby("sucursal")["total"].sum().sort_values()

fig, ax = plt.subplots(figsize=(8, 4))
ax.barh(por_sucursal.index, por_sucursal.values, color="#2b93d1")
ax.set_title("Ventas totales por sucursal")
ax.set_xlabel("Total (₡)")
plt.show()
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Ordenar las barras facilita ver cuál categoría es mayor. Las barras horizontales funcionan mejor cuando los nombres son largos.</p>
                            `,
                            nextButton: 'Siguiente: Histograma y dispersión'
                        },
                        {
                            title: 'Histograma y dispersión',
                            content: `<p><strong>Histograma</strong>: muestra cómo se distribuyen los valores de una variable numérica.</p>
                            
<pre class="codigo">
fig, ax = plt.subplots()
ax.hist(df["total"], bins=20, edgecolor="white")
ax.set_title("Distribución del monto por venta")
plt.show()
</pre>
                            
                            <p><strong>Dispersión</strong>: muestra la relación entre dos variables numéricas.</p>
                            
<pre class="codigo">
fig, ax = plt.subplots()
ax.scatter(df["precio_unitario"], df["unidades"], alpha=0.5)
ax.set_xlabel("Precio unitario")
ax.set_ylabel("Unidades vendidas")
plt.show()
</pre>
                            
                            `,
                            nextButton: 'Siguiente: ¿Qué gráfico usar?'
                        },
                        {
                            title: '¿Qué gráfico usar?',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Gráfico</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Matplotlib</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cómo cambia en el tiempo?</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Líneas</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ax.plot()</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cuál categoría es mayor?</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Barras</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ax.bar()</code> / <code>ax.barh()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Cómo se distribuyen los valores?</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Histograma</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ax.hist()</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Se relacionan dos variables?</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dispersión</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ax.scatter()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">¿Cómo se compara la distribución entre grupos?</td>
                                <td style="padding:13px 12px;">Caja (boxplot)</td>
                                <td style="padding:13px 12px;"><code>ax.boxplot()</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Evite los gráficos circulares con muchas categorías y los efectos 3D: dificultan comparar los valores.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        // =====================================================================
        // TEMA 2. DATA FRAMES
        // =====================================================================
        {
            id: 'tema_002',
            label: 'Data Frames',
            subtemas: [
                {
                    id: 't2-primeros-analisis',
                    label: 'Primeros análisis con Pandas',
                    steps: [
                        {
                            title: 'Hacer preguntas a los datos',
                            content: `<p>Un análisis empieza con preguntas concretas. Por ejemplo:</p>
                            <ul>
                                <li>¿Cuántas ventas tiene cada sucursal?</li>
                                <li>¿Qué categoría genera más ingresos?</li>
                                <li>¿Cuál es el monto promedio por venta en cada sucursal?</li>
                            </ul>
                            
<pre class="codigo">
df["sucursal"].value_counts()     # cantidad de ventas por sucursal
df["categoria"].unique()          # valores distintos
df["producto"].nunique()          # cantidad de productos distintos
df["total"].sum()                 # ingresos totales
</pre>
                            
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/preguntasDatos.png',
                            nextButton: 'Siguiente: Agrupar y resumir: groupby'
                        },
                        {
                            title: 'Agrupar y resumir: groupby',
                            content: `<p><code>groupby()</code> divide los datos en grupos, aplica un cálculo a cada uno y combina los resultados.</p>
                            
<pre class="codigo">
# Ingresos por categoría
df.groupby("categoria")["total"].sum()

# Varias medidas a la vez
df.groupby("sucursal")["total"].agg(["sum", "mean", "count"])

# Agrupar por dos columnas
df.groupby(["sucursal", "categoria"])["unidades"].sum()

# Nombres propios para cada resumen
df.groupby("sucursal").agg(
    ingresos=("total", "sum"),
    ventas=("total", "count"),
    ticket_promedio=("total", "mean")
)
</pre>
                            
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/groupby.png',
                            nextButton: 'Siguiente: Tablas dinámicas'
                        },
                        {
                            title: 'Tablas dinámicas',
                            content: `<p><code>pivot_table()</code> funciona como las tablas dinámicas de Excel: un grupo en las filas, otro en las columnas y un cálculo en el centro.</p>
                            
<pre class="codigo">
pd.pivot_table(
    df,
    values="total",
    index="sucursal",
    columns="categoria",
    aggfunc="sum",
    fill_value=0
)
</pre>
                            
                            <p><code>crosstab()</code> cuenta cuántas veces aparece cada combinación:</p>
                            
<pre class="codigo">
pd.crosstab(df["sucursal"], df["categoria"])
</pre>
                            
                            `,
                            nextButton: 'Siguiente: Ejemplo guiado'
                        },
                        {
                            title: 'Ejemplo guiado',
                            content: `<p><strong>Pregunta:</strong> ¿cuáles son los 5 productos con más ingresos en Cartago?</p>
                            
<pre class="codigo">
top5 = (
    df[df["sucursal"] == "Cartago"]
    .groupby("producto")["total"]
    .sum()
    .sort_values(ascending=False)
    .head(5)
)
top5
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Encadenar métodos entre paréntesis, uno por línea, permite leer el análisis como una secuencia de pasos: filtrar, agrupar, sumar, ordenar y tomar los primeros.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't2-procesamiento',
                    label: 'Manejo y procesamiento de datos',
                    steps: [
                        {
                            title: 'Revisar la calidad de los datos',
                            content: `<p>Los datos reales casi nunca están listos para analizarse. Antes de calcular, revise:</p>
                            
<pre class="codigo">
df.isna().sum()            # valores faltantes por columna
df.duplicated().sum()      # filas duplicadas
df.dtypes                  # ¿cada columna tiene el tipo correcto?
df["sucursal"].unique()    # ¿hay valores mal escritos?
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Una regla práctica: el 80 % del trabajo de análisis de datos es preparación y limpieza.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/limpiezaDatos.png',
                            nextButton: 'Siguiente: Valores faltantes'
                        },
                        {
                            title: 'Valores faltantes',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuándo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar filas</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df.dropna(subset=["unidades"])</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pocas filas afectadas y el dato es indispensable.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rellenar con un valor fijo</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df["descuento"].fillna(0)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">La ausencia tiene un significado claro (sin descuento = 0).</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rellenar con la mediana</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df["unidades"].fillna(df["unidades"].median())</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variable numérica con pocos faltantes.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rellenar con la moda</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df["categoria"].fillna(df["categoria"].mode()[0])</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Variable categórica.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Rellenar con el valor anterior</td>
                                <td style="padding:13px 12px;"><code>df["precio"].ffill()</code></td>
                                <td style="padding:13px 12px;">Series temporales ordenadas.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Rellenar valores cambia los resultados. Documente qué estrategia usó y por qué.</p>
                            `,
                            nextButton: 'Siguiente: Duplicados y tipos de datos'
                        },
                        {
                            title: 'Duplicados y tipos de datos',
                            content: `
<pre class="codigo">
# Eliminar filas duplicadas
df = df.drop_duplicates()

# Convertir tipos
df["fecha"] = pd.to_datetime(df["fecha"], dayfirst=True)
df["unidades"] = pd.to_numeric(df["unidades"], errors="coerce")
df["sucursal"] = df["sucursal"].astype("category")
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Con <code>errors="coerce"</code>, los valores que no se pueden convertir quedan como faltantes (<code>NaN</code>) en lugar de producir un error. Después se tratan como cualquier faltante.</p>
                            `,
                            nextButton: 'Siguiente: Limpiar texto'
                        },
                        {
                            title: 'Limpiar texto',
                            content: `<p>Los textos con espacios, mayúsculas o variantes se cuentan como categorías distintas: "Heredia", " heredia" y "HEREDIA".</p>
                            
<pre class="codigo">
df["sucursal"] = df["sucursal"].str.strip().str.title()

df["sucursal"] = df["sucursal"].replace({
    "Sj": "San José",
    "San Jose": "San José"
})

df[df["producto"].str.contains("leche", case=False)]
</pre>
                            
                            `,
                            nextButton: 'Siguiente: Combinar tablas'
                        },
                        {
                            title: 'Combinar tablas',
                            content: `<p><code>concat()</code> une tablas con las mismas columnas (una debajo de otra). <code>merge()</code> une tablas por una columna en común.</p>
                            
<pre class="codigo">
ventas_2025 = pd.concat([ventas_enero, ventas_febrero], ignore_index=True)

# productos.csv: producto, proveedor, costo
completo = df.merge(productos, on="producto", how="left")
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">how=</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"inner"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Solo las filas que existen en ambas tablas.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"left"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Todas las filas de la tabla izquierda; si no hay coincidencia, quedan faltantes.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>"outer"</code></td>
                                <td style="padding:13px 12px;">Todas las filas de ambas tablas.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/combinarTablas.png',
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't2-seleccion',
                    label: 'Indexación y selección',
                    steps: [
                        {
                            title: 'Seleccionar columnas',
                            content: `
<pre class="codigo">
df["total"]                       # una columna: Series
df[["producto", "total"]]         # varias columnas: DataFrame
df.select_dtypes("number")        # solo columnas numéricas
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Un par de corchetes devuelve una Series; dos pares de corchetes (una lista) devuelven un DataFrame.</p>
                            `,
                            nextButton: 'Siguiente: loc e iloc'
                        },
                        {
                            title: 'loc e iloc',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Selector</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Selecciona por</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>loc</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Etiquetas</strong>: nombre del índice y de la columna.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df.loc[0:4, ["producto", "total"]]</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>iloc</code></td>
                                <td style="padding:13px 12px;"><strong>Posiciones</strong>: números de fila y columna, desde 0.</td>
                                <td style="padding:13px 12px;"><code>df.iloc[0:5, [3, 6]]</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            
<pre class="codigo">
df.loc[10, "total"]          # fila con índice 10, columna total
df.iloc[0]                   # primera fila
df.iloc[-1]                  # última fila
df.iloc[:, 0:3]              # todas las filas, primeras 3 columnas
</pre>
                            
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            En <code>loc</code> el rango <strong>incluye</strong> el final (<code>0:4</code> son 5 filas); en <code>iloc</code> <strong>no lo incluye</strong> (<code>0:5</code> son 5 filas).</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/locIloc.png',
                            nextButton: 'Siguiente: Filtros con condiciones'
                        },
                        {
                            title: 'Filtros con condiciones',
                            content: `
<pre class="codigo">
df[df["total"] &gt; 10000]

# Varias condiciones: &amp; (y), | (o), ~ (no). Cada condición entre paréntesis
df[(df["sucursal"] == "Heredia") &amp; (df["categoria"] == "Bebidas")]
df[(df["unidades"] &lt; 2) | (df["unidades"] &gt; 50)]

df[df["sucursal"].isin(["Heredia", "Alajuela"])]
df[df["precio_unitario"].between(1000, 2000)]
df[df["fecha"] &gt;= "2025-06-01"]

# La misma consulta escrita como texto
df.query("sucursal == 'Heredia' and total &gt; 10000")
</pre>
                            
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            En Pandas no se usan <code>and</code> ni <code>or</code> entre condiciones de columnas; se usan <code>&amp;</code> y <code>|</code>, con cada condición entre paréntesis.</p>
                            `,
                            nextButton: 'Siguiente: Trabajar con el índice'
                        },
                        {
                            title: 'Trabajar con el índice',
                            content: `
<pre class="codigo">
por_fecha = df.set_index("fecha")
por_fecha.loc["2025-03"]            # todas las filas de marzo de 2025
por_fecha.sort_index()

resumen = df.groupby("sucursal")["total"].sum()
resumen.reset_index()               # el índice vuelve a ser una columna
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Usar la fecha como índice simplifica los análisis de series temporales del Tema 4.</p>
                            `,
                            nextButton: 'Siguiente: Modificar valores seleccionados'
                        },
                        {
                            title: 'Modificar valores seleccionados',
                            content: `<p>Para cambiar valores que cumplen una condición, use <code>loc</code> con la condición y la columna en una sola instrucción:</p>
                            
<pre class="codigo">
df.loc[df["unidades"] &lt; 0, "unidades"] = 0
df.loc[df["total"] &gt; 50000, "tipo_venta"] = "Mayorista"
</pre>
                            
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            No encadene corchetes para asignar, como en <code>df[df["unidades"] &lt; 0]["unidades"] = 0</code>: el cambio se aplica sobre una copia y el DataFrame original no cambia. Si necesita trabajar con un subconjunto aparte, cree una copia explícita con <code>.copy()</code>.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't2-funciones',
                    label: 'Funciones y operaciones en columnas',
                    steps: [
                        {
                            title: 'Operaciones vectorizadas',
                            content: `<p>Las operaciones entre columnas se aplican a todas las filas a la vez, igual que con los arreglos de NumPy:</p>
                            
<pre class="codigo">
df["total"] = df["unidades"] * df["precio_unitario"]
df["total_iva"] = df["total"] * 1.13
df["participacion"] = df["total"] / df["total"].sum() * 100
df["precio_redondeado"] = df["precio_unitario"].round(-2)
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Las operaciones vectorizadas son mucho más rápidas que recorrer las filas con un ciclo <code>for</code>. Úselas siempre que sea posible.</p>
                            `,
                            nextButton: 'Siguiente: apply y map'
                        },
                        {
                            title: 'apply y map',
                            content: `<p><code>apply()</code> aplica una función a cada valor; <code>map()</code> reemplaza valores según un diccionario.</p>
                            
<pre class="codigo">
def clasificar(monto):
    if monto &gt;= 20000:
        return "Alta"
    elif monto &gt;= 5000:
        return "Media"
    return "Baja"

df["nivel"] = df["total"].apply(clasificar)

df["provincia_cod"] = df["sucursal"].map({
    "San José": 1, "Alajuela": 2, "Cartago": 3, "Heredia": 4
})

# Función que usa varias columnas de cada fila
df["etiqueta"] = df.apply(lambda fila: f"{fila['sucursal']}-{fila['categoria']}", axis=1)
</pre>
                            
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            <code>apply</code> con <code>axis=1</code> recorre fila por fila y es lento con muchos datos. Prefiera una operación vectorizada cuando exista.</p>
                            `,
                            nextButton: 'Siguiente: Condiciones vectorizadas'
                        },
                        {
                            title: 'Condiciones vectorizadas',
                            content: `
<pre class="codigo">
import numpy as np

# Dos opciones
df["meta"] = np.where(df["total"] &gt;= 10000, "Cumple", "No cumple")

# Varias opciones
condiciones = [df["total"] &gt;= 20000, df["total"] &gt;= 5000]
valores = ["Alta", "Media"]
df["nivel"] = np.select(condiciones, valores, default="Baja")
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>np.select</code> obtiene el mismo resultado que la función <code>clasificar</code> del paso anterior, pero de forma vectorizada.</p>
                            `,
                            nextButton: 'Siguiente: Operaciones con fechas'
                        },
                        {
                            title: 'Operaciones con fechas',
                            content: `<p>El accesor <code>.dt</code> extrae partes de una columna de fechas:</p>
                            
<pre class="codigo">
df["anio"] = df["fecha"].dt.year
df["mes"] = df["fecha"].dt.month
df["dia_semana"] = df["fecha"].dt.day_name()
df["trimestre"] = df["fecha"].dt.quarter

df.groupby("dia_semana")["total"].mean()
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Del mismo modo, el accesor <code>.str</code> aplica métodos de texto a toda una columna.</p>
                            `,
                            nextButton: 'Siguiente: Encadenar transformaciones con assign'
                        },
                        {
                            title: 'Encadenar transformaciones con assign',
                            content: `<p><code>assign()</code> crea columnas dentro de una cadena de métodos, lo que deja el proceso completo en un solo bloque legible:</p>
                            
<pre class="codigo">
resumen = (
    df
    .assign(
        total=lambda d: d["unidades"] * d["precio_unitario"],
        mes=lambda d: d["fecha"].dt.month
    )
    .query("sucursal != 'Alajuela'")
    .groupby("mes", as_index=False)["total"]
    .sum()
)
</pre>
                            
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/transformaciones.png',
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        // =====================================================================
        // TEMA 3. ANÁLISIS DESCRIPTIVO
        // =====================================================================
        {
            id: 'tema_003',
            label: 'Análisis descriptivo',
            subtemas: [
                {
                    id: 't3-estadistica',
                    label: 'Estadística descriptiva',
                    steps: [
                        {
                            title: 'Medidas de tendencia central',
                            content: `<p>Indican cuál es el valor típico o central de los datos.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medida</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pandas</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Suma de los valores entre la cantidad.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df["total"].mean()</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mediana</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valor del centro cuando los datos están ordenados.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df["total"].median()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Moda</td>
                                <td style="padding:13px 12px;">Valor más frecuente.</td>
                                <td style="padding:13px 12px;"><code>df["categoria"].mode()</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            La media es sensible a los valores extremos; la mediana no. Si unas pocas ventas son muy grandes, la media sube y la mediana representa mejor la venta típica.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/estadisticaDescriptiva.png',
                            nextButton: 'Siguiente: Medidas de dispersión'
                        },
                        {
                            title: 'Medidas de dispersión',
                            content: `<p>Indican qué tan separados están los datos entre sí.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Medida</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pandas</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rango</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Diferencia entre el máximo y el mínimo.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>s.max() - s.min()</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Varianza</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Promedio de las distancias al cuadrado respecto a la media.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>s.var()</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Desviación estándar</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Raíz de la varianza; está en las mismas unidades que los datos.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>s.std()</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Rango intercuartílico (IQR)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Distancia entre el percentil 25 y el 75: el 50 % central.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>s.quantile(0.75) - s.quantile(0.25)</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Coeficiente de variación</td>
                                <td style="padding:13px 12px;">Desviación estándar relativa a la media.</td>
                                <td style="padding:13px 12px;"><code>s.std() / s.mean()</code></td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Resumen con describe()'
                        },
                        {
                            title: 'Resumen con describe()',
                            content: `
<pre class="codigo">
df["total"].describe()

# Percentiles adicionales
df["total"].describe(percentiles=[0.1, 0.5, 0.9])

# Por grupo
df.groupby("sucursal")["total"].describe()

# Columnas de texto: cantidad, valores únicos, más frecuente
df[["sucursal", "categoria", "producto"]].describe()
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Fila de describe()</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">count</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valores no nulos</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">mean / std</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Media y desviación estándar</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">min / max</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mínimo y máximo</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">25% / 50% / 75%</td>
                                <td style="padding:13px 12px;">Cuartiles (50% = mediana)</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Forma de la distribución y correlación'
                        },
                        {
                            title: 'Forma de la distribución y correlación',
                            content: `
<pre class="codigo">
df["total"].skew()          # asimetría

df[["unidades", "precio_unitario", "total"]].corr()
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Valor</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Interpretación</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asimetría &gt; 0</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cola larga hacia la derecha: muchos valores bajos y pocos muy altos.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Asimetría ≈ 0</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Distribución simétrica.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Correlación cercana a 1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relación positiva fuerte: si una sube, la otra también.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Correlación cercana a -1</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Relación negativa fuerte: si una sube, la otra baja.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Correlación cercana a 0</td>
                                <td style="padding:13px 12px;">Sin relación lineal.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Correlación no implica causalidad: que dos variables se muevan juntas no demuestra que una cause la otra.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't3-categorizacion',
                    label: 'Categorización de datos',
                    steps: [
                        {
                            title: 'Variables categóricas y numéricas',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
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
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Numérica continua</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puede tomar cualquier valor en un rango.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Precio, temperatura</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Numérica discreta</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Valores enteros que se cuentan.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Unidades vendidas</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Categórica nominal</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grupos sin orden.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sucursal, categoría</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Categórica ordinal</td>
                                <td style="padding:13px 12px;">Grupos con un orden.</td>
                                <td style="padding:13px 12px;">Baja, Media, Alta</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            
<pre class="codigo">
df["sucursal"] = df["sucursal"].astype("category")
df["sucursal"].cat.categories
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El tipo <code>category</code> ocupa menos memoria y permite definir un orden para las categorías ordinales.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/categorizacion.png',
                            nextButton: 'Siguiente: Crear intervalos con cut'
                        },
                        {
                            title: 'Crear intervalos con cut',
                            content: `<p><code>pd.cut()</code> convierte una variable numérica en categorías, según límites definidos por el analista.</p>
                            
<pre class="codigo">
df["rango_monto"] = pd.cut(
    df["total"],
    bins=[0, 5000, 20000, float("inf")],
    labels=["Baja", "Media", "Alta"]
)

df["rango_monto"].value_counts()
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Los intervalos incluyen el límite derecho: una venta de exactamente 5000 queda en "Baja".</p>
                            `,
                            nextButton: 'Siguiente: Crear grupos del mismo tamaño con qcut'
                        },
                        {
                            title: 'Crear grupos del mismo tamaño con qcut',
                            content: `<p><code>pd.qcut()</code> divide los datos según cuantiles, de modo que cada grupo tenga aproximadamente la misma cantidad de filas.</p>
                            
<pre class="codigo">
df["cuartil"] = pd.qcut(df["total"], q=4, labels=["Q1", "Q2", "Q3", "Q4"])
df.groupby("cuartil", observed=True)["total"].agg(["min", "max", "count"])
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Función</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Los límites los define</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Resultado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>cut</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El analista</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Grupos con significado de negocio; pueden tener tamaños distintos.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>qcut</code></td>
                                <td style="padding:13px 12px;">La distribución de los datos</td>
                                <td style="padding:13px 12px;">Grupos del mismo tamaño.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Tablas de frecuencias'
                        },
                        {
                            title: 'Tablas de frecuencias',
                            content: `
<pre class="codigo">
# Frecuencia absoluta y relativa
df["categoria"].value_counts()
df["categoria"].value_counts(normalize=True) * 100

# Frecuencias cruzadas en porcentaje por fila
pd.crosstab(df["sucursal"], df["rango_monto"], normalize="index") * 100
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>normalize="index"</code> hace que cada fila sume 100 %. Así se compara la composición de cada sucursal aunque tengan cantidades de ventas distintas.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't3-graficos',
                    label: 'Gráficos de resumen',
                    steps: [
                        {
                            title: 'Graficar desde Pandas',
                            content: `<p>Los objetos de Pandas tienen el método <code>.plot()</code>, que usa Matplotlib por debajo y simplifica los gráficos de resumen:</p>
                            
<pre class="codigo">
df.groupby("categoria")["total"].sum().plot(kind="bar", title="Ingresos por categoría")

pd.pivot_table(df, values="total", index="sucursal",
               columns="categoria", aggfunc="sum").plot(kind="bar", stacked=True)
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">kind=</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Gráfico</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"line"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Líneas</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"bar"</code> / <code>"barh"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Barras</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"hist"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Histograma</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"box"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Caja</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>"scatter"</code></td>
                                <td style="padding:13px 12px;">Dispersión</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/graficosResumen.png',
                            nextButton: 'Siguiente: Diagrama de caja (boxplot)'
                        },
                        {
                            title: 'Diagrama de caja (boxplot)',
                            content: `<p>Resume una distribución en cinco valores: mínimo, Q1, mediana, Q3 y máximo. Los puntos fuera de los bigotes son posibles atípicos.</p>
                            
<pre class="codigo">
df.boxplot(column="total", by="sucursal", grid=False)
plt.title("Monto por venta según sucursal")
plt.suptitle("")
plt.show()
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El boxplot es ideal para comparar la distribución de una variable entre varios grupos en un solo gráfico.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/boxplot.png',
                            nextButton: 'Siguiente: Mapa de calor de correlaciones'
                        },
                        {
                            title: 'Mapa de calor de correlaciones',
                            content: `
<pre class="codigo">
corr = df[["unidades", "precio_unitario", "total"]].corr()

fig, ax = plt.subplots()
im = ax.imshow(corr, cmap="coolwarm", vmin=-1, vmax=1)
ax.set_xticks(range(len(corr)), corr.columns, rotation=45)
ax.set_yticks(range(len(corr)), corr.columns)
for i in range(len(corr)):
    for j in range(len(corr)):
        ax.text(j, i, f"{corr.iloc[i, j]:.2f}", ha="center", va="center")
fig.colorbar(im)
plt.show()
</pre>
                            
                            `,
                            nextButton: 'Siguiente: Varios gráficos en una figura'
                        },
                        {
                            title: 'Varios gráficos en una figura',
                            content: `
<pre class="codigo">
fig, axes = plt.subplots(1, 3, figsize=(15, 4))

df["total"].plot(kind="hist", bins=20, ax=axes[0], title="Distribución")
df.groupby("sucursal")["total"].sum().plot(kind="bar", ax=axes[1], title="Por sucursal")
df.groupby(df["fecha"].dt.month)["total"].sum().plot(ax=axes[2], title="Por mes")

plt.tight_layout()
plt.savefig("resumen.png", dpi=150)
plt.show()
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>tight_layout()</code> evita que los títulos se superpongan y <code>savefig()</code> guarda la figura para usarla en un informe.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't3-atipicos',
                    label: 'Valores atípicos',
                    steps: [
                        {
                            title: '¿Qué es un valor atípico?',
                            content: `<p>Es un valor muy alejado del resto de los datos. Puede tener dos orígenes:</p>
                            <ul>
                                <li><strong>Error</strong>: un dato mal digitado, una unidad de medida equivocada o una falla del sistema (por ejemplo, 1500 unidades en lugar de 15).</li>
                                <li><strong>Valor real pero extraordinario</strong>: una compra mayorista o una venta en una fecha especial.</li>
                            </ul>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Antes de eliminar un atípico, investigue su origen. Un valor extraordinario real puede ser el hallazgo más importante del análisis.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/valoresAtipicos.png',
                            nextButton: 'Siguiente: Detección con el rango intercuartílico'
                        },
                        {
                            title: 'Detección con el rango intercuartílico',
                            content: `<p>Se consideran atípicos los valores que están a más de 1,5 veces el IQR por debajo de Q1 o por encima de Q3. Es la misma regla que usa el boxplot.</p>
                            
<pre class="codigo">
q1 = df["total"].quantile(0.25)
q3 = df["total"].quantile(0.75)
iqr = q3 - q1

limite_inferior = q1 - 1.5 * iqr
limite_superior = q3 + 1.5 * iqr

atipicos = df[(df["total"] &lt; limite_inferior) | (df["total"] &gt; limite_superior)]
print("Atípicos:", len(atipicos))
</pre>
                            
                            `,
                            nextButton: 'Siguiente: Detección con puntaje Z'
                        },
                        {
                            title: 'Detección con puntaje Z',
                            content: `<p>El puntaje Z indica a cuántas desviaciones estándar está un valor de la media. Suele usarse el umbral |Z| &gt; 3.</p>
                            
<pre class="codigo">
z = (df["total"] - df["total"].mean()) / df["total"].std()
atipicos_z = df[z.abs() &gt; 3]
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Método</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ventaja</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Limitación</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">IQR</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">No depende de que los datos sean simétricos.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Puede marcar muchos valores en distribuciones con cola larga.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Puntaje Z</td>
                                <td style="padding:13px 12px;">Fácil de interpretar.</td>
                                <td style="padding:13px 12px;">Supone una distribución aproximadamente normal; los propios atípicos alteran la media.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Tratamiento de los atípicos'
                        },
                        {
                            title: 'Tratamiento de los atípicos',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Estrategia</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Código</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cuándo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Corregir</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df.loc[df["id"] == 512, "unidades"] = 15</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se conoce el valor correcto.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Eliminar</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df = df[df["total"] &lt;= limite_superior]</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Es un error y no se puede corregir.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recortar (winsorizar)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>df["total"].clip(limite_inferior, limite_superior)</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Se quiere limitar su efecto sin perder filas.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Transformar</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>np.log1p(df["total"])</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Distribuciones con cola larga hacia la derecha.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Analizar por separado</td>
                                <td style="padding:13px 12px;"><code>df["es_atipico"] = ...</code></td>
                                <td style="padding:13px 12px;">Son valores reales con un comportamiento distinto.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Compare los resultados del análisis con y sin el tratamiento, y documente la decisión tomada.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        },
        // =====================================================================
        // TEMA 4. ANALÍTICA AVANZADA
        // =====================================================================
        {
            id: 'tema_004',
            label: 'Analítica avanzada',
            subtemas: [
                {
                    id: 't4-ml',
                    label: 'Machine Learning con Keras y TensorFlow',
                    steps: [
                        {
                            title: '¿Qué es Machine Learning?',
                            content: `<p>Es una rama de la inteligencia artificial en la que un programa <strong>aprende patrones a partir de datos</strong>, en lugar de seguir reglas escritas por una persona.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Tipo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Supervisado</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprende de ejemplos que incluyen la respuesta correcta.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Predecir las ventas del próximo mes; detectar clientes que abandonarán.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>No supervisado</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Busca grupos o estructuras en datos sin respuesta.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Segmentar clientes por su comportamiento de compra.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><strong>Por refuerzo</strong></td>
                                <td style="padding:13px 12px;">Aprende por prueba y error a partir de recompensas.</td>
                                <td style="padding:13px 12px;">Robots, juegos, sistemas de recomendación.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/machineLearning.png',
                            nextButton: 'Siguiente: Flujo de trabajo de un proyecto'
                        },
                        {
                            title: 'Flujo de trabajo de un proyecto',
                            content: `<ol>
                                <li><strong>Definir el problema</strong>: qué se quiere predecir y cómo se medirá el éxito.</li>
                                <li><strong>Preparar los datos</strong>: limpieza, atípicos, codificación de categorías y escalado (Temas 2 y 3).</li>
                                <li><strong>Separar los datos</strong> en entrenamiento y prueba.</li>
                                <li><strong>Entrenar</strong> uno o varios modelos con los datos de entrenamiento.</li>
                                <li><strong>Evaluar</strong> con los datos de prueba, que el modelo nunca vio.</li>
                                <li><strong>Optimizar</strong> y, cuando el modelo sea confiable, usarlo para predecir.</li>
                            </ol>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Nunca evalúe un modelo con los mismos datos con los que aprendió: el resultado sería engañosamente bueno.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/flujoML.png',
                            nextButton: 'Siguiente: TensorFlow, Keras y las redes neuronales'
                        },
                        {
                            title: 'TensorFlow, Keras y las redes neuronales',
                            content: `<ul>
                                <li><strong>TensorFlow</strong>: biblioteca de Google para cálculo numérico y aprendizaje profundo.</li>
                                <li><strong>Keras</strong>: interfaz de alto nivel incluida en TensorFlow que permite construir redes neuronales con pocas líneas de código.</li>
                            </ul>
                            <p>Una <strong>red neuronal</strong> está formada por capas de neuronas. Cada neurona combina sus entradas con unos <strong>pesos</strong> y aplica una <strong>función de activación</strong>. Durante el entrenamiento, la red ajusta los pesos para reducir el error.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Concepto</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capa de entrada</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Recibe las variables (columnas) de los datos.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capas ocultas</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Aprenden combinaciones de las variables.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Capa de salida</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Produce la predicción.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Época (epoch)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una pasada completa por todos los datos de entrenamiento.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Función de pérdida (loss)</td>
                                <td style="padding:13px 12px;">Mide el error que el entrenamiento trata de reducir.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/redNeuronal.png',
                            nextButton: 'Siguiente: Primer modelo con Keras'
                        },
                        {
                            title: 'Primer modelo con Keras',
                            content: `<p>Regresión: predecir el monto de una venta a partir de variables numéricas.</p>
                            
<pre class="codigo">
from tensorflow import keras
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

X = df[["unidades", "precio_unitario", "mes"]]
y = df["total"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

escalador = StandardScaler()
X_train = escalador.fit_transform(X_train)
X_test = escalador.transform(X_test)

modelo = keras.Sequential([
    keras.layers.Input(shape=(X_train.shape[1],)),
    keras.layers.Dense(32, activation="relu"),
    keras.layers.Dense(16, activation="relu"),
    keras.layers.Dense(1)                      # salida: un número
])

modelo.compile(optimizer="adam", loss="mse", metrics=["mae"])
historial = modelo.fit(X_train, y_train, epochs=100, validation_split=0.2, verbose=0)

modelo.evaluate(X_test, y_test)
predicciones = modelo.predict(X_test)
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            El escalador se ajusta (<code>fit</code>) solo con los datos de entrenamiento y después se aplica a los de prueba. Así el modelo no recibe información de los datos de prueba.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't4-supervisado',
                    label: 'Modelado supervisado',
                    steps: [
                        {
                            title: 'Regresión y clasificación',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;"></th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Regresión</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Clasificación</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Predice</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Un número</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Una categoría</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejemplo</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Monto de ventas del próximo mes</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Si un cliente abandonará (sí o no)</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Algoritmos</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Regresión lineal, árboles, redes neuronales</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Regresión logística, árboles, bosques aleatorios, redes neuronales</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Métricas</td>
                                <td style="padding:13px 12px;">MAE, RMSE, R²</td>
                                <td style="padding:13px 12px;">Exactitud, precisión, sensibilidad, F1</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/regresionClasificacion.png',
                            nextButton: 'Siguiente: Preparar los datos para un modelo'
                        },
                        {
                            title: 'Preparar los datos para un modelo',
                            content: `<p>Los ejemplos de clasificación usan <code>clientes.csv</code>: edad, meses como cliente, compras por mes, gasto promedio, reclamos, provincia y la columna <code>abandono</code> (1 = abandonó, 0 = continúa).</p>
                            
<pre class="codigo">
clientes = pd.read_csv("clientes.csv")

# Convertir categorías en columnas numéricas (0 y 1)
clientes = pd.get_dummies(clientes, columns=["provincia"], drop_first=True, dtype=int)

X = clientes.drop(columns=["abandono"])     # variables predictoras
y = clientes["abandono"]                    # variable objetivo

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>stratify=y</code> mantiene la misma proporción de clientes que abandonan en los datos de entrenamiento y de prueba.</p>
                            `,
                            nextButton: 'Siguiente: Regresión lineal con scikit-learn'
                        },
                        {
                            title: 'Regresión lineal con scikit-learn',
                            content: `<p>scikit-learn ofrece modelos clásicos con una misma forma de uso: crear, entrenar con <code>fit</code> y predecir con <code>predict</code>.</p>
                            
<pre class="codigo">
from sklearn.linear_model import LinearRegression

X = df[["unidades", "precio_unitario"]]
y = df["total"]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

modelo = LinearRegression()
modelo.fit(X_train, y_train)

print("Coeficientes:", modelo.coef_)
print("R² en prueba:", modelo.score(X_test, y_test))
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Conviene empezar siempre con un modelo sencillo como referencia. Un modelo más complejo solo vale la pena si mejora claramente ese resultado.</p>
                            `,
                            nextButton: 'Siguiente: Clasificación con scikit-learn'
                        },
                        {
                            title: 'Clasificación con scikit-learn',
                            content: `
<pre class="codigo">
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier

# La regresión logística necesita los datos escalados
logistica = make_pipeline(StandardScaler(), LogisticRegression())
logistica.fit(X_train, y_train)

bosque = RandomForestClassifier(n_estimators=200, random_state=42)
bosque.fit(X_train, y_train)

print("Logística:", logistica.score(X_test, y_test))
print("Bosque aleatorio:", bosque.score(X_test, y_test))

# Qué variables pesan más en el bosque
pd.Series(bosque.feature_importances_, index=X.columns).sort_values(ascending=False)
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>make_pipeline</code> une el escalado y el modelo en un solo objeto, de modo que el escalador se ajusta solo con los datos de entrenamiento. Los árboles y bosques aleatorios no necesitan datos escalados.</p>
                            `,
                            nextButton: 'Siguiente: Clasificación con Keras'
                        },
                        {
                            title: 'Clasificación con Keras',
                            content: `
<pre class="codigo">
escalador = StandardScaler()
X_train_e = escalador.fit_transform(X_train)
X_test_e = escalador.transform(X_test)

red = keras.Sequential([
    keras.layers.Input(shape=(X_train_e.shape[1],)),
    keras.layers.Dense(16, activation="relu"),
    keras.layers.Dense(8, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid")   # probabilidad entre 0 y 1
])

red.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
red.fit(X_train_e, y_train, epochs=50, batch_size=32, validation_split=0.2, verbose=0)

probabilidades = red.predict(X_test_e).ravel()
predicciones = (probabilidades &gt;= 0.5).astype(int)
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Problema</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Activación de salida</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pérdida</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Regresión</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ninguna (lineal)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"mse"</code></td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Clasificación binaria</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"sigmoid"</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>"binary_crossentropy"</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Clasificación con varias clases</td>
                                <td style="padding:13px 12px;"><code>"softmax"</code></td>
                                <td style="padding:13px 12px;"><code>"sparse_categorical_crossentropy"</code></td>
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
                    id: 't4-series',
                    label: 'Series temporales',
                    steps: [
                        {
                            title: '¿Qué es una serie temporal?',
                            content: `<p>Es una secuencia de observaciones ordenadas en el tiempo, como las ventas diarias o mensuales. Se analiza en tres componentes:</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Componente</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Descripción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Ejemplo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Tendencia</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Dirección general a largo plazo.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Las ventas crecen año con año.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Estacionalidad</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Patrón que se repite en periodos fijos.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Más ventas en diciembre y los fines de semana.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Ruido</td>
                                <td style="padding:13px 12px;">Variación aleatoria que no sigue un patrón.</td>
                                <td style="padding:13px 12px;">Un día lluvioso con pocas ventas.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/seriesTemporales.png',
                            nextButton: 'Siguiente: Preparar la serie: resample y rolling'
                        },
                        {
                            title: 'Preparar la serie: resample y rolling',
                            content: `
<pre class="codigo">
serie = df.set_index("fecha")["total"].sort_index()

diaria = serie.resample("D").sum()      # total por día
mensual = serie.resample("ME").sum()    # total por mes (fin de mes)

# Promedio móvil de 7 días: suaviza el ruido y deja ver la tendencia
movil = diaria.rolling(window=7).mean()

ax = diaria.plot(alpha=0.4, label="Diaria", figsize=(10, 4))
movil.plot(ax=ax, label="Promedio móvil 7 días")
ax.legend()
plt.show()
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            En versiones anteriores a Pandas 2.2, el alias mensual es <code>"M"</code> en lugar de <code>"ME"</code>.</p>
                            `,
                            nextButton: 'Siguiente: Descomposición de la serie'
                        },
                        {
                            title: 'Descomposición de la serie',
                            content: `
<pre class="codigo">
from statsmodels.tsa.seasonal import seasonal_decompose

resultado = seasonal_decompose(diaria, model="additive", period=7)
resultado.plot()
plt.show()
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            <code>period=7</code> indica un patrón semanal en datos diarios. Para datos mensuales con un patrón anual se usa <code>period=12</code>. Se necesitan al menos dos periodos completos de datos.</p>
                            `,
                            nextButton: 'Siguiente: Modelo predictivo con rezagos'
                        },
                        {
                            title: 'Modelo predictivo con rezagos',
                            content: `<p>Para predecir con un modelo supervisado, se crean variables con los valores de días anteriores (<strong>rezagos</strong>) y del calendario:</p>
                            
<pre class="codigo">
datos = diaria.to_frame(name="ventas")
datos["lag_1"] = datos["ventas"].shift(1)        # ventas de ayer
datos["lag_7"] = datos["ventas"].shift(7)        # ventas de hace una semana
datos["media_7"] = datos["ventas"].shift(1).rolling(7).mean()
datos["dia_semana"] = datos.index.dayofweek
datos = datos.dropna()

# Separación temporal: entrenar con el pasado y probar con lo más reciente
corte = int(len(datos) * 0.8)
entrenamiento, prueba = datos.iloc[:corte], datos.iloc[corte:]

X_cols = ["lag_1", "lag_7", "media_7", "dia_semana"]
modelo = LinearRegression()
modelo.fit(entrenamiento[X_cols], entrenamiento["ventas"])
prueba = prueba.assign(prediccion=modelo.predict(prueba[X_cols]))

prueba[["ventas", "prediccion"]].plot(figsize=(10, 4))
plt.show()
</pre>
                            
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            En series temporales <strong>no se mezclan los datos al azar</strong> para separarlos: el modelo debe entrenarse con el pasado y evaluarse con el futuro, como ocurrirá en la realidad.</p>
                            `,
                            nextButton: 'Siguiente: Otros modelos para series temporales'
                        },
                        {
                            title: 'Otros modelos para series temporales',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Modelo</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Biblioteca</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Características</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Promedio móvil o valor de la semana anterior</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Pandas</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Referencia mínima que cualquier modelo debe superar.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Regresión con rezagos</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">scikit-learn</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sencillo e interpretable; permite agregar variables del calendario.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">ARIMA / SARIMA</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">statsmodels</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Modelos estadísticos clásicos para tendencia y estacionalidad.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Redes recurrentes (LSTM)</td>
                                <td style="padding:13px 12px;">Keras</td>
                                <td style="padding:13px 12px;">Capturan patrones complejos; requieren muchos datos.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Compare siempre un modelo con una referencia simple, por ejemplo "las ventas de mañana serán iguales a las del mismo día de la semana anterior".</p>
                            `,
                            nextButton: ''
                        }
                    ]
                },
                {
                    id: 't4-evaluacion',
                    label: 'Evaluación y optimización',
                    steps: [
                        {
                            title: 'Métricas de regresión',
                            content: `
<pre class="codigo">
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

mae = mean_absolute_error(y_test, predicciones)
rmse = np.sqrt(mean_squared_error(y_test, predicciones))
r2 = r2_score(y_test, predicciones)
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Significado</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Mejor valor</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">MAE</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Error absoluto promedio, en las unidades de los datos (₡).</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cercano a 0</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">RMSE</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Similar al MAE, pero castiga más los errores grandes.</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Cercano a 0</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">R²</td>
                                <td style="padding:13px 12px;">Proporción de la variación que el modelo explica.</td>
                                <td style="padding:13px 12px;">Cercano a 1</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Métricas de clasificación'
                        },
                        {
                            title: 'Métricas de clasificación',
                            content: `
<pre class="codigo">
from sklearn.metrics import confusion_matrix, classification_report

print(confusion_matrix(y_test, predicciones))
print(classification_report(y_test, predicciones))
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Métrica</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Pregunta que responde</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Exactitud (accuracy)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">¿Qué porcentaje de todas las predicciones fue correcto?</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Precisión (precision)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">De los clientes que el modelo marcó como "abandona", ¿cuántos realmente abandonaron?</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Sensibilidad (recall)</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">De los clientes que realmente abandonaron, ¿cuántos detectó el modelo?</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">F1</td>
                                <td style="padding:13px 12px;">Equilibrio entre precisión y sensibilidad.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Si solo el 5 % de los clientes abandona, un modelo que siempre responde "no abandona" tiene 95 % de exactitud y no sirve para nada. En datos desbalanceados, revise la sensibilidad y el F1.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/matrizConfusion.png',
                            nextButton: 'Siguiente: Sobreajuste y subajuste'
                        },
                        {
                            title: 'Sobreajuste y subajuste',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Situación</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Error en entrenamiento</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Error en prueba</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Qué hacer</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Subajuste</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Alto</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Usar un modelo más complejo o mejores variables.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Buen ajuste</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Bajo y parecido</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Mantener el modelo.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;">Sobreajuste</td>
                                <td style="padding:13px 12px;">Muy bajo</td>
                                <td style="padding:13px 12px;">Alto</td>
                                <td style="padding:13px 12px;">Simplificar el modelo, conseguir más datos o regularizar.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p>En Keras, la curva de entrenamiento muestra cuándo empieza el sobreajuste: la pérdida de validación deja de bajar y empieza a subir.</p>
                            
<pre class="codigo">
plt.plot(historial.history["loss"], label="Entrenamiento")
plt.plot(historial.history["val_loss"], label="Validación")
plt.xlabel("Época")
plt.legend()
plt.show()
</pre>
                            
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/sobreajuste.png',
                            nextButton: 'Siguiente: Técnicas para mejorar una red neuronal'
                        },
                        {
                            title: 'Técnicas para mejorar una red neuronal',
                            content: `
<pre class="codigo">
parada = keras.callbacks.EarlyStopping(
    monitor="val_loss", patience=10, restore_best_weights=True
)

red = keras.Sequential([
    keras.layers.Input(shape=(X_train_e.shape[1],)),
    keras.layers.Dense(32, activation="relu"),
    keras.layers.Dropout(0.3),                     # apaga el 30 % de las neuronas al azar
    keras.layers.Dense(16, activation="relu"),
    keras.layers.Dense(1, activation="sigmoid")
])
red.compile(optimizer="adam", loss="binary_crossentropy", metrics=["accuracy"])
red.fit(X_train_e, y_train, epochs=300, validation_split=0.2,
        callbacks=[parada], verbose=0)
</pre>
                            
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Técnica</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Efecto</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>EarlyStopping</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Detiene el entrenamiento cuando la validación deja de mejorar.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Dropout</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Evita que la red dependa demasiado de unas pocas neuronas.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Menos capas o neuronas</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Reduce la capacidad de memorizar los datos.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Tasa de aprendizaje</td>
                                <td style="padding:13px 12px;"><code>keras.optimizers.Adam(learning_rate=0.001)</code> controla el tamaño de cada ajuste.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            nextButton: 'Siguiente: Validación cruzada y búsqueda de hiperparámetros'
                        },
                        {
                            title: 'Validación cruzada y búsqueda de hiperparámetros',
                            content: `<p>Los <strong>hiperparámetros</strong> son configuraciones del modelo que no se aprenden de los datos, como la cantidad de árboles. La <strong>validación cruzada</strong> evalúa cada combinación en varias divisiones de los datos.</p>
                            
<pre class="codigo">
from sklearn.model_selection import GridSearchCV, cross_val_score

puntajes = cross_val_score(bosque, X_train, y_train, cv=5, scoring="f1")
print("F1 promedio:", puntajes.mean())

parametros = {
    "n_estimators": [100, 300],
    "max_depth": [3, 5, None],
    "min_samples_leaf": [1, 5]
}
busqueda = GridSearchCV(RandomForestClassifier(random_state=42),
                        parametros, cv=5, scoring="f1")
busqueda.fit(X_train, y_train)

print(busqueda.best_params_)
mejor_modelo = busqueda.best_estimator_
print("F1 en prueba:", busqueda.score(X_test, y_test))
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            La búsqueda usa solo los datos de entrenamiento. Los datos de prueba se reservan para la evaluación final del mejor modelo.</p>
                            `,
                            nextButton: 'Siguiente: Lista de verificación de un modelo'
                        },
                        {
                            title: 'Lista de verificación de un modelo',
                            content: `<ol>
                                <li>¿El problema y la métrica de éxito están definidos?</li>
                                <li>¿Los datos se limpiaron y se revisaron los atípicos?</li>
                                <li>¿Se separaron entrenamiento y prueba antes de escalar o ajustar el modelo?</li>
                                <li>¿En series temporales, la separación respeta el orden del tiempo?</li>
                                <li>¿Se comparó el modelo contra una referencia simple?</li>
                                <li>¿Se usó la métrica adecuada, considerando si los datos están desbalanceados?</li>
                                <li>¿Se revisó el sobreajuste comparando entrenamiento y prueba?</li>
                                <li>¿Los resultados se pueden explicar a las personas que tomarán decisiones?</li>
                            </ol>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Un modelo útil no es el más complejo, sino el que resuelve el problema con un error aceptable y se puede explicar.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/checklist.png',
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};
