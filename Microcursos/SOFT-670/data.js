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
                            content: `<p>En el curso se trabaja con <strong>Python instalado en la computadora</strong> y con <strong>Visual Studio Code</strong> como entorno de desarrollo. Todo el código se escribe en <strong>scripts</strong>, es decir, archivos con extensión <code>.py</code>.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Elemento</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Para qué sirve</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Python 3</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El lenguaje y su intérprete, que ejecuta el código.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Visual Studio Code</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">El editor donde se escriben y ejecutan los scripts.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Extensión Python</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Agrega a Visual Studio Code la ejecución de Python, la detección de errores y la selección del entorno.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><strong>Entorno virtual</strong></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Carpeta del proyecto con su propia copia de Python y de las bibliotecas.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><strong>Bibliotecas de análisis</strong></td>
                                <td style="padding:13px 12px;">Pandas, NumPy, Matplotlib, scikit-learn, statsmodels y TensorFlow.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/entornoDesarrollo.png',
                            nextButton: 'Siguiente: Instalar Python y Visual Studio Code'
                        },
                        {
                            title: 'Instalar Python y Visual Studio Code',
                            content: `<ol>
                                <li>Descargar Python 3 desde <strong>python.org/downloads</strong> y ejecutar el instalador.</li>
                                <li>En Windows, marcar la casilla <strong>"Add python.exe to PATH"</strong> antes de presionar <em>Install Now</em>.</li>
                                <li>Descargar Visual Studio Code desde <strong>code.visualstudio.com</strong> e instalarlo.</li>
                                <li>En Visual Studio Code, abrir el panel de <strong>Extensiones</strong> (Ctrl + Shift + X) e instalar la extensión <strong>Python</strong> de Microsoft.</li>
                                <li>Abrir una terminal y verificar la instalación de Python:</li>
                            </ol>
                            
<pre class="codigo">
python --version
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            En macOS y Linux el comando suele ser <code>python3 --version</code>.</p>
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            TensorFlow se publica solo para algunas versiones de Python. Antes de instalar Python, revise en <strong>tensorflow.org/install</strong> cuáles versiones son compatibles, para evitar errores al instalar las bibliotecas del curso.</p>
                            `,
                            nextButton: 'Siguiente: Crear el proyecto e instalar las bibliotecas'
                        },
                        {
                            title: 'Crear el proyecto e instalar las bibliotecas',
                            content: `<ol>
                                <li>Crear una carpeta para el curso, por ejemplo <code>SOFT-670</code>, y dentro de ella una carpeta <code>datos</code> con los archivos de datos de la clase.</li>
                                <li>En Visual Studio Code, abrir la carpeta del curso con <em>Archivo → Abrir carpeta</em>.</li>
                                <li>Abrir la terminal integrada con <em>Terminal → Nueva terminal</em>.</li>
                                <li>Crear y activar el entorno virtual, e instalar las bibliotecas:</li>
                            </ol>
                            
<pre class="codigo">
# Crear el entorno virtual
python -m venv .venv

# Activarlo
.venv\\Scripts\\activate            # Windows
source .venv/bin/activate         # macOS / Linux

# Instalar las bibliotecas del curso
pip install pandas numpy matplotlib openpyxl scikit-learn statsmodels tensorflow
</pre>
                            
                            <ol>
                                <li>Presionar <strong>Ctrl + Shift + P</strong>, escribir <em>Python: Select Interpreter</em> y elegir el intérprete de <code>.venv</code>.</li>
                            </ol>
                            <p>Al final, la carpeta del curso queda así:</p>
                            
<pre class="codigo">
SOFT-670/
├── .venv/                          entorno virtual (lo crea Python)
├── datos/
│   ├── datosSucursales.csv
│   ├── datosSucursalesConNulos.csv
│   ├── ordenesRestauranteX.csv
│   ├── Teen_Mental_Health_Dataset.csv
│   ├── celsius_a_fahrenheit.csv
│   └── ventasDiarias.csv
├── tema1_primeros_pasos.py
├── tema2_dataframes.py
├── tema3_analisis_descriptivo.py
└── tema4_analitica_avanzada.py
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Si la terminal de Windows no permite activar el entorno por la política de ejecución, ejecute primero <code>Set-ExecutionPolicy -Scope CurrentUser RemoteSigned</code> en PowerShell.</p>
                            `,
                            nextButton: 'Siguiente: Ejecutar scripts en Visual Studio Code'
                        },
                        {
                            title: 'Ejecutar scripts en Visual Studio Code',
                            content: `<div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Acción</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Cómo</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecutar el script completo</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Botón <i class="fa-solid fa-play" aria-hidden="true"></i> <em>Run Python File</em>, en la esquina superior derecha del editor.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Ejecutar desde la terminal</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>python tema1_primeros_pasos.py</code></td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Comentar o descomentar líneas</td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Seleccionar las líneas y presionar <strong>Ctrl + /</strong> (en algunos teclados en español, <strong>Ctrl + }</strong>).</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;">Detener un script</td>
                                <td style="padding:13px 12px;"><strong>Ctrl + C</strong> en la terminal.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <ul>
                                <li>Los resultados se ven en la terminal solo si se usa <code>print()</code>.</li>
                                <li><code>plt.show()</code> abre el gráfico en una ventana aparte, y el script se detiene hasta que se cierre esa ventana.</li>
                                <li>Si hay un error, la terminal indica el archivo, el número de línea y el tipo de error.</li>
                            </ul>
                            <p>Los talleres ubican los archivos de datos a partir de la carpeta del script, de modo que funcionan sin importar desde dónde se ejecuten:</p>
                            
<pre class="codigo">
from pathlib import Path

DATOS = Path(__file__).parent / "datos"
df = pd.read_csv(DATOS / "datosSucursales.csv")
</pre>
                            
                            <p class="nota">
                            <i class="fa-solid fa-triangle-exclamation" style="color: #d2232a;" aria-hidden="true"></i>
                            Evite rutas escritas a mano con barras invertidas, como <code>"Talleres\\celsius.csv"</code>: en Python la barra invertida tiene un significado especial y la ruta solo funciona en Windows.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/vscode.png',
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
print(df.head())            # primeras filas
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            En un script <code>.py</code>, los resultados solo aparecen en la terminal si se usa <code>print()</code>.</p>
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
                            nextButton: 'Siguiente: El conjunto de datos de los ejemplos'
                        },
                        {
                            title: 'El conjunto de datos de los ejemplos',
                            content: `<p>Los ejemplos de los subtemas usan <code>ventas.csv</code>, con las ventas de una cadena de minisúperes. Los talleres de cada tema usan los archivos de datos de la clase, que se describen en el subtema <strong>Taller</strong>.</p>
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
print(df.head())        # primeras 5 filas
print(df.tail(3))       # últimas 3 filas
print(df.sample(5))     # 5 filas al azar
print(df.shape)         # (filas, columnas)
df.info()        # columnas, tipos y valores no nulos
print(df.describe())    # resumen estadístico de las columnas numéricas
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
print(df[["fecha", "producto", "total"]])

# Ordenar de mayor a menor
print(df.sort_values("total", ascending=False))

# Filtrar filas
print(df[df["sucursal"] == "Heredia"])

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
                },
                {
                    id: 't1-taller',
                    label: 'Taller del tema 1',
                    steps: [
                        {
                            title: 'Preparar el taller',
                            content: `<p>El taller es una guía paso a paso de lo que se hace en clase. Se trabaja en el archivo <code>tema1_primeros_pasos.py</code>, dentro de la carpeta del curso.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Archivo de datos</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>datosSucursales.csv</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Salarios por departamento de una empresa (Gerencia, Desarrollo, Talento humano, Contabilidad, Diseño y Aseo).</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>ordenesRestauranteX.csv</code></td>
                                <td style="padding:13px 12px;">Encuesta de pedidos de un restaurante: fecha, género, país, edad, comida, bebida y postre.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p>Los archivos de datos van en la carpeta <code>datos</code>, junto al script. El taller empieza con las bibliotecas y la ruta de esa carpeta:</p>
                            
<pre class="codigo">
from pathlib import Path
import sys

import numpy as np
import pandas as pd
import matplotlib
import matplotlib.pyplot as plt

# Carpeta de los datos, ubicada junto a este archivo .py
DATOS = Path(__file__).parent / "datos"
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Ejecute el script con el botón <em>Run Python File</em>. Si todavía no se ha visto un paso, coméntelo para que no se ejecute.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/taller.png',
                            nextButton: 'Siguiente: Paso 1. Verificar la instalación'
                        },
                        {
                            title: 'Paso 1. Verificar la instalación',
                            content: `<p>Antes de empezar, se comprueba que Python y las bibliotecas del curso están instaladas en el entorno virtual. Si alguna importación falla, revise que el intérprete seleccionado en Visual Studio Code sea el de .venv.</p>
                            
<pre class="codigo">
print("Python:", sys.version.split()[0])
print("NumPy:", np.__version__)
print("Pandas:", pd.__version__)
print("Matplotlib:", matplotlib.__version__)
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 2. Arreglos de NumPy'
                        },
                        {
                            title: 'Paso 2. Arreglos de NumPy',
                            content: `<p>Un arreglo guarda datos del mismo tipo. Si se mezclan tipos, NumPy convierte todos los valores al tipo más general (por ejemplo, a texto). Los arreglos pueden tener una, dos o más dimensiones.</p>
                            
<pre class="codigo">
arregloUnaDimension = np.array([1, 2, 3, 4, 56])
print("Arreglo de 1 dimensión:", arregloUnaDimension)

arregloMixto = np.array([1, "2", 3.7, "4a", 56])
print("Arreglo con tipos mezclados (todo se convierte a texto):", arregloMixto)

arregloDecimales = np.array([1, 2.5, 3, 4, 56])
print("Arreglo de decimales:", arregloDecimales)

arregloDosDimensiones = np.array([[-1, 2, 3], [4, 56, 0], [-12, -321, 5], [2, 1000, 6]])
print("Arreglo de 2 dimensiones:\\n", arregloDosDimensiones)
print("Forma (filas, columnas):", arregloDosDimensiones.shape)

arregloTresDimensiones = np.array([[[2.4, -2.0], [1.7, 100.5]],
                                   [[80.6, -15.1], [1.9, 3.2]],
                                   [[-963.5, 2], [2, 6]]])
print("Arreglo de 3 dimensiones:\\n", arregloTresDimensiones)
print("Forma:", arregloTresDimensiones.shape)

# Acceso a los elementos: los índices empiezan en 0
print("Elemento en el índice 4:", arregloUnaDimension[4])
print("Fila en el índice 1:", arregloDosDimensiones[1])
print("Elemento en la fila 1, columna 0:", arregloDosDimensiones[1, 0])
print("Elemento en la fila 3, columna 1:", arregloDosDimensiones[3, 1])
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 1. Acceso a elementos de un arreglo de 3 dimensiones'
                        },
                        {
                            title: 'Ejercicio 1. Acceso a elementos de un arreglo de 3 dimensiones',
                            content: `<p>Con el arreglo arregloTresDimensiones del paso anterior:</p>
                            <ul>
                                <li>a) Acceda al elemento -963.5.</li>
                                <li>b) Acceda al elemento [2, 6].</li>
                                <li>c) Acceda al bloque [[80.6, -15.1], [1.9, 3.2]].</li>
                            </ul>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
                            `,
                            nextButton: 'Siguiente: Paso 3. Operaciones con arreglos'
                        },
                        {
                            title: 'Paso 3. Operaciones con arreglos',
                            content: `<p>Las operaciones se aplican elemento por elemento, sin escribir ciclos. Las funciones como min, max y sum pueden calcularse sobre todo el arreglo, por columna (axis=0) o por fila (axis=1).</p>
                            
<pre class="codigo">
a = np.array([[1, 2, 3], [4, 5, 6]])
b = np.array([[1, 1, 1], [2, 2, 2]])

print("a + b =\\n", a + b)
print("a / b =\\n", a / b)
print("a ** b =\\n", a ** b)
print("a * 10 =\\n", a * 10)

print("Mínimo de a:", a.min())
print("Máximo de a:", a.max())
print("Suma por columna:", a.sum(axis=0))
print("Suma por fila:", a.sum(axis=1))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 4. Leer un archivo con NumPy'
                        },
                        {
                            title: 'Paso 4. Leer un archivo con NumPy',
                            content: `<p>np.loadtxt lee un archivo de texto con números. skiprows=1 omite la fila de encabezados y usecols permite elegir solo algunas columnas. Las columnas de datosSucursales.csv son: Gerencia, Desarrollo, Talento humano, Contabilidad, Diseño y Aseo.</p>
                            
<pre class="codigo">
salarios = np.loadtxt(DATOS / "datosSucursales.csv", delimiter=",", skiprows=1)
print("Forma (filas, columnas):", salarios.shape)
print("Salario máximo de toda la tabla:", salarios.max())
print("Salario mínimo de toda la tabla:", salarios.min())

# Solo Gerencia (0), Talento humano (2) y Diseño (4)
salariosSeleccion = np.loadtxt(DATOS / "datosSucursales.csv", delimiter=",",
                               skiprows=1, usecols=(0, 2, 4))
print("Primeras 5 filas de Gerencia, Talento humano y Diseño:\\n", salariosSeleccion[:5])
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 2. Salario máximo de cada departamento'
                        },
                        {
                            title: 'Ejercicio 2. Salario máximo de cada departamento',
                            content: `<p>Con el arreglo salarios, obtenga el salario máximo y el promedio de cada departamento (de cada columna).</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
                            `,
                            nextButton: 'Siguiente: Paso 5. Series de Pandas'
                        },
                        {
                            title: 'Paso 5. Series de Pandas',
                            content: `<p>Una Series es una columna de datos con un índice. Se puede crear a partir de una lista (índice numérico) o de un diccionario (las claves son el índice).</p>
                            
<pre class="codigo">
serieConceptos = pd.Series(["Ciclos", "Condicionales", "Listas", "Diccionarios"])
print("Serie a partir de una lista:\\n", serieConceptos)
print("Elemento en la posición 1:", serieConceptos[1])

serieNotas = pd.Series({"Ciclos": 85, "Condicionales": 100, "Listas": 95,
                        "Diccionarios": 97, "Tuplas": 70})
print("Serie a partir de un diccionario:\\n", serieNotas)
print("Nota de Listas:", serieNotas["Listas"])

# Operaciones y orden
print("Notas + 5:\\n", serieNotas + 5)
print("Nota máxima:", serieNotas.max(), "en", serieNotas.idxmax())
print("Notas ordenadas de mayor a menor:\\n", serieNotas.sort_values(ascending=False))

# Filtrar
print("Notas menores a 90:\\n", serieNotas[serieNotas &lt; 90])

# Con texto, * repite el texto y los valores se ordenan alfabéticamente
serieTexto = pd.Series(["a", "s", "d", "A", "@"])
print("Texto * 3:\\n", serieTexto * 3)
print("Texto ordenado:\\n", serieTexto.sort_values())
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 3. Ventas por producto'
                        },
                        {
                            title: 'Ejercicio 3. Ventas por producto',
                            content: `<p>A partir de la serie ventas, muestre:</p>
                            <ul>
                                <li>a) El producto con la venta mayor y su valor.</li>
                                <li>b) El producto con la venta menor y su valor.</li>
                                <li>c) Los productos con ventas mayores a 500 unidades.</li>
                            </ul>
                            <p>Código de partida:</p>
<pre class="codigo">
ventas = pd.Series({"Producto A": 450, "Producto B": 780, "Producto C": 120,
                    "Producto D": 560, "Producto E": 300})
</pre>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
                            `,
                            nextButton: 'Siguiente: Paso 6. Crear un DataFrame'
                        },
                        {
                            title: 'Paso 6. Crear un DataFrame',
                            content: `<p>Un DataFrame es una tabla. Se puede crear a partir de un diccionario: cada clave es el nombre de una columna y cada lista, sus valores.</p>
                            
<pre class="codigo">
datosEstudiantes = {
    "nombre": ["Natalia", "Sebastián", "José Antonio"],
    "edad": [20, 21, 22],
    "correo": ["natalia@test.com", "sebastian@test.com", "jose_antonio@test.com"]
}
dfEstudiantes = pd.DataFrame(datosEstudiantes)
print(dfEstudiantes)
print("Forma:", dfEstudiantes.shape)
print("Columnas:", list(dfEstudiantes.columns))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 7. Leer un archivo CSV con Pandas'
                        },
                        {
                            title: 'Paso 7. Leer un archivo CSV con Pandas',
                            content: `<p>En datosSucursales.csv, después de cada coma hay un espacio. Sin skipinitialspace=True, las columnas se llamarían " Desarrollo", " Aseo", etc., con un espacio al inicio.</p>
                            
<pre class="codigo">
dfSucursales = pd.read_csv(DATOS / "datosSucursales.csv", skipinitialspace=True)

print("Columnas:", list(dfSucursales.columns))
print("Forma:", dfSucursales.shape)
print("Primeras 5 filas:\\n", dfSucursales.head())
print("Últimas 3 filas:\\n", dfSucursales.tail(3))
print("Estadísticas básicas:\\n", dfSucursales.describe())
dfSucursales.info()   # info() imprime por sí mismo; no necesita print()
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 8. Acceder a los datos de un DataFrame'
                        },
                        {
                            title: 'Paso 8. Acceder a los datos de un DataFrame',
                            content: `<p>iloc selecciona por posición (fila, columna) y los corchetes con el nombre seleccionan una columna. Una condición produce una serie de True y False; usada dentro de corchetes, filtra las filas.</p>
                            
<pre class="codigo">
print("Elemento en la fila 1, columna 3:", dfSucursales.iloc[1, 3])
print("Fila en la posición 73:\\n", dfSucursales.iloc[73])
print("Columna Gerencia (primeras 5):\\n", dfSucursales["Gerencia"].head())

condicion = dfSucursales["Aseo"] &gt;= 1500
print("¿Salario de Aseo &gt;= 1500? (primeras 5):\\n", condicion.head())
print("Filas con salario de Aseo &gt;= 1500:\\n", dfSucursales[condicion])

print("Salario máximo de cada departamento:\\n", dfSucursales.max())
print("Salario máximo de toda la tabla:", dfSucursales.max().max())
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 9. Primer gráfico con Matplotlib'
                        },
                        {
                            title: 'Paso 9. Primer gráfico con Matplotlib',
                            content: `<p>Un gráfico se crea con una figura y uno o más ejes. Aquí se crean dos gráficos de barras, uno al lado del otro, porque temperatura y humedad tienen unidades distintas y no deben compartir el mismo eje.</p>
                            
<pre class="codigo">
provincias = ["Heredia", "Alajuela", "San José", "Puntarenas", "Guanacaste", "Limón", "Cartago"]
temperaturas = [17, 19, 22, 27, 28, 26, 15]
humedad = [80, 20, 35, 55, 85, 72, 10]

figura, ejes = plt.subplots(1, 2, figsize=(12, 4))

ejes[0].bar(provincias, temperaturas, color="#f05323")
ejes[0].set_title("Temperatura por provincia", fontdict={"fontsize": 14, "fontweight": "bold"})
ejes[0].set_ylabel("Temperatura (°C)")

ejes[1].bar(provincias, humedad, color="#2b93d1")
ejes[1].set_title("Humedad por provincia", fontdict={"fontsize": 14, "fontweight": "bold"})
ejes[1].set_ylabel("Humedad (%)")

for eje in ejes:
    eje.set_xlabel("Provincia")
    eje.tick_params(axis="x", rotation=45)
    eje.grid(axis="y", color="gray", linestyle="dashed", alpha=0.5)

plt.tight_layout()
plt.show()   # El programa se detiene hasta cerrar la ventana del gráfico
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 10. Gráficos a partir de un DataFrame'
                        },
                        {
                            title: 'Paso 10. Gráficos a partir de un DataFrame',
                            content: `<p>Se cuentan los pedidos de cada tipo con value_counts() y se grafican en tres gráficos de una misma figura. value_counts() devuelve los nombres en el índice y las cantidades en los valores, siempre en el mismo orden.</p>
                            
<pre class="codigo">
dfOrdenes = pd.read_csv(DATOS / "ordenesRestauranteX.csv")
print("Primeras filas de las órdenes:\\n", dfOrdenes.head())

columnas = ["Food", "Juice", "Dessert"]
titulos = ["Pedidos de comida", "Pedidos de bebidas", "¿Quiere postre?"]
colores = ["#00928d", "#2b93d1", "#c81f66"]

figura, ejes = plt.subplots(1, 3, figsize=(14, 4))
for i in range(3):
    conteo = dfOrdenes[columnas[i]].value_counts()
    ejes[i].bar(conteo.index, conteo.values, color=colores[i])
    ejes[i].set_title(titulos[i])
    ejes[i].set_ylabel("Cantidad de pedidos")
    ejes[i].tick_params(axis="x", rotation=30)

plt.tight_layout()
plt.show()
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 4. Pedidos por género'
                        },
                        {
                            title: 'Ejercicio 4. Pedidos por género',
                            content: `<p>Con dfOrdenes, haga un gráfico de barras con la cantidad de pedidos de cada género (columna Gender). Incluya título y nombres de los ejes.</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
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
print(df["sucursal"].value_counts())     # cantidad de ventas por sucursal
print(df["categoria"].unique())          # valores distintos
print(df["producto"].nunique())          # cantidad de productos distintos
print(df["total"].sum())                 # ingresos totales
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
print(df.groupby("categoria")["total"].sum())

# Varias medidas a la vez
print(df.groupby("sucursal")["total"].agg(["sum", "mean", "count"]))

# Agrupar por dos columnas
print(df.groupby(["sucursal", "categoria"])["unidades"].sum())

# Nombres propios para cada resumen
resumen = df.groupby("sucursal").agg(
    ingresos=("total", "sum"),
    ventas=("total", "count"),
    ticket_promedio=("total", "mean")
)
print(resumen)
</pre>
                            
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/groupby.png',
                            nextButton: 'Siguiente: Tablas dinámicas'
                        },
                        {
                            title: 'Tablas dinámicas',
                            content: `<p><code>pivot_table()</code> funciona como las tablas dinámicas de Excel: un grupo en las filas, otro en las columnas y un cálculo en el centro.</p>
                            
<pre class="codigo">
tabla = pd.pivot_table(
    df,
    values="total",
    index="sucursal",
    columns="categoria",
    aggfunc="sum",
    fill_value=0
)
print(tabla)
</pre>
                            
                            <p><code>crosstab()</code> cuenta cuántas veces aparece cada combinación:</p>
                            
<pre class="codigo">
print(pd.crosstab(df["sucursal"], df["categoria"]))
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
print(top5)
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
print(df.isna().sum())            # valores faltantes por columna
print(df.duplicated().sum())      # filas duplicadas
print(df.dtypes)                  # ¿cada columna tiene el tipo correcto?
print(df["sucursal"].unique())    # ¿hay valores mal escritos?
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

print(df[df["producto"].str.contains("leche", case=False)])
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
print(df["total"])                       # una columna: Series
print(df[["producto", "total"]])         # varias columnas: DataFrame
print(df.select_dtypes("number"))        # solo columnas numéricas
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
print(df.loc[10, "total"])          # fila con índice 10, columna total
print(df.iloc[0])                   # primera fila
print(df.iloc[-1])                  # última fila
print(df.iloc[:, 0:3])              # todas las filas, primeras 3 columnas
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
print(df[df["total"] &gt; 10000])

# Varias condiciones: &amp; (y), | (o), ~ (no). Cada condición entre paréntesis
print(df[(df["sucursal"] == "Heredia") &amp; (df["categoria"] == "Bebidas")])
print(df[(df["unidades"] &lt; 2) | (df["unidades"] &gt; 50)])

print(df[df["sucursal"].isin(["Heredia", "Alajuela"])])
print(df[df["precio_unitario"].between(1000, 2000)])
print(df[df["fecha"] &gt;= "2025-06-01"])

# La misma consulta escrita como texto
print(df.query("sucursal == 'Heredia' and total &gt; 10000"))
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
print(por_fecha.loc["2025-03"])            # todas las filas de marzo de 2025
print(por_fecha.sort_index())

resumen = df.groupby("sucursal")["total"].sum()
print(resumen.reset_index())               # el índice vuelve a ser una columna
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

print(df.groupby("dia_semana")["total"].mean())
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
                },
                {
                    id: 't2-taller',
                    label: 'Taller del tema 2',
                    steps: [
                        {
                            title: 'Preparar el taller',
                            content: `<p>El taller es una guía paso a paso de lo que se hace en clase. Se trabaja en el archivo <code>tema2_dataframes.py</code>, dentro de la carpeta del curso.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Archivo de datos</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>ordenesRestauranteX.csv</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Encuesta de pedidos de un restaurante: fecha, género, país, edad, comida, bebida y postre.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>datosSucursalesConNulos.csv</code></td>
                                <td style="padding:13px 12px;">Los mismos salarios, con algunos valores faltantes.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p>Los archivos de datos van en la carpeta <code>datos</code>, junto al script. El taller empieza con las bibliotecas y la ruta de esa carpeta:</p>
                            
<pre class="codigo">
from pathlib import Path

import numpy as np
import pandas as pd

DATOS = Path(__file__).parent / "datos"

# Mostrar todas las columnas al imprimir un DataFrame
pd.set_option("display.max_columns", None)
pd.set_option("display.width", 150)
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Ejecute el script con el botón <em>Run Python File</em>. Si todavía no se ha visto un paso, coméntelo para que no se ejecute.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/taller.png',
                            nextButton: 'Siguiente: Paso 1. Cargar y explorar los datos'
                        },
                        {
                            title: 'Paso 1. Cargar y explorar los datos',
                            content: `<p>Lo primero es conocer la tabla: cuántas filas y columnas tiene, cómo se llaman las columnas y qué tipo de dato tiene cada una.</p>
                            
<pre class="codigo">
df = pd.read_csv(DATOS / "ordenesRestauranteX.csv")

print("Forma:", df.shape)
print("Columnas:", list(df.columns))
print("Primeras filas:\\n", df.head())
df.info()
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 2. Primeros análisis'
                        },
                        {
                            title: 'Paso 2. Primeros análisis',
                            content: `<p>value_counts() cuenta cuántas veces aparece cada valor; unique() muestra los valores distintos y nunique() cuenta cuántos son.</p>
                            
<pre class="codigo">
print("Pedidos por tipo de comida:\\n", df["Food"].value_counts())
print("Pedidos por género:\\n", df["Gender"].value_counts())
print("Edad promedio:", round(df["Age"].mean(), 1))
print("Cantidad de países:", df["Country"].nunique())
print("Países:\\n", df["Country"].unique().tolist())
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 3. Limpiar texto'
                        },
                        {
                            title: 'Paso 3. Limpiar texto',
                            content: `<p>En el paso anterior aparecen países repetidos, como "Colombia" y "Colombia ", porque algunos tienen espacios. str.strip() quita los espacios al inicio y al final, y replace() corrige valores escritos de otra forma.</p>
                            
<pre class="codigo">
df["Country"] = df["Country"].str.strip()
df["Country"] = df["Country"].replace({
    "Malaysia": "Malasia",
    "Korea": "Corea del Sur",
    "Seychellois": "Seychelles",
    "Mauritian": "Mauricio"
})
print("Cantidad de países después de limpiar:", df["Country"].nunique())
print("Pedidos por país:\\n", df["Country"].value_counts())

# Normalizar mayúsculas y minúsculas
provincias = pd.Series(["San José", "san José", "San Jose", "SAN JOSÉ", "Alajuela"])
print("Antes:", provincias.unique().tolist())
provincias = provincias.str.lower().replace({"san jose": "san josé"}).str.title()
print("Después:", provincias.unique().tolist())
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 4. Convertir tipos de datos'
                        },
                        {
                            title: 'Paso 4. Convertir tipos de datos',
                            content: `<p>La columna Timestamp es texto, por ejemplo "2019/05/07 2:59:13 PM GMT+8". Se quita la zona horaria y se convierte a fecha con el formato del texto. Con el accesor .dt se obtienen partes de la fecha.</p>
                            
<pre class="codigo">
df["Timestamp"] = df["Timestamp"].str.replace(" GMT+8", "", regex=False)
df["Timestamp"] = pd.to_datetime(df["Timestamp"], format="%Y/%m/%d %I:%M:%S %p")

df["dia"] = df["Timestamp"].dt.day_name()
df["hora"] = df["Timestamp"].dt.hour
print(df[["Timestamp", "dia", "hora"]].head())
print("Tipos de datos:\\n", df.dtypes)
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 5. Seleccionar columnas y filas'
                        },
                        {
                            title: 'Paso 5. Seleccionar columnas y filas',
                            content: `<p>loc selecciona por etiquetas (índice y nombre de columna) e iloc por posición. Para filtrar con varias condiciones se usan &amp; (y) y | (o), con cada condición entre paréntesis.</p>
                            
<pre class="codigo">
print(df[["Gender", "Age", "Food"]].head())          # varias columnas
print(df.loc[0:4, ["Country", "Food"]])               # filas 0 a 4 (incluye la 4)
print(df.iloc[0:5, 2:5])                              # filas 0 a 4, columnas 2 a 4

costarricenses = df[df["Country"] == "Costa Rica"]
print("Personas de Costa Rica:", len(costarricenses))

mujeresCR = df[(df["Country"] == "Costa Rica") &amp; (df["Gender"] == "Femenino")]
print("Mujeres de Costa Rica:", len(mujeresCR))

jovenes = df[df["Age"].between(18, 30)]
print("Personas entre 18 y 30 años:", len(jovenes))

centroamerica = df[df["Country"].isin(["Costa Rica", "Panamá"])]
print("Personas de Costa Rica o Panamá:", len(centroamerica))

print(df.query("Food == 'Comida caribeña' and Dessert == 'Sí'").head())
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 1. Filtros'
                        },
                        {
                            title: 'Ejercicio 1. Filtros',
                            content: `<p>Muestre cuántas personas:</p>
                            <ul>
                                <li>a) Son de Francia y pidieron comida tradicional.</li>
                                <li>b) Tienen más de 50 años o menos de 15 años.</li>
                                <li>c) No quieren postre (Dessert igual a "No").</li>
                            </ul>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
                            `,
                            nextButton: 'Siguiente: Paso 6. Agrupar y resumir'
                        },
                        {
                            title: 'Paso 6. Agrupar y resumir',
                            content: `<p>groupby() divide los datos en grupos y calcula un resumen para cada uno. crosstab() cuenta las combinaciones de dos columnas y pivot_table() calcula un resumen con un grupo en las filas y otro en las columnas.</p>
                            
<pre class="codigo">
print("Edad promedio por tipo de comida:\\n", df.groupby("Food")["Age"].mean())

print(df.groupby("Gender").agg(
    pedidos=("Participant_ID", "count"),
    edad_promedio=("Age", "mean"),
    edad_maxima=("Age", "max")
))

print("Comida y postre:\\n", pd.crosstab(df["Food"], df["Dessert"]))

print("Edad promedio por género y comida:\\n",
      pd.pivot_table(df, values="Age", index="Gender", columns="Food", aggfunc="mean").round(1))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 7. Operaciones en columnas'
                        },
                        {
                            title: 'Paso 7. Operaciones en columnas',
                            content: `<p>np.where crea una columna con dos opciones según una condición; map() reemplaza valores con un diccionario y apply() aplica una función propia a cada valor.</p>
                            
<pre class="codigo">
df["grupo"] = np.where(df["Age"] &gt;= 18, "Adulto", "Menor de edad")
df["postre_numerico"] = df["Dessert"].map({"Sí": 1, "Quizás": 0.5, "No": 0})

def jornada(hora):
    if hora &lt; 12:
        return "Mañana"
    elif hora &lt; 18:
        return "Tarde"
    return "Noche"

df["jornada"] = df["hora"].apply(jornada)

print(df[["Age", "grupo", "Dessert", "postre_numerico", "hora", "jornada"]].head())
print("Pedidos por jornada:\\n", df["jornada"].value_counts())
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 2. Resúmenes'
                        },
                        {
                            title: 'Ejercicio 2. Resúmenes',
                            content: `<ul>
                                <li>a) ¿Qué porcentaje de cada tipo de comida pide postre (Dessert igual a "Sí")? Pista: cree una columna con True cuando Dessert sea "Sí" y calcule su promedio por tipo de comida (el promedio de True/False es la proporción).</li>
                                <li>b) ¿Cuál es la edad promedio de quienes piden gaseosa y de quienes piden bebida natural?</li>
                            </ul>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
                            `,
                            nextButton: 'Siguiente: Paso 8. Valores faltantes: estrategias'
                        },
                        {
                            title: 'Paso 8. Valores faltantes: estrategias',
                            content: `<p>Antes de rellenar, se elige la estrategia según el tipo de dato:</p>
                            <ul>
                                <li>Con valores extremos, la mediana representa mejor que la media.</li>
                                <li>Con datos sin extremos, se puede usar la media.</li>
                                <li>Con datos de texto (categóricos), se usa la moda.</li>
                                <li>Cuando la ausencia significa cero, se rellena con 0.</li>
                            </ul>
                            
<pre class="codigo">
salarios = pd.Series([500, 600, 550, 580, 10000, np.nan])
print("Media:", salarios.mean(), "| Mediana:", salarios.median())
print("Rellenado con la mediana:\\n", salarios.fillna(salarios.median()))

notas = pd.Series([70, 75, 80, 85, np.nan])
print("Rellenado con la media:\\n", notas.fillna(notas.mean()))

provincias = pd.Series(["San José", "Alajuela", "San José", np.nan])
print("Moda:", provincias.mode()[0])
print("Rellenado con la moda:\\n", provincias.fillna(provincias.mode()[0]))

print("Rellenado con 0:\\n", notas.fillna(0))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 9. Valores faltantes en un archivo'
                        },
                        {
                            title: 'Paso 9. Valores faltantes en un archivo',
                            content: `<p>Se revisa cuántos faltantes tiene cada columna. dropna() elimina las filas con faltantes, pero se pierden también los demás datos de esas filas.</p>
                            
<pre class="codigo">
dfNulos = pd.read_csv(DATOS / "datosSucursalesConNulos.csv")
print("Valores faltantes por columna:\\n", dfNulos.isna().sum())
print("Filas con algún faltante:\\n", dfNulos[dfNulos.isna().any(axis=1)])

sinNulos = dfNulos.dropna()
print("Filas antes:", len(dfNulos), "| después de dropna():", len(sinNulos))
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 3. Rellenar faltantes con estrategias distintas'
                        },
                        {
                            title: 'Ejercicio 3. Rellenar faltantes con estrategias distintas',
                            content: `<p>Rellene los valores faltantes de dfNulos usando una estrategia diferente en cada columna con faltantes y explique en un comentario por qué la eligió. Verifique al final que no quedan faltantes.</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
                            `,
                            nextButton: 'Siguiente: Paso 10. Duplicados y exportar'
                        },
                        {
                            title: 'Paso 10. Duplicados y exportar',
                            content: `<p>duplicated() marca las filas repetidas. Un duplicado no siempre es un error: en los salarios, dos personas pueden ganar exactamente lo mismo. En las órdenes, el identificador del participante sí debe ser único. Al final, se guarda la tabla limpia en un archivo nuevo.</p>
                            
<pre class="codigo">
print("Filas repetidas en salarios:", dfNulos.duplicated().sum())
print("Participantes repetidos en órdenes:", df["Participant_ID"].duplicated().sum())

df = df.drop_duplicates(subset="Participant_ID")
df.to_csv(DATOS / "ordenesLimpias.csv", index=False)
print("Archivo guardado:", DATOS / "ordenesLimpias.csv")
</pre>
                            `,
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
print(df["total"].describe())

# Percentiles adicionales
print(df["total"].describe(percentiles=[0.1, 0.5, 0.9]))

# Por grupo
print(df.groupby("sucursal")["total"].describe())

# Columnas de texto: cantidad, valores únicos, más frecuente
print(df[["sucursal", "categoria", "producto"]].describe())
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
print(df["total"].skew())          # asimetría

print(df[["unidades", "precio_unitario", "total"]].corr())
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
print(df["sucursal"].cat.categories)
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

print(df["rango_monto"].value_counts())
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
print(df.groupby("cuartil", observed=True)["total"].agg(["min", "max", "count"]))
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
print(df["categoria"].value_counts())
print(df["categoria"].value_counts(normalize=True) * 100)

# Frecuencias cruzadas en porcentaje por fila
print(pd.crosstab(df["sucursal"], df["rango_monto"], normalize="index") * 100)
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
                },
                {
                    id: 't3-taller',
                    label: 'Taller del tema 3',
                    steps: [
                        {
                            title: 'Preparar el taller',
                            content: `<p>El taller es una guía paso a paso de lo que se hace en clase. Se trabaja en el archivo <code>tema3_analisis_descriptivo.py</code>, dentro de la carpeta del curso.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Archivo de datos</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>datosSucursales.csv</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Salarios por departamento de una empresa (Gerencia, Desarrollo, Talento humano, Contabilidad, Diseño y Aseo).</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px;"><code>ordenesRestauranteX.csv</code></td>
                                <td style="padding:13px 12px;">Encuesta de pedidos de un restaurante: fecha, género, país, edad, comida, bebida y postre.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p>Los archivos de datos van en la carpeta <code>datos</code>, junto al script. El taller empieza con las bibliotecas y la ruta de esa carpeta:</p>
                            
<pre class="codigo">
from pathlib import Path

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

DATOS = Path(__file__).parent / "datos"
pd.set_option("display.max_columns", None)
pd.set_option("display.width", 150)
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Ejecute el script con el botón <em>Run Python File</em>. Si todavía no se ha visto un paso, coméntelo para que no se ejecute.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/taller.png',
                            nextButton: 'Siguiente: Paso 1. Cargar los datos'
                        },
                        {
                            title: 'Paso 1. Cargar los datos',
                            content: `<p>skipinitialspace=True quita el espacio que hay después de cada coma en el archivo, para que las columnas se llamen "Desarrollo" y no " Desarrollo".</p>
                            
<pre class="codigo">
df = pd.read_csv(DATOS / "datosSucursales.csv", skipinitialspace=True)
print("Forma:", df.shape)
print("Columnas:", list(df.columns))
print(df.head())
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 2. Medidas de tendencia central'
                        },
                        {
                            title: 'Paso 2. Medidas de tendencia central',
                            content: `<p>La media es el promedio; la mediana, el valor del centro de los datos ordenados; y la moda, el valor más frecuente. mode() devuelve una serie, porque puede haber más de una moda.</p>
                            
<pre class="codigo">
desarrollo = df["Desarrollo"]

print("Media:", round(desarrollo.mean(), 2))
print("Mediana:", desarrollo.median())
print("Moda:", desarrollo.mode().tolist())
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 3. Medidas de dispersión'
                        },
                        {
                            title: 'Paso 3. Medidas de dispersión',
                            content: `<p>Indican qué tan separados están los datos. Con ddof=0 se calcula la varianza de una población (todos los datos); con ddof=1, que es el valor por defecto de Pandas, la de una muestra. El rango intercuartílico (IQR) es la distancia entre el percentil 25 y el 75, es decir, el rango del 50 % central de los datos.</p>
                            
<pre class="codigo">
print("Rango:", desarrollo.max() - desarrollo.min())
print("Varianza (población, ddof=0):", round(desarrollo.var(ddof=0), 2))
print("Varianza (muestra, ddof=1):", round(desarrollo.var(), 2))
print("Desviación estándar (población):", round(desarrollo.std(ddof=0), 2))

q1 = desarrollo.quantile(0.25)
q3 = desarrollo.quantile(0.75)
print("Q1:", q1, "| Q3:", q3, "| IQR:", q3 - q1)
print("Coeficiente de variación:", round(desarrollo.std() / desarrollo.mean(), 3))
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 1. Medidas de Talento humano'
                        },
                        {
                            title: 'Ejercicio 1. Medidas de Talento humano',
                            content: `<p>Obtenga la media, la mediana, la moda, la varianza y la desviación estándar de la columna Talento humano. ¿Por qué la media y la mediana son distintas?</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
                            `,
                            nextButton: 'Siguiente: Paso 4. Resumen de todos los departamentos'
                        },
                        {
                            title: 'Paso 4. Resumen de todos los departamentos',
                            content: `<p>describe() resume todas las columnas numéricas. agg() permite elegir las medidas. skew() mide la asimetría y corr() la correlación entre columnas.</p>
                            
<pre class="codigo">
print("Resumen:\\n", df.describe().round(1))
print("Medidas elegidas:\\n", df.agg(["mean", "median", "std", "min", "max"]).round(1))
print("Asimetría:\\n", df.skew().round(2))
print("Correlación:\\n", df.corr().round(2))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 5. Categorizar datos numéricos'
                        },
                        {
                            title: 'Paso 5. Categorizar datos numéricos',
                            content: `<p>pd.cut() crea categorías con límites que define el analista; pd.qcut() divide los datos en grupos con aproximadamente la misma cantidad de filas. value_counts(normalize=True) da la proporción de cada categoría.</p>
                            
<pre class="codigo">
df["rango_desarrollo"] = pd.cut(
    df["Desarrollo"],
    bins=[-1, 5000, 8000, float("inf")],
    labels=["Bajo", "Medio", "Alto"]
)
print("Cantidad por rango:\\n", df["rango_desarrollo"].value_counts())
print("Porcentaje por rango:\\n", (df["rango_desarrollo"].value_counts(normalize=True) * 100).round(1))

dfOrdenes = pd.read_csv(DATOS / "ordenesRestauranteX.csv")
dfOrdenes["grupo_edad"] = pd.cut(
    dfOrdenes["Age"],
    bins=[0, 17, 29, 44, 59, 120],
    labels=["Menor de 18", "18 a 29", "30 a 44", "45 a 59", "60 o más"]
)
print("Personas por grupo de edad:\\n", dfOrdenes["grupo_edad"].value_counts(sort=False))

# Porcentaje de cada tipo de comida dentro de cada grupo de edad
print((pd.crosstab(dfOrdenes["grupo_edad"], dfOrdenes["Food"], normalize="index") * 100).round(1))

dfOrdenes["cuartil_edad"] = pd.qcut(dfOrdenes["Age"], q=4, labels=["Q1", "Q2", "Q3", "Q4"])
print(dfOrdenes.groupby("cuartil_edad", observed=True)["Age"].agg(["min", "max", "count"]))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 6. Gráficos de resumen'
                        },
                        {
                            title: 'Paso 6. Gráficos de resumen',
                            content: `<p>El histograma muestra la distribución de una variable; el diagrama de caja (boxplot) resume varias distribuciones y marca los posibles atípicos; y las barras comparan un valor entre grupos. savefig() guarda la figura.</p>
                            
<pre class="codigo">
figura, ejes = plt.subplots(1, 3, figsize=(16, 4))

ejes[0].hist(df["Desarrollo"], bins=15, color="#2b93d1", edgecolor="white")
ejes[0].set_title("Distribución de salarios de Desarrollo")
ejes[0].set_xlabel("Salario")

departamentos = ["Gerencia", "Desarrollo", "Talento humano", "Contabilidad", "Diseño", "Aseo"]
# En Matplotlib anterior a la versión 3.9, use labels= en lugar de tick_labels=
ejes[1].boxplot([df[d] for d in departamentos], tick_labels=departamentos)
ejes[1].set_title("Salarios por departamento")
ejes[1].tick_params(axis="x", rotation=45)

promedios = df[departamentos].mean().sort_values()
ejes[2].barh(promedios.index, promedios.values, color="#00928d")
ejes[2].set_title("Salario promedio por departamento")

plt.tight_layout()
plt.savefig(Path(__file__).parent / "resumen_salarios.png", dpi=150)
plt.show()
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 7. Detectar valores atípicos'
                        },
                        {
                            title: 'Paso 7. Detectar valores atípicos',
                            content: `<p>Regla del IQR: es atípico lo que está a más de 1,5 IQR por debajo de Q1 o por encima de Q3. Puntaje Z: es atípico lo que está a más de 3 desviaciones estándar de la media. Observe que en estos datos casi todos ganan lo mismo, el IQR es muy pequeño y la regla del IQR marca muchos valores.</p>
                            
<pre class="codigo">
gerencia = df["Gerencia"]

q1 = gerencia.quantile(0.25)
q3 = gerencia.quantile(0.75)
iqr = q3 - q1
limiteInferior = q1 - 1.5 * iqr
limiteSuperior = q3 + 1.5 * iqr
atipicosIQR = gerencia[(gerencia &lt; limiteInferior) | (gerencia &gt; limiteSuperior)]
print(f"IQR = {iqr}. Límites: {limiteInferior} y {limiteSuperior}")
print("Atípicos según IQR:", len(atipicosIQR), sorted(atipicosIQR.tolist()))

z = (gerencia - gerencia.mean()) / gerencia.std()
atipicosZ = gerencia[z.abs() &gt; 3]
print("Atípicos según puntaje Z:", len(atipicosZ), sorted(atipicosZ.tolist()))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 8. Tratar los valores atípicos'
                        },
                        {
                            title: 'Paso 8. Tratar los valores atípicos',
                            content: `<p>Un salario de 0 es un error de registro: se convierte en faltante y se rellena con la mediana. Un salario muy alto puede ser real (por ejemplo, un gerente general), así que no se elimina; se puede recortar con clip() para limitar su efecto en los promedios. Compare los resultados antes y después.</p>
                            
<pre class="codigo">
dfTratado = df[departamentos].copy()

ceros = (dfTratado == 0).sum()
print("Salarios en 0 por departamento:\\n", ceros)

dfTratado = dfTratado.replace(0, np.nan)
dfTratado = dfTratado.fillna(dfTratado.median())

gerenciaRecortada = dfTratado["Gerencia"].clip(upper=dfTratado["Gerencia"].quantile(0.95))

print("Media de Gerencia original:", round(df["Gerencia"].mean(), 2))
print("Media sin ceros:", round(dfTratado["Gerencia"].mean(), 2))
print("Media sin ceros y recortada al percentil 95:", round(gerenciaRecortada.mean(), 2))
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 2. Atípicos en Contabilidad'
                        },
                        {
                            title: 'Ejercicio 2. Atípicos en Contabilidad',
                            content: `<ul>
                                <li>a) Detecte los atípicos de Contabilidad con el puntaje Z.</li>
                                <li>b) ¿Hay algún salario que sea claramente un error? Corríjalo con la mediana.</li>
                                <li>c) Compare la media antes y después de la corrección.</li>
                            </ul>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
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

print(modelo.evaluate(X_test, y_test))
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
print(pd.Series(bosque.feature_importances_, index=X.columns).sort_values(ascending=False))
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
                },
                {
                    id: 't4-taller',
                    label: 'Taller del tema 4',
                    steps: [
                        {
                            title: 'Preparar el taller',
                            content: `<p>El taller es una guía paso a paso de lo que se hace en clase. Se trabaja en el archivo <code>tema4_analitica_avanzada.py</code>, dentro de la carpeta del curso.</p>
                            <div style="overflow-x:auto; border:1px solid #9cc8ff; border-radius:14px; box-shadow:0 6px 20px rgba(0,110,174,.12);">
                            <table style="width:100%; border-collapse:collapse; font-family:Arial, sans-serif;">
                            <thead>
                            <tr>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Archivo de datos</th>
                                <th style="padding:14px 12px; background:#2b93d1; color:#fff; text-align:left;">Contenido</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>celsius_a_fahrenheit.csv</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Temperaturas en grados Celsius y su equivalente en Fahrenheit.</td>
                            </tr>
                            <tr style="background:#f3f9ff;">
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;"><code>Teen_Mental_Health_Dataset.csv</code></td>
                                <td style="padding:13px 12px; border-bottom:1px solid #dceeff;">Hábitos, rendimiento académico y bienestar de adolescentes.</td>
                            </tr>
                            <tr>
                                <td style="padding:13px 12px;"><code>ventasDiarias.csv</code></td>
                                <td style="padding:13px 12px;">Ventas diarias de un comercio durante 2024 y 2025.</td>
                            </tr>
                            </tbody>
                            </table>
                            </div>
                            <p>Los archivos de datos van en la carpeta <code>datos</code>, junto al script. El taller empieza con las bibliotecas y la ruta de esa carpeta:</p>
                            
<pre class="codigo">
from pathlib import Path

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import tensorflow as tf
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (mean_absolute_error, mean_squared_error, r2_score,
                             accuracy_score, confusion_matrix, classification_report)
from statsmodels.tsa.seasonal import seasonal_decompose

DATOS = Path(__file__).parent / "datos"
pd.set_option("display.max_columns", None)
pd.set_option("display.width", 150)
</pre>
                            
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Ejecute el script con el botón <em>Run Python File</em>. Si todavía no se ha visto un paso, coméntelo para que no se ejecute.</p>
                            `,
                            image: 'https://raw.githubusercontent.com/vi-micrositios/cenfotec/main/Microcursos/SOFT-670/imgs/taller.png',
                            nextButton: 'Siguiente: Paso 1. Primer modelo con Keras: de Celsius a Fahrenheit'
                        },
                        {
                            title: 'Paso 1. Primer modelo con Keras: de Celsius a Fahrenheit',
                            content: `<p>Una red con una sola neurona aprende la relación F = C × 1,8 + 32 a partir de ejemplos, sin que se le dé la fórmula. La tasa de aprendizaje (learning_rate) controla el tamaño de cada ajuste: si es muy grande, el modelo no converge; si es muy pequeña, aprende muy lento.</p>
                            
<pre class="codigo">
dfTemperaturas = pd.read_csv(DATOS / "celsius_a_fahrenheit.csv")
print(dfTemperaturas.head())

xTemperaturas = dfTemperaturas[["Celsius"]].values      # variable independiente
yTemperaturas = dfTemperaturas["Fahrenheit"].values     # variable objetivo

modeloTemperatura = tf.keras.Sequential([
    tf.keras.Input(shape=(1,)),
    tf.keras.layers.Dense(units=1)
])
modeloTemperatura.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=0.1),
                          loss="mean_squared_error")
historialTemp = modeloTemperatura.fit(xTemperaturas, yTemperaturas, epochs=500, verbose=0)

peso, sesgo = modeloTemperatura.get_weights()
print(f"El modelo aprendió: F = C × {peso[0][0]:.3f} + {sesgo[0]:.3f}")
print("Predicción para -8 °C:", modeloTemperatura.predict(np.array([[-8.0]]), verbose=0)[0][0])

plt.plot(historialTemp.history["loss"])
plt.title("Pérdida durante el entrenamiento")
plt.xlabel("Época")
plt.ylabel("Error cuadrático medio")
plt.show()
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 2. Cargar y limpiar los datos de adolescentes'
                        },
                        {
                            title: 'Paso 2. Cargar y limpiar los datos de adolescentes',
                            content: `<p>Antes de entrenar un modelo, los datos deben estar limpios. En este archivo hay filas con faltantes y textos escritos de varias formas: "Medium" y "medium", o "Instagra" en lugar de "instagram".</p>
                            
<pre class="codigo">
df = pd.read_csv(DATOS / "Teen_Mental_Health_Dataset.csv")
print("Forma:", df.shape)
print("Faltantes por columna:\\n", df.isna().sum())

df = df.dropna()

columnasTexto = ["gender", "platform_usage", "social_interaction_level", "depression_risk"]
for columna in columnasTexto:
    df[columna] = df[columna].str.strip().str.lower()

df["platform_usage"] = df["platform_usage"].replace({"instagra": "instagram", "nstagram": "instagram"})

for columna in columnasTexto:
    print(columna, "-&gt;", df[columna].unique().tolist())
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 3. Explorar las relaciones'
                        },
                        {
                            title: 'Paso 3. Explorar las relaciones',
                            content: `<p>Antes de modelar, se grafica cada variable contra el rendimiento académico para ver cuáles parecen relacionarse con él.</p>
                            
<pre class="codigo">
variables = ["screen_time_before_sleep", "sleep_hours", "stress_level", "physical_activity"]

plt.figure(figsize=(10, 8))
for i, variable in enumerate(variables):
    plt.subplot(2, 2, i + 1)
    plt.scatter(df[variable], df["academic_performance"], alpha=0.3)
    plt.title(f"{variable} vs. rendimiento")
    plt.xlabel(variable)
    plt.ylabel("Rendimiento académico")
plt.tight_layout()
plt.show()

print("Correlación con el rendimiento:\\n",
      df[variables + ["academic_performance"]].corr()["academic_performance"].round(2))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 4. Preparar los datos para un modelo'
                        },
                        {
                            title: 'Paso 4. Preparar los datos para un modelo',
                            content: `<p>X contiene las variables independientes y y la variable objetivo. Se separa un 20 % de los datos para la prueba final. El escalador se ajusta solo con los datos de entrenamiento y después se aplica a los de prueba.</p>
                            
<pre class="codigo">
X = df[variables]
y = df["academic_performance"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
print("Entrenamiento:", X_train.shape, "| Prueba:", X_test.shape)

escalador = StandardScaler()
X_train_e = escalador.fit_transform(X_train)
X_test_e = escalador.transform(X_test)
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 5. Modelo de referencia: regresión lineal'
                        },
                        {
                            title: 'Paso 5. Modelo de referencia: regresión lineal',
                            content: `<p>Se empieza con un modelo sencillo. Cualquier modelo más complejo debe superarlo para que valga la pena. MAE es el error promedio; RMSE castiga más los errores grandes; R² indica qué proporción de la variación se explica.</p>
                            
<pre class="codigo">
regresion = LinearRegression()
regresion.fit(X_train, y_train)
predLineal = regresion.predict(X_test)

print("Regresión lineal")
print("  MAE :", round(mean_absolute_error(y_test, predLineal), 3))
print("  RMSE:", round(np.sqrt(mean_squared_error(y_test, predLineal)), 3))
print("  R²  :", round(r2_score(y_test, predLineal), 3))
print("Coeficientes:\\n", pd.Series(regresion.coef_, index=variables).round(3))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 6. Red neuronal para regresión'
                        },
                        {
                            title: 'Paso 6. Red neuronal para regresión',
                            content: `<p>La red tiene dos capas ocultas. EarlyStopping detiene el entrenamiento cuando la pérdida de validación deja de mejorar, para evitar el sobreajuste. Para predecir con datos nuevos, también hay que escalarlos.</p>
                            
<pre class="codigo">
red = tf.keras.Sequential([
    tf.keras.Input(shape=(len(variables),)),
    tf.keras.layers.Dense(16, activation="relu"),
    tf.keras.layers.Dense(8, activation="relu"),
    tf.keras.layers.Dense(1)
])
red.compile(optimizer="adam", loss="mean_squared_error", metrics=["mae"])

parada = tf.keras.callbacks.EarlyStopping(monitor="val_loss", patience=15,
                                          restore_best_weights=True)
historial = red.fit(X_train_e, y_train.values, epochs=300, validation_split=0.2,
                    callbacks=[parada], verbose=0)
print("Épocas entrenadas:", len(historial.history["loss"]))

predRed = red.predict(X_test_e, verbose=0).ravel()
print("Red neuronal")
print("  MAE :", round(mean_absolute_error(y_test, predRed), 3))
print("  R²  :", round(r2_score(y_test, predRed), 3))

plt.plot(historial.history["loss"], label="Entrenamiento")
plt.plot(historial.history["val_loss"], label="Validación")
plt.title("Curva de entrenamiento")
plt.xlabel("Época")
plt.ylabel("Pérdida")
plt.legend()
plt.show()

# Predicción para un estudiante nuevo
nuevo = pd.DataFrame([[2.4, 6.4, 4, 0.9]], columns=variables)
print("Rendimiento estimado (red):", red.predict(escalador.transform(nuevo), verbose=0)[0][0])
print("Rendimiento estimado (lineal):", regresion.predict(nuevo)[0])
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 1. Más variables'
                        },
                        {
                            title: 'Ejercicio 1. Más variables',
                            content: `<p>Agregue daily_social_media_hours y anxiety_level a las variables de la regresión lineal. ¿Mejora el R² en los datos de prueba?</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
                            `,
                            nextButton: 'Siguiente: Paso 7. Clasificación con un bosque aleatorio'
                        },
                        {
                            title: 'Paso 7. Clasificación con un bosque aleatorio',
                            content: `<p>Ahora se predice una categoría: el nivel de riesgo (low, medium o high). La exactitud se compara con la de un modelo que siempre responde la clase más frecuente. La matriz de confusión muestra en qué clases se equivoca.</p>
                            
<pre class="codigo">
variablesClase = ["daily_social_media_hours", "sleep_hours", "screen_time_before_sleep",
                  "physical_activity", "stress_level", "anxiety_level"]
Xc = df[variablesClase]
yc = df["depression_risk"]

Xc_train, Xc_test, yc_train, yc_test = train_test_split(
    Xc, yc, test_size=0.2, random_state=42, stratify=yc)

bosque = RandomForestClassifier(n_estimators=200, random_state=42)
bosque.fit(Xc_train, yc_train)
predClase = bosque.predict(Xc_test)

print("Exactitud si siempre se responde la clase más frecuente:",
      round(yc_test.value_counts(normalize=True).max(), 3))
print("Exactitud del bosque aleatorio:", round(accuracy_score(yc_test, predClase), 3))

clases = ["low", "medium", "high"]
matriz = confusion_matrix(yc_test, predClase, labels=clases)
print("Matriz de confusión (filas = real, columnas = predicho):\\n",
      pd.DataFrame(matriz, index=clases, columns=clases))
print(classification_report(yc_test, predClase))
print("Importancia de las variables:\\n",
      pd.Series(bosque.feature_importances_, index=variablesClase).sort_values(ascending=False).round(3))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 8. Optimizar el modelo'
                        },
                        {
                            title: 'Paso 8. Optimizar el modelo',
                            content: `<p>La validación cruzada evalúa el modelo en varias divisiones de los datos de entrenamiento. GridSearchCV prueba combinaciones de hiperparámetros y elige la mejor. Los datos de prueba se usan solo al final.</p>
                            
<pre class="codigo">
puntajes = cross_val_score(bosque, Xc_train, yc_train, cv=3, scoring="f1_macro")
print("F1 por división:", puntajes.round(3), "| promedio:", round(puntajes.mean(), 3))

parametros = {
    "n_estimators": [100, 200],
    "max_depth": [5, 10, None]
}
busqueda = GridSearchCV(RandomForestClassifier(random_state=42), parametros,
                        cv=3, scoring="f1_macro")
busqueda.fit(Xc_train, yc_train)
print("Mejores hiperparámetros:", busqueda.best_params_)
print("F1 en prueba del mejor modelo:", round(busqueda.score(Xc_test, yc_test), 3))
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 9. Series temporales: explorar'
                        },
                        {
                            title: 'Paso 9. Series temporales: explorar',
                            content: `<p>Con la fecha como índice, resample() agrupa por periodo y rolling() calcula un promedio móvil que suaviza el ruido. seasonal_decompose() separa la tendencia, la estacionalidad semanal (period=7) y el ruido.</p>
                            
<pre class="codigo">
ventas = pd.read_csv(DATOS / "ventasDiarias.csv", parse_dates=["fecha"], index_col="fecha")["ventas"]
print(ventas.head())

mensual = ventas.resample("ME").sum()
print("Ventas por mes (primeros 6):\\n", mensual.head(6))
print("Ventas promedio por día de la semana:\\n",
      ventas.groupby(ventas.index.day_name()).mean().round(0))

movil = ventas.rolling(window=7).mean()
plt.figure(figsize=(12, 4))
plt.plot(ventas, alpha=0.4, label="Diaria")
plt.plot(movil, label="Promedio móvil de 7 días")
plt.title("Ventas diarias")
plt.legend()
plt.show()

descomposicion = seasonal_decompose(ventas, model="additive", period=7)
descomposicion.plot()
plt.show()
</pre>
                            `,
                            nextButton: 'Siguiente: Paso 10. Series temporales: predecir'
                        },
                        {
                            title: 'Paso 10. Series temporales: predecir',
                            content: `<p>Se crean variables con las ventas de días anteriores (rezagos). Los datos se separan respetando el tiempo: se entrena con el pasado y se prueba con los últimos meses. El modelo se compara con una referencia ingenua: "las ventas serán iguales a las del mismo día de la semana anterior".</p>
                            
<pre class="codigo">
datos = ventas.to_frame()
datos["lag_1"] = datos["ventas"].shift(1)
datos["lag_7"] = datos["ventas"].shift(7)
datos["media_7"] = datos["ventas"].shift(1).rolling(7).mean()
datos = datos.dropna()

corte = int(len(datos) * 0.8)
entrenamiento = datos.iloc[:corte]
prueba = datos.iloc[corte:].copy()

columnasX = ["lag_1", "lag_7", "media_7"]
modeloSerie = LinearRegression()
modeloSerie.fit(entrenamiento[columnasX], entrenamiento["ventas"])
prueba["prediccion"] = modeloSerie.predict(prueba[columnasX])

print("MAE referencia ingenua:", round(mean_absolute_error(prueba["ventas"], prueba["lag_7"])))
print("MAE regresión con rezagos:", round(mean_absolute_error(prueba["ventas"], prueba["prediccion"])))

plt.figure(figsize=(12, 4))
plt.plot(prueba["ventas"], label="Real")
plt.plot(prueba["prediccion"], label="Predicción")
plt.title("Predicción de ventas en el periodo de prueba")
plt.legend()
plt.show()
</pre>
                            `,
                            nextButton: 'Siguiente: Ejercicio 2. Mejorar la predicción'
                        },
                        {
                            title: 'Ejercicio 2. Mejorar la predicción',
                            content: `<p>Agregue variables del día de la semana al modelo del paso anterior y compare el MAE. Pista: pd.get_dummies(datos.index.dayofweek, prefix="dia") crea una columna de 0 y 1 para cada día.</p>
                            <p class="nota">
                            <i class="fa-regular fa-lightbulb" style="color: #c81f66;" aria-hidden="true"></i>
                            Escriba la solución en el script y ejecútelo para comprobar el resultado.</p>
                            `,
                            nextButton: ''
                        }
                    ]
                }
            ]
        }
    ]
};